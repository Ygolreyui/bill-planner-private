/* =========================
   DOM REFERENCES
========================= */

const el = {
  currentBalanceInput: document.getElementById("currentBalance"),
  nextPayDateInput: document.getElementById("nextPayDate"),
  nextPayAmountInput: document.getElementById("nextPayAmount"),
  payFrequencyInput: document.getElementById("payFrequency"),

  paycheck1GrossInput: document.getElementById("paycheck1Gross"),
  paycheck1NetInput: document.getElementById("paycheck1Net"),
  paycheck1OtInput: document.getElementById("paycheck1Ot"),
  paycheck2GrossInput: document.getElementById("paycheck2Gross"),
  paycheck2NetInput: document.getElementById("paycheck2Net"),
  paycheck2OtInput: document.getElementById("paycheck2Ot"),
  paycheck3GrossInput: document.getElementById("paycheck3Gross"),
  paycheck3NetInput: document.getElementById("paycheck3Net"),
  paycheck3OtInput: document.getElementById("paycheck3Ot"),

  paycheckEstimateResults: document.getElementById("paycheckEstimateResults"),
  applyEstimatedPayBtn: document.getElementById("applyEstimatedPayBtn"),

  tabButtons: document.querySelectorAll(".tab-btn"),
  tabContents: document.querySelectorAll(".tab-content"),

  timelineList: document.getElementById("timelineList"),
  forecastTimeline: document.getElementById("forecastTimeline"),
  paycheckAssignments: document.getElementById("paycheckAssignments"),

  categoryTotalsElement: document.getElementById("categoryTotals"),
  categoryChartCanvas: document.getElementById("categoryChart"),
  forecastCategoryTotalsElement: document.getElementById(
    "forecastCategoryTotals",
  ),
  forecastCategoryChartCanvas: document.getElementById("forecastCategoryChart"),
  balanceForecastChartCanvas: document.getElementById("balanceForecastChart"),

  stressTestModeInput: document.getElementById("stressTestMode"),
  stressTestAmountInput: document.getElementById("stressTestAmount"),
  stressTestDaysInput: document.getElementById("stressTestDays"),
  stressTestMessage: document.getElementById("stressTestMessage"),

  totalDueElement: document.getElementById("totalDue"),
  safeToSpendElement: document.getElementById("safeToSpend"),
  dashboardCurrentBalanceElement: document.getElementById(
    "dashboardCurrentBalance",
  ),
  projectedBeforePaycheckElement: document.getElementById(
    "projectedBeforePaycheck",
  ),
  dashboardNextPayAmountElement: document.getElementById(
    "dashboardNextPayAmount",
  ),
  projectedAfterPaycheckElement: document.getElementById(
    "projectedAfterPaycheck",
  ),
  daysUntilPaydayElement: document.getElementById("daysUntilPayday"),
  dailySafeSpendElement: document.getElementById("dailySafeSpend"),

  bucketNameInput: document.getElementById("bucketName"),
  bucketAmountInput: document.getElementById("bucketAmount"),
  bucketCategoryInput: document.getElementById("bucketCategory"),
  bucketFrequencyInput: document.getElementById("bucketFrequency"),
  addBucketBtn: document.getElementById("addBucketBtn"),
  cancelBucketEditBtn: document.getElementById("cancelBucketEditBtn"),
  bucketList: document.getElementById("bucketList"),

  billNameInput: document.getElementById("billName"),
  billFormTitle: document.getElementById("billFormTitle"),
  billAmountInput: document.getElementById("billAmount"),
  billDueDateInput: document.getElementById("billDueDate"),
  billCategoryInput: document.getElementById("billCategory"),
  billFrequencyInput: document.getElementById("billFrequency"),
  billPriorityInput: document.getElementById("billPriority"),
  billFormCard: document.getElementById("billEntryCard"),
  billNotesInput: document.getElementById("billNotes"),
  billAutopayInput: document.getElementById("billAutopay"),
  billReminderDaysInput: document.getElementById("billReminderDays"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  addBillBtn: document.getElementById("addBillBtn"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
  billSearchInput: document.getElementById("billSearch"),
  filterCategoryInput: document.getElementById("filterCategory"),
  filterStatusInput: document.getElementById("filterStatus"),
  billList: document.getElementById("billList"),
  billsOverview: document.getElementById("billsOverview"),

  exportDataBtn: document.getElementById("exportDataBtn"),
  importDataBtn: document.getElementById("importDataBtn"),
  importFileInput: document.getElementById("importFileInput"),
  resetAppBtn: document.getElementById("resetAppBtn"),

  saveIndicator: document.getElementById("saveIndicator"),
  cashFlowWarningCard: document.getElementById("cashFlowWarningCard"),
  cashFlowWarningMessage: document.getElementById("cashFlowWarningMessage"),
  upcomingBillsList: document.getElementById("upcomingBillsList"),

  allocationModeInput: document.getElementById("allocationMode"),

  baseNetPayInput: document.getElementById("baseNetPay"),
  expectedOtNetInput: document.getElementById("expectedOtNet"),
  incomeScenarioInput: document.getElementById("incomeScenario"),
  incomeScenarioResults: document.getElementById("incomeScenarioResults"),
  applyIncomeScenarioBtn: document.getElementById("applyIncomeScenarioBtn"),
  useIncomeScenarioForForecastInput: document.getElementById(
    "useIncomeScenarioForForecast",
  ),
  forecastPaySourceMessage: document.getElementById("forecastPaySourceMessage"),
  forecastPaySourceMessageForecast: document.getElementById(
    "forecastPaySourceMessageForecast",
  ),
  useEstimatorAverageBtn: document.getElementById("useEstimatorAverageBtn"),
  useManualNextPayBtn: document.getElementById("useManualNextPayBtn"),
  copyScenarioToManualBtn: document.getElementById("copyScenarioToManualBtn"),
  incomePlanningPreview: document.getElementById("incomePlanningPreview"),
  presetLowOtBtn: document.getElementById("presetLowOtBtn"),
  presetNormalOtBtn: document.getElementById("presetNormalOtBtn"),
  presetHeavyOtBtn: document.getElementById("presetHeavyOtBtn"),

  debtNameInput: document.getElementById("debtName"),
  debtBalanceInput: document.getElementById("debtBalance"),
  debtAprInput: document.getElementById("debtApr"),
  debtMinPaymentInput: document.getElementById("debtMinPayment"),
  debtExtraPaymentInput: document.getElementById("debtExtraPayment"),
  debtPriorityInput: document.getElementById("debtPriority"),
  addDebtBtn: document.getElementById("addDebtBtn"),
  cancelDebtEditBtn: document.getElementById("cancelDebtEditBtn"),
  debtPlannerSummary: document.getElementById("debtPlannerSummary"),
  debtList: document.getElementById("debtList"),

  emergencySavingsBalanceInput: document.getElementById(
    "emergencySavingsBalance",
  ),
  emergencyFloorInput: document.getElementById("emergencyFloor"),
  lifeEventNameInput: document.getElementById("lifeEventName"),
  lifeEventTypeInput: document.getElementById("lifeEventType"),
  lifeEventAmountInput: document.getElementById("lifeEventAmount"),
  lifeEventDateInput: document.getElementById("lifeEventDate"),
  lifeEventFundingInput: document.getElementById("lifeEventFunding"),
  addLifeEventBtn: document.getElementById("addLifeEventBtn"),
  cancelLifeEventEditBtn: document.getElementById("cancelLifeEventEditBtn"),
  lifeEventSummary: document.getElementById("lifeEventSummary"),
  lifeEventList: document.getElementById("lifeEventList"),

  householdMyShareInput: document.getElementById("householdMyShare"),
  householdPartnerShareInput: document.getElementById("householdPartnerShare"),
  applyHouseholdSplitInput: document.getElementById("applyHouseholdSplit"),
  sharedCategoryInputs: document.querySelectorAll(".shared-category-toggle"),
  householdSplitSummary: document.getElementById("householdSplitSummary"),
  forecastPlanningInsights: document.getElementById("forecastPlanningInsights"),

  workHourlyRateInput: document.getElementById("workHourlyRate"),
  workBaseHoursInput: document.getElementById("workBaseHours"),
  workOtMultiplierInput: document.getElementById("workOtMultiplier"),
  workTargetBufferInput: document.getElementById("workTargetBuffer"),
  workExtraGoalInput: document.getElementById("workExtraGoal"),
  workNetRetentionInput: document.getElementById("workNetRetention"),
  workPlannerSummary: document.getElementById("workPlannerSummary"),
  paydayReadinessSummary: document.getElementById("paydayReadinessSummary"),
  financialStatusSummary: document.getElementById("financialStatusSummary"),
  starterGuideCard: document.getElementById("starterGuideCard"),
  starterGuideSummary: document.getElementById("starterGuideSummary"),
  paycheckAllocationSummary: document.getElementById(
    "paycheckAllocationSummary",
  ),

  paystubImageInput: document.getElementById("paystubImageInput"),
  scanPaystubImageBtn: document.getElementById("scanPaystubImageBtn"),
  paystubOcrStatus: document.getElementById("paystubOcrStatus"),
  paystubTextInput: document.getElementById("paystubText"),
  analyzePaystubBtn: document.getElementById("analyzePaystubBtn"),
  clearPaystubBtn: document.getElementById("clearPaystubBtn"),
  paystubAnalysisResults: document.getElementById("paystubAnalysisResults"),
  addParsedPaystubBtn: document.getElementById("addParsedPaystubBtn"),
  usePaystubAverageBtn: document.getElementById("usePaystubAverageBtn"),
  paystubHistoryList: document.getElementById("paystubHistoryList"),
  paystubHistorySummary: document.getElementById("paystubHistorySummary"),
};

let categoryChart = null;
let forecastCategoryChart = null;
let balanceForecastChart = null;

/* =========================
   STATE
========================= */

const bills = [];
const spendingBuckets = [];
const debts = [];
const lifeEvents = [];
const paystubHistory = [];

let latestParsedPaystub = null;
let isProgrammaticPaystubUpdate = false;

let editIndex = null;
let bucketEditIndex = null;
let debtEditIndex = null;
let lifeEventEditIndex = null;

const ACTIVE_TAB_KEY = "billPlannerActiveTab";
const STORAGE_KEYS = {
  app: "billPlannerData",
  estimator: "billPlannerEstimatorData",
  income: "billPlannerIncomePlanningData",
};

/* =========================
   GENERIC HELPERS
========================= */

function setHtml(node, html) {
  if (node) node.innerHTML = html;
}

function formatCurrency(amount) {
  const value = Number(amount) || 0;
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function parseDisplayNumber(text) {
  if (text === null || text === undefined) return null;
  const raw = String(text).trim();
  if (!raw) return null;

  const hasCurrency = raw.includes("$");
  const hasPercent = raw.includes("%");
  const numeric = Number(raw.replace(/[^\d.-]/g, ""));

  if (Number.isNaN(numeric)) return null;

  return {
    value: numeric,
    decimals: /\.\d{1,2}/.test(raw) ? 2 : 0,
    format: hasCurrency
      ? "currency"
      : hasPercent
        ? "percent"
        : raw.includes("hrs")
          ? "hours"
          : "number",
    suffix: raw.includes("hrs") ? " hrs" : "",
    prefix: raw.startsWith("$") || hasCurrency ? "$" : "",
  };
}

function formatAnimatedValue(value, meta) {
  const safeMeta = meta || {
    format: "number",
    decimals: 0,
    suffix: "",
    prefix: "",
  };
  const safeValue = Number(value) || 0;

  if (safeMeta.format === "currency") {
    return formatCurrency(safeValue);
  }

  if (safeMeta.format === "percent") {
    return `${safeValue.toFixed(safeMeta.decimals || 0)}%`;
  }

  if (safeMeta.format === "hours") {
    const decimals =
      safeMeta.decimals || (Math.abs(safeValue % 1) > 0.001 ? 2 : 0);
    return `${safeValue.toFixed(decimals)}${safeMeta.suffix || " hrs"}`;
  }

  return `${safeMeta.prefix || ""}${safeValue.toFixed(safeMeta.decimals || 0)}${safeMeta.suffix || ""}`;
}

function animateNumberText(node, nextText) {
  if (!node) return;
  const meta = parseDisplayNumber(nextText);

  if (!meta) {
    node.textContent = nextText;
    return;
  }

  const previousMeta =
    parseDisplayNumber(node.dataset.animatedValue || node.textContent) || meta;
  const startValue = Number(
    node.dataset.animatedNumeric || previousMeta.value || 0,
  );
  const endValue = meta.value;

  if (Math.abs(endValue - startValue) < 0.005) {
    node.textContent = nextText;
    node.dataset.animatedValue = nextText;
    node.dataset.animatedNumeric = String(endValue);
    return;
  }

  const start = performance.now();
  const duration = 560;

  function step(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = startValue + (endValue - startValue) * eased;
    node.textContent = formatAnimatedValue(current, meta);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      node.textContent = nextText;
      node.dataset.animatedValue = nextText;
      node.dataset.animatedNumeric = String(endValue);
    }
  }

  requestAnimationFrame(step);
}

function setAnimatedText(node, nextText) {
  if (!node) return;
  animateNumberText(node, nextText);
}

function round2(value) {
  return Math.round((safeNumber(value) + Number.EPSILON) * 100) / 100;
}

function clamp(value, min, max) {
  return Math.min(Math.max(safeNumber(value), min), max);
}

function getMineSharePercent() {
  const raw = el.householdMyShareInput ? el.householdMyShareInput.value : "100";
  const parsed = raw === "" ? 100 : clamp(raw, 0, 100);
  return parsed;
}

function getPartnerSharePercent() {
  const raw = el.householdPartnerShareInput
    ? el.householdPartnerShareInput.value
    : "0";
  const parsed = raw === "" ? 0 : clamp(raw, 0, 100);
  return parsed;
}

function syncHouseholdShareInputs(source) {
  if (!el.householdMyShareInput || !el.householdPartnerShareInput) return;

  if (source === "partner") {
    const partner = clamp(el.householdPartnerShareInput.value || 0, 0, 100);
    el.householdPartnerShareInput.value = String(partner);
    el.householdMyShareInput.value = String(100 - partner);
    return;
  }

  const mine = clamp(el.householdMyShareInput.value || 100, 0, 100);
  el.householdMyShareInput.value = String(mine);
  el.householdPartnerShareInput.value = String(100 - mine);
}

function getSelectedSharedCategories() {
  if (!el.sharedCategoryInputs) return [];
  return Array.from(el.sharedCategoryInputs)
    .filter(function (input) {
      return input.checked;
    })
    .map(function (input) {
      return (input.dataset.category || "other").toLowerCase().trim();
    });
}

function isHouseholdSplitActive() {
  return Boolean(el.applyHouseholdSplitInput?.checked);
}

function isSharedCategory(category) {
  if (!isHouseholdSplitActive()) return false;
  const normalized = (category || "other").toLowerCase().trim();
  return getSelectedSharedCategories().includes(normalized);
}

function getAdjustedAmountForCategory(amount, category, shareMode) {
  const base = safeNumber(amount);
  if (!isSharedCategory(category)) return round2(base);

  const mineRatio = getMineSharePercent() / 100;
  const partnerRatio = 1 - mineRatio;
  const ratio = shareMode === "partner" ? partnerRatio : mineRatio;
  return round2(base * ratio);
}

function getMonthlyEquivalentAmount(amount, frequency) {
  const value = safeNumber(amount);
  const normalized = (frequency || "monthly").toLowerCase().trim();

  if (normalized === "weekly") return round2((value * 52) / 12);
  if (normalized === "biweekly") return round2((value * 26) / 12);
  if (normalized === "yearly") return round2(value / 12);
  return round2(value);
}

function getEmergencySavingsBalance() {
  return safeNumber(el.emergencySavingsBalanceInput?.value);
}

function getEmergencyFloor() {
  return safeNumber(el.emergencyFloorInput?.value);
}

function getLifeEventSignedAmount(event) {
  if (!event) return 0;
  const amount = safeNumber(event.amount);

  if (event.type === "income") {
    return -amount;
  }

  return amount;
}

function estimateDebtPayoff(balance, aprPercent, monthlyPayment) {
  let remaining = safeNumber(balance);
  const apr = safeNumber(aprPercent);
  const payment = safeNumber(monthlyPayment);

  if (remaining <= 0 || payment <= 0) {
    return {
      months: 0,
      interestPaid: 0,
      payoffDate: null,
      affordable: remaining <= 0,
    };
  }

  const monthlyRate = apr > 0 ? apr / 100 / 12 : 0;
  let months = 0;
  let interestPaid = 0;

  while (remaining > 0 && months < 600) {
    const interest = remaining * monthlyRate;
    interestPaid += interest;
    remaining += interest;

    if (payment <= interest && monthlyRate > 0) {
      return {
        months: null,
        interestPaid,
        payoffDate: null,
        affordable: false,
      };
    }

    remaining -= payment;
    months += 1;
  }

  const today = getTodayLocal();
  const payoffDate = months ? addMonthsSafe(today, months) : today;

  return {
    months,
    interestPaid,
    payoffDate,
    affordable: months < 600,
  };
}

function getLifeEventsSorted() {
  return lifeEvents.slice().sort(function (a, b) {
    return (a.date || "").localeCompare(b.date || "");
  });
}

function getLifeEventsUntilDate(endDate) {
  if (!endDate) return [];

  return getLifeEventsSorted().filter(function (event) {
    const parsed = parseLocalDate(event.date);
    return parsed && parsed <= endDate;
  });
}

function getLifeEventSignedTotal(events, fundingSource) {
  let total = 0;

  for (let i = 0; i < events.length; i++) {
    if (!fundingSource || events[i].funding === fundingSource) {
      total += getLifeEventSignedAmount(events[i]);
    }
  }

  return total;
}

function getCheckingLifeEventItemsBeforeDate(endDate) {
  if (!endDate) return [];

  return getLifeEventsUntilDate(endDate)
    .filter(function (event) {
      return event.funding === "checking";
    })
    .map(function (event) {
      return {
        name: event.name,
        amount: getLifeEventSignedAmount(event),
        dueDate: event.date,
        category: "other",
        frequency: "one-time",
        priority: "important",
        type: "life-event",
        lifeEventType: event.type,
      };
    });
}

function getCheckingLifeEventForecastEvents(forecastEndDate) {
  if (!forecastEndDate) return [];

  return getLifeEventsUntilDate(forecastEndDate)
    .filter(function (event) {
      return event.funding === "checking";
    })
    .map(function (event) {
      const parsedDate = parseLocalDate(event.date);
      return parsedDate
        ? {
            type:
              event.type === "income"
                ? "life-event-income"
                : "life-event-expense",
            date: parsedDate,
            label: event.name,
            amount: -getLifeEventSignedAmount(event),
          }
        : null;
    })
    .filter(Boolean);
}

function formatCategory(category) {
  const value = (category || "other").toLowerCase().trim();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatFrequency(frequency) {
  if (!frequency) return "One-Time";

  return frequency
    .split("-")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("-");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getBillReminderText(bill) {
  const days = Math.max(0, Math.round(safeNumber(bill?.reminderDays)));
  if (!days) return "";
  return days === 1 ? "1-day reminder" : `${days}-day reminder`;
}

function getAutopayBillCount() {
  return bills.filter(function (bill) {
    return Boolean(bill.autopay);
  }).length;
}

function getMonthlyRecurringBillsAmount() {
  return round2(
    bills.reduce(function (sum, bill) {
      if (bill.frequency === "one-time") return sum;
      return sum + getMonthlyEquivalentAmount(bill.amount, bill.frequency);
    }, 0),
  );
}

function formatDateTime(dateString) {
  if (!dateString) return "—";

  const parsed = new Date(dateString);
  if (Number.isNaN(parsed.getTime())) return "—";

  return parsed.toLocaleString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getBillSecondaryText(bill) {
  const dueText = `Due ${formatDate(bill.dueDate)}`;

  if (bill.paid && bill.lastPaidDate) {
    return `${dueText} • Last paid ${formatDateTime(bill.lastPaidDate)}`;
  }

  if (bill.frequency && bill.frequency !== "one-time") {
    return `${dueText} • Repeats ${formatFrequency(bill.frequency).toLowerCase()}`;
  }

  return dueText;
}

function parseLocalDate(dateString) {
  if (
    !dateString ||
    typeof dateString !== "string" ||
    !dateString.includes("-")
  ) {
    return null;
  }

  const [year, month, day] = dateString.split("-").map(Number);

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(dateString) {
  const date = parseLocalDate(dateString);
  if (!date) return "Invalid date";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatEventDate(date) {
  if (!date) return "Invalid date";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTodayLocal() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function addDays(date, daysToAdd) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + daysToAdd,
  );
}

function addMonthsSafe(date, monthsToAdd) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const targetMonthDate = new Date(year, month + monthsToAdd, 1);
  const lastDayOfTargetMonth = new Date(
    targetMonthDate.getFullYear(),
    targetMonthDate.getMonth() + 1,
    0,
  ).getDate();

  const safeDay = Math.min(day, lastDayOfTargetMonth);

  return new Date(
    targetMonthDate.getFullYear(),
    targetMonthDate.getMonth(),
    safeDay,
  );
}

function getDaysBetween(today, futureDate) {
  if (!today || !futureDate) return 0;

  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = futureDate.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / msPerDay));
}

function toDateInputString(date) {
  if (!date) return "";

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;
}

function getBalanceStatus(amount) {
  if (amount < 0) return "status-danger";
  if (amount < 100) return "status-warning";
  return "status-good";
}

function getPriorityLabel(priority) {
  if (priority === "critical") return "Critical";
  if (priority === "important") return "Important";
  return "Flexible";
}

function getPriorityRank(priority) {
  if (priority === "critical") return 1;
  if (priority === "important") return 2;
  return 3;
}

function safeNumber(value) {
  if (value === null || value === undefined) return 0;
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;

  let text = String(value).trim();
  if (!text) return 0;

  text = text.replace(/[^\d.,-]/g, "");
  if (!text) return 0;

  const negative = text.includes("-");

  if ((text.match(/\./g) || []).length > 1 && !text.includes(",")) {
    const parts = text.split(".").filter(Boolean);
    if (parts.length >= 2) {
      const cents = parts.pop();
      text = `${parts.join("")}.${cents}`;
    }
  }

  if ((text.match(/,/g) || []).length > 1 && !text.includes(".")) {
    const parts = text.split(",").filter(Boolean);
    if (parts.length >= 2) {
      const cents = parts.pop();
      text = `${parts.join("")}.${cents}`;
    }
  }

  if (text.includes(",") && text.includes(".")) {
    if (text.lastIndexOf(".") > text.lastIndexOf(",")) {
      text = text.replace(/,/g, "");
    } else {
      text = text.replace(/\./g, "").replace(",", ".");
    }
  } else if (text.includes(",")) {
    const commaParts = text.split(",");
    if (commaParts.length === 2 && commaParts[1].length <= 2) {
      text = `${commaParts[0].replace(/,/g, "")}.${commaParts[1]}`;
    } else {
      text = text.replace(/,/g, "");
    }
  }

  text = text.replace(/(?!^)-/g, "");
  const parsed = parseFloat(text);
  return Number.isNaN(parsed) ? 0 : negative ? -Math.abs(parsed) : parsed;
}

function clampPercent(value, fallback) {
  if (value === "" || value === null || value === undefined) return fallback;
  return clamp(value, 1, 100);
}

function roundQuarterHour(value) {
  return Math.ceil(safeNumber(value) * 4) / 4;
}

function formatHours(value) {
  const rounded = Math.round(safeNumber(value) * 100) / 100;
  if (Math.abs(rounded - Math.round(rounded)) < 0.01)
    return `${Math.round(rounded)}`;
  if (Math.abs(rounded * 2 - Math.round(rounded * 2)) < 0.01)
    return `${rounded.toFixed(1)}`;
  return `${rounded.toFixed(2)}`;
}

function getWorkPlannerSettings() {
  return {
    hourlyRate: safeNumber(el.workHourlyRateInput?.value),
    baseHours: Math.max(0, safeNumber(el.workBaseHoursInput?.value || 40)),
    otMultiplier: Math.max(
      1,
      safeNumber(el.workOtMultiplierInput?.value || 1.5),
    ),
    targetBuffer: Math.max(0, safeNumber(el.workTargetBufferInput?.value)),
    extraGoal: Math.max(0, safeNumber(el.workExtraGoalInput?.value)),
    manualNetRetentionPercent: clampPercent(el.workNetRetentionInput?.value, 0),
  };
}

function getEstimatedNetRetentionRate(workSettings) {
  const settings = workSettings || getWorkPlannerSettings();

  if (settings.manualNetRetentionPercent > 0) {
    return clamp(settings.manualNetRetentionPercent / 100, 0.45, 0.95);
  }

  const estimate = getPreferredPaycheckEstimate();
  if (estimate && estimate.averageGross > 0 && estimate.averageNet > 0) {
    return clamp(estimate.averageNet / estimate.averageGross, 0.45, 0.95);
  }

  const baseNetPay = safeNumber(el.baseNetPayInput?.value);
  if (baseNetPay > 0 && settings.hourlyRate > 0 && settings.baseHours > 0) {
    return clamp(
      baseNetPay / (settings.hourlyRate * settings.baseHours),
      0.45,
      0.95,
    );
  }

  return 0.72;
}

function estimateTakeHomeForHours(hours, workSettings) {
  const settings = workSettings || getWorkPlannerSettings();
  const netRetention = getEstimatedNetRetentionRate(settings);
  const safeHours = Math.max(0, safeNumber(hours));
  const regularHours = Math.min(safeHours, settings.baseHours);
  const overtimeHours = Math.max(0, safeHours - settings.baseHours);

  const regularNet = regularHours * settings.hourlyRate * netRetention;
  const overtimeNet =
    overtimeHours * settings.hourlyRate * settings.otMultiplier * netRetention;

  return round2(regularNet + overtimeNet);
}

function estimateHoursForTakeHome(targetNet, workSettings) {
  const settings = workSettings || getWorkPlannerSettings();
  const safeTarget = Math.max(0, safeNumber(targetNet));

  if (safeTarget <= 0) return 0;
  if (settings.hourlyRate <= 0 || settings.baseHours <= 0) return null;

  for (let hours = 0; hours <= 100; hours += 0.25) {
    if (estimateTakeHomeForHours(hours, settings) >= safeTarget) {
      return roundQuarterHour(hours);
    }
  }

  return null;
}

/* =========================
   BILL / BUCKET HELPERS
========================= */

function isBillPaid(bill) {
  return Boolean(bill && bill.paid);
}

function getBillStatus(bill, payDate, today) {
  const billDate = parseLocalDate(bill.dueDate);

  if (!billDate) return "future";
  if (billDate < today) return "overdue";
  if (payDate && billDate <= payDate) return "due-soon";
  return "future";
}

function getFuturePaychecks(startDate, frequency, count) {
  const paychecks = [];
  let currentDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );

  for (let i = 0; i < count; i++) {
    paychecks.push(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ),
    );

    if (frequency === "weekly") {
      currentDate.setDate(currentDate.getDate() + 7);
    } else if (frequency === "biweekly") {
      currentDate.setDate(currentDate.getDate() + 14);
    } else if (frequency === "monthly") {
      currentDate = addMonthsSafe(currentDate, 1);
    }
  }

  return paychecks;
}

function sortBillsForAllocation(billsToSort, mode) {
  return [...billsToSort].sort(function (a, b) {
    const aDate = parseLocalDate(a.dueDate);
    const bDate = parseLocalDate(b.dueDate);

    if (mode === "survival") {
      const priorityDiff =
        getPriorityRank(a.priority) - getPriorityRank(b.priority);
      if (priorityDiff !== 0) return priorityDiff;

      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;

      return aDate - bDate;
    }

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    const dateDiff = aDate - bDate;
    if (dateDiff !== 0) return dateDiff;

    return getPriorityRank(a.priority) - getPriorityRank(b.priority);
  });
}

function getBucketOccurrencesUntil(endDate) {
  const occurrences = [];
  const today = getTodayLocal();

  if (!endDate) return occurrences;

  for (let i = 0; i < spendingBuckets.length; i++) {
    const bucket = spendingBuckets[i];
    let currentDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );

    while (currentDate <= endDate) {
      occurrences.push({
        name: bucket.name,
        rawAmount: safeNumber(bucket.amount),
        amount: getAdjustedAmountForCategory(
          bucket.amount,
          bucket.category,
          "mine",
        ),
        dueDate: toDateInputString(currentDate),
        category: (bucket.category || "other").toLowerCase().trim(),
        frequency: bucket.frequency || "weekly",
        priority: "flexible",
        type: "bucket",
      });

      if (bucket.frequency === "weekly") {
        currentDate = addDays(currentDate, 7);
      } else if (bucket.frequency === "biweekly") {
        currentDate = addDays(currentDate, 14);
      } else if (bucket.frequency === "monthly") {
        currentDate = addMonthsSafe(currentDate, 1);
      } else {
        break;
      }
    }
  }

  return occurrences;
}

