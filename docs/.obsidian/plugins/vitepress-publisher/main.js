const _importMetaUrl = require('url').pathToFileURL(__filename);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/obsidian-dataview/lib/index.js
var require_lib = __commonJS({
  "node_modules/obsidian-dataview/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("obsidian");
    var LuxonError = class extends Error {
    };
    var InvalidDateTimeError = class extends LuxonError {
      constructor(reason) {
        super(`Invalid DateTime: ${reason.toMessage()}`);
      }
    };
    var InvalidIntervalError = class extends LuxonError {
      constructor(reason) {
        super(`Invalid Interval: ${reason.toMessage()}`);
      }
    };
    var InvalidDurationError = class extends LuxonError {
      constructor(reason) {
        super(`Invalid Duration: ${reason.toMessage()}`);
      }
    };
    var ConflictingSpecificationError = class extends LuxonError {
    };
    var InvalidUnitError = class extends LuxonError {
      constructor(unit) {
        super(`Invalid unit ${unit}`);
      }
    };
    var InvalidArgumentError = class extends LuxonError {
    };
    var ZoneIsAbstractError = class extends LuxonError {
      constructor() {
        super("Zone is an abstract class");
      }
    };
    var n = "numeric";
    var s = "short";
    var l = "long";
    var DATE_SHORT = {
      year: n,
      month: n,
      day: n
    };
    var DATE_MED = {
      year: n,
      month: s,
      day: n
    };
    var DATE_MED_WITH_WEEKDAY = {
      year: n,
      month: s,
      day: n,
      weekday: s
    };
    var DATE_FULL = {
      year: n,
      month: l,
      day: n
    };
    var DATE_HUGE = {
      year: n,
      month: l,
      day: n,
      weekday: l
    };
    var TIME_SIMPLE = {
      hour: n,
      minute: n
    };
    var TIME_WITH_SECONDS = {
      hour: n,
      minute: n,
      second: n
    };
    var TIME_WITH_SHORT_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      timeZoneName: s
    };
    var TIME_WITH_LONG_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      timeZoneName: l
    };
    var TIME_24_SIMPLE = {
      hour: n,
      minute: n,
      hourCycle: "h23"
    };
    var TIME_24_WITH_SECONDS = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23"
    };
    var TIME_24_WITH_SHORT_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23",
      timeZoneName: s
    };
    var TIME_24_WITH_LONG_OFFSET = {
      hour: n,
      minute: n,
      second: n,
      hourCycle: "h23",
      timeZoneName: l
    };
    var DATETIME_SHORT = {
      year: n,
      month: n,
      day: n,
      hour: n,
      minute: n
    };
    var DATETIME_SHORT_WITH_SECONDS = {
      year: n,
      month: n,
      day: n,
      hour: n,
      minute: n,
      second: n
    };
    var DATETIME_MED = {
      year: n,
      month: s,
      day: n,
      hour: n,
      minute: n
    };
    var DATETIME_MED_WITH_SECONDS = {
      year: n,
      month: s,
      day: n,
      hour: n,
      minute: n,
      second: n
    };
    var DATETIME_MED_WITH_WEEKDAY = {
      year: n,
      month: s,
      day: n,
      weekday: s,
      hour: n,
      minute: n
    };
    var DATETIME_FULL = {
      year: n,
      month: l,
      day: n,
      hour: n,
      minute: n,
      timeZoneName: s
    };
    var DATETIME_FULL_WITH_SECONDS = {
      year: n,
      month: l,
      day: n,
      hour: n,
      minute: n,
      second: n,
      timeZoneName: s
    };
    var DATETIME_HUGE = {
      year: n,
      month: l,
      day: n,
      weekday: l,
      hour: n,
      minute: n,
      timeZoneName: l
    };
    var DATETIME_HUGE_WITH_SECONDS = {
      year: n,
      month: l,
      day: n,
      weekday: l,
      hour: n,
      minute: n,
      second: n,
      timeZoneName: l
    };
    var Zone = class {
      /**
       * The type of zone
       * @abstract
       * @type {string}
       */
      get type() {
        throw new ZoneIsAbstractError();
      }
      /**
       * The name of this zone.
       * @abstract
       * @type {string}
       */
      get name() {
        throw new ZoneIsAbstractError();
      }
      get ianaName() {
        return this.name;
      }
      /**
       * Returns whether the offset is known to be fixed for the whole year.
       * @abstract
       * @type {boolean}
       */
      get isUniversal() {
        throw new ZoneIsAbstractError();
      }
      /**
       * Returns the offset's common name (such as EST) at the specified timestamp
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to get the name
       * @param {Object} opts - Options to affect the format
       * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
       * @param {string} opts.locale - What locale to return the offset name in.
       * @return {string}
       */
      offsetName(ts, opts) {
        throw new ZoneIsAbstractError();
      }
      /**
       * Returns the offset's value as a string
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to get the offset
       * @param {string} format - What style of offset to return.
       *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
       * @return {string}
       */
      formatOffset(ts, format) {
        throw new ZoneIsAbstractError();
      }
      /**
       * Return the offset in minutes for this zone at the specified timestamp.
       * @abstract
       * @param {number} ts - Epoch milliseconds for which to compute the offset
       * @return {number}
       */
      offset(ts) {
        throw new ZoneIsAbstractError();
      }
      /**
       * Return whether this Zone is equal to another zone
       * @abstract
       * @param {Zone} otherZone - the zone to compare
       * @return {boolean}
       */
      equals(otherZone) {
        throw new ZoneIsAbstractError();
      }
      /**
       * Return whether this Zone is valid.
       * @abstract
       * @type {boolean}
       */
      get isValid() {
        throw new ZoneIsAbstractError();
      }
    };
    var singleton$1 = null;
    var SystemZone = class extends Zone {
      /**
       * Get a singleton instance of the local zone
       * @return {SystemZone}
       */
      static get instance() {
        if (singleton$1 === null) {
          singleton$1 = new SystemZone();
        }
        return singleton$1;
      }
      /** @override **/
      get type() {
        return "system";
      }
      /** @override **/
      get name() {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      }
      /** @override **/
      get isUniversal() {
        return false;
      }
      /** @override **/
      offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale);
      }
      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
      }
      /** @override **/
      offset(ts) {
        return -new Date(ts).getTimezoneOffset();
      }
      /** @override **/
      equals(otherZone) {
        return otherZone.type === "system";
      }
      /** @override **/
      get isValid() {
        return true;
      }
    };
    var dtfCache = {};
    function makeDTF(zone) {
      if (!dtfCache[zone]) {
        dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: zone,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          era: "short"
        });
      }
      return dtfCache[zone];
    }
    var typeToPos = {
      year: 0,
      month: 1,
      day: 2,
      era: 3,
      hour: 4,
      minute: 5,
      second: 6
    };
    function hackyOffset(dtf, date) {
      const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
      return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
    }
    function partsOffset(dtf, date) {
      const formatted = dtf.formatToParts(date);
      const filled = [];
      for (let i = 0; i < formatted.length; i++) {
        const { type, value } = formatted[i];
        const pos = typeToPos[type];
        if (type === "era") {
          filled[pos] = value;
        } else if (!isUndefined(pos)) {
          filled[pos] = parseInt(value, 10);
        }
      }
      return filled;
    }
    var ianaZoneCache = {};
    var IANAZone = class extends Zone {
      /**
       * @param {string} name - Zone name
       * @return {IANAZone}
       */
      static create(name) {
        if (!ianaZoneCache[name]) {
          ianaZoneCache[name] = new IANAZone(name);
        }
        return ianaZoneCache[name];
      }
      /**
       * Reset local caches. Should only be necessary in testing scenarios.
       * @return {void}
       */
      static resetCache() {
        ianaZoneCache = {};
        dtfCache = {};
      }
      /**
       * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
       * @param {string} s - The string to check validity on
       * @example IANAZone.isValidSpecifier("America/New_York") //=> true
       * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
       * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
       * @return {boolean}
       */
      static isValidSpecifier(s2) {
        return this.isValidZone(s2);
      }
      /**
       * Returns whether the provided string identifies a real zone
       * @param {string} zone - The string to check
       * @example IANAZone.isValidZone("America/New_York") //=> true
       * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
       * @example IANAZone.isValidZone("Sport~~blorp") //=> false
       * @return {boolean}
       */
      static isValidZone(zone) {
        if (!zone) {
          return false;
        }
        try {
          new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
          return true;
        } catch (e) {
          return false;
        }
      }
      constructor(name) {
        super();
        this.zoneName = name;
        this.valid = IANAZone.isValidZone(name);
      }
      /** @override **/
      get type() {
        return "iana";
      }
      /** @override **/
      get name() {
        return this.zoneName;
      }
      /** @override **/
      get isUniversal() {
        return false;
      }
      /** @override **/
      offsetName(ts, { format, locale }) {
        return parseZoneInfo(ts, format, locale, this.name);
      }
      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.offset(ts), format);
      }
      /** @override **/
      offset(ts) {
        const date = new Date(ts);
        if (isNaN(date))
          return NaN;
        const dtf = makeDTF(this.name);
        let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
        if (adOrBc === "BC") {
          year = -Math.abs(year) + 1;
        }
        const adjustedHour = hour === 24 ? 0 : hour;
        const asUTC = objToLocalTS({
          year,
          month,
          day,
          hour: adjustedHour,
          minute,
          second,
          millisecond: 0
        });
        let asTS = +date;
        const over = asTS % 1e3;
        asTS -= over >= 0 ? over : 1e3 + over;
        return (asUTC - asTS) / (60 * 1e3);
      }
      /** @override **/
      equals(otherZone) {
        return otherZone.type === "iana" && otherZone.name === this.name;
      }
      /** @override **/
      get isValid() {
        return this.valid;
      }
    };
    var intlLFCache = {};
    function getCachedLF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlLFCache[key];
      if (!dtf) {
        dtf = new Intl.ListFormat(locString, opts);
        intlLFCache[key] = dtf;
      }
      return dtf;
    }
    var intlDTCache = {};
    function getCachedDTF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let dtf = intlDTCache[key];
      if (!dtf) {
        dtf = new Intl.DateTimeFormat(locString, opts);
        intlDTCache[key] = dtf;
      }
      return dtf;
    }
    var intlNumCache = {};
    function getCachedINF(locString, opts = {}) {
      const key = JSON.stringify([locString, opts]);
      let inf = intlNumCache[key];
      if (!inf) {
        inf = new Intl.NumberFormat(locString, opts);
        intlNumCache[key] = inf;
      }
      return inf;
    }
    var intlRelCache = {};
    function getCachedRTF(locString, opts = {}) {
      const { base, ...cacheKeyOpts } = opts;
      const key = JSON.stringify([locString, cacheKeyOpts]);
      let inf = intlRelCache[key];
      if (!inf) {
        inf = new Intl.RelativeTimeFormat(locString, opts);
        intlRelCache[key] = inf;
      }
      return inf;
    }
    var sysLocaleCache = null;
    function systemLocale() {
      if (sysLocaleCache) {
        return sysLocaleCache;
      } else {
        sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
        return sysLocaleCache;
      }
    }
    function parseLocaleString(localeStr) {
      const xIndex = localeStr.indexOf("-x-");
      if (xIndex !== -1) {
        localeStr = localeStr.substring(0, xIndex);
      }
      const uIndex = localeStr.indexOf("-u-");
      if (uIndex === -1) {
        return [localeStr];
      } else {
        let options;
        let selectedStr;
        try {
          options = getCachedDTF(localeStr).resolvedOptions();
          selectedStr = localeStr;
        } catch (e) {
          const smaller = localeStr.substring(0, uIndex);
          options = getCachedDTF(smaller).resolvedOptions();
          selectedStr = smaller;
        }
        const { numberingSystem, calendar } = options;
        return [selectedStr, numberingSystem, calendar];
      }
    }
    function intlConfigString(localeStr, numberingSystem, outputCalendar) {
      if (outputCalendar || numberingSystem) {
        if (!localeStr.includes("-u-")) {
          localeStr += "-u";
        }
        if (outputCalendar) {
          localeStr += `-ca-${outputCalendar}`;
        }
        if (numberingSystem) {
          localeStr += `-nu-${numberingSystem}`;
        }
        return localeStr;
      } else {
        return localeStr;
      }
    }
    function mapMonths(f) {
      const ms = [];
      for (let i = 1; i <= 12; i++) {
        const dt = DateTime.utc(2009, i, 1);
        ms.push(f(dt));
      }
      return ms;
    }
    function mapWeekdays(f) {
      const ms = [];
      for (let i = 1; i <= 7; i++) {
        const dt = DateTime.utc(2016, 11, 13 + i);
        ms.push(f(dt));
      }
      return ms;
    }
    function listStuff(loc, length, englishFn, intlFn) {
      const mode = loc.listingMode();
      if (mode === "error") {
        return null;
      } else if (mode === "en") {
        return englishFn(length);
      } else {
        return intlFn(length);
      }
    }
    function supportsFastNumbers(loc) {
      if (loc.numberingSystem && loc.numberingSystem !== "latn") {
        return false;
      } else {
        return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
      }
    }
    var PolyNumberFormatter = class {
      constructor(intl, forceSimple, opts) {
        this.padTo = opts.padTo || 0;
        this.floor = opts.floor || false;
        const { padTo, floor, ...otherOpts } = opts;
        if (!forceSimple || Object.keys(otherOpts).length > 0) {
          const intlOpts = { useGrouping: false, ...opts };
          if (opts.padTo > 0)
            intlOpts.minimumIntegerDigits = opts.padTo;
          this.inf = getCachedINF(intl, intlOpts);
        }
      }
      format(i) {
        if (this.inf) {
          const fixed = this.floor ? Math.floor(i) : i;
          return this.inf.format(fixed);
        } else {
          const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
          return padStart(fixed, this.padTo);
        }
      }
    };
    var PolyDateFormatter = class {
      constructor(dt, intl, opts) {
        this.opts = opts;
        this.originalZone = void 0;
        let z = void 0;
        if (this.opts.timeZone) {
          this.dt = dt;
        } else if (dt.zone.type === "fixed") {
          const gmtOffset = -1 * (dt.offset / 60);
          const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
          if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
            z = offsetZ;
            this.dt = dt;
          } else {
            z = "UTC";
            this.dt = dt.offset === 0 ? dt : dt.setZone("UTC").plus({ minutes: dt.offset });
            this.originalZone = dt.zone;
          }
        } else if (dt.zone.type === "system") {
          this.dt = dt;
        } else if (dt.zone.type === "iana") {
          this.dt = dt;
          z = dt.zone.name;
        } else {
          z = "UTC";
          this.dt = dt.setZone("UTC").plus({ minutes: dt.offset });
          this.originalZone = dt.zone;
        }
        const intlOpts = { ...this.opts };
        intlOpts.timeZone = intlOpts.timeZone || z;
        this.dtf = getCachedDTF(intl, intlOpts);
      }
      format() {
        if (this.originalZone) {
          return this.formatToParts().map(({ value }) => value).join("");
        }
        return this.dtf.format(this.dt.toJSDate());
      }
      formatToParts() {
        const parts = this.dtf.formatToParts(this.dt.toJSDate());
        if (this.originalZone) {
          return parts.map((part) => {
            if (part.type === "timeZoneName") {
              const offsetName = this.originalZone.offsetName(this.dt.ts, {
                locale: this.dt.locale,
                format: this.opts.timeZoneName
              });
              return {
                ...part,
                value: offsetName
              };
            } else {
              return part;
            }
          });
        }
        return parts;
      }
      resolvedOptions() {
        return this.dtf.resolvedOptions();
      }
    };
    var PolyRelFormatter = class {
      constructor(intl, isEnglish, opts) {
        this.opts = { style: "long", ...opts };
        if (!isEnglish && hasRelative()) {
          this.rtf = getCachedRTF(intl, opts);
        }
      }
      format(count, unit) {
        if (this.rtf) {
          return this.rtf.format(count, unit);
        } else {
          return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
        }
      }
      formatToParts(count, unit) {
        if (this.rtf) {
          return this.rtf.formatToParts(count, unit);
        } else {
          return [];
        }
      }
    };
    var Locale = class {
      static fromOpts(opts) {
        return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
      }
      static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
        const specifiedLocale = locale || Settings.defaultLocale;
        const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
        const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
        const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
        return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
      }
      static resetCache() {
        sysLocaleCache = null;
        intlDTCache = {};
        intlNumCache = {};
        intlRelCache = {};
      }
      static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
        return Locale.create(locale, numberingSystem, outputCalendar);
      }
      constructor(locale, numbering, outputCalendar, specifiedLocale) {
        const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
        this.locale = parsedLocale;
        this.numberingSystem = numbering || parsedNumberingSystem || null;
        this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
        this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
        this.weekdaysCache = { format: {}, standalone: {} };
        this.monthsCache = { format: {}, standalone: {} };
        this.meridiemCache = null;
        this.eraCache = {};
        this.specifiedLocale = specifiedLocale;
        this.fastNumbersCached = null;
      }
      get fastNumbers() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers(this);
        }
        return this.fastNumbersCached;
      }
      listingMode() {
        const isActuallyEn = this.isEnglish();
        const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
        return isActuallyEn && hasNoWeirdness ? "en" : "intl";
      }
      clone(alts) {
        if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
          return this;
        } else {
          return Locale.create(
            alts.locale || this.specifiedLocale,
            alts.numberingSystem || this.numberingSystem,
            alts.outputCalendar || this.outputCalendar,
            alts.defaultToEN || false
          );
        }
      }
      redefaultToEN(alts = {}) {
        return this.clone({ ...alts, defaultToEN: true });
      }
      redefaultToSystem(alts = {}) {
        return this.clone({ ...alts, defaultToEN: false });
      }
      months(length, format = false) {
        return listStuff(this, length, months, () => {
          const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
          if (!this.monthsCache[formatStr][length]) {
            this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
          }
          return this.monthsCache[formatStr][length];
        });
      }
      weekdays(length, format = false) {
        return listStuff(this, length, weekdays, () => {
          const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
          if (!this.weekdaysCache[formatStr][length]) {
            this.weekdaysCache[formatStr][length] = mapWeekdays(
              (dt) => this.extract(dt, intl, "weekday")
            );
          }
          return this.weekdaysCache[formatStr][length];
        });
      }
      meridiems() {
        return listStuff(
          this,
          void 0,
          () => meridiems,
          () => {
            if (!this.meridiemCache) {
              const intl = { hour: "numeric", hourCycle: "h12" };
              this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
                (dt) => this.extract(dt, intl, "dayperiod")
              );
            }
            return this.meridiemCache;
          }
        );
      }
      eras(length) {
        return listStuff(this, length, eras, () => {
          const intl = { era: length };
          if (!this.eraCache[length]) {
            this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
              (dt) => this.extract(dt, intl, "era")
            );
          }
          return this.eraCache[length];
        });
      }
      extract(dt, intlOpts, field) {
        const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
        return matching ? matching.value : null;
      }
      numberFormatter(opts = {}) {
        return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
      }
      dtFormatter(dt, intlOpts = {}) {
        return new PolyDateFormatter(dt, this.intl, intlOpts);
      }
      relFormatter(opts = {}) {
        return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
      }
      listFormatter(opts = {}) {
        return getCachedLF(this.intl, opts);
      }
      isEnglish() {
        return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
      }
      equals(other) {
        return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
      }
    };
    var singleton = null;
    var FixedOffsetZone = class extends Zone {
      /**
       * Get a singleton instance of UTC
       * @return {FixedOffsetZone}
       */
      static get utcInstance() {
        if (singleton === null) {
          singleton = new FixedOffsetZone(0);
        }
        return singleton;
      }
      /**
       * Get an instance with a specified offset
       * @param {number} offset - The offset in minutes
       * @return {FixedOffsetZone}
       */
      static instance(offset2) {
        return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
      }
      /**
       * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
       * @param {string} s - The offset string to parse
       * @example FixedOffsetZone.parseSpecifier("UTC+6")
       * @example FixedOffsetZone.parseSpecifier("UTC+06")
       * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
       * @return {FixedOffsetZone}
       */
      static parseSpecifier(s2) {
        if (s2) {
          const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
          if (r) {
            return new FixedOffsetZone(signedOffset(r[1], r[2]));
          }
        }
        return null;
      }
      constructor(offset2) {
        super();
        this.fixed = offset2;
      }
      /** @override **/
      get type() {
        return "fixed";
      }
      /** @override **/
      get name() {
        return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
      }
      get ianaName() {
        if (this.fixed === 0) {
          return "Etc/UTC";
        } else {
          return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
        }
      }
      /** @override **/
      offsetName() {
        return this.name;
      }
      /** @override **/
      formatOffset(ts, format) {
        return formatOffset(this.fixed, format);
      }
      /** @override **/
      get isUniversal() {
        return true;
      }
      /** @override **/
      offset() {
        return this.fixed;
      }
      /** @override **/
      equals(otherZone) {
        return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
      }
      /** @override **/
      get isValid() {
        return true;
      }
    };
    var InvalidZone = class extends Zone {
      constructor(zoneName) {
        super();
        this.zoneName = zoneName;
      }
      /** @override **/
      get type() {
        return "invalid";
      }
      /** @override **/
      get name() {
        return this.zoneName;
      }
      /** @override **/
      get isUniversal() {
        return false;
      }
      /** @override **/
      offsetName() {
        return null;
      }
      /** @override **/
      formatOffset() {
        return "";
      }
      /** @override **/
      offset() {
        return NaN;
      }
      /** @override **/
      equals() {
        return false;
      }
      /** @override **/
      get isValid() {
        return false;
      }
    };
    function normalizeZone(input, defaultZone2) {
      if (isUndefined(input) || input === null) {
        return defaultZone2;
      } else if (input instanceof Zone) {
        return input;
      } else if (isString(input)) {
        const lowered = input.toLowerCase();
        if (lowered === "default")
          return defaultZone2;
        else if (lowered === "local" || lowered === "system")
          return SystemZone.instance;
        else if (lowered === "utc" || lowered === "gmt")
          return FixedOffsetZone.utcInstance;
        else
          return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
      } else if (isNumber(input)) {
        return FixedOffsetZone.instance(input);
      } else if (typeof input === "object" && "offset" in input && typeof input.offset === "function") {
        return input;
      } else {
        return new InvalidZone(input);
      }
    }
    var now = () => Date.now();
    var defaultZone = "system";
    var defaultLocale = null;
    var defaultNumberingSystem = null;
    var defaultOutputCalendar = null;
    var twoDigitCutoffYear = 60;
    var throwOnInvalid;
    var Settings = class {
      /**
       * Get the callback for returning the current timestamp.
       * @type {function}
       */
      static get now() {
        return now;
      }
      /**
       * Set the callback for returning the current timestamp.
       * The function should return a number, which will be interpreted as an Epoch millisecond count
       * @type {function}
       * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
       * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
       */
      static set now(n2) {
        now = n2;
      }
      /**
       * Set the default time zone to create DateTimes in. Does not affect existing instances.
       * Use the value "system" to reset this value to the system's time zone.
       * @type {string}
       */
      static set defaultZone(zone) {
        defaultZone = zone;
      }
      /**
       * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
       * The default value is the system's time zone (the one set on the machine that runs this code).
       * @type {Zone}
       */
      static get defaultZone() {
        return normalizeZone(defaultZone, SystemZone.instance);
      }
      /**
       * Get the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultLocale() {
        return defaultLocale;
      }
      /**
       * Set the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultLocale(locale) {
        defaultLocale = locale;
      }
      /**
       * Get the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultNumberingSystem() {
        return defaultNumberingSystem;
      }
      /**
       * Set the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultNumberingSystem(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
      }
      /**
       * Get the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static get defaultOutputCalendar() {
        return defaultOutputCalendar;
      }
      /**
       * Set the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      static set defaultOutputCalendar(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
      }
      /**
       * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
       * @type {number}
       */
      static get twoDigitCutoffYear() {
        return twoDigitCutoffYear;
      }
      /**
       * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
       * @type {number}
       * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpreted as current century
       * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
       * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
       * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
       */
      static set twoDigitCutoffYear(cutoffYear) {
        twoDigitCutoffYear = cutoffYear % 100;
      }
      /**
       * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      static get throwOnInvalid() {
        return throwOnInvalid;
      }
      /**
       * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      static set throwOnInvalid(t2) {
        throwOnInvalid = t2;
      }
      /**
       * Reset Luxon's global caches. Should only be necessary in testing scenarios.
       * @return {void}
       */
      static resetCaches() {
        Locale.resetCache();
        IANAZone.resetCache();
      }
    };
    function isUndefined(o) {
      return typeof o === "undefined";
    }
    function isNumber(o) {
      return typeof o === "number";
    }
    function isInteger(o) {
      return typeof o === "number" && o % 1 === 0;
    }
    function isString(o) {
      return typeof o === "string";
    }
    function isDate(o) {
      return Object.prototype.toString.call(o) === "[object Date]";
    }
    function hasRelative() {
      try {
        return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
      } catch (e) {
        return false;
      }
    }
    function maybeArray(thing) {
      return Array.isArray(thing) ? thing : [thing];
    }
    function bestBy(arr, by, compare) {
      if (arr.length === 0) {
        return void 0;
      }
      return arr.reduce((best, next) => {
        const pair = [by(next), next];
        if (!best) {
          return pair;
        } else if (compare(best[0], pair[0]) === best[0]) {
          return best;
        } else {
          return pair;
        }
      }, null)[1];
    }
    function pick(obj, keys) {
      return keys.reduce((a, k) => {
        a[k] = obj[k];
        return a;
      }, {});
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    function integerBetween(thing, bottom, top) {
      return isInteger(thing) && thing >= bottom && thing <= top;
    }
    function floorMod(x, n2) {
      return x - n2 * Math.floor(x / n2);
    }
    function padStart(input, n2 = 2) {
      const isNeg = input < 0;
      let padded;
      if (isNeg) {
        padded = "-" + ("" + -input).padStart(n2, "0");
      } else {
        padded = ("" + input).padStart(n2, "0");
      }
      return padded;
    }
    function parseInteger(string) {
      if (isUndefined(string) || string === null || string === "") {
        return void 0;
      } else {
        return parseInt(string, 10);
      }
    }
    function parseFloating(string) {
      if (isUndefined(string) || string === null || string === "") {
        return void 0;
      } else {
        return parseFloat(string);
      }
    }
    function parseMillis(fraction) {
      if (isUndefined(fraction) || fraction === null || fraction === "") {
        return void 0;
      } else {
        const f = parseFloat("0." + fraction) * 1e3;
        return Math.floor(f);
      }
    }
    function roundTo(number, digits, towardZero = false) {
      const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
      return rounder(number * factor) / factor;
    }
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    function daysInMonth(year, month) {
      const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
      if (modMonth === 2) {
        return isLeapYear(modYear) ? 29 : 28;
      } else {
        return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
      }
    }
    function objToLocalTS(obj) {
      let d = Date.UTC(
        obj.year,
        obj.month - 1,
        obj.day,
        obj.hour,
        obj.minute,
        obj.second,
        obj.millisecond
      );
      if (obj.year < 100 && obj.year >= 0) {
        d = new Date(d);
        d.setUTCFullYear(obj.year, obj.month - 1, obj.day);
      }
      return +d;
    }
    function weeksInWeekYear(weekYear) {
      const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
      return p1 === 4 || p2 === 3 ? 53 : 52;
    }
    function untruncateYear(year) {
      if (year > 99) {
        return year;
      } else
        return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
    }
    function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
      const date = new Date(ts), intlOpts = {
        hourCycle: "h23",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
      if (timeZone) {
        intlOpts.timeZone = timeZone;
      }
      const modified = { timeZoneName: offsetFormat, ...intlOpts };
      const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
      return parsed ? parsed.value : null;
    }
    function signedOffset(offHourStr, offMinuteStr) {
      let offHour = parseInt(offHourStr, 10);
      if (Number.isNaN(offHour)) {
        offHour = 0;
      }
      const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
      return offHour * 60 + offMinSigned;
    }
    function asNumber(value) {
      const numericValue = Number(value);
      if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
        throw new InvalidArgumentError(`Invalid unit value ${value}`);
      return numericValue;
    }
    function normalizeObject(obj, normalizer) {
      const normalized = {};
      for (const u in obj) {
        if (hasOwnProperty(obj, u)) {
          const v = obj[u];
          if (v === void 0 || v === null)
            continue;
          normalized[normalizer(u)] = asNumber(v);
        }
      }
      return normalized;
    }
    function formatOffset(offset2, format) {
      const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
      switch (format) {
        case "short":
          return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
        case "narrow":
          return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
        case "techie":
          return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
        default:
          throw new RangeError(`Value format ${format} is out of range for property format`);
      }
    }
    function timeObject(obj) {
      return pick(obj, ["hour", "minute", "second", "millisecond"]);
    }
    var monthsLong = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    function months(length) {
      switch (length) {
        case "narrow":
          return [...monthsNarrow];
        case "short":
          return [...monthsShort];
        case "long":
          return [...monthsLong];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        case "2-digit":
          return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        default:
          return null;
      }
    }
    var weekdaysLong = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
    function weekdays(length) {
      switch (length) {
        case "narrow":
          return [...weekdaysNarrow];
        case "short":
          return [...weekdaysShort];
        case "long":
          return [...weekdaysLong];
        case "numeric":
          return ["1", "2", "3", "4", "5", "6", "7"];
        default:
          return null;
      }
    }
    var meridiems = ["AM", "PM"];
    var erasLong = ["Before Christ", "Anno Domini"];
    var erasShort = ["BC", "AD"];
    var erasNarrow = ["B", "A"];
    function eras(length) {
      switch (length) {
        case "narrow":
          return [...erasNarrow];
        case "short":
          return [...erasShort];
        case "long":
          return [...erasLong];
        default:
          return null;
      }
    }
    function meridiemForDateTime(dt) {
      return meridiems[dt.hour < 12 ? 0 : 1];
    }
    function weekdayForDateTime(dt, length) {
      return weekdays(length)[dt.weekday - 1];
    }
    function monthForDateTime(dt, length) {
      return months(length)[dt.month - 1];
    }
    function eraForDateTime(dt, length) {
      return eras(length)[dt.year < 0 ? 0 : 1];
    }
    function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
      const units = {
        years: ["year", "yr."],
        quarters: ["quarter", "qtr."],
        months: ["month", "mo."],
        weeks: ["week", "wk."],
        days: ["day", "day", "days"],
        hours: ["hour", "hr."],
        minutes: ["minute", "min."],
        seconds: ["second", "sec."]
      };
      const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
      if (numeric === "auto" && lastable) {
        const isDay = unit === "days";
        switch (count) {
          case 1:
            return isDay ? "tomorrow" : `next ${units[unit][0]}`;
          case -1:
            return isDay ? "yesterday" : `last ${units[unit][0]}`;
          case 0:
            return isDay ? "today" : `this ${units[unit][0]}`;
        }
      }
      const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
      return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
    }
    function stringifyTokens(splits, tokenToString) {
      let s2 = "";
      for (const token of splits) {
        if (token.literal) {
          s2 += token.val;
        } else {
          s2 += tokenToString(token.val);
        }
      }
      return s2;
    }
    var macroTokenToFormatOpts = {
      D: DATE_SHORT,
      DD: DATE_MED,
      DDD: DATE_FULL,
      DDDD: DATE_HUGE,
      t: TIME_SIMPLE,
      tt: TIME_WITH_SECONDS,
      ttt: TIME_WITH_SHORT_OFFSET,
      tttt: TIME_WITH_LONG_OFFSET,
      T: TIME_24_SIMPLE,
      TT: TIME_24_WITH_SECONDS,
      TTT: TIME_24_WITH_SHORT_OFFSET,
      TTTT: TIME_24_WITH_LONG_OFFSET,
      f: DATETIME_SHORT,
      ff: DATETIME_MED,
      fff: DATETIME_FULL,
      ffff: DATETIME_HUGE,
      F: DATETIME_SHORT_WITH_SECONDS,
      FF: DATETIME_MED_WITH_SECONDS,
      FFF: DATETIME_FULL_WITH_SECONDS,
      FFFF: DATETIME_HUGE_WITH_SECONDS
    };
    var Formatter2 = class {
      static create(locale, opts = {}) {
        return new Formatter2(locale, opts);
      }
      static parseFormat(fmt) {
        let current = null, currentFull = "", bracketed = false;
        const splits = [];
        for (let i = 0; i < fmt.length; i++) {
          const c = fmt.charAt(i);
          if (c === "'") {
            if (currentFull.length > 0) {
              splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
            }
            current = null;
            currentFull = "";
            bracketed = !bracketed;
          } else if (bracketed) {
            currentFull += c;
          } else if (c === current) {
            currentFull += c;
          } else {
            if (currentFull.length > 0) {
              splits.push({ literal: /^\s+$/.test(currentFull), val: currentFull });
            }
            currentFull = c;
            current = c;
          }
        }
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed || /^\s+$/.test(currentFull), val: currentFull });
        }
        return splits;
      }
      static macroTokenToFormatOpts(token) {
        return macroTokenToFormatOpts[token];
      }
      constructor(locale, formatOpts) {
        this.opts = formatOpts;
        this.loc = locale;
        this.systemLoc = null;
      }
      formatWithSystemDefault(dt, opts) {
        if (this.systemLoc === null) {
          this.systemLoc = this.loc.redefaultToSystem();
        }
        const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
        return df.format();
      }
      dtFormatter(dt, opts = {}) {
        return this.loc.dtFormatter(dt, { ...this.opts, ...opts });
      }
      formatDateTime(dt, opts) {
        return this.dtFormatter(dt, opts).format();
      }
      formatDateTimeParts(dt, opts) {
        return this.dtFormatter(dt, opts).formatToParts();
      }
      formatInterval(interval, opts) {
        const df = this.dtFormatter(interval.start, opts);
        return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
      }
      resolvedOptions(dt, opts) {
        return this.dtFormatter(dt, opts).resolvedOptions();
      }
      num(n2, p = 0) {
        if (this.opts.forceSimple) {
          return padStart(n2, p);
        }
        const opts = { ...this.opts };
        if (p > 0) {
          opts.padTo = p;
        }
        return this.loc.numberFormatter(opts).format(n2);
      }
      formatDateTimeFromString(dt, fmt) {
        const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
          if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
            return "Z";
          }
          return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
        }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(
          standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
          "weekday"
        ), maybeMacro = (token) => {
          const formatOpts = Formatter2.macroTokenToFormatOpts(token);
          if (formatOpts) {
            return this.formatWithSystemDefault(dt, formatOpts);
          } else {
            return token;
          }
        }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
          switch (token) {
            case "S":
              return this.num(dt.millisecond);
            case "u":
            case "SSS":
              return this.num(dt.millisecond, 3);
            case "s":
              return this.num(dt.second);
            case "ss":
              return this.num(dt.second, 2);
            case "uu":
              return this.num(Math.floor(dt.millisecond / 10), 2);
            case "uuu":
              return this.num(Math.floor(dt.millisecond / 100));
            case "m":
              return this.num(dt.minute);
            case "mm":
              return this.num(dt.minute, 2);
            case "h":
              return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
            case "hh":
              return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
            case "H":
              return this.num(dt.hour);
            case "HH":
              return this.num(dt.hour, 2);
            case "Z":
              return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
            case "ZZ":
              return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
            case "ZZZ":
              return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
            case "ZZZZ":
              return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
            case "ZZZZZ":
              return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
            case "z":
              return dt.zoneName;
            case "a":
              return meridiem();
            case "d":
              return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
            case "dd":
              return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
            case "c":
              return this.num(dt.weekday);
            case "ccc":
              return weekday("short", true);
            case "cccc":
              return weekday("long", true);
            case "ccccc":
              return weekday("narrow", true);
            case "E":
              return this.num(dt.weekday);
            case "EEE":
              return weekday("short", false);
            case "EEEE":
              return weekday("long", false);
            case "EEEEE":
              return weekday("narrow", false);
            case "L":
              return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
            case "LL":
              return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
            case "LLL":
              return month("short", true);
            case "LLLL":
              return month("long", true);
            case "LLLLL":
              return month("narrow", true);
            case "M":
              return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
            case "MM":
              return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
            case "MMM":
              return month("short", false);
            case "MMMM":
              return month("long", false);
            case "MMMMM":
              return month("narrow", false);
            case "y":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
            case "yy":
              return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
            case "yyyy":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
            case "yyyyyy":
              return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
            case "G":
              return era("short");
            case "GG":
              return era("long");
            case "GGGGG":
              return era("narrow");
            case "kk":
              return this.num(dt.weekYear.toString().slice(-2), 2);
            case "kkkk":
              return this.num(dt.weekYear, 4);
            case "W":
              return this.num(dt.weekNumber);
            case "WW":
              return this.num(dt.weekNumber, 2);
            case "o":
              return this.num(dt.ordinal);
            case "ooo":
              return this.num(dt.ordinal, 3);
            case "q":
              return this.num(dt.quarter);
            case "qq":
              return this.num(dt.quarter, 2);
            case "X":
              return this.num(Math.floor(dt.ts / 1e3));
            case "x":
              return this.num(dt.ts);
            default:
              return maybeMacro(token);
          }
        };
        return stringifyTokens(Formatter2.parseFormat(fmt), tokenToString);
      }
      formatDurationFromString(dur, fmt) {
        const tokenToField = (token) => {
          switch (token[0]) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
              return "hour";
            case "d":
              return "day";
            case "w":
              return "week";
            case "M":
              return "month";
            case "y":
              return "year";
            default:
              return null;
          }
        }, tokenToString = (lildur) => (token) => {
          const mapped = tokenToField(token);
          if (mapped) {
            return this.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce(
          (found, { literal, val }) => literal ? found : found.concat(val),
          []
        ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t2) => t2));
        return stringifyTokens(tokens, tokenToString(collapsed));
      }
    };
    var Invalid = class {
      constructor(reason, explanation) {
        this.reason = reason;
        this.explanation = explanation;
      }
      toMessage() {
        if (this.explanation) {
          return `${this.reason}: ${this.explanation}`;
        } else {
          return this.reason;
        }
      }
    };
    var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
    function combineRegexes(...regexes) {
      const full = regexes.reduce((f, r) => f + r.source, "");
      return RegExp(`^${full}$`);
    }
    function combineExtractors(...extractors) {
      return (m) => extractors.reduce(
        ([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{ ...mergedVals, ...val }, zone || mergedZone, next];
        },
        [{}, null, 1]
      ).slice(0, 2);
    }
    function parse(s2, ...patterns) {
      if (s2 == null) {
        return [null, null];
      }
      for (const [regex2, extractor] of patterns) {
        const m = regex2.exec(s2);
        if (m) {
          return extractor(m);
        }
      }
      return [null, null];
    }
    function simpleParse(...keys) {
      return (match3, cursor) => {
        const ret = {};
        let i;
        for (i = 0; i < keys.length; i++) {
          ret[keys[i]] = parseInteger(match3[cursor + i]);
        }
        return [ret, null, cursor + i];
      };
    }
    var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
    var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
    var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
    var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
    var isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
    var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
    var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
    var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
    var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
    var extractISOOrdinalData = simpleParse("year", "ordinal");
    var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
    var sqlTimeRegex = RegExp(
      `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
    );
    var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
    function int(match3, pos, fallback) {
      const m = match3[pos];
      return isUndefined(m) ? fallback : parseInteger(m);
    }
    function extractISOYmd(match3, cursor) {
      const item = {
        year: int(match3, cursor),
        month: int(match3, cursor + 1, 1),
        day: int(match3, cursor + 2, 1)
      };
      return [item, null, cursor + 3];
    }
    function extractISOTime(match3, cursor) {
      const item = {
        hours: int(match3, cursor, 0),
        minutes: int(match3, cursor + 1, 0),
        seconds: int(match3, cursor + 2, 0),
        milliseconds: parseMillis(match3[cursor + 3])
      };
      return [item, null, cursor + 4];
    }
    function extractISOOffset(match3, cursor) {
      const local = !match3[cursor] && !match3[cursor + 1], fullOffset = signedOffset(match3[cursor + 1], match3[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
      return [{}, zone, cursor + 3];
    }
    function extractIANAZone(match3, cursor) {
      const zone = match3[cursor] ? IANAZone.create(match3[cursor]) : null;
      return [{}, zone, cursor + 1];
    }
    var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
    var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
    function extractISODuration(match3) {
      const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match3;
      const hasNegativePrefix = s2[0] === "-";
      const negativeSeconds = secondStr && secondStr[0] === "-";
      const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
      return [
        {
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }
      ];
    }
    var obsOffsets = {
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };
    function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      const result2 = {
        year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
        month: monthsShort.indexOf(monthStr) + 1,
        day: parseInteger(dayStr),
        hour: parseInteger(hourStr),
        minute: parseInteger(minuteStr)
      };
      if (secondStr)
        result2.second = parseInteger(secondStr);
      if (weekdayStr) {
        result2.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
      }
      return result2;
    }
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function extractRFC2822(match3) {
      const [
        ,
        weekdayStr,
        dayStr,
        monthStr,
        yearStr,
        hourStr,
        minuteStr,
        secondStr,
        obsOffset,
        milOffset,
        offHourStr,
        offMinuteStr
      ] = match3, result2 = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      let offset2;
      if (obsOffset) {
        offset2 = obsOffsets[obsOffset];
      } else if (milOffset) {
        offset2 = 0;
      } else {
        offset2 = signedOffset(offHourStr, offMinuteStr);
      }
      return [result2, new FixedOffsetZone(offset2)];
    }
    function preprocessRFC2822(s2) {
      return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
    }
    var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
    var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
    var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function extractRFC1123Or850(match3) {
      const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match3, result2 = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result2, FixedOffsetZone.utcInstance];
    }
    function extractASCII(match3) {
      const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match3, result2 = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
      return [result2, FixedOffsetZone.utcInstance];
    }
    var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
    var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
    var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
    var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
    var extractISOYmdTimeAndOffset = combineExtractors(
      extractISOYmd,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    var extractISOWeekTimeAndOffset = combineExtractors(
      extractISOWeekData,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    var extractISOOrdinalDateAndTime = combineExtractors(
      extractISOOrdinalData,
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    var extractISOTimeAndOffset = combineExtractors(
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    function parseISODate(s2) {
      return parse(
        s2,
        [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
        [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
        [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
        [isoTimeCombinedRegex, extractISOTimeAndOffset]
      );
    }
    function parseRFC2822Date(s2) {
      return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
    }
    function parseHTTPDate(s2) {
      return parse(
        s2,
        [rfc1123, extractRFC1123Or850],
        [rfc850, extractRFC1123Or850],
        [ascii, extractASCII]
      );
    }
    function parseISODuration(s2) {
      return parse(s2, [isoDuration, extractISODuration]);
    }
    var extractISOTimeOnly = combineExtractors(extractISOTime);
    function parseISOTimeOnly(s2) {
      return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
    }
    var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
    var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
    var extractISOTimeOffsetAndIANAZone = combineExtractors(
      extractISOTime,
      extractISOOffset,
      extractIANAZone
    );
    function parseSQL(s2) {
      return parse(
        s2,
        [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
        [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
      );
    }
    var INVALID$2 = "Invalid Duration";
    var lowOrderMatrix = {
      weeks: {
        days: 7,
        hours: 7 * 24,
        minutes: 7 * 24 * 60,
        seconds: 7 * 24 * 60 * 60,
        milliseconds: 7 * 24 * 60 * 60 * 1e3
      },
      days: {
        hours: 24,
        minutes: 24 * 60,
        seconds: 24 * 60 * 60,
        milliseconds: 24 * 60 * 60 * 1e3
      },
      hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
      minutes: { seconds: 60, milliseconds: 60 * 1e3 },
      seconds: { milliseconds: 1e3 }
    };
    var casualMatrix = {
      years: {
        quarters: 4,
        months: 12,
        weeks: 52,
        days: 365,
        hours: 365 * 24,
        minutes: 365 * 24 * 60,
        seconds: 365 * 24 * 60 * 60,
        milliseconds: 365 * 24 * 60 * 60 * 1e3
      },
      quarters: {
        months: 3,
        weeks: 13,
        days: 91,
        hours: 91 * 24,
        minutes: 91 * 24 * 60,
        seconds: 91 * 24 * 60 * 60,
        milliseconds: 91 * 24 * 60 * 60 * 1e3
      },
      months: {
        weeks: 4,
        days: 30,
        hours: 30 * 24,
        minutes: 30 * 24 * 60,
        seconds: 30 * 24 * 60 * 60,
        milliseconds: 30 * 24 * 60 * 60 * 1e3
      },
      ...lowOrderMatrix
    };
    var daysInYearAccurate = 146097 / 400;
    var daysInMonthAccurate = 146097 / 4800;
    var accurateMatrix = {
      years: {
        quarters: 4,
        months: 12,
        weeks: daysInYearAccurate / 7,
        days: daysInYearAccurate,
        hours: daysInYearAccurate * 24,
        minutes: daysInYearAccurate * 24 * 60,
        seconds: daysInYearAccurate * 24 * 60 * 60,
        milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
      },
      quarters: {
        months: 3,
        weeks: daysInYearAccurate / 28,
        days: daysInYearAccurate / 4,
        hours: daysInYearAccurate * 24 / 4,
        minutes: daysInYearAccurate * 24 * 60 / 4,
        seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
        milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
      },
      months: {
        weeks: daysInMonthAccurate / 7,
        days: daysInMonthAccurate,
        hours: daysInMonthAccurate * 24,
        minutes: daysInMonthAccurate * 24 * 60,
        seconds: daysInMonthAccurate * 24 * 60 * 60,
        milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
      },
      ...lowOrderMatrix
    };
    var orderedUnits$1 = [
      "years",
      "quarters",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ];
    var reverseUnits = orderedUnits$1.slice(0).reverse();
    function clone$1(dur, alts, clear = false) {
      const conf = {
        values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
        loc: dur.loc.clone(alts.loc),
        conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
        matrix: alts.matrix || dur.matrix
      };
      return new Duration(conf);
    }
    function durationToMillis(matrix, vals) {
      var _a;
      let sum = (_a = vals.milliseconds) != null ? _a : 0;
      for (const unit of reverseUnits.slice(1)) {
        if (vals[unit]) {
          sum += vals[unit] * matrix[unit]["milliseconds"];
        }
      }
      return sum;
    }
    function normalizeValues(matrix, vals) {
      const factor = durationToMillis(matrix, vals) < 0 ? -1 : 1;
      orderedUnits$1.reduceRight((previous, current) => {
        if (!isUndefined(vals[current])) {
          if (previous) {
            const previousVal = vals[previous] * factor;
            const conv = matrix[current][previous];
            const rollUp = Math.floor(previousVal / conv);
            vals[current] += rollUp * factor;
            vals[previous] -= rollUp * conv * factor;
          }
          return current;
        } else {
          return previous;
        }
      }, null);
      orderedUnits$1.reduce((previous, current) => {
        if (!isUndefined(vals[current])) {
          if (previous) {
            const fraction = vals[previous] % 1;
            vals[previous] -= fraction;
            vals[current] += fraction * matrix[previous][current];
          }
          return current;
        } else {
          return previous;
        }
      }, null);
    }
    function removeZeroes(vals) {
      const newVals = {};
      for (const [key, value] of Object.entries(vals)) {
        if (value !== 0) {
          newVals[key] = value;
        }
      }
      return newVals;
    }
    var Duration = class {
      /**
       * @private
       */
      constructor(config) {
        const accurate = config.conversionAccuracy === "longterm" || false;
        let matrix = accurate ? accurateMatrix : casualMatrix;
        if (config.matrix) {
          matrix = config.matrix;
        }
        this.values = config.values;
        this.loc = config.loc || Locale.create();
        this.conversionAccuracy = accurate ? "longterm" : "casual";
        this.invalid = config.invalid || null;
        this.matrix = matrix;
        this.isLuxonDuration = true;
      }
      /**
       * Create Duration from a number of milliseconds.
       * @param {number} count of milliseconds
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @return {Duration}
       */
      static fromMillis(count, opts) {
        return Duration.fromObject({ milliseconds: count }, opts);
      }
      /**
       * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
       * If this object is empty then a zero milliseconds duration is returned.
       * @param {Object} obj - the object to create the DateTime from
       * @param {number} obj.years
       * @param {number} obj.quarters
       * @param {number} obj.months
       * @param {number} obj.weeks
       * @param {number} obj.days
       * @param {number} obj.hours
       * @param {number} obj.minutes
       * @param {number} obj.seconds
       * @param {number} obj.milliseconds
       * @param {Object} [opts=[]] - options for creating this Duration
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the custom conversion system to use
       * @return {Duration}
       */
      static fromObject(obj, opts = {}) {
        if (obj == null || typeof obj !== "object") {
          throw new InvalidArgumentError(
            `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
          );
        }
        return new Duration({
          values: normalizeObject(obj, Duration.normalizeUnit),
          loc: Locale.fromObject(opts),
          conversionAccuracy: opts.conversionAccuracy,
          matrix: opts.matrix
        });
      }
      /**
       * Create a Duration from DurationLike.
       *
       * @param {Object | number | Duration} durationLike
       * One of:
       * - object with keys like 'years' and 'hours'.
       * - number representing milliseconds
       * - Duration instance
       * @return {Duration}
       */
      static fromDurationLike(durationLike) {
        if (isNumber(durationLike)) {
          return Duration.fromMillis(durationLike);
        } else if (Duration.isDuration(durationLike)) {
          return durationLike;
        } else if (typeof durationLike === "object") {
          return Duration.fromObject(durationLike);
        } else {
          throw new InvalidArgumentError(
            `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
          );
        }
      }
      /**
       * Create a Duration from an ISO 8601 duration string.
       * @param {string} text - text to parse
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the preset conversion system to use
       * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
       * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
       * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
       * @return {Duration}
       */
      static fromISO(text, opts) {
        const [parsed] = parseISODuration(text);
        if (parsed) {
          return Duration.fromObject(parsed, opts);
        } else {
          return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }
      /**
       * Create a Duration from an ISO 8601 time string.
       * @param {string} text - text to parse
       * @param {Object} opts - options for parsing
       * @param {string} [opts.locale='en-US'] - the locale to use
       * @param {string} opts.numberingSystem - the numbering system to use
       * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
       * @param {string} [opts.matrix=Object] - the conversion system to use
       * @see https://en.wikipedia.org/wiki/ISO_8601#Times
       * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
       * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
       * @return {Duration}
       */
      static fromISOTime(text, opts) {
        const [parsed] = parseISOTimeOnly(text);
        if (parsed) {
          return Duration.fromObject(parsed, opts);
        } else {
          return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
      }
      /**
       * Create an invalid Duration.
       * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {Duration}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
          throw new InvalidDurationError(invalid);
        } else {
          return new Duration({ invalid });
        }
      }
      /**
       * @private
       */
      static normalizeUnit(unit) {
        const normalized = {
          year: "years",
          years: "years",
          quarter: "quarters",
          quarters: "quarters",
          month: "months",
          months: "months",
          week: "weeks",
          weeks: "weeks",
          day: "days",
          days: "days",
          hour: "hours",
          hours: "hours",
          minute: "minutes",
          minutes: "minutes",
          second: "seconds",
          seconds: "seconds",
          millisecond: "milliseconds",
          milliseconds: "milliseconds"
        }[unit ? unit.toLowerCase() : unit];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      /**
       * Check if an object is a Duration. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isDuration(o) {
        return o && o.isLuxonDuration || false;
      }
      /**
       * Get  the locale of a Duration, such 'en-GB'
       * @type {string}
       */
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }
      /**
       * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
       *
       * @type {string}
       */
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
      /**
       * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
       * * `S` for milliseconds
       * * `s` for seconds
       * * `m` for minutes
       * * `h` for hours
       * * `d` for days
       * * `w` for weeks
       * * `M` for months
       * * `y` for years
       * Notes:
       * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
       * * Tokens can be escaped by wrapping with single quotes.
       * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
       * @param {string} fmt - the format string
       * @param {Object} opts - options
       * @param {boolean} [opts.floor=true] - floor numerical values
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
       * @return {string}
       */
      toFormat(fmt, opts = {}) {
        const fmtOpts = {
          ...opts,
          floor: opts.round !== false && opts.floor !== false
        };
        return this.isValid ? Formatter2.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
      }
      /**
       * Returns a string representation of a Duration with all units included.
       * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
       * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
       * @example
       * ```js
       * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
       * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
       * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
       * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
       * ```
       */
      toHuman(opts = {}) {
        if (!this.isValid)
          return INVALID$2;
        const l2 = orderedUnits$1.map((unit) => {
          const val = this.values[unit];
          if (isUndefined(val)) {
            return null;
          }
          return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
        }).filter((n2) => n2);
        return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l2);
      }
      /**
       * Returns a JavaScript object with this Duration's values.
       * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
       * @return {Object}
       */
      toObject() {
        if (!this.isValid)
          return {};
        return { ...this.values };
      }
      /**
       * Returns an ISO 8601-compliant string representation of this Duration.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
       * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
       * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
       * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
       * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
       * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
       * @return {string}
       */
      toISO() {
        if (!this.isValid)
          return null;
        let s2 = "P";
        if (this.years !== 0)
          s2 += this.years + "Y";
        if (this.months !== 0 || this.quarters !== 0)
          s2 += this.months + this.quarters * 3 + "M";
        if (this.weeks !== 0)
          s2 += this.weeks + "W";
        if (this.days !== 0)
          s2 += this.days + "D";
        if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
          s2 += "T";
        if (this.hours !== 0)
          s2 += this.hours + "H";
        if (this.minutes !== 0)
          s2 += this.minutes + "M";
        if (this.seconds !== 0 || this.milliseconds !== 0)
          s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
        if (s2 === "P")
          s2 += "T0S";
        return s2;
      }
      /**
       * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
       * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Times
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
       * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
       * @return {string}
       */
      toISOTime(opts = {}) {
        if (!this.isValid)
          return null;
        const millis = this.toMillis();
        if (millis < 0 || millis >= 864e5)
          return null;
        opts = {
          suppressMilliseconds: false,
          suppressSeconds: false,
          includePrefix: false,
          format: "extended",
          ...opts,
          includeOffset: false
        };
        const dateTime = DateTime.fromMillis(millis, { zone: "UTC" });
        return dateTime.toISOTime(opts);
      }
      /**
       * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
       * @return {string}
       */
      toJSON() {
        return this.toISO();
      }
      /**
       * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
       * @return {string}
       */
      toString() {
        return this.toISO();
      }
      /**
       * Returns an milliseconds value of this Duration.
       * @return {number}
       */
      toMillis() {
        if (!this.isValid)
          return NaN;
        return durationToMillis(this.matrix, this.values);
      }
      /**
       * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
       * @return {number}
       */
      valueOf() {
        return this.toMillis();
      }
      /**
       * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
       * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @return {Duration}
       */
      plus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration.fromDurationLike(duration), result2 = {};
        for (const k of orderedUnits$1) {
          if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
            result2[k] = dur.get(k) + this.get(k);
          }
        }
        return clone$1(this, { values: result2 }, true);
      }
      /**
       * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
       * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @return {Duration}
       */
      minus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration.fromDurationLike(duration);
        return this.plus(dur.negate());
      }
      /**
       * Scale this Duration by the specified amount. Return a newly-constructed Duration.
       * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
       * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
       * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
       * @return {Duration}
       */
      mapUnits(fn) {
        if (!this.isValid)
          return this;
        const result2 = {};
        for (const k of Object.keys(this.values)) {
          result2[k] = asNumber(fn(this.values[k], k));
        }
        return clone$1(this, { values: result2 }, true);
      }
      /**
       * Get the value of unit.
       * @param {string} unit - a unit such as 'minute' or 'day'
       * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
       * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
       * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
       * @return {number}
       */
      get(unit) {
        return this[Duration.normalizeUnit(unit)];
      }
      /**
       * "Set" the values of specified units. Return a newly-constructed Duration.
       * @param {Object} values - a mapping of units to numbers
       * @example dur.set({ years: 2017 })
       * @example dur.set({ hours: 8, minutes: 30 })
       * @return {Duration}
       */
      set(values) {
        if (!this.isValid)
          return this;
        const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
        return clone$1(this, { values: mixed });
      }
      /**
       * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
       * @example dur.reconfigure({ locale: 'en-GB' })
       * @return {Duration}
       */
      reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem });
        const opts = { loc, matrix, conversionAccuracy };
        return clone$1(this, opts);
      }
      /**
       * Return the length of the duration in the specified unit.
       * @param {string} unit - a unit such as 'minutes' or 'days'
       * @example Duration.fromObject({years: 1}).as('days') //=> 365
       * @example Duration.fromObject({years: 1}).as('months') //=> 12
       * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
       * @return {number}
       */
      as(unit) {
        return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
      }
      /**
       * Reduce this Duration to its canonical representation in its current units.
       * Assuming the overall value of the Duration is positive, this means:
       * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
       * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
       *   the overall value would be negative, see second example)
       * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
       *
       * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
       * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
       * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
       * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
       * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
       * @return {Duration}
       */
      normalize() {
        if (!this.isValid)
          return this;
        const vals = this.toObject();
        normalizeValues(this.matrix, vals);
        return clone$1(this, { values: vals }, true);
      }
      /**
       * Rescale units to its largest representation
       * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
       * @return {Duration}
       */
      rescale() {
        if (!this.isValid)
          return this;
        const vals = removeZeroes(this.normalize().shiftToAll().toObject());
        return clone$1(this, { values: vals }, true);
      }
      /**
       * Convert this Duration into its representation in a different set of units.
       * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
       * @return {Duration}
       */
      shiftTo(...units) {
        if (!this.isValid)
          return this;
        if (units.length === 0) {
          return this;
        }
        units = units.map((u) => Duration.normalizeUnit(u));
        const built = {}, accumulated = {}, vals = this.toObject();
        let lastUnit;
        for (const k of orderedUnits$1) {
          if (units.indexOf(k) >= 0) {
            lastUnit = k;
            let own = 0;
            for (const ak in accumulated) {
              own += this.matrix[ak][k] * accumulated[ak];
              accumulated[ak] = 0;
            }
            if (isNumber(vals[k])) {
              own += vals[k];
            }
            const i = Math.trunc(own);
            built[k] = i;
            accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
          } else if (isNumber(vals[k])) {
            accumulated[k] = vals[k];
          }
        }
        for (const key in accumulated) {
          if (accumulated[key] !== 0) {
            built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
          }
        }
        normalizeValues(this.matrix, built);
        return clone$1(this, { values: built }, true);
      }
      /**
       * Shift this Duration to all available units.
       * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
       * @return {Duration}
       */
      shiftToAll() {
        if (!this.isValid)
          return this;
        return this.shiftTo(
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds"
        );
      }
      /**
       * Return the negative of this Duration.
       * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
       * @return {Duration}
       */
      negate() {
        if (!this.isValid)
          return this;
        const negated = {};
        for (const k of Object.keys(this.values)) {
          negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
        }
        return clone$1(this, { values: negated }, true);
      }
      /**
       * Get the years.
       * @type {number}
       */
      get years() {
        return this.isValid ? this.values.years || 0 : NaN;
      }
      /**
       * Get the quarters.
       * @type {number}
       */
      get quarters() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      }
      /**
       * Get the months.
       * @type {number}
       */
      get months() {
        return this.isValid ? this.values.months || 0 : NaN;
      }
      /**
       * Get the weeks
       * @type {number}
       */
      get weeks() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      }
      /**
       * Get the days.
       * @type {number}
       */
      get days() {
        return this.isValid ? this.values.days || 0 : NaN;
      }
      /**
       * Get the hours.
       * @type {number}
       */
      get hours() {
        return this.isValid ? this.values.hours || 0 : NaN;
      }
      /**
       * Get the minutes.
       * @type {number}
       */
      get minutes() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      }
      /**
       * Get the seconds.
       * @return {number}
       */
      get seconds() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      }
      /**
       * Get the milliseconds.
       * @return {number}
       */
      get milliseconds() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      }
      /**
       * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
       * on invalid DateTimes or Intervals.
       * @return {boolean}
       */
      get isValid() {
        return this.invalid === null;
      }
      /**
       * Returns an error code if this Duration became invalid, or null if the Duration is valid
       * @return {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      /**
       * Equality check
       * Two Durations are equal iff they have the same units and the same values for each unit.
       * @param {Duration} other
       * @return {boolean}
       */
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }
        if (!this.loc.equals(other.loc)) {
          return false;
        }
        function eq(v1, v2) {
          if (v1 === void 0 || v1 === 0)
            return v2 === void 0 || v2 === 0;
          return v1 === v2;
        }
        for (const u of orderedUnits$1) {
          if (!eq(this.values[u], other.values[u])) {
            return false;
          }
        }
        return true;
      }
    };
    var INVALID$1 = "Invalid Interval";
    function validateStartEnd(start, end) {
      if (!start || !start.isValid) {
        return Interval.invalid("missing or invalid start");
      } else if (!end || !end.isValid) {
        return Interval.invalid("missing or invalid end");
      } else if (end < start) {
        return Interval.invalid(
          "end before start",
          `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
        );
      } else {
        return null;
      }
    }
    var Interval = class {
      /**
       * @private
       */
      constructor(config) {
        this.s = config.start;
        this.e = config.end;
        this.invalid = config.invalid || null;
        this.isLuxonInterval = true;
      }
      /**
       * Create an invalid Interval.
       * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {Interval}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
          throw new InvalidIntervalError(invalid);
        } else {
          return new Interval({ invalid });
        }
      }
      /**
       * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
       * @param {DateTime|Date|Object} start
       * @param {DateTime|Date|Object} end
       * @return {Interval}
       */
      static fromDateTimes(start, end) {
        const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
        const validateError = validateStartEnd(builtStart, builtEnd);
        if (validateError == null) {
          return new Interval({
            start: builtStart,
            end: builtEnd
          });
        } else {
          return validateError;
        }
      }
      /**
       * Create an Interval from a start DateTime and a Duration to extend to.
       * @param {DateTime|Date|Object} start
       * @param {Duration|Object|number} duration - the length of the Interval.
       * @return {Interval}
       */
      static after(start, duration) {
        const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
        return Interval.fromDateTimes(dt, dt.plus(dur));
      }
      /**
       * Create an Interval from an end DateTime and a Duration to extend backwards to.
       * @param {DateTime|Date|Object} end
       * @param {Duration|Object|number} duration - the length of the Interval.
       * @return {Interval}
       */
      static before(end, duration) {
        const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
        return Interval.fromDateTimes(dt.minus(dur), dt);
      }
      /**
       * Create an Interval from an ISO 8601 string.
       * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
       * @param {string} text - the ISO string to parse
       * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @return {Interval}
       */
      static fromISO(text, opts) {
        const [s2, e] = (text || "").split("/", 2);
        if (s2 && e) {
          let start, startIsValid;
          try {
            start = DateTime.fromISO(s2, opts);
            startIsValid = start.isValid;
          } catch (e2) {
            startIsValid = false;
          }
          let end, endIsValid;
          try {
            end = DateTime.fromISO(e, opts);
            endIsValid = end.isValid;
          } catch (e2) {
            endIsValid = false;
          }
          if (startIsValid && endIsValid) {
            return Interval.fromDateTimes(start, end);
          }
          if (startIsValid) {
            const dur = Duration.fromISO(e, opts);
            if (dur.isValid) {
              return Interval.after(start, dur);
            }
          } else if (endIsValid) {
            const dur = Duration.fromISO(s2, opts);
            if (dur.isValid) {
              return Interval.before(end, dur);
            }
          }
        }
        return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
      }
      /**
       * Check if an object is an Interval. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isInterval(o) {
        return o && o.isLuxonInterval || false;
      }
      /**
       * Returns the start of the Interval
       * @type {DateTime}
       */
      get start() {
        return this.isValid ? this.s : null;
      }
      /**
       * Returns the end of the Interval
       * @type {DateTime}
       */
      get end() {
        return this.isValid ? this.e : null;
      }
      /**
       * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
       * @type {boolean}
       */
      get isValid() {
        return this.invalidReason === null;
      }
      /**
       * Returns an error code if this Interval is invalid, or null if the Interval is valid
       * @type {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      /**
       * Returns the length of the Interval in the specified unit.
       * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
       * @return {number}
       */
      length(unit = "milliseconds") {
        return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
      }
      /**
       * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
       * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
       * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
       * @param {string} [unit='milliseconds'] - the unit of time to count.
       * @return {number}
       */
      count(unit = "milliseconds") {
        if (!this.isValid)
          return NaN;
        const start = this.start.startOf(unit), end = this.end.startOf(unit);
        return Math.floor(end.diff(start, unit).get(unit)) + (end.valueOf() !== this.end.valueOf());
      }
      /**
       * Returns whether this Interval's start and end are both in the same unit of time
       * @param {string} unit - the unit of time to check sameness on
       * @return {boolean}
       */
      hasSame(unit) {
        return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
      }
      /**
       * Return whether this Interval has the same start and end DateTimes.
       * @return {boolean}
       */
      isEmpty() {
        return this.s.valueOf() === this.e.valueOf();
      }
      /**
       * Return whether this Interval's start is after the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      isAfter(dateTime) {
        if (!this.isValid)
          return false;
        return this.s > dateTime;
      }
      /**
       * Return whether this Interval's end is before the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      isBefore(dateTime) {
        if (!this.isValid)
          return false;
        return this.e <= dateTime;
      }
      /**
       * Return whether this Interval contains the specified DateTime.
       * @param {DateTime} dateTime
       * @return {boolean}
       */
      contains(dateTime) {
        if (!this.isValid)
          return false;
        return this.s <= dateTime && this.e > dateTime;
      }
      /**
       * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
       * @param {Object} values - the values to set
       * @param {DateTime} values.start - the starting DateTime
       * @param {DateTime} values.end - the ending DateTime
       * @return {Interval}
       */
      set({ start, end } = {}) {
        if (!this.isValid)
          return this;
        return Interval.fromDateTimes(start || this.s, end || this.e);
      }
      /**
       * Split this Interval at each of the specified DateTimes
       * @param {...DateTime} dateTimes - the unit of time to count.
       * @return {Array}
       */
      splitAt(...dateTimes) {
        if (!this.isValid)
          return [];
        const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
        let { s: s2 } = this, i = 0;
        while (s2 < this.e) {
          const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
          results.push(Interval.fromDateTimes(s2, next));
          s2 = next;
          i += 1;
        }
        return results;
      }
      /**
       * Split this Interval into smaller Intervals, each of the specified length.
       * Left over time is grouped into a smaller interval
       * @param {Duration|Object|number} duration - The length of each resulting interval.
       * @return {Array}
       */
      splitBy(duration) {
        const dur = Duration.fromDurationLike(duration);
        if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
          return [];
        }
        let { s: s2 } = this, idx = 1, next;
        const results = [];
        while (s2 < this.e) {
          const added = this.start.plus(dur.mapUnits((x) => x * idx));
          next = +added > +this.e ? this.e : added;
          results.push(Interval.fromDateTimes(s2, next));
          s2 = next;
          idx += 1;
        }
        return results;
      }
      /**
       * Split this Interval into the specified number of smaller intervals.
       * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
       * @return {Array}
       */
      divideEqually(numberOfParts) {
        if (!this.isValid)
          return [];
        return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
      }
      /**
       * Return whether this Interval overlaps with the specified Interval
       * @param {Interval} other
       * @return {boolean}
       */
      overlaps(other) {
        return this.e > other.s && this.s < other.e;
      }
      /**
       * Return whether this Interval's end is adjacent to the specified Interval's start.
       * @param {Interval} other
       * @return {boolean}
       */
      abutsStart(other) {
        if (!this.isValid)
          return false;
        return +this.e === +other.s;
      }
      /**
       * Return whether this Interval's start is adjacent to the specified Interval's end.
       * @param {Interval} other
       * @return {boolean}
       */
      abutsEnd(other) {
        if (!this.isValid)
          return false;
        return +other.e === +this.s;
      }
      /**
       * Return whether this Interval engulfs the start and end of the specified Interval.
       * @param {Interval} other
       * @return {boolean}
       */
      engulfs(other) {
        if (!this.isValid)
          return false;
        return this.s <= other.s && this.e >= other.e;
      }
      /**
       * Return whether this Interval has the same start and end as the specified Interval.
       * @param {Interval} other
       * @return {boolean}
       */
      equals(other) {
        if (!this.isValid || !other.isValid) {
          return false;
        }
        return this.s.equals(other.s) && this.e.equals(other.e);
      }
      /**
       * Return an Interval representing the intersection of this Interval and the specified Interval.
       * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
       * Returns null if the intersection is empty, meaning, the intervals don't intersect.
       * @param {Interval} other
       * @return {Interval}
       */
      intersection(other) {
        if (!this.isValid)
          return this;
        const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
        if (s2 >= e) {
          return null;
        } else {
          return Interval.fromDateTimes(s2, e);
        }
      }
      /**
       * Return an Interval representing the union of this Interval and the specified Interval.
       * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
       * @param {Interval} other
       * @return {Interval}
       */
      union(other) {
        if (!this.isValid)
          return this;
        const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
        return Interval.fromDateTimes(s2, e);
      }
      /**
       * Merge an array of Intervals into a equivalent minimal set of Intervals.
       * Combines overlapping and adjacent Intervals.
       * @param {Array} intervals
       * @return {Array}
       */
      static merge(intervals) {
        const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
          ([sofar, current], item) => {
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          },
          [[], null]
        );
        if (final) {
          found.push(final);
        }
        return found;
      }
      /**
       * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
       * @param {Array} intervals
       * @return {Array}
       */
      static xor(intervals) {
        let start = null, currentCount = 0;
        const results = [], ends = intervals.map((i) => [
          { time: i.s, type: "s" },
          { time: i.e, type: "e" }
        ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
        for (const i of arr) {
          currentCount += i.type === "s" ? 1 : -1;
          if (currentCount === 1) {
            start = i.time;
          } else {
            if (start && +start !== +i.time) {
              results.push(Interval.fromDateTimes(start, i.time));
            }
            start = null;
          }
        }
        return Interval.merge(results);
      }
      /**
       * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
       * @param {...Interval} intervals
       * @return {Array}
       */
      difference(...intervals) {
        return Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
      }
      /**
       * Returns a string representation of this Interval appropriate for debugging.
       * @return {string}
       */
      toString() {
        if (!this.isValid)
          return INVALID$1;
        return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
      }
      /**
       * Returns a localized string representing this Interval. Accepts the same options as the
       * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
       * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
       * is browser-specific, but in general it will return an appropriate representation of the
       * Interval in the assigned locale. Defaults to the system's locale if no locale has been
       * specified.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
       * Intl.DateTimeFormat constructor options.
       * @param {Object} opts - Options to override the configuration of the start DateTime.
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
       * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
       * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
       * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
       * @return {string}
       */
      toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid ? Formatter2.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
      }
      /**
       * Returns an ISO 8601-compliant string representation of this Interval.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @param {Object} opts - The same options as {@link DateTime#toISO}
       * @return {string}
       */
      toISO(opts) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
      }
      /**
       * Returns an ISO 8601-compliant string representation of date of this Interval.
       * The time components are ignored.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @return {string}
       */
      toISODate() {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISODate()}/${this.e.toISODate()}`;
      }
      /**
       * Returns an ISO 8601-compliant string representation of time of this Interval.
       * The date components are ignored.
       * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
       * @param {Object} opts - The same options as {@link DateTime#toISO}
       * @return {string}
       */
      toISOTime(opts) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
      }
      /**
       * Returns a string representation of this Interval formatted according to the specified format
       * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
       * formatting tool.
       * @param {string} dateFormat - The format string. This string formats the start and end time.
       * See {@link DateTime#toFormat} for details.
       * @param {Object} opts - Options.
       * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
       * representations.
       * @return {string}
       */
      toFormat(dateFormat, { separator = " \u2013 " } = {}) {
        if (!this.isValid)
          return INVALID$1;
        return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
      }
      /**
       * Return a Duration representing the time spanned by this interval.
       * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
       * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
       * @return {Duration}
       */
      toDuration(unit, opts) {
        if (!this.isValid) {
          return Duration.invalid(this.invalidReason);
        }
        return this.e.diff(this.s, unit, opts);
      }
      /**
       * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
       * @param {function} mapFn
       * @return {Interval}
       * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
       * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
       */
      mapEndpoints(mapFn) {
        return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
      }
    };
    var Info = class {
      /**
       * Return whether the specified zone contains a DST.
       * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
       * @return {boolean}
       */
      static hasDST(zone = Settings.defaultZone) {
        const proto = DateTime.now().setZone(zone).set({ month: 12 });
        return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
      }
      /**
       * Return whether the specified zone is a valid IANA specifier.
       * @param {string} zone - Zone to check
       * @return {boolean}
       */
      static isValidIANAZone(zone) {
        return IANAZone.isValidZone(zone);
      }
      /**
       * Converts the input into a {@link Zone} instance.
       *
       * * If `input` is already a Zone instance, it is returned unchanged.
       * * If `input` is a string containing a valid time zone name, a Zone instance
       *   with that name is returned.
       * * If `input` is a string that doesn't refer to a known time zone, a Zone
       *   instance with {@link Zone#isValid} == false is returned.
       * * If `input is a number, a Zone instance with the specified fixed offset
       *   in minutes is returned.
       * * If `input` is `null` or `undefined`, the default zone is returned.
       * @param {string|Zone|number} [input] - the value to be converted
       * @return {Zone}
       */
      static normalizeZone(input) {
        return normalizeZone(input, Settings.defaultZone);
      }
      /**
       * Return an array of standalone month names.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @param {string} [opts.outputCalendar='gregory'] - the calendar
       * @example Info.months()[0] //=> 'January'
       * @example Info.months('short')[0] //=> 'Jan'
       * @example Info.months('numeric')[0] //=> '1'
       * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
       * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
       * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
       * @return {Array}
       */
      static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
      }
      /**
       * Return an array of format month names.
       * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
       * changes the string.
       * See {@link Info#months}
       * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @param {string} [opts.outputCalendar='gregory'] - the calendar
       * @return {Array}
       */
      static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
      }
      /**
       * Return an array of standalone week names.
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @example Info.weekdays()[0] //=> 'Monday'
       * @example Info.weekdays('short')[0] //=> 'Mon'
       * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
       * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
       * @return {Array}
       */
      static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
      }
      /**
       * Return an array of format week names.
       * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
       * changes the string.
       * See {@link Info#weekdays}
       * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale=null] - the locale code
       * @param {string} [opts.numberingSystem=null] - the numbering system
       * @param {string} [opts.locObj=null] - an existing locale object to use
       * @return {Array}
       */
      static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
        return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
      }
      /**
       * Return an array of meridiems.
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @example Info.meridiems() //=> [ 'AM', 'PM' ]
       * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
       * @return {Array}
       */
      static meridiems({ locale = null } = {}) {
        return Locale.create(locale).meridiems();
      }
      /**
       * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
       * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
       * @param {Object} opts - options
       * @param {string} [opts.locale] - the locale code
       * @example Info.eras() //=> [ 'BC', 'AD' ]
       * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
       * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
       * @return {Array}
       */
      static eras(length = "short", { locale = null } = {}) {
        return Locale.create(locale, null, "gregory").eras(length);
      }
      /**
       * Return the set of available features in this environment.
       * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
       * Keys:
       * * `relative`: whether this environment supports relative time formatting
       * @example Info.features() //=> { relative: false }
       * @return {Object}
       */
      static features() {
        return { relative: hasRelative() };
      }
    };
    function dayDiff(earlier, later) {
      const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
      return Math.floor(Duration.fromMillis(ms).as("days"));
    }
    function highOrderDiffs(cursor, later, units) {
      const differs = [
        ["years", (a, b) => b.year - a.year],
        ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
        ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
        [
          "weeks",
          (a, b) => {
            const days = dayDiff(a, b);
            return (days - days % 7) / 7;
          }
        ],
        ["days", dayDiff]
      ];
      const results = {};
      const earlier = cursor;
      let lowestOrder, highWater;
      for (const [unit, differ] of differs) {
        if (units.indexOf(unit) >= 0) {
          lowestOrder = unit;
          results[unit] = differ(cursor, later);
          highWater = earlier.plus(results);
          if (highWater > later) {
            results[unit]--;
            cursor = earlier.plus(results);
            if (cursor > later) {
              highWater = cursor;
              results[unit]--;
              cursor = earlier.plus(results);
            }
          } else {
            cursor = highWater;
          }
        }
      }
      return [cursor, results, highWater, lowestOrder];
    }
    function diff(earlier, later, units, opts) {
      let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
      const remainingMillis = later - cursor;
      const lowerOrderUnits = units.filter(
        (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
      );
      if (lowerOrderUnits.length === 0) {
        if (highWater < later) {
          highWater = cursor.plus({ [lowestOrder]: 1 });
        }
        if (highWater !== cursor) {
          results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
        }
      }
      const duration = Duration.fromObject(results, opts);
      if (lowerOrderUnits.length > 0) {
        return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
      } else {
        return duration;
      }
    }
    var numberingSystems = {
      arab: "[\u0660-\u0669]",
      arabext: "[\u06F0-\u06F9]",
      bali: "[\u1B50-\u1B59]",
      beng: "[\u09E6-\u09EF]",
      deva: "[\u0966-\u096F]",
      fullwide: "[\uFF10-\uFF19]",
      gujr: "[\u0AE6-\u0AEF]",
      hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
      khmr: "[\u17E0-\u17E9]",
      knda: "[\u0CE6-\u0CEF]",
      laoo: "[\u0ED0-\u0ED9]",
      limb: "[\u1946-\u194F]",
      mlym: "[\u0D66-\u0D6F]",
      mong: "[\u1810-\u1819]",
      mymr: "[\u1040-\u1049]",
      orya: "[\u0B66-\u0B6F]",
      tamldec: "[\u0BE6-\u0BEF]",
      telu: "[\u0C66-\u0C6F]",
      thai: "[\u0E50-\u0E59]",
      tibt: "[\u0F20-\u0F29]",
      latn: "\\d"
    };
    var numberingSystemsUTF16 = {
      arab: [1632, 1641],
      arabext: [1776, 1785],
      bali: [6992, 7001],
      beng: [2534, 2543],
      deva: [2406, 2415],
      fullwide: [65296, 65303],
      gujr: [2790, 2799],
      khmr: [6112, 6121],
      knda: [3302, 3311],
      laoo: [3792, 3801],
      limb: [6470, 6479],
      mlym: [3430, 3439],
      mong: [6160, 6169],
      mymr: [4160, 4169],
      orya: [2918, 2927],
      tamldec: [3046, 3055],
      telu: [3174, 3183],
      thai: [3664, 3673],
      tibt: [3872, 3881]
    };
    var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
    function parseDigits(str) {
      let value = parseInt(str, 10);
      if (isNaN(value)) {
        value = "";
        for (let i = 0; i < str.length; i++) {
          const code = str.charCodeAt(i);
          if (str[i].search(numberingSystems.hanidec) !== -1) {
            value += hanidecChars.indexOf(str[i]);
          } else {
            for (const key in numberingSystemsUTF16) {
              const [min, max] = numberingSystemsUTF16[key];
              if (code >= min && code <= max) {
                value += code - min;
              }
            }
          }
        }
        return parseInt(value, 10);
      } else {
        return value;
      }
    }
    function digitRegex({ numberingSystem }, append = "") {
      return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
    }
    var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
    function intUnit(regex2, post = (i) => i) {
      return { regex: regex2, deser: ([s2]) => post(parseDigits(s2)) };
    }
    var NBSP = String.fromCharCode(160);
    var spaceOrNBSP = `[ ${NBSP}]`;
    var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
    function fixListRegex(s2) {
      return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
    }
    function stripInsensitivities(s2) {
      return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
    }
    function oneOf(strings, startIndex) {
      if (strings === null) {
        return null;
      } else {
        return {
          regex: RegExp(strings.map(fixListRegex).join("|")),
          deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
        };
      }
    }
    function offset(regex2, groups) {
      return { regex: regex2, deser: ([, h, m]) => signedOffset(h, m), groups };
    }
    function simple(regex2) {
      return { regex: regex2, deser: ([s2]) => s2 };
    }
    function escapeToken(value) {
      return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    }
    function unitForToken(token, loc) {
      const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t2) => ({ regex: RegExp(escapeToken(t2.val)), deser: ([s2]) => s2, literal: true }), unitate = (t2) => {
        if (token.literal) {
          return literal(t2);
        }
        switch (t2.val) {
          case "G":
            return oneOf(loc.eras("short"), 0);
          case "GG":
            return oneOf(loc.eras("long"), 0);
          case "y":
            return intUnit(oneToSix);
          case "yy":
            return intUnit(twoToFour, untruncateYear);
          case "yyyy":
            return intUnit(four);
          case "yyyyy":
            return intUnit(fourToSix);
          case "yyyyyy":
            return intUnit(six);
          case "M":
            return intUnit(oneOrTwo);
          case "MM":
            return intUnit(two);
          case "MMM":
            return oneOf(loc.months("short", true), 1);
          case "MMMM":
            return oneOf(loc.months("long", true), 1);
          case "L":
            return intUnit(oneOrTwo);
          case "LL":
            return intUnit(two);
          case "LLL":
            return oneOf(loc.months("short", false), 1);
          case "LLLL":
            return oneOf(loc.months("long", false), 1);
          case "d":
            return intUnit(oneOrTwo);
          case "dd":
            return intUnit(two);
          case "o":
            return intUnit(oneToThree);
          case "ooo":
            return intUnit(three);
          case "HH":
            return intUnit(two);
          case "H":
            return intUnit(oneOrTwo);
          case "hh":
            return intUnit(two);
          case "h":
            return intUnit(oneOrTwo);
          case "mm":
            return intUnit(two);
          case "m":
            return intUnit(oneOrTwo);
          case "q":
            return intUnit(oneOrTwo);
          case "qq":
            return intUnit(two);
          case "s":
            return intUnit(oneOrTwo);
          case "ss":
            return intUnit(two);
          case "S":
            return intUnit(oneToThree);
          case "SSS":
            return intUnit(three);
          case "u":
            return simple(oneToNine);
          case "uu":
            return simple(oneOrTwo);
          case "uuu":
            return intUnit(one);
          case "a":
            return oneOf(loc.meridiems(), 0);
          case "kkkk":
            return intUnit(four);
          case "kk":
            return intUnit(twoToFour, untruncateYear);
          case "W":
            return intUnit(oneOrTwo);
          case "WW":
            return intUnit(two);
          case "E":
          case "c":
            return intUnit(one);
          case "EEE":
            return oneOf(loc.weekdays("short", false), 1);
          case "EEEE":
            return oneOf(loc.weekdays("long", false), 1);
          case "ccc":
            return oneOf(loc.weekdays("short", true), 1);
          case "cccc":
            return oneOf(loc.weekdays("long", true), 1);
          case "Z":
          case "ZZ":
            return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
          case "ZZZ":
            return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
          case "z":
            return simple(/[a-z_+-/]{1,256}?/i);
          case " ":
            return simple(/[^\S\n\r]/);
          default:
            return literal(t2);
        }
      };
      const unit = unitate(token) || {
        invalidReason: MISSING_FTP
      };
      unit.token = token;
      return unit;
    }
    var partTypeStyleToTokenVal = {
      year: {
        "2-digit": "yy",
        numeric: "yyyyy"
      },
      month: {
        numeric: "M",
        "2-digit": "MM",
        short: "MMM",
        long: "MMMM"
      },
      day: {
        numeric: "d",
        "2-digit": "dd"
      },
      weekday: {
        short: "EEE",
        long: "EEEE"
      },
      dayperiod: "a",
      dayPeriod: "a",
      hour12: {
        numeric: "h",
        "2-digit": "hh"
      },
      hour24: {
        numeric: "H",
        "2-digit": "HH"
      },
      minute: {
        numeric: "m",
        "2-digit": "mm"
      },
      second: {
        numeric: "s",
        "2-digit": "ss"
      },
      timeZoneName: {
        long: "ZZZZZ",
        short: "ZZZ"
      }
    };
    function tokenForPart(part, formatOpts, resolvedOpts) {
      const { type, value } = part;
      if (type === "literal") {
        const isSpace = /^\s+$/.test(value);
        return {
          literal: !isSpace,
          val: isSpace ? " " : value
        };
      }
      const style = formatOpts[type];
      let actualType = type;
      if (type === "hour") {
        if (formatOpts.hour12 != null) {
          actualType = formatOpts.hour12 ? "hour12" : "hour24";
        } else if (formatOpts.hourCycle != null) {
          if (formatOpts.hourCycle === "h11" || formatOpts.hourCycle === "h12") {
            actualType = "hour12";
          } else {
            actualType = "hour24";
          }
        } else {
          actualType = resolvedOpts.hour12 ? "hour12" : "hour24";
        }
      }
      let val = partTypeStyleToTokenVal[actualType];
      if (typeof val === "object") {
        val = val[style];
      }
      if (val) {
        return {
          literal: false,
          val
        };
      }
      return void 0;
    }
    function buildRegex(units) {
      const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
      return [`^${re}$`, units];
    }
    function match2(input, regex2, handlers) {
      const matches = input.match(regex2);
      if (matches) {
        const all = {};
        let matchIndex = 1;
        for (const i in handlers) {
          if (hasOwnProperty(handlers, i)) {
            const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
            if (!h.literal && h.token) {
              all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
            }
            matchIndex += groups;
          }
        }
        return [matches, all];
      } else {
        return [matches, {}];
      }
    }
    function dateTimeFromMatches(matches) {
      const toField = (token) => {
        switch (token) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
          case "H":
            return "hour";
          case "d":
            return "day";
          case "o":
            return "ordinal";
          case "L":
          case "M":
            return "month";
          case "y":
            return "year";
          case "E":
          case "c":
            return "weekday";
          case "W":
            return "weekNumber";
          case "k":
            return "weekYear";
          case "q":
            return "quarter";
          default:
            return null;
        }
      };
      let zone = null;
      let specificOffset;
      if (!isUndefined(matches.z)) {
        zone = IANAZone.create(matches.z);
      }
      if (!isUndefined(matches.Z)) {
        if (!zone) {
          zone = new FixedOffsetZone(matches.Z);
        }
        specificOffset = matches.Z;
      }
      if (!isUndefined(matches.q)) {
        matches.M = (matches.q - 1) * 3 + 1;
      }
      if (!isUndefined(matches.h)) {
        if (matches.h < 12 && matches.a === 1) {
          matches.h += 12;
        } else if (matches.h === 12 && matches.a === 0) {
          matches.h = 0;
        }
      }
      if (matches.G === 0 && matches.y) {
        matches.y = -matches.y;
      }
      if (!isUndefined(matches.u)) {
        matches.S = parseMillis(matches.u);
      }
      const vals = Object.keys(matches).reduce((r, k) => {
        const f = toField(k);
        if (f) {
          r[f] = matches[k];
        }
        return r;
      }, {});
      return [vals, zone, specificOffset];
    }
    var dummyDateTimeCache = null;
    function getDummyDateTime() {
      if (!dummyDateTimeCache) {
        dummyDateTimeCache = DateTime.fromMillis(1555555555555);
      }
      return dummyDateTimeCache;
    }
    function maybeExpandMacroToken(token, locale) {
      if (token.literal) {
        return token;
      }
      const formatOpts = Formatter2.macroTokenToFormatOpts(token.val);
      const tokens = formatOptsToTokens(formatOpts, locale);
      if (tokens == null || tokens.includes(void 0)) {
        return token;
      }
      return tokens;
    }
    function expandMacroTokens(tokens, locale) {
      return Array.prototype.concat(...tokens.map((t2) => maybeExpandMacroToken(t2, locale)));
    }
    function explainFromTokens(locale, input, format) {
      const tokens = expandMacroTokens(Formatter2.parseFormat(format), locale), units = tokens.map((t2) => unitForToken(t2, locale)), disqualifyingUnit = units.find((t2) => t2.invalidReason);
      if (disqualifyingUnit) {
        return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
      } else {
        const [regexString, handlers] = buildRegex(units), regex2 = RegExp(regexString, "i"), [rawMatches, matches] = match2(input, regex2, handlers), [result2, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
        if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
          throw new ConflictingSpecificationError(
            "Can't include meridiem when specifying 24-hour format"
          );
        }
        return { input, tokens, regex: regex2, rawMatches, matches, result: result2, zone, specificOffset };
      }
    }
    function parseFromTokens(locale, input, format) {
      const { result: result2, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
      return [result2, zone, specificOffset, invalidReason];
    }
    function formatOptsToTokens(formatOpts, locale) {
      if (!formatOpts) {
        return null;
      }
      const formatter = Formatter2.create(locale, formatOpts);
      const df = formatter.dtFormatter(getDummyDateTime());
      const parts = df.formatToParts();
      const resolvedOpts = df.resolvedOptions();
      return parts.map((p) => tokenForPart(p, formatOpts, resolvedOpts));
    }
    var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function unitOutOfRange(unit, value) {
      return new Invalid(
        "unit out of range",
        `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
      );
    }
    function dayOfWeek(year, month, day) {
      const d = new Date(Date.UTC(year, month - 1, day));
      if (year < 100 && year >= 0) {
        d.setUTCFullYear(d.getUTCFullYear() - 1900);
      }
      const js = d.getUTCDay();
      return js === 0 ? 7 : js;
    }
    function computeOrdinal(year, month, day) {
      return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
    }
    function uncomputeOrdinal(year, ordinal) {
      const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
      return { month: month0 + 1, day };
    }
    function gregorianToWeek(gregObj) {
      const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
      let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
      if (weekNumber < 1) {
        weekYear = year - 1;
        weekNumber = weeksInWeekYear(weekYear);
      } else if (weekNumber > weeksInWeekYear(year)) {
        weekYear = year + 1;
        weekNumber = 1;
      } else {
        weekYear = year;
      }
      return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
    }
    function weekToGregorian(weekData) {
      const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
      let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
      if (ordinal < 1) {
        year = weekYear - 1;
        ordinal += daysInYear(year);
      } else if (ordinal > yearInDays) {
        year = weekYear + 1;
        ordinal -= daysInYear(weekYear);
      } else {
        year = weekYear;
      }
      const { month, day } = uncomputeOrdinal(year, ordinal);
      return { year, month, day, ...timeObject(weekData) };
    }
    function gregorianToOrdinal(gregData) {
      const { year, month, day } = gregData;
      const ordinal = computeOrdinal(year, month, day);
      return { year, ordinal, ...timeObject(gregData) };
    }
    function ordinalToGregorian(ordinalData) {
      const { year, ordinal } = ordinalData;
      const { month, day } = uncomputeOrdinal(year, ordinal);
      return { year, month, day, ...timeObject(ordinalData) };
    }
    function hasInvalidWeekData(obj) {
      const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
      if (!validYear) {
        return unitOutOfRange("weekYear", obj.weekYear);
      } else if (!validWeek) {
        return unitOutOfRange("week", obj.week);
      } else if (!validWeekday) {
        return unitOutOfRange("weekday", obj.weekday);
      } else
        return false;
    }
    function hasInvalidOrdinalData(obj) {
      const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
      if (!validYear) {
        return unitOutOfRange("year", obj.year);
      } else if (!validOrdinal) {
        return unitOutOfRange("ordinal", obj.ordinal);
      } else
        return false;
    }
    function hasInvalidGregorianData(obj) {
      const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
      if (!validYear) {
        return unitOutOfRange("year", obj.year);
      } else if (!validMonth) {
        return unitOutOfRange("month", obj.month);
      } else if (!validDay) {
        return unitOutOfRange("day", obj.day);
      } else
        return false;
    }
    function hasInvalidTimeData(obj) {
      const { hour, minute, second, millisecond } = obj;
      const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
      if (!validHour) {
        return unitOutOfRange("hour", hour);
      } else if (!validMinute) {
        return unitOutOfRange("minute", minute);
      } else if (!validSecond) {
        return unitOutOfRange("second", second);
      } else if (!validMillisecond) {
        return unitOutOfRange("millisecond", millisecond);
      } else
        return false;
    }
    var INVALID = "Invalid DateTime";
    var MAX_DATE = 864e13;
    function unsupportedZone(zone) {
      return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
    }
    function possiblyCachedWeekData(dt) {
      if (dt.weekData === null) {
        dt.weekData = gregorianToWeek(dt.c);
      }
      return dt.weekData;
    }
    function clone(inst, alts) {
      const current = {
        ts: inst.ts,
        zone: inst.zone,
        c: inst.c,
        o: inst.o,
        loc: inst.loc,
        invalid: inst.invalid
      };
      return new DateTime({ ...current, ...alts, old: current });
    }
    function fixOffset(localTS, o, tz) {
      let utcGuess = localTS - o * 60 * 1e3;
      const o2 = tz.offset(utcGuess);
      if (o === o2) {
        return [utcGuess, o];
      }
      utcGuess -= (o2 - o) * 60 * 1e3;
      const o3 = tz.offset(utcGuess);
      if (o2 === o3) {
        return [utcGuess, o2];
      }
      return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
    }
    function tsToObj(ts, offset2) {
      ts += offset2 * 60 * 1e3;
      const d = new Date(ts);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes(),
        second: d.getUTCSeconds(),
        millisecond: d.getUTCMilliseconds()
      };
    }
    function objToTS(obj, offset2, zone) {
      return fixOffset(objToLocalTS(obj), offset2, zone);
    }
    function adjustTime(inst, dur) {
      const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
        ...inst.c,
        year,
        month,
        day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
      }, millisToAdd = Duration.fromObject({
        years: dur.years - Math.trunc(dur.years),
        quarters: dur.quarters - Math.trunc(dur.quarters),
        months: dur.months - Math.trunc(dur.months),
        weeks: dur.weeks - Math.trunc(dur.weeks),
        days: dur.days - Math.trunc(dur.days),
        hours: dur.hours,
        minutes: dur.minutes,
        seconds: dur.seconds,
        milliseconds: dur.milliseconds
      }).as("milliseconds"), localTS = objToLocalTS(c);
      let [ts, o] = fixOffset(localTS, oPre, inst.zone);
      if (millisToAdd !== 0) {
        ts += millisToAdd;
        o = inst.zone.offset(ts);
      }
      return { ts, o };
    }
    function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
      const { setZone, zone } = opts;
      if (parsed && Object.keys(parsed).length !== 0 || parsedZone) {
        const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
          ...opts,
          zone: interpretationZone,
          specificOffset
        });
        return setZone ? inst : inst.setZone(zone);
      } else {
        return DateTime.invalid(
          new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
        );
      }
    }
    function toTechFormat(dt, format, allowZ = true) {
      return dt.isValid ? Formatter2.create(Locale.create("en-US"), {
        allowZ,
        forceSimple: true
      }).formatDateTimeFromString(dt, format) : null;
    }
    function toISODate(o, extended) {
      const longFormat = o.c.year > 9999 || o.c.year < 0;
      let c = "";
      if (longFormat && o.c.year >= 0)
        c += "+";
      c += padStart(o.c.year, longFormat ? 6 : 4);
      if (extended) {
        c += "-";
        c += padStart(o.c.month);
        c += "-";
        c += padStart(o.c.day);
      } else {
        c += padStart(o.c.month);
        c += padStart(o.c.day);
      }
      return c;
    }
    function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
      let c = padStart(o.c.hour);
      if (extended) {
        c += ":";
        c += padStart(o.c.minute);
        if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
          c += ":";
        }
      } else {
        c += padStart(o.c.minute);
      }
      if (o.c.millisecond !== 0 || o.c.second !== 0 || !suppressSeconds) {
        c += padStart(o.c.second);
        if (o.c.millisecond !== 0 || !suppressMilliseconds) {
          c += ".";
          c += padStart(o.c.millisecond, 3);
        }
      }
      if (includeOffset) {
        if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
          c += "Z";
        } else if (o.o < 0) {
          c += "-";
          c += padStart(Math.trunc(-o.o / 60));
          c += ":";
          c += padStart(Math.trunc(-o.o % 60));
        } else {
          c += "+";
          c += padStart(Math.trunc(o.o / 60));
          c += ":";
          c += padStart(Math.trunc(o.o % 60));
        }
      }
      if (extendedZone) {
        c += "[" + o.zone.ianaName + "]";
      }
      return c;
    }
    var defaultUnitValues = {
      month: 1,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var defaultWeekUnitValues = {
      weekNumber: 1,
      weekday: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var defaultOrdinalUnitValues = {
      ordinal: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    };
    var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
    var orderedWeekUnits = [
      "weekYear",
      "weekNumber",
      "weekday",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
    function normalizeUnit(unit) {
      const normalized = {
        year: "year",
        years: "year",
        month: "month",
        months: "month",
        day: "day",
        days: "day",
        hour: "hour",
        hours: "hour",
        minute: "minute",
        minutes: "minute",
        quarter: "quarter",
        quarters: "quarter",
        second: "second",
        seconds: "second",
        millisecond: "millisecond",
        milliseconds: "millisecond",
        weekday: "weekday",
        weekdays: "weekday",
        weeknumber: "weekNumber",
        weeksnumber: "weekNumber",
        weeknumbers: "weekNumber",
        weekyear: "weekYear",
        weekyears: "weekYear",
        ordinal: "ordinal"
      }[unit.toLowerCase()];
      if (!normalized)
        throw new InvalidUnitError(unit);
      return normalized;
    }
    function quickDT(obj, opts) {
      const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
      let ts, o;
      if (!isUndefined(obj.year)) {
        for (const u of orderedUnits) {
          if (isUndefined(obj[u])) {
            obj[u] = defaultUnitValues[u];
          }
        }
        const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
        if (invalid) {
          return DateTime.invalid(invalid);
        }
        const offsetProvis = zone.offset(tsNow);
        [ts, o] = objToTS(obj, offsetProvis, zone);
      } else {
        ts = tsNow;
      }
      return new DateTime({ ts, zone, loc, o });
    }
    function diffRelative(start, end, opts) {
      const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
        c = roundTo(c, round || opts.calendary ? 0 : 2, true);
        const formatter = end.loc.clone(opts).relFormatter(opts);
        return formatter.format(c, unit);
      }, differ = (unit) => {
        if (opts.calendary) {
          if (!end.hasSame(start, unit)) {
            return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
          } else
            return 0;
        } else {
          return end.diff(start, unit).get(unit);
        }
      };
      if (opts.unit) {
        return format(differ(opts.unit), opts.unit);
      }
      for (const unit of opts.units) {
        const count = differ(unit);
        if (Math.abs(count) >= 1) {
          return format(count, unit);
        }
      }
      return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
    }
    function lastOpts(argList) {
      let opts = {}, args;
      if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
        opts = argList[argList.length - 1];
        args = Array.from(argList).slice(0, argList.length - 1);
      } else {
        args = Array.from(argList);
      }
      return [opts, args];
    }
    var DateTime = class {
      /**
       * @access private
       */
      constructor(config) {
        const zone = config.zone || Settings.defaultZone;
        let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
        this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
        let c = null, o = null;
        if (!invalid) {
          const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
          if (unchanged) {
            [c, o] = [config.old.c, config.old.o];
          } else {
            const ot = zone.offset(this.ts);
            c = tsToObj(this.ts, ot);
            invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
            c = invalid ? null : c;
            o = invalid ? null : ot;
          }
        }
        this._zone = zone;
        this.loc = config.loc || Locale.create();
        this.invalid = invalid;
        this.weekData = null;
        this.c = c;
        this.o = o;
        this.isLuxonDateTime = true;
      }
      // CONSTRUCT
      /**
       * Create a DateTime for the current instant, in the system's time zone.
       *
       * Use Settings to override these default values if needed.
       * @example DateTime.now().toISO() //~> now in the ISO format
       * @return {DateTime}
       */
      static now() {
        return new DateTime({});
      }
      /**
       * Create a local DateTime
       * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
       * @param {number} [month=1] - The month, 1-indexed
       * @param {number} [day=1] - The day of the month, 1-indexed
       * @param {number} [hour=0] - The hour of the day, in 24-hour time
       * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
       * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
       * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
       * @example DateTime.local()                                  //~> now
       * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
       * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
       * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
       * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
       * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
       * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
       * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
       * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
       * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
       * @return {DateTime}
       */
      static local() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
      }
      /**
       * Create a DateTime in UTC
       * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
       * @param {number} [month=1] - The month, 1-indexed
       * @param {number} [day=1] - The day of the month
       * @param {number} [hour=0] - The hour of the day, in 24-hour time
       * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
       * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
       * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
       * @param {Object} options - configuration options for the DateTime
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
       * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
       * @example DateTime.utc()                                              //~> now
       * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
       * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
       * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
       * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
       * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
       * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
       * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
       * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
       * @return {DateTime}
       */
      static utc() {
        const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
        opts.zone = FixedOffsetZone.utcInstance;
        return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
      }
      /**
       * Create a DateTime from a JavaScript Date object. Uses the default zone.
       * @param {Date} date - a JavaScript Date object
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @return {DateTime}
       */
      static fromJSDate(date, options = {}) {
        const ts = isDate(date) ? date.valueOf() : NaN;
        if (Number.isNaN(ts)) {
          return DateTime.invalid("invalid input");
        }
        const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime.invalid(unsupportedZone(zoneToUse));
        }
        return new DateTime({
          ts,
          zone: zoneToUse,
          loc: Locale.fromObject(options)
        });
      }
      /**
       * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
       * @param {number} milliseconds - a number of milliseconds since 1970 UTC
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromMillis(milliseconds, options = {}) {
        if (!isNumber(milliseconds)) {
          throw new InvalidArgumentError(
            `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
          );
        } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
          return DateTime.invalid("Timestamp out of range");
        } else {
          return new DateTime({
            ts: milliseconds,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
          });
        }
      }
      /**
       * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
       * @param {number} seconds - a number of seconds since 1970 UTC
       * @param {Object} options - configuration options for the DateTime
       * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
       * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
       * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromSeconds(seconds, options = {}) {
        if (!isNumber(seconds)) {
          throw new InvalidArgumentError("fromSeconds requires a numerical input");
        } else {
          return new DateTime({
            ts: seconds * 1e3,
            zone: normalizeZone(options.zone, Settings.defaultZone),
            loc: Locale.fromObject(options)
          });
        }
      }
      /**
       * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
       * @param {Object} obj - the object to create the DateTime from
       * @param {number} obj.year - a year, such as 1987
       * @param {number} obj.month - a month, 1-12
       * @param {number} obj.day - a day of the month, 1-31, depending on the month
       * @param {number} obj.ordinal - day of the year, 1-365 or 366
       * @param {number} obj.weekYear - an ISO week year
       * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
       * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
       * @param {number} obj.hour - hour of the day, 0-23
       * @param {number} obj.minute - minute of the hour, 0-59
       * @param {number} obj.second - second of the minute, 0-59
       * @param {number} obj.millisecond - millisecond of the second, 0-999
       * @param {Object} opts - options for creating this DateTime
       * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
       * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
       * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
       * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
       * @return {DateTime}
       */
      static fromObject(obj, opts = {}) {
        obj = obj || {};
        const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
        if (!zoneToUse.isValid) {
          return DateTime.invalid(unsupportedZone(zoneToUse));
        }
        const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError(
            "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
          );
        }
        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }
        const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
        let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
        if (useWeekData) {
          units = orderedWeekUnits;
          defaultValues = defaultWeekUnitValues;
          objNow = gregorianToWeek(objNow);
        } else if (containsOrdinal) {
          units = orderedOrdinalUnits;
          defaultValues = defaultOrdinalUnitValues;
          objNow = gregorianToOrdinal(objNow);
        } else {
          units = orderedUnits;
          defaultValues = defaultUnitValues;
        }
        let foundFirst = false;
        for (const u of units) {
          const v = normalized[u];
          if (!isUndefined(v)) {
            foundFirst = true;
          } else if (foundFirst) {
            normalized[u] = defaultValues[u];
          } else {
            normalized[u] = objNow[u];
          }
        }
        const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
        if (invalid) {
          return DateTime.invalid(invalid);
        }
        const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
          ts: tsFinal,
          zone: zoneToUse,
          o: offsetFinal,
          loc
        });
        if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
          return DateTime.invalid(
            "mismatched weekday",
            `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
          );
        }
        return inst;
      }
      /**
       * Create a DateTime from an ISO 8601 string
       * @param {string} text - the ISO string
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
       * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromISO('2016-05-25T09:08:34.123')
       * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
       * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
       * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
       * @example DateTime.fromISO('2016-W05-4')
       * @return {DateTime}
       */
      static fromISO(text, opts = {}) {
        const [vals, parsedZone] = parseISODate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
      }
      /**
       * Create a DateTime from an RFC 2822 string
       * @param {string} text - the RFC 2822 string
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
       * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
       * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
       * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
       * @return {DateTime}
       */
      static fromRFC2822(text, opts = {}) {
        const [vals, parsedZone] = parseRFC2822Date(text);
        return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
      }
      /**
       * Create a DateTime from an HTTP header date
       * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
       * @param {string} text - the HTTP header date
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
       * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
       * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
       * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
       * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
       * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
       * @return {DateTime}
       */
      static fromHTTP(text, opts = {}) {
        const [vals, parsedZone] = parseHTTPDate(text);
        return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
      }
      /**
       * Create a DateTime from an input string and format string.
       * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
       * @param {string} text - the string to parse
       * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
       * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @return {DateTime}
       */
      static fromFormat(text, fmt, opts = {}) {
        if (isUndefined(text) || isUndefined(fmt)) {
          throw new InvalidArgumentError("fromFormat requires an input string and a format");
        }
        const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
          locale,
          numberingSystem,
          defaultToEN: true
        }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
        if (invalid) {
          return DateTime.invalid(invalid);
        } else {
          return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
        }
      }
      /**
       * @deprecated use fromFormat instead
       */
      static fromString(text, fmt, opts = {}) {
        return DateTime.fromFormat(text, fmt, opts);
      }
      /**
       * Create a DateTime from a SQL date, time, or datetime
       * Defaults to en-US if no locale has been specified, regardless of the system's locale
       * @param {string} text - the string to parse
       * @param {Object} opts - options to affect the creation
       * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
       * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
       * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
       * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
       * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
       * @example DateTime.fromSQL('2017-05-15')
       * @example DateTime.fromSQL('2017-05-15 09:12:34')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
       * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
       * @example DateTime.fromSQL('09:12:34.342')
       * @return {DateTime}
       */
      static fromSQL(text, opts = {}) {
        const [vals, parsedZone] = parseSQL(text);
        return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
      }
      /**
       * Create an invalid DateTime.
       * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
       * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
       * @return {DateTime}
       */
      static invalid(reason, explanation = null) {
        if (!reason) {
          throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
        }
        const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
        if (Settings.throwOnInvalid) {
          throw new InvalidDateTimeError(invalid);
        } else {
          return new DateTime({ invalid });
        }
      }
      /**
       * Check if an object is an instance of DateTime. Works across context boundaries
       * @param {object} o
       * @return {boolean}
       */
      static isDateTime(o) {
        return o && o.isLuxonDateTime || false;
      }
      /**
       * Produce the format string for a set of options
       * @param formatOpts
       * @param localeOpts
       * @returns {string}
       */
      static parseFormatForOpts(formatOpts, localeOpts = {}) {
        const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
        return !tokenList ? null : tokenList.map((t2) => t2 ? t2.val : null).join("");
      }
      /**
       * Produce the the fully expanded format token for the locale
       * Does NOT quote characters, so quoted tokens will not round trip correctly
       * @param fmt
       * @param localeOpts
       * @returns {string}
       */
      static expandFormat(fmt, localeOpts = {}) {
        const expanded = expandMacroTokens(Formatter2.parseFormat(fmt), Locale.fromObject(localeOpts));
        return expanded.map((t2) => t2.val).join("");
      }
      // INFO
      /**
       * Get the value of unit.
       * @param {string} unit - a unit such as 'minute' or 'day'
       * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
       * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
       * @return {number}
       */
      get(unit) {
        return this[unit];
      }
      /**
       * Returns whether the DateTime is valid. Invalid DateTimes occur when:
       * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
       * * The DateTime was created by an operation on another invalid date
       * @type {boolean}
       */
      get isValid() {
        return this.invalid === null;
      }
      /**
       * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
       * @type {string}
       */
      get invalidReason() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
       * @type {string}
       */
      get invalidExplanation() {
        return this.invalid ? this.invalid.explanation : null;
      }
      /**
       * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
       *
       * @type {string}
       */
      get locale() {
        return this.isValid ? this.loc.locale : null;
      }
      /**
       * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
       *
       * @type {string}
       */
      get numberingSystem() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
      /**
       * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
       *
       * @type {string}
       */
      get outputCalendar() {
        return this.isValid ? this.loc.outputCalendar : null;
      }
      /**
       * Get the time zone associated with this DateTime.
       * @type {Zone}
       */
      get zone() {
        return this._zone;
      }
      /**
       * Get the name of the time zone.
       * @type {string}
       */
      get zoneName() {
        return this.isValid ? this.zone.name : null;
      }
      /**
       * Get the year
       * @example DateTime.local(2017, 5, 25).year //=> 2017
       * @type {number}
       */
      get year() {
        return this.isValid ? this.c.year : NaN;
      }
      /**
       * Get the quarter
       * @example DateTime.local(2017, 5, 25).quarter //=> 2
       * @type {number}
       */
      get quarter() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
      }
      /**
       * Get the month (1-12).
       * @example DateTime.local(2017, 5, 25).month //=> 5
       * @type {number}
       */
      get month() {
        return this.isValid ? this.c.month : NaN;
      }
      /**
       * Get the day of the month (1-30ish).
       * @example DateTime.local(2017, 5, 25).day //=> 25
       * @type {number}
       */
      get day() {
        return this.isValid ? this.c.day : NaN;
      }
      /**
       * Get the hour of the day (0-23).
       * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
       * @type {number}
       */
      get hour() {
        return this.isValid ? this.c.hour : NaN;
      }
      /**
       * Get the minute of the hour (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
       * @type {number}
       */
      get minute() {
        return this.isValid ? this.c.minute : NaN;
      }
      /**
       * Get the second of the minute (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
       * @type {number}
       */
      get second() {
        return this.isValid ? this.c.second : NaN;
      }
      /**
       * Get the millisecond of the second (0-999).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
       * @type {number}
       */
      get millisecond() {
        return this.isValid ? this.c.millisecond : NaN;
      }
      /**
       * Get the week year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
       * @type {number}
       */
      get weekYear() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
      }
      /**
       * Get the week number of the week year (1-52ish).
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
       * @type {number}
       */
      get weekNumber() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
      }
      /**
       * Get the day of the week.
       * 1 is Monday and 7 is Sunday
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 11, 31).weekday //=> 4
       * @type {number}
       */
      get weekday() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
      }
      /**
       * Get the ordinal (meaning the day of the year)
       * @example DateTime.local(2017, 5, 25).ordinal //=> 145
       * @type {number|DateTime}
       */
      get ordinal() {
        return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
      }
      /**
       * Get the human readable short month name, such as 'Oct'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
       * @type {string}
       */
      get monthShort() {
        return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
      }
      /**
       * Get the human readable long month name, such as 'October'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthLong //=> October
       * @type {string}
       */
      get monthLong() {
        return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
      }
      /**
       * Get the human readable short weekday, such as 'Mon'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
       * @type {string}
       */
      get weekdayShort() {
        return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
      }
      /**
       * Get the human readable long weekday, such as 'Monday'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
       * @type {string}
       */
      get weekdayLong() {
        return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
      }
      /**
       * Get the UTC offset of this DateTime in minutes
       * @example DateTime.now().offset //=> -240
       * @example DateTime.utc().offset //=> 0
       * @type {number}
       */
      get offset() {
        return this.isValid ? +this.o : NaN;
      }
      /**
       * Get the short human name for the zone's current offset, for example "EST" or "EDT".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */
      get offsetNameShort() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      /**
       * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */
      get offsetNameLong() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      /**
       * Get whether this zone's offset ever changes, as in a DST.
       * @type {boolean}
       */
      get isOffsetFixed() {
        return this.isValid ? this.zone.isUniversal : null;
      }
      /**
       * Get whether the DateTime is in a DST.
       * @type {boolean}
       */
      get isInDST() {
        if (this.isOffsetFixed) {
          return false;
        } else {
          return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
        }
      }
      /**
       * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
       * in this DateTime's zone. During DST changes local time can be ambiguous, for example
       * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
       * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
       * @returns {DateTime[]}
       */
      getPossibleOffsets() {
        if (!this.isValid || this.isOffsetFixed) {
          return [this];
        }
        const dayMs = 864e5;
        const minuteMs = 6e4;
        const localTS = objToLocalTS(this.c);
        const oEarlier = this.zone.offset(localTS - dayMs);
        const oLater = this.zone.offset(localTS + dayMs);
        const o1 = this.zone.offset(localTS - oEarlier * minuteMs);
        const o2 = this.zone.offset(localTS - oLater * minuteMs);
        if (o1 === o2) {
          return [this];
        }
        const ts1 = localTS - o1 * minuteMs;
        const ts2 = localTS - o2 * minuteMs;
        const c1 = tsToObj(ts1, o1);
        const c2 = tsToObj(ts2, o2);
        if (c1.hour === c2.hour && c1.minute === c2.minute && c1.second === c2.second && c1.millisecond === c2.millisecond) {
          return [clone(this, { ts: ts1 }), clone(this, { ts: ts2 })];
        }
        return [this];
      }
      /**
       * Returns true if this DateTime is in a leap year, false otherwise
       * @example DateTime.local(2016).isInLeapYear //=> true
       * @example DateTime.local(2013).isInLeapYear //=> false
       * @type {boolean}
       */
      get isInLeapYear() {
        return isLeapYear(this.year);
      }
      /**
       * Returns the number of days in this DateTime's month
       * @example DateTime.local(2016, 2).daysInMonth //=> 29
       * @example DateTime.local(2016, 3).daysInMonth //=> 31
       * @type {number}
       */
      get daysInMonth() {
        return daysInMonth(this.year, this.month);
      }
      /**
       * Returns the number of days in this DateTime's year
       * @example DateTime.local(2016).daysInYear //=> 366
       * @example DateTime.local(2013).daysInYear //=> 365
       * @type {number}
       */
      get daysInYear() {
        return this.isValid ? daysInYear(this.year) : NaN;
      }
      /**
       * Returns the number of weeks in this DateTime's year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2004).weeksInWeekYear //=> 53
       * @example DateTime.local(2013).weeksInWeekYear //=> 52
       * @type {number}
       */
      get weeksInWeekYear() {
        return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
      }
      /**
       * Returns the resolved Intl options for this DateTime.
       * This is useful in understanding the behavior of formatting methods
       * @param {Object} opts - the same options as toLocaleString
       * @return {Object}
       */
      resolvedLocaleOptions(opts = {}) {
        const { locale, numberingSystem, calendar } = Formatter2.create(
          this.loc.clone(opts),
          opts
        ).resolvedOptions(this);
        return { locale, numberingSystem, outputCalendar: calendar };
      }
      // TRANSFORM
      /**
       * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
       *
       * Equivalent to {@link DateTime#setZone}('utc')
       * @param {number} [offset=0] - optionally, an offset from UTC in minutes
       * @param {Object} [opts={}] - options to pass to `setZone()`
       * @return {DateTime}
       */
      toUTC(offset2 = 0, opts = {}) {
        return this.setZone(FixedOffsetZone.instance(offset2), opts);
      }
      /**
       * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
       *
       * Equivalent to `setZone('local')`
       * @return {DateTime}
       */
      toLocal() {
        return this.setZone(Settings.defaultZone);
      }
      /**
       * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
       *
       * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
       * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
       * @param {Object} opts - options
       * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
       * @return {DateTime}
       */
      setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
        zone = normalizeZone(zone, Settings.defaultZone);
        if (zone.equals(this.zone)) {
          return this;
        } else if (!zone.isValid) {
          return DateTime.invalid(unsupportedZone(zone));
        } else {
          let newTS = this.ts;
          if (keepLocalTime || keepCalendarTime) {
            const offsetGuess = zone.offset(this.ts);
            const asObj = this.toObject();
            [newTS] = objToTS(asObj, offsetGuess, zone);
          }
          return clone(this, { ts: newTS, zone });
        }
      }
      /**
       * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
       * @param {Object} properties - the properties to set
       * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
       * @return {DateTime}
       */
      reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
        const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
        return clone(this, { loc });
      }
      /**
       * "Set" the locale. Returns a newly-constructed DateTime.
       * Just a convenient alias for reconfigure({ locale })
       * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
       * @return {DateTime}
       */
      setLocale(locale) {
        return this.reconfigure({ locale });
      }
      /**
       * "Set" the values of specified units. Returns a newly-constructed DateTime.
       * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
       * @param {Object} values - a mapping of units to numbers
       * @example dt.set({ year: 2017 })
       * @example dt.set({ hour: 8, minute: 30 })
       * @example dt.set({ weekday: 5 })
       * @example dt.set({ year: 2005, ordinal: 234 })
       * @return {DateTime}
       */
      set(values) {
        if (!this.isValid)
          return this;
        const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
        if ((containsGregor || containsOrdinal) && definiteWeekDef) {
          throw new ConflictingSpecificationError(
            "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
          );
        }
        if (containsGregorMD && containsOrdinal) {
          throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
        }
        let mixed;
        if (settingWeekStuff) {
          mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
        } else if (!isUndefined(normalized.ordinal)) {
          mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
        } else {
          mixed = { ...this.toObject(), ...normalized };
          if (isUndefined(normalized.day)) {
            mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
          }
        }
        const [ts, o] = objToTS(mixed, this.o, this.zone);
        return clone(this, { ts, o });
      }
      /**
       * Add a period of time to this DateTime and return the resulting DateTime
       *
       * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
       * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       * @example DateTime.now().plus(123) //~> in 123 milliseconds
       * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
       * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
       * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
       * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
       * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
       * @return {DateTime}
       */
      plus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration.fromDurationLike(duration);
        return clone(this, adjustTime(this, dur));
      }
      /**
       * Subtract a period of time to this DateTime and return the resulting DateTime
       * See {@link DateTime#plus}
       * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
       @return {DateTime}
       */
      minus(duration) {
        if (!this.isValid)
          return this;
        const dur = Duration.fromDurationLike(duration).negate();
        return clone(this, adjustTime(this, dur));
      }
      /**
       * "Set" this DateTime to the beginning of a unit of time.
       * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
       * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
       * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
       * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
       * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
       * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
       * @return {DateTime}
       */
      startOf(unit) {
        if (!this.isValid)
          return this;
        const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
        switch (normalizedUnit) {
          case "years":
            o.month = 1;
          case "quarters":
          case "months":
            o.day = 1;
          case "weeks":
          case "days":
            o.hour = 0;
          case "hours":
            o.minute = 0;
          case "minutes":
            o.second = 0;
          case "seconds":
            o.millisecond = 0;
            break;
        }
        if (normalizedUnit === "weeks") {
          o.weekday = 1;
        }
        if (normalizedUnit === "quarters") {
          const q = Math.ceil(this.month / 3);
          o.month = (q - 1) * 3 + 1;
        }
        return this.set(o);
      }
      /**
       * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
       * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
       * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
       * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
       * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
       * @return {DateTime}
       */
      endOf(unit) {
        return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
      }
      // OUTPUT
      /**
       * Returns a string representation of this DateTime formatted according to the specified format string.
       * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
       * Defaults to en-US if no locale has been specified, regardless of the system's locale.
       * @param {string} fmt - the format string
       * @param {Object} opts - opts to override the configuration options on this DateTime
       * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
       * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
       * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
       * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
       * @return {string}
       */
      toFormat(fmt, opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
      }
      /**
       * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
       * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
       * of the DateTime in the assigned locale.
       * Defaults to the system's locale if no locale has been specified
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
       * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
       * @param {Object} opts - opts to override the configuration options on this DateTime
       * @example DateTime.now().toLocaleString(); //=> 4/20/2017
       * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
       * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
       * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
       * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
       * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
       * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
       * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
       * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
       * @return {string}
       */
      toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
      }
      /**
       * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
       * Defaults to the system's locale if no locale has been specified
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
       * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
       * @example DateTime.now().toLocaleParts(); //=> [
       *                                   //=>   { type: 'day', value: '25' },
       *                                   //=>   { type: 'literal', value: '/' },
       *                                   //=>   { type: 'month', value: '05' },
       *                                   //=>   { type: 'literal', value: '/' },
       *                                   //=>   { type: 'year', value: '1982' }
       *                                   //=> ]
       */
      toLocaleParts(opts = {}) {
        return this.isValid ? Formatter2.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
      }
      /**
       * Returns an ISO 8601-compliant string representation of this DateTime
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
       * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
       * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
       * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
       * @return {string}
       */
      toISO({
        format = "extended",
        suppressSeconds = false,
        suppressMilliseconds = false,
        includeOffset = true,
        extendedZone = false
      } = {}) {
        if (!this.isValid) {
          return null;
        }
        const ext = format === "extended";
        let c = toISODate(this, ext);
        c += "T";
        c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        return c;
      }
      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's date component
       * @param {Object} opts - options
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
       * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
       * @return {string}
       */
      toISODate({ format = "extended" } = {}) {
        if (!this.isValid) {
          return null;
        }
        return toISODate(this, format === "extended");
      }
      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's week date
       * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
       * @return {string}
       */
      toISOWeekDate() {
        return toTechFormat(this, "kkkk-'W'WW-c");
      }
      /**
       * Returns an ISO 8601-compliant string representation of this DateTime's time component
       * @param {Object} opts - options
       * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
       * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
       * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
       * @param {string} [opts.format='extended'] - choose between the basic and extended format
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
       * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
       * @return {string}
       */
      toISOTime({
        suppressMilliseconds = false,
        suppressSeconds = false,
        includeOffset = true,
        includePrefix = false,
        extendedZone = false,
        format = "extended"
      } = {}) {
        if (!this.isValid) {
          return null;
        }
        let c = includePrefix ? "T" : "";
        return c + toISOTime(
          this,
          format === "extended",
          suppressSeconds,
          suppressMilliseconds,
          includeOffset,
          extendedZone
        );
      }
      /**
       * Returns an RFC 2822-compatible string representation of this DateTime
       * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
       * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
       * @return {string}
       */
      toRFC2822() {
        return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
      }
      /**
       * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
       * Specifically, the string conforms to RFC 1123.
       * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
       * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
       * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
       * @return {string}
       */
      toHTTP() {
        return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
      }
      /**
       * Returns a string representation of this DateTime appropriate for use in SQL Date
       * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
       * @return {string}
       */
      toSQLDate() {
        if (!this.isValid) {
          return null;
        }
        return toISODate(this, true);
      }
      /**
       * Returns a string representation of this DateTime appropriate for use in SQL Time
       * @param {Object} opts - options
       * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
       * @example DateTime.utc().toSQL() //=> '05:15:16.345'
       * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
       * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
       * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
       * @return {string}
       */
      toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
        let fmt = "HH:mm:ss.SSS";
        if (includeZone || includeOffset) {
          if (includeOffsetSpace) {
            fmt += " ";
          }
          if (includeZone) {
            fmt += "z";
          } else if (includeOffset) {
            fmt += "ZZ";
          }
        }
        return toTechFormat(this, fmt, true);
      }
      /**
       * Returns a string representation of this DateTime appropriate for use in SQL DateTime
       * @param {Object} opts - options
       * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
       * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
       * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
       * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
       * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
       * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
       * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
       * @return {string}
       */
      toSQL(opts = {}) {
        if (!this.isValid) {
          return null;
        }
        return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
      }
      /**
       * Returns a string representation of this DateTime appropriate for debugging
       * @return {string}
       */
      toString() {
        return this.isValid ? this.toISO() : INVALID;
      }
      /**
       * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
       * @return {number}
       */
      valueOf() {
        return this.toMillis();
      }
      /**
       * Returns the epoch milliseconds of this DateTime.
       * @return {number}
       */
      toMillis() {
        return this.isValid ? this.ts : NaN;
      }
      /**
       * Returns the epoch seconds of this DateTime.
       * @return {number}
       */
      toSeconds() {
        return this.isValid ? this.ts / 1e3 : NaN;
      }
      /**
       * Returns the epoch seconds (as a whole number) of this DateTime.
       * @return {number}
       */
      toUnixInteger() {
        return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
      }
      /**
       * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
       * @return {string}
       */
      toJSON() {
        return this.toISO();
      }
      /**
       * Returns a BSON serializable equivalent to this DateTime.
       * @return {Date}
       */
      toBSON() {
        return this.toJSDate();
      }
      /**
       * Returns a JavaScript object with this DateTime's year, month, day, and so on.
       * @param opts - options for generating the object
       * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
       * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
       * @return {Object}
       */
      toObject(opts = {}) {
        if (!this.isValid)
          return {};
        const base = { ...this.c };
        if (opts.includeConfig) {
          base.outputCalendar = this.outputCalendar;
          base.numberingSystem = this.loc.numberingSystem;
          base.locale = this.loc.locale;
        }
        return base;
      }
      /**
       * Returns a JavaScript Date equivalent to this DateTime.
       * @return {Date}
       */
      toJSDate() {
        return new Date(this.isValid ? this.ts : NaN);
      }
      // COMPARE
      /**
       * Return the difference between two DateTimes as a Duration.
       * @param {DateTime} otherDateTime - the DateTime to compare this one to
       * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @example
       * var i1 = DateTime.fromISO('1982-05-25T09:45'),
       *     i2 = DateTime.fromISO('1983-10-14T10:30');
       * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
       * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
       * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
       * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
       * @return {Duration}
       */
      diff(otherDateTime, unit = "milliseconds", opts = {}) {
        if (!this.isValid || !otherDateTime.isValid) {
          return Duration.invalid("created by diffing an invalid DateTime");
        }
        const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
        const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
        return otherIsLater ? diffed.negate() : diffed;
      }
      /**
       * Return the difference between this DateTime and right now.
       * See {@link DateTime#diff}
       * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
       * @param {Object} opts - options that affect the creation of the Duration
       * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
       * @return {Duration}
       */
      diffNow(unit = "milliseconds", opts = {}) {
        return this.diff(DateTime.now(), unit, opts);
      }
      /**
       * Return an Interval spanning between this DateTime and another DateTime
       * @param {DateTime} otherDateTime - the other end point of the Interval
       * @return {Interval}
       */
      until(otherDateTime) {
        return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
      }
      /**
       * Return whether this DateTime is in the same unit of time as another DateTime.
       * Higher-order units must also be identical for this function to return `true`.
       * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
       * @param {DateTime} otherDateTime - the other DateTime
       * @param {string} unit - the unit of time to check sameness on
       * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
       * @return {boolean}
       */
      hasSame(otherDateTime, unit) {
        if (!this.isValid)
          return false;
        const inputMs = otherDateTime.valueOf();
        const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
        return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
      }
      /**
       * Equality check
       * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
       * To compare just the millisecond values, use `+dt1 === +dt2`.
       * @param {DateTime} other - the other DateTime
       * @return {boolean}
       */
      equals(other) {
        return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
      }
      /**
       * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
       * platform supports Intl.RelativeTimeFormat. Rounds down by default.
       * @param {Object} options - options that affect the output
       * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
       * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
       * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
       * @param {boolean} [options.round=true] - whether to round the numbers in the output.
       * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
       * @param {string} options.locale - override the locale of this DateTime
       * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
       * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
       * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
       * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
       * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
       * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
       * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
       */
      toRelative(options = {}) {
        if (!this.isValid)
          return null;
        const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
        let units = ["years", "months", "days", "hours", "minutes", "seconds"];
        let unit = options.unit;
        if (Array.isArray(options.unit)) {
          units = options.unit;
          unit = void 0;
        }
        return diffRelative(base, this.plus(padding), {
          ...options,
          numeric: "always",
          units,
          unit
        });
      }
      /**
       * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
       * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
       * @param {Object} options - options that affect the output
       * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
       * @param {string} options.locale - override the locale of this DateTime
       * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
       * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
       * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
       * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
       * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
       * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
       */
      toRelativeCalendar(options = {}) {
        if (!this.isValid)
          return null;
        return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
          ...options,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: true
        });
      }
      /**
       * Return the min of several date times
       * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
       * @return {DateTime} the min DateTime, or undefined if called with no argument
       */
      static min(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
          throw new InvalidArgumentError("min requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
      }
      /**
       * Return the max of several date times
       * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
       * @return {DateTime} the max DateTime, or undefined if called with no argument
       */
      static max(...dateTimes) {
        if (!dateTimes.every(DateTime.isDateTime)) {
          throw new InvalidArgumentError("max requires all arguments be DateTimes");
        }
        return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
      }
      // MISC
      /**
       * Explain how a string would be parsed by fromFormat()
       * @param {string} text - the string to parse
       * @param {string} fmt - the format the string is expected to be in (see description)
       * @param {Object} options - options taken by fromFormat()
       * @return {Object}
       */
      static fromFormatExplain(text, fmt, options = {}) {
        const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
          locale,
          numberingSystem,
          defaultToEN: true
        });
        return explainFromTokens(localeToUse, text, fmt);
      }
      /**
       * @deprecated use fromFormatExplain instead
       */
      static fromStringExplain(text, fmt, options = {}) {
        return DateTime.fromFormatExplain(text, fmt, options);
      }
      // FORMAT PRESETS
      /**
       * {@link DateTime#toLocaleString} format like 10/14/1983
       * @type {Object}
       */
      static get DATE_SHORT() {
        return DATE_SHORT;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
       * @type {Object}
       */
      static get DATE_MED() {
        return DATE_MED;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
       * @type {Object}
       */
      static get DATE_MED_WITH_WEEKDAY() {
        return DATE_MED_WITH_WEEKDAY;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983'
       * @type {Object}
       */
      static get DATE_FULL() {
        return DATE_FULL;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
       * @type {Object}
       */
      static get DATE_HUGE() {
        return DATE_HUGE;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_SIMPLE() {
        return TIME_SIMPLE;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_SECONDS() {
        return TIME_WITH_SECONDS;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_SHORT_OFFSET() {
        return TIME_WITH_SHORT_OFFSET;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get TIME_WITH_LONG_OFFSET() {
        return TIME_WITH_LONG_OFFSET;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_SIMPLE() {
        return TIME_24_SIMPLE;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_SECONDS() {
        return TIME_24_WITH_SECONDS;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_SHORT_OFFSET() {
        return TIME_24_WITH_SHORT_OFFSET;
      }
      /**
       * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
       * @type {Object}
       */
      static get TIME_24_WITH_LONG_OFFSET() {
        return TIME_24_WITH_LONG_OFFSET;
      }
      /**
       * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_SHORT() {
        return DATETIME_SHORT;
      }
      /**
       * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_SHORT_WITH_SECONDS() {
        return DATETIME_SHORT_WITH_SECONDS;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED() {
        return DATETIME_MED;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED_WITH_SECONDS() {
        return DATETIME_MED_WITH_SECONDS;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_MED_WITH_WEEKDAY() {
        return DATETIME_MED_WITH_WEEKDAY;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_FULL() {
        return DATETIME_FULL;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_FULL_WITH_SECONDS() {
        return DATETIME_FULL_WITH_SECONDS;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_HUGE() {
        return DATETIME_HUGE;
      }
      /**
       * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */
      static get DATETIME_HUGE_WITH_SECONDS() {
        return DATETIME_HUGE_WITH_SECONDS;
      }
    };
    function friendlyDateTime(dateTimeish) {
      if (DateTime.isDateTime(dateTimeish)) {
        return dateTimeish;
      } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
        return DateTime.fromJSDate(dateTimeish);
      } else if (dateTimeish && typeof dateTimeish === "object") {
        return DateTime.fromObject(dateTimeish);
      } else {
        throw new InvalidArgumentError(
          `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
        );
      }
    }
    var DEFAULT_QUERY_SETTINGS = {
      renderNullAs: "\\-",
      taskCompletionTracking: false,
      taskCompletionUseEmojiShorthand: false,
      taskCompletionText: "completion",
      taskCompletionDateFormat: "yyyy-MM-dd",
      recursiveSubTaskCompletion: false,
      warnOnEmptyResult: true,
      refreshEnabled: true,
      refreshInterval: 2500,
      defaultDateFormat: "MMMM dd, yyyy",
      defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
      maxRecursiveRenderDepth: 4,
      tableIdColumnName: "File",
      tableGroupColumnName: "Group",
      showResultCount: true
    };
    var DEFAULT_EXPORT_SETTINGS = {
      allowHtml: true
    };
    ({
      ...DEFAULT_QUERY_SETTINGS,
      ...DEFAULT_EXPORT_SETTINGS,
      ...{
        inlineQueryPrefix: "=",
        inlineJsQueryPrefix: "$=",
        inlineQueriesInCodeblocks: true,
        enableInlineDataview: true,
        enableDataviewJs: false,
        enableInlineDataviewJs: false,
        prettyRenderInlineFields: true,
        prettyRenderInlineFieldsInLivePreview: true,
        dataviewJsKeyword: "dataviewjs"
      }
    });
    var Success = class {
      constructor(value) {
        __publicField(this, "value");
        __publicField(this, "successful");
        this.value = value;
        this.successful = true;
      }
      map(f) {
        return new Success(f(this.value));
      }
      flatMap(f) {
        return f(this.value);
      }
      mapErr(f) {
        return this;
      }
      bimap(succ, _fail) {
        return this.map(succ);
      }
      orElse(_value) {
        return this.value;
      }
      cast() {
        return this;
      }
      orElseThrow(_message) {
        return this.value;
      }
    };
    var Failure = class {
      constructor(error) {
        __publicField(this, "error");
        __publicField(this, "successful");
        this.error = error;
        this.successful = false;
      }
      map(_f) {
        return this;
      }
      flatMap(_f) {
        return this;
      }
      mapErr(f) {
        return new Failure(f(this.error));
      }
      bimap(_succ, fail) {
        return this.mapErr(fail);
      }
      orElse(value) {
        return value;
      }
      cast() {
        return this;
      }
      orElseThrow(message) {
        if (message)
          throw new Error(message(this.error));
        else
          throw new Error("" + this.error);
      }
    };
    var Result;
    (function(Result2) {
      function success(value) {
        return new Success(value);
      }
      Result2.success = success;
      function failure(error) {
        return new Failure(error);
      }
      Result2.failure = failure;
      function flatMap2(first, second, f) {
        if (first.successful) {
          if (second.successful)
            return f(first.value, second.value);
          else
            return failure(second.error);
        } else {
          return failure(first.error);
        }
      }
      Result2.flatMap2 = flatMap2;
      function map2(first, second, f) {
        return flatMap2(first, second, (a, b) => success(f(a, b)));
      }
      Result2.map2 = map2;
    })(Result || (Result = {}));
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    var parsimmon_umd_min = { exports: {} };
    parsimmon_umd_min.exports;
    (function(module3, exports2) {
      !function(n2, t2) {
        module3.exports = t2();
      }("undefined" != typeof self ? self : commonjsGlobal, function() {
        return function(n2) {
          var t2 = {};
          function r(e) {
            if (t2[e])
              return t2[e].exports;
            var u = t2[e] = { i: e, l: false, exports: {} };
            return n2[e].call(u.exports, u, u.exports, r), u.l = true, u.exports;
          }
          return r.m = n2, r.c = t2, r.d = function(n3, t3, e) {
            r.o(n3, t3) || Object.defineProperty(n3, t3, { configurable: false, enumerable: true, get: e });
          }, r.r = function(n3) {
            Object.defineProperty(n3, "__esModule", { value: true });
          }, r.n = function(n3) {
            var t3 = n3 && n3.__esModule ? function() {
              return n3.default;
            } : function() {
              return n3;
            };
            return r.d(t3, "a", t3), t3;
          }, r.o = function(n3, t3) {
            return Object.prototype.hasOwnProperty.call(n3, t3);
          }, r.p = "", r(r.s = 0);
        }([function(n2, t2, r) {
          function e(n3) {
            if (!(this instanceof e))
              return new e(n3);
            this._ = n3;
          }
          var u = e.prototype;
          function o(n3, t3) {
            for (var r2 = 0; r2 < n3; r2++)
              t3(r2);
          }
          function i(n3, t3, r2) {
            return function(n4, t4) {
              o(t4.length, function(r3) {
                n4(t4[r3], r3, t4);
              });
            }(function(r3, e2, u2) {
              t3 = n3(t3, r3, e2, u2);
            }, r2), t3;
          }
          function a(n3, t3) {
            return i(function(t4, r2, e2, u2) {
              return t4.concat([n3(r2, e2, u2)]);
            }, [], t3);
          }
          function f(n3, t3) {
            var r2 = { v: 0, buf: t3 };
            return o(n3, function() {
              var n4;
              r2 = { v: r2.v << 1 | (n4 = r2.buf, n4[0] >> 7), buf: function(n5) {
                var t4 = i(function(n6, t5, r3, e2) {
                  return n6.concat(r3 === e2.length - 1 ? Buffer.from([t5, 0]).readUInt16BE(0) : e2.readUInt16BE(r3));
                }, [], n5);
                return Buffer.from(a(function(n6) {
                  return (n6 << 1 & 65535) >> 8;
                }, t4));
              }(r2.buf) };
            }), r2;
          }
          function c() {
            return "undefined" != typeof Buffer;
          }
          function s2() {
            if (!c())
              throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
          }
          function l2(n3) {
            s2();
            var t3 = i(function(n4, t4) {
              return n4 + t4;
            }, 0, n3);
            if (t3 % 8 != 0)
              throw new Error("The bits [" + n3.join(", ") + "] add up to " + t3 + " which is not an even number of bytes; the total should be divisible by 8");
            var r2, u2 = t3 / 8, o2 = (r2 = function(n4) {
              return n4 > 48;
            }, i(function(n4, t4) {
              return n4 || (r2(t4) ? t4 : n4);
            }, null, n3));
            if (o2)
              throw new Error(o2 + " bit range requested exceeds 48 bit (6 byte) Number max.");
            return new e(function(t4, r3) {
              var e2 = u2 + r3;
              return e2 > t4.length ? x(r3, u2.toString() + " bytes") : b(e2, i(function(n4, t5) {
                var r4 = f(t5, n4.buf);
                return { coll: n4.coll.concat(r4.v), buf: r4.buf };
              }, { coll: [], buf: t4.slice(r3, e2) }, n3).coll);
            });
          }
          function h(n3, t3) {
            return new e(function(r2, e2) {
              return s2(), e2 + t3 > r2.length ? x(e2, t3 + " bytes for " + n3) : b(e2 + t3, r2.slice(e2, e2 + t3));
            });
          }
          function p(n3, t3) {
            if ("number" != typeof (r2 = t3) || Math.floor(r2) !== r2 || t3 < 0 || t3 > 6)
              throw new Error(n3 + " requires integer length in range [0, 6].");
            var r2;
          }
          function d(n3) {
            return p("uintBE", n3), h("uintBE(" + n3 + ")", n3).map(function(t3) {
              return t3.readUIntBE(0, n3);
            });
          }
          function v(n3) {
            return p("uintLE", n3), h("uintLE(" + n3 + ")", n3).map(function(t3) {
              return t3.readUIntLE(0, n3);
            });
          }
          function g(n3) {
            return p("intBE", n3), h("intBE(" + n3 + ")", n3).map(function(t3) {
              return t3.readIntBE(0, n3);
            });
          }
          function m(n3) {
            return p("intLE", n3), h("intLE(" + n3 + ")", n3).map(function(t3) {
              return t3.readIntLE(0, n3);
            });
          }
          function y(n3) {
            return n3 instanceof e;
          }
          function E(n3) {
            return "[object Array]" === {}.toString.call(n3);
          }
          function w(n3) {
            return c() && Buffer.isBuffer(n3);
          }
          function b(n3, t3) {
            return { status: true, index: n3, value: t3, furthest: -1, expected: [] };
          }
          function x(n3, t3) {
            return E(t3) || (t3 = [t3]), { status: false, index: -1, value: null, furthest: n3, expected: t3 };
          }
          function B(n3, t3) {
            if (!t3)
              return n3;
            if (n3.furthest > t3.furthest)
              return n3;
            var r2 = n3.furthest === t3.furthest ? function(n4, t4) {
              if (function() {
                if (void 0 !== e._supportsSet)
                  return e._supportsSet;
                var n5 = "undefined" != typeof Set;
                return e._supportsSet = n5, n5;
              }() && Array.from) {
                for (var r3 = new Set(n4), u2 = 0; u2 < t4.length; u2++)
                  r3.add(t4[u2]);
                var o2 = Array.from(r3);
                return o2.sort(), o2;
              }
              for (var i2 = {}, a2 = 0; a2 < n4.length; a2++)
                i2[n4[a2]] = true;
              for (var f2 = 0; f2 < t4.length; f2++)
                i2[t4[f2]] = true;
              var c2 = [];
              for (var s3 in i2)
                ({}).hasOwnProperty.call(i2, s3) && c2.push(s3);
              return c2.sort(), c2;
            }(n3.expected, t3.expected) : t3.expected;
            return { status: n3.status, index: n3.index, value: n3.value, furthest: t3.furthest, expected: r2 };
          }
          var j = {};
          function S(n3, t3) {
            if (w(n3))
              return { offset: t3, line: -1, column: -1 };
            n3 in j || (j[n3] = {});
            for (var r2 = j[n3], e2 = 0, u2 = 0, o2 = 0, i2 = t3; i2 >= 0; ) {
              if (i2 in r2) {
                e2 = r2[i2].line, 0 === o2 && (o2 = r2[i2].lineStart);
                break;
              }
              ("\n" === n3.charAt(i2) || "\r" === n3.charAt(i2) && "\n" !== n3.charAt(i2 + 1)) && (u2++, 0 === o2 && (o2 = i2 + 1)), i2--;
            }
            var a2 = e2 + u2, f2 = t3 - o2;
            return r2[t3] = { line: a2, lineStart: o2 }, { offset: t3, line: a2 + 1, column: f2 + 1 };
          }
          function _(n3) {
            if (!y(n3))
              throw new Error("not a parser: " + n3);
          }
          function L(n3, t3) {
            return "string" == typeof n3 ? n3.charAt(t3) : n3[t3];
          }
          function O(n3) {
            if ("number" != typeof n3)
              throw new Error("not a number: " + n3);
          }
          function k(n3) {
            if ("function" != typeof n3)
              throw new Error("not a function: " + n3);
          }
          function P(n3) {
            if ("string" != typeof n3)
              throw new Error("not a string: " + n3);
          }
          var q = 2, A = 3, I = 8, F = 5 * I, M = 4 * I, z = "  ";
          function R(n3, t3) {
            return new Array(t3 + 1).join(n3);
          }
          function U(n3, t3, r2) {
            var e2 = t3 - n3.length;
            return e2 <= 0 ? n3 : R(r2, e2) + n3;
          }
          function W(n3, t3, r2, e2) {
            return { from: n3 - t3 > 0 ? n3 - t3 : 0, to: n3 + r2 > e2 ? e2 : n3 + r2 };
          }
          function D(n3, t3) {
            var r2, e2, u2, o2, f2, c2 = t3.index, s3 = c2.offset, l3 = 1;
            if (s3 === n3.length)
              return "Got the end of the input";
            if (w(n3)) {
              var h2 = s3 - s3 % I, p2 = s3 - h2, d2 = W(h2, F, M + I, n3.length), v2 = a(function(n4) {
                return a(function(n5) {
                  return U(n5.toString(16), 2, "0");
                }, n4);
              }, function(n4, t4) {
                var r3 = n4.length, e3 = [], u3 = 0;
                if (r3 <= t4)
                  return [n4.slice()];
                for (var o3 = 0; o3 < r3; o3++)
                  e3[u3] || e3.push([]), e3[u3].push(n4[o3]), (o3 + 1) % t4 == 0 && u3++;
                return e3;
              }(n3.slice(d2.from, d2.to).toJSON().data, I));
              o2 = function(n4) {
                return 0 === n4.from && 1 === n4.to ? { from: n4.from, to: n4.to } : { from: n4.from / I, to: Math.floor(n4.to / I) };
              }(d2), e2 = h2 / I, r2 = 3 * p2, p2 >= 4 && (r2 += 1), l3 = 2, u2 = a(function(n4) {
                return n4.length <= 4 ? n4.join(" ") : n4.slice(0, 4).join(" ") + "  " + n4.slice(4).join(" ");
              }, v2), (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2);
            } else {
              var g2 = n3.split(/\r\n|[\n\r\u2028\u2029]/);
              r2 = c2.column - 1, e2 = c2.line - 1, o2 = W(e2, q, A, g2.length), u2 = g2.slice(o2.from, o2.to), f2 = o2.to.toString().length;
            }
            var m2 = e2 - o2.from;
            return w(n3) && (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2), i(function(t4, e3, u3) {
              var i2, a2 = u3 === m2, c3 = a2 ? "> " : z;
              return i2 = w(n3) ? U((8 * (o2.from + u3)).toString(16), f2, "0") : U((o2.from + u3 + 1).toString(), f2, " "), [].concat(t4, [c3 + i2 + " | " + e3], a2 ? [z + R(" ", f2) + " | " + U("", r2, " ") + R("^", l3)] : []);
            }, [], u2).join("\n");
          }
          function N(n3, t3) {
            return ["\n", "-- PARSING FAILED " + R("-", 50), "\n\n", D(n3, t3), "\n\n", (r2 = t3.expected, 1 === r2.length ? "Expected:\n\n" + r2[0] : "Expected one of the following: \n\n" + r2.join(", ")), "\n"].join("");
            var r2;
          }
          function G(n3) {
            return void 0 !== n3.flags ? n3.flags : [n3.global ? "g" : "", n3.ignoreCase ? "i" : "", n3.multiline ? "m" : "", n3.unicode ? "u" : "", n3.sticky ? "y" : ""].join("");
          }
          function C() {
            for (var n3 = [].slice.call(arguments), t3 = n3.length, r2 = 0; r2 < t3; r2 += 1)
              _(n3[r2]);
            return e(function(r3, e2) {
              for (var u2, o2 = new Array(t3), i2 = 0; i2 < t3; i2 += 1) {
                if (!(u2 = B(n3[i2]._(r3, e2), u2)).status)
                  return u2;
                o2[i2] = u2.value, e2 = u2.index;
              }
              return B(b(e2, o2), u2);
            });
          }
          function J() {
            var n3 = [].slice.call(arguments);
            if (0 === n3.length)
              throw new Error("seqMap needs at least one argument");
            var t3 = n3.pop();
            return k(t3), C.apply(null, n3).map(function(n4) {
              return t3.apply(null, n4);
            });
          }
          function T() {
            var n3 = [].slice.call(arguments), t3 = n3.length;
            if (0 === t3)
              return Y("zero alternates");
            for (var r2 = 0; r2 < t3; r2 += 1)
              _(n3[r2]);
            return e(function(t4, r3) {
              for (var e2, u2 = 0; u2 < n3.length; u2 += 1)
                if ((e2 = B(n3[u2]._(t4, r3), e2)).status)
                  return e2;
              return e2;
            });
          }
          function V(n3, t3) {
            return H(n3, t3).or(X([]));
          }
          function H(n3, t3) {
            return _(n3), _(t3), J(n3, t3.then(n3).many(), function(n4, t4) {
              return [n4].concat(t4);
            });
          }
          function K(n3) {
            P(n3);
            var t3 = "'" + n3 + "'";
            return e(function(r2, e2) {
              var u2 = e2 + n3.length, o2 = r2.slice(e2, u2);
              return o2 === n3 ? b(u2, o2) : x(e2, t3);
            });
          }
          function Q(n3, t3) {
            !function(n4) {
              if (!(n4 instanceof RegExp))
                throw new Error("not a regexp: " + n4);
              for (var t4 = G(n4), r3 = 0; r3 < t4.length; r3++) {
                var e2 = t4.charAt(r3);
                if ("i" !== e2 && "m" !== e2 && "u" !== e2 && "s" !== e2)
                  throw new Error('unsupported regexp flag "' + e2 + '": ' + n4);
              }
            }(n3), arguments.length >= 2 ? O(t3) : t3 = 0;
            var r2 = function(n4) {
              return RegExp("^(?:" + n4.source + ")", G(n4));
            }(n3), u2 = "" + n3;
            return e(function(n4, e2) {
              var o2 = r2.exec(n4.slice(e2));
              if (o2) {
                if (0 <= t3 && t3 <= o2.length) {
                  var i2 = o2[0], a2 = o2[t3];
                  return b(e2 + i2.length, a2);
                }
                return x(e2, "valid match group (0 to " + o2.length + ") in " + u2);
              }
              return x(e2, u2);
            });
          }
          function X(n3) {
            return e(function(t3, r2) {
              return b(r2, n3);
            });
          }
          function Y(n3) {
            return e(function(t3, r2) {
              return x(r2, n3);
            });
          }
          function Z(n3) {
            if (y(n3))
              return e(function(t3, r2) {
                var e2 = n3._(t3, r2);
                return e2.index = r2, e2.value = "", e2;
              });
            if ("string" == typeof n3)
              return Z(K(n3));
            if (n3 instanceof RegExp)
              return Z(Q(n3));
            throw new Error("not a string, regexp, or parser: " + n3);
          }
          function $(n3) {
            return _(n3), e(function(t3, r2) {
              var e2 = n3._(t3, r2), u2 = t3.slice(r2, e2.index);
              return e2.status ? x(r2, 'not "' + u2 + '"') : b(r2, null);
            });
          }
          function nn(n3) {
            return k(n3), e(function(t3, r2) {
              var e2 = L(t3, r2);
              return r2 < t3.length && n3(e2) ? b(r2 + 1, e2) : x(r2, "a character/byte matching " + n3);
            });
          }
          function tn(n3, t3) {
            arguments.length < 2 && (t3 = n3, n3 = void 0);
            var r2 = e(function(n4, e2) {
              return r2._ = t3()._, r2._(n4, e2);
            });
            return n3 ? r2.desc(n3) : r2;
          }
          function rn() {
            return Y("fantasy-land/empty");
          }
          u.parse = function(n3) {
            if ("string" != typeof n3 && !w(n3))
              throw new Error(".parse must be called with a string or Buffer as its argument");
            var t3, r2 = this.skip(an)._(n3, 0);
            return t3 = r2.status ? { status: true, value: r2.value } : { status: false, index: S(n3, r2.furthest), expected: r2.expected }, delete j[n3], t3;
          }, u.tryParse = function(n3) {
            var t3 = this.parse(n3);
            if (t3.status)
              return t3.value;
            var r2 = N(n3, t3), e2 = new Error(r2);
            throw e2.type = "ParsimmonError", e2.result = t3, e2;
          }, u.assert = function(n3, t3) {
            return this.chain(function(r2) {
              return n3(r2) ? X(r2) : Y(t3);
            });
          }, u.or = function(n3) {
            return T(this, n3);
          }, u.trim = function(n3) {
            return this.wrap(n3, n3);
          }, u.wrap = function(n3, t3) {
            return J(n3, this, t3, function(n4, t4) {
              return t4;
            });
          }, u.thru = function(n3) {
            return n3(this);
          }, u.then = function(n3) {
            return _(n3), C(this, n3).map(function(n4) {
              return n4[1];
            });
          }, u.many = function() {
            var n3 = this;
            return e(function(t3, r2) {
              for (var e2 = [], u2 = void 0; ; ) {
                if (!(u2 = B(n3._(t3, r2), u2)).status)
                  return B(b(r2, e2), u2);
                if (r2 === u2.index)
                  throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
                r2 = u2.index, e2.push(u2.value);
              }
            });
          }, u.tieWith = function(n3) {
            return P(n3), this.map(function(t3) {
              if (function(n4) {
                if (!E(n4))
                  throw new Error("not an array: " + n4);
              }(t3), t3.length) {
                P(t3[0]);
                for (var r2 = t3[0], e2 = 1; e2 < t3.length; e2++)
                  P(t3[e2]), r2 += n3 + t3[e2];
                return r2;
              }
              return "";
            });
          }, u.tie = function() {
            return this.tieWith("");
          }, u.times = function(n3, t3) {
            var r2 = this;
            return arguments.length < 2 && (t3 = n3), O(n3), O(t3), e(function(e2, u2) {
              for (var o2 = [], i2 = void 0, a2 = void 0, f2 = 0; f2 < n3; f2 += 1) {
                if (a2 = B(i2 = r2._(e2, u2), a2), !i2.status)
                  return a2;
                u2 = i2.index, o2.push(i2.value);
              }
              for (; f2 < t3 && (a2 = B(i2 = r2._(e2, u2), a2), i2.status); f2 += 1)
                u2 = i2.index, o2.push(i2.value);
              return B(b(u2, o2), a2);
            });
          }, u.result = function(n3) {
            return this.map(function() {
              return n3;
            });
          }, u.atMost = function(n3) {
            return this.times(0, n3);
          }, u.atLeast = function(n3) {
            return J(this.times(n3), this.many(), function(n4, t3) {
              return n4.concat(t3);
            });
          }, u.map = function(n3) {
            k(n3);
            var t3 = this;
            return e(function(r2, e2) {
              var u2 = t3._(r2, e2);
              return u2.status ? B(b(u2.index, n3(u2.value)), u2) : u2;
            });
          }, u.contramap = function(n3) {
            k(n3);
            var t3 = this;
            return e(function(r2, e2) {
              var u2 = t3.parse(n3(r2.slice(e2)));
              return u2.status ? b(e2 + r2.length, u2.value) : u2;
            });
          }, u.promap = function(n3, t3) {
            return k(n3), k(t3), this.contramap(n3).map(t3);
          }, u.skip = function(n3) {
            return C(this, n3).map(function(n4) {
              return n4[0];
            });
          }, u.mark = function() {
            return J(en, this, en, function(n3, t3, r2) {
              return { start: n3, value: t3, end: r2 };
            });
          }, u.node = function(n3) {
            return J(en, this, en, function(t3, r2, e2) {
              return { name: n3, value: r2, start: t3, end: e2 };
            });
          }, u.sepBy = function(n3) {
            return V(this, n3);
          }, u.sepBy1 = function(n3) {
            return H(this, n3);
          }, u.lookahead = function(n3) {
            return this.skip(Z(n3));
          }, u.notFollowedBy = function(n3) {
            return this.skip($(n3));
          }, u.desc = function(n3) {
            E(n3) || (n3 = [n3]);
            var t3 = this;
            return e(function(r2, e2) {
              var u2 = t3._(r2, e2);
              return u2.status || (u2.expected = n3), u2;
            });
          }, u.fallback = function(n3) {
            return this.or(X(n3));
          }, u.ap = function(n3) {
            return J(n3, this, function(n4, t3) {
              return n4(t3);
            });
          }, u.chain = function(n3) {
            var t3 = this;
            return e(function(r2, e2) {
              var u2 = t3._(r2, e2);
              return u2.status ? B(n3(u2.value)._(r2, u2.index), u2) : u2;
            });
          }, u.concat = u.or, u.empty = rn, u.of = X, u["fantasy-land/ap"] = u.ap, u["fantasy-land/chain"] = u.chain, u["fantasy-land/concat"] = u.concat, u["fantasy-land/empty"] = u.empty, u["fantasy-land/of"] = u.of, u["fantasy-land/map"] = u.map;
          var en = e(function(n3, t3) {
            return b(t3, S(n3, t3));
          }), un = e(function(n3, t3) {
            return t3 >= n3.length ? x(t3, "any character/byte") : b(t3 + 1, L(n3, t3));
          }), on = e(function(n3, t3) {
            return b(n3.length, n3.slice(t3));
          }), an = e(function(n3, t3) {
            return t3 < n3.length ? x(t3, "EOF") : b(t3, null);
          }), fn = Q(/[0-9]/).desc("a digit"), cn = Q(/[0-9]*/).desc("optional digits"), sn = Q(/[a-z]/i).desc("a letter"), ln = Q(/[a-z]*/i).desc("optional letters"), hn = Q(/\s*/).desc("optional whitespace"), pn = Q(/\s+/).desc("whitespace"), dn = K("\r"), vn = K("\n"), gn = K("\r\n"), mn = T(gn, vn, dn).desc("newline"), yn = T(mn, an);
          e.all = on, e.alt = T, e.any = un, e.cr = dn, e.createLanguage = function(n3) {
            var t3 = {};
            for (var r2 in n3)
              ({}).hasOwnProperty.call(n3, r2) && function(r3) {
                t3[r3] = tn(function() {
                  return n3[r3](t3);
                });
              }(r2);
            return t3;
          }, e.crlf = gn, e.custom = function(n3) {
            return e(n3(b, x));
          }, e.digit = fn, e.digits = cn, e.empty = rn, e.end = yn, e.eof = an, e.fail = Y, e.formatError = N, e.index = en, e.isParser = y, e.lazy = tn, e.letter = sn, e.letters = ln, e.lf = vn, e.lookahead = Z, e.makeFailure = x, e.makeSuccess = b, e.newline = mn, e.noneOf = function(n3) {
            return nn(function(t3) {
              return n3.indexOf(t3) < 0;
            }).desc("none of '" + n3 + "'");
          }, e.notFollowedBy = $, e.of = X, e.oneOf = function(n3) {
            for (var t3 = n3.split(""), r2 = 0; r2 < t3.length; r2++)
              t3[r2] = "'" + t3[r2] + "'";
            return nn(function(t4) {
              return n3.indexOf(t4) >= 0;
            }).desc(t3);
          }, e.optWhitespace = hn, e.Parser = e, e.range = function(n3, t3) {
            return nn(function(r2) {
              return n3 <= r2 && r2 <= t3;
            }).desc(n3 + "-" + t3);
          }, e.regex = Q, e.regexp = Q, e.sepBy = V, e.sepBy1 = H, e.seq = C, e.seqMap = J, e.seqObj = function() {
            for (var n3, t3 = {}, r2 = 0, u2 = (n3 = arguments, Array.prototype.slice.call(n3)), o2 = u2.length, i2 = 0; i2 < o2; i2 += 1) {
              var a2 = u2[i2];
              if (!y(a2)) {
                if (E(a2) && 2 === a2.length && "string" == typeof a2[0] && y(a2[1])) {
                  var f2 = a2[0];
                  if (Object.prototype.hasOwnProperty.call(t3, f2))
                    throw new Error("seqObj: duplicate key " + f2);
                  t3[f2] = true, r2++;
                  continue;
                }
                throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
              }
            }
            if (0 === r2)
              throw new Error("seqObj expects at least one named parser, found zero");
            return e(function(n4, t4) {
              for (var r3, e2 = {}, i3 = 0; i3 < o2; i3 += 1) {
                var a3, f3;
                if (E(u2[i3]) ? (a3 = u2[i3][0], f3 = u2[i3][1]) : (a3 = null, f3 = u2[i3]), !(r3 = B(f3._(n4, t4), r3)).status)
                  return r3;
                a3 && (e2[a3] = r3.value), t4 = r3.index;
              }
              return B(b(t4, e2), r3);
            });
          }, e.string = K, e.succeed = X, e.takeWhile = function(n3) {
            return k(n3), e(function(t3, r2) {
              for (var e2 = r2; e2 < t3.length && n3(L(t3, e2)); )
                e2++;
              return b(e2, t3.slice(r2, e2));
            });
          }, e.test = nn, e.whitespace = pn, e["fantasy-land/empty"] = rn, e["fantasy-land/of"] = X, e.Binary = { bitSeq: l2, bitSeqObj: function(n3) {
            s2();
            var t3 = {}, r2 = 0, e2 = a(function(n4) {
              if (E(n4)) {
                var e3 = n4;
                if (2 !== e3.length)
                  throw new Error("[" + e3.join(", ") + "] should be length 2, got length " + e3.length);
                if (P(e3[0]), O(e3[1]), Object.prototype.hasOwnProperty.call(t3, e3[0]))
                  throw new Error("duplicate key in bitSeqObj: " + e3[0]);
                return t3[e3[0]] = true, r2++, e3;
              }
              return O(n4), [null, n4];
            }, n3);
            if (r2 < 1)
              throw new Error("bitSeqObj expects at least one named pair, got [" + n3.join(", ") + "]");
            var u2 = a(function(n4) {
              return n4[0];
            }, e2);
            return l2(a(function(n4) {
              return n4[1];
            }, e2)).map(function(n4) {
              return i(function(n5, t4) {
                return null !== t4[0] && (n5[t4[0]] = t4[1]), n5;
              }, {}, a(function(t4, r3) {
                return [t4, n4[r3]];
              }, u2));
            });
          }, byte: function(n3) {
            if (s2(), O(n3), n3 > 255)
              throw new Error("Value specified to byte constructor (" + n3 + "=0x" + n3.toString(16) + ") is larger in value than a single byte.");
            var t3 = (n3 > 15 ? "0x" : "0x0") + n3.toString(16);
            return e(function(r2, e2) {
              var u2 = L(r2, e2);
              return u2 === n3 ? b(e2 + 1, u2) : x(e2, t3);
            });
          }, buffer: function(n3) {
            return h("buffer", n3).map(function(n4) {
              return Buffer.from(n4);
            });
          }, encodedString: function(n3, t3) {
            return h("string", t3).map(function(t4) {
              return t4.toString(n3);
            });
          }, uintBE: d, uint8BE: d(1), uint16BE: d(2), uint32BE: d(4), uintLE: v, uint8LE: v(1), uint16LE: v(2), uint32LE: v(4), intBE: g, int8BE: g(1), int16BE: g(2), int32BE: g(4), intLE: m, int8LE: m(1), int16LE: m(2), int32LE: m(4), floatBE: h("floatBE", 4).map(function(n3) {
            return n3.readFloatBE(0);
          }), floatLE: h("floatLE", 4).map(function(n3) {
            return n3.readFloatLE(0);
          }), doubleBE: h("doubleBE", 8).map(function(n3) {
            return n3.readDoubleBE(0);
          }), doubleLE: h("doubleLE", 8).map(function(n3) {
            return n3.readDoubleLE(0);
          }) }, n2.exports = e;
        }]);
      });
    })(parsimmon_umd_min, parsimmon_umd_min.exports);
    var parsimmon_umd_minExports = parsimmon_umd_min.exports;
    var emojiRegex = () => {
      return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    };
    function normalizeDuration(dur) {
      if (dur === void 0 || dur === null)
        return dur;
      return dur.shiftToAll().normalize();
    }
    function getFileTitle(path5) {
      if (path5.includes("/"))
        path5 = path5.substring(path5.lastIndexOf("/") + 1);
      if (path5.endsWith(".md"))
        path5 = path5.substring(0, path5.length - 3);
      return path5;
    }
    parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_minExports.regex(/[0-9\p{Letter}_-]+/u).map((str) => str.toLocaleLowerCase()), parsimmon_umd_minExports.whitespace.map((_) => "-"), parsimmon_umd_minExports.any.map((_) => "")).many().map((result2) => result2.join(""));
    var HEADER_CANONICALIZER = parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_minExports.regex(/[0-9\p{Letter}_-]+/u), parsimmon_umd_minExports.whitespace.map((_) => " "), parsimmon_umd_minExports.any.map((_) => " ")).many().map((result2) => {
      return result2.join("").split(/\s+/).join(" ").trim();
    });
    function normalizeHeaderForLink(header) {
      return HEADER_CANONICALIZER.tryParse(header);
    }
    function renderMinimalDuration(dur) {
      dur = normalizeDuration(dur);
      dur = Duration.fromObject(Object.fromEntries(Object.entries(dur.toObject()).filter(([, quantity]) => quantity != 0)));
      return dur.toHuman();
    }
    var Values;
    (function(Values2) {
      function toString(field, setting = DEFAULT_QUERY_SETTINGS, recursive = false) {
        let wrapped = wrapValue(field);
        if (!wrapped)
          return setting.renderNullAs;
        switch (wrapped.type) {
          case "null":
            return setting.renderNullAs;
          case "string":
            return wrapped.value;
          case "number":
          case "boolean":
            return "" + wrapped.value;
          case "html":
            return wrapped.value.outerHTML;
          case "widget":
            return wrapped.value.markdown();
          case "link":
            return wrapped.value.markdown();
          case "function":
            return "<function>";
          case "array":
            let result2 = "";
            if (recursive)
              result2 += "[";
            result2 += wrapped.value.map((f) => toString(f, setting, true)).join(", ");
            if (recursive)
              result2 += "]";
            return result2;
          case "object":
            return "{ " + Object.entries(wrapped.value).map((e) => e[0] + ": " + toString(e[1], setting, true)).join(", ") + " }";
          case "date":
            if (wrapped.value.second == 0 && wrapped.value.hour == 0 && wrapped.value.minute == 0) {
              return wrapped.value.toFormat(setting.defaultDateFormat);
            }
            return wrapped.value.toFormat(setting.defaultDateTimeFormat);
          case "duration":
            return renderMinimalDuration(wrapped.value);
        }
      }
      Values2.toString = toString;
      function wrapValue(val) {
        if (isNull(val))
          return { type: "null", value: val };
        else if (isNumber2(val))
          return { type: "number", value: val };
        else if (isString2(val))
          return { type: "string", value: val };
        else if (isBoolean(val))
          return { type: "boolean", value: val };
        else if (isDuration(val))
          return { type: "duration", value: val };
        else if (isDate2(val))
          return { type: "date", value: val };
        else if (isWidget(val))
          return { type: "widget", value: val };
        else if (isArray(val))
          return { type: "array", value: val };
        else if (isLink(val))
          return { type: "link", value: val };
        else if (isFunction(val))
          return { type: "function", value: val };
        else if (isHtml(val))
          return { type: "html", value: val };
        else if (isObject(val))
          return { type: "object", value: val };
        else
          return void 0;
      }
      Values2.wrapValue = wrapValue;
      function mapLeaves(val, func) {
        if (isObject(val)) {
          let result2 = {};
          for (let [key, value] of Object.entries(val))
            result2[key] = mapLeaves(value, func);
          return result2;
        } else if (isArray(val)) {
          let result2 = [];
          for (let value of val)
            result2.push(mapLeaves(value, func));
          return result2;
        } else {
          return func(val);
        }
      }
      Values2.mapLeaves = mapLeaves;
      function compareValue(val1, val2, linkNormalizer) {
        var _a, _b;
        if (val1 === void 0)
          val1 = null;
        if (val2 === void 0)
          val2 = null;
        if (val1 === null && val2 === null)
          return 0;
        else if (val1 === null)
          return -1;
        else if (val2 === null)
          return 1;
        let wrap1 = wrapValue(val1);
        let wrap2 = wrapValue(val2);
        if (wrap1 === void 0 && wrap2 === void 0)
          return 0;
        else if (wrap1 === void 0)
          return -1;
        else if (wrap2 === void 0)
          return 1;
        if (wrap1.type != wrap2.type)
          return wrap1.type.localeCompare(wrap2.type);
        if (wrap1.value === wrap2.value)
          return 0;
        switch (wrap1.type) {
          case "string":
            return wrap1.value.localeCompare(wrap2.value);
          case "number":
            if (wrap1.value < wrap2.value)
              return -1;
            else if (wrap1.value == wrap2.value)
              return 0;
            return 1;
          case "null":
            return 0;
          case "boolean":
            if (wrap1.value == wrap2.value)
              return 0;
            else
              return wrap1.value ? 1 : -1;
          case "link":
            let link1 = wrap1.value;
            let link2 = wrap2.value;
            let normalize = linkNormalizer != null ? linkNormalizer : (x) => x;
            let pathCompare = normalize(link1.path).localeCompare(normalize(link2.path));
            if (pathCompare != 0)
              return pathCompare;
            let typeCompare = link1.type.localeCompare(link2.type);
            if (typeCompare != 0)
              return typeCompare;
            if (link1.subpath && !link2.subpath)
              return 1;
            if (!link1.subpath && link2.subpath)
              return -1;
            if (!link1.subpath && !link2.subpath)
              return 0;
            return ((_a = link1.subpath) != null ? _a : "").localeCompare((_b = link2.subpath) != null ? _b : "");
          case "date":
            return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
          case "duration":
            return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
          case "array":
            let f1 = wrap1.value;
            let f2 = wrap2.value;
            for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
              let comp = compareValue(f1[index], f2[index]);
              if (comp != 0)
                return comp;
            }
            return f1.length - f2.length;
          case "object":
            let o1 = wrap1.value;
            let o2 = wrap2.value;
            let k1 = Array.from(Object.keys(o1));
            let k2 = Array.from(Object.keys(o2));
            k1.sort();
            k2.sort();
            let keyCompare = compareValue(k1, k2);
            if (keyCompare != 0)
              return keyCompare;
            for (let key of k1) {
              let comp = compareValue(o1[key], o2[key]);
              if (comp != 0)
                return comp;
            }
            return 0;
          case "widget":
          case "html":
          case "function":
            return 0;
        }
      }
      Values2.compareValue = compareValue;
      function typeOf(val) {
        var _a;
        return (_a = wrapValue(val)) == null ? void 0 : _a.type;
      }
      Values2.typeOf = typeOf;
      function isTruthy(field) {
        let wrapped = wrapValue(field);
        if (!wrapped)
          return false;
        switch (wrapped.type) {
          case "number":
            return wrapped.value != 0;
          case "string":
            return wrapped.value.length > 0;
          case "boolean":
            return wrapped.value;
          case "link":
            return !!wrapped.value.path;
          case "date":
            return wrapped.value.toMillis() != 0;
          case "duration":
            return wrapped.value.as("seconds") != 0;
          case "object":
            return Object.keys(wrapped.value).length > 0;
          case "array":
            return wrapped.value.length > 0;
          case "null":
            return false;
          case "html":
          case "widget":
          case "function":
            return true;
        }
      }
      Values2.isTruthy = isTruthy;
      function deepCopy(field) {
        if (field === null || field === void 0)
          return field;
        if (Values2.isArray(field)) {
          return [].concat(field.map((v) => deepCopy(v)));
        } else if (Values2.isObject(field)) {
          let result2 = {};
          for (let [key, value] of Object.entries(field))
            result2[key] = deepCopy(value);
          return result2;
        } else {
          return field;
        }
      }
      Values2.deepCopy = deepCopy;
      function isString2(val) {
        return typeof val == "string";
      }
      Values2.isString = isString2;
      function isNumber2(val) {
        return typeof val == "number";
      }
      Values2.isNumber = isNumber2;
      function isDate2(val) {
        return val instanceof DateTime;
      }
      Values2.isDate = isDate2;
      function isDuration(val) {
        return val instanceof Duration;
      }
      Values2.isDuration = isDuration;
      function isNull(val) {
        return val === null || val === void 0;
      }
      Values2.isNull = isNull;
      function isArray(val) {
        return Array.isArray(val);
      }
      Values2.isArray = isArray;
      function isBoolean(val) {
        return typeof val === "boolean";
      }
      Values2.isBoolean = isBoolean;
      function isLink(val) {
        return val instanceof Link;
      }
      Values2.isLink = isLink;
      function isWidget(val) {
        return val instanceof Widget;
      }
      Values2.isWidget = isWidget;
      function isHtml(val) {
        if (typeof HTMLElement !== "undefined") {
          return val instanceof HTMLElement;
        } else {
          return false;
        }
      }
      Values2.isHtml = isHtml;
      function isObject(val) {
        return typeof val == "object" && !isHtml(val) && !isWidget(val) && !isArray(val) && !isDuration(val) && !isDate2(val) && !isLink(val) && val !== void 0 && !isNull(val);
      }
      Values2.isObject = isObject;
      function isFunction(val) {
        return typeof val == "function";
      }
      Values2.isFunction = isFunction;
    })(Values || (Values = {}));
    var Groupings;
    (function(Groupings2) {
      function isElementGroup(entry) {
        return Values.isObject(entry) && Object.keys(entry).length == 2 && "key" in entry && "rows" in entry;
      }
      Groupings2.isElementGroup = isElementGroup;
      function isGrouping(entry) {
        for (let element of entry)
          if (!isElementGroup(element))
            return false;
        return true;
      }
      Groupings2.isGrouping = isGrouping;
      function count(elements) {
        if (isGrouping(elements)) {
          let result2 = 0;
          for (let subgroup of elements)
            result2 += count(subgroup.rows);
          return result2;
        } else {
          return elements.length;
        }
      }
      Groupings2.count = count;
    })(Groupings || (Groupings = {}));
    var Link = class {
      constructor(fields) {
        /** The file path this link points to. */
        __publicField(this, "path");
        /** The display name associated with the link. */
        __publicField(this, "display");
        /** The block ID or header this link points to within a file, if relevant. */
        __publicField(this, "subpath");
        /** Is this link an embedded link (!)? */
        __publicField(this, "embed");
        /** The type of this link, which determines what 'subpath' refers to, if anything. */
        __publicField(this, "type");
        Object.assign(this, fields);
      }
      /** Create a link to a specific file. */
      static file(path5, embed = false, display) {
        return new Link({
          path: path5,
          embed,
          display,
          subpath: void 0,
          type: "file"
        });
      }
      static infer(linkpath, embed = false, display) {
        if (linkpath.includes("#^")) {
          let split = linkpath.split("#^");
          return Link.block(split[0], split[1], embed, display);
        } else if (linkpath.includes("#")) {
          let split = linkpath.split("#");
          return Link.header(split[0], split[1], embed, display);
        } else
          return Link.file(linkpath, embed, display);
      }
      /** Create a link to a specific file and header in that file. */
      static header(path5, header, embed, display) {
        return new Link({
          path: path5,
          embed,
          display,
          subpath: normalizeHeaderForLink(header),
          type: "header"
        });
      }
      /** Create a link to a specific file and block in that file. */
      static block(path5, blockId, embed, display) {
        return new Link({
          path: path5,
          embed,
          display,
          subpath: blockId,
          type: "block"
        });
      }
      static fromObject(object) {
        return new Link(object);
      }
      /** Checks for link equality (i.e., that the links are pointing to the same exact location). */
      equals(other) {
        if (other == void 0 || other == null)
          return false;
        return this.path == other.path && this.type == other.type && this.subpath == other.subpath;
      }
      /** Convert this link to it's markdown representation. */
      toString() {
        return this.markdown();
      }
      /** Convert this link to a raw object which is serialization-friendly. */
      toObject() {
        return { path: this.path, type: this.type, subpath: this.subpath, display: this.display, embed: this.embed };
      }
      /** Update this link with a new path. */
      //@ts-ignore; error appeared after updating Obsidian to 0.15.4; it also updated other packages but didn't say which
      withPath(path5) {
        return new Link(Object.assign({}, this, { path: path5 }));
      }
      /** Return a new link which points to the same location but with a new display value. */
      withDisplay(display) {
        return new Link(Object.assign({}, this, { display }));
      }
      /** Convert a file link into a link to a specific header. */
      withHeader(header) {
        return Link.header(this.path, header, this.embed, this.display);
      }
      /** Convert any link into a link to its file. */
      toFile() {
        return Link.file(this.path, this.embed, this.display);
      }
      /** Convert this link into an embedded link. */
      toEmbed() {
        if (this.embed) {
          return this;
        } else {
          let link = new Link(this);
          link.embed = true;
          return link;
        }
      }
      /** Convert this link into a non-embedded link. */
      fromEmbed() {
        if (!this.embed) {
          return this;
        } else {
          let link = new Link(this);
          link.embed = false;
          return link;
        }
      }
      /** Convert this link to markdown so it can be rendered. */
      markdown() {
        let result2 = (this.embed ? "!" : "") + "[[" + this.obsidianLink();
        if (this.display) {
          result2 += "|" + this.display;
        } else {
          result2 += "|" + getFileTitle(this.path);
          if (this.type == "header" || this.type == "block")
            result2 += " > " + this.subpath;
        }
        result2 += "]]";
        return result2;
      }
      /** Convert the inner part of the link to something that Obsidian can open / understand. */
      obsidianLink() {
        var _a, _b;
        const escaped = this.path.replaceAll("|", "\\|");
        if (this.type == "header")
          return escaped + "#" + ((_a = this.subpath) == null ? void 0 : _a.replaceAll("|", "\\|"));
        if (this.type == "block")
          return escaped + "#^" + ((_b = this.subpath) == null ? void 0 : _b.replaceAll("|", "\\|"));
        else
          return escaped;
      }
      /** The stripped name of the file this link points to. */
      fileName() {
        return getFileTitle(this.path).replace(".md", "");
      }
    };
    var Widget = class {
      constructor($widget) {
        __publicField(this, "$widget");
        this.$widget = $widget;
      }
    };
    var ListPairWidget = class extends Widget {
      constructor(key, value) {
        super("dataview:list-pair");
        __publicField(this, "key");
        __publicField(this, "value");
        this.key = key;
        this.value = value;
      }
      markdown() {
        return `${Values.toString(this.key)}: ${Values.toString(this.value)}`;
      }
    };
    var ExternalLinkWidget = class extends Widget {
      constructor(url, display) {
        super("dataview:external-link");
        __publicField(this, "url");
        __publicField(this, "display");
        this.url = url;
        this.display = display;
      }
      markdown() {
        var _a;
        return `[${(_a = this.display) != null ? _a : this.url}](${this.url})`;
      }
    };
    var Widgets;
    (function(Widgets2) {
      function listPair(key, value) {
        return new ListPairWidget(key, value);
      }
      Widgets2.listPair = listPair;
      function externalLink(url, display) {
        return new ExternalLinkWidget(url, display);
      }
      Widgets2.externalLink = externalLink;
      function isListPair(widget) {
        return widget.$widget === "dataview:list-pair";
      }
      Widgets2.isListPair = isListPair;
      function isExternalLink(widget) {
        return widget.$widget === "dataview:external-link";
      }
      Widgets2.isExternalLink = isExternalLink;
      function isBuiltin(widget) {
        return isListPair(widget) || isExternalLink(widget);
      }
      Widgets2.isBuiltin = isBuiltin;
    })(Widgets || (Widgets = {}));
    var Fields;
    (function(Fields2) {
      function variable(name) {
        return { type: "variable", name };
      }
      Fields2.variable = variable;
      function literal(value) {
        return { type: "literal", value };
      }
      Fields2.literal = literal;
      function binaryOp(left, op, right) {
        return { type: "binaryop", left, op, right };
      }
      Fields2.binaryOp = binaryOp;
      function index(obj, index2) {
        return { type: "index", object: obj, index: index2 };
      }
      Fields2.index = index;
      function indexVariable(name) {
        let parts = name.split(".");
        let result2 = Fields2.variable(parts[0]);
        for (let index2 = 1; index2 < parts.length; index2++) {
          result2 = Fields2.index(result2, Fields2.literal(parts[index2]));
        }
        return result2;
      }
      Fields2.indexVariable = indexVariable;
      function lambda(args, value) {
        return { type: "lambda", arguments: args, value };
      }
      Fields2.lambda = lambda;
      function func(func2, args) {
        return { type: "function", func: func2, arguments: args };
      }
      Fields2.func = func;
      function list(values) {
        return { type: "list", values };
      }
      Fields2.list = list;
      function object(values) {
        return { type: "object", values };
      }
      Fields2.object = object;
      function negate(child) {
        return { type: "negated", child };
      }
      Fields2.negate = negate;
      function isCompareOp(op) {
        return op == "<=" || op == "<" || op == ">" || op == ">=" || op == "!=" || op == "=";
      }
      Fields2.isCompareOp = isCompareOp;
      Fields2.NULL = Fields2.literal(null);
    })(Fields || (Fields = {}));
    var Sources;
    (function(Sources2) {
      function tag(tag2) {
        return { type: "tag", tag: tag2 };
      }
      Sources2.tag = tag;
      function csv(path5) {
        return { type: "csv", path: path5 };
      }
      Sources2.csv = csv;
      function folder(prefix) {
        return { type: "folder", folder: prefix };
      }
      Sources2.folder = folder;
      function link(file, incoming) {
        return { type: "link", file, direction: incoming ? "incoming" : "outgoing" };
      }
      Sources2.link = link;
      function binaryOp(left, op, right) {
        return { type: "binaryop", left, op, right };
      }
      Sources2.binaryOp = binaryOp;
      function and(left, right) {
        return { type: "binaryop", left, op: "&", right };
      }
      Sources2.and = and;
      function or(left, right) {
        return { type: "binaryop", left, op: "|", right };
      }
      Sources2.or = or;
      function negate(child) {
        return { type: "negate", child };
      }
      Sources2.negate = negate;
      function empty() {
        return { type: "empty" };
      }
      Sources2.empty = empty;
    })(Sources || (Sources = {}));
    var EMOJI_REGEX = new RegExp(emojiRegex(), "");
    var DURATION_TYPES = {
      year: Duration.fromObject({ years: 1 }),
      years: Duration.fromObject({ years: 1 }),
      yr: Duration.fromObject({ years: 1 }),
      yrs: Duration.fromObject({ years: 1 }),
      month: Duration.fromObject({ months: 1 }),
      months: Duration.fromObject({ months: 1 }),
      mo: Duration.fromObject({ months: 1 }),
      mos: Duration.fromObject({ months: 1 }),
      week: Duration.fromObject({ weeks: 1 }),
      weeks: Duration.fromObject({ weeks: 1 }),
      wk: Duration.fromObject({ weeks: 1 }),
      wks: Duration.fromObject({ weeks: 1 }),
      w: Duration.fromObject({ weeks: 1 }),
      day: Duration.fromObject({ days: 1 }),
      days: Duration.fromObject({ days: 1 }),
      d: Duration.fromObject({ days: 1 }),
      hour: Duration.fromObject({ hours: 1 }),
      hours: Duration.fromObject({ hours: 1 }),
      hr: Duration.fromObject({ hours: 1 }),
      hrs: Duration.fromObject({ hours: 1 }),
      h: Duration.fromObject({ hours: 1 }),
      minute: Duration.fromObject({ minutes: 1 }),
      minutes: Duration.fromObject({ minutes: 1 }),
      min: Duration.fromObject({ minutes: 1 }),
      mins: Duration.fromObject({ minutes: 1 }),
      m: Duration.fromObject({ minutes: 1 }),
      second: Duration.fromObject({ seconds: 1 }),
      seconds: Duration.fromObject({ seconds: 1 }),
      sec: Duration.fromObject({ seconds: 1 }),
      secs: Duration.fromObject({ seconds: 1 }),
      s: Duration.fromObject({ seconds: 1 })
    };
    var DATE_SHORTHANDS = {
      now: () => DateTime.local(),
      today: () => DateTime.local().startOf("day"),
      yesterday: () => DateTime.local().startOf("day").minus(Duration.fromObject({ days: 1 })),
      tomorrow: () => DateTime.local().startOf("day").plus(Duration.fromObject({ days: 1 })),
      sow: () => DateTime.local().startOf("week"),
      "start-of-week": () => DateTime.local().startOf("week"),
      eow: () => DateTime.local().endOf("week"),
      "end-of-week": () => DateTime.local().endOf("week"),
      soy: () => DateTime.local().startOf("year"),
      "start-of-year": () => DateTime.local().startOf("year"),
      eoy: () => DateTime.local().endOf("year"),
      "end-of-year": () => DateTime.local().endOf("year"),
      som: () => DateTime.local().startOf("month"),
      "start-of-month": () => DateTime.local().startOf("month"),
      eom: () => DateTime.local().endOf("month"),
      "end-of-month": () => DateTime.local().endOf("month")
    };
    var KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
    function splitOnUnescapedPipe(link) {
      let pipe = -1;
      while ((pipe = link.indexOf("|", pipe + 1)) >= 0) {
        if (pipe > 0 && link[pipe - 1] == "\\")
          continue;
        return [link.substring(0, pipe).replace(/\\\|/g, "|"), link.substring(pipe + 1)];
      }
      return [link.replace(/\\\|/g, "|"), void 0];
    }
    function parseInnerLink(rawlink) {
      let [link, display] = splitOnUnescapedPipe(rawlink);
      return Link.infer(link, false, display);
    }
    function createBinaryParser(child, sep4, combine) {
      return parsimmon_umd_minExports.seqMap(child, parsimmon_umd_minExports.seq(parsimmon_umd_minExports.optWhitespace, sep4, parsimmon_umd_minExports.optWhitespace, child).many(), (first, rest) => {
        if (rest.length == 0)
          return first;
        let node = combine(first, rest[0][1], rest[0][3]);
        for (let index = 1; index < rest.length; index++) {
          node = combine(node, rest[index][1], rest[index][3]);
        }
        return node;
      });
    }
    function chainOpt(base, ...funcs) {
      return parsimmon_umd_minExports.custom((success, failure) => {
        return (input, i) => {
          let result2 = base._(input, i);
          if (!result2.status)
            return result2;
          for (let func of funcs) {
            let next = func(result2.value)._(input, result2.index);
            if (!next.status)
              return result2;
            result2 = next;
          }
          return result2;
        };
      });
    }
    var EXPRESSION = parsimmon_umd_minExports.createLanguage({
      // A floating point number; the decimal point is optional.
      number: (q) => parsimmon_umd_minExports.regexp(/-?[0-9]+(\.[0-9]+)?/).map((str) => Number.parseFloat(str)).desc("number"),
      // A quote-surrounded string which supports escape characters ('\').
      string: (q) => parsimmon_umd_minExports.string('"').then(parsimmon_umd_minExports.alt(q.escapeCharacter, parsimmon_umd_minExports.noneOf('"\\')).atLeast(0).map((chars2) => chars2.join(""))).skip(parsimmon_umd_minExports.string('"')).desc("string"),
      escapeCharacter: (_) => parsimmon_umd_minExports.string("\\").then(parsimmon_umd_minExports.any).map((escaped) => {
        if (escaped === '"')
          return '"';
        if (escaped === "\\")
          return "\\";
        else
          return "\\" + escaped;
      }),
      // A boolean true/false value.
      bool: (_) => parsimmon_umd_minExports.regexp(/true|false|True|False/).map((str) => str.toLowerCase() == "true").desc("boolean ('true' or 'false')"),
      // A tag of the form '#stuff/hello-there'.
      tag: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("#"), parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]/).desc("text")).many(), (start, rest) => start + rest.join("")).desc("tag ('#hello/stuff')"),
      // A variable identifier, which is alphanumeric and must start with a letter or... emoji.
      identifier: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/\p{Letter}/u), parsimmon_umd_minExports.regexp(EMOJI_REGEX).desc("text")), parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/[0-9\p{Letter}_-]/u), parsimmon_umd_minExports.regexp(EMOJI_REGEX).desc("text")).many(), (first, rest) => first + rest.join("")).desc("variable identifier"),
      // An Obsidian link of the form [[<link>]].
      link: (_) => parsimmon_umd_minExports.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map((linkInner) => parseInnerLink(linkInner)).desc("file link"),
      // An embeddable link which can start with '!'. This overlaps with the normal negation operator, so it is only
      // provided for metadata parsing.
      embedLink: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("!").atMost(1), q.link, (p, l2) => {
        if (p.length > 0)
          l2.embed = true;
        return l2;
      }).desc("file link"),
      // Binary plus or minus operator.
      binaryPlusMinus: (_) => parsimmon_umd_minExports.regexp(/\+|-/).map((str) => str).desc("'+' or '-'"),
      // Binary times or divide operator.
      binaryMulDiv: (_) => parsimmon_umd_minExports.regexp(/\*|\/|%/).map((str) => str).desc("'*' or '/' or '%'"),
      // Binary comparison operator.
      binaryCompareOp: (_) => parsimmon_umd_minExports.regexp(/>=|<=|!=|>|<|=/).map((str) => str).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
      // Binary boolean combination operator.
      binaryBooleanOp: (_) => parsimmon_umd_minExports.regexp(/and|or|&|\|/i).map((str) => {
        if (str.toLowerCase() == "and")
          return "&";
        else if (str.toLowerCase() == "or")
          return "|";
        else
          return str;
      }).desc("'and' or 'or'"),
      // A date which can be YYYY-MM[-DDTHH:mm:ss].
      rootDate: (_) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/\d{4}/), parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.regexp(/\d{2}/), (year, _2, month) => {
        return DateTime.fromObject({ year: Number.parseInt(year), month: Number.parseInt(month) });
      }).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
      dateShorthand: (_) => parsimmon_umd_minExports.alt(...Object.keys(DATE_SHORTHANDS).sort((a, b) => b.length - a.length).map(parsimmon_umd_minExports.string)),
      date: (q) => chainOpt(q.rootDate, (ym) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, day) => ym.set({ day: Number.parseInt(day) })), (ymd) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("T"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, hour) => ymd.set({ hour: Number.parseInt(hour) })), (ymdh) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string(":"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })), (ymdhm) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string(":"), parsimmon_umd_minExports.regexp(/\d{2}/), (_, second) => ymdhm.set({ second: Number.parseInt(second) })), (ymdhms) => parsimmon_umd_minExports.alt(
        parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("."), parsimmon_umd_minExports.regexp(/\d{3}/), (_, millisecond) => ymdhms.set({ millisecond: Number.parseInt(millisecond) })),
        parsimmon_umd_minExports.succeed(ymdhms)
        // pass
      ), (dt) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("+").or(parsimmon_umd_minExports.string("-")), parsimmon_umd_minExports.regexp(/\d{1,2}(:\d{2})?/), (pm, hr) => dt.setZone("UTC" + pm + hr, { keepLocalTime: true })), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("Z"), () => dt.setZone("utc", { keepLocalTime: true })), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("["), parsimmon_umd_minExports.regexp(/[0-9A-Za-z+-\/]+/u), parsimmon_umd_minExports.string("]"), (_a, zone, _b) => dt.setZone(zone, { keepLocalTime: true })))).assert((dt) => dt.isValid, "valid date").desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
      // A date, plus various shorthand times of day it could be.
      datePlus: (q) => parsimmon_umd_minExports.alt(q.dateShorthand.map((d) => DATE_SHORTHANDS[d]()), q.date).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS] or in shorthand"),
      // A duration of time.
      durationType: (_) => parsimmon_umd_minExports.alt(...Object.keys(DURATION_TYPES).sort((a, b) => b.length - a.length).map(parsimmon_umd_minExports.string)),
      duration: (q) => parsimmon_umd_minExports.seqMap(q.number, parsimmon_umd_minExports.optWhitespace, q.durationType, (count, _, t2) => DURATION_TYPES[t2].mapUnits((x) => x * count)).sepBy1(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace).or(parsimmon_umd_minExports.optWhitespace)).map((durations) => durations.reduce((p, c) => p.plus(c))).desc("duration like 4hr2min"),
      // A raw null value.
      rawNull: (_) => parsimmon_umd_minExports.string("null"),
      // Source parsing.
      tagSource: (q) => q.tag.map((tag) => Sources.tag(tag)),
      csvSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("csv(").skip(parsimmon_umd_minExports.optWhitespace), q.string, parsimmon_umd_minExports.string(")"), (_1, path5, _2) => Sources.csv(path5)),
      linkIncomingSource: (q) => q.link.map((link) => Sources.link(link.path, true)),
      linkOutgoingSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("outgoing(").skip(parsimmon_umd_minExports.optWhitespace), q.link, parsimmon_umd_minExports.string(")"), (_1, link, _2) => Sources.link(link.path, false)),
      folderSource: (q) => q.string.map((str) => Sources.folder(str)),
      parensSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.source, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_1, _2, field, _3, _4) => field),
      negateSource: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.alt(parsimmon_umd_minExports.string("-"), parsimmon_umd_minExports.string("!")), q.atomSource, (_, source) => Sources.negate(source)),
      atomSource: (q) => parsimmon_umd_minExports.alt(q.parensSource, q.negateSource, q.linkOutgoingSource, q.linkIncomingSource, q.folderSource, q.tagSource, q.csvSource),
      binaryOpSource: (q) => createBinaryParser(q.atomSource, q.binaryBooleanOp.map((s2) => s2), Sources.binaryOp),
      source: (q) => q.binaryOpSource,
      // Field parsing.
      variableField: (q) => q.identifier.chain((r) => {
        if (KEYWORDS.includes(r.toUpperCase())) {
          return parsimmon_umd_minExports.fail("Variable fields cannot be a keyword (" + KEYWORDS.join(" or ") + ")");
        } else {
          return parsimmon_umd_minExports.succeed(Fields.variable(r));
        }
      }).desc("variable"),
      numberField: (q) => q.number.map((val) => Fields.literal(val)).desc("number"),
      stringField: (q) => q.string.map((val) => Fields.literal(val)).desc("string"),
      boolField: (q) => q.bool.map((val) => Fields.literal(val)).desc("boolean"),
      dateField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("date("), parsimmon_umd_minExports.optWhitespace, q.datePlus, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (prefix, _1, date, _2, postfix) => Fields.literal(date)).desc("date"),
      durationField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("dur("), parsimmon_umd_minExports.optWhitespace, q.duration, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (prefix, _1, dur, _2, postfix) => Fields.literal(dur)).desc("duration"),
      nullField: (q) => q.rawNull.map((_) => Fields.NULL),
      linkField: (q) => q.link.map((f) => Fields.literal(f)),
      listField: (q) => q.field.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("[").skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.optWhitespace.then(parsimmon_umd_minExports.string("]"))).map((l2) => Fields.list(l2)).desc("list ('[1, 2, 3]')"),
      objectField: (q) => parsimmon_umd_minExports.seqMap(q.identifier.or(q.string), parsimmon_umd_minExports.string(":").trim(parsimmon_umd_minExports.optWhitespace), q.field, (name, _sep, value) => {
        return { name, value };
      }).sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("{").skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.optWhitespace.then(parsimmon_umd_minExports.string("}"))).map((vals) => {
        let res = {};
        for (let entry of vals)
          res[entry.name] = entry.value;
        return Fields.object(res);
      }).desc("object ('{ a: 1, b: 2 }')"),
      atomInlineField: (q) => parsimmon_umd_minExports.alt(q.date, q.duration.map((d) => normalizeDuration(d)), q.string, q.tag, q.embedLink, q.bool, q.number, q.rawNull),
      inlineFieldList: (q) => q.atomInlineField.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace).lookahead(q.atomInlineField)),
      inlineField: (q) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.seqMap(q.atomInlineField, parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace), q.inlineFieldList, (f, _s, l2) => [f].concat(l2)), q.atomInlineField),
      atomField: (q) => parsimmon_umd_minExports.alt(
        // Place embed links above negated fields as they are the special parser case '![[thing]]' and are generally unambigious.
        q.embedLink.map((l2) => Fields.literal(l2)),
        q.negatedField,
        q.linkField,
        q.listField,
        q.objectField,
        q.lambdaField,
        q.parensField,
        q.boolField,
        q.numberField,
        q.stringField,
        q.dateField,
        q.durationField,
        q.nullField,
        q.variableField
      ),
      indexField: (q) => parsimmon_umd_minExports.seqMap(q.atomField, parsimmon_umd_minExports.alt(q.dotPostfix, q.indexPostfix, q.functionPostfix).many(), (obj, postfixes) => {
        let result2 = obj;
        for (let post of postfixes) {
          switch (post.type) {
            case "dot":
              result2 = Fields.index(result2, Fields.literal(post.field));
              break;
            case "index":
              result2 = Fields.index(result2, post.field);
              break;
            case "function":
              result2 = Fields.func(result2, post.fields);
              break;
          }
        }
        return result2;
      }),
      negatedField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("!"), q.indexField, (_, field) => Fields.negate(field)).desc("negated field"),
      parensField: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.field, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_1, _2, field, _3, _4) => field),
      lambdaField: (q) => parsimmon_umd_minExports.seqMap(q.identifier.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)).wrap(parsimmon_umd_minExports.string("(").trim(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.string(")").trim(parsimmon_umd_minExports.optWhitespace)), parsimmon_umd_minExports.string("=>").trim(parsimmon_umd_minExports.optWhitespace), q.field, (ident, _ignore, value) => {
        return { type: "lambda", arguments: ident, value };
      }),
      dotPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("."), q.identifier, (_, field) => {
        return { type: "dot", field };
      }),
      indexPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("["), parsimmon_umd_minExports.optWhitespace, q.field, parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string("]"), (_, _2, field, _3, _4) => {
        return { type: "index", field };
      }),
      functionPostfix: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.string("("), parsimmon_umd_minExports.optWhitespace, q.field.sepBy(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), parsimmon_umd_minExports.optWhitespace, parsimmon_umd_minExports.string(")"), (_, _1, fields, _2, _3) => {
        return { type: "function", fields };
      }),
      // The precedence hierarchy of operators - multiply/divide, add/subtract, compare, and then boolean operations.
      binaryMulDivField: (q) => createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
      binaryPlusMinusField: (q) => createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
      binaryCompareField: (q) => createBinaryParser(q.binaryPlusMinusField, q.binaryCompareOp, Fields.binaryOp),
      binaryBooleanField: (q) => createBinaryParser(q.binaryCompareField, q.binaryBooleanOp, Fields.binaryOp),
      binaryOpField: (q) => q.binaryBooleanField,
      field: (q) => q.binaryOpField
    });
    function parseField(text) {
      try {
        return Result.success(EXPRESSION.field.tryParse(text));
      } catch (error) {
        return Result.failure("" + error);
      }
    }
    var QueryFields;
    (function(QueryFields2) {
      function named(name, field) {
        return { name, field };
      }
      QueryFields2.named = named;
      function sortBy(field, dir2) {
        return { field, direction: dir2 };
      }
      QueryFields2.sortBy = sortBy;
    })(QueryFields || (QueryFields = {}));
    function captureRaw(base) {
      return parsimmon_umd_minExports.custom((success, failure) => {
        return (input, i) => {
          let result2 = base._(input, i);
          if (!result2.status)
            return result2;
          return Object.assign({}, result2, { value: [result2.value, input.substring(i, result2.index)] });
        };
      });
    }
    function stripNewlines(text) {
      return text.split(/[\r\n]+/).map((t2) => t2.trim()).join("");
    }
    function precededByWhitespaceIfNotEof(if_eof, parser) {
      return parsimmon_umd_minExports.eof.map(if_eof).or(parsimmon_umd_minExports.whitespace.then(parser));
    }
    var QUERY_LANGUAGE = parsimmon_umd_minExports.createLanguage({
      // Simple atom parsing, like words, identifiers, numbers.
      queryType: (q) => parsimmon_umd_minExports.alt(parsimmon_umd_minExports.regexp(/TABLE|LIST|TASK|CALENDAR/i)).map((str) => str.toLowerCase()).desc("query type ('TABLE', 'LIST', 'TASK', or 'CALENDAR')"),
      explicitNamedField: (q) => parsimmon_umd_minExports.seqMap(EXPRESSION.field.skip(parsimmon_umd_minExports.whitespace), parsimmon_umd_minExports.regexp(/AS/i).skip(parsimmon_umd_minExports.whitespace), EXPRESSION.identifier.or(EXPRESSION.string), (field, _as, ident) => QueryFields.named(ident, field)),
      comment: () => parsimmon_umd_minExports.Parser((input, i) => {
        let line = input.substring(i);
        if (!line.startsWith("//"))
          return parsimmon_umd_minExports.makeFailure(i, "Not a comment");
        line = line.split("\n")[0];
        let comment = line.substring(2).trim();
        return parsimmon_umd_minExports.makeSuccess(i + line.length, comment);
      }),
      namedField: (q) => parsimmon_umd_minExports.alt(q.explicitNamedField, captureRaw(EXPRESSION.field).map(([value, text]) => QueryFields.named(stripNewlines(text), value))),
      sortField: (q) => parsimmon_umd_minExports.seqMap(EXPRESSION.field.skip(parsimmon_umd_minExports.optWhitespace), parsimmon_umd_minExports.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (field, dir2) => {
        let direction = dir2.length == 0 ? "ascending" : dir2[0].toLowerCase();
        if (direction == "desc")
          direction = "descending";
        if (direction == "asc")
          direction = "ascending";
        return {
          field,
          direction
        };
      }),
      headerClause: (q) => q.queryType.chain((type) => {
        switch (type) {
          case "table": {
            return precededByWhitespaceIfNotEof(() => ({ type, fields: [], showId: true }), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_minExports.optWhitespace).atMost(1), parsimmon_umd_minExports.sepBy(q.namedField, parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), (withoutId, fields) => {
              return { type, fields, showId: withoutId.length == 0 };
            }));
          }
          case "list":
            return precededByWhitespaceIfNotEof(() => ({ type, format: void 0, showId: true }), parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_minExports.optWhitespace).atMost(1), EXPRESSION.field.atMost(1), (withoutId, format) => {
              return {
                type,
                format: format.length == 1 ? format[0] : void 0,
                showId: withoutId.length == 0
              };
            }));
          case "task":
            return parsimmon_umd_minExports.succeed({ type });
          case "calendar":
            return parsimmon_umd_minExports.whitespace.then(parsimmon_umd_minExports.seqMap(q.namedField, (field) => {
              return {
                type,
                showId: true,
                field
              };
            }));
          default:
            return parsimmon_umd_minExports.fail(`Unrecognized query type '${type}'`);
        }
      }).desc("TABLE or LIST or TASK or CALENDAR"),
      fromClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/FROM/i), parsimmon_umd_minExports.whitespace, EXPRESSION.source, (_1, _2, source) => source),
      whereClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/WHERE/i), parsimmon_umd_minExports.whitespace, EXPRESSION.field, (where, _, field) => {
        return { type: "where", clause: field };
      }).desc("WHERE <expression>"),
      sortByClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/SORT/i), parsimmon_umd_minExports.whitespace, q.sortField.sepBy1(parsimmon_umd_minExports.string(",").trim(parsimmon_umd_minExports.optWhitespace)), (sort, _1, fields) => {
        return { type: "sort", fields };
      }).desc("SORT field [ASC/DESC]"),
      limitClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/LIMIT/i), parsimmon_umd_minExports.whitespace, EXPRESSION.field, (limit, _1, field) => {
        return { type: "limit", amount: field };
      }).desc("LIMIT <value>"),
      flattenClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/FLATTEN/i).skip(parsimmon_umd_minExports.whitespace), q.namedField, (_, field) => {
        return { type: "flatten", field };
      }).desc("FLATTEN <value> [AS <name>]"),
      groupByClause: (q) => parsimmon_umd_minExports.seqMap(parsimmon_umd_minExports.regexp(/GROUP BY/i).skip(parsimmon_umd_minExports.whitespace), q.namedField, (_, field) => {
        return { type: "group", field };
      }).desc("GROUP BY <value> [AS <name>]"),
      // Full query parsing.
      clause: (q) => parsimmon_umd_minExports.alt(q.fromClause, q.whereClause, q.sortByClause, q.limitClause, q.groupByClause, q.flattenClause),
      query: (q) => parsimmon_umd_minExports.seqMap(q.headerClause.trim(optionalWhitespaceOrComment), q.fromClause.trim(optionalWhitespaceOrComment).atMost(1), q.clause.trim(optionalWhitespaceOrComment).many(), (header, from, clauses) => {
        return {
          header,
          source: from.length == 0 ? Sources.folder("") : from[0],
          operations: clauses,
          settings: DEFAULT_QUERY_SETTINGS
        };
      })
    });
    var optionalWhitespaceOrComment = parsimmon_umd_minExports.alt(parsimmon_umd_minExports.whitespace, QUERY_LANGUAGE.comment).many().map((arr) => arr.join(""));
    var getAPI2 = (app) => {
      var _a;
      if (app)
        return (_a = app.plugins.plugins.dataview) == null ? void 0 : _a.api;
      else
        return window.DataviewAPI;
    };
    var isPluginEnabled = (app) => app.plugins.enabledPlugins.has("dataview");
    exports.DATE_SHORTHANDS = DATE_SHORTHANDS;
    exports.DURATION_TYPES = DURATION_TYPES;
    exports.EXPRESSION = EXPRESSION;
    exports.KEYWORDS = KEYWORDS;
    exports.QUERY_LANGUAGE = QUERY_LANGUAGE;
    exports.getAPI = getAPI2;
    exports.isPluginEnabled = isPluginEnabled;
    exports.parseField = parseField;
  }
});

// node_modules/tree-kill/index.js
var require_tree_kill = __commonJS({
  "node_modules/tree-kill/index.js"(exports, module2) {
    "use strict";
    var childProcess2 = require("child_process");
    var spawn2 = childProcess2.spawn;
    var exec2 = childProcess2.exec;
    module2.exports = function(pid, signal, callback) {
      if (typeof signal === "function" && callback === void 0) {
        callback = signal;
        signal = void 0;
      }
      pid = parseInt(pid);
      if (Number.isNaN(pid)) {
        if (callback) {
          return callback(new Error("pid must be a number"));
        } else {
          throw new Error("pid must be a number");
        }
      }
      var tree = {};
      var pidsToProcess = {};
      tree[pid] = [];
      pidsToProcess[pid] = 1;
      switch (process.platform) {
        case "win32":
          exec2("taskkill /pid " + pid + " /T /F", callback);
          break;
        case "darwin":
          buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
            return spawn2("pgrep", ["-P", parentPid]);
          }, function() {
            killAll(tree, signal, callback);
          });
          break;
        default:
          buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
            return spawn2("ps", ["-o", "pid", "--no-headers", "--ppid", parentPid]);
          }, function() {
            killAll(tree, signal, callback);
          });
          break;
      }
    };
    function killAll(tree, signal, callback) {
      var killed = {};
      try {
        Object.keys(tree).forEach(function(pid) {
          tree[pid].forEach(function(pidpid) {
            if (!killed[pidpid]) {
              killPid(pidpid, signal);
              killed[pidpid] = 1;
            }
          });
          if (!killed[pid]) {
            killPid(pid, signal);
            killed[pid] = 1;
          }
        });
      } catch (err) {
        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }
      if (callback) {
        return callback();
      }
    }
    function killPid(pid, signal) {
      try {
        process.kill(parseInt(pid, 10), signal);
      } catch (err) {
        if (err.code !== "ESRCH")
          throw err;
      }
    }
    function buildProcessTree(parentPid, tree, pidsToProcess, spawnChildProcessesList, cb) {
      var ps = spawnChildProcessesList(parentPid);
      var allData = "";
      ps.stdout.on("data", function(data2) {
        var data2 = data2.toString("ascii");
        allData += data2;
      });
      var onClose = function(code) {
        delete pidsToProcess[parentPid];
        if (code != 0) {
          if (Object.keys(pidsToProcess).length == 0) {
            cb();
          }
          return;
        }
        allData.match(/\d+/g).forEach(function(pid) {
          pid = parseInt(pid, 10);
          tree[parentPid].push(pid);
          tree[pid] = [];
          pidsToProcess[pid] = 1;
          buildProcessTree(pid, tree, pidsToProcess, spawnChildProcessesList, cb);
        });
      };
      ps.on("close", onClose);
    }
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// src/setting/settingTab.ts
var import_obsidian = require("obsidian");
var fs = __toESM(require("fs"));

// node_modules/i18next/dist/esm/i18next.js
var consoleLogger = {
  type: "logger",
  log(args) {
    this.output("log", args);
  },
  warn(args) {
    this.output("warn", args);
  },
  error(args) {
    this.output("error", args);
  },
  output(type, args) {
    if (console && console[type])
      console[type].apply(console, args);
  }
};
var Logger = class {
  constructor(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(concreteLogger, options);
  }
  init(concreteLogger) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = options.prefix || "i18next:";
    this.logger = concreteLogger || consoleLogger;
    this.options = options;
    this.debug = options.debug;
  }
  log() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.forward(args, "log", "", true);
  }
  warn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return this.forward(args, "warn", "", true);
  }
  error() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return this.forward(args, "error", "");
  }
  deprecate() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
  }
  forward(args, lvl, prefix, debugOnly) {
    if (debugOnly && !this.debug)
      return null;
    if (typeof args[0] === "string")
      args[0] = `${prefix}${this.prefix} ${args[0]}`;
    return this.logger[lvl](args);
  }
  create(moduleName) {
    return new Logger(this.logger, {
      ...{
        prefix: `${this.prefix}:${moduleName}:`
      },
      ...this.options
    });
  }
  clone(options) {
    options = options || this.options;
    options.prefix = options.prefix || this.prefix;
    return new Logger(this.logger, options);
  }
};
var baseLogger = new Logger();
var EventEmitter = class {
  constructor() {
    this.observers = {};
  }
  on(events, listener) {
    events.split(" ").forEach((event) => {
      if (!this.observers[event])
        this.observers[event] = /* @__PURE__ */ new Map();
      const numListeners = this.observers[event].get(listener) || 0;
      this.observers[event].set(listener, numListeners + 1);
    });
    return this;
  }
  off(event, listener) {
    if (!this.observers[event])
      return;
    if (!listener) {
      delete this.observers[event];
      return;
    }
    this.observers[event].delete(listener);
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (this.observers[event]) {
      const cloned = Array.from(this.observers[event].entries());
      cloned.forEach((_ref) => {
        let [observer, numTimesAdded] = _ref;
        for (let i = 0; i < numTimesAdded; i++) {
          observer(...args);
        }
      });
    }
    if (this.observers["*"]) {
      const cloned = Array.from(this.observers["*"].entries());
      cloned.forEach((_ref2) => {
        let [observer, numTimesAdded] = _ref2;
        for (let i = 0; i < numTimesAdded; i++) {
          observer.apply(observer, [event, ...args]);
        }
      });
    }
  }
};
function defer() {
  let res;
  let rej;
  const promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null)
    return "";
  return "" + object;
}
function copy(a, s, t2) {
  a.forEach((m) => {
    if (s[m])
      t2[m] = s[m];
  });
}
var lastOfPathSeparatorRegExp = /###/g;
function getLastOfPath(object, path5, Empty) {
  function cleanKey(key) {
    return key && key.indexOf("###") > -1 ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
  }
  function canNotTraverseDeeper() {
    return !object || typeof object === "string";
  }
  const stack = typeof path5 !== "string" ? path5 : path5.split(".");
  let stackIndex = 0;
  while (stackIndex < stack.length - 1) {
    if (canNotTraverseDeeper())
      return {};
    const key = cleanKey(stack[stackIndex]);
    if (!object[key] && Empty)
      object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      object = object[key];
    } else {
      object = {};
    }
    ++stackIndex;
  }
  if (canNotTraverseDeeper())
    return {};
  return {
    obj: object,
    k: cleanKey(stack[stackIndex])
  };
}
function setPath(object, path5, newValue) {
  const {
    obj,
    k
  } = getLastOfPath(object, path5, Object);
  if (obj !== void 0 || path5.length === 1) {
    obj[k] = newValue;
    return;
  }
  let e = path5[path5.length - 1];
  let p = path5.slice(0, path5.length - 1);
  let last = getLastOfPath(object, p, Object);
  while (last.obj === void 0 && p.length) {
    e = `${p[p.length - 1]}.${e}`;
    p = p.slice(0, p.length - 1);
    last = getLastOfPath(object, p, Object);
    if (last && last.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") {
      last.obj = void 0;
    }
  }
  last.obj[`${last.k}.${e}`] = newValue;
}
function pushPath(object, path5, newValue, concat) {
  const {
    obj,
    k
  } = getLastOfPath(object, path5, Object);
  obj[k] = obj[k] || [];
  obj[k].push(newValue);
}
function getPath(object, path5) {
  const {
    obj,
    k
  } = getLastOfPath(object, path5);
  if (!obj)
    return void 0;
  return obj[k];
}
function getPathWithDefaults(data2, defaultData, key) {
  const value = getPath(data2, key);
  if (value !== void 0) {
    return value;
  }
  return getPath(defaultData, key);
}
function deepExtend(target, source, overwrite) {
  for (const prop in source) {
    if (prop !== "__proto__" && prop !== "constructor") {
      if (prop in target) {
        if (typeof target[prop] === "string" || target[prop] instanceof String || typeof source[prop] === "string" || source[prop] instanceof String) {
          if (overwrite)
            target[prop] = source[prop];
        } else {
          deepExtend(target[prop], source[prop], overwrite);
        }
      } else {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
function regexEscape(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var _entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function escape(data2) {
  if (typeof data2 === "string") {
    return data2.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
  }
  return data2;
}
var RegExpCache = class {
  constructor(capacity) {
    this.capacity = capacity;
    this.regExpMap = /* @__PURE__ */ new Map();
    this.regExpQueue = [];
  }
  getRegExp(pattern) {
    const regExpFromCache = this.regExpMap.get(pattern);
    if (regExpFromCache !== void 0) {
      return regExpFromCache;
    }
    const regExpNew = new RegExp(pattern);
    if (this.regExpQueue.length === this.capacity) {
      this.regExpMap.delete(this.regExpQueue.shift());
    }
    this.regExpMap.set(pattern, regExpNew);
    this.regExpQueue.push(pattern);
    return regExpNew;
  }
};
var chars = [" ", ",", "?", "!", ";"];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
function looksLikeObjectPath(key, nsSeparator, keySeparator) {
  nsSeparator = nsSeparator || "";
  keySeparator = keySeparator || "";
  const possibleChars = chars.filter((c) => nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
  if (possibleChars.length === 0)
    return true;
  const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let matched = !r.test(key);
  if (!matched) {
    const ki = key.indexOf(keySeparator);
    if (ki > 0 && !r.test(key.substring(0, ki))) {
      matched = true;
    }
  }
  return matched;
}
function deepFind(obj, path5) {
  let keySeparator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!obj)
    return void 0;
  if (obj[path5])
    return obj[path5];
  const tokens = path5.split(keySeparator);
  let current = obj;
  for (let i = 0; i < tokens.length; ) {
    if (!current || typeof current !== "object") {
      return void 0;
    }
    let next;
    let nextPath = "";
    for (let j = i; j < tokens.length; ++j) {
      if (j !== i) {
        nextPath += keySeparator;
      }
      nextPath += tokens[j];
      next = current[nextPath];
      if (next !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof next) > -1 && j < tokens.length - 1) {
          continue;
        }
        i += j - i + 1;
        break;
      }
    }
    current = next;
  }
  return current;
}
function getCleanedCode(code) {
  if (code && code.indexOf("_") > 0)
    return code.replace("_", "-");
  return code;
}
var ResourceStore = class extends EventEmitter {
  constructor(data2) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super();
    this.data = data2 || {};
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    if (this.options.ignoreJSONStructure === void 0) {
      this.options.ignoreJSONStructure = true;
    }
  }
  addNamespaces(ns) {
    if (this.options.ns.indexOf(ns) < 0) {
      this.options.ns.push(ns);
    }
  }
  removeNamespaces(ns) {
    const index = this.options.ns.indexOf(ns);
    if (index > -1) {
      this.options.ns.splice(index, 1);
    }
  }
  getResource(lng, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let path5;
    if (lng.indexOf(".") > -1) {
      path5 = lng.split(".");
    } else {
      path5 = [lng, ns];
      if (key) {
        if (Array.isArray(key)) {
          path5.push(...key);
        } else if (typeof key === "string" && keySeparator) {
          path5.push(...key.split(keySeparator));
        } else {
          path5.push(key);
        }
      }
    }
    const result2 = getPath(this.data, path5);
    if (!result2 && !ns && !key && lng.indexOf(".") > -1) {
      lng = path5[0];
      ns = path5[1];
      key = path5.slice(2).join(".");
    }
    if (result2 || !ignoreJSONStructure || typeof key !== "string")
      return result2;
    return deepFind(this.data && this.data[lng] && this.data[lng][ns], key, keySeparator);
  }
  addResource(lng, ns, key, value) {
    let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: false
    };
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let path5 = [lng, ns];
    if (key)
      path5 = path5.concat(keySeparator ? key.split(keySeparator) : key);
    if (lng.indexOf(".") > -1) {
      path5 = lng.split(".");
      value = ns;
      ns = path5[1];
    }
    this.addNamespaces(ns);
    setPath(this.data, path5, value);
    if (!options.silent)
      this.emit("added", lng, ns, key, value);
  }
  addResources(lng, ns, resources2) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: false
    };
    for (const m in resources2) {
      if (typeof resources2[m] === "string" || Array.isArray(resources2[m]))
        this.addResource(lng, ns, m, resources2[m], {
          silent: true
        });
    }
    if (!options.silent)
      this.emit("added", lng, ns, resources2);
  }
  addResourceBundle(lng, ns, resources2, deep, overwrite) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: false,
      skipCopy: false
    };
    let path5 = [lng, ns];
    if (lng.indexOf(".") > -1) {
      path5 = lng.split(".");
      deep = resources2;
      resources2 = ns;
      ns = path5[1];
    }
    this.addNamespaces(ns);
    let pack = getPath(this.data, path5) || {};
    if (!options.skipCopy)
      resources2 = JSON.parse(JSON.stringify(resources2));
    if (deep) {
      deepExtend(pack, resources2, overwrite);
    } else {
      pack = {
        ...pack,
        ...resources2
      };
    }
    setPath(this.data, path5, pack);
    if (!options.silent)
      this.emit("added", lng, ns, resources2);
  }
  removeResourceBundle(lng, ns) {
    if (this.hasResourceBundle(lng, ns)) {
      delete this.data[lng][ns];
    }
    this.removeNamespaces(ns);
    this.emit("removed", lng, ns);
  }
  hasResourceBundle(lng, ns) {
    return this.getResource(lng, ns) !== void 0;
  }
  getResourceBundle(lng, ns) {
    if (!ns)
      ns = this.options.defaultNS;
    if (this.options.compatibilityAPI === "v1")
      return {
        ...{},
        ...this.getResource(lng, ns)
      };
    return this.getResource(lng, ns);
  }
  getDataByLanguage(lng) {
    return this.data[lng];
  }
  hasLanguageSomeTranslations(lng) {
    const data2 = this.getDataByLanguage(lng);
    const n = data2 && Object.keys(data2) || [];
    return !!n.find((v) => data2[v] && Object.keys(data2[v]).length > 0);
  }
  toJSON() {
    return this.data;
  }
};
var postProcessor = {
  processors: {},
  addPostProcessor(module2) {
    this.processors[module2.name] = module2;
  },
  handle(processors, value, key, options, translator) {
    processors.forEach((processor) => {
      if (this.processors[processor])
        value = this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};
var checkedLoadedFor = {};
var Translator = class extends EventEmitter {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super();
    copy(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], services, this);
    this.options = options;
    if (this.options.keySeparator === void 0) {
      this.options.keySeparator = ".";
    }
    this.logger = baseLogger.create("translator");
  }
  changeLanguage(lng) {
    if (lng)
      this.language = lng;
  }
  exists(key) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (key === void 0 || key === null) {
      return false;
    }
    const resolved = this.resolve(key, options);
    return resolved && resolved.res !== void 0;
  }
  extractFromKey(key, options) {
    let nsSeparator = options.nsSeparator !== void 0 ? options.nsSeparator : this.options.nsSeparator;
    if (nsSeparator === void 0)
      nsSeparator = ":";
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    let namespaces = options.ns || this.options.defaultNS || [];
    const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
    const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !options.keySeparator && !this.options.userDefinedNsSeparator && !options.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
    if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
      const m = key.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0) {
        return {
          key,
          namespaces
        };
      }
      const parts = key.split(nsSeparator);
      if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1)
        namespaces = parts.shift();
      key = parts.join(keySeparator);
    }
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    return {
      key,
      namespaces
    };
  }
  translate(keys, options, lastKey) {
    if (typeof options !== "object" && this.options.overloadTranslationOptionHandler) {
      options = this.options.overloadTranslationOptionHandler(arguments);
    }
    if (typeof options === "object")
      options = {
        ...options
      };
    if (!options)
      options = {};
    if (keys === void 0 || keys === null)
      return "";
    if (!Array.isArray(keys))
      keys = [String(keys)];
    const returnDetails = options.returnDetails !== void 0 ? options.returnDetails : this.options.returnDetails;
    const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
    const {
      key,
      namespaces
    } = this.extractFromKey(keys[keys.length - 1], options);
    const namespace = namespaces[namespaces.length - 1];
    const lng = options.lng || this.language;
    const appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (lng && lng.toLowerCase() === "cimode") {
      if (appendNamespaceToCIMode) {
        const nsSeparator = options.nsSeparator || this.options.nsSeparator;
        if (returnDetails) {
          return {
            res: `${namespace}${nsSeparator}${key}`,
            usedKey: key,
            exactUsedKey: key,
            usedLng: lng,
            usedNS: namespace,
            usedParams: this.getUsedParamsDetails(options)
          };
        }
        return `${namespace}${nsSeparator}${key}`;
      }
      if (returnDetails) {
        return {
          res: key,
          usedKey: key,
          exactUsedKey: key,
          usedLng: lng,
          usedNS: namespace,
          usedParams: this.getUsedParamsDetails(options)
        };
      }
      return key;
    }
    const resolved = this.resolve(keys, options);
    let res = resolved && resolved.res;
    const resUsedKey = resolved && resolved.usedKey || key;
    const resExactUsedKey = resolved && resolved.exactUsedKey || key;
    const resType = Object.prototype.toString.apply(res);
    const noObject = ["[object Number]", "[object Function]", "[object RegExp]"];
    const joinArrays = options.joinArrays !== void 0 ? options.joinArrays : this.options.joinArrays;
    const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
    const handleAsObject = typeof res !== "string" && typeof res !== "boolean" && typeof res !== "number";
    if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === "string" && Array.isArray(res))) {
      if (!options.returnObjects && !this.options.returnObjects) {
        if (!this.options.returnedObjectHandler) {
          this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        }
        const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, {
          ...options,
          ns: namespaces
        }) : `key '${key} (${this.language})' returned an object instead of string.`;
        if (returnDetails) {
          resolved.res = r;
          resolved.usedParams = this.getUsedParamsDetails(options);
          return resolved;
        }
        return r;
      }
      if (keySeparator) {
        const resTypeIsArray = Array.isArray(res);
        const copy2 = resTypeIsArray ? [] : {};
        const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
        for (const m in res) {
          if (Object.prototype.hasOwnProperty.call(res, m)) {
            const deepKey = `${newKeyToUse}${keySeparator}${m}`;
            copy2[m] = this.translate(deepKey, {
              ...options,
              ...{
                joinArrays: false,
                ns: namespaces
              }
            });
            if (copy2[m] === deepKey)
              copy2[m] = res[m];
          }
        }
        res = copy2;
      }
    } else if (handleAsObjectInI18nFormat && typeof joinArrays === "string" && Array.isArray(res)) {
      res = res.join(joinArrays);
      if (res)
        res = this.extendTranslation(res, keys, options, lastKey);
    } else {
      let usedDefault = false;
      let usedKey = false;
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const hasDefaultValue = Translator.hasDefaultValue(options);
      const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, options) : "";
      const defaultValueSuffixOrdinalFallback = options.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, options.count, {
        ordinal: false
      }) : "";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const defaultValue = needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] || options[`defaultValue${defaultValueSuffix}`] || options[`defaultValue${defaultValueSuffixOrdinalFallback}`] || options.defaultValue;
      if (!this.isValidLookup(res) && hasDefaultValue) {
        usedDefault = true;
        res = defaultValue;
      }
      if (!this.isValidLookup(res)) {
        usedKey = true;
        res = key;
      }
      const missingKeyNoValueFallbackToKey = options.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
      const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? void 0 : res;
      const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
      if (usedKey || usedDefault || updateMissing) {
        this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
        if (keySeparator) {
          const fk = this.resolve(key, {
            ...options,
            keySeparator: false
          });
          if (fk && fk.res)
            this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let lngs = [];
        const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) {
          for (let i = 0; i < fallbackLngs.length; i++) {
            lngs.push(fallbackLngs[i]);
          }
        } else if (this.options.saveMissingTo === "all") {
          lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
        } else {
          lngs.push(options.lng || this.language);
        }
        const send = (l, k, specificDefaultValue) => {
          const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
          if (this.options.missingKeyHandler) {
            this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, options);
          } else if (this.backendConnector && this.backendConnector.saveMissing) {
            this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, options);
          }
          this.emit("missingKey", l, namespace, k, res);
        };
        if (this.options.saveMissing) {
          if (this.options.saveMissingPlurals && needsPluralHandling) {
            lngs.forEach((language2) => {
              const suffixes = this.pluralResolver.getSuffixes(language2, options);
              if (needsZeroSuffixLookup && options[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                suffixes.push(`${this.options.pluralSeparator}zero`);
              }
              suffixes.forEach((suffix) => {
                send([language2], key + suffix, options[`defaultValue${suffix}`] || defaultValue);
              });
            });
          } else {
            send(lngs, key, defaultValue);
          }
        }
      }
      res = this.extendTranslation(res, keys, options, resolved, lastKey);
      if (usedKey && res === key && this.options.appendNamespaceToMissingKey)
        res = `${namespace}:${key}`;
      if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
        if (this.options.compatibilityAPI !== "v1") {
          res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}:${key}` : key, usedDefault ? res : void 0);
        } else {
          res = this.options.parseMissingKeyHandler(res);
        }
      }
    }
    if (returnDetails) {
      resolved.res = res;
      resolved.usedParams = this.getUsedParamsDetails(options);
      return resolved;
    }
    return res;
  }
  extendTranslation(res, key, options, resolved, lastKey) {
    var _this = this;
    if (this.i18nFormat && this.i18nFormat.parse) {
      res = this.i18nFormat.parse(res, {
        ...this.options.interpolation.defaultVariables,
        ...options
      }, options.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
        resolved
      });
    } else if (!options.skipInterpolation) {
      if (options.interpolation)
        this.interpolator.init({
          ...options,
          ...{
            interpolation: {
              ...this.options.interpolation,
              ...options.interpolation
            }
          }
        });
      const skipOnVariables = typeof res === "string" && (options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let nestBef;
      if (skipOnVariables) {
        const nb = res.match(this.interpolator.nestingRegexp);
        nestBef = nb && nb.length;
      }
      let data2 = options.replace && typeof options.replace !== "string" ? options.replace : options;
      if (this.options.interpolation.defaultVariables)
        data2 = {
          ...this.options.interpolation.defaultVariables,
          ...data2
        };
      res = this.interpolator.interpolate(res, data2, options.lng || this.language || resolved.usedLng, options);
      if (skipOnVariables) {
        const na = res.match(this.interpolator.nestingRegexp);
        const nestAft = na && na.length;
        if (nestBef < nestAft)
          options.nest = false;
      }
      if (!options.lng && this.options.compatibilityAPI !== "v1" && resolved && resolved.res)
        options.lng = this.language || resolved.usedLng;
      if (options.nest !== false)
        res = this.interpolator.nest(res, function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          if (lastKey && lastKey[0] === args[0] && !options.context) {
            _this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
            return null;
          }
          return _this.translate(...args, key);
        }, options);
      if (options.interpolation)
        this.interpolator.reset();
    }
    const postProcess = options.postProcess || this.options.postProcess;
    const postProcessorNames = typeof postProcess === "string" ? [postProcess] : postProcess;
    if (res !== void 0 && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
      res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
        i18nResolved: {
          ...resolved,
          usedParams: this.getUsedParamsDetails(options)
        },
        ...options
      } : options, this);
    }
    return res;
  }
  resolve(keys) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let found;
    let usedKey;
    let exactUsedKey;
    let usedLng;
    let usedNS;
    if (typeof keys === "string")
      keys = [keys];
    keys.forEach((k) => {
      if (this.isValidLookup(found))
        return;
      const extracted = this.extractFromKey(k, options);
      const key = extracted.key;
      usedKey = key;
      let namespaces = extracted.namespaces;
      if (this.options.fallbackNS)
        namespaces = namespaces.concat(this.options.fallbackNS);
      const needsPluralHandling = options.count !== void 0 && typeof options.count !== "string";
      const needsZeroSuffixLookup = needsPluralHandling && !options.ordinal && options.count === 0 && this.pluralResolver.shouldUseIntlApi();
      const needsContextHandling = options.context !== void 0 && (typeof options.context === "string" || typeof options.context === "number") && options.context !== "";
      const codes = options.lngs ? options.lngs : this.languageUtils.toResolveHierarchy(options.lng || this.language, options.fallbackLng);
      namespaces.forEach((ns) => {
        if (this.isValidLookup(found))
          return;
        usedNS = ns;
        if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(usedNS)) {
          checkedLoadedFor[`${codes[0]}-${ns}`] = true;
          this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
        }
        codes.forEach((code) => {
          if (this.isValidLookup(found))
            return;
          usedLng = code;
          const finalKeys = [key];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys) {
            this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
          } else {
            let pluralSuffix;
            if (needsPluralHandling)
              pluralSuffix = this.pluralResolver.getSuffix(code, options.count, options);
            const zeroSuffix = `${this.options.pluralSeparator}zero`;
            const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (needsPluralHandling) {
              finalKeys.push(key + pluralSuffix);
              if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
              }
              if (needsZeroSuffixLookup) {
                finalKeys.push(key + zeroSuffix);
              }
            }
            if (needsContextHandling) {
              const contextKey = `${key}${this.options.contextSeparator}${options.context}`;
              finalKeys.push(contextKey);
              if (needsPluralHandling) {
                finalKeys.push(contextKey + pluralSuffix);
                if (options.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                  finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                }
                if (needsZeroSuffixLookup) {
                  finalKeys.push(contextKey + zeroSuffix);
                }
              }
            }
          }
          let possibleKey;
          while (possibleKey = finalKeys.pop()) {
            if (!this.isValidLookup(found)) {
              exactUsedKey = possibleKey;
              found = this.getResource(code, ns, possibleKey, options);
            }
          }
        });
      });
    });
    return {
      res: found,
      usedKey,
      exactUsedKey,
      usedLng,
      usedNS
    };
  }
  isValidLookup(res) {
    return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
  }
  getResource(code, ns, key) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (this.i18nFormat && this.i18nFormat.getResource)
      return this.i18nFormat.getResource(code, ns, key, options);
    return this.resourceStore.getResource(code, ns, key, options);
  }
  getUsedParamsDetails() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const optionsKeys = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"];
    const useOptionsReplaceForData = options.replace && typeof options.replace !== "string";
    let data2 = useOptionsReplaceForData ? options.replace : options;
    if (useOptionsReplaceForData && typeof options.count !== "undefined") {
      data2.count = options.count;
    }
    if (this.options.interpolation.defaultVariables) {
      data2 = {
        ...this.options.interpolation.defaultVariables,
        ...data2
      };
    }
    if (!useOptionsReplaceForData) {
      data2 = {
        ...data2
      };
      for (const key of optionsKeys) {
        delete data2[key];
      }
    }
    return data2;
  }
  static hasDefaultValue(options) {
    const prefix = "defaultValue";
    for (const option in options) {
      if (Object.prototype.hasOwnProperty.call(options, option) && prefix === option.substring(0, prefix.length) && void 0 !== options[option]) {
        return true;
      }
    }
    return false;
  }
};
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var LanguageUtil = class {
  constructor(options) {
    this.options = options;
    this.supportedLngs = this.options.supportedLngs || false;
    this.logger = baseLogger.create("languageUtils");
  }
  getScriptPartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return null;
    const p = code.split("-");
    if (p.length === 2)
      return null;
    p.pop();
    if (p[p.length - 1].toLowerCase() === "x")
      return null;
    return this.formatLanguageCode(p.join("-"));
  }
  getLanguagePartFromCode(code) {
    code = getCleanedCode(code);
    if (!code || code.indexOf("-") < 0)
      return code;
    const p = code.split("-");
    return this.formatLanguageCode(p[0]);
  }
  formatLanguageCode(code) {
    if (typeof code === "string" && code.indexOf("-") > -1) {
      const specialCases = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let p = code.split("-");
      if (this.options.lowerCaseLng) {
        p = p.map((part) => part.toLowerCase());
      } else if (p.length === 2) {
        p[0] = p[0].toLowerCase();
        p[1] = p[1].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
      } else if (p.length === 3) {
        p[0] = p[0].toLowerCase();
        if (p[1].length === 2)
          p[1] = p[1].toUpperCase();
        if (p[0] !== "sgn" && p[2].length === 2)
          p[2] = p[2].toUpperCase();
        if (specialCases.indexOf(p[1].toLowerCase()) > -1)
          p[1] = capitalize(p[1].toLowerCase());
        if (specialCases.indexOf(p[2].toLowerCase()) > -1)
          p[2] = capitalize(p[2].toLowerCase());
      }
      return p.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
  }
  isSupportedCode(code) {
    if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) {
      code = this.getLanguagePartFromCode(code);
    }
    return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
  }
  getBestMatchFromCodes(codes) {
    if (!codes)
      return null;
    let found;
    codes.forEach((code) => {
      if (found)
        return;
      const cleanedLng = this.formatLanguageCode(code);
      if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng))
        found = cleanedLng;
    });
    if (!found && this.options.supportedLngs) {
      codes.forEach((code) => {
        if (found)
          return;
        const lngOnly = this.getLanguagePartFromCode(code);
        if (this.isSupportedCode(lngOnly))
          return found = lngOnly;
        found = this.options.supportedLngs.find((supportedLng) => {
          if (supportedLng === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf("-") < 0 && lngOnly.indexOf("-") < 0)
            return;
          if (supportedLng.indexOf("-") > 0 && lngOnly.indexOf("-") < 0 && supportedLng.substring(0, supportedLng.indexOf("-")) === lngOnly)
            return supportedLng;
          if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1)
            return supportedLng;
        });
      });
    }
    if (!found)
      found = this.getFallbackCodes(this.options.fallbackLng)[0];
    return found;
  }
  getFallbackCodes(fallbacks, code) {
    if (!fallbacks)
      return [];
    if (typeof fallbacks === "function")
      fallbacks = fallbacks(code);
    if (typeof fallbacks === "string")
      fallbacks = [fallbacks];
    if (Array.isArray(fallbacks))
      return fallbacks;
    if (!code)
      return fallbacks.default || [];
    let found = fallbacks[code];
    if (!found)
      found = fallbacks[this.getScriptPartFromCode(code)];
    if (!found)
      found = fallbacks[this.formatLanguageCode(code)];
    if (!found)
      found = fallbacks[this.getLanguagePartFromCode(code)];
    if (!found)
      found = fallbacks.default;
    return found || [];
  }
  toResolveHierarchy(code, fallbackCode) {
    const fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
    const codes = [];
    const addCode = (c) => {
      if (!c)
        return;
      if (this.isSupportedCode(c)) {
        codes.push(c);
      } else {
        this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
      }
    };
    if (typeof code === "string" && (code.indexOf("-") > -1 || code.indexOf("_") > -1)) {
      if (this.options.load !== "languageOnly")
        addCode(this.formatLanguageCode(code));
      if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly")
        addCode(this.getScriptPartFromCode(code));
      if (this.options.load !== "currentOnly")
        addCode(this.getLanguagePartFromCode(code));
    } else if (typeof code === "string") {
      addCode(this.formatLanguageCode(code));
    }
    fallbackCodes.forEach((fc) => {
      if (codes.indexOf(fc) < 0)
        addCode(this.formatLanguageCode(fc));
    });
    return codes;
  }
};
var sets = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function(n) {
    return Number(n > 1);
  },
  2: function(n) {
    return Number(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function(n) {
    return Number(n >= 2);
  },
  10: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return Number(n !== 0);
  },
  14: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function(n) {
    return Number(n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1);
  },
  18: function(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function(n) {
    return Number(n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
var nonIntlVersions = ["v1", "v2", "v3"];
var intlVersions = ["v4"];
var suffixesOrder = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function createRules() {
  const rules = {};
  sets.forEach((set) => {
    set.lngs.forEach((l) => {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}
var PluralResolver = class {
  constructor(languageUtils) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create("pluralResolver");
    if ((!this.options.compatibilityJSON || intlVersions.includes(this.options.compatibilityJSON)) && (typeof Intl === "undefined" || !Intl.PluralRules)) {
      this.options.compatibilityJSON = "v3";
      this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.");
    }
    this.rules = createRules();
  }
  addRule(lng, obj) {
    this.rules[lng] = obj;
  }
  getRule(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      try {
        return new Intl.PluralRules(getCleanedCode(code === "dev" ? "en" : code), {
          type: options.ordinal ? "ordinal" : "cardinal"
        });
      } catch (err) {
        return;
      }
    }
    return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
  }
  needsPlural(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (this.shouldUseIntlApi()) {
      return rule && rule.resolvedOptions().pluralCategories.length > 1;
    }
    return rule && rule.numbers.length > 1;
  }
  getPluralFormsOfKey(code, key) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
  }
  getSuffixes(code) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const rule = this.getRule(code, options);
    if (!rule) {
      return [];
    }
    if (this.shouldUseIntlApi()) {
      return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
    }
    return rule.numbers.map((number) => this.getSuffix(code, number, options));
  }
  getSuffix(code, count) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const rule = this.getRule(code, options);
    if (rule) {
      if (this.shouldUseIntlApi()) {
        return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
      }
      return this.getSuffixRetroCompatible(rule, count);
    }
    this.logger.warn(`no plural rule found for: ${code}`);
    return "";
  }
  getSuffixRetroCompatible(rule, count) {
    const idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
    let suffix = rule.numbers[idx];
    if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      if (suffix === 2) {
        suffix = "plural";
      } else if (suffix === 1) {
        suffix = "";
      }
    }
    const returnSuffix = () => this.options.prepend && suffix.toString() ? this.options.prepend + suffix.toString() : suffix.toString();
    if (this.options.compatibilityJSON === "v1") {
      if (suffix === 1)
        return "";
      if (typeof suffix === "number")
        return `_plural_${suffix.toString()}`;
      return returnSuffix();
    } else if (this.options.compatibilityJSON === "v2") {
      return returnSuffix();
    } else if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
      return returnSuffix();
    }
    return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
  }
  shouldUseIntlApi() {
    return !nonIntlVersions.includes(this.options.compatibilityJSON);
  }
};
function deepFindWithDefaults(data2, defaultData, key) {
  let keySeparator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".";
  let ignoreJSONStructure = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
  let path5 = getPathWithDefaults(data2, defaultData, key);
  if (!path5 && ignoreJSONStructure && typeof key === "string") {
    path5 = deepFind(data2, key, keySeparator);
    if (path5 === void 0)
      path5 = deepFind(defaultData, key, keySeparator);
  }
  return path5;
}
var Interpolator = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("interpolator");
    this.options = options;
    this.format = options.interpolation && options.interpolation.format || ((value) => value);
    this.init(options);
  }
  init() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!options.interpolation)
      options.interpolation = {
        escapeValue: true
      };
    const {
      escape: escape$1,
      escapeValue,
      useRawValueToEscape,
      prefix,
      prefixEscaped,
      suffix,
      suffixEscaped,
      formatSeparator,
      unescapeSuffix,
      unescapePrefix,
      nestingPrefix,
      nestingPrefixEscaped,
      nestingSuffix,
      nestingSuffixEscaped,
      nestingOptionsSeparator,
      maxReplaces,
      alwaysFormat
    } = options.interpolation;
    this.escape = escape$1 !== void 0 ? escape$1 : escape;
    this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
    this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
    this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
    this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
    this.formatSeparator = formatSeparator || ",";
    this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
    this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
    this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
    this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
    this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
    this.maxReplaces = maxReplaces || 1e3;
    this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
    this.resetRegExp();
  }
  reset() {
    if (this.options)
      this.init(this.options);
  }
  resetRegExp() {
    const getOrResetRegExp = (existingRegExp, pattern) => {
      if (existingRegExp && existingRegExp.source === pattern) {
        existingRegExp.lastIndex = 0;
        return existingRegExp;
      }
      return new RegExp(pattern, "g");
    };
    this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
    this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
    this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(str, data2, lng, options) {
    let match2;
    let value;
    let replaces;
    const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function regexSafe(val) {
      return val.replace(/\$/g, "$$$$");
    }
    const handleFormat = (key) => {
      if (key.indexOf(this.formatSeparator) < 0) {
        const path5 = deepFindWithDefaults(data2, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(path5, void 0, lng, {
          ...options,
          ...data2,
          interpolationkey: key
        }) : path5;
      }
      const p = key.split(this.formatSeparator);
      const k = p.shift().trim();
      const f = p.join(this.formatSeparator).trim();
      return this.format(deepFindWithDefaults(data2, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
        ...options,
        ...data2,
        interpolationkey: k
      });
    };
    this.resetRegExp();
    const missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
    const skipOnVariables = options && options.interpolation && options.interpolation.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    const todos = [{
      regex: this.regexpUnescape,
      safeValue: (val) => regexSafe(val)
    }, {
      regex: this.regexp,
      safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
    }];
    todos.forEach((todo) => {
      replaces = 0;
      while (match2 = todo.regex.exec(str)) {
        const matchedVar = match2[1].trim();
        value = handleFormat(matchedVar);
        if (value === void 0) {
          if (typeof missingInterpolationHandler === "function") {
            const temp = missingInterpolationHandler(str, match2, options);
            value = typeof temp === "string" ? temp : "";
          } else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) {
            value = "";
          } else if (skipOnVariables) {
            value = match2[0];
            continue;
          } else {
            this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
            value = "";
          }
        } else if (typeof value !== "string" && !this.useRawValueToEscape) {
          value = makeString(value);
        }
        const safeValue = todo.safeValue(value);
        str = str.replace(match2[0], safeValue);
        if (skipOnVariables) {
          todo.regex.lastIndex += value.length;
          todo.regex.lastIndex -= match2[0].length;
        } else {
          todo.regex.lastIndex = 0;
        }
        replaces++;
        if (replaces >= this.maxReplaces) {
          break;
        }
      }
    });
    return str;
  }
  nest(str, fc) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let match2;
    let value;
    let clonedOptions;
    function handleHasOptions(key, inheritedOptions) {
      const sep4 = this.nestingOptionsSeparator;
      if (key.indexOf(sep4) < 0)
        return key;
      const c = key.split(new RegExp(`${sep4}[ ]*{`));
      let optionsString = `{${c[1]}`;
      key = c[0];
      optionsString = this.interpolate(optionsString, clonedOptions);
      const matchedSingleQuotes = optionsString.match(/'/g);
      const matchedDoubleQuotes = optionsString.match(/"/g);
      if (matchedSingleQuotes && matchedSingleQuotes.length % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
        optionsString = optionsString.replace(/'/g, '"');
      }
      try {
        clonedOptions = JSON.parse(optionsString);
        if (inheritedOptions)
          clonedOptions = {
            ...inheritedOptions,
            ...clonedOptions
          };
      } catch (e) {
        this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
        return `${key}${sep4}${optionsString}`;
      }
      if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1)
        delete clonedOptions.defaultValue;
      return key;
    }
    while (match2 = this.nestingRegexp.exec(str)) {
      let formatters = [];
      clonedOptions = {
        ...options
      };
      clonedOptions = clonedOptions.replace && typeof clonedOptions.replace !== "string" ? clonedOptions.replace : clonedOptions;
      clonedOptions.applyPostProcessor = false;
      delete clonedOptions.defaultValue;
      let doReduce = false;
      if (match2[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match2[1])) {
        const r = match2[1].split(this.formatSeparator).map((elem) => elem.trim());
        match2[1] = r.shift();
        formatters = r;
        doReduce = true;
      }
      value = fc(handleHasOptions.call(this, match2[1].trim(), clonedOptions), clonedOptions);
      if (value && match2[0] === str && typeof value !== "string")
        return value;
      if (typeof value !== "string")
        value = makeString(value);
      if (!value) {
        this.logger.warn(`missed to resolve ${match2[1]} for nesting ${str}`);
        value = "";
      }
      if (doReduce) {
        value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
          ...options,
          interpolationkey: match2[1].trim()
        }), value.trim());
      }
      str = str.replace(match2[0], value);
      this.regexp.lastIndex = 0;
    }
    return str;
  }
};
function parseFormatStr(formatStr) {
  let formatName = formatStr.toLowerCase().trim();
  const formatOptions = {};
  if (formatStr.indexOf("(") > -1) {
    const p = formatStr.split("(");
    formatName = p[0].toLowerCase().trim();
    const optStr = p[1].substring(0, p[1].length - 1);
    if (formatName === "currency" && optStr.indexOf(":") < 0) {
      if (!formatOptions.currency)
        formatOptions.currency = optStr.trim();
    } else if (formatName === "relativetime" && optStr.indexOf(":") < 0) {
      if (!formatOptions.range)
        formatOptions.range = optStr.trim();
    } else {
      const opts = optStr.split(";");
      opts.forEach((opt) => {
        if (opt) {
          const [key, ...rest] = opt.split(":");
          const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
          const trimmedKey = key.trim();
          if (!formatOptions[trimmedKey])
            formatOptions[trimmedKey] = val;
          if (val === "false")
            formatOptions[trimmedKey] = false;
          if (val === "true")
            formatOptions[trimmedKey] = true;
          if (!isNaN(val))
            formatOptions[trimmedKey] = parseInt(val, 10);
        }
      });
    }
  }
  return {
    formatName,
    formatOptions
  };
}
function createCachedFormatter(fn) {
  const cache = {};
  return function invokeFormatter(val, lng, options) {
    const key = lng + JSON.stringify(options);
    let formatter = cache[key];
    if (!formatter) {
      formatter = fn(getCleanedCode(lng), options);
      cache[key] = formatter;
    }
    return formatter(val);
  };
}
var Formatter = class {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = baseLogger.create("formatter");
    this.options = options;
    this.formats = {
      number: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      currency: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.NumberFormat(lng, {
          ...opt,
          style: "currency"
        });
        return (val) => formatter.format(val);
      }),
      datetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.DateTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      }),
      relativetime: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.RelativeTimeFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val, opt.range || "day");
      }),
      list: createCachedFormatter((lng, opt) => {
        const formatter = new Intl.ListFormat(lng, {
          ...opt
        });
        return (val) => formatter.format(val);
      })
    };
    this.init(options);
  }
  init(services) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    const iOpts = options.interpolation;
    this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ",";
  }
  add(name, fc) {
    this.formats[name.toLowerCase().trim()] = fc;
  }
  addCached(name, fc) {
    this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
  }
  format(value, format, lng) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const formats = format.split(this.formatSeparator);
    const result2 = formats.reduce((mem, f) => {
      const {
        formatName,
        formatOptions
      } = parseFormatStr(f);
      if (this.formats[formatName]) {
        let formatted = mem;
        try {
          const valOptions = options && options.formatParams && options.formatParams[options.interpolationkey] || {};
          const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
          formatted = this.formats[formatName](mem, l, {
            ...formatOptions,
            ...options,
            ...valOptions
          });
        } catch (error) {
          this.logger.warn(error);
        }
        return formatted;
      } else {
        this.logger.warn(`there was no format function for ${formatName}`);
      }
      return mem;
    }, value);
    return result2;
  }
};
function removePending(q, name) {
  if (q.pending[name] !== void 0) {
    delete q.pending[name];
    q.pendingCount--;
  }
}
var Connector = class extends EventEmitter {
  constructor(backend, store, services) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super();
    this.backend = backend;
    this.store = store;
    this.services = services;
    this.languageUtils = services.languageUtils;
    this.options = options;
    this.logger = baseLogger.create("backendConnector");
    this.waitingReads = [];
    this.maxParallelReads = options.maxParallelReads || 10;
    this.readingCalls = 0;
    this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
    this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
    this.state = {};
    this.queue = [];
    if (this.backend && this.backend.init) {
      this.backend.init(services, options.backend, options);
    }
  }
  queueLoad(languages, namespaces, options, callback) {
    const toLoad = {};
    const pending = {};
    const toLoadLanguages = {};
    const toLoadNamespaces = {};
    languages.forEach((lng) => {
      let hasAllNamespaces = true;
      namespaces.forEach((ns) => {
        const name = `${lng}|${ns}`;
        if (!options.reload && this.store.hasResourceBundle(lng, ns)) {
          this.state[name] = 2;
        } else if (this.state[name] < 0)
          ;
        else if (this.state[name] === 1) {
          if (pending[name] === void 0)
            pending[name] = true;
        } else {
          this.state[name] = 1;
          hasAllNamespaces = false;
          if (pending[name] === void 0)
            pending[name] = true;
          if (toLoad[name] === void 0)
            toLoad[name] = true;
          if (toLoadNamespaces[ns] === void 0)
            toLoadNamespaces[ns] = true;
        }
      });
      if (!hasAllNamespaces)
        toLoadLanguages[lng] = true;
    });
    if (Object.keys(toLoad).length || Object.keys(pending).length) {
      this.queue.push({
        pending,
        pendingCount: Object.keys(pending).length,
        loaded: {},
        errors: [],
        callback
      });
    }
    return {
      toLoad: Object.keys(toLoad),
      pending: Object.keys(pending),
      toLoadLanguages: Object.keys(toLoadLanguages),
      toLoadNamespaces: Object.keys(toLoadNamespaces)
    };
  }
  loaded(name, err, data2) {
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    if (err)
      this.emit("failedLoading", lng, ns, err);
    if (data2) {
      this.store.addResourceBundle(lng, ns, data2, void 0, void 0, {
        skipCopy: true
      });
    }
    this.state[name] = err ? -1 : 2;
    const loaded = {};
    this.queue.forEach((q) => {
      pushPath(q.loaded, [lng], ns);
      removePending(q, name);
      if (err)
        q.errors.push(err);
      if (q.pendingCount === 0 && !q.done) {
        Object.keys(q.loaded).forEach((l) => {
          if (!loaded[l])
            loaded[l] = {};
          const loadedKeys = q.loaded[l];
          if (loadedKeys.length) {
            loadedKeys.forEach((n) => {
              if (loaded[l][n] === void 0)
                loaded[l][n] = true;
            });
          }
        });
        q.done = true;
        if (q.errors.length) {
          q.callback(q.errors);
        } else {
          q.callback();
        }
      }
    });
    this.emit("loaded", loaded);
    this.queue = this.queue.filter((q) => !q.done);
  }
  read(lng, ns, fcName) {
    let tried = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    let wait = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout;
    let callback = arguments.length > 5 ? arguments[5] : void 0;
    if (!lng.length)
      return callback(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng,
        ns,
        fcName,
        tried,
        wait,
        callback
      });
      return;
    }
    this.readingCalls++;
    const resolver = (err, data2) => {
      this.readingCalls--;
      if (this.waitingReads.length > 0) {
        const next = this.waitingReads.shift();
        this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
      }
      if (err && data2 && tried < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
        }, wait);
        return;
      }
      callback(err, data2);
    };
    const fc = this.backend[fcName].bind(this.backend);
    if (fc.length === 2) {
      try {
        const r = fc(lng, ns);
        if (r && typeof r.then === "function") {
          r.then((data2) => resolver(null, data2)).catch(resolver);
        } else {
          resolver(null, r);
        }
      } catch (err) {
        resolver(err);
      }
      return;
    }
    return fc(lng, ns, resolver);
  }
  prepareLoading(languages, namespaces) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    let callback = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) {
      this.logger.warn("No backend was added via i18next.use. Will not load resources.");
      return callback && callback();
    }
    if (typeof languages === "string")
      languages = this.languageUtils.toResolveHierarchy(languages);
    if (typeof namespaces === "string")
      namespaces = [namespaces];
    const toLoad = this.queueLoad(languages, namespaces, options, callback);
    if (!toLoad.toLoad.length) {
      if (!toLoad.pending.length)
        callback();
      return null;
    }
    toLoad.toLoad.forEach((name) => {
      this.loadOne(name);
    });
  }
  load(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {}, callback);
  }
  reload(languages, namespaces, callback) {
    this.prepareLoading(languages, namespaces, {
      reload: true
    }, callback);
  }
  loadOne(name) {
    let prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = name.split("|");
    const lng = s[0];
    const ns = s[1];
    this.read(lng, ns, "read", void 0, void 0, (err, data2) => {
      if (err)
        this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
      if (!err && data2)
        this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data2);
      this.loaded(name, err, data2);
    });
  }
  saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
    let options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
    let clb = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(namespace)) {
      this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (key === void 0 || key === null || key === "")
      return;
    if (this.backend && this.backend.create) {
      const opts = {
        ...options,
        isUpdate
      };
      const fc = this.backend.create.bind(this.backend);
      if (fc.length < 6) {
        try {
          let r;
          if (fc.length === 5) {
            r = fc(languages, namespace, key, fallbackValue, opts);
          } else {
            r = fc(languages, namespace, key, fallbackValue);
          }
          if (r && typeof r.then === "function") {
            r.then((data2) => clb(null, data2)).catch(clb);
          } else {
            clb(null, r);
          }
        } catch (err) {
          clb(err);
        }
      } else {
        fc(languages, namespace, key, fallbackValue, clb, opts);
      }
    }
    if (!languages || !languages[0])
      return;
    this.store.addResource(languages[0], namespace, key, fallbackValue);
  }
};
function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: false,
    supportedLngs: false,
    nonExplicitSupportedLngs: false,
    load: "all",
    preload: false,
    simplifyPluralSuffix: true,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: false,
    saveMissing: false,
    updateMissing: false,
    saveMissingTo: "fallback",
    saveMissingPlurals: true,
    missingKeyHandler: false,
    missingInterpolationHandler: false,
    postProcess: false,
    postProcessPassResolved: false,
    returnNull: false,
    returnEmptyString: true,
    returnObjects: false,
    joinArrays: false,
    returnedObjectHandler: false,
    parseMissingKeyHandler: false,
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      let ret = {};
      if (typeof args[1] === "object")
        ret = args[1];
      if (typeof args[1] === "string")
        ret.defaultValue = args[1];
      if (typeof args[2] === "string")
        ret.tDescription = args[2];
      if (typeof args[2] === "object" || typeof args[3] === "object") {
        const options = args[3] || args[2];
        Object.keys(options).forEach((key) => {
          ret[key] = options[key];
        });
      }
      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: (value) => value,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: true
    }
  };
}
function transformOptions(options) {
  if (typeof options.ns === "string")
    options.ns = [options.ns];
  if (typeof options.fallbackLng === "string")
    options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === "string")
    options.fallbackNS = [options.fallbackNS];
  if (options.supportedLngs && options.supportedLngs.indexOf("cimode") < 0) {
    options.supportedLngs = options.supportedLngs.concat(["cimode"]);
  }
  return options;
}
function noop() {
}
function bindMemberFunctions(inst) {
  const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
  mems.forEach((mem) => {
    if (typeof inst[mem] === "function") {
      inst[mem] = inst[mem].bind(inst);
    }
  });
}
var I18n = class extends EventEmitter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    super();
    this.options = transformOptions(options);
    this.services = {};
    this.logger = baseLogger;
    this.modules = {
      external: []
    };
    bindMemberFunctions(this);
    if (callback && !this.isInitialized && !options.isClone) {
      if (!this.options.initImmediate) {
        this.init(options, callback);
        return this;
      }
      setTimeout(() => {
        this.init(options, callback);
      }, 0);
    }
  }
  init() {
    var _this = this;
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = true;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    if (!options.defaultNS && options.defaultNS !== false && options.ns) {
      if (typeof options.ns === "string") {
        options.defaultNS = options.ns;
      } else if (options.ns.indexOf("translation") < 0) {
        options.defaultNS = options.ns[0];
      }
    }
    const defOpts = get();
    this.options = {
      ...defOpts,
      ...this.options,
      ...transformOptions(options)
    };
    if (this.options.compatibilityAPI !== "v1") {
      this.options.interpolation = {
        ...defOpts.interpolation,
        ...this.options.interpolation
      };
    }
    if (options.keySeparator !== void 0) {
      this.options.userDefinedKeySeparator = options.keySeparator;
    }
    if (options.nsSeparator !== void 0) {
      this.options.userDefinedNsSeparator = options.nsSeparator;
    }
    function createClassOnDemand(ClassOrObject) {
      if (!ClassOrObject)
        return null;
      if (typeof ClassOrObject === "function")
        return new ClassOrObject();
      return ClassOrObject;
    }
    if (!this.options.isClone) {
      if (this.modules.logger) {
        baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
      } else {
        baseLogger.init(null, this.options);
      }
      let formatter;
      if (this.modules.formatter) {
        formatter = this.modules.formatter;
      } else if (typeof Intl !== "undefined") {
        formatter = Formatter;
      }
      const lu = new LanguageUtil(this.options);
      this.store = new ResourceStore(this.options.resources, this.options);
      const s = this.services;
      s.logger = baseLogger;
      s.resourceStore = this.store;
      s.languageUtils = lu;
      s.pluralResolver = new PluralResolver(lu, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      });
      if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
        s.formatter = createClassOnDemand(formatter);
        s.formatter.init(s, this.options);
        this.options.interpolation.format = s.formatter.format.bind(s.formatter);
      }
      s.interpolator = new Interpolator(this.options);
      s.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      };
      s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
      s.backendConnector.on("*", function(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        _this.emit(event, ...args);
      });
      if (this.modules.languageDetector) {
        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
        if (s.languageDetector.init)
          s.languageDetector.init(s, this.options.detection, this.options);
      }
      if (this.modules.i18nFormat) {
        s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
        if (s.i18nFormat.init)
          s.i18nFormat.init(this);
      }
      this.translator = new Translator(this.services, this.options);
      this.translator.on("*", function(event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        _this.emit(event, ...args);
      });
      this.modules.external.forEach((m) => {
        if (m.init)
          m.init(this);
      });
    }
    this.format = this.options.interpolation.format;
    if (!callback)
      callback = noop;
    if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      if (codes.length > 0 && codes[0] !== "dev")
        this.options.lng = codes[0];
    }
    if (!this.services.languageDetector && !this.options.lng) {
      this.logger.warn("init: no languageDetector is used and no lng is defined");
    }
    const storeApi = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
    storeApi.forEach((fcName) => {
      this[fcName] = function() {
        return _this.store[fcName](...arguments);
      };
    });
    const storeApiChained = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
    storeApiChained.forEach((fcName) => {
      this[fcName] = function() {
        _this.store[fcName](...arguments);
        return _this;
      };
    });
    const deferred = defer();
    const load = () => {
      const finish = (err, t2) => {
        this.isInitializing = false;
        if (this.isInitialized && !this.initializedStoreOnce)
          this.logger.warn("init: i18next is already initialized. You should call init just once!");
        this.isInitialized = true;
        if (!this.options.isClone)
          this.logger.log("initialized", this.options);
        this.emit("initialized", this.options);
        deferred.resolve(t2);
        callback(err, t2);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return finish(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, finish);
    };
    if (this.options.resources || !this.options.initImmediate) {
      load();
    } else {
      setTimeout(load, 0);
    }
    return deferred;
  }
  loadResources(language2) {
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    let usedCallback = callback;
    const usedLng = typeof language2 === "string" ? language2 : this.language;
    if (typeof language2 === "function")
      usedCallback = language2;
    if (!this.options.resources || this.options.partialBundledLanguages) {
      if (usedLng && usedLng.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return usedCallback();
      const toLoad = [];
      const append = (lng) => {
        if (!lng)
          return;
        if (lng === "cimode")
          return;
        const lngs = this.services.languageUtils.toResolveHierarchy(lng);
        lngs.forEach((l) => {
          if (l === "cimode")
            return;
          if (toLoad.indexOf(l) < 0)
            toLoad.push(l);
        });
      };
      if (!usedLng) {
        const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
        fallbacks.forEach((l) => append(l));
      } else {
        append(usedLng);
      }
      if (this.options.preload) {
        this.options.preload.forEach((l) => append(l));
      }
      this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
        if (!e && !this.resolvedLanguage && this.language)
          this.setResolvedLanguage(this.language);
        usedCallback(e);
      });
    } else {
      usedCallback(null);
    }
  }
  reloadResources(lngs, ns, callback) {
    const deferred = defer();
    if (!lngs)
      lngs = this.languages;
    if (!ns)
      ns = this.options.ns;
    if (!callback)
      callback = noop;
    this.services.backendConnector.reload(lngs, ns, (err) => {
      deferred.resolve();
      callback(err);
    });
    return deferred;
  }
  use(module2) {
    if (!module2)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!module2.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    if (module2.type === "backend") {
      this.modules.backend = module2;
    }
    if (module2.type === "logger" || module2.log && module2.warn && module2.error) {
      this.modules.logger = module2;
    }
    if (module2.type === "languageDetector") {
      this.modules.languageDetector = module2;
    }
    if (module2.type === "i18nFormat") {
      this.modules.i18nFormat = module2;
    }
    if (module2.type === "postProcessor") {
      postProcessor.addPostProcessor(module2);
    }
    if (module2.type === "formatter") {
      this.modules.formatter = module2;
    }
    if (module2.type === "3rdParty") {
      this.modules.external.push(module2);
    }
    return this;
  }
  setResolvedLanguage(l) {
    if (!l || !this.languages)
      return;
    if (["cimode", "dev"].indexOf(l) > -1)
      return;
    for (let li = 0; li < this.languages.length; li++) {
      const lngInLngs = this.languages[li];
      if (["cimode", "dev"].indexOf(lngInLngs) > -1)
        continue;
      if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
        this.resolvedLanguage = lngInLngs;
        break;
      }
    }
  }
  changeLanguage(lng, callback) {
    var _this2 = this;
    this.isLanguageChangingTo = lng;
    const deferred = defer();
    this.emit("languageChanging", lng);
    const setLngProps = (l) => {
      this.language = l;
      this.languages = this.services.languageUtils.toResolveHierarchy(l);
      this.resolvedLanguage = void 0;
      this.setResolvedLanguage(l);
    };
    const done = (err, l) => {
      if (l) {
        setLngProps(l);
        this.translator.changeLanguage(l);
        this.isLanguageChangingTo = void 0;
        this.emit("languageChanged", l);
        this.logger.log("languageChanged", l);
      } else {
        this.isLanguageChangingTo = void 0;
      }
      deferred.resolve(function() {
        return _this2.t(...arguments);
      });
      if (callback)
        callback(err, function() {
          return _this2.t(...arguments);
        });
    };
    const setLng = (lngs) => {
      if (!lng && !lngs && this.services.languageDetector)
        lngs = [];
      const l = typeof lngs === "string" ? lngs : this.services.languageUtils.getBestMatchFromCodes(lngs);
      if (l) {
        if (!this.language) {
          setLngProps(l);
        }
        if (!this.translator.language)
          this.translator.changeLanguage(l);
        if (this.services.languageDetector && this.services.languageDetector.cacheUserLanguage)
          this.services.languageDetector.cacheUserLanguage(l);
      }
      this.loadResources(l, (err) => {
        done(err, l);
      });
    };
    if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
      setLng(this.services.languageDetector.detect());
    } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
      if (this.services.languageDetector.detect.length === 0) {
        this.services.languageDetector.detect().then(setLng);
      } else {
        this.services.languageDetector.detect(setLng);
      }
    } else {
      setLng(lng);
    }
    return deferred;
  }
  getFixedT(lng, ns, keyPrefix) {
    var _this3 = this;
    const fixedT = function(key, opts) {
      let options;
      if (typeof opts !== "object") {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          rest[_key3 - 2] = arguments[_key3];
        }
        options = _this3.options.overloadTranslationOptionHandler([key, opts].concat(rest));
      } else {
        options = {
          ...opts
        };
      }
      options.lng = options.lng || fixedT.lng;
      options.lngs = options.lngs || fixedT.lngs;
      options.ns = options.ns || fixedT.ns;
      if (options.keyPrefix !== "")
        options.keyPrefix = options.keyPrefix || keyPrefix || fixedT.keyPrefix;
      const keySeparator = _this3.options.keySeparator || ".";
      let resultKey;
      if (options.keyPrefix && Array.isArray(key)) {
        resultKey = key.map((k) => `${options.keyPrefix}${keySeparator}${k}`);
      } else {
        resultKey = options.keyPrefix ? `${options.keyPrefix}${keySeparator}${key}` : key;
      }
      return _this3.t(resultKey, options);
    };
    if (typeof lng === "string") {
      fixedT.lng = lng;
    } else {
      fixedT.lngs = lng;
    }
    fixedT.ns = ns;
    fixedT.keyPrefix = keyPrefix;
    return fixedT;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(ns) {
    this.options.defaultNS = ns;
  }
  hasLoadedNamespace(ns) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) {
      this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
      return false;
    }
    if (!this.languages || !this.languages.length) {
      this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
      return false;
    }
    const lng = options.lng || this.resolvedLanguage || this.languages[0];
    const fallbackLng = this.options ? this.options.fallbackLng : false;
    const lastLng = this.languages[this.languages.length - 1];
    if (lng.toLowerCase() === "cimode")
      return true;
    const loadNotPending = (l, n) => {
      const loadState = this.services.backendConnector.state[`${l}|${n}`];
      return loadState === -1 || loadState === 2;
    };
    if (options.precheck) {
      const preResult = options.precheck(this, loadNotPending);
      if (preResult !== void 0)
        return preResult;
    }
    if (this.hasResourceBundle(lng, ns))
      return true;
    if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages)
      return true;
    if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns)))
      return true;
    return false;
  }
  loadNamespaces(ns, callback) {
    const deferred = defer();
    if (!this.options.ns) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    if (typeof ns === "string")
      ns = [ns];
    ns.forEach((n) => {
      if (this.options.ns.indexOf(n) < 0)
        this.options.ns.push(n);
    });
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  loadLanguages(lngs, callback) {
    const deferred = defer();
    if (typeof lngs === "string")
      lngs = [lngs];
    const preloaded = this.options.preload || [];
    const newLngs = lngs.filter((lng) => preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
    if (!newLngs.length) {
      if (callback)
        callback();
      return Promise.resolve();
    }
    this.options.preload = preloaded.concat(newLngs);
    this.loadResources((err) => {
      deferred.resolve();
      if (callback)
        callback(err);
    });
    return deferred;
  }
  dir(lng) {
    if (!lng)
      lng = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language);
    if (!lng)
      return "rtl";
    const rtlLngs = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
    const languageUtils = this.services && this.services.languageUtils || new LanguageUtil(get());
    return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 ? arguments[1] : void 0;
    return new I18n(options, callback);
  }
  cloneInstance() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : noop;
    const forkResourceStore = options.forkResourceStore;
    if (forkResourceStore)
      delete options.forkResourceStore;
    const mergedOptions = {
      ...this.options,
      ...options,
      ...{
        isClone: true
      }
    };
    const clone = new I18n(mergedOptions);
    if (options.debug !== void 0 || options.prefix !== void 0) {
      clone.logger = clone.logger.clone(options);
    }
    const membersToCopy = ["store", "services", "language"];
    membersToCopy.forEach((m) => {
      clone[m] = this[m];
    });
    clone.services = {
      ...this.services
    };
    clone.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    if (forkResourceStore) {
      clone.store = new ResourceStore(this.store.data, mergedOptions);
      clone.services.resourceStore = clone.store;
    }
    clone.translator = new Translator(clone.services, mergedOptions);
    clone.translator.on("*", function(event) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }
      clone.emit(event, ...args);
    });
    clone.init(mergedOptions, callback);
    clone.translator.options = mergedOptions;
    clone.translator.backendConnector.services.utils = {
      hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
    };
    return clone;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
};
var instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
var createInstance = instance.createInstance;
var dir = instance.dir;
var init = instance.init;
var loadResources = instance.loadResources;
var reloadResources = instance.reloadResources;
var use = instance.use;
var changeLanguage = instance.changeLanguage;
var getFixedT = instance.getFixedT;
var t = instance.t;
var exists = instance.exists;
var setDefaultNamespace = instance.setDefaultNamespace;
var hasLoadedNamespace = instance.hasLoadedNamespace;
var loadNamespaces = instance.loadNamespaces;
var loadLanguages = instance.loadLanguages;

// src/setting/settingTab.ts
var DEFAULT_SETTINGS = {
  publishedContentList: [],
  needCleanDirFolder: false,
  useDataView: false,
  useDataViewJs: false,
  vitepressDir: "",
  vitepressSrcDir: "",
  vitepressStaticDir: "",
  deployScriptPath: "",
  ignoreFileRegex: "^_",
  autoSyncMdFile: true
};
var SettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.showExternalButton = true;
    this.showFolderAdvanceButton = true;
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.configBasicSetting();
    this.publishSetting();
    this.updateWarningText();
  }
  configBasicSetting() {
    const { containerEl } = this;
    new import_obsidian.Setting(this.containerEl).setName(instance.t("basic-setting")).setHeading();
    new import_obsidian.Setting(containerEl).setName(instance.t("publish-content")).setDesc(instance.t("publish-content-desc")).addExtraButton((cb) => {
      cb.setIcon(!this.showExternalButton ? "up-chevron-glyph" : "down-chevron-glyph").onClick(() => {
        this.showExternalButton = !this.showExternalButton;
        this.display();
      });
    });
    if (this.showExternalButton) {
      const savedList = this.plugin.settings.publishedContentList || [];
      const folderWrapBox = containerEl.createEl("div", {
        cls: ["vite-press-publisher-folder-config"]
      });
      const fileWrapBox = containerEl.createEl("div", {
        cls: ["vite-press-publisher-folder-config"]
      });
      this.loadFolder((list) => {
        const folderList = list.filter((item) => item.isDir);
        const fileList = list.filter((item) => !item.isDir);
        for (const x of folderList) {
          const contain = savedList.some((item) => item.isFolder && item.name == x.name);
          this.addMultiSelectItem(folderWrapBox, x.name, contain, true);
        }
        for (const x of fileList) {
          const contain = savedList.some((item) => !item.isFolder && item.name == x.name);
          this.addMultiSelectItem(fileWrapBox, x.name, contain, false);
        }
      });
    }
    new import_obsidian.Setting(this.containerEl).setName(instance.t("folder-setting")).setHeading();
    new import_obsidian.Setting(containerEl).setName(instance.t("vitepress-folder-path")).setDesc(instance.t("need-absolute-path")).addText((text) => {
      text.inputEl.classList.add("vitepress-setting-max-width");
      return text.setPlaceholder("").setValue(this.plugin.settings.vitepressDir).onChange(async (value) => {
        this.plugin.settings.vitepressDir = value;
        await this.plugin.saveData(this.plugin.settings);
      });
    }).setClass("obsidian-setting-required");
    new import_obsidian.Setting(containerEl).setName(instance.t("vitepress-srcDir-path")).setDesc(instance.t("need-absolute-path")).addText((text) => {
      text.inputEl.classList.add("vitepress-setting-max-width");
      return text.setPlaceholder("").setValue(this.plugin.settings.vitepressSrcDir).onChange(async (value) => {
        this.plugin.settings.vitepressSrcDir = value;
        await this.plugin.saveData(this.plugin.settings);
      });
    }).setClass("obsidian-setting-required");
    new import_obsidian.Setting(this.containerEl).setName(instance.t("adv-settings")).setHeading();
    new import_obsidian.Setting(containerEl).setName(instance.t("clean-src-dir")).setDesc(instance.t("clean-src-dir-desc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.needCleanDirFolder).onChange(async (needCleanDirFolder) => {
        this.plugin.settings.needCleanDirFolder = needCleanDirFolder;
        await this.plugin.saveData(this.plugin.settings);
        this.updateWarningText();
      });
    });
    new import_obsidian.Setting(containerEl).setName(instance.t("vitepress-fixed-dir")).setDesc(instance.t("vitepress-fixed-dir-desc")).addText((text) => {
      text.inputEl.classList.add("vitepress-setting-max-width");
      return text.setPlaceholder("").setValue(this.plugin.settings.vitepressStaticDir).onChange(async (value) => {
        this.plugin.settings.vitepressStaticDir = value;
        await this.plugin.saveData(this.plugin.settings);
        this.updateWarningText();
      });
    });
    new import_obsidian.Setting(containerEl).setName(instance.t("filter-doc")).setDesc(instance.t("filter-doc-desc")).addText((text) => {
      text.inputEl.classList.add("vitepress-setting-max-width");
      return text.setPlaceholder(instance.t("enter-regex")).setValue(this.plugin.settings.ignoreFileRegex).onChange(async (value) => {
        this.plugin.settings.ignoreFileRegex = value;
        await this.plugin.saveData(this.plugin.settings);
        this.updateWarningText();
      });
    });
    new import_obsidian.Setting(containerEl).setName(instance.t("auto-sync-md")).setDesc(instance.t("auto-sync-md-desc")).addToggle((toggle) => {
      return toggle.setValue(this.plugin.settings.autoSyncMdFile).onChange(async (value) => {
        this.plugin.settings.autoSyncMdFile = value;
        await this.plugin.saveData(this.plugin.settings);
      });
    });
    new import_obsidian.Setting(containerEl).setName(instance.t("parser-dataview")).setDesc(instance.t("parser-dataview-desc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.useDataView).onChange(async (useDataView) => {
        this.plugin.settings.useDataView = useDataView;
        await this.plugin.saveData(this.plugin.settings);
      });
    });
    new import_obsidian.Setting(containerEl).setName(instance.t("parser-dataviewjs")).setDesc(instance.t("parser-dataviewjsdesc")).addToggle((toggle) => {
      toggle.setValue(this.plugin.settings.useDataViewJs).onChange(async (useDataView) => {
        this.plugin.settings.useDataViewJs = useDataView;
        await this.plugin.saveData(this.plugin.settings);
      });
    });
  }
  updateWarningText() {
    const ele = document.getElementsByClassName("vitepress-setting-warningtext")[0];
    if (ele) {
      ele.remove();
    }
    const tip = instance.t("plugin-action-tip");
    this.appendWarningText(`${tip}:
${this.plugin.settings.needCleanDirFolder ? `- ${instance.t("plugin-action-tip-clean-dir")}` : ""}${this.plugin.settings.vitepressStaticDir ? `- ${instance.t("plugin-action-tip-move-to-src-dir")}` : ""}- ${instance.t("plugin-action-tip-public-move-to-src-dir")}${this.plugin.settings.ignoreFileRegex ? `(${instance.t("plugin-action-tip-filter-by-regex", { regex: `${this.plugin.settings.ignoreFileRegex}` })})` : ""}`, ["vitepress-setting-warningtext"]);
  }
  publishSetting() {
    const { containerEl } = this;
    new import_obsidian.Setting(containerEl).setName(instance.t("publish-setting")).setHeading();
    new import_obsidian.Setting(containerEl).setName(instance.t("publish-script")).setDesc(instance.t("publish-script-desc")).addText((text) => text.setValue(this.plugin.settings.deployScriptPath).onChange(async (value) => {
      this.plugin.settings.deployScriptPath = value;
      await this.plugin.saveData(this.plugin.settings);
    }));
  }
  loadFolder(callback) {
    const basePath = this.app.vault.adapter.basePath;
    fs.readdir(basePath, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error(err);
        return;
      }
      const folderList = [];
      files.forEach((file) => {
        if (file.name != ".DS_Store" && file.name !== ".trash" && file.name != this.app.vault.configDir) {
          folderList.push({
            name: file.name,
            isDir: file.isDirectory()
          });
        }
      });
      callback(folderList);
    });
  }
  appendWarningText(text, classList) {
    const warning = this.containerEl.createEl("div", {
      cls: ["vitepress-setting-warning", ...classList]
    });
    warning.createSpan({ text });
  }
  addMultiSelectItem(superNode, title, isEnabled, isFolder) {
    const selectBox = superNode.createEl("div", {
      cls: ["setting-item-description", "switch-box"]
    });
    selectBox.createDiv({ text: title });
    const checkbox = selectBox.createEl("div", {
      cls: isEnabled ? ["checkbox-container is-enabled vitepress-ml-4"] : ["checkbox-container vitepress-ml-4"],
      attr: { "id-text": title }
    });
    checkbox.addEventListener("click", async () => {
      if (checkbox.classList.contains("is-enabled")) {
        checkbox.removeClass("is-enabled");
      } else {
        checkbox.addClass("is-enabled");
      }
      const all = superNode.querySelectorAll(".checkbox-container");
      const selectedList = [];
      for (const item of Array.from(all)) {
        if (item.classList.contains("is-enabled")) {
          const name = item.getAttribute("id-text");
          name && selectedList.push({
            name,
            isFolder
          });
        }
      }
      this.plugin.settings.publishedContentList = this.plugin.settings.publishedContentList.filter((item) => item.isFolder != isFolder);
      this.plugin.settings.publishedContentList.push(...selectedList);
      await this.plugin.saveData(this.plugin.settings);
    });
  }
};

// src/command/vitepressCommand.ts
var child_process = __toESM(require("child_process"));
var import_obsidian3 = require("obsidian");

// src/utils/pathUtils.ts
var fs2 = __toESM(require("fs"));
var path = __toESM(require("path"));
var import_path = require("path");
var import_fs = require("fs");
function getCurrentMdFileRelativePath(app, removeSuffix = true) {
  const activeFile = app.workspace.getActiveFile();
  if (!activeFile) {
    return "";
  }
  if (removeSuffix) {
    return activeFile.path.replace(/.md$/, "");
  } else {
    return activeFile.path;
  }
}
function removeFolder(path5) {
  fs2.rmSync(path5, { recursive: true, force: true });
}
function deleteFilesInDirectorySync(directory) {
  const files = fs2.readdirSync(directory);
  files.forEach((file) => {
    const filePath = `${directory}/${file}`;
    const stats = fs2.statSync(filePath);
    if (stats.isDirectory()) {
      removeFolder(filePath);
    } else {
      fs2.unlinkSync(filePath);
    }
  });
}
function deleteFileOrFolder(path5) {
  if (!fs2.existsSync(path5)) {
    return;
  }
  const stats = fs2.statSync(path5);
  if (stats.isDirectory()) {
    removeFolder(path5);
  } else {
    fs2.unlinkSync(path5);
  }
}

// src/modal/consoleModal.ts
var import_obsidian2 = require("obsidian");
var ConsoleModal = class extends import_obsidian2.Modal {
  constructor(app) {
    super(app);
    this.logContent = "";
    this.CONSOLE_MODAL_CLASS = "vitepress-debug-console";
    this.CONSOLE_MODAL_EMPTY_TEXT = "No logs available.";
    this.setTitle("vitepress log console");
    this.modalEl.addClass(this.CONSOLE_MODAL_CLASS);
    this.logDiv = this.contentEl.createDiv();
    this.otherDiv = this.contentEl.createDiv();
  }
  onOpen() {
    const { contentEl } = this;
    if (this.logDiv.childNodes.length === 0) {
      contentEl.createSpan({ title: this.CONSOLE_MODAL_EMPTY_TEXT });
    } else {
      this.otherDiv.empty();
      this.makeClearButton(this.otherDiv);
    }
  }
  onClose() {
  }
  appendLogResult(text, type = 0 /* Common */) {
    const logDiv = this.logDiv;
    const date = new Date();
    const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
    let textRenderClass = "";
    const textRender = text.toString().trimStart();
    switch (type) {
      case 0 /* Common */:
        textRenderClass = "";
        break;
      case 1 /* Warning */:
        textRenderClass = "vitepress-log-warning";
        break;
      case 2 /* Error */:
        textRenderClass = "vitepress-log-error";
        break;
    }
    const div = logDiv.createDiv();
    div.createSpan({
      text: `[${padL(date.getHours())}:${padL(date.getMinutes())}:${padL(date.getSeconds())}]`,
      cls: "vitepress-log-green"
    });
    div.createSpan({ text: textRender, cls: textRenderClass });
    this.contentEl.scrollTop = this.contentEl.scrollHeight;
  }
  makeClearButton(ele) {
    const button = ele.createEl("button", { text: "clear logs", cls: "vitepress-clear-button" });
    button.addEventListener("click", () => {
      this.logDiv.empty();
      this.otherDiv.empty();
      this.otherDiv.createSpan({ text: this.CONSOLE_MODAL_EMPTY_TEXT });
    });
    return button;
  }
};

// src/static/icons.ts
var ICON_NAME = "obsidian-preview";
var ICON_SVG_CLOSE = `
<svg width="100.000000" height="100.000000" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<clipPath id="clip2_31">
<rect width="100.000000" height="100.000000" fill="none" fill-opacity="0" stroke="currentColor"/>
</clipPath>
</defs>
<g clip-path="url(#clip2_31)">
<path id="path" d="M52.31 92.64C51.47 94.15 49.29 94.16 48.43 92.65L6.54 19.21C5.61 17.56 7.01 15.57 8.87 15.91L49.99 23.25C50.25 23.3 50.52 23.3 50.78 23.25L91.03 15.92C92.89 15.58 94.3 17.55 93.38 19.2L52.31 92.64Z" stroke="currentColor" stroke-opacity="1.000000" stroke-width="4.000000"/>
<path id="path" d="M69.57 6.27L39.18 12.22C38.61 12.33 38.31 12.68 38.28 13.25L36.41 44.83C36.37 45.57 37.05 46.15 37.78 45.98L46.24 44.03C47.03 43.84 47.74 44.54 47.58 45.34L45.07 57.65C44.9 58.48 45.68 59.18 46.49 58.94L51.71 57.35C52.52 57.1 53.3 57.82 53.13 58.64L49.13 77.98C48.88 79.19 50.49 79.85 51.16 78.81L51.61 78.12L76.38 28.7C76.79 27.87 76.08 26.93 75.17 27.1L66.46 28.78C65.64 28.94 64.94 28.18 65.17 27.38L70.86 7.67C71.09 6.87 70.39 6.11 69.57 6.27Z" fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
</g>
</svg>`;
var ICON_NAME_ON_PREVIEW = "obsidian-on-preview";
var ICON_SVG_PREVIEW = `
<svg width="100.000000" height="100.000000" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<clipPath id="clip2_28">
<rect id="vite-svgrepo-com" width="100.000000" height="100.000000" fill="white" fill-opacity="0"/>
</clipPath>
<linearGradient x1="0.221035" y1="0.531417" x2="2.265430" y2="3.307869" id="paint_linear_2_29_0" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1.000000" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient x1="1.905102" y1="0.315563" x2="2.274923" y2="2.852499" id="paint_linear_2_30_0" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.083300" stop-color="#FFDD35"/>
<stop offset="1.000000" stop-color="#FFA800"/>
</linearGradient>
</defs>
<g clip-path="url(#clip2_28)">
<path id="path" d="M93.38 19.2L52.31 92.64C51.47 94.15 49.29 94.16 48.43 92.65L6.54 19.21C5.61 17.56 7.01 15.57 8.88 15.91L49.99 23.25C50.25 23.3 50.52 23.3 50.78 23.25L91.03 15.92C92.89 15.58 94.3 17.55 93.38 19.2Z" fill="url(#paint_linear_2_29_0)" fill-opacity="1.000000" fill-rule="nonzero"/>
<path id="path" d="M69.57 6.27L39.18 12.22C38.61 12.33 38.31 12.68 38.28 13.25L36.41 44.83C36.37 45.57 37.05 46.15 37.78 45.98L46.24 44.03C47.03 43.84 47.74 44.54 47.58 45.34L45.07 57.65C44.9 58.48 45.68 59.18 46.49 58.94L51.71 57.35C52.52 57.1 53.3 57.82 53.13 58.64L49.13 77.98C48.88 79.19 50.49 79.85 51.16 78.81L51.61 78.12L76.38 28.7C76.79 27.87 76.08 26.93 75.17 27.1L66.46 28.78C65.64 28.94 64.94 28.18 65.17 27.38L70.86 7.67C71.09 6.87 70.39 6.11 69.57 6.27Z" fill="url(#paint_linear_2_30_0)" fill-opacity="1.000000" fill-rule="nonzero"/>
</g>
</svg>
`;

// src/command/vitepressCommand.ts
var fs8 = __toESM(require("fs"));

// node_modules/open/index.js
var import_node_process5 = __toESM(require("process"), 1);
var import_node_buffer = require("buffer");
var import_node_path = __toESM(require("path"), 1);
var import_node_url = require("url");
var import_node_child_process5 = __toESM(require("child_process"), 1);
var import_promises = __toESM(require("fs/promises"), 1);

// node_modules/is-wsl/index.js
var import_node_process = __toESM(require("process"), 1);
var import_node_os = __toESM(require("os"), 1);
var import_node_fs3 = __toESM(require("fs"), 1);

// node_modules/is-inside-container/index.js
var import_node_fs2 = __toESM(require("fs"), 1);

// node_modules/is-docker/index.js
var import_node_fs = __toESM(require("fs"), 1);
var isDockerCached;
function hasDockerEnv() {
  try {
    import_node_fs.default.statSync("/.dockerenv");
    return true;
  } catch (e) {
    return false;
  }
}
function hasDockerCGroup() {
  try {
    return import_node_fs.default.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch (e) {
    return false;
  }
}
function isDocker() {
  if (isDockerCached === void 0) {
    isDockerCached = hasDockerEnv() || hasDockerCGroup();
  }
  return isDockerCached;
}

// node_modules/is-inside-container/index.js
var cachedResult;
var hasContainerEnv = () => {
  try {
    import_node_fs2.default.statSync("/run/.containerenv");
    return true;
  } catch (e) {
    return false;
  }
};
function isInsideContainer() {
  if (cachedResult === void 0) {
    cachedResult = hasContainerEnv() || isDocker();
  }
  return cachedResult;
}

// node_modules/is-wsl/index.js
var isWsl = () => {
  if (import_node_process.default.platform !== "linux") {
    return false;
  }
  if (import_node_os.default.release().toLowerCase().includes("microsoft")) {
    if (isInsideContainer()) {
      return false;
    }
    return true;
  }
  try {
    return import_node_fs3.default.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !isInsideContainer() : false;
  } catch (e) {
    return false;
  }
};
var is_wsl_default = import_node_process.default.env.__IS_WSL_TEST__ ? isWsl : isWsl();

// node_modules/define-lazy-prop/index.js
function defineLazyProperty(object, propertyName, valueGetter) {
  const define = (value) => Object.defineProperty(object, propertyName, { value, enumerable: true, writable: true });
  Object.defineProperty(object, propertyName, {
    configurable: true,
    enumerable: true,
    get() {
      const result2 = valueGetter();
      define(result2);
      return result2;
    },
    set(value) {
      define(value);
    }
  });
  return object;
}

// node_modules/default-browser/index.js
var import_node_util4 = require("util");
var import_node_process4 = __toESM(require("process"), 1);
var import_node_child_process4 = require("child_process");

// node_modules/default-browser-id/index.js
var import_node_util = require("util");
var import_node_process2 = __toESM(require("process"), 1);
var import_node_child_process = require("child_process");
var execFileAsync = (0, import_node_util.promisify)(import_node_child_process.execFile);
async function defaultBrowserId() {
  var _a;
  if (import_node_process2.default.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const { stdout } = await execFileAsync("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
  const match2 = /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(stdout);
  return (_a = match2 == null ? void 0 : match2.groups.id) != null ? _a : "com.apple.Safari";
}

// node_modules/run-applescript/index.js
var import_node_process3 = __toESM(require("process"), 1);
var import_node_util2 = require("util");
var import_node_child_process2 = require("child_process");
var execFileAsync2 = (0, import_node_util2.promisify)(import_node_child_process2.execFile);
async function runAppleScript(script, { humanReadableOutput = true } = {}) {
  if (import_node_process3.default.platform !== "darwin") {
    throw new Error("macOS only");
  }
  const outputArguments = humanReadableOutput ? [] : ["-ss"];
  const { stdout } = await execFileAsync2("osascript", ["-e", script, outputArguments]);
  return stdout.trim();
}

// node_modules/bundle-name/index.js
async function bundleName(bundleId) {
  return runAppleScript(`tell application "Finder" to set app_path to application file id "${bundleId}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}

// node_modules/default-browser/windows.js
var import_node_util3 = require("util");
var import_node_child_process3 = require("child_process");
var execFileAsync3 = (0, import_node_util3.promisify)(import_node_child_process3.execFile);
var windowsBrowserProgIds = {
  AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" },
  MSEdgeDHTML: { name: "Edge", id: "com.microsoft.edge" },
  // On macOS, it's "com.microsoft.edgemac"
  MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" },
  // Newer Edge/Win10 releases
  "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" },
  FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" },
  ChromeHTML: { name: "Chrome", id: "com.google.chrome" },
  BraveHTML: { name: "Brave", id: "com.brave.Browser" },
  BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" },
  BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" }
};
var UnknownBrowserError = class extends Error {
};
async function defaultBrowser(_execFileAsync = execFileAsync3) {
  const { stdout } = await _execFileAsync("reg", [
    "QUERY",
    " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice",
    "/v",
    "ProgId"
  ]);
  const match2 = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(stdout);
  if (!match2) {
    throw new UnknownBrowserError(`Cannot find Windows browser in stdout: ${JSON.stringify(stdout)}`);
  }
  const { id } = match2.groups;
  const browser = windowsBrowserProgIds[id];
  if (!browser) {
    throw new UnknownBrowserError(`Unknown browser ID: ${id}`);
  }
  return browser;
}

// node_modules/default-browser/index.js
var execFileAsync4 = (0, import_node_util4.promisify)(import_node_child_process4.execFile);
var titleize = (string) => string.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (x) => x.toUpperCase());
async function defaultBrowser2() {
  if (import_node_process4.default.platform === "darwin") {
    const id = await defaultBrowserId();
    const name = await bundleName(id);
    return { name, id };
  }
  if (import_node_process4.default.platform === "linux") {
    const { stdout } = await execFileAsync4("xdg-mime", ["query", "default", "x-scheme-handler/http"]);
    const id = stdout.trim();
    const name = titleize(id.replace(/.desktop$/, "").replace("-", " "));
    return { name, id };
  }
  if (import_node_process4.default.platform === "win32") {
    return defaultBrowser();
  }
  throw new Error("Only macOS, Linux, and Windows are supported");
}

// node_modules/open/index.js
var __dirname = import_node_path.default.dirname((0, import_node_url.fileURLToPath)(_importMetaUrl));
var localXdgOpenPath = import_node_path.default.join(__dirname, "xdg-open");
var { platform, arch } = import_node_process5.default;
var getWslDrivesMountPoint = (() => {
  const defaultMountPoint = "/mnt/";
  let mountPoint;
  return async function() {
    if (mountPoint) {
      return mountPoint;
    }
    const configFilePath = "/etc/wsl.conf";
    let isConfigFileExists = false;
    try {
      await import_promises.default.access(configFilePath, import_promises.constants.F_OK);
      isConfigFileExists = true;
    } catch (e) {
    }
    if (!isConfigFileExists) {
      return defaultMountPoint;
    }
    const configContent = await import_promises.default.readFile(configFilePath, { encoding: "utf8" });
    const configMountPoint = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(configContent);
    if (!configMountPoint) {
      return defaultMountPoint;
    }
    mountPoint = configMountPoint.groups.mountPoint.trim();
    mountPoint = mountPoint.endsWith("/") ? mountPoint : `${mountPoint}/`;
    return mountPoint;
  };
})();
var pTryEach = async (array, mapper) => {
  let latestError;
  for (const item of array) {
    try {
      return await mapper(item);
    } catch (error) {
      latestError = error;
    }
  }
  throw latestError;
};
var baseOpen = async (options) => {
  var _a, _b;
  options = {
    wait: false,
    background: false,
    newInstance: false,
    allowNonzeroExitCode: false,
    ...options
  };
  if (Array.isArray(options.app)) {
    return pTryEach(options.app, (singleApp) => baseOpen({
      ...options,
      app: singleApp
    }));
  }
  let { name: app, arguments: appArguments = [] } = (_a = options.app) != null ? _a : {};
  appArguments = [...appArguments];
  if (Array.isArray(app)) {
    return pTryEach(app, (appName) => baseOpen({
      ...options,
      app: {
        name: appName,
        arguments: appArguments
      }
    }));
  }
  if (app === "browser" || app === "browserPrivate") {
    const ids = {
      "com.google.chrome": "chrome",
      "google-chrome.desktop": "chrome",
      "org.mozilla.firefox": "firefox",
      "firefox.desktop": "firefox",
      "com.microsoft.msedge": "edge",
      "com.microsoft.edge": "edge",
      "microsoft-edge.desktop": "edge"
    };
    const flags = {
      chrome: "--incognito",
      firefox: "--private-window",
      edge: "--inPrivate"
    };
    const browser = await defaultBrowser2();
    if (browser.id in ids) {
      const browserName = ids[browser.id];
      if (app === "browserPrivate") {
        appArguments.push(flags[browserName]);
      }
      return baseOpen({
        ...options,
        app: {
          name: apps[browserName],
          arguments: appArguments
        }
      });
    }
    throw new Error(`${browser.name} is not supported as a default browser`);
  }
  let command;
  const cliArguments = [];
  const childProcessOptions = {};
  if (platform === "darwin") {
    command = "open";
    if (options.wait) {
      cliArguments.push("--wait-apps");
    }
    if (options.background) {
      cliArguments.push("--background");
    }
    if (options.newInstance) {
      cliArguments.push("--new");
    }
    if (app) {
      cliArguments.push("-a", app);
    }
  } else if (platform === "win32" || is_wsl_default && !isInsideContainer() && !app) {
    const mountPoint = await getWslDrivesMountPoint();
    command = is_wsl_default ? `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe` : `${import_node_process5.default.env.SYSTEMROOT || import_node_process5.default.env.windir || "C:\\Windows"}\\System32\\WindowsPowerShell\\v1.0\\powershell`;
    cliArguments.push(
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-EncodedCommand"
    );
    if (!is_wsl_default) {
      childProcessOptions.windowsVerbatimArguments = true;
    }
    const encodedArguments = ["Start"];
    if (options.wait) {
      encodedArguments.push("-Wait");
    }
    if (app) {
      encodedArguments.push(`"\`"${app}\`""`);
      if (options.target) {
        appArguments.push(options.target);
      }
    } else if (options.target) {
      encodedArguments.push(`"${options.target}"`);
    }
    if (appArguments.length > 0) {
      appArguments = appArguments.map((argument) => `"\`"${argument}\`""`);
      encodedArguments.push("-ArgumentList", appArguments.join(","));
    }
    options.target = import_node_buffer.Buffer.from(encodedArguments.join(" "), "utf16le").toString("base64");
  } else {
    if (app) {
      command = app;
    } else {
      const isBundled = !__dirname || __dirname === "/";
      let exeLocalXdgOpen = false;
      try {
        await import_promises.default.access(localXdgOpenPath, import_promises.constants.X_OK);
        exeLocalXdgOpen = true;
      } catch (e) {
      }
      const useSystemXdgOpen = (_b = import_node_process5.default.versions.electron) != null ? _b : platform === "android" || isBundled || !exeLocalXdgOpen;
      command = useSystemXdgOpen ? "xdg-open" : localXdgOpenPath;
    }
    if (appArguments.length > 0) {
      cliArguments.push(...appArguments);
    }
    if (!options.wait) {
      childProcessOptions.stdio = "ignore";
      childProcessOptions.detached = true;
    }
  }
  if (platform === "darwin" && appArguments.length > 0) {
    cliArguments.push("--args", ...appArguments);
  }
  if (options.target) {
    cliArguments.push(options.target);
  }
  const subprocess = import_node_child_process5.default.spawn(command, cliArguments, childProcessOptions);
  if (options.wait) {
    return new Promise((resolve, reject) => {
      subprocess.once("error", reject);
      subprocess.once("close", (exitCode) => {
        if (!options.allowNonzeroExitCode && exitCode > 0) {
          reject(new Error(`Exited with code ${exitCode}`));
          return;
        }
        resolve(subprocess);
      });
    });
  }
  subprocess.unref();
  return subprocess;
};
var open = (target, options) => {
  if (typeof target !== "string") {
    throw new TypeError("Expected a `target`");
  }
  return baseOpen({
    ...options,
    target
  });
};
function detectArchBinary(binary) {
  if (typeof binary === "string" || Array.isArray(binary)) {
    return binary;
  }
  const { [arch]: archBinary } = binary;
  if (!archBinary) {
    throw new Error(`${arch} is not supported`);
  }
  return archBinary;
}
function detectPlatformBinary({ [platform]: platformBinary }, { wsl }) {
  if (wsl && is_wsl_default) {
    return detectArchBinary(wsl);
  }
  if (!platformBinary) {
    throw new Error(`${platform} is not supported`);
  }
  return detectArchBinary(platformBinary);
}
var apps = {};
defineLazyProperty(apps, "chrome", () => detectPlatformBinary({
  darwin: "google chrome",
  win32: "chrome",
  linux: ["google-chrome", "google-chrome-stable", "chromium"]
}, {
  wsl: {
    ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
  }
}));
defineLazyProperty(apps, "firefox", () => detectPlatformBinary({
  darwin: "firefox",
  win32: "C:\\Program Files\\Mozilla Firefox\\firefox.exe",
  linux: "firefox"
}, {
  wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
}));
defineLazyProperty(apps, "edge", () => detectPlatformBinary({
  darwin: "microsoft edge",
  win32: "msedge",
  linux: ["microsoft-edge", "microsoft-edge-dev"]
}, {
  wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
}));
defineLazyProperty(apps, "browser", () => "browser");
defineLazyProperty(apps, "browserPrivate", () => "browserPrivate");
var open_default = open;

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}

// src/command/vitepressCommand.ts
var path4 = __toESM(require("path"));

// src/dataview/dataview.ts
var import_obsidian_dataview = __toESM(require_lib());
var fs7 = __toESM(require("fs"));
var path3 = __toESM(require("path"));
var import_path2 = require("path");
var import_fs2 = require("fs");
var DataviewActions = class {
  constructor(app, plugin) {
    this.app = app;
    this.plugin = plugin;
    this.dataViewApi = (0, import_obsidian_dataview.getAPI)(app);
    if (!this.dataViewApi) {
      console.error("Dataview API not found");
    }
  }
  async copyFileSyncRecursive(src2, dest2, isCopyDir = false, regexText = "") {
    fs7.mkdirSync(path3.dirname(dest2), { recursive: true });
    if (!regexText) {
      if (isCopyDir) {
        fs7.cpSync(src2, dest2, { recursive: true });
      } else {
        await this.copyFileSync(src2, dest2);
      }
    } else {
      if (this.mathPrefix(src2, regexText)) {
        return;
      }
      if (isCopyDir) {
        const content = (0, import_fs2.readdirSync)(src2, { withFileTypes: true });
        for (const file of content) {
          if (file.isDirectory()) {
            await this.copyFileSyncRecursive(src2 + import_path2.sep + file.name, dest2 + import_path2.sep + file.name, true, regexText);
          } else {
            await this.copyFileSyncRecursive(src2 + import_path2.sep + file.name, dest2 + import_path2.sep + file.name, false, regexText);
          }
        }
      } else {
        await this.copyFileSync(src2, dest2);
      }
    }
  }
  mathPrefix(path5, regexText) {
    const name = path5.split(import_path2.sep).pop();
    if (name) {
      return new RegExp(regexText).test(name);
    }
    return false;
  }
  async copyFileSync(src, dest) {
    var _a, _b, _c, _d, _e, _f;
    if (this.dataViewApi) {
      this.dataViewApi = (0, import_obsidian_dataview.getAPI)(this.app);
    }
    const dv = this.dataViewApi;
    if ((this.plugin.settings.useDataView || this.plugin.settings.useDataViewJs) && dv) {
      let data = fs7.readFileSync(src, "utf8");
      const CODEBLOCK = /```(?<language>.+)?\n(?<query>[\s\S]*?)```/gm;
      const CODEBLOCK_REGEX = /```(?<language>.+)?\n(?<query>[\s\S]*?)```/m;
      const match = data.match(CODEBLOCK);
      if (match) {
        let haveDataviewBlock = false;
        for (const mmText of match) {
          const match = mmText.match(CODEBLOCK_REGEX);
          if (match && match.length) {
            const language = (_c = (_b = (_a = match.groups) == null ? void 0 : _a.language) == null ? void 0 : _b.trim()) != null ? _c : "";
            const query = (_f = (_e = (_d = match.groups) == null ? void 0 : _d.query) == null ? void 0 : _e.trim()) != null ? _f : "";
            try {
              const workspace = this.app.vault.adapter.basePath;
              const srcRelativePath = src.replace(new RegExp("^" + workspace + "/"), "");
              if (language === "dataview" && this.plugin.settings.useDataView) {
                haveDataviewBlock = true;
                const result2 = await dv.tryQueryMarkdown(query, srcRelativePath);
                data = data.replace(match[0], result2);
              }
              if (language === "dataviewjs" && this.plugin.settings.useDataViewJs) {
                haveDataviewBlock = true;
                const result = eval(query);
                data = data.replace(match[0], result);
              }
            } catch (err) {
              console.error(err);
              data = data.replace(match[0], `\`\`\`
Dataview:${err.message}
\`\`\``);
            }
          }
        }
        if (haveDataviewBlock) {
          fs7.writeFileSync(dest, data, { encoding: "utf8" });
          return;
        }
      }
      fs7.copyFileSync(src, dest);
    } else {
      fs7.copyFileSync(src, dest);
    }
  }
};

// src/command/vitepressCommand.ts
var VitepressCommand = class {
  constructor(app, plugin) {
    this.kill = require_tree_kill();
    this.startedVitepressHostAddress = "";
    this.devChildProcess = null;
    this.isWindowsPlatform = import_obsidian3.Platform.isWin;
    this.previewChildProcess = null;
    this.isRunning = void 0;
    this.fsWatcher = null;
    this.app = app;
    this.consoleModal = new ConsoleModal(app);
    this.plugin = plugin;
    this.app.workspace.on("quit", () => {
      var _a, _b, _c;
      if ((_a = this.devChildProcess) == null ? void 0 : _a.pid) {
        this.kill(this.devChildProcess.pid);
      }
      if ((_b = this.previewChildProcess) == null ? void 0 : _b.pid) {
        this.kill(this.previewChildProcess.pid);
      }
      (_c = this.fsWatcher) == null ? void 0 : _c.close();
    });
    this.dataview = new DataviewActions(app, plugin);
  }
  getVitepressFolder() {
    return this.plugin.settings.vitepressDir;
  }
  preview() {
    var _a;
    if (!this.checkSetting()) {
      return;
    }
    this.consoleModal.open();
    if ((_a = this.previewChildProcess) == null ? void 0 : _a.pid) {
      this.kill(this.previewChildProcess.pid);
    }
    this.previewChildProcess = child_process.spawn(`npm`, ["run", "docs:preview"], this.getSpawnOptions());
    this.commonCommandOnRunning("[vitepress preview]", this.previewChildProcess, (data2) => {
      const address = this.extractAddress(data2.toString(), false);
      if (address) {
        this.openBrowserByUrl(address);
      }
    });
  }
  publish() {
    if (!this.checkSetting()) {
      return;
    }
    this.consoleModal.open();
    const scriptPath = this.plugin.settings.deployScriptPath;
    if (!scriptPath) {
      new import_obsidian3.Notice(instance.t("publish-script-not-set"));
      return;
    }
    this.consoleModal.appendLogResult(this.getVitepressFolder());
    let command;
    if (import_obsidian3.Platform.isWin) {
      command = `start cmd /k bash ${scriptPath}`;
    } else if (import_obsidian3.Platform.isMacOS) {
      command = `osascript -e 'tell application "Terminal" to do script "cd ${this.getVitepressFolder()} && bash ${scriptPath}"' -e 'tell application "Terminal" to activate'`;
    } else {
      this.consoleModal.appendLogResult("Unsupported operating system");
      new import_obsidian3.Notice("Unsupported operating system");
      return;
    }
    this.consoleModal.appendLogResult("run script on new terminal:" + command);
    child_process.exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
  }
  build() {
    if (!this.checkSetting()) {
      return;
    }
    if (!this.docsPrepare()) {
      return;
    }
    this.consoleModal.open();
    const childProcess2 = child_process.spawn(`npm`, ["run", "docs:build"], this.getSpawnOptions());
    this.commonCommandOnRunning("[vitepress build]:", childProcess2);
  }
  previewOrClose(previewRibbonIconEl) {
    try {
      if (this.devChildProcess == null) {
        this.startPreview(true, () => {
          this.startFileWatcher();
        });
        previewRibbonIconEl == null ? void 0 : previewRibbonIconEl.setAttr("aria-label", "Close:vitepress dev");
      } else {
        this.closeDev();
        previewRibbonIconEl == null ? void 0 : previewRibbonIconEl.setAttr("aria-label", "Run:vitepress dev");
      }
    } catch (e) {
      console.error(e);
      this.consoleModal.appendLogResult("error!" + e, 2 /* Error */);
      new import_obsidian3.Notice("error!" + e);
    }
  }
  closeDev() {
    var _a, _b;
    if ((_a = this.devChildProcess) == null ? void 0 : _a.pid) {
      this.kill(this.devChildProcess.pid);
      (_b = this.fsWatcher) == null ? void 0 : _b.close();
    }
    this.updateState(false);
  }
  closePreview() {
    var _a;
    if ((_a = this.previewChildProcess) == null ? void 0 : _a.pid) {
      this.kill(this.previewChildProcess.pid);
    }
  }
  openBrowser() {
    if (!this.checkSetting()) {
      return;
    }
    if (this.isRunning) {
      (async () => {
        await this.copyToVitepressSrc(getCurrentMdFileRelativePath(this.app, false));
        this.openBrowserByUrl(this.startedVitepressHostAddress + "/" + getCurrentMdFileRelativePath(this.app));
      })();
    } else {
      this.startPreview(false, async () => {
        await this.copyToVitepressSrc(getCurrentMdFileRelativePath(this.app, false));
        this.openBrowserByUrl(this.startedVitepressHostAddress + "/" + getCurrentMdFileRelativePath(this.app));
        this.startFileWatcher();
      });
    }
  }
  startFileWatcher() {
    var _a;
    if (!this.plugin.settings.autoSyncMdFile) {
      return;
    }
    const workspace2 = this.app.vault.adapter.basePath;
    (_a = this.fsWatcher) == null ? void 0 : _a.close();
    this.fsWatcher = fs8.watch(
      workspace2,
      { recursive: true },
      async (_, filename) => {
        if (!filename) {
          return;
        }
        const obFilePath = `${workspace2}${path4.sep}${filename}`;
        const obFileExisted = fs8.existsSync(obFilePath);
        const copyTo = `${this.plugin.settings.vitepressSrcDir}${path4.sep}${filename}`;
        if (!obFileExisted) {
          deleteFileOrFolder(copyTo);
          return;
        }
        const stats = fs8.statSync(obFilePath);
        if (stats.isDirectory()) {
          await this.copyToVitepressSrc(filename, true);
        } else {
          if (/\.md$/.test(filename)) {
            await this.copyToVitepressSrc(filename);
          }
        }
      }
    );
  }
  openBrowserByUrl(url) {
    new import_obsidian3.Notice(`open ${url}`);
    open_default(url).then(() => {
    }).catch((e) => {
      console.error(`open ${url}`, e);
    });
  }
  checkSetting() {
    const actionName = "[CheckSetting]:";
    const checkMapping = {
      "vitepressDir": { desc: instance.t("vitepress-folder-path"), required: true },
      "vitepressSrcDir": { desc: instance.t("vitepress-srcDir-path"), required: false },
      "vitepressStaticDir": { desc: instance.t("vitepress-fixed-dir"), required: false }
    };
    for (const key of Object.keys(checkMapping)) {
      const configPath = this.plugin.settings[key];
      const configDesc = checkMapping[key].desc;
      if (!configPath && checkMapping[key].required) {
        const tips = instance.t("guide-to-setting", { name: configDesc });
        const notice = new import_obsidian3.Notice(tips, 3e3);
        notice.noticeEl.addEventListener("click", () => {
          this.app.setting.open();
          this.app.setting.openTabById("vitepress-publisher");
        });
        return false;
      }
      if (configPath && !fs8.existsSync(configPath)) {
        const tips = instance.t("file-not-existed-check", { name: configDesc });
        new import_obsidian3.Notice(tips, 3e3);
        this.consoleModal.appendLogResult(`${actionName}` + tips);
        return false;
      }
    }
    return true;
  }
  startPreview(openBrowserOnStart, finish = null) {
    if (!this.checkSetting()) {
      return;
    }
    this.consoleModal.open();
    const actionName = "[vitepress]:";
    this.consoleModal.appendLogResult(`${actionName} starting...`);
    if (!this.docsPrepare()) {
      return;
    }
    this.devChildProcess = child_process.spawn(`npm`, ["run", "docs:dev"], this.getSpawnOptions());
    this.devChildProcess.stdout.on("data", (data2) => {
      data2 = this.stripAnsiText(data2);
      this.consoleModal.appendLogResult(data2);
      const address = this.extractAddress(data2.toString());
      if (address && !this.startedVitepressHostAddress) {
        this.startedVitepressHostAddress = address;
        if (openBrowserOnStart) {
          this.openBrowserByUrl(this.startedVitepressHostAddress);
        }
        finish && finish();
      }
      this.updateState(true);
    });
    this.devChildProcess.stderr.on("data", (data2) => {
      data2 = this.stripAnsiText(data2);
      this.consoleModal.appendLogResult(data2, 1 /* Warning */);
    });
    this.devChildProcess.on("close", (code) => {
      const tips = `${actionName} closed ${code != null ? code : ""}`;
      this.consoleModal.appendLogResult(tips);
      new import_obsidian3.Notice(tips);
      this.updateState(false);
    });
    this.devChildProcess.on("error", (err) => {
      const tips = `${actionName}Failed to start child process: ` + err;
      this.consoleModal.appendLogResult(tips, 2 /* Error */);
      console.error(tips);
      new import_obsidian3.Notice(tips);
      this.updateState(false);
    });
  }
  async docsPrepare() {
    const actionName = "[docsPrepare]:";
    const vitepressSrcDir = this.plugin.settings.vitepressSrcDir;
    if (!vitepressSrcDir) {
      this.consoleModal.appendLogResult(`${actionName} The srcDir path for Vitepress is not set, please set it first.`);
      new import_obsidian3.Notice(instance.t("vitepress-srcDir-path-not-set"));
      return false;
    }
    const vitepressStaicDir = this.plugin.settings.vitepressStaticDir;
    if (this.plugin.settings.needCleanDirFolder) {
      this.consoleModal.appendLogResult(`${actionName} remove folder '${vitepressSrcDir}'`);
      if (fs8.existsSync(vitepressSrcDir)) {
        deleteFilesInDirectorySync(vitepressSrcDir);
      }
    }
    if (vitepressStaicDir) {
      if (!fs8.existsSync(vitepressStaicDir)) {
        this.consoleModal.appendLogResult(`${actionName} '${vitepressStaicDir}' not exists, stopped.`);
        return false;
      }
      const files = fs8.readdirSync(vitepressStaicDir);
      for (const file of files) {
        const filePath = `${vitepressStaicDir}/${file}`;
        const stats = fs8.statSync(filePath);
        await this.dataview.copyFileSyncRecursive(filePath, `${vitepressSrcDir}/${file}`, stats.isDirectory());
      }
    }
    const folderOrFile = this.plugin.settings.publishedContentList;
    this.consoleModal.appendLogResult(`${actionName} copy '${folderOrFile.map((item) => item.name)}' to folder '${vitepressSrcDir}'`);
    const workspace2 = this.app.vault.adapter.basePath;
    for (const subContent of folderOrFile) {
      const srcPath = `${workspace2}/${subContent.name}`;
      if (fs8.existsSync(srcPath)) {
        await this.dataview.copyFileSyncRecursive(srcPath, `${vitepressSrcDir}/${subContent.name}`, subContent.isFolder, this.plugin.settings.ignoreFileRegex);
      } else {
        this.consoleModal.appendLogResult(`${actionName} '${srcPath}' not exists`, 1 /* Warning */);
      }
    }
    return true;
  }
  commonCommandOnRunning(actionName, process7, onDataCallback = null) {
    process7.stdout.on("data", (data2) => {
      data2 = this.stripAnsiText(data2);
      this.consoleModal.appendLogResult(data2);
      onDataCallback && onDataCallback(data2.toString());
    });
    process7.stderr.on("data", (data2) => {
      this.consoleModal.appendLogResult(this.stripAnsiText(data2), 1 /* Warning */);
    });
    process7.on("close", (code) => {
      const tips = `${actionName} closed ${code != null ? code : ""}`;
      this.consoleModal.appendLogResult(tips);
      new import_obsidian3.Notice(tips);
    });
    process7.on("error", (err) => {
      const tips = `${actionName} failed to start child process: ` + err;
      new import_obsidian3.Notice(tips);
      this.consoleModal.appendLogResult(tips, 2 /* Error */);
    });
  }
  extractAddress(text, isDev = true) {
    if (isDev && this.startedVitepressHostAddress) {
      return "";
    }
    if (text) {
      const regex2 = /http:\/\/(localhost|127.0.0.1):\d+/;
      const matchResult = text.match(regex2);
      if (matchResult) {
        return matchResult[0] || "";
      }
    }
    return "";
  }
  stripAnsiText(text) {
    return stripAnsi(text.toString());
  }
  updateState(running) {
    this.isRunning = running;
    if (running) {
      if (this.plugin.previewRibbonIconEl) {
        (0, import_obsidian3.setIcon)(this.plugin.previewRibbonIconEl, ICON_NAME_ON_PREVIEW);
      }
    } else {
      this.devChildProcess = null;
      this.startedVitepressHostAddress = "";
      if (this.plugin.previewRibbonIconEl) {
        (0, import_obsidian3.setIcon)(this.plugin.previewRibbonIconEl, ICON_NAME);
      }
    }
  }
  async copyToVitepressSrc(relativeFile, isCopyDir = false) {
    const basePath = this.app.vault.adapter.basePath;
    if (relativeFile) {
      const fullFilePath = `${basePath}${path4.sep}${relativeFile}`;
      const copyTo = `${this.plugin.settings.vitepressSrcDir}${path4.sep}${relativeFile}`;
      try {
        await this.dataview.copyFileSyncRecursive(fullFilePath, copyTo, isCopyDir);
      } catch (err) {
        new import_obsidian3.Notice("file copy failed" + err);
      }
    }
  }
  getSpawnOptions() {
    return {
      cwd: this.getVitepressFolder(),
      env: {
        PATH: this.isWindowsPlatform ? process.env.PATH : process.env.PATH + ":/usr/local/bin"
      },
      shell: this.isWindowsPlatform
    };
  }
};

// src/i18n/i18next.ts
var import_obsidian4 = require("obsidian");

// src/i18n/locales/en.json
var en_exports = {};
__export(en_exports, {
  "adv-settings": () => adv_settings,
  "auto-sync-md": () => auto_sync_md,
  "auto-sync-md-desc": () => auto_sync_md_desc,
  "basic-setting": () => basic_setting,
  "clean-src-dir": () => clean_src_dir,
  "clean-src-dir-desc": () => clean_src_dir_desc,
  default: () => en_default,
  "enter-regex": () => enter_regex,
  "file-not-existed-check": () => file_not_existed_check,
  "filter-doc": () => filter_doc,
  "filter-doc-desc": () => filter_doc_desc,
  "folder-setting": () => folder_setting,
  "guide-to-setting": () => guide_to_setting,
  "need-absolute-path": () => need_absolute_path,
  "parser-dataview": () => parser_dataview,
  "parser-dataview-desc": () => parser_dataview_desc,
  "parser-dataviewjs": () => parser_dataviewjs,
  "parser-dataviewjsdesc": () => parser_dataviewjsdesc,
  "plugin-action-tip": () => plugin_action_tip,
  "plugin-action-tip-clean-dir": () => plugin_action_tip_clean_dir,
  "plugin-action-tip-filter-by-regex": () => plugin_action_tip_filter_by_regex,
  "plugin-action-tip-move-to-src-dir": () => plugin_action_tip_move_to_src_dir,
  "plugin-action-tip-public-move-to-src-dir": () => plugin_action_tip_public_move_to_src_dir,
  "publish-content": () => publish_content,
  "publish-content-desc": () => publish_content_desc,
  "publish-script": () => publish_script,
  "publish-script-desc": () => publish_script_desc,
  "publish-script-not-set": () => publish_script_not_set,
  "publish-setting": () => publish_setting,
  "vitepress-fixed-dir": () => vitepress_fixed_dir,
  "vitepress-fixed-dir-desc": () => vitepress_fixed_dir_desc,
  "vitepress-folder-path": () => vitepress_folder_path,
  "vitepress-srcDir-path": () => vitepress_srcDir_path,
  "vitepress-srcDir-path-not-set": () => vitepress_srcDir_path_not_set
});
var basic_setting = "Basic settings";
var folder_setting = "Folder settings";
var publish_setting = "Deploy settings";
var publish_script = "Deploy script";
var publish_script_desc = "Please enter the absolute path or the relative path to the vitepress directory of the deploy script file";
var publish_script_not_set = "Deploy script path not set";
var vitepress_folder_path = "Vitepress folder path";
var publish_content = "Publish content";
var publish_content_desc = "Select the top-level directory or file in the current Obsidian document to copy to the Vitepress directory";
var vitepress_srcDir_path = "Vitepress srcDir path";
var vitepress_srcDir_path_not_set = "Vitepress srcDir path not set";
var need_absolute_path = "Please enter the absolute path";
var adv_settings = "Advanced settings";
var clean_src_dir = "Clear srcDir directory before executing the command";
var clean_src_dir_desc = "When vitepress previews or compiles, whether to clear the srcDir directory first \nand then perform other operations";
var vitepress_fixed_dir = "Vitepress fixed directory";
var vitepress_fixed_dir_desc = "Please enter the absolute path\nIf set, the contents of this directory will be copied to the srcDir directory\nwhen executing the command";
var filter_doc = "Filter obsidian files or directories";
var filter_doc_desc = "Filter files that match this regular expression in the file name.\nIf left blank, no filtering will be performed.";
var plugin_action_tip = "According to the current configuration, the following operations will be performed when previewing or compiling";
var plugin_action_tip_clean_dir = "First, clear the srcDir directory\n";
var plugin_action_tip_move_to_src_dir = "Move files from the configured fixed directory to the srcDir directory\n";
var plugin_action_tip_filter_by_regex = "Filter files that match the regular expression ({{regex}}) in the file name";
var plugin_action_tip_public_move_to_src_dir = "Move the published content to the srcDir directory";
var enter_regex = "Please enter a regular expression";
var guide_to_setting = "The {{name}} is not set, click here to set";
var file_not_existed_check = "{{name}} does not exist, please check the settings";
var auto_sync_md = "Auto sync file";
var auto_sync_md_desc = "Enable or disable automatic syncing of files(.md) to Vitepress srcDir when running vitepress dev.";
var parser_dataview = 'Parsing "dataview"';
var parser_dataview_desc = "Parsing the `dataview` code blocks (assuming the `dataview` plugin is already installed) ";
var parser_dataviewjs = "Parsing dataviewjs (experimental feature)";
var parser_dataviewjsdesc = "Parsing the `dataviewjs` code blocks (assuming the `dataview` plugin is already installed), does not support dataviewjs related DOM operations, such as dv.span/dv.span/dv.paragraph, and so on.";
var en_default = {
  "basic-setting": basic_setting,
  "folder-setting": folder_setting,
  "publish-setting": publish_setting,
  "publish-script": publish_script,
  "publish-script-desc": publish_script_desc,
  "publish-script-not-set": publish_script_not_set,
  "vitepress-folder-path": vitepress_folder_path,
  "publish-content": publish_content,
  "publish-content-desc": publish_content_desc,
  "vitepress-srcDir-path": vitepress_srcDir_path,
  "vitepress-srcDir-path-not-set": vitepress_srcDir_path_not_set,
  "need-absolute-path": need_absolute_path,
  "adv-settings": adv_settings,
  "clean-src-dir": clean_src_dir,
  "clean-src-dir-desc": clean_src_dir_desc,
  "vitepress-fixed-dir": vitepress_fixed_dir,
  "vitepress-fixed-dir-desc": vitepress_fixed_dir_desc,
  "filter-doc": filter_doc,
  "filter-doc-desc": filter_doc_desc,
  "plugin-action-tip": plugin_action_tip,
  "plugin-action-tip-clean-dir": plugin_action_tip_clean_dir,
  "plugin-action-tip-move-to-src-dir": plugin_action_tip_move_to_src_dir,
  "plugin-action-tip-filter-by-regex": plugin_action_tip_filter_by_regex,
  "plugin-action-tip-public-move-to-src-dir": plugin_action_tip_public_move_to_src_dir,
  "enter-regex": enter_regex,
  "guide-to-setting": guide_to_setting,
  "file-not-existed-check": file_not_existed_check,
  "auto-sync-md": auto_sync_md,
  "auto-sync-md-desc": auto_sync_md_desc,
  "parser-dataview": parser_dataview,
  "parser-dataview-desc": parser_dataview_desc,
  "parser-dataviewjs": parser_dataviewjs,
  "parser-dataviewjsdesc": parser_dataviewjsdesc
};

// src/i18n/locales/zh-cn.json
var zh_cn_exports = {};
__export(zh_cn_exports, {
  "adv-settings": () => adv_settings2,
  "auto-sync-md": () => auto_sync_md2,
  "auto-sync-md-desc": () => auto_sync_md_desc2,
  "basic-setting": () => basic_setting2,
  "clean-src-dir": () => clean_src_dir2,
  "clean-src-dir-desc": () => clean_src_dir_desc2,
  default: () => zh_cn_default,
  "enter-regex": () => enter_regex2,
  "file-not-existed-check": () => file_not_existed_check2,
  "filter-doc": () => filter_doc2,
  "filter-doc-desc": () => filter_doc_desc2,
  "folder-setting": () => folder_setting2,
  "guide-to-setting": () => guide_to_setting2,
  "need-absolute-path": () => need_absolute_path2,
  "parser-dataview": () => parser_dataview2,
  "parser-dataview-desc": () => parser_dataview_desc2,
  "parser-dataviewjs": () => parser_dataviewjs2,
  "parser-dataviewjsdesc": () => parser_dataviewjsdesc2,
  "plugin-action-tip": () => plugin_action_tip2,
  "plugin-action-tip-clean-dir": () => plugin_action_tip_clean_dir2,
  "plugin-action-tip-filter-by-regex": () => plugin_action_tip_filter_by_regex2,
  "plugin-action-tip-move-to-src-dir": () => plugin_action_tip_move_to_src_dir2,
  "plugin-action-tip-public-move-to-src-dir": () => plugin_action_tip_public_move_to_src_dir2,
  "publish-content": () => publish_content2,
  "publish-content-desc": () => publish_content_desc2,
  "publish-script": () => publish_script2,
  "publish-script-desc": () => publish_script_desc2,
  "publish-script-not-set": () => publish_script_not_set2,
  "publish-setting": () => publish_setting2,
  "vitepress-fixed-dir": () => vitepress_fixed_dir2,
  "vitepress-fixed-dir-desc": () => vitepress_fixed_dir_desc2,
  "vitepress-folder-path": () => vitepress_folder_path2,
  "vitepress-srcDir-path": () => vitepress_srcDir_path2
});
var basic_setting2 = "\u57FA\u672C\u8BBE\u7F6E";
var folder_setting2 = "\u76EE\u5F55\u8BBE\u7F6E";
var publish_setting2 = "\u53D1\u5E03\u8BBE\u7F6E";
var publish_script2 = "\u53D1\u5E03\u811A\u672C";
var publish_script_desc2 = "\u8BF7\u8F93\u5165\u53D1\u5E03\u811A\u672C\u7684\u7EDD\u5BF9\u8DEF\u5F84\u6216\u53D1\u5E03\u811A\u672C\u76F8\u5BF9vitepress\u76EE\u5F55\u7684\u8DEF\u5F84";
var publish_script_not_set2 = "\u672A\u8BBE\u7F6E\u90E8\u7F72\u811A\u672C\u7684\u8DEF\u5F84";
var vitepress_folder_path2 = "vitepress\u76EE\u5F55\u4F4D\u7F6E";
var publish_content2 = "\u53D1\u5E03\u5185\u5BB9";
var publish_content_desc2 = "\u5728\u5F53\u524Dobsidian\u6587\u6863\u4E2D\uFF0C\u9009\u62E9\u9700\u8981\u590D\u5236\u5230vitepress\u76EE\u5F55\u7684\u4E00\u7EA7\u76EE\u5F55\u6216\u6587\u4EF6";
var vitepress_srcDir_path2 = "vitepress\u7684srcDir\u8DEF\u5F84";
var need_absolute_path2 = "\u8BF7\u586B\u5199\u7EDD\u5BF9\u8DEF\u5F84";
var adv_settings2 = "\u9AD8\u7EA7\u8BBE\u7F6E";
var clean_src_dir2 = "\u6267\u884C\u547D\u4EE4\u65F6,\u5148\u6E05\u7A7AsrcDir\u76EE\u5F55";
var clean_src_dir_desc2 = "vitepress\u6267\u884C\u9884\u89C8\u6216\u8005\u7F16\u8BD1\u65F6,\u662F\u5426\u5148\u6E05\u7A7AsrcDir\u76EE\u5F55,\u518D\u6267\u884C\u5176\u4ED6\u64CD\u4F5C";
var vitepress_fixed_dir2 = "vitepress\u7684\u56FA\u5B9A\u6587\u4EF6\u76EE\u5F55";
var vitepress_fixed_dir_desc2 = "\u8BF7\u586B\u5199\u7EDD\u5BF9\u8DEF\u5F84\n\u5982\u679C\u8BBE\u7F6E\u4E86,\u6267\u884C\u547D\u4EE4\u65F6,\u6B64\u76EE\u5F55\u7684\u5185\u5BB9\u5C06\u590D\u5236\u5230srcDir\u76EE\u5F55";
var filter_doc2 = "\u8FC7\u6EE4obsidian\u6587\u4EF6\u6216\u76EE\u5F55";
var filter_doc_desc2 = "\u8FC7\u6EE4\u6587\u4EF6\u540D\u6EE1\u8DB3\u8BE5\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6587\u4EF6,\u5982\u679C\u4E0D\u586B,\u5219\u4E0D\u8FDB\u884C\u8FC7\u6EE4";
var plugin_action_tip2 = "\u6839\u636E\u5F53\u524D\u914D\u7F6E,\u6267\u884C\u9884\u89C8\u6216\u8005\u7F16\u8BD1\u65F6,\u5C06\u6267\u884C\u5982\u4E0B\u64CD\u4F5C:";
var plugin_action_tip_clean_dir2 = "\u9996\u5148\u4F1A\u6E05\u7A7AsrcDir\u76EE\u5F55\n";
var plugin_action_tip_move_to_src_dir2 = "\u5C06\u914D\u7F6E\u7684\u56FA\u5B9A\u6587\u4EF6\u76EE\u5F55\u5185\u7684\u6587\u4EF6\u79FB\u52A8\u5230srcDir\u76EE\u5F55\n";
var plugin_action_tip_filter_by_regex2 = "\u8FC7\u6EE4\u6587\u4EF6\u540D\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F({{regex}})\u7684\u6587\u4EF6";
var plugin_action_tip_public_move_to_src_dir2 = "\u5C06\u53D1\u5E03\u5185\u5BB9\u79FB\u52A8\u5230srcDir\u76EE\u5F55";
var enter_regex2 = "\u8BF7\u8F93\u5165\u6B63\u5219\u8868\u8FBE\u5F0F";
var guide_to_setting2 = "\u672A\u8BBE\u7F6E{{name}}\u8DEF\u5F84,\u70B9\u51FB\u8BBE\u7F6E";
var file_not_existed_check2 = "{{name}}\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u7F6E";
var auto_sync_md2 = "\u81EA\u52A8\u540C\u6B65\u6587\u4EF6";
var auto_sync_md_desc2 = "\u5F53\u8FD0\u884Cvitepress dev\u65F6,\u662F\u5426\u81EA\u52A8\u540C\u6B65.md\u6587\u4EF6\u5230Vitepress srcDir";
var parser_dataview2 = "\u89E3\u6790dataview";
var parser_dataview_desc2 = "\u662F\u5426\u9700\u8981\u5904\u7406dataview\u4EE3\u7801\u5757(\u9700\u8981\u5DF2\u7ECF\u5B89\u88C5dataview\u63D2\u4EF6)";
var parser_dataviewjs2 = "\u89E3\u6790dataviewjs(\u5B9E\u9A8C\u6027\u529F\u80FD)";
var parser_dataviewjsdesc2 = "\u662F\u5426\u9700\u8981\u89E3\u6790dataviewjs\u4EE3\u7801\u5757(\u9700\u8981\u5DF2\u7ECF\u5B89\u88C5dataview\u63D2\u4EF6),\u4E0D\u652F\u6301dataviewjs\u76F8\u5173\u7684dom\u64CD\u4F5C\uFF0C\u4F8B\u5982dv.span/dv.span/dv.paragraph\u7B49";
var zh_cn_default = {
  "basic-setting": basic_setting2,
  "folder-setting": folder_setting2,
  "publish-setting": publish_setting2,
  "publish-script": publish_script2,
  "publish-script-desc": publish_script_desc2,
  "publish-script-not-set": publish_script_not_set2,
  "vitepress-folder-path": vitepress_folder_path2,
  "publish-content": publish_content2,
  "publish-content-desc": publish_content_desc2,
  "vitepress-srcDir-path": vitepress_srcDir_path2,
  "need-absolute-path": need_absolute_path2,
  "adv-settings": adv_settings2,
  "clean-src-dir": clean_src_dir2,
  "clean-src-dir-desc": clean_src_dir_desc2,
  "vitepress-fixed-dir": vitepress_fixed_dir2,
  "vitepress-fixed-dir-desc": vitepress_fixed_dir_desc2,
  "filter-doc": filter_doc2,
  "filter-doc-desc": filter_doc_desc2,
  "plugin-action-tip": plugin_action_tip2,
  "plugin-action-tip-clean-dir": plugin_action_tip_clean_dir2,
  "plugin-action-tip-move-to-src-dir": plugin_action_tip_move_to_src_dir2,
  "plugin-action-tip-filter-by-regex": plugin_action_tip_filter_by_regex2,
  "plugin-action-tip-public-move-to-src-dir": plugin_action_tip_public_move_to_src_dir2,
  "enter-regex": enter_regex2,
  "guide-to-setting": guide_to_setting2,
  "file-not-existed-check": file_not_existed_check2,
  "auto-sync-md": auto_sync_md2,
  "auto-sync-md-desc": auto_sync_md_desc2,
  "parser-dataview": parser_dataview2,
  "parser-dataview-desc": parser_dataview_desc2,
  "parser-dataviewjs": parser_dataviewjs2,
  "parser-dataviewjsdesc": parser_dataviewjsdesc2
};

// src/i18n/i18next.ts
var resources = {
  en: { translation: en_exports },
  "zh_cn": { translation: zh_cn_exports }
};
var translationLanguage = Object.keys(resources).find(
  (i) => i == import_obsidian4.moment.locale().replace("-", "_")
) ? import_obsidian4.moment.locale().replace("-", "_") : "en";

// src/main.ts
var ObsidianPlugin = class extends import_obsidian5.Plugin {
  constructor(app, manifest) {
    super(app, manifest);
    this.previewRibbonIconEl = null;
    this.vitePressCmd = new VitepressCommand(app, this);
  }
  async onload() {
    await instance.init({
      lng: translationLanguage,
      fallbackLng: "en",
      resources,
      returnNull: false
    });
    (0, import_obsidian5.addIcon)(ICON_NAME, ICON_SVG_CLOSE);
    (0, import_obsidian5.addIcon)(ICON_NAME_ON_PREVIEW, ICON_SVG_PREVIEW);
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.previewRibbonIconEl = this.addRibbonIcon(ICON_NAME, "start vitepress", (evt) => {
      this.vitePressCmd.previewOrClose(this.previewRibbonIconEl);
    });
    this.addCommand({
      id: "vitepress-build",
      name: "vitepress build (npm run docs:build)",
      callback: () => {
        this.vitePressCmd.build();
      }
    });
    this.addCommand({
      id: "vitepress-preview",
      name: "vitepress preview (npm run docs:preview)",
      callback: () => {
        this.vitePressCmd.preview();
      }
    });
    this.addCommand({
      id: "vitepress-preview-close",
      name: "vitepress preview close",
      callback: () => {
        this.vitePressCmd.closePreview();
      }
    });
    this.addCommand({
      id: "vitepress-publish",
      name: "vitepress publish",
      callback: () => {
        this.vitePressCmd.publish();
      }
    });
    this.addCommand({
      id: "open-log-modal",
      name: "Show log",
      callback: () => {
        this.vitePressCmd.consoleModal.open();
      }
    });
    this.addSettingTab(new SettingTab(this.app, this));
    this.handleViewActionButton(true);
    this.app.workspace.on("layout-change", () => {
      this.handleViewActionButton(true);
    });
  }
  handleViewActionButton(needAddIcon) {
    activeWindow.requestAnimationFrame(
      () => this.app.workspace.iterateAllLeaves(
        (leaf) => {
          const leafViewEl = leaf == null ? void 0 : leaf.view.containerEl;
          const viewAction = leafViewEl == null ? void 0 : leafViewEl.getElementsByClassName("view-actions")[0];
          if (!viewAction) {
            return;
          }
          const buttonClass = "vitepress-view-action-preview-file";
          const existedButtons = viewAction.getElementsByClassName(buttonClass);
          if (!needAddIcon) {
            for (const button of Array.from(existedButtons)) {
              button.detach();
            }
            return;
          }
          if (existedButtons.length > 0) {
            const [, ...editionButton] = Array.from(existedButtons);
            for (const button of editionButton) {
              button.detach();
            }
            return;
          }
          const buttonIcon = createEl("a", {
            cls: ["view-action", "clickable-icon", buttonClass],
            attr: { "aria-label-position": "bottom", "aria-label": "preview on vitepress" }
          });
          (0, import_obsidian5.setIcon)(buttonIcon, ICON_NAME);
          viewAction.prepend(buttonIcon);
          this.registerDomEvent(buttonIcon, "mousedown", (evt) => {
            if (evt.button === 0) {
              this.vitePressCmd.openBrowser();
            }
          });
        }
      )
    );
  }
  onunload() {
    this.vitePressCmd.closeDev();
    this.vitePressCmd.closePreview();
    this.handleViewActionButton(false);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
