export const id = 283;
export const ids = [283];
export const modules = {
  41109: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => sw,
      g: () => Gl
    });
    const mW = "0.9.4",
      EW = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: mW
      };
    var NW = EW;
    const PW = "$early_access_features",
      LW = "$active_feature_flags",
      cW = "$feature_flag_details",
      wW = "$feature_flag_errors",
      tW = "$feature_flag_evaluated_at",
      ZW = "$feature_flag_request_id",
      xW = "$minimal_flag_called_events",
      lW = "$enabled_feature_flags",
      AW = "$stored_group_properties",
      bW = "$stored_person_properties",
      jW = "$flag_call_reported",
      UW = "$flag_call_reported_session_id",
      kW = "$feature_flag_payloads",
      sW = "$override_feature_flags",
      MW = "$override_feature_flag_payloads",
      KW = "visibilitychange",
      SW = "$people_distinct_id",
      YW = "distinct_id",
      yW = "$device_id",
      TW = "$device_model",
      JW = "__alias",
      hW = "__cmpns",
      HW = "$fbc",
      nW = "$fbc_persistence",
      uW = "$fbp",
      oW = "$fbp_persistence",
      dW = "__timers",
      eW = "$autocapture_disabled_server_side",
      vW = "$heatmaps_enabled_server_side",
      gW = "$exception_capture_enabled_server_side",
      DW = "$error_tracking_suppression_rules",
      VW = "$error_tracking_capture_extension_exceptions",
      pW = "$web_vitals_enabled_server_side",
      fW = "$dead_clicks_enabled_server_side",
      CW = "$product_tours_enabled_server_side",
      XW = "$logs_capture_enabled_server_side",
      BW = "$web_vitals_allowed_metrics",
      qW = "$session_recording_remote_config",
      RW = "$session_recording_enabled_server_side",
      GW = "$replay_sample_rate",
      IW = "$replay_override_sampling",
      aW = "$replay_override_linked_flag",
      rW = "$replay_override_url_trigger",
      zW = "$replay_override_event_trigger",
      FW = "$sesid",
      QW = "$session_is_sampled",
      Wi = "$session_past_minimum_duration",
      ii = "$session_recording_url_trigger_activated_session",
      Oi = "$session_recording_event_trigger_activated_session",
      mi = "$debug_first_full_snapshot_timestamp",
      Ei = "$sess_rec_flush_size",
      Ni = "$groups",
      Pi = "$surveys",
      Li = "$surveys_loaded_at",
      ci = "$surveys_activated",
      wi = "$surveys_activated_session",
      ti = "$surveys_activated_timestamps",
      Zi = "ph_product_tours",
      xi = "$product_tours_activated",
      li = "$product_tours_activated_session",
      Ai = "$conversations_widget_session_id",
      bi = "$conversations_ticket_id",
      ji = "$conversations_widget_state",
      Ui = "$conversations_user_traits",
      ki = "$user_state",
      si = "$client_session_props",
      Mi = "$capture_rate_limit",
      Ki = "$initial_campaign_params",
      Si = "$initial_referrer_info",
      Yi = "$initial_person_info",
      yi = "$epp",
      Ti = "$posthog_cookieless",
      Ji = "$cookieless_mode",
      Hi = "$sdk_debug_extensions_init_method",
      ni = "$sdk_debug_extensions_init_time_ms",
      ui = "$sdk_debug_recording_script_not_loaded",
      oi = "$sdk_debug_replay_stale_config",
      di = "$sdk_debug_replay_event_trigger_status",
      ei = "$sdk_debug_replay_linked_flag_trigger_status",
      vi = "$sdk_debug_replay_matched_recording_trigger_groups",
      gi = "$sdk_debug_replay_pending_trigger_conditions",
      Di = "$sdk_debug_replay_remote_trigger_matching_config",
      Vi = "$sdk_debug_replay_trigger_groups_count",
      fi = "$sdk_debug_replay_url_trigger_status",
      Ci = "$session_recording_start_reason",
      Xi = "PostHog loadExternalDependency extension not found.",
      Bi = "anonymous",
      qi = "identified",
      Ri = "identified_only",
      Gi = "beforeunload",
      Ii = "$pageview",
      ai = "$pageleave",
      ri = "$identify",
      zi = "$groupidentify",
      Fi = "u" > typeof window ? window : void 0,
      Qi = "u" > typeof globalThis ? globalThis : Fi,
      WO = null == Qi ? void 0 : Qi.navigator,
      iO = null == Qi ? void 0 : Qi.document,
      OO = null == Qi ? void 0 : Qi.location,
      mO = null == Qi ? void 0 : Qi.fetch,
      EO = (null == Qi ? void 0 : Qi.XMLHttpRequest) && "withCredentials" in new Qi.XMLHttpRequest ? Qi.XMLHttpRequest : void 0,
      NO = null == Qi ? void 0 : Qi.AbortController,
      PO = null == Qi ? void 0 : Qi.CompressionStream,
      LO = null == WO ? void 0 : WO.userAgent,
      cO = "undefined" != typeof globalThis ? globalThis : Fi;
    cO && "undefined" == typeof self && (cO.self = cO), cO && "undefined" == typeof File && (cO.File = function() {});
    const wO = null != Fi ? Fi : {};
    var tO = function(WW) {
        return WW.AnonymousId = "anonymous_id", WW.DistinctId = "distinct_id", WW.Props = "props", WW.EnablePersonProcessing = "enable_person_processing", WW.PersonMode = "person_mode", WW.FeatureFlagDetails = "feature_flag_details", WW.FeatureFlags = "feature_flags", WW.FeatureFlagPayloads = "feature_flag_payloads", WW.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", WW.BootstrapFeatureFlags = "bootstrap_feature_flags", WW.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", WW.OverrideFeatureFlags = "override_feature_flags", WW.Queue = "queue", WW.AiQueue = "ai_queue", WW.AiCaptureQueue = "ai_capture_queue", WW.LogsQueue = "logs_queue", WW.OptedOut = "opted_out", WW.SessionId = "session_id", WW.SessionStartTimestamp = "session_start_timestamp", WW.SessionLastTimestamp = "session_timestamp", WW.PersonProperties = "person_properties", WW.GroupProperties = "group_properties", WW.InstalledAppBuild = "installed_app_build", WW.InstalledAppVersion = "installed_app_version", WW.SessionReplay = "session_replay", WW.PushRegistered = "push_registered", WW.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", WW.SurveyLastSeenDate = "survey_last_seen_date", WW.SurveysInProgress = "surveys_in_progress", WW.SurveysSeen = "surveys_seen", WW.Surveys = "surveys", WW.RemoteConfig = "remote_config", WW.FlagsEndpointWasHit = "flags_endpoint_was_hit", WW.DeviceId = "device_id", WW
      }({}),
      ZO = function(WW) {
        return WW.GZipJS = "gzip-js", WW.Base64 = "base64", WW
      }({});
    const xO = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      lO = ["token"];

    function AO(WW, iW) {
      return -1 !== WW.indexOf(iW)
    }
    const bO = function(WW) {
        return WW.trim()
      },
      jO = function(WW) {
        return WW.replace(/^\$/, "")
      };

    function UO(WW) {
      var iW;
      const OW = [];
      return null !== (iW = JSON.stringify(WW, (function(WW, iW) {
        if ("bigint" == typeof iW) return iW.toString();
        if ("function" != typeof iW && "symbol" != typeof iW) {
          if (iW instanceof Error) return {
            name: iW.name,
            message: iW.message,
            stack: iW.stack
          };
          if (iW && "object" == typeof iW) {
            for (; OW.length > 0 && OW[OW.length - 1] !== this;) OW.pop();
            if (OW.includes(iW)) return "[Circular]";
            OW.push(iW)
          }
          return iW
        }
      }))) && void 0 !== iW ? iW : "null"
    }
    const kO = Object.prototype,
      sO = kO.hasOwnProperty,
      MO = kO.toString,
      KO = Array.isArray || function(WW) {
        return "[object Array]" === MO.call(WW)
      },
      SO = WW => "function" == typeof WW,
      YO = WW => WW === Object(WW) && !KO(WW),
      yO = WW => {
        if (YO(WW)) {
          for (const iW in WW)
            if (sO.call(WW, iW)) return !1;
          return !0
        }
        return !1
      },
      TO = WW => void 0 === WW,
      JO = WW => "[object String]" == MO.call(WW),
      hO = WW => JO(WW) && 0 === WW.trim().length,
      HO = WW => null === WW,
      nO = WW => TO(WW) || HO(WW),
      uO = WW => "[object Number]" == MO.call(WW) && WW == WW,
      oO = WW => uO(WW) && WW > 0,
      dO = WW => "[object Boolean]" === MO.call(WW),
      eO = WW => AO(xO, WW),
      vO = WW => AO(lO, WW);

    function gO(WW) {
      return null === WW || "object" != typeof WW
    }

    function DO(WW, iW) {
      return {}.toString.call(WW) === `[object ${iW}]`
    }

    function VO(WW) {
      switch ({}.toString.call(WW)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return fO(WW, Error)
      }
    }

    function pO(WW) {
      return "u" > typeof Event && fO(WW, Event)
    }

    function fO(WW, iW) {
      try {
        return WW instanceof iW
      } catch (WW) {
        return !1
      }
    }
    const CO = [!0, "true", 1, "1", "yes"],
      XO = WW => AO(CO, WW),
      BO = [!1, "false", 0, "0", "no"];

    function qO(WW, iW, OW, mW, EW, NW, PW) {
      try {
        var LW = WW[NW](PW),
          cW = LW.value
      } catch (WW) {
        return void OW(WW)
      }
      LW.done ? iW(cW) : Promise.resolve(cW).then(mW, EW)
    }

    function RO(WW) {
      return function() {
        var iW = this,
          OW = arguments;
        return new Promise((function(mW, EW) {
          var NW = WW.apply(iW, OW);

          function PW(WW) {
            qO(NW, mW, EW, PW, LW, "next", WW)
          }

          function LW(WW) {
            qO(NW, mW, EW, PW, LW, "throw", WW)
          }
          PW(void 0)
        }))
      }
    }
    const GO = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      IO = new Map,
      aO = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!WW) return !1;
        const OW = function(WW, iW) {
            let OW = "";
            for (let mW = 0; iW.length > mW; mW++) {
              const WW = iW[mW];
              OW += WW.length + ":" + WW
            }
            return WW.length + ":" + WW + "|" + iW.length + ":" + OW
          }(WW, iW),
          mW = IO.get(OW);
        if (void 0 !== mW) return mW;
        const EW = WW.toLowerCase(),
          NW = GO.concat(iW).some((WW => -1 !== EW.indexOf(WW.toLowerCase())));
        return 256 > IO.size || IO.clear(), IO.set(OW, NW), NW
      };

    function rO(WW, iW, OW, mW, EW) {
      return iW > OW && (mW.warn("min cannot be greater than max."), iW = OW), uO(WW) ? WW > OW ? (mW.warn(" cannot be  greater than max: " + OW + ". Using max value instead."), OW) : iW > WW ? (mW.warn(" cannot be less than min: " + iW + ". Using min value instead."), iW) : WW : (mW.warn(" must be a number. using max or fallback. max: " + OW + ", fallback: " + EW), rO(null != EW ? EW : OW, iW, OW, mW))
    }
    var zO = class {
      constructor(WW) {
        this._buckets = {}, this._onBucketRateLimited = WW._onBucketRateLimited, this._bucketSize = rO(WW.bucketSize, 0, 100, WW._logger), this._refillRate = rO(WW.refillRate, 0, this._bucketSize, WW._logger), this._refillInterval = rO(WW.refillInterval, 0, 864e5, WW._logger)
      }
      _applyRefill(WW, iW) {
        const OW = Math.floor((iW - WW.lastAccess) / this._refillInterval);
        OW > 0 && (WW.tokens = Math.min(WW.tokens + OW * this._refillRate, this._bucketSize), WW.lastAccess = WW.lastAccess + OW * this._refillInterval)
      }
      consumeRateLimit(WW) {
        var iW;
        const OW = Date.now(),
          mW = String(WW);
        let EW = this._buckets[mW];
        return EW ? this._applyRefill(EW, OW) : (EW = {
          tokens: this._bucketSize,
          lastAccess: OW
        }, this._buckets[mW] = EW), 0 === EW.tokens || (EW.tokens--, 0 === EW.tokens && (null === (iW = this._onBucketRateLimited) || void 0 === iW || iW.call(this, WW)), 0 === EW.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const FO = "Mobile",
      QO = "Android",
      Wm = "Tablet",
      im = "Android Tablet",
      Om = "iPad",
      mm = "Apple Watch",
      Em = "Safari",
      Nm = "BlackBerry",
      Pm = "Samsung Internet",
      Lm = "Chrome",
      cm = "Chrome iOS",
      wm = "Internet Explorer",
      tm = "Internet Explorer Mobile",
      Zm = "Opera",
      xm = "Microsoft Edge",
      lm = "Firefox",
      Am = "Firefox iOS",
      bm = "Nintendo",
      jm = "PlayStation",
      Um = "Xbox",
      km = "Android Mobile",
      sm = "Mobile Safari",
      Mm = "Windows",
      Km = "Windows Phone",
      Sm = "Nokia",
      Ym = "Ouya",
      ym = "Generic " + FO.toLowerCase(),
      Tm = "Generic " + Wm.toLowerCase(),
      Jm = "Konqueror",
      hm = "Oculus Browser",
      Hm = "Vivaldi",
      nm = "Yandex",
      um = "Whale",
      om = "DuckDuckGo",
      dm = "Pale Moon",
      em = "Waterfox",
      gm = "Brave",
      Dm = "Claude",
      Vm = "Codex",
      pm = "ChatGPT",
      fm = "Google Search App",
      Cm = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      Xm = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      Bm = new RegExp(Um, "i"),
      qm = new RegExp("PlayStation \\w+", "i"),
      Rm = new RegExp("Nintendo \\w+", "i"),
      Gm = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      Im = {
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
      am = function(WW, iW, OW, mW) {
        iW = iW || "";
        const EW = function(WW) {
          return (null == WW ? void 0 : WW.brave) ? gm : null
        }(OW);
        return EW || ((null == mW ? void 0 : mW.detectGoogleSearchApp) && AO(WW, "GSA/") ? fm : AO(WW, " OPR/") && AO(WW, "Mini") ? "Opera Mini" : AO(WW, " OPR/") ? Zm : Gm.test(WW) ? Nm : AO(WW, "IEMobile") || AO(WW, "WPDesktop") ? tm : AO(WW, "OculusBrowser") ? hm : AO(WW, "SamsungBrowser") ? Pm : AO(WW, "Edge") || AO(WW, "Edg/") ? xm : AO(WW, "Vivaldi/") ? Hm : AO(WW, "YaBrowser/") ? nm : AO(WW, "Whale/") ? um : AO(WW, "DuckDuckGo/") || AO(WW, "Ddg/") ? om : AO(WW, "Claude/") ? Dm : AO(WW, "Codex/") ? Vm : AO(WW, "ChatGPT/") ? pm : AO(WW, "FBIOS") ? "Facebook Mobile" : AO(WW, "UCWEB") || AO(WW, "UCBrowser") ? "UC Browser" : AO(WW, "CriOS") ? cm : AO(WW, "CrMo") || AO(WW, Lm) ? Lm : AO(WW, QO) && AO(WW, Em) ? km : AO(WW, "FxiOS") ? Am : AO(WW.toLowerCase(), Jm.toLowerCase()) ? Jm : AO(WW, "Brave/") ? gm : ((WW, iW) => iW && AO(iW, "Apple") || function(WW) {
          return AO(WW, Em) && !AO(WW, Lm) && !AO(WW, QO)
        }(WW))(WW, iW) ? AO(WW, FO) ? sm : Em : AO(WW, "PaleMoon/") ? dm : AO(WW, "Waterfox/") ? em : AO(WW, lm) ? lm : AO(WW, "MSIE") || AO(WW, "Trident/") ? wm : AO(WW, "Gecko") ? lm : "")
      },
      rm = {
        [tm]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [xm]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [Lm]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [cm]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [Em]: [Cm],
        [sm]: [Cm],
        [Zm]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [lm]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [Am]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [Jm]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [Nm]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), Cm],
        [km]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [Pm]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [hm]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [Hm]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [nm]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [um]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [gm]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [Dm]: [Xm],
        [Vm]: [Xm],
        [pm]: [Xm],
        [om]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [dm]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [em]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [fm]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [wm]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      zm = function(WW, iW, OW, mW) {
        const EW = am(WW, iW, OW, mW),
          NW = rm[EW];
        if (TO(NW)) return null;
        for (let PW = 0; NW.length > PW; PW++) {
          const iW = WW.match(NW[PW]);
          if (iW) return parseFloat(iW[iW.length - 2])
        }
        return null
      },
      Fm = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), WW => [Um, WW && WW[1] || ""]],
        [new RegExp(bm, "i"), [bm, ""]],
        [new RegExp(jm, "i"), [jm, ""]],
        [Gm, [Nm, ""]],
        [new RegExp(Mm, "i"), (WW, iW) => {
          if (/Phone/.test(iW) || /WPDesktop/.test(iW)) return [Km, ""];
          if (new RegExp(FO).test(iW) && !/IEMobile\b/.test(iW)) return ["Windows Mobile", ""];
          const OW = /Windows NT ([0-9.]+)/i.exec(iW);
          if (OW && OW[1]) {
            let WW = Im[OW[1]] || "";
            return /arm/i.test(iW) && (WW = "RT"), [Mm, WW]
          }
          return [Mm, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, WW => WW && WW[3] ? ["iOS", [WW[3], WW[4], WW[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, WW => {
          let iW = "";
          return WW && WW.length >= 3 && (iW = TO(WW[2]) ? WW[3] : WW[2]), ["watchOS", iW]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), WW => WW && WW[2] ? [QO, [WW[2], WW[3], WW[4] || "0"].join(".")] : [QO, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, WW => {
          const iW = ["Mac OS X", ""];
          return WW && WW[1] && (iW[1] = [WW[1], WW[2], WW[3] || "0"].join(".")), iW
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      Qm = function(WW) {
        for (let iW = 0; Fm.length > iW; iW++) {
          const [OW, mW] = Fm[iW], EW = OW.exec(WW), NW = EW && (SO(mW) ? mW(EW, WW) : mW);
          if (NW) return NW
        }
        return ["", ""]
      },
      WE = function(WW) {
        return Rm.test(WW) ? bm : qm.test(WW) ? jm : Bm.test(WW) ? Um : new RegExp(Ym, "i").test(WW) ? Ym : new RegExp("(Windows Phone|WPDesktop)", "i").test(WW) ? Km : /iPad/.test(WW) ? Om : /iPod/.test(WW) ? "iPod Touch" : /iPhone/.test(WW) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(WW) ? mm : Gm.test(WW) ? Nm : /(kobo)\s(ereader|touch)/i.test(WW) ? "Kobo" : new RegExp(Sm, "i").test(WW) ? Sm : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(WW) || /(kf[a-z]+)( bui|\)).+silk\//i.test(WW) ? "Kindle Fire" : /(Android|ZTE)/i.test(WW) ? new RegExp(FO).test(WW) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(WW) || /pixel[\daxl ]{1,6}/i.test(WW) && !/pixel c/i.test(WW) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(WW) || /lmy47v/i.test(WW) && !/QTAQZ3/i.test(WW) ? QO : im : new RegExp("(pda|Mobile)", "i").test(WW) ? ym : new RegExp(Wm, "i").test(WW) && !new RegExp("Tablet pc", "i").test(WW) ? Tm : ""
      },
      iE = function(WW, iW) {
        var OW;
        const mW = WE(WW);
        return mW === Om || mW === im || "Kobo" === mW || "Kindle Fire" === mW || mW === Tm ? Wm : mW === bm || mW === Um || mW === jm || mW === Ym ? "Console" : mW === mm ? "Wearable" : mW ? FO : "Android" === (null == iW ? void 0 : iW.userAgentDataPlatform) && (null !== (OW = null == iW ? void 0 : iW.maxTouchPoints) && void 0 !== OW ? OW : 0) > 0 ? 600 > Math.min(null !== (EW = null == iW ? void 0 : iW.screenWidth) && void 0 !== EW ? EW : 0, null !== (NW = null == iW ? void 0 : iW.screenHeight) && void 0 !== NW ? NW : 0) / (null !== (PW = null == iW ? void 0 : iW.devicePixelRatio) && void 0 !== PW ? PW : 1) ? FO : Wm : "Desktop";
        var EW, NW, PW
      },
      OE = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      mE = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", OE],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", OE],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", OE],
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
      EE = "[Truncated]",
      NE = "[Unserializable]";

    function PE(WW) {
      let iW = "";
      for (let OW = 0; WW.length > OW; OW++) {
        const mW = WW.charCodeAt(OW);
        if (55296 > mW || mW > 56319) iW += 56320 > mW || mW > 57343 ? WW[OW] : "\ufffd";
        else {
          const mW = WW.charCodeAt(OW + 1);
          56320 > mW || mW > 57343 ? iW += "\ufffd" : (iW += WW[OW] + WW[OW + 1], OW++)
        }
      }
      return iW
    }

    function LE(WW, iW) {
      if (!iW) return WW;
      let OW = [];
      try {
        OW = Object.keys(iW)
      } catch (WW) {
        OW = []
      }
      for (const mW of OW) {
        let OW;
        try {
          OW = iW[mW]
        } catch (WW) {
          OW = NE
        }
        Object.defineProperty(WW, mW, {
          value: OW,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return WW
    }
    Date, Date;
    const cE = 3e5;
    var wE = class {
      record(WW) {
        if ("too-large" === WW.kind) return;
        if ("retry-later" !== WW.kind) return void this.reset();
        if (!WW.retryAfterMs) return;
        const iW = this.isOpen(),
          OW = Date.now(),
          mW = Math.min(WW.retryAfterMs, cE);
        if (!iW) return this._installedAt = OW, void(this._until = OW + mW);
        this._until = Math.max(this._until, Math.min(OW + mW, this._installedAt + cE))
      }
      remainingMs() {
        const WW = Date.now();
        if (this._installedAt - 5e3 > WW) return this.reset(), 0;
        const iW = Math.min(cE, Math.max(0, this._until - WW));
        return 0 === iW && this.reset(), iW
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
    const tE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function ZE(WW, iW) {
      return "string" == typeof(OW = WW) && tE.test(OW) ? WW : iW();
      var OW
    }

    function xE(WW, iW) {
      const OW = new Error(iW);
      try {
        Object.defineProperty(OW, "name", {
          value: WW,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (WW) {}
      return OW
    }

    function lE(WW) {
      return WW ? WW.split("#")[0] : WW
    }

    function AE(WW) {
      try {
        return WW()
      } catch (WW) {
        return
      }
    }

    function bE(WW, iW) {
      const OW = setTimeout(WW, iW);
      return null != OW && OW.unref && (null == OW || OW.unref()), OW
    }

    function jE(WW, iW, OW) {
      return UE.apply(this, arguments)
    }

    function UE() {
      return (UE = RO((function*(WW, iW, OW) {
        let mW;
        try {
          return yield Promise.race([WW, new Promise(((WW, EW) => {
            mW = bE((() => {
              try {
                null == OW || OW(), WW()
              } catch (WW) {
                EW(WW)
              }
            }), iW)
          }))])
        } finally {
          clearTimeout(mW)
        }
      }))).apply(this, arguments)
    }

    function kE(WW) {
      return kE = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
        return typeof WW
      } : function(WW) {
        return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
      }, kE(WW)
    }

    function sE(WW, iW, OW) {
      return (iW = function(WW) {
        var iW = function(WW) {
          if ("object" != kE(WW) || !WW) return WW;
          var iW = WW[Symbol.toPrimitive];
          if (void 0 !== iW) {
            var OW = iW.call(WW, "string");
            if ("object" != kE(OW)) return OW;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(WW)
        }(WW);
        return "symbol" == kE(iW) ? iW : iW + ""
      }(iW)) in WW ? Object.defineProperty(WW, iW, {
        value: OW,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : WW[iW] = OW, WW
    }

    function ME(WW, iW) {
      var OW = Object.keys(WW);
      if (Object.getOwnPropertySymbols) {
        var mW = Object.getOwnPropertySymbols(WW);
        iW && (mW = mW.filter((function(iW) {
          return Object.getOwnPropertyDescriptor(WW, iW).enumerable
        }))), OW.push.apply(OW, mW)
      }
      return OW
    }

    function KE(WW) {
      for (var iW = 1; arguments.length > iW; iW++) {
        var OW = null != arguments[iW] ? arguments[iW] : {};
        iW % 2 ? ME(Object(OW), !0).forEach((function(iW) {
          sE(WW, iW, OW[iW])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(OW)) : ME(Object(OW)).forEach((function(iW) {
          Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(OW, iW))
        }))
      }
      return WW
    }
    let SE, YE, yE, TE;

    function JE(WW) {
      var iW;
      const OW = globalThis._posthogChunkIds,
        mW = globalThis._debugIds;
      if (!OW && !mW) return;
      const EW = OW ? Object.keys(OW) : [],
        NW = mW ? Object.keys(mW) : [];
      if (TE && hE(OW, EW, YE) && hE(mW, NW, yE)) return TE;
      YE = OW ? KE({}, OW) : void 0, yE = mW ? KE({}, mW) : void 0, TE = {}, null !== (iW = SE) && void 0 !== iW || (SE = {});
      const PW = (iW, OW) => {
        for (const EW of iW) {
          const iW = OW[EW];
          if (!iW) continue;
          const NW = null == SE ? void 0 : SE[EW];
          if (NW) {
            TE[NW] = iW;
            continue
          }
          const PW = WW(EW);
          for (let WW = PW.length - 1; WW >= 0; WW--) {
            var mW;
            const OW = null === (mW = PW[WW]) || void 0 === mW ? void 0 : mW.filename;
            if (OW) {
              TE[OW] = iW, SE[EW] = OW;
              break
            }
          }
        }
      };
      return mW && PW(NW, mW), OW && PW(EW, OW), TE
    }

    function hE(WW, iW, OW) {
      return WW && OW ? iW.length === Object.keys(OW).length && iW.every((iW => WW[iW] === OW[iW])) : WW === OW
    }
    var HE = class {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = WW, this.stackParser = iW, this.modifiers = OW
      }
      buildFromUnknown(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = iW && iW.mechanism || {
            handled: !0,
            type: "generic"
          },
          mW = this.buildCoercingContext(OW, iW, 0).apply(WW),
          EW = this.buildParsingContext(iW),
          NW = this.parseStacktrace(mW, EW);
        return {
          $exception_list: this.convertToExceptionList(NW, OW),
          $exception_level: "error"
        }
      }
      modifyFrames(WW) {
        var iW = this;
        return RO((function*() {
          for (const OW of WW) OW.stacktrace && OW.stacktrace.frames && KO(OW.stacktrace.frames) && (OW.stacktrace.frames = yield iW.applyModifiers(OW.stacktrace.frames));
          return WW
        }))()
      }
      coerceFallback(WW) {
        var iW;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (iW = WW.syntheticException) || void 0 === iW ? void 0 : iW.stack,
          synthetic: !0
        }
      }
      parseStacktrace(WW, iW) {
        var OW;
        let mW, EW;
        if (null != WW.cause && (mW = this.parseStacktrace(WW.cause, iW)), "" != WW.stack && null != WW.stack) try {
          EW = this.applyChunkIds(this.stackParser(WW.stack, WW.synthetic ? iW.skipFirstLines : 0), iW.chunkIdMap)
        } catch (WW) {}
        return KE(KE({}, WW), {}, {
          cause: mW,
          stack: EW,
          errors: null === (OW = WW.errors) || void 0 === OW ? void 0 : OW.map((WW => this.parseStacktrace(WW, iW)))
        })
      }
      applyChunkIds(WW, iW) {
        return WW.map((WW => (WW.filename && iW && (WW.chunk_id = iW[WW.filename]), WW)))
      }
      applyCoercers(WW, iW) {
        for (const OW of this.coercers)
          if (OW.match(WW)) return OW.coerce(WW, iW);
        return this.coerceFallback(iW)
      }
      applyModifiers(WW) {
        var iW = this;
        return RO((function*() {
          let OW = WW;
          for (const WW of iW.modifiers) OW = yield WW(OW);
          return OW
        }))()
      }
      convertToExceptionList(WW, iW) {
        const OW = [],
          mW = (WW, EW, NW) => {
            var PW;
            const LW = OW.length,
              cW = void 0 === EW ? KE(KE({
                type: "string" == typeof iW.type && iW.type.length > 0 ? iW.type : "generic"
              }, "boolean" == typeof iW.handled ? {
                handled: iW.handled
              } : void 0 === iW.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof iW.synthetic ? iW.synthetic : WW.synthetic,
                exception_id: LW
              }) : {
                type: "chained",
                source: NW,
                synthetic: WW.synthetic,
                exception_id: LW,
                parent_id: EW
              },
              wW = {
                type: WW.type,
                value: WW.value,
                mechanism: cW
              };
            WW.stack && (wW.stacktrace = {
              type: "raw",
              frames: WW.stack
            }), OW.push(wW), WW.cause && mW(WW.cause, LW, "cause");
            for (const iW of null !== (PW = WW.errors) && void 0 !== PW ? PW : []) mW(iW, LW, "member")
          };
        return mW(WW), OW
      }
      buildParsingContext(WW) {
        var iW;
        return {
          chunkIdMap: JE(this.stackParser),
          skipFirstLines: null !== (iW = WW.skipFirstLines) && void 0 !== iW ? iW : 1
        }
      }
      getAggregateErrors(WW) {
        try {
          if (VO(WW)) {
            let OW = Object.getPrototypeOf(WW);
            for (let mW = 0; OW && 100 > mW; mW++) {
              var iW;
              const mW = null === (iW = Object.getOwnPropertyDescriptor(OW, "constructor")) || void 0 === iW ? void 0 : iW.value;
              if ("function" == typeof mW && "AggregateError" === mW.name) {
                const iW = WW.errors;
                return KO(iW) ? iW : void 0
              }
              OW = Object.getPrototypeOf(OW)
            }
          }
        } catch (WW) {}
      }
      buildCoercingContext(WW, iW) {
        var OW = this;
        let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          EW = 0,
          NW = 0,
          PW = !1;
        const LW = new Set,
          cW = [],
          wW = {},
          tW = function(WW, iW) {
            let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const tW = ZW(iW, mW),
              xW = tW.apply;
            if (tW.apply = iW => {
                cW.push(WW);
                try {
                  return xW(iW)
                } finally {
                  cW.pop()
                }
              }, mW > 4 || mW > 0 && -1 !== cW.indexOf(WW)) return OW.coerceFallback(tW);
            const lW = "object" == typeof WW && null !== WW || "function" == typeof WW;
            if (0 === mW && EW >= 50 || lW && LW.has(WW)) return;
            lW && LW.add(WW), 0 === mW && EW++;
            const AW = OW.getAggregateErrors(WW);
            let bW, jW;
            PW || (PW = !!AW);
            try {
              if (bW = OW.applyCoercers(WW, tW), !bW) throw wW
            } catch (WW) {
              if (WW === wW) return void(0 === mW && EW--);
              if (!PW) throw WW;
              bW = OW.coerceFallback(tW)
            }
            if (!AW || EW >= 50) return bW;
            try {
              jW = AW.length
            } catch (WW) {
              return bW
            }
            if (!Number.isInteger(jW) || 0 > jW || jW > 4294967295) return bW;
            const UW = [];
            for (let PW = 0; 50 > EW && 1e3 > NW && jW > PW; PW++) {
              let mW;
              NW++;
              try {
                mW = tW.next(AW[PW])
              } catch (WW) {
                EW++, mW = OW.coerceFallback(ZW(iW + 1))
              }
              mW && UW.push(mW)
            }
            return KE(KE({}, bW), {}, {
              errors: UW
            })
          },
          ZW = function(OW) {
            let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return KE(KE({}, iW), {}, {
              syntheticException: 0 == OW ? iW.syntheticException : void 0,
              mechanism: 0 == OW ? WW : {},
              apply(WW) {
                const iW = tW(WW, OW, mW + 1);
                if (!iW) throw wW;
                return iW
              },
              next: WW => tW(WW, OW + 1)
            })
          },
          xW = ZW(mW);
        return KE(KE({}, xW), {}, {
          apply: WW => {
            var iW;
            return null !== (iW = tW(WW, mW)) && void 0 !== iW ? iW : this.coerceFallback(xW)
          }
        })
      }
    };
    const nE = /^([a-z][a-z0-9.+-]+):/i,
      uE = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function oE(WW) {
      if (!WW || "<anonymous>" === WW) return !1;
      const iW = nE.exec(WW);
      return !iW || uE.includes(iW[1].toLowerCase())
    }

    function dE(WW, iW, OW, mW, EW) {
      const NW = {
        platform: WW,
        filename: iW,
        function: "<anonymous>" === OW ? "?" : OW,
        in_app: oE(iW)
      };
      return TO(mW) || (NW.lineno = mW), TO(EW) || (NW.colno = EW), NW
    }
    const eE = (WW, iW) => {
        const OW = -1 !== WW.indexOf("safari-extension"),
          mW = -1 !== WW.indexOf("safari-web-extension");
        return OW || mW ? [-1 !== WW.indexOf("@") ? WW.split("@")[0] : "?", OW ? `safari-extension:${iW}` : `safari-web-extension:${iW}`] : [WW, iW]
      },
      vE = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      gE = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      DE = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      VE = (WW, iW) => {
        const OW = vE.exec(WW);
        if (OW) {
          const [, WW, mW, EW] = OW;
          return dE(iW, WW, "?", +mW, +EW)
        }
        const mW = gE.exec(WW);
        if (mW) {
          if (mW[2] && 0 === mW[2].indexOf("eval")) {
            const WW = DE.exec(mW[2]);
            WW && (mW[2] = WW[1], mW[3] = WW[2], mW[4] = WW[3])
          }
          const [WW, OW] = eE(mW[1] || "?", mW[2]);
          return dE(iW, OW, WW, mW[3] ? +mW[3] : void 0, mW[4] ? +mW[4] : void 0)
        }
      },
      pE = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      fE = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      CE = (WW, iW) => {
        const OW = pE.exec(WW);
        if (OW) {
          if (OW[3] && OW[3].indexOf(" > eval") > -1) {
            const WW = fE.exec(OW[3]);
            WW && (OW[1] = OW[1] || "eval", OW[3] = WW[1], OW[4] = WW[2], OW[5] = "")
          }
          let WW = OW[3],
            mW = OW[1] || "?";
          return [mW, WW] = eE(mW, WW), dE(iW, WW, mW, OW[4] ? +OW[4] : void 0, OW[5] ? +OW[5] : void 0)
        }
      },
      XE = /\(error: (.*)\)/;

    function BE(WW, iW) {
      return WW.filename === iW.filename && WW.function === iW.function && WW.module === iW.module && WW.lineno === iW.lineno && WW.colno === iW.colno
    }

    function qE(WW) {
      for (let iW = 1; 10 >= iW; iW++) {
        const OW = WW.length - 2 * iW;
        if (0 > OW) break;
        let mW = !0;
        for (let EW = 0; iW > EW; EW++)
          if (!BE(WW[OW + EW], WW[OW + iW + EW])) {
            mW = !1;
            break
          } if (mW) {
          for (let mW = 0; iW > mW; mW++) WW[OW + mW] = WW[OW + iW + mW];
          return WW.length = OW + iW, {
            start: OW,
            length: iW
          }
        }
      }
    }

    function RE(WW, iW) {
      const OW = iW.start + iW.length,
        mW = IE(WW, iW);
      mW && WW.splice(OW + mW === WW.length ? OW : iW.start, mW)
    }

    function GE(WW, iW) {
      let OW = iW.start;
      for (; OW > 0 && BE(WW[OW - 1], WW[OW - 1 + iW.length]);) OW--;
      return iW.start - OW
    }

    function IE(WW, iW) {
      const OW = iW.start + iW.length;
      let mW = OW;
      for (; WW.length > mW && BE(WW[mW], WW[mW - iW.length]);) mW++;
      return mW - OW
    }

    function aE(WW, iW) {
      const OW = iW[0];
      let mW = WW.length - (OW ? GE(WW, OW) : 0);
      for (const EW of iW) mW -= IE(WW, EW);
      return mW
    }

    function rE(WW, iW, OW) {
      for (let mW = 0; WW.length > mW; mW++) {
        const EW = WW[(iW + mW) % WW.length],
          NW = WW[(OW + mW) % WW.length];
        if (EW !== NW) return NW > EW
      }
      return !1
    }
    var zE = class {
        match(WW) {
          return this.isDOMException(WW) || this.isDOMError(WW)
        }
        coerce(WW, iW) {
          const OW = JO(WW.stack);
          return {
            type: this.getType(WW),
            value: this.getValue(WW),
            stack: OW ? WW.stack : void 0,
            cause: WW.cause ? iW.next(WW.cause) : void 0,
            synthetic: !1
          }
        }
        getType(WW) {
          return this.isDOMError(WW) ? "DOMError" : "DOMException"
        }
        getValue(WW) {
          const iW = WW.name || (this.isDOMError(WW) ? "DOMError" : "DOMException");
          return WW.message ? `${iW}: ${WW.message}` : iW
        }
        isDOMException(WW) {
          return DO(WW, "DOMException")
        }
        isDOMError(WW) {
          return DO(WW, "DOMError")
        }
      },
      FE = class {
        match(WW) {
          return VO(WW)
        }
        coerce(WW, iW) {
          var OW;
          const mW = this.getStack(WW),
            EW = void 0 === mW ? null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack : void 0,
            NW = !!EW;
          return {
            type: this.getType(WW),
            value: this.getMessage(WW, iW),
            stack: null != mW ? mW : EW,
            cause: WW.cause ? iW.next(WW.cause) : void 0,
            synthetic: NW
          }
        }
        getType(WW) {
          return WW.name || WW.constructor.name
        }
        getMessage(WW, iW) {
          const OW = WW.message;
          return String(OW.error && "string" == typeof OW.error.message ? OW.error.message : OW)
        }
        getStack(WW) {
          try {
            const iW = WW.stacktrace;
            if ("string" == typeof iW && iW.length > 0) return iW;
            const OW = WW.stack;
            return "string" == typeof OW && OW.length > 0 ? OW : void 0
          } catch (WW) {
            return
          }
        }
      },
      QE = class {
        match(WW) {
          return !!DO(WW, "ErrorEvent") && (null != WW.error || this._hasUsableMessage(WW))
        }
        coerce(WW, iW) {
          var OW;
          if (null != WW.error) return iW.apply(WW.error);
          const mW = iW.apply(WW.message);
          return KE(KE({}, mW), {}, {
            stack: null !== (OW = this._buildLocationStack(WW)) && void 0 !== OW ? OW : mW.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(WW) {
          return JO(WW.message) && WW.message.length > 0
        }
        _buildLocationStack(WW) {
          var iW, OW;
          const mW = WW,
            EW = null !== (iW = mW.lineno) && void 0 !== iW ? iW : 0,
            NW = null !== (OW = mW.colno) && void 0 !== OW ? OW : 0;
          if (JO(mW.filename) && 0 !== mW.filename.length && 0 !== EW) return `Error\n    at ${mW.filename}:${EW}:${NW}`
        }
      };
    const WN = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var iN = class {
      match(WW) {
        return "string" == typeof WW
      }
      coerce(WW, iW) {
        var OW;
        const [mW, EW] = this.getInfos(WW);
        return {
          type: null != mW ? mW : "Error",
          value: null != EW ? EW : WW,
          stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
          synthetic: !0
        }
      }
      getInfos(WW) {
        let iW = "Error",
          OW = WW;
        const mW = WW.match(WN);
        return mW && (iW = mW[1], OW = mW[2]), [iW, OW]
      }
    };
    const ON = ["fatal", "error", "warning", "log", "info", "debug"];

    function mN(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const OW = Object.keys(WW);
      if (OW.sort(), !OW.length) return "[object has no keys]";
      for (let mW = OW.length; mW > 0; mW--) {
        const WW = OW.slice(0, mW).join(", ");
        if (iW >= WW.length) return mW === OW.length ? WW : WW.length > iW ? `${WW.slice(0,iW)}...` : WW
      }
      return ""
    }
    var EN = class {
        match(WW) {
          return "object" == typeof WW && null !== WW
        }
        coerce(WW, iW) {
          var OW, mW;
          const EW = this.getErrorPropertyFromObject(WW);
          return EW ? iW.apply(EW) : {
            type: this.getType(WW),
            value: this.getValue(WW),
            stack: null !== (OW = this.getStack(WW)) && void 0 !== OW ? OW : null === (mW = iW.syntheticException) || void 0 === mW ? void 0 : mW.stack,
            level: this.isSeverityLevel(WW.level) ? WW.level : "error",
            synthetic: !0
          }
        }
        getType(WW) {
          if (pO(WW)) return WW.constructor.name;
          const iW = "name" in WW ? WW.name : void 0;
          return JO(iW) && !hO(iW) ? iW : "Error"
        }
        getValue(WW) {
          if ("name" in WW && "string" == typeof WW.name) {
            let iW = `'${WW.name}' captured as exception`;
            return "message" in WW && "string" == typeof WW.message && (iW += ` with message: '${WW.message}'`), iW
          }
          if ("message" in WW && "string" == typeof WW.message) return WW.message;
          const iW = this.getObjectClassName(WW);
          return `${iW&&"Object"!==iW?`'${iW}'`:"Object"} captured as exception with keys: ${mN(WW)}`
        }
        isSeverityLevel(WW) {
          return JO(WW) && !hO(WW) && ON.indexOf(WW) >= 0
        }
        getStack(WW) {
          try {
            return JO(WW.stacktrace) && WW.stacktrace.length > 0 ? WW.stacktrace : JO(WW.stack) && WW.stack.length > 0 ? WW.stack : void 0
          } catch (WW) {
            return
          }
        }
        getErrorPropertyFromObject(WW) {
          for (const iW in WW)
            if ({}.hasOwnProperty.call(WW, iW)) {
              const OW = WW[iW];
              if (VO(OW)) return OW
            }
        }
        getObjectClassName(WW) {
          try {
            const iW = Object.getPrototypeOf(WW);
            return iW ? iW.constructor.name : void 0
          } catch (WW) {
            return
          }
        }
      },
      NN = class {
        match(WW) {
          return pO(WW)
        }
        coerce(WW, iW) {
          var OW;
          const mW = WW.constructor.name;
          return {
            type: mW,
            value: `${mW} captured as exception with keys: ${mN(WW)}`,
            stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
            synthetic: !0
          }
        }
      },
      PN = class {
        match(WW) {
          return gO(WW)
        }
        coerce(WW, iW) {
          var OW;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(WW)}`,
            stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
            synthetic: !0
          }
        }
      },
      LN = class {
        match(WW) {
          return DO(WW, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(WW)
        }
        isCustomEventWrappingRejection(WW) {
          if (!pO(WW)) return !1;
          try {
            const iW = WW.detail;
            return null != iW && "object" == typeof iW && "reason" in iW
          } catch (WW) {
            return !1
          }
        }
        coerce(WW, iW) {
          var OW;
          const mW = this.getUnhandledRejectionReason(WW);
          return gO(mW) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(mW)}`,
            stack: null === (OW = iW.syntheticException) || void 0 === OW ? void 0 : OW.stack,
            synthetic: !0
          } : iW.apply(mW)
        }
        getUnhandledRejectionReason(WW) {
          try {
            if ("reason" in WW) return WW.reason;
            if ("detail" in WW && null != WW.detail && "object" == typeof WW.detail && "reason" in WW.detail) return WW.detail.reason
          } catch (WW) {}
          return WW
        }
      };
    const cN = "$message",
      wN = "$timestamp",
      tN = new Set([cN, wN]),
      ZN = {
        enabled: !0,
        max_bytes: 32768
      };

    function xN(WW) {
      var iW;
      return WW ? {
        enabled: null !== (iW = WW.enabled) && void 0 !== iW ? iW : ZN.enabled,
        max_bytes: AN(WW.max_bytes, ZN.max_bytes)
      } : KE({}, ZN)
    }
    var lN = class {
      constructor(WW) {
        this._entries = [], this._totalBytes = 0, this._config = xN(WW)
      }
      setConfig(WW) {
        this._config = xN(WW), this._trimToMaxBytes()
      }
      add(WW) {
        const iW = function(WW) {
          let iW;
          try {
            iW = UO(WW)
          } catch (WW) {
            return
          }
          try {
            const WW = JSON.parse(iW);
            if (!YO(WW)) return;
            const OW = WW,
              mW = OW[cN],
              EW = OW[wN];
            if (!JO(mW) || 0 === mW.trim().length) return;
            if (!JO(EW) && !uO(EW)) return;
            return {
              step: OW,
              json: iW
            }
          } catch (WW) {
            return
          }
        }(WW);
        if (!iW) return;
        const OW = function(WW) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(WW).length;
          const iW = encodeURIComponent(WW);
          let OW = 0;
          for (let mW = 0; iW.length > mW; mW++) "%" === iW[mW] ? (OW += 1, mW += 2) : OW += 1;
          return OW
        }(iW.json);
        OW > this._config.max_bytes || (this._entries.push({
          step: iW.step,
          bytes: OW
        }), this._totalBytes += OW, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((WW => WW.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const WW = this._entries.shift();
          WW && (this._totalBytes -= WW.bytes)
        }
      }
    };

    function AN(WW, iW) {
      if (!uO(WW) || 1 / 0 === WW || -1 / 0 === WW) return iW;
      const OW = Math.floor(WW);
      return 0 > OW ? iW : OW
    }
    const bN = WW => {
      if ("string" != typeof WW) return WW;
      try {
        return JSON.parse(WW)
      } catch (EW) {
        return WW
      }
    };

    function jN(WW) {
      return "string" == typeof WW || WW
    }

    function UN(WW) {
      return "string" == typeof WW ? WW : void 0
    }
    const kN = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      sN = "NativeGzipValidationError",
      MN = WW => WW.length >= 2 && 31 === WW[0] && 139 === WW[1],
      KN = (WW, iW) => WW === ZO.GZipJS || iW === ZO.GZipJS || "gzip" === iW,
      SN = WW => !(!WW || "object" != typeof WW) && "NotReadableError" === ("name" in WW ? String(WW.name) : "");
    let YN;
    const yN = WW => {
        throw xE(sN, `Native gzip produced invalid output: ${WW}`)
      },
      TN = (JN = RO((function*(WW, iW) {
        18 > WW.size && yN("too-short");
        const OW = new Uint8Array(yield WW.slice(0, 10).arrayBuffer());
        MN(OW) && 8 === OW[2] || yN("invalid-header");
        const mW = new DataView(yield WW.slice(WW.size - 8).arrayBuffer());
        mW.getUint32(0, !0) !== (WW => {
          const iW = (() => {
            if (YN) return YN;
            YN = [];
            for (let WW = 0; 256 > WW; WW++) {
              let iW = WW;
              for (let WW = 0; 8 > WW; WW++) iW = 1 & iW ? 3988292384 ^ iW >>> 1 : iW >>> 1;
              YN[WW] = iW >>> 0
            }
            return YN
          })();
          let OW = 4294967295;
          for (let mW = 0; WW.length > mW; mW++) OW = iW[255 & (OW ^ WW[mW])] ^ OW >>> 8;
          return (4294967295 ^ OW) >>> 0
        })(iW) && yN("invalid-crc");
        const EW = iW.length >>> 0;
        mW.getUint32(4, !0) !== EW && yN("invalid-size")
      })), function(WW, iW) {
        return JN.apply(this, arguments)
      });
    var JN;

    function hN() {
      return hN = RO((function*(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const iW = (new TextEncoder).encode(WW),
            OW = new globalThis.CompressionStream("gzip"),
            EW = OW.writable.getWriter(),
            NW = EW.write(iW).then((() => EW.close())).catch((mW = RO((function*(WW) {
              try {
                yield EW.abort(WW)
              } catch (WW) {}
              throw WW
            })), function(WW) {
              return mW.apply(this, arguments)
            })),
            PW = new Response(OW.readable).blob(),
            [LW] = yield Promise.all([PW, NW]);
          return yield TN(LW, iW), LW
        } catch (WW) {
          if (null == OW ? void 0 : OW.rethrow) throw WW;
          return iW && console.error("Failed to gzip compress data", WW), null
        }
        var mW
      })), hN.apply(this, arguments)
    }

    function HN(WW, iW) {
      if (null == WW) return {};
      var OW, mW, EW = function(WW, iW) {
        if (null == WW) return {};
        var OW = {};
        for (var mW in WW)
          if ({}.hasOwnProperty.call(WW, mW)) {
            if (iW.includes(mW)) continue;
            OW[mW] = WW[mW]
          } return OW
      }(WW, iW);
      if (Object.getOwnPropertySymbols) {
        var NW = Object.getOwnPropertySymbols(WW);
        for (mW = 0; NW.length > mW; mW++) iW.includes(OW = NW[mW]) || {}.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
      }
      return EW
    }
    const nN = "[redacted]",
      uN = /^[A-Za-z0-9+/\n\r]+=*$/,
      oN = /^[A-Za-z0-9_-]+={0,2}$/,
      dN = /[-_]/,
      eN = /^data:[^,\s]*;base64,/i,
      vN = /^[A-Za-z0-9+/_-]+={0,2}$/,
      gN = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      DN = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      VN = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      pN = /[\s<>"]/,
      fN = new RegExp(VN.source, "i"),
      CN = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      XN = new RegExp(`^${CN.source}`, "i"),
      BN = new RegExp(CN.source, "gi"),
      qN = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      RN = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      GN = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      IN = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      aN = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      rN = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      zN = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      FN = /\b\d(?:[ ./-]?\d){12,}\b/g,
      QN = /\d+/g,
      WP = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      iP = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function OP(WW) {
      return function(WW) {
        return DN.test(WW)
      }(WW) || qN.test(WW) || RN.test(WW)
    }

    function mP(WW) {
      return WW.split("&", 129).length > 128
    }

    function EP(WW, iW, OW) {
      return OP(WW) || iW.includes(";") && function(WW) {
        return WW.split(";").some((WW => OP(WW.split("=", 1)[0])))
      }(iW) ? nN : fN.test(iW) ? OW ? tP(iW, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : nN : iW
    }

    function NP(WW, iW) {
      const OW = new URLSearchParams;
      let mW = !1,
        EW = !1;
      for (const [NW, PW] of new URLSearchParams(WW)) {
        const WW = ZP(NW),
          LW = ZP(PW);
        mW || (mW = WW !== NW || LW !== PW);
        const cW = EP(WW, LW, iW);
        mW || (mW = cW !== LW), EW = OP(WW) || cW !== LW, OW.append(WW, cW)
      }
      return {
        changed: mW,
        lastFieldSensitive: EW,
        serialized: OW.toString()
      }
    }

    function PP(WW, iW) {
      if (!WW.includes("=")) return {
        value: LP(WW, iW),
        lastFieldSensitive: !1
      };
      const OW = NP(WW, iW);
      return {
        value: OW.changed ? OW.serialized : WW,
        lastFieldSensitive: OW.lastFieldSensitive
      }
    }

    function LP(WW, iW) {
      return iW ? tP(WW, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : fN.test(WW) ? nN : WW
    }

    function cP(WW, iW, OW) {
      return "#" === WW ? !iW.fragment && (iW.fragment = !0) : "?" === WW && (iW.fragment ? "=" !== OW && !iW.fragmentQuery && (iW.fragmentQuery = !0) : !iW.query && (iW.query = !0))
    }

    function wP(WW, iW) {
      var OW;
      if (WW.length > 8192 && XN.test(WW)) return nN;
      const {
        address: mW,
        suffix: EW
      } = iW.stripPunctuation ? function(WW) {
        let iW = WW.length;
        for (; iW > 0 && ".,;:!?)]}'".includes(WW[iW - 1]);) iW--;
        return {
          address: WW.slice(0, iW),
          suffix: WW.slice(iW)
        }
      }(WW) : {
        address: WW,
        suffix: ""
      };
      let NW;
      try {
        NW = new URL(mW)
      } catch (WW) {
        return nN + EW
      }
      const PW = NW.search.slice(1),
        LW = "" !== NW.hash,
        cW = function(WW) {
          const iW = WW.slice(1),
            OW = iW.indexOf("?");
          return 0 > OW ? {
            head: iW,
            tail: null
          } : {
            head: iW.slice(0, OW),
            tail: iW.slice(OW + 1)
          }
        }(NW.hash);
      if (mP(PW) || mP(cW.head) || mP(null !== (OW = cW.tail) && void 0 !== OW ? OW : "")) return nN + EW;
      let wW = !1;
      (NW.username || NW.password) && (NW.username = nN, NW.password = "", wW = !0);
      const tW = NP(PW, iW.allowNestedUrls);
      tW.changed && (NW.search = tW.serialized, wW = !0);
      const ZW = PP(cW.head, iW.allowNestedUrls),
        xW = null === cW.tail ? null : (lW = cW.tail, ZW.lastFieldSensitive ? {
          value: "" === lW ? "" : nN,
          lastFieldSensitive: !0
        } : PP(lW, iW.allowNestedUrls));
      var lW;
      const AW = null === xW ? ZW.value : `${ZW.value}?${xW.value}`;
      AW !== NW.hash.slice(1) && (NW.hash = AW, wW = !0);
      const bW = LW ? null != xW ? xW : ZW : tW;
      return (wW ? ZP(NW.toString()) : mW) + (bW.lastFieldSensitive ? "" : EW)
    }

    function tP(WW, iW) {
      return WW.replace(VN, (OW => function(WW, iW) {
        const OW = function(WW) {
          if (!WW.includes("://")) return [];
          const iW = [...WW.matchAll(BN)].map((WW => WW.index)),
            OW = [],
            mW = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let EW = 0,
            NW = !1,
            PW = "";
          for (let LW = 0; WW.length > LW && iW.length > EW; LW++) {
            iW[EW] === LW && (LW > 0 && "=" !== PW && OW.push(LW), EW++);
            const cW = WW[LW];
            cP(cW, mW, PW) ? (PW = cW, NW = !0) : NW && "=&".includes(cW) && (PW = cW)
          }
          return OW
        }(WW);
        if (0 === OW.length) return wP(WW, iW);
        let mW = "",
          EW = 0;
        for (const NW of OW) mW += wP(WW.slice(EW, NW), KE(KE({}, iW), {}, {
          stripPunctuation: !1
        })), EW = NW;
        return mW + wP(WW.slice(EW), iW)
      }(OW, KE(KE({}, iW), {}, {
        stripPunctuation: iW.stripPunctuation && OW.length !== WW.length
      }))))
    }

    function ZP(WW) {
      return WW.replace(gN, nN)
    }

    function xP(WW) {
      let iW = 0,
        OW = !1;
      for (let mW = WW.length - 1; mW >= 0; mW--) {
        let EW = WW.charCodeAt(mW) - 48;
        if (0 > EW || EW > 9) return !1;
        OW && (EW *= 2, EW > 9 && (EW -= 9)), iW += EW, OW = !OW
      }
      return iW % 10 == 0
    }

    function lP(WW) {
      const iW = [];
      for (let NW = QN.exec(WW); null !== NW; NW = QN.exec(WW)) iW.push({
        digits: NW[0],
        start: NW.index,
        end: NW.index + NW[0].length
      });
      let OW = "",
        mW = 0,
        EW = 0;
      for (; iW.length > EW;) {
        let NW = "",
          PW = -1;
        for (let WW = EW; iW.length > WW && (NW += iW[WW].digits, 19 >= NW.length); WW++) NW.length >= 13 && xP(NW) && (PW = WW);
        0 > PW ? EW++ : (OW += WW.slice(mW, iW[EW].start) + nN, mW = iW[PW].end, EW = PW + 1)
      }
      return OW + WW.slice(mW)
    }
    const AP = {}.propertyIsEnumerable;

    function bP(WW, iW) {
      try {
        return kP(WW, iW, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (WW) {
        return []
      }
    }

    function jP(WW, iW, OW, mW) {
      if (0 >= OW.remainingNodes) return {
        stringValue: EE
      };
      if (OW.remainingNodes--, dO(WW)) return {
        boolValue: WW
      };
      if ("bigint" == typeof WW) return function(WW, iW) {
        const OW = WW.toString(),
          mW = BigInt("9223372036854775808");
        return WW >= mW || -mW > WW ? (null == iW || iW.debug(`Attribute ${OW} is outside the int64 range; encoding it as a string`), {
          stringValue: OW
        }) : {
          intValue: OW
        }
      }(WW, iW);
      if ("number" == typeof WW) {
        if (!Number.isFinite(WW)) return {
          stringValue: String(WW)
        };
        if (Number.isInteger(WW)) {
          if (Number.isSafeInteger(WW)) return {
            intValue: String(WW)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(WW)
          };
          const OW = BigInt(WW).toString();
          return WW >= 0x8000000000000000 || -0x8000000000000000 > WW ? (null == iW || iW.debug(`Attribute ${OW} is outside the int64 range; encoding it as a string`), {
            stringValue: OW
          }) : {
            intValue: OW
          }
        }
        return {
          doubleValue: WW
        }
      }
      if ("string" == typeof WW) return {
        stringValue: PE(WW)
      };
      if ("function" == typeof WW) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof WW) return {
        stringValue: String(WW)
      };
      if ("object" == typeof WW && null !== WW) {
        if (OW.ancestors.has(WW)) return {
          stringValue: "[Circular]"
        };
        if (mW >= 20) return {
          stringValue: EE
        };
        if (WW instanceof Date) {
          const iW = WW.getTime(),
            OW = Number.isFinite(iW) ? WW.toISOString() : String(WW);
          return {
            stringValue: "string" == typeof OW ? PE(OW) : String(OW)
          }
        }
        OW.ancestors.add(WW);
        try {
          try {
            const EW = WW.toJSON;
            if ("function" == typeof EW) return jP(EW.call(WW), iW, OW, mW + 1)
          } catch (WW) {}
          return KO(WW) ? {
            arrayValue: {
              values: UP(WW, iW, OW, mW + 1)
            }
          } : {
            kvlistValue: {
              values: kP(WW, iW, OW, mW + 1)
            }
          }
        } finally {
          OW.ancestors.delete(WW)
        }
      }
      return {
        stringValue: PE(String(WW))
      }
    }

    function UP(WW, iW, OW, mW) {
      const EW = [],
        NW = Math.min(WW.length, 1e3);
      let PW = 0;
      for (; NW > PW && OW.remainingNodes > 0; PW++) try {
        const NW = PW in WW ? WW[PW] : void 0;
        if (nO(NW)) continue;
        EW.push(jP(NW, iW, OW, mW))
      } catch (WW) {
        EW.push({
          stringValue: NE
        })
      }
      return WW.length > PW && EW.push({
        stringValue: EE
      }), EW
    }

    function kP(WW, iW, OW, mW) {
      const EW = [];
      for (const NW in WW)
        if (AP.call(WW, NW)) {
          if (!NW) {
            null == iW || iW.debug("Dropping an attribute with an empty key");
            continue
          }
          if (EW.length >= 1e3 || 0 >= OW.remainingNodes) {
            null == iW || iW.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const PW = WW[NW];
            if (HO(PW) || TO(PW)) continue;
            EW.push({
              key: PE(NW),
              value: jP(PW, iW, OW, mW)
            })
          } catch (WW) {
            EW.push({
              key: PE(NW),
              value: {
                stringValue: NE
              }
            })
          }
        } return EW
    }

    function sP(WW, iW, OW) {
      return KE(KE(KE(KE({}, LE({}, WW.resourceAttributes)), {}, {
        "service.name": WW.serviceName || "unknown_service"
      }, WW.environment && {
        "deployment.environment": WW.environment
      }), WW.serviceVersion && {
        "service.version": WW.serviceVersion
      }), {}, {
        "telemetry.sdk.name": iW,
        "telemetry.sdk.version": OW
      })
    }
    const MP = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function KP(WW, iW) {
      const OW = LE({}, WW),
        mW = {};
      for (const EW of MP)({}).hasOwnProperty.call(OW, EW) && (mW[EW] = OW[EW], delete OW[EW]);
      return [...bP(OW, iW), ...bP(mW, iW)]
    }
    const SP = {
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
      YP = {
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
      yP = YP.info;

    function TP(WW) {
      try {
        return PE(String(WW))
      } catch (WW) {
        return NE
      }
    }

    function JP(WW, iW, OW, mW) {
      const EW = WW.level || "info",
        {
          text: NW,
          number: PW
        } = YP[EW] || yP,
        LW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(WW) + "000000"
        }(uO(mW) ? mW : void 0),
        cW = {};
      iW.distinctId && (cW.posthogDistinctId = iW.distinctId), iW.sessionId && (cW.sessionId = iW.sessionId), iW.windowId && (cW["window.id"] = iW.windowId), nO(iW.sessionStartTimestamp) || (cW.sessionStartTimestamp = String(iW.sessionStartTimestamp)), nO(iW.lastActivityTimestamp) || (cW.lastActivityTimestamp = String(iW.lastActivityTimestamp)), iW.currentUrl && (cW["url.full"] = iW.currentUrl), iW.screenName && (cW["screen.name"] = iW.screenName), iW.appState && (cW["app.state"] = iW.appState), iW.activeFeatureFlags && iW.activeFeatureFlags.length > 0 && (cW.feature_flags = iW.activeFeatureFlags);
      const wW = KE({}, cW),
        tW = WW.attributes;
      if (tW) {
        let WW = [];
        try {
          WW = Object.keys(tW)
        } catch (iW) {
          WW = []
        }
        for (const OW of WW) {
          let WW;
          try {
            WW = tW[OW]
          } catch (iW) {
            WW = NE
          }
          Object.defineProperty(wW, OW, {
            value: WW,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const ZW = {
        timeUnixNano: LW,
        observedTimeUnixNano: LW,
        severityNumber: PW,
        severityText: NW,
        body: {
          stringValue: TP(WW.body)
        },
        attributes: bP(wW, OW)
      };
      return WW.trace_id && (ZW.traceId = WW.trace_id), WW.span_id && (ZW.spanId = WW.span_id), TO(WW.trace_flags) || (ZW.flags = WW.trace_flags), ZW
    }

    function hP(WW, iW, OW) {
      return sP(WW, iW, OW)
    }

    function HP(WW, iW, OW, mW) {
      return {
        resourceLogs: [{
          resource: {
            attributes: KP(iW)
          },
          scopeLogs: [{
            scope: {
              name: OW,
              version: mW
            },
            logRecords: WW
          }]
        }]
      }
    }
    var nP = class {
      constructor(WW) {
        this._onFire = WW, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(WW) {
        this.clear(), this._firesAt = Date.now() + WW, this._timer = bE((() => {
          this._timer = void 0, this._onFire()
        }), WW)
      }
      armNoEarlierThan(WW) {
        this._timer && Date.now() + WW <= this._firesAt || this.arm(WW)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function uP() {
      return .75 + .5 * Math.random()
    }

    function oP(WW, iW, OW, mW) {
      const EW = Math.min(Math.max(0, iW - 1), 6),
        NW = WW * Math.pow(2, EW);
      return Math.round((void 0 === mW ? NW : Math.min(NW, Math.max(mW, WW))) * OW)
    }
    var dP = class {
      constructor(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          PW = arguments.length > 6 ? arguments[6] : void 0;
        var LW;
        this._instance = WW, this._config = iW, this._logger = OW, this._getContext = mW, this._onReady = EW, this._waitForStoragePersist = NW, this._scopeName = PW, this._flushTimer = new nP((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new wE, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = iW.maxBufferSize, this._maxQueueSize = Math.max(null !== (LW = iW.maxQueueSize) && void 0 !== LW ? LW : iW.maxBufferSize, iW.maxBufferSize), this._flushIntervalMs = iW.flushIntervalMs, this._maxBatchRecordsPerPost = iW.maxBatchRecordsPerPost, this._rateCapWindowMs = iW.rateCapWindowMs, this._maxLogsPerInterval = iW.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(tO.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(WW, iW) {
        var OW;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == WW ? void 0 : WW.body)) return;
        const mW = this._runBeforeSend(WW);
        if (null === mW) return;
        if (!mW.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const EW = {
          record: JP(mW, null !== (OW = null == iW ? void 0 : iW.context) && void 0 !== OW ? OW : this._getContext(), this._logger, null == iW ? void 0 : iW.occurredAtMs)
        };
        this._onReady((() => this._enqueue(EW)))
      }
      _runBeforeSend(WW) {
        const iW = this._config.beforeSend;
        if (!iW) return WW;
        const OW = KO(iW) ? iW : [iW];
        let mW = WW;
        for (const EW of OW) try {
          const WW = EW(mW);
          if (!WW) return this._logger.info("Log was rejected in beforeSend function"), null;
          mW = WW
        } catch (WW) {
          return this._logger.error("Error in beforeSend function for log:", WW), null
        }
        return mW
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const WW = Date.now(),
          iW = WW - this._intervalWindowStart;
        return this._rateCapWindowMs > iW && iW >= 0 || (this._intervalWindowStart = WW, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var WW = this;
        return RO((function*() {
          if (!WW._instance.isDisabled) return WW._flushPromise || (WW._flushPromise = WW._flushInner().finally((() => {
            WW._flushPromise = null
          }))), WW._flushPromise
        }))()
      }
      _flushInner() {
        var WW = this;
        return RO((function*() {
          var iW;
          WW._flushTimer.clear();
          let OW = null !== (iW = WW._instance.getPersistedProperty(tO.LogsQueue)) && void 0 !== iW ? iW : [];
          if (0 === OW.length) return;
          const mW = OW.length;
          let EW = 0;
          for (; OW.length > 0 && mW > EW;) {
            var NW, PW;
            const iW = WW._queueGeneration;
            WW._evictedSinceAdvance = 0;
            const mW = Math.min(OW.length, WW._maxBatchRecordsPerPost),
              LW = OW.slice(0, mW),
              cW = HP(LW.map((WW => WW.record)), WW._buildResourceAttributes(), null !== (NW = WW._scopeName) && void 0 !== NW ? NW : WW._instance.getLibraryId(), WW._instance.getLibraryVersion()),
              wW = yield WW._instance._sendLogsBatch(cW);
            if (WW._queueGeneration !== iW) return;
            if ("too-large" === wW.kind && LW.length > 1) WW._maxBatchRecordsPerPost = Math.max(1, Math.floor(LW.length / 2)), WW._logger.warn(`Logs batch of size ${LW.length} was too large for the ingestion endpoint, reducing batch size to ${WW._maxBatchRecordsPerPost}`);
            else {
              if (WW._retryAfter.record(wW), WW._flushTimer.pending && WW._flushTimer.arm(Math.max(WW._flushIntervalMs, WW._retryAfter.remainingMs())), "retry-later" === wW.kind) throw wW.error;
              if ("too-large" === wW.kind ? WW._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === wW.kind && WW._config.maxBatchRecordsPerPost > WW._maxBatchRecordsPerPost && (WW._maxBatchRecordsPerPost = Math.min(WW._config.maxBatchRecordsPerPost, WW._maxBatchRecordsPerPost + 1)), yield WW._persistQueueAdvance(LW.length), OW = null !== (PW = WW._instance.getPersistedProperty(tO.LogsQueue)) && void 0 !== PW ? PW : [], EW += LW.length, "fatal" === wW.kind) throw wW.error
            }
          }
        }))()
      }
      _persistQueueAdvance(WW) {
        var iW = this;
        return RO((function*() {
          var OW;
          const mW = Math.max(0, WW - iW._evictedSinceAdvance),
            EW = null !== (OW = iW._instance.getPersistedProperty(tO.LogsQueue)) && void 0 !== OW ? OW : [];
          iW._instance.setPersistedProperty(tO.LogsQueue, EW.slice(mW)), yield iW._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return hP(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(WW) {
        var iW;
        if (this._instance.optedOut) return;
        const OW = null !== (iW = this._instance.getPersistedProperty(tO.LogsQueue)) && void 0 !== iW ? iW : [];
        this._maxQueueSize > OW.length || (OW.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), OW.push(WW), this._instance.setPersistedProperty(tO.LogsQueue, OW), this._maxBufferSize > OW.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(oP(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const WW = this._instance.getPersistedProperty(tO.LogsQueue);
        return !!WW && WW.length > 0
      }
      shutdown(WW) {
        var iW = this;
        return RO((function*() {
          iW._flushTimer.clear();
          const OW = iW.flush().catch((() => {}));
          void 0 !== WW ? yield jE(OW, WW): yield OW
        }))()
      }
      flushWithTimeout(WW) {
        var iW = this;
        return RO((function*() {
          const OW = iW.flush();
          yield jE(OW, WW, (() => {
            OW.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (WW => {
          this._consecutiveFlushFailures++, this._flushJitter = uP(), this._logger.error("PostHog logs flush failed:", WW)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const eP = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function vP(WW) {
      return String(WW) + "000000"
    }

    function gP(WW, iW, OW, mW) {
      let EW = "";
      return mW && (EW = Object.keys(mW).sort().map((WW => `${JSON.stringify(WW)}:${JSON.stringify(mW[WW])}`)).join(",")), `${WW}\0${iW}\0${null!=OW?OW:""}\0${EW}`
    }
    var DP = class {
      constructor(WW, iW, OW) {
        this._instance = WW, this._config = iW, this._logger = OW, this._series = new Map, this._flushTimer = new nP((() => this.flush().catch((WW => {
          this._logger.error("Metrics flush failed:", WW)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new wE, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: WW,
          type: "count",
          value: iW,
          unit: null == OW ? void 0 : OW.unit,
          attributes: null == OW ? void 0 : OW.attributes
        })
      }
      gauge(WW, iW, OW) {
        this._capture({
          name: WW,
          type: "gauge",
          value: iW,
          unit: null == OW ? void 0 : OW.unit,
          attributes: null == OW ? void 0 : OW.attributes
        })
      }
      histogram(WW, iW, OW) {
        this._capture({
          name: WW,
          type: "histogram",
          value: iW,
          unit: null == OW ? void 0 : OW.unit,
          attributes: null == OW ? void 0 : OW.attributes
        })
      }
      flush() {
        var WW = this;
        const iW = this._flushPromise,
          OW = function() {
            var OW = RO((function*() {
              iW && (yield iW.catch((() => {}))), yield WW._doFlush()
            }));
            return function() {
              return OW.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === OW && (this._flushPromise = null)
          }));
        return this._flushPromise = OW, OW
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const WW = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(WW)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(WW) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const iW = this._runBeforeSend(WW);
        if (null === iW) return;
        if (!iW.name || "string" != typeof iW.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof iW.value || !Number.isFinite(iW.value)) return void this._logger.warn(`Dropping metric '${iW.name}': value must be a finite number`);
        if ("count" === iW.type && 0 > iW.value) return void this._logger.warn(`Dropping count '${iW.name}': counters are monotonic, value must be >= 0`);
        let OW, mW;
        try {
          OW = iW.attributes ? KE({}, iW.attributes) : void 0, mW = gP(iW.type, iW.name, iW.unit, OW)
        } catch (WW) {
          return void this._logger.warn(`Dropping metric '${iW.name}': attributes could not be serialized`, WW)
        }
        let EW = this._series.get(mW);
        if (!EW) {
          if (!this._admitNewSeries()) return;
          EW = {
            name: iW.name,
            type: iW.type,
            unit: iW.unit,
            attributes: OW,
            windowStartMs: Date.now()
          }, this._series.set(mW, EW)
        }
        const NW = this._typeByName.get(iW.name);
        void 0 === NW ? this._typeByName.set(iW.name, iW.type) : NW === iW.type || this._typeCollisionWarned.has(iW.name) || (this._typeCollisionWarned.add(iW.name), this._logger.warn(`Metric name '${iW.name}' is already used as a ${NW}; recording it as a ${iW.type} too will blend both series in charts. Use a distinct name.`)), this._fold(EW, iW.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(WW, iW) {
        switch (WW.type) {
          case "count":
            var OW;
            WW.total = (null !== (OW = WW.total) && void 0 !== OW ? OW : 0) + iW;
            break;
          case "gauge":
            WW.last = iW;
            break;
          case "histogram": {
            WW.hist || (WW.hist = {
              count: 0,
              sum: 0,
              min: iW,
              max: iW,
              bucketCounts: new Array(eP.length + 1).fill(0)
            });
            const OW = WW.hist;
            OW.count += 1, OW.sum += iW, OW.min = Math.min(OW.min, iW), OW.max = Math.max(OW.max, iW), OW.bucketCounts[function(WW, iW) {
              for (let OW = 0; iW.length > OW; OW++)
                if (iW[OW] >= WW) return OW;
              return iW.length
            }(iW, eP)] += 1;
            break
          }
        }
      }
      _runBeforeSend(WW) {
        const iW = this._config.beforeSend;
        if (!iW) return WW;
        const OW = KO(iW) ? iW : [iW];
        let mW = WW;
        for (const EW of OW) try {
          const WW = EW(mW);
          if (!WW) return this._logger.info("Metric was rejected in beforeSend function"), null;
          mW = WW
        } catch (WW) {
          return this._logger.error("Error in beforeSend function for metric:", WW), null
        }
        return mW
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(oP(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var WW = this;
        return RO((function*() {
          if (WW._flushTimer.clear(), 0 === WW._series.size) return;
          const iW = WW._series;
          WW._series = new Map, WW._seriesCapWarned = !1, WW._typeByName = new Map, WW._typeCollisionWarned = new Set;
          const OW = WW._generation,
            mW = yield WW._instance._sendMetricsBatch(WW._buildPayload(iW));
          if (OW === WW._generation) switch (WW._retryAfter.record(mW), "retry-later" === mW.kind ? (WW._consecutiveFlushFailures++, WW._flushJitter = uP()) : (WW._consecutiveFlushFailures = 0, WW._flushJitter = 1), WW._flushTimer.pending && WW._flushTimer.arm(WW._nextFlushDelay()), mW.kind) {
            case "ok":
              return;
            case "retry-later":
              return WW._mergeWindowBack(iW), void WW._flushTimer.armNoEarlierThan(WW._nextFlushDelay());
            case "too-large":
              return void WW._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void WW._logger.error("Failed to send metrics batch:", mW.error)
          }
        }))()
      }
      _buildPayload(WW) {
        return iW = this._buildMetrics(WW), OW = function(WW, iW, OW) {
          return sP(WW, iW, OW)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), mW = this._instance.getLibraryId(), EW = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: KP(OW)
            },
            scopeMetrics: [{
              scope: {
                name: mW,
                version: EW
              },
              metrics: iW
            }]
          }]
        };
        var iW, OW, mW, EW
      }
      _buildMetrics(WW) {
        const iW = vP(Date.now()),
          OW = new Map;
        for (const PW of WW.values()) {
          var mW;
          const WW = gP(PW.type, PW.name, PW.unit, void 0);
          let LW = OW.get(WW);
          LW || (LW = KE({
            name: PW.name
          }, PW.unit && {
            unit: PW.unit
          }), "count" === PW.type ? LW.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === PW.type ? LW.gauge = {
            dataPoints: []
          } : LW.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, OW.set(WW, LW));
          const cW = bP(null !== (mW = PW.attributes) && void 0 !== mW ? mW : {}, this._logger),
            wW = vP(PW.windowStartMs);
          if ("count" === PW.type) {
            var EW;
            const WW = {
              attributes: cW,
              startTimeUnixNano: wW,
              timeUnixNano: iW,
              asDouble: null !== (EW = PW.total) && void 0 !== EW ? EW : 0
            };
            LW.sum.dataPoints.push(WW)
          } else if ("gauge" === PW.type) {
            var NW;
            const WW = {
              attributes: cW,
              timeUnixNano: iW,
              asDouble: null !== (NW = PW.last) && void 0 !== NW ? NW : 0
            };
            LW.gauge.dataPoints.push(WW)
          } else PW.hist && LW.histogram.dataPoints.push({
            attributes: cW,
            startTimeUnixNano: wW,
            timeUnixNano: iW,
            count: PW.hist.count,
            sum: PW.hist.sum,
            min: PW.hist.min,
            max: PW.hist.max,
            bucketCounts: PW.hist.bucketCounts,
            explicitBounds: eP
          })
        }
        return Array.from(OW.values())
      }
      _mergeWindowBack(WW) {
        for (const [mW, EW] of WW) {
          const WW = this._series.get(mW);
          if (WW) switch (WW.windowStartMs = Math.min(WW.windowStartMs, EW.windowStartMs), WW.type) {
            case "count":
              var iW, OW;
              WW.total = (null !== (iW = WW.total) && void 0 !== iW ? iW : 0) + (null !== (OW = EW.total) && void 0 !== OW ? OW : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (EW.hist)
                if (WW.hist) {
                  WW.hist.count += EW.hist.count, WW.hist.sum += EW.hist.sum, WW.hist.min = Math.min(WW.hist.min, EW.hist.min), WW.hist.max = Math.max(WW.hist.max, EW.hist.max);
                  for (let iW = 0; WW.hist.bucketCounts.length > iW; iW++) WW.hist.bucketCounts[iW] += EW.hist.bucketCounts[iW]
                } else WW.hist = EW.hist
          } else this._admitNewSeries() && this._series.set(mW, EW)
        }
      }
    };
    const VP = function(WW) {
        let {
          debugEnabled: iW
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = {
          _log(OW) {
            let mW;
            try {
              mW = typeof window > "u" ? void 0 : window
            } catch (WW) {
              return
            }
            for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
            mW && (EW.DEBUG || mW.POSTHOG_DEBUG || iW) && !TO(mW.console) && mW.console && ("__rrweb_original__" in mW.console[OW] ? mW.console[OW].__rrweb_original__ : mW.console[OW])(WW, ...PW)
          },
          debug() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            OW._log("debug", ...iW)
          },
          info() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            OW._log("log", ...iW)
          },
          warn() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            OW._log("warn", ...iW)
          },
          error() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            OW._log("error", ...iW)
          },
          critical() {
            for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
            console.error(WW, ...OW)
          },
          uninitializedWarning(WW) {
            OW.error(`You must initialize PostHog before calling ${WW}`)
          },
          createLogger: (iW, OW) => VP(`${WW} ${iW}`, OW)
        };
        return OW
      },
      pP = VP("[PostHog.js]"),
      fP = pP.createLogger;

    function CP(WW, iW) {
      KO(WW) && WW.forEach(iW)
    }

    function XP(WW, iW) {
      if (!nO(WW))
        if (KO(WW)) WW.forEach(iW);
        else if ((WW => WW instanceof FormData)(WW)) WW.forEach(((WW, OW) => iW(WW, OW)));
      else
        for (const OW in WW) sO.call(WW, OW) && iW(WW[OW], OW)
    }
    const BP = function(WW) {
      for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
      for (const EW of OW)
        for (const iW in EW) void 0 !== EW[iW] && (WW[iW] = EW[iW]);
      return WW
    };

    function qP(WW) {
      const iW = Object.keys(WW);
      let OW = iW.length;
      const mW = new Array(OW);
      for (; OW--;) mW[OW] = [iW[OW], WW[iW[OW]]];
      return mW
    }
    const RP = function(WW) {
        return function() {
          try {
            for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
            return WW.apply(this, OW)
          } catch (WW) {
            pP.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), pP.critical(WW)
          }
        }
      },
      GP = function(WW) {
        const iW = {};
        return XP(WW, (function(WW, OW) {
          (JO(WW) && WW.length > 0 || uO(WW)) && (iW[OW] = WW)
        })), iW
      };

    function IP(WW) {
      const iW = KE({}, WW);
      for (const OW of ["name", "message", "stack", "cause", "errors"]) try {
        OW in WW && (iW[OW] = WW[OW])
      } catch (WW) {}
      return iW
    }
    const aP = ["herokuapp.com", "vercel.app", "netlify.app"];

    function rP(WW) {
      const iW = null == WW ? void 0 : WW.hostname;
      if (!JO(iW)) return !1;
      const OW = iW.split(".").slice(-2).join(".");
      for (const mW of aP)
        if (OW === mW) return !1;
      return !0
    }

    function zP(WW, iW, OW, mW) {
      const {
        capture: EW = !1,
        passive: NW = !0
      } = null != mW ? mW : {};
      null == WW || WW.addEventListener(iW, OW, {
        capture: EW,
        passive: NW
      })
    }

    function FP(WW) {
      return "ph_toolbar_internal" === WW.name
    }
    const QP = WW => {
      if (iO) {
        try {
          const iW = WW + "=",
            OW = iO.cookie.split(";").filter((WW => WW.length));
          for (let WW = 0; OW.length > WW; WW++) {
            let mW = OW[WW];
            for (;
              " " == mW.charAt(0);) mW = mW.substring(1, mW.length);
            if (0 === mW.indexOf(iW)) return decodeURIComponent(mW.substring(iW.length, mW.length))
          }
        } catch (WW) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(WW) {
      return 0 > WW ? Math.ceil(WW) : Math.floor(WW)
    }), Number.isInteger || (Number.isInteger = function(WW) {
      return uO(WW) && isFinite(WW) && Math.floor(WW) === WW
    });
    var WL = class WW {
        constructor(WW) {
          if (this.bytes = WW, 16 !== WW.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(iW, OW, mW, EW) {
          if (!Number.isInteger(iW) || !Number.isInteger(OW) || !Number.isInteger(mW) || !Number.isInteger(EW) || 0 > iW || 0 > OW || 0 > mW || 0 > EW || iW > 0xffffffffffff || OW > 4095 || mW > 1073741823 || EW > 4294967295) throw new RangeError("invalid field value");
          const NW = new Uint8Array(16);
          return NW[0] = iW / Math.pow(2, 40), NW[1] = iW / Math.pow(2, 32), NW[2] = iW / Math.pow(2, 24), NW[3] = iW / Math.pow(2, 16), NW[4] = iW / 256, NW[5] = iW, NW[6] = 112 | OW >>> 8, NW[7] = OW, NW[8] = 128 | mW >>> 24, NW[9] = mW >>> 16, NW[10] = mW >>> 8, NW[11] = mW, NW[12] = EW >>> 24, NW[13] = EW >>> 16, NW[14] = EW >>> 8, NW[15] = EW, new WW(NW)
        }
        toString() {
          let WW = "";
          for (let iW = 0; this.bytes.length > iW; iW++) WW = WW + (this.bytes[iW] >>> 4).toString(16) + (15 & this.bytes[iW]).toString(16), 3 !== iW && 5 !== iW && 7 !== iW && 9 !== iW || (WW += "-");
          if (36 !== WW.length) throw new Error("Invalid UUIDv7 was generated");
          return WW
        }
        clone() {
          return new WW(this.bytes.slice(0))
        }
        equals(WW) {
          return 0 === this.compareTo(WW)
        }
        compareTo(WW) {
          for (let iW = 0; 16 > iW; iW++) {
            const OW = this.bytes[iW] - WW.bytes[iW];
            if (0 !== OW) return Math.sign(OW)
          }
          return 0
        }
      },
      iL = class {
        generate() {
          const WW = this.generateOrAbort();
          if (!TO(WW)) return WW;
          {
            this._timestamp = 0;
            const WW = this.generateOrAbort();
            if (TO(WW)) throw new Error("Could not generate UUID after timestamp reset");
            return WW
          }
        }
        generateOrAbort() {
          const WW = (() => {
            const WW = Date.now();
            return uO(WW) && isFinite(WW) ? Math.min(Math.max(Math.floor(WW), 0), 0xffffffffffff) : 0
          })();
          if (WW > this._timestamp) this._timestamp = WW, this._resetCounter();
          else {
            if (this._timestamp >= WW + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return WL.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new mL
        }
      };
    let OL = WW => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let iW = 0; WW.length > iW; iW++) WW[iW] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return WW
    };
    Fi && !TO(Fi.crypto) && crypto.getRandomValues && (OL = WW => crypto.getRandomValues(WW));
    var mL = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (OL(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let EL;
    const NL = () => PL().toString(),
      PL = () => (EL || (EL = new iL)).generate();
    let LL = "";
    const cL = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let wL = null;
    const tL = {
      _is_supported() {
        if (!HO(wL)) return wL;
        if (wL = !1, iO) try {
          const WW = `__ph_cookie_support_${NL()}`;
          tL._set(WW, "xyz"), wL = '"xyz"' === QP(WW), tL._remove(WW)
        } catch (mW) {
          wL = !1
        }
        return wL
      },
      _error(WW) {
        pP.error("cookieStore error: " + WW)
      },
      _get: QP,
      _parse(WW) {
        let iW;
        try {
          iW = JSON.parse(tL._get(WW)) || {}
        } catch (WW) {}
        return iW
      },
      _set(WW, iW, OW, mW, EW) {
        if (!iO) return !1;
        try {
          let NW = "",
            PW = "";
          const LW = function(WW, iW) {
            if (iW) {
              let iW = function(WW) {
                let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iO;
                if (LL) return LL;
                if (!iW) return "";
                if (["localhost", "127.0.0.1"].includes(WW)) return "";
                const OW = WW.split(".");
                let mW = Math.min(OW.length, 8);
                const EW = "dmn_chk_" + NL();
                for (; !LL && mW--;) {
                  const WW = OW.slice(mW).join("."),
                    NW = EW + "=1;domain=." + WW + ";path=/";
                  iW.cookie = NW + ";max-age=3", iW.cookie.includes(EW) && (iW.cookie = NW + ";max-age=0", LL = WW)
                }
                return LL
              }(WW);
              if (!iW) {
                const OW = (WW => {
                  const iW = WW.match(cL);
                  return iW ? iW[0] : ""
                })(WW);
                OW !== iW && pP.info("Warning: cookie subdomain discovery mismatch", OW, iW), iW = OW
              }
              return iW ? "; domain=." + iW : ""
            }
            return ""
          }(iO.location.hostname, mW);
          if (OW) {
            const WW = new Date;
            WW.setTime(WW.getTime() + 864e5 * OW), NW = "; expires=" + WW.toUTCString()
          }
          EW && (PW = "; secure");
          const cW = WW + "=" + encodeURIComponent(JSON.stringify(iW)) + NW + "; SameSite=Lax; path=/" + LW + PW;
          return cW.length > 3686.4 && pP.warn("cookieStore warning: large cookie, len=" + cW.length), iO.cookie = cW, !0
        } catch (WW) {
          return !1
        }
      },
      _remove(WW, iW) {
        if ((null == iO ? void 0 : iO.cookie) && (!iW || !HO(QP(WW)))) try {
          tL._set(WW, "", -1, iW)
        } catch (WW) {
          return
        }
      }
    };
    let ZL = null;
    const xL = {
        _is_supported() {
          if (!HO(ZL)) return ZL;
          let WW = !0;
          if (TO(Fi)) WW = !1;
          else try {
            const iW = "__mplssupport__";
            xL._set(iW, "xyz"), '"xyz"' !== xL._get(iW) && (WW = !1), xL._remove(iW)
          } catch (EW) {
            WW = !1
          }
          return WW || pP.error("localStorage unsupported; falling back to cookie store"), ZL = WW, WW
        },
        _error(WW) {
          pP.error("localStorage error: " + WW)
        },
        _get(WW) {
          try {
            return null == Fi ? void 0 : Fi.localStorage.getItem(WW)
          } catch (WW) {
            xL._error(WW)
          }
          return null
        },
        _parse(WW) {
          try {
            return JSON.parse(xL._get(WW)) || {}
          } catch (WW) {}
          return null
        },
        _set(WW, iW) {
          try {
            return null == Fi || Fi.localStorage.setItem(WW, JSON.stringify(iW)), !0
          } catch (WW) {
            xL._error(WW)
          }
          return !1
        },
        _remove(WW) {
          try {
            null == Fi || Fi.localStorage.removeItem(WW)
          } catch (WW) {
            xL._error(WW)
          }
        }
      },
      lL = [bW, LW, lW, cW, kW, ZW, tW, wW, jW],
      AL = [yW, YW, FW, QW, yi, Yi, nW, ki],
      bL = WW => WW + "_cpm",
      jL = ["__proto__", "constructor", "prototype"],
      UL = WW => {
        if (!YO(WW)) return {};
        const iW = {};
        return Object.keys(WW).forEach((OW => {
          -1 === jL.indexOf(OW) && (iW[OW] = WW[OW])
        })), iW
      },
      kL = function(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const OW = {};
        return [...AL, ...iW].forEach((iW => {
          const mW = WW[iW];
          TO(mW) || HO(mW) || "" === mW || (OW[iW] = mW)
        })), OW
      },
      sL = WW => {
        let iW = 5381,
          OW = 2166136261;
        for (let mW = 0; WW.length > mW; mW++) {
          const EW = WW.charCodeAt(mW);
          iW = 33 * iW ^ EW, OW = Math.imul(OW ^ EW, 16777619)
        }
        return WW.length.toString(36) + "." + (iW >>> 0).toString(36) + "." + (OW >>> 0).toString(36)
      },
      ML = (WW, iW) => ({
        p: iW,
        f: sL(JSON.stringify(WW))
      }),
      KL = (WW, iW) => {
        if (!iW) return {
          properties: [],
          isValid: !1
        };
        try {
          const OW = tL._parse(bL(WW)),
            mW = (null == OW ? void 0 : OW.f) === sL(iW) && KO(OW.p);
          return {
            properties: mW ? OW.p : [],
            isValid: mW
          }
        } catch (WW) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      SL = (WW, iW) => iW + "|" + (tL._get(bL(WW)) || ""),
      YL = {},
      yL = {
        _is_supported: () => !0,
        _error(WW) {
          pP.error("memoryStorage error: " + WW)
        },
        _get: WW => WW in YL ? YL[WW] : null,
        _parse: WW => WW in YL ? YL[WW] : null,
        _set: (WW, iW) => (YL[WW] = iW, !0),
        _remove(WW) {
          delete YL[WW]
        }
      };
    let TL = null;
    const JL = {
      _is_supported() {
        if (!HO(TL)) return TL;
        if (TL = !0, TO(Fi)) TL = !1;
        else try {
          const WW = "__support__";
          JL._set(WW, "xyz"), '"xyz"' !== JL._get(WW) && (TL = !1), JL._remove(WW)
        } catch (mW) {
          TL = !1
        }
        return TL
      },
      _error(WW) {
        pP.error("sessionStorage error: ", WW)
      },
      _get(WW) {
        try {
          return null == Fi ? void 0 : Fi.sessionStorage.getItem(WW)
        } catch (WW) {
          JL._error(WW)
        }
        return null
      },
      _parse(WW) {
        try {
          return JSON.parse(JL._get(WW)) || null
        } catch (WW) {}
        return null
      },
      _set(WW, iW) {
        try {
          return null == Fi || Fi.sessionStorage.setItem(WW, JSON.stringify(iW)), !0
        } catch (WW) {
          JL._error(WW)
        }
        return !1
      },
      _remove(WW) {
        try {
          null == Fi || Fi.sessionStorage.removeItem(WW)
        } catch (WW) {
          JL._error(WW)
        }
      }
    };
    var hL = class {
      constructor(WW) {
        this._instance = WW
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
      optInOut(WW) {
        this.Tb._set(this._storageKey, WW ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.Tb._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: WW,
          opt_out_capturing_cookie_prefix: iW,
          consent_persistence_name: OW
        } = this._instance.config;
        return OW || (iW ? iW + WW : "__ph_opt_in_out_" + WW)
      }
      get _storedConsent() {
        const WW = this.Tb._get(this._storageKey);
        return XO(WW) ? 1 : AO(BO, WW) ? 0 : -1
      }
      get Tb() {
        const WW = this._config.opt_out_capturing_persistence_type,
          iW = "localStorage" === WW ? xL : tL,
          OW = iW._is_supported() ? iW : yL;
        if (!this._persistentStore || this._persistentStore !== OW) {
          this._persistentStore = OW;
          const iW = "localStorage" === WW ? tL : xL;
          iW._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(XO(iW._get(this._storageKey))), iW._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == WO ? void 0 : WO.doNotTrack, null == WO ? void 0 : WO.msDoNotTrack, wO.doNotTrack, null == WO ? void 0 : WO.globalPrivacyControl].some((WW => XO(WW)))
      }
    };

    function HL(WW, iW) {
      var OW;
      const mW = null == WW || null === (OW = WW.config) || void 0 === OW ? void 0 : OW.get_current_url;
      if (!SO(mW)) return iW;
      try {
        const WW = mW(iW);
        return JO(WW) && WW ? WW : iW
      } catch (WW) {
        return pP.error("Error in get_current_url, falling back to window.location.href", WW), iW
      }
    }

    function nL(WW) {
      var iW;
      return WW instanceof Element && ("__POSTHOG_TOOLBAR__" === WW.id || !!(null === (iW = WW.closest) || void 0 === iW ? void 0 : iW.call(WW, ".toolbar-global-fade-container")))
    }

    function uL(WW) {
      return !!WW && 1 === WW.nodeType
    }

    function oL(WW, iW) {
      return !!WW && !!WW.tagName && WW.tagName.toLowerCase() === iW.toLowerCase()
    }

    function dL(WW) {
      return !!WW && 3 === WW.nodeType
    }

    function eL(WW) {
      return !!WW && 11 === WW.nodeType && uL(WW.host)
    }

    function vL(WW) {
      return WW ? bO(WW).split(/\s+/) : []
    }

    function gL(WW, iW) {
      const OW = function(WW) {
        var iW;
        const OW = null == Fi || null === (iW = Fi.location) || void 0 === iW ? void 0 : iW.href;
        return TO(OW) ? void 0 : HL(WW, OW)
      }(iW);
      return !!(OW && WW && WW.some((WW => OW.match(WW))))
    }

    function DL(WW) {
      let iW = "";
      switch (typeof WW.className) {
        case "string":
          iW = WW.className;
          break;
        case "object":
          iW = (WW.className && "baseVal" in WW.className ? WW.className.baseVal : null) || WW.getAttribute("class") || "";
          break;
        default:
          iW = ""
      }
      return vL(iW)
    }

    function VL(WW) {
      return nO(WW) ? null : bO(WW).split(/(\s+)/).filter((WW => bc(WW))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function pL(WW) {
      let iW = "";
      return Pc(WW) && !Lc(WW) && WW.childNodes && WW.childNodes.length && XP(WW.childNodes, (function(WW) {
        var OW;
        dL(WW) && WW.textContent && (iW += null !== (OW = VL(WW.textContent)) && void 0 !== OW ? OW : "")
      })), bO(iW)
    }

    function fL(WW) {
      var iW;
      return TO(WW.target) ? WW.srcElement || null : (null === (iW = WW.target) || void 0 === iW ? void 0 : iW.shadowRoot) ? WW.composedPath()[0] || null : WW.target || null
    }
    const CL = ["a", "button", "form", "input", "select", "textarea", "label"];

    function XL(WW, iW) {
      const OW = WW.matches || WW.matchesSelector || WW.msMatchesSelector || WW.mozMatchesSelector || WW.webkitMatchesSelector || WW.oMatchesSelector;
      try {
        return !!OW && OW.call(WW, iW)
      } catch (WW) {
        return !1
      }
    }

    function BL(WW, iW) {
      if (TO(iW)) return !0;
      for (const OW of WW)
        if (iW.some((WW => XL(OW, WW)))) return !0;
      return !1
    }

    function qL(WW) {
      const iW = WW.parentNode;
      return !(!iW || !uL(iW)) && iW
    }
    const RL = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      GL = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      IL = [...GL, "+", "-", "\u2212", "\u2013"],
      aL = IL.length + 10,
      rL = ["button", "a", "input", "select", "textarea", "label"],
      zL = ["button", "link", "tab", "menuitem", "option"],
      FL = (WW, iW) => /[a-z0-9]/i.test(iW) ? AO(IL, iW) ? new RegExp(`\\b${iW}\\b`).test(WW) : WW.includes(iW) : WW === iW,
      QL = WW => AO(rL, WW.tagName.toLowerCase()) || AO(zL, (WW.getAttribute("role") || "").toLowerCase());

    function Wc(WW) {
      let iW = "",
        OW = "";
      const mW = WW => {
        uL(WW) && Pc(WW) && !Lc(WW) && (iW += ` ${pL(WW)}`, OW = OW || WW.getAttribute("aria-label") || "", XP(WW.childNodes, mW))
      };
      mW(WW), iW = bO(iW.replace(/\s+/g, " "));
      const EW = (bc(iW) ? iW : "").toLowerCase(),
        NW = WW.getAttribute("aria-label") || (EW ? "" : OW);
      return {
        safeText: EW,
        ariaLabel: bO(NW).toLowerCase()
      }
    }
    const ic = [".ph-no-rageclick", ".ph-no-capture"],
      Oc = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function mc(WW, iW) {
      if (!Fi || Ec(WW)) return !1;
      let OW, mW, EW;
      var NW, PW;
      if (dO(iW) ? (OW = !!iW && ic, mW = void 0, EW = !1) : (OW = null !== (NW = null == iW ? void 0 : iW.css_selector_ignorelist) && void 0 !== NW ? NW : ic, mW = null == iW ? void 0 : iW.content_ignorelist, EW = null !== (PW = null == iW ? void 0 : iW.ignore_text_selection) && void 0 !== PW && PW), !1 === OW) return !1;
      if (EW && function(WW) {
          return !(!WW || !uL(WW)) && (!!oL(WW, "textarea") || (oL(WW, "input") ? AO(Oc, (WW.getAttribute("type") || "").toLowerCase()) : function(WW) {
            var iW;
            if (WW.isContentEditable) return !0;
            const OW = null === (iW = WW.getAttribute) || void 0 === iW ? void 0 : iW.call(WW, "contenteditable");
            return "true" === OW || "" === OW
          }(WW)))
        }(WW)) return !1;
      const {
        targetElementList: LW
      } = Nc(WW, !1);
      return !(mW && function(WW, iW) {
        let OW, {
          safeText: mW,
          ariaLabel: EW
        } = iW;
        if (!0 === WW) OW = GL;
        else {
          if (!KO(WW)) return !1;
          if (WW.length > aL) return pP.error(`[PostHog] content_ignorelist array cannot exceed ${aL} items. Use css_selector_ignorelist for more complex matching.`), !1;
          OW = WW.map((WW => WW.toLowerCase()))
        }
        return OW.some((WW => FL(mW, WW) || FL(EW, WW)))
      }(mW, function(WW, iW) {
        for (const OW of iW)
          if (QL(OW)) return Wc(OW);
        for (const OW of iW) {
          try {
            if ("pointer" !== (null == Fi ? void 0 : Fi.getComputedStyle(OW).getPropertyValue("cursor"))) break
          } catch (WW) {
            break
          }
          const iW = Wc(OW);
          if (iW.safeText || iW.ariaLabel) return iW
        }
        return Wc(WW)
      }(WW, LW)) || BL(LW, OW))
    }
    const Ec = WW => !WW || oL(WW, "html") || !uL(WW),
      Nc = (WW, iW) => {
        if (!Fi || Ec(WW)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let OW = !1;
        const mW = [WW];
        let EW = WW;
        for (; EW.parentNode && !oL(EW, "body");) {
          if (eL(EW.parentNode)) {
            mW.push(EW.parentNode.host), EW = EW.parentNode.host;
            continue
          }
          const NW = qL(EW);
          if (!NW) break;
          if (iW || CL.indexOf(NW.tagName.toLowerCase()) > -1) OW = !0;
          else try {
            const WW = Fi.getComputedStyle(NW);
            WW && "pointer" === WW.getPropertyValue("cursor") && (OW = !0)
          } catch (WW) {}
          mW.push(NW), EW = NW
        }
        return {
          parentIsUsefulElement: OW,
          targetElementList: mW
        }
      };

    function Pc(WW) {
      const iW = new Set;
      let OW = 0;
      for (let NW = WW; NW.parentNode && !oL(NW, "body"); NW = NW.parentNode) {
        if (OW++ >= 1e3 || iW.has(NW)) return !1;
        iW.add(NW);
        const WW = DL(NW);
        if (AO(WW, "ph-sensitive") || AO(WW, "ph-no-capture")) return !1
      }
      if (AO(DL(WW), "ph-include")) return !0;
      const mW = WW.type || "";
      if (JO(mW)) switch (mW.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const EW = WW.name || WW.id || "";
      return !JO(EW) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(EW.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Lc(WW) {
      return !!(oL(WW, "input") && !["button", "checkbox", "submit", "reset"].includes(WW.type) || oL(WW, "select") || oL(WW, "textarea") || "true" === WW.getAttribute("contenteditable"))
    }
    const cc = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      wc = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      tc = [16, 15, 14, 13],
      Zc = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      xc = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      lc = /[0-9A-Za-z_]/;

    function Ac(WW) {
      let iW = 0,
        OW = !1;
      for (let mW = WW.length - 1; mW >= 0; mW--) {
        let EW = WW.charCodeAt(mW) - 48;
        OW && (EW *= 2, EW > 9 && (EW -= 9)), iW += EW, OW = !OW
      }
      return iW % 10 == 0
    }

    function bc(WW) {
      let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (nO(WW)) return !1;
      if (JO(WW)) {
        if (WW = bO(WW), iW ? cc.test((WW || "").replace(/[- ]/g, "")) : function(WW) {
            let iW;
            for (wc.lastIndex = 0; iW = wc.exec(WW);) {
              const WW = iW[2];
              if (!WW) continue;
              const OW = WW.replace(/[- ]/g, "");
              for (let iW = 0; OW.length > iW; iW++)
                for (const WW of tc) {
                  const mW = iW + WW;
                  if (OW.length >= mW) {
                    const WW = OW.slice(iW, mW);
                    if (cc.test(WW) && Ac(WW)) return !0
                  }
                }
            }
            return !1
          }(WW)) return !1;
        if (iW ? Zc.test(WW) : function(WW) {
            let iW;
            for (xc.lastIndex = 0; iW = xc.exec(WW);) {
              const WW = iW[1],
                OW = iW[3];
              if (!(WW && OW && lc.test(WW) && lc.test(OW))) return !0
            }
            return !1
          }(WW)) return !1
      }
      return !0
    }

    function jc(WW) {
      let iW = pL(WW);
      return iW = `${iW} ${Uc(WW)}`.trim(), bc(iW) ? iW : ""
    }

    function Uc(WW) {
      let iW = "";
      return WW && WW.childNodes && WW.childNodes.length && XP(WW.childNodes, (function(WW) {
        var OW;
        if (WW && "span" === (null === (OW = WW.tagName) || void 0 === OW ? void 0 : OW.toLowerCase())) try {
          const OW = pL(WW);
          iW = `${iW} ${OW}`.trim(), WW.childNodes && WW.childNodes.length && (iW = `${iW} ${Uc(WW)}`.trim())
        } catch (WW) {
          pP.error("[AutoCapture]", WW)
        }
      })), iW
    }

    function kc(WW) {
      return WW.replace(/"|\\"/g, '\\"')
    }

    function sc(WW) {
      const iW = WW.attr__class;
      if (iW) return KO(iW) ? iW : vL(iW)
    }
    const Mc = fP("[Dead Clicks]"),
      Kc = () => !0,
      Sc = WW => {
        var iW;
        const OW = !!(null === (iW = WW.instance.persistence) || void 0 === iW ? void 0 : iW.get_property(fW)),
          mW = WW.instance.config.capture_dead_clicks;
        return dO(mW) ? mW : !!YO(mW) || OW
      };
    var Yc = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(WW, iW, OW) {
        this.instance = WW, this.isEnabled = iW, this.onCapture = OW, this.startIfEnabledOrStop()
      }
      onRemoteConfig(WW) {
        if (!WW.ok) return;
        const iW = WW.config;
        "captureDeadClicks" in iW && (this.instance.persistence && this.instance.persistence.register({
          [fW]: iW.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(WW) {
        var iW, OW, mW;
        (null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.initDeadClicksAutocapture) ? WW(): null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this.instance, "dead-clicks-autocapture", (iW => {
          iW ? Mc.error("failed to load script", iW) : WW()
        }))
      }
      _start() {
        var WW;
        if (iO) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (WW = wO.__PosthogExtensions__) || void 0 === WW ? void 0 : WW.initDeadClicksAutocapture)) {
            const WW = YO(this.instance.config.capture_dead_clicks) ? KE({}, this.instance.config.capture_dead_clicks) : {};
            WW.__onCapture = this.onCapture, this.onCapture && (WW.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = wO.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, WW), this._lazyLoadedDeadClicksAutocapture.start(iO), Mc.info("starting...")
          }
        } else Mc.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Mc.info("stopping..."))
      }
    };
    const yc = fP("[SegmentIntegration]");

    function Tc(WW, iW) {
      let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const mW = WW.config.segment;
      if (!mW) return iW();
      const {
        analytics: EW,
        filterProperties: NW
      } = (WW => SO(WW.register))(PW = mW) ? {
        analytics: PW
      } : PW;
      var PW;
      ! function(WW, iW, OW, mW) {
        const EW = iW => {
            const EW = () => iW.anonymousId() || NL();
            WW.config.get_device_id = EW, mW && iW.id() && (WW.register({
              distinct_id: iW.id(),
              $device_id: EW()
            }), WW.persistence.set_property(ki, qi)), OW(mW ? void 0 : iW.anonymousId() || void 0)
          },
          NW = iW.user();
        "then" in NW && SO(NW.then) ? NW.then(EW) : EW(NW)
      }(WW, EW, (OW => {
        EW.register(function(WW, iW) {
          let {
            filterProperties: OW
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || yc.warn("This browser does not have Promise support, and can not use the segment integration");
          const mW = (mW, EW) => {
            if (!EW) return mW;
            const NW = !!iW && mW.event.anonymousId === iW && !mW.event.userId;
            NW || mW.event.userId || mW.event.anonymousId === WW.get_distinct_id() || (yc.info("No userId set, resetting PostHog"), WW.reset()), NW || (iW = void 0), mW.event.userId && mW.event.userId !== WW.get_distinct_id() && (yc.info("UserId set, identifying with PostHog"), WW.identify(mW.event.userId));
            let PW = WW.calculateEventProperties(EW, mW.event.properties);
            if (!nO(OW)) {
              const WW = mW.event.properties || {},
                iW = {};
              for (const OW of Object.keys(PW)) sO.call(WW, OW) || (iW[OW] = PW[OW]);
              const EW = ((WW, iW) => {
                const OW = KO(WW) ? WW : [WW];
                let mW = KE({}, iW);
                for (const EW of OW) try {
                  if (mW = EW(mW), nO(mW)) return null
                } catch (WW) {
                  return yc.error("Error in Segment filterProperties:", WW), null
                }
                return mW
              })(OW, iW);
              if (nO(EW)) return mW;
              PW = EW
            }
            return mW.event.properties = Object.assign({}, PW, mW.event.properties), mW
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: WW => mW(WW, WW.event.event),
            page: WW => mW(WW, Ii),
            identify: WW => mW(WW, ri),
            screen: WW => mW(WW, "$screen")
          }
        }(WW, OW, {
          filterProperties: NW
        })).then((() => {
          iW()
        }), (WW => {
          yc.error("Failed to register the Segment integration", WW), iW()
        }))
      }), OW)
    }
    const Jc = "posthog-js";

    function hc(WW) {
      let {
        organization: iW,
        projectId: OW,
        prefix: mW,
        severityAllowList: EW = ["error"],
        sendExceptionsToPostHog: NW = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return PW => {
        var LW, cW, wW, tW, ZW;
        if ("*" !== EW && !EW.includes(PW.level) || !WW.__loaded) return PW;
        PW.tags || (PW.tags = {});
        const xW = WW.requestRouter.endpointFor("ui", `/project/${WW.config.token}/person/${WW.get_distinct_id()}`);
        PW.tags["PostHog Person URL"] = xW, WW.sessionRecordingStarted() && (PW.tags["PostHog Recording URL"] = WW.get_session_replay_url({
          withTimestamp: !0
        }));
        const lW = (null === (LW = PW.exception) || void 0 === LW ? void 0 : LW.values) || [],
          AW = lW.map((WW => KE(KE({}, WW), {}, {
            stacktrace: WW.stacktrace ? KE(KE({}, WW.stacktrace), {}, {
              type: "raw",
              frames: (WW.stacktrace.frames || []).map((WW => KE(KE({}, WW), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          bW = {
            $exception_message: (null === (cW = lW[0]) || void 0 === cW ? void 0 : cW.value) || PW.message,
            $exception_type: null === (wW = lW[0]) || void 0 === wW ? void 0 : wW.type,
            $exception_level: PW.level,
            $exception_list: AW,
            $sentry_event_id: PW.event_id,
            $sentry_exception: PW.exception,
            $sentry_exception_message: (null === (tW = lW[0]) || void 0 === tW ? void 0 : tW.value) || PW.message,
            $sentry_exception_type: null === (ZW = lW[0]) || void 0 === ZW ? void 0 : ZW.type,
            $sentry_tags: PW.tags
          };
        var jW;
        return iW && OW && (bW.$sentry_url = (mW || "https://sentry.io/organizations/") + iW + "/issues/?project=" + OW + "&query=" + PW.event_id), NW && (null === (jW = WW.exceptions) || void 0 === jW || jW.sendExceptionEvent(bW)), PW
      }
    }
    var Hc = class {
        constructor(WW, iW, OW, mW, EW, NW) {
          this.name = Jc, this.setupOnce = function(PW) {
            PW(hc(WW, {
              organization: iW,
              projectId: OW,
              prefix: mW,
              severityAllowList: EW,
              sendExceptionsToPostHog: null == NW || NW
            }))
          }
        }
      },
      nc = class {
        constructor(WW) {
          this._onSessionIdChange = (WW, iW, OW) => {
            OW && (OW.noSessionId || OW.activityTimeout || OW.sessionPastMaximumLength || OW.crossTabAdoption) && (pP.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: WW,
              changeReason: OW
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = WW, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var WW;
          this._unsubscribeSessionId = null === (WW = this._instance.sessionManager) || void 0 === WW ? void 0 : WW.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var WW;
          null === (WW = this._unsubscribeSessionId) || void 0 === WW || WW.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(WW, iW) {
          var OW;
          const mW = this._previousPageViewProperties(WW, iW);
          return this._currentPageview = {
            pathname: null !== (OW = null == Fi ? void 0 : Fi.location.pathname) && void 0 !== OW ? OW : "",
            pageViewId: iW,
            timestamp: WW
          }, this._instance.scrollManager.resetContext(), mW
        }
        doPageLeave(WW) {
          var iW;
          return this._previousPageViewProperties(WW, null === (iW = this._currentPageview) || void 0 === iW ? void 0 : iW.pageViewId)
        }
        doEvent() {
          var WW;
          return {
            $pageview_id: null === (WW = this._currentPageview) || void 0 === WW ? void 0 : WW.pageViewId
          }
        }
        _previousPageViewProperties(WW, iW) {
          const OW = this._currentPageview;
          if (!OW) return {
            $pageview_id: iW
          };
          let mW = {
            $pageview_id: iW,
            $prev_pageview_id: OW.pageViewId
          };
          const EW = this._instance.scrollManager.getContext();
          if (EW && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: WW,
              lastScrollY: iW,
              maxScrollY: OW,
              maxContentHeight: NW,
              lastContentY: PW,
              maxContentY: LW
            } = EW;
            if (!(TO(WW) || TO(iW) || TO(OW) || TO(NW) || TO(PW) || TO(LW))) {
              WW = Math.ceil(WW), iW = Math.ceil(iW), OW = Math.ceil(OW), NW = Math.ceil(NW), PW = Math.ceil(PW), LW = Math.ceil(LW);
              const EW = WW > 1 ? rO(iW / WW, 0, 1, pP) : 1,
                cW = WW > 1 ? rO(OW / WW, 0, 1, pP) : 1,
                wW = NW > 1 ? rO(PW / NW, 0, 1, pP) : 1,
                tW = NW > 1 ? rO(LW / NW, 0, 1, pP) : 1;
              mW = BP(mW, {
                $prev_pageview_last_scroll: iW,
                $prev_pageview_last_scroll_percentage: EW,
                $prev_pageview_max_scroll: OW,
                $prev_pageview_max_scroll_percentage: cW,
                $prev_pageview_last_content: PW,
                $prev_pageview_last_content_percentage: wW,
                $prev_pageview_max_content: LW,
                $prev_pageview_max_content_percentage: tW
              })
            }
          }
          return OW.pathname && (mW.$prev_pageview_pathname = OW.pathname), OW.timestamp && (mW.$prev_pageview_duration = (WW.getTime() - OW.timestamp.getTime()) / 1e3), mW
        }
      };
    const uc = ["flags", "surveys"],
      oc = {
        [SW]: {
          exposure: "hidden"
        },
        [JW]: {
          exposure: "hidden"
        },
        [hW]: {
          exposure: "hidden"
        },
        [dW]: {
          exposure: "hidden"
        },
        [nW]: {
          exposure: "hidden"
        },
        [oW]: {
          exposure: "hidden"
        },
        [eW]: {
          exposure: "event"
        },
        [vW]: {
          exposure: "hidden"
        },
        [XW]: {
          exposure: "hidden"
        },
        [gW]: {
          exposure: "event"
        },
        [DW]: {
          exposure: "hidden"
        },
        [VW]: {
          exposure: "event"
        },
        [pW]: {
          exposure: "event"
        },
        [fW]: {
          exposure: "event"
        },
        [CW]: {
          exposure: "hidden"
        },
        [BW]: {
          exposure: "event"
        },
        [qW]: {
          exposure: "hidden"
        },
        [RW]: {
          exposure: "hidden"
        },
        [FW]: {
          exposure: "hidden"
        },
        [QW]: {
          exposure: "event"
        },
        [GW]: {
          exposure: "event",
          shouldSkipFromEventProperties: WW => HO(WW)
        },
        [Wi]: {
          exposure: "event"
        },
        [ii]: {
          exposure: "event"
        },
        [Oi]: {
          exposure: "event"
        },
        [mi]: {
          exposure: "event"
        },
        [Ei]: {
          exposure: "hidden"
        },
        [lW]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [LW]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [PW]: {
          exposure: "hidden"
        },
        [cW]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [kW]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [ZW]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [xW]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [sW]: {
          exposure: "hidden"
        },
        [MW]: {
          exposure: "hidden"
        },
        [bW]: {
          exposure: "hidden"
        },
        [AW]: {
          exposure: "hidden"
        },
        [Pi]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [Li]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [ci]: {
          exposure: "event"
        },
        [wi]: {
          exposure: "hidden"
        },
        [ti]: {
          exposure: "hidden"
        },
        [Zi]: {
          exposure: "hidden"
        },
        [xi]: {
          exposure: "hidden"
        },
        [li]: {
          exposure: "hidden"
        },
        [Ai]: {
          exposure: "event"
        },
        [bi]: {
          exposure: "event"
        },
        [ji]: {
          exposure: "event"
        },
        [Ui]: {
          exposure: "event"
        },
        [jW]: {
          exposure: "hidden"
        },
        [UW]: {
          exposure: "hidden"
        },
        [Ni]: {
          exposure: "event"
        },
        [wW]: {
          exposure: "hidden"
        },
        [tW]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [ki]: {
          exposure: "hidden"
        },
        [si]: {
          exposure: "hidden"
        },
        [Mi]: {
          exposure: "hidden"
        },
        [Ki]: {
          exposure: "hidden"
        },
        [Si]: {
          exposure: "hidden"
        },
        [Yi]: {
          exposure: "hidden"
        },
        [yi]: {
          exposure: "hidden"
        },
        [IW]: {
          exposure: "event"
        },
        [aW]: {
          exposure: "event"
        },
        [rW]: {
          exposure: "event"
        },
        [zW]: {
          exposure: "event"
        },
        [Hi]: {
          exposure: "event"
        },
        [ni]: {
          exposure: "event"
        },
        [ui]: {
          exposure: "hidden"
        },
        [oi]: {
          exposure: "hidden"
        },
        [di]: {
          exposure: "hidden"
        },
        [ei]: {
          exposure: "hidden"
        },
        [vi]: {
          exposure: "hidden"
        },
        [gi]: {
          exposure: "hidden"
        },
        [Di]: {
          exposure: "hidden"
        },
        [Vi]: {
          exposure: "hidden"
        },
        [fi]: {
          exposure: "hidden"
        },
        [Ci]: {
          exposure: "event"
        }
      },
      dc = [
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
      ec = WW => {
        const iW = oc[WW];
        if (iW) return iW;
        for (const [OW, mW] of dc)
          if (0 === WW.indexOf(OW)) return mW
      };

    function vc() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (mW) {
        return
      }
    }
    const gc = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (mW) {
          return !1
        }
      },
      Dc = (WW, iW) => WW >= iW && gc(),
      Vc = (WW, iW, OW, mW) => {
        if (0 === WW) {
          if (gc()) {
            const WW = iW + 1;
            return WW === OW && mW(), WW
          }
          return iW
        }
        return 0
      },
      pc = (WW, iW) => {
        try {
          let OW;
          return JSON.stringify(WW, ((WW, iW) => {
            var mW;
            return VO(iW) ? (null !== (mW = OW) && void 0 !== mW || (OW = new WeakMap), OW.has(iW) || OW.set(iW, IP(iW)), OW.get(iW)) : "bigint" == typeof iW ? iW.toString() : iW
          }), iW)
        } catch (iW) {
          return UO(WW)
        }
      },
      fc = WW => {
        const iW = null == iO ? void 0 : iO.createElement("a");
        return TO(iW) ? null : (iW.href = WW, iW)
      },
      Cc = function(WW, iW) {
        const OW = ((WW.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let mW;
        for (let EW = 0; OW.length > EW; EW++) {
          const WW = OW[EW].split("=");
          if (WW[0] === iW) {
            mW = WW;
            break
          }
        }
        if (!KO(mW) || 2 > mW.length) return "";
        {
          let WW = mW[1];
          try {
            WW = decodeURIComponent(WW)
          } catch (iW) {
            pP.error("Skipping decoding for malformed query param: " + WW)
          }
          return WW.replace(/\+/g, " ")
        }
      },
      Xc = function(WW, iW, OW) {
        if (!WW || !iW || !iW.length) return WW;
        const mW = WW.split("#"),
          EW = mW[1],
          NW = (mW[0] || "").split("?"),
          PW = NW[1],
          LW = NW[0],
          cW = (PW || "").split("&"),
          wW = [];
        for (let ZW = 0; cW.length > ZW; ZW++) {
          const WW = cW[ZW].split("=");
          KO(WW) && (iW.includes(WW[0]) ? wW.push(WW[0] + "=" + OW) : wW.push(cW[ZW]))
        }
        let tW = LW;
        return null != PW && (tW += "?" + wW.join("&")), null != EW && (tW += "#" + EW), tW
      },
      Bc = function(WW, iW) {
        const OW = WW.match(new RegExp(iW + "=([^&]*)"));
        return OW ? OW[1] : null
      },
      qc = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      Rc = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...qc],
      Gc = "<masked>",
      Ic = ["li_fat_id"];

    function ac(WW, iW, OW) {
      if (!iO) return {};
      const mW = iW ? [...qc, ...OW || []] : [],
        EW = rc(Xc(iO.URL, mW, Gc), WW),
        NW = function() {
          const WW = {};
          return XP(Ic, (function(iW) {
            const OW = QP(iW);
            WW[iW] = OW || null
          })), WW
        }();
      return BP(NW, EW)
    }

    function rc(WW, iW) {
      const OW = Rc.concat(iW || []),
        mW = {};
      return XP(OW, (function(iW) {
        const OW = Cc(WW, iW);
        mW[iW] = OW || null
      })), mW
    }

    function zc(WW) {
      const iW = function(WW) {
          return WW ? 0 === WW.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === WW.search("https?://(.*)bing.com") ? "bing" : 0 === WW.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === WW.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(WW),
        OW = "yahoo" != iW ? "q" : "p",
        mW = {};
      if (!HO(iW)) {
        mW.$search_engine = iW;
        const WW = iO ? Cc(iO.referrer, OW) : "";
        WW.length && (mW.ph_keyword = WW)
      }
      return mW
    }

    function Fc() {
      return navigator.language || navigator.userLanguage
    }

    function Qc() {
      const WW = Fc();
      return "string" == typeof WW ? WW.split("-")[0] : void 0
    }
    const Ww = "$direct";

    function iw() {
      return (null == iO ? void 0 : iO.referrer) || Ww
    }

    function Ow(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const mW = WW ? [...qc, ...iW || []] : [],
        EW = OW ? lE(null == OO ? void 0 : OO.href) : null == OO ? void 0 : OO.href,
        NW = null == EW ? void 0 : EW.substring(0, 1e3);
      return {
        r: iw().substring(0, 1e3),
        u: NW ? Xc(NW, mW, Gc) : void 0
      }
    }

    function mw(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var OW;
      const {
        r: mW,
        u: EW
      } = WW, NW = iW ? lE(EW) : EW, PW = {
        $referrer: mW,
        $referring_domain: null == mW ? void 0 : mW == Ww ? Ww : null === (OW = fc(mW)) || void 0 === OW ? void 0 : OW.host
      };
      if (NW) {
        PW.$current_url = NW;
        const WW = fc(NW);
        PW.$host = null == WW ? void 0 : WW.host, PW.$pathname = null == WW ? void 0 : WW.pathname;
        const iW = rc(NW);
        BP(PW, iW)
      }
      if (mW) {
        const WW = zc(mW);
        BP(PW, WW)
      }
      return PW
    }

    function Ew() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (mW) {
        return
      }
    }
    const Nw = {
        flags: tW,
        surveys: Li
      },
      Pw = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      Lw = WW => `${WW}_cookie_identity_change_pending`,
      ww = WW => {
        let iW = "",
          OW = 0;
        for (const mW of WW) {
          const WW = encodeURIComponent(JSON.stringify(mW).slice(1, -1)).length;
          if (OW + WW > 1e3) break;
          iW += mW, OW += WW
        }
        return iW
      },
      tw = "main",
      Zw = [lW, LW, cW, kW, ZW, tW, xW, bW],
      xw = WW => -1 !== Zw.indexOf(WW),
      lw = [nW, oW],
      Aw = WW => -1 !== lw.indexOf(WW),
      bw = (WW, iW) => {
        try {
          return JSON.stringify(WW) === JSON.stringify(iW)
        } catch (NW) {
          return WW === iW
        }
      },
      jw = WW => {
        if (!WW) return {};
        const iW = JSON.parse(WW);
        return YO(iW) ? iW : {}
      },
      Uw = (WW, iW) => {
        XP(WW, ((OW, mW) => {
          const EW = ec(mW);
          EW && "event" !== EW.exposure || {}.hasOwnProperty.call(iW, mW) || delete WW[mW]
        }))
      };
    var kw = class {
      constructor(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !WW.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = WW, this._ownsSplitStorage = OW, this.props = {}, this._campaign_params_url = void 0, this._name = (WW => {
            let iW = "";
            return WW.token && (iW = WW.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), WW.persistence_name ? "ph_" + WW.persistence_name : "ph_" + iW + "_posthog"
          })(WW), this._disabled = WW.disable_persistence || !!iW, this.Tb = this._buildStorage(WW), this._splitStorage = this._resolveSplitStorage(WW), this.load(mW), this._markLoadedCrossTabFeatureFlagChangesPending(), WW.debug && pP.info("Persistence loaded", WW.persistence, KE({}, this.props)), this.update_config(WW, WW, iW), this.save(), Fi) {
          const WW = () => this.flush();
          zP(Fi, "beforeunload", WW, {
            capture: !1
          }), zP(Fi, "pagehide", WW, {
            capture: !1
          }), this._onStorage = WW => {
            if (this._splitStorageEligible && (!WW.storageArea || WW.storageArea === (null == Fi ? void 0 : Fi.localStorage)) && WW.key)
              if (WW.key !== this._name) {
                if (this._splitStorage) {
                  const iW = uc.find((iW => WW.key === this._groupEntryName(iW)));
                  iW && this._syncCrossTabFeatureFlagProperties(WW.key, iW)
                }
              } else this._syncCrossTabFeatureFlagProperties(WW.key, tw)
          }, zP(Fi, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(WW) {
        Object.entries(WW).forEach((WW => {
          let [iW, OW] = WW;
          const mW = this._pendingCrossTabFeatureFlagChanges.get(iW);
          if (!xw(iW) || !0 === mW) return;
          if (!0 === OW) return void this._setCrossTabFeatureFlagChangesPending(iW, !0);
          const EW = new Set(mW || []);
          OW.forEach((WW => EW.add(WW))), EW.size && this._setCrossTabFeatureFlagChangesPending(iW, EW)
        }))
      }
      onCrossTabFeatureFlagChange(WW) {
        return this._crossTabFeatureFlagHandlers.add(WW), () => this._crossTabFeatureFlagHandlers.delete(WW)
      }
      destroy() {
        this._onStorage && Fi && (Fi.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(WW, iW) {
        let OW, mW, EW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (mW = xL._get(WW), HO(mW)) {
            const WW = this._slotWriteState(iW);
            return WW.storageValue = null, iW !== tw && (WW.persisted = !1), !1
          }
          OW = jw(mW)
        } catch (WW) {
          return !1
        }
        const NW = iW === tw ? OW : xL._parse(this._name);
        if (NW && this._hasCrossTabFeatureFlagIdentityMismatch(NW)) return !1;
        const PW = this._mergeCrossTabFeatureFlagProperties(OW, iW, EW);
        return iW === tw && this._splitStorage && !bw(this._partitionProps().main, OW) || this._rememberCrossTabStorageFingerprint(OW, iW, !0, mW), PW
      }
      _hasCrossTabFeatureFlagIdentityMismatch(WW) {
        const iW = this.props[YW],
          OW = WW[YW];
        return !TO(iW) && !TO(OW) && iW !== OW
      }
      _rememberCrossTabStorageFingerprint(WW, iW, OW, mW) {
        const EW = this._slotWriteState(iW);
        EW.storageValue = mW, iW !== tw && (EW.persisted = OW);
        try {
          EW.fingerprint = this._entryFingerprint(WW, iW)
        } catch (WW) {
          EW.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(WW, iW, OW) {
        let mW = !1;
        return Zw.forEach((OW => {
          var EW;
          const NW = null === (EW = ec(OW)) || void 0 === EW ? void 0 : EW.storageGroup;
          if (iW === tw && this._splitStorage && NW || iW !== tw && NW !== iW) return;
          const PW = OW in WW,
            LW = this._mergePendingCrossTabFeatureFlagChanges(OW, PW ? WW[OW] : void 0),
            cW = this._pendingCrossTabFeatureFlagChanges.has(OW) ? OW in this.props : PW;
          cW === OW in this.props && bw(LW, this.props[OW]) || (cW ? this._setProp(OW, LW, !1) : this._deleteProp(OW, !1), mW = !0)
        })), mW && OW && this._crossTabFeatureFlagHandlers.forEach((WW => WW())), mW
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const WW = xL._get(this._name),
            iW = this._slotWriteState(tw);
          let OW, mW = !1,
            EW = !1;
          if (WW !== iW.storageValue)
            if (HO(WW)) iW.storageValue = null;
            else {
              if (OW = jw(WW), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(OW), this._crossTabFeatureFlagIdentityMismatch) return !1;
              EW = this._mergeCrossTabFeatureFlagProperties(OW, tw, !1), !this._splitStorage || bw(this._partitionProps().main, OW) ? this._rememberCrossTabStorageFingerprint(OW, tw, !0, WW) : iW.storageValue = WW, mW = !0
            } return this._splitStorage && uc.forEach((WW => {
            const iW = xL._get(this._groupEntryName(WW)),
              NW = this._slotWriteState(WW),
              PW = OW || {},
              LW = mW && Zw.some((iW => {
                var OW;
                return (null === (OW = ec(iW)) || void 0 === OW ? void 0 : OW.storageGroup) === WW && iW in PW
              }));
            if (iW === NW.storageValue && !LW) return;
            if (HO(iW)) return NW.storageValue = null, NW.persisted = !1, void(LW && (EW = this._mergeCrossTabFeatureFlagProperties(PW, WW, !1) || EW));
            const cW = jw(iW);
            EW = this._mergeCrossTabFeatureFlagProperties(cW, WW, !1) || EW, this._rememberCrossTabStorageFingerprint(cW, WW, !0, iW)
          })), EW
        } catch (mW) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(WW, iW) {
        this._pendingCrossTabFeatureFlagChanges.set(WW, iW);
        const OW = ec(WW);
        (null == OW ? void 0 : OW.volatile) || (this._slotWriteState((this._splitStorage ? null == OW ? void 0 : OW.storageGroup : void 0) || tw).fingerprint = void 0, this._markGroupDirty(WW))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        Zw.forEach((WW => this._pendingCrossTabFeatureFlagChanges.set(WW, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const WW = xL._get(this._name),
            iW = jw(WW);
          this._slotWriteState(tw).storageValue = WW, Zw.forEach((WW => {
            var OW;
            const mW = this._splitStorage ? null === (OW = ec(WW)) || void 0 === OW ? void 0 : OW.storageGroup : void 0,
              EW = mW ? xL._get(this._groupEntryName(mW)) : null;
            if (mW) {
              const WW = this._slotWriteState(mW);
              WW.storageValue = EW, WW.persisted = !HO(EW)
            }
            const NW = mW && !HO(EW) ? jw(EW) : iW;
            WW in this.props ? this._markPendingCrossTabFeatureFlagChanges(WW, NW[WW], this.props[WW]) : WW in NW && this._setCrossTabFeatureFlagChangesPending(WW, !0)
          }))
        } catch (mW) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(WW, iW) {
        const OW = this._pendingCrossTabFeatureFlagChanges.get(WW);
        if (!OW) return iW;
        if (!0 === OW) return this.props[WW];
        if ("$active_feature_flags" === WW) {
          const mW = new Set(KO(iW) ? iW : []),
            EW = new Set(KO(this.props[WW]) ? this.props[WW] : []);
          return OW.forEach((WW => EW.has(WW) ? mW.add(WW) : mW.delete(WW))), Array.from(mW)
        }
        const mW = YO(iW) ? KE({}, iW) : {},
          EW = YO(this.props[WW]) ? this.props[WW] : {};
        return OW.forEach((WW => {
          WW in EW ? mW[WW] = EW[WW] : delete mW[WW]
        })), mW
      }
      _markPendingCrossTabFeatureFlagChanges(WW, iW, OW) {
        if (!xw(WW)) return;
        const mW = this._pendingCrossTabFeatureFlagChanges.get(WW);
        if (!0 === mW) return;
        let EW = iW;
        if (this._splitStorageEligible) try {
          var NW;
          const iW = this._splitStorage ? null === (NW = ec(WW)) || void 0 === NW ? void 0 : NW.storageGroup : void 0,
            OW = iW ? this._groupEntryName(iW) : this._name;
          EW = jw(xL._get(OW))[WW]
        } catch (WW) {}
        const PW = new Set(mW || []);
        if ("$active_feature_flags" === WW) {
          if (!TO(iW) && !KO(iW) || !TO(EW) && !KO(EW) || !KO(OW)) return void this._setCrossTabFeatureFlagChangesPending(WW, !0);
          const mW = new Set(iW || []),
            NW = new Set(EW || []),
            LW = new Set(OW);
          new Set([...mW, ...LW]).forEach((WW => {
            mW.has(WW) !== LW.has(WW) && PW.add(WW)
          })), PW.forEach((WW => {
            NW.has(WW) === LW.has(WW) && PW.delete(WW)
          }))
        } else {
          if (!YO(OW)) return void(bw(EW, OW) ? this._pendingCrossTabFeatureFlagChanges.delete(WW) : this._setCrossTabFeatureFlagChangesPending(WW, !0));
          {
            if (!TO(iW) && !YO(iW) || TO(iW) && yO(OW) && TO(EW)) return void this._setCrossTabFeatureFlagChangesPending(WW, !0);
            const mW = YO(iW) ? iW : {},
              NW = YO(EW) ? EW : {};
            new Set([...Object.keys(mW), ...Object.keys(OW)]).forEach((WW => {
              WW in mW == WW in OW && bw(mW[WW], OW[WW]) || PW.add(WW)
            })), PW.forEach((WW => {
              WW in NW == WW in OW && bw(NW[WW], OW[WW]) && PW.delete(WW)
            }))
          }
        }
        PW.size ? this._setCrossTabFeatureFlagChangesPending(WW, PW) : this._pendingCrossTabFeatureFlagChanges.delete(WW)
      }
      _saveDebounceMs() {
        var WW;
        const iW = null === (WW = this._config) || void 0 === WW ? void 0 : WW.persistence_save_debounce_ms;
        return uO(iW) && iW > 0 ? iW : 0
      }
      _rememberCurrentCookieProperties(WW) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (WW) try {
            const iW = kL(WW, this._config.cookie_persisted_properties || []),
              OW = ML(iW, this._config.cookie_persisted_properties || []),
              mW = JSON.stringify(iW) + "|" + JSON.stringify(OW),
              EW = tL._get(this._name) || void 0;
            EW && SL(this._name, EW) === mW && (this._lastSeenCookiePropertiesFingerprint = mW, this._lastSeenMainCookieValue = EW)
          } catch (WW) {} else try {
            const WW = tL._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = WW ? SL(this._name, WW) : void 0, this._lastSeenMainCookieValue = WW
          } catch (WW) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(WW) {
        let iW, OW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !OW || this._cookieSyncSuppressed || !WW.cookieWinsOnConflict || "localstorage+cookie" !== WW.persistence.toLowerCase()) return !1;
        try {
          iW = tL._get(this._name) || void 0
        } catch (WW) {}
        if (!iW || iW === this._lastSeenMainCookieValue) return !1;
        const mW = SL(this._name, iW);
        let EW;
        try {
          EW = UL(JSON.parse(iW))
        } catch (WW) {
          return !1
        }
        if ((tL._get(this._name) || void 0) !== iW) return !1;
        this._lastSeenCookiePropertiesFingerprint = mW, this._lastSeenMainCookieValue = iW;
        const NW = KL(this._name, iW),
          PW = [...AL, ...NW.properties],
          xW = {};
        if (Object.keys(EW).forEach((WW => {
            const iW = EW[WW];
            (TO(iW) || HO(iW) || "" === iW || "$user_state" === WW && "anonymous" !== iW && "identified" !== iW) && (xW[WW] = !0, delete EW[WW])
          })), yO(EW)) return !1;
        const UW = "distinct_id" in EW || "anonymous" === EW.$user_state || "identified" === EW.$user_state,
          sW = this.props,
          MW = sW[YW],
          KW = sW[ki],
          SW = BP({}, sW);
        [...AL, ...WW.cookie_persisted_properties || []].forEach((WW => {
          if (-1 !== PW.indexOf(WW) && !(WW in EW) && !xW[WW] && (UW || "distinct_id" !== WW && "$user_state" !== WW)) {
            const iW = SW[WW];
            (NW.isValid || -1 === AL.indexOf(WW) || !1 !== iW && 0 !== iW) && delete SW[WW]
          }
        })), this.props = BP(SW, EW), Zw.forEach((WW => {
          const iW = WW in this.props;
          WW in sW === iW && bw(sW[WW], this.props[WW]) || (iW ? this._markPendingCrossTabFeatureFlagChanges(WW, sW[WW], this.props[WW]) : this._setCrossTabFeatureFlagChangesPending(WW, !0))
        })), !UW || "$user_state" in EW || "$user_state" in this.props || this._setProp(ki, Bi);
        const yW = this.props[YW],
          TW = this.props[ki];
        return !UW || yW === MW && TW === KW || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, JL._set(Lw(this._name), !0), this._deleteProp(bW), this._deleteProp(LW), this._deleteProp(lW), this._deleteProp(cW), this._deleteProp(kW), this._deleteProp(ZW), this._deleteProp(tW), this._deleteProp(wW), this._deleteProp(jW), "anonymous" !== TW || "identified" !== KW && "anonymous" !== EW.$user_state && (TO(MW) || yW === MW) || (Uw(this.props, EW), this._deleteProp(AW)), "identified" === TW ? this.props.$user_id = yW : delete this.props.$user_id, this._deleteProp(JW)), !0
      }
      consumeCookieIdentityChange() {
        const WW = Lw(this._name),
          iW = this._cookieIdentityChangePending || !!JL._get(WW);
        return this._cookieIdentityChangePending = !1, iW && JL._remove(WW), iW
      }
      _beginCookieSyncSuppression() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !WW || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (TO(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[tw], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          WW ? this._publishSuppressedCookieSnapshot() : TO(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(WW) {
        -1 === Pw.indexOf(WW.persistence.toLowerCase()) && (pP.critical("Unknown persistence type " + WW.persistence + "; falling back to localStorage+cookie"), WW.persistence = "localStorage+cookie");
        const iW = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const mW = [...AL, ...WW];
          return KE(KE({}, xL), {}, {
            _parse(WW) {
              try {
                let NW, PW = {};
                try {
                  NW = tL._get(WW) || void 0, PW = NW ? UL(JSON.parse(NW)) : {}
                } catch (WW) {}
                const LW = JSON.parse(xL._get(WW) || "{}");
                let cW;
                if (iW) {
                  const iW = KL(WW, NW),
                    OW = [...AL, ...iW.properties],
                    wW = {};
                  Object.keys(PW).forEach((WW => {
                    const iW = PW[WW];
                    HO(iW) || "" === iW || "$user_state" === WW && "anonymous" !== iW && "identified" !== iW || (wW[WW] = iW)
                  }));
                  const tW = "distinct_id" in wW || "anonymous" === wW.$user_state || "identified" === wW.$user_state;
                  if (Object.keys(wW).length > 0) {
                    var EW;
                    const WW = LW[YW],
                      NW = null !== (EW = LW.$user_state) && void 0 !== EW ? EW : Bi;
                    mW.forEach((WW => {
                      if (-1 !== OW.indexOf(WW) && !(WW in PW) && (tW || "distinct_id" !== WW && "$user_state" !== WW)) {
                        const OW = LW[WW];
                        (iW.isValid || -1 === AL.indexOf(WW) || !1 !== OW && 0 !== OW) && delete LW[WW]
                      }
                    })), !tW || "$user_state" in PW || "$user_state" in LW || (LW[ki] = Bi), !tW || ("distinct_id" in wW ? wW[YW] : LW[YW]) === WW && ("$user_state" in wW ? wW[ki] : LW[ki]) === NW || (lL.forEach((WW => delete LW[WW])), "identified" === wW.$user_state && "distinct_id" in wW ? LW.$user_id = wW[YW] : delete LW.$user_id, "identified" !== wW.$user_state && (delete LW[Ni], delete LW[AW]), delete LW.__alias)
                  }
                  cW = BP(LW, wW)
                } else cW = BP(PW, LW);
                return OW() || xL._set(WW, cW), cW
              } catch (WW) {}
              return null
            },
            _set(OW, mW, EW, NW, PW, LW) {
              const cW = xL._set(OW, mW, void 0, void 0, LW);
              try {
                const wW = kL(mW, WW);
                if (Object.keys(wW).length) {
                  if (iW) {
                    const iW = bL(OW),
                      tW = ML(wW, WW);
                    if (tL._set(iW, tW, EW, NW, PW, LW), tL._get(iW) !== JSON.stringify(tW)) {
                      tL._remove(iW, NW);
                      const WW = kL(mW);
                      return tL._set(OW, WW, EW, NW, PW, LW), cW
                    }
                  }
                  tL._set(OW, wW, EW, NW, PW, LW)
                }
              } catch (WW) {
                xL._error(WW)
              }
              return cW
            },
            _remove(WW, iW) {
              try {
                null == Fi || Fi.localStorage.removeItem(WW), tL._remove(WW, iW), tL._remove(bL(WW), iW)
              } catch (WW) {
                xL._error(WW)
              }
            }
          })
        }(WW.cookie_persisted_properties || [], WW.cookieWinsOnConflict, (() => !!this._disabled));
        let OW, mW = !1,
          EW = !1;
        const NW = WW.persistence.toLowerCase();
        return "localstorage" === NW && xL._is_supported() ? (OW = xL, EW = !0) : "localstorage+cookie" === NW && iW._is_supported() ? (OW = iW, EW = !0, mW = !0) : "sessionstorage" === NW && JL._is_supported() ? OW = JL : "memory" === NW ? OW = yL : "cookie" === NW && tL._is_supported() ? (OW = tL, mW = !0) : iW._is_supported() ? (OW = iW, EW = !0, mW = !0) : tL._is_supported() ? (OW = tL, mW = !0) : OW = yL, this._splitStorageEligible = EW, this._storesIdentityInCookie = mW, OW
      }
      _groupEntryName(WW) {
        return `${this._name}__${WW}`
      }
      _resolveSplitStorage(WW) {
        return this._splitStorageEligible && !!WW.split_storage
      }
      properties() {
        const WW = {};
        return XP(this.props, ((iW, OW) => {
          const mW = ec(OW);
          if (!mW || "event" === mW.exposure) {
            var EW;
            if (null == mW || null === (EW = mW.shouldSkipFromEventProperties) || void 0 === EW ? void 0 : EW.call(mW, iW)) return;
            WW[OW] = iW
          }
        })), WW
      }
      load() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !WW) return;
        const iW = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          OW = iW ? xL._parse(this._name) : null;
        let mW = {};
        if (iW) try {
          mW = UL(tL._parse(this._name)), XP(mW, ((WW, iW) => {
            (TO(WW) || HO(WW) || "" === WW) && delete mW[iW]
          }))
        } catch (WW) {}
        const EW = this.Tb._parse(this._name);
        if (EW && (this.props = BP({}, EW)), this._splitStorage && this._loadGroupEntries(), iW && EW) {
          var NW, PW;
          const WW = null == OW ? void 0 : OW[YW],
            iW = null !== (NW = null == OW ? void 0 : OW.$user_state) && void 0 !== NW ? NW : Bi,
            LW = EW[YW],
            cW = null !== (PW = EW.$user_state) && void 0 !== PW ? PW : Bi;
          if (LW !== WW || cW !== iW) {
            this._cookieIdentityChangePending = !0, this._disabled || JL._set(Lw(this._name), !0);
            const OW = BP({}, this.props);
            lL.forEach((WW => delete OW[WW])), "anonymous" !== cW || "identified" !== iW && "anonymous" !== mW.$user_state && (TO(WW) || LW === WW) || (Uw(OW, mW), delete OW[AW]), this.props = OW;
            const EW = new Set;
            lL.forEach((WW => {
              var iW;
              const OW = null === (iW = ec(WW)) || void 0 === iW ? void 0 : iW.storageGroup;
              OW && EW.add(OW)
            })), EW.forEach((WW => {
              if (this._disabled) return;
              const iW = {};
              XP(this.props, ((OW, mW) => {
                var EW;
                (null === (EW = ec(mW)) || void 0 === EW ? void 0 : EW.storageGroup) === WW && (iW[mW] = OW)
              })), yO(iW) ? (xL._remove(this._groupEntryName(WW)), this._slotState[WW] = {}) : xL._set(this._groupEntryName(WW), iW) && (this._slotState[WW] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(iW, WW)
              })
            }))
          }
        }
        JL._get(Lw(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const WW of uc) {
          const iW = xL._parse(this._groupEntryName(WW));
          if (iW && !yO(iW)) {
            const OW = this._slotWriteState(WW);
            OW.persisted = !0, this._mainCarriesGroupKey(WW) || (OW.fingerprint = this._entryFingerprint(iW, WW)), this._groupEntryIsStale(WW, iW) || BP(this.props, iW)
          }
        }
      }
      _mainCarriesGroupKey(WW) {
        return Object.keys(this.props).some((iW => {
          var OW;
          return (null === (OW = ec(iW)) || void 0 === OW ? void 0 : OW.storageGroup) === WW
        }))
      }
      _groupEntryIsStale(WW, iW) {
        const OW = Nw[WW];
        if (!OW) return !1;
        const mW = iW[OW],
          EW = this.props[OW];
        return uO(mW) && uO(EW) && EW > mW
      }
      refreshKey(WW) {
        var iW;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(WW)) return;
        const OW = this._splitStorage ? null === (iW = ec(WW)) || void 0 === iW ? void 0 : iW.storageGroup : void 0,
          mW = OW ? xL._parse(this._groupEntryName(OW)) : this.Tb._parse(this._name);
        if (mW && WW in mW) this._setProp(WW, mW[WW], !1);
        else {
          if (OW) {
            const iW = this.Tb._parse(this._name);
            if (iW && WW in iW) return void this._setProp(WW, iW[WW], !1)
          }
          this._deleteProp(WW, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const WW = this._saveDebounceMs();
        WW > 0 ? TO(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), WW)) : this._writeNow()
      }
      flush() {
        TO(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !WW) return;
        WW || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || lw.forEach((WW => this.refreshKey(WW))));
        const iW = !WW && !this._storageMigrationInProgress;
        iW || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const OW = !!iW && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && pP.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(OW && this._crossTabFeatureFlagHandlers.forEach((WW => WW())));
        const mW = this._writeEntry(this.Tb, this._name, this.props, tw);
        "written" === mW && this._rememberCurrentCookieProperties(this.props), "failed" !== mW && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), OW && this._crossTabFeatureFlagHandlers.forEach((WW => WW()))
      }
      _writeNowSplit() {
        const {
          main: WW,
          groups: iW
        } = this._partitionProps(), OW = this._writeEntry(this.Tb, this._name, WW, tw);
        "written" === OW && this._rememberCurrentCookieProperties(WW), "failed" !== OW && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), Zw.forEach((WW => {
          var iW;
          (null === (iW = ec(WW)) || void 0 === iW ? void 0 : iW.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(WW)
        })));
        for (const EW of uc) {
          var mW;
          const WW = iW[EW];
          if (yO(WW) && !(null === (mW = this._slotState[EW]) || void 0 === mW ? void 0 : mW.persisted)) {
            Zw.forEach((WW => {
              var iW;
              (null === (iW = ec(WW)) || void 0 === iW ? void 0 : iW.storageGroup) === EW && this._pendingCrossTabFeatureFlagChanges.delete(WW)
            }));
            continue
          }
          const OW = this._writeEntry(xL, this._groupEntryName(EW), WW, EW);
          "failed" !== OW && Zw.forEach((WW => {
            const iW = ec(WW);
            (null == iW ? void 0 : iW.storageGroup) !== EW || "written" !== OW && iW.volatile || this._pendingCrossTabFeatureFlagChanges.delete(WW)
          }))
        }
      }
      _partitionProps() {
        const WW = {},
          iW = {
            flags: {},
            surveys: {}
          };
        return XP(this.props, ((OW, mW) => {
          var EW;
          const NW = null === (EW = ec(mW)) || void 0 === EW ? void 0 : EW.storageGroup;
          NW ? iW[NW][mW] = OW : WW[mW] = OW
        })), {
          main: WW,
          groups: iW
        }
      }
      _entryFingerprint(WW, iW) {
        if (iW === tw) return JSON.stringify(WW) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const OW = {};
        return XP(WW, ((WW, iW) => {
          var mW;
          OW[iW] = (null === (mW = ec(iW)) || void 0 === mW ? void 0 : mW.volatile) ? "__volatile__" : WW
        })), JSON.stringify(OW)
      }
      _writeEntry(WW, iW, OW, mW) {
        const EW = this._slotWriteState(mW);
        if (mW !== tw && !EW.RA && !TO(EW.fingerprint)) return "skipped";
        let NW;
        try {
          if (NW = this._entryFingerprint(OW, mW), NW === EW.fingerprint) return EW.RA = !1, "skipped"
        } catch (WW) {
          NW = void 0
        }
        return WW._set(iW, OW, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (EW.RA = !1, mW !== tw && (EW.persisted = !0), TO(NW) || (EW.fingerprint = NW), this._splitStorageEligible && (EW.storageValue = xL._get(iW)), "written") : (this._config.debug && pP.warn(`failed to persist storage entry "${iW}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: WW = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), TO(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Tb._remove(this._name, !1), this.Tb._remove(this._name, !0), !WW && this._ownsSplitStorage)
          for (const iW of uc) xL._remove(this._groupEntryName(iW));
        WW ? delete this._slotState[tw] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(WW, iW, OW) {
        if (YO(WW)) {
          this.syncCookieProperties(), TO(iW) && (iW = "None"), this._expire_days = TO(OW) ? this._default_expiry : OW;
          let mW = !1;
          if (XP(WW, ((WW, OW) => {
              this.props.hasOwnProperty(OW) && this.props[OW] !== iW || (this._setProp(OW, WW), mW = !0)
            })), mW) return this.save(), !0
        }
        return !1
      }
      register(WW, iW) {
        if (YO(WW)) {
          this.syncCookieProperties(), this._expire_days = TO(iW) ? this._default_expiry : iW;
          let OW = !1;
          if (XP(WW, ((iW, mW) => {
              WW.hasOwnProperty(mW) && (this.props[mW] !== iW || YO(iW) || KO(iW)) && (this._setProp(mW, iW), OW = !0)
            })), OW) return this.save(), !0
        }
        return !1
      }
      unregister(WW) {
        this.syncCookieProperties();
        const iW = "string" == typeof WW ? [WW] : WW;
        let OW = !1;
        for (const mW of iW) mW in this.props && (this._deleteProp(mW), OW = !0);
        OW && this.save()
      }
      update_campaign_params() {
        const WW = null == iO ? void 0 : iO.URL;
        if (WW === this._campaign_params_url) return;
        const iW = ac(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          OW = !yO(GP(iW));
        return OW && this.register(iW), this._campaign_params_url = WW, OW ? iW : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const WW = null == iO ? void 0 : iO.referrer;
          return WW ? zc(WW) : {}
        }())
      }
      update_referrer_info() {
        var WW;
        this.register_once({
          $referrer: iw(),
          $referring_domain: (null == iO ? void 0 : iO.referrer) && (null === (WW = fc(iO.referrer)) || void 0 === WW ? void 0 : WW.host) || Ww
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const WW = Ow(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [Yi]: this._storesIdentityInCookie ? {
            r: ww(WW.r),
            u: WW.u ? ww(WW.u) : void 0
          } : WW
        }, void 0)
      }
      get_initial_props() {
        const WW = {};
        XP([Si, Ki], (iW => {
          const OW = this.props[iW];
          OW && XP(OW, (function(iW, OW) {
            WW["$initial_" + jO(OW)] = iW
          }))
        }));
        const iW = this.props[Yi];
        if (iW) {
          const OW = function(WW) {
            const iW = mw(WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              OW = {};
            return XP(iW, (function(WW, iW) {
              OW[`$initial_${jO(iW)}`] = WW
            })), OW
          }(iW, this._config.disable_capture_url_hashes);
          BP(WW, OW)
        }
        return WW
      }
      safe_merge(WW) {
        return XP(this.props, (function(iW, OW) {
          OW in WW || (WW[OW] = iW)
        })), WW
      }
      update_config(WW, iW, OW) {
        const mW = WW.persistence !== iW.persistence,
          EW = !((WW, iW) => {
            if (WW.length !== iW.length) return !1;
            const OW = [...WW].sort(),
              mW = [...iW].sort();
            return OW.every(((WW, iW) => WW === mW[iW]))
          })(WW.cookie_persisted_properties || [], iW.cookie_persisted_properties || []),
          NW = mW || EW,
          PW = WW.cookieWinsOnConflict !== iW.cookieWinsOnConflict,
          LW = WW.disable_persistence || !!OW,
          cW = !!this._disabled && !LW;
        LW || this._syncCookieProperties(iW, cW), this._config = WW, !LW && (mW || EW || PW) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(KE(KE({}, WW), {}, {
          cookie_persisted_properties: iW.cookie_persisted_properties
        }), cW));
        const wW = NW || PW ? this._buildStorage(WW) : this.Tb;
        this._truncateExistingPersonInfoForCookie();
        const tW = this._resolveSplitStorage(WW),
          ZW = NW || tW !== this._splitStorage,
          xW = !LW && (ZW || WW.cross_subdomain_cookie !== this._cross_subdomain || WW.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(cW);
        this._storageMigrationInProgress = ZW;
        try {
          if (this._default_expiry = this._expire_days = WW.cookie_expiration, this.set_disabled(LW), this.set_cross_subdomain(WW.cross_subdomain_cookie), this.set_secure(WW.secure_cookie), ZW) {
            const WW = this.props;
            this.clear(), this.Tb = wW, this._splitStorage = tW, this.props = WW, this.save()
          } else PW && (this.Tb = wW, LW || (delete this._slotState[tw], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, xW && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const WW = this.props[Yi];
        if (!this._storesIdentityInCookie || !YO(WW) || "string" != typeof WW.r) return;
        const iW = ww(WW.r),
          OW = "string" == typeof WW.u ? ww(WW.u) : WW.u;
        iW === WW.r && OW === WW.u || this._setProp(Yi, KE(KE({}, WW), {}, {
          r: iW,
          u: OW
        }))
      }
      set_disabled(WW) {
        this._disabled = WW, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(WW) {
        WW !== this._cross_subdomain && (this._cross_subdomain = WW, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(WW) {
        WW !== this._secure && (this._secure = WW, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(WW, iW) {
        const OW = this.props.__timers || {};
        OW[WW] = iW, this._setProp(dW, OW), this.save()
      }
      remove_event_timer(WW) {
        const iW = this.props.__timers || {},
          OW = iW[WW];
        return TO(OW) || (delete iW[WW], this._setProp(dW, iW), this.save()), OW
      }
      get_property(WW) {
        return this.props[WW]
      }
      set_property(WW, iW) {
        this._setProp(WW, iW), this.save()
      }
      _setProp(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var mW;
        const EW = this.props[WW];
        this.props[WW] = iW, OW && ("distinct_id" !== WW && "$user_state" !== WW || EW === iW || (this._localIdentityChangePending = !0), Aw(WW) && !bw(EW, iW) && this._metaIdentifierChangePending.add(WW), this._markPendingCrossTabFeatureFlagChanges(WW, EW, iW), (null === (mW = ec(WW)) || void 0 === mW ? void 0 : mW.volatile) || this._markGroupDirty(WW))
      }
      _deleteProp(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[WW], iW && (xw(WW) && this._setCrossTabFeatureFlagChangesPending(WW, !0), Aw(WW) && this._metaIdentifierChangePending.add(WW), this._markGroupDirty(WW))
      }
      _markGroupDirty(WW) {
        var iW;
        const OW = null === (iW = ec(WW)) || void 0 === iW ? void 0 : iW.storageGroup;
        OW && (this._slotWriteState(OW).RA = !0)
      }
      _slotWriteState(WW) {
        return this._slotState[WW] || (this._slotState[WW] = {})
      }
    };
    const sw = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      Mw = "events",
      Kw = "cancelEvents",
      Sw = "popover",
      Yw = "api",
      yw = "widget",
      Tw = "survey shown",
      Jw = "survey dismissed",
      hw = "survey sent",
      Hw = "$survey_id",
      nw = "$survey_iteration",
      uw = "$survey_last_seen_date",
      ow = "popover",
      dw = "inline";

    function ew(WW) {
      let iW = !0;
      return {
        dispose() {
          if (iW) {
            iW = !1;
            const OW = WW();
            OW && SO(OW.then) && OW.then(void 0, (() => {}))
          }
        }
      }
    }
    const vw = "product tour shown",
      gw = "$product_tour_last_seen_date",
      Dw = "$product_tour_type",
      Vw = fP("[RateLimiter]");
    var pw = class {
      constructor(WW) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = WW => {
          const iW = WW.text;
          if (iW && iW.length) try {
            (JSON.parse(iW).quota_limited || []).forEach((WW => {
              Vw.info(`${WW||"events"} is quota limited.`), this.serverLimits[WW] = (new Date).getTime() + 6e4
            }))
          } catch (WW) {
            return void Vw.warn(`could not rate limit - continuing. Error: "${null==WW?void 0:WW.message}"`, {
              text: iW
            })
          }
        }, this.instance = WW, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var WW;
        return (null === (WW = this.instance.config.rate_limiting) || void 0 === WW ? void 0 : WW.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var WW;
        return Math.max((null === (WW = this.instance.config.rate_limiting) || void 0 === WW ? void 0 : WW.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var iW, OW, mW;
        const {
          captureEventsBurstLimit: EW,
          captureEventsPerSecond: NW
        } = this, PW = (new Date).getTime(), LW = null !== (iW = null === (OW = this.instance.persistence) || void 0 === OW ? void 0 : OW.get_property("$capture_rate_limit")) && void 0 !== iW ? iW : {
          tokens: EW,
          last: PW
        };
        LW.tokens += (PW - LW.last) / 1e3 * NW, LW.last = PW, LW.tokens > EW && (LW.tokens = EW);
        const cW = 1 > LW.tokens;
        if (cW || WW || (LW.tokens = Math.max(0, LW.tokens - 1)), cW && !WW) {
          const WW = (uO(LW.dropped) ? LW.dropped : 0) + 1;
          LW.dropped = WW, !this.lastEventRateLimited && this._captureWarning(WW) && (LW.dropped = 0)
        }
        return this.lastEventRateLimited = cW, null === (mW = this.instance.persistence) || void 0 === mW || mW.set_property("$capture_rate_limit", LW), {
          isRateLimited: cW,
          remainingTokens: LW.tokens
        }
      }
      _isPropertyAllowed(WW) {
        const iW = this.instance.config.property_denylist;
        return !KO(iW) || !iW.includes(WW)
      }
      _triggeringPage() {
        var WW;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == OO ? void 0 : OO.pathname)) return `${null!==(WW=OO.origin)&&void 0!==WW?WW:""}${OO.pathname}`
      }
      _captureWarning(WW) {
        var iW, OW;
        const {
          captureEventsBurstLimit: mW,
          captureEventsPerSecond: EW
        } = this, NW = this._triggeringPage(), PW = this._isPropertyAllowed("$session_id") ? null === (iW = (OW = this.instance).get_session_id) || void 0 === iW ? void 0 : iW.call(OW) : void 0, LW = [`${WW} event(s) dropped since the last warning`, NW ? `triggered on ${NW}` : void 0, PW ? `session ${PW}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${LW}. Config is set to ${EW} events per second and ${mW} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(WW) {
        const iW = this.serverLimits[WW || "events"] || !1;
        return !1 !== iW && (new Date).getTime() < iW
      }
    };
    const fw = fP("[RemoteConfig]");
    var Cw = class {
      constructor(WW) {
        this._instance = WW
      }
      get remoteConfig() {
        var WW;
        return null === (WW = wO._POSTHOG_REMOTE_CONFIG) || void 0 === WW || null === (WW = WW[this._instance.config.token]) || void 0 === WW ? void 0 : WW.config
      }
      _loadRemoteConfigJs(WW) {
        var iW, OW, mW;
        (null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.loadExternalDependency) ? null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this._instance, "remote-config", (() => WW(this.remoteConfig))): WW()
      }
      _loadRemoteConfigJSON(WW) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: WW
        })
      }
      load() {
        try {
          if (this.remoteConfig) return fw.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void fw.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((WW => {
            if (!WW) return fw.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((WW => {
              this._onRemoteConfig(WW.json, WW)
            }));
            this._onRemoteConfig(WW)
          }))
        } catch (mW) {
          fw.error("Error loading remote config", mW), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(WW, iW) {
        !WW && iW && (0 === iW.statusCode ? iW.error || fw.warn("Failed to fetch remote config from PostHog.") : fw.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(WW ? {
            ok: !0,
            config: WW
          } : {
            ok: !1
          })
        } catch (WW) {
          fw.error("Error applying remote config", WW)
        }
        if (!1 !== (null == WW ? void 0 : WW.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var OW;
          null === (OW = this._instance.featureFlags) || void 0 === OW || OW.ensureFlagsLoaded()
        } catch (WW) {
          fw.error("Error loading feature flags", WW)
        }
      }
    };
    var Xw = Uint8Array,
      Bw = Uint16Array,
      qw = Uint32Array,
      Rw = new Xw([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      Gw = new Xw([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      Iw = new Xw([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      aw = function(WW, iW) {
        for (var OW = new Bw(31), mW = 0; 31 > mW; ++mW) OW[mW] = iW += 1 << WW[mW - 1];
        var EW = new qw(OW[30]);
        for (mW = 1; 30 > mW; ++mW)
          for (var NW = OW[mW]; OW[mW + 1] > NW; ++NW) EW[NW] = NW - OW[mW] << 5 | mW;
        return [OW, EW]
      },
      rw = aw(Rw, 2),
      zw = rw[1];
    rw[0][28] = 258, zw[258] = 28;
    for (var Fw = aw(Gw, 0)[1], Qw = new Bw(32768), Wt = 0; 32768 > Wt; ++Wt) {
      var it = (43690 & Wt) >>> 1 | (21845 & Wt) << 1;
      Qw[Wt] = ((65280 & (it = (61680 & (it = (52428 & it) >>> 2 | (13107 & it) << 2)) >>> 4 | (3855 & it) << 4)) >>> 8 | (255 & it) << 8) >>> 1
    }
    var Ot = function(WW, iW, OW) {
        for (var mW = WW.length, EW = 0, NW = new Bw(iW); mW > EW; ++EW) ++NW[WW[EW] - 1];
        var PW, LW = new Bw(iW);
        for (EW = 0; iW > EW; ++EW) LW[EW] = LW[EW - 1] + NW[EW - 1] << 1;
        if (OW) {
          PW = new Bw(1 << iW);
          var cW = 15 - iW;
          for (EW = 0; mW > EW; ++EW)
            if (WW[EW])
              for (var wW = EW << 4 | WW[EW], tW = iW - WW[EW], ZW = LW[WW[EW] - 1]++ << tW, xW = ZW | (1 << tW) - 1; xW >= ZW; ++ZW) PW[Qw[ZW] >>> cW] = wW
        } else
          for (PW = new Bw(mW), EW = 0; mW > EW; ++EW) PW[EW] = Qw[LW[WW[EW] - 1]++] >>> 15 - WW[EW];
        return PW
      },
      mt = new Xw(288);
    for (Wt = 0; 144 > Wt; ++Wt) mt[Wt] = 8;
    for (Wt = 144; 256 > Wt; ++Wt) mt[Wt] = 9;
    for (Wt = 256; 280 > Wt; ++Wt) mt[Wt] = 7;
    for (Wt = 280; 288 > Wt; ++Wt) mt[Wt] = 8;
    var Et = new Xw(32);
    for (Wt = 0; 32 > Wt; ++Wt) Et[Wt] = 5;
    var Nt = Ot(mt, 9, 0),
      Pt = Ot(Et, 5, 0),
      Lt = function(WW) {
        return (WW / 8 | 0) + (7 & WW && 1)
      },
      ct = function(WW, iW, OW) {
        (null == iW || 0 > iW) && (iW = 0), (null == OW || OW > WW.length) && (OW = WW.length);
        var mW = new(WW instanceof Bw ? Bw : WW instanceof qw ? qw : Xw)(OW - iW);
        return mW.set(WW.subarray(iW, OW)), mW
      },
      wt = function(WW, iW, OW) {
        var mW = iW / 8 | 0;
        WW[mW] |= OW <<= 7 & iW, WW[mW + 1] |= OW >>> 8
      },
      tt = function(WW, iW, OW) {
        var mW = iW / 8 | 0;
        WW[mW] |= OW <<= 7 & iW, WW[mW + 1] |= OW >>> 8, WW[mW + 2] |= OW >>> 16
      },
      Zt = function(WW, iW) {
        for (var OW = [], mW = 0; WW.length > mW; ++mW) WW[mW] && OW.push({
          s: mW,
          f: WW[mW]
        });
        var EW = OW.length,
          NW = OW.slice();
        if (!EW) return [new Xw(0), 0];
        if (1 == EW) {
          var PW = new Xw(OW[0].s + 1);
          return PW[OW[0].s] = 1, [PW, 1]
        }
        OW.sort((function(WW, iW) {
          return WW.f - iW.f
        })), OW.push({
          s: -1,
          f: 25001
        });
        var LW = OW[0],
          cW = OW[1],
          wW = 0,
          tW = 1,
          ZW = 2;
        for (OW[0] = {
            s: -1,
            f: LW.f + cW.f,
            l: LW,
            r: cW
          }; tW != EW - 1;) LW = OW[OW[ZW].f > OW[wW].f ? wW++ : ZW++], cW = OW[wW != tW && OW[ZW].f > OW[wW].f ? wW++ : ZW++], OW[tW++] = {
          s: -1,
          f: LW.f + cW.f,
          l: LW,
          r: cW
        };
        var xW = NW[0].s;
        for (mW = 1; EW > mW; ++mW) NW[mW].s > xW && (xW = NW[mW].s);
        var lW = new Bw(xW + 1),
          AW = xt(OW[tW - 1], lW, 0);
        if (AW > iW) {
          mW = 0;
          var bW = 0,
            jW = AW - iW,
            UW = 1 << jW;
          for (NW.sort((function(WW, iW) {
              return lW[iW.s] - lW[WW.s] || WW.f - iW.f
            })); EW > mW; ++mW) {
            var kW = NW[mW].s;
            if (iW >= lW[kW]) break;
            bW += UW - (1 << AW - lW[kW]), lW[kW] = iW
          }
          for (bW >>>= jW; bW > 0;) {
            var sW = NW[mW].s;
            iW > lW[sW] ? bW -= 1 << iW - lW[sW]++ - 1 : ++mW
          }
          for (; mW >= 0 && bW; --mW) {
            var MW = NW[mW].s;
            lW[MW] == iW && (--lW[MW], ++bW)
          }
          AW = iW
        }
        return [new Xw(lW), AW]
      },
      xt = function(WW, iW, OW) {
        return -1 == WW.s ? Math.max(xt(WW.l, iW, OW + 1), xt(WW.r, iW, OW + 1)) : iW[WW.s] = OW
      },
      lt = function(WW) {
        for (var iW = WW.length; iW && !WW[--iW];);
        for (var OW = new Bw(++iW), mW = 0, EW = WW[0], NW = 1, PW = function(WW) {
            OW[mW++] = WW
          }, LW = 1; iW >= LW; ++LW)
          if (WW[LW] == EW && LW != iW) ++NW;
          else {
            if (!EW && NW > 2) {
              for (; NW > 138; NW -= 138) PW(32754);
              NW > 2 && (PW(NW > 10 ? NW - 11 << 5 | 28690 : NW - 3 << 5 | 12305), NW = 0)
            } else if (NW > 3) {
              for (PW(EW), --NW; NW > 6; NW -= 6) PW(8304);
              NW > 2 && (PW(NW - 3 << 5 | 8208), NW = 0)
            }
            for (; NW--;) PW(EW);
            NW = 1, EW = WW[LW]
          } return [OW.subarray(0, mW), iW]
      },
      At = function(WW, iW) {
        for (var OW = 0, mW = 0; iW.length > mW; ++mW) OW += WW[mW] * iW[mW];
        return OW
      },
      bt = function(WW, iW, OW) {
        var mW = OW.length,
          EW = Lt(iW + 2);
        WW[EW] = 255 & mW, WW[EW + 1] = mW >>> 8, WW[EW + 2] = 255 ^ WW[EW], WW[EW + 3] = 255 ^ WW[EW + 1];
        for (var NW = 0; mW > NW; ++NW) WW[EW + NW + 4] = OW[NW];
        return 8 * (EW + 4 + mW)
      },
      jt = function(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        wt(iW, tW++, OW), ++EW[256];
        for (var ZW = Zt(EW, 15), xW = ZW[0], lW = ZW[1], AW = Zt(NW, 15), bW = AW[0], jW = AW[1], UW = lt(xW), kW = UW[0], sW = UW[1], MW = lt(bW), KW = MW[0], SW = MW[1], YW = new Bw(19), yW = 0; kW.length > yW; ++yW) YW[31 & kW[yW]]++;
        for (yW = 0; KW.length > yW; ++yW) YW[31 & KW[yW]]++;
        for (var TW = Zt(YW, 7), JW = TW[0], hW = TW[1], HW = 19; HW > 4 && !JW[Iw[HW - 1]]; --HW);
        var nW, uW, oW, dW, eW = wW + 5 << 3,
          vW = At(EW, mt) + At(NW, Et) + PW,
          gW = At(EW, xW) + At(NW, bW) + PW + 14 + 3 * HW + At(YW, JW) + (2 * YW[16] + 3 * YW[17] + 7 * YW[18]);
        if (vW >= eW && gW >= eW) return bt(iW, tW, WW.subarray(cW, cW + wW));
        if (wt(iW, tW, 1 + (vW > gW)), tW += 2, vW > gW) {
          nW = Ot(xW, lW, 0), uW = xW, oW = Ot(bW, jW, 0), dW = bW;
          var DW = Ot(JW, hW, 0);
          for (wt(iW, tW, sW - 257), wt(iW, tW + 5, SW - 1), wt(iW, tW + 10, HW - 4), tW += 14, yW = 0; HW > yW; ++yW) wt(iW, tW + 3 * yW, JW[Iw[yW]]);
          tW += 3 * HW;
          for (var VW = [kW, KW], pW = 0; 2 > pW; ++pW) {
            var fW = VW[pW];
            for (yW = 0; fW.length > yW; ++yW) wt(iW, tW, DW[CW = 31 & fW[yW]]), tW += JW[CW], CW > 15 && (wt(iW, tW, fW[yW] >>> 5 & 127), tW += fW[yW] >>> 12)
          }
        } else nW = Nt, uW = mt, oW = Pt, dW = Et;
        for (yW = 0; LW > yW; ++yW)
          if (mW[yW] > 255) {
            var CW;
            tt(iW, tW, nW[257 + (CW = mW[yW] >>> 18 & 31)]), tW += uW[CW + 257], CW > 7 && (wt(iW, tW, mW[yW] >>> 23 & 31), tW += Rw[CW]);
            var XW = 31 & mW[yW];
            tt(iW, tW, oW[XW]), tW += dW[XW], XW > 3 && (tt(iW, tW, mW[yW] >>> 5 & 8191), tW += Gw[XW])
          } else tt(iW, tW, nW[mW[yW]]), tW += uW[mW[yW]];
        return tt(iW, tW, nW[256]), tW + uW[256]
      },
      Ut = new qw([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      kt = (new Xw(0), function() {
        for (var WW = new qw(256), iW = 0; 256 > iW; ++iW) {
          for (var OW = iW, mW = 9; --mW;) OW = (1 & OW && 3988292384) ^ OW >>> 1;
          WW[iW] = OW
        }
        return WW
      }()),
      st = function(WW, iW, OW) {
        for (; OW; ++iW) WW[iW] = OW, OW >>>= 8
      };
    const Mt = !!EO || !!mO,
      Kt = new WeakMap,
      St = "text/plain";
    let Yt = 0,
      yt = !1;
    const Tt = (WW, iW) => {
        const [OW, mW] = WW.split("#"), [EW, NW] = OW.split("?");
        if (!NW) return WW;
        const PW = NW.split("&").filter((WW => WW.split("=")[0] !== iW)).join("&");
        return `${EW}${PW?`?${PW}`:""}${mW?`#${mW}`:""}`
      },
      Jt = function(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var mW;
        const [EW, NW] = WW.split("?"), PW = KE({}, iW), LW = null !== (mW = null == NW ? void 0 : NW.split("&").map((WW => {
          var iW;
          const [mW, EW] = WW.split("="), NW = OW && null !== (iW = PW[mW]) && void 0 !== iW ? iW : EW;
          return delete PW[mW], `${mW}=${NW}`
        }))) && void 0 !== mW ? mW : [], cW = function(WW) {
          let iW, OW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const EW = [];
          return XP(WW, (function(WW, mW) {
            TO(WW) || TO(mW) || "undefined" === mW || (iW = encodeURIComponent((WW => WW instanceof File)(WW) ? WW.name : WW.toString()), OW = encodeURIComponent(mW), EW[EW.length] = OW + "=" + iW)
          })), EW.join(mW)
        }(PW);
        return cW && LW.push(cW), LW.length > 0 ? `${EW}?${LW.join("&")}` : EW
      },
      ht = WW => {
        if (WW._encodedBody) return WW._encodedBody;
        const {
          data: iW,
          compression: OW
        } = WW;
        if (!iW) return;
        if (OW === sw.GZipJS) {
          const WW = function(WW, iW) {
            void 0 === iW && (iW = {});
            var OW = function() {
                var WW = 4294967295;
                return {
                  p(iW) {
                    for (var OW = WW, mW = 0; iW.length > mW; ++mW) OW = kt[255 & OW ^ iW[mW]] ^ OW >>> 8;
                    WW = OW
                  },
                  d: () => 4294967295 ^ WW
                }
              }(),
              mW = WW.length;
            OW.p(WW);
            var EW, NW, PW, LW, cW = (LW = 10 + ((EW = iW).filename && EW.filename.length + 1 || 0), function(WW, iW, OW, mW, EW, NW) {
                var PW = WW.length,
                  LW = new Xw(mW + PW + 5 * (1 + Math.floor(PW / 7e3)) + 8),
                  cW = LW.subarray(mW, LW.length - 8),
                  wW = 0;
                if (!iW || 8 > PW)
                  for (var tW = 0; PW >= tW; tW += 65535) {
                    var ZW = tW + 65535;
                    PW > ZW ? wW = bt(cW, wW, WW.subarray(tW, ZW)) : (cW[tW] = NW, wW = bt(cW, wW, WW.subarray(tW, PW)))
                  } else {
                    for (var xW = Ut[iW - 1], lW = xW >>> 13, AW = 8191 & xW, bW = (1 << OW) - 1, jW = new Bw(32768), UW = new Bw(bW + 1), kW = Math.ceil(OW / 3), sW = 2 * kW, MW = function(iW) {
                        return (WW[iW] ^ WW[iW + 1] << kW ^ WW[iW + 2] << sW) & bW
                      }, KW = new qw(25e3), SW = new Bw(288), YW = new Bw(32), yW = 0, TW = 0, JW = (tW = 0, 0), hW = 0, HW = 0; PW > tW; ++tW) {
                      var nW = MW(tW),
                        uW = 32767 & tW,
                        oW = UW[nW];
                      if (jW[uW] = oW, UW[nW] = uW, tW >= hW) {
                        var dW = PW - tW;
                        if ((yW > 7e3 || JW > 24576) && dW > 423) {
                          wW = jt(WW, cW, 0, KW, SW, YW, TW, JW, HW, tW - HW, wW), JW = yW = TW = 0, HW = tW;
                          for (var eW = 0; 286 > eW; ++eW) SW[eW] = 0;
                          for (eW = 0; 30 > eW; ++eW) YW[eW] = 0
                        }
                        var vW = 2,
                          gW = 0,
                          DW = AW,
                          VW = uW - oW & 32767;
                        if (dW > 2 && nW == MW(tW - VW))
                          for (var pW = Math.min(lW, dW) - 1, fW = Math.min(32767, tW), CW = Math.min(258, dW); fW >= VW && --DW && uW != oW;) {
                            if (WW[tW + vW] == WW[tW + vW - VW]) {
                              for (var XW = 0; CW > XW && WW[tW + XW] == WW[tW + XW - VW]; ++XW);
                              if (XW > vW) {
                                if (vW = XW, gW = VW, XW > pW) break;
                                var BW = Math.min(VW, XW - 2),
                                  qW = 0;
                                for (eW = 0; BW > eW; ++eW) {
                                  var RW = tW - VW + eW + 32768 & 32767,
                                    GW = RW - jW[RW] + 32768 & 32767;
                                  GW > qW && (qW = GW, oW = RW)
                                }
                              }
                            }
                            VW += (uW = oW) - (oW = jW[uW]) + 32768 & 32767
                          }
                        if (gW) {
                          KW[JW++] = 268435456 | zw[vW] << 18 | Fw[gW];
                          var IW = 31 & zw[vW],
                            aW = 31 & Fw[gW];
                          TW += Rw[IW] + Gw[aW], ++SW[257 + IW], ++YW[aW], hW = tW + vW, ++yW
                        } else KW[JW++] = WW[tW], ++SW[WW[tW]]
                      }
                    }
                    wW = jt(WW, cW, NW, KW, SW, YW, TW, JW, HW, tW - HW, wW)
                  }
                return ct(LW, 0, mW + Lt(wW) + 8)
              }(NW = WW, null == (PW = iW).level ? 6 : PW.level, null == PW.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(NW.length)))) : 12 + PW.mem, LW, 0, !0)),
              wW = cW.length;
            return function(WW, iW) {
              var OW = iW.filename;
              if (WW[0] = 31, WW[1] = 139, WW[2] = 8, WW[8] = 2 > iW.level ? 4 : 9 == iW.level ? 2 : 0, WW[9] = 3, 0 != iW.mtime && st(WW, 4, Math.floor(new Date(iW.mtime || Date.now()) / 1e3)), OW) {
                WW[3] = 8;
                for (var mW = 0; OW.length >= mW; ++mW) WW[mW + 10] = OW.charCodeAt(mW)
              }
            }(cW, iW), st(cW, wW - 8, OW.d()), st(cW, wW - 4, mW), cW
          }(function(WW) {
            var iW = WW.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(WW);
            for (var OW = new Xw(WW.length + (WW.length >>> 1)), mW = 0, EW = function(WW) {
                OW[mW++] = WW
              }, NW = 0; iW > NW; ++NW) {
              if (mW + 5 > OW.length) {
                var PW = new Xw(mW + 8 + (iW - NW << 1));
                PW.set(OW), OW = PW
              }
              var LW = WW.charCodeAt(NW);
              128 > LW ? EW(LW) : 2048 > LW ? (EW(192 | LW >>> 6), EW(128 | 63 & LW)) : LW > 55295 && 57344 > LW ? (EW(240 | (LW = 65536 + (1047552 & LW) | 1023 & WW.charCodeAt(++NW)) >>> 18), EW(128 | LW >>> 12 & 63), EW(128 | LW >>> 6 & 63), EW(128 | 63 & LW)) : (EW(224 | LW >>> 12), EW(128 | LW >>> 6 & 63), EW(128 | 63 & LW))
            }
            return ct(OW, 0, mW)
          }(pc(iW)), {
            mtime: 0
          });
          return {
            contentType: St,
            body: WW.buffer.slice(WW.byteOffset, WW.byteOffset + WW.byteLength),
            estimatedSize: WW.byteLength
          }
        }
        if (OW === sw.Base64) {
          const WW = function(WW) {
              return WW ? btoa(encodeURIComponent(WW).replace(/%([0-9A-F]{2})/g, ((WW, iW) => String.fromCharCode(parseInt(iW, 16))))) : WW
            }(pc(iW)),
            OW = (WW => "data=" + encodeURIComponent("string" == typeof WW ? WW : pc(WW)))(WW);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: OW,
            estimatedSize: new Blob([OW]).size
          }
        }
        const mW = pc(iW);
        return {
          contentType: "application/json",
          body: mW,
          estimatedSize: new Blob([mW]).size
        }
      },
      Ht = WW => {
        const iW = () => "sendBeacon" === WW.transport ? {
          url: Jt(WW.url, {
            compression: sw.Base64
          }),
          encodedBody: ht(KE(KE({}, WW), {}, {
            compression: sw.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: Tt(WW.url, "compression"),
          encodedBody: ht(KE(KE({}, WW), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let OW;
        try {
          OW = ht(WW)
        } catch (OW) {
          if (KN(WW.compression, Cc(WW.url, "compression"))) return pP.error("Failed to gzip request body, sending uncompressed payload", OW), iW();
          throw OW
        }
        return OW && KN(WW.compression, Cc(WW.url, "compression")) && !((mW = OW.body) instanceof ArrayBuffer ? MN(new Uint8Array(mW)) : ArrayBuffer.isView(mW) && MN(new Uint8Array(mW.buffer, mW.byteOffset, mW.byteLength))) ? (yt = !0, iW()) : {
          url: WW.url,
          encodedBody: OW
        };
        var mW
      },
      nt = WW => {
        try {
          return Ht(WW)
        } catch (NW) {
          var iW;
          return pP.error(NW), void(null === (iW = WW.callback) || void 0 === iW || iW.call(WW, {
            statusCode: 0,
            error: NW
          }))
        }
      },
      ut = function() {
        var WW = RO((function*(WW) {
          const iW = yield function(WW) {
            return hN.apply(this, arguments)
          }(pc(WW.data), NW.DEBUG, {
            rethrow: !0
          });
          if (!iW) return WW;
          const OW = yield iW.arrayBuffer();
          return KE(KE({}, WW), {}, {
            _encodedBody: {
              contentType: St,
              body: OW,
              estimatedSize: OW.byteLength
            }
          })
        }));
        return function(iW) {
          return WW.apply(this, arguments)
        }
      }(),
      ot = /Failed to fetch|NetworkError|Load failed/i,
      dt = WW => "TypeError" === (null == WW ? void 0 : WW.name) && ot.test((null == WW ? void 0 : WW.message) || ""),
      et = WW => {
        try {
          const iW = function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof WW || !WW) return;
            const OW = WW.trim(),
              mW = /^\d+\s*,/.test(OW) ? OW.slice(0, OW.indexOf(",")).trim() : OW;
            if (/^\d+$/.test(mW)) {
              const WW = 1e3 * Math.min(Number(mW), 300);
              return WW > 0 ? WW : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(mW)) return;
            const EW = /^\w{3} \w{3} /.test(mW) ? mW + " GMT" : mW,
              NW = Date.parse(EW) - iW;
            return Number.isFinite(NW) && NW > 0 ? Math.min(NW, cE) : void 0
          }(WW());
          return TO(iW) ? void 0 : Math.min(iW, 3e4)
        } catch (WW) {
          return
        }
      },
      vt = WW => {
        const iW = nt(WW);
        if (!iW) return;
        const OW = new EO;
        Kt.set(OW, !0);
        const {
          url: mW,
          encodedBody: EW
        } = iW;
        OW.open(WW.method || "GET", mW, !0);
        const {
          contentType: NW,
          body: PW
        } = null != EW ? EW : {};
        XP(WW.headers, (function(WW, iW) {
          OW.setRequestHeader(iW, WW)
        })), NW && OW.setRequestHeader("Content-Type", NW), WW.timeout && (OW.timeout = WW.timeout), OW.onreadystatechange = () => {
          if (4 === OW.readyState) {
            var iW;
            const mW = {
              statusCode: OW.status,
              text: OW.responseText
            };
            if (200 === OW.status) try {
              mW.json = JSON.parse(OW.responseText)
            } catch (WW) {}
            null === (iW = WW.callback) || void 0 === iW || iW.call(WW, mW, et((() => OW.getResponseHeader("Retry-After"))))
          }
        }, OW.send(PW)
      },
      gt = WW => {
        const iW = nt(WW);
        if (!iW) return;
        const {
          url: OW,
          encodedBody: mW
        } = iW, {
          contentType: EW,
          body: NW,
          estimatedSize: PW
        } = null != mW ? mW : {}, LW = new Headers;
        XP(WW.headers, (function(WW, iW) {
          LW.append(iW, WW)
        })), EW && LW.append("Content-Type", EW);
        let cW = null,
          wW = !1;
        if (NO) {
          const iW = new NO;
          cW = {
            signal: iW.signal,
            timeout: setTimeout((() => {
              wW = !0;
              try {
                iW.abort(xE("AbortError", "PostHog request timed out" + ((OW = WW.timeout) ? ` after ${OW}ms` : "")))
              } catch (WW) {
                ZW(WW)
              }
              var OW
            }), WW.timeout)
          }
        }
        let tW = !1;
        const ZW = iW => {
          var OW;
          tW || (tW = !0, wW && "AbortError" === (null == iW ? void 0 : iW.name) || dt(iW) ? pP.warn(iW) : pP.error(iW), null === (OW = WW.callback) || void 0 === OW || OW.call(WW, {
            statusCode: 0,
            error: iW
          }))
        };
        let xW = 0;
        const lW = () => {
          Yt -= xW, xW = 0, cW && clearTimeout(cW.timeout)
        };
        try {
          const iW = KE({
              method: (null == WW ? void 0 : WW.method) || "GET",
              headers: LW,
              referrerPolicy: "strict-origin",
              body: NW,
              signal: null == cW ? void 0 : cW.signal
            }, WW.fetchOptions),
            mW = null != PW ? PW : TO(NW) ? 0 : void 0;
          iW.keepalive = "POST" === iW.method && !WW._keepaliveDisabled && !1 !== iW.keepalive && iW.body === NW && !TO(mW) && mW >= 0 && 52428.8 > Yt + mW, iW.keepalive && (xW = mW, Yt += xW), mO(OW, iW).then((iW => iW.text().then((OW => {
            var mW;
            if (tW) return;
            const EW = {
              statusCode: iW.status,
              text: OW
            };
            if (200 === iW.status) try {
              EW.json = JSON.parse(OW)
            } catch (WW) {
              pP.error(WW)
            }
            tW = !0, lW(), null === (mW = WW.callback) || void 0 === mW || mW.call(WW, EW, et((() => iW.headers.get("Retry-After"))))
          })))).catch((WW => {
            lW(), ZW(WW)
          })).finally(lW)
        } catch (WW) {
          lW(), ZW(WW)
        }
      },
      Dt = WW => {
        try {
          var iW;
          const {
            url: OW,
            encodedBody: mW
          } = Ht(WW), {
            contentType: EW,
            body: NW,
            estimatedSize: PW
          } = null != mW ? mW : {};
          if (!NW) return;
          const LW = NW instanceof Blob ? NW : new Blob([NW], {
            type: EW
          });
          if (WO.sendBeacon(OW, LW)) return;
          const cW = KO(WW.data) ? WW.data : null === (iW = WW.data) || void 0 === iW ? void 0 : iW.batch;
          if (KO(cW) && cW.length > 1 && (null != PW ? PW : 0) > 16384) {
            const iW = Math.ceil(cW.length / 2),
              OW = iW => KO(WW.data) ? iW : KE(KE({}, WW.data), {}, {
                batch: iW
              });
            return Dt(KE(KE({}, WW), {}, {
              data: OW(cW.slice(0, iW))
            })), void Dt(KE(KE({}, WW), {}, {
              data: OW(cW.slice(iW))
            }))
          }
          pP.warn(`Beacon of ~${null!=PW?PW:0} bytes was rejected by the browser, falling back to ${mO?"fetch":"XHR"}`), mO ? gt(KE(KE({}, WW), {}, {
            _keepaliveDisabled: !0
          })) : vt(WW)
        } catch (WW) {
          pP.warn("Beacon send failed", WW)
        }
      },
      Vt = (WW, iW, OW, mW) => {
        const EW = "query" === mW ? "POST" === iW ? "sent_at" : "_" : void 0;
        return Jt(OW === sw.GZipJS ? Tt(WW, "compression") : WW, KE(KE({}, EW ? {
          [EW]: Date.now().toString()
        } : {}), OW === sw.GZipJS ? {} : {
          compression: OW
        }))
      },
      pt = (() => {
        const WW = [];
        return mO && WW.push({
          transport: "fetch",
          method: gt
        }), EO && WW.push({
          transport: "XHR",
          method: vt
        }), (null == WO ? void 0 : WO.sendBeacon) && WW.push({
          transport: "sendBeacon",
          method: Dt
        }), WW
      })();
    let ft = !Mt && -1 === (null == LO ? void 0 : LO.indexOf("MSIE")) && -1 === (null == LO ? void 0 : LO.indexOf("Mozilla"));

    function Ct(WW, iW, OW) {
      var mW, EW, NW;
      OW && (iW = KE(KE({}, iW), {}, {
        callback: WW => OW(WW)
      })), WW.__loaded ? ft ? WW.__request_queue.push(iW) : WW.rateLimiter.isServerRateLimited(iW.batchKey) ? iW.fireCallbackOnDrop && (null === (EW = iW.callback) || void 0 === EW || EW.call(iW, {
        statusCode: 429
      })) : (iW.transport = iW.transport || WW.config.api_transport, iW.headers = KE(KE({}, WW.config.request_headers), iW.headers), iW.compression = "best-available" === iW.compression ? null !== (mW = WW.compression) && void 0 !== mW ? mW : iW.compressionFallback : iW.compression, (TO(WW.config.disable_beacon) ? WW.config.__preview_disable_beacon : WW.config.disable_beacon) && (iW.disableTransport = ["sendBeacon"]), iW.fetchOptions = iW.fetchOptions || WW.config.fetch_options, ((WW, iW) => {
        var OW, mW, EW;
        const NW = KE(KE({}, WW), {}, {
          callback: null != iW ? iW : iW => {
            var OW;
            return null === (OW = WW.callback) || void 0 === OW ? void 0 : OW.call(WW, iW)
          }
        });
        NW.timeout = NW.timeout || 6e4;
        const PW = null !== (OW = NW.transport) && void 0 !== OW ? OW : "fetch";
        "sendBeacon" === PW && TO(NW.compression) && NW.data && (NW.compression = sw.Base64), "POST" === NW.method && NW.data && ("capture-body" === NW.timestampMode ? NW.data = (WW => {
          var iW, OW;
          const mW = (KO(WW) ? WW : [WW]).map((WW => KE(KE({}, WW), WW.timestamp instanceof Date && !isNaN(WW.timestamp.getTime()) ? {
              timestamp: WW.timestamp.toISOString()
            } : {}))),
            EW = mW[0];
          return {
            api_key: null !== (iW = null == EW || null === (OW = EW.properties) || void 0 === OW ? void 0 : OW.token) && void 0 !== iW ? iW : null == EW ? void 0 : EW.token,
            batch: mW,
            sent_at: (new Date).toISOString()
          }
        })(NW.data) : "body" === NW.timestampMode && (NW.data = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return KO(WW) ? WW.map((WW => KE(KE({}, WW), {}, {
            sent_at: iW
          }))) : KE(KE({}, WW), {}, {
            sent_at: iW
          })
        }(NW.data))), NW.url = Vt(NW.url, NW.method, NW.compression, NW.timestampMode);
        const LW = pt.filter((WW => !NW.disableTransport || !WW.transport || !NW.disableTransport.includes(WW.transport))),
          cW = null !== (mW = null === (EW = function(WW, iW) {
            for (let OW = 0; WW.length > OW; OW++)
              if (iW(WW[OW])) return WW[OW]
          }(LW, (WW => WW.transport === PW))) || void 0 === EW ? void 0 : EW.method) && void 0 !== mW ? mW : LW[0].method;
        if (!cW) throw new Error("No available transport method");
        const wW = WW => {
          try {
            cW(WW)
          } catch (WW) {
            var iW;
            dt(WW) ? pP.warn(WW) : pP.error(WW), null === (iW = NW.callback) || void 0 === iW || iW.call(NW, {
              statusCode: 0,
              error: WW
            })
          }
        };
        "sendBeacon" !== PW && !NW.preferSyncCompression && NW.data && NW.compression === sw.GZipJS && PO && "undefined" != typeof Promise && !yt ? ut(NW).then((WW => {
          wW(WW)
        })).catch((iW => {
          if (SN(iW)) return yt = !0, void wW(KE(KE({}, NW), {}, {
            compression: void 0,
            url: Vt(WW.url, WW.method, void 0, WW.timestampMode)
          }));
          (WW => {
            if (!WW || "object" != typeof WW) return !1;
            const iW = "name" in WW ? String(WW.name) : "";
            return SN(WW) || iW === sN
          })(iW) && (yt = !0), wW(NW)
        })) : wW(NW)
      })(iW, ((mW, EW) => {
        var NW, PW, LW;
        WW.rateLimiter.checkForLimiting(mW), 400 > mW.statusCode || null === (NW = (PW = WW.config).on_request_error) || void 0 === NW || NW.call(PW, mW), OW ? OW(mW, EW) : null === (LW = iW.callback) || void 0 === LW || LW.call(iW, mW)
      }))) : iW.fireCallbackOnDrop && (null === (NW = iW.callback) || void 0 === NW || NW.call(iW, {
        statusCode: 0
      }))
    }
    var Xt = class {
      constructor(WW, iW) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = rO((null == iW ? void 0 : iW.flush_interval_ms) || 3e3, 250, 5e3, pP.createLogger("flush interval"), 3e3), this._sendRequest = WW
      }
      enqueue(WW) {
        this._queue.push(WW), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const WW = this._queue.length > 0 ? this._formatQueue() : {},
          iW = Object.values(WW);
        [...iW.filter((WW => 0 === WW.url.indexOf("/e"))), ...iW.filter((WW => 0 !== WW.url.indexOf("/e")))].map((WW => {
          this._sendRequestSafely(KE(KE({}, WW), {}, {
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
          const WW = this._formatQueue();
          for (const iW in WW) this._sendRequestSafely(WW[iW])
        }
      }
      _sendRequestSafely(WW, iW) {
        try {
          this._sendRequest(WW, iW)
        } catch (WW) {
          pP.error(WW)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const WW = {},
          iW = {};
        XP(this._queue, (OW => {
          var mW;
          const EW = OW,
            NW = ((EW ? EW.batchKey : null) || EW.url) + (EW.batchGroup ? `:${EW.batchGroup}` : "");
          TO(WW[NW]) && (WW[NW] = KE(KE({}, EW), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), iW[NW] = []), null === (mW = WW[NW].data) || void 0 === mW || mW.push(EW.data), EW.callback && iW[NW].push(EW.callback)
        }));
        for (const OW in iW) {
          const mW = iW[OW];
          mW.length && (WW[OW].callback = WW => {
            for (const iW of mW) iW(WW)
          })
        }
        return this._queue = [], WW
      }
    };
    const Bt = ["retriesPerformedSoFar"];
    var qt = class {
        constructor(WW) {
          this._instance = WW, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!TO(Fi) && "onLine" in Fi.navigator) {
            if (this._areWeOnline = Fi.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, zP(Fi, "online", this._onlineListener), zP(Fi, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(WW, iW) {
          let {
            retriesPerformedSoFar: OW
          } = WW, mW = HN(WW, Bt);
          oO(OW) && (mW.url = Jt(mW.url, {
            retry_count: OW
          })), Ct(this._instance, iW ? KE(KE({}, mW), {}, {
            transport: iW
          }) : mW, ((WW, iW) => {
            var EW;
            if (200 !== WW.statusCode && (400 > WW.statusCode || WW.statusCode >= 500)) {
              if ((0 === WW.statusCode ? 3 : 10) > (null != OW ? OW : 0)) return void this._enqueue(KE({
                retriesPerformedSoFar: OW
              }, mW), iW);
              0 === WW.statusCode && pP.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=OW?OW:0} retries.`)
            }
            null === (EW = mW.callback) || void 0 === EW || EW.call(mW, WW)
          }))
        }
        _enqueue(WW, iW) {
          const OW = WW.retriesPerformedSoFar || 0;
          WW.retriesPerformedSoFar = OW + 1;
          const mW = Math.max(function(WW) {
              const iW = 3e3 * Math.pow(2, WW),
                OW = iW / 2,
                mW = Math.min(18e5, iW),
                EW = (Math.random() - .5) * (mW - OW);
              return Math.ceil(mW + EW)
            }(OW), null != iW ? iW : 0),
            EW = Date.now() + mW;
          this._queue.push({
            retryAt: EW,
            requestOptions: WW
          });
          let NW = `Enqueued failed request for retry in ${mW}`;
          navigator.onLine || (NW += " (Browser is offline)"), pP.warn(NW), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const WW = Date.now(),
            iW = [],
            OW = this._queue.filter((OW => WW > OW.retryAt || (iW.push(OW), !1)));
          if (this._queue = iW, OW.length > 0)
            for (const {
                requestOptions: mW
              }
              of OW) this.retriableRequest(mW)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, TO(Fi) || (this._onlineListener && (Fi.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (Fi.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: WW
            }
            of this._queue) try {
            this._instance._send_request(KE(KE({}, WW), {}, {
              callback: KO(WW.data) ? void 0 : WW.callback,
              transport: "sendBeacon"
            }))
          } catch (mW) {
            pP.error(mW)
          }
          this._queue = []
        }
      },
      Rt = class {
        constructor(WW) {
          this._instance = WW, this._updateScrollData = () => {
            var WW, iW, OW, mW;
            this._context || (this._context = {});
            const EW = this.scrollElement(),
              NW = this.scrollY(),
              PW = EW ? Math.max(0, EW.scrollHeight - EW.clientHeight) : 0,
              LW = NW + ((null == EW ? void 0 : EW.clientHeight) || 0),
              cW = (null == EW ? void 0 : EW.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(NW), this._context.maxScrollY = Math.max(NW, null !== (WW = this._context.maxScrollY) && void 0 !== WW ? WW : 0), this._context.maxScrollHeight = Math.max(PW, null !== (iW = this._context.maxScrollHeight) && void 0 !== iW ? iW : 0), this._context.lastContentY = LW, this._context.maxContentY = Math.max(LW, null !== (OW = this._context.maxContentY) && void 0 !== OW ? OW : 0), this._context.maxContentHeight = Math.max(cW, null !== (mW = this._context.maxContentHeight) && void 0 !== mW ? mW : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const WW = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), WW
        }
        startMeasuringScrollPosition() {
          zP(Fi, "scroll", this._updateScrollData, {
            capture: !0
          }), zP(Fi, "scrollend", this._updateScrollData, {
            capture: !0
          }), zP(Fi, "resize", this._updateScrollData)
        }
        scrollElement() {
          var WW;
          if (!this._scrollRoot) return null == Fi || null === (WW = Fi.document) || void 0 === WW ? void 0 : WW.documentElement;
          {
            const WW = KO(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const OW of WW) {
              var iW;
              const WW = null == Fi || null === (iW = Fi.document) || void 0 === iW ? void 0 : iW.querySelector(OW);
              if (WW) return WW
            }
          }
        }
        _scrollPosition(WW) {
          var iW, OW;
          const mW = "y" === WW ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const WW = this.scrollElement();
            return WW && WW[mW] || 0
          }
          return Fi ? "y" === WW ? Fi.scrollY || Fi.pageYOffset || (null === (iW = Fi.document) || void 0 === iW || null === (iW = iW.documentElement) || void 0 === iW ? void 0 : iW.scrollTop) || 0 : Fi.scrollX || Fi.pageXOffset || (null === (OW = Fi.document) || void 0 === OW || null === (OW = OW.documentElement) || void 0 === OW ? void 0 : OW.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const Gt = WW => Ow(null == WW ? void 0 : WW.config.mask_personal_data_properties, null == WW ? void 0 : WW.config.custom_personal_data_properties, null == WW ? void 0 : WW.config.disable_capture_url_hashes);
    var It = class {
        constructor(WW, iW, OW, mW) {
          this._onSessionIdCallback = WW => {
            const iW = this._getStored();
            if (iW && iW.sessionId === WW) return;
            const OW = {
              sessionId: WW,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [si]: OW
            })
          }, this._instance = WW, this._sessionIdManager = iW, this._persistence = OW, this._sessionSourceParamGenerator = mW || Gt, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[si]
        }
        getSetOnceProps() {
          var WW;
          const iW = null === (WW = this._getStored()) || void 0 === WW ? void 0 : WW.props;
          return iW ? "r" in iW ? mw(iW, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: iW.referringDomain,
            $pathname: iW.initialPathName,
            utm_source: iW.utm_source,
            utm_campaign: iW.utm_campaign,
            utm_medium: iW.utm_medium,
            utm_content: iW.utm_content,
            utm_term: iW.utm_term
          } : {}
        }
        getSessionProps() {
          const WW = {};
          return XP(GP(this.getSetOnceProps()), ((iW, OW) => {
            "$current_url" === OW && (OW = "url"), WW[`$session_entry_${jO(OW)}`] = iW
          })), WW
        }
      },
      rt = class {
        on(WW, iW) {
          return this._events[WW] || (this._events[WW] = []), this._events[WW].push(iW), () => {
            this._events[WW] = this._events[WW].filter((WW => WW !== iW))
          }
        }
        emit(WW, iW) {
          for (const OW of this._events[WW] || []) OW(iW);
          for (const OW of this._events["*"] || []) OW(WW, iW)
        }
        constructor() {
          this._events = {}
        }
      };
    const zt = fP("[SessionId]"),
      Ft = 864e5;
    var Qt = class {
      on(WW, iW) {
        return this._eventEmitter.on(WW, iW)
      }
      constructor(WW, iW, OW) {
        var mW;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new rt, this._sessionHasBeenIdleTooLong = (WW, iW) => !(!oO(WW) || !oO(iW)) && Math.abs(WW - iW) > this.sessionTimeoutMs, !WW.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === WW.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = WW.config, this._persistence = WW.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = iW || NL, this._windowIdGenerator = OW || NL;
        const EW = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * rO(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, zt.createLogger("session_idle_timeout_seconds"), 1800), WW.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + EW + "_window_id", this._primary_window_exists_storage_key = "ph_" + EW + "_primary_window_exists", this._canUseSessionStorage()) {
          const WW = JL._parse(this._window_id_storage_key),
            iW = JL._parse(this._primary_window_exists_storage_key);
          WW && !iW ? this._windowId = WW : JL._remove(this._window_id_storage_key), JL._set(this._primary_window_exists_storage_key, !0)
        }(null === (mW = this._config.bootstrap) || void 0 === mW ? void 0 : mW.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(WW) {
        return TO(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(WW), this._sessionId && WW(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((iW => iW !== WW))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && JL._is_supported()
      }
      _setWindowId(WW) {
        WW !== this._windowId && (this._windowId = WW, this._canUseSessionStorage() && JL._set(this._window_id_storage_key, WW))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? JL._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(WW) {
        const iW = this._lastPersistedActivityTimestamp;
        return !HO(iW) && !HO(WW) && 5e3 > Math.abs(WW - iW)
      }
      _setSessionId(WW, iW, OW) {
        const mW = iW !== this._sessionActivityTimestamp,
          EW = !(WW !== this._sessionId || OW !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = OW, this._sessionActivityTimestamp = iW, this._sessionId = WW, EW && !mW || EW && this._isActivityChangeBelowGranularity(iW) || (this._lastPersistedActivityTimestamp = iW, this._persistence.register({
          [FW]: [iW, WW, OW]
        }))
      }
      _useCrossTabRefreshHardening() {
        var WW;
        const iW = null === (WW = this._config) || void 0 === WW ? void 0 : WW.persistence_save_debounce_ms;
        return oO(iW) && iW > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(FW) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var WW;
        if (HO(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, iW, OW] = this._getSessionId();
        iW === this._sessionId && OW === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [FW]: [this._sessionActivityTimestamp, null !== (WW = this._sessionId) && void 0 !== WW ? WW : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [WW] = this._getSessionId(), iW = oO(WW) ? WW : 0, OW = oO(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(iW, OW)
      }
      _isSessionIdleAfterCrossTabRefresh(WW) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(WW, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const WW = this._persistence.props[FW];
        return KO(WW) && 2 === WW.length && WW.push(WW[0]), WW || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const OW = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const OW = (WW => {
              const iW = WW.replace(/-/g, "");
              if (32 !== iW.length) throw new Error("Not a valid UUID");
              if ("7" !== iW[12]) throw new Error("Not a UUIDv7");
              return parseInt(iW.substring(0, 12), 16)
            })(WW);
            return OW > iW + 6e4 ? void zt.error("Bootstrap sessionID cannot be in the future") : OW
          } catch (WW) {
            return void zt.error("Invalid sessionID in bootstrap", WW)
          }
        }(WW);
        return !TO(OW) && (iW ? this._pendingBootstrapSession = {
          sessionId: WW,
          sessionStartTimestamp: OW
        } : this._setSessionId(WW, (new Date).getTime(), OW), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && Fi && (Fi.removeEventListener(Gi, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && JL._remove(this._primary_window_exists_storage_key)
        }, zP(Fi, Gi, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const mW = iW || (new Date).getTime(),
          EW = this._sessionId;
        if (OW) this._lastCookieSyncTimestamp = mW;
        else if (HO(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > mW || mW - this._lastCookieSyncTimestamp >= 1e3) {
          var NW, PW;
          null === (NW = (PW = this._persistence).syncCookieProperties) || void 0 === NW || NW.call(PW), this._lastCookieSyncTimestamp = mW
        }
        let [, LW, cW] = this._getSessionId();
        const wW = !TO(EW) && LW !== EW,
          tW = this._freshestActivityTimestamp();
        let ZW = this._getWindowId();
        const xW = this._pendingBootstrapSession,
          lW = !!xW && (xW.sessionStartTimestamp > mW + 6e4 || mW - xW.sessionStartTimestamp > Ft),
          AW = xW ? lW : oO(cW) && Math.abs(mW - cW) > Ft;
        let bW = !1,
          jW = wW,
          UW = !LW || !!xW;
        const kW = LW;
        let sW = !UW && !WW && this._sessionHasBeenIdleTooLong(mW, tW);
        if (sW && (sW = this._isSessionIdleAfterCrossTabRefresh(mW), sW || zt.info("cross-tab refresh kept the session alive", {
            sessionId: LW
          }), [, LW, cW] = this._getSessionId(), sW || (UW = !LW || !!xW)), UW || sW || AW) {
          jW = !1;
          const WW = xW && !lW;
          LW = WW ? xW.sessionId : this._sessionIdGenerator(), ZW = this._windowIdGenerator(), zt.info("new session ID assigned", {
            sessionId: LW,
            windowId: ZW,
            bootstrapped: !!WW,
            changeReason: {
              noSessionId: UW,
              activityTimeout: sW,
              sessionPastMaximumLength: AW
            }
          }), cW = WW ? xW.sessionStartTimestamp : mW, this._pendingBootstrapSession = void 0, bW = !0
        } else ZW || (ZW = this._windowIdGenerator(), bW = !0), jW = jW || LW !== kW, jW && (zt.info("adopted cross-tab session id", {
          sessionId: LW,
          windowId: ZW
        }), bW = !0);
        const MW = oO(tW) && WW && !AW ? tW : mW,
          KW = oO(cW) ? cW : (new Date).getTime();
        this._setWindowId(ZW), this._setSessionId(LW, MW, KW), WW || this._resetIdleTimer();
        const SW = {
          noSessionId: UW,
          activityTimeout: sW,
          sessionPastMaximumLength: AW,
          crossTabAdoption: jW
        };
        return bW && this._sessionIdChangedHandlers.forEach((WW => WW(LW, ZW, SW))), {
          sessionId: LW,
          windowId: ZW,
          sessionStartTimestamp: KW,
          changeReason: bW ? SW : void 0,
          lastActivityTimestamp: tW
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const WW = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: WW
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const WZ = function(WW, iW) {
      if (!WW) return !1;
      const OW = WW.userAgent;
      if (OW && aO(OW, iW)) return !0;
      try {
        const OW = null == WW ? void 0 : WW.userAgentData;
        if ((null == OW ? void 0 : OW.brands) && OW.brands.some((WW => aO(null == WW ? void 0 : WW.brand, iW)))) return !0
      } catch (WW) {}
      return !!WW.webdriver
    };

    function iZ() {
      return (iZ = RO((function*() {
        const WW = null == WO ? void 0 : WO.userAgentData;
        if (null == WW ? void 0 : WW.getHighEntropyValues) try {
          const iW = yield WW.getHighEntropyValues(["model"]), OW = null == iW ? void 0 : iW.model;
          return JO(OW) && OW.length > 0 ? OW : void 0
        } catch (WW) {
          return void pP.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", WW)
        }
      }))).apply(this, arguments)
    }

    function OZ(WW, iW) {
      let OW = `$survey_${iW}/${WW.id}`;
      return WW.current_iteration && WW.current_iteration > 0 && (OW = `$survey_${iW}/${WW.id}/${WW.current_iteration}`), OW
    }

    function mZ(WW) {
      var iW;
      return !!(null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.events) || void 0 === iW || null === (iW = iW.values) || void 0 === iW ? void 0 : iW.length)
    }
    const EZ = (WW, iW) => {
        if (!(WW => {
            try {
              new RegExp(WW)
            } catch (WW) {
              return !1
            }
            return !0
          })(iW)) return !1;
        try {
          return new RegExp(iW).test(WW)
        } catch (WW) {
          return !1
        }
      },
      NZ = WW => WW.toLowerCase(),
      PZ = {
        exact: (WW, iW) => iW.some((iW => WW.some((WW => iW === WW)))),
        is_not: (WW, iW) => iW.every((iW => WW.every((WW => iW !== WW)))),
        regex: (WW, iW) => iW.some((iW => WW.some((WW => EZ(iW, WW))))),
        not_regex: (WW, iW) => iW.every((iW => WW.every((WW => !EZ(iW, WW))))),
        icontains: (WW, iW) => iW.map(NZ).some((iW => WW.map(NZ).some((WW => iW.includes(WW))))),
        not_icontains: (WW, iW) => iW.map(NZ).every((iW => WW.map(NZ).every((WW => !iW.includes(WW))))),
        gt: (WW, iW) => iW.some((iW => {
          const OW = parseFloat(iW);
          return !isNaN(OW) && WW.some((WW => OW > parseFloat(WW)))
        })),
        lt: (WW, iW) => iW.some((iW => {
          const OW = parseFloat(iW);
          return !isNaN(OW) && WW.some((WW => OW < parseFloat(WW)))
        }))
      };

    function LZ(WW, iW) {
      return !WW || Object.entries(WW).every((WW => {
        let [OW, mW] = WW;
        const EW = null == iW ? void 0 : iW[OW];
        if (null == EW) return !1;
        const NW = PZ[mW.operator];
        return !!NW && NW(mW.values.map(String), [String(EW)])
      }))
    }

    function cZ(WW, iW, OW) {
      return pc({
        distinct_id: WW,
        userPropertiesToSet: iW,
        userPropertiesToSetOnce: OW
      })
    }
    const wZ = "custom",
      tZ = "i.posthog.com",
      ZZ = /^\/static\//,
      xZ = ["/s/", "/e/", "/i/"];
    var lZ = class {
      constructor(WW) {
        this._regionCache = {}, this.instance = WW
      }
      get apiHost() {
        const WW = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === WW ? "https://us.i.posthog.com" : WW
      }
      get flagsApiHost() {
        const WW = this.instance.config.flags_api_host;
        return WW ? WW.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var WW;
        let iW = null === (WW = this.instance.config.ui_host) || void 0 === WW ? void 0 : WW.replace(/\/$/, "");
        return iW || (iW = this.apiHost.replace(`.${tZ}`, ".posthog.com")), "https://app.posthog.com" === iW ? "https://us.posthog.com" : iW
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : wZ), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(WW) {
        if (!ZZ.test(WW)) return;
        const iW = this.instance.config.asset_host;
        return "string" == typeof iW && iW.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(WW) {
        const iW = fc(WW);
        return iW ? iW.protocol + "//" + iW.host + iW.pathname : void 0
      }
      _prepareEndpoint(WW, iW, OW) {
        if ("ui" === WW) return OW;
        let mW = OW;
        const EW = this.instance.config.rewriteRequestPath;
        if (EW) {
          var NW;
          const WW = (null === (NW = fc(OW)) || void 0 === NW ? void 0 : NW.href) || OW;
          mW = EW(new URL(WW)).toString()
        }
        if (EW && "api" === WW && xZ.some((WW => 0 === iW.indexOf(WW)))) {
          const WW = this._urlKey(mW);
          if (WW) {
            const iW = this.apiHost;
            let OW = this._ingestionEndpoints;
            (null == OW ? void 0 : OW.apiHost) === iW && OW.rewriteRequestPath === EW || (OW = {
              apiHost: iW,
              rewriteRequestPath: EW,
              urls: new Set
            }, this._ingestionEndpoints = OW), OW.urls.add(WW)
          }
        }
        return mW
      }
      isIngestionEndpoint(WW) {
        const iW = this._ingestionEndpoints,
          OW = this._urlKey(WW);
        return (null == iW ? void 0 : iW.apiHost) === this.apiHost && iW.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!OW && iW.urls.has(OW)
      }
      endpointFor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (iW && (iW = "/" === iW[0] ? iW : `/${iW}`), "ui" === WW) return this._prepareEndpoint(WW, iW, this.uiHost + iW);
        if ("flags" === WW) return this._prepareEndpoint(WW, iW, this.flagsApiHost + iW);
        if ("assets" === WW) {
          const OW = this._staticAssetHostOverride(iW);
          if (OW) return this._prepareEndpoint(WW, iW, `${OW}${iW}`)
        }
        if (this.region === wZ) return this._prepareEndpoint(WW, iW, this.apiHost + iW);
        const OW = tZ + iW;
        switch (WW) {
          case "assets":
            return this._prepareEndpoint(WW, iW, `https://${this.region}-assets.${OW}`);
          case "api":
            return this._prepareEndpoint(WW, iW, `https://${this.region}.${OW}`)
        }
      }
    };
    const AZ = fP("[Surveys]"),
      bZ = WW => {
        try {
          const iW = (WW => ((WW, iW) => `seenSurvey_${function(WW){return WW.current_iteration&&WW.current_iteration>0?`${WW.id}_${WW.current_iteration}`:WW.id}(iW)}`)(0, WW))(WW);
          if (localStorage.getItem(iW)) return;
          localStorage.setItem(iW, "true")
        } catch (WW) {
          AZ.error("Failed to persist survey seen state", WW)
        }
      },
      jZ = [Sw, yw, Yw],
      UZ = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: ow
      },
      kZ = fP("[PostHog ExternalIntegrations]"),
      sZ = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var MZ = class {
      constructor(WW) {
        this._instance = WW
      }
      _loadScript(WW, iW) {
        var OW, mW;
        null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this._instance, WW, (WW => {
          if (WW) return kZ.error("failed to load script", WW);
          iW()
        }))
      }
      startIfEnabledOrStop() {
        var WW;
        for (const [EW, NW] of Object.entries(null !== (WW = this._instance.config.integrations) && void 0 !== WW ? WW : {})) {
          var iW, OW, mW;
          NW && !(null === (iW = wO.__PosthogExtensions__) || void 0 === iW || null === (iW = iW.integrations) || void 0 === iW ? void 0 : iW[EW]) && this._loadScript(sZ[EW], (() => {
            var WW;
            null === (WW = wO.__PosthogExtensions__) || void 0 === WW || null === (WW = WW.integrations) || void 0 === WW || null === (WW = WW[EW]) || void 0 === WW || WW.start(this._instance)
          })), !NW && (null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (OW = OW.integrations) || void 0 === OW ? void 0 : OW[EW]) && (null === (mW = wO.__PosthogExtensions__) || void 0 === mW || null === (mW = mW.integrations) || void 0 === mW || null === (mW = mW[EW]) || void 0 === mW || mW.stop())
        }
      }
    };
    const KZ = "autocapture",
      SZ = "featureFlags",
      YZ = "logs",
      yZ = "surveys";
    var TZ = class {
        constructor(WW) {
          this._instance = WW
        }
        initialize() {}
        get(WW) {
          const iW = this._instance.persistence;
          if ("string" == typeof WW) return null == iW ? void 0 : iW.get_property(WW);
          const OW = {};
          for (const mW of WW) {
            const WW = null == iW ? void 0 : iW.get_property(mW);
            TO(WW) || (OW[mW] = WW)
          }
          return OW
        }
        set(WW, iW) {
          var OW;
          null === (OW = this._instance.persistence) || void 0 === OW || OW.register("string" == typeof WW ? {
            [WW]: iW
          } : WW)
        }
        remove(WW) {
          var iW;
          null === (iW = this._instance.persistence) || void 0 === iW || iW.unregister(WW)
        }
      },
      JZ = class {
        constructor(WW) {
          this.instance = WW, this._logger = pP, this.kv = new TZ(WW), this.onEvent = WW => ew(this.instance._addCaptureHook(((iW, OW) => {
            if (OW) try {
              WW({
                event: iW,
                properties: OW.properties
              })
            } catch (WW) {
              this._logger.error("Browser extension event listener failed", WW)
            }
          }))), this.onRemoteConfig = WW => {
            const iW = iW => {
                try {
                  WW(iW)
                } catch (WW) {
                  this._logger.error("Browser extension remote config listener failed", WW)
                }
              },
              OW = this.instance._internalEventEmitter.on("extensionsRemoteConfig", iW);
            return this.instance._lastRemoteConfig && iW(this.instance._lastRemoteConfig), ew(OW)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var WW;
          return null !== (WW = this.instance.get_property("$device_id")) && void 0 !== WW ? WW : this.distinctId
        }
        get deviceId() {
          const WW = this.instance.get_property(yW);
          return "string" == typeof WW ? WW : void 0
        }
        get library() {
          return {
            name: NW.LIB_NAME,
            version: NW.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var WW, iW;
          return null !== (WW = null === (iW = this.instance.persistence) || void 0 === iW ? void 0 : iW.get_initial_props()) && void 0 !== WW ? WW : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var WW, iW, OW, mW, EW;
            const NW = null === (WW = this.instance.sessionManager) || void 0 === WW ? void 0 : WW.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (iW = null == NW ? void 0 : NW.sessionId) && void 0 !== iW ? iW : "",
              windowId: null !== (OW = null == NW ? void 0 : NW.windowId) && void 0 !== OW ? OW : "",
              sessionStartTimestamp: null !== (mW = null == NW ? void 0 : NW.sessionStartTimestamp) && void 0 !== mW ? mW : 0,
              lastActivityTimestamp: null !== (EW = null == NW ? void 0 : NW.lastActivityTimestamp) && void 0 !== EW ? EW : 0
            }
          } catch (WW) {
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
          return SO(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(WW) {
          let iW;
          switch (WW) {
            case SZ:
            case "featureFlagsCommon":
              iW = this.instance.featureFlags;
              break;
            case YZ:
              iW = this.instance.logs;
              break;
            case yZ:
              iW = this.instance.surveys;
              break;
            case KZ:
              iW = this.instance.autocapture
          }
          return iW
        }
        capture(WW, iW, OW) {
          OW ? this.instance.capture(WW, iW, {
            timestamp: OW.timestamp,
            uuid: OW.uuid,
            $set: OW.set,
            $set_once: OW.setOnce
          }) : this.instance.capture(WW, iW)
        }
        registerDynamicEventProperties(WW) {
          return ew(this.instance._registerExtensionEventProperties(WW))
        }
        sendRequest(WW) {
          var iW = this;
          return RO((function*(WW) {
            let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var mW;
            const EW = null !== (mW = OW.target) && void 0 !== mW ? mW : "api",
              NW = iW.instance.requestRouter.endpointFor(EW, WW),
              PW = "api" === EW && "/i/v1/logs" === WW,
              LW = {
                method: OW.method,
                url: OW.query ? Jt(NW, OW.query) : NW,
                data: OW.body,
                headers: OW.headers,
                timeout: OW.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: OW.transport,
                compression: OW.compression,
                compressionFallback: "flags" === OW.target && "best-available" === OW.compression ? ZO.Base64 : void 0,
                timestampMode: OW.sentAt
              };
            return PW && (LW.batchKey = "logs"), "sendBeacon" === OW.transport ? (iW.instance._send_request(LW), {
              statusCode: 202
            }) : new Promise((WW => {
              LW.callback = WW, iW.instance._send_request(LW)
            }))
          })).apply(this, arguments)
        }
      };
    const hZ = {};
    let HZ = 0;
    const nZ = () => {},
      uZ = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      oZ = "Surveys module not available",
      dZ = "sanitize_properties is deprecated. Use before_send instead",
      eZ = "Invalid value for property_denylist config: ",
      vZ = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      gZ = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      DZ = WW => "$" === WW.charAt(0) && !AO(gZ, WW),
      VZ = /^[A-Za-z0-9_-]{1,400}$/,
      pZ = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      fZ = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      CZ = ["token", "distinct_id", Ji],
      XZ = "posthog",
      BZ = WW => {
        const iW = {};
        return WW && "unset" !== WW ? ("2025-11-30" > WW || (iW.strictMinimumDuration = !0), "2026-05-30" > WW || (iW.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > WW || (iW.streamNetworkBody = !0), "2026-08-30" > WW || (iW.captureJsonLd = !0), iW) : iW
      },
      qZ = WW => {
        var iW;
        return KE({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: rP(null == iO ? void 0 : iO.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: nZ,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != WW ? WW : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: OO && JO(null == OO ? void 0 : OO.search) && -1 !== OO.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == Fi || null === (iW = Fi.location) || void 0 === iW ? void 0 : iW.protocol),
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
          on_request_error(WW) {
            pP.error("Bad HTTP status: " + WW.statusCode + " " + WW.text)
          },
          get_device_id: WW => WW,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: Ri,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: nZ
        }, (WW => ({
          rageclick: WW && WW >= "2026-05-30" ? {
            content_ignorelist: IL,
            ignore_text_selection: !0
          } : !WW || "2025-11-30" > WW || {
            content_ignorelist: !0
          },
          capture_pageview: !WW || "2025-05-24" > WW || "history_change",
          session_recording: BZ(WW),
          external_scripts_inject_target: WW && WW >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: WW && WW >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: WW && WW >= "2026-05-30" ? 250 : 0,
          split_storage: !(!WW || "2026-05-30" > WW),
          detect_google_search_app: !(!WW || "2026-05-30" > WW),
          disable_capture_url_hashes: !(!WW || "2026-06-25" > WW),
          cookieWinsOnConflict: !(!WW || "unset" === WW || "2026-08-29" > WW)
        }))(WW))
      },
      RZ = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      GZ = WW => {
        const iW = {};
        for (const [EW, NW] of RZ) TO(WW[EW]) || (iW[NW] = WW[EW]);
        const OW = BP({}, iW, WW),
          mW = WW.__preview_external_dependency_versioned_paths;
        return TO(mW) || (TO(WW.strict_script_versioning) && (OW.strict_script_versioning = !!mW), JO(mW) && TO(WW.asset_host) && (OW.asset_host = mW)), KO(WW.property_blacklist) && (TO(WW.property_denylist) ? OW.property_denylist = WW.property_blacklist : KO(WW.property_denylist) ? OW.property_denylist = [...WW.property_blacklist, ...WW.property_denylist] : pP.error(eZ + WW.property_denylist)), OW
      };
    var IZ = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(WW) {
          pP.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = WW
        }
      },
      aZ = class WW {
        _removeExtension(WW) {
          if (!WW) return;
          const iW = this._extensions.indexOf(WW); - 1 !== iW && this._extensions.splice(iW, 1)
        }
        _replaceExtension(WW, iW) {
          var OW;
          return this._removeExtension(WW), this._extensions.push(iW), null === (OW = iW.initialize) || void 0 === OW || OW.call(iW), iW
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const WW = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!WW && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let iW, OW, mW;
          WW ? (iW = `persistence is set to '${this.config.persistence}'`, OW = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", mW = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (iW = "persistence is disabled (disable_persistence is true)", OW = "on every page load", mW = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${iW} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${OW}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${mW}`)
        }
        _syncCookielessIdentity() {
          const WW = this.persistence;
          if (!WW || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || WW.load(!0);
          const iW = this.get_distinct_id();
          if (!iW || "$posthog_cookieless" === iW) {
            const iW = this.config.get_device_id(NL());
            this.register({
              distinct_id: iW,
              $device_id: iW
            }), WW.set_property(ki, Bi)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var WW, iW;
          return null !== (WW = null === (iW = this.featureFlags) || void 0 === iW ? void 0 : iW.hasLoadedFlags) && void 0 !== WW && WW
        }
        get flagsEndpointWasHit() {
          var WW, iW;
          return null !== (WW = null === (iW = this.featureFlags) || void 0 === iW ? void 0 : iW.hasLoadedFlags) && void 0 !== WW && WW
        }
        constructor() {
          var iW;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new IZ, this._personProcessingSetOncePropertiesSent = !1, this.version = NW.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new rt, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = qZ(), this.SentryIntegration = Hc, this.sentryIntegration = WW => function(WW, iW) {
            const OW = hc(WW, iW);
            return {
              name: Jc,
              processEvent: WW => OW(WW)
            }
          }(this, WW), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new Rt(this), this.pageViewManager = new nc(this), this.rateLimiter = new pw(this), this.requestRouter = new lZ(this), this.consent = new hL(this), this.externalIntegrations = new MZ(this);
          const OW = null !== (iW = WW.__defaultExtensionClasses) && void 0 !== iW ? iW : {};
          this.featureFlags = OW.featureFlags && new OW.featureFlags(this), this.toolbar = OW.toolbar && new OW.toolbar(this), this.surveys = OW.surveys && new OW.surveys(this), this.conversations = OW.conversations && new OW.conversations(this), this.logs = OW.logs && new OW.logs(this), this.metrics = OW.metrics && new OW.metrics(this), this.experiments = OW.experiments && new OW.experiments(this), this.exceptions = OW.exceptions && new OW.exceptions(this), this.people = {
            set: (WW, iW, OW) => {
              const mW = JO(WW) ? {
                [WW]: iW
              } : WW;
              this.setPersonProperties(mW), null == OW || OW({})
            },
            set_once: (WW, iW, OW) => {
              const mW = JO(WW) ? {
                [WW]: iW
              } : WW;
              this.setPersonProperties(void 0, mW), null == OW || OW({})
            }
          }, this.on("eventCaptured", (WW => pP.info(`send "${null==WW?void 0:WW.event}"`, WW)))
        }
        init(iW, OW, mW) {
          if (mW && mW !== XZ) {
            var EW;
            const NW = null !== (EW = hZ[mW]) && void 0 !== EW ? EW : new WW;
            return NW._init(iW, OW, mW), hZ[mW] = NW, hZ[XZ][mW] = NW, NW
          }
          return this._init(iW, OW, mW)
        }
        _init(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 ? arguments[2] : void 0;
          var mW, EW, PW;
          const LW = JO(WW) ? WW.trim() : "";
          if (!LW) return pP.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var cW;
          if (this.__loaded) return LW !== (null === (cW = this.config) || void 0 === cW ? void 0 : cW.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${LW}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = qZ(iW.defaults), iW.debug = this._checkLocalStorageForDebug(iW.debug), this._originalUserConfig = iW, this._triggered_notifs = [], iW.person_profiles ? this._initialPersonProfilesConfig = iW.person_profiles : iW.process_person && (this._initialPersonProfilesConfig = iW.process_person);
          const wW = qZ(iW.defaults),
            tW = GZ(iW),
            ZW = BP({}, wW, tW, {
              name: OW,
              token: LW
            });
          YO(wW.rageclick) && YO(tW.rageclick) && (ZW.rageclick = BP({}, wW.rageclick, tW.rageclick)), YO(wW.session_recording) && YO(tW.session_recording) && (ZW.session_recording = BP({}, wW.session_recording, tW.session_recording)), this.set_config(ZW), this.config.on_xhr_error && pP.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = iW.disable_compression ? void 0 : sw.GZipJS;
          const xW = this._is_persistence_disabled(),
            lW = !this._inCookielessMode();
          if (this.persistence = new kw(this.config, xW, !0, lW), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new kw(KE(KE({}, this.config), {}, {
              persistence: "sessionStorage"
            }), xW, !1, lW), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !xW && JL._is_supported()) {
            const WW = JL._parse(this._sessionRegisteredPropertiesStorageKey);
            KO(WW) && WW.forEach((WW => {
              JO(WW) && this._sessionRegisteredPropKeys.add(WW)
            }))
          } else JL._remove(this._sessionRegisteredPropertiesStorageKey);
          const AW = KE({}, this.persistence.props),
            bW = KE({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new Xt(((WW, iW) => this._send_retriable_request(WW, iW)), this.config.request_queue_config), this._retryQueue = new qt(this), this.__request_queue = [];
          const jW = this._inCookielessMode();
          jW || (this.sessionManager = new Qt(this), this.sessionPropsManager = new It(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((WW, iW, OW) => {
            ((null == OW ? void 0 : OW.activityTimeout) || (null == OW ? void 0 : OW.sessionPastMaximumLength) || (null == OW ? void 0 : OW.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (pP.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(jW)
          }), 0)) : (pP.info("Initializing extensions synchronously"), this._initExtensions(jW)), NW.DEBUG = NW.DEBUG || this.config.debug, NW.DEBUG && pP.info("Starting in debug mode", {
            this: this,
            config: iW,
            thisC: KE({}, this.config),
            p: AW,
            s: bW
          }), this.config.identity_distinct_id && !(null === (mW = iW.bootstrap) || void 0 === mW ? void 0 : mW.distinctID) && (iW.bootstrap = KE(KE({}, iW.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const UW = null === (EW = iW.bootstrap) || void 0 === EW ? void 0 : EW.distinctID;
          if (this._hasStableInitialDistinctId = !!UW && !hO(UW), null === (PW = iW.bootstrap) || void 0 === PW ? void 0 : PW.distinctID) {
            const WW = iW.bootstrap.distinctID,
              OW = this.get_distinct_id(),
              mW = this.persistence.get_property(ki);
            if (iW.bootstrap.isIdentifiedID && null != OW && OW !== WW && "anonymous" === mW) this.identify(WW);
            else if (iW.bootstrap.isIdentifiedID && null != OW && OW !== WW && "identified" === mW) pP.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const OW = this.config.get_device_id(NL()),
                mW = iW.bootstrap.isIdentifiedID ? OW : WW;
              this.persistence.set_property(ki, iW.bootstrap.isIdentifiedID ? qi : Bi), this.register({
                distinct_id: WW,
                $device_id: mW
              })
            }
          }
          if (jW) this.register_once({
            distinct_id: Ti,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const WW = this.config.get_device_id(NL());
            this.register_once({
              distinct_id: WW,
              $device_id: WW
            }, ""), this.persistence.set_property(ki, Bi)
          }
          return zP(Fi, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), zP(Fi, "pageshow", (() => {
            var WW;
            this._isPageUnloading = !1, this._isShutdown || null === (WW = this._retryQueue) || void 0 === WW || WW.resume()
          })), iW.segment ? Tc(this, (() => this._loaded())) : this._loaded(), SO(this.config._onCapture) && this.config._onCapture !== nZ && (pP.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (WW => this.config._onCapture(WW.event, WW)))), this.config.ip && pP.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return iZ.apply(this, arguments)
          }().then((WW => {
            WW && this.register({
              [TW]: WW
            })
          })).catch(nZ), this
        }
        _isSharedExtension(WW) {
          const iW = WW;
          return JO(iW.name) && SO(iW.setup)
        }
        _enrollExtension(WW, iW) {
          var OW = this;
          this._isSharedExtension(WW) ? iW.push(RO((function*() {
            try {
              yield WW.setup(OW._getBrowserClientAdapter())
            } catch (OW) {
              pP.error(`Failed to set up extension "${WW.name}"`, OW);
              try {
                var iW;
                yield null === (iW = WW.dispose) || void 0 === iW ? void 0 : iW.call(WW)
              } catch (iW) {
                pP.error(`Failed to dispose extension "${WW.name}"`, iW)
              }
            }
          }))) : this._extensions.push(WW)
        }
        _enrollFeatureFlags() {
          var iW, OW, mW, EW = this;
          const NW = null !== (iW = null === (OW = this.config.__extensionClasses) || void 0 === OW ? void 0 : OW.featureFlags) && void 0 !== iW ? iW : null === (mW = WW.__defaultExtensionClasses) || void 0 === mW ? void 0 : mW.featureFlags;
          var PW, LW, cW;
          if (NW)
            if (this.featureFlags && this.featureFlags instanceof NW || (null === (PW = this._featureFlagsReloadingUnsubscribe) || void 0 === PW || PW.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new NW(this)), SO(this.featureFlags.onReloading) && SO(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const WW = this.featureFlags;
                RO((function*() {
                  try {
                    yield WW.setup(EW._getBrowserClientAdapter())
                  } catch (iW) {
                    pP.error("Failed to set up feature flags", iW);
                    const mW = EW._featureFlagsReloadingUnsubscribe;
                    EW._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == mW || mW()
                    } catch (WW) {
                      pP.error("Failed to unsubscribe feature flag reloading", WW)
                    }
                    try {
                      yield WW.dispose()
                    } catch (WW) {
                      pP.error("Failed to dispose feature flags", WW)
                    }
                  }
                }))()
              }
            } else null === (LW = (cW = this.featureFlags).initialize) || void 0 === LW || LW.call(cW)
        }
        _initExtensions(iW) {
          const OW = performance.now(),
            mW = KE(KE({}, WW.__defaultExtensionClasses), this.config.__extensionClasses),
            EW = [];
          var NW, PW, LW, cW, wW, tW, ZW, xW;
          mW.exceptions && this._extensions.push(this.exceptions = null !== (NW = this.exceptions) && void 0 !== NW ? NW : new mW.exceptions(this)), mW.historyAutocapture && this._extensions.push(this.historyAutocapture = new mW.historyAutocapture(this)), mW.tracingHeaders && this._extensions.push(this.tracingHeaders = new mW.tracingHeaders(this)), mW.siteApps && this._extensions.push(this.siteApps = new mW.siteApps(this)), mW.sessionRecording && !iW && this._extensions.push(this.sessionRecording = new mW.sessionRecording(this)), this.config.disable_scroll_properties || EW.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), mW.autocapture && this._enrollExtension(this.autocapture = new mW.autocapture(this), EW), mW.surveys && this._enrollExtension(this.surveys = null !== (PW = this.surveys) && void 0 !== PW ? PW : new mW.surveys(this), EW), mW.logs && this._enrollExtension(this.logs = null !== (LW = this.logs) && void 0 !== LW ? LW : new mW.logs(this), EW), mW.metrics && this._extensions.push(this.metrics = null !== (cW = this.metrics) && void 0 !== cW ? cW : new mW.metrics(this)), mW.conversations && this._extensions.push(this.conversations = null !== (wW = this.conversations) && void 0 !== wW ? wW : new mW.conversations(this)), mW.productTours && this._extensions.push(this.productTours = new mW.productTours(this)), mW.heatmaps && this._extensions.push(this.heatmaps = new mW.heatmaps(this)), mW.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new mW.webVitalsAutocapture(this)), mW.exceptionObserver && this._extensions.push(this.exceptionObserver = new mW.exceptionObserver(this)), mW.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new mW.deadClicksAutocapture(this, Sc)), mW.toolbar && this._extensions.push(this.toolbar = null !== (tW = this.toolbar) && void 0 !== tW ? tW : new mW.toolbar(this)), mW.experiments && this._extensions.push(this.experiments = null !== (ZW = this.experiments) && void 0 !== ZW ? ZW : new mW.experiments(this)), mW.webMCP && this._extensions.push(this.webMCP = null !== (xW = this.webMCP) && void 0 !== xW ? xW : new mW.webMCP(this)), this._extensions.forEach((WW => {
            WW.initialize && EW.push((() => {
              var iW;
              null === (iW = WW.initialize) || void 0 === iW || iW.call(WW)
            }))
          })), EW.push((() => {
            if (this._pendingRemoteConfig) {
              const WW = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((iW => {
                var OW;
                return null === (OW = iW.onRemoteConfig) || void 0 === OW ? void 0 : OW.call(iW, WW)
              }))
            }
          })), this._processInitTaskQueue(EW, OW)
        }
        _processInitTaskQueue(WW, iW) {
          for (; WW.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - iW >= 30 && WW.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(WW, iW)
            }), 0));
            const OW = WW.shift();
            if (OW) try {
              OW()
            } catch (WW) {
              pP.error("Error initializing extension:", WW)
            }
          }
          const OW = Math.round(performance.now() - iW);
          this.register_for_session({
            [Hi]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [ni]: OW
          }), this.config.__preview_deferred_init_extensions && pP.info(`PostHog extensions initialized (${OW}ms)`)
        }
        _onRemoteConfig(WW) {
          if (!iO || !iO.body) return pP.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(WW)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = WW), this._lastRemoteConfig = WW, this.compression = void 0, WW.ok) {
            var iW;
            const OW = WW.config;
            OW.supportedCompression && !this.config.disable_compression && (this.compression = AO(OW.supportedCompression, sw.GZipJS) ? sw.GZipJS : AO(OW.supportedCompression, sw.Base64) ? sw.Base64 : void 0), (null === (iW = OW.analytics) || void 0 === iW ? void 0 : iW.endpoint) && (this.analyticsDefaultEndpoint = OW.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : Ri
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", WW), this._extensions.forEach((iW => {
            var OW;
            return null === (OW = iW.onRemoteConfig) || void 0 === OW ? void 0 : OW.call(iW, WW)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (WW) {
            pP.critical("`loaded` function failed", WW)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == OO ? void 0 : OO.hostname)) {
            const WW = OO.hostname,
              iW = this.config.internal_or_test_user_hostname;
            ("string" == typeof iW ? WW === iW : iW.test(WW)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new Cw(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var WW;
          this.is_capturing() && this.config.request_batching && (null === (WW = this._requestQueue) || void 0 === WW || WW.enable())
        }
        _dom_loaded() {
          this.is_capturing() && CP(this.__request_queue, (WW => this._send_retriable_request(WW))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var WW, iW, OW, mW, EW, NW;
          this._isPageUnloading = !0, null === (WW = this.surveys) || void 0 === WW || null === (iW = WW.handlePageUnload) || void 0 === iW || iW.call(WW), null === (OW = this.metrics) || void 0 === OW || OW.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(ai), null === (mW = this.logs) || void 0 === mW || mW.flushLogs("sendBeacon"), null === (EW = this._requestQueue) || void 0 === EW || EW.unload(), null === (NW = this._retryQueue) || void 0 === NW || NW.unload()) : this._shouldCapturePageleave() && this.capture(ai, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(WW) {
          Ct(this, WW)
        }
        _send_retriable_request(WW, iW) {
          this._retryQueue ? this._retryQueue.retriableRequest(WW, iW) : this._send_request(iW ? KE(KE({}, WW), {}, {
            transport: iW
          }) : WW)
        }
        _execute_array(WW) {
          HZ++;
          try {
            let iW;
            const OW = [],
              mW = [],
              EW = [];
            CP(WW, (WW => {
              if (WW)
                if (iW = WW[0], KO(iW)) EW.push(WW);
                else if (SO(WW)) try {
                WW.call(this)
              } catch (iW) {
                pP.error("Error executing queued PostHog call", WW, iW)
              } else KO(WW) && "alias" === iW ? OW.push(WW) : KO(WW) && -1 !== iW.indexOf("capture") && SO(this[iW]) ? EW.push(WW) : mW.push(WW)
            }));
            const NW = function(WW, iW) {
              CP(WW, (function(WW) {
                try {
                  if (KO(WW[0])) {
                    let OW = iW;
                    XP(WW, (function(WW) {
                      OW = OW[WW[0]].apply(OW, WW.slice(1))
                    }))
                  } else iW[WW[0]].apply(iW, WW.slice(1))
                } catch (iW) {
                  pP.error("Error executing queued PostHog call", WW, iW)
                }
              }))
            };
            NW(OW, this), NW(mW, this), NW(EW, this)
          } finally {
            HZ--
          }
        }
        push(iW) {
          if (HZ > 0 && KO(iW) && JO(iW[0])) {
            const OW = WW.prototype[iW[0]];
            SO(OW) && OW.apply(this, iW.slice(1))
          } else this._execute_array([iW])
        }
        get _facebookClickIdChannel() {
          return {
            property: HW,
            persistenceKey: nW,
            cookieName: "_fbc",
            pattern: pZ,
            register: (WW, iW) => {
              var OW;
              return null === (OW = this.persistence) || void 0 === OW ? void 0 : OW.register({
                [nW]: {
                  value: WW,
                  delivered: iW
                }
              })
            },
            unregister: () => {
              var WW;
              return null === (WW = this.persistence) || void 0 === WW ? void 0 : WW.unregister(nW)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: uW,
            persistenceKey: oW,
            cookieName: "_fbp",
            pattern: fZ,
            register: (WW, iW) => {
              var OW;
              return null === (OW = this.persistence) || void 0 === OW ? void 0 : OW.register({
                [oW]: {
                  value: WW,
                  delivered: iW
                }
              })
            },
            unregister: () => {
              var WW;
              return null === (WW = this.persistence) || void 0 === WW ? void 0 : WW.unregister(oW)
            }
          }
        }
        _getPersistedMetaIdentifier(WW) {
          var iW;
          const OW = null === (iW = this.persistence) || void 0 === iW ? void 0 : iW.get_property(WW.persistenceKey);
          return JO(OW) && WW.pattern.test(OW) ? {
            value: OW,
            delivered: !1
          } : YO(OW) && JO(OW.value) && WW.pattern.test(OW.value) ? {
            value: OW.value,
            delivered: !0 === OW.delivered
          } : void 0
        }
        _storeMetaIdentifier(WW, iW, OW) {
          return iW === (null == OW ? void 0 : OW.value) ? {
            value: iW,
            pending: !OW.delivered
          } : (WW.register(iW, !1), {
            value: iW,
            pending: !0
          })
        }
        _readMetaCookie(WW) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const iW = QP(WW.cookieName);
          return JO(iW) && WW.pattern.test(iW) ? iW : void 0
        }
        _updateFacebookClickId(WW, iW, OW, mW) {
          if (!this.persistence) return;
          const EW = this._facebookClickIdChannel;
          this.persistence.refreshKey(EW.persistenceKey);
          const NW = this._getPersistedMetaIdentifier(EW);
          if (mW) return void EW.unregister();
          if (OW) return JO(iW) && pZ.test(iW) ? this._storeMetaIdentifier(EW, iW, NW) : void EW.unregister();
          const PW = JO(WW) && VZ.test(WW) ? WW : void 0,
            LW = this._readMetaCookie(EW);
          return LW && ((WW, iW, OW) => {
            const mW = WW.split(".");
            if (iW) return mW[3] === iW;
            if (!OW) return !0;
            const EW = OW.value.split(".");
            return mW[3] === EW[3] || Number(mW[2]) > Number(EW[2])
          })(LW, PW, NW) ? this._storeMetaIdentifier(EW, LW, NW) : PW ? (null == NW ? void 0 : NW.value.split(".")[3]) === PW ? {
            value: NW.value,
            pending: !NW.delivered
          } : this._storeMetaIdentifier(EW, `fb.1.${Date.now()}.${PW}`, NW) : NW ? {
            value: NW.value,
            pending: !NW.delivered
          } : void 0
        }
        _updateFacebookBrowserId(WW, iW, OW) {
          if (!this.persistence) return;
          const mW = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(mW.persistenceKey);
          const EW = this._getPersistedMetaIdentifier(mW);
          if (OW) return void mW.unregister();
          if (iW) return JO(WW) && fZ.test(WW) ? this._storeMetaIdentifier(mW, WW, EW) : void mW.unregister();
          const NW = this._readMetaCookie(mW);
          return NW ? this._storeMetaIdentifier(mW, NW, EW) : EW ? {
            value: EW.value,
            pending: !EW.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(WW, iW) {
          if (!this.persistence) return;
          this.persistence.refreshKey(WW.persistenceKey);
          const OW = this._getPersistedMetaIdentifier(WW);
          (null == OW ? void 0 : OW.value) !== iW || OW.delivered || WW.register(iW, !0)
        }
        capture(WW, iW, OW) {
          var mW, EW;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void pP.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (TO(WW) || !JO(WW)) return void pP.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === WW && this._inCookielessMode()) return;
          const NW = !this.config.opt_out_useragent_filter && this._is_bot();
          if (NW && !this.config.__preview_capture_bot_pageviews) return;
          const PW = (null == OW ? void 0 : OW.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == PW ? void 0 : PW.isRateLimited) return void pP.critical("This capture call is ignored due to client rate limiting.");
          let LW;
          (null == iW ? void 0 : iW.$current_url) && !JO(null == iW ? void 0 : iW.$current_url) && (pP.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == iW || delete iW.$current_url), "$exception" !== WW || (null == OW ? void 0 : OW._originatedFromCaptureException) || pP.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (LW = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const cW = new Date,
            wW = (null == OW ? void 0 : OW.timestamp) || cW,
            tW = ZE(null == OW ? void 0 : OW.uuid, NL);
          let ZW = {
            uuid: tW,
            event: WW,
            properties: this.calculateEventProperties(WW, iW || {}, wW, tW)
          };
          "$pageview" === WW && this.config.__preview_capture_bot_pageviews && NW && (ZW.event = "$bot_pageview", ZW.properties.$browser_type = "bot"), PW && (ZW.properties.$lib_rate_limit_remaining_tokens = PW.remainingTokens);
          const xW = "$feature_flag_called" === WW && !1 === ZW.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == OW ? void 0 : OW.$set) && !xW && (ZW.$set = null == OW ? void 0 : OW.$set);
          const lW = YO(null == iW ? void 0 : iW.$set) ? iW.$set : void 0,
            AW = KO(null == iW ? void 0 : iW.$unset) ? iW.$unset : [],
            bW = (null == OW ? void 0 : OW.$unset) || [],
            jW = WW => {
              var iW;
              const mW = !!(null == OW ? void 0 : OW.$set) && WW in OW.$set;
              return {
                hasProvided: mW || !!lW && WW in lW,
                provided: mW ? null == OW || null === (iW = OW.$set) || void 0 === iW ? void 0 : iW[WW] : null == lW ? void 0 : lW[WW],
                unset: -1 !== AW.indexOf(WW) || -1 !== bW.indexOf(WW)
              }
            },
            UW = jW(HW),
            kW = jW(uW),
            sW = [{
              channel: this._facebookClickIdChannel,
              hasProvided: UW.hasProvided,
              update: this._updateFacebookClickId(null == LW ? void 0 : LW.fbclid, UW.provided, UW.hasProvided, UW.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: kW.hasProvided,
              update: this._updateFacebookBrowserId(kW.provided, kW.hasProvided, kW.unset)
            }];
          for (const {
              channel: HW,
              hasProvided: uW,
              update: oW
            }
            of sW) oW && !0 === ZW.properties.$process_person_profile && oW.pending && !uW && !xW && (ZW.$set = KE({
            [HW.property]: oW.value
          }, ZW.$set));
          const MW = null == OW ? void 0 : OW.$unset;
          MW && (ZW.$unset = MW);
          const KW = xW ? void 0 : this._calculate_set_once_properties(null == OW ? void 0 : OW.$set_once, WW !== zi, WW === ri);
          if (KW && (ZW.$set_once = KW), (null == OW ? void 0 : OW._noTruncate) || (SW = this.config.properties_string_max_length, ZW = function(WW, iW) {
              const OW = new Set;
              return function WW(mW, EW) {
                if (mW !== Object(mW)) return iW ? iW(mW) : mW;
                if (OW.has(mW)) return;
                let NW;
                if (OW.add(mW), KO(mW)) NW = [], CP(mW, (iW => {
                  NW.push(WW(iW))
                }));
                else {
                  const iW = {};
                  XP(VO(mW) ? IP(mW) : mW, ((mW, EW) => {
                    OW.has(mW) || (iW[EW] = WW(mW, EW))
                  })), NW = iW
                }
                return NW
              }(WW)
            }(ZW, (WW => JO(WW) ? WW.slice(0, SW) : WW))), ZW.timestamp = wW, TO(null == OW ? void 0 : OW.timestamp) || (ZW.properties.$event_time_override_provided = !0, ZW.properties.$event_time_override_system_time = cW), xW && (ZW.properties = function(WW) {
              let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const OW = {},
                mW = iW => {
                  void 0 !== WW[iW] && (OW[iW] = WW[iW])
                };
              return kN.forEach(mW), iW.forEach(mW), OW
            }(ZW.properties, CZ)), WW === Jw || WW === hw) {
            const OW = null == iW ? void 0 : iW[Hw],
              mW = null == iW ? void 0 : iW[nw];
            bZ({
              id: OW,
              current_iteration: mW
            }), ZW.$set = KE(KE({}, ZW.$set), {}, {
              [OZ({
                id: OW,
                current_iteration: mW
              }, WW === hw ? "responded" : "dismissed")]: !0
            })
          } else WW === Tw && (ZW.$set = KE(KE({}, ZW.$set), {}, {
            [uw]: (new Date).toISOString()
          }));
          var SW;
          if (WW === vw) {
            const WW = null == iW ? void 0 : iW[Dw];
            WW && (ZW.$set = KE(KE({}, ZW.$set), {}, {
              [`${gw}/${WW}`]: (new Date).toISOString()
            }))
          }
          const YW = KE(KE({}, ZW.properties.$set), ZW.$set);
          if (yO(YW) || this.setPersonPropertiesForFlags(YW), !nO(this.config.before_send)) {
            const WW = this._runBeforeSend(ZW);
            if (!WW) return;
            ZW = WW, ZW.uuid = ZE(ZW.uuid, NL)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && DZ(WW) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const yW = sW.filter((WW => {
            let {
              channel: iW,
              update: OW
            } = WW;
            var mW, EW, NW;
            const PW = null !== (mW = null === (EW = ZW.$set) || void 0 === EW ? void 0 : EW[iW.property]) && void 0 !== mW ? mW : YO(null === (NW = ZW.properties) || void 0 === NW ? void 0 : NW.$set) ? ZW.properties.$set[iW.property] : void 0;
            return (null == OW ? void 0 : OW.pending) && PW === OW.value
          }));
          this._internalEventEmitter.emit("eventCaptured", ZW);
          const TW = null !== (mW = null == OW ? void 0 : OW._url) && void 0 !== mW ? mW : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            JW = "recordings" === (null == OW ? void 0 : OW._batchKey) || /\/s\/(?:\?|$)/.test(TW),
            hW = KE(KE(KE({
              method: "POST",
              url: TW,
              data: ZW,
              compression: "best-available",
              preferSyncCompression: null == OW ? void 0 : OW.send_instantly,
              timestampMode: JW ? "body" : "capture-body",
              batchKey: null == OW ? void 0 : OW._batchKey
            }, JW && (null === (EW = ZW.properties) || void 0 === EW ? void 0 : EW.$session_id) ? {
              batchGroup: ZW.properties.$session_id + (ZW.properties.$window_id ? `-${ZW.properties.$window_id}` : "")
            } : {}), (null == OW ? void 0 : OW.transport) ? {
              transport: OW.transport
            } : {}), yW.length ? {
              fireCallbackOnDrop: !0,
              callback: WW => {
                if (WW.statusCode >= 200 && 300 > WW.statusCode)
                  for (const {
                      channel: iW,
                      update: OW
                    }
                    of yW) this._markMetaIdentifierDelivered(iW, OW.value)
              }
            } : {});
          if (!this.config.request_batching || OW && !(null == OW ? void 0 : OW._batchKey) || (null == OW ? void 0 : OW.send_instantly)) {
            var nW;
            let WW;
            !hW.transport && !hW.callback && yO(null !== (nW = this.config.request_headers) && void 0 !== nW ? nW : {}) && this._isPageUnloading && (WW = "sendBeacon"), this._send_retriable_request(hW, WW)
          } else this._requestQueue.enqueue(hW);
          return ZW
        }
        _addCaptureHook(WW) {
          return this.on("eventCaptured", (iW => WW(iW.event, iW)))
        }
        getExtension(WW) {
          var iW;
          return null === (iW = this._browserClientAdapter) || void 0 === iW ? void 0 : iW.getExtension(WW)
        }
        _getBrowserClientAdapter() {
          var WW;
          return null !== (WW = this._browserClientAdapter) && void 0 !== WW ? WW : this._browserClientAdapter = new JZ(this)
        }
        _registerExtensionEventProperties(WW) {
          this._extensionEventPropertyProducers.push(WW);
          let iW = !0;
          return () => {
            if (!iW) return;
            iW = !1;
            const OW = this._extensionEventPropertyProducers.indexOf(WW); - 1 !== OW && this._extensionEventPropertyProducers.splice(OW, 1)
          }
        }
        _processCookieIdentityChange() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var iW, OW, mW;
          return !!(null === (iW = this.persistence) || void 0 === iW ? void 0 : iW.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (mW = this.sessionPersistence) || void 0 === mW || mW.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (OW = this.featureFlags) || void 0 === OW || OW.reset(), WW && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(WW, iW, OW, mW, NW) {
          if (OW = OW || new Date, !this.persistence || !this.sessionPersistence) return iW;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const PW = NW ? void 0 : this.persistence.remove_event_timer(WW);
          let LW = KE({}, iW);
          if (LW.token = this.config.token, LW.$config_defaults = this.config.defaults, this._inCookielessMode() && (LW[Ji] = !0), "$snapshot" === WW) {
            const WW = KE(KE({}, this.persistence.properties()), this.sessionPersistence.properties());
            return LW.distinct_id = WW.distinct_id, (!JO(LW.distinct_id) && !uO(LW.distinct_id) || hO(LW.distinct_id)) && pP.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), LW
          }
          const cW = function(WW, iW, OW) {
            let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var NW, PW, LW, cW;
            if (!LO) return {};
            const wW = WW ? [...qc, ...iW || []] : [],
              [tW, ZW] = Qm(LO),
              [xW, lW] = function(WW) {
                for (let iW = 0; mE.length > iW; iW++) {
                  const [OW, mW, EW] = mE[iW], NW = WW.match(OW);
                  if (NW) {
                    const iW = EW && WW.match(EW) || NW;
                    return [mW, (null == iW ? void 0 : iW[1]) || ""]
                  }
                }
                return ["", ""]
              }(LO),
              AW = function() {
                const WW = "u" > typeof navigator ? navigator : void 0;
                return (null == WW ? void 0 : WW.brave) ? {
                  brave: !0
                } : {}
              }(),
              bW = {};
            TO(OW) || (bW.detectGoogleSearchApp = OW);
            const jW = {},
              UW = null === (NW = navigator) || void 0 === NW || null === (NW = NW.userAgentData) || void 0 === NW ? void 0 : NW.platform,
              kW = null === (PW = navigator) || void 0 === PW ? void 0 : PW.maxTouchPoints,
              sW = null == Fi || null === (LW = Fi.screen) || void 0 === LW ? void 0 : LW.width,
              MW = null == Fi || null === (cW = Fi.screen) || void 0 === cW ? void 0 : cW.height,
              KW = null == Fi ? void 0 : Fi.devicePixelRatio;
            TO(UW) || (jW.userAgentDataPlatform = UW), TO(kW) || (jW.maxTouchPoints = kW), TO(sW) || (jW.screenWidth = sW), TO(MW) || (jW.screenHeight = MW), TO(KW) || (jW.devicePixelRatio = KW);
            const SW = BP(GP({
              $os: tW,
              $os_version: ZW,
              $browser: am(LO, navigator.vendor, AW, bW),
              $webview_app: xW,
              $webview_app_version: lW,
              $device: WE(LO),
              $device_type: iE(LO, jW),
              $timezone: vc(),
              $timezone_offset: Ew()
            }), {
              $current_url: Xc(mW ? lE(null == OO ? void 0 : OO.href) : null == OO ? void 0 : OO.href, wW, Gc),
              $host: null == OO ? void 0 : OO.host,
              $pathname: null == OO ? void 0 : OO.pathname,
              $raw_user_agent: LO.length > 1e3 ? LO.substring(0, 997) + "..." : LO,
              $browser_version: zm(LO, navigator.vendor, AW, bW),
              $browser_language: Fc(),
              $browser_language_prefix: Qc(),
              $screen_height: null == Fi ? void 0 : Fi.screen.height,
              $screen_width: null == Fi ? void 0 : Fi.screen.width,
              $viewport_height: null == Fi ? void 0 : Fi.innerHeight,
              $viewport_width: null == Fi ? void 0 : Fi.innerWidth,
              $lib: EW.LIB_NAME,
              $lib_version: EW.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return EW.SDK_DIST_CHANNEL && (SW.$sdk_dist_channel = EW.SDK_DIST_CHANNEL), SW
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: WW,
              windowId: iW
            } = this.sessionManager.checkAndGetSessionAndWindowId(NW, OW.getTime(), !0);
            LW.$session_id = WW, LW.$window_id = iW
          }
          this.sessionPropsManager && BP(LW, this.sessionPropsManager.getSessionProps());
          try {
            var wW;
            if (this.sessionRecording) {
              const iW = this.sessionRecording.sdkDebugProperties,
                OW = !this._replayDebugPropertiesPaused && DZ(WW);
              for (const WW in iW)(OW || AO(vZ, WW)) && (LW[WW] = iW[WW])
            }
            LW.$sdk_debug_retry_queue_size = null === (wW = this._retryQueue) || void 0 === wW ? void 0 : wW.length
          } catch (WW) {
            LW.$sdk_debug_error_capturing_properties = String(WW)
          }
          let tW;
          if (this.requestRouter.region === wZ && (LW.$lib_custom_api_host = this.config.api_host), tW = "$pageview" !== WW || NW ? "$pageleave" !== WW || NW ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(OW) : this.pageViewManager.doPageView(OW, mW), LW = BP(LW, tW), "$pageview" === WW && iO && (LW.title = iO.title), !TO(PW)) {
            const WW = OW.getTime() - PW;
            LW.$duration = parseFloat((WW / 1e3).toFixed(3))
          }
          LO && this.config.opt_out_useragent_filter && (LW.$browser_type = this._is_bot() ? "bot" : "browser");
          const ZW = this.persistence.properties(),
            xW = this.sessionPersistence.properties(),
            lW = LW.$groups,
            AW = ZW.$groups;
          YO(lW) && !yO(lW) && (LW.$groups = KE(KE({}, YO(AW) ? AW : {}), lW)), XP(["$referrer", "$referring_domain"], (WW => {
            WW in ZW && delete xW[WW]
          }));
          const bW = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const EW of this._extensionEventPropertyProducers.slice()) try {
              BP(bW, EW())
            } catch (WW) {
              pP.error("Failed to produce browser extension event properties", WW)
            }
          LW = BP({}, cW, ZW, xW, KE(KE({}, bW), LW)), LW.$is_identified = this._isIdentified(), KO(this.config.property_denylist) ? XP(this.config.property_denylist, (function(WW) {
            delete LW[WW]
          })) : pP.error(eZ + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const jW = this.config.sanitize_properties;
          jW && (pP.error(dZ), LW = jW(LW, WW));
          const UW = this._hasPersonProcessing();
          return LW.$process_person_profile = UW, UW && !NW && this._requirePersonProcessing("_calculate_event_properties"), LW
        }
        _calculate_set_once_properties(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var mW;
          if (!this.persistence || !this._hasPersonProcessing()) return WW;
          if (this._personProcessingSetOncePropertiesSent && !OW) return WW;
          const EW = this.persistence.get_initial_props(),
            NW = null === (mW = this.sessionPropsManager) || void 0 === mW ? void 0 : mW.getSetOnceProps();
          let PW = BP({}, EW, NW || {}, WW || {});
          const LW = this.config.sanitize_properties;
          return LW && (pP.error(dZ), PW = LW(PW, "$set_once")), iW && (this._personProcessingSetOncePropertiesSent = !0), yO(PW) ? void 0 : PW
        }
        register(WW, iW) {
          var OW;
          null === (OW = this.persistence) || void 0 === OW || OW.register(WW, iW)
        }
        register_once(WW, iW, OW) {
          var mW;
          null === (mW = this.persistence) || void 0 === mW || mW.register_once(WW, iW, OW)
        }
        register_for_session(WW) {
          var iW, OW;
          null === (iW = this.persistence) || void 0 === iW || iW.syncCookieProperties(), this._processCookieIdentityChange(), null === (OW = this.sessionPersistence) || void 0 === OW || OW.register(WW), Object.keys(WW).forEach((WW => this._sessionRegisteredPropKeys.add(WW))), this._persistSessionRegisteredPropKeys()
        }
        unregister(WW) {
          var iW;
          null === (iW = this.persistence) || void 0 === iW || iW.unregister(WW)
        }
        unregister_for_session(WW) {
          var iW;
          null === (iW = this.sessionPersistence) || void 0 === iW || iW.unregister(WW), this._sessionRegisteredPropKeys.delete(WW), this._persistSessionRegisteredPropKeys()
        }
        _register_single(WW, iW) {
          this.register({
            [WW]: iW
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((WW => {
            var iW;
            null === (iW = this.sessionPersistence) || void 0 === iW || iW.unregister(WW)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var WW;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (WW = this.sessionPersistence) || void 0 === WW ? void 0 : WW._disabled) || !JL._is_supported()) return void JL._remove(this._sessionRegisteredPropertiesStorageKey);
          const iW = [];
          this._sessionRegisteredPropKeys.forEach((WW => iW.push(WW))), iW.length > 0 ? JL._set(this._sessionRegisteredPropertiesStorageKey, iW) : JL._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(WW, iW) {
          var OW;
          return null === (OW = this.featureFlags) || void 0 === OW ? void 0 : OW.getFeatureFlag(WW, iW)
        }
        getFeatureFlagPayload(WW) {
          var iW;
          return null === (iW = this.featureFlags) || void 0 === iW ? void 0 : iW.getFeatureFlagPayload(WW)
        }
        getFeatureFlagResult(WW, iW) {
          var OW;
          return null === (OW = this.featureFlags) || void 0 === OW ? void 0 : OW.getFeatureFlagResult(WW, iW)
        }
        getAllFeatureFlags() {
          var WW, iW;
          return null !== (WW = null === (iW = this.featureFlags) || void 0 === iW ? void 0 : iW.getAllFeatureFlags()) && void 0 !== WW ? WW : []
        }
        isFeatureEnabled(WW, iW) {
          var OW, mW;
          return null !== (OW = null === (mW = this.featureFlags) || void 0 === mW ? void 0 : mW.isFeatureEnabled(WW, iW)) && void 0 !== OW ? OW : null == iW ? void 0 : iW.defaultValue
        }
        reloadFeatureFlags() {
          var WW;
          null === (WW = this.featureFlags) || void 0 === WW || WW.reloadFeatureFlags()
        }
        updateFlags(WW, iW, OW) {
          var mW;
          null === (mW = this.featureFlags) || void 0 === mW || mW.updateFlags(WW, iW, OW)
        }
        updateEarlyAccessFeatureEnrollment(WW, iW, OW) {
          var mW;
          null === (mW = this.featureFlags) || void 0 === mW || mW.updateEarlyAccessFeatureEnrollment(WW, iW, OW)
        }
        getEarlyAccessFeatures(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0;
          var mW;
          return null === (mW = this.featureFlags) || void 0 === mW ? void 0 : mW.getEarlyAccessFeatures(WW, iW, OW)
        }
        on(WW, iW) {
          return this._internalEventEmitter.on(WW, iW)
        }
        onFeatureFlags(WW) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(WW) : (WW([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(WW) {
          return this.surveys ? this.surveys.onSurveysLoaded(WW) : (WW([], {
            isLoaded: !1,
            error: oZ
          }), () => {})
        }
        onSessionId(WW) {
          var iW, OW;
          return null !== (iW = null === (OW = this.sessionManager) || void 0 === OW ? void 0 : OW.onSessionId(WW)) && void 0 !== iW ? iW : () => {}
        }
        getSurveys(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(WW, iW) : WW([], {
            isLoaded: !1,
            error: oZ
          })
        }
        getActiveMatchingSurveys(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(WW, iW) : WW([], {
            isLoaded: !1,
            error: oZ
          })
        }
        onActiveMatchingSurveysChanged(WW) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(WW) : (WW([], {
            isLoaded: !1,
            error: oZ
          }), () => {})
        }
        renderSurvey(WW, iW) {
          var OW;
          null === (OW = this.surveys) || void 0 === OW || OW.renderSurvey(WW, iW)
        }
        displaySurvey(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UZ;
          var OW;
          null === (OW = this.surveys) || void 0 === OW || OW.displaySurvey(WW, iW)
        }
        cancelPendingSurvey(WW) {
          var iW;
          null === (iW = this.surveys) || void 0 === iW || iW.cancelPendingSurvey(WW)
        }
        canRenderSurvey(WW) {
          var iW, OW;
          return null !== (iW = null === (OW = this.surveys) || void 0 === OW ? void 0 : OW.canRenderSurvey(WW)) && void 0 !== iW ? iW : {
            visible: !1,
            disabledReason: oZ
          }
        }
        canRenderSurveyAsync(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var OW, mW;
          return null !== (OW = null === (mW = this.surveys) || void 0 === mW ? void 0 : mW.canRenderSurveyAsync(WW, iW)) && void 0 !== OW ? OW : Promise.resolve({
            visible: !1,
            disabledReason: oZ
          })
        }
        _validateIdentifyId(WW) {
          return !WW || hO(WW) ? (pP.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === WW ? (pP.critical(`The string "${WW}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(WW.toLowerCase()) && !["undefined", "null"].includes(WW.toLowerCase()) || (pP.critical(`The string "${WW}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(WW, iW, OW) {
          if (!this.__loaded || !this.persistence) return pP.uninitializedWarning("posthog.identify");
          if (uO(WW) && (WW = WW.toString(), pP.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(WW)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const mW = this.get_distinct_id(),
            EW = this.persistence.syncCookieProperties() && this.get_distinct_id() !== mW,
            NW = this._processCookieIdentityChange(!1),
            PW = this.persistence._beginCookieSyncSuppression();
          let LW = !1;
          try {
            const mW = this.get_distinct_id();
            this.register({
              $user_id: WW
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: mW
            }, ""), WW !== mW && WW !== this.get_property("__alias") && (this.unregister(JW), this.register({
              distinct_id: WW
            }));
            const PW = (this.persistence.get_property("$user_state") || "anonymous") === Bi,
              wW = WW !== mW,
              tW = !wW && PW;
            if (wW && PW) {
              var cW;
              const EW = this.config.reuseAnonymousId ? {
                distinct_id: WW
              } : {
                distinct_id: WW,
                $anon_distinct_id: mW
              };
              this.persistence.set_property(ki, qi), this.setPersonPropertiesForFlags({
                $set: iW || {},
                $set_once: OW || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", EW, {
                $set: iW || {},
                $set_once: OW || {}
              }) && (this._cachedPersonProperties = cZ(WW, iW, OW)), null === (cW = this.featureFlags) || void 0 === cW || cW.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : mW)
            } else if (tW) {
              this.persistence.set_property(ki, qi);
              const mW = iW || {},
                EW = OW || {};
              this.setPersonPropertiesForFlags({
                $set: mW,
                $set_once: EW
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: mW,
                $set_once: EW
              }) && (this._cachedPersonProperties = cZ(WW, iW, OW))
            } else(iW || OW) && this.setPersonProperties(iW, OW);
            wW || EW || NW ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(jW)) : tW && (iW || OW) && this.reloadFeatureFlags(), LW = !0
          } finally {
            PW && this.persistence._endCookieSyncSuppression(LW)
          }
        }
        setPersonProperties(WW, iW) {
          if (!WW && !iW) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const OW = cZ(this.get_distinct_id(), WW, iW);
          this._cachedPersonProperties !== OW ? (this.setPersonPropertiesForFlags({
            $set: WW || {},
            $set_once: iW || {}
          }, !0), this.capture("$set", {
            $set: WW || {},
            $set_once: iW || {}
          }) && (this._cachedPersonProperties = OW)) : pP.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(WW) {
          var iW;
          const OW = (KO(WW) ? WW : [WW]).filter((WW => JO(WW) && WW.length > 0));
          0 !== OW.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (iW = this.featureFlags) || void 0 === iW || iW.unsetPersonPropertiesForFlags(OW, !0), this.capture("$set", {
            $unset: OW
          }), this._cachedPersonProperties = null)
        }
        group(WW, iW, OW) {
          var mW;
          if (!WW || !iW) return void pP.error("posthog.group requires a group type and group key");
          null === (mW = this.persistence) || void 0 === mW || mW.syncCookieProperties(), this._processCookieIdentityChange();
          const EW = this.getGroups(),
            NW = EW[WW] !== iW;
          if (NW && this.resetGroupPropertiesForFlags(WW), this.register({
              $groups: KE(KE({}, EW), {}, {
                [WW]: iW
              })
            }), (NW || OW) && this._hasPersonProcessing()) {
            const mW = {
              $group_type: WW,
              $group_key: iW
            };
            OW && (mW.$group_set = OW), this.capture(zi, mW)
          }
          OW && this.setGroupPropertiesForFlags({
            [WW]: OW
          }), NW && !OW && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var OW;
          null === (OW = this.featureFlags) || void 0 === OW || OW.setPersonPropertiesForFlags(WW, iW)
        }
        resetPersonPropertiesForFlags() {
          let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var iW;
          null === (iW = this.featureFlags) || void 0 === iW || iW.resetPersonPropertiesForFlags(WW)
        }
        setGroupPropertiesForFlags(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var OW;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (OW = this.featureFlags) || void 0 === OW || OW.setGroupPropertiesForFlags(WW, iW))
        }
        resetGroupPropertiesForFlags(WW) {
          var iW;
          null === (iW = this.featureFlags) || void 0 === iW || iW.resetGroupPropertiesForFlags(WW)
        }
        reset(WW) {
          const iW = dO(WW) ? WW : null == WW ? void 0 : WW.resetDeviceID,
            OW = dO(WW) || null == WW ? void 0 : WW.bootstrap;
          this._reset(iW, !1, OW)
        }
        _reset(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0;
          var mW, EW, NW, PW, LW, cW;
          if (pP.info("reset"), !this.__loaded) return pP.uninitializedWarning("posthog.reset");
          const wW = null == OW ? void 0 : OW.sessionID;
          this.config.bootstrap = OW || (null === (mW = this._originalUserConfig) || void 0 === mW ? void 0 : mW.bootstrap) || {}, null === (EW = this.featureFlags) || void 0 === EW || null === (NW = EW.updateConfig) || void 0 === NW || NW.call(EW, this.config, this._shouldDisableFlags());
          const tW = this.get_property(yW),
            ZW = this.get_property(TW),
            xW = this.get_property(qW);
          null === (PW = this.sessionRecording) || void 0 === PW || PW.flushBeforeIdentityReset();
          const lW = this.is_capturing();
          iW || this.consent.reset(), iW || !lW || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const AW = null === (LW = this.persistence) || void 0 === LW || null === (cW = LW._beginCookieSyncSuppression) || void 0 === cW ? void 0 : cW.call(LW),
            bW = this._isConsentTransition;
          this._isConsentTransition = bW || iW;
          let jW = !1;
          try {
            var UW, kW, sW, MW, KW, SW, YW, JW, hW, HW, nW, uW, oW;
            if (null === (UW = this.persistence) || void 0 === UW || UW.clear(), null === (kW = this.sessionPersistence) || void 0 === kW || kW.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), TO(xW) || null === (HW = this.persistence) || void 0 === HW || HW.register({
                $session_recording_remote_config: xW
              }), null === (sW = this.surveys) || void 0 === sW || sW.reset(), null === (MW = this.featureFlags) || void 0 === MW || MW.reset(), null === (KW = this.conversations) || void 0 === KW || KW.reset(), null === (SW = this.logs) || void 0 === SW || SW.reset(), null === (YW = this.metrics) || void 0 === YW || YW.reset(), null === (JW = this.persistence) || void 0 === JW || JW.set_property("$user_state", "anonymous"), null === (hW = this.sessionManager) || void 0 === hW || hW.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: Ti,
              $device_id: null
            }, "");
            else {
              const iW = this.config.get_device_id(NL());
              this.register_once({
                distinct_id: iW,
                $device_id: WW ? iW : tW
              }, ""), WW || TO(ZW) || this.register({
                [TW]: ZW
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), OW && (OW.distinctID && !this._inCookielessMode() && (null === (oW = this.persistence) || void 0 === oW || oW.set_property("$user_state", OW.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: OW.distinctID
              })), null === (nW = this.featureFlags) || void 0 === nW || nW.initialize(), !nO(wW) && !(null === (uW = this.sessionManager) || void 0 === uW ? void 0 : uW.setBootstrapSessionId(wW, !0)))) {
              const WW = KE({}, OW);
              delete WW.sessionID, this.config.bootstrap = WW
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, jW = !0
          } finally {
            var dW, eW;
            this._isConsentTransition = bW, AW && (null === (dW = this.persistence) || void 0 === dW || null === (eW = dW._endCookieSyncSuppression) || void 0 === eW || eW.call(dW, jW))
          }
          this.reloadFeatureFlags()
        }
        shutdown(WW) {
          var iW = this;
          return RO((function*() {
            if (!iW.__loaded) return void pP.uninitializedWarning("posthog.shutdown");
            iW._isShutdown = !0, clearTimeout(iW._extensionInitTimeout), iW._extensionInitTimeout = void 0;
            const WW = iW._featureFlagsReloadingUnsubscribe;
            iW._featureFlagsReloadingUnsubscribe = void 0;
            for (const OW of [() => {
                var WW;
                return null === (WW = iW.sessionRecording) || void 0 === WW ? void 0 : WW.dispose()
              }, () => {
                var WW;
                return null === (WW = iW.logs) || void 0 === WW ? void 0 : WW.flushLogs("sendBeacon")
              }, () => {
                var WW;
                return null === (WW = iW.metrics) || void 0 === WW ? void 0 : WW.flush("sendBeacon")
              }, () => {
                var WW;
                return null === (WW = iW.metrics) || void 0 === WW ? void 0 : WW.dispose()
              }, () => {
                var WW;
                return null === (WW = iW.logs) || void 0 === WW ? void 0 : WW.dispose()
              }, () => {
                var WW;
                return null === (WW = iW.surveys) || void 0 === WW ? void 0 : WW.dispose()
              }, () => {
                var WW;
                return null === (WW = iW.autocapture) || void 0 === WW ? void 0 : WW.dispose()
              }, () => null == WW ? void 0 : WW(), () => {
                var WW;
                return null === (WW = iW._requestQueue) || void 0 === WW ? void 0 : WW.unload()
              }, () => {
                var WW;
                return null === (WW = iW._retryQueue) || void 0 === WW ? void 0 : WW.unload()
              }, () => {
                var WW;
                return null === (WW = iW.featureFlags) || void 0 === WW ? void 0 : WW.destroy()
              }, () => {
                var WW;
                return null === (WW = iW.persistence) || void 0 === WW ? void 0 : WW.destroy()
              }, () => {
                var WW;
                return null === (WW = iW.sessionPersistence) || void 0 === WW ? void 0 : WW.destroy()
              }]) try {
              const WW = OW();
              WW && SO(WW.then) && WW.then(void 0, (WW => {
                pP.error("Error during shutdown", WW)
              }))
            } catch (WW) {
              pP.error("Error during shutdown", WW)
            }
          }))()
        }
        setIdentity(WW, iW) {
          var OW;
          delete this.config.identity_claims, this.config.identity_distinct_id = WW, this.config.identity_hash = iW, this.alias(WW), null === (OW = this.conversations) || void 0 === OW || OW._onIdentityChanged()
        }
        clearIdentity() {
          var WW;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (WW = this.conversations) || void 0 === WW || WW._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var WW, iW;
          return null !== (WW = null === (iW = this.sessionManager) || void 0 === iW ? void 0 : iW.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== WW ? WW : ""
        }
        get_session_replay_url(WW) {
          if (!this.sessionManager) return "";
          const {
            sessionId: iW,
            sessionStartTimestamp: OW
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let mW = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${iW}`);
          if ((null == WW ? void 0 : WW.withTimestamp) && OW) {
            var EW;
            const iW = null !== (EW = WW.timestampLookBack) && void 0 !== EW ? EW : 10;
            if (!OW) return mW;
            mW += `?t=${Math.max(Math.floor(((new Date).getTime()-OW)/1e3)-iW,0)}`
          }
          return mW
        }
        alias(WW, iW) {
          return WW === this.get_property("$people_distinct_id") ? (pP.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (TO(iW) && (iW = this.get_distinct_id()), WW !== iW ? (this._register_single(JW, WW), this.capture("$create_alias", {
            alias: WW,
            distinct_id: iW
          })) : (pP.warn("alias matches current distinct_id - skipping api call."), this.identify(WW), -1)) : void 0
        }
        set_config(WW) {
          const iW = KE({}, this.config);
          if (YO(WW)) {
            var OW, mW, EW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW;
            BP(this.config, GZ(WW));
            const KW = this._is_persistence_disabled();
            if (this.persistence) {
              const WW = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var UW, kW;
              if (WW && this.sessionPersistence !== this.persistence && (null === (UW = this.sessionPersistence) || void 0 === UW || UW.remove(), null === (kW = this.sessionPersistence) || void 0 === kW || kW.destroy()), this.persistence.update_config(this.config, iW, KW), WW) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new kw(KE(KE({}, this.config), {}, {
                persistence: "sessionStorage"
              }), KW, !1);
              else {
                var sW;
                null === (sW = this.sessionPersistence) || void 0 === sW || sW.update_config(KE(KE({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), KE(KE({}, iW), {}, {
                  persistence: "sessionStorage"
                }), KW)
              }
            }
            const SW = this._checkLocalStorageForDebug(this.config.debug);
            var MW;
            dO(SW) && (this.config.debug = SW), dO(this.config.debug) && (this.config.debug ? (NW.DEBUG = !0, xL._is_supported() && xL._set("ph_debug", !0), pP.info("set_config", {
              config: WW,
              oldConfig: iW,
              newConfig: KE({}, this.config)
            })) : (NW.DEBUG = !1, xL._is_supported() && xL._remove("ph_debug"))), null === (OW = this.featureFlags) || void 0 === OW || null === (mW = OW.updateConfig) || void 0 === mW || mW.call(OW, this.config, this._shouldDisableFlags()), null === (EW = this.exceptionObserver) || void 0 === EW || EW.onConfigChange(), null === (PW = this.exceptions) || void 0 === PW || PW.onConfigChange(), null === (LW = this.metrics) || void 0 === LW || LW.onConfigChange(), null === (cW = this.webMCP) || void 0 === cW || cW.startIfEnabled(), null === (wW = this.sessionRecording) || void 0 === wW || wW.startIfEnabledOrStop(), null === (tW = this.tracingHeaders) || void 0 === tW || tW.startIfEnabledOrStop(), null === (ZW = this.autocapture) || void 0 === ZW || ZW.startIfEnabled(), null === (xW = this.heatmaps) || void 0 === xW || xW.startIfEnabled(), ("capture_pageview" in WW || "disable_capture_url_hashes" in WW) && (null === (MW = this.historyAutocapture) || void 0 === MW || MW.startIfEnabledOrStop()), null === (lW = this.exceptionObserver) || void 0 === lW || lW.startIfEnabledOrStop(), null === (AW = this.deadClicksAutocapture) || void 0 === AW || AW.startIfEnabledOrStop(), null === (bW = this.surveys) || void 0 === bW || bW.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (jW = this.externalIntegrations) || void 0 === jW || jW.startIfEnabledOrStop(), !iW.segment && this.config.segment && this.persistence && Tc(this, nZ, !1)
          }
        }
        _overrideSDKInfo(WW, iW) {
          NW.LIB_NAME = WW, NW.LIB_VERSION = iW
        }
        startSessionRecording(WW) {
          const iW = !0 === WW,
            OW = {
              sampling: iW || !!(null == WW ? void 0 : WW.sampling),
              linked_flag: iW || !!(null == WW ? void 0 : WW.linked_flag),
              url_trigger: iW || !!(null == WW ? void 0 : WW.url_trigger),
              event_trigger: iW || !!(null == WW ? void 0 : WW.event_trigger)
            };
          var mW, EW, NW, PW, LW;
          Object.values(OW).some(Boolean) && (null === (mW = this.sessionManager) || void 0 === mW || mW.checkAndGetSessionAndWindowId(), OW.sampling && (null === (EW = this.sessionRecording) || void 0 === EW || EW.overrideSampling()), OW.linked_flag && (null === (NW = this.sessionRecording) || void 0 === NW || NW.overrideLinkedFlag()), OW.url_trigger && (null === (PW = this.sessionRecording) || void 0 === PW || PW.overrideTrigger("url")), OW.event_trigger && (null === (LW = this.sessionRecording) || void 0 === LW || LW.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var WW;
          return !!(null === (WW = this.sessionRecording) || void 0 === WW ? void 0 : WW.started)
        }
        captureException(WW, iW) {
          try {
            if (!this.exceptions) return;
            const OW = this.exceptions.buildProperties(WW, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(KE(KE({}, OW), iW))
          } catch (WW) {
            return
          }
        }
        addExceptionStep(WW, iW) {
          var OW;
          null === (OW = this.exceptions) || void 0 === OW || OW.addExceptionStep(WW, iW)
        }
        captureLog(WW) {
          var iW;
          null === (iW = this.logs) || void 0 === iW || iW.captureLog(WW)
        }
        get logger() {
          var iW, OW;
          return null !== (iW = null === (OW = this.logs) || void 0 === OW ? void 0 : OW.logger) && void 0 !== iW ? iW : WW._noopLogger
        }
        startExceptionAutocapture(WW) {
          this.set_config({
            capture_exceptions: null == WW || WW
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(WW) {
          var iW, OW;
          return null !== (iW = null === (OW = this.toolbar) || void 0 === OW ? void 0 : OW.loadToolbar(WW)) && void 0 !== iW && iW
        }
        get_property(WW) {
          var iW;
          return null === (iW = this.persistence) || void 0 === iW ? void 0 : iW.props[WW]
        }
        getSessionProperty(WW) {
          var iW;
          return null === (iW = this.sessionPersistence) || void 0 === iW ? void 0 : iW.props[WW]
        }
        toString() {
          var WW;
          let iW = null !== (WW = this.config.name) && void 0 !== WW ? WW : XZ;
          return iW !== XZ && (iW = "posthog." + iW), iW
        }
        _isIdentified() {
          var WW, iW;
          return "identified" === (null === (WW = this.persistence) || void 0 === WW ? void 0 : WW.get_property("$user_state")) || "identified" === (null === (iW = this.sessionPersistence) || void 0 === iW ? void 0 : iW.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var WW, iW;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && yO(this.getGroups()) && !(null === (WW = this.persistence) || void 0 === WW || null === (WW = WW.props) || void 0 === WW ? void 0 : WW.__alias) && !(null === (iW = this.persistence) || void 0 === iW || null === (iW = iW.props) || void 0 === iW ? void 0 : iW.$epp))
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
        _requirePersonProcessing(WW) {
          return "never" === this.config.person_profiles ? (pP.error(WW + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(yi, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const WW = this.consent.isOptedOut();
          return this.config.disable_persistence || WW && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var WW, iW;
          const OW = this._is_persistence_disabled();
          var mW, EW, NW;
          return this.is_capturing() || null === (mW = this.logs) || void 0 === mW || mW._onOptOut(), (null === (WW = this.persistence) || void 0 === WW ? void 0 : WW._disabled) !== OW && (null === (EW = this.persistence) || void 0 === EW || EW.set_disabled(OW)), (null === (iW = this.sessionPersistence) || void 0 === iW ? void 0 : iW._disabled) !== OW && (null === (NW = this.sessionPersistence) || void 0 === NW || NW.set_disabled(OW)), this._persistSessionRegisteredPropKeys(), OW
        }
        opt_in_capturing(iW) {
          var OW;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var mW, EW, NW, PW, LW, cW;
              null === (mW = this.sessionRecording) || void 0 === mW || mW.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (EW = this.sessionManager) || void 0 === EW || EW.destroy(), null === (NW = this.pageViewManager) || void 0 === NW || NW.destroy(), this.sessionManager = new Qt(this), this.pageViewManager = new nc(this), this.persistence && (this.sessionPropsManager = new It(this, this.sessionManager, this.persistence));
              const iW = null !== (PW = null === (LW = this.config.__extensionClasses) || void 0 === LW ? void 0 : LW.sessionRecording) && void 0 !== PW ? PW : null === (cW = WW.__defaultExtensionClasses) || void 0 === cW ? void 0 : cW.sessionRecording;
              var wW, tW;
              iW && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new iW(this)), this._lastRemoteConfig && (null === (wW = this.sessionRecording) || void 0 === wW || null === (tW = wW.onRemoteConfig) || void 0 === tW || tW.call(wW, this._lastRemoteConfig)))
            }
            var ZW, xW;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (OW = this.sessionRecording) || void 0 === OW || OW.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (ZW = this.surveys) || void 0 === ZW || ZW.loadIfEnabled()), (TO(null == iW ? void 0 : iW.captureEventName) || (null == iW ? void 0 : iW.captureEventName)) && this.capture(null !== (xW = null == iW ? void 0 : iW.captureEventName) && void 0 !== xW ? xW : "$opt_in", null == iW ? void 0 : iW.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else pP.warn(uZ)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : pP.warn(uZ)
        }
        _enterCookielessMode() {
          var WW, iW;
          const OW = this.sessionRecording;
          null == OW || OW.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: Ti,
            $device_id: null
          }), this._removeExtension(OW), this.sessionRecording = void 0, null === (WW = this.sessionManager) || void 0 === WW || WW.destroy(), null === (iW = this.pageViewManager) || void 0 === iW || iW.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const WW = this.consent.consent;
          return 1 === WW ? "granted" : 0 === WW ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return WO ? WZ(WO, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          iO && ("visible" === iO.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(Ii, {
            title: iO.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (iO.removeEventListener(KW, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), zP(iO, KW, this._visibilityStateListener)))
        }
        debug(WW) {
          !1 === WW ? (null == Fi || Fi.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == Fi || Fi.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const WW = this._originalUserConfig || {};
          return "advanced_disable_flags" in WW ? !!WW.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (pP.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(WW, iW, OW, mW, EW) {
            const NW = iW in WW && !nO(WW[iW]),
              PW = OW in WW && !nO(WW[OW]);
            return NW ? WW[iW] : !!PW && (EW && EW.warn(`Config field '${OW}' is deprecated. Please use '${iW}' instead. The old field will be removed in a future major version.`), WW[OW])
          }(WW, "advanced_disable_flags", "advanced_disable_decide", 0, pP)
        }
        _runBeforeSend(WW) {
          var iW;
          if (nO(this.config.before_send)) return WW;
          const OW = Object.keys(null !== (iW = WW.properties) && void 0 !== iW ? iW : {}).filter(vO),
            mW = KO(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let EW = WW;
          for (const NW of mW) try {
            if (EW = NW(EW), nO(EW)) {
              const iW = `Event '${WW.event}' was rejected in beforeSend function`;
              return eO(WW.event) ? pP.warn(`${iW}. This can cause unexpected behavior.`) : pP.info(iW), null
            }
            EW.properties && !yO(EW.properties) || pP.warn(`Event '${WW.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (iW) {
            return pP.error(`Error in beforeSend function for event '${WW.event}':`, iW), null
          }
          for (const NW of OW)
            if (EW.properties && nO(EW.properties[NW])) return pP.warn(`Event '${WW.event}' had its '${NW}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return EW
        }
        getPageViewId() {
          var WW;
          return null === (WW = this.pageViewManager._currentPageview) || void 0 === WW ? void 0 : WW.pageViewId
        }
        captureTraceFeedback(WW, iW) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(WW),
            $ai_feedback_text: iW
          })
        }
        captureTraceMetric(WW, iW, OW) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(WW),
            $ai_metric_name: iW,
            $ai_metric_value: String(OW)
          })
        }
        _checkLocalStorageForDebug(WW) {
          const iW = dO(WW) && !WW,
            OW = xL._is_supported() && "true" === xL._get("ph_debug");
          return !iW && (!!OW || WW)
        }
      };
    aZ.__defaultExtensionClasses = {}, aZ._noopLogger = (() => {
        const WW = () => {};
        return {
          trace: WW,
          debug: WW,
          info: WW,
          warn: WW,
          error: WW,
          fatal: WW
        }
      })(),
      function(WW, iW) {
        for (let OW = 0; iW.length > OW; OW++) WW.prototype[iW[OW]] = RP(WW.prototype[iW[OW]])
      }(aZ, ["identify"]);
    var rZ = class {
      constructor(WW) {
        this.disabled = !1 === WW;
        const iW = YO(WW) ? WW : {};
        this.thresholdPx = iW.threshold_px || 30, this.timeoutMs = iW.timeout_ms || 1e3, this.clickCount = iW.click_count || 3, this.clicks = []
      }
      isRageClick(WW, iW, OW) {
        if (this.disabled) return !1;
        const mW = this.clicks[this.clicks.length - 1];
        if (mW && Math.abs(WW - mW.x) + Math.abs(iW - mW.y) < this.thresholdPx && this.timeoutMs > OW - mW.timestamp) {
          if (this.clicks.push({
              x: WW,
              y: iW,
              timestamp: OW
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: WW,
          y: iW,
          timestamp: OW
        }];
        return !1
      }
    };
    const zZ = "$copy_autocapture",
      FZ = fP("[AutoCapture]");

    function QZ(WW, iW) {
      return iW.length > WW ? iW.slice(0, WW) + "..." : iW
    }

    function Wx(WW) {
      if (WW.previousElementSibling) return WW.previousElementSibling;
      let iW = WW;
      do {
        iW = iW.previousSibling
      } while (iW && !uL(iW));
      return iW
    }
    var ix = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(WW) {
          var iW;
          if (!Pc(WW)) return !0;
          const OW = null !== (iW = this._refreshConfig().css_selector_ignorelist) && void 0 !== iW ? iW : RL,
            mW = new Set;
          let EW = WW;
          for (; EW;) {
            if (mW.size >= 1e3 || mW.has(EW)) return !0;
            mW.add(EW);
            const WW = EW,
              iW = DL(WW);
            if (AO(iW, "ph-no-capture") || AO(iW, "ph-sensitive") || Lc(WW) || OW.some((iW => XL(WW, iW)))) return !0;
            const NW = EW.parentNode;
            EW = eL(NW) ? NW.host : NW && uL(NW) ? NW : null
          }
          return !1
        }
        _trackPointer(WW) {
          if (!this.isEnabled || "pointercancel" === WW.type) return void this._clearPointer();
          if ("pointerdown" === WW.type) {
            this._clearPointer();
            const OW = fL(WW);
            var iW;
            return void(WW.isPrimary && 0 === WW.button && !WW.ctrlKey && OW && uL(OW) && (this._pointerDown = {
              target: OW,
              excluded: this._isExcludedPointerTarget(OW),
              id: WW.pointerId,
              x: WW.clientX,
              y: WW.clientY,
              released: !1,
              distinctId: null === (iW = this._client) || void 0 === iW ? void 0 : iW.distinctId
            }))
          }
          const OW = this._pointerDown;
          OW && (WW.pointerId !== OW.id || Math.abs(WW.clientX - OW.x) > 5 || Math.abs(WW.clientY - OW.y) > 5 ? this._clearPointer() : "pointerup" === WW.type && (OW.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(WW) {
          var iW;
          const OW = this._pointerDown;
          this._clearPointer();
          const mW = fL(WW);
          if ((null == OW ? void 0 : OW.released) && OW.target.isConnected && OW.distinctId === (null === (iW = this._client) || void 0 === iW ? void 0 : iW.distinctId) && WW.pointerId === OW.id && (WW.detail > 0 || "touch" === WW.pointerType || "pen" === WW.pointerType) && 0 === WW.button && 5 >= Math.abs(WW.clientX - OW.x) && 5 >= Math.abs(WW.clientY - OW.y) && mW && (oL(mW, "html") || oL(mW, "body"))) {
            var EW;
            if (OW.excluded) return null;
            const WW = null !== (EW = this._refreshConfig().css_selector_ignorelist) && void 0 !== EW ? EW : RL;
            return [mW, null == iO ? void 0 : iO.documentElement, null == iO ? void 0 : iO.body].some((iW => {
              if (!iW) return !1;
              const OW = DL(iW);
              return AO(OW, "ph-no-capture") || AO(OW, "ph-sensitive") || !Pc(iW) || Lc(iW) || WW.some((WW => XL(iW, WW)))
            })) ? null : OW.target
          }
        }
        constructor(WW) {
          this._configSource = WW, this.name = KZ, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new rZ(this._config.rageclick), this._elementSelectors = null
        }
        setup(WW) {
          this._compileUrlPatterns(), this._client = WW;
          const iW = WW.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? iW.dispose() : (this._remoteConfigSubscription = iW, this.startIfEnabled())
        }
        dispose() {
          var WW;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (WW = this._remoteConfigSubscription) || void 0 === WW || WW.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var WW, iW;
          return this._refreshConfig(), this._config.url_allowlist = null === (WW = this._config.url_allowlist) || void 0 === WW ? void 0 : WW.map((WW => new RegExp(WW))), this._config.url_ignorelist = null === (iW = this._config.url_ignorelist) || void 0 === iW ? void 0 : iW.map((WW => new RegExp(WW))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void FZ.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!Fi || !iO) return;
          const WW = this._domEventHandler = WW => {
            WW = WW || (null == Fi ? void 0 : Fi.event);
            try {
              if ("blur" === WW.type) return void this._clearPointer();
              if (0 === WW.type.indexOf("pointer")) return void this._trackPointer(WW);
              const iW = "click" === WW.type ? this._recoverClickTarget(WW) : void 0;
              if (HO(iW)) return;
              this._captureEvent(WW, "$autocapture", iW)
            } catch (WW) {
              FZ.error("Failed to capture event", WW)
            }
          };
          if (zP(Fi, "blur", WW), zP(iO, "submit", WW, {
              capture: !0
            }), zP(iO, "change", WW, {
              capture: !0
            }), zP(iO, "click", WW, {
              capture: !0
            }), XP(["pointerdown", "pointermove", "pointerup", "pointercancel"], (iW => {
              zP(iO, iW, WW, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const WW = this._copiedTextHandler = WW => {
              WW = WW || (null == Fi ? void 0 : Fi.event);
              try {
                this._captureEvent(WW, zZ)
              } catch (WW) {
                FZ.error("Failed to capture clipboard event", WW)
              }
            };
            zP(iO, "copy", WW, {
              capture: !0
            }), zP(iO, "cut", WW, {
              capture: !0
            }), zP(iO, "paste", WW, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == Fi || Fi.removeEventListener("blur", this._domEventHandler), XP(["pointerdown", "pointermove", "pointerup", "pointercancel"], (WW => {
            null == iO || iO.removeEventListener(WW, this._domEventHandler, !0)
          })), null == iO || iO.removeEventListener("submit", this._domEventHandler, !0), null == iO || iO.removeEventListener("change", this._domEventHandler, !0), null == iO || iO.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == iO || iO.removeEventListener("copy", this._copiedTextHandler, !0), null == iO || iO.removeEventListener("cut", this._copiedTextHandler, !0), null == iO || iO.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(WW) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !WW.ok) return void this.startIfEnabled();
          const iW = WW.config;
          iW.elementsChainAsString && (this._elementsChainAsString = iW.elementsChainAsString);
          const OW = iW.autocapture_opt_out;
          var mW;
          dO(OW) && (null === (mW = this._client) || void 0 === mW || mW.kv.set("$autocapture_disabled_server_side", OW), this._isDisabledServerSide = OW), this.startIfEnabled()
        }
        setElementSelectors(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          WW.size ? this._elementSelectorsByOwner.set(iW, new Set(WW)) : this._elementSelectorsByOwner.delete(iW);
          const OW = new Set;
          this._elementSelectorsByOwner.forEach((WW => {
            WW.forEach((WW => OW.add(WW)))
          })), this._elementSelectors = OW
        }
        getElementSelectors(WW, iW) {
          var OW;
          const mW = [];
          return null === (OW = this._elementSelectors) || void 0 === OW || OW.forEach((OW => {
            const EW = null == iO ? void 0 : iO.querySelectorAll(OW);
            null == EW || EW.forEach((EW => {
              WW !== EW && iW !== EW || AO(mW, OW) || mW.push(OW)
            }))
          })), mW
        }
        get isEnabled() {
          var WW, iW;
          if (this._disposed) return !1;
          const OW = null === (WW = this._client) || void 0 === WW ? void 0 : WW.kv.get(eW),
            mW = this._isDisabledServerSide,
            EW = this._refreshConfig();
          if (!EW.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const NW = EW.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (HO(mW) && !dO(OW) && !NW) return !1;
          const PW = null !== (iW = this._isDisabledServerSide) && void 0 !== iW ? iW : !!OW;
          return !!EW.enabled && !PW
        }
        _captureEvent(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            OW = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let mW = OW || fL(WW);
          dL(mW) && (mW = mW.parentNode || null);
          const EW = this._compileUrlPatterns();
          var NW;
          "$autocapture" === iW && "click" === WW.type && WW instanceof MouseEvent && EW.rageclick && (null === (NW = this.rageclicks) || void 0 === NW ? void 0 : NW.isRageClick(WW.clientX, WW.clientY, WW.timeStamp || (new Date).getTime())) && mc(mW, EW.rageclick) && this._captureEvent(WW, "$rageclick", OW);
          const PW = iW === zZ,
            LW = PW ? KE(KE({}, EW), {}, {
              dom_event_allowlist: void 0
            }) : EW;
          if (mW && function(WW, iW, OW, mW, EW, NW) {
              var PW;
              if (!Fi || Ec(WW)) return !1;
              if ((null == OW ? void 0 : OW.url_allowlist) && !gL(OW.url_allowlist, NW)) return !1;
              if ((null == OW ? void 0 : OW.url_ignorelist) && gL(OW.url_ignorelist, NW)) return !1;
              if (null == OW ? void 0 : OW.dom_event_allowlist) {
                const WW = OW.dom_event_allowlist;
                if (WW && !WW.some((WW => iW.type === WW))) return !1
              }
              const {
                parentIsUsefulElement: LW,
                targetElementList: cW
              } = Nc(WW, mW);
              if (! function(WW, iW) {
                  const OW = null == iW ? void 0 : iW.element_allowlist;
                  if (TO(OW)) return !0;
                  for (const mW of WW)
                    if (OW.some((WW => mW.tagName.toLowerCase() === WW))) return !0;
                  return !1
                }(cW, OW)) return !1;
              if (!BL(cW, null == OW ? void 0 : OW.css_selector_allowlist)) return !1;
              if (BL(cW, null !== (PW = null == OW ? void 0 : OW.css_selector_ignorelist) && void 0 !== PW ? PW : RL)) return !1;
              try {
                const OW = Fi.getComputedStyle(WW);
                if (OW && "pointer" === OW.getPropertyValue("cursor") && "click" === iW.type) return !0
              } catch (WW) {}
              const wW = WW.tagName.toLowerCase();
              switch (wW) {
                case "html":
                  return !1;
                case "form":
                  return (EW || ["submit"]).indexOf(iW.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (EW || ["change", "click"]).indexOf(iW.type) >= 0;
                default:
                  return LW ? (EW || ["click"]).indexOf(iW.type) >= 0 : (EW || ["click"]).indexOf(iW.type) >= 0 && (CL.indexOf(wW) > -1 || "true" === WW.getAttribute("contenteditable"))
              }
            }(mW, WW, LW, PW, PW ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: EW.getCurrentUrl
              }
            })) {
            var cW;
            const {
              props: OW,
              explicitNoCapture: NW,
              target: PW
            } = function(WW, iW) {
              let {
                e: OW,
                maskAllElementAttributes: mW,
                maskAllText: EW,
                elementAttributeIgnoreList: NW,
                elementsChainAsString: PW,
                disableCaptureUrlHashes: LW
              } = iW;
              var cW, wW;
              if (!uL(WW)) return {
                props: {}
              };
              const tW = [WW],
                ZW = new Set([WW]);
              let xW = WW;
              for (; xW.parentNode && !oL(xW, "body") && 1e3 > tW.length;)
                if (eL(xW.parentNode)) {
                  const WW = xW.parentNode.host;
                  if (ZW.has(WW)) break;
                  ZW.add(WW), tW.push(WW), xW = WW
                } else {
                  if (!uL(xW.parentNode)) break;
                  if (ZW.has(xW.parentNode)) break;
                  ZW.add(xW.parentNode), tW.push(xW.parentNode), xW = xW.parentNode
                } const lW = "click" === OW.type && "http://www.w3.org/2000/svg" === WW.namespaceURI ? tW.findIndex((WW => oL(WW, "button") || oL(WW, "a"))) : -1;
              lW > 0 && (EW = EW || tW.slice(0, lW + 1).some((WW => !Pc(WW) || Lc(WW))));
              const AW = [],
                bW = {};
              let jW, UW = !1,
                kW = !1;
              if (XP(tW, (WW => {
                  const iW = Pc(WW);
                  if (oL(WW, "a") && !mW && !(null == NW ? void 0 : NW.includes("href"))) {
                    const OW = WW.getAttribute("href");
                    UW = !!(iW && OW && bc(OW)) && (LW ? lE(OW) : OW)
                  }
                  AO(DL(WW), "ph-no-capture") && (kW = !0), AW.push(function(WW, iW, OW, mW) {
                    let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const NW = WW.tagName.toLowerCase(),
                      PW = {
                        tag_name: NW
                      };
                    CL.indexOf(NW) > -1 && !OW && (PW.$el_text = "a" === NW.toLowerCase() || "button" === NW.toLowerCase() ? QZ(1024, jc(WW)) : QZ(1024, pL(WW)));
                    const LW = DL(WW);
                    iW || (null == mW ? void 0 : mW.includes("class")) || 0 >= LW.length || (PW.classes = LW.filter((function(WW) {
                      return "" !== WW
                    }))), XP(WW.attributes, (function(OW) {
                      var NW;
                      if ((!Lc(WW) || -1 !== ["name", "id", "class", "aria-label"].indexOf(OW.name)) && !(null == mW ? void 0 : mW.includes(OW.name)) && !iW && bc(OW.value) && (!JO(NW = OW.name) || "_ngcontent" !== NW.substring(0, 10) && "_nghost" !== NW.substring(0, 7))) {
                        let WW = OW.value;
                        "class" === OW.name && (WW = vL(WW).join(" ")), PW["attr__" + OW.name] = QZ(1024, "href" === OW.name && EW ? lE(WW) : WW)
                      }
                    }));
                    let cW = 1,
                      wW = 1,
                      tW = WW;
                    for (; tW = Wx(tW);) cW++, tW.tagName === WW.tagName && wW++;
                    return PW.nth_child = cW, PW.nth_of_type = wW, PW
                  }(WW, mW, EW, NW, LW)), XP(function(WW) {
                    if (!Pc(WW)) return {};
                    const iW = {};
                    return XP(WW.attributes, (function(WW) {
                      if (WW.name && 0 === WW.name.indexOf("data-ph-capture-attribute")) {
                        const OW = WW.name.replace("data-ph-capture-attribute-", ""),
                          mW = WW.value;
                        OW && mW && bc(mW) && (iW[OW] = mW)
                      }
                    })), iW
                  }(WW), ((WW, iW) => {
                    ({}).hasOwnProperty.call(bW, iW) || (bW[iW] = WW)
                  }))
                })), kW) return {
                props: {},
                explicitNoCapture: kW
              };
              if (lW > 0 && (WW = tW[lW], AW.splice(0, lW)), EW || (AW[0].$el_text = oL(WW, "a") || oL(WW, "button") ? jc(WW) : pL(WW)), UW) {
                var sW, MW;
                AW[0].attr__href = UW;
                const WW = null === (sW = fc(UW)) || void 0 === sW ? void 0 : sW.host,
                  iW = null == Fi || null === (MW = Fi.location) || void 0 === MW ? void 0 : MW.host;
                WW && iW && WW !== iW && (jW = UW)
              }
              return {
                props: BP((SW = OW.type, {
                  $event_type: SW,
                  $ce_version: 1
                }), PW ? {} : {
                  $elements: AW
                }, {
                  $elements_chain: (KW = AW, KO(KW) ? function(WW) {
                    return WW.map((WW => {
                      var iW, OW;
                      let mW = "";
                      if (WW.tag_name && (mW += WW.tag_name), WW.attr_class) {
                        WW.attr_class.sort();
                        for (const iW of WW.attr_class) mW += `.${iW.replace(/"/g,"")}`
                      }
                      const EW = KE(KE(KE(KE({}, WW.text ? {
                          text: WW.text
                        } : {}), {}, {
                          "nth-child": null !== (iW = WW.nth_child) && void 0 !== iW ? iW : 0,
                          "nth-of-type": null !== (OW = WW.nth_of_type) && void 0 !== OW ? OW : 0
                        }, WW.href ? {
                          href: WW.href
                        } : {}), WW.attr_id ? {
                          attr_id: WW.attr_id
                        } : {}), WW.attributes),
                        NW = {};
                      return qP(EW).sort(((WW, iW) => {
                        let [OW] = WW, [mW] = iW;
                        return function(WW, iW) {
                          return iW > WW ? -1 : WW > iW ? 1 : 0
                        }(OW, mW)
                      })).forEach((WW => {
                        let [iW, OW] = WW;
                        return NW[kc(iW.toString())] = kc(OW.toString())
                      })), mW += ":", mW += qP(NW).map((WW => {
                        let [iW, OW] = WW;
                        return `${iW}="${OW}"`
                      })).join(""), mW
                    })).join(";")
                  }(function(WW) {
                    return WW.map((WW => {
                      var iW, OW;
                      const mW = {
                        text: null === (iW = WW.$el_text) || void 0 === iW ? void 0 : iW.slice(0, 400),
                        tag_name: WW.tag_name,
                        href: null === (OW = WW.attr__href) || void 0 === OW ? void 0 : OW.slice(0, 2048),
                        attr_class: sc(WW),
                        attr_id: WW.attr__id,
                        nth_child: WW.nth_child,
                        nth_of_type: WW.nth_of_type,
                        attributes: {}
                      };
                      return qP(WW).filter((WW => {
                        let [iW] = WW;
                        return 0 === iW.indexOf("attr__")
                      })).forEach((WW => {
                        let [iW, OW] = WW;
                        return mW.attributes[iW] = OW
                      })), mW
                    }))
                  }(KW)) : "")
                }, (null === (cW = AW[0]) || void 0 === cW ? void 0 : cW.$el_text) ? {
                  $el_text: null === (wW = AW[0]) || void 0 === wW ? void 0 : wW.$el_text
                } : {}, jW && "click" === OW.type ? {
                  $external_click_url: jW
                } : {}, bW),
                target: WW
              };
              var KW, SW
            }(mW, {
              e: WW,
              maskAllElementAttributes: EW.maskAllElementAttributes,
              maskAllText: EW.maskAllText,
              elementAttributeIgnoreList: EW.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: EW.disableCaptureUrlHashes
            });
            if (NW) return !1;
            const LW = this.getElementSelectors(mW, PW);
            if (LW && LW.length > 0 && (OW.$element_selectors = LW), iW === zZ) {
              const iW = WW.type || "clipboard";
              if ("paste" !== iW) {
                var wW, tW;
                const WW = null == Fi || null === (wW = Fi.getSelection()) || void 0 === wW ? void 0 : wW.toString(),
                  iW = VL(WW);
                if (!iW) return !1;
                OW.$selected_content = iW, OW.$clipboard_text_length = null !== (tW = null == WW ? void 0 : WW.length) && void 0 !== tW ? tW : 0
              }
              OW.$copy_type = iW
            }
            return null === (cW = this._client) || void 0 === cW || cW.capture(iW, OW), !0
          }
        }
        isBrowserSupported() {
          return SO(null == iO ? void 0 : iO.querySelectorAll)
        }
      },
      Ox = class {
        constructor(WW) {
          this._instance = WW
        }
        refresh(WW) {
          const iW = this._instance.config,
            OW = YO(iW.autocapture) ? iW.autocapture : void 0;
          WW.enabled = !!iW.autocapture, WW.rageclick = iW.rageclick, WW.maskAllElementAttributes = iW.mask_all_element_attributes, WW.maskAllText = iW.mask_all_text, WW.disableCaptureUrlHashes = iW.disable_capture_url_hashes, WW.getCurrentUrl = iW.get_current_url, WW.remoteRequestsDisabled = this._instance._shouldDisableFlags(), WW.url_allowlist = null == OW ? void 0 : OW.url_allowlist, WW.url_ignorelist = null == OW ? void 0 : OW.url_ignorelist, WW.dom_event_allowlist = null == OW ? void 0 : OW.dom_event_allowlist, WW.element_allowlist = null == OW ? void 0 : OW.element_allowlist, WW.css_selector_allowlist = null == OW ? void 0 : OW.css_selector_allowlist, WW.css_selector_ignorelist = null == OW ? void 0 : OW.css_selector_ignorelist, WW.element_attribute_ignorelist = null == OW ? void 0 : OW.element_attribute_ignorelist, WW.capture_copied_text = null == OW ? void 0 : OW.capture_copied_text
        }
      };
    const mx = fP("[ExceptionAutocapture]"),
      Ex = () => {},
      Nx = WW => {
        var iW;
        if (SO(WW)) return null !== (iW = WW.__posthog_layer__) && void 0 !== iW ? iW : WW.__rrweb_layer__
      };

    function Px(WW, iW, OW) {
      try {
        if (!(iW in WW)) return Ex;
        const mW = {
            next: WW[iW]
          },
          EW = OW((function() {
            for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
            return mW.next.apply(this, iW)
          }));
        return SO(EW) && (EW.prototype = EW.prototype || {}, Object.defineProperties(EW, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: mW
          }
        })), WW[iW] = EW, () => {
          if (WW[iW] === EW) return void(WW[iW] = mW.next);
          let OW = WW[iW],
            NW = Nx(OW);
          for (; NW;) {
            if (NW.next === EW) return void(NW.next = mW.next);
            OW = NW.next, NW = Nx(OW)
          }
        }
      } catch (WW) {
        return Ex
      }
    }
    const Lx = fP("[TracingHeaders]"),
      cx = fP("[Web Vitals]"),
      wx = 9e5,
      tx = ["CLS", "FCP", "INP", "LCP"],
      Zx = ["INP", "LCP"],
      xx = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      lx = "disabled",
      Ax = "lazy_loading",
      bx = fP("[SessionRecording]"),
      jx = [ui, oi, di, ei, vi, gi, Di, Vi, fi],
      Ux = fP("[Heatmaps]");

    function kx(WW) {
      return YO(WW) && "clientX" in WW && "clientY" in WW && uO(WW.clientX) && uO(WW.clientY)
    }
    const sx = fP("[Product Tours]"),
      Mx = WW => {
        var iW;
        return !WW.config.disable_product_tours && !!(null === (iW = WW.persistence) || void 0 === iW ? void 0 : iW.get_property(CW))
      },
      Kx = ["$set_once", "$set"],
      Sx = fP("[SiteApps]"),
      Yx = "Error while initializing PostHog app with config id ",
      yx = (WW, iW) => (null == WW ? void 0 : WW.then) ? WW.then(iW) : iW(WW),
      Tx = "SDK is not enabled or survey functionality is not yet loaded",
      Jx = "Disabled. Not loading surveys.";
    var hx = class {
      constructor(WW, iW) {
        this._configSource = WW, this._initialClientState = iW, this.name = yZ, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = WW => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!WW.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), AZ.warn("Remote config unavailable. Not loading surveys.");
          const iW = WW.config.surveys;
          if (nO(iW)) return AZ.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = dO(iW) ? iW : iW.length > 0, AZ.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = WW => {
          this._activeMatchingSurveyCallbacks.slice().forEach((iW => this._notifyActiveMatchingSurveyCallback(iW, WW)))
        }
      }
      setup(WW) {
        if (!this._disposed) return this._initializingClient = WW, yx(WW.kv.initialize(), (() => {
          if (this._initializingClient !== WW || this._disposed) return;
          this._initializingClient = void 0, this._client = WW;
          const iW = WW.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? iW.dispose() : (this._remoteConfigSubscription = iW, this.loadIfEnabled())
        }))
      }
      dispose() {
        var WW, iW, OW, mW, EW;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (WW = this._remoteConfigSubscription) || void 0 === WW || WW.dispose(), this._remoteConfigSubscription = void 0, null === (iW = this._surveyEventReceiver) || void 0 === iW || iW.dispose(), this._surveyEventReceiver = null, null === (OW = this._surveyManager) || void 0 === OW || null === (mW = OW.dispose) || void 0 === mW || mW.call(OW), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((WW => {
          WW.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (EW = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === EW || EW.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((WW => clearTimeout(WW))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var WW, iW;
        null === (WW = this._surveyManager) || void 0 === WW || null === (iW = WW.clearInMemoryInProgressSurveyState) || void 0 === iW || iW.call(WW);
        try {
          var OW;
          null === (OW = this._surveyEventReceiver) || void 0 === OW || OW.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const WW = [];
          for (let iW = 0; iW < localStorage.length; iW++) {
            const OW = localStorage.key(iW);
            ((null == OW ? void 0 : OW.startsWith("seenSurvey_")) || (null == OW ? void 0 : OW.startsWith("inProgressSurvey_"))) && WW.push(OW)
          }
          WW.forEach((WW => localStorage.removeItem(WW)))
        } catch (WW) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const WW = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void AZ.info("Already initializing surveys, skipping...");
        if (WW.disableSurveys) return void AZ.info(Jx);
        if (WW.cookielessMode && this._configSource.isOptedOut()) return void AZ.info("Not loading surveys in cookieless mode without consent.");
        const iW = this._configSource.getExtensions();
        if (!iW) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (TO(this._isSurveysEnabled) && !WW.advancedEnableSurveys) return;
        const OW = this._isSurveysEnabled || WW.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const WW = iW.generateSurveys;
          if (WW) return this._completeSurveyInitialization(WW, OW), void(this._isInitializingSurveys = !1);
          const mW = iW.loadExternalDependency;
          if (!mW) return this._handleSurveyLoadError(Xi), void(this._isInitializingSurveys = !1);
          mW((WW => {
            try {
              if (this._disposed) return;
              const iW = this._configSource.getExtensions();
              WW || !(null == iW ? void 0 : iW.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", WW) : this._completeSurveyInitialization(iW.generateSurveys, OW)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (WW) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", WW), WW
        }
      }
      _completeSurveyInitialization(WW, iW) {
        var OW, mW;
        if (this._disposed) return;
        this._surveyManager = WW(iW), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const EW = null === (OW = null !== (mW = this._client) && void 0 !== mW ? mW : this._initialClientState) || void 0 === OW ? void 0 : OW.kv.get(Pi);
        EW && this._registerEventOrActionBasedSurveys(EW), AZ.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(WW, iW) {
        this._surveyInitializationFailed = !0, AZ.error(WW, iW), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: WW
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: WW
        })
      }
      onSurveysLoaded(WW) {
        return this._surveyCallbacks.push(WW), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((iW => iW !== WW))
        }
      }
      getSurveys(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var OW;
        const mW = null !== (OW = this._client) && void 0 !== OW ? OW : this._initialClientState;
        if (!mW || this._disposed) return;
        if (this._config.disableSurveys) return AZ.info(Jx), WW([]);
        const EW = mW.kv.get(Pi);
        if (EW && !iW) return WW(EW, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((iW => {
          let {
            surveys: OW,
            context: mW
          } = iW;
          this._disposed || WW(OW, mW)
        })).catch((WW => AZ.error("Error in survey callback", WW)));
        const NW = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: mW.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((WW => {
          try {
            return this._handleSurveyResponse(mW, WW)
          } catch (WW) {
            return AZ.error("Error processing surveys response", WW), this._handleSurveyResponse(mW, {
              statusCode: 0,
              error: WW
            })
          }
        }), (WW => this._handleSurveyResponse(mW, {
          statusCode: 0,
          error: WW
        })));
        this._getSurveysInFlightPromise = NW;
        const PW = () => {
          this._getSurveysInFlightPromise === NW && (this._getSurveysInFlightPromise = null)
        };
        NW.then((iW => {
          PW(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(iW.context), WW(iW.surveys, iW.context))
        }), PW).catch((WW => AZ.error("Error in survey callback", WW)))
      }
      _sendSurveysRequest(WW, iW) {
        const OW = this._client;
        return OW ? OW.sendRequest(WW, iW) : new Promise((WW => WW({
          statusCode: 0,
          error: new Error(Tx)
        })))
      }
      _handleSurveyResponse(WW, iW) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: Tx
          }
        };
        const OW = iW.statusCode;
        if (200 !== OW || !iW.json) {
          const WW = `Surveys API could not be loaded, status: ${OW}`;
          return 0 !== OW ? AZ.error(WW) : iW.error || AZ.warn(WW), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: WW
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const mW = iW.json.surveys || [];
        return WW.kv.set({
          [Pi]: mW,
          [Li]: Date.now()
        }), this._registerEventOrActionBasedSurveys(mW), {
          surveys: mW,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(WW) {
        var iW;
        const OW = WW.filter((WW => function(WW) {
          return !(!WW.start_date || WW.end_date)
        }(WW) && (mZ(WW) || function(WW) {
          var iW;
          return !!(null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.actions) || void 0 === iW || null === (iW = iW.values) || void 0 === iW ? void 0 : iW.length)
        }(WW))));
        null === (iW = this._surveyEventReceiver) || void 0 === iW || iW.replace(OW)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var WW, iW;
        const OW = null === (WW = null !== (iW = this._client) && void 0 !== iW ? iW : this._initialClientState) || void 0 === WW ? void 0 : WW.kv.get(Li);
        return uO(OW) && Date.now() - OW > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return uO(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(WW, iW) {
        var OW;
        const mW = {
          id: WW,
          current_iteration: null !== (OW = null == iW ? void 0 : iW.iteration) && void 0 !== OW ? OW : null
        };
        bZ(mW);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (WW) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(WW) {
        for (const iW of this._surveyCallbacks) try {
          if (!WW.isLoaded) return iW([], WW);
          this.getSurveys(iW)
        } catch (WW) {
          AZ.error("Error in survey callback", WW)
        }
      }
      getActiveMatchingSurveys(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!nO(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(WW, iW);
        AZ.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(WW) {
        var iW, OW;
        if (this._disposed) return () => {};
        const mW = {
          callback: WW,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(mW), this._startActiveMatchingSurveyConditions();
        const EW = null === (iW = null !== (OW = this._client) && void 0 !== OW ? OW : this._initialClientState) || void 0 === iW ? void 0 : iW.kv.get(Pi);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !EW && !nO(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(mW, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(mW), () => {
          var WW;
          mW.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((WW => WW !== mW)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (WW = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === WW || WW.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var WW, iW, OW;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (WW = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== WW || (this._activeMatchingSurveyConditionsUnsubscribe = null === (iW = (OW = this._configSource).onMatchingConditionsChanged) || void 0 === iW ? void 0 : iW.call(OW, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(WW, iW) {
        if (this._disposed || !WW.active) return;
        const OW = ++WW.revision,
          mW = mW => {
            if (!this._disposed && WW.active && OW === WW.revision) try {
              const OW = null != iW ? iW : {
                  isLoaded: !0
                },
                EW = JSON.stringify([mW, OW]);
              if (EW === WW.lastResult) return;
              WW.lastResult = EW, WW.callback(mW, OW)
            } catch (WW) {
              AZ.error("Error in active matching surveys callback", WW)
            }
          };
        try {
          iW && !iW.isLoaded ? mW([]) : this.getActiveMatchingSurveys(mW)
        } catch (WW) {
          AZ.error("Error in active matching surveys callback", WW)
        }
      }
      _getSurveyById(WW) {
        let iW = null;
        return this.getSurveys((OW => {
          var mW;
          iW = null !== (mW = OW.find((iW => iW.id === WW))) && void 0 !== mW ? mW : null
        })), iW
      }
      _checkSurveyEligibility(WW) {
        if (nO(this._surveyManager)) return {
          eligible: !1,
          reason: Tx
        };
        const iW = "string" == typeof WW ? this._getSurveyById(WW) : WW;
        return iW ? this._surveyManager.checkSurveyEligibility(iW) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(WW) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (nO(this._surveyManager)) return {
          eligible: !1,
          reason: Tx
        };
        const iW = "string" == typeof WW ? this._getSurveyById(WW) : WW;
        return iW ? this._surveyManager.checkSurveyRenderability(iW) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(WW) {
        if (nO(this._surveyManager)) return AZ.warn("init was not called"), {
          visible: !1,
          disabledReason: Tx
        };
        const iW = this._checkSurveyRenderability(WW);
        return {
          visible: iW.eligible,
          disabledReason: iW.reason
        }
      }
      canRenderSurveyAsync(WW, iW) {
        return nO(this._surveyManager) ? (AZ.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: Tx
        })) : new Promise((OW => {
          this.getSurveys((iW => {
            var mW;
            const EW = null !== (mW = iW.find((iW => iW.id === WW))) && void 0 !== mW ? mW : null;
            if (EW) {
              const WW = this._checkSurveyRenderability(EW);
              OW({
                visible: WW.eligible,
                disabledReason: WW.reason
              })
            } else OW({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), iW)
        }))
      }
      renderSurvey(WW, iW, OW) {
        var mW;
        if (!this._configSource.isCapturing()) return;
        if (nO(this._surveyManager)) return void AZ.warn("init was not called");
        const EW = "string" == typeof WW ? this._getSurveyById(WW) : WW;
        if (!(null == EW ? void 0 : EW.id)) return void AZ.warn("Survey not found");
        if (!jZ.includes(EW.type)) return void AZ.warn(`Surveys of type ${EW.type} cannot be rendered in the app`);
        const NW = null == iO ? void 0 : iO.querySelector(iW);
        if (NW) {
          if (null === (mW = EW.appearance) || void 0 === mW ? void 0 : mW.surveyPopupDelaySeconds) {
            AZ.info(`Rendering survey ${EW.id} with delay of ${EW.appearance.surveyPopupDelaySeconds} seconds`);
            const WW = setTimeout((() => {
              var iW, mW;
              this._renderTimeouts.delete(WW), !this._disposed && this._configSource.isCapturing() && (AZ.info(`Rendering survey ${EW.id} with delay of ${null===(iW=EW.appearance)||void 0===iW?void 0:iW.surveyPopupDelaySeconds} seconds`), null === (mW = this._surveyManager) || void 0 === mW || mW.renderSurvey(EW, NW, OW), AZ.info(`Survey ${EW.id} rendered`))
            }), 1e3 * EW.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(WW)
          }
          this._surveyManager.renderSurvey(EW, NW, OW)
        } else AZ.warn("Survey element not found")
      }
      displaySurvey(WW, iW) {
        var OW;
        if (!this._configSource.isCapturing()) return;
        if (nO(this._surveyManager)) return void AZ.warn("init was not called");
        const mW = this._getSurveyById(WW);
        if (!mW) return void AZ.warn("Survey not found");
        let EW = mW;
        if ((null === (OW = mW.appearance) || void 0 === OW ? void 0 : OW.surveyPopupDelaySeconds) && iW.ignoreDelay && (EW = KE(KE({}, mW), {}, {
            appearance: KE(KE({}, mW.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), iW.displayType !== ow && iW.initialResponses && AZ.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === iW.ignoreConditions) {
          const WW = this._checkSurveyEligibility(mW);
          if (!WW.eligible) return void AZ.warn("Survey is not eligible to be displayed: ", WW.reason)
        }
        iW.displayType !== dw ? this._surveyManager.handlePopoverSurvey(EW, iW) : this.renderSurvey(EW, iW.selector, iW.properties)
      }
      cancelPendingSurvey(WW) {
        nO(this._surveyManager) ? AZ.warn("init was not called") : this._surveyManager.cancelSurvey(WW)
      }
      handlePageUnload() {
        var WW, iW;
        null === (WW = this._surveyManager) || void 0 === WW || null === (iW = WW.handlePageUnload) || void 0 === iW || iW.call(WW)
      }
    };

    function Hx(WW, iW, OW) {
      if (nO(WW)) return !1;
      switch (OW) {
        case "exact":
          return WW === iW;
        case "contains": {
          const OW = iW.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(OW, "i").test(WW)
        }
        case "regex":
          try {
            return new RegExp(iW).test(WW)
          } catch (WW) {
            return !1
          }
        default:
          return !1
      }
    }
    var nx = class {
        constructor(WW) {
          this._instance = WW, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new rt, this._checkStep = (WW, iW) => this._checkStepEvent(WW, iW) && this._checkStepUrl(WW, iW) && this._checkStepElement(WW, iW) && this._checkStepProperties(WW, iW), this._checkStepEvent = (WW, iW) => !(null == iW ? void 0 : iW.event) || (null == WW ? void 0 : WW.event) === (null == iW ? void 0 : iW.event)
        }
        init() {
          var WW, iW;
          TO(null === (WW = this._instance) || void 0 === WW ? void 0 : WW._addCaptureHook) || (this._captureHookUnsubscribe = null === (iW = this._instance) || void 0 === iW ? void 0 : iW._addCaptureHook(((WW, iW) => {
            this.on(WW, iW)
          })))
        }
        dispose() {
          var WW, iW;
          null === (WW = this._captureHookUnsubscribe) || void 0 === WW || WW.call(this), this._captureHookUnsubscribe = void 0, null === (iW = this._instance) || void 0 === iW || null === (iW = iW.autocapture) || void 0 === iW || iW.setElementSelectors(new Set, this), this._debugEventEmitter = new rt
        }
        register(WW) {
          var iW, OW;
          if (!TO(null === (iW = this._instance) || void 0 === iW ? void 0 : iW._addCaptureHook) && (WW.forEach((WW => {
              var iW;
              this._actionRegistry.add(WW), null === (iW = WW.steps) || void 0 === iW || iW.forEach((WW => {
                this._actionEvents.add((null == WW ? void 0 : WW.event) || "")
              }))
            })), null === (OW = this._instance) || void 0 === OW ? void 0 : OW.autocapture)) {
            const WW = new Set;
            this._actionRegistry.forEach((iW => {
              var OW;
              null === (OW = iW.steps) || void 0 === OW || OW.forEach((iW => {
                (null == iW ? void 0 : iW.selector) && WW.add(iW.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(WW, this)
          }
        }
        replace(WW) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(WW)
        }
        on(WW, iW) {
          null != iW && 0 != WW.length && (this._actionEvents.has(WW) || this._actionEvents.has(iW.event)) && this._actionRegistry.forEach((WW => {
            this._checkAction(iW, WW) && this._debugEventEmitter.emit("actionCaptured", WW.name)
          }))
        }
        _addActionHook(WW) {
          this.onAction("actionCaptured", (iW => WW(iW)))
        }
        _checkAction(WW, iW) {
          if (null == (null == iW ? void 0 : iW.steps)) return !1;
          for (const OW of iW.steps)
            if (this._checkStep(WW, OW)) return !0;
          return !1
        }
        onAction(WW, iW) {
          return this._debugEventEmitter.on(WW, iW)
        }
        _checkStepUrl(WW, iW) {
          if (null == iW ? void 0 : iW.url) {
            var OW;
            const mW = null == WW || null === (OW = WW.properties) || void 0 === OW ? void 0 : OW.$current_url;
            if (!mW || "string" != typeof mW) return !1;
            if (!Hx(mW, iW.url, iW.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(WW, iW) {
          return !!this._checkStepHref(WW, iW) && !!this._checkStepText(WW, iW) && !!this._checkStepSelector(WW, iW)
        }
        _checkStepHref(WW, iW) {
          var OW;
          if (!(null == iW ? void 0 : iW.href)) return !0;
          const mW = this._getElementsList(WW);
          if (mW.length > 0) return mW.some((WW => Hx(WW.href, iW.href, iW.href_matching || "exact")));
          const EW = (null == WW || null === (OW = WW.properties) || void 0 === OW ? void 0 : OW.$elements_chain) || "";
          return !!EW && Hx(function(WW) {
            const iW = WW.match(/(?::|")href="(.*?)"/);
            return iW ? iW[1] : ""
          }(EW), iW.href, iW.href_matching || "exact")
        }
        _checkStepText(WW, iW) {
          var OW;
          if (!(null == iW ? void 0 : iW.text)) return !0;
          const mW = this._getElementsList(WW);
          if (mW.length > 0) return mW.some((WW => Hx(WW.text, iW.text, iW.text_matching || "exact") || Hx(WW.$el_text, iW.text, iW.text_matching || "exact")));
          const EW = (null == WW || null === (OW = WW.properties) || void 0 === OW ? void 0 : OW.$elements_chain) || "";
          return !!EW && (NW = function(WW) {
            const iW = [],
              OW = /(?::|")text="(.*?)"/g;
            let mW;
            for (; !nO(mW = OW.exec(WW));) iW.includes(mW[1]) || iW.push(mW[1]);
            return iW
          }(EW), PW = iW.text, LW = iW.text_matching || "exact", NW.some((WW => Hx(WW, PW, LW))));
          var NW, PW, LW
        }
        _checkStepSelector(WW, iW) {
          var OW, mW;
          if (!(null == iW ? void 0 : iW.selector)) return !0;
          const EW = null == WW || null === (OW = WW.properties) || void 0 === OW ? void 0 : OW.$element_selectors;
          if (null == EW ? void 0 : EW.includes(iW.selector)) return !0;
          const NW = (null == WW || null === (mW = WW.properties) || void 0 === mW ? void 0 : mW.$elements_chain) || "";
          if (iW.selector_regex && NW) try {
            return new RegExp(iW.selector_regex).test(NW)
          } catch (WW) {
            return !1
          }
          return !1
        }
        _getElementsList(WW) {
          var iW;
          return null == (null == WW || null === (iW = WW.properties) || void 0 === iW ? void 0 : iW.$elements) ? [] : null == WW ? void 0 : WW.properties.$elements
        }
        _checkStepProperties(WW, iW) {
          return !(null == iW ? void 0 : iW.properties) || 0 === iW.properties.length || LZ(iW.properties.reduce(((WW, iW) => {
            const OW = KO(iW.value) ? iW.value.map(String) : null != iW.value ? [String(iW.value)] : [];
            return WW[iW.key] = {
              values: OW,
              operator: iW.operator || "exact"
            }, WW
          }), {}), null == WW ? void 0 : WW.properties)
        }
      },
      ux = class {
        constructor(WW, iW) {
          var OW, mW;
          this._pendingActivatedItems = [], this._instance = WW, this._onActivationChanged = iW, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (OW = this._instance) || void 0 === OW || null === (mW = OW.onSessionId) || void 0 === mW ? void 0 : mW.call(OW, (WW => this._onSessionIdChanged(WW)))
        }
        _shouldPersistArmedActivation(WW) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(WW) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(WW, iW) {
          return !!WW && LZ(WW.propertyFilters, null == iW ? void 0 : iW.properties)
        }
        _buildEventToItemMap(WW, iW) {
          const OW = new Map;
          return WW.forEach((WW => {
            var mW;
            null === (mW = WW.conditions) || void 0 === mW || null === (mW = mW[iW]) || void 0 === mW || null === (mW = mW.values) || void 0 === mW || mW.forEach((iW => {
              if (null == iW ? void 0 : iW.name) {
                const mW = OW.get(iW.name) || [];
                mW.push(WW.id), OW.set(iW.name, mW)
              }
            }))
          })), OW
        }
        _getMatchingItems(WW, iW, OW) {
          const mW = (OW === Mw ? this._eventToItems : this._cancelEventToItems).get(WW);
          let EW = [];
          return this._getItems((WW => {
            EW = WW.filter((WW => null == mW ? void 0 : mW.includes(WW.id)))
          })), EW.filter((mW => {
            var EW;
            const NW = null === (EW = mW.conditions) || void 0 === EW || null === (EW = EW[OW]) || void 0 === EW || null === (EW = EW.values) || void 0 === EW ? void 0 : EW.find((iW => iW.name === WW));
            return this._doesEventMatchFilter(NW, iW)
          }))
        }
        register(WW) {
          this._register(WW, !1)
        }
        replace(WW) {
          this._register(WW, !0)
        }
        _register(WW, iW) {
          var OW;
          TO(null === (OW = this._instance) || void 0 === OW ? void 0 : OW._addCaptureHook) || (this._setupEventBasedItems(WW, iW), this._setupActionBasedItems(WW, iW))
        }
        _setupActionBasedItems(WW, iW) {
          const OW = WW.filter((WW => {
            var iW;
            return null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.actions) || void 0 === iW || null === (iW = iW.values) || void 0 === iW ? void 0 : iW.length
          }));
          var mW;
          if (iW && this._actionToItems.clear(), 0 === OW.length) return void(iW && (null === (mW = this._actionMatcher) || void 0 === mW || mW.replace([])));
          this._actionMatcher || (this._actionMatcher = new nx(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((WW => this.onAction(WW))));
          const EW = [];
          OW.forEach((WW => {
            var iW;
            null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.actions) || void 0 === iW || iW.values.forEach((iW => {
              if (EW.push(iW), iW.name) {
                var OW;
                const mW = null !== (OW = this._actionToItems.get(iW.name)) && void 0 !== OW ? OW : [];
                mW.includes(WW.id) || mW.push(WW.id), this._actionToItems.set(iW.name, mW)
              }
            }))
          })), iW ? this._actionMatcher.replace(EW) : this._actionMatcher.register(EW)
        }
        _mergeItemMaps(WW, iW) {
          iW.forEach(((iW, OW) => {
            var mW;
            const EW = null !== (mW = WW.get(OW)) && void 0 !== mW ? mW : [];
            iW.forEach((WW => {
              EW.includes(WW) || EW.push(WW)
            })), WW.set(OW, EW)
          }))
        }
        _setupEventBasedItems(WW, iW) {
          var OW, mW;
          const EW = WW.filter((WW => {
              var iW, OW;
              return (null === (iW = WW.conditions) || void 0 === iW ? void 0 : iW.events) && (null === (OW = WW.conditions) || void 0 === OW || null === (OW = OW.events) || void 0 === OW || null === (OW = OW.values) || void 0 === OW ? void 0 : OW.length) > 0
            })),
            NW = WW.filter((WW => {
              var iW, OW;
              return (null === (iW = WW.conditions) || void 0 === iW ? void 0 : iW.cancelEvents) && (null === (OW = WW.conditions) || void 0 === OW || null === (OW = OW.cancelEvents) || void 0 === OW || null === (OW = OW.values) || void 0 === OW ? void 0 : OW.length) > 0
            })),
            PW = this._buildEventToItemMap(WW, Mw),
            LW = this._buildEventToItemMap(WW, Kw);
          iW ? (this._eventToItems = PW, this._cancelEventToItems = LW) : (this._mergeItemMaps(this._eventToItems, PW), this._mergeItemMaps(this._cancelEventToItems, LW)), (0 !== EW.length || 0 !== NW.length || WW.some((WW => {
            var iW;
            return null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.actions) || void 0 === iW || null === (iW = iW.values) || void 0 === iW ? void 0 : iW.length
          }))) && (null !== (OW = this._captureHookUnsubscribe) && void 0 !== OW || (this._captureHookUnsubscribe = null === (mW = this._instance) || void 0 === mW ? void 0 : mW._addCaptureHook(((WW, iW) => {
            this.onEvent(WW, iW)
          }))))
        }
        onEvent(WW, iW) {
          var OW, mW;
          const EW = this._getLogger(),
            NW = (null == iW || null === (OW = iW.properties) || void 0 === OW ? void 0 : OW.$survey_id) || (null == iW || null === (mW = iW.properties) || void 0 === mW ? void 0 : mW.$product_tour_id);
          if (NW && this.getActivatedIds().includes(NW)) {
            const OW = this._activationOutcome(WW, NW, iW);
            if ("consume" === OW) return EW.info("event consumed activated item, removing it", {
              event: WW,
              itemId: NW
            }), void this._deactivateItems([NW]);
            if ("persist" === OW) return EW.info("shown item promoted to persisted activation", {
              event: WW,
              itemId: NW
            }), this._persistActivation(NW), void this._clearActivationTimestamps([NW])
          }
          if (this._cancelEventToItems.has(WW)) {
            const OW = this._getMatchingItems(WW, iW, Kw);
            OW.length > 0 && (EW.info("cancel event matched, cancelling items", {
              event: WW,
              itemsToCancel: OW.map((WW => WW.id))
            }), this._deactivateItems(OW.map((WW => WW.id))), OW.forEach((WW => this._cancelPendingItem(WW.id))))
          }
          if (!this._eventToItems.has(WW)) return;
          EW.info("event name matched", {
            event: WW,
            eventPayload: iW,
            items: this._eventToItems.get(WW)
          });
          const PW = this._getMatchingItems(WW, iW, Mw);
          this._activateItems(PW.map((WW => WW.id)))
        }
        onAction(WW) {
          this._actionToItems.has(WW) && this._activateItems(this._actionToItems.get(WW) || [])
        }
        _activateItems(WW) {
          var iW, OW;
          if (0 === WW.length) return;
          const mW = !!(null === (iW = this._instance) || void 0 === iW || null === (OW = iW.get_session_id) || void 0 === OW ? void 0 : OW.call(iW)),
            EW = [];
          for (const NW of WW) mW && this._shouldPersistArmedActivation(NW) ? this._persistActivation(NW) && this._recordActivationTimestamp(NW) : EW.push(NW);
          EW.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...EW])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(WW) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((iW => iW !== WW));
          const iW = this._getPersistedActivatedIds();
          return !iW.includes(WW) && (this._setActivatedItems([...iW, WW]), this._stampActivationSession(), !0)
        }
        _deactivateItems(WW) {
          const iW = new Set(WW);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((WW => !iW.has(WW)));
          const OW = this._getRawPersistedActivatedIds(),
            mW = OW.filter((WW => !iW.has(WW)));
          mW.length !== OW.length && (this._setActivatedItems(mW), 0 === mW.length && this._clearActivationSession()), this._clearActivationTimestamps(WW), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var WW;
            null === (WW = this._onActivationChanged) || void 0 === WW || WW.call(this)
          } catch (WW) {
            this._getLogger().error("Error while handling activated items change", WW)
          }
        }
        _getRawActivationTimestamps() {
          var WW;
          const iW = this._getActivationTimestampsKey();
          if (!iW) return {};
          const OW = null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW ? void 0 : WW.props[iW];
          return OW && "object" == typeof OW ? OW : {}
        }
        _recordActivationTimestamp(WW) {
          if (!this._getActivationTimestampsKey()) return;
          const iW = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(KE(KE({}, iW), {}, {
            [WW]: Date.now()
          }))
        }
        _clearActivationTimestamps(WW) {
          if (!this._getActivationTimestampsKey()) return;
          const iW = this._getRawActivationTimestamps(),
            OW = {};
          let mW = !1;
          for (const [EW, NW] of Object.entries(iW)) WW.includes(EW) ? mW = !0 : OW[EW] = NW;
          mW && (yO(OW) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(OW))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(WW) {
          if (!this._getPersistedActivatedIds().includes(WW)) return;
          const iW = this._getRawActivationTimestamps()[WW];
          return uO(iW) ? iW : void 0
        }
        _getRawPersistedActivatedIds() {
          var WW;
          const iW = this._getActivatedKey();
          return (null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW ? void 0 : WW.props[iW]) || []
        }
        _getPersistedActivatedIds() {
          var WW, iW, OW;
          const mW = this._getRawPersistedActivatedIds();
          if (0 === mW.length) return [];
          const EW = null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW ? void 0 : WW.props[this._getActivatedSessionKey()],
            NW = null === (iW = this._instance) || void 0 === iW || null === (OW = iW.get_session_id) || void 0 === OW ? void 0 : OW.call(iW);
          return NW && EW === NW ? mW : []
        }
        _stampActivationSession() {
          var WW, iW;
          const OW = null === (WW = this._instance) || void 0 === WW || null === (iW = WW.get_session_id) || void 0 === iW ? void 0 : iW.call(WW);
          OW && this._setActivatedSession(OW)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(WW) {
          var iW;
          const OW = null === (iW = this._instance) || void 0 === iW || null === (iW = iW.persistence) || void 0 === iW ? void 0 : iW.props[this._getActivatedSessionKey()];
          if (OW && OW !== WW) {
            const WW = this._getRawPersistedActivatedIds(),
              iW = this._getRawActivationTimestamps();
            WW.length > 0 && (this._setActivatedItems([]), WW.filter((WW => uO(iW[WW]))).forEach((WW => this._cancelPendingItem(WW)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), WW.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((WW => !this._isItemPermanentlyIneligible(WW)))
        }
        dispose() {
          var WW, iW, OW;
          null === (WW = this._sessionIdUnsubscribe) || void 0 === WW || WW.call(this), this._sessionIdUnsubscribe = void 0, null === (iW = this._captureHookUnsubscribe) || void 0 === iW || iW.call(this), this._captureHookUnsubscribe = void 0, null === (OW = this._actionMatcher) || void 0 === OW || OW.dispose(), this._actionMatcher = void 0
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
      ox = class extends ux {
        constructor(WW, iW) {
          super(WW, iW)
        }
        _getActivatedKey() {
          return ci
        }
        _getActivatedSessionKey() {
          return wi
        }
        _getActivationTimestampsKey() {
          return ti
        }
        _writeActivationTimestamps(WW) {
          var iW;
          null === (iW = this._instance) || void 0 === iW || null === (iW = iW.persistence) || void 0 === iW || iW.register({
            $surveys_activated_timestamps: WW
          })
        }
        _clearActivationTimestampsStore() {
          var WW;
          null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW || WW.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(WW) {
          var iW;
          let OW;
          this._getItems((iW => {
            OW = iW.find((iW => iW.id === WW))
          }));
          const mW = null == OW || null === (iW = OW.appearance) || void 0 === iW ? void 0 : iW.surveyPopupDelaySeconds;
          return uO(mW) && mW > 0
        }
        _getShownEventName() {
          return Tw
        }
        _getItems(WW) {
          var iW;
          null === (iW = this._instance) || void 0 === iW || iW.getSurveys(WW)
        }
        _cancelPendingItem(WW) {
          var iW;
          null === (iW = this._instance) || void 0 === iW || iW.cancelPendingSurvey(WW)
        }
        _getLogger() {
          return AZ
        }
        _setActivatedItems(WW) {
          var iW;
          null === (iW = this._instance) || void 0 === iW || null === (iW = iW.persistence) || void 0 === iW || iW.register({
            $surveys_activated: WW
          })
        }
        _setActivatedSession(WW) {
          var iW;
          null === (iW = this._instance) || void 0 === iW || null === (iW = iW.persistence) || void 0 === iW || iW.register({
            $surveys_activated_session: WW
          })
        }
        _clearActivatedSession() {
          var WW;
          null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW || WW.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(WW, iW, OW) {
          var mW;
          if (WW === hw && !1 === (null == OW || null === (mW = OW.properties) || void 0 === mW ? void 0 : mW.$survey_completed)) return "ignore";
          let EW;
          return this._getItems((WW => {
            EW = WW.find((WW => WW.id === iW))
          })), !EW || function(WW) {
            var iW;
            return mZ(WW) && !!(null === (iW = WW.conditions) || void 0 === iW || null === (iW = iW.events) || void 0 === iW ? void 0 : iW.repeatedActivation) || "always" === WW.schedule
          }(EW) ? WW === Tw ? "consume" : "ignore" : WW === Tw ? "persist" : WW === Jw || WW === hw ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      dx = class {
        constructor(WW) {
          this._instance = WW
        }
        initialize() {}
        get(WW) {
          if ("string" == typeof WW) return this._instance.get_property(WW);
          const iW = {};
          for (const OW of WW) {
            const WW = this._instance.get_property(OW);
            TO(WW) || (iW[OW] = WW)
          }
          return iW
        }
        set(WW, iW) {
          this._instance.register("string" == typeof WW ? {
            [WW]: iW
          } : WW)
        }
        remove(WW) {
          "string" != typeof WW ? WW.forEach((WW => this._instance.unregister(WW))) : this._instance.unregister(WW)
        }
      },
      ex = class {
        constructor(WW) {
          this._instance = WW
        }
        get() {
          const WW = this._instance.config;
          return {
            disableSurveys: WW.disable_surveys,
            cookielessMode: !!WW.cookieless_mode,
            advancedEnableSurveys: WW.advanced_enable_surveys,
            requestTimeoutMs: WW.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const WW = null == wO ? void 0 : wO.__PosthogExtensions__;
          if (!WW) return;
          const {
            generateSurveys: iW,
            loadExternalDependency: OW
          } = WW;
          return {
            generateSurveys: iW ? WW => iW(this._instance, WW) : void 0,
            loadExternalDependency: OW ? WW => OW(this._instance, "surveys", WW) : void 0
          }
        }
        createEventReceiver(WW) {
          return new ox(this._instance, WW)
        }
        onMatchingConditionsChanged(WW) {
          const iW = this._instance._addCaptureHook((iW => {
              "$pageview" !== iW && iW !== Tw && iW !== Jw && iW !== hw || WW()
            })),
            OW = () => WW();
          zP(Fi, "PHSurveyShown", OW);
          let mW = !1;
          const EW = this._instance.onFeatureFlags((() => {
            mW && WW()
          }));
          return mW = !0, () => {
            mW = !1, iW(), EW(), null == Fi || Fi.removeEventListener("PHSurveyShown", OW)
          }
        }
      };
    const vx = (null == Fi ? void 0 : Fi.location) ? Bc(Fi.location.hash, "__posthog") || Bc(location.hash, "state") : null,
      gx = "_postHogToolbarParams",
      Dx = fP("[Toolbar]"),
      Vx = fP("[FeatureFlags]"),
      px = fP("[FeatureFlags]", {
        debugEnabled: !0
      }),
      fx = "\" failed. Feature flags didn't load in time.",
      Cx = [502, 504],
      Xx = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      Bx = "connection_error",
      qx = WW => {
        const iW = {};
        for (let OW = 0; WW.length > OW; OW++) iW[WW[OW]] = !0;
        return iW
      },
      Rx = WW => {
        const iW = {};
        for (const [OW, mW] of qP(WW || {})) mW && (iW[OW] = mW);
        return iW
      };
    var Gx = class {
      constructor(WW) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = Vx, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const WW = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, WW && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var WW, iW;
          const OW = this._refreshIntervalMs,
            mW = null !== (WW = this._dueRefreshIntervalMs) && void 0 !== WW ? WW : OW;
          TO(OW) || TO(mW) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (iW = this._lastRefreshAt) && void 0 !== iW ? iW : 0) < mW || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? OW : Math.min(2 * mW, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var WW;
          "visible" === (null === (WW = this._document) || void 0 === WW ? void 0 : WW.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = WW
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(WW) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (WW) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = WW, this._logger = WW.logger.createLogger("[FeatureFlags]"), yx(WW.kv.initialize(), (() => {
          this._initializingClient === WW && (this._initializingClient = void 0, this._client = WW, this._finishSetup(WW))
        }))
      }
      _finishSetup(WW) {
        var iW;
        if (this._client === WW) return this._window && zP(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = WW.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (iW = this._crossTabPersistence) || void 0 === iW ? void 0 : iW.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var WW;
        const iW = this._config.refreshIntervalMs,
          OW = !this._config.remoteRequestsDisabled && this._document && !TO(iW) && iW > 0 ? iW : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = OW), OW !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), TO(OW) || (this._refreshIntervalMs = OW, this._dueRefreshIntervalMs = OW, this._scheduleNextRefresh(), (null === (WW = this._document) || void 0 === WW ? void 0 : WW.addEventListener) && (zP(this._document, KW, this._onVisibilityChange), CP(Xx, (WW => {
          zP(this._document, WW, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        TO(this._refreshIntervalMs) || (TO(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var WW, iW;
        TO(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (WW = this._document) || void 0 === WW || null === (iW = WW.removeEventListener) || void 0 === iW || iW.call(WW, "visibilitychange", this._onVisibilityChange), CP(Xx, (WW => {
          var iW, OW;
          null === (iW = this._document) || void 0 === iW || null === (OW = iW.removeEventListener) || void 0 === OW || OW.call(iW, WW, this._onUserInteraction, {
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
        var WW, iW, OW;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "uW"), this._settleReloads(this._activeReloads, "uW"), this._client && (this._clearDebouncer(), null === (WW = this._dynamicProperties) || void 0 === WW || WW.dispose(), this._dynamicProperties = void 0, null === (iW = this._crossTabPersistenceUnsubscribe) || void 0 === iW || iW.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (OW = this._window) || void 0 === OW || OW.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(WW) {
        var iW;
        return this._bootstrapState && WW in this._bootstrapState ? this._bootstrapState[WW] : null === (iW = this._client) || void 0 === iW ? void 0 : iW.kv.get(WW)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var WW;
        return !TO(null === (WW = this._client) || void 0 === WW ? void 0 : WW.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(WW) {
        this._persist((() => {
          var iW;
          return null === (iW = this._client) || void 0 === iW ? void 0 : iW.kv.set(WW)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(WW, iW, OW) {
        if (!this._crossTabPersistence || !WW.$enabled_feature_flags) return;
        const mW = this._prop("$enabled_feature_flags") || {},
          EW = WW.$enabled_feature_flags || {},
          NW = iW.flags || iW.featureFlags,
          PW = iW.flags ? Object.entries(iW.flags).filter((WW => {
            let [, iW] = WW;
            return !(null == iW ? void 0 : iW.failed)
          })).map((WW => {
            let [iW] = WW;
            return iW
          })) : [],
          wW = !!iW.errorsWhileComputingFlags && !!iW.flags,
          AW = wW ? PW : OW && !KO(NW) ? Object.keys(NW || {}) : Array.from(new Set([...Object.keys(mW), ...Object.keys(EW)])),
          bW = this._prop("$feature_flag_payloads") || {},
          jW = WW.$feature_flag_payloads || {},
          UW = wW || OW ? AW : Array.from(new Set([...Object.keys(bW), ...Object.keys(jW)])),
          sW = !wW && !OW,
          MW = !!sW || AW,
          KW = !!sW || UW,
          SW = {
            [LW]: MW,
            [lW]: MW,
            [kW]: KW
          };
        WW.$feature_flag_details && (SW[cW] = MW);
        for (const LW of [ZW, tW, xW]) TO(WW[LW]) || (SW[LW] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(SW)
      }
      _remove(WW) {
        this._persist((() => {
          var iW;
          return null === (iW = this._client) || void 0 === iW ? void 0 : iW.kv.remove(WW)
        }))
      }
      _persist(WW) {
        try {
          WW()
        } catch (WW) {
          this._logger.error("Failed to update feature flag persistence", WW)
        }
      }
      _rebuildEventProperties() {
        const WW = {};
        for (const mW of [LW, kW, ZW, sW]) {
          const iW = this._prop(mW);
          TO(iW) || (WW[mW] = iW)
        }
        this._baseEventProperties = WW;
        const iW = KE({}, WW),
          OW = this._prop(lW);
        if (OW)
          for (const [mW, EW] of Object.entries(OW)) iW[`$feature/${mW}`] = EW;
        this._eventPropertiesWithFlagValues = iW
      }
      _isCacheStale() {
        const WW = this._config.cacheTtlMs;
        if (!WW || 0 >= WW) return !1;
        const iW = this._prop(tW);
        return "number" != typeof iW || Date.now() - iW > WW
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const WW = this._config.evaluationContexts;
        return (null == WW ? void 0 : WW.length) ? WW.filter((WW => {
          const iW = WW && "string" == typeof WW && WW.trim().length > 0;
          return iW || this._logger.error("Invalid evaluation context found:", WW, "Expected non-empty string"), iW
        })) : []
      }
      _getValidFlagKeys() {
        const WW = this._config.flagKeys;
        if (!TO(WW)) return WW.filter((WW => {
          const iW = WW && "string" == typeof WW && WW.trim().length > 0;
          return iW || this._logger.error("Invalid flag key found:", WW, "Expected non-empty string"), iW
        }))
      }
      initialize() {
        var WW, iW;
        const OW = this._config,
          mW = null !== (WW = null === (iW = OW.bootstrap) || void 0 === iW ? void 0 : iW.featureFlags) && void 0 !== WW ? WW : {};
        if (Object.keys(mW).length) {
          var EW, NW;
          const WW = null !== (EW = null === (NW = OW.bootstrap) || void 0 === NW ? void 0 : NW.featureFlagPayloads) && void 0 !== EW ? EW : {},
            iW = Object.keys(mW).filter((WW => !TO(mW[WW]))).reduce(((WW, iW) => (WW[iW] = mW[iW], WW)), {}),
            PW = Object.keys(WW).filter((WW => iW[WW])).reduce(((iW, OW) => (iW[OW] = WW[OW], iW)), {});
          return this._receivedFeatureFlags({
            featureFlags: iW,
            featureFlagPayloads: PW
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(WW, iW, OW) {
        var mW, EW;
        const NW = (null == OW ? void 0 : OW.merge) && null !== (mW = this._prop("$enabled_feature_flags")) && void 0 !== mW ? mW : {},
          PW = (null == OW ? void 0 : OW.merge) && null !== (EW = this._prop("$feature_flag_payloads")) && void 0 !== EW ? EW : {},
          LW = KE(KE({}, NW), WW),
          cW = KE(KE({}, PW), iW),
          wW = {};
        for (const [tW, ZW] of Object.entries(LW)) wW[tW] = {
          key: tW,
          enabled: jN(ZW),
          variant: UN(ZW),
          reason: void 0,
          metadata: TO(null == cW ? void 0 : cW[tW]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: cW[tW]
          }
        };
        this._receivedFeatureFlags({
          flags: wW
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const WW = this._prop(cW),
          iW = this._prop(sW),
          OW = this._prop(MW);
        if (!OW && !iW) return WW || {};
        const mW = BP({}, WW || {}),
          EW = [...new Set([...Object.keys(OW || {}), ...Object.keys(iW || {})])];
        for (const LW of EW) {
          var NW, PW;
          const WW = mW[LW],
            EW = null == iW ? void 0 : iW[LW],
            cW = TO(EW) ? null !== (NW = null == WW ? void 0 : WW.enabled) && void 0 !== NW && NW : !!EW,
            wW = TO(EW) ? null == WW ? void 0 : WW.variant : "string" == typeof EW ? EW : void 0,
            tW = null == OW ? void 0 : OW[LW],
            ZW = KE(KE({}, WW), {}, {
              enabled: cW,
              variant: cW ? null != wW ? wW : null == WW ? void 0 : WW.variant : void 0
            });
          cW !== (null == WW ? void 0 : WW.enabled) && (ZW.original_enabled = null == WW ? void 0 : WW.enabled), wW !== (null == WW ? void 0 : WW.variant) && (ZW.original_variant = null == WW ? void 0 : WW.variant), tW && (ZW.metadata = KE(KE({}, null == WW ? void 0 : WW.metadata), {}, {
            payload: tW,
            original_payload: null == WW || null === (PW = WW.metadata) || void 0 === PW ? void 0 : PW.payload
          })), mW[LW] = ZW
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: WW,
          overriddenPayloads: OW,
          finalDetails: mW
        }), this._override_warning = !0), mW
      }
      getAllFeatureFlags() {
        const WW = this.getFlagVariants(),
          iW = this.getFlagPayloads();
        return Object.keys(WW).map((OW => {
          const mW = WW[OW];
          return {
            key: OW,
            enabled: jN(mW),
            variant: UN(mW),
            payload: bN(iW[OW])
          }
        }))
      }
      getFlagVariants() {
        const WW = this._prop(lW),
          iW = this._prop(sW);
        if (!iW) return WW || {};
        const OW = BP({}, WW || {}),
          mW = Object.keys(iW);
        for (let EW = 0; mW.length > EW; EW++) OW[mW[EW]] = iW[mW[EW]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: WW,
          overriddenFlags: iW,
          finalFlags: OW
        }), this._override_warning = !0), OW
      }
      getFlagPayloads() {
        const WW = this._prop(kW),
          iW = this._prop(MW);
        if (!iW) return WW || {};
        const OW = BP({}, WW || {}),
          mW = Object.keys(iW);
        for (let EW = 0; mW.length > EW; EW++) OW[mW[EW]] = iW[mW[EW]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: WW,
          overriddenPayloads: iW,
          finalPayloads: OW
        }), this._override_warning = !0), OW
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((WW => {
          try {
            WW()
          } catch (WW) {
            this._logger.error("Error while running feature flags reloading callback", WW)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((WW => {
          this._pendingReloads.add(WW), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(WW, iW) {
        WW.forEach((WW => WW({
          status: iW
        }))), WW.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(WW) {
        return this._reloadingHandlers.push(WW), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((iW => iW !== WW))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(WW) {
        this.$anon_distinct_id = WW
      }
      setReloadingPaused(WW) {
        this._reloadingDisabled = WW
      }
      resetFlagCallReported() {
        this._remove(jW)
      }
      _callFlagsEndpoint(WW) {
        var iW;
        this._clearDebouncer();
        const OW = this._client;
        if (!OW || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const mW = {
          token: OW.projectToken,
          distinct_id: OW.distinctId,
          groups: OW.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: KE(KE(KE({}, OW.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: OW.library.name,
            $lib_version: OW.library.version
          }),
          group_properties: this._prop(AW),
          timezone: vc()
        };
        TO(OW.deviceId) || (mW.$device_id = OW.deviceId), ((null == WW ? void 0 : WW.disableFlags) || this._config.featureFlagsDisabled) && (mW.disable_flags = !0);
        const EW = this._getValidEvaluationEnvironments();
        EW.length && (mW.evaluation_contexts = EW);
        const NW = this._getValidFlagKeys();
        TO(NW) || (mW.flag_keys = NW);
        const PW = this._config.onlyEvaluateSurveyFeatureFlags,
          LW = "/flags/?v=2" + (PW ? "&only_evaluate_survey_feature_flags=true" : ""),
          cW = this._requestGeneration,
          tW = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = tW, this._requestInFlight = !0;
        const ZW = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          xW = WW => {
            var iW, OW;
            const EW = null !== (iW = WW.json) && void 0 !== iW ? iW : {},
              NW = 200 !== WW.statusCode;
            if (this._requestInFlight = !1, cW !== this._requestGeneration) return void ZW();
            if (this._trackStatusZeroReachability(WW.statusCode), NW || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), mW.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(tW, "skipped");
            this._flagsLoadedFromRemote = !NW;
            const LW = [];
            WW.error ? LW.push(WW.error instanceof Error && "AbortError" === WW.error.name ? "timeout" : WW.error instanceof Error ? Bx : "unknown_error") : 200 !== WW.statusCode && LW.push(`api_error_${WW.statusCode}`), EW.errorsWhileComputingFlags && LW.push("errors_while_computing_flags");
            const xW = !!(null === (OW = EW.quotaLimited) || void 0 === OW ? void 0 : OW.includes("feature_flags"));
            xW && LW.push("quota_limited"), this._set({
              [wW]: LW
            }), xW ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : mW.disable_flags || this._receivedFeatureFlags(EW, NW, {
              partialResponse: PW
            }), this._settleReloads(tW, mW.disable_flags ? "skipped" : LW.length || !EW.flags && !EW.featureFlags ? "error" : "loaded"), ZW()
          },
          lW = WW => {
            this._requestInFlight = !1, cW === this._requestGeneration ? (this._set({
              [wW]: [Bx]
            }), this._logger.error("Feature flag request failed", WW), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(tW, "error"), ZW()) : ZW()
          };
        let bW = null !== (iW = this._config.requestMaxRetries) && void 0 !== iW ? iW : 1;
        const jW = () => bW > 0 && cW === this._requestGeneration,
          UW = () => {
            if (cW !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(tW, "skipped"), void ZW();
            try {
              OW.sendRequest(LW, {
                target: "flags",
                method: "POST",
                body: mW,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((WW => {
                if ((WW => Cx.includes(WW.statusCode) || (WW => 0 === WW.statusCode && WW.error instanceof Error && "AbortError" === WW.error.name)(WW))(WW) && jW()) return bW--, void setTimeout(UW, 500);
                xW(WW)
              })).catch(lW)
            } catch (WW) {
              lW(WW)
            }
          };
        UW()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return Dc(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(WW) {
        this._consecutiveStatusZeroFailures = Vc(WW, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var OW;
        if (iW.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + WW + fx);
        if (this._checkAndTriggerStaleRefresh()) return;
        const mW = this.getFeatureFlagResult(WW, iW);
        return null !== (OW = null == mW ? void 0 : mW.variant) && void 0 !== OW ? OW : null == mW ? void 0 : mW.enabled
      }
      getFeatureFlagDetails(WW) {
        return this.getFlagsWithDetails()[WW]
      }
      getFeatureFlagPayload(WW) {
        const iW = this.getFeatureFlagResult(WW, {
          send_event: !1
        });
        return null == iW ? void 0 : iW.payload
      }
      getFeatureFlagResult(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (iW.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + WW + fx);
        if (this._checkAndTriggerStaleRefresh()) return;
        const OW = this.getFlagVariants(),
          mW = WW in OW,
          EW = OW[WW],
          NW = this.getFlagPayloads()[WW],
          PW = String(EW),
          LW = this._prop("$feature_flag_request_id") || void 0,
          cW = this._prop("$feature_flag_evaluated_at") || void 0;
        let wW, tW = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var ZW;
          const WW = null === (ZW = this._client) || void 0 === ZW || null === (ZW = ZW.session) || void 0 === ZW ? void 0 : ZW.sessionId,
            iW = this._prop(UW);
          WW && WW !== iW && (tW = {}, wW = WW)
        }
        if (!iW.send_event && "send_event" in iW) wW && this._set({
          [jW]: tW,
          [UW]: wW
        });
        else if (WW in tW && tW[WW].includes(PW)) wW && this._set({
          [jW]: tW,
          [UW]: wW
        });
        else {
          var xW, lW, AW, bW, kW, sW, MW, KW, SW, YW, yW, TW, JW;
          KO(tW[WW]) ? tW[WW].push(PW) : tW[WW] = [PW], this._set(KE({
            [jW]: tW
          }, wW ? {
            [UW]: wW
          } : {}));
          const iW = this.getFeatureFlagDetails(WW),
            OW = [...null !== (xW = this._prop("$feature_flag_errors")) && void 0 !== xW ? xW : []];
          TO(EW) && OW.push("flag_missing");
          const mW = {
            $feature_flag: WW,
            $feature_flag_response: EW,
            $feature_flag_payload: null != NW ? NW : null,
            $feature_flag_request_id: LW,
            $feature_flag_evaluated_at: cW,
            $feature_flag_bootstrapped_response: null !== (lW = null === (AW = this._config.bootstrap) || void 0 === AW || null === (AW = AW.featureFlags) || void 0 === AW ? void 0 : AW[WW]) && void 0 !== lW ? lW : null,
            $feature_flag_bootstrapped_payload: null !== (bW = null === (kW = this._config.bootstrap) || void 0 === kW || null === (kW = kW.featureFlagPayloads) || void 0 === kW ? void 0 : kW[WW]) && void 0 !== bW ? bW : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          TO(null == iW || null === (sW = iW.metadata) || void 0 === sW ? void 0 : sW.has_experiment) || (mW.$feature_flag_has_experiment = iW.metadata.has_experiment), TO(null == iW || null === (MW = iW.metadata) || void 0 === MW ? void 0 : MW.version) || (mW.$feature_flag_version = iW.metadata.version);
          const ZW = null !== (KW = null == iW || null === (SW = iW.reason) || void 0 === SW ? void 0 : SW.description) && void 0 !== KW ? KW : null == iW || null === (YW = iW.reason) || void 0 === YW ? void 0 : YW.code;
          ZW && (mW.$feature_flag_reason = ZW), (null == iW || null === (yW = iW.metadata) || void 0 === yW ? void 0 : yW.id) && (mW.$feature_flag_id = iW.metadata.id), TO(null == iW ? void 0 : iW.original_variant) && TO(null == iW ? void 0 : iW.original_enabled) || (mW.$feature_flag_original_response = TO(iW.original_variant) ? iW.original_enabled : iW.original_variant), (null == iW || null === (TW = iW.metadata) || void 0 === TW ? void 0 : TW.original_payload) && (mW.$feature_flag_original_payload = null == iW || null === (JW = iW.metadata) || void 0 === JW ? void 0 : JW.original_payload), OW.length && (mW.$feature_flag_error = OW.join(",")), this._captureFeatureFlagCalled(mW)
        }
        return mW ? {
          key: WW,
          enabled: !!EW,
          variant: "string" == typeof EW ? EW : void 0,
          payload: bN(NW)
        } : void 0
      }
      _captureFeatureFlagCalled(WW) {
        try {
          var iW;
          null === (iW = this._client) || void 0 === iW || iW.capture("$feature_flag_called", WW)
        } catch (WW) {
          this._logger.error("Failed to capture feature flag call", WW)
        }
      }
      getRemoteConfigPayload(WW, iW) {
        this._getRemoteConfigPayload(WW, iW)
      }
      _getRemoteConfigPayload(WW, iW) {
        var OW = this;
        return RO((function*() {
          const mW = OW._client;
          if (!mW) return;
          const EW = {
              distinct_id: mW.distinctId,
              token: mW.projectToken,
              person_properties: {
                $lib: mW.library.name,
                $lib_version: mW.library.version
              }
            },
            NW = OW._getValidEvaluationEnvironments();
          NW.length && (EW.evaluation_contexts = NW);
          const PW = OW._getValidFlagKeys();
          let LW;
          TO(PW) || (EW.flag_keys = PW);
          try {
            var cW;
            const iW = null === (cW = (yield mW.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: EW,
              compression: OW._config.compression,
              sentAt: "body",
              timeoutMs: OW._config.requestTimeoutMs
            })).json) || void 0 === cW ? void 0 : cW.featureFlagPayloads;
            LW = (null == iW ? void 0 : iW[WW]) || void 0
          } catch (WW) {
            return void OW._logger.error("Remote config feature flag request failed", WW)
          }
          try {
            iW(LW)
          } catch (WW) {
            OW._logger.error("Remote config feature flag callback failed", WW)
          }
        }))()
      }
      isFeatureEnabled(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (iW.fresh && !this._flagsLoadedFromRemote) return iW.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + WW + fx), iW.defaultValue;
        const OW = this.getFeatureFlag(WW, iW);
        return TO(OW) ? iW.defaultValue : !!OW
      }
      addFeatureFlagsHandler(WW) {
        this.featureFlagEventHandlers.push(WW)
      }
      removeFeatureFlagsHandler(WW) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((iW => iW !== WW))
      }
      receivedFeatureFlags(WW, iW, OW) {
        this._receivedFeatureFlags(WW, iW, OW)
      }
      _receivedFeatureFlags(WW, iW, OW) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const mW = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            EW = arguments.length > 4 ? arguments[4] : void 0,
            NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Vx;
          const PW = ((WW, iW) => {
              const OW = WW.flags;
              if (OW) {
                const iW = Object.fromEntries(Object.keys(OW).map((WW => {
                    var iW;
                    return [WW, null !== (iW = OW[WW].variant) && void 0 !== iW ? iW : OW[WW].enabled]
                  }))),
                  mW = Object.fromEntries(Object.keys(OW).filter((WW => OW[WW].enabled)).filter((WW => {
                    var iW;
                    return !TO(null === (iW = OW[WW].metadata) || void 0 === iW ? void 0 : iW.payload)
                  })).map((WW => {
                    var iW;
                    return [WW, null === (iW = OW[WW].metadata) || void 0 === iW ? void 0 : iW.payload]
                  })));
                return KE(KE({}, WW), {}, {
                  featureFlags: iW,
                  featureFlagPayloads: mW
                })
              }
              return WW.featureFlags && iW.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), WW
            })(WW, NW),
            wW = PW.flags,
            AW = PW.featureFlags,
            bW = PW.featureFlagPayloads;
          if (!AW) return;
          const jW = WW.requestId,
            UW = WW.evaluatedAt;
          if (KO(AW)) {
            NW.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const WW = {};
            if (AW)
              for (let iW = 0; AW.length > iW; iW++) WW[AW[iW]] = !0;
            return {
              [LW]: AW,
              [lW]: WW,
              [xW]: !1
            }
          }
          let sW = AW,
            MW = bW,
            KW = wW;
          if (null == EW ? void 0 : EW.partialResponse) {
            const WW = Object.keys(sW),
              EW = MW || {};
            sW = KE(KE({}, iW), sW), MW = KE(KE({}, OW), EW), WW.forEach((WW => {
              WW in EW || null == MW || delete MW[WW]
            })), KW = KE(KE({}, mW), KW)
          } else if (WW.errorsWhileComputingFlags)
            if (wW) {
              const WW = new Set(Object.keys(wW).filter((WW => {
                var iW;
                return !(null === (iW = wW[WW]) || void 0 === iW ? void 0 : iW.failed)
              })));
              sW = KE(KE({}, iW), Object.fromEntries(Object.entries(sW).filter((iW => {
                let [OW] = iW;
                return WW.has(OW)
              }))));
              const EW = Object.fromEntries(Object.entries(MW || {}).filter((iW => {
                let [OW] = iW;
                return WW.has(OW)
              })));
              MW = KE(KE({}, OW), EW), WW.forEach((WW => {
                WW in EW || null == MW || delete MW[WW]
              })), KW = KE(KE({}, mW), Object.fromEntries(Object.entries(KW || {}).filter((iW => {
                let [OW] = iW;
                return WW.has(OW)
              }))))
            } else sW = KE(KE({}, iW), sW), MW = KE(KE({}, OW), MW), KW = KE(KE({}, mW), KW);
          return KE(KE({
            [LW]: Object.keys(Rx(sW)),
            [lW]: sW || {},
            [kW]: MW || {},
            [cW]: KW || {},
            [xW]: !0 === WW.minimalFlagCalledEvents
          }, jW ? {
            [ZW]: jW
          } : {}), UW ? {
            [tW]: UW
          } : {})
        }(WW, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), OW, this._logger);
        if (mW)
          if (!1 === (null == OW ? void 0 : OW.persist)) {
            const WW = !TO(this._client.kv.get(lW));
            this._bootstrapState = mW, WW || this._set(mW)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(mW, WW, !!(null == OW ? void 0 : OW.partialResponse)), this._set(mW);
        else iW && this._fallBackToPersistedFlags();
        iW || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(iW)
      }
      override(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: WW,
          suppressWarning: iW
        })
      }
      overrideFeatureFlags(WW) {
        this._overrideFeatureFlags(WW)
      }
      _overrideFeatureFlags(WW) {
        if (this._client) {
          if (!1 === WW) return this._remove([sW, MW]), this._fireFeatureFlagsCallbacks(), void px.info("All overrides cleared");
          if (KO(WW)) return this._set({
            [sW]: qx(WW)
          }), this._fireFeatureFlagsCallbacks(), void px.info("Flag overrides set", {
            flags: WW
          });
          if (WW && "object" == typeof WW && ("flags" in WW || "payloads" in WW)) {
            var iW;
            const OW = WW;
            this._override_warning = Boolean(null !== (iW = OW.suppressWarning) && void 0 !== iW && iW);
            const mW = {},
              EW = OW.flags,
              NW = OW.payloads;
            return EW && (mW[sW] = KO(EW) ? qx(EW) : EW), NW && (mW[MW] = NW), Object.keys(mW).length && this._set(mW), !1 === EW && !1 === NW ? this._remove([sW, MW]) : !1 === EW ? this._remove(sW) : !1 === NW && this._remove(MW), this._fireFeatureFlagsCallbacks(), !1 === EW ? px.info("Flag overrides cleared") : EW && px.info("Flag overrides set", {
              flags: EW
            }), void(!1 === NW ? px.info("Payload overrides cleared") : NW && px.info("Payload overrides set", {
              payloads: NW
            }))
          }
          if (WW && "object" == typeof WW) return this._set({
            [sW]: WW
          }), this._fireFeatureFlagsCallbacks(), void px.info("Flag overrides set", {
            flags: WW
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: WW
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(WW) {
        if (this.addFeatureFlagsHandler(WW), this._hasLoadedFlags) {
          const {
            flags: iW,
            flagVariants: OW
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            WW(iW, OW)
          } catch (WW) {
            this._logger.error("Error while running feature flags callback", WW)
          }
        }
        return () => this.removeFeatureFlagsHandler(WW)
      }
      updateEarlyAccessFeatureEnrollment(WW, iW, OW) {
        var mW;
        const EW = (this._prop("$early_access_features") || []).find((iW => iW.flagKey === WW)),
          NW = {
            [`$feature_enrollment/${WW}`]: iW
          },
          PW = {
            $feature_flag: WW,
            $feature_enrollment: iW,
            $set: NW
          };
        EW && (PW.$early_access_feature_name = EW.name), OW && (PW.$feature_enrollment_stage = OW);
        const cW = KE(KE({}, this.getFlagVariants()), {}, {
          [WW]: iW
        });
        null === (mW = this._crossTabPersistence) || void 0 === mW || mW.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [WW],
          $enabled_feature_flags: [WW],
          $stored_person_properties: Object.keys(NW)
        }), this._set({
          [LW]: Object.keys(Rx(cW)),
          [lW]: cW,
          [bW]: KE(KE({}, this._prop("$stored_person_properties") || {}), NW)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var wW;
          null === (wW = this._client) || void 0 === wW || wW.capture("$feature_enrollment_update", PW)
        } catch (WW) {
          this._logger.error("Failed to capture early access feature enrollment", WW)
        }
      }
      getEarlyAccessFeatures(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = this._prop(PW);
        !mW || iW ? this._getEarlyAccessFeatures(WW, OW) : WW(mW)
      }
      _getEarlyAccessFeatures(WW, iW) {
        var OW = this;
        return RO((function*() {
          const mW = OW._client;
          if (!mW) return;
          const EW = iW ? `&${iW.map((WW=>`stage=${WW}`)).join("&")}` : "";
          let NW;
          try {
            const WW = yield mW.sendRequest(`/api/early_access_features/?token=${mW.projectToken}${EW}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!WW.json) return;
            NW = WW.json.earlyAccessFeatures, OW._set({
              [PW]: NW
            })
          } catch (WW) {
            return void OW._logger.error("Early access feature request failed", WW)
          }
          try {
            WW(NW)
          } catch (WW) {
            OW._logger.error("Early access feature callback failed", WW)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const WW = this.getFlags(),
          iW = this.getFlagVariants();
        return {
          flags: WW.filter((WW => iW[WW])),
          flagVariants: Object.keys(iW).filter((WW => iW[WW])).reduce(((WW, OW) => (WW[OW] = iW[OW], WW)), {})
        }
      }
      _fireFeatureFlagsCallbacks(WW) {
        this._rebuildEventProperties();
        const {
          flags: iW,
          flagVariants: OW
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((mW => {
          try {
            mW(iW, OW, {
              errorsLoading: WW
            })
          } catch (WW) {
            this._logger.error("Error while running feature flags callback", WW)
          }
        }))
      }
      setPersonPropertiesForFlags(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(WW, iW)
      }
      _setPersonPropertiesForFlags(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this._prop("$stored_person_properties") || {},
          mW = (null == WW ? void 0 : WW.$set) || ((null == WW ? void 0 : WW.$set_once) ? {} : WW),
          EW = null == WW ? void 0 : WW.$set_once,
          NW = {};
        if (EW)
          for (const PW in EW)({}).hasOwnProperty.call(EW, PW) && (PW in OW || (NW[PW] = EW[PW]));
        this._set({
          [bW]: KE(KE(KE({}, OW), NW), mW)
        }), iW && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = KE({}, this._prop("$stored_person_properties") || {});
        WW.forEach((WW => {
          delete OW[WW]
        })), this._set({
          [bW]: OW
        }), iW && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(bW), WW && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this._prop("$stored_group_properties") || {},
          mW = KE({}, OW);
        for (const EW of Object.keys(WW)) mW[EW] = KE(KE({}, OW[EW]), WW[EW]);
        this._set({
          [AW]: mW
        }), iW && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(WW) {
        if (WW) {
          const iW = this._prop("$stored_group_properties") || {};
          this._set({
            [AW]: KE(KE({}, iW), {}, {
              [WW]: {}
            })
          })
        } else this._remove(AW)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "uW"), this._settleReloads(this._activeReloads, "uW"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const Ix = fP("[FeatureFlags]");
    var ax = class {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(WW, iW)
      }
      update(WW, iW) {
        this._snapshot = ((WW, iW) => {
          var OW, mW, EW, NW, PW, LW, cW, wW;
          return {
            bootstrap: {
              featureFlags: null !== (OW = null === (mW = WW.bootstrap) || void 0 === mW ? void 0 : mW.featureFlags) && void 0 !== OW ? OW : void 0,
              featureFlagPayloads: null !== (EW = null === (NW = WW.bootstrap) || void 0 === NW ? void 0 : NW.featureFlagPayloads) && void 0 !== EW ? EW : void 0
            },
            remoteRequestsDisabled: iW,
            featureFlagsDisabled: !!WW.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!WW.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!WW.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: WW.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (PW = WW.remote_config_refresh_interval_ms) && void 0 !== PW ? PW : 3e5,
            idleRefreshBackoff: TO(WW.remote_config_refresh_interval_ms),
            requestTimeoutMs: WW.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (LW = WW.feature_flag_request_max_retries) && void 0 !== LW ? LW : 1),
            compression: WW.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (cW = null !== (wW = WW.evaluation_contexts) && void 0 !== wW ? wW : WW.evaluation_environments) && void 0 !== cW ? cW : [],
            flagKeys: KO(WW.flag_keys) ? WW.flag_keys : void 0
          }
        })(WW, iW), !WW.evaluation_environments || WW.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Ix.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), TO(WW.flag_keys) || KO(WW.flag_keys) || Ix.error("Invalid flag_keys found:", WW.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const rx = WW => VO(WW) && ("RangeError" === WW.name && 0 === WW.message.indexOf("Maximum call stack size exceeded") || "InternalError" === WW.name && "too much recursion" === WW.message),
      zx = fP("[Error tracking]"),
      Fx = "webkit-masked-url:",
      Qx = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      Wl = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", Fx],
      il = ["__firefox__", "__gCrWeb"],
      Ol = "Refusing to render web experiment since the viewer is a likely bot",
      ml = {
        icontains: (WW, iW) => iW.toLowerCase().indexOf(WW.toLowerCase()) > -1,
        not_icontains: (WW, iW) => -1 === iW.toLowerCase().indexOf(WW.toLowerCase()),
        regex: (WW, iW) => EZ(iW, WW),
        not_regex: (WW, iW) => !EZ(iW, WW),
        exact: (WW, iW) => iW === WW,
        is_not: (WW, iW) => iW !== WW
      },
      El = fP("[Conversations]"),
      Nl = "Conversations not available yet.";

    function Pl(WW, iW) {
      var OW, mW, EW, NW, PW, LW, cW;
      const wW = null !== (OW = null == WW ? void 0 : WW.flushIntervalMs) && void 0 !== OW ? OW : 3e3,
        tW = null !== (mW = null == WW ? void 0 : WW.maxBufferSize) && void 0 !== mW ? mW : 100,
        ZW = (null == iW ? void 0 : iW.consoleCapture) ? void 0 : null !== (EW = null == WW ? void 0 : WW.maxLogsPerInterval) && void 0 !== EW ? EW : 1e3,
        xW = TO(ZW) ? Math.max(tW, 2048) : Math.max(tW, ZW),
        lW = KE(KE({}, function() {
          let WW = "",
            iW = "";
          try {
            var OW;
            const mW = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              EW = null == mW || null === (OW = mW.navigator) || void 0 === OW ? void 0 : OW.userAgent;
            EW && ([WW, iW] = Qm(EW))
          } catch (WW) {}
          return function(WW, iW) {
            const OW = function(WW) {
              if (WW) return {}.hasOwnProperty.call(SP, WW) ? SP[WW] : WW
            }(WW);
            return KE(KE({}, OW ? {
              "os.name": OW
            } : {}), iW ? {
              "os.version": iW
            } : {})
          }(WW, iW)
        }()), null == WW ? void 0 : WW.resourceAttributes);
      return {
        serviceName: null !== (NW = null !== (PW = null == lW ? void 0 : lW["service.name"]) && void 0 !== PW ? PW : null == WW ? void 0 : WW.serviceName) && void 0 !== NW ? NW : null == iW ? void 0 : iW.serviceNameDefault,
        serviceVersion: null !== (LW = null == lW ? void 0 : lW["service.version"]) && void 0 !== LW ? LW : null == WW ? void 0 : WW.serviceVersion,
        environment: null !== (cW = null == lW ? void 0 : lW["deployment.environment"]) && void 0 !== cW ? cW : null == WW ? void 0 : WW.environment,
        resourceAttributes: lW,
        beforeSend: null == WW ? void 0 : WW.beforeSend,
        flushIntervalMs: wW,
        maxBufferSize: tW,
        maxQueueSize: xW,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: wW,
        maxLogsPerInterval: ZW,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const Ll = ["debug", "log", "warn", "error", "info"],
      cl = WW => {
        for (; null == WW ? void 0 : WW.__rrweb_original__;) WW = WW.__rrweb_original__;
        return WW
      },
      wl = "console",
      tl = "__posthogHandledLogsRequestError",
      Zl = (WW, iW) => {
        const OW = WW instanceof Error ? WW : new Error(iW);
        return OW[tl] = !0, OW
      },
      xl = WW => !!WW && "object" == typeof WW && !0 === WW[tl];
    var ll = class {
      get _coreLogger() {
        var WW = this;
        return KE(KE({}, this._logger), {}, {
          error: function() {
            for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
            OW.some(xl) || WW._logger.error(...OW)
          }
        })
      }
      constructor(WW, iW) {
        var OW;
        this._configSource = WW, this._getSdkContext = iW, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = fP("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var WW, iW;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (WW = this._core) || void 0 === WW || WW.onReconnect(), null === (iW = this._consoleCore) || void 0 === iW || iW.onReconnect())
        }, this._isLogsEnabled = !!(null === (OW = WW.get()) || void 0 === OW ? void 0 : OW.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (mW) {
            this._window = void 0
          }
          this._window && (zP(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(WW, iW, OW, mW) {
        this._listenForReconnect();
        const EW = Pl(this._configSource.get(), OW);
        return [new dP(this._createHost(WW, iW), EW, this._coreLogger, (() => this._getSdkContext()), (WW => WW()), void 0, mW), EW]
      }
      _getCore() {
        const WW = this._configSource.get();
        var iW;
        return this._core && this._resolvedFrom === WW || (null === (iW = this._core) || void 0 === iW || iW.reset(), this._resolvedFrom = WW, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (WW => {
          this._queue = WW
        }))), this._core
      }
      _getConsoleCore() {
        const WW = this._configSource.get();
        var iW;
        return this._consoleCore && this._consoleResolvedFrom === WW || (null === (iW = this._consoleCore) || void 0 === iW || iW.reset(), this._consoleResolvedFrom = WW, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (WW => {
          this._consoleQueue = WW
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, wl)), this._consoleCore
      }
      setup(WW) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = WW, this._logger = WW.logger.createLogger("[logs]"), yx(WW.kv.initialize(), (() => {
          this._disposed || this._finishSetup(WW)
        }))
      }
      _finishSetup(WW) {
        var iW;
        this._listenForReconnect(), (null === (iW = this._configSource.get()) || void 0 === iW ? void 0 : iW.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && WW.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let OW = !1;
        const mW = WW.onRemoteConfig((WW => {
          var iW;
          OW = WW.ok && !0 === (null === (iW = WW.config.logs) || void 0 === iW ? void 0 : iW.captureConsoleLogs), this.onRemoteConfig(WW)
        }));
        this._disposed ? mW.dispose() : (this._remoteConfigSubscription = mW, OW || this.loadIfEnabled())
      }
      dispose() {
        var WW, iW, OW, mW, EW, NW, PW;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (WW = this._remoteConfigSubscription) || void 0 === WW || WW.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (iW = this._window) || void 0 === iW || iW.removeEventListener("online", this._onReconnect), null === (OW = this._consoleLogsDispose) || void 0 === OW || OW.call(this), this._consoleLogsDispose = void 0, null === (mW = this._core) || void 0 === mW || mW.clearQueue(), null === (EW = this._consoleCore) || void 0 === EW || EW.clearQueue(), null === (NW = this._core) || void 0 === NW || NW.reset(), null === (PW = this._consoleCore) || void 0 === PW || PW.reset())
      }
      onRemoteConfig(WW) {
        var iW, OW;
        if (this._disposed) return;
        const mW = WW.ok ? null === (iW = WW.config.logs) || void 0 === iW ? void 0 : iW.captureConsoleLogs : void 0;
        nO(mW) ? this._stopRecorderStartedByPersistedHint() : (null === (OW = this._client) || void 0 === OW || OW.kv.set(this._configSource.captureHintKey, !!mW), mW ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var WW, iW, OW, mW;
        this._stopConsoleRecorder(), null === (WW = this._core) || void 0 === WW || WW.clearQueue(), this._queue = [], null === (iW = this._core) || void 0 === iW || iW.reset(), null === (OW = this._consoleCore) || void 0 === OW || OW.clearQueue(), this._consoleQueue = [], null === (mW = this._consoleCore) || void 0 === mW || mW.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(WW) {
        !this._disposed && this._client && this._getCore().captureLog(WW)
      }
      captureConsoleLog(WW) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(WW)
      }
      captureBufferedConsoleLog(WW, iW, OW) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(WW, {
          context: iW,
          occurredAtMs: OW
        })
      }
      _onOptOut() {
        var WW;
        this._stopConsoleRecorder(), null === (WW = this._consoleCore) || void 0 === WW || WW.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var WW, iW = this;
        if (this._isRecordingConsole || !(null === (WW = this._window) || void 0 === WW ? void 0 : WW.console)) return;
        const OW = Pl(this._configSource.get()).maxBufferSize;
        let mW = !0;
        this._consoleRecorderUnpatchers.push((() => {
          mW = !1
        }));
        for (const EW of Ll) {
          let NW;
          try {
            NW = cl(this._window.console[EW])
          } catch (WW) {
            continue
          }
          NW && this._consoleRecorderUnpatchers.push(Px(this._window.console, EW, (WW => {
            const PW = function() {
              for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
              try {
                mW && iW._recordConsoleEntry(EW, PW, OW)
              } catch (EW) {}
              return WW.apply(iW._window.console, PW)
            };
            return PW.__rrweb_original__ = NW, PW
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(WW, iW, OW) {
        var mW;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== iW.length)
          if (null === (mW = this._client) || void 0 === mW ? void 0 : mW.canCapture) {
            if (OW > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: WW,
                  args: iW,
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
          for (const WW of this._consoleRecorderUnpatchers) WW();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const WW = this._consoleBuffer;
        return this._stopConsoleRecorder(), WW
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (WW, iW) => this.captureLog({
            body: WW,
            level: "trace",
            attributes: iW
          }),
          debug: (WW, iW) => this.captureLog({
            body: WW,
            level: "debug",
            attributes: iW
          }),
          info: (WW, iW) => this.captureLog({
            body: WW,
            level: "info",
            attributes: iW
          }),
          warn: (WW, iW) => this.captureLog({
            body: WW,
            level: "warn",
            attributes: iW
          }),
          error: (WW, iW) => this.captureLog({
            body: WW,
            level: "error",
            attributes: iW
          }),
          fatal: (WW, iW) => this.captureLog({
            body: WW,
            level: "fatal",
            attributes: iW
          })
        }), this._capture_logger
      }
      flushLogs(WW) {
        this._client && (WW ? this._flushViaTransport(WW) : (this._core && this._core.flush().catch((WW => this._logFlushError(WW))), this._consoleCore && this._consoleCore.flush().catch((WW => this._logFlushError(WW)))))
      }
      flush() {
        var WW = this;
        return RO((function*() {
          var iW, OW;
          const mW = null === (iW = WW._core) || void 0 === iW ? void 0 : iW.flush().catch((iW => WW._logFlushError(iW))),
            EW = null === (OW = WW._consoleCore) || void 0 === OW ? void 0 : OW.flush().catch((iW => WW._logFlushError(iW)));
          yield mW, yield EW
        }))()
      }
      _logFlushError(WW) {
        xl(WW) || this._logger.error("PostHog logs flush failed:", WW)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const WW = this._getConsoleLoader();
        if (WW) {
          this._isLoading = !0;
          try {
            WW(((WW, iW) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (WW || !iW) this._logger.error("Could not load logs script", WW), this._stopConsoleRecorder();
                else {
                  const WW = this._takeConsoleBuffer();
                  this._consoleLogsDispose = iW.initialize(this._client), this._isLoaded = !0, WW.length > 0 && iW.replay(this._client, WW)
                }
            }))
          } catch (WW) {
            throw this._isLoading = !1, WW
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(WW, iW) {
        const OW = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !OW.canCapture
          },
          getPersistedProperty: iW => iW === tO.LogsQueue ? WW() : void 0,
          setPersistedProperty(WW, OW) {
            WW === tO.LogsQueue && iW(null != OW ? OW : [])
          },
          _sendLogsBatch: WW => this._sendLogsBatch(WW),
          getLibraryId: () => OW.library.name,
          getLibraryVersion: () => OW.library.version
        }
      }
      _sendLogsBatch(WW) {
        return new Promise((iW => {
          if (Dc(this._consecutiveStatusZeroFailures, 3)) return void iW({
            kind: "fatal",
            error: Zl(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let OW = !1;
          const mW = WW => {
              OW || (OW = !0, clearTimeout(EW), iW(WW))
            },
            EW = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), mW({
                kind: "retry-later",
                error: Zl(void 0, "logs request timed out")
              })
            }), 9e4),
            NW = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: WW,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((WW => {
            var iW;
            const OW = WW.statusCode;
            this._trackEndpointReachability(OW, NW), OW >= 200 && 300 > OW ? mW({
              kind: "ok"
            }) : 413 === OW ? mW({
              kind: "too-large"
            }) : 0 !== OW && 408 !== OW && 429 !== OW && 500 > OW ? mW({
              kind: "fatal",
              error: new Error(`logs request failed with status ${OW}`)
            }) : 0 === OW ? (WW.error || this._logger.warn("Logs request failed before receiving an HTTP response"), mW({
              kind: "retry-later",
              error: Zl(WW.error, "logs request failed before receiving an HTTP response")
            })) : mW({
              kind: "retry-later",
              error: null !== (iW = WW.error) && void 0 !== iW ? iW : new Error(`logs request failed with status ${OW}`)
            })
          }), (WW => {
            mW({
              kind: "retry-later",
              error: WW
            })
          }))
        }))
      }
      _trackEndpointReachability(WW, iW) {
        (0 !== WW || iW) && (this._consecutiveStatusZeroFailures = Vc(WW, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(WW) {
        this._queue.length > 0 && this._drainQueueViaTransport(WW, this._queue, this._resolvedConfig, this._client.library.name, (WW => {
          this._queue = WW
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(WW, this._consoleQueue, this._consoleResolvedConfig, wl, (WW => {
          this._consoleQueue = WW
        }))
      }
      _drainQueueViaTransport(WW, iW, OW, mW, EW) {
        if (0 === iW.length) return;
        const NW = iW.map((WW => WW.record));
        EW([]);
        const PW = HP(NW, hP(OW, this._client.library.name, this._client.library.version), mW, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: PW,
          compression: "best-available",
          transport: WW,
          timeoutMs: 6e4
        }).catch((WW => this._logFlushError(WW)))
      }
    };
    const Al = fP("[NetworkMetrics]"),
      bl = () => {
        var WW;
        return (null == Fi || null === (WW = Fi.performance) || void 0 === WW ? void 0 : WW.now) ? Fi.performance.now() : Date.now()
      },
      jl = {
        "http:": 80,
        "https:": 443
      },
      Ul = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      kl = (WW, iW) => {
        var OW;
        const mW = String(iW);
        return {
          method: String(WW).toUpperCase(),
          url: (null === (OW = fc(mW)) || void 0 === OW ? void 0 : OW.href) || mW
        }
      },
      sl = function(WW, iW, OW, mW, EW, NW) {
        let PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var LW, cW;
          const wW = EW();
          if (!wW) return;
          const tW = OW || void 0,
            ZW = bl() - mW,
            xW = fc(iW.url);
          if (xW && "http:" !== xW.protocol && "https:" !== xW.protocol) return;
          const lW = {
              url: (null == xW ? void 0 : xW.href) || iW.url,
              method: iW.method
            },
            AW = SO(wW.name) ? wW.name(lW) : JO(wW.name) ? wW.name : "http.client.request.duration";
          if (!AW) return;
          const bW = PW && !tW ? void 0 : ((WW, iW) => WW ? 400 > WW ? void 0 : String(WW) : (null == iW ? void 0 : iW.name) || "_OTHER")(tW, NW),
            jW = KE(KE(KE(KE(KE({}, (WW => {
              const iW = Ul.has(WW) ? WW : "_OTHER";
              return KE({
                "http.request.method": iW
              }, "_OTHER" === iW && WW !== iW ? {
                "http.request.method_original": WW
              } : {})
            })(lW.method)), xW ? (WW => {
              return {
                "server.address": WW.hostname.startsWith("[") && WW.hostname.endsWith("]") ? WW.hostname.slice(1, -1) : WW.hostname,
                "server.port": Number(WW.port) || jl[WW.protocol],
                "url.scheme": WW.protocol.slice(0, -1),
                "url.template": (iW = WW.pathname, iW.split("/").map((WW => (WW => /^\d+$/.test(WW) || WW.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(WW))(WW) ? ":id" : WW)).join("/"))
              };
              var iW
            })(xW) : {}), tW ? {
              "http.response.status_code": tW
            } : {}), bW ? {
              "error.type": bW
            } : {}), null === (LW = wW.attributes) || void 0 === LW ? void 0 : LW.call(wW, lW, {
              status: tW,
              durationMs: ZW
            }));
          null === (cW = WW.metrics) || void 0 === cW || cW.histogram(AW, ZW, {
            unit: "ms",
            attributes: jW
          })
        } catch (WW) {
          Al.error("Failed to record network metric", WW)
        }
      },
      Ml = () => {},
      Kl = (WW, iW) => SO(null == Fi ? void 0 : Fi.fetch) ? Px(Fi, "fetch", (OW => function() {
        for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
        const PW = bl(),
          LW = OW.apply(this, EW);
        if (!iW()) return LW;
        try {
          var cW, wW, tW;
          const [OW, mW] = EW, NW = kl(null !== (cW = null !== (wW = null == mW ? void 0 : mW.method) && void 0 !== wW ? wW : null == OW ? void 0 : OW.method) && void 0 !== cW ? cW : "GET", null !== (tW = null == OW ? void 0 : OW.url) && void 0 !== tW ? tW : OW);
          return LW.then((OW => (sl(WW, NW, null == OW ? void 0 : OW.status, PW, iW, void 0, !0), OW)), (OW => {
            throw sl(WW, NW, void 0, PW, iW, OW), OW
          }))
        } catch (WW) {
          return Al.error("Failed to observe fetch", WW), LW
        }
      })) : Ml,
      Sl = (WW, iW) => {
        var OW;
        const mW = null == Fi || null === (OW = Fi.XMLHttpRequest) || void 0 === OW ? void 0 : OW.prototype;
        if (!mW) return Ml;
        const EW = new WeakMap,
          NW = Px(mW, "open", (WW => function() {
            for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
            try {
              (() => Kt.has(this))() || EW.set(this, kl(OW[0], OW[1]))
            } catch (WW) {
              Al.error("Failed to observe XHR open", WW)
            }
            return WW.apply(this, OW)
          })),
          PW = Px(mW, "send", (OW => function() {
            let mW;
            try {
              const OW = EW.get(this);
              if (OW && iW()) {
                const EW = bl();
                mW = () => {
                  this.removeEventListener("loadend", mW), sl(WW, OW, this.status, EW, iW)
                }, zP(this, "loadend", mW)
              }
            } catch (WW) {
              Al.error("Failed to observe XHR send", WW)
            }
            try {
              for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
              return OW.apply(this, PW)
            } catch (WW) {
              throw mW && this.removeEventListener("loadend", mW), WW
            }
          }));
        return () => {
          NW(), PW()
        }
      },
      Yl = new WeakMap,
      yl = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      Tl = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function Jl(WW) {
      if (WW) return !0 === WW ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== WW.intent,
        model: !1 !== WW.model
      }
    }

    function hl(WW, iW) {
      return {}.hasOwnProperty.call(WW, iW)
    }

    function Hl(WW, iW) {
      const OW = Object.create(WW);
      return iW && Object.defineProperty(OW, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: iW
      }), OW
    }

    function nl(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!JO(WW)) return;
      const mW = WW.trim();
      return mW ? (OW ? function(WW, iW) {
        return function(WW) {
          return WW.length >= 10240 && (uN.test(WW) || function(WW) {
            const iW = eN.exec(WW);
            if (!iW) return !1;
            let OW;
            try {
              OW = decodeURIComponent(WW.slice(iW[0].length))
            } catch (WW) {
              return !1
            }
            return vN.test(OW.replace(/[\r\n]/g, ""))
          }(WW) || dN.test(WW) && oN.test(WW))
        }(WW) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(WW, iW, OW) {
          const mW = 4 * OW.maxStringLength;
          if (WW.length > mW) {
            const EW = iW(WW.slice(0, function(WW, iW) {
              let OW = iW;
              for (; OW > 0 && !pN.test(WW[OW - 1]);) OW--;
              return OW
            }(WW, mW)));
            if (EW.length >= 2 * OW.maxStringLength) return EW + OW.truncationSuffix
          }
          return iW(WW)
        }(WW, (WW => function(WW) {
          return tP(WW, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(WW) {
          let iW = WW.replace(GN, " ");
          return iW = iW.replace(IN, nN), iW = iW.replace(aN, nN), iW = iW.replace(rN, `$1${nN}`), iW = iW.replace(FN, lP), iW = iW.replace(zN, nN), iW = iW.replace(WP, `$1${nN}`), iW = iW.replace(iP, `$1${nN}`), iW
        }(ZP(WW)))), iW)
      }(mW, Tl) : mW).slice(0, iW) : void 0
    }

    function ul(WW) {
      try {
        return YO(WW) && !0 === WW.isError
      } catch (WW) {
        return !1
      }
    }
    const ol = {
        featureFlags: class extends Gx {
          constructor(WW) {
            const iW = new ax(WW.config, WW._shouldDisableFlags());
            super(iW), this.name = SZ, this._instance = WW, this._mutableConfigSource = iW
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(WW, iW) {
            this._mutableConfigSource.update(WW, iW), this._onConfigUpdated()
          }
        }
      },
      dl = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var WW;
            return !!(null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW ? void 0 : WW.isStarted)
          }
          get status() {
            var WW, iW;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (WW = null === (iW = this._lazyLoadedSessionRecording) || void 0 === iW ? void 0 : iW.status) && void 0 !== WW ? WW : this._recordingStatus
          }
          constructor(WW) {
            if (this._instance = WW, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = lx, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var WW, iW;
                if (!(null == iO ? void 0 : iO.visibilityState) || "visible" === iO.visibilityState) return !0;
                const OW = null == Fi || null === (WW = Fi.performance) || void 0 === WW || null === (iW = WW.getEntriesByType) || void 0 === iW ? void 0 : iW.call(WW, "visibility-state");
                return !(null == OW ? void 0 : OW.length) || OW.some((WW => "visible" === WW.name))
              })(), this._onVisibilityChange = () => {
                var WW, iW;
                "visible" === (null == iO ? void 0 : iO.visibilityState) && (this._documentWasEverVisible = !0, null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW || null === (iW = WW.setDocumentWasEverVisible) || void 0 === iW || iW.call(WW, !0))
              }, !this._instance.sessionManager) throw bx.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == iO ? void 0 : iO.addEventListener) && zP(iO, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: WW = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var iW;
            this._sessionRecordingDisposed = !0, null == iO || null === (iW = iO.removeEventListener) || void 0 === iW || iW.call(iO, "visibilitychange", this._onVisibilityChange), WW ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var WW;
            const iW = !!(null === (WW = this._instance.get_property("$session_recording_remote_config")) || void 0 === WW ? void 0 : WW.enabled),
              OW = !this._config.disable_session_recording,
              mW = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return Fi && iW && OW && !mW
          }
          startIfEnabledOrStop(WW) {
            var iW;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (iW = this._lazyLoadedSessionRecording) || void 0 === iW ? void 0 : iW.isStarted)) return;
            const OW = !TO(Object.assign) && !TO(Array.from);
            this._isRecordingEnabled && OW ? (this._lazyLoadAndStart(WW), bx.info("starting")) : (this._recordingStatus = lx, this.stopRecording())
          }
          _lazyLoadAndStart(WW) {
            var iW, OW;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = Ax), (null == wO || null === (iW = wO.__PosthogExtensions__) || void 0 === iW || null === (iW = iW.rrweb) || void 0 === iW ? void 0 : iW.record) && (null === (OW = wO.__PosthogExtensions__) || void 0 === OW ? void 0 : OW.initSessionRecording)) this._onScriptLoaded(WW);
              else {
                var mW, EW;
                const iW = this._instance.sessionManager;
                null === (mW = wO.__PosthogExtensions__) || void 0 === mW || null === (EW = mW.loadExternalDependency) || void 0 === EW || EW.call(mW, this._instance, this._scriptName, (OW => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === iW) return OW ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), bx.error("could not load recorder", OW)) : void this._onScriptLoaded(WW);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var WW, iW;
            null === (WW = this._persistFlagsOnSessionListener) || void 0 === WW || WW.call(this), this._persistFlagsOnSessionListener = void 0, null === (iW = this._lazyLoadedSessionRecording) || void 0 === iW || iW.stop()
          }
          _discardRecording() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var iW, OW;
            null === (iW = this._persistFlagsOnSessionListener) || void 0 === iW || iW.call(this), this._persistFlagsOnSessionListener = void 0, null === (OW = this._lazyLoadedSessionRecording) || void 0 === OW || OW.discard({
              discardProducerEvents: WW
            })
          }
          _resetSampling() {
            var WW, iW;
            null === (WW = this._persistence) || void 0 === WW || WW.unregister("$session_is_sampled"), null === (iW = this._persistence) || void 0 === iW || iW.unregister("$replay_sample_rate")
          }
          _validateSampleRate(WW, iW) {
            if (nO(WW)) return null;
            const OW = uO(WW) ? WW : parseFloat(WW);
            return "number" != typeof(mW = OW) || !Number.isFinite(mW) || 0 > mW || mW > 1 ? (bx.warn(`${iW} must be between 0 and 1. Ignoring invalid value:`, WW), null) : OW;
            var mW
          }
          _persistRemoteConfig(WW) {
            if (this._persistence) {
              var iW, OW;
              const mW = this._persistence,
                EW = () => {
                  var iW;
                  const OW = !1 === WW.sessionRecording ? void 0 : WW.sessionRecording,
                    EW = this._validateSampleRate(null === (iW = this._config.session_recording) || void 0 === iW ? void 0 : iW.sampleRate, "session_recording.sampleRate"),
                    NW = this._validateSampleRate(null == OW ? void 0 : OW.sampleRate, "remote config sampleRate"),
                    PW = null != EW ? EW : NW;
                  nO(PW) && this._resetSampling();
                  const LW = null == OW ? void 0 : OW.minimumDurationMilliseconds;
                  mW.register({
                    [qW]: KE(KE({
                      cache_timestamp: Date.now(),
                      enabled: !!OW
                    }, OW), {}, {
                      networkPayloadCapture: KE({
                        capturePerformance: WW.capturePerformance
                      }, null == OW ? void 0 : OW.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == OW ? void 0 : OW.recordCanvas,
                        fps: null == OW ? void 0 : OW.canvasFps,
                        quality: null == OW ? void 0 : OW.canvasQuality
                      },
                      sampleRate: PW,
                      minimumDurationMilliseconds: TO(LW) ? null : LW,
                      endpoint: null == OW ? void 0 : OW.endpoint,
                      triggerMatchType: null == OW ? void 0 : OW.triggerMatchType,
                      masking: null == OW ? void 0 : OW.masking,
                      urlTriggers: null == OW ? void 0 : OW.urlTriggers,
                      version: null == OW ? void 0 : OW.version,
                      triggerGroups: null == OW ? void 0 : OW.triggerGroups
                    })
                  })
                };
              EW(), null === (iW = this._persistFlagsOnSessionListener) || void 0 === iW || iW.call(this), this._persistFlagsOnSessionListener = null === (OW = this._instance.sessionManager) || void 0 === OW ? void 0 : OW.onSessionId(EW)
            }
          }
          onRemoteConfig(WW) {
            const iW = WW.ok ? WW.config : void 0;
            return iW && "sessionRecording" in iW ? !1 === iW.sessionRecording ? (this._persistRemoteConfig(iW), void this._discardRecording()) : (this._persistRemoteConfig(iW), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [oi]: !0
            }), bx.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var OW;
            (null === (OW = this._lazyLoadedSessionRecording) || void 0 === OW ? void 0 : OW.log) ? this._lazyLoadedSessionRecording.log(WW, iW): bx.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var WW, iW;
            const OW = null === (WW = this._instance) || void 0 === WW || null === (WW = WW.persistence) || void 0 === WW ? void 0 : WW.get_property(qW);
            return (null == OW || null === (iW = OW.scriptConfig) || void 0 === iW ? void 0 : iW.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const WW = this._instance.get_property(qW);
            if (!WW) return !1;
            let iW;
            try {
              iW = "object" == typeof WW ? WW : JSON.parse(WW)
            } catch (WW) {
              return bx.warn("persisted remote config for session recording is invalid and will be ignored", WW), !1
            }
            return !nO(iW.cache_timestamp) && 36e5 >= Date.now() - iW.cache_timestamp
          }
          _onScriptLoaded(WW) {
            var iW, OW, mW;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.initSessionRecording)) return bx.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [ui]: !0
              });
              var EW;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (EW = wO.__PosthogExtensions__) || void 0 === EW ? void 0 : EW.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", bx.info("persisted remote config is stale, requesting fresh config before starting"), void new Cw(this._instance).load()
              }
              this._recordingStatus = Ax, null === (OW = (mW = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === OW || OW.call(mW, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(WW)
            } else this._recordingStatus = lx
          }
          onRRwebEmit(WW) {
            var iW, OW;
            null === (iW = this._lazyLoadedSessionRecording) || void 0 === iW || null === (OW = iW.onRRwebEmit) || void 0 === OW || OW.call(iW, WW)
          }
          overrideLinkedFlag() {
            var WW, iW;
            this._lazyLoadedSessionRecording || null === (iW = this._persistence) || void 0 === iW || iW.register({
              $replay_override_linked_flag: !0
            }), null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW || WW.overrideLinkedFlag()
          }
          overrideSampling() {
            var WW, iW;
            this._lazyLoadedSessionRecording || null === (iW = this._persistence) || void 0 === iW || iW.register({
              $replay_override_sampling: !0
            }), null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW || WW.overrideSampling()
          }
          overrideTrigger(WW) {
            var iW, OW;
            this._lazyLoadedSessionRecording || null === (OW = this._persistence) || void 0 === OW || OW.register({
              ["url" === WW ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (iW = this._lazyLoadedSessionRecording) || void 0 === iW || iW.overrideTrigger(WW)
          }
          get sdkDebugProperties() {
            var WW;
            const iW = {};
            for (const mW of jx) {
              var OW;
              const WW = null === (OW = this._instance.sessionPersistence) || void 0 === OW ? void 0 : OW.get_property(mW);
              TO(WW) || (iW[mW] = WW)
            }
            return KE(KE({}, iW), (null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW ? void 0 : WW.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(WW, iW) {
            var OW;
            return !!(null === (OW = this._lazyLoadedSessionRecording) || void 0 === OW ? void 0 : OW.tryAddCustomEvent(WW, iW))
          }
          flushBeforeIdentityReset() {
            var WW, iW;
            null === (WW = this._lazyLoadedSessionRecording) || void 0 === WW || null === (iW = WW.flushBeforeIdentityReset) || void 0 === iW || iW.call(WW)
          }
        }
      },
      el = {
        autocapture: class extends ix {
          constructor(WW) {
            super(new Ox(WW)), this.instance = WW
          }
        },
        historyAutocapture: class {
          constructor(WW) {
            this._isFlushingPageview = !1, this._instance = WW, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const WW = this._getCaptureOptions();
            return !!(WW.path || WW.search || this._shouldCaptureHashChanges(WW))
          }
          startIfEnabled() {
            this.isEnabled && (pP.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, pP.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            Fi && Fi.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(WW) {
            var iW;
            if (!Fi || (null === (iW = Fi.history[WW]) || void 0 === iW ? void 0 : iW.__posthog_wrapped__)) return;
            const OW = this;
            Px(Fi.history, WW, (iW => function(mW, EW, NW) {
              var PW;
              OW._isUrlChanging(NW) && OW._flushPendingPageview(), iW.call(this, mW, EW, NW), OW._capturePageview(WW, !OW._isFlushingPageview && "popstate" !== (null == Fi || null === (PW = Fi.event) || void 0 === PW ? void 0 : PW.type))
            }))
          }
          _getCurrentLocation() {
            const WW = null == Fi ? void 0 : Fi.location;
            if (null == WW ? void 0 : WW.pathname) return {
              pathname: WW.pathname,
              search: WW.search,
              hash: WW.hash
            }
          }
          _getCaptureOptions() {
            const WW = this._instance.config.capture_pageview;
            return "history_change" === WW ? {
              path: !0
            } : YO(WW) ? WW : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(WW) {
            const iW = this._getCaptureOptions(),
              OW = this._lastLocation;
            return !(!OW || !(iW.path && WW.pathname !== OW.pathname || iW.search && WW.search !== OW.search || this._shouldCaptureHashChanges(iW) && WW.hash !== OW.hash))
          }
          _capturePageview(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              iW || this._flushPendingPageview();
              const OW = this._getCurrentLocation();
              if (!OW) return;
              if (this._hasLocationChanged(OW)) {
                const OW = () => this._instance.capture(Ii, {
                  navigation_type: WW
                });
                iW ? (this._pendingPageview = OW, Promise.resolve().then((() => this._flushPendingPageview()))) : OW()
              }
              this._lastLocation = OW
            } catch (iW) {
              pP.error(`Error capturing ${WW} pageview`, iW)
            }
          }
          _isUrlChanging(WW) {
            var iW, OW;
            return !(nO(WW) || !Fi) && (null === (iW = fc(String(WW))) || void 0 === iW ? void 0 : iW.href) !== (null === (OW = Fi.location) || void 0 === OW ? void 0 : OW.href)
          }
          _flushPendingPageview() {
            const WW = this._pendingPageview;
            if (WW) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                WW()
              } catch (WW) {
                pP.error("Error capturing deferred pageview", WW)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const WW = () => {
              this._capturePageview("popstate")
            };
            zP(Fi, "popstate", WW), this._popstateListener = () => {
              Fi && Fi.removeEventListener("popstate", WW)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const WW = () => {
              this._capturePageview("hashchange")
            };
            zP(Fi, "hashchange", WW), this._hashchangeListener = () => {
              Fi && Fi.removeEventListener("hashchange", WW)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(WW) {
            var iW;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = WW, this._enabledServerSide = !!(null === (iW = this.instance.persistence) || void 0 === iW ? void 0 : iW.props[vW]), this.rageclicks = new rZ(WW.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let WW = 5e3;
            return YO(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (WW = this._config.capture_heatmaps.flush_interval_milliseconds), WW
          }
          get isEnabled() {
            return nO(this._config.capture_heatmaps) ? nO(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              Ux.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var WW;
              clearInterval(null !== (WW = this._flushInterval) && void 0 !== WW ? WW : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(WW) {
            if (!WW.ok) return;
            const iW = WW.config;
            if (!("heatmaps" in iW)) return;
            const OW = !!iW.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [vW]: OW
            }), this._enabledServerSide = OW, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const WW = this._buffer;
            return this._buffer = void 0, WW
          }
          _onDeadClick(WW) {
            kx(WW.originalEvent) && this._onClick(WW.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == iO ? void 0 : iO.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            Fi && iO && (this._flushHandler = this._flush.bind(this), zP(Fi, Gi, this._flushHandler), this._onClickHandler = WW => this._onClick(WW || (null == Fi ? void 0 : Fi.event)), zP(iO, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = WW => this._onMouseMove(WW || (null == Fi ? void 0 : Fi.event)), zP(iO, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Yc(this.instance, Kc, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), zP(iO, KW, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var WW;
            Fi && iO && (this._flushHandler && Fi.removeEventListener(Gi, this._flushHandler), this._onClickHandler && iO.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && iO.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && iO.removeEventListener(KW, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (WW = this._deadClicksCapture) || void 0 === WW || WW.stop(), this._initialized = !1)
          }
          _getProperties(WW, iW) {
            const OW = this.instance.scrollManager.scrollY(),
              mW = this.instance.scrollManager.scrollX(),
              EW = this.instance.scrollManager.scrollElement(),
              NW = function(WW, iW, OW) {
                let mW = WW;
                for (; mW && uL(mW) && !oL(mW, "body");) {
                  if (mW === OW) return !1;
                  let LW;
                  try {
                    var EW, NW, PW;
                    LW = null === (EW = null !== (NW = null === (PW = mW.ownerDocument) || void 0 === PW ? void 0 : PW.defaultView) && void 0 !== NW ? NW : Fi) || void 0 === EW ? void 0 : EW.getComputedStyle(mW).position
                  } catch (WW) {
                    return !1
                  }
                  if (AO(iW, LW)) return !0;
                  mW = qL(mW)
                }
                return !1
              }(fL(WW), ["fixed", "sticky"], EW);
            return {
              x: WW.clientX + (NW ? 0 : mW),
              y: WW.clientY + (NW ? 0 : OW),
              target_fixed: NW,
              type: iW
            }
          }
          _onClick(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var OW;
            if (nL(WW.target) || !kx(WW)) return;
            const mW = this._getProperties(WW, iW);
            (null === (OW = this.rageclicks) || void 0 === OW ? void 0 : OW.isRageClick(WW.clientX, WW.clientY, (new Date).getTime())) && mc(fL(WW), this.instance.config.rageclick) && this._capture(KE(KE({}, mW), {}, {
              type: "rageclick"
            })), this._capture(mW)
          }
          _onMouseMove(WW) {
            !nL(WW.target) && kx(WW) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(WW, "mousemove"))
            }), 500))
          }
          _capture(WW) {
            if (!Fi) return;
            const iW = this._config.disable_capture_url_hashes ? lE(Fi.location.href) : Fi.location.href,
              OW = this._config.custom_personal_data_properties,
              mW = this._config.mask_personal_data_properties ? [...qc, ...OW || []] : [],
              EW = Xc(iW, mW, Gc);
            this._buffer = this._buffer || {}, this._buffer[EW] || (this._buffer[EW] = []), this._buffer[EW].push(WW)
          }
          _flush() {
            this._buffer && !yO(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Yc,
        webVitalsAutocapture: class {
          constructor(WW) {
            var iW;
            this._instance = WW, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", KE({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((WW, iW) => KE(KE({}, WW), {}, {
                [`$web_vitals_${iW.name}_event`]: KE({}, iW),
                [`$web_vitals_${iW.name}_value`]: iW.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = WW => {
              var iW;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, nO(null == WW ? void 0 : WW.name) || nO(null == WW ? void 0 : WW.value)) return void cx.error("Invalid metric received", WW);
              const OW = "string" == typeof WW.navigationURL ? WW.navigationURL : void 0,
                mW = this._maskedURL(OW);
              if (TO(mW)) return;
              const EW = uO(WW.navigationId) || "string" == typeof WW.navigationId ? `navigation:${WW.navigationId}` : `url:${mW}`;
              if (this._maxAllowedValue && WW.value >= this._maxAllowedValue) return void cx.error("Ignoring metric with value >= " + this._maxAllowedValue, WW);
              this._buffer.navigationKey !== EW && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), TO(this._buffer.navigationKey) && (this._buffer.navigationKey = EW, this._buffer.url = mW), this._buffer.firstMetricTimestamp = TO(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const NW = null === (iW = this._instance.sessionManager) || void 0 === iW ? void 0 : iW.checkAndGetSessionAndWindowId(!0),
                PW = KE(KE(KE({}, WW), OW ? {
                  navigationURL: mW
                } : {}), {}, {
                  $current_url: mW,
                  timestamp: Date.now()
                });
              if (delete PW.entries, YO(WW.attribution) && this.attributionMetrics.indexOf(WW.name) > -1) {
                const iW = {};
                for (const OW of xx) {
                  const mW = "url" === OW && "string" == typeof WW.attribution[OW] ? this._maskedURL(WW.attribution[OW]) : WW.attribution[OW];
                  TO(mW) || (iW[OW] = mW)
                }
                PW.attribution = iW
              } else delete PW.attribution;
              TO(NW) || (PW.$session_id = NW.sessionId, PW.$window_id = NW.windowId), this._buffer.metrics.push(PW), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let WW, iW, OW, mW, EW = !1;
              const NW = wO.__PosthogExtensions__,
                PW = null == NW ? void 0 : NW.postHogWebVitalsCallbacksByFlavor,
                LW = (null == PW ? void 0 : PW[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && TO(PW) ? null == NW ? void 0 : NW.postHogWebVitalsCallbacks : void 0);
              if (!TO(LW)) {
                const NW = LW.withoutAttribution,
                  PW = this.attributionMetrics;
                EW = !TO(NW), WW = PW.indexOf("LCP") > -1 ? LW.onLCP : (null == NW ? void 0 : NW.onLCP) || LW.onLCP, iW = PW.indexOf("CLS") > -1 ? LW.onCLS : (null == NW ? void 0 : NW.onCLS) || LW.onCLS, OW = PW.indexOf("FCP") > -1 ? LW.onFCP : (null == NW ? void 0 : NW.onFCP) || LW.onFCP, mW = PW.indexOf("INP") > -1 ? LW.onINP : (null == NW ? void 0 : NW.onINP) || LW.onINP
              }
              if (!(WW && iW && OW && mW)) return void cx.error("web vitals callbacks not loaded - not starting");
              const cW = {
                  reportSoftNavs: this.useSoftNavs
                },
                wW = EW && this.attributionMetrics.indexOf("INP") > -1 ? KE(KE({}, cW), {}, {
                  includeProcessedEventEntries: !1
                }) : cW;
              this.allowedMetrics.indexOf("LCP") > -1 && WW(this._addToBuffer.bind(this), cW), this.allowedMetrics.indexOf("CLS") > -1 && iW(this._addToBuffer.bind(this), cW), this.allowedMetrics.indexOf("FCP") > -1 && OW(this._addToBuffer.bind(this), cW), this.allowedMetrics.indexOf("INP") > -1 && mW(this._addToBuffer.bind(this), wW), this._initialized = !0
            }, this._enabledServerSide = !!(null === (iW = this._instance.persistence) || void 0 === iW ? void 0 : iW.props[pW]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var WW, iW;
            const OW = YO(this._perfConfig) ? null === (WW = this._perfConfig) || void 0 === WW ? void 0 : WW.web_vitals_allowed_metrics : void 0;
            return nO(OW) ? (null === (iW = this._instance.persistence) || void 0 === iW ? void 0 : iW.props.$web_vitals_allowed_metrics) || tx : OW
          }
          get flushToCaptureTimeoutMs() {
            return (YO(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const WW = YO(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return dO(WW) ? WW ? tx : [] : KO(WW) ? WW : Zx
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const WW = YO(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != WW && WW
          }
          get _maxAllowedValue() {
            const WW = YO(this._perfConfig) && uO(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : wx;
            return WW > 0 && 6e4 >= WW ? wx : WW
          }
          get isEnabled() {
            const WW = null == OO ? void 0 : OO.protocol;
            if ("http:" !== WW && "https:" !== WW) return cx.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const iW = YO(this._perfConfig) ? this._perfConfig.web_vitals : dO(this._perfConfig) ? this._perfConfig : void 0;
            return dO(iW) ? iW : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (cx.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(WW) {
            if (!WW.ok) return;
            const iW = WW.config;
            if (!("capturePerformance" in iW)) return;
            const OW = YO(iW.capturePerformance) && !!iW.capturePerformance.web_vitals,
              mW = YO(iW.capturePerformance) ? iW.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [pW]: OW
            }), this._instance.persistence.register({
              [BW]: mW
            })), this._enabledServerSide = OW, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(WW) {
            var iW;
            const OW = wO.__PosthogExtensions__,
              mW = this._callbackFlavor,
              EW = null == OW ? void 0 : OW.postHogWebVitalsCallbacksByFlavor;
            (null == EW ? void 0 : EW[mW]) || "web-vitals" === mW && TO(EW) && (null == OW ? void 0 : OW.postHogWebVitalsCallbacks) ? WW() : null == OW || null === (iW = OW.loadExternalDependency) || void 0 === iW || iW.call(OW, this._instance, mW, (iW => {
              iW ? cx.error("failed to load script", iW) : WW()
            }))
          }
          _maskedURL(WW) {
            const iW = WW || (null == Fi ? void 0 : Fi.location.href);
            if (!iW) return void cx.error("Could not determine current URL");
            const OW = this._instance.config.disable_capture_url_hashes ? lE(iW) : iW,
              mW = this._instance.config.custom_personal_data_properties,
              EW = this._instance.config.mask_personal_data_properties ? [...qc, ...mW || []] : [];
            return Xc(OW, EW, Gc)
          }
        }
      },
      vl = {
        exceptionObserver: class {
          constructor(WW) {
            var iW;
            this._startCapturing = () => {
              var WW;
              if (!Fi || !this.isEnabled || !(null === (WW = wO.__PosthogExtensions__) || void 0 === WW ? void 0 : WW.errorWrappingFunctions)) return;
              const iW = wO.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                OW = wO.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                mW = wO.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = iW(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = OW(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = mW(this.captureException.bind(this)))
              } catch (WW) {
                mx.error("failed to start", WW), this._stopCapturing()
              }
            }, this._instance = WW, this._remoteEnabled = !!(null === (iW = this._instance.persistence) || void 0 === iW ? void 0 : iW.props[gW]), this._rateLimiter = new zO(KE(KE({}, function() {
              let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var iW, OW, mW, EW;
              return {
                refillRate: null !== (iW = null !== (OW = WW.exceptionRateLimiterRefillRate) && void 0 !== OW ? OW : WW.__exceptionRateLimiterRefillRate) && void 0 !== iW ? iW : 1,
                bucketSize: null !== (mW = null !== (EW = WW.exceptionRateLimiterBucketSize) && void 0 !== EW ? EW : WW.__exceptionRateLimiterBucketSize) && void 0 !== mW ? mW : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: mx
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const WW = this._instance.config.capture_exceptions;
            let iW = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return YO(WW) ? iW = KE(KE({}, iW), WW) : (TO(WW) ? this._remoteEnabled : WW) && (iW = KE(KE({}, iW), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), iW
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (mx.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(WW) {
            var iW, OW, mW;
            (null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.errorWrappingFunctions) ? WW(): null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this._instance, "exception-autocapture", (iW => {
              if (iW) return mx.error("failed to load script", iW);
              WW()
            }))
          }
          _stopCapturing() {
            var WW, iW, OW;
            null === (WW = this._unwrapOnError) || void 0 === WW || WW.call(this), this._unwrapOnError = void 0, null === (iW = this._unwrapUnhandledRejection) || void 0 === iW || iW.call(this), this._unwrapUnhandledRejection = void 0, null === (OW = this._unwrapConsoleError) || void 0 === OW || OW.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(WW) {
            if (!WW.ok) return;
            const iW = WW.config;
            "autocaptureExceptions" in iW && (this._remoteEnabled = !!iW.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [gW]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(WW) {
            try {
              var iW, OW, mW;
              const EW = null !== (iW = null == WW || null === (OW = WW.$exception_list) || void 0 === OW || null === (OW = OW[0]) || void 0 === OW ? void 0 : OW.type) && void 0 !== iW ? iW : "Exception";
              if (this._rateLimiter.consumeRateLimit(EW)) return void mx.info("Skipping exception capture because of client rate limiting.", {
                exception: EW
              });
              null === (mW = this._instance.exceptions) || void 0 === mW || mW.sendExceptionEvent(WW)
            } catch (WW) {}
          }
        },
        exceptions: class {
          constructor(WW) {
            var iW, OW;
            this._suppressionRules = [], this._errorPropertiesBuilder = new HE([new zE, new LN, new QE, new FE, new NN, new EN, new iN, new PN], function(WW) {
              for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
              return function(iW) {
                let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const EW = [],
                  NW = iW.split("\n"),
                  PW = Math.min(NW.length, mW + 1e3),
                  LW = [];
                for (let tW = mW; PW > tW; tW++) {
                  const iW = NW[tW];
                  if (iW.length > 1024) continue;
                  const mW = XE.test(iW) ? iW.replace(XE, "$1") : iW;
                  if (!mW.match(/\S*Error: /)) {
                    for (const iW of OW) {
                      const OW = iW(mW, WW);
                      if (OW) {
                        EW.push(OW);
                        const WW = qE(EW);
                        if (WW) {
                          for (let iW = LW.length - 1; iW >= 0; iW--) {
                            const OW = LW[iW];
                            if (WW.start >= OW.start + OW.length) break;
                            LW.pop()
                          }
                          LW.push(WW)
                        }
                        break
                      }
                    }
                    if (aE(EW, LW) >= 50) break
                  }
                }
                const cW = [...LW].sort(((WW, iW) => iW.start - WW.start)),
                  wW = cW[cW.length - 1];
                if (wW) {
                  const WW = GE(EW, wW);
                  EW.splice(wW.start - WW, WW);
                  for (const iW of cW) iW.start -= WW
                }
                for (const WW of cW) RE(EW, WW);
                return LW.some((WW => 0 === WW.start && EW.length === WW.length)) && function(WW) {
                    const iW = WW.map((WW => `${WW.function}|${WW.filename}|${WW.lineno}|${WW.colno}|${WW.module}`));
                    let OW = 0;
                    for (let mW = 1; iW.length > mW; mW++) rE(iW, mW, OW) && (OW = mW);
                    WW.push(...WW.splice(0, OW))
                  }(EW),
                  function(WW) {
                    if (!WW.length) return [];
                    const iW = Array.from(WW);
                    return iW.reverse(), iW.slice(0, 50).map((WW => {
                      return KE(KE({}, WW), {}, {
                        filename: WW.filename || (OW = iW, OW[OW.length - 1] || {}).filename,
                        function: WW.function || "?"
                      });
                      var OW
                    }))
                  }(EW)
              }
            }("web:javascript", VE, CE)), this._instance = WW, this._suppressionRules = null !== (iW = null === (OW = this._instance.persistence) || void 0 === OW ? void 0 : OW.get_property("$error_tracking_suppression_rules")) && void 0 !== iW ? iW : [], this._exceptionStepsConfig = xN(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new lN(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = xN(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(WW) {
            var iW, OW, mW;
            if (!WW.ok) return;
            const EW = WW.config;
            if (!("errorTracking" in EW)) return;
            const NW = null !== (iW = null === (OW = EW.errorTracking) || void 0 === OW ? void 0 : OW.suppressionRules) && void 0 !== iW ? iW : [],
              PW = null === (mW = EW.errorTracking) || void 0 === mW ? void 0 : mW.captureExtensionExceptions;
            this._suppressionRules = NW, this._instance.persistence && this._instance.persistence.register({
              [DW]: this._suppressionRules,
              [VW]: PW
            })
          }
          get _captureExtensionExceptions() {
            var WW;
            const iW = !!this._instance.get_property(VW),
              OW = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (WW = null != OW ? OW : iW) && void 0 !== WW && WW
          }
          buildProperties(WW, iW) {
            return this._errorPropertiesBuilder.buildFromUnknown(WW, {
              syntheticException: null == iW ? void 0 : iW.syntheticException,
              mechanism: {
                handled: null == iW ? void 0 : iW.handled
              }
            })
          }
          addExceptionStep(WW, iW) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!JO(WW) || 0 === WW.trim().length) return void zx.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: OW,
                droppedKeys: mW
              } = function(WW) {
                if (!WW) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const iW = [];
                return {
                  sanitizedProperties: Object.keys(WW).reduce(((OW, mW) => tN.has(mW) ? (iW.push(mW), OW) : (OW[mW] = WW[mW], OW)), {}),
                  droppedKeys: iW
                }
              }(this._coerceExceptionStepProperties(iW));
              mW.length > 0 && zx.warn("Ignoring reserved exception step fields", {
                droppedKeys: mW
              }), this._exceptionStepsBuffer.add(KE({
                [cN]: WW,
                [wN]: (new Date).toISOString()
              }, OW))
            } catch (WW) {
              zx.error("Failed to add exception step. Ignoring breadcrumb.", WW)
            }
          }
          sendExceptionEvent(WW) {
            try {
              const iW = WW.$exception_list;
              if (this._isExceptionList(iW)) {
                if (this._matchesSuppressionRule(iW)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void zx.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(iW)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void zx.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(iW)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void zx.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(iW)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void zx.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const OW = this._exceptionStepsConfig.enabled && nO(WW.$exception_steps) ? this._addBufferedExceptionSteps(WW) : WW,
                mW = function() {
                  if ("u" > typeof process) {
                    var WW;
                    const iW = null === (WW = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === WW ? void 0 : WW.trim();
                    if (iW) return iW
                  }
                  const iW = globalThis._posthogReleaseId;
                  return "string" == typeof iW && iW.length > 0 ? iW : void 0
                }();
              mW && (OW.$release_id = mW);
              try {
                const WW = this._instance.capture("$exception", OW, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return WW && this._exceptionStepsBuffer.clear(), WW
              } catch (WW) {
                return rx(WW) || zx.error("Failed to capture exception event. Dropping this exception.", WW), void this._exceptionStepsBuffer.clear()
              }
            } catch (WW) {
              return void(rx(WW) || zx.error("Failed to process exception event. Ignoring this exception.", WW))
            }
          }
          _addBufferedExceptionSteps(WW) {
            try {
              const iW = this._exceptionStepsBuffer.getAttachable();
              return 0 === iW.length ? WW : KE(KE({}, WW), {}, {
                $exception_steps: iW
              })
            } catch (EW) {
              return zx.error("Failed to read buffered exception steps. Capturing exception without steps.", EW), WW
            }
          }
          _addDroppedExceptionStep(WW) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [cN]: WW,
              [wN]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(WW) {
            return YO(WW) ? KE({}, WW) : {}
          }
          _getExceptionStepsConfig() {
            var WW, iW;
            return null !== (WW = null === (iW = this._instance.config.error_tracking) || void 0 === iW ? void 0 : iW.exception_steps) && void 0 !== WW ? WW : {}
          }
          _matchesSuppressionRule(WW) {
            if (0 === WW.length) return !1;
            try {
              const iW = WW.reduce(((WW, iW) => {
                let {
                  type: OW,
                  value: mW
                } = iW;
                return JO(OW) && OW.length > 0 && WW.$exception_types.push(OW), JO(mW) && mW.length > 0 && WW.$exception_values.push(mW), WW
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((WW => {
                const OW = WW.values.map((WW => {
                  const OW = PZ[WW.operator],
                    mW = iW[WW.key];
                  if (!OW || !mW) return !1;
                  const EW = KO(WW.value) ? WW.value : [WW.value];
                  return EW.length > 0 && OW(EW, mW)
                }));
                return "OR" === WW.type ? OW.some(Boolean) : OW.every(Boolean)
              }))
            } catch (WW) {
              return zx.warn("Failed to evaluate suppression rules. Capturing the exception.", WW), !1
            }
          }
          _isExtensionException(WW) {
            const iW = WW.flatMap((WW => {
                var iW, OW;
                return null !== (iW = null === (OW = WW.stacktrace) || void 0 === OW ? void 0 : OW.frames) && void 0 !== iW ? iW : []
              })),
              OW = iW.filter((WW => {
                let {
                  filename: iW
                } = WW;
                return !!iW && Wl.some((WW => iW.startsWith(WW)))
              }));
            return 0 !== OW.length && (!OW.every((WW => {
              let {
                filename: iW
              } = WW;
              return !!iW && iW.startsWith(Fx)
            })) || WW.some((WW => {
              let {
                type: iW,
                value: OW
              } = WW;
              return "NoResponse" === iW || JO(OW) && Qx.some((WW => {
                let {
                  value: iW,
                  exact: mW
                } = WW;
                return mW ? OW === iW : OW.includes(iW)
              }))
            })) && !iW.some((WW => {
              let {
                in_app: iW,
                filename: OW
              } = WW;
              return iW && !(null == OW ? void 0 : OW.startsWith(Fx))
            })))
          }
          _isInjectedBrowserScriptException(WW) {
            return WW.some((WW => {
              let {
                value: iW
              } = WW;
              return JO(iW) && il.some((WW => iW.includes(WW)))
            }))
          }
          _isPostHogException(WW) {
            if (WW.length > 0) {
              var iW, OW, mW, EW;
              const NW = null !== (iW = null === (OW = WW[0].stacktrace) || void 0 === OW ? void 0 : OW.frames) && void 0 !== iW ? iW : [],
                PW = NW[NW.length - 1];
              return null !== (mW = null == PW || null === (EW = PW.filename) || void 0 === EW ? void 0 : EW.includes("posthog.com/static")) && void 0 !== mW && mW
            }
            return !1
          }
          _isExceptionList(WW) {
            return !nO(WW) && KO(WW)
          }
        }
      },
      gl = KE({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(WW) {
            this._productTourManager = null, this._cachedTours = null, this._instance = WW
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(WW) {
            if (!WW.ok) return;
            const iW = WW.config;
            if ("productTours" in iW) {
              var OW, mW;
              if (this._persistence && this._persistence.register({
                  [CW]: !!iW.productTours
                }), !Mx(this._instance)) return !this._productTourManager && nO(null === (OW = this._persistence) || void 0 === OW ? void 0 : OW.props.ph_product_tours) || sx.info("product tours disabled; stopping and clearing cached tours"), null === (mW = this._productTourManager) || void 0 === mW || mW.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Mx(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(WW) {
            var iW, OW, mW;
            (null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.generateProductTours) ? WW(): null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this._instance, "product-tours", (iW => {
              iW ? sx.error("Could not load product tours script", iW) : WW()
            }))
          }
          _startProductTours() {
            var WW;
            !this._productTourManager && (null === (WW = wO.__PosthogExtensions__) || void 0 === WW ? void 0 : WW.generateProductTours) && (this._productTourManager = wO.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (KO(this._cachedTours) && !iW) return void WW(this._cachedTours, {
              isLoaded: !0
            });
            const OW = this._persistence;
            if (OW) {
              const mW = OW.props[Zi];
              if (KO(mW) && !iW) return this._cachedTours = mW, void WW(mW, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: iW => {
                if (!Mx(this._instance)) return void WW([], {
                  isLoaded: !0
                });
                const mW = iW.statusCode;
                if (200 !== mW || !iW.json) {
                  const OW = `Product Tours API could not be loaded, status: ${mW}`;
                  return 0 === mW ? iW.error || sx.warn(OW) : sx.error(OW), void WW([], {
                    isLoaded: !1,
                    error: OW
                  })
                }
                const EW = KO(iW.json.product_tours) ? iW.json.product_tours : [];
                this._cachedTours = EW, OW && OW.register({
                  [Zi]: EW
                }), WW(EW, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(WW) {
            nO(this._productTourManager) ? WW([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(WW)
          }
          showProductTour(WW) {
            var iW;
            null === (iW = this._productTourManager) || void 0 === iW || iW.showTourById(WW)
          }
          previewTour(WW) {
            this._productTourManager ? this._productTourManager.previewTour(WW) : this._loadScript((() => {
              var iW;
              this._startProductTours(), null === (iW = this._productTourManager) || void 0 === iW || iW.previewTour(WW)
            }))
          }
          dismissProductTour() {
            var WW;
            null === (WW = this._productTourManager) || void 0 === WW || WW.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var WW;
            null === (WW = this._productTourManager) || void 0 === WW || WW.nextStep()
          }
          previousStep() {
            var WW;
            null === (WW = this._productTourManager) || void 0 === WW || WW.previousStep()
          }
          clearCache() {
            var WW;
            this._cachedTours = null, null === (WW = this._persistence) || void 0 === WW || WW.unregister("ph_product_tours")
          }
          resetTour(WW) {
            var iW;
            null === (iW = this._productTourManager) || void 0 === iW || iW.resetTour(WW)
          }
          resetAllTours() {
            var WW;
            null === (WW = this._productTourManager) || void 0 === WW || WW.resetAllTours()
          }
          cancelPendingTour(WW) {
            var iW;
            null === (iW = this._productTourManager) || void 0 === iW || iW.cancelPendingTour(WW)
          }
        }
      }, ol),
      Dl = {
        siteApps: class {
          constructor(WW) {
            this._instance = WW, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(WW, iW) {
            if (!iW) return;
            const OW = this.globalsForEvent(iW);
            this._bufferedInvocations.push(OW), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var WW;
            return null === (WW = wO._POSTHOG_REMOTE_CONFIG) || void 0 === WW || null === (WW = WW[this._instance.config.token]) || void 0 === WW ? void 0 : WW.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const WW = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                WW(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(WW) {
            var iW, OW, mW, EW, NW, PW, LW;
            if (!WW) throw new Error("Event payload is required");
            const cW = {},
              wW = this._instance.get_property("$groups") || [],
              tW = this._instance.get_property("$stored_group_properties") || {};
            for (const [lW, AW] of Object.entries(tW)) cW[lW] = {
              id: wW[lW],
              type: lW,
              properties: AW
            };
            const {
              $set_once: ZW,
              $set: xW
            } = WW;
            return {
              event: KE(KE({}, HN(WW, Kx)), {}, {
                properties: KE(KE(KE({}, WW.properties), xW ? {
                  $set: KE(KE({}, null !== (iW = null === (OW = WW.properties) || void 0 === OW ? void 0 : OW.$set) && void 0 !== iW ? iW : {}), xW)
                } : {}), ZW ? {
                  $set_once: KE(KE({}, null !== (mW = null === (EW = WW.properties) || void 0 === EW ? void 0 : EW.$set_once) && void 0 !== mW ? mW : {}), ZW)
                } : {}),
                elements_chain: null !== (NW = null === (PW = WW.properties) || void 0 === PW ? void 0 : PW.$elements_chain) && void 0 !== NW ? NW : "",
                distinct_id: null === (LW = WW.properties) || void 0 === LW ? void 0 : LW.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: cW
            }
          }
          _prepareElementForSiteApp(WW) {
            var iW;
            const OW = null === (iW = WW.tagName) || void 0 === iW ? void 0 : iW.toLowerCase();
            return "style" === OW && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(WW) || (Sx.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === OW && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(WW) || (Sx.error("prepare_external_dependency_script returned null"), null) : WW
          }
          _patchSiteAppElementInsertionMethods() {
            var WW, iW, OW, mW, EW, NW, PW, LW;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const cW = null == iO ? void 0 : iO.defaultView,
              wW = null == cW || null === (WW = cW.Node) || void 0 === WW ? void 0 : WW.prototype;
            if (!cW || !wW) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const tW = [],
              ZW = this,
              xW = new WeakSet,
              lW = (WW, iW, OW) => {
                if (!(null == WW ? void 0 : WW[iW])) return;
                const mW = WW[iW];
                WW[iW] = OW(mW), tW.push((() => {
                  WW[iW] = mW
                }))
              },
              AW = WW => {
                if (xW.has(WW)) return WW;
                const iW = ZW._prepareElementForSiteApp(WW);
                return iW && xW.add(iW), iW
              },
              bW = WW => WW.map((WW => "string" == typeof WW ? WW : AW(WW))).filter((WW => !HO(WW)));
            return lW(wW, "appendChild", (WW => function(iW) {
              const OW = AW(iW);
              return OW ? WW.call(this, OW) : iW
            })), lW(wW, "insertBefore", (WW => function(iW, OW) {
              const mW = AW(iW);
              return mW ? WW.call(this, mW, OW) : iW
            })), lW(wW, "replaceChild", (WW => function(iW, OW) {
              const mW = AW(iW);
              return mW ? WW.call(this, mW, OW) : OW
            })), [null === (iW = cW.Element) || void 0 === iW ? void 0 : iW.prototype, null === (OW = cW.Document) || void 0 === OW ? void 0 : OW.prototype, null === (mW = cW.DocumentFragment) || void 0 === mW ? void 0 : mW.prototype].forEach((WW => {
              lW(WW, "append", (WW => function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                return WW.apply(this, bW(OW))
              })), lW(WW, "prepend", (WW => function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                return WW.apply(this, bW(OW))
              }))
            })), [null === (EW = cW.Element) || void 0 === EW ? void 0 : EW.prototype, null === (NW = cW.CharacterData) || void 0 === NW ? void 0 : NW.prototype, null === (PW = cW.DocumentType) || void 0 === PW ? void 0 : PW.prototype].forEach((WW => {
              lW(WW, "before", (WW => function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                return WW.apply(this, bW(OW))
              })), lW(WW, "after", (WW => function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                return WW.apply(this, bW(OW))
              })), lW(WW, "replaceWith", (WW => function() {
                for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
                const EW = bW(OW);
                return OW.length && !EW.length ? void 0 : WW.apply(this, EW)
              }))
            })), lW(null === (LW = cW.Element) || void 0 === LW ? void 0 : LW.prototype, "insertAdjacentElement", (WW => function(iW, OW) {
              const mW = AW(OW);
              return mW ? WW.call(this, iW, mW) : null
            })), this._restoreSiteAppElementPatches = () => {
              tW.forEach((WW => WW())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let WW = !1;
            return () => {
              var iW;
              WW || (WW = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (iW = this._restoreSiteAppElementPatches) || void 0 === iW || iW.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(WW) {
            let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const OW = this._patchSiteAppElementInsertionMethods();
            try {
              const mW = WW(OW);
              return iW && OW(), mW
            } catch (WW) {
              throw OW(), WW
            }
          }
          setupSiteApp(WW) {
            const iW = this.apps[WW.id],
              OW = () => {
                var OW;
                !iW.errored && this._bufferedInvocations.length && (Sx.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${WW.id}`), this._bufferedInvocations.forEach((WW => this._runWithPreparedSiteAppElements((() => {
                  var OW;
                  return null === (OW = iW.processEvent) || void 0 === OW ? void 0 : OW.call(iW, WW)
                })))), iW.processedBuffer = !0), Object.values(this.apps).every((WW => WW.processedBuffer || WW.errored)) && (null === (OW = this._stopBuffering) || void 0 === OW || OW.call(this))
              };
            let mW = !1;
            const EW = EW => {
              iW.errored = !EW, iW.loaded = !0, Sx.info(`Site app with id ${WW.id} ${EW?"loaded":"errored"}`), mW && OW()
            };
            try {
              const {
                processEvent: OW
              } = this._runWithPreparedSiteAppElements((iW => WW.init({
                posthog: this._instance,
                callback(WW) {
                  iW(), EW(WW)
                }
              })), !1);
              OW && (iW.processEvent = OW), mW = !0
            } catch (iW) {
              Sx.error(Yx + WW.id, iW), EW(!1)
            }
            if (mW && iW.loaded) try {
              OW()
            } catch (OW) {
              Sx.error(`Error while processing buffered events PostHog app with config id ${WW.id}`, OW), iW.errored = !0
            }
          }
          _setupSiteApps() {
            const WW = this.siteAppLoaders || [];
            for (const iW of WW) this.apps[iW.id] = {
              id: iW.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const iW of WW) this.setupSiteApp(iW)
          }
          _onCapturedEvent(WW) {
            if (0 === Object.keys(this.apps).length) return;
            const iW = this.globalsForEvent(WW);
            for (const OW of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var WW;
                return null === (WW = OW.processEvent) || void 0 === WW ? void 0 : WW.call(OW, iW)
              }))
            } catch (iW) {
              Sx.error(`Error while processing event ${WW.event} for site app ${OW.id}`, iW)
            }
          }
          onRemoteConfig(WW) {
            var iW, OW, mW;
            if (null === (iW = this.siteAppLoaders) || void 0 === iW ? void 0 : iW.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (WW => this._onCapturedEvent(WW)))) : void Sx.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (OW = this._stopBuffering) || void 0 === OW || OW.call(this), !WW.ok) return;
            const EW = WW.config;
            if (null === (mW = EW.siteApps) || void 0 === mW ? void 0 : mW.length)
              if (this.isEnabled)
                for (const {
                    id: LW,
                    url: cW
                  }
                  of EW.siteApps) {
                  var NW, PW;
                  wO[`__$$ph_site_app_${LW}`] = this._instance, null === (NW = wO.__PosthogExtensions__) || void 0 === NW || null === (PW = NW.loadSiteApp) || void 0 === PW || PW.call(NW, this._instance, cW, (WW => {
                    if (WW) return Sx.error(Yx + LW, WW)
                  }))
                } else Sx.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      Vl = {
        tracingHeaders: class {
          constructor(WW) {
            this._instance = WW, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const WW = this._syncHostnamesForPatch();
              var iW, OW;
              WW ? (TO(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (iW = wO.__PosthogExtensions__) || void 0 === iW || null === (iW = iW.tracingHeadersPatchFns) || void 0 === iW ? void 0 : iW._patchXHR(WW, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), TO(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (OW = OW.tracingHeadersPatchFns) || void 0 === OW ? void 0 : OW._patchFetch(WW, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(WW) {
            var iW, OW, mW;
            (null === (iW = wO.__PosthogExtensions__) || void 0 === iW ? void 0 : iW.tracingHeadersPatchFns) ? WW(): null === (OW = wO.__PosthogExtensions__) || void 0 === OW || null === (mW = OW.loadExternalDependency) || void 0 === mW || mW.call(OW, this._instance, "tracing-headers", (iW => {
              if (iW) return Lx.error("failed to load script", iW);
              WW()
            }))
          }
          _getConfiguredHostnames() {
            var WW, iW;
            return null !== (WW = null !== (iW = this._instance.config.tracing_headers) && void 0 !== iW ? iW : this._instance.config.addTracingHeaders) && void 0 !== WW ? WW : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const WW = this._getConfiguredHostnames();
            return KO(WW) ? (KO(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...WW) : this._hostnamesForPatch = [...WW], WW.length > 0 ? this._hostnamesForPatch : void 0) : (KO(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = WW || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var WW, iW;
            null === (WW = this._restoreXHRPatch) || void 0 === WW || WW.call(this), null === (iW = this._restoreFetchPatch) || void 0 === iW || iW.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      pl = KE({
        surveys: class extends hx {
          constructor(WW) {
            var iW;
            super(new ex(WW), (iW = WW, {
              get projectToken() {
                return iW.config.token
              },
              kv: new dx(iW)
            })), this._instance = WW
          }
          _sendSurveysRequest(WW, iW) {
            const OW = iW.query ? Jt(WW, iW.query) : WW;
            return new Promise((WW => {
              var mW;
              this._instance._send_request({
                method: iW.method,
                url: this._instance.requestRouter.endpointFor(null !== (mW = iW.target) && void 0 !== mW ? mW : "api", OW),
                data: iW.body,
                headers: iW.headers,
                timeout: iW.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: iW.transport,
                compression: iW.compression,
                timestampMode: iW.sentAt,
                callback: WW
              })
            }))
          }
        }
      }, ol),
      fl = {
        toolbar: class {
          constructor(WW) {
            this.instance = WW
          }
          _setToolbarState(WW) {
            wO.ph_toolbar_state = WW
          }
          _getToolbarState() {
            var WW;
            return null !== (WW = wO.ph_toolbar_state) && void 0 !== WW ? WW : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var mW, EW;
            if (FP(this.instance.config)) return !1;
            if (!Fi || !iO) return !1;
            WW = null !== (mW = WW) && void 0 !== mW ? mW : Fi.location, OW = null !== (EW = OW) && void 0 !== EW ? EW : Fi.history;
            try {
              if (!iW) {
                try {
                  Fi.localStorage.setItem("test", "test"), Fi.localStorage.removeItem("test")
                } catch (WW) {
                  return !1
                }
                iW = null == Fi ? void 0 : Fi.localStorage
              }
              const mW = vx || Bc(WW.hash, "__posthog") || Bc(WW.hash, "state");
              let EW;
              const NW = mW ? AE((() => JSON.parse(atob(decodeURIComponent(mW))))) || AE((() => JSON.parse(decodeURIComponent(mW)))) : null;
              return NW && "ph_authorize" === NW.action ? (EW = NW, EW.source = "url", EW && Object.keys(EW).length > 0 && (NW.desiredHash ? WW.hash = NW.desiredHash : OW ? OW.replaceState(OW.state, "", WW.pathname + WW.search) : WW.hash = "")) : (EW = JSON.parse(iW.getItem(gx) || "{}"), EW.source = "localstorage", delete EW.userIntent), !(!EW.token || this.instance.config.token !== EW.token || (this.loadToolbar(EW), 0))
            } catch (WW) {
              return !1
            }
          }
          _callLoadToolbar(WW) {
            const iW = wO.ph_load_toolbar || wO.ph_load_editor;
            !nO(iW) && SO(iW) ? iW(WW, this.instance) : Dx.warn("No toolbar load function found")
          }
          loadToolbar(WW) {
            const iW = !!(null == iO ? void 0 : iO.getElementById("__POSTHOG_TOOLBAR__"));
            if (!Fi || iW) return !1;
            const OW = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              mW = KE(KE({
                token: this.instance.config.token
              }, WW), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, OW ? {
                instrument: !1
              } : {});
            if (Fi.localStorage.setItem(gx, JSON.stringify(KE(KE({}, mW), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(mW);
            else if (0 === this._getToolbarState()) {
              var EW, NW;
              this._setToolbarState(1), null === (EW = wO.__PosthogExtensions__) || void 0 === EW || null === (NW = EW.loadExternalDependency) || void 0 === NW || NW.call(EW, this.instance, "toolbar", (WW => {
                if (WW) return Dx.error("[Toolbar] Failed to load", WW), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(mW)
              })), zP(Fi, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(mW)
              }))
            }
            return !0
          }
          _loadEditor(WW) {
            return this.loadToolbar(WW)
          }
          maybeLoadEditor() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(WW, iW, OW)
          }
        }
      },
      Cl = KE({
        experiments: class WW {
          get _config() {
            return this._instance.config
          }
          constructor(iW) {
            var OW = this;
            this._instance = iW, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              OW.getWebExperiments((iW => {
                WW._logInfo("retrieved web experiments from the server"), OW._flagToExperiments = new Map, iW.forEach((iW => {
                  if (iW.feature_flag_key) {
                    var mW;
                    OW._flagToExperiments && (WW._logInfo("setting flag key ", iW.feature_flag_key, " to web experiment ", iW), null === (mW = OW._flagToExperiments) || void 0 === mW || mW.set(iW.feature_flag_key, iW));
                    const EW = OW._instance.getFeatureFlag(iW.feature_flag_key);
                    JO(EW) && iW.variants[EW] && OW._applyTransforms(iW.name, EW, iW.variants[EW].transforms)
                  } else if (iW.variants)
                    for (const EW in iW.variants) {
                      const mW = iW.variants[EW];
                      WW._matchesTestVariant(mW, OW._instance) && OW._applyTransforms(iW.name, EW, mW.transforms)
                    }
                }))
              }), iW)
            }, this._instance.onFeatureFlags((WW => {
              this.onFeatureFlags(WW)
            }))
          }
          initialize() {}
          onFeatureFlags(iW) {
            if (this._is_bot()) WW._logInfo(Ol);
            else if (!this._config.disable_web_experiments) {
              if (nO(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              WW._logInfo("applying feature flags", iW), iW.forEach((WW => {
                var iW;
                if (this._flagToExperiments && (null === (iW = this._flagToExperiments) || void 0 === iW ? void 0 : iW.has(WW))) {
                  var OW;
                  const iW = this._instance.getFeatureFlag(WW),
                    mW = null === (OW = this._flagToExperiments) || void 0 === OW ? void 0 : OW.get(WW);
                  iW && (null == mW ? void 0 : mW.variants[iW]) && this._applyTransforms(mW.name, iW, mW.variants[iW].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const iW = WW.getWindowLocation();
            if (null == iW ? void 0 : iW.search) {
              const OW = Cc(null == iW ? void 0 : iW.search, "__experiment_id"),
                mW = Cc(null == iW ? void 0 : iW.search, "__experiment_variant");
              OW && mW && (WW._logInfo(`previewing web experiments ${OW} && ${mW}`), this.getWebExperiments((WW => {
                this._showPreviewWebExperiment(parseInt(OW), mW, WW)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(WW, iW, OW) {
            if (this._config.disable_web_experiments && !OW) return WW([]);
            const mW = this._instance.get_property("$web_experiments");
            if (mW && !iW) return WW(mW);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: iW => WW(200 === iW.statusCode && iW.json && iW.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(iW, OW, mW) {
            const EW = mW.filter((WW => WW.id === iW));
            EW && EW.length > 0 && (WW._logInfo(`Previewing web experiment [${EW[0].name}] with variant [${OW}]`), this._applyTransforms(EW[0].name, OW, EW[0].variants[OW].transforms))
          }
          static _matchesTestVariant(iW, OW) {
            return !nO(iW.conditions) && WW._matchUrlConditions(iW, OW) && WW._matchUTMConditions(iW)
          }
          static _matchUrlConditions(iW, OW) {
            var mW;
            if (nO(iW.conditions) || nO(null === (mW = iW.conditions) || void 0 === mW ? void 0 : mW.url)) return !0;
            const EW = WW.getWindowLocation();
            if (EW) {
              var NW, PW, LW;
              const WW = HL(OW, EW.href);
              return !(null === (NW = iW.conditions) || void 0 === NW ? void 0 : NW.url) || ml[null !== (PW = null === (LW = iW.conditions) || void 0 === LW ? void 0 : LW.urlMatchType) && void 0 !== PW ? PW : "icontains"](iW.conditions.url, WW)
            }
            return !1
          }
          static getWindowLocation() {
            return null == Fi ? void 0 : Fi.location
          }
          static _matchUTMConditions(WW) {
            var iW;
            if (nO(WW.conditions) || nO(null === (iW = WW.conditions) || void 0 === iW ? void 0 : iW.utm)) return !0;
            const OW = ac();
            if (OW.utm_source) {
              var mW, EW, NW, PW, LW, cW, wW, tW;
              const iW = !(null === (mW = WW.conditions) || void 0 === mW || null === (mW = mW.utm) || void 0 === mW ? void 0 : mW.utm_campaign) || (null === (EW = WW.conditions) || void 0 === EW || null === (EW = EW.utm) || void 0 === EW ? void 0 : EW.utm_campaign) == OW.utm_campaign,
                ZW = !(null === (NW = WW.conditions) || void 0 === NW || null === (NW = NW.utm) || void 0 === NW ? void 0 : NW.utm_source) || (null === (PW = WW.conditions) || void 0 === PW || null === (PW = PW.utm) || void 0 === PW ? void 0 : PW.utm_source) == OW.utm_source,
                xW = !(null === (LW = WW.conditions) || void 0 === LW || null === (LW = LW.utm) || void 0 === LW ? void 0 : LW.utm_medium) || (null === (cW = WW.conditions) || void 0 === cW || null === (cW = cW.utm) || void 0 === cW ? void 0 : cW.utm_medium) == OW.utm_medium,
                lW = !(null === (wW = WW.conditions) || void 0 === wW || null === (wW = wW.utm) || void 0 === wW ? void 0 : wW.utm_term) || (null === (tW = WW.conditions) || void 0 === tW || null === (tW = tW.utm) || void 0 === tW ? void 0 : tW.utm_term) == OW.utm_term;
              return iW && xW && lW && ZW
            }
            return !1
          }
          static _logInfo(WW) {
            for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
            pP.info(`[WebExperiments] ${WW}`, OW)
          }
          _applyTransforms(iW, OW, mW) {
            this._is_bot() ? WW._logInfo(Ol) : "control" !== OW ? mW.forEach((mW => {
              if (mW.selector) {
                var EW;
                WW._logInfo(`applying transform of variant ${OW} for experiment ${iW} `, mW);
                const NW = null === (EW = document) || void 0 === EW ? void 0 : EW.querySelectorAll(mW.selector);
                null == NW || NW.forEach((WW => {
                  const iW = WW;
                  mW.html && (iW.innerHTML = mW.html), mW.css && iW.setAttribute("style", mW.css)
                }))
              }
            })) : WW._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return WO && this._instance ? WZ(WO, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, ol),
      Xl = {
        conversations: class {
          constructor(WW) {
            this._instance = WW, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(WW) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = WW.ok, !WW.ok) return;
            const iW = WW.config.conversations;
            nO(iW) || (dO(iW) ? this._isConversationsEnabled = iW : (this._isConversationsEnabled = iW.enabled, this._remoteConfig = iW), this.loadIfEnabled())
          }
          reset() {
            var WW;
            null === (WW = this._conversationsManager) || void 0 === WW || WW.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (FP(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const WW = null == wO ? void 0 : wO.__PosthogExtensions__;
            if (WW && !TO(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const iW = WW.initConversations;
                  if (iW) return this._completeInitialization(iW), void(this._isInitializing = !1);
                  const OW = WW.loadExternalDependency;
                  if (!OW) return void this._handleLoadError(Xi);
                  OW(this._instance, "conversations", (iW => {
                    iW || !WW.initConversations ? this._handleLoadError("Could not load conversations script", iW) : this._completeInitialization(WW.initConversations), this._isInitializing = !1
                  }))
                } catch (WW) {
                  this._handleLoadError("Error initializing conversations", WW), this._isInitializing = !1
                }
              } else El.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(WW) {
            if (this._remoteConfig) try {
              this._conversationsManager = WW(this._remoteConfig, this._instance), this._loadFailed = !1, El.info("Conversations loaded successfully")
            } catch (WW) {
              this._handleLoadError("Error completing conversations initialization", WW)
            } else El.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(WW, iW) {
            El.error(WW, iW), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : El.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !HO(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : FP(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : TO(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? nO(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == wO ? void 0 : wO.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var WW, iW;
            return null !== (WW = null === (iW = this._conversationsManager) || void 0 === iW ? void 0 : iW.isVisible()) && void 0 !== WW && WW
          }
          sendMessage(WW, iW, OW) {
            var mW = this;
            return RO((function*() {
              return mW._conversationsManager ? mW._conversationsManager.sendMessage(WW, iW, OW) : (El.warn(Nl), null)
            }))()
          }
          getMessages(WW, iW) {
            var OW = this;
            return RO((function*() {
              return OW._conversationsManager ? OW._conversationsManager.getMessages(WW, iW) : (El.warn(Nl), null)
            }))()
          }
          markAsRead(WW) {
            var iW = this;
            return RO((function*() {
              return iW._conversationsManager ? iW._conversationsManager.markAsRead(WW) : (El.warn(Nl), null)
            }))()
          }
          getTickets(WW) {
            var iW = this;
            return RO((function*() {
              return iW._conversationsManager ? iW._conversationsManager.getTickets(WW) : (El.warn(Nl), null)
            }))()
          }
          requestRestoreLink(WW) {
            var iW = this;
            return RO((function*() {
              return iW._conversationsManager ? iW._conversationsManager.requestRestoreLink(WW) : (El.warn(Nl), null)
            }))()
          }
          restoreFromToken(WW) {
            var iW = this;
            return RO((function*() {
              return iW._conversationsManager ? iW._conversationsManager.restoreFromToken(WW) : (El.warn(Nl), null)
            }))()
          }
          restoreFromUrlToken() {
            var WW = this;
            return RO((function*() {
              return WW._conversationsManager ? WW._conversationsManager.restoreFromUrlToken() : (El.warn(Nl), null)
            }))()
          }
          getCurrentTicketId() {
            var WW, iW;
            return null !== (WW = null === (iW = this._conversationsManager) || void 0 === iW ? void 0 : iW.getCurrentTicketId()) && void 0 !== WW ? WW : null
          }
          getWidgetSessionId() {
            var WW, iW;
            return null !== (WW = null === (iW = this._conversationsManager) || void 0 === iW ? void 0 : iW.getWidgetSessionId()) && void 0 !== WW ? WW : null
          }
          _onIdentityChanged() {
            var WW;
            null === (WW = this._conversationsManager) || void 0 === WW || WW.setIdentity()
          }
          _onIdentityCleared() {
            var WW;
            null === (WW = this._conversationsManager) || void 0 === WW || WW.clearIdentity()
          }
        }
      },
      Bl = {
        logs: class extends ll {
          constructor(WW) {
            super({
              get() {
                var iW;
                return null == WW || null === (iW = WW.config) || void 0 === iW ? void 0 : iW.logs
              },
              captureHintKey: XW,
              get remoteConfigWillArrive() {
                var iW, OW;
                return !(null === (iW = WW._shouldDisableFlags) || void 0 === iW ? void 0 : iW.call(WW)) || !!(null === (OW = wO._POSTHOG_REMOTE_CONFIG) || void 0 === OW || null === (OW = OW[WW.config.token]) || void 0 === OW ? void 0 : OW.config)
              }
            }, (() => function(WW) {
              var iW;
              const OW = {};
              if (OW.distinctId = WW.get_distinct_id(), WW.sessionManager) {
                const {
                  sessionId: iW,
                  windowId: mW,
                  sessionStartTimestamp: EW,
                  lastActivityTimestamp: NW
                } = WW.sessionManager.checkAndGetSessionAndWindowId(!0);
                OW.sessionId = iW, OW.windowId = mW, nO(EW) || (OW.sessionStartTimestamp = EW), nO(NW) || (OW.lastActivityTimestamp = NW)
              }
              if ((null == wO || null === (iW = wO.location) || void 0 === iW ? void 0 : iW.href) && (OW.currentUrl = WW.config.disable_capture_url_hashes ? lE(wO.location.href) : wO.location.href), WW.featureFlags) {
                const iW = WW.featureFlags.getFlags();
                iW && iW.length > 0 && (OW.activeFeatureFlags = iW)
              }
              return OW
            }(WW))), this._instance = WW, this.name = YZ, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const WW = fP("[logs]"),
              iW = null == wO ? void 0 : wO.__PosthogExtensions__;
            if (!iW) return void WW.error("PostHog Extensions not found.");
            const OW = iW.loadExternalDependency;
            if (OW) return WW => {
              OW(this._instance, "logs", (OW => {
                const mW = iW.logs;
                WW(OW, (null == mW ? void 0 : mW.initializeLogs) ? {
                  initialize: WW => mW.initializeLogs(WW),
                  replay(WW, iW) {
                    var OW;
                    return null === (OW = mW.replayConsoleBuffer) || void 0 === OW ? void 0 : OW.call(mW, WW, iW)
                  }
                } : void 0)
              }))
            };
            WW.error(Xi)
          }
        }
      },
      ql = {
        metrics: class {
          constructor(WW) {
            this._instance = WW, this._logger = fP("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var WW;
            if (this._disposed) return;
            const iW = !!(null === (WW = this._instance.config.metrics) || void 0 === WW ? void 0 : WW.network);
            iW && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (WW => {
              let iW = !0;
              const OW = () => iW ? (WW => {
                  var iW;
                  const OW = null === (iW = WW.config.metrics) || void 0 === iW ? void 0 : iW.network;
                  return !0 === OW ? {} : OW || void 0
                })(WW) : void 0,
                mW = Kl(WW, OW),
                EW = Sl(WW, OW);
              return () => {
                iW = !1, mW(), EW()
              }
            })(this._instance) : !iW && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var WW;
            const iW = null === (WW = this._instance) || void 0 === WW || null === (WW = WW.config) || void 0 === WW ? void 0 : WW.metrics;
            var OW;
            return this._core && this._resolvedFrom === iW || (null === (OW = this._core) || void 0 === OW || OW.reset(), this._resolvedFrom = iW, this._core = new DP(this._createHost(), function(WW) {
              var iW, OW, mW, EW, NW;
              const PW = null == WW ? void 0 : WW.resourceAttributes;
              return {
                serviceName: null !== (iW = null == PW ? void 0 : PW["service.name"]) && void 0 !== iW ? iW : null == WW ? void 0 : WW.serviceName,
                serviceVersion: null !== (OW = null == PW ? void 0 : PW["service.version"]) && void 0 !== OW ? OW : null == WW ? void 0 : WW.serviceVersion,
                environment: null !== (mW = null == PW ? void 0 : PW["deployment.environment"]) && void 0 !== mW ? mW : null == WW ? void 0 : WW.environment,
                resourceAttributes: PW,
                beforeSend: null == WW ? void 0 : WW.beforeSend,
                flushIntervalMs: null !== (EW = null == WW ? void 0 : WW.flushIntervalMs) && void 0 !== EW ? EW : 1e4,
                maxSeriesPerFlush: null !== (NW = null == WW ? void 0 : WW.maxSeriesPerFlush) && void 0 !== NW ? NW : 1e3
              }
            }(iW), this._logger)), this._core
          }
          count(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              OW = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(WW, iW, OW)
          }
          gauge(WW, iW, OW) {
            this._getCore().gauge(WW, iW, OW)
          }
          histogram(WW, iW, OW) {
            this._getCore().histogram(WW, iW, OW)
          }
          flush(WW) {
            if (!this._core) return Promise.resolve();
            if (WW) {
              const iW = this._core.drainWindow();
              return iW && this._sendMetricsBatch(iW, WW), Promise.resolve()
            }
            return this._core.flush().catch((WW => this._logger.error("PostHog metrics flush failed:", WW)))
          }
          reset() {
            var WW;
            null === (WW = this._core) || void 0 === WW || WW.reset()
          }
          dispose() {
            var WW, iW;
            this._disposed = !0, null === (WW = this._stopNetworkMetrics) || void 0 === WW || WW.call(this), this._stopNetworkMetrics = void 0, null === (iW = this._core) || void 0 === iW || iW.reset()
          }
          _createHost() {
            const WW = this._instance,
              iW = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !WW.is_capturing()
              },
              _sendMetricsBatch: WW => iW._sendMetricsBatch(WW),
              getLibraryId: () => NW.LIB_NAME,
              getLibraryVersion: () => NW.LIB_VERSION
            }
          }
          _sendMetricsBatch(WW, iW) {
            return new Promise((OW => {
              let mW = !1;
              const EW = WW => {
                  mW || (mW = !0, clearTimeout(NW), OW(WW))
                },
                NW = setTimeout((() => EW({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(KE(KE({
                method: "POST",
                url: this._metricsUrl(),
                data: WW,
                compression: "best-available",
                batchKey: "metrics"
              }, iW && {
                transport: iW
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(WW) {
                  const iW = WW.statusCode;
                  if (iW >= 200 && 300 > iW) EW({
                    kind: "ok"
                  });
                  else if (413 === iW) EW({
                    kind: "too-large"
                  });
                  else if (0 !== iW && 408 !== iW && 429 !== iW && 500 > iW) EW({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${iW}`)
                  });
                  else {
                    var OW;
                    EW({
                      kind: "retry-later",
                      error: null !== (OW = WW.error) && void 0 !== OW ? OW : new Error(`metrics request failed with status ${iW}`)
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
      Rl = {
        webMCP: class {
          constructor(WW) {
            this._instance = WW, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const WW = null == iO ? void 0 : iO.modelContext;
            if (!WW || !SO(WW.registerTool)) return;
            const iW = Yl.get(WW);
            if (iW) return iW.instances.add(this._instance), void(this._isPatched = !0);
            const OW = {
                instances: new Set([this._instance])
              },
              mW = WW.registerTool,
              EW = this;
            Px(WW, "registerTool", (WW => {
              const iW = WW;
              return function(WW) {
                let mW = WW;
                for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
                try {
                  mW = EW._wrapTool(WW, OW)
                } catch (OW) {
                  return iW.call(this, WW, ...PW)
                }
                return iW.call(this, mW, ...PW)
              }
            })), WW.registerTool !== mW && (Yl.set(WW, OW), this._isPatched = !0)
          }
          _wrapTool(WW, iW) {
            if (!WW || !SO(WW.execute)) return WW;
            const OW = WW.execute,
              mW = this,
              {
                tool: EW,
                injected: NW
              } = function(WW, iW) {
                const OW = {
                    intent: !1,
                    model: !1
                  },
                  mW = WW.inputSchema;
                if (! function(WW) {
                    return !!TO(WW) || YO(WW) && Object.keys(WW).every((WW => yl.has(WW) || WW.startsWith("x-"))) && !0 !== WW.additionalProperties && !YO(WW.additionalProperties) && (!WW.type || "object" === WW.type) && (!WW.properties || YO(WW.properties)) && (!WW.required || KO(WW.required))
                  }(mW)) return {
                  tool: Hl(WW),
                  injected: OW
                };
                const EW = (null == mW ? void 0 : mW.properties) || {},
                  NW = WW => hl(EW, WW) || KO(null == mW ? void 0 : mW.required) && mW.required.includes(WW);
                if (OW.intent = iW.intent && !NW("context"), OW.model = iW.model && !NW("llm_model"), !OW.intent && !OW.model) return {
                  tool: Hl(WW),
                  injected: OW
                };
                const PW = KE({}, EW),
                  LW = KO(null == mW ? void 0 : mW.required) ? [...mW.required] : [];
                return OW.intent && (PW.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, LW.includes("context") || LW.push("context")), OW.model && (PW.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, LW.includes("llm_model") || LW.push("llm_model")), {
                  tool: Hl(WW, KE(KE({}, mW), {}, {
                    type: (null == mW ? void 0 : mW.type) || "object",
                    properties: PW,
                    required: LW
                  })),
                  injected: OW
                }
              }(WW, function(WW) {
                const iW = {
                  intent: !1,
                  model: !1
                };
                for (const OW of WW.instances) {
                  const WW = Jl(OW.config.capture_webmcp);
                  iW.intent || (iW.intent = !0 === (null == WW ? void 0 : WW.intent)), iW.model || (iW.model = !0 === (null == WW ? void 0 : WW.model))
                }
                return iW
              }(iW));
            return Object.defineProperty(EW, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var PW = arguments.length, LW = new Array(PW), cW = 0; cW < PW; cW++) LW[cW] = arguments[cW];
                const wW = new Date,
                  tW = function(WW, iW) {
                    if (!YO(WW)) return {};
                    try {
                      const OW = iW.intent ? nl(WW.context, 2048, !0) : void 0,
                        mW = iW.model ? nl(WW.llm_model, 256) : void 0;
                      return KE(KE({}, OW && "{}" !== OW ? {
                        intent: OW
                      } : {}), mW && "unknown" !== mW.toLowerCase() ? {
                        model: mW
                      } : {})
                    } catch (WW) {
                      return {}
                    }
                  }(LW[0], NW),
                  ZW = function(WW, iW) {
                    const OW = WW[0];
                    if (!YO(OW)) return WW;
                    try {
                      const mW = iW.intent && hl(OW, "context"),
                        EW = iW.model && hl(OW, "llm_model");
                      if (!mW && !EW) return WW;
                      const NW = KE({}, OW);
                      return mW && delete NW.context, EW && delete NW.llm_model, [NW, ...WW.slice(1)]
                    } catch (iW) {
                      return WW
                    }
                  }(LW, NW);
                let xW;
                try {
                  xW = OW.apply(this === EW ? WW : this, ZW)
                } catch (WW) {
                  throw mW._captureToolCall(iW, EW, wW, !0, tW), WW
                }
                return (lW = xW) && "function" == typeof lW.then ? Promise.resolve(xW).then((WW => (mW._captureToolCall(iW, EW, wW, ul(WW), tW), WW)), (WW => {
                  throw mW._captureToolCall(iW, EW, wW, !0, tW), WW
                })) : (mW._captureToolCall(iW, EW, wW, ul(xW), tW), xW);
                var lW
              }
            }), EW
          }
          _captureToolCall(WW, iW, OW, mW, EW) {
            const NW = Date.now() - OW.getTime();
            for (const PW of WW.instances) {
              const LW = Jl(PW.config.capture_webmcp);
              if (LW) try {
                PW.capture("$mcp_tool_call", KE(KE({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: iW.name,
                  $mcp_resource_name: iW.name,
                  $mcp_tool_description: iW.description,
                  $mcp_server_name: null == OO ? void 0 : OO.hostname,
                  $mcp_duration_ms: NW,
                  $mcp_is_error: mW
                }, LW.intent && EW.intent ? {
                  $mcp_intent: EW.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), LW.model && EW.model ? {
                  $mcp_llm_model: EW.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: OW
                })
              } catch (WW) {
                continue
              }
            }
          }
        }
      };
    aZ.__defaultExtensionClasses = KE({}, KE(KE(KE(KE(KE(KE(KE(KE(KE(KE(KE(KE(KE(KE({}, ol), dl), el), vl), gl), Dl), pl), Vl), fl), Cl), Xl), Bl), ql), Rl));
    const Gl = function() {
      NW.SDK_DIST_CHANNEL = "npm";
      const WW = hZ[XZ] = new aZ;
      return function() {
        function WW() {
          WW.done || (WW.done = !0, ft = !1, XP(hZ, (function(WW) {
            WW._dom_loaded()
          })))
        }(null == iO ? void 0 : iO.addEventListener) ? "complete" === iO.readyState ? WW() : zP(iO, "DOMContentLoaded", WW, {
          capture: !1
        }): Fi && pP.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), WW
    }()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);