function getBucketOccurrencesBeforeDate(endDate) {
  return getBucketOccurrencesUntil(endDate).filter(function (item) {
    const itemDate = parseLocalDate(item.dueDate);
    return itemDate && itemDate <= endDate;
  });
}

function getBillsDueOnOrBefore(payDate) {
  const items = [];

  if (!payDate) return items;

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const billDate = parseLocalDate(bill.dueDate);

    if (!isBillPaid(bill) && billDate && billDate <= payDate) {
      items.push({
        ...bill,
        rawAmount: safeNumber(bill.amount),
        amount: getAdjustedAmountForCategory(
          bill.amount,
          bill.category,
          "mine",
        ),
      });
    }
  }

  return items;
}

function getCombinedItemsBeforePayday(payDate) {
  const billItems = getBillsDueOnOrBefore(payDate);
  const bucketItems = getBucketOccurrencesBeforeDate(payDate);
  const lifeEventItems = getCheckingLifeEventItemsBeforeDate(payDate);

  return [...billItems, ...bucketItems, ...lifeEventItems].sort(
    function (a, b) {
      const aDate = parseLocalDate(a.dueDate);
      const bDate = parseLocalDate(b.dueDate);

      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;

      return aDate - bDate;
    },
  );
}

function getTotalsByCategoryBeforeDate(payDate) {
  const totals = {};

  if (!payDate) return totals;

  const billItems = getBillsDueOnOrBefore(payDate);
  const bucketItems = getBucketOccurrencesBeforeDate(payDate);

  const lifeEventItems = getCheckingLifeEventItemsBeforeDate(payDate);
  const combined = [...billItems, ...bucketItems, ...lifeEventItems];

  for (let i = 0; i < combined.length; i++) {
    const category = (combined[i].category || "other").toLowerCase().trim();
    if (!totals[category]) totals[category] = 0;
    totals[category] += combined[i].amount;
  }

  return totals;
}

function getForecastBillEvents(bill, forecastEndDate) {
  const events = [];
  let billDate = parseLocalDate(bill.dueDate);
  const today = getTodayLocal();

  if (!billDate || !forecastEndDate) return events;
  if ((!bill.frequency || bill.frequency === "one-time") && billDate < today)
    return events;

  while (billDate <= forecastEndDate) {
    if (billDate >= today) {
      events.push({
        type: "bill",
        date: new Date(
          billDate.getFullYear(),
          billDate.getMonth(),
          billDate.getDate(),
        ),
        label: bill.name,
        amount: -getAdjustedAmountForCategory(
          bill.amount,
          bill.category,
          "mine",
        ),
      });
    }

    if (!bill.frequency || bill.frequency === "one-time") {
      break;
    } else if (bill.frequency === "weekly") {
      billDate.setDate(billDate.getDate() + 7);
    } else if (bill.frequency === "monthly") {
      billDate = addMonthsSafe(billDate, 1);
    } else if (bill.frequency === "yearly") {
      billDate = new Date(
        billDate.getFullYear() + 1,
        billDate.getMonth(),
        billDate.getDate(),
      );
    } else {
      break;
    }
  }

  return events;
}

function getForecastBillOccurrences(forecastEndDate) {
  const occurrences = [];

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (isBillPaid(bill)) continue;

    const billEvents = getForecastBillEvents(bill, forecastEndDate);

    for (let j = 0; j < billEvents.length; j++) {
      const eventDate = billEvents[j].date;

      occurrences.push({
        name: bill.name,
        rawAmount: safeNumber(bill.amount),
        amount: getAdjustedAmountForCategory(
          bill.amount,
          bill.category,
          "mine",
        ),
        dueDate: toDateInputString(eventDate),
        type: "bill",
        category: (bill.category || "other").toLowerCase().trim(),
        frequency: bill.frequency || "one-time",
        priority: bill.priority || "important",
      });
    }
  }

  return occurrences;
}

function getForecastTotalsByCategory(forecastEndDate) {
  const totals = {};

  if (!forecastEndDate) return totals;

  for (let i = 0; i < bills.length; i++) {
    if (isBillPaid(bills[i])) continue;

    const billEvents = getForecastBillEvents(bills[i], forecastEndDate);

    for (let j = 0; j < billEvents.length; j++) {
      const category = (bills[i].category || "other").toLowerCase().trim();
      if (!totals[category]) totals[category] = 0;
      totals[category] += Math.abs(billEvents[j].amount);
    }
  }

  const bucketOccurrences = getBucketOccurrencesUntil(forecastEndDate);
  const lifeEventForecasts =
    getCheckingLifeEventForecastEvents(forecastEndDate);

  for (let i = 0; i < bucketOccurrences.length; i++) {
    const category = (bucketOccurrences[i].category || "other")
      .toLowerCase()
      .trim();
    if (!totals[category]) totals[category] = 0;
    totals[category] += bucketOccurrences[i].amount;
  }

  return totals;
}

/* =========================
   STRESS / INCOME HELPERS
========================= */

function getStressTestSettings() {
  return {
    mode: el.stressTestModeInput ? el.stressTestModeInput.value : "none",
    amount: safeNumber(el.stressTestAmountInput?.value),
    days: parseInt(el.stressTestDaysInput?.value, 10) || 0,
  };
}

function getIncomeScenarioAmount() {
  const baseNetPay = safeNumber(el.baseNetPayInput?.value);
  const expectedOtNet = safeNumber(el.expectedOtNetInput?.value);
  const scenario = el.incomeScenarioInput?.value || "realistic";

  if (baseNetPay <= 0) return null;

  let scenarioAmount = baseNetPay;

  if (scenario === "realistic") {
    scenarioAmount = baseNetPay + expectedOtNet * 0.5;
  } else if (scenario === "aggressive") {
    scenarioAmount = baseNetPay + expectedOtNet;
  }

  return {
    baseNetPay,
    expectedOtNet,
    scenario,
    scenarioAmount,
  };
}

function getEffectiveNextPaycheckAmount() {
  const manualAmount = safeNumber(el.nextPayAmountInput?.value);
  const useScenario =
    el.useIncomeScenarioForForecastInput?.value === "scenario";
  const scenarioResult = getIncomeScenarioAmount();

  if (useScenario && scenarioResult) {
    return scenarioResult.scenarioAmount;
  }

  return manualAmount;
}

function getStressAdjustedNextPaycheckAmount() {
  const baseAmount = getEffectiveNextPaycheckAmount();
  const stress = getStressTestSettings();

  if (stress.mode === "low-pay") {
    return Math.max(0, baseAmount - stress.amount);
  }

  return baseAmount;
}

function getStressAdjustedNextPayDate() {
  const rawNextPayDate = el.nextPayDateInput.value;
  if (!rawNextPayDate) return null;

  const parsedDate = parseLocalDate(rawNextPayDate);
  if (!parsedDate) return null;

  const stress = getStressTestSettings();

  if (stress.mode === "late-pay" && stress.days > 0) {
    return addDays(parsedDate, stress.days);
  }

  return parsedDate;
}

function getEffectiveNextPayDateString() {
  return toDateInputString(getStressAdjustedNextPayDate());
}

function getForecastEndDate() {
  const nextPayDate = getEffectiveNextPayDateString();
  const payFrequency = el.payFrequencyInput.value;

  if (!nextPayDate) return null;

  const firstPayDate = parseLocalDate(nextPayDate);
  if (!firstPayDate) return null;

  const futurePaychecks = getFuturePaychecks(firstPayDate, payFrequency, 4);
  return futurePaychecks[futurePaychecks.length - 1];
}

function getForecastPaySourceDetails() {
  const useScenario =
    el.useIncomeScenarioForForecastInput?.value === "scenario";
  const manualAmount = safeNumber(el.nextPayAmountInput?.value);
  const scenarioResult = getIncomeScenarioAmount();

  if (useScenario && scenarioResult) {
    let scenarioLabel = "Realistic";

    if (scenarioResult.scenario === "conservative") {
      scenarioLabel = "Conservative";
    } else if (scenarioResult.scenario === "aggressive") {
      scenarioLabel = "Aggressive";
    }

    return {
      mode: "scenario",
      label: `Income Scenario (${scenarioLabel})`,
      amount: scenarioResult.scenarioAmount,
    };
  }

  return {
    mode: "manual",
    label: "Manual Next Paycheck Amount",
    amount: manualAmount,
  };
}

function applyOtPreset(amount) {
  if (!el.expectedOtNetInput) return;

  el.expectedOtNetInput.value = amount.toFixed(2);
  refreshIncomePlanning();
  refreshApp();
}

/* =========================
   RENDER HELPERS
========================= */

function destroyChart(chartInstance) {
  if (chartInstance) {
    chartInstance.destroy();
  }
  return null;
}

