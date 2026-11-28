export const id = 284;
export const ids = [284];
export const modules = {
  41466: (dd, Od, md) => {
    md.d(Od, {
      b: () => Tv,
      c: () => lN
    });
    const Wd = "0.9.4",
      Fd = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: Wd
      };
    var Rd = Fd;
    const Xd = "$early_access_features",
      Kd = "$active_feature_flags",
      hd = "$feature_flag_details",
      vd = "$feature_flag_errors",
      Qd = "$feature_flag_evaluated_at",
      td = "$feature_flag_request_id",
      od = "$minimal_flag_called_events",
      Nd = "$enabled_feature_flags",
      qd = "$stored_group_properties",
      Hd = "$stored_person_properties",
      yd = "$flag_call_reported",
      bd = "$flag_call_reported_session_id",
      Td = "$feature_flag_payloads",
      pd = "$override_feature_flags",
      Yd = "$override_feature_flag_payloads",
      gd = "visibilitychange",
      wd = "$people_distinct_id",
      Ed = "distinct_id",
      Jd = "$device_id",
      Ud = "$device_model",
      xd = "__alias",
      Bd = "__cmpns",
      Sd = "$fbc",
      sd = "$fbc_persistence",
      ud = "$fbp",
      Vd = "$fbp_persistence",
      Ad = "__timers",
      rd = "$autocapture_disabled_server_side",
      Gd = "$heatmaps_enabled_server_side",
      nd = "$exception_capture_enabled_server_side",
      Ld = "$error_tracking_suppression_rules",
      Pd = "$error_tracking_capture_extension_exceptions",
      zd = "$web_vitals_enabled_server_side",
      cd = "$dead_clicks_enabled_server_side",
      jd = "$product_tours_enabled_server_side",
      Dd = "$logs_capture_enabled_server_side",
      ed = "$web_vitals_allowed_metrics",
      Id = "$session_recording_remote_config",
      ld = "$session_recording_enabled_server_side",
      Cd = "$replay_sample_rate",
      Zd = "$replay_override_sampling",
      kd = "$replay_override_linked_flag",
      fd = "$replay_override_url_trigger",
      Md = "$replay_override_event_trigger",
      dO = "$sesid",
      OO = "$session_is_sampled",
      mO = "$session_past_minimum_duration",
      WO = "$session_recording_url_trigger_activated_session",
      FO = "$session_recording_event_trigger_activated_session",
      RO = "$debug_first_full_snapshot_timestamp",
      XO = "$sess_rec_flush_size",
      KO = "$groups",
      hO = "$surveys",
      vO = "$surveys_loaded_at",
      QO = "$surveys_activated",
      tO = "$surveys_activated_session",
      oO = "$surveys_activated_timestamps",
      NO = "ph_product_tours",
      qO = "$product_tours_activated",
      HO = "$product_tours_activated_session",
      yO = "$conversations_widget_session_id",
      bO = "$conversations_ticket_id",
      TO = "$conversations_widget_state",
      pO = "$conversations_user_traits",
      YO = "$user_state",
      gO = "$client_session_props",
      wO = "$capture_rate_limit",
      aO = "$initial_campaign_params",
      EO = "$initial_referrer_info",
      JO = "$initial_person_info",
      UO = "$epp",
      xO = "$posthog_cookieless",
      BO = "$cookieless_mode",
      SO = "$sdk_debug_extensions_init_method",
      sO = "$sdk_debug_extensions_init_time_ms",
      uO = "$sdk_debug_recording_script_not_loaded",
      VO = "$sdk_debug_replay_stale_config",
      iO = "$sdk_debug_replay_event_trigger_status",
      AO = "$sdk_debug_replay_linked_flag_trigger_status",
      rO = "$sdk_debug_replay_matched_recording_trigger_groups",
      GO = "$sdk_debug_replay_pending_trigger_conditions",
      nO = "$sdk_debug_replay_remote_trigger_matching_config",
      LO = "$sdk_debug_replay_trigger_groups_count",
      PO = "$sdk_debug_replay_url_trigger_status",
      zO = "$session_recording_start_reason",
      cO = "PostHog loadExternalDependency extension not found.",
      jO = "anonymous",
      DO = "identified",
      eO = "identified_only",
      IO = "beforeunload",
      lO = "$pageview",
      CO = "$pageleave",
      ZO = "$identify",
      kO = "$groupidentify",
      fO = "u" > typeof window ? window : void 0,
      MO = "u" > typeof globalThis ? globalThis : fO,
      dm = null == MO ? void 0 : MO.navigator,
      Om = null == MO ? void 0 : MO.document,
      mm = null == MO ? void 0 : MO.location,
      Wm = null == MO ? void 0 : MO.fetch,
      Fm = (null == MO ? void 0 : MO.XMLHttpRequest) && "withCredentials" in new MO.XMLHttpRequest ? MO.XMLHttpRequest : void 0,
      Rm = null == MO ? void 0 : MO.AbortController,
      Xm = null == MO ? void 0 : MO.CompressionStream,
      Km = null == dm ? void 0 : dm.userAgent,
      hm = "undefined" != typeof globalThis ? globalThis : fO;
    hm && "undefined" == typeof self && (hm.self = hm), hm && "undefined" == typeof File && (hm.File = function() {});
    const Qm = null != fO ? fO : {};
    var tm = function(dd) {
        return dd.AnonymousId = "anonymous_id", dd.DistinctId = "distinct_id", dd.Props = "props", dd.EnablePersonProcessing = "enable_person_processing", dd.PersonMode = "person_mode", dd.FeatureFlagDetails = "feature_flag_details", dd.FeatureFlags = "feature_flags", dd.FeatureFlagPayloads = "feature_flag_payloads", dd.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", dd.BootstrapFeatureFlags = "bootstrap_feature_flags", dd.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", dd.OverrideFeatureFlags = "override_feature_flags", dd.Queue = "queue", dd.AiQueue = "ai_queue", dd.AiCaptureQueue = "ai_capture_queue", dd.LogsQueue = "logs_queue", dd.OptedOut = "opted_out", dd.SessionId = "session_id", dd.SessionStartTimestamp = "session_start_timestamp", dd.SessionLastTimestamp = "session_timestamp", dd.PersonProperties = "person_properties", dd.GroupProperties = "group_properties", dd.InstalledAppBuild = "installed_app_build", dd.InstalledAppVersion = "installed_app_version", dd.SessionReplay = "session_replay", dd.PushRegistered = "push_registered", dd.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", dd.SurveyLastSeenDate = "survey_last_seen_date", dd.SurveysInProgress = "surveys_in_progress", dd.SurveysSeen = "surveys_seen", dd.Surveys = "surveys", dd.RemoteConfig = "remote_config", dd.FlagsEndpointWasHit = "flags_endpoint_was_hit", dd.DeviceId = "device_id", dd
      }({}),
      om = function(dd) {
        return dd.GZipJS = "gzip-js", dd.Base64 = "base64", dd
      }({});
    const Nm = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      qm = ["token"];

    function Hm(dd, Od) {
      return -1 !== dd.indexOf(Od)
    }
    const ym = function(dd) {
        return dd.trim()
      },
      bm = function(dd) {
        return dd.replace(/^\$/, "")
      };

    function Tm(dd) {
      var Od;
      const md = [];
      return null !== (Od = JSON.stringify(dd, (function(dd, Od) {
        if ("bigint" == typeof Od) return Od.toString();
        if ("function" != typeof Od && "symbol" != typeof Od) {
          if (Od instanceof Error) return {
            name: Od.name,
            message: Od.message,
            stack: Od.stack
          };
          if (Od && "object" == typeof Od) {
            for (; md.length > 0 && md[md.length - 1] !== this;) md.pop();
            if (md.includes(Od)) return "[Circular]";
            md.push(Od)
          }
          return Od
        }
      }))) && void 0 !== Od ? Od : "null"
    }
    const pm = Object.prototype,
      Ym = pm.hasOwnProperty,
      gm = pm.toString,
      wm = Array.isArray || function(dd) {
        return "[object Array]" === gm.call(dd)
      },
      am = dd => "function" == typeof dd,
      Em = dd => dd === Object(dd) && !wm(dd),
      Jm = dd => {
        if (Em(dd)) {
          for (const Od in dd)
            if (Ym.call(dd, Od)) return !1;
          return !0
        }
        return !1
      },
      Um = dd => void 0 === dd,
      xm = dd => "[object String]" == gm.call(dd),
      Bm = dd => xm(dd) && 0 === dd.trim().length,
      Sm = dd => null === dd,
      sm = dd => Um(dd) || Sm(dd),
      um = dd => "[object Number]" == gm.call(dd) && dd == dd,
      Vm = dd => um(dd) && dd > 0,
      im = dd => "[object Boolean]" === gm.call(dd),
      Am = dd => Hm(Nm, dd),
      rm = dd => Hm(qm, dd);

    function Gm(dd) {
      return null === dd || "object" != typeof dd
    }

    function nm(dd, Od) {
      return {}.toString.call(dd) === `[object ${Od}]`
    }

    function Lm(dd) {
      switch ({}.toString.call(dd)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return zm(dd, Error)
      }
    }

    function Pm(dd) {
      return "u" > typeof Event && zm(dd, Event)
    }

    function zm(dd, Od) {
      try {
        return dd instanceof Od
      } catch (dd) {
        return !1
      }
    }
    const cm = [!0, "true", 1, "1", "yes"],
      jm = dd => Hm(cm, dd),
      Dm = [!1, "false", 0, "0", "no"];

    function em(dd, Od, md, Wd, Fd, Rd, Xd) {
      try {
        var Kd = dd[Rd](Xd),
          hd = Kd.value
      } catch (dd) {
        return void md(dd)
      }
      Kd.done ? Od(hd) : Promise.resolve(hd).then(Wd, Fd)
    }

    function Im(dd) {
      return function() {
        var Od = this,
          md = arguments;
        return new Promise((function(Wd, Fd) {
          var Rd = dd.apply(Od, md);

          function Xd(dd) {
            em(Rd, Wd, Fd, Xd, Kd, "next", dd)
          }

          function Kd(dd) {
            em(Rd, Wd, Fd, Xd, Kd, "throw", dd)
          }
          Xd(void 0)
        }))
      }
    }
    const lm = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      Cm = new Map,
      Zm = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!dd) return !1;
        const md = function(dd, Od) {
            let md = "";
            for (let Wd = 0; Od.length > Wd; Wd++) {
              const dd = Od[Wd];
              md += dd.length + ":" + dd
            }
            return dd.length + ":" + dd + "|" + Od.length + ":" + md
          }(dd, Od),
          Wd = Cm.get(md);
        if (void 0 !== Wd) return Wd;
        const Fd = dd.toLowerCase(),
          Rd = lm.concat(Od).some((dd => -1 !== Fd.indexOf(dd.toLowerCase())));
        return 256 > Cm.size || Cm.clear(), Cm.set(md, Rd), Rd
      };

    function km(dd, Od, md, Wd, Fd) {
      return Od > md && (Wd.warn("min cannot be greater than max."), Od = md), um(dd) ? dd > md ? (Wd.warn(" cannot be  greater than max: " + md + ". Using max value instead."), md) : Od > dd ? (Wd.warn(" cannot be less than min: " + Od + ". Using min value instead."), Od) : dd : (Wd.warn(" must be a number. using max or fallback. max: " + md + ", fallback: " + Fd), km(null != Fd ? Fd : md, Od, md, Wd))
    }
    var fm = class {
      constructor(dd) {
        this._buckets = {}, this._onBucketRateLimited = dd._onBucketRateLimited, this._bucketSize = km(dd.bucketSize, 0, 100, dd._logger), this._refillRate = km(dd.refillRate, 0, this._bucketSize, dd._logger), this._refillInterval = km(dd.refillInterval, 0, 864e5, dd._logger)
      }
      _applyRefill(dd, Od) {
        const md = Math.floor((Od - dd.lastAccess) / this._refillInterval);
        md > 0 && (dd.tokens = Math.min(dd.tokens + md * this._refillRate, this._bucketSize), dd.lastAccess = dd.lastAccess + md * this._refillInterval)
      }
      consumeRateLimit(dd) {
        var Od;
        const md = Date.now(),
          Wd = String(dd);
        let Fd = this._buckets[Wd];
        return Fd ? this._applyRefill(Fd, md) : (Fd = {
          tokens: this._bucketSize,
          lastAccess: md
        }, this._buckets[Wd] = Fd), 0 === Fd.tokens || (Fd.tokens--, 0 === Fd.tokens && (null === (Od = this._onBucketRateLimited) || void 0 === Od || Od.call(this, dd)), 0 === Fd.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const Mm = "Mobile",
      dW = "Android",
      OW = "Tablet",
      mW = "Android Tablet",
      WW = "iPad",
      FW = "Apple Watch",
      RW = "Safari",
      XW = "BlackBerry",
      KW = "Samsung Internet",
      hW = "Chrome",
      vW = "Chrome iOS",
      QW = "Internet Explorer",
      tW = "Internet Explorer Mobile",
      oW = "Opera",
      NW = "Microsoft Edge",
      qW = "Firefox",
      HW = "Firefox iOS",
      yW = "Nintendo",
      bW = "PlayStation",
      TW = "Xbox",
      pW = "Android Mobile",
      YW = "Mobile Safari",
      gW = "Windows",
      wW = "Windows Phone",
      aW = "Nokia",
      EW = "Ouya",
      JW = "Generic " + Mm.toLowerCase(),
      UW = "Generic " + OW.toLowerCase(),
      xW = "Konqueror",
      BW = "Oculus Browser",
      SW = "Vivaldi",
      sW = "Yandex",
      uW = "Whale",
      VW = "DuckDuckGo",
      iW = "Pale Moon",
      AW = "Waterfox",
      rW = "Brave",
      GW = "Claude",
      nW = "Codex",
      LW = "ChatGPT",
      PW = "Google Search App",
      zW = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      cW = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      jW = new RegExp(TW, "i"),
      DW = new RegExp("PlayStation \\w+", "i"),
      eW = new RegExp("Nintendo \\w+", "i"),
      IW = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      lW = {
        "NT3.51": "NT 3.11",
        "NT4.0": "NT 4.0",
        "5.0": "2000",
        5.1: "XP",
        5.2: "XP",
        "6.0": "Vista",
        6.1: "7",
        6.2: "8",
        6.3: "8.1",
        6.4: "10",
        "10.0": "10"
      },
      CW = function(dd, Od, md, Wd) {
        Od = Od || "";
        const Fd = function(dd) {
          return (null == dd ? void 0 : dd.brave) ? rW : null
        }(md);
        return Fd || ((null == Wd ? void 0 : Wd.detectGoogleSearchApp) && Hm(dd, "GSA/") ? PW : Hm(dd, " OPR/") && Hm(dd, "Mini") ? "Opera Mini" : Hm(dd, " OPR/") ? oW : IW.test(dd) ? XW : Hm(dd, "IEMobile") || Hm(dd, "WPDesktop") ? tW : Hm(dd, "OculusBrowser") ? BW : Hm(dd, "SamsungBrowser") ? KW : Hm(dd, "Edge") || Hm(dd, "Edg/") ? NW : Hm(dd, "Vivaldi/") ? SW : Hm(dd, "YaBrowser/") ? sW : Hm(dd, "Whale/") ? uW : Hm(dd, "DuckDuckGo/") || Hm(dd, "Ddg/") ? VW : Hm(dd, "Claude/") ? GW : Hm(dd, "Codex/") ? nW : Hm(dd, "ChatGPT/") ? LW : Hm(dd, "FBIOS") ? "Facebook Mobile" : Hm(dd, "UCWEB") || Hm(dd, "UCBrowser") ? "UC Browser" : Hm(dd, "CriOS") ? vW : Hm(dd, "CrMo") || Hm(dd, hW) ? hW : Hm(dd, dW) && Hm(dd, RW) ? pW : Hm(dd, "FxiOS") ? HW : Hm(dd.toLowerCase(), xW.toLowerCase()) ? xW : Hm(dd, "Brave/") ? rW : ((dd, Od) => Od && Hm(Od, "Apple") || function(dd) {
          return Hm(dd, RW) && !Hm(dd, hW) && !Hm(dd, dW)
        }(dd))(dd, Od) ? Hm(dd, Mm) ? YW : RW : Hm(dd, "PaleMoon/") ? iW : Hm(dd, "Waterfox/") ? AW : Hm(dd, qW) ? qW : Hm(dd, "MSIE") || Hm(dd, "Trident/") ? QW : Hm(dd, "Gecko") ? qW : "")
      },
      ZW = {
        [tW]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [NW]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [hW]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [vW]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [RW]: [zW],
        [YW]: [zW],
        [oW]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [qW]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [HW]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [xW]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [XW]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), zW],
        [pW]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [KW]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [BW]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [SW]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [sW]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [uW]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [rW]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [GW]: [cW],
        [nW]: [cW],
        [LW]: [cW],
        [VW]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [iW]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [AW]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [PW]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [QW]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      kW = function(dd, Od, md, Wd) {
        const Fd = CW(dd, Od, md, Wd),
          Rd = ZW[Fd];
        if (Um(Rd)) return null;
        for (let Xd = 0; Rd.length > Xd; Xd++) {
          const Od = dd.match(Rd[Xd]);
          if (Od) return parseFloat(Od[Od.length - 2])
        }
        return null
      },
      fW = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), dd => [TW, dd && dd[1] || ""]],
        [new RegExp(yW, "i"), [yW, ""]],
        [new RegExp(bW, "i"), [bW, ""]],
        [IW, [XW, ""]],
        [new RegExp(gW, "i"), (dd, Od) => {
          if (/Phone/.test(Od) || /WPDesktop/.test(Od)) return [wW, ""];
          if (new RegExp(Mm).test(Od) && !/IEMobile\b/.test(Od)) return ["Windows Mobile", ""];
          const md = /Windows NT ([0-9.]+)/i.exec(Od);
          if (md && md[1]) {
            let dd = lW[md[1]] || "";
            return /arm/i.test(Od) && (dd = "RT"), [gW, dd]
          }
          return [gW, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, dd => dd && dd[3] ? ["iOS", [dd[3], dd[4], dd[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, dd => {
          let Od = "";
          return dd && dd.length >= 3 && (Od = Um(dd[2]) ? dd[3] : dd[2]), ["watchOS", Od]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), dd => dd && dd[2] ? [dW, [dd[2], dd[3], dd[4] || "0"].join(".")] : [dW, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, dd => {
          const Od = ["Mac OS X", ""];
          return dd && dd[1] && (Od[1] = [dd[1], dd[2], dd[3] || "0"].join(".")), Od
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      MW = function(dd) {
        for (let Od = 0; fW.length > Od; Od++) {
          const [md, Wd] = fW[Od], Fd = md.exec(dd), Rd = Fd && (am(Wd) ? Wd(Fd, dd) : Wd);
          if (Rd) return Rd
        }
        return ["", ""]
      },
      dF = function(dd) {
        return eW.test(dd) ? yW : DW.test(dd) ? bW : jW.test(dd) ? TW : new RegExp(EW, "i").test(dd) ? EW : new RegExp("(Windows Phone|WPDesktop)", "i").test(dd) ? wW : /iPad/.test(dd) ? WW : /iPod/.test(dd) ? "iPod Touch" : /iPhone/.test(dd) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(dd) ? FW : IW.test(dd) ? XW : /(kobo)\s(ereader|touch)/i.test(dd) ? "Kobo" : new RegExp(aW, "i").test(dd) ? aW : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(dd) || /(kf[a-z]+)( bui|\)).+silk\//i.test(dd) ? "Kindle Fire" : /(Android|ZTE)/i.test(dd) ? new RegExp(Mm).test(dd) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(dd) || /pixel[\daxl ]{1,6}/i.test(dd) && !/pixel c/i.test(dd) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(dd) || /lmy47v/i.test(dd) && !/QTAQZ3/i.test(dd) ? dW : mW : new RegExp("(pda|Mobile)", "i").test(dd) ? JW : new RegExp(OW, "i").test(dd) && !new RegExp("Tablet pc", "i").test(dd) ? UW : ""
      },
      OF = function(dd, Od) {
        var md;
        const Wd = dF(dd);
        return Wd === WW || Wd === mW || "Kobo" === Wd || "Kindle Fire" === Wd || Wd === UW ? OW : Wd === yW || Wd === TW || Wd === bW || Wd === EW ? "Console" : Wd === FW ? "Wearable" : Wd ? Mm : "Android" === (null == Od ? void 0 : Od.userAgentDataPlatform) && (null !== (md = null == Od ? void 0 : Od.maxTouchPoints) && void 0 !== md ? md : 0) > 0 ? 600 > Math.min(null !== (Fd = null == Od ? void 0 : Od.screenWidth) && void 0 !== Fd ? Fd : 0, null !== (Rd = null == Od ? void 0 : Od.screenHeight) && void 0 !== Rd ? Rd : 0) / (null !== (Xd = null == Od ? void 0 : Od.devicePixelRatio) && void 0 !== Xd ? Xd : 1) ? Mm : OW : "Desktop";
        var Fd, Rd, Xd
      },
      mF = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      WF = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", mF],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", mF],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", mF],
        [/\bLinkedInApp(?:\]?\/(\d+(?:\.\d+)*))?\b/i, "LinkedIn"],
        [/\bTwitter(?:Android| for (?:iPhone|iPad|Android))(?:\/(\d+(?:\.\d+)*))?\b/i, "Twitter"],
        [/\b(?:musical_ly|trill)(?:[_/](\d+\.\d+(?:\.\d+)*))?(?=\b|_)/i, "TikTok", /\bapp_version\/(\d+(?:\.\d+)*)/i],
        [/\b(?:MicroMessenger|WeChat)\/(\d+(?:\.\d+)*)?/i, "WeChat"],
        [/\bLine\/(\d+(?:\.\d+)*)?/i, "Line"],
        [/\bGSA\/(\d+(?:\.\d+)*)?/i, "Google"],
        [/\[Pinterest\/(?:iOS|Android)\b|\bPinterest(?: for (?:Android(?: Tablet)?|iOS))?\/(\d+(?:\.\d+)*)/i, "Pinterest"],
        [/\b(?:WA4A|WAiOS)\/(\d+(?:\.\d+)*)?/i, "WhatsApp"],
        [/\bSnapchat[ /](\d+(?:\.\d+)*)?/i, "Snapchat"],
        [/\bBing(?:Web|Sapphire)\/(\d+(?:\.\d+)*)?/i, "Bing"],
        [/\bNAVER\(inapp; search;/i, "Naver", /\bNAVER\(inapp; search;[^;)]*; (\d+(?:\.\d+)*)/i],
        [/\bKAKAOTALK[ /](\d+\.\d+(?:\.\d+)*)?/i, "KakaoTalk"]
      ],
      FF = "[Truncated]",
      RF = "[Unserializable]";

    function XF(dd) {
      let Od = "";
      for (let md = 0; dd.length > md; md++) {
        const Wd = dd.charCodeAt(md);
        if (55296 > Wd || Wd > 56319) Od += 56320 > Wd || Wd > 57343 ? dd[md] : "\ufffd";
        else {
          const Wd = dd.charCodeAt(md + 1);
          56320 > Wd || Wd > 57343 ? Od += "\ufffd" : (Od += dd[md] + dd[md + 1], md++)
        }
      }
      return Od
    }

    function KF(dd, Od) {
      if (!Od) return dd;
      let md = [];
      try {
        md = Object.keys(Od)
      } catch (dd) {
        md = []
      }
      for (const Wd of md) {
        let md;
        try {
          md = Od[Wd]
        } catch (dd) {
          md = RF
        }
        Object.defineProperty(dd, Wd, {
          value: md,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return dd
    }
    Date, Date;
    const hF = 3e5;
    var vF = class {
      record(dd) {
        if ("too-large" === dd.kind) return;
        if ("retry-later" !== dd.kind) return void this.reset();
        if (!dd.retryAfterMs) return;
        const Od = this.isOpen(),
          md = Date.now(),
          Wd = Math.min(dd.retryAfterMs, hF);
        if (!Od) return this._installedAt = md, void(this._until = md + Wd);
        this._until = Math.max(this._until, Math.min(md + Wd, this._installedAt + hF))
      }
      remainingMs() {
        const dd = Date.now();
        if (this._installedAt - 5e3 > dd) return this.reset(), 0;
        const Od = Math.min(hF, Math.max(0, this._until - dd));
        return 0 === Od && this.reset(), Od
      }
      isOpen() {
        return this.remainingMs() > 0
      }
      reset() {
        this._until = 0, this._installedAt = 0
      }
      constructor() {
        this._until = 0, this._installedAt = 0
      }
    };
    const QF = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function tF(dd, Od) {
      return "string" == typeof(md = dd) && QF.test(md) ? dd : Od();
      var md
    }

    function oF(dd, Od) {
      const md = new Error(Od);
      try {
        Object.defineProperty(md, "name", {
          value: dd,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (dd) {}
      return md
    }

    function NF(dd) {
      return dd ? dd.split("#")[0] : dd
    }

    function qF(dd) {
      try {
        return dd()
      } catch (dd) {
        return
      }
    }

    function HF(dd, Od) {
      const md = setTimeout(dd, Od);
      return null != md && md.unref && (null == md || md.unref()), md
    }

    function yF(dd, Od, md) {
      return bF.apply(this, arguments)
    }

    function bF() {
      return (bF = Im((function*(dd, Od, md) {
        let Wd;
        try {
          return yield Promise.race([dd, new Promise(((dd, Fd) => {
            Wd = HF((() => {
              try {
                null == md || md(), dd()
              } catch (dd) {
                Fd(dd)
              }
            }), Od)
          }))])
        } finally {
          clearTimeout(Wd)
        }
      }))).apply(this, arguments)
    }

    function TF(dd) {
      return TF = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
        return typeof dd
      } : function(dd) {
        return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
      }, TF(dd)
    }

    function pF(dd, Od, md) {
      return (Od = function(dd) {
        var Od = function(dd) {
          if ("object" != TF(dd) || !dd) return dd;
          var Od = dd[Symbol.toPrimitive];
          if (void 0 !== Od) {
            var md = Od.call(dd, "string");
            if ("object" != TF(md)) return md;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(dd)
        }(dd);
        return "symbol" == TF(Od) ? Od : Od + ""
      }(Od)) in dd ? Object.defineProperty(dd, Od, {
        value: md,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : dd[Od] = md, dd
    }

    function YF(dd, Od) {
      var md = Object.keys(dd);
      if (Object.getOwnPropertySymbols) {
        var Wd = Object.getOwnPropertySymbols(dd);
        Od && (Wd = Wd.filter((function(Od) {
          return Object.getOwnPropertyDescriptor(dd, Od).enumerable
        }))), md.push.apply(md, Wd)
      }
      return md
    }

    function gF(dd) {
      for (var Od = 1; arguments.length > Od; Od++) {
        var md = null != arguments[Od] ? arguments[Od] : {};
        Od % 2 ? YF(Object(md), !0).forEach((function(Od) {
          pF(dd, Od, md[Od])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(md)) : YF(Object(md)).forEach((function(Od) {
          Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(md, Od))
        }))
      }
      return dd
    }
    let wF, aF, EF, JF;

    function UF(dd) {
      var Od;
      const md = globalThis._posthogChunkIds,
        Wd = globalThis._debugIds;
      if (!md && !Wd) return;
      const Fd = md ? Object.keys(md) : [],
        Rd = Wd ? Object.keys(Wd) : [];
      if (JF && xF(md, Fd, aF) && xF(Wd, Rd, EF)) return JF;
      aF = md ? gF({}, md) : void 0, EF = Wd ? gF({}, Wd) : void 0, JF = {}, null !== (Od = wF) && void 0 !== Od || (wF = {});
      const Xd = (Od, md) => {
        for (const Fd of Od) {
          const Od = md[Fd];
          if (!Od) continue;
          const Rd = null == wF ? void 0 : wF[Fd];
          if (Rd) {
            JF[Rd] = Od;
            continue
          }
          const Xd = dd(Fd);
          for (let dd = Xd.length - 1; dd >= 0; dd--) {
            var Wd;
            const md = null === (Wd = Xd[dd]) || void 0 === Wd ? void 0 : Wd.filename;
            if (md) {
              JF[md] = Od, wF[Fd] = md;
              break
            }
          }
        }
      };
      return Wd && Xd(Rd, Wd), md && Xd(Fd, md), JF
    }

    function xF(dd, Od, md) {
      return dd && md ? Od.length === Object.keys(md).length && Od.every((Od => dd[Od] === md[Od])) : dd === md
    }
    var BF = class {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = dd, this.stackParser = Od, this.modifiers = md
      }
      buildFromUnknown(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = Od && Od.mechanism || {
            handled: !0,
            type: "generic"
          },
          Wd = this.buildCoercingContext(md, Od, 0).apply(dd),
          Fd = this.buildParsingContext(Od),
          Rd = this.parseStacktrace(Wd, Fd);
        return {
          $exception_list: this.convertToExceptionList(Rd, md),
          $exception_level: "error"
        }
      }
      modifyFrames(dd) {
        var Od = this;
        return Im((function*() {
          for (const md of dd) md.stacktrace && md.stacktrace.frames && wm(md.stacktrace.frames) && (md.stacktrace.frames = yield Od.applyModifiers(md.stacktrace.frames));
          return dd
        }))()
      }
      coerceFallback(dd) {
        var Od;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (Od = dd.syntheticException) || void 0 === Od ? void 0 : Od.stack,
          synthetic: !0
        }
      }
      parseStacktrace(dd, Od) {
        var md;
        let Wd, Fd;
        if (null != dd.cause && (Wd = this.parseStacktrace(dd.cause, Od)), "" != dd.stack && null != dd.stack) try {
          Fd = this.applyChunkIds(this.stackParser(dd.stack, dd.synthetic ? Od.skipFirstLines : 0), Od.chunkIdMap)
        } catch (dd) {}
        return gF(gF({}, dd), {}, {
          cause: Wd,
          stack: Fd,
          errors: null === (md = dd.errors) || void 0 === md ? void 0 : md.map((dd => this.parseStacktrace(dd, Od)))
        })
      }
      applyChunkIds(dd, Od) {
        return dd.map((dd => (dd.filename && Od && (dd.chunk_id = Od[dd.filename]), dd)))
      }
      applyCoercers(dd, Od) {
        for (const md of this.coercers)
          if (md.match(dd)) return md.coerce(dd, Od);
        return this.coerceFallback(Od)
      }
      applyModifiers(dd) {
        var Od = this;
        return Im((function*() {
          let md = dd;
          for (const dd of Od.modifiers) md = yield dd(md);
          return md
        }))()
      }
      convertToExceptionList(dd, Od) {
        const md = [],
          Wd = (dd, Fd, Rd) => {
            var Xd;
            const Kd = md.length,
              hd = void 0 === Fd ? gF(gF({
                type: "string" == typeof Od.type && Od.type.length > 0 ? Od.type : "generic"
              }, "boolean" == typeof Od.handled ? {
                handled: Od.handled
              } : void 0 === Od.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof Od.synthetic ? Od.synthetic : dd.synthetic,
                exception_id: Kd
              }) : {
                type: "chained",
                source: Rd,
                synthetic: dd.synthetic,
                exception_id: Kd,
                parent_id: Fd
              },
              vd = {
                type: dd.type,
                value: dd.value,
                mechanism: hd
              };
            dd.stack && (vd.stacktrace = {
              type: "raw",
              frames: dd.stack
            }), md.push(vd), dd.cause && Wd(dd.cause, Kd, "cause");
            for (const Od of null !== (Xd = dd.errors) && void 0 !== Xd ? Xd : []) Wd(Od, Kd, "member")
          };
        return Wd(dd), md
      }
      buildParsingContext(dd) {
        var Od;
        return {
          chunkIdMap: UF(this.stackParser),
          skipFirstLines: null !== (Od = dd.skipFirstLines) && void 0 !== Od ? Od : 1
        }
      }
      getAggregateErrors(dd) {
        try {
          if (Lm(dd)) {
            let md = Object.getPrototypeOf(dd);
            for (let Wd = 0; md && 100 > Wd; Wd++) {
              var Od;
              const Wd = null === (Od = Object.getOwnPropertyDescriptor(md, "constructor")) || void 0 === Od ? void 0 : Od.value;
              if ("function" == typeof Wd && "AggregateError" === Wd.name) {
                const Od = dd.errors;
                return wm(Od) ? Od : void 0
              }
              md = Object.getPrototypeOf(md)
            }
          }
        } catch (dd) {}
      }
      buildCoercingContext(dd, Od) {
        var md = this;
        let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fd = 0,
          Rd = 0,
          Xd = !1;
        const Kd = new Set,
          hd = [],
          vd = {},
          Qd = function(dd, Od) {
            let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Qd = td(Od, Wd),
              od = Qd.apply;
            if (Qd.apply = Od => {
                hd.push(dd);
                try {
                  return od(Od)
                } finally {
                  hd.pop()
                }
              }, Wd > 4 || Wd > 0 && -1 !== hd.indexOf(dd)) return md.coerceFallback(Qd);
            const Nd = "object" == typeof dd && null !== dd || "function" == typeof dd;
            if (0 === Wd && Fd >= 50 || Nd && Kd.has(dd)) return;
            Nd && Kd.add(dd), 0 === Wd && Fd++;
            const qd = md.getAggregateErrors(dd);
            let Hd, yd;
            Xd || (Xd = !!qd);
            try {
              if (Hd = md.applyCoercers(dd, Qd), !Hd) throw vd
            } catch (dd) {
              if (dd === vd) return void(0 === Wd && Fd--);
              if (!Xd) throw dd;
              Hd = md.coerceFallback(Qd)
            }
            if (!qd || Fd >= 50) return Hd;
            try {
              yd = qd.length
            } catch (dd) {
              return Hd
            }
            if (!Number.isInteger(yd) || 0 > yd || yd > 4294967295) return Hd;
            const bd = [];
            for (let Xd = 0; 50 > Fd && 1e3 > Rd && yd > Xd; Xd++) {
              let Wd;
              Rd++;
              try {
                Wd = Qd.next(qd[Xd])
              } catch (dd) {
                Fd++, Wd = md.coerceFallback(td(Od + 1))
              }
              Wd && bd.push(Wd)
            }
            return gF(gF({}, Hd), {}, {
              errors: bd
            })
          },
          td = function(md) {
            let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return gF(gF({}, Od), {}, {
              syntheticException: 0 == md ? Od.syntheticException : void 0,
              mechanism: 0 == md ? dd : {},
              apply(dd) {
                const Od = Qd(dd, md, Wd + 1);
                if (!Od) throw vd;
                return Od
              },
              next: dd => Qd(dd, md + 1)
            })
          },
          od = td(Wd);
        return gF(gF({}, od), {}, {
          apply: dd => {
            var Od;
            return null !== (Od = Qd(dd, Wd)) && void 0 !== Od ? Od : this.coerceFallback(od)
          }
        })
      }
    };
    const SF = /^([a-z][a-z0-9.+-]+):/i,
      sF = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function uF(dd) {
      if (!dd || "<anonymous>" === dd) return !1;
      const Od = SF.exec(dd);
      return !Od || sF.includes(Od[1].toLowerCase())
    }

    function VF(dd, Od, md, Wd, Fd) {
      const Rd = {
        platform: dd,
        filename: Od,
        function: "<anonymous>" === md ? "?" : md,
        in_app: uF(Od)
      };
      return Um(Wd) || (Rd.lineno = Wd), Um(Fd) || (Rd.colno = Fd), Rd
    }
    const iF = (dd, Od) => {
        const md = -1 !== dd.indexOf("safari-extension"),
          Wd = -1 !== dd.indexOf("safari-web-extension");
        return md || Wd ? [-1 !== dd.indexOf("@") ? dd.split("@")[0] : "?", md ? `safari-extension:${Od}` : `safari-web-extension:${Od}`] : [dd, Od]
      },
      AF = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      rF = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      GF = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      nF = (dd, Od) => {
        const md = AF.exec(dd);
        if (md) {
          const [, dd, Wd, Fd] = md;
          return VF(Od, dd, "?", +Wd, +Fd)
        }
        const Wd = rF.exec(dd);
        if (Wd) {
          if (Wd[2] && 0 === Wd[2].indexOf("eval")) {
            const dd = GF.exec(Wd[2]);
            dd && (Wd[2] = dd[1], Wd[3] = dd[2], Wd[4] = dd[3])
          }
          const [dd, md] = iF(Wd[1] || "?", Wd[2]);
          return VF(Od, md, dd, Wd[3] ? +Wd[3] : void 0, Wd[4] ? +Wd[4] : void 0)
        }
      },
      LF = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      PF = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      zF = (dd, Od) => {
        const md = LF.exec(dd);
        if (md) {
          if (md[3] && md[3].indexOf(" > eval") > -1) {
            const dd = PF.exec(md[3]);
            dd && (md[1] = md[1] || "eval", md[3] = dd[1], md[4] = dd[2], md[5] = "")
          }
          let dd = md[3],
            Wd = md[1] || "?";
          return [Wd, dd] = iF(Wd, dd), VF(Od, dd, Wd, md[4] ? +md[4] : void 0, md[5] ? +md[5] : void 0)
        }
      },
      cF = /\(error: (.*)\)/;

    function jF(dd, Od) {
      return dd.filename === Od.filename && dd.function === Od.function && dd.module === Od.module && dd.lineno === Od.lineno && dd.colno === Od.colno
    }

    function DF(dd) {
      for (let Od = 1; 10 >= Od; Od++) {
        const md = dd.length - 2 * Od;
        if (0 > md) break;
        let Wd = !0;
        for (let Fd = 0; Od > Fd; Fd++)
          if (!jF(dd[md + Fd], dd[md + Od + Fd])) {
            Wd = !1;
            break
          } if (Wd) {
          for (let Wd = 0; Od > Wd; Wd++) dd[md + Wd] = dd[md + Od + Wd];
          return dd.length = md + Od, {
            start: md,
            length: Od
          }
        }
      }
    }

    function eF(dd, Od) {
      const md = Od.start + Od.length,
        Wd = lF(dd, Od);
      Wd && dd.splice(md + Wd === dd.length ? md : Od.start, Wd)
    }

    function IF(dd, Od) {
      let md = Od.start;
      for (; md > 0 && jF(dd[md - 1], dd[md - 1 + Od.length]);) md--;
      return Od.start - md
    }

    function lF(dd, Od) {
      const md = Od.start + Od.length;
      let Wd = md;
      for (; dd.length > Wd && jF(dd[Wd], dd[Wd - Od.length]);) Wd++;
      return Wd - md
    }

    function CF(dd, Od) {
      const md = Od[0];
      let Wd = dd.length - (md ? IF(dd, md) : 0);
      for (const Fd of Od) Wd -= lF(dd, Fd);
      return Wd
    }

    function ZF(dd, Od, md) {
      for (let Wd = 0; dd.length > Wd; Wd++) {
        const Fd = dd[(Od + Wd) % dd.length],
          Rd = dd[(md + Wd) % dd.length];
        if (Fd !== Rd) return Rd > Fd
      }
      return !1
    }
    var kF = class {
        match(dd) {
          return this.isDOMException(dd) || this.isDOMError(dd)
        }
        coerce(dd, Od) {
          const md = xm(dd.stack);
          return {
            type: this.getType(dd),
            value: this.getValue(dd),
            stack: md ? dd.stack : void 0,
            cause: dd.cause ? Od.next(dd.cause) : void 0,
            synthetic: !1
          }
        }
        getType(dd) {
          return this.isDOMError(dd) ? "DOMError" : "DOMException"
        }
        getValue(dd) {
          const Od = dd.name || (this.isDOMError(dd) ? "DOMError" : "DOMException");
          return dd.message ? `${Od}: ${dd.message}` : Od
        }
        isDOMException(dd) {
          return nm(dd, "DOMException")
        }
        isDOMError(dd) {
          return nm(dd, "DOMError")
        }
      },
      fF = class {
        match(dd) {
          return Lm(dd)
        }
        coerce(dd, Od) {
          var md;
          const Wd = this.getStack(dd),
            Fd = void 0 === Wd ? null === (md = Od.syntheticException) || void 0 === md ? void 0 : md.stack : void 0,
            Rd = !!Fd;
          return {
            type: this.getType(dd),
            value: this.getMessage(dd, Od),
            stack: null != Wd ? Wd : Fd,
            cause: dd.cause ? Od.next(dd.cause) : void 0,
            synthetic: Rd
          }
        }
        getType(dd) {
          return dd.name || dd.constructor.name
        }
        getMessage(dd, Od) {
          const md = dd.message;
          return String(md.error && "string" == typeof md.error.message ? md.error.message : md)
        }
        getStack(dd) {
          try {
            const Od = dd.stacktrace;
            if ("string" == typeof Od && Od.length > 0) return Od;
            const md = dd.stack;
            return "string" == typeof md && md.length > 0 ? md : void 0
          } catch (dd) {
            return
          }
        }
      },
      MF = class {
        match(dd) {
          return !!nm(dd, "ErrorEvent") && (null != dd.error || this._hasUsableMessage(dd))
        }
        coerce(dd, Od) {
          var md;
          if (null != dd.error) return Od.apply(dd.error);
          const Wd = Od.apply(dd.message);
          return gF(gF({}, Wd), {}, {
            stack: null !== (md = this._buildLocationStack(dd)) && void 0 !== md ? md : Wd.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(dd) {
          return xm(dd.message) && dd.message.length > 0
        }
        _buildLocationStack(dd) {
          var Od, md;
          const Wd = dd,
            Fd = null !== (Od = Wd.lineno) && void 0 !== Od ? Od : 0,
            Rd = null !== (md = Wd.colno) && void 0 !== md ? md : 0;
          if (xm(Wd.filename) && 0 !== Wd.filename.length && 0 !== Fd) return `Error\n    at ${Wd.filename}:${Fd}:${Rd}`
        }
      };
    const dR = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var OR = class {
      match(dd) {
        return "string" == typeof dd
      }
      coerce(dd, Od) {
        var md;
        const [Wd, Fd] = this.getInfos(dd);
        return {
          type: null != Wd ? Wd : "Error",
          value: null != Fd ? Fd : dd,
          stack: null === (md = Od.syntheticException) || void 0 === md ? void 0 : md.stack,
          synthetic: !0
        }
      }
      getInfos(dd) {
        let Od = "Error",
          md = dd;
        const Wd = dd.match(dR);
        return Wd && (Od = Wd[1], md = Wd[2]), [Od, md]
      }
    };
    const mR = ["fatal", "error", "warning", "log", "info", "debug"];

    function WR(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const md = Object.keys(dd);
      if (md.sort(), !md.length) return "[object has no keys]";
      for (let Wd = md.length; Wd > 0; Wd--) {
        const dd = md.slice(0, Wd).join(", ");
        if (Od >= dd.length) return Wd === md.length ? dd : dd.length > Od ? `${dd.slice(0,Od)}...` : dd
      }
      return ""
    }
    var FR = class {
        match(dd) {
          return "object" == typeof dd && null !== dd
        }
        coerce(dd, Od) {
          var md, Wd;
          const Fd = this.getErrorPropertyFromObject(dd);
          return Fd ? Od.apply(Fd) : {
            type: this.getType(dd),
            value: this.getValue(dd),
            stack: null !== (md = this.getStack(dd)) && void 0 !== md ? md : null === (Wd = Od.syntheticException) || void 0 === Wd ? void 0 : Wd.stack,
            level: this.isSeverityLevel(dd.level) ? dd.level : "error",
            synthetic: !0
          }
        }
        getType(dd) {
          if (Pm(dd)) return dd.constructor.name;
          const Od = "name" in dd ? dd.name : void 0;
          return xm(Od) && !Bm(Od) ? Od : "Error"
        }
        getValue(dd) {
          if ("name" in dd && "string" == typeof dd.name) {
            let Od = `'${dd.name}' captured as exception`;
            return "message" in dd && "string" == typeof dd.message && (Od += ` with message: '${dd.message}'`), Od
          }
          if ("message" in dd && "string" == typeof dd.message) return dd.message;
          const Od = this.getObjectClassName(dd);
          return `${Od&&"Object"!==Od?`'${Od}'`:"Object"} captured as exception with keys: ${WR(dd)}`
        }
        isSeverityLevel(dd) {
          return xm(dd) && !Bm(dd) && mR.indexOf(dd) >= 0
        }
        getStack(dd) {
          try {
            return xm(dd.stacktrace) && dd.stacktrace.length > 0 ? dd.stacktrace : xm(dd.stack) && dd.stack.length > 0 ? dd.stack : void 0
          } catch (dd) {
            return
          }
        }
        getErrorPropertyFromObject(dd) {
          for (const Od in dd)
            if ({}.hasOwnProperty.call(dd, Od)) {
              const md = dd[Od];
              if (Lm(md)) return md
            }
        }
        getObjectClassName(dd) {
          try {
            const Od = Object.getPrototypeOf(dd);
            return Od ? Od.constructor.name : void 0
          } catch (dd) {
            return
          }
        }
      },
      RR = class {
        match(dd) {
          return Pm(dd)
        }
        coerce(dd, Od) {
          var md;
          const Wd = dd.constructor.name;
          return {
            type: Wd,
            value: `${Wd} captured as exception with keys: ${WR(dd)}`,
            stack: null === (md = Od.syntheticException) || void 0 === md ? void 0 : md.stack,
            synthetic: !0
          }
        }
      },
      XR = class {
        match(dd) {
          return Gm(dd)
        }
        coerce(dd, Od) {
          var md;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(dd)}`,
            stack: null === (md = Od.syntheticException) || void 0 === md ? void 0 : md.stack,
            synthetic: !0
          }
        }
      },
      KR = class {
        match(dd) {
          return nm(dd, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(dd)
        }
        isCustomEventWrappingRejection(dd) {
          if (!Pm(dd)) return !1;
          try {
            const Od = dd.detail;
            return null != Od && "object" == typeof Od && "reason" in Od
          } catch (dd) {
            return !1
          }
        }
        coerce(dd, Od) {
          var md;
          const Wd = this.getUnhandledRejectionReason(dd);
          return Gm(Wd) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(Wd)}`,
            stack: null === (md = Od.syntheticException) || void 0 === md ? void 0 : md.stack,
            synthetic: !0
          } : Od.apply(Wd)
        }
        getUnhandledRejectionReason(dd) {
          try {
            if ("reason" in dd) return dd.reason;
            if ("detail" in dd && null != dd.detail && "object" == typeof dd.detail && "reason" in dd.detail) return dd.detail.reason
          } catch (dd) {}
          return dd
        }
      };
    const hR = "$message",
      vR = "$timestamp",
      QR = new Set([hR, vR]),
      tR = {
        enabled: !0,
        max_bytes: 32768
      };

    function oR(dd) {
      var Od;
      return dd ? {
        enabled: null !== (Od = dd.enabled) && void 0 !== Od ? Od : tR.enabled,
        max_bytes: qR(dd.max_bytes, tR.max_bytes)
      } : gF({}, tR)
    }
    var NR = class {
      constructor(dd) {
        this._entries = [], this._totalBytes = 0, this._config = oR(dd)
      }
      setConfig(dd) {
        this._config = oR(dd), this._trimToMaxBytes()
      }
      add(dd) {
        const Od = function(dd) {
          let Od;
          try {
            Od = Tm(dd)
          } catch (dd) {
            return
          }
          try {
            const dd = JSON.parse(Od);
            if (!Em(dd)) return;
            const md = dd,
              Wd = md[hR],
              Fd = md[vR];
            if (!xm(Wd) || 0 === Wd.trim().length) return;
            if (!xm(Fd) && !um(Fd)) return;
            return {
              step: md,
              json: Od
            }
          } catch (dd) {
            return
          }
        }(dd);
        if (!Od) return;
        const md = function(dd) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(dd).length;
          const Od = encodeURIComponent(dd);
          let md = 0;
          for (let Wd = 0; Od.length > Wd; Wd++) "%" === Od[Wd] ? (md += 1, Wd += 2) : md += 1;
          return md
        }(Od.json);
        md > this._config.max_bytes || (this._entries.push({
          step: Od.step,
          bytes: md
        }), this._totalBytes += md, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((dd => dd.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const dd = this._entries.shift();
          dd && (this._totalBytes -= dd.bytes)
        }
      }
    };

    function qR(dd, Od) {
      if (!um(dd) || 1 / 0 === dd || -1 / 0 === dd) return Od;
      const md = Math.floor(dd);
      return 0 > md ? Od : md
    }
    const HR = dd => {
      if ("string" != typeof dd) return dd;
      try {
        return JSON.parse(dd)
      } catch (Fd) {
        return dd
      }
    };

    function yR(dd) {
      return "string" == typeof dd || dd
    }

    function bR(dd) {
      return "string" == typeof dd ? dd : void 0
    }
    const TR = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      pR = "NativeGzipValidationError",
      YR = dd => dd.length >= 2 && 31 === dd[0] && 139 === dd[1],
      gR = (dd, Od) => dd === om.GZipJS || Od === om.GZipJS || "gzip" === Od,
      wR = dd => !(!dd || "object" != typeof dd) && "NotReadableError" === ("name" in dd ? String(dd.name) : "");
    let aR;
    const ER = dd => {
        throw oF(pR, `Native gzip produced invalid output: ${dd}`)
      },
      JR = (UR = Im((function*(dd, Od) {
        18 > dd.size && ER("too-short");
        const md = new Uint8Array(yield dd.slice(0, 10).arrayBuffer());
        YR(md) && 8 === md[2] || ER("invalid-header");
        const Wd = new DataView(yield dd.slice(dd.size - 8).arrayBuffer());
        Wd.getUint32(0, !0) !== (dd => {
          const Od = (() => {
            if (aR) return aR;
            aR = [];
            for (let dd = 0; 256 > dd; dd++) {
              let Od = dd;
              for (let dd = 0; 8 > dd; dd++) Od = 1 & Od ? 3988292384 ^ Od >>> 1 : Od >>> 1;
              aR[dd] = Od >>> 0
            }
            return aR
          })();
          let md = 4294967295;
          for (let Wd = 0; dd.length > Wd; Wd++) md = Od[255 & (md ^ dd[Wd])] ^ md >>> 8;
          return (4294967295 ^ md) >>> 0
        })(Od) && ER("invalid-crc");
        const Fd = Od.length >>> 0;
        Wd.getUint32(4, !0) !== Fd && ER("invalid-size")
      })), function(dd, Od) {
        return UR.apply(this, arguments)
      });
    var UR;

    function xR() {
      return xR = Im((function*(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Od = (new TextEncoder).encode(dd),
            md = new globalThis.CompressionStream("gzip"),
            Fd = md.writable.getWriter(),
            Rd = Fd.write(Od).then((() => Fd.close())).catch((Wd = Im((function*(dd) {
              try {
                yield Fd.abort(dd)
              } catch (dd) {}
              throw dd
            })), function(dd) {
              return Wd.apply(this, arguments)
            })),
            Xd = new Response(md.readable).blob(),
            [Kd] = yield Promise.all([Xd, Rd]);
          return yield JR(Kd, Od), Kd
        } catch (dd) {
          if (null == md ? void 0 : md.rethrow) throw dd;
          return Od && console.error("Failed to gzip compress data", dd), null
        }
        var Wd
      })), xR.apply(this, arguments)
    }

    function BR(dd, Od) {
      if (null == dd) return {};
      var md, Wd, Fd = function(dd, Od) {
        if (null == dd) return {};
        var md = {};
        for (var Wd in dd)
          if ({}.hasOwnProperty.call(dd, Wd)) {
            if (Od.includes(Wd)) continue;
            md[Wd] = dd[Wd]
          } return md
      }(dd, Od);
      if (Object.getOwnPropertySymbols) {
        var Rd = Object.getOwnPropertySymbols(dd);
        for (Wd = 0; Rd.length > Wd; Wd++) Od.includes(md = Rd[Wd]) || {}.propertyIsEnumerable.call(dd, md) && (Fd[md] = dd[md])
      }
      return Fd
    }
    const SR = "[redacted]",
      sR = /^[A-Za-z0-9+/\n\r]+=*$/,
      uR = /^[A-Za-z0-9_-]+={0,2}$/,
      VR = /[-_]/,
      iR = /^data:[^,\s]*;base64,/i,
      AR = /^[A-Za-z0-9+/_-]+={0,2}$/,
      rR = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      GR = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      nR = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      LR = /[\s<>"]/,
      PR = new RegExp(nR.source, "i"),
      zR = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      cR = new RegExp(`^${zR.source}`, "i"),
      jR = new RegExp(zR.source, "gi"),
      DR = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      eR = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      IR = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      lR = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      CR = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      ZR = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      kR = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      fR = /\b\d(?:[ ./-]?\d){12,}\b/g,
      MR = /\d+/g,
      dX = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      OX = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function mX(dd) {
      return function(dd) {
        return GR.test(dd)
      }(dd) || DR.test(dd) || eR.test(dd)
    }

    function WX(dd) {
      return dd.split("&", 129).length > 128
    }

    function FX(dd, Od, md) {
      return mX(dd) || Od.includes(";") && function(dd) {
        return dd.split(";").some((dd => mX(dd.split("=", 1)[0])))
      }(Od) ? SR : PR.test(Od) ? md ? QX(Od, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : SR : Od
    }

    function RX(dd, Od) {
      const md = new URLSearchParams;
      let Wd = !1,
        Fd = !1;
      for (const [Rd, Xd] of new URLSearchParams(dd)) {
        const dd = tX(Rd),
          Kd = tX(Xd);
        Wd || (Wd = dd !== Rd || Kd !== Xd);
        const hd = FX(dd, Kd, Od);
        Wd || (Wd = hd !== Kd), Fd = mX(dd) || hd !== Kd, md.append(dd, hd)
      }
      return {
        changed: Wd,
        lastFieldSensitive: Fd,
        serialized: md.toString()
      }
    }

    function XX(dd, Od) {
      if (!dd.includes("=")) return {
        value: KX(dd, Od),
        lastFieldSensitive: !1
      };
      const md = RX(dd, Od);
      return {
        value: md.changed ? md.serialized : dd,
        lastFieldSensitive: md.lastFieldSensitive
      }
    }

    function KX(dd, Od) {
      return Od ? QX(dd, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : PR.test(dd) ? SR : dd
    }

    function hX(dd, Od, md) {
      return "#" === dd ? !Od.fragment && (Od.fragment = !0) : "?" === dd && (Od.fragment ? "=" !== md && !Od.fragmentQuery && (Od.fragmentQuery = !0) : !Od.query && (Od.query = !0))
    }

    function vX(dd, Od) {
      var md;
      if (dd.length > 8192 && cR.test(dd)) return SR;
      const {
        address: Wd,
        suffix: Fd
      } = Od.stripPunctuation ? function(dd) {
        let Od = dd.length;
        for (; Od > 0 && ".,;:!?)]}'".includes(dd[Od - 1]);) Od--;
        return {
          address: dd.slice(0, Od),
          suffix: dd.slice(Od)
        }
      }(dd) : {
        address: dd,
        suffix: ""
      };
      let Rd;
      try {
        Rd = new URL(Wd)
      } catch (dd) {
        return SR + Fd
      }
      const Xd = Rd.search.slice(1),
        Kd = "" !== Rd.hash,
        hd = function(dd) {
          const Od = dd.slice(1),
            md = Od.indexOf("?");
          return 0 > md ? {
            head: Od,
            tail: null
          } : {
            head: Od.slice(0, md),
            tail: Od.slice(md + 1)
          }
        }(Rd.hash);
      if (WX(Xd) || WX(hd.head) || WX(null !== (md = hd.tail) && void 0 !== md ? md : "")) return SR + Fd;
      let vd = !1;
      (Rd.username || Rd.password) && (Rd.username = SR, Rd.password = "", vd = !0);
      const Qd = RX(Xd, Od.allowNestedUrls);
      Qd.changed && (Rd.search = Qd.serialized, vd = !0);
      const td = XX(hd.head, Od.allowNestedUrls),
        od = null === hd.tail ? null : (Nd = hd.tail, td.lastFieldSensitive ? {
          value: "" === Nd ? "" : SR,
          lastFieldSensitive: !0
        } : XX(Nd, Od.allowNestedUrls));
      var Nd;
      const qd = null === od ? td.value : `${td.value}?${od.value}`;
      qd !== Rd.hash.slice(1) && (Rd.hash = qd, vd = !0);
      const Hd = Kd ? null != od ? od : td : Qd;
      return (vd ? tX(Rd.toString()) : Wd) + (Hd.lastFieldSensitive ? "" : Fd)
    }

    function QX(dd, Od) {
      return dd.replace(nR, (md => function(dd, Od) {
        const md = function(dd) {
          if (!dd.includes("://")) return [];
          const Od = [...dd.matchAll(jR)].map((dd => dd.index)),
            md = [],
            Wd = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let Fd = 0,
            Rd = !1,
            Xd = "";
          for (let Kd = 0; dd.length > Kd && Od.length > Fd; Kd++) {
            Od[Fd] === Kd && (Kd > 0 && "=" !== Xd && md.push(Kd), Fd++);
            const hd = dd[Kd];
            hX(hd, Wd, Xd) ? (Xd = hd, Rd = !0) : Rd && "=&".includes(hd) && (Xd = hd)
          }
          return md
        }(dd);
        if (0 === md.length) return vX(dd, Od);
        let Wd = "",
          Fd = 0;
        for (const Rd of md) Wd += vX(dd.slice(Fd, Rd), gF(gF({}, Od), {}, {
          stripPunctuation: !1
        })), Fd = Rd;
        return Wd + vX(dd.slice(Fd), Od)
      }(md, gF(gF({}, Od), {}, {
        stripPunctuation: Od.stripPunctuation && md.length !== dd.length
      }))))
    }

    function tX(dd) {
      return dd.replace(rR, SR)
    }

    function oX(dd) {
      let Od = 0,
        md = !1;
      for (let Wd = dd.length - 1; Wd >= 0; Wd--) {
        let Fd = dd.charCodeAt(Wd) - 48;
        if (0 > Fd || Fd > 9) return !1;
        md && (Fd *= 2, Fd > 9 && (Fd -= 9)), Od += Fd, md = !md
      }
      return Od % 10 == 0
    }

    function NX(dd) {
      const Od = [];
      for (let Rd = MR.exec(dd); null !== Rd; Rd = MR.exec(dd)) Od.push({
        digits: Rd[0],
        start: Rd.index,
        end: Rd.index + Rd[0].length
      });
      let md = "",
        Wd = 0,
        Fd = 0;
      for (; Od.length > Fd;) {
        let Rd = "",
          Xd = -1;
        for (let dd = Fd; Od.length > dd && (Rd += Od[dd].digits, 19 >= Rd.length); dd++) Rd.length >= 13 && oX(Rd) && (Xd = dd);
        0 > Xd ? Fd++ : (md += dd.slice(Wd, Od[Fd].start) + SR, Wd = Od[Xd].end, Fd = Xd + 1)
      }
      return md + dd.slice(Wd)
    }
    const qX = {}.propertyIsEnumerable;

    function HX(dd, Od) {
      try {
        return TX(dd, Od, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (dd) {
        return []
      }
    }

    function yX(dd, Od, md, Wd) {
      if (0 >= md.remainingNodes) return {
        stringValue: FF
      };
      if (md.remainingNodes--, im(dd)) return {
        boolValue: dd
      };
      if ("bigint" == typeof dd) return function(dd, Od) {
        const md = dd.toString(),
          Wd = BigInt("9223372036854775808");
        return dd >= Wd || -Wd > dd ? (null == Od || Od.debug(`Attribute ${md} is outside the int64 range; encoding it as a string`), {
          stringValue: md
        }) : {
          intValue: md
        }
      }(dd, Od);
      if ("number" == typeof dd) {
        if (!Number.isFinite(dd)) return {
          stringValue: String(dd)
        };
        if (Number.isInteger(dd)) {
          if (Number.isSafeInteger(dd)) return {
            intValue: String(dd)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(dd)
          };
          const md = BigInt(dd).toString();
          return dd >= 0x8000000000000000 || -0x8000000000000000 > dd ? (null == Od || Od.debug(`Attribute ${md} is outside the int64 range; encoding it as a string`), {
            stringValue: md
          }) : {
            intValue: md
          }
        }
        return {
          doubleValue: dd
        }
      }
      if ("string" == typeof dd) return {
        stringValue: XF(dd)
      };
      if ("function" == typeof dd) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof dd) return {
        stringValue: String(dd)
      };
      if ("object" == typeof dd && null !== dd) {
        if (md.ancestors.has(dd)) return {
          stringValue: "[Circular]"
        };
        if (Wd >= 20) return {
          stringValue: FF
        };
        if (dd instanceof Date) {
          const Od = dd.getTime(),
            md = Number.isFinite(Od) ? dd.toISOString() : String(dd);
          return {
            stringValue: "string" == typeof md ? XF(md) : String(md)
          }
        }
        md.ancestors.add(dd);
        try {
          try {
            const Fd = dd.toJSON;
            if ("function" == typeof Fd) return yX(Fd.call(dd), Od, md, Wd + 1)
          } catch (dd) {}
          return wm(dd) ? {
            arrayValue: {
              values: bX(dd, Od, md, Wd + 1)
            }
          } : {
            kvlistValue: {
              values: TX(dd, Od, md, Wd + 1)
            }
          }
        } finally {
          md.ancestors.delete(dd)
        }
      }
      return {
        stringValue: XF(String(dd))
      }
    }

    function bX(dd, Od, md, Wd) {
      const Fd = [],
        Rd = Math.min(dd.length, 1e3);
      let Xd = 0;
      for (; Rd > Xd && md.remainingNodes > 0; Xd++) try {
        const Rd = Xd in dd ? dd[Xd] : void 0;
        if (sm(Rd)) continue;
        Fd.push(yX(Rd, Od, md, Wd))
      } catch (dd) {
        Fd.push({
          stringValue: RF
        })
      }
      return dd.length > Xd && Fd.push({
        stringValue: FF
      }), Fd
    }

    function TX(dd, Od, md, Wd) {
      const Fd = [];
      for (const Rd in dd)
        if (qX.call(dd, Rd)) {
          if (!Rd) {
            null == Od || Od.debug("Dropping an attribute with an empty key");
            continue
          }
          if (Fd.length >= 1e3 || 0 >= md.remainingNodes) {
            null == Od || Od.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const Xd = dd[Rd];
            if (Sm(Xd) || Um(Xd)) continue;
            Fd.push({
              key: XF(Rd),
              value: yX(Xd, Od, md, Wd)
            })
          } catch (dd) {
            Fd.push({
              key: XF(Rd),
              value: {
                stringValue: RF
              }
            })
          }
        } return Fd
    }

    function pX(dd, Od, md) {
      return gF(gF(gF(gF({}, KF({}, dd.resourceAttributes)), {}, {
        "service.name": dd.serviceName || "unknown_service"
      }, dd.environment && {
        "deployment.environment": dd.environment
      }), dd.serviceVersion && {
        "service.version": dd.serviceVersion
      }), {}, {
        "telemetry.sdk.name": Od,
        "telemetry.sdk.version": md
      })
    }
    const YX = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function gX(dd, Od) {
      const md = KF({}, dd),
        Wd = {};
      for (const Fd of YX)({}).hasOwnProperty.call(md, Fd) && (Wd[Fd] = md[Fd], delete md[Fd]);
      return [...HX(md, Od), ...HX(Wd, Od)]
    }
    const wX = {
        darwin: "macOS",
        win32: "Windows",
        cygwin: "Windows",
        linux: "Linux",
        android: "Android",
        freebsd: "FreeBSD",
        openbsd: "OpenBSD",
        netbsd: "NetBSD",
        sunos: "SunOS",
        aix: "AIX",
        haiku: "Haiku",
        "Mac OS X": "macOS"
      },
      aX = {
        trace: {
          text: "TRACE",
          number: 1
        },
        debug: {
          text: "DEBUG",
          number: 5
        },
        info: {
          text: "INFO",
          number: 9
        },
        warn: {
          text: "WARN",
          number: 13
        },
        error: {
          text: "ERROR",
          number: 17
        },
        fatal: {
          text: "FATAL",
          number: 21
        }
      },
      EX = aX.info;

    function JX(dd) {
      try {
        return XF(String(dd))
      } catch (dd) {
        return RF
      }
    }

    function UX(dd, Od, md, Wd) {
      const Fd = dd.level || "info",
        {
          text: Rd,
          number: Xd
        } = aX[Fd] || EX,
        Kd = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(dd) + "000000"
        }(um(Wd) ? Wd : void 0),
        hd = {};
      Od.distinctId && (hd.posthogDistinctId = Od.distinctId), Od.sessionId && (hd.sessionId = Od.sessionId), Od.windowId && (hd["window.id"] = Od.windowId), sm(Od.sessionStartTimestamp) || (hd.sessionStartTimestamp = String(Od.sessionStartTimestamp)), sm(Od.lastActivityTimestamp) || (hd.lastActivityTimestamp = String(Od.lastActivityTimestamp)), Od.currentUrl && (hd["url.full"] = Od.currentUrl), Od.screenName && (hd["screen.name"] = Od.screenName), Od.appState && (hd["app.state"] = Od.appState), Od.activeFeatureFlags && Od.activeFeatureFlags.length > 0 && (hd.feature_flags = Od.activeFeatureFlags);
      const vd = gF({}, hd),
        Qd = dd.attributes;
      if (Qd) {
        let dd = [];
        try {
          dd = Object.keys(Qd)
        } catch (Od) {
          dd = []
        }
        for (const md of dd) {
          let dd;
          try {
            dd = Qd[md]
          } catch (Od) {
            dd = RF
          }
          Object.defineProperty(vd, md, {
            value: dd,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const td = {
        timeUnixNano: Kd,
        observedTimeUnixNano: Kd,
        severityNumber: Xd,
        severityText: Rd,
        body: {
          stringValue: JX(dd.body)
        },
        attributes: HX(vd, md)
      };
      return dd.trace_id && (td.traceId = dd.trace_id), dd.span_id && (td.spanId = dd.span_id), Um(dd.trace_flags) || (td.flags = dd.trace_flags), td
    }

    function xX(dd, Od, md) {
      return pX(dd, Od, md)
    }

    function BX(dd, Od, md, Wd) {
      return {
        resourceLogs: [{
          resource: {
            attributes: gX(Od)
          },
          scopeLogs: [{
            scope: {
              name: md,
              version: Wd
            },
            logRecords: dd
          }]
        }]
      }
    }
    var SX = class {
      constructor(dd) {
        this._onFire = dd, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(dd) {
        this.clear(), this._firesAt = Date.now() + dd, this._timer = HF((() => {
          this._timer = void 0, this._onFire()
        }), dd)
      }
      armNoEarlierThan(dd) {
        this._timer && Date.now() + dd <= this._firesAt || this.arm(dd)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function sX() {
      return .75 + .5 * Math.random()
    }

    function uX(dd, Od, md, Wd) {
      const Fd = Math.min(Math.max(0, Od - 1), 6),
        Rd = dd * Math.pow(2, Fd);
      return Math.round((void 0 === Wd ? Rd : Math.min(Rd, Math.max(Wd, dd))) * md)
    }
    var VX = class {
      constructor(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          Xd = arguments.length > 6 ? arguments[6] : void 0;
        var Kd;
        this._instance = dd, this._config = Od, this._logger = md, this._getContext = Wd, this._onReady = Fd, this._waitForStoragePersist = Rd, this._scopeName = Xd, this._flushTimer = new SX((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new vF, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = Od.maxBufferSize, this._maxQueueSize = Math.max(null !== (Kd = Od.maxQueueSize) && void 0 !== Kd ? Kd : Od.maxBufferSize, Od.maxBufferSize), this._flushIntervalMs = Od.flushIntervalMs, this._maxBatchRecordsPerPost = Od.maxBatchRecordsPerPost, this._rateCapWindowMs = Od.rateCapWindowMs, this._maxLogsPerInterval = Od.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(tm.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(dd, Od) {
        var md;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == dd ? void 0 : dd.body)) return;
        const Wd = this._runBeforeSend(dd);
        if (null === Wd) return;
        if (!Wd.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const Fd = {
          record: UX(Wd, null !== (md = null == Od ? void 0 : Od.context) && void 0 !== md ? md : this._getContext(), this._logger, null == Od ? void 0 : Od.occurredAtMs)
        };
        this._onReady((() => this._enqueue(Fd)))
      }
      _runBeforeSend(dd) {
        const Od = this._config.beforeSend;
        if (!Od) return dd;
        const md = wm(Od) ? Od : [Od];
        let Wd = dd;
        for (const Fd of md) try {
          const dd = Fd(Wd);
          if (!dd) return this._logger.info("Log was rejected in beforeSend function"), null;
          Wd = dd
        } catch (dd) {
          return this._logger.error("Error in beforeSend function for log:", dd), null
        }
        return Wd
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const dd = Date.now(),
          Od = dd - this._intervalWindowStart;
        return this._rateCapWindowMs > Od && Od >= 0 || (this._intervalWindowStart = dd, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var dd = this;
        return Im((function*() {
          if (!dd._instance.isDisabled) return dd._flushPromise || (dd._flushPromise = dd._flushInner().finally((() => {
            dd._flushPromise = null
          }))), dd._flushPromise
        }))()
      }
      _flushInner() {
        var dd = this;
        return Im((function*() {
          var Od;
          dd._flushTimer.clear();
          let md = null !== (Od = dd._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== Od ? Od : [];
          if (0 === md.length) return;
          const Wd = md.length;
          let Fd = 0;
          for (; md.length > 0 && Wd > Fd;) {
            var Rd, Xd;
            const Od = dd._queueGeneration;
            dd._evictedSinceAdvance = 0;
            const Wd = Math.min(md.length, dd._maxBatchRecordsPerPost),
              Kd = md.slice(0, Wd),
              hd = BX(Kd.map((dd => dd.record)), dd._buildResourceAttributes(), null !== (Rd = dd._scopeName) && void 0 !== Rd ? Rd : dd._instance.getLibraryId(), dd._instance.getLibraryVersion()),
              vd = yield dd._instance._sendLogsBatch(hd);
            if (dd._queueGeneration !== Od) return;
            if ("too-large" === vd.kind && Kd.length > 1) dd._maxBatchRecordsPerPost = Math.max(1, Math.floor(Kd.length / 2)), dd._logger.warn(`Logs batch of size ${Kd.length} was too large for the ingestion endpoint, reducing batch size to ${dd._maxBatchRecordsPerPost}`);
            else {
              if (dd._retryAfter.record(vd), dd._flushTimer.pending && dd._flushTimer.arm(Math.max(dd._flushIntervalMs, dd._retryAfter.remainingMs())), "retry-later" === vd.kind) throw vd.error;
              if ("too-large" === vd.kind ? dd._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === vd.kind && dd._config.maxBatchRecordsPerPost > dd._maxBatchRecordsPerPost && (dd._maxBatchRecordsPerPost = Math.min(dd._config.maxBatchRecordsPerPost, dd._maxBatchRecordsPerPost + 1)), yield dd._persistQueueAdvance(Kd.length), md = null !== (Xd = dd._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== Xd ? Xd : [], Fd += Kd.length, "fatal" === vd.kind) throw vd.error
            }
          }
        }))()
      }
      _persistQueueAdvance(dd) {
        var Od = this;
        return Im((function*() {
          var md;
          const Wd = Math.max(0, dd - Od._evictedSinceAdvance),
            Fd = null !== (md = Od._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== md ? md : [];
          Od._instance.setPersistedProperty(tm.LogsQueue, Fd.slice(Wd)), yield Od._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return xX(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(dd) {
        var Od;
        if (this._instance.optedOut) return;
        const md = null !== (Od = this._instance.getPersistedProperty(tm.LogsQueue)) && void 0 !== Od ? Od : [];
        this._maxQueueSize > md.length || (md.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), md.push(dd), this._instance.setPersistedProperty(tm.LogsQueue, md), this._maxBufferSize > md.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(uX(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const dd = this._instance.getPersistedProperty(tm.LogsQueue);
        return !!dd && dd.length > 0
      }
      shutdown(dd) {
        var Od = this;
        return Im((function*() {
          Od._flushTimer.clear();
          const md = Od.flush().catch((() => {}));
          void 0 !== dd ? yield yF(md, dd): yield md
        }))()
      }
      flushWithTimeout(dd) {
        var Od = this;
        return Im((function*() {
          const md = Od.flush();
          yield yF(md, dd, (() => {
            md.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (dd => {
          this._consecutiveFlushFailures++, this._flushJitter = sX(), this._logger.error("PostHog logs flush failed:", dd)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const iX = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function AX(dd) {
      return String(dd) + "000000"
    }

    function rX(dd, Od, md, Wd) {
      let Fd = "";
      return Wd && (Fd = Object.keys(Wd).sort().map((dd => `${JSON.stringify(dd)}:${JSON.stringify(Wd[dd])}`)).join(",")), `${dd}\0${Od}\0${null!=md?md:""}\0${Fd}`
    }
    var GX = class {
      constructor(dd, Od, md) {
        this._instance = dd, this._config = Od, this._logger = md, this._series = new Map, this._flushTimer = new SX((() => this.flush().catch((dd => {
          this._logger.error("Metrics flush failed:", dd)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new vF, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: dd,
          type: "count",
          value: Od,
          unit: null == md ? void 0 : md.unit,
          attributes: null == md ? void 0 : md.attributes
        })
      }
      gauge(dd, Od, md) {
        this._capture({
          name: dd,
          type: "gauge",
          value: Od,
          unit: null == md ? void 0 : md.unit,
          attributes: null == md ? void 0 : md.attributes
        })
      }
      histogram(dd, Od, md) {
        this._capture({
          name: dd,
          type: "histogram",
          value: Od,
          unit: null == md ? void 0 : md.unit,
          attributes: null == md ? void 0 : md.attributes
        })
      }
      flush() {
        var dd = this;
        const Od = this._flushPromise,
          md = function() {
            var md = Im((function*() {
              Od && (yield Od.catch((() => {}))), yield dd._doFlush()
            }));
            return function() {
              return md.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === md && (this._flushPromise = null)
          }));
        return this._flushPromise = md, md
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const dd = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(dd)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(dd) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const Od = this._runBeforeSend(dd);
        if (null === Od) return;
        if (!Od.name || "string" != typeof Od.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof Od.value || !Number.isFinite(Od.value)) return void this._logger.warn(`Dropping metric '${Od.name}': value must be a finite number`);
        if ("count" === Od.type && 0 > Od.value) return void this._logger.warn(`Dropping count '${Od.name}': counters are monotonic, value must be >= 0`);
        let md, Wd;
        try {
          md = Od.attributes ? gF({}, Od.attributes) : void 0, Wd = rX(Od.type, Od.name, Od.unit, md)
        } catch (dd) {
          return void this._logger.warn(`Dropping metric '${Od.name}': attributes could not be serialized`, dd)
        }
        let Fd = this._series.get(Wd);
        if (!Fd) {
          if (!this._admitNewSeries()) return;
          Fd = {
            name: Od.name,
            type: Od.type,
            unit: Od.unit,
            attributes: md,
            windowStartMs: Date.now()
          }, this._series.set(Wd, Fd)
        }
        const Rd = this._typeByName.get(Od.name);
        void 0 === Rd ? this._typeByName.set(Od.name, Od.type) : Rd === Od.type || this._typeCollisionWarned.has(Od.name) || (this._typeCollisionWarned.add(Od.name), this._logger.warn(`Metric name '${Od.name}' is already used as a ${Rd}; recording it as a ${Od.type} too will blend both series in charts. Use a distinct name.`)), this._fold(Fd, Od.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(dd, Od) {
        switch (dd.type) {
          case "count":
            var md;
            dd.total = (null !== (md = dd.total) && void 0 !== md ? md : 0) + Od;
            break;
          case "gauge":
            dd.last = Od;
            break;
          case "histogram": {
            dd.hist || (dd.hist = {
              count: 0,
              sum: 0,
              min: Od,
              max: Od,
              bucketCounts: new Array(iX.length + 1).fill(0)
            });
            const md = dd.hist;
            md.count += 1, md.sum += Od, md.min = Math.min(md.min, Od), md.max = Math.max(md.max, Od), md.bucketCounts[function(dd, Od) {
              for (let md = 0; Od.length > md; md++)
                if (Od[md] >= dd) return md;
              return Od.length
            }(Od, iX)] += 1;
            break
          }
        }
      }
      _runBeforeSend(dd) {
        const Od = this._config.beforeSend;
        if (!Od) return dd;
        const md = wm(Od) ? Od : [Od];
        let Wd = dd;
        for (const Fd of md) try {
          const dd = Fd(Wd);
          if (!dd) return this._logger.info("Metric was rejected in beforeSend function"), null;
          Wd = dd
        } catch (dd) {
          return this._logger.error("Error in beforeSend function for metric:", dd), null
        }
        return Wd
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(uX(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var dd = this;
        return Im((function*() {
          if (dd._flushTimer.clear(), 0 === dd._series.size) return;
          const Od = dd._series;
          dd._series = new Map, dd._seriesCapWarned = !1, dd._typeByName = new Map, dd._typeCollisionWarned = new Set;
          const md = dd._generation,
            Wd = yield dd._instance._sendMetricsBatch(dd._buildPayload(Od));
          if (md === dd._generation) switch (dd._retryAfter.record(Wd), "retry-later" === Wd.kind ? (dd._consecutiveFlushFailures++, dd._flushJitter = sX()) : (dd._consecutiveFlushFailures = 0, dd._flushJitter = 1), dd._flushTimer.pending && dd._flushTimer.arm(dd._nextFlushDelay()), Wd.kind) {
            case "ok":
              return;
            case "retry-later":
              return dd._mergeWindowBack(Od), void dd._flushTimer.armNoEarlierThan(dd._nextFlushDelay());
            case "too-large":
              return void dd._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void dd._logger.error("Failed to send metrics batch:", Wd.error)
          }
        }))()
      }
      _buildPayload(dd) {
        return Od = this._buildMetrics(dd), md = function(dd, Od, md) {
          return pX(dd, Od, md)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), Wd = this._instance.getLibraryId(), Fd = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: gX(md)
            },
            scopeMetrics: [{
              scope: {
                name: Wd,
                version: Fd
              },
              metrics: Od
            }]
          }]
        };
        var Od, md, Wd, Fd
      }
      _buildMetrics(dd) {
        const Od = AX(Date.now()),
          md = new Map;
        for (const Xd of dd.values()) {
          var Wd;
          const dd = rX(Xd.type, Xd.name, Xd.unit, void 0);
          let Kd = md.get(dd);
          Kd || (Kd = gF({
            name: Xd.name
          }, Xd.unit && {
            unit: Xd.unit
          }), "count" === Xd.type ? Kd.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === Xd.type ? Kd.gauge = {
            dataPoints: []
          } : Kd.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, md.set(dd, Kd));
          const hd = HX(null !== (Wd = Xd.attributes) && void 0 !== Wd ? Wd : {}, this._logger),
            vd = AX(Xd.windowStartMs);
          if ("count" === Xd.type) {
            var Fd;
            const dd = {
              attributes: hd,
              startTimeUnixNano: vd,
              timeUnixNano: Od,
              asDouble: null !== (Fd = Xd.total) && void 0 !== Fd ? Fd : 0
            };
            Kd.sum.dataPoints.push(dd)
          } else if ("gauge" === Xd.type) {
            var Rd;
            const dd = {
              attributes: hd,
              timeUnixNano: Od,
              asDouble: null !== (Rd = Xd.last) && void 0 !== Rd ? Rd : 0
            };
            Kd.gauge.dataPoints.push(dd)
          } else Xd.hist && Kd.histogram.dataPoints.push({
            attributes: hd,
            startTimeUnixNano: vd,
            timeUnixNano: Od,
            count: Xd.hist.count,
            sum: Xd.hist.sum,
            min: Xd.hist.min,
            max: Xd.hist.max,
            bucketCounts: Xd.hist.bucketCounts,
            explicitBounds: iX
          })
        }
        return Array.from(md.values())
      }
      _mergeWindowBack(dd) {
        for (const [Wd, Fd] of dd) {
          const dd = this._series.get(Wd);
          if (dd) switch (dd.windowStartMs = Math.min(dd.windowStartMs, Fd.windowStartMs), dd.type) {
            case "count":
              var Od, md;
              dd.total = (null !== (Od = dd.total) && void 0 !== Od ? Od : 0) + (null !== (md = Fd.total) && void 0 !== md ? md : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (Fd.hist)
                if (dd.hist) {
                  dd.hist.count += Fd.hist.count, dd.hist.sum += Fd.hist.sum, dd.hist.min = Math.min(dd.hist.min, Fd.hist.min), dd.hist.max = Math.max(dd.hist.max, Fd.hist.max);
                  for (let Od = 0; dd.hist.bucketCounts.length > Od; Od++) dd.hist.bucketCounts[Od] += Fd.hist.bucketCounts[Od]
                } else dd.hist = Fd.hist
          } else this._admitNewSeries() && this._series.set(Wd, Fd)
        }
      }
    };
    const nX = function(dd) {
        let {
          debugEnabled: Od
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = {
          _log(md) {
            let Wd;
            try {
              Wd = typeof window > "u" ? void 0 : window
            } catch (dd) {
              return
            }
            for (var Rd = arguments.length, Xd = new Array(Rd > 1 ? Rd - 1 : 0), Kd = 1; Kd < Rd; Kd++) Xd[Kd - 1] = arguments[Kd];
            Wd && (Fd.DEBUG || Wd.POSTHOG_DEBUG || Od) && !Um(Wd.console) && Wd.console && ("__rrweb_original__" in Wd.console[md] ? Wd.console[md].__rrweb_original__ : Wd.console[md])(dd, ...Xd)
          },
          debug() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            md._log("debug", ...Od)
          },
          info() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            md._log("log", ...Od)
          },
          warn() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            md._log("warn", ...Od)
          },
          error() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            md._log("error", ...Od)
          },
          critical() {
            for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
            console.error(dd, ...md)
          },
          uninitializedWarning(dd) {
            md.error(`You must initialize PostHog before calling ${dd}`)
          },
          createLogger: (Od, md) => nX(`${dd} ${Od}`, md)
        };
        return md
      },
      LX = nX("[PostHog.js]"),
      PX = LX.createLogger;

    function zX(dd, Od) {
      wm(dd) && dd.forEach(Od)
    }

    function cX(dd, Od) {
      if (!sm(dd))
        if (wm(dd)) dd.forEach(Od);
        else if ((dd => dd instanceof FormData)(dd)) dd.forEach(((dd, md) => Od(dd, md)));
      else
        for (const md in dd) Ym.call(dd, md) && Od(dd[md], md)
    }
    const jX = function(dd) {
      for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
      for (const Fd of md)
        for (const Od in Fd) void 0 !== Fd[Od] && (dd[Od] = Fd[Od]);
      return dd
    };

    function DX(dd) {
      const Od = Object.keys(dd);
      let md = Od.length;
      const Wd = new Array(md);
      for (; md--;) Wd[md] = [Od[md], dd[Od[md]]];
      return Wd
    }
    const eX = function(dd) {
        return function() {
          try {
            for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
            return dd.apply(this, md)
          } catch (dd) {
            LX.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), LX.critical(dd)
          }
        }
      },
      IX = function(dd) {
        const Od = {};
        return cX(dd, (function(dd, md) {
          (xm(dd) && dd.length > 0 || um(dd)) && (Od[md] = dd)
        })), Od
      };

    function lX(dd) {
      const Od = gF({}, dd);
      for (const md of ["name", "message", "stack", "cause", "errors"]) try {
        md in dd && (Od[md] = dd[md])
      } catch (dd) {}
      return Od
    }
    const CX = ["herokuapp.com", "vercel.app", "netlify.app"];

    function ZX(dd) {
      const Od = null == dd ? void 0 : dd.hostname;
      if (!xm(Od)) return !1;
      const md = Od.split(".").slice(-2).join(".");
      for (const Wd of CX)
        if (md === Wd) return !1;
      return !0
    }

    function kX(dd, Od, md, Wd) {
      const {
        capture: Fd = !1,
        passive: Rd = !0
      } = null != Wd ? Wd : {};
      null == dd || dd.addEventListener(Od, md, {
        capture: Fd,
        passive: Rd
      })
    }

    function fX(dd) {
      return "ph_toolbar_internal" === dd.name
    }
    const MX = dd => {
      if (Om) {
        try {
          const Od = dd + "=",
            md = Om.cookie.split(";").filter((dd => dd.length));
          for (let dd = 0; md.length > dd; dd++) {
            let Wd = md[dd];
            for (;
              " " == Wd.charAt(0);) Wd = Wd.substring(1, Wd.length);
            if (0 === Wd.indexOf(Od)) return decodeURIComponent(Wd.substring(Od.length, Wd.length))
          }
        } catch (dd) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(dd) {
      return 0 > dd ? Math.ceil(dd) : Math.floor(dd)
    }), Number.isInteger || (Number.isInteger = function(dd) {
      return um(dd) && isFinite(dd) && Math.floor(dd) === dd
    });
    var dK = class dd {
        constructor(dd) {
          if (this.bytes = dd, 16 !== dd.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(Od, md, Wd, Fd) {
          if (!Number.isInteger(Od) || !Number.isInteger(md) || !Number.isInteger(Wd) || !Number.isInteger(Fd) || 0 > Od || 0 > md || 0 > Wd || 0 > Fd || Od > 0xffffffffffff || md > 4095 || Wd > 1073741823 || Fd > 4294967295) throw new RangeError("invalid field value");
          const Rd = new Uint8Array(16);
          return Rd[0] = Od / Math.pow(2, 40), Rd[1] = Od / Math.pow(2, 32), Rd[2] = Od / Math.pow(2, 24), Rd[3] = Od / Math.pow(2, 16), Rd[4] = Od / 256, Rd[5] = Od, Rd[6] = 112 | md >>> 8, Rd[7] = md, Rd[8] = 128 | Wd >>> 24, Rd[9] = Wd >>> 16, Rd[10] = Wd >>> 8, Rd[11] = Wd, Rd[12] = Fd >>> 24, Rd[13] = Fd >>> 16, Rd[14] = Fd >>> 8, Rd[15] = Fd, new dd(Rd)
        }
        toString() {
          let dd = "";
          for (let Od = 0; this.bytes.length > Od; Od++) dd = dd + (this.bytes[Od] >>> 4).toString(16) + (15 & this.bytes[Od]).toString(16), 3 !== Od && 5 !== Od && 7 !== Od && 9 !== Od || (dd += "-");
          if (36 !== dd.length) throw new Error("Invalid UUIDv7 was generated");
          return dd
        }
        clone() {
          return new dd(this.bytes.slice(0))
        }
        equals(dd) {
          return 0 === this.compareTo(dd)
        }
        compareTo(dd) {
          for (let Od = 0; 16 > Od; Od++) {
            const md = this.bytes[Od] - dd.bytes[Od];
            if (0 !== md) return Math.sign(md)
          }
          return 0
        }
      },
      OK = class {
        generate() {
          const dd = this.generateOrAbort();
          if (!Um(dd)) return dd;
          {
            this._timestamp = 0;
            const dd = this.generateOrAbort();
            if (Um(dd)) throw new Error("Could not generate UUID after timestamp reset");
            return dd
          }
        }
        generateOrAbort() {
          const dd = (() => {
            const dd = Date.now();
            return um(dd) && isFinite(dd) ? Math.min(Math.max(Math.floor(dd), 0), 0xffffffffffff) : 0
          })();
          if (dd > this._timestamp) this._timestamp = dd, this._resetCounter();
          else {
            if (this._timestamp >= dd + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return dK.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new WK
        }
      };
    let mK = dd => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let Od = 0; dd.length > Od; Od++) dd[Od] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return dd
    };
    fO && !Um(fO.crypto) && crypto.getRandomValues && (mK = dd => crypto.getRandomValues(dd));
    var WK = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (mK(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let FK;
    const RK = () => XK().toString(),
      XK = () => (FK || (FK = new OK)).generate();
    let KK = "";
    const hK = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let vK = null;
    const QK = {
      _is_supported() {
        if (!Sm(vK)) return vK;
        if (vK = !1, Om) try {
          const dd = `__ph_cookie_support_${RK()}`;
          QK._set(dd, "xyz"), vK = '"xyz"' === MX(dd), QK._remove(dd)
        } catch (Wd) {
          vK = !1
        }
        return vK
      },
      _error(dd) {
        LX.error("cookieStore error: " + dd)
      },
      _get: MX,
      _parse(dd) {
        let Od;
        try {
          Od = JSON.parse(QK._get(dd)) || {}
        } catch (dd) {}
        return Od
      },
      _set(dd, Od, md, Wd, Fd) {
        if (!Om) return !1;
        try {
          let Rd = "",
            Xd = "";
          const Kd = function(dd, Od) {
            if (Od) {
              let Od = function(dd) {
                let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Om;
                if (KK) return KK;
                if (!Od) return "";
                if (["localhost", "127.0.0.1"].includes(dd)) return "";
                const md = dd.split(".");
                let Wd = Math.min(md.length, 8);
                const Fd = "dmn_chk_" + RK();
                for (; !KK && Wd--;) {
                  const dd = md.slice(Wd).join("."),
                    Rd = Fd + "=1;domain=." + dd + ";path=/";
                  Od.cookie = Rd + ";max-age=3", Od.cookie.includes(Fd) && (Od.cookie = Rd + ";max-age=0", KK = dd)
                }
                return KK
              }(dd);
              if (!Od) {
                const md = (dd => {
                  const Od = dd.match(hK);
                  return Od ? Od[0] : ""
                })(dd);
                md !== Od && LX.info("Warning: cookie subdomain discovery mismatch", md, Od), Od = md
              }
              return Od ? "; domain=." + Od : ""
            }
            return ""
          }(Om.location.hostname, Wd);
          if (md) {
            const dd = new Date;
            dd.setTime(dd.getTime() + 864e5 * md), Rd = "; expires=" + dd.toUTCString()
          }
          Fd && (Xd = "; secure");
          const hd = dd + "=" + encodeURIComponent(JSON.stringify(Od)) + Rd + "; SameSite=Lax; path=/" + Kd + Xd;
          return hd.length > 3686.4 && LX.warn("cookieStore warning: large cookie, len=" + hd.length), Om.cookie = hd, !0
        } catch (dd) {
          return !1
        }
      },
      _remove(dd, Od) {
        if ((null == Om ? void 0 : Om.cookie) && (!Od || !Sm(MX(dd)))) try {
          QK._set(dd, "", -1, Od)
        } catch (dd) {
          return
        }
      }
    };
    let tK = null;
    const oK = {
        _is_supported() {
          if (!Sm(tK)) return tK;
          let dd = !0;
          if (Um(fO)) dd = !1;
          else try {
            const Od = "__mplssupport__";
            oK._set(Od, "xyz"), '"xyz"' !== oK._get(Od) && (dd = !1), oK._remove(Od)
          } catch (Fd) {
            dd = !1
          }
          return dd || LX.error("localStorage unsupported; falling back to cookie store"), tK = dd, dd
        },
        _error(dd) {
          LX.error("localStorage error: " + dd)
        },
        _get(dd) {
          try {
            return null == fO ? void 0 : fO.localStorage.getItem(dd)
          } catch (dd) {
            oK._error(dd)
          }
          return null
        },
        _parse(dd) {
          try {
            return JSON.parse(oK._get(dd)) || {}
          } catch (dd) {}
          return null
        },
        _set(dd, Od) {
          try {
            return null == fO || fO.localStorage.setItem(dd, JSON.stringify(Od)), !0
          } catch (dd) {
            oK._error(dd)
          }
          return !1
        },
        _remove(dd) {
          try {
            null == fO || fO.localStorage.removeItem(dd)
          } catch (dd) {
            oK._error(dd)
          }
        }
      },
      NK = [Hd, Kd, Nd, hd, Td, td, Qd, vd, yd],
      qK = [Jd, Ed, dO, OO, UO, JO, sd, YO],
      HK = dd => dd + "_cpm",
      yK = ["__proto__", "constructor", "prototype"],
      bK = dd => {
        if (!Em(dd)) return {};
        const Od = {};
        return Object.keys(dd).forEach((md => {
          -1 === yK.indexOf(md) && (Od[md] = dd[md])
        })), Od
      },
      TK = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const md = {};
        return [...qK, ...Od].forEach((Od => {
          const Wd = dd[Od];
          Um(Wd) || Sm(Wd) || "" === Wd || (md[Od] = Wd)
        })), md
      },
      pK = dd => {
        let Od = 5381,
          md = 2166136261;
        for (let Wd = 0; dd.length > Wd; Wd++) {
          const Fd = dd.charCodeAt(Wd);
          Od = 33 * Od ^ Fd, md = Math.imul(md ^ Fd, 16777619)
        }
        return dd.length.toString(36) + "." + (Od >>> 0).toString(36) + "." + (md >>> 0).toString(36)
      },
      YK = (dd, Od) => ({
        p: Od,
        f: pK(JSON.stringify(dd))
      }),
      gK = (dd, Od) => {
        if (!Od) return {
          properties: [],
          isValid: !1
        };
        try {
          const md = QK._parse(HK(dd)),
            Wd = (null == md ? void 0 : md.f) === pK(Od) && wm(md.p);
          return {
            properties: Wd ? md.p : [],
            isValid: Wd
          }
        } catch (dd) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      wK = (dd, Od) => Od + "|" + (QK._get(HK(dd)) || ""),
      aK = {},
      EK = {
        _is_supported: () => !0,
        _error(dd) {
          LX.error("memoryStorage error: " + dd)
        },
        _get: dd => dd in aK ? aK[dd] : null,
        _parse: dd => dd in aK ? aK[dd] : null,
        _set: (dd, Od) => (aK[dd] = Od, !0),
        _remove(dd) {
          delete aK[dd]
        }
      };
    let JK = null;
    const UK = {
      _is_supported() {
        if (!Sm(JK)) return JK;
        if (JK = !0, Um(fO)) JK = !1;
        else try {
          const dd = "__support__";
          UK._set(dd, "xyz"), '"xyz"' !== UK._get(dd) && (JK = !1), UK._remove(dd)
        } catch (Wd) {
          JK = !1
        }
        return JK
      },
      _error(dd) {
        LX.error("sessionStorage error: ", dd)
      },
      _get(dd) {
        try {
          return null == fO ? void 0 : fO.sessionStorage.getItem(dd)
        } catch (dd) {
          UK._error(dd)
        }
        return null
      },
      _parse(dd) {
        try {
          return JSON.parse(UK._get(dd)) || null
        } catch (dd) {}
        return null
      },
      _set(dd, Od) {
        try {
          return null == fO || fO.sessionStorage.setItem(dd, JSON.stringify(Od)), !0
        } catch (dd) {
          UK._error(dd)
        }
        return !1
      },
      _remove(dd) {
        try {
          null == fO || fO.sessionStorage.removeItem(dd)
        } catch (dd) {
          UK._error(dd)
        }
      }
    };
    var xK = class {
      constructor(dd) {
        this._instance = dd
      }
      get _config() {
        return this._instance.config
      }
      get consent() {
        return this._getDnt() ? 0 : this._storedConsent
      }
      isOptedOut() {
        return "always" === this._config.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this._config.cookieless_mode
      }
      isOptedIn() {
        return !this.isOptedOut()
      }
      isExplicitlyOptedOut() {
        return 0 === this.consent
      }
      isRejected() {
        return 0 === this.consent || -1 === this.consent && this._config.opt_out_capturing_by_default
      }
      optInOut(dd) {
        this.sH._set(this._storageKey, dd ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.sH._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: dd,
          opt_out_capturing_cookie_prefix: Od,
          consent_persistence_name: md
        } = this._instance.config;
        return md || (Od ? Od + dd : "__ph_opt_in_out_" + dd)
      }
      get _storedConsent() {
        const dd = this.sH._get(this._storageKey);
        return jm(dd) ? 1 : Hm(Dm, dd) ? 0 : -1
      }
      get sH() {
        const dd = this._config.opt_out_capturing_persistence_type,
          Od = "localStorage" === dd ? oK : QK,
          md = Od._is_supported() ? Od : EK;
        if (!this._persistentStore || this._persistentStore !== md) {
          this._persistentStore = md;
          const Od = "localStorage" === dd ? QK : oK;
          Od._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(jm(Od._get(this._storageKey))), Od._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == dm ? void 0 : dm.doNotTrack, null == dm ? void 0 : dm.msDoNotTrack, Qm.doNotTrack, null == dm ? void 0 : dm.globalPrivacyControl].some((dd => jm(dd)))
      }
    };

    function BK(dd, Od) {
      var md;
      const Wd = null == dd || null === (md = dd.config) || void 0 === md ? void 0 : md.get_current_url;
      if (!am(Wd)) return Od;
      try {
        const dd = Wd(Od);
        return xm(dd) && dd ? dd : Od
      } catch (dd) {
        return LX.error("Error in get_current_url, falling back to window.location.href", dd), Od
      }
    }

    function SK(dd) {
      var Od;
      return dd instanceof Element && ("__POSTHOG_TOOLBAR__" === dd.id || !!(null === (Od = dd.closest) || void 0 === Od ? void 0 : Od.call(dd, ".toolbar-global-fade-container")))
    }

    function sK(dd) {
      return !!dd && 1 === dd.nodeType
    }

    function uK(dd, Od) {
      return !!dd && !!dd.tagName && dd.tagName.toLowerCase() === Od.toLowerCase()
    }

    function VK(dd) {
      return !!dd && 3 === dd.nodeType
    }

    function iK(dd) {
      return !!dd && 11 === dd.nodeType && sK(dd.host)
    }

    function AK(dd) {
      return dd ? ym(dd).split(/\s+/) : []
    }

    function rK(dd, Od) {
      const md = function(dd) {
        var Od;
        const md = null == fO || null === (Od = fO.location) || void 0 === Od ? void 0 : Od.href;
        return Um(md) ? void 0 : BK(dd, md)
      }(Od);
      return !!(md && dd && dd.some((dd => md.match(dd))))
    }

    function GK(dd) {
      let Od = "";
      switch (typeof dd.className) {
        case "string":
          Od = dd.className;
          break;
        case "object":
          Od = (dd.className && "baseVal" in dd.className ? dd.className.baseVal : null) || dd.getAttribute("class") || "";
          break;
        default:
          Od = ""
      }
      return AK(Od)
    }

    function nK(dd) {
      return sm(dd) ? null : ym(dd).split(/(\s+)/).filter((dd => Hh(dd))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function LK(dd) {
      let Od = "";
      return Xh(dd) && !Kh(dd) && dd.childNodes && dd.childNodes.length && cX(dd.childNodes, (function(dd) {
        var md;
        VK(dd) && dd.textContent && (Od += null !== (md = nK(dd.textContent)) && void 0 !== md ? md : "")
      })), ym(Od)
    }

    function PK(dd) {
      var Od;
      return Um(dd.target) ? dd.srcElement || null : (null === (Od = dd.target) || void 0 === Od ? void 0 : Od.shadowRoot) ? dd.composedPath()[0] || null : dd.target || null
    }
    const zK = ["a", "button", "form", "input", "select", "textarea", "label"];

    function cK(dd, Od) {
      const md = dd.matches || dd.matchesSelector || dd.msMatchesSelector || dd.mozMatchesSelector || dd.webkitMatchesSelector || dd.oMatchesSelector;
      try {
        return !!md && md.call(dd, Od)
      } catch (dd) {
        return !1
      }
    }

    function jK(dd, Od) {
      if (Um(Od)) return !0;
      for (const md of dd)
        if (Od.some((dd => cK(md, dd)))) return !0;
      return !1
    }

    function DK(dd) {
      const Od = dd.parentNode;
      return !(!Od || !sK(Od)) && Od
    }
    const eK = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      IK = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      lK = [...IK, "+", "-", "\u2212", "\u2013"],
      CK = lK.length + 10,
      ZK = ["button", "a", "input", "select", "textarea", "label"],
      kK = ["button", "link", "tab", "menuitem", "option"],
      fK = (dd, Od) => /[a-z0-9]/i.test(Od) ? Hm(lK, Od) ? new RegExp(`\\b${Od}\\b`).test(dd) : dd.includes(Od) : dd === Od,
      MK = dd => Hm(ZK, dd.tagName.toLowerCase()) || Hm(kK, (dd.getAttribute("role") || "").toLowerCase());

    function dh(dd) {
      let Od = "",
        md = "";
      const Wd = dd => {
        sK(dd) && Xh(dd) && !Kh(dd) && (Od += ` ${LK(dd)}`, md = md || dd.getAttribute("aria-label") || "", cX(dd.childNodes, Wd))
      };
      Wd(dd), Od = ym(Od.replace(/\s+/g, " "));
      const Fd = (Hh(Od) ? Od : "").toLowerCase(),
        Rd = dd.getAttribute("aria-label") || (Fd ? "" : md);
      return {
        safeText: Fd,
        ariaLabel: ym(Rd).toLowerCase()
      }
    }
    const Oh = [".ph-no-rageclick", ".ph-no-capture"],
      mh = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Wh(dd, Od) {
      if (!fO || Fh(dd)) return !1;
      let md, Wd, Fd;
      var Rd, Xd;
      if (im(Od) ? (md = !!Od && Oh, Wd = void 0, Fd = !1) : (md = null !== (Rd = null == Od ? void 0 : Od.css_selector_ignorelist) && void 0 !== Rd ? Rd : Oh, Wd = null == Od ? void 0 : Od.content_ignorelist, Fd = null !== (Xd = null == Od ? void 0 : Od.ignore_text_selection) && void 0 !== Xd && Xd), !1 === md) return !1;
      if (Fd && function(dd) {
          return !(!dd || !sK(dd)) && (!!uK(dd, "textarea") || (uK(dd, "input") ? Hm(mh, (dd.getAttribute("type") || "").toLowerCase()) : function(dd) {
            var Od;
            if (dd.isContentEditable) return !0;
            const md = null === (Od = dd.getAttribute) || void 0 === Od ? void 0 : Od.call(dd, "contenteditable");
            return "true" === md || "" === md
          }(dd)))
        }(dd)) return !1;
      const {
        targetElementList: Kd
      } = Rh(dd, !1);
      return !(Wd && function(dd, Od) {
        let md, {
          safeText: Wd,
          ariaLabel: Fd
        } = Od;
        if (!0 === dd) md = IK;
        else {
          if (!wm(dd)) return !1;
          if (dd.length > CK) return LX.error(`[PostHog] content_ignorelist array cannot exceed ${CK} items. Use css_selector_ignorelist for more complex matching.`), !1;
          md = dd.map((dd => dd.toLowerCase()))
        }
        return md.some((dd => fK(Wd, dd) || fK(Fd, dd)))
      }(Wd, function(dd, Od) {
        for (const md of Od)
          if (MK(md)) return dh(md);
        for (const md of Od) {
          try {
            if ("pointer" !== (null == fO ? void 0 : fO.getComputedStyle(md).getPropertyValue("cursor"))) break
          } catch (dd) {
            break
          }
          const Od = dh(md);
          if (Od.safeText || Od.ariaLabel) return Od
        }
        return dh(dd)
      }(dd, Kd)) || jK(Kd, md))
    }
    const Fh = dd => !dd || uK(dd, "html") || !sK(dd),
      Rh = (dd, Od) => {
        if (!fO || Fh(dd)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let md = !1;
        const Wd = [dd];
        let Fd = dd;
        for (; Fd.parentNode && !uK(Fd, "body");) {
          if (iK(Fd.parentNode)) {
            Wd.push(Fd.parentNode.host), Fd = Fd.parentNode.host;
            continue
          }
          const Rd = DK(Fd);
          if (!Rd) break;
          if (Od || zK.indexOf(Rd.tagName.toLowerCase()) > -1) md = !0;
          else try {
            const dd = fO.getComputedStyle(Rd);
            dd && "pointer" === dd.getPropertyValue("cursor") && (md = !0)
          } catch (dd) {}
          Wd.push(Rd), Fd = Rd
        }
        return {
          parentIsUsefulElement: md,
          targetElementList: Wd
        }
      };

    function Xh(dd) {
      const Od = new Set;
      let md = 0;
      for (let Rd = dd; Rd.parentNode && !uK(Rd, "body"); Rd = Rd.parentNode) {
        if (md++ >= 1e3 || Od.has(Rd)) return !1;
        Od.add(Rd);
        const dd = GK(Rd);
        if (Hm(dd, "ph-sensitive") || Hm(dd, "ph-no-capture")) return !1
      }
      if (Hm(GK(dd), "ph-include")) return !0;
      const Wd = dd.type || "";
      if (xm(Wd)) switch (Wd.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const Fd = dd.name || dd.id || "";
      return !xm(Fd) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(Fd.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Kh(dd) {
      return !!(uK(dd, "input") && !["button", "checkbox", "submit", "reset"].includes(dd.type) || uK(dd, "select") || uK(dd, "textarea") || "true" === dd.getAttribute("contenteditable"))
    }
    const hh = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      vh = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      Qh = [16, 15, 14, 13],
      th = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      oh = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Nh = /[0-9A-Za-z_]/;

    function qh(dd) {
      let Od = 0,
        md = !1;
      for (let Wd = dd.length - 1; Wd >= 0; Wd--) {
        let Fd = dd.charCodeAt(Wd) - 48;
        md && (Fd *= 2, Fd > 9 && (Fd -= 9)), Od += Fd, md = !md
      }
      return Od % 10 == 0
    }

    function Hh(dd) {
      let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (sm(dd)) return !1;
      if (xm(dd)) {
        if (dd = ym(dd), Od ? hh.test((dd || "").replace(/[- ]/g, "")) : function(dd) {
            let Od;
            for (vh.lastIndex = 0; Od = vh.exec(dd);) {
              const dd = Od[2];
              if (!dd) continue;
              const md = dd.replace(/[- ]/g, "");
              for (let Od = 0; md.length > Od; Od++)
                for (const dd of Qh) {
                  const Wd = Od + dd;
                  if (md.length >= Wd) {
                    const dd = md.slice(Od, Wd);
                    if (hh.test(dd) && qh(dd)) return !0
                  }
                }
            }
            return !1
          }(dd)) return !1;
        if (Od ? th.test(dd) : function(dd) {
            let Od;
            for (oh.lastIndex = 0; Od = oh.exec(dd);) {
              const dd = Od[1],
                md = Od[3];
              if (!(dd && md && Nh.test(dd) && Nh.test(md))) return !0
            }
            return !1
          }(dd)) return !1
      }
      return !0
    }

    function yh(dd) {
      let Od = LK(dd);
      return Od = `${Od} ${bh(dd)}`.trim(), Hh(Od) ? Od : ""
    }

    function bh(dd) {
      let Od = "";
      return dd && dd.childNodes && dd.childNodes.length && cX(dd.childNodes, (function(dd) {
        var md;
        if (dd && "span" === (null === (md = dd.tagName) || void 0 === md ? void 0 : md.toLowerCase())) try {
          const md = LK(dd);
          Od = `${Od} ${md}`.trim(), dd.childNodes && dd.childNodes.length && (Od = `${Od} ${bh(dd)}`.trim())
        } catch (dd) {
          LX.error("[AutoCapture]", dd)
        }
      })), Od
    }

    function Th(dd) {
      return dd.replace(/"|\\"/g, '\\"')
    }

    function ph(dd) {
      const Od = dd.attr__class;
      if (Od) return wm(Od) ? Od : AK(Od)
    }
    const Yh = PX("[Dead Clicks]"),
      gh = () => !0,
      wh = dd => {
        var Od;
        const md = !!(null === (Od = dd.instance.persistence) || void 0 === Od ? void 0 : Od.get_property(cd)),
          Wd = dd.instance.config.capture_dead_clicks;
        return im(Wd) ? Wd : !!Em(Wd) || md
      };
    var ah = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(dd, Od, md) {
        this.instance = dd, this.isEnabled = Od, this.onCapture = md, this.startIfEnabledOrStop()
      }
      onRemoteConfig(dd) {
        if (!dd.ok) return;
        const Od = dd.config;
        "captureDeadClicks" in Od && (this.instance.persistence && this.instance.persistence.register({
          [cd]: Od.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(dd) {
        var Od, md, Wd;
        (null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.initDeadClicksAutocapture) ? dd(): null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this.instance, "dead-clicks-autocapture", (Od => {
          Od ? Yh.error("failed to load script", Od) : dd()
        }))
      }
      _start() {
        var dd;
        if (Om) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (dd = Qm.__PosthogExtensions__) || void 0 === dd ? void 0 : dd.initDeadClicksAutocapture)) {
            const dd = Em(this.instance.config.capture_dead_clicks) ? gF({}, this.instance.config.capture_dead_clicks) : {};
            dd.__onCapture = this.onCapture, this.onCapture && (dd.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = Qm.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, dd), this._lazyLoadedDeadClicksAutocapture.start(Om), Yh.info("starting...")
          }
        } else Yh.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Yh.info("stopping..."))
      }
    };
    const Eh = PX("[SegmentIntegration]");

    function Jh(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Wd = dd.config.segment;
      if (!Wd) return Od();
      const {
        analytics: Fd,
        filterProperties: Rd
      } = (dd => am(dd.register))(Xd = Wd) ? {
        analytics: Xd
      } : Xd;
      var Xd;
      ! function(dd, Od, md, Wd) {
        const Fd = Od => {
            const Fd = () => Od.anonymousId() || RK();
            dd.config.get_device_id = Fd, Wd && Od.id() && (dd.register({
              distinct_id: Od.id(),
              $device_id: Fd()
            }), dd.persistence.set_property(YO, DO)), md(Wd ? void 0 : Od.anonymousId() || void 0)
          },
          Rd = Od.user();
        "then" in Rd && am(Rd.then) ? Rd.then(Fd) : Fd(Rd)
      }(dd, Fd, (md => {
        Fd.register(function(dd, Od) {
          let {
            filterProperties: md
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || Eh.warn("This browser does not have Promise support, and can not use the segment integration");
          const Wd = (Wd, Fd) => {
            if (!Fd) return Wd;
            const Rd = !!Od && Wd.event.anonymousId === Od && !Wd.event.userId;
            Rd || Wd.event.userId || Wd.event.anonymousId === dd.get_distinct_id() || (Eh.info("No userId set, resetting PostHog"), dd.reset()), Rd || (Od = void 0), Wd.event.userId && Wd.event.userId !== dd.get_distinct_id() && (Eh.info("UserId set, identifying with PostHog"), dd.identify(Wd.event.userId));
            let Xd = dd.calculateEventProperties(Fd, Wd.event.properties);
            if (!sm(md)) {
              const dd = Wd.event.properties || {},
                Od = {};
              for (const md of Object.keys(Xd)) Ym.call(dd, md) || (Od[md] = Xd[md]);
              const Fd = ((dd, Od) => {
                const md = wm(dd) ? dd : [dd];
                let Wd = gF({}, Od);
                for (const Fd of md) try {
                  if (Wd = Fd(Wd), sm(Wd)) return null
                } catch (dd) {
                  return Eh.error("Error in Segment filterProperties:", dd), null
                }
                return Wd
              })(md, Od);
              if (sm(Fd)) return Wd;
              Xd = Fd
            }
            return Wd.event.properties = Object.assign({}, Xd, Wd.event.properties), Wd
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: dd => Wd(dd, dd.event.event),
            page: dd => Wd(dd, lO),
            identify: dd => Wd(dd, ZO),
            screen: dd => Wd(dd, "$screen")
          }
        }(dd, md, {
          filterProperties: Rd
        })).then((() => {
          Od()
        }), (dd => {
          Eh.error("Failed to register the Segment integration", dd), Od()
        }))
      }), md)
    }
    const Uh = "posthog-js";

    function xh(dd) {
      let {
        organization: Od,
        projectId: md,
        prefix: Wd,
        severityAllowList: Fd = ["error"],
        sendExceptionsToPostHog: Rd = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Xd => {
        var Kd, hd, vd, Qd, td;
        if ("*" !== Fd && !Fd.includes(Xd.level) || !dd.__loaded) return Xd;
        Xd.tags || (Xd.tags = {});
        const od = dd.requestRouter.endpointFor("ui", `/project/${dd.config.token}/person/${dd.get_distinct_id()}`);
        Xd.tags["PostHog Person URL"] = od, dd.sessionRecordingStarted() && (Xd.tags["PostHog Recording URL"] = dd.get_session_replay_url({
          withTimestamp: !0
        }));
        const Nd = (null === (Kd = Xd.exception) || void 0 === Kd ? void 0 : Kd.values) || [],
          qd = Nd.map((dd => gF(gF({}, dd), {}, {
            stacktrace: dd.stacktrace ? gF(gF({}, dd.stacktrace), {}, {
              type: "raw",
              frames: (dd.stacktrace.frames || []).map((dd => gF(gF({}, dd), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          Hd = {
            $exception_message: (null === (hd = Nd[0]) || void 0 === hd ? void 0 : hd.value) || Xd.message,
            $exception_type: null === (vd = Nd[0]) || void 0 === vd ? void 0 : vd.type,
            $exception_level: Xd.level,
            $exception_list: qd,
            $sentry_event_id: Xd.event_id,
            $sentry_exception: Xd.exception,
            $sentry_exception_message: (null === (Qd = Nd[0]) || void 0 === Qd ? void 0 : Qd.value) || Xd.message,
            $sentry_exception_type: null === (td = Nd[0]) || void 0 === td ? void 0 : td.type,
            $sentry_tags: Xd.tags
          };
        var yd;
        return Od && md && (Hd.$sentry_url = (Wd || "https://sentry.io/organizations/") + Od + "/issues/?project=" + md + "&query=" + Xd.event_id), Rd && (null === (yd = dd.exceptions) || void 0 === yd || yd.sendExceptionEvent(Hd)), Xd
      }
    }
    var Bh = class {
        constructor(dd, Od, md, Wd, Fd, Rd) {
          this.name = Uh, this.setupOnce = function(Xd) {
            Xd(xh(dd, {
              organization: Od,
              projectId: md,
              prefix: Wd,
              severityAllowList: Fd,
              sendExceptionsToPostHog: null == Rd || Rd
            }))
          }
        }
      },
      Sh = class {
        constructor(dd) {
          this._onSessionIdChange = (dd, Od, md) => {
            md && (md.noSessionId || md.activityTimeout || md.sessionPastMaximumLength || md.crossTabAdoption) && (LX.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: dd,
              changeReason: md
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = dd, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var dd;
          this._unsubscribeSessionId = null === (dd = this._instance.sessionManager) || void 0 === dd ? void 0 : dd.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var dd;
          null === (dd = this._unsubscribeSessionId) || void 0 === dd || dd.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(dd, Od) {
          var md;
          const Wd = this._previousPageViewProperties(dd, Od);
          return this._currentPageview = {
            pathname: null !== (md = null == fO ? void 0 : fO.location.pathname) && void 0 !== md ? md : "",
            pageViewId: Od,
            timestamp: dd
          }, this._instance.scrollManager.resetContext(), Wd
        }
        doPageLeave(dd) {
          var Od;
          return this._previousPageViewProperties(dd, null === (Od = this._currentPageview) || void 0 === Od ? void 0 : Od.pageViewId)
        }
        doEvent() {
          var dd;
          return {
            $pageview_id: null === (dd = this._currentPageview) || void 0 === dd ? void 0 : dd.pageViewId
          }
        }
        _previousPageViewProperties(dd, Od) {
          const md = this._currentPageview;
          if (!md) return {
            $pageview_id: Od
          };
          let Wd = {
            $pageview_id: Od,
            $prev_pageview_id: md.pageViewId
          };
          const Fd = this._instance.scrollManager.getContext();
          if (Fd && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: dd,
              lastScrollY: Od,
              maxScrollY: md,
              maxContentHeight: Rd,
              lastContentY: Xd,
              maxContentY: Kd
            } = Fd;
            if (!(Um(dd) || Um(Od) || Um(md) || Um(Rd) || Um(Xd) || Um(Kd))) {
              dd = Math.ceil(dd), Od = Math.ceil(Od), md = Math.ceil(md), Rd = Math.ceil(Rd), Xd = Math.ceil(Xd), Kd = Math.ceil(Kd);
              const Fd = dd > 1 ? km(Od / dd, 0, 1, LX) : 1,
                hd = dd > 1 ? km(md / dd, 0, 1, LX) : 1,
                vd = Rd > 1 ? km(Xd / Rd, 0, 1, LX) : 1,
                Qd = Rd > 1 ? km(Kd / Rd, 0, 1, LX) : 1;
              Wd = jX(Wd, {
                $prev_pageview_last_scroll: Od,
                $prev_pageview_last_scroll_percentage: Fd,
                $prev_pageview_max_scroll: md,
                $prev_pageview_max_scroll_percentage: hd,
                $prev_pageview_last_content: Xd,
                $prev_pageview_last_content_percentage: vd,
                $prev_pageview_max_content: Kd,
                $prev_pageview_max_content_percentage: Qd
              })
            }
          }
          return md.pathname && (Wd.$prev_pageview_pathname = md.pathname), md.timestamp && (Wd.$prev_pageview_duration = (dd.getTime() - md.timestamp.getTime()) / 1e3), Wd
        }
      };
    const sh = ["flags", "surveys"],
      uh = {
        [wd]: {
          exposure: "hidden"
        },
        [xd]: {
          exposure: "hidden"
        },
        [Bd]: {
          exposure: "hidden"
        },
        [Ad]: {
          exposure: "hidden"
        },
        [sd]: {
          exposure: "hidden"
        },
        [Vd]: {
          exposure: "hidden"
        },
        [rd]: {
          exposure: "event"
        },
        [Gd]: {
          exposure: "hidden"
        },
        [Dd]: {
          exposure: "hidden"
        },
        [nd]: {
          exposure: "event"
        },
        [Ld]: {
          exposure: "hidden"
        },
        [Pd]: {
          exposure: "event"
        },
        [zd]: {
          exposure: "event"
        },
        [cd]: {
          exposure: "event"
        },
        [jd]: {
          exposure: "hidden"
        },
        [ed]: {
          exposure: "event"
        },
        [Id]: {
          exposure: "hidden"
        },
        [ld]: {
          exposure: "hidden"
        },
        [dO]: {
          exposure: "hidden"
        },
        [OO]: {
          exposure: "event"
        },
        [Cd]: {
          exposure: "event",
          shouldSkipFromEventProperties: dd => Sm(dd)
        },
        [mO]: {
          exposure: "event"
        },
        [WO]: {
          exposure: "event"
        },
        [FO]: {
          exposure: "event"
        },
        [RO]: {
          exposure: "event"
        },
        [XO]: {
          exposure: "hidden"
        },
        [Nd]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Kd]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Xd]: {
          exposure: "hidden"
        },
        [hd]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Td]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [td]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [od]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [pd]: {
          exposure: "hidden"
        },
        [Yd]: {
          exposure: "hidden"
        },
        [Hd]: {
          exposure: "hidden"
        },
        [qd]: {
          exposure: "hidden"
        },
        [hO]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [vO]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [QO]: {
          exposure: "event"
        },
        [tO]: {
          exposure: "hidden"
        },
        [oO]: {
          exposure: "hidden"
        },
        [NO]: {
          exposure: "hidden"
        },
        [qO]: {
          exposure: "hidden"
        },
        [HO]: {
          exposure: "hidden"
        },
        [yO]: {
          exposure: "event"
        },
        [bO]: {
          exposure: "event"
        },
        [TO]: {
          exposure: "event"
        },
        [pO]: {
          exposure: "event"
        },
        [yd]: {
          exposure: "hidden"
        },
        [bd]: {
          exposure: "hidden"
        },
        [KO]: {
          exposure: "event"
        },
        [vd]: {
          exposure: "hidden"
        },
        [Qd]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [YO]: {
          exposure: "hidden"
        },
        [gO]: {
          exposure: "hidden"
        },
        [wO]: {
          exposure: "hidden"
        },
        [aO]: {
          exposure: "hidden"
        },
        [EO]: {
          exposure: "hidden"
        },
        [JO]: {
          exposure: "hidden"
        },
        [UO]: {
          exposure: "hidden"
        },
        [Zd]: {
          exposure: "event"
        },
        [kd]: {
          exposure: "event"
        },
        [fd]: {
          exposure: "event"
        },
        [Md]: {
          exposure: "event"
        },
        [SO]: {
          exposure: "event"
        },
        [sO]: {
          exposure: "event"
        },
        [uO]: {
          exposure: "hidden"
        },
        [VO]: {
          exposure: "hidden"
        },
        [iO]: {
          exposure: "hidden"
        },
        [AO]: {
          exposure: "hidden"
        },
        [rO]: {
          exposure: "hidden"
        },
        [GO]: {
          exposure: "hidden"
        },
        [nO]: {
          exposure: "hidden"
        },
        [LO]: {
          exposure: "hidden"
        },
        [PO]: {
          exposure: "hidden"
        },
        [zO]: {
          exposure: "event"
        }
      },
      Vh = [
        ["$posthog_sr_group_event_trigger_", {
          exposure: "hidden"
        }],
        ["$posthog_sr_group_url_trigger_", {
          exposure: "hidden"
        }],
        ["$posthog_sr_group_sampling_", {
          exposure: "hidden"
        }]
      ],
      ih = dd => {
        const Od = uh[dd];
        if (Od) return Od;
        for (const [md, Wd] of Vh)
          if (0 === dd.indexOf(md)) return Wd
      };

    function Ah() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (Wd) {
        return
      }
    }
    const rh = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (Wd) {
          return !1
        }
      },
      Gh = (dd, Od) => dd >= Od && rh(),
      nh = (dd, Od, md, Wd) => {
        if (0 === dd) {
          if (rh()) {
            const dd = Od + 1;
            return dd === md && Wd(), dd
          }
          return Od
        }
        return 0
      },
      Lh = (dd, Od) => {
        try {
          let md;
          return JSON.stringify(dd, ((dd, Od) => {
            var Wd;
            return Lm(Od) ? (null !== (Wd = md) && void 0 !== Wd || (md = new WeakMap), md.has(Od) || md.set(Od, lX(Od)), md.get(Od)) : "bigint" == typeof Od ? Od.toString() : Od
          }), Od)
        } catch (Od) {
          return Tm(dd)
        }
      },
      Ph = dd => {
        const Od = null == Om ? void 0 : Om.createElement("a");
        return Um(Od) ? null : (Od.href = dd, Od)
      },
      zh = function(dd, Od) {
        const md = ((dd.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let Wd;
        for (let Fd = 0; md.length > Fd; Fd++) {
          const dd = md[Fd].split("=");
          if (dd[0] === Od) {
            Wd = dd;
            break
          }
        }
        if (!wm(Wd) || 2 > Wd.length) return "";
        {
          let dd = Wd[1];
          try {
            dd = decodeURIComponent(dd)
          } catch (Od) {
            LX.error("Skipping decoding for malformed query param: " + dd)
          }
          return dd.replace(/\+/g, " ")
        }
      },
      ch = function(dd, Od, md) {
        if (!dd || !Od || !Od.length) return dd;
        const Wd = dd.split("#"),
          Fd = Wd[1],
          Rd = (Wd[0] || "").split("?"),
          Xd = Rd[1],
          Kd = Rd[0],
          hd = (Xd || "").split("&"),
          vd = [];
        for (let td = 0; hd.length > td; td++) {
          const dd = hd[td].split("=");
          wm(dd) && (Od.includes(dd[0]) ? vd.push(dd[0] + "=" + md) : vd.push(hd[td]))
        }
        let Qd = Kd;
        return null != Xd && (Qd += "?" + vd.join("&")), null != Fd && (Qd += "#" + Fd), Qd
      },
      jh = function(dd, Od) {
        const md = dd.match(new RegExp(Od + "=([^&]*)"));
        return md ? md[1] : null
      },
      Dh = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      eh = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Dh],
      Ih = "<masked>",
      lh = ["li_fat_id"];

    function Ch(dd, Od, md) {
      if (!Om) return {};
      const Wd = Od ? [...Dh, ...md || []] : [],
        Fd = Zh(ch(Om.URL, Wd, Ih), dd),
        Rd = function() {
          const dd = {};
          return cX(lh, (function(Od) {
            const md = MX(Od);
            dd[Od] = md || null
          })), dd
        }();
      return jX(Rd, Fd)
    }

    function Zh(dd, Od) {
      const md = eh.concat(Od || []),
        Wd = {};
      return cX(md, (function(Od) {
        const md = zh(dd, Od);
        Wd[Od] = md || null
      })), Wd
    }

    function kh(dd) {
      const Od = function(dd) {
          return dd ? 0 === dd.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === dd.search("https?://(.*)bing.com") ? "bing" : 0 === dd.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === dd.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(dd),
        md = "yahoo" != Od ? "q" : "p",
        Wd = {};
      if (!Sm(Od)) {
        Wd.$search_engine = Od;
        const dd = Om ? zh(Om.referrer, md) : "";
        dd.length && (Wd.ph_keyword = dd)
      }
      return Wd
    }

    function fh() {
      return navigator.language || navigator.userLanguage
    }

    function Mh() {
      const dd = fh();
      return "string" == typeof dd ? dd.split("-")[0] : void 0
    }
    const dv = "$direct";

    function Ov() {
      return (null == Om ? void 0 : Om.referrer) || dv
    }

    function mv(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Wd = dd ? [...Dh, ...Od || []] : [],
        Fd = md ? NF(null == mm ? void 0 : mm.href) : null == mm ? void 0 : mm.href,
        Rd = null == Fd ? void 0 : Fd.substring(0, 1e3);
      return {
        r: Ov().substring(0, 1e3),
        u: Rd ? ch(Rd, Wd, Ih) : void 0
      }
    }

    function Wv(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var md;
      const {
        r: Wd,
        u: Fd
      } = dd, Rd = Od ? NF(Fd) : Fd, Xd = {
        $referrer: Wd,
        $referring_domain: null == Wd ? void 0 : Wd == dv ? dv : null === (md = Ph(Wd)) || void 0 === md ? void 0 : md.host
      };
      if (Rd) {
        Xd.$current_url = Rd;
        const dd = Ph(Rd);
        Xd.$host = null == dd ? void 0 : dd.host, Xd.$pathname = null == dd ? void 0 : dd.pathname;
        const Od = Zh(Rd);
        jX(Xd, Od)
      }
      if (Wd) {
        const dd = kh(Wd);
        jX(Xd, dd)
      }
      return Xd
    }

    function Fv() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (Wd) {
        return
      }
    }
    const Rv = {
        flags: Qd,
        surveys: vO
      },
      Xv = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      Kv = dd => `${dd}_cookie_identity_change_pending`,
      hv = dd => {
        let Od = "",
          md = 0;
        for (const Wd of dd) {
          const dd = encodeURIComponent(JSON.stringify(Wd).slice(1, -1)).length;
          if (md + dd > 1e3) break;
          Od += Wd, md += dd
        }
        return Od
      },
      vv = "main",
      Qv = [Nd, Kd, hd, Td, td, Qd, od, Hd],
      tv = dd => -1 !== Qv.indexOf(dd),
      ov = [sd, Vd],
      Nv = dd => -1 !== ov.indexOf(dd),
      qv = (dd, Od) => {
        try {
          return JSON.stringify(dd) === JSON.stringify(Od)
        } catch (Rd) {
          return dd === Od
        }
      },
      Hv = dd => {
        if (!dd) return {};
        const Od = JSON.parse(dd);
        return Em(Od) ? Od : {}
      },
      yv = (dd, Od) => {
        cX(dd, ((md, Wd) => {
          const Fd = ih(Wd);
          Fd && "event" !== Fd.exposure || {}.hasOwnProperty.call(Od, Wd) || delete dd[Wd]
        }))
      };
    var bv = class {
      constructor(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !dd.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = dd, this._ownsSplitStorage = md, this.props = {}, this._campaign_params_url = void 0, this._name = (dd => {
            let Od = "";
            return dd.token && (Od = dd.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), dd.persistence_name ? "ph_" + dd.persistence_name : "ph_" + Od + "_posthog"
          })(dd), this._disabled = dd.disable_persistence || !!Od, this.sH = this._buildStorage(dd), this._splitStorage = this._resolveSplitStorage(dd), this.load(Wd), this._markLoadedCrossTabFeatureFlagChangesPending(), dd.debug && LX.info("Persistence loaded", dd.persistence, gF({}, this.props)), this.update_config(dd, dd, Od), this.save(), fO) {
          const dd = () => this.flush();
          kX(fO, "beforeunload", dd, {
            capture: !1
          }), kX(fO, "pagehide", dd, {
            capture: !1
          }), this._onStorage = dd => {
            if (this._splitStorageEligible && (!dd.storageArea || dd.storageArea === (null == fO ? void 0 : fO.localStorage)) && dd.key)
              if (dd.key !== this._name) {
                if (this._splitStorage) {
                  const Od = sh.find((Od => dd.key === this._groupEntryName(Od)));
                  Od && this._syncCrossTabFeatureFlagProperties(dd.key, Od)
                }
              } else this._syncCrossTabFeatureFlagProperties(dd.key, vv)
          }, kX(fO, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(dd) {
        Object.entries(dd).forEach((dd => {
          let [Od, md] = dd;
          const Wd = this._pendingCrossTabFeatureFlagChanges.get(Od);
          if (!tv(Od) || !0 === Wd) return;
          if (!0 === md) return void this._setCrossTabFeatureFlagChangesPending(Od, !0);
          const Fd = new Set(Wd || []);
          md.forEach((dd => Fd.add(dd))), Fd.size && this._setCrossTabFeatureFlagChangesPending(Od, Fd)
        }))
      }
      onCrossTabFeatureFlagChange(dd) {
        return this._crossTabFeatureFlagHandlers.add(dd), () => this._crossTabFeatureFlagHandlers.delete(dd)
      }
      destroy() {
        this._onStorage && fO && (fO.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(dd, Od) {
        let md, Wd, Fd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (Wd = oK._get(dd), Sm(Wd)) {
            const dd = this._slotWriteState(Od);
            return dd.storageValue = null, Od !== vv && (dd.persisted = !1), !1
          }
          md = Hv(Wd)
        } catch (dd) {
          return !1
        }
        const Rd = Od === vv ? md : oK._parse(this._name);
        if (Rd && this._hasCrossTabFeatureFlagIdentityMismatch(Rd)) return !1;
        const Xd = this._mergeCrossTabFeatureFlagProperties(md, Od, Fd);
        return Od === vv && this._splitStorage && !qv(this._partitionProps().main, md) || this._rememberCrossTabStorageFingerprint(md, Od, !0, Wd), Xd
      }
      _hasCrossTabFeatureFlagIdentityMismatch(dd) {
        const Od = this.props[Ed],
          md = dd[Ed];
        return !Um(Od) && !Um(md) && Od !== md
      }
      _rememberCrossTabStorageFingerprint(dd, Od, md, Wd) {
        const Fd = this._slotWriteState(Od);
        Fd.storageValue = Wd, Od !== vv && (Fd.persisted = md);
        try {
          Fd.fingerprint = this._entryFingerprint(dd, Od)
        } catch (dd) {
          Fd.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(dd, Od, md) {
        let Wd = !1;
        return Qv.forEach((md => {
          var Fd;
          const Rd = null === (Fd = ih(md)) || void 0 === Fd ? void 0 : Fd.storageGroup;
          if (Od === vv && this._splitStorage && Rd || Od !== vv && Rd !== Od) return;
          const Xd = md in dd,
            Kd = this._mergePendingCrossTabFeatureFlagChanges(md, Xd ? dd[md] : void 0),
            hd = this._pendingCrossTabFeatureFlagChanges.has(md) ? md in this.props : Xd;
          hd === md in this.props && qv(Kd, this.props[md]) || (hd ? this._setProp(md, Kd, !1) : this._deleteProp(md, !1), Wd = !0)
        })), Wd && md && this._crossTabFeatureFlagHandlers.forEach((dd => dd())), Wd
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const dd = oK._get(this._name),
            Od = this._slotWriteState(vv);
          let md, Wd = !1,
            Fd = !1;
          if (dd !== Od.storageValue)
            if (Sm(dd)) Od.storageValue = null;
            else {
              if (md = Hv(dd), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(md), this._crossTabFeatureFlagIdentityMismatch) return !1;
              Fd = this._mergeCrossTabFeatureFlagProperties(md, vv, !1), !this._splitStorage || qv(this._partitionProps().main, md) ? this._rememberCrossTabStorageFingerprint(md, vv, !0, dd) : Od.storageValue = dd, Wd = !0
            } return this._splitStorage && sh.forEach((dd => {
            const Od = oK._get(this._groupEntryName(dd)),
              Rd = this._slotWriteState(dd),
              Xd = md || {},
              Kd = Wd && Qv.some((Od => {
                var md;
                return (null === (md = ih(Od)) || void 0 === md ? void 0 : md.storageGroup) === dd && Od in Xd
              }));
            if (Od === Rd.storageValue && !Kd) return;
            if (Sm(Od)) return Rd.storageValue = null, Rd.persisted = !1, void(Kd && (Fd = this._mergeCrossTabFeatureFlagProperties(Xd, dd, !1) || Fd));
            const hd = Hv(Od);
            Fd = this._mergeCrossTabFeatureFlagProperties(hd, dd, !1) || Fd, this._rememberCrossTabStorageFingerprint(hd, dd, !0, Od)
          })), Fd
        } catch (Wd) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(dd, Od) {
        this._pendingCrossTabFeatureFlagChanges.set(dd, Od);
        const md = ih(dd);
        (null == md ? void 0 : md.volatile) || (this._slotWriteState((this._splitStorage ? null == md ? void 0 : md.storageGroup : void 0) || vv).fingerprint = void 0, this._markGroupDirty(dd))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        Qv.forEach((dd => this._pendingCrossTabFeatureFlagChanges.set(dd, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const dd = oK._get(this._name),
            Od = Hv(dd);
          this._slotWriteState(vv).storageValue = dd, Qv.forEach((dd => {
            var md;
            const Wd = this._splitStorage ? null === (md = ih(dd)) || void 0 === md ? void 0 : md.storageGroup : void 0,
              Fd = Wd ? oK._get(this._groupEntryName(Wd)) : null;
            if (Wd) {
              const dd = this._slotWriteState(Wd);
              dd.storageValue = Fd, dd.persisted = !Sm(Fd)
            }
            const Rd = Wd && !Sm(Fd) ? Hv(Fd) : Od;
            dd in this.props ? this._markPendingCrossTabFeatureFlagChanges(dd, Rd[dd], this.props[dd]) : dd in Rd && this._setCrossTabFeatureFlagChangesPending(dd, !0)
          }))
        } catch (Wd) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(dd, Od) {
        const md = this._pendingCrossTabFeatureFlagChanges.get(dd);
        if (!md) return Od;
        if (!0 === md) return this.props[dd];
        if ("$active_feature_flags" === dd) {
          const Wd = new Set(wm(Od) ? Od : []),
            Fd = new Set(wm(this.props[dd]) ? this.props[dd] : []);
          return md.forEach((dd => Fd.has(dd) ? Wd.add(dd) : Wd.delete(dd))), Array.from(Wd)
        }
        const Wd = Em(Od) ? gF({}, Od) : {},
          Fd = Em(this.props[dd]) ? this.props[dd] : {};
        return md.forEach((dd => {
          dd in Fd ? Wd[dd] = Fd[dd] : delete Wd[dd]
        })), Wd
      }
      _markPendingCrossTabFeatureFlagChanges(dd, Od, md) {
        if (!tv(dd)) return;
        const Wd = this._pendingCrossTabFeatureFlagChanges.get(dd);
        if (!0 === Wd) return;
        let Fd = Od;
        if (this._splitStorageEligible) try {
          var Rd;
          const Od = this._splitStorage ? null === (Rd = ih(dd)) || void 0 === Rd ? void 0 : Rd.storageGroup : void 0,
            md = Od ? this._groupEntryName(Od) : this._name;
          Fd = Hv(oK._get(md))[dd]
        } catch (dd) {}
        const Xd = new Set(Wd || []);
        if ("$active_feature_flags" === dd) {
          if (!Um(Od) && !wm(Od) || !Um(Fd) && !wm(Fd) || !wm(md)) return void this._setCrossTabFeatureFlagChangesPending(dd, !0);
          const Wd = new Set(Od || []),
            Rd = new Set(Fd || []),
            Kd = new Set(md);
          new Set([...Wd, ...Kd]).forEach((dd => {
            Wd.has(dd) !== Kd.has(dd) && Xd.add(dd)
          })), Xd.forEach((dd => {
            Rd.has(dd) === Kd.has(dd) && Xd.delete(dd)
          }))
        } else {
          if (!Em(md)) return void(qv(Fd, md) ? this._pendingCrossTabFeatureFlagChanges.delete(dd) : this._setCrossTabFeatureFlagChangesPending(dd, !0));
          {
            if (!Um(Od) && !Em(Od) || Um(Od) && Jm(md) && Um(Fd)) return void this._setCrossTabFeatureFlagChangesPending(dd, !0);
            const Wd = Em(Od) ? Od : {},
              Rd = Em(Fd) ? Fd : {};
            new Set([...Object.keys(Wd), ...Object.keys(md)]).forEach((dd => {
              dd in Wd == dd in md && qv(Wd[dd], md[dd]) || Xd.add(dd)
            })), Xd.forEach((dd => {
              dd in Rd == dd in md && qv(Rd[dd], md[dd]) && Xd.delete(dd)
            }))
          }
        }
        Xd.size ? this._setCrossTabFeatureFlagChangesPending(dd, Xd) : this._pendingCrossTabFeatureFlagChanges.delete(dd)
      }
      _saveDebounceMs() {
        var dd;
        const Od = null === (dd = this._config) || void 0 === dd ? void 0 : dd.persistence_save_debounce_ms;
        return um(Od) && Od > 0 ? Od : 0
      }
      _rememberCurrentCookieProperties(dd) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (dd) try {
            const Od = TK(dd, this._config.cookie_persisted_properties || []),
              md = YK(Od, this._config.cookie_persisted_properties || []),
              Wd = JSON.stringify(Od) + "|" + JSON.stringify(md),
              Fd = QK._get(this._name) || void 0;
            Fd && wK(this._name, Fd) === Wd && (this._lastSeenCookiePropertiesFingerprint = Wd, this._lastSeenMainCookieValue = Fd)
          } catch (dd) {} else try {
            const dd = QK._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = dd ? wK(this._name, dd) : void 0, this._lastSeenMainCookieValue = dd
          } catch (dd) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(dd) {
        let Od, md = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !md || this._cookieSyncSuppressed || !dd.cookieWinsOnConflict || "localstorage+cookie" !== dd.persistence.toLowerCase()) return !1;
        try {
          Od = QK._get(this._name) || void 0
        } catch (dd) {}
        if (!Od || Od === this._lastSeenMainCookieValue) return !1;
        const Wd = wK(this._name, Od);
        let Fd;
        try {
          Fd = bK(JSON.parse(Od))
        } catch (dd) {
          return !1
        }
        if ((QK._get(this._name) || void 0) !== Od) return !1;
        this._lastSeenCookiePropertiesFingerprint = Wd, this._lastSeenMainCookieValue = Od;
        const Rd = gK(this._name, Od),
          Xd = [...qK, ...Rd.properties],
          od = {};
        if (Object.keys(Fd).forEach((dd => {
            const Od = Fd[dd];
            (Um(Od) || Sm(Od) || "" === Od || "$user_state" === dd && "anonymous" !== Od && "identified" !== Od) && (od[dd] = !0, delete Fd[dd])
          })), Jm(Fd)) return !1;
        const bd = "distinct_id" in Fd || "anonymous" === Fd.$user_state || "identified" === Fd.$user_state,
          pd = this.props,
          Yd = pd[Ed],
          gd = pd[YO],
          wd = jX({}, pd);
        [...qK, ...dd.cookie_persisted_properties || []].forEach((dd => {
          if (-1 !== Xd.indexOf(dd) && !(dd in Fd) && !od[dd] && (bd || "distinct_id" !== dd && "$user_state" !== dd)) {
            const Od = wd[dd];
            (Rd.isValid || -1 === qK.indexOf(dd) || !1 !== Od && 0 !== Od) && delete wd[dd]
          }
        })), this.props = jX(wd, Fd), Qv.forEach((dd => {
          const Od = dd in this.props;
          dd in pd === Od && qv(pd[dd], this.props[dd]) || (Od ? this._markPendingCrossTabFeatureFlagChanges(dd, pd[dd], this.props[dd]) : this._setCrossTabFeatureFlagChangesPending(dd, !0))
        })), !bd || "$user_state" in Fd || "$user_state" in this.props || this._setProp(YO, jO);
        const Jd = this.props[Ed],
          Ud = this.props[YO];
        return !bd || Jd === Yd && Ud === gd || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, UK._set(Kv(this._name), !0), this._deleteProp(Hd), this._deleteProp(Kd), this._deleteProp(Nd), this._deleteProp(hd), this._deleteProp(Td), this._deleteProp(td), this._deleteProp(Qd), this._deleteProp(vd), this._deleteProp(yd), "anonymous" !== Ud || "identified" !== gd && "anonymous" !== Fd.$user_state && (Um(Yd) || Jd === Yd) || (yv(this.props, Fd), this._deleteProp(qd)), "identified" === Ud ? this.props.$user_id = Jd : delete this.props.$user_id, this._deleteProp(xd)), !0
      }
      consumeCookieIdentityChange() {
        const dd = Kv(this._name),
          Od = this._cookieIdentityChangePending || !!UK._get(dd);
        return this._cookieIdentityChangePending = !1, Od && UK._remove(dd), Od
      }
      _beginCookieSyncSuppression() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !dd || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (Um(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[vv], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          dd ? this._publishSuppressedCookieSnapshot() : Um(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(dd) {
        -1 === Xv.indexOf(dd.persistence.toLowerCase()) && (LX.critical("Unknown persistence type " + dd.persistence + "; falling back to localStorage+cookie"), dd.persistence = "localStorage+cookie");
        const Od = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const Wd = [...qK, ...dd];
          return gF(gF({}, oK), {}, {
            _parse(dd) {
              try {
                let Rd, Xd = {};
                try {
                  Rd = QK._get(dd) || void 0, Xd = Rd ? bK(JSON.parse(Rd)) : {}
                } catch (dd) {}
                const Kd = JSON.parse(oK._get(dd) || "{}");
                let hd;
                if (Od) {
                  const Od = gK(dd, Rd),
                    md = [...qK, ...Od.properties],
                    vd = {};
                  Object.keys(Xd).forEach((dd => {
                    const Od = Xd[dd];
                    Sm(Od) || "" === Od || "$user_state" === dd && "anonymous" !== Od && "identified" !== Od || (vd[dd] = Od)
                  }));
                  const Qd = "distinct_id" in vd || "anonymous" === vd.$user_state || "identified" === vd.$user_state;
                  if (Object.keys(vd).length > 0) {
                    var Fd;
                    const dd = Kd[Ed],
                      Rd = null !== (Fd = Kd.$user_state) && void 0 !== Fd ? Fd : jO;
                    Wd.forEach((dd => {
                      if (-1 !== md.indexOf(dd) && !(dd in Xd) && (Qd || "distinct_id" !== dd && "$user_state" !== dd)) {
                        const md = Kd[dd];
                        (Od.isValid || -1 === qK.indexOf(dd) || !1 !== md && 0 !== md) && delete Kd[dd]
                      }
                    })), !Qd || "$user_state" in Xd || "$user_state" in Kd || (Kd[YO] = jO), !Qd || ("distinct_id" in vd ? vd[Ed] : Kd[Ed]) === dd && ("$user_state" in vd ? vd[YO] : Kd[YO]) === Rd || (NK.forEach((dd => delete Kd[dd])), "identified" === vd.$user_state && "distinct_id" in vd ? Kd.$user_id = vd[Ed] : delete Kd.$user_id, "identified" !== vd.$user_state && (delete Kd[KO], delete Kd[qd]), delete Kd.__alias)
                  }
                  hd = jX(Kd, vd)
                } else hd = jX(Xd, Kd);
                return md() || oK._set(dd, hd), hd
              } catch (dd) {}
              return null
            },
            _set(md, Wd, Fd, Rd, Xd, Kd) {
              const hd = oK._set(md, Wd, void 0, void 0, Kd);
              try {
                const vd = TK(Wd, dd);
                if (Object.keys(vd).length) {
                  if (Od) {
                    const Od = HK(md),
                      Qd = YK(vd, dd);
                    if (QK._set(Od, Qd, Fd, Rd, Xd, Kd), QK._get(Od) !== JSON.stringify(Qd)) {
                      QK._remove(Od, Rd);
                      const dd = TK(Wd);
                      return QK._set(md, dd, Fd, Rd, Xd, Kd), hd
                    }
                  }
                  QK._set(md, vd, Fd, Rd, Xd, Kd)
                }
              } catch (dd) {
                oK._error(dd)
              }
              return hd
            },
            _remove(dd, Od) {
              try {
                null == fO || fO.localStorage.removeItem(dd), QK._remove(dd, Od), QK._remove(HK(dd), Od)
              } catch (dd) {
                oK._error(dd)
              }
            }
          })
        }(dd.cookie_persisted_properties || [], dd.cookieWinsOnConflict, (() => !!this._disabled));
        let md, Wd = !1,
          Fd = !1;
        const Rd = dd.persistence.toLowerCase();
        return "localstorage" === Rd && oK._is_supported() ? (md = oK, Fd = !0) : "localstorage+cookie" === Rd && Od._is_supported() ? (md = Od, Fd = !0, Wd = !0) : "sessionstorage" === Rd && UK._is_supported() ? md = UK : "memory" === Rd ? md = EK : "cookie" === Rd && QK._is_supported() ? (md = QK, Wd = !0) : Od._is_supported() ? (md = Od, Fd = !0, Wd = !0) : QK._is_supported() ? (md = QK, Wd = !0) : md = EK, this._splitStorageEligible = Fd, this._storesIdentityInCookie = Wd, md
      }
      _groupEntryName(dd) {
        return `${this._name}__${dd}`
      }
      _resolveSplitStorage(dd) {
        return this._splitStorageEligible && !!dd.split_storage
      }
      properties() {
        const dd = {};
        return cX(this.props, ((Od, md) => {
          const Wd = ih(md);
          if (!Wd || "event" === Wd.exposure) {
            var Fd;
            if (null == Wd || null === (Fd = Wd.shouldSkipFromEventProperties) || void 0 === Fd ? void 0 : Fd.call(Wd, Od)) return;
            dd[md] = Od
          }
        })), dd
      }
      load() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !dd) return;
        const Od = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          md = Od ? oK._parse(this._name) : null;
        let Wd = {};
        if (Od) try {
          Wd = bK(QK._parse(this._name)), cX(Wd, ((dd, Od) => {
            (Um(dd) || Sm(dd) || "" === dd) && delete Wd[Od]
          }))
        } catch (dd) {}
        const Fd = this.sH._parse(this._name);
        if (Fd && (this.props = jX({}, Fd)), this._splitStorage && this._loadGroupEntries(), Od && Fd) {
          var Rd, Xd;
          const dd = null == md ? void 0 : md[Ed],
            Od = null !== (Rd = null == md ? void 0 : md.$user_state) && void 0 !== Rd ? Rd : jO,
            Kd = Fd[Ed],
            hd = null !== (Xd = Fd.$user_state) && void 0 !== Xd ? Xd : jO;
          if (Kd !== dd || hd !== Od) {
            this._cookieIdentityChangePending = !0, this._disabled || UK._set(Kv(this._name), !0);
            const md = jX({}, this.props);
            NK.forEach((dd => delete md[dd])), "anonymous" !== hd || "identified" !== Od && "anonymous" !== Wd.$user_state && (Um(dd) || Kd === dd) || (yv(md, Wd), delete md[qd]), this.props = md;
            const Fd = new Set;
            NK.forEach((dd => {
              var Od;
              const md = null === (Od = ih(dd)) || void 0 === Od ? void 0 : Od.storageGroup;
              md && Fd.add(md)
            })), Fd.forEach((dd => {
              if (this._disabled) return;
              const Od = {};
              cX(this.props, ((md, Wd) => {
                var Fd;
                (null === (Fd = ih(Wd)) || void 0 === Fd ? void 0 : Fd.storageGroup) === dd && (Od[Wd] = md)
              })), Jm(Od) ? (oK._remove(this._groupEntryName(dd)), this._slotState[dd] = {}) : oK._set(this._groupEntryName(dd), Od) && (this._slotState[dd] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(Od, dd)
              })
            }))
          }
        }
        UK._get(Kv(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const dd of sh) {
          const Od = oK._parse(this._groupEntryName(dd));
          if (Od && !Jm(Od)) {
            const md = this._slotWriteState(dd);
            md.persisted = !0, this._mainCarriesGroupKey(dd) || (md.fingerprint = this._entryFingerprint(Od, dd)), this._groupEntryIsStale(dd, Od) || jX(this.props, Od)
          }
        }
      }
      _mainCarriesGroupKey(dd) {
        return Object.keys(this.props).some((Od => {
          var md;
          return (null === (md = ih(Od)) || void 0 === md ? void 0 : md.storageGroup) === dd
        }))
      }
      _groupEntryIsStale(dd, Od) {
        const md = Rv[dd];
        if (!md) return !1;
        const Wd = Od[md],
          Fd = this.props[md];
        return um(Wd) && um(Fd) && Fd > Wd
      }
      refreshKey(dd) {
        var Od;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(dd)) return;
        const md = this._splitStorage ? null === (Od = ih(dd)) || void 0 === Od ? void 0 : Od.storageGroup : void 0,
          Wd = md ? oK._parse(this._groupEntryName(md)) : this.sH._parse(this._name);
        if (Wd && dd in Wd) this._setProp(dd, Wd[dd], !1);
        else {
          if (md) {
            const Od = this.sH._parse(this._name);
            if (Od && dd in Od) return void this._setProp(dd, Od[dd], !1)
          }
          this._deleteProp(dd, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const dd = this._saveDebounceMs();
        dd > 0 ? Um(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), dd)) : this._writeNow()
      }
      flush() {
        Um(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !dd) return;
        dd || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || ov.forEach((dd => this.refreshKey(dd))));
        const Od = !dd && !this._storageMigrationInProgress;
        Od || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const md = !!Od && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && LX.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(md && this._crossTabFeatureFlagHandlers.forEach((dd => dd())));
        const Wd = this._writeEntry(this.sH, this._name, this.props, vv);
        "written" === Wd && this._rememberCurrentCookieProperties(this.props), "failed" !== Wd && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), md && this._crossTabFeatureFlagHandlers.forEach((dd => dd()))
      }
      _writeNowSplit() {
        const {
          main: dd,
          groups: Od
        } = this._partitionProps(), md = this._writeEntry(this.sH, this._name, dd, vv);
        "written" === md && this._rememberCurrentCookieProperties(dd), "failed" !== md && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), Qv.forEach((dd => {
          var Od;
          (null === (Od = ih(dd)) || void 0 === Od ? void 0 : Od.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(dd)
        })));
        for (const Fd of sh) {
          var Wd;
          const dd = Od[Fd];
          if (Jm(dd) && !(null === (Wd = this._slotState[Fd]) || void 0 === Wd ? void 0 : Wd.persisted)) {
            Qv.forEach((dd => {
              var Od;
              (null === (Od = ih(dd)) || void 0 === Od ? void 0 : Od.storageGroup) === Fd && this._pendingCrossTabFeatureFlagChanges.delete(dd)
            }));
            continue
          }
          const md = this._writeEntry(oK, this._groupEntryName(Fd), dd, Fd);
          "failed" !== md && Qv.forEach((dd => {
            const Od = ih(dd);
            (null == Od ? void 0 : Od.storageGroup) !== Fd || "written" !== md && Od.volatile || this._pendingCrossTabFeatureFlagChanges.delete(dd)
          }))
        }
      }
      _partitionProps() {
        const dd = {},
          Od = {
            flags: {},
            surveys: {}
          };
        return cX(this.props, ((md, Wd) => {
          var Fd;
          const Rd = null === (Fd = ih(Wd)) || void 0 === Fd ? void 0 : Fd.storageGroup;
          Rd ? Od[Rd][Wd] = md : dd[Wd] = md
        })), {
          main: dd,
          groups: Od
        }
      }
      _entryFingerprint(dd, Od) {
        if (Od === vv) return JSON.stringify(dd) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const md = {};
        return cX(dd, ((dd, Od) => {
          var Wd;
          md[Od] = (null === (Wd = ih(Od)) || void 0 === Wd ? void 0 : Wd.volatile) ? "__volatile__" : dd
        })), JSON.stringify(md)
      }
      _writeEntry(dd, Od, md, Wd) {
        const Fd = this._slotWriteState(Wd);
        if (Wd !== vv && !Fd.dH && !Um(Fd.fingerprint)) return "skipped";
        let Rd;
        try {
          if (Rd = this._entryFingerprint(md, Wd), Rd === Fd.fingerprint) return Fd.dH = !1, "skipped"
        } catch (dd) {
          Rd = void 0
        }
        return dd._set(Od, md, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (Fd.dH = !1, Wd !== vv && (Fd.persisted = !0), Um(Rd) || (Fd.fingerprint = Rd), this._splitStorageEligible && (Fd.storageValue = oK._get(Od)), "written") : (this._config.debug && LX.warn(`failed to persist storage entry "${Od}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: dd = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), Um(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.sH._remove(this._name, !1), this.sH._remove(this._name, !0), !dd && this._ownsSplitStorage)
          for (const Od of sh) oK._remove(this._groupEntryName(Od));
        dd ? delete this._slotState[vv] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(dd, Od, md) {
        if (Em(dd)) {
          this.syncCookieProperties(), Um(Od) && (Od = "None"), this._expire_days = Um(md) ? this._default_expiry : md;
          let Wd = !1;
          if (cX(dd, ((dd, md) => {
              this.props.hasOwnProperty(md) && this.props[md] !== Od || (this._setProp(md, dd), Wd = !0)
            })), Wd) return this.save(), !0
        }
        return !1
      }
      register(dd, Od) {
        if (Em(dd)) {
          this.syncCookieProperties(), this._expire_days = Um(Od) ? this._default_expiry : Od;
          let md = !1;
          if (cX(dd, ((Od, Wd) => {
              dd.hasOwnProperty(Wd) && (this.props[Wd] !== Od || Em(Od) || wm(Od)) && (this._setProp(Wd, Od), md = !0)
            })), md) return this.save(), !0
        }
        return !1
      }
      unregister(dd) {
        this.syncCookieProperties();
        const Od = "string" == typeof dd ? [dd] : dd;
        let md = !1;
        for (const Wd of Od) Wd in this.props && (this._deleteProp(Wd), md = !0);
        md && this.save()
      }
      update_campaign_params() {
        const dd = null == Om ? void 0 : Om.URL;
        if (dd === this._campaign_params_url) return;
        const Od = Ch(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          md = !Jm(IX(Od));
        return md && this.register(Od), this._campaign_params_url = dd, md ? Od : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const dd = null == Om ? void 0 : Om.referrer;
          return dd ? kh(dd) : {}
        }())
      }
      update_referrer_info() {
        var dd;
        this.register_once({
          $referrer: Ov(),
          $referring_domain: (null == Om ? void 0 : Om.referrer) && (null === (dd = Ph(Om.referrer)) || void 0 === dd ? void 0 : dd.host) || dv
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const dd = mv(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [JO]: this._storesIdentityInCookie ? {
            r: hv(dd.r),
            u: dd.u ? hv(dd.u) : void 0
          } : dd
        }, void 0)
      }
      get_initial_props() {
        const dd = {};
        cX([EO, aO], (Od => {
          const md = this.props[Od];
          md && cX(md, (function(Od, md) {
            dd["$initial_" + bm(md)] = Od
          }))
        }));
        const Od = this.props[JO];
        if (Od) {
          const md = function(dd) {
            const Od = Wv(dd, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              md = {};
            return cX(Od, (function(dd, Od) {
              md[`$initial_${bm(Od)}`] = dd
            })), md
          }(Od, this._config.disable_capture_url_hashes);
          jX(dd, md)
        }
        return dd
      }
      safe_merge(dd) {
        return cX(this.props, (function(Od, md) {
          md in dd || (dd[md] = Od)
        })), dd
      }
      update_config(dd, Od, md) {
        const Wd = dd.persistence !== Od.persistence,
          Fd = !((dd, Od) => {
            if (dd.length !== Od.length) return !1;
            const md = [...dd].sort(),
              Wd = [...Od].sort();
            return md.every(((dd, Od) => dd === Wd[Od]))
          })(dd.cookie_persisted_properties || [], Od.cookie_persisted_properties || []),
          Rd = Wd || Fd,
          Xd = dd.cookieWinsOnConflict !== Od.cookieWinsOnConflict,
          Kd = dd.disable_persistence || !!md,
          hd = !!this._disabled && !Kd;
        Kd || this._syncCookieProperties(Od, hd), this._config = dd, !Kd && (Wd || Fd || Xd) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(gF(gF({}, dd), {}, {
          cookie_persisted_properties: Od.cookie_persisted_properties
        }), hd));
        const vd = Rd || Xd ? this._buildStorage(dd) : this.sH;
        this._truncateExistingPersonInfoForCookie();
        const Qd = this._resolveSplitStorage(dd),
          td = Rd || Qd !== this._splitStorage,
          od = !Kd && (td || dd.cross_subdomain_cookie !== this._cross_subdomain || dd.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(hd);
        this._storageMigrationInProgress = td;
        try {
          if (this._default_expiry = this._expire_days = dd.cookie_expiration, this.set_disabled(Kd), this.set_cross_subdomain(dd.cross_subdomain_cookie), this.set_secure(dd.secure_cookie), td) {
            const dd = this.props;
            this.clear(), this.sH = vd, this._splitStorage = Qd, this.props = dd, this.save()
          } else Xd && (this.sH = vd, Kd || (delete this._slotState[vv], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, od && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const dd = this.props[JO];
        if (!this._storesIdentityInCookie || !Em(dd) || "string" != typeof dd.r) return;
        const Od = hv(dd.r),
          md = "string" == typeof dd.u ? hv(dd.u) : dd.u;
        Od === dd.r && md === dd.u || this._setProp(JO, gF(gF({}, dd), {}, {
          r: Od,
          u: md
        }))
      }
      set_disabled(dd) {
        this._disabled = dd, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(dd) {
        dd !== this._cross_subdomain && (this._cross_subdomain = dd, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(dd) {
        dd !== this._secure && (this._secure = dd, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(dd, Od) {
        const md = this.props.__timers || {};
        md[dd] = Od, this._setProp(Ad, md), this.save()
      }
      remove_event_timer(dd) {
        const Od = this.props.__timers || {},
          md = Od[dd];
        return Um(md) || (delete Od[dd], this._setProp(Ad, Od), this.save()), md
      }
      get_property(dd) {
        return this.props[dd]
      }
      set_property(dd, Od) {
        this._setProp(dd, Od), this.save()
      }
      _setProp(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var Wd;
        const Fd = this.props[dd];
        this.props[dd] = Od, md && ("distinct_id" !== dd && "$user_state" !== dd || Fd === Od || (this._localIdentityChangePending = !0), Nv(dd) && !qv(Fd, Od) && this._metaIdentifierChangePending.add(dd), this._markPendingCrossTabFeatureFlagChanges(dd, Fd, Od), (null === (Wd = ih(dd)) || void 0 === Wd ? void 0 : Wd.volatile) || this._markGroupDirty(dd))
      }
      _deleteProp(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[dd], Od && (tv(dd) && this._setCrossTabFeatureFlagChangesPending(dd, !0), Nv(dd) && this._metaIdentifierChangePending.add(dd), this._markGroupDirty(dd))
      }
      _markGroupDirty(dd) {
        var Od;
        const md = null === (Od = ih(dd)) || void 0 === Od ? void 0 : Od.storageGroup;
        md && (this._slotWriteState(md).dH = !0)
      }
      _slotWriteState(dd) {
        return this._slotState[dd] || (this._slotState[dd] = {})
      }
    };
    const Tv = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      pv = "events",
      Yv = "cancelEvents",
      gv = "popover",
      wv = "api",
      av = "widget",
      Ev = "survey shown",
      Jv = "survey dismissed",
      Uv = "survey sent",
      xv = "$survey_id",
      Bv = "$survey_iteration",
      Sv = "$survey_last_seen_date",
      sv = "popover",
      uv = "inline";

    function Vv(dd) {
      let Od = !0;
      return {
        dispose() {
          if (Od) {
            Od = !1;
            const md = dd();
            md && am(md.then) && md.then(void 0, (() => {}))
          }
        }
      }
    }
    const iv = "product tour shown",
      Av = "$product_tour_last_seen_date",
      rv = "$product_tour_type",
      Gv = PX("[RateLimiter]");
    var nv = class {
      constructor(dd) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = dd => {
          const Od = dd.text;
          if (Od && Od.length) try {
            (JSON.parse(Od).quota_limited || []).forEach((dd => {
              Gv.info(`${dd||"events"} is quota limited.`), this.serverLimits[dd] = (new Date).getTime() + 6e4
            }))
          } catch (dd) {
            return void Gv.warn(`could not rate limit - continuing. Error: "${null==dd?void 0:dd.message}"`, {
              text: Od
            })
          }
        }, this.instance = dd, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var dd;
        return (null === (dd = this.instance.config.rate_limiting) || void 0 === dd ? void 0 : dd.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var dd;
        return Math.max((null === (dd = this.instance.config.rate_limiting) || void 0 === dd ? void 0 : dd.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var Od, md, Wd;
        const {
          captureEventsBurstLimit: Fd,
          captureEventsPerSecond: Rd
        } = this, Xd = (new Date).getTime(), Kd = null !== (Od = null === (md = this.instance.persistence) || void 0 === md ? void 0 : md.get_property("$capture_rate_limit")) && void 0 !== Od ? Od : {
          tokens: Fd,
          last: Xd
        };
        Kd.tokens += (Xd - Kd.last) / 1e3 * Rd, Kd.last = Xd, Kd.tokens > Fd && (Kd.tokens = Fd);
        const hd = 1 > Kd.tokens;
        if (hd || dd || (Kd.tokens = Math.max(0, Kd.tokens - 1)), hd && !dd) {
          const dd = (um(Kd.dropped) ? Kd.dropped : 0) + 1;
          Kd.dropped = dd, !this.lastEventRateLimited && this._captureWarning(dd) && (Kd.dropped = 0)
        }
        return this.lastEventRateLimited = hd, null === (Wd = this.instance.persistence) || void 0 === Wd || Wd.set_property("$capture_rate_limit", Kd), {
          isRateLimited: hd,
          remainingTokens: Kd.tokens
        }
      }
      _isPropertyAllowed(dd) {
        const Od = this.instance.config.property_denylist;
        return !wm(Od) || !Od.includes(dd)
      }
      _triggeringPage() {
        var dd;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == mm ? void 0 : mm.pathname)) return `${null!==(dd=mm.origin)&&void 0!==dd?dd:""}${mm.pathname}`
      }
      _captureWarning(dd) {
        var Od, md;
        const {
          captureEventsBurstLimit: Wd,
          captureEventsPerSecond: Fd
        } = this, Rd = this._triggeringPage(), Xd = this._isPropertyAllowed("$session_id") ? null === (Od = (md = this.instance).get_session_id) || void 0 === Od ? void 0 : Od.call(md) : void 0, Kd = [`${dd} event(s) dropped since the last warning`, Rd ? `triggered on ${Rd}` : void 0, Xd ? `session ${Xd}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${Kd}. Config is set to ${Fd} events per second and ${Wd} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(dd) {
        const Od = this.serverLimits[dd || "events"] || !1;
        return !1 !== Od && (new Date).getTime() < Od
      }
    };
    const Lv = PX("[RemoteConfig]");
    var Pv = class {
      constructor(dd) {
        this._instance = dd
      }
      get remoteConfig() {
        var dd;
        return null === (dd = Qm._POSTHOG_REMOTE_CONFIG) || void 0 === dd || null === (dd = dd[this._instance.config.token]) || void 0 === dd ? void 0 : dd.config
      }
      _loadRemoteConfigJs(dd) {
        var Od, md, Wd;
        (null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.loadExternalDependency) ? null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this._instance, "remote-config", (() => dd(this.remoteConfig))): dd()
      }
      _loadRemoteConfigJSON(dd) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: dd
        })
      }
      load() {
        try {
          if (this.remoteConfig) return Lv.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void Lv.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((dd => {
            if (!dd) return Lv.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((dd => {
              this._onRemoteConfig(dd.json, dd)
            }));
            this._onRemoteConfig(dd)
          }))
        } catch (Wd) {
          Lv.error("Error loading remote config", Wd), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(dd, Od) {
        !dd && Od && (0 === Od.statusCode ? Od.error || Lv.warn("Failed to fetch remote config from PostHog.") : Lv.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(dd ? {
            ok: !0,
            config: dd
          } : {
            ok: !1
          })
        } catch (dd) {
          Lv.error("Error applying remote config", dd)
        }
        if (!1 !== (null == dd ? void 0 : dd.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var md;
          null === (md = this._instance.featureFlags) || void 0 === md || md.ensureFlagsLoaded()
        } catch (dd) {
          Lv.error("Error loading feature flags", dd)
        }
      }
    };
    var zv = Uint8Array,
      cv = Uint16Array,
      jv = Uint32Array,
      Dv = new zv([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      ev = new zv([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      Iv = new zv([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      lv = function(dd, Od) {
        for (var md = new cv(31), Wd = 0; 31 > Wd; ++Wd) md[Wd] = Od += 1 << dd[Wd - 1];
        var Fd = new jv(md[30]);
        for (Wd = 1; 30 > Wd; ++Wd)
          for (var Rd = md[Wd]; md[Wd + 1] > Rd; ++Rd) Fd[Rd] = Rd - md[Wd] << 5 | Wd;
        return [md, Fd]
      },
      Cv = lv(Dv, 2),
      Zv = Cv[1];
    Cv[0][28] = 258, Zv[258] = 28;
    for (var kv = lv(ev, 0)[1], fv = new cv(32768), Mv = 0; 32768 > Mv; ++Mv) {
      var dQ = (43690 & Mv) >>> 1 | (21845 & Mv) << 1;
      fv[Mv] = ((65280 & (dQ = (61680 & (dQ = (52428 & dQ) >>> 2 | (13107 & dQ) << 2)) >>> 4 | (3855 & dQ) << 4)) >>> 8 | (255 & dQ) << 8) >>> 1
    }
    var OQ = function(dd, Od, md) {
        for (var Wd = dd.length, Fd = 0, Rd = new cv(Od); Wd > Fd; ++Fd) ++Rd[dd[Fd] - 1];
        var Xd, Kd = new cv(Od);
        for (Fd = 0; Od > Fd; ++Fd) Kd[Fd] = Kd[Fd - 1] + Rd[Fd - 1] << 1;
        if (md) {
          Xd = new cv(1 << Od);
          var hd = 15 - Od;
          for (Fd = 0; Wd > Fd; ++Fd)
            if (dd[Fd])
              for (var vd = Fd << 4 | dd[Fd], Qd = Od - dd[Fd], td = Kd[dd[Fd] - 1]++ << Qd, od = td | (1 << Qd) - 1; od >= td; ++td) Xd[fv[td] >>> hd] = vd
        } else
          for (Xd = new cv(Wd), Fd = 0; Wd > Fd; ++Fd) Xd[Fd] = fv[Kd[dd[Fd] - 1]++] >>> 15 - dd[Fd];
        return Xd
      },
      mQ = new zv(288);
    for (Mv = 0; 144 > Mv; ++Mv) mQ[Mv] = 8;
    for (Mv = 144; 256 > Mv; ++Mv) mQ[Mv] = 9;
    for (Mv = 256; 280 > Mv; ++Mv) mQ[Mv] = 7;
    for (Mv = 280; 288 > Mv; ++Mv) mQ[Mv] = 8;
    var WQ = new zv(32);
    for (Mv = 0; 32 > Mv; ++Mv) WQ[Mv] = 5;
    var FQ = OQ(mQ, 9, 0),
      RQ = OQ(WQ, 5, 0),
      XQ = function(dd) {
        return (dd / 8 | 0) + (7 & dd && 1)
      },
      KQ = function(dd, Od, md) {
        (null == Od || 0 > Od) && (Od = 0), (null == md || md > dd.length) && (md = dd.length);
        var Wd = new(dd instanceof cv ? cv : dd instanceof jv ? jv : zv)(md - Od);
        return Wd.set(dd.subarray(Od, md)), Wd
      },
      hQ = function(dd, Od, md) {
        var Wd = Od / 8 | 0;
        dd[Wd] |= md <<= 7 & Od, dd[Wd + 1] |= md >>> 8
      },
      vQ = function(dd, Od, md) {
        var Wd = Od / 8 | 0;
        dd[Wd] |= md <<= 7 & Od, dd[Wd + 1] |= md >>> 8, dd[Wd + 2] |= md >>> 16
      },
      QQ = function(dd, Od) {
        for (var md = [], Wd = 0; dd.length > Wd; ++Wd) dd[Wd] && md.push({
          s: Wd,
          f: dd[Wd]
        });
        var Fd = md.length,
          Rd = md.slice();
        if (!Fd) return [new zv(0), 0];
        if (1 == Fd) {
          var Xd = new zv(md[0].s + 1);
          return Xd[md[0].s] = 1, [Xd, 1]
        }
        md.sort((function(dd, Od) {
          return dd.f - Od.f
        })), md.push({
          s: -1,
          f: 25001
        });
        var Kd = md[0],
          hd = md[1],
          vd = 0,
          Qd = 1,
          td = 2;
        for (md[0] = {
            s: -1,
            f: Kd.f + hd.f,
            l: Kd,
            r: hd
          }; Qd != Fd - 1;) Kd = md[md[td].f > md[vd].f ? vd++ : td++], hd = md[vd != Qd && md[td].f > md[vd].f ? vd++ : td++], md[Qd++] = {
          s: -1,
          f: Kd.f + hd.f,
          l: Kd,
          r: hd
        };
        var od = Rd[0].s;
        for (Wd = 1; Fd > Wd; ++Wd) Rd[Wd].s > od && (od = Rd[Wd].s);
        var Nd = new cv(od + 1),
          qd = tQ(md[Qd - 1], Nd, 0);
        if (qd > Od) {
          Wd = 0;
          var Hd = 0,
            yd = qd - Od,
            bd = 1 << yd;
          for (Rd.sort((function(dd, Od) {
              return Nd[Od.s] - Nd[dd.s] || dd.f - Od.f
            })); Fd > Wd; ++Wd) {
            var Td = Rd[Wd].s;
            if (Od >= Nd[Td]) break;
            Hd += bd - (1 << qd - Nd[Td]), Nd[Td] = Od
          }
          for (Hd >>>= yd; Hd > 0;) {
            var pd = Rd[Wd].s;
            Od > Nd[pd] ? Hd -= 1 << Od - Nd[pd]++ - 1 : ++Wd
          }
          for (; Wd >= 0 && Hd; --Wd) {
            var Yd = Rd[Wd].s;
            Nd[Yd] == Od && (--Nd[Yd], ++Hd)
          }
          qd = Od
        }
        return [new zv(Nd), qd]
      },
      tQ = function(dd, Od, md) {
        return -1 == dd.s ? Math.max(tQ(dd.l, Od, md + 1), tQ(dd.r, Od, md + 1)) : Od[dd.s] = md
      },
      oQ = function(dd) {
        for (var Od = dd.length; Od && !dd[--Od];);
        for (var md = new cv(++Od), Wd = 0, Fd = dd[0], Rd = 1, Xd = function(dd) {
            md[Wd++] = dd
          }, Kd = 1; Od >= Kd; ++Kd)
          if (dd[Kd] == Fd && Kd != Od) ++Rd;
          else {
            if (!Fd && Rd > 2) {
              for (; Rd > 138; Rd -= 138) Xd(32754);
              Rd > 2 && (Xd(Rd > 10 ? Rd - 11 << 5 | 28690 : Rd - 3 << 5 | 12305), Rd = 0)
            } else if (Rd > 3) {
              for (Xd(Fd), --Rd; Rd > 6; Rd -= 6) Xd(8304);
              Rd > 2 && (Xd(Rd - 3 << 5 | 8208), Rd = 0)
            }
            for (; Rd--;) Xd(Fd);
            Rd = 1, Fd = dd[Kd]
          } return [md.subarray(0, Wd), Od]
      },
      NQ = function(dd, Od) {
        for (var md = 0, Wd = 0; Od.length > Wd; ++Wd) md += dd[Wd] * Od[Wd];
        return md
      },
      qQ = function(dd, Od, md) {
        var Wd = md.length,
          Fd = XQ(Od + 2);
        dd[Fd] = 255 & Wd, dd[Fd + 1] = Wd >>> 8, dd[Fd + 2] = 255 ^ dd[Fd], dd[Fd + 3] = 255 ^ dd[Fd + 1];
        for (var Rd = 0; Wd > Rd; ++Rd) dd[Fd + Rd + 4] = md[Rd];
        return 8 * (Fd + 4 + Wd)
      },
      HQ = function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        hQ(Od, Qd++, md), ++Fd[256];
        for (var td = QQ(Fd, 15), od = td[0], Nd = td[1], qd = QQ(Rd, 15), Hd = qd[0], yd = qd[1], bd = oQ(od), Td = bd[0], pd = bd[1], Yd = oQ(Hd), gd = Yd[0], wd = Yd[1], Ed = new cv(19), Jd = 0; Td.length > Jd; ++Jd) Ed[31 & Td[Jd]]++;
        for (Jd = 0; gd.length > Jd; ++Jd) Ed[31 & gd[Jd]]++;
        for (var Ud = QQ(Ed, 7), xd = Ud[0], Bd = Ud[1], Sd = 19; Sd > 4 && !xd[Iv[Sd - 1]]; --Sd);
        var sd, ud, Vd, Ad, rd = vd + 5 << 3,
          Gd = NQ(Fd, mQ) + NQ(Rd, WQ) + Xd,
          nd = NQ(Fd, od) + NQ(Rd, Hd) + Xd + 14 + 3 * Sd + NQ(Ed, xd) + (2 * Ed[16] + 3 * Ed[17] + 7 * Ed[18]);
        if (Gd >= rd && nd >= rd) return qQ(Od, Qd, dd.subarray(hd, hd + vd));
        if (hQ(Od, Qd, 1 + (Gd > nd)), Qd += 2, Gd > nd) {
          sd = OQ(od, Nd, 0), ud = od, Vd = OQ(Hd, yd, 0), Ad = Hd;
          var Ld = OQ(xd, Bd, 0);
          for (hQ(Od, Qd, pd - 257), hQ(Od, Qd + 5, wd - 1), hQ(Od, Qd + 10, Sd - 4), Qd += 14, Jd = 0; Sd > Jd; ++Jd) hQ(Od, Qd + 3 * Jd, xd[Iv[Jd]]);
          Qd += 3 * Sd;
          for (var Pd = [Td, gd], zd = 0; 2 > zd; ++zd) {
            var cd = Pd[zd];
            for (Jd = 0; cd.length > Jd; ++Jd) hQ(Od, Qd, Ld[jd = 31 & cd[Jd]]), Qd += xd[jd], jd > 15 && (hQ(Od, Qd, cd[Jd] >>> 5 & 127), Qd += cd[Jd] >>> 12)
          }
        } else sd = FQ, ud = mQ, Vd = RQ, Ad = WQ;
        for (Jd = 0; Kd > Jd; ++Jd)
          if (Wd[Jd] > 255) {
            var jd;
            vQ(Od, Qd, sd[257 + (jd = Wd[Jd] >>> 18 & 31)]), Qd += ud[jd + 257], jd > 7 && (hQ(Od, Qd, Wd[Jd] >>> 23 & 31), Qd += Dv[jd]);
            var Dd = 31 & Wd[Jd];
            vQ(Od, Qd, Vd[Dd]), Qd += Ad[Dd], Dd > 3 && (vQ(Od, Qd, Wd[Jd] >>> 5 & 8191), Qd += ev[Dd])
          } else vQ(Od, Qd, sd[Wd[Jd]]), Qd += ud[Wd[Jd]];
        return vQ(Od, Qd, sd[256]), Qd + ud[256]
      },
      yQ = new jv([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      bQ = (new zv(0), function() {
        for (var dd = new jv(256), Od = 0; 256 > Od; ++Od) {
          for (var md = Od, Wd = 9; --Wd;) md = (1 & md && 3988292384) ^ md >>> 1;
          dd[Od] = md
        }
        return dd
      }()),
      TQ = function(dd, Od, md) {
        for (; md; ++Od) dd[Od] = md, md >>>= 8
      };
    const pQ = !!Fm || !!Wm,
      YQ = new WeakMap,
      gQ = "text/plain";
    let wQ = 0,
      aQ = !1;
    const EQ = (dd, Od) => {
        const [md, Wd] = dd.split("#"), [Fd, Rd] = md.split("?");
        if (!Rd) return dd;
        const Xd = Rd.split("&").filter((dd => dd.split("=")[0] !== Od)).join("&");
        return `${Fd}${Xd?`?${Xd}`:""}${Wd?`#${Wd}`:""}`
      },
      JQ = function(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var Wd;
        const [Fd, Rd] = dd.split("?"), Xd = gF({}, Od), Kd = null !== (Wd = null == Rd ? void 0 : Rd.split("&").map((dd => {
          var Od;
          const [Wd, Fd] = dd.split("="), Rd = md && null !== (Od = Xd[Wd]) && void 0 !== Od ? Od : Fd;
          return delete Xd[Wd], `${Wd}=${Rd}`
        }))) && void 0 !== Wd ? Wd : [], hd = function(dd) {
          let Od, md, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Fd = [];
          return cX(dd, (function(dd, Wd) {
            Um(dd) || Um(Wd) || "undefined" === Wd || (Od = encodeURIComponent((dd => dd instanceof File)(dd) ? dd.name : dd.toString()), md = encodeURIComponent(Wd), Fd[Fd.length] = md + "=" + Od)
          })), Fd.join(Wd)
        }(Xd);
        return hd && Kd.push(hd), Kd.length > 0 ? `${Fd}?${Kd.join("&")}` : Fd
      },
      UQ = dd => {
        if (dd._encodedBody) return dd._encodedBody;
        const {
          data: Od,
          compression: md
        } = dd;
        if (!Od) return;
        if (md === Tv.GZipJS) {
          const dd = function(dd, Od) {
            void 0 === Od && (Od = {});
            var md = function() {
                var dd = 4294967295;
                return {
                  p(Od) {
                    for (var md = dd, Wd = 0; Od.length > Wd; ++Wd) md = bQ[255 & md ^ Od[Wd]] ^ md >>> 8;
                    dd = md
                  },
                  d: () => 4294967295 ^ dd
                }
              }(),
              Wd = dd.length;
            md.p(dd);
            var Fd, Rd, Xd, Kd, hd = (Kd = 10 + ((Fd = Od).filename && Fd.filename.length + 1 || 0), function(dd, Od, md, Wd, Fd, Rd) {
                var Xd = dd.length,
                  Kd = new zv(Wd + Xd + 5 * (1 + Math.floor(Xd / 7e3)) + 8),
                  hd = Kd.subarray(Wd, Kd.length - 8),
                  vd = 0;
                if (!Od || 8 > Xd)
                  for (var Qd = 0; Xd >= Qd; Qd += 65535) {
                    var td = Qd + 65535;
                    Xd > td ? vd = qQ(hd, vd, dd.subarray(Qd, td)) : (hd[Qd] = Rd, vd = qQ(hd, vd, dd.subarray(Qd, Xd)))
                  } else {
                    for (var od = yQ[Od - 1], Nd = od >>> 13, qd = 8191 & od, Hd = (1 << md) - 1, yd = new cv(32768), bd = new cv(Hd + 1), Td = Math.ceil(md / 3), pd = 2 * Td, Yd = function(Od) {
                        return (dd[Od] ^ dd[Od + 1] << Td ^ dd[Od + 2] << pd) & Hd
                      }, gd = new jv(25e3), wd = new cv(288), Ed = new cv(32), Jd = 0, Ud = 0, xd = (Qd = 0, 0), Bd = 0, Sd = 0; Xd > Qd; ++Qd) {
                      var sd = Yd(Qd),
                        ud = 32767 & Qd,
                        Vd = bd[sd];
                      if (yd[ud] = Vd, bd[sd] = ud, Qd >= Bd) {
                        var Ad = Xd - Qd;
                        if ((Jd > 7e3 || xd > 24576) && Ad > 423) {
                          vd = HQ(dd, hd, 0, gd, wd, Ed, Ud, xd, Sd, Qd - Sd, vd), xd = Jd = Ud = 0, Sd = Qd;
                          for (var rd = 0; 286 > rd; ++rd) wd[rd] = 0;
                          for (rd = 0; 30 > rd; ++rd) Ed[rd] = 0
                        }
                        var Gd = 2,
                          nd = 0,
                          Ld = qd,
                          Pd = ud - Vd & 32767;
                        if (Ad > 2 && sd == Yd(Qd - Pd))
                          for (var zd = Math.min(Nd, Ad) - 1, cd = Math.min(32767, Qd), jd = Math.min(258, Ad); cd >= Pd && --Ld && ud != Vd;) {
                            if (dd[Qd + Gd] == dd[Qd + Gd - Pd]) {
                              for (var Dd = 0; jd > Dd && dd[Qd + Dd] == dd[Qd + Dd - Pd]; ++Dd);
                              if (Dd > Gd) {
                                if (Gd = Dd, nd = Pd, Dd > zd) break;
                                var ed = Math.min(Pd, Dd - 2),
                                  Id = 0;
                                for (rd = 0; ed > rd; ++rd) {
                                  var ld = Qd - Pd + rd + 32768 & 32767,
                                    Cd = ld - yd[ld] + 32768 & 32767;
                                  Cd > Id && (Id = Cd, Vd = ld)
                                }
                              }
                            }
                            Pd += (ud = Vd) - (Vd = yd[ud]) + 32768 & 32767
                          }
                        if (nd) {
                          gd[xd++] = 268435456 | Zv[Gd] << 18 | kv[nd];
                          var Zd = 31 & Zv[Gd],
                            kd = 31 & kv[nd];
                          Ud += Dv[Zd] + ev[kd], ++wd[257 + Zd], ++Ed[kd], Bd = Qd + Gd, ++Jd
                        } else gd[xd++] = dd[Qd], ++wd[dd[Qd]]
                      }
                    }
                    vd = HQ(dd, hd, Rd, gd, wd, Ed, Ud, xd, Sd, Qd - Sd, vd)
                  }
                return KQ(Kd, 0, Wd + XQ(vd) + 8)
              }(Rd = dd, null == (Xd = Od).level ? 6 : Xd.level, null == Xd.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(Rd.length)))) : 12 + Xd.mem, Kd, 0, !0)),
              vd = hd.length;
            return function(dd, Od) {
              var md = Od.filename;
              if (dd[0] = 31, dd[1] = 139, dd[2] = 8, dd[8] = 2 > Od.level ? 4 : 9 == Od.level ? 2 : 0, dd[9] = 3, 0 != Od.mtime && TQ(dd, 4, Math.floor(new Date(Od.mtime || Date.now()) / 1e3)), md) {
                dd[3] = 8;
                for (var Wd = 0; md.length >= Wd; ++Wd) dd[Wd + 10] = md.charCodeAt(Wd)
              }
            }(hd, Od), TQ(hd, vd - 8, md.d()), TQ(hd, vd - 4, Wd), hd
          }(function(dd) {
            var Od = dd.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(dd);
            for (var md = new zv(dd.length + (dd.length >>> 1)), Wd = 0, Fd = function(dd) {
                md[Wd++] = dd
              }, Rd = 0; Od > Rd; ++Rd) {
              if (Wd + 5 > md.length) {
                var Xd = new zv(Wd + 8 + (Od - Rd << 1));
                Xd.set(md), md = Xd
              }
              var Kd = dd.charCodeAt(Rd);
              128 > Kd ? Fd(Kd) : 2048 > Kd ? (Fd(192 | Kd >>> 6), Fd(128 | 63 & Kd)) : Kd > 55295 && 57344 > Kd ? (Fd(240 | (Kd = 65536 + (1047552 & Kd) | 1023 & dd.charCodeAt(++Rd)) >>> 18), Fd(128 | Kd >>> 12 & 63), Fd(128 | Kd >>> 6 & 63), Fd(128 | 63 & Kd)) : (Fd(224 | Kd >>> 12), Fd(128 | Kd >>> 6 & 63), Fd(128 | 63 & Kd))
            }
            return KQ(md, 0, Wd)
          }(Lh(Od)), {
            mtime: 0
          });
          return {
            contentType: gQ,
            body: dd.buffer.slice(dd.byteOffset, dd.byteOffset + dd.byteLength),
            estimatedSize: dd.byteLength
          }
        }
        if (md === Tv.Base64) {
          const dd = function(dd) {
              return dd ? btoa(encodeURIComponent(dd).replace(/%([0-9A-F]{2})/g, ((dd, Od) => String.fromCharCode(parseInt(Od, 16))))) : dd
            }(Lh(Od)),
            md = (dd => "data=" + encodeURIComponent("string" == typeof dd ? dd : Lh(dd)))(dd);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: md,
            estimatedSize: new Blob([md]).size
          }
        }
        const Wd = Lh(Od);
        return {
          contentType: "application/json",
          body: Wd,
          estimatedSize: new Blob([Wd]).size
        }
      },
      xQ = dd => {
        const Od = () => "sendBeacon" === dd.transport ? {
          url: JQ(dd.url, {
            compression: Tv.Base64
          }),
          encodedBody: UQ(gF(gF({}, dd), {}, {
            compression: Tv.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: EQ(dd.url, "compression"),
          encodedBody: UQ(gF(gF({}, dd), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let md;
        try {
          md = UQ(dd)
        } catch (md) {
          if (gR(dd.compression, zh(dd.url, "compression"))) return LX.error("Failed to gzip request body, sending uncompressed payload", md), Od();
          throw md
        }
        return md && gR(dd.compression, zh(dd.url, "compression")) && !((Wd = md.body) instanceof ArrayBuffer ? YR(new Uint8Array(Wd)) : ArrayBuffer.isView(Wd) && YR(new Uint8Array(Wd.buffer, Wd.byteOffset, Wd.byteLength))) ? (aQ = !0, Od()) : {
          url: dd.url,
          encodedBody: md
        };
        var Wd
      },
      BQ = dd => {
        try {
          return xQ(dd)
        } catch (Rd) {
          var Od;
          return LX.error(Rd), void(null === (Od = dd.callback) || void 0 === Od || Od.call(dd, {
            statusCode: 0,
            error: Rd
          }))
        }
      },
      SQ = function() {
        var dd = Im((function*(dd) {
          const Od = yield function(dd) {
            return xR.apply(this, arguments)
          }(Lh(dd.data), Rd.DEBUG, {
            rethrow: !0
          });
          if (!Od) return dd;
          const md = yield Od.arrayBuffer();
          return gF(gF({}, dd), {}, {
            _encodedBody: {
              contentType: gQ,
              body: md,
              estimatedSize: md.byteLength
            }
          })
        }));
        return function(Od) {
          return dd.apply(this, arguments)
        }
      }(),
      sQ = /Failed to fetch|NetworkError|Load failed/i,
      uQ = dd => "TypeError" === (null == dd ? void 0 : dd.name) && sQ.test((null == dd ? void 0 : dd.message) || ""),
      VQ = dd => {
        try {
          const Od = function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof dd || !dd) return;
            const md = dd.trim(),
              Wd = /^\d+\s*,/.test(md) ? md.slice(0, md.indexOf(",")).trim() : md;
            if (/^\d+$/.test(Wd)) {
              const dd = 1e3 * Math.min(Number(Wd), 300);
              return dd > 0 ? dd : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(Wd)) return;
            const Fd = /^\w{3} \w{3} /.test(Wd) ? Wd + " GMT" : Wd,
              Rd = Date.parse(Fd) - Od;
            return Number.isFinite(Rd) && Rd > 0 ? Math.min(Rd, hF) : void 0
          }(dd());
          return Um(Od) ? void 0 : Math.min(Od, 3e4)
        } catch (dd) {
          return
        }
      },
      iQ = dd => {
        const Od = BQ(dd);
        if (!Od) return;
        const md = new Fm;
        YQ.set(md, !0);
        const {
          url: Wd,
          encodedBody: Fd
        } = Od;
        md.open(dd.method || "GET", Wd, !0);
        const {
          contentType: Rd,
          body: Xd
        } = null != Fd ? Fd : {};
        cX(dd.headers, (function(dd, Od) {
          md.setRequestHeader(Od, dd)
        })), Rd && md.setRequestHeader("Content-Type", Rd), dd.timeout && (md.timeout = dd.timeout), md.onreadystatechange = () => {
          if (4 === md.readyState) {
            var Od;
            const Wd = {
              statusCode: md.status,
              text: md.responseText
            };
            if (200 === md.status) try {
              Wd.json = JSON.parse(md.responseText)
            } catch (dd) {}
            null === (Od = dd.callback) || void 0 === Od || Od.call(dd, Wd, VQ((() => md.getResponseHeader("Retry-After"))))
          }
        }, md.send(Xd)
      },
      AQ = dd => {
        const Od = BQ(dd);
        if (!Od) return;
        const {
          url: md,
          encodedBody: Wd
        } = Od, {
          contentType: Fd,
          body: Rd,
          estimatedSize: Xd
        } = null != Wd ? Wd : {}, Kd = new Headers;
        cX(dd.headers, (function(dd, Od) {
          Kd.append(Od, dd)
        })), Fd && Kd.append("Content-Type", Fd);
        let hd = null,
          vd = !1;
        if (Rm) {
          const Od = new Rm;
          hd = {
            signal: Od.signal,
            timeout: setTimeout((() => {
              vd = !0;
              try {
                Od.abort(oF("AbortError", "PostHog request timed out" + ((md = dd.timeout) ? ` after ${md}ms` : "")))
              } catch (dd) {
                td(dd)
              }
              var md
            }), dd.timeout)
          }
        }
        let Qd = !1;
        const td = Od => {
          var md;
          Qd || (Qd = !0, vd && "AbortError" === (null == Od ? void 0 : Od.name) || uQ(Od) ? LX.warn(Od) : LX.error(Od), null === (md = dd.callback) || void 0 === md || md.call(dd, {
            statusCode: 0,
            error: Od
          }))
        };
        let od = 0;
        const Nd = () => {
          wQ -= od, od = 0, hd && clearTimeout(hd.timeout)
        };
        try {
          const Od = gF({
              method: (null == dd ? void 0 : dd.method) || "GET",
              headers: Kd,
              referrerPolicy: "strict-origin",
              body: Rd,
              signal: null == hd ? void 0 : hd.signal
            }, dd.fetchOptions),
            Wd = null != Xd ? Xd : Um(Rd) ? 0 : void 0;
          Od.keepalive = "POST" === Od.method && !dd._keepaliveDisabled && !1 !== Od.keepalive && Od.body === Rd && !Um(Wd) && Wd >= 0 && 52428.8 > wQ + Wd, Od.keepalive && (od = Wd, wQ += od), Wm(md, Od).then((Od => Od.text().then((md => {
            var Wd;
            if (Qd) return;
            const Fd = {
              statusCode: Od.status,
              text: md
            };
            if (200 === Od.status) try {
              Fd.json = JSON.parse(md)
            } catch (dd) {
              LX.error(dd)
            }
            Qd = !0, Nd(), null === (Wd = dd.callback) || void 0 === Wd || Wd.call(dd, Fd, VQ((() => Od.headers.get("Retry-After"))))
          })))).catch((dd => {
            Nd(), td(dd)
          })).finally(Nd)
        } catch (dd) {
          Nd(), td(dd)
        }
      },
      rQ = dd => {
        try {
          var Od;
          const {
            url: md,
            encodedBody: Wd
          } = xQ(dd), {
            contentType: Fd,
            body: Rd,
            estimatedSize: Xd
          } = null != Wd ? Wd : {};
          if (!Rd) return;
          const Kd = Rd instanceof Blob ? Rd : new Blob([Rd], {
            type: Fd
          });
          if (dm.sendBeacon(md, Kd)) return;
          const hd = wm(dd.data) ? dd.data : null === (Od = dd.data) || void 0 === Od ? void 0 : Od.batch;
          if (wm(hd) && hd.length > 1 && (null != Xd ? Xd : 0) > 16384) {
            const Od = Math.ceil(hd.length / 2),
              md = Od => wm(dd.data) ? Od : gF(gF({}, dd.data), {}, {
                batch: Od
              });
            return rQ(gF(gF({}, dd), {}, {
              data: md(hd.slice(0, Od))
            })), void rQ(gF(gF({}, dd), {}, {
              data: md(hd.slice(Od))
            }))
          }
          LX.warn(`Beacon of ~${null!=Xd?Xd:0} bytes was rejected by the browser, falling back to ${Wm?"fetch":"XHR"}`), Wm ? AQ(gF(gF({}, dd), {}, {
            _keepaliveDisabled: !0
          })) : iQ(dd)
        } catch (dd) {
          LX.warn("Beacon send failed", dd)
        }
      },
      GQ = (dd, Od, md, Wd) => {
        const Fd = "query" === Wd ? "POST" === Od ? "sent_at" : "_" : void 0;
        return JQ(md === Tv.GZipJS ? EQ(dd, "compression") : dd, gF(gF({}, Fd ? {
          [Fd]: Date.now().toString()
        } : {}), md === Tv.GZipJS ? {} : {
          compression: md
        }))
      },
      nQ = (() => {
        const dd = [];
        return Wm && dd.push({
          transport: "fetch",
          method: AQ
        }), Fm && dd.push({
          transport: "XHR",
          method: iQ
        }), (null == dm ? void 0 : dm.sendBeacon) && dd.push({
          transport: "sendBeacon",
          method: rQ
        }), dd
      })();
    let LQ = !pQ && -1 === (null == Km ? void 0 : Km.indexOf("MSIE")) && -1 === (null == Km ? void 0 : Km.indexOf("Mozilla"));

    function PQ(dd, Od, md) {
      var Wd, Fd, Rd;
      md && (Od = gF(gF({}, Od), {}, {
        callback: dd => md(dd)
      })), dd.__loaded ? LQ ? dd.__request_queue.push(Od) : dd.rateLimiter.isServerRateLimited(Od.batchKey) ? Od.fireCallbackOnDrop && (null === (Fd = Od.callback) || void 0 === Fd || Fd.call(Od, {
        statusCode: 429
      })) : (Od.transport = Od.transport || dd.config.api_transport, Od.headers = gF(gF({}, dd.config.request_headers), Od.headers), Od.compression = "best-available" === Od.compression ? null !== (Wd = dd.compression) && void 0 !== Wd ? Wd : Od.compressionFallback : Od.compression, (Um(dd.config.disable_beacon) ? dd.config.__preview_disable_beacon : dd.config.disable_beacon) && (Od.disableTransport = ["sendBeacon"]), Od.fetchOptions = Od.fetchOptions || dd.config.fetch_options, ((dd, Od) => {
        var md, Wd, Fd;
        const Rd = gF(gF({}, dd), {}, {
          callback: null != Od ? Od : Od => {
            var md;
            return null === (md = dd.callback) || void 0 === md ? void 0 : md.call(dd, Od)
          }
        });
        Rd.timeout = Rd.timeout || 6e4;
        const Xd = null !== (md = Rd.transport) && void 0 !== md ? md : "fetch";
        "sendBeacon" === Xd && Um(Rd.compression) && Rd.data && (Rd.compression = Tv.Base64), "POST" === Rd.method && Rd.data && ("capture-body" === Rd.timestampMode ? Rd.data = (dd => {
          var Od, md;
          const Wd = (wm(dd) ? dd : [dd]).map((dd => gF(gF({}, dd), dd.timestamp instanceof Date && !isNaN(dd.timestamp.getTime()) ? {
              timestamp: dd.timestamp.toISOString()
            } : {}))),
            Fd = Wd[0];
          return {
            api_key: null !== (Od = null == Fd || null === (md = Fd.properties) || void 0 === md ? void 0 : md.token) && void 0 !== Od ? Od : null == Fd ? void 0 : Fd.token,
            batch: Wd,
            sent_at: (new Date).toISOString()
          }
        })(Rd.data) : "body" === Rd.timestampMode && (Rd.data = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return wm(dd) ? dd.map((dd => gF(gF({}, dd), {}, {
            sent_at: Od
          }))) : gF(gF({}, dd), {}, {
            sent_at: Od
          })
        }(Rd.data))), Rd.url = GQ(Rd.url, Rd.method, Rd.compression, Rd.timestampMode);
        const Kd = nQ.filter((dd => !Rd.disableTransport || !dd.transport || !Rd.disableTransport.includes(dd.transport))),
          hd = null !== (Wd = null === (Fd = function(dd, Od) {
            for (let md = 0; dd.length > md; md++)
              if (Od(dd[md])) return dd[md]
          }(Kd, (dd => dd.transport === Xd))) || void 0 === Fd ? void 0 : Fd.method) && void 0 !== Wd ? Wd : Kd[0].method;
        if (!hd) throw new Error("No available transport method");
        const vd = dd => {
          try {
            hd(dd)
          } catch (dd) {
            var Od;
            uQ(dd) ? LX.warn(dd) : LX.error(dd), null === (Od = Rd.callback) || void 0 === Od || Od.call(Rd, {
              statusCode: 0,
              error: dd
            })
          }
        };
        "sendBeacon" !== Xd && !Rd.preferSyncCompression && Rd.data && Rd.compression === Tv.GZipJS && Xm && "undefined" != typeof Promise && !aQ ? SQ(Rd).then((dd => {
          vd(dd)
        })).catch((Od => {
          if (wR(Od)) return aQ = !0, void vd(gF(gF({}, Rd), {}, {
            compression: void 0,
            url: GQ(dd.url, dd.method, void 0, dd.timestampMode)
          }));
          (dd => {
            if (!dd || "object" != typeof dd) return !1;
            const Od = "name" in dd ? String(dd.name) : "";
            return wR(dd) || Od === pR
          })(Od) && (aQ = !0), vd(Rd)
        })) : vd(Rd)
      })(Od, ((Wd, Fd) => {
        var Rd, Xd, Kd;
        dd.rateLimiter.checkForLimiting(Wd), 400 > Wd.statusCode || null === (Rd = (Xd = dd.config).on_request_error) || void 0 === Rd || Rd.call(Xd, Wd), md ? md(Wd, Fd) : null === (Kd = Od.callback) || void 0 === Kd || Kd.call(Od, Wd)
      }))) : Od.fireCallbackOnDrop && (null === (Rd = Od.callback) || void 0 === Rd || Rd.call(Od, {
        statusCode: 0
      }))
    }
    var zQ = class {
      constructor(dd, Od) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = km((null == Od ? void 0 : Od.flush_interval_ms) || 3e3, 250, 5e3, LX.createLogger("flush interval"), 3e3), this._sendRequest = dd
      }
      enqueue(dd) {
        this._queue.push(dd), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const dd = this._queue.length > 0 ? this._formatQueue() : {},
          Od = Object.values(dd);
        [...Od.filter((dd => 0 === dd.url.indexOf("/e"))), ...Od.filter((dd => 0 !== dd.url.indexOf("/e")))].map((dd => {
          this._sendRequestSafely(gF(gF({}, dd), {}, {
            callback: void 0
          }), "sendBeacon")
        }))
      }
      enable() {
        this._isPaused = !1, this._setFlushTimeout()
      }
      _setFlushTimeout() {
        this._isPaused || (this._flushTimeout = setTimeout((() => {
          this._clearFlushTimeout(), this._flush()
        }), this._flushTimeoutMs))
      }
      _flush() {
        if (this._queue.length > 0) {
          const dd = this._formatQueue();
          for (const Od in dd) this._sendRequestSafely(dd[Od])
        }
      }
      _sendRequestSafely(dd, Od) {
        try {
          this._sendRequest(dd, Od)
        } catch (dd) {
          LX.error(dd)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const dd = {},
          Od = {};
        cX(this._queue, (md => {
          var Wd;
          const Fd = md,
            Rd = ((Fd ? Fd.batchKey : null) || Fd.url) + (Fd.batchGroup ? `:${Fd.batchGroup}` : "");
          Um(dd[Rd]) && (dd[Rd] = gF(gF({}, Fd), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), Od[Rd] = []), null === (Wd = dd[Rd].data) || void 0 === Wd || Wd.push(Fd.data), Fd.callback && Od[Rd].push(Fd.callback)
        }));
        for (const md in Od) {
          const Wd = Od[md];
          Wd.length && (dd[md].callback = dd => {
            for (const Od of Wd) Od(dd)
          })
        }
        return this._queue = [], dd
      }
    };
    const cQ = ["retriesPerformedSoFar"];
    var jQ = class {
        constructor(dd) {
          this._instance = dd, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!Um(fO) && "onLine" in fO.navigator) {
            if (this._areWeOnline = fO.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, kX(fO, "online", this._onlineListener), kX(fO, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(dd, Od) {
          let {
            retriesPerformedSoFar: md
          } = dd, Wd = BR(dd, cQ);
          Vm(md) && (Wd.url = JQ(Wd.url, {
            retry_count: md
          })), PQ(this._instance, Od ? gF(gF({}, Wd), {}, {
            transport: Od
          }) : Wd, ((dd, Od) => {
            var Fd;
            if (200 !== dd.statusCode && (400 > dd.statusCode || dd.statusCode >= 500)) {
              if ((0 === dd.statusCode ? 3 : 10) > (null != md ? md : 0)) return void this._enqueue(gF({
                retriesPerformedSoFar: md
              }, Wd), Od);
              0 === dd.statusCode && LX.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=md?md:0} retries.`)
            }
            null === (Fd = Wd.callback) || void 0 === Fd || Fd.call(Wd, dd)
          }))
        }
        _enqueue(dd, Od) {
          const md = dd.retriesPerformedSoFar || 0;
          dd.retriesPerformedSoFar = md + 1;
          const Wd = Math.max(function(dd) {
              const Od = 3e3 * Math.pow(2, dd),
                md = Od / 2,
                Wd = Math.min(18e5, Od),
                Fd = (Math.random() - .5) * (Wd - md);
              return Math.ceil(Wd + Fd)
            }(md), null != Od ? Od : 0),
            Fd = Date.now() + Wd;
          this._queue.push({
            retryAt: Fd,
            requestOptions: dd
          });
          let Rd = `Enqueued failed request for retry in ${Wd}`;
          navigator.onLine || (Rd += " (Browser is offline)"), LX.warn(Rd), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const dd = Date.now(),
            Od = [],
            md = this._queue.filter((md => dd > md.retryAt || (Od.push(md), !1)));
          if (this._queue = Od, md.length > 0)
            for (const {
                requestOptions: Wd
              }
              of md) this.retriableRequest(Wd)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, Um(fO) || (this._onlineListener && (fO.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (fO.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: dd
            }
            of this._queue) try {
            this._instance._send_request(gF(gF({}, dd), {}, {
              callback: wm(dd.data) ? void 0 : dd.callback,
              transport: "sendBeacon"
            }))
          } catch (Wd) {
            LX.error(Wd)
          }
          this._queue = []
        }
      },
      DQ = class {
        constructor(dd) {
          this._instance = dd, this._updateScrollData = () => {
            var dd, Od, md, Wd;
            this._context || (this._context = {});
            const Fd = this.scrollElement(),
              Rd = this.scrollY(),
              Xd = Fd ? Math.max(0, Fd.scrollHeight - Fd.clientHeight) : 0,
              Kd = Rd + ((null == Fd ? void 0 : Fd.clientHeight) || 0),
              hd = (null == Fd ? void 0 : Fd.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(Rd), this._context.maxScrollY = Math.max(Rd, null !== (dd = this._context.maxScrollY) && void 0 !== dd ? dd : 0), this._context.maxScrollHeight = Math.max(Xd, null !== (Od = this._context.maxScrollHeight) && void 0 !== Od ? Od : 0), this._context.lastContentY = Kd, this._context.maxContentY = Math.max(Kd, null !== (md = this._context.maxContentY) && void 0 !== md ? md : 0), this._context.maxContentHeight = Math.max(hd, null !== (Wd = this._context.maxContentHeight) && void 0 !== Wd ? Wd : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const dd = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), dd
        }
        startMeasuringScrollPosition() {
          kX(fO, "scroll", this._updateScrollData, {
            capture: !0
          }), kX(fO, "scrollend", this._updateScrollData, {
            capture: !0
          }), kX(fO, "resize", this._updateScrollData)
        }
        scrollElement() {
          var dd;
          if (!this._scrollRoot) return null == fO || null === (dd = fO.document) || void 0 === dd ? void 0 : dd.documentElement;
          {
            const dd = wm(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const md of dd) {
              var Od;
              const dd = null == fO || null === (Od = fO.document) || void 0 === Od ? void 0 : Od.querySelector(md);
              if (dd) return dd
            }
          }
        }
        _scrollPosition(dd) {
          var Od, md;
          const Wd = "y" === dd ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const dd = this.scrollElement();
            return dd && dd[Wd] || 0
          }
          return fO ? "y" === dd ? fO.scrollY || fO.pageYOffset || (null === (Od = fO.document) || void 0 === Od || null === (Od = Od.documentElement) || void 0 === Od ? void 0 : Od.scrollTop) || 0 : fO.scrollX || fO.pageXOffset || (null === (md = fO.document) || void 0 === md || null === (md = md.documentElement) || void 0 === md ? void 0 : md.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const eQ = dd => mv(null == dd ? void 0 : dd.config.mask_personal_data_properties, null == dd ? void 0 : dd.config.custom_personal_data_properties, null == dd ? void 0 : dd.config.disable_capture_url_hashes);
    var IQ = class {
        constructor(dd, Od, md, Wd) {
          this._onSessionIdCallback = dd => {
            const Od = this._getStored();
            if (Od && Od.sessionId === dd) return;
            const md = {
              sessionId: dd,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [gO]: md
            })
          }, this._instance = dd, this._sessionIdManager = Od, this._persistence = md, this._sessionSourceParamGenerator = Wd || eQ, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[gO]
        }
        getSetOnceProps() {
          var dd;
          const Od = null === (dd = this._getStored()) || void 0 === dd ? void 0 : dd.props;
          return Od ? "r" in Od ? Wv(Od, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: Od.referringDomain,
            $pathname: Od.initialPathName,
            utm_source: Od.utm_source,
            utm_campaign: Od.utm_campaign,
            utm_medium: Od.utm_medium,
            utm_content: Od.utm_content,
            utm_term: Od.utm_term
          } : {}
        }
        getSessionProps() {
          const dd = {};
          return cX(IX(this.getSetOnceProps()), ((Od, md) => {
            "$current_url" === md && (md = "url"), dd[`$session_entry_${bm(md)}`] = Od
          })), dd
        }
      },
      lQ = class {
        on(dd, Od) {
          return this._events[dd] || (this._events[dd] = []), this._events[dd].push(Od), () => {
            this._events[dd] = this._events[dd].filter((dd => dd !== Od))
          }
        }
        emit(dd, Od) {
          for (const md of this._events[dd] || []) md(Od);
          for (const md of this._events["*"] || []) md(dd, Od)
        }
        constructor() {
          this._events = {}
        }
      };
    const CQ = PX("[SessionId]"),
      ZQ = 864e5;
    var kQ = class {
      on(dd, Od) {
        return this._eventEmitter.on(dd, Od)
      }
      constructor(dd, Od, md) {
        var Wd;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new lQ, this._sessionHasBeenIdleTooLong = (dd, Od) => !(!Vm(dd) || !Vm(Od)) && Math.abs(dd - Od) > this.sessionTimeoutMs, !dd.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === dd.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = dd.config, this._persistence = dd.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = Od || RK, this._windowIdGenerator = md || RK;
        const Fd = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * km(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, CQ.createLogger("session_idle_timeout_seconds"), 1800), dd.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + Fd + "_window_id", this._primary_window_exists_storage_key = "ph_" + Fd + "_primary_window_exists", this._canUseSessionStorage()) {
          const dd = UK._parse(this._window_id_storage_key),
            Od = UK._parse(this._primary_window_exists_storage_key);
          dd && !Od ? this._windowId = dd : UK._remove(this._window_id_storage_key), UK._set(this._primary_window_exists_storage_key, !0)
        }(null === (Wd = this._config.bootstrap) || void 0 === Wd ? void 0 : Wd.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(dd) {
        return Um(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(dd), this._sessionId && dd(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((Od => Od !== dd))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && UK._is_supported()
      }
      _setWindowId(dd) {
        dd !== this._windowId && (this._windowId = dd, this._canUseSessionStorage() && UK._set(this._window_id_storage_key, dd))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? UK._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(dd) {
        const Od = this._lastPersistedActivityTimestamp;
        return !Sm(Od) && !Sm(dd) && 5e3 > Math.abs(dd - Od)
      }
      _setSessionId(dd, Od, md) {
        const Wd = Od !== this._sessionActivityTimestamp,
          Fd = !(dd !== this._sessionId || md !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = md, this._sessionActivityTimestamp = Od, this._sessionId = dd, Fd && !Wd || Fd && this._isActivityChangeBelowGranularity(Od) || (this._lastPersistedActivityTimestamp = Od, this._persistence.register({
          [dO]: [Od, dd, md]
        }))
      }
      _useCrossTabRefreshHardening() {
        var dd;
        const Od = null === (dd = this._config) || void 0 === dd ? void 0 : dd.persistence_save_debounce_ms;
        return Vm(Od) && Od > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(dO) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var dd;
        if (Sm(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, Od, md] = this._getSessionId();
        Od === this._sessionId && md === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [dO]: [this._sessionActivityTimestamp, null !== (dd = this._sessionId) && void 0 !== dd ? dd : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [dd] = this._getSessionId(), Od = Vm(dd) ? dd : 0, md = Vm(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(Od, md)
      }
      _isSessionIdleAfterCrossTabRefresh(dd) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(dd, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const dd = this._persistence.props[dO];
        return wm(dd) && 2 === dd.length && dd.push(dd[0]), dd || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const md = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const md = (dd => {
              const Od = dd.replace(/-/g, "");
              if (32 !== Od.length) throw new Error("Not a valid UUID");
              if ("7" !== Od[12]) throw new Error("Not a UUIDv7");
              return parseInt(Od.substring(0, 12), 16)
            })(dd);
            return md > Od + 6e4 ? void CQ.error("Bootstrap sessionID cannot be in the future") : md
          } catch (dd) {
            return void CQ.error("Invalid sessionID in bootstrap", dd)
          }
        }(dd);
        return !Um(md) && (Od ? this._pendingBootstrapSession = {
          sessionId: dd,
          sessionStartTimestamp: md
        } : this._setSessionId(dd, (new Date).getTime(), md), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && fO && (fO.removeEventListener(IO, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && UK._remove(this._primary_window_exists_storage_key)
        }, kX(fO, IO, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const Wd = Od || (new Date).getTime(),
          Fd = this._sessionId;
        if (md) this._lastCookieSyncTimestamp = Wd;
        else if (Sm(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > Wd || Wd - this._lastCookieSyncTimestamp >= 1e3) {
          var Rd, Xd;
          null === (Rd = (Xd = this._persistence).syncCookieProperties) || void 0 === Rd || Rd.call(Xd), this._lastCookieSyncTimestamp = Wd
        }
        let [, Kd, hd] = this._getSessionId();
        const vd = !Um(Fd) && Kd !== Fd,
          Qd = this._freshestActivityTimestamp();
        let td = this._getWindowId();
        const od = this._pendingBootstrapSession,
          Nd = !!od && (od.sessionStartTimestamp > Wd + 6e4 || Wd - od.sessionStartTimestamp > ZQ),
          qd = od ? Nd : Vm(hd) && Math.abs(Wd - hd) > ZQ;
        let Hd = !1,
          yd = vd,
          bd = !Kd || !!od;
        const Td = Kd;
        let pd = !bd && !dd && this._sessionHasBeenIdleTooLong(Wd, Qd);
        if (pd && (pd = this._isSessionIdleAfterCrossTabRefresh(Wd), pd || CQ.info("cross-tab refresh kept the session alive", {
            sessionId: Kd
          }), [, Kd, hd] = this._getSessionId(), pd || (bd = !Kd || !!od)), bd || pd || qd) {
          yd = !1;
          const dd = od && !Nd;
          Kd = dd ? od.sessionId : this._sessionIdGenerator(), td = this._windowIdGenerator(), CQ.info("new session ID assigned", {
            sessionId: Kd,
            windowId: td,
            bootstrapped: !!dd,
            changeReason: {
              noSessionId: bd,
              activityTimeout: pd,
              sessionPastMaximumLength: qd
            }
          }), hd = dd ? od.sessionStartTimestamp : Wd, this._pendingBootstrapSession = void 0, Hd = !0
        } else td || (td = this._windowIdGenerator(), Hd = !0), yd = yd || Kd !== Td, yd && (CQ.info("adopted cross-tab session id", {
          sessionId: Kd,
          windowId: td
        }), Hd = !0);
        const Yd = Vm(Qd) && dd && !qd ? Qd : Wd,
          gd = Vm(hd) ? hd : (new Date).getTime();
        this._setWindowId(td), this._setSessionId(Kd, Yd, gd), dd || this._resetIdleTimer();
        const wd = {
          noSessionId: bd,
          activityTimeout: pd,
          sessionPastMaximumLength: qd,
          crossTabAdoption: yd
        };
        return Hd && this._sessionIdChangedHandlers.forEach((dd => dd(Kd, td, wd))), {
          sessionId: Kd,
          windowId: td,
          sessionStartTimestamp: gd,
          changeReason: Hd ? wd : void 0,
          lastActivityTimestamp: Qd
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const dd = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: dd
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const fQ = function(dd, Od) {
      if (!dd) return !1;
      const md = dd.userAgent;
      if (md && Zm(md, Od)) return !0;
      try {
        const md = null == dd ? void 0 : dd.userAgentData;
        if ((null == md ? void 0 : md.brands) && md.brands.some((dd => Zm(null == dd ? void 0 : dd.brand, Od)))) return !0
      } catch (dd) {}
      return !!dd.webdriver
    };

    function MQ() {
      return (MQ = Im((function*() {
        const dd = null == dm ? void 0 : dm.userAgentData;
        if (null == dd ? void 0 : dd.getHighEntropyValues) try {
          const Od = yield dd.getHighEntropyValues(["model"]), md = null == Od ? void 0 : Od.model;
          return xm(md) && md.length > 0 ? md : void 0
        } catch (dd) {
          return void LX.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", dd)
        }
      }))).apply(this, arguments)
    }

    function dt(dd, Od) {
      let md = `$survey_${Od}/${dd.id}`;
      return dd.current_iteration && dd.current_iteration > 0 && (md = `$survey_${Od}/${dd.id}/${dd.current_iteration}`), md
    }

    function Ot(dd) {
      var Od;
      return !!(null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.events) || void 0 === Od || null === (Od = Od.values) || void 0 === Od ? void 0 : Od.length)
    }
    const mt = (dd, Od) => {
        if (!(dd => {
            try {
              new RegExp(dd)
            } catch (dd) {
              return !1
            }
            return !0
          })(Od)) return !1;
        try {
          return new RegExp(Od).test(dd)
        } catch (dd) {
          return !1
        }
      },
      Wt = dd => dd.toLowerCase(),
      Ft = {
        exact: (dd, Od) => Od.some((Od => dd.some((dd => Od === dd)))),
        is_not: (dd, Od) => Od.every((Od => dd.every((dd => Od !== dd)))),
        regex: (dd, Od) => Od.some((Od => dd.some((dd => mt(Od, dd))))),
        not_regex: (dd, Od) => Od.every((Od => dd.every((dd => !mt(Od, dd))))),
        icontains: (dd, Od) => Od.map(Wt).some((Od => dd.map(Wt).some((dd => Od.includes(dd))))),
        not_icontains: (dd, Od) => Od.map(Wt).every((Od => dd.map(Wt).every((dd => !Od.includes(dd))))),
        gt: (dd, Od) => Od.some((Od => {
          const md = parseFloat(Od);
          return !isNaN(md) && dd.some((dd => md > parseFloat(dd)))
        })),
        lt: (dd, Od) => Od.some((Od => {
          const md = parseFloat(Od);
          return !isNaN(md) && dd.some((dd => md < parseFloat(dd)))
        }))
      };

    function Rt(dd, Od) {
      return !dd || Object.entries(dd).every((dd => {
        let [md, Wd] = dd;
        const Fd = null == Od ? void 0 : Od[md];
        if (null == Fd) return !1;
        const Rd = Ft[Wd.operator];
        return !!Rd && Rd(Wd.values.map(String), [String(Fd)])
      }))
    }

    function Xt(dd, Od, md) {
      return Lh({
        distinct_id: dd,
        userPropertiesToSet: Od,
        userPropertiesToSetOnce: md
      })
    }
    const Kt = "custom",
      ht = "i.posthog.com",
      vt = /^\/static\//,
      Qt = ["/s/", "/e/", "/i/"];
    var tt = class {
      constructor(dd) {
        this._regionCache = {}, this.instance = dd
      }
      get apiHost() {
        const dd = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === dd ? "https://us.i.posthog.com" : dd
      }
      get flagsApiHost() {
        const dd = this.instance.config.flags_api_host;
        return dd ? dd.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var dd;
        let Od = null === (dd = this.instance.config.ui_host) || void 0 === dd ? void 0 : dd.replace(/\/$/, "");
        return Od || (Od = this.apiHost.replace(`.${ht}`, ".posthog.com")), "https://app.posthog.com" === Od ? "https://us.posthog.com" : Od
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Kt), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(dd) {
        if (!vt.test(dd)) return;
        const Od = this.instance.config.asset_host;
        return "string" == typeof Od && Od.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(dd) {
        const Od = Ph(dd);
        return Od ? Od.protocol + "//" + Od.host + Od.pathname : void 0
      }
      _prepareEndpoint(dd, Od, md) {
        if ("ui" === dd) return md;
        let Wd = md;
        const Fd = this.instance.config.rewriteRequestPath;
        if (Fd) {
          var Rd;
          const dd = (null === (Rd = Ph(md)) || void 0 === Rd ? void 0 : Rd.href) || md;
          Wd = Fd(new URL(dd)).toString()
        }
        if (Fd && "api" === dd && Qt.some((dd => 0 === Od.indexOf(dd)))) {
          const dd = this._urlKey(Wd);
          if (dd) {
            const Od = this.apiHost;
            let md = this._ingestionEndpoints;
            (null == md ? void 0 : md.apiHost) === Od && md.rewriteRequestPath === Fd || (md = {
              apiHost: Od,
              rewriteRequestPath: Fd,
              urls: new Set
            }, this._ingestionEndpoints = md), md.urls.add(dd)
          }
        }
        return Wd
      }
      isIngestionEndpoint(dd) {
        const Od = this._ingestionEndpoints,
          md = this._urlKey(dd);
        return (null == Od ? void 0 : Od.apiHost) === this.apiHost && Od.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!md && Od.urls.has(md)
      }
      endpointFor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (Od && (Od = "/" === Od[0] ? Od : `/${Od}`), "ui" === dd) return this._prepareEndpoint(dd, Od, this.uiHost + Od);
        if ("flags" === dd) return this._prepareEndpoint(dd, Od, this.flagsApiHost + Od);
        if ("assets" === dd) {
          const md = this._staticAssetHostOverride(Od);
          if (md) return this._prepareEndpoint(dd, Od, `${md}${Od}`)
        }
        if (this.region === Kt) return this._prepareEndpoint(dd, Od, this.apiHost + Od);
        const md = ht + Od;
        switch (dd) {
          case "assets":
            return this._prepareEndpoint(dd, Od, `https://${this.region}-assets.${md}`);
          case "api":
            return this._prepareEndpoint(dd, Od, `https://${this.region}.${md}`)
        }
      }
    };
    const ot = PX("[Surveys]"),
      Nt = dd => {
        try {
          const Od = (dd => ((dd, Od) => `seenSurvey_${function(dd){return dd.current_iteration&&dd.current_iteration>0?`${dd.id}_${dd.current_iteration}`:dd.id}(Od)}`)(0, dd))(dd);
          if (localStorage.getItem(Od)) return;
          localStorage.setItem(Od, "true")
        } catch (dd) {
          ot.error("Failed to persist survey seen state", dd)
        }
      },
      qt = [gv, av, wv],
      Ht = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: sv
      },
      yt = PX("[PostHog ExternalIntegrations]"),
      bt = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var Tt = class {
      constructor(dd) {
        this._instance = dd
      }
      _loadScript(dd, Od) {
        var md, Wd;
        null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this._instance, dd, (dd => {
          if (dd) return yt.error("failed to load script", dd);
          Od()
        }))
      }
      startIfEnabledOrStop() {
        var dd;
        for (const [Fd, Rd] of Object.entries(null !== (dd = this._instance.config.integrations) && void 0 !== dd ? dd : {})) {
          var Od, md, Wd;
          Rd && !(null === (Od = Qm.__PosthogExtensions__) || void 0 === Od || null === (Od = Od.integrations) || void 0 === Od ? void 0 : Od[Fd]) && this._loadScript(bt[Fd], (() => {
            var dd;
            null === (dd = Qm.__PosthogExtensions__) || void 0 === dd || null === (dd = dd.integrations) || void 0 === dd || null === (dd = dd[Fd]) || void 0 === dd || dd.start(this._instance)
          })), !Rd && (null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (md = md.integrations) || void 0 === md ? void 0 : md[Fd]) && (null === (Wd = Qm.__PosthogExtensions__) || void 0 === Wd || null === (Wd = Wd.integrations) || void 0 === Wd || null === (Wd = Wd[Fd]) || void 0 === Wd || Wd.stop())
        }
      }
    };
    const pt = "autocapture",
      Yt = "featureFlags",
      gt = "logs",
      wt = "surveys";
    var Et = class {
        constructor(dd) {
          this._instance = dd
        }
        initialize() {}
        get(dd) {
          const Od = this._instance.persistence;
          if ("string" == typeof dd) return null == Od ? void 0 : Od.get_property(dd);
          const md = {};
          for (const Wd of dd) {
            const dd = null == Od ? void 0 : Od.get_property(Wd);
            Um(dd) || (md[Wd] = dd)
          }
          return md
        }
        set(dd, Od) {
          var md;
          null === (md = this._instance.persistence) || void 0 === md || md.register("string" == typeof dd ? {
            [dd]: Od
          } : dd)
        }
        remove(dd) {
          var Od;
          null === (Od = this._instance.persistence) || void 0 === Od || Od.unregister(dd)
        }
      },
      Jt = class {
        constructor(dd) {
          this.instance = dd, this._logger = LX, this.kv = new Et(dd), this.onEvent = dd => Vv(this.instance._addCaptureHook(((Od, md) => {
            if (md) try {
              dd({
                event: Od,
                properties: md.properties
              })
            } catch (dd) {
              this._logger.error("Browser extension event listener failed", dd)
            }
          }))), this.onRemoteConfig = dd => {
            const Od = Od => {
                try {
                  dd(Od)
                } catch (dd) {
                  this._logger.error("Browser extension remote config listener failed", dd)
                }
              },
              md = this.instance._internalEventEmitter.on("extensionsRemoteConfig", Od);
            return this.instance._lastRemoteConfig && Od(this.instance._lastRemoteConfig), Vv(md)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var dd;
          return null !== (dd = this.instance.get_property("$device_id")) && void 0 !== dd ? dd : this.distinctId
        }
        get deviceId() {
          const dd = this.instance.get_property(Jd);
          return "string" == typeof dd ? dd : void 0
        }
        get library() {
          return {
            name: Rd.LIB_NAME,
            version: Rd.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var dd, Od;
          return null !== (dd = null === (Od = this.instance.persistence) || void 0 === Od ? void 0 : Od.get_initial_props()) && void 0 !== dd ? dd : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var dd, Od, md, Wd, Fd;
            const Rd = null === (dd = this.instance.sessionManager) || void 0 === dd ? void 0 : dd.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (Od = null == Rd ? void 0 : Rd.sessionId) && void 0 !== Od ? Od : "",
              windowId: null !== (md = null == Rd ? void 0 : Rd.windowId) && void 0 !== md ? md : "",
              sessionStartTimestamp: null !== (Wd = null == Rd ? void 0 : Rd.sessionStartTimestamp) && void 0 !== Wd ? Wd : 0,
              lastActivityTimestamp: null !== (Fd = null == Rd ? void 0 : Rd.lastActivityTimestamp) && void 0 !== Fd ? Fd : 0
            }
          } catch (dd) {
            return {
              sessionId: "",
              windowId: "",
              sessionStartTimestamp: 0,
              lastActivityTimestamp: 0
            }
          }
        }
        get isOptedOut() {
          return this.instance.has_opted_out_capturing()
        }
        get canCapture() {
          return am(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(dd) {
          let Od;
          switch (dd) {
            case Yt:
            case "featureFlagsCommon":
              Od = this.instance.featureFlags;
              break;
            case gt:
              Od = this.instance.logs;
              break;
            case wt:
              Od = this.instance.surveys;
              break;
            case pt:
              Od = this.instance.autocapture
          }
          return Od
        }
        capture(dd, Od, md) {
          md ? this.instance.capture(dd, Od, {
            timestamp: md.timestamp,
            uuid: md.uuid,
            $set: md.set,
            $set_once: md.setOnce
          }) : this.instance.capture(dd, Od)
        }
        registerDynamicEventProperties(dd) {
          return Vv(this.instance._registerExtensionEventProperties(dd))
        }
        sendRequest(dd) {
          var Od = this;
          return Im((function*(dd) {
            let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var Wd;
            const Fd = null !== (Wd = md.target) && void 0 !== Wd ? Wd : "api",
              Rd = Od.instance.requestRouter.endpointFor(Fd, dd),
              Xd = "api" === Fd && "/i/v1/logs" === dd,
              Kd = {
                method: md.method,
                url: md.query ? JQ(Rd, md.query) : Rd,
                data: md.body,
                headers: md.headers,
                timeout: md.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: md.transport,
                compression: md.compression,
                compressionFallback: "flags" === md.target && "best-available" === md.compression ? om.Base64 : void 0,
                timestampMode: md.sentAt
              };
            return Xd && (Kd.batchKey = "logs"), "sendBeacon" === md.transport ? (Od.instance._send_request(Kd), {
              statusCode: 202
            }) : new Promise((dd => {
              Kd.callback = dd, Od.instance._send_request(Kd)
            }))
          })).apply(this, arguments)
        }
      };
    const Ut = {};
    let xt = 0;
    const Bt = () => {},
      St = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      st = "Surveys module not available",
      ut = "sanitize_properties is deprecated. Use before_send instead",
      Vt = "Invalid value for property_denylist config: ",
      it = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      At = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      rt = dd => "$" === dd.charAt(0) && !Hm(At, dd),
      Gt = /^[A-Za-z0-9_-]{1,400}$/,
      nt = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      Lt = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      Pt = ["token", "distinct_id", BO],
      zt = "posthog",
      ct = dd => {
        const Od = {};
        return dd && "unset" !== dd ? ("2025-11-30" > dd || (Od.strictMinimumDuration = !0), "2026-05-30" > dd || (Od.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > dd || (Od.streamNetworkBody = !0), "2026-08-30" > dd || (Od.captureJsonLd = !0), Od) : Od
      },
      jt = dd => {
        var Od;
        return gF({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: ZX(null == Om ? void 0 : Om.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: Bt,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != dd ? dd : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: mm && xm(null == mm ? void 0 : mm.search) && -1 !== mm.search.indexOf("__posthog_debug=true") || !1,
          cookie_expiration: 365,
          upgrade: !1,
          disable_session_recording: !1,
          disable_persistence: !1,
          disable_web_experiments: !0,
          disable_surveys: !1,
          disable_surveys_automatic_display: !1,
          disable_conversations: !1,
          disable_product_tours: !1,
          disableDeviceModel: !1,
          reuseAnonymousId: !1,
          disable_external_dependency_loading: !1,
          strict_script_versioning: "fallback",
          enable_recording_console_log: void 0,
          secure_cookie: "https:" === (null == fO || null === (Od = fO.location) || void 0 === Od ? void 0 : Od.protocol),
          ip: !1,
          opt_out_capturing_by_default: !1,
          opt_out_persistence_by_default: !1,
          opt_out_useragent_filter: !1,
          opt_out_capturing_persistence_type: "localStorage",
          consent_persistence_name: null,
          opt_out_capturing_cookie_prefix: null,
          opt_in_site_apps: !1,
          property_denylist: [],
          respect_dnt: !1,
          sanitize_properties: null,
          request_headers: {},
          request_batching: !0,
          properties_string_max_length: 65535,
          mask_all_element_attributes: !1,
          mask_all_text: !1,
          mask_personal_data_properties: !1,
          custom_personal_data_properties: [],
          advanced_disable_flags: !1,
          advanced_disable_decide: !1,
          advanced_disable_feature_flags: !1,
          advanced_disable_feature_flags_on_first_load: !1,
          advanced_only_evaluate_survey_feature_flags: !1,
          advanced_feature_flags_dedup_per_session: !1,
          advanced_enable_surveys: !1,
          advanced_disable_toolbar_metrics: !1,
          feature_flag_request_timeout_ms: 3e3,
          feature_flag_request_max_retries: 1,
          surveys_request_timeout_ms: 1e4,
          on_request_error(dd) {
            LX.error("Bad HTTP status: " + dd.statusCode + " " + dd.text)
          },
          get_device_id: dd => dd,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: eO,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: Bt
        }, (dd => ({
          rageclick: dd && dd >= "2026-05-30" ? {
            content_ignorelist: lK,
            ignore_text_selection: !0
          } : !dd || "2025-11-30" > dd || {
            content_ignorelist: !0
          },
          capture_pageview: !dd || "2025-05-24" > dd || "history_change",
          session_recording: ct(dd),
          external_scripts_inject_target: dd && dd >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: dd && dd >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: dd && dd >= "2026-05-30" ? 250 : 0,
          split_storage: !(!dd || "2026-05-30" > dd),
          detect_google_search_app: !(!dd || "2026-05-30" > dd),
          disable_capture_url_hashes: !(!dd || "2026-06-25" > dd),
          cookieWinsOnConflict: !(!dd || "unset" === dd || "2026-08-29" > dd)
        }))(dd))
      },
      Dt = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      et = dd => {
        const Od = {};
        for (const [Fd, Rd] of Dt) Um(dd[Fd]) || (Od[Rd] = dd[Fd]);
        const md = jX({}, Od, dd),
          Wd = dd.__preview_external_dependency_versioned_paths;
        return Um(Wd) || (Um(dd.strict_script_versioning) && (md.strict_script_versioning = !!Wd), xm(Wd) && Um(dd.asset_host) && (md.asset_host = Wd)), wm(dd.property_blacklist) && (Um(dd.property_denylist) ? md.property_denylist = dd.property_blacklist : wm(dd.property_denylist) ? md.property_denylist = [...dd.property_blacklist, ...dd.property_denylist] : LX.error(Vt + dd.property_denylist)), md
      };
    var It = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(dd) {
          LX.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = dd
        }
      },
      lt = class dd {
        _removeExtension(dd) {
          if (!dd) return;
          const Od = this._extensions.indexOf(dd); - 1 !== Od && this._extensions.splice(Od, 1)
        }
        _replaceExtension(dd, Od) {
          var md;
          return this._removeExtension(dd), this._extensions.push(Od), null === (md = Od.initialize) || void 0 === md || md.call(Od), Od
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const dd = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!dd && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let Od, md, Wd;
          dd ? (Od = `persistence is set to '${this.config.persistence}'`, md = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", Wd = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (Od = "persistence is disabled (disable_persistence is true)", md = "on every page load", Wd = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${Od} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${md}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${Wd}`)
        }
        _syncCookielessIdentity() {
          const dd = this.persistence;
          if (!dd || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || dd.load(!0);
          const Od = this.get_distinct_id();
          if (!Od || "$posthog_cookieless" === Od) {
            const Od = this.config.get_device_id(RK());
            this.register({
              distinct_id: Od,
              $device_id: Od
            }), dd.set_property(YO, jO)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var dd, Od;
          return null !== (dd = null === (Od = this.featureFlags) || void 0 === Od ? void 0 : Od.hasLoadedFlags) && void 0 !== dd && dd
        }
        get flagsEndpointWasHit() {
          var dd, Od;
          return null !== (dd = null === (Od = this.featureFlags) || void 0 === Od ? void 0 : Od.hasLoadedFlags) && void 0 !== dd && dd
        }
        constructor() {
          var Od;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new It, this._personProcessingSetOncePropertiesSent = !1, this.version = Rd.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new lQ, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = jt(), this.SentryIntegration = Bh, this.sentryIntegration = dd => function(dd, Od) {
            const md = xh(dd, Od);
            return {
              name: Uh,
              processEvent: dd => md(dd)
            }
          }(this, dd), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new DQ(this), this.pageViewManager = new Sh(this), this.rateLimiter = new nv(this), this.requestRouter = new tt(this), this.consent = new xK(this), this.externalIntegrations = new Tt(this);
          const md = null !== (Od = dd.__defaultExtensionClasses) && void 0 !== Od ? Od : {};
          this.featureFlags = md.featureFlags && new md.featureFlags(this), this.toolbar = md.toolbar && new md.toolbar(this), this.surveys = md.surveys && new md.surveys(this), this.conversations = md.conversations && new md.conversations(this), this.logs = md.logs && new md.logs(this), this.metrics = md.metrics && new md.metrics(this), this.experiments = md.experiments && new md.experiments(this), this.exceptions = md.exceptions && new md.exceptions(this), this.people = {
            set: (dd, Od, md) => {
              const Wd = xm(dd) ? {
                [dd]: Od
              } : dd;
              this.setPersonProperties(Wd), null == md || md({})
            },
            set_once: (dd, Od, md) => {
              const Wd = xm(dd) ? {
                [dd]: Od
              } : dd;
              this.setPersonProperties(void 0, Wd), null == md || md({})
            }
          }, this.on("eventCaptured", (dd => LX.info(`send "${null==dd?void 0:dd.event}"`, dd)))
        }
        init(Od, md, Wd) {
          if (Wd && Wd !== zt) {
            var Fd;
            const Rd = null !== (Fd = Ut[Wd]) && void 0 !== Fd ? Fd : new dd;
            return Rd._init(Od, md, Wd), Ut[Wd] = Rd, Ut[zt][Wd] = Rd, Rd
          }
          return this._init(Od, md, Wd)
        }
        _init(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 ? arguments[2] : void 0;
          var Wd, Fd, Xd;
          const Kd = xm(dd) ? dd.trim() : "";
          if (!Kd) return LX.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var hd;
          if (this.__loaded) return Kd !== (null === (hd = this.config) || void 0 === hd ? void 0 : hd.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${Kd}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = jt(Od.defaults), Od.debug = this._checkLocalStorageForDebug(Od.debug), this._originalUserConfig = Od, this._triggered_notifs = [], Od.person_profiles ? this._initialPersonProfilesConfig = Od.person_profiles : Od.process_person && (this._initialPersonProfilesConfig = Od.process_person);
          const vd = jt(Od.defaults),
            Qd = et(Od),
            td = jX({}, vd, Qd, {
              name: md,
              token: Kd
            });
          Em(vd.rageclick) && Em(Qd.rageclick) && (td.rageclick = jX({}, vd.rageclick, Qd.rageclick)), Em(vd.session_recording) && Em(Qd.session_recording) && (td.session_recording = jX({}, vd.session_recording, Qd.session_recording)), this.set_config(td), this.config.on_xhr_error && LX.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = Od.disable_compression ? void 0 : Tv.GZipJS;
          const od = this._is_persistence_disabled(),
            Nd = !this._inCookielessMode();
          if (this.persistence = new bv(this.config, od, !0, Nd), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new bv(gF(gF({}, this.config), {}, {
              persistence: "sessionStorage"
            }), od, !1, Nd), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !od && UK._is_supported()) {
            const dd = UK._parse(this._sessionRegisteredPropertiesStorageKey);
            wm(dd) && dd.forEach((dd => {
              xm(dd) && this._sessionRegisteredPropKeys.add(dd)
            }))
          } else UK._remove(this._sessionRegisteredPropertiesStorageKey);
          const qd = gF({}, this.persistence.props),
            Hd = gF({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new zQ(((dd, Od) => this._send_retriable_request(dd, Od)), this.config.request_queue_config), this._retryQueue = new jQ(this), this.__request_queue = [];
          const yd = this._inCookielessMode();
          yd || (this.sessionManager = new kQ(this), this.sessionPropsManager = new IQ(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((dd, Od, md) => {
            ((null == md ? void 0 : md.activityTimeout) || (null == md ? void 0 : md.sessionPastMaximumLength) || (null == md ? void 0 : md.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (LX.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(yd)
          }), 0)) : (LX.info("Initializing extensions synchronously"), this._initExtensions(yd)), Rd.DEBUG = Rd.DEBUG || this.config.debug, Rd.DEBUG && LX.info("Starting in debug mode", {
            this: this,
            config: Od,
            thisC: gF({}, this.config),
            p: qd,
            s: Hd
          }), this.config.identity_distinct_id && !(null === (Wd = Od.bootstrap) || void 0 === Wd ? void 0 : Wd.distinctID) && (Od.bootstrap = gF(gF({}, Od.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const bd = null === (Fd = Od.bootstrap) || void 0 === Fd ? void 0 : Fd.distinctID;
          if (this._hasStableInitialDistinctId = !!bd && !Bm(bd), null === (Xd = Od.bootstrap) || void 0 === Xd ? void 0 : Xd.distinctID) {
            const dd = Od.bootstrap.distinctID,
              md = this.get_distinct_id(),
              Wd = this.persistence.get_property(YO);
            if (Od.bootstrap.isIdentifiedID && null != md && md !== dd && "anonymous" === Wd) this.identify(dd);
            else if (Od.bootstrap.isIdentifiedID && null != md && md !== dd && "identified" === Wd) LX.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const md = this.config.get_device_id(RK()),
                Wd = Od.bootstrap.isIdentifiedID ? md : dd;
              this.persistence.set_property(YO, Od.bootstrap.isIdentifiedID ? DO : jO), this.register({
                distinct_id: dd,
                $device_id: Wd
              })
            }
          }
          if (yd) this.register_once({
            distinct_id: xO,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const dd = this.config.get_device_id(RK());
            this.register_once({
              distinct_id: dd,
              $device_id: dd
            }, ""), this.persistence.set_property(YO, jO)
          }
          return kX(fO, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), kX(fO, "pageshow", (() => {
            var dd;
            this._isPageUnloading = !1, this._isShutdown || null === (dd = this._retryQueue) || void 0 === dd || dd.resume()
          })), Od.segment ? Jh(this, (() => this._loaded())) : this._loaded(), am(this.config._onCapture) && this.config._onCapture !== Bt && (LX.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (dd => this.config._onCapture(dd.event, dd)))), this.config.ip && LX.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return MQ.apply(this, arguments)
          }().then((dd => {
            dd && this.register({
              [Ud]: dd
            })
          })).catch(Bt), this
        }
        _isSharedExtension(dd) {
          const Od = dd;
          return xm(Od.name) && am(Od.setup)
        }
        _enrollExtension(dd, Od) {
          var md = this;
          this._isSharedExtension(dd) ? Od.push(Im((function*() {
            try {
              yield dd.setup(md._getBrowserClientAdapter())
            } catch (md) {
              LX.error(`Failed to set up extension "${dd.name}"`, md);
              try {
                var Od;
                yield null === (Od = dd.dispose) || void 0 === Od ? void 0 : Od.call(dd)
              } catch (Od) {
                LX.error(`Failed to dispose extension "${dd.name}"`, Od)
              }
            }
          }))) : this._extensions.push(dd)
        }
        _enrollFeatureFlags() {
          var Od, md, Wd, Fd = this;
          const Rd = null !== (Od = null === (md = this.config.__extensionClasses) || void 0 === md ? void 0 : md.featureFlags) && void 0 !== Od ? Od : null === (Wd = dd.__defaultExtensionClasses) || void 0 === Wd ? void 0 : Wd.featureFlags;
          var Xd, Kd, hd;
          if (Rd)
            if (this.featureFlags && this.featureFlags instanceof Rd || (null === (Xd = this._featureFlagsReloadingUnsubscribe) || void 0 === Xd || Xd.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new Rd(this)), am(this.featureFlags.onReloading) && am(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const dd = this.featureFlags;
                Im((function*() {
                  try {
                    yield dd.setup(Fd._getBrowserClientAdapter())
                  } catch (Od) {
                    LX.error("Failed to set up feature flags", Od);
                    const Wd = Fd._featureFlagsReloadingUnsubscribe;
                    Fd._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == Wd || Wd()
                    } catch (dd) {
                      LX.error("Failed to unsubscribe feature flag reloading", dd)
                    }
                    try {
                      yield dd.dispose()
                    } catch (dd) {
                      LX.error("Failed to dispose feature flags", dd)
                    }
                  }
                }))()
              }
            } else null === (Kd = (hd = this.featureFlags).initialize) || void 0 === Kd || Kd.call(hd)
        }
        _initExtensions(Od) {
          const md = performance.now(),
            Wd = gF(gF({}, dd.__defaultExtensionClasses), this.config.__extensionClasses),
            Fd = [];
          var Rd, Xd, Kd, hd, vd, Qd, td, od;
          Wd.exceptions && this._extensions.push(this.exceptions = null !== (Rd = this.exceptions) && void 0 !== Rd ? Rd : new Wd.exceptions(this)), Wd.historyAutocapture && this._extensions.push(this.historyAutocapture = new Wd.historyAutocapture(this)), Wd.tracingHeaders && this._extensions.push(this.tracingHeaders = new Wd.tracingHeaders(this)), Wd.siteApps && this._extensions.push(this.siteApps = new Wd.siteApps(this)), Wd.sessionRecording && !Od && this._extensions.push(this.sessionRecording = new Wd.sessionRecording(this)), this.config.disable_scroll_properties || Fd.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), Wd.autocapture && this._enrollExtension(this.autocapture = new Wd.autocapture(this), Fd), Wd.surveys && this._enrollExtension(this.surveys = null !== (Xd = this.surveys) && void 0 !== Xd ? Xd : new Wd.surveys(this), Fd), Wd.logs && this._enrollExtension(this.logs = null !== (Kd = this.logs) && void 0 !== Kd ? Kd : new Wd.logs(this), Fd), Wd.metrics && this._extensions.push(this.metrics = null !== (hd = this.metrics) && void 0 !== hd ? hd : new Wd.metrics(this)), Wd.conversations && this._extensions.push(this.conversations = null !== (vd = this.conversations) && void 0 !== vd ? vd : new Wd.conversations(this)), Wd.productTours && this._extensions.push(this.productTours = new Wd.productTours(this)), Wd.heatmaps && this._extensions.push(this.heatmaps = new Wd.heatmaps(this)), Wd.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new Wd.webVitalsAutocapture(this)), Wd.exceptionObserver && this._extensions.push(this.exceptionObserver = new Wd.exceptionObserver(this)), Wd.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new Wd.deadClicksAutocapture(this, wh)), Wd.toolbar && this._extensions.push(this.toolbar = null !== (Qd = this.toolbar) && void 0 !== Qd ? Qd : new Wd.toolbar(this)), Wd.experiments && this._extensions.push(this.experiments = null !== (td = this.experiments) && void 0 !== td ? td : new Wd.experiments(this)), Wd.webMCP && this._extensions.push(this.webMCP = null !== (od = this.webMCP) && void 0 !== od ? od : new Wd.webMCP(this)), this._extensions.forEach((dd => {
            dd.initialize && Fd.push((() => {
              var Od;
              null === (Od = dd.initialize) || void 0 === Od || Od.call(dd)
            }))
          })), Fd.push((() => {
            if (this._pendingRemoteConfig) {
              const dd = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((Od => {
                var md;
                return null === (md = Od.onRemoteConfig) || void 0 === md ? void 0 : md.call(Od, dd)
              }))
            }
          })), this._processInitTaskQueue(Fd, md)
        }
        _processInitTaskQueue(dd, Od) {
          for (; dd.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - Od >= 30 && dd.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(dd, Od)
            }), 0));
            const md = dd.shift();
            if (md) try {
              md()
            } catch (dd) {
              LX.error("Error initializing extension:", dd)
            }
          }
          const md = Math.round(performance.now() - Od);
          this.register_for_session({
            [SO]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [sO]: md
          }), this.config.__preview_deferred_init_extensions && LX.info(`PostHog extensions initialized (${md}ms)`)
        }
        _onRemoteConfig(dd) {
          if (!Om || !Om.body) return LX.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(dd)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = dd), this._lastRemoteConfig = dd, this.compression = void 0, dd.ok) {
            var Od;
            const md = dd.config;
            md.supportedCompression && !this.config.disable_compression && (this.compression = Hm(md.supportedCompression, Tv.GZipJS) ? Tv.GZipJS : Hm(md.supportedCompression, Tv.Base64) ? Tv.Base64 : void 0), (null === (Od = md.analytics) || void 0 === Od ? void 0 : Od.endpoint) && (this.analyticsDefaultEndpoint = md.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : eO
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", dd), this._extensions.forEach((Od => {
            var md;
            return null === (md = Od.onRemoteConfig) || void 0 === md ? void 0 : md.call(Od, dd)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (dd) {
            LX.critical("`loaded` function failed", dd)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == mm ? void 0 : mm.hostname)) {
            const dd = mm.hostname,
              Od = this.config.internal_or_test_user_hostname;
            ("string" == typeof Od ? dd === Od : Od.test(dd)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new Pv(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var dd;
          this.is_capturing() && this.config.request_batching && (null === (dd = this._requestQueue) || void 0 === dd || dd.enable())
        }
        _dom_loaded() {
          this.is_capturing() && zX(this.__request_queue, (dd => this._send_retriable_request(dd))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var dd, Od, md, Wd, Fd, Rd;
          this._isPageUnloading = !0, null === (dd = this.surveys) || void 0 === dd || null === (Od = dd.handlePageUnload) || void 0 === Od || Od.call(dd), null === (md = this.metrics) || void 0 === md || md.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(CO), null === (Wd = this.logs) || void 0 === Wd || Wd.flushLogs("sendBeacon"), null === (Fd = this._requestQueue) || void 0 === Fd || Fd.unload(), null === (Rd = this._retryQueue) || void 0 === Rd || Rd.unload()) : this._shouldCapturePageleave() && this.capture(CO, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(dd) {
          PQ(this, dd)
        }
        _send_retriable_request(dd, Od) {
          this._retryQueue ? this._retryQueue.retriableRequest(dd, Od) : this._send_request(Od ? gF(gF({}, dd), {}, {
            transport: Od
          }) : dd)
        }
        _execute_array(dd) {
          xt++;
          try {
            let Od;
            const md = [],
              Wd = [],
              Fd = [];
            zX(dd, (dd => {
              if (dd)
                if (Od = dd[0], wm(Od)) Fd.push(dd);
                else if (am(dd)) try {
                dd.call(this)
              } catch (Od) {
                LX.error("Error executing queued PostHog call", dd, Od)
              } else wm(dd) && "alias" === Od ? md.push(dd) : wm(dd) && -1 !== Od.indexOf("capture") && am(this[Od]) ? Fd.push(dd) : Wd.push(dd)
            }));
            const Rd = function(dd, Od) {
              zX(dd, (function(dd) {
                try {
                  if (wm(dd[0])) {
                    let md = Od;
                    cX(dd, (function(dd) {
                      md = md[dd[0]].apply(md, dd.slice(1))
                    }))
                  } else Od[dd[0]].apply(Od, dd.slice(1))
                } catch (Od) {
                  LX.error("Error executing queued PostHog call", dd, Od)
                }
              }))
            };
            Rd(md, this), Rd(Wd, this), Rd(Fd, this)
          } finally {
            xt--
          }
        }
        push(Od) {
          if (xt > 0 && wm(Od) && xm(Od[0])) {
            const md = dd.prototype[Od[0]];
            am(md) && md.apply(this, Od.slice(1))
          } else this._execute_array([Od])
        }
        get _facebookClickIdChannel() {
          return {
            property: Sd,
            persistenceKey: sd,
            cookieName: "_fbc",
            pattern: nt,
            register: (dd, Od) => {
              var md;
              return null === (md = this.persistence) || void 0 === md ? void 0 : md.register({
                [sd]: {
                  value: dd,
                  delivered: Od
                }
              })
            },
            unregister: () => {
              var dd;
              return null === (dd = this.persistence) || void 0 === dd ? void 0 : dd.unregister(sd)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: ud,
            persistenceKey: Vd,
            cookieName: "_fbp",
            pattern: Lt,
            register: (dd, Od) => {
              var md;
              return null === (md = this.persistence) || void 0 === md ? void 0 : md.register({
                [Vd]: {
                  value: dd,
                  delivered: Od
                }
              })
            },
            unregister: () => {
              var dd;
              return null === (dd = this.persistence) || void 0 === dd ? void 0 : dd.unregister(Vd)
            }
          }
        }
        _getPersistedMetaIdentifier(dd) {
          var Od;
          const md = null === (Od = this.persistence) || void 0 === Od ? void 0 : Od.get_property(dd.persistenceKey);
          return xm(md) && dd.pattern.test(md) ? {
            value: md,
            delivered: !1
          } : Em(md) && xm(md.value) && dd.pattern.test(md.value) ? {
            value: md.value,
            delivered: !0 === md.delivered
          } : void 0
        }
        _storeMetaIdentifier(dd, Od, md) {
          return Od === (null == md ? void 0 : md.value) ? {
            value: Od,
            pending: !md.delivered
          } : (dd.register(Od, !1), {
            value: Od,
            pending: !0
          })
        }
        _readMetaCookie(dd) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const Od = MX(dd.cookieName);
          return xm(Od) && dd.pattern.test(Od) ? Od : void 0
        }
        _updateFacebookClickId(dd, Od, md, Wd) {
          if (!this.persistence) return;
          const Fd = this._facebookClickIdChannel;
          this.persistence.refreshKey(Fd.persistenceKey);
          const Rd = this._getPersistedMetaIdentifier(Fd);
          if (Wd) return void Fd.unregister();
          if (md) return xm(Od) && nt.test(Od) ? this._storeMetaIdentifier(Fd, Od, Rd) : void Fd.unregister();
          const Xd = xm(dd) && Gt.test(dd) ? dd : void 0,
            Kd = this._readMetaCookie(Fd);
          return Kd && ((dd, Od, md) => {
            const Wd = dd.split(".");
            if (Od) return Wd[3] === Od;
            if (!md) return !0;
            const Fd = md.value.split(".");
            return Wd[3] === Fd[3] || Number(Wd[2]) > Number(Fd[2])
          })(Kd, Xd, Rd) ? this._storeMetaIdentifier(Fd, Kd, Rd) : Xd ? (null == Rd ? void 0 : Rd.value.split(".")[3]) === Xd ? {
            value: Rd.value,
            pending: !Rd.delivered
          } : this._storeMetaIdentifier(Fd, `fb.1.${Date.now()}.${Xd}`, Rd) : Rd ? {
            value: Rd.value,
            pending: !Rd.delivered
          } : void 0
        }
        _updateFacebookBrowserId(dd, Od, md) {
          if (!this.persistence) return;
          const Wd = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(Wd.persistenceKey);
          const Fd = this._getPersistedMetaIdentifier(Wd);
          if (md) return void Wd.unregister();
          if (Od) return xm(dd) && Lt.test(dd) ? this._storeMetaIdentifier(Wd, dd, Fd) : void Wd.unregister();
          const Rd = this._readMetaCookie(Wd);
          return Rd ? this._storeMetaIdentifier(Wd, Rd, Fd) : Fd ? {
            value: Fd.value,
            pending: !Fd.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(dd, Od) {
          if (!this.persistence) return;
          this.persistence.refreshKey(dd.persistenceKey);
          const md = this._getPersistedMetaIdentifier(dd);
          (null == md ? void 0 : md.value) !== Od || md.delivered || dd.register(Od, !0)
        }
        capture(dd, Od, md) {
          var Wd, Fd;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void LX.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (Um(dd) || !xm(dd)) return void LX.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === dd && this._inCookielessMode()) return;
          const Rd = !this.config.opt_out_useragent_filter && this._is_bot();
          if (Rd && !this.config.__preview_capture_bot_pageviews) return;
          const Xd = (null == md ? void 0 : md.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == Xd ? void 0 : Xd.isRateLimited) return void LX.critical("This capture call is ignored due to client rate limiting.");
          let Kd;
          (null == Od ? void 0 : Od.$current_url) && !xm(null == Od ? void 0 : Od.$current_url) && (LX.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == Od || delete Od.$current_url), "$exception" !== dd || (null == md ? void 0 : md._originatedFromCaptureException) || LX.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (Kd = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const hd = new Date,
            vd = (null == md ? void 0 : md.timestamp) || hd,
            Qd = tF(null == md ? void 0 : md.uuid, RK);
          let td = {
            uuid: Qd,
            event: dd,
            properties: this.calculateEventProperties(dd, Od || {}, vd, Qd)
          };
          "$pageview" === dd && this.config.__preview_capture_bot_pageviews && Rd && (td.event = "$bot_pageview", td.properties.$browser_type = "bot"), Xd && (td.properties.$lib_rate_limit_remaining_tokens = Xd.remainingTokens);
          const od = "$feature_flag_called" === dd && !1 === td.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == md ? void 0 : md.$set) && !od && (td.$set = null == md ? void 0 : md.$set);
          const Nd = Em(null == Od ? void 0 : Od.$set) ? Od.$set : void 0,
            qd = wm(null == Od ? void 0 : Od.$unset) ? Od.$unset : [],
            Hd = (null == md ? void 0 : md.$unset) || [],
            yd = dd => {
              var Od;
              const Wd = !!(null == md ? void 0 : md.$set) && dd in md.$set;
              return {
                hasProvided: Wd || !!Nd && dd in Nd,
                provided: Wd ? null == md || null === (Od = md.$set) || void 0 === Od ? void 0 : Od[dd] : null == Nd ? void 0 : Nd[dd],
                unset: -1 !== qd.indexOf(dd) || -1 !== Hd.indexOf(dd)
              }
            },
            bd = yd(Sd),
            Td = yd(ud),
            pd = [{
              channel: this._facebookClickIdChannel,
              hasProvided: bd.hasProvided,
              update: this._updateFacebookClickId(null == Kd ? void 0 : Kd.fbclid, bd.provided, bd.hasProvided, bd.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: Td.hasProvided,
              update: this._updateFacebookBrowserId(Td.provided, Td.hasProvided, Td.unset)
            }];
          for (const {
              channel: Sd,
              hasProvided: ud,
              update: Vd
            }
            of pd) Vd && !0 === td.properties.$process_person_profile && Vd.pending && !ud && !od && (td.$set = gF({
            [Sd.property]: Vd.value
          }, td.$set));
          const Yd = null == md ? void 0 : md.$unset;
          Yd && (td.$unset = Yd);
          const gd = od ? void 0 : this._calculate_set_once_properties(null == md ? void 0 : md.$set_once, dd !== kO, dd === ZO);
          if (gd && (td.$set_once = gd), (null == md ? void 0 : md._noTruncate) || (wd = this.config.properties_string_max_length, td = function(dd, Od) {
              const md = new Set;
              return function dd(Wd, Fd) {
                if (Wd !== Object(Wd)) return Od ? Od(Wd) : Wd;
                if (md.has(Wd)) return;
                let Rd;
                if (md.add(Wd), wm(Wd)) Rd = [], zX(Wd, (Od => {
                  Rd.push(dd(Od))
                }));
                else {
                  const Od = {};
                  cX(Lm(Wd) ? lX(Wd) : Wd, ((Wd, Fd) => {
                    md.has(Wd) || (Od[Fd] = dd(Wd, Fd))
                  })), Rd = Od
                }
                return Rd
              }(dd)
            }(td, (dd => xm(dd) ? dd.slice(0, wd) : dd))), td.timestamp = vd, Um(null == md ? void 0 : md.timestamp) || (td.properties.$event_time_override_provided = !0, td.properties.$event_time_override_system_time = hd), od && (td.properties = function(dd) {
              let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const md = {},
                Wd = Od => {
                  void 0 !== dd[Od] && (md[Od] = dd[Od])
                };
              return TR.forEach(Wd), Od.forEach(Wd), md
            }(td.properties, Pt)), dd === Jv || dd === Uv) {
            const md = null == Od ? void 0 : Od[xv],
              Wd = null == Od ? void 0 : Od[Bv];
            Nt({
              id: md,
              current_iteration: Wd
            }), td.$set = gF(gF({}, td.$set), {}, {
              [dt({
                id: md,
                current_iteration: Wd
              }, dd === Uv ? "responded" : "dismissed")]: !0
            })
          } else dd === Ev && (td.$set = gF(gF({}, td.$set), {}, {
            [Sv]: (new Date).toISOString()
          }));
          var wd;
          if (dd === iv) {
            const dd = null == Od ? void 0 : Od[rv];
            dd && (td.$set = gF(gF({}, td.$set), {}, {
              [`${Av}/${dd}`]: (new Date).toISOString()
            }))
          }
          const Ed = gF(gF({}, td.properties.$set), td.$set);
          if (Jm(Ed) || this.setPersonPropertiesForFlags(Ed), !sm(this.config.before_send)) {
            const dd = this._runBeforeSend(td);
            if (!dd) return;
            td = dd, td.uuid = tF(td.uuid, RK)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && rt(dd) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const Jd = pd.filter((dd => {
            let {
              channel: Od,
              update: md
            } = dd;
            var Wd, Fd, Rd;
            const Xd = null !== (Wd = null === (Fd = td.$set) || void 0 === Fd ? void 0 : Fd[Od.property]) && void 0 !== Wd ? Wd : Em(null === (Rd = td.properties) || void 0 === Rd ? void 0 : Rd.$set) ? td.properties.$set[Od.property] : void 0;
            return (null == md ? void 0 : md.pending) && Xd === md.value
          }));
          this._internalEventEmitter.emit("eventCaptured", td);
          const Ud = null !== (Wd = null == md ? void 0 : md._url) && void 0 !== Wd ? Wd : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            xd = "recordings" === (null == md ? void 0 : md._batchKey) || /\/s\/(?:\?|$)/.test(Ud),
            Bd = gF(gF(gF({
              method: "POST",
              url: Ud,
              data: td,
              compression: "best-available",
              preferSyncCompression: null == md ? void 0 : md.send_instantly,
              timestampMode: xd ? "body" : "capture-body",
              batchKey: null == md ? void 0 : md._batchKey
            }, xd && (null === (Fd = td.properties) || void 0 === Fd ? void 0 : Fd.$session_id) ? {
              batchGroup: td.properties.$session_id + (td.properties.$window_id ? `-${td.properties.$window_id}` : "")
            } : {}), (null == md ? void 0 : md.transport) ? {
              transport: md.transport
            } : {}), Jd.length ? {
              fireCallbackOnDrop: !0,
              callback: dd => {
                if (dd.statusCode >= 200 && 300 > dd.statusCode)
                  for (const {
                      channel: Od,
                      update: md
                    }
                    of Jd) this._markMetaIdentifierDelivered(Od, md.value)
              }
            } : {});
          if (!this.config.request_batching || md && !(null == md ? void 0 : md._batchKey) || (null == md ? void 0 : md.send_instantly)) {
            var sd;
            let dd;
            !Bd.transport && !Bd.callback && Jm(null !== (sd = this.config.request_headers) && void 0 !== sd ? sd : {}) && this._isPageUnloading && (dd = "sendBeacon"), this._send_retriable_request(Bd, dd)
          } else this._requestQueue.enqueue(Bd);
          return td
        }
        _addCaptureHook(dd) {
          return this.on("eventCaptured", (Od => dd(Od.event, Od)))
        }
        getExtension(dd) {
          var Od;
          return null === (Od = this._browserClientAdapter) || void 0 === Od ? void 0 : Od.getExtension(dd)
        }
        _getBrowserClientAdapter() {
          var dd;
          return null !== (dd = this._browserClientAdapter) && void 0 !== dd ? dd : this._browserClientAdapter = new Jt(this)
        }
        _registerExtensionEventProperties(dd) {
          this._extensionEventPropertyProducers.push(dd);
          let Od = !0;
          return () => {
            if (!Od) return;
            Od = !1;
            const md = this._extensionEventPropertyProducers.indexOf(dd); - 1 !== md && this._extensionEventPropertyProducers.splice(md, 1)
          }
        }
        _processCookieIdentityChange() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var Od, md, Wd;
          return !!(null === (Od = this.persistence) || void 0 === Od ? void 0 : Od.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (Wd = this.sessionPersistence) || void 0 === Wd || Wd.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (md = this.featureFlags) || void 0 === md || md.reset(), dd && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(dd, Od, md, Wd, Rd) {
          if (md = md || new Date, !this.persistence || !this.sessionPersistence) return Od;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const Xd = Rd ? void 0 : this.persistence.remove_event_timer(dd);
          let Kd = gF({}, Od);
          if (Kd.token = this.config.token, Kd.$config_defaults = this.config.defaults, this._inCookielessMode() && (Kd[BO] = !0), "$snapshot" === dd) {
            const dd = gF(gF({}, this.persistence.properties()), this.sessionPersistence.properties());
            return Kd.distinct_id = dd.distinct_id, (!xm(Kd.distinct_id) && !um(Kd.distinct_id) || Bm(Kd.distinct_id)) && LX.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), Kd
          }
          const hd = function(dd, Od, md) {
            let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var Rd, Xd, Kd, hd;
            if (!Km) return {};
            const vd = dd ? [...Dh, ...Od || []] : [],
              [Qd, td] = MW(Km),
              [od, Nd] = function(dd) {
                for (let Od = 0; WF.length > Od; Od++) {
                  const [md, Wd, Fd] = WF[Od], Rd = dd.match(md);
                  if (Rd) {
                    const Od = Fd && dd.match(Fd) || Rd;
                    return [Wd, (null == Od ? void 0 : Od[1]) || ""]
                  }
                }
                return ["", ""]
              }(Km),
              qd = function() {
                const dd = "u" > typeof navigator ? navigator : void 0;
                return (null == dd ? void 0 : dd.brave) ? {
                  brave: !0
                } : {}
              }(),
              Hd = {};
            Um(md) || (Hd.detectGoogleSearchApp = md);
            const yd = {},
              bd = null === (Rd = navigator) || void 0 === Rd || null === (Rd = Rd.userAgentData) || void 0 === Rd ? void 0 : Rd.platform,
              Td = null === (Xd = navigator) || void 0 === Xd ? void 0 : Xd.maxTouchPoints,
              pd = null == fO || null === (Kd = fO.screen) || void 0 === Kd ? void 0 : Kd.width,
              Yd = null == fO || null === (hd = fO.screen) || void 0 === hd ? void 0 : hd.height,
              gd = null == fO ? void 0 : fO.devicePixelRatio;
            Um(bd) || (yd.userAgentDataPlatform = bd), Um(Td) || (yd.maxTouchPoints = Td), Um(pd) || (yd.screenWidth = pd), Um(Yd) || (yd.screenHeight = Yd), Um(gd) || (yd.devicePixelRatio = gd);
            const wd = jX(IX({
              $os: Qd,
              $os_version: td,
              $browser: CW(Km, navigator.vendor, qd, Hd),
              $webview_app: od,
              $webview_app_version: Nd,
              $device: dF(Km),
              $device_type: OF(Km, yd),
              $timezone: Ah(),
              $timezone_offset: Fv()
            }), {
              $current_url: ch(Wd ? NF(null == mm ? void 0 : mm.href) : null == mm ? void 0 : mm.href, vd, Ih),
              $host: null == mm ? void 0 : mm.host,
              $pathname: null == mm ? void 0 : mm.pathname,
              $raw_user_agent: Km.length > 1e3 ? Km.substring(0, 997) + "..." : Km,
              $browser_version: kW(Km, navigator.vendor, qd, Hd),
              $browser_language: fh(),
              $browser_language_prefix: Mh(),
              $screen_height: null == fO ? void 0 : fO.screen.height,
              $screen_width: null == fO ? void 0 : fO.screen.width,
              $viewport_height: null == fO ? void 0 : fO.innerHeight,
              $viewport_width: null == fO ? void 0 : fO.innerWidth,
              $lib: Fd.LIB_NAME,
              $lib_version: Fd.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return Fd.SDK_DIST_CHANNEL && (wd.$sdk_dist_channel = Fd.SDK_DIST_CHANNEL), wd
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: dd,
              windowId: Od
            } = this.sessionManager.checkAndGetSessionAndWindowId(Rd, md.getTime(), !0);
            Kd.$session_id = dd, Kd.$window_id = Od
          }
          this.sessionPropsManager && jX(Kd, this.sessionPropsManager.getSessionProps());
          try {
            var vd;
            if (this.sessionRecording) {
              const Od = this.sessionRecording.sdkDebugProperties,
                md = !this._replayDebugPropertiesPaused && rt(dd);
              for (const dd in Od)(md || Hm(it, dd)) && (Kd[dd] = Od[dd])
            }
            Kd.$sdk_debug_retry_queue_size = null === (vd = this._retryQueue) || void 0 === vd ? void 0 : vd.length
          } catch (dd) {
            Kd.$sdk_debug_error_capturing_properties = String(dd)
          }
          let Qd;
          if (this.requestRouter.region === Kt && (Kd.$lib_custom_api_host = this.config.api_host), Qd = "$pageview" !== dd || Rd ? "$pageleave" !== dd || Rd ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(md) : this.pageViewManager.doPageView(md, Wd), Kd = jX(Kd, Qd), "$pageview" === dd && Om && (Kd.title = Om.title), !Um(Xd)) {
            const dd = md.getTime() - Xd;
            Kd.$duration = parseFloat((dd / 1e3).toFixed(3))
          }
          Km && this.config.opt_out_useragent_filter && (Kd.$browser_type = this._is_bot() ? "bot" : "browser");
          const td = this.persistence.properties(),
            od = this.sessionPersistence.properties(),
            Nd = Kd.$groups,
            qd = td.$groups;
          Em(Nd) && !Jm(Nd) && (Kd.$groups = gF(gF({}, Em(qd) ? qd : {}), Nd)), cX(["$referrer", "$referring_domain"], (dd => {
            dd in td && delete od[dd]
          }));
          const Hd = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const Fd of this._extensionEventPropertyProducers.slice()) try {
              jX(Hd, Fd())
            } catch (dd) {
              LX.error("Failed to produce browser extension event properties", dd)
            }
          Kd = jX({}, hd, td, od, gF(gF({}, Hd), Kd)), Kd.$is_identified = this._isIdentified(), wm(this.config.property_denylist) ? cX(this.config.property_denylist, (function(dd) {
            delete Kd[dd]
          })) : LX.error(Vt + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const yd = this.config.sanitize_properties;
          yd && (LX.error(ut), Kd = yd(Kd, dd));
          const bd = this._hasPersonProcessing();
          return Kd.$process_person_profile = bd, bd && !Rd && this._requirePersonProcessing("_calculate_event_properties"), Kd
        }
        _calculate_set_once_properties(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var Wd;
          if (!this.persistence || !this._hasPersonProcessing()) return dd;
          if (this._personProcessingSetOncePropertiesSent && !md) return dd;
          const Fd = this.persistence.get_initial_props(),
            Rd = null === (Wd = this.sessionPropsManager) || void 0 === Wd ? void 0 : Wd.getSetOnceProps();
          let Xd = jX({}, Fd, Rd || {}, dd || {});
          const Kd = this.config.sanitize_properties;
          return Kd && (LX.error(ut), Xd = Kd(Xd, "$set_once")), Od && (this._personProcessingSetOncePropertiesSent = !0), Jm(Xd) ? void 0 : Xd
        }
        register(dd, Od) {
          var md;
          null === (md = this.persistence) || void 0 === md || md.register(dd, Od)
        }
        register_once(dd, Od, md) {
          var Wd;
          null === (Wd = this.persistence) || void 0 === Wd || Wd.register_once(dd, Od, md)
        }
        register_for_session(dd) {
          var Od, md;
          null === (Od = this.persistence) || void 0 === Od || Od.syncCookieProperties(), this._processCookieIdentityChange(), null === (md = this.sessionPersistence) || void 0 === md || md.register(dd), Object.keys(dd).forEach((dd => this._sessionRegisteredPropKeys.add(dd))), this._persistSessionRegisteredPropKeys()
        }
        unregister(dd) {
          var Od;
          null === (Od = this.persistence) || void 0 === Od || Od.unregister(dd)
        }
        unregister_for_session(dd) {
          var Od;
          null === (Od = this.sessionPersistence) || void 0 === Od || Od.unregister(dd), this._sessionRegisteredPropKeys.delete(dd), this._persistSessionRegisteredPropKeys()
        }
        _register_single(dd, Od) {
          this.register({
            [dd]: Od
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((dd => {
            var Od;
            null === (Od = this.sessionPersistence) || void 0 === Od || Od.unregister(dd)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var dd;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (dd = this.sessionPersistence) || void 0 === dd ? void 0 : dd._disabled) || !UK._is_supported()) return void UK._remove(this._sessionRegisteredPropertiesStorageKey);
          const Od = [];
          this._sessionRegisteredPropKeys.forEach((dd => Od.push(dd))), Od.length > 0 ? UK._set(this._sessionRegisteredPropertiesStorageKey, Od) : UK._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(dd, Od) {
          var md;
          return null === (md = this.featureFlags) || void 0 === md ? void 0 : md.getFeatureFlag(dd, Od)
        }
        getFeatureFlagPayload(dd) {
          var Od;
          return null === (Od = this.featureFlags) || void 0 === Od ? void 0 : Od.getFeatureFlagPayload(dd)
        }
        getFeatureFlagResult(dd, Od) {
          var md;
          return null === (md = this.featureFlags) || void 0 === md ? void 0 : md.getFeatureFlagResult(dd, Od)
        }
        getAllFeatureFlags() {
          var dd, Od;
          return null !== (dd = null === (Od = this.featureFlags) || void 0 === Od ? void 0 : Od.getAllFeatureFlags()) && void 0 !== dd ? dd : []
        }
        isFeatureEnabled(dd, Od) {
          var md, Wd;
          return null !== (md = null === (Wd = this.featureFlags) || void 0 === Wd ? void 0 : Wd.isFeatureEnabled(dd, Od)) && void 0 !== md ? md : null == Od ? void 0 : Od.defaultValue
        }
        reloadFeatureFlags() {
          var dd;
          null === (dd = this.featureFlags) || void 0 === dd || dd.reloadFeatureFlags()
        }
        updateFlags(dd, Od, md) {
          var Wd;
          null === (Wd = this.featureFlags) || void 0 === Wd || Wd.updateFlags(dd, Od, md)
        }
        updateEarlyAccessFeatureEnrollment(dd, Od, md) {
          var Wd;
          null === (Wd = this.featureFlags) || void 0 === Wd || Wd.updateEarlyAccessFeatureEnrollment(dd, Od, md)
        }
        getEarlyAccessFeatures(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0;
          var Wd;
          return null === (Wd = this.featureFlags) || void 0 === Wd ? void 0 : Wd.getEarlyAccessFeatures(dd, Od, md)
        }
        on(dd, Od) {
          return this._internalEventEmitter.on(dd, Od)
        }
        onFeatureFlags(dd) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(dd) : (dd([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(dd) {
          return this.surveys ? this.surveys.onSurveysLoaded(dd) : (dd([], {
            isLoaded: !1,
            error: st
          }), () => {})
        }
        onSessionId(dd) {
          var Od, md;
          return null !== (Od = null === (md = this.sessionManager) || void 0 === md ? void 0 : md.onSessionId(dd)) && void 0 !== Od ? Od : () => {}
        }
        getSurveys(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(dd, Od) : dd([], {
            isLoaded: !1,
            error: st
          })
        }
        getActiveMatchingSurveys(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(dd, Od) : dd([], {
            isLoaded: !1,
            error: st
          })
        }
        onActiveMatchingSurveysChanged(dd) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(dd) : (dd([], {
            isLoaded: !1,
            error: st
          }), () => {})
        }
        renderSurvey(dd, Od) {
          var md;
          null === (md = this.surveys) || void 0 === md || md.renderSurvey(dd, Od)
        }
        displaySurvey(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ht;
          var md;
          null === (md = this.surveys) || void 0 === md || md.displaySurvey(dd, Od)
        }
        cancelPendingSurvey(dd) {
          var Od;
          null === (Od = this.surveys) || void 0 === Od || Od.cancelPendingSurvey(dd)
        }
        canRenderSurvey(dd) {
          var Od, md;
          return null !== (Od = null === (md = this.surveys) || void 0 === md ? void 0 : md.canRenderSurvey(dd)) && void 0 !== Od ? Od : {
            visible: !1,
            disabledReason: st
          }
        }
        canRenderSurveyAsync(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var md, Wd;
          return null !== (md = null === (Wd = this.surveys) || void 0 === Wd ? void 0 : Wd.canRenderSurveyAsync(dd, Od)) && void 0 !== md ? md : Promise.resolve({
            visible: !1,
            disabledReason: st
          })
        }
        _validateIdentifyId(dd) {
          return !dd || Bm(dd) ? (LX.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === dd ? (LX.critical(`The string "${dd}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(dd.toLowerCase()) && !["undefined", "null"].includes(dd.toLowerCase()) || (LX.critical(`The string "${dd}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(dd, Od, md) {
          if (!this.__loaded || !this.persistence) return LX.uninitializedWarning("posthog.identify");
          if (um(dd) && (dd = dd.toString(), LX.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(dd)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const Wd = this.get_distinct_id(),
            Fd = this.persistence.syncCookieProperties() && this.get_distinct_id() !== Wd,
            Rd = this._processCookieIdentityChange(!1),
            Xd = this.persistence._beginCookieSyncSuppression();
          let Kd = !1;
          try {
            const Wd = this.get_distinct_id();
            this.register({
              $user_id: dd
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: Wd
            }, ""), dd !== Wd && dd !== this.get_property("__alias") && (this.unregister(xd), this.register({
              distinct_id: dd
            }));
            const Xd = (this.persistence.get_property("$user_state") || "anonymous") === jO,
              vd = dd !== Wd,
              Qd = !vd && Xd;
            if (vd && Xd) {
              var hd;
              const Fd = this.config.reuseAnonymousId ? {
                distinct_id: dd
              } : {
                distinct_id: dd,
                $anon_distinct_id: Wd
              };
              this.persistence.set_property(YO, DO), this.setPersonPropertiesForFlags({
                $set: Od || {},
                $set_once: md || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", Fd, {
                $set: Od || {},
                $set_once: md || {}
              }) && (this._cachedPersonProperties = Xt(dd, Od, md)), null === (hd = this.featureFlags) || void 0 === hd || hd.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : Wd)
            } else if (Qd) {
              this.persistence.set_property(YO, DO);
              const Wd = Od || {},
                Fd = md || {};
              this.setPersonPropertiesForFlags({
                $set: Wd,
                $set_once: Fd
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: Wd,
                $set_once: Fd
              }) && (this._cachedPersonProperties = Xt(dd, Od, md))
            } else(Od || md) && this.setPersonProperties(Od, md);
            vd || Fd || Rd ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(yd)) : Qd && (Od || md) && this.reloadFeatureFlags(), Kd = !0
          } finally {
            Xd && this.persistence._endCookieSyncSuppression(Kd)
          }
        }
        setPersonProperties(dd, Od) {
          if (!dd && !Od) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const md = Xt(this.get_distinct_id(), dd, Od);
          this._cachedPersonProperties !== md ? (this.setPersonPropertiesForFlags({
            $set: dd || {},
            $set_once: Od || {}
          }, !0), this.capture("$set", {
            $set: dd || {},
            $set_once: Od || {}
          }) && (this._cachedPersonProperties = md)) : LX.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(dd) {
          var Od;
          const md = (wm(dd) ? dd : [dd]).filter((dd => xm(dd) && dd.length > 0));
          0 !== md.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (Od = this.featureFlags) || void 0 === Od || Od.unsetPersonPropertiesForFlags(md, !0), this.capture("$set", {
            $unset: md
          }), this._cachedPersonProperties = null)
        }
        group(dd, Od, md) {
          var Wd;
          if (!dd || !Od) return void LX.error("posthog.group requires a group type and group key");
          null === (Wd = this.persistence) || void 0 === Wd || Wd.syncCookieProperties(), this._processCookieIdentityChange();
          const Fd = this.getGroups(),
            Rd = Fd[dd] !== Od;
          if (Rd && this.resetGroupPropertiesForFlags(dd), this.register({
              $groups: gF(gF({}, Fd), {}, {
                [dd]: Od
              })
            }), (Rd || md) && this._hasPersonProcessing()) {
            const Wd = {
              $group_type: dd,
              $group_key: Od
            };
            md && (Wd.$group_set = md), this.capture(kO, Wd)
          }
          md && this.setGroupPropertiesForFlags({
            [dd]: md
          }), Rd && !md && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var md;
          null === (md = this.featureFlags) || void 0 === md || md.setPersonPropertiesForFlags(dd, Od)
        }
        resetPersonPropertiesForFlags() {
          let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var Od;
          null === (Od = this.featureFlags) || void 0 === Od || Od.resetPersonPropertiesForFlags(dd)
        }
        setGroupPropertiesForFlags(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var md;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (md = this.featureFlags) || void 0 === md || md.setGroupPropertiesForFlags(dd, Od))
        }
        resetGroupPropertiesForFlags(dd) {
          var Od;
          null === (Od = this.featureFlags) || void 0 === Od || Od.resetGroupPropertiesForFlags(dd)
        }
        reset(dd) {
          const Od = im(dd) ? dd : null == dd ? void 0 : dd.resetDeviceID,
            md = im(dd) || null == dd ? void 0 : dd.bootstrap;
          this._reset(Od, !1, md)
        }
        _reset(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0;
          var Wd, Fd, Rd, Xd, Kd, hd;
          if (LX.info("reset"), !this.__loaded) return LX.uninitializedWarning("posthog.reset");
          const vd = null == md ? void 0 : md.sessionID;
          this.config.bootstrap = md || (null === (Wd = this._originalUserConfig) || void 0 === Wd ? void 0 : Wd.bootstrap) || {}, null === (Fd = this.featureFlags) || void 0 === Fd || null === (Rd = Fd.updateConfig) || void 0 === Rd || Rd.call(Fd, this.config, this._shouldDisableFlags());
          const Qd = this.get_property(Jd),
            td = this.get_property(Ud),
            od = this.get_property(Id);
          null === (Xd = this.sessionRecording) || void 0 === Xd || Xd.flushBeforeIdentityReset();
          const Nd = this.is_capturing();
          Od || this.consent.reset(), Od || !Nd || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const qd = null === (Kd = this.persistence) || void 0 === Kd || null === (hd = Kd._beginCookieSyncSuppression) || void 0 === hd ? void 0 : hd.call(Kd),
            Hd = this._isConsentTransition;
          this._isConsentTransition = Hd || Od;
          let yd = !1;
          try {
            var bd, Td, pd, Yd, gd, wd, Ed, xd, Bd, Sd, sd, ud, Vd;
            if (null === (bd = this.persistence) || void 0 === bd || bd.clear(), null === (Td = this.sessionPersistence) || void 0 === Td || Td.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), Um(od) || null === (Sd = this.persistence) || void 0 === Sd || Sd.register({
                $session_recording_remote_config: od
              }), null === (pd = this.surveys) || void 0 === pd || pd.reset(), null === (Yd = this.featureFlags) || void 0 === Yd || Yd.reset(), null === (gd = this.conversations) || void 0 === gd || gd.reset(), null === (wd = this.logs) || void 0 === wd || wd.reset(), null === (Ed = this.metrics) || void 0 === Ed || Ed.reset(), null === (xd = this.persistence) || void 0 === xd || xd.set_property("$user_state", "anonymous"), null === (Bd = this.sessionManager) || void 0 === Bd || Bd.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: xO,
              $device_id: null
            }, "");
            else {
              const Od = this.config.get_device_id(RK());
              this.register_once({
                distinct_id: Od,
                $device_id: dd ? Od : Qd
              }, ""), dd || Um(td) || this.register({
                [Ud]: td
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), md && (md.distinctID && !this._inCookielessMode() && (null === (Vd = this.persistence) || void 0 === Vd || Vd.set_property("$user_state", md.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: md.distinctID
              })), null === (sd = this.featureFlags) || void 0 === sd || sd.initialize(), !sm(vd) && !(null === (ud = this.sessionManager) || void 0 === ud ? void 0 : ud.setBootstrapSessionId(vd, !0)))) {
              const dd = gF({}, md);
              delete dd.sessionID, this.config.bootstrap = dd
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, yd = !0
          } finally {
            var Ad, rd;
            this._isConsentTransition = Hd, qd && (null === (Ad = this.persistence) || void 0 === Ad || null === (rd = Ad._endCookieSyncSuppression) || void 0 === rd || rd.call(Ad, yd))
          }
          this.reloadFeatureFlags()
        }
        shutdown(dd) {
          var Od = this;
          return Im((function*() {
            if (!Od.__loaded) return void LX.uninitializedWarning("posthog.shutdown");
            Od._isShutdown = !0, clearTimeout(Od._extensionInitTimeout), Od._extensionInitTimeout = void 0;
            const dd = Od._featureFlagsReloadingUnsubscribe;
            Od._featureFlagsReloadingUnsubscribe = void 0;
            for (const md of [() => {
                var dd;
                return null === (dd = Od.sessionRecording) || void 0 === dd ? void 0 : dd.dispose()
              }, () => {
                var dd;
                return null === (dd = Od.logs) || void 0 === dd ? void 0 : dd.flushLogs("sendBeacon")
              }, () => {
                var dd;
                return null === (dd = Od.metrics) || void 0 === dd ? void 0 : dd.flush("sendBeacon")
              }, () => {
                var dd;
                return null === (dd = Od.metrics) || void 0 === dd ? void 0 : dd.dispose()
              }, () => {
                var dd;
                return null === (dd = Od.logs) || void 0 === dd ? void 0 : dd.dispose()
              }, () => {
                var dd;
                return null === (dd = Od.surveys) || void 0 === dd ? void 0 : dd.dispose()
              }, () => {
                var dd;
                return null === (dd = Od.autocapture) || void 0 === dd ? void 0 : dd.dispose()
              }, () => null == dd ? void 0 : dd(), () => {
                var dd;
                return null === (dd = Od._requestQueue) || void 0 === dd ? void 0 : dd.unload()
              }, () => {
                var dd;
                return null === (dd = Od._retryQueue) || void 0 === dd ? void 0 : dd.unload()
              }, () => {
                var dd;
                return null === (dd = Od.featureFlags) || void 0 === dd ? void 0 : dd.destroy()
              }, () => {
                var dd;
                return null === (dd = Od.persistence) || void 0 === dd ? void 0 : dd.destroy()
              }, () => {
                var dd;
                return null === (dd = Od.sessionPersistence) || void 0 === dd ? void 0 : dd.destroy()
              }]) try {
              const dd = md();
              dd && am(dd.then) && dd.then(void 0, (dd => {
                LX.error("Error during shutdown", dd)
              }))
            } catch (dd) {
              LX.error("Error during shutdown", dd)
            }
          }))()
        }
        setIdentity(dd, Od) {
          var md;
          delete this.config.identity_claims, this.config.identity_distinct_id = dd, this.config.identity_hash = Od, this.alias(dd), null === (md = this.conversations) || void 0 === md || md._onIdentityChanged()
        }
        clearIdentity() {
          var dd;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (dd = this.conversations) || void 0 === dd || dd._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var dd, Od;
          return null !== (dd = null === (Od = this.sessionManager) || void 0 === Od ? void 0 : Od.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== dd ? dd : ""
        }
        get_session_replay_url(dd) {
          if (!this.sessionManager) return "";
          const {
            sessionId: Od,
            sessionStartTimestamp: md
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let Wd = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${Od}`);
          if ((null == dd ? void 0 : dd.withTimestamp) && md) {
            var Fd;
            const Od = null !== (Fd = dd.timestampLookBack) && void 0 !== Fd ? Fd : 10;
            if (!md) return Wd;
            Wd += `?t=${Math.max(Math.floor(((new Date).getTime()-md)/1e3)-Od,0)}`
          }
          return Wd
        }
        alias(dd, Od) {
          return dd === this.get_property("$people_distinct_id") ? (LX.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (Um(Od) && (Od = this.get_distinct_id()), dd !== Od ? (this._register_single(xd, dd), this.capture("$create_alias", {
            alias: dd,
            distinct_id: Od
          })) : (LX.warn("alias matches current distinct_id - skipping api call."), this.identify(dd), -1)) : void 0
        }
        set_config(dd) {
          const Od = gF({}, this.config);
          if (Em(dd)) {
            var md, Wd, Fd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd;
            jX(this.config, et(dd));
            const gd = this._is_persistence_disabled();
            if (this.persistence) {
              const dd = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var bd, Td;
              if (dd && this.sessionPersistence !== this.persistence && (null === (bd = this.sessionPersistence) || void 0 === bd || bd.remove(), null === (Td = this.sessionPersistence) || void 0 === Td || Td.destroy()), this.persistence.update_config(this.config, Od, gd), dd) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new bv(gF(gF({}, this.config), {}, {
                persistence: "sessionStorage"
              }), gd, !1);
              else {
                var pd;
                null === (pd = this.sessionPersistence) || void 0 === pd || pd.update_config(gF(gF({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), gF(gF({}, Od), {}, {
                  persistence: "sessionStorage"
                }), gd)
              }
            }
            const wd = this._checkLocalStorageForDebug(this.config.debug);
            var Yd;
            im(wd) && (this.config.debug = wd), im(this.config.debug) && (this.config.debug ? (Rd.DEBUG = !0, oK._is_supported() && oK._set("ph_debug", !0), LX.info("set_config", {
              config: dd,
              oldConfig: Od,
              newConfig: gF({}, this.config)
            })) : (Rd.DEBUG = !1, oK._is_supported() && oK._remove("ph_debug"))), null === (md = this.featureFlags) || void 0 === md || null === (Wd = md.updateConfig) || void 0 === Wd || Wd.call(md, this.config, this._shouldDisableFlags()), null === (Fd = this.exceptionObserver) || void 0 === Fd || Fd.onConfigChange(), null === (Xd = this.exceptions) || void 0 === Xd || Xd.onConfigChange(), null === (Kd = this.metrics) || void 0 === Kd || Kd.onConfigChange(), null === (hd = this.webMCP) || void 0 === hd || hd.startIfEnabled(), null === (vd = this.sessionRecording) || void 0 === vd || vd.startIfEnabledOrStop(), null === (Qd = this.tracingHeaders) || void 0 === Qd || Qd.startIfEnabledOrStop(), null === (td = this.autocapture) || void 0 === td || td.startIfEnabled(), null === (od = this.heatmaps) || void 0 === od || od.startIfEnabled(), ("capture_pageview" in dd || "disable_capture_url_hashes" in dd) && (null === (Yd = this.historyAutocapture) || void 0 === Yd || Yd.startIfEnabledOrStop()), null === (Nd = this.exceptionObserver) || void 0 === Nd || Nd.startIfEnabledOrStop(), null === (qd = this.deadClicksAutocapture) || void 0 === qd || qd.startIfEnabledOrStop(), null === (Hd = this.surveys) || void 0 === Hd || Hd.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (yd = this.externalIntegrations) || void 0 === yd || yd.startIfEnabledOrStop(), !Od.segment && this.config.segment && this.persistence && Jh(this, Bt, !1)
          }
        }
        _overrideSDKInfo(dd, Od) {
          Rd.LIB_NAME = dd, Rd.LIB_VERSION = Od
        }
        startSessionRecording(dd) {
          const Od = !0 === dd,
            md = {
              sampling: Od || !!(null == dd ? void 0 : dd.sampling),
              linked_flag: Od || !!(null == dd ? void 0 : dd.linked_flag),
              url_trigger: Od || !!(null == dd ? void 0 : dd.url_trigger),
              event_trigger: Od || !!(null == dd ? void 0 : dd.event_trigger)
            };
          var Wd, Fd, Rd, Xd, Kd;
          Object.values(md).some(Boolean) && (null === (Wd = this.sessionManager) || void 0 === Wd || Wd.checkAndGetSessionAndWindowId(), md.sampling && (null === (Fd = this.sessionRecording) || void 0 === Fd || Fd.overrideSampling()), md.linked_flag && (null === (Rd = this.sessionRecording) || void 0 === Rd || Rd.overrideLinkedFlag()), md.url_trigger && (null === (Xd = this.sessionRecording) || void 0 === Xd || Xd.overrideTrigger("url")), md.event_trigger && (null === (Kd = this.sessionRecording) || void 0 === Kd || Kd.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var dd;
          return !!(null === (dd = this.sessionRecording) || void 0 === dd ? void 0 : dd.started)
        }
        captureException(dd, Od) {
          try {
            if (!this.exceptions) return;
            const md = this.exceptions.buildProperties(dd, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(gF(gF({}, md), Od))
          } catch (dd) {
            return
          }
        }
        addExceptionStep(dd, Od) {
          var md;
          null === (md = this.exceptions) || void 0 === md || md.addExceptionStep(dd, Od)
        }
        captureLog(dd) {
          var Od;
          null === (Od = this.logs) || void 0 === Od || Od.captureLog(dd)
        }
        get logger() {
          var Od, md;
          return null !== (Od = null === (md = this.logs) || void 0 === md ? void 0 : md.logger) && void 0 !== Od ? Od : dd._noopLogger
        }
        startExceptionAutocapture(dd) {
          this.set_config({
            capture_exceptions: null == dd || dd
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(dd) {
          var Od, md;
          return null !== (Od = null === (md = this.toolbar) || void 0 === md ? void 0 : md.loadToolbar(dd)) && void 0 !== Od && Od
        }
        get_property(dd) {
          var Od;
          return null === (Od = this.persistence) || void 0 === Od ? void 0 : Od.props[dd]
        }
        getSessionProperty(dd) {
          var Od;
          return null === (Od = this.sessionPersistence) || void 0 === Od ? void 0 : Od.props[dd]
        }
        toString() {
          var dd;
          let Od = null !== (dd = this.config.name) && void 0 !== dd ? dd : zt;
          return Od !== zt && (Od = "posthog." + Od), Od
        }
        _isIdentified() {
          var dd, Od;
          return "identified" === (null === (dd = this.persistence) || void 0 === dd ? void 0 : dd.get_property("$user_state")) || "identified" === (null === (Od = this.sessionPersistence) || void 0 === Od ? void 0 : Od.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var dd, Od;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && Jm(this.getGroups()) && !(null === (dd = this.persistence) || void 0 === dd || null === (dd = dd.props) || void 0 === dd ? void 0 : dd.__alias) && !(null === (Od = this.persistence) || void 0 === Od || null === (Od = Od.props) || void 0 === Od ? void 0 : Od.$epp))
        }
        _shouldCapturePageleave() {
          return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && !!this.config.capture_pageview
        }
        createPersonProfile() {
          this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
        }
        setInternalOrTestUser() {
          this._requirePersonProcessing("posthog.setInternalOrTestUser") && this.setPersonProperties({
            $internal_or_test_user: !0
          })
        }
        _requirePersonProcessing(dd) {
          return "never" === this.config.person_profiles ? (LX.error(dd + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(UO, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const dd = this.consent.isOptedOut();
          return this.config.disable_persistence || dd && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var dd, Od;
          const md = this._is_persistence_disabled();
          var Wd, Fd, Rd;
          return this.is_capturing() || null === (Wd = this.logs) || void 0 === Wd || Wd._onOptOut(), (null === (dd = this.persistence) || void 0 === dd ? void 0 : dd._disabled) !== md && (null === (Fd = this.persistence) || void 0 === Fd || Fd.set_disabled(md)), (null === (Od = this.sessionPersistence) || void 0 === Od ? void 0 : Od._disabled) !== md && (null === (Rd = this.sessionPersistence) || void 0 === Rd || Rd.set_disabled(md)), this._persistSessionRegisteredPropKeys(), md
        }
        opt_in_capturing(Od) {
          var md;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var Wd, Fd, Rd, Xd, Kd, hd;
              null === (Wd = this.sessionRecording) || void 0 === Wd || Wd.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (Fd = this.sessionManager) || void 0 === Fd || Fd.destroy(), null === (Rd = this.pageViewManager) || void 0 === Rd || Rd.destroy(), this.sessionManager = new kQ(this), this.pageViewManager = new Sh(this), this.persistence && (this.sessionPropsManager = new IQ(this, this.sessionManager, this.persistence));
              const Od = null !== (Xd = null === (Kd = this.config.__extensionClasses) || void 0 === Kd ? void 0 : Kd.sessionRecording) && void 0 !== Xd ? Xd : null === (hd = dd.__defaultExtensionClasses) || void 0 === hd ? void 0 : hd.sessionRecording;
              var vd, Qd;
              Od && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new Od(this)), this._lastRemoteConfig && (null === (vd = this.sessionRecording) || void 0 === vd || null === (Qd = vd.onRemoteConfig) || void 0 === Qd || Qd.call(vd, this._lastRemoteConfig)))
            }
            var td, od;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (md = this.sessionRecording) || void 0 === md || md.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (td = this.surveys) || void 0 === td || td.loadIfEnabled()), (Um(null == Od ? void 0 : Od.captureEventName) || (null == Od ? void 0 : Od.captureEventName)) && this.capture(null !== (od = null == Od ? void 0 : Od.captureEventName) && void 0 !== od ? od : "$opt_in", null == Od ? void 0 : Od.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else LX.warn(St)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : LX.warn(St)
        }
        _enterCookielessMode() {
          var dd, Od;
          const md = this.sessionRecording;
          null == md || md.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: xO,
            $device_id: null
          }), this._removeExtension(md), this.sessionRecording = void 0, null === (dd = this.sessionManager) || void 0 === dd || dd.destroy(), null === (Od = this.pageViewManager) || void 0 === Od || Od.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const dd = this.consent.consent;
          return 1 === dd ? "granted" : 0 === dd ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return dm ? fQ(dm, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          Om && ("visible" === Om.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(lO, {
            title: Om.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (Om.removeEventListener(gd, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), kX(Om, gd, this._visibilityStateListener)))
        }
        debug(dd) {
          !1 === dd ? (null == fO || fO.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == fO || fO.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const dd = this._originalUserConfig || {};
          return "advanced_disable_flags" in dd ? !!dd.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (LX.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(dd, Od, md, Wd, Fd) {
            const Rd = Od in dd && !sm(dd[Od]),
              Xd = md in dd && !sm(dd[md]);
            return Rd ? dd[Od] : !!Xd && (Fd && Fd.warn(`Config field '${md}' is deprecated. Please use '${Od}' instead. The old field will be removed in a future major version.`), dd[md])
          }(dd, "advanced_disable_flags", "advanced_disable_decide", 0, LX)
        }
        _runBeforeSend(dd) {
          var Od;
          if (sm(this.config.before_send)) return dd;
          const md = Object.keys(null !== (Od = dd.properties) && void 0 !== Od ? Od : {}).filter(rm),
            Wd = wm(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let Fd = dd;
          for (const Rd of Wd) try {
            if (Fd = Rd(Fd), sm(Fd)) {
              const Od = `Event '${dd.event}' was rejected in beforeSend function`;
              return Am(dd.event) ? LX.warn(`${Od}. This can cause unexpected behavior.`) : LX.info(Od), null
            }
            Fd.properties && !Jm(Fd.properties) || LX.warn(`Event '${dd.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (Od) {
            return LX.error(`Error in beforeSend function for event '${dd.event}':`, Od), null
          }
          for (const Rd of md)
            if (Fd.properties && sm(Fd.properties[Rd])) return LX.warn(`Event '${dd.event}' had its '${Rd}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return Fd
        }
        getPageViewId() {
          var dd;
          return null === (dd = this.pageViewManager._currentPageview) || void 0 === dd ? void 0 : dd.pageViewId
        }
        captureTraceFeedback(dd, Od) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(dd),
            $ai_feedback_text: Od
          })
        }
        captureTraceMetric(dd, Od, md) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(dd),
            $ai_metric_name: Od,
            $ai_metric_value: String(md)
          })
        }
        _checkLocalStorageForDebug(dd) {
          const Od = im(dd) && !dd,
            md = oK._is_supported() && "true" === oK._get("ph_debug");
          return !Od && (!!md || dd)
        }
      };
    lt.__defaultExtensionClasses = {}, lt._noopLogger = (() => {
        const dd = () => {};
        return {
          trace: dd,
          debug: dd,
          info: dd,
          warn: dd,
          error: dd,
          fatal: dd
        }
      })(),
      function(dd, Od) {
        for (let md = 0; Od.length > md; md++) dd.prototype[Od[md]] = eX(dd.prototype[Od[md]])
      }(lt, ["identify"]);
    var Ct = class {
      constructor(dd) {
        this.disabled = !1 === dd;
        const Od = Em(dd) ? dd : {};
        this.thresholdPx = Od.threshold_px || 30, this.timeoutMs = Od.timeout_ms || 1e3, this.clickCount = Od.click_count || 3, this.clicks = []
      }
      isRageClick(dd, Od, md) {
        if (this.disabled) return !1;
        const Wd = this.clicks[this.clicks.length - 1];
        if (Wd && Math.abs(dd - Wd.x) + Math.abs(Od - Wd.y) < this.thresholdPx && this.timeoutMs > md - Wd.timestamp) {
          if (this.clicks.push({
              x: dd,
              y: Od,
              timestamp: md
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: dd,
          y: Od,
          timestamp: md
        }];
        return !1
      }
    };
    const Zt = "$copy_autocapture",
      kt = PX("[AutoCapture]");

    function ft(dd, Od) {
      return Od.length > dd ? Od.slice(0, dd) + "..." : Od
    }

    function Mt(dd) {
      if (dd.previousElementSibling) return dd.previousElementSibling;
      let Od = dd;
      do {
        Od = Od.previousSibling
      } while (Od && !sK(Od));
      return Od
    }
    var Oo = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(dd) {
          var Od;
          if (!Xh(dd)) return !0;
          const md = null !== (Od = this._refreshConfig().css_selector_ignorelist) && void 0 !== Od ? Od : eK,
            Wd = new Set;
          let Fd = dd;
          for (; Fd;) {
            if (Wd.size >= 1e3 || Wd.has(Fd)) return !0;
            Wd.add(Fd);
            const dd = Fd,
              Od = GK(dd);
            if (Hm(Od, "ph-no-capture") || Hm(Od, "ph-sensitive") || Kh(dd) || md.some((Od => cK(dd, Od)))) return !0;
            const Rd = Fd.parentNode;
            Fd = iK(Rd) ? Rd.host : Rd && sK(Rd) ? Rd : null
          }
          return !1
        }
        _trackPointer(dd) {
          if (!this.isEnabled || "pointercancel" === dd.type) return void this._clearPointer();
          if ("pointerdown" === dd.type) {
            this._clearPointer();
            const md = PK(dd);
            var Od;
            return void(dd.isPrimary && 0 === dd.button && !dd.ctrlKey && md && sK(md) && (this._pointerDown = {
              target: md,
              excluded: this._isExcludedPointerTarget(md),
              id: dd.pointerId,
              x: dd.clientX,
              y: dd.clientY,
              released: !1,
              distinctId: null === (Od = this._client) || void 0 === Od ? void 0 : Od.distinctId
            }))
          }
          const md = this._pointerDown;
          md && (dd.pointerId !== md.id || Math.abs(dd.clientX - md.x) > 5 || Math.abs(dd.clientY - md.y) > 5 ? this._clearPointer() : "pointerup" === dd.type && (md.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(dd) {
          var Od;
          const md = this._pointerDown;
          this._clearPointer();
          const Wd = PK(dd);
          if ((null == md ? void 0 : md.released) && md.target.isConnected && md.distinctId === (null === (Od = this._client) || void 0 === Od ? void 0 : Od.distinctId) && dd.pointerId === md.id && (dd.detail > 0 || "touch" === dd.pointerType || "pen" === dd.pointerType) && 0 === dd.button && 5 >= Math.abs(dd.clientX - md.x) && 5 >= Math.abs(dd.clientY - md.y) && Wd && (uK(Wd, "html") || uK(Wd, "body"))) {
            var Fd;
            if (md.excluded) return null;
            const dd = null !== (Fd = this._refreshConfig().css_selector_ignorelist) && void 0 !== Fd ? Fd : eK;
            return [Wd, null == Om ? void 0 : Om.documentElement, null == Om ? void 0 : Om.body].some((Od => {
              if (!Od) return !1;
              const md = GK(Od);
              return Hm(md, "ph-no-capture") || Hm(md, "ph-sensitive") || !Xh(Od) || Kh(Od) || dd.some((dd => cK(Od, dd)))
            })) ? null : md.target
          }
        }
        constructor(dd) {
          this._configSource = dd, this.name = pt, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new Ct(this._config.rageclick), this._elementSelectors = null
        }
        setup(dd) {
          this._compileUrlPatterns(), this._client = dd;
          const Od = dd.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? Od.dispose() : (this._remoteConfigSubscription = Od, this.startIfEnabled())
        }
        dispose() {
          var dd;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (dd = this._remoteConfigSubscription) || void 0 === dd || dd.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var dd, Od;
          return this._refreshConfig(), this._config.url_allowlist = null === (dd = this._config.url_allowlist) || void 0 === dd ? void 0 : dd.map((dd => new RegExp(dd))), this._config.url_ignorelist = null === (Od = this._config.url_ignorelist) || void 0 === Od ? void 0 : Od.map((dd => new RegExp(dd))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void kt.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!fO || !Om) return;
          const dd = this._domEventHandler = dd => {
            dd = dd || (null == fO ? void 0 : fO.event);
            try {
              if ("blur" === dd.type) return void this._clearPointer();
              if (0 === dd.type.indexOf("pointer")) return void this._trackPointer(dd);
              const Od = "click" === dd.type ? this._recoverClickTarget(dd) : void 0;
              if (Sm(Od)) return;
              this._captureEvent(dd, "$autocapture", Od)
            } catch (dd) {
              kt.error("Failed to capture event", dd)
            }
          };
          if (kX(fO, "blur", dd), kX(Om, "submit", dd, {
              capture: !0
            }), kX(Om, "change", dd, {
              capture: !0
            }), kX(Om, "click", dd, {
              capture: !0
            }), cX(["pointerdown", "pointermove", "pointerup", "pointercancel"], (Od => {
              kX(Om, Od, dd, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const dd = this._copiedTextHandler = dd => {
              dd = dd || (null == fO ? void 0 : fO.event);
              try {
                this._captureEvent(dd, Zt)
              } catch (dd) {
                kt.error("Failed to capture clipboard event", dd)
              }
            };
            kX(Om, "copy", dd, {
              capture: !0
            }), kX(Om, "cut", dd, {
              capture: !0
            }), kX(Om, "paste", dd, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == fO || fO.removeEventListener("blur", this._domEventHandler), cX(["pointerdown", "pointermove", "pointerup", "pointercancel"], (dd => {
            null == Om || Om.removeEventListener(dd, this._domEventHandler, !0)
          })), null == Om || Om.removeEventListener("submit", this._domEventHandler, !0), null == Om || Om.removeEventListener("change", this._domEventHandler, !0), null == Om || Om.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == Om || Om.removeEventListener("copy", this._copiedTextHandler, !0), null == Om || Om.removeEventListener("cut", this._copiedTextHandler, !0), null == Om || Om.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(dd) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !dd.ok) return void this.startIfEnabled();
          const Od = dd.config;
          Od.elementsChainAsString && (this._elementsChainAsString = Od.elementsChainAsString);
          const md = Od.autocapture_opt_out;
          var Wd;
          im(md) && (null === (Wd = this._client) || void 0 === Wd || Wd.kv.set("$autocapture_disabled_server_side", md), this._isDisabledServerSide = md), this.startIfEnabled()
        }
        setElementSelectors(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          dd.size ? this._elementSelectorsByOwner.set(Od, new Set(dd)) : this._elementSelectorsByOwner.delete(Od);
          const md = new Set;
          this._elementSelectorsByOwner.forEach((dd => {
            dd.forEach((dd => md.add(dd)))
          })), this._elementSelectors = md
        }
        getElementSelectors(dd, Od) {
          var md;
          const Wd = [];
          return null === (md = this._elementSelectors) || void 0 === md || md.forEach((md => {
            const Fd = null == Om ? void 0 : Om.querySelectorAll(md);
            null == Fd || Fd.forEach((Fd => {
              dd !== Fd && Od !== Fd || Hm(Wd, md) || Wd.push(md)
            }))
          })), Wd
        }
        get isEnabled() {
          var dd, Od;
          if (this._disposed) return !1;
          const md = null === (dd = this._client) || void 0 === dd ? void 0 : dd.kv.get(rd),
            Wd = this._isDisabledServerSide,
            Fd = this._refreshConfig();
          if (!Fd.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const Rd = Fd.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (Sm(Wd) && !im(md) && !Rd) return !1;
          const Xd = null !== (Od = this._isDisabledServerSide) && void 0 !== Od ? Od : !!md;
          return !!Fd.enabled && !Xd
        }
        _captureEvent(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            md = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let Wd = md || PK(dd);
          VK(Wd) && (Wd = Wd.parentNode || null);
          const Fd = this._compileUrlPatterns();
          var Rd;
          "$autocapture" === Od && "click" === dd.type && dd instanceof MouseEvent && Fd.rageclick && (null === (Rd = this.rageclicks) || void 0 === Rd ? void 0 : Rd.isRageClick(dd.clientX, dd.clientY, dd.timeStamp || (new Date).getTime())) && Wh(Wd, Fd.rageclick) && this._captureEvent(dd, "$rageclick", md);
          const Xd = Od === Zt,
            Kd = Xd ? gF(gF({}, Fd), {}, {
              dom_event_allowlist: void 0
            }) : Fd;
          if (Wd && function(dd, Od, md, Wd, Fd, Rd) {
              var Xd;
              if (!fO || Fh(dd)) return !1;
              if ((null == md ? void 0 : md.url_allowlist) && !rK(md.url_allowlist, Rd)) return !1;
              if ((null == md ? void 0 : md.url_ignorelist) && rK(md.url_ignorelist, Rd)) return !1;
              if (null == md ? void 0 : md.dom_event_allowlist) {
                const dd = md.dom_event_allowlist;
                if (dd && !dd.some((dd => Od.type === dd))) return !1
              }
              const {
                parentIsUsefulElement: Kd,
                targetElementList: hd
              } = Rh(dd, Wd);
              if (! function(dd, Od) {
                  const md = null == Od ? void 0 : Od.element_allowlist;
                  if (Um(md)) return !0;
                  for (const Wd of dd)
                    if (md.some((dd => Wd.tagName.toLowerCase() === dd))) return !0;
                  return !1
                }(hd, md)) return !1;
              if (!jK(hd, null == md ? void 0 : md.css_selector_allowlist)) return !1;
              if (jK(hd, null !== (Xd = null == md ? void 0 : md.css_selector_ignorelist) && void 0 !== Xd ? Xd : eK)) return !1;
              try {
                const md = fO.getComputedStyle(dd);
                if (md && "pointer" === md.getPropertyValue("cursor") && "click" === Od.type) return !0
              } catch (dd) {}
              const vd = dd.tagName.toLowerCase();
              switch (vd) {
                case "html":
                  return !1;
                case "form":
                  return (Fd || ["submit"]).indexOf(Od.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (Fd || ["change", "click"]).indexOf(Od.type) >= 0;
                default:
                  return Kd ? (Fd || ["click"]).indexOf(Od.type) >= 0 : (Fd || ["click"]).indexOf(Od.type) >= 0 && (zK.indexOf(vd) > -1 || "true" === dd.getAttribute("contenteditable"))
              }
            }(Wd, dd, Kd, Xd, Xd ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: Fd.getCurrentUrl
              }
            })) {
            var hd;
            const {
              props: md,
              explicitNoCapture: Rd,
              target: Xd
            } = function(dd, Od) {
              let {
                e: md,
                maskAllElementAttributes: Wd,
                maskAllText: Fd,
                elementAttributeIgnoreList: Rd,
                elementsChainAsString: Xd,
                disableCaptureUrlHashes: Kd
              } = Od;
              var hd, vd;
              if (!sK(dd)) return {
                props: {}
              };
              const Qd = [dd],
                td = new Set([dd]);
              let od = dd;
              for (; od.parentNode && !uK(od, "body") && 1e3 > Qd.length;)
                if (iK(od.parentNode)) {
                  const dd = od.parentNode.host;
                  if (td.has(dd)) break;
                  td.add(dd), Qd.push(dd), od = dd
                } else {
                  if (!sK(od.parentNode)) break;
                  if (td.has(od.parentNode)) break;
                  td.add(od.parentNode), Qd.push(od.parentNode), od = od.parentNode
                } const Nd = "click" === md.type && "http://www.w3.org/2000/svg" === dd.namespaceURI ? Qd.findIndex((dd => uK(dd, "button") || uK(dd, "a"))) : -1;
              Nd > 0 && (Fd = Fd || Qd.slice(0, Nd + 1).some((dd => !Xh(dd) || Kh(dd))));
              const qd = [],
                Hd = {};
              let yd, bd = !1,
                Td = !1;
              if (cX(Qd, (dd => {
                  const Od = Xh(dd);
                  if (uK(dd, "a") && !Wd && !(null == Rd ? void 0 : Rd.includes("href"))) {
                    const md = dd.getAttribute("href");
                    bd = !!(Od && md && Hh(md)) && (Kd ? NF(md) : md)
                  }
                  Hm(GK(dd), "ph-no-capture") && (Td = !0), qd.push(function(dd, Od, md, Wd) {
                    let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const Rd = dd.tagName.toLowerCase(),
                      Xd = {
                        tag_name: Rd
                      };
                    zK.indexOf(Rd) > -1 && !md && (Xd.$el_text = "a" === Rd.toLowerCase() || "button" === Rd.toLowerCase() ? ft(1024, yh(dd)) : ft(1024, LK(dd)));
                    const Kd = GK(dd);
                    Od || (null == Wd ? void 0 : Wd.includes("class")) || 0 >= Kd.length || (Xd.classes = Kd.filter((function(dd) {
                      return "" !== dd
                    }))), cX(dd.attributes, (function(md) {
                      var Rd;
                      if ((!Kh(dd) || -1 !== ["name", "id", "class", "aria-label"].indexOf(md.name)) && !(null == Wd ? void 0 : Wd.includes(md.name)) && !Od && Hh(md.value) && (!xm(Rd = md.name) || "_ngcontent" !== Rd.substring(0, 10) && "_nghost" !== Rd.substring(0, 7))) {
                        let dd = md.value;
                        "class" === md.name && (dd = AK(dd).join(" ")), Xd["attr__" + md.name] = ft(1024, "href" === md.name && Fd ? NF(dd) : dd)
                      }
                    }));
                    let hd = 1,
                      vd = 1,
                      Qd = dd;
                    for (; Qd = Mt(Qd);) hd++, Qd.tagName === dd.tagName && vd++;
                    return Xd.nth_child = hd, Xd.nth_of_type = vd, Xd
                  }(dd, Wd, Fd, Rd, Kd)), cX(function(dd) {
                    if (!Xh(dd)) return {};
                    const Od = {};
                    return cX(dd.attributes, (function(dd) {
                      if (dd.name && 0 === dd.name.indexOf("data-ph-capture-attribute")) {
                        const md = dd.name.replace("data-ph-capture-attribute-", ""),
                          Wd = dd.value;
                        md && Wd && Hh(Wd) && (Od[md] = Wd)
                      }
                    })), Od
                  }(dd), ((dd, Od) => {
                    ({}).hasOwnProperty.call(Hd, Od) || (Hd[Od] = dd)
                  }))
                })), Td) return {
                props: {},
                explicitNoCapture: Td
              };
              if (Nd > 0 && (dd = Qd[Nd], qd.splice(0, Nd)), Fd || (qd[0].$el_text = uK(dd, "a") || uK(dd, "button") ? yh(dd) : LK(dd)), bd) {
                var pd, Yd;
                qd[0].attr__href = bd;
                const dd = null === (pd = Ph(bd)) || void 0 === pd ? void 0 : pd.host,
                  Od = null == fO || null === (Yd = fO.location) || void 0 === Yd ? void 0 : Yd.host;
                dd && Od && dd !== Od && (yd = bd)
              }
              return {
                props: jX((wd = md.type, {
                  $event_type: wd,
                  $ce_version: 1
                }), Xd ? {} : {
                  $elements: qd
                }, {
                  $elements_chain: (gd = qd, wm(gd) ? function(dd) {
                    return dd.map((dd => {
                      var Od, md;
                      let Wd = "";
                      if (dd.tag_name && (Wd += dd.tag_name), dd.attr_class) {
                        dd.attr_class.sort();
                        for (const Od of dd.attr_class) Wd += `.${Od.replace(/"/g,"")}`
                      }
                      const Fd = gF(gF(gF(gF({}, dd.text ? {
                          text: dd.text
                        } : {}), {}, {
                          "nth-child": null !== (Od = dd.nth_child) && void 0 !== Od ? Od : 0,
                          "nth-of-type": null !== (md = dd.nth_of_type) && void 0 !== md ? md : 0
                        }, dd.href ? {
                          href: dd.href
                        } : {}), dd.attr_id ? {
                          attr_id: dd.attr_id
                        } : {}), dd.attributes),
                        Rd = {};
                      return DX(Fd).sort(((dd, Od) => {
                        let [md] = dd, [Wd] = Od;
                        return function(dd, Od) {
                          return Od > dd ? -1 : dd > Od ? 1 : 0
                        }(md, Wd)
                      })).forEach((dd => {
                        let [Od, md] = dd;
                        return Rd[Th(Od.toString())] = Th(md.toString())
                      })), Wd += ":", Wd += DX(Rd).map((dd => {
                        let [Od, md] = dd;
                        return `${Od}="${md}"`
                      })).join(""), Wd
                    })).join(";")
                  }(function(dd) {
                    return dd.map((dd => {
                      var Od, md;
                      const Wd = {
                        text: null === (Od = dd.$el_text) || void 0 === Od ? void 0 : Od.slice(0, 400),
                        tag_name: dd.tag_name,
                        href: null === (md = dd.attr__href) || void 0 === md ? void 0 : md.slice(0, 2048),
                        attr_class: ph(dd),
                        attr_id: dd.attr__id,
                        nth_child: dd.nth_child,
                        nth_of_type: dd.nth_of_type,
                        attributes: {}
                      };
                      return DX(dd).filter((dd => {
                        let [Od] = dd;
                        return 0 === Od.indexOf("attr__")
                      })).forEach((dd => {
                        let [Od, md] = dd;
                        return Wd.attributes[Od] = md
                      })), Wd
                    }))
                  }(gd)) : "")
                }, (null === (hd = qd[0]) || void 0 === hd ? void 0 : hd.$el_text) ? {
                  $el_text: null === (vd = qd[0]) || void 0 === vd ? void 0 : vd.$el_text
                } : {}, yd && "click" === md.type ? {
                  $external_click_url: yd
                } : {}, Hd),
                target: dd
              };
              var gd, wd
            }(Wd, {
              e: dd,
              maskAllElementAttributes: Fd.maskAllElementAttributes,
              maskAllText: Fd.maskAllText,
              elementAttributeIgnoreList: Fd.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: Fd.disableCaptureUrlHashes
            });
            if (Rd) return !1;
            const Kd = this.getElementSelectors(Wd, Xd);
            if (Kd && Kd.length > 0 && (md.$element_selectors = Kd), Od === Zt) {
              const Od = dd.type || "clipboard";
              if ("paste" !== Od) {
                var vd, Qd;
                const dd = null == fO || null === (vd = fO.getSelection()) || void 0 === vd ? void 0 : vd.toString(),
                  Od = nK(dd);
                if (!Od) return !1;
                md.$selected_content = Od, md.$clipboard_text_length = null !== (Qd = null == dd ? void 0 : dd.length) && void 0 !== Qd ? Qd : 0
              }
              md.$copy_type = Od
            }
            return null === (hd = this._client) || void 0 === hd || hd.capture(Od, md), !0
          }
        }
        isBrowserSupported() {
          return am(null == Om ? void 0 : Om.querySelectorAll)
        }
      },
      mo = class {
        constructor(dd) {
          this._instance = dd
        }
        refresh(dd) {
          const Od = this._instance.config,
            md = Em(Od.autocapture) ? Od.autocapture : void 0;
          dd.enabled = !!Od.autocapture, dd.rageclick = Od.rageclick, dd.maskAllElementAttributes = Od.mask_all_element_attributes, dd.maskAllText = Od.mask_all_text, dd.disableCaptureUrlHashes = Od.disable_capture_url_hashes, dd.getCurrentUrl = Od.get_current_url, dd.remoteRequestsDisabled = this._instance._shouldDisableFlags(), dd.url_allowlist = null == md ? void 0 : md.url_allowlist, dd.url_ignorelist = null == md ? void 0 : md.url_ignorelist, dd.dom_event_allowlist = null == md ? void 0 : md.dom_event_allowlist, dd.element_allowlist = null == md ? void 0 : md.element_allowlist, dd.css_selector_allowlist = null == md ? void 0 : md.css_selector_allowlist, dd.css_selector_ignorelist = null == md ? void 0 : md.css_selector_ignorelist, dd.element_attribute_ignorelist = null == md ? void 0 : md.element_attribute_ignorelist, dd.capture_copied_text = null == md ? void 0 : md.capture_copied_text
        }
      };
    const Wo = PX("[ExceptionAutocapture]"),
      Fo = () => {},
      Ro = dd => {
        var Od;
        if (am(dd)) return null !== (Od = dd.__posthog_layer__) && void 0 !== Od ? Od : dd.__rrweb_layer__
      };

    function Xo(dd, Od, md) {
      try {
        if (!(Od in dd)) return Fo;
        const Wd = {
            next: dd[Od]
          },
          Fd = md((function() {
            for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
            return Wd.next.apply(this, Od)
          }));
        return am(Fd) && (Fd.prototype = Fd.prototype || {}, Object.defineProperties(Fd, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: Wd
          }
        })), dd[Od] = Fd, () => {
          if (dd[Od] === Fd) return void(dd[Od] = Wd.next);
          let md = dd[Od],
            Rd = Ro(md);
          for (; Rd;) {
            if (Rd.next === Fd) return void(Rd.next = Wd.next);
            md = Rd.next, Rd = Ro(md)
          }
        }
      } catch (dd) {
        return Fo
      }
    }
    const Ko = PX("[TracingHeaders]"),
      ho = PX("[Web Vitals]"),
      vo = 9e5,
      Qo = ["CLS", "FCP", "INP", "LCP"],
      to = ["INP", "LCP"],
      oo = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      No = "disabled",
      qo = "lazy_loading",
      Ho = PX("[SessionRecording]"),
      yo = [uO, VO, iO, AO, rO, GO, nO, LO, PO],
      bo = PX("[Heatmaps]");

    function To(dd) {
      return Em(dd) && "clientX" in dd && "clientY" in dd && um(dd.clientX) && um(dd.clientY)
    }
    const po = PX("[Product Tours]"),
      Yo = dd => {
        var Od;
        return !dd.config.disable_product_tours && !!(null === (Od = dd.persistence) || void 0 === Od ? void 0 : Od.get_property(jd))
      },
      go = ["$set_once", "$set"],
      wo = PX("[SiteApps]"),
      ao = "Error while initializing PostHog app with config id ",
      Eo = (dd, Od) => (null == dd ? void 0 : dd.then) ? dd.then(Od) : Od(dd),
      Jo = "SDK is not enabled or survey functionality is not yet loaded",
      Uo = "Disabled. Not loading surveys.";
    var xo = class {
      constructor(dd, Od) {
        this._configSource = dd, this._initialClientState = Od, this.name = wt, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = dd => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!dd.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), ot.warn("Remote config unavailable. Not loading surveys.");
          const Od = dd.config.surveys;
          if (sm(Od)) return ot.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = im(Od) ? Od : Od.length > 0, ot.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = dd => {
          this._activeMatchingSurveyCallbacks.slice().forEach((Od => this._notifyActiveMatchingSurveyCallback(Od, dd)))
        }
      }
      setup(dd) {
        if (!this._disposed) return this._initializingClient = dd, Eo(dd.kv.initialize(), (() => {
          if (this._initializingClient !== dd || this._disposed) return;
          this._initializingClient = void 0, this._client = dd;
          const Od = dd.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? Od.dispose() : (this._remoteConfigSubscription = Od, this.loadIfEnabled())
        }))
      }
      dispose() {
        var dd, Od, md, Wd, Fd;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (dd = this._remoteConfigSubscription) || void 0 === dd || dd.dispose(), this._remoteConfigSubscription = void 0, null === (Od = this._surveyEventReceiver) || void 0 === Od || Od.dispose(), this._surveyEventReceiver = null, null === (md = this._surveyManager) || void 0 === md || null === (Wd = md.dispose) || void 0 === Wd || Wd.call(md), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((dd => {
          dd.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (Fd = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === Fd || Fd.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((dd => clearTimeout(dd))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var dd, Od;
        null === (dd = this._surveyManager) || void 0 === dd || null === (Od = dd.clearInMemoryInProgressSurveyState) || void 0 === Od || Od.call(dd);
        try {
          var md;
          null === (md = this._surveyEventReceiver) || void 0 === md || md.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const dd = [];
          for (let Od = 0; Od < localStorage.length; Od++) {
            const md = localStorage.key(Od);
            ((null == md ? void 0 : md.startsWith("seenSurvey_")) || (null == md ? void 0 : md.startsWith("inProgressSurvey_"))) && dd.push(md)
          }
          dd.forEach((dd => localStorage.removeItem(dd)))
        } catch (dd) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const dd = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void ot.info("Already initializing surveys, skipping...");
        if (dd.disableSurveys) return void ot.info(Uo);
        if (dd.cookielessMode && this._configSource.isOptedOut()) return void ot.info("Not loading surveys in cookieless mode without consent.");
        const Od = this._configSource.getExtensions();
        if (!Od) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (Um(this._isSurveysEnabled) && !dd.advancedEnableSurveys) return;
        const md = this._isSurveysEnabled || dd.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const dd = Od.generateSurveys;
          if (dd) return this._completeSurveyInitialization(dd, md), void(this._isInitializingSurveys = !1);
          const Wd = Od.loadExternalDependency;
          if (!Wd) return this._handleSurveyLoadError(cO), void(this._isInitializingSurveys = !1);
          Wd((dd => {
            try {
              if (this._disposed) return;
              const Od = this._configSource.getExtensions();
              dd || !(null == Od ? void 0 : Od.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", dd) : this._completeSurveyInitialization(Od.generateSurveys, md)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (dd) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", dd), dd
        }
      }
      _completeSurveyInitialization(dd, Od) {
        var md, Wd;
        if (this._disposed) return;
        this._surveyManager = dd(Od), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const Fd = null === (md = null !== (Wd = this._client) && void 0 !== Wd ? Wd : this._initialClientState) || void 0 === md ? void 0 : md.kv.get(hO);
        Fd && this._registerEventOrActionBasedSurveys(Fd), ot.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(dd, Od) {
        this._surveyInitializationFailed = !0, ot.error(dd, Od), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: dd
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: dd
        })
      }
      onSurveysLoaded(dd) {
        return this._surveyCallbacks.push(dd), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((Od => Od !== dd))
        }
      }
      getSurveys(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var md;
        const Wd = null !== (md = this._client) && void 0 !== md ? md : this._initialClientState;
        if (!Wd || this._disposed) return;
        if (this._config.disableSurveys) return ot.info(Uo), dd([]);
        const Fd = Wd.kv.get(hO);
        if (Fd && !Od) return dd(Fd, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((Od => {
          let {
            surveys: md,
            context: Wd
          } = Od;
          this._disposed || dd(md, Wd)
        })).catch((dd => ot.error("Error in survey callback", dd)));
        const Rd = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: Wd.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((dd => {
          try {
            return this._handleSurveyResponse(Wd, dd)
          } catch (dd) {
            return ot.error("Error processing surveys response", dd), this._handleSurveyResponse(Wd, {
              statusCode: 0,
              error: dd
            })
          }
        }), (dd => this._handleSurveyResponse(Wd, {
          statusCode: 0,
          error: dd
        })));
        this._getSurveysInFlightPromise = Rd;
        const Xd = () => {
          this._getSurveysInFlightPromise === Rd && (this._getSurveysInFlightPromise = null)
        };
        Rd.then((Od => {
          Xd(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(Od.context), dd(Od.surveys, Od.context))
        }), Xd).catch((dd => ot.error("Error in survey callback", dd)))
      }
      _sendSurveysRequest(dd, Od) {
        const md = this._client;
        return md ? md.sendRequest(dd, Od) : new Promise((dd => dd({
          statusCode: 0,
          error: new Error(Jo)
        })))
      }
      _handleSurveyResponse(dd, Od) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: Jo
          }
        };
        const md = Od.statusCode;
        if (200 !== md || !Od.json) {
          const dd = `Surveys API could not be loaded, status: ${md}`;
          return 0 !== md ? ot.error(dd) : Od.error || ot.warn(dd), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: dd
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const Wd = Od.json.surveys || [];
        return dd.kv.set({
          [hO]: Wd,
          [vO]: Date.now()
        }), this._registerEventOrActionBasedSurveys(Wd), {
          surveys: Wd,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(dd) {
        var Od;
        const md = dd.filter((dd => function(dd) {
          return !(!dd.start_date || dd.end_date)
        }(dd) && (Ot(dd) || function(dd) {
          var Od;
          return !!(null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.actions) || void 0 === Od || null === (Od = Od.values) || void 0 === Od ? void 0 : Od.length)
        }(dd))));
        null === (Od = this._surveyEventReceiver) || void 0 === Od || Od.replace(md)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var dd, Od;
        const md = null === (dd = null !== (Od = this._client) && void 0 !== Od ? Od : this._initialClientState) || void 0 === dd ? void 0 : dd.kv.get(vO);
        return um(md) && Date.now() - md > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return um(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(dd, Od) {
        var md;
        const Wd = {
          id: dd,
          current_iteration: null !== (md = null == Od ? void 0 : Od.iteration) && void 0 !== md ? md : null
        };
        Nt(Wd);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (dd) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(dd) {
        for (const Od of this._surveyCallbacks) try {
          if (!dd.isLoaded) return Od([], dd);
          this.getSurveys(Od)
        } catch (dd) {
          ot.error("Error in survey callback", dd)
        }
      }
      getActiveMatchingSurveys(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!sm(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(dd, Od);
        ot.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(dd) {
        var Od, md;
        if (this._disposed) return () => {};
        const Wd = {
          callback: dd,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(Wd), this._startActiveMatchingSurveyConditions();
        const Fd = null === (Od = null !== (md = this._client) && void 0 !== md ? md : this._initialClientState) || void 0 === Od ? void 0 : Od.kv.get(hO);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !Fd && !sm(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(Wd, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(Wd), () => {
          var dd;
          Wd.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((dd => dd !== Wd)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (dd = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === dd || dd.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var dd, Od, md;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (dd = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== dd || (this._activeMatchingSurveyConditionsUnsubscribe = null === (Od = (md = this._configSource).onMatchingConditionsChanged) || void 0 === Od ? void 0 : Od.call(md, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(dd, Od) {
        if (this._disposed || !dd.active) return;
        const md = ++dd.revision,
          Wd = Wd => {
            if (!this._disposed && dd.active && md === dd.revision) try {
              const md = null != Od ? Od : {
                  isLoaded: !0
                },
                Fd = JSON.stringify([Wd, md]);
              if (Fd === dd.lastResult) return;
              dd.lastResult = Fd, dd.callback(Wd, md)
            } catch (dd) {
              ot.error("Error in active matching surveys callback", dd)
            }
          };
        try {
          Od && !Od.isLoaded ? Wd([]) : this.getActiveMatchingSurveys(Wd)
        } catch (dd) {
          ot.error("Error in active matching surveys callback", dd)
        }
      }
      _getSurveyById(dd) {
        let Od = null;
        return this.getSurveys((md => {
          var Wd;
          Od = null !== (Wd = md.find((Od => Od.id === dd))) && void 0 !== Wd ? Wd : null
        })), Od
      }
      _checkSurveyEligibility(dd) {
        if (sm(this._surveyManager)) return {
          eligible: !1,
          reason: Jo
        };
        const Od = "string" == typeof dd ? this._getSurveyById(dd) : dd;
        return Od ? this._surveyManager.checkSurveyEligibility(Od) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(dd) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (sm(this._surveyManager)) return {
          eligible: !1,
          reason: Jo
        };
        const Od = "string" == typeof dd ? this._getSurveyById(dd) : dd;
        return Od ? this._surveyManager.checkSurveyRenderability(Od) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(dd) {
        if (sm(this._surveyManager)) return ot.warn("init was not called"), {
          visible: !1,
          disabledReason: Jo
        };
        const Od = this._checkSurveyRenderability(dd);
        return {
          visible: Od.eligible,
          disabledReason: Od.reason
        }
      }
      canRenderSurveyAsync(dd, Od) {
        return sm(this._surveyManager) ? (ot.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: Jo
        })) : new Promise((md => {
          this.getSurveys((Od => {
            var Wd;
            const Fd = null !== (Wd = Od.find((Od => Od.id === dd))) && void 0 !== Wd ? Wd : null;
            if (Fd) {
              const dd = this._checkSurveyRenderability(Fd);
              md({
                visible: dd.eligible,
                disabledReason: dd.reason
              })
            } else md({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), Od)
        }))
      }
      renderSurvey(dd, Od, md) {
        var Wd;
        if (!this._configSource.isCapturing()) return;
        if (sm(this._surveyManager)) return void ot.warn("init was not called");
        const Fd = "string" == typeof dd ? this._getSurveyById(dd) : dd;
        if (!(null == Fd ? void 0 : Fd.id)) return void ot.warn("Survey not found");
        if (!qt.includes(Fd.type)) return void ot.warn(`Surveys of type ${Fd.type} cannot be rendered in the app`);
        const Rd = null == Om ? void 0 : Om.querySelector(Od);
        if (Rd) {
          if (null === (Wd = Fd.appearance) || void 0 === Wd ? void 0 : Wd.surveyPopupDelaySeconds) {
            ot.info(`Rendering survey ${Fd.id} with delay of ${Fd.appearance.surveyPopupDelaySeconds} seconds`);
            const dd = setTimeout((() => {
              var Od, Wd;
              this._renderTimeouts.delete(dd), !this._disposed && this._configSource.isCapturing() && (ot.info(`Rendering survey ${Fd.id} with delay of ${null===(Od=Fd.appearance)||void 0===Od?void 0:Od.surveyPopupDelaySeconds} seconds`), null === (Wd = this._surveyManager) || void 0 === Wd || Wd.renderSurvey(Fd, Rd, md), ot.info(`Survey ${Fd.id} rendered`))
            }), 1e3 * Fd.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(dd)
          }
          this._surveyManager.renderSurvey(Fd, Rd, md)
        } else ot.warn("Survey element not found")
      }
      displaySurvey(dd, Od) {
        var md;
        if (!this._configSource.isCapturing()) return;
        if (sm(this._surveyManager)) return void ot.warn("init was not called");
        const Wd = this._getSurveyById(dd);
        if (!Wd) return void ot.warn("Survey not found");
        let Fd = Wd;
        if ((null === (md = Wd.appearance) || void 0 === md ? void 0 : md.surveyPopupDelaySeconds) && Od.ignoreDelay && (Fd = gF(gF({}, Wd), {}, {
            appearance: gF(gF({}, Wd.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), Od.displayType !== sv && Od.initialResponses && ot.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === Od.ignoreConditions) {
          const dd = this._checkSurveyEligibility(Wd);
          if (!dd.eligible) return void ot.warn("Survey is not eligible to be displayed: ", dd.reason)
        }
        Od.displayType !== uv ? this._surveyManager.handlePopoverSurvey(Fd, Od) : this.renderSurvey(Fd, Od.selector, Od.properties)
      }
      cancelPendingSurvey(dd) {
        sm(this._surveyManager) ? ot.warn("init was not called") : this._surveyManager.cancelSurvey(dd)
      }
      handlePageUnload() {
        var dd, Od;
        null === (dd = this._surveyManager) || void 0 === dd || null === (Od = dd.handlePageUnload) || void 0 === Od || Od.call(dd)
      }
    };

    function Bo(dd, Od, md) {
      if (sm(dd)) return !1;
      switch (md) {
        case "exact":
          return dd === Od;
        case "contains": {
          const md = Od.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(md, "i").test(dd)
        }
        case "regex":
          try {
            return new RegExp(Od).test(dd)
          } catch (dd) {
            return !1
          }
        default:
          return !1
      }
    }
    var So = class {
        constructor(dd) {
          this._instance = dd, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new lQ, this._checkStep = (dd, Od) => this._checkStepEvent(dd, Od) && this._checkStepUrl(dd, Od) && this._checkStepElement(dd, Od) && this._checkStepProperties(dd, Od), this._checkStepEvent = (dd, Od) => !(null == Od ? void 0 : Od.event) || (null == dd ? void 0 : dd.event) === (null == Od ? void 0 : Od.event)
        }
        init() {
          var dd, Od;
          Um(null === (dd = this._instance) || void 0 === dd ? void 0 : dd._addCaptureHook) || (this._captureHookUnsubscribe = null === (Od = this._instance) || void 0 === Od ? void 0 : Od._addCaptureHook(((dd, Od) => {
            this.on(dd, Od)
          })))
        }
        dispose() {
          var dd, Od;
          null === (dd = this._captureHookUnsubscribe) || void 0 === dd || dd.call(this), this._captureHookUnsubscribe = void 0, null === (Od = this._instance) || void 0 === Od || null === (Od = Od.autocapture) || void 0 === Od || Od.setElementSelectors(new Set, this), this._debugEventEmitter = new lQ
        }
        register(dd) {
          var Od, md;
          if (!Um(null === (Od = this._instance) || void 0 === Od ? void 0 : Od._addCaptureHook) && (dd.forEach((dd => {
              var Od;
              this._actionRegistry.add(dd), null === (Od = dd.steps) || void 0 === Od || Od.forEach((dd => {
                this._actionEvents.add((null == dd ? void 0 : dd.event) || "")
              }))
            })), null === (md = this._instance) || void 0 === md ? void 0 : md.autocapture)) {
            const dd = new Set;
            this._actionRegistry.forEach((Od => {
              var md;
              null === (md = Od.steps) || void 0 === md || md.forEach((Od => {
                (null == Od ? void 0 : Od.selector) && dd.add(Od.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(dd, this)
          }
        }
        replace(dd) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(dd)
        }
        on(dd, Od) {
          null != Od && 0 != dd.length && (this._actionEvents.has(dd) || this._actionEvents.has(Od.event)) && this._actionRegistry.forEach((dd => {
            this._checkAction(Od, dd) && this._debugEventEmitter.emit("actionCaptured", dd.name)
          }))
        }
        _addActionHook(dd) {
          this.onAction("actionCaptured", (Od => dd(Od)))
        }
        _checkAction(dd, Od) {
          if (null == (null == Od ? void 0 : Od.steps)) return !1;
          for (const md of Od.steps)
            if (this._checkStep(dd, md)) return !0;
          return !1
        }
        onAction(dd, Od) {
          return this._debugEventEmitter.on(dd, Od)
        }
        _checkStepUrl(dd, Od) {
          if (null == Od ? void 0 : Od.url) {
            var md;
            const Wd = null == dd || null === (md = dd.properties) || void 0 === md ? void 0 : md.$current_url;
            if (!Wd || "string" != typeof Wd) return !1;
            if (!Bo(Wd, Od.url, Od.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(dd, Od) {
          return !!this._checkStepHref(dd, Od) && !!this._checkStepText(dd, Od) && !!this._checkStepSelector(dd, Od)
        }
        _checkStepHref(dd, Od) {
          var md;
          if (!(null == Od ? void 0 : Od.href)) return !0;
          const Wd = this._getElementsList(dd);
          if (Wd.length > 0) return Wd.some((dd => Bo(dd.href, Od.href, Od.href_matching || "exact")));
          const Fd = (null == dd || null === (md = dd.properties) || void 0 === md ? void 0 : md.$elements_chain) || "";
          return !!Fd && Bo(function(dd) {
            const Od = dd.match(/(?::|")href="(.*?)"/);
            return Od ? Od[1] : ""
          }(Fd), Od.href, Od.href_matching || "exact")
        }
        _checkStepText(dd, Od) {
          var md;
          if (!(null == Od ? void 0 : Od.text)) return !0;
          const Wd = this._getElementsList(dd);
          if (Wd.length > 0) return Wd.some((dd => Bo(dd.text, Od.text, Od.text_matching || "exact") || Bo(dd.$el_text, Od.text, Od.text_matching || "exact")));
          const Fd = (null == dd || null === (md = dd.properties) || void 0 === md ? void 0 : md.$elements_chain) || "";
          return !!Fd && (Rd = function(dd) {
            const Od = [],
              md = /(?::|")text="(.*?)"/g;
            let Wd;
            for (; !sm(Wd = md.exec(dd));) Od.includes(Wd[1]) || Od.push(Wd[1]);
            return Od
          }(Fd), Xd = Od.text, Kd = Od.text_matching || "exact", Rd.some((dd => Bo(dd, Xd, Kd))));
          var Rd, Xd, Kd
        }
        _checkStepSelector(dd, Od) {
          var md, Wd;
          if (!(null == Od ? void 0 : Od.selector)) return !0;
          const Fd = null == dd || null === (md = dd.properties) || void 0 === md ? void 0 : md.$element_selectors;
          if (null == Fd ? void 0 : Fd.includes(Od.selector)) return !0;
          const Rd = (null == dd || null === (Wd = dd.properties) || void 0 === Wd ? void 0 : Wd.$elements_chain) || "";
          if (Od.selector_regex && Rd) try {
            return new RegExp(Od.selector_regex).test(Rd)
          } catch (dd) {
            return !1
          }
          return !1
        }
        _getElementsList(dd) {
          var Od;
          return null == (null == dd || null === (Od = dd.properties) || void 0 === Od ? void 0 : Od.$elements) ? [] : null == dd ? void 0 : dd.properties.$elements
        }
        _checkStepProperties(dd, Od) {
          return !(null == Od ? void 0 : Od.properties) || 0 === Od.properties.length || Rt(Od.properties.reduce(((dd, Od) => {
            const md = wm(Od.value) ? Od.value.map(String) : null != Od.value ? [String(Od.value)] : [];
            return dd[Od.key] = {
              values: md,
              operator: Od.operator || "exact"
            }, dd
          }), {}), null == dd ? void 0 : dd.properties)
        }
      },
      so = class {
        constructor(dd, Od) {
          var md, Wd;
          this._pendingActivatedItems = [], this._instance = dd, this._onActivationChanged = Od, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (md = this._instance) || void 0 === md || null === (Wd = md.onSessionId) || void 0 === Wd ? void 0 : Wd.call(md, (dd => this._onSessionIdChanged(dd)))
        }
        _shouldPersistArmedActivation(dd) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(dd) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(dd, Od) {
          return !!dd && Rt(dd.propertyFilters, null == Od ? void 0 : Od.properties)
        }
        _buildEventToItemMap(dd, Od) {
          const md = new Map;
          return dd.forEach((dd => {
            var Wd;
            null === (Wd = dd.conditions) || void 0 === Wd || null === (Wd = Wd[Od]) || void 0 === Wd || null === (Wd = Wd.values) || void 0 === Wd || Wd.forEach((Od => {
              if (null == Od ? void 0 : Od.name) {
                const Wd = md.get(Od.name) || [];
                Wd.push(dd.id), md.set(Od.name, Wd)
              }
            }))
          })), md
        }
        _getMatchingItems(dd, Od, md) {
          const Wd = (md === pv ? this._eventToItems : this._cancelEventToItems).get(dd);
          let Fd = [];
          return this._getItems((dd => {
            Fd = dd.filter((dd => null == Wd ? void 0 : Wd.includes(dd.id)))
          })), Fd.filter((Wd => {
            var Fd;
            const Rd = null === (Fd = Wd.conditions) || void 0 === Fd || null === (Fd = Fd[md]) || void 0 === Fd || null === (Fd = Fd.values) || void 0 === Fd ? void 0 : Fd.find((Od => Od.name === dd));
            return this._doesEventMatchFilter(Rd, Od)
          }))
        }
        register(dd) {
          this._register(dd, !1)
        }
        replace(dd) {
          this._register(dd, !0)
        }
        _register(dd, Od) {
          var md;
          Um(null === (md = this._instance) || void 0 === md ? void 0 : md._addCaptureHook) || (this._setupEventBasedItems(dd, Od), this._setupActionBasedItems(dd, Od))
        }
        _setupActionBasedItems(dd, Od) {
          const md = dd.filter((dd => {
            var Od;
            return null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.actions) || void 0 === Od || null === (Od = Od.values) || void 0 === Od ? void 0 : Od.length
          }));
          var Wd;
          if (Od && this._actionToItems.clear(), 0 === md.length) return void(Od && (null === (Wd = this._actionMatcher) || void 0 === Wd || Wd.replace([])));
          this._actionMatcher || (this._actionMatcher = new So(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((dd => this.onAction(dd))));
          const Fd = [];
          md.forEach((dd => {
            var Od;
            null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.actions) || void 0 === Od || Od.values.forEach((Od => {
              if (Fd.push(Od), Od.name) {
                var md;
                const Wd = null !== (md = this._actionToItems.get(Od.name)) && void 0 !== md ? md : [];
                Wd.includes(dd.id) || Wd.push(dd.id), this._actionToItems.set(Od.name, Wd)
              }
            }))
          })), Od ? this._actionMatcher.replace(Fd) : this._actionMatcher.register(Fd)
        }
        _mergeItemMaps(dd, Od) {
          Od.forEach(((Od, md) => {
            var Wd;
            const Fd = null !== (Wd = dd.get(md)) && void 0 !== Wd ? Wd : [];
            Od.forEach((dd => {
              Fd.includes(dd) || Fd.push(dd)
            })), dd.set(md, Fd)
          }))
        }
        _setupEventBasedItems(dd, Od) {
          var md, Wd;
          const Fd = dd.filter((dd => {
              var Od, md;
              return (null === (Od = dd.conditions) || void 0 === Od ? void 0 : Od.events) && (null === (md = dd.conditions) || void 0 === md || null === (md = md.events) || void 0 === md || null === (md = md.values) || void 0 === md ? void 0 : md.length) > 0
            })),
            Rd = dd.filter((dd => {
              var Od, md;
              return (null === (Od = dd.conditions) || void 0 === Od ? void 0 : Od.cancelEvents) && (null === (md = dd.conditions) || void 0 === md || null === (md = md.cancelEvents) || void 0 === md || null === (md = md.values) || void 0 === md ? void 0 : md.length) > 0
            })),
            Xd = this._buildEventToItemMap(dd, pv),
            Kd = this._buildEventToItemMap(dd, Yv);
          Od ? (this._eventToItems = Xd, this._cancelEventToItems = Kd) : (this._mergeItemMaps(this._eventToItems, Xd), this._mergeItemMaps(this._cancelEventToItems, Kd)), (0 !== Fd.length || 0 !== Rd.length || dd.some((dd => {
            var Od;
            return null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.actions) || void 0 === Od || null === (Od = Od.values) || void 0 === Od ? void 0 : Od.length
          }))) && (null !== (md = this._captureHookUnsubscribe) && void 0 !== md || (this._captureHookUnsubscribe = null === (Wd = this._instance) || void 0 === Wd ? void 0 : Wd._addCaptureHook(((dd, Od) => {
            this.onEvent(dd, Od)
          }))))
        }
        onEvent(dd, Od) {
          var md, Wd;
          const Fd = this._getLogger(),
            Rd = (null == Od || null === (md = Od.properties) || void 0 === md ? void 0 : md.$survey_id) || (null == Od || null === (Wd = Od.properties) || void 0 === Wd ? void 0 : Wd.$product_tour_id);
          if (Rd && this.getActivatedIds().includes(Rd)) {
            const md = this._activationOutcome(dd, Rd, Od);
            if ("consume" === md) return Fd.info("event consumed activated item, removing it", {
              event: dd,
              itemId: Rd
            }), void this._deactivateItems([Rd]);
            if ("persist" === md) return Fd.info("shown item promoted to persisted activation", {
              event: dd,
              itemId: Rd
            }), this._persistActivation(Rd), void this._clearActivationTimestamps([Rd])
          }
          if (this._cancelEventToItems.has(dd)) {
            const md = this._getMatchingItems(dd, Od, Yv);
            md.length > 0 && (Fd.info("cancel event matched, cancelling items", {
              event: dd,
              itemsToCancel: md.map((dd => dd.id))
            }), this._deactivateItems(md.map((dd => dd.id))), md.forEach((dd => this._cancelPendingItem(dd.id))))
          }
          if (!this._eventToItems.has(dd)) return;
          Fd.info("event name matched", {
            event: dd,
            eventPayload: Od,
            items: this._eventToItems.get(dd)
          });
          const Xd = this._getMatchingItems(dd, Od, pv);
          this._activateItems(Xd.map((dd => dd.id)))
        }
        onAction(dd) {
          this._actionToItems.has(dd) && this._activateItems(this._actionToItems.get(dd) || [])
        }
        _activateItems(dd) {
          var Od, md;
          if (0 === dd.length) return;
          const Wd = !!(null === (Od = this._instance) || void 0 === Od || null === (md = Od.get_session_id) || void 0 === md ? void 0 : md.call(Od)),
            Fd = [];
          for (const Rd of dd) Wd && this._shouldPersistArmedActivation(Rd) ? this._persistActivation(Rd) && this._recordActivationTimestamp(Rd) : Fd.push(Rd);
          Fd.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...Fd])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(dd) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((Od => Od !== dd));
          const Od = this._getPersistedActivatedIds();
          return !Od.includes(dd) && (this._setActivatedItems([...Od, dd]), this._stampActivationSession(), !0)
        }
        _deactivateItems(dd) {
          const Od = new Set(dd);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((dd => !Od.has(dd)));
          const md = this._getRawPersistedActivatedIds(),
            Wd = md.filter((dd => !Od.has(dd)));
          Wd.length !== md.length && (this._setActivatedItems(Wd), 0 === Wd.length && this._clearActivationSession()), this._clearActivationTimestamps(dd), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var dd;
            null === (dd = this._onActivationChanged) || void 0 === dd || dd.call(this)
          } catch (dd) {
            this._getLogger().error("Error while handling activated items change", dd)
          }
        }
        _getRawActivationTimestamps() {
          var dd;
          const Od = this._getActivationTimestampsKey();
          if (!Od) return {};
          const md = null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd ? void 0 : dd.props[Od];
          return md && "object" == typeof md ? md : {}
        }
        _recordActivationTimestamp(dd) {
          if (!this._getActivationTimestampsKey()) return;
          const Od = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(gF(gF({}, Od), {}, {
            [dd]: Date.now()
          }))
        }
        _clearActivationTimestamps(dd) {
          if (!this._getActivationTimestampsKey()) return;
          const Od = this._getRawActivationTimestamps(),
            md = {};
          let Wd = !1;
          for (const [Fd, Rd] of Object.entries(Od)) dd.includes(Fd) ? Wd = !0 : md[Fd] = Rd;
          Wd && (Jm(md) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(md))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(dd) {
          if (!this._getPersistedActivatedIds().includes(dd)) return;
          const Od = this._getRawActivationTimestamps()[dd];
          return um(Od) ? Od : void 0
        }
        _getRawPersistedActivatedIds() {
          var dd;
          const Od = this._getActivatedKey();
          return (null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd ? void 0 : dd.props[Od]) || []
        }
        _getPersistedActivatedIds() {
          var dd, Od, md;
          const Wd = this._getRawPersistedActivatedIds();
          if (0 === Wd.length) return [];
          const Fd = null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd ? void 0 : dd.props[this._getActivatedSessionKey()],
            Rd = null === (Od = this._instance) || void 0 === Od || null === (md = Od.get_session_id) || void 0 === md ? void 0 : md.call(Od);
          return Rd && Fd === Rd ? Wd : []
        }
        _stampActivationSession() {
          var dd, Od;
          const md = null === (dd = this._instance) || void 0 === dd || null === (Od = dd.get_session_id) || void 0 === Od ? void 0 : Od.call(dd);
          md && this._setActivatedSession(md)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(dd) {
          var Od;
          const md = null === (Od = this._instance) || void 0 === Od || null === (Od = Od.persistence) || void 0 === Od ? void 0 : Od.props[this._getActivatedSessionKey()];
          if (md && md !== dd) {
            const dd = this._getRawPersistedActivatedIds(),
              Od = this._getRawActivationTimestamps();
            dd.length > 0 && (this._setActivatedItems([]), dd.filter((dd => um(Od[dd]))).forEach((dd => this._cancelPendingItem(dd)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), dd.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((dd => !this._isItemPermanentlyIneligible(dd)))
        }
        dispose() {
          var dd, Od, md;
          null === (dd = this._sessionIdUnsubscribe) || void 0 === dd || dd.call(this), this._sessionIdUnsubscribe = void 0, null === (Od = this._captureHookUnsubscribe) || void 0 === Od || Od.call(this), this._captureHookUnsubscribe = void 0, null === (md = this._actionMatcher) || void 0 === md || md.dispose(), this._actionMatcher = void 0
        }
        reset() {
          this._pendingActivatedItems = [], this._getRawPersistedActivatedIds().length > 0 && this._setActivatedItems([]), this._clearActivationSession(), this._clearAllActivationTimestamps(), this._notifyActivationChanged()
        }
        getEventToItemsMap() {
          return this._eventToItems
        }
        _getActionMatcher() {
          return this._actionMatcher
        }
      },
      uo = class extends so {
        constructor(dd, Od) {
          super(dd, Od)
        }
        _getActivatedKey() {
          return QO
        }
        _getActivatedSessionKey() {
          return tO
        }
        _getActivationTimestampsKey() {
          return oO
        }
        _writeActivationTimestamps(dd) {
          var Od;
          null === (Od = this._instance) || void 0 === Od || null === (Od = Od.persistence) || void 0 === Od || Od.register({
            $surveys_activated_timestamps: dd
          })
        }
        _clearActivationTimestampsStore() {
          var dd;
          null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd || dd.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(dd) {
          var Od;
          let md;
          this._getItems((Od => {
            md = Od.find((Od => Od.id === dd))
          }));
          const Wd = null == md || null === (Od = md.appearance) || void 0 === Od ? void 0 : Od.surveyPopupDelaySeconds;
          return um(Wd) && Wd > 0
        }
        _getShownEventName() {
          return Ev
        }
        _getItems(dd) {
          var Od;
          null === (Od = this._instance) || void 0 === Od || Od.getSurveys(dd)
        }
        _cancelPendingItem(dd) {
          var Od;
          null === (Od = this._instance) || void 0 === Od || Od.cancelPendingSurvey(dd)
        }
        _getLogger() {
          return ot
        }
        _setActivatedItems(dd) {
          var Od;
          null === (Od = this._instance) || void 0 === Od || null === (Od = Od.persistence) || void 0 === Od || Od.register({
            $surveys_activated: dd
          })
        }
        _setActivatedSession(dd) {
          var Od;
          null === (Od = this._instance) || void 0 === Od || null === (Od = Od.persistence) || void 0 === Od || Od.register({
            $surveys_activated_session: dd
          })
        }
        _clearActivatedSession() {
          var dd;
          null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd || dd.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(dd, Od, md) {
          var Wd;
          if (dd === Uv && !1 === (null == md || null === (Wd = md.properties) || void 0 === Wd ? void 0 : Wd.$survey_completed)) return "ignore";
          let Fd;
          return this._getItems((dd => {
            Fd = dd.find((dd => dd.id === Od))
          })), !Fd || function(dd) {
            var Od;
            return Ot(dd) && !!(null === (Od = dd.conditions) || void 0 === Od || null === (Od = Od.events) || void 0 === Od ? void 0 : Od.repeatedActivation) || "always" === dd.schedule
          }(Fd) ? dd === Ev ? "consume" : "ignore" : dd === Ev ? "persist" : dd === Jv || dd === Uv ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      Vo = class {
        constructor(dd) {
          this._instance = dd
        }
        initialize() {}
        get(dd) {
          if ("string" == typeof dd) return this._instance.get_property(dd);
          const Od = {};
          for (const md of dd) {
            const dd = this._instance.get_property(md);
            Um(dd) || (Od[md] = dd)
          }
          return Od
        }
        set(dd, Od) {
          this._instance.register("string" == typeof dd ? {
            [dd]: Od
          } : dd)
        }
        remove(dd) {
          "string" != typeof dd ? dd.forEach((dd => this._instance.unregister(dd))) : this._instance.unregister(dd)
        }
      },
      io = class {
        constructor(dd) {
          this._instance = dd
        }
        get() {
          const dd = this._instance.config;
          return {
            disableSurveys: dd.disable_surveys,
            cookielessMode: !!dd.cookieless_mode,
            advancedEnableSurveys: dd.advanced_enable_surveys,
            requestTimeoutMs: dd.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const dd = null == Qm ? void 0 : Qm.__PosthogExtensions__;
          if (!dd) return;
          const {
            generateSurveys: Od,
            loadExternalDependency: md
          } = dd;
          return {
            generateSurveys: Od ? dd => Od(this._instance, dd) : void 0,
            loadExternalDependency: md ? dd => md(this._instance, "surveys", dd) : void 0
          }
        }
        createEventReceiver(dd) {
          return new uo(this._instance, dd)
        }
        onMatchingConditionsChanged(dd) {
          const Od = this._instance._addCaptureHook((Od => {
              "$pageview" !== Od && Od !== Ev && Od !== Jv && Od !== Uv || dd()
            })),
            md = () => dd();
          kX(fO, "PHSurveyShown", md);
          let Wd = !1;
          const Fd = this._instance.onFeatureFlags((() => {
            Wd && dd()
          }));
          return Wd = !0, () => {
            Wd = !1, Od(), Fd(), null == fO || fO.removeEventListener("PHSurveyShown", md)
          }
        }
      };
    const Ao = (null == fO ? void 0 : fO.location) ? jh(fO.location.hash, "__posthog") || jh(location.hash, "state") : null,
      ro = "_postHogToolbarParams",
      Go = PX("[Toolbar]"),
      no = PX("[FeatureFlags]"),
      Lo = PX("[FeatureFlags]", {
        debugEnabled: !0
      }),
      Po = "\" failed. Feature flags didn't load in time.",
      zo = [502, 504],
      co = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      jo = "connection_error",
      Do = dd => {
        const Od = {};
        for (let md = 0; dd.length > md; md++) Od[dd[md]] = !0;
        return Od
      },
      eo = dd => {
        const Od = {};
        for (const [md, Wd] of DX(dd || {})) Wd && (Od[md] = Wd);
        return Od
      };
    var Io = class {
      constructor(dd) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = no, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const dd = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, dd && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var dd, Od;
          const md = this._refreshIntervalMs,
            Wd = null !== (dd = this._dueRefreshIntervalMs) && void 0 !== dd ? dd : md;
          Um(md) || Um(Wd) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (Od = this._lastRefreshAt) && void 0 !== Od ? Od : 0) < Wd || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? md : Math.min(2 * Wd, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var dd;
          "visible" === (null === (dd = this._document) || void 0 === dd ? void 0 : dd.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = dd
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(dd) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (dd) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = dd, this._logger = dd.logger.createLogger("[FeatureFlags]"), Eo(dd.kv.initialize(), (() => {
          this._initializingClient === dd && (this._initializingClient = void 0, this._client = dd, this._finishSetup(dd))
        }))
      }
      _finishSetup(dd) {
        var Od;
        if (this._client === dd) return this._window && kX(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = dd.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (Od = this._crossTabPersistence) || void 0 === Od ? void 0 : Od.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var dd;
        const Od = this._config.refreshIntervalMs,
          md = !this._config.remoteRequestsDisabled && this._document && !Um(Od) && Od > 0 ? Od : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = md), md !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), Um(md) || (this._refreshIntervalMs = md, this._dueRefreshIntervalMs = md, this._scheduleNextRefresh(), (null === (dd = this._document) || void 0 === dd ? void 0 : dd.addEventListener) && (kX(this._document, gd, this._onVisibilityChange), zX(co, (dd => {
          kX(this._document, dd, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        Um(this._refreshIntervalMs) || (Um(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var dd, Od;
        Um(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (dd = this._document) || void 0 === dd || null === (Od = dd.removeEventListener) || void 0 === Od || Od.call(dd, "visibilitychange", this._onVisibilityChange), zX(co, (dd => {
          var Od, md;
          null === (Od = this._document) || void 0 === Od || null === (md = Od.removeEventListener) || void 0 === md || md.call(Od, dd, this._onUserInteraction, {
            capture: !0
          })
        }))), this._refreshIntervalMs = void 0, this._dueRefreshIntervalMs = void 0, this._hadUserInteraction = !1, this._lastRefreshAt = void 0
      }
      destroy() {
        this._dispose()
      }
      dispose() {
        this._dispose()
      }
      _dispose() {
        var dd, Od, md;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Ad"), this._settleReloads(this._activeReloads, "Ad"), this._client && (this._clearDebouncer(), null === (dd = this._dynamicProperties) || void 0 === dd || dd.dispose(), this._dynamicProperties = void 0, null === (Od = this._crossTabPersistenceUnsubscribe) || void 0 === Od || Od.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (md = this._window) || void 0 === md || md.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(dd) {
        var Od;
        return this._bootstrapState && dd in this._bootstrapState ? this._bootstrapState[dd] : null === (Od = this._client) || void 0 === Od ? void 0 : Od.kv.get(dd)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var dd;
        return !Um(null === (dd = this._client) || void 0 === dd ? void 0 : dd.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(dd) {
        this._persist((() => {
          var Od;
          return null === (Od = this._client) || void 0 === Od ? void 0 : Od.kv.set(dd)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(dd, Od, md) {
        if (!this._crossTabPersistence || !dd.$enabled_feature_flags) return;
        const Wd = this._prop("$enabled_feature_flags") || {},
          Fd = dd.$enabled_feature_flags || {},
          Rd = Od.flags || Od.featureFlags,
          Xd = Od.flags ? Object.entries(Od.flags).filter((dd => {
            let [, Od] = dd;
            return !(null == Od ? void 0 : Od.failed)
          })).map((dd => {
            let [Od] = dd;
            return Od
          })) : [],
          vd = !!Od.errorsWhileComputingFlags && !!Od.flags,
          qd = vd ? Xd : md && !wm(Rd) ? Object.keys(Rd || {}) : Array.from(new Set([...Object.keys(Wd), ...Object.keys(Fd)])),
          Hd = this._prop("$feature_flag_payloads") || {},
          yd = dd.$feature_flag_payloads || {},
          bd = vd || md ? qd : Array.from(new Set([...Object.keys(Hd), ...Object.keys(yd)])),
          pd = !vd && !md,
          Yd = !!pd || qd,
          gd = !!pd || bd,
          wd = {
            [Kd]: Yd,
            [Nd]: Yd,
            [Td]: gd
          };
        dd.$feature_flag_details && (wd[hd] = Yd);
        for (const Kd of [td, Qd, od]) Um(dd[Kd]) || (wd[Kd] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(wd)
      }
      _remove(dd) {
        this._persist((() => {
          var Od;
          return null === (Od = this._client) || void 0 === Od ? void 0 : Od.kv.remove(dd)
        }))
      }
      _persist(dd) {
        try {
          dd()
        } catch (dd) {
          this._logger.error("Failed to update feature flag persistence", dd)
        }
      }
      _rebuildEventProperties() {
        const dd = {};
        for (const Wd of [Kd, Td, td, pd]) {
          const Od = this._prop(Wd);
          Um(Od) || (dd[Wd] = Od)
        }
        this._baseEventProperties = dd;
        const Od = gF({}, dd),
          md = this._prop(Nd);
        if (md)
          for (const [Wd, Fd] of Object.entries(md)) Od[`$feature/${Wd}`] = Fd;
        this._eventPropertiesWithFlagValues = Od
      }
      _isCacheStale() {
        const dd = this._config.cacheTtlMs;
        if (!dd || 0 >= dd) return !1;
        const Od = this._prop(Qd);
        return "number" != typeof Od || Date.now() - Od > dd
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const dd = this._config.evaluationContexts;
        return (null == dd ? void 0 : dd.length) ? dd.filter((dd => {
          const Od = dd && "string" == typeof dd && dd.trim().length > 0;
          return Od || this._logger.error("Invalid evaluation context found:", dd, "Expected non-empty string"), Od
        })) : []
      }
      _getValidFlagKeys() {
        const dd = this._config.flagKeys;
        if (!Um(dd)) return dd.filter((dd => {
          const Od = dd && "string" == typeof dd && dd.trim().length > 0;
          return Od || this._logger.error("Invalid flag key found:", dd, "Expected non-empty string"), Od
        }))
      }
      initialize() {
        var dd, Od;
        const md = this._config,
          Wd = null !== (dd = null === (Od = md.bootstrap) || void 0 === Od ? void 0 : Od.featureFlags) && void 0 !== dd ? dd : {};
        if (Object.keys(Wd).length) {
          var Fd, Rd;
          const dd = null !== (Fd = null === (Rd = md.bootstrap) || void 0 === Rd ? void 0 : Rd.featureFlagPayloads) && void 0 !== Fd ? Fd : {},
            Od = Object.keys(Wd).filter((dd => !Um(Wd[dd]))).reduce(((dd, Od) => (dd[Od] = Wd[Od], dd)), {}),
            Xd = Object.keys(dd).filter((dd => Od[dd])).reduce(((Od, md) => (Od[md] = dd[md], Od)), {});
          return this._receivedFeatureFlags({
            featureFlags: Od,
            featureFlagPayloads: Xd
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(dd, Od, md) {
        var Wd, Fd;
        const Rd = (null == md ? void 0 : md.merge) && null !== (Wd = this._prop("$enabled_feature_flags")) && void 0 !== Wd ? Wd : {},
          Xd = (null == md ? void 0 : md.merge) && null !== (Fd = this._prop("$feature_flag_payloads")) && void 0 !== Fd ? Fd : {},
          Kd = gF(gF({}, Rd), dd),
          hd = gF(gF({}, Xd), Od),
          vd = {};
        for (const [Qd, td] of Object.entries(Kd)) vd[Qd] = {
          key: Qd,
          enabled: yR(td),
          variant: bR(td),
          reason: void 0,
          metadata: Um(null == hd ? void 0 : hd[Qd]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: hd[Qd]
          }
        };
        this._receivedFeatureFlags({
          flags: vd
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const dd = this._prop(hd),
          Od = this._prop(pd),
          md = this._prop(Yd);
        if (!md && !Od) return dd || {};
        const Wd = jX({}, dd || {}),
          Fd = [...new Set([...Object.keys(md || {}), ...Object.keys(Od || {})])];
        for (const Kd of Fd) {
          var Rd, Xd;
          const dd = Wd[Kd],
            Fd = null == Od ? void 0 : Od[Kd],
            hd = Um(Fd) ? null !== (Rd = null == dd ? void 0 : dd.enabled) && void 0 !== Rd && Rd : !!Fd,
            vd = Um(Fd) ? null == dd ? void 0 : dd.variant : "string" == typeof Fd ? Fd : void 0,
            Qd = null == md ? void 0 : md[Kd],
            td = gF(gF({}, dd), {}, {
              enabled: hd,
              variant: hd ? null != vd ? vd : null == dd ? void 0 : dd.variant : void 0
            });
          hd !== (null == dd ? void 0 : dd.enabled) && (td.original_enabled = null == dd ? void 0 : dd.enabled), vd !== (null == dd ? void 0 : dd.variant) && (td.original_variant = null == dd ? void 0 : dd.variant), Qd && (td.metadata = gF(gF({}, null == dd ? void 0 : dd.metadata), {}, {
            payload: Qd,
            original_payload: null == dd || null === (Xd = dd.metadata) || void 0 === Xd ? void 0 : Xd.payload
          })), Wd[Kd] = td
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: dd,
          overriddenPayloads: md,
          finalDetails: Wd
        }), this._override_warning = !0), Wd
      }
      getAllFeatureFlags() {
        const dd = this.getFlagVariants(),
          Od = this.getFlagPayloads();
        return Object.keys(dd).map((md => {
          const Wd = dd[md];
          return {
            key: md,
            enabled: yR(Wd),
            variant: bR(Wd),
            payload: HR(Od[md])
          }
        }))
      }
      getFlagVariants() {
        const dd = this._prop(Nd),
          Od = this._prop(pd);
        if (!Od) return dd || {};
        const md = jX({}, dd || {}),
          Wd = Object.keys(Od);
        for (let Fd = 0; Wd.length > Fd; Fd++) md[Wd[Fd]] = Od[Wd[Fd]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: dd,
          overriddenFlags: Od,
          finalFlags: md
        }), this._override_warning = !0), md
      }
      getFlagPayloads() {
        const dd = this._prop(Td),
          Od = this._prop(Yd);
        if (!Od) return dd || {};
        const md = jX({}, dd || {}),
          Wd = Object.keys(Od);
        for (let Fd = 0; Wd.length > Fd; Fd++) md[Wd[Fd]] = Od[Wd[Fd]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: dd,
          overriddenPayloads: Od,
          finalPayloads: md
        }), this._override_warning = !0), md
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((dd => {
          try {
            dd()
          } catch (dd) {
            this._logger.error("Error while running feature flags reloading callback", dd)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((dd => {
          this._pendingReloads.add(dd), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(dd, Od) {
        dd.forEach((dd => dd({
          status: Od
        }))), dd.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(dd) {
        return this._reloadingHandlers.push(dd), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((Od => Od !== dd))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(dd) {
        this.$anon_distinct_id = dd
      }
      setReloadingPaused(dd) {
        this._reloadingDisabled = dd
      }
      resetFlagCallReported() {
        this._remove(yd)
      }
      _callFlagsEndpoint(dd) {
        var Od;
        this._clearDebouncer();
        const md = this._client;
        if (!md || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const Wd = {
          token: md.projectToken,
          distinct_id: md.distinctId,
          groups: md.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: gF(gF(gF({}, md.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: md.library.name,
            $lib_version: md.library.version
          }),
          group_properties: this._prop(qd),
          timezone: Ah()
        };
        Um(md.deviceId) || (Wd.$device_id = md.deviceId), ((null == dd ? void 0 : dd.disableFlags) || this._config.featureFlagsDisabled) && (Wd.disable_flags = !0);
        const Fd = this._getValidEvaluationEnvironments();
        Fd.length && (Wd.evaluation_contexts = Fd);
        const Rd = this._getValidFlagKeys();
        Um(Rd) || (Wd.flag_keys = Rd);
        const Xd = this._config.onlyEvaluateSurveyFeatureFlags,
          Kd = "/flags/?v=2" + (Xd ? "&only_evaluate_survey_feature_flags=true" : ""),
          hd = this._requestGeneration,
          Qd = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = Qd, this._requestInFlight = !0;
        const td = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          od = dd => {
            var Od, md;
            const Fd = null !== (Od = dd.json) && void 0 !== Od ? Od : {},
              Rd = 200 !== dd.statusCode;
            if (this._requestInFlight = !1, hd !== this._requestGeneration) return void td();
            if (this._trackStatusZeroReachability(dd.statusCode), Rd || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), Wd.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(Qd, "skipped");
            this._flagsLoadedFromRemote = !Rd;
            const Kd = [];
            dd.error ? Kd.push(dd.error instanceof Error && "AbortError" === dd.error.name ? "timeout" : dd.error instanceof Error ? jo : "unknown_error") : 200 !== dd.statusCode && Kd.push(`api_error_${dd.statusCode}`), Fd.errorsWhileComputingFlags && Kd.push("errors_while_computing_flags");
            const od = !!(null === (md = Fd.quotaLimited) || void 0 === md ? void 0 : md.includes("feature_flags"));
            od && Kd.push("quota_limited"), this._set({
              [vd]: Kd
            }), od ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : Wd.disable_flags || this._receivedFeatureFlags(Fd, Rd, {
              partialResponse: Xd
            }), this._settleReloads(Qd, Wd.disable_flags ? "skipped" : Kd.length || !Fd.flags && !Fd.featureFlags ? "error" : "loaded"), td()
          },
          Nd = dd => {
            this._requestInFlight = !1, hd === this._requestGeneration ? (this._set({
              [vd]: [jo]
            }), this._logger.error("Feature flag request failed", dd), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(Qd, "error"), td()) : td()
          };
        let Hd = null !== (Od = this._config.requestMaxRetries) && void 0 !== Od ? Od : 1;
        const yd = () => Hd > 0 && hd === this._requestGeneration,
          bd = () => {
            if (hd !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(Qd, "skipped"), void td();
            try {
              md.sendRequest(Kd, {
                target: "flags",
                method: "POST",
                body: Wd,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((dd => {
                if ((dd => zo.includes(dd.statusCode) || (dd => 0 === dd.statusCode && dd.error instanceof Error && "AbortError" === dd.error.name)(dd))(dd) && yd()) return Hd--, void setTimeout(bd, 500);
                od(dd)
              })).catch(Nd)
            } catch (dd) {
              Nd(dd)
            }
          };
        bd()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return Gh(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(dd) {
        this._consecutiveStatusZeroFailures = nh(dd, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var md;
        if (Od.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + dd + Po);
        if (this._checkAndTriggerStaleRefresh()) return;
        const Wd = this.getFeatureFlagResult(dd, Od);
        return null !== (md = null == Wd ? void 0 : Wd.variant) && void 0 !== md ? md : null == Wd ? void 0 : Wd.enabled
      }
      getFeatureFlagDetails(dd) {
        return this.getFlagsWithDetails()[dd]
      }
      getFeatureFlagPayload(dd) {
        const Od = this.getFeatureFlagResult(dd, {
          send_event: !1
        });
        return null == Od ? void 0 : Od.payload
      }
      getFeatureFlagResult(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Od.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + dd + Po);
        if (this._checkAndTriggerStaleRefresh()) return;
        const md = this.getFlagVariants(),
          Wd = dd in md,
          Fd = md[dd],
          Rd = this.getFlagPayloads()[dd],
          Xd = String(Fd),
          Kd = this._prop("$feature_flag_request_id") || void 0,
          hd = this._prop("$feature_flag_evaluated_at") || void 0;
        let vd, Qd = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var td;
          const dd = null === (td = this._client) || void 0 === td || null === (td = td.session) || void 0 === td ? void 0 : td.sessionId,
            Od = this._prop(bd);
          dd && dd !== Od && (Qd = {}, vd = dd)
        }
        if (!Od.send_event && "send_event" in Od) vd && this._set({
          [yd]: Qd,
          [bd]: vd
        });
        else if (dd in Qd && Qd[dd].includes(Xd)) vd && this._set({
          [yd]: Qd,
          [bd]: vd
        });
        else {
          var od, Nd, qd, Hd, Td, pd, Yd, gd, wd, Ed, Jd, Ud, xd;
          wm(Qd[dd]) ? Qd[dd].push(Xd) : Qd[dd] = [Xd], this._set(gF({
            [yd]: Qd
          }, vd ? {
            [bd]: vd
          } : {}));
          const Od = this.getFeatureFlagDetails(dd),
            md = [...null !== (od = this._prop("$feature_flag_errors")) && void 0 !== od ? od : []];
          Um(Fd) && md.push("flag_missing");
          const Wd = {
            $feature_flag: dd,
            $feature_flag_response: Fd,
            $feature_flag_payload: null != Rd ? Rd : null,
            $feature_flag_request_id: Kd,
            $feature_flag_evaluated_at: hd,
            $feature_flag_bootstrapped_response: null !== (Nd = null === (qd = this._config.bootstrap) || void 0 === qd || null === (qd = qd.featureFlags) || void 0 === qd ? void 0 : qd[dd]) && void 0 !== Nd ? Nd : null,
            $feature_flag_bootstrapped_payload: null !== (Hd = null === (Td = this._config.bootstrap) || void 0 === Td || null === (Td = Td.featureFlagPayloads) || void 0 === Td ? void 0 : Td[dd]) && void 0 !== Hd ? Hd : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          Um(null == Od || null === (pd = Od.metadata) || void 0 === pd ? void 0 : pd.has_experiment) || (Wd.$feature_flag_has_experiment = Od.metadata.has_experiment), Um(null == Od || null === (Yd = Od.metadata) || void 0 === Yd ? void 0 : Yd.version) || (Wd.$feature_flag_version = Od.metadata.version);
          const td = null !== (gd = null == Od || null === (wd = Od.reason) || void 0 === wd ? void 0 : wd.description) && void 0 !== gd ? gd : null == Od || null === (Ed = Od.reason) || void 0 === Ed ? void 0 : Ed.code;
          td && (Wd.$feature_flag_reason = td), (null == Od || null === (Jd = Od.metadata) || void 0 === Jd ? void 0 : Jd.id) && (Wd.$feature_flag_id = Od.metadata.id), Um(null == Od ? void 0 : Od.original_variant) && Um(null == Od ? void 0 : Od.original_enabled) || (Wd.$feature_flag_original_response = Um(Od.original_variant) ? Od.original_enabled : Od.original_variant), (null == Od || null === (Ud = Od.metadata) || void 0 === Ud ? void 0 : Ud.original_payload) && (Wd.$feature_flag_original_payload = null == Od || null === (xd = Od.metadata) || void 0 === xd ? void 0 : xd.original_payload), md.length && (Wd.$feature_flag_error = md.join(",")), this._captureFeatureFlagCalled(Wd)
        }
        return Wd ? {
          key: dd,
          enabled: !!Fd,
          variant: "string" == typeof Fd ? Fd : void 0,
          payload: HR(Rd)
        } : void 0
      }
      _captureFeatureFlagCalled(dd) {
        try {
          var Od;
          null === (Od = this._client) || void 0 === Od || Od.capture("$feature_flag_called", dd)
        } catch (dd) {
          this._logger.error("Failed to capture feature flag call", dd)
        }
      }
      getRemoteConfigPayload(dd, Od) {
        this._getRemoteConfigPayload(dd, Od)
      }
      _getRemoteConfigPayload(dd, Od) {
        var md = this;
        return Im((function*() {
          const Wd = md._client;
          if (!Wd) return;
          const Fd = {
              distinct_id: Wd.distinctId,
              token: Wd.projectToken,
              person_properties: {
                $lib: Wd.library.name,
                $lib_version: Wd.library.version
              }
            },
            Rd = md._getValidEvaluationEnvironments();
          Rd.length && (Fd.evaluation_contexts = Rd);
          const Xd = md._getValidFlagKeys();
          let Kd;
          Um(Xd) || (Fd.flag_keys = Xd);
          try {
            var hd;
            const Od = null === (hd = (yield Wd.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: Fd,
              compression: md._config.compression,
              sentAt: "body",
              timeoutMs: md._config.requestTimeoutMs
            })).json) || void 0 === hd ? void 0 : hd.featureFlagPayloads;
            Kd = (null == Od ? void 0 : Od[dd]) || void 0
          } catch (dd) {
            return void md._logger.error("Remote config feature flag request failed", dd)
          }
          try {
            Od(Kd)
          } catch (dd) {
            md._logger.error("Remote config feature flag callback failed", dd)
          }
        }))()
      }
      isFeatureEnabled(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Od.fresh && !this._flagsLoadedFromRemote) return Od.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + dd + Po), Od.defaultValue;
        const md = this.getFeatureFlag(dd, Od);
        return Um(md) ? Od.defaultValue : !!md
      }
      addFeatureFlagsHandler(dd) {
        this.featureFlagEventHandlers.push(dd)
      }
      removeFeatureFlagsHandler(dd) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((Od => Od !== dd))
      }
      receivedFeatureFlags(dd, Od, md) {
        this._receivedFeatureFlags(dd, Od, md)
      }
      _receivedFeatureFlags(dd, Od, md) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const Wd = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            Fd = arguments.length > 4 ? arguments[4] : void 0,
            Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : no;
          const Xd = ((dd, Od) => {
              const md = dd.flags;
              if (md) {
                const Od = Object.fromEntries(Object.keys(md).map((dd => {
                    var Od;
                    return [dd, null !== (Od = md[dd].variant) && void 0 !== Od ? Od : md[dd].enabled]
                  }))),
                  Wd = Object.fromEntries(Object.keys(md).filter((dd => md[dd].enabled)).filter((dd => {
                    var Od;
                    return !Um(null === (Od = md[dd].metadata) || void 0 === Od ? void 0 : Od.payload)
                  })).map((dd => {
                    var Od;
                    return [dd, null === (Od = md[dd].metadata) || void 0 === Od ? void 0 : Od.payload]
                  })));
                return gF(gF({}, dd), {}, {
                  featureFlags: Od,
                  featureFlagPayloads: Wd
                })
              }
              return dd.featureFlags && Od.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), dd
            })(dd, Rd),
            vd = Xd.flags,
            qd = Xd.featureFlags,
            Hd = Xd.featureFlagPayloads;
          if (!qd) return;
          const yd = dd.requestId,
            bd = dd.evaluatedAt;
          if (wm(qd)) {
            Rd.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const dd = {};
            if (qd)
              for (let Od = 0; qd.length > Od; Od++) dd[qd[Od]] = !0;
            return {
              [Kd]: qd,
              [Nd]: dd,
              [od]: !1
            }
          }
          let pd = qd,
            Yd = Hd,
            gd = vd;
          if (null == Fd ? void 0 : Fd.partialResponse) {
            const dd = Object.keys(pd),
              Fd = Yd || {};
            pd = gF(gF({}, Od), pd), Yd = gF(gF({}, md), Fd), dd.forEach((dd => {
              dd in Fd || null == Yd || delete Yd[dd]
            })), gd = gF(gF({}, Wd), gd)
          } else if (dd.errorsWhileComputingFlags)
            if (vd) {
              const dd = new Set(Object.keys(vd).filter((dd => {
                var Od;
                return !(null === (Od = vd[dd]) || void 0 === Od ? void 0 : Od.failed)
              })));
              pd = gF(gF({}, Od), Object.fromEntries(Object.entries(pd).filter((Od => {
                let [md] = Od;
                return dd.has(md)
              }))));
              const Fd = Object.fromEntries(Object.entries(Yd || {}).filter((Od => {
                let [md] = Od;
                return dd.has(md)
              })));
              Yd = gF(gF({}, md), Fd), dd.forEach((dd => {
                dd in Fd || null == Yd || delete Yd[dd]
              })), gd = gF(gF({}, Wd), Object.fromEntries(Object.entries(gd || {}).filter((Od => {
                let [md] = Od;
                return dd.has(md)
              }))))
            } else pd = gF(gF({}, Od), pd), Yd = gF(gF({}, md), Yd), gd = gF(gF({}, Wd), gd);
          return gF(gF({
            [Kd]: Object.keys(eo(pd)),
            [Nd]: pd || {},
            [Td]: Yd || {},
            [hd]: gd || {},
            [od]: !0 === dd.minimalFlagCalledEvents
          }, yd ? {
            [td]: yd
          } : {}), bd ? {
            [Qd]: bd
          } : {})
        }(dd, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), md, this._logger);
        if (Wd)
          if (!1 === (null == md ? void 0 : md.persist)) {
            const dd = !Um(this._client.kv.get(Nd));
            this._bootstrapState = Wd, dd || this._set(Wd)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(Wd, dd, !!(null == md ? void 0 : md.partialResponse)), this._set(Wd);
        else Od && this._fallBackToPersistedFlags();
        Od || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(Od)
      }
      override(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: dd,
          suppressWarning: Od
        })
      }
      overrideFeatureFlags(dd) {
        this._overrideFeatureFlags(dd)
      }
      _overrideFeatureFlags(dd) {
        if (this._client) {
          if (!1 === dd) return this._remove([pd, Yd]), this._fireFeatureFlagsCallbacks(), void Lo.info("All overrides cleared");
          if (wm(dd)) return this._set({
            [pd]: Do(dd)
          }), this._fireFeatureFlagsCallbacks(), void Lo.info("Flag overrides set", {
            flags: dd
          });
          if (dd && "object" == typeof dd && ("flags" in dd || "payloads" in dd)) {
            var Od;
            const md = dd;
            this._override_warning = Boolean(null !== (Od = md.suppressWarning) && void 0 !== Od && Od);
            const Wd = {},
              Fd = md.flags,
              Rd = md.payloads;
            return Fd && (Wd[pd] = wm(Fd) ? Do(Fd) : Fd), Rd && (Wd[Yd] = Rd), Object.keys(Wd).length && this._set(Wd), !1 === Fd && !1 === Rd ? this._remove([pd, Yd]) : !1 === Fd ? this._remove(pd) : !1 === Rd && this._remove(Yd), this._fireFeatureFlagsCallbacks(), !1 === Fd ? Lo.info("Flag overrides cleared") : Fd && Lo.info("Flag overrides set", {
              flags: Fd
            }), void(!1 === Rd ? Lo.info("Payload overrides cleared") : Rd && Lo.info("Payload overrides set", {
              payloads: Rd
            }))
          }
          if (dd && "object" == typeof dd) return this._set({
            [pd]: dd
          }), this._fireFeatureFlagsCallbacks(), void Lo.info("Flag overrides set", {
            flags: dd
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: dd
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(dd) {
        if (this.addFeatureFlagsHandler(dd), this._hasLoadedFlags) {
          const {
            flags: Od,
            flagVariants: md
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            dd(Od, md)
          } catch (dd) {
            this._logger.error("Error while running feature flags callback", dd)
          }
        }
        return () => this.removeFeatureFlagsHandler(dd)
      }
      updateEarlyAccessFeatureEnrollment(dd, Od, md) {
        var Wd;
        const Fd = (this._prop("$early_access_features") || []).find((Od => Od.flagKey === dd)),
          Rd = {
            [`$feature_enrollment/${dd}`]: Od
          },
          Xd = {
            $feature_flag: dd,
            $feature_enrollment: Od,
            $set: Rd
          };
        Fd && (Xd.$early_access_feature_name = Fd.name), md && (Xd.$feature_enrollment_stage = md);
        const hd = gF(gF({}, this.getFlagVariants()), {}, {
          [dd]: Od
        });
        null === (Wd = this._crossTabPersistence) || void 0 === Wd || Wd.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [dd],
          $enabled_feature_flags: [dd],
          $stored_person_properties: Object.keys(Rd)
        }), this._set({
          [Kd]: Object.keys(eo(hd)),
          [Nd]: hd,
          [Hd]: gF(gF({}, this._prop("$stored_person_properties") || {}), Rd)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var vd;
          null === (vd = this._client) || void 0 === vd || vd.capture("$feature_enrollment_update", Xd)
        } catch (dd) {
          this._logger.error("Failed to capture early access feature enrollment", dd)
        }
      }
      getEarlyAccessFeatures(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = this._prop(Xd);
        !Wd || Od ? this._getEarlyAccessFeatures(dd, md) : dd(Wd)
      }
      _getEarlyAccessFeatures(dd, Od) {
        var md = this;
        return Im((function*() {
          const Wd = md._client;
          if (!Wd) return;
          const Fd = Od ? `&${Od.map((dd=>`stage=${dd}`)).join("&")}` : "";
          let Rd;
          try {
            const dd = yield Wd.sendRequest(`/api/early_access_features/?token=${Wd.projectToken}${Fd}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!dd.json) return;
            Rd = dd.json.earlyAccessFeatures, md._set({
              [Xd]: Rd
            })
          } catch (dd) {
            return void md._logger.error("Early access feature request failed", dd)
          }
          try {
            dd(Rd)
          } catch (dd) {
            md._logger.error("Early access feature callback failed", dd)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const dd = this.getFlags(),
          Od = this.getFlagVariants();
        return {
          flags: dd.filter((dd => Od[dd])),
          flagVariants: Object.keys(Od).filter((dd => Od[dd])).reduce(((dd, md) => (dd[md] = Od[md], dd)), {})
        }
      }
      _fireFeatureFlagsCallbacks(dd) {
        this._rebuildEventProperties();
        const {
          flags: Od,
          flagVariants: md
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((Wd => {
          try {
            Wd(Od, md, {
              errorsLoading: dd
            })
          } catch (dd) {
            this._logger.error("Error while running feature flags callback", dd)
          }
        }))
      }
      setPersonPropertiesForFlags(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(dd, Od)
      }
      _setPersonPropertiesForFlags(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this._prop("$stored_person_properties") || {},
          Wd = (null == dd ? void 0 : dd.$set) || ((null == dd ? void 0 : dd.$set_once) ? {} : dd),
          Fd = null == dd ? void 0 : dd.$set_once,
          Rd = {};
        if (Fd)
          for (const Xd in Fd)({}).hasOwnProperty.call(Fd, Xd) && (Xd in md || (Rd[Xd] = Fd[Xd]));
        this._set({
          [Hd]: gF(gF(gF({}, md), Rd), Wd)
        }), Od && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = gF({}, this._prop("$stored_person_properties") || {});
        dd.forEach((dd => {
          delete md[dd]
        })), this._set({
          [Hd]: md
        }), Od && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(Hd), dd && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this._prop("$stored_group_properties") || {},
          Wd = gF({}, md);
        for (const Fd of Object.keys(dd)) Wd[Fd] = gF(gF({}, md[Fd]), dd[Fd]);
        this._set({
          [qd]: Wd
        }), Od && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(dd) {
        if (dd) {
          const Od = this._prop("$stored_group_properties") || {};
          this._set({
            [qd]: gF(gF({}, Od), {}, {
              [dd]: {}
            })
          })
        } else this._remove(qd)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "Ad"), this._settleReloads(this._activeReloads, "Ad"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const Co = PX("[FeatureFlags]");
    var Zo = class {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(dd, Od)
      }
      update(dd, Od) {
        this._snapshot = ((dd, Od) => {
          var md, Wd, Fd, Rd, Xd, Kd, hd, vd;
          return {
            bootstrap: {
              featureFlags: null !== (md = null === (Wd = dd.bootstrap) || void 0 === Wd ? void 0 : Wd.featureFlags) && void 0 !== md ? md : void 0,
              featureFlagPayloads: null !== (Fd = null === (Rd = dd.bootstrap) || void 0 === Rd ? void 0 : Rd.featureFlagPayloads) && void 0 !== Fd ? Fd : void 0
            },
            remoteRequestsDisabled: Od,
            featureFlagsDisabled: !!dd.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!dd.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!dd.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: dd.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (Xd = dd.remote_config_refresh_interval_ms) && void 0 !== Xd ? Xd : 3e5,
            idleRefreshBackoff: Um(dd.remote_config_refresh_interval_ms),
            requestTimeoutMs: dd.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (Kd = dd.feature_flag_request_max_retries) && void 0 !== Kd ? Kd : 1),
            compression: dd.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (hd = null !== (vd = dd.evaluation_contexts) && void 0 !== vd ? vd : dd.evaluation_environments) && void 0 !== hd ? hd : [],
            flagKeys: wm(dd.flag_keys) ? dd.flag_keys : void 0
          }
        })(dd, Od), !dd.evaluation_environments || dd.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Co.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), Um(dd.flag_keys) || wm(dd.flag_keys) || Co.error("Invalid flag_keys found:", dd.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const ko = dd => Lm(dd) && ("RangeError" === dd.name && 0 === dd.message.indexOf("Maximum call stack size exceeded") || "InternalError" === dd.name && "too much recursion" === dd.message),
      fo = PX("[Error tracking]"),
      Mo = "webkit-masked-url:",
      dN = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      ON = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", Mo],
      mN = ["__firefox__", "__gCrWeb"],
      WN = "Refusing to render web experiment since the viewer is a likely bot",
      FN = {
        icontains: (dd, Od) => Od.toLowerCase().indexOf(dd.toLowerCase()) > -1,
        not_icontains: (dd, Od) => -1 === Od.toLowerCase().indexOf(dd.toLowerCase()),
        regex: (dd, Od) => mt(Od, dd),
        not_regex: (dd, Od) => !mt(Od, dd),
        exact: (dd, Od) => Od === dd,
        is_not: (dd, Od) => Od !== dd
      },
      RN = PX("[Conversations]"),
      XN = "Conversations not available yet.";

    function KN(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd, hd;
      const vd = null !== (md = null == dd ? void 0 : dd.flushIntervalMs) && void 0 !== md ? md : 3e3,
        Qd = null !== (Wd = null == dd ? void 0 : dd.maxBufferSize) && void 0 !== Wd ? Wd : 100,
        td = (null == Od ? void 0 : Od.consoleCapture) ? void 0 : null !== (Fd = null == dd ? void 0 : dd.maxLogsPerInterval) && void 0 !== Fd ? Fd : 1e3,
        od = Um(td) ? Math.max(Qd, 2048) : Math.max(Qd, td),
        Nd = gF(gF({}, function() {
          let dd = "",
            Od = "";
          try {
            var md;
            const Wd = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              Fd = null == Wd || null === (md = Wd.navigator) || void 0 === md ? void 0 : md.userAgent;
            Fd && ([dd, Od] = MW(Fd))
          } catch (dd) {}
          return function(dd, Od) {
            const md = function(dd) {
              if (dd) return {}.hasOwnProperty.call(wX, dd) ? wX[dd] : dd
            }(dd);
            return gF(gF({}, md ? {
              "os.name": md
            } : {}), Od ? {
              "os.version": Od
            } : {})
          }(dd, Od)
        }()), null == dd ? void 0 : dd.resourceAttributes);
      return {
        serviceName: null !== (Rd = null !== (Xd = null == Nd ? void 0 : Nd["service.name"]) && void 0 !== Xd ? Xd : null == dd ? void 0 : dd.serviceName) && void 0 !== Rd ? Rd : null == Od ? void 0 : Od.serviceNameDefault,
        serviceVersion: null !== (Kd = null == Nd ? void 0 : Nd["service.version"]) && void 0 !== Kd ? Kd : null == dd ? void 0 : dd.serviceVersion,
        environment: null !== (hd = null == Nd ? void 0 : Nd["deployment.environment"]) && void 0 !== hd ? hd : null == dd ? void 0 : dd.environment,
        resourceAttributes: Nd,
        beforeSend: null == dd ? void 0 : dd.beforeSend,
        flushIntervalMs: vd,
        maxBufferSize: Qd,
        maxQueueSize: od,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: vd,
        maxLogsPerInterval: td,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const hN = ["debug", "log", "warn", "error", "info"],
      vN = dd => {
        for (; null == dd ? void 0 : dd.__rrweb_original__;) dd = dd.__rrweb_original__;
        return dd
      },
      QN = "console",
      tN = "__posthogHandledLogsRequestError",
      oN = (dd, Od) => {
        const md = dd instanceof Error ? dd : new Error(Od);
        return md[tN] = !0, md
      },
      NN = dd => !!dd && "object" == typeof dd && !0 === dd[tN];
    var qN = class {
      get _coreLogger() {
        var dd = this;
        return gF(gF({}, this._logger), {}, {
          error: function() {
            for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
            md.some(NN) || dd._logger.error(...md)
          }
        })
      }
      constructor(dd, Od) {
        var md;
        this._configSource = dd, this._getSdkContext = Od, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = PX("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var dd, Od;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (dd = this._core) || void 0 === dd || dd.onReconnect(), null === (Od = this._consoleCore) || void 0 === Od || Od.onReconnect())
        }, this._isLogsEnabled = !!(null === (md = dd.get()) || void 0 === md ? void 0 : md.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (Wd) {
            this._window = void 0
          }
          this._window && (kX(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(dd, Od, md, Wd) {
        this._listenForReconnect();
        const Fd = KN(this._configSource.get(), md);
        return [new VX(this._createHost(dd, Od), Fd, this._coreLogger, (() => this._getSdkContext()), (dd => dd()), void 0, Wd), Fd]
      }
      _getCore() {
        const dd = this._configSource.get();
        var Od;
        return this._core && this._resolvedFrom === dd || (null === (Od = this._core) || void 0 === Od || Od.reset(), this._resolvedFrom = dd, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (dd => {
          this._queue = dd
        }))), this._core
      }
      _getConsoleCore() {
        const dd = this._configSource.get();
        var Od;
        return this._consoleCore && this._consoleResolvedFrom === dd || (null === (Od = this._consoleCore) || void 0 === Od || Od.reset(), this._consoleResolvedFrom = dd, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (dd => {
          this._consoleQueue = dd
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, QN)), this._consoleCore
      }
      setup(dd) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = dd, this._logger = dd.logger.createLogger("[logs]"), Eo(dd.kv.initialize(), (() => {
          this._disposed || this._finishSetup(dd)
        }))
      }
      _finishSetup(dd) {
        var Od;
        this._listenForReconnect(), (null === (Od = this._configSource.get()) || void 0 === Od ? void 0 : Od.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && dd.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let md = !1;
        const Wd = dd.onRemoteConfig((dd => {
          var Od;
          md = dd.ok && !0 === (null === (Od = dd.config.logs) || void 0 === Od ? void 0 : Od.captureConsoleLogs), this.onRemoteConfig(dd)
        }));
        this._disposed ? Wd.dispose() : (this._remoteConfigSubscription = Wd, md || this.loadIfEnabled())
      }
      dispose() {
        var dd, Od, md, Wd, Fd, Rd, Xd;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (dd = this._remoteConfigSubscription) || void 0 === dd || dd.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (Od = this._window) || void 0 === Od || Od.removeEventListener("online", this._onReconnect), null === (md = this._consoleLogsDispose) || void 0 === md || md.call(this), this._consoleLogsDispose = void 0, null === (Wd = this._core) || void 0 === Wd || Wd.clearQueue(), null === (Fd = this._consoleCore) || void 0 === Fd || Fd.clearQueue(), null === (Rd = this._core) || void 0 === Rd || Rd.reset(), null === (Xd = this._consoleCore) || void 0 === Xd || Xd.reset())
      }
      onRemoteConfig(dd) {
        var Od, md;
        if (this._disposed) return;
        const Wd = dd.ok ? null === (Od = dd.config.logs) || void 0 === Od ? void 0 : Od.captureConsoleLogs : void 0;
        sm(Wd) ? this._stopRecorderStartedByPersistedHint() : (null === (md = this._client) || void 0 === md || md.kv.set(this._configSource.captureHintKey, !!Wd), Wd ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var dd, Od, md, Wd;
        this._stopConsoleRecorder(), null === (dd = this._core) || void 0 === dd || dd.clearQueue(), this._queue = [], null === (Od = this._core) || void 0 === Od || Od.reset(), null === (md = this._consoleCore) || void 0 === md || md.clearQueue(), this._consoleQueue = [], null === (Wd = this._consoleCore) || void 0 === Wd || Wd.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(dd) {
        !this._disposed && this._client && this._getCore().captureLog(dd)
      }
      captureConsoleLog(dd) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(dd)
      }
      captureBufferedConsoleLog(dd, Od, md) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(dd, {
          context: Od,
          occurredAtMs: md
        })
      }
      _onOptOut() {
        var dd;
        this._stopConsoleRecorder(), null === (dd = this._consoleCore) || void 0 === dd || dd.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var dd, Od = this;
        if (this._isRecordingConsole || !(null === (dd = this._window) || void 0 === dd ? void 0 : dd.console)) return;
        const md = KN(this._configSource.get()).maxBufferSize;
        let Wd = !0;
        this._consoleRecorderUnpatchers.push((() => {
          Wd = !1
        }));
        for (const Fd of hN) {
          let Rd;
          try {
            Rd = vN(this._window.console[Fd])
          } catch (dd) {
            continue
          }
          Rd && this._consoleRecorderUnpatchers.push(Xo(this._window.console, Fd, (dd => {
            const Xd = function() {
              for (var Rd = arguments.length, Xd = new Array(Rd), Kd = 0; Kd < Rd; Kd++) Xd[Kd] = arguments[Kd];
              try {
                Wd && Od._recordConsoleEntry(Fd, Xd, md)
              } catch (Fd) {}
              return dd.apply(Od._window.console, Xd)
            };
            return Xd.__rrweb_original__ = Rd, Xd
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(dd, Od, md) {
        var Wd;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== Od.length)
          if (null === (Wd = this._client) || void 0 === Wd ? void 0 : Wd.canCapture) {
            if (md > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: dd,
                  args: Od,
                  occurredAtMs: Date.now(),
                  context: this._getSdkContext()
                })
              } finally {
                this._isRecordingConsoleEntry = !1
              }
            }
          } else this._stopConsoleRecorder()
      }
      _stopConsoleRecorder() {
        if (this._consoleBuffer = [], this._isRecordingConsole) {
          this._isRecordingConsole = !1, this._consoleRecorderTimeout && (clearTimeout(this._consoleRecorderTimeout), this._consoleRecorderTimeout = void 0);
          for (const dd of this._consoleRecorderUnpatchers) dd();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const dd = this._consoleBuffer;
        return this._stopConsoleRecorder(), dd
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (dd, Od) => this.captureLog({
            body: dd,
            level: "trace",
            attributes: Od
          }),
          debug: (dd, Od) => this.captureLog({
            body: dd,
            level: "debug",
            attributes: Od
          }),
          info: (dd, Od) => this.captureLog({
            body: dd,
            level: "info",
            attributes: Od
          }),
          warn: (dd, Od) => this.captureLog({
            body: dd,
            level: "warn",
            attributes: Od
          }),
          error: (dd, Od) => this.captureLog({
            body: dd,
            level: "error",
            attributes: Od
          }),
          fatal: (dd, Od) => this.captureLog({
            body: dd,
            level: "fatal",
            attributes: Od
          })
        }), this._capture_logger
      }
      flushLogs(dd) {
        this._client && (dd ? this._flushViaTransport(dd) : (this._core && this._core.flush().catch((dd => this._logFlushError(dd))), this._consoleCore && this._consoleCore.flush().catch((dd => this._logFlushError(dd)))))
      }
      flush() {
        var dd = this;
        return Im((function*() {
          var Od, md;
          const Wd = null === (Od = dd._core) || void 0 === Od ? void 0 : Od.flush().catch((Od => dd._logFlushError(Od))),
            Fd = null === (md = dd._consoleCore) || void 0 === md ? void 0 : md.flush().catch((Od => dd._logFlushError(Od)));
          yield Wd, yield Fd
        }))()
      }
      _logFlushError(dd) {
        NN(dd) || this._logger.error("PostHog logs flush failed:", dd)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const dd = this._getConsoleLoader();
        if (dd) {
          this._isLoading = !0;
          try {
            dd(((dd, Od) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (dd || !Od) this._logger.error("Could not load logs script", dd), this._stopConsoleRecorder();
                else {
                  const dd = this._takeConsoleBuffer();
                  this._consoleLogsDispose = Od.initialize(this._client), this._isLoaded = !0, dd.length > 0 && Od.replay(this._client, dd)
                }
            }))
          } catch (dd) {
            throw this._isLoading = !1, dd
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(dd, Od) {
        const md = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !md.canCapture
          },
          getPersistedProperty: Od => Od === tm.LogsQueue ? dd() : void 0,
          setPersistedProperty(dd, md) {
            dd === tm.LogsQueue && Od(null != md ? md : [])
          },
          _sendLogsBatch: dd => this._sendLogsBatch(dd),
          getLibraryId: () => md.library.name,
          getLibraryVersion: () => md.library.version
        }
      }
      _sendLogsBatch(dd) {
        return new Promise((Od => {
          if (Gh(this._consecutiveStatusZeroFailures, 3)) return void Od({
            kind: "fatal",
            error: oN(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let md = !1;
          const Wd = dd => {
              md || (md = !0, clearTimeout(Fd), Od(dd))
            },
            Fd = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), Wd({
                kind: "retry-later",
                error: oN(void 0, "logs request timed out")
              })
            }), 9e4),
            Rd = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: dd,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((dd => {
            var Od;
            const md = dd.statusCode;
            this._trackEndpointReachability(md, Rd), md >= 200 && 300 > md ? Wd({
              kind: "ok"
            }) : 413 === md ? Wd({
              kind: "too-large"
            }) : 0 !== md && 408 !== md && 429 !== md && 500 > md ? Wd({
              kind: "fatal",
              error: new Error(`logs request failed with status ${md}`)
            }) : 0 === md ? (dd.error || this._logger.warn("Logs request failed before receiving an HTTP response"), Wd({
              kind: "retry-later",
              error: oN(dd.error, "logs request failed before receiving an HTTP response")
            })) : Wd({
              kind: "retry-later",
              error: null !== (Od = dd.error) && void 0 !== Od ? Od : new Error(`logs request failed with status ${md}`)
            })
          }), (dd => {
            Wd({
              kind: "retry-later",
              error: dd
            })
          }))
        }))
      }
      _trackEndpointReachability(dd, Od) {
        (0 !== dd || Od) && (this._consecutiveStatusZeroFailures = nh(dd, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(dd) {
        this._queue.length > 0 && this._drainQueueViaTransport(dd, this._queue, this._resolvedConfig, this._client.library.name, (dd => {
          this._queue = dd
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(dd, this._consoleQueue, this._consoleResolvedConfig, QN, (dd => {
          this._consoleQueue = dd
        }))
      }
      _drainQueueViaTransport(dd, Od, md, Wd, Fd) {
        if (0 === Od.length) return;
        const Rd = Od.map((dd => dd.record));
        Fd([]);
        const Xd = BX(Rd, xX(md, this._client.library.name, this._client.library.version), Wd, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: Xd,
          compression: "best-available",
          transport: dd,
          timeoutMs: 6e4
        }).catch((dd => this._logFlushError(dd)))
      }
    };
    const HN = PX("[NetworkMetrics]"),
      yN = () => {
        var dd;
        return (null == fO || null === (dd = fO.performance) || void 0 === dd ? void 0 : dd.now) ? fO.performance.now() : Date.now()
      },
      bN = {
        "http:": 80,
        "https:": 443
      },
      TN = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      pN = (dd, Od) => {
        var md;
        const Wd = String(Od);
        return {
          method: String(dd).toUpperCase(),
          url: (null === (md = Ph(Wd)) || void 0 === md ? void 0 : md.href) || Wd
        }
      },
      YN = function(dd, Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var Kd, hd;
          const vd = Fd();
          if (!vd) return;
          const Qd = md || void 0,
            td = yN() - Wd,
            od = Ph(Od.url);
          if (od && "http:" !== od.protocol && "https:" !== od.protocol) return;
          const Nd = {
              url: (null == od ? void 0 : od.href) || Od.url,
              method: Od.method
            },
            qd = am(vd.name) ? vd.name(Nd) : xm(vd.name) ? vd.name : "http.client.request.duration";
          if (!qd) return;
          const Hd = Xd && !Qd ? void 0 : ((dd, Od) => dd ? 400 > dd ? void 0 : String(dd) : (null == Od ? void 0 : Od.name) || "_OTHER")(Qd, Rd),
            yd = gF(gF(gF(gF(gF({}, (dd => {
              const Od = TN.has(dd) ? dd : "_OTHER";
              return gF({
                "http.request.method": Od
              }, "_OTHER" === Od && dd !== Od ? {
                "http.request.method_original": dd
              } : {})
            })(Nd.method)), od ? (dd => {
              return {
                "server.address": dd.hostname.startsWith("[") && dd.hostname.endsWith("]") ? dd.hostname.slice(1, -1) : dd.hostname,
                "server.port": Number(dd.port) || bN[dd.protocol],
                "url.scheme": dd.protocol.slice(0, -1),
                "url.template": (Od = dd.pathname, Od.split("/").map((dd => (dd => /^\d+$/.test(dd) || dd.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(dd))(dd) ? ":id" : dd)).join("/"))
              };
              var Od
            })(od) : {}), Qd ? {
              "http.response.status_code": Qd
            } : {}), Hd ? {
              "error.type": Hd
            } : {}), null === (Kd = vd.attributes) || void 0 === Kd ? void 0 : Kd.call(vd, Nd, {
              status: Qd,
              durationMs: td
            }));
          null === (hd = dd.metrics) || void 0 === hd || hd.histogram(qd, td, {
            unit: "ms",
            attributes: yd
          })
        } catch (dd) {
          HN.error("Failed to record network metric", dd)
        }
      },
      gN = () => {},
      wN = (dd, Od) => am(null == fO ? void 0 : fO.fetch) ? Xo(fO, "fetch", (md => function() {
        for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
        const Xd = yN(),
          Kd = md.apply(this, Fd);
        if (!Od()) return Kd;
        try {
          var hd, vd, Qd;
          const [md, Wd] = Fd, Rd = pN(null !== (hd = null !== (vd = null == Wd ? void 0 : Wd.method) && void 0 !== vd ? vd : null == md ? void 0 : md.method) && void 0 !== hd ? hd : "GET", null !== (Qd = null == md ? void 0 : md.url) && void 0 !== Qd ? Qd : md);
          return Kd.then((md => (YN(dd, Rd, null == md ? void 0 : md.status, Xd, Od, void 0, !0), md)), (md => {
            throw YN(dd, Rd, void 0, Xd, Od, md), md
          }))
        } catch (dd) {
          return HN.error("Failed to observe fetch", dd), Kd
        }
      })) : gN,
      aN = (dd, Od) => {
        var md;
        const Wd = null == fO || null === (md = fO.XMLHttpRequest) || void 0 === md ? void 0 : md.prototype;
        if (!Wd) return gN;
        const Fd = new WeakMap,
          Rd = Xo(Wd, "open", (dd => function() {
            for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
            try {
              (() => YQ.has(this))() || Fd.set(this, pN(md[0], md[1]))
            } catch (dd) {
              HN.error("Failed to observe XHR open", dd)
            }
            return dd.apply(this, md)
          })),
          Xd = Xo(Wd, "send", (md => function() {
            let Wd;
            try {
              const md = Fd.get(this);
              if (md && Od()) {
                const Fd = yN();
                Wd = () => {
                  this.removeEventListener("loadend", Wd), YN(dd, md, this.status, Fd, Od)
                }, kX(this, "loadend", Wd)
              }
            } catch (dd) {
              HN.error("Failed to observe XHR send", dd)
            }
            try {
              for (var Rd = arguments.length, Xd = new Array(Rd), Kd = 0; Kd < Rd; Kd++) Xd[Kd] = arguments[Kd];
              return md.apply(this, Xd)
            } catch (dd) {
              throw Wd && this.removeEventListener("loadend", Wd), dd
            }
          }));
        return () => {
          Rd(), Xd()
        }
      },
      EN = new WeakMap,
      JN = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      UN = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function xN(dd) {
      if (dd) return !0 === dd ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== dd.intent,
        model: !1 !== dd.model
      }
    }

    function BN(dd, Od) {
      return {}.hasOwnProperty.call(dd, Od)
    }

    function SN(dd, Od) {
      const md = Object.create(dd);
      return Od && Object.defineProperty(md, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Od
      }), md
    }

    function sN(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!xm(dd)) return;
      const Wd = dd.trim();
      return Wd ? (md ? function(dd, Od) {
        return function(dd) {
          return dd.length >= 10240 && (sR.test(dd) || function(dd) {
            const Od = iR.exec(dd);
            if (!Od) return !1;
            let md;
            try {
              md = decodeURIComponent(dd.slice(Od[0].length))
            } catch (dd) {
              return !1
            }
            return AR.test(md.replace(/[\r\n]/g, ""))
          }(dd) || VR.test(dd) && uR.test(dd))
        }(dd) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(dd, Od, md) {
          const Wd = 4 * md.maxStringLength;
          if (dd.length > Wd) {
            const Fd = Od(dd.slice(0, function(dd, Od) {
              let md = Od;
              for (; md > 0 && !LR.test(dd[md - 1]);) md--;
              return md
            }(dd, Wd)));
            if (Fd.length >= 2 * md.maxStringLength) return Fd + md.truncationSuffix
          }
          return Od(dd)
        }(dd, (dd => function(dd) {
          return QX(dd, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(dd) {
          let Od = dd.replace(IR, " ");
          return Od = Od.replace(lR, SR), Od = Od.replace(CR, SR), Od = Od.replace(ZR, `$1${SR}`), Od = Od.replace(fR, NX), Od = Od.replace(kR, SR), Od = Od.replace(dX, `$1${SR}`), Od = Od.replace(OX, `$1${SR}`), Od
        }(tX(dd)))), Od)
      }(Wd, UN) : Wd).slice(0, Od) : void 0
    }

    function uN(dd) {
      try {
        return Em(dd) && !0 === dd.isError
      } catch (dd) {
        return !1
      }
    }
    const VN = {
        featureFlags: class extends Io {
          constructor(dd) {
            const Od = new Zo(dd.config, dd._shouldDisableFlags());
            super(Od), this.name = Yt, this._instance = dd, this._mutableConfigSource = Od
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(dd, Od) {
            this._mutableConfigSource.update(dd, Od), this._onConfigUpdated()
          }
        }
      },
      iN = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var dd;
            return !!(null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd ? void 0 : dd.isStarted)
          }
          get status() {
            var dd, Od;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (dd = null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od ? void 0 : Od.status) && void 0 !== dd ? dd : this._recordingStatus
          }
          constructor(dd) {
            if (this._instance = dd, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = No, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var dd, Od;
                if (!(null == Om ? void 0 : Om.visibilityState) || "visible" === Om.visibilityState) return !0;
                const md = null == fO || null === (dd = fO.performance) || void 0 === dd || null === (Od = dd.getEntriesByType) || void 0 === Od ? void 0 : Od.call(dd, "visibility-state");
                return !(null == md ? void 0 : md.length) || md.some((dd => "visible" === dd.name))
              })(), this._onVisibilityChange = () => {
                var dd, Od;
                "visible" === (null == Om ? void 0 : Om.visibilityState) && (this._documentWasEverVisible = !0, null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd || null === (Od = dd.setDocumentWasEverVisible) || void 0 === Od || Od.call(dd, !0))
              }, !this._instance.sessionManager) throw Ho.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == Om ? void 0 : Om.addEventListener) && kX(Om, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: dd = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var Od;
            this._sessionRecordingDisposed = !0, null == Om || null === (Od = Om.removeEventListener) || void 0 === Od || Od.call(Om, "visibilitychange", this._onVisibilityChange), dd ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var dd;
            const Od = !!(null === (dd = this._instance.get_property("$session_recording_remote_config")) || void 0 === dd ? void 0 : dd.enabled),
              md = !this._config.disable_session_recording,
              Wd = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return fO && Od && md && !Wd
          }
          startIfEnabledOrStop(dd) {
            var Od;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od ? void 0 : Od.isStarted)) return;
            const md = !Um(Object.assign) && !Um(Array.from);
            this._isRecordingEnabled && md ? (this._lazyLoadAndStart(dd), Ho.info("starting")) : (this._recordingStatus = No, this.stopRecording())
          }
          _lazyLoadAndStart(dd) {
            var Od, md;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = qo), (null == Qm || null === (Od = Qm.__PosthogExtensions__) || void 0 === Od || null === (Od = Od.rrweb) || void 0 === Od ? void 0 : Od.record) && (null === (md = Qm.__PosthogExtensions__) || void 0 === md ? void 0 : md.initSessionRecording)) this._onScriptLoaded(dd);
              else {
                var Wd, Fd;
                const Od = this._instance.sessionManager;
                null === (Wd = Qm.__PosthogExtensions__) || void 0 === Wd || null === (Fd = Wd.loadExternalDependency) || void 0 === Fd || Fd.call(Wd, this._instance, this._scriptName, (md => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === Od) return md ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), Ho.error("could not load recorder", md)) : void this._onScriptLoaded(dd);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var dd, Od;
            null === (dd = this._persistFlagsOnSessionListener) || void 0 === dd || dd.call(this), this._persistFlagsOnSessionListener = void 0, null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od || Od.stop()
          }
          _discardRecording() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var Od, md;
            null === (Od = this._persistFlagsOnSessionListener) || void 0 === Od || Od.call(this), this._persistFlagsOnSessionListener = void 0, null === (md = this._lazyLoadedSessionRecording) || void 0 === md || md.discard({
              discardProducerEvents: dd
            })
          }
          _resetSampling() {
            var dd, Od;
            null === (dd = this._persistence) || void 0 === dd || dd.unregister("$session_is_sampled"), null === (Od = this._persistence) || void 0 === Od || Od.unregister("$replay_sample_rate")
          }
          _validateSampleRate(dd, Od) {
            if (sm(dd)) return null;
            const md = um(dd) ? dd : parseFloat(dd);
            return "number" != typeof(Wd = md) || !Number.isFinite(Wd) || 0 > Wd || Wd > 1 ? (Ho.warn(`${Od} must be between 0 and 1. Ignoring invalid value:`, dd), null) : md;
            var Wd
          }
          _persistRemoteConfig(dd) {
            if (this._persistence) {
              var Od, md;
              const Wd = this._persistence,
                Fd = () => {
                  var Od;
                  const md = !1 === dd.sessionRecording ? void 0 : dd.sessionRecording,
                    Fd = this._validateSampleRate(null === (Od = this._config.session_recording) || void 0 === Od ? void 0 : Od.sampleRate, "session_recording.sampleRate"),
                    Rd = this._validateSampleRate(null == md ? void 0 : md.sampleRate, "remote config sampleRate"),
                    Xd = null != Fd ? Fd : Rd;
                  sm(Xd) && this._resetSampling();
                  const Kd = null == md ? void 0 : md.minimumDurationMilliseconds;
                  Wd.register({
                    [Id]: gF(gF({
                      cache_timestamp: Date.now(),
                      enabled: !!md
                    }, md), {}, {
                      networkPayloadCapture: gF({
                        capturePerformance: dd.capturePerformance
                      }, null == md ? void 0 : md.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == md ? void 0 : md.recordCanvas,
                        fps: null == md ? void 0 : md.canvasFps,
                        quality: null == md ? void 0 : md.canvasQuality
                      },
                      sampleRate: Xd,
                      minimumDurationMilliseconds: Um(Kd) ? null : Kd,
                      endpoint: null == md ? void 0 : md.endpoint,
                      triggerMatchType: null == md ? void 0 : md.triggerMatchType,
                      masking: null == md ? void 0 : md.masking,
                      urlTriggers: null == md ? void 0 : md.urlTriggers,
                      version: null == md ? void 0 : md.version,
                      triggerGroups: null == md ? void 0 : md.triggerGroups
                    })
                  })
                };
              Fd(), null === (Od = this._persistFlagsOnSessionListener) || void 0 === Od || Od.call(this), this._persistFlagsOnSessionListener = null === (md = this._instance.sessionManager) || void 0 === md ? void 0 : md.onSessionId(Fd)
            }
          }
          onRemoteConfig(dd) {
            const Od = dd.ok ? dd.config : void 0;
            return Od && "sessionRecording" in Od ? !1 === Od.sessionRecording ? (this._persistRemoteConfig(Od), void this._discardRecording()) : (this._persistRemoteConfig(Od), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [VO]: !0
            }), Ho.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var md;
            (null === (md = this._lazyLoadedSessionRecording) || void 0 === md ? void 0 : md.log) ? this._lazyLoadedSessionRecording.log(dd, Od): Ho.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var dd, Od;
            const md = null === (dd = this._instance) || void 0 === dd || null === (dd = dd.persistence) || void 0 === dd ? void 0 : dd.get_property(Id);
            return (null == md || null === (Od = md.scriptConfig) || void 0 === Od ? void 0 : Od.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const dd = this._instance.get_property(Id);
            if (!dd) return !1;
            let Od;
            try {
              Od = "object" == typeof dd ? dd : JSON.parse(dd)
            } catch (dd) {
              return Ho.warn("persisted remote config for session recording is invalid and will be ignored", dd), !1
            }
            return !sm(Od.cache_timestamp) && 36e5 >= Date.now() - Od.cache_timestamp
          }
          _onScriptLoaded(dd) {
            var Od, md, Wd;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.initSessionRecording)) return Ho.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [uO]: !0
              });
              var Fd;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (Fd = Qm.__PosthogExtensions__) || void 0 === Fd ? void 0 : Fd.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", Ho.info("persisted remote config is stale, requesting fresh config before starting"), void new Pv(this._instance).load()
              }
              this._recordingStatus = qo, null === (md = (Wd = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === md || md.call(Wd, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(dd)
            } else this._recordingStatus = No
          }
          onRRwebEmit(dd) {
            var Od, md;
            null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od || null === (md = Od.onRRwebEmit) || void 0 === md || md.call(Od, dd)
          }
          overrideLinkedFlag() {
            var dd, Od;
            this._lazyLoadedSessionRecording || null === (Od = this._persistence) || void 0 === Od || Od.register({
              $replay_override_linked_flag: !0
            }), null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd || dd.overrideLinkedFlag()
          }
          overrideSampling() {
            var dd, Od;
            this._lazyLoadedSessionRecording || null === (Od = this._persistence) || void 0 === Od || Od.register({
              $replay_override_sampling: !0
            }), null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd || dd.overrideSampling()
          }
          overrideTrigger(dd) {
            var Od, md;
            this._lazyLoadedSessionRecording || null === (md = this._persistence) || void 0 === md || md.register({
              ["url" === dd ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (Od = this._lazyLoadedSessionRecording) || void 0 === Od || Od.overrideTrigger(dd)
          }
          get sdkDebugProperties() {
            var dd;
            const Od = {};
            for (const Wd of yo) {
              var md;
              const dd = null === (md = this._instance.sessionPersistence) || void 0 === md ? void 0 : md.get_property(Wd);
              Um(dd) || (Od[Wd] = dd)
            }
            return gF(gF({}, Od), (null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd ? void 0 : dd.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(dd, Od) {
            var md;
            return !!(null === (md = this._lazyLoadedSessionRecording) || void 0 === md ? void 0 : md.tryAddCustomEvent(dd, Od))
          }
          flushBeforeIdentityReset() {
            var dd, Od;
            null === (dd = this._lazyLoadedSessionRecording) || void 0 === dd || null === (Od = dd.flushBeforeIdentityReset) || void 0 === Od || Od.call(dd)
          }
        }
      },
      AN = {
        autocapture: class extends Oo {
          constructor(dd) {
            super(new mo(dd)), this.instance = dd
          }
        },
        historyAutocapture: class {
          constructor(dd) {
            this._isFlushingPageview = !1, this._instance = dd, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const dd = this._getCaptureOptions();
            return !!(dd.path || dd.search || this._shouldCaptureHashChanges(dd))
          }
          startIfEnabled() {
            this.isEnabled && (LX.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, LX.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            fO && fO.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(dd) {
            var Od;
            if (!fO || (null === (Od = fO.history[dd]) || void 0 === Od ? void 0 : Od.__posthog_wrapped__)) return;
            const md = this;
            Xo(fO.history, dd, (Od => function(Wd, Fd, Rd) {
              var Xd;
              md._isUrlChanging(Rd) && md._flushPendingPageview(), Od.call(this, Wd, Fd, Rd), md._capturePageview(dd, !md._isFlushingPageview && "popstate" !== (null == fO || null === (Xd = fO.event) || void 0 === Xd ? void 0 : Xd.type))
            }))
          }
          _getCurrentLocation() {
            const dd = null == fO ? void 0 : fO.location;
            if (null == dd ? void 0 : dd.pathname) return {
              pathname: dd.pathname,
              search: dd.search,
              hash: dd.hash
            }
          }
          _getCaptureOptions() {
            const dd = this._instance.config.capture_pageview;
            return "history_change" === dd ? {
              path: !0
            } : Em(dd) ? dd : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(dd) {
            const Od = this._getCaptureOptions(),
              md = this._lastLocation;
            return !(!md || !(Od.path && dd.pathname !== md.pathname || Od.search && dd.search !== md.search || this._shouldCaptureHashChanges(Od) && dd.hash !== md.hash))
          }
          _capturePageview(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              Od || this._flushPendingPageview();
              const md = this._getCurrentLocation();
              if (!md) return;
              if (this._hasLocationChanged(md)) {
                const md = () => this._instance.capture(lO, {
                  navigation_type: dd
                });
                Od ? (this._pendingPageview = md, Promise.resolve().then((() => this._flushPendingPageview()))) : md()
              }
              this._lastLocation = md
            } catch (Od) {
              LX.error(`Error capturing ${dd} pageview`, Od)
            }
          }
          _isUrlChanging(dd) {
            var Od, md;
            return !(sm(dd) || !fO) && (null === (Od = Ph(String(dd))) || void 0 === Od ? void 0 : Od.href) !== (null === (md = fO.location) || void 0 === md ? void 0 : md.href)
          }
          _flushPendingPageview() {
            const dd = this._pendingPageview;
            if (dd) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                dd()
              } catch (dd) {
                LX.error("Error capturing deferred pageview", dd)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const dd = () => {
              this._capturePageview("popstate")
            };
            kX(fO, "popstate", dd), this._popstateListener = () => {
              fO && fO.removeEventListener("popstate", dd)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const dd = () => {
              this._capturePageview("hashchange")
            };
            kX(fO, "hashchange", dd), this._hashchangeListener = () => {
              fO && fO.removeEventListener("hashchange", dd)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(dd) {
            var Od;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = dd, this._enabledServerSide = !!(null === (Od = this.instance.persistence) || void 0 === Od ? void 0 : Od.props[Gd]), this.rageclicks = new Ct(dd.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let dd = 5e3;
            return Em(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (dd = this._config.capture_heatmaps.flush_interval_milliseconds), dd
          }
          get isEnabled() {
            return sm(this._config.capture_heatmaps) ? sm(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              bo.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var dd;
              clearInterval(null !== (dd = this._flushInterval) && void 0 !== dd ? dd : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(dd) {
            if (!dd.ok) return;
            const Od = dd.config;
            if (!("heatmaps" in Od)) return;
            const md = !!Od.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [Gd]: md
            }), this._enabledServerSide = md, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const dd = this._buffer;
            return this._buffer = void 0, dd
          }
          _onDeadClick(dd) {
            To(dd.originalEvent) && this._onClick(dd.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == Om ? void 0 : Om.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            fO && Om && (this._flushHandler = this._flush.bind(this), kX(fO, IO, this._flushHandler), this._onClickHandler = dd => this._onClick(dd || (null == fO ? void 0 : fO.event)), kX(Om, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = dd => this._onMouseMove(dd || (null == fO ? void 0 : fO.event)), kX(Om, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new ah(this.instance, gh, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), kX(Om, gd, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var dd;
            fO && Om && (this._flushHandler && fO.removeEventListener(IO, this._flushHandler), this._onClickHandler && Om.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && Om.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && Om.removeEventListener(gd, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (dd = this._deadClicksCapture) || void 0 === dd || dd.stop(), this._initialized = !1)
          }
          _getProperties(dd, Od) {
            const md = this.instance.scrollManager.scrollY(),
              Wd = this.instance.scrollManager.scrollX(),
              Fd = this.instance.scrollManager.scrollElement(),
              Rd = function(dd, Od, md) {
                let Wd = dd;
                for (; Wd && sK(Wd) && !uK(Wd, "body");) {
                  if (Wd === md) return !1;
                  let Kd;
                  try {
                    var Fd, Rd, Xd;
                    Kd = null === (Fd = null !== (Rd = null === (Xd = Wd.ownerDocument) || void 0 === Xd ? void 0 : Xd.defaultView) && void 0 !== Rd ? Rd : fO) || void 0 === Fd ? void 0 : Fd.getComputedStyle(Wd).position
                  } catch (dd) {
                    return !1
                  }
                  if (Hm(Od, Kd)) return !0;
                  Wd = DK(Wd)
                }
                return !1
              }(PK(dd), ["fixed", "sticky"], Fd);
            return {
              x: dd.clientX + (Rd ? 0 : Wd),
              y: dd.clientY + (Rd ? 0 : md),
              target_fixed: Rd,
              type: Od
            }
          }
          _onClick(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var md;
            if (SK(dd.target) || !To(dd)) return;
            const Wd = this._getProperties(dd, Od);
            (null === (md = this.rageclicks) || void 0 === md ? void 0 : md.isRageClick(dd.clientX, dd.clientY, (new Date).getTime())) && Wh(PK(dd), this.instance.config.rageclick) && this._capture(gF(gF({}, Wd), {}, {
              type: "rageclick"
            })), this._capture(Wd)
          }
          _onMouseMove(dd) {
            !SK(dd.target) && To(dd) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(dd, "mousemove"))
            }), 500))
          }
          _capture(dd) {
            if (!fO) return;
            const Od = this._config.disable_capture_url_hashes ? NF(fO.location.href) : fO.location.href,
              md = this._config.custom_personal_data_properties,
              Wd = this._config.mask_personal_data_properties ? [...Dh, ...md || []] : [],
              Fd = ch(Od, Wd, Ih);
            this._buffer = this._buffer || {}, this._buffer[Fd] || (this._buffer[Fd] = []), this._buffer[Fd].push(dd)
          }
          _flush() {
            this._buffer && !Jm(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: ah,
        webVitalsAutocapture: class {
          constructor(dd) {
            var Od;
            this._instance = dd, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", gF({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((dd, Od) => gF(gF({}, dd), {}, {
                [`$web_vitals_${Od.name}_event`]: gF({}, Od),
                [`$web_vitals_${Od.name}_value`]: Od.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = dd => {
              var Od;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, sm(null == dd ? void 0 : dd.name) || sm(null == dd ? void 0 : dd.value)) return void ho.error("Invalid metric received", dd);
              const md = "string" == typeof dd.navigationURL ? dd.navigationURL : void 0,
                Wd = this._maskedURL(md);
              if (Um(Wd)) return;
              const Fd = um(dd.navigationId) || "string" == typeof dd.navigationId ? `navigation:${dd.navigationId}` : `url:${Wd}`;
              if (this._maxAllowedValue && dd.value >= this._maxAllowedValue) return void ho.error("Ignoring metric with value >= " + this._maxAllowedValue, dd);
              this._buffer.navigationKey !== Fd && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), Um(this._buffer.navigationKey) && (this._buffer.navigationKey = Fd, this._buffer.url = Wd), this._buffer.firstMetricTimestamp = Um(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const Rd = null === (Od = this._instance.sessionManager) || void 0 === Od ? void 0 : Od.checkAndGetSessionAndWindowId(!0),
                Xd = gF(gF(gF({}, dd), md ? {
                  navigationURL: Wd
                } : {}), {}, {
                  $current_url: Wd,
                  timestamp: Date.now()
                });
              if (delete Xd.entries, Em(dd.attribution) && this.attributionMetrics.indexOf(dd.name) > -1) {
                const Od = {};
                for (const md of oo) {
                  const Wd = "url" === md && "string" == typeof dd.attribution[md] ? this._maskedURL(dd.attribution[md]) : dd.attribution[md];
                  Um(Wd) || (Od[md] = Wd)
                }
                Xd.attribution = Od
              } else delete Xd.attribution;
              Um(Rd) || (Xd.$session_id = Rd.sessionId, Xd.$window_id = Rd.windowId), this._buffer.metrics.push(Xd), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let dd, Od, md, Wd, Fd = !1;
              const Rd = Qm.__PosthogExtensions__,
                Xd = null == Rd ? void 0 : Rd.postHogWebVitalsCallbacksByFlavor,
                Kd = (null == Xd ? void 0 : Xd[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && Um(Xd) ? null == Rd ? void 0 : Rd.postHogWebVitalsCallbacks : void 0);
              if (!Um(Kd)) {
                const Rd = Kd.withoutAttribution,
                  Xd = this.attributionMetrics;
                Fd = !Um(Rd), dd = Xd.indexOf("LCP") > -1 ? Kd.onLCP : (null == Rd ? void 0 : Rd.onLCP) || Kd.onLCP, Od = Xd.indexOf("CLS") > -1 ? Kd.onCLS : (null == Rd ? void 0 : Rd.onCLS) || Kd.onCLS, md = Xd.indexOf("FCP") > -1 ? Kd.onFCP : (null == Rd ? void 0 : Rd.onFCP) || Kd.onFCP, Wd = Xd.indexOf("INP") > -1 ? Kd.onINP : (null == Rd ? void 0 : Rd.onINP) || Kd.onINP
              }
              if (!(dd && Od && md && Wd)) return void ho.error("web vitals callbacks not loaded - not starting");
              const hd = {
                  reportSoftNavs: this.useSoftNavs
                },
                vd = Fd && this.attributionMetrics.indexOf("INP") > -1 ? gF(gF({}, hd), {}, {
                  includeProcessedEventEntries: !1
                }) : hd;
              this.allowedMetrics.indexOf("LCP") > -1 && dd(this._addToBuffer.bind(this), hd), this.allowedMetrics.indexOf("CLS") > -1 && Od(this._addToBuffer.bind(this), hd), this.allowedMetrics.indexOf("FCP") > -1 && md(this._addToBuffer.bind(this), hd), this.allowedMetrics.indexOf("INP") > -1 && Wd(this._addToBuffer.bind(this), vd), this._initialized = !0
            }, this._enabledServerSide = !!(null === (Od = this._instance.persistence) || void 0 === Od ? void 0 : Od.props[zd]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var dd, Od;
            const md = Em(this._perfConfig) ? null === (dd = this._perfConfig) || void 0 === dd ? void 0 : dd.web_vitals_allowed_metrics : void 0;
            return sm(md) ? (null === (Od = this._instance.persistence) || void 0 === Od ? void 0 : Od.props.$web_vitals_allowed_metrics) || Qo : md
          }
          get flushToCaptureTimeoutMs() {
            return (Em(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const dd = Em(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return im(dd) ? dd ? Qo : [] : wm(dd) ? dd : to
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const dd = Em(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != dd && dd
          }
          get _maxAllowedValue() {
            const dd = Em(this._perfConfig) && um(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : vo;
            return dd > 0 && 6e4 >= dd ? vo : dd
          }
          get isEnabled() {
            const dd = null == mm ? void 0 : mm.protocol;
            if ("http:" !== dd && "https:" !== dd) return ho.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const Od = Em(this._perfConfig) ? this._perfConfig.web_vitals : im(this._perfConfig) ? this._perfConfig : void 0;
            return im(Od) ? Od : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (ho.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(dd) {
            if (!dd.ok) return;
            const Od = dd.config;
            if (!("capturePerformance" in Od)) return;
            const md = Em(Od.capturePerformance) && !!Od.capturePerformance.web_vitals,
              Wd = Em(Od.capturePerformance) ? Od.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [zd]: md
            }), this._instance.persistence.register({
              [ed]: Wd
            })), this._enabledServerSide = md, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(dd) {
            var Od;
            const md = Qm.__PosthogExtensions__,
              Wd = this._callbackFlavor,
              Fd = null == md ? void 0 : md.postHogWebVitalsCallbacksByFlavor;
            (null == Fd ? void 0 : Fd[Wd]) || "web-vitals" === Wd && Um(Fd) && (null == md ? void 0 : md.postHogWebVitalsCallbacks) ? dd() : null == md || null === (Od = md.loadExternalDependency) || void 0 === Od || Od.call(md, this._instance, Wd, (Od => {
              Od ? ho.error("failed to load script", Od) : dd()
            }))
          }
          _maskedURL(dd) {
            const Od = dd || (null == fO ? void 0 : fO.location.href);
            if (!Od) return void ho.error("Could not determine current URL");
            const md = this._instance.config.disable_capture_url_hashes ? NF(Od) : Od,
              Wd = this._instance.config.custom_personal_data_properties,
              Fd = this._instance.config.mask_personal_data_properties ? [...Dh, ...Wd || []] : [];
            return ch(md, Fd, Ih)
          }
        }
      },
      rN = {
        exceptionObserver: class {
          constructor(dd) {
            var Od;
            this._startCapturing = () => {
              var dd;
              if (!fO || !this.isEnabled || !(null === (dd = Qm.__PosthogExtensions__) || void 0 === dd ? void 0 : dd.errorWrappingFunctions)) return;
              const Od = Qm.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                md = Qm.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                Wd = Qm.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = Od(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = md(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = Wd(this.captureException.bind(this)))
              } catch (dd) {
                Wo.error("failed to start", dd), this._stopCapturing()
              }
            }, this._instance = dd, this._remoteEnabled = !!(null === (Od = this._instance.persistence) || void 0 === Od ? void 0 : Od.props[nd]), this._rateLimiter = new fm(gF(gF({}, function() {
              let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var Od, md, Wd, Fd;
              return {
                refillRate: null !== (Od = null !== (md = dd.exceptionRateLimiterRefillRate) && void 0 !== md ? md : dd.__exceptionRateLimiterRefillRate) && void 0 !== Od ? Od : 1,
                bucketSize: null !== (Wd = null !== (Fd = dd.exceptionRateLimiterBucketSize) && void 0 !== Fd ? Fd : dd.__exceptionRateLimiterBucketSize) && void 0 !== Wd ? Wd : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Wo
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const dd = this._instance.config.capture_exceptions;
            let Od = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return Em(dd) ? Od = gF(gF({}, Od), dd) : (Um(dd) ? this._remoteEnabled : dd) && (Od = gF(gF({}, Od), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), Od
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Wo.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(dd) {
            var Od, md, Wd;
            (null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.errorWrappingFunctions) ? dd(): null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this._instance, "exception-autocapture", (Od => {
              if (Od) return Wo.error("failed to load script", Od);
              dd()
            }))
          }
          _stopCapturing() {
            var dd, Od, md;
            null === (dd = this._unwrapOnError) || void 0 === dd || dd.call(this), this._unwrapOnError = void 0, null === (Od = this._unwrapUnhandledRejection) || void 0 === Od || Od.call(this), this._unwrapUnhandledRejection = void 0, null === (md = this._unwrapConsoleError) || void 0 === md || md.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(dd) {
            if (!dd.ok) return;
            const Od = dd.config;
            "autocaptureExceptions" in Od && (this._remoteEnabled = !!Od.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [nd]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(dd) {
            try {
              var Od, md, Wd;
              const Fd = null !== (Od = null == dd || null === (md = dd.$exception_list) || void 0 === md || null === (md = md[0]) || void 0 === md ? void 0 : md.type) && void 0 !== Od ? Od : "Exception";
              if (this._rateLimiter.consumeRateLimit(Fd)) return void Wo.info("Skipping exception capture because of client rate limiting.", {
                exception: Fd
              });
              null === (Wd = this._instance.exceptions) || void 0 === Wd || Wd.sendExceptionEvent(dd)
            } catch (dd) {}
          }
        },
        exceptions: class {
          constructor(dd) {
            var Od, md;
            this._suppressionRules = [], this._errorPropertiesBuilder = new BF([new kF, new KR, new MF, new fF, new RR, new FR, new OR, new XR], function(dd) {
              for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
              return function(Od) {
                let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const Fd = [],
                  Rd = Od.split("\n"),
                  Xd = Math.min(Rd.length, Wd + 1e3),
                  Kd = [];
                for (let Qd = Wd; Xd > Qd; Qd++) {
                  const Od = Rd[Qd];
                  if (Od.length > 1024) continue;
                  const Wd = cF.test(Od) ? Od.replace(cF, "$1") : Od;
                  if (!Wd.match(/\S*Error: /)) {
                    for (const Od of md) {
                      const md = Od(Wd, dd);
                      if (md) {
                        Fd.push(md);
                        const dd = DF(Fd);
                        if (dd) {
                          for (let Od = Kd.length - 1; Od >= 0; Od--) {
                            const md = Kd[Od];
                            if (dd.start >= md.start + md.length) break;
                            Kd.pop()
                          }
                          Kd.push(dd)
                        }
                        break
                      }
                    }
                    if (CF(Fd, Kd) >= 50) break
                  }
                }
                const hd = [...Kd].sort(((dd, Od) => Od.start - dd.start)),
                  vd = hd[hd.length - 1];
                if (vd) {
                  const dd = IF(Fd, vd);
                  Fd.splice(vd.start - dd, dd);
                  for (const Od of hd) Od.start -= dd
                }
                for (const dd of hd) eF(Fd, dd);
                return Kd.some((dd => 0 === dd.start && Fd.length === dd.length)) && function(dd) {
                    const Od = dd.map((dd => `${dd.function}|${dd.filename}|${dd.lineno}|${dd.colno}|${dd.module}`));
                    let md = 0;
                    for (let Wd = 1; Od.length > Wd; Wd++) ZF(Od, Wd, md) && (md = Wd);
                    dd.push(...dd.splice(0, md))
                  }(Fd),
                  function(dd) {
                    if (!dd.length) return [];
                    const Od = Array.from(dd);
                    return Od.reverse(), Od.slice(0, 50).map((dd => {
                      return gF(gF({}, dd), {}, {
                        filename: dd.filename || (md = Od, md[md.length - 1] || {}).filename,
                        function: dd.function || "?"
                      });
                      var md
                    }))
                  }(Fd)
              }
            }("web:javascript", nF, zF)), this._instance = dd, this._suppressionRules = null !== (Od = null === (md = this._instance.persistence) || void 0 === md ? void 0 : md.get_property("$error_tracking_suppression_rules")) && void 0 !== Od ? Od : [], this._exceptionStepsConfig = oR(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new NR(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = oR(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(dd) {
            var Od, md, Wd;
            if (!dd.ok) return;
            const Fd = dd.config;
            if (!("errorTracking" in Fd)) return;
            const Rd = null !== (Od = null === (md = Fd.errorTracking) || void 0 === md ? void 0 : md.suppressionRules) && void 0 !== Od ? Od : [],
              Xd = null === (Wd = Fd.errorTracking) || void 0 === Wd ? void 0 : Wd.captureExtensionExceptions;
            this._suppressionRules = Rd, this._instance.persistence && this._instance.persistence.register({
              [Ld]: this._suppressionRules,
              [Pd]: Xd
            })
          }
          get _captureExtensionExceptions() {
            var dd;
            const Od = !!this._instance.get_property(Pd),
              md = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (dd = null != md ? md : Od) && void 0 !== dd && dd
          }
          buildProperties(dd, Od) {
            return this._errorPropertiesBuilder.buildFromUnknown(dd, {
              syntheticException: null == Od ? void 0 : Od.syntheticException,
              mechanism: {
                handled: null == Od ? void 0 : Od.handled
              }
            })
          }
          addExceptionStep(dd, Od) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!xm(dd) || 0 === dd.trim().length) return void fo.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: md,
                droppedKeys: Wd
              } = function(dd) {
                if (!dd) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const Od = [];
                return {
                  sanitizedProperties: Object.keys(dd).reduce(((md, Wd) => QR.has(Wd) ? (Od.push(Wd), md) : (md[Wd] = dd[Wd], md)), {}),
                  droppedKeys: Od
                }
              }(this._coerceExceptionStepProperties(Od));
              Wd.length > 0 && fo.warn("Ignoring reserved exception step fields", {
                droppedKeys: Wd
              }), this._exceptionStepsBuffer.add(gF({
                [hR]: dd,
                [vR]: (new Date).toISOString()
              }, md))
            } catch (dd) {
              fo.error("Failed to add exception step. Ignoring breadcrumb.", dd)
            }
          }
          sendExceptionEvent(dd) {
            try {
              const Od = dd.$exception_list;
              if (this._isExceptionList(Od)) {
                if (this._matchesSuppressionRule(Od)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void fo.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(Od)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void fo.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(Od)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void fo.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(Od)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void fo.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const md = this._exceptionStepsConfig.enabled && sm(dd.$exception_steps) ? this._addBufferedExceptionSteps(dd) : dd,
                Wd = function() {
                  if ("u" > typeof process) {
                    var dd;
                    const Od = null === (dd = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === dd ? void 0 : dd.trim();
                    if (Od) return Od
                  }
                  const Od = globalThis._posthogReleaseId;
                  return "string" == typeof Od && Od.length > 0 ? Od : void 0
                }();
              Wd && (md.$release_id = Wd);
              try {
                const dd = this._instance.capture("$exception", md, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return dd && this._exceptionStepsBuffer.clear(), dd
              } catch (dd) {
                return ko(dd) || fo.error("Failed to capture exception event. Dropping this exception.", dd), void this._exceptionStepsBuffer.clear()
              }
            } catch (dd) {
              return void(ko(dd) || fo.error("Failed to process exception event. Ignoring this exception.", dd))
            }
          }
          _addBufferedExceptionSteps(dd) {
            try {
              const Od = this._exceptionStepsBuffer.getAttachable();
              return 0 === Od.length ? dd : gF(gF({}, dd), {}, {
                $exception_steps: Od
              })
            } catch (Fd) {
              return fo.error("Failed to read buffered exception steps. Capturing exception without steps.", Fd), dd
            }
          }
          _addDroppedExceptionStep(dd) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [hR]: dd,
              [vR]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(dd) {
            return Em(dd) ? gF({}, dd) : {}
          }
          _getExceptionStepsConfig() {
            var dd, Od;
            return null !== (dd = null === (Od = this._instance.config.error_tracking) || void 0 === Od ? void 0 : Od.exception_steps) && void 0 !== dd ? dd : {}
          }
          _matchesSuppressionRule(dd) {
            if (0 === dd.length) return !1;
            try {
              const Od = dd.reduce(((dd, Od) => {
                let {
                  type: md,
                  value: Wd
                } = Od;
                return xm(md) && md.length > 0 && dd.$exception_types.push(md), xm(Wd) && Wd.length > 0 && dd.$exception_values.push(Wd), dd
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((dd => {
                const md = dd.values.map((dd => {
                  const md = Ft[dd.operator],
                    Wd = Od[dd.key];
                  if (!md || !Wd) return !1;
                  const Fd = wm(dd.value) ? dd.value : [dd.value];
                  return Fd.length > 0 && md(Fd, Wd)
                }));
                return "OR" === dd.type ? md.some(Boolean) : md.every(Boolean)
              }))
            } catch (dd) {
              return fo.warn("Failed to evaluate suppression rules. Capturing the exception.", dd), !1
            }
          }
          _isExtensionException(dd) {
            const Od = dd.flatMap((dd => {
                var Od, md;
                return null !== (Od = null === (md = dd.stacktrace) || void 0 === md ? void 0 : md.frames) && void 0 !== Od ? Od : []
              })),
              md = Od.filter((dd => {
                let {
                  filename: Od
                } = dd;
                return !!Od && ON.some((dd => Od.startsWith(dd)))
              }));
            return 0 !== md.length && (!md.every((dd => {
              let {
                filename: Od
              } = dd;
              return !!Od && Od.startsWith(Mo)
            })) || dd.some((dd => {
              let {
                type: Od,
                value: md
              } = dd;
              return "NoResponse" === Od || xm(md) && dN.some((dd => {
                let {
                  value: Od,
                  exact: Wd
                } = dd;
                return Wd ? md === Od : md.includes(Od)
              }))
            })) && !Od.some((dd => {
              let {
                in_app: Od,
                filename: md
              } = dd;
              return Od && !(null == md ? void 0 : md.startsWith(Mo))
            })))
          }
          _isInjectedBrowserScriptException(dd) {
            return dd.some((dd => {
              let {
                value: Od
              } = dd;
              return xm(Od) && mN.some((dd => Od.includes(dd)))
            }))
          }
          _isPostHogException(dd) {
            if (dd.length > 0) {
              var Od, md, Wd, Fd;
              const Rd = null !== (Od = null === (md = dd[0].stacktrace) || void 0 === md ? void 0 : md.frames) && void 0 !== Od ? Od : [],
                Xd = Rd[Rd.length - 1];
              return null !== (Wd = null == Xd || null === (Fd = Xd.filename) || void 0 === Fd ? void 0 : Fd.includes("posthog.com/static")) && void 0 !== Wd && Wd
            }
            return !1
          }
          _isExceptionList(dd) {
            return !sm(dd) && wm(dd)
          }
        }
      },
      GN = gF({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(dd) {
            this._productTourManager = null, this._cachedTours = null, this._instance = dd
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(dd) {
            if (!dd.ok) return;
            const Od = dd.config;
            if ("productTours" in Od) {
              var md, Wd;
              if (this._persistence && this._persistence.register({
                  [jd]: !!Od.productTours
                }), !Yo(this._instance)) return !this._productTourManager && sm(null === (md = this._persistence) || void 0 === md ? void 0 : md.props.ph_product_tours) || po.info("product tours disabled; stopping and clearing cached tours"), null === (Wd = this._productTourManager) || void 0 === Wd || Wd.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Yo(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(dd) {
            var Od, md, Wd;
            (null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.generateProductTours) ? dd(): null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this._instance, "product-tours", (Od => {
              Od ? po.error("Could not load product tours script", Od) : dd()
            }))
          }
          _startProductTours() {
            var dd;
            !this._productTourManager && (null === (dd = Qm.__PosthogExtensions__) || void 0 === dd ? void 0 : dd.generateProductTours) && (this._productTourManager = Qm.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (wm(this._cachedTours) && !Od) return void dd(this._cachedTours, {
              isLoaded: !0
            });
            const md = this._persistence;
            if (md) {
              const Wd = md.props[NO];
              if (wm(Wd) && !Od) return this._cachedTours = Wd, void dd(Wd, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: Od => {
                if (!Yo(this._instance)) return void dd([], {
                  isLoaded: !0
                });
                const Wd = Od.statusCode;
                if (200 !== Wd || !Od.json) {
                  const md = `Product Tours API could not be loaded, status: ${Wd}`;
                  return 0 === Wd ? Od.error || po.warn(md) : po.error(md), void dd([], {
                    isLoaded: !1,
                    error: md
                  })
                }
                const Fd = wm(Od.json.product_tours) ? Od.json.product_tours : [];
                this._cachedTours = Fd, md && md.register({
                  [NO]: Fd
                }), dd(Fd, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(dd) {
            sm(this._productTourManager) ? dd([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(dd)
          }
          showProductTour(dd) {
            var Od;
            null === (Od = this._productTourManager) || void 0 === Od || Od.showTourById(dd)
          }
          previewTour(dd) {
            this._productTourManager ? this._productTourManager.previewTour(dd) : this._loadScript((() => {
              var Od;
              this._startProductTours(), null === (Od = this._productTourManager) || void 0 === Od || Od.previewTour(dd)
            }))
          }
          dismissProductTour() {
            var dd;
            null === (dd = this._productTourManager) || void 0 === dd || dd.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var dd;
            null === (dd = this._productTourManager) || void 0 === dd || dd.nextStep()
          }
          previousStep() {
            var dd;
            null === (dd = this._productTourManager) || void 0 === dd || dd.previousStep()
          }
          clearCache() {
            var dd;
            this._cachedTours = null, null === (dd = this._persistence) || void 0 === dd || dd.unregister("ph_product_tours")
          }
          resetTour(dd) {
            var Od;
            null === (Od = this._productTourManager) || void 0 === Od || Od.resetTour(dd)
          }
          resetAllTours() {
            var dd;
            null === (dd = this._productTourManager) || void 0 === dd || dd.resetAllTours()
          }
          cancelPendingTour(dd) {
            var Od;
            null === (Od = this._productTourManager) || void 0 === Od || Od.cancelPendingTour(dd)
          }
        }
      }, VN),
      nN = {
        siteApps: class {
          constructor(dd) {
            this._instance = dd, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(dd, Od) {
            if (!Od) return;
            const md = this.globalsForEvent(Od);
            this._bufferedInvocations.push(md), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var dd;
            return null === (dd = Qm._POSTHOG_REMOTE_CONFIG) || void 0 === dd || null === (dd = dd[this._instance.config.token]) || void 0 === dd ? void 0 : dd.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const dd = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                dd(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(dd) {
            var Od, md, Wd, Fd, Rd, Xd, Kd;
            if (!dd) throw new Error("Event payload is required");
            const hd = {},
              vd = this._instance.get_property("$groups") || [],
              Qd = this._instance.get_property("$stored_group_properties") || {};
            for (const [Nd, qd] of Object.entries(Qd)) hd[Nd] = {
              id: vd[Nd],
              type: Nd,
              properties: qd
            };
            const {
              $set_once: td,
              $set: od
            } = dd;
            return {
              event: gF(gF({}, BR(dd, go)), {}, {
                properties: gF(gF(gF({}, dd.properties), od ? {
                  $set: gF(gF({}, null !== (Od = null === (md = dd.properties) || void 0 === md ? void 0 : md.$set) && void 0 !== Od ? Od : {}), od)
                } : {}), td ? {
                  $set_once: gF(gF({}, null !== (Wd = null === (Fd = dd.properties) || void 0 === Fd ? void 0 : Fd.$set_once) && void 0 !== Wd ? Wd : {}), td)
                } : {}),
                elements_chain: null !== (Rd = null === (Xd = dd.properties) || void 0 === Xd ? void 0 : Xd.$elements_chain) && void 0 !== Rd ? Rd : "",
                distinct_id: null === (Kd = dd.properties) || void 0 === Kd ? void 0 : Kd.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: hd
            }
          }
          _prepareElementForSiteApp(dd) {
            var Od;
            const md = null === (Od = dd.tagName) || void 0 === Od ? void 0 : Od.toLowerCase();
            return "style" === md && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(dd) || (wo.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === md && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(dd) || (wo.error("prepare_external_dependency_script returned null"), null) : dd
          }
          _patchSiteAppElementInsertionMethods() {
            var dd, Od, md, Wd, Fd, Rd, Xd, Kd;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const hd = null == Om ? void 0 : Om.defaultView,
              vd = null == hd || null === (dd = hd.Node) || void 0 === dd ? void 0 : dd.prototype;
            if (!hd || !vd) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const Qd = [],
              td = this,
              od = new WeakSet,
              Nd = (dd, Od, md) => {
                if (!(null == dd ? void 0 : dd[Od])) return;
                const Wd = dd[Od];
                dd[Od] = md(Wd), Qd.push((() => {
                  dd[Od] = Wd
                }))
              },
              qd = dd => {
                if (od.has(dd)) return dd;
                const Od = td._prepareElementForSiteApp(dd);
                return Od && od.add(Od), Od
              },
              Hd = dd => dd.map((dd => "string" == typeof dd ? dd : qd(dd))).filter((dd => !Sm(dd)));
            return Nd(vd, "appendChild", (dd => function(Od) {
              const md = qd(Od);
              return md ? dd.call(this, md) : Od
            })), Nd(vd, "insertBefore", (dd => function(Od, md) {
              const Wd = qd(Od);
              return Wd ? dd.call(this, Wd, md) : Od
            })), Nd(vd, "replaceChild", (dd => function(Od, md) {
              const Wd = qd(Od);
              return Wd ? dd.call(this, Wd, md) : md
            })), [null === (Od = hd.Element) || void 0 === Od ? void 0 : Od.prototype, null === (md = hd.Document) || void 0 === md ? void 0 : md.prototype, null === (Wd = hd.DocumentFragment) || void 0 === Wd ? void 0 : Wd.prototype].forEach((dd => {
              Nd(dd, "append", (dd => function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                return dd.apply(this, Hd(md))
              })), Nd(dd, "prepend", (dd => function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                return dd.apply(this, Hd(md))
              }))
            })), [null === (Fd = hd.Element) || void 0 === Fd ? void 0 : Fd.prototype, null === (Rd = hd.CharacterData) || void 0 === Rd ? void 0 : Rd.prototype, null === (Xd = hd.DocumentType) || void 0 === Xd ? void 0 : Xd.prototype].forEach((dd => {
              Nd(dd, "before", (dd => function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                return dd.apply(this, Hd(md))
              })), Nd(dd, "after", (dd => function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                return dd.apply(this, Hd(md))
              })), Nd(dd, "replaceWith", (dd => function() {
                for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
                const Fd = Hd(md);
                return md.length && !Fd.length ? void 0 : dd.apply(this, Fd)
              }))
            })), Nd(null === (Kd = hd.Element) || void 0 === Kd ? void 0 : Kd.prototype, "insertAdjacentElement", (dd => function(Od, md) {
              const Wd = qd(md);
              return Wd ? dd.call(this, Od, Wd) : null
            })), this._restoreSiteAppElementPatches = () => {
              Qd.forEach((dd => dd())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let dd = !1;
            return () => {
              var Od;
              dd || (dd = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (Od = this._restoreSiteAppElementPatches) || void 0 === Od || Od.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(dd) {
            let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const md = this._patchSiteAppElementInsertionMethods();
            try {
              const Wd = dd(md);
              return Od && md(), Wd
            } catch (dd) {
              throw md(), dd
            }
          }
          setupSiteApp(dd) {
            const Od = this.apps[dd.id],
              md = () => {
                var md;
                !Od.errored && this._bufferedInvocations.length && (wo.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${dd.id}`), this._bufferedInvocations.forEach((dd => this._runWithPreparedSiteAppElements((() => {
                  var md;
                  return null === (md = Od.processEvent) || void 0 === md ? void 0 : md.call(Od, dd)
                })))), Od.processedBuffer = !0), Object.values(this.apps).every((dd => dd.processedBuffer || dd.errored)) && (null === (md = this._stopBuffering) || void 0 === md || md.call(this))
              };
            let Wd = !1;
            const Fd = Fd => {
              Od.errored = !Fd, Od.loaded = !0, wo.info(`Site app with id ${dd.id} ${Fd?"loaded":"errored"}`), Wd && md()
            };
            try {
              const {
                processEvent: md
              } = this._runWithPreparedSiteAppElements((Od => dd.init({
                posthog: this._instance,
                callback(dd) {
                  Od(), Fd(dd)
                }
              })), !1);
              md && (Od.processEvent = md), Wd = !0
            } catch (Od) {
              wo.error(ao + dd.id, Od), Fd(!1)
            }
            if (Wd && Od.loaded) try {
              md()
            } catch (md) {
              wo.error(`Error while processing buffered events PostHog app with config id ${dd.id}`, md), Od.errored = !0
            }
          }
          _setupSiteApps() {
            const dd = this.siteAppLoaders || [];
            for (const Od of dd) this.apps[Od.id] = {
              id: Od.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const Od of dd) this.setupSiteApp(Od)
          }
          _onCapturedEvent(dd) {
            if (0 === Object.keys(this.apps).length) return;
            const Od = this.globalsForEvent(dd);
            for (const md of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var dd;
                return null === (dd = md.processEvent) || void 0 === dd ? void 0 : dd.call(md, Od)
              }))
            } catch (Od) {
              wo.error(`Error while processing event ${dd.event} for site app ${md.id}`, Od)
            }
          }
          onRemoteConfig(dd) {
            var Od, md, Wd;
            if (null === (Od = this.siteAppLoaders) || void 0 === Od ? void 0 : Od.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (dd => this._onCapturedEvent(dd)))) : void wo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (md = this._stopBuffering) || void 0 === md || md.call(this), !dd.ok) return;
            const Fd = dd.config;
            if (null === (Wd = Fd.siteApps) || void 0 === Wd ? void 0 : Wd.length)
              if (this.isEnabled)
                for (const {
                    id: Kd,
                    url: hd
                  }
                  of Fd.siteApps) {
                  var Rd, Xd;
                  Qm[`__$$ph_site_app_${Kd}`] = this._instance, null === (Rd = Qm.__PosthogExtensions__) || void 0 === Rd || null === (Xd = Rd.loadSiteApp) || void 0 === Xd || Xd.call(Rd, this._instance, hd, (dd => {
                    if (dd) return wo.error(ao + Kd, dd)
                  }))
                } else wo.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      LN = {
        tracingHeaders: class {
          constructor(dd) {
            this._instance = dd, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const dd = this._syncHostnamesForPatch();
              var Od, md;
              dd ? (Um(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (Od = Qm.__PosthogExtensions__) || void 0 === Od || null === (Od = Od.tracingHeadersPatchFns) || void 0 === Od ? void 0 : Od._patchXHR(dd, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), Um(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (md = md.tracingHeadersPatchFns) || void 0 === md ? void 0 : md._patchFetch(dd, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(dd) {
            var Od, md, Wd;
            (null === (Od = Qm.__PosthogExtensions__) || void 0 === Od ? void 0 : Od.tracingHeadersPatchFns) ? dd(): null === (md = Qm.__PosthogExtensions__) || void 0 === md || null === (Wd = md.loadExternalDependency) || void 0 === Wd || Wd.call(md, this._instance, "tracing-headers", (Od => {
              if (Od) return Ko.error("failed to load script", Od);
              dd()
            }))
          }
          _getConfiguredHostnames() {
            var dd, Od;
            return null !== (dd = null !== (Od = this._instance.config.tracing_headers) && void 0 !== Od ? Od : this._instance.config.addTracingHeaders) && void 0 !== dd ? dd : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const dd = this._getConfiguredHostnames();
            return wm(dd) ? (wm(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...dd) : this._hostnamesForPatch = [...dd], dd.length > 0 ? this._hostnamesForPatch : void 0) : (wm(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = dd || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var dd, Od;
            null === (dd = this._restoreXHRPatch) || void 0 === dd || dd.call(this), null === (Od = this._restoreFetchPatch) || void 0 === Od || Od.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      PN = gF({
        surveys: class extends xo {
          constructor(dd) {
            var Od;
            super(new io(dd), (Od = dd, {
              get projectToken() {
                return Od.config.token
              },
              kv: new Vo(Od)
            })), this._instance = dd
          }
          _sendSurveysRequest(dd, Od) {
            const md = Od.query ? JQ(dd, Od.query) : dd;
            return new Promise((dd => {
              var Wd;
              this._instance._send_request({
                method: Od.method,
                url: this._instance.requestRouter.endpointFor(null !== (Wd = Od.target) && void 0 !== Wd ? Wd : "api", md),
                data: Od.body,
                headers: Od.headers,
                timeout: Od.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: Od.transport,
                compression: Od.compression,
                timestampMode: Od.sentAt,
                callback: dd
              })
            }))
          }
        }
      }, VN),
      zN = {
        toolbar: class {
          constructor(dd) {
            this.instance = dd
          }
          _setToolbarState(dd) {
            Qm.ph_toolbar_state = dd
          }
          _getToolbarState() {
            var dd;
            return null !== (dd = Qm.ph_toolbar_state) && void 0 !== dd ? dd : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var Wd, Fd;
            if (fX(this.instance.config)) return !1;
            if (!fO || !Om) return !1;
            dd = null !== (Wd = dd) && void 0 !== Wd ? Wd : fO.location, md = null !== (Fd = md) && void 0 !== Fd ? Fd : fO.history;
            try {
              if (!Od) {
                try {
                  fO.localStorage.setItem("test", "test"), fO.localStorage.removeItem("test")
                } catch (dd) {
                  return !1
                }
                Od = null == fO ? void 0 : fO.localStorage
              }
              const Wd = Ao || jh(dd.hash, "__posthog") || jh(dd.hash, "state");
              let Fd;
              const Rd = Wd ? qF((() => JSON.parse(atob(decodeURIComponent(Wd))))) || qF((() => JSON.parse(decodeURIComponent(Wd)))) : null;
              return Rd && "ph_authorize" === Rd.action ? (Fd = Rd, Fd.source = "url", Fd && Object.keys(Fd).length > 0 && (Rd.desiredHash ? dd.hash = Rd.desiredHash : md ? md.replaceState(md.state, "", dd.pathname + dd.search) : dd.hash = "")) : (Fd = JSON.parse(Od.getItem(ro) || "{}"), Fd.source = "localstorage", delete Fd.userIntent), !(!Fd.token || this.instance.config.token !== Fd.token || (this.loadToolbar(Fd), 0))
            } catch (dd) {
              return !1
            }
          }
          _callLoadToolbar(dd) {
            const Od = Qm.ph_load_toolbar || Qm.ph_load_editor;
            !sm(Od) && am(Od) ? Od(dd, this.instance) : Go.warn("No toolbar load function found")
          }
          loadToolbar(dd) {
            const Od = !!(null == Om ? void 0 : Om.getElementById("__POSTHOG_TOOLBAR__"));
            if (!fO || Od) return !1;
            const md = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              Wd = gF(gF({
                token: this.instance.config.token
              }, dd), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, md ? {
                instrument: !1
              } : {});
            if (fO.localStorage.setItem(ro, JSON.stringify(gF(gF({}, Wd), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(Wd);
            else if (0 === this._getToolbarState()) {
              var Fd, Rd;
              this._setToolbarState(1), null === (Fd = Qm.__PosthogExtensions__) || void 0 === Fd || null === (Rd = Fd.loadExternalDependency) || void 0 === Rd || Rd.call(Fd, this.instance, "toolbar", (dd => {
                if (dd) return Go.error("[Toolbar] Failed to load", dd), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(Wd)
              })), kX(fO, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(Wd)
              }))
            }
            return !0
          }
          _loadEditor(dd) {
            return this.loadToolbar(dd)
          }
          maybeLoadEditor() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(dd, Od, md)
          }
        }
      },
      cN = gF({
        experiments: class dd {
          get _config() {
            return this._instance.config
          }
          constructor(Od) {
            var md = this;
            this._instance = Od, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              md.getWebExperiments((Od => {
                dd._logInfo("retrieved web experiments from the server"), md._flagToExperiments = new Map, Od.forEach((Od => {
                  if (Od.feature_flag_key) {
                    var Wd;
                    md._flagToExperiments && (dd._logInfo("setting flag key ", Od.feature_flag_key, " to web experiment ", Od), null === (Wd = md._flagToExperiments) || void 0 === Wd || Wd.set(Od.feature_flag_key, Od));
                    const Fd = md._instance.getFeatureFlag(Od.feature_flag_key);
                    xm(Fd) && Od.variants[Fd] && md._applyTransforms(Od.name, Fd, Od.variants[Fd].transforms)
                  } else if (Od.variants)
                    for (const Fd in Od.variants) {
                      const Wd = Od.variants[Fd];
                      dd._matchesTestVariant(Wd, md._instance) && md._applyTransforms(Od.name, Fd, Wd.transforms)
                    }
                }))
              }), Od)
            }, this._instance.onFeatureFlags((dd => {
              this.onFeatureFlags(dd)
            }))
          }
          initialize() {}
          onFeatureFlags(Od) {
            if (this._is_bot()) dd._logInfo(WN);
            else if (!this._config.disable_web_experiments) {
              if (sm(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              dd._logInfo("applying feature flags", Od), Od.forEach((dd => {
                var Od;
                if (this._flagToExperiments && (null === (Od = this._flagToExperiments) || void 0 === Od ? void 0 : Od.has(dd))) {
                  var md;
                  const Od = this._instance.getFeatureFlag(dd),
                    Wd = null === (md = this._flagToExperiments) || void 0 === md ? void 0 : md.get(dd);
                  Od && (null == Wd ? void 0 : Wd.variants[Od]) && this._applyTransforms(Wd.name, Od, Wd.variants[Od].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const Od = dd.getWindowLocation();
            if (null == Od ? void 0 : Od.search) {
              const md = zh(null == Od ? void 0 : Od.search, "__experiment_id"),
                Wd = zh(null == Od ? void 0 : Od.search, "__experiment_variant");
              md && Wd && (dd._logInfo(`previewing web experiments ${md} && ${Wd}`), this.getWebExperiments((dd => {
                this._showPreviewWebExperiment(parseInt(md), Wd, dd)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(dd, Od, md) {
            if (this._config.disable_web_experiments && !md) return dd([]);
            const Wd = this._instance.get_property("$web_experiments");
            if (Wd && !Od) return dd(Wd);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: Od => dd(200 === Od.statusCode && Od.json && Od.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(Od, md, Wd) {
            const Fd = Wd.filter((dd => dd.id === Od));
            Fd && Fd.length > 0 && (dd._logInfo(`Previewing web experiment [${Fd[0].name}] with variant [${md}]`), this._applyTransforms(Fd[0].name, md, Fd[0].variants[md].transforms))
          }
          static _matchesTestVariant(Od, md) {
            return !sm(Od.conditions) && dd._matchUrlConditions(Od, md) && dd._matchUTMConditions(Od)
          }
          static _matchUrlConditions(Od, md) {
            var Wd;
            if (sm(Od.conditions) || sm(null === (Wd = Od.conditions) || void 0 === Wd ? void 0 : Wd.url)) return !0;
            const Fd = dd.getWindowLocation();
            if (Fd) {
              var Rd, Xd, Kd;
              const dd = BK(md, Fd.href);
              return !(null === (Rd = Od.conditions) || void 0 === Rd ? void 0 : Rd.url) || FN[null !== (Xd = null === (Kd = Od.conditions) || void 0 === Kd ? void 0 : Kd.urlMatchType) && void 0 !== Xd ? Xd : "icontains"](Od.conditions.url, dd)
            }
            return !1
          }
          static getWindowLocation() {
            return null == fO ? void 0 : fO.location
          }
          static _matchUTMConditions(dd) {
            var Od;
            if (sm(dd.conditions) || sm(null === (Od = dd.conditions) || void 0 === Od ? void 0 : Od.utm)) return !0;
            const md = Ch();
            if (md.utm_source) {
              var Wd, Fd, Rd, Xd, Kd, hd, vd, Qd;
              const Od = !(null === (Wd = dd.conditions) || void 0 === Wd || null === (Wd = Wd.utm) || void 0 === Wd ? void 0 : Wd.utm_campaign) || (null === (Fd = dd.conditions) || void 0 === Fd || null === (Fd = Fd.utm) || void 0 === Fd ? void 0 : Fd.utm_campaign) == md.utm_campaign,
                td = !(null === (Rd = dd.conditions) || void 0 === Rd || null === (Rd = Rd.utm) || void 0 === Rd ? void 0 : Rd.utm_source) || (null === (Xd = dd.conditions) || void 0 === Xd || null === (Xd = Xd.utm) || void 0 === Xd ? void 0 : Xd.utm_source) == md.utm_source,
                od = !(null === (Kd = dd.conditions) || void 0 === Kd || null === (Kd = Kd.utm) || void 0 === Kd ? void 0 : Kd.utm_medium) || (null === (hd = dd.conditions) || void 0 === hd || null === (hd = hd.utm) || void 0 === hd ? void 0 : hd.utm_medium) == md.utm_medium,
                Nd = !(null === (vd = dd.conditions) || void 0 === vd || null === (vd = vd.utm) || void 0 === vd ? void 0 : vd.utm_term) || (null === (Qd = dd.conditions) || void 0 === Qd || null === (Qd = Qd.utm) || void 0 === Qd ? void 0 : Qd.utm_term) == md.utm_term;
              return Od && od && Nd && td
            }
            return !1
          }
          static _logInfo(dd) {
            for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
            LX.info(`[WebExperiments] ${dd}`, md)
          }
          _applyTransforms(Od, md, Wd) {
            this._is_bot() ? dd._logInfo(WN) : "control" !== md ? Wd.forEach((Wd => {
              if (Wd.selector) {
                var Fd;
                dd._logInfo(`applying transform of variant ${md} for experiment ${Od} `, Wd);
                const Rd = null === (Fd = document) || void 0 === Fd ? void 0 : Fd.querySelectorAll(Wd.selector);
                null == Rd || Rd.forEach((dd => {
                  const Od = dd;
                  Wd.html && (Od.innerHTML = Wd.html), Wd.css && Od.setAttribute("style", Wd.css)
                }))
              }
            })) : dd._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return dm && this._instance ? fQ(dm, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, VN),
      jN = {
        conversations: class {
          constructor(dd) {
            this._instance = dd, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(dd) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = dd.ok, !dd.ok) return;
            const Od = dd.config.conversations;
            sm(Od) || (im(Od) ? this._isConversationsEnabled = Od : (this._isConversationsEnabled = Od.enabled, this._remoteConfig = Od), this.loadIfEnabled())
          }
          reset() {
            var dd;
            null === (dd = this._conversationsManager) || void 0 === dd || dd.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (fX(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const dd = null == Qm ? void 0 : Qm.__PosthogExtensions__;
            if (dd && !Um(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const Od = dd.initConversations;
                  if (Od) return this._completeInitialization(Od), void(this._isInitializing = !1);
                  const md = dd.loadExternalDependency;
                  if (!md) return void this._handleLoadError(cO);
                  md(this._instance, "conversations", (Od => {
                    Od || !dd.initConversations ? this._handleLoadError("Could not load conversations script", Od) : this._completeInitialization(dd.initConversations), this._isInitializing = !1
                  }))
                } catch (dd) {
                  this._handleLoadError("Error initializing conversations", dd), this._isInitializing = !1
                }
              } else RN.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(dd) {
            if (this._remoteConfig) try {
              this._conversationsManager = dd(this._remoteConfig, this._instance), this._loadFailed = !1, RN.info("Conversations loaded successfully")
            } catch (dd) {
              this._handleLoadError("Error completing conversations initialization", dd)
            } else RN.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(dd, Od) {
            RN.error(dd, Od), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : RN.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !Sm(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : fX(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : Um(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? sm(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == Qm ? void 0 : Qm.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var dd, Od;
            return null !== (dd = null === (Od = this._conversationsManager) || void 0 === Od ? void 0 : Od.isVisible()) && void 0 !== dd && dd
          }
          sendMessage(dd, Od, md) {
            var Wd = this;
            return Im((function*() {
              return Wd._conversationsManager ? Wd._conversationsManager.sendMessage(dd, Od, md) : (RN.warn(XN), null)
            }))()
          }
          getMessages(dd, Od) {
            var md = this;
            return Im((function*() {
              return md._conversationsManager ? md._conversationsManager.getMessages(dd, Od) : (RN.warn(XN), null)
            }))()
          }
          markAsRead(dd) {
            var Od = this;
            return Im((function*() {
              return Od._conversationsManager ? Od._conversationsManager.markAsRead(dd) : (RN.warn(XN), null)
            }))()
          }
          getTickets(dd) {
            var Od = this;
            return Im((function*() {
              return Od._conversationsManager ? Od._conversationsManager.getTickets(dd) : (RN.warn(XN), null)
            }))()
          }
          requestRestoreLink(dd) {
            var Od = this;
            return Im((function*() {
              return Od._conversationsManager ? Od._conversationsManager.requestRestoreLink(dd) : (RN.warn(XN), null)
            }))()
          }
          restoreFromToken(dd) {
            var Od = this;
            return Im((function*() {
              return Od._conversationsManager ? Od._conversationsManager.restoreFromToken(dd) : (RN.warn(XN), null)
            }))()
          }
          restoreFromUrlToken() {
            var dd = this;
            return Im((function*() {
              return dd._conversationsManager ? dd._conversationsManager.restoreFromUrlToken() : (RN.warn(XN), null)
            }))()
          }
          getCurrentTicketId() {
            var dd, Od;
            return null !== (dd = null === (Od = this._conversationsManager) || void 0 === Od ? void 0 : Od.getCurrentTicketId()) && void 0 !== dd ? dd : null
          }
          getWidgetSessionId() {
            var dd, Od;
            return null !== (dd = null === (Od = this._conversationsManager) || void 0 === Od ? void 0 : Od.getWidgetSessionId()) && void 0 !== dd ? dd : null
          }
          _onIdentityChanged() {
            var dd;
            null === (dd = this._conversationsManager) || void 0 === dd || dd.setIdentity()
          }
          _onIdentityCleared() {
            var dd;
            null === (dd = this._conversationsManager) || void 0 === dd || dd.clearIdentity()
          }
        }
      },
      DN = {
        logs: class extends qN {
          constructor(dd) {
            super({
              get() {
                var Od;
                return null == dd || null === (Od = dd.config) || void 0 === Od ? void 0 : Od.logs
              },
              captureHintKey: Dd,
              get remoteConfigWillArrive() {
                var Od, md;
                return !(null === (Od = dd._shouldDisableFlags) || void 0 === Od ? void 0 : Od.call(dd)) || !!(null === (md = Qm._POSTHOG_REMOTE_CONFIG) || void 0 === md || null === (md = md[dd.config.token]) || void 0 === md ? void 0 : md.config)
              }
            }, (() => function(dd) {
              var Od;
              const md = {};
              if (md.distinctId = dd.get_distinct_id(), dd.sessionManager) {
                const {
                  sessionId: Od,
                  windowId: Wd,
                  sessionStartTimestamp: Fd,
                  lastActivityTimestamp: Rd
                } = dd.sessionManager.checkAndGetSessionAndWindowId(!0);
                md.sessionId = Od, md.windowId = Wd, sm(Fd) || (md.sessionStartTimestamp = Fd), sm(Rd) || (md.lastActivityTimestamp = Rd)
              }
              if ((null == Qm || null === (Od = Qm.location) || void 0 === Od ? void 0 : Od.href) && (md.currentUrl = dd.config.disable_capture_url_hashes ? NF(Qm.location.href) : Qm.location.href), dd.featureFlags) {
                const Od = dd.featureFlags.getFlags();
                Od && Od.length > 0 && (md.activeFeatureFlags = Od)
              }
              return md
            }(dd))), this._instance = dd, this.name = gt, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const dd = PX("[logs]"),
              Od = null == Qm ? void 0 : Qm.__PosthogExtensions__;
            if (!Od) return void dd.error("PostHog Extensions not found.");
            const md = Od.loadExternalDependency;
            if (md) return dd => {
              md(this._instance, "logs", (md => {
                const Wd = Od.logs;
                dd(md, (null == Wd ? void 0 : Wd.initializeLogs) ? {
                  initialize: dd => Wd.initializeLogs(dd),
                  replay(dd, Od) {
                    var md;
                    return null === (md = Wd.replayConsoleBuffer) || void 0 === md ? void 0 : md.call(Wd, dd, Od)
                  }
                } : void 0)
              }))
            };
            dd.error(cO)
          }
        }
      },
      eN = {
        metrics: class {
          constructor(dd) {
            this._instance = dd, this._logger = PX("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var dd;
            if (this._disposed) return;
            const Od = !!(null === (dd = this._instance.config.metrics) || void 0 === dd ? void 0 : dd.network);
            Od && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (dd => {
              let Od = !0;
              const md = () => Od ? (dd => {
                  var Od;
                  const md = null === (Od = dd.config.metrics) || void 0 === Od ? void 0 : Od.network;
                  return !0 === md ? {} : md || void 0
                })(dd) : void 0,
                Wd = wN(dd, md),
                Fd = aN(dd, md);
              return () => {
                Od = !1, Wd(), Fd()
              }
            })(this._instance) : !Od && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var dd;
            const Od = null === (dd = this._instance) || void 0 === dd || null === (dd = dd.config) || void 0 === dd ? void 0 : dd.metrics;
            var md;
            return this._core && this._resolvedFrom === Od || (null === (md = this._core) || void 0 === md || md.reset(), this._resolvedFrom = Od, this._core = new GX(this._createHost(), function(dd) {
              var Od, md, Wd, Fd, Rd;
              const Xd = null == dd ? void 0 : dd.resourceAttributes;
              return {
                serviceName: null !== (Od = null == Xd ? void 0 : Xd["service.name"]) && void 0 !== Od ? Od : null == dd ? void 0 : dd.serviceName,
                serviceVersion: null !== (md = null == Xd ? void 0 : Xd["service.version"]) && void 0 !== md ? md : null == dd ? void 0 : dd.serviceVersion,
                environment: null !== (Wd = null == Xd ? void 0 : Xd["deployment.environment"]) && void 0 !== Wd ? Wd : null == dd ? void 0 : dd.environment,
                resourceAttributes: Xd,
                beforeSend: null == dd ? void 0 : dd.beforeSend,
                flushIntervalMs: null !== (Fd = null == dd ? void 0 : dd.flushIntervalMs) && void 0 !== Fd ? Fd : 1e4,
                maxSeriesPerFlush: null !== (Rd = null == dd ? void 0 : dd.maxSeriesPerFlush) && void 0 !== Rd ? Rd : 1e3
              }
            }(Od), this._logger)), this._core
          }
          count(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              md = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(dd, Od, md)
          }
          gauge(dd, Od, md) {
            this._getCore().gauge(dd, Od, md)
          }
          histogram(dd, Od, md) {
            this._getCore().histogram(dd, Od, md)
          }
          flush(dd) {
            if (!this._core) return Promise.resolve();
            if (dd) {
              const Od = this._core.drainWindow();
              return Od && this._sendMetricsBatch(Od, dd), Promise.resolve()
            }
            return this._core.flush().catch((dd => this._logger.error("PostHog metrics flush failed:", dd)))
          }
          reset() {
            var dd;
            null === (dd = this._core) || void 0 === dd || dd.reset()
          }
          dispose() {
            var dd, Od;
            this._disposed = !0, null === (dd = this._stopNetworkMetrics) || void 0 === dd || dd.call(this), this._stopNetworkMetrics = void 0, null === (Od = this._core) || void 0 === Od || Od.reset()
          }
          _createHost() {
            const dd = this._instance,
              Od = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !dd.is_capturing()
              },
              _sendMetricsBatch: dd => Od._sendMetricsBatch(dd),
              getLibraryId: () => Rd.LIB_NAME,
              getLibraryVersion: () => Rd.LIB_VERSION
            }
          }
          _sendMetricsBatch(dd, Od) {
            return new Promise((md => {
              let Wd = !1;
              const Fd = dd => {
                  Wd || (Wd = !0, clearTimeout(Rd), md(dd))
                },
                Rd = setTimeout((() => Fd({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(gF(gF({
                method: "POST",
                url: this._metricsUrl(),
                data: dd,
                compression: "best-available",
                batchKey: "metrics"
              }, Od && {
                transport: Od
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(dd) {
                  const Od = dd.statusCode;
                  if (Od >= 200 && 300 > Od) Fd({
                    kind: "ok"
                  });
                  else if (413 === Od) Fd({
                    kind: "too-large"
                  });
                  else if (0 !== Od && 408 !== Od && 429 !== Od && 500 > Od) Fd({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${Od}`)
                  });
                  else {
                    var md;
                    Fd({
                      kind: "retry-later",
                      error: null !== (md = dd.error) && void 0 !== md ? md : new Error(`metrics request failed with status ${Od}`)
                    })
                  }
                }
              }))
            }))
          }
          _metricsUrl() {
            return this._instance.requestRouter.endpointFor("api", "/i/v1/metrics") + "?token=" + encodeURIComponent(this._instance.config.token)
          }
        }
      },
      IN = {
        webMCP: class {
          constructor(dd) {
            this._instance = dd, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const dd = null == Om ? void 0 : Om.modelContext;
            if (!dd || !am(dd.registerTool)) return;
            const Od = EN.get(dd);
            if (Od) return Od.instances.add(this._instance), void(this._isPatched = !0);
            const md = {
                instances: new Set([this._instance])
              },
              Wd = dd.registerTool,
              Fd = this;
            Xo(dd, "registerTool", (dd => {
              const Od = dd;
              return function(dd) {
                let Wd = dd;
                for (var Rd = arguments.length, Xd = new Array(Rd > 1 ? Rd - 1 : 0), Kd = 1; Kd < Rd; Kd++) Xd[Kd - 1] = arguments[Kd];
                try {
                  Wd = Fd._wrapTool(dd, md)
                } catch (md) {
                  return Od.call(this, dd, ...Xd)
                }
                return Od.call(this, Wd, ...Xd)
              }
            })), dd.registerTool !== Wd && (EN.set(dd, md), this._isPatched = !0)
          }
          _wrapTool(dd, Od) {
            if (!dd || !am(dd.execute)) return dd;
            const md = dd.execute,
              Wd = this,
              {
                tool: Fd,
                injected: Rd
              } = function(dd, Od) {
                const md = {
                    intent: !1,
                    model: !1
                  },
                  Wd = dd.inputSchema;
                if (! function(dd) {
                    return !!Um(dd) || Em(dd) && Object.keys(dd).every((dd => JN.has(dd) || dd.startsWith("x-"))) && !0 !== dd.additionalProperties && !Em(dd.additionalProperties) && (!dd.type || "object" === dd.type) && (!dd.properties || Em(dd.properties)) && (!dd.required || wm(dd.required))
                  }(Wd)) return {
                  tool: SN(dd),
                  injected: md
                };
                const Fd = (null == Wd ? void 0 : Wd.properties) || {},
                  Rd = dd => BN(Fd, dd) || wm(null == Wd ? void 0 : Wd.required) && Wd.required.includes(dd);
                if (md.intent = Od.intent && !Rd("context"), md.model = Od.model && !Rd("llm_model"), !md.intent && !md.model) return {
                  tool: SN(dd),
                  injected: md
                };
                const Xd = gF({}, Fd),
                  Kd = wm(null == Wd ? void 0 : Wd.required) ? [...Wd.required] : [];
                return md.intent && (Xd.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, Kd.includes("context") || Kd.push("context")), md.model && (Xd.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, Kd.includes("llm_model") || Kd.push("llm_model")), {
                  tool: SN(dd, gF(gF({}, Wd), {}, {
                    type: (null == Wd ? void 0 : Wd.type) || "object",
                    properties: Xd,
                    required: Kd
                  })),
                  injected: md
                }
              }(dd, function(dd) {
                const Od = {
                  intent: !1,
                  model: !1
                };
                for (const md of dd.instances) {
                  const dd = xN(md.config.capture_webmcp);
                  Od.intent || (Od.intent = !0 === (null == dd ? void 0 : dd.intent)), Od.model || (Od.model = !0 === (null == dd ? void 0 : dd.model))
                }
                return Od
              }(Od));
            return Object.defineProperty(Fd, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var Xd = arguments.length, Kd = new Array(Xd), hd = 0; hd < Xd; hd++) Kd[hd] = arguments[hd];
                const vd = new Date,
                  Qd = function(dd, Od) {
                    if (!Em(dd)) return {};
                    try {
                      const md = Od.intent ? sN(dd.context, 2048, !0) : void 0,
                        Wd = Od.model ? sN(dd.llm_model, 256) : void 0;
                      return gF(gF({}, md && "{}" !== md ? {
                        intent: md
                      } : {}), Wd && "unknown" !== Wd.toLowerCase() ? {
                        model: Wd
                      } : {})
                    } catch (dd) {
                      return {}
                    }
                  }(Kd[0], Rd),
                  td = function(dd, Od) {
                    const md = dd[0];
                    if (!Em(md)) return dd;
                    try {
                      const Wd = Od.intent && BN(md, "context"),
                        Fd = Od.model && BN(md, "llm_model");
                      if (!Wd && !Fd) return dd;
                      const Rd = gF({}, md);
                      return Wd && delete Rd.context, Fd && delete Rd.llm_model, [Rd, ...dd.slice(1)]
                    } catch (Od) {
                      return dd
                    }
                  }(Kd, Rd);
                let od;
                try {
                  od = md.apply(this === Fd ? dd : this, td)
                } catch (dd) {
                  throw Wd._captureToolCall(Od, Fd, vd, !0, Qd), dd
                }
                return (Nd = od) && "function" == typeof Nd.then ? Promise.resolve(od).then((dd => (Wd._captureToolCall(Od, Fd, vd, uN(dd), Qd), dd)), (dd => {
                  throw Wd._captureToolCall(Od, Fd, vd, !0, Qd), dd
                })) : (Wd._captureToolCall(Od, Fd, vd, uN(od), Qd), od);
                var Nd
              }
            }), Fd
          }
          _captureToolCall(dd, Od, md, Wd, Fd) {
            const Rd = Date.now() - md.getTime();
            for (const Xd of dd.instances) {
              const Kd = xN(Xd.config.capture_webmcp);
              if (Kd) try {
                Xd.capture("$mcp_tool_call", gF(gF({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: Od.name,
                  $mcp_resource_name: Od.name,
                  $mcp_tool_description: Od.description,
                  $mcp_server_name: null == mm ? void 0 : mm.hostname,
                  $mcp_duration_ms: Rd,
                  $mcp_is_error: Wd
                }, Kd.intent && Fd.intent ? {
                  $mcp_intent: Fd.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), Kd.model && Fd.model ? {
                  $mcp_llm_model: Fd.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: md
                })
              } catch (dd) {
                continue
              }
            }
          }
        }
      };
    lt.__defaultExtensionClasses = gF({}, gF(gF(gF(gF(gF(gF(gF(gF(gF(gF(gF(gF(gF(gF({}, VN), iN), AN), rN), GN), nN), PN), LN), zN), cN), jN), DN), eN), IN));
    const lN = function() {
      Rd.SDK_DIST_CHANNEL = "npm";
      const dd = Ut[zt] = new lt;
      return function() {
        function dd() {
          dd.done || (dd.done = !0, LQ = !1, cX(Ut, (function(dd) {
            dd._dom_loaded()
          })))
        }(null == Om ? void 0 : Om.addEventListener) ? "complete" === Om.readyState ? dd() : kX(Om, "DOMContentLoaded", dd, {
          capture: !1
        }): fO && LX.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), dd
    }()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);