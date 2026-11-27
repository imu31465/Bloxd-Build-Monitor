export const id = 284;
export const ids = [284];
export const modules = {
  41464: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => zE,
      f: () => FN
    });
    const Zr = "0.9.4",
      Wr = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: Zr
      };
    var ar = Wr;
    const jr = "$early_access_features",
      Ir = "$active_feature_flags",
      fr = "$feature_flag_details",
      Er = "$feature_flag_errors",
      pr = "$feature_flag_evaluated_at",
      xr = "$feature_flag_request_id",
      mr = "$minimal_flag_called_events",
      Nr = "$enabled_feature_flags",
      Ur = "$stored_group_properties",
      tr = "$stored_person_properties",
      hr = "$flag_call_reported",
      zr = "$flag_call_reported_session_id",
      Yr = "$feature_flag_payloads",
      nr = "$override_feature_flags",
      er = "$override_feature_flag_payloads",
      Kr = "visibilitychange",
      yr = "$people_distinct_id",
      Br = "distinct_id",
      Tr = "$device_id",
      vr = "$device_model",
      Or = "__alias",
      Lr = "__cmpns",
      lr = "$fbc",
      Xr = "$fbc_persistence",
      Pr = "$fbp",
      Hr = "$fbp_persistence",
      qr = "__timers",
      Rr = "$autocapture_disabled_server_side",
      gr = "$heatmaps_enabled_server_side",
      Cr = "$exception_capture_enabled_server_side",
      Mr = "$error_tracking_suppression_rules",
      Gr = "$error_tracking_capture_extension_exceptions",
      kr = "$web_vitals_enabled_server_side",
      Ar = "$dead_clicks_enabled_server_side",
      Vr = "$product_tours_enabled_server_side",
      ir = "$logs_capture_enabled_server_side",
      wr = "$web_vitals_allowed_metrics",
      cr = "$session_recording_remote_config",
      Fr = "$session_recording_enabled_server_side",
      or = "$replay_sample_rate",
      br = "$replay_override_sampling",
      Jr = "$replay_override_linked_flag",
      Dr = "$replay_override_url_trigger",
      dr = "$replay_override_event_trigger",
      sr = "$sesid",
      ur = "$session_is_sampled",
      rS = "$session_past_minimum_duration",
      SS = "$session_recording_url_trigger_activated_session",
      QS = "$session_recording_event_trigger_activated_session",
      ZS = "$debug_first_full_snapshot_timestamp",
      WS = "$sess_rec_flush_size",
      aS = "$groups",
      jS = "$surveys",
      IS = "$surveys_loaded_at",
      fS = "$surveys_activated",
      ES = "$surveys_activated_session",
      pS = "$surveys_activated_timestamps",
      xS = "ph_product_tours",
      mS = "$product_tours_activated",
      NS = "$product_tours_activated_session",
      US = "$conversations_widget_session_id",
      tS = "$conversations_ticket_id",
      hS = "$conversations_widget_state",
      zS = "$conversations_user_traits",
      YS = "$user_state",
      nS = "$client_session_props",
      eS = "$capture_rate_limit",
      KS = "$initial_campaign_params",
      yS = "$initial_referrer_info",
      BS = "$initial_person_info",
      TS = "$epp",
      vS = "$posthog_cookieless",
      OS = "$cookieless_mode",
      LS = "$sdk_debug_extensions_init_method",
      lS = "$sdk_debug_extensions_init_time_ms",
      XS = "$sdk_debug_recording_script_not_loaded",
      PS = "$sdk_debug_replay_stale_config",
      HS = "$sdk_debug_replay_event_trigger_status",
      qS = "$sdk_debug_replay_linked_flag_trigger_status",
      RS = "$sdk_debug_replay_matched_recording_trigger_groups",
      gS = "$sdk_debug_replay_pending_trigger_conditions",
      CS = "$sdk_debug_replay_remote_trigger_matching_config",
      MS = "$sdk_debug_replay_trigger_groups_count",
      GS = "$sdk_debug_replay_url_trigger_status",
      kS = "$session_recording_start_reason",
      AS = "PostHog loadExternalDependency extension not found.",
      VS = "anonymous",
      iS = "identified",
      wS = "identified_only",
      cS = "beforeunload",
      FS = "$pageview",
      oS = "$pageleave",
      bS = "$identify",
      JS = "$groupidentify",
      DS = "u" > typeof window ? window : void 0,
      dS = "u" > typeof globalThis ? globalThis : DS,
      sS = null == dS ? void 0 : dS.navigator,
      uS = null == dS ? void 0 : dS.document,
      rQ = null == dS ? void 0 : dS.location,
      SQ = null == dS ? void 0 : dS.fetch,
      QQ = (null == dS ? void 0 : dS.XMLHttpRequest) && "withCredentials" in new dS.XMLHttpRequest ? dS.XMLHttpRequest : void 0,
      ZQ = null == dS ? void 0 : dS.AbortController,
      WQ = null == dS ? void 0 : dS.CompressionStream,
      aQ = null == sS ? void 0 : sS.userAgent,
      jQ = "undefined" != typeof globalThis ? globalThis : DS;
    jQ && "undefined" == typeof self && (jQ.self = jQ), jQ && "undefined" == typeof File && (jQ.File = function() {});
    const IQ = null != DS ? DS : {};
    var fQ = function(rr) {
        return rr.AnonymousId = "anonymous_id", rr.DistinctId = "distinct_id", rr.Props = "props", rr.EnablePersonProcessing = "enable_person_processing", rr.PersonMode = "person_mode", rr.FeatureFlagDetails = "feature_flag_details", rr.FeatureFlags = "feature_flags", rr.FeatureFlagPayloads = "feature_flag_payloads", rr.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", rr.BootstrapFeatureFlags = "bootstrap_feature_flags", rr.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", rr.OverrideFeatureFlags = "override_feature_flags", rr.Queue = "queue", rr.AiQueue = "ai_queue", rr.AiCaptureQueue = "ai_capture_queue", rr.LogsQueue = "logs_queue", rr.OptedOut = "opted_out", rr.SessionId = "session_id", rr.SessionStartTimestamp = "session_start_timestamp", rr.SessionLastTimestamp = "session_timestamp", rr.PersonProperties = "person_properties", rr.GroupProperties = "group_properties", rr.InstalledAppBuild = "installed_app_build", rr.InstalledAppVersion = "installed_app_version", rr.SessionReplay = "session_replay", rr.PushRegistered = "push_registered", rr.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", rr.SurveyLastSeenDate = "survey_last_seen_date", rr.SurveysInProgress = "surveys_in_progress", rr.SurveysSeen = "surveys_seen", rr.Surveys = "surveys", rr.RemoteConfig = "remote_config", rr.FlagsEndpointWasHit = "flags_endpoint_was_hit", rr.DeviceId = "device_id", rr
      }({}),
      EQ = function(rr) {
        return rr.GZipJS = "gzip-js", rr.Base64 = "base64", rr
      }({});
    const pQ = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      xQ = ["token"];

    function mQ(rr, Sr) {
      return -1 !== rr.indexOf(Sr)
    }
    const NQ = function(rr) {
        return rr.trim()
      },
      UQ = function(rr) {
        return rr.replace(/^\$/, "")
      };

    function tQ(rr) {
      var Sr;
      const Qr = [];
      return null !== (Sr = JSON.stringify(rr, (function(rr, Sr) {
        if ("bigint" == typeof Sr) return Sr.toString();
        if ("function" != typeof Sr && "symbol" != typeof Sr) {
          if (Sr instanceof Error) return {
            name: Sr.name,
            message: Sr.message,
            stack: Sr.stack
          };
          if (Sr && "object" == typeof Sr) {
            for (; Qr.length > 0 && Qr[Qr.length - 1] !== this;) Qr.pop();
            if (Qr.includes(Sr)) return "[Circular]";
            Qr.push(Sr)
          }
          return Sr
        }
      }))) && void 0 !== Sr ? Sr : "null"
    }
    const hQ = Object.prototype,
      zQ = hQ.hasOwnProperty,
      YQ = hQ.toString,
      nQ = Array.isArray || function(rr) {
        return "[object Array]" === YQ.call(rr)
      },
      eQ = rr => "function" == typeof rr,
      KQ = rr => rr === Object(rr) && !nQ(rr),
      yQ = rr => {
        if (KQ(rr)) {
          for (const Sr in rr)
            if (zQ.call(rr, Sr)) return !1;
          return !0
        }
        return !1
      },
      BQ = rr => void 0 === rr,
      TQ = rr => "[object String]" == YQ.call(rr),
      vQ = rr => TQ(rr) && 0 === rr.trim().length,
      OQ = rr => null === rr,
      LQ = rr => BQ(rr) || OQ(rr),
      lQ = rr => "[object Number]" == YQ.call(rr) && rr == rr,
      XQ = rr => lQ(rr) && rr > 0,
      PQ = rr => "[object Boolean]" === YQ.call(rr),
      HQ = rr => mQ(pQ, rr),
      qQ = rr => mQ(xQ, rr);

    function RQ(rr) {
      return null === rr || "object" != typeof rr
    }

    function gQ(rr, Sr) {
      return {}.toString.call(rr) === `[object ${Sr}]`
    }

    function CQ(rr) {
      switch ({}.toString.call(rr)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return GQ(rr, Error)
      }
    }

    function MQ(rr) {
      return "u" > typeof Event && GQ(rr, Event)
    }

    function GQ(rr, Sr) {
      try {
        return rr instanceof Sr
      } catch (rr) {
        return !1
      }
    }
    const kQ = [!0, "true", 1, "1", "yes"],
      AQ = rr => mQ(kQ, rr),
      VQ = [!1, "false", 0, "0", "no"];

    function iQ(rr, Sr, Qr, Zr, Wr, ar, jr) {
      try {
        var Ir = rr[ar](jr),
          fr = Ir.value
      } catch (rr) {
        return void Qr(rr)
      }
      Ir.done ? Sr(fr) : Promise.resolve(fr).then(Zr, Wr)
    }

    function wQ(rr) {
      return function() {
        var Sr = this,
          Qr = arguments;
        return new Promise((function(Zr, Wr) {
          var ar = rr.apply(Sr, Qr);

          function jr(rr) {
            iQ(ar, Zr, Wr, jr, Ir, "next", rr)
          }

          function Ir(rr) {
            iQ(ar, Zr, Wr, jr, Ir, "throw", rr)
          }
          jr(void 0)
        }))
      }
    }
    const cQ = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      FQ = new Map,
      oQ = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!rr) return !1;
        const Qr = function(rr, Sr) {
            let Qr = "";
            for (let Zr = 0; Sr.length > Zr; Zr++) {
              const rr = Sr[Zr];
              Qr += rr.length + ":" + rr
            }
            return rr.length + ":" + rr + "|" + Sr.length + ":" + Qr
          }(rr, Sr),
          Zr = FQ.get(Qr);
        if (void 0 !== Zr) return Zr;
        const Wr = rr.toLowerCase(),
          ar = cQ.concat(Sr).some((rr => -1 !== Wr.indexOf(rr.toLowerCase())));
        return 256 > FQ.size || FQ.clear(), FQ.set(Qr, ar), ar
      };

    function bQ(rr, Sr, Qr, Zr, Wr) {
      return Sr > Qr && (Zr.warn("min cannot be greater than max."), Sr = Qr), lQ(rr) ? rr > Qr ? (Zr.warn(" cannot be  greater than max: " + Qr + ". Using max value instead."), Qr) : Sr > rr ? (Zr.warn(" cannot be less than min: " + Sr + ". Using min value instead."), Sr) : rr : (Zr.warn(" must be a number. using max or fallback. max: " + Qr + ", fallback: " + Wr), bQ(null != Wr ? Wr : Qr, Sr, Qr, Zr))
    }
    var JQ = class {
      constructor(rr) {
        this._buckets = {}, this._onBucketRateLimited = rr._onBucketRateLimited, this._bucketSize = bQ(rr.bucketSize, 0, 100, rr._logger), this._refillRate = bQ(rr.refillRate, 0, this._bucketSize, rr._logger), this._refillInterval = bQ(rr.refillInterval, 0, 864e5, rr._logger)
      }
      _applyRefill(rr, Sr) {
        const Qr = Math.floor((Sr - rr.lastAccess) / this._refillInterval);
        Qr > 0 && (rr.tokens = Math.min(rr.tokens + Qr * this._refillRate, this._bucketSize), rr.lastAccess = rr.lastAccess + Qr * this._refillInterval)
      }
      consumeRateLimit(rr) {
        var Sr;
        const Qr = Date.now(),
          Zr = String(rr);
        let Wr = this._buckets[Zr];
        return Wr ? this._applyRefill(Wr, Qr) : (Wr = {
          tokens: this._bucketSize,
          lastAccess: Qr
        }, this._buckets[Zr] = Wr), 0 === Wr.tokens || (Wr.tokens--, 0 === Wr.tokens && (null === (Sr = this._onBucketRateLimited) || void 0 === Sr || Sr.call(this, rr)), 0 === Wr.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const DQ = "Mobile",
      dQ = "Android",
      sQ = "Tablet",
      uQ = "Android Tablet",
      rZ = "iPad",
      SZ = "Apple Watch",
      QZ = "Safari",
      ZZ = "BlackBerry",
      WZ = "Samsung Internet",
      aZ = "Chrome",
      jZ = "Chrome iOS",
      IZ = "Internet Explorer",
      fZ = "Internet Explorer Mobile",
      EZ = "Opera",
      pZ = "Microsoft Edge",
      xZ = "Firefox",
      mZ = "Firefox iOS",
      NZ = "Nintendo",
      UZ = "PlayStation",
      tZ = "Xbox",
      hZ = "Android Mobile",
      zZ = "Mobile Safari",
      YZ = "Windows",
      nZ = "Windows Phone",
      eZ = "Nokia",
      KZ = "Ouya",
      yZ = "Generic " + DQ.toLowerCase(),
      BZ = "Generic " + sQ.toLowerCase(),
      TZ = "Konqueror",
      vZ = "Oculus Browser",
      OZ = "Vivaldi",
      LZ = "Yandex",
      lZ = "Whale",
      XZ = "DuckDuckGo",
      PZ = "Pale Moon",
      HZ = "Waterfox",
      qZ = "Brave",
      RZ = "Claude",
      gZ = "Codex",
      CZ = "ChatGPT",
      MZ = "Google Search App",
      GZ = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      kZ = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      AZ = new RegExp(tZ, "i"),
      VZ = new RegExp("PlayStation \\w+", "i"),
      iZ = new RegExp("Nintendo \\w+", "i"),
      wZ = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      cZ = {
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
      FZ = function(rr, Sr, Qr, Zr) {
        Sr = Sr || "";
        const Wr = function(rr) {
          return (null == rr ? void 0 : rr.brave) ? qZ : null
        }(Qr);
        return Wr || ((null == Zr ? void 0 : Zr.detectGoogleSearchApp) && mQ(rr, "GSA/") ? MZ : mQ(rr, " OPR/") && mQ(rr, "Mini") ? "Opera Mini" : mQ(rr, " OPR/") ? EZ : wZ.test(rr) ? ZZ : mQ(rr, "IEMobile") || mQ(rr, "WPDesktop") ? fZ : mQ(rr, "OculusBrowser") ? vZ : mQ(rr, "SamsungBrowser") ? WZ : mQ(rr, "Edge") || mQ(rr, "Edg/") ? pZ : mQ(rr, "Vivaldi/") ? OZ : mQ(rr, "YaBrowser/") ? LZ : mQ(rr, "Whale/") ? lZ : mQ(rr, "DuckDuckGo/") || mQ(rr, "Ddg/") ? XZ : mQ(rr, "Claude/") ? RZ : mQ(rr, "Codex/") ? gZ : mQ(rr, "ChatGPT/") ? CZ : mQ(rr, "FBIOS") ? "Facebook Mobile" : mQ(rr, "UCWEB") || mQ(rr, "UCBrowser") ? "UC Browser" : mQ(rr, "CriOS") ? jZ : mQ(rr, "CrMo") || mQ(rr, aZ) ? aZ : mQ(rr, dQ) && mQ(rr, QZ) ? hZ : mQ(rr, "FxiOS") ? mZ : mQ(rr.toLowerCase(), TZ.toLowerCase()) ? TZ : mQ(rr, "Brave/") ? qZ : ((rr, Sr) => Sr && mQ(Sr, "Apple") || function(rr) {
          return mQ(rr, QZ) && !mQ(rr, aZ) && !mQ(rr, dQ)
        }(rr))(rr, Sr) ? mQ(rr, DQ) ? zZ : QZ : mQ(rr, "PaleMoon/") ? PZ : mQ(rr, "Waterfox/") ? HZ : mQ(rr, xZ) ? xZ : mQ(rr, "MSIE") || mQ(rr, "Trident/") ? IZ : mQ(rr, "Gecko") ? xZ : "")
      },
      oZ = {
        [fZ]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [pZ]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [aZ]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [jZ]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [QZ]: [GZ],
        [zZ]: [GZ],
        [EZ]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [xZ]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [mZ]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [TZ]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [ZZ]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), GZ],
        [hZ]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [WZ]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [vZ]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [OZ]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [LZ]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [lZ]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [qZ]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [RZ]: [kZ],
        [gZ]: [kZ],
        [CZ]: [kZ],
        [XZ]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [PZ]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [HZ]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [MZ]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [IZ]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      bZ = function(rr, Sr, Qr, Zr) {
        const Wr = FZ(rr, Sr, Qr, Zr),
          ar = oZ[Wr];
        if (BQ(ar)) return null;
        for (let jr = 0; ar.length > jr; jr++) {
          const Sr = rr.match(ar[jr]);
          if (Sr) return parseFloat(Sr[Sr.length - 2])
        }
        return null
      },
      JZ = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), rr => [tZ, rr && rr[1] || ""]],
        [new RegExp(NZ, "i"), [NZ, ""]],
        [new RegExp(UZ, "i"), [UZ, ""]],
        [wZ, [ZZ, ""]],
        [new RegExp(YZ, "i"), (rr, Sr) => {
          if (/Phone/.test(Sr) || /WPDesktop/.test(Sr)) return [nZ, ""];
          if (new RegExp(DQ).test(Sr) && !/IEMobile\b/.test(Sr)) return ["Windows Mobile", ""];
          const Qr = /Windows NT ([0-9.]+)/i.exec(Sr);
          if (Qr && Qr[1]) {
            let rr = cZ[Qr[1]] || "";
            return /arm/i.test(Sr) && (rr = "RT"), [YZ, rr]
          }
          return [YZ, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, rr => rr && rr[3] ? ["iOS", [rr[3], rr[4], rr[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, rr => {
          let Sr = "";
          return rr && rr.length >= 3 && (Sr = BQ(rr[2]) ? rr[3] : rr[2]), ["watchOS", Sr]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), rr => rr && rr[2] ? [dQ, [rr[2], rr[3], rr[4] || "0"].join(".")] : [dQ, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, rr => {
          const Sr = ["Mac OS X", ""];
          return rr && rr[1] && (Sr[1] = [rr[1], rr[2], rr[3] || "0"].join(".")), Sr
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      DZ = function(rr) {
        for (let Sr = 0; JZ.length > Sr; Sr++) {
          const [Qr, Zr] = JZ[Sr], Wr = Qr.exec(rr), ar = Wr && (eQ(Zr) ? Zr(Wr, rr) : Zr);
          if (ar) return ar
        }
        return ["", ""]
      },
      dZ = function(rr) {
        return iZ.test(rr) ? NZ : VZ.test(rr) ? UZ : AZ.test(rr) ? tZ : new RegExp(KZ, "i").test(rr) ? KZ : new RegExp("(Windows Phone|WPDesktop)", "i").test(rr) ? nZ : /iPad/.test(rr) ? rZ : /iPod/.test(rr) ? "iPod Touch" : /iPhone/.test(rr) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(rr) ? SZ : wZ.test(rr) ? ZZ : /(kobo)\s(ereader|touch)/i.test(rr) ? "Kobo" : new RegExp(eZ, "i").test(rr) ? eZ : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(rr) || /(kf[a-z]+)( bui|\)).+silk\//i.test(rr) ? "Kindle Fire" : /(Android|ZTE)/i.test(rr) ? new RegExp(DQ).test(rr) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(rr) || /pixel[\daxl ]{1,6}/i.test(rr) && !/pixel c/i.test(rr) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(rr) || /lmy47v/i.test(rr) && !/QTAQZ3/i.test(rr) ? dQ : uQ : new RegExp("(pda|Mobile)", "i").test(rr) ? yZ : new RegExp(sQ, "i").test(rr) && !new RegExp("Tablet pc", "i").test(rr) ? BZ : ""
      },
      sZ = function(rr, Sr) {
        var Qr;
        const Zr = dZ(rr);
        return Zr === rZ || Zr === uQ || "Kobo" === Zr || "Kindle Fire" === Zr || Zr === BZ ? sQ : Zr === NZ || Zr === tZ || Zr === UZ || Zr === KZ ? "Console" : Zr === SZ ? "Wearable" : Zr ? DQ : "Android" === (null == Sr ? void 0 : Sr.userAgentDataPlatform) && (null !== (Qr = null == Sr ? void 0 : Sr.maxTouchPoints) && void 0 !== Qr ? Qr : 0) > 0 ? 600 > Math.min(null !== (Wr = null == Sr ? void 0 : Sr.screenWidth) && void 0 !== Wr ? Wr : 0, null !== (ar = null == Sr ? void 0 : Sr.screenHeight) && void 0 !== ar ? ar : 0) / (null !== (jr = null == Sr ? void 0 : Sr.devicePixelRatio) && void 0 !== jr ? jr : 1) ? DQ : sQ : "Desktop";
        var Wr, ar, jr
      },
      uZ = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      rW = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", uZ],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", uZ],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", uZ],
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
      SW = "[Truncated]",
      QW = "[Unserializable]";

    function ZW(rr) {
      let Sr = "";
      for (let Qr = 0; rr.length > Qr; Qr++) {
        const Zr = rr.charCodeAt(Qr);
        if (55296 > Zr || Zr > 56319) Sr += 56320 > Zr || Zr > 57343 ? rr[Qr] : "\ufffd";
        else {
          const Zr = rr.charCodeAt(Qr + 1);
          56320 > Zr || Zr > 57343 ? Sr += "\ufffd" : (Sr += rr[Qr] + rr[Qr + 1], Qr++)
        }
      }
      return Sr
    }

    function WW(rr, Sr) {
      if (!Sr) return rr;
      let Qr = [];
      try {
        Qr = Object.keys(Sr)
      } catch (rr) {
        Qr = []
      }
      for (const Zr of Qr) {
        let Qr;
        try {
          Qr = Sr[Zr]
        } catch (rr) {
          Qr = QW
        }
        Object.defineProperty(rr, Zr, {
          value: Qr,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return rr
    }
    Date, Date;
    const aW = 3e5;
    var jW = class {
      record(rr) {
        if ("too-large" === rr.kind) return;
        if ("retry-later" !== rr.kind) return void this.reset();
        if (!rr.retryAfterMs) return;
        const Sr = this.isOpen(),
          Qr = Date.now(),
          Zr = Math.min(rr.retryAfterMs, aW);
        if (!Sr) return this._installedAt = Qr, void(this._until = Qr + Zr);
        this._until = Math.max(this._until, Math.min(Qr + Zr, this._installedAt + aW))
      }
      remainingMs() {
        const rr = Date.now();
        if (this._installedAt - 5e3 > rr) return this.reset(), 0;
        const Sr = Math.min(aW, Math.max(0, this._until - rr));
        return 0 === Sr && this.reset(), Sr
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
    const IW = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function fW(rr, Sr) {
      return "string" == typeof(Qr = rr) && IW.test(Qr) ? rr : Sr();
      var Qr
    }

    function EW(rr, Sr) {
      const Qr = new Error(Sr);
      try {
        Object.defineProperty(Qr, "name", {
          value: rr,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (rr) {}
      return Qr
    }

    function pW(rr) {
      return rr ? rr.split("#")[0] : rr
    }

    function xW(rr) {
      try {
        return rr()
      } catch (rr) {
        return
      }
    }

    function mW(rr, Sr) {
      const Qr = setTimeout(rr, Sr);
      return null != Qr && Qr.unref && (null == Qr || Qr.unref()), Qr
    }

    function NW(rr, Sr, Qr) {
      return UW.apply(this, arguments)
    }

    function UW() {
      return (UW = wQ((function*(rr, Sr, Qr) {
        let Zr;
        try {
          return yield Promise.race([rr, new Promise(((rr, Wr) => {
            Zr = mW((() => {
              try {
                null == Qr || Qr(), rr()
              } catch (rr) {
                Wr(rr)
              }
            }), Sr)
          }))])
        } finally {
          clearTimeout(Zr)
        }
      }))).apply(this, arguments)
    }

    function tW(rr) {
      return tW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
        return typeof rr
      } : function(rr) {
        return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
      }, tW(rr)
    }

    function hW(rr, Sr, Qr) {
      return (Sr = function(rr) {
        var Sr = function(rr) {
          if ("object" != tW(rr) || !rr) return rr;
          var Sr = rr[Symbol.toPrimitive];
          if (void 0 !== Sr) {
            var Qr = Sr.call(rr, "string");
            if ("object" != tW(Qr)) return Qr;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(rr)
        }(rr);
        return "symbol" == tW(Sr) ? Sr : Sr + ""
      }(Sr)) in rr ? Object.defineProperty(rr, Sr, {
        value: Qr,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : rr[Sr] = Qr, rr
    }

    function zW(rr, Sr) {
      var Qr = Object.keys(rr);
      if (Object.getOwnPropertySymbols) {
        var Zr = Object.getOwnPropertySymbols(rr);
        Sr && (Zr = Zr.filter((function(Sr) {
          return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
        }))), Qr.push.apply(Qr, Zr)
      }
      return Qr
    }

    function YW(rr) {
      for (var Sr = 1; arguments.length > Sr; Sr++) {
        var Qr = null != arguments[Sr] ? arguments[Sr] : {};
        Sr % 2 ? zW(Object(Qr), !0).forEach((function(Sr) {
          hW(rr, Sr, Qr[Sr])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Qr)) : zW(Object(Qr)).forEach((function(Sr) {
          Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Qr, Sr))
        }))
      }
      return rr
    }
    let nW, eW, KW, yW;

    function BW(rr) {
      var Sr;
      const Qr = globalThis._posthogChunkIds,
        Zr = globalThis._debugIds;
      if (!Qr && !Zr) return;
      const Wr = Qr ? Object.keys(Qr) : [],
        ar = Zr ? Object.keys(Zr) : [];
      if (yW && TW(Qr, Wr, eW) && TW(Zr, ar, KW)) return yW;
      eW = Qr ? YW({}, Qr) : void 0, KW = Zr ? YW({}, Zr) : void 0, yW = {}, null !== (Sr = nW) && void 0 !== Sr || (nW = {});
      const jr = (Sr, Qr) => {
        for (const Wr of Sr) {
          const Sr = Qr[Wr];
          if (!Sr) continue;
          const ar = null == nW ? void 0 : nW[Wr];
          if (ar) {
            yW[ar] = Sr;
            continue
          }
          const jr = rr(Wr);
          for (let rr = jr.length - 1; rr >= 0; rr--) {
            var Zr;
            const Qr = null === (Zr = jr[rr]) || void 0 === Zr ? void 0 : Zr.filename;
            if (Qr) {
              yW[Qr] = Sr, nW[Wr] = Qr;
              break
            }
          }
        }
      };
      return Zr && jr(ar, Zr), Qr && jr(Wr, Qr), yW
    }

    function TW(rr, Sr, Qr) {
      return rr && Qr ? Sr.length === Object.keys(Qr).length && Sr.every((Sr => rr[Sr] === Qr[Sr])) : rr === Qr
    }
    var vW = class {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = rr, this.stackParser = Sr, this.modifiers = Qr
      }
      buildFromUnknown(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = Sr && Sr.mechanism || {
            handled: !0,
            type: "generic"
          },
          Zr = this.buildCoercingContext(Qr, Sr, 0).apply(rr),
          Wr = this.buildParsingContext(Sr),
          ar = this.parseStacktrace(Zr, Wr);
        return {
          $exception_list: this.convertToExceptionList(ar, Qr),
          $exception_level: "error"
        }
      }
      modifyFrames(rr) {
        var Sr = this;
        return wQ((function*() {
          for (const Qr of rr) Qr.stacktrace && Qr.stacktrace.frames && nQ(Qr.stacktrace.frames) && (Qr.stacktrace.frames = yield Sr.applyModifiers(Qr.stacktrace.frames));
          return rr
        }))()
      }
      coerceFallback(rr) {
        var Sr;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (Sr = rr.syntheticException) || void 0 === Sr ? void 0 : Sr.stack,
          synthetic: !0
        }
      }
      parseStacktrace(rr, Sr) {
        var Qr;
        let Zr, Wr;
        if (null != rr.cause && (Zr = this.parseStacktrace(rr.cause, Sr)), "" != rr.stack && null != rr.stack) try {
          Wr = this.applyChunkIds(this.stackParser(rr.stack, rr.synthetic ? Sr.skipFirstLines : 0), Sr.chunkIdMap)
        } catch (rr) {}
        return YW(YW({}, rr), {}, {
          cause: Zr,
          stack: Wr,
          errors: null === (Qr = rr.errors) || void 0 === Qr ? void 0 : Qr.map((rr => this.parseStacktrace(rr, Sr)))
        })
      }
      applyChunkIds(rr, Sr) {
        return rr.map((rr => (rr.filename && Sr && (rr.chunk_id = Sr[rr.filename]), rr)))
      }
      applyCoercers(rr, Sr) {
        for (const Qr of this.coercers)
          if (Qr.match(rr)) return Qr.coerce(rr, Sr);
        return this.coerceFallback(Sr)
      }
      applyModifiers(rr) {
        var Sr = this;
        return wQ((function*() {
          let Qr = rr;
          for (const rr of Sr.modifiers) Qr = yield rr(Qr);
          return Qr
        }))()
      }
      convertToExceptionList(rr, Sr) {
        const Qr = [],
          Zr = (rr, Wr, ar) => {
            var jr;
            const Ir = Qr.length,
              fr = void 0 === Wr ? YW(YW({
                type: "string" == typeof Sr.type && Sr.type.length > 0 ? Sr.type : "generic"
              }, "boolean" == typeof Sr.handled ? {
                handled: Sr.handled
              } : void 0 === Sr.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof Sr.synthetic ? Sr.synthetic : rr.synthetic,
                exception_id: Ir
              }) : {
                type: "chained",
                source: ar,
                synthetic: rr.synthetic,
                exception_id: Ir,
                parent_id: Wr
              },
              Er = {
                type: rr.type,
                value: rr.value,
                mechanism: fr
              };
            rr.stack && (Er.stacktrace = {
              type: "raw",
              frames: rr.stack
            }), Qr.push(Er), rr.cause && Zr(rr.cause, Ir, "cause");
            for (const Sr of null !== (jr = rr.errors) && void 0 !== jr ? jr : []) Zr(Sr, Ir, "member")
          };
        return Zr(rr), Qr
      }
      buildParsingContext(rr) {
        var Sr;
        return {
          chunkIdMap: BW(this.stackParser),
          skipFirstLines: null !== (Sr = rr.skipFirstLines) && void 0 !== Sr ? Sr : 1
        }
      }
      getAggregateErrors(rr) {
        try {
          if (CQ(rr)) {
            let Qr = Object.getPrototypeOf(rr);
            for (let Zr = 0; Qr && 100 > Zr; Zr++) {
              var Sr;
              const Zr = null === (Sr = Object.getOwnPropertyDescriptor(Qr, "constructor")) || void 0 === Sr ? void 0 : Sr.value;
              if ("function" == typeof Zr && "AggregateError" === Zr.name) {
                const Sr = rr.errors;
                return nQ(Sr) ? Sr : void 0
              }
              Qr = Object.getPrototypeOf(Qr)
            }
          }
        } catch (rr) {}
      }
      buildCoercingContext(rr, Sr) {
        var Qr = this;
        let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wr = 0,
          ar = 0,
          jr = !1;
        const Ir = new Set,
          fr = [],
          Er = {},
          pr = function(rr, Sr) {
            let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const pr = xr(Sr, Zr),
              mr = pr.apply;
            if (pr.apply = Sr => {
                fr.push(rr);
                try {
                  return mr(Sr)
                } finally {
                  fr.pop()
                }
              }, Zr > 4 || Zr > 0 && -1 !== fr.indexOf(rr)) return Qr.coerceFallback(pr);
            const Nr = "object" == typeof rr && null !== rr || "function" == typeof rr;
            if (0 === Zr && Wr >= 50 || Nr && Ir.has(rr)) return;
            Nr && Ir.add(rr), 0 === Zr && Wr++;
            const Ur = Qr.getAggregateErrors(rr);
            let tr, hr;
            jr || (jr = !!Ur);
            try {
              if (tr = Qr.applyCoercers(rr, pr), !tr) throw Er
            } catch (rr) {
              if (rr === Er) return void(0 === Zr && Wr--);
              if (!jr) throw rr;
              tr = Qr.coerceFallback(pr)
            }
            if (!Ur || Wr >= 50) return tr;
            try {
              hr = Ur.length
            } catch (rr) {
              return tr
            }
            if (!Number.isInteger(hr) || 0 > hr || hr > 4294967295) return tr;
            const zr = [];
            for (let jr = 0; 50 > Wr && 1e3 > ar && hr > jr; jr++) {
              let Zr;
              ar++;
              try {
                Zr = pr.next(Ur[jr])
              } catch (rr) {
                Wr++, Zr = Qr.coerceFallback(xr(Sr + 1))
              }
              Zr && zr.push(Zr)
            }
            return YW(YW({}, tr), {}, {
              errors: zr
            })
          },
          xr = function(Qr) {
            let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return YW(YW({}, Sr), {}, {
              syntheticException: 0 == Qr ? Sr.syntheticException : void 0,
              mechanism: 0 == Qr ? rr : {},
              apply(rr) {
                const Sr = pr(rr, Qr, Zr + 1);
                if (!Sr) throw Er;
                return Sr
              },
              next: rr => pr(rr, Qr + 1)
            })
          },
          mr = xr(Zr);
        return YW(YW({}, mr), {}, {
          apply: rr => {
            var Sr;
            return null !== (Sr = pr(rr, Zr)) && void 0 !== Sr ? Sr : this.coerceFallback(mr)
          }
        })
      }
    };
    const OW = /^([a-z][a-z0-9.+-]+):/i,
      LW = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function lW(rr) {
      if (!rr || "<anonymous>" === rr) return !1;
      const Sr = OW.exec(rr);
      return !Sr || LW.includes(Sr[1].toLowerCase())
    }

    function XW(rr, Sr, Qr, Zr, Wr) {
      const ar = {
        platform: rr,
        filename: Sr,
        function: "<anonymous>" === Qr ? "?" : Qr,
        in_app: lW(Sr)
      };
      return BQ(Zr) || (ar.lineno = Zr), BQ(Wr) || (ar.colno = Wr), ar
    }
    const PW = (rr, Sr) => {
        const Qr = -1 !== rr.indexOf("safari-extension"),
          Zr = -1 !== rr.indexOf("safari-web-extension");
        return Qr || Zr ? [-1 !== rr.indexOf("@") ? rr.split("@")[0] : "?", Qr ? `safari-extension:${Sr}` : `safari-web-extension:${Sr}`] : [rr, Sr]
      },
      HW = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      qW = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      RW = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      gW = (rr, Sr) => {
        const Qr = HW.exec(rr);
        if (Qr) {
          const [, rr, Zr, Wr] = Qr;
          return XW(Sr, rr, "?", +Zr, +Wr)
        }
        const Zr = qW.exec(rr);
        if (Zr) {
          if (Zr[2] && 0 === Zr[2].indexOf("eval")) {
            const rr = RW.exec(Zr[2]);
            rr && (Zr[2] = rr[1], Zr[3] = rr[2], Zr[4] = rr[3])
          }
          const [rr, Qr] = PW(Zr[1] || "?", Zr[2]);
          return XW(Sr, Qr, rr, Zr[3] ? +Zr[3] : void 0, Zr[4] ? +Zr[4] : void 0)
        }
      },
      CW = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      MW = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      GW = (rr, Sr) => {
        const Qr = CW.exec(rr);
        if (Qr) {
          if (Qr[3] && Qr[3].indexOf(" > eval") > -1) {
            const rr = MW.exec(Qr[3]);
            rr && (Qr[1] = Qr[1] || "eval", Qr[3] = rr[1], Qr[4] = rr[2], Qr[5] = "")
          }
          let rr = Qr[3],
            Zr = Qr[1] || "?";
          return [Zr, rr] = PW(Zr, rr), XW(Sr, rr, Zr, Qr[4] ? +Qr[4] : void 0, Qr[5] ? +Qr[5] : void 0)
        }
      },
      kW = /\(error: (.*)\)/;

    function AW(rr, Sr) {
      return rr.filename === Sr.filename && rr.function === Sr.function && rr.module === Sr.module && rr.lineno === Sr.lineno && rr.colno === Sr.colno
    }

    function VW(rr) {
      for (let Sr = 1; 10 >= Sr; Sr++) {
        const Qr = rr.length - 2 * Sr;
        if (0 > Qr) break;
        let Zr = !0;
        for (let Wr = 0; Sr > Wr; Wr++)
          if (!AW(rr[Qr + Wr], rr[Qr + Sr + Wr])) {
            Zr = !1;
            break
          } if (Zr) {
          for (let Zr = 0; Sr > Zr; Zr++) rr[Qr + Zr] = rr[Qr + Sr + Zr];
          return rr.length = Qr + Sr, {
            start: Qr,
            length: Sr
          }
        }
      }
    }

    function iW(rr, Sr) {
      const Qr = Sr.start + Sr.length,
        Zr = cW(rr, Sr);
      Zr && rr.splice(Qr + Zr === rr.length ? Qr : Sr.start, Zr)
    }

    function wW(rr, Sr) {
      let Qr = Sr.start;
      for (; Qr > 0 && AW(rr[Qr - 1], rr[Qr - 1 + Sr.length]);) Qr--;
      return Sr.start - Qr
    }

    function cW(rr, Sr) {
      const Qr = Sr.start + Sr.length;
      let Zr = Qr;
      for (; rr.length > Zr && AW(rr[Zr], rr[Zr - Sr.length]);) Zr++;
      return Zr - Qr
    }

    function FW(rr, Sr) {
      const Qr = Sr[0];
      let Zr = rr.length - (Qr ? wW(rr, Qr) : 0);
      for (const Wr of Sr) Zr -= cW(rr, Wr);
      return Zr
    }

    function oW(rr, Sr, Qr) {
      for (let Zr = 0; rr.length > Zr; Zr++) {
        const Wr = rr[(Sr + Zr) % rr.length],
          ar = rr[(Qr + Zr) % rr.length];
        if (Wr !== ar) return ar > Wr
      }
      return !1
    }
    var bW = class {
        match(rr) {
          return this.isDOMException(rr) || this.isDOMError(rr)
        }
        coerce(rr, Sr) {
          const Qr = TQ(rr.stack);
          return {
            type: this.getType(rr),
            value: this.getValue(rr),
            stack: Qr ? rr.stack : void 0,
            cause: rr.cause ? Sr.next(rr.cause) : void 0,
            synthetic: !1
          }
        }
        getType(rr) {
          return this.isDOMError(rr) ? "DOMError" : "DOMException"
        }
        getValue(rr) {
          const Sr = rr.name || (this.isDOMError(rr) ? "DOMError" : "DOMException");
          return rr.message ? `${Sr}: ${rr.message}` : Sr
        }
        isDOMException(rr) {
          return gQ(rr, "DOMException")
        }
        isDOMError(rr) {
          return gQ(rr, "DOMError")
        }
      },
      JW = class {
        match(rr) {
          return CQ(rr)
        }
        coerce(rr, Sr) {
          var Qr;
          const Zr = this.getStack(rr),
            Wr = void 0 === Zr ? null === (Qr = Sr.syntheticException) || void 0 === Qr ? void 0 : Qr.stack : void 0,
            ar = !!Wr;
          return {
            type: this.getType(rr),
            value: this.getMessage(rr, Sr),
            stack: null != Zr ? Zr : Wr,
            cause: rr.cause ? Sr.next(rr.cause) : void 0,
            synthetic: ar
          }
        }
        getType(rr) {
          return rr.name || rr.constructor.name
        }
        getMessage(rr, Sr) {
          const Qr = rr.message;
          return String(Qr.error && "string" == typeof Qr.error.message ? Qr.error.message : Qr)
        }
        getStack(rr) {
          try {
            const Sr = rr.stacktrace;
            if ("string" == typeof Sr && Sr.length > 0) return Sr;
            const Qr = rr.stack;
            return "string" == typeof Qr && Qr.length > 0 ? Qr : void 0
          } catch (rr) {
            return
          }
        }
      },
      DW = class {
        match(rr) {
          return !!gQ(rr, "ErrorEvent") && (null != rr.error || this._hasUsableMessage(rr))
        }
        coerce(rr, Sr) {
          var Qr;
          if (null != rr.error) return Sr.apply(rr.error);
          const Zr = Sr.apply(rr.message);
          return YW(YW({}, Zr), {}, {
            stack: null !== (Qr = this._buildLocationStack(rr)) && void 0 !== Qr ? Qr : Zr.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(rr) {
          return TQ(rr.message) && rr.message.length > 0
        }
        _buildLocationStack(rr) {
          var Sr, Qr;
          const Zr = rr,
            Wr = null !== (Sr = Zr.lineno) && void 0 !== Sr ? Sr : 0,
            ar = null !== (Qr = Zr.colno) && void 0 !== Qr ? Qr : 0;
          if (TQ(Zr.filename) && 0 !== Zr.filename.length && 0 !== Wr) return `Error\n    at ${Zr.filename}:${Wr}:${ar}`
        }
      };
    const dW = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var sW = class {
      match(rr) {
        return "string" == typeof rr
      }
      coerce(rr, Sr) {
        var Qr;
        const [Zr, Wr] = this.getInfos(rr);
        return {
          type: null != Zr ? Zr : "Error",
          value: null != Wr ? Wr : rr,
          stack: null === (Qr = Sr.syntheticException) || void 0 === Qr ? void 0 : Qr.stack,
          synthetic: !0
        }
      }
      getInfos(rr) {
        let Sr = "Error",
          Qr = rr;
        const Zr = rr.match(dW);
        return Zr && (Sr = Zr[1], Qr = Zr[2]), [Sr, Qr]
      }
    };
    const uW = ["fatal", "error", "warning", "log", "info", "debug"];

    function ra(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const Qr = Object.keys(rr);
      if (Qr.sort(), !Qr.length) return "[object has no keys]";
      for (let Zr = Qr.length; Zr > 0; Zr--) {
        const rr = Qr.slice(0, Zr).join(", ");
        if (Sr >= rr.length) return Zr === Qr.length ? rr : rr.length > Sr ? `${rr.slice(0,Sr)}...` : rr
      }
      return ""
    }
    var Sa = class {
        match(rr) {
          return "object" == typeof rr && null !== rr
        }
        coerce(rr, Sr) {
          var Qr, Zr;
          const Wr = this.getErrorPropertyFromObject(rr);
          return Wr ? Sr.apply(Wr) : {
            type: this.getType(rr),
            value: this.getValue(rr),
            stack: null !== (Qr = this.getStack(rr)) && void 0 !== Qr ? Qr : null === (Zr = Sr.syntheticException) || void 0 === Zr ? void 0 : Zr.stack,
            level: this.isSeverityLevel(rr.level) ? rr.level : "error",
            synthetic: !0
          }
        }
        getType(rr) {
          if (MQ(rr)) return rr.constructor.name;
          const Sr = "name" in rr ? rr.name : void 0;
          return TQ(Sr) && !vQ(Sr) ? Sr : "Error"
        }
        getValue(rr) {
          if ("name" in rr && "string" == typeof rr.name) {
            let Sr = `'${rr.name}' captured as exception`;
            return "message" in rr && "string" == typeof rr.message && (Sr += ` with message: '${rr.message}'`), Sr
          }
          if ("message" in rr && "string" == typeof rr.message) return rr.message;
          const Sr = this.getObjectClassName(rr);
          return `${Sr&&"Object"!==Sr?`'${Sr}'`:"Object"} captured as exception with keys: ${ra(rr)}`
        }
        isSeverityLevel(rr) {
          return TQ(rr) && !vQ(rr) && uW.indexOf(rr) >= 0
        }
        getStack(rr) {
          try {
            return TQ(rr.stacktrace) && rr.stacktrace.length > 0 ? rr.stacktrace : TQ(rr.stack) && rr.stack.length > 0 ? rr.stack : void 0
          } catch (rr) {
            return
          }
        }
        getErrorPropertyFromObject(rr) {
          for (const Sr in rr)
            if ({}.hasOwnProperty.call(rr, Sr)) {
              const Qr = rr[Sr];
              if (CQ(Qr)) return Qr
            }
        }
        getObjectClassName(rr) {
          try {
            const Sr = Object.getPrototypeOf(rr);
            return Sr ? Sr.constructor.name : void 0
          } catch (rr) {
            return
          }
        }
      },
      Qa = class {
        match(rr) {
          return MQ(rr)
        }
        coerce(rr, Sr) {
          var Qr;
          const Zr = rr.constructor.name;
          return {
            type: Zr,
            value: `${Zr} captured as exception with keys: ${ra(rr)}`,
            stack: null === (Qr = Sr.syntheticException) || void 0 === Qr ? void 0 : Qr.stack,
            synthetic: !0
          }
        }
      },
      Za = class {
        match(rr) {
          return RQ(rr)
        }
        coerce(rr, Sr) {
          var Qr;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(rr)}`,
            stack: null === (Qr = Sr.syntheticException) || void 0 === Qr ? void 0 : Qr.stack,
            synthetic: !0
          }
        }
      },
      Wa = class {
        match(rr) {
          return gQ(rr, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(rr)
        }
        isCustomEventWrappingRejection(rr) {
          if (!MQ(rr)) return !1;
          try {
            const Sr = rr.detail;
            return null != Sr && "object" == typeof Sr && "reason" in Sr
          } catch (rr) {
            return !1
          }
        }
        coerce(rr, Sr) {
          var Qr;
          const Zr = this.getUnhandledRejectionReason(rr);
          return RQ(Zr) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(Zr)}`,
            stack: null === (Qr = Sr.syntheticException) || void 0 === Qr ? void 0 : Qr.stack,
            synthetic: !0
          } : Sr.apply(Zr)
        }
        getUnhandledRejectionReason(rr) {
          try {
            if ("reason" in rr) return rr.reason;
            if ("detail" in rr && null != rr.detail && "object" == typeof rr.detail && "reason" in rr.detail) return rr.detail.reason
          } catch (rr) {}
          return rr
        }
      };
    const aa = "$message",
      ja = "$timestamp",
      Ia = new Set([aa, ja]),
      fa = {
        enabled: !0,
        max_bytes: 32768
      };

    function Ea(rr) {
      var Sr;
      return rr ? {
        enabled: null !== (Sr = rr.enabled) && void 0 !== Sr ? Sr : fa.enabled,
        max_bytes: xa(rr.max_bytes, fa.max_bytes)
      } : YW({}, fa)
    }
    var pa = class {
      constructor(rr) {
        this._entries = [], this._totalBytes = 0, this._config = Ea(rr)
      }
      setConfig(rr) {
        this._config = Ea(rr), this._trimToMaxBytes()
      }
      add(rr) {
        const Sr = function(rr) {
          let Sr;
          try {
            Sr = tQ(rr)
          } catch (rr) {
            return
          }
          try {
            const rr = JSON.parse(Sr);
            if (!KQ(rr)) return;
            const Qr = rr,
              Zr = Qr[aa],
              Wr = Qr[ja];
            if (!TQ(Zr) || 0 === Zr.trim().length) return;
            if (!TQ(Wr) && !lQ(Wr)) return;
            return {
              step: Qr,
              json: Sr
            }
          } catch (rr) {
            return
          }
        }(rr);
        if (!Sr) return;
        const Qr = function(rr) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(rr).length;
          const Sr = encodeURIComponent(rr);
          let Qr = 0;
          for (let Zr = 0; Sr.length > Zr; Zr++) "%" === Sr[Zr] ? (Qr += 1, Zr += 2) : Qr += 1;
          return Qr
        }(Sr.json);
        Qr > this._config.max_bytes || (this._entries.push({
          step: Sr.step,
          bytes: Qr
        }), this._totalBytes += Qr, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((rr => rr.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const rr = this._entries.shift();
          rr && (this._totalBytes -= rr.bytes)
        }
      }
    };

    function xa(rr, Sr) {
      if (!lQ(rr) || 1 / 0 === rr || -1 / 0 === rr) return Sr;
      const Qr = Math.floor(rr);
      return 0 > Qr ? Sr : Qr
    }
    const ma = rr => {
      if ("string" != typeof rr) return rr;
      try {
        return JSON.parse(rr)
      } catch (Wr) {
        return rr
      }
    };

    function Na(rr) {
      return "string" == typeof rr || rr
    }

    function Ua(rr) {
      return "string" == typeof rr ? rr : void 0
    }
    const ta = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      ha = "NativeGzipValidationError",
      za = rr => rr.length >= 2 && 31 === rr[0] && 139 === rr[1],
      Ya = (rr, Sr) => rr === EQ.GZipJS || Sr === EQ.GZipJS || "gzip" === Sr,
      na = rr => !(!rr || "object" != typeof rr) && "NotReadableError" === ("name" in rr ? String(rr.name) : "");
    let ea;
    const Ka = rr => {
        throw EW(ha, `Native gzip produced invalid output: ${rr}`)
      },
      ya = (Ba = wQ((function*(rr, Sr) {
        18 > rr.size && Ka("too-short");
        const Qr = new Uint8Array(yield rr.slice(0, 10).arrayBuffer());
        za(Qr) && 8 === Qr[2] || Ka("invalid-header");
        const Zr = new DataView(yield rr.slice(rr.size - 8).arrayBuffer());
        Zr.getUint32(0, !0) !== (rr => {
          const Sr = (() => {
            if (ea) return ea;
            ea = [];
            for (let rr = 0; 256 > rr; rr++) {
              let Sr = rr;
              for (let rr = 0; 8 > rr; rr++) Sr = 1 & Sr ? 3988292384 ^ Sr >>> 1 : Sr >>> 1;
              ea[rr] = Sr >>> 0
            }
            return ea
          })();
          let Qr = 4294967295;
          for (let Zr = 0; rr.length > Zr; Zr++) Qr = Sr[255 & (Qr ^ rr[Zr])] ^ Qr >>> 8;
          return (4294967295 ^ Qr) >>> 0
        })(Sr) && Ka("invalid-crc");
        const Wr = Sr.length >>> 0;
        Zr.getUint32(4, !0) !== Wr && Ka("invalid-size")
      })), function(rr, Sr) {
        return Ba.apply(this, arguments)
      });
    var Ba;

    function Ta() {
      return Ta = wQ((function*(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const Sr = (new TextEncoder).encode(rr),
            Qr = new globalThis.CompressionStream("gzip"),
            Wr = Qr.writable.getWriter(),
            ar = Wr.write(Sr).then((() => Wr.close())).catch((Zr = wQ((function*(rr) {
              try {
                yield Wr.abort(rr)
              } catch (rr) {}
              throw rr
            })), function(rr) {
              return Zr.apply(this, arguments)
            })),
            jr = new Response(Qr.readable).blob(),
            [Ir] = yield Promise.all([jr, ar]);
          return yield ya(Ir, Sr), Ir
        } catch (rr) {
          if (null == Qr ? void 0 : Qr.rethrow) throw rr;
          return Sr && console.error("Failed to gzip compress data", rr), null
        }
        var Zr
      })), Ta.apply(this, arguments)
    }

    function va(rr, Sr) {
      if (null == rr) return {};
      var Qr, Zr, Wr = function(rr, Sr) {
        if (null == rr) return {};
        var Qr = {};
        for (var Zr in rr)
          if ({}.hasOwnProperty.call(rr, Zr)) {
            if (Sr.includes(Zr)) continue;
            Qr[Zr] = rr[Zr]
          } return Qr
      }(rr, Sr);
      if (Object.getOwnPropertySymbols) {
        var ar = Object.getOwnPropertySymbols(rr);
        for (Zr = 0; ar.length > Zr; Zr++) Sr.includes(Qr = ar[Zr]) || {}.propertyIsEnumerable.call(rr, Qr) && (Wr[Qr] = rr[Qr])
      }
      return Wr
    }
    const Oa = "[redacted]",
      La = /^[A-Za-z0-9+/\n\r]+=*$/,
      la = /^[A-Za-z0-9_-]+={0,2}$/,
      Xa = /[-_]/,
      Pa = /^data:[^,\s]*;base64,/i,
      Ha = /^[A-Za-z0-9+/_-]+={0,2}$/,
      qa = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      Ra = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      ga = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      Ca = /[\s<>"]/,
      Ma = new RegExp(ga.source, "i"),
      Ga = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      ka = new RegExp(`^${Ga.source}`, "i"),
      Aa = new RegExp(Ga.source, "gi"),
      Va = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      ia = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      wa = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      ca = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      Fa = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      oa = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      ba = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      Ja = /\b\d(?:[ ./-]?\d){12,}\b/g,
      Da = /\d+/g,
      da = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      sa = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function ua(rr) {
      return function(rr) {
        return Ra.test(rr)
      }(rr) || Va.test(rr) || ia.test(rr)
    }

    function rj(rr) {
      return rr.split("&", 129).length > 128
    }

    function Sj(rr, Sr, Qr) {
      return ua(rr) || Sr.includes(";") && function(rr) {
        return rr.split(";").some((rr => ua(rr.split("=", 1)[0])))
      }(Sr) ? Oa : Ma.test(Sr) ? Qr ? Ij(Sr, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Oa : Sr
    }

    function Qj(rr, Sr) {
      const Qr = new URLSearchParams;
      let Zr = !1,
        Wr = !1;
      for (const [ar, jr] of new URLSearchParams(rr)) {
        const rr = fj(ar),
          Ir = fj(jr);
        Zr || (Zr = rr !== ar || Ir !== jr);
        const fr = Sj(rr, Ir, Sr);
        Zr || (Zr = fr !== Ir), Wr = ua(rr) || fr !== Ir, Qr.append(rr, fr)
      }
      return {
        changed: Zr,
        lastFieldSensitive: Wr,
        serialized: Qr.toString()
      }
    }

    function Zj(rr, Sr) {
      if (!rr.includes("=")) return {
        value: Wj(rr, Sr),
        lastFieldSensitive: !1
      };
      const Qr = Qj(rr, Sr);
      return {
        value: Qr.changed ? Qr.serialized : rr,
        lastFieldSensitive: Qr.lastFieldSensitive
      }
    }

    function Wj(rr, Sr) {
      return Sr ? Ij(rr, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Ma.test(rr) ? Oa : rr
    }

    function aj(rr, Sr, Qr) {
      return "#" === rr ? !Sr.fragment && (Sr.fragment = !0) : "?" === rr && (Sr.fragment ? "=" !== Qr && !Sr.fragmentQuery && (Sr.fragmentQuery = !0) : !Sr.query && (Sr.query = !0))
    }

    function jj(rr, Sr) {
      var Qr;
      if (rr.length > 8192 && ka.test(rr)) return Oa;
      const {
        address: Zr,
        suffix: Wr
      } = Sr.stripPunctuation ? function(rr) {
        let Sr = rr.length;
        for (; Sr > 0 && ".,;:!?)]}'".includes(rr[Sr - 1]);) Sr--;
        return {
          address: rr.slice(0, Sr),
          suffix: rr.slice(Sr)
        }
      }(rr) : {
        address: rr,
        suffix: ""
      };
      let ar;
      try {
        ar = new URL(Zr)
      } catch (rr) {
        return Oa + Wr
      }
      const jr = ar.search.slice(1),
        Ir = "" !== ar.hash,
        fr = function(rr) {
          const Sr = rr.slice(1),
            Qr = Sr.indexOf("?");
          return 0 > Qr ? {
            head: Sr,
            tail: null
          } : {
            head: Sr.slice(0, Qr),
            tail: Sr.slice(Qr + 1)
          }
        }(ar.hash);
      if (rj(jr) || rj(fr.head) || rj(null !== (Qr = fr.tail) && void 0 !== Qr ? Qr : "")) return Oa + Wr;
      let Er = !1;
      (ar.username || ar.password) && (ar.username = Oa, ar.password = "", Er = !0);
      const pr = Qj(jr, Sr.allowNestedUrls);
      pr.changed && (ar.search = pr.serialized, Er = !0);
      const xr = Zj(fr.head, Sr.allowNestedUrls),
        mr = null === fr.tail ? null : (Nr = fr.tail, xr.lastFieldSensitive ? {
          value: "" === Nr ? "" : Oa,
          lastFieldSensitive: !0
        } : Zj(Nr, Sr.allowNestedUrls));
      var Nr;
      const Ur = null === mr ? xr.value : `${xr.value}?${mr.value}`;
      Ur !== ar.hash.slice(1) && (ar.hash = Ur, Er = !0);
      const tr = Ir ? null != mr ? mr : xr : pr;
      return (Er ? fj(ar.toString()) : Zr) + (tr.lastFieldSensitive ? "" : Wr)
    }

    function Ij(rr, Sr) {
      return rr.replace(ga, (Qr => function(rr, Sr) {
        const Qr = function(rr) {
          if (!rr.includes("://")) return [];
          const Sr = [...rr.matchAll(Aa)].map((rr => rr.index)),
            Qr = [],
            Zr = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let Wr = 0,
            ar = !1,
            jr = "";
          for (let Ir = 0; rr.length > Ir && Sr.length > Wr; Ir++) {
            Sr[Wr] === Ir && (Ir > 0 && "=" !== jr && Qr.push(Ir), Wr++);
            const fr = rr[Ir];
            aj(fr, Zr, jr) ? (jr = fr, ar = !0) : ar && "=&".includes(fr) && (jr = fr)
          }
          return Qr
        }(rr);
        if (0 === Qr.length) return jj(rr, Sr);
        let Zr = "",
          Wr = 0;
        for (const ar of Qr) Zr += jj(rr.slice(Wr, ar), YW(YW({}, Sr), {}, {
          stripPunctuation: !1
        })), Wr = ar;
        return Zr + jj(rr.slice(Wr), Sr)
      }(Qr, YW(YW({}, Sr), {}, {
        stripPunctuation: Sr.stripPunctuation && Qr.length !== rr.length
      }))))
    }

    function fj(rr) {
      return rr.replace(qa, Oa)
    }

    function Ej(rr) {
      let Sr = 0,
        Qr = !1;
      for (let Zr = rr.length - 1; Zr >= 0; Zr--) {
        let Wr = rr.charCodeAt(Zr) - 48;
        if (0 > Wr || Wr > 9) return !1;
        Qr && (Wr *= 2, Wr > 9 && (Wr -= 9)), Sr += Wr, Qr = !Qr
      }
      return Sr % 10 == 0
    }

    function pj(rr) {
      const Sr = [];
      for (let ar = Da.exec(rr); null !== ar; ar = Da.exec(rr)) Sr.push({
        digits: ar[0],
        start: ar.index,
        end: ar.index + ar[0].length
      });
      let Qr = "",
        Zr = 0,
        Wr = 0;
      for (; Sr.length > Wr;) {
        let ar = "",
          jr = -1;
        for (let rr = Wr; Sr.length > rr && (ar += Sr[rr].digits, 19 >= ar.length); rr++) ar.length >= 13 && Ej(ar) && (jr = rr);
        0 > jr ? Wr++ : (Qr += rr.slice(Zr, Sr[Wr].start) + Oa, Zr = Sr[jr].end, Wr = jr + 1)
      }
      return Qr + rr.slice(Zr)
    }
    const xj = {}.propertyIsEnumerable;

    function mj(rr, Sr) {
      try {
        return tj(rr, Sr, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (rr) {
        return []
      }
    }

    function Nj(rr, Sr, Qr, Zr) {
      if (0 >= Qr.remainingNodes) return {
        stringValue: SW
      };
      if (Qr.remainingNodes--, PQ(rr)) return {
        boolValue: rr
      };
      if ("bigint" == typeof rr) return function(rr, Sr) {
        const Qr = rr.toString(),
          Zr = BigInt("9223372036854775808");
        return rr >= Zr || -Zr > rr ? (null == Sr || Sr.debug(`Attribute ${Qr} is outside the int64 range; encoding it as a string`), {
          stringValue: Qr
        }) : {
          intValue: Qr
        }
      }(rr, Sr);
      if ("number" == typeof rr) {
        if (!Number.isFinite(rr)) return {
          stringValue: String(rr)
        };
        if (Number.isInteger(rr)) {
          if (Number.isSafeInteger(rr)) return {
            intValue: String(rr)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(rr)
          };
          const Qr = BigInt(rr).toString();
          return rr >= 0x8000000000000000 || -0x8000000000000000 > rr ? (null == Sr || Sr.debug(`Attribute ${Qr} is outside the int64 range; encoding it as a string`), {
            stringValue: Qr
          }) : {
            intValue: Qr
          }
        }
        return {
          doubleValue: rr
        }
      }
      if ("string" == typeof rr) return {
        stringValue: ZW(rr)
      };
      if ("function" == typeof rr) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof rr) return {
        stringValue: String(rr)
      };
      if ("object" == typeof rr && null !== rr) {
        if (Qr.ancestors.has(rr)) return {
          stringValue: "[Circular]"
        };
        if (Zr >= 20) return {
          stringValue: SW
        };
        if (rr instanceof Date) {
          const Sr = rr.getTime(),
            Qr = Number.isFinite(Sr) ? rr.toISOString() : String(rr);
          return {
            stringValue: "string" == typeof Qr ? ZW(Qr) : String(Qr)
          }
        }
        Qr.ancestors.add(rr);
        try {
          try {
            const Wr = rr.toJSON;
            if ("function" == typeof Wr) return Nj(Wr.call(rr), Sr, Qr, Zr + 1)
          } catch (rr) {}
          return nQ(rr) ? {
            arrayValue: {
              values: Uj(rr, Sr, Qr, Zr + 1)
            }
          } : {
            kvlistValue: {
              values: tj(rr, Sr, Qr, Zr + 1)
            }
          }
        } finally {
          Qr.ancestors.delete(rr)
        }
      }
      return {
        stringValue: ZW(String(rr))
      }
    }

    function Uj(rr, Sr, Qr, Zr) {
      const Wr = [],
        ar = Math.min(rr.length, 1e3);
      let jr = 0;
      for (; ar > jr && Qr.remainingNodes > 0; jr++) try {
        const ar = jr in rr ? rr[jr] : void 0;
        if (LQ(ar)) continue;
        Wr.push(Nj(ar, Sr, Qr, Zr))
      } catch (rr) {
        Wr.push({
          stringValue: QW
        })
      }
      return rr.length > jr && Wr.push({
        stringValue: SW
      }), Wr
    }

    function tj(rr, Sr, Qr, Zr) {
      const Wr = [];
      for (const ar in rr)
        if (xj.call(rr, ar)) {
          if (!ar) {
            null == Sr || Sr.debug("Dropping an attribute with an empty key");
            continue
          }
          if (Wr.length >= 1e3 || 0 >= Qr.remainingNodes) {
            null == Sr || Sr.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const jr = rr[ar];
            if (OQ(jr) || BQ(jr)) continue;
            Wr.push({
              key: ZW(ar),
              value: Nj(jr, Sr, Qr, Zr)
            })
          } catch (rr) {
            Wr.push({
              key: ZW(ar),
              value: {
                stringValue: QW
              }
            })
          }
        } return Wr
    }

    function hj(rr, Sr, Qr) {
      return YW(YW(YW(YW({}, WW({}, rr.resourceAttributes)), {}, {
        "service.name": rr.serviceName || "unknown_service"
      }, rr.environment && {
        "deployment.environment": rr.environment
      }), rr.serviceVersion && {
        "service.version": rr.serviceVersion
      }), {}, {
        "telemetry.sdk.name": Sr,
        "telemetry.sdk.version": Qr
      })
    }
    const zj = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function Yj(rr, Sr) {
      const Qr = WW({}, rr),
        Zr = {};
      for (const Wr of zj)({}).hasOwnProperty.call(Qr, Wr) && (Zr[Wr] = Qr[Wr], delete Qr[Wr]);
      return [...mj(Qr, Sr), ...mj(Zr, Sr)]
    }
    const nj = {
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
      ej = {
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
      Kj = ej.info;

    function yj(rr) {
      try {
        return ZW(String(rr))
      } catch (rr) {
        return QW
      }
    }

    function Bj(rr, Sr, Qr, Zr) {
      const Wr = rr.level || "info",
        {
          text: ar,
          number: jr
        } = ej[Wr] || Kj,
        Ir = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(rr) + "000000"
        }(lQ(Zr) ? Zr : void 0),
        fr = {};
      Sr.distinctId && (fr.posthogDistinctId = Sr.distinctId), Sr.sessionId && (fr.sessionId = Sr.sessionId), Sr.windowId && (fr["window.id"] = Sr.windowId), LQ(Sr.sessionStartTimestamp) || (fr.sessionStartTimestamp = String(Sr.sessionStartTimestamp)), LQ(Sr.lastActivityTimestamp) || (fr.lastActivityTimestamp = String(Sr.lastActivityTimestamp)), Sr.currentUrl && (fr["url.full"] = Sr.currentUrl), Sr.screenName && (fr["screen.name"] = Sr.screenName), Sr.appState && (fr["app.state"] = Sr.appState), Sr.activeFeatureFlags && Sr.activeFeatureFlags.length > 0 && (fr.feature_flags = Sr.activeFeatureFlags);
      const Er = YW({}, fr),
        pr = rr.attributes;
      if (pr) {
        let rr = [];
        try {
          rr = Object.keys(pr)
        } catch (Sr) {
          rr = []
        }
        for (const Qr of rr) {
          let rr;
          try {
            rr = pr[Qr]
          } catch (Sr) {
            rr = QW
          }
          Object.defineProperty(Er, Qr, {
            value: rr,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const xr = {
        timeUnixNano: Ir,
        observedTimeUnixNano: Ir,
        severityNumber: jr,
        severityText: ar,
        body: {
          stringValue: yj(rr.body)
        },
        attributes: mj(Er, Qr)
      };
      return rr.trace_id && (xr.traceId = rr.trace_id), rr.span_id && (xr.spanId = rr.span_id), BQ(rr.trace_flags) || (xr.flags = rr.trace_flags), xr
    }

    function Tj(rr, Sr, Qr) {
      return hj(rr, Sr, Qr)
    }

    function vj(rr, Sr, Qr, Zr) {
      return {
        resourceLogs: [{
          resource: {
            attributes: Yj(Sr)
          },
          scopeLogs: [{
            scope: {
              name: Qr,
              version: Zr
            },
            logRecords: rr
          }]
        }]
      }
    }
    var Oj = class {
      constructor(rr) {
        this._onFire = rr, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(rr) {
        this.clear(), this._firesAt = Date.now() + rr, this._timer = mW((() => {
          this._timer = void 0, this._onFire()
        }), rr)
      }
      armNoEarlierThan(rr) {
        this._timer && Date.now() + rr <= this._firesAt || this.arm(rr)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function Lj() {
      return .75 + .5 * Math.random()
    }

    function lj(rr, Sr, Qr, Zr) {
      const Wr = Math.min(Math.max(0, Sr - 1), 6),
        ar = rr * Math.pow(2, Wr);
      return Math.round((void 0 === Zr ? ar : Math.min(ar, Math.max(Zr, rr))) * Qr)
    }
    var Xj = class {
      constructor(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          jr = arguments.length > 6 ? arguments[6] : void 0;
        var Ir;
        this._instance = rr, this._config = Sr, this._logger = Qr, this._getContext = Zr, this._onReady = Wr, this._waitForStoragePersist = ar, this._scopeName = jr, this._flushTimer = new Oj((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new jW, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = Sr.maxBufferSize, this._maxQueueSize = Math.max(null !== (Ir = Sr.maxQueueSize) && void 0 !== Ir ? Ir : Sr.maxBufferSize, Sr.maxBufferSize), this._flushIntervalMs = Sr.flushIntervalMs, this._maxBatchRecordsPerPost = Sr.maxBatchRecordsPerPost, this._rateCapWindowMs = Sr.rateCapWindowMs, this._maxLogsPerInterval = Sr.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(fQ.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(rr, Sr) {
        var Qr;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == rr ? void 0 : rr.body)) return;
        const Zr = this._runBeforeSend(rr);
        if (null === Zr) return;
        if (!Zr.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const Wr = {
          record: Bj(Zr, null !== (Qr = null == Sr ? void 0 : Sr.context) && void 0 !== Qr ? Qr : this._getContext(), this._logger, null == Sr ? void 0 : Sr.occurredAtMs)
        };
        this._onReady((() => this._enqueue(Wr)))
      }
      _runBeforeSend(rr) {
        const Sr = this._config.beforeSend;
        if (!Sr) return rr;
        const Qr = nQ(Sr) ? Sr : [Sr];
        let Zr = rr;
        for (const Wr of Qr) try {
          const rr = Wr(Zr);
          if (!rr) return this._logger.info("Log was rejected in beforeSend function"), null;
          Zr = rr
        } catch (rr) {
          return this._logger.error("Error in beforeSend function for log:", rr), null
        }
        return Zr
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const rr = Date.now(),
          Sr = rr - this._intervalWindowStart;
        return this._rateCapWindowMs > Sr && Sr >= 0 || (this._intervalWindowStart = rr, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var rr = this;
        return wQ((function*() {
          if (!rr._instance.isDisabled) return rr._flushPromise || (rr._flushPromise = rr._flushInner().finally((() => {
            rr._flushPromise = null
          }))), rr._flushPromise
        }))()
      }
      _flushInner() {
        var rr = this;
        return wQ((function*() {
          var Sr;
          rr._flushTimer.clear();
          let Qr = null !== (Sr = rr._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Sr ? Sr : [];
          if (0 === Qr.length) return;
          const Zr = Qr.length;
          let Wr = 0;
          for (; Qr.length > 0 && Zr > Wr;) {
            var ar, jr;
            const Sr = rr._queueGeneration;
            rr._evictedSinceAdvance = 0;
            const Zr = Math.min(Qr.length, rr._maxBatchRecordsPerPost),
              Ir = Qr.slice(0, Zr),
              fr = vj(Ir.map((rr => rr.record)), rr._buildResourceAttributes(), null !== (ar = rr._scopeName) && void 0 !== ar ? ar : rr._instance.getLibraryId(), rr._instance.getLibraryVersion()),
              Er = yield rr._instance._sendLogsBatch(fr);
            if (rr._queueGeneration !== Sr) return;
            if ("too-large" === Er.kind && Ir.length > 1) rr._maxBatchRecordsPerPost = Math.max(1, Math.floor(Ir.length / 2)), rr._logger.warn(`Logs batch of size ${Ir.length} was too large for the ingestion endpoint, reducing batch size to ${rr._maxBatchRecordsPerPost}`);
            else {
              if (rr._retryAfter.record(Er), rr._flushTimer.pending && rr._flushTimer.arm(Math.max(rr._flushIntervalMs, rr._retryAfter.remainingMs())), "retry-later" === Er.kind) throw Er.error;
              if ("too-large" === Er.kind ? rr._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === Er.kind && rr._config.maxBatchRecordsPerPost > rr._maxBatchRecordsPerPost && (rr._maxBatchRecordsPerPost = Math.min(rr._config.maxBatchRecordsPerPost, rr._maxBatchRecordsPerPost + 1)), yield rr._persistQueueAdvance(Ir.length), Qr = null !== (jr = rr._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== jr ? jr : [], Wr += Ir.length, "fatal" === Er.kind) throw Er.error
            }
          }
        }))()
      }
      _persistQueueAdvance(rr) {
        var Sr = this;
        return wQ((function*() {
          var Qr;
          const Zr = Math.max(0, rr - Sr._evictedSinceAdvance),
            Wr = null !== (Qr = Sr._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Qr ? Qr : [];
          Sr._instance.setPersistedProperty(fQ.LogsQueue, Wr.slice(Zr)), yield Sr._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return Tj(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(rr) {
        var Sr;
        if (this._instance.optedOut) return;
        const Qr = null !== (Sr = this._instance.getPersistedProperty(fQ.LogsQueue)) && void 0 !== Sr ? Sr : [];
        this._maxQueueSize > Qr.length || (Qr.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), Qr.push(rr), this._instance.setPersistedProperty(fQ.LogsQueue, Qr), this._maxBufferSize > Qr.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(lj(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const rr = this._instance.getPersistedProperty(fQ.LogsQueue);
        return !!rr && rr.length > 0
      }
      shutdown(rr) {
        var Sr = this;
        return wQ((function*() {
          Sr._flushTimer.clear();
          const Qr = Sr.flush().catch((() => {}));
          void 0 !== rr ? yield NW(Qr, rr): yield Qr
        }))()
      }
      flushWithTimeout(rr) {
        var Sr = this;
        return wQ((function*() {
          const Qr = Sr.flush();
          yield NW(Qr, rr, (() => {
            Qr.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (rr => {
          this._consecutiveFlushFailures++, this._flushJitter = Lj(), this._logger.error("PostHog logs flush failed:", rr)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const Pj = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function Hj(rr) {
      return String(rr) + "000000"
    }

    function qj(rr, Sr, Qr, Zr) {
      let Wr = "";
      return Zr && (Wr = Object.keys(Zr).sort().map((rr => `${JSON.stringify(rr)}:${JSON.stringify(Zr[rr])}`)).join(",")), `${rr}\0${Sr}\0${null!=Qr?Qr:""}\0${Wr}`
    }
    var Rj = class {
      constructor(rr, Sr, Qr) {
        this._instance = rr, this._config = Sr, this._logger = Qr, this._series = new Map, this._flushTimer = new Oj((() => this.flush().catch((rr => {
          this._logger.error("Metrics flush failed:", rr)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new jW, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: rr,
          type: "count",
          value: Sr,
          unit: null == Qr ? void 0 : Qr.unit,
          attributes: null == Qr ? void 0 : Qr.attributes
        })
      }
      gauge(rr, Sr, Qr) {
        this._capture({
          name: rr,
          type: "gauge",
          value: Sr,
          unit: null == Qr ? void 0 : Qr.unit,
          attributes: null == Qr ? void 0 : Qr.attributes
        })
      }
      histogram(rr, Sr, Qr) {
        this._capture({
          name: rr,
          type: "histogram",
          value: Sr,
          unit: null == Qr ? void 0 : Qr.unit,
          attributes: null == Qr ? void 0 : Qr.attributes
        })
      }
      flush() {
        var rr = this;
        const Sr = this._flushPromise,
          Qr = function() {
            var Qr = wQ((function*() {
              Sr && (yield Sr.catch((() => {}))), yield rr._doFlush()
            }));
            return function() {
              return Qr.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === Qr && (this._flushPromise = null)
          }));
        return this._flushPromise = Qr, Qr
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const rr = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(rr)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(rr) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const Sr = this._runBeforeSend(rr);
        if (null === Sr) return;
        if (!Sr.name || "string" != typeof Sr.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof Sr.value || !Number.isFinite(Sr.value)) return void this._logger.warn(`Dropping metric '${Sr.name}': value must be a finite number`);
        if ("count" === Sr.type && 0 > Sr.value) return void this._logger.warn(`Dropping count '${Sr.name}': counters are monotonic, value must be >= 0`);
        let Qr, Zr;
        try {
          Qr = Sr.attributes ? YW({}, Sr.attributes) : void 0, Zr = qj(Sr.type, Sr.name, Sr.unit, Qr)
        } catch (rr) {
          return void this._logger.warn(`Dropping metric '${Sr.name}': attributes could not be serialized`, rr)
        }
        let Wr = this._series.get(Zr);
        if (!Wr) {
          if (!this._admitNewSeries()) return;
          Wr = {
            name: Sr.name,
            type: Sr.type,
            unit: Sr.unit,
            attributes: Qr,
            windowStartMs: Date.now()
          }, this._series.set(Zr, Wr)
        }
        const ar = this._typeByName.get(Sr.name);
        void 0 === ar ? this._typeByName.set(Sr.name, Sr.type) : ar === Sr.type || this._typeCollisionWarned.has(Sr.name) || (this._typeCollisionWarned.add(Sr.name), this._logger.warn(`Metric name '${Sr.name}' is already used as a ${ar}; recording it as a ${Sr.type} too will blend both series in charts. Use a distinct name.`)), this._fold(Wr, Sr.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(rr, Sr) {
        switch (rr.type) {
          case "count":
            var Qr;
            rr.total = (null !== (Qr = rr.total) && void 0 !== Qr ? Qr : 0) + Sr;
            break;
          case "gauge":
            rr.last = Sr;
            break;
          case "histogram": {
            rr.hist || (rr.hist = {
              count: 0,
              sum: 0,
              min: Sr,
              max: Sr,
              bucketCounts: new Array(Pj.length + 1).fill(0)
            });
            const Qr = rr.hist;
            Qr.count += 1, Qr.sum += Sr, Qr.min = Math.min(Qr.min, Sr), Qr.max = Math.max(Qr.max, Sr), Qr.bucketCounts[function(rr, Sr) {
              for (let Qr = 0; Sr.length > Qr; Qr++)
                if (Sr[Qr] >= rr) return Qr;
              return Sr.length
            }(Sr, Pj)] += 1;
            break
          }
        }
      }
      _runBeforeSend(rr) {
        const Sr = this._config.beforeSend;
        if (!Sr) return rr;
        const Qr = nQ(Sr) ? Sr : [Sr];
        let Zr = rr;
        for (const Wr of Qr) try {
          const rr = Wr(Zr);
          if (!rr) return this._logger.info("Metric was rejected in beforeSend function"), null;
          Zr = rr
        } catch (rr) {
          return this._logger.error("Error in beforeSend function for metric:", rr), null
        }
        return Zr
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(lj(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var rr = this;
        return wQ((function*() {
          if (rr._flushTimer.clear(), 0 === rr._series.size) return;
          const Sr = rr._series;
          rr._series = new Map, rr._seriesCapWarned = !1, rr._typeByName = new Map, rr._typeCollisionWarned = new Set;
          const Qr = rr._generation,
            Zr = yield rr._instance._sendMetricsBatch(rr._buildPayload(Sr));
          if (Qr === rr._generation) switch (rr._retryAfter.record(Zr), "retry-later" === Zr.kind ? (rr._consecutiveFlushFailures++, rr._flushJitter = Lj()) : (rr._consecutiveFlushFailures = 0, rr._flushJitter = 1), rr._flushTimer.pending && rr._flushTimer.arm(rr._nextFlushDelay()), Zr.kind) {
            case "ok":
              return;
            case "retry-later":
              return rr._mergeWindowBack(Sr), void rr._flushTimer.armNoEarlierThan(rr._nextFlushDelay());
            case "too-large":
              return void rr._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void rr._logger.error("Failed to send metrics batch:", Zr.error)
          }
        }))()
      }
      _buildPayload(rr) {
        return Sr = this._buildMetrics(rr), Qr = function(rr, Sr, Qr) {
          return hj(rr, Sr, Qr)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), Zr = this._instance.getLibraryId(), Wr = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: Yj(Qr)
            },
            scopeMetrics: [{
              scope: {
                name: Zr,
                version: Wr
              },
              metrics: Sr
            }]
          }]
        };
        var Sr, Qr, Zr, Wr
      }
      _buildMetrics(rr) {
        const Sr = Hj(Date.now()),
          Qr = new Map;
        for (const jr of rr.values()) {
          var Zr;
          const rr = qj(jr.type, jr.name, jr.unit, void 0);
          let Ir = Qr.get(rr);
          Ir || (Ir = YW({
            name: jr.name
          }, jr.unit && {
            unit: jr.unit
          }), "count" === jr.type ? Ir.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === jr.type ? Ir.gauge = {
            dataPoints: []
          } : Ir.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, Qr.set(rr, Ir));
          const fr = mj(null !== (Zr = jr.attributes) && void 0 !== Zr ? Zr : {}, this._logger),
            Er = Hj(jr.windowStartMs);
          if ("count" === jr.type) {
            var Wr;
            const rr = {
              attributes: fr,
              startTimeUnixNano: Er,
              timeUnixNano: Sr,
              asDouble: null !== (Wr = jr.total) && void 0 !== Wr ? Wr : 0
            };
            Ir.sum.dataPoints.push(rr)
          } else if ("gauge" === jr.type) {
            var ar;
            const rr = {
              attributes: fr,
              timeUnixNano: Sr,
              asDouble: null !== (ar = jr.last) && void 0 !== ar ? ar : 0
            };
            Ir.gauge.dataPoints.push(rr)
          } else jr.hist && Ir.histogram.dataPoints.push({
            attributes: fr,
            startTimeUnixNano: Er,
            timeUnixNano: Sr,
            count: jr.hist.count,
            sum: jr.hist.sum,
            min: jr.hist.min,
            max: jr.hist.max,
            bucketCounts: jr.hist.bucketCounts,
            explicitBounds: Pj
          })
        }
        return Array.from(Qr.values())
      }
      _mergeWindowBack(rr) {
        for (const [Zr, Wr] of rr) {
          const rr = this._series.get(Zr);
          if (rr) switch (rr.windowStartMs = Math.min(rr.windowStartMs, Wr.windowStartMs), rr.type) {
            case "count":
              var Sr, Qr;
              rr.total = (null !== (Sr = rr.total) && void 0 !== Sr ? Sr : 0) + (null !== (Qr = Wr.total) && void 0 !== Qr ? Qr : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (Wr.hist)
                if (rr.hist) {
                  rr.hist.count += Wr.hist.count, rr.hist.sum += Wr.hist.sum, rr.hist.min = Math.min(rr.hist.min, Wr.hist.min), rr.hist.max = Math.max(rr.hist.max, Wr.hist.max);
                  for (let Sr = 0; rr.hist.bucketCounts.length > Sr; Sr++) rr.hist.bucketCounts[Sr] += Wr.hist.bucketCounts[Sr]
                } else rr.hist = Wr.hist
          } else this._admitNewSeries() && this._series.set(Zr, Wr)
        }
      }
    };
    const gj = function(rr) {
        let {
          debugEnabled: Sr
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = {
          _log(Qr) {
            let Zr;
            try {
              Zr = typeof window > "u" ? void 0 : window
            } catch (rr) {
              return
            }
            for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
            Zr && (Wr.DEBUG || Zr.POSTHOG_DEBUG || Sr) && !BQ(Zr.console) && Zr.console && ("__rrweb_original__" in Zr.console[Qr] ? Zr.console[Qr].__rrweb_original__ : Zr.console[Qr])(rr, ...jr)
          },
          debug() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            Qr._log("debug", ...Sr)
          },
          info() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            Qr._log("log", ...Sr)
          },
          warn() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            Qr._log("warn", ...Sr)
          },
          error() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            Qr._log("error", ...Sr)
          },
          critical() {
            for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
            console.error(rr, ...Qr)
          },
          uninitializedWarning(rr) {
            Qr.error(`You must initialize PostHog before calling ${rr}`)
          },
          createLogger: (Sr, Qr) => gj(`${rr} ${Sr}`, Qr)
        };
        return Qr
      },
      Cj = gj("[PostHog.js]"),
      Mj = Cj.createLogger;

    function Gj(rr, Sr) {
      nQ(rr) && rr.forEach(Sr)
    }

    function kj(rr, Sr) {
      if (!LQ(rr))
        if (nQ(rr)) rr.forEach(Sr);
        else if ((rr => rr instanceof FormData)(rr)) rr.forEach(((rr, Qr) => Sr(rr, Qr)));
      else
        for (const Qr in rr) zQ.call(rr, Qr) && Sr(rr[Qr], Qr)
    }
    const Aj = function(rr) {
      for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
      for (const Wr of Qr)
        for (const Sr in Wr) void 0 !== Wr[Sr] && (rr[Sr] = Wr[Sr]);
      return rr
    };

    function Vj(rr) {
      const Sr = Object.keys(rr);
      let Qr = Sr.length;
      const Zr = new Array(Qr);
      for (; Qr--;) Zr[Qr] = [Sr[Qr], rr[Sr[Qr]]];
      return Zr
    }
    const ij = function(rr) {
        return function() {
          try {
            for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
            return rr.apply(this, Qr)
          } catch (rr) {
            Cj.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Cj.critical(rr)
          }
        }
      },
      wj = function(rr) {
        const Sr = {};
        return kj(rr, (function(rr, Qr) {
          (TQ(rr) && rr.length > 0 || lQ(rr)) && (Sr[Qr] = rr)
        })), Sr
      };

    function cj(rr) {
      const Sr = YW({}, rr);
      for (const Qr of ["name", "message", "stack", "cause", "errors"]) try {
        Qr in rr && (Sr[Qr] = rr[Qr])
      } catch (rr) {}
      return Sr
    }
    const Fj = ["herokuapp.com", "vercel.app", "netlify.app"];

    function oj(rr) {
      const Sr = null == rr ? void 0 : rr.hostname;
      if (!TQ(Sr)) return !1;
      const Qr = Sr.split(".").slice(-2).join(".");
      for (const Zr of Fj)
        if (Qr === Zr) return !1;
      return !0
    }

    function bj(rr, Sr, Qr, Zr) {
      const {
        capture: Wr = !1,
        passive: ar = !0
      } = null != Zr ? Zr : {};
      null == rr || rr.addEventListener(Sr, Qr, {
        capture: Wr,
        passive: ar
      })
    }

    function Jj(rr) {
      return "ph_toolbar_internal" === rr.name
    }
    const Dj = rr => {
      if (uS) {
        try {
          const Sr = rr + "=",
            Qr = uS.cookie.split(";").filter((rr => rr.length));
          for (let rr = 0; Qr.length > rr; rr++) {
            let Zr = Qr[rr];
            for (;
              " " == Zr.charAt(0);) Zr = Zr.substring(1, Zr.length);
            if (0 === Zr.indexOf(Sr)) return decodeURIComponent(Zr.substring(Sr.length, Zr.length))
          }
        } catch (rr) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(rr) {
      return 0 > rr ? Math.ceil(rr) : Math.floor(rr)
    }), Number.isInteger || (Number.isInteger = function(rr) {
      return lQ(rr) && isFinite(rr) && Math.floor(rr) === rr
    });
    var dj = class rr {
        constructor(rr) {
          if (this.bytes = rr, 16 !== rr.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(Sr, Qr, Zr, Wr) {
          if (!Number.isInteger(Sr) || !Number.isInteger(Qr) || !Number.isInteger(Zr) || !Number.isInteger(Wr) || 0 > Sr || 0 > Qr || 0 > Zr || 0 > Wr || Sr > 0xffffffffffff || Qr > 4095 || Zr > 1073741823 || Wr > 4294967295) throw new RangeError("invalid field value");
          const ar = new Uint8Array(16);
          return ar[0] = Sr / Math.pow(2, 40), ar[1] = Sr / Math.pow(2, 32), ar[2] = Sr / Math.pow(2, 24), ar[3] = Sr / Math.pow(2, 16), ar[4] = Sr / 256, ar[5] = Sr, ar[6] = 112 | Qr >>> 8, ar[7] = Qr, ar[8] = 128 | Zr >>> 24, ar[9] = Zr >>> 16, ar[10] = Zr >>> 8, ar[11] = Zr, ar[12] = Wr >>> 24, ar[13] = Wr >>> 16, ar[14] = Wr >>> 8, ar[15] = Wr, new rr(ar)
        }
        toString() {
          let rr = "";
          for (let Sr = 0; this.bytes.length > Sr; Sr++) rr = rr + (this.bytes[Sr] >>> 4).toString(16) + (15 & this.bytes[Sr]).toString(16), 3 !== Sr && 5 !== Sr && 7 !== Sr && 9 !== Sr || (rr += "-");
          if (36 !== rr.length) throw new Error("Invalid UUIDv7 was generated");
          return rr
        }
        clone() {
          return new rr(this.bytes.slice(0))
        }
        equals(rr) {
          return 0 === this.compareTo(rr)
        }
        compareTo(rr) {
          for (let Sr = 0; 16 > Sr; Sr++) {
            const Qr = this.bytes[Sr] - rr.bytes[Sr];
            if (0 !== Qr) return Math.sign(Qr)
          }
          return 0
        }
      },
      sj = class {
        generate() {
          const rr = this.generateOrAbort();
          if (!BQ(rr)) return rr;
          {
            this._timestamp = 0;
            const rr = this.generateOrAbort();
            if (BQ(rr)) throw new Error("Could not generate UUID after timestamp reset");
            return rr
          }
        }
        generateOrAbort() {
          const rr = (() => {
            const rr = Date.now();
            return lQ(rr) && isFinite(rr) ? Math.min(Math.max(Math.floor(rr), 0), 0xffffffffffff) : 0
          })();
          if (rr > this._timestamp) this._timestamp = rr, this._resetCounter();
          else {
            if (this._timestamp >= rr + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return dj.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new rI
        }
      };
    let uj = rr => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let Sr = 0; rr.length > Sr; Sr++) rr[Sr] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return rr
    };
    DS && !BQ(DS.crypto) && crypto.getRandomValues && (uj = rr => crypto.getRandomValues(rr));
    var rI = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (uj(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let SI;
    const QI = () => ZI().toString(),
      ZI = () => (SI || (SI = new sj)).generate();
    let WI = "";
    const aI = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let jI = null;
    const II = {
      _is_supported() {
        if (!OQ(jI)) return jI;
        if (jI = !1, uS) try {
          const rr = `__ph_cookie_support_${QI()}`;
          II._set(rr, "xyz"), jI = '"xyz"' === Dj(rr), II._remove(rr)
        } catch (Zr) {
          jI = !1
        }
        return jI
      },
      _error(rr) {
        Cj.error("cookieStore error: " + rr)
      },
      _get: Dj,
      _parse(rr) {
        let Sr;
        try {
          Sr = JSON.parse(II._get(rr)) || {}
        } catch (rr) {}
        return Sr
      },
      _set(rr, Sr, Qr, Zr, Wr) {
        if (!uS) return !1;
        try {
          let ar = "",
            jr = "";
          const Ir = function(rr, Sr) {
            if (Sr) {
              let Sr = function(rr) {
                let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uS;
                if (WI) return WI;
                if (!Sr) return "";
                if (["localhost", "127.0.0.1"].includes(rr)) return "";
                const Qr = rr.split(".");
                let Zr = Math.min(Qr.length, 8);
                const Wr = "dmn_chk_" + QI();
                for (; !WI && Zr--;) {
                  const rr = Qr.slice(Zr).join("."),
                    ar = Wr + "=1;domain=." + rr + ";path=/";
                  Sr.cookie = ar + ";max-age=3", Sr.cookie.includes(Wr) && (Sr.cookie = ar + ";max-age=0", WI = rr)
                }
                return WI
              }(rr);
              if (!Sr) {
                const Qr = (rr => {
                  const Sr = rr.match(aI);
                  return Sr ? Sr[0] : ""
                })(rr);
                Qr !== Sr && Cj.info("Warning: cookie subdomain discovery mismatch", Qr, Sr), Sr = Qr
              }
              return Sr ? "; domain=." + Sr : ""
            }
            return ""
          }(uS.location.hostname, Zr);
          if (Qr) {
            const rr = new Date;
            rr.setTime(rr.getTime() + 864e5 * Qr), ar = "; expires=" + rr.toUTCString()
          }
          Wr && (jr = "; secure");
          const fr = rr + "=" + encodeURIComponent(JSON.stringify(Sr)) + ar + "; SameSite=Lax; path=/" + Ir + jr;
          return fr.length > 3686.4 && Cj.warn("cookieStore warning: large cookie, len=" + fr.length), uS.cookie = fr, !0
        } catch (rr) {
          return !1
        }
      },
      _remove(rr, Sr) {
        if ((null == uS ? void 0 : uS.cookie) && (!Sr || !OQ(Dj(rr)))) try {
          II._set(rr, "", -1, Sr)
        } catch (rr) {
          return
        }
      }
    };
    let fI = null;
    const EI = {
        _is_supported() {
          if (!OQ(fI)) return fI;
          let rr = !0;
          if (BQ(DS)) rr = !1;
          else try {
            const Sr = "__mplssupport__";
            EI._set(Sr, "xyz"), '"xyz"' !== EI._get(Sr) && (rr = !1), EI._remove(Sr)
          } catch (Wr) {
            rr = !1
          }
          return rr || Cj.error("localStorage unsupported; falling back to cookie store"), fI = rr, rr
        },
        _error(rr) {
          Cj.error("localStorage error: " + rr)
        },
        _get(rr) {
          try {
            return null == DS ? void 0 : DS.localStorage.getItem(rr)
          } catch (rr) {
            EI._error(rr)
          }
          return null
        },
        _parse(rr) {
          try {
            return JSON.parse(EI._get(rr)) || {}
          } catch (rr) {}
          return null
        },
        _set(rr, Sr) {
          try {
            return null == DS || DS.localStorage.setItem(rr, JSON.stringify(Sr)), !0
          } catch (rr) {
            EI._error(rr)
          }
          return !1
        },
        _remove(rr) {
          try {
            null == DS || DS.localStorage.removeItem(rr)
          } catch (rr) {
            EI._error(rr)
          }
        }
      },
      pI = [tr, Ir, Nr, fr, Yr, xr, pr, Er, hr],
      xI = [Tr, Br, sr, ur, TS, BS, Xr, YS],
      mI = rr => rr + "_cpm",
      NI = ["__proto__", "constructor", "prototype"],
      UI = rr => {
        if (!KQ(rr)) return {};
        const Sr = {};
        return Object.keys(rr).forEach((Qr => {
          -1 === NI.indexOf(Qr) && (Sr[Qr] = rr[Qr])
        })), Sr
      },
      tI = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const Qr = {};
        return [...xI, ...Sr].forEach((Sr => {
          const Zr = rr[Sr];
          BQ(Zr) || OQ(Zr) || "" === Zr || (Qr[Sr] = Zr)
        })), Qr
      },
      hI = rr => {
        let Sr = 5381,
          Qr = 2166136261;
        for (let Zr = 0; rr.length > Zr; Zr++) {
          const Wr = rr.charCodeAt(Zr);
          Sr = 33 * Sr ^ Wr, Qr = Math.imul(Qr ^ Wr, 16777619)
        }
        return rr.length.toString(36) + "." + (Sr >>> 0).toString(36) + "." + (Qr >>> 0).toString(36)
      },
      zI = (rr, Sr) => ({
        p: Sr,
        f: hI(JSON.stringify(rr))
      }),
      YI = (rr, Sr) => {
        if (!Sr) return {
          properties: [],
          isValid: !1
        };
        try {
          const Qr = II._parse(mI(rr)),
            Zr = (null == Qr ? void 0 : Qr.f) === hI(Sr) && nQ(Qr.p);
          return {
            properties: Zr ? Qr.p : [],
            isValid: Zr
          }
        } catch (rr) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      nI = (rr, Sr) => Sr + "|" + (II._get(mI(rr)) || ""),
      eI = {},
      KI = {
        _is_supported: () => !0,
        _error(rr) {
          Cj.error("memoryStorage error: " + rr)
        },
        _get: rr => rr in eI ? eI[rr] : null,
        _parse: rr => rr in eI ? eI[rr] : null,
        _set: (rr, Sr) => (eI[rr] = Sr, !0),
        _remove(rr) {
          delete eI[rr]
        }
      };
    let yI = null;
    const BI = {
      _is_supported() {
        if (!OQ(yI)) return yI;
        if (yI = !0, BQ(DS)) yI = !1;
        else try {
          const rr = "__support__";
          BI._set(rr, "xyz"), '"xyz"' !== BI._get(rr) && (yI = !1), BI._remove(rr)
        } catch (Zr) {
          yI = !1
        }
        return yI
      },
      _error(rr) {
        Cj.error("sessionStorage error: ", rr)
      },
      _get(rr) {
        try {
          return null == DS ? void 0 : DS.sessionStorage.getItem(rr)
        } catch (rr) {
          BI._error(rr)
        }
        return null
      },
      _parse(rr) {
        try {
          return JSON.parse(BI._get(rr)) || null
        } catch (rr) {}
        return null
      },
      _set(rr, Sr) {
        try {
          return null == DS || DS.sessionStorage.setItem(rr, JSON.stringify(Sr)), !0
        } catch (rr) {
          BI._error(rr)
        }
        return !1
      },
      _remove(rr) {
        try {
          null == DS || DS.sessionStorage.removeItem(rr)
        } catch (rr) {
          BI._error(rr)
        }
      }
    };
    var TI = class {
      constructor(rr) {
        this._instance = rr
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
      optInOut(rr) {
        this.vt._set(this._storageKey, rr ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.vt._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: rr,
          opt_out_capturing_cookie_prefix: Sr,
          consent_persistence_name: Qr
        } = this._instance.config;
        return Qr || (Sr ? Sr + rr : "__ph_opt_in_out_" + rr)
      }
      get _storedConsent() {
        const rr = this.vt._get(this._storageKey);
        return AQ(rr) ? 1 : mQ(VQ, rr) ? 0 : -1
      }
      get vt() {
        const rr = this._config.opt_out_capturing_persistence_type,
          Sr = "localStorage" === rr ? EI : II,
          Qr = Sr._is_supported() ? Sr : KI;
        if (!this._persistentStore || this._persistentStore !== Qr) {
          this._persistentStore = Qr;
          const Sr = "localStorage" === rr ? II : EI;
          Sr._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(AQ(Sr._get(this._storageKey))), Sr._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == sS ? void 0 : sS.doNotTrack, null == sS ? void 0 : sS.msDoNotTrack, IQ.doNotTrack, null == sS ? void 0 : sS.globalPrivacyControl].some((rr => AQ(rr)))
      }
    };

    function vI(rr, Sr) {
      var Qr;
      const Zr = null == rr || null === (Qr = rr.config) || void 0 === Qr ? void 0 : Qr.get_current_url;
      if (!eQ(Zr)) return Sr;
      try {
        const rr = Zr(Sr);
        return TQ(rr) && rr ? rr : Sr
      } catch (rr) {
        return Cj.error("Error in get_current_url, falling back to window.location.href", rr), Sr
      }
    }

    function OI(rr) {
      var Sr;
      return rr instanceof Element && ("__POSTHOG_TOOLBAR__" === rr.id || !!(null === (Sr = rr.closest) || void 0 === Sr ? void 0 : Sr.call(rr, ".toolbar-global-fade-container")))
    }

    function LI(rr) {
      return !!rr && 1 === rr.nodeType
    }

    function lI(rr, Sr) {
      return !!rr && !!rr.tagName && rr.tagName.toLowerCase() === Sr.toLowerCase()
    }

    function XI(rr) {
      return !!rr && 3 === rr.nodeType
    }

    function PI(rr) {
      return !!rr && 11 === rr.nodeType && LI(rr.host)
    }

    function HI(rr) {
      return rr ? NQ(rr).split(/\s+/) : []
    }

    function qI(rr, Sr) {
      const Qr = function(rr) {
        var Sr;
        const Qr = null == DS || null === (Sr = DS.location) || void 0 === Sr ? void 0 : Sr.href;
        return BQ(Qr) ? void 0 : vI(rr, Qr)
      }(Sr);
      return !!(Qr && rr && rr.some((rr => Qr.match(rr))))
    }

    function RI(rr) {
      let Sr = "";
      switch (typeof rr.className) {
        case "string":
          Sr = rr.className;
          break;
        case "object":
          Sr = (rr.className && "baseVal" in rr.className ? rr.className.baseVal : null) || rr.getAttribute("class") || "";
          break;
        default:
          Sr = ""
      }
      return HI(Sr)
    }

    function gI(rr) {
      return LQ(rr) ? null : NQ(rr).split(/(\s+)/).filter((rr => mf(rr))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function CI(rr) {
      let Sr = "";
      return Zf(rr) && !Wf(rr) && rr.childNodes && rr.childNodes.length && kj(rr.childNodes, (function(rr) {
        var Qr;
        XI(rr) && rr.textContent && (Sr += null !== (Qr = gI(rr.textContent)) && void 0 !== Qr ? Qr : "")
      })), NQ(Sr)
    }

    function MI(rr) {
      var Sr;
      return BQ(rr.target) ? rr.srcElement || null : (null === (Sr = rr.target) || void 0 === Sr ? void 0 : Sr.shadowRoot) ? rr.composedPath()[0] || null : rr.target || null
    }
    const GI = ["a", "button", "form", "input", "select", "textarea", "label"];

    function kI(rr, Sr) {
      const Qr = rr.matches || rr.matchesSelector || rr.msMatchesSelector || rr.mozMatchesSelector || rr.webkitMatchesSelector || rr.oMatchesSelector;
      try {
        return !!Qr && Qr.call(rr, Sr)
      } catch (rr) {
        return !1
      }
    }

    function AI(rr, Sr) {
      if (BQ(Sr)) return !0;
      for (const Qr of rr)
        if (Sr.some((rr => kI(Qr, rr)))) return !0;
      return !1
    }

    function VI(rr) {
      const Sr = rr.parentNode;
      return !(!Sr || !LI(Sr)) && Sr
    }
    const iI = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      wI = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      cI = [...wI, "+", "-", "\u2212", "\u2013"],
      FI = cI.length + 10,
      oI = ["button", "a", "input", "select", "textarea", "label"],
      bI = ["button", "link", "tab", "menuitem", "option"],
      JI = (rr, Sr) => /[a-z0-9]/i.test(Sr) ? mQ(cI, Sr) ? new RegExp(`\\b${Sr}\\b`).test(rr) : rr.includes(Sr) : rr === Sr,
      DI = rr => mQ(oI, rr.tagName.toLowerCase()) || mQ(bI, (rr.getAttribute("role") || "").toLowerCase());

    function dI(rr) {
      let Sr = "",
        Qr = "";
      const Zr = rr => {
        LI(rr) && Zf(rr) && !Wf(rr) && (Sr += ` ${CI(rr)}`, Qr = Qr || rr.getAttribute("aria-label") || "", kj(rr.childNodes, Zr))
      };
      Zr(rr), Sr = NQ(Sr.replace(/\s+/g, " "));
      const Wr = (mf(Sr) ? Sr : "").toLowerCase(),
        ar = rr.getAttribute("aria-label") || (Wr ? "" : Qr);
      return {
        safeText: Wr,
        ariaLabel: NQ(ar).toLowerCase()
      }
    }
    const sI = [".ph-no-rageclick", ".ph-no-capture"],
      uI = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function rf(rr, Sr) {
      if (!DS || Sf(rr)) return !1;
      let Qr, Zr, Wr;
      var ar, jr;
      if (PQ(Sr) ? (Qr = !!Sr && sI, Zr = void 0, Wr = !1) : (Qr = null !== (ar = null == Sr ? void 0 : Sr.css_selector_ignorelist) && void 0 !== ar ? ar : sI, Zr = null == Sr ? void 0 : Sr.content_ignorelist, Wr = null !== (jr = null == Sr ? void 0 : Sr.ignore_text_selection) && void 0 !== jr && jr), !1 === Qr) return !1;
      if (Wr && function(rr) {
          return !(!rr || !LI(rr)) && (!!lI(rr, "textarea") || (lI(rr, "input") ? mQ(uI, (rr.getAttribute("type") || "").toLowerCase()) : function(rr) {
            var Sr;
            if (rr.isContentEditable) return !0;
            const Qr = null === (Sr = rr.getAttribute) || void 0 === Sr ? void 0 : Sr.call(rr, "contenteditable");
            return "true" === Qr || "" === Qr
          }(rr)))
        }(rr)) return !1;
      const {
        targetElementList: Ir
      } = Qf(rr, !1);
      return !(Zr && function(rr, Sr) {
        let Qr, {
          safeText: Zr,
          ariaLabel: Wr
        } = Sr;
        if (!0 === rr) Qr = wI;
        else {
          if (!nQ(rr)) return !1;
          if (rr.length > FI) return Cj.error(`[PostHog] content_ignorelist array cannot exceed ${FI} items. Use css_selector_ignorelist for more complex matching.`), !1;
          Qr = rr.map((rr => rr.toLowerCase()))
        }
        return Qr.some((rr => JI(Zr, rr) || JI(Wr, rr)))
      }(Zr, function(rr, Sr) {
        for (const Qr of Sr)
          if (DI(Qr)) return dI(Qr);
        for (const Qr of Sr) {
          try {
            if ("pointer" !== (null == DS ? void 0 : DS.getComputedStyle(Qr).getPropertyValue("cursor"))) break
          } catch (rr) {
            break
          }
          const Sr = dI(Qr);
          if (Sr.safeText || Sr.ariaLabel) return Sr
        }
        return dI(rr)
      }(rr, Ir)) || AI(Ir, Qr))
    }
    const Sf = rr => !rr || lI(rr, "html") || !LI(rr),
      Qf = (rr, Sr) => {
        if (!DS || Sf(rr)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let Qr = !1;
        const Zr = [rr];
        let Wr = rr;
        for (; Wr.parentNode && !lI(Wr, "body");) {
          if (PI(Wr.parentNode)) {
            Zr.push(Wr.parentNode.host), Wr = Wr.parentNode.host;
            continue
          }
          const ar = VI(Wr);
          if (!ar) break;
          if (Sr || GI.indexOf(ar.tagName.toLowerCase()) > -1) Qr = !0;
          else try {
            const rr = DS.getComputedStyle(ar);
            rr && "pointer" === rr.getPropertyValue("cursor") && (Qr = !0)
          } catch (rr) {}
          Zr.push(ar), Wr = ar
        }
        return {
          parentIsUsefulElement: Qr,
          targetElementList: Zr
        }
      };

    function Zf(rr) {
      const Sr = new Set;
      let Qr = 0;
      for (let ar = rr; ar.parentNode && !lI(ar, "body"); ar = ar.parentNode) {
        if (Qr++ >= 1e3 || Sr.has(ar)) return !1;
        Sr.add(ar);
        const rr = RI(ar);
        if (mQ(rr, "ph-sensitive") || mQ(rr, "ph-no-capture")) return !1
      }
      if (mQ(RI(rr), "ph-include")) return !0;
      const Zr = rr.type || "";
      if (TQ(Zr)) switch (Zr.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const Wr = rr.name || rr.id || "";
      return !TQ(Wr) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(Wr.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Wf(rr) {
      return !!(lI(rr, "input") && !["button", "checkbox", "submit", "reset"].includes(rr.type) || lI(rr, "select") || lI(rr, "textarea") || "true" === rr.getAttribute("contenteditable"))
    }
    const af = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      jf = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      If = [16, 15, 14, 13],
      ff = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Ef = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      pf = /[0-9A-Za-z_]/;

    function xf(rr) {
      let Sr = 0,
        Qr = !1;
      for (let Zr = rr.length - 1; Zr >= 0; Zr--) {
        let Wr = rr.charCodeAt(Zr) - 48;
        Qr && (Wr *= 2, Wr > 9 && (Wr -= 9)), Sr += Wr, Qr = !Qr
      }
      return Sr % 10 == 0
    }

    function mf(rr) {
      let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (LQ(rr)) return !1;
      if (TQ(rr)) {
        if (rr = NQ(rr), Sr ? af.test((rr || "").replace(/[- ]/g, "")) : function(rr) {
            let Sr;
            for (jf.lastIndex = 0; Sr = jf.exec(rr);) {
              const rr = Sr[2];
              if (!rr) continue;
              const Qr = rr.replace(/[- ]/g, "");
              for (let Sr = 0; Qr.length > Sr; Sr++)
                for (const rr of If) {
                  const Zr = Sr + rr;
                  if (Qr.length >= Zr) {
                    const rr = Qr.slice(Sr, Zr);
                    if (af.test(rr) && xf(rr)) return !0
                  }
                }
            }
            return !1
          }(rr)) return !1;
        if (Sr ? ff.test(rr) : function(rr) {
            let Sr;
            for (Ef.lastIndex = 0; Sr = Ef.exec(rr);) {
              const rr = Sr[1],
                Qr = Sr[3];
              if (!(rr && Qr && pf.test(rr) && pf.test(Qr))) return !0
            }
            return !1
          }(rr)) return !1
      }
      return !0
    }

    function Nf(rr) {
      let Sr = CI(rr);
      return Sr = `${Sr} ${Uf(rr)}`.trim(), mf(Sr) ? Sr : ""
    }

    function Uf(rr) {
      let Sr = "";
      return rr && rr.childNodes && rr.childNodes.length && kj(rr.childNodes, (function(rr) {
        var Qr;
        if (rr && "span" === (null === (Qr = rr.tagName) || void 0 === Qr ? void 0 : Qr.toLowerCase())) try {
          const Qr = CI(rr);
          Sr = `${Sr} ${Qr}`.trim(), rr.childNodes && rr.childNodes.length && (Sr = `${Sr} ${Uf(rr)}`.trim())
        } catch (rr) {
          Cj.error("[AutoCapture]", rr)
        }
      })), Sr
    }

    function tf(rr) {
      return rr.replace(/"|\\"/g, '\\"')
    }

    function hf(rr) {
      const Sr = rr.attr__class;
      if (Sr) return nQ(Sr) ? Sr : HI(Sr)
    }
    const zf = Mj("[Dead Clicks]"),
      Yf = () => !0,
      nf = rr => {
        var Sr;
        const Qr = !!(null === (Sr = rr.instance.persistence) || void 0 === Sr ? void 0 : Sr.get_property(Ar)),
          Zr = rr.instance.config.capture_dead_clicks;
        return PQ(Zr) ? Zr : !!KQ(Zr) || Qr
      };
    var ef = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(rr, Sr, Qr) {
        this.instance = rr, this.isEnabled = Sr, this.onCapture = Qr, this.startIfEnabledOrStop()
      }
      onRemoteConfig(rr) {
        if (!rr.ok) return;
        const Sr = rr.config;
        "captureDeadClicks" in Sr && (this.instance.persistence && this.instance.persistence.register({
          [Ar]: Sr.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(rr) {
        var Sr, Qr, Zr;
        (null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.initDeadClicksAutocapture) ? rr(): null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this.instance, "dead-clicks-autocapture", (Sr => {
          Sr ? zf.error("failed to load script", Sr) : rr()
        }))
      }
      _start() {
        var rr;
        if (uS) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (rr = IQ.__PosthogExtensions__) || void 0 === rr ? void 0 : rr.initDeadClicksAutocapture)) {
            const rr = KQ(this.instance.config.capture_dead_clicks) ? YW({}, this.instance.config.capture_dead_clicks) : {};
            rr.__onCapture = this.onCapture, this.onCapture && (rr.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = IQ.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, rr), this._lazyLoadedDeadClicksAutocapture.start(uS), zf.info("starting...")
          }
        } else zf.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, zf.info("stopping..."))
      }
    };
    const Kf = Mj("[SegmentIntegration]");

    function yf(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Zr = rr.config.segment;
      if (!Zr) return Sr();
      const {
        analytics: Wr,
        filterProperties: ar
      } = (rr => eQ(rr.register))(jr = Zr) ? {
        analytics: jr
      } : jr;
      var jr;
      ! function(rr, Sr, Qr, Zr) {
        const Wr = Sr => {
            const Wr = () => Sr.anonymousId() || QI();
            rr.config.get_device_id = Wr, Zr && Sr.id() && (rr.register({
              distinct_id: Sr.id(),
              $device_id: Wr()
            }), rr.persistence.set_property(YS, iS)), Qr(Zr ? void 0 : Sr.anonymousId() || void 0)
          },
          ar = Sr.user();
        "then" in ar && eQ(ar.then) ? ar.then(Wr) : Wr(ar)
      }(rr, Wr, (Qr => {
        Wr.register(function(rr, Sr) {
          let {
            filterProperties: Qr
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || Kf.warn("This browser does not have Promise support, and can not use the segment integration");
          const Zr = (Zr, Wr) => {
            if (!Wr) return Zr;
            const ar = !!Sr && Zr.event.anonymousId === Sr && !Zr.event.userId;
            ar || Zr.event.userId || Zr.event.anonymousId === rr.get_distinct_id() || (Kf.info("No userId set, resetting PostHog"), rr.reset()), ar || (Sr = void 0), Zr.event.userId && Zr.event.userId !== rr.get_distinct_id() && (Kf.info("UserId set, identifying with PostHog"), rr.identify(Zr.event.userId));
            let jr = rr.calculateEventProperties(Wr, Zr.event.properties);
            if (!LQ(Qr)) {
              const rr = Zr.event.properties || {},
                Sr = {};
              for (const Qr of Object.keys(jr)) zQ.call(rr, Qr) || (Sr[Qr] = jr[Qr]);
              const Wr = ((rr, Sr) => {
                const Qr = nQ(rr) ? rr : [rr];
                let Zr = YW({}, Sr);
                for (const Wr of Qr) try {
                  if (Zr = Wr(Zr), LQ(Zr)) return null
                } catch (rr) {
                  return Kf.error("Error in Segment filterProperties:", rr), null
                }
                return Zr
              })(Qr, Sr);
              if (LQ(Wr)) return Zr;
              jr = Wr
            }
            return Zr.event.properties = Object.assign({}, jr, Zr.event.properties), Zr
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: rr => Zr(rr, rr.event.event),
            page: rr => Zr(rr, FS),
            identify: rr => Zr(rr, bS),
            screen: rr => Zr(rr, "$screen")
          }
        }(rr, Qr, {
          filterProperties: ar
        })).then((() => {
          Sr()
        }), (rr => {
          Kf.error("Failed to register the Segment integration", rr), Sr()
        }))
      }), Qr)
    }
    const Bf = "posthog-js";

    function Tf(rr) {
      let {
        organization: Sr,
        projectId: Qr,
        prefix: Zr,
        severityAllowList: Wr = ["error"],
        sendExceptionsToPostHog: ar = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return jr => {
        var Ir, fr, Er, pr, xr;
        if ("*" !== Wr && !Wr.includes(jr.level) || !rr.__loaded) return jr;
        jr.tags || (jr.tags = {});
        const mr = rr.requestRouter.endpointFor("ui", `/project/${rr.config.token}/person/${rr.get_distinct_id()}`);
        jr.tags["PostHog Person URL"] = mr, rr.sessionRecordingStarted() && (jr.tags["PostHog Recording URL"] = rr.get_session_replay_url({
          withTimestamp: !0
        }));
        const Nr = (null === (Ir = jr.exception) || void 0 === Ir ? void 0 : Ir.values) || [],
          Ur = Nr.map((rr => YW(YW({}, rr), {}, {
            stacktrace: rr.stacktrace ? YW(YW({}, rr.stacktrace), {}, {
              type: "raw",
              frames: (rr.stacktrace.frames || []).map((rr => YW(YW({}, rr), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          tr = {
            $exception_message: (null === (fr = Nr[0]) || void 0 === fr ? void 0 : fr.value) || jr.message,
            $exception_type: null === (Er = Nr[0]) || void 0 === Er ? void 0 : Er.type,
            $exception_level: jr.level,
            $exception_list: Ur,
            $sentry_event_id: jr.event_id,
            $sentry_exception: jr.exception,
            $sentry_exception_message: (null === (pr = Nr[0]) || void 0 === pr ? void 0 : pr.value) || jr.message,
            $sentry_exception_type: null === (xr = Nr[0]) || void 0 === xr ? void 0 : xr.type,
            $sentry_tags: jr.tags
          };
        var hr;
        return Sr && Qr && (tr.$sentry_url = (Zr || "https://sentry.io/organizations/") + Sr + "/issues/?project=" + Qr + "&query=" + jr.event_id), ar && (null === (hr = rr.exceptions) || void 0 === hr || hr.sendExceptionEvent(tr)), jr
      }
    }
    var vf = class {
        constructor(rr, Sr, Qr, Zr, Wr, ar) {
          this.name = Bf, this.setupOnce = function(jr) {
            jr(Tf(rr, {
              organization: Sr,
              projectId: Qr,
              prefix: Zr,
              severityAllowList: Wr,
              sendExceptionsToPostHog: null == ar || ar
            }))
          }
        }
      },
      Of = class {
        constructor(rr) {
          this._onSessionIdChange = (rr, Sr, Qr) => {
            Qr && (Qr.noSessionId || Qr.activityTimeout || Qr.sessionPastMaximumLength || Qr.crossTabAdoption) && (Cj.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: rr,
              changeReason: Qr
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = rr, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var rr;
          this._unsubscribeSessionId = null === (rr = this._instance.sessionManager) || void 0 === rr ? void 0 : rr.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var rr;
          null === (rr = this._unsubscribeSessionId) || void 0 === rr || rr.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(rr, Sr) {
          var Qr;
          const Zr = this._previousPageViewProperties(rr, Sr);
          return this._currentPageview = {
            pathname: null !== (Qr = null == DS ? void 0 : DS.location.pathname) && void 0 !== Qr ? Qr : "",
            pageViewId: Sr,
            timestamp: rr
          }, this._instance.scrollManager.resetContext(), Zr
        }
        doPageLeave(rr) {
          var Sr;
          return this._previousPageViewProperties(rr, null === (Sr = this._currentPageview) || void 0 === Sr ? void 0 : Sr.pageViewId)
        }
        doEvent() {
          var rr;
          return {
            $pageview_id: null === (rr = this._currentPageview) || void 0 === rr ? void 0 : rr.pageViewId
          }
        }
        _previousPageViewProperties(rr, Sr) {
          const Qr = this._currentPageview;
          if (!Qr) return {
            $pageview_id: Sr
          };
          let Zr = {
            $pageview_id: Sr,
            $prev_pageview_id: Qr.pageViewId
          };
          const Wr = this._instance.scrollManager.getContext();
          if (Wr && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: rr,
              lastScrollY: Sr,
              maxScrollY: Qr,
              maxContentHeight: ar,
              lastContentY: jr,
              maxContentY: Ir
            } = Wr;
            if (!(BQ(rr) || BQ(Sr) || BQ(Qr) || BQ(ar) || BQ(jr) || BQ(Ir))) {
              rr = Math.ceil(rr), Sr = Math.ceil(Sr), Qr = Math.ceil(Qr), ar = Math.ceil(ar), jr = Math.ceil(jr), Ir = Math.ceil(Ir);
              const Wr = rr > 1 ? bQ(Sr / rr, 0, 1, Cj) : 1,
                fr = rr > 1 ? bQ(Qr / rr, 0, 1, Cj) : 1,
                Er = ar > 1 ? bQ(jr / ar, 0, 1, Cj) : 1,
                pr = ar > 1 ? bQ(Ir / ar, 0, 1, Cj) : 1;
              Zr = Aj(Zr, {
                $prev_pageview_last_scroll: Sr,
                $prev_pageview_last_scroll_percentage: Wr,
                $prev_pageview_max_scroll: Qr,
                $prev_pageview_max_scroll_percentage: fr,
                $prev_pageview_last_content: jr,
                $prev_pageview_last_content_percentage: Er,
                $prev_pageview_max_content: Ir,
                $prev_pageview_max_content_percentage: pr
              })
            }
          }
          return Qr.pathname && (Zr.$prev_pageview_pathname = Qr.pathname), Qr.timestamp && (Zr.$prev_pageview_duration = (rr.getTime() - Qr.timestamp.getTime()) / 1e3), Zr
        }
      };
    const Lf = ["flags", "surveys"],
      lf = {
        [yr]: {
          exposure: "hidden"
        },
        [Or]: {
          exposure: "hidden"
        },
        [Lr]: {
          exposure: "hidden"
        },
        [qr]: {
          exposure: "hidden"
        },
        [Xr]: {
          exposure: "hidden"
        },
        [Hr]: {
          exposure: "hidden"
        },
        [Rr]: {
          exposure: "event"
        },
        [gr]: {
          exposure: "hidden"
        },
        [ir]: {
          exposure: "hidden"
        },
        [Cr]: {
          exposure: "event"
        },
        [Mr]: {
          exposure: "hidden"
        },
        [Gr]: {
          exposure: "event"
        },
        [kr]: {
          exposure: "event"
        },
        [Ar]: {
          exposure: "event"
        },
        [Vr]: {
          exposure: "hidden"
        },
        [wr]: {
          exposure: "event"
        },
        [cr]: {
          exposure: "hidden"
        },
        [Fr]: {
          exposure: "hidden"
        },
        [sr]: {
          exposure: "hidden"
        },
        [ur]: {
          exposure: "event"
        },
        [or]: {
          exposure: "event",
          shouldSkipFromEventProperties: rr => OQ(rr)
        },
        [rS]: {
          exposure: "event"
        },
        [SS]: {
          exposure: "event"
        },
        [QS]: {
          exposure: "event"
        },
        [ZS]: {
          exposure: "event"
        },
        [WS]: {
          exposure: "hidden"
        },
        [Nr]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Ir]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [jr]: {
          exposure: "hidden"
        },
        [fr]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Yr]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [xr]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [mr]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [nr]: {
          exposure: "hidden"
        },
        [er]: {
          exposure: "hidden"
        },
        [tr]: {
          exposure: "hidden"
        },
        [Ur]: {
          exposure: "hidden"
        },
        [jS]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [IS]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [fS]: {
          exposure: "event"
        },
        [ES]: {
          exposure: "hidden"
        },
        [pS]: {
          exposure: "hidden"
        },
        [xS]: {
          exposure: "hidden"
        },
        [mS]: {
          exposure: "hidden"
        },
        [NS]: {
          exposure: "hidden"
        },
        [US]: {
          exposure: "event"
        },
        [tS]: {
          exposure: "event"
        },
        [hS]: {
          exposure: "event"
        },
        [zS]: {
          exposure: "event"
        },
        [hr]: {
          exposure: "hidden"
        },
        [zr]: {
          exposure: "hidden"
        },
        [aS]: {
          exposure: "event"
        },
        [Er]: {
          exposure: "hidden"
        },
        [pr]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [YS]: {
          exposure: "hidden"
        },
        [nS]: {
          exposure: "hidden"
        },
        [eS]: {
          exposure: "hidden"
        },
        [KS]: {
          exposure: "hidden"
        },
        [yS]: {
          exposure: "hidden"
        },
        [BS]: {
          exposure: "hidden"
        },
        [TS]: {
          exposure: "hidden"
        },
        [br]: {
          exposure: "event"
        },
        [Jr]: {
          exposure: "event"
        },
        [Dr]: {
          exposure: "event"
        },
        [dr]: {
          exposure: "event"
        },
        [LS]: {
          exposure: "event"
        },
        [lS]: {
          exposure: "event"
        },
        [XS]: {
          exposure: "hidden"
        },
        [PS]: {
          exposure: "hidden"
        },
        [HS]: {
          exposure: "hidden"
        },
        [qS]: {
          exposure: "hidden"
        },
        [RS]: {
          exposure: "hidden"
        },
        [gS]: {
          exposure: "hidden"
        },
        [CS]: {
          exposure: "hidden"
        },
        [MS]: {
          exposure: "hidden"
        },
        [GS]: {
          exposure: "hidden"
        },
        [kS]: {
          exposure: "event"
        }
      },
      Xf = [
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
      Pf = rr => {
        const Sr = lf[rr];
        if (Sr) return Sr;
        for (const [Qr, Zr] of Xf)
          if (0 === rr.indexOf(Qr)) return Zr
      };

    function Hf() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (Zr) {
        return
      }
    }
    const qf = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (Zr) {
          return !1
        }
      },
      Rf = (rr, Sr) => rr >= Sr && qf(),
      gf = (rr, Sr, Qr, Zr) => {
        if (0 === rr) {
          if (qf()) {
            const rr = Sr + 1;
            return rr === Qr && Zr(), rr
          }
          return Sr
        }
        return 0
      },
      Cf = (rr, Sr) => {
        try {
          let Qr;
          return JSON.stringify(rr, ((rr, Sr) => {
            var Zr;
            return CQ(Sr) ? (null !== (Zr = Qr) && void 0 !== Zr || (Qr = new WeakMap), Qr.has(Sr) || Qr.set(Sr, cj(Sr)), Qr.get(Sr)) : "bigint" == typeof Sr ? Sr.toString() : Sr
          }), Sr)
        } catch (Sr) {
          return tQ(rr)
        }
      },
      Mf = rr => {
        const Sr = null == uS ? void 0 : uS.createElement("a");
        return BQ(Sr) ? null : (Sr.href = rr, Sr)
      },
      Gf = function(rr, Sr) {
        const Qr = ((rr.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let Zr;
        for (let Wr = 0; Qr.length > Wr; Wr++) {
          const rr = Qr[Wr].split("=");
          if (rr[0] === Sr) {
            Zr = rr;
            break
          }
        }
        if (!nQ(Zr) || 2 > Zr.length) return "";
        {
          let rr = Zr[1];
          try {
            rr = decodeURIComponent(rr)
          } catch (Sr) {
            Cj.error("Skipping decoding for malformed query param: " + rr)
          }
          return rr.replace(/\+/g, " ")
        }
      },
      kf = function(rr, Sr, Qr) {
        if (!rr || !Sr || !Sr.length) return rr;
        const Zr = rr.split("#"),
          Wr = Zr[1],
          ar = (Zr[0] || "").split("?"),
          jr = ar[1],
          Ir = ar[0],
          fr = (jr || "").split("&"),
          Er = [];
        for (let xr = 0; fr.length > xr; xr++) {
          const rr = fr[xr].split("=");
          nQ(rr) && (Sr.includes(rr[0]) ? Er.push(rr[0] + "=" + Qr) : Er.push(fr[xr]))
        }
        let pr = Ir;
        return null != jr && (pr += "?" + Er.join("&")), null != Wr && (pr += "#" + Wr), pr
      },
      Af = function(rr, Sr) {
        const Qr = rr.match(new RegExp(Sr + "=([^&]*)"));
        return Qr ? Qr[1] : null
      },
      Vf = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      wf = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Vf],
      Ff = "<masked>",
      of = ["li_fat_id"];

    function bf(rr, Sr, Qr) {
      if (!uS) return {};
      const Zr = Sr ? [...Vf, ...Qr || []] : [],
        Wr = Jf(kf(uS.URL, Zr, Ff), rr),
        ar = function() {
          const rr = {};
          return kj(of, (function(Sr) {
            const Qr = Dj(Sr);
            rr[Sr] = Qr || null
          })), rr
        }();
      return Aj(ar, Wr)
    }

    function Jf(rr, Sr) {
      const Qr = wf.concat(Sr || []),
        Zr = {};
      return kj(Qr, (function(Sr) {
        const Qr = Gf(rr, Sr);
        Zr[Sr] = Qr || null
      })), Zr
    }

    function Df(rr) {
      const Sr = function(rr) {
          return rr ? 0 === rr.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === rr.search("https?://(.*)bing.com") ? "bing" : 0 === rr.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === rr.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(rr),
        Qr = "yahoo" != Sr ? "q" : "p",
        Zr = {};
      if (!OQ(Sr)) {
        Zr.$search_engine = Sr;
        const rr = uS ? Gf(uS.referrer, Qr) : "";
        rr.length && (Zr.ph_keyword = rr)
      }
      return Zr
    }

    function df() {
      return navigator.language || navigator.userLanguage
    }

    function sf() {
      const rr = df();
      return "string" == typeof rr ? rr.split("-")[0] : void 0
    }
    const uf = "$direct";

    function rE() {
      return (null == uS ? void 0 : uS.referrer) || uf
    }

    function SE(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Zr = rr ? [...Vf, ...Sr || []] : [],
        Wr = Qr ? pW(null == rQ ? void 0 : rQ.href) : null == rQ ? void 0 : rQ.href,
        ar = null == Wr ? void 0 : Wr.substring(0, 1e3);
      return {
        r: rE().substring(0, 1e3),
        u: ar ? kf(ar, Zr, Ff) : void 0
      }
    }

    function QE(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var Qr;
      const {
        r: Zr,
        u: Wr
      } = rr, ar = Sr ? pW(Wr) : Wr, jr = {
        $referrer: Zr,
        $referring_domain: null == Zr ? void 0 : Zr == uf ? uf : null === (Qr = Mf(Zr)) || void 0 === Qr ? void 0 : Qr.host
      };
      if (ar) {
        jr.$current_url = ar;
        const rr = Mf(ar);
        jr.$host = null == rr ? void 0 : rr.host, jr.$pathname = null == rr ? void 0 : rr.pathname;
        const Sr = Jf(ar);
        Aj(jr, Sr)
      }
      if (Zr) {
        const rr = Df(Zr);
        Aj(jr, rr)
      }
      return jr
    }

    function ZE() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (Zr) {
        return
      }
    }
    const WE = {
        flags: pr,
        surveys: IS
      },
      aE = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      jE = rr => `${rr}_cookie_identity_change_pending`,
      IE = rr => {
        let Sr = "",
          Qr = 0;
        for (const Zr of rr) {
          const rr = encodeURIComponent(JSON.stringify(Zr).slice(1, -1)).length;
          if (Qr + rr > 1e3) break;
          Sr += Zr, Qr += rr
        }
        return Sr
      },
      fE = "main",
      EE = [Nr, Ir, fr, Yr, xr, pr, mr, tr],
      pE = rr => -1 !== EE.indexOf(rr),
      xE = [Xr, Hr],
      mE = rr => -1 !== xE.indexOf(rr),
      NE = (rr, Sr) => {
        try {
          return JSON.stringify(rr) === JSON.stringify(Sr)
        } catch (ar) {
          return rr === Sr
        }
      },
      UE = rr => {
        if (!rr) return {};
        const Sr = JSON.parse(rr);
        return KQ(Sr) ? Sr : {}
      },
      tE = (rr, Sr) => {
        kj(rr, ((Qr, Zr) => {
          const Wr = Pf(Zr);
          Wr && "event" !== Wr.exposure || {}.hasOwnProperty.call(Sr, Zr) || delete rr[Zr]
        }))
      };
    var hE = class {
      constructor(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !rr.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = rr, this._ownsSplitStorage = Qr, this.props = {}, this._campaign_params_url = void 0, this._name = (rr => {
            let Sr = "";
            return rr.token && (Sr = rr.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), rr.persistence_name ? "ph_" + rr.persistence_name : "ph_" + Sr + "_posthog"
          })(rr), this._disabled = rr.disable_persistence || !!Sr, this.vt = this._buildStorage(rr), this._splitStorage = this._resolveSplitStorage(rr), this.load(Zr), this._markLoadedCrossTabFeatureFlagChangesPending(), rr.debug && Cj.info("Persistence loaded", rr.persistence, YW({}, this.props)), this.update_config(rr, rr, Sr), this.save(), DS) {
          const rr = () => this.flush();
          bj(DS, "beforeunload", rr, {
            capture: !1
          }), bj(DS, "pagehide", rr, {
            capture: !1
          }), this._onStorage = rr => {
            if (this._splitStorageEligible && (!rr.storageArea || rr.storageArea === (null == DS ? void 0 : DS.localStorage)) && rr.key)
              if (rr.key !== this._name) {
                if (this._splitStorage) {
                  const Sr = Lf.find((Sr => rr.key === this._groupEntryName(Sr)));
                  Sr && this._syncCrossTabFeatureFlagProperties(rr.key, Sr)
                }
              } else this._syncCrossTabFeatureFlagProperties(rr.key, fE)
          }, bj(DS, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(rr) {
        Object.entries(rr).forEach((rr => {
          let [Sr, Qr] = rr;
          const Zr = this._pendingCrossTabFeatureFlagChanges.get(Sr);
          if (!pE(Sr) || !0 === Zr) return;
          if (!0 === Qr) return void this._setCrossTabFeatureFlagChangesPending(Sr, !0);
          const Wr = new Set(Zr || []);
          Qr.forEach((rr => Wr.add(rr))), Wr.size && this._setCrossTabFeatureFlagChangesPending(Sr, Wr)
        }))
      }
      onCrossTabFeatureFlagChange(rr) {
        return this._crossTabFeatureFlagHandlers.add(rr), () => this._crossTabFeatureFlagHandlers.delete(rr)
      }
      destroy() {
        this._onStorage && DS && (DS.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(rr, Sr) {
        let Qr, Zr, Wr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (Zr = EI._get(rr), OQ(Zr)) {
            const rr = this._slotWriteState(Sr);
            return rr.storageValue = null, Sr !== fE && (rr.persisted = !1), !1
          }
          Qr = UE(Zr)
        } catch (rr) {
          return !1
        }
        const ar = Sr === fE ? Qr : EI._parse(this._name);
        if (ar && this._hasCrossTabFeatureFlagIdentityMismatch(ar)) return !1;
        const jr = this._mergeCrossTabFeatureFlagProperties(Qr, Sr, Wr);
        return Sr === fE && this._splitStorage && !NE(this._partitionProps().main, Qr) || this._rememberCrossTabStorageFingerprint(Qr, Sr, !0, Zr), jr
      }
      _hasCrossTabFeatureFlagIdentityMismatch(rr) {
        const Sr = this.props[Br],
          Qr = rr[Br];
        return !BQ(Sr) && !BQ(Qr) && Sr !== Qr
      }
      _rememberCrossTabStorageFingerprint(rr, Sr, Qr, Zr) {
        const Wr = this._slotWriteState(Sr);
        Wr.storageValue = Zr, Sr !== fE && (Wr.persisted = Qr);
        try {
          Wr.fingerprint = this._entryFingerprint(rr, Sr)
        } catch (rr) {
          Wr.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(rr, Sr, Qr) {
        let Zr = !1;
        return EE.forEach((Qr => {
          var Wr;
          const ar = null === (Wr = Pf(Qr)) || void 0 === Wr ? void 0 : Wr.storageGroup;
          if (Sr === fE && this._splitStorage && ar || Sr !== fE && ar !== Sr) return;
          const jr = Qr in rr,
            Ir = this._mergePendingCrossTabFeatureFlagChanges(Qr, jr ? rr[Qr] : void 0),
            fr = this._pendingCrossTabFeatureFlagChanges.has(Qr) ? Qr in this.props : jr;
          fr === Qr in this.props && NE(Ir, this.props[Qr]) || (fr ? this._setProp(Qr, Ir, !1) : this._deleteProp(Qr, !1), Zr = !0)
        })), Zr && Qr && this._crossTabFeatureFlagHandlers.forEach((rr => rr())), Zr
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const rr = EI._get(this._name),
            Sr = this._slotWriteState(fE);
          let Qr, Zr = !1,
            Wr = !1;
          if (rr !== Sr.storageValue)
            if (OQ(rr)) Sr.storageValue = null;
            else {
              if (Qr = UE(rr), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(Qr), this._crossTabFeatureFlagIdentityMismatch) return !1;
              Wr = this._mergeCrossTabFeatureFlagProperties(Qr, fE, !1), !this._splitStorage || NE(this._partitionProps().main, Qr) ? this._rememberCrossTabStorageFingerprint(Qr, fE, !0, rr) : Sr.storageValue = rr, Zr = !0
            } return this._splitStorage && Lf.forEach((rr => {
            const Sr = EI._get(this._groupEntryName(rr)),
              ar = this._slotWriteState(rr),
              jr = Qr || {},
              Ir = Zr && EE.some((Sr => {
                var Qr;
                return (null === (Qr = Pf(Sr)) || void 0 === Qr ? void 0 : Qr.storageGroup) === rr && Sr in jr
              }));
            if (Sr === ar.storageValue && !Ir) return;
            if (OQ(Sr)) return ar.storageValue = null, ar.persisted = !1, void(Ir && (Wr = this._mergeCrossTabFeatureFlagProperties(jr, rr, !1) || Wr));
            const fr = UE(Sr);
            Wr = this._mergeCrossTabFeatureFlagProperties(fr, rr, !1) || Wr, this._rememberCrossTabStorageFingerprint(fr, rr, !0, Sr)
          })), Wr
        } catch (Zr) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(rr, Sr) {
        this._pendingCrossTabFeatureFlagChanges.set(rr, Sr);
        const Qr = Pf(rr);
        (null == Qr ? void 0 : Qr.volatile) || (this._slotWriteState((this._splitStorage ? null == Qr ? void 0 : Qr.storageGroup : void 0) || fE).fingerprint = void 0, this._markGroupDirty(rr))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        EE.forEach((rr => this._pendingCrossTabFeatureFlagChanges.set(rr, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const rr = EI._get(this._name),
            Sr = UE(rr);
          this._slotWriteState(fE).storageValue = rr, EE.forEach((rr => {
            var Qr;
            const Zr = this._splitStorage ? null === (Qr = Pf(rr)) || void 0 === Qr ? void 0 : Qr.storageGroup : void 0,
              Wr = Zr ? EI._get(this._groupEntryName(Zr)) : null;
            if (Zr) {
              const rr = this._slotWriteState(Zr);
              rr.storageValue = Wr, rr.persisted = !OQ(Wr)
            }
            const ar = Zr && !OQ(Wr) ? UE(Wr) : Sr;
            rr in this.props ? this._markPendingCrossTabFeatureFlagChanges(rr, ar[rr], this.props[rr]) : rr in ar && this._setCrossTabFeatureFlagChangesPending(rr, !0)
          }))
        } catch (Zr) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(rr, Sr) {
        const Qr = this._pendingCrossTabFeatureFlagChanges.get(rr);
        if (!Qr) return Sr;
        if (!0 === Qr) return this.props[rr];
        if ("$active_feature_flags" === rr) {
          const Zr = new Set(nQ(Sr) ? Sr : []),
            Wr = new Set(nQ(this.props[rr]) ? this.props[rr] : []);
          return Qr.forEach((rr => Wr.has(rr) ? Zr.add(rr) : Zr.delete(rr))), Array.from(Zr)
        }
        const Zr = KQ(Sr) ? YW({}, Sr) : {},
          Wr = KQ(this.props[rr]) ? this.props[rr] : {};
        return Qr.forEach((rr => {
          rr in Wr ? Zr[rr] = Wr[rr] : delete Zr[rr]
        })), Zr
      }
      _markPendingCrossTabFeatureFlagChanges(rr, Sr, Qr) {
        if (!pE(rr)) return;
        const Zr = this._pendingCrossTabFeatureFlagChanges.get(rr);
        if (!0 === Zr) return;
        let Wr = Sr;
        if (this._splitStorageEligible) try {
          var ar;
          const Sr = this._splitStorage ? null === (ar = Pf(rr)) || void 0 === ar ? void 0 : ar.storageGroup : void 0,
            Qr = Sr ? this._groupEntryName(Sr) : this._name;
          Wr = UE(EI._get(Qr))[rr]
        } catch (rr) {}
        const jr = new Set(Zr || []);
        if ("$active_feature_flags" === rr) {
          if (!BQ(Sr) && !nQ(Sr) || !BQ(Wr) && !nQ(Wr) || !nQ(Qr)) return void this._setCrossTabFeatureFlagChangesPending(rr, !0);
          const Zr = new Set(Sr || []),
            ar = new Set(Wr || []),
            Ir = new Set(Qr);
          new Set([...Zr, ...Ir]).forEach((rr => {
            Zr.has(rr) !== Ir.has(rr) && jr.add(rr)
          })), jr.forEach((rr => {
            ar.has(rr) === Ir.has(rr) && jr.delete(rr)
          }))
        } else {
          if (!KQ(Qr)) return void(NE(Wr, Qr) ? this._pendingCrossTabFeatureFlagChanges.delete(rr) : this._setCrossTabFeatureFlagChangesPending(rr, !0));
          {
            if (!BQ(Sr) && !KQ(Sr) || BQ(Sr) && yQ(Qr) && BQ(Wr)) return void this._setCrossTabFeatureFlagChangesPending(rr, !0);
            const Zr = KQ(Sr) ? Sr : {},
              ar = KQ(Wr) ? Wr : {};
            new Set([...Object.keys(Zr), ...Object.keys(Qr)]).forEach((rr => {
              rr in Zr == rr in Qr && NE(Zr[rr], Qr[rr]) || jr.add(rr)
            })), jr.forEach((rr => {
              rr in ar == rr in Qr && NE(ar[rr], Qr[rr]) && jr.delete(rr)
            }))
          }
        }
        jr.size ? this._setCrossTabFeatureFlagChangesPending(rr, jr) : this._pendingCrossTabFeatureFlagChanges.delete(rr)
      }
      _saveDebounceMs() {
        var rr;
        const Sr = null === (rr = this._config) || void 0 === rr ? void 0 : rr.persistence_save_debounce_ms;
        return lQ(Sr) && Sr > 0 ? Sr : 0
      }
      _rememberCurrentCookieProperties(rr) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (rr) try {
            const Sr = tI(rr, this._config.cookie_persisted_properties || []),
              Qr = zI(Sr, this._config.cookie_persisted_properties || []),
              Zr = JSON.stringify(Sr) + "|" + JSON.stringify(Qr),
              Wr = II._get(this._name) || void 0;
            Wr && nI(this._name, Wr) === Zr && (this._lastSeenCookiePropertiesFingerprint = Zr, this._lastSeenMainCookieValue = Wr)
          } catch (rr) {} else try {
            const rr = II._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = rr ? nI(this._name, rr) : void 0, this._lastSeenMainCookieValue = rr
          } catch (rr) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(rr) {
        let Sr, Qr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !Qr || this._cookieSyncSuppressed || !rr.cookieWinsOnConflict || "localstorage+cookie" !== rr.persistence.toLowerCase()) return !1;
        try {
          Sr = II._get(this._name) || void 0
        } catch (rr) {}
        if (!Sr || Sr === this._lastSeenMainCookieValue) return !1;
        const Zr = nI(this._name, Sr);
        let Wr;
        try {
          Wr = UI(JSON.parse(Sr))
        } catch (rr) {
          return !1
        }
        if ((II._get(this._name) || void 0) !== Sr) return !1;
        this._lastSeenCookiePropertiesFingerprint = Zr, this._lastSeenMainCookieValue = Sr;
        const ar = YI(this._name, Sr),
          jr = [...xI, ...ar.properties],
          mr = {};
        if (Object.keys(Wr).forEach((rr => {
            const Sr = Wr[rr];
            (BQ(Sr) || OQ(Sr) || "" === Sr || "$user_state" === rr && "anonymous" !== Sr && "identified" !== Sr) && (mr[rr] = !0, delete Wr[rr])
          })), yQ(Wr)) return !1;
        const zr = "distinct_id" in Wr || "anonymous" === Wr.$user_state || "identified" === Wr.$user_state,
          nr = this.props,
          er = nr[Br],
          Kr = nr[YS],
          yr = Aj({}, nr);
        [...xI, ...rr.cookie_persisted_properties || []].forEach((rr => {
          if (-1 !== jr.indexOf(rr) && !(rr in Wr) && !mr[rr] && (zr || "distinct_id" !== rr && "$user_state" !== rr)) {
            const Sr = yr[rr];
            (ar.isValid || -1 === xI.indexOf(rr) || !1 !== Sr && 0 !== Sr) && delete yr[rr]
          }
        })), this.props = Aj(yr, Wr), EE.forEach((rr => {
          const Sr = rr in this.props;
          rr in nr === Sr && NE(nr[rr], this.props[rr]) || (Sr ? this._markPendingCrossTabFeatureFlagChanges(rr, nr[rr], this.props[rr]) : this._setCrossTabFeatureFlagChangesPending(rr, !0))
        })), !zr || "$user_state" in Wr || "$user_state" in this.props || this._setProp(YS, VS);
        const Tr = this.props[Br],
          vr = this.props[YS];
        return !zr || Tr === er && vr === Kr || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, BI._set(jE(this._name), !0), this._deleteProp(tr), this._deleteProp(Ir), this._deleteProp(Nr), this._deleteProp(fr), this._deleteProp(Yr), this._deleteProp(xr), this._deleteProp(pr), this._deleteProp(Er), this._deleteProp(hr), "anonymous" !== vr || "identified" !== Kr && "anonymous" !== Wr.$user_state && (BQ(er) || Tr === er) || (tE(this.props, Wr), this._deleteProp(Ur)), "identified" === vr ? this.props.$user_id = Tr : delete this.props.$user_id, this._deleteProp(Or)), !0
      }
      consumeCookieIdentityChange() {
        const rr = jE(this._name),
          Sr = this._cookieIdentityChangePending || !!BI._get(rr);
        return this._cookieIdentityChangePending = !1, Sr && BI._remove(rr), Sr
      }
      _beginCookieSyncSuppression() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !rr || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (BQ(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[fE], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          rr ? this._publishSuppressedCookieSnapshot() : BQ(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(rr) {
        -1 === aE.indexOf(rr.persistence.toLowerCase()) && (Cj.critical("Unknown persistence type " + rr.persistence + "; falling back to localStorage+cookie"), rr.persistence = "localStorage+cookie");
        const Sr = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const Zr = [...xI, ...rr];
          return YW(YW({}, EI), {}, {
            _parse(rr) {
              try {
                let ar, jr = {};
                try {
                  ar = II._get(rr) || void 0, jr = ar ? UI(JSON.parse(ar)) : {}
                } catch (rr) {}
                const Ir = JSON.parse(EI._get(rr) || "{}");
                let fr;
                if (Sr) {
                  const Sr = YI(rr, ar),
                    Qr = [...xI, ...Sr.properties],
                    Er = {};
                  Object.keys(jr).forEach((rr => {
                    const Sr = jr[rr];
                    OQ(Sr) || "" === Sr || "$user_state" === rr && "anonymous" !== Sr && "identified" !== Sr || (Er[rr] = Sr)
                  }));
                  const pr = "distinct_id" in Er || "anonymous" === Er.$user_state || "identified" === Er.$user_state;
                  if (Object.keys(Er).length > 0) {
                    var Wr;
                    const rr = Ir[Br],
                      ar = null !== (Wr = Ir.$user_state) && void 0 !== Wr ? Wr : VS;
                    Zr.forEach((rr => {
                      if (-1 !== Qr.indexOf(rr) && !(rr in jr) && (pr || "distinct_id" !== rr && "$user_state" !== rr)) {
                        const Qr = Ir[rr];
                        (Sr.isValid || -1 === xI.indexOf(rr) || !1 !== Qr && 0 !== Qr) && delete Ir[rr]
                      }
                    })), !pr || "$user_state" in jr || "$user_state" in Ir || (Ir[YS] = VS), !pr || ("distinct_id" in Er ? Er[Br] : Ir[Br]) === rr && ("$user_state" in Er ? Er[YS] : Ir[YS]) === ar || (pI.forEach((rr => delete Ir[rr])), "identified" === Er.$user_state && "distinct_id" in Er ? Ir.$user_id = Er[Br] : delete Ir.$user_id, "identified" !== Er.$user_state && (delete Ir[aS], delete Ir[Ur]), delete Ir.__alias)
                  }
                  fr = Aj(Ir, Er)
                } else fr = Aj(jr, Ir);
                return Qr() || EI._set(rr, fr), fr
              } catch (rr) {}
              return null
            },
            _set(Qr, Zr, Wr, ar, jr, Ir) {
              const fr = EI._set(Qr, Zr, void 0, void 0, Ir);
              try {
                const Er = tI(Zr, rr);
                if (Object.keys(Er).length) {
                  if (Sr) {
                    const Sr = mI(Qr),
                      pr = zI(Er, rr);
                    if (II._set(Sr, pr, Wr, ar, jr, Ir), II._get(Sr) !== JSON.stringify(pr)) {
                      II._remove(Sr, ar);
                      const rr = tI(Zr);
                      return II._set(Qr, rr, Wr, ar, jr, Ir), fr
                    }
                  }
                  II._set(Qr, Er, Wr, ar, jr, Ir)
                }
              } catch (rr) {
                EI._error(rr)
              }
              return fr
            },
            _remove(rr, Sr) {
              try {
                null == DS || DS.localStorage.removeItem(rr), II._remove(rr, Sr), II._remove(mI(rr), Sr)
              } catch (rr) {
                EI._error(rr)
              }
            }
          })
        }(rr.cookie_persisted_properties || [], rr.cookieWinsOnConflict, (() => !!this._disabled));
        let Qr, Zr = !1,
          Wr = !1;
        const ar = rr.persistence.toLowerCase();
        return "localstorage" === ar && EI._is_supported() ? (Qr = EI, Wr = !0) : "localstorage+cookie" === ar && Sr._is_supported() ? (Qr = Sr, Wr = !0, Zr = !0) : "sessionstorage" === ar && BI._is_supported() ? Qr = BI : "memory" === ar ? Qr = KI : "cookie" === ar && II._is_supported() ? (Qr = II, Zr = !0) : Sr._is_supported() ? (Qr = Sr, Wr = !0, Zr = !0) : II._is_supported() ? (Qr = II, Zr = !0) : Qr = KI, this._splitStorageEligible = Wr, this._storesIdentityInCookie = Zr, Qr
      }
      _groupEntryName(rr) {
        return `${this._name}__${rr}`
      }
      _resolveSplitStorage(rr) {
        return this._splitStorageEligible && !!rr.split_storage
      }
      properties() {
        const rr = {};
        return kj(this.props, ((Sr, Qr) => {
          const Zr = Pf(Qr);
          if (!Zr || "event" === Zr.exposure) {
            var Wr;
            if (null == Zr || null === (Wr = Zr.shouldSkipFromEventProperties) || void 0 === Wr ? void 0 : Wr.call(Zr, Sr)) return;
            rr[Qr] = Sr
          }
        })), rr
      }
      load() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !rr) return;
        const Sr = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          Qr = Sr ? EI._parse(this._name) : null;
        let Zr = {};
        if (Sr) try {
          Zr = UI(II._parse(this._name)), kj(Zr, ((rr, Sr) => {
            (BQ(rr) || OQ(rr) || "" === rr) && delete Zr[Sr]
          }))
        } catch (rr) {}
        const Wr = this.vt._parse(this._name);
        if (Wr && (this.props = Aj({}, Wr)), this._splitStorage && this._loadGroupEntries(), Sr && Wr) {
          var ar, jr;
          const rr = null == Qr ? void 0 : Qr[Br],
            Sr = null !== (ar = null == Qr ? void 0 : Qr.$user_state) && void 0 !== ar ? ar : VS,
            Ir = Wr[Br],
            fr = null !== (jr = Wr.$user_state) && void 0 !== jr ? jr : VS;
          if (Ir !== rr || fr !== Sr) {
            this._cookieIdentityChangePending = !0, this._disabled || BI._set(jE(this._name), !0);
            const Qr = Aj({}, this.props);
            pI.forEach((rr => delete Qr[rr])), "anonymous" !== fr || "identified" !== Sr && "anonymous" !== Zr.$user_state && (BQ(rr) || Ir === rr) || (tE(Qr, Zr), delete Qr[Ur]), this.props = Qr;
            const Wr = new Set;
            pI.forEach((rr => {
              var Sr;
              const Qr = null === (Sr = Pf(rr)) || void 0 === Sr ? void 0 : Sr.storageGroup;
              Qr && Wr.add(Qr)
            })), Wr.forEach((rr => {
              if (this._disabled) return;
              const Sr = {};
              kj(this.props, ((Qr, Zr) => {
                var Wr;
                (null === (Wr = Pf(Zr)) || void 0 === Wr ? void 0 : Wr.storageGroup) === rr && (Sr[Zr] = Qr)
              })), yQ(Sr) ? (EI._remove(this._groupEntryName(rr)), this._slotState[rr] = {}) : EI._set(this._groupEntryName(rr), Sr) && (this._slotState[rr] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(Sr, rr)
              })
            }))
          }
        }
        BI._get(jE(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const rr of Lf) {
          const Sr = EI._parse(this._groupEntryName(rr));
          if (Sr && !yQ(Sr)) {
            const Qr = this._slotWriteState(rr);
            Qr.persisted = !0, this._mainCarriesGroupKey(rr) || (Qr.fingerprint = this._entryFingerprint(Sr, rr)), this._groupEntryIsStale(rr, Sr) || Aj(this.props, Sr)
          }
        }
      }
      _mainCarriesGroupKey(rr) {
        return Object.keys(this.props).some((Sr => {
          var Qr;
          return (null === (Qr = Pf(Sr)) || void 0 === Qr ? void 0 : Qr.storageGroup) === rr
        }))
      }
      _groupEntryIsStale(rr, Sr) {
        const Qr = WE[rr];
        if (!Qr) return !1;
        const Zr = Sr[Qr],
          Wr = this.props[Qr];
        return lQ(Zr) && lQ(Wr) && Wr > Zr
      }
      refreshKey(rr) {
        var Sr;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(rr)) return;
        const Qr = this._splitStorage ? null === (Sr = Pf(rr)) || void 0 === Sr ? void 0 : Sr.storageGroup : void 0,
          Zr = Qr ? EI._parse(this._groupEntryName(Qr)) : this.vt._parse(this._name);
        if (Zr && rr in Zr) this._setProp(rr, Zr[rr], !1);
        else {
          if (Qr) {
            const Sr = this.vt._parse(this._name);
            if (Sr && rr in Sr) return void this._setProp(rr, Sr[rr], !1)
          }
          this._deleteProp(rr, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const rr = this._saveDebounceMs();
        rr > 0 ? BQ(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), rr)) : this._writeNow()
      }
      flush() {
        BQ(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !rr) return;
        rr || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || xE.forEach((rr => this.refreshKey(rr))));
        const Sr = !rr && !this._storageMigrationInProgress;
        Sr || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const Qr = !!Sr && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && Cj.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(Qr && this._crossTabFeatureFlagHandlers.forEach((rr => rr())));
        const Zr = this._writeEntry(this.vt, this._name, this.props, fE);
        "written" === Zr && this._rememberCurrentCookieProperties(this.props), "failed" !== Zr && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), Qr && this._crossTabFeatureFlagHandlers.forEach((rr => rr()))
      }
      _writeNowSplit() {
        const {
          main: rr,
          groups: Sr
        } = this._partitionProps(), Qr = this._writeEntry(this.vt, this._name, rr, fE);
        "written" === Qr && this._rememberCurrentCookieProperties(rr), "failed" !== Qr && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), EE.forEach((rr => {
          var Sr;
          (null === (Sr = Pf(rr)) || void 0 === Sr ? void 0 : Sr.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(rr)
        })));
        for (const Wr of Lf) {
          var Zr;
          const rr = Sr[Wr];
          if (yQ(rr) && !(null === (Zr = this._slotState[Wr]) || void 0 === Zr ? void 0 : Zr.persisted)) {
            EE.forEach((rr => {
              var Sr;
              (null === (Sr = Pf(rr)) || void 0 === Sr ? void 0 : Sr.storageGroup) === Wr && this._pendingCrossTabFeatureFlagChanges.delete(rr)
            }));
            continue
          }
          const Qr = this._writeEntry(EI, this._groupEntryName(Wr), rr, Wr);
          "failed" !== Qr && EE.forEach((rr => {
            const Sr = Pf(rr);
            (null == Sr ? void 0 : Sr.storageGroup) !== Wr || "written" !== Qr && Sr.volatile || this._pendingCrossTabFeatureFlagChanges.delete(rr)
          }))
        }
      }
      _partitionProps() {
        const rr = {},
          Sr = {
            flags: {},
            surveys: {}
          };
        return kj(this.props, ((Qr, Zr) => {
          var Wr;
          const ar = null === (Wr = Pf(Zr)) || void 0 === Wr ? void 0 : Wr.storageGroup;
          ar ? Sr[ar][Zr] = Qr : rr[Zr] = Qr
        })), {
          main: rr,
          groups: Sr
        }
      }
      _entryFingerprint(rr, Sr) {
        if (Sr === fE) return JSON.stringify(rr) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const Qr = {};
        return kj(rr, ((rr, Sr) => {
          var Zr;
          Qr[Sr] = (null === (Zr = Pf(Sr)) || void 0 === Zr ? void 0 : Zr.volatile) ? "__volatile__" : rr
        })), JSON.stringify(Qr)
      }
      _writeEntry(rr, Sr, Qr, Zr) {
        const Wr = this._slotWriteState(Zr);
        if (Zr !== fE && !Wr.cU && !BQ(Wr.fingerprint)) return "skipped";
        let ar;
        try {
          if (ar = this._entryFingerprint(Qr, Zr), ar === Wr.fingerprint) return Wr.cU = !1, "skipped"
        } catch (rr) {
          ar = void 0
        }
        return rr._set(Sr, Qr, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (Wr.cU = !1, Zr !== fE && (Wr.persisted = !0), BQ(ar) || (Wr.fingerprint = ar), this._splitStorageEligible && (Wr.storageValue = EI._get(Sr)), "written") : (this._config.debug && Cj.warn(`failed to persist storage entry "${Sr}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: rr = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), BQ(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.vt._remove(this._name, !1), this.vt._remove(this._name, !0), !rr && this._ownsSplitStorage)
          for (const Sr of Lf) EI._remove(this._groupEntryName(Sr));
        rr ? delete this._slotState[fE] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(rr, Sr, Qr) {
        if (KQ(rr)) {
          this.syncCookieProperties(), BQ(Sr) && (Sr = "None"), this._expire_days = BQ(Qr) ? this._default_expiry : Qr;
          let Zr = !1;
          if (kj(rr, ((rr, Qr) => {
              this.props.hasOwnProperty(Qr) && this.props[Qr] !== Sr || (this._setProp(Qr, rr), Zr = !0)
            })), Zr) return this.save(), !0
        }
        return !1
      }
      register(rr, Sr) {
        if (KQ(rr)) {
          this.syncCookieProperties(), this._expire_days = BQ(Sr) ? this._default_expiry : Sr;
          let Qr = !1;
          if (kj(rr, ((Sr, Zr) => {
              rr.hasOwnProperty(Zr) && (this.props[Zr] !== Sr || KQ(Sr) || nQ(Sr)) && (this._setProp(Zr, Sr), Qr = !0)
            })), Qr) return this.save(), !0
        }
        return !1
      }
      unregister(rr) {
        this.syncCookieProperties();
        const Sr = "string" == typeof rr ? [rr] : rr;
        let Qr = !1;
        for (const Zr of Sr) Zr in this.props && (this._deleteProp(Zr), Qr = !0);
        Qr && this.save()
      }
      update_campaign_params() {
        const rr = null == uS ? void 0 : uS.URL;
        if (rr === this._campaign_params_url) return;
        const Sr = bf(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          Qr = !yQ(wj(Sr));
        return Qr && this.register(Sr), this._campaign_params_url = rr, Qr ? Sr : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const rr = null == uS ? void 0 : uS.referrer;
          return rr ? Df(rr) : {}
        }())
      }
      update_referrer_info() {
        var rr;
        this.register_once({
          $referrer: rE(),
          $referring_domain: (null == uS ? void 0 : uS.referrer) && (null === (rr = Mf(uS.referrer)) || void 0 === rr ? void 0 : rr.host) || uf
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const rr = SE(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [BS]: this._storesIdentityInCookie ? {
            r: IE(rr.r),
            u: rr.u ? IE(rr.u) : void 0
          } : rr
        }, void 0)
      }
      get_initial_props() {
        const rr = {};
        kj([yS, KS], (Sr => {
          const Qr = this.props[Sr];
          Qr && kj(Qr, (function(Sr, Qr) {
            rr["$initial_" + UQ(Qr)] = Sr
          }))
        }));
        const Sr = this.props[BS];
        if (Sr) {
          const Qr = function(rr) {
            const Sr = QE(rr, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              Qr = {};
            return kj(Sr, (function(rr, Sr) {
              Qr[`$initial_${UQ(Sr)}`] = rr
            })), Qr
          }(Sr, this._config.disable_capture_url_hashes);
          Aj(rr, Qr)
        }
        return rr
      }
      safe_merge(rr) {
        return kj(this.props, (function(Sr, Qr) {
          Qr in rr || (rr[Qr] = Sr)
        })), rr
      }
      update_config(rr, Sr, Qr) {
        const Zr = rr.persistence !== Sr.persistence,
          Wr = !((rr, Sr) => {
            if (rr.length !== Sr.length) return !1;
            const Qr = [...rr].sort(),
              Zr = [...Sr].sort();
            return Qr.every(((rr, Sr) => rr === Zr[Sr]))
          })(rr.cookie_persisted_properties || [], Sr.cookie_persisted_properties || []),
          ar = Zr || Wr,
          jr = rr.cookieWinsOnConflict !== Sr.cookieWinsOnConflict,
          Ir = rr.disable_persistence || !!Qr,
          fr = !!this._disabled && !Ir;
        Ir || this._syncCookieProperties(Sr, fr), this._config = rr, !Ir && (Zr || Wr || jr) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(YW(YW({}, rr), {}, {
          cookie_persisted_properties: Sr.cookie_persisted_properties
        }), fr));
        const Er = ar || jr ? this._buildStorage(rr) : this.vt;
        this._truncateExistingPersonInfoForCookie();
        const pr = this._resolveSplitStorage(rr),
          xr = ar || pr !== this._splitStorage,
          mr = !Ir && (xr || rr.cross_subdomain_cookie !== this._cross_subdomain || rr.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(fr);
        this._storageMigrationInProgress = xr;
        try {
          if (this._default_expiry = this._expire_days = rr.cookie_expiration, this.set_disabled(Ir), this.set_cross_subdomain(rr.cross_subdomain_cookie), this.set_secure(rr.secure_cookie), xr) {
            const rr = this.props;
            this.clear(), this.vt = Er, this._splitStorage = pr, this.props = rr, this.save()
          } else jr && (this.vt = Er, Ir || (delete this._slotState[fE], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, mr && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const rr = this.props[BS];
        if (!this._storesIdentityInCookie || !KQ(rr) || "string" != typeof rr.r) return;
        const Sr = IE(rr.r),
          Qr = "string" == typeof rr.u ? IE(rr.u) : rr.u;
        Sr === rr.r && Qr === rr.u || this._setProp(BS, YW(YW({}, rr), {}, {
          r: Sr,
          u: Qr
        }))
      }
      set_disabled(rr) {
        this._disabled = rr, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(rr) {
        rr !== this._cross_subdomain && (this._cross_subdomain = rr, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(rr) {
        rr !== this._secure && (this._secure = rr, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(rr, Sr) {
        const Qr = this.props.__timers || {};
        Qr[rr] = Sr, this._setProp(qr, Qr), this.save()
      }
      remove_event_timer(rr) {
        const Sr = this.props.__timers || {},
          Qr = Sr[rr];
        return BQ(Qr) || (delete Sr[rr], this._setProp(qr, Sr), this.save()), Qr
      }
      get_property(rr) {
        return this.props[rr]
      }
      set_property(rr, Sr) {
        this._setProp(rr, Sr), this.save()
      }
      _setProp(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var Zr;
        const Wr = this.props[rr];
        this.props[rr] = Sr, Qr && ("distinct_id" !== rr && "$user_state" !== rr || Wr === Sr || (this._localIdentityChangePending = !0), mE(rr) && !NE(Wr, Sr) && this._metaIdentifierChangePending.add(rr), this._markPendingCrossTabFeatureFlagChanges(rr, Wr, Sr), (null === (Zr = Pf(rr)) || void 0 === Zr ? void 0 : Zr.volatile) || this._markGroupDirty(rr))
      }
      _deleteProp(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[rr], Sr && (pE(rr) && this._setCrossTabFeatureFlagChangesPending(rr, !0), mE(rr) && this._metaIdentifierChangePending.add(rr), this._markGroupDirty(rr))
      }
      _markGroupDirty(rr) {
        var Sr;
        const Qr = null === (Sr = Pf(rr)) || void 0 === Sr ? void 0 : Sr.storageGroup;
        Qr && (this._slotWriteState(Qr).cU = !0)
      }
      _slotWriteState(rr) {
        return this._slotState[rr] || (this._slotState[rr] = {})
      }
    };
    const zE = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      YE = "events",
      nE = "cancelEvents",
      eE = "popover",
      KE = "api",
      yE = "widget",
      BE = "survey shown",
      TE = "survey dismissed",
      vE = "survey sent",
      OE = "$survey_id",
      LE = "$survey_iteration",
      lE = "$survey_last_seen_date",
      XE = "popover",
      PE = "inline";

    function HE(rr) {
      let Sr = !0;
      return {
        dispose() {
          if (Sr) {
            Sr = !1;
            const Qr = rr();
            Qr && eQ(Qr.then) && Qr.then(void 0, (() => {}))
          }
        }
      }
    }
    const qE = "product tour shown",
      RE = "$product_tour_last_seen_date",
      gE = "$product_tour_type",
      CE = Mj("[RateLimiter]");
    var ME = class {
      constructor(rr) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = rr => {
          const Sr = rr.text;
          if (Sr && Sr.length) try {
            (JSON.parse(Sr).quota_limited || []).forEach((rr => {
              CE.info(`${rr||"events"} is quota limited.`), this.serverLimits[rr] = (new Date).getTime() + 6e4
            }))
          } catch (rr) {
            return void CE.warn(`could not rate limit - continuing. Error: "${null==rr?void 0:rr.message}"`, {
              text: Sr
            })
          }
        }, this.instance = rr, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var rr;
        return (null === (rr = this.instance.config.rate_limiting) || void 0 === rr ? void 0 : rr.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var rr;
        return Math.max((null === (rr = this.instance.config.rate_limiting) || void 0 === rr ? void 0 : rr.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var Sr, Qr, Zr;
        const {
          captureEventsBurstLimit: Wr,
          captureEventsPerSecond: ar
        } = this, jr = (new Date).getTime(), Ir = null !== (Sr = null === (Qr = this.instance.persistence) || void 0 === Qr ? void 0 : Qr.get_property("$capture_rate_limit")) && void 0 !== Sr ? Sr : {
          tokens: Wr,
          last: jr
        };
        Ir.tokens += (jr - Ir.last) / 1e3 * ar, Ir.last = jr, Ir.tokens > Wr && (Ir.tokens = Wr);
        const fr = 1 > Ir.tokens;
        if (fr || rr || (Ir.tokens = Math.max(0, Ir.tokens - 1)), fr && !rr) {
          const rr = (lQ(Ir.dropped) ? Ir.dropped : 0) + 1;
          Ir.dropped = rr, !this.lastEventRateLimited && this._captureWarning(rr) && (Ir.dropped = 0)
        }
        return this.lastEventRateLimited = fr, null === (Zr = this.instance.persistence) || void 0 === Zr || Zr.set_property("$capture_rate_limit", Ir), {
          isRateLimited: fr,
          remainingTokens: Ir.tokens
        }
      }
      _isPropertyAllowed(rr) {
        const Sr = this.instance.config.property_denylist;
        return !nQ(Sr) || !Sr.includes(rr)
      }
      _triggeringPage() {
        var rr;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == rQ ? void 0 : rQ.pathname)) return `${null!==(rr=rQ.origin)&&void 0!==rr?rr:""}${rQ.pathname}`
      }
      _captureWarning(rr) {
        var Sr, Qr;
        const {
          captureEventsBurstLimit: Zr,
          captureEventsPerSecond: Wr
        } = this, ar = this._triggeringPage(), jr = this._isPropertyAllowed("$session_id") ? null === (Sr = (Qr = this.instance).get_session_id) || void 0 === Sr ? void 0 : Sr.call(Qr) : void 0, Ir = [`${rr} event(s) dropped since the last warning`, ar ? `triggered on ${ar}` : void 0, jr ? `session ${jr}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${Ir}. Config is set to ${Wr} events per second and ${Zr} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(rr) {
        const Sr = this.serverLimits[rr || "events"] || !1;
        return !1 !== Sr && (new Date).getTime() < Sr
      }
    };
    const GE = Mj("[RemoteConfig]");
    var kE = class {
      constructor(rr) {
        this._instance = rr
      }
      get remoteConfig() {
        var rr;
        return null === (rr = IQ._POSTHOG_REMOTE_CONFIG) || void 0 === rr || null === (rr = rr[this._instance.config.token]) || void 0 === rr ? void 0 : rr.config
      }
      _loadRemoteConfigJs(rr) {
        var Sr, Qr, Zr;
        (null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.loadExternalDependency) ? null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this._instance, "remote-config", (() => rr(this.remoteConfig))): rr()
      }
      _loadRemoteConfigJSON(rr) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: rr
        })
      }
      load() {
        try {
          if (this.remoteConfig) return GE.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void GE.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((rr => {
            if (!rr) return GE.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((rr => {
              this._onRemoteConfig(rr.json, rr)
            }));
            this._onRemoteConfig(rr)
          }))
        } catch (Zr) {
          GE.error("Error loading remote config", Zr), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(rr, Sr) {
        !rr && Sr && (0 === Sr.statusCode ? Sr.error || GE.warn("Failed to fetch remote config from PostHog.") : GE.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(rr ? {
            ok: !0,
            config: rr
          } : {
            ok: !1
          })
        } catch (rr) {
          GE.error("Error applying remote config", rr)
        }
        if (!1 !== (null == rr ? void 0 : rr.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var Qr;
          null === (Qr = this._instance.featureFlags) || void 0 === Qr || Qr.ensureFlagsLoaded()
        } catch (rr) {
          GE.error("Error loading feature flags", rr)
        }
      }
    };
    var AE = Uint8Array,
      VE = Uint16Array,
      iE = Uint32Array,
      wE = new AE([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      cE = new AE([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      FE = new AE([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      oE = function(rr, Sr) {
        for (var Qr = new VE(31), Zr = 0; 31 > Zr; ++Zr) Qr[Zr] = Sr += 1 << rr[Zr - 1];
        var Wr = new iE(Qr[30]);
        for (Zr = 1; 30 > Zr; ++Zr)
          for (var ar = Qr[Zr]; Qr[Zr + 1] > ar; ++ar) Wr[ar] = ar - Qr[Zr] << 5 | Zr;
        return [Qr, Wr]
      },
      bE = oE(wE, 2),
      JE = bE[1];
    bE[0][28] = 258, JE[258] = 28;
    for (var DE = oE(cE, 0)[1], dE = new VE(32768), sE = 0; 32768 > sE; ++sE) {
      var uE = (43690 & sE) >>> 1 | (21845 & sE) << 1;
      dE[sE] = ((65280 & (uE = (61680 & (uE = (52428 & uE) >>> 2 | (13107 & uE) << 2)) >>> 4 | (3855 & uE) << 4)) >>> 8 | (255 & uE) << 8) >>> 1
    }
    var rp = function(rr, Sr, Qr) {
        for (var Zr = rr.length, Wr = 0, ar = new VE(Sr); Zr > Wr; ++Wr) ++ar[rr[Wr] - 1];
        var jr, Ir = new VE(Sr);
        for (Wr = 0; Sr > Wr; ++Wr) Ir[Wr] = Ir[Wr - 1] + ar[Wr - 1] << 1;
        if (Qr) {
          jr = new VE(1 << Sr);
          var fr = 15 - Sr;
          for (Wr = 0; Zr > Wr; ++Wr)
            if (rr[Wr])
              for (var Er = Wr << 4 | rr[Wr], pr = Sr - rr[Wr], xr = Ir[rr[Wr] - 1]++ << pr, mr = xr | (1 << pr) - 1; mr >= xr; ++xr) jr[dE[xr] >>> fr] = Er
        } else
          for (jr = new VE(Zr), Wr = 0; Zr > Wr; ++Wr) jr[Wr] = dE[Ir[rr[Wr] - 1]++] >>> 15 - rr[Wr];
        return jr
      },
      Sp = new AE(288);
    for (sE = 0; 144 > sE; ++sE) Sp[sE] = 8;
    for (sE = 144; 256 > sE; ++sE) Sp[sE] = 9;
    for (sE = 256; 280 > sE; ++sE) Sp[sE] = 7;
    for (sE = 280; 288 > sE; ++sE) Sp[sE] = 8;
    var Qp = new AE(32);
    for (sE = 0; 32 > sE; ++sE) Qp[sE] = 5;
    var Zp = rp(Sp, 9, 0),
      Wp = rp(Qp, 5, 0),
      ap = function(rr) {
        return (rr / 8 | 0) + (7 & rr && 1)
      },
      jp = function(rr, Sr, Qr) {
        (null == Sr || 0 > Sr) && (Sr = 0), (null == Qr || Qr > rr.length) && (Qr = rr.length);
        var Zr = new(rr instanceof VE ? VE : rr instanceof iE ? iE : AE)(Qr - Sr);
        return Zr.set(rr.subarray(Sr, Qr)), Zr
      },
      Ip = function(rr, Sr, Qr) {
        var Zr = Sr / 8 | 0;
        rr[Zr] |= Qr <<= 7 & Sr, rr[Zr + 1] |= Qr >>> 8
      },
      fp = function(rr, Sr, Qr) {
        var Zr = Sr / 8 | 0;
        rr[Zr] |= Qr <<= 7 & Sr, rr[Zr + 1] |= Qr >>> 8, rr[Zr + 2] |= Qr >>> 16
      },
      Ep = function(rr, Sr) {
        for (var Qr = [], Zr = 0; rr.length > Zr; ++Zr) rr[Zr] && Qr.push({
          s: Zr,
          f: rr[Zr]
        });
        var Wr = Qr.length,
          ar = Qr.slice();
        if (!Wr) return [new AE(0), 0];
        if (1 == Wr) {
          var jr = new AE(Qr[0].s + 1);
          return jr[Qr[0].s] = 1, [jr, 1]
        }
        Qr.sort((function(rr, Sr) {
          return rr.f - Sr.f
        })), Qr.push({
          s: -1,
          f: 25001
        });
        var Ir = Qr[0],
          fr = Qr[1],
          Er = 0,
          pr = 1,
          xr = 2;
        for (Qr[0] = {
            s: -1,
            f: Ir.f + fr.f,
            l: Ir,
            r: fr
          }; pr != Wr - 1;) Ir = Qr[Qr[xr].f > Qr[Er].f ? Er++ : xr++], fr = Qr[Er != pr && Qr[xr].f > Qr[Er].f ? Er++ : xr++], Qr[pr++] = {
          s: -1,
          f: Ir.f + fr.f,
          l: Ir,
          r: fr
        };
        var mr = ar[0].s;
        for (Zr = 1; Wr > Zr; ++Zr) ar[Zr].s > mr && (mr = ar[Zr].s);
        var Nr = new VE(mr + 1),
          Ur = pp(Qr[pr - 1], Nr, 0);
        if (Ur > Sr) {
          Zr = 0;
          var tr = 0,
            hr = Ur - Sr,
            zr = 1 << hr;
          for (ar.sort((function(rr, Sr) {
              return Nr[Sr.s] - Nr[rr.s] || rr.f - Sr.f
            })); Wr > Zr; ++Zr) {
            var Yr = ar[Zr].s;
            if (Sr >= Nr[Yr]) break;
            tr += zr - (1 << Ur - Nr[Yr]), Nr[Yr] = Sr
          }
          for (tr >>>= hr; tr > 0;) {
            var nr = ar[Zr].s;
            Sr > Nr[nr] ? tr -= 1 << Sr - Nr[nr]++ - 1 : ++Zr
          }
          for (; Zr >= 0 && tr; --Zr) {
            var er = ar[Zr].s;
            Nr[er] == Sr && (--Nr[er], ++tr)
          }
          Ur = Sr
        }
        return [new AE(Nr), Ur]
      },
      pp = function(rr, Sr, Qr) {
        return -1 == rr.s ? Math.max(pp(rr.l, Sr, Qr + 1), pp(rr.r, Sr, Qr + 1)) : Sr[rr.s] = Qr
      },
      xp = function(rr) {
        for (var Sr = rr.length; Sr && !rr[--Sr];);
        for (var Qr = new VE(++Sr), Zr = 0, Wr = rr[0], ar = 1, jr = function(rr) {
            Qr[Zr++] = rr
          }, Ir = 1; Sr >= Ir; ++Ir)
          if (rr[Ir] == Wr && Ir != Sr) ++ar;
          else {
            if (!Wr && ar > 2) {
              for (; ar > 138; ar -= 138) jr(32754);
              ar > 2 && (jr(ar > 10 ? ar - 11 << 5 | 28690 : ar - 3 << 5 | 12305), ar = 0)
            } else if (ar > 3) {
              for (jr(Wr), --ar; ar > 6; ar -= 6) jr(8304);
              ar > 2 && (jr(ar - 3 << 5 | 8208), ar = 0)
            }
            for (; ar--;) jr(Wr);
            ar = 1, Wr = rr[Ir]
          } return [Qr.subarray(0, Zr), Sr]
      },
      mp = function(rr, Sr) {
        for (var Qr = 0, Zr = 0; Sr.length > Zr; ++Zr) Qr += rr[Zr] * Sr[Zr];
        return Qr
      },
      Np = function(rr, Sr, Qr) {
        var Zr = Qr.length,
          Wr = ap(Sr + 2);
        rr[Wr] = 255 & Zr, rr[Wr + 1] = Zr >>> 8, rr[Wr + 2] = 255 ^ rr[Wr], rr[Wr + 3] = 255 ^ rr[Wr + 1];
        for (var ar = 0; Zr > ar; ++ar) rr[Wr + ar + 4] = Qr[ar];
        return 8 * (Wr + 4 + Zr)
      },
      Up = function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        Ip(Sr, pr++, Qr), ++Wr[256];
        for (var xr = Ep(Wr, 15), mr = xr[0], Nr = xr[1], Ur = Ep(ar, 15), tr = Ur[0], hr = Ur[1], zr = xp(mr), Yr = zr[0], nr = zr[1], er = xp(tr), Kr = er[0], yr = er[1], Br = new VE(19), Tr = 0; Yr.length > Tr; ++Tr) Br[31 & Yr[Tr]]++;
        for (Tr = 0; Kr.length > Tr; ++Tr) Br[31 & Kr[Tr]]++;
        for (var vr = Ep(Br, 7), Or = vr[0], Lr = vr[1], lr = 19; lr > 4 && !Or[FE[lr - 1]]; --lr);
        var Xr, Pr, Hr, qr, Rr = Er + 5 << 3,
          gr = mp(Wr, Sp) + mp(ar, Qp) + jr,
          Cr = mp(Wr, mr) + mp(ar, tr) + jr + 14 + 3 * lr + mp(Br, Or) + (2 * Br[16] + 3 * Br[17] + 7 * Br[18]);
        if (gr >= Rr && Cr >= Rr) return Np(Sr, pr, rr.subarray(fr, fr + Er));
        if (Ip(Sr, pr, 1 + (gr > Cr)), pr += 2, gr > Cr) {
          Xr = rp(mr, Nr, 0), Pr = mr, Hr = rp(tr, hr, 0), qr = tr;
          var Mr = rp(Or, Lr, 0);
          for (Ip(Sr, pr, nr - 257), Ip(Sr, pr + 5, yr - 1), Ip(Sr, pr + 10, lr - 4), pr += 14, Tr = 0; lr > Tr; ++Tr) Ip(Sr, pr + 3 * Tr, Or[FE[Tr]]);
          pr += 3 * lr;
          for (var Gr = [Yr, Kr], kr = 0; 2 > kr; ++kr) {
            var Ar = Gr[kr];
            for (Tr = 0; Ar.length > Tr; ++Tr) Ip(Sr, pr, Mr[Vr = 31 & Ar[Tr]]), pr += Or[Vr], Vr > 15 && (Ip(Sr, pr, Ar[Tr] >>> 5 & 127), pr += Ar[Tr] >>> 12)
          }
        } else Xr = Zp, Pr = Sp, Hr = Wp, qr = Qp;
        for (Tr = 0; Ir > Tr; ++Tr)
          if (Zr[Tr] > 255) {
            var Vr;
            fp(Sr, pr, Xr[257 + (Vr = Zr[Tr] >>> 18 & 31)]), pr += Pr[Vr + 257], Vr > 7 && (Ip(Sr, pr, Zr[Tr] >>> 23 & 31), pr += wE[Vr]);
            var ir = 31 & Zr[Tr];
            fp(Sr, pr, Hr[ir]), pr += qr[ir], ir > 3 && (fp(Sr, pr, Zr[Tr] >>> 5 & 8191), pr += cE[ir])
          } else fp(Sr, pr, Xr[Zr[Tr]]), pr += Pr[Zr[Tr]];
        return fp(Sr, pr, Xr[256]), pr + Pr[256]
      },
      tp = new iE([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      hp = (new AE(0), function() {
        for (var rr = new iE(256), Sr = 0; 256 > Sr; ++Sr) {
          for (var Qr = Sr, Zr = 9; --Zr;) Qr = (1 & Qr && 3988292384) ^ Qr >>> 1;
          rr[Sr] = Qr
        }
        return rr
      }()),
      zp = function(rr, Sr, Qr) {
        for (; Qr; ++Sr) rr[Sr] = Qr, Qr >>>= 8
      };
    const Yp = !!QQ || !!SQ,
      np = new WeakMap,
      ep = "text/plain";
    let Kp = 0,
      yp = !1;
    const Bp = (rr, Sr) => {
        const [Qr, Zr] = rr.split("#"), [Wr, ar] = Qr.split("?");
        if (!ar) return rr;
        const jr = ar.split("&").filter((rr => rr.split("=")[0] !== Sr)).join("&");
        return `${Wr}${jr?`?${jr}`:""}${Zr?`#${Zr}`:""}`
      },
      Tp = function(rr, Sr) {
        let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var Zr;
        const [Wr, ar] = rr.split("?"), jr = YW({}, Sr), Ir = null !== (Zr = null == ar ? void 0 : ar.split("&").map((rr => {
          var Sr;
          const [Zr, Wr] = rr.split("="), ar = Qr && null !== (Sr = jr[Zr]) && void 0 !== Sr ? Sr : Wr;
          return delete jr[Zr], `${Zr}=${ar}`
        }))) && void 0 !== Zr ? Zr : [], fr = function(rr) {
          let Sr, Qr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Wr = [];
          return kj(rr, (function(rr, Zr) {
            BQ(rr) || BQ(Zr) || "undefined" === Zr || (Sr = encodeURIComponent((rr => rr instanceof File)(rr) ? rr.name : rr.toString()), Qr = encodeURIComponent(Zr), Wr[Wr.length] = Qr + "=" + Sr)
          })), Wr.join(Zr)
        }(jr);
        return fr && Ir.push(fr), Ir.length > 0 ? `${Wr}?${Ir.join("&")}` : Wr
      },
      vp = rr => {
        if (rr._encodedBody) return rr._encodedBody;
        const {
          data: Sr,
          compression: Qr
        } = rr;
        if (!Sr) return;
        if (Qr === zE.GZipJS) {
          const rr = function(rr, Sr) {
            void 0 === Sr && (Sr = {});
            var Qr = function() {
                var rr = 4294967295;
                return {
                  p(Sr) {
                    for (var Qr = rr, Zr = 0; Sr.length > Zr; ++Zr) Qr = hp[255 & Qr ^ Sr[Zr]] ^ Qr >>> 8;
                    rr = Qr
                  },
                  d: () => 4294967295 ^ rr
                }
              }(),
              Zr = rr.length;
            Qr.p(rr);
            var Wr, ar, jr, Ir, fr = (Ir = 10 + ((Wr = Sr).filename && Wr.filename.length + 1 || 0), function(rr, Sr, Qr, Zr, Wr, ar) {
                var jr = rr.length,
                  Ir = new AE(Zr + jr + 5 * (1 + Math.floor(jr / 7e3)) + 8),
                  fr = Ir.subarray(Zr, Ir.length - 8),
                  Er = 0;
                if (!Sr || 8 > jr)
                  for (var pr = 0; jr >= pr; pr += 65535) {
                    var xr = pr + 65535;
                    jr > xr ? Er = Np(fr, Er, rr.subarray(pr, xr)) : (fr[pr] = ar, Er = Np(fr, Er, rr.subarray(pr, jr)))
                  } else {
                    for (var mr = tp[Sr - 1], Nr = mr >>> 13, Ur = 8191 & mr, tr = (1 << Qr) - 1, hr = new VE(32768), zr = new VE(tr + 1), Yr = Math.ceil(Qr / 3), nr = 2 * Yr, er = function(Sr) {
                        return (rr[Sr] ^ rr[Sr + 1] << Yr ^ rr[Sr + 2] << nr) & tr
                      }, Kr = new iE(25e3), yr = new VE(288), Br = new VE(32), Tr = 0, vr = 0, Or = (pr = 0, 0), Lr = 0, lr = 0; jr > pr; ++pr) {
                      var Xr = er(pr),
                        Pr = 32767 & pr,
                        Hr = zr[Xr];
                      if (hr[Pr] = Hr, zr[Xr] = Pr, pr >= Lr) {
                        var qr = jr - pr;
                        if ((Tr > 7e3 || Or > 24576) && qr > 423) {
                          Er = Up(rr, fr, 0, Kr, yr, Br, vr, Or, lr, pr - lr, Er), Or = Tr = vr = 0, lr = pr;
                          for (var Rr = 0; 286 > Rr; ++Rr) yr[Rr] = 0;
                          for (Rr = 0; 30 > Rr; ++Rr) Br[Rr] = 0
                        }
                        var gr = 2,
                          Cr = 0,
                          Mr = Ur,
                          Gr = Pr - Hr & 32767;
                        if (qr > 2 && Xr == er(pr - Gr))
                          for (var kr = Math.min(Nr, qr) - 1, Ar = Math.min(32767, pr), Vr = Math.min(258, qr); Ar >= Gr && --Mr && Pr != Hr;) {
                            if (rr[pr + gr] == rr[pr + gr - Gr]) {
                              for (var ir = 0; Vr > ir && rr[pr + ir] == rr[pr + ir - Gr]; ++ir);
                              if (ir > gr) {
                                if (gr = ir, Cr = Gr, ir > kr) break;
                                var wr = Math.min(Gr, ir - 2),
                                  cr = 0;
                                for (Rr = 0; wr > Rr; ++Rr) {
                                  var Fr = pr - Gr + Rr + 32768 & 32767,
                                    or = Fr - hr[Fr] + 32768 & 32767;
                                  or > cr && (cr = or, Hr = Fr)
                                }
                              }
                            }
                            Gr += (Pr = Hr) - (Hr = hr[Pr]) + 32768 & 32767
                          }
                        if (Cr) {
                          Kr[Or++] = 268435456 | JE[gr] << 18 | DE[Cr];
                          var br = 31 & JE[gr],
                            Jr = 31 & DE[Cr];
                          vr += wE[br] + cE[Jr], ++yr[257 + br], ++Br[Jr], Lr = pr + gr, ++Tr
                        } else Kr[Or++] = rr[pr], ++yr[rr[pr]]
                      }
                    }
                    Er = Up(rr, fr, ar, Kr, yr, Br, vr, Or, lr, pr - lr, Er)
                  }
                return jp(Ir, 0, Zr + ap(Er) + 8)
              }(ar = rr, null == (jr = Sr).level ? 6 : jr.level, null == jr.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(ar.length)))) : 12 + jr.mem, Ir, 0, !0)),
              Er = fr.length;
            return function(rr, Sr) {
              var Qr = Sr.filename;
              if (rr[0] = 31, rr[1] = 139, rr[2] = 8, rr[8] = 2 > Sr.level ? 4 : 9 == Sr.level ? 2 : 0, rr[9] = 3, 0 != Sr.mtime && zp(rr, 4, Math.floor(new Date(Sr.mtime || Date.now()) / 1e3)), Qr) {
                rr[3] = 8;
                for (var Zr = 0; Qr.length >= Zr; ++Zr) rr[Zr + 10] = Qr.charCodeAt(Zr)
              }
            }(fr, Sr), zp(fr, Er - 8, Qr.d()), zp(fr, Er - 4, Zr), fr
          }(function(rr) {
            var Sr = rr.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(rr);
            for (var Qr = new AE(rr.length + (rr.length >>> 1)), Zr = 0, Wr = function(rr) {
                Qr[Zr++] = rr
              }, ar = 0; Sr > ar; ++ar) {
              if (Zr + 5 > Qr.length) {
                var jr = new AE(Zr + 8 + (Sr - ar << 1));
                jr.set(Qr), Qr = jr
              }
              var Ir = rr.charCodeAt(ar);
              128 > Ir ? Wr(Ir) : 2048 > Ir ? (Wr(192 | Ir >>> 6), Wr(128 | 63 & Ir)) : Ir > 55295 && 57344 > Ir ? (Wr(240 | (Ir = 65536 + (1047552 & Ir) | 1023 & rr.charCodeAt(++ar)) >>> 18), Wr(128 | Ir >>> 12 & 63), Wr(128 | Ir >>> 6 & 63), Wr(128 | 63 & Ir)) : (Wr(224 | Ir >>> 12), Wr(128 | Ir >>> 6 & 63), Wr(128 | 63 & Ir))
            }
            return jp(Qr, 0, Zr)
          }(Cf(Sr)), {
            mtime: 0
          });
          return {
            contentType: ep,
            body: rr.buffer.slice(rr.byteOffset, rr.byteOffset + rr.byteLength),
            estimatedSize: rr.byteLength
          }
        }
        if (Qr === zE.Base64) {
          const rr = function(rr) {
              return rr ? btoa(encodeURIComponent(rr).replace(/%([0-9A-F]{2})/g, ((rr, Sr) => String.fromCharCode(parseInt(Sr, 16))))) : rr
            }(Cf(Sr)),
            Qr = (rr => "data=" + encodeURIComponent("string" == typeof rr ? rr : Cf(rr)))(rr);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: Qr,
            estimatedSize: new Blob([Qr]).size
          }
        }
        const Zr = Cf(Sr);
        return {
          contentType: "application/json",
          body: Zr,
          estimatedSize: new Blob([Zr]).size
        }
      },
      Op = rr => {
        const Sr = () => "sendBeacon" === rr.transport ? {
          url: Tp(rr.url, {
            compression: zE.Base64
          }),
          encodedBody: vp(YW(YW({}, rr), {}, {
            compression: zE.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: Bp(rr.url, "compression"),
          encodedBody: vp(YW(YW({}, rr), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let Qr;
        try {
          Qr = vp(rr)
        } catch (Qr) {
          if (Ya(rr.compression, Gf(rr.url, "compression"))) return Cj.error("Failed to gzip request body, sending uncompressed payload", Qr), Sr();
          throw Qr
        }
        return Qr && Ya(rr.compression, Gf(rr.url, "compression")) && !((Zr = Qr.body) instanceof ArrayBuffer ? za(new Uint8Array(Zr)) : ArrayBuffer.isView(Zr) && za(new Uint8Array(Zr.buffer, Zr.byteOffset, Zr.byteLength))) ? (yp = !0, Sr()) : {
          url: rr.url,
          encodedBody: Qr
        };
        var Zr
      },
      Lp = rr => {
        try {
          return Op(rr)
        } catch (ar) {
          var Sr;
          return Cj.error(ar), void(null === (Sr = rr.callback) || void 0 === Sr || Sr.call(rr, {
            statusCode: 0,
            error: ar
          }))
        }
      },
      lp = function() {
        var rr = wQ((function*(rr) {
          const Sr = yield function(rr) {
            return Ta.apply(this, arguments)
          }(Cf(rr.data), ar.DEBUG, {
            rethrow: !0
          });
          if (!Sr) return rr;
          const Qr = yield Sr.arrayBuffer();
          return YW(YW({}, rr), {}, {
            _encodedBody: {
              contentType: ep,
              body: Qr,
              estimatedSize: Qr.byteLength
            }
          })
        }));
        return function(Sr) {
          return rr.apply(this, arguments)
        }
      }(),
      Xp = /Failed to fetch|NetworkError|Load failed/i,
      Pp = rr => "TypeError" === (null == rr ? void 0 : rr.name) && Xp.test((null == rr ? void 0 : rr.message) || ""),
      Hp = rr => {
        try {
          const Sr = function(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof rr || !rr) return;
            const Qr = rr.trim(),
              Zr = /^\d+\s*,/.test(Qr) ? Qr.slice(0, Qr.indexOf(",")).trim() : Qr;
            if (/^\d+$/.test(Zr)) {
              const rr = 1e3 * Math.min(Number(Zr), 300);
              return rr > 0 ? rr : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(Zr)) return;
            const Wr = /^\w{3} \w{3} /.test(Zr) ? Zr + " GMT" : Zr,
              ar = Date.parse(Wr) - Sr;
            return Number.isFinite(ar) && ar > 0 ? Math.min(ar, aW) : void 0
          }(rr());
          return BQ(Sr) ? void 0 : Math.min(Sr, 3e4)
        } catch (rr) {
          return
        }
      },
      qp = rr => {
        const Sr = Lp(rr);
        if (!Sr) return;
        const Qr = new QQ;
        np.set(Qr, !0);
        const {
          url: Zr,
          encodedBody: Wr
        } = Sr;
        Qr.open(rr.method || "GET", Zr, !0);
        const {
          contentType: ar,
          body: jr
        } = null != Wr ? Wr : {};
        kj(rr.headers, (function(rr, Sr) {
          Qr.setRequestHeader(Sr, rr)
        })), ar && Qr.setRequestHeader("Content-Type", ar), rr.timeout && (Qr.timeout = rr.timeout), Qr.onreadystatechange = () => {
          if (4 === Qr.readyState) {
            var Sr;
            const Zr = {
              statusCode: Qr.status,
              text: Qr.responseText
            };
            if (200 === Qr.status) try {
              Zr.json = JSON.parse(Qr.responseText)
            } catch (rr) {}
            null === (Sr = rr.callback) || void 0 === Sr || Sr.call(rr, Zr, Hp((() => Qr.getResponseHeader("Retry-After"))))
          }
        }, Qr.send(jr)
      },
      Rp = rr => {
        const Sr = Lp(rr);
        if (!Sr) return;
        const {
          url: Qr,
          encodedBody: Zr
        } = Sr, {
          contentType: Wr,
          body: ar,
          estimatedSize: jr
        } = null != Zr ? Zr : {}, Ir = new Headers;
        kj(rr.headers, (function(rr, Sr) {
          Ir.append(Sr, rr)
        })), Wr && Ir.append("Content-Type", Wr);
        let fr = null,
          Er = !1;
        if (ZQ) {
          const Sr = new ZQ;
          fr = {
            signal: Sr.signal,
            timeout: setTimeout((() => {
              Er = !0;
              try {
                Sr.abort(EW("AbortError", "PostHog request timed out" + ((Qr = rr.timeout) ? ` after ${Qr}ms` : "")))
              } catch (rr) {
                xr(rr)
              }
              var Qr
            }), rr.timeout)
          }
        }
        let pr = !1;
        const xr = Sr => {
          var Qr;
          pr || (pr = !0, Er && "AbortError" === (null == Sr ? void 0 : Sr.name) || Pp(Sr) ? Cj.warn(Sr) : Cj.error(Sr), null === (Qr = rr.callback) || void 0 === Qr || Qr.call(rr, {
            statusCode: 0,
            error: Sr
          }))
        };
        let mr = 0;
        const Nr = () => {
          Kp -= mr, mr = 0, fr && clearTimeout(fr.timeout)
        };
        try {
          const Sr = YW({
              method: (null == rr ? void 0 : rr.method) || "GET",
              headers: Ir,
              referrerPolicy: "strict-origin",
              body: ar,
              signal: null == fr ? void 0 : fr.signal
            }, rr.fetchOptions),
            Zr = null != jr ? jr : BQ(ar) ? 0 : void 0;
          Sr.keepalive = "POST" === Sr.method && !rr._keepaliveDisabled && !1 !== Sr.keepalive && Sr.body === ar && !BQ(Zr) && Zr >= 0 && 52428.8 > Kp + Zr, Sr.keepalive && (mr = Zr, Kp += mr), SQ(Qr, Sr).then((Sr => Sr.text().then((Qr => {
            var Zr;
            if (pr) return;
            const Wr = {
              statusCode: Sr.status,
              text: Qr
            };
            if (200 === Sr.status) try {
              Wr.json = JSON.parse(Qr)
            } catch (rr) {
              Cj.error(rr)
            }
            pr = !0, Nr(), null === (Zr = rr.callback) || void 0 === Zr || Zr.call(rr, Wr, Hp((() => Sr.headers.get("Retry-After"))))
          })))).catch((rr => {
            Nr(), xr(rr)
          })).finally(Nr)
        } catch (rr) {
          Nr(), xr(rr)
        }
      },
      gp = rr => {
        try {
          var Sr;
          const {
            url: Qr,
            encodedBody: Zr
          } = Op(rr), {
            contentType: Wr,
            body: ar,
            estimatedSize: jr
          } = null != Zr ? Zr : {};
          if (!ar) return;
          const Ir = ar instanceof Blob ? ar : new Blob([ar], {
            type: Wr
          });
          if (sS.sendBeacon(Qr, Ir)) return;
          const fr = nQ(rr.data) ? rr.data : null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.batch;
          if (nQ(fr) && fr.length > 1 && (null != jr ? jr : 0) > 16384) {
            const Sr = Math.ceil(fr.length / 2),
              Qr = Sr => nQ(rr.data) ? Sr : YW(YW({}, rr.data), {}, {
                batch: Sr
              });
            return gp(YW(YW({}, rr), {}, {
              data: Qr(fr.slice(0, Sr))
            })), void gp(YW(YW({}, rr), {}, {
              data: Qr(fr.slice(Sr))
            }))
          }
          Cj.warn(`Beacon of ~${null!=jr?jr:0} bytes was rejected by the browser, falling back to ${SQ?"fetch":"XHR"}`), SQ ? Rp(YW(YW({}, rr), {}, {
            _keepaliveDisabled: !0
          })) : qp(rr)
        } catch (rr) {
          Cj.warn("Beacon send failed", rr)
        }
      },
      Cp = (rr, Sr, Qr, Zr) => {
        const Wr = "query" === Zr ? "POST" === Sr ? "sent_at" : "_" : void 0;
        return Tp(Qr === zE.GZipJS ? Bp(rr, "compression") : rr, YW(YW({}, Wr ? {
          [Wr]: Date.now().toString()
        } : {}), Qr === zE.GZipJS ? {} : {
          compression: Qr
        }))
      },
      Mp = (() => {
        const rr = [];
        return SQ && rr.push({
          transport: "fetch",
          method: Rp
        }), QQ && rr.push({
          transport: "XHR",
          method: qp
        }), (null == sS ? void 0 : sS.sendBeacon) && rr.push({
          transport: "sendBeacon",
          method: gp
        }), rr
      })();
    let Gp = !Yp && -1 === (null == aQ ? void 0 : aQ.indexOf("MSIE")) && -1 === (null == aQ ? void 0 : aQ.indexOf("Mozilla"));

    function kp(rr, Sr, Qr) {
      var Zr, Wr, ar;
      Qr && (Sr = YW(YW({}, Sr), {}, {
        callback: rr => Qr(rr)
      })), rr.__loaded ? Gp ? rr.__request_queue.push(Sr) : rr.rateLimiter.isServerRateLimited(Sr.batchKey) ? Sr.fireCallbackOnDrop && (null === (Wr = Sr.callback) || void 0 === Wr || Wr.call(Sr, {
        statusCode: 429
      })) : (Sr.transport = Sr.transport || rr.config.api_transport, Sr.headers = YW(YW({}, rr.config.request_headers), Sr.headers), Sr.compression = "best-available" === Sr.compression ? null !== (Zr = rr.compression) && void 0 !== Zr ? Zr : Sr.compressionFallback : Sr.compression, (BQ(rr.config.disable_beacon) ? rr.config.__preview_disable_beacon : rr.config.disable_beacon) && (Sr.disableTransport = ["sendBeacon"]), Sr.fetchOptions = Sr.fetchOptions || rr.config.fetch_options, ((rr, Sr) => {
        var Qr, Zr, Wr;
        const ar = YW(YW({}, rr), {}, {
          callback: null != Sr ? Sr : Sr => {
            var Qr;
            return null === (Qr = rr.callback) || void 0 === Qr ? void 0 : Qr.call(rr, Sr)
          }
        });
        ar.timeout = ar.timeout || 6e4;
        const jr = null !== (Qr = ar.transport) && void 0 !== Qr ? Qr : "fetch";
        "sendBeacon" === jr && BQ(ar.compression) && ar.data && (ar.compression = zE.Base64), "POST" === ar.method && ar.data && ("capture-body" === ar.timestampMode ? ar.data = (rr => {
          var Sr, Qr;
          const Zr = (nQ(rr) ? rr : [rr]).map((rr => YW(YW({}, rr), rr.timestamp instanceof Date && !isNaN(rr.timestamp.getTime()) ? {
              timestamp: rr.timestamp.toISOString()
            } : {}))),
            Wr = Zr[0];
          return {
            api_key: null !== (Sr = null == Wr || null === (Qr = Wr.properties) || void 0 === Qr ? void 0 : Qr.token) && void 0 !== Sr ? Sr : null == Wr ? void 0 : Wr.token,
            batch: Zr,
            sent_at: (new Date).toISOString()
          }
        })(ar.data) : "body" === ar.timestampMode && (ar.data = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return nQ(rr) ? rr.map((rr => YW(YW({}, rr), {}, {
            sent_at: Sr
          }))) : YW(YW({}, rr), {}, {
            sent_at: Sr
          })
        }(ar.data))), ar.url = Cp(ar.url, ar.method, ar.compression, ar.timestampMode);
        const Ir = Mp.filter((rr => !ar.disableTransport || !rr.transport || !ar.disableTransport.includes(rr.transport))),
          fr = null !== (Zr = null === (Wr = function(rr, Sr) {
            for (let Qr = 0; rr.length > Qr; Qr++)
              if (Sr(rr[Qr])) return rr[Qr]
          }(Ir, (rr => rr.transport === jr))) || void 0 === Wr ? void 0 : Wr.method) && void 0 !== Zr ? Zr : Ir[0].method;
        if (!fr) throw new Error("No available transport method");
        const Er = rr => {
          try {
            fr(rr)
          } catch (rr) {
            var Sr;
            Pp(rr) ? Cj.warn(rr) : Cj.error(rr), null === (Sr = ar.callback) || void 0 === Sr || Sr.call(ar, {
              statusCode: 0,
              error: rr
            })
          }
        };
        "sendBeacon" !== jr && !ar.preferSyncCompression && ar.data && ar.compression === zE.GZipJS && WQ && "undefined" != typeof Promise && !yp ? lp(ar).then((rr => {
          Er(rr)
        })).catch((Sr => {
          if (na(Sr)) return yp = !0, void Er(YW(YW({}, ar), {}, {
            compression: void 0,
            url: Cp(rr.url, rr.method, void 0, rr.timestampMode)
          }));
          (rr => {
            if (!rr || "object" != typeof rr) return !1;
            const Sr = "name" in rr ? String(rr.name) : "";
            return na(rr) || Sr === ha
          })(Sr) && (yp = !0), Er(ar)
        })) : Er(ar)
      })(Sr, ((Zr, Wr) => {
        var ar, jr, Ir;
        rr.rateLimiter.checkForLimiting(Zr), 400 > Zr.statusCode || null === (ar = (jr = rr.config).on_request_error) || void 0 === ar || ar.call(jr, Zr), Qr ? Qr(Zr, Wr) : null === (Ir = Sr.callback) || void 0 === Ir || Ir.call(Sr, Zr)
      }))) : Sr.fireCallbackOnDrop && (null === (ar = Sr.callback) || void 0 === ar || ar.call(Sr, {
        statusCode: 0
      }))
    }
    var Ap = class {
      constructor(rr, Sr) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = bQ((null == Sr ? void 0 : Sr.flush_interval_ms) || 3e3, 250, 5e3, Cj.createLogger("flush interval"), 3e3), this._sendRequest = rr
      }
      enqueue(rr) {
        this._queue.push(rr), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const rr = this._queue.length > 0 ? this._formatQueue() : {},
          Sr = Object.values(rr);
        [...Sr.filter((rr => 0 === rr.url.indexOf("/e"))), ...Sr.filter((rr => 0 !== rr.url.indexOf("/e")))].map((rr => {
          this._sendRequestSafely(YW(YW({}, rr), {}, {
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
          const rr = this._formatQueue();
          for (const Sr in rr) this._sendRequestSafely(rr[Sr])
        }
      }
      _sendRequestSafely(rr, Sr) {
        try {
          this._sendRequest(rr, Sr)
        } catch (rr) {
          Cj.error(rr)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const rr = {},
          Sr = {};
        kj(this._queue, (Qr => {
          var Zr;
          const Wr = Qr,
            ar = ((Wr ? Wr.batchKey : null) || Wr.url) + (Wr.batchGroup ? `:${Wr.batchGroup}` : "");
          BQ(rr[ar]) && (rr[ar] = YW(YW({}, Wr), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), Sr[ar] = []), null === (Zr = rr[ar].data) || void 0 === Zr || Zr.push(Wr.data), Wr.callback && Sr[ar].push(Wr.callback)
        }));
        for (const Qr in Sr) {
          const Zr = Sr[Qr];
          Zr.length && (rr[Qr].callback = rr => {
            for (const Sr of Zr) Sr(rr)
          })
        }
        return this._queue = [], rr
      }
    };
    const Vp = ["retriesPerformedSoFar"];
    var ip = class {
        constructor(rr) {
          this._instance = rr, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!BQ(DS) && "onLine" in DS.navigator) {
            if (this._areWeOnline = DS.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, bj(DS, "online", this._onlineListener), bj(DS, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(rr, Sr) {
          let {
            retriesPerformedSoFar: Qr
          } = rr, Zr = va(rr, Vp);
          XQ(Qr) && (Zr.url = Tp(Zr.url, {
            retry_count: Qr
          })), kp(this._instance, Sr ? YW(YW({}, Zr), {}, {
            transport: Sr
          }) : Zr, ((rr, Sr) => {
            var Wr;
            if (200 !== rr.statusCode && (400 > rr.statusCode || rr.statusCode >= 500)) {
              if ((0 === rr.statusCode ? 3 : 10) > (null != Qr ? Qr : 0)) return void this._enqueue(YW({
                retriesPerformedSoFar: Qr
              }, Zr), Sr);
              0 === rr.statusCode && Cj.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=Qr?Qr:0} retries.`)
            }
            null === (Wr = Zr.callback) || void 0 === Wr || Wr.call(Zr, rr)
          }))
        }
        _enqueue(rr, Sr) {
          const Qr = rr.retriesPerformedSoFar || 0;
          rr.retriesPerformedSoFar = Qr + 1;
          const Zr = Math.max(function(rr) {
              const Sr = 3e3 * Math.pow(2, rr),
                Qr = Sr / 2,
                Zr = Math.min(18e5, Sr),
                Wr = (Math.random() - .5) * (Zr - Qr);
              return Math.ceil(Zr + Wr)
            }(Qr), null != Sr ? Sr : 0),
            Wr = Date.now() + Zr;
          this._queue.push({
            retryAt: Wr,
            requestOptions: rr
          });
          let ar = `Enqueued failed request for retry in ${Zr}`;
          navigator.onLine || (ar += " (Browser is offline)"), Cj.warn(ar), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const rr = Date.now(),
            Sr = [],
            Qr = this._queue.filter((Qr => rr > Qr.retryAt || (Sr.push(Qr), !1)));
          if (this._queue = Sr, Qr.length > 0)
            for (const {
                requestOptions: Zr
              }
              of Qr) this.retriableRequest(Zr)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, BQ(DS) || (this._onlineListener && (DS.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (DS.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: rr
            }
            of this._queue) try {
            this._instance._send_request(YW(YW({}, rr), {}, {
              callback: nQ(rr.data) ? void 0 : rr.callback,
              transport: "sendBeacon"
            }))
          } catch (Zr) {
            Cj.error(Zr)
          }
          this._queue = []
        }
      },
      wp = class {
        constructor(rr) {
          this._instance = rr, this._updateScrollData = () => {
            var rr, Sr, Qr, Zr;
            this._context || (this._context = {});
            const Wr = this.scrollElement(),
              ar = this.scrollY(),
              jr = Wr ? Math.max(0, Wr.scrollHeight - Wr.clientHeight) : 0,
              Ir = ar + ((null == Wr ? void 0 : Wr.clientHeight) || 0),
              fr = (null == Wr ? void 0 : Wr.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(ar), this._context.maxScrollY = Math.max(ar, null !== (rr = this._context.maxScrollY) && void 0 !== rr ? rr : 0), this._context.maxScrollHeight = Math.max(jr, null !== (Sr = this._context.maxScrollHeight) && void 0 !== Sr ? Sr : 0), this._context.lastContentY = Ir, this._context.maxContentY = Math.max(Ir, null !== (Qr = this._context.maxContentY) && void 0 !== Qr ? Qr : 0), this._context.maxContentHeight = Math.max(fr, null !== (Zr = this._context.maxContentHeight) && void 0 !== Zr ? Zr : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const rr = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), rr
        }
        startMeasuringScrollPosition() {
          bj(DS, "scroll", this._updateScrollData, {
            capture: !0
          }), bj(DS, "scrollend", this._updateScrollData, {
            capture: !0
          }), bj(DS, "resize", this._updateScrollData)
        }
        scrollElement() {
          var rr;
          if (!this._scrollRoot) return null == DS || null === (rr = DS.document) || void 0 === rr ? void 0 : rr.documentElement;
          {
            const rr = nQ(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const Qr of rr) {
              var Sr;
              const rr = null == DS || null === (Sr = DS.document) || void 0 === Sr ? void 0 : Sr.querySelector(Qr);
              if (rr) return rr
            }
          }
        }
        _scrollPosition(rr) {
          var Sr, Qr;
          const Zr = "y" === rr ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const rr = this.scrollElement();
            return rr && rr[Zr] || 0
          }
          return DS ? "y" === rr ? DS.scrollY || DS.pageYOffset || (null === (Sr = DS.document) || void 0 === Sr || null === (Sr = Sr.documentElement) || void 0 === Sr ? void 0 : Sr.scrollTop) || 0 : DS.scrollX || DS.pageXOffset || (null === (Qr = DS.document) || void 0 === Qr || null === (Qr = Qr.documentElement) || void 0 === Qr ? void 0 : Qr.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const cp = rr => SE(null == rr ? void 0 : rr.config.mask_personal_data_properties, null == rr ? void 0 : rr.config.custom_personal_data_properties, null == rr ? void 0 : rr.config.disable_capture_url_hashes);
    var Fp = class {
        constructor(rr, Sr, Qr, Zr) {
          this._onSessionIdCallback = rr => {
            const Sr = this._getStored();
            if (Sr && Sr.sessionId === rr) return;
            const Qr = {
              sessionId: rr,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [nS]: Qr
            })
          }, this._instance = rr, this._sessionIdManager = Sr, this._persistence = Qr, this._sessionSourceParamGenerator = Zr || cp, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[nS]
        }
        getSetOnceProps() {
          var rr;
          const Sr = null === (rr = this._getStored()) || void 0 === rr ? void 0 : rr.props;
          return Sr ? "r" in Sr ? QE(Sr, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: Sr.referringDomain,
            $pathname: Sr.initialPathName,
            utm_source: Sr.utm_source,
            utm_campaign: Sr.utm_campaign,
            utm_medium: Sr.utm_medium,
            utm_content: Sr.utm_content,
            utm_term: Sr.utm_term
          } : {}
        }
        getSessionProps() {
          const rr = {};
          return kj(wj(this.getSetOnceProps()), ((Sr, Qr) => {
            "$current_url" === Qr && (Qr = "url"), rr[`$session_entry_${UQ(Qr)}`] = Sr
          })), rr
        }
      },
      op = class {
        on(rr, Sr) {
          return this._events[rr] || (this._events[rr] = []), this._events[rr].push(Sr), () => {
            this._events[rr] = this._events[rr].filter((rr => rr !== Sr))
          }
        }
        emit(rr, Sr) {
          for (const Qr of this._events[rr] || []) Qr(Sr);
          for (const Qr of this._events["*"] || []) Qr(rr, Sr)
        }
        constructor() {
          this._events = {}
        }
      };
    const bp = Mj("[SessionId]"),
      Jp = 864e5;
    var Dp = class {
      on(rr, Sr) {
        return this._eventEmitter.on(rr, Sr)
      }
      constructor(rr, Sr, Qr) {
        var Zr;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new op, this._sessionHasBeenIdleTooLong = (rr, Sr) => !(!XQ(rr) || !XQ(Sr)) && Math.abs(rr - Sr) > this.sessionTimeoutMs, !rr.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === rr.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = rr.config, this._persistence = rr.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = Sr || QI, this._windowIdGenerator = Qr || QI;
        const Wr = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * bQ(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, bp.createLogger("session_idle_timeout_seconds"), 1800), rr.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + Wr + "_window_id", this._primary_window_exists_storage_key = "ph_" + Wr + "_primary_window_exists", this._canUseSessionStorage()) {
          const rr = BI._parse(this._window_id_storage_key),
            Sr = BI._parse(this._primary_window_exists_storage_key);
          rr && !Sr ? this._windowId = rr : BI._remove(this._window_id_storage_key), BI._set(this._primary_window_exists_storage_key, !0)
        }(null === (Zr = this._config.bootstrap) || void 0 === Zr ? void 0 : Zr.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(rr) {
        return BQ(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(rr), this._sessionId && rr(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((Sr => Sr !== rr))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && BI._is_supported()
      }
      _setWindowId(rr) {
        rr !== this._windowId && (this._windowId = rr, this._canUseSessionStorage() && BI._set(this._window_id_storage_key, rr))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? BI._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(rr) {
        const Sr = this._lastPersistedActivityTimestamp;
        return !OQ(Sr) && !OQ(rr) && 5e3 > Math.abs(rr - Sr)
      }
      _setSessionId(rr, Sr, Qr) {
        const Zr = Sr !== this._sessionActivityTimestamp,
          Wr = !(rr !== this._sessionId || Qr !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = Qr, this._sessionActivityTimestamp = Sr, this._sessionId = rr, Wr && !Zr || Wr && this._isActivityChangeBelowGranularity(Sr) || (this._lastPersistedActivityTimestamp = Sr, this._persistence.register({
          [sr]: [Sr, rr, Qr]
        }))
      }
      _useCrossTabRefreshHardening() {
        var rr;
        const Sr = null === (rr = this._config) || void 0 === rr ? void 0 : rr.persistence_save_debounce_ms;
        return XQ(Sr) && Sr > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(sr) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var rr;
        if (OQ(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, Sr, Qr] = this._getSessionId();
        Sr === this._sessionId && Qr === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [sr]: [this._sessionActivityTimestamp, null !== (rr = this._sessionId) && void 0 !== rr ? rr : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [rr] = this._getSessionId(), Sr = XQ(rr) ? rr : 0, Qr = XQ(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(Sr, Qr)
      }
      _isSessionIdleAfterCrossTabRefresh(rr) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(rr, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const rr = this._persistence.props[sr];
        return nQ(rr) && 2 === rr.length && rr.push(rr[0]), rr || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Qr = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const Qr = (rr => {
              const Sr = rr.replace(/-/g, "");
              if (32 !== Sr.length) throw new Error("Not a valid UUID");
              if ("7" !== Sr[12]) throw new Error("Not a UUIDv7");
              return parseInt(Sr.substring(0, 12), 16)
            })(rr);
            return Qr > Sr + 6e4 ? void bp.error("Bootstrap sessionID cannot be in the future") : Qr
          } catch (rr) {
            return void bp.error("Invalid sessionID in bootstrap", rr)
          }
        }(rr);
        return !BQ(Qr) && (Sr ? this._pendingBootstrapSession = {
          sessionId: rr,
          sessionStartTimestamp: Qr
        } : this._setSessionId(rr, (new Date).getTime(), Qr), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && DS && (DS.removeEventListener(cS, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && BI._remove(this._primary_window_exists_storage_key)
        }, bj(DS, cS, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const Zr = Sr || (new Date).getTime(),
          Wr = this._sessionId;
        if (Qr) this._lastCookieSyncTimestamp = Zr;
        else if (OQ(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > Zr || Zr - this._lastCookieSyncTimestamp >= 1e3) {
          var ar, jr;
          null === (ar = (jr = this._persistence).syncCookieProperties) || void 0 === ar || ar.call(jr), this._lastCookieSyncTimestamp = Zr
        }
        let [, Ir, fr] = this._getSessionId();
        const Er = !BQ(Wr) && Ir !== Wr,
          pr = this._freshestActivityTimestamp();
        let xr = this._getWindowId();
        const mr = this._pendingBootstrapSession,
          Nr = !!mr && (mr.sessionStartTimestamp > Zr + 6e4 || Zr - mr.sessionStartTimestamp > Jp),
          Ur = mr ? Nr : XQ(fr) && Math.abs(Zr - fr) > Jp;
        let tr = !1,
          hr = Er,
          zr = !Ir || !!mr;
        const Yr = Ir;
        let nr = !zr && !rr && this._sessionHasBeenIdleTooLong(Zr, pr);
        if (nr && (nr = this._isSessionIdleAfterCrossTabRefresh(Zr), nr || bp.info("cross-tab refresh kept the session alive", {
            sessionId: Ir
          }), [, Ir, fr] = this._getSessionId(), nr || (zr = !Ir || !!mr)), zr || nr || Ur) {
          hr = !1;
          const rr = mr && !Nr;
          Ir = rr ? mr.sessionId : this._sessionIdGenerator(), xr = this._windowIdGenerator(), bp.info("new session ID assigned", {
            sessionId: Ir,
            windowId: xr,
            bootstrapped: !!rr,
            changeReason: {
              noSessionId: zr,
              activityTimeout: nr,
              sessionPastMaximumLength: Ur
            }
          }), fr = rr ? mr.sessionStartTimestamp : Zr, this._pendingBootstrapSession = void 0, tr = !0
        } else xr || (xr = this._windowIdGenerator(), tr = !0), hr = hr || Ir !== Yr, hr && (bp.info("adopted cross-tab session id", {
          sessionId: Ir,
          windowId: xr
        }), tr = !0);
        const er = XQ(pr) && rr && !Ur ? pr : Zr,
          Kr = XQ(fr) ? fr : (new Date).getTime();
        this._setWindowId(xr), this._setSessionId(Ir, er, Kr), rr || this._resetIdleTimer();
        const yr = {
          noSessionId: zr,
          activityTimeout: nr,
          sessionPastMaximumLength: Ur,
          crossTabAdoption: hr
        };
        return tr && this._sessionIdChangedHandlers.forEach((rr => rr(Ir, xr, yr))), {
          sessionId: Ir,
          windowId: xr,
          sessionStartTimestamp: Kr,
          changeReason: tr ? yr : void 0,
          lastActivityTimestamp: pr
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const rr = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: rr
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const dp = function(rr, Sr) {
      if (!rr) return !1;
      const Qr = rr.userAgent;
      if (Qr && oQ(Qr, Sr)) return !0;
      try {
        const Qr = null == rr ? void 0 : rr.userAgentData;
        if ((null == Qr ? void 0 : Qr.brands) && Qr.brands.some((rr => oQ(null == rr ? void 0 : rr.brand, Sr)))) return !0
      } catch (rr) {}
      return !!rr.webdriver
    };

    function sp() {
      return (sp = wQ((function*() {
        const rr = null == sS ? void 0 : sS.userAgentData;
        if (null == rr ? void 0 : rr.getHighEntropyValues) try {
          const Sr = yield rr.getHighEntropyValues(["model"]), Qr = null == Sr ? void 0 : Sr.model;
          return TQ(Qr) && Qr.length > 0 ? Qr : void 0
        } catch (rr) {
          return void Cj.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", rr)
        }
      }))).apply(this, arguments)
    }

    function rx(rr, Sr) {
      let Qr = `$survey_${Sr}/${rr.id}`;
      return rr.current_iteration && rr.current_iteration > 0 && (Qr = `$survey_${Sr}/${rr.id}/${rr.current_iteration}`), Qr
    }

    function Sx(rr) {
      var Sr;
      return !!(null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.events) || void 0 === Sr || null === (Sr = Sr.values) || void 0 === Sr ? void 0 : Sr.length)
    }
    const Qx = (rr, Sr) => {
        if (!(rr => {
            try {
              new RegExp(rr)
            } catch (rr) {
              return !1
            }
            return !0
          })(Sr)) return !1;
        try {
          return new RegExp(Sr).test(rr)
        } catch (rr) {
          return !1
        }
      },
      Zx = rr => rr.toLowerCase(),
      Wx = {
        exact: (rr, Sr) => Sr.some((Sr => rr.some((rr => Sr === rr)))),
        is_not: (rr, Sr) => Sr.every((Sr => rr.every((rr => Sr !== rr)))),
        regex: (rr, Sr) => Sr.some((Sr => rr.some((rr => Qx(Sr, rr))))),
        not_regex: (rr, Sr) => Sr.every((Sr => rr.every((rr => !Qx(Sr, rr))))),
        icontains: (rr, Sr) => Sr.map(Zx).some((Sr => rr.map(Zx).some((rr => Sr.includes(rr))))),
        not_icontains: (rr, Sr) => Sr.map(Zx).every((Sr => rr.map(Zx).every((rr => !Sr.includes(rr))))),
        gt: (rr, Sr) => Sr.some((Sr => {
          const Qr = parseFloat(Sr);
          return !isNaN(Qr) && rr.some((rr => Qr > parseFloat(rr)))
        })),
        lt: (rr, Sr) => Sr.some((Sr => {
          const Qr = parseFloat(Sr);
          return !isNaN(Qr) && rr.some((rr => Qr < parseFloat(rr)))
        }))
      };

    function ax(rr, Sr) {
      return !rr || Object.entries(rr).every((rr => {
        let [Qr, Zr] = rr;
        const Wr = null == Sr ? void 0 : Sr[Qr];
        if (null == Wr) return !1;
        const ar = Wx[Zr.operator];
        return !!ar && ar(Zr.values.map(String), [String(Wr)])
      }))
    }

    function jx(rr, Sr, Qr) {
      return Cf({
        distinct_id: rr,
        userPropertiesToSet: Sr,
        userPropertiesToSetOnce: Qr
      })
    }
    const Ix = "custom",
      fx = "i.posthog.com",
      Ex = /^\/static\//,
      px = ["/s/", "/e/", "/i/"];
    var xx = class {
      constructor(rr) {
        this._regionCache = {}, this.instance = rr
      }
      get apiHost() {
        const rr = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === rr ? "https://us.i.posthog.com" : rr
      }
      get flagsApiHost() {
        const rr = this.instance.config.flags_api_host;
        return rr ? rr.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var rr;
        let Sr = null === (rr = this.instance.config.ui_host) || void 0 === rr ? void 0 : rr.replace(/\/$/, "");
        return Sr || (Sr = this.apiHost.replace(`.${fx}`, ".posthog.com")), "https://app.posthog.com" === Sr ? "https://us.posthog.com" : Sr
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : Ix), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(rr) {
        if (!Ex.test(rr)) return;
        const Sr = this.instance.config.asset_host;
        return "string" == typeof Sr && Sr.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(rr) {
        const Sr = Mf(rr);
        return Sr ? Sr.protocol + "//" + Sr.host + Sr.pathname : void 0
      }
      _prepareEndpoint(rr, Sr, Qr) {
        if ("ui" === rr) return Qr;
        let Zr = Qr;
        const Wr = this.instance.config.rewriteRequestPath;
        if (Wr) {
          var ar;
          const rr = (null === (ar = Mf(Qr)) || void 0 === ar ? void 0 : ar.href) || Qr;
          Zr = Wr(new URL(rr)).toString()
        }
        if (Wr && "api" === rr && px.some((rr => 0 === Sr.indexOf(rr)))) {
          const rr = this._urlKey(Zr);
          if (rr) {
            const Sr = this.apiHost;
            let Qr = this._ingestionEndpoints;
            (null == Qr ? void 0 : Qr.apiHost) === Sr && Qr.rewriteRequestPath === Wr || (Qr = {
              apiHost: Sr,
              rewriteRequestPath: Wr,
              urls: new Set
            }, this._ingestionEndpoints = Qr), Qr.urls.add(rr)
          }
        }
        return Zr
      }
      isIngestionEndpoint(rr) {
        const Sr = this._ingestionEndpoints,
          Qr = this._urlKey(rr);
        return (null == Sr ? void 0 : Sr.apiHost) === this.apiHost && Sr.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!Qr && Sr.urls.has(Qr)
      }
      endpointFor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (Sr && (Sr = "/" === Sr[0] ? Sr : `/${Sr}`), "ui" === rr) return this._prepareEndpoint(rr, Sr, this.uiHost + Sr);
        if ("flags" === rr) return this._prepareEndpoint(rr, Sr, this.flagsApiHost + Sr);
        if ("assets" === rr) {
          const Qr = this._staticAssetHostOverride(Sr);
          if (Qr) return this._prepareEndpoint(rr, Sr, `${Qr}${Sr}`)
        }
        if (this.region === Ix) return this._prepareEndpoint(rr, Sr, this.apiHost + Sr);
        const Qr = fx + Sr;
        switch (rr) {
          case "assets":
            return this._prepareEndpoint(rr, Sr, `https://${this.region}-assets.${Qr}`);
          case "api":
            return this._prepareEndpoint(rr, Sr, `https://${this.region}.${Qr}`)
        }
      }
    };
    const mx = Mj("[Surveys]"),
      Nx = rr => {
        try {
          const Sr = (rr => ((rr, Sr) => `seenSurvey_${function(rr){return rr.current_iteration&&rr.current_iteration>0?`${rr.id}_${rr.current_iteration}`:rr.id}(Sr)}`)(0, rr))(rr);
          if (localStorage.getItem(Sr)) return;
          localStorage.setItem(Sr, "true")
        } catch (rr) {
          mx.error("Failed to persist survey seen state", rr)
        }
      },
      Ux = [eE, yE, KE],
      tx = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: XE
      },
      hx = Mj("[PostHog ExternalIntegrations]"),
      zx = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var Yx = class {
      constructor(rr) {
        this._instance = rr
      }
      _loadScript(rr, Sr) {
        var Qr, Zr;
        null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this._instance, rr, (rr => {
          if (rr) return hx.error("failed to load script", rr);
          Sr()
        }))
      }
      startIfEnabledOrStop() {
        var rr;
        for (const [Wr, ar] of Object.entries(null !== (rr = this._instance.config.integrations) && void 0 !== rr ? rr : {})) {
          var Sr, Qr, Zr;
          ar && !(null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr || null === (Sr = Sr.integrations) || void 0 === Sr ? void 0 : Sr[Wr]) && this._loadScript(zx[Wr], (() => {
            var rr;
            null === (rr = IQ.__PosthogExtensions__) || void 0 === rr || null === (rr = rr.integrations) || void 0 === rr || null === (rr = rr[Wr]) || void 0 === rr || rr.start(this._instance)
          })), !ar && (null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Qr = Qr.integrations) || void 0 === Qr ? void 0 : Qr[Wr]) && (null === (Zr = IQ.__PosthogExtensions__) || void 0 === Zr || null === (Zr = Zr.integrations) || void 0 === Zr || null === (Zr = Zr[Wr]) || void 0 === Zr || Zr.stop())
        }
      }
    };
    const nx = "autocapture",
      ex = "featureFlags",
      Kx = "logs",
      yx = "surveys";
    var Bx = class {
        constructor(rr) {
          this._instance = rr
        }
        initialize() {}
        get(rr) {
          const Sr = this._instance.persistence;
          if ("string" == typeof rr) return null == Sr ? void 0 : Sr.get_property(rr);
          const Qr = {};
          for (const Zr of rr) {
            const rr = null == Sr ? void 0 : Sr.get_property(Zr);
            BQ(rr) || (Qr[Zr] = rr)
          }
          return Qr
        }
        set(rr, Sr) {
          var Qr;
          null === (Qr = this._instance.persistence) || void 0 === Qr || Qr.register("string" == typeof rr ? {
            [rr]: Sr
          } : rr)
        }
        remove(rr) {
          var Sr;
          null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.unregister(rr)
        }
      },
      Tx = class {
        constructor(rr) {
          this.instance = rr, this._logger = Cj, this.kv = new Bx(rr), this.onEvent = rr => HE(this.instance._addCaptureHook(((Sr, Qr) => {
            if (Qr) try {
              rr({
                event: Sr,
                properties: Qr.properties
              })
            } catch (rr) {
              this._logger.error("Browser extension event listener failed", rr)
            }
          }))), this.onRemoteConfig = rr => {
            const Sr = Sr => {
                try {
                  rr(Sr)
                } catch (rr) {
                  this._logger.error("Browser extension remote config listener failed", rr)
                }
              },
              Qr = this.instance._internalEventEmitter.on("extensionsRemoteConfig", Sr);
            return this.instance._lastRemoteConfig && Sr(this.instance._lastRemoteConfig), HE(Qr)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var rr;
          return null !== (rr = this.instance.get_property("$device_id")) && void 0 !== rr ? rr : this.distinctId
        }
        get deviceId() {
          const rr = this.instance.get_property(Tr);
          return "string" == typeof rr ? rr : void 0
        }
        get library() {
          return {
            name: ar.LIB_NAME,
            version: ar.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.instance.persistence) || void 0 === Sr ? void 0 : Sr.get_initial_props()) && void 0 !== rr ? rr : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var rr, Sr, Qr, Zr, Wr;
            const ar = null === (rr = this.instance.sessionManager) || void 0 === rr ? void 0 : rr.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (Sr = null == ar ? void 0 : ar.sessionId) && void 0 !== Sr ? Sr : "",
              windowId: null !== (Qr = null == ar ? void 0 : ar.windowId) && void 0 !== Qr ? Qr : "",
              sessionStartTimestamp: null !== (Zr = null == ar ? void 0 : ar.sessionStartTimestamp) && void 0 !== Zr ? Zr : 0,
              lastActivityTimestamp: null !== (Wr = null == ar ? void 0 : ar.lastActivityTimestamp) && void 0 !== Wr ? Wr : 0
            }
          } catch (rr) {
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
          return eQ(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(rr) {
          let Sr;
          switch (rr) {
            case ex:
            case "featureFlagsCommon":
              Sr = this.instance.featureFlags;
              break;
            case Kx:
              Sr = this.instance.logs;
              break;
            case yx:
              Sr = this.instance.surveys;
              break;
            case nx:
              Sr = this.instance.autocapture
          }
          return Sr
        }
        capture(rr, Sr, Qr) {
          Qr ? this.instance.capture(rr, Sr, {
            timestamp: Qr.timestamp,
            uuid: Qr.uuid,
            $set: Qr.set,
            $set_once: Qr.setOnce
          }) : this.instance.capture(rr, Sr)
        }
        registerDynamicEventProperties(rr) {
          return HE(this.instance._registerExtensionEventProperties(rr))
        }
        sendRequest(rr) {
          var Sr = this;
          return wQ((function*(rr) {
            let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var Zr;
            const Wr = null !== (Zr = Qr.target) && void 0 !== Zr ? Zr : "api",
              ar = Sr.instance.requestRouter.endpointFor(Wr, rr),
              jr = "api" === Wr && "/i/v1/logs" === rr,
              Ir = {
                method: Qr.method,
                url: Qr.query ? Tp(ar, Qr.query) : ar,
                data: Qr.body,
                headers: Qr.headers,
                timeout: Qr.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: Qr.transport,
                compression: Qr.compression,
                compressionFallback: "flags" === Qr.target && "best-available" === Qr.compression ? EQ.Base64 : void 0,
                timestampMode: Qr.sentAt
              };
            return jr && (Ir.batchKey = "logs"), "sendBeacon" === Qr.transport ? (Sr.instance._send_request(Ir), {
              statusCode: 202
            }) : new Promise((rr => {
              Ir.callback = rr, Sr.instance._send_request(Ir)
            }))
          })).apply(this, arguments)
        }
      };
    const vx = {};
    let Ox = 0;
    const Lx = () => {},
      lx = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      Xx = "Surveys module not available",
      Px = "sanitize_properties is deprecated. Use before_send instead",
      Hx = "Invalid value for property_denylist config: ",
      qx = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      Rx = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      gx = rr => "$" === rr.charAt(0) && !mQ(Rx, rr),
      Cx = /^[A-Za-z0-9_-]{1,400}$/,
      Mx = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      Gx = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      kx = ["token", "distinct_id", OS],
      Ax = "posthog",
      Vx = rr => {
        const Sr = {};
        return rr && "unset" !== rr ? ("2025-11-30" > rr || (Sr.strictMinimumDuration = !0), "2026-05-30" > rr || (Sr.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > rr || (Sr.streamNetworkBody = !0), "2026-08-30" > rr || (Sr.captureJsonLd = !0), Sr) : Sr
      },
      ix = rr => {
        var Sr;
        return YW({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: oj(null == uS ? void 0 : uS.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: Lx,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != rr ? rr : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: rQ && TQ(null == rQ ? void 0 : rQ.search) && -1 !== rQ.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == DS || null === (Sr = DS.location) || void 0 === Sr ? void 0 : Sr.protocol),
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
          on_request_error(rr) {
            Cj.error("Bad HTTP status: " + rr.statusCode + " " + rr.text)
          },
          get_device_id: rr => rr,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: wS,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: Lx
        }, (rr => ({
          rageclick: rr && rr >= "2026-05-30" ? {
            content_ignorelist: cI,
            ignore_text_selection: !0
          } : !rr || "2025-11-30" > rr || {
            content_ignorelist: !0
          },
          capture_pageview: !rr || "2025-05-24" > rr || "history_change",
          session_recording: Vx(rr),
          external_scripts_inject_target: rr && rr >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: rr && rr >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: rr && rr >= "2026-05-30" ? 250 : 0,
          split_storage: !(!rr || "2026-05-30" > rr),
          detect_google_search_app: !(!rr || "2026-05-30" > rr),
          disable_capture_url_hashes: !(!rr || "2026-06-25" > rr),
          cookieWinsOnConflict: !(!rr || "unset" === rr || "2026-08-29" > rr)
        }))(rr))
      },
      wx = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      cx = rr => {
        const Sr = {};
        for (const [Wr, ar] of wx) BQ(rr[Wr]) || (Sr[ar] = rr[Wr]);
        const Qr = Aj({}, Sr, rr),
          Zr = rr.__preview_external_dependency_versioned_paths;
        return BQ(Zr) || (BQ(rr.strict_script_versioning) && (Qr.strict_script_versioning = !!Zr), TQ(Zr) && BQ(rr.asset_host) && (Qr.asset_host = Zr)), nQ(rr.property_blacklist) && (BQ(rr.property_denylist) ? Qr.property_denylist = rr.property_blacklist : nQ(rr.property_denylist) ? Qr.property_denylist = [...rr.property_blacklist, ...rr.property_denylist] : Cj.error(Hx + rr.property_denylist)), Qr
      };
    var Fx = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(rr) {
          Cj.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = rr
        }
      },
      ox = class rr {
        _removeExtension(rr) {
          if (!rr) return;
          const Sr = this._extensions.indexOf(rr); - 1 !== Sr && this._extensions.splice(Sr, 1)
        }
        _replaceExtension(rr, Sr) {
          var Qr;
          return this._removeExtension(rr), this._extensions.push(Sr), null === (Qr = Sr.initialize) || void 0 === Qr || Qr.call(Sr), Sr
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const rr = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!rr && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let Sr, Qr, Zr;
          rr ? (Sr = `persistence is set to '${this.config.persistence}'`, Qr = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", Zr = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (Sr = "persistence is disabled (disable_persistence is true)", Qr = "on every page load", Zr = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${Sr} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${Qr}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${Zr}`)
        }
        _syncCookielessIdentity() {
          const rr = this.persistence;
          if (!rr || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || rr.load(!0);
          const Sr = this.get_distinct_id();
          if (!Sr || "$posthog_cookieless" === Sr) {
            const Sr = this.config.get_device_id(QI());
            this.register({
              distinct_id: Sr,
              $device_id: Sr
            }), rr.set_property(YS, VS)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.featureFlags) || void 0 === Sr ? void 0 : Sr.hasLoadedFlags) && void 0 !== rr && rr
        }
        get flagsEndpointWasHit() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.featureFlags) || void 0 === Sr ? void 0 : Sr.hasLoadedFlags) && void 0 !== rr && rr
        }
        constructor() {
          var Sr;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new Fx, this._personProcessingSetOncePropertiesSent = !1, this.version = ar.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new op, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = ix(), this.SentryIntegration = vf, this.sentryIntegration = rr => function(rr, Sr) {
            const Qr = Tf(rr, Sr);
            return {
              name: Bf,
              processEvent: rr => Qr(rr)
            }
          }(this, rr), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new wp(this), this.pageViewManager = new Of(this), this.rateLimiter = new ME(this), this.requestRouter = new xx(this), this.consent = new TI(this), this.externalIntegrations = new Yx(this);
          const Qr = null !== (Sr = rr.__defaultExtensionClasses) && void 0 !== Sr ? Sr : {};
          this.featureFlags = Qr.featureFlags && new Qr.featureFlags(this), this.toolbar = Qr.toolbar && new Qr.toolbar(this), this.surveys = Qr.surveys && new Qr.surveys(this), this.conversations = Qr.conversations && new Qr.conversations(this), this.logs = Qr.logs && new Qr.logs(this), this.metrics = Qr.metrics && new Qr.metrics(this), this.experiments = Qr.experiments && new Qr.experiments(this), this.exceptions = Qr.exceptions && new Qr.exceptions(this), this.people = {
            set: (rr, Sr, Qr) => {
              const Zr = TQ(rr) ? {
                [rr]: Sr
              } : rr;
              this.setPersonProperties(Zr), null == Qr || Qr({})
            },
            set_once: (rr, Sr, Qr) => {
              const Zr = TQ(rr) ? {
                [rr]: Sr
              } : rr;
              this.setPersonProperties(void 0, Zr), null == Qr || Qr({})
            }
          }, this.on("eventCaptured", (rr => Cj.info(`send "${null==rr?void 0:rr.event}"`, rr)))
        }
        init(Sr, Qr, Zr) {
          if (Zr && Zr !== Ax) {
            var Wr;
            const ar = null !== (Wr = vx[Zr]) && void 0 !== Wr ? Wr : new rr;
            return ar._init(Sr, Qr, Zr), vx[Zr] = ar, vx[Ax][Zr] = ar, ar
          }
          return this._init(Sr, Qr, Zr)
        }
        _init(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          var Zr, Wr, jr;
          const Ir = TQ(rr) ? rr.trim() : "";
          if (!Ir) return Cj.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var fr;
          if (this.__loaded) return Ir !== (null === (fr = this.config) || void 0 === fr ? void 0 : fr.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${Ir}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = ix(Sr.defaults), Sr.debug = this._checkLocalStorageForDebug(Sr.debug), this._originalUserConfig = Sr, this._triggered_notifs = [], Sr.person_profiles ? this._initialPersonProfilesConfig = Sr.person_profiles : Sr.process_person && (this._initialPersonProfilesConfig = Sr.process_person);
          const Er = ix(Sr.defaults),
            pr = cx(Sr),
            xr = Aj({}, Er, pr, {
              name: Qr,
              token: Ir
            });
          KQ(Er.rageclick) && KQ(pr.rageclick) && (xr.rageclick = Aj({}, Er.rageclick, pr.rageclick)), KQ(Er.session_recording) && KQ(pr.session_recording) && (xr.session_recording = Aj({}, Er.session_recording, pr.session_recording)), this.set_config(xr), this.config.on_xhr_error && Cj.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = Sr.disable_compression ? void 0 : zE.GZipJS;
          const mr = this._is_persistence_disabled(),
            Nr = !this._inCookielessMode();
          if (this.persistence = new hE(this.config, mr, !0, Nr), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new hE(YW(YW({}, this.config), {}, {
              persistence: "sessionStorage"
            }), mr, !1, Nr), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !mr && BI._is_supported()) {
            const rr = BI._parse(this._sessionRegisteredPropertiesStorageKey);
            nQ(rr) && rr.forEach((rr => {
              TQ(rr) && this._sessionRegisteredPropKeys.add(rr)
            }))
          } else BI._remove(this._sessionRegisteredPropertiesStorageKey);
          const Ur = YW({}, this.persistence.props),
            tr = YW({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new Ap(((rr, Sr) => this._send_retriable_request(rr, Sr)), this.config.request_queue_config), this._retryQueue = new ip(this), this.__request_queue = [];
          const hr = this._inCookielessMode();
          hr || (this.sessionManager = new Dp(this), this.sessionPropsManager = new Fp(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((rr, Sr, Qr) => {
            ((null == Qr ? void 0 : Qr.activityTimeout) || (null == Qr ? void 0 : Qr.sessionPastMaximumLength) || (null == Qr ? void 0 : Qr.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (Cj.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(hr)
          }), 0)) : (Cj.info("Initializing extensions synchronously"), this._initExtensions(hr)), ar.DEBUG = ar.DEBUG || this.config.debug, ar.DEBUG && Cj.info("Starting in debug mode", {
            this: this,
            config: Sr,
            thisC: YW({}, this.config),
            p: Ur,
            s: tr
          }), this.config.identity_distinct_id && !(null === (Zr = Sr.bootstrap) || void 0 === Zr ? void 0 : Zr.distinctID) && (Sr.bootstrap = YW(YW({}, Sr.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const zr = null === (Wr = Sr.bootstrap) || void 0 === Wr ? void 0 : Wr.distinctID;
          if (this._hasStableInitialDistinctId = !!zr && !vQ(zr), null === (jr = Sr.bootstrap) || void 0 === jr ? void 0 : jr.distinctID) {
            const rr = Sr.bootstrap.distinctID,
              Qr = this.get_distinct_id(),
              Zr = this.persistence.get_property(YS);
            if (Sr.bootstrap.isIdentifiedID && null != Qr && Qr !== rr && "anonymous" === Zr) this.identify(rr);
            else if (Sr.bootstrap.isIdentifiedID && null != Qr && Qr !== rr && "identified" === Zr) Cj.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const Qr = this.config.get_device_id(QI()),
                Zr = Sr.bootstrap.isIdentifiedID ? Qr : rr;
              this.persistence.set_property(YS, Sr.bootstrap.isIdentifiedID ? iS : VS), this.register({
                distinct_id: rr,
                $device_id: Zr
              })
            }
          }
          if (hr) this.register_once({
            distinct_id: vS,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const rr = this.config.get_device_id(QI());
            this.register_once({
              distinct_id: rr,
              $device_id: rr
            }, ""), this.persistence.set_property(YS, VS)
          }
          return bj(DS, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), bj(DS, "pageshow", (() => {
            var rr;
            this._isPageUnloading = !1, this._isShutdown || null === (rr = this._retryQueue) || void 0 === rr || rr.resume()
          })), Sr.segment ? yf(this, (() => this._loaded())) : this._loaded(), eQ(this.config._onCapture) && this.config._onCapture !== Lx && (Cj.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (rr => this.config._onCapture(rr.event, rr)))), this.config.ip && Cj.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return sp.apply(this, arguments)
          }().then((rr => {
            rr && this.register({
              [vr]: rr
            })
          })).catch(Lx), this
        }
        _isSharedExtension(rr) {
          const Sr = rr;
          return TQ(Sr.name) && eQ(Sr.setup)
        }
        _enrollExtension(rr, Sr) {
          var Qr = this;
          this._isSharedExtension(rr) ? Sr.push(wQ((function*() {
            try {
              yield rr.setup(Qr._getBrowserClientAdapter())
            } catch (Qr) {
              Cj.error(`Failed to set up extension "${rr.name}"`, Qr);
              try {
                var Sr;
                yield null === (Sr = rr.dispose) || void 0 === Sr ? void 0 : Sr.call(rr)
              } catch (Sr) {
                Cj.error(`Failed to dispose extension "${rr.name}"`, Sr)
              }
            }
          }))) : this._extensions.push(rr)
        }
        _enrollFeatureFlags() {
          var Sr, Qr, Zr, Wr = this;
          const ar = null !== (Sr = null === (Qr = this.config.__extensionClasses) || void 0 === Qr ? void 0 : Qr.featureFlags) && void 0 !== Sr ? Sr : null === (Zr = rr.__defaultExtensionClasses) || void 0 === Zr ? void 0 : Zr.featureFlags;
          var jr, Ir, fr;
          if (ar)
            if (this.featureFlags && this.featureFlags instanceof ar || (null === (jr = this._featureFlagsReloadingUnsubscribe) || void 0 === jr || jr.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new ar(this)), eQ(this.featureFlags.onReloading) && eQ(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const rr = this.featureFlags;
                wQ((function*() {
                  try {
                    yield rr.setup(Wr._getBrowserClientAdapter())
                  } catch (Sr) {
                    Cj.error("Failed to set up feature flags", Sr);
                    const Zr = Wr._featureFlagsReloadingUnsubscribe;
                    Wr._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == Zr || Zr()
                    } catch (rr) {
                      Cj.error("Failed to unsubscribe feature flag reloading", rr)
                    }
                    try {
                      yield rr.dispose()
                    } catch (rr) {
                      Cj.error("Failed to dispose feature flags", rr)
                    }
                  }
                }))()
              }
            } else null === (Ir = (fr = this.featureFlags).initialize) || void 0 === Ir || Ir.call(fr)
        }
        _initExtensions(Sr) {
          const Qr = performance.now(),
            Zr = YW(YW({}, rr.__defaultExtensionClasses), this.config.__extensionClasses),
            Wr = [];
          var ar, jr, Ir, fr, Er, pr, xr, mr;
          Zr.exceptions && this._extensions.push(this.exceptions = null !== (ar = this.exceptions) && void 0 !== ar ? ar : new Zr.exceptions(this)), Zr.historyAutocapture && this._extensions.push(this.historyAutocapture = new Zr.historyAutocapture(this)), Zr.tracingHeaders && this._extensions.push(this.tracingHeaders = new Zr.tracingHeaders(this)), Zr.siteApps && this._extensions.push(this.siteApps = new Zr.siteApps(this)), Zr.sessionRecording && !Sr && this._extensions.push(this.sessionRecording = new Zr.sessionRecording(this)), this.config.disable_scroll_properties || Wr.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), Zr.autocapture && this._enrollExtension(this.autocapture = new Zr.autocapture(this), Wr), Zr.surveys && this._enrollExtension(this.surveys = null !== (jr = this.surveys) && void 0 !== jr ? jr : new Zr.surveys(this), Wr), Zr.logs && this._enrollExtension(this.logs = null !== (Ir = this.logs) && void 0 !== Ir ? Ir : new Zr.logs(this), Wr), Zr.metrics && this._extensions.push(this.metrics = null !== (fr = this.metrics) && void 0 !== fr ? fr : new Zr.metrics(this)), Zr.conversations && this._extensions.push(this.conversations = null !== (Er = this.conversations) && void 0 !== Er ? Er : new Zr.conversations(this)), Zr.productTours && this._extensions.push(this.productTours = new Zr.productTours(this)), Zr.heatmaps && this._extensions.push(this.heatmaps = new Zr.heatmaps(this)), Zr.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new Zr.webVitalsAutocapture(this)), Zr.exceptionObserver && this._extensions.push(this.exceptionObserver = new Zr.exceptionObserver(this)), Zr.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new Zr.deadClicksAutocapture(this, nf)), Zr.toolbar && this._extensions.push(this.toolbar = null !== (pr = this.toolbar) && void 0 !== pr ? pr : new Zr.toolbar(this)), Zr.experiments && this._extensions.push(this.experiments = null !== (xr = this.experiments) && void 0 !== xr ? xr : new Zr.experiments(this)), Zr.webMCP && this._extensions.push(this.webMCP = null !== (mr = this.webMCP) && void 0 !== mr ? mr : new Zr.webMCP(this)), this._extensions.forEach((rr => {
            rr.initialize && Wr.push((() => {
              var Sr;
              null === (Sr = rr.initialize) || void 0 === Sr || Sr.call(rr)
            }))
          })), Wr.push((() => {
            if (this._pendingRemoteConfig) {
              const rr = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((Sr => {
                var Qr;
                return null === (Qr = Sr.onRemoteConfig) || void 0 === Qr ? void 0 : Qr.call(Sr, rr)
              }))
            }
          })), this._processInitTaskQueue(Wr, Qr)
        }
        _processInitTaskQueue(rr, Sr) {
          for (; rr.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - Sr >= 30 && rr.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(rr, Sr)
            }), 0));
            const Qr = rr.shift();
            if (Qr) try {
              Qr()
            } catch (rr) {
              Cj.error("Error initializing extension:", rr)
            }
          }
          const Qr = Math.round(performance.now() - Sr);
          this.register_for_session({
            [LS]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [lS]: Qr
          }), this.config.__preview_deferred_init_extensions && Cj.info(`PostHog extensions initialized (${Qr}ms)`)
        }
        _onRemoteConfig(rr) {
          if (!uS || !uS.body) return Cj.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(rr)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = rr), this._lastRemoteConfig = rr, this.compression = void 0, rr.ok) {
            var Sr;
            const Qr = rr.config;
            Qr.supportedCompression && !this.config.disable_compression && (this.compression = mQ(Qr.supportedCompression, zE.GZipJS) ? zE.GZipJS : mQ(Qr.supportedCompression, zE.Base64) ? zE.Base64 : void 0), (null === (Sr = Qr.analytics) || void 0 === Sr ? void 0 : Sr.endpoint) && (this.analyticsDefaultEndpoint = Qr.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : wS
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", rr), this._extensions.forEach((Sr => {
            var Qr;
            return null === (Qr = Sr.onRemoteConfig) || void 0 === Qr ? void 0 : Qr.call(Sr, rr)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (rr) {
            Cj.critical("`loaded` function failed", rr)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == rQ ? void 0 : rQ.hostname)) {
            const rr = rQ.hostname,
              Sr = this.config.internal_or_test_user_hostname;
            ("string" == typeof Sr ? rr === Sr : Sr.test(rr)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new kE(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var rr;
          this.is_capturing() && this.config.request_batching && (null === (rr = this._requestQueue) || void 0 === rr || rr.enable())
        }
        _dom_loaded() {
          this.is_capturing() && Gj(this.__request_queue, (rr => this._send_retriable_request(rr))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var rr, Sr, Qr, Zr, Wr, ar;
          this._isPageUnloading = !0, null === (rr = this.surveys) || void 0 === rr || null === (Sr = rr.handlePageUnload) || void 0 === Sr || Sr.call(rr), null === (Qr = this.metrics) || void 0 === Qr || Qr.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(oS), null === (Zr = this.logs) || void 0 === Zr || Zr.flushLogs("sendBeacon"), null === (Wr = this._requestQueue) || void 0 === Wr || Wr.unload(), null === (ar = this._retryQueue) || void 0 === ar || ar.unload()) : this._shouldCapturePageleave() && this.capture(oS, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(rr) {
          kp(this, rr)
        }
        _send_retriable_request(rr, Sr) {
          this._retryQueue ? this._retryQueue.retriableRequest(rr, Sr) : this._send_request(Sr ? YW(YW({}, rr), {}, {
            transport: Sr
          }) : rr)
        }
        _execute_array(rr) {
          Ox++;
          try {
            let Sr;
            const Qr = [],
              Zr = [],
              Wr = [];
            Gj(rr, (rr => {
              if (rr)
                if (Sr = rr[0], nQ(Sr)) Wr.push(rr);
                else if (eQ(rr)) try {
                rr.call(this)
              } catch (Sr) {
                Cj.error("Error executing queued PostHog call", rr, Sr)
              } else nQ(rr) && "alias" === Sr ? Qr.push(rr) : nQ(rr) && -1 !== Sr.indexOf("capture") && eQ(this[Sr]) ? Wr.push(rr) : Zr.push(rr)
            }));
            const ar = function(rr, Sr) {
              Gj(rr, (function(rr) {
                try {
                  if (nQ(rr[0])) {
                    let Qr = Sr;
                    kj(rr, (function(rr) {
                      Qr = Qr[rr[0]].apply(Qr, rr.slice(1))
                    }))
                  } else Sr[rr[0]].apply(Sr, rr.slice(1))
                } catch (Sr) {
                  Cj.error("Error executing queued PostHog call", rr, Sr)
                }
              }))
            };
            ar(Qr, this), ar(Zr, this), ar(Wr, this)
          } finally {
            Ox--
          }
        }
        push(Sr) {
          if (Ox > 0 && nQ(Sr) && TQ(Sr[0])) {
            const Qr = rr.prototype[Sr[0]];
            eQ(Qr) && Qr.apply(this, Sr.slice(1))
          } else this._execute_array([Sr])
        }
        get _facebookClickIdChannel() {
          return {
            property: lr,
            persistenceKey: Xr,
            cookieName: "_fbc",
            pattern: Mx,
            register: (rr, Sr) => {
              var Qr;
              return null === (Qr = this.persistence) || void 0 === Qr ? void 0 : Qr.register({
                [Xr]: {
                  value: rr,
                  delivered: Sr
                }
              })
            },
            unregister: () => {
              var rr;
              return null === (rr = this.persistence) || void 0 === rr ? void 0 : rr.unregister(Xr)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: Pr,
            persistenceKey: Hr,
            cookieName: "_fbp",
            pattern: Gx,
            register: (rr, Sr) => {
              var Qr;
              return null === (Qr = this.persistence) || void 0 === Qr ? void 0 : Qr.register({
                [Hr]: {
                  value: rr,
                  delivered: Sr
                }
              })
            },
            unregister: () => {
              var rr;
              return null === (rr = this.persistence) || void 0 === rr ? void 0 : rr.unregister(Hr)
            }
          }
        }
        _getPersistedMetaIdentifier(rr) {
          var Sr;
          const Qr = null === (Sr = this.persistence) || void 0 === Sr ? void 0 : Sr.get_property(rr.persistenceKey);
          return TQ(Qr) && rr.pattern.test(Qr) ? {
            value: Qr,
            delivered: !1
          } : KQ(Qr) && TQ(Qr.value) && rr.pattern.test(Qr.value) ? {
            value: Qr.value,
            delivered: !0 === Qr.delivered
          } : void 0
        }
        _storeMetaIdentifier(rr, Sr, Qr) {
          return Sr === (null == Qr ? void 0 : Qr.value) ? {
            value: Sr,
            pending: !Qr.delivered
          } : (rr.register(Sr, !1), {
            value: Sr,
            pending: !0
          })
        }
        _readMetaCookie(rr) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const Sr = Dj(rr.cookieName);
          return TQ(Sr) && rr.pattern.test(Sr) ? Sr : void 0
        }
        _updateFacebookClickId(rr, Sr, Qr, Zr) {
          if (!this.persistence) return;
          const Wr = this._facebookClickIdChannel;
          this.persistence.refreshKey(Wr.persistenceKey);
          const ar = this._getPersistedMetaIdentifier(Wr);
          if (Zr) return void Wr.unregister();
          if (Qr) return TQ(Sr) && Mx.test(Sr) ? this._storeMetaIdentifier(Wr, Sr, ar) : void Wr.unregister();
          const jr = TQ(rr) && Cx.test(rr) ? rr : void 0,
            Ir = this._readMetaCookie(Wr);
          return Ir && ((rr, Sr, Qr) => {
            const Zr = rr.split(".");
            if (Sr) return Zr[3] === Sr;
            if (!Qr) return !0;
            const Wr = Qr.value.split(".");
            return Zr[3] === Wr[3] || Number(Zr[2]) > Number(Wr[2])
          })(Ir, jr, ar) ? this._storeMetaIdentifier(Wr, Ir, ar) : jr ? (null == ar ? void 0 : ar.value.split(".")[3]) === jr ? {
            value: ar.value,
            pending: !ar.delivered
          } : this._storeMetaIdentifier(Wr, `fb.1.${Date.now()}.${jr}`, ar) : ar ? {
            value: ar.value,
            pending: !ar.delivered
          } : void 0
        }
        _updateFacebookBrowserId(rr, Sr, Qr) {
          if (!this.persistence) return;
          const Zr = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(Zr.persistenceKey);
          const Wr = this._getPersistedMetaIdentifier(Zr);
          if (Qr) return void Zr.unregister();
          if (Sr) return TQ(rr) && Gx.test(rr) ? this._storeMetaIdentifier(Zr, rr, Wr) : void Zr.unregister();
          const ar = this._readMetaCookie(Zr);
          return ar ? this._storeMetaIdentifier(Zr, ar, Wr) : Wr ? {
            value: Wr.value,
            pending: !Wr.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(rr, Sr) {
          if (!this.persistence) return;
          this.persistence.refreshKey(rr.persistenceKey);
          const Qr = this._getPersistedMetaIdentifier(rr);
          (null == Qr ? void 0 : Qr.value) !== Sr || Qr.delivered || rr.register(Sr, !0)
        }
        capture(rr, Sr, Qr) {
          var Zr, Wr;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void Cj.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (BQ(rr) || !TQ(rr)) return void Cj.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === rr && this._inCookielessMode()) return;
          const ar = !this.config.opt_out_useragent_filter && this._is_bot();
          if (ar && !this.config.__preview_capture_bot_pageviews) return;
          const jr = (null == Qr ? void 0 : Qr.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == jr ? void 0 : jr.isRateLimited) return void Cj.critical("This capture call is ignored due to client rate limiting.");
          let Ir;
          (null == Sr ? void 0 : Sr.$current_url) && !TQ(null == Sr ? void 0 : Sr.$current_url) && (Cj.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == Sr || delete Sr.$current_url), "$exception" !== rr || (null == Qr ? void 0 : Qr._originatedFromCaptureException) || Cj.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (Ir = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const fr = new Date,
            Er = (null == Qr ? void 0 : Qr.timestamp) || fr,
            pr = fW(null == Qr ? void 0 : Qr.uuid, QI);
          let xr = {
            uuid: pr,
            event: rr,
            properties: this.calculateEventProperties(rr, Sr || {}, Er, pr)
          };
          "$pageview" === rr && this.config.__preview_capture_bot_pageviews && ar && (xr.event = "$bot_pageview", xr.properties.$browser_type = "bot"), jr && (xr.properties.$lib_rate_limit_remaining_tokens = jr.remainingTokens);
          const mr = "$feature_flag_called" === rr && !1 === xr.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == Qr ? void 0 : Qr.$set) && !mr && (xr.$set = null == Qr ? void 0 : Qr.$set);
          const Nr = KQ(null == Sr ? void 0 : Sr.$set) ? Sr.$set : void 0,
            Ur = nQ(null == Sr ? void 0 : Sr.$unset) ? Sr.$unset : [],
            tr = (null == Qr ? void 0 : Qr.$unset) || [],
            hr = rr => {
              var Sr;
              const Zr = !!(null == Qr ? void 0 : Qr.$set) && rr in Qr.$set;
              return {
                hasProvided: Zr || !!Nr && rr in Nr,
                provided: Zr ? null == Qr || null === (Sr = Qr.$set) || void 0 === Sr ? void 0 : Sr[rr] : null == Nr ? void 0 : Nr[rr],
                unset: -1 !== Ur.indexOf(rr) || -1 !== tr.indexOf(rr)
              }
            },
            zr = hr(lr),
            Yr = hr(Pr),
            nr = [{
              channel: this._facebookClickIdChannel,
              hasProvided: zr.hasProvided,
              update: this._updateFacebookClickId(null == Ir ? void 0 : Ir.fbclid, zr.provided, zr.hasProvided, zr.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: Yr.hasProvided,
              update: this._updateFacebookBrowserId(Yr.provided, Yr.hasProvided, Yr.unset)
            }];
          for (const {
              channel: lr,
              hasProvided: Pr,
              update: Hr
            }
            of nr) Hr && !0 === xr.properties.$process_person_profile && Hr.pending && !Pr && !mr && (xr.$set = YW({
            [lr.property]: Hr.value
          }, xr.$set));
          const er = null == Qr ? void 0 : Qr.$unset;
          er && (xr.$unset = er);
          const Kr = mr ? void 0 : this._calculate_set_once_properties(null == Qr ? void 0 : Qr.$set_once, rr !== JS, rr === bS);
          if (Kr && (xr.$set_once = Kr), (null == Qr ? void 0 : Qr._noTruncate) || (yr = this.config.properties_string_max_length, xr = function(rr, Sr) {
              const Qr = new Set;
              return function rr(Zr, Wr) {
                if (Zr !== Object(Zr)) return Sr ? Sr(Zr) : Zr;
                if (Qr.has(Zr)) return;
                let ar;
                if (Qr.add(Zr), nQ(Zr)) ar = [], Gj(Zr, (Sr => {
                  ar.push(rr(Sr))
                }));
                else {
                  const Sr = {};
                  kj(CQ(Zr) ? cj(Zr) : Zr, ((Zr, Wr) => {
                    Qr.has(Zr) || (Sr[Wr] = rr(Zr, Wr))
                  })), ar = Sr
                }
                return ar
              }(rr)
            }(xr, (rr => TQ(rr) ? rr.slice(0, yr) : rr))), xr.timestamp = Er, BQ(null == Qr ? void 0 : Qr.timestamp) || (xr.properties.$event_time_override_provided = !0, xr.properties.$event_time_override_system_time = fr), mr && (xr.properties = function(rr) {
              let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const Qr = {},
                Zr = Sr => {
                  void 0 !== rr[Sr] && (Qr[Sr] = rr[Sr])
                };
              return ta.forEach(Zr), Sr.forEach(Zr), Qr
            }(xr.properties, kx)), rr === TE || rr === vE) {
            const Qr = null == Sr ? void 0 : Sr[OE],
              Zr = null == Sr ? void 0 : Sr[LE];
            Nx({
              id: Qr,
              current_iteration: Zr
            }), xr.$set = YW(YW({}, xr.$set), {}, {
              [rx({
                id: Qr,
                current_iteration: Zr
              }, rr === vE ? "responded" : "dismissed")]: !0
            })
          } else rr === BE && (xr.$set = YW(YW({}, xr.$set), {}, {
            [lE]: (new Date).toISOString()
          }));
          var yr;
          if (rr === qE) {
            const rr = null == Sr ? void 0 : Sr[gE];
            rr && (xr.$set = YW(YW({}, xr.$set), {}, {
              [`${RE}/${rr}`]: (new Date).toISOString()
            }))
          }
          const Br = YW(YW({}, xr.properties.$set), xr.$set);
          if (yQ(Br) || this.setPersonPropertiesForFlags(Br), !LQ(this.config.before_send)) {
            const rr = this._runBeforeSend(xr);
            if (!rr) return;
            xr = rr, xr.uuid = fW(xr.uuid, QI)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && gx(rr) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const Tr = nr.filter((rr => {
            let {
              channel: Sr,
              update: Qr
            } = rr;
            var Zr, Wr, ar;
            const jr = null !== (Zr = null === (Wr = xr.$set) || void 0 === Wr ? void 0 : Wr[Sr.property]) && void 0 !== Zr ? Zr : KQ(null === (ar = xr.properties) || void 0 === ar ? void 0 : ar.$set) ? xr.properties.$set[Sr.property] : void 0;
            return (null == Qr ? void 0 : Qr.pending) && jr === Qr.value
          }));
          this._internalEventEmitter.emit("eventCaptured", xr);
          const vr = null !== (Zr = null == Qr ? void 0 : Qr._url) && void 0 !== Zr ? Zr : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            Or = "recordings" === (null == Qr ? void 0 : Qr._batchKey) || /\/s\/(?:\?|$)/.test(vr),
            Lr = YW(YW(YW({
              method: "POST",
              url: vr,
              data: xr,
              compression: "best-available",
              preferSyncCompression: null == Qr ? void 0 : Qr.send_instantly,
              timestampMode: Or ? "body" : "capture-body",
              batchKey: null == Qr ? void 0 : Qr._batchKey
            }, Or && (null === (Wr = xr.properties) || void 0 === Wr ? void 0 : Wr.$session_id) ? {
              batchGroup: xr.properties.$session_id + (xr.properties.$window_id ? `-${xr.properties.$window_id}` : "")
            } : {}), (null == Qr ? void 0 : Qr.transport) ? {
              transport: Qr.transport
            } : {}), Tr.length ? {
              fireCallbackOnDrop: !0,
              callback: rr => {
                if (rr.statusCode >= 200 && 300 > rr.statusCode)
                  for (const {
                      channel: Sr,
                      update: Qr
                    }
                    of Tr) this._markMetaIdentifierDelivered(Sr, Qr.value)
              }
            } : {});
          if (!this.config.request_batching || Qr && !(null == Qr ? void 0 : Qr._batchKey) || (null == Qr ? void 0 : Qr.send_instantly)) {
            var Xr;
            let rr;
            !Lr.transport && !Lr.callback && yQ(null !== (Xr = this.config.request_headers) && void 0 !== Xr ? Xr : {}) && this._isPageUnloading && (rr = "sendBeacon"), this._send_retriable_request(Lr, rr)
          } else this._requestQueue.enqueue(Lr);
          return xr
        }
        _addCaptureHook(rr) {
          return this.on("eventCaptured", (Sr => rr(Sr.event, Sr)))
        }
        getExtension(rr) {
          var Sr;
          return null === (Sr = this._browserClientAdapter) || void 0 === Sr ? void 0 : Sr.getExtension(rr)
        }
        _getBrowserClientAdapter() {
          var rr;
          return null !== (rr = this._browserClientAdapter) && void 0 !== rr ? rr : this._browserClientAdapter = new Tx(this)
        }
        _registerExtensionEventProperties(rr) {
          this._extensionEventPropertyProducers.push(rr);
          let Sr = !0;
          return () => {
            if (!Sr) return;
            Sr = !1;
            const Qr = this._extensionEventPropertyProducers.indexOf(rr); - 1 !== Qr && this._extensionEventPropertyProducers.splice(Qr, 1)
          }
        }
        _processCookieIdentityChange() {
          let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var Sr, Qr, Zr;
          return !!(null === (Sr = this.persistence) || void 0 === Sr ? void 0 : Sr.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (Zr = this.sessionPersistence) || void 0 === Zr || Zr.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (Qr = this.featureFlags) || void 0 === Qr || Qr.reset(), rr && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(rr, Sr, Qr, Zr, ar) {
          if (Qr = Qr || new Date, !this.persistence || !this.sessionPersistence) return Sr;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const jr = ar ? void 0 : this.persistence.remove_event_timer(rr);
          let Ir = YW({}, Sr);
          if (Ir.token = this.config.token, Ir.$config_defaults = this.config.defaults, this._inCookielessMode() && (Ir[OS] = !0), "$snapshot" === rr) {
            const rr = YW(YW({}, this.persistence.properties()), this.sessionPersistence.properties());
            return Ir.distinct_id = rr.distinct_id, (!TQ(Ir.distinct_id) && !lQ(Ir.distinct_id) || vQ(Ir.distinct_id)) && Cj.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), Ir
          }
          const fr = function(rr, Sr, Qr) {
            let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var ar, jr, Ir, fr;
            if (!aQ) return {};
            const Er = rr ? [...Vf, ...Sr || []] : [],
              [pr, xr] = DZ(aQ),
              [mr, Nr] = function(rr) {
                for (let Sr = 0; rW.length > Sr; Sr++) {
                  const [Qr, Zr, Wr] = rW[Sr], ar = rr.match(Qr);
                  if (ar) {
                    const Sr = Wr && rr.match(Wr) || ar;
                    return [Zr, (null == Sr ? void 0 : Sr[1]) || ""]
                  }
                }
                return ["", ""]
              }(aQ),
              Ur = function() {
                const rr = "u" > typeof navigator ? navigator : void 0;
                return (null == rr ? void 0 : rr.brave) ? {
                  brave: !0
                } : {}
              }(),
              tr = {};
            BQ(Qr) || (tr.detectGoogleSearchApp = Qr);
            const hr = {},
              zr = null === (ar = navigator) || void 0 === ar || null === (ar = ar.userAgentData) || void 0 === ar ? void 0 : ar.platform,
              Yr = null === (jr = navigator) || void 0 === jr ? void 0 : jr.maxTouchPoints,
              nr = null == DS || null === (Ir = DS.screen) || void 0 === Ir ? void 0 : Ir.width,
              er = null == DS || null === (fr = DS.screen) || void 0 === fr ? void 0 : fr.height,
              Kr = null == DS ? void 0 : DS.devicePixelRatio;
            BQ(zr) || (hr.userAgentDataPlatform = zr), BQ(Yr) || (hr.maxTouchPoints = Yr), BQ(nr) || (hr.screenWidth = nr), BQ(er) || (hr.screenHeight = er), BQ(Kr) || (hr.devicePixelRatio = Kr);
            const yr = Aj(wj({
              $os: pr,
              $os_version: xr,
              $browser: FZ(aQ, navigator.vendor, Ur, tr),
              $webview_app: mr,
              $webview_app_version: Nr,
              $device: dZ(aQ),
              $device_type: sZ(aQ, hr),
              $timezone: Hf(),
              $timezone_offset: ZE()
            }), {
              $current_url: kf(Zr ? pW(null == rQ ? void 0 : rQ.href) : null == rQ ? void 0 : rQ.href, Er, Ff),
              $host: null == rQ ? void 0 : rQ.host,
              $pathname: null == rQ ? void 0 : rQ.pathname,
              $raw_user_agent: aQ.length > 1e3 ? aQ.substring(0, 997) + "..." : aQ,
              $browser_version: bZ(aQ, navigator.vendor, Ur, tr),
              $browser_language: df(),
              $browser_language_prefix: sf(),
              $screen_height: null == DS ? void 0 : DS.screen.height,
              $screen_width: null == DS ? void 0 : DS.screen.width,
              $viewport_height: null == DS ? void 0 : DS.innerHeight,
              $viewport_width: null == DS ? void 0 : DS.innerWidth,
              $lib: Wr.LIB_NAME,
              $lib_version: Wr.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return Wr.SDK_DIST_CHANNEL && (yr.$sdk_dist_channel = Wr.SDK_DIST_CHANNEL), yr
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: rr,
              windowId: Sr
            } = this.sessionManager.checkAndGetSessionAndWindowId(ar, Qr.getTime(), !0);
            Ir.$session_id = rr, Ir.$window_id = Sr
          }
          this.sessionPropsManager && Aj(Ir, this.sessionPropsManager.getSessionProps());
          try {
            var Er;
            if (this.sessionRecording) {
              const Sr = this.sessionRecording.sdkDebugProperties,
                Qr = !this._replayDebugPropertiesPaused && gx(rr);
              for (const rr in Sr)(Qr || mQ(qx, rr)) && (Ir[rr] = Sr[rr])
            }
            Ir.$sdk_debug_retry_queue_size = null === (Er = this._retryQueue) || void 0 === Er ? void 0 : Er.length
          } catch (rr) {
            Ir.$sdk_debug_error_capturing_properties = String(rr)
          }
          let pr;
          if (this.requestRouter.region === Ix && (Ir.$lib_custom_api_host = this.config.api_host), pr = "$pageview" !== rr || ar ? "$pageleave" !== rr || ar ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(Qr) : this.pageViewManager.doPageView(Qr, Zr), Ir = Aj(Ir, pr), "$pageview" === rr && uS && (Ir.title = uS.title), !BQ(jr)) {
            const rr = Qr.getTime() - jr;
            Ir.$duration = parseFloat((rr / 1e3).toFixed(3))
          }
          aQ && this.config.opt_out_useragent_filter && (Ir.$browser_type = this._is_bot() ? "bot" : "browser");
          const xr = this.persistence.properties(),
            mr = this.sessionPersistence.properties(),
            Nr = Ir.$groups,
            Ur = xr.$groups;
          KQ(Nr) && !yQ(Nr) && (Ir.$groups = YW(YW({}, KQ(Ur) ? Ur : {}), Nr)), kj(["$referrer", "$referring_domain"], (rr => {
            rr in xr && delete mr[rr]
          }));
          const tr = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const Wr of this._extensionEventPropertyProducers.slice()) try {
              Aj(tr, Wr())
            } catch (rr) {
              Cj.error("Failed to produce browser extension event properties", rr)
            }
          Ir = Aj({}, fr, xr, mr, YW(YW({}, tr), Ir)), Ir.$is_identified = this._isIdentified(), nQ(this.config.property_denylist) ? kj(this.config.property_denylist, (function(rr) {
            delete Ir[rr]
          })) : Cj.error(Hx + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const hr = this.config.sanitize_properties;
          hr && (Cj.error(Px), Ir = hr(Ir, rr));
          const zr = this._hasPersonProcessing();
          return Ir.$process_person_profile = zr, zr && !ar && this._requirePersonProcessing("_calculate_event_properties"), Ir
        }
        _calculate_set_once_properties(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var Zr;
          if (!this.persistence || !this._hasPersonProcessing()) return rr;
          if (this._personProcessingSetOncePropertiesSent && !Qr) return rr;
          const Wr = this.persistence.get_initial_props(),
            ar = null === (Zr = this.sessionPropsManager) || void 0 === Zr ? void 0 : Zr.getSetOnceProps();
          let jr = Aj({}, Wr, ar || {}, rr || {});
          const Ir = this.config.sanitize_properties;
          return Ir && (Cj.error(Px), jr = Ir(jr, "$set_once")), Sr && (this._personProcessingSetOncePropertiesSent = !0), yQ(jr) ? void 0 : jr
        }
        register(rr, Sr) {
          var Qr;
          null === (Qr = this.persistence) || void 0 === Qr || Qr.register(rr, Sr)
        }
        register_once(rr, Sr, Qr) {
          var Zr;
          null === (Zr = this.persistence) || void 0 === Zr || Zr.register_once(rr, Sr, Qr)
        }
        register_for_session(rr) {
          var Sr, Qr;
          null === (Sr = this.persistence) || void 0 === Sr || Sr.syncCookieProperties(), this._processCookieIdentityChange(), null === (Qr = this.sessionPersistence) || void 0 === Qr || Qr.register(rr), Object.keys(rr).forEach((rr => this._sessionRegisteredPropKeys.add(rr))), this._persistSessionRegisteredPropKeys()
        }
        unregister(rr) {
          var Sr;
          null === (Sr = this.persistence) || void 0 === Sr || Sr.unregister(rr)
        }
        unregister_for_session(rr) {
          var Sr;
          null === (Sr = this.sessionPersistence) || void 0 === Sr || Sr.unregister(rr), this._sessionRegisteredPropKeys.delete(rr), this._persistSessionRegisteredPropKeys()
        }
        _register_single(rr, Sr) {
          this.register({
            [rr]: Sr
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((rr => {
            var Sr;
            null === (Sr = this.sessionPersistence) || void 0 === Sr || Sr.unregister(rr)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var rr;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (rr = this.sessionPersistence) || void 0 === rr ? void 0 : rr._disabled) || !BI._is_supported()) return void BI._remove(this._sessionRegisteredPropertiesStorageKey);
          const Sr = [];
          this._sessionRegisteredPropKeys.forEach((rr => Sr.push(rr))), Sr.length > 0 ? BI._set(this._sessionRegisteredPropertiesStorageKey, Sr) : BI._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(rr, Sr) {
          var Qr;
          return null === (Qr = this.featureFlags) || void 0 === Qr ? void 0 : Qr.getFeatureFlag(rr, Sr)
        }
        getFeatureFlagPayload(rr) {
          var Sr;
          return null === (Sr = this.featureFlags) || void 0 === Sr ? void 0 : Sr.getFeatureFlagPayload(rr)
        }
        getFeatureFlagResult(rr, Sr) {
          var Qr;
          return null === (Qr = this.featureFlags) || void 0 === Qr ? void 0 : Qr.getFeatureFlagResult(rr, Sr)
        }
        getAllFeatureFlags() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.featureFlags) || void 0 === Sr ? void 0 : Sr.getAllFeatureFlags()) && void 0 !== rr ? rr : []
        }
        isFeatureEnabled(rr, Sr) {
          var Qr, Zr;
          return null !== (Qr = null === (Zr = this.featureFlags) || void 0 === Zr ? void 0 : Zr.isFeatureEnabled(rr, Sr)) && void 0 !== Qr ? Qr : null == Sr ? void 0 : Sr.defaultValue
        }
        reloadFeatureFlags() {
          var rr;
          null === (rr = this.featureFlags) || void 0 === rr || rr.reloadFeatureFlags()
        }
        updateFlags(rr, Sr, Qr) {
          var Zr;
          null === (Zr = this.featureFlags) || void 0 === Zr || Zr.updateFlags(rr, Sr, Qr)
        }
        updateEarlyAccessFeatureEnrollment(rr, Sr, Qr) {
          var Zr;
          null === (Zr = this.featureFlags) || void 0 === Zr || Zr.updateEarlyAccessFeatureEnrollment(rr, Sr, Qr)
        }
        getEarlyAccessFeatures(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          var Zr;
          return null === (Zr = this.featureFlags) || void 0 === Zr ? void 0 : Zr.getEarlyAccessFeatures(rr, Sr, Qr)
        }
        on(rr, Sr) {
          return this._internalEventEmitter.on(rr, Sr)
        }
        onFeatureFlags(rr) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(rr) : (rr([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(rr) {
          return this.surveys ? this.surveys.onSurveysLoaded(rr) : (rr([], {
            isLoaded: !1,
            error: Xx
          }), () => {})
        }
        onSessionId(rr) {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = this.sessionManager) || void 0 === Qr ? void 0 : Qr.onSessionId(rr)) && void 0 !== Sr ? Sr : () => {}
        }
        getSurveys(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(rr, Sr) : rr([], {
            isLoaded: !1,
            error: Xx
          })
        }
        getActiveMatchingSurveys(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(rr, Sr) : rr([], {
            isLoaded: !1,
            error: Xx
          })
        }
        onActiveMatchingSurveysChanged(rr) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(rr) : (rr([], {
            isLoaded: !1,
            error: Xx
          }), () => {})
        }
        renderSurvey(rr, Sr) {
          var Qr;
          null === (Qr = this.surveys) || void 0 === Qr || Qr.renderSurvey(rr, Sr)
        }
        displaySurvey(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tx;
          var Qr;
          null === (Qr = this.surveys) || void 0 === Qr || Qr.displaySurvey(rr, Sr)
        }
        cancelPendingSurvey(rr) {
          var Sr;
          null === (Sr = this.surveys) || void 0 === Sr || Sr.cancelPendingSurvey(rr)
        }
        canRenderSurvey(rr) {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = this.surveys) || void 0 === Qr ? void 0 : Qr.canRenderSurvey(rr)) && void 0 !== Sr ? Sr : {
            visible: !1,
            disabledReason: Xx
          }
        }
        canRenderSurveyAsync(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var Qr, Zr;
          return null !== (Qr = null === (Zr = this.surveys) || void 0 === Zr ? void 0 : Zr.canRenderSurveyAsync(rr, Sr)) && void 0 !== Qr ? Qr : Promise.resolve({
            visible: !1,
            disabledReason: Xx
          })
        }
        _validateIdentifyId(rr) {
          return !rr || vQ(rr) ? (Cj.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === rr ? (Cj.critical(`The string "${rr}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(rr.toLowerCase()) && !["undefined", "null"].includes(rr.toLowerCase()) || (Cj.critical(`The string "${rr}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(rr, Sr, Qr) {
          if (!this.__loaded || !this.persistence) return Cj.uninitializedWarning("posthog.identify");
          if (lQ(rr) && (rr = rr.toString(), Cj.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(rr)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const Zr = this.get_distinct_id(),
            Wr = this.persistence.syncCookieProperties() && this.get_distinct_id() !== Zr,
            ar = this._processCookieIdentityChange(!1),
            jr = this.persistence._beginCookieSyncSuppression();
          let Ir = !1;
          try {
            const Zr = this.get_distinct_id();
            this.register({
              $user_id: rr
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: Zr
            }, ""), rr !== Zr && rr !== this.get_property("__alias") && (this.unregister(Or), this.register({
              distinct_id: rr
            }));
            const jr = (this.persistence.get_property("$user_state") || "anonymous") === VS,
              Er = rr !== Zr,
              pr = !Er && jr;
            if (Er && jr) {
              var fr;
              const Wr = this.config.reuseAnonymousId ? {
                distinct_id: rr
              } : {
                distinct_id: rr,
                $anon_distinct_id: Zr
              };
              this.persistence.set_property(YS, iS), this.setPersonPropertiesForFlags({
                $set: Sr || {},
                $set_once: Qr || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", Wr, {
                $set: Sr || {},
                $set_once: Qr || {}
              }) && (this._cachedPersonProperties = jx(rr, Sr, Qr)), null === (fr = this.featureFlags) || void 0 === fr || fr.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : Zr)
            } else if (pr) {
              this.persistence.set_property(YS, iS);
              const Zr = Sr || {},
                Wr = Qr || {};
              this.setPersonPropertiesForFlags({
                $set: Zr,
                $set_once: Wr
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: Zr,
                $set_once: Wr
              }) && (this._cachedPersonProperties = jx(rr, Sr, Qr))
            } else(Sr || Qr) && this.setPersonProperties(Sr, Qr);
            Er || Wr || ar ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(hr)) : pr && (Sr || Qr) && this.reloadFeatureFlags(), Ir = !0
          } finally {
            jr && this.persistence._endCookieSyncSuppression(Ir)
          }
        }
        setPersonProperties(rr, Sr) {
          if (!rr && !Sr) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const Qr = jx(this.get_distinct_id(), rr, Sr);
          this._cachedPersonProperties !== Qr ? (this.setPersonPropertiesForFlags({
            $set: rr || {},
            $set_once: Sr || {}
          }, !0), this.capture("$set", {
            $set: rr || {},
            $set_once: Sr || {}
          }) && (this._cachedPersonProperties = Qr)) : Cj.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(rr) {
          var Sr;
          const Qr = (nQ(rr) ? rr : [rr]).filter((rr => TQ(rr) && rr.length > 0));
          0 !== Qr.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (Sr = this.featureFlags) || void 0 === Sr || Sr.unsetPersonPropertiesForFlags(Qr, !0), this.capture("$set", {
            $unset: Qr
          }), this._cachedPersonProperties = null)
        }
        group(rr, Sr, Qr) {
          var Zr;
          if (!rr || !Sr) return void Cj.error("posthog.group requires a group type and group key");
          null === (Zr = this.persistence) || void 0 === Zr || Zr.syncCookieProperties(), this._processCookieIdentityChange();
          const Wr = this.getGroups(),
            ar = Wr[rr] !== Sr;
          if (ar && this.resetGroupPropertiesForFlags(rr), this.register({
              $groups: YW(YW({}, Wr), {}, {
                [rr]: Sr
              })
            }), (ar || Qr) && this._hasPersonProcessing()) {
            const Zr = {
              $group_type: rr,
              $group_key: Sr
            };
            Qr && (Zr.$group_set = Qr), this.capture(JS, Zr)
          }
          Qr && this.setGroupPropertiesForFlags({
            [rr]: Qr
          }), ar && !Qr && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var Qr;
          null === (Qr = this.featureFlags) || void 0 === Qr || Qr.setPersonPropertiesForFlags(rr, Sr)
        }
        resetPersonPropertiesForFlags() {
          let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var Sr;
          null === (Sr = this.featureFlags) || void 0 === Sr || Sr.resetPersonPropertiesForFlags(rr)
        }
        setGroupPropertiesForFlags(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var Qr;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (Qr = this.featureFlags) || void 0 === Qr || Qr.setGroupPropertiesForFlags(rr, Sr))
        }
        resetGroupPropertiesForFlags(rr) {
          var Sr;
          null === (Sr = this.featureFlags) || void 0 === Sr || Sr.resetGroupPropertiesForFlags(rr)
        }
        reset(rr) {
          const Sr = PQ(rr) ? rr : null == rr ? void 0 : rr.resetDeviceID,
            Qr = PQ(rr) || null == rr ? void 0 : rr.bootstrap;
          this._reset(Sr, !1, Qr)
        }
        _reset(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          var Zr, Wr, ar, jr, Ir, fr;
          if (Cj.info("reset"), !this.__loaded) return Cj.uninitializedWarning("posthog.reset");
          const Er = null == Qr ? void 0 : Qr.sessionID;
          this.config.bootstrap = Qr || (null === (Zr = this._originalUserConfig) || void 0 === Zr ? void 0 : Zr.bootstrap) || {}, null === (Wr = this.featureFlags) || void 0 === Wr || null === (ar = Wr.updateConfig) || void 0 === ar || ar.call(Wr, this.config, this._shouldDisableFlags());
          const pr = this.get_property(Tr),
            xr = this.get_property(vr),
            mr = this.get_property(cr);
          null === (jr = this.sessionRecording) || void 0 === jr || jr.flushBeforeIdentityReset();
          const Nr = this.is_capturing();
          Sr || this.consent.reset(), Sr || !Nr || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const Ur = null === (Ir = this.persistence) || void 0 === Ir || null === (fr = Ir._beginCookieSyncSuppression) || void 0 === fr ? void 0 : fr.call(Ir),
            tr = this._isConsentTransition;
          this._isConsentTransition = tr || Sr;
          let hr = !1;
          try {
            var zr, Yr, nr, er, Kr, yr, Br, Or, Lr, lr, Xr, Pr, Hr;
            if (null === (zr = this.persistence) || void 0 === zr || zr.clear(), null === (Yr = this.sessionPersistence) || void 0 === Yr || Yr.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), BQ(mr) || null === (lr = this.persistence) || void 0 === lr || lr.register({
                $session_recording_remote_config: mr
              }), null === (nr = this.surveys) || void 0 === nr || nr.reset(), null === (er = this.featureFlags) || void 0 === er || er.reset(), null === (Kr = this.conversations) || void 0 === Kr || Kr.reset(), null === (yr = this.logs) || void 0 === yr || yr.reset(), null === (Br = this.metrics) || void 0 === Br || Br.reset(), null === (Or = this.persistence) || void 0 === Or || Or.set_property("$user_state", "anonymous"), null === (Lr = this.sessionManager) || void 0 === Lr || Lr.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: vS,
              $device_id: null
            }, "");
            else {
              const Sr = this.config.get_device_id(QI());
              this.register_once({
                distinct_id: Sr,
                $device_id: rr ? Sr : pr
              }, ""), rr || BQ(xr) || this.register({
                [vr]: xr
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), Qr && (Qr.distinctID && !this._inCookielessMode() && (null === (Hr = this.persistence) || void 0 === Hr || Hr.set_property("$user_state", Qr.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: Qr.distinctID
              })), null === (Xr = this.featureFlags) || void 0 === Xr || Xr.initialize(), !LQ(Er) && !(null === (Pr = this.sessionManager) || void 0 === Pr ? void 0 : Pr.setBootstrapSessionId(Er, !0)))) {
              const rr = YW({}, Qr);
              delete rr.sessionID, this.config.bootstrap = rr
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, hr = !0
          } finally {
            var qr, Rr;
            this._isConsentTransition = tr, Ur && (null === (qr = this.persistence) || void 0 === qr || null === (Rr = qr._endCookieSyncSuppression) || void 0 === Rr || Rr.call(qr, hr))
          }
          this.reloadFeatureFlags()
        }
        shutdown(rr) {
          var Sr = this;
          return wQ((function*() {
            if (!Sr.__loaded) return void Cj.uninitializedWarning("posthog.shutdown");
            Sr._isShutdown = !0, clearTimeout(Sr._extensionInitTimeout), Sr._extensionInitTimeout = void 0;
            const rr = Sr._featureFlagsReloadingUnsubscribe;
            Sr._featureFlagsReloadingUnsubscribe = void 0;
            for (const Qr of [() => {
                var rr;
                return null === (rr = Sr.sessionRecording) || void 0 === rr ? void 0 : rr.dispose()
              }, () => {
                var rr;
                return null === (rr = Sr.logs) || void 0 === rr ? void 0 : rr.flushLogs("sendBeacon")
              }, () => {
                var rr;
                return null === (rr = Sr.metrics) || void 0 === rr ? void 0 : rr.flush("sendBeacon")
              }, () => {
                var rr;
                return null === (rr = Sr.metrics) || void 0 === rr ? void 0 : rr.dispose()
              }, () => {
                var rr;
                return null === (rr = Sr.logs) || void 0 === rr ? void 0 : rr.dispose()
              }, () => {
                var rr;
                return null === (rr = Sr.surveys) || void 0 === rr ? void 0 : rr.dispose()
              }, () => {
                var rr;
                return null === (rr = Sr.autocapture) || void 0 === rr ? void 0 : rr.dispose()
              }, () => null == rr ? void 0 : rr(), () => {
                var rr;
                return null === (rr = Sr._requestQueue) || void 0 === rr ? void 0 : rr.unload()
              }, () => {
                var rr;
                return null === (rr = Sr._retryQueue) || void 0 === rr ? void 0 : rr.unload()
              }, () => {
                var rr;
                return null === (rr = Sr.featureFlags) || void 0 === rr ? void 0 : rr.destroy()
              }, () => {
                var rr;
                return null === (rr = Sr.persistence) || void 0 === rr ? void 0 : rr.destroy()
              }, () => {
                var rr;
                return null === (rr = Sr.sessionPersistence) || void 0 === rr ? void 0 : rr.destroy()
              }]) try {
              const rr = Qr();
              rr && eQ(rr.then) && rr.then(void 0, (rr => {
                Cj.error("Error during shutdown", rr)
              }))
            } catch (rr) {
              Cj.error("Error during shutdown", rr)
            }
          }))()
        }
        setIdentity(rr, Sr) {
          var Qr;
          delete this.config.identity_claims, this.config.identity_distinct_id = rr, this.config.identity_hash = Sr, this.alias(rr), null === (Qr = this.conversations) || void 0 === Qr || Qr._onIdentityChanged()
        }
        clearIdentity() {
          var rr;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (rr = this.conversations) || void 0 === rr || rr._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.sessionManager) || void 0 === Sr ? void 0 : Sr.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== rr ? rr : ""
        }
        get_session_replay_url(rr) {
          if (!this.sessionManager) return "";
          const {
            sessionId: Sr,
            sessionStartTimestamp: Qr
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let Zr = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${Sr}`);
          if ((null == rr ? void 0 : rr.withTimestamp) && Qr) {
            var Wr;
            const Sr = null !== (Wr = rr.timestampLookBack) && void 0 !== Wr ? Wr : 10;
            if (!Qr) return Zr;
            Zr += `?t=${Math.max(Math.floor(((new Date).getTime()-Qr)/1e3)-Sr,0)}`
          }
          return Zr
        }
        alias(rr, Sr) {
          return rr === this.get_property("$people_distinct_id") ? (Cj.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (BQ(Sr) && (Sr = this.get_distinct_id()), rr !== Sr ? (this._register_single(Or, rr), this.capture("$create_alias", {
            alias: rr,
            distinct_id: Sr
          })) : (Cj.warn("alias matches current distinct_id - skipping api call."), this.identify(rr), -1)) : void 0
        }
        set_config(rr) {
          const Sr = YW({}, this.config);
          if (KQ(rr)) {
            var Qr, Zr, Wr, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr;
            Aj(this.config, cx(rr));
            const Kr = this._is_persistence_disabled();
            if (this.persistence) {
              const rr = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var zr, Yr;
              if (rr && this.sessionPersistence !== this.persistence && (null === (zr = this.sessionPersistence) || void 0 === zr || zr.remove(), null === (Yr = this.sessionPersistence) || void 0 === Yr || Yr.destroy()), this.persistence.update_config(this.config, Sr, Kr), rr) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new hE(YW(YW({}, this.config), {}, {
                persistence: "sessionStorage"
              }), Kr, !1);
              else {
                var nr;
                null === (nr = this.sessionPersistence) || void 0 === nr || nr.update_config(YW(YW({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), YW(YW({}, Sr), {}, {
                  persistence: "sessionStorage"
                }), Kr)
              }
            }
            const yr = this._checkLocalStorageForDebug(this.config.debug);
            var er;
            PQ(yr) && (this.config.debug = yr), PQ(this.config.debug) && (this.config.debug ? (ar.DEBUG = !0, EI._is_supported() && EI._set("ph_debug", !0), Cj.info("set_config", {
              config: rr,
              oldConfig: Sr,
              newConfig: YW({}, this.config)
            })) : (ar.DEBUG = !1, EI._is_supported() && EI._remove("ph_debug"))), null === (Qr = this.featureFlags) || void 0 === Qr || null === (Zr = Qr.updateConfig) || void 0 === Zr || Zr.call(Qr, this.config, this._shouldDisableFlags()), null === (Wr = this.exceptionObserver) || void 0 === Wr || Wr.onConfigChange(), null === (jr = this.exceptions) || void 0 === jr || jr.onConfigChange(), null === (Ir = this.metrics) || void 0 === Ir || Ir.onConfigChange(), null === (fr = this.webMCP) || void 0 === fr || fr.startIfEnabled(), null === (Er = this.sessionRecording) || void 0 === Er || Er.startIfEnabledOrStop(), null === (pr = this.tracingHeaders) || void 0 === pr || pr.startIfEnabledOrStop(), null === (xr = this.autocapture) || void 0 === xr || xr.startIfEnabled(), null === (mr = this.heatmaps) || void 0 === mr || mr.startIfEnabled(), ("capture_pageview" in rr || "disable_capture_url_hashes" in rr) && (null === (er = this.historyAutocapture) || void 0 === er || er.startIfEnabledOrStop()), null === (Nr = this.exceptionObserver) || void 0 === Nr || Nr.startIfEnabledOrStop(), null === (Ur = this.deadClicksAutocapture) || void 0 === Ur || Ur.startIfEnabledOrStop(), null === (tr = this.surveys) || void 0 === tr || tr.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (hr = this.externalIntegrations) || void 0 === hr || hr.startIfEnabledOrStop(), !Sr.segment && this.config.segment && this.persistence && yf(this, Lx, !1)
          }
        }
        _overrideSDKInfo(rr, Sr) {
          ar.LIB_NAME = rr, ar.LIB_VERSION = Sr
        }
        startSessionRecording(rr) {
          const Sr = !0 === rr,
            Qr = {
              sampling: Sr || !!(null == rr ? void 0 : rr.sampling),
              linked_flag: Sr || !!(null == rr ? void 0 : rr.linked_flag),
              url_trigger: Sr || !!(null == rr ? void 0 : rr.url_trigger),
              event_trigger: Sr || !!(null == rr ? void 0 : rr.event_trigger)
            };
          var Zr, Wr, ar, jr, Ir;
          Object.values(Qr).some(Boolean) && (null === (Zr = this.sessionManager) || void 0 === Zr || Zr.checkAndGetSessionAndWindowId(), Qr.sampling && (null === (Wr = this.sessionRecording) || void 0 === Wr || Wr.overrideSampling()), Qr.linked_flag && (null === (ar = this.sessionRecording) || void 0 === ar || ar.overrideLinkedFlag()), Qr.url_trigger && (null === (jr = this.sessionRecording) || void 0 === jr || jr.overrideTrigger("url")), Qr.event_trigger && (null === (Ir = this.sessionRecording) || void 0 === Ir || Ir.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var rr;
          return !!(null === (rr = this.sessionRecording) || void 0 === rr ? void 0 : rr.started)
        }
        captureException(rr, Sr) {
          try {
            if (!this.exceptions) return;
            const Qr = this.exceptions.buildProperties(rr, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(YW(YW({}, Qr), Sr))
          } catch (rr) {
            return
          }
        }
        addExceptionStep(rr, Sr) {
          var Qr;
          null === (Qr = this.exceptions) || void 0 === Qr || Qr.addExceptionStep(rr, Sr)
        }
        captureLog(rr) {
          var Sr;
          null === (Sr = this.logs) || void 0 === Sr || Sr.captureLog(rr)
        }
        get logger() {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = this.logs) || void 0 === Qr ? void 0 : Qr.logger) && void 0 !== Sr ? Sr : rr._noopLogger
        }
        startExceptionAutocapture(rr) {
          this.set_config({
            capture_exceptions: null == rr || rr
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(rr) {
          var Sr, Qr;
          return null !== (Sr = null === (Qr = this.toolbar) || void 0 === Qr ? void 0 : Qr.loadToolbar(rr)) && void 0 !== Sr && Sr
        }
        get_property(rr) {
          var Sr;
          return null === (Sr = this.persistence) || void 0 === Sr ? void 0 : Sr.props[rr]
        }
        getSessionProperty(rr) {
          var Sr;
          return null === (Sr = this.sessionPersistence) || void 0 === Sr ? void 0 : Sr.props[rr]
        }
        toString() {
          var rr;
          let Sr = null !== (rr = this.config.name) && void 0 !== rr ? rr : Ax;
          return Sr !== Ax && (Sr = "posthog." + Sr), Sr
        }
        _isIdentified() {
          var rr, Sr;
          return "identified" === (null === (rr = this.persistence) || void 0 === rr ? void 0 : rr.get_property("$user_state")) || "identified" === (null === (Sr = this.sessionPersistence) || void 0 === Sr ? void 0 : Sr.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var rr, Sr;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && yQ(this.getGroups()) && !(null === (rr = this.persistence) || void 0 === rr || null === (rr = rr.props) || void 0 === rr ? void 0 : rr.__alias) && !(null === (Sr = this.persistence) || void 0 === Sr || null === (Sr = Sr.props) || void 0 === Sr ? void 0 : Sr.$epp))
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
        _requirePersonProcessing(rr) {
          return "never" === this.config.person_profiles ? (Cj.error(rr + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(TS, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const rr = this.consent.isOptedOut();
          return this.config.disable_persistence || rr && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var rr, Sr;
          const Qr = this._is_persistence_disabled();
          var Zr, Wr, ar;
          return this.is_capturing() || null === (Zr = this.logs) || void 0 === Zr || Zr._onOptOut(), (null === (rr = this.persistence) || void 0 === rr ? void 0 : rr._disabled) !== Qr && (null === (Wr = this.persistence) || void 0 === Wr || Wr.set_disabled(Qr)), (null === (Sr = this.sessionPersistence) || void 0 === Sr ? void 0 : Sr._disabled) !== Qr && (null === (ar = this.sessionPersistence) || void 0 === ar || ar.set_disabled(Qr)), this._persistSessionRegisteredPropKeys(), Qr
        }
        opt_in_capturing(Sr) {
          var Qr;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var Zr, Wr, ar, jr, Ir, fr;
              null === (Zr = this.sessionRecording) || void 0 === Zr || Zr.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (Wr = this.sessionManager) || void 0 === Wr || Wr.destroy(), null === (ar = this.pageViewManager) || void 0 === ar || ar.destroy(), this.sessionManager = new Dp(this), this.pageViewManager = new Of(this), this.persistence && (this.sessionPropsManager = new Fp(this, this.sessionManager, this.persistence));
              const Sr = null !== (jr = null === (Ir = this.config.__extensionClasses) || void 0 === Ir ? void 0 : Ir.sessionRecording) && void 0 !== jr ? jr : null === (fr = rr.__defaultExtensionClasses) || void 0 === fr ? void 0 : fr.sessionRecording;
              var Er, pr;
              Sr && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new Sr(this)), this._lastRemoteConfig && (null === (Er = this.sessionRecording) || void 0 === Er || null === (pr = Er.onRemoteConfig) || void 0 === pr || pr.call(Er, this._lastRemoteConfig)))
            }
            var xr, mr;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (Qr = this.sessionRecording) || void 0 === Qr || Qr.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (xr = this.surveys) || void 0 === xr || xr.loadIfEnabled()), (BQ(null == Sr ? void 0 : Sr.captureEventName) || (null == Sr ? void 0 : Sr.captureEventName)) && this.capture(null !== (mr = null == Sr ? void 0 : Sr.captureEventName) && void 0 !== mr ? mr : "$opt_in", null == Sr ? void 0 : Sr.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else Cj.warn(lx)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : Cj.warn(lx)
        }
        _enterCookielessMode() {
          var rr, Sr;
          const Qr = this.sessionRecording;
          null == Qr || Qr.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: vS,
            $device_id: null
          }), this._removeExtension(Qr), this.sessionRecording = void 0, null === (rr = this.sessionManager) || void 0 === rr || rr.destroy(), null === (Sr = this.pageViewManager) || void 0 === Sr || Sr.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const rr = this.consent.consent;
          return 1 === rr ? "granted" : 0 === rr ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return sS ? dp(sS, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          uS && ("visible" === uS.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(FS, {
            title: uS.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (uS.removeEventListener(Kr, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), bj(uS, Kr, this._visibilityStateListener)))
        }
        debug(rr) {
          !1 === rr ? (null == DS || DS.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == DS || DS.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const rr = this._originalUserConfig || {};
          return "advanced_disable_flags" in rr ? !!rr.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (Cj.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(rr, Sr, Qr, Zr, Wr) {
            const ar = Sr in rr && !LQ(rr[Sr]),
              jr = Qr in rr && !LQ(rr[Qr]);
            return ar ? rr[Sr] : !!jr && (Wr && Wr.warn(`Config field '${Qr}' is deprecated. Please use '${Sr}' instead. The old field will be removed in a future major version.`), rr[Qr])
          }(rr, "advanced_disable_flags", "advanced_disable_decide", 0, Cj)
        }
        _runBeforeSend(rr) {
          var Sr;
          if (LQ(this.config.before_send)) return rr;
          const Qr = Object.keys(null !== (Sr = rr.properties) && void 0 !== Sr ? Sr : {}).filter(qQ),
            Zr = nQ(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let Wr = rr;
          for (const ar of Zr) try {
            if (Wr = ar(Wr), LQ(Wr)) {
              const Sr = `Event '${rr.event}' was rejected in beforeSend function`;
              return HQ(rr.event) ? Cj.warn(`${Sr}. This can cause unexpected behavior.`) : Cj.info(Sr), null
            }
            Wr.properties && !yQ(Wr.properties) || Cj.warn(`Event '${rr.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (Sr) {
            return Cj.error(`Error in beforeSend function for event '${rr.event}':`, Sr), null
          }
          for (const ar of Qr)
            if (Wr.properties && LQ(Wr.properties[ar])) return Cj.warn(`Event '${rr.event}' had its '${ar}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return Wr
        }
        getPageViewId() {
          var rr;
          return null === (rr = this.pageViewManager._currentPageview) || void 0 === rr ? void 0 : rr.pageViewId
        }
        captureTraceFeedback(rr, Sr) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(rr),
            $ai_feedback_text: Sr
          })
        }
        captureTraceMetric(rr, Sr, Qr) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(rr),
            $ai_metric_name: Sr,
            $ai_metric_value: String(Qr)
          })
        }
        _checkLocalStorageForDebug(rr) {
          const Sr = PQ(rr) && !rr,
            Qr = EI._is_supported() && "true" === EI._get("ph_debug");
          return !Sr && (!!Qr || rr)
        }
      };
    ox.__defaultExtensionClasses = {}, ox._noopLogger = (() => {
        const rr = () => {};
        return {
          trace: rr,
          debug: rr,
          info: rr,
          warn: rr,
          error: rr,
          fatal: rr
        }
      })(),
      function(rr, Sr) {
        for (let Qr = 0; Sr.length > Qr; Qr++) rr.prototype[Sr[Qr]] = ij(rr.prototype[Sr[Qr]])
      }(ox, ["identify"]);
    var bx = class {
      constructor(rr) {
        this.disabled = !1 === rr;
        const Sr = KQ(rr) ? rr : {};
        this.thresholdPx = Sr.threshold_px || 30, this.timeoutMs = Sr.timeout_ms || 1e3, this.clickCount = Sr.click_count || 3, this.clicks = []
      }
      isRageClick(rr, Sr, Qr) {
        if (this.disabled) return !1;
        const Zr = this.clicks[this.clicks.length - 1];
        if (Zr && Math.abs(rr - Zr.x) + Math.abs(Sr - Zr.y) < this.thresholdPx && this.timeoutMs > Qr - Zr.timestamp) {
          if (this.clicks.push({
              x: rr,
              y: Sr,
              timestamp: Qr
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: rr,
          y: Sr,
          timestamp: Qr
        }];
        return !1
      }
    };
    const Jx = "$copy_autocapture",
      Dx = Mj("[AutoCapture]");

    function dx(rr, Sr) {
      return Sr.length > rr ? Sr.slice(0, rr) + "..." : Sr
    }

    function sx(rr) {
      if (rr.previousElementSibling) return rr.previousElementSibling;
      let Sr = rr;
      do {
        Sr = Sr.previousSibling
      } while (Sr && !LI(Sr));
      return Sr
    }
    var ux = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(rr) {
          var Sr;
          if (!Zf(rr)) return !0;
          const Qr = null !== (Sr = this._refreshConfig().css_selector_ignorelist) && void 0 !== Sr ? Sr : iI,
            Zr = new Set;
          let Wr = rr;
          for (; Wr;) {
            if (Zr.size >= 1e3 || Zr.has(Wr)) return !0;
            Zr.add(Wr);
            const rr = Wr,
              Sr = RI(rr);
            if (mQ(Sr, "ph-no-capture") || mQ(Sr, "ph-sensitive") || Wf(rr) || Qr.some((Sr => kI(rr, Sr)))) return !0;
            const ar = Wr.parentNode;
            Wr = PI(ar) ? ar.host : ar && LI(ar) ? ar : null
          }
          return !1
        }
        _trackPointer(rr) {
          if (!this.isEnabled || "pointercancel" === rr.type) return void this._clearPointer();
          if ("pointerdown" === rr.type) {
            this._clearPointer();
            const Qr = MI(rr);
            var Sr;
            return void(rr.isPrimary && 0 === rr.button && !rr.ctrlKey && Qr && LI(Qr) && (this._pointerDown = {
              target: Qr,
              excluded: this._isExcludedPointerTarget(Qr),
              id: rr.pointerId,
              x: rr.clientX,
              y: rr.clientY,
              released: !1,
              distinctId: null === (Sr = this._client) || void 0 === Sr ? void 0 : Sr.distinctId
            }))
          }
          const Qr = this._pointerDown;
          Qr && (rr.pointerId !== Qr.id || Math.abs(rr.clientX - Qr.x) > 5 || Math.abs(rr.clientY - Qr.y) > 5 ? this._clearPointer() : "pointerup" === rr.type && (Qr.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(rr) {
          var Sr;
          const Qr = this._pointerDown;
          this._clearPointer();
          const Zr = MI(rr);
          if ((null == Qr ? void 0 : Qr.released) && Qr.target.isConnected && Qr.distinctId === (null === (Sr = this._client) || void 0 === Sr ? void 0 : Sr.distinctId) && rr.pointerId === Qr.id && (rr.detail > 0 || "touch" === rr.pointerType || "pen" === rr.pointerType) && 0 === rr.button && 5 >= Math.abs(rr.clientX - Qr.x) && 5 >= Math.abs(rr.clientY - Qr.y) && Zr && (lI(Zr, "html") || lI(Zr, "body"))) {
            var Wr;
            if (Qr.excluded) return null;
            const rr = null !== (Wr = this._refreshConfig().css_selector_ignorelist) && void 0 !== Wr ? Wr : iI;
            return [Zr, null == uS ? void 0 : uS.documentElement, null == uS ? void 0 : uS.body].some((Sr => {
              if (!Sr) return !1;
              const Qr = RI(Sr);
              return mQ(Qr, "ph-no-capture") || mQ(Qr, "ph-sensitive") || !Zf(Sr) || Wf(Sr) || rr.some((rr => kI(Sr, rr)))
            })) ? null : Qr.target
          }
        }
        constructor(rr) {
          this._configSource = rr, this.name = nx, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new bx(this._config.rageclick), this._elementSelectors = null
        }
        setup(rr) {
          this._compileUrlPatterns(), this._client = rr;
          const Sr = rr.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? Sr.dispose() : (this._remoteConfigSubscription = Sr, this.startIfEnabled())
        }
        dispose() {
          var rr;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (rr = this._remoteConfigSubscription) || void 0 === rr || rr.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var rr, Sr;
          return this._refreshConfig(), this._config.url_allowlist = null === (rr = this._config.url_allowlist) || void 0 === rr ? void 0 : rr.map((rr => new RegExp(rr))), this._config.url_ignorelist = null === (Sr = this._config.url_ignorelist) || void 0 === Sr ? void 0 : Sr.map((rr => new RegExp(rr))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void Dx.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!DS || !uS) return;
          const rr = this._domEventHandler = rr => {
            rr = rr || (null == DS ? void 0 : DS.event);
            try {
              if ("blur" === rr.type) return void this._clearPointer();
              if (0 === rr.type.indexOf("pointer")) return void this._trackPointer(rr);
              const Sr = "click" === rr.type ? this._recoverClickTarget(rr) : void 0;
              if (OQ(Sr)) return;
              this._captureEvent(rr, "$autocapture", Sr)
            } catch (rr) {
              Dx.error("Failed to capture event", rr)
            }
          };
          if (bj(DS, "blur", rr), bj(uS, "submit", rr, {
              capture: !0
            }), bj(uS, "change", rr, {
              capture: !0
            }), bj(uS, "click", rr, {
              capture: !0
            }), kj(["pointerdown", "pointermove", "pointerup", "pointercancel"], (Sr => {
              bj(uS, Sr, rr, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const rr = this._copiedTextHandler = rr => {
              rr = rr || (null == DS ? void 0 : DS.event);
              try {
                this._captureEvent(rr, Jx)
              } catch (rr) {
                Dx.error("Failed to capture clipboard event", rr)
              }
            };
            bj(uS, "copy", rr, {
              capture: !0
            }), bj(uS, "cut", rr, {
              capture: !0
            }), bj(uS, "paste", rr, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == DS || DS.removeEventListener("blur", this._domEventHandler), kj(["pointerdown", "pointermove", "pointerup", "pointercancel"], (rr => {
            null == uS || uS.removeEventListener(rr, this._domEventHandler, !0)
          })), null == uS || uS.removeEventListener("submit", this._domEventHandler, !0), null == uS || uS.removeEventListener("change", this._domEventHandler, !0), null == uS || uS.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == uS || uS.removeEventListener("copy", this._copiedTextHandler, !0), null == uS || uS.removeEventListener("cut", this._copiedTextHandler, !0), null == uS || uS.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(rr) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !rr.ok) return void this.startIfEnabled();
          const Sr = rr.config;
          Sr.elementsChainAsString && (this._elementsChainAsString = Sr.elementsChainAsString);
          const Qr = Sr.autocapture_opt_out;
          var Zr;
          PQ(Qr) && (null === (Zr = this._client) || void 0 === Zr || Zr.kv.set("$autocapture_disabled_server_side", Qr), this._isDisabledServerSide = Qr), this.startIfEnabled()
        }
        setElementSelectors(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          rr.size ? this._elementSelectorsByOwner.set(Sr, new Set(rr)) : this._elementSelectorsByOwner.delete(Sr);
          const Qr = new Set;
          this._elementSelectorsByOwner.forEach((rr => {
            rr.forEach((rr => Qr.add(rr)))
          })), this._elementSelectors = Qr
        }
        getElementSelectors(rr, Sr) {
          var Qr;
          const Zr = [];
          return null === (Qr = this._elementSelectors) || void 0 === Qr || Qr.forEach((Qr => {
            const Wr = null == uS ? void 0 : uS.querySelectorAll(Qr);
            null == Wr || Wr.forEach((Wr => {
              rr !== Wr && Sr !== Wr || mQ(Zr, Qr) || Zr.push(Qr)
            }))
          })), Zr
        }
        get isEnabled() {
          var rr, Sr;
          if (this._disposed) return !1;
          const Qr = null === (rr = this._client) || void 0 === rr ? void 0 : rr.kv.get(Rr),
            Zr = this._isDisabledServerSide,
            Wr = this._refreshConfig();
          if (!Wr.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const ar = Wr.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (OQ(Zr) && !PQ(Qr) && !ar) return !1;
          const jr = null !== (Sr = this._isDisabledServerSide) && void 0 !== Sr ? Sr : !!Qr;
          return !!Wr.enabled && !jr
        }
        _captureEvent(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let Zr = Qr || MI(rr);
          XI(Zr) && (Zr = Zr.parentNode || null);
          const Wr = this._compileUrlPatterns();
          var ar;
          "$autocapture" === Sr && "click" === rr.type && rr instanceof MouseEvent && Wr.rageclick && (null === (ar = this.rageclicks) || void 0 === ar ? void 0 : ar.isRageClick(rr.clientX, rr.clientY, rr.timeStamp || (new Date).getTime())) && rf(Zr, Wr.rageclick) && this._captureEvent(rr, "$rageclick", Qr);
          const jr = Sr === Jx,
            Ir = jr ? YW(YW({}, Wr), {}, {
              dom_event_allowlist: void 0
            }) : Wr;
          if (Zr && function(rr, Sr, Qr, Zr, Wr, ar) {
              var jr;
              if (!DS || Sf(rr)) return !1;
              if ((null == Qr ? void 0 : Qr.url_allowlist) && !qI(Qr.url_allowlist, ar)) return !1;
              if ((null == Qr ? void 0 : Qr.url_ignorelist) && qI(Qr.url_ignorelist, ar)) return !1;
              if (null == Qr ? void 0 : Qr.dom_event_allowlist) {
                const rr = Qr.dom_event_allowlist;
                if (rr && !rr.some((rr => Sr.type === rr))) return !1
              }
              const {
                parentIsUsefulElement: Ir,
                targetElementList: fr
              } = Qf(rr, Zr);
              if (! function(rr, Sr) {
                  const Qr = null == Sr ? void 0 : Sr.element_allowlist;
                  if (BQ(Qr)) return !0;
                  for (const Zr of rr)
                    if (Qr.some((rr => Zr.tagName.toLowerCase() === rr))) return !0;
                  return !1
                }(fr, Qr)) return !1;
              if (!AI(fr, null == Qr ? void 0 : Qr.css_selector_allowlist)) return !1;
              if (AI(fr, null !== (jr = null == Qr ? void 0 : Qr.css_selector_ignorelist) && void 0 !== jr ? jr : iI)) return !1;
              try {
                const Qr = DS.getComputedStyle(rr);
                if (Qr && "pointer" === Qr.getPropertyValue("cursor") && "click" === Sr.type) return !0
              } catch (rr) {}
              const Er = rr.tagName.toLowerCase();
              switch (Er) {
                case "html":
                  return !1;
                case "form":
                  return (Wr || ["submit"]).indexOf(Sr.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (Wr || ["change", "click"]).indexOf(Sr.type) >= 0;
                default:
                  return Ir ? (Wr || ["click"]).indexOf(Sr.type) >= 0 : (Wr || ["click"]).indexOf(Sr.type) >= 0 && (GI.indexOf(Er) > -1 || "true" === rr.getAttribute("contenteditable"))
              }
            }(Zr, rr, Ir, jr, jr ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: Wr.getCurrentUrl
              }
            })) {
            var fr;
            const {
              props: Qr,
              explicitNoCapture: ar,
              target: jr
            } = function(rr, Sr) {
              let {
                e: Qr,
                maskAllElementAttributes: Zr,
                maskAllText: Wr,
                elementAttributeIgnoreList: ar,
                elementsChainAsString: jr,
                disableCaptureUrlHashes: Ir
              } = Sr;
              var fr, Er;
              if (!LI(rr)) return {
                props: {}
              };
              const pr = [rr],
                xr = new Set([rr]);
              let mr = rr;
              for (; mr.parentNode && !lI(mr, "body") && 1e3 > pr.length;)
                if (PI(mr.parentNode)) {
                  const rr = mr.parentNode.host;
                  if (xr.has(rr)) break;
                  xr.add(rr), pr.push(rr), mr = rr
                } else {
                  if (!LI(mr.parentNode)) break;
                  if (xr.has(mr.parentNode)) break;
                  xr.add(mr.parentNode), pr.push(mr.parentNode), mr = mr.parentNode
                } const Nr = "click" === Qr.type && "http://www.w3.org/2000/svg" === rr.namespaceURI ? pr.findIndex((rr => lI(rr, "button") || lI(rr, "a"))) : -1;
              Nr > 0 && (Wr = Wr || pr.slice(0, Nr + 1).some((rr => !Zf(rr) || Wf(rr))));
              const Ur = [],
                tr = {};
              let hr, zr = !1,
                Yr = !1;
              if (kj(pr, (rr => {
                  const Sr = Zf(rr);
                  if (lI(rr, "a") && !Zr && !(null == ar ? void 0 : ar.includes("href"))) {
                    const Qr = rr.getAttribute("href");
                    zr = !!(Sr && Qr && mf(Qr)) && (Ir ? pW(Qr) : Qr)
                  }
                  mQ(RI(rr), "ph-no-capture") && (Yr = !0), Ur.push(function(rr, Sr, Qr, Zr) {
                    let Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const ar = rr.tagName.toLowerCase(),
                      jr = {
                        tag_name: ar
                      };
                    GI.indexOf(ar) > -1 && !Qr && (jr.$el_text = "a" === ar.toLowerCase() || "button" === ar.toLowerCase() ? dx(1024, Nf(rr)) : dx(1024, CI(rr)));
                    const Ir = RI(rr);
                    Sr || (null == Zr ? void 0 : Zr.includes("class")) || 0 >= Ir.length || (jr.classes = Ir.filter((function(rr) {
                      return "" !== rr
                    }))), kj(rr.attributes, (function(Qr) {
                      var ar;
                      if ((!Wf(rr) || -1 !== ["name", "id", "class", "aria-label"].indexOf(Qr.name)) && !(null == Zr ? void 0 : Zr.includes(Qr.name)) && !Sr && mf(Qr.value) && (!TQ(ar = Qr.name) || "_ngcontent" !== ar.substring(0, 10) && "_nghost" !== ar.substring(0, 7))) {
                        let rr = Qr.value;
                        "class" === Qr.name && (rr = HI(rr).join(" ")), jr["attr__" + Qr.name] = dx(1024, "href" === Qr.name && Wr ? pW(rr) : rr)
                      }
                    }));
                    let fr = 1,
                      Er = 1,
                      pr = rr;
                    for (; pr = sx(pr);) fr++, pr.tagName === rr.tagName && Er++;
                    return jr.nth_child = fr, jr.nth_of_type = Er, jr
                  }(rr, Zr, Wr, ar, Ir)), kj(function(rr) {
                    if (!Zf(rr)) return {};
                    const Sr = {};
                    return kj(rr.attributes, (function(rr) {
                      if (rr.name && 0 === rr.name.indexOf("data-ph-capture-attribute")) {
                        const Qr = rr.name.replace("data-ph-capture-attribute-", ""),
                          Zr = rr.value;
                        Qr && Zr && mf(Zr) && (Sr[Qr] = Zr)
                      }
                    })), Sr
                  }(rr), ((rr, Sr) => {
                    ({}).hasOwnProperty.call(tr, Sr) || (tr[Sr] = rr)
                  }))
                })), Yr) return {
                props: {},
                explicitNoCapture: Yr
              };
              if (Nr > 0 && (rr = pr[Nr], Ur.splice(0, Nr)), Wr || (Ur[0].$el_text = lI(rr, "a") || lI(rr, "button") ? Nf(rr) : CI(rr)), zr) {
                var nr, er;
                Ur[0].attr__href = zr;
                const rr = null === (nr = Mf(zr)) || void 0 === nr ? void 0 : nr.host,
                  Sr = null == DS || null === (er = DS.location) || void 0 === er ? void 0 : er.host;
                rr && Sr && rr !== Sr && (hr = zr)
              }
              return {
                props: Aj((yr = Qr.type, {
                  $event_type: yr,
                  $ce_version: 1
                }), jr ? {} : {
                  $elements: Ur
                }, {
                  $elements_chain: (Kr = Ur, nQ(Kr) ? function(rr) {
                    return rr.map((rr => {
                      var Sr, Qr;
                      let Zr = "";
                      if (rr.tag_name && (Zr += rr.tag_name), rr.attr_class) {
                        rr.attr_class.sort();
                        for (const Sr of rr.attr_class) Zr += `.${Sr.replace(/"/g,"")}`
                      }
                      const Wr = YW(YW(YW(YW({}, rr.text ? {
                          text: rr.text
                        } : {}), {}, {
                          "nth-child": null !== (Sr = rr.nth_child) && void 0 !== Sr ? Sr : 0,
                          "nth-of-type": null !== (Qr = rr.nth_of_type) && void 0 !== Qr ? Qr : 0
                        }, rr.href ? {
                          href: rr.href
                        } : {}), rr.attr_id ? {
                          attr_id: rr.attr_id
                        } : {}), rr.attributes),
                        ar = {};
                      return Vj(Wr).sort(((rr, Sr) => {
                        let [Qr] = rr, [Zr] = Sr;
                        return function(rr, Sr) {
                          return Sr > rr ? -1 : rr > Sr ? 1 : 0
                        }(Qr, Zr)
                      })).forEach((rr => {
                        let [Sr, Qr] = rr;
                        return ar[tf(Sr.toString())] = tf(Qr.toString())
                      })), Zr += ":", Zr += Vj(ar).map((rr => {
                        let [Sr, Qr] = rr;
                        return `${Sr}="${Qr}"`
                      })).join(""), Zr
                    })).join(";")
                  }(function(rr) {
                    return rr.map((rr => {
                      var Sr, Qr;
                      const Zr = {
                        text: null === (Sr = rr.$el_text) || void 0 === Sr ? void 0 : Sr.slice(0, 400),
                        tag_name: rr.tag_name,
                        href: null === (Qr = rr.attr__href) || void 0 === Qr ? void 0 : Qr.slice(0, 2048),
                        attr_class: hf(rr),
                        attr_id: rr.attr__id,
                        nth_child: rr.nth_child,
                        nth_of_type: rr.nth_of_type,
                        attributes: {}
                      };
                      return Vj(rr).filter((rr => {
                        let [Sr] = rr;
                        return 0 === Sr.indexOf("attr__")
                      })).forEach((rr => {
                        let [Sr, Qr] = rr;
                        return Zr.attributes[Sr] = Qr
                      })), Zr
                    }))
                  }(Kr)) : "")
                }, (null === (fr = Ur[0]) || void 0 === fr ? void 0 : fr.$el_text) ? {
                  $el_text: null === (Er = Ur[0]) || void 0 === Er ? void 0 : Er.$el_text
                } : {}, hr && "click" === Qr.type ? {
                  $external_click_url: hr
                } : {}, tr),
                target: rr
              };
              var Kr, yr
            }(Zr, {
              e: rr,
              maskAllElementAttributes: Wr.maskAllElementAttributes,
              maskAllText: Wr.maskAllText,
              elementAttributeIgnoreList: Wr.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: Wr.disableCaptureUrlHashes
            });
            if (ar) return !1;
            const Ir = this.getElementSelectors(Zr, jr);
            if (Ir && Ir.length > 0 && (Qr.$element_selectors = Ir), Sr === Jx) {
              const Sr = rr.type || "clipboard";
              if ("paste" !== Sr) {
                var Er, pr;
                const rr = null == DS || null === (Er = DS.getSelection()) || void 0 === Er ? void 0 : Er.toString(),
                  Sr = gI(rr);
                if (!Sr) return !1;
                Qr.$selected_content = Sr, Qr.$clipboard_text_length = null !== (pr = null == rr ? void 0 : rr.length) && void 0 !== pr ? pr : 0
              }
              Qr.$copy_type = Sr
            }
            return null === (fr = this._client) || void 0 === fr || fr.capture(Sr, Qr), !0
          }
        }
        isBrowserSupported() {
          return eQ(null == uS ? void 0 : uS.querySelectorAll)
        }
      },
      rm = class {
        constructor(rr) {
          this._instance = rr
        }
        refresh(rr) {
          const Sr = this._instance.config,
            Qr = KQ(Sr.autocapture) ? Sr.autocapture : void 0;
          rr.enabled = !!Sr.autocapture, rr.rageclick = Sr.rageclick, rr.maskAllElementAttributes = Sr.mask_all_element_attributes, rr.maskAllText = Sr.mask_all_text, rr.disableCaptureUrlHashes = Sr.disable_capture_url_hashes, rr.getCurrentUrl = Sr.get_current_url, rr.remoteRequestsDisabled = this._instance._shouldDisableFlags(), rr.url_allowlist = null == Qr ? void 0 : Qr.url_allowlist, rr.url_ignorelist = null == Qr ? void 0 : Qr.url_ignorelist, rr.dom_event_allowlist = null == Qr ? void 0 : Qr.dom_event_allowlist, rr.element_allowlist = null == Qr ? void 0 : Qr.element_allowlist, rr.css_selector_allowlist = null == Qr ? void 0 : Qr.css_selector_allowlist, rr.css_selector_ignorelist = null == Qr ? void 0 : Qr.css_selector_ignorelist, rr.element_attribute_ignorelist = null == Qr ? void 0 : Qr.element_attribute_ignorelist, rr.capture_copied_text = null == Qr ? void 0 : Qr.capture_copied_text
        }
      };
    const Sm = Mj("[ExceptionAutocapture]"),
      Qm = () => {},
      Zm = rr => {
        var Sr;
        if (eQ(rr)) return null !== (Sr = rr.__posthog_layer__) && void 0 !== Sr ? Sr : rr.__rrweb_layer__
      };

    function Wm(rr, Sr, Qr) {
      try {
        if (!(Sr in rr)) return Qm;
        const Zr = {
            next: rr[Sr]
          },
          Wr = Qr((function() {
            for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
            return Zr.next.apply(this, Sr)
          }));
        return eQ(Wr) && (Wr.prototype = Wr.prototype || {}, Object.defineProperties(Wr, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: Zr
          }
        })), rr[Sr] = Wr, () => {
          if (rr[Sr] === Wr) return void(rr[Sr] = Zr.next);
          let Qr = rr[Sr],
            ar = Zm(Qr);
          for (; ar;) {
            if (ar.next === Wr) return void(ar.next = Zr.next);
            Qr = ar.next, ar = Zm(Qr)
          }
        }
      } catch (rr) {
        return Qm
      }
    }
    const am = Mj("[TracingHeaders]"),
      jm = Mj("[Web Vitals]"),
      Im = 9e5,
      fm = ["CLS", "FCP", "INP", "LCP"],
      Em = ["INP", "LCP"],
      pm = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      xm = "disabled",
      mm = "lazy_loading",
      Nm = Mj("[SessionRecording]"),
      Um = [XS, PS, HS, qS, RS, gS, CS, MS, GS],
      tm = Mj("[Heatmaps]");

    function hm(rr) {
      return KQ(rr) && "clientX" in rr && "clientY" in rr && lQ(rr.clientX) && lQ(rr.clientY)
    }
    const zm = Mj("[Product Tours]"),
      Ym = rr => {
        var Sr;
        return !rr.config.disable_product_tours && !!(null === (Sr = rr.persistence) || void 0 === Sr ? void 0 : Sr.get_property(Vr))
      },
      nm = ["$set_once", "$set"],
      em = Mj("[SiteApps]"),
      Km = "Error while initializing PostHog app with config id ",
      ym = (rr, Sr) => (null == rr ? void 0 : rr.then) ? rr.then(Sr) : Sr(rr),
      Bm = "SDK is not enabled or survey functionality is not yet loaded",
      Tm = "Disabled. Not loading surveys.";
    var Om = class {
      constructor(rr, Sr) {
        this._configSource = rr, this._initialClientState = Sr, this.name = yx, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = rr => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!rr.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), mx.warn("Remote config unavailable. Not loading surveys.");
          const Sr = rr.config.surveys;
          if (LQ(Sr)) return mx.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = PQ(Sr) ? Sr : Sr.length > 0, mx.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = rr => {
          this._activeMatchingSurveyCallbacks.slice().forEach((Sr => this._notifyActiveMatchingSurveyCallback(Sr, rr)))
        }
      }
      setup(rr) {
        if (!this._disposed) return this._initializingClient = rr, ym(rr.kv.initialize(), (() => {
          if (this._initializingClient !== rr || this._disposed) return;
          this._initializingClient = void 0, this._client = rr;
          const Sr = rr.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? Sr.dispose() : (this._remoteConfigSubscription = Sr, this.loadIfEnabled())
        }))
      }
      dispose() {
        var rr, Sr, Qr, Zr, Wr;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (rr = this._remoteConfigSubscription) || void 0 === rr || rr.dispose(), this._remoteConfigSubscription = void 0, null === (Sr = this._surveyEventReceiver) || void 0 === Sr || Sr.dispose(), this._surveyEventReceiver = null, null === (Qr = this._surveyManager) || void 0 === Qr || null === (Zr = Qr.dispose) || void 0 === Zr || Zr.call(Qr), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((rr => {
          rr.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (Wr = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === Wr || Wr.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((rr => clearTimeout(rr))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var rr, Sr;
        null === (rr = this._surveyManager) || void 0 === rr || null === (Sr = rr.clearInMemoryInProgressSurveyState) || void 0 === Sr || Sr.call(rr);
        try {
          var Qr;
          null === (Qr = this._surveyEventReceiver) || void 0 === Qr || Qr.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const rr = [];
          for (let Sr = 0; Sr < localStorage.length; Sr++) {
            const Qr = localStorage.key(Sr);
            ((null == Qr ? void 0 : Qr.startsWith("seenSurvey_")) || (null == Qr ? void 0 : Qr.startsWith("inProgressSurvey_"))) && rr.push(Qr)
          }
          rr.forEach((rr => localStorage.removeItem(rr)))
        } catch (rr) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const rr = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void mx.info("Already initializing surveys, skipping...");
        if (rr.disableSurveys) return void mx.info(Tm);
        if (rr.cookielessMode && this._configSource.isOptedOut()) return void mx.info("Not loading surveys in cookieless mode without consent.");
        const Sr = this._configSource.getExtensions();
        if (!Sr) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (BQ(this._isSurveysEnabled) && !rr.advancedEnableSurveys) return;
        const Qr = this._isSurveysEnabled || rr.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const rr = Sr.generateSurveys;
          if (rr) return this._completeSurveyInitialization(rr, Qr), void(this._isInitializingSurveys = !1);
          const Zr = Sr.loadExternalDependency;
          if (!Zr) return this._handleSurveyLoadError(AS), void(this._isInitializingSurveys = !1);
          Zr((rr => {
            try {
              if (this._disposed) return;
              const Sr = this._configSource.getExtensions();
              rr || !(null == Sr ? void 0 : Sr.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", rr) : this._completeSurveyInitialization(Sr.generateSurveys, Qr)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (rr) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", rr), rr
        }
      }
      _completeSurveyInitialization(rr, Sr) {
        var Qr, Zr;
        if (this._disposed) return;
        this._surveyManager = rr(Sr), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const Wr = null === (Qr = null !== (Zr = this._client) && void 0 !== Zr ? Zr : this._initialClientState) || void 0 === Qr ? void 0 : Qr.kv.get(jS);
        Wr && this._registerEventOrActionBasedSurveys(Wr), mx.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(rr, Sr) {
        this._surveyInitializationFailed = !0, mx.error(rr, Sr), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: rr
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: rr
        })
      }
      onSurveysLoaded(rr) {
        return this._surveyCallbacks.push(rr), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((Sr => Sr !== rr))
        }
      }
      getSurveys(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Qr;
        const Zr = null !== (Qr = this._client) && void 0 !== Qr ? Qr : this._initialClientState;
        if (!Zr || this._disposed) return;
        if (this._config.disableSurveys) return mx.info(Tm), rr([]);
        const Wr = Zr.kv.get(jS);
        if (Wr && !Sr) return rr(Wr, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((Sr => {
          let {
            surveys: Qr,
            context: Zr
          } = Sr;
          this._disposed || rr(Qr, Zr)
        })).catch((rr => mx.error("Error in survey callback", rr)));
        const ar = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: Zr.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((rr => {
          try {
            return this._handleSurveyResponse(Zr, rr)
          } catch (rr) {
            return mx.error("Error processing surveys response", rr), this._handleSurveyResponse(Zr, {
              statusCode: 0,
              error: rr
            })
          }
        }), (rr => this._handleSurveyResponse(Zr, {
          statusCode: 0,
          error: rr
        })));
        this._getSurveysInFlightPromise = ar;
        const jr = () => {
          this._getSurveysInFlightPromise === ar && (this._getSurveysInFlightPromise = null)
        };
        ar.then((Sr => {
          jr(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(Sr.context), rr(Sr.surveys, Sr.context))
        }), jr).catch((rr => mx.error("Error in survey callback", rr)))
      }
      _sendSurveysRequest(rr, Sr) {
        const Qr = this._client;
        return Qr ? Qr.sendRequest(rr, Sr) : new Promise((rr => rr({
          statusCode: 0,
          error: new Error(Bm)
        })))
      }
      _handleSurveyResponse(rr, Sr) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: Bm
          }
        };
        const Qr = Sr.statusCode;
        if (200 !== Qr || !Sr.json) {
          const rr = `Surveys API could not be loaded, status: ${Qr}`;
          return 0 !== Qr ? mx.error(rr) : Sr.error || mx.warn(rr), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: rr
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const Zr = Sr.json.surveys || [];
        return rr.kv.set({
          [jS]: Zr,
          [IS]: Date.now()
        }), this._registerEventOrActionBasedSurveys(Zr), {
          surveys: Zr,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(rr) {
        var Sr;
        const Qr = rr.filter((rr => function(rr) {
          return !(!rr.start_date || rr.end_date)
        }(rr) && (Sx(rr) || function(rr) {
          var Sr;
          return !!(null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.actions) || void 0 === Sr || null === (Sr = Sr.values) || void 0 === Sr ? void 0 : Sr.length)
        }(rr))));
        null === (Sr = this._surveyEventReceiver) || void 0 === Sr || Sr.replace(Qr)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var rr, Sr;
        const Qr = null === (rr = null !== (Sr = this._client) && void 0 !== Sr ? Sr : this._initialClientState) || void 0 === rr ? void 0 : rr.kv.get(IS);
        return lQ(Qr) && Date.now() - Qr > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return lQ(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(rr, Sr) {
        var Qr;
        const Zr = {
          id: rr,
          current_iteration: null !== (Qr = null == Sr ? void 0 : Sr.iteration) && void 0 !== Qr ? Qr : null
        };
        Nx(Zr);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (rr) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(rr) {
        for (const Sr of this._surveyCallbacks) try {
          if (!rr.isLoaded) return Sr([], rr);
          this.getSurveys(Sr)
        } catch (rr) {
          mx.error("Error in survey callback", rr)
        }
      }
      getActiveMatchingSurveys(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!LQ(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(rr, Sr);
        mx.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(rr) {
        var Sr, Qr;
        if (this._disposed) return () => {};
        const Zr = {
          callback: rr,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(Zr), this._startActiveMatchingSurveyConditions();
        const Wr = null === (Sr = null !== (Qr = this._client) && void 0 !== Qr ? Qr : this._initialClientState) || void 0 === Sr ? void 0 : Sr.kv.get(jS);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !Wr && !LQ(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(Zr, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(Zr), () => {
          var rr;
          Zr.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((rr => rr !== Zr)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (rr = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === rr || rr.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var rr, Sr, Qr;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (rr = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== rr || (this._activeMatchingSurveyConditionsUnsubscribe = null === (Sr = (Qr = this._configSource).onMatchingConditionsChanged) || void 0 === Sr ? void 0 : Sr.call(Qr, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(rr, Sr) {
        if (this._disposed || !rr.active) return;
        const Qr = ++rr.revision,
          Zr = Zr => {
            if (!this._disposed && rr.active && Qr === rr.revision) try {
              const Qr = null != Sr ? Sr : {
                  isLoaded: !0
                },
                Wr = JSON.stringify([Zr, Qr]);
              if (Wr === rr.lastResult) return;
              rr.lastResult = Wr, rr.callback(Zr, Qr)
            } catch (rr) {
              mx.error("Error in active matching surveys callback", rr)
            }
          };
        try {
          Sr && !Sr.isLoaded ? Zr([]) : this.getActiveMatchingSurveys(Zr)
        } catch (rr) {
          mx.error("Error in active matching surveys callback", rr)
        }
      }
      _getSurveyById(rr) {
        let Sr = null;
        return this.getSurveys((Qr => {
          var Zr;
          Sr = null !== (Zr = Qr.find((Sr => Sr.id === rr))) && void 0 !== Zr ? Zr : null
        })), Sr
      }
      _checkSurveyEligibility(rr) {
        if (LQ(this._surveyManager)) return {
          eligible: !1,
          reason: Bm
        };
        const Sr = "string" == typeof rr ? this._getSurveyById(rr) : rr;
        return Sr ? this._surveyManager.checkSurveyEligibility(Sr) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(rr) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (LQ(this._surveyManager)) return {
          eligible: !1,
          reason: Bm
        };
        const Sr = "string" == typeof rr ? this._getSurveyById(rr) : rr;
        return Sr ? this._surveyManager.checkSurveyRenderability(Sr) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(rr) {
        if (LQ(this._surveyManager)) return mx.warn("init was not called"), {
          visible: !1,
          disabledReason: Bm
        };
        const Sr = this._checkSurveyRenderability(rr);
        return {
          visible: Sr.eligible,
          disabledReason: Sr.reason
        }
      }
      canRenderSurveyAsync(rr, Sr) {
        return LQ(this._surveyManager) ? (mx.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: Bm
        })) : new Promise((Qr => {
          this.getSurveys((Sr => {
            var Zr;
            const Wr = null !== (Zr = Sr.find((Sr => Sr.id === rr))) && void 0 !== Zr ? Zr : null;
            if (Wr) {
              const rr = this._checkSurveyRenderability(Wr);
              Qr({
                visible: rr.eligible,
                disabledReason: rr.reason
              })
            } else Qr({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), Sr)
        }))
      }
      renderSurvey(rr, Sr, Qr) {
        var Zr;
        if (!this._configSource.isCapturing()) return;
        if (LQ(this._surveyManager)) return void mx.warn("init was not called");
        const Wr = "string" == typeof rr ? this._getSurveyById(rr) : rr;
        if (!(null == Wr ? void 0 : Wr.id)) return void mx.warn("Survey not found");
        if (!Ux.includes(Wr.type)) return void mx.warn(`Surveys of type ${Wr.type} cannot be rendered in the app`);
        const ar = null == uS ? void 0 : uS.querySelector(Sr);
        if (ar) {
          if (null === (Zr = Wr.appearance) || void 0 === Zr ? void 0 : Zr.surveyPopupDelaySeconds) {
            mx.info(`Rendering survey ${Wr.id} with delay of ${Wr.appearance.surveyPopupDelaySeconds} seconds`);
            const rr = setTimeout((() => {
              var Sr, Zr;
              this._renderTimeouts.delete(rr), !this._disposed && this._configSource.isCapturing() && (mx.info(`Rendering survey ${Wr.id} with delay of ${null===(Sr=Wr.appearance)||void 0===Sr?void 0:Sr.surveyPopupDelaySeconds} seconds`), null === (Zr = this._surveyManager) || void 0 === Zr || Zr.renderSurvey(Wr, ar, Qr), mx.info(`Survey ${Wr.id} rendered`))
            }), 1e3 * Wr.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(rr)
          }
          this._surveyManager.renderSurvey(Wr, ar, Qr)
        } else mx.warn("Survey element not found")
      }
      displaySurvey(rr, Sr) {
        var Qr;
        if (!this._configSource.isCapturing()) return;
        if (LQ(this._surveyManager)) return void mx.warn("init was not called");
        const Zr = this._getSurveyById(rr);
        if (!Zr) return void mx.warn("Survey not found");
        let Wr = Zr;
        if ((null === (Qr = Zr.appearance) || void 0 === Qr ? void 0 : Qr.surveyPopupDelaySeconds) && Sr.ignoreDelay && (Wr = YW(YW({}, Zr), {}, {
            appearance: YW(YW({}, Zr.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), Sr.displayType !== XE && Sr.initialResponses && mx.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === Sr.ignoreConditions) {
          const rr = this._checkSurveyEligibility(Zr);
          if (!rr.eligible) return void mx.warn("Survey is not eligible to be displayed: ", rr.reason)
        }
        Sr.displayType !== PE ? this._surveyManager.handlePopoverSurvey(Wr, Sr) : this.renderSurvey(Wr, Sr.selector, Sr.properties)
      }
      cancelPendingSurvey(rr) {
        LQ(this._surveyManager) ? mx.warn("init was not called") : this._surveyManager.cancelSurvey(rr)
      }
      handlePageUnload() {
        var rr, Sr;
        null === (rr = this._surveyManager) || void 0 === rr || null === (Sr = rr.handlePageUnload) || void 0 === Sr || Sr.call(rr)
      }
    };

    function Lm(rr, Sr, Qr) {
      if (LQ(rr)) return !1;
      switch (Qr) {
        case "exact":
          return rr === Sr;
        case "contains": {
          const Qr = Sr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(Qr, "i").test(rr)
        }
        case "regex":
          try {
            return new RegExp(Sr).test(rr)
          } catch (rr) {
            return !1
          }
        default:
          return !1
      }
    }
    var lm = class {
        constructor(rr) {
          this._instance = rr, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new op, this._checkStep = (rr, Sr) => this._checkStepEvent(rr, Sr) && this._checkStepUrl(rr, Sr) && this._checkStepElement(rr, Sr) && this._checkStepProperties(rr, Sr), this._checkStepEvent = (rr, Sr) => !(null == Sr ? void 0 : Sr.event) || (null == rr ? void 0 : rr.event) === (null == Sr ? void 0 : Sr.event)
        }
        init() {
          var rr, Sr;
          BQ(null === (rr = this._instance) || void 0 === rr ? void 0 : rr._addCaptureHook) || (this._captureHookUnsubscribe = null === (Sr = this._instance) || void 0 === Sr ? void 0 : Sr._addCaptureHook(((rr, Sr) => {
            this.on(rr, Sr)
          })))
        }
        dispose() {
          var rr, Sr;
          null === (rr = this._captureHookUnsubscribe) || void 0 === rr || rr.call(this), this._captureHookUnsubscribe = void 0, null === (Sr = this._instance) || void 0 === Sr || null === (Sr = Sr.autocapture) || void 0 === Sr || Sr.setElementSelectors(new Set, this), this._debugEventEmitter = new op
        }
        register(rr) {
          var Sr, Qr;
          if (!BQ(null === (Sr = this._instance) || void 0 === Sr ? void 0 : Sr._addCaptureHook) && (rr.forEach((rr => {
              var Sr;
              this._actionRegistry.add(rr), null === (Sr = rr.steps) || void 0 === Sr || Sr.forEach((rr => {
                this._actionEvents.add((null == rr ? void 0 : rr.event) || "")
              }))
            })), null === (Qr = this._instance) || void 0 === Qr ? void 0 : Qr.autocapture)) {
            const rr = new Set;
            this._actionRegistry.forEach((Sr => {
              var Qr;
              null === (Qr = Sr.steps) || void 0 === Qr || Qr.forEach((Sr => {
                (null == Sr ? void 0 : Sr.selector) && rr.add(Sr.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(rr, this)
          }
        }
        replace(rr) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(rr)
        }
        on(rr, Sr) {
          null != Sr && 0 != rr.length && (this._actionEvents.has(rr) || this._actionEvents.has(Sr.event)) && this._actionRegistry.forEach((rr => {
            this._checkAction(Sr, rr) && this._debugEventEmitter.emit("actionCaptured", rr.name)
          }))
        }
        _addActionHook(rr) {
          this.onAction("actionCaptured", (Sr => rr(Sr)))
        }
        _checkAction(rr, Sr) {
          if (null == (null == Sr ? void 0 : Sr.steps)) return !1;
          for (const Qr of Sr.steps)
            if (this._checkStep(rr, Qr)) return !0;
          return !1
        }
        onAction(rr, Sr) {
          return this._debugEventEmitter.on(rr, Sr)
        }
        _checkStepUrl(rr, Sr) {
          if (null == Sr ? void 0 : Sr.url) {
            var Qr;
            const Zr = null == rr || null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$current_url;
            if (!Zr || "string" != typeof Zr) return !1;
            if (!Lm(Zr, Sr.url, Sr.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(rr, Sr) {
          return !!this._checkStepHref(rr, Sr) && !!this._checkStepText(rr, Sr) && !!this._checkStepSelector(rr, Sr)
        }
        _checkStepHref(rr, Sr) {
          var Qr;
          if (!(null == Sr ? void 0 : Sr.href)) return !0;
          const Zr = this._getElementsList(rr);
          if (Zr.length > 0) return Zr.some((rr => Lm(rr.href, Sr.href, Sr.href_matching || "exact")));
          const Wr = (null == rr || null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$elements_chain) || "";
          return !!Wr && Lm(function(rr) {
            const Sr = rr.match(/(?::|")href="(.*?)"/);
            return Sr ? Sr[1] : ""
          }(Wr), Sr.href, Sr.href_matching || "exact")
        }
        _checkStepText(rr, Sr) {
          var Qr;
          if (!(null == Sr ? void 0 : Sr.text)) return !0;
          const Zr = this._getElementsList(rr);
          if (Zr.length > 0) return Zr.some((rr => Lm(rr.text, Sr.text, Sr.text_matching || "exact") || Lm(rr.$el_text, Sr.text, Sr.text_matching || "exact")));
          const Wr = (null == rr || null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$elements_chain) || "";
          return !!Wr && (ar = function(rr) {
            const Sr = [],
              Qr = /(?::|")text="(.*?)"/g;
            let Zr;
            for (; !LQ(Zr = Qr.exec(rr));) Sr.includes(Zr[1]) || Sr.push(Zr[1]);
            return Sr
          }(Wr), jr = Sr.text, Ir = Sr.text_matching || "exact", ar.some((rr => Lm(rr, jr, Ir))));
          var ar, jr, Ir
        }
        _checkStepSelector(rr, Sr) {
          var Qr, Zr;
          if (!(null == Sr ? void 0 : Sr.selector)) return !0;
          const Wr = null == rr || null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$element_selectors;
          if (null == Wr ? void 0 : Wr.includes(Sr.selector)) return !0;
          const ar = (null == rr || null === (Zr = rr.properties) || void 0 === Zr ? void 0 : Zr.$elements_chain) || "";
          if (Sr.selector_regex && ar) try {
            return new RegExp(Sr.selector_regex).test(ar)
          } catch (rr) {
            return !1
          }
          return !1
        }
        _getElementsList(rr) {
          var Sr;
          return null == (null == rr || null === (Sr = rr.properties) || void 0 === Sr ? void 0 : Sr.$elements) ? [] : null == rr ? void 0 : rr.properties.$elements
        }
        _checkStepProperties(rr, Sr) {
          return !(null == Sr ? void 0 : Sr.properties) || 0 === Sr.properties.length || ax(Sr.properties.reduce(((rr, Sr) => {
            const Qr = nQ(Sr.value) ? Sr.value.map(String) : null != Sr.value ? [String(Sr.value)] : [];
            return rr[Sr.key] = {
              values: Qr,
              operator: Sr.operator || "exact"
            }, rr
          }), {}), null == rr ? void 0 : rr.properties)
        }
      },
      Xm = class {
        constructor(rr, Sr) {
          var Qr, Zr;
          this._pendingActivatedItems = [], this._instance = rr, this._onActivationChanged = Sr, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (Qr = this._instance) || void 0 === Qr || null === (Zr = Qr.onSessionId) || void 0 === Zr ? void 0 : Zr.call(Qr, (rr => this._onSessionIdChanged(rr)))
        }
        _shouldPersistArmedActivation(rr) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(rr) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(rr, Sr) {
          return !!rr && ax(rr.propertyFilters, null == Sr ? void 0 : Sr.properties)
        }
        _buildEventToItemMap(rr, Sr) {
          const Qr = new Map;
          return rr.forEach((rr => {
            var Zr;
            null === (Zr = rr.conditions) || void 0 === Zr || null === (Zr = Zr[Sr]) || void 0 === Zr || null === (Zr = Zr.values) || void 0 === Zr || Zr.forEach((Sr => {
              if (null == Sr ? void 0 : Sr.name) {
                const Zr = Qr.get(Sr.name) || [];
                Zr.push(rr.id), Qr.set(Sr.name, Zr)
              }
            }))
          })), Qr
        }
        _getMatchingItems(rr, Sr, Qr) {
          const Zr = (Qr === YE ? this._eventToItems : this._cancelEventToItems).get(rr);
          let Wr = [];
          return this._getItems((rr => {
            Wr = rr.filter((rr => null == Zr ? void 0 : Zr.includes(rr.id)))
          })), Wr.filter((Zr => {
            var Wr;
            const ar = null === (Wr = Zr.conditions) || void 0 === Wr || null === (Wr = Wr[Qr]) || void 0 === Wr || null === (Wr = Wr.values) || void 0 === Wr ? void 0 : Wr.find((Sr => Sr.name === rr));
            return this._doesEventMatchFilter(ar, Sr)
          }))
        }
        register(rr) {
          this._register(rr, !1)
        }
        replace(rr) {
          this._register(rr, !0)
        }
        _register(rr, Sr) {
          var Qr;
          BQ(null === (Qr = this._instance) || void 0 === Qr ? void 0 : Qr._addCaptureHook) || (this._setupEventBasedItems(rr, Sr), this._setupActionBasedItems(rr, Sr))
        }
        _setupActionBasedItems(rr, Sr) {
          const Qr = rr.filter((rr => {
            var Sr;
            return null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.actions) || void 0 === Sr || null === (Sr = Sr.values) || void 0 === Sr ? void 0 : Sr.length
          }));
          var Zr;
          if (Sr && this._actionToItems.clear(), 0 === Qr.length) return void(Sr && (null === (Zr = this._actionMatcher) || void 0 === Zr || Zr.replace([])));
          this._actionMatcher || (this._actionMatcher = new lm(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((rr => this.onAction(rr))));
          const Wr = [];
          Qr.forEach((rr => {
            var Sr;
            null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.actions) || void 0 === Sr || Sr.values.forEach((Sr => {
              if (Wr.push(Sr), Sr.name) {
                var Qr;
                const Zr = null !== (Qr = this._actionToItems.get(Sr.name)) && void 0 !== Qr ? Qr : [];
                Zr.includes(rr.id) || Zr.push(rr.id), this._actionToItems.set(Sr.name, Zr)
              }
            }))
          })), Sr ? this._actionMatcher.replace(Wr) : this._actionMatcher.register(Wr)
        }
        _mergeItemMaps(rr, Sr) {
          Sr.forEach(((Sr, Qr) => {
            var Zr;
            const Wr = null !== (Zr = rr.get(Qr)) && void 0 !== Zr ? Zr : [];
            Sr.forEach((rr => {
              Wr.includes(rr) || Wr.push(rr)
            })), rr.set(Qr, Wr)
          }))
        }
        _setupEventBasedItems(rr, Sr) {
          var Qr, Zr;
          const Wr = rr.filter((rr => {
              var Sr, Qr;
              return (null === (Sr = rr.conditions) || void 0 === Sr ? void 0 : Sr.events) && (null === (Qr = rr.conditions) || void 0 === Qr || null === (Qr = Qr.events) || void 0 === Qr || null === (Qr = Qr.values) || void 0 === Qr ? void 0 : Qr.length) > 0
            })),
            ar = rr.filter((rr => {
              var Sr, Qr;
              return (null === (Sr = rr.conditions) || void 0 === Sr ? void 0 : Sr.cancelEvents) && (null === (Qr = rr.conditions) || void 0 === Qr || null === (Qr = Qr.cancelEvents) || void 0 === Qr || null === (Qr = Qr.values) || void 0 === Qr ? void 0 : Qr.length) > 0
            })),
            jr = this._buildEventToItemMap(rr, YE),
            Ir = this._buildEventToItemMap(rr, nE);
          Sr ? (this._eventToItems = jr, this._cancelEventToItems = Ir) : (this._mergeItemMaps(this._eventToItems, jr), this._mergeItemMaps(this._cancelEventToItems, Ir)), (0 !== Wr.length || 0 !== ar.length || rr.some((rr => {
            var Sr;
            return null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.actions) || void 0 === Sr || null === (Sr = Sr.values) || void 0 === Sr ? void 0 : Sr.length
          }))) && (null !== (Qr = this._captureHookUnsubscribe) && void 0 !== Qr || (this._captureHookUnsubscribe = null === (Zr = this._instance) || void 0 === Zr ? void 0 : Zr._addCaptureHook(((rr, Sr) => {
            this.onEvent(rr, Sr)
          }))))
        }
        onEvent(rr, Sr) {
          var Qr, Zr;
          const Wr = this._getLogger(),
            ar = (null == Sr || null === (Qr = Sr.properties) || void 0 === Qr ? void 0 : Qr.$survey_id) || (null == Sr || null === (Zr = Sr.properties) || void 0 === Zr ? void 0 : Zr.$product_tour_id);
          if (ar && this.getActivatedIds().includes(ar)) {
            const Qr = this._activationOutcome(rr, ar, Sr);
            if ("consume" === Qr) return Wr.info("event consumed activated item, removing it", {
              event: rr,
              itemId: ar
            }), void this._deactivateItems([ar]);
            if ("persist" === Qr) return Wr.info("shown item promoted to persisted activation", {
              event: rr,
              itemId: ar
            }), this._persistActivation(ar), void this._clearActivationTimestamps([ar])
          }
          if (this._cancelEventToItems.has(rr)) {
            const Qr = this._getMatchingItems(rr, Sr, nE);
            Qr.length > 0 && (Wr.info("cancel event matched, cancelling items", {
              event: rr,
              itemsToCancel: Qr.map((rr => rr.id))
            }), this._deactivateItems(Qr.map((rr => rr.id))), Qr.forEach((rr => this._cancelPendingItem(rr.id))))
          }
          if (!this._eventToItems.has(rr)) return;
          Wr.info("event name matched", {
            event: rr,
            eventPayload: Sr,
            items: this._eventToItems.get(rr)
          });
          const jr = this._getMatchingItems(rr, Sr, YE);
          this._activateItems(jr.map((rr => rr.id)))
        }
        onAction(rr) {
          this._actionToItems.has(rr) && this._activateItems(this._actionToItems.get(rr) || [])
        }
        _activateItems(rr) {
          var Sr, Qr;
          if (0 === rr.length) return;
          const Zr = !!(null === (Sr = this._instance) || void 0 === Sr || null === (Qr = Sr.get_session_id) || void 0 === Qr ? void 0 : Qr.call(Sr)),
            Wr = [];
          for (const ar of rr) Zr && this._shouldPersistArmedActivation(ar) ? this._persistActivation(ar) && this._recordActivationTimestamp(ar) : Wr.push(ar);
          Wr.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...Wr])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(rr) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((Sr => Sr !== rr));
          const Sr = this._getPersistedActivatedIds();
          return !Sr.includes(rr) && (this._setActivatedItems([...Sr, rr]), this._stampActivationSession(), !0)
        }
        _deactivateItems(rr) {
          const Sr = new Set(rr);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((rr => !Sr.has(rr)));
          const Qr = this._getRawPersistedActivatedIds(),
            Zr = Qr.filter((rr => !Sr.has(rr)));
          Zr.length !== Qr.length && (this._setActivatedItems(Zr), 0 === Zr.length && this._clearActivationSession()), this._clearActivationTimestamps(rr), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var rr;
            null === (rr = this._onActivationChanged) || void 0 === rr || rr.call(this)
          } catch (rr) {
            this._getLogger().error("Error while handling activated items change", rr)
          }
        }
        _getRawActivationTimestamps() {
          var rr;
          const Sr = this._getActivationTimestampsKey();
          if (!Sr) return {};
          const Qr = null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr ? void 0 : rr.props[Sr];
          return Qr && "object" == typeof Qr ? Qr : {}
        }
        _recordActivationTimestamp(rr) {
          if (!this._getActivationTimestampsKey()) return;
          const Sr = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(YW(YW({}, Sr), {}, {
            [rr]: Date.now()
          }))
        }
        _clearActivationTimestamps(rr) {
          if (!this._getActivationTimestampsKey()) return;
          const Sr = this._getRawActivationTimestamps(),
            Qr = {};
          let Zr = !1;
          for (const [Wr, ar] of Object.entries(Sr)) rr.includes(Wr) ? Zr = !0 : Qr[Wr] = ar;
          Zr && (yQ(Qr) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(Qr))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(rr) {
          if (!this._getPersistedActivatedIds().includes(rr)) return;
          const Sr = this._getRawActivationTimestamps()[rr];
          return lQ(Sr) ? Sr : void 0
        }
        _getRawPersistedActivatedIds() {
          var rr;
          const Sr = this._getActivatedKey();
          return (null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr ? void 0 : rr.props[Sr]) || []
        }
        _getPersistedActivatedIds() {
          var rr, Sr, Qr;
          const Zr = this._getRawPersistedActivatedIds();
          if (0 === Zr.length) return [];
          const Wr = null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr ? void 0 : rr.props[this._getActivatedSessionKey()],
            ar = null === (Sr = this._instance) || void 0 === Sr || null === (Qr = Sr.get_session_id) || void 0 === Qr ? void 0 : Qr.call(Sr);
          return ar && Wr === ar ? Zr : []
        }
        _stampActivationSession() {
          var rr, Sr;
          const Qr = null === (rr = this._instance) || void 0 === rr || null === (Sr = rr.get_session_id) || void 0 === Sr ? void 0 : Sr.call(rr);
          Qr && this._setActivatedSession(Qr)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(rr) {
          var Sr;
          const Qr = null === (Sr = this._instance) || void 0 === Sr || null === (Sr = Sr.persistence) || void 0 === Sr ? void 0 : Sr.props[this._getActivatedSessionKey()];
          if (Qr && Qr !== rr) {
            const rr = this._getRawPersistedActivatedIds(),
              Sr = this._getRawActivationTimestamps();
            rr.length > 0 && (this._setActivatedItems([]), rr.filter((rr => lQ(Sr[rr]))).forEach((rr => this._cancelPendingItem(rr)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), rr.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((rr => !this._isItemPermanentlyIneligible(rr)))
        }
        dispose() {
          var rr, Sr, Qr;
          null === (rr = this._sessionIdUnsubscribe) || void 0 === rr || rr.call(this), this._sessionIdUnsubscribe = void 0, null === (Sr = this._captureHookUnsubscribe) || void 0 === Sr || Sr.call(this), this._captureHookUnsubscribe = void 0, null === (Qr = this._actionMatcher) || void 0 === Qr || Qr.dispose(), this._actionMatcher = void 0
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
      Pm = class extends Xm {
        constructor(rr, Sr) {
          super(rr, Sr)
        }
        _getActivatedKey() {
          return fS
        }
        _getActivatedSessionKey() {
          return ES
        }
        _getActivationTimestampsKey() {
          return pS
        }
        _writeActivationTimestamps(rr) {
          var Sr;
          null === (Sr = this._instance) || void 0 === Sr || null === (Sr = Sr.persistence) || void 0 === Sr || Sr.register({
            $surveys_activated_timestamps: rr
          })
        }
        _clearActivationTimestampsStore() {
          var rr;
          null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr || rr.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(rr) {
          var Sr;
          let Qr;
          this._getItems((Sr => {
            Qr = Sr.find((Sr => Sr.id === rr))
          }));
          const Zr = null == Qr || null === (Sr = Qr.appearance) || void 0 === Sr ? void 0 : Sr.surveyPopupDelaySeconds;
          return lQ(Zr) && Zr > 0
        }
        _getShownEventName() {
          return BE
        }
        _getItems(rr) {
          var Sr;
          null === (Sr = this._instance) || void 0 === Sr || Sr.getSurveys(rr)
        }
        _cancelPendingItem(rr) {
          var Sr;
          null === (Sr = this._instance) || void 0 === Sr || Sr.cancelPendingSurvey(rr)
        }
        _getLogger() {
          return mx
        }
        _setActivatedItems(rr) {
          var Sr;
          null === (Sr = this._instance) || void 0 === Sr || null === (Sr = Sr.persistence) || void 0 === Sr || Sr.register({
            $surveys_activated: rr
          })
        }
        _setActivatedSession(rr) {
          var Sr;
          null === (Sr = this._instance) || void 0 === Sr || null === (Sr = Sr.persistence) || void 0 === Sr || Sr.register({
            $surveys_activated_session: rr
          })
        }
        _clearActivatedSession() {
          var rr;
          null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr || rr.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(rr, Sr, Qr) {
          var Zr;
          if (rr === vE && !1 === (null == Qr || null === (Zr = Qr.properties) || void 0 === Zr ? void 0 : Zr.$survey_completed)) return "ignore";
          let Wr;
          return this._getItems((rr => {
            Wr = rr.find((rr => rr.id === Sr))
          })), !Wr || function(rr) {
            var Sr;
            return Sx(rr) && !!(null === (Sr = rr.conditions) || void 0 === Sr || null === (Sr = Sr.events) || void 0 === Sr ? void 0 : Sr.repeatedActivation) || "always" === rr.schedule
          }(Wr) ? rr === BE ? "consume" : "ignore" : rr === BE ? "persist" : rr === TE || rr === vE ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      Hm = class {
        constructor(rr) {
          this._instance = rr
        }
        initialize() {}
        get(rr) {
          if ("string" == typeof rr) return this._instance.get_property(rr);
          const Sr = {};
          for (const Qr of rr) {
            const rr = this._instance.get_property(Qr);
            BQ(rr) || (Sr[Qr] = rr)
          }
          return Sr
        }
        set(rr, Sr) {
          this._instance.register("string" == typeof rr ? {
            [rr]: Sr
          } : rr)
        }
        remove(rr) {
          "string" != typeof rr ? rr.forEach((rr => this._instance.unregister(rr))) : this._instance.unregister(rr)
        }
      },
      qm = class {
        constructor(rr) {
          this._instance = rr
        }
        get() {
          const rr = this._instance.config;
          return {
            disableSurveys: rr.disable_surveys,
            cookielessMode: !!rr.cookieless_mode,
            advancedEnableSurveys: rr.advanced_enable_surveys,
            requestTimeoutMs: rr.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const rr = null == IQ ? void 0 : IQ.__PosthogExtensions__;
          if (!rr) return;
          const {
            generateSurveys: Sr,
            loadExternalDependency: Qr
          } = rr;
          return {
            generateSurveys: Sr ? rr => Sr(this._instance, rr) : void 0,
            loadExternalDependency: Qr ? rr => Qr(this._instance, "surveys", rr) : void 0
          }
        }
        createEventReceiver(rr) {
          return new Pm(this._instance, rr)
        }
        onMatchingConditionsChanged(rr) {
          const Sr = this._instance._addCaptureHook((Sr => {
              "$pageview" !== Sr && Sr !== BE && Sr !== TE && Sr !== vE || rr()
            })),
            Qr = () => rr();
          bj(DS, "PHSurveyShown", Qr);
          let Zr = !1;
          const Wr = this._instance.onFeatureFlags((() => {
            Zr && rr()
          }));
          return Zr = !0, () => {
            Zr = !1, Sr(), Wr(), null == DS || DS.removeEventListener("PHSurveyShown", Qr)
          }
        }
      };
    const Rm = (null == DS ? void 0 : DS.location) ? Af(DS.location.hash, "__posthog") || Af(location.hash, "state") : null,
      gm = "_postHogToolbarParams",
      Cm = Mj("[Toolbar]"),
      Mm = Mj("[FeatureFlags]"),
      Gm = Mj("[FeatureFlags]", {
        debugEnabled: !0
      }),
      km = "\" failed. Feature flags didn't load in time.",
      Am = [502, 504],
      Vm = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      im = "connection_error",
      wm = rr => {
        const Sr = {};
        for (let Qr = 0; rr.length > Qr; Qr++) Sr[rr[Qr]] = !0;
        return Sr
      },
      cm = rr => {
        const Sr = {};
        for (const [Qr, Zr] of Vj(rr || {})) Zr && (Sr[Qr] = Zr);
        return Sr
      };
    var Fm = class {
      constructor(rr) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = Mm, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const rr = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, rr && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var rr, Sr;
          const Qr = this._refreshIntervalMs,
            Zr = null !== (rr = this._dueRefreshIntervalMs) && void 0 !== rr ? rr : Qr;
          BQ(Qr) || BQ(Zr) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (Sr = this._lastRefreshAt) && void 0 !== Sr ? Sr : 0) < Zr || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? Qr : Math.min(2 * Zr, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var rr;
          "visible" === (null === (rr = this._document) || void 0 === rr ? void 0 : rr.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = rr
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(rr) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (rr) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = rr, this._logger = rr.logger.createLogger("[FeatureFlags]"), ym(rr.kv.initialize(), (() => {
          this._initializingClient === rr && (this._initializingClient = void 0, this._client = rr, this._finishSetup(rr))
        }))
      }
      _finishSetup(rr) {
        var Sr;
        if (this._client === rr) return this._window && bj(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = rr.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (Sr = this._crossTabPersistence) || void 0 === Sr ? void 0 : Sr.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var rr;
        const Sr = this._config.refreshIntervalMs,
          Qr = !this._config.remoteRequestsDisabled && this._document && !BQ(Sr) && Sr > 0 ? Sr : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = Qr), Qr !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), BQ(Qr) || (this._refreshIntervalMs = Qr, this._dueRefreshIntervalMs = Qr, this._scheduleNextRefresh(), (null === (rr = this._document) || void 0 === rr ? void 0 : rr.addEventListener) && (bj(this._document, Kr, this._onVisibilityChange), Gj(Vm, (rr => {
          bj(this._document, rr, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        BQ(this._refreshIntervalMs) || (BQ(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var rr, Sr;
        BQ(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (rr = this._document) || void 0 === rr || null === (Sr = rr.removeEventListener) || void 0 === Sr || Sr.call(rr, "visibilitychange", this._onVisibilityChange), Gj(Vm, (rr => {
          var Sr, Qr;
          null === (Sr = this._document) || void 0 === Sr || null === (Qr = Sr.removeEventListener) || void 0 === Qr || Qr.call(Sr, rr, this._onUserInteraction, {
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
        var rr, Sr, Qr;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Rr"), this._settleReloads(this._activeReloads, "Rr"), this._client && (this._clearDebouncer(), null === (rr = this._dynamicProperties) || void 0 === rr || rr.dispose(), this._dynamicProperties = void 0, null === (Sr = this._crossTabPersistenceUnsubscribe) || void 0 === Sr || Sr.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (Qr = this._window) || void 0 === Qr || Qr.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(rr) {
        var Sr;
        return this._bootstrapState && rr in this._bootstrapState ? this._bootstrapState[rr] : null === (Sr = this._client) || void 0 === Sr ? void 0 : Sr.kv.get(rr)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var rr;
        return !BQ(null === (rr = this._client) || void 0 === rr ? void 0 : rr.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(rr) {
        this._persist((() => {
          var Sr;
          return null === (Sr = this._client) || void 0 === Sr ? void 0 : Sr.kv.set(rr)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(rr, Sr, Qr) {
        if (!this._crossTabPersistence || !rr.$enabled_feature_flags) return;
        const Zr = this._prop("$enabled_feature_flags") || {},
          Wr = rr.$enabled_feature_flags || {},
          ar = Sr.flags || Sr.featureFlags,
          jr = Sr.flags ? Object.entries(Sr.flags).filter((rr => {
            let [, Sr] = rr;
            return !(null == Sr ? void 0 : Sr.failed)
          })).map((rr => {
            let [Sr] = rr;
            return Sr
          })) : [],
          Er = !!Sr.errorsWhileComputingFlags && !!Sr.flags,
          Ur = Er ? jr : Qr && !nQ(ar) ? Object.keys(ar || {}) : Array.from(new Set([...Object.keys(Zr), ...Object.keys(Wr)])),
          tr = this._prop("$feature_flag_payloads") || {},
          hr = rr.$feature_flag_payloads || {},
          zr = Er || Qr ? Ur : Array.from(new Set([...Object.keys(tr), ...Object.keys(hr)])),
          nr = !Er && !Qr,
          er = !!nr || Ur,
          Kr = !!nr || zr,
          yr = {
            [Ir]: er,
            [Nr]: er,
            [Yr]: Kr
          };
        rr.$feature_flag_details && (yr[fr] = er);
        for (const Ir of [xr, pr, mr]) BQ(rr[Ir]) || (yr[Ir] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(yr)
      }
      _remove(rr) {
        this._persist((() => {
          var Sr;
          return null === (Sr = this._client) || void 0 === Sr ? void 0 : Sr.kv.remove(rr)
        }))
      }
      _persist(rr) {
        try {
          rr()
        } catch (rr) {
          this._logger.error("Failed to update feature flag persistence", rr)
        }
      }
      _rebuildEventProperties() {
        const rr = {};
        for (const Zr of [Ir, Yr, xr, nr]) {
          const Sr = this._prop(Zr);
          BQ(Sr) || (rr[Zr] = Sr)
        }
        this._baseEventProperties = rr;
        const Sr = YW({}, rr),
          Qr = this._prop(Nr);
        if (Qr)
          for (const [Zr, Wr] of Object.entries(Qr)) Sr[`$feature/${Zr}`] = Wr;
        this._eventPropertiesWithFlagValues = Sr
      }
      _isCacheStale() {
        const rr = this._config.cacheTtlMs;
        if (!rr || 0 >= rr) return !1;
        const Sr = this._prop(pr);
        return "number" != typeof Sr || Date.now() - Sr > rr
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const rr = this._config.evaluationContexts;
        return (null == rr ? void 0 : rr.length) ? rr.filter((rr => {
          const Sr = rr && "string" == typeof rr && rr.trim().length > 0;
          return Sr || this._logger.error("Invalid evaluation context found:", rr, "Expected non-empty string"), Sr
        })) : []
      }
      _getValidFlagKeys() {
        const rr = this._config.flagKeys;
        if (!BQ(rr)) return rr.filter((rr => {
          const Sr = rr && "string" == typeof rr && rr.trim().length > 0;
          return Sr || this._logger.error("Invalid flag key found:", rr, "Expected non-empty string"), Sr
        }))
      }
      initialize() {
        var rr, Sr;
        const Qr = this._config,
          Zr = null !== (rr = null === (Sr = Qr.bootstrap) || void 0 === Sr ? void 0 : Sr.featureFlags) && void 0 !== rr ? rr : {};
        if (Object.keys(Zr).length) {
          var Wr, ar;
          const rr = null !== (Wr = null === (ar = Qr.bootstrap) || void 0 === ar ? void 0 : ar.featureFlagPayloads) && void 0 !== Wr ? Wr : {},
            Sr = Object.keys(Zr).filter((rr => !BQ(Zr[rr]))).reduce(((rr, Sr) => (rr[Sr] = Zr[Sr], rr)), {}),
            jr = Object.keys(rr).filter((rr => Sr[rr])).reduce(((Sr, Qr) => (Sr[Qr] = rr[Qr], Sr)), {});
          return this._receivedFeatureFlags({
            featureFlags: Sr,
            featureFlagPayloads: jr
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(rr, Sr, Qr) {
        var Zr, Wr;
        const ar = (null == Qr ? void 0 : Qr.merge) && null !== (Zr = this._prop("$enabled_feature_flags")) && void 0 !== Zr ? Zr : {},
          jr = (null == Qr ? void 0 : Qr.merge) && null !== (Wr = this._prop("$feature_flag_payloads")) && void 0 !== Wr ? Wr : {},
          Ir = YW(YW({}, ar), rr),
          fr = YW(YW({}, jr), Sr),
          Er = {};
        for (const [pr, xr] of Object.entries(Ir)) Er[pr] = {
          key: pr,
          enabled: Na(xr),
          variant: Ua(xr),
          reason: void 0,
          metadata: BQ(null == fr ? void 0 : fr[pr]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: fr[pr]
          }
        };
        this._receivedFeatureFlags({
          flags: Er
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const rr = this._prop(fr),
          Sr = this._prop(nr),
          Qr = this._prop(er);
        if (!Qr && !Sr) return rr || {};
        const Zr = Aj({}, rr || {}),
          Wr = [...new Set([...Object.keys(Qr || {}), ...Object.keys(Sr || {})])];
        for (const Ir of Wr) {
          var ar, jr;
          const rr = Zr[Ir],
            Wr = null == Sr ? void 0 : Sr[Ir],
            fr = BQ(Wr) ? null !== (ar = null == rr ? void 0 : rr.enabled) && void 0 !== ar && ar : !!Wr,
            Er = BQ(Wr) ? null == rr ? void 0 : rr.variant : "string" == typeof Wr ? Wr : void 0,
            pr = null == Qr ? void 0 : Qr[Ir],
            xr = YW(YW({}, rr), {}, {
              enabled: fr,
              variant: fr ? null != Er ? Er : null == rr ? void 0 : rr.variant : void 0
            });
          fr !== (null == rr ? void 0 : rr.enabled) && (xr.original_enabled = null == rr ? void 0 : rr.enabled), Er !== (null == rr ? void 0 : rr.variant) && (xr.original_variant = null == rr ? void 0 : rr.variant), pr && (xr.metadata = YW(YW({}, null == rr ? void 0 : rr.metadata), {}, {
            payload: pr,
            original_payload: null == rr || null === (jr = rr.metadata) || void 0 === jr ? void 0 : jr.payload
          })), Zr[Ir] = xr
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: rr,
          overriddenPayloads: Qr,
          finalDetails: Zr
        }), this._override_warning = !0), Zr
      }
      getAllFeatureFlags() {
        const rr = this.getFlagVariants(),
          Sr = this.getFlagPayloads();
        return Object.keys(rr).map((Qr => {
          const Zr = rr[Qr];
          return {
            key: Qr,
            enabled: Na(Zr),
            variant: Ua(Zr),
            payload: ma(Sr[Qr])
          }
        }))
      }
      getFlagVariants() {
        const rr = this._prop(Nr),
          Sr = this._prop(nr);
        if (!Sr) return rr || {};
        const Qr = Aj({}, rr || {}),
          Zr = Object.keys(Sr);
        for (let Wr = 0; Zr.length > Wr; Wr++) Qr[Zr[Wr]] = Sr[Zr[Wr]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: rr,
          overriddenFlags: Sr,
          finalFlags: Qr
        }), this._override_warning = !0), Qr
      }
      getFlagPayloads() {
        const rr = this._prop(Yr),
          Sr = this._prop(er);
        if (!Sr) return rr || {};
        const Qr = Aj({}, rr || {}),
          Zr = Object.keys(Sr);
        for (let Wr = 0; Zr.length > Wr; Wr++) Qr[Zr[Wr]] = Sr[Zr[Wr]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: rr,
          overriddenPayloads: Sr,
          finalPayloads: Qr
        }), this._override_warning = !0), Qr
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((rr => {
          try {
            rr()
          } catch (rr) {
            this._logger.error("Error while running feature flags reloading callback", rr)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((rr => {
          this._pendingReloads.add(rr), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(rr, Sr) {
        rr.forEach((rr => rr({
          status: Sr
        }))), rr.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(rr) {
        return this._reloadingHandlers.push(rr), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((Sr => Sr !== rr))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(rr) {
        this.$anon_distinct_id = rr
      }
      setReloadingPaused(rr) {
        this._reloadingDisabled = rr
      }
      resetFlagCallReported() {
        this._remove(hr)
      }
      _callFlagsEndpoint(rr) {
        var Sr;
        this._clearDebouncer();
        const Qr = this._client;
        if (!Qr || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const Zr = {
          token: Qr.projectToken,
          distinct_id: Qr.distinctId,
          groups: Qr.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: YW(YW(YW({}, Qr.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: Qr.library.name,
            $lib_version: Qr.library.version
          }),
          group_properties: this._prop(Ur),
          timezone: Hf()
        };
        BQ(Qr.deviceId) || (Zr.$device_id = Qr.deviceId), ((null == rr ? void 0 : rr.disableFlags) || this._config.featureFlagsDisabled) && (Zr.disable_flags = !0);
        const Wr = this._getValidEvaluationEnvironments();
        Wr.length && (Zr.evaluation_contexts = Wr);
        const ar = this._getValidFlagKeys();
        BQ(ar) || (Zr.flag_keys = ar);
        const jr = this._config.onlyEvaluateSurveyFeatureFlags,
          Ir = "/flags/?v=2" + (jr ? "&only_evaluate_survey_feature_flags=true" : ""),
          fr = this._requestGeneration,
          pr = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = pr, this._requestInFlight = !0;
        const xr = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          mr = rr => {
            var Sr, Qr;
            const Wr = null !== (Sr = rr.json) && void 0 !== Sr ? Sr : {},
              ar = 200 !== rr.statusCode;
            if (this._requestInFlight = !1, fr !== this._requestGeneration) return void xr();
            if (this._trackStatusZeroReachability(rr.statusCode), ar || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), Zr.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(pr, "skipped");
            this._flagsLoadedFromRemote = !ar;
            const Ir = [];
            rr.error ? Ir.push(rr.error instanceof Error && "AbortError" === rr.error.name ? "timeout" : rr.error instanceof Error ? im : "unknown_error") : 200 !== rr.statusCode && Ir.push(`api_error_${rr.statusCode}`), Wr.errorsWhileComputingFlags && Ir.push("errors_while_computing_flags");
            const mr = !!(null === (Qr = Wr.quotaLimited) || void 0 === Qr ? void 0 : Qr.includes("feature_flags"));
            mr && Ir.push("quota_limited"), this._set({
              [Er]: Ir
            }), mr ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : Zr.disable_flags || this._receivedFeatureFlags(Wr, ar, {
              partialResponse: jr
            }), this._settleReloads(pr, Zr.disable_flags ? "skipped" : Ir.length || !Wr.flags && !Wr.featureFlags ? "error" : "loaded"), xr()
          },
          Nr = rr => {
            this._requestInFlight = !1, fr === this._requestGeneration ? (this._set({
              [Er]: [im]
            }), this._logger.error("Feature flag request failed", rr), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(pr, "error"), xr()) : xr()
          };
        let tr = null !== (Sr = this._config.requestMaxRetries) && void 0 !== Sr ? Sr : 1;
        const hr = () => tr > 0 && fr === this._requestGeneration,
          zr = () => {
            if (fr !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(pr, "skipped"), void xr();
            try {
              Qr.sendRequest(Ir, {
                target: "flags",
                method: "POST",
                body: Zr,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((rr => {
                if ((rr => Am.includes(rr.statusCode) || (rr => 0 === rr.statusCode && rr.error instanceof Error && "AbortError" === rr.error.name)(rr))(rr) && hr()) return tr--, void setTimeout(zr, 500);
                mr(rr)
              })).catch(Nr)
            } catch (rr) {
              Nr(rr)
            }
          };
        zr()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return Rf(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(rr) {
        this._consecutiveStatusZeroFailures = gf(rr, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Qr;
        if (Sr.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + rr + km);
        if (this._checkAndTriggerStaleRefresh()) return;
        const Zr = this.getFeatureFlagResult(rr, Sr);
        return null !== (Qr = null == Zr ? void 0 : Zr.variant) && void 0 !== Qr ? Qr : null == Zr ? void 0 : Zr.enabled
      }
      getFeatureFlagDetails(rr) {
        return this.getFlagsWithDetails()[rr]
      }
      getFeatureFlagPayload(rr) {
        const Sr = this.getFeatureFlagResult(rr, {
          send_event: !1
        });
        return null == Sr ? void 0 : Sr.payload
      }
      getFeatureFlagResult(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Sr.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + rr + km);
        if (this._checkAndTriggerStaleRefresh()) return;
        const Qr = this.getFlagVariants(),
          Zr = rr in Qr,
          Wr = Qr[rr],
          ar = this.getFlagPayloads()[rr],
          jr = String(Wr),
          Ir = this._prop("$feature_flag_request_id") || void 0,
          fr = this._prop("$feature_flag_evaluated_at") || void 0;
        let Er, pr = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var xr;
          const rr = null === (xr = this._client) || void 0 === xr || null === (xr = xr.session) || void 0 === xr ? void 0 : xr.sessionId,
            Sr = this._prop(zr);
          rr && rr !== Sr && (pr = {}, Er = rr)
        }
        if (!Sr.send_event && "send_event" in Sr) Er && this._set({
          [hr]: pr,
          [zr]: Er
        });
        else if (rr in pr && pr[rr].includes(jr)) Er && this._set({
          [hr]: pr,
          [zr]: Er
        });
        else {
          var mr, Nr, Ur, tr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or;
          nQ(pr[rr]) ? pr[rr].push(jr) : pr[rr] = [jr], this._set(YW({
            [hr]: pr
          }, Er ? {
            [zr]: Er
          } : {}));
          const Sr = this.getFeatureFlagDetails(rr),
            Qr = [...null !== (mr = this._prop("$feature_flag_errors")) && void 0 !== mr ? mr : []];
          BQ(Wr) && Qr.push("flag_missing");
          const Zr = {
            $feature_flag: rr,
            $feature_flag_response: Wr,
            $feature_flag_payload: null != ar ? ar : null,
            $feature_flag_request_id: Ir,
            $feature_flag_evaluated_at: fr,
            $feature_flag_bootstrapped_response: null !== (Nr = null === (Ur = this._config.bootstrap) || void 0 === Ur || null === (Ur = Ur.featureFlags) || void 0 === Ur ? void 0 : Ur[rr]) && void 0 !== Nr ? Nr : null,
            $feature_flag_bootstrapped_payload: null !== (tr = null === (Yr = this._config.bootstrap) || void 0 === Yr || null === (Yr = Yr.featureFlagPayloads) || void 0 === Yr ? void 0 : Yr[rr]) && void 0 !== tr ? tr : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          BQ(null == Sr || null === (nr = Sr.metadata) || void 0 === nr ? void 0 : nr.has_experiment) || (Zr.$feature_flag_has_experiment = Sr.metadata.has_experiment), BQ(null == Sr || null === (er = Sr.metadata) || void 0 === er ? void 0 : er.version) || (Zr.$feature_flag_version = Sr.metadata.version);
          const xr = null !== (Kr = null == Sr || null === (yr = Sr.reason) || void 0 === yr ? void 0 : yr.description) && void 0 !== Kr ? Kr : null == Sr || null === (Br = Sr.reason) || void 0 === Br ? void 0 : Br.code;
          xr && (Zr.$feature_flag_reason = xr), (null == Sr || null === (Tr = Sr.metadata) || void 0 === Tr ? void 0 : Tr.id) && (Zr.$feature_flag_id = Sr.metadata.id), BQ(null == Sr ? void 0 : Sr.original_variant) && BQ(null == Sr ? void 0 : Sr.original_enabled) || (Zr.$feature_flag_original_response = BQ(Sr.original_variant) ? Sr.original_enabled : Sr.original_variant), (null == Sr || null === (vr = Sr.metadata) || void 0 === vr ? void 0 : vr.original_payload) && (Zr.$feature_flag_original_payload = null == Sr || null === (Or = Sr.metadata) || void 0 === Or ? void 0 : Or.original_payload), Qr.length && (Zr.$feature_flag_error = Qr.join(",")), this._captureFeatureFlagCalled(Zr)
        }
        return Zr ? {
          key: rr,
          enabled: !!Wr,
          variant: "string" == typeof Wr ? Wr : void 0,
          payload: ma(ar)
        } : void 0
      }
      _captureFeatureFlagCalled(rr) {
        try {
          var Sr;
          null === (Sr = this._client) || void 0 === Sr || Sr.capture("$feature_flag_called", rr)
        } catch (rr) {
          this._logger.error("Failed to capture feature flag call", rr)
        }
      }
      getRemoteConfigPayload(rr, Sr) {
        this._getRemoteConfigPayload(rr, Sr)
      }
      _getRemoteConfigPayload(rr, Sr) {
        var Qr = this;
        return wQ((function*() {
          const Zr = Qr._client;
          if (!Zr) return;
          const Wr = {
              distinct_id: Zr.distinctId,
              token: Zr.projectToken,
              person_properties: {
                $lib: Zr.library.name,
                $lib_version: Zr.library.version
              }
            },
            ar = Qr._getValidEvaluationEnvironments();
          ar.length && (Wr.evaluation_contexts = ar);
          const jr = Qr._getValidFlagKeys();
          let Ir;
          BQ(jr) || (Wr.flag_keys = jr);
          try {
            var fr;
            const Sr = null === (fr = (yield Zr.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: Wr,
              compression: Qr._config.compression,
              sentAt: "body",
              timeoutMs: Qr._config.requestTimeoutMs
            })).json) || void 0 === fr ? void 0 : fr.featureFlagPayloads;
            Ir = (null == Sr ? void 0 : Sr[rr]) || void 0
          } catch (rr) {
            return void Qr._logger.error("Remote config feature flag request failed", rr)
          }
          try {
            Sr(Ir)
          } catch (rr) {
            Qr._logger.error("Remote config feature flag callback failed", rr)
          }
        }))()
      }
      isFeatureEnabled(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (Sr.fresh && !this._flagsLoadedFromRemote) return Sr.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + rr + km), Sr.defaultValue;
        const Qr = this.getFeatureFlag(rr, Sr);
        return BQ(Qr) ? Sr.defaultValue : !!Qr
      }
      addFeatureFlagsHandler(rr) {
        this.featureFlagEventHandlers.push(rr)
      }
      removeFeatureFlagsHandler(rr) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((Sr => Sr !== rr))
      }
      receivedFeatureFlags(rr, Sr, Qr) {
        this._receivedFeatureFlags(rr, Sr, Qr)
      }
      _receivedFeatureFlags(rr, Sr, Qr) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const Zr = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            Wr = arguments.length > 4 ? arguments[4] : void 0,
            ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Mm;
          const jr = ((rr, Sr) => {
              const Qr = rr.flags;
              if (Qr) {
                const Sr = Object.fromEntries(Object.keys(Qr).map((rr => {
                    var Sr;
                    return [rr, null !== (Sr = Qr[rr].variant) && void 0 !== Sr ? Sr : Qr[rr].enabled]
                  }))),
                  Zr = Object.fromEntries(Object.keys(Qr).filter((rr => Qr[rr].enabled)).filter((rr => {
                    var Sr;
                    return !BQ(null === (Sr = Qr[rr].metadata) || void 0 === Sr ? void 0 : Sr.payload)
                  })).map((rr => {
                    var Sr;
                    return [rr, null === (Sr = Qr[rr].metadata) || void 0 === Sr ? void 0 : Sr.payload]
                  })));
                return YW(YW({}, rr), {}, {
                  featureFlags: Sr,
                  featureFlagPayloads: Zr
                })
              }
              return rr.featureFlags && Sr.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), rr
            })(rr, ar),
            Er = jr.flags,
            Ur = jr.featureFlags,
            tr = jr.featureFlagPayloads;
          if (!Ur) return;
          const hr = rr.requestId,
            zr = rr.evaluatedAt;
          if (nQ(Ur)) {
            ar.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const rr = {};
            if (Ur)
              for (let Sr = 0; Ur.length > Sr; Sr++) rr[Ur[Sr]] = !0;
            return {
              [Ir]: Ur,
              [Nr]: rr,
              [mr]: !1
            }
          }
          let nr = Ur,
            er = tr,
            Kr = Er;
          if (null == Wr ? void 0 : Wr.partialResponse) {
            const rr = Object.keys(nr),
              Wr = er || {};
            nr = YW(YW({}, Sr), nr), er = YW(YW({}, Qr), Wr), rr.forEach((rr => {
              rr in Wr || null == er || delete er[rr]
            })), Kr = YW(YW({}, Zr), Kr)
          } else if (rr.errorsWhileComputingFlags)
            if (Er) {
              const rr = new Set(Object.keys(Er).filter((rr => {
                var Sr;
                return !(null === (Sr = Er[rr]) || void 0 === Sr ? void 0 : Sr.failed)
              })));
              nr = YW(YW({}, Sr), Object.fromEntries(Object.entries(nr).filter((Sr => {
                let [Qr] = Sr;
                return rr.has(Qr)
              }))));
              const Wr = Object.fromEntries(Object.entries(er || {}).filter((Sr => {
                let [Qr] = Sr;
                return rr.has(Qr)
              })));
              er = YW(YW({}, Qr), Wr), rr.forEach((rr => {
                rr in Wr || null == er || delete er[rr]
              })), Kr = YW(YW({}, Zr), Object.fromEntries(Object.entries(Kr || {}).filter((Sr => {
                let [Qr] = Sr;
                return rr.has(Qr)
              }))))
            } else nr = YW(YW({}, Sr), nr), er = YW(YW({}, Qr), er), Kr = YW(YW({}, Zr), Kr);
          return YW(YW({
            [Ir]: Object.keys(cm(nr)),
            [Nr]: nr || {},
            [Yr]: er || {},
            [fr]: Kr || {},
            [mr]: !0 === rr.minimalFlagCalledEvents
          }, hr ? {
            [xr]: hr
          } : {}), zr ? {
            [pr]: zr
          } : {})
        }(rr, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), Qr, this._logger);
        if (Zr)
          if (!1 === (null == Qr ? void 0 : Qr.persist)) {
            const rr = !BQ(this._client.kv.get(Nr));
            this._bootstrapState = Zr, rr || this._set(Zr)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(Zr, rr, !!(null == Qr ? void 0 : Qr.partialResponse)), this._set(Zr);
        else Sr && this._fallBackToPersistedFlags();
        Sr || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(Sr)
      }
      override(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: rr,
          suppressWarning: Sr
        })
      }
      overrideFeatureFlags(rr) {
        this._overrideFeatureFlags(rr)
      }
      _overrideFeatureFlags(rr) {
        if (this._client) {
          if (!1 === rr) return this._remove([nr, er]), this._fireFeatureFlagsCallbacks(), void Gm.info("All overrides cleared");
          if (nQ(rr)) return this._set({
            [nr]: wm(rr)
          }), this._fireFeatureFlagsCallbacks(), void Gm.info("Flag overrides set", {
            flags: rr
          });
          if (rr && "object" == typeof rr && ("flags" in rr || "payloads" in rr)) {
            var Sr;
            const Qr = rr;
            this._override_warning = Boolean(null !== (Sr = Qr.suppressWarning) && void 0 !== Sr && Sr);
            const Zr = {},
              Wr = Qr.flags,
              ar = Qr.payloads;
            return Wr && (Zr[nr] = nQ(Wr) ? wm(Wr) : Wr), ar && (Zr[er] = ar), Object.keys(Zr).length && this._set(Zr), !1 === Wr && !1 === ar ? this._remove([nr, er]) : !1 === Wr ? this._remove(nr) : !1 === ar && this._remove(er), this._fireFeatureFlagsCallbacks(), !1 === Wr ? Gm.info("Flag overrides cleared") : Wr && Gm.info("Flag overrides set", {
              flags: Wr
            }), void(!1 === ar ? Gm.info("Payload overrides cleared") : ar && Gm.info("Payload overrides set", {
              payloads: ar
            }))
          }
          if (rr && "object" == typeof rr) return this._set({
            [nr]: rr
          }), this._fireFeatureFlagsCallbacks(), void Gm.info("Flag overrides set", {
            flags: rr
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: rr
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(rr) {
        if (this.addFeatureFlagsHandler(rr), this._hasLoadedFlags) {
          const {
            flags: Sr,
            flagVariants: Qr
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            rr(Sr, Qr)
          } catch (rr) {
            this._logger.error("Error while running feature flags callback", rr)
          }
        }
        return () => this.removeFeatureFlagsHandler(rr)
      }
      updateEarlyAccessFeatureEnrollment(rr, Sr, Qr) {
        var Zr;
        const Wr = (this._prop("$early_access_features") || []).find((Sr => Sr.flagKey === rr)),
          ar = {
            [`$feature_enrollment/${rr}`]: Sr
          },
          jr = {
            $feature_flag: rr,
            $feature_enrollment: Sr,
            $set: ar
          };
        Wr && (jr.$early_access_feature_name = Wr.name), Qr && (jr.$feature_enrollment_stage = Qr);
        const fr = YW(YW({}, this.getFlagVariants()), {}, {
          [rr]: Sr
        });
        null === (Zr = this._crossTabPersistence) || void 0 === Zr || Zr.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [rr],
          $enabled_feature_flags: [rr],
          $stored_person_properties: Object.keys(ar)
        }), this._set({
          [Ir]: Object.keys(cm(fr)),
          [Nr]: fr,
          [tr]: YW(YW({}, this._prop("$stored_person_properties") || {}), ar)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var Er;
          null === (Er = this._client) || void 0 === Er || Er.capture("$feature_enrollment_update", jr)
        } catch (rr) {
          this._logger.error("Failed to capture early access feature enrollment", rr)
        }
      }
      getEarlyAccessFeatures(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = this._prop(jr);
        !Zr || Sr ? this._getEarlyAccessFeatures(rr, Qr) : rr(Zr)
      }
      _getEarlyAccessFeatures(rr, Sr) {
        var Qr = this;
        return wQ((function*() {
          const Zr = Qr._client;
          if (!Zr) return;
          const Wr = Sr ? `&${Sr.map((rr=>`stage=${rr}`)).join("&")}` : "";
          let ar;
          try {
            const rr = yield Zr.sendRequest(`/api/early_access_features/?token=${Zr.projectToken}${Wr}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!rr.json) return;
            ar = rr.json.earlyAccessFeatures, Qr._set({
              [jr]: ar
            })
          } catch (rr) {
            return void Qr._logger.error("Early access feature request failed", rr)
          }
          try {
            rr(ar)
          } catch (rr) {
            Qr._logger.error("Early access feature callback failed", rr)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const rr = this.getFlags(),
          Sr = this.getFlagVariants();
        return {
          flags: rr.filter((rr => Sr[rr])),
          flagVariants: Object.keys(Sr).filter((rr => Sr[rr])).reduce(((rr, Qr) => (rr[Qr] = Sr[Qr], rr)), {})
        }
      }
      _fireFeatureFlagsCallbacks(rr) {
        this._rebuildEventProperties();
        const {
          flags: Sr,
          flagVariants: Qr
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((Zr => {
          try {
            Zr(Sr, Qr, {
              errorsLoading: rr
            })
          } catch (rr) {
            this._logger.error("Error while running feature flags callback", rr)
          }
        }))
      }
      setPersonPropertiesForFlags(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(rr, Sr)
      }
      _setPersonPropertiesForFlags(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this._prop("$stored_person_properties") || {},
          Zr = (null == rr ? void 0 : rr.$set) || ((null == rr ? void 0 : rr.$set_once) ? {} : rr),
          Wr = null == rr ? void 0 : rr.$set_once,
          ar = {};
        if (Wr)
          for (const jr in Wr)({}).hasOwnProperty.call(Wr, jr) && (jr in Qr || (ar[jr] = Wr[jr]));
        this._set({
          [tr]: YW(YW(YW({}, Qr), ar), Zr)
        }), Sr && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = YW({}, this._prop("$stored_person_properties") || {});
        rr.forEach((rr => {
          delete Qr[rr]
        })), this._set({
          [tr]: Qr
        }), Sr && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(tr), rr && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this._prop("$stored_group_properties") || {},
          Zr = YW({}, Qr);
        for (const Wr of Object.keys(rr)) Zr[Wr] = YW(YW({}, Qr[Wr]), rr[Wr]);
        this._set({
          [Ur]: Zr
        }), Sr && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(rr) {
        if (rr) {
          const Sr = this._prop("$stored_group_properties") || {};
          this._set({
            [Ur]: YW(YW({}, Sr), {}, {
              [rr]: {}
            })
          })
        } else this._remove(Ur)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "Rr"), this._settleReloads(this._activeReloads, "Rr"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const om = Mj("[FeatureFlags]");
    var bm = class {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(rr, Sr)
      }
      update(rr, Sr) {
        this._snapshot = ((rr, Sr) => {
          var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
          return {
            bootstrap: {
              featureFlags: null !== (Qr = null === (Zr = rr.bootstrap) || void 0 === Zr ? void 0 : Zr.featureFlags) && void 0 !== Qr ? Qr : void 0,
              featureFlagPayloads: null !== (Wr = null === (ar = rr.bootstrap) || void 0 === ar ? void 0 : ar.featureFlagPayloads) && void 0 !== Wr ? Wr : void 0
            },
            remoteRequestsDisabled: Sr,
            featureFlagsDisabled: !!rr.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!rr.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!rr.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: rr.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (jr = rr.remote_config_refresh_interval_ms) && void 0 !== jr ? jr : 3e5,
            idleRefreshBackoff: BQ(rr.remote_config_refresh_interval_ms),
            requestTimeoutMs: rr.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (Ir = rr.feature_flag_request_max_retries) && void 0 !== Ir ? Ir : 1),
            compression: rr.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (fr = null !== (Er = rr.evaluation_contexts) && void 0 !== Er ? Er : rr.evaluation_environments) && void 0 !== fr ? fr : [],
            flagKeys: nQ(rr.flag_keys) ? rr.flag_keys : void 0
          }
        })(rr, Sr), !rr.evaluation_environments || rr.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (om.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), BQ(rr.flag_keys) || nQ(rr.flag_keys) || om.error("Invalid flag_keys found:", rr.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const Jm = rr => CQ(rr) && ("RangeError" === rr.name && 0 === rr.message.indexOf("Maximum call stack size exceeded") || "InternalError" === rr.name && "too much recursion" === rr.message),
      Dm = Mj("[Error tracking]"),
      dm = "webkit-masked-url:",
      sm = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      um = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", dm],
      rN = ["__firefox__", "__gCrWeb"],
      SN = "Refusing to render web experiment since the viewer is a likely bot",
      QN = {
        icontains: (rr, Sr) => Sr.toLowerCase().indexOf(rr.toLowerCase()) > -1,
        not_icontains: (rr, Sr) => -1 === Sr.toLowerCase().indexOf(rr.toLowerCase()),
        regex: (rr, Sr) => Qx(Sr, rr),
        not_regex: (rr, Sr) => !Qx(Sr, rr),
        exact: (rr, Sr) => Sr === rr,
        is_not: (rr, Sr) => Sr !== rr
      },
      ZN = Mj("[Conversations]"),
      WN = "Conversations not available yet.";

    function aN(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir, fr;
      const Er = null !== (Qr = null == rr ? void 0 : rr.flushIntervalMs) && void 0 !== Qr ? Qr : 3e3,
        pr = null !== (Zr = null == rr ? void 0 : rr.maxBufferSize) && void 0 !== Zr ? Zr : 100,
        xr = (null == Sr ? void 0 : Sr.consoleCapture) ? void 0 : null !== (Wr = null == rr ? void 0 : rr.maxLogsPerInterval) && void 0 !== Wr ? Wr : 1e3,
        mr = BQ(xr) ? Math.max(pr, 2048) : Math.max(pr, xr),
        Nr = YW(YW({}, function() {
          let rr = "",
            Sr = "";
          try {
            var Qr;
            const Zr = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              Wr = null == Zr || null === (Qr = Zr.navigator) || void 0 === Qr ? void 0 : Qr.userAgent;
            Wr && ([rr, Sr] = DZ(Wr))
          } catch (rr) {}
          return function(rr, Sr) {
            const Qr = function(rr) {
              if (rr) return {}.hasOwnProperty.call(nj, rr) ? nj[rr] : rr
            }(rr);
            return YW(YW({}, Qr ? {
              "os.name": Qr
            } : {}), Sr ? {
              "os.version": Sr
            } : {})
          }(rr, Sr)
        }()), null == rr ? void 0 : rr.resourceAttributes);
      return {
        serviceName: null !== (ar = null !== (jr = null == Nr ? void 0 : Nr["service.name"]) && void 0 !== jr ? jr : null == rr ? void 0 : rr.serviceName) && void 0 !== ar ? ar : null == Sr ? void 0 : Sr.serviceNameDefault,
        serviceVersion: null !== (Ir = null == Nr ? void 0 : Nr["service.version"]) && void 0 !== Ir ? Ir : null == rr ? void 0 : rr.serviceVersion,
        environment: null !== (fr = null == Nr ? void 0 : Nr["deployment.environment"]) && void 0 !== fr ? fr : null == rr ? void 0 : rr.environment,
        resourceAttributes: Nr,
        beforeSend: null == rr ? void 0 : rr.beforeSend,
        flushIntervalMs: Er,
        maxBufferSize: pr,
        maxQueueSize: mr,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: Er,
        maxLogsPerInterval: xr,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const jN = ["debug", "log", "warn", "error", "info"],
      IN = rr => {
        for (; null == rr ? void 0 : rr.__rrweb_original__;) rr = rr.__rrweb_original__;
        return rr
      },
      fN = "console",
      EN = "__posthogHandledLogsRequestError",
      pN = (rr, Sr) => {
        const Qr = rr instanceof Error ? rr : new Error(Sr);
        return Qr[EN] = !0, Qr
      },
      xN = rr => !!rr && "object" == typeof rr && !0 === rr[EN];
    var mN = class {
      get _coreLogger() {
        var rr = this;
        return YW(YW({}, this._logger), {}, {
          error: function() {
            for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
            Qr.some(xN) || rr._logger.error(...Qr)
          }
        })
      }
      constructor(rr, Sr) {
        var Qr;
        this._configSource = rr, this._getSdkContext = Sr, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = Mj("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var rr, Sr;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (rr = this._core) || void 0 === rr || rr.onReconnect(), null === (Sr = this._consoleCore) || void 0 === Sr || Sr.onReconnect())
        }, this._isLogsEnabled = !!(null === (Qr = rr.get()) || void 0 === Qr ? void 0 : Qr.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (Zr) {
            this._window = void 0
          }
          this._window && (bj(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(rr, Sr, Qr, Zr) {
        this._listenForReconnect();
        const Wr = aN(this._configSource.get(), Qr);
        return [new Xj(this._createHost(rr, Sr), Wr, this._coreLogger, (() => this._getSdkContext()), (rr => rr()), void 0, Zr), Wr]
      }
      _getCore() {
        const rr = this._configSource.get();
        var Sr;
        return this._core && this._resolvedFrom === rr || (null === (Sr = this._core) || void 0 === Sr || Sr.reset(), this._resolvedFrom = rr, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (rr => {
          this._queue = rr
        }))), this._core
      }
      _getConsoleCore() {
        const rr = this._configSource.get();
        var Sr;
        return this._consoleCore && this._consoleResolvedFrom === rr || (null === (Sr = this._consoleCore) || void 0 === Sr || Sr.reset(), this._consoleResolvedFrom = rr, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (rr => {
          this._consoleQueue = rr
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, fN)), this._consoleCore
      }
      setup(rr) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = rr, this._logger = rr.logger.createLogger("[logs]"), ym(rr.kv.initialize(), (() => {
          this._disposed || this._finishSetup(rr)
        }))
      }
      _finishSetup(rr) {
        var Sr;
        this._listenForReconnect(), (null === (Sr = this._configSource.get()) || void 0 === Sr ? void 0 : Sr.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && rr.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let Qr = !1;
        const Zr = rr.onRemoteConfig((rr => {
          var Sr;
          Qr = rr.ok && !0 === (null === (Sr = rr.config.logs) || void 0 === Sr ? void 0 : Sr.captureConsoleLogs), this.onRemoteConfig(rr)
        }));
        this._disposed ? Zr.dispose() : (this._remoteConfigSubscription = Zr, Qr || this.loadIfEnabled())
      }
      dispose() {
        var rr, Sr, Qr, Zr, Wr, ar, jr;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (rr = this._remoteConfigSubscription) || void 0 === rr || rr.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (Sr = this._window) || void 0 === Sr || Sr.removeEventListener("online", this._onReconnect), null === (Qr = this._consoleLogsDispose) || void 0 === Qr || Qr.call(this), this._consoleLogsDispose = void 0, null === (Zr = this._core) || void 0 === Zr || Zr.clearQueue(), null === (Wr = this._consoleCore) || void 0 === Wr || Wr.clearQueue(), null === (ar = this._core) || void 0 === ar || ar.reset(), null === (jr = this._consoleCore) || void 0 === jr || jr.reset())
      }
      onRemoteConfig(rr) {
        var Sr, Qr;
        if (this._disposed) return;
        const Zr = rr.ok ? null === (Sr = rr.config.logs) || void 0 === Sr ? void 0 : Sr.captureConsoleLogs : void 0;
        LQ(Zr) ? this._stopRecorderStartedByPersistedHint() : (null === (Qr = this._client) || void 0 === Qr || Qr.kv.set(this._configSource.captureHintKey, !!Zr), Zr ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var rr, Sr, Qr, Zr;
        this._stopConsoleRecorder(), null === (rr = this._core) || void 0 === rr || rr.clearQueue(), this._queue = [], null === (Sr = this._core) || void 0 === Sr || Sr.reset(), null === (Qr = this._consoleCore) || void 0 === Qr || Qr.clearQueue(), this._consoleQueue = [], null === (Zr = this._consoleCore) || void 0 === Zr || Zr.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(rr) {
        !this._disposed && this._client && this._getCore().captureLog(rr)
      }
      captureConsoleLog(rr) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(rr)
      }
      captureBufferedConsoleLog(rr, Sr, Qr) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(rr, {
          context: Sr,
          occurredAtMs: Qr
        })
      }
      _onOptOut() {
        var rr;
        this._stopConsoleRecorder(), null === (rr = this._consoleCore) || void 0 === rr || rr.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var rr, Sr = this;
        if (this._isRecordingConsole || !(null === (rr = this._window) || void 0 === rr ? void 0 : rr.console)) return;
        const Qr = aN(this._configSource.get()).maxBufferSize;
        let Zr = !0;
        this._consoleRecorderUnpatchers.push((() => {
          Zr = !1
        }));
        for (const Wr of jN) {
          let ar;
          try {
            ar = IN(this._window.console[Wr])
          } catch (rr) {
            continue
          }
          ar && this._consoleRecorderUnpatchers.push(Wm(this._window.console, Wr, (rr => {
            const jr = function() {
              for (var ar = arguments.length, jr = new Array(ar), Ir = 0; Ir < ar; Ir++) jr[Ir] = arguments[Ir];
              try {
                Zr && Sr._recordConsoleEntry(Wr, jr, Qr)
              } catch (Wr) {}
              return rr.apply(Sr._window.console, jr)
            };
            return jr.__rrweb_original__ = ar, jr
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(rr, Sr, Qr) {
        var Zr;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== Sr.length)
          if (null === (Zr = this._client) || void 0 === Zr ? void 0 : Zr.canCapture) {
            if (Qr > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: rr,
                  args: Sr,
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
          for (const rr of this._consoleRecorderUnpatchers) rr();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const rr = this._consoleBuffer;
        return this._stopConsoleRecorder(), rr
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (rr, Sr) => this.captureLog({
            body: rr,
            level: "trace",
            attributes: Sr
          }),
          debug: (rr, Sr) => this.captureLog({
            body: rr,
            level: "debug",
            attributes: Sr
          }),
          info: (rr, Sr) => this.captureLog({
            body: rr,
            level: "info",
            attributes: Sr
          }),
          warn: (rr, Sr) => this.captureLog({
            body: rr,
            level: "warn",
            attributes: Sr
          }),
          error: (rr, Sr) => this.captureLog({
            body: rr,
            level: "error",
            attributes: Sr
          }),
          fatal: (rr, Sr) => this.captureLog({
            body: rr,
            level: "fatal",
            attributes: Sr
          })
        }), this._capture_logger
      }
      flushLogs(rr) {
        this._client && (rr ? this._flushViaTransport(rr) : (this._core && this._core.flush().catch((rr => this._logFlushError(rr))), this._consoleCore && this._consoleCore.flush().catch((rr => this._logFlushError(rr)))))
      }
      flush() {
        var rr = this;
        return wQ((function*() {
          var Sr, Qr;
          const Zr = null === (Sr = rr._core) || void 0 === Sr ? void 0 : Sr.flush().catch((Sr => rr._logFlushError(Sr))),
            Wr = null === (Qr = rr._consoleCore) || void 0 === Qr ? void 0 : Qr.flush().catch((Sr => rr._logFlushError(Sr)));
          yield Zr, yield Wr
        }))()
      }
      _logFlushError(rr) {
        xN(rr) || this._logger.error("PostHog logs flush failed:", rr)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const rr = this._getConsoleLoader();
        if (rr) {
          this._isLoading = !0;
          try {
            rr(((rr, Sr) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (rr || !Sr) this._logger.error("Could not load logs script", rr), this._stopConsoleRecorder();
                else {
                  const rr = this._takeConsoleBuffer();
                  this._consoleLogsDispose = Sr.initialize(this._client), this._isLoaded = !0, rr.length > 0 && Sr.replay(this._client, rr)
                }
            }))
          } catch (rr) {
            throw this._isLoading = !1, rr
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(rr, Sr) {
        const Qr = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !Qr.canCapture
          },
          getPersistedProperty: Sr => Sr === fQ.LogsQueue ? rr() : void 0,
          setPersistedProperty(rr, Qr) {
            rr === fQ.LogsQueue && Sr(null != Qr ? Qr : [])
          },
          _sendLogsBatch: rr => this._sendLogsBatch(rr),
          getLibraryId: () => Qr.library.name,
          getLibraryVersion: () => Qr.library.version
        }
      }
      _sendLogsBatch(rr) {
        return new Promise((Sr => {
          if (Rf(this._consecutiveStatusZeroFailures, 3)) return void Sr({
            kind: "fatal",
            error: pN(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let Qr = !1;
          const Zr = rr => {
              Qr || (Qr = !0, clearTimeout(Wr), Sr(rr))
            },
            Wr = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), Zr({
                kind: "retry-later",
                error: pN(void 0, "logs request timed out")
              })
            }), 9e4),
            ar = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: rr,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((rr => {
            var Sr;
            const Qr = rr.statusCode;
            this._trackEndpointReachability(Qr, ar), Qr >= 200 && 300 > Qr ? Zr({
              kind: "ok"
            }) : 413 === Qr ? Zr({
              kind: "too-large"
            }) : 0 !== Qr && 408 !== Qr && 429 !== Qr && 500 > Qr ? Zr({
              kind: "fatal",
              error: new Error(`logs request failed with status ${Qr}`)
            }) : 0 === Qr ? (rr.error || this._logger.warn("Logs request failed before receiving an HTTP response"), Zr({
              kind: "retry-later",
              error: pN(rr.error, "logs request failed before receiving an HTTP response")
            })) : Zr({
              kind: "retry-later",
              error: null !== (Sr = rr.error) && void 0 !== Sr ? Sr : new Error(`logs request failed with status ${Qr}`)
            })
          }), (rr => {
            Zr({
              kind: "retry-later",
              error: rr
            })
          }))
        }))
      }
      _trackEndpointReachability(rr, Sr) {
        (0 !== rr || Sr) && (this._consecutiveStatusZeroFailures = gf(rr, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(rr) {
        this._queue.length > 0 && this._drainQueueViaTransport(rr, this._queue, this._resolvedConfig, this._client.library.name, (rr => {
          this._queue = rr
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(rr, this._consoleQueue, this._consoleResolvedConfig, fN, (rr => {
          this._consoleQueue = rr
        }))
      }
      _drainQueueViaTransport(rr, Sr, Qr, Zr, Wr) {
        if (0 === Sr.length) return;
        const ar = Sr.map((rr => rr.record));
        Wr([]);
        const jr = vj(ar, Tj(Qr, this._client.library.name, this._client.library.version), Zr, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: jr,
          compression: "best-available",
          transport: rr,
          timeoutMs: 6e4
        }).catch((rr => this._logFlushError(rr)))
      }
    };
    const NN = Mj("[NetworkMetrics]"),
      UN = () => {
        var rr;
        return (null == DS || null === (rr = DS.performance) || void 0 === rr ? void 0 : rr.now) ? DS.performance.now() : Date.now()
      },
      tN = {
        "http:": 80,
        "https:": 443
      },
      hN = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      zN = (rr, Sr) => {
        var Qr;
        const Zr = String(Sr);
        return {
          method: String(rr).toUpperCase(),
          url: (null === (Qr = Mf(Zr)) || void 0 === Qr ? void 0 : Qr.href) || Zr
        }
      },
      YN = function(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var Ir, fr;
          const Er = Wr();
          if (!Er) return;
          const pr = Qr || void 0,
            xr = UN() - Zr,
            mr = Mf(Sr.url);
          if (mr && "http:" !== mr.protocol && "https:" !== mr.protocol) return;
          const Nr = {
              url: (null == mr ? void 0 : mr.href) || Sr.url,
              method: Sr.method
            },
            Ur = eQ(Er.name) ? Er.name(Nr) : TQ(Er.name) ? Er.name : "http.client.request.duration";
          if (!Ur) return;
          const tr = jr && !pr ? void 0 : ((rr, Sr) => rr ? 400 > rr ? void 0 : String(rr) : (null == Sr ? void 0 : Sr.name) || "_OTHER")(pr, ar),
            hr = YW(YW(YW(YW(YW({}, (rr => {
              const Sr = hN.has(rr) ? rr : "_OTHER";
              return YW({
                "http.request.method": Sr
              }, "_OTHER" === Sr && rr !== Sr ? {
                "http.request.method_original": rr
              } : {})
            })(Nr.method)), mr ? (rr => {
              return {
                "server.address": rr.hostname.startsWith("[") && rr.hostname.endsWith("]") ? rr.hostname.slice(1, -1) : rr.hostname,
                "server.port": Number(rr.port) || tN[rr.protocol],
                "url.scheme": rr.protocol.slice(0, -1),
                "url.template": (Sr = rr.pathname, Sr.split("/").map((rr => (rr => /^\d+$/.test(rr) || rr.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(rr))(rr) ? ":id" : rr)).join("/"))
              };
              var Sr
            })(mr) : {}), pr ? {
              "http.response.status_code": pr
            } : {}), tr ? {
              "error.type": tr
            } : {}), null === (Ir = Er.attributes) || void 0 === Ir ? void 0 : Ir.call(Er, Nr, {
              status: pr,
              durationMs: xr
            }));
          null === (fr = rr.metrics) || void 0 === fr || fr.histogram(Ur, xr, {
            unit: "ms",
            attributes: hr
          })
        } catch (rr) {
          NN.error("Failed to record network metric", rr)
        }
      },
      nN = () => {},
      eN = (rr, Sr) => eQ(null == DS ? void 0 : DS.fetch) ? Wm(DS, "fetch", (Qr => function() {
        for (var Zr = arguments.length, Wr = new Array(Zr), ar = 0; ar < Zr; ar++) Wr[ar] = arguments[ar];
        const jr = UN(),
          Ir = Qr.apply(this, Wr);
        if (!Sr()) return Ir;
        try {
          var fr, Er, pr;
          const [Qr, Zr] = Wr, ar = zN(null !== (fr = null !== (Er = null == Zr ? void 0 : Zr.method) && void 0 !== Er ? Er : null == Qr ? void 0 : Qr.method) && void 0 !== fr ? fr : "GET", null !== (pr = null == Qr ? void 0 : Qr.url) && void 0 !== pr ? pr : Qr);
          return Ir.then((Qr => (YN(rr, ar, null == Qr ? void 0 : Qr.status, jr, Sr, void 0, !0), Qr)), (Qr => {
            throw YN(rr, ar, void 0, jr, Sr, Qr), Qr
          }))
        } catch (rr) {
          return NN.error("Failed to observe fetch", rr), Ir
        }
      })) : nN,
      KN = (rr, Sr) => {
        var Qr;
        const Zr = null == DS || null === (Qr = DS.XMLHttpRequest) || void 0 === Qr ? void 0 : Qr.prototype;
        if (!Zr) return nN;
        const Wr = new WeakMap,
          ar = Wm(Zr, "open", (rr => function() {
            for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
            try {
              (() => np.has(this))() || Wr.set(this, zN(Qr[0], Qr[1]))
            } catch (rr) {
              NN.error("Failed to observe XHR open", rr)
            }
            return rr.apply(this, Qr)
          })),
          jr = Wm(Zr, "send", (Qr => function() {
            let Zr;
            try {
              const Qr = Wr.get(this);
              if (Qr && Sr()) {
                const Wr = UN();
                Zr = () => {
                  this.removeEventListener("loadend", Zr), YN(rr, Qr, this.status, Wr, Sr)
                }, bj(this, "loadend", Zr)
              }
            } catch (rr) {
              NN.error("Failed to observe XHR send", rr)
            }
            try {
              for (var ar = arguments.length, jr = new Array(ar), Ir = 0; Ir < ar; Ir++) jr[Ir] = arguments[Ir];
              return Qr.apply(this, jr)
            } catch (rr) {
              throw Zr && this.removeEventListener("loadend", Zr), rr
            }
          }));
        return () => {
          ar(), jr()
        }
      },
      yN = new WeakMap,
      BN = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      TN = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function vN(rr) {
      if (rr) return !0 === rr ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== rr.intent,
        model: !1 !== rr.model
      }
    }

    function ON(rr, Sr) {
      return {}.hasOwnProperty.call(rr, Sr)
    }

    function LN(rr, Sr) {
      const Qr = Object.create(rr);
      return Sr && Object.defineProperty(Qr, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Sr
      }), Qr
    }

    function lN(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!TQ(rr)) return;
      const Zr = rr.trim();
      return Zr ? (Qr ? function(rr, Sr) {
        return function(rr) {
          return rr.length >= 10240 && (La.test(rr) || function(rr) {
            const Sr = Pa.exec(rr);
            if (!Sr) return !1;
            let Qr;
            try {
              Qr = decodeURIComponent(rr.slice(Sr[0].length))
            } catch (rr) {
              return !1
            }
            return Ha.test(Qr.replace(/[\r\n]/g, ""))
          }(rr) || Xa.test(rr) && la.test(rr))
        }(rr) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(rr, Sr, Qr) {
          const Zr = 4 * Qr.maxStringLength;
          if (rr.length > Zr) {
            const Wr = Sr(rr.slice(0, function(rr, Sr) {
              let Qr = Sr;
              for (; Qr > 0 && !Ca.test(rr[Qr - 1]);) Qr--;
              return Qr
            }(rr, Zr)));
            if (Wr.length >= 2 * Qr.maxStringLength) return Wr + Qr.truncationSuffix
          }
          return Sr(rr)
        }(rr, (rr => function(rr) {
          return Ij(rr, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(rr) {
          let Sr = rr.replace(wa, " ");
          return Sr = Sr.replace(ca, Oa), Sr = Sr.replace(Fa, Oa), Sr = Sr.replace(oa, `$1${Oa}`), Sr = Sr.replace(Ja, pj), Sr = Sr.replace(ba, Oa), Sr = Sr.replace(da, `$1${Oa}`), Sr = Sr.replace(sa, `$1${Oa}`), Sr
        }(fj(rr)))), Sr)
      }(Zr, TN) : Zr).slice(0, Sr) : void 0
    }

    function XN(rr) {
      try {
        return KQ(rr) && !0 === rr.isError
      } catch (rr) {
        return !1
      }
    }
    const PN = {
        featureFlags: class extends Fm {
          constructor(rr) {
            const Sr = new bm(rr.config, rr._shouldDisableFlags());
            super(Sr), this.name = ex, this._instance = rr, this._mutableConfigSource = Sr
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(rr, Sr) {
            this._mutableConfigSource.update(rr, Sr), this._onConfigUpdated()
          }
        }
      },
      HN = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var rr;
            return !!(null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr ? void 0 : rr.isStarted)
          }
          get status() {
            var rr, Sr;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (rr = null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr ? void 0 : Sr.status) && void 0 !== rr ? rr : this._recordingStatus
          }
          constructor(rr) {
            if (this._instance = rr, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = xm, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var rr, Sr;
                if (!(null == uS ? void 0 : uS.visibilityState) || "visible" === uS.visibilityState) return !0;
                const Qr = null == DS || null === (rr = DS.performance) || void 0 === rr || null === (Sr = rr.getEntriesByType) || void 0 === Sr ? void 0 : Sr.call(rr, "visibility-state");
                return !(null == Qr ? void 0 : Qr.length) || Qr.some((rr => "visible" === rr.name))
              })(), this._onVisibilityChange = () => {
                var rr, Sr;
                "visible" === (null == uS ? void 0 : uS.visibilityState) && (this._documentWasEverVisible = !0, null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr || null === (Sr = rr.setDocumentWasEverVisible) || void 0 === Sr || Sr.call(rr, !0))
              }, !this._instance.sessionManager) throw Nm.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == uS ? void 0 : uS.addEventListener) && bj(uS, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: rr = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var Sr;
            this._sessionRecordingDisposed = !0, null == uS || null === (Sr = uS.removeEventListener) || void 0 === Sr || Sr.call(uS, "visibilitychange", this._onVisibilityChange), rr ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var rr;
            const Sr = !!(null === (rr = this._instance.get_property("$session_recording_remote_config")) || void 0 === rr ? void 0 : rr.enabled),
              Qr = !this._config.disable_session_recording,
              Zr = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return DS && Sr && Qr && !Zr
          }
          startIfEnabledOrStop(rr) {
            var Sr;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr ? void 0 : Sr.isStarted)) return;
            const Qr = !BQ(Object.assign) && !BQ(Array.from);
            this._isRecordingEnabled && Qr ? (this._lazyLoadAndStart(rr), Nm.info("starting")) : (this._recordingStatus = xm, this.stopRecording())
          }
          _lazyLoadAndStart(rr) {
            var Sr, Qr;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = mm), (null == IQ || null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr || null === (Sr = Sr.rrweb) || void 0 === Sr ? void 0 : Sr.record) && (null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr ? void 0 : Qr.initSessionRecording)) this._onScriptLoaded(rr);
              else {
                var Zr, Wr;
                const Sr = this._instance.sessionManager;
                null === (Zr = IQ.__PosthogExtensions__) || void 0 === Zr || null === (Wr = Zr.loadExternalDependency) || void 0 === Wr || Wr.call(Zr, this._instance, this._scriptName, (Qr => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === Sr) return Qr ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), Nm.error("could not load recorder", Qr)) : void this._onScriptLoaded(rr);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var rr, Sr;
            null === (rr = this._persistFlagsOnSessionListener) || void 0 === rr || rr.call(this), this._persistFlagsOnSessionListener = void 0, null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr || Sr.stop()
          }
          _discardRecording() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var Sr, Qr;
            null === (Sr = this._persistFlagsOnSessionListener) || void 0 === Sr || Sr.call(this), this._persistFlagsOnSessionListener = void 0, null === (Qr = this._lazyLoadedSessionRecording) || void 0 === Qr || Qr.discard({
              discardProducerEvents: rr
            })
          }
          _resetSampling() {
            var rr, Sr;
            null === (rr = this._persistence) || void 0 === rr || rr.unregister("$session_is_sampled"), null === (Sr = this._persistence) || void 0 === Sr || Sr.unregister("$replay_sample_rate")
          }
          _validateSampleRate(rr, Sr) {
            if (LQ(rr)) return null;
            const Qr = lQ(rr) ? rr : parseFloat(rr);
            return "number" != typeof(Zr = Qr) || !Number.isFinite(Zr) || 0 > Zr || Zr > 1 ? (Nm.warn(`${Sr} must be between 0 and 1. Ignoring invalid value:`, rr), null) : Qr;
            var Zr
          }
          _persistRemoteConfig(rr) {
            if (this._persistence) {
              var Sr, Qr;
              const Zr = this._persistence,
                Wr = () => {
                  var Sr;
                  const Qr = !1 === rr.sessionRecording ? void 0 : rr.sessionRecording,
                    Wr = this._validateSampleRate(null === (Sr = this._config.session_recording) || void 0 === Sr ? void 0 : Sr.sampleRate, "session_recording.sampleRate"),
                    ar = this._validateSampleRate(null == Qr ? void 0 : Qr.sampleRate, "remote config sampleRate"),
                    jr = null != Wr ? Wr : ar;
                  LQ(jr) && this._resetSampling();
                  const Ir = null == Qr ? void 0 : Qr.minimumDurationMilliseconds;
                  Zr.register({
                    [cr]: YW(YW({
                      cache_timestamp: Date.now(),
                      enabled: !!Qr
                    }, Qr), {}, {
                      networkPayloadCapture: YW({
                        capturePerformance: rr.capturePerformance
                      }, null == Qr ? void 0 : Qr.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == Qr ? void 0 : Qr.recordCanvas,
                        fps: null == Qr ? void 0 : Qr.canvasFps,
                        quality: null == Qr ? void 0 : Qr.canvasQuality
                      },
                      sampleRate: jr,
                      minimumDurationMilliseconds: BQ(Ir) ? null : Ir,
                      endpoint: null == Qr ? void 0 : Qr.endpoint,
                      triggerMatchType: null == Qr ? void 0 : Qr.triggerMatchType,
                      masking: null == Qr ? void 0 : Qr.masking,
                      urlTriggers: null == Qr ? void 0 : Qr.urlTriggers,
                      version: null == Qr ? void 0 : Qr.version,
                      triggerGroups: null == Qr ? void 0 : Qr.triggerGroups
                    })
                  })
                };
              Wr(), null === (Sr = this._persistFlagsOnSessionListener) || void 0 === Sr || Sr.call(this), this._persistFlagsOnSessionListener = null === (Qr = this._instance.sessionManager) || void 0 === Qr ? void 0 : Qr.onSessionId(Wr)
            }
          }
          onRemoteConfig(rr) {
            const Sr = rr.ok ? rr.config : void 0;
            return Sr && "sessionRecording" in Sr ? !1 === Sr.sessionRecording ? (this._persistRemoteConfig(Sr), void this._discardRecording()) : (this._persistRemoteConfig(Sr), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [PS]: !0
            }), Nm.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var Qr;
            (null === (Qr = this._lazyLoadedSessionRecording) || void 0 === Qr ? void 0 : Qr.log) ? this._lazyLoadedSessionRecording.log(rr, Sr): Nm.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var rr, Sr;
            const Qr = null === (rr = this._instance) || void 0 === rr || null === (rr = rr.persistence) || void 0 === rr ? void 0 : rr.get_property(cr);
            return (null == Qr || null === (Sr = Qr.scriptConfig) || void 0 === Sr ? void 0 : Sr.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const rr = this._instance.get_property(cr);
            if (!rr) return !1;
            let Sr;
            try {
              Sr = "object" == typeof rr ? rr : JSON.parse(rr)
            } catch (rr) {
              return Nm.warn("persisted remote config for session recording is invalid and will be ignored", rr), !1
            }
            return !LQ(Sr.cache_timestamp) && 36e5 >= Date.now() - Sr.cache_timestamp
          }
          _onScriptLoaded(rr) {
            var Sr, Qr, Zr;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.initSessionRecording)) return Nm.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [XS]: !0
              });
              var Wr;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (Wr = IQ.__PosthogExtensions__) || void 0 === Wr ? void 0 : Wr.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", Nm.info("persisted remote config is stale, requesting fresh config before starting"), void new kE(this._instance).load()
              }
              this._recordingStatus = mm, null === (Qr = (Zr = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === Qr || Qr.call(Zr, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(rr)
            } else this._recordingStatus = xm
          }
          onRRwebEmit(rr) {
            var Sr, Qr;
            null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr || null === (Qr = Sr.onRRwebEmit) || void 0 === Qr || Qr.call(Sr, rr)
          }
          overrideLinkedFlag() {
            var rr, Sr;
            this._lazyLoadedSessionRecording || null === (Sr = this._persistence) || void 0 === Sr || Sr.register({
              $replay_override_linked_flag: !0
            }), null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr || rr.overrideLinkedFlag()
          }
          overrideSampling() {
            var rr, Sr;
            this._lazyLoadedSessionRecording || null === (Sr = this._persistence) || void 0 === Sr || Sr.register({
              $replay_override_sampling: !0
            }), null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr || rr.overrideSampling()
          }
          overrideTrigger(rr) {
            var Sr, Qr;
            this._lazyLoadedSessionRecording || null === (Qr = this._persistence) || void 0 === Qr || Qr.register({
              ["url" === rr ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (Sr = this._lazyLoadedSessionRecording) || void 0 === Sr || Sr.overrideTrigger(rr)
          }
          get sdkDebugProperties() {
            var rr;
            const Sr = {};
            for (const Zr of Um) {
              var Qr;
              const rr = null === (Qr = this._instance.sessionPersistence) || void 0 === Qr ? void 0 : Qr.get_property(Zr);
              BQ(rr) || (Sr[Zr] = rr)
            }
            return YW(YW({}, Sr), (null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr ? void 0 : rr.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(rr, Sr) {
            var Qr;
            return !!(null === (Qr = this._lazyLoadedSessionRecording) || void 0 === Qr ? void 0 : Qr.tryAddCustomEvent(rr, Sr))
          }
          flushBeforeIdentityReset() {
            var rr, Sr;
            null === (rr = this._lazyLoadedSessionRecording) || void 0 === rr || null === (Sr = rr.flushBeforeIdentityReset) || void 0 === Sr || Sr.call(rr)
          }
        }
      },
      qN = {
        autocapture: class extends ux {
          constructor(rr) {
            super(new rm(rr)), this.instance = rr
          }
        },
        historyAutocapture: class {
          constructor(rr) {
            this._isFlushingPageview = !1, this._instance = rr, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const rr = this._getCaptureOptions();
            return !!(rr.path || rr.search || this._shouldCaptureHashChanges(rr))
          }
          startIfEnabled() {
            this.isEnabled && (Cj.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, Cj.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            DS && DS.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(rr) {
            var Sr;
            if (!DS || (null === (Sr = DS.history[rr]) || void 0 === Sr ? void 0 : Sr.__posthog_wrapped__)) return;
            const Qr = this;
            Wm(DS.history, rr, (Sr => function(Zr, Wr, ar) {
              var jr;
              Qr._isUrlChanging(ar) && Qr._flushPendingPageview(), Sr.call(this, Zr, Wr, ar), Qr._capturePageview(rr, !Qr._isFlushingPageview && "popstate" !== (null == DS || null === (jr = DS.event) || void 0 === jr ? void 0 : jr.type))
            }))
          }
          _getCurrentLocation() {
            const rr = null == DS ? void 0 : DS.location;
            if (null == rr ? void 0 : rr.pathname) return {
              pathname: rr.pathname,
              search: rr.search,
              hash: rr.hash
            }
          }
          _getCaptureOptions() {
            const rr = this._instance.config.capture_pageview;
            return "history_change" === rr ? {
              path: !0
            } : KQ(rr) ? rr : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(rr) {
            const Sr = this._getCaptureOptions(),
              Qr = this._lastLocation;
            return !(!Qr || !(Sr.path && rr.pathname !== Qr.pathname || Sr.search && rr.search !== Qr.search || this._shouldCaptureHashChanges(Sr) && rr.hash !== Qr.hash))
          }
          _capturePageview(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              Sr || this._flushPendingPageview();
              const Qr = this._getCurrentLocation();
              if (!Qr) return;
              if (this._hasLocationChanged(Qr)) {
                const Qr = () => this._instance.capture(FS, {
                  navigation_type: rr
                });
                Sr ? (this._pendingPageview = Qr, Promise.resolve().then((() => this._flushPendingPageview()))) : Qr()
              }
              this._lastLocation = Qr
            } catch (Sr) {
              Cj.error(`Error capturing ${rr} pageview`, Sr)
            }
          }
          _isUrlChanging(rr) {
            var Sr, Qr;
            return !(LQ(rr) || !DS) && (null === (Sr = Mf(String(rr))) || void 0 === Sr ? void 0 : Sr.href) !== (null === (Qr = DS.location) || void 0 === Qr ? void 0 : Qr.href)
          }
          _flushPendingPageview() {
            const rr = this._pendingPageview;
            if (rr) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                rr()
              } catch (rr) {
                Cj.error("Error capturing deferred pageview", rr)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const rr = () => {
              this._capturePageview("popstate")
            };
            bj(DS, "popstate", rr), this._popstateListener = () => {
              DS && DS.removeEventListener("popstate", rr)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const rr = () => {
              this._capturePageview("hashchange")
            };
            bj(DS, "hashchange", rr), this._hashchangeListener = () => {
              DS && DS.removeEventListener("hashchange", rr)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(rr) {
            var Sr;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = rr, this._enabledServerSide = !!(null === (Sr = this.instance.persistence) || void 0 === Sr ? void 0 : Sr.props[gr]), this.rageclicks = new bx(rr.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let rr = 5e3;
            return KQ(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (rr = this._config.capture_heatmaps.flush_interval_milliseconds), rr
          }
          get isEnabled() {
            return LQ(this._config.capture_heatmaps) ? LQ(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              tm.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var rr;
              clearInterval(null !== (rr = this._flushInterval) && void 0 !== rr ? rr : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(rr) {
            if (!rr.ok) return;
            const Sr = rr.config;
            if (!("heatmaps" in Sr)) return;
            const Qr = !!Sr.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [gr]: Qr
            }), this._enabledServerSide = Qr, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const rr = this._buffer;
            return this._buffer = void 0, rr
          }
          _onDeadClick(rr) {
            hm(rr.originalEvent) && this._onClick(rr.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == uS ? void 0 : uS.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            DS && uS && (this._flushHandler = this._flush.bind(this), bj(DS, cS, this._flushHandler), this._onClickHandler = rr => this._onClick(rr || (null == DS ? void 0 : DS.event)), bj(uS, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = rr => this._onMouseMove(rr || (null == DS ? void 0 : DS.event)), bj(uS, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new ef(this.instance, Yf, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), bj(uS, Kr, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var rr;
            DS && uS && (this._flushHandler && DS.removeEventListener(cS, this._flushHandler), this._onClickHandler && uS.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && uS.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && uS.removeEventListener(Kr, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (rr = this._deadClicksCapture) || void 0 === rr || rr.stop(), this._initialized = !1)
          }
          _getProperties(rr, Sr) {
            const Qr = this.instance.scrollManager.scrollY(),
              Zr = this.instance.scrollManager.scrollX(),
              Wr = this.instance.scrollManager.scrollElement(),
              ar = function(rr, Sr, Qr) {
                let Zr = rr;
                for (; Zr && LI(Zr) && !lI(Zr, "body");) {
                  if (Zr === Qr) return !1;
                  let Ir;
                  try {
                    var Wr, ar, jr;
                    Ir = null === (Wr = null !== (ar = null === (jr = Zr.ownerDocument) || void 0 === jr ? void 0 : jr.defaultView) && void 0 !== ar ? ar : DS) || void 0 === Wr ? void 0 : Wr.getComputedStyle(Zr).position
                  } catch (rr) {
                    return !1
                  }
                  if (mQ(Sr, Ir)) return !0;
                  Zr = VI(Zr)
                }
                return !1
              }(MI(rr), ["fixed", "sticky"], Wr);
            return {
              x: rr.clientX + (ar ? 0 : Zr),
              y: rr.clientY + (ar ? 0 : Qr),
              target_fixed: ar,
              type: Sr
            }
          }
          _onClick(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var Qr;
            if (OI(rr.target) || !hm(rr)) return;
            const Zr = this._getProperties(rr, Sr);
            (null === (Qr = this.rageclicks) || void 0 === Qr ? void 0 : Qr.isRageClick(rr.clientX, rr.clientY, (new Date).getTime())) && rf(MI(rr), this.instance.config.rageclick) && this._capture(YW(YW({}, Zr), {}, {
              type: "rageclick"
            })), this._capture(Zr)
          }
          _onMouseMove(rr) {
            !OI(rr.target) && hm(rr) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(rr, "mousemove"))
            }), 500))
          }
          _capture(rr) {
            if (!DS) return;
            const Sr = this._config.disable_capture_url_hashes ? pW(DS.location.href) : DS.location.href,
              Qr = this._config.custom_personal_data_properties,
              Zr = this._config.mask_personal_data_properties ? [...Vf, ...Qr || []] : [],
              Wr = kf(Sr, Zr, Ff);
            this._buffer = this._buffer || {}, this._buffer[Wr] || (this._buffer[Wr] = []), this._buffer[Wr].push(rr)
          }
          _flush() {
            this._buffer && !yQ(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: ef,
        webVitalsAutocapture: class {
          constructor(rr) {
            var Sr;
            this._instance = rr, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", YW({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((rr, Sr) => YW(YW({}, rr), {}, {
                [`$web_vitals_${Sr.name}_event`]: YW({}, Sr),
                [`$web_vitals_${Sr.name}_value`]: Sr.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = rr => {
              var Sr;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, LQ(null == rr ? void 0 : rr.name) || LQ(null == rr ? void 0 : rr.value)) return void jm.error("Invalid metric received", rr);
              const Qr = "string" == typeof rr.navigationURL ? rr.navigationURL : void 0,
                Zr = this._maskedURL(Qr);
              if (BQ(Zr)) return;
              const Wr = lQ(rr.navigationId) || "string" == typeof rr.navigationId ? `navigation:${rr.navigationId}` : `url:${Zr}`;
              if (this._maxAllowedValue && rr.value >= this._maxAllowedValue) return void jm.error("Ignoring metric with value >= " + this._maxAllowedValue, rr);
              this._buffer.navigationKey !== Wr && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), BQ(this._buffer.navigationKey) && (this._buffer.navigationKey = Wr, this._buffer.url = Zr), this._buffer.firstMetricTimestamp = BQ(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const ar = null === (Sr = this._instance.sessionManager) || void 0 === Sr ? void 0 : Sr.checkAndGetSessionAndWindowId(!0),
                jr = YW(YW(YW({}, rr), Qr ? {
                  navigationURL: Zr
                } : {}), {}, {
                  $current_url: Zr,
                  timestamp: Date.now()
                });
              if (delete jr.entries, KQ(rr.attribution) && this.attributionMetrics.indexOf(rr.name) > -1) {
                const Sr = {};
                for (const Qr of pm) {
                  const Zr = "url" === Qr && "string" == typeof rr.attribution[Qr] ? this._maskedURL(rr.attribution[Qr]) : rr.attribution[Qr];
                  BQ(Zr) || (Sr[Qr] = Zr)
                }
                jr.attribution = Sr
              } else delete jr.attribution;
              BQ(ar) || (jr.$session_id = ar.sessionId, jr.$window_id = ar.windowId), this._buffer.metrics.push(jr), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let rr, Sr, Qr, Zr, Wr = !1;
              const ar = IQ.__PosthogExtensions__,
                jr = null == ar ? void 0 : ar.postHogWebVitalsCallbacksByFlavor,
                Ir = (null == jr ? void 0 : jr[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && BQ(jr) ? null == ar ? void 0 : ar.postHogWebVitalsCallbacks : void 0);
              if (!BQ(Ir)) {
                const ar = Ir.withoutAttribution,
                  jr = this.attributionMetrics;
                Wr = !BQ(ar), rr = jr.indexOf("LCP") > -1 ? Ir.onLCP : (null == ar ? void 0 : ar.onLCP) || Ir.onLCP, Sr = jr.indexOf("CLS") > -1 ? Ir.onCLS : (null == ar ? void 0 : ar.onCLS) || Ir.onCLS, Qr = jr.indexOf("FCP") > -1 ? Ir.onFCP : (null == ar ? void 0 : ar.onFCP) || Ir.onFCP, Zr = jr.indexOf("INP") > -1 ? Ir.onINP : (null == ar ? void 0 : ar.onINP) || Ir.onINP
              }
              if (!(rr && Sr && Qr && Zr)) return void jm.error("web vitals callbacks not loaded - not starting");
              const fr = {
                  reportSoftNavs: this.useSoftNavs
                },
                Er = Wr && this.attributionMetrics.indexOf("INP") > -1 ? YW(YW({}, fr), {}, {
                  includeProcessedEventEntries: !1
                }) : fr;
              this.allowedMetrics.indexOf("LCP") > -1 && rr(this._addToBuffer.bind(this), fr), this.allowedMetrics.indexOf("CLS") > -1 && Sr(this._addToBuffer.bind(this), fr), this.allowedMetrics.indexOf("FCP") > -1 && Qr(this._addToBuffer.bind(this), fr), this.allowedMetrics.indexOf("INP") > -1 && Zr(this._addToBuffer.bind(this), Er), this._initialized = !0
            }, this._enabledServerSide = !!(null === (Sr = this._instance.persistence) || void 0 === Sr ? void 0 : Sr.props[kr]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var rr, Sr;
            const Qr = KQ(this._perfConfig) ? null === (rr = this._perfConfig) || void 0 === rr ? void 0 : rr.web_vitals_allowed_metrics : void 0;
            return LQ(Qr) ? (null === (Sr = this._instance.persistence) || void 0 === Sr ? void 0 : Sr.props.$web_vitals_allowed_metrics) || fm : Qr
          }
          get flushToCaptureTimeoutMs() {
            return (KQ(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const rr = KQ(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return PQ(rr) ? rr ? fm : [] : nQ(rr) ? rr : Em
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const rr = KQ(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != rr && rr
          }
          get _maxAllowedValue() {
            const rr = KQ(this._perfConfig) && lQ(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : Im;
            return rr > 0 && 6e4 >= rr ? Im : rr
          }
          get isEnabled() {
            const rr = null == rQ ? void 0 : rQ.protocol;
            if ("http:" !== rr && "https:" !== rr) return jm.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const Sr = KQ(this._perfConfig) ? this._perfConfig.web_vitals : PQ(this._perfConfig) ? this._perfConfig : void 0;
            return PQ(Sr) ? Sr : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (jm.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(rr) {
            if (!rr.ok) return;
            const Sr = rr.config;
            if (!("capturePerformance" in Sr)) return;
            const Qr = KQ(Sr.capturePerformance) && !!Sr.capturePerformance.web_vitals,
              Zr = KQ(Sr.capturePerformance) ? Sr.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [kr]: Qr
            }), this._instance.persistence.register({
              [wr]: Zr
            })), this._enabledServerSide = Qr, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(rr) {
            var Sr;
            const Qr = IQ.__PosthogExtensions__,
              Zr = this._callbackFlavor,
              Wr = null == Qr ? void 0 : Qr.postHogWebVitalsCallbacksByFlavor;
            (null == Wr ? void 0 : Wr[Zr]) || "web-vitals" === Zr && BQ(Wr) && (null == Qr ? void 0 : Qr.postHogWebVitalsCallbacks) ? rr() : null == Qr || null === (Sr = Qr.loadExternalDependency) || void 0 === Sr || Sr.call(Qr, this._instance, Zr, (Sr => {
              Sr ? jm.error("failed to load script", Sr) : rr()
            }))
          }
          _maskedURL(rr) {
            const Sr = rr || (null == DS ? void 0 : DS.location.href);
            if (!Sr) return void jm.error("Could not determine current URL");
            const Qr = this._instance.config.disable_capture_url_hashes ? pW(Sr) : Sr,
              Zr = this._instance.config.custom_personal_data_properties,
              Wr = this._instance.config.mask_personal_data_properties ? [...Vf, ...Zr || []] : [];
            return kf(Qr, Wr, Ff)
          }
        }
      },
      RN = {
        exceptionObserver: class {
          constructor(rr) {
            var Sr;
            this._startCapturing = () => {
              var rr;
              if (!DS || !this.isEnabled || !(null === (rr = IQ.__PosthogExtensions__) || void 0 === rr ? void 0 : rr.errorWrappingFunctions)) return;
              const Sr = IQ.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                Qr = IQ.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                Zr = IQ.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = Sr(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = Qr(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = Zr(this.captureException.bind(this)))
              } catch (rr) {
                Sm.error("failed to start", rr), this._stopCapturing()
              }
            }, this._instance = rr, this._remoteEnabled = !!(null === (Sr = this._instance.persistence) || void 0 === Sr ? void 0 : Sr.props[Cr]), this._rateLimiter = new JQ(YW(YW({}, function() {
              let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var Sr, Qr, Zr, Wr;
              return {
                refillRate: null !== (Sr = null !== (Qr = rr.exceptionRateLimiterRefillRate) && void 0 !== Qr ? Qr : rr.__exceptionRateLimiterRefillRate) && void 0 !== Sr ? Sr : 1,
                bucketSize: null !== (Zr = null !== (Wr = rr.exceptionRateLimiterBucketSize) && void 0 !== Wr ? Wr : rr.__exceptionRateLimiterBucketSize) && void 0 !== Zr ? Zr : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Sm
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const rr = this._instance.config.capture_exceptions;
            let Sr = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return KQ(rr) ? Sr = YW(YW({}, Sr), rr) : (BQ(rr) ? this._remoteEnabled : rr) && (Sr = YW(YW({}, Sr), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), Sr
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Sm.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(rr) {
            var Sr, Qr, Zr;
            (null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.errorWrappingFunctions) ? rr(): null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this._instance, "exception-autocapture", (Sr => {
              if (Sr) return Sm.error("failed to load script", Sr);
              rr()
            }))
          }
          _stopCapturing() {
            var rr, Sr, Qr;
            null === (rr = this._unwrapOnError) || void 0 === rr || rr.call(this), this._unwrapOnError = void 0, null === (Sr = this._unwrapUnhandledRejection) || void 0 === Sr || Sr.call(this), this._unwrapUnhandledRejection = void 0, null === (Qr = this._unwrapConsoleError) || void 0 === Qr || Qr.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(rr) {
            if (!rr.ok) return;
            const Sr = rr.config;
            "autocaptureExceptions" in Sr && (this._remoteEnabled = !!Sr.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [Cr]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(rr) {
            try {
              var Sr, Qr, Zr;
              const Wr = null !== (Sr = null == rr || null === (Qr = rr.$exception_list) || void 0 === Qr || null === (Qr = Qr[0]) || void 0 === Qr ? void 0 : Qr.type) && void 0 !== Sr ? Sr : "Exception";
              if (this._rateLimiter.consumeRateLimit(Wr)) return void Sm.info("Skipping exception capture because of client rate limiting.", {
                exception: Wr
              });
              null === (Zr = this._instance.exceptions) || void 0 === Zr || Zr.sendExceptionEvent(rr)
            } catch (rr) {}
          }
        },
        exceptions: class {
          constructor(rr) {
            var Sr, Qr;
            this._suppressionRules = [], this._errorPropertiesBuilder = new vW([new bW, new Wa, new DW, new JW, new Qa, new Sa, new sW, new Za], function(rr) {
              for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
              return function(Sr) {
                let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const Wr = [],
                  ar = Sr.split("\n"),
                  jr = Math.min(ar.length, Zr + 1e3),
                  Ir = [];
                for (let pr = Zr; jr > pr; pr++) {
                  const Sr = ar[pr];
                  if (Sr.length > 1024) continue;
                  const Zr = kW.test(Sr) ? Sr.replace(kW, "$1") : Sr;
                  if (!Zr.match(/\S*Error: /)) {
                    for (const Sr of Qr) {
                      const Qr = Sr(Zr, rr);
                      if (Qr) {
                        Wr.push(Qr);
                        const rr = VW(Wr);
                        if (rr) {
                          for (let Sr = Ir.length - 1; Sr >= 0; Sr--) {
                            const Qr = Ir[Sr];
                            if (rr.start >= Qr.start + Qr.length) break;
                            Ir.pop()
                          }
                          Ir.push(rr)
                        }
                        break
                      }
                    }
                    if (FW(Wr, Ir) >= 50) break
                  }
                }
                const fr = [...Ir].sort(((rr, Sr) => Sr.start - rr.start)),
                  Er = fr[fr.length - 1];
                if (Er) {
                  const rr = wW(Wr, Er);
                  Wr.splice(Er.start - rr, rr);
                  for (const Sr of fr) Sr.start -= rr
                }
                for (const rr of fr) iW(Wr, rr);
                return Ir.some((rr => 0 === rr.start && Wr.length === rr.length)) && function(rr) {
                    const Sr = rr.map((rr => `${rr.function}|${rr.filename}|${rr.lineno}|${rr.colno}|${rr.module}`));
                    let Qr = 0;
                    for (let Zr = 1; Sr.length > Zr; Zr++) oW(Sr, Zr, Qr) && (Qr = Zr);
                    rr.push(...rr.splice(0, Qr))
                  }(Wr),
                  function(rr) {
                    if (!rr.length) return [];
                    const Sr = Array.from(rr);
                    return Sr.reverse(), Sr.slice(0, 50).map((rr => {
                      return YW(YW({}, rr), {}, {
                        filename: rr.filename || (Qr = Sr, Qr[Qr.length - 1] || {}).filename,
                        function: rr.function || "?"
                      });
                      var Qr
                    }))
                  }(Wr)
              }
            }("web:javascript", gW, GW)), this._instance = rr, this._suppressionRules = null !== (Sr = null === (Qr = this._instance.persistence) || void 0 === Qr ? void 0 : Qr.get_property("$error_tracking_suppression_rules")) && void 0 !== Sr ? Sr : [], this._exceptionStepsConfig = Ea(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new pa(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = Ea(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(rr) {
            var Sr, Qr, Zr;
            if (!rr.ok) return;
            const Wr = rr.config;
            if (!("errorTracking" in Wr)) return;
            const ar = null !== (Sr = null === (Qr = Wr.errorTracking) || void 0 === Qr ? void 0 : Qr.suppressionRules) && void 0 !== Sr ? Sr : [],
              jr = null === (Zr = Wr.errorTracking) || void 0 === Zr ? void 0 : Zr.captureExtensionExceptions;
            this._suppressionRules = ar, this._instance.persistence && this._instance.persistence.register({
              [Mr]: this._suppressionRules,
              [Gr]: jr
            })
          }
          get _captureExtensionExceptions() {
            var rr;
            const Sr = !!this._instance.get_property(Gr),
              Qr = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (rr = null != Qr ? Qr : Sr) && void 0 !== rr && rr
          }
          buildProperties(rr, Sr) {
            return this._errorPropertiesBuilder.buildFromUnknown(rr, {
              syntheticException: null == Sr ? void 0 : Sr.syntheticException,
              mechanism: {
                handled: null == Sr ? void 0 : Sr.handled
              }
            })
          }
          addExceptionStep(rr, Sr) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!TQ(rr) || 0 === rr.trim().length) return void Dm.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: Qr,
                droppedKeys: Zr
              } = function(rr) {
                if (!rr) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const Sr = [];
                return {
                  sanitizedProperties: Object.keys(rr).reduce(((Qr, Zr) => Ia.has(Zr) ? (Sr.push(Zr), Qr) : (Qr[Zr] = rr[Zr], Qr)), {}),
                  droppedKeys: Sr
                }
              }(this._coerceExceptionStepProperties(Sr));
              Zr.length > 0 && Dm.warn("Ignoring reserved exception step fields", {
                droppedKeys: Zr
              }), this._exceptionStepsBuffer.add(YW({
                [aa]: rr,
                [ja]: (new Date).toISOString()
              }, Qr))
            } catch (rr) {
              Dm.error("Failed to add exception step. Ignoring breadcrumb.", rr)
            }
          }
          sendExceptionEvent(rr) {
            try {
              const Sr = rr.$exception_list;
              if (this._isExceptionList(Sr)) {
                if (this._matchesSuppressionRule(Sr)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Dm.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(Sr)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Dm.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(Sr)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Dm.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(Sr)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Dm.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const Qr = this._exceptionStepsConfig.enabled && LQ(rr.$exception_steps) ? this._addBufferedExceptionSteps(rr) : rr,
                Zr = function() {
                  if ("u" > typeof process) {
                    var rr;
                    const Sr = null === (rr = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === rr ? void 0 : rr.trim();
                    if (Sr) return Sr
                  }
                  const Sr = globalThis._posthogReleaseId;
                  return "string" == typeof Sr && Sr.length > 0 ? Sr : void 0
                }();
              Zr && (Qr.$release_id = Zr);
              try {
                const rr = this._instance.capture("$exception", Qr, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return rr && this._exceptionStepsBuffer.clear(), rr
              } catch (rr) {
                return Jm(rr) || Dm.error("Failed to capture exception event. Dropping this exception.", rr), void this._exceptionStepsBuffer.clear()
              }
            } catch (rr) {
              return void(Jm(rr) || Dm.error("Failed to process exception event. Ignoring this exception.", rr))
            }
          }
          _addBufferedExceptionSteps(rr) {
            try {
              const Sr = this._exceptionStepsBuffer.getAttachable();
              return 0 === Sr.length ? rr : YW(YW({}, rr), {}, {
                $exception_steps: Sr
              })
            } catch (Wr) {
              return Dm.error("Failed to read buffered exception steps. Capturing exception without steps.", Wr), rr
            }
          }
          _addDroppedExceptionStep(rr) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [aa]: rr,
              [ja]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(rr) {
            return KQ(rr) ? YW({}, rr) : {}
          }
          _getExceptionStepsConfig() {
            var rr, Sr;
            return null !== (rr = null === (Sr = this._instance.config.error_tracking) || void 0 === Sr ? void 0 : Sr.exception_steps) && void 0 !== rr ? rr : {}
          }
          _matchesSuppressionRule(rr) {
            if (0 === rr.length) return !1;
            try {
              const Sr = rr.reduce(((rr, Sr) => {
                let {
                  type: Qr,
                  value: Zr
                } = Sr;
                return TQ(Qr) && Qr.length > 0 && rr.$exception_types.push(Qr), TQ(Zr) && Zr.length > 0 && rr.$exception_values.push(Zr), rr
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((rr => {
                const Qr = rr.values.map((rr => {
                  const Qr = Wx[rr.operator],
                    Zr = Sr[rr.key];
                  if (!Qr || !Zr) return !1;
                  const Wr = nQ(rr.value) ? rr.value : [rr.value];
                  return Wr.length > 0 && Qr(Wr, Zr)
                }));
                return "OR" === rr.type ? Qr.some(Boolean) : Qr.every(Boolean)
              }))
            } catch (rr) {
              return Dm.warn("Failed to evaluate suppression rules. Capturing the exception.", rr), !1
            }
          }
          _isExtensionException(rr) {
            const Sr = rr.flatMap((rr => {
                var Sr, Qr;
                return null !== (Sr = null === (Qr = rr.stacktrace) || void 0 === Qr ? void 0 : Qr.frames) && void 0 !== Sr ? Sr : []
              })),
              Qr = Sr.filter((rr => {
                let {
                  filename: Sr
                } = rr;
                return !!Sr && um.some((rr => Sr.startsWith(rr)))
              }));
            return 0 !== Qr.length && (!Qr.every((rr => {
              let {
                filename: Sr
              } = rr;
              return !!Sr && Sr.startsWith(dm)
            })) || rr.some((rr => {
              let {
                type: Sr,
                value: Qr
              } = rr;
              return "NoResponse" === Sr || TQ(Qr) && sm.some((rr => {
                let {
                  value: Sr,
                  exact: Zr
                } = rr;
                return Zr ? Qr === Sr : Qr.includes(Sr)
              }))
            })) && !Sr.some((rr => {
              let {
                in_app: Sr,
                filename: Qr
              } = rr;
              return Sr && !(null == Qr ? void 0 : Qr.startsWith(dm))
            })))
          }
          _isInjectedBrowserScriptException(rr) {
            return rr.some((rr => {
              let {
                value: Sr
              } = rr;
              return TQ(Sr) && rN.some((rr => Sr.includes(rr)))
            }))
          }
          _isPostHogException(rr) {
            if (rr.length > 0) {
              var Sr, Qr, Zr, Wr;
              const ar = null !== (Sr = null === (Qr = rr[0].stacktrace) || void 0 === Qr ? void 0 : Qr.frames) && void 0 !== Sr ? Sr : [],
                jr = ar[ar.length - 1];
              return null !== (Zr = null == jr || null === (Wr = jr.filename) || void 0 === Wr ? void 0 : Wr.includes("posthog.com/static")) && void 0 !== Zr && Zr
            }
            return !1
          }
          _isExceptionList(rr) {
            return !LQ(rr) && nQ(rr)
          }
        }
      },
      gN = YW({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(rr) {
            this._productTourManager = null, this._cachedTours = null, this._instance = rr
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(rr) {
            if (!rr.ok) return;
            const Sr = rr.config;
            if ("productTours" in Sr) {
              var Qr, Zr;
              if (this._persistence && this._persistence.register({
                  [Vr]: !!Sr.productTours
                }), !Ym(this._instance)) return !this._productTourManager && LQ(null === (Qr = this._persistence) || void 0 === Qr ? void 0 : Qr.props.ph_product_tours) || zm.info("product tours disabled; stopping and clearing cached tours"), null === (Zr = this._productTourManager) || void 0 === Zr || Zr.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Ym(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(rr) {
            var Sr, Qr, Zr;
            (null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.generateProductTours) ? rr(): null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this._instance, "product-tours", (Sr => {
              Sr ? zm.error("Could not load product tours script", Sr) : rr()
            }))
          }
          _startProductTours() {
            var rr;
            !this._productTourManager && (null === (rr = IQ.__PosthogExtensions__) || void 0 === rr ? void 0 : rr.generateProductTours) && (this._productTourManager = IQ.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (nQ(this._cachedTours) && !Sr) return void rr(this._cachedTours, {
              isLoaded: !0
            });
            const Qr = this._persistence;
            if (Qr) {
              const Zr = Qr.props[xS];
              if (nQ(Zr) && !Sr) return this._cachedTours = Zr, void rr(Zr, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: Sr => {
                if (!Ym(this._instance)) return void rr([], {
                  isLoaded: !0
                });
                const Zr = Sr.statusCode;
                if (200 !== Zr || !Sr.json) {
                  const Qr = `Product Tours API could not be loaded, status: ${Zr}`;
                  return 0 === Zr ? Sr.error || zm.warn(Qr) : zm.error(Qr), void rr([], {
                    isLoaded: !1,
                    error: Qr
                  })
                }
                const Wr = nQ(Sr.json.product_tours) ? Sr.json.product_tours : [];
                this._cachedTours = Wr, Qr && Qr.register({
                  [xS]: Wr
                }), rr(Wr, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(rr) {
            LQ(this._productTourManager) ? rr([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(rr)
          }
          showProductTour(rr) {
            var Sr;
            null === (Sr = this._productTourManager) || void 0 === Sr || Sr.showTourById(rr)
          }
          previewTour(rr) {
            this._productTourManager ? this._productTourManager.previewTour(rr) : this._loadScript((() => {
              var Sr;
              this._startProductTours(), null === (Sr = this._productTourManager) || void 0 === Sr || Sr.previewTour(rr)
            }))
          }
          dismissProductTour() {
            var rr;
            null === (rr = this._productTourManager) || void 0 === rr || rr.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var rr;
            null === (rr = this._productTourManager) || void 0 === rr || rr.nextStep()
          }
          previousStep() {
            var rr;
            null === (rr = this._productTourManager) || void 0 === rr || rr.previousStep()
          }
          clearCache() {
            var rr;
            this._cachedTours = null, null === (rr = this._persistence) || void 0 === rr || rr.unregister("ph_product_tours")
          }
          resetTour(rr) {
            var Sr;
            null === (Sr = this._productTourManager) || void 0 === Sr || Sr.resetTour(rr)
          }
          resetAllTours() {
            var rr;
            null === (rr = this._productTourManager) || void 0 === rr || rr.resetAllTours()
          }
          cancelPendingTour(rr) {
            var Sr;
            null === (Sr = this._productTourManager) || void 0 === Sr || Sr.cancelPendingTour(rr)
          }
        }
      }, PN),
      CN = {
        siteApps: class {
          constructor(rr) {
            this._instance = rr, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(rr, Sr) {
            if (!Sr) return;
            const Qr = this.globalsForEvent(Sr);
            this._bufferedInvocations.push(Qr), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var rr;
            return null === (rr = IQ._POSTHOG_REMOTE_CONFIG) || void 0 === rr || null === (rr = rr[this._instance.config.token]) || void 0 === rr ? void 0 : rr.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const rr = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                rr(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(rr) {
            var Sr, Qr, Zr, Wr, ar, jr, Ir;
            if (!rr) throw new Error("Event payload is required");
            const fr = {},
              Er = this._instance.get_property("$groups") || [],
              pr = this._instance.get_property("$stored_group_properties") || {};
            for (const [Nr, Ur] of Object.entries(pr)) fr[Nr] = {
              id: Er[Nr],
              type: Nr,
              properties: Ur
            };
            const {
              $set_once: xr,
              $set: mr
            } = rr;
            return {
              event: YW(YW({}, va(rr, nm)), {}, {
                properties: YW(YW(YW({}, rr.properties), mr ? {
                  $set: YW(YW({}, null !== (Sr = null === (Qr = rr.properties) || void 0 === Qr ? void 0 : Qr.$set) && void 0 !== Sr ? Sr : {}), mr)
                } : {}), xr ? {
                  $set_once: YW(YW({}, null !== (Zr = null === (Wr = rr.properties) || void 0 === Wr ? void 0 : Wr.$set_once) && void 0 !== Zr ? Zr : {}), xr)
                } : {}),
                elements_chain: null !== (ar = null === (jr = rr.properties) || void 0 === jr ? void 0 : jr.$elements_chain) && void 0 !== ar ? ar : "",
                distinct_id: null === (Ir = rr.properties) || void 0 === Ir ? void 0 : Ir.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: fr
            }
          }
          _prepareElementForSiteApp(rr) {
            var Sr;
            const Qr = null === (Sr = rr.tagName) || void 0 === Sr ? void 0 : Sr.toLowerCase();
            return "style" === Qr && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(rr) || (em.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === Qr && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(rr) || (em.error("prepare_external_dependency_script returned null"), null) : rr
          }
          _patchSiteAppElementInsertionMethods() {
            var rr, Sr, Qr, Zr, Wr, ar, jr, Ir;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const fr = null == uS ? void 0 : uS.defaultView,
              Er = null == fr || null === (rr = fr.Node) || void 0 === rr ? void 0 : rr.prototype;
            if (!fr || !Er) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const pr = [],
              xr = this,
              mr = new WeakSet,
              Nr = (rr, Sr, Qr) => {
                if (!(null == rr ? void 0 : rr[Sr])) return;
                const Zr = rr[Sr];
                rr[Sr] = Qr(Zr), pr.push((() => {
                  rr[Sr] = Zr
                }))
              },
              Ur = rr => {
                if (mr.has(rr)) return rr;
                const Sr = xr._prepareElementForSiteApp(rr);
                return Sr && mr.add(Sr), Sr
              },
              tr = rr => rr.map((rr => "string" == typeof rr ? rr : Ur(rr))).filter((rr => !OQ(rr)));
            return Nr(Er, "appendChild", (rr => function(Sr) {
              const Qr = Ur(Sr);
              return Qr ? rr.call(this, Qr) : Sr
            })), Nr(Er, "insertBefore", (rr => function(Sr, Qr) {
              const Zr = Ur(Sr);
              return Zr ? rr.call(this, Zr, Qr) : Sr
            })), Nr(Er, "replaceChild", (rr => function(Sr, Qr) {
              const Zr = Ur(Sr);
              return Zr ? rr.call(this, Zr, Qr) : Qr
            })), [null === (Sr = fr.Element) || void 0 === Sr ? void 0 : Sr.prototype, null === (Qr = fr.Document) || void 0 === Qr ? void 0 : Qr.prototype, null === (Zr = fr.DocumentFragment) || void 0 === Zr ? void 0 : Zr.prototype].forEach((rr => {
              Nr(rr, "append", (rr => function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                return rr.apply(this, tr(Qr))
              })), Nr(rr, "prepend", (rr => function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                return rr.apply(this, tr(Qr))
              }))
            })), [null === (Wr = fr.Element) || void 0 === Wr ? void 0 : Wr.prototype, null === (ar = fr.CharacterData) || void 0 === ar ? void 0 : ar.prototype, null === (jr = fr.DocumentType) || void 0 === jr ? void 0 : jr.prototype].forEach((rr => {
              Nr(rr, "before", (rr => function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                return rr.apply(this, tr(Qr))
              })), Nr(rr, "after", (rr => function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                return rr.apply(this, tr(Qr))
              })), Nr(rr, "replaceWith", (rr => function() {
                for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
                const Wr = tr(Qr);
                return Qr.length && !Wr.length ? void 0 : rr.apply(this, Wr)
              }))
            })), Nr(null === (Ir = fr.Element) || void 0 === Ir ? void 0 : Ir.prototype, "insertAdjacentElement", (rr => function(Sr, Qr) {
              const Zr = Ur(Qr);
              return Zr ? rr.call(this, Sr, Zr) : null
            })), this._restoreSiteAppElementPatches = () => {
              pr.forEach((rr => rr())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let rr = !1;
            return () => {
              var Sr;
              rr || (rr = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (Sr = this._restoreSiteAppElementPatches) || void 0 === Sr || Sr.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(rr) {
            let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const Qr = this._patchSiteAppElementInsertionMethods();
            try {
              const Zr = rr(Qr);
              return Sr && Qr(), Zr
            } catch (rr) {
              throw Qr(), rr
            }
          }
          setupSiteApp(rr) {
            const Sr = this.apps[rr.id],
              Qr = () => {
                var Qr;
                !Sr.errored && this._bufferedInvocations.length && (em.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${rr.id}`), this._bufferedInvocations.forEach((rr => this._runWithPreparedSiteAppElements((() => {
                  var Qr;
                  return null === (Qr = Sr.processEvent) || void 0 === Qr ? void 0 : Qr.call(Sr, rr)
                })))), Sr.processedBuffer = !0), Object.values(this.apps).every((rr => rr.processedBuffer || rr.errored)) && (null === (Qr = this._stopBuffering) || void 0 === Qr || Qr.call(this))
              };
            let Zr = !1;
            const Wr = Wr => {
              Sr.errored = !Wr, Sr.loaded = !0, em.info(`Site app with id ${rr.id} ${Wr?"loaded":"errored"}`), Zr && Qr()
            };
            try {
              const {
                processEvent: Qr
              } = this._runWithPreparedSiteAppElements((Sr => rr.init({
                posthog: this._instance,
                callback(rr) {
                  Sr(), Wr(rr)
                }
              })), !1);
              Qr && (Sr.processEvent = Qr), Zr = !0
            } catch (Sr) {
              em.error(Km + rr.id, Sr), Wr(!1)
            }
            if (Zr && Sr.loaded) try {
              Qr()
            } catch (Qr) {
              em.error(`Error while processing buffered events PostHog app with config id ${rr.id}`, Qr), Sr.errored = !0
            }
          }
          _setupSiteApps() {
            const rr = this.siteAppLoaders || [];
            for (const Sr of rr) this.apps[Sr.id] = {
              id: Sr.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const Sr of rr) this.setupSiteApp(Sr)
          }
          _onCapturedEvent(rr) {
            if (0 === Object.keys(this.apps).length) return;
            const Sr = this.globalsForEvent(rr);
            for (const Qr of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var rr;
                return null === (rr = Qr.processEvent) || void 0 === rr ? void 0 : rr.call(Qr, Sr)
              }))
            } catch (Sr) {
              em.error(`Error while processing event ${rr.event} for site app ${Qr.id}`, Sr)
            }
          }
          onRemoteConfig(rr) {
            var Sr, Qr, Zr;
            if (null === (Sr = this.siteAppLoaders) || void 0 === Sr ? void 0 : Sr.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (rr => this._onCapturedEvent(rr)))) : void em.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (Qr = this._stopBuffering) || void 0 === Qr || Qr.call(this), !rr.ok) return;
            const Wr = rr.config;
            if (null === (Zr = Wr.siteApps) || void 0 === Zr ? void 0 : Zr.length)
              if (this.isEnabled)
                for (const {
                    id: Ir,
                    url: fr
                  }
                  of Wr.siteApps) {
                  var ar, jr;
                  IQ[`__$$ph_site_app_${Ir}`] = this._instance, null === (ar = IQ.__PosthogExtensions__) || void 0 === ar || null === (jr = ar.loadSiteApp) || void 0 === jr || jr.call(ar, this._instance, fr, (rr => {
                    if (rr) return em.error(Km + Ir, rr)
                  }))
                } else em.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      MN = {
        tracingHeaders: class {
          constructor(rr) {
            this._instance = rr, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const rr = this._syncHostnamesForPatch();
              var Sr, Qr;
              rr ? (BQ(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr || null === (Sr = Sr.tracingHeadersPatchFns) || void 0 === Sr ? void 0 : Sr._patchXHR(rr, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), BQ(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Qr = Qr.tracingHeadersPatchFns) || void 0 === Qr ? void 0 : Qr._patchFetch(rr, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(rr) {
            var Sr, Qr, Zr;
            (null === (Sr = IQ.__PosthogExtensions__) || void 0 === Sr ? void 0 : Sr.tracingHeadersPatchFns) ? rr(): null === (Qr = IQ.__PosthogExtensions__) || void 0 === Qr || null === (Zr = Qr.loadExternalDependency) || void 0 === Zr || Zr.call(Qr, this._instance, "tracing-headers", (Sr => {
              if (Sr) return am.error("failed to load script", Sr);
              rr()
            }))
          }
          _getConfiguredHostnames() {
            var rr, Sr;
            return null !== (rr = null !== (Sr = this._instance.config.tracing_headers) && void 0 !== Sr ? Sr : this._instance.config.addTracingHeaders) && void 0 !== rr ? rr : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const rr = this._getConfiguredHostnames();
            return nQ(rr) ? (nQ(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...rr) : this._hostnamesForPatch = [...rr], rr.length > 0 ? this._hostnamesForPatch : void 0) : (nQ(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = rr || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var rr, Sr;
            null === (rr = this._restoreXHRPatch) || void 0 === rr || rr.call(this), null === (Sr = this._restoreFetchPatch) || void 0 === Sr || Sr.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      GN = YW({
        surveys: class extends Om {
          constructor(rr) {
            var Sr;
            super(new qm(rr), (Sr = rr, {
              get projectToken() {
                return Sr.config.token
              },
              kv: new Hm(Sr)
            })), this._instance = rr
          }
          _sendSurveysRequest(rr, Sr) {
            const Qr = Sr.query ? Tp(rr, Sr.query) : rr;
            return new Promise((rr => {
              var Zr;
              this._instance._send_request({
                method: Sr.method,
                url: this._instance.requestRouter.endpointFor(null !== (Zr = Sr.target) && void 0 !== Zr ? Zr : "api", Qr),
                data: Sr.body,
                headers: Sr.headers,
                timeout: Sr.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: Sr.transport,
                compression: Sr.compression,
                timestampMode: Sr.sentAt,
                callback: rr
              })
            }))
          }
        }
      }, PN),
      kN = {
        toolbar: class {
          constructor(rr) {
            this.instance = rr
          }
          _setToolbarState(rr) {
            IQ.ph_toolbar_state = rr
          }
          _getToolbarState() {
            var rr;
            return null !== (rr = IQ.ph_toolbar_state) && void 0 !== rr ? rr : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var Zr, Wr;
            if (Jj(this.instance.config)) return !1;
            if (!DS || !uS) return !1;
            rr = null !== (Zr = rr) && void 0 !== Zr ? Zr : DS.location, Qr = null !== (Wr = Qr) && void 0 !== Wr ? Wr : DS.history;
            try {
              if (!Sr) {
                try {
                  DS.localStorage.setItem("test", "test"), DS.localStorage.removeItem("test")
                } catch (rr) {
                  return !1
                }
                Sr = null == DS ? void 0 : DS.localStorage
              }
              const Zr = Rm || Af(rr.hash, "__posthog") || Af(rr.hash, "state");
              let Wr;
              const ar = Zr ? xW((() => JSON.parse(atob(decodeURIComponent(Zr))))) || xW((() => JSON.parse(decodeURIComponent(Zr)))) : null;
              return ar && "ph_authorize" === ar.action ? (Wr = ar, Wr.source = "url", Wr && Object.keys(Wr).length > 0 && (ar.desiredHash ? rr.hash = ar.desiredHash : Qr ? Qr.replaceState(Qr.state, "", rr.pathname + rr.search) : rr.hash = "")) : (Wr = JSON.parse(Sr.getItem(gm) || "{}"), Wr.source = "localstorage", delete Wr.userIntent), !(!Wr.token || this.instance.config.token !== Wr.token || (this.loadToolbar(Wr), 0))
            } catch (rr) {
              return !1
            }
          }
          _callLoadToolbar(rr) {
            const Sr = IQ.ph_load_toolbar || IQ.ph_load_editor;
            !LQ(Sr) && eQ(Sr) ? Sr(rr, this.instance) : Cm.warn("No toolbar load function found")
          }
          loadToolbar(rr) {
            const Sr = !!(null == uS ? void 0 : uS.getElementById("__POSTHOG_TOOLBAR__"));
            if (!DS || Sr) return !1;
            const Qr = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              Zr = YW(YW({
                token: this.instance.config.token
              }, rr), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, Qr ? {
                instrument: !1
              } : {});
            if (DS.localStorage.setItem(gm, JSON.stringify(YW(YW({}, Zr), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(Zr);
            else if (0 === this._getToolbarState()) {
              var Wr, ar;
              this._setToolbarState(1), null === (Wr = IQ.__PosthogExtensions__) || void 0 === Wr || null === (ar = Wr.loadExternalDependency) || void 0 === ar || ar.call(Wr, this.instance, "toolbar", (rr => {
                if (rr) return Cm.error("[Toolbar] Failed to load", rr), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(Zr)
              })), bj(DS, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(Zr)
              }))
            }
            return !0
          }
          _loadEditor(rr) {
            return this.loadToolbar(rr)
          }
          maybeLoadEditor() {
            let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(rr, Sr, Qr)
          }
        }
      },
      AN = YW({
        experiments: class rr {
          get _config() {
            return this._instance.config
          }
          constructor(Sr) {
            var Qr = this;
            this._instance = Sr, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              Qr.getWebExperiments((Sr => {
                rr._logInfo("retrieved web experiments from the server"), Qr._flagToExperiments = new Map, Sr.forEach((Sr => {
                  if (Sr.feature_flag_key) {
                    var Zr;
                    Qr._flagToExperiments && (rr._logInfo("setting flag key ", Sr.feature_flag_key, " to web experiment ", Sr), null === (Zr = Qr._flagToExperiments) || void 0 === Zr || Zr.set(Sr.feature_flag_key, Sr));
                    const Wr = Qr._instance.getFeatureFlag(Sr.feature_flag_key);
                    TQ(Wr) && Sr.variants[Wr] && Qr._applyTransforms(Sr.name, Wr, Sr.variants[Wr].transforms)
                  } else if (Sr.variants)
                    for (const Wr in Sr.variants) {
                      const Zr = Sr.variants[Wr];
                      rr._matchesTestVariant(Zr, Qr._instance) && Qr._applyTransforms(Sr.name, Wr, Zr.transforms)
                    }
                }))
              }), Sr)
            }, this._instance.onFeatureFlags((rr => {
              this.onFeatureFlags(rr)
            }))
          }
          initialize() {}
          onFeatureFlags(Sr) {
            if (this._is_bot()) rr._logInfo(SN);
            else if (!this._config.disable_web_experiments) {
              if (LQ(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              rr._logInfo("applying feature flags", Sr), Sr.forEach((rr => {
                var Sr;
                if (this._flagToExperiments && (null === (Sr = this._flagToExperiments) || void 0 === Sr ? void 0 : Sr.has(rr))) {
                  var Qr;
                  const Sr = this._instance.getFeatureFlag(rr),
                    Zr = null === (Qr = this._flagToExperiments) || void 0 === Qr ? void 0 : Qr.get(rr);
                  Sr && (null == Zr ? void 0 : Zr.variants[Sr]) && this._applyTransforms(Zr.name, Sr, Zr.variants[Sr].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const Sr = rr.getWindowLocation();
            if (null == Sr ? void 0 : Sr.search) {
              const Qr = Gf(null == Sr ? void 0 : Sr.search, "__experiment_id"),
                Zr = Gf(null == Sr ? void 0 : Sr.search, "__experiment_variant");
              Qr && Zr && (rr._logInfo(`previewing web experiments ${Qr} && ${Zr}`), this.getWebExperiments((rr => {
                this._showPreviewWebExperiment(parseInt(Qr), Zr, rr)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(rr, Sr, Qr) {
            if (this._config.disable_web_experiments && !Qr) return rr([]);
            const Zr = this._instance.get_property("$web_experiments");
            if (Zr && !Sr) return rr(Zr);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: Sr => rr(200 === Sr.statusCode && Sr.json && Sr.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(Sr, Qr, Zr) {
            const Wr = Zr.filter((rr => rr.id === Sr));
            Wr && Wr.length > 0 && (rr._logInfo(`Previewing web experiment [${Wr[0].name}] with variant [${Qr}]`), this._applyTransforms(Wr[0].name, Qr, Wr[0].variants[Qr].transforms))
          }
          static _matchesTestVariant(Sr, Qr) {
            return !LQ(Sr.conditions) && rr._matchUrlConditions(Sr, Qr) && rr._matchUTMConditions(Sr)
          }
          static _matchUrlConditions(Sr, Qr) {
            var Zr;
            if (LQ(Sr.conditions) || LQ(null === (Zr = Sr.conditions) || void 0 === Zr ? void 0 : Zr.url)) return !0;
            const Wr = rr.getWindowLocation();
            if (Wr) {
              var ar, jr, Ir;
              const rr = vI(Qr, Wr.href);
              return !(null === (ar = Sr.conditions) || void 0 === ar ? void 0 : ar.url) || QN[null !== (jr = null === (Ir = Sr.conditions) || void 0 === Ir ? void 0 : Ir.urlMatchType) && void 0 !== jr ? jr : "icontains"](Sr.conditions.url, rr)
            }
            return !1
          }
          static getWindowLocation() {
            return null == DS ? void 0 : DS.location
          }
          static _matchUTMConditions(rr) {
            var Sr;
            if (LQ(rr.conditions) || LQ(null === (Sr = rr.conditions) || void 0 === Sr ? void 0 : Sr.utm)) return !0;
            const Qr = bf();
            if (Qr.utm_source) {
              var Zr, Wr, ar, jr, Ir, fr, Er, pr;
              const Sr = !(null === (Zr = rr.conditions) || void 0 === Zr || null === (Zr = Zr.utm) || void 0 === Zr ? void 0 : Zr.utm_campaign) || (null === (Wr = rr.conditions) || void 0 === Wr || null === (Wr = Wr.utm) || void 0 === Wr ? void 0 : Wr.utm_campaign) == Qr.utm_campaign,
                xr = !(null === (ar = rr.conditions) || void 0 === ar || null === (ar = ar.utm) || void 0 === ar ? void 0 : ar.utm_source) || (null === (jr = rr.conditions) || void 0 === jr || null === (jr = jr.utm) || void 0 === jr ? void 0 : jr.utm_source) == Qr.utm_source,
                mr = !(null === (Ir = rr.conditions) || void 0 === Ir || null === (Ir = Ir.utm) || void 0 === Ir ? void 0 : Ir.utm_medium) || (null === (fr = rr.conditions) || void 0 === fr || null === (fr = fr.utm) || void 0 === fr ? void 0 : fr.utm_medium) == Qr.utm_medium,
                Nr = !(null === (Er = rr.conditions) || void 0 === Er || null === (Er = Er.utm) || void 0 === Er ? void 0 : Er.utm_term) || (null === (pr = rr.conditions) || void 0 === pr || null === (pr = pr.utm) || void 0 === pr ? void 0 : pr.utm_term) == Qr.utm_term;
              return Sr && mr && Nr && xr
            }
            return !1
          }
          static _logInfo(rr) {
            for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
            Cj.info(`[WebExperiments] ${rr}`, Qr)
          }
          _applyTransforms(Sr, Qr, Zr) {
            this._is_bot() ? rr._logInfo(SN) : "control" !== Qr ? Zr.forEach((Zr => {
              if (Zr.selector) {
                var Wr;
                rr._logInfo(`applying transform of variant ${Qr} for experiment ${Sr} `, Zr);
                const ar = null === (Wr = document) || void 0 === Wr ? void 0 : Wr.querySelectorAll(Zr.selector);
                null == ar || ar.forEach((rr => {
                  const Sr = rr;
                  Zr.html && (Sr.innerHTML = Zr.html), Zr.css && Sr.setAttribute("style", Zr.css)
                }))
              }
            })) : rr._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return sS && this._instance ? dp(sS, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, PN),
      VN = {
        conversations: class {
          constructor(rr) {
            this._instance = rr, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(rr) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = rr.ok, !rr.ok) return;
            const Sr = rr.config.conversations;
            LQ(Sr) || (PQ(Sr) ? this._isConversationsEnabled = Sr : (this._isConversationsEnabled = Sr.enabled, this._remoteConfig = Sr), this.loadIfEnabled())
          }
          reset() {
            var rr;
            null === (rr = this._conversationsManager) || void 0 === rr || rr.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (Jj(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const rr = null == IQ ? void 0 : IQ.__PosthogExtensions__;
            if (rr && !BQ(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const Sr = rr.initConversations;
                  if (Sr) return this._completeInitialization(Sr), void(this._isInitializing = !1);
                  const Qr = rr.loadExternalDependency;
                  if (!Qr) return void this._handleLoadError(AS);
                  Qr(this._instance, "conversations", (Sr => {
                    Sr || !rr.initConversations ? this._handleLoadError("Could not load conversations script", Sr) : this._completeInitialization(rr.initConversations), this._isInitializing = !1
                  }))
                } catch (rr) {
                  this._handleLoadError("Error initializing conversations", rr), this._isInitializing = !1
                }
              } else ZN.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(rr) {
            if (this._remoteConfig) try {
              this._conversationsManager = rr(this._remoteConfig, this._instance), this._loadFailed = !1, ZN.info("Conversations loaded successfully")
            } catch (rr) {
              this._handleLoadError("Error completing conversations initialization", rr)
            } else ZN.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(rr, Sr) {
            ZN.error(rr, Sr), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : ZN.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !OQ(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : Jj(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : BQ(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? LQ(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == IQ ? void 0 : IQ.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var rr, Sr;
            return null !== (rr = null === (Sr = this._conversationsManager) || void 0 === Sr ? void 0 : Sr.isVisible()) && void 0 !== rr && rr
          }
          sendMessage(rr, Sr, Qr) {
            var Zr = this;
            return wQ((function*() {
              return Zr._conversationsManager ? Zr._conversationsManager.sendMessage(rr, Sr, Qr) : (ZN.warn(WN), null)
            }))()
          }
          getMessages(rr, Sr) {
            var Qr = this;
            return wQ((function*() {
              return Qr._conversationsManager ? Qr._conversationsManager.getMessages(rr, Sr) : (ZN.warn(WN), null)
            }))()
          }
          markAsRead(rr) {
            var Sr = this;
            return wQ((function*() {
              return Sr._conversationsManager ? Sr._conversationsManager.markAsRead(rr) : (ZN.warn(WN), null)
            }))()
          }
          getTickets(rr) {
            var Sr = this;
            return wQ((function*() {
              return Sr._conversationsManager ? Sr._conversationsManager.getTickets(rr) : (ZN.warn(WN), null)
            }))()
          }
          requestRestoreLink(rr) {
            var Sr = this;
            return wQ((function*() {
              return Sr._conversationsManager ? Sr._conversationsManager.requestRestoreLink(rr) : (ZN.warn(WN), null)
            }))()
          }
          restoreFromToken(rr) {
            var Sr = this;
            return wQ((function*() {
              return Sr._conversationsManager ? Sr._conversationsManager.restoreFromToken(rr) : (ZN.warn(WN), null)
            }))()
          }
          restoreFromUrlToken() {
            var rr = this;
            return wQ((function*() {
              return rr._conversationsManager ? rr._conversationsManager.restoreFromUrlToken() : (ZN.warn(WN), null)
            }))()
          }
          getCurrentTicketId() {
            var rr, Sr;
            return null !== (rr = null === (Sr = this._conversationsManager) || void 0 === Sr ? void 0 : Sr.getCurrentTicketId()) && void 0 !== rr ? rr : null
          }
          getWidgetSessionId() {
            var rr, Sr;
            return null !== (rr = null === (Sr = this._conversationsManager) || void 0 === Sr ? void 0 : Sr.getWidgetSessionId()) && void 0 !== rr ? rr : null
          }
          _onIdentityChanged() {
            var rr;
            null === (rr = this._conversationsManager) || void 0 === rr || rr.setIdentity()
          }
          _onIdentityCleared() {
            var rr;
            null === (rr = this._conversationsManager) || void 0 === rr || rr.clearIdentity()
          }
        }
      },
      iN = {
        logs: class extends mN {
          constructor(rr) {
            super({
              get() {
                var Sr;
                return null == rr || null === (Sr = rr.config) || void 0 === Sr ? void 0 : Sr.logs
              },
              captureHintKey: ir,
              get remoteConfigWillArrive() {
                var Sr, Qr;
                return !(null === (Sr = rr._shouldDisableFlags) || void 0 === Sr ? void 0 : Sr.call(rr)) || !!(null === (Qr = IQ._POSTHOG_REMOTE_CONFIG) || void 0 === Qr || null === (Qr = Qr[rr.config.token]) || void 0 === Qr ? void 0 : Qr.config)
              }
            }, (() => function(rr) {
              var Sr;
              const Qr = {};
              if (Qr.distinctId = rr.get_distinct_id(), rr.sessionManager) {
                const {
                  sessionId: Sr,
                  windowId: Zr,
                  sessionStartTimestamp: Wr,
                  lastActivityTimestamp: ar
                } = rr.sessionManager.checkAndGetSessionAndWindowId(!0);
                Qr.sessionId = Sr, Qr.windowId = Zr, LQ(Wr) || (Qr.sessionStartTimestamp = Wr), LQ(ar) || (Qr.lastActivityTimestamp = ar)
              }
              if ((null == IQ || null === (Sr = IQ.location) || void 0 === Sr ? void 0 : Sr.href) && (Qr.currentUrl = rr.config.disable_capture_url_hashes ? pW(IQ.location.href) : IQ.location.href), rr.featureFlags) {
                const Sr = rr.featureFlags.getFlags();
                Sr && Sr.length > 0 && (Qr.activeFeatureFlags = Sr)
              }
              return Qr
            }(rr))), this._instance = rr, this.name = Kx, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const rr = Mj("[logs]"),
              Sr = null == IQ ? void 0 : IQ.__PosthogExtensions__;
            if (!Sr) return void rr.error("PostHog Extensions not found.");
            const Qr = Sr.loadExternalDependency;
            if (Qr) return rr => {
              Qr(this._instance, "logs", (Qr => {
                const Zr = Sr.logs;
                rr(Qr, (null == Zr ? void 0 : Zr.initializeLogs) ? {
                  initialize: rr => Zr.initializeLogs(rr),
                  replay(rr, Sr) {
                    var Qr;
                    return null === (Qr = Zr.replayConsoleBuffer) || void 0 === Qr ? void 0 : Qr.call(Zr, rr, Sr)
                  }
                } : void 0)
              }))
            };
            rr.error(AS)
          }
        }
      },
      wN = {
        metrics: class {
          constructor(rr) {
            this._instance = rr, this._logger = Mj("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var rr;
            if (this._disposed) return;
            const Sr = !!(null === (rr = this._instance.config.metrics) || void 0 === rr ? void 0 : rr.network);
            Sr && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (rr => {
              let Sr = !0;
              const Qr = () => Sr ? (rr => {
                  var Sr;
                  const Qr = null === (Sr = rr.config.metrics) || void 0 === Sr ? void 0 : Sr.network;
                  return !0 === Qr ? {} : Qr || void 0
                })(rr) : void 0,
                Zr = eN(rr, Qr),
                Wr = KN(rr, Qr);
              return () => {
                Sr = !1, Zr(), Wr()
              }
            })(this._instance) : !Sr && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var rr;
            const Sr = null === (rr = this._instance) || void 0 === rr || null === (rr = rr.config) || void 0 === rr ? void 0 : rr.metrics;
            var Qr;
            return this._core && this._resolvedFrom === Sr || (null === (Qr = this._core) || void 0 === Qr || Qr.reset(), this._resolvedFrom = Sr, this._core = new Rj(this._createHost(), function(rr) {
              var Sr, Qr, Zr, Wr, ar;
              const jr = null == rr ? void 0 : rr.resourceAttributes;
              return {
                serviceName: null !== (Sr = null == jr ? void 0 : jr["service.name"]) && void 0 !== Sr ? Sr : null == rr ? void 0 : rr.serviceName,
                serviceVersion: null !== (Qr = null == jr ? void 0 : jr["service.version"]) && void 0 !== Qr ? Qr : null == rr ? void 0 : rr.serviceVersion,
                environment: null !== (Zr = null == jr ? void 0 : jr["deployment.environment"]) && void 0 !== Zr ? Zr : null == rr ? void 0 : rr.environment,
                resourceAttributes: jr,
                beforeSend: null == rr ? void 0 : rr.beforeSend,
                flushIntervalMs: null !== (Wr = null == rr ? void 0 : rr.flushIntervalMs) && void 0 !== Wr ? Wr : 1e4,
                maxSeriesPerFlush: null !== (ar = null == rr ? void 0 : rr.maxSeriesPerFlush) && void 0 !== ar ? ar : 1e3
              }
            }(Sr), this._logger)), this._core
          }
          count(rr) {
            let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              Qr = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(rr, Sr, Qr)
          }
          gauge(rr, Sr, Qr) {
            this._getCore().gauge(rr, Sr, Qr)
          }
          histogram(rr, Sr, Qr) {
            this._getCore().histogram(rr, Sr, Qr)
          }
          flush(rr) {
            if (!this._core) return Promise.resolve();
            if (rr) {
              const Sr = this._core.drainWindow();
              return Sr && this._sendMetricsBatch(Sr, rr), Promise.resolve()
            }
            return this._core.flush().catch((rr => this._logger.error("PostHog metrics flush failed:", rr)))
          }
          reset() {
            var rr;
            null === (rr = this._core) || void 0 === rr || rr.reset()
          }
          dispose() {
            var rr, Sr;
            this._disposed = !0, null === (rr = this._stopNetworkMetrics) || void 0 === rr || rr.call(this), this._stopNetworkMetrics = void 0, null === (Sr = this._core) || void 0 === Sr || Sr.reset()
          }
          _createHost() {
            const rr = this._instance,
              Sr = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !rr.is_capturing()
              },
              _sendMetricsBatch: rr => Sr._sendMetricsBatch(rr),
              getLibraryId: () => ar.LIB_NAME,
              getLibraryVersion: () => ar.LIB_VERSION
            }
          }
          _sendMetricsBatch(rr, Sr) {
            return new Promise((Qr => {
              let Zr = !1;
              const Wr = rr => {
                  Zr || (Zr = !0, clearTimeout(ar), Qr(rr))
                },
                ar = setTimeout((() => Wr({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(YW(YW({
                method: "POST",
                url: this._metricsUrl(),
                data: rr,
                compression: "best-available",
                batchKey: "metrics"
              }, Sr && {
                transport: Sr
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(rr) {
                  const Sr = rr.statusCode;
                  if (Sr >= 200 && 300 > Sr) Wr({
                    kind: "ok"
                  });
                  else if (413 === Sr) Wr({
                    kind: "too-large"
                  });
                  else if (0 !== Sr && 408 !== Sr && 429 !== Sr && 500 > Sr) Wr({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${Sr}`)
                  });
                  else {
                    var Qr;
                    Wr({
                      kind: "retry-later",
                      error: null !== (Qr = rr.error) && void 0 !== Qr ? Qr : new Error(`metrics request failed with status ${Sr}`)
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
      cN = {
        webMCP: class {
          constructor(rr) {
            this._instance = rr, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const rr = null == uS ? void 0 : uS.modelContext;
            if (!rr || !eQ(rr.registerTool)) return;
            const Sr = yN.get(rr);
            if (Sr) return Sr.instances.add(this._instance), void(this._isPatched = !0);
            const Qr = {
                instances: new Set([this._instance])
              },
              Zr = rr.registerTool,
              Wr = this;
            Wm(rr, "registerTool", (rr => {
              const Sr = rr;
              return function(rr) {
                let Zr = rr;
                for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
                try {
                  Zr = Wr._wrapTool(rr, Qr)
                } catch (Qr) {
                  return Sr.call(this, rr, ...jr)
                }
                return Sr.call(this, Zr, ...jr)
              }
            })), rr.registerTool !== Zr && (yN.set(rr, Qr), this._isPatched = !0)
          }
          _wrapTool(rr, Sr) {
            if (!rr || !eQ(rr.execute)) return rr;
            const Qr = rr.execute,
              Zr = this,
              {
                tool: Wr,
                injected: ar
              } = function(rr, Sr) {
                const Qr = {
                    intent: !1,
                    model: !1
                  },
                  Zr = rr.inputSchema;
                if (! function(rr) {
                    return !!BQ(rr) || KQ(rr) && Object.keys(rr).every((rr => BN.has(rr) || rr.startsWith("x-"))) && !0 !== rr.additionalProperties && !KQ(rr.additionalProperties) && (!rr.type || "object" === rr.type) && (!rr.properties || KQ(rr.properties)) && (!rr.required || nQ(rr.required))
                  }(Zr)) return {
                  tool: LN(rr),
                  injected: Qr
                };
                const Wr = (null == Zr ? void 0 : Zr.properties) || {},
                  ar = rr => ON(Wr, rr) || nQ(null == Zr ? void 0 : Zr.required) && Zr.required.includes(rr);
                if (Qr.intent = Sr.intent && !ar("context"), Qr.model = Sr.model && !ar("llm_model"), !Qr.intent && !Qr.model) return {
                  tool: LN(rr),
                  injected: Qr
                };
                const jr = YW({}, Wr),
                  Ir = nQ(null == Zr ? void 0 : Zr.required) ? [...Zr.required] : [];
                return Qr.intent && (jr.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, Ir.includes("context") || Ir.push("context")), Qr.model && (jr.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, Ir.includes("llm_model") || Ir.push("llm_model")), {
                  tool: LN(rr, YW(YW({}, Zr), {}, {
                    type: (null == Zr ? void 0 : Zr.type) || "object",
                    properties: jr,
                    required: Ir
                  })),
                  injected: Qr
                }
              }(rr, function(rr) {
                const Sr = {
                  intent: !1,
                  model: !1
                };
                for (const Qr of rr.instances) {
                  const rr = vN(Qr.config.capture_webmcp);
                  Sr.intent || (Sr.intent = !0 === (null == rr ? void 0 : rr.intent)), Sr.model || (Sr.model = !0 === (null == rr ? void 0 : rr.model))
                }
                return Sr
              }(Sr));
            return Object.defineProperty(Wr, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var jr = arguments.length, Ir = new Array(jr), fr = 0; fr < jr; fr++) Ir[fr] = arguments[fr];
                const Er = new Date,
                  pr = function(rr, Sr) {
                    if (!KQ(rr)) return {};
                    try {
                      const Qr = Sr.intent ? lN(rr.context, 2048, !0) : void 0,
                        Zr = Sr.model ? lN(rr.llm_model, 256) : void 0;
                      return YW(YW({}, Qr && "{}" !== Qr ? {
                        intent: Qr
                      } : {}), Zr && "unknown" !== Zr.toLowerCase() ? {
                        model: Zr
                      } : {})
                    } catch (rr) {
                      return {}
                    }
                  }(Ir[0], ar),
                  xr = function(rr, Sr) {
                    const Qr = rr[0];
                    if (!KQ(Qr)) return rr;
                    try {
                      const Zr = Sr.intent && ON(Qr, "context"),
                        Wr = Sr.model && ON(Qr, "llm_model");
                      if (!Zr && !Wr) return rr;
                      const ar = YW({}, Qr);
                      return Zr && delete ar.context, Wr && delete ar.llm_model, [ar, ...rr.slice(1)]
                    } catch (Sr) {
                      return rr
                    }
                  }(Ir, ar);
                let mr;
                try {
                  mr = Qr.apply(this === Wr ? rr : this, xr)
                } catch (rr) {
                  throw Zr._captureToolCall(Sr, Wr, Er, !0, pr), rr
                }
                return (Nr = mr) && "function" == typeof Nr.then ? Promise.resolve(mr).then((rr => (Zr._captureToolCall(Sr, Wr, Er, XN(rr), pr), rr)), (rr => {
                  throw Zr._captureToolCall(Sr, Wr, Er, !0, pr), rr
                })) : (Zr._captureToolCall(Sr, Wr, Er, XN(mr), pr), mr);
                var Nr
              }
            }), Wr
          }
          _captureToolCall(rr, Sr, Qr, Zr, Wr) {
            const ar = Date.now() - Qr.getTime();
            for (const jr of rr.instances) {
              const Ir = vN(jr.config.capture_webmcp);
              if (Ir) try {
                jr.capture("$mcp_tool_call", YW(YW({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: Sr.name,
                  $mcp_resource_name: Sr.name,
                  $mcp_tool_description: Sr.description,
                  $mcp_server_name: null == rQ ? void 0 : rQ.hostname,
                  $mcp_duration_ms: ar,
                  $mcp_is_error: Zr
                }, Ir.intent && Wr.intent ? {
                  $mcp_intent: Wr.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), Ir.model && Wr.model ? {
                  $mcp_llm_model: Wr.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: Qr
                })
              } catch (rr) {
                continue
              }
            }
          }
        }
      };
    ox.__defaultExtensionClasses = YW({}, YW(YW(YW(YW(YW(YW(YW(YW(YW(YW(YW(YW(YW(YW({}, PN), HN), qN), RN), gN), CN), GN), MN), kN), AN), VN), iN), wN), cN));
    const FN = function() {
      ar.SDK_DIST_CHANNEL = "npm";
      const rr = vx[Ax] = new ox;
      return function() {
        function rr() {
          rr.done || (rr.done = !0, Gp = !1, kj(vx, (function(rr) {
            rr._dom_loaded()
          })))
        }(null == uS ? void 0 : uS.addEventListener) ? "complete" === uS.readyState ? rr() : bj(uS, "DOMContentLoaded", rr, {
          capture: !1
        }): DS && Cj.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), rr
    }()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);