function renderSimpleTotalsList(container, totals, emptyMessage) {
  if (!container) return;

  container.innerHTML = "";
  const categories = Object.keys(totals).sort();

  if (categories.length === 0) {
    setHtml(container, `<p class="timeline-empty">${emptyMessage}</p>`);
    return;
  }

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    const row = document.createElement("div");
    row.className = "timeline-item";
    row.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-title">${formatCategory(category)}</div>
      </div>
      <div class="timeline-right">
        <div class="timeline-amount">${formatCurrency(totals[category])}</div>
      </div>
    `;

    container.appendChild(row);
  }
}

function renderPieChart(canvas, existingChart, totals) {
  if (!canvas) return null;

  existingChart = destroyChart(existingChart);

  const labels = Object.keys(totals).map(function (category) {
    return formatCategory(category);
  });

  const data = Object.keys(totals).map(function (category) {
    return totals[category];
  });

  if (labels.length === 0) {
    canvas.style.display = "none";
    return null;
  }

  canvas.style.display = "block";

  return new Chart(canvas, {
    type: "pie",
    data: {
      labels,
      datasets: [{ data }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.raw || 0;
              return `${label}: ${formatCurrency(value)}`;
            },
          },
        },
      },
    },
  });
}

/* =========================
   RENDER FUNCTIONS
========================= */

function renderForecastPaySourceMessage() {
  const detail = getForecastPaySourceDetails();

  const html = `
    <div class="warning-box ${detail.mode === "scenario" ? "warning-box-good" : "warning-box-warning"}">
      Forecast is using <strong>${detail.label}</strong>: ${formatCurrency(detail.amount)}
    </div>
  `;

  setHtml(el.forecastPaySourceMessage, html);
  setHtml(el.forecastPaySourceMessageForecast, html);
}

function renderStressTestMessage() {
  if (!el.stressTestMessage) return;

  const stress = getStressTestSettings();

  if (stress.mode === "none") {
    setHtml(
      el.stressTestMessage,
      `<div class="warning-box warning-box-good">No stress test is active. Your normal plan is being shown.</div>`,
    );
    return;
  }

  if (stress.mode === "low-pay") {
    setHtml(
      el.stressTestMessage,
      `<div class="warning-box warning-box-warning">Simulating a lower paycheck by ${formatCurrency(
        stress.amount,
      )}.</div>`,
    );
    return;
  }

  if (stress.mode === "late-pay") {
    setHtml(
      el.stressTestMessage,
      `<div class="warning-box warning-box-warning">Simulating your next paycheck arriving ${stress.days} day${
        stress.days === 1 ? "" : "s"
      } late.</div>`,
    );
    return;
  }

  if (stress.mode === "surprise-expense") {
    setHtml(
      el.stressTestMessage,
      `<div class="warning-box warning-box-danger">Simulating an unexpected extra expense of ${formatCurrency(
        stress.amount,
      )}.</div>`,
    );
  }
}

function renderPaycheckEstimateResults() {
  if (!el.paycheckEstimateResults) return;

  const estimate = getAveragePaycheckEstimate();
  const paystubEstimate = getPaystubHistoryEstimate();

  if (!estimate && !paystubEstimate) {
    setHtml(
      el.paycheckEstimateResults,
      `<p class="timeline-empty">Enter at least one paycheck with both gross and net pay, or save a parsed paystub, to see estimated results.</p>`,
    );
    return;
  }

  const cards = [];

  if (estimate) {
    cards.push(`
      <div class="estimate-result-card">
        <span class="estimate-result-label">Manual Avg Net (${estimate.count})</span>
        <span class="estimate-result-value ${getBalanceStatus(estimate.averageNet)}">${formatCurrency(estimate.averageNet)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Manual Avg Gross</span>
        <span class="estimate-result-value">${formatCurrency(estimate.averageGross)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Manual Avg OT Hours</span>
        <span class="estimate-result-value">${estimate.averageOt.toFixed(1)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Manual Take-Home %</span>
        <span class="estimate-result-value">${estimate.takeHomePercent.toFixed(1)}%</span>
      </div>
    `);
  }

  if (paystubEstimate) {
    cards.push(`
      <div class="estimate-result-card">
        <span class="estimate-result-label">Paystub Avg Net (${paystubEstimate.count})</span>
        <span class="estimate-result-value ${getBalanceStatus(paystubEstimate.averageNet)}">${formatCurrency(paystubEstimate.averageNet)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Paystub Avg Gross</span>
        <span class="estimate-result-value">${formatCurrency(paystubEstimate.averageGross)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Avg Hours From Paystubs</span>
        <span class="estimate-result-value">${paystubEstimate.averageHours.toFixed(2)}</span>
      </div>
      <div class="estimate-result-card">
        <span class="estimate-result-label">Paystub Take-Home %</span>
        <span class="estimate-result-value">${paystubEstimate.takeHomePercent.toFixed(1)}%</span>
      </div>
    `);
  }

  setHtml(
    el.paycheckEstimateResults,
    `
    <div class="estimate-results-grid">
      ${cards.join("")}
    </div>
    ${paystubEstimate ? `<div class="planner-chip-row"><span class="planner-chip">Best forecast source: Paystub history</span><span class="planner-chip">Avg hourly net ${formatCurrency(paystubEstimate.averageHourlyNet)}</span></div>` : ""}
  `,
  );
}

function renderIncomeScenarioResults() {
  if (!el.incomeScenarioResults) return;

  const result = getIncomeScenarioAmount();
  const forecastSource =
    el.useIncomeScenarioForForecastInput?.value === "scenario"
      ? "Income Scenario"
      : "Manual Next Paycheck Amount";

  if (!result) {
    setHtml(
      el.incomeScenarioResults,
      `<p class="timeline-empty">Enter a base net pay amount to see your income scenario result.</p>`,
    );
    return;
  }

  let scenarioLabel = "Realistic";
  if (result.scenario === "conservative") scenarioLabel = "Conservative";
  if (result.scenario === "aggressive") scenarioLabel = "Aggressive";

  setHtml(
    el.incomeScenarioResults,
    `
    <div class="estimate-results-grid">
      <div class="estimate-result-card">
        <span class="estimate-result-label">Base Net Pay</span>
        <span class="estimate-result-value">${formatCurrency(result.baseNetPay)}</span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Expected OT Net Add-On</span>
        <span class="estimate-result-value">${formatCurrency(result.expectedOtNet)}</span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Selected Scenario</span>
        <span class="estimate-result-value">${scenarioLabel}</span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Scenario Paycheck Amount</span>
        <span class="estimate-result-value ${getBalanceStatus(result.scenarioAmount)}">${formatCurrency(
          result.scenarioAmount,
        )}</span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Forecast Using</span>
        <span class="estimate-result-value">${forecastSource}</span>
      </div>
    </div>
  `,
  );
}

function renderIncomePlanningPreview() {
  if (!el.incomePlanningPreview) return;

  const balance = safeNumber(el.currentBalanceInput.value);
  const nextPayDate = getEffectiveNextPayDateString();
  const effectivePaycheckAmount = getEffectiveNextPaycheckAmount();
  const sourceDetails = getForecastPaySourceDetails();

  let totalDue = 0;

  if (nextPayDate) {
    const payDate = parseLocalDate(nextPayDate);
    if (payDate) {
      const items = getCombinedItemsBeforePayday(payDate);
      for (let i = 0; i < items.length; i++) {
        totalDue += items[i].amount;
      }
    }
  }

  const projectedBeforePaycheck = balance - totalDue;
  const projectedAfterPaycheck =
    projectedBeforePaycheck + effectivePaycheckAmount;

  setHtml(
    el.incomePlanningPreview,
    `
    <div class="estimate-results-grid">
      <div class="estimate-result-card">
        <span class="estimate-result-label">Forecast Source</span>
        <span class="estimate-result-value">${sourceDetails.label}</span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Effective Paycheck</span>
        <span class="estimate-result-value ${getBalanceStatus(effectivePaycheckAmount)}">
          ${formatCurrency(effectivePaycheckAmount)}
        </span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Projected Before Paycheck</span>
        <span class="estimate-result-value ${getBalanceStatus(projectedBeforePaycheck)}">
          ${formatCurrency(projectedBeforePaycheck)}
        </span>
      </div>

      <div class="estimate-result-card">
        <span class="estimate-result-label">Projected After Paycheck</span>
        <span class="estimate-result-value ${getBalanceStatus(projectedAfterPaycheck)}">
          ${formatCurrency(projectedAfterPaycheck)}
        </span>
      </div>
    </div>
  `,
  );
}

function renderWorkPlannerSummary() {
  if (!el.workPlannerSummary) return;

  const settings = getWorkPlannerSettings();
  if (settings.hourlyRate <= 0 || settings.baseHours <= 0) {
    setHtml(
      el.workPlannerSummary,
      `
        <div class="planner-callout">
          <strong>Set up your weekly work target</strong>
          <span>Enter your hourly rate, base hours, and target buffer to estimate how many hours you need this week.</span>
        </div>
      `,
    );
    return;
  }

  const balance = safeNumber(el.currentBalanceInput?.value);
  const nextPayDate = getStressAdjustedNextPayDate();
  const forecastPaycheck = getStressAdjustedNextPaycheckAmount();
  let totalDue = 0;

  if (nextPayDate) {
    const items = getCombinedItemsBeforePayday(nextPayDate);
    for (let i = 0; i < items.length; i++) {
      totalDue += items[i].amount;
    }
  }

  const projectedBeforePaycheck = balance - totalDue;
  const requiredPaycheck = Math.max(
    0,
    settings.targetBuffer + settings.extraGoal - projectedBeforePaycheck,
  );
  const minimumHours = estimateHoursForTakeHome(requiredPaycheck, settings);
  const forecastHours = estimateHoursForTakeHome(forecastPaycheck, settings);
  const recommendedHours =
    minimumHours === null
      ? null
      : roundQuarterHour(Math.max(minimumHours + 2, settings.baseHours));
  const recommendedTakeHome =
    recommendedHours === null
      ? 0
      : estimateTakeHomeForHours(recommendedHours, settings);
  const gapToClose = Math.max(0, requiredPaycheck - forecastPaycheck);
  const netRetention = getEstimatedNetRetentionRate(settings);
  const modelEstimate = getPreferredPaycheckEstimate();
  const modelSource = getPaystubHistoryEstimate()
    ? "Paystub history"
    : getAveragePaycheckEstimate()
      ? "Manual paycheck average"
      : "Fallback retention rate";
  const safeRangeStart = recommendedHours === null ? null : recommendedHours;
  const safeRangeEnd =
    recommendedHours === null ? null : roundQuarterHour(recommendedHours + 5);

  const calloutClass =
    minimumHours === null || minimumHours > 70
      ? "planner-callout planner-callout-danger"
      : "planner-callout";
  let guidance =
    "You are already covered for this stretch based on your current plan.";

  if (minimumHours === null) {
    guidance =
      "Add your hourly details and keep your paycheck estimate updated so the app can recommend a realistic work target.";
  } else if (gapToClose > 0) {
    guidance = `Your current forecast is short by ${formatCurrency(gapToClose)}. Hitting about ${formatHours(recommendedHours)} hours would give you a safer cushion.`;
  } else if (requiredPaycheck > 0) {
    guidance = `Your current forecast already covers the minimum. Working around ${formatHours(recommendedHours)} hours gives you extra room for surprises.`;
  }

  setHtml(
    el.workPlannerSummary,
    `
      <div class="planner-summary-grid work-planner-summary-grid">
        <div class="planner-summary-card">
          <span class="planner-summary-label">Required Next Paycheck</span>
          <span class="planner-summary-value">${formatCurrency(requiredPaycheck)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Current Forecast Paycheck</span>
          <span class="planner-summary-value ${getBalanceStatus(forecastPaycheck - requiredPaycheck)}">${formatCurrency(forecastPaycheck)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Minimum Hours Needed</span>
          <span class="planner-summary-value">${minimumHours === null ? "—" : `${formatHours(minimumHours)} hrs`}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Recommended Target</span>
          <span class="planner-summary-value">${recommendedHours === null ? "—" : `${formatHours(recommendedHours)} hrs`}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Safe Range</span>
          <span class="planner-summary-value">${safeRangeStart === null ? "—" : `${formatHours(safeRangeStart)}–${formatHours(safeRangeEnd)} hrs`}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Net Keep Estimate</span>
          <span class="planner-summary-value">${Math.round(netRetention * 100)}%</span>
        </div>
      </div>
      <div class="planner-callout work-planner-callout">
        <strong>Estimated take-home at recommended hours</strong>
        <span>${recommendedHours === null ? "Add your hourly details to calculate your target." : `${formatCurrency(recommendedTakeHome)} based on ${formatHours(recommendedHours)} total hours.`}</span>
      </div>
      <div class="${calloutClass}">
        <strong>Work target guidance</strong>
        <span>${guidance}</span>
      </div>
    `,
  );
}

function renderBuckets() {
  if (!el.bucketList) return;

  el.bucketList.innerHTML = "";

  if (spendingBuckets.length === 0) {
    setHtml(
      el.bucketList,
      `<li class="timeline-empty">No spending buckets added yet.</li>`,
    );
    return;
  }

  for (let i = 0; i < spendingBuckets.length; i++) {
    const bucket = spendingBuckets[i];

    const li = document.createElement("li");
    li.className = "bill-item";

    li.innerHTML = `
      <div class="bill-main">
        <div class="bill-top-row">
          <div class="bill-title-wrap">
            <div class="bill-title-line">
              <div class="bill-title">${bucket.name}</div>
              <span class="bill-chip bill-chip-status-neutral">Bucket</span>
            </div>

            <div class="bill-meta">
              <span class="bill-chip">${formatCategory(bucket.category || "other")}</span>
              <span class="bill-chip bill-chip-soft">${formatFrequency(bucket.frequency)}</span>
            </div>
          </div>

          <div class="bill-amount-wrap">
            <div class="bill-amount">${formatCurrency(bucket.amount)}</div>
            <div class="bill-amount-label">Planned spending</div>
          </div>
        </div>
      </div>
    `;

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "bill-actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", function () {
      el.bucketNameInput.value = bucket.name;
      el.bucketAmountInput.value = bucket.amount;
      if (el.bucketCategoryInput)
        el.bucketCategoryInput.value = bucket.category || "other";
      el.bucketFrequencyInput.value = bucket.frequency || "weekly";

      bucketEditIndex = i;
      enterBucketEditMode();
    });

    const duplicateBtn = document.createElement("button");
    duplicateBtn.textContent = "Duplicate";
    duplicateBtn.className = "secondary-btn";
    duplicateBtn.addEventListener("click", function () {
      const nowIso = new Date().toISOString();
      const clonedBucket = {
        ...bucket,
        name: `${bucket.name} Copy`,
        createdAt: nowIso,
        updatedAt: nowIso,
      };
      spendingBuckets.push(clonedBucket);
      refreshApp();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      const confirmed = confirm(`Delete bucket "${bucket.name}"?`);
      if (!confirmed) return;

      spendingBuckets.splice(i, 1);

      if (bucketEditIndex === i) {
        clearBucketForm();
      } else if (bucketEditIndex !== null && i < bucketEditIndex) {
        bucketEditIndex--;
      }

      refreshApp();
    });

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(duplicateBtn);
    buttonGroup.appendChild(deleteBtn);
    li.appendChild(buttonGroup);
    el.bucketList.appendChild(li);
  }
}

function renderBillsOverview() {
  if (!el.billsOverview) return;

  const nextPayDate = getEffectiveNextPayDateString();
  const payDate = nextPayDate ? parseLocalDate(nextPayDate) : null;
  const today = getTodayLocal();

  let overdueCount = 0;
  let dueSoonCount = 0;
  let paidCount = 0;

  for (let i = 0; i < bills.length; i++) {
    if (isBillPaid(bills[i])) {
      paidCount++;
      continue;
    }

    const status = getBillStatus(bills[i], payDate, today);
    if (status === "overdue") overdueCount++;
    if (status === "due-soon") dueSoonCount++;
  }

  setHtml(
    el.billsOverview,
    `
    <div class="overview-pill">
      <span class="overview-pill-label">Total Bills</span>
      <span class="overview-pill-value">${bills.length}</span>
    </div>
    <div class="overview-pill">
      <span class="overview-pill-label">Paid</span>
      <span class="overview-pill-value">${paidCount}</span>
    </div>
    <div class="overview-pill">
      <span class="overview-pill-label">Overdue</span>
      <span class="overview-pill-value">${overdueCount}</span>
    </div>
    <div class="overview-pill">
      <span class="overview-pill-label">Due Soon</span>
      <span class="overview-pill-value">${dueSoonCount}</span>
    </div>
  `,
  );
}

function renderBills() {
  if (!el.billList) return;

  el.billList.innerHTML = "";

  const sortedBills = [...bills].sort(function (a, b) {
    const aDate = parseLocalDate(a.dueDate);
    const bDate = parseLocalDate(b.dueDate);

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    const dateDiff = aDate - bDate;
    if (dateDiff !== 0) return dateDiff;

    return getPriorityRank(a.priority) - getPriorityRank(b.priority);
  });

  const nextPayDate = getEffectiveNextPayDateString();
  const payDate = nextPayDate ? parseLocalDate(nextPayDate) : null;
  const today = getTodayLocal();

  const searchText = el.billSearchInput?.value.toLowerCase().trim() || "";
  const selectedCategory = el.filterCategoryInput?.value || "all";
  const selectedStatus = el.filterStatusInput?.value || "all";

  const filteredBills = sortedBills.filter(function (bill) {
    const matchesSearch = bill.name.toLowerCase().includes(searchText);
    const billCategory = (bill.category || "other").toLowerCase().trim();
    const matchesCategory =
      selectedCategory === "all" || billCategory === selectedCategory;

    const billStatus = getBillStatus(bill, payDate, today);

    let matchesStatus = false;
    if (selectedStatus === "all") {
      matchesStatus = true;
    } else if (selectedStatus === "paid") {
      matchesStatus = bill.paid;
    } else if (selectedStatus === "unpaid") {
      matchesStatus = !bill.paid;
    } else {
      matchesStatus = !bill.paid && billStatus === selectedStatus;
    }

    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (bills.length === 0) {
    setHtml(
      el.billList,
      `<li class="timeline-empty">No bills added yet.<br><br>Add your first bill above to begin tracking your expenses.</li>`,
    );
    return;
  }

  if (filteredBills.length === 0) {
    const emptyMessage =
      selectedStatus === "paid"
        ? "No paid bills found."
        : selectedStatus === "unpaid"
          ? "No unpaid bills found."
          : "No bills match your search or filters.";

    setHtml(el.billList, `<li class="timeline-empty">${emptyMessage}</li>`);
    return;
  }

  for (let i = 0; i < filteredBills.length; i++) {
    const bill = filteredBills[i];
    const realIndex = bills.indexOf(bill);

    const li = document.createElement("li");
    li.className = "bill-item";

    const billStatus = getBillStatus(bill, payDate, today);

    if (billStatus === "overdue") {
      li.classList.add("overdue");
    } else if (billStatus === "due-soon") {
      li.classList.add("due-soon");
    }

    const statusLabel = bill.paid
      ? "Paid"
      : billStatus === "overdue"
        ? "Overdue"
        : billStatus === "due-soon"
          ? "Due Soon"
          : "Upcoming";

    const statusChipClass = bill.paid
      ? "bill-chip-status-paid"
      : billStatus === "overdue"
        ? "bill-chip-status-overdue"
        : billStatus === "due-soon"
          ? "bill-chip-status-warning"
          : "bill-chip-status-neutral";

    const billText = document.createElement("div");
    billText.className = "bill-main";
    billText.innerHTML = `
      <div class="bill-top-row">
        <div class="bill-title-wrap">
          <div class="bill-title-line">
            <div class="bill-title">${bill.name}</div>
            <span class="bill-chip ${statusChipClass}">${statusLabel}</span>
          </div>

          <div class="bill-meta">
            <span class="bill-chip">${formatCategory(bill.category)}</span>
            <span class="bill-chip bill-chip-soft">${formatFrequency(bill.frequency)}</span>
            <span class="bill-chip bill-chip-priority">${getPriorityLabel(bill.priority)}</span>
            ${bill.autopay ? '<span class="bill-chip bill-chip-autopay">Auto-pay</span>' : ""}
            ${getBillReminderText(bill) ? `<span class="bill-chip bill-chip-reminder">${getBillReminderText(bill)}</span>` : ""}
          </div>
        </div>

        <div class="bill-amount-wrap">
          <div class="bill-amount">${formatCurrency(bill.amount)}</div>
          <div class="bill-amount-label">Scheduled expense</div>
        </div>
      </div>

      <div class="bill-subtext">${getBillSecondaryText(bill)}${bill.notes ? ` • ${escapeHtml(bill.notes)}` : ""}</div>
    `;

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "bill-actions";

    const paidBtn = document.createElement("button");
    paidBtn.textContent = bill.paid ? "Mark Unpaid" : "Mark Paid";
    paidBtn.className = bill.paid ? "secondary-btn" : "edit-btn";
    paidBtn.addEventListener("click", function () {
      const nowIso = new Date().toISOString();
      const billToUpdate = bills[realIndex];

      billToUpdate.paid = !billToUpdate.paid;
      billToUpdate.updatedAt = nowIso;

      if (billToUpdate.paid) {
        billToUpdate.lastPaidDate = nowIso;
      } else {
        billToUpdate.lastPaidDate = null;
      }

      refreshApp();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", function () {
      el.billNameInput.value = bill.name;
      el.billAmountInput.value = bill.amount;
      el.billDueDateInput.value = bill.dueDate;
      el.billCategoryInput.value = (bill.category || "other")
        .toLowerCase()
        .trim();
      el.billFrequencyInput.value = bill.frequency || "one-time";
      el.billPriorityInput.value = bill.priority || "important";
      if (el.billNotesInput) el.billNotesInput.value = bill.notes || "";
      if (el.billAutopayInput)
        el.billAutopayInput.checked = Boolean(bill.autopay);
      if (el.billReminderDaysInput)
        el.billReminderDaysInput.value = String(
          Math.max(0, safeNumber(bill.reminderDays)),
        );

      editIndex = realIndex;
      enterEditMode();

      if (el.billFormCard) {
        el.billFormCard.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        el.billFormCard.classList.remove("bill-form-highlight");

        setTimeout(function () {
          el.billFormCard.classList.add("bill-form-highlight");
        }, 300);
      }
    });

    const duplicateBtn = document.createElement("button");
    duplicateBtn.textContent = "Duplicate";
    duplicateBtn.className = "secondary-btn";
    duplicateBtn.addEventListener("click", function () {
      const nowIso = new Date().toISOString();
      const clonedBill = {
        ...bill,
        name: `${bill.name} Copy`,
        paid: false,
        lastPaidDate: null,
        createdAt: nowIso,
        updatedAt: nowIso,
      };
      bills.push(clonedBill);
      refreshApp();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      const confirmed = confirm(`Delete "${bill.name}"?`);
      if (!confirmed) return;

      bills.splice(realIndex, 1);

      if (editIndex === realIndex) {
        clearBillForm();
      } else if (editIndex !== null && realIndex < editIndex) {
        editIndex--;
      }

      refreshApp();
    });

    buttonGroup.appendChild(paidBtn);
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(duplicateBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(billText);
    li.appendChild(buttonGroup);
    el.billList.appendChild(li);
  }
}

function renderUpcomingBills() {
  if (!el.upcomingBillsList) return;

  el.upcomingBillsList.innerHTML = "";

  const nextPayDate = getEffectiveNextPayDateString();

  if (!nextPayDate) {
    setHtml(
      el.upcomingBillsList,
      `<p class="timeline-empty">Enter a next paycheck date to see upcoming bills.</p>`,
    );
    return;
  }

  const payDate = parseLocalDate(nextPayDate);

  if (!payDate) {
    setHtml(
      el.upcomingBillsList,
      `<p class="timeline-empty">Enter a valid next paycheck date to see upcoming bills.</p>`,
    );
    return;
  }

  const today = getTodayLocal();

  const upcomingBills = bills.filter(function (bill) {
    const billDate = parseLocalDate(bill.dueDate);
    return !bill.paid && billDate && billDate >= today && billDate <= payDate;
  });

  const bucketOccurrences = getBucketOccurrencesBeforeDate(payDate).filter(
    function (bucket) {
      const bucketDate = parseLocalDate(bucket.dueDate);
      return bucketDate && bucketDate >= today && bucketDate <= payDate;
    },
  );

  const checkingEvents = getCheckingLifeEventItemsBeforeDate(payDate).filter(
    function (event) {
      const eventDate = parseLocalDate(event.dueDate);
      return eventDate && eventDate >= today && eventDate <= payDate;
    },
  );

  const upcoming = [
    ...upcomingBills,
    ...bucketOccurrences,
    ...checkingEvents,
  ].sort(function (a, b) {
    const aDate = parseLocalDate(a.dueDate);
    const bDate = parseLocalDate(b.dueDate);

    if (!aDate && !bDate) return 0;
    if (!aDate) return 1;
    if (!bDate) return -1;

    const dateDiff = aDate - bDate;
    if (dateDiff !== 0) return dateDiff;

    return (
      getPriorityRank(a.priority || "flexible") -
      getPriorityRank(b.priority || "flexible")
    );
  });

  if (upcoming.length === 0) {
    setHtml(
      el.upcomingBillsList,
      `<p class="timeline-empty">No bills or bucket spending are due before your next paycheck.</p>`,
    );
    return;
  }

  for (let i = 0; i < upcoming.length; i++) {
    const bill = upcoming[i];

    const row = document.createElement("div");
    row.className = "timeline-item";

    const upcomingStatus =
      bill.type === "bucket"
        ? "due-soon"
        : bill.type === "life-event"
          ? bill.amount < 0
            ? "income"
            : "due-soon"
          : getBillStatus(bill, payDate, today);

    const upcomingBadge =
      upcomingStatus === "overdue"
        ? `<span class="event-badge event-badge-overdue">Overdue</span>`
        : upcomingStatus === "income"
          ? `<span class="event-badge event-badge-income">Boost</span>`
          : upcomingStatus === "due-soon"
            ? `<span class="event-badge event-badge-warning">Due Soon</span>`
            : `<span class="event-badge event-badge-expense">Upcoming</span>`;

    row.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-title-row">
          <div class="timeline-title">${bill.name}</div>
          ${upcomingBadge}
        </div>
        <div class="timeline-date">
          ${bill.type === "bucket" ? "Spending Bucket" : bill.type === "life-event" ? "Life Event" : formatCategory(bill.category)} • Due ${formatDate(
            bill.dueDate,
          )}
        </div>
      </div>
      <div class="timeline-right">
        <div class="timeline-amount ${bill.amount < 0 ? "status-positive" : ""}">${bill.amount < 0 ? "+" : ""}${formatCurrency(Math.abs(bill.amount))}</div>
      </div>
    `;

    el.upcomingBillsList.appendChild(row);
  }
}

function renderCashFlowWarning() {
  if (!el.cashFlowWarningCard || !el.cashFlowWarningMessage) return;

  const stress = getStressTestSettings();
  let balance = safeNumber(el.currentBalanceInput.value);

  if (stress.mode === "surprise-expense") {
    balance -= stress.amount;
  }

  const nextPayDate = getEffectiveNextPayDateString();

  if (!nextPayDate) {
    el.cashFlowWarningCard.classList.add("hidden");
    el.cashFlowWarningMessage.innerHTML = "";
    return;
  }

  const payDate = parseLocalDate(nextPayDate);

  if (!payDate) {
    el.cashFlowWarningCard.classList.add("hidden");
    el.cashFlowWarningMessage.innerHTML = "";
    return;
  }

  const items = getCombinedItemsBeforePayday(payDate);
  let totalDue = 0;

  for (let i = 0; i < items.length; i++) {
    totalDue += items[i].amount;
  }

  const projectedBeforePaycheck = balance - totalDue;
  const titleNode = el.cashFlowWarningCard.querySelector(
    ".cash-flow-warning-title",
  );
  el.cashFlowWarningCard.classList.remove("hidden");

  if (projectedBeforePaycheck < 0) {
    if (titleNode) titleNode.textContent = "Risk before payday";
    setHtml(
      el.cashFlowWarningMessage,
      `<div class="warning-box warning-box-danger">Your balance may go negative before the next paycheck. Review upcoming bills and cut back flexible spending.</div>`,
    );
  } else if (projectedBeforePaycheck < 100) {
    if (titleNode) titleNode.textContent = "Tight before payday";
    setHtml(
      el.cashFlowWarningMessage,
      `<div class="warning-box warning-box-warning">Your margin before payday is getting thin. Keep extra spending light until the next check lands.</div>`,
    );
  } else {
    if (titleNode) titleNode.textContent = "Status before payday";
    setHtml(
      el.cashFlowWarningMessage,
      `<div class="warning-box warning-box-good">Your balance before the next paycheck looks stable right now.</div>`,
    );
  }
}

function renderTimeline() {
  if (!el.timelineList) return;

  el.timelineList.innerHTML = "";

  const stress = getStressTestSettings();
  let balance = safeNumber(el.currentBalanceInput.value);

  if (stress.mode === "surprise-expense") {
    balance -= stress.amount;
  }

  const nextPayDate = getEffectiveNextPayDateString();

  if (!nextPayDate) {
    setHtml(
      el.timelineList,
      `<p class="timeline-empty">Enter a next paycheck date to see your timeline.</p>`,
    );
    return;
  }

  const payDate = parseLocalDate(nextPayDate);

  if (!payDate) {
    setHtml(
      el.timelineList,
      `<p class="timeline-empty">Enter a valid next paycheck date to see your timeline.</p>`,
    );
    return;
  }

  const timelineItems = getCombinedItemsBeforePayday(payDate);

  if (
    bills.length === 0 &&
    spendingBuckets.length === 0 &&
    lifeEvents.length === 0
  ) {
    setHtml(
      el.timelineList,
      `<p class="timeline-empty">Add bills or spending buckets to see how your balance will change before your next paycheck.</p>`,
    );
    return;
  }

  if (timelineItems.length === 0) {
    setHtml(
      el.timelineList,
      `<p class="timeline-empty">Good news — no bills or bucket spending are due before your next paycheck.</p>`,
    );
    return;
  }

  let runningBalance = balance;

  const startItem = document.createElement("div");
  startItem.className = "timeline-item timeline-start";

  startItem.innerHTML = `
    <div class="timeline-left">
      <div class="timeline-title">Starting Balance</div>
      <div class="timeline-date">Today</div>
    </div>
    <div class="timeline-right">
      <div class="timeline-amount ${getBalanceStatus(runningBalance)}">${formatCurrency(balance)}</div>
      <div class="timeline-balance">Current balance</div>
    </div>
  `;

  el.timelineList.appendChild(startItem);

  for (let i = 0; i < timelineItems.length; i++) {
    const item = timelineItems[i];
    runningBalance -= item.amount;

    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";

    const dueBadge =
      item.type === "bucket"
        ? `<span class="event-badge event-badge-warning">Bucket</span>`
        : item.type === "life-event"
          ? item.amount < 0
            ? `<span class="event-badge event-badge-income">Boost</span>`
            : `<span class="event-badge event-badge-warning">Event</span>`
          : parseLocalDate(item.dueDate) < getTodayLocal()
            ? `<span class="event-badge event-badge-overdue">Overdue</span>`
            : `<span class="event-badge event-badge-expense">Upcoming</span>`;

    timelineItem.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-title-row">
          <div class="timeline-title">${item.name}</div>
          ${dueBadge}
        </div>
        <div class="timeline-date">
          ${item.type === "bucket" ? "Spending Bucket" : item.type === "life-event" ? "Life Event" : "Bill"} • Due ${formatDate(item.dueDate)}
        </div>
      </div>
      <div class="timeline-right">
        <div class="timeline-amount ${item.amount < 0 ? "status-positive" : ""}">${item.amount < 0 ? "+" : "-"}${formatCurrency(Math.abs(item.amount))}</div>
        <div class="timeline-balance ${getBalanceStatus(runningBalance)}">Balance: ${formatCurrency(
          runningBalance,
        )}</div>
      </div>
    `;

    el.timelineList.appendChild(timelineItem);
  }
}

function getForecastEvents() {
  const stress = getStressTestSettings();
  let balance = safeNumber(el.currentBalanceInput.value);

  if (stress.mode === "surprise-expense") {
    balance -= stress.amount;
  }

  const nextPayDate = getEffectiveNextPayDateString();
  const nextPayAmount = getStressAdjustedNextPaycheckAmount();
  const payFrequency = el.payFrequencyInput.value;

  if (!nextPayDate || nextPayAmount <= 0) return [];

  const firstPayDate = parseLocalDate(nextPayDate);
  if (!firstPayDate) return [];

  const futurePaychecks = getFuturePaychecks(firstPayDate, payFrequency, 4);
  const forecastEndDate = futurePaychecks[futurePaychecks.length - 1];
  const events = [];

  events.push({
    type: "starting-balance",
    date: getTodayLocal(),
    label: "Starting Balance",
    amount: balance,
  });

  for (let i = 0; i < futurePaychecks.length; i++) {
    events.push({
      type: "paycheck",
      date: futurePaychecks[i],
      label: "Paycheck",
      amount: nextPayAmount,
    });
  }

  for (let i = 0; i < bills.length; i++) {
    if (isBillPaid(bills[i])) continue;

    const billEvents = getForecastBillEvents(bills[i], forecastEndDate);
    for (let j = 0; j < billEvents.length; j++) {
      events.push(billEvents[j]);
    }
  }

  const bucketOccurrences = getBucketOccurrencesUntil(forecastEndDate);
  const lifeEventForecasts =
    getCheckingLifeEventForecastEvents(forecastEndDate);

  for (let i = 0; i < bucketOccurrences.length; i++) {
    const bucketDate = parseLocalDate(bucketOccurrences[i].dueDate);

    if (bucketDate) {
      events.push({
        type: "bucket",
        date: bucketDate,
        label: bucketOccurrences[i].name,
        amount: -bucketOccurrences[i].amount,
      });
    }
  }

  for (let i = 0; i < lifeEventForecasts.length; i++) {
    events.push(lifeEventForecasts[i]);
  }

  events.sort(function (a, b) {
    const dateDifference = a.date - b.date;
    if (dateDifference !== 0) return dateDifference;

    const order = {
      "starting-balance": 0,
      paycheck: 1,
      bill: 2,
      bucket: 3,
      "life-event-expense": 4,
      "life-event-income": 1,
    };

    return order[a.type] - order[b.type];
  });

  return events;
}

function renderForecastTimeline() {
  if (!el.forecastTimeline) return;

  el.forecastTimeline.innerHTML = "";

  const events = getForecastEvents();

  if (events.length === 0) {
    setHtml(
      el.forecastTimeline,
      `<p class="timeline-empty">Enter a next paycheck date, paycheck amount, and pay frequency to see your forecast.</p>`,
    );
    return;
  }

  let runningBalance = 0;

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    if (event.type === "starting-balance") {
      runningBalance = event.amount;
    } else {
      runningBalance += event.amount;
    }

    const row = document.createElement("div");
    row.className = "timeline-item";

    let amountText = "";
    if (event.type === "paycheck" || event.type === "life-event-income") {
      amountText = `+${formatCurrency(Math.abs(event.amount))}`;
    } else if (
      event.type === "bill" ||
      event.type === "bucket" ||
      event.type === "life-event-expense"
    ) {
      amountText = `-${formatCurrency(Math.abs(event.amount))}`;
    } else {
      amountText = formatCurrency(event.amount);
    }

    const eventBadge =
      event.type === "starting-balance"
        ? `<span class="event-badge event-badge-neutral">Start</span>`
        : event.type === "paycheck"
          ? `<span class="event-badge event-badge-income">Paycheck</span>`
          : event.type === "life-event-income"
            ? `<span class="event-badge event-badge-income">Boost</span>`
            : event.type === "bucket"
              ? `<span class="event-badge event-badge-warning">Bucket</span>`
              : event.type === "life-event-expense"
                ? `<span class="event-badge event-badge-warning">Event</span>`
                : `<span class="event-badge event-badge-expense">Bill</span>`;

    row.innerHTML = `
      <div class="timeline-left">
        <div class="timeline-title-row">
          <div class="timeline-title">${event.label}</div>
          ${eventBadge}
        </div>
        <div class="timeline-date">${formatEventDate(event.date)}</div>
      </div>
      <div class="timeline-right">
        <div class="timeline-amount">${amountText}</div>
        <div class="timeline-balance ${getBalanceStatus(runningBalance)}">Balance: ${formatCurrency(
          runningBalance,
        )}</div>
      </div>
    `;

    el.forecastTimeline.appendChild(row);
  }
}

function renderBalanceForecastChart() {
  const events = getForecastEvents();

  if (!el.balanceForecastChartCanvas) return;

  balanceForecastChart = destroyChart(balanceForecastChart);

  if (events.length === 0) return;

  const labels = [];
  const balances = [];
  let runningBalance = 0;

  for (let i = 0; i < events.length; i++) {
    const event = events[i];

    if (event.type === "starting-balance") {
      runningBalance = event.amount;
    } else {
      runningBalance += event.amount;
    }

    labels.push(`${formatEventDate(event.date)} - ${event.label}`);
    balances.push(runningBalance);
  }

  balanceForecastChart = new Chart(el.balanceForecastChartCanvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Projected Balance",
          data: balances,
          fill: false,
          tension: 0.2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Balance: ${formatCurrency(context.raw)}`;
            },
          },
        },
      },
      scales: {
        y: {
          ticks: {
            callback: function (value) {
              return formatCurrency(value);
            },
          },
        },
      },
    },
  });
}

function getAllocatedBillStatuses(billsForGroup, paycheckAmount) {
  let remaining = paycheckAmount;
  const results = [];
  const allocationMode = el.allocationModeInput
    ? el.allocationModeInput.value
    : "normal";
  const sortedBills = sortBillsForAllocation(billsForGroup, allocationMode);

  for (let i = 0; i < sortedBills.length; i++) {
    const bill = sortedBills[i];
    let coveredAmount = 0;
    let status = "uncovered";

    if (remaining >= bill.amount) {
      coveredAmount = bill.amount;
      remaining -= bill.amount;
      status = "covered";
    } else if (remaining > 0) {
      coveredAmount = remaining;
      remaining = 0;
      status = "partial";
    }

    results.push({
      ...bill,
      coveredAmount,
      uncoveredAmount: bill.amount - coveredAmount,
      status,
    });
  }

  return {
    bills: results,
    remaining,
  };
}

function getShortfallSuggestions(allocationBills, shortfallAmount) {
  const flexibleBills = allocationBills
    .filter(function (bill) {
      return bill.priority === "flexible";
    })
    .sort(function (a, b) {
      return b.amount - a.amount;
    });

  const suggestions = [];
  let remainingShortfall = shortfallAmount;
  let totalRelief = 0;

  for (let i = 0; i < flexibleBills.length; i++) {
    const bill = flexibleBills[i];

    suggestions.push({
      name: bill.name,
      amount: bill.amount,
      dueDate: bill.dueDate,
    });

    totalRelief += bill.amount;
    remainingShortfall -= bill.amount;

    if (remainingShortfall <= 0) break;
  }

  return {
    suggestions,
    totalRelief,
    remainingShortfall: Math.max(0, remainingShortfall),
  };
}

