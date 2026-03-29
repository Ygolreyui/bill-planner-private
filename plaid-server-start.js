const express = require("express");
const cors = require("cors");
const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const config = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(config);
let accessToken = "";
let institutionName = "";

app.post("/api/plaid/create_link_token", async (req, res) => {
  try {
    const response = await plaidClient.linkTokenCreate({
      user: { client_user_id: "bill-planner-local-user" },
      client_name: "Bill Planner",
      products: ["transactions"],
      country_codes: ["US"],
      language: "en",
    });
    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create link token" });
  }
});

app.post("/api/plaid/exchange_public_token", async (req, res) => {
  try {
    const { public_token, institution_name } = req.body || {};
    const exchange = await plaidClient.itemPublicTokenExchange({ public_token });
    accessToken = exchange.data.access_token;
    institutionName = institution_name || "Connected bank";
    res.json({ ok: true, institution_name: institutionName });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to exchange public token" });
  }
});

app.get("/api/plaid/balance", async (req, res) => {
  try {
    if (!accessToken) return res.status(400).json({ error: "No linked item yet" });
    const response = await plaidClient.accountsBalanceGet({ access_token: accessToken });
    res.json({ accounts: response.data.accounts, institution_name: institutionName });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch balances" });
  }
});

app.get("/api/plaid/transactions", async (req, res) => {
  try {
    if (!accessToken) return res.status(400).json({ error: "No linked item yet" });
    const today = new Date();
    const start = new Date(today);
    start.setDate(start.getDate() - 30);
    const response = await plaidClient.transactionsGet({
      access_token: accessToken,
      start_date: start.toISOString().slice(0, 10),
      end_date: today.toISOString().slice(0, 10),
      options: { count: 250, offset: 0 },
    });
    res.json({ transactions: response.data.transactions, institution_name: institutionName });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Plaid server listening on http://localhost:${process.env.PORT || 3001}`);
});