function getPaycheckAllocationGroups() {
  const nextPayDate = getEffectiveNextPayDateString();
  const nextPayAmount = getStressAdjustedNextPaycheckAmount();
  const payFrequency = el.payFrequencyInput.value;

  if (!nextPayDate || nextPayAmount <= 0) return [];

  const firstPayDate = parseLocalDate(nextPayDate);
  if (!firstPayDate) return [];

  const futurePaychecks = getFuturePaychecks(firstPayDate, payFrequency, 4);
  const allocationMode = el.allocationModeInput
    ? el.allocationModeInput.value
    : "normal";

  const groups = futurePaychecks.map(function (date, index) {
    return {
      id: index,
      paycheckDate: date,
      paycheckAmount: nextPayAmount,
      startingBalance: nextPayAmount,
      bills: [],
      totalAssigned: 0,
      remaining: nextPayAmount,
      shortfall: 0,
    };
  });

  const forecastEndDate = futurePaychecks[futurePaychecks.length - 1];
  const forecastBills = getForecastBillOccurrences(forecastEndDate);

  if (allocationMode === "normal") {
    const sortedBills = sortBillsForAllocation(forecastBills, "normal");

    for (let i = 0; i < sortedBills.length; i++) {
      const bill = sortedBills[i];
      const billDate = parseLocalDate(bill.dueDate);

      let assignedIndex = -1;

      for (let j = 0; j < groups.length; j++) {
        if (groups[j].paycheckDate >= billDate) {
          assignedIndex = j;
          break;
        }
      }

      if (assignedIndex === -1) assignedIndex = groups.length - 1;

      groups[assignedIndex].bills.push({
        ...bill,
        coveredAmount: 0,
        uncoveredAmount: bill.amount,
        status: "uncovered",
      });

      groups[assignedIndex].totalAssigned += bill.amount;
    }

    for (let i = 0; i < groups.length; i++) {
      const allocation = getAllocatedBillStatuses(
        groups[i].bills,
        groups[i].startingBalance,
      );

      groups[i].bills = allocation.bills;
      groups[i].remaining = allocation.remaining;
      groups[i].shortfall = groups[i].bills.reduce(function (sum, bill) {
        return sum + bill.uncoveredAmount;
      }, 0);

      if (i < groups.length - 1 && groups[i].remaining > 0) {
        groups[i + 1].startingBalance += groups[i].remaining;
        groups[i + 1].remaining = groups[i + 1].startingBalance;
      }
    }

    return groups;
  }

  const survivalBills = sortBillsForAllocation(forecastBills, "survival").map(
    function (bill) {
      return {
        ...bill,
        coveredAmount: 0,
        uncoveredAmount: bill.amount,
        status: "uncovered",
        assignedGroupId: null,
      };
    },
  );

  for (let i = 0; i < survivalBills.length; i++) {
    const bill = survivalBills[i];
    let remainingNeeded = bill.amount;

    for (let j = 0; j < groups.length; j++) {
      if (groups[j].remaining <= 0) continue;

      const amountToUse = Math.min(groups[j].remaining, remainingNeeded);

      if (amountToUse > 0) {
        groups[j].remaining -= amountToUse;
        remainingNeeded -= amountToUse;
        bill.coveredAmount += amountToUse;
      }

      if (remainingNeeded <= 0) break;
    }

    bill.uncoveredAmount = bill.amount - bill.coveredAmount;

    if (bill.coveredAmount >= bill.amount) {
      bill.status = "covered";
    } else if (bill.coveredAmount > 0) {
      bill.status = "partial";
    } else {
      bill.status = "uncovered";
    }

    let assignedIndex = -1;
    const billDate = parseLocalDate(bill.dueDate);

    for (let j = 0; j < groups.length; j++) {
      if (groups[j].paycheckDate >= billDate) {
        assignedIndex = j;
        break;
      }
    }

    if (assignedIndex === -1) assignedIndex = groups.length - 1;

    bill.assignedGroupId = assignedIndex;
    groups[assignedIndex].bills.push(bill);
    groups[assignedIndex].totalAssigned += bill.amount;
  }

  for (let i = 0; i < groups.length; i++) {
    groups[i].bills.sort(function (a, b) {
      const priorityDiff =
        getPriorityRank(a.priority) - getPriorityRank(b.priority);
      if (priorityDiff !== 0) return priorityDiff;

      const aDate = parseLocalDate(a.dueDate);
      const bDate = parseLocalDate(b.dueDate);

      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;

      return aDate - bDate;
    });

    groups[i].shortfall = groups[i].bills.reduce(function (sum, bill) {
      return sum + bill.uncoveredAmount;
    }, 0);
  }

  return groups;
}

function renderAllocationSummary(groups) {
  if (!el.paycheckAssignments) return;

  const allocationMode = el.allocationModeInput
    ? el.allocationModeInput.value
    : "normal";
  const modeLabel =
    allocationMode === "survival" ? "Survival Mode" : "Normal Mode";

  const shortGroups = groups.filter(function (group) {
    return group.shortfall > 0;
  });

  if (shortGroups.length === 0) {
    const summary = document.createElement("div");
    summary.className = "card assignment-summary-card";
    summary.style.marginBottom = "16px";
    summary.innerHTML = `
      <div class="assignment-header">
        <div class="assignment-title-wrap">
          <h3 class="assignment-title">Allocation Summary</h3>
          <div class="assignment-subtitle">All currently assigned bills fit within the forecasted paychecks</div>
        </div>
      </div>
      <p class="status-good">Everything currently fits inside your projected paycheck plan.</p>
    `;
    el.paycheckAssignments.appendChild(summary);
    return;
  }

  let totalShortfall = 0;
  for (let i = 0; i < shortGroups.length; i++) {
    totalShortfall += shortGroups[i].shortfall;
  }

  const firstShortGroup = shortGroups[0];

  const summary = document.createElement("div");
  summary.className = "card assignment-summary-card";
  summary.style.marginBottom = "16px";
  summary.innerHTML = `
    <div class="assignment-header">
      <div class="assignment-title-wrap">
        <h3 class="assignment-title">Allocation Summary</h3>
        <div class="assignment-subtitle">A quick view of where your plan starts falling short</div>
      </div>
    </div>

    <div class="assignment-metrics">
      <div class="assignment-metric">
        <span class="assignment-metric-label">Paychecks Short</span>
        <span class="assignment-metric-value">${shortGroups.length}</span>
      </div>

      <div class="assignment-metric">
        <span class="assignment-metric-label">Total Shortfall</span>
        <span class="assignment-metric-value status-danger">${formatCurrency(totalShortfall)}</span>
      </div>

      <div class="assignment-metric">
        <span class="assignment-metric-label">Mode</span>
        <span class="assignment-metric-value">${modeLabel}</span>
      </div>
    </div>

    <p><strong>First Short Paycheck:</strong> ${formatEventDate(firstShortGroup.paycheckDate)}</p>
  `;

  el.paycheckAssignments.appendChild(summary);
}

function renderPaycheckAssignments() {
  if (!el.paycheckAssignments) return;

  el.paycheckAssignments.innerHTML = "";

  const groups = getPaycheckAllocationGroups();

  if (groups.length === 0) {
    setHtml(
      el.paycheckAssignments,
      `<p class="timeline-empty">Enter a next paycheck date, paycheck amount, and pay frequency to see paycheck assignments.</p>`,
    );
    return;
  }

  renderAllocationSummary(groups);

  let hasAssignments = false;

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (group.bills.length === 0) continue;

    hasAssignments = true;

    const section = document.createElement("div");
    section.className = "card assignment-paycheck-card";
    section.style.marginBottom = "16px";

    let billsHtml = "";

    for (let j = 0; j < group.bills.length; j++) {
      const bill = group.bills[j];

      let statusBadge = "";
      if (bill.status === "covered") {
        statusBadge = `<span class="allocation-badge allocation-covered">Covered</span>`;
      } else if (bill.status === "partial") {
        statusBadge = `<span class="allocation-badge allocation-partial">Partial</span>`;
      } else {
        statusBadge = `<span class="allocation-badge allocation-uncovered">Uncovered</span>`;
      }

      let coverageText = "";
      if (bill.status === "covered") {
        coverageText = `Reserved: ${formatCurrency(bill.coveredAmount)}`;
      } else if (bill.status === "partial") {
        coverageText = `Reserved: ${formatCurrency(bill.coveredAmount)} • Still needed: ${formatCurrency(
          bill.uncoveredAmount,
        )}`;
      } else {
        coverageText = `Still needed: ${formatCurrency(bill.uncoveredAmount)}`;
      }

      billsHtml += `
        <div class="timeline-item">
          <div class="timeline-left">
            <div class="timeline-title">${bill.name} ${statusBadge}</div>
            <div class="timeline-date">
              ${formatCategory(bill.category)} • ${getPriorityLabel(bill.priority)} • Due ${formatDate(
                bill.dueDate,
              )}
            </div>
            <div class="timeline-date">${coverageText}</div>
          </div>
          <div class="timeline-right">
            <div class="timeline-amount ${bill.amount < 0 ? "status-positive" : ""}">${bill.amount < 0 ? "+" : ""}${formatCurrency(Math.abs(bill.amount))}</div>
          </div>
        </div>
      `;
    }

    let coveredCount = 0;
    let partialCount = 0;
    let uncoveredCount = 0;

    for (let j = 0; j < group.bills.length; j++) {
      if (group.bills[j].status === "covered") coveredCount++;
      else if (group.bills[j].status === "partial") partialCount++;
      else uncoveredCount++;
    }

    let statusHtml = `
      <p><strong>Covered Bills:</strong> ${coveredCount}</p>
      <p><strong>Partial Bills:</strong> ${partialCount}</p>
      <p><strong>Uncovered Bills:</strong> ${uncoveredCount}</p>
    `;

    if (group.shortfall > 0) {
      const shortfallPlan = getShortfallSuggestions(
        group.bills,
        group.shortfall,
      );
      let suggestionHtml = "";

      if (shortfallPlan.suggestions.length > 0) {
        let suggestionItems = "";

        for (let k = 0; k < shortfallPlan.suggestions.length; k++) {
          const item = shortfallPlan.suggestions[k];

          suggestionItems += `
            <div class="timeline-item">
              <div class="timeline-left">
                <div class="timeline-title">Delay ${item.name}</div>
                <div class="timeline-date">Due ${formatDate(item.dueDate)}</div>
              </div>
              <div class="timeline-right">
                <div class="timeline-amount">+${formatCurrency(item.amount)}</div>
              </div>
            </div>
          `;
        }

        suggestionHtml = `
          <div class="shortfall-advisor">
            <h4>Suggested Flexible Bills to Delay</h4>
            ${suggestionItems}
            <p><strong>Possible Relief:</strong> ${formatCurrency(shortfallPlan.totalRelief)}</p>
            ${
              shortfallPlan.remainingShortfall > 0
                ? `<p><strong>Still Short After Delays:</strong> <span class="status-danger">${formatCurrency(
                    shortfallPlan.remainingShortfall,
                  )}</span></p>`
                : `<p><strong>Status After Delays:</strong> <span class="status-good">Shortfall could be covered</span></p>`
            }
          </div>
        `;
      } else {
        suggestionHtml = `
          <div class="shortfall-advisor">
            <h4>Suggested Flexible Bills to Delay</h4>
            <p class="timeline-empty">No flexible bills are available to delay for this paycheck.</p>
          </div>
        `;
      }

      statusHtml += `
        <p><strong>Shortfall:</strong> <span class="status-danger">${formatCurrency(group.shortfall)}</span></p>
        ${suggestionHtml}
      `;
    } else {
      statusHtml += `
        <p>
          <strong>Remaining After Assigned Bills:</strong>
          <span class="${getBalanceStatus(group.remaining)}">${formatCurrency(group.remaining)}</span>
        </p>
      `;
    }

    section.innerHTML = `
      <div class="assignment-header">
        <div class="assignment-title-wrap">
          <h3 class="assignment-title">Paycheck ${formatEventDate(group.paycheckDate)}</h3>
          <div class="assignment-subtitle">Reserved bills and remaining room for this pay period</div>
        </div>
      </div>

      <div class="assignment-metrics">
        <div class="assignment-metric">
          <span class="assignment-metric-label">Paycheck Amount</span>
          <span class="assignment-metric-value">${formatCurrency(group.paycheckAmount)}</span>
        </div>

        <div class="assignment-metric">
          <span class="assignment-metric-label">Starting Available</span>
          <span class="assignment-metric-value">${formatCurrency(group.startingBalance)}</span>
        </div>

        <div class="assignment-metric">
          <span class="assignment-metric-label">Assigned Bills</span>
          <span class="assignment-metric-value">${formatCurrency(group.totalAssigned)}</span>
        </div>
      </div>

      ${statusHtml}
      <div class="forecast-section-spacer"></div>
      ${billsHtml}
    `;

    el.paycheckAssignments.appendChild(section);
  }

  if (!hasAssignments) {
    setHtml(
      el.paycheckAssignments,
      `<p class="timeline-empty">No bills were assigned to the next forecasted paychecks.</p>`,
    );
  }
}

function renderCategoryTotals() {
  if (!el.categoryTotalsElement) return;

  const nextPayDate = getEffectiveNextPayDateString();

  if (!nextPayDate) {
    setHtml(
      el.categoryTotalsElement,
      `<p class="timeline-empty">Enter a next paycheck date to see category totals.</p>`,
    );
    return;
  }

  const payDate = parseLocalDate(nextPayDate);

  if (!payDate) {
    setHtml(
      el.categoryTotalsElement,
      `<p class="timeline-empty">Enter a valid next paycheck date to see category totals.</p>`,
    );
    return;
  }

  renderSimpleTotalsList(
    el.categoryTotalsElement,
    getTotalsByCategoryBeforeDate(payDate),
    "No bills due before your next paycheck.",
  );
}

function renderCategoryChart() {
  const nextPayDate = getEffectiveNextPayDateString();

  if (!nextPayDate) {
    if (el.categoryChartCanvas) el.categoryChartCanvas.style.display = "none";
    categoryChart = destroyChart(categoryChart);
    return;
  }

  const payDate = parseLocalDate(nextPayDate);

  if (!payDate) {
    if (el.categoryChartCanvas) el.categoryChartCanvas.style.display = "none";
    categoryChart = destroyChart(categoryChart);
    return;
  }

  categoryChart = renderPieChart(
    el.categoryChartCanvas,
    categoryChart,
    getTotalsByCategoryBeforeDate(payDate),
  );
}

function renderForecastCategoryTotals() {
  if (!el.forecastCategoryTotalsElement) return;

  const forecastEndDate = getForecastEndDate();

  if (!forecastEndDate) {
    setHtml(
      el.forecastCategoryTotalsElement,
      `<p class="timeline-empty">Enter paycheck info to see forecast category totals.</p>`,
    );
    return;
  }

  renderSimpleTotalsList(
    el.forecastCategoryTotalsElement,
    getForecastTotalsByCategory(forecastEndDate),
    "No bills found in the forecast window.",
  );
}

function renderForecastCategoryChart() {
  const forecastEndDate = getForecastEndDate();

  if (!forecastEndDate) {
    if (el.forecastCategoryChartCanvas)
      el.forecastCategoryChartCanvas.style.display = "none";
    forecastCategoryChart = destroyChart(forecastCategoryChart);
    return;
  }

  forecastCategoryChart = renderPieChart(
    el.forecastCategoryChartCanvas,
    forecastCategoryChart,
    getForecastTotalsByCategory(forecastEndDate),
  );
}

function getCycleSnapshot() {
  const stress = getStressTestSettings();
  let balance = safeNumber(el.currentBalanceInput?.value);

  if (stress.mode === "surprise-expense") {
    balance -= stress.amount;
  }

  const nextPayDateString = getEffectiveNextPayDateString();
  const nextPayAmount = getStressAdjustedNextPaycheckAmount();
  const today = getTodayLocal();

  let payDate = null;
  let totalDue = 0;

  if (nextPayDateString) {
    payDate = parseLocalDate(nextPayDateString);

    if (payDate) {
      const items = getCombinedItemsBeforePayday(payDate);
      for (let i = 0; i < items.length; i++) {
        totalDue += items[i].amount;
      }
    }
  }

  const projectedBeforePaycheck = balance - totalDue;
  const projectedAfterPaycheck = projectedBeforePaycheck + nextPayAmount;
  const safeToSpend = projectedBeforePaycheck;
  const daysUntilPayday = payDate ? getDaysBetween(today, payDate) : 0;
  const dailySafeSpend =
    daysUntilPayday > 0 ? safeToSpend / daysUntilPayday : safeToSpend;

  return {
    balance,
    nextPayDateString,
    nextPayAmount,
    payDate,
    totalDue,
    projectedBeforePaycheck,
    projectedAfterPaycheck,
    safeToSpend,
    daysUntilPayday,
    dailySafeSpend,
  };
}

function getNextCycleDueAmount() {
  const snapshot = getCycleSnapshot();
  if (!snapshot.payDate) return 0;

  const frequency = el.payFrequencyInput
    ? el.payFrequencyInput.value
    : "biweekly";
  const future = getFuturePaychecks(snapshot.payDate, frequency, 2);
  const endDate = future.length > 1 ? future[1] : addDays(snapshot.payDate, 14);
  const startTime = snapshot.payDate.getTime();
  const endTime = endDate.getTime();

  let total = 0;

  const billOccurrences = getForecastBillOccurrences(endDate);
  for (let i = 0; i < billOccurrences.length; i++) {
    const due = parseLocalDate(billOccurrences[i].dueDate);
    if (due && due.getTime() > startTime && due.getTime() <= endTime) {
      total += safeNumber(billOccurrences[i].amount);
    }
  }

  const bucketOccurrences = getBucketOccurrencesUntil(endDate);
  for (let i = 0; i < bucketOccurrences.length; i++) {
    const due = parseLocalDate(bucketOccurrences[i].dueDate);
    if (due && due.getTime() > startTime && due.getTime() <= endTime) {
      total += safeNumber(bucketOccurrences[i].amount);
    }
  }

  const events = getLifeEventsUntilDate(endDate);
  for (let i = 0; i < events.length; i++) {
    const due = parseLocalDate(events[i].date);
    if (
      due &&
      due.getTime() > startTime &&
      due.getTime() <= endTime &&
      events[i].funding === "checking"
    ) {
      total += getLifeEventSignedAmount(events[i]);
    }
  }

  return round2(total);
}

function renderFinancialStatus() {
  if (!el.financialStatusSummary) return;

  const snapshot = getCycleSnapshot();
  const nextCycleDue = getNextCycleDueAmount();
  const emergencyFloor = getEmergencyFloor();
  const watchItems = [];

  if (!snapshot.nextPayDateString || snapshot.nextPayAmount <= 0) {
    setHtml(
      el.financialStatusSummary,
      `
        <div class="financial-status-shell">
          <div class="financial-status-main">
            <span class="financial-status-chip financial-status-chip-info">Setup needed</span>
            <h3 class="financial-status-title">Finish your paycheck setup to unlock decision guidance</h3>
            <p class="financial-status-copy">Add your current balance, next paycheck date, and paycheck amount so the app can tell you whether this cycle looks stable or risky.</p>
          </div>
          <div class="financial-status-side">
            <div class="financial-status-watchlist">
              <h3>Start with</h3>
              <ul>
                <li>Today Setup</li>
                <li>At least one bill</li>
                <li>Your next paycheck amount</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    );
    return;
  }

  let status = {
    chip: "Stable",
    tone: "info",
    title:
      "You should make it through this cycle if spending stays controlled.",
    recommendation:
      "Protect your remaining room and keep flexible spending tight until the next paycheck clears.",
  };

  if (
    snapshot.projectedBeforePaycheck < 0 &&
    snapshot.projectedAfterPaycheck < 0
  ) {
    status = {
      chip: "Risk Zone",
      tone: "danger",
      title: "You are projected to stay negative even after payday.",
      recommendation:
        "Cut flexible spending, test a lower-risk scenario, and use the Work Planner to close the gap quickly.",
    };
  } else if (
    snapshot.projectedBeforePaycheck < 0 &&
    snapshot.projectedAfterPaycheck >= 0
  ) {
    status = {
      chip: "Recovery Mode",
      tone: "warn",
      title:
        "You are short before payday, but the next paycheck pulls the cycle back above zero.",
      recommendation:
        "Avoid extra spending before payday and keep the next check focused on recovery, not optional spending.",
    };
  } else if (
    snapshot.projectedAfterPaycheck >= 600 &&
    snapshot.dailySafeSpend >= 35
  ) {
    status = {
      chip: "Comfortable",
      tone: "good",
      title: "This cycle has real breathing room after payday.",
      recommendation:
        "You have room to protect savings, hit debt, or keep a stronger cushion for the next cycle.",
    };
  } else if (snapshot.projectedAfterPaycheck >= 150) {
    status = {
      chip: "Stable",
      tone: "info",
      title: "Your bills look covered, but the cushion is still limited.",
      recommendation:
        "Stay disciplined with day-to-day spending so the cushion survives the rest of the cycle.",
    };
  } else {
    status = {
      chip: "Tight",
      tone: "warn",
      title:
        "You are covering the cycle, but there is not much margin for surprises.",
      recommendation:
        "Treat this like a low-spend stretch and check the Payday Readiness Ladder before committing extra money.",
    };
  }

  if (snapshot.projectedBeforePaycheck < 0) {
    watchItems.push(
      `Short before payday: ${formatCurrency(Math.abs(snapshot.projectedBeforePaycheck))}`,
    );
  }

  if (
    snapshot.projectedAfterPaycheck >= 0 &&
    snapshot.projectedAfterPaycheck < 250
  ) {
    watchItems.push(
      `After-paycheck cushion is only ${formatCurrency(snapshot.projectedAfterPaycheck)}`,
    );
  }

  if (snapshot.dailySafeSpend < 20 && snapshot.daysUntilPayday > 0) {
    watchItems.push(
      `Daily safe spending is only ${formatCurrency(snapshot.dailySafeSpend)} for the next ${snapshot.daysUntilPayday} day${snapshot.daysUntilPayday === 1 ? "" : "s"}`,
    );
  }

  if (nextCycleDue > 0) {
    watchItems.push(
      `Next-cycle bills after payday: ${formatCurrency(nextCycleDue)}`,
    );
  }

  if (emergencyFloor > 0) {
    const gap = Math.max(0, emergencyFloor - getEmergencySavingsBalance());
    watchItems.push(
      gap > 0
        ? `Emergency fund gap: ${formatCurrency(gap)}`
        : "Emergency fund floor is currently covered",
    );
  }

  if (!watchItems.length) {
    watchItems.push(
      "Keep your paycheck and bills updated so this decision view stays accurate.",
    );
  }

  setHtml(
    el.financialStatusSummary,
    `
      <div class="financial-status-shell">
        <div class="financial-status-main">
          <span class="financial-status-chip financial-status-chip-${status.tone}">${status.chip}</span>
          <h3 class="financial-status-title">${status.title}</h3>
          <p class="financial-status-copy">${status.recommendation}</p>

          <div class="financial-status-grid">
            <div class="financial-status-metric">
              <span class="financial-status-label">Safe to spend now</span>
              <strong class="financial-status-value ${getBalanceStatus(snapshot.safeToSpend)}" data-animate-value="true">${formatCurrency(snapshot.safeToSpend)}</strong>
            </div>
            <div class="financial-status-metric">
              <span class="financial-status-label">Before payday</span>
              <strong class="financial-status-value ${getBalanceStatus(snapshot.projectedBeforePaycheck)}" data-animate-value="true">${formatCurrency(snapshot.projectedBeforePaycheck)}</strong>
            </div>
            <div class="financial-status-metric">
              <span class="financial-status-label">After paycheck</span>
              <strong class="financial-status-value ${getBalanceStatus(snapshot.projectedAfterPaycheck)}" data-animate-value="true">${formatCurrency(snapshot.projectedAfterPaycheck)}</strong>
            </div>
            <div class="financial-status-metric">
              <span class="financial-status-label">Daily safe spend</span>
              <strong class="financial-status-value" data-animate-value="true">${formatCurrency(snapshot.dailySafeSpend)}</strong>
            </div>
          </div>
        </div>

        <div class="financial-status-side">
          <div class="financial-status-watchlist">
            <h3>What to watch</h3>
            <ul>
              ${watchItems
                .map(function (item) {
                  return `<li>${item}</li>`;
                })
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    `,
  );
}

function renderStarterGuide() {
  if (!el.starterGuideCard || !el.starterGuideSummary) return;

  const checklist = [
    {
      label: "Today Setup",
      done:
        safeNumber(el.currentBalanceInput?.value) !== 0 ||
        !!el.currentBalanceInput?.value,
      copy: "Add your current balance so the app knows where this cycle starts.",
    },
    {
      label: "Next Paycheck",
      done:
        Boolean(el.nextPayDateInput?.value) &&
        safeNumber(el.nextPayAmountInput?.value) > 0,
      copy: "Add the date and amount of your next paycheck so the cycle can be calculated.",
    },
    {
      label: "Bills",
      done: bills.length > 0,
      copy: "Add at least one bill so your short-term cash pressure is real.",
    },
  ];

  const complete = checklist.filter(function (item) {
    return item.done;
  }).length;
  const percent = Math.round((complete / checklist.length) * 100);

  if (percent >= 100) {
    el.starterGuideCard.classList.add("hidden");
    return;
  }

  el.starterGuideCard.classList.remove("hidden");

  const nextStep =
    checklist.find(function (item) {
      return !item.done;
    }) || checklist[0];

  setHtml(
    el.starterGuideSummary,
    `
      <div class="starter-guide-shell">
        <div class="starter-guide-top-row">
          <div>
            <div class="starter-guide-progress-label">Setup progress</div>
            <div class="starter-guide-progress-value">${percent}% complete</div>
          </div>
          <div class="starter-guide-pill">${complete}/${checklist.length} done</div>
        </div>

        <div class="starter-guide-progress-bar"><span style="width:${percent}%"></span></div>

        <div class="starter-guide-next-step">
          <span class="starter-guide-next-label">Next best step</span>
          <strong>${nextStep.label}</strong>
          <p>${nextStep.copy}</p>
        </div>

        <div class="starter-checklist">
          ${checklist
            .map(function (item) {
              return `
              <div class="starter-check-item">
                <div class="starter-guide-pill">${item.done ? "Done" : "Next"}</div>
                <div>
                  <strong>${item.label}</strong>
                  <p>${item.copy}</p>
                </div>
              </div>
            `;
            })
            .join("")}
        </div>
      </div>
    `,
  );
}

function renderPaycheckAllocationSummary() {
  if (!el.paycheckAllocationSummary) return;

  const snapshot = getCycleSnapshot();
  const nextCycleDue = getNextCycleDueAmount();
  const workSettings = getWorkPlannerSettings();
  const shortBefore = Math.max(0, round2(-snapshot.projectedBeforePaycheck));
  const shortAfter = Math.max(0, round2(-snapshot.projectedAfterPaycheck));

  if (!snapshot.nextPayDateString || snapshot.nextPayAmount <= 0) {
    setHtml(
      el.paycheckAllocationSummary,
      '<p class="timeline-empty">Add your next paycheck date and amount to see a suggested payday allocation plan.</p>',
    );
    return;
  }

  const availableAfterPay = Math.max(
    0,
    round2(snapshot.projectedAfterPaycheck),
  );
  const emergencyGap = Math.max(
    0,
    round2(getEmergencyFloor() - getEmergencySavingsBalance()),
  );
  const debtTarget = getBestDebtTarget();
  const baseBufferTarget =
    nextCycleDue > 0 ? clamp(round2(nextCycleDue * 0.15), 100, 400) : 150;

  let remaining = availableAfterPay;
  const plan = {
    nextCycleBills: round2(Math.min(remaining, Math.max(0, nextCycleDue))),
    safetyBuffer: 0,
    emergencySavings: 0,
    debtAcceleration: 0,
    safeSpending: 0,
  };

  remaining = Math.max(0, round2(remaining - plan.nextCycleBills));

  if (remaining > 0) {
    plan.safetyBuffer = round2(Math.min(remaining, baseBufferTarget));
    remaining = Math.max(0, round2(remaining - plan.safetyBuffer));
  }

  if (remaining > 0 && emergencyGap > 0) {
    plan.emergencySavings = round2(
      Math.min(remaining, Math.min(emergencyGap, 250)),
    );
    remaining = Math.max(0, round2(remaining - plan.emergencySavings));
  }

  if (remaining > 0 && debtTarget) {
    plan.debtAcceleration = round2(
      Math.min(
        remaining,
        Math.min(safeNumber(debtTarget.balance), Math.max(50, remaining * 0.5)),
      ),
    );
    remaining = Math.max(0, round2(remaining - plan.debtAcceleration));
  }

  plan.safeSpending = round2(remaining);

  const recoveryGap = Math.max(shortBefore, shortAfter);
  const recoveryHours =
    recoveryGap > 0 ? estimateHoursForTakeHome(recoveryGap, workSettings) : 0;
  const paychecksToRecover =
    shortAfter > 0 && snapshot.nextPayAmount > 0
      ? Math.ceil(shortAfter / snapshot.nextPayAmount)
      : 0;

  const statusChip =
    shortAfter > 0
      ? '<span class="readiness-status-chip readiness-status-danger">Short on payday</span>'
      : shortBefore > 0
        ? '<span class="readiness-status-chip readiness-status-warn">Recovery focus</span>'
        : '<span class="readiness-status-chip readiness-status-good">Ready to allocate</span>';

  const notes = [];
  if (shortAfter > 0) {
    notes.push(
      `You are still short ${formatCurrency(shortAfter)} after payday. Protective allocations are paused until the shortfall is covered.`,
    );
  } else if (shortBefore > 0) {
    notes.push(
      `You are short ${formatCurrency(shortBefore)} before payday, so the next check should stay recovery-focused first.`,
    );
  }
  if (plan.nextCycleBills > 0)
    notes.push(
      `Set aside ${formatCurrency(plan.nextCycleBills)} for bills that land before the following paycheck.`,
    );
  if (plan.emergencySavings > 0)
    notes.push(
      `Move ${formatCurrency(plan.emergencySavings)} toward your emergency floor while there is room.`,
    );
  if (plan.debtAcceleration > 0 && debtTarget)
    notes.push(
      `Send ${formatCurrency(plan.debtAcceleration)} toward ${debtTarget.name} as your suggested extra debt hit.`,
    );
  if (!notes.length)
    notes.push(
      "This paycheck is mostly survival-focused, so keep spending tight and protect cash first.",
    );

  setHtml(
    el.paycheckAllocationSummary,
    `
      <div class="readiness-header-row">
        <div>
          ${statusChip}
          <p class="readiness-copy">A suggested payday breakdown using your current cash flow, next-cycle bills, emergency floor, and debt setup.</p>
        </div>
        <div class="readiness-afterpay">
          <span class="readiness-afterpay-label">After-paycheck room</span>
          <strong class="readiness-afterpay-value ${getBalanceStatus(snapshot.projectedAfterPaycheck)}" data-animate-value="true">${formatCurrency(snapshot.projectedAfterPaycheck)}</strong>
        </div>
      </div>

      <div class="planner-summary-grid">
        <div class="planner-summary-card">
          <span class="planner-summary-label">Short before payday</span>
          <span class="planner-summary-value ${shortBefore > 0 ? "status-danger" : "status-good"}" data-animate-value="true">${formatCurrency(shortBefore)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Short after paycheck</span>
          <span class="planner-summary-value ${shortAfter > 0 ? "status-danger" : "status-good"}" data-animate-value="true">${formatCurrency(shortAfter)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Next-cycle bills</span>
          <span class="planner-summary-value" data-animate-value="true">${formatCurrency(nextCycleDue)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Recovery work needed</span>
          <span class="planner-summary-value">${recoveryGap > 0 ? (recoveryHours === null ? "Add pay info" : `${formatHours(recoveryHours)} hrs`) : "Covered"}</span>
        </div>
      </div>

      <div class="readiness-tier-grid">
        <article class="readiness-tier readiness-tier-info">
          <div class="readiness-tier-top"><span class="readiness-tier-label">Next-cycle bills</span><strong class="readiness-tier-target">${formatCurrency(plan.nextCycleBills)}</strong></div>
          <div class="readiness-tier-row"><span>Protect the next stretch</span><strong>${nextCycleDue > 0 ? "Suggested" : "None yet"}</strong></div>
        </article>
        <article class="readiness-tier readiness-tier-good">
          <div class="readiness-tier-top"><span class="readiness-tier-label">Safety buffer</span><strong class="readiness-tier-target">${formatCurrency(plan.safetyBuffer)}</strong></div>
          <div class="readiness-tier-row"><span>Keep in checking</span><strong>${formatCurrency(baseBufferTarget)} target</strong></div>
        </article>
        <article class="readiness-tier readiness-tier-info">
          <div class="readiness-tier-top"><span class="readiness-tier-label">Emergency savings</span><strong class="readiness-tier-target">${formatCurrency(plan.emergencySavings)}</strong></div>
          <div class="readiness-tier-row"><span>Gap to floor</span><strong>${formatCurrency(emergencyGap)}</strong></div>
        </article>
        <article class="readiness-tier readiness-tier-warn">
          <div class="readiness-tier-top"><span class="readiness-tier-label">Debt acceleration</span><strong class="readiness-tier-target">${formatCurrency(plan.debtAcceleration)}</strong></div>
          <div class="readiness-tier-row"><span>Top target</span><strong>${debtTarget ? debtTarget.name : "No debt added"}</strong></div>
        </article>
        <article class="readiness-tier readiness-tier-good">
          <div class="readiness-tier-top"><span class="readiness-tier-label">Safe spending</span><strong class="readiness-tier-target">${formatCurrency(plan.safeSpending)}</strong></div>
          <div class="readiness-tier-row"><span>Left after priorities</span><strong>${shortAfter > 0 ? "Paused" : "Available"}</strong></div>
        </article>
      </div>

      <div class="readiness-focus card-soft-panel">
        <h3>Payday plan notes</h3>
        <ul class="readiness-focus-list">
          ${notes
            .map(function (item) {
              return `<li>${item}</li>`;
            })
            .join("")}
          ${paychecksToRecover > 0 ? `<li>Estimated paychecks to recover if nothing changes: ${paychecksToRecover}</li>` : ""}
        </ul>
      </div>
    `,
  );
}

function renderPaydayReadinessSummary() {
  if (!el.paydayReadinessSummary) return;

  const snapshot = getCycleSnapshot();
  const workSettings = getWorkPlannerSettings();
  const afterPay = snapshot.projectedAfterPaycheck;

  const targetLevels = [
    { label: "Cycle covered", amount: 0, tone: "good" },
    { label: "Breathing room", amount: 250, tone: "good" },
    { label: "Comfort buffer", amount: 500, tone: "info" },
    { label: "Strong cushion", amount: 1000, tone: "info" },
  ];

  const readinessStatus =
    afterPay >= 1000
      ? {
          label: "Strong",
          tone: "good",
          copy: "You have real room after payday. Focus on debt, savings, or staying disciplined.",
        }
      : afterPay >= 500
        ? {
            label: "Stable",
            tone: "good",
            copy: "This cycle looks manageable. Keep an eye on flexible spending so you protect the cushion.",
          }
        : afterPay >= 0
          ? {
              label: "Tight",
              tone: "warn",
              copy: "You are covering the cycle, but there is not much room for surprises.",
            }
          : {
              label: "Behind",
              tone: "danger",
              copy: "This cycle is projected negative after payday. A cut, delay, or extra expense could hit hard.",
            };

  const targetCards = targetLevels
    .map(function (target) {
      const gap = Math.max(0, round2(target.amount - afterPay));
      const hoursNeeded =
        gap > 0 ? estimateHoursForTakeHome(gap, workSettings) : 0;
      const hoursText =
        gap <= 0
          ? "Already covered"
          : hoursNeeded === null
            ? "Add pay info"
            : `${formatHours(hoursNeeded)} hrs`;
      const gapText = gap <= 0 ? "Ready" : formatCurrency(gap);

      return `
      <article class="readiness-tier readiness-tier-${target.tone}">
        <div class="readiness-tier-top">
          <span class="readiness-tier-label">${target.label}</span>
          <strong class="readiness-tier-target">${formatCurrency(target.amount)}</strong>
        </div>
        <div class="readiness-tier-row">
          <span>Extra net needed</span>
          <strong>${gapText}</strong>
        </div>
        <div class="readiness-tier-row">
          <span>Estimated work to reach it</span>
          <strong>${hoursText}</strong>
        </div>
      </article>
    `;
    })
    .join("");

  const focusItems = [];

  if (!snapshot.nextPayDateString) {
    focusItems.push(
      "Add your next paycheck date so the readiness ladder can calculate the cycle.",
    );
  }

  if (snapshot.projectedBeforePaycheck < 0) {
    focusItems.push(
      `You are short ${formatCurrency(Math.abs(snapshot.projectedBeforePaycheck))} before payday. Reduce flexible spending or move a due date if possible.`,
    );
  }

  if (snapshot.daysUntilPayday > 0 && snapshot.dailySafeSpend < 25) {
    focusItems.push(
      `Daily safe spend is only ${formatCurrency(snapshot.dailySafeSpend)}. This cycle needs a tight day-by-day plan.`,
    );
  }

  if (
    snapshot.projectedAfterPaycheck >= 0 &&
    snapshot.projectedAfterPaycheck < 250
  ) {
    focusItems.push(
      "You will make it through the cycle, but one surprise expense could erase the cushion.",
    );
  }

  if (snapshot.projectedAfterPaycheck >= 500) {
    focusItems.push(
      "You have enough room to think about a debt hit, emergency savings, or protecting next cycle's buffer.",
    );
  }

  if (focusItems.length === 0) {
    focusItems.push(
      "Update Today Setup, Work Planner, and Scenario Test whenever your week changes so this ladder stays accurate.",
    );
  }

  el.paydayReadinessSummary.innerHTML = `
    <div class="readiness-header-row">
      <div>
        <div class="readiness-status-chip readiness-status-${readinessStatus.tone}">${readinessStatus.label}</div>
        <p class="readiness-copy">${readinessStatus.copy}</p>
      </div>
      <div class="readiness-afterpay">
        <span class="readiness-afterpay-label">After-paycheck runway</span>
        <strong class="readiness-afterpay-value ${getBalanceStatus(afterPay)}">${formatCurrency(afterPay)}</strong>
      </div>
    </div>

    <div class="readiness-tier-grid">${targetCards}</div>

    <div class="readiness-focus card-soft-panel">
      <h3>What to watch next</h3>
      <ul class="readiness-focus-list">
        ${focusItems
          .map(function (item) {
            return `<li>${item}</li>`;
          })
          .join("")}
      </ul>
    </div>
  `;
}

function calculateSummary() {
  const snapshot = getCycleSnapshot();

  setAnimatedText(el.totalDueElement, formatCurrency(snapshot.totalDue));
  setAnimatedText(el.safeToSpendElement, formatCurrency(snapshot.safeToSpend));
  setAnimatedText(
    el.dashboardCurrentBalanceElement,
    formatCurrency(snapshot.balance),
  );
  setAnimatedText(
    el.projectedBeforePaycheckElement,
    formatCurrency(snapshot.projectedBeforePaycheck),
  );
  setAnimatedText(
    el.dashboardNextPayAmountElement,
    formatCurrency(snapshot.nextPayAmount),
  );
  setAnimatedText(
    el.projectedAfterPaycheckElement,
    formatCurrency(snapshot.projectedAfterPaycheck),
  );

  const safeSpendBannerValue = document.getElementById("safeSpendBannerValue");
  const safeSpendDailyBannerValue = document.getElementById(
    "safeSpendDailyBannerValue",
  );

  if (safeSpendBannerValue) {
    safeSpendBannerValue.textContent = formatCurrency(snapshot.safeToSpend);
  }

  if (safeSpendDailyBannerValue) {
    safeSpendDailyBannerValue.textContent = formatCurrency(
      snapshot.dailySafeSpend,
    );
  }

  if (el.daysUntilPaydayElement) {
    setAnimatedText(
      el.daysUntilPaydayElement,
      String(snapshot.daysUntilPayday),
    );
  }

  if (el.dailySafeSpendElement) {
    setAnimatedText(
      el.dailySafeSpendElement,
      formatCurrency(snapshot.dailySafeSpend),
    );
    el.dailySafeSpendElement.className = getBalanceStatus(
      snapshot.dailySafeSpend,
    );
  }

  el.projectedBeforePaycheckElement.className = getBalanceStatus(
    snapshot.projectedBeforePaycheck,
  );
  el.projectedAfterPaycheckElement.className = getBalanceStatus(
    snapshot.projectedAfterPaycheck,
  );
  el.safeToSpendElement.className = getBalanceStatus(snapshot.safeToSpend);
}

/* =========================
   ESTIMATOR / REFRESH
========================= */

function getAveragePaycheckEstimate() {
  const paychecks = [
    {
      gross: safeNumber(el.paycheck1GrossInput?.value),
      net: safeNumber(el.paycheck1NetInput?.value),
      ot: safeNumber(el.paycheck1OtInput?.value),
    },
    {
      gross: safeNumber(el.paycheck2GrossInput?.value),
      net: safeNumber(el.paycheck2NetInput?.value),
      ot: safeNumber(el.paycheck2OtInput?.value),
    },
    {
      gross: safeNumber(el.paycheck3GrossInput?.value),
      net: safeNumber(el.paycheck3NetInput?.value),
      ot: safeNumber(el.paycheck3OtInput?.value),
    },
  ];

  const validPaychecks = paychecks.filter(function (paycheck) {
    return paycheck.gross > 0 && paycheck.net > 0;
  });

  if (validPaychecks.length === 0) return null;

  let totalGross = 0;
  let totalNet = 0;
  let totalOt = 0;

  for (let i = 0; i < validPaychecks.length; i++) {
    totalGross += validPaychecks[i].gross;
    totalNet += validPaychecks[i].net;
    totalOt += validPaychecks[i].ot;
  }

  const averageGross = totalGross / validPaychecks.length;
  const averageNet = totalNet / validPaychecks.length;
  const averageOt = totalOt / validPaychecks.length;
  const takeHomePercent =
    averageGross > 0 ? (averageNet / averageGross) * 100 : 0;

  return {
    count: validPaychecks.length,
    averageGross,
    averageNet,
    averageOt,
    takeHomePercent,
  };
}

function getAverageFromHistory(items, selector) {
  if (!items || !items.length) return 0;

  let total = 0;
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    const value = safeNumber(selector(items[i]));
    if (value === 0 && selector(items[i]) !== 0) continue;
    total += value;
    count += 1;
  }

  return count ? total / count : 0;
}

function getPaystubHistoryEstimate() {
  const validEntries = paystubHistory.filter(function (entry) {
    return safeNumber(entry.gross) > 0 && safeNumber(entry.net) > 0;
  });

  if (!validEntries.length) return null;

  const averageGross = getAverageFromHistory(validEntries, function (entry) {
    return entry.gross;
  });
  const averageNet = getAverageFromHistory(validEntries, function (entry) {
    return entry.net;
  });
  const averageRegularHours = getAverageFromHistory(
    validEntries,
    function (entry) {
      return entry.regularHours;
    },
  );
  const averageOvertimeHours = getAverageFromHistory(
    validEntries,
    function (entry) {
      return entry.overtimeHours;
    },
  );
  const averageTaxes = getAverageFromHistory(validEntries, function (entry) {
    return entry.taxTotal;
  });
  const averageDeductions = getAverageFromHistory(
    validEntries,
    function (entry) {
      return entry.deductionTotal;
    },
  );
  const averageHours = averageRegularHours + averageOvertimeHours;
  const averageHourlyNet = averageHours > 0 ? averageNet / averageHours : 0;
  const averageHourlyGross = averageHours > 0 ? averageGross / averageHours : 0;
  const takeHomePercent =
    averageGross > 0 ? (averageNet / averageGross) * 100 : 0;

  return {
    count: validEntries.length,
    averageGross,
    averageNet,
    averageRegularHours,
    averageOvertimeHours,
    averageHours,
    averageHourlyNet,
    averageHourlyGross,
    averageTaxes,
    averageDeductions,
    takeHomePercent,
  };
}

function getPreferredPaycheckEstimate() {
  return getPaystubHistoryEstimate() || getAveragePaycheckEstimate();
}

function normalizePaystubText(text) {
  return String(text || "")
    .replace(/\u00a0/g, " ")
    .replace(/\r/g, "\n")
    .replace(/[\t]+/g, " ")
    .replace(/ +/g, " ")
    .trim();
}

function extractAmountByLabel(text, labels) {
  if (!text) return 0;

  for (let i = 0; i < labels.length; i++) {
    const labelPattern = labels[i]
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "\\s+");

    const regexes = [
      new RegExp(
        labelPattern +
          "\\s*[:#=()\\-]*\\s*\\$?(-?[\\d][\\d.,]*\\d|-?[\\d])\\s*-?",
        "i",
      ),
      new RegExp(
        labelPattern +
          "[^\\n\\r]{0,40}?\\$?(-?[\\d][\\d.,]*\\d|-?[\\d])\\s*-?",
        "i",
      ),
    ];

    for (let r = 0; r < regexes.length; r++) {
      const match = text.match(regexes[r]);
      if (match && match[1] !== undefined) {
        const value = Math.abs(safeNumber(match[1]));
        if (value > 0) return value;
      }
    }
  }

  return 0;
}

function extractHoursByLabel(text, labels) {
  if (!text) return 0;

  for (let i = 0; i < labels.length; i++) {
    const labelPattern = labels[i]
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "\\s+");
    const regexes = [
      new RegExp(
        labelPattern + "\\s*[:#=()\\-]*\\s*(-?[\\d][\\d.,]*\\d|-?[\\d])",
        "i",
      ),
      new RegExp(
        labelPattern +
          "[^\\n\\r]{0,30}?(-?[\\d][\\d.,]*\\d|-?[\\d])\\s*(?:hrs|hours|hr)?",
        "i",
      ),
    ];

    for (let r = 0; r < regexes.length; r++) {
      const match = text.match(regexes[r]);
      if (match && match[1] !== undefined) {
        const value = Math.abs(safeNumber(match[1]));
        if (value > 0) return value;
      }
    }
  }

  return 0;
}

function extractPaystubDate(text) {
  const normalized = normalizePaystubText(text);

  const numericMatch = normalized.match(
    /(?:pay date|check date|date|dated)\s*[:#-]?\s*(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|\d{4}-\d{2}-\d{2})/i,
  );
  if (numericMatch) {
    const raw = numericMatch[1];
    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;

    const parts = raw.split(/[\/\-]/).map(function (part) {
      return part.trim();
    });
    if (parts.length === 3) {
      let month = safeNumber(parts[0]);
      let day = safeNumber(parts[1]);
      let year = safeNumber(parts[2]);

      if (year < 100) year += 2000;
      if (month && day && year) {
        return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      }
    }
  }

  const monthMatch = normalized.match(
    /dated\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{1,2})[\/\-](\d{2,4})/i,
  );

  if (monthMatch) {
    const monthMap = {
      jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
      jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    };

    const month = monthMap[monthMatch[1].slice(0, 3).toLowerCase()];
    const day = safeNumber(monthMatch[2]);
    let year = safeNumber(monthMatch[3]);

    if (year < 100) year += 2000;
    if (month && day && year) {
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
  }

  return "";
}


function setPaystubOcrStatus(message, tone) {
  if (!el.paystubOcrStatus) return;
  const safeTone = tone || "info";
  el.paystubOcrStatus.className = `warning-box warning-box-${safeTone}`;
  el.paystubOcrStatus.textContent = message;
}

async function scanPaystubImage() {
  const file = el.paystubImageInput?.files?.[0];

  if (!file) {
    setPaystubOcrStatus("Choose a paystub image first, then tap Scan Image.", "warning");
    return;
  }

  if (typeof Tesseract === "undefined") {
    setPaystubOcrStatus("OCR library failed to load. Refresh once and try again.", "danger");
    return;
  }

  if (el.scanPaystubImageBtn) el.scanPaystubImageBtn.disabled = true;
  setPaystubOcrStatus("Scanning image... this can take a few seconds on phone.", "info");

  try {
    const result = await Tesseract.recognize(file, "eng", {
      logger: function (message) {
        if (!el.paystubOcrStatus) return;
        if (message.status === "recognizing text" && typeof message.progress === "number") {
          const percent = Math.round(message.progress * 100);
          setPaystubOcrStatus(`Scanning image... ${percent}%`, "info");
        }
      },
    });

    const extractedText = normalizePaystubText(result?.data?.text || "");

    if (!extractedText) {
      setPaystubOcrStatus("No readable text was found. Try a clearer screenshot or cropped paystub image.", "warning");
      return;
    }

    if (el.paystubTextInput) {
      isProgrammaticPaystubUpdate = true;
      el.paystubTextInput.value = extractedText;
    }

    latestParsedPaystub = parsePaystubText(extractedText);
    renderPaystubAnalysis();
    saveData();

    isProgrammaticPaystubUpdate = false;

    if (latestParsedPaystub) {
      setPaystubOcrStatus("Image scanned successfully. Review the extracted values below, then save the parsed paystub if it looks right.", "good");
    } else {
      setPaystubOcrStatus("Text was extracted, but the parser could not confidently map the fields yet. Review the OCR text and tap Analyze Extracted Text if needed.", "warning");
    }
  } catch (error) {
    console.error("Paystub OCR failed:", error);
    setPaystubOcrStatus("OCR failed on this image. Try a flatter screenshot, better lighting, or a tighter crop around the paystub.", "danger");
  } finally {
    if (el.scanPaystubImageBtn) el.scanPaystubImageBtn.disabled = false;
  }
}


function fixLikelyMissingDecimal(value, options) {
  const amount = Math.abs(safeNumber(value));
  const settings = options || {};
  const maxReasonable = settings.maxReasonable || 200;
  const minWholeToRepair = settings.minWholeToRepair || 100;

  if (amount >= minWholeToRepair && amount > maxReasonable) {
    const repaired = amount / 100;
    if (repaired <= maxReasonable) return round2(repaired);
  }

  return round2(amount);
}

function getPaystubValidationWarnings(parsed) {
  const warnings = [];
  if (!parsed) return warnings;

  if (parsed.gross > 0 && parsed.net > parsed.gross) {
    warnings.push("Net pay is higher than gross pay, so one of those values may be wrong.");
  }

  if (parsed.taxTotal > parsed.gross * 0.5) {
    warnings.push("Taxes look unusually high for this gross pay. One or more decimals may be missing.");
  }

  if (parsed.regularHours > 80) {
    warnings.push("Regular hours look unusually high.");
  }

  if (parsed.overtimeHours > 40) {
    warnings.push("Overtime hours look unusually high.");
  }

  const difference = round2(parsed.gross - parsed.net);

  // If deductionTotal came from "Total Deductions", it already includes taxes.
  const expected = parsed.deductionTotal > 0
    ? round2(parsed.deductionTotal)
    : round2(parsed.taxTotal);

  if (parsed.gross > 0 && parsed.net > 0 && Math.abs(difference - expected) > 25) {
    warnings.push("Gross minus net does not line up closely with total deductions.");
  }

  return warnings;
}

function parsePaystubText(text) {
  const normalized = normalizePaystubText(text);
  if (!normalized) return null;

  function directAmount(pattern) {
    const match = normalized.match(pattern);
    return match ? Math.abs(safeNumber(match[1])) : 0;
  }

  function directHours(pattern) {
    const match = normalized.match(pattern);
    return match ? Math.abs(safeNumber(match[1])) : 0;
  }

  const gross =
    directAmount(/gross eamings\s+([\d.,]+)/i) ||
    directAmount(/gross earnings\s+([\d.,]+)/i) ||
    directAmount(/(?:^|\n)gross [^\n\r]*?([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "gross earnings",
      "gross pay",
      "gross wages",
      "gross amount",
      "total gross",
      "gross",
    ]);

  const net =
    directAmount(/net pay\s*[:#=()\-]*\s*\$?\s*([\d.,]+)/i) ||
    directAmount(/for the amount of\s+\$?\s*([\d.,]+)/i) ||
    directAmount(/direct deposit[^\n\r]*?([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "net pay",
      "net amount",
      "take home",
      "take-home",
      "direct deposit",
      "net",
    ]);

  const regularHours =
    directHours(/hours regular time hours\s+([\d.,]+)/i) ||
    directHours(/regular time hours\s+([\d.,]+)/i) ||
    directHours(/(?:^|\n)\s*([\d.,]+)\s*r[\s-]?t\b/i) ||
    extractHoursByLabel(normalized, [
      "regular time hours",
      "regular hours",
      "reg hours",
      "regular hrs",
      "hours worked",
      "worked hours",
    ]);

  const overtimeHours =
    directHours(/time and one half hours\s+([\d.,]+)/i) ||
    directHours(/(?:^|\n)\s*([\d.,]+)\s*t[\s-]?h\b/i) ||
    extractHoursByLabel(normalized, [
      "time and one half hours",
      "overtime hours",
      "ot hours",
      "ot hrs",
      "overtime hrs",
      "overtime",
    ]);

  let federalTax =
    directAmount(/fed tax\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "fed tax",
      "federal tax",
      "federal withholding",
    ]);

  let stateTax =
    directAmount(/pa state tax\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "pa state tax",
      "state tax",
      "state withholding",
    ]);

  let localTax =
    directAmount(/pa franconia twp\/montgomery\s+([\d.,]+)/i) ||
    directAmount(/local w\/h tax\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "pa franconia twp/montgomery",
      "local w/h tax",
      "local tax",
      "township tax",
      "municipal tax",
      "city tax",
      "school tax",
    ]);

  let socialSecurity =
    directAmount(/soc sec\s+([\d.,]+)/i) ||
    directAmount(/fica\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "social security",
      "soc sec",
      "fica ss",
      "fica",
    ]);

  let medicare =
    directAmount(/medicare\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, ["medicare", "fica med"]);

  let hsa =
    directAmount(/hsa deduct\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, ["hsa deduct", "hsa", "health savings"]);

  let retirement401k =
    directAmount(/401k empee\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, [
      "401k empee",
      "401k employee",
      "401k",
      "401(k)",
      "retirement",
    ]);

  const medical = extractAmountByLabel(normalized, [
    "medical",
    "health insurance",
    "dental",
    "vision",
  ]);

  let advance =
    directAmount(/advance deduct\s+([\d.,]+)/i) ||
    extractAmountByLabel(normalized, ["advance deduct", "advance"]);

  const bonus = extractAmountByLabel(normalized, [
    "bonus",
    "incentive",
    "commission",
  ]);

  federalTax = fixLikelyMissingDecimal(federalTax, { maxReasonable: 250 });
  stateTax = fixLikelyMissingDecimal(stateTax, { maxReasonable: 150 });
  localTax = fixLikelyMissingDecimal(localTax, { maxReasonable: 75 });
  socialSecurity = fixLikelyMissingDecimal(socialSecurity, { maxReasonable: 200 });
  medicare = fixLikelyMissingDecimal(medicare, { maxReasonable: 75 });
  hsa = fixLikelyMissingDecimal(hsa, { maxReasonable: 500 });
  retirement401k = fixLikelyMissingDecimal(retirement401k, { maxReasonable: 500 });
  advance = fixLikelyMissingDecimal(advance, { maxReasonable: 1000 });

  const taxTotal = federalTax + stateTax + localTax + socialSecurity + medicare;

  const explicitTotalDeductions =
    directAmount(/total deductions[^\n\r]*?([\d.,]+)/i) ||
    extractAmountByLabel(normalized, ["total deductions"]);

  let deductionTotal = explicitTotalDeductions > 0
    ? fixLikelyMissingDecimal(explicitTotalDeductions, { maxReasonable: 5000, minWholeToRepair: 1000 })
    : hsa + retirement401k + medical + advance;

  const fallbackDifference =
    gross > 0 && net > 0 ? Math.max(0, gross - net) : 0;

  if (!deductionTotal && deductionTotal + taxTotal < fallbackDifference) {
    deductionTotal = Math.max(0, fallbackDifference - taxTotal);
  }

  const totalHours = regularHours + overtimeHours;
  const takeHomePercent = gross > 0 ? (net / gross) * 100 : 0;
  const effectiveHourlyNet = totalHours > 0 ? net / totalHours : 0;
  const effectiveHourlyGross = totalHours > 0 ? gross / totalHours : 0;

  if (gross <= 0 && net <= 0) return null;

  const parsed = {
    id: `paystub-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sourceText: normalized,
    payDate: extractPaystubDate(normalized),
    gross: round2(gross),
    net: round2(net),
    regularHours: round2(regularHours),
    overtimeHours: round2(overtimeHours),
    totalHours: round2(totalHours),
    bonus: round2(bonus),
    federalTax: round2(federalTax),
    stateTax: round2(stateTax),
    localTax: round2(localTax),
    socialSecurity: round2(socialSecurity),
    medicare: round2(medicare),
    hsa: round2(hsa),
    retirement401k: round2(retirement401k),
    medical: round2(medical),
    advance: round2(advance),
    taxTotal: round2(taxTotal),
    deductionTotal: round2(deductionTotal),
    takeHomePercent: round2(takeHomePercent),
    effectiveHourlyNet: round2(effectiveHourlyNet),
    effectiveHourlyGross: round2(effectiveHourlyGross),
    validationWarnings: [],
    createdAt: new Date().toISOString(),
  };

  parsed.validationWarnings = getPaystubValidationWarnings(parsed);
  return parsed;
}

function renderPaystubAnalysis() {
  if (!el.paystubAnalysisResults) return;

  if (!latestParsedPaystub) {
    setHtml(
      el.paystubAnalysisResults,
      '<p class="timeline-empty">Upload a paystub image or paste paystub text to extract gross pay, net pay, taxes, deductions, hours, and a take-home estimate.</p>',
    );
    if (el.addParsedPaystubBtn) el.addParsedPaystubBtn.disabled = true;
    return;
  }

  if (el.addParsedPaystubBtn) el.addParsedPaystubBtn.disabled = false;

  setHtml(
    el.paystubAnalysisResults,
    `
      <div class="estimate-results-grid">
        <div class="estimate-result-card">
          <span class="estimate-result-label">Gross Pay</span>
          <span class="estimate-result-value">${formatCurrency(latestParsedPaystub.gross)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Net Pay</span>
          <span class="estimate-result-value ${getBalanceStatus(latestParsedPaystub.net)}">${formatCurrency(latestParsedPaystub.net)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Take-Home %</span>
          <span class="estimate-result-value">${latestParsedPaystub.takeHomePercent.toFixed(1)}%</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Regular / OT Hours</span>
          <span class="estimate-result-value">${latestParsedPaystub.regularHours.toFixed(2)} / ${latestParsedPaystub.overtimeHours.toFixed(2)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Taxes Found</span>
          <span class="estimate-result-value">${formatCurrency(latestParsedPaystub.taxTotal)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Deductions Found</span>
          <span class="estimate-result-value">${formatCurrency(latestParsedPaystub.deductionTotal)}</span>
        </div>
      </div>
      ${
        latestParsedPaystub.validationWarnings &&
        latestParsedPaystub.validationWarnings.length
          ? `<div class="warning-box warning-box-warning" style="margin-top:12px;"><strong>Double-check these fields</strong><ul style="margin:8px 0 0 18px;">${latestParsedPaystub.validationWarnings.map(function (item) { return `<li>${item}</li>`; }).join("")}</ul></div>`
          : `<div class="warning-box warning-box-good" style="margin-top:12px;">No obvious parser red flags were found on this paystub.</div>`
      }
      <div class="planner-chip-row">
        <span class="planner-chip">${latestParsedPaystub.payDate ? `Pay date ${formatDate(latestParsedPaystub.payDate)}` : "Pay date not detected"}</span>
        <span class="planner-chip">Effective hourly net ${formatCurrency(latestParsedPaystub.effectiveHourlyNet)}</span>
        <span class="planner-chip">Effective hourly gross ${formatCurrency(latestParsedPaystub.effectiveHourlyGross)}</span>
        ${latestParsedPaystub.bonus > 0 ? `<span class="planner-chip">Bonus ${formatCurrency(latestParsedPaystub.bonus)}</span>` : ""}
      </div>
    `,
  );
}

function renderPaystubHistory() {
  if (el.paystubHistoryList) {
    if (!paystubHistory.length) {
      el.paystubHistoryList.innerHTML =
        '<li class="timeline-empty">No paystubs saved yet. Add a parsed stub to build better paycheck and work-hour estimates.</li>';
    } else {
      el.paystubHistoryList.innerHTML = paystubHistory
        .slice()
        .sort(function (a, b) {
          return (b.payDate || b.createdAt || "").localeCompare(
            a.payDate || a.createdAt || "",
          );
        })
        .map(function (entry, index) {
          return `
            <li class="bill-item">
              <div class="bill-main">
                <div class="bill-top-row">
                  <div class="bill-title-wrap">
                    <div class="bill-title-line">
                      <strong class="bill-title">${entry.payDate ? formatDate(entry.payDate) : `Paystub ${index + 1}`}</strong>
                      <span class="bill-chip">${formatCurrency(entry.net)} net</span>
                      <span class="bill-chip bill-chip-soft">${formatCurrency(entry.gross)} gross</span>
                    </div>
                    <div class="bill-meta">
                      <span class="bill-chip bill-chip-soft">${entry.totalHours ? `${entry.totalHours.toFixed(2)} hrs` : "Hours not found"}</span>
                      <span class="bill-chip bill-chip-soft">${entry.takeHomePercent.toFixed(1)}% keep rate</span>
                      <span class="bill-chip bill-chip-soft">${formatCurrency(entry.taxTotal)} taxes</span>
                    </div>
                  </div>
                  <div class="bill-actions">
                    <button type="button" class="secondary-btn delete-btn" data-paystub-delete="${entry.id}">Delete</button>
                  </div>
                </div>
              </div>
            </li>
          `;
        })
        .join("");
    }
  }

  if (!el.paystubHistorySummary) return;

  const estimate = getPaystubHistoryEstimate();
  if (!estimate) {
    setHtml(
      el.paystubHistorySummary,
      '<p class="timeline-empty">Save at least one paystub to build an average paycheck model from your real taxes, deductions, HSA, local taxes, and 401(k) drag.</p>',
    );
    if (el.usePaystubAverageBtn) el.usePaystubAverageBtn.disabled = true;
    return;
  }

  if (el.usePaystubAverageBtn) el.usePaystubAverageBtn.disabled = false;

  setHtml(
    el.paystubHistorySummary,
    `
      <div class="estimate-results-grid">
        <div class="estimate-result-card">
          <span class="estimate-result-label">Paystubs Used</span>
          <span class="estimate-result-value">${estimate.count}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Average Gross</span>
          <span class="estimate-result-value">${formatCurrency(estimate.averageGross)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Average Net</span>
          <span class="estimate-result-value">${formatCurrency(estimate.averageNet)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Average Total Hours</span>
          <span class="estimate-result-value">${estimate.averageHours.toFixed(2)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Avg Taxes + Withholding</span>
          <span class="estimate-result-value">${formatCurrency(estimate.averageTaxes)}</span>
        </div>
        <div class="estimate-result-card">
          <span class="estimate-result-label">Avg Deductions</span>
          <span class="estimate-result-value">${formatCurrency(estimate.averageDeductions)}</span>
        </div>
      </div>
      <div class="planner-callout">
        <strong>More accurate forecast base</strong>
        <span>Your paystub history suggests a typical take-home rate of ${estimate.takeHomePercent.toFixed(1)}%, about ${formatCurrency(estimate.averageHourlyNet)} net per hour, and ${estimate.averageOvertimeHours.toFixed(2)} average OT hours.</span>
      </div>
    `,
  );

  if (el.paystubHistoryList) {
    const deleteButtons = el.paystubHistoryList.querySelectorAll(
      "[data-paystub-delete]",
    );
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const id = this.getAttribute("data-paystub-delete");
        const index = paystubHistory.findIndex(function (entry) {
          return entry.id === id;
        });
        if (index >= 0) {
          paystubHistory.splice(index, 1);
          refreshApp();
        }
      });
    });
  }
}

function analyzePaystubDraft() {
  latestParsedPaystub = parsePaystubText(el.paystubTextInput?.value || "");
  renderPaystubAnalysis();

  if (!el.paystubTextInput?.value?.trim()) {
    setPaystubOcrStatus("Add paystub text or scan a paystub image first.", "warning");
  } else if (latestParsedPaystub) {
    setPaystubOcrStatus("Text analyzed successfully. Review the values below before saving the parsed paystub.", "good");
  } else {
    setPaystubOcrStatus("Text was found, but the parser could not confidently map the key fields yet.", "warning");
  }
}

function applyPaystubAverageToManualPaycheck() {
  const estimate = getPaystubHistoryEstimate();
  if (!estimate || !el.nextPayAmountInput) return;
  el.nextPayAmountInput.value = round2(estimate.averageNet);
  refreshApp();
}

function renderHouseholdSplitSummary() {
  if (!el.householdSplitSummary) return;

  const mine = getMineSharePercent();
  const partner = getPartnerSharePercent();
  const selectedCategories = getSelectedSharedCategories();

  if (!selectedCategories.length) {
    setHtml(
      el.householdSplitSummary,
      '<p class="timeline-empty">Choose at least one shared category to see how responsibilities are divided.</p>',
    );
    return;
  }

  let sharedMonthlyTotal = 0;

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    if (isBillPaid(bill)) continue;
    if (
      !selectedCategories.includes(
        (bill.category || "other").toLowerCase().trim(),
      )
    )
      continue;
    sharedMonthlyTotal += getMonthlyEquivalentAmount(
      bill.amount,
      bill.frequency || "monthly",
    );
  }

  for (let i = 0; i < spendingBuckets.length; i++) {
    const bucket = spendingBuckets[i];
    if (
      !selectedCategories.includes(
        (bucket.category || "other").toLowerCase().trim(),
      )
    )
      continue;
    sharedMonthlyTotal += getMonthlyEquivalentAmount(
      bucket.amount,
      bucket.frequency || "weekly",
    );
  }

  const nextPayDate = parseLocalDate(getEffectiveNextPayDateString());
  const sharedBeforePaydayMine = nextPayDate
    ? getCombinedItemsBeforePayday(nextPayDate)
        .filter(function (item) {
          return isSharedCategory(item.category);
        })
        .reduce(function (sum, item) {
          return sum + safeNumber(item.amount);
        }, 0)
    : 0;

  const myMonthly = round2(sharedMonthlyTotal * (mine / 100));
  const partnerMonthly = round2(sharedMonthlyTotal * (partner / 100));

  setHtml(
    el.householdSplitSummary,
    `
      <div class="planner-summary-grid">
        <div class="planner-summary-card">
          <span class="planner-summary-label">My Share</span>
          <span class="planner-summary-value">${mine.toFixed(0)}%</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Partner Share</span>
          <span class="planner-summary-value">${partner.toFixed(0)}%</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Shared Monthly Load</span>
          <span class="planner-summary-value">${formatCurrency(sharedMonthlyTotal)}</span>
        </div>
      </div>
      <div class="planner-chip-row">
        <span class="planner-chip">My estimated monthly share ${formatCurrency(myMonthly)}</span>
        <span class="planner-chip">Partner estimated monthly share ${formatCurrency(partnerMonthly)}</span>
        <span class="planner-chip">My shared costs before payday ${formatCurrency(sharedBeforePaydayMine)}</span>
      </div>
    `,
  );
}

function renderForecastPlanningInsights() {
  if (!el.forecastPlanningInsights) return;

  const nextPayDate = parseLocalDate(getEffectiveNextPayDateString());
  const sharedActive = isHouseholdSplitActive();
  const mine = getMineSharePercent();
  const checkingEvents = nextPayDate
    ? getCheckingLifeEventItemsBeforeDate(nextPayDate)
    : [];
  const eventImpact = checkingEvents.reduce(function (sum, item) {
    return sum + safeNumber(item.amount);
  }, 0);
  const savingsEvents = nextPayDate
    ? getLifeEventsUntilDate(nextPayDate).filter(function (event) {
        return event.funding === "savings";
      })
    : [];
  const savingsImpact = savingsEvents.reduce(function (sum, event) {
    return sum + getLifeEventSignedAmount(event);
  }, 0);

  setHtml(
    el.forecastPlanningInsights,
    `
      <div class="planner-callout">
        <strong>${sharedActive ? `Shared split active at ${mine.toFixed(0)}%` : "Shared split is off"}</strong>
        <span>${sharedActive ? "Shared categories are reduced to your portion in the dashboard, timeline, and forecast." : "Turn on the household split if rent, groceries, or utilities are shared."}</span>
      </div>
      <div class="planner-chip-row">
        <span class="planner-chip">Checking life-event impact before payday ${formatCurrency(eventImpact)}</span>
        <span class="planner-chip">Savings-funded event impact ${formatCurrency(savingsImpact)}</span>
      </div>
    `,
  );
}

function clearDebtForm() {
  if (el.debtNameInput) el.debtNameInput.value = "";
  if (el.debtBalanceInput) el.debtBalanceInput.value = "";
  if (el.debtAprInput) el.debtAprInput.value = "";
  if (el.debtMinPaymentInput) el.debtMinPaymentInput.value = "";
  if (el.debtExtraPaymentInput) el.debtExtraPaymentInput.value = "";
  if (el.debtPriorityInput) el.debtPriorityInput.value = "high-interest";
  debtEditIndex = null;

  if (el.addDebtBtn) el.addDebtBtn.textContent = "Add Debt";
  if (el.cancelDebtEditBtn) el.cancelDebtEditBtn.classList.add("hidden");
}

function clearLifeEventForm() {
  if (el.lifeEventNameInput) el.lifeEventNameInput.value = "";
  if (el.lifeEventTypeInput) el.lifeEventTypeInput.value = "expense";
  if (el.lifeEventAmountInput) el.lifeEventAmountInput.value = "";
  if (el.lifeEventDateInput) el.lifeEventDateInput.value = "";
  if (el.lifeEventFundingInput) el.lifeEventFundingInput.value = "checking";
  lifeEventEditIndex = null;

  if (el.addLifeEventBtn) el.addLifeEventBtn.textContent = "Add Life Event";
  if (el.cancelLifeEventEditBtn)
    el.cancelLifeEventEditBtn.classList.add("hidden");
}

function getBestDebtTarget() {
  if (!debts.length) return null;

  const sorted = debts
    .filter(function (debt) {
      return safeNumber(debt.balance) > 0;
    })
    .slice()
    .sort(function (a, b) {
      const aprDiff = safeNumber(b.apr) - safeNumber(a.apr);
      if (aprDiff !== 0) return aprDiff;
      return safeNumber(a.balance) - safeNumber(b.balance);
    });

  return sorted[0] || null;
}

function renderDebtPlannerSummary() {
  if (!el.debtPlannerSummary) return;

  if (!debts.length) {
    setHtml(
      el.debtPlannerSummary,
      '<p class="timeline-empty">Add debts here to see your total monthly debt attack and estimated payoff windows.</p>',
    );
    return;
  }

  let totalBalance = 0;
  let totalMinimum = 0;
  let totalExtra = 0;

  for (let i = 0; i < debts.length; i++) {
    totalBalance += safeNumber(debts[i].balance);
    totalMinimum += safeNumber(debts[i].minPayment);
    totalExtra += safeNumber(debts[i].extraPayment);
  }

  const bestTarget = getBestDebtTarget();

  setHtml(
    el.debtPlannerSummary,
    `
      <div class="planner-summary-grid">
        <div class="planner-summary-card">
          <span class="planner-summary-label">Total Debt Balance</span>
          <span class="planner-summary-value">${formatCurrency(totalBalance)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Monthly Minimums</span>
          <span class="planner-summary-value">${formatCurrency(totalMinimum)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Extra Monthly Attack</span>
          <span class="planner-summary-value">${formatCurrency(totalExtra)}</span>
        </div>
      </div>
      ${
        bestTarget
          ? `<div class="planner-callout">
              <strong>Recommended next target:</strong> ${bestTarget.name}
              <span>Highest-rate / highest-pressure debt based on the balances you entered.</span>
            </div>`
          : ""
      }
    `,
  );
}

function renderDebts() {
  if (!el.debtList) return;

  el.debtList.innerHTML = "";

  if (!debts.length) {
    el.debtList.innerHTML =
      '<li class="timeline-empty">No debts added yet.</li>';
    return;
  }

  for (let i = 0; i < debts.length; i++) {
    const debt = debts[i];
    const plannedMonthly =
      safeNumber(debt.minPayment) + safeNumber(debt.extraPayment);
    const payoff = estimateDebtPayoff(debt.balance, debt.apr, plannedMonthly);

    const item = document.createElement("li");
    item.className = "planner-item";
    item.innerHTML = `
      <div class="planner-item-top">
        <div>
          <div class="planner-item-title">${debt.name}</div>
          <div class="planner-item-subtitle">
            Balance ${formatCurrency(debt.balance)} • APR ${safeNumber(debt.apr).toFixed(2)}% • Payment ${formatCurrency(plannedMonthly)}
          </div>
        </div>
        <div class="planner-item-actions">
          <button type="button" class="secondary-btn planner-mini-btn" data-debt-edit="${i}">Edit</button>
          <button type="button" class="secondary-btn planner-mini-btn" data-debt-delete="${i}">Delete</button>
        </div>
      </div>
      <div class="planner-chip-row">
        <span class="planner-chip">Minimum ${formatCurrency(debt.minPayment)}</span>
        <span class="planner-chip">Extra ${formatCurrency(debt.extraPayment)}</span>
        <span class="planner-chip">Priority ${formatCategory(debt.priority)}</span>
        <span class="planner-chip">
          ${
            payoff.affordable && payoff.months !== null
              ? `Payoff ~ ${payoff.months} month${payoff.months === 1 ? "" : "s"}`
              : "Payment too low to pay down"
          }
        </span>
      </div>
    `;

    el.debtList.appendChild(item);
  }

  const editButtons = el.debtList.querySelectorAll("[data-debt-edit]");
  const deleteButtons = el.debtList.querySelectorAll("[data-debt-delete]");

  editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(this.getAttribute("data-debt-edit"));
      const debt = debts[index];
      if (!debt) return;

      if (el.debtNameInput) el.debtNameInput.value = debt.name || "";
      if (el.debtBalanceInput) el.debtBalanceInput.value = debt.balance || "";
      if (el.debtAprInput) el.debtAprInput.value = debt.apr || "";
      if (el.debtMinPaymentInput)
        el.debtMinPaymentInput.value = debt.minPayment || "";
      if (el.debtExtraPaymentInput)
        el.debtExtraPaymentInput.value = debt.extraPayment || "";
      if (el.debtPriorityInput)
        el.debtPriorityInput.value = debt.priority || "high-interest";

      debtEditIndex = index;
      if (el.addDebtBtn) el.addDebtBtn.textContent = "Update Debt";
      if (el.cancelDebtEditBtn) el.cancelDebtEditBtn.classList.remove("hidden");
      switchTab("moreTab");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(this.getAttribute("data-debt-delete"));
      debts.splice(index, 1);
      if (debtEditIndex === index) clearDebtForm();
      refreshApp();
    });
  });
}

function renderLifeEventSummary() {
  if (!el.lifeEventSummary) return;

  const nextPayDate = parseLocalDate(el.nextPayDateInput?.value);
  const eventsBeforePayday = nextPayDate
    ? getLifeEventsUntilDate(nextPayDate)
    : [];
  const checkingImpactBeforePayday = getLifeEventSignedTotal(
    eventsBeforePayday,
    "checking",
  );
  const savingsImpactBeforePayday = getLifeEventSignedTotal(
    eventsBeforePayday,
    "savings",
  );
  const emergencyBalance = getEmergencySavingsBalance();
  const emergencyFloor = getEmergencyFloor();
  const projectedEmergency = emergencyBalance - savingsImpactBeforePayday;
  const risk = projectedEmergency < emergencyFloor;

  let expectedNet = safeNumber(el.nextPayAmountInput?.value);
  const incomeScenarioResult =
    typeof getIncomeScenarioAmount === "function"
      ? getIncomeScenarioAmount()
      : null;
  if (
    incomeScenarioResult &&
    el.useIncomeScenarioForForecastInput?.value === "scenario"
  ) {
    expectedNet = safeNumber(incomeScenarioResult.scenarioAmount);
  }

  const averageNet =
    expectedNet > 0
      ? expectedNet
      : getAveragePaycheckEstimate()?.averageNet || 0;
  const dailyTarget = averageNet / 5;
  const hoursNeeded =
    dailyTarget > 0 && checkingImpactBeforePayday > 0
      ? Math.ceil(checkingImpactBeforePayday / (dailyTarget / 8))
      : 0;

  setHtml(
    el.lifeEventSummary,
    `
      <div class="planner-summary-grid">
        <div class="planner-summary-card">
          <span class="planner-summary-label">Checking Impact Before Payday</span>
          <span class="planner-summary-value">${formatCurrency(checkingImpactBeforePayday)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Savings Impact Before Payday</span>
          <span class="planner-summary-value">${formatCurrency(savingsImpactBeforePayday)}</span>
        </div>
        <div class="planner-summary-card">
          <span class="planner-summary-label">Emergency Fund After Events</span>
          <span class="planner-summary-value ${risk ? "status-negative" : "status-positive"}">${formatCurrency(projectedEmergency)}</span>
        </div>
      </div>
      <div class="planner-callout ${risk ? "planner-callout-danger" : ""}">
        <strong>${risk ? "Emergency fund floor warning" : "Event recovery planning"}</strong>
        <span>${
          risk
            ? `Your savings-funded events would push the emergency fund below your floor of ${formatCurrency(emergencyFloor)}.`
            : `Based on your current paycheck estimate, recovering ${formatCurrency(checkingImpactBeforePayday)} would take about ${hoursNeeded || 0} extra work hour${hoursNeeded === 1 ? "" : "s"} at your normal pace.`
        }</span>
      </div>
    `,
  );
}

function renderLifeEvents() {
  if (!el.lifeEventList) return;

  el.lifeEventList.innerHTML = "";

  if (!lifeEvents.length) {
    el.lifeEventList.innerHTML =
      '<li class="timeline-empty">No life events added yet.</li>';
    return;
  }

  const events = getLifeEventsSorted();

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const signedAmount = getLifeEventSignedAmount(event);

    const item = document.createElement("li");
    item.className = "planner-item";
    item.innerHTML = `
      <div class="planner-item-top">
        <div>
          <div class="planner-item-title">${event.name}</div>
          <div class="planner-item-subtitle">${formatDate(event.date)} • ${formatCategory(event.type)} • ${event.funding === "savings" ? "Uses savings" : "Hits checking"}</div>
        </div>
        <div class="planner-item-actions">
          <button type="button" class="secondary-btn planner-mini-btn" data-life-edit="${i}">Edit</button>
          <button type="button" class="secondary-btn planner-mini-btn" data-life-delete="${i}">Delete</button>
        </div>
      </div>
      <div class="planner-chip-row">
        <span class="planner-chip ${signedAmount > 0 ? "planner-chip-danger" : "planner-chip-good"}">
          ${signedAmount > 0 ? "Impact" : "Boost"} ${formatCurrency(Math.abs(signedAmount))}
        </span>
      </div>
    `;

    el.lifeEventList.appendChild(item);
  }

  const editButtons = el.lifeEventList.querySelectorAll("[data-life-edit]");
  const deleteButtons = el.lifeEventList.querySelectorAll("[data-life-delete]");

  editButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(this.getAttribute("data-life-edit"));
      const event = lifeEvents[index];
      if (!event) return;

      if (el.lifeEventNameInput) el.lifeEventNameInput.value = event.name || "";
      if (el.lifeEventTypeInput)
        el.lifeEventTypeInput.value = event.type || "expense";
      if (el.lifeEventAmountInput)
        el.lifeEventAmountInput.value = event.amount || "";
      if (el.lifeEventDateInput) el.lifeEventDateInput.value = event.date || "";
      if (el.lifeEventFundingInput)
        el.lifeEventFundingInput.value = event.funding || "checking";

      lifeEventEditIndex = index;
      if (el.addLifeEventBtn)
        el.addLifeEventBtn.textContent = "Update Life Event";
      if (el.cancelLifeEventEditBtn)
        el.cancelLifeEventEditBtn.classList.remove("hidden");
      switchTab("moreTab");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const index = Number(this.getAttribute("data-life-delete"));
      lifeEvents.splice(index, 1);
      if (lifeEventEditIndex === index) clearLifeEventForm();
      refreshApp();
    });
  });
}

function refreshEstimator() {
  renderPaycheckEstimateResults();
  saveEstimatorData();
}

function refreshIncomePlanning() {
  renderIncomeScenarioResults();
  saveIncomePlanningData();
}

function refreshApp() {
  advanceRecurringBills();
  renderBills();
  renderBuckets();
  renderBillsOverview();
  calculateSummary();
  renderUpcomingBills();
  renderCashFlowWarning();
  renderTimeline();
  renderForecastTimeline();
  renderBalanceForecastChart();
  renderPaycheckAssignments();
  renderCategoryTotals();
  renderCategoryChart();
  renderForecastCategoryTotals();
  renderForecastCategoryChart();
  renderForecastPaySourceMessage();
  renderIncomePlanningPreview();
  renderStressTestMessage();
  renderDebtPlannerSummary();
  renderDebts();
  renderLifeEventSummary();
  renderLifeEvents();
  renderHouseholdSplitSummary();
  renderForecastPlanningInsights();
  renderWorkPlannerSummary();
  renderFinancialStatus();
  renderStarterGuide();
  renderPaydayReadinessSummary();
  renderPaycheckAllocationSummary();
  renderPaystubAnalysis();
  renderPaystubHistory();
  saveData();
}

/* =========================
   FORM STATE
========================= */

function enterEditMode() {
  el.addBillBtn.textContent = "Update Bill";
  el.cancelEditBtn.classList.remove("hidden");

  if (el.billFormTitle && editIndex !== null) {
    const bill = bills[editIndex];
    el.billFormTitle.textContent = `Editing: ${bill.name}`;
  }
}

function exitEditMode() {
  editIndex = null;
  el.addBillBtn.textContent = "Add Bill";
  el.cancelEditBtn.classList.add("hidden");

  if (el.billFormTitle) {
    el.billFormTitle.textContent = "Add Expense";
  }
}

function clearBillForm() {
  el.billNameInput.value = "";
  el.billAmountInput.value = "";
  el.billDueDateInput.value = "";
  el.billCategoryInput.value = "other";
  el.billFrequencyInput.value = "one-time";
  el.billPriorityInput.value = "important";
  if (el.billNotesInput) el.billNotesInput.value = "";
  if (el.billAutopayInput) el.billAutopayInput.checked = false;
  if (el.billReminderDaysInput) el.billReminderDaysInput.value = "0";
  exitEditMode();
}

function enterBucketEditMode() {
  if (el.addBucketBtn) el.addBucketBtn.textContent = "Update Bucket";
  if (el.cancelBucketEditBtn) el.cancelBucketEditBtn.classList.remove("hidden");
}

function exitBucketEditMode() {
  bucketEditIndex = null;
  if (el.addBucketBtn) el.addBucketBtn.textContent = "Add Bucket";
  if (el.cancelBucketEditBtn) el.cancelBucketEditBtn.classList.add("hidden");
}

function clearBucketForm() {
  if (el.bucketNameInput) el.bucketNameInput.value = "";
  if (el.bucketAmountInput) el.bucketAmountInput.value = "";
  if (el.bucketCategoryInput) el.bucketCategoryInput.value = "other";
  if (el.bucketFrequencyInput) el.bucketFrequencyInput.value = "weekly";
  exitBucketEditMode();
}

function advanceRecurringBills() {
  const today = getTodayLocal();

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];

    if (!bill.frequency || bill.frequency === "one-time") continue;

    let billDate = parseLocalDate(bill.dueDate);
    if (!billDate) continue;

    let advanced = false;

    while (billDate < today) {
      if (bill.frequency === "monthly") {
        billDate = addMonthsSafe(billDate, 1);
      } else if (bill.frequency === "weekly") {
        billDate.setDate(billDate.getDate() + 7);
      } else if (bill.frequency === "yearly") {
        billDate = new Date(
          billDate.getFullYear() + 1,
          billDate.getMonth(),
          billDate.getDate(),
        );
      } else {
        break;
      }

      advanced = true;
    }

    if (advanced) {
      bill.paid = false;
      bill.lastPaidDate = null;
      bill.updatedAt = new Date().toISOString();
    }

    bill.dueDate = toDateInputString(billDate);
  }
}

/* =========================
   STORAGE
========================= */

function saveEstimatorData() {
  const estimatorData = {
    paycheck1Gross: el.paycheck1GrossInput ? el.paycheck1GrossInput.value : "",
    paycheck1Net: el.paycheck1NetInput ? el.paycheck1NetInput.value : "",
    paycheck1Ot: el.paycheck1OtInput ? el.paycheck1OtInput.value : "",
    paycheck2Gross: el.paycheck2GrossInput ? el.paycheck2GrossInput.value : "",
    paycheck2Net: el.paycheck2NetInput ? el.paycheck2NetInput.value : "",
    paycheck2Ot: el.paycheck2OtInput ? el.paycheck2OtInput.value : "",
    paycheck3Gross: el.paycheck3GrossInput ? el.paycheck3GrossInput.value : "",
    paycheck3Net: el.paycheck3NetInput ? el.paycheck3NetInput.value : "",
    paycheck3Ot: el.paycheck3OtInput ? el.paycheck3OtInput.value : "",
  };

  localStorage.setItem(STORAGE_KEYS.estimator, JSON.stringify(estimatorData));
}

function loadEstimatorData() {
  const savedEstimatorData = localStorage.getItem(STORAGE_KEYS.estimator);
  if (!savedEstimatorData) return;

  try {
    const data = JSON.parse(savedEstimatorData);

    if (el.paycheck1GrossInput)
      el.paycheck1GrossInput.value = data.paycheck1Gross || "";
    if (el.paycheck1NetInput)
      el.paycheck1NetInput.value = data.paycheck1Net || "";
    if (el.paycheck1OtInput) el.paycheck1OtInput.value = data.paycheck1Ot || "";

    if (el.paycheck2GrossInput)
      el.paycheck2GrossInput.value = data.paycheck2Gross || "";
    if (el.paycheck2NetInput)
      el.paycheck2NetInput.value = data.paycheck2Net || "";
    if (el.paycheck2OtInput) el.paycheck2OtInput.value = data.paycheck2Ot || "";

    if (el.paycheck3GrossInput)
      el.paycheck3GrossInput.value = data.paycheck3Gross || "";
    if (el.paycheck3NetInput)
      el.paycheck3NetInput.value = data.paycheck3Net || "";
    if (el.paycheck3OtInput) el.paycheck3OtInput.value = data.paycheck3Ot || "";
  } catch (error) {
    console.error("Failed to load estimator data:", error);
    localStorage.removeItem(STORAGE_KEYS.estimator);
  }
}

function saveIncomePlanningData() {
  const incomePlanningData = {
    baseNetPay: el.baseNetPayInput ? el.baseNetPayInput.value : "",
    expectedOtNet: el.expectedOtNetInput ? el.expectedOtNetInput.value : "",
    incomeScenario: el.incomeScenarioInput
      ? el.incomeScenarioInput.value
      : "realistic",
    useIncomeScenarioForForecast: el.useIncomeScenarioForForecastInput
      ? el.useIncomeScenarioForForecastInput.value
      : "manual",
  };

  localStorage.setItem(STORAGE_KEYS.income, JSON.stringify(incomePlanningData));
}

function loadIncomePlanningData() {
  const savedIncomePlanningData = localStorage.getItem(STORAGE_KEYS.income);
  if (!savedIncomePlanningData) return;

  try {
    const data = JSON.parse(savedIncomePlanningData);

    if (el.baseNetPayInput) el.baseNetPayInput.value = data.baseNetPay || "";
    if (el.expectedOtNetInput)
      el.expectedOtNetInput.value = data.expectedOtNet || "";
    if (el.incomeScenarioInput)
      el.incomeScenarioInput.value = data.incomeScenario || "realistic";
    if (el.useIncomeScenarioForForecastInput) {
      el.useIncomeScenarioForForecastInput.value =
        data.useIncomeScenarioForForecast || "manual";
    }
  } catch (error) {
    console.error("Failed to load income planning data:", error);
    localStorage.removeItem(STORAGE_KEYS.income);
  }
}

function saveData() {
  const data = {
    bills,
    spendingBuckets,
    currentBalance: el.currentBalanceInput.value,
    nextPayDate: el.nextPayDateInput.value,
    nextPayAmount: el.nextPayAmountInput.value,
    payFrequency: el.payFrequencyInput.value,
    allocationMode: el.allocationModeInput
      ? el.allocationModeInput.value
      : "normal",
    debts,
    lifeEvents,
    emergencySavingsBalance: el.emergencySavingsBalanceInput
      ? el.emergencySavingsBalanceInput.value
      : "",
    emergencyFloor: el.emergencyFloorInput ? el.emergencyFloorInput.value : "",
    householdMyShare: el.householdMyShareInput
      ? el.householdMyShareInput.value
      : "70",
    householdPartnerShare: el.householdPartnerShareInput
      ? el.householdPartnerShareInput.value
      : "30",
    applyHouseholdSplit: Boolean(el.applyHouseholdSplitInput?.checked),
    sharedCategories: getSelectedSharedCategories(),
    workPlannerData: {
      hourlyRate: el.workHourlyRateInput ? el.workHourlyRateInput.value : "",
      baseHours: el.workBaseHoursInput ? el.workBaseHoursInput.value : "40",
      otMultiplier: el.workOtMultiplierInput
        ? el.workOtMultiplierInput.value
        : "1.5",
      targetBuffer: el.workTargetBufferInput
        ? el.workTargetBufferInput.value
        : "0",
      extraGoal: el.workExtraGoalInput ? el.workExtraGoalInput.value : "0",
      netRetention: el.workNetRetentionInput
        ? el.workNetRetentionInput.value
        : "",
    },
    paystubDraft: el.paystubTextInput ? el.paystubTextInput.value : "",
    paystubHistory,
  };

  localStorage.setItem(STORAGE_KEYS.app, JSON.stringify(data));

  if (el.saveIndicator) {
    el.saveIndicator.textContent = `Saved locally • ${new Date().toLocaleTimeString(
      [],
      {
        hour: "numeric",
        minute: "2-digit",
      },
    )}`;
  }
}

function loadData() {
  const savedData = localStorage.getItem(STORAGE_KEYS.app);

  if (!savedData) {
    refreshApp();
    return;
  }

  try {
    const data = JSON.parse(savedData);

    if (el.allocationModeInput) {
      el.allocationModeInput.value = data.allocationMode ?? "normal";
    }

    if (el.householdMyShareInput) {
      el.householdMyShareInput.value = data.householdMyShare ?? "70";
    }
    if (el.householdPartnerShareInput) {
      el.householdPartnerShareInput.value = data.householdPartnerShare ?? "30";
    }
    syncHouseholdShareInputs("mine");
    if (el.applyHouseholdSplitInput) {
      el.applyHouseholdSplitInput.checked = data.applyHouseholdSplit !== false;
    }
    if (Array.isArray(data.sharedCategories) && el.sharedCategoryInputs) {
      Array.from(el.sharedCategoryInputs).forEach(function (input) {
        input.checked = data.sharedCategories.includes(
          (input.dataset.category || "other").toLowerCase().trim(),
        );
      });
    }

    bills.length = 0;
    if (Array.isArray(data.bills)) {
      for (let i = 0; i < data.bills.length; i++) {
        bills.push({
          name: data.bills[i].name || "",
          amount: safeNumber(data.bills[i].amount),
          dueDate: data.bills[i].dueDate || "",
          type: data.bills[i].type || "bill",
          category: (data.bills[i].category || "other").toLowerCase().trim(),
          frequency: data.bills[i].frequency || "one-time",
          priority: data.bills[i].priority || "important",
          notes: data.bills[i].notes || "",
          autopay: Boolean(data.bills[i].autopay),
          reminderDays: Math.max(0, safeNumber(data.bills[i].reminderDays)),
          paid: Boolean(data.bills[i].paid),
          lastPaidDate: data.bills[i].lastPaidDate || null,
          createdAt: data.bills[i].createdAt || new Date().toISOString(),
          updatedAt: data.bills[i].updatedAt || null,
        });
      }
    }

    spendingBuckets.length = 0;
    debts.length = 0;
    lifeEvents.length = 0;

    if (Array.isArray(data.debts)) {
      for (let i = 0; i < data.debts.length; i++) {
        debts.push({
          name: data.debts[i].name || "",
          balance: safeNumber(data.debts[i].balance),
          apr: safeNumber(data.debts[i].apr),
          minPayment: safeNumber(data.debts[i].minPayment),
          extraPayment: safeNumber(data.debts[i].extraPayment),
          priority: data.debts[i].priority || "high-interest",
        });
      }
    }

    if (Array.isArray(data.lifeEvents)) {
      for (let i = 0; i < data.lifeEvents.length; i++) {
        lifeEvents.push({
          name: data.lifeEvents[i].name || "",
          type: data.lifeEvents[i].type || "expense",
          amount: safeNumber(data.lifeEvents[i].amount),
          date: data.lifeEvents[i].date || "",
          funding: data.lifeEvents[i].funding || "checking",
        });
      }
    }

    if (Array.isArray(data.spendingBuckets)) {
      for (let i = 0; i < data.spendingBuckets.length; i++) {
        spendingBuckets.push({
          name: data.spendingBuckets[i].name || "",
          amount: safeNumber(data.spendingBuckets[i].amount),
          category: (data.spendingBuckets[i].category || "other")
            .toLowerCase()
            .trim(),
          frequency: data.spendingBuckets[i].frequency || "weekly",
        });
      }
    }

    paystubHistory.length = 0;
    if (Array.isArray(data.paystubHistory)) {
      for (let i = 0; i < data.paystubHistory.length; i++) {
        const entry = data.paystubHistory[i] || {};
        paystubHistory.push({
          id: entry.id || `paystub-${Date.now()}-${i}`,
          sourceText: entry.sourceText || "",
          payDate: entry.payDate || "",
          gross: safeNumber(entry.gross),
          net: safeNumber(entry.net),
          regularHours: safeNumber(entry.regularHours),
          overtimeHours: safeNumber(entry.overtimeHours),
          totalHours: safeNumber(entry.totalHours),
          bonus: safeNumber(entry.bonus),
          federalTax: safeNumber(entry.federalTax),
          stateTax: safeNumber(entry.stateTax),
          localTax: safeNumber(entry.localTax),
          socialSecurity: safeNumber(entry.socialSecurity),
          medicare: safeNumber(entry.medicare),
          hsa: safeNumber(entry.hsa),
          retirement401k: safeNumber(entry.retirement401k),
          medical: safeNumber(entry.medical),
          taxTotal: safeNumber(entry.taxTotal),
          deductionTotal: safeNumber(entry.deductionTotal),
          takeHomePercent: safeNumber(entry.takeHomePercent),
          effectiveHourlyNet: safeNumber(entry.effectiveHourlyNet),
          effectiveHourlyGross: safeNumber(entry.effectiveHourlyGross),
          createdAt: entry.createdAt || new Date().toISOString(),
        });
      }
    }

    if (el.paystubTextInput)
      el.paystubTextInput.value = data.paystubDraft ?? "";

    el.currentBalanceInput.value = data.currentBalance ?? "";
    el.nextPayDateInput.value = data.nextPayDate ?? "";
    el.nextPayAmountInput.value = data.nextPayAmount ?? "";
    el.payFrequencyInput.value = data.payFrequency ?? "biweekly";
    if (el.emergencySavingsBalanceInput)
      el.emergencySavingsBalanceInput.value =
        data.emergencySavingsBalance ?? "";
    if (el.emergencyFloorInput)
      el.emergencyFloorInput.value = data.emergencyFloor ?? "";

    refreshApp();
  } catch (error) {
    console.error("Failed to load saved data:", error);
    localStorage.removeItem(STORAGE_KEYS.app);
    refreshApp();
  }
}

function exportData() {
  const data = {
    bills,
    spendingBuckets,
    currentBalance: el.currentBalanceInput.value,
    nextPayDate: el.nextPayDateInput.value,
    nextPayAmount: el.nextPayAmountInput.value,
    payFrequency: el.payFrequencyInput.value,
    allocationMode: el.allocationModeInput
      ? el.allocationModeInput.value
      : "normal",
    debts,
    lifeEvents,
    emergencySavingsBalance: el.emergencySavingsBalanceInput
      ? el.emergencySavingsBalanceInput.value
      : "",
    emergencyFloor: el.emergencyFloorInput ? el.emergencyFloorInput.value : "",
    estimatorData: {
      paycheck1Gross: el.paycheck1GrossInput
        ? el.paycheck1GrossInput.value
        : "",
      paycheck1Net: el.paycheck1NetInput ? el.paycheck1NetInput.value : "",
      paycheck1Ot: el.paycheck1OtInput ? el.paycheck1OtInput.value : "",
      paycheck2Gross: el.paycheck2GrossInput
        ? el.paycheck2GrossInput.value
        : "",
      paycheck2Net: el.paycheck2NetInput ? el.paycheck2NetInput.value : "",
      paycheck2Ot: el.paycheck2OtInput ? el.paycheck2OtInput.value : "",
      paycheck3Gross: el.paycheck3GrossInput
        ? el.paycheck3GrossInput.value
        : "",
      paycheck3Net: el.paycheck3NetInput ? el.paycheck3NetInput.value : "",
      paycheck3Ot: el.paycheck3OtInput ? el.paycheck3OtInput.value : "",
    },
    incomePlanningData: {
      baseNetPay: el.baseNetPayInput ? el.baseNetPayInput.value : "",
      expectedOtNet: el.expectedOtNetInput ? el.expectedOtNetInput.value : "",
      incomeScenario: el.incomeScenarioInput
        ? el.incomeScenarioInput.value
        : "realistic",
      useIncomeScenarioForForecast: el.useIncomeScenarioForForecastInput
        ? el.useIncomeScenarioForForecastInput.value
        : "manual",
    },
    workPlannerData: {
      hourlyRate: el.workHourlyRateInput ? el.workHourlyRateInput.value : "",
      baseHours: el.workBaseHoursInput ? el.workBaseHoursInput.value : "40",
      otMultiplier: el.workOtMultiplierInput
        ? el.workOtMultiplierInput.value
        : "1.5",
      targetBuffer: el.workTargetBufferInput
        ? el.workTargetBufferInput.value
        : "0",
      extraGoal: el.workExtraGoalInput ? el.workExtraGoalInput.value : "0",
      netRetention: el.workNetRetentionInput
        ? el.workNetRetentionInput.value
        : "",
    },
    paystubDraft: el.paystubTextInput ? el.paystubTextInput.value : "",
    paystubHistory,
  };

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "bill-planner-data-v0.2.0.json";
  link.click();

  URL.revokeObjectURL(url);
}

function exportBillsCsv() {
  const rows = [
    [
      "Name",
      "Amount",
      "Due Date",
      "Category",
      "Frequency",
      "Priority",
      "Auto Pay",
      "Reminder Days",
      "Paid",
      "Notes",
    ],
  ];

  bills.forEach(function (bill) {
    rows.push([
      bill.name || "",
      round2(bill.amount),
      bill.dueDate || "",
      bill.category || "other",
      bill.frequency || "one-time",
      bill.priority || "important",
      bill.autopay ? "Yes" : "No",
      Math.max(0, Math.round(safeNumber(bill.reminderDays))),
      bill.paid ? "Yes" : "No",
      (bill.notes || "").replace(/\r?\n/g, " "),
    ]);
  });

  const csv = rows
    .map(function (row) {
      return row
        .map(function (cell) {
          const safeCell = String(cell ?? "");
          return `"${safeCell.replace(/"/g, '""')}"`;
        })
        .join(",");
    })
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "bill-planner-bills.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();

  reader.onload = function (event) {
    try {
      const importedData = JSON.parse(event.target.result);

      bills.length = 0;
      spendingBuckets.length = 0;
      debts.length = 0;
      lifeEvents.length = 0;

      if (importedData.bills && Array.isArray(importedData.bills)) {
        for (let i = 0; i < importedData.bills.length; i++) {
          const bill = importedData.bills[i];

          bills.push({
            name: bill.name || "",
            amount: safeNumber(bill.amount),
            dueDate: bill.dueDate || "",
            type: bill.type || "bill",
            category: (bill.category || "other").toLowerCase().trim(),
            frequency: bill.frequency || "one-time",
            priority: bill.priority || "important",
            notes: bill.notes || "",
            autopay: Boolean(bill.autopay),
            reminderDays: Math.max(0, safeNumber(bill.reminderDays)),
            paid: Boolean(bill.paid),
          });
        }
      }

      if (el.householdMyShareInput)
        el.householdMyShareInput.value =
          importedData.householdMyShare ??
          (el.householdMyShareInput.value || "70");
      if (el.householdPartnerShareInput)
        el.householdPartnerShareInput.value =
          importedData.householdPartnerShare ??
          (el.householdPartnerShareInput.value || "30");
      syncHouseholdShareInputs("mine");
      if (el.applyHouseholdSplitInput)
        el.applyHouseholdSplitInput.checked =
          importedData.applyHouseholdSplit !== false;
      if (
        Array.isArray(importedData.sharedCategories) &&
        el.sharedCategoryInputs
      ) {
        Array.from(el.sharedCategoryInputs).forEach(function (input) {
          input.checked = importedData.sharedCategories.includes(
            (input.dataset.category || "other").toLowerCase().trim(),
          );
        });
      }

      if (importedData.debts && Array.isArray(importedData.debts)) {
        for (let i = 0; i < importedData.debts.length; i++) {
          const debt = importedData.debts[i];
          debts.push({
            name: debt.name || "",
            balance: safeNumber(debt.balance),
            apr: safeNumber(debt.apr),
            minPayment: safeNumber(debt.minPayment),
            extraPayment: safeNumber(debt.extraPayment),
            priority: debt.priority || "high-interest",
          });
        }
      }

      if (importedData.lifeEvents && Array.isArray(importedData.lifeEvents)) {
        for (let i = 0; i < importedData.lifeEvents.length; i++) {
          const event = importedData.lifeEvents[i];
          lifeEvents.push({
            name: event.name || "",
            type: event.type || "expense",
            amount: safeNumber(event.amount),
            date: event.date || "",
            funding: event.funding || "checking",
          });
        }
      }

      if (
        importedData.spendingBuckets &&
        Array.isArray(importedData.spendingBuckets)
      ) {
        for (let i = 0; i < importedData.spendingBuckets.length; i++) {
          const bucket = importedData.spendingBuckets[i];

          spendingBuckets.push({
            name: bucket.name || "",
            amount: safeNumber(bucket.amount),
            category: (bucket.category || "other").toLowerCase().trim(),
            frequency: bucket.frequency || "weekly",
          });
        }
      }

      el.currentBalanceInput.value = importedData.currentBalance || "";
      el.nextPayDateInput.value = importedData.nextPayDate || "";
      el.nextPayAmountInput.value = importedData.nextPayAmount || "";
      el.payFrequencyInput.value = importedData.payFrequency || "biweekly";
      if (el.emergencySavingsBalanceInput)
        el.emergencySavingsBalanceInput.value =
          importedData.emergencySavingsBalance || "";
      if (el.emergencyFloorInput)
        el.emergencyFloorInput.value = importedData.emergencyFloor || "";

      if (el.allocationModeInput) {
        el.allocationModeInput.value = importedData.allocationMode || "normal";
      }

      if (importedData.estimatorData) {
        const estimator = importedData.estimatorData;

        if (el.paycheck1GrossInput)
          el.paycheck1GrossInput.value = estimator.paycheck1Gross || "";
        if (el.paycheck1NetInput)
          el.paycheck1NetInput.value = estimator.paycheck1Net || "";
        if (el.paycheck1OtInput)
          el.paycheck1OtInput.value = estimator.paycheck1Ot || "";

        if (el.paycheck2GrossInput)
          el.paycheck2GrossInput.value = estimator.paycheck2Gross || "";
        if (el.paycheck2NetInput)
          el.paycheck2NetInput.value = estimator.paycheck2Net || "";
        if (el.paycheck2OtInput)
          el.paycheck2OtInput.value = estimator.paycheck2Ot || "";

        if (el.paycheck3GrossInput)
          el.paycheck3GrossInput.value = estimator.paycheck3Gross || "";
        if (el.paycheck3NetInput)
          el.paycheck3NetInput.value = estimator.paycheck3Net || "";
        if (el.paycheck3OtInput)
          el.paycheck3OtInput.value = estimator.paycheck3Ot || "";

        saveEstimatorData();
        refreshEstimator();
      }

      if (importedData.incomePlanningData) {
        const incomeData = importedData.incomePlanningData;

        if (el.baseNetPayInput)
          el.baseNetPayInput.value = incomeData.baseNetPay || "";
        if (el.expectedOtNetInput)
          el.expectedOtNetInput.value = incomeData.expectedOtNet || "";
        if (el.incomeScenarioInput)
          el.incomeScenarioInput.value =
            incomeData.incomeScenario || "realistic";
        if (el.useIncomeScenarioForForecastInput) {
          el.useIncomeScenarioForForecastInput.value =
            incomeData.useIncomeScenarioForForecast || "manual";
        }

        saveIncomePlanningData();
        refreshIncomePlanning();
      }

      if (importedData.workPlannerData) {
        const workData = importedData.workPlannerData;
        if (el.workHourlyRateInput)
          el.workHourlyRateInput.value = workData.hourlyRate || "";
        if (el.workBaseHoursInput)
          el.workBaseHoursInput.value = workData.baseHours || "40";
        if (el.workOtMultiplierInput)
          el.workOtMultiplierInput.value = workData.otMultiplier || "1.5";
        if (el.workTargetBufferInput)
          el.workTargetBufferInput.value = workData.targetBuffer || "0";
        if (el.workExtraGoalInput)
          el.workExtraGoalInput.value = workData.extraGoal || "0";
        if (el.workNetRetentionInput)
          el.workNetRetentionInput.value = workData.netRetention || "";
      }

      refreshApp();
      alert("Data imported successfully.");
    } catch (error) {
      alert("Invalid file. Please import a valid JSON backup.");
      console.error("Import error:", error);
    }
  };

  reader.readAsText(file);
}

/* =========================
   TAB / INPUT BINDING
========================= */

function switchTab(tabId) {
  for (let i = 0; i < el.tabButtons.length; i++) {
    el.tabButtons[i].classList.remove("active");
  }

  for (let i = 0; i < el.tabContents.length; i++) {
    el.tabContents[i].classList.remove("active");
  }

  const selectedButton = document.querySelector(`[data-tab="${tabId}"]`);
  const selectedTab = document.getElementById(tabId);

  if (selectedButton) {
    selectedButton.classList.add("active");
  }

  if (selectedTab) {
    selectedTab.classList.add("active");
    localStorage.setItem(ACTIVE_TAB_KEY, tabId);
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function bindDashboardInput(inputElement) {
  if (!inputElement) return;

  inputElement.addEventListener("input", refreshApp);
  inputElement.addEventListener("change", refreshApp);
}

function addEstimatorInputListener(input) {
  if (!input) return;

  input.addEventListener("input", function () {
    refreshEstimator();
  });
}

/* =========================
   EVENT LISTENERS
========================= */

if (el.addBillBtn) {
  el.addBillBtn.addEventListener("click", function () {
    const name = el.billNameInput.value.trim();
    const amount = parseFloat(el.billAmountInput.value);
    const dueDate = el.billDueDateInput.value;
    const category = el.billCategoryInput.value.toLowerCase().trim();
    const frequency = el.billFrequencyInput.value;
    const priority = el.billPriorityInput.value;
    const notes = el.billNotesInput ? el.billNotesInput.value.trim() : "";
    const autopay = Boolean(el.billAutopayInput?.checked);
    const reminderDays = Math.max(
      0,
      Math.round(safeNumber(el.billReminderDaysInput?.value)),
    );

    if (name === "" || Number.isNaN(amount) || dueDate === "") {
      alert("Please fill out bill name, amount, and due date.");
      return;
    }

    const existingBill = editIndex !== null ? bills[editIndex] : null;
    const nowIso = new Date().toISOString();

    const bill = {
      name,
      amount,
      dueDate,
      type: "bill",
      category,
      frequency,
      priority,
      notes,
      autopay,
      reminderDays,
      paid: existingBill ? Boolean(existingBill.paid) : false,
      lastPaidDate: existingBill ? existingBill.lastPaidDate || null : null,
      createdAt: existingBill ? existingBill.createdAt || nowIso : nowIso,
      updatedAt: nowIso,
    };

    if (editIndex === null) {
      bills.push(bill);
    } else {
      bills[editIndex] = bill;
    }

    clearBillForm();
    refreshApp();
  });
}

if (el.cancelEditBtn) {
  el.cancelEditBtn.addEventListener("click", clearBillForm);
}

if (el.exportCsvBtn) {
  el.exportCsvBtn.addEventListener("click", exportBillsCsv);
}

if (el.resetAppBtn) {
  el.resetAppBtn.addEventListener("click", function () {
    const confirmed = confirm(
      "This will delete ALL saved data including bills, balances, buckets, and paycheck info. Continue?",
    );

    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEYS.app);
    localStorage.removeItem(STORAGE_KEYS.estimator);
    localStorage.removeItem(STORAGE_KEYS.income);
    localStorage.removeItem(ACTIVE_TAB_KEY);

    location.reload();
  });
}

if (el.applyEstimatedPayBtn) {
  el.applyEstimatedPayBtn.addEventListener("click", function () {
    const estimate = getAveragePaycheckEstimate();

    if (!estimate) {
      alert("Enter at least one paycheck with both gross and net pay first.");
      return;
    }

    el.nextPayAmountInput.value = estimate.averageNet.toFixed(2);
    refreshApp();
  });
}

if (el.applyIncomeScenarioBtn) {
  el.applyIncomeScenarioBtn.addEventListener("click", function () {
    const result = getIncomeScenarioAmount();

    if (!result) {
      alert("Enter a base net pay amount first.");
      return;
    }

    el.nextPayAmountInput.value = result.scenarioAmount.toFixed(2);
    refreshApp();
  });
}

if (el.allocationModeInput) {
  el.allocationModeInput.addEventListener("change", refreshApp);
}

if (el.useIncomeScenarioForForecastInput) {
  el.useIncomeScenarioForForecastInput.addEventListener("change", function () {
    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.incomeScenarioInput) {
  el.incomeScenarioInput.addEventListener("change", function () {
    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.baseNetPayInput) {
  el.baseNetPayInput.addEventListener("input", function () {
    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.expectedOtNetInput) {
  el.expectedOtNetInput.addEventListener("input", function () {
    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.useEstimatorAverageBtn) {
  el.useEstimatorAverageBtn.addEventListener("click", function () {
    const estimate = getAveragePaycheckEstimate();

    if (!estimate) {
      alert("Enter at least one paycheck with gross and net values first.");
      return;
    }

    if (el.baseNetPayInput) {
      el.baseNetPayInput.value = estimate.averageNet.toFixed(2);
    }

    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.useManualNextPayBtn) {
  el.useManualNextPayBtn.addEventListener("click", function () {
    const manualAmount = safeNumber(el.nextPayAmountInput?.value);

    if (manualAmount <= 0) {
      alert("Enter a manual next paycheck amount first.");
      return;
    }

    if (el.baseNetPayInput) {
      el.baseNetPayInput.value = manualAmount.toFixed(2);
    }

    refreshIncomePlanning();
    refreshApp();
  });
}

if (el.copyScenarioToManualBtn) {
  el.copyScenarioToManualBtn.addEventListener("click", function () {
    const result = getIncomeScenarioAmount();

    if (!result) {
      alert("Enter a base net pay first.");
      return;
    }

    el.nextPayAmountInput.value = result.scenarioAmount.toFixed(2);
    refreshApp();
  });
}

if (el.presetLowOtBtn) {
  el.presetLowOtBtn.addEventListener("click", function () {
    applyOtPreset(0);
  });
}

if (el.presetNormalOtBtn) {
  el.presetNormalOtBtn.addEventListener("click", function () {
    applyOtPreset(150);
  });
}

if (el.presetHeavyOtBtn) {
  el.presetHeavyOtBtn.addEventListener("click", function () {
    applyOtPreset(300);
  });
}

if (el.addBucketBtn) {
  el.addBucketBtn.addEventListener("click", function () {
    const name = el.bucketNameInput.value.trim();
    const amount = parseFloat(el.bucketAmountInput.value);
    const category = (el.bucketCategoryInput?.value || "other")
      .toLowerCase()
      .trim();
    const frequency = el.bucketFrequencyInput.value;

    if (!name || Number.isNaN(amount)) {
      alert("Enter a bucket name and amount.");
      return;
    }

    const bucket = {
      name,
      amount,
      category,
      frequency,
    };

    if (bucketEditIndex === null) {
      spendingBuckets.push(bucket);
    } else {
      spendingBuckets[bucketEditIndex] = bucket;
    }

    clearBucketForm();
    refreshApp();
  });
}

if (el.cancelBucketEditBtn) {
  el.cancelBucketEditBtn.addEventListener("click", clearBucketForm);
}

if (el.stressTestModeInput) {
  el.stressTestModeInput.addEventListener("change", refreshApp);
}

if (el.stressTestAmountInput) {
  el.stressTestAmountInput.addEventListener("input", refreshApp);
}

if (el.stressTestDaysInput) {
  el.stressTestDaysInput.addEventListener("input", refreshApp);
}

if (el.billSearchInput) {
  el.billSearchInput.addEventListener("input", renderBills);
}

if (el.filterCategoryInput) {
  el.filterCategoryInput.addEventListener("change", renderBills);
}

if (el.filterStatusInput) {
  el.filterStatusInput.addEventListener("change", renderBills);
}

if (el.exportDataBtn) {
  el.exportDataBtn.addEventListener("click", exportData);
}

if (el.importDataBtn) {
  el.importDataBtn.addEventListener("click", function () {
    el.importFileInput.click();
  });
}

if (el.importFileInput) {
  el.importFileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    importData(file);
    el.importFileInput.value = "";
  });
}

bindDashboardInput(el.emergencySavingsBalanceInput);
bindDashboardInput(el.emergencyFloorInput);
bindDashboardInput(el.workHourlyRateInput);
bindDashboardInput(el.workBaseHoursInput);
bindDashboardInput(el.workOtMultiplierInput);
bindDashboardInput(el.workTargetBufferInput);
bindDashboardInput(el.workExtraGoalInput);
bindDashboardInput(el.workNetRetentionInput);

for (let i = 0; i < el.tabButtons.length; i++) {
  el.tabButtons[i].addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");
    switchTab(tabId);
  });
}

addEstimatorInputListener(el.paycheck1GrossInput);
addEstimatorInputListener(el.paycheck1NetInput);
addEstimatorInputListener(el.paycheck1OtInput);
addEstimatorInputListener(el.paycheck2GrossInput);
addEstimatorInputListener(el.paycheck2NetInput);
addEstimatorInputListener(el.paycheck2OtInput);
addEstimatorInputListener(el.paycheck3GrossInput);
addEstimatorInputListener(el.paycheck3NetInput);
addEstimatorInputListener(el.paycheck3OtInput);

if (el.scanPaystubImageBtn) {
  el.scanPaystubImageBtn.addEventListener("click", function () {
    scanPaystubImage();
  });
}

if (el.paystubImageInput) {
  el.paystubImageInput.addEventListener("change", function () {
    latestParsedPaystub = null;
    setPaystubOcrStatus("Image selected. Tap Scan Image to extract the paystub text.", "info");
  });
}

if (el.analyzePaystubBtn) {
  el.analyzePaystubBtn.addEventListener("click", analyzePaystubDraft);
}

if (el.clearPaystubBtn) {
  el.clearPaystubBtn.addEventListener("click", function () {
    latestParsedPaystub = null;
    if (el.paystubTextInput) el.paystubTextInput.value = "";
    if (el.paystubImageInput) el.paystubImageInput.value = "";
    setPaystubOcrStatus("Upload a paystub image or paste paystub text to begin.", "info");
    refreshApp();
  });
}

if (el.paystubTextInput) {
  el.paystubTextInput.addEventListener("input", function () {
    if (isProgrammaticPaystubUpdate) return;

    latestParsedPaystub = null;
    saveData();
    renderPaystubAnalysis();

    if (el.paystubTextInput.value.trim()) {
      setPaystubOcrStatus("Text updated. Tap Analyze Extracted Text to parse the paystub.", "info");
    }
  });
}

if (el.addParsedPaystubBtn) {
  el.addParsedPaystubBtn.addEventListener("click", function () {
    analyzePaystubDraft();
    if (!latestParsedPaystub) {
      alert("Paste paystub text that includes at least gross or net pay.");
      return;
    }

    paystubHistory.unshift({
      ...latestParsedPaystub,
      id: `paystub-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    });

    refreshApp();
  });
}

if (el.usePaystubAverageBtn) {
  el.usePaystubAverageBtn.addEventListener(
    "click",
    applyPaystubAverageToManualPaycheck,
  );
}

bindDashboardInput(el.currentBalanceInput);
bindDashboardInput(el.nextPayDateInput);
bindDashboardInput(el.nextPayAmountInput);
bindDashboardInput(el.payFrequencyInput);

/* =========================
   COLLAPSIBLE CARD UI
========================= */

const COLLAPSE_STATE_KEY = "billPlannerCollapseState";
let collapseState = {};

function loadCollapseState() {
  try {
    collapseState = JSON.parse(
      localStorage.getItem(COLLAPSE_STATE_KEY) || "{}",
    );
  } catch (error) {
    collapseState = {};
  }
}

function saveCollapseState() {
  try {
    localStorage.setItem(COLLAPSE_STATE_KEY, JSON.stringify(collapseState));
  } catch (error) {
    console.warn("Unable to save collapse state.", error);
  }
}

function setCardCollapsed(card, collapsed) {
  if (!card) return;

  const body = card.querySelector(".card-collapse-body");
  const toggle = card.querySelector(".card-collapse-toggle");
  if (!body || !toggle) return;

  const helper = toggle.querySelector(".card-collapse-toggle-label");
  const label = collapsed ? "Show details" : "Hide details";
  if (helper) helper.textContent = label;
  toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");

  const finishOpen = function () {
    if (!card.classList.contains("is-collapsed")) {
      body.style.maxHeight = "none";
      body.style.opacity = "1";
      body.style.transform = "translateY(0)";
    }
  };

  if (collapsed) {
    if (body.hidden) {
      card.classList.add("is-collapsed");
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
      body.style.transform = "translateY(-6px)";
      return;
    }

    body.hidden = false;
    body.style.maxHeight = `${body.scrollHeight}px`;
    body.style.opacity = "1";
    body.style.transform = "translateY(0)";

    requestAnimationFrame(function () {
      card.classList.add("is-collapsed");
      body.style.maxHeight = "0px";
      body.style.opacity = "0";
      body.style.transform = "translateY(-6px)";
    });

    window.setTimeout(function () {
      if (card.classList.contains("is-collapsed")) {
        body.hidden = true;
      }
    }, 290);
  } else {
    card.classList.remove("is-collapsed");
    body.hidden = false;
    body.style.maxHeight = "0px";
    body.style.opacity = "0";
    body.style.transform = "translateY(-6px)";

    requestAnimationFrame(function () {
      body.style.maxHeight = `${body.scrollHeight}px`;
      body.style.opacity = "1";
      body.style.transform = "translateY(0)";
    });

    window.setTimeout(finishOpen, 300);
  }
}

function openCollapsibleCard(card) {
  if (!card) return;
  if (!card.matches(".card[data-collapsible='true']")) return;

  const key =
    card.dataset.collapseKey || card.getAttribute("data-collapse-key");
  if (key) {
    collapseState[key] = false;
    saveCollapseState();
  }

  setCardCollapsed(card, false);
}

function initializeToolChipNavigation() {
  const chips = document.querySelectorAll(".tool-chip[href^='#']");
  if (!chips.length) return;

  chips.forEach(function (chip) {
    chip.addEventListener("click", function (event) {
      const href = chip.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      openCollapsibleCard(target);

      window.setTimeout(function () {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    });
  });
}

function initializeCollapsibleCards() {
  loadCollapseState();

  const cards = document.querySelectorAll(".card[data-collapsible='true']");

  cards.forEach(function (card, index) {
    if (card.dataset.collapseReady === "true") return;

    const key = card.getAttribute("data-collapse-key") || `card-${index}`;
    card.dataset.collapseKey = key;

    let heading =
      card.querySelector(":scope > .section-heading") ||
      card.querySelector(":scope > h2");
    if (!heading) return;

    const body = document.createElement("div");
    body.className = "card-collapse-body";

    const children = Array.from(card.children);
    children.forEach(function (child) {
      if (child !== heading) {
        body.appendChild(child);
      }
    });

    if (heading.classList.contains("section-heading")) {
      heading.classList.add("section-heading-collapsible");
    } else if (heading.tagName === "H2") {
      const headingWrap = document.createElement("div");
      headingWrap.className = "section-heading section-heading-collapsible";
      const newHeading = document.createElement("h2");
      newHeading.textContent = heading.textContent;
      heading.replaceWith(headingWrap);
      headingWrap.appendChild(newHeading);
      card.insertBefore(headingWrap, card.firstChild);
      heading = headingWrap;
    }

    const headingRow = heading.classList.contains("section-heading")
      ? heading
      : card.querySelector(":scope > .section-heading");
    if (!headingRow) return;

    const action = document.createElement("button");
    action.type = "button";
    action.className = "card-collapse-toggle";
    action.innerHTML =
      '<span class="card-collapse-toggle-label">Hide details</span><span class="card-collapse-toggle-icon" aria-hidden="true">⌄</span>';
    headingRow.appendChild(action);
    card.appendChild(body);

    const defaultCollapsed = card.getAttribute("data-collapsed") === "true";
    const collapsed = Object.prototype.hasOwnProperty.call(collapseState, key)
      ? collapseState[key]
      : defaultCollapsed;
    setCardCollapsed(card, collapsed);

    action.addEventListener("click", function () {
      const next = !card.classList.contains("is-collapsed");
      collapseState[key] = next;
      saveCollapseState();
      setCardCollapsed(card, next);
    });

    card.dataset.collapseReady = "true";
  });
}

/* ================================
   PLAN CHIP NAVIGATION FIX
   ================================ */

function setupPlanChipNavigation() {
  const chipMap = {
    planOverviewChip: "planOverviewCard",
    planTimelineChip: "payPeriodTimelineCard",
    planAssignmentsChip: "paycheckAssignmentsCard",
    planScenariosChip: "incomeScenariosCard",
    planBalanceChip: "projectedBalanceChartCard",
  };

  Object.entries(chipMap).forEach(([chipId, cardId]) => {
    const chip = document.getElementById(chipId);
    const card = document.getElementById(cardId);

    if (!chip || !card) return;

    chip.addEventListener("click", () => {
      // open collapsed cards if needed
      const content = card.querySelector(".card-content");
      const toggle = card.querySelector(".card-toggle");

      if (content && content.style.display === "none") {
        content.style.display = "block";
        if (toggle) toggle.textContent = "Collapse";
      }

      // smooth scroll
      card.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", setupPlanChipNavigation);

function getQuickActionTarget(config) {
  if (!config) return null;

  if (config.targetId) {
    const byId = document.getElementById(config.targetId);
    if (byId) return byId;
  }

  if (config.collapseKey) {
    const byCollapseKey = document.querySelector(
      `[data-collapse-key="${config.collapseKey}"]`,
    );
    if (byCollapseKey) return byCollapseKey;
  }

  if (config.selector) {
    const bySelector = document.querySelector(config.selector);
    if (bySelector) return bySelector;
  }

  return null;
}

function handleQuickAction(action) {
  const actionMap = {
    "today-setup": {
      tabId: "dashboardTab",
      targetId: "todaySetupCard",
      collapseKey: "today-setup",
      selector: ".quick-plan-card[data-collapsible='true']",
    },
    "bills-add": {
      tabId: "billsTab",
      targetId: "billEntryCard",
      selector: "#billEntryCard",
    },
    "plan-scenario": {
      tabId: "forecastTab",
      targetId: "planScenariosCard",
      collapseKey: "forecast-stress",
      selector: "#planScenariosCard",
    },
    "work-planner": {
      tabId: "dashboardTab",
      targetId: "workPlannerCard",
      collapseKey: "today-work-planner",
      selector: "#workPlannerCard",
    },
  };

  const config = actionMap[action];
  if (!config) return;

  switchTab(config.tabId);

  window.setTimeout(function () {
    const target = getQuickActionTarget(config);
    if (!target) return;

    if (target.matches("details")) {
      target.open = true;
    } else {
      openCollapsibleCard(target);
      const body = target.querySelector(":scope > .card-collapse-body");
      if (body) body.hidden = false;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
}

function refreshAnimatedNodes() {
  const animatedNodes = document.querySelectorAll(
    "[data-animate-value='true']",
  );
  animatedNodes.forEach(function (node) {
    animateNumberText(node, node.textContent);
  });
}

function initializeTodayQuickActions() {
  const actions = document.querySelectorAll("[data-quick-action]");
  if (!actions.length) return;

  actions.forEach(function (button) {
    if (button.dataset.quickActionReady === "true") return;

    button.addEventListener("click", function (event) {
      event.preventDefault();
      handleQuickAction(button.getAttribute("data-quick-action"));
    });

    button.dataset.quickActionReady = "true";
  });
}

/* =========================
   INITIAL LOAD
========================= */

loadIncomePlanningData();
loadEstimatorData();
loadData();
initializeCollapsibleCards();
initializeToolChipNavigation();
initializeTodayQuickActions();

refreshIncomePlanning();
refreshEstimator();
renderBuckets();

setPaystubOcrStatus("Upload a paystub image or paste paystub text to begin.", "info");

const savedActiveTab = localStorage.getItem(ACTIVE_TAB_KEY);
if (savedActiveTab && document.getElementById(savedActiveTab)) {
  switchTab(savedActiveTab);
} else {
  switchTab("dashboardTab");
}

/* =========================
   SERVICE WORKER REGISTRATION
========================= */

(function initializeServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  var isLocalDev =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  window.addEventListener("load", function () {
    if (isLocalDev) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        registrations.forEach(function (registration) {
          registration.unregister();
        });
      });

      if ("caches" in window) {
        caches.keys().then(function (keys) {
          keys.forEach(function (key) {
            if (key.indexOf("bill-planner-") === 0) {
              caches.delete(key);
            }
          });
        });
      }

      console.info("Service worker disabled in local development.");
      return;
    }

    navigator.serviceWorker
      .register("service-worker.js")
      .catch(function (error) {
        console.error("Service worker registration failed:", error);
      });
  });
})();

