export const id = 271;
export const ids = [271];
export const modules = {
  40667: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => gD,
      e: () => nI
    });
    const cU = "0.9.4",
      yU = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: cU
      };
    var QU = yU;
    const AU = "$early_access_features",
      FU = "$active_feature_flags",
      oU = "$feature_flag_details",
      DU = "$feature_flag_errors",
      EU = "$feature_flag_evaluated_at",
      YU = "$feature_flag_request_id",
      NU = "$minimal_flag_called_events",
      IU = "$enabled_feature_flags",
      pU = "$stored_group_properties",
      aU = "$stored_person_properties",
      tU = "$flag_call_reported",
      gU = "$flag_call_reported_session_id",
      kU = "$feature_flag_payloads",
      GU = "$override_feature_flags",
      BU = "$override_feature_flag_payloads",
      ZU = "visibilitychange",
      RU = "$people_distinct_id",
      PU = "distinct_id",
      WU = "$device_id",
      dU = "$device_model",
      LU = "__alias",
      eU = "__cmpns",
      CU = "$fbc",
      wU = "$fbc_persistence",
      qU = "$fbp",
      OU = "$fbp_persistence",
      SU = "__timers",
      rU = "$autocapture_disabled_server_side",
      uU = "$heatmaps_enabled_server_side",
      fU = "$exception_capture_enabled_server_side",
      iU = "$error_tracking_suppression_rules",
      HU = "$error_tracking_capture_extension_exceptions",
      MU = "$web_vitals_enabled_server_side",
      vU = "$dead_clicks_enabled_server_side",
      VU = "$product_tours_enabled_server_side",
      sU = "$logs_capture_enabled_server_side",
      nU = "$web_vitals_allowed_metrics",
      mU = "$session_recording_remote_config",
      lU = "$session_recording_enabled_server_side",
      xU = "$replay_sample_rate",
      JU = "$replay_override_sampling",
      jU = "$replay_override_linked_flag",
      KU = "$replay_override_url_trigger",
      bU = "$replay_override_event_trigger",
      TU = "$sesid",
      hU = "$session_is_sampled",
      UX = "$session_past_minimum_duration",
      XX = "$session_recording_url_trigger_activated_session",
      zX = "$session_recording_event_trigger_activated_session",
      cX = "$debug_first_full_snapshot_timestamp",
      yX = "$sess_rec_flush_size",
      QX = "$groups",
      AX = "$surveys",
      FX = "$surveys_loaded_at",
      oX = "$surveys_activated",
      DX = "$surveys_activated_session",
      EX = "$surveys_activated_timestamps",
      YX = "ph_product_tours",
      NX = "$product_tours_activated",
      IX = "$product_tours_activated_session",
      pX = "$conversations_widget_session_id",
      aX = "$conversations_ticket_id",
      tX = "$conversations_widget_state",
      gX = "$conversations_user_traits",
      kX = "$user_state",
      GX = "$client_session_props",
      BX = "$capture_rate_limit",
      ZX = "$initial_campaign_params",
      RX = "$initial_referrer_info",
      PX = "$initial_person_info",
      WX = "$epp",
      dX = "$posthog_cookieless",
      LX = "$cookieless_mode",
      eX = "$sdk_debug_extensions_init_method",
      CX = "$sdk_debug_extensions_init_time_ms",
      wX = "$sdk_debug_recording_script_not_loaded",
      qX = "$sdk_debug_replay_stale_config",
      OX = "$sdk_debug_replay_event_trigger_status",
      SX = "$sdk_debug_replay_linked_flag_trigger_status",
      rX = "$sdk_debug_replay_matched_recording_trigger_groups",
      uX = "$sdk_debug_replay_pending_trigger_conditions",
      fX = "$sdk_debug_replay_remote_trigger_matching_config",
      iX = "$sdk_debug_replay_trigger_groups_count",
      HX = "$sdk_debug_replay_url_trigger_status",
      MX = "$session_recording_start_reason",
      vX = "PostHog loadExternalDependency extension not found.",
      VX = "anonymous",
      sX = "identified",
      nX = "identified_only",
      mX = "beforeunload",
      lX = "$pageview",
      xX = "$pageleave",
      JX = "$identify",
      jX = "$groupidentify",
      KX = "u" > typeof window ? window : void 0,
      bX = "u" > typeof globalThis ? globalThis : KX,
      TX = null == bX ? void 0 : bX.navigator,
      hX = null == bX ? void 0 : bX.document,
      Uz = null == bX ? void 0 : bX.location,
      Xz = null == bX ? void 0 : bX.fetch,
      zz = (null == bX ? void 0 : bX.XMLHttpRequest) && "withCredentials" in new bX.XMLHttpRequest ? bX.XMLHttpRequest : void 0,
      cz = null == bX ? void 0 : bX.AbortController,
      yz = null == bX ? void 0 : bX.CompressionStream,
      Qz = null == TX ? void 0 : TX.userAgent,
      Az = "undefined" != typeof globalThis ? globalThis : KX;
    Az && "undefined" == typeof self && (Az.self = Az), Az && "undefined" == typeof File && (Az.File = function() {});
    const Fz = null != KX ? KX : {};
    var oz = function(UU) {
        return UU.AnonymousId = "anonymous_id", UU.DistinctId = "distinct_id", UU.Props = "props", UU.EnablePersonProcessing = "enable_person_processing", UU.PersonMode = "person_mode", UU.FeatureFlagDetails = "feature_flag_details", UU.FeatureFlags = "feature_flags", UU.FeatureFlagPayloads = "feature_flag_payloads", UU.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", UU.BootstrapFeatureFlags = "bootstrap_feature_flags", UU.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", UU.OverrideFeatureFlags = "override_feature_flags", UU.Queue = "queue", UU.AiQueue = "ai_queue", UU.AiCaptureQueue = "ai_capture_queue", UU.LogsQueue = "logs_queue", UU.OptedOut = "opted_out", UU.SessionId = "session_id", UU.SessionStartTimestamp = "session_start_timestamp", UU.SessionLastTimestamp = "session_timestamp", UU.PersonProperties = "person_properties", UU.GroupProperties = "group_properties", UU.InstalledAppBuild = "installed_app_build", UU.InstalledAppVersion = "installed_app_version", UU.SessionReplay = "session_replay", UU.PushRegistered = "push_registered", UU.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", UU.SurveyLastSeenDate = "survey_last_seen_date", UU.SurveysInProgress = "surveys_in_progress", UU.SurveysSeen = "surveys_seen", UU.Surveys = "surveys", UU.RemoteConfig = "remote_config", UU.FlagsEndpointWasHit = "flags_endpoint_was_hit", UU.DeviceId = "device_id", UU
      }({}),
      Dz = function(UU) {
        return UU.GZipJS = "gzip-js", UU.Base64 = "base64", UU
      }({});
    const Ez = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      Yz = ["token"];

    function Nz(UU, XU) {
      return -1 !== UU.indexOf(XU)
    }
    const Iz = function(UU) {
        return UU.trim()
      },
      pz = function(UU) {
        return UU.replace(/^\$/, "")
      };

    function az(UU) {
      var XU;
      const zU = [];
      return null !== (XU = JSON.stringify(UU, (function(UU, XU) {
        if ("bigint" == typeof XU) return XU.toString();
        if ("function" != typeof XU && "symbol" != typeof XU) {
          if (XU instanceof Error) return {
            name: XU.name,
            message: XU.message,
            stack: XU.stack
          };
          if (XU && "object" == typeof XU) {
            for (; zU.length > 0 && zU[zU.length - 1] !== this;) zU.pop();
            if (zU.includes(XU)) return "[Circular]";
            zU.push(XU)
          }
          return XU
        }
      }))) && void 0 !== XU ? XU : "null"
    }
    const tz = Object.prototype,
      gz = tz.hasOwnProperty,
      kz = tz.toString,
      Gz = Array.isArray || function(UU) {
        return "[object Array]" === kz.call(UU)
      },
      Bz = UU => "function" == typeof UU,
      Zz = UU => UU === Object(UU) && !Gz(UU),
      Rz = UU => {
        if (Zz(UU)) {
          for (const XU in UU)
            if (gz.call(UU, XU)) return !1;
          return !0
        }
        return !1
      },
      Pz = UU => void 0 === UU,
      Wz = UU => "[object String]" == kz.call(UU),
      dz = UU => Wz(UU) && 0 === UU.trim().length,
      Lz = UU => null === UU,
      ez = UU => Pz(UU) || Lz(UU),
      Cz = UU => "[object Number]" == kz.call(UU) && UU == UU,
      wz = UU => Cz(UU) && UU > 0,
      qz = UU => "[object Boolean]" === kz.call(UU),
      Oz = UU => Nz(Ez, UU),
      Sz = UU => Nz(Yz, UU);

    function rz(UU) {
      return null === UU || "object" != typeof UU
    }

    function uz(UU, XU) {
      return {}.toString.call(UU) === `[object ${XU}]`
    }

    function fz(UU) {
      switch ({}.toString.call(UU)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return Hz(UU, Error)
      }
    }

    function iz(UU) {
      return "u" > typeof Event && Hz(UU, Event)
    }

    function Hz(UU, XU) {
      try {
        return UU instanceof XU
      } catch (UU) {
        return !1
      }
    }
    const Mz = [!0, "true", 1, "1", "yes"],
      vz = UU => Nz(Mz, UU),
      Vz = [!1, "false", 0, "0", "no"];

    function sz(UU, XU, zU, cU, yU, QU, AU) {
      try {
        var FU = UU[QU](AU),
          oU = FU.value
      } catch (UU) {
        return void zU(UU)
      }
      FU.done ? XU(oU) : Promise.resolve(oU).then(cU, yU)
    }

    function nz(UU) {
      return function() {
        var XU = this,
          zU = arguments;
        return new Promise((function(cU, yU) {
          var QU = UU.apply(XU, zU);

          function AU(UU) {
            sz(QU, cU, yU, AU, FU, "next", UU)
          }

          function FU(UU) {
            sz(QU, cU, yU, AU, FU, "throw", UU)
          }
          AU(void 0)
        }))
      }
    }
    const mz = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      lz = new Map,
      xz = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!UU) return !1;
        const zU = function(UU, XU) {
            let zU = "";
            for (let cU = 0; XU.length > cU; cU++) {
              const UU = XU[cU];
              zU += UU.length + ":" + UU
            }
            return UU.length + ":" + UU + "|" + XU.length + ":" + zU
          }(UU, XU),
          cU = lz.get(zU);
        if (void 0 !== cU) return cU;
        const yU = UU.toLowerCase(),
          QU = mz.concat(XU).some((UU => -1 !== yU.indexOf(UU.toLowerCase())));
        return 256 > lz.size || lz.clear(), lz.set(zU, QU), QU
      };

    function Jz(UU, XU, zU, cU, yU) {
      return XU > zU && (cU.warn("min cannot be greater than max."), XU = zU), Cz(UU) ? UU > zU ? (cU.warn(" cannot be  greater than max: " + zU + ". Using max value instead."), zU) : XU > UU ? (cU.warn(" cannot be less than min: " + XU + ". Using min value instead."), XU) : UU : (cU.warn(" must be a number. using max or fallback. max: " + zU + ", fallback: " + yU), Jz(null != yU ? yU : zU, XU, zU, cU))
    }
    var jz = class {
      constructor(UU) {
        this._buckets = {}, this._onBucketRateLimited = UU._onBucketRateLimited, this._bucketSize = Jz(UU.bucketSize, 0, 100, UU._logger), this._refillRate = Jz(UU.refillRate, 0, this._bucketSize, UU._logger), this._refillInterval = Jz(UU.refillInterval, 0, 864e5, UU._logger)
      }
      _applyRefill(UU, XU) {
        const zU = Math.floor((XU - UU.lastAccess) / this._refillInterval);
        zU > 0 && (UU.tokens = Math.min(UU.tokens + zU * this._refillRate, this._bucketSize), UU.lastAccess = UU.lastAccess + zU * this._refillInterval)
      }
      consumeRateLimit(UU) {
        var XU;
        const zU = Date.now(),
          cU = String(UU);
        let yU = this._buckets[cU];
        return yU ? this._applyRefill(yU, zU) : (yU = {
          tokens: this._bucketSize,
          lastAccess: zU
        }, this._buckets[cU] = yU), 0 === yU.tokens || (yU.tokens--, 0 === yU.tokens && (null === (XU = this._onBucketRateLimited) || void 0 === XU || XU.call(this, UU)), 0 === yU.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const Kz = "Mobile",
      bz = "Android",
      Tz = "Tablet",
      hz = "Android Tablet",
      Uc = "iPad",
      Xc = "Apple Watch",
      zc = "Safari",
      cc = "BlackBerry",
      yc = "Samsung Internet",
      Qc = "Chrome",
      Ac = "Chrome iOS",
      Fc = "Internet Explorer",
      oc = "Internet Explorer Mobile",
      Dc = "Opera",
      Ec = "Microsoft Edge",
      Yc = "Firefox",
      Nc = "Firefox iOS",
      Ic = "Nintendo",
      pc = "PlayStation",
      ac = "Xbox",
      tc = "Android Mobile",
      gc = "Mobile Safari",
      kc = "Windows",
      Gc = "Windows Phone",
      Bc = "Nokia",
      Zc = "Ouya",
      Rc = "Generic " + Kz.toLowerCase(),
      Pc = "Generic " + Tz.toLowerCase(),
      Wc = "Konqueror",
      dc = "Oculus Browser",
      Lc = "Vivaldi",
      ec = "Yandex",
      Cc = "Whale",
      wc = "DuckDuckGo",
      qc = "Pale Moon",
      Oc = "Waterfox",
      Sc = "Brave",
      rc = "Claude",
      uc = "Codex",
      fc = "ChatGPT",
      ic = "Google Search App",
      Hc = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      Mc = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      vc = new RegExp(ac, "i"),
      Vc = new RegExp("PlayStation \\w+", "i"),
      sc = new RegExp("Nintendo \\w+", "i"),
      nc = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      mc = {
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
      lc = function(UU, XU, zU, cU) {
        XU = XU || "";
        const yU = function(UU) {
          return (null == UU ? void 0 : UU.brave) ? Sc : null
        }(zU);
        return yU || ((null == cU ? void 0 : cU.detectGoogleSearchApp) && Nz(UU, "GSA/") ? ic : Nz(UU, " OPR/") && Nz(UU, "Mini") ? "Opera Mini" : Nz(UU, " OPR/") ? Dc : nc.test(UU) ? cc : Nz(UU, "IEMobile") || Nz(UU, "WPDesktop") ? oc : Nz(UU, "OculusBrowser") ? dc : Nz(UU, "SamsungBrowser") ? yc : Nz(UU, "Edge") || Nz(UU, "Edg/") ? Ec : Nz(UU, "Vivaldi/") ? Lc : Nz(UU, "YaBrowser/") ? ec : Nz(UU, "Whale/") ? Cc : Nz(UU, "DuckDuckGo/") || Nz(UU, "Ddg/") ? wc : Nz(UU, "Claude/") ? rc : Nz(UU, "Codex/") ? uc : Nz(UU, "ChatGPT/") ? fc : Nz(UU, "FBIOS") ? "Facebook Mobile" : Nz(UU, "UCWEB") || Nz(UU, "UCBrowser") ? "UC Browser" : Nz(UU, "CriOS") ? Ac : Nz(UU, "CrMo") || Nz(UU, Qc) ? Qc : Nz(UU, bz) && Nz(UU, zc) ? tc : Nz(UU, "FxiOS") ? Nc : Nz(UU.toLowerCase(), Wc.toLowerCase()) ? Wc : Nz(UU, "Brave/") ? Sc : ((UU, XU) => XU && Nz(XU, "Apple") || function(UU) {
          return Nz(UU, zc) && !Nz(UU, Qc) && !Nz(UU, bz)
        }(UU))(UU, XU) ? Nz(UU, Kz) ? gc : zc : Nz(UU, "PaleMoon/") ? qc : Nz(UU, "Waterfox/") ? Oc : Nz(UU, Yc) ? Yc : Nz(UU, "MSIE") || Nz(UU, "Trident/") ? Fc : Nz(UU, "Gecko") ? Yc : "")
      },
      xc = {
        [oc]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [Ec]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [Qc]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [Ac]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [zc]: [Hc],
        [gc]: [Hc],
        [Dc]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [Yc]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [Nc]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [Wc]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [cc]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), Hc],
        [tc]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [yc]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [dc]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [Lc]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [ec]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [Cc]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [Sc]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [rc]: [Mc],
        [uc]: [Mc],
        [fc]: [Mc],
        [wc]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [qc]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [Oc]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [ic]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [Fc]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      Jc = function(UU, XU, zU, cU) {
        const yU = lc(UU, XU, zU, cU),
          QU = xc[yU];
        if (Pz(QU)) return null;
        for (let AU = 0; QU.length > AU; AU++) {
          const XU = UU.match(QU[AU]);
          if (XU) return parseFloat(XU[XU.length - 2])
        }
        return null
      },
      jc = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), UU => [ac, UU && UU[1] || ""]],
        [new RegExp(Ic, "i"), [Ic, ""]],
        [new RegExp(pc, "i"), [pc, ""]],
        [nc, [cc, ""]],
        [new RegExp(kc, "i"), (UU, XU) => {
          if (/Phone/.test(XU) || /WPDesktop/.test(XU)) return [Gc, ""];
          if (new RegExp(Kz).test(XU) && !/IEMobile\b/.test(XU)) return ["Windows Mobile", ""];
          const zU = /Windows NT ([0-9.]+)/i.exec(XU);
          if (zU && zU[1]) {
            let UU = mc[zU[1]] || "";
            return /arm/i.test(XU) && (UU = "RT"), [kc, UU]
          }
          return [kc, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, UU => UU && UU[3] ? ["iOS", [UU[3], UU[4], UU[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, UU => {
          let XU = "";
          return UU && UU.length >= 3 && (XU = Pz(UU[2]) ? UU[3] : UU[2]), ["watchOS", XU]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), UU => UU && UU[2] ? [bz, [UU[2], UU[3], UU[4] || "0"].join(".")] : [bz, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, UU => {
          const XU = ["Mac OS X", ""];
          return UU && UU[1] && (XU[1] = [UU[1], UU[2], UU[3] || "0"].join(".")), XU
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      Kc = function(UU) {
        for (let XU = 0; jc.length > XU; XU++) {
          const [zU, cU] = jc[XU], yU = zU.exec(UU), QU = yU && (Bz(cU) ? cU(yU, UU) : cU);
          if (QU) return QU
        }
        return ["", ""]
      },
      bc = function(UU) {
        return sc.test(UU) ? Ic : Vc.test(UU) ? pc : vc.test(UU) ? ac : new RegExp(Zc, "i").test(UU) ? Zc : new RegExp("(Windows Phone|WPDesktop)", "i").test(UU) ? Gc : /iPad/.test(UU) ? Uc : /iPod/.test(UU) ? "iPod Touch" : /iPhone/.test(UU) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(UU) ? Xc : nc.test(UU) ? cc : /(kobo)\s(ereader|touch)/i.test(UU) ? "Kobo" : new RegExp(Bc, "i").test(UU) ? Bc : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(UU) || /(kf[a-z]+)( bui|\)).+silk\//i.test(UU) ? "Kindle Fire" : /(Android|ZTE)/i.test(UU) ? new RegExp(Kz).test(UU) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(UU) || /pixel[\daxl ]{1,6}/i.test(UU) && !/pixel c/i.test(UU) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(UU) || /lmy47v/i.test(UU) && !/QTAQZ3/i.test(UU) ? bz : hz : new RegExp("(pda|Mobile)", "i").test(UU) ? Rc : new RegExp(Tz, "i").test(UU) && !new RegExp("Tablet pc", "i").test(UU) ? Pc : ""
      },
      Tc = function(UU, XU) {
        var zU;
        const cU = bc(UU);
        return cU === Uc || cU === hz || "Kobo" === cU || "Kindle Fire" === cU || cU === Pc ? Tz : cU === Ic || cU === ac || cU === pc || cU === Zc ? "Console" : cU === Xc ? "Wearable" : cU ? Kz : "Android" === (null == XU ? void 0 : XU.userAgentDataPlatform) && (null !== (zU = null == XU ? void 0 : XU.maxTouchPoints) && void 0 !== zU ? zU : 0) > 0 ? 600 > Math.min(null !== (yU = null == XU ? void 0 : XU.screenWidth) && void 0 !== yU ? yU : 0, null !== (QU = null == XU ? void 0 : XU.screenHeight) && void 0 !== QU ? QU : 0) / (null !== (AU = null == XU ? void 0 : XU.devicePixelRatio) && void 0 !== AU ? AU : 1) ? Kz : Tz : "Desktop";
        var yU, QU, AU
      },
      hc = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      Uy = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", hc],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", hc],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", hc],
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
      Xy = "[Truncated]",
      zy = "[Unserializable]";

    function cy(UU) {
      let XU = "";
      for (let zU = 0; UU.length > zU; zU++) {
        const cU = UU.charCodeAt(zU);
        if (55296 > cU || cU > 56319) XU += 56320 > cU || cU > 57343 ? UU[zU] : "\ufffd";
        else {
          const cU = UU.charCodeAt(zU + 1);
          56320 > cU || cU > 57343 ? XU += "\ufffd" : (XU += UU[zU] + UU[zU + 1], zU++)
        }
      }
      return XU
    }

    function yy(UU, XU) {
      if (!XU) return UU;
      let zU = [];
      try {
        zU = Object.keys(XU)
      } catch (UU) {
        zU = []
      }
      for (const cU of zU) {
        let zU;
        try {
          zU = XU[cU]
        } catch (UU) {
          zU = zy
        }
        Object.defineProperty(UU, cU, {
          value: zU,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return UU
    }
    Date, Date;
    const Qy = 3e5;
    var Ay = class {
      record(UU) {
        if ("too-large" === UU.kind) return;
        if ("retry-later" !== UU.kind) return void this.reset();
        if (!UU.retryAfterMs) return;
        const XU = this.isOpen(),
          zU = Date.now(),
          cU = Math.min(UU.retryAfterMs, Qy);
        if (!XU) return this._installedAt = zU, void(this._until = zU + cU);
        this._until = Math.max(this._until, Math.min(zU + cU, this._installedAt + Qy))
      }
      remainingMs() {
        const UU = Date.now();
        if (this._installedAt - 5e3 > UU) return this.reset(), 0;
        const XU = Math.min(Qy, Math.max(0, this._until - UU));
        return 0 === XU && this.reset(), XU
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
    const Fy = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function oy(UU, XU) {
      return "string" == typeof(zU = UU) && Fy.test(zU) ? UU : XU();
      var zU
    }

    function Dy(UU, XU) {
      const zU = new Error(XU);
      try {
        Object.defineProperty(zU, "name", {
          value: UU,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (UU) {}
      return zU
    }

    function Ey(UU) {
      return UU ? UU.split("#")[0] : UU
    }

    function Yy(UU) {
      try {
        return UU()
      } catch (UU) {
        return
      }
    }

    function Ny(UU, XU) {
      const zU = setTimeout(UU, XU);
      return null != zU && zU.unref && (null == zU || zU.unref()), zU
    }

    function Iy(UU, XU, zU) {
      return py.apply(this, arguments)
    }

    function py() {
      return (py = nz((function*(UU, XU, zU) {
        let cU;
        try {
          return yield Promise.race([UU, new Promise(((UU, yU) => {
            cU = Ny((() => {
              try {
                null == zU || zU(), UU()
              } catch (UU) {
                yU(UU)
              }
            }), XU)
          }))])
        } finally {
          clearTimeout(cU)
        }
      }))).apply(this, arguments)
    }

    function ay(UU) {
      return ay = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
        return typeof UU
      } : function(UU) {
        return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
      }, ay(UU)
    }

    function ty(UU, XU, zU) {
      return (XU = function(UU) {
        var XU = function(UU) {
          if ("object" != ay(UU) || !UU) return UU;
          var XU = UU[Symbol.toPrimitive];
          if (void 0 !== XU) {
            var zU = XU.call(UU, "string");
            if ("object" != ay(zU)) return zU;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(UU)
        }(UU);
        return "symbol" == ay(XU) ? XU : XU + ""
      }(XU)) in UU ? Object.defineProperty(UU, XU, {
        value: zU,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : UU[XU] = zU, UU
    }

    function gy(UU, XU) {
      var zU = Object.keys(UU);
      if (Object.getOwnPropertySymbols) {
        var cU = Object.getOwnPropertySymbols(UU);
        XU && (cU = cU.filter((function(XU) {
          return Object.getOwnPropertyDescriptor(UU, XU).enumerable
        }))), zU.push.apply(zU, cU)
      }
      return zU
    }

    function ky(UU) {
      for (var XU = 1; arguments.length > XU; XU++) {
        var zU = null != arguments[XU] ? arguments[XU] : {};
        XU % 2 ? gy(Object(zU), !0).forEach((function(XU) {
          ty(UU, XU, zU[XU])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : gy(Object(zU)).forEach((function(XU) {
          Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
        }))
      }
      return UU
    }
    let Gy, By, Zy, Ry;

    function Py(UU) {
      var XU;
      const zU = globalThis._posthogChunkIds,
        cU = globalThis._debugIds;
      if (!zU && !cU) return;
      const yU = zU ? Object.keys(zU) : [],
        QU = cU ? Object.keys(cU) : [];
      if (Ry && Wy(zU, yU, By) && Wy(cU, QU, Zy)) return Ry;
      By = zU ? ky({}, zU) : void 0, Zy = cU ? ky({}, cU) : void 0, Ry = {}, null !== (XU = Gy) && void 0 !== XU || (Gy = {});
      const AU = (XU, zU) => {
        for (const yU of XU) {
          const XU = zU[yU];
          if (!XU) continue;
          const QU = null == Gy ? void 0 : Gy[yU];
          if (QU) {
            Ry[QU] = XU;
            continue
          }
          const AU = UU(yU);
          for (let UU = AU.length - 1; UU >= 0; UU--) {
            var cU;
            const zU = null === (cU = AU[UU]) || void 0 === cU ? void 0 : cU.filename;
            if (zU) {
              Ry[zU] = XU, Gy[yU] = zU;
              break
            }
          }
        }
      };
      return cU && AU(QU, cU), zU && AU(yU, zU), Ry
    }

    function Wy(UU, XU, zU) {
      return UU && zU ? XU.length === Object.keys(zU).length && XU.every((XU => UU[XU] === zU[XU])) : UU === zU
    }
    var dy = class {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = UU, this.stackParser = XU, this.modifiers = zU
      }
      buildFromUnknown(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = XU && XU.mechanism || {
            handled: !0,
            type: "generic"
          },
          cU = this.buildCoercingContext(zU, XU, 0).apply(UU),
          yU = this.buildParsingContext(XU),
          QU = this.parseStacktrace(cU, yU);
        return {
          $exception_list: this.convertToExceptionList(QU, zU),
          $exception_level: "error"
        }
      }
      modifyFrames(UU) {
        var XU = this;
        return nz((function*() {
          for (const zU of UU) zU.stacktrace && zU.stacktrace.frames && Gz(zU.stacktrace.frames) && (zU.stacktrace.frames = yield XU.applyModifiers(zU.stacktrace.frames));
          return UU
        }))()
      }
      coerceFallback(UU) {
        var XU;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (XU = UU.syntheticException) || void 0 === XU ? void 0 : XU.stack,
          synthetic: !0
        }
      }
      parseStacktrace(UU, XU) {
        var zU;
        let cU, yU;
        if (null != UU.cause && (cU = this.parseStacktrace(UU.cause, XU)), "" != UU.stack && null != UU.stack) try {
          yU = this.applyChunkIds(this.stackParser(UU.stack, UU.synthetic ? XU.skipFirstLines : 0), XU.chunkIdMap)
        } catch (UU) {}
        return ky(ky({}, UU), {}, {
          cause: cU,
          stack: yU,
          errors: null === (zU = UU.errors) || void 0 === zU ? void 0 : zU.map((UU => this.parseStacktrace(UU, XU)))
        })
      }
      applyChunkIds(UU, XU) {
        return UU.map((UU => (UU.filename && XU && (UU.chunk_id = XU[UU.filename]), UU)))
      }
      applyCoercers(UU, XU) {
        for (const zU of this.coercers)
          if (zU.match(UU)) return zU.coerce(UU, XU);
        return this.coerceFallback(XU)
      }
      applyModifiers(UU) {
        var XU = this;
        return nz((function*() {
          let zU = UU;
          for (const UU of XU.modifiers) zU = yield UU(zU);
          return zU
        }))()
      }
      convertToExceptionList(UU, XU) {
        const zU = [],
          cU = (UU, yU, QU) => {
            var AU;
            const FU = zU.length,
              oU = void 0 === yU ? ky(ky({
                type: "string" == typeof XU.type && XU.type.length > 0 ? XU.type : "generic"
              }, "boolean" == typeof XU.handled ? {
                handled: XU.handled
              } : void 0 === XU.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof XU.synthetic ? XU.synthetic : UU.synthetic,
                exception_id: FU
              }) : {
                type: "chained",
                source: QU,
                synthetic: UU.synthetic,
                exception_id: FU,
                parent_id: yU
              },
              DU = {
                type: UU.type,
                value: UU.value,
                mechanism: oU
              };
            UU.stack && (DU.stacktrace = {
              type: "raw",
              frames: UU.stack
            }), zU.push(DU), UU.cause && cU(UU.cause, FU, "cause");
            for (const XU of null !== (AU = UU.errors) && void 0 !== AU ? AU : []) cU(XU, FU, "member")
          };
        return cU(UU), zU
      }
      buildParsingContext(UU) {
        var XU;
        return {
          chunkIdMap: Py(this.stackParser),
          skipFirstLines: null !== (XU = UU.skipFirstLines) && void 0 !== XU ? XU : 1
        }
      }
      getAggregateErrors(UU) {
        try {
          if (fz(UU)) {
            let zU = Object.getPrototypeOf(UU);
            for (let cU = 0; zU && 100 > cU; cU++) {
              var XU;
              const cU = null === (XU = Object.getOwnPropertyDescriptor(zU, "constructor")) || void 0 === XU ? void 0 : XU.value;
              if ("function" == typeof cU && "AggregateError" === cU.name) {
                const XU = UU.errors;
                return Gz(XU) ? XU : void 0
              }
              zU = Object.getPrototypeOf(zU)
            }
          }
        } catch (UU) {}
      }
      buildCoercingContext(UU, XU) {
        var zU = this;
        let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yU = 0,
          QU = 0,
          AU = !1;
        const FU = new Set,
          oU = [],
          DU = {},
          EU = function(UU, XU) {
            let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const EU = YU(XU, cU),
              NU = EU.apply;
            if (EU.apply = XU => {
                oU.push(UU);
                try {
                  return NU(XU)
                } finally {
                  oU.pop()
                }
              }, cU > 4 || cU > 0 && -1 !== oU.indexOf(UU)) return zU.coerceFallback(EU);
            const IU = "object" == typeof UU && null !== UU || "function" == typeof UU;
            if (0 === cU && yU >= 50 || IU && FU.has(UU)) return;
            IU && FU.add(UU), 0 === cU && yU++;
            const pU = zU.getAggregateErrors(UU);
            let aU, tU;
            AU || (AU = !!pU);
            try {
              if (aU = zU.applyCoercers(UU, EU), !aU) throw DU
            } catch (UU) {
              if (UU === DU) return void(0 === cU && yU--);
              if (!AU) throw UU;
              aU = zU.coerceFallback(EU)
            }
            if (!pU || yU >= 50) return aU;
            try {
              tU = pU.length
            } catch (UU) {
              return aU
            }
            if (!Number.isInteger(tU) || 0 > tU || tU > 4294967295) return aU;
            const gU = [];
            for (let AU = 0; 50 > yU && 1e3 > QU && tU > AU; AU++) {
              let cU;
              QU++;
              try {
                cU = EU.next(pU[AU])
              } catch (UU) {
                yU++, cU = zU.coerceFallback(YU(XU + 1))
              }
              cU && gU.push(cU)
            }
            return ky(ky({}, aU), {}, {
              errors: gU
            })
          },
          YU = function(zU) {
            let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return ky(ky({}, XU), {}, {
              syntheticException: 0 == zU ? XU.syntheticException : void 0,
              mechanism: 0 == zU ? UU : {},
              apply(UU) {
                const XU = EU(UU, zU, cU + 1);
                if (!XU) throw DU;
                return XU
              },
              next: UU => EU(UU, zU + 1)
            })
          },
          NU = YU(cU);
        return ky(ky({}, NU), {}, {
          apply: UU => {
            var XU;
            return null !== (XU = EU(UU, cU)) && void 0 !== XU ? XU : this.coerceFallback(NU)
          }
        })
      }
    };
    const Ly = /^([a-z][a-z0-9.+-]+):/i,
      ey = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function Cy(UU) {
      if (!UU || "<anonymous>" === UU) return !1;
      const XU = Ly.exec(UU);
      return !XU || ey.includes(XU[1].toLowerCase())
    }

    function wy(UU, XU, zU, cU, yU) {
      const QU = {
        platform: UU,
        filename: XU,
        function: "<anonymous>" === zU ? "?" : zU,
        in_app: Cy(XU)
      };
      return Pz(cU) || (QU.lineno = cU), Pz(yU) || (QU.colno = yU), QU
    }
    const qy = (UU, XU) => {
        const zU = -1 !== UU.indexOf("safari-extension"),
          cU = -1 !== UU.indexOf("safari-web-extension");
        return zU || cU ? [-1 !== UU.indexOf("@") ? UU.split("@")[0] : "?", zU ? `safari-extension:${XU}` : `safari-web-extension:${XU}`] : [UU, XU]
      },
      Oy = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      Sy = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ry = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      uy = (UU, XU) => {
        const zU = Oy.exec(UU);
        if (zU) {
          const [, UU, cU, yU] = zU;
          return wy(XU, UU, "?", +cU, +yU)
        }
        const cU = Sy.exec(UU);
        if (cU) {
          if (cU[2] && 0 === cU[2].indexOf("eval")) {
            const UU = ry.exec(cU[2]);
            UU && (cU[2] = UU[1], cU[3] = UU[2], cU[4] = UU[3])
          }
          const [UU, zU] = qy(cU[1] || "?", cU[2]);
          return wy(XU, zU, UU, cU[3] ? +cU[3] : void 0, cU[4] ? +cU[4] : void 0)
        }
      },
      fy = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      iy = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Hy = (UU, XU) => {
        const zU = fy.exec(UU);
        if (zU) {
          if (zU[3] && zU[3].indexOf(" > eval") > -1) {
            const UU = iy.exec(zU[3]);
            UU && (zU[1] = zU[1] || "eval", zU[3] = UU[1], zU[4] = UU[2], zU[5] = "")
          }
          let UU = zU[3],
            cU = zU[1] || "?";
          return [cU, UU] = qy(cU, UU), wy(XU, UU, cU, zU[4] ? +zU[4] : void 0, zU[5] ? +zU[5] : void 0)
        }
      },
      My = /\(error: (.*)\)/;

    function vy(UU, XU) {
      return UU.filename === XU.filename && UU.function === XU.function && UU.module === XU.module && UU.lineno === XU.lineno && UU.colno === XU.colno
    }

    function Vy(UU) {
      for (let XU = 1; 10 >= XU; XU++) {
        const zU = UU.length - 2 * XU;
        if (0 > zU) break;
        let cU = !0;
        for (let yU = 0; XU > yU; yU++)
          if (!vy(UU[zU + yU], UU[zU + XU + yU])) {
            cU = !1;
            break
          } if (cU) {
          for (let cU = 0; XU > cU; cU++) UU[zU + cU] = UU[zU + XU + cU];
          return UU.length = zU + XU, {
            start: zU,
            length: XU
          }
        }
      }
    }

    function sy(UU, XU) {
      const zU = XU.start + XU.length,
        cU = my(UU, XU);
      cU && UU.splice(zU + cU === UU.length ? zU : XU.start, cU)
    }

    function ny(UU, XU) {
      let zU = XU.start;
      for (; zU > 0 && vy(UU[zU - 1], UU[zU - 1 + XU.length]);) zU--;
      return XU.start - zU
    }

    function my(UU, XU) {
      const zU = XU.start + XU.length;
      let cU = zU;
      for (; UU.length > cU && vy(UU[cU], UU[cU - XU.length]);) cU++;
      return cU - zU
    }

    function ly(UU, XU) {
      const zU = XU[0];
      let cU = UU.length - (zU ? ny(UU, zU) : 0);
      for (const yU of XU) cU -= my(UU, yU);
      return cU
    }

    function xy(UU, XU, zU) {
      for (let cU = 0; UU.length > cU; cU++) {
        const yU = UU[(XU + cU) % UU.length],
          QU = UU[(zU + cU) % UU.length];
        if (yU !== QU) return QU > yU
      }
      return !1
    }
    var Jy = class {
        match(UU) {
          return this.isDOMException(UU) || this.isDOMError(UU)
        }
        coerce(UU, XU) {
          const zU = Wz(UU.stack);
          return {
            type: this.getType(UU),
            value: this.getValue(UU),
            stack: zU ? UU.stack : void 0,
            cause: UU.cause ? XU.next(UU.cause) : void 0,
            synthetic: !1
          }
        }
        getType(UU) {
          return this.isDOMError(UU) ? "DOMError" : "DOMException"
        }
        getValue(UU) {
          const XU = UU.name || (this.isDOMError(UU) ? "DOMError" : "DOMException");
          return UU.message ? `${XU}: ${UU.message}` : XU
        }
        isDOMException(UU) {
          return uz(UU, "DOMException")
        }
        isDOMError(UU) {
          return uz(UU, "DOMError")
        }
      },
      jy = class {
        match(UU) {
          return fz(UU)
        }
        coerce(UU, XU) {
          var zU;
          const cU = this.getStack(UU),
            yU = void 0 === cU ? null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack : void 0,
            QU = !!yU;
          return {
            type: this.getType(UU),
            value: this.getMessage(UU, XU),
            stack: null != cU ? cU : yU,
            cause: UU.cause ? XU.next(UU.cause) : void 0,
            synthetic: QU
          }
        }
        getType(UU) {
          return UU.name || UU.constructor.name
        }
        getMessage(UU, XU) {
          const zU = UU.message;
          return String(zU.error && "string" == typeof zU.error.message ? zU.error.message : zU)
        }
        getStack(UU) {
          try {
            const XU = UU.stacktrace;
            if ("string" == typeof XU && XU.length > 0) return XU;
            const zU = UU.stack;
            return "string" == typeof zU && zU.length > 0 ? zU : void 0
          } catch (UU) {
            return
          }
        }
      },
      Ky = class {
        match(UU) {
          return !!uz(UU, "ErrorEvent") && (null != UU.error || this._hasUsableMessage(UU))
        }
        coerce(UU, XU) {
          var zU;
          if (null != UU.error) return XU.apply(UU.error);
          const cU = XU.apply(UU.message);
          return ky(ky({}, cU), {}, {
            stack: null !== (zU = this._buildLocationStack(UU)) && void 0 !== zU ? zU : cU.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(UU) {
          return Wz(UU.message) && UU.message.length > 0
        }
        _buildLocationStack(UU) {
          var XU, zU;
          const cU = UU,
            yU = null !== (XU = cU.lineno) && void 0 !== XU ? XU : 0,
            QU = null !== (zU = cU.colno) && void 0 !== zU ? zU : 0;
          if (Wz(cU.filename) && 0 !== cU.filename.length && 0 !== yU) return `Error\n    at ${cU.filename}:${yU}:${QU}`
        }
      };
    const by = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var Ty = class {
      match(UU) {
        return "string" == typeof UU
      }
      coerce(UU, XU) {
        var zU;
        const [cU, yU] = this.getInfos(UU);
        return {
          type: null != cU ? cU : "Error",
          value: null != yU ? yU : UU,
          stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
          synthetic: !0
        }
      }
      getInfos(UU) {
        let XU = "Error",
          zU = UU;
        const cU = UU.match(by);
        return cU && (XU = cU[1], zU = cU[2]), [XU, zU]
      }
    };
    const hy = ["fatal", "error", "warning", "log", "info", "debug"];

    function UQ(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const zU = Object.keys(UU);
      if (zU.sort(), !zU.length) return "[object has no keys]";
      for (let cU = zU.length; cU > 0; cU--) {
        const UU = zU.slice(0, cU).join(", ");
        if (XU >= UU.length) return cU === zU.length ? UU : UU.length > XU ? `${UU.slice(0,XU)}...` : UU
      }
      return ""
    }
    var XQ = class {
        match(UU) {
          return "object" == typeof UU && null !== UU
        }
        coerce(UU, XU) {
          var zU, cU;
          const yU = this.getErrorPropertyFromObject(UU);
          return yU ? XU.apply(yU) : {
            type: this.getType(UU),
            value: this.getValue(UU),
            stack: null !== (zU = this.getStack(UU)) && void 0 !== zU ? zU : null === (cU = XU.syntheticException) || void 0 === cU ? void 0 : cU.stack,
            level: this.isSeverityLevel(UU.level) ? UU.level : "error",
            synthetic: !0
          }
        }
        getType(UU) {
          if (iz(UU)) return UU.constructor.name;
          const XU = "name" in UU ? UU.name : void 0;
          return Wz(XU) && !dz(XU) ? XU : "Error"
        }
        getValue(UU) {
          if ("name" in UU && "string" == typeof UU.name) {
            let XU = `'${UU.name}' captured as exception`;
            return "message" in UU && "string" == typeof UU.message && (XU += ` with message: '${UU.message}'`), XU
          }
          if ("message" in UU && "string" == typeof UU.message) return UU.message;
          const XU = this.getObjectClassName(UU);
          return `${XU&&"Object"!==XU?`'${XU}'`:"Object"} captured as exception with keys: ${UQ(UU)}`
        }
        isSeverityLevel(UU) {
          return Wz(UU) && !dz(UU) && hy.indexOf(UU) >= 0
        }
        getStack(UU) {
          try {
            return Wz(UU.stacktrace) && UU.stacktrace.length > 0 ? UU.stacktrace : Wz(UU.stack) && UU.stack.length > 0 ? UU.stack : void 0
          } catch (UU) {
            return
          }
        }
        getErrorPropertyFromObject(UU) {
          for (const XU in UU)
            if ({}.hasOwnProperty.call(UU, XU)) {
              const zU = UU[XU];
              if (fz(zU)) return zU
            }
        }
        getObjectClassName(UU) {
          try {
            const XU = Object.getPrototypeOf(UU);
            return XU ? XU.constructor.name : void 0
          } catch (UU) {
            return
          }
        }
      },
      zQ = class {
        match(UU) {
          return iz(UU)
        }
        coerce(UU, XU) {
          var zU;
          const cU = UU.constructor.name;
          return {
            type: cU,
            value: `${cU} captured as exception with keys: ${UQ(UU)}`,
            stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
            synthetic: !0
          }
        }
      },
      cQ = class {
        match(UU) {
          return rz(UU)
        }
        coerce(UU, XU) {
          var zU;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(UU)}`,
            stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
            synthetic: !0
          }
        }
      },
      yQ = class {
        match(UU) {
          return uz(UU, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(UU)
        }
        isCustomEventWrappingRejection(UU) {
          if (!iz(UU)) return !1;
          try {
            const XU = UU.detail;
            return null != XU && "object" == typeof XU && "reason" in XU
          } catch (UU) {
            return !1
          }
        }
        coerce(UU, XU) {
          var zU;
          const cU = this.getUnhandledRejectionReason(UU);
          return rz(cU) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(cU)}`,
            stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
            synthetic: !0
          } : XU.apply(cU)
        }
        getUnhandledRejectionReason(UU) {
          try {
            if ("reason" in UU) return UU.reason;
            if ("detail" in UU && null != UU.detail && "object" == typeof UU.detail && "reason" in UU.detail) return UU.detail.reason
          } catch (UU) {}
          return UU
        }
      };
    const QQ = "$message",
      AQ = "$timestamp",
      FQ = new Set([QQ, AQ]),
      oQ = {
        enabled: !0,
        max_bytes: 32768
      };

    function DQ(UU) {
      var XU;
      return UU ? {
        enabled: null !== (XU = UU.enabled) && void 0 !== XU ? XU : oQ.enabled,
        max_bytes: YQ(UU.max_bytes, oQ.max_bytes)
      } : ky({}, oQ)
    }
    var EQ = class {
      constructor(UU) {
        this._entries = [], this._totalBytes = 0, this._config = DQ(UU)
      }
      setConfig(UU) {
        this._config = DQ(UU), this._trimToMaxBytes()
      }
      add(UU) {
        const XU = function(UU) {
          let XU;
          try {
            XU = az(UU)
          } catch (UU) {
            return
          }
          try {
            const UU = JSON.parse(XU);
            if (!Zz(UU)) return;
            const zU = UU,
              cU = zU[QQ],
              yU = zU[AQ];
            if (!Wz(cU) || 0 === cU.trim().length) return;
            if (!Wz(yU) && !Cz(yU)) return;
            return {
              step: zU,
              json: XU
            }
          } catch (UU) {
            return
          }
        }(UU);
        if (!XU) return;
        const zU = function(UU) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(UU).length;
          const XU = encodeURIComponent(UU);
          let zU = 0;
          for (let cU = 0; XU.length > cU; cU++) "%" === XU[cU] ? (zU += 1, cU += 2) : zU += 1;
          return zU
        }(XU.json);
        zU > this._config.max_bytes || (this._entries.push({
          step: XU.step,
          bytes: zU
        }), this._totalBytes += zU, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((UU => UU.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const UU = this._entries.shift();
          UU && (this._totalBytes -= UU.bytes)
        }
      }
    };

    function YQ(UU, XU) {
      if (!Cz(UU) || 1 / 0 === UU || -1 / 0 === UU) return XU;
      const zU = Math.floor(UU);
      return 0 > zU ? XU : zU
    }
    const NQ = UU => {
      if ("string" != typeof UU) return UU;
      try {
        return JSON.parse(UU)
      } catch (yU) {
        return UU
      }
    };

    function IQ(UU) {
      return "string" == typeof UU || UU
    }

    function pQ(UU) {
      return "string" == typeof UU ? UU : void 0
    }
    const aQ = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      tQ = "NativeGzipValidationError",
      gQ = UU => UU.length >= 2 && 31 === UU[0] && 139 === UU[1],
      kQ = (UU, XU) => UU === Dz.GZipJS || XU === Dz.GZipJS || "gzip" === XU,
      GQ = UU => !(!UU || "object" != typeof UU) && "NotReadableError" === ("name" in UU ? String(UU.name) : "");
    let BQ;
    const ZQ = UU => {
        throw Dy(tQ, `Native gzip produced invalid output: ${UU}`)
      },
      RQ = (PQ = nz((function*(UU, XU) {
        18 > UU.size && ZQ("too-short");
        const zU = new Uint8Array(yield UU.slice(0, 10).arrayBuffer());
        gQ(zU) && 8 === zU[2] || ZQ("invalid-header");
        const cU = new DataView(yield UU.slice(UU.size - 8).arrayBuffer());
        cU.getUint32(0, !0) !== (UU => {
          const XU = (() => {
            if (BQ) return BQ;
            BQ = [];
            for (let UU = 0; 256 > UU; UU++) {
              let XU = UU;
              for (let UU = 0; 8 > UU; UU++) XU = 1 & XU ? 3988292384 ^ XU >>> 1 : XU >>> 1;
              BQ[UU] = XU >>> 0
            }
            return BQ
          })();
          let zU = 4294967295;
          for (let cU = 0; UU.length > cU; cU++) zU = XU[255 & (zU ^ UU[cU])] ^ zU >>> 8;
          return (4294967295 ^ zU) >>> 0
        })(XU) && ZQ("invalid-crc");
        const yU = XU.length >>> 0;
        cU.getUint32(4, !0) !== yU && ZQ("invalid-size")
      })), function(UU, XU) {
        return PQ.apply(this, arguments)
      });
    var PQ;

    function WQ() {
      return WQ = nz((function*(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const XU = (new TextEncoder).encode(UU),
            zU = new globalThis.CompressionStream("gzip"),
            yU = zU.writable.getWriter(),
            QU = yU.write(XU).then((() => yU.close())).catch((cU = nz((function*(UU) {
              try {
                yield yU.abort(UU)
              } catch (UU) {}
              throw UU
            })), function(UU) {
              return cU.apply(this, arguments)
            })),
            AU = new Response(zU.readable).blob(),
            [FU] = yield Promise.all([AU, QU]);
          return yield RQ(FU, XU), FU
        } catch (UU) {
          if (null == zU ? void 0 : zU.rethrow) throw UU;
          return XU && console.error("Failed to gzip compress data", UU), null
        }
        var cU
      })), WQ.apply(this, arguments)
    }

    function dQ(UU, XU) {
      if (null == UU) return {};
      var zU, cU, yU = function(UU, XU) {
        if (null == UU) return {};
        var zU = {};
        for (var cU in UU)
          if ({}.hasOwnProperty.call(UU, cU)) {
            if (XU.includes(cU)) continue;
            zU[cU] = UU[cU]
          } return zU
      }(UU, XU);
      if (Object.getOwnPropertySymbols) {
        var QU = Object.getOwnPropertySymbols(UU);
        for (cU = 0; QU.length > cU; cU++) XU.includes(zU = QU[cU]) || {}.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
      }
      return yU
    }
    const LQ = "[redacted]",
      eQ = /^[A-Za-z0-9+/\n\r]+=*$/,
      CQ = /^[A-Za-z0-9_-]+={0,2}$/,
      wQ = /[-_]/,
      qQ = /^data:[^,\s]*;base64,/i,
      OQ = /^[A-Za-z0-9+/_-]+={0,2}$/,
      SQ = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      rQ = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      uQ = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      fQ = /[\s<>"]/,
      iQ = new RegExp(uQ.source, "i"),
      HQ = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      MQ = new RegExp(`^${HQ.source}`, "i"),
      vQ = new RegExp(HQ.source, "gi"),
      VQ = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      sQ = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      nQ = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      mQ = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      lQ = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      xQ = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      JQ = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      jQ = /\b\d(?:[ ./-]?\d){12,}\b/g,
      KQ = /\d+/g,
      bQ = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      TQ = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function hQ(UU) {
      return function(UU) {
        return rQ.test(UU)
      }(UU) || VQ.test(UU) || sQ.test(UU)
    }

    function UA(UU) {
      return UU.split("&", 129).length > 128
    }

    function XA(UU, XU, zU) {
      return hQ(UU) || XU.includes(";") && function(UU) {
        return UU.split(";").some((UU => hQ(UU.split("=", 1)[0])))
      }(XU) ? LQ : iQ.test(XU) ? zU ? FA(XU, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : LQ : XU
    }

    function zA(UU, XU) {
      const zU = new URLSearchParams;
      let cU = !1,
        yU = !1;
      for (const [QU, AU] of new URLSearchParams(UU)) {
        const UU = oA(QU),
          FU = oA(AU);
        cU || (cU = UU !== QU || FU !== AU);
        const oU = XA(UU, FU, XU);
        cU || (cU = oU !== FU), yU = hQ(UU) || oU !== FU, zU.append(UU, oU)
      }
      return {
        changed: cU,
        lastFieldSensitive: yU,
        serialized: zU.toString()
      }
    }

    function cA(UU, XU) {
      if (!UU.includes("=")) return {
        value: yA(UU, XU),
        lastFieldSensitive: !1
      };
      const zU = zA(UU, XU);
      return {
        value: zU.changed ? zU.serialized : UU,
        lastFieldSensitive: zU.lastFieldSensitive
      }
    }

    function yA(UU, XU) {
      return XU ? FA(UU, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : iQ.test(UU) ? LQ : UU
    }

    function QA(UU, XU, zU) {
      return "#" === UU ? !XU.fragment && (XU.fragment = !0) : "?" === UU && (XU.fragment ? "=" !== zU && !XU.fragmentQuery && (XU.fragmentQuery = !0) : !XU.query && (XU.query = !0))
    }

    function AA(UU, XU) {
      var zU;
      if (UU.length > 8192 && MQ.test(UU)) return LQ;
      const {
        address: cU,
        suffix: yU
      } = XU.stripPunctuation ? function(UU) {
        let XU = UU.length;
        for (; XU > 0 && ".,;:!?)]}'".includes(UU[XU - 1]);) XU--;
        return {
          address: UU.slice(0, XU),
          suffix: UU.slice(XU)
        }
      }(UU) : {
        address: UU,
        suffix: ""
      };
      let QU;
      try {
        QU = new URL(cU)
      } catch (UU) {
        return LQ + yU
      }
      const AU = QU.search.slice(1),
        FU = "" !== QU.hash,
        oU = function(UU) {
          const XU = UU.slice(1),
            zU = XU.indexOf("?");
          return 0 > zU ? {
            head: XU,
            tail: null
          } : {
            head: XU.slice(0, zU),
            tail: XU.slice(zU + 1)
          }
        }(QU.hash);
      if (UA(AU) || UA(oU.head) || UA(null !== (zU = oU.tail) && void 0 !== zU ? zU : "")) return LQ + yU;
      let DU = !1;
      (QU.username || QU.password) && (QU.username = LQ, QU.password = "", DU = !0);
      const EU = zA(AU, XU.allowNestedUrls);
      EU.changed && (QU.search = EU.serialized, DU = !0);
      const YU = cA(oU.head, XU.allowNestedUrls),
        NU = null === oU.tail ? null : (IU = oU.tail, YU.lastFieldSensitive ? {
          value: "" === IU ? "" : LQ,
          lastFieldSensitive: !0
        } : cA(IU, XU.allowNestedUrls));
      var IU;
      const pU = null === NU ? YU.value : `${YU.value}?${NU.value}`;
      pU !== QU.hash.slice(1) && (QU.hash = pU, DU = !0);
      const aU = FU ? null != NU ? NU : YU : EU;
      return (DU ? oA(QU.toString()) : cU) + (aU.lastFieldSensitive ? "" : yU)
    }

    function FA(UU, XU) {
      return UU.replace(uQ, (zU => function(UU, XU) {
        const zU = function(UU) {
          if (!UU.includes("://")) return [];
          const XU = [...UU.matchAll(vQ)].map((UU => UU.index)),
            zU = [],
            cU = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let yU = 0,
            QU = !1,
            AU = "";
          for (let FU = 0; UU.length > FU && XU.length > yU; FU++) {
            XU[yU] === FU && (FU > 0 && "=" !== AU && zU.push(FU), yU++);
            const oU = UU[FU];
            QA(oU, cU, AU) ? (AU = oU, QU = !0) : QU && "=&".includes(oU) && (AU = oU)
          }
          return zU
        }(UU);
        if (0 === zU.length) return AA(UU, XU);
        let cU = "",
          yU = 0;
        for (const QU of zU) cU += AA(UU.slice(yU, QU), ky(ky({}, XU), {}, {
          stripPunctuation: !1
        })), yU = QU;
        return cU + AA(UU.slice(yU), XU)
      }(zU, ky(ky({}, XU), {}, {
        stripPunctuation: XU.stripPunctuation && zU.length !== UU.length
      }))))
    }

    function oA(UU) {
      return UU.replace(SQ, LQ)
    }

    function DA(UU) {
      let XU = 0,
        zU = !1;
      for (let cU = UU.length - 1; cU >= 0; cU--) {
        let yU = UU.charCodeAt(cU) - 48;
        if (0 > yU || yU > 9) return !1;
        zU && (yU *= 2, yU > 9 && (yU -= 9)), XU += yU, zU = !zU
      }
      return XU % 10 == 0
    }

    function EA(UU) {
      const XU = [];
      for (let QU = KQ.exec(UU); null !== QU; QU = KQ.exec(UU)) XU.push({
        digits: QU[0],
        start: QU.index,
        end: QU.index + QU[0].length
      });
      let zU = "",
        cU = 0,
        yU = 0;
      for (; XU.length > yU;) {
        let QU = "",
          AU = -1;
        for (let UU = yU; XU.length > UU && (QU += XU[UU].digits, 19 >= QU.length); UU++) QU.length >= 13 && DA(QU) && (AU = UU);
        0 > AU ? yU++ : (zU += UU.slice(cU, XU[yU].start) + LQ, cU = XU[AU].end, yU = AU + 1)
      }
      return zU + UU.slice(cU)
    }
    const YA = {}.propertyIsEnumerable;

    function NA(UU, XU) {
      try {
        return aA(UU, XU, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (UU) {
        return []
      }
    }

    function IA(UU, XU, zU, cU) {
      if (0 >= zU.remainingNodes) return {
        stringValue: Xy
      };
      if (zU.remainingNodes--, qz(UU)) return {
        boolValue: UU
      };
      if ("bigint" == typeof UU) return function(UU, XU) {
        const zU = UU.toString(),
          cU = BigInt("9223372036854775808");
        return UU >= cU || -cU > UU ? (null == XU || XU.debug(`Attribute ${zU} is outside the int64 range; encoding it as a string`), {
          stringValue: zU
        }) : {
          intValue: zU
        }
      }(UU, XU);
      if ("number" == typeof UU) {
        if (!Number.isFinite(UU)) return {
          stringValue: String(UU)
        };
        if (Number.isInteger(UU)) {
          if (Number.isSafeInteger(UU)) return {
            intValue: String(UU)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(UU)
          };
          const zU = BigInt(UU).toString();
          return UU >= 0x8000000000000000 || -0x8000000000000000 > UU ? (null == XU || XU.debug(`Attribute ${zU} is outside the int64 range; encoding it as a string`), {
            stringValue: zU
          }) : {
            intValue: zU
          }
        }
        return {
          doubleValue: UU
        }
      }
      if ("string" == typeof UU) return {
        stringValue: cy(UU)
      };
      if ("function" == typeof UU) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof UU) return {
        stringValue: String(UU)
      };
      if ("object" == typeof UU && null !== UU) {
        if (zU.ancestors.has(UU)) return {
          stringValue: "[Circular]"
        };
        if (cU >= 20) return {
          stringValue: Xy
        };
        if (UU instanceof Date) {
          const XU = UU.getTime(),
            zU = Number.isFinite(XU) ? UU.toISOString() : String(UU);
          return {
            stringValue: "string" == typeof zU ? cy(zU) : String(zU)
          }
        }
        zU.ancestors.add(UU);
        try {
          try {
            const yU = UU.toJSON;
            if ("function" == typeof yU) return IA(yU.call(UU), XU, zU, cU + 1)
          } catch (UU) {}
          return Gz(UU) ? {
            arrayValue: {
              values: pA(UU, XU, zU, cU + 1)
            }
          } : {
            kvlistValue: {
              values: aA(UU, XU, zU, cU + 1)
            }
          }
        } finally {
          zU.ancestors.delete(UU)
        }
      }
      return {
        stringValue: cy(String(UU))
      }
    }

    function pA(UU, XU, zU, cU) {
      const yU = [],
        QU = Math.min(UU.length, 1e3);
      let AU = 0;
      for (; QU > AU && zU.remainingNodes > 0; AU++) try {
        const QU = AU in UU ? UU[AU] : void 0;
        if (ez(QU)) continue;
        yU.push(IA(QU, XU, zU, cU))
      } catch (UU) {
        yU.push({
          stringValue: zy
        })
      }
      return UU.length > AU && yU.push({
        stringValue: Xy
      }), yU
    }

    function aA(UU, XU, zU, cU) {
      const yU = [];
      for (const QU in UU)
        if (YA.call(UU, QU)) {
          if (!QU) {
            null == XU || XU.debug("Dropping an attribute with an empty key");
            continue
          }
          if (yU.length >= 1e3 || 0 >= zU.remainingNodes) {
            null == XU || XU.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const AU = UU[QU];
            if (Lz(AU) || Pz(AU)) continue;
            yU.push({
              key: cy(QU),
              value: IA(AU, XU, zU, cU)
            })
          } catch (UU) {
            yU.push({
              key: cy(QU),
              value: {
                stringValue: zy
              }
            })
          }
        } return yU
    }

    function tA(UU, XU, zU) {
      return ky(ky(ky(ky({}, yy({}, UU.resourceAttributes)), {}, {
        "service.name": UU.serviceName || "unknown_service"
      }, UU.environment && {
        "deployment.environment": UU.environment
      }), UU.serviceVersion && {
        "service.version": UU.serviceVersion
      }), {}, {
        "telemetry.sdk.name": XU,
        "telemetry.sdk.version": zU
      })
    }
    const gA = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function kA(UU, XU) {
      const zU = yy({}, UU),
        cU = {};
      for (const yU of gA)({}).hasOwnProperty.call(zU, yU) && (cU[yU] = zU[yU], delete zU[yU]);
      return [...NA(zU, XU), ...NA(cU, XU)]
    }
    const GA = {
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
      BA = {
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
      ZA = BA.info;

    function RA(UU) {
      try {
        return cy(String(UU))
      } catch (UU) {
        return zy
      }
    }

    function PA(UU, XU, zU, cU) {
      const yU = UU.level || "info",
        {
          text: QU,
          number: AU
        } = BA[yU] || ZA,
        FU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(UU) + "000000"
        }(Cz(cU) ? cU : void 0),
        oU = {};
      XU.distinctId && (oU.posthogDistinctId = XU.distinctId), XU.sessionId && (oU.sessionId = XU.sessionId), XU.windowId && (oU["window.id"] = XU.windowId), ez(XU.sessionStartTimestamp) || (oU.sessionStartTimestamp = String(XU.sessionStartTimestamp)), ez(XU.lastActivityTimestamp) || (oU.lastActivityTimestamp = String(XU.lastActivityTimestamp)), XU.currentUrl && (oU["url.full"] = XU.currentUrl), XU.screenName && (oU["screen.name"] = XU.screenName), XU.appState && (oU["app.state"] = XU.appState), XU.activeFeatureFlags && XU.activeFeatureFlags.length > 0 && (oU.feature_flags = XU.activeFeatureFlags);
      const DU = ky({}, oU),
        EU = UU.attributes;
      if (EU) {
        let UU = [];
        try {
          UU = Object.keys(EU)
        } catch (XU) {
          UU = []
        }
        for (const zU of UU) {
          let UU;
          try {
            UU = EU[zU]
          } catch (XU) {
            UU = zy
          }
          Object.defineProperty(DU, zU, {
            value: UU,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const YU = {
        timeUnixNano: FU,
        observedTimeUnixNano: FU,
        severityNumber: AU,
        severityText: QU,
        body: {
          stringValue: RA(UU.body)
        },
        attributes: NA(DU, zU)
      };
      return UU.trace_id && (YU.traceId = UU.trace_id), UU.span_id && (YU.spanId = UU.span_id), Pz(UU.trace_flags) || (YU.flags = UU.trace_flags), YU
    }

    function WA(UU, XU, zU) {
      return tA(UU, XU, zU)
    }

    function dA(UU, XU, zU, cU) {
      return {
        resourceLogs: [{
          resource: {
            attributes: kA(XU)
          },
          scopeLogs: [{
            scope: {
              name: zU,
              version: cU
            },
            logRecords: UU
          }]
        }]
      }
    }
    var LA = class {
      constructor(UU) {
        this._onFire = UU, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(UU) {
        this.clear(), this._firesAt = Date.now() + UU, this._timer = Ny((() => {
          this._timer = void 0, this._onFire()
        }), UU)
      }
      armNoEarlierThan(UU) {
        this._timer && Date.now() + UU <= this._firesAt || this.arm(UU)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function eA() {
      return .75 + .5 * Math.random()
    }

    function CA(UU, XU, zU, cU) {
      const yU = Math.min(Math.max(0, XU - 1), 6),
        QU = UU * Math.pow(2, yU);
      return Math.round((void 0 === cU ? QU : Math.min(QU, Math.max(cU, UU))) * zU)
    }
    var wA = class {
      constructor(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          AU = arguments.length > 6 ? arguments[6] : void 0;
        var FU;
        this._instance = UU, this._config = XU, this._logger = zU, this._getContext = cU, this._onReady = yU, this._waitForStoragePersist = QU, this._scopeName = AU, this._flushTimer = new LA((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new Ay, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = XU.maxBufferSize, this._maxQueueSize = Math.max(null !== (FU = XU.maxQueueSize) && void 0 !== FU ? FU : XU.maxBufferSize, XU.maxBufferSize), this._flushIntervalMs = XU.flushIntervalMs, this._maxBatchRecordsPerPost = XU.maxBatchRecordsPerPost, this._rateCapWindowMs = XU.rateCapWindowMs, this._maxLogsPerInterval = XU.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(oz.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(UU, XU) {
        var zU;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == UU ? void 0 : UU.body)) return;
        const cU = this._runBeforeSend(UU);
        if (null === cU) return;
        if (!cU.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const yU = {
          record: PA(cU, null !== (zU = null == XU ? void 0 : XU.context) && void 0 !== zU ? zU : this._getContext(), this._logger, null == XU ? void 0 : XU.occurredAtMs)
        };
        this._onReady((() => this._enqueue(yU)))
      }
      _runBeforeSend(UU) {
        const XU = this._config.beforeSend;
        if (!XU) return UU;
        const zU = Gz(XU) ? XU : [XU];
        let cU = UU;
        for (const yU of zU) try {
          const UU = yU(cU);
          if (!UU) return this._logger.info("Log was rejected in beforeSend function"), null;
          cU = UU
        } catch (UU) {
          return this._logger.error("Error in beforeSend function for log:", UU), null
        }
        return cU
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const UU = Date.now(),
          XU = UU - this._intervalWindowStart;
        return this._rateCapWindowMs > XU && XU >= 0 || (this._intervalWindowStart = UU, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var UU = this;
        return nz((function*() {
          if (!UU._instance.isDisabled) return UU._flushPromise || (UU._flushPromise = UU._flushInner().finally((() => {
            UU._flushPromise = null
          }))), UU._flushPromise
        }))()
      }
      _flushInner() {
        var UU = this;
        return nz((function*() {
          var XU;
          UU._flushTimer.clear();
          let zU = null !== (XU = UU._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== XU ? XU : [];
          if (0 === zU.length) return;
          const cU = zU.length;
          let yU = 0;
          for (; zU.length > 0 && cU > yU;) {
            var QU, AU;
            const XU = UU._queueGeneration;
            UU._evictedSinceAdvance = 0;
            const cU = Math.min(zU.length, UU._maxBatchRecordsPerPost),
              FU = zU.slice(0, cU),
              oU = dA(FU.map((UU => UU.record)), UU._buildResourceAttributes(), null !== (QU = UU._scopeName) && void 0 !== QU ? QU : UU._instance.getLibraryId(), UU._instance.getLibraryVersion()),
              DU = yield UU._instance._sendLogsBatch(oU);
            if (UU._queueGeneration !== XU) return;
            if ("too-large" === DU.kind && FU.length > 1) UU._maxBatchRecordsPerPost = Math.max(1, Math.floor(FU.length / 2)), UU._logger.warn(`Logs batch of size ${FU.length} was too large for the ingestion endpoint, reducing batch size to ${UU._maxBatchRecordsPerPost}`);
            else {
              if (UU._retryAfter.record(DU), UU._flushTimer.pending && UU._flushTimer.arm(Math.max(UU._flushIntervalMs, UU._retryAfter.remainingMs())), "retry-later" === DU.kind) throw DU.error;
              if ("too-large" === DU.kind ? UU._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === DU.kind && UU._config.maxBatchRecordsPerPost > UU._maxBatchRecordsPerPost && (UU._maxBatchRecordsPerPost = Math.min(UU._config.maxBatchRecordsPerPost, UU._maxBatchRecordsPerPost + 1)), yield UU._persistQueueAdvance(FU.length), zU = null !== (AU = UU._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== AU ? AU : [], yU += FU.length, "fatal" === DU.kind) throw DU.error
            }
          }
        }))()
      }
      _persistQueueAdvance(UU) {
        var XU = this;
        return nz((function*() {
          var zU;
          const cU = Math.max(0, UU - XU._evictedSinceAdvance),
            yU = null !== (zU = XU._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== zU ? zU : [];
          XU._instance.setPersistedProperty(oz.LogsQueue, yU.slice(cU)), yield XU._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return WA(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(UU) {
        var XU;
        if (this._instance.optedOut) return;
        const zU = null !== (XU = this._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== XU ? XU : [];
        this._maxQueueSize > zU.length || (zU.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), zU.push(UU), this._instance.setPersistedProperty(oz.LogsQueue, zU), this._maxBufferSize > zU.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(CA(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const UU = this._instance.getPersistedProperty(oz.LogsQueue);
        return !!UU && UU.length > 0
      }
      shutdown(UU) {
        var XU = this;
        return nz((function*() {
          XU._flushTimer.clear();
          const zU = XU.flush().catch((() => {}));
          void 0 !== UU ? yield Iy(zU, UU): yield zU
        }))()
      }
      flushWithTimeout(UU) {
        var XU = this;
        return nz((function*() {
          const zU = XU.flush();
          yield Iy(zU, UU, (() => {
            zU.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (UU => {
          this._consecutiveFlushFailures++, this._flushJitter = eA(), this._logger.error("PostHog logs flush failed:", UU)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const qA = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function OA(UU) {
      return String(UU) + "000000"
    }

    function SA(UU, XU, zU, cU) {
      let yU = "";
      return cU && (yU = Object.keys(cU).sort().map((UU => `${JSON.stringify(UU)}:${JSON.stringify(cU[UU])}`)).join(",")), `${UU}\0${XU}\0${null!=zU?zU:""}\0${yU}`
    }
    var rA = class {
      constructor(UU, XU, zU) {
        this._instance = UU, this._config = XU, this._logger = zU, this._series = new Map, this._flushTimer = new LA((() => this.flush().catch((UU => {
          this._logger.error("Metrics flush failed:", UU)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new Ay, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: UU,
          type: "count",
          value: XU,
          unit: null == zU ? void 0 : zU.unit,
          attributes: null == zU ? void 0 : zU.attributes
        })
      }
      gauge(UU, XU, zU) {
        this._capture({
          name: UU,
          type: "gauge",
          value: XU,
          unit: null == zU ? void 0 : zU.unit,
          attributes: null == zU ? void 0 : zU.attributes
        })
      }
      histogram(UU, XU, zU) {
        this._capture({
          name: UU,
          type: "histogram",
          value: XU,
          unit: null == zU ? void 0 : zU.unit,
          attributes: null == zU ? void 0 : zU.attributes
        })
      }
      flush() {
        var UU = this;
        const XU = this._flushPromise,
          zU = function() {
            var zU = nz((function*() {
              XU && (yield XU.catch((() => {}))), yield UU._doFlush()
            }));
            return function() {
              return zU.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === zU && (this._flushPromise = null)
          }));
        return this._flushPromise = zU, zU
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const UU = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(UU)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(UU) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const XU = this._runBeforeSend(UU);
        if (null === XU) return;
        if (!XU.name || "string" != typeof XU.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof XU.value || !Number.isFinite(XU.value)) return void this._logger.warn(`Dropping metric '${XU.name}': value must be a finite number`);
        if ("count" === XU.type && 0 > XU.value) return void this._logger.warn(`Dropping count '${XU.name}': counters are monotonic, value must be >= 0`);
        let zU, cU;
        try {
          zU = XU.attributes ? ky({}, XU.attributes) : void 0, cU = SA(XU.type, XU.name, XU.unit, zU)
        } catch (UU) {
          return void this._logger.warn(`Dropping metric '${XU.name}': attributes could not be serialized`, UU)
        }
        let yU = this._series.get(cU);
        if (!yU) {
          if (!this._admitNewSeries()) return;
          yU = {
            name: XU.name,
            type: XU.type,
            unit: XU.unit,
            attributes: zU,
            windowStartMs: Date.now()
          }, this._series.set(cU, yU)
        }
        const QU = this._typeByName.get(XU.name);
        void 0 === QU ? this._typeByName.set(XU.name, XU.type) : QU === XU.type || this._typeCollisionWarned.has(XU.name) || (this._typeCollisionWarned.add(XU.name), this._logger.warn(`Metric name '${XU.name}' is already used as a ${QU}; recording it as a ${XU.type} too will blend both series in charts. Use a distinct name.`)), this._fold(yU, XU.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(UU, XU) {
        switch (UU.type) {
          case "count":
            var zU;
            UU.total = (null !== (zU = UU.total) && void 0 !== zU ? zU : 0) + XU;
            break;
          case "gauge":
            UU.last = XU;
            break;
          case "histogram": {
            UU.hist || (UU.hist = {
              count: 0,
              sum: 0,
              min: XU,
              max: XU,
              bucketCounts: new Array(qA.length + 1).fill(0)
            });
            const zU = UU.hist;
            zU.count += 1, zU.sum += XU, zU.min = Math.min(zU.min, XU), zU.max = Math.max(zU.max, XU), zU.bucketCounts[function(UU, XU) {
              for (let zU = 0; XU.length > zU; zU++)
                if (XU[zU] >= UU) return zU;
              return XU.length
            }(XU, qA)] += 1;
            break
          }
        }
      }
      _runBeforeSend(UU) {
        const XU = this._config.beforeSend;
        if (!XU) return UU;
        const zU = Gz(XU) ? XU : [XU];
        let cU = UU;
        for (const yU of zU) try {
          const UU = yU(cU);
          if (!UU) return this._logger.info("Metric was rejected in beforeSend function"), null;
          cU = UU
        } catch (UU) {
          return this._logger.error("Error in beforeSend function for metric:", UU), null
        }
        return cU
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(CA(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var UU = this;
        return nz((function*() {
          if (UU._flushTimer.clear(), 0 === UU._series.size) return;
          const XU = UU._series;
          UU._series = new Map, UU._seriesCapWarned = !1, UU._typeByName = new Map, UU._typeCollisionWarned = new Set;
          const zU = UU._generation,
            cU = yield UU._instance._sendMetricsBatch(UU._buildPayload(XU));
          if (zU === UU._generation) switch (UU._retryAfter.record(cU), "retry-later" === cU.kind ? (UU._consecutiveFlushFailures++, UU._flushJitter = eA()) : (UU._consecutiveFlushFailures = 0, UU._flushJitter = 1), UU._flushTimer.pending && UU._flushTimer.arm(UU._nextFlushDelay()), cU.kind) {
            case "ok":
              return;
            case "retry-later":
              return UU._mergeWindowBack(XU), void UU._flushTimer.armNoEarlierThan(UU._nextFlushDelay());
            case "too-large":
              return void UU._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void UU._logger.error("Failed to send metrics batch:", cU.error)
          }
        }))()
      }
      _buildPayload(UU) {
        return XU = this._buildMetrics(UU), zU = function(UU, XU, zU) {
          return tA(UU, XU, zU)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), cU = this._instance.getLibraryId(), yU = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: kA(zU)
            },
            scopeMetrics: [{
              scope: {
                name: cU,
                version: yU
              },
              metrics: XU
            }]
          }]
        };
        var XU, zU, cU, yU
      }
      _buildMetrics(UU) {
        const XU = OA(Date.now()),
          zU = new Map;
        for (const AU of UU.values()) {
          var cU;
          const UU = SA(AU.type, AU.name, AU.unit, void 0);
          let FU = zU.get(UU);
          FU || (FU = ky({
            name: AU.name
          }, AU.unit && {
            unit: AU.unit
          }), "count" === AU.type ? FU.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === AU.type ? FU.gauge = {
            dataPoints: []
          } : FU.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, zU.set(UU, FU));
          const oU = NA(null !== (cU = AU.attributes) && void 0 !== cU ? cU : {}, this._logger),
            DU = OA(AU.windowStartMs);
          if ("count" === AU.type) {
            var yU;
            const UU = {
              attributes: oU,
              startTimeUnixNano: DU,
              timeUnixNano: XU,
              asDouble: null !== (yU = AU.total) && void 0 !== yU ? yU : 0
            };
            FU.sum.dataPoints.push(UU)
          } else if ("gauge" === AU.type) {
            var QU;
            const UU = {
              attributes: oU,
              timeUnixNano: XU,
              asDouble: null !== (QU = AU.last) && void 0 !== QU ? QU : 0
            };
            FU.gauge.dataPoints.push(UU)
          } else AU.hist && FU.histogram.dataPoints.push({
            attributes: oU,
            startTimeUnixNano: DU,
            timeUnixNano: XU,
            count: AU.hist.count,
            sum: AU.hist.sum,
            min: AU.hist.min,
            max: AU.hist.max,
            bucketCounts: AU.hist.bucketCounts,
            explicitBounds: qA
          })
        }
        return Array.from(zU.values())
      }
      _mergeWindowBack(UU) {
        for (const [cU, yU] of UU) {
          const UU = this._series.get(cU);
          if (UU) switch (UU.windowStartMs = Math.min(UU.windowStartMs, yU.windowStartMs), UU.type) {
            case "count":
              var XU, zU;
              UU.total = (null !== (XU = UU.total) && void 0 !== XU ? XU : 0) + (null !== (zU = yU.total) && void 0 !== zU ? zU : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (yU.hist)
                if (UU.hist) {
                  UU.hist.count += yU.hist.count, UU.hist.sum += yU.hist.sum, UU.hist.min = Math.min(UU.hist.min, yU.hist.min), UU.hist.max = Math.max(UU.hist.max, yU.hist.max);
                  for (let XU = 0; UU.hist.bucketCounts.length > XU; XU++) UU.hist.bucketCounts[XU] += yU.hist.bucketCounts[XU]
                } else UU.hist = yU.hist
          } else this._admitNewSeries() && this._series.set(cU, yU)
        }
      }
    };
    const uA = function(UU) {
        let {
          debugEnabled: XU
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = {
          _log(zU) {
            let cU;
            try {
              cU = typeof window > "u" ? void 0 : window
            } catch (UU) {
              return
            }
            for (var QU = arguments.length, AU = new Array(QU > 1 ? QU - 1 : 0), FU = 1; FU < QU; FU++) AU[FU - 1] = arguments[FU];
            cU && (yU.DEBUG || cU.POSTHOG_DEBUG || XU) && !Pz(cU.console) && cU.console && ("__rrweb_original__" in cU.console[zU] ? cU.console[zU].__rrweb_original__ : cU.console[zU])(UU, ...AU)
          },
          debug() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            zU._log("debug", ...XU)
          },
          info() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            zU._log("log", ...XU)
          },
          warn() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            zU._log("warn", ...XU)
          },
          error() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            zU._log("error", ...XU)
          },
          critical() {
            for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
            console.error(UU, ...zU)
          },
          uninitializedWarning(UU) {
            zU.error(`You must initialize PostHog before calling ${UU}`)
          },
          createLogger: (XU, zU) => uA(`${UU} ${XU}`, zU)
        };
        return zU
      },
      fA = uA("[PostHog.js]"),
      iA = fA.createLogger;

    function HA(UU, XU) {
      Gz(UU) && UU.forEach(XU)
    }

    function MA(UU, XU) {
      if (!ez(UU))
        if (Gz(UU)) UU.forEach(XU);
        else if ((UU => UU instanceof FormData)(UU)) UU.forEach(((UU, zU) => XU(UU, zU)));
      else
        for (const zU in UU) gz.call(UU, zU) && XU(UU[zU], zU)
    }
    const vA = function(UU) {
      for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
      for (const yU of zU)
        for (const XU in yU) void 0 !== yU[XU] && (UU[XU] = yU[XU]);
      return UU
    };

    function VA(UU) {
      const XU = Object.keys(UU);
      let zU = XU.length;
      const cU = new Array(zU);
      for (; zU--;) cU[zU] = [XU[zU], UU[XU[zU]]];
      return cU
    }
    const sA = function(UU) {
        return function() {
          try {
            for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
            return UU.apply(this, zU)
          } catch (UU) {
            fA.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), fA.critical(UU)
          }
        }
      },
      nA = function(UU) {
        const XU = {};
        return MA(UU, (function(UU, zU) {
          (Wz(UU) && UU.length > 0 || Cz(UU)) && (XU[zU] = UU)
        })), XU
      };

    function mA(UU) {
      const XU = ky({}, UU);
      for (const zU of ["name", "message", "stack", "cause", "errors"]) try {
        zU in UU && (XU[zU] = UU[zU])
      } catch (UU) {}
      return XU
    }
    const lA = ["herokuapp.com", "vercel.app", "netlify.app"];

    function xA(UU) {
      const XU = null == UU ? void 0 : UU.hostname;
      if (!Wz(XU)) return !1;
      const zU = XU.split(".").slice(-2).join(".");
      for (const cU of lA)
        if (zU === cU) return !1;
      return !0
    }

    function JA(UU, XU, zU, cU) {
      const {
        capture: yU = !1,
        passive: QU = !0
      } = null != cU ? cU : {};
      null == UU || UU.addEventListener(XU, zU, {
        capture: yU,
        passive: QU
      })
    }

    function jA(UU) {
      return "ph_toolbar_internal" === UU.name
    }
    const KA = UU => {
      if (hX) {
        try {
          const XU = UU + "=",
            zU = hX.cookie.split(";").filter((UU => UU.length));
          for (let UU = 0; zU.length > UU; UU++) {
            let cU = zU[UU];
            for (;
              " " == cU.charAt(0);) cU = cU.substring(1, cU.length);
            if (0 === cU.indexOf(XU)) return decodeURIComponent(cU.substring(XU.length, cU.length))
          }
        } catch (UU) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(UU) {
      return 0 > UU ? Math.ceil(UU) : Math.floor(UU)
    }), Number.isInteger || (Number.isInteger = function(UU) {
      return Cz(UU) && isFinite(UU) && Math.floor(UU) === UU
    });
    var bA = class UU {
        constructor(UU) {
          if (this.bytes = UU, 16 !== UU.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(XU, zU, cU, yU) {
          if (!Number.isInteger(XU) || !Number.isInteger(zU) || !Number.isInteger(cU) || !Number.isInteger(yU) || 0 > XU || 0 > zU || 0 > cU || 0 > yU || XU > 0xffffffffffff || zU > 4095 || cU > 1073741823 || yU > 4294967295) throw new RangeError("invalid field value");
          const QU = new Uint8Array(16);
          return QU[0] = XU / Math.pow(2, 40), QU[1] = XU / Math.pow(2, 32), QU[2] = XU / Math.pow(2, 24), QU[3] = XU / Math.pow(2, 16), QU[4] = XU / 256, QU[5] = XU, QU[6] = 112 | zU >>> 8, QU[7] = zU, QU[8] = 128 | cU >>> 24, QU[9] = cU >>> 16, QU[10] = cU >>> 8, QU[11] = cU, QU[12] = yU >>> 24, QU[13] = yU >>> 16, QU[14] = yU >>> 8, QU[15] = yU, new UU(QU)
        }
        toString() {
          let UU = "";
          for (let XU = 0; this.bytes.length > XU; XU++) UU = UU + (this.bytes[XU] >>> 4).toString(16) + (15 & this.bytes[XU]).toString(16), 3 !== XU && 5 !== XU && 7 !== XU && 9 !== XU || (UU += "-");
          if (36 !== UU.length) throw new Error("Invalid UUIDv7 was generated");
          return UU
        }
        clone() {
          return new UU(this.bytes.slice(0))
        }
        equals(UU) {
          return 0 === this.compareTo(UU)
        }
        compareTo(UU) {
          for (let XU = 0; 16 > XU; XU++) {
            const zU = this.bytes[XU] - UU.bytes[XU];
            if (0 !== zU) return Math.sign(zU)
          }
          return 0
        }
      },
      TA = class {
        generate() {
          const UU = this.generateOrAbort();
          if (!Pz(UU)) return UU;
          {
            this._timestamp = 0;
            const UU = this.generateOrAbort();
            if (Pz(UU)) throw new Error("Could not generate UUID after timestamp reset");
            return UU
          }
        }
        generateOrAbort() {
          const UU = (() => {
            const UU = Date.now();
            return Cz(UU) && isFinite(UU) ? Math.min(Math.max(Math.floor(UU), 0), 0xffffffffffff) : 0
          })();
          if (UU > this._timestamp) this._timestamp = UU, this._resetCounter();
          else {
            if (this._timestamp >= UU + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return bA.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new UF
        }
      };
    let hA = UU => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let XU = 0; UU.length > XU; XU++) UU[XU] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return UU
    };
    KX && !Pz(KX.crypto) && crypto.getRandomValues && (hA = UU => crypto.getRandomValues(UU));
    var UF = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (hA(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let XF;
    const zF = () => cF().toString(),
      cF = () => (XF || (XF = new TA)).generate();
    let yF = "";
    const QF = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let AF = null;
    const FF = {
      _is_supported() {
        if (!Lz(AF)) return AF;
        if (AF = !1, hX) try {
          const UU = `__ph_cookie_support_${zF()}`;
          FF._set(UU, "xyz"), AF = '"xyz"' === KA(UU), FF._remove(UU)
        } catch (cU) {
          AF = !1
        }
        return AF
      },
      _error(UU) {
        fA.error("cookieStore error: " + UU)
      },
      _get: KA,
      _parse(UU) {
        let XU;
        try {
          XU = JSON.parse(FF._get(UU)) || {}
        } catch (UU) {}
        return XU
      },
      _set(UU, XU, zU, cU, yU) {
        if (!hX) return !1;
        try {
          let QU = "",
            AU = "";
          const FU = function(UU, XU) {
            if (XU) {
              let XU = function(UU) {
                let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hX;
                if (yF) return yF;
                if (!XU) return "";
                if (["localhost", "127.0.0.1"].includes(UU)) return "";
                const zU = UU.split(".");
                let cU = Math.min(zU.length, 8);
                const yU = "dmn_chk_" + zF();
                for (; !yF && cU--;) {
                  const UU = zU.slice(cU).join("."),
                    QU = yU + "=1;domain=." + UU + ";path=/";
                  XU.cookie = QU + ";max-age=3", XU.cookie.includes(yU) && (XU.cookie = QU + ";max-age=0", yF = UU)
                }
                return yF
              }(UU);
              if (!XU) {
                const zU = (UU => {
                  const XU = UU.match(QF);
                  return XU ? XU[0] : ""
                })(UU);
                zU !== XU && fA.info("Warning: cookie subdomain discovery mismatch", zU, XU), XU = zU
              }
              return XU ? "; domain=." + XU : ""
            }
            return ""
          }(hX.location.hostname, cU);
          if (zU) {
            const UU = new Date;
            UU.setTime(UU.getTime() + 864e5 * zU), QU = "; expires=" + UU.toUTCString()
          }
          yU && (AU = "; secure");
          const oU = UU + "=" + encodeURIComponent(JSON.stringify(XU)) + QU + "; SameSite=Lax; path=/" + FU + AU;
          return oU.length > 3686.4 && fA.warn("cookieStore warning: large cookie, len=" + oU.length), hX.cookie = oU, !0
        } catch (UU) {
          return !1
        }
      },
      _remove(UU, XU) {
        if ((null == hX ? void 0 : hX.cookie) && (!XU || !Lz(KA(UU)))) try {
          FF._set(UU, "", -1, XU)
        } catch (UU) {
          return
        }
      }
    };
    let oF = null;
    const DF = {
        _is_supported() {
          if (!Lz(oF)) return oF;
          let UU = !0;
          if (Pz(KX)) UU = !1;
          else try {
            const XU = "__mplssupport__";
            DF._set(XU, "xyz"), '"xyz"' !== DF._get(XU) && (UU = !1), DF._remove(XU)
          } catch (yU) {
            UU = !1
          }
          return UU || fA.error("localStorage unsupported; falling back to cookie store"), oF = UU, UU
        },
        _error(UU) {
          fA.error("localStorage error: " + UU)
        },
        _get(UU) {
          try {
            return null == KX ? void 0 : KX.localStorage.getItem(UU)
          } catch (UU) {
            DF._error(UU)
          }
          return null
        },
        _parse(UU) {
          try {
            return JSON.parse(DF._get(UU)) || {}
          } catch (UU) {}
          return null
        },
        _set(UU, XU) {
          try {
            return null == KX || KX.localStorage.setItem(UU, JSON.stringify(XU)), !0
          } catch (UU) {
            DF._error(UU)
          }
          return !1
        },
        _remove(UU) {
          try {
            null == KX || KX.localStorage.removeItem(UU)
          } catch (UU) {
            DF._error(UU)
          }
        }
      },
      EF = [aU, FU, IU, oU, kU, YU, EU, DU, tU],
      YF = [WU, PU, TU, hU, WX, PX, wU, kX],
      NF = UU => UU + "_cpm",
      IF = ["__proto__", "constructor", "prototype"],
      pF = UU => {
        if (!Zz(UU)) return {};
        const XU = {};
        return Object.keys(UU).forEach((zU => {
          -1 === IF.indexOf(zU) && (XU[zU] = UU[zU])
        })), XU
      },
      aF = function(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const zU = {};
        return [...YF, ...XU].forEach((XU => {
          const cU = UU[XU];
          Pz(cU) || Lz(cU) || "" === cU || (zU[XU] = cU)
        })), zU
      },
      tF = UU => {
        let XU = 5381,
          zU = 2166136261;
        for (let cU = 0; UU.length > cU; cU++) {
          const yU = UU.charCodeAt(cU);
          XU = 33 * XU ^ yU, zU = Math.imul(zU ^ yU, 16777619)
        }
        return UU.length.toString(36) + "." + (XU >>> 0).toString(36) + "." + (zU >>> 0).toString(36)
      },
      gF = (UU, XU) => ({
        p: XU,
        f: tF(JSON.stringify(UU))
      }),
      kF = (UU, XU) => {
        if (!XU) return {
          properties: [],
          isValid: !1
        };
        try {
          const zU = FF._parse(NF(UU)),
            cU = (null == zU ? void 0 : zU.f) === tF(XU) && Gz(zU.p);
          return {
            properties: cU ? zU.p : [],
            isValid: cU
          }
        } catch (UU) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      GF = (UU, XU) => XU + "|" + (FF._get(NF(UU)) || ""),
      BF = {},
      ZF = {
        _is_supported: () => !0,
        _error(UU) {
          fA.error("memoryStorage error: " + UU)
        },
        _get: UU => UU in BF ? BF[UU] : null,
        _parse: UU => UU in BF ? BF[UU] : null,
        _set: (UU, XU) => (BF[UU] = XU, !0),
        _remove(UU) {
          delete BF[UU]
        }
      };
    let RF = null;
    const PF = {
      _is_supported() {
        if (!Lz(RF)) return RF;
        if (RF = !0, Pz(KX)) RF = !1;
        else try {
          const UU = "__support__";
          PF._set(UU, "xyz"), '"xyz"' !== PF._get(UU) && (RF = !1), PF._remove(UU)
        } catch (cU) {
          RF = !1
        }
        return RF
      },
      _error(UU) {
        fA.error("sessionStorage error: ", UU)
      },
      _get(UU) {
        try {
          return null == KX ? void 0 : KX.sessionStorage.getItem(UU)
        } catch (UU) {
          PF._error(UU)
        }
        return null
      },
      _parse(UU) {
        try {
          return JSON.parse(PF._get(UU)) || null
        } catch (UU) {}
        return null
      },
      _set(UU, XU) {
        try {
          return null == KX || KX.sessionStorage.setItem(UU, JSON.stringify(XU)), !0
        } catch (UU) {
          PF._error(UU)
        }
        return !1
      },
      _remove(UU) {
        try {
          null == KX || KX.sessionStorage.removeItem(UU)
        } catch (UU) {
          PF._error(UU)
        }
      }
    };
    var WF = class {
      constructor(UU) {
        this._instance = UU
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
      optInOut(UU) {
        this.Ga._set(this._storageKey, UU ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.Ga._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: UU,
          opt_out_capturing_cookie_prefix: XU,
          consent_persistence_name: zU
        } = this._instance.config;
        return zU || (XU ? XU + UU : "__ph_opt_in_out_" + UU)
      }
      get _storedConsent() {
        const UU = this.Ga._get(this._storageKey);
        return vz(UU) ? 1 : Nz(Vz, UU) ? 0 : -1
      }
      get Ga() {
        const UU = this._config.opt_out_capturing_persistence_type,
          XU = "localStorage" === UU ? DF : FF,
          zU = XU._is_supported() ? XU : ZF;
        if (!this._persistentStore || this._persistentStore !== zU) {
          this._persistentStore = zU;
          const XU = "localStorage" === UU ? FF : DF;
          XU._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(vz(XU._get(this._storageKey))), XU._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == TX ? void 0 : TX.doNotTrack, null == TX ? void 0 : TX.msDoNotTrack, Fz.doNotTrack, null == TX ? void 0 : TX.globalPrivacyControl].some((UU => vz(UU)))
      }
    };

    function dF(UU, XU) {
      var zU;
      const cU = null == UU || null === (zU = UU.config) || void 0 === zU ? void 0 : zU.get_current_url;
      if (!Bz(cU)) return XU;
      try {
        const UU = cU(XU);
        return Wz(UU) && UU ? UU : XU
      } catch (UU) {
        return fA.error("Error in get_current_url, falling back to window.location.href", UU), XU
      }
    }

    function LF(UU) {
      var XU;
      return UU instanceof Element && ("__POSTHOG_TOOLBAR__" === UU.id || !!(null === (XU = UU.closest) || void 0 === XU ? void 0 : XU.call(UU, ".toolbar-global-fade-container")))
    }

    function eF(UU) {
      return !!UU && 1 === UU.nodeType
    }

    function CF(UU, XU) {
      return !!UU && !!UU.tagName && UU.tagName.toLowerCase() === XU.toLowerCase()
    }

    function wF(UU) {
      return !!UU && 3 === UU.nodeType
    }

    function qF(UU) {
      return !!UU && 11 === UU.nodeType && eF(UU.host)
    }

    function OF(UU) {
      return UU ? Iz(UU).split(/\s+/) : []
    }

    function SF(UU, XU) {
      const zU = function(UU) {
        var XU;
        const zU = null == KX || null === (XU = KX.location) || void 0 === XU ? void 0 : XU.href;
        return Pz(zU) ? void 0 : dF(UU, zU)
      }(XU);
      return !!(zU && UU && UU.some((UU => zU.match(UU))))
    }

    function rF(UU) {
      let XU = "";
      switch (typeof UU.className) {
        case "string":
          XU = UU.className;
          break;
        case "object":
          XU = (UU.className && "baseVal" in UU.className ? UU.className.baseVal : null) || UU.getAttribute("class") || "";
          break;
        default:
          XU = ""
      }
      return OF(XU)
    }

    function uF(UU) {
      return ez(UU) ? null : Iz(UU).split(/(\s+)/).filter((UU => No(UU))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function fF(UU) {
      let XU = "";
      return co(UU) && !yo(UU) && UU.childNodes && UU.childNodes.length && MA(UU.childNodes, (function(UU) {
        var zU;
        wF(UU) && UU.textContent && (XU += null !== (zU = uF(UU.textContent)) && void 0 !== zU ? zU : "")
      })), Iz(XU)
    }

    function iF(UU) {
      var XU;
      return Pz(UU.target) ? UU.srcElement || null : (null === (XU = UU.target) || void 0 === XU ? void 0 : XU.shadowRoot) ? UU.composedPath()[0] || null : UU.target || null
    }
    const HF = ["a", "button", "form", "input", "select", "textarea", "label"];

    function MF(UU, XU) {
      const zU = UU.matches || UU.matchesSelector || UU.msMatchesSelector || UU.mozMatchesSelector || UU.webkitMatchesSelector || UU.oMatchesSelector;
      try {
        return !!zU && zU.call(UU, XU)
      } catch (UU) {
        return !1
      }
    }

    function vF(UU, XU) {
      if (Pz(XU)) return !0;
      for (const zU of UU)
        if (XU.some((UU => MF(zU, UU)))) return !0;
      return !1
    }

    function VF(UU) {
      const XU = UU.parentNode;
      return !(!XU || !eF(XU)) && XU
    }
    const sF = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      nF = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      mF = [...nF, "+", "-", "\u2212", "\u2013"],
      lF = mF.length + 10,
      xF = ["button", "a", "input", "select", "textarea", "label"],
      JF = ["button", "link", "tab", "menuitem", "option"],
      jF = (UU, XU) => /[a-z0-9]/i.test(XU) ? Nz(mF, XU) ? new RegExp(`\\b${XU}\\b`).test(UU) : UU.includes(XU) : UU === XU,
      KF = UU => Nz(xF, UU.tagName.toLowerCase()) || Nz(JF, (UU.getAttribute("role") || "").toLowerCase());

    function bF(UU) {
      let XU = "",
        zU = "";
      const cU = UU => {
        eF(UU) && co(UU) && !yo(UU) && (XU += ` ${fF(UU)}`, zU = zU || UU.getAttribute("aria-label") || "", MA(UU.childNodes, cU))
      };
      cU(UU), XU = Iz(XU.replace(/\s+/g, " "));
      const yU = (No(XU) ? XU : "").toLowerCase(),
        QU = UU.getAttribute("aria-label") || (yU ? "" : zU);
      return {
        safeText: yU,
        ariaLabel: Iz(QU).toLowerCase()
      }
    }
    const TF = [".ph-no-rageclick", ".ph-no-capture"],
      hF = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Uo(UU, XU) {
      if (!KX || Xo(UU)) return !1;
      let zU, cU, yU;
      var QU, AU;
      if (qz(XU) ? (zU = !!XU && TF, cU = void 0, yU = !1) : (zU = null !== (QU = null == XU ? void 0 : XU.css_selector_ignorelist) && void 0 !== QU ? QU : TF, cU = null == XU ? void 0 : XU.content_ignorelist, yU = null !== (AU = null == XU ? void 0 : XU.ignore_text_selection) && void 0 !== AU && AU), !1 === zU) return !1;
      if (yU && function(UU) {
          return !(!UU || !eF(UU)) && (!!CF(UU, "textarea") || (CF(UU, "input") ? Nz(hF, (UU.getAttribute("type") || "").toLowerCase()) : function(UU) {
            var XU;
            if (UU.isContentEditable) return !0;
            const zU = null === (XU = UU.getAttribute) || void 0 === XU ? void 0 : XU.call(UU, "contenteditable");
            return "true" === zU || "" === zU
          }(UU)))
        }(UU)) return !1;
      const {
        targetElementList: FU
      } = zo(UU, !1);
      return !(cU && function(UU, XU) {
        let zU, {
          safeText: cU,
          ariaLabel: yU
        } = XU;
        if (!0 === UU) zU = nF;
        else {
          if (!Gz(UU)) return !1;
          if (UU.length > lF) return fA.error(`[PostHog] content_ignorelist array cannot exceed ${lF} items. Use css_selector_ignorelist for more complex matching.`), !1;
          zU = UU.map((UU => UU.toLowerCase()))
        }
        return zU.some((UU => jF(cU, UU) || jF(yU, UU)))
      }(cU, function(UU, XU) {
        for (const zU of XU)
          if (KF(zU)) return bF(zU);
        for (const zU of XU) {
          try {
            if ("pointer" !== (null == KX ? void 0 : KX.getComputedStyle(zU).getPropertyValue("cursor"))) break
          } catch (UU) {
            break
          }
          const XU = bF(zU);
          if (XU.safeText || XU.ariaLabel) return XU
        }
        return bF(UU)
      }(UU, FU)) || vF(FU, zU))
    }
    const Xo = UU => !UU || CF(UU, "html") || !eF(UU),
      zo = (UU, XU) => {
        if (!KX || Xo(UU)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let zU = !1;
        const cU = [UU];
        let yU = UU;
        for (; yU.parentNode && !CF(yU, "body");) {
          if (qF(yU.parentNode)) {
            cU.push(yU.parentNode.host), yU = yU.parentNode.host;
            continue
          }
          const QU = VF(yU);
          if (!QU) break;
          if (XU || HF.indexOf(QU.tagName.toLowerCase()) > -1) zU = !0;
          else try {
            const UU = KX.getComputedStyle(QU);
            UU && "pointer" === UU.getPropertyValue("cursor") && (zU = !0)
          } catch (UU) {}
          cU.push(QU), yU = QU
        }
        return {
          parentIsUsefulElement: zU,
          targetElementList: cU
        }
      };

    function co(UU) {
      const XU = new Set;
      let zU = 0;
      for (let QU = UU; QU.parentNode && !CF(QU, "body"); QU = QU.parentNode) {
        if (zU++ >= 1e3 || XU.has(QU)) return !1;
        XU.add(QU);
        const UU = rF(QU);
        if (Nz(UU, "ph-sensitive") || Nz(UU, "ph-no-capture")) return !1
      }
      if (Nz(rF(UU), "ph-include")) return !0;
      const cU = UU.type || "";
      if (Wz(cU)) switch (cU.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const yU = UU.name || UU.id || "";
      return !Wz(yU) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(yU.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function yo(UU) {
      return !!(CF(UU, "input") && !["button", "checkbox", "submit", "reset"].includes(UU.type) || CF(UU, "select") || CF(UU, "textarea") || "true" === UU.getAttribute("contenteditable"))
    }
    const Qo = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      Ao = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      Fo = [16, 15, 14, 13],
      oo = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Do = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Eo = /[0-9A-Za-z_]/;

    function Yo(UU) {
      let XU = 0,
        zU = !1;
      for (let cU = UU.length - 1; cU >= 0; cU--) {
        let yU = UU.charCodeAt(cU) - 48;
        zU && (yU *= 2, yU > 9 && (yU -= 9)), XU += yU, zU = !zU
      }
      return XU % 10 == 0
    }

    function No(UU) {
      let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (ez(UU)) return !1;
      if (Wz(UU)) {
        if (UU = Iz(UU), XU ? Qo.test((UU || "").replace(/[- ]/g, "")) : function(UU) {
            let XU;
            for (Ao.lastIndex = 0; XU = Ao.exec(UU);) {
              const UU = XU[2];
              if (!UU) continue;
              const zU = UU.replace(/[- ]/g, "");
              for (let XU = 0; zU.length > XU; XU++)
                for (const UU of Fo) {
                  const cU = XU + UU;
                  if (zU.length >= cU) {
                    const UU = zU.slice(XU, cU);
                    if (Qo.test(UU) && Yo(UU)) return !0
                  }
                }
            }
            return !1
          }(UU)) return !1;
        if (XU ? oo.test(UU) : function(UU) {
            let XU;
            for (Do.lastIndex = 0; XU = Do.exec(UU);) {
              const UU = XU[1],
                zU = XU[3];
              if (!(UU && zU && Eo.test(UU) && Eo.test(zU))) return !0
            }
            return !1
          }(UU)) return !1
      }
      return !0
    }

    function Io(UU) {
      let XU = fF(UU);
      return XU = `${XU} ${po(UU)}`.trim(), No(XU) ? XU : ""
    }

    function po(UU) {
      let XU = "";
      return UU && UU.childNodes && UU.childNodes.length && MA(UU.childNodes, (function(UU) {
        var zU;
        if (UU && "span" === (null === (zU = UU.tagName) || void 0 === zU ? void 0 : zU.toLowerCase())) try {
          const zU = fF(UU);
          XU = `${XU} ${zU}`.trim(), UU.childNodes && UU.childNodes.length && (XU = `${XU} ${po(UU)}`.trim())
        } catch (UU) {
          fA.error("[AutoCapture]", UU)
        }
      })), XU
    }

    function ao(UU) {
      return UU.replace(/"|\\"/g, '\\"')
    }

    function to(UU) {
      const XU = UU.attr__class;
      if (XU) return Gz(XU) ? XU : OF(XU)
    }
    const go = iA("[Dead Clicks]"),
      ko = () => !0,
      Go = UU => {
        var XU;
        const zU = !!(null === (XU = UU.instance.persistence) || void 0 === XU ? void 0 : XU.get_property(vU)),
          cU = UU.instance.config.capture_dead_clicks;
        return qz(cU) ? cU : !!Zz(cU) || zU
      };
    var Bo = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(UU, XU, zU) {
        this.instance = UU, this.isEnabled = XU, this.onCapture = zU, this.startIfEnabledOrStop()
      }
      onRemoteConfig(UU) {
        if (!UU.ok) return;
        const XU = UU.config;
        "captureDeadClicks" in XU && (this.instance.persistence && this.instance.persistence.register({
          [vU]: XU.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(UU) {
        var XU, zU, cU;
        (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.initDeadClicksAutocapture) ? UU(): null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this.instance, "dead-clicks-autocapture", (XU => {
          XU ? go.error("failed to load script", XU) : UU()
        }))
      }
      _start() {
        var UU;
        if (hX) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (UU = Fz.__PosthogExtensions__) || void 0 === UU ? void 0 : UU.initDeadClicksAutocapture)) {
            const UU = Zz(this.instance.config.capture_dead_clicks) ? ky({}, this.instance.config.capture_dead_clicks) : {};
            UU.__onCapture = this.onCapture, this.onCapture && (UU.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = Fz.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, UU), this._lazyLoadedDeadClicksAutocapture.start(hX), go.info("starting...")
          }
        } else go.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, go.info("stopping..."))
      }
    };
    const Zo = iA("[SegmentIntegration]");

    function Ro(UU, XU) {
      let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const cU = UU.config.segment;
      if (!cU) return XU();
      const {
        analytics: yU,
        filterProperties: QU
      } = (UU => Bz(UU.register))(AU = cU) ? {
        analytics: AU
      } : AU;
      var AU;
      ! function(UU, XU, zU, cU) {
        const yU = XU => {
            const yU = () => XU.anonymousId() || zF();
            UU.config.get_device_id = yU, cU && XU.id() && (UU.register({
              distinct_id: XU.id(),
              $device_id: yU()
            }), UU.persistence.set_property(kX, sX)), zU(cU ? void 0 : XU.anonymousId() || void 0)
          },
          QU = XU.user();
        "then" in QU && Bz(QU.then) ? QU.then(yU) : yU(QU)
      }(UU, yU, (zU => {
        yU.register(function(UU, XU) {
          let {
            filterProperties: zU
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || Zo.warn("This browser does not have Promise support, and can not use the segment integration");
          const cU = (cU, yU) => {
            if (!yU) return cU;
            const QU = !!XU && cU.event.anonymousId === XU && !cU.event.userId;
            QU || cU.event.userId || cU.event.anonymousId === UU.get_distinct_id() || (Zo.info("No userId set, resetting PostHog"), UU.reset()), QU || (XU = void 0), cU.event.userId && cU.event.userId !== UU.get_distinct_id() && (Zo.info("UserId set, identifying with PostHog"), UU.identify(cU.event.userId));
            let AU = UU.calculateEventProperties(yU, cU.event.properties);
            if (!ez(zU)) {
              const UU = cU.event.properties || {},
                XU = {};
              for (const zU of Object.keys(AU)) gz.call(UU, zU) || (XU[zU] = AU[zU]);
              const yU = ((UU, XU) => {
                const zU = Gz(UU) ? UU : [UU];
                let cU = ky({}, XU);
                for (const yU of zU) try {
                  if (cU = yU(cU), ez(cU)) return null
                } catch (UU) {
                  return Zo.error("Error in Segment filterProperties:", UU), null
                }
                return cU
              })(zU, XU);
              if (ez(yU)) return cU;
              AU = yU
            }
            return cU.event.properties = Object.assign({}, AU, cU.event.properties), cU
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: UU => cU(UU, UU.event.event),
            page: UU => cU(UU, lX),
            identify: UU => cU(UU, JX),
            screen: UU => cU(UU, "$screen")
          }
        }(UU, zU, {
          filterProperties: QU
        })).then((() => {
          XU()
        }), (UU => {
          Zo.error("Failed to register the Segment integration", UU), XU()
        }))
      }), zU)
    }
    const Po = "posthog-js";

    function Wo(UU) {
      let {
        organization: XU,
        projectId: zU,
        prefix: cU,
        severityAllowList: yU = ["error"],
        sendExceptionsToPostHog: QU = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return AU => {
        var FU, oU, DU, EU, YU;
        if ("*" !== yU && !yU.includes(AU.level) || !UU.__loaded) return AU;
        AU.tags || (AU.tags = {});
        const NU = UU.requestRouter.endpointFor("ui", `/project/${UU.config.token}/person/${UU.get_distinct_id()}`);
        AU.tags["PostHog Person URL"] = NU, UU.sessionRecordingStarted() && (AU.tags["PostHog Recording URL"] = UU.get_session_replay_url({
          withTimestamp: !0
        }));
        const IU = (null === (FU = AU.exception) || void 0 === FU ? void 0 : FU.values) || [],
          pU = IU.map((UU => ky(ky({}, UU), {}, {
            stacktrace: UU.stacktrace ? ky(ky({}, UU.stacktrace), {}, {
              type: "raw",
              frames: (UU.stacktrace.frames || []).map((UU => ky(ky({}, UU), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          aU = {
            $exception_message: (null === (oU = IU[0]) || void 0 === oU ? void 0 : oU.value) || AU.message,
            $exception_type: null === (DU = IU[0]) || void 0 === DU ? void 0 : DU.type,
            $exception_level: AU.level,
            $exception_list: pU,
            $sentry_event_id: AU.event_id,
            $sentry_exception: AU.exception,
            $sentry_exception_message: (null === (EU = IU[0]) || void 0 === EU ? void 0 : EU.value) || AU.message,
            $sentry_exception_type: null === (YU = IU[0]) || void 0 === YU ? void 0 : YU.type,
            $sentry_tags: AU.tags
          };
        var tU;
        return XU && zU && (aU.$sentry_url = (cU || "https://sentry.io/organizations/") + XU + "/issues/?project=" + zU + "&query=" + AU.event_id), QU && (null === (tU = UU.exceptions) || void 0 === tU || tU.sendExceptionEvent(aU)), AU
      }
    }
    var Lo = class {
        constructor(UU, XU, zU, cU, yU, QU) {
          this.name = Po, this.setupOnce = function(AU) {
            AU(Wo(UU, {
              organization: XU,
              projectId: zU,
              prefix: cU,
              severityAllowList: yU,
              sendExceptionsToPostHog: null == QU || QU
            }))
          }
        }
      },
      eo = class {
        constructor(UU) {
          this._onSessionIdChange = (UU, XU, zU) => {
            zU && (zU.noSessionId || zU.activityTimeout || zU.sessionPastMaximumLength || zU.crossTabAdoption) && (fA.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: UU,
              changeReason: zU
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = UU, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var UU;
          this._unsubscribeSessionId = null === (UU = this._instance.sessionManager) || void 0 === UU ? void 0 : UU.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var UU;
          null === (UU = this._unsubscribeSessionId) || void 0 === UU || UU.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(UU, XU) {
          var zU;
          const cU = this._previousPageViewProperties(UU, XU);
          return this._currentPageview = {
            pathname: null !== (zU = null == KX ? void 0 : KX.location.pathname) && void 0 !== zU ? zU : "",
            pageViewId: XU,
            timestamp: UU
          }, this._instance.scrollManager.resetContext(), cU
        }
        doPageLeave(UU) {
          var XU;
          return this._previousPageViewProperties(UU, null === (XU = this._currentPageview) || void 0 === XU ? void 0 : XU.pageViewId)
        }
        doEvent() {
          var UU;
          return {
            $pageview_id: null === (UU = this._currentPageview) || void 0 === UU ? void 0 : UU.pageViewId
          }
        }
        _previousPageViewProperties(UU, XU) {
          const zU = this._currentPageview;
          if (!zU) return {
            $pageview_id: XU
          };
          let cU = {
            $pageview_id: XU,
            $prev_pageview_id: zU.pageViewId
          };
          const yU = this._instance.scrollManager.getContext();
          if (yU && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: UU,
              lastScrollY: XU,
              maxScrollY: zU,
              maxContentHeight: QU,
              lastContentY: AU,
              maxContentY: FU
            } = yU;
            if (!(Pz(UU) || Pz(XU) || Pz(zU) || Pz(QU) || Pz(AU) || Pz(FU))) {
              UU = Math.ceil(UU), XU = Math.ceil(XU), zU = Math.ceil(zU), QU = Math.ceil(QU), AU = Math.ceil(AU), FU = Math.ceil(FU);
              const yU = UU > 1 ? Jz(XU / UU, 0, 1, fA) : 1,
                oU = UU > 1 ? Jz(zU / UU, 0, 1, fA) : 1,
                DU = QU > 1 ? Jz(AU / QU, 0, 1, fA) : 1,
                EU = QU > 1 ? Jz(FU / QU, 0, 1, fA) : 1;
              cU = vA(cU, {
                $prev_pageview_last_scroll: XU,
                $prev_pageview_last_scroll_percentage: yU,
                $prev_pageview_max_scroll: zU,
                $prev_pageview_max_scroll_percentage: oU,
                $prev_pageview_last_content: AU,
                $prev_pageview_last_content_percentage: DU,
                $prev_pageview_max_content: FU,
                $prev_pageview_max_content_percentage: EU
              })
            }
          }
          return zU.pathname && (cU.$prev_pageview_pathname = zU.pathname), zU.timestamp && (cU.$prev_pageview_duration = (UU.getTime() - zU.timestamp.getTime()) / 1e3), cU
        }
      };
    const Co = ["flags", "surveys"],
      wo = {
        [RU]: {
          exposure: "hidden"
        },
        [LU]: {
          exposure: "hidden"
        },
        [eU]: {
          exposure: "hidden"
        },
        [SU]: {
          exposure: "hidden"
        },
        [wU]: {
          exposure: "hidden"
        },
        [OU]: {
          exposure: "hidden"
        },
        [rU]: {
          exposure: "event"
        },
        [uU]: {
          exposure: "hidden"
        },
        [sU]: {
          exposure: "hidden"
        },
        [fU]: {
          exposure: "event"
        },
        [iU]: {
          exposure: "hidden"
        },
        [HU]: {
          exposure: "event"
        },
        [MU]: {
          exposure: "event"
        },
        [vU]: {
          exposure: "event"
        },
        [VU]: {
          exposure: "hidden"
        },
        [nU]: {
          exposure: "event"
        },
        [mU]: {
          exposure: "hidden"
        },
        [lU]: {
          exposure: "hidden"
        },
        [TU]: {
          exposure: "hidden"
        },
        [hU]: {
          exposure: "event"
        },
        [xU]: {
          exposure: "event",
          shouldSkipFromEventProperties: UU => Lz(UU)
        },
        [UX]: {
          exposure: "event"
        },
        [XX]: {
          exposure: "event"
        },
        [zX]: {
          exposure: "event"
        },
        [cX]: {
          exposure: "event"
        },
        [yX]: {
          exposure: "hidden"
        },
        [IU]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [FU]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [AU]: {
          exposure: "hidden"
        },
        [oU]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [kU]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [YU]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [NU]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [GU]: {
          exposure: "hidden"
        },
        [BU]: {
          exposure: "hidden"
        },
        [aU]: {
          exposure: "hidden"
        },
        [pU]: {
          exposure: "hidden"
        },
        [AX]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [FX]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [oX]: {
          exposure: "event"
        },
        [DX]: {
          exposure: "hidden"
        },
        [EX]: {
          exposure: "hidden"
        },
        [YX]: {
          exposure: "hidden"
        },
        [NX]: {
          exposure: "hidden"
        },
        [IX]: {
          exposure: "hidden"
        },
        [pX]: {
          exposure: "event"
        },
        [aX]: {
          exposure: "event"
        },
        [tX]: {
          exposure: "event"
        },
        [gX]: {
          exposure: "event"
        },
        [tU]: {
          exposure: "hidden"
        },
        [gU]: {
          exposure: "hidden"
        },
        [QX]: {
          exposure: "event"
        },
        [DU]: {
          exposure: "hidden"
        },
        [EU]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [kX]: {
          exposure: "hidden"
        },
        [GX]: {
          exposure: "hidden"
        },
        [BX]: {
          exposure: "hidden"
        },
        [ZX]: {
          exposure: "hidden"
        },
        [RX]: {
          exposure: "hidden"
        },
        [PX]: {
          exposure: "hidden"
        },
        [WX]: {
          exposure: "hidden"
        },
        [JU]: {
          exposure: "event"
        },
        [jU]: {
          exposure: "event"
        },
        [KU]: {
          exposure: "event"
        },
        [bU]: {
          exposure: "event"
        },
        [eX]: {
          exposure: "event"
        },
        [CX]: {
          exposure: "event"
        },
        [wX]: {
          exposure: "hidden"
        },
        [qX]: {
          exposure: "hidden"
        },
        [OX]: {
          exposure: "hidden"
        },
        [SX]: {
          exposure: "hidden"
        },
        [rX]: {
          exposure: "hidden"
        },
        [uX]: {
          exposure: "hidden"
        },
        [fX]: {
          exposure: "hidden"
        },
        [iX]: {
          exposure: "hidden"
        },
        [HX]: {
          exposure: "hidden"
        },
        [MX]: {
          exposure: "event"
        }
      },
      qo = [
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
      Oo = UU => {
        const XU = wo[UU];
        if (XU) return XU;
        for (const [zU, cU] of qo)
          if (0 === UU.indexOf(zU)) return cU
      };

    function So() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (cU) {
        return
      }
    }
    const ro = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (cU) {
          return !1
        }
      },
      uo = (UU, XU) => UU >= XU && ro(),
      fo = (UU, XU, zU, cU) => {
        if (0 === UU) {
          if (ro()) {
            const UU = XU + 1;
            return UU === zU && cU(), UU
          }
          return XU
        }
        return 0
      },
      io = (UU, XU) => {
        try {
          let zU;
          return JSON.stringify(UU, ((UU, XU) => {
            var cU;
            return fz(XU) ? (null !== (cU = zU) && void 0 !== cU || (zU = new WeakMap), zU.has(XU) || zU.set(XU, mA(XU)), zU.get(XU)) : "bigint" == typeof XU ? XU.toString() : XU
          }), XU)
        } catch (XU) {
          return az(UU)
        }
      },
      Ho = UU => {
        const XU = null == hX ? void 0 : hX.createElement("a");
        return Pz(XU) ? null : (XU.href = UU, XU)
      },
      Mo = function(UU, XU) {
        const zU = ((UU.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let cU;
        for (let yU = 0; zU.length > yU; yU++) {
          const UU = zU[yU].split("=");
          if (UU[0] === XU) {
            cU = UU;
            break
          }
        }
        if (!Gz(cU) || 2 > cU.length) return "";
        {
          let UU = cU[1];
          try {
            UU = decodeURIComponent(UU)
          } catch (XU) {
            fA.error("Skipping decoding for malformed query param: " + UU)
          }
          return UU.replace(/\+/g, " ")
        }
      },
      vo = function(UU, XU, zU) {
        if (!UU || !XU || !XU.length) return UU;
        const cU = UU.split("#"),
          yU = cU[1],
          QU = (cU[0] || "").split("?"),
          AU = QU[1],
          FU = QU[0],
          oU = (AU || "").split("&"),
          DU = [];
        for (let YU = 0; oU.length > YU; YU++) {
          const UU = oU[YU].split("=");
          Gz(UU) && (XU.includes(UU[0]) ? DU.push(UU[0] + "=" + zU) : DU.push(oU[YU]))
        }
        let EU = FU;
        return null != AU && (EU += "?" + DU.join("&")), null != yU && (EU += "#" + yU), EU
      },
      Vo = function(UU, XU) {
        const zU = UU.match(new RegExp(XU + "=([^&]*)"));
        return zU ? zU[1] : null
      },
      so = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      no = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...so],
      mo = "<masked>",
      xo = ["li_fat_id"];

    function Jo(UU, XU, zU) {
      if (!hX) return {};
      const cU = XU ? [...so, ...zU || []] : [],
        yU = jo(vo(hX.URL, cU, mo), UU),
        QU = function() {
          const UU = {};
          return MA(xo, (function(XU) {
            const zU = KA(XU);
            UU[XU] = zU || null
          })), UU
        }();
      return vA(QU, yU)
    }

    function jo(UU, XU) {
      const zU = no.concat(XU || []),
        cU = {};
      return MA(zU, (function(XU) {
        const zU = Mo(UU, XU);
        cU[XU] = zU || null
      })), cU
    }

    function Ko(UU) {
      const XU = function(UU) {
          return UU ? 0 === UU.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === UU.search("https?://(.*)bing.com") ? "bing" : 0 === UU.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === UU.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(UU),
        zU = "yahoo" != XU ? "q" : "p",
        cU = {};
      if (!Lz(XU)) {
        cU.$search_engine = XU;
        const UU = hX ? Mo(hX.referrer, zU) : "";
        UU.length && (cU.ph_keyword = UU)
      }
      return cU
    }

    function bo() {
      return navigator.language || navigator.userLanguage
    }

    function To() {
      const UU = bo();
      return "string" == typeof UU ? UU.split("-")[0] : void 0
    }
    const ho = "$direct";

    function UD() {
      return (null == hX ? void 0 : hX.referrer) || ho
    }

    function XD(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const cU = UU ? [...so, ...XU || []] : [],
        yU = zU ? Ey(null == Uz ? void 0 : Uz.href) : null == Uz ? void 0 : Uz.href,
        QU = null == yU ? void 0 : yU.substring(0, 1e3);
      return {
        r: UD().substring(0, 1e3),
        u: QU ? vo(QU, cU, mo) : void 0
      }
    }

    function zD(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var zU;
      const {
        r: cU,
        u: yU
      } = UU, QU = XU ? Ey(yU) : yU, AU = {
        $referrer: cU,
        $referring_domain: null == cU ? void 0 : cU == ho ? ho : null === (zU = Ho(cU)) || void 0 === zU ? void 0 : zU.host
      };
      if (QU) {
        AU.$current_url = QU;
        const UU = Ho(QU);
        AU.$host = null == UU ? void 0 : UU.host, AU.$pathname = null == UU ? void 0 : UU.pathname;
        const XU = jo(QU);
        vA(AU, XU)
      }
      if (cU) {
        const UU = Ko(cU);
        vA(AU, UU)
      }
      return AU
    }

    function cD() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (cU) {
        return
      }
    }
    const yD = {
        flags: EU,
        surveys: FX
      },
      QD = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      AD = UU => `${UU}_cookie_identity_change_pending`,
      FD = UU => {
        let XU = "",
          zU = 0;
        for (const cU of UU) {
          const UU = encodeURIComponent(JSON.stringify(cU).slice(1, -1)).length;
          if (zU + UU > 1e3) break;
          XU += cU, zU += UU
        }
        return XU
      },
      oD = "main",
      DD = [IU, FU, oU, kU, YU, EU, NU, aU],
      ED = UU => -1 !== DD.indexOf(UU),
      YD = [wU, OU],
      ND = UU => -1 !== YD.indexOf(UU),
      ID = (UU, XU) => {
        try {
          return JSON.stringify(UU) === JSON.stringify(XU)
        } catch (QU) {
          return UU === XU
        }
      },
      pD = UU => {
        if (!UU) return {};
        const XU = JSON.parse(UU);
        return Zz(XU) ? XU : {}
      },
      aD = (UU, XU) => {
        MA(UU, ((zU, cU) => {
          const yU = Oo(cU);
          yU && "event" !== yU.exposure || {}.hasOwnProperty.call(XU, cU) || delete UU[cU]
        }))
      };
    var tD = class {
      constructor(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !UU.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = UU, this._ownsSplitStorage = zU, this.props = {}, this._campaign_params_url = void 0, this._name = (UU => {
            let XU = "";
            return UU.token && (XU = UU.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), UU.persistence_name ? "ph_" + UU.persistence_name : "ph_" + XU + "_posthog"
          })(UU), this._disabled = UU.disable_persistence || !!XU, this.Ga = this._buildStorage(UU), this._splitStorage = this._resolveSplitStorage(UU), this.load(cU), this._markLoadedCrossTabFeatureFlagChangesPending(), UU.debug && fA.info("Persistence loaded", UU.persistence, ky({}, this.props)), this.update_config(UU, UU, XU), this.save(), KX) {
          const UU = () => this.flush();
          JA(KX, "beforeunload", UU, {
            capture: !1
          }), JA(KX, "pagehide", UU, {
            capture: !1
          }), this._onStorage = UU => {
            if (this._splitStorageEligible && (!UU.storageArea || UU.storageArea === (null == KX ? void 0 : KX.localStorage)) && UU.key)
              if (UU.key !== this._name) {
                if (this._splitStorage) {
                  const XU = Co.find((XU => UU.key === this._groupEntryName(XU)));
                  XU && this._syncCrossTabFeatureFlagProperties(UU.key, XU)
                }
              } else this._syncCrossTabFeatureFlagProperties(UU.key, oD)
          }, JA(KX, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(UU) {
        Object.entries(UU).forEach((UU => {
          let [XU, zU] = UU;
          const cU = this._pendingCrossTabFeatureFlagChanges.get(XU);
          if (!ED(XU) || !0 === cU) return;
          if (!0 === zU) return void this._setCrossTabFeatureFlagChangesPending(XU, !0);
          const yU = new Set(cU || []);
          zU.forEach((UU => yU.add(UU))), yU.size && this._setCrossTabFeatureFlagChangesPending(XU, yU)
        }))
      }
      onCrossTabFeatureFlagChange(UU) {
        return this._crossTabFeatureFlagHandlers.add(UU), () => this._crossTabFeatureFlagHandlers.delete(UU)
      }
      destroy() {
        this._onStorage && KX && (KX.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(UU, XU) {
        let zU, cU, yU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (cU = DF._get(UU), Lz(cU)) {
            const UU = this._slotWriteState(XU);
            return UU.storageValue = null, XU !== oD && (UU.persisted = !1), !1
          }
          zU = pD(cU)
        } catch (UU) {
          return !1
        }
        const QU = XU === oD ? zU : DF._parse(this._name);
        if (QU && this._hasCrossTabFeatureFlagIdentityMismatch(QU)) return !1;
        const AU = this._mergeCrossTabFeatureFlagProperties(zU, XU, yU);
        return XU === oD && this._splitStorage && !ID(this._partitionProps().main, zU) || this._rememberCrossTabStorageFingerprint(zU, XU, !0, cU), AU
      }
      _hasCrossTabFeatureFlagIdentityMismatch(UU) {
        const XU = this.props[PU],
          zU = UU[PU];
        return !Pz(XU) && !Pz(zU) && XU !== zU
      }
      _rememberCrossTabStorageFingerprint(UU, XU, zU, cU) {
        const yU = this._slotWriteState(XU);
        yU.storageValue = cU, XU !== oD && (yU.persisted = zU);
        try {
          yU.fingerprint = this._entryFingerprint(UU, XU)
        } catch (UU) {
          yU.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(UU, XU, zU) {
        let cU = !1;
        return DD.forEach((zU => {
          var yU;
          const QU = null === (yU = Oo(zU)) || void 0 === yU ? void 0 : yU.storageGroup;
          if (XU === oD && this._splitStorage && QU || XU !== oD && QU !== XU) return;
          const AU = zU in UU,
            FU = this._mergePendingCrossTabFeatureFlagChanges(zU, AU ? UU[zU] : void 0),
            oU = this._pendingCrossTabFeatureFlagChanges.has(zU) ? zU in this.props : AU;
          oU === zU in this.props && ID(FU, this.props[zU]) || (oU ? this._setProp(zU, FU, !1) : this._deleteProp(zU, !1), cU = !0)
        })), cU && zU && this._crossTabFeatureFlagHandlers.forEach((UU => UU())), cU
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const UU = DF._get(this._name),
            XU = this._slotWriteState(oD);
          let zU, cU = !1,
            yU = !1;
          if (UU !== XU.storageValue)
            if (Lz(UU)) XU.storageValue = null;
            else {
              if (zU = pD(UU), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(zU), this._crossTabFeatureFlagIdentityMismatch) return !1;
              yU = this._mergeCrossTabFeatureFlagProperties(zU, oD, !1), !this._splitStorage || ID(this._partitionProps().main, zU) ? this._rememberCrossTabStorageFingerprint(zU, oD, !0, UU) : XU.storageValue = UU, cU = !0
            } return this._splitStorage && Co.forEach((UU => {
            const XU = DF._get(this._groupEntryName(UU)),
              QU = this._slotWriteState(UU),
              AU = zU || {},
              FU = cU && DD.some((XU => {
                var zU;
                return (null === (zU = Oo(XU)) || void 0 === zU ? void 0 : zU.storageGroup) === UU && XU in AU
              }));
            if (XU === QU.storageValue && !FU) return;
            if (Lz(XU)) return QU.storageValue = null, QU.persisted = !1, void(FU && (yU = this._mergeCrossTabFeatureFlagProperties(AU, UU, !1) || yU));
            const oU = pD(XU);
            yU = this._mergeCrossTabFeatureFlagProperties(oU, UU, !1) || yU, this._rememberCrossTabStorageFingerprint(oU, UU, !0, XU)
          })), yU
        } catch (cU) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(UU, XU) {
        this._pendingCrossTabFeatureFlagChanges.set(UU, XU);
        const zU = Oo(UU);
        (null == zU ? void 0 : zU.volatile) || (this._slotWriteState((this._splitStorage ? null == zU ? void 0 : zU.storageGroup : void 0) || oD).fingerprint = void 0, this._markGroupDirty(UU))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        DD.forEach((UU => this._pendingCrossTabFeatureFlagChanges.set(UU, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const UU = DF._get(this._name),
            XU = pD(UU);
          this._slotWriteState(oD).storageValue = UU, DD.forEach((UU => {
            var zU;
            const cU = this._splitStorage ? null === (zU = Oo(UU)) || void 0 === zU ? void 0 : zU.storageGroup : void 0,
              yU = cU ? DF._get(this._groupEntryName(cU)) : null;
            if (cU) {
              const UU = this._slotWriteState(cU);
              UU.storageValue = yU, UU.persisted = !Lz(yU)
            }
            const QU = cU && !Lz(yU) ? pD(yU) : XU;
            UU in this.props ? this._markPendingCrossTabFeatureFlagChanges(UU, QU[UU], this.props[UU]) : UU in QU && this._setCrossTabFeatureFlagChangesPending(UU, !0)
          }))
        } catch (cU) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(UU, XU) {
        const zU = this._pendingCrossTabFeatureFlagChanges.get(UU);
        if (!zU) return XU;
        if (!0 === zU) return this.props[UU];
        if ("$active_feature_flags" === UU) {
          const cU = new Set(Gz(XU) ? XU : []),
            yU = new Set(Gz(this.props[UU]) ? this.props[UU] : []);
          return zU.forEach((UU => yU.has(UU) ? cU.add(UU) : cU.delete(UU))), Array.from(cU)
        }
        const cU = Zz(XU) ? ky({}, XU) : {},
          yU = Zz(this.props[UU]) ? this.props[UU] : {};
        return zU.forEach((UU => {
          UU in yU ? cU[UU] = yU[UU] : delete cU[UU]
        })), cU
      }
      _markPendingCrossTabFeatureFlagChanges(UU, XU, zU) {
        if (!ED(UU)) return;
        const cU = this._pendingCrossTabFeatureFlagChanges.get(UU);
        if (!0 === cU) return;
        let yU = XU;
        if (this._splitStorageEligible) try {
          var QU;
          const XU = this._splitStorage ? null === (QU = Oo(UU)) || void 0 === QU ? void 0 : QU.storageGroup : void 0,
            zU = XU ? this._groupEntryName(XU) : this._name;
          yU = pD(DF._get(zU))[UU]
        } catch (UU) {}
        const AU = new Set(cU || []);
        if ("$active_feature_flags" === UU) {
          if (!Pz(XU) && !Gz(XU) || !Pz(yU) && !Gz(yU) || !Gz(zU)) return void this._setCrossTabFeatureFlagChangesPending(UU, !0);
          const cU = new Set(XU || []),
            QU = new Set(yU || []),
            FU = new Set(zU);
          new Set([...cU, ...FU]).forEach((UU => {
            cU.has(UU) !== FU.has(UU) && AU.add(UU)
          })), AU.forEach((UU => {
            QU.has(UU) === FU.has(UU) && AU.delete(UU)
          }))
        } else {
          if (!Zz(zU)) return void(ID(yU, zU) ? this._pendingCrossTabFeatureFlagChanges.delete(UU) : this._setCrossTabFeatureFlagChangesPending(UU, !0));
          {
            if (!Pz(XU) && !Zz(XU) || Pz(XU) && Rz(zU) && Pz(yU)) return void this._setCrossTabFeatureFlagChangesPending(UU, !0);
            const cU = Zz(XU) ? XU : {},
              QU = Zz(yU) ? yU : {};
            new Set([...Object.keys(cU), ...Object.keys(zU)]).forEach((UU => {
              UU in cU == UU in zU && ID(cU[UU], zU[UU]) || AU.add(UU)
            })), AU.forEach((UU => {
              UU in QU == UU in zU && ID(QU[UU], zU[UU]) && AU.delete(UU)
            }))
          }
        }
        AU.size ? this._setCrossTabFeatureFlagChangesPending(UU, AU) : this._pendingCrossTabFeatureFlagChanges.delete(UU)
      }
      _saveDebounceMs() {
        var UU;
        const XU = null === (UU = this._config) || void 0 === UU ? void 0 : UU.persistence_save_debounce_ms;
        return Cz(XU) && XU > 0 ? XU : 0
      }
      _rememberCurrentCookieProperties(UU) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (UU) try {
            const XU = aF(UU, this._config.cookie_persisted_properties || []),
              zU = gF(XU, this._config.cookie_persisted_properties || []),
              cU = JSON.stringify(XU) + "|" + JSON.stringify(zU),
              yU = FF._get(this._name) || void 0;
            yU && GF(this._name, yU) === cU && (this._lastSeenCookiePropertiesFingerprint = cU, this._lastSeenMainCookieValue = yU)
          } catch (UU) {} else try {
            const UU = FF._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = UU ? GF(this._name, UU) : void 0, this._lastSeenMainCookieValue = UU
          } catch (UU) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(UU) {
        let XU, zU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !zU || this._cookieSyncSuppressed || !UU.cookieWinsOnConflict || "localstorage+cookie" !== UU.persistence.toLowerCase()) return !1;
        try {
          XU = FF._get(this._name) || void 0
        } catch (UU) {}
        if (!XU || XU === this._lastSeenMainCookieValue) return !1;
        const cU = GF(this._name, XU);
        let yU;
        try {
          yU = pF(JSON.parse(XU))
        } catch (UU) {
          return !1
        }
        if ((FF._get(this._name) || void 0) !== XU) return !1;
        this._lastSeenCookiePropertiesFingerprint = cU, this._lastSeenMainCookieValue = XU;
        const QU = kF(this._name, XU),
          AU = [...YF, ...QU.properties],
          NU = {};
        if (Object.keys(yU).forEach((UU => {
            const XU = yU[UU];
            (Pz(XU) || Lz(XU) || "" === XU || "$user_state" === UU && "anonymous" !== XU && "identified" !== XU) && (NU[UU] = !0, delete yU[UU])
          })), Rz(yU)) return !1;
        const gU = "distinct_id" in yU || "anonymous" === yU.$user_state || "identified" === yU.$user_state,
          GU = this.props,
          BU = GU[PU],
          ZU = GU[kX],
          RU = vA({}, GU);
        [...YF, ...UU.cookie_persisted_properties || []].forEach((UU => {
          if (-1 !== AU.indexOf(UU) && !(UU in yU) && !NU[UU] && (gU || "distinct_id" !== UU && "$user_state" !== UU)) {
            const XU = RU[UU];
            (QU.isValid || -1 === YF.indexOf(UU) || !1 !== XU && 0 !== XU) && delete RU[UU]
          }
        })), this.props = vA(RU, yU), DD.forEach((UU => {
          const XU = UU in this.props;
          UU in GU === XU && ID(GU[UU], this.props[UU]) || (XU ? this._markPendingCrossTabFeatureFlagChanges(UU, GU[UU], this.props[UU]) : this._setCrossTabFeatureFlagChangesPending(UU, !0))
        })), !gU || "$user_state" in yU || "$user_state" in this.props || this._setProp(kX, VX);
        const WU = this.props[PU],
          dU = this.props[kX];
        return !gU || WU === BU && dU === ZU || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, PF._set(AD(this._name), !0), this._deleteProp(aU), this._deleteProp(FU), this._deleteProp(IU), this._deleteProp(oU), this._deleteProp(kU), this._deleteProp(YU), this._deleteProp(EU), this._deleteProp(DU), this._deleteProp(tU), "anonymous" !== dU || "identified" !== ZU && "anonymous" !== yU.$user_state && (Pz(BU) || WU === BU) || (aD(this.props, yU), this._deleteProp(pU)), "identified" === dU ? this.props.$user_id = WU : delete this.props.$user_id, this._deleteProp(LU)), !0
      }
      consumeCookieIdentityChange() {
        const UU = AD(this._name),
          XU = this._cookieIdentityChangePending || !!PF._get(UU);
        return this._cookieIdentityChangePending = !1, XU && PF._remove(UU), XU
      }
      _beginCookieSyncSuppression() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !UU || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[oD], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          UU ? this._publishSuppressedCookieSnapshot() : Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(UU) {
        -1 === QD.indexOf(UU.persistence.toLowerCase()) && (fA.critical("Unknown persistence type " + UU.persistence + "; falling back to localStorage+cookie"), UU.persistence = "localStorage+cookie");
        const XU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const cU = [...YF, ...UU];
          return ky(ky({}, DF), {}, {
            _parse(UU) {
              try {
                let QU, AU = {};
                try {
                  QU = FF._get(UU) || void 0, AU = QU ? pF(JSON.parse(QU)) : {}
                } catch (UU) {}
                const FU = JSON.parse(DF._get(UU) || "{}");
                let oU;
                if (XU) {
                  const XU = kF(UU, QU),
                    zU = [...YF, ...XU.properties],
                    DU = {};
                  Object.keys(AU).forEach((UU => {
                    const XU = AU[UU];
                    Lz(XU) || "" === XU || "$user_state" === UU && "anonymous" !== XU && "identified" !== XU || (DU[UU] = XU)
                  }));
                  const EU = "distinct_id" in DU || "anonymous" === DU.$user_state || "identified" === DU.$user_state;
                  if (Object.keys(DU).length > 0) {
                    var yU;
                    const UU = FU[PU],
                      QU = null !== (yU = FU.$user_state) && void 0 !== yU ? yU : VX;
                    cU.forEach((UU => {
                      if (-1 !== zU.indexOf(UU) && !(UU in AU) && (EU || "distinct_id" !== UU && "$user_state" !== UU)) {
                        const zU = FU[UU];
                        (XU.isValid || -1 === YF.indexOf(UU) || !1 !== zU && 0 !== zU) && delete FU[UU]
                      }
                    })), !EU || "$user_state" in AU || "$user_state" in FU || (FU[kX] = VX), !EU || ("distinct_id" in DU ? DU[PU] : FU[PU]) === UU && ("$user_state" in DU ? DU[kX] : FU[kX]) === QU || (EF.forEach((UU => delete FU[UU])), "identified" === DU.$user_state && "distinct_id" in DU ? FU.$user_id = DU[PU] : delete FU.$user_id, "identified" !== DU.$user_state && (delete FU[QX], delete FU[pU]), delete FU.__alias)
                  }
                  oU = vA(FU, DU)
                } else oU = vA(AU, FU);
                return zU() || DF._set(UU, oU), oU
              } catch (UU) {}
              return null
            },
            _set(zU, cU, yU, QU, AU, FU) {
              const oU = DF._set(zU, cU, void 0, void 0, FU);
              try {
                const DU = aF(cU, UU);
                if (Object.keys(DU).length) {
                  if (XU) {
                    const XU = NF(zU),
                      EU = gF(DU, UU);
                    if (FF._set(XU, EU, yU, QU, AU, FU), FF._get(XU) !== JSON.stringify(EU)) {
                      FF._remove(XU, QU);
                      const UU = aF(cU);
                      return FF._set(zU, UU, yU, QU, AU, FU), oU
                    }
                  }
                  FF._set(zU, DU, yU, QU, AU, FU)
                }
              } catch (UU) {
                DF._error(UU)
              }
              return oU
            },
            _remove(UU, XU) {
              try {
                null == KX || KX.localStorage.removeItem(UU), FF._remove(UU, XU), FF._remove(NF(UU), XU)
              } catch (UU) {
                DF._error(UU)
              }
            }
          })
        }(UU.cookie_persisted_properties || [], UU.cookieWinsOnConflict, (() => !!this._disabled));
        let zU, cU = !1,
          yU = !1;
        const QU = UU.persistence.toLowerCase();
        return "localstorage" === QU && DF._is_supported() ? (zU = DF, yU = !0) : "localstorage+cookie" === QU && XU._is_supported() ? (zU = XU, yU = !0, cU = !0) : "sessionstorage" === QU && PF._is_supported() ? zU = PF : "memory" === QU ? zU = ZF : "cookie" === QU && FF._is_supported() ? (zU = FF, cU = !0) : XU._is_supported() ? (zU = XU, yU = !0, cU = !0) : FF._is_supported() ? (zU = FF, cU = !0) : zU = ZF, this._splitStorageEligible = yU, this._storesIdentityInCookie = cU, zU
      }
      _groupEntryName(UU) {
        return `${this._name}__${UU}`
      }
      _resolveSplitStorage(UU) {
        return this._splitStorageEligible && !!UU.split_storage
      }
      properties() {
        const UU = {};
        return MA(this.props, ((XU, zU) => {
          const cU = Oo(zU);
          if (!cU || "event" === cU.exposure) {
            var yU;
            if (null == cU || null === (yU = cU.shouldSkipFromEventProperties) || void 0 === yU ? void 0 : yU.call(cU, XU)) return;
            UU[zU] = XU
          }
        })), UU
      }
      load() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !UU) return;
        const XU = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          zU = XU ? DF._parse(this._name) : null;
        let cU = {};
        if (XU) try {
          cU = pF(FF._parse(this._name)), MA(cU, ((UU, XU) => {
            (Pz(UU) || Lz(UU) || "" === UU) && delete cU[XU]
          }))
        } catch (UU) {}
        const yU = this.Ga._parse(this._name);
        if (yU && (this.props = vA({}, yU)), this._splitStorage && this._loadGroupEntries(), XU && yU) {
          var QU, AU;
          const UU = null == zU ? void 0 : zU[PU],
            XU = null !== (QU = null == zU ? void 0 : zU.$user_state) && void 0 !== QU ? QU : VX,
            FU = yU[PU],
            oU = null !== (AU = yU.$user_state) && void 0 !== AU ? AU : VX;
          if (FU !== UU || oU !== XU) {
            this._cookieIdentityChangePending = !0, this._disabled || PF._set(AD(this._name), !0);
            const zU = vA({}, this.props);
            EF.forEach((UU => delete zU[UU])), "anonymous" !== oU || "identified" !== XU && "anonymous" !== cU.$user_state && (Pz(UU) || FU === UU) || (aD(zU, cU), delete zU[pU]), this.props = zU;
            const yU = new Set;
            EF.forEach((UU => {
              var XU;
              const zU = null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup;
              zU && yU.add(zU)
            })), yU.forEach((UU => {
              if (this._disabled) return;
              const XU = {};
              MA(this.props, ((zU, cU) => {
                var yU;
                (null === (yU = Oo(cU)) || void 0 === yU ? void 0 : yU.storageGroup) === UU && (XU[cU] = zU)
              })), Rz(XU) ? (DF._remove(this._groupEntryName(UU)), this._slotState[UU] = {}) : DF._set(this._groupEntryName(UU), XU) && (this._slotState[UU] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(XU, UU)
              })
            }))
          }
        }
        PF._get(AD(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const UU of Co) {
          const XU = DF._parse(this._groupEntryName(UU));
          if (XU && !Rz(XU)) {
            const zU = this._slotWriteState(UU);
            zU.persisted = !0, this._mainCarriesGroupKey(UU) || (zU.fingerprint = this._entryFingerprint(XU, UU)), this._groupEntryIsStale(UU, XU) || vA(this.props, XU)
          }
        }
      }
      _mainCarriesGroupKey(UU) {
        return Object.keys(this.props).some((XU => {
          var zU;
          return (null === (zU = Oo(XU)) || void 0 === zU ? void 0 : zU.storageGroup) === UU
        }))
      }
      _groupEntryIsStale(UU, XU) {
        const zU = yD[UU];
        if (!zU) return !1;
        const cU = XU[zU],
          yU = this.props[zU];
        return Cz(cU) && Cz(yU) && yU > cU
      }
      refreshKey(UU) {
        var XU;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(UU)) return;
        const zU = this._splitStorage ? null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup : void 0,
          cU = zU ? DF._parse(this._groupEntryName(zU)) : this.Ga._parse(this._name);
        if (cU && UU in cU) this._setProp(UU, cU[UU], !1);
        else {
          if (zU) {
            const XU = this.Ga._parse(this._name);
            if (XU && UU in XU) return void this._setProp(UU, XU[UU], !1)
          }
          this._deleteProp(UU, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const UU = this._saveDebounceMs();
        UU > 0 ? Pz(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), UU)) : this._writeNow()
      }
      flush() {
        Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !UU) return;
        UU || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || YD.forEach((UU => this.refreshKey(UU))));
        const XU = !UU && !this._storageMigrationInProgress;
        XU || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const zU = !!XU && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && fA.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(zU && this._crossTabFeatureFlagHandlers.forEach((UU => UU())));
        const cU = this._writeEntry(this.Ga, this._name, this.props, oD);
        "written" === cU && this._rememberCurrentCookieProperties(this.props), "failed" !== cU && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), zU && this._crossTabFeatureFlagHandlers.forEach((UU => UU()))
      }
      _writeNowSplit() {
        const {
          main: UU,
          groups: XU
        } = this._partitionProps(), zU = this._writeEntry(this.Ga, this._name, UU, oD);
        "written" === zU && this._rememberCurrentCookieProperties(UU), "failed" !== zU && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), DD.forEach((UU => {
          var XU;
          (null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(UU)
        })));
        for (const yU of Co) {
          var cU;
          const UU = XU[yU];
          if (Rz(UU) && !(null === (cU = this._slotState[yU]) || void 0 === cU ? void 0 : cU.persisted)) {
            DD.forEach((UU => {
              var XU;
              (null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup) === yU && this._pendingCrossTabFeatureFlagChanges.delete(UU)
            }));
            continue
          }
          const zU = this._writeEntry(DF, this._groupEntryName(yU), UU, yU);
          "failed" !== zU && DD.forEach((UU => {
            const XU = Oo(UU);
            (null == XU ? void 0 : XU.storageGroup) !== yU || "written" !== zU && XU.volatile || this._pendingCrossTabFeatureFlagChanges.delete(UU)
          }))
        }
      }
      _partitionProps() {
        const UU = {},
          XU = {
            flags: {},
            surveys: {}
          };
        return MA(this.props, ((zU, cU) => {
          var yU;
          const QU = null === (yU = Oo(cU)) || void 0 === yU ? void 0 : yU.storageGroup;
          QU ? XU[QU][cU] = zU : UU[cU] = zU
        })), {
          main: UU,
          groups: XU
        }
      }
      _entryFingerprint(UU, XU) {
        if (XU === oD) return JSON.stringify(UU) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const zU = {};
        return MA(UU, ((UU, XU) => {
          var cU;
          zU[XU] = (null === (cU = Oo(XU)) || void 0 === cU ? void 0 : cU.volatile) ? "__volatile__" : UU
        })), JSON.stringify(zU)
      }
      _writeEntry(UU, XU, zU, cU) {
        const yU = this._slotWriteState(cU);
        if (cU !== oD && !yU.vp && !Pz(yU.fingerprint)) return "skipped";
        let QU;
        try {
          if (QU = this._entryFingerprint(zU, cU), QU === yU.fingerprint) return yU.vp = !1, "skipped"
        } catch (UU) {
          QU = void 0
        }
        return UU._set(XU, zU, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (yU.vp = !1, cU !== oD && (yU.persisted = !0), Pz(QU) || (yU.fingerprint = QU), this._splitStorageEligible && (yU.storageValue = DF._get(XU)), "written") : (this._config.debug && fA.warn(`failed to persist storage entry "${XU}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: UU = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Ga._remove(this._name, !1), this.Ga._remove(this._name, !0), !UU && this._ownsSplitStorage)
          for (const XU of Co) DF._remove(this._groupEntryName(XU));
        UU ? delete this._slotState[oD] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(UU, XU, zU) {
        if (Zz(UU)) {
          this.syncCookieProperties(), Pz(XU) && (XU = "None"), this._expire_days = Pz(zU) ? this._default_expiry : zU;
          let cU = !1;
          if (MA(UU, ((UU, zU) => {
              this.props.hasOwnProperty(zU) && this.props[zU] !== XU || (this._setProp(zU, UU), cU = !0)
            })), cU) return this.save(), !0
        }
        return !1
      }
      register(UU, XU) {
        if (Zz(UU)) {
          this.syncCookieProperties(), this._expire_days = Pz(XU) ? this._default_expiry : XU;
          let zU = !1;
          if (MA(UU, ((XU, cU) => {
              UU.hasOwnProperty(cU) && (this.props[cU] !== XU || Zz(XU) || Gz(XU)) && (this._setProp(cU, XU), zU = !0)
            })), zU) return this.save(), !0
        }
        return !1
      }
      unregister(UU) {
        this.syncCookieProperties();
        const XU = "string" == typeof UU ? [UU] : UU;
        let zU = !1;
        for (const cU of XU) cU in this.props && (this._deleteProp(cU), zU = !0);
        zU && this.save()
      }
      update_campaign_params() {
        const UU = null == hX ? void 0 : hX.URL;
        if (UU === this._campaign_params_url) return;
        const XU = Jo(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          zU = !Rz(nA(XU));
        return zU && this.register(XU), this._campaign_params_url = UU, zU ? XU : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const UU = null == hX ? void 0 : hX.referrer;
          return UU ? Ko(UU) : {}
        }())
      }
      update_referrer_info() {
        var UU;
        this.register_once({
          $referrer: UD(),
          $referring_domain: (null == hX ? void 0 : hX.referrer) && (null === (UU = Ho(hX.referrer)) || void 0 === UU ? void 0 : UU.host) || ho
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const UU = XD(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [PX]: this._storesIdentityInCookie ? {
            r: FD(UU.r),
            u: UU.u ? FD(UU.u) : void 0
          } : UU
        }, void 0)
      }
      get_initial_props() {
        const UU = {};
        MA([RX, ZX], (XU => {
          const zU = this.props[XU];
          zU && MA(zU, (function(XU, zU) {
            UU["$initial_" + pz(zU)] = XU
          }))
        }));
        const XU = this.props[PX];
        if (XU) {
          const zU = function(UU) {
            const XU = zD(UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              zU = {};
            return MA(XU, (function(UU, XU) {
              zU[`$initial_${pz(XU)}`] = UU
            })), zU
          }(XU, this._config.disable_capture_url_hashes);
          vA(UU, zU)
        }
        return UU
      }
      safe_merge(UU) {
        return MA(this.props, (function(XU, zU) {
          zU in UU || (UU[zU] = XU)
        })), UU
      }
      update_config(UU, XU, zU) {
        const cU = UU.persistence !== XU.persistence,
          yU = !((UU, XU) => {
            if (UU.length !== XU.length) return !1;
            const zU = [...UU].sort(),
              cU = [...XU].sort();
            return zU.every(((UU, XU) => UU === cU[XU]))
          })(UU.cookie_persisted_properties || [], XU.cookie_persisted_properties || []),
          QU = cU || yU,
          AU = UU.cookieWinsOnConflict !== XU.cookieWinsOnConflict,
          FU = UU.disable_persistence || !!zU,
          oU = !!this._disabled && !FU;
        FU || this._syncCookieProperties(XU, oU), this._config = UU, !FU && (cU || yU || AU) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(ky(ky({}, UU), {}, {
          cookie_persisted_properties: XU.cookie_persisted_properties
        }), oU));
        const DU = QU || AU ? this._buildStorage(UU) : this.Ga;
        this._truncateExistingPersonInfoForCookie();
        const EU = this._resolveSplitStorage(UU),
          YU = QU || EU !== this._splitStorage,
          NU = !FU && (YU || UU.cross_subdomain_cookie !== this._cross_subdomain || UU.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(oU);
        this._storageMigrationInProgress = YU;
        try {
          if (this._default_expiry = this._expire_days = UU.cookie_expiration, this.set_disabled(FU), this.set_cross_subdomain(UU.cross_subdomain_cookie), this.set_secure(UU.secure_cookie), YU) {
            const UU = this.props;
            this.clear(), this.Ga = DU, this._splitStorage = EU, this.props = UU, this.save()
          } else AU && (this.Ga = DU, FU || (delete this._slotState[oD], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, NU && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const UU = this.props[PX];
        if (!this._storesIdentityInCookie || !Zz(UU) || "string" != typeof UU.r) return;
        const XU = FD(UU.r),
          zU = "string" == typeof UU.u ? FD(UU.u) : UU.u;
        XU === UU.r && zU === UU.u || this._setProp(PX, ky(ky({}, UU), {}, {
          r: XU,
          u: zU
        }))
      }
      set_disabled(UU) {
        this._disabled = UU, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(UU) {
        UU !== this._cross_subdomain && (this._cross_subdomain = UU, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(UU) {
        UU !== this._secure && (this._secure = UU, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(UU, XU) {
        const zU = this.props.__timers || {};
        zU[UU] = XU, this._setProp(SU, zU), this.save()
      }
      remove_event_timer(UU) {
        const XU = this.props.__timers || {},
          zU = XU[UU];
        return Pz(zU) || (delete XU[UU], this._setProp(SU, XU), this.save()), zU
      }
      get_property(UU) {
        return this.props[UU]
      }
      set_property(UU, XU) {
        this._setProp(UU, XU), this.save()
      }
      _setProp(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var cU;
        const yU = this.props[UU];
        this.props[UU] = XU, zU && ("distinct_id" !== UU && "$user_state" !== UU || yU === XU || (this._localIdentityChangePending = !0), ND(UU) && !ID(yU, XU) && this._metaIdentifierChangePending.add(UU), this._markPendingCrossTabFeatureFlagChanges(UU, yU, XU), (null === (cU = Oo(UU)) || void 0 === cU ? void 0 : cU.volatile) || this._markGroupDirty(UU))
      }
      _deleteProp(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[UU], XU && (ED(UU) && this._setCrossTabFeatureFlagChangesPending(UU, !0), ND(UU) && this._metaIdentifierChangePending.add(UU), this._markGroupDirty(UU))
      }
      _markGroupDirty(UU) {
        var XU;
        const zU = null === (XU = Oo(UU)) || void 0 === XU ? void 0 : XU.storageGroup;
        zU && (this._slotWriteState(zU).vp = !0)
      }
      _slotWriteState(UU) {
        return this._slotState[UU] || (this._slotState[UU] = {})
      }
    };
    const gD = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      kD = "events",
      GD = "cancelEvents",
      BD = "popover",
      ZD = "api",
      RD = "widget",
      PD = "survey shown",
      WD = "survey dismissed",
      dD = "survey sent",
      LD = "$survey_id",
      eD = "$survey_iteration",
      CD = "$survey_last_seen_date",
      wD = "popover",
      qD = "inline";

    function OD(UU) {
      let XU = !0;
      return {
        dispose() {
          if (XU) {
            XU = !1;
            const zU = UU();
            zU && Bz(zU.then) && zU.then(void 0, (() => {}))
          }
        }
      }
    }
    const SD = "product tour shown",
      rD = "$product_tour_last_seen_date",
      uD = "$product_tour_type",
      fD = iA("[RateLimiter]");
    var iD = class {
      constructor(UU) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = UU => {
          const XU = UU.text;
          if (XU && XU.length) try {
            (JSON.parse(XU).quota_limited || []).forEach((UU => {
              fD.info(`${UU||"events"} is quota limited.`), this.serverLimits[UU] = (new Date).getTime() + 6e4
            }))
          } catch (UU) {
            return void fD.warn(`could not rate limit - continuing. Error: "${null==UU?void 0:UU.message}"`, {
              text: XU
            })
          }
        }, this.instance = UU, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var UU;
        return (null === (UU = this.instance.config.rate_limiting) || void 0 === UU ? void 0 : UU.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var UU;
        return Math.max((null === (UU = this.instance.config.rate_limiting) || void 0 === UU ? void 0 : UU.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var XU, zU, cU;
        const {
          captureEventsBurstLimit: yU,
          captureEventsPerSecond: QU
        } = this, AU = (new Date).getTime(), FU = null !== (XU = null === (zU = this.instance.persistence) || void 0 === zU ? void 0 : zU.get_property("$capture_rate_limit")) && void 0 !== XU ? XU : {
          tokens: yU,
          last: AU
        };
        FU.tokens += (AU - FU.last) / 1e3 * QU, FU.last = AU, FU.tokens > yU && (FU.tokens = yU);
        const oU = 1 > FU.tokens;
        if (oU || UU || (FU.tokens = Math.max(0, FU.tokens - 1)), oU && !UU) {
          const UU = (Cz(FU.dropped) ? FU.dropped : 0) + 1;
          FU.dropped = UU, !this.lastEventRateLimited && this._captureWarning(UU) && (FU.dropped = 0)
        }
        return this.lastEventRateLimited = oU, null === (cU = this.instance.persistence) || void 0 === cU || cU.set_property("$capture_rate_limit", FU), {
          isRateLimited: oU,
          remainingTokens: FU.tokens
        }
      }
      _isPropertyAllowed(UU) {
        const XU = this.instance.config.property_denylist;
        return !Gz(XU) || !XU.includes(UU)
      }
      _triggeringPage() {
        var UU;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == Uz ? void 0 : Uz.pathname)) return `${null!==(UU=Uz.origin)&&void 0!==UU?UU:""}${Uz.pathname}`
      }
      _captureWarning(UU) {
        var XU, zU;
        const {
          captureEventsBurstLimit: cU,
          captureEventsPerSecond: yU
        } = this, QU = this._triggeringPage(), AU = this._isPropertyAllowed("$session_id") ? null === (XU = (zU = this.instance).get_session_id) || void 0 === XU ? void 0 : XU.call(zU) : void 0, FU = [`${UU} event(s) dropped since the last warning`, QU ? `triggered on ${QU}` : void 0, AU ? `session ${AU}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${FU}. Config is set to ${yU} events per second and ${cU} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(UU) {
        const XU = this.serverLimits[UU || "events"] || !1;
        return !1 !== XU && (new Date).getTime() < XU
      }
    };
    const HD = iA("[RemoteConfig]");
    var MD = class {
      constructor(UU) {
        this._instance = UU
      }
      get remoteConfig() {
        var UU;
        return null === (UU = Fz._POSTHOG_REMOTE_CONFIG) || void 0 === UU || null === (UU = UU[this._instance.config.token]) || void 0 === UU ? void 0 : UU.config
      }
      _loadRemoteConfigJs(UU) {
        var XU, zU, cU;
        (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.loadExternalDependency) ? null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, "remote-config", (() => UU(this.remoteConfig))): UU()
      }
      _loadRemoteConfigJSON(UU) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: UU
        })
      }
      load() {
        try {
          if (this.remoteConfig) return HD.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void HD.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((UU => {
            if (!UU) return HD.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((UU => {
              this._onRemoteConfig(UU.json, UU)
            }));
            this._onRemoteConfig(UU)
          }))
        } catch (cU) {
          HD.error("Error loading remote config", cU), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(UU, XU) {
        !UU && XU && (0 === XU.statusCode ? XU.error || HD.warn("Failed to fetch remote config from PostHog.") : HD.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(UU ? {
            ok: !0,
            config: UU
          } : {
            ok: !1
          })
        } catch (UU) {
          HD.error("Error applying remote config", UU)
        }
        if (!1 !== (null == UU ? void 0 : UU.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var zU;
          null === (zU = this._instance.featureFlags) || void 0 === zU || zU.ensureFlagsLoaded()
        } catch (UU) {
          HD.error("Error loading feature flags", UU)
        }
      }
    };
    var vD = Uint8Array,
      VD = Uint16Array,
      sD = Uint32Array,
      nD = new vD([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      mD = new vD([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      lD = new vD([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      xD = function(UU, XU) {
        for (var zU = new VD(31), cU = 0; 31 > cU; ++cU) zU[cU] = XU += 1 << UU[cU - 1];
        var yU = new sD(zU[30]);
        for (cU = 1; 30 > cU; ++cU)
          for (var QU = zU[cU]; zU[cU + 1] > QU; ++QU) yU[QU] = QU - zU[cU] << 5 | cU;
        return [zU, yU]
      },
      JD = xD(nD, 2),
      jD = JD[1];
    JD[0][28] = 258, jD[258] = 28;
    for (var KD = xD(mD, 0)[1], bD = new VD(32768), TD = 0; 32768 > TD; ++TD) {
      var hD = (43690 & TD) >>> 1 | (21845 & TD) << 1;
      bD[TD] = ((65280 & (hD = (61680 & (hD = (52428 & hD) >>> 2 | (13107 & hD) << 2)) >>> 4 | (3855 & hD) << 4)) >>> 8 | (255 & hD) << 8) >>> 1
    }
    var UE = function(UU, XU, zU) {
        for (var cU = UU.length, yU = 0, QU = new VD(XU); cU > yU; ++yU) ++QU[UU[yU] - 1];
        var AU, FU = new VD(XU);
        for (yU = 0; XU > yU; ++yU) FU[yU] = FU[yU - 1] + QU[yU - 1] << 1;
        if (zU) {
          AU = new VD(1 << XU);
          var oU = 15 - XU;
          for (yU = 0; cU > yU; ++yU)
            if (UU[yU])
              for (var DU = yU << 4 | UU[yU], EU = XU - UU[yU], YU = FU[UU[yU] - 1]++ << EU, NU = YU | (1 << EU) - 1; NU >= YU; ++YU) AU[bD[YU] >>> oU] = DU
        } else
          for (AU = new VD(cU), yU = 0; cU > yU; ++yU) AU[yU] = bD[FU[UU[yU] - 1]++] >>> 15 - UU[yU];
        return AU
      },
      XE = new vD(288);
    for (TD = 0; 144 > TD; ++TD) XE[TD] = 8;
    for (TD = 144; 256 > TD; ++TD) XE[TD] = 9;
    for (TD = 256; 280 > TD; ++TD) XE[TD] = 7;
    for (TD = 280; 288 > TD; ++TD) XE[TD] = 8;
    var zE = new vD(32);
    for (TD = 0; 32 > TD; ++TD) zE[TD] = 5;
    var cE = UE(XE, 9, 0),
      yE = UE(zE, 5, 0),
      QE = function(UU) {
        return (UU / 8 | 0) + (7 & UU && 1)
      },
      AE = function(UU, XU, zU) {
        (null == XU || 0 > XU) && (XU = 0), (null == zU || zU > UU.length) && (zU = UU.length);
        var cU = new(UU instanceof VD ? VD : UU instanceof sD ? sD : vD)(zU - XU);
        return cU.set(UU.subarray(XU, zU)), cU
      },
      FE = function(UU, XU, zU) {
        var cU = XU / 8 | 0;
        UU[cU] |= zU <<= 7 & XU, UU[cU + 1] |= zU >>> 8
      },
      oE = function(UU, XU, zU) {
        var cU = XU / 8 | 0;
        UU[cU] |= zU <<= 7 & XU, UU[cU + 1] |= zU >>> 8, UU[cU + 2] |= zU >>> 16
      },
      DE = function(UU, XU) {
        for (var zU = [], cU = 0; UU.length > cU; ++cU) UU[cU] && zU.push({
          s: cU,
          f: UU[cU]
        });
        var yU = zU.length,
          QU = zU.slice();
        if (!yU) return [new vD(0), 0];
        if (1 == yU) {
          var AU = new vD(zU[0].s + 1);
          return AU[zU[0].s] = 1, [AU, 1]
        }
        zU.sort((function(UU, XU) {
          return UU.f - XU.f
        })), zU.push({
          s: -1,
          f: 25001
        });
        var FU = zU[0],
          oU = zU[1],
          DU = 0,
          EU = 1,
          YU = 2;
        for (zU[0] = {
            s: -1,
            f: FU.f + oU.f,
            l: FU,
            r: oU
          }; EU != yU - 1;) FU = zU[zU[YU].f > zU[DU].f ? DU++ : YU++], oU = zU[DU != EU && zU[YU].f > zU[DU].f ? DU++ : YU++], zU[EU++] = {
          s: -1,
          f: FU.f + oU.f,
          l: FU,
          r: oU
        };
        var NU = QU[0].s;
        for (cU = 1; yU > cU; ++cU) QU[cU].s > NU && (NU = QU[cU].s);
        var IU = new VD(NU + 1),
          pU = EE(zU[EU - 1], IU, 0);
        if (pU > XU) {
          cU = 0;
          var aU = 0,
            tU = pU - XU,
            gU = 1 << tU;
          for (QU.sort((function(UU, XU) {
              return IU[XU.s] - IU[UU.s] || UU.f - XU.f
            })); yU > cU; ++cU) {
            var kU = QU[cU].s;
            if (XU >= IU[kU]) break;
            aU += gU - (1 << pU - IU[kU]), IU[kU] = XU
          }
          for (aU >>>= tU; aU > 0;) {
            var GU = QU[cU].s;
            XU > IU[GU] ? aU -= 1 << XU - IU[GU]++ - 1 : ++cU
          }
          for (; cU >= 0 && aU; --cU) {
            var BU = QU[cU].s;
            IU[BU] == XU && (--IU[BU], ++aU)
          }
          pU = XU
        }
        return [new vD(IU), pU]
      },
      EE = function(UU, XU, zU) {
        return -1 == UU.s ? Math.max(EE(UU.l, XU, zU + 1), EE(UU.r, XU, zU + 1)) : XU[UU.s] = zU
      },
      YE = function(UU) {
        for (var XU = UU.length; XU && !UU[--XU];);
        for (var zU = new VD(++XU), cU = 0, yU = UU[0], QU = 1, AU = function(UU) {
            zU[cU++] = UU
          }, FU = 1; XU >= FU; ++FU)
          if (UU[FU] == yU && FU != XU) ++QU;
          else {
            if (!yU && QU > 2) {
              for (; QU > 138; QU -= 138) AU(32754);
              QU > 2 && (AU(QU > 10 ? QU - 11 << 5 | 28690 : QU - 3 << 5 | 12305), QU = 0)
            } else if (QU > 3) {
              for (AU(yU), --QU; QU > 6; QU -= 6) AU(8304);
              QU > 2 && (AU(QU - 3 << 5 | 8208), QU = 0)
            }
            for (; QU--;) AU(yU);
            QU = 1, yU = UU[FU]
          } return [zU.subarray(0, cU), XU]
      },
      NE = function(UU, XU) {
        for (var zU = 0, cU = 0; XU.length > cU; ++cU) zU += UU[cU] * XU[cU];
        return zU
      },
      IE = function(UU, XU, zU) {
        var cU = zU.length,
          yU = QE(XU + 2);
        UU[yU] = 255 & cU, UU[yU + 1] = cU >>> 8, UU[yU + 2] = 255 ^ UU[yU], UU[yU + 3] = 255 ^ UU[yU + 1];
        for (var QU = 0; cU > QU; ++QU) UU[yU + QU + 4] = zU[QU];
        return 8 * (yU + 4 + cU)
      },
      pE = function(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        FE(XU, EU++, zU), ++yU[256];
        for (var YU = DE(yU, 15), NU = YU[0], IU = YU[1], pU = DE(QU, 15), aU = pU[0], tU = pU[1], gU = YE(NU), kU = gU[0], GU = gU[1], BU = YE(aU), ZU = BU[0], RU = BU[1], PU = new VD(19), WU = 0; kU.length > WU; ++WU) PU[31 & kU[WU]]++;
        for (WU = 0; ZU.length > WU; ++WU) PU[31 & ZU[WU]]++;
        for (var dU = DE(PU, 7), LU = dU[0], eU = dU[1], CU = 19; CU > 4 && !LU[lD[CU - 1]]; --CU);
        var wU, qU, OU, SU, rU = DU + 5 << 3,
          uU = NE(yU, XE) + NE(QU, zE) + AU,
          fU = NE(yU, NU) + NE(QU, aU) + AU + 14 + 3 * CU + NE(PU, LU) + (2 * PU[16] + 3 * PU[17] + 7 * PU[18]);
        if (uU >= rU && fU >= rU) return IE(XU, EU, UU.subarray(oU, oU + DU));
        if (FE(XU, EU, 1 + (uU > fU)), EU += 2, uU > fU) {
          wU = UE(NU, IU, 0), qU = NU, OU = UE(aU, tU, 0), SU = aU;
          var iU = UE(LU, eU, 0);
          for (FE(XU, EU, GU - 257), FE(XU, EU + 5, RU - 1), FE(XU, EU + 10, CU - 4), EU += 14, WU = 0; CU > WU; ++WU) FE(XU, EU + 3 * WU, LU[lD[WU]]);
          EU += 3 * CU;
          for (var HU = [kU, ZU], MU = 0; 2 > MU; ++MU) {
            var vU = HU[MU];
            for (WU = 0; vU.length > WU; ++WU) FE(XU, EU, iU[VU = 31 & vU[WU]]), EU += LU[VU], VU > 15 && (FE(XU, EU, vU[WU] >>> 5 & 127), EU += vU[WU] >>> 12)
          }
        } else wU = cE, qU = XE, OU = yE, SU = zE;
        for (WU = 0; FU > WU; ++WU)
          if (cU[WU] > 255) {
            var VU;
            oE(XU, EU, wU[257 + (VU = cU[WU] >>> 18 & 31)]), EU += qU[VU + 257], VU > 7 && (FE(XU, EU, cU[WU] >>> 23 & 31), EU += nD[VU]);
            var sU = 31 & cU[WU];
            oE(XU, EU, OU[sU]), EU += SU[sU], sU > 3 && (oE(XU, EU, cU[WU] >>> 5 & 8191), EU += mD[sU])
          } else oE(XU, EU, wU[cU[WU]]), EU += qU[cU[WU]];
        return oE(XU, EU, wU[256]), EU + qU[256]
      },
      aE = new sD([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      tE = (new vD(0), function() {
        for (var UU = new sD(256), XU = 0; 256 > XU; ++XU) {
          for (var zU = XU, cU = 9; --cU;) zU = (1 & zU && 3988292384) ^ zU >>> 1;
          UU[XU] = zU
        }
        return UU
      }()),
      gE = function(UU, XU, zU) {
        for (; zU; ++XU) UU[XU] = zU, zU >>>= 8
      };
    const kE = !!zz || !!Xz,
      GE = new WeakMap,
      BE = "text/plain";
    let ZE = 0,
      RE = !1;
    const PE = (UU, XU) => {
        const [zU, cU] = UU.split("#"), [yU, QU] = zU.split("?");
        if (!QU) return UU;
        const AU = QU.split("&").filter((UU => UU.split("=")[0] !== XU)).join("&");
        return `${yU}${AU?`?${AU}`:""}${cU?`#${cU}`:""}`
      },
      WE = function(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var cU;
        const [yU, QU] = UU.split("?"), AU = ky({}, XU), FU = null !== (cU = null == QU ? void 0 : QU.split("&").map((UU => {
          var XU;
          const [cU, yU] = UU.split("="), QU = zU && null !== (XU = AU[cU]) && void 0 !== XU ? XU : yU;
          return delete AU[cU], `${cU}=${QU}`
        }))) && void 0 !== cU ? cU : [], oU = function(UU) {
          let XU, zU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const yU = [];
          return MA(UU, (function(UU, cU) {
            Pz(UU) || Pz(cU) || "undefined" === cU || (XU = encodeURIComponent((UU => UU instanceof File)(UU) ? UU.name : UU.toString()), zU = encodeURIComponent(cU), yU[yU.length] = zU + "=" + XU)
          })), yU.join(cU)
        }(AU);
        return oU && FU.push(oU), FU.length > 0 ? `${yU}?${FU.join("&")}` : yU
      },
      dE = UU => {
        if (UU._encodedBody) return UU._encodedBody;
        const {
          data: XU,
          compression: zU
        } = UU;
        if (!XU) return;
        if (zU === gD.GZipJS) {
          const UU = function(UU, XU) {
            void 0 === XU && (XU = {});
            var zU = function() {
                var UU = 4294967295;
                return {
                  p(XU) {
                    for (var zU = UU, cU = 0; XU.length > cU; ++cU) zU = tE[255 & zU ^ XU[cU]] ^ zU >>> 8;
                    UU = zU
                  },
                  d: () => 4294967295 ^ UU
                }
              }(),
              cU = UU.length;
            zU.p(UU);
            var yU, QU, AU, FU, oU = (FU = 10 + ((yU = XU).filename && yU.filename.length + 1 || 0), function(UU, XU, zU, cU, yU, QU) {
                var AU = UU.length,
                  FU = new vD(cU + AU + 5 * (1 + Math.floor(AU / 7e3)) + 8),
                  oU = FU.subarray(cU, FU.length - 8),
                  DU = 0;
                if (!XU || 8 > AU)
                  for (var EU = 0; AU >= EU; EU += 65535) {
                    var YU = EU + 65535;
                    AU > YU ? DU = IE(oU, DU, UU.subarray(EU, YU)) : (oU[EU] = QU, DU = IE(oU, DU, UU.subarray(EU, AU)))
                  } else {
                    for (var NU = aE[XU - 1], IU = NU >>> 13, pU = 8191 & NU, aU = (1 << zU) - 1, tU = new VD(32768), gU = new VD(aU + 1), kU = Math.ceil(zU / 3), GU = 2 * kU, BU = function(XU) {
                        return (UU[XU] ^ UU[XU + 1] << kU ^ UU[XU + 2] << GU) & aU
                      }, ZU = new sD(25e3), RU = new VD(288), PU = new VD(32), WU = 0, dU = 0, LU = (EU = 0, 0), eU = 0, CU = 0; AU > EU; ++EU) {
                      var wU = BU(EU),
                        qU = 32767 & EU,
                        OU = gU[wU];
                      if (tU[qU] = OU, gU[wU] = qU, EU >= eU) {
                        var SU = AU - EU;
                        if ((WU > 7e3 || LU > 24576) && SU > 423) {
                          DU = pE(UU, oU, 0, ZU, RU, PU, dU, LU, CU, EU - CU, DU), LU = WU = dU = 0, CU = EU;
                          for (var rU = 0; 286 > rU; ++rU) RU[rU] = 0;
                          for (rU = 0; 30 > rU; ++rU) PU[rU] = 0
                        }
                        var uU = 2,
                          fU = 0,
                          iU = pU,
                          HU = qU - OU & 32767;
                        if (SU > 2 && wU == BU(EU - HU))
                          for (var MU = Math.min(IU, SU) - 1, vU = Math.min(32767, EU), VU = Math.min(258, SU); vU >= HU && --iU && qU != OU;) {
                            if (UU[EU + uU] == UU[EU + uU - HU]) {
                              for (var sU = 0; VU > sU && UU[EU + sU] == UU[EU + sU - HU]; ++sU);
                              if (sU > uU) {
                                if (uU = sU, fU = HU, sU > MU) break;
                                var nU = Math.min(HU, sU - 2),
                                  mU = 0;
                                for (rU = 0; nU > rU; ++rU) {
                                  var lU = EU - HU + rU + 32768 & 32767,
                                    xU = lU - tU[lU] + 32768 & 32767;
                                  xU > mU && (mU = xU, OU = lU)
                                }
                              }
                            }
                            HU += (qU = OU) - (OU = tU[qU]) + 32768 & 32767
                          }
                        if (fU) {
                          ZU[LU++] = 268435456 | jD[uU] << 18 | KD[fU];
                          var JU = 31 & jD[uU],
                            jU = 31 & KD[fU];
                          dU += nD[JU] + mD[jU], ++RU[257 + JU], ++PU[jU], eU = EU + uU, ++WU
                        } else ZU[LU++] = UU[EU], ++RU[UU[EU]]
                      }
                    }
                    DU = pE(UU, oU, QU, ZU, RU, PU, dU, LU, CU, EU - CU, DU)
                  }
                return AE(FU, 0, cU + QE(DU) + 8)
              }(QU = UU, null == (AU = XU).level ? 6 : AU.level, null == AU.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(QU.length)))) : 12 + AU.mem, FU, 0, !0)),
              DU = oU.length;
            return function(UU, XU) {
              var zU = XU.filename;
              if (UU[0] = 31, UU[1] = 139, UU[2] = 8, UU[8] = 2 > XU.level ? 4 : 9 == XU.level ? 2 : 0, UU[9] = 3, 0 != XU.mtime && gE(UU, 4, Math.floor(new Date(XU.mtime || Date.now()) / 1e3)), zU) {
                UU[3] = 8;
                for (var cU = 0; zU.length >= cU; ++cU) UU[cU + 10] = zU.charCodeAt(cU)
              }
            }(oU, XU), gE(oU, DU - 8, zU.d()), gE(oU, DU - 4, cU), oU
          }(function(UU) {
            var XU = UU.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(UU);
            for (var zU = new vD(UU.length + (UU.length >>> 1)), cU = 0, yU = function(UU) {
                zU[cU++] = UU
              }, QU = 0; XU > QU; ++QU) {
              if (cU + 5 > zU.length) {
                var AU = new vD(cU + 8 + (XU - QU << 1));
                AU.set(zU), zU = AU
              }
              var FU = UU.charCodeAt(QU);
              128 > FU ? yU(FU) : 2048 > FU ? (yU(192 | FU >>> 6), yU(128 | 63 & FU)) : FU > 55295 && 57344 > FU ? (yU(240 | (FU = 65536 + (1047552 & FU) | 1023 & UU.charCodeAt(++QU)) >>> 18), yU(128 | FU >>> 12 & 63), yU(128 | FU >>> 6 & 63), yU(128 | 63 & FU)) : (yU(224 | FU >>> 12), yU(128 | FU >>> 6 & 63), yU(128 | 63 & FU))
            }
            return AE(zU, 0, cU)
          }(io(XU)), {
            mtime: 0
          });
          return {
            contentType: BE,
            body: UU.buffer.slice(UU.byteOffset, UU.byteOffset + UU.byteLength),
            estimatedSize: UU.byteLength
          }
        }
        if (zU === gD.Base64) {
          const UU = function(UU) {
              return UU ? btoa(encodeURIComponent(UU).replace(/%([0-9A-F]{2})/g, ((UU, XU) => String.fromCharCode(parseInt(XU, 16))))) : UU
            }(io(XU)),
            zU = (UU => "data=" + encodeURIComponent("string" == typeof UU ? UU : io(UU)))(UU);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: zU,
            estimatedSize: new Blob([zU]).size
          }
        }
        const cU = io(XU);
        return {
          contentType: "application/json",
          body: cU,
          estimatedSize: new Blob([cU]).size
        }
      },
      LE = UU => {
        const XU = () => "sendBeacon" === UU.transport ? {
          url: WE(UU.url, {
            compression: gD.Base64
          }),
          encodedBody: dE(ky(ky({}, UU), {}, {
            compression: gD.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: PE(UU.url, "compression"),
          encodedBody: dE(ky(ky({}, UU), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let zU;
        try {
          zU = dE(UU)
        } catch (zU) {
          if (kQ(UU.compression, Mo(UU.url, "compression"))) return fA.error("Failed to gzip request body, sending uncompressed payload", zU), XU();
          throw zU
        }
        return zU && kQ(UU.compression, Mo(UU.url, "compression")) && !((cU = zU.body) instanceof ArrayBuffer ? gQ(new Uint8Array(cU)) : ArrayBuffer.isView(cU) && gQ(new Uint8Array(cU.buffer, cU.byteOffset, cU.byteLength))) ? (RE = !0, XU()) : {
          url: UU.url,
          encodedBody: zU
        };
        var cU
      },
      eE = UU => {
        try {
          return LE(UU)
        } catch (QU) {
          var XU;
          return fA.error(QU), void(null === (XU = UU.callback) || void 0 === XU || XU.call(UU, {
            statusCode: 0,
            error: QU
          }))
        }
      },
      CE = function() {
        var UU = nz((function*(UU) {
          const XU = yield function(UU) {
            return WQ.apply(this, arguments)
          }(io(UU.data), QU.DEBUG, {
            rethrow: !0
          });
          if (!XU) return UU;
          const zU = yield XU.arrayBuffer();
          return ky(ky({}, UU), {}, {
            _encodedBody: {
              contentType: BE,
              body: zU,
              estimatedSize: zU.byteLength
            }
          })
        }));
        return function(XU) {
          return UU.apply(this, arguments)
        }
      }(),
      wE = /Failed to fetch|NetworkError|Load failed/i,
      qE = UU => "TypeError" === (null == UU ? void 0 : UU.name) && wE.test((null == UU ? void 0 : UU.message) || ""),
      OE = UU => {
        try {
          const XU = function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof UU || !UU) return;
            const zU = UU.trim(),
              cU = /^\d+\s*,/.test(zU) ? zU.slice(0, zU.indexOf(",")).trim() : zU;
            if (/^\d+$/.test(cU)) {
              const UU = 1e3 * Math.min(Number(cU), 300);
              return UU > 0 ? UU : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(cU)) return;
            const yU = /^\w{3} \w{3} /.test(cU) ? cU + " GMT" : cU,
              QU = Date.parse(yU) - XU;
            return Number.isFinite(QU) && QU > 0 ? Math.min(QU, Qy) : void 0
          }(UU());
          return Pz(XU) ? void 0 : Math.min(XU, 3e4)
        } catch (UU) {
          return
        }
      },
      SE = UU => {
        const XU = eE(UU);
        if (!XU) return;
        const zU = new zz;
        GE.set(zU, !0);
        const {
          url: cU,
          encodedBody: yU
        } = XU;
        zU.open(UU.method || "GET", cU, !0);
        const {
          contentType: QU,
          body: AU
        } = null != yU ? yU : {};
        MA(UU.headers, (function(UU, XU) {
          zU.setRequestHeader(XU, UU)
        })), QU && zU.setRequestHeader("Content-Type", QU), UU.timeout && (zU.timeout = UU.timeout), zU.onreadystatechange = () => {
          if (4 === zU.readyState) {
            var XU;
            const cU = {
              statusCode: zU.status,
              text: zU.responseText
            };
            if (200 === zU.status) try {
              cU.json = JSON.parse(zU.responseText)
            } catch (UU) {}
            null === (XU = UU.callback) || void 0 === XU || XU.call(UU, cU, OE((() => zU.getResponseHeader("Retry-After"))))
          }
        }, zU.send(AU)
      },
      rE = UU => {
        const XU = eE(UU);
        if (!XU) return;
        const {
          url: zU,
          encodedBody: cU
        } = XU, {
          contentType: yU,
          body: QU,
          estimatedSize: AU
        } = null != cU ? cU : {}, FU = new Headers;
        MA(UU.headers, (function(UU, XU) {
          FU.append(XU, UU)
        })), yU && FU.append("Content-Type", yU);
        let oU = null,
          DU = !1;
        if (cz) {
          const XU = new cz;
          oU = {
            signal: XU.signal,
            timeout: setTimeout((() => {
              DU = !0;
              try {
                XU.abort(Dy("AbortError", "PostHog request timed out" + ((zU = UU.timeout) ? ` after ${zU}ms` : "")))
              } catch (UU) {
                YU(UU)
              }
              var zU
            }), UU.timeout)
          }
        }
        let EU = !1;
        const YU = XU => {
          var zU;
          EU || (EU = !0, DU && "AbortError" === (null == XU ? void 0 : XU.name) || qE(XU) ? fA.warn(XU) : fA.error(XU), null === (zU = UU.callback) || void 0 === zU || zU.call(UU, {
            statusCode: 0,
            error: XU
          }))
        };
        let NU = 0;
        const IU = () => {
          ZE -= NU, NU = 0, oU && clearTimeout(oU.timeout)
        };
        try {
          const XU = ky({
              method: (null == UU ? void 0 : UU.method) || "GET",
              headers: FU,
              referrerPolicy: "strict-origin",
              body: QU,
              signal: null == oU ? void 0 : oU.signal
            }, UU.fetchOptions),
            cU = null != AU ? AU : Pz(QU) ? 0 : void 0;
          XU.keepalive = "POST" === XU.method && !UU._keepaliveDisabled && !1 !== XU.keepalive && XU.body === QU && !Pz(cU) && cU >= 0 && 52428.8 > ZE + cU, XU.keepalive && (NU = cU, ZE += NU), Xz(zU, XU).then((XU => XU.text().then((zU => {
            var cU;
            if (EU) return;
            const yU = {
              statusCode: XU.status,
              text: zU
            };
            if (200 === XU.status) try {
              yU.json = JSON.parse(zU)
            } catch (UU) {
              fA.error(UU)
            }
            EU = !0, IU(), null === (cU = UU.callback) || void 0 === cU || cU.call(UU, yU, OE((() => XU.headers.get("Retry-After"))))
          })))).catch((UU => {
            IU(), YU(UU)
          })).finally(IU)
        } catch (UU) {
          IU(), YU(UU)
        }
      },
      uE = UU => {
        try {
          var XU;
          const {
            url: zU,
            encodedBody: cU
          } = LE(UU), {
            contentType: yU,
            body: QU,
            estimatedSize: AU
          } = null != cU ? cU : {};
          if (!QU) return;
          const FU = QU instanceof Blob ? QU : new Blob([QU], {
            type: yU
          });
          if (TX.sendBeacon(zU, FU)) return;
          const oU = Gz(UU.data) ? UU.data : null === (XU = UU.data) || void 0 === XU ? void 0 : XU.batch;
          if (Gz(oU) && oU.length > 1 && (null != AU ? AU : 0) > 16384) {
            const XU = Math.ceil(oU.length / 2),
              zU = XU => Gz(UU.data) ? XU : ky(ky({}, UU.data), {}, {
                batch: XU
              });
            return uE(ky(ky({}, UU), {}, {
              data: zU(oU.slice(0, XU))
            })), void uE(ky(ky({}, UU), {}, {
              data: zU(oU.slice(XU))
            }))
          }
          fA.warn(`Beacon of ~${null!=AU?AU:0} bytes was rejected by the browser, falling back to ${Xz?"fetch":"XHR"}`), Xz ? rE(ky(ky({}, UU), {}, {
            _keepaliveDisabled: !0
          })) : SE(UU)
        } catch (UU) {
          fA.warn("Beacon send failed", UU)
        }
      },
      fE = (UU, XU, zU, cU) => {
        const yU = "query" === cU ? "POST" === XU ? "sent_at" : "_" : void 0;
        return WE(zU === gD.GZipJS ? PE(UU, "compression") : UU, ky(ky({}, yU ? {
          [yU]: Date.now().toString()
        } : {}), zU === gD.GZipJS ? {} : {
          compression: zU
        }))
      },
      iE = (() => {
        const UU = [];
        return Xz && UU.push({
          transport: "fetch",
          method: rE
        }), zz && UU.push({
          transport: "XHR",
          method: SE
        }), (null == TX ? void 0 : TX.sendBeacon) && UU.push({
          transport: "sendBeacon",
          method: uE
        }), UU
      })();
    let HE = !kE && -1 === (null == Qz ? void 0 : Qz.indexOf("MSIE")) && -1 === (null == Qz ? void 0 : Qz.indexOf("Mozilla"));

    function ME(UU, XU, zU) {
      var cU, yU, QU;
      zU && (XU = ky(ky({}, XU), {}, {
        callback: UU => zU(UU)
      })), UU.__loaded ? HE ? UU.__request_queue.push(XU) : UU.rateLimiter.isServerRateLimited(XU.batchKey) ? XU.fireCallbackOnDrop && (null === (yU = XU.callback) || void 0 === yU || yU.call(XU, {
        statusCode: 429
      })) : (XU.transport = XU.transport || UU.config.api_transport, XU.headers = ky(ky({}, UU.config.request_headers), XU.headers), XU.compression = "best-available" === XU.compression ? null !== (cU = UU.compression) && void 0 !== cU ? cU : XU.compressionFallback : XU.compression, (Pz(UU.config.disable_beacon) ? UU.config.__preview_disable_beacon : UU.config.disable_beacon) && (XU.disableTransport = ["sendBeacon"]), XU.fetchOptions = XU.fetchOptions || UU.config.fetch_options, ((UU, XU) => {
        var zU, cU, yU;
        const QU = ky(ky({}, UU), {}, {
          callback: null != XU ? XU : XU => {
            var zU;
            return null === (zU = UU.callback) || void 0 === zU ? void 0 : zU.call(UU, XU)
          }
        });
        QU.timeout = QU.timeout || 6e4;
        const AU = null !== (zU = QU.transport) && void 0 !== zU ? zU : "fetch";
        "sendBeacon" === AU && Pz(QU.compression) && QU.data && (QU.compression = gD.Base64), "POST" === QU.method && QU.data && ("capture-body" === QU.timestampMode ? QU.data = (UU => {
          var XU, zU;
          const cU = (Gz(UU) ? UU : [UU]).map((UU => ky(ky({}, UU), UU.timestamp instanceof Date && !isNaN(UU.timestamp.getTime()) ? {
              timestamp: UU.timestamp.toISOString()
            } : {}))),
            yU = cU[0];
          return {
            api_key: null !== (XU = null == yU || null === (zU = yU.properties) || void 0 === zU ? void 0 : zU.token) && void 0 !== XU ? XU : null == yU ? void 0 : yU.token,
            batch: cU,
            sent_at: (new Date).toISOString()
          }
        })(QU.data) : "body" === QU.timestampMode && (QU.data = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return Gz(UU) ? UU.map((UU => ky(ky({}, UU), {}, {
            sent_at: XU
          }))) : ky(ky({}, UU), {}, {
            sent_at: XU
          })
        }(QU.data))), QU.url = fE(QU.url, QU.method, QU.compression, QU.timestampMode);
        const FU = iE.filter((UU => !QU.disableTransport || !UU.transport || !QU.disableTransport.includes(UU.transport))),
          oU = null !== (cU = null === (yU = function(UU, XU) {
            for (let zU = 0; UU.length > zU; zU++)
              if (XU(UU[zU])) return UU[zU]
          }(FU, (UU => UU.transport === AU))) || void 0 === yU ? void 0 : yU.method) && void 0 !== cU ? cU : FU[0].method;
        if (!oU) throw new Error("No available transport method");
        const DU = UU => {
          try {
            oU(UU)
          } catch (UU) {
            var XU;
            qE(UU) ? fA.warn(UU) : fA.error(UU), null === (XU = QU.callback) || void 0 === XU || XU.call(QU, {
              statusCode: 0,
              error: UU
            })
          }
        };
        "sendBeacon" !== AU && !QU.preferSyncCompression && QU.data && QU.compression === gD.GZipJS && yz && "undefined" != typeof Promise && !RE ? CE(QU).then((UU => {
          DU(UU)
        })).catch((XU => {
          if (GQ(XU)) return RE = !0, void DU(ky(ky({}, QU), {}, {
            compression: void 0,
            url: fE(UU.url, UU.method, void 0, UU.timestampMode)
          }));
          (UU => {
            if (!UU || "object" != typeof UU) return !1;
            const XU = "name" in UU ? String(UU.name) : "";
            return GQ(UU) || XU === tQ
          })(XU) && (RE = !0), DU(QU)
        })) : DU(QU)
      })(XU, ((cU, yU) => {
        var QU, AU, FU;
        UU.rateLimiter.checkForLimiting(cU), 400 > cU.statusCode || null === (QU = (AU = UU.config).on_request_error) || void 0 === QU || QU.call(AU, cU), zU ? zU(cU, yU) : null === (FU = XU.callback) || void 0 === FU || FU.call(XU, cU)
      }))) : XU.fireCallbackOnDrop && (null === (QU = XU.callback) || void 0 === QU || QU.call(XU, {
        statusCode: 0
      }))
    }
    var vE = class {
      constructor(UU, XU) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = Jz((null == XU ? void 0 : XU.flush_interval_ms) || 3e3, 250, 5e3, fA.createLogger("flush interval"), 3e3), this._sendRequest = UU
      }
      enqueue(UU) {
        this._queue.push(UU), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const UU = this._queue.length > 0 ? this._formatQueue() : {},
          XU = Object.values(UU);
        [...XU.filter((UU => 0 === UU.url.indexOf("/e"))), ...XU.filter((UU => 0 !== UU.url.indexOf("/e")))].map((UU => {
          this._sendRequestSafely(ky(ky({}, UU), {}, {
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
          const UU = this._formatQueue();
          for (const XU in UU) this._sendRequestSafely(UU[XU])
        }
      }
      _sendRequestSafely(UU, XU) {
        try {
          this._sendRequest(UU, XU)
        } catch (UU) {
          fA.error(UU)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const UU = {},
          XU = {};
        MA(this._queue, (zU => {
          var cU;
          const yU = zU,
            QU = ((yU ? yU.batchKey : null) || yU.url) + (yU.batchGroup ? `:${yU.batchGroup}` : "");
          Pz(UU[QU]) && (UU[QU] = ky(ky({}, yU), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), XU[QU] = []), null === (cU = UU[QU].data) || void 0 === cU || cU.push(yU.data), yU.callback && XU[QU].push(yU.callback)
        }));
        for (const zU in XU) {
          const cU = XU[zU];
          cU.length && (UU[zU].callback = UU => {
            for (const XU of cU) XU(UU)
          })
        }
        return this._queue = [], UU
      }
    };
    const VE = ["retriesPerformedSoFar"];
    var sE = class {
        constructor(UU) {
          this._instance = UU, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!Pz(KX) && "onLine" in KX.navigator) {
            if (this._areWeOnline = KX.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, JA(KX, "online", this._onlineListener), JA(KX, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(UU, XU) {
          let {
            retriesPerformedSoFar: zU
          } = UU, cU = dQ(UU, VE);
          wz(zU) && (cU.url = WE(cU.url, {
            retry_count: zU
          })), ME(this._instance, XU ? ky(ky({}, cU), {}, {
            transport: XU
          }) : cU, ((UU, XU) => {
            var yU;
            if (200 !== UU.statusCode && (400 > UU.statusCode || UU.statusCode >= 500)) {
              if ((0 === UU.statusCode ? 3 : 10) > (null != zU ? zU : 0)) return void this._enqueue(ky({
                retriesPerformedSoFar: zU
              }, cU), XU);
              0 === UU.statusCode && fA.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=zU?zU:0} retries.`)
            }
            null === (yU = cU.callback) || void 0 === yU || yU.call(cU, UU)
          }))
        }
        _enqueue(UU, XU) {
          const zU = UU.retriesPerformedSoFar || 0;
          UU.retriesPerformedSoFar = zU + 1;
          const cU = Math.max(function(UU) {
              const XU = 3e3 * Math.pow(2, UU),
                zU = XU / 2,
                cU = Math.min(18e5, XU),
                yU = (Math.random() - .5) * (cU - zU);
              return Math.ceil(cU + yU)
            }(zU), null != XU ? XU : 0),
            yU = Date.now() + cU;
          this._queue.push({
            retryAt: yU,
            requestOptions: UU
          });
          let QU = `Enqueued failed request for retry in ${cU}`;
          navigator.onLine || (QU += " (Browser is offline)"), fA.warn(QU), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const UU = Date.now(),
            XU = [],
            zU = this._queue.filter((zU => UU > zU.retryAt || (XU.push(zU), !1)));
          if (this._queue = XU, zU.length > 0)
            for (const {
                requestOptions: cU
              }
              of zU) this.retriableRequest(cU)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, Pz(KX) || (this._onlineListener && (KX.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (KX.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: UU
            }
            of this._queue) try {
            this._instance._send_request(ky(ky({}, UU), {}, {
              callback: Gz(UU.data) ? void 0 : UU.callback,
              transport: "sendBeacon"
            }))
          } catch (cU) {
            fA.error(cU)
          }
          this._queue = []
        }
      },
      nE = class {
        constructor(UU) {
          this._instance = UU, this._updateScrollData = () => {
            var UU, XU, zU, cU;
            this._context || (this._context = {});
            const yU = this.scrollElement(),
              QU = this.scrollY(),
              AU = yU ? Math.max(0, yU.scrollHeight - yU.clientHeight) : 0,
              FU = QU + ((null == yU ? void 0 : yU.clientHeight) || 0),
              oU = (null == yU ? void 0 : yU.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(QU), this._context.maxScrollY = Math.max(QU, null !== (UU = this._context.maxScrollY) && void 0 !== UU ? UU : 0), this._context.maxScrollHeight = Math.max(AU, null !== (XU = this._context.maxScrollHeight) && void 0 !== XU ? XU : 0), this._context.lastContentY = FU, this._context.maxContentY = Math.max(FU, null !== (zU = this._context.maxContentY) && void 0 !== zU ? zU : 0), this._context.maxContentHeight = Math.max(oU, null !== (cU = this._context.maxContentHeight) && void 0 !== cU ? cU : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const UU = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), UU
        }
        startMeasuringScrollPosition() {
          JA(KX, "scroll", this._updateScrollData, {
            capture: !0
          }), JA(KX, "scrollend", this._updateScrollData, {
            capture: !0
          }), JA(KX, "resize", this._updateScrollData)
        }
        scrollElement() {
          var UU;
          if (!this._scrollRoot) return null == KX || null === (UU = KX.document) || void 0 === UU ? void 0 : UU.documentElement;
          {
            const UU = Gz(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const zU of UU) {
              var XU;
              const UU = null == KX || null === (XU = KX.document) || void 0 === XU ? void 0 : XU.querySelector(zU);
              if (UU) return UU
            }
          }
        }
        _scrollPosition(UU) {
          var XU, zU;
          const cU = "y" === UU ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const UU = this.scrollElement();
            return UU && UU[cU] || 0
          }
          return KX ? "y" === UU ? KX.scrollY || KX.pageYOffset || (null === (XU = KX.document) || void 0 === XU || null === (XU = XU.documentElement) || void 0 === XU ? void 0 : XU.scrollTop) || 0 : KX.scrollX || KX.pageXOffset || (null === (zU = KX.document) || void 0 === zU || null === (zU = zU.documentElement) || void 0 === zU ? void 0 : zU.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const mE = UU => XD(null == UU ? void 0 : UU.config.mask_personal_data_properties, null == UU ? void 0 : UU.config.custom_personal_data_properties, null == UU ? void 0 : UU.config.disable_capture_url_hashes);
    var lE = class {
        constructor(UU, XU, zU, cU) {
          this._onSessionIdCallback = UU => {
            const XU = this._getStored();
            if (XU && XU.sessionId === UU) return;
            const zU = {
              sessionId: UU,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [GX]: zU
            })
          }, this._instance = UU, this._sessionIdManager = XU, this._persistence = zU, this._sessionSourceParamGenerator = cU || mE, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[GX]
        }
        getSetOnceProps() {
          var UU;
          const XU = null === (UU = this._getStored()) || void 0 === UU ? void 0 : UU.props;
          return XU ? "r" in XU ? zD(XU, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: XU.referringDomain,
            $pathname: XU.initialPathName,
            utm_source: XU.utm_source,
            utm_campaign: XU.utm_campaign,
            utm_medium: XU.utm_medium,
            utm_content: XU.utm_content,
            utm_term: XU.utm_term
          } : {}
        }
        getSessionProps() {
          const UU = {};
          return MA(nA(this.getSetOnceProps()), ((XU, zU) => {
            "$current_url" === zU && (zU = "url"), UU[`$session_entry_${pz(zU)}`] = XU
          })), UU
        }
      },
      xE = class {
        on(UU, XU) {
          return this._events[UU] || (this._events[UU] = []), this._events[UU].push(XU), () => {
            this._events[UU] = this._events[UU].filter((UU => UU !== XU))
          }
        }
        emit(UU, XU) {
          for (const zU of this._events[UU] || []) zU(XU);
          for (const zU of this._events["*"] || []) zU(UU, XU)
        }
        constructor() {
          this._events = {}
        }
      };
    const JE = iA("[SessionId]"),
      jE = 864e5;
    var KE = class {
      on(UU, XU) {
        return this._eventEmitter.on(UU, XU)
      }
      constructor(UU, XU, zU) {
        var cU;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new xE, this._sessionHasBeenIdleTooLong = (UU, XU) => !(!wz(UU) || !wz(XU)) && Math.abs(UU - XU) > this.sessionTimeoutMs, !UU.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === UU.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = UU.config, this._persistence = UU.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = XU || zF, this._windowIdGenerator = zU || zF;
        const yU = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * Jz(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, JE.createLogger("session_idle_timeout_seconds"), 1800), UU.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + yU + "_window_id", this._primary_window_exists_storage_key = "ph_" + yU + "_primary_window_exists", this._canUseSessionStorage()) {
          const UU = PF._parse(this._window_id_storage_key),
            XU = PF._parse(this._primary_window_exists_storage_key);
          UU && !XU ? this._windowId = UU : PF._remove(this._window_id_storage_key), PF._set(this._primary_window_exists_storage_key, !0)
        }(null === (cU = this._config.bootstrap) || void 0 === cU ? void 0 : cU.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(UU) {
        return Pz(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(UU), this._sessionId && UU(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((XU => XU !== UU))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && PF._is_supported()
      }
      _setWindowId(UU) {
        UU !== this._windowId && (this._windowId = UU, this._canUseSessionStorage() && PF._set(this._window_id_storage_key, UU))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? PF._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(UU) {
        const XU = this._lastPersistedActivityTimestamp;
        return !Lz(XU) && !Lz(UU) && 5e3 > Math.abs(UU - XU)
      }
      _setSessionId(UU, XU, zU) {
        const cU = XU !== this._sessionActivityTimestamp,
          yU = !(UU !== this._sessionId || zU !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = zU, this._sessionActivityTimestamp = XU, this._sessionId = UU, yU && !cU || yU && this._isActivityChangeBelowGranularity(XU) || (this._lastPersistedActivityTimestamp = XU, this._persistence.register({
          [TU]: [XU, UU, zU]
        }))
      }
      _useCrossTabRefreshHardening() {
        var UU;
        const XU = null === (UU = this._config) || void 0 === UU ? void 0 : UU.persistence_save_debounce_ms;
        return wz(XU) && XU > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(TU) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var UU;
        if (Lz(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, XU, zU] = this._getSessionId();
        XU === this._sessionId && zU === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [TU]: [this._sessionActivityTimestamp, null !== (UU = this._sessionId) && void 0 !== UU ? UU : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [UU] = this._getSessionId(), XU = wz(UU) ? UU : 0, zU = wz(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(XU, zU)
      }
      _isSessionIdleAfterCrossTabRefresh(UU) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(UU, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const UU = this._persistence.props[TU];
        return Gz(UU) && 2 === UU.length && UU.push(UU[0]), UU || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zU = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const zU = (UU => {
              const XU = UU.replace(/-/g, "");
              if (32 !== XU.length) throw new Error("Not a valid UUID");
              if ("7" !== XU[12]) throw new Error("Not a UUIDv7");
              return parseInt(XU.substring(0, 12), 16)
            })(UU);
            return zU > XU + 6e4 ? void JE.error("Bootstrap sessionID cannot be in the future") : zU
          } catch (UU) {
            return void JE.error("Invalid sessionID in bootstrap", UU)
          }
        }(UU);
        return !Pz(zU) && (XU ? this._pendingBootstrapSession = {
          sessionId: UU,
          sessionStartTimestamp: zU
        } : this._setSessionId(UU, (new Date).getTime(), zU), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && KX && (KX.removeEventListener(mX, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && PF._remove(this._primary_window_exists_storage_key)
        }, JA(KX, mX, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const cU = XU || (new Date).getTime(),
          yU = this._sessionId;
        if (zU) this._lastCookieSyncTimestamp = cU;
        else if (Lz(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > cU || cU - this._lastCookieSyncTimestamp >= 1e3) {
          var QU, AU;
          null === (QU = (AU = this._persistence).syncCookieProperties) || void 0 === QU || QU.call(AU), this._lastCookieSyncTimestamp = cU
        }
        let [, FU, oU] = this._getSessionId();
        const DU = !Pz(yU) && FU !== yU,
          EU = this._freshestActivityTimestamp();
        let YU = this._getWindowId();
        const NU = this._pendingBootstrapSession,
          IU = !!NU && (NU.sessionStartTimestamp > cU + 6e4 || cU - NU.sessionStartTimestamp > jE),
          pU = NU ? IU : wz(oU) && Math.abs(cU - oU) > jE;
        let aU = !1,
          tU = DU,
          gU = !FU || !!NU;
        const kU = FU;
        let GU = !gU && !UU && this._sessionHasBeenIdleTooLong(cU, EU);
        if (GU && (GU = this._isSessionIdleAfterCrossTabRefresh(cU), GU || JE.info("cross-tab refresh kept the session alive", {
            sessionId: FU
          }), [, FU, oU] = this._getSessionId(), GU || (gU = !FU || !!NU)), gU || GU || pU) {
          tU = !1;
          const UU = NU && !IU;
          FU = UU ? NU.sessionId : this._sessionIdGenerator(), YU = this._windowIdGenerator(), JE.info("new session ID assigned", {
            sessionId: FU,
            windowId: YU,
            bootstrapped: !!UU,
            changeReason: {
              noSessionId: gU,
              activityTimeout: GU,
              sessionPastMaximumLength: pU
            }
          }), oU = UU ? NU.sessionStartTimestamp : cU, this._pendingBootstrapSession = void 0, aU = !0
        } else YU || (YU = this._windowIdGenerator(), aU = !0), tU = tU || FU !== kU, tU && (JE.info("adopted cross-tab session id", {
          sessionId: FU,
          windowId: YU
        }), aU = !0);
        const BU = wz(EU) && UU && !pU ? EU : cU,
          ZU = wz(oU) ? oU : (new Date).getTime();
        this._setWindowId(YU), this._setSessionId(FU, BU, ZU), UU || this._resetIdleTimer();
        const RU = {
          noSessionId: gU,
          activityTimeout: GU,
          sessionPastMaximumLength: pU,
          crossTabAdoption: tU
        };
        return aU && this._sessionIdChangedHandlers.forEach((UU => UU(FU, YU, RU))), {
          sessionId: FU,
          windowId: YU,
          sessionStartTimestamp: ZU,
          changeReason: aU ? RU : void 0,
          lastActivityTimestamp: EU
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const UU = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: UU
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const bE = function(UU, XU) {
      if (!UU) return !1;
      const zU = UU.userAgent;
      if (zU && xz(zU, XU)) return !0;
      try {
        const zU = null == UU ? void 0 : UU.userAgentData;
        if ((null == zU ? void 0 : zU.brands) && zU.brands.some((UU => xz(null == UU ? void 0 : UU.brand, XU)))) return !0
      } catch (UU) {}
      return !!UU.webdriver
    };

    function TE() {
      return (TE = nz((function*() {
        const UU = null == TX ? void 0 : TX.userAgentData;
        if (null == UU ? void 0 : UU.getHighEntropyValues) try {
          const XU = yield UU.getHighEntropyValues(["model"]), zU = null == XU ? void 0 : XU.model;
          return Wz(zU) && zU.length > 0 ? zU : void 0
        } catch (UU) {
          return void fA.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", UU)
        }
      }))).apply(this, arguments)
    }

    function hE(UU, XU) {
      let zU = `$survey_${XU}/${UU.id}`;
      return UU.current_iteration && UU.current_iteration > 0 && (zU = `$survey_${XU}/${UU.id}/${UU.current_iteration}`), zU
    }

    function UY(UU) {
      var XU;
      return !!(null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.events) || void 0 === XU || null === (XU = XU.values) || void 0 === XU ? void 0 : XU.length)
    }
    const XY = (UU, XU) => {
        if (!(UU => {
            try {
              new RegExp(UU)
            } catch (UU) {
              return !1
            }
            return !0
          })(XU)) return !1;
        try {
          return new RegExp(XU).test(UU)
        } catch (UU) {
          return !1
        }
      },
      zY = UU => UU.toLowerCase(),
      cY = {
        exact: (UU, XU) => XU.some((XU => UU.some((UU => XU === UU)))),
        is_not: (UU, XU) => XU.every((XU => UU.every((UU => XU !== UU)))),
        regex: (UU, XU) => XU.some((XU => UU.some((UU => XY(XU, UU))))),
        not_regex: (UU, XU) => XU.every((XU => UU.every((UU => !XY(XU, UU))))),
        icontains: (UU, XU) => XU.map(zY).some((XU => UU.map(zY).some((UU => XU.includes(UU))))),
        not_icontains: (UU, XU) => XU.map(zY).every((XU => UU.map(zY).every((UU => !XU.includes(UU))))),
        gt: (UU, XU) => XU.some((XU => {
          const zU = parseFloat(XU);
          return !isNaN(zU) && UU.some((UU => zU > parseFloat(UU)))
        })),
        lt: (UU, XU) => XU.some((XU => {
          const zU = parseFloat(XU);
          return !isNaN(zU) && UU.some((UU => zU < parseFloat(UU)))
        }))
      };

    function yY(UU, XU) {
      return !UU || Object.entries(UU).every((UU => {
        let [zU, cU] = UU;
        const yU = null == XU ? void 0 : XU[zU];
        if (null == yU) return !1;
        const QU = cY[cU.operator];
        return !!QU && QU(cU.values.map(String), [String(yU)])
      }))
    }

    function QY(UU, XU, zU) {
      return io({
        distinct_id: UU,
        userPropertiesToSet: XU,
        userPropertiesToSetOnce: zU
      })
    }
    const AY = "custom",
      FY = "i.posthog.com",
      oY = /^\/static\//,
      DY = ["/s/", "/e/", "/i/"];
    var EY = class {
      constructor(UU) {
        this._regionCache = {}, this.instance = UU
      }
      get apiHost() {
        const UU = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === UU ? "https://us.i.posthog.com" : UU
      }
      get flagsApiHost() {
        const UU = this.instance.config.flags_api_host;
        return UU ? UU.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var UU;
        let XU = null === (UU = this.instance.config.ui_host) || void 0 === UU ? void 0 : UU.replace(/\/$/, "");
        return XU || (XU = this.apiHost.replace(`.${FY}`, ".posthog.com")), "https://app.posthog.com" === XU ? "https://us.posthog.com" : XU
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : AY), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(UU) {
        if (!oY.test(UU)) return;
        const XU = this.instance.config.asset_host;
        return "string" == typeof XU && XU.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(UU) {
        const XU = Ho(UU);
        return XU ? XU.protocol + "//" + XU.host + XU.pathname : void 0
      }
      _prepareEndpoint(UU, XU, zU) {
        if ("ui" === UU) return zU;
        let cU = zU;
        const yU = this.instance.config.rewriteRequestPath;
        if (yU) {
          var QU;
          const UU = (null === (QU = Ho(zU)) || void 0 === QU ? void 0 : QU.href) || zU;
          cU = yU(new URL(UU)).toString()
        }
        if (yU && "api" === UU && DY.some((UU => 0 === XU.indexOf(UU)))) {
          const UU = this._urlKey(cU);
          if (UU) {
            const XU = this.apiHost;
            let zU = this._ingestionEndpoints;
            (null == zU ? void 0 : zU.apiHost) === XU && zU.rewriteRequestPath === yU || (zU = {
              apiHost: XU,
              rewriteRequestPath: yU,
              urls: new Set
            }, this._ingestionEndpoints = zU), zU.urls.add(UU)
          }
        }
        return cU
      }
      isIngestionEndpoint(UU) {
        const XU = this._ingestionEndpoints,
          zU = this._urlKey(UU);
        return (null == XU ? void 0 : XU.apiHost) === this.apiHost && XU.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!zU && XU.urls.has(zU)
      }
      endpointFor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (XU && (XU = "/" === XU[0] ? XU : `/${XU}`), "ui" === UU) return this._prepareEndpoint(UU, XU, this.uiHost + XU);
        if ("flags" === UU) return this._prepareEndpoint(UU, XU, this.flagsApiHost + XU);
        if ("assets" === UU) {
          const zU = this._staticAssetHostOverride(XU);
          if (zU) return this._prepareEndpoint(UU, XU, `${zU}${XU}`)
        }
        if (this.region === AY) return this._prepareEndpoint(UU, XU, this.apiHost + XU);
        const zU = FY + XU;
        switch (UU) {
          case "assets":
            return this._prepareEndpoint(UU, XU, `https://${this.region}-assets.${zU}`);
          case "api":
            return this._prepareEndpoint(UU, XU, `https://${this.region}.${zU}`)
        }
      }
    };
    const YY = iA("[Surveys]"),
      NY = UU => {
        try {
          const XU = (UU => ((UU, XU) => `seenSurvey_${function(UU){return UU.current_iteration&&UU.current_iteration>0?`${UU.id}_${UU.current_iteration}`:UU.id}(XU)}`)(0, UU))(UU);
          if (localStorage.getItem(XU)) return;
          localStorage.setItem(XU, "true")
        } catch (UU) {
          YY.error("Failed to persist survey seen state", UU)
        }
      },
      IY = [BD, RD, ZD],
      pY = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: wD
      },
      aY = iA("[PostHog ExternalIntegrations]"),
      tY = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var gY = class {
      constructor(UU) {
        this._instance = UU
      }
      _loadScript(UU, XU) {
        var zU, cU;
        null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, UU, (UU => {
          if (UU) return aY.error("failed to load script", UU);
          XU()
        }))
      }
      startIfEnabledOrStop() {
        var UU;
        for (const [yU, QU] of Object.entries(null !== (UU = this._instance.config.integrations) && void 0 !== UU ? UU : {})) {
          var XU, zU, cU;
          QU && !(null === (XU = Fz.__PosthogExtensions__) || void 0 === XU || null === (XU = XU.integrations) || void 0 === XU ? void 0 : XU[yU]) && this._loadScript(tY[yU], (() => {
            var UU;
            null === (UU = Fz.__PosthogExtensions__) || void 0 === UU || null === (UU = UU.integrations) || void 0 === UU || null === (UU = UU[yU]) || void 0 === UU || UU.start(this._instance)
          })), !QU && (null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (zU = zU.integrations) || void 0 === zU ? void 0 : zU[yU]) && (null === (cU = Fz.__PosthogExtensions__) || void 0 === cU || null === (cU = cU.integrations) || void 0 === cU || null === (cU = cU[yU]) || void 0 === cU || cU.stop())
        }
      }
    };
    const kY = "autocapture",
      GY = "featureFlags",
      BY = "logs",
      ZY = "surveys";
    var RY = class {
        constructor(UU) {
          this._instance = UU
        }
        initialize() {}
        get(UU) {
          const XU = this._instance.persistence;
          if ("string" == typeof UU) return null == XU ? void 0 : XU.get_property(UU);
          const zU = {};
          for (const cU of UU) {
            const UU = null == XU ? void 0 : XU.get_property(cU);
            Pz(UU) || (zU[cU] = UU)
          }
          return zU
        }
        set(UU, XU) {
          var zU;
          null === (zU = this._instance.persistence) || void 0 === zU || zU.register("string" == typeof UU ? {
            [UU]: XU
          } : UU)
        }
        remove(UU) {
          var XU;
          null === (XU = this._instance.persistence) || void 0 === XU || XU.unregister(UU)
        }
      },
      PY = class {
        constructor(UU) {
          this.instance = UU, this._logger = fA, this.kv = new RY(UU), this.onEvent = UU => OD(this.instance._addCaptureHook(((XU, zU) => {
            if (zU) try {
              UU({
                event: XU,
                properties: zU.properties
              })
            } catch (UU) {
              this._logger.error("Browser extension event listener failed", UU)
            }
          }))), this.onRemoteConfig = UU => {
            const XU = XU => {
                try {
                  UU(XU)
                } catch (UU) {
                  this._logger.error("Browser extension remote config listener failed", UU)
                }
              },
              zU = this.instance._internalEventEmitter.on("extensionsRemoteConfig", XU);
            return this.instance._lastRemoteConfig && XU(this.instance._lastRemoteConfig), OD(zU)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var UU;
          return null !== (UU = this.instance.get_property("$device_id")) && void 0 !== UU ? UU : this.distinctId
        }
        get deviceId() {
          const UU = this.instance.get_property(WU);
          return "string" == typeof UU ? UU : void 0
        }
        get library() {
          return {
            name: QU.LIB_NAME,
            version: QU.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var UU, XU;
          return null !== (UU = null === (XU = this.instance.persistence) || void 0 === XU ? void 0 : XU.get_initial_props()) && void 0 !== UU ? UU : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var UU, XU, zU, cU, yU;
            const QU = null === (UU = this.instance.sessionManager) || void 0 === UU ? void 0 : UU.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (XU = null == QU ? void 0 : QU.sessionId) && void 0 !== XU ? XU : "",
              windowId: null !== (zU = null == QU ? void 0 : QU.windowId) && void 0 !== zU ? zU : "",
              sessionStartTimestamp: null !== (cU = null == QU ? void 0 : QU.sessionStartTimestamp) && void 0 !== cU ? cU : 0,
              lastActivityTimestamp: null !== (yU = null == QU ? void 0 : QU.lastActivityTimestamp) && void 0 !== yU ? yU : 0
            }
          } catch (UU) {
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
          return Bz(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(UU) {
          let XU;
          switch (UU) {
            case GY:
            case "featureFlagsCommon":
              XU = this.instance.featureFlags;
              break;
            case BY:
              XU = this.instance.logs;
              break;
            case ZY:
              XU = this.instance.surveys;
              break;
            case kY:
              XU = this.instance.autocapture
          }
          return XU
        }
        capture(UU, XU, zU) {
          zU ? this.instance.capture(UU, XU, {
            timestamp: zU.timestamp,
            uuid: zU.uuid,
            $set: zU.set,
            $set_once: zU.setOnce
          }) : this.instance.capture(UU, XU)
        }
        registerDynamicEventProperties(UU) {
          return OD(this.instance._registerExtensionEventProperties(UU))
        }
        sendRequest(UU) {
          var XU = this;
          return nz((function*(UU) {
            let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var cU;
            const yU = null !== (cU = zU.target) && void 0 !== cU ? cU : "api",
              QU = XU.instance.requestRouter.endpointFor(yU, UU),
              AU = "api" === yU && "/i/v1/logs" === UU,
              FU = {
                method: zU.method,
                url: zU.query ? WE(QU, zU.query) : QU,
                data: zU.body,
                headers: zU.headers,
                timeout: zU.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: zU.transport,
                compression: zU.compression,
                compressionFallback: "flags" === zU.target && "best-available" === zU.compression ? Dz.Base64 : void 0,
                timestampMode: zU.sentAt
              };
            return AU && (FU.batchKey = "logs"), "sendBeacon" === zU.transport ? (XU.instance._send_request(FU), {
              statusCode: 202
            }) : new Promise((UU => {
              FU.callback = UU, XU.instance._send_request(FU)
            }))
          })).apply(this, arguments)
        }
      };
    const WY = {};
    let dY = 0;
    const LY = () => {},
      eY = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      CY = "Surveys module not available",
      wY = "sanitize_properties is deprecated. Use before_send instead",
      qY = "Invalid value for property_denylist config: ",
      OY = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      SY = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      rY = UU => "$" === UU.charAt(0) && !Nz(SY, UU),
      uY = /^[A-Za-z0-9_-]{1,400}$/,
      fY = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      iY = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      HY = ["token", "distinct_id", LX],
      MY = "posthog",
      vY = UU => {
        const XU = {};
        return UU && "unset" !== UU ? ("2025-11-30" > UU || (XU.strictMinimumDuration = !0), "2026-05-30" > UU || (XU.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > UU || (XU.streamNetworkBody = !0), "2026-08-30" > UU || (XU.captureJsonLd = !0), XU) : XU
      },
      VY = UU => {
        var XU;
        return ky({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: xA(null == hX ? void 0 : hX.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: LY,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != UU ? UU : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: Uz && Wz(null == Uz ? void 0 : Uz.search) && -1 !== Uz.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == KX || null === (XU = KX.location) || void 0 === XU ? void 0 : XU.protocol),
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
          on_request_error(UU) {
            fA.error("Bad HTTP status: " + UU.statusCode + " " + UU.text)
          },
          get_device_id: UU => UU,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: nX,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: LY
        }, (UU => ({
          rageclick: UU && UU >= "2026-05-30" ? {
            content_ignorelist: mF,
            ignore_text_selection: !0
          } : !UU || "2025-11-30" > UU || {
            content_ignorelist: !0
          },
          capture_pageview: !UU || "2025-05-24" > UU || "history_change",
          session_recording: vY(UU),
          external_scripts_inject_target: UU && UU >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: UU && UU >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: UU && UU >= "2026-05-30" ? 250 : 0,
          split_storage: !(!UU || "2026-05-30" > UU),
          detect_google_search_app: !(!UU || "2026-05-30" > UU),
          disable_capture_url_hashes: !(!UU || "2026-06-25" > UU),
          cookieWinsOnConflict: !(!UU || "unset" === UU || "2026-08-29" > UU)
        }))(UU))
      },
      sY = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      nY = UU => {
        const XU = {};
        for (const [yU, QU] of sY) Pz(UU[yU]) || (XU[QU] = UU[yU]);
        const zU = vA({}, XU, UU),
          cU = UU.__preview_external_dependency_versioned_paths;
        return Pz(cU) || (Pz(UU.strict_script_versioning) && (zU.strict_script_versioning = !!cU), Wz(cU) && Pz(UU.asset_host) && (zU.asset_host = cU)), Gz(UU.property_blacklist) && (Pz(UU.property_denylist) ? zU.property_denylist = UU.property_blacklist : Gz(UU.property_denylist) ? zU.property_denylist = [...UU.property_blacklist, ...UU.property_denylist] : fA.error(qY + UU.property_denylist)), zU
      };
    var mY = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(UU) {
          fA.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = UU
        }
      },
      lY = class UU {
        _removeExtension(UU) {
          if (!UU) return;
          const XU = this._extensions.indexOf(UU); - 1 !== XU && this._extensions.splice(XU, 1)
        }
        _replaceExtension(UU, XU) {
          var zU;
          return this._removeExtension(UU), this._extensions.push(XU), null === (zU = XU.initialize) || void 0 === zU || zU.call(XU), XU
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const UU = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!UU && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let XU, zU, cU;
          UU ? (XU = `persistence is set to '${this.config.persistence}'`, zU = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", cU = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (XU = "persistence is disabled (disable_persistence is true)", zU = "on every page load", cU = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${XU} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${zU}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${cU}`)
        }
        _syncCookielessIdentity() {
          const UU = this.persistence;
          if (!UU || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || UU.load(!0);
          const XU = this.get_distinct_id();
          if (!XU || "$posthog_cookieless" === XU) {
            const XU = this.config.get_device_id(zF());
            this.register({
              distinct_id: XU,
              $device_id: XU
            }), UU.set_property(kX, VX)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var UU, XU;
          return null !== (UU = null === (XU = this.featureFlags) || void 0 === XU ? void 0 : XU.hasLoadedFlags) && void 0 !== UU && UU
        }
        get flagsEndpointWasHit() {
          var UU, XU;
          return null !== (UU = null === (XU = this.featureFlags) || void 0 === XU ? void 0 : XU.hasLoadedFlags) && void 0 !== UU && UU
        }
        constructor() {
          var XU;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new mY, this._personProcessingSetOncePropertiesSent = !1, this.version = QU.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new xE, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = VY(), this.SentryIntegration = Lo, this.sentryIntegration = UU => function(UU, XU) {
            const zU = Wo(UU, XU);
            return {
              name: Po,
              processEvent: UU => zU(UU)
            }
          }(this, UU), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new nE(this), this.pageViewManager = new eo(this), this.rateLimiter = new iD(this), this.requestRouter = new EY(this), this.consent = new WF(this), this.externalIntegrations = new gY(this);
          const zU = null !== (XU = UU.__defaultExtensionClasses) && void 0 !== XU ? XU : {};
          this.featureFlags = zU.featureFlags && new zU.featureFlags(this), this.toolbar = zU.toolbar && new zU.toolbar(this), this.surveys = zU.surveys && new zU.surveys(this), this.conversations = zU.conversations && new zU.conversations(this), this.logs = zU.logs && new zU.logs(this), this.metrics = zU.metrics && new zU.metrics(this), this.experiments = zU.experiments && new zU.experiments(this), this.exceptions = zU.exceptions && new zU.exceptions(this), this.people = {
            set: (UU, XU, zU) => {
              const cU = Wz(UU) ? {
                [UU]: XU
              } : UU;
              this.setPersonProperties(cU), null == zU || zU({})
            },
            set_once: (UU, XU, zU) => {
              const cU = Wz(UU) ? {
                [UU]: XU
              } : UU;
              this.setPersonProperties(void 0, cU), null == zU || zU({})
            }
          }, this.on("eventCaptured", (UU => fA.info(`send "${null==UU?void 0:UU.event}"`, UU)))
        }
        init(XU, zU, cU) {
          if (cU && cU !== MY) {
            var yU;
            const QU = null !== (yU = WY[cU]) && void 0 !== yU ? yU : new UU;
            return QU._init(XU, zU, cU), WY[cU] = QU, WY[MY][cU] = QU, QU
          }
          return this._init(XU, zU, cU)
        }
        _init(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 ? arguments[2] : void 0;
          var cU, yU, AU;
          const FU = Wz(UU) ? UU.trim() : "";
          if (!FU) return fA.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var oU;
          if (this.__loaded) return FU !== (null === (oU = this.config) || void 0 === oU ? void 0 : oU.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${FU}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = VY(XU.defaults), XU.debug = this._checkLocalStorageForDebug(XU.debug), this._originalUserConfig = XU, this._triggered_notifs = [], XU.person_profiles ? this._initialPersonProfilesConfig = XU.person_profiles : XU.process_person && (this._initialPersonProfilesConfig = XU.process_person);
          const DU = VY(XU.defaults),
            EU = nY(XU),
            YU = vA({}, DU, EU, {
              name: zU,
              token: FU
            });
          Zz(DU.rageclick) && Zz(EU.rageclick) && (YU.rageclick = vA({}, DU.rageclick, EU.rageclick)), Zz(DU.session_recording) && Zz(EU.session_recording) && (YU.session_recording = vA({}, DU.session_recording, EU.session_recording)), this.set_config(YU), this.config.on_xhr_error && fA.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = XU.disable_compression ? void 0 : gD.GZipJS;
          const NU = this._is_persistence_disabled(),
            IU = !this._inCookielessMode();
          if (this.persistence = new tD(this.config, NU, !0, IU), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new tD(ky(ky({}, this.config), {}, {
              persistence: "sessionStorage"
            }), NU, !1, IU), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !NU && PF._is_supported()) {
            const UU = PF._parse(this._sessionRegisteredPropertiesStorageKey);
            Gz(UU) && UU.forEach((UU => {
              Wz(UU) && this._sessionRegisteredPropKeys.add(UU)
            }))
          } else PF._remove(this._sessionRegisteredPropertiesStorageKey);
          const pU = ky({}, this.persistence.props),
            aU = ky({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new vE(((UU, XU) => this._send_retriable_request(UU, XU)), this.config.request_queue_config), this._retryQueue = new sE(this), this.__request_queue = [];
          const tU = this._inCookielessMode();
          tU || (this.sessionManager = new KE(this), this.sessionPropsManager = new lE(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((UU, XU, zU) => {
            ((null == zU ? void 0 : zU.activityTimeout) || (null == zU ? void 0 : zU.sessionPastMaximumLength) || (null == zU ? void 0 : zU.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (fA.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(tU)
          }), 0)) : (fA.info("Initializing extensions synchronously"), this._initExtensions(tU)), QU.DEBUG = QU.DEBUG || this.config.debug, QU.DEBUG && fA.info("Starting in debug mode", {
            this: this,
            config: XU,
            thisC: ky({}, this.config),
            p: pU,
            s: aU
          }), this.config.identity_distinct_id && !(null === (cU = XU.bootstrap) || void 0 === cU ? void 0 : cU.distinctID) && (XU.bootstrap = ky(ky({}, XU.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const gU = null === (yU = XU.bootstrap) || void 0 === yU ? void 0 : yU.distinctID;
          if (this._hasStableInitialDistinctId = !!gU && !dz(gU), null === (AU = XU.bootstrap) || void 0 === AU ? void 0 : AU.distinctID) {
            const UU = XU.bootstrap.distinctID,
              zU = this.get_distinct_id(),
              cU = this.persistence.get_property(kX);
            if (XU.bootstrap.isIdentifiedID && null != zU && zU !== UU && "anonymous" === cU) this.identify(UU);
            else if (XU.bootstrap.isIdentifiedID && null != zU && zU !== UU && "identified" === cU) fA.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const zU = this.config.get_device_id(zF()),
                cU = XU.bootstrap.isIdentifiedID ? zU : UU;
              this.persistence.set_property(kX, XU.bootstrap.isIdentifiedID ? sX : VX), this.register({
                distinct_id: UU,
                $device_id: cU
              })
            }
          }
          if (tU) this.register_once({
            distinct_id: dX,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const UU = this.config.get_device_id(zF());
            this.register_once({
              distinct_id: UU,
              $device_id: UU
            }, ""), this.persistence.set_property(kX, VX)
          }
          return JA(KX, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), JA(KX, "pageshow", (() => {
            var UU;
            this._isPageUnloading = !1, this._isShutdown || null === (UU = this._retryQueue) || void 0 === UU || UU.resume()
          })), XU.segment ? Ro(this, (() => this._loaded())) : this._loaded(), Bz(this.config._onCapture) && this.config._onCapture !== LY && (fA.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (UU => this.config._onCapture(UU.event, UU)))), this.config.ip && fA.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return TE.apply(this, arguments)
          }().then((UU => {
            UU && this.register({
              [dU]: UU
            })
          })).catch(LY), this
        }
        _isSharedExtension(UU) {
          const XU = UU;
          return Wz(XU.name) && Bz(XU.setup)
        }
        _enrollExtension(UU, XU) {
          var zU = this;
          this._isSharedExtension(UU) ? XU.push(nz((function*() {
            try {
              yield UU.setup(zU._getBrowserClientAdapter())
            } catch (zU) {
              fA.error(`Failed to set up extension "${UU.name}"`, zU);
              try {
                var XU;
                yield null === (XU = UU.dispose) || void 0 === XU ? void 0 : XU.call(UU)
              } catch (XU) {
                fA.error(`Failed to dispose extension "${UU.name}"`, XU)
              }
            }
          }))) : this._extensions.push(UU)
        }
        _enrollFeatureFlags() {
          var XU, zU, cU, yU = this;
          const QU = null !== (XU = null === (zU = this.config.__extensionClasses) || void 0 === zU ? void 0 : zU.featureFlags) && void 0 !== XU ? XU : null === (cU = UU.__defaultExtensionClasses) || void 0 === cU ? void 0 : cU.featureFlags;
          var AU, FU, oU;
          if (QU)
            if (this.featureFlags && this.featureFlags instanceof QU || (null === (AU = this._featureFlagsReloadingUnsubscribe) || void 0 === AU || AU.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new QU(this)), Bz(this.featureFlags.onReloading) && Bz(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const UU = this.featureFlags;
                nz((function*() {
                  try {
                    yield UU.setup(yU._getBrowserClientAdapter())
                  } catch (XU) {
                    fA.error("Failed to set up feature flags", XU);
                    const cU = yU._featureFlagsReloadingUnsubscribe;
                    yU._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == cU || cU()
                    } catch (UU) {
                      fA.error("Failed to unsubscribe feature flag reloading", UU)
                    }
                    try {
                      yield UU.dispose()
                    } catch (UU) {
                      fA.error("Failed to dispose feature flags", UU)
                    }
                  }
                }))()
              }
            } else null === (FU = (oU = this.featureFlags).initialize) || void 0 === FU || FU.call(oU)
        }
        _initExtensions(XU) {
          const zU = performance.now(),
            cU = ky(ky({}, UU.__defaultExtensionClasses), this.config.__extensionClasses),
            yU = [];
          var QU, AU, FU, oU, DU, EU, YU, NU;
          cU.exceptions && this._extensions.push(this.exceptions = null !== (QU = this.exceptions) && void 0 !== QU ? QU : new cU.exceptions(this)), cU.historyAutocapture && this._extensions.push(this.historyAutocapture = new cU.historyAutocapture(this)), cU.tracingHeaders && this._extensions.push(this.tracingHeaders = new cU.tracingHeaders(this)), cU.siteApps && this._extensions.push(this.siteApps = new cU.siteApps(this)), cU.sessionRecording && !XU && this._extensions.push(this.sessionRecording = new cU.sessionRecording(this)), this.config.disable_scroll_properties || yU.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), cU.autocapture && this._enrollExtension(this.autocapture = new cU.autocapture(this), yU), cU.surveys && this._enrollExtension(this.surveys = null !== (AU = this.surveys) && void 0 !== AU ? AU : new cU.surveys(this), yU), cU.logs && this._enrollExtension(this.logs = null !== (FU = this.logs) && void 0 !== FU ? FU : new cU.logs(this), yU), cU.metrics && this._extensions.push(this.metrics = null !== (oU = this.metrics) && void 0 !== oU ? oU : new cU.metrics(this)), cU.conversations && this._extensions.push(this.conversations = null !== (DU = this.conversations) && void 0 !== DU ? DU : new cU.conversations(this)), cU.productTours && this._extensions.push(this.productTours = new cU.productTours(this)), cU.heatmaps && this._extensions.push(this.heatmaps = new cU.heatmaps(this)), cU.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new cU.webVitalsAutocapture(this)), cU.exceptionObserver && this._extensions.push(this.exceptionObserver = new cU.exceptionObserver(this)), cU.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new cU.deadClicksAutocapture(this, Go)), cU.toolbar && this._extensions.push(this.toolbar = null !== (EU = this.toolbar) && void 0 !== EU ? EU : new cU.toolbar(this)), cU.experiments && this._extensions.push(this.experiments = null !== (YU = this.experiments) && void 0 !== YU ? YU : new cU.experiments(this)), cU.webMCP && this._extensions.push(this.webMCP = null !== (NU = this.webMCP) && void 0 !== NU ? NU : new cU.webMCP(this)), this._extensions.forEach((UU => {
            UU.initialize && yU.push((() => {
              var XU;
              null === (XU = UU.initialize) || void 0 === XU || XU.call(UU)
            }))
          })), yU.push((() => {
            if (this._pendingRemoteConfig) {
              const UU = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((XU => {
                var zU;
                return null === (zU = XU.onRemoteConfig) || void 0 === zU ? void 0 : zU.call(XU, UU)
              }))
            }
          })), this._processInitTaskQueue(yU, zU)
        }
        _processInitTaskQueue(UU, XU) {
          for (; UU.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - XU >= 30 && UU.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(UU, XU)
            }), 0));
            const zU = UU.shift();
            if (zU) try {
              zU()
            } catch (UU) {
              fA.error("Error initializing extension:", UU)
            }
          }
          const zU = Math.round(performance.now() - XU);
          this.register_for_session({
            [eX]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [CX]: zU
          }), this.config.__preview_deferred_init_extensions && fA.info(`PostHog extensions initialized (${zU}ms)`)
        }
        _onRemoteConfig(UU) {
          if (!hX || !hX.body) return fA.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(UU)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = UU), this._lastRemoteConfig = UU, this.compression = void 0, UU.ok) {
            var XU;
            const zU = UU.config;
            zU.supportedCompression && !this.config.disable_compression && (this.compression = Nz(zU.supportedCompression, gD.GZipJS) ? gD.GZipJS : Nz(zU.supportedCompression, gD.Base64) ? gD.Base64 : void 0), (null === (XU = zU.analytics) || void 0 === XU ? void 0 : XU.endpoint) && (this.analyticsDefaultEndpoint = zU.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : nX
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", UU), this._extensions.forEach((XU => {
            var zU;
            return null === (zU = XU.onRemoteConfig) || void 0 === zU ? void 0 : zU.call(XU, UU)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (UU) {
            fA.critical("`loaded` function failed", UU)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == Uz ? void 0 : Uz.hostname)) {
            const UU = Uz.hostname,
              XU = this.config.internal_or_test_user_hostname;
            ("string" == typeof XU ? UU === XU : XU.test(UU)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new MD(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var UU;
          this.is_capturing() && this.config.request_batching && (null === (UU = this._requestQueue) || void 0 === UU || UU.enable())
        }
        _dom_loaded() {
          this.is_capturing() && HA(this.__request_queue, (UU => this._send_retriable_request(UU))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var UU, XU, zU, cU, yU, QU;
          this._isPageUnloading = !0, null === (UU = this.surveys) || void 0 === UU || null === (XU = UU.handlePageUnload) || void 0 === XU || XU.call(UU), null === (zU = this.metrics) || void 0 === zU || zU.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(xX), null === (cU = this.logs) || void 0 === cU || cU.flushLogs("sendBeacon"), null === (yU = this._requestQueue) || void 0 === yU || yU.unload(), null === (QU = this._retryQueue) || void 0 === QU || QU.unload()) : this._shouldCapturePageleave() && this.capture(xX, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(UU) {
          ME(this, UU)
        }
        _send_retriable_request(UU, XU) {
          this._retryQueue ? this._retryQueue.retriableRequest(UU, XU) : this._send_request(XU ? ky(ky({}, UU), {}, {
            transport: XU
          }) : UU)
        }
        _execute_array(UU) {
          dY++;
          try {
            let XU;
            const zU = [],
              cU = [],
              yU = [];
            HA(UU, (UU => {
              if (UU)
                if (XU = UU[0], Gz(XU)) yU.push(UU);
                else if (Bz(UU)) try {
                UU.call(this)
              } catch (XU) {
                fA.error("Error executing queued PostHog call", UU, XU)
              } else Gz(UU) && "alias" === XU ? zU.push(UU) : Gz(UU) && -1 !== XU.indexOf("capture") && Bz(this[XU]) ? yU.push(UU) : cU.push(UU)
            }));
            const QU = function(UU, XU) {
              HA(UU, (function(UU) {
                try {
                  if (Gz(UU[0])) {
                    let zU = XU;
                    MA(UU, (function(UU) {
                      zU = zU[UU[0]].apply(zU, UU.slice(1))
                    }))
                  } else XU[UU[0]].apply(XU, UU.slice(1))
                } catch (XU) {
                  fA.error("Error executing queued PostHog call", UU, XU)
                }
              }))
            };
            QU(zU, this), QU(cU, this), QU(yU, this)
          } finally {
            dY--
          }
        }
        push(XU) {
          if (dY > 0 && Gz(XU) && Wz(XU[0])) {
            const zU = UU.prototype[XU[0]];
            Bz(zU) && zU.apply(this, XU.slice(1))
          } else this._execute_array([XU])
        }
        get _facebookClickIdChannel() {
          return {
            property: CU,
            persistenceKey: wU,
            cookieName: "_fbc",
            pattern: fY,
            register: (UU, XU) => {
              var zU;
              return null === (zU = this.persistence) || void 0 === zU ? void 0 : zU.register({
                [wU]: {
                  value: UU,
                  delivered: XU
                }
              })
            },
            unregister: () => {
              var UU;
              return null === (UU = this.persistence) || void 0 === UU ? void 0 : UU.unregister(wU)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: qU,
            persistenceKey: OU,
            cookieName: "_fbp",
            pattern: iY,
            register: (UU, XU) => {
              var zU;
              return null === (zU = this.persistence) || void 0 === zU ? void 0 : zU.register({
                [OU]: {
                  value: UU,
                  delivered: XU
                }
              })
            },
            unregister: () => {
              var UU;
              return null === (UU = this.persistence) || void 0 === UU ? void 0 : UU.unregister(OU)
            }
          }
        }
        _getPersistedMetaIdentifier(UU) {
          var XU;
          const zU = null === (XU = this.persistence) || void 0 === XU ? void 0 : XU.get_property(UU.persistenceKey);
          return Wz(zU) && UU.pattern.test(zU) ? {
            value: zU,
            delivered: !1
          } : Zz(zU) && Wz(zU.value) && UU.pattern.test(zU.value) ? {
            value: zU.value,
            delivered: !0 === zU.delivered
          } : void 0
        }
        _storeMetaIdentifier(UU, XU, zU) {
          return XU === (null == zU ? void 0 : zU.value) ? {
            value: XU,
            pending: !zU.delivered
          } : (UU.register(XU, !1), {
            value: XU,
            pending: !0
          })
        }
        _readMetaCookie(UU) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const XU = KA(UU.cookieName);
          return Wz(XU) && UU.pattern.test(XU) ? XU : void 0
        }
        _updateFacebookClickId(UU, XU, zU, cU) {
          if (!this.persistence) return;
          const yU = this._facebookClickIdChannel;
          this.persistence.refreshKey(yU.persistenceKey);
          const QU = this._getPersistedMetaIdentifier(yU);
          if (cU) return void yU.unregister();
          if (zU) return Wz(XU) && fY.test(XU) ? this._storeMetaIdentifier(yU, XU, QU) : void yU.unregister();
          const AU = Wz(UU) && uY.test(UU) ? UU : void 0,
            FU = this._readMetaCookie(yU);
          return FU && ((UU, XU, zU) => {
            const cU = UU.split(".");
            if (XU) return cU[3] === XU;
            if (!zU) return !0;
            const yU = zU.value.split(".");
            return cU[3] === yU[3] || Number(cU[2]) > Number(yU[2])
          })(FU, AU, QU) ? this._storeMetaIdentifier(yU, FU, QU) : AU ? (null == QU ? void 0 : QU.value.split(".")[3]) === AU ? {
            value: QU.value,
            pending: !QU.delivered
          } : this._storeMetaIdentifier(yU, `fb.1.${Date.now()}.${AU}`, QU) : QU ? {
            value: QU.value,
            pending: !QU.delivered
          } : void 0
        }
        _updateFacebookBrowserId(UU, XU, zU) {
          if (!this.persistence) return;
          const cU = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(cU.persistenceKey);
          const yU = this._getPersistedMetaIdentifier(cU);
          if (zU) return void cU.unregister();
          if (XU) return Wz(UU) && iY.test(UU) ? this._storeMetaIdentifier(cU, UU, yU) : void cU.unregister();
          const QU = this._readMetaCookie(cU);
          return QU ? this._storeMetaIdentifier(cU, QU, yU) : yU ? {
            value: yU.value,
            pending: !yU.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(UU, XU) {
          if (!this.persistence) return;
          this.persistence.refreshKey(UU.persistenceKey);
          const zU = this._getPersistedMetaIdentifier(UU);
          (null == zU ? void 0 : zU.value) !== XU || zU.delivered || UU.register(XU, !0)
        }
        capture(UU, XU, zU) {
          var cU, yU;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void fA.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (Pz(UU) || !Wz(UU)) return void fA.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === UU && this._inCookielessMode()) return;
          const QU = !this.config.opt_out_useragent_filter && this._is_bot();
          if (QU && !this.config.__preview_capture_bot_pageviews) return;
          const AU = (null == zU ? void 0 : zU.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == AU ? void 0 : AU.isRateLimited) return void fA.critical("This capture call is ignored due to client rate limiting.");
          let FU;
          (null == XU ? void 0 : XU.$current_url) && !Wz(null == XU ? void 0 : XU.$current_url) && (fA.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == XU || delete XU.$current_url), "$exception" !== UU || (null == zU ? void 0 : zU._originatedFromCaptureException) || fA.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (FU = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const oU = new Date,
            DU = (null == zU ? void 0 : zU.timestamp) || oU,
            EU = oy(null == zU ? void 0 : zU.uuid, zF);
          let YU = {
            uuid: EU,
            event: UU,
            properties: this.calculateEventProperties(UU, XU || {}, DU, EU)
          };
          "$pageview" === UU && this.config.__preview_capture_bot_pageviews && QU && (YU.event = "$bot_pageview", YU.properties.$browser_type = "bot"), AU && (YU.properties.$lib_rate_limit_remaining_tokens = AU.remainingTokens);
          const NU = "$feature_flag_called" === UU && !1 === YU.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == zU ? void 0 : zU.$set) && !NU && (YU.$set = null == zU ? void 0 : zU.$set);
          const IU = Zz(null == XU ? void 0 : XU.$set) ? XU.$set : void 0,
            pU = Gz(null == XU ? void 0 : XU.$unset) ? XU.$unset : [],
            aU = (null == zU ? void 0 : zU.$unset) || [],
            tU = UU => {
              var XU;
              const cU = !!(null == zU ? void 0 : zU.$set) && UU in zU.$set;
              return {
                hasProvided: cU || !!IU && UU in IU,
                provided: cU ? null == zU || null === (XU = zU.$set) || void 0 === XU ? void 0 : XU[UU] : null == IU ? void 0 : IU[UU],
                unset: -1 !== pU.indexOf(UU) || -1 !== aU.indexOf(UU)
              }
            },
            gU = tU(CU),
            kU = tU(qU),
            GU = [{
              channel: this._facebookClickIdChannel,
              hasProvided: gU.hasProvided,
              update: this._updateFacebookClickId(null == FU ? void 0 : FU.fbclid, gU.provided, gU.hasProvided, gU.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: kU.hasProvided,
              update: this._updateFacebookBrowserId(kU.provided, kU.hasProvided, kU.unset)
            }];
          for (const {
              channel: CU,
              hasProvided: qU,
              update: OU
            }
            of GU) OU && !0 === YU.properties.$process_person_profile && OU.pending && !qU && !NU && (YU.$set = ky({
            [CU.property]: OU.value
          }, YU.$set));
          const BU = null == zU ? void 0 : zU.$unset;
          BU && (YU.$unset = BU);
          const ZU = NU ? void 0 : this._calculate_set_once_properties(null == zU ? void 0 : zU.$set_once, UU !== jX, UU === JX);
          if (ZU && (YU.$set_once = ZU), (null == zU ? void 0 : zU._noTruncate) || (RU = this.config.properties_string_max_length, YU = function(UU, XU) {
              const zU = new Set;
              return function UU(cU, yU) {
                if (cU !== Object(cU)) return XU ? XU(cU) : cU;
                if (zU.has(cU)) return;
                let QU;
                if (zU.add(cU), Gz(cU)) QU = [], HA(cU, (XU => {
                  QU.push(UU(XU))
                }));
                else {
                  const XU = {};
                  MA(fz(cU) ? mA(cU) : cU, ((cU, yU) => {
                    zU.has(cU) || (XU[yU] = UU(cU, yU))
                  })), QU = XU
                }
                return QU
              }(UU)
            }(YU, (UU => Wz(UU) ? UU.slice(0, RU) : UU))), YU.timestamp = DU, Pz(null == zU ? void 0 : zU.timestamp) || (YU.properties.$event_time_override_provided = !0, YU.properties.$event_time_override_system_time = oU), NU && (YU.properties = function(UU) {
              let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const zU = {},
                cU = XU => {
                  void 0 !== UU[XU] && (zU[XU] = UU[XU])
                };
              return aQ.forEach(cU), XU.forEach(cU), zU
            }(YU.properties, HY)), UU === WD || UU === dD) {
            const zU = null == XU ? void 0 : XU[LD],
              cU = null == XU ? void 0 : XU[eD];
            NY({
              id: zU,
              current_iteration: cU
            }), YU.$set = ky(ky({}, YU.$set), {}, {
              [hE({
                id: zU,
                current_iteration: cU
              }, UU === dD ? "responded" : "dismissed")]: !0
            })
          } else UU === PD && (YU.$set = ky(ky({}, YU.$set), {}, {
            [CD]: (new Date).toISOString()
          }));
          var RU;
          if (UU === SD) {
            const UU = null == XU ? void 0 : XU[uD];
            UU && (YU.$set = ky(ky({}, YU.$set), {}, {
              [`${rD}/${UU}`]: (new Date).toISOString()
            }))
          }
          const PU = ky(ky({}, YU.properties.$set), YU.$set);
          if (Rz(PU) || this.setPersonPropertiesForFlags(PU), !ez(this.config.before_send)) {
            const UU = this._runBeforeSend(YU);
            if (!UU) return;
            YU = UU, YU.uuid = oy(YU.uuid, zF)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && rY(UU) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const WU = GU.filter((UU => {
            let {
              channel: XU,
              update: zU
            } = UU;
            var cU, yU, QU;
            const AU = null !== (cU = null === (yU = YU.$set) || void 0 === yU ? void 0 : yU[XU.property]) && void 0 !== cU ? cU : Zz(null === (QU = YU.properties) || void 0 === QU ? void 0 : QU.$set) ? YU.properties.$set[XU.property] : void 0;
            return (null == zU ? void 0 : zU.pending) && AU === zU.value
          }));
          this._internalEventEmitter.emit("eventCaptured", YU);
          const dU = null !== (cU = null == zU ? void 0 : zU._url) && void 0 !== cU ? cU : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            LU = "recordings" === (null == zU ? void 0 : zU._batchKey) || /\/s\/(?:\?|$)/.test(dU),
            eU = ky(ky(ky({
              method: "POST",
              url: dU,
              data: YU,
              compression: "best-available",
              preferSyncCompression: null == zU ? void 0 : zU.send_instantly,
              timestampMode: LU ? "body" : "capture-body",
              batchKey: null == zU ? void 0 : zU._batchKey
            }, LU && (null === (yU = YU.properties) || void 0 === yU ? void 0 : yU.$session_id) ? {
              batchGroup: YU.properties.$session_id + (YU.properties.$window_id ? `-${YU.properties.$window_id}` : "")
            } : {}), (null == zU ? void 0 : zU.transport) ? {
              transport: zU.transport
            } : {}), WU.length ? {
              fireCallbackOnDrop: !0,
              callback: UU => {
                if (UU.statusCode >= 200 && 300 > UU.statusCode)
                  for (const {
                      channel: XU,
                      update: zU
                    }
                    of WU) this._markMetaIdentifierDelivered(XU, zU.value)
              }
            } : {});
          if (!this.config.request_batching || zU && !(null == zU ? void 0 : zU._batchKey) || (null == zU ? void 0 : zU.send_instantly)) {
            var wU;
            let UU;
            !eU.transport && !eU.callback && Rz(null !== (wU = this.config.request_headers) && void 0 !== wU ? wU : {}) && this._isPageUnloading && (UU = "sendBeacon"), this._send_retriable_request(eU, UU)
          } else this._requestQueue.enqueue(eU);
          return YU
        }
        _addCaptureHook(UU) {
          return this.on("eventCaptured", (XU => UU(XU.event, XU)))
        }
        getExtension(UU) {
          var XU;
          return null === (XU = this._browserClientAdapter) || void 0 === XU ? void 0 : XU.getExtension(UU)
        }
        _getBrowserClientAdapter() {
          var UU;
          return null !== (UU = this._browserClientAdapter) && void 0 !== UU ? UU : this._browserClientAdapter = new PY(this)
        }
        _registerExtensionEventProperties(UU) {
          this._extensionEventPropertyProducers.push(UU);
          let XU = !0;
          return () => {
            if (!XU) return;
            XU = !1;
            const zU = this._extensionEventPropertyProducers.indexOf(UU); - 1 !== zU && this._extensionEventPropertyProducers.splice(zU, 1)
          }
        }
        _processCookieIdentityChange() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var XU, zU, cU;
          return !!(null === (XU = this.persistence) || void 0 === XU ? void 0 : XU.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (cU = this.sessionPersistence) || void 0 === cU || cU.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (zU = this.featureFlags) || void 0 === zU || zU.reset(), UU && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(UU, XU, zU, cU, QU) {
          if (zU = zU || new Date, !this.persistence || !this.sessionPersistence) return XU;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const AU = QU ? void 0 : this.persistence.remove_event_timer(UU);
          let FU = ky({}, XU);
          if (FU.token = this.config.token, FU.$config_defaults = this.config.defaults, this._inCookielessMode() && (FU[LX] = !0), "$snapshot" === UU) {
            const UU = ky(ky({}, this.persistence.properties()), this.sessionPersistence.properties());
            return FU.distinct_id = UU.distinct_id, (!Wz(FU.distinct_id) && !Cz(FU.distinct_id) || dz(FU.distinct_id)) && fA.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), FU
          }
          const oU = function(UU, XU, zU) {
            let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var QU, AU, FU, oU;
            if (!Qz) return {};
            const DU = UU ? [...so, ...XU || []] : [],
              [EU, YU] = Kc(Qz),
              [NU, IU] = function(UU) {
                for (let XU = 0; Uy.length > XU; XU++) {
                  const [zU, cU, yU] = Uy[XU], QU = UU.match(zU);
                  if (QU) {
                    const XU = yU && UU.match(yU) || QU;
                    return [cU, (null == XU ? void 0 : XU[1]) || ""]
                  }
                }
                return ["", ""]
              }(Qz),
              pU = function() {
                const UU = "u" > typeof navigator ? navigator : void 0;
                return (null == UU ? void 0 : UU.brave) ? {
                  brave: !0
                } : {}
              }(),
              aU = {};
            Pz(zU) || (aU.detectGoogleSearchApp = zU);
            const tU = {},
              gU = null === (QU = navigator) || void 0 === QU || null === (QU = QU.userAgentData) || void 0 === QU ? void 0 : QU.platform,
              kU = null === (AU = navigator) || void 0 === AU ? void 0 : AU.maxTouchPoints,
              GU = null == KX || null === (FU = KX.screen) || void 0 === FU ? void 0 : FU.width,
              BU = null == KX || null === (oU = KX.screen) || void 0 === oU ? void 0 : oU.height,
              ZU = null == KX ? void 0 : KX.devicePixelRatio;
            Pz(gU) || (tU.userAgentDataPlatform = gU), Pz(kU) || (tU.maxTouchPoints = kU), Pz(GU) || (tU.screenWidth = GU), Pz(BU) || (tU.screenHeight = BU), Pz(ZU) || (tU.devicePixelRatio = ZU);
            const RU = vA(nA({
              $os: EU,
              $os_version: YU,
              $browser: lc(Qz, navigator.vendor, pU, aU),
              $webview_app: NU,
              $webview_app_version: IU,
              $device: bc(Qz),
              $device_type: Tc(Qz, tU),
              $timezone: So(),
              $timezone_offset: cD()
            }), {
              $current_url: vo(cU ? Ey(null == Uz ? void 0 : Uz.href) : null == Uz ? void 0 : Uz.href, DU, mo),
              $host: null == Uz ? void 0 : Uz.host,
              $pathname: null == Uz ? void 0 : Uz.pathname,
              $raw_user_agent: Qz.length > 1e3 ? Qz.substring(0, 997) + "..." : Qz,
              $browser_version: Jc(Qz, navigator.vendor, pU, aU),
              $browser_language: bo(),
              $browser_language_prefix: To(),
              $screen_height: null == KX ? void 0 : KX.screen.height,
              $screen_width: null == KX ? void 0 : KX.screen.width,
              $viewport_height: null == KX ? void 0 : KX.innerHeight,
              $viewport_width: null == KX ? void 0 : KX.innerWidth,
              $lib: yU.LIB_NAME,
              $lib_version: yU.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return yU.SDK_DIST_CHANNEL && (RU.$sdk_dist_channel = yU.SDK_DIST_CHANNEL), RU
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: UU,
              windowId: XU
            } = this.sessionManager.checkAndGetSessionAndWindowId(QU, zU.getTime(), !0);
            FU.$session_id = UU, FU.$window_id = XU
          }
          this.sessionPropsManager && vA(FU, this.sessionPropsManager.getSessionProps());
          try {
            var DU;
            if (this.sessionRecording) {
              const XU = this.sessionRecording.sdkDebugProperties,
                zU = !this._replayDebugPropertiesPaused && rY(UU);
              for (const UU in XU)(zU || Nz(OY, UU)) && (FU[UU] = XU[UU])
            }
            FU.$sdk_debug_retry_queue_size = null === (DU = this._retryQueue) || void 0 === DU ? void 0 : DU.length
          } catch (UU) {
            FU.$sdk_debug_error_capturing_properties = String(UU)
          }
          let EU;
          if (this.requestRouter.region === AY && (FU.$lib_custom_api_host = this.config.api_host), EU = "$pageview" !== UU || QU ? "$pageleave" !== UU || QU ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(zU) : this.pageViewManager.doPageView(zU, cU), FU = vA(FU, EU), "$pageview" === UU && hX && (FU.title = hX.title), !Pz(AU)) {
            const UU = zU.getTime() - AU;
            FU.$duration = parseFloat((UU / 1e3).toFixed(3))
          }
          Qz && this.config.opt_out_useragent_filter && (FU.$browser_type = this._is_bot() ? "bot" : "browser");
          const YU = this.persistence.properties(),
            NU = this.sessionPersistence.properties(),
            IU = FU.$groups,
            pU = YU.$groups;
          Zz(IU) && !Rz(IU) && (FU.$groups = ky(ky({}, Zz(pU) ? pU : {}), IU)), MA(["$referrer", "$referring_domain"], (UU => {
            UU in YU && delete NU[UU]
          }));
          const aU = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const yU of this._extensionEventPropertyProducers.slice()) try {
              vA(aU, yU())
            } catch (UU) {
              fA.error("Failed to produce browser extension event properties", UU)
            }
          FU = vA({}, oU, YU, NU, ky(ky({}, aU), FU)), FU.$is_identified = this._isIdentified(), Gz(this.config.property_denylist) ? MA(this.config.property_denylist, (function(UU) {
            delete FU[UU]
          })) : fA.error(qY + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const tU = this.config.sanitize_properties;
          tU && (fA.error(wY), FU = tU(FU, UU));
          const gU = this._hasPersonProcessing();
          return FU.$process_person_profile = gU, gU && !QU && this._requirePersonProcessing("_calculate_event_properties"), FU
        }
        _calculate_set_once_properties(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var cU;
          if (!this.persistence || !this._hasPersonProcessing()) return UU;
          if (this._personProcessingSetOncePropertiesSent && !zU) return UU;
          const yU = this.persistence.get_initial_props(),
            QU = null === (cU = this.sessionPropsManager) || void 0 === cU ? void 0 : cU.getSetOnceProps();
          let AU = vA({}, yU, QU || {}, UU || {});
          const FU = this.config.sanitize_properties;
          return FU && (fA.error(wY), AU = FU(AU, "$set_once")), XU && (this._personProcessingSetOncePropertiesSent = !0), Rz(AU) ? void 0 : AU
        }
        register(UU, XU) {
          var zU;
          null === (zU = this.persistence) || void 0 === zU || zU.register(UU, XU)
        }
        register_once(UU, XU, zU) {
          var cU;
          null === (cU = this.persistence) || void 0 === cU || cU.register_once(UU, XU, zU)
        }
        register_for_session(UU) {
          var XU, zU;
          null === (XU = this.persistence) || void 0 === XU || XU.syncCookieProperties(), this._processCookieIdentityChange(), null === (zU = this.sessionPersistence) || void 0 === zU || zU.register(UU), Object.keys(UU).forEach((UU => this._sessionRegisteredPropKeys.add(UU))), this._persistSessionRegisteredPropKeys()
        }
        unregister(UU) {
          var XU;
          null === (XU = this.persistence) || void 0 === XU || XU.unregister(UU)
        }
        unregister_for_session(UU) {
          var XU;
          null === (XU = this.sessionPersistence) || void 0 === XU || XU.unregister(UU), this._sessionRegisteredPropKeys.delete(UU), this._persistSessionRegisteredPropKeys()
        }
        _register_single(UU, XU) {
          this.register({
            [UU]: XU
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((UU => {
            var XU;
            null === (XU = this.sessionPersistence) || void 0 === XU || XU.unregister(UU)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var UU;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (UU = this.sessionPersistence) || void 0 === UU ? void 0 : UU._disabled) || !PF._is_supported()) return void PF._remove(this._sessionRegisteredPropertiesStorageKey);
          const XU = [];
          this._sessionRegisteredPropKeys.forEach((UU => XU.push(UU))), XU.length > 0 ? PF._set(this._sessionRegisteredPropertiesStorageKey, XU) : PF._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(UU, XU) {
          var zU;
          return null === (zU = this.featureFlags) || void 0 === zU ? void 0 : zU.getFeatureFlag(UU, XU)
        }
        getFeatureFlagPayload(UU) {
          var XU;
          return null === (XU = this.featureFlags) || void 0 === XU ? void 0 : XU.getFeatureFlagPayload(UU)
        }
        getFeatureFlagResult(UU, XU) {
          var zU;
          return null === (zU = this.featureFlags) || void 0 === zU ? void 0 : zU.getFeatureFlagResult(UU, XU)
        }
        getAllFeatureFlags() {
          var UU, XU;
          return null !== (UU = null === (XU = this.featureFlags) || void 0 === XU ? void 0 : XU.getAllFeatureFlags()) && void 0 !== UU ? UU : []
        }
        isFeatureEnabled(UU, XU) {
          var zU, cU;
          return null !== (zU = null === (cU = this.featureFlags) || void 0 === cU ? void 0 : cU.isFeatureEnabled(UU, XU)) && void 0 !== zU ? zU : null == XU ? void 0 : XU.defaultValue
        }
        reloadFeatureFlags() {
          var UU;
          null === (UU = this.featureFlags) || void 0 === UU || UU.reloadFeatureFlags()
        }
        updateFlags(UU, XU, zU) {
          var cU;
          null === (cU = this.featureFlags) || void 0 === cU || cU.updateFlags(UU, XU, zU)
        }
        updateEarlyAccessFeatureEnrollment(UU, XU, zU) {
          var cU;
          null === (cU = this.featureFlags) || void 0 === cU || cU.updateEarlyAccessFeatureEnrollment(UU, XU, zU)
        }
        getEarlyAccessFeatures(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0;
          var cU;
          return null === (cU = this.featureFlags) || void 0 === cU ? void 0 : cU.getEarlyAccessFeatures(UU, XU, zU)
        }
        on(UU, XU) {
          return this._internalEventEmitter.on(UU, XU)
        }
        onFeatureFlags(UU) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(UU) : (UU([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(UU) {
          return this.surveys ? this.surveys.onSurveysLoaded(UU) : (UU([], {
            isLoaded: !1,
            error: CY
          }), () => {})
        }
        onSessionId(UU) {
          var XU, zU;
          return null !== (XU = null === (zU = this.sessionManager) || void 0 === zU ? void 0 : zU.onSessionId(UU)) && void 0 !== XU ? XU : () => {}
        }
        getSurveys(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(UU, XU) : UU([], {
            isLoaded: !1,
            error: CY
          })
        }
        getActiveMatchingSurveys(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(UU, XU) : UU([], {
            isLoaded: !1,
            error: CY
          })
        }
        onActiveMatchingSurveysChanged(UU) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(UU) : (UU([], {
            isLoaded: !1,
            error: CY
          }), () => {})
        }
        renderSurvey(UU, XU) {
          var zU;
          null === (zU = this.surveys) || void 0 === zU || zU.renderSurvey(UU, XU)
        }
        displaySurvey(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pY;
          var zU;
          null === (zU = this.surveys) || void 0 === zU || zU.displaySurvey(UU, XU)
        }
        cancelPendingSurvey(UU) {
          var XU;
          null === (XU = this.surveys) || void 0 === XU || XU.cancelPendingSurvey(UU)
        }
        canRenderSurvey(UU) {
          var XU, zU;
          return null !== (XU = null === (zU = this.surveys) || void 0 === zU ? void 0 : zU.canRenderSurvey(UU)) && void 0 !== XU ? XU : {
            visible: !1,
            disabledReason: CY
          }
        }
        canRenderSurveyAsync(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var zU, cU;
          return null !== (zU = null === (cU = this.surveys) || void 0 === cU ? void 0 : cU.canRenderSurveyAsync(UU, XU)) && void 0 !== zU ? zU : Promise.resolve({
            visible: !1,
            disabledReason: CY
          })
        }
        _validateIdentifyId(UU) {
          return !UU || dz(UU) ? (fA.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === UU ? (fA.critical(`The string "${UU}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(UU.toLowerCase()) && !["undefined", "null"].includes(UU.toLowerCase()) || (fA.critical(`The string "${UU}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(UU, XU, zU) {
          if (!this.__loaded || !this.persistence) return fA.uninitializedWarning("posthog.identify");
          if (Cz(UU) && (UU = UU.toString(), fA.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(UU)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const cU = this.get_distinct_id(),
            yU = this.persistence.syncCookieProperties() && this.get_distinct_id() !== cU,
            QU = this._processCookieIdentityChange(!1),
            AU = this.persistence._beginCookieSyncSuppression();
          let FU = !1;
          try {
            const cU = this.get_distinct_id();
            this.register({
              $user_id: UU
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: cU
            }, ""), UU !== cU && UU !== this.get_property("__alias") && (this.unregister(LU), this.register({
              distinct_id: UU
            }));
            const AU = (this.persistence.get_property("$user_state") || "anonymous") === VX,
              DU = UU !== cU,
              EU = !DU && AU;
            if (DU && AU) {
              var oU;
              const yU = this.config.reuseAnonymousId ? {
                distinct_id: UU
              } : {
                distinct_id: UU,
                $anon_distinct_id: cU
              };
              this.persistence.set_property(kX, sX), this.setPersonPropertiesForFlags({
                $set: XU || {},
                $set_once: zU || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", yU, {
                $set: XU || {},
                $set_once: zU || {}
              }) && (this._cachedPersonProperties = QY(UU, XU, zU)), null === (oU = this.featureFlags) || void 0 === oU || oU.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : cU)
            } else if (EU) {
              this.persistence.set_property(kX, sX);
              const cU = XU || {},
                yU = zU || {};
              this.setPersonPropertiesForFlags({
                $set: cU,
                $set_once: yU
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: cU,
                $set_once: yU
              }) && (this._cachedPersonProperties = QY(UU, XU, zU))
            } else(XU || zU) && this.setPersonProperties(XU, zU);
            DU || yU || QU ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(tU)) : EU && (XU || zU) && this.reloadFeatureFlags(), FU = !0
          } finally {
            AU && this.persistence._endCookieSyncSuppression(FU)
          }
        }
        setPersonProperties(UU, XU) {
          if (!UU && !XU) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const zU = QY(this.get_distinct_id(), UU, XU);
          this._cachedPersonProperties !== zU ? (this.setPersonPropertiesForFlags({
            $set: UU || {},
            $set_once: XU || {}
          }, !0), this.capture("$set", {
            $set: UU || {},
            $set_once: XU || {}
          }) && (this._cachedPersonProperties = zU)) : fA.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(UU) {
          var XU;
          const zU = (Gz(UU) ? UU : [UU]).filter((UU => Wz(UU) && UU.length > 0));
          0 !== zU.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (XU = this.featureFlags) || void 0 === XU || XU.unsetPersonPropertiesForFlags(zU, !0), this.capture("$set", {
            $unset: zU
          }), this._cachedPersonProperties = null)
        }
        group(UU, XU, zU) {
          var cU;
          if (!UU || !XU) return void fA.error("posthog.group requires a group type and group key");
          null === (cU = this.persistence) || void 0 === cU || cU.syncCookieProperties(), this._processCookieIdentityChange();
          const yU = this.getGroups(),
            QU = yU[UU] !== XU;
          if (QU && this.resetGroupPropertiesForFlags(UU), this.register({
              $groups: ky(ky({}, yU), {}, {
                [UU]: XU
              })
            }), (QU || zU) && this._hasPersonProcessing()) {
            const cU = {
              $group_type: UU,
              $group_key: XU
            };
            zU && (cU.$group_set = zU), this.capture(jX, cU)
          }
          zU && this.setGroupPropertiesForFlags({
            [UU]: zU
          }), QU && !zU && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var zU;
          null === (zU = this.featureFlags) || void 0 === zU || zU.setPersonPropertiesForFlags(UU, XU)
        }
        resetPersonPropertiesForFlags() {
          let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var XU;
          null === (XU = this.featureFlags) || void 0 === XU || XU.resetPersonPropertiesForFlags(UU)
        }
        setGroupPropertiesForFlags(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var zU;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (zU = this.featureFlags) || void 0 === zU || zU.setGroupPropertiesForFlags(UU, XU))
        }
        resetGroupPropertiesForFlags(UU) {
          var XU;
          null === (XU = this.featureFlags) || void 0 === XU || XU.resetGroupPropertiesForFlags(UU)
        }
        reset(UU) {
          const XU = qz(UU) ? UU : null == UU ? void 0 : UU.resetDeviceID,
            zU = qz(UU) || null == UU ? void 0 : UU.bootstrap;
          this._reset(XU, !1, zU)
        }
        _reset(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0;
          var cU, yU, QU, AU, FU, oU;
          if (fA.info("reset"), !this.__loaded) return fA.uninitializedWarning("posthog.reset");
          const DU = null == zU ? void 0 : zU.sessionID;
          this.config.bootstrap = zU || (null === (cU = this._originalUserConfig) || void 0 === cU ? void 0 : cU.bootstrap) || {}, null === (yU = this.featureFlags) || void 0 === yU || null === (QU = yU.updateConfig) || void 0 === QU || QU.call(yU, this.config, this._shouldDisableFlags());
          const EU = this.get_property(WU),
            YU = this.get_property(dU),
            NU = this.get_property(mU);
          null === (AU = this.sessionRecording) || void 0 === AU || AU.flushBeforeIdentityReset();
          const IU = this.is_capturing();
          XU || this.consent.reset(), XU || !IU || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const pU = null === (FU = this.persistence) || void 0 === FU || null === (oU = FU._beginCookieSyncSuppression) || void 0 === oU ? void 0 : oU.call(FU),
            aU = this._isConsentTransition;
          this._isConsentTransition = aU || XU;
          let tU = !1;
          try {
            var gU, kU, GU, BU, ZU, RU, PU, LU, eU, CU, wU, qU, OU;
            if (null === (gU = this.persistence) || void 0 === gU || gU.clear(), null === (kU = this.sessionPersistence) || void 0 === kU || kU.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), Pz(NU) || null === (CU = this.persistence) || void 0 === CU || CU.register({
                $session_recording_remote_config: NU
              }), null === (GU = this.surveys) || void 0 === GU || GU.reset(), null === (BU = this.featureFlags) || void 0 === BU || BU.reset(), null === (ZU = this.conversations) || void 0 === ZU || ZU.reset(), null === (RU = this.logs) || void 0 === RU || RU.reset(), null === (PU = this.metrics) || void 0 === PU || PU.reset(), null === (LU = this.persistence) || void 0 === LU || LU.set_property("$user_state", "anonymous"), null === (eU = this.sessionManager) || void 0 === eU || eU.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: dX,
              $device_id: null
            }, "");
            else {
              const XU = this.config.get_device_id(zF());
              this.register_once({
                distinct_id: XU,
                $device_id: UU ? XU : EU
              }, ""), UU || Pz(YU) || this.register({
                [dU]: YU
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), zU && (zU.distinctID && !this._inCookielessMode() && (null === (OU = this.persistence) || void 0 === OU || OU.set_property("$user_state", zU.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: zU.distinctID
              })), null === (wU = this.featureFlags) || void 0 === wU || wU.initialize(), !ez(DU) && !(null === (qU = this.sessionManager) || void 0 === qU ? void 0 : qU.setBootstrapSessionId(DU, !0)))) {
              const UU = ky({}, zU);
              delete UU.sessionID, this.config.bootstrap = UU
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, tU = !0
          } finally {
            var SU, rU;
            this._isConsentTransition = aU, pU && (null === (SU = this.persistence) || void 0 === SU || null === (rU = SU._endCookieSyncSuppression) || void 0 === rU || rU.call(SU, tU))
          }
          this.reloadFeatureFlags()
        }
        shutdown(UU) {
          var XU = this;
          return nz((function*() {
            if (!XU.__loaded) return void fA.uninitializedWarning("posthog.shutdown");
            XU._isShutdown = !0, clearTimeout(XU._extensionInitTimeout), XU._extensionInitTimeout = void 0;
            const UU = XU._featureFlagsReloadingUnsubscribe;
            XU._featureFlagsReloadingUnsubscribe = void 0;
            for (const zU of [() => {
                var UU;
                return null === (UU = XU.sessionRecording) || void 0 === UU ? void 0 : UU.dispose()
              }, () => {
                var UU;
                return null === (UU = XU.logs) || void 0 === UU ? void 0 : UU.flushLogs("sendBeacon")
              }, () => {
                var UU;
                return null === (UU = XU.metrics) || void 0 === UU ? void 0 : UU.flush("sendBeacon")
              }, () => {
                var UU;
                return null === (UU = XU.metrics) || void 0 === UU ? void 0 : UU.dispose()
              }, () => {
                var UU;
                return null === (UU = XU.logs) || void 0 === UU ? void 0 : UU.dispose()
              }, () => {
                var UU;
                return null === (UU = XU.surveys) || void 0 === UU ? void 0 : UU.dispose()
              }, () => {
                var UU;
                return null === (UU = XU.autocapture) || void 0 === UU ? void 0 : UU.dispose()
              }, () => null == UU ? void 0 : UU(), () => {
                var UU;
                return null === (UU = XU._requestQueue) || void 0 === UU ? void 0 : UU.unload()
              }, () => {
                var UU;
                return null === (UU = XU._retryQueue) || void 0 === UU ? void 0 : UU.unload()
              }, () => {
                var UU;
                return null === (UU = XU.featureFlags) || void 0 === UU ? void 0 : UU.destroy()
              }, () => {
                var UU;
                return null === (UU = XU.persistence) || void 0 === UU ? void 0 : UU.destroy()
              }, () => {
                var UU;
                return null === (UU = XU.sessionPersistence) || void 0 === UU ? void 0 : UU.destroy()
              }]) try {
              const UU = zU();
              UU && Bz(UU.then) && UU.then(void 0, (UU => {
                fA.error("Error during shutdown", UU)
              }))
            } catch (UU) {
              fA.error("Error during shutdown", UU)
            }
          }))()
        }
        setIdentity(UU, XU) {
          var zU;
          delete this.config.identity_claims, this.config.identity_distinct_id = UU, this.config.identity_hash = XU, this.alias(UU), null === (zU = this.conversations) || void 0 === zU || zU._onIdentityChanged()
        }
        clearIdentity() {
          var UU;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (UU = this.conversations) || void 0 === UU || UU._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var UU, XU;
          return null !== (UU = null === (XU = this.sessionManager) || void 0 === XU ? void 0 : XU.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== UU ? UU : ""
        }
        get_session_replay_url(UU) {
          if (!this.sessionManager) return "";
          const {
            sessionId: XU,
            sessionStartTimestamp: zU
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let cU = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${XU}`);
          if ((null == UU ? void 0 : UU.withTimestamp) && zU) {
            var yU;
            const XU = null !== (yU = UU.timestampLookBack) && void 0 !== yU ? yU : 10;
            if (!zU) return cU;
            cU += `?t=${Math.max(Math.floor(((new Date).getTime()-zU)/1e3)-XU,0)}`
          }
          return cU
        }
        alias(UU, XU) {
          return UU === this.get_property("$people_distinct_id") ? (fA.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (Pz(XU) && (XU = this.get_distinct_id()), UU !== XU ? (this._register_single(LU, UU), this.capture("$create_alias", {
            alias: UU,
            distinct_id: XU
          })) : (fA.warn("alias matches current distinct_id - skipping api call."), this.identify(UU), -1)) : void 0
        }
        set_config(UU) {
          const XU = ky({}, this.config);
          if (Zz(UU)) {
            var zU, cU, yU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
            vA(this.config, nY(UU));
            const ZU = this._is_persistence_disabled();
            if (this.persistence) {
              const UU = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var gU, kU;
              if (UU && this.sessionPersistence !== this.persistence && (null === (gU = this.sessionPersistence) || void 0 === gU || gU.remove(), null === (kU = this.sessionPersistence) || void 0 === kU || kU.destroy()), this.persistence.update_config(this.config, XU, ZU), UU) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new tD(ky(ky({}, this.config), {}, {
                persistence: "sessionStorage"
              }), ZU, !1);
              else {
                var GU;
                null === (GU = this.sessionPersistence) || void 0 === GU || GU.update_config(ky(ky({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), ky(ky({}, XU), {}, {
                  persistence: "sessionStorage"
                }), ZU)
              }
            }
            const RU = this._checkLocalStorageForDebug(this.config.debug);
            var BU;
            qz(RU) && (this.config.debug = RU), qz(this.config.debug) && (this.config.debug ? (QU.DEBUG = !0, DF._is_supported() && DF._set("ph_debug", !0), fA.info("set_config", {
              config: UU,
              oldConfig: XU,
              newConfig: ky({}, this.config)
            })) : (QU.DEBUG = !1, DF._is_supported() && DF._remove("ph_debug"))), null === (zU = this.featureFlags) || void 0 === zU || null === (cU = zU.updateConfig) || void 0 === cU || cU.call(zU, this.config, this._shouldDisableFlags()), null === (yU = this.exceptionObserver) || void 0 === yU || yU.onConfigChange(), null === (AU = this.exceptions) || void 0 === AU || AU.onConfigChange(), null === (FU = this.metrics) || void 0 === FU || FU.onConfigChange(), null === (oU = this.webMCP) || void 0 === oU || oU.startIfEnabled(), null === (DU = this.sessionRecording) || void 0 === DU || DU.startIfEnabledOrStop(), null === (EU = this.tracingHeaders) || void 0 === EU || EU.startIfEnabledOrStop(), null === (YU = this.autocapture) || void 0 === YU || YU.startIfEnabled(), null === (NU = this.heatmaps) || void 0 === NU || NU.startIfEnabled(), ("capture_pageview" in UU || "disable_capture_url_hashes" in UU) && (null === (BU = this.historyAutocapture) || void 0 === BU || BU.startIfEnabledOrStop()), null === (IU = this.exceptionObserver) || void 0 === IU || IU.startIfEnabledOrStop(), null === (pU = this.deadClicksAutocapture) || void 0 === pU || pU.startIfEnabledOrStop(), null === (aU = this.surveys) || void 0 === aU || aU.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (tU = this.externalIntegrations) || void 0 === tU || tU.startIfEnabledOrStop(), !XU.segment && this.config.segment && this.persistence && Ro(this, LY, !1)
          }
        }
        _overrideSDKInfo(UU, XU) {
          QU.LIB_NAME = UU, QU.LIB_VERSION = XU
        }
        startSessionRecording(UU) {
          const XU = !0 === UU,
            zU = {
              sampling: XU || !!(null == UU ? void 0 : UU.sampling),
              linked_flag: XU || !!(null == UU ? void 0 : UU.linked_flag),
              url_trigger: XU || !!(null == UU ? void 0 : UU.url_trigger),
              event_trigger: XU || !!(null == UU ? void 0 : UU.event_trigger)
            };
          var cU, yU, QU, AU, FU;
          Object.values(zU).some(Boolean) && (null === (cU = this.sessionManager) || void 0 === cU || cU.checkAndGetSessionAndWindowId(), zU.sampling && (null === (yU = this.sessionRecording) || void 0 === yU || yU.overrideSampling()), zU.linked_flag && (null === (QU = this.sessionRecording) || void 0 === QU || QU.overrideLinkedFlag()), zU.url_trigger && (null === (AU = this.sessionRecording) || void 0 === AU || AU.overrideTrigger("url")), zU.event_trigger && (null === (FU = this.sessionRecording) || void 0 === FU || FU.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var UU;
          return !!(null === (UU = this.sessionRecording) || void 0 === UU ? void 0 : UU.started)
        }
        captureException(UU, XU) {
          try {
            if (!this.exceptions) return;
            const zU = this.exceptions.buildProperties(UU, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(ky(ky({}, zU), XU))
          } catch (UU) {
            return
          }
        }
        addExceptionStep(UU, XU) {
          var zU;
          null === (zU = this.exceptions) || void 0 === zU || zU.addExceptionStep(UU, XU)
        }
        captureLog(UU) {
          var XU;
          null === (XU = this.logs) || void 0 === XU || XU.captureLog(UU)
        }
        get logger() {
          var XU, zU;
          return null !== (XU = null === (zU = this.logs) || void 0 === zU ? void 0 : zU.logger) && void 0 !== XU ? XU : UU._noopLogger
        }
        startExceptionAutocapture(UU) {
          this.set_config({
            capture_exceptions: null == UU || UU
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(UU) {
          var XU, zU;
          return null !== (XU = null === (zU = this.toolbar) || void 0 === zU ? void 0 : zU.loadToolbar(UU)) && void 0 !== XU && XU
        }
        get_property(UU) {
          var XU;
          return null === (XU = this.persistence) || void 0 === XU ? void 0 : XU.props[UU]
        }
        getSessionProperty(UU) {
          var XU;
          return null === (XU = this.sessionPersistence) || void 0 === XU ? void 0 : XU.props[UU]
        }
        toString() {
          var UU;
          let XU = null !== (UU = this.config.name) && void 0 !== UU ? UU : MY;
          return XU !== MY && (XU = "posthog." + XU), XU
        }
        _isIdentified() {
          var UU, XU;
          return "identified" === (null === (UU = this.persistence) || void 0 === UU ? void 0 : UU.get_property("$user_state")) || "identified" === (null === (XU = this.sessionPersistence) || void 0 === XU ? void 0 : XU.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var UU, XU;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && Rz(this.getGroups()) && !(null === (UU = this.persistence) || void 0 === UU || null === (UU = UU.props) || void 0 === UU ? void 0 : UU.__alias) && !(null === (XU = this.persistence) || void 0 === XU || null === (XU = XU.props) || void 0 === XU ? void 0 : XU.$epp))
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
        _requirePersonProcessing(UU) {
          return "never" === this.config.person_profiles ? (fA.error(UU + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(WX, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const UU = this.consent.isOptedOut();
          return this.config.disable_persistence || UU && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var UU, XU;
          const zU = this._is_persistence_disabled();
          var cU, yU, QU;
          return this.is_capturing() || null === (cU = this.logs) || void 0 === cU || cU._onOptOut(), (null === (UU = this.persistence) || void 0 === UU ? void 0 : UU._disabled) !== zU && (null === (yU = this.persistence) || void 0 === yU || yU.set_disabled(zU)), (null === (XU = this.sessionPersistence) || void 0 === XU ? void 0 : XU._disabled) !== zU && (null === (QU = this.sessionPersistence) || void 0 === QU || QU.set_disabled(zU)), this._persistSessionRegisteredPropKeys(), zU
        }
        opt_in_capturing(XU) {
          var zU;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var cU, yU, QU, AU, FU, oU;
              null === (cU = this.sessionRecording) || void 0 === cU || cU.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (yU = this.sessionManager) || void 0 === yU || yU.destroy(), null === (QU = this.pageViewManager) || void 0 === QU || QU.destroy(), this.sessionManager = new KE(this), this.pageViewManager = new eo(this), this.persistence && (this.sessionPropsManager = new lE(this, this.sessionManager, this.persistence));
              const XU = null !== (AU = null === (FU = this.config.__extensionClasses) || void 0 === FU ? void 0 : FU.sessionRecording) && void 0 !== AU ? AU : null === (oU = UU.__defaultExtensionClasses) || void 0 === oU ? void 0 : oU.sessionRecording;
              var DU, EU;
              XU && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new XU(this)), this._lastRemoteConfig && (null === (DU = this.sessionRecording) || void 0 === DU || null === (EU = DU.onRemoteConfig) || void 0 === EU || EU.call(DU, this._lastRemoteConfig)))
            }
            var YU, NU;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (zU = this.sessionRecording) || void 0 === zU || zU.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (YU = this.surveys) || void 0 === YU || YU.loadIfEnabled()), (Pz(null == XU ? void 0 : XU.captureEventName) || (null == XU ? void 0 : XU.captureEventName)) && this.capture(null !== (NU = null == XU ? void 0 : XU.captureEventName) && void 0 !== NU ? NU : "$opt_in", null == XU ? void 0 : XU.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else fA.warn(eY)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : fA.warn(eY)
        }
        _enterCookielessMode() {
          var UU, XU;
          const zU = this.sessionRecording;
          null == zU || zU.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: dX,
            $device_id: null
          }), this._removeExtension(zU), this.sessionRecording = void 0, null === (UU = this.sessionManager) || void 0 === UU || UU.destroy(), null === (XU = this.pageViewManager) || void 0 === XU || XU.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const UU = this.consent.consent;
          return 1 === UU ? "granted" : 0 === UU ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return TX ? bE(TX, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          hX && ("visible" === hX.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(lX, {
            title: hX.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (hX.removeEventListener(ZU, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), JA(hX, ZU, this._visibilityStateListener)))
        }
        debug(UU) {
          !1 === UU ? (null == KX || KX.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == KX || KX.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const UU = this._originalUserConfig || {};
          return "advanced_disable_flags" in UU ? !!UU.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (fA.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(UU, XU, zU, cU, yU) {
            const QU = XU in UU && !ez(UU[XU]),
              AU = zU in UU && !ez(UU[zU]);
            return QU ? UU[XU] : !!AU && (yU && yU.warn(`Config field '${zU}' is deprecated. Please use '${XU}' instead. The old field will be removed in a future major version.`), UU[zU])
          }(UU, "advanced_disable_flags", "advanced_disable_decide", 0, fA)
        }
        _runBeforeSend(UU) {
          var XU;
          if (ez(this.config.before_send)) return UU;
          const zU = Object.keys(null !== (XU = UU.properties) && void 0 !== XU ? XU : {}).filter(Sz),
            cU = Gz(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let yU = UU;
          for (const QU of cU) try {
            if (yU = QU(yU), ez(yU)) {
              const XU = `Event '${UU.event}' was rejected in beforeSend function`;
              return Oz(UU.event) ? fA.warn(`${XU}. This can cause unexpected behavior.`) : fA.info(XU), null
            }
            yU.properties && !Rz(yU.properties) || fA.warn(`Event '${UU.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (XU) {
            return fA.error(`Error in beforeSend function for event '${UU.event}':`, XU), null
          }
          for (const QU of zU)
            if (yU.properties && ez(yU.properties[QU])) return fA.warn(`Event '${UU.event}' had its '${QU}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return yU
        }
        getPageViewId() {
          var UU;
          return null === (UU = this.pageViewManager._currentPageview) || void 0 === UU ? void 0 : UU.pageViewId
        }
        captureTraceFeedback(UU, XU) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(UU),
            $ai_feedback_text: XU
          })
        }
        captureTraceMetric(UU, XU, zU) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(UU),
            $ai_metric_name: XU,
            $ai_metric_value: String(zU)
          })
        }
        _checkLocalStorageForDebug(UU) {
          const XU = qz(UU) && !UU,
            zU = DF._is_supported() && "true" === DF._get("ph_debug");
          return !XU && (!!zU || UU)
        }
      };
    lY.__defaultExtensionClasses = {}, lY._noopLogger = (() => {
        const UU = () => {};
        return {
          trace: UU,
          debug: UU,
          info: UU,
          warn: UU,
          error: UU,
          fatal: UU
        }
      })(),
      function(UU, XU) {
        for (let zU = 0; XU.length > zU; zU++) UU.prototype[XU[zU]] = sA(UU.prototype[XU[zU]])
      }(lY, ["identify"]);
    var xY = class {
      constructor(UU) {
        this.disabled = !1 === UU;
        const XU = Zz(UU) ? UU : {};
        this.thresholdPx = XU.threshold_px || 30, this.timeoutMs = XU.timeout_ms || 1e3, this.clickCount = XU.click_count || 3, this.clicks = []
      }
      isRageClick(UU, XU, zU) {
        if (this.disabled) return !1;
        const cU = this.clicks[this.clicks.length - 1];
        if (cU && Math.abs(UU - cU.x) + Math.abs(XU - cU.y) < this.thresholdPx && this.timeoutMs > zU - cU.timestamp) {
          if (this.clicks.push({
              x: UU,
              y: XU,
              timestamp: zU
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: UU,
          y: XU,
          timestamp: zU
        }];
        return !1
      }
    };
    const JY = "$copy_autocapture",
      jY = iA("[AutoCapture]");

    function KY(UU, XU) {
      return XU.length > UU ? XU.slice(0, UU) + "..." : XU
    }

    function bY(UU) {
      if (UU.previousElementSibling) return UU.previousElementSibling;
      let XU = UU;
      do {
        XU = XU.previousSibling
      } while (XU && !eF(XU));
      return XU
    }
    var TY = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(UU) {
          var XU;
          if (!co(UU)) return !0;
          const zU = null !== (XU = this._refreshConfig().css_selector_ignorelist) && void 0 !== XU ? XU : sF,
            cU = new Set;
          let yU = UU;
          for (; yU;) {
            if (cU.size >= 1e3 || cU.has(yU)) return !0;
            cU.add(yU);
            const UU = yU,
              XU = rF(UU);
            if (Nz(XU, "ph-no-capture") || Nz(XU, "ph-sensitive") || yo(UU) || zU.some((XU => MF(UU, XU)))) return !0;
            const QU = yU.parentNode;
            yU = qF(QU) ? QU.host : QU && eF(QU) ? QU : null
          }
          return !1
        }
        _trackPointer(UU) {
          if (!this.isEnabled || "pointercancel" === UU.type) return void this._clearPointer();
          if ("pointerdown" === UU.type) {
            this._clearPointer();
            const zU = iF(UU);
            var XU;
            return void(UU.isPrimary && 0 === UU.button && !UU.ctrlKey && zU && eF(zU) && (this._pointerDown = {
              target: zU,
              excluded: this._isExcludedPointerTarget(zU),
              id: UU.pointerId,
              x: UU.clientX,
              y: UU.clientY,
              released: !1,
              distinctId: null === (XU = this._client) || void 0 === XU ? void 0 : XU.distinctId
            }))
          }
          const zU = this._pointerDown;
          zU && (UU.pointerId !== zU.id || Math.abs(UU.clientX - zU.x) > 5 || Math.abs(UU.clientY - zU.y) > 5 ? this._clearPointer() : "pointerup" === UU.type && (zU.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(UU) {
          var XU;
          const zU = this._pointerDown;
          this._clearPointer();
          const cU = iF(UU);
          if ((null == zU ? void 0 : zU.released) && zU.target.isConnected && zU.distinctId === (null === (XU = this._client) || void 0 === XU ? void 0 : XU.distinctId) && UU.pointerId === zU.id && (UU.detail > 0 || "touch" === UU.pointerType || "pen" === UU.pointerType) && 0 === UU.button && 5 >= Math.abs(UU.clientX - zU.x) && 5 >= Math.abs(UU.clientY - zU.y) && cU && (CF(cU, "html") || CF(cU, "body"))) {
            var yU;
            if (zU.excluded) return null;
            const UU = null !== (yU = this._refreshConfig().css_selector_ignorelist) && void 0 !== yU ? yU : sF;
            return [cU, null == hX ? void 0 : hX.documentElement, null == hX ? void 0 : hX.body].some((XU => {
              if (!XU) return !1;
              const zU = rF(XU);
              return Nz(zU, "ph-no-capture") || Nz(zU, "ph-sensitive") || !co(XU) || yo(XU) || UU.some((UU => MF(XU, UU)))
            })) ? null : zU.target
          }
        }
        constructor(UU) {
          this._configSource = UU, this.name = kY, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new xY(this._config.rageclick), this._elementSelectors = null
        }
        setup(UU) {
          this._compileUrlPatterns(), this._client = UU;
          const XU = UU.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? XU.dispose() : (this._remoteConfigSubscription = XU, this.startIfEnabled())
        }
        dispose() {
          var UU;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (UU = this._remoteConfigSubscription) || void 0 === UU || UU.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var UU, XU;
          return this._refreshConfig(), this._config.url_allowlist = null === (UU = this._config.url_allowlist) || void 0 === UU ? void 0 : UU.map((UU => new RegExp(UU))), this._config.url_ignorelist = null === (XU = this._config.url_ignorelist) || void 0 === XU ? void 0 : XU.map((UU => new RegExp(UU))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void jY.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!KX || !hX) return;
          const UU = this._domEventHandler = UU => {
            UU = UU || (null == KX ? void 0 : KX.event);
            try {
              if ("blur" === UU.type) return void this._clearPointer();
              if (0 === UU.type.indexOf("pointer")) return void this._trackPointer(UU);
              const XU = "click" === UU.type ? this._recoverClickTarget(UU) : void 0;
              if (Lz(XU)) return;
              this._captureEvent(UU, "$autocapture", XU)
            } catch (UU) {
              jY.error("Failed to capture event", UU)
            }
          };
          if (JA(KX, "blur", UU), JA(hX, "submit", UU, {
              capture: !0
            }), JA(hX, "change", UU, {
              capture: !0
            }), JA(hX, "click", UU, {
              capture: !0
            }), MA(["pointerdown", "pointermove", "pointerup", "pointercancel"], (XU => {
              JA(hX, XU, UU, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const UU = this._copiedTextHandler = UU => {
              UU = UU || (null == KX ? void 0 : KX.event);
              try {
                this._captureEvent(UU, JY)
              } catch (UU) {
                jY.error("Failed to capture clipboard event", UU)
              }
            };
            JA(hX, "copy", UU, {
              capture: !0
            }), JA(hX, "cut", UU, {
              capture: !0
            }), JA(hX, "paste", UU, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == KX || KX.removeEventListener("blur", this._domEventHandler), MA(["pointerdown", "pointermove", "pointerup", "pointercancel"], (UU => {
            null == hX || hX.removeEventListener(UU, this._domEventHandler, !0)
          })), null == hX || hX.removeEventListener("submit", this._domEventHandler, !0), null == hX || hX.removeEventListener("change", this._domEventHandler, !0), null == hX || hX.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == hX || hX.removeEventListener("copy", this._copiedTextHandler, !0), null == hX || hX.removeEventListener("cut", this._copiedTextHandler, !0), null == hX || hX.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(UU) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !UU.ok) return void this.startIfEnabled();
          const XU = UU.config;
          XU.elementsChainAsString && (this._elementsChainAsString = XU.elementsChainAsString);
          const zU = XU.autocapture_opt_out;
          var cU;
          qz(zU) && (null === (cU = this._client) || void 0 === cU || cU.kv.set("$autocapture_disabled_server_side", zU), this._isDisabledServerSide = zU), this.startIfEnabled()
        }
        setElementSelectors(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          UU.size ? this._elementSelectorsByOwner.set(XU, new Set(UU)) : this._elementSelectorsByOwner.delete(XU);
          const zU = new Set;
          this._elementSelectorsByOwner.forEach((UU => {
            UU.forEach((UU => zU.add(UU)))
          })), this._elementSelectors = zU
        }
        getElementSelectors(UU, XU) {
          var zU;
          const cU = [];
          return null === (zU = this._elementSelectors) || void 0 === zU || zU.forEach((zU => {
            const yU = null == hX ? void 0 : hX.querySelectorAll(zU);
            null == yU || yU.forEach((yU => {
              UU !== yU && XU !== yU || Nz(cU, zU) || cU.push(zU)
            }))
          })), cU
        }
        get isEnabled() {
          var UU, XU;
          if (this._disposed) return !1;
          const zU = null === (UU = this._client) || void 0 === UU ? void 0 : UU.kv.get(rU),
            cU = this._isDisabledServerSide,
            yU = this._refreshConfig();
          if (!yU.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const QU = yU.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (Lz(cU) && !qz(zU) && !QU) return !1;
          const AU = null !== (XU = this._isDisabledServerSide) && void 0 !== XU ? XU : !!zU;
          return !!yU.enabled && !AU
        }
        _captureEvent(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            zU = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let cU = zU || iF(UU);
          wF(cU) && (cU = cU.parentNode || null);
          const yU = this._compileUrlPatterns();
          var QU;
          "$autocapture" === XU && "click" === UU.type && UU instanceof MouseEvent && yU.rageclick && (null === (QU = this.rageclicks) || void 0 === QU ? void 0 : QU.isRageClick(UU.clientX, UU.clientY, UU.timeStamp || (new Date).getTime())) && Uo(cU, yU.rageclick) && this._captureEvent(UU, "$rageclick", zU);
          const AU = XU === JY,
            FU = AU ? ky(ky({}, yU), {}, {
              dom_event_allowlist: void 0
            }) : yU;
          if (cU && function(UU, XU, zU, cU, yU, QU) {
              var AU;
              if (!KX || Xo(UU)) return !1;
              if ((null == zU ? void 0 : zU.url_allowlist) && !SF(zU.url_allowlist, QU)) return !1;
              if ((null == zU ? void 0 : zU.url_ignorelist) && SF(zU.url_ignorelist, QU)) return !1;
              if (null == zU ? void 0 : zU.dom_event_allowlist) {
                const UU = zU.dom_event_allowlist;
                if (UU && !UU.some((UU => XU.type === UU))) return !1
              }
              const {
                parentIsUsefulElement: FU,
                targetElementList: oU
              } = zo(UU, cU);
              if (! function(UU, XU) {
                  const zU = null == XU ? void 0 : XU.element_allowlist;
                  if (Pz(zU)) return !0;
                  for (const cU of UU)
                    if (zU.some((UU => cU.tagName.toLowerCase() === UU))) return !0;
                  return !1
                }(oU, zU)) return !1;
              if (!vF(oU, null == zU ? void 0 : zU.css_selector_allowlist)) return !1;
              if (vF(oU, null !== (AU = null == zU ? void 0 : zU.css_selector_ignorelist) && void 0 !== AU ? AU : sF)) return !1;
              try {
                const zU = KX.getComputedStyle(UU);
                if (zU && "pointer" === zU.getPropertyValue("cursor") && "click" === XU.type) return !0
              } catch (UU) {}
              const DU = UU.tagName.toLowerCase();
              switch (DU) {
                case "html":
                  return !1;
                case "form":
                  return (yU || ["submit"]).indexOf(XU.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (yU || ["change", "click"]).indexOf(XU.type) >= 0;
                default:
                  return FU ? (yU || ["click"]).indexOf(XU.type) >= 0 : (yU || ["click"]).indexOf(XU.type) >= 0 && (HF.indexOf(DU) > -1 || "true" === UU.getAttribute("contenteditable"))
              }
            }(cU, UU, FU, AU, AU ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: yU.getCurrentUrl
              }
            })) {
            var oU;
            const {
              props: zU,
              explicitNoCapture: QU,
              target: AU
            } = function(UU, XU) {
              let {
                e: zU,
                maskAllElementAttributes: cU,
                maskAllText: yU,
                elementAttributeIgnoreList: QU,
                elementsChainAsString: AU,
                disableCaptureUrlHashes: FU
              } = XU;
              var oU, DU;
              if (!eF(UU)) return {
                props: {}
              };
              const EU = [UU],
                YU = new Set([UU]);
              let NU = UU;
              for (; NU.parentNode && !CF(NU, "body") && 1e3 > EU.length;)
                if (qF(NU.parentNode)) {
                  const UU = NU.parentNode.host;
                  if (YU.has(UU)) break;
                  YU.add(UU), EU.push(UU), NU = UU
                } else {
                  if (!eF(NU.parentNode)) break;
                  if (YU.has(NU.parentNode)) break;
                  YU.add(NU.parentNode), EU.push(NU.parentNode), NU = NU.parentNode
                } const IU = "click" === zU.type && "http://www.w3.org/2000/svg" === UU.namespaceURI ? EU.findIndex((UU => CF(UU, "button") || CF(UU, "a"))) : -1;
              IU > 0 && (yU = yU || EU.slice(0, IU + 1).some((UU => !co(UU) || yo(UU))));
              const pU = [],
                aU = {};
              let tU, gU = !1,
                kU = !1;
              if (MA(EU, (UU => {
                  const XU = co(UU);
                  if (CF(UU, "a") && !cU && !(null == QU ? void 0 : QU.includes("href"))) {
                    const zU = UU.getAttribute("href");
                    gU = !!(XU && zU && No(zU)) && (FU ? Ey(zU) : zU)
                  }
                  Nz(rF(UU), "ph-no-capture") && (kU = !0), pU.push(function(UU, XU, zU, cU) {
                    let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const QU = UU.tagName.toLowerCase(),
                      AU = {
                        tag_name: QU
                      };
                    HF.indexOf(QU) > -1 && !zU && (AU.$el_text = "a" === QU.toLowerCase() || "button" === QU.toLowerCase() ? KY(1024, Io(UU)) : KY(1024, fF(UU)));
                    const FU = rF(UU);
                    XU || (null == cU ? void 0 : cU.includes("class")) || 0 >= FU.length || (AU.classes = FU.filter((function(UU) {
                      return "" !== UU
                    }))), MA(UU.attributes, (function(zU) {
                      var QU;
                      if ((!yo(UU) || -1 !== ["name", "id", "class", "aria-label"].indexOf(zU.name)) && !(null == cU ? void 0 : cU.includes(zU.name)) && !XU && No(zU.value) && (!Wz(QU = zU.name) || "_ngcontent" !== QU.substring(0, 10) && "_nghost" !== QU.substring(0, 7))) {
                        let UU = zU.value;
                        "class" === zU.name && (UU = OF(UU).join(" ")), AU["attr__" + zU.name] = KY(1024, "href" === zU.name && yU ? Ey(UU) : UU)
                      }
                    }));
                    let oU = 1,
                      DU = 1,
                      EU = UU;
                    for (; EU = bY(EU);) oU++, EU.tagName === UU.tagName && DU++;
                    return AU.nth_child = oU, AU.nth_of_type = DU, AU
                  }(UU, cU, yU, QU, FU)), MA(function(UU) {
                    if (!co(UU)) return {};
                    const XU = {};
                    return MA(UU.attributes, (function(UU) {
                      if (UU.name && 0 === UU.name.indexOf("data-ph-capture-attribute")) {
                        const zU = UU.name.replace("data-ph-capture-attribute-", ""),
                          cU = UU.value;
                        zU && cU && No(cU) && (XU[zU] = cU)
                      }
                    })), XU
                  }(UU), ((UU, XU) => {
                    ({}).hasOwnProperty.call(aU, XU) || (aU[XU] = UU)
                  }))
                })), kU) return {
                props: {},
                explicitNoCapture: kU
              };
              if (IU > 0 && (UU = EU[IU], pU.splice(0, IU)), yU || (pU[0].$el_text = CF(UU, "a") || CF(UU, "button") ? Io(UU) : fF(UU)), gU) {
                var GU, BU;
                pU[0].attr__href = gU;
                const UU = null === (GU = Ho(gU)) || void 0 === GU ? void 0 : GU.host,
                  XU = null == KX || null === (BU = KX.location) || void 0 === BU ? void 0 : BU.host;
                UU && XU && UU !== XU && (tU = gU)
              }
              return {
                props: vA((RU = zU.type, {
                  $event_type: RU,
                  $ce_version: 1
                }), AU ? {} : {
                  $elements: pU
                }, {
                  $elements_chain: (ZU = pU, Gz(ZU) ? function(UU) {
                    return UU.map((UU => {
                      var XU, zU;
                      let cU = "";
                      if (UU.tag_name && (cU += UU.tag_name), UU.attr_class) {
                        UU.attr_class.sort();
                        for (const XU of UU.attr_class) cU += `.${XU.replace(/"/g,"")}`
                      }
                      const yU = ky(ky(ky(ky({}, UU.text ? {
                          text: UU.text
                        } : {}), {}, {
                          "nth-child": null !== (XU = UU.nth_child) && void 0 !== XU ? XU : 0,
                          "nth-of-type": null !== (zU = UU.nth_of_type) && void 0 !== zU ? zU : 0
                        }, UU.href ? {
                          href: UU.href
                        } : {}), UU.attr_id ? {
                          attr_id: UU.attr_id
                        } : {}), UU.attributes),
                        QU = {};
                      return VA(yU).sort(((UU, XU) => {
                        let [zU] = UU, [cU] = XU;
                        return function(UU, XU) {
                          return XU > UU ? -1 : UU > XU ? 1 : 0
                        }(zU, cU)
                      })).forEach((UU => {
                        let [XU, zU] = UU;
                        return QU[ao(XU.toString())] = ao(zU.toString())
                      })), cU += ":", cU += VA(QU).map((UU => {
                        let [XU, zU] = UU;
                        return `${XU}="${zU}"`
                      })).join(""), cU
                    })).join(";")
                  }(function(UU) {
                    return UU.map((UU => {
                      var XU, zU;
                      const cU = {
                        text: null === (XU = UU.$el_text) || void 0 === XU ? void 0 : XU.slice(0, 400),
                        tag_name: UU.tag_name,
                        href: null === (zU = UU.attr__href) || void 0 === zU ? void 0 : zU.slice(0, 2048),
                        attr_class: to(UU),
                        attr_id: UU.attr__id,
                        nth_child: UU.nth_child,
                        nth_of_type: UU.nth_of_type,
                        attributes: {}
                      };
                      return VA(UU).filter((UU => {
                        let [XU] = UU;
                        return 0 === XU.indexOf("attr__")
                      })).forEach((UU => {
                        let [XU, zU] = UU;
                        return cU.attributes[XU] = zU
                      })), cU
                    }))
                  }(ZU)) : "")
                }, (null === (oU = pU[0]) || void 0 === oU ? void 0 : oU.$el_text) ? {
                  $el_text: null === (DU = pU[0]) || void 0 === DU ? void 0 : DU.$el_text
                } : {}, tU && "click" === zU.type ? {
                  $external_click_url: tU
                } : {}, aU),
                target: UU
              };
              var ZU, RU
            }(cU, {
              e: UU,
              maskAllElementAttributes: yU.maskAllElementAttributes,
              maskAllText: yU.maskAllText,
              elementAttributeIgnoreList: yU.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: yU.disableCaptureUrlHashes
            });
            if (QU) return !1;
            const FU = this.getElementSelectors(cU, AU);
            if (FU && FU.length > 0 && (zU.$element_selectors = FU), XU === JY) {
              const XU = UU.type || "clipboard";
              if ("paste" !== XU) {
                var DU, EU;
                const UU = null == KX || null === (DU = KX.getSelection()) || void 0 === DU ? void 0 : DU.toString(),
                  XU = uF(UU);
                if (!XU) return !1;
                zU.$selected_content = XU, zU.$clipboard_text_length = null !== (EU = null == UU ? void 0 : UU.length) && void 0 !== EU ? EU : 0
              }
              zU.$copy_type = XU
            }
            return null === (oU = this._client) || void 0 === oU || oU.capture(XU, zU), !0
          }
        }
        isBrowserSupported() {
          return Bz(null == hX ? void 0 : hX.querySelectorAll)
        }
      },
      hY = class {
        constructor(UU) {
          this._instance = UU
        }
        refresh(UU) {
          const XU = this._instance.config,
            zU = Zz(XU.autocapture) ? XU.autocapture : void 0;
          UU.enabled = !!XU.autocapture, UU.rageclick = XU.rageclick, UU.maskAllElementAttributes = XU.mask_all_element_attributes, UU.maskAllText = XU.mask_all_text, UU.disableCaptureUrlHashes = XU.disable_capture_url_hashes, UU.getCurrentUrl = XU.get_current_url, UU.remoteRequestsDisabled = this._instance._shouldDisableFlags(), UU.url_allowlist = null == zU ? void 0 : zU.url_allowlist, UU.url_ignorelist = null == zU ? void 0 : zU.url_ignorelist, UU.dom_event_allowlist = null == zU ? void 0 : zU.dom_event_allowlist, UU.element_allowlist = null == zU ? void 0 : zU.element_allowlist, UU.css_selector_allowlist = null == zU ? void 0 : zU.css_selector_allowlist, UU.css_selector_ignorelist = null == zU ? void 0 : zU.css_selector_ignorelist, UU.element_attribute_ignorelist = null == zU ? void 0 : zU.element_attribute_ignorelist, UU.capture_copied_text = null == zU ? void 0 : zU.capture_copied_text
        }
      };
    const UN = iA("[ExceptionAutocapture]"),
      XN = () => {},
      zN = UU => {
        var XU;
        if (Bz(UU)) return null !== (XU = UU.__posthog_layer__) && void 0 !== XU ? XU : UU.__rrweb_layer__
      };

    function cN(UU, XU, zU) {
      try {
        if (!(XU in UU)) return XN;
        const cU = {
            next: UU[XU]
          },
          yU = zU((function() {
            for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
            return cU.next.apply(this, XU)
          }));
        return Bz(yU) && (yU.prototype = yU.prototype || {}, Object.defineProperties(yU, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: cU
          }
        })), UU[XU] = yU, () => {
          if (UU[XU] === yU) return void(UU[XU] = cU.next);
          let zU = UU[XU],
            QU = zN(zU);
          for (; QU;) {
            if (QU.next === yU) return void(QU.next = cU.next);
            zU = QU.next, QU = zN(zU)
          }
        }
      } catch (UU) {
        return XN
      }
    }
    const yN = iA("[TracingHeaders]"),
      QN = iA("[Web Vitals]"),
      AN = 9e5,
      FN = ["CLS", "FCP", "INP", "LCP"],
      oN = ["INP", "LCP"],
      DN = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      EN = "disabled",
      YN = "lazy_loading",
      NN = iA("[SessionRecording]"),
      IN = [wX, qX, OX, SX, rX, uX, fX, iX, HX],
      pN = iA("[Heatmaps]");

    function aN(UU) {
      return Zz(UU) && "clientX" in UU && "clientY" in UU && Cz(UU.clientX) && Cz(UU.clientY)
    }
    const tN = iA("[Product Tours]"),
      gN = UU => {
        var XU;
        return !UU.config.disable_product_tours && !!(null === (XU = UU.persistence) || void 0 === XU ? void 0 : XU.get_property(VU))
      },
      kN = ["$set_once", "$set"],
      GN = iA("[SiteApps]"),
      BN = "Error while initializing PostHog app with config id ",
      ZN = (UU, XU) => (null == UU ? void 0 : UU.then) ? UU.then(XU) : XU(UU),
      RN = "SDK is not enabled or survey functionality is not yet loaded",
      PN = "Disabled. Not loading surveys.";
    var WN = class {
      constructor(UU, XU) {
        this._configSource = UU, this._initialClientState = XU, this.name = ZY, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = UU => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!UU.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), YY.warn("Remote config unavailable. Not loading surveys.");
          const XU = UU.config.surveys;
          if (ez(XU)) return YY.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = qz(XU) ? XU : XU.length > 0, YY.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = UU => {
          this._activeMatchingSurveyCallbacks.slice().forEach((XU => this._notifyActiveMatchingSurveyCallback(XU, UU)))
        }
      }
      setup(UU) {
        if (!this._disposed) return this._initializingClient = UU, ZN(UU.kv.initialize(), (() => {
          if (this._initializingClient !== UU || this._disposed) return;
          this._initializingClient = void 0, this._client = UU;
          const XU = UU.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? XU.dispose() : (this._remoteConfigSubscription = XU, this.loadIfEnabled())
        }))
      }
      dispose() {
        var UU, XU, zU, cU, yU;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (UU = this._remoteConfigSubscription) || void 0 === UU || UU.dispose(), this._remoteConfigSubscription = void 0, null === (XU = this._surveyEventReceiver) || void 0 === XU || XU.dispose(), this._surveyEventReceiver = null, null === (zU = this._surveyManager) || void 0 === zU || null === (cU = zU.dispose) || void 0 === cU || cU.call(zU), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((UU => {
          UU.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (yU = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === yU || yU.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((UU => clearTimeout(UU))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var UU, XU;
        null === (UU = this._surveyManager) || void 0 === UU || null === (XU = UU.clearInMemoryInProgressSurveyState) || void 0 === XU || XU.call(UU);
        try {
          var zU;
          null === (zU = this._surveyEventReceiver) || void 0 === zU || zU.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const UU = [];
          for (let XU = 0; XU < localStorage.length; XU++) {
            const zU = localStorage.key(XU);
            ((null == zU ? void 0 : zU.startsWith("seenSurvey_")) || (null == zU ? void 0 : zU.startsWith("inProgressSurvey_"))) && UU.push(zU)
          }
          UU.forEach((UU => localStorage.removeItem(UU)))
        } catch (UU) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const UU = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void YY.info("Already initializing surveys, skipping...");
        if (UU.disableSurveys) return void YY.info(PN);
        if (UU.cookielessMode && this._configSource.isOptedOut()) return void YY.info("Not loading surveys in cookieless mode without consent.");
        const XU = this._configSource.getExtensions();
        if (!XU) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (Pz(this._isSurveysEnabled) && !UU.advancedEnableSurveys) return;
        const zU = this._isSurveysEnabled || UU.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const UU = XU.generateSurveys;
          if (UU) return this._completeSurveyInitialization(UU, zU), void(this._isInitializingSurveys = !1);
          const cU = XU.loadExternalDependency;
          if (!cU) return this._handleSurveyLoadError(vX), void(this._isInitializingSurveys = !1);
          cU((UU => {
            try {
              if (this._disposed) return;
              const XU = this._configSource.getExtensions();
              UU || !(null == XU ? void 0 : XU.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", UU) : this._completeSurveyInitialization(XU.generateSurveys, zU)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (UU) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", UU), UU
        }
      }
      _completeSurveyInitialization(UU, XU) {
        var zU, cU;
        if (this._disposed) return;
        this._surveyManager = UU(XU), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const yU = null === (zU = null !== (cU = this._client) && void 0 !== cU ? cU : this._initialClientState) || void 0 === zU ? void 0 : zU.kv.get(AX);
        yU && this._registerEventOrActionBasedSurveys(yU), YY.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(UU, XU) {
        this._surveyInitializationFailed = !0, YY.error(UU, XU), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: UU
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: UU
        })
      }
      onSurveysLoaded(UU) {
        return this._surveyCallbacks.push(UU), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((XU => XU !== UU))
        }
      }
      getSurveys(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var zU;
        const cU = null !== (zU = this._client) && void 0 !== zU ? zU : this._initialClientState;
        if (!cU || this._disposed) return;
        if (this._config.disableSurveys) return YY.info(PN), UU([]);
        const yU = cU.kv.get(AX);
        if (yU && !XU) return UU(yU, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((XU => {
          let {
            surveys: zU,
            context: cU
          } = XU;
          this._disposed || UU(zU, cU)
        })).catch((UU => YY.error("Error in survey callback", UU)));
        const QU = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: cU.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((UU => {
          try {
            return this._handleSurveyResponse(cU, UU)
          } catch (UU) {
            return YY.error("Error processing surveys response", UU), this._handleSurveyResponse(cU, {
              statusCode: 0,
              error: UU
            })
          }
        }), (UU => this._handleSurveyResponse(cU, {
          statusCode: 0,
          error: UU
        })));
        this._getSurveysInFlightPromise = QU;
        const AU = () => {
          this._getSurveysInFlightPromise === QU && (this._getSurveysInFlightPromise = null)
        };
        QU.then((XU => {
          AU(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(XU.context), UU(XU.surveys, XU.context))
        }), AU).catch((UU => YY.error("Error in survey callback", UU)))
      }
      _sendSurveysRequest(UU, XU) {
        const zU = this._client;
        return zU ? zU.sendRequest(UU, XU) : new Promise((UU => UU({
          statusCode: 0,
          error: new Error(RN)
        })))
      }
      _handleSurveyResponse(UU, XU) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: RN
          }
        };
        const zU = XU.statusCode;
        if (200 !== zU || !XU.json) {
          const UU = `Surveys API could not be loaded, status: ${zU}`;
          return 0 !== zU ? YY.error(UU) : XU.error || YY.warn(UU), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: UU
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const cU = XU.json.surveys || [];
        return UU.kv.set({
          [AX]: cU,
          [FX]: Date.now()
        }), this._registerEventOrActionBasedSurveys(cU), {
          surveys: cU,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(UU) {
        var XU;
        const zU = UU.filter((UU => function(UU) {
          return !(!UU.start_date || UU.end_date)
        }(UU) && (UY(UU) || function(UU) {
          var XU;
          return !!(null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.actions) || void 0 === XU || null === (XU = XU.values) || void 0 === XU ? void 0 : XU.length)
        }(UU))));
        null === (XU = this._surveyEventReceiver) || void 0 === XU || XU.replace(zU)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var UU, XU;
        const zU = null === (UU = null !== (XU = this._client) && void 0 !== XU ? XU : this._initialClientState) || void 0 === UU ? void 0 : UU.kv.get(FX);
        return Cz(zU) && Date.now() - zU > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return Cz(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(UU, XU) {
        var zU;
        const cU = {
          id: UU,
          current_iteration: null !== (zU = null == XU ? void 0 : XU.iteration) && void 0 !== zU ? zU : null
        };
        NY(cU);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (UU) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(UU) {
        for (const XU of this._surveyCallbacks) try {
          if (!UU.isLoaded) return XU([], UU);
          this.getSurveys(XU)
        } catch (UU) {
          YY.error("Error in survey callback", UU)
        }
      }
      getActiveMatchingSurveys(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!ez(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(UU, XU);
        YY.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(UU) {
        var XU, zU;
        if (this._disposed) return () => {};
        const cU = {
          callback: UU,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(cU), this._startActiveMatchingSurveyConditions();
        const yU = null === (XU = null !== (zU = this._client) && void 0 !== zU ? zU : this._initialClientState) || void 0 === XU ? void 0 : XU.kv.get(AX);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !yU && !ez(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(cU, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(cU), () => {
          var UU;
          cU.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((UU => UU !== cU)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (UU = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === UU || UU.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var UU, XU, zU;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (UU = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== UU || (this._activeMatchingSurveyConditionsUnsubscribe = null === (XU = (zU = this._configSource).onMatchingConditionsChanged) || void 0 === XU ? void 0 : XU.call(zU, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(UU, XU) {
        if (this._disposed || !UU.active) return;
        const zU = ++UU.revision,
          cU = cU => {
            if (!this._disposed && UU.active && zU === UU.revision) try {
              const zU = null != XU ? XU : {
                  isLoaded: !0
                },
                yU = JSON.stringify([cU, zU]);
              if (yU === UU.lastResult) return;
              UU.lastResult = yU, UU.callback(cU, zU)
            } catch (UU) {
              YY.error("Error in active matching surveys callback", UU)
            }
          };
        try {
          XU && !XU.isLoaded ? cU([]) : this.getActiveMatchingSurveys(cU)
        } catch (UU) {
          YY.error("Error in active matching surveys callback", UU)
        }
      }
      _getSurveyById(UU) {
        let XU = null;
        return this.getSurveys((zU => {
          var cU;
          XU = null !== (cU = zU.find((XU => XU.id === UU))) && void 0 !== cU ? cU : null
        })), XU
      }
      _checkSurveyEligibility(UU) {
        if (ez(this._surveyManager)) return {
          eligible: !1,
          reason: RN
        };
        const XU = "string" == typeof UU ? this._getSurveyById(UU) : UU;
        return XU ? this._surveyManager.checkSurveyEligibility(XU) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(UU) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (ez(this._surveyManager)) return {
          eligible: !1,
          reason: RN
        };
        const XU = "string" == typeof UU ? this._getSurveyById(UU) : UU;
        return XU ? this._surveyManager.checkSurveyRenderability(XU) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(UU) {
        if (ez(this._surveyManager)) return YY.warn("init was not called"), {
          visible: !1,
          disabledReason: RN
        };
        const XU = this._checkSurveyRenderability(UU);
        return {
          visible: XU.eligible,
          disabledReason: XU.reason
        }
      }
      canRenderSurveyAsync(UU, XU) {
        return ez(this._surveyManager) ? (YY.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: RN
        })) : new Promise((zU => {
          this.getSurveys((XU => {
            var cU;
            const yU = null !== (cU = XU.find((XU => XU.id === UU))) && void 0 !== cU ? cU : null;
            if (yU) {
              const UU = this._checkSurveyRenderability(yU);
              zU({
                visible: UU.eligible,
                disabledReason: UU.reason
              })
            } else zU({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), XU)
        }))
      }
      renderSurvey(UU, XU, zU) {
        var cU;
        if (!this._configSource.isCapturing()) return;
        if (ez(this._surveyManager)) return void YY.warn("init was not called");
        const yU = "string" == typeof UU ? this._getSurveyById(UU) : UU;
        if (!(null == yU ? void 0 : yU.id)) return void YY.warn("Survey not found");
        if (!IY.includes(yU.type)) return void YY.warn(`Surveys of type ${yU.type} cannot be rendered in the app`);
        const QU = null == hX ? void 0 : hX.querySelector(XU);
        if (QU) {
          if (null === (cU = yU.appearance) || void 0 === cU ? void 0 : cU.surveyPopupDelaySeconds) {
            YY.info(`Rendering survey ${yU.id} with delay of ${yU.appearance.surveyPopupDelaySeconds} seconds`);
            const UU = setTimeout((() => {
              var XU, cU;
              this._renderTimeouts.delete(UU), !this._disposed && this._configSource.isCapturing() && (YY.info(`Rendering survey ${yU.id} with delay of ${null===(XU=yU.appearance)||void 0===XU?void 0:XU.surveyPopupDelaySeconds} seconds`), null === (cU = this._surveyManager) || void 0 === cU || cU.renderSurvey(yU, QU, zU), YY.info(`Survey ${yU.id} rendered`))
            }), 1e3 * yU.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(UU)
          }
          this._surveyManager.renderSurvey(yU, QU, zU)
        } else YY.warn("Survey element not found")
      }
      displaySurvey(UU, XU) {
        var zU;
        if (!this._configSource.isCapturing()) return;
        if (ez(this._surveyManager)) return void YY.warn("init was not called");
        const cU = this._getSurveyById(UU);
        if (!cU) return void YY.warn("Survey not found");
        let yU = cU;
        if ((null === (zU = cU.appearance) || void 0 === zU ? void 0 : zU.surveyPopupDelaySeconds) && XU.ignoreDelay && (yU = ky(ky({}, cU), {}, {
            appearance: ky(ky({}, cU.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), XU.displayType !== wD && XU.initialResponses && YY.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === XU.ignoreConditions) {
          const UU = this._checkSurveyEligibility(cU);
          if (!UU.eligible) return void YY.warn("Survey is not eligible to be displayed: ", UU.reason)
        }
        XU.displayType !== qD ? this._surveyManager.handlePopoverSurvey(yU, XU) : this.renderSurvey(yU, XU.selector, XU.properties)
      }
      cancelPendingSurvey(UU) {
        ez(this._surveyManager) ? YY.warn("init was not called") : this._surveyManager.cancelSurvey(UU)
      }
      handlePageUnload() {
        var UU, XU;
        null === (UU = this._surveyManager) || void 0 === UU || null === (XU = UU.handlePageUnload) || void 0 === XU || XU.call(UU)
      }
    };

    function dN(UU, XU, zU) {
      if (ez(UU)) return !1;
      switch (zU) {
        case "exact":
          return UU === XU;
        case "contains": {
          const zU = XU.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(zU, "i").test(UU)
        }
        case "regex":
          try {
            return new RegExp(XU).test(UU)
          } catch (UU) {
            return !1
          }
        default:
          return !1
      }
    }
    var LN = class {
        constructor(UU) {
          this._instance = UU, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new xE, this._checkStep = (UU, XU) => this._checkStepEvent(UU, XU) && this._checkStepUrl(UU, XU) && this._checkStepElement(UU, XU) && this._checkStepProperties(UU, XU), this._checkStepEvent = (UU, XU) => !(null == XU ? void 0 : XU.event) || (null == UU ? void 0 : UU.event) === (null == XU ? void 0 : XU.event)
        }
        init() {
          var UU, XU;
          Pz(null === (UU = this._instance) || void 0 === UU ? void 0 : UU._addCaptureHook) || (this._captureHookUnsubscribe = null === (XU = this._instance) || void 0 === XU ? void 0 : XU._addCaptureHook(((UU, XU) => {
            this.on(UU, XU)
          })))
        }
        dispose() {
          var UU, XU;
          null === (UU = this._captureHookUnsubscribe) || void 0 === UU || UU.call(this), this._captureHookUnsubscribe = void 0, null === (XU = this._instance) || void 0 === XU || null === (XU = XU.autocapture) || void 0 === XU || XU.setElementSelectors(new Set, this), this._debugEventEmitter = new xE
        }
        register(UU) {
          var XU, zU;
          if (!Pz(null === (XU = this._instance) || void 0 === XU ? void 0 : XU._addCaptureHook) && (UU.forEach((UU => {
              var XU;
              this._actionRegistry.add(UU), null === (XU = UU.steps) || void 0 === XU || XU.forEach((UU => {
                this._actionEvents.add((null == UU ? void 0 : UU.event) || "")
              }))
            })), null === (zU = this._instance) || void 0 === zU ? void 0 : zU.autocapture)) {
            const UU = new Set;
            this._actionRegistry.forEach((XU => {
              var zU;
              null === (zU = XU.steps) || void 0 === zU || zU.forEach((XU => {
                (null == XU ? void 0 : XU.selector) && UU.add(XU.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(UU, this)
          }
        }
        replace(UU) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(UU)
        }
        on(UU, XU) {
          null != XU && 0 != UU.length && (this._actionEvents.has(UU) || this._actionEvents.has(XU.event)) && this._actionRegistry.forEach((UU => {
            this._checkAction(XU, UU) && this._debugEventEmitter.emit("actionCaptured", UU.name)
          }))
        }
        _addActionHook(UU) {
          this.onAction("actionCaptured", (XU => UU(XU)))
        }
        _checkAction(UU, XU) {
          if (null == (null == XU ? void 0 : XU.steps)) return !1;
          for (const zU of XU.steps)
            if (this._checkStep(UU, zU)) return !0;
          return !1
        }
        onAction(UU, XU) {
          return this._debugEventEmitter.on(UU, XU)
        }
        _checkStepUrl(UU, XU) {
          if (null == XU ? void 0 : XU.url) {
            var zU;
            const cU = null == UU || null === (zU = UU.properties) || void 0 === zU ? void 0 : zU.$current_url;
            if (!cU || "string" != typeof cU) return !1;
            if (!dN(cU, XU.url, XU.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(UU, XU) {
          return !!this._checkStepHref(UU, XU) && !!this._checkStepText(UU, XU) && !!this._checkStepSelector(UU, XU)
        }
        _checkStepHref(UU, XU) {
          var zU;
          if (!(null == XU ? void 0 : XU.href)) return !0;
          const cU = this._getElementsList(UU);
          if (cU.length > 0) return cU.some((UU => dN(UU.href, XU.href, XU.href_matching || "exact")));
          const yU = (null == UU || null === (zU = UU.properties) || void 0 === zU ? void 0 : zU.$elements_chain) || "";
          return !!yU && dN(function(UU) {
            const XU = UU.match(/(?::|")href="(.*?)"/);
            return XU ? XU[1] : ""
          }(yU), XU.href, XU.href_matching || "exact")
        }
        _checkStepText(UU, XU) {
          var zU;
          if (!(null == XU ? void 0 : XU.text)) return !0;
          const cU = this._getElementsList(UU);
          if (cU.length > 0) return cU.some((UU => dN(UU.text, XU.text, XU.text_matching || "exact") || dN(UU.$el_text, XU.text, XU.text_matching || "exact")));
          const yU = (null == UU || null === (zU = UU.properties) || void 0 === zU ? void 0 : zU.$elements_chain) || "";
          return !!yU && (QU = function(UU) {
            const XU = [],
              zU = /(?::|")text="(.*?)"/g;
            let cU;
            for (; !ez(cU = zU.exec(UU));) XU.includes(cU[1]) || XU.push(cU[1]);
            return XU
          }(yU), AU = XU.text, FU = XU.text_matching || "exact", QU.some((UU => dN(UU, AU, FU))));
          var QU, AU, FU
        }
        _checkStepSelector(UU, XU) {
          var zU, cU;
          if (!(null == XU ? void 0 : XU.selector)) return !0;
          const yU = null == UU || null === (zU = UU.properties) || void 0 === zU ? void 0 : zU.$element_selectors;
          if (null == yU ? void 0 : yU.includes(XU.selector)) return !0;
          const QU = (null == UU || null === (cU = UU.properties) || void 0 === cU ? void 0 : cU.$elements_chain) || "";
          if (XU.selector_regex && QU) try {
            return new RegExp(XU.selector_regex).test(QU)
          } catch (UU) {
            return !1
          }
          return !1
        }
        _getElementsList(UU) {
          var XU;
          return null == (null == UU || null === (XU = UU.properties) || void 0 === XU ? void 0 : XU.$elements) ? [] : null == UU ? void 0 : UU.properties.$elements
        }
        _checkStepProperties(UU, XU) {
          return !(null == XU ? void 0 : XU.properties) || 0 === XU.properties.length || yY(XU.properties.reduce(((UU, XU) => {
            const zU = Gz(XU.value) ? XU.value.map(String) : null != XU.value ? [String(XU.value)] : [];
            return UU[XU.key] = {
              values: zU,
              operator: XU.operator || "exact"
            }, UU
          }), {}), null == UU ? void 0 : UU.properties)
        }
      },
      eN = class {
        constructor(UU, XU) {
          var zU, cU;
          this._pendingActivatedItems = [], this._instance = UU, this._onActivationChanged = XU, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (zU = this._instance) || void 0 === zU || null === (cU = zU.onSessionId) || void 0 === cU ? void 0 : cU.call(zU, (UU => this._onSessionIdChanged(UU)))
        }
        _shouldPersistArmedActivation(UU) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(UU) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(UU, XU) {
          return !!UU && yY(UU.propertyFilters, null == XU ? void 0 : XU.properties)
        }
        _buildEventToItemMap(UU, XU) {
          const zU = new Map;
          return UU.forEach((UU => {
            var cU;
            null === (cU = UU.conditions) || void 0 === cU || null === (cU = cU[XU]) || void 0 === cU || null === (cU = cU.values) || void 0 === cU || cU.forEach((XU => {
              if (null == XU ? void 0 : XU.name) {
                const cU = zU.get(XU.name) || [];
                cU.push(UU.id), zU.set(XU.name, cU)
              }
            }))
          })), zU
        }
        _getMatchingItems(UU, XU, zU) {
          const cU = (zU === kD ? this._eventToItems : this._cancelEventToItems).get(UU);
          let yU = [];
          return this._getItems((UU => {
            yU = UU.filter((UU => null == cU ? void 0 : cU.includes(UU.id)))
          })), yU.filter((cU => {
            var yU;
            const QU = null === (yU = cU.conditions) || void 0 === yU || null === (yU = yU[zU]) || void 0 === yU || null === (yU = yU.values) || void 0 === yU ? void 0 : yU.find((XU => XU.name === UU));
            return this._doesEventMatchFilter(QU, XU)
          }))
        }
        register(UU) {
          this._register(UU, !1)
        }
        replace(UU) {
          this._register(UU, !0)
        }
        _register(UU, XU) {
          var zU;
          Pz(null === (zU = this._instance) || void 0 === zU ? void 0 : zU._addCaptureHook) || (this._setupEventBasedItems(UU, XU), this._setupActionBasedItems(UU, XU))
        }
        _setupActionBasedItems(UU, XU) {
          const zU = UU.filter((UU => {
            var XU;
            return null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.actions) || void 0 === XU || null === (XU = XU.values) || void 0 === XU ? void 0 : XU.length
          }));
          var cU;
          if (XU && this._actionToItems.clear(), 0 === zU.length) return void(XU && (null === (cU = this._actionMatcher) || void 0 === cU || cU.replace([])));
          this._actionMatcher || (this._actionMatcher = new LN(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((UU => this.onAction(UU))));
          const yU = [];
          zU.forEach((UU => {
            var XU;
            null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.actions) || void 0 === XU || XU.values.forEach((XU => {
              if (yU.push(XU), XU.name) {
                var zU;
                const cU = null !== (zU = this._actionToItems.get(XU.name)) && void 0 !== zU ? zU : [];
                cU.includes(UU.id) || cU.push(UU.id), this._actionToItems.set(XU.name, cU)
              }
            }))
          })), XU ? this._actionMatcher.replace(yU) : this._actionMatcher.register(yU)
        }
        _mergeItemMaps(UU, XU) {
          XU.forEach(((XU, zU) => {
            var cU;
            const yU = null !== (cU = UU.get(zU)) && void 0 !== cU ? cU : [];
            XU.forEach((UU => {
              yU.includes(UU) || yU.push(UU)
            })), UU.set(zU, yU)
          }))
        }
        _setupEventBasedItems(UU, XU) {
          var zU, cU;
          const yU = UU.filter((UU => {
              var XU, zU;
              return (null === (XU = UU.conditions) || void 0 === XU ? void 0 : XU.events) && (null === (zU = UU.conditions) || void 0 === zU || null === (zU = zU.events) || void 0 === zU || null === (zU = zU.values) || void 0 === zU ? void 0 : zU.length) > 0
            })),
            QU = UU.filter((UU => {
              var XU, zU;
              return (null === (XU = UU.conditions) || void 0 === XU ? void 0 : XU.cancelEvents) && (null === (zU = UU.conditions) || void 0 === zU || null === (zU = zU.cancelEvents) || void 0 === zU || null === (zU = zU.values) || void 0 === zU ? void 0 : zU.length) > 0
            })),
            AU = this._buildEventToItemMap(UU, kD),
            FU = this._buildEventToItemMap(UU, GD);
          XU ? (this._eventToItems = AU, this._cancelEventToItems = FU) : (this._mergeItemMaps(this._eventToItems, AU), this._mergeItemMaps(this._cancelEventToItems, FU)), (0 !== yU.length || 0 !== QU.length || UU.some((UU => {
            var XU;
            return null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.actions) || void 0 === XU || null === (XU = XU.values) || void 0 === XU ? void 0 : XU.length
          }))) && (null !== (zU = this._captureHookUnsubscribe) && void 0 !== zU || (this._captureHookUnsubscribe = null === (cU = this._instance) || void 0 === cU ? void 0 : cU._addCaptureHook(((UU, XU) => {
            this.onEvent(UU, XU)
          }))))
        }
        onEvent(UU, XU) {
          var zU, cU;
          const yU = this._getLogger(),
            QU = (null == XU || null === (zU = XU.properties) || void 0 === zU ? void 0 : zU.$survey_id) || (null == XU || null === (cU = XU.properties) || void 0 === cU ? void 0 : cU.$product_tour_id);
          if (QU && this.getActivatedIds().includes(QU)) {
            const zU = this._activationOutcome(UU, QU, XU);
            if ("consume" === zU) return yU.info("event consumed activated item, removing it", {
              event: UU,
              itemId: QU
            }), void this._deactivateItems([QU]);
            if ("persist" === zU) return yU.info("shown item promoted to persisted activation", {
              event: UU,
              itemId: QU
            }), this._persistActivation(QU), void this._clearActivationTimestamps([QU])
          }
          if (this._cancelEventToItems.has(UU)) {
            const zU = this._getMatchingItems(UU, XU, GD);
            zU.length > 0 && (yU.info("cancel event matched, cancelling items", {
              event: UU,
              itemsToCancel: zU.map((UU => UU.id))
            }), this._deactivateItems(zU.map((UU => UU.id))), zU.forEach((UU => this._cancelPendingItem(UU.id))))
          }
          if (!this._eventToItems.has(UU)) return;
          yU.info("event name matched", {
            event: UU,
            eventPayload: XU,
            items: this._eventToItems.get(UU)
          });
          const AU = this._getMatchingItems(UU, XU, kD);
          this._activateItems(AU.map((UU => UU.id)))
        }
        onAction(UU) {
          this._actionToItems.has(UU) && this._activateItems(this._actionToItems.get(UU) || [])
        }
        _activateItems(UU) {
          var XU, zU;
          if (0 === UU.length) return;
          const cU = !!(null === (XU = this._instance) || void 0 === XU || null === (zU = XU.get_session_id) || void 0 === zU ? void 0 : zU.call(XU)),
            yU = [];
          for (const QU of UU) cU && this._shouldPersistArmedActivation(QU) ? this._persistActivation(QU) && this._recordActivationTimestamp(QU) : yU.push(QU);
          yU.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...yU])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(UU) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((XU => XU !== UU));
          const XU = this._getPersistedActivatedIds();
          return !XU.includes(UU) && (this._setActivatedItems([...XU, UU]), this._stampActivationSession(), !0)
        }
        _deactivateItems(UU) {
          const XU = new Set(UU);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((UU => !XU.has(UU)));
          const zU = this._getRawPersistedActivatedIds(),
            cU = zU.filter((UU => !XU.has(UU)));
          cU.length !== zU.length && (this._setActivatedItems(cU), 0 === cU.length && this._clearActivationSession()), this._clearActivationTimestamps(UU), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var UU;
            null === (UU = this._onActivationChanged) || void 0 === UU || UU.call(this)
          } catch (UU) {
            this._getLogger().error("Error while handling activated items change", UU)
          }
        }
        _getRawActivationTimestamps() {
          var UU;
          const XU = this._getActivationTimestampsKey();
          if (!XU) return {};
          const zU = null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU ? void 0 : UU.props[XU];
          return zU && "object" == typeof zU ? zU : {}
        }
        _recordActivationTimestamp(UU) {
          if (!this._getActivationTimestampsKey()) return;
          const XU = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(ky(ky({}, XU), {}, {
            [UU]: Date.now()
          }))
        }
        _clearActivationTimestamps(UU) {
          if (!this._getActivationTimestampsKey()) return;
          const XU = this._getRawActivationTimestamps(),
            zU = {};
          let cU = !1;
          for (const [yU, QU] of Object.entries(XU)) UU.includes(yU) ? cU = !0 : zU[yU] = QU;
          cU && (Rz(zU) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(zU))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(UU) {
          if (!this._getPersistedActivatedIds().includes(UU)) return;
          const XU = this._getRawActivationTimestamps()[UU];
          return Cz(XU) ? XU : void 0
        }
        _getRawPersistedActivatedIds() {
          var UU;
          const XU = this._getActivatedKey();
          return (null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU ? void 0 : UU.props[XU]) || []
        }
        _getPersistedActivatedIds() {
          var UU, XU, zU;
          const cU = this._getRawPersistedActivatedIds();
          if (0 === cU.length) return [];
          const yU = null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU ? void 0 : UU.props[this._getActivatedSessionKey()],
            QU = null === (XU = this._instance) || void 0 === XU || null === (zU = XU.get_session_id) || void 0 === zU ? void 0 : zU.call(XU);
          return QU && yU === QU ? cU : []
        }
        _stampActivationSession() {
          var UU, XU;
          const zU = null === (UU = this._instance) || void 0 === UU || null === (XU = UU.get_session_id) || void 0 === XU ? void 0 : XU.call(UU);
          zU && this._setActivatedSession(zU)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(UU) {
          var XU;
          const zU = null === (XU = this._instance) || void 0 === XU || null === (XU = XU.persistence) || void 0 === XU ? void 0 : XU.props[this._getActivatedSessionKey()];
          if (zU && zU !== UU) {
            const UU = this._getRawPersistedActivatedIds(),
              XU = this._getRawActivationTimestamps();
            UU.length > 0 && (this._setActivatedItems([]), UU.filter((UU => Cz(XU[UU]))).forEach((UU => this._cancelPendingItem(UU)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), UU.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((UU => !this._isItemPermanentlyIneligible(UU)))
        }
        dispose() {
          var UU, XU, zU;
          null === (UU = this._sessionIdUnsubscribe) || void 0 === UU || UU.call(this), this._sessionIdUnsubscribe = void 0, null === (XU = this._captureHookUnsubscribe) || void 0 === XU || XU.call(this), this._captureHookUnsubscribe = void 0, null === (zU = this._actionMatcher) || void 0 === zU || zU.dispose(), this._actionMatcher = void 0
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
      CN = class extends eN {
        constructor(UU, XU) {
          super(UU, XU)
        }
        _getActivatedKey() {
          return oX
        }
        _getActivatedSessionKey() {
          return DX
        }
        _getActivationTimestampsKey() {
          return EX
        }
        _writeActivationTimestamps(UU) {
          var XU;
          null === (XU = this._instance) || void 0 === XU || null === (XU = XU.persistence) || void 0 === XU || XU.register({
            $surveys_activated_timestamps: UU
          })
        }
        _clearActivationTimestampsStore() {
          var UU;
          null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU || UU.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(UU) {
          var XU;
          let zU;
          this._getItems((XU => {
            zU = XU.find((XU => XU.id === UU))
          }));
          const cU = null == zU || null === (XU = zU.appearance) || void 0 === XU ? void 0 : XU.surveyPopupDelaySeconds;
          return Cz(cU) && cU > 0
        }
        _getShownEventName() {
          return PD
        }
        _getItems(UU) {
          var XU;
          null === (XU = this._instance) || void 0 === XU || XU.getSurveys(UU)
        }
        _cancelPendingItem(UU) {
          var XU;
          null === (XU = this._instance) || void 0 === XU || XU.cancelPendingSurvey(UU)
        }
        _getLogger() {
          return YY
        }
        _setActivatedItems(UU) {
          var XU;
          null === (XU = this._instance) || void 0 === XU || null === (XU = XU.persistence) || void 0 === XU || XU.register({
            $surveys_activated: UU
          })
        }
        _setActivatedSession(UU) {
          var XU;
          null === (XU = this._instance) || void 0 === XU || null === (XU = XU.persistence) || void 0 === XU || XU.register({
            $surveys_activated_session: UU
          })
        }
        _clearActivatedSession() {
          var UU;
          null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU || UU.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(UU, XU, zU) {
          var cU;
          if (UU === dD && !1 === (null == zU || null === (cU = zU.properties) || void 0 === cU ? void 0 : cU.$survey_completed)) return "ignore";
          let yU;
          return this._getItems((UU => {
            yU = UU.find((UU => UU.id === XU))
          })), !yU || function(UU) {
            var XU;
            return UY(UU) && !!(null === (XU = UU.conditions) || void 0 === XU || null === (XU = XU.events) || void 0 === XU ? void 0 : XU.repeatedActivation) || "always" === UU.schedule
          }(yU) ? UU === PD ? "consume" : "ignore" : UU === PD ? "persist" : UU === WD || UU === dD ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      wN = class {
        constructor(UU) {
          this._instance = UU
        }
        initialize() {}
        get(UU) {
          if ("string" == typeof UU) return this._instance.get_property(UU);
          const XU = {};
          for (const zU of UU) {
            const UU = this._instance.get_property(zU);
            Pz(UU) || (XU[zU] = UU)
          }
          return XU
        }
        set(UU, XU) {
          this._instance.register("string" == typeof UU ? {
            [UU]: XU
          } : UU)
        }
        remove(UU) {
          "string" != typeof UU ? UU.forEach((UU => this._instance.unregister(UU))) : this._instance.unregister(UU)
        }
      },
      qN = class {
        constructor(UU) {
          this._instance = UU
        }
        get() {
          const UU = this._instance.config;
          return {
            disableSurveys: UU.disable_surveys,
            cookielessMode: !!UU.cookieless_mode,
            advancedEnableSurveys: UU.advanced_enable_surveys,
            requestTimeoutMs: UU.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const UU = null == Fz ? void 0 : Fz.__PosthogExtensions__;
          if (!UU) return;
          const {
            generateSurveys: XU,
            loadExternalDependency: zU
          } = UU;
          return {
            generateSurveys: XU ? UU => XU(this._instance, UU) : void 0,
            loadExternalDependency: zU ? UU => zU(this._instance, "surveys", UU) : void 0
          }
        }
        createEventReceiver(UU) {
          return new CN(this._instance, UU)
        }
        onMatchingConditionsChanged(UU) {
          const XU = this._instance._addCaptureHook((XU => {
              "$pageview" !== XU && XU !== PD && XU !== WD && XU !== dD || UU()
            })),
            zU = () => UU();
          JA(KX, "PHSurveyShown", zU);
          let cU = !1;
          const yU = this._instance.onFeatureFlags((() => {
            cU && UU()
          }));
          return cU = !0, () => {
            cU = !1, XU(), yU(), null == KX || KX.removeEventListener("PHSurveyShown", zU)
          }
        }
      };
    const ON = (null == KX ? void 0 : KX.location) ? Vo(KX.location.hash, "__posthog") || Vo(location.hash, "state") : null,
      SN = "_postHogToolbarParams",
      rN = iA("[Toolbar]"),
      uN = iA("[FeatureFlags]"),
      fN = iA("[FeatureFlags]", {
        debugEnabled: !0
      }),
      iN = "\" failed. Feature flags didn't load in time.",
      HN = [502, 504],
      MN = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      vN = "connection_error",
      VN = UU => {
        const XU = {};
        for (let zU = 0; UU.length > zU; zU++) XU[UU[zU]] = !0;
        return XU
      },
      sN = UU => {
        const XU = {};
        for (const [zU, cU] of VA(UU || {})) cU && (XU[zU] = cU);
        return XU
      };
    var nN = class {
      constructor(UU) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = uN, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const UU = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, UU && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var UU, XU;
          const zU = this._refreshIntervalMs,
            cU = null !== (UU = this._dueRefreshIntervalMs) && void 0 !== UU ? UU : zU;
          Pz(zU) || Pz(cU) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (XU = this._lastRefreshAt) && void 0 !== XU ? XU : 0) < cU || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? zU : Math.min(2 * cU, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var UU;
          "visible" === (null === (UU = this._document) || void 0 === UU ? void 0 : UU.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = UU
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(UU) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (UU) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = UU, this._logger = UU.logger.createLogger("[FeatureFlags]"), ZN(UU.kv.initialize(), (() => {
          this._initializingClient === UU && (this._initializingClient = void 0, this._client = UU, this._finishSetup(UU))
        }))
      }
      _finishSetup(UU) {
        var XU;
        if (this._client === UU) return this._window && JA(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = UU.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (XU = this._crossTabPersistence) || void 0 === XU ? void 0 : XU.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var UU;
        const XU = this._config.refreshIntervalMs,
          zU = !this._config.remoteRequestsDisabled && this._document && !Pz(XU) && XU > 0 ? XU : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = zU), zU !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), Pz(zU) || (this._refreshIntervalMs = zU, this._dueRefreshIntervalMs = zU, this._scheduleNextRefresh(), (null === (UU = this._document) || void 0 === UU ? void 0 : UU.addEventListener) && (JA(this._document, ZU, this._onVisibilityChange), HA(MN, (UU => {
          JA(this._document, UU, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        Pz(this._refreshIntervalMs) || (Pz(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var UU, XU;
        Pz(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (UU = this._document) || void 0 === UU || null === (XU = UU.removeEventListener) || void 0 === XU || XU.call(UU, "visibilitychange", this._onVisibilityChange), HA(MN, (UU => {
          var XU, zU;
          null === (XU = this._document) || void 0 === XU || null === (zU = XU.removeEventListener) || void 0 === zU || zU.call(XU, UU, this._onUserInteraction, {
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
        var UU, XU, zU;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "QU"), this._settleReloads(this._activeReloads, "QU"), this._client && (this._clearDebouncer(), null === (UU = this._dynamicProperties) || void 0 === UU || UU.dispose(), this._dynamicProperties = void 0, null === (XU = this._crossTabPersistenceUnsubscribe) || void 0 === XU || XU.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (zU = this._window) || void 0 === zU || zU.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(UU) {
        var XU;
        return this._bootstrapState && UU in this._bootstrapState ? this._bootstrapState[UU] : null === (XU = this._client) || void 0 === XU ? void 0 : XU.kv.get(UU)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var UU;
        return !Pz(null === (UU = this._client) || void 0 === UU ? void 0 : UU.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(UU) {
        this._persist((() => {
          var XU;
          return null === (XU = this._client) || void 0 === XU ? void 0 : XU.kv.set(UU)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(UU, XU, zU) {
        if (!this._crossTabPersistence || !UU.$enabled_feature_flags) return;
        const cU = this._prop("$enabled_feature_flags") || {},
          yU = UU.$enabled_feature_flags || {},
          QU = XU.flags || XU.featureFlags,
          AU = XU.flags ? Object.entries(XU.flags).filter((UU => {
            let [, XU] = UU;
            return !(null == XU ? void 0 : XU.failed)
          })).map((UU => {
            let [XU] = UU;
            return XU
          })) : [],
          DU = !!XU.errorsWhileComputingFlags && !!XU.flags,
          pU = DU ? AU : zU && !Gz(QU) ? Object.keys(QU || {}) : Array.from(new Set([...Object.keys(cU), ...Object.keys(yU)])),
          aU = this._prop("$feature_flag_payloads") || {},
          tU = UU.$feature_flag_payloads || {},
          gU = DU || zU ? pU : Array.from(new Set([...Object.keys(aU), ...Object.keys(tU)])),
          GU = !DU && !zU,
          BU = !!GU || pU,
          ZU = !!GU || gU,
          RU = {
            [FU]: BU,
            [IU]: BU,
            [kU]: ZU
          };
        UU.$feature_flag_details && (RU[oU] = BU);
        for (const FU of [YU, EU, NU]) Pz(UU[FU]) || (RU[FU] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(RU)
      }
      _remove(UU) {
        this._persist((() => {
          var XU;
          return null === (XU = this._client) || void 0 === XU ? void 0 : XU.kv.remove(UU)
        }))
      }
      _persist(UU) {
        try {
          UU()
        } catch (UU) {
          this._logger.error("Failed to update feature flag persistence", UU)
        }
      }
      _rebuildEventProperties() {
        const UU = {};
        for (const cU of [FU, kU, YU, GU]) {
          const XU = this._prop(cU);
          Pz(XU) || (UU[cU] = XU)
        }
        this._baseEventProperties = UU;
        const XU = ky({}, UU),
          zU = this._prop(IU);
        if (zU)
          for (const [cU, yU] of Object.entries(zU)) XU[`$feature/${cU}`] = yU;
        this._eventPropertiesWithFlagValues = XU
      }
      _isCacheStale() {
        const UU = this._config.cacheTtlMs;
        if (!UU || 0 >= UU) return !1;
        const XU = this._prop(EU);
        return "number" != typeof XU || Date.now() - XU > UU
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const UU = this._config.evaluationContexts;
        return (null == UU ? void 0 : UU.length) ? UU.filter((UU => {
          const XU = UU && "string" == typeof UU && UU.trim().length > 0;
          return XU || this._logger.error("Invalid evaluation context found:", UU, "Expected non-empty string"), XU
        })) : []
      }
      _getValidFlagKeys() {
        const UU = this._config.flagKeys;
        if (!Pz(UU)) return UU.filter((UU => {
          const XU = UU && "string" == typeof UU && UU.trim().length > 0;
          return XU || this._logger.error("Invalid flag key found:", UU, "Expected non-empty string"), XU
        }))
      }
      initialize() {
        var UU, XU;
        const zU = this._config,
          cU = null !== (UU = null === (XU = zU.bootstrap) || void 0 === XU ? void 0 : XU.featureFlags) && void 0 !== UU ? UU : {};
        if (Object.keys(cU).length) {
          var yU, QU;
          const UU = null !== (yU = null === (QU = zU.bootstrap) || void 0 === QU ? void 0 : QU.featureFlagPayloads) && void 0 !== yU ? yU : {},
            XU = Object.keys(cU).filter((UU => !Pz(cU[UU]))).reduce(((UU, XU) => (UU[XU] = cU[XU], UU)), {}),
            AU = Object.keys(UU).filter((UU => XU[UU])).reduce(((XU, zU) => (XU[zU] = UU[zU], XU)), {});
          return this._receivedFeatureFlags({
            featureFlags: XU,
            featureFlagPayloads: AU
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(UU, XU, zU) {
        var cU, yU;
        const QU = (null == zU ? void 0 : zU.merge) && null !== (cU = this._prop("$enabled_feature_flags")) && void 0 !== cU ? cU : {},
          AU = (null == zU ? void 0 : zU.merge) && null !== (yU = this._prop("$feature_flag_payloads")) && void 0 !== yU ? yU : {},
          FU = ky(ky({}, QU), UU),
          oU = ky(ky({}, AU), XU),
          DU = {};
        for (const [EU, YU] of Object.entries(FU)) DU[EU] = {
          key: EU,
          enabled: IQ(YU),
          variant: pQ(YU),
          reason: void 0,
          metadata: Pz(null == oU ? void 0 : oU[EU]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: oU[EU]
          }
        };
        this._receivedFeatureFlags({
          flags: DU
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const UU = this._prop(oU),
          XU = this._prop(GU),
          zU = this._prop(BU);
        if (!zU && !XU) return UU || {};
        const cU = vA({}, UU || {}),
          yU = [...new Set([...Object.keys(zU || {}), ...Object.keys(XU || {})])];
        for (const FU of yU) {
          var QU, AU;
          const UU = cU[FU],
            yU = null == XU ? void 0 : XU[FU],
            oU = Pz(yU) ? null !== (QU = null == UU ? void 0 : UU.enabled) && void 0 !== QU && QU : !!yU,
            DU = Pz(yU) ? null == UU ? void 0 : UU.variant : "string" == typeof yU ? yU : void 0,
            EU = null == zU ? void 0 : zU[FU],
            YU = ky(ky({}, UU), {}, {
              enabled: oU,
              variant: oU ? null != DU ? DU : null == UU ? void 0 : UU.variant : void 0
            });
          oU !== (null == UU ? void 0 : UU.enabled) && (YU.original_enabled = null == UU ? void 0 : UU.enabled), DU !== (null == UU ? void 0 : UU.variant) && (YU.original_variant = null == UU ? void 0 : UU.variant), EU && (YU.metadata = ky(ky({}, null == UU ? void 0 : UU.metadata), {}, {
            payload: EU,
            original_payload: null == UU || null === (AU = UU.metadata) || void 0 === AU ? void 0 : AU.payload
          })), cU[FU] = YU
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: UU,
          overriddenPayloads: zU,
          finalDetails: cU
        }), this._override_warning = !0), cU
      }
      getAllFeatureFlags() {
        const UU = this.getFlagVariants(),
          XU = this.getFlagPayloads();
        return Object.keys(UU).map((zU => {
          const cU = UU[zU];
          return {
            key: zU,
            enabled: IQ(cU),
            variant: pQ(cU),
            payload: NQ(XU[zU])
          }
        }))
      }
      getFlagVariants() {
        const UU = this._prop(IU),
          XU = this._prop(GU);
        if (!XU) return UU || {};
        const zU = vA({}, UU || {}),
          cU = Object.keys(XU);
        for (let yU = 0; cU.length > yU; yU++) zU[cU[yU]] = XU[cU[yU]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: UU,
          overriddenFlags: XU,
          finalFlags: zU
        }), this._override_warning = !0), zU
      }
      getFlagPayloads() {
        const UU = this._prop(kU),
          XU = this._prop(BU);
        if (!XU) return UU || {};
        const zU = vA({}, UU || {}),
          cU = Object.keys(XU);
        for (let yU = 0; cU.length > yU; yU++) zU[cU[yU]] = XU[cU[yU]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: UU,
          overriddenPayloads: XU,
          finalPayloads: zU
        }), this._override_warning = !0), zU
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((UU => {
          try {
            UU()
          } catch (UU) {
            this._logger.error("Error while running feature flags reloading callback", UU)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((UU => {
          this._pendingReloads.add(UU), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(UU, XU) {
        UU.forEach((UU => UU({
          status: XU
        }))), UU.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(UU) {
        return this._reloadingHandlers.push(UU), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((XU => XU !== UU))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(UU) {
        this.$anon_distinct_id = UU
      }
      setReloadingPaused(UU) {
        this._reloadingDisabled = UU
      }
      resetFlagCallReported() {
        this._remove(tU)
      }
      _callFlagsEndpoint(UU) {
        var XU;
        this._clearDebouncer();
        const zU = this._client;
        if (!zU || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const cU = {
          token: zU.projectToken,
          distinct_id: zU.distinctId,
          groups: zU.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: ky(ky(ky({}, zU.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: zU.library.name,
            $lib_version: zU.library.version
          }),
          group_properties: this._prop(pU),
          timezone: So()
        };
        Pz(zU.deviceId) || (cU.$device_id = zU.deviceId), ((null == UU ? void 0 : UU.disableFlags) || this._config.featureFlagsDisabled) && (cU.disable_flags = !0);
        const yU = this._getValidEvaluationEnvironments();
        yU.length && (cU.evaluation_contexts = yU);
        const QU = this._getValidFlagKeys();
        Pz(QU) || (cU.flag_keys = QU);
        const AU = this._config.onlyEvaluateSurveyFeatureFlags,
          FU = "/flags/?v=2" + (AU ? "&only_evaluate_survey_feature_flags=true" : ""),
          oU = this._requestGeneration,
          EU = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = EU, this._requestInFlight = !0;
        const YU = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          NU = UU => {
            var XU, zU;
            const yU = null !== (XU = UU.json) && void 0 !== XU ? XU : {},
              QU = 200 !== UU.statusCode;
            if (this._requestInFlight = !1, oU !== this._requestGeneration) return void YU();
            if (this._trackStatusZeroReachability(UU.statusCode), QU || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), cU.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(EU, "skipped");
            this._flagsLoadedFromRemote = !QU;
            const FU = [];
            UU.error ? FU.push(UU.error instanceof Error && "AbortError" === UU.error.name ? "timeout" : UU.error instanceof Error ? vN : "unknown_error") : 200 !== UU.statusCode && FU.push(`api_error_${UU.statusCode}`), yU.errorsWhileComputingFlags && FU.push("errors_while_computing_flags");
            const NU = !!(null === (zU = yU.quotaLimited) || void 0 === zU ? void 0 : zU.includes("feature_flags"));
            NU && FU.push("quota_limited"), this._set({
              [DU]: FU
            }), NU ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : cU.disable_flags || this._receivedFeatureFlags(yU, QU, {
              partialResponse: AU
            }), this._settleReloads(EU, cU.disable_flags ? "skipped" : FU.length || !yU.flags && !yU.featureFlags ? "error" : "loaded"), YU()
          },
          IU = UU => {
            this._requestInFlight = !1, oU === this._requestGeneration ? (this._set({
              [DU]: [vN]
            }), this._logger.error("Feature flag request failed", UU), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(EU, "error"), YU()) : YU()
          };
        let aU = null !== (XU = this._config.requestMaxRetries) && void 0 !== XU ? XU : 1;
        const tU = () => aU > 0 && oU === this._requestGeneration,
          gU = () => {
            if (oU !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(EU, "skipped"), void YU();
            try {
              zU.sendRequest(FU, {
                target: "flags",
                method: "POST",
                body: cU,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((UU => {
                if ((UU => HN.includes(UU.statusCode) || (UU => 0 === UU.statusCode && UU.error instanceof Error && "AbortError" === UU.error.name)(UU))(UU) && tU()) return aU--, void setTimeout(gU, 500);
                NU(UU)
              })).catch(IU)
            } catch (UU) {
              IU(UU)
            }
          };
        gU()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return uo(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(UU) {
        this._consecutiveStatusZeroFailures = fo(UU, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var zU;
        if (XU.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + UU + iN);
        if (this._checkAndTriggerStaleRefresh()) return;
        const cU = this.getFeatureFlagResult(UU, XU);
        return null !== (zU = null == cU ? void 0 : cU.variant) && void 0 !== zU ? zU : null == cU ? void 0 : cU.enabled
      }
      getFeatureFlagDetails(UU) {
        return this.getFlagsWithDetails()[UU]
      }
      getFeatureFlagPayload(UU) {
        const XU = this.getFeatureFlagResult(UU, {
          send_event: !1
        });
        return null == XU ? void 0 : XU.payload
      }
      getFeatureFlagResult(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (XU.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + UU + iN);
        if (this._checkAndTriggerStaleRefresh()) return;
        const zU = this.getFlagVariants(),
          cU = UU in zU,
          yU = zU[UU],
          QU = this.getFlagPayloads()[UU],
          AU = String(yU),
          FU = this._prop("$feature_flag_request_id") || void 0,
          oU = this._prop("$feature_flag_evaluated_at") || void 0;
        let DU, EU = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var YU;
          const UU = null === (YU = this._client) || void 0 === YU || null === (YU = YU.session) || void 0 === YU ? void 0 : YU.sessionId,
            XU = this._prop(gU);
          UU && UU !== XU && (EU = {}, DU = UU)
        }
        if (!XU.send_event && "send_event" in XU) DU && this._set({
          [tU]: EU,
          [gU]: DU
        });
        else if (UU in EU && EU[UU].includes(AU)) DU && this._set({
          [tU]: EU,
          [gU]: DU
        });
        else {
          var NU, IU, pU, aU, kU, GU, BU, ZU, RU, PU, WU, dU, LU;
          Gz(EU[UU]) ? EU[UU].push(AU) : EU[UU] = [AU], this._set(ky({
            [tU]: EU
          }, DU ? {
            [gU]: DU
          } : {}));
          const XU = this.getFeatureFlagDetails(UU),
            zU = [...null !== (NU = this._prop("$feature_flag_errors")) && void 0 !== NU ? NU : []];
          Pz(yU) && zU.push("flag_missing");
          const cU = {
            $feature_flag: UU,
            $feature_flag_response: yU,
            $feature_flag_payload: null != QU ? QU : null,
            $feature_flag_request_id: FU,
            $feature_flag_evaluated_at: oU,
            $feature_flag_bootstrapped_response: null !== (IU = null === (pU = this._config.bootstrap) || void 0 === pU || null === (pU = pU.featureFlags) || void 0 === pU ? void 0 : pU[UU]) && void 0 !== IU ? IU : null,
            $feature_flag_bootstrapped_payload: null !== (aU = null === (kU = this._config.bootstrap) || void 0 === kU || null === (kU = kU.featureFlagPayloads) || void 0 === kU ? void 0 : kU[UU]) && void 0 !== aU ? aU : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          Pz(null == XU || null === (GU = XU.metadata) || void 0 === GU ? void 0 : GU.has_experiment) || (cU.$feature_flag_has_experiment = XU.metadata.has_experiment), Pz(null == XU || null === (BU = XU.metadata) || void 0 === BU ? void 0 : BU.version) || (cU.$feature_flag_version = XU.metadata.version);
          const YU = null !== (ZU = null == XU || null === (RU = XU.reason) || void 0 === RU ? void 0 : RU.description) && void 0 !== ZU ? ZU : null == XU || null === (PU = XU.reason) || void 0 === PU ? void 0 : PU.code;
          YU && (cU.$feature_flag_reason = YU), (null == XU || null === (WU = XU.metadata) || void 0 === WU ? void 0 : WU.id) && (cU.$feature_flag_id = XU.metadata.id), Pz(null == XU ? void 0 : XU.original_variant) && Pz(null == XU ? void 0 : XU.original_enabled) || (cU.$feature_flag_original_response = Pz(XU.original_variant) ? XU.original_enabled : XU.original_variant), (null == XU || null === (dU = XU.metadata) || void 0 === dU ? void 0 : dU.original_payload) && (cU.$feature_flag_original_payload = null == XU || null === (LU = XU.metadata) || void 0 === LU ? void 0 : LU.original_payload), zU.length && (cU.$feature_flag_error = zU.join(",")), this._captureFeatureFlagCalled(cU)
        }
        return cU ? {
          key: UU,
          enabled: !!yU,
          variant: "string" == typeof yU ? yU : void 0,
          payload: NQ(QU)
        } : void 0
      }
      _captureFeatureFlagCalled(UU) {
        try {
          var XU;
          null === (XU = this._client) || void 0 === XU || XU.capture("$feature_flag_called", UU)
        } catch (UU) {
          this._logger.error("Failed to capture feature flag call", UU)
        }
      }
      getRemoteConfigPayload(UU, XU) {
        this._getRemoteConfigPayload(UU, XU)
      }
      _getRemoteConfigPayload(UU, XU) {
        var zU = this;
        return nz((function*() {
          const cU = zU._client;
          if (!cU) return;
          const yU = {
              distinct_id: cU.distinctId,
              token: cU.projectToken,
              person_properties: {
                $lib: cU.library.name,
                $lib_version: cU.library.version
              }
            },
            QU = zU._getValidEvaluationEnvironments();
          QU.length && (yU.evaluation_contexts = QU);
          const AU = zU._getValidFlagKeys();
          let FU;
          Pz(AU) || (yU.flag_keys = AU);
          try {
            var oU;
            const XU = null === (oU = (yield cU.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: yU,
              compression: zU._config.compression,
              sentAt: "body",
              timeoutMs: zU._config.requestTimeoutMs
            })).json) || void 0 === oU ? void 0 : oU.featureFlagPayloads;
            FU = (null == XU ? void 0 : XU[UU]) || void 0
          } catch (UU) {
            return void zU._logger.error("Remote config feature flag request failed", UU)
          }
          try {
            XU(FU)
          } catch (UU) {
            zU._logger.error("Remote config feature flag callback failed", UU)
          }
        }))()
      }
      isFeatureEnabled(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (XU.fresh && !this._flagsLoadedFromRemote) return XU.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + UU + iN), XU.defaultValue;
        const zU = this.getFeatureFlag(UU, XU);
        return Pz(zU) ? XU.defaultValue : !!zU
      }
      addFeatureFlagsHandler(UU) {
        this.featureFlagEventHandlers.push(UU)
      }
      removeFeatureFlagsHandler(UU) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((XU => XU !== UU))
      }
      receivedFeatureFlags(UU, XU, zU) {
        this._receivedFeatureFlags(UU, XU, zU)
      }
      _receivedFeatureFlags(UU, XU, zU) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const cU = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            yU = arguments.length > 4 ? arguments[4] : void 0,
            QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : uN;
          const AU = ((UU, XU) => {
              const zU = UU.flags;
              if (zU) {
                const XU = Object.fromEntries(Object.keys(zU).map((UU => {
                    var XU;
                    return [UU, null !== (XU = zU[UU].variant) && void 0 !== XU ? XU : zU[UU].enabled]
                  }))),
                  cU = Object.fromEntries(Object.keys(zU).filter((UU => zU[UU].enabled)).filter((UU => {
                    var XU;
                    return !Pz(null === (XU = zU[UU].metadata) || void 0 === XU ? void 0 : XU.payload)
                  })).map((UU => {
                    var XU;
                    return [UU, null === (XU = zU[UU].metadata) || void 0 === XU ? void 0 : XU.payload]
                  })));
                return ky(ky({}, UU), {}, {
                  featureFlags: XU,
                  featureFlagPayloads: cU
                })
              }
              return UU.featureFlags && XU.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), UU
            })(UU, QU),
            DU = AU.flags,
            pU = AU.featureFlags,
            aU = AU.featureFlagPayloads;
          if (!pU) return;
          const tU = UU.requestId,
            gU = UU.evaluatedAt;
          if (Gz(pU)) {
            QU.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const UU = {};
            if (pU)
              for (let XU = 0; pU.length > XU; XU++) UU[pU[XU]] = !0;
            return {
              [FU]: pU,
              [IU]: UU,
              [NU]: !1
            }
          }
          let GU = pU,
            BU = aU,
            ZU = DU;
          if (null == yU ? void 0 : yU.partialResponse) {
            const UU = Object.keys(GU),
              yU = BU || {};
            GU = ky(ky({}, XU), GU), BU = ky(ky({}, zU), yU), UU.forEach((UU => {
              UU in yU || null == BU || delete BU[UU]
            })), ZU = ky(ky({}, cU), ZU)
          } else if (UU.errorsWhileComputingFlags)
            if (DU) {
              const UU = new Set(Object.keys(DU).filter((UU => {
                var XU;
                return !(null === (XU = DU[UU]) || void 0 === XU ? void 0 : XU.failed)
              })));
              GU = ky(ky({}, XU), Object.fromEntries(Object.entries(GU).filter((XU => {
                let [zU] = XU;
                return UU.has(zU)
              }))));
              const yU = Object.fromEntries(Object.entries(BU || {}).filter((XU => {
                let [zU] = XU;
                return UU.has(zU)
              })));
              BU = ky(ky({}, zU), yU), UU.forEach((UU => {
                UU in yU || null == BU || delete BU[UU]
              })), ZU = ky(ky({}, cU), Object.fromEntries(Object.entries(ZU || {}).filter((XU => {
                let [zU] = XU;
                return UU.has(zU)
              }))))
            } else GU = ky(ky({}, XU), GU), BU = ky(ky({}, zU), BU), ZU = ky(ky({}, cU), ZU);
          return ky(ky({
            [FU]: Object.keys(sN(GU)),
            [IU]: GU || {},
            [kU]: BU || {},
            [oU]: ZU || {},
            [NU]: !0 === UU.minimalFlagCalledEvents
          }, tU ? {
            [YU]: tU
          } : {}), gU ? {
            [EU]: gU
          } : {})
        }(UU, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), zU, this._logger);
        if (cU)
          if (!1 === (null == zU ? void 0 : zU.persist)) {
            const UU = !Pz(this._client.kv.get(IU));
            this._bootstrapState = cU, UU || this._set(cU)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(cU, UU, !!(null == zU ? void 0 : zU.partialResponse)), this._set(cU);
        else XU && this._fallBackToPersistedFlags();
        XU || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(XU)
      }
      override(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: UU,
          suppressWarning: XU
        })
      }
      overrideFeatureFlags(UU) {
        this._overrideFeatureFlags(UU)
      }
      _overrideFeatureFlags(UU) {
        if (this._client) {
          if (!1 === UU) return this._remove([GU, BU]), this._fireFeatureFlagsCallbacks(), void fN.info("All overrides cleared");
          if (Gz(UU)) return this._set({
            [GU]: VN(UU)
          }), this._fireFeatureFlagsCallbacks(), void fN.info("Flag overrides set", {
            flags: UU
          });
          if (UU && "object" == typeof UU && ("flags" in UU || "payloads" in UU)) {
            var XU;
            const zU = UU;
            this._override_warning = Boolean(null !== (XU = zU.suppressWarning) && void 0 !== XU && XU);
            const cU = {},
              yU = zU.flags,
              QU = zU.payloads;
            return yU && (cU[GU] = Gz(yU) ? VN(yU) : yU), QU && (cU[BU] = QU), Object.keys(cU).length && this._set(cU), !1 === yU && !1 === QU ? this._remove([GU, BU]) : !1 === yU ? this._remove(GU) : !1 === QU && this._remove(BU), this._fireFeatureFlagsCallbacks(), !1 === yU ? fN.info("Flag overrides cleared") : yU && fN.info("Flag overrides set", {
              flags: yU
            }), void(!1 === QU ? fN.info("Payload overrides cleared") : QU && fN.info("Payload overrides set", {
              payloads: QU
            }))
          }
          if (UU && "object" == typeof UU) return this._set({
            [GU]: UU
          }), this._fireFeatureFlagsCallbacks(), void fN.info("Flag overrides set", {
            flags: UU
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: UU
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(UU) {
        if (this.addFeatureFlagsHandler(UU), this._hasLoadedFlags) {
          const {
            flags: XU,
            flagVariants: zU
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            UU(XU, zU)
          } catch (UU) {
            this._logger.error("Error while running feature flags callback", UU)
          }
        }
        return () => this.removeFeatureFlagsHandler(UU)
      }
      updateEarlyAccessFeatureEnrollment(UU, XU, zU) {
        var cU;
        const yU = (this._prop("$early_access_features") || []).find((XU => XU.flagKey === UU)),
          QU = {
            [`$feature_enrollment/${UU}`]: XU
          },
          AU = {
            $feature_flag: UU,
            $feature_enrollment: XU,
            $set: QU
          };
        yU && (AU.$early_access_feature_name = yU.name), zU && (AU.$feature_enrollment_stage = zU);
        const oU = ky(ky({}, this.getFlagVariants()), {}, {
          [UU]: XU
        });
        null === (cU = this._crossTabPersistence) || void 0 === cU || cU.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [UU],
          $enabled_feature_flags: [UU],
          $stored_person_properties: Object.keys(QU)
        }), this._set({
          [FU]: Object.keys(sN(oU)),
          [IU]: oU,
          [aU]: ky(ky({}, this._prop("$stored_person_properties") || {}), QU)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var DU;
          null === (DU = this._client) || void 0 === DU || DU.capture("$feature_enrollment_update", AU)
        } catch (UU) {
          this._logger.error("Failed to capture early access feature enrollment", UU)
        }
      }
      getEarlyAccessFeatures(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = this._prop(AU);
        !cU || XU ? this._getEarlyAccessFeatures(UU, zU) : UU(cU)
      }
      _getEarlyAccessFeatures(UU, XU) {
        var zU = this;
        return nz((function*() {
          const cU = zU._client;
          if (!cU) return;
          const yU = XU ? `&${XU.map((UU=>`stage=${UU}`)).join("&")}` : "";
          let QU;
          try {
            const UU = yield cU.sendRequest(`/api/early_access_features/?token=${cU.projectToken}${yU}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!UU.json) return;
            QU = UU.json.earlyAccessFeatures, zU._set({
              [AU]: QU
            })
          } catch (UU) {
            return void zU._logger.error("Early access feature request failed", UU)
          }
          try {
            UU(QU)
          } catch (UU) {
            zU._logger.error("Early access feature callback failed", UU)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const UU = this.getFlags(),
          XU = this.getFlagVariants();
        return {
          flags: UU.filter((UU => XU[UU])),
          flagVariants: Object.keys(XU).filter((UU => XU[UU])).reduce(((UU, zU) => (UU[zU] = XU[zU], UU)), {})
        }
      }
      _fireFeatureFlagsCallbacks(UU) {
        this._rebuildEventProperties();
        const {
          flags: XU,
          flagVariants: zU
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((cU => {
          try {
            cU(XU, zU, {
              errorsLoading: UU
            })
          } catch (UU) {
            this._logger.error("Error while running feature flags callback", UU)
          }
        }))
      }
      setPersonPropertiesForFlags(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(UU, XU)
      }
      _setPersonPropertiesForFlags(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this._prop("$stored_person_properties") || {},
          cU = (null == UU ? void 0 : UU.$set) || ((null == UU ? void 0 : UU.$set_once) ? {} : UU),
          yU = null == UU ? void 0 : UU.$set_once,
          QU = {};
        if (yU)
          for (const AU in yU)({}).hasOwnProperty.call(yU, AU) && (AU in zU || (QU[AU] = yU[AU]));
        this._set({
          [aU]: ky(ky(ky({}, zU), QU), cU)
        }), XU && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = ky({}, this._prop("$stored_person_properties") || {});
        UU.forEach((UU => {
          delete zU[UU]
        })), this._set({
          [aU]: zU
        }), XU && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(aU), UU && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this._prop("$stored_group_properties") || {},
          cU = ky({}, zU);
        for (const yU of Object.keys(UU)) cU[yU] = ky(ky({}, zU[yU]), UU[yU]);
        this._set({
          [pU]: cU
        }), XU && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(UU) {
        if (UU) {
          const XU = this._prop("$stored_group_properties") || {};
          this._set({
            [pU]: ky(ky({}, XU), {}, {
              [UU]: {}
            })
          })
        } else this._remove(pU)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "QU"), this._settleReloads(this._activeReloads, "QU"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const mN = iA("[FeatureFlags]");
    var lN = class {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(UU, XU)
      }
      update(UU, XU) {
        this._snapshot = ((UU, XU) => {
          var zU, cU, yU, QU, AU, FU, oU, DU;
          return {
            bootstrap: {
              featureFlags: null !== (zU = null === (cU = UU.bootstrap) || void 0 === cU ? void 0 : cU.featureFlags) && void 0 !== zU ? zU : void 0,
              featureFlagPayloads: null !== (yU = null === (QU = UU.bootstrap) || void 0 === QU ? void 0 : QU.featureFlagPayloads) && void 0 !== yU ? yU : void 0
            },
            remoteRequestsDisabled: XU,
            featureFlagsDisabled: !!UU.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!UU.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!UU.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: UU.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (AU = UU.remote_config_refresh_interval_ms) && void 0 !== AU ? AU : 3e5,
            idleRefreshBackoff: Pz(UU.remote_config_refresh_interval_ms),
            requestTimeoutMs: UU.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (FU = UU.feature_flag_request_max_retries) && void 0 !== FU ? FU : 1),
            compression: UU.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (oU = null !== (DU = UU.evaluation_contexts) && void 0 !== DU ? DU : UU.evaluation_environments) && void 0 !== oU ? oU : [],
            flagKeys: Gz(UU.flag_keys) ? UU.flag_keys : void 0
          }
        })(UU, XU), !UU.evaluation_environments || UU.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (mN.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), Pz(UU.flag_keys) || Gz(UU.flag_keys) || mN.error("Invalid flag_keys found:", UU.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const xN = UU => fz(UU) && ("RangeError" === UU.name && 0 === UU.message.indexOf("Maximum call stack size exceeded") || "InternalError" === UU.name && "too much recursion" === UU.message),
      JN = iA("[Error tracking]"),
      jN = "webkit-masked-url:",
      KN = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      bN = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", jN],
      TN = ["__firefox__", "__gCrWeb"],
      hN = "Refusing to render web experiment since the viewer is a likely bot",
      UI = {
        icontains: (UU, XU) => XU.toLowerCase().indexOf(UU.toLowerCase()) > -1,
        not_icontains: (UU, XU) => -1 === XU.toLowerCase().indexOf(UU.toLowerCase()),
        regex: (UU, XU) => XY(XU, UU),
        not_regex: (UU, XU) => !XY(XU, UU),
        exact: (UU, XU) => XU === UU,
        is_not: (UU, XU) => XU !== UU
      },
      XI = iA("[Conversations]"),
      zI = "Conversations not available yet.";

    function cI(UU, XU) {
      var zU, cU, yU, QU, AU, FU, oU;
      const DU = null !== (zU = null == UU ? void 0 : UU.flushIntervalMs) && void 0 !== zU ? zU : 3e3,
        EU = null !== (cU = null == UU ? void 0 : UU.maxBufferSize) && void 0 !== cU ? cU : 100,
        YU = (null == XU ? void 0 : XU.consoleCapture) ? void 0 : null !== (yU = null == UU ? void 0 : UU.maxLogsPerInterval) && void 0 !== yU ? yU : 1e3,
        NU = Pz(YU) ? Math.max(EU, 2048) : Math.max(EU, YU),
        IU = ky(ky({}, function() {
          let UU = "",
            XU = "";
          try {
            var zU;
            const cU = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              yU = null == cU || null === (zU = cU.navigator) || void 0 === zU ? void 0 : zU.userAgent;
            yU && ([UU, XU] = Kc(yU))
          } catch (UU) {}
          return function(UU, XU) {
            const zU = function(UU) {
              if (UU) return {}.hasOwnProperty.call(GA, UU) ? GA[UU] : UU
            }(UU);
            return ky(ky({}, zU ? {
              "os.name": zU
            } : {}), XU ? {
              "os.version": XU
            } : {})
          }(UU, XU)
        }()), null == UU ? void 0 : UU.resourceAttributes);
      return {
        serviceName: null !== (QU = null !== (AU = null == IU ? void 0 : IU["service.name"]) && void 0 !== AU ? AU : null == UU ? void 0 : UU.serviceName) && void 0 !== QU ? QU : null == XU ? void 0 : XU.serviceNameDefault,
        serviceVersion: null !== (FU = null == IU ? void 0 : IU["service.version"]) && void 0 !== FU ? FU : null == UU ? void 0 : UU.serviceVersion,
        environment: null !== (oU = null == IU ? void 0 : IU["deployment.environment"]) && void 0 !== oU ? oU : null == UU ? void 0 : UU.environment,
        resourceAttributes: IU,
        beforeSend: null == UU ? void 0 : UU.beforeSend,
        flushIntervalMs: DU,
        maxBufferSize: EU,
        maxQueueSize: NU,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: DU,
        maxLogsPerInterval: YU,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const yI = ["debug", "log", "warn", "error", "info"],
      QI = UU => {
        for (; null == UU ? void 0 : UU.__rrweb_original__;) UU = UU.__rrweb_original__;
        return UU
      },
      AI = "console",
      FI = "__posthogHandledLogsRequestError",
      oI = (UU, XU) => {
        const zU = UU instanceof Error ? UU : new Error(XU);
        return zU[FI] = !0, zU
      },
      DI = UU => !!UU && "object" == typeof UU && !0 === UU[FI];
    var EI = class {
      get _coreLogger() {
        var UU = this;
        return ky(ky({}, this._logger), {}, {
          error: function() {
            for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
            zU.some(DI) || UU._logger.error(...zU)
          }
        })
      }
      constructor(UU, XU) {
        var zU;
        this._configSource = UU, this._getSdkContext = XU, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = iA("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var UU, XU;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (UU = this._core) || void 0 === UU || UU.onReconnect(), null === (XU = this._consoleCore) || void 0 === XU || XU.onReconnect())
        }, this._isLogsEnabled = !!(null === (zU = UU.get()) || void 0 === zU ? void 0 : zU.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (cU) {
            this._window = void 0
          }
          this._window && (JA(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(UU, XU, zU, cU) {
        this._listenForReconnect();
        const yU = cI(this._configSource.get(), zU);
        return [new wA(this._createHost(UU, XU), yU, this._coreLogger, (() => this._getSdkContext()), (UU => UU()), void 0, cU), yU]
      }
      _getCore() {
        const UU = this._configSource.get();
        var XU;
        return this._core && this._resolvedFrom === UU || (null === (XU = this._core) || void 0 === XU || XU.reset(), this._resolvedFrom = UU, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (UU => {
          this._queue = UU
        }))), this._core
      }
      _getConsoleCore() {
        const UU = this._configSource.get();
        var XU;
        return this._consoleCore && this._consoleResolvedFrom === UU || (null === (XU = this._consoleCore) || void 0 === XU || XU.reset(), this._consoleResolvedFrom = UU, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (UU => {
          this._consoleQueue = UU
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, AI)), this._consoleCore
      }
      setup(UU) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = UU, this._logger = UU.logger.createLogger("[logs]"), ZN(UU.kv.initialize(), (() => {
          this._disposed || this._finishSetup(UU)
        }))
      }
      _finishSetup(UU) {
        var XU;
        this._listenForReconnect(), (null === (XU = this._configSource.get()) || void 0 === XU ? void 0 : XU.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && UU.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let zU = !1;
        const cU = UU.onRemoteConfig((UU => {
          var XU;
          zU = UU.ok && !0 === (null === (XU = UU.config.logs) || void 0 === XU ? void 0 : XU.captureConsoleLogs), this.onRemoteConfig(UU)
        }));
        this._disposed ? cU.dispose() : (this._remoteConfigSubscription = cU, zU || this.loadIfEnabled())
      }
      dispose() {
        var UU, XU, zU, cU, yU, QU, AU;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (UU = this._remoteConfigSubscription) || void 0 === UU || UU.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (XU = this._window) || void 0 === XU || XU.removeEventListener("online", this._onReconnect), null === (zU = this._consoleLogsDispose) || void 0 === zU || zU.call(this), this._consoleLogsDispose = void 0, null === (cU = this._core) || void 0 === cU || cU.clearQueue(), null === (yU = this._consoleCore) || void 0 === yU || yU.clearQueue(), null === (QU = this._core) || void 0 === QU || QU.reset(), null === (AU = this._consoleCore) || void 0 === AU || AU.reset())
      }
      onRemoteConfig(UU) {
        var XU, zU;
        if (this._disposed) return;
        const cU = UU.ok ? null === (XU = UU.config.logs) || void 0 === XU ? void 0 : XU.captureConsoleLogs : void 0;
        ez(cU) ? this._stopRecorderStartedByPersistedHint() : (null === (zU = this._client) || void 0 === zU || zU.kv.set(this._configSource.captureHintKey, !!cU), cU ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var UU, XU, zU, cU;
        this._stopConsoleRecorder(), null === (UU = this._core) || void 0 === UU || UU.clearQueue(), this._queue = [], null === (XU = this._core) || void 0 === XU || XU.reset(), null === (zU = this._consoleCore) || void 0 === zU || zU.clearQueue(), this._consoleQueue = [], null === (cU = this._consoleCore) || void 0 === cU || cU.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(UU) {
        !this._disposed && this._client && this._getCore().captureLog(UU)
      }
      captureConsoleLog(UU) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(UU)
      }
      captureBufferedConsoleLog(UU, XU, zU) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(UU, {
          context: XU,
          occurredAtMs: zU
        })
      }
      _onOptOut() {
        var UU;
        this._stopConsoleRecorder(), null === (UU = this._consoleCore) || void 0 === UU || UU.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var UU, XU = this;
        if (this._isRecordingConsole || !(null === (UU = this._window) || void 0 === UU ? void 0 : UU.console)) return;
        const zU = cI(this._configSource.get()).maxBufferSize;
        let cU = !0;
        this._consoleRecorderUnpatchers.push((() => {
          cU = !1
        }));
        for (const yU of yI) {
          let QU;
          try {
            QU = QI(this._window.console[yU])
          } catch (UU) {
            continue
          }
          QU && this._consoleRecorderUnpatchers.push(cN(this._window.console, yU, (UU => {
            const AU = function() {
              for (var QU = arguments.length, AU = new Array(QU), FU = 0; FU < QU; FU++) AU[FU] = arguments[FU];
              try {
                cU && XU._recordConsoleEntry(yU, AU, zU)
              } catch (yU) {}
              return UU.apply(XU._window.console, AU)
            };
            return AU.__rrweb_original__ = QU, AU
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(UU, XU, zU) {
        var cU;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== XU.length)
          if (null === (cU = this._client) || void 0 === cU ? void 0 : cU.canCapture) {
            if (zU > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: UU,
                  args: XU,
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
          for (const UU of this._consoleRecorderUnpatchers) UU();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const UU = this._consoleBuffer;
        return this._stopConsoleRecorder(), UU
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (UU, XU) => this.captureLog({
            body: UU,
            level: "trace",
            attributes: XU
          }),
          debug: (UU, XU) => this.captureLog({
            body: UU,
            level: "debug",
            attributes: XU
          }),
          info: (UU, XU) => this.captureLog({
            body: UU,
            level: "info",
            attributes: XU
          }),
          warn: (UU, XU) => this.captureLog({
            body: UU,
            level: "warn",
            attributes: XU
          }),
          error: (UU, XU) => this.captureLog({
            body: UU,
            level: "error",
            attributes: XU
          }),
          fatal: (UU, XU) => this.captureLog({
            body: UU,
            level: "fatal",
            attributes: XU
          })
        }), this._capture_logger
      }
      flushLogs(UU) {
        this._client && (UU ? this._flushViaTransport(UU) : (this._core && this._core.flush().catch((UU => this._logFlushError(UU))), this._consoleCore && this._consoleCore.flush().catch((UU => this._logFlushError(UU)))))
      }
      flush() {
        var UU = this;
        return nz((function*() {
          var XU, zU;
          const cU = null === (XU = UU._core) || void 0 === XU ? void 0 : XU.flush().catch((XU => UU._logFlushError(XU))),
            yU = null === (zU = UU._consoleCore) || void 0 === zU ? void 0 : zU.flush().catch((XU => UU._logFlushError(XU)));
          yield cU, yield yU
        }))()
      }
      _logFlushError(UU) {
        DI(UU) || this._logger.error("PostHog logs flush failed:", UU)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const UU = this._getConsoleLoader();
        if (UU) {
          this._isLoading = !0;
          try {
            UU(((UU, XU) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (UU || !XU) this._logger.error("Could not load logs script", UU), this._stopConsoleRecorder();
                else {
                  const UU = this._takeConsoleBuffer();
                  this._consoleLogsDispose = XU.initialize(this._client), this._isLoaded = !0, UU.length > 0 && XU.replay(this._client, UU)
                }
            }))
          } catch (UU) {
            throw this._isLoading = !1, UU
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(UU, XU) {
        const zU = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !zU.canCapture
          },
          getPersistedProperty: XU => XU === oz.LogsQueue ? UU() : void 0,
          setPersistedProperty(UU, zU) {
            UU === oz.LogsQueue && XU(null != zU ? zU : [])
          },
          _sendLogsBatch: UU => this._sendLogsBatch(UU),
          getLibraryId: () => zU.library.name,
          getLibraryVersion: () => zU.library.version
        }
      }
      _sendLogsBatch(UU) {
        return new Promise((XU => {
          if (uo(this._consecutiveStatusZeroFailures, 3)) return void XU({
            kind: "fatal",
            error: oI(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let zU = !1;
          const cU = UU => {
              zU || (zU = !0, clearTimeout(yU), XU(UU))
            },
            yU = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), cU({
                kind: "retry-later",
                error: oI(void 0, "logs request timed out")
              })
            }), 9e4),
            QU = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: UU,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((UU => {
            var XU;
            const zU = UU.statusCode;
            this._trackEndpointReachability(zU, QU), zU >= 200 && 300 > zU ? cU({
              kind: "ok"
            }) : 413 === zU ? cU({
              kind: "too-large"
            }) : 0 !== zU && 408 !== zU && 429 !== zU && 500 > zU ? cU({
              kind: "fatal",
              error: new Error(`logs request failed with status ${zU}`)
            }) : 0 === zU ? (UU.error || this._logger.warn("Logs request failed before receiving an HTTP response"), cU({
              kind: "retry-later",
              error: oI(UU.error, "logs request failed before receiving an HTTP response")
            })) : cU({
              kind: "retry-later",
              error: null !== (XU = UU.error) && void 0 !== XU ? XU : new Error(`logs request failed with status ${zU}`)
            })
          }), (UU => {
            cU({
              kind: "retry-later",
              error: UU
            })
          }))
        }))
      }
      _trackEndpointReachability(UU, XU) {
        (0 !== UU || XU) && (this._consecutiveStatusZeroFailures = fo(UU, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(UU) {
        this._queue.length > 0 && this._drainQueueViaTransport(UU, this._queue, this._resolvedConfig, this._client.library.name, (UU => {
          this._queue = UU
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(UU, this._consoleQueue, this._consoleResolvedConfig, AI, (UU => {
          this._consoleQueue = UU
        }))
      }
      _drainQueueViaTransport(UU, XU, zU, cU, yU) {
        if (0 === XU.length) return;
        const QU = XU.map((UU => UU.record));
        yU([]);
        const AU = dA(QU, WA(zU, this._client.library.name, this._client.library.version), cU, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: AU,
          compression: "best-available",
          transport: UU,
          timeoutMs: 6e4
        }).catch((UU => this._logFlushError(UU)))
      }
    };
    const YI = iA("[NetworkMetrics]"),
      NI = () => {
        var UU;
        return (null == KX || null === (UU = KX.performance) || void 0 === UU ? void 0 : UU.now) ? KX.performance.now() : Date.now()
      },
      II = {
        "http:": 80,
        "https:": 443
      },
      pI = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      aI = (UU, XU) => {
        var zU;
        const cU = String(XU);
        return {
          method: String(UU).toUpperCase(),
          url: (null === (zU = Ho(cU)) || void 0 === zU ? void 0 : zU.href) || cU
        }
      },
      tI = function(UU, XU, zU, cU, yU, QU) {
        let AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var FU, oU;
          const DU = yU();
          if (!DU) return;
          const EU = zU || void 0,
            YU = NI() - cU,
            NU = Ho(XU.url);
          if (NU && "http:" !== NU.protocol && "https:" !== NU.protocol) return;
          const IU = {
              url: (null == NU ? void 0 : NU.href) || XU.url,
              method: XU.method
            },
            pU = Bz(DU.name) ? DU.name(IU) : Wz(DU.name) ? DU.name : "http.client.request.duration";
          if (!pU) return;
          const aU = AU && !EU ? void 0 : ((UU, XU) => UU ? 400 > UU ? void 0 : String(UU) : (null == XU ? void 0 : XU.name) || "_OTHER")(EU, QU),
            tU = ky(ky(ky(ky(ky({}, (UU => {
              const XU = pI.has(UU) ? UU : "_OTHER";
              return ky({
                "http.request.method": XU
              }, "_OTHER" === XU && UU !== XU ? {
                "http.request.method_original": UU
              } : {})
            })(IU.method)), NU ? (UU => {
              return {
                "server.address": UU.hostname.startsWith("[") && UU.hostname.endsWith("]") ? UU.hostname.slice(1, -1) : UU.hostname,
                "server.port": Number(UU.port) || II[UU.protocol],
                "url.scheme": UU.protocol.slice(0, -1),
                "url.template": (XU = UU.pathname, XU.split("/").map((UU => (UU => /^\d+$/.test(UU) || UU.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(UU))(UU) ? ":id" : UU)).join("/"))
              };
              var XU
            })(NU) : {}), EU ? {
              "http.response.status_code": EU
            } : {}), aU ? {
              "error.type": aU
            } : {}), null === (FU = DU.attributes) || void 0 === FU ? void 0 : FU.call(DU, IU, {
              status: EU,
              durationMs: YU
            }));
          null === (oU = UU.metrics) || void 0 === oU || oU.histogram(pU, YU, {
            unit: "ms",
            attributes: tU
          })
        } catch (UU) {
          YI.error("Failed to record network metric", UU)
        }
      },
      gI = () => {},
      kI = (UU, XU) => Bz(null == KX ? void 0 : KX.fetch) ? cN(KX, "fetch", (zU => function() {
        for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
        const AU = NI(),
          FU = zU.apply(this, yU);
        if (!XU()) return FU;
        try {
          var oU, DU, EU;
          const [zU, cU] = yU, QU = aI(null !== (oU = null !== (DU = null == cU ? void 0 : cU.method) && void 0 !== DU ? DU : null == zU ? void 0 : zU.method) && void 0 !== oU ? oU : "GET", null !== (EU = null == zU ? void 0 : zU.url) && void 0 !== EU ? EU : zU);
          return FU.then((zU => (tI(UU, QU, null == zU ? void 0 : zU.status, AU, XU, void 0, !0), zU)), (zU => {
            throw tI(UU, QU, void 0, AU, XU, zU), zU
          }))
        } catch (UU) {
          return YI.error("Failed to observe fetch", UU), FU
        }
      })) : gI,
      GI = (UU, XU) => {
        var zU;
        const cU = null == KX || null === (zU = KX.XMLHttpRequest) || void 0 === zU ? void 0 : zU.prototype;
        if (!cU) return gI;
        const yU = new WeakMap,
          QU = cN(cU, "open", (UU => function() {
            for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
            try {
              (() => GE.has(this))() || yU.set(this, aI(zU[0], zU[1]))
            } catch (UU) {
              YI.error("Failed to observe XHR open", UU)
            }
            return UU.apply(this, zU)
          })),
          AU = cN(cU, "send", (zU => function() {
            let cU;
            try {
              const zU = yU.get(this);
              if (zU && XU()) {
                const yU = NI();
                cU = () => {
                  this.removeEventListener("loadend", cU), tI(UU, zU, this.status, yU, XU)
                }, JA(this, "loadend", cU)
              }
            } catch (UU) {
              YI.error("Failed to observe XHR send", UU)
            }
            try {
              for (var QU = arguments.length, AU = new Array(QU), FU = 0; FU < QU; FU++) AU[FU] = arguments[FU];
              return zU.apply(this, AU)
            } catch (UU) {
              throw cU && this.removeEventListener("loadend", cU), UU
            }
          }));
        return () => {
          QU(), AU()
        }
      },
      BI = new WeakMap,
      ZI = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      RI = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function PI(UU) {
      if (UU) return !0 === UU ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== UU.intent,
        model: !1 !== UU.model
      }
    }

    function WI(UU, XU) {
      return {}.hasOwnProperty.call(UU, XU)
    }

    function dI(UU, XU) {
      const zU = Object.create(UU);
      return XU && Object.defineProperty(zU, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: XU
      }), zU
    }

    function LI(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!Wz(UU)) return;
      const cU = UU.trim();
      return cU ? (zU ? function(UU, XU) {
        return function(UU) {
          return UU.length >= 10240 && (eQ.test(UU) || function(UU) {
            const XU = qQ.exec(UU);
            if (!XU) return !1;
            let zU;
            try {
              zU = decodeURIComponent(UU.slice(XU[0].length))
            } catch (UU) {
              return !1
            }
            return OQ.test(zU.replace(/[\r\n]/g, ""))
          }(UU) || wQ.test(UU) && CQ.test(UU))
        }(UU) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(UU, XU, zU) {
          const cU = 4 * zU.maxStringLength;
          if (UU.length > cU) {
            const yU = XU(UU.slice(0, function(UU, XU) {
              let zU = XU;
              for (; zU > 0 && !fQ.test(UU[zU - 1]);) zU--;
              return zU
            }(UU, cU)));
            if (yU.length >= 2 * zU.maxStringLength) return yU + zU.truncationSuffix
          }
          return XU(UU)
        }(UU, (UU => function(UU) {
          return FA(UU, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(UU) {
          let XU = UU.replace(nQ, " ");
          return XU = XU.replace(mQ, LQ), XU = XU.replace(lQ, LQ), XU = XU.replace(xQ, `$1${LQ}`), XU = XU.replace(jQ, EA), XU = XU.replace(JQ, LQ), XU = XU.replace(bQ, `$1${LQ}`), XU = XU.replace(TQ, `$1${LQ}`), XU
        }(oA(UU)))), XU)
      }(cU, RI) : cU).slice(0, XU) : void 0
    }

    function eI(UU) {
      try {
        return Zz(UU) && !0 === UU.isError
      } catch (UU) {
        return !1
      }
    }
    const CI = {
        featureFlags: class extends nN {
          constructor(UU) {
            const XU = new lN(UU.config, UU._shouldDisableFlags());
            super(XU), this.name = GY, this._instance = UU, this._mutableConfigSource = XU
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(UU, XU) {
            this._mutableConfigSource.update(UU, XU), this._onConfigUpdated()
          }
        }
      },
      wI = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var UU;
            return !!(null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU ? void 0 : UU.isStarted)
          }
          get status() {
            var UU, XU;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (UU = null === (XU = this._lazyLoadedSessionRecording) || void 0 === XU ? void 0 : XU.status) && void 0 !== UU ? UU : this._recordingStatus
          }
          constructor(UU) {
            if (this._instance = UU, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = EN, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var UU, XU;
                if (!(null == hX ? void 0 : hX.visibilityState) || "visible" === hX.visibilityState) return !0;
                const zU = null == KX || null === (UU = KX.performance) || void 0 === UU || null === (XU = UU.getEntriesByType) || void 0 === XU ? void 0 : XU.call(UU, "visibility-state");
                return !(null == zU ? void 0 : zU.length) || zU.some((UU => "visible" === UU.name))
              })(), this._onVisibilityChange = () => {
                var UU, XU;
                "visible" === (null == hX ? void 0 : hX.visibilityState) && (this._documentWasEverVisible = !0, null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU || null === (XU = UU.setDocumentWasEverVisible) || void 0 === XU || XU.call(UU, !0))
              }, !this._instance.sessionManager) throw NN.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == hX ? void 0 : hX.addEventListener) && JA(hX, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: UU = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var XU;
            this._sessionRecordingDisposed = !0, null == hX || null === (XU = hX.removeEventListener) || void 0 === XU || XU.call(hX, "visibilitychange", this._onVisibilityChange), UU ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var UU;
            const XU = !!(null === (UU = this._instance.get_property("$session_recording_remote_config")) || void 0 === UU ? void 0 : UU.enabled),
              zU = !this._config.disable_session_recording,
              cU = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return KX && XU && zU && !cU
          }
          startIfEnabledOrStop(UU) {
            var XU;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (XU = this._lazyLoadedSessionRecording) || void 0 === XU ? void 0 : XU.isStarted)) return;
            const zU = !Pz(Object.assign) && !Pz(Array.from);
            this._isRecordingEnabled && zU ? (this._lazyLoadAndStart(UU), NN.info("starting")) : (this._recordingStatus = EN, this.stopRecording())
          }
          _lazyLoadAndStart(UU) {
            var XU, zU;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = YN), (null == Fz || null === (XU = Fz.__PosthogExtensions__) || void 0 === XU || null === (XU = XU.rrweb) || void 0 === XU ? void 0 : XU.record) && (null === (zU = Fz.__PosthogExtensions__) || void 0 === zU ? void 0 : zU.initSessionRecording)) this._onScriptLoaded(UU);
              else {
                var cU, yU;
                const XU = this._instance.sessionManager;
                null === (cU = Fz.__PosthogExtensions__) || void 0 === cU || null === (yU = cU.loadExternalDependency) || void 0 === yU || yU.call(cU, this._instance, this._scriptName, (zU => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === XU) return zU ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), NN.error("could not load recorder", zU)) : void this._onScriptLoaded(UU);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var UU, XU;
            null === (UU = this._persistFlagsOnSessionListener) || void 0 === UU || UU.call(this), this._persistFlagsOnSessionListener = void 0, null === (XU = this._lazyLoadedSessionRecording) || void 0 === XU || XU.stop()
          }
          _discardRecording() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var XU, zU;
            null === (XU = this._persistFlagsOnSessionListener) || void 0 === XU || XU.call(this), this._persistFlagsOnSessionListener = void 0, null === (zU = this._lazyLoadedSessionRecording) || void 0 === zU || zU.discard({
              discardProducerEvents: UU
            })
          }
          _resetSampling() {
            var UU, XU;
            null === (UU = this._persistence) || void 0 === UU || UU.unregister("$session_is_sampled"), null === (XU = this._persistence) || void 0 === XU || XU.unregister("$replay_sample_rate")
          }
          _validateSampleRate(UU, XU) {
            if (ez(UU)) return null;
            const zU = Cz(UU) ? UU : parseFloat(UU);
            return "number" != typeof(cU = zU) || !Number.isFinite(cU) || 0 > cU || cU > 1 ? (NN.warn(`${XU} must be between 0 and 1. Ignoring invalid value:`, UU), null) : zU;
            var cU
          }
          _persistRemoteConfig(UU) {
            if (this._persistence) {
              var XU, zU;
              const cU = this._persistence,
                yU = () => {
                  var XU;
                  const zU = !1 === UU.sessionRecording ? void 0 : UU.sessionRecording,
                    yU = this._validateSampleRate(null === (XU = this._config.session_recording) || void 0 === XU ? void 0 : XU.sampleRate, "session_recording.sampleRate"),
                    QU = this._validateSampleRate(null == zU ? void 0 : zU.sampleRate, "remote config sampleRate"),
                    AU = null != yU ? yU : QU;
                  ez(AU) && this._resetSampling();
                  const FU = null == zU ? void 0 : zU.minimumDurationMilliseconds;
                  cU.register({
                    [mU]: ky(ky({
                      cache_timestamp: Date.now(),
                      enabled: !!zU
                    }, zU), {}, {
                      networkPayloadCapture: ky({
                        capturePerformance: UU.capturePerformance
                      }, null == zU ? void 0 : zU.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == zU ? void 0 : zU.recordCanvas,
                        fps: null == zU ? void 0 : zU.canvasFps,
                        quality: null == zU ? void 0 : zU.canvasQuality
                      },
                      sampleRate: AU,
                      minimumDurationMilliseconds: Pz(FU) ? null : FU,
                      endpoint: null == zU ? void 0 : zU.endpoint,
                      triggerMatchType: null == zU ? void 0 : zU.triggerMatchType,
                      masking: null == zU ? void 0 : zU.masking,
                      urlTriggers: null == zU ? void 0 : zU.urlTriggers,
                      version: null == zU ? void 0 : zU.version,
                      triggerGroups: null == zU ? void 0 : zU.triggerGroups
                    })
                  })
                };
              yU(), null === (XU = this._persistFlagsOnSessionListener) || void 0 === XU || XU.call(this), this._persistFlagsOnSessionListener = null === (zU = this._instance.sessionManager) || void 0 === zU ? void 0 : zU.onSessionId(yU)
            }
          }
          onRemoteConfig(UU) {
            const XU = UU.ok ? UU.config : void 0;
            return XU && "sessionRecording" in XU ? !1 === XU.sessionRecording ? (this._persistRemoteConfig(XU), void this._discardRecording()) : (this._persistRemoteConfig(XU), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [qX]: !0
            }), NN.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var zU;
            (null === (zU = this._lazyLoadedSessionRecording) || void 0 === zU ? void 0 : zU.log) ? this._lazyLoadedSessionRecording.log(UU, XU): NN.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var UU, XU;
            const zU = null === (UU = this._instance) || void 0 === UU || null === (UU = UU.persistence) || void 0 === UU ? void 0 : UU.get_property(mU);
            return (null == zU || null === (XU = zU.scriptConfig) || void 0 === XU ? void 0 : XU.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const UU = this._instance.get_property(mU);
            if (!UU) return !1;
            let XU;
            try {
              XU = "object" == typeof UU ? UU : JSON.parse(UU)
            } catch (UU) {
              return NN.warn("persisted remote config for session recording is invalid and will be ignored", UU), !1
            }
            return !ez(XU.cache_timestamp) && 36e5 >= Date.now() - XU.cache_timestamp
          }
          _onScriptLoaded(UU) {
            var XU, zU, cU;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.initSessionRecording)) return NN.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [wX]: !0
              });
              var yU;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (yU = Fz.__PosthogExtensions__) || void 0 === yU ? void 0 : yU.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", NN.info("persisted remote config is stale, requesting fresh config before starting"), void new MD(this._instance).load()
              }
              this._recordingStatus = YN, null === (zU = (cU = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === zU || zU.call(cU, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(UU)
            } else this._recordingStatus = EN
          }
          onRRwebEmit(UU) {
            var XU, zU;
            null === (XU = this._lazyLoadedSessionRecording) || void 0 === XU || null === (zU = XU.onRRwebEmit) || void 0 === zU || zU.call(XU, UU)
          }
          overrideLinkedFlag() {
            var UU, XU;
            this._lazyLoadedSessionRecording || null === (XU = this._persistence) || void 0 === XU || XU.register({
              $replay_override_linked_flag: !0
            }), null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU || UU.overrideLinkedFlag()
          }
          overrideSampling() {
            var UU, XU;
            this._lazyLoadedSessionRecording || null === (XU = this._persistence) || void 0 === XU || XU.register({
              $replay_override_sampling: !0
            }), null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU || UU.overrideSampling()
          }
          overrideTrigger(UU) {
            var XU, zU;
            this._lazyLoadedSessionRecording || null === (zU = this._persistence) || void 0 === zU || zU.register({
              ["url" === UU ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (XU = this._lazyLoadedSessionRecording) || void 0 === XU || XU.overrideTrigger(UU)
          }
          get sdkDebugProperties() {
            var UU;
            const XU = {};
            for (const cU of IN) {
              var zU;
              const UU = null === (zU = this._instance.sessionPersistence) || void 0 === zU ? void 0 : zU.get_property(cU);
              Pz(UU) || (XU[cU] = UU)
            }
            return ky(ky({}, XU), (null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU ? void 0 : UU.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(UU, XU) {
            var zU;
            return !!(null === (zU = this._lazyLoadedSessionRecording) || void 0 === zU ? void 0 : zU.tryAddCustomEvent(UU, XU))
          }
          flushBeforeIdentityReset() {
            var UU, XU;
            null === (UU = this._lazyLoadedSessionRecording) || void 0 === UU || null === (XU = UU.flushBeforeIdentityReset) || void 0 === XU || XU.call(UU)
          }
        }
      },
      qI = {
        autocapture: class extends TY {
          constructor(UU) {
            super(new hY(UU)), this.instance = UU
          }
        },
        historyAutocapture: class {
          constructor(UU) {
            this._isFlushingPageview = !1, this._instance = UU, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const UU = this._getCaptureOptions();
            return !!(UU.path || UU.search || this._shouldCaptureHashChanges(UU))
          }
          startIfEnabled() {
            this.isEnabled && (fA.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, fA.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            KX && KX.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(UU) {
            var XU;
            if (!KX || (null === (XU = KX.history[UU]) || void 0 === XU ? void 0 : XU.__posthog_wrapped__)) return;
            const zU = this;
            cN(KX.history, UU, (XU => function(cU, yU, QU) {
              var AU;
              zU._isUrlChanging(QU) && zU._flushPendingPageview(), XU.call(this, cU, yU, QU), zU._capturePageview(UU, !zU._isFlushingPageview && "popstate" !== (null == KX || null === (AU = KX.event) || void 0 === AU ? void 0 : AU.type))
            }))
          }
          _getCurrentLocation() {
            const UU = null == KX ? void 0 : KX.location;
            if (null == UU ? void 0 : UU.pathname) return {
              pathname: UU.pathname,
              search: UU.search,
              hash: UU.hash
            }
          }
          _getCaptureOptions() {
            const UU = this._instance.config.capture_pageview;
            return "history_change" === UU ? {
              path: !0
            } : Zz(UU) ? UU : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(UU) {
            const XU = this._getCaptureOptions(),
              zU = this._lastLocation;
            return !(!zU || !(XU.path && UU.pathname !== zU.pathname || XU.search && UU.search !== zU.search || this._shouldCaptureHashChanges(XU) && UU.hash !== zU.hash))
          }
          _capturePageview(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              XU || this._flushPendingPageview();
              const zU = this._getCurrentLocation();
              if (!zU) return;
              if (this._hasLocationChanged(zU)) {
                const zU = () => this._instance.capture(lX, {
                  navigation_type: UU
                });
                XU ? (this._pendingPageview = zU, Promise.resolve().then((() => this._flushPendingPageview()))) : zU()
              }
              this._lastLocation = zU
            } catch (XU) {
              fA.error(`Error capturing ${UU} pageview`, XU)
            }
          }
          _isUrlChanging(UU) {
            var XU, zU;
            return !(ez(UU) || !KX) && (null === (XU = Ho(String(UU))) || void 0 === XU ? void 0 : XU.href) !== (null === (zU = KX.location) || void 0 === zU ? void 0 : zU.href)
          }
          _flushPendingPageview() {
            const UU = this._pendingPageview;
            if (UU) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                UU()
              } catch (UU) {
                fA.error("Error capturing deferred pageview", UU)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const UU = () => {
              this._capturePageview("popstate")
            };
            JA(KX, "popstate", UU), this._popstateListener = () => {
              KX && KX.removeEventListener("popstate", UU)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const UU = () => {
              this._capturePageview("hashchange")
            };
            JA(KX, "hashchange", UU), this._hashchangeListener = () => {
              KX && KX.removeEventListener("hashchange", UU)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(UU) {
            var XU;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = UU, this._enabledServerSide = !!(null === (XU = this.instance.persistence) || void 0 === XU ? void 0 : XU.props[uU]), this.rageclicks = new xY(UU.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let UU = 5e3;
            return Zz(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (UU = this._config.capture_heatmaps.flush_interval_milliseconds), UU
          }
          get isEnabled() {
            return ez(this._config.capture_heatmaps) ? ez(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              pN.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var UU;
              clearInterval(null !== (UU = this._flushInterval) && void 0 !== UU ? UU : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(UU) {
            if (!UU.ok) return;
            const XU = UU.config;
            if (!("heatmaps" in XU)) return;
            const zU = !!XU.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [uU]: zU
            }), this._enabledServerSide = zU, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const UU = this._buffer;
            return this._buffer = void 0, UU
          }
          _onDeadClick(UU) {
            aN(UU.originalEvent) && this._onClick(UU.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == hX ? void 0 : hX.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            KX && hX && (this._flushHandler = this._flush.bind(this), JA(KX, mX, this._flushHandler), this._onClickHandler = UU => this._onClick(UU || (null == KX ? void 0 : KX.event)), JA(hX, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = UU => this._onMouseMove(UU || (null == KX ? void 0 : KX.event)), JA(hX, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Bo(this.instance, ko, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), JA(hX, ZU, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var UU;
            KX && hX && (this._flushHandler && KX.removeEventListener(mX, this._flushHandler), this._onClickHandler && hX.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && hX.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && hX.removeEventListener(ZU, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (UU = this._deadClicksCapture) || void 0 === UU || UU.stop(), this._initialized = !1)
          }
          _getProperties(UU, XU) {
            const zU = this.instance.scrollManager.scrollY(),
              cU = this.instance.scrollManager.scrollX(),
              yU = this.instance.scrollManager.scrollElement(),
              QU = function(UU, XU, zU) {
                let cU = UU;
                for (; cU && eF(cU) && !CF(cU, "body");) {
                  if (cU === zU) return !1;
                  let FU;
                  try {
                    var yU, QU, AU;
                    FU = null === (yU = null !== (QU = null === (AU = cU.ownerDocument) || void 0 === AU ? void 0 : AU.defaultView) && void 0 !== QU ? QU : KX) || void 0 === yU ? void 0 : yU.getComputedStyle(cU).position
                  } catch (UU) {
                    return !1
                  }
                  if (Nz(XU, FU)) return !0;
                  cU = VF(cU)
                }
                return !1
              }(iF(UU), ["fixed", "sticky"], yU);
            return {
              x: UU.clientX + (QU ? 0 : cU),
              y: UU.clientY + (QU ? 0 : zU),
              target_fixed: QU,
              type: XU
            }
          }
          _onClick(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var zU;
            if (LF(UU.target) || !aN(UU)) return;
            const cU = this._getProperties(UU, XU);
            (null === (zU = this.rageclicks) || void 0 === zU ? void 0 : zU.isRageClick(UU.clientX, UU.clientY, (new Date).getTime())) && Uo(iF(UU), this.instance.config.rageclick) && this._capture(ky(ky({}, cU), {}, {
              type: "rageclick"
            })), this._capture(cU)
          }
          _onMouseMove(UU) {
            !LF(UU.target) && aN(UU) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(UU, "mousemove"))
            }), 500))
          }
          _capture(UU) {
            if (!KX) return;
            const XU = this._config.disable_capture_url_hashes ? Ey(KX.location.href) : KX.location.href,
              zU = this._config.custom_personal_data_properties,
              cU = this._config.mask_personal_data_properties ? [...so, ...zU || []] : [],
              yU = vo(XU, cU, mo);
            this._buffer = this._buffer || {}, this._buffer[yU] || (this._buffer[yU] = []), this._buffer[yU].push(UU)
          }
          _flush() {
            this._buffer && !Rz(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Bo,
        webVitalsAutocapture: class {
          constructor(UU) {
            var XU;
            this._instance = UU, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", ky({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((UU, XU) => ky(ky({}, UU), {}, {
                [`$web_vitals_${XU.name}_event`]: ky({}, XU),
                [`$web_vitals_${XU.name}_value`]: XU.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = UU => {
              var XU;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, ez(null == UU ? void 0 : UU.name) || ez(null == UU ? void 0 : UU.value)) return void QN.error("Invalid metric received", UU);
              const zU = "string" == typeof UU.navigationURL ? UU.navigationURL : void 0,
                cU = this._maskedURL(zU);
              if (Pz(cU)) return;
              const yU = Cz(UU.navigationId) || "string" == typeof UU.navigationId ? `navigation:${UU.navigationId}` : `url:${cU}`;
              if (this._maxAllowedValue && UU.value >= this._maxAllowedValue) return void QN.error("Ignoring metric with value >= " + this._maxAllowedValue, UU);
              this._buffer.navigationKey !== yU && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), Pz(this._buffer.navigationKey) && (this._buffer.navigationKey = yU, this._buffer.url = cU), this._buffer.firstMetricTimestamp = Pz(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const QU = null === (XU = this._instance.sessionManager) || void 0 === XU ? void 0 : XU.checkAndGetSessionAndWindowId(!0),
                AU = ky(ky(ky({}, UU), zU ? {
                  navigationURL: cU
                } : {}), {}, {
                  $current_url: cU,
                  timestamp: Date.now()
                });
              if (delete AU.entries, Zz(UU.attribution) && this.attributionMetrics.indexOf(UU.name) > -1) {
                const XU = {};
                for (const zU of DN) {
                  const cU = "url" === zU && "string" == typeof UU.attribution[zU] ? this._maskedURL(UU.attribution[zU]) : UU.attribution[zU];
                  Pz(cU) || (XU[zU] = cU)
                }
                AU.attribution = XU
              } else delete AU.attribution;
              Pz(QU) || (AU.$session_id = QU.sessionId, AU.$window_id = QU.windowId), this._buffer.metrics.push(AU), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let UU, XU, zU, cU, yU = !1;
              const QU = Fz.__PosthogExtensions__,
                AU = null == QU ? void 0 : QU.postHogWebVitalsCallbacksByFlavor,
                FU = (null == AU ? void 0 : AU[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && Pz(AU) ? null == QU ? void 0 : QU.postHogWebVitalsCallbacks : void 0);
              if (!Pz(FU)) {
                const QU = FU.withoutAttribution,
                  AU = this.attributionMetrics;
                yU = !Pz(QU), UU = AU.indexOf("LCP") > -1 ? FU.onLCP : (null == QU ? void 0 : QU.onLCP) || FU.onLCP, XU = AU.indexOf("CLS") > -1 ? FU.onCLS : (null == QU ? void 0 : QU.onCLS) || FU.onCLS, zU = AU.indexOf("FCP") > -1 ? FU.onFCP : (null == QU ? void 0 : QU.onFCP) || FU.onFCP, cU = AU.indexOf("INP") > -1 ? FU.onINP : (null == QU ? void 0 : QU.onINP) || FU.onINP
              }
              if (!(UU && XU && zU && cU)) return void QN.error("web vitals callbacks not loaded - not starting");
              const oU = {
                  reportSoftNavs: this.useSoftNavs
                },
                DU = yU && this.attributionMetrics.indexOf("INP") > -1 ? ky(ky({}, oU), {}, {
                  includeProcessedEventEntries: !1
                }) : oU;
              this.allowedMetrics.indexOf("LCP") > -1 && UU(this._addToBuffer.bind(this), oU), this.allowedMetrics.indexOf("CLS") > -1 && XU(this._addToBuffer.bind(this), oU), this.allowedMetrics.indexOf("FCP") > -1 && zU(this._addToBuffer.bind(this), oU), this.allowedMetrics.indexOf("INP") > -1 && cU(this._addToBuffer.bind(this), DU), this._initialized = !0
            }, this._enabledServerSide = !!(null === (XU = this._instance.persistence) || void 0 === XU ? void 0 : XU.props[MU]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var UU, XU;
            const zU = Zz(this._perfConfig) ? null === (UU = this._perfConfig) || void 0 === UU ? void 0 : UU.web_vitals_allowed_metrics : void 0;
            return ez(zU) ? (null === (XU = this._instance.persistence) || void 0 === XU ? void 0 : XU.props.$web_vitals_allowed_metrics) || FN : zU
          }
          get flushToCaptureTimeoutMs() {
            return (Zz(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const UU = Zz(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return qz(UU) ? UU ? FN : [] : Gz(UU) ? UU : oN
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const UU = Zz(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != UU && UU
          }
          get _maxAllowedValue() {
            const UU = Zz(this._perfConfig) && Cz(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : AN;
            return UU > 0 && 6e4 >= UU ? AN : UU
          }
          get isEnabled() {
            const UU = null == Uz ? void 0 : Uz.protocol;
            if ("http:" !== UU && "https:" !== UU) return QN.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const XU = Zz(this._perfConfig) ? this._perfConfig.web_vitals : qz(this._perfConfig) ? this._perfConfig : void 0;
            return qz(XU) ? XU : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (QN.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(UU) {
            if (!UU.ok) return;
            const XU = UU.config;
            if (!("capturePerformance" in XU)) return;
            const zU = Zz(XU.capturePerformance) && !!XU.capturePerformance.web_vitals,
              cU = Zz(XU.capturePerformance) ? XU.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [MU]: zU
            }), this._instance.persistence.register({
              [nU]: cU
            })), this._enabledServerSide = zU, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(UU) {
            var XU;
            const zU = Fz.__PosthogExtensions__,
              cU = this._callbackFlavor,
              yU = null == zU ? void 0 : zU.postHogWebVitalsCallbacksByFlavor;
            (null == yU ? void 0 : yU[cU]) || "web-vitals" === cU && Pz(yU) && (null == zU ? void 0 : zU.postHogWebVitalsCallbacks) ? UU() : null == zU || null === (XU = zU.loadExternalDependency) || void 0 === XU || XU.call(zU, this._instance, cU, (XU => {
              XU ? QN.error("failed to load script", XU) : UU()
            }))
          }
          _maskedURL(UU) {
            const XU = UU || (null == KX ? void 0 : KX.location.href);
            if (!XU) return void QN.error("Could not determine current URL");
            const zU = this._instance.config.disable_capture_url_hashes ? Ey(XU) : XU,
              cU = this._instance.config.custom_personal_data_properties,
              yU = this._instance.config.mask_personal_data_properties ? [...so, ...cU || []] : [];
            return vo(zU, yU, mo)
          }
        }
      },
      OI = {
        exceptionObserver: class {
          constructor(UU) {
            var XU;
            this._startCapturing = () => {
              var UU;
              if (!KX || !this.isEnabled || !(null === (UU = Fz.__PosthogExtensions__) || void 0 === UU ? void 0 : UU.errorWrappingFunctions)) return;
              const XU = Fz.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                zU = Fz.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                cU = Fz.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = XU(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = zU(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = cU(this.captureException.bind(this)))
              } catch (UU) {
                UN.error("failed to start", UU), this._stopCapturing()
              }
            }, this._instance = UU, this._remoteEnabled = !!(null === (XU = this._instance.persistence) || void 0 === XU ? void 0 : XU.props[fU]), this._rateLimiter = new jz(ky(ky({}, function() {
              let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var XU, zU, cU, yU;
              return {
                refillRate: null !== (XU = null !== (zU = UU.exceptionRateLimiterRefillRate) && void 0 !== zU ? zU : UU.__exceptionRateLimiterRefillRate) && void 0 !== XU ? XU : 1,
                bucketSize: null !== (cU = null !== (yU = UU.exceptionRateLimiterBucketSize) && void 0 !== yU ? yU : UU.__exceptionRateLimiterBucketSize) && void 0 !== cU ? cU : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: UN
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const UU = this._instance.config.capture_exceptions;
            let XU = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return Zz(UU) ? XU = ky(ky({}, XU), UU) : (Pz(UU) ? this._remoteEnabled : UU) && (XU = ky(ky({}, XU), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), XU
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (UN.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(UU) {
            var XU, zU, cU;
            (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.errorWrappingFunctions) ? UU(): null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, "exception-autocapture", (XU => {
              if (XU) return UN.error("failed to load script", XU);
              UU()
            }))
          }
          _stopCapturing() {
            var UU, XU, zU;
            null === (UU = this._unwrapOnError) || void 0 === UU || UU.call(this), this._unwrapOnError = void 0, null === (XU = this._unwrapUnhandledRejection) || void 0 === XU || XU.call(this), this._unwrapUnhandledRejection = void 0, null === (zU = this._unwrapConsoleError) || void 0 === zU || zU.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(UU) {
            if (!UU.ok) return;
            const XU = UU.config;
            "autocaptureExceptions" in XU && (this._remoteEnabled = !!XU.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [fU]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(UU) {
            try {
              var XU, zU, cU;
              const yU = null !== (XU = null == UU || null === (zU = UU.$exception_list) || void 0 === zU || null === (zU = zU[0]) || void 0 === zU ? void 0 : zU.type) && void 0 !== XU ? XU : "Exception";
              if (this._rateLimiter.consumeRateLimit(yU)) return void UN.info("Skipping exception capture because of client rate limiting.", {
                exception: yU
              });
              null === (cU = this._instance.exceptions) || void 0 === cU || cU.sendExceptionEvent(UU)
            } catch (UU) {}
          }
        },
        exceptions: class {
          constructor(UU) {
            var XU, zU;
            this._suppressionRules = [], this._errorPropertiesBuilder = new dy([new Jy, new yQ, new Ky, new jy, new zQ, new XQ, new Ty, new cQ], function(UU) {
              for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
              return function(XU) {
                let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const yU = [],
                  QU = XU.split("\n"),
                  AU = Math.min(QU.length, cU + 1e3),
                  FU = [];
                for (let EU = cU; AU > EU; EU++) {
                  const XU = QU[EU];
                  if (XU.length > 1024) continue;
                  const cU = My.test(XU) ? XU.replace(My, "$1") : XU;
                  if (!cU.match(/\S*Error: /)) {
                    for (const XU of zU) {
                      const zU = XU(cU, UU);
                      if (zU) {
                        yU.push(zU);
                        const UU = Vy(yU);
                        if (UU) {
                          for (let XU = FU.length - 1; XU >= 0; XU--) {
                            const zU = FU[XU];
                            if (UU.start >= zU.start + zU.length) break;
                            FU.pop()
                          }
                          FU.push(UU)
                        }
                        break
                      }
                    }
                    if (ly(yU, FU) >= 50) break
                  }
                }
                const oU = [...FU].sort(((UU, XU) => XU.start - UU.start)),
                  DU = oU[oU.length - 1];
                if (DU) {
                  const UU = ny(yU, DU);
                  yU.splice(DU.start - UU, UU);
                  for (const XU of oU) XU.start -= UU
                }
                for (const UU of oU) sy(yU, UU);
                return FU.some((UU => 0 === UU.start && yU.length === UU.length)) && function(UU) {
                    const XU = UU.map((UU => `${UU.function}|${UU.filename}|${UU.lineno}|${UU.colno}|${UU.module}`));
                    let zU = 0;
                    for (let cU = 1; XU.length > cU; cU++) xy(XU, cU, zU) && (zU = cU);
                    UU.push(...UU.splice(0, zU))
                  }(yU),
                  function(UU) {
                    if (!UU.length) return [];
                    const XU = Array.from(UU);
                    return XU.reverse(), XU.slice(0, 50).map((UU => {
                      return ky(ky({}, UU), {}, {
                        filename: UU.filename || (zU = XU, zU[zU.length - 1] || {}).filename,
                        function: UU.function || "?"
                      });
                      var zU
                    }))
                  }(yU)
              }
            }("web:javascript", uy, Hy)), this._instance = UU, this._suppressionRules = null !== (XU = null === (zU = this._instance.persistence) || void 0 === zU ? void 0 : zU.get_property("$error_tracking_suppression_rules")) && void 0 !== XU ? XU : [], this._exceptionStepsConfig = DQ(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new EQ(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = DQ(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(UU) {
            var XU, zU, cU;
            if (!UU.ok) return;
            const yU = UU.config;
            if (!("errorTracking" in yU)) return;
            const QU = null !== (XU = null === (zU = yU.errorTracking) || void 0 === zU ? void 0 : zU.suppressionRules) && void 0 !== XU ? XU : [],
              AU = null === (cU = yU.errorTracking) || void 0 === cU ? void 0 : cU.captureExtensionExceptions;
            this._suppressionRules = QU, this._instance.persistence && this._instance.persistence.register({
              [iU]: this._suppressionRules,
              [HU]: AU
            })
          }
          get _captureExtensionExceptions() {
            var UU;
            const XU = !!this._instance.get_property(HU),
              zU = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (UU = null != zU ? zU : XU) && void 0 !== UU && UU
          }
          buildProperties(UU, XU) {
            return this._errorPropertiesBuilder.buildFromUnknown(UU, {
              syntheticException: null == XU ? void 0 : XU.syntheticException,
              mechanism: {
                handled: null == XU ? void 0 : XU.handled
              }
            })
          }
          addExceptionStep(UU, XU) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!Wz(UU) || 0 === UU.trim().length) return void JN.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: zU,
                droppedKeys: cU
              } = function(UU) {
                if (!UU) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const XU = [];
                return {
                  sanitizedProperties: Object.keys(UU).reduce(((zU, cU) => FQ.has(cU) ? (XU.push(cU), zU) : (zU[cU] = UU[cU], zU)), {}),
                  droppedKeys: XU
                }
              }(this._coerceExceptionStepProperties(XU));
              cU.length > 0 && JN.warn("Ignoring reserved exception step fields", {
                droppedKeys: cU
              }), this._exceptionStepsBuffer.add(ky({
                [QQ]: UU,
                [AQ]: (new Date).toISOString()
              }, zU))
            } catch (UU) {
              JN.error("Failed to add exception step. Ignoring breadcrumb.", UU)
            }
          }
          sendExceptionEvent(UU) {
            try {
              const XU = UU.$exception_list;
              if (this._isExceptionList(XU)) {
                if (this._matchesSuppressionRule(XU)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void JN.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(XU)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void JN.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(XU)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void JN.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(XU)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void JN.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const zU = this._exceptionStepsConfig.enabled && ez(UU.$exception_steps) ? this._addBufferedExceptionSteps(UU) : UU,
                cU = function() {
                  if ("u" > typeof process) {
                    var UU;
                    const XU = null === (UU = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === UU ? void 0 : UU.trim();
                    if (XU) return XU
                  }
                  const XU = globalThis._posthogReleaseId;
                  return "string" == typeof XU && XU.length > 0 ? XU : void 0
                }();
              cU && (zU.$release_id = cU);
              try {
                const UU = this._instance.capture("$exception", zU, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return UU && this._exceptionStepsBuffer.clear(), UU
              } catch (UU) {
                return xN(UU) || JN.error("Failed to capture exception event. Dropping this exception.", UU), void this._exceptionStepsBuffer.clear()
              }
            } catch (UU) {
              return void(xN(UU) || JN.error("Failed to process exception event. Ignoring this exception.", UU))
            }
          }
          _addBufferedExceptionSteps(UU) {
            try {
              const XU = this._exceptionStepsBuffer.getAttachable();
              return 0 === XU.length ? UU : ky(ky({}, UU), {}, {
                $exception_steps: XU
              })
            } catch (yU) {
              return JN.error("Failed to read buffered exception steps. Capturing exception without steps.", yU), UU
            }
          }
          _addDroppedExceptionStep(UU) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [QQ]: UU,
              [AQ]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(UU) {
            return Zz(UU) ? ky({}, UU) : {}
          }
          _getExceptionStepsConfig() {
            var UU, XU;
            return null !== (UU = null === (XU = this._instance.config.error_tracking) || void 0 === XU ? void 0 : XU.exception_steps) && void 0 !== UU ? UU : {}
          }
          _matchesSuppressionRule(UU) {
            if (0 === UU.length) return !1;
            try {
              const XU = UU.reduce(((UU, XU) => {
                let {
                  type: zU,
                  value: cU
                } = XU;
                return Wz(zU) && zU.length > 0 && UU.$exception_types.push(zU), Wz(cU) && cU.length > 0 && UU.$exception_values.push(cU), UU
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((UU => {
                const zU = UU.values.map((UU => {
                  const zU = cY[UU.operator],
                    cU = XU[UU.key];
                  if (!zU || !cU) return !1;
                  const yU = Gz(UU.value) ? UU.value : [UU.value];
                  return yU.length > 0 && zU(yU, cU)
                }));
                return "OR" === UU.type ? zU.some(Boolean) : zU.every(Boolean)
              }))
            } catch (UU) {
              return JN.warn("Failed to evaluate suppression rules. Capturing the exception.", UU), !1
            }
          }
          _isExtensionException(UU) {
            const XU = UU.flatMap((UU => {
                var XU, zU;
                return null !== (XU = null === (zU = UU.stacktrace) || void 0 === zU ? void 0 : zU.frames) && void 0 !== XU ? XU : []
              })),
              zU = XU.filter((UU => {
                let {
                  filename: XU
                } = UU;
                return !!XU && bN.some((UU => XU.startsWith(UU)))
              }));
            return 0 !== zU.length && (!zU.every((UU => {
              let {
                filename: XU
              } = UU;
              return !!XU && XU.startsWith(jN)
            })) || UU.some((UU => {
              let {
                type: XU,
                value: zU
              } = UU;
              return "NoResponse" === XU || Wz(zU) && KN.some((UU => {
                let {
                  value: XU,
                  exact: cU
                } = UU;
                return cU ? zU === XU : zU.includes(XU)
              }))
            })) && !XU.some((UU => {
              let {
                in_app: XU,
                filename: zU
              } = UU;
              return XU && !(null == zU ? void 0 : zU.startsWith(jN))
            })))
          }
          _isInjectedBrowserScriptException(UU) {
            return UU.some((UU => {
              let {
                value: XU
              } = UU;
              return Wz(XU) && TN.some((UU => XU.includes(UU)))
            }))
          }
          _isPostHogException(UU) {
            if (UU.length > 0) {
              var XU, zU, cU, yU;
              const QU = null !== (XU = null === (zU = UU[0].stacktrace) || void 0 === zU ? void 0 : zU.frames) && void 0 !== XU ? XU : [],
                AU = QU[QU.length - 1];
              return null !== (cU = null == AU || null === (yU = AU.filename) || void 0 === yU ? void 0 : yU.includes("posthog.com/static")) && void 0 !== cU && cU
            }
            return !1
          }
          _isExceptionList(UU) {
            return !ez(UU) && Gz(UU)
          }
        }
      },
      SI = ky({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(UU) {
            this._productTourManager = null, this._cachedTours = null, this._instance = UU
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(UU) {
            if (!UU.ok) return;
            const XU = UU.config;
            if ("productTours" in XU) {
              var zU, cU;
              if (this._persistence && this._persistence.register({
                  [VU]: !!XU.productTours
                }), !gN(this._instance)) return !this._productTourManager && ez(null === (zU = this._persistence) || void 0 === zU ? void 0 : zU.props.ph_product_tours) || tN.info("product tours disabled; stopping and clearing cached tours"), null === (cU = this._productTourManager) || void 0 === cU || cU.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && gN(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(UU) {
            var XU, zU, cU;
            (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.generateProductTours) ? UU(): null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, "product-tours", (XU => {
              XU ? tN.error("Could not load product tours script", XU) : UU()
            }))
          }
          _startProductTours() {
            var UU;
            !this._productTourManager && (null === (UU = Fz.__PosthogExtensions__) || void 0 === UU ? void 0 : UU.generateProductTours) && (this._productTourManager = Fz.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (Gz(this._cachedTours) && !XU) return void UU(this._cachedTours, {
              isLoaded: !0
            });
            const zU = this._persistence;
            if (zU) {
              const cU = zU.props[YX];
              if (Gz(cU) && !XU) return this._cachedTours = cU, void UU(cU, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: XU => {
                if (!gN(this._instance)) return void UU([], {
                  isLoaded: !0
                });
                const cU = XU.statusCode;
                if (200 !== cU || !XU.json) {
                  const zU = `Product Tours API could not be loaded, status: ${cU}`;
                  return 0 === cU ? XU.error || tN.warn(zU) : tN.error(zU), void UU([], {
                    isLoaded: !1,
                    error: zU
                  })
                }
                const yU = Gz(XU.json.product_tours) ? XU.json.product_tours : [];
                this._cachedTours = yU, zU && zU.register({
                  [YX]: yU
                }), UU(yU, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(UU) {
            ez(this._productTourManager) ? UU([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(UU)
          }
          showProductTour(UU) {
            var XU;
            null === (XU = this._productTourManager) || void 0 === XU || XU.showTourById(UU)
          }
          previewTour(UU) {
            this._productTourManager ? this._productTourManager.previewTour(UU) : this._loadScript((() => {
              var XU;
              this._startProductTours(), null === (XU = this._productTourManager) || void 0 === XU || XU.previewTour(UU)
            }))
          }
          dismissProductTour() {
            var UU;
            null === (UU = this._productTourManager) || void 0 === UU || UU.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var UU;
            null === (UU = this._productTourManager) || void 0 === UU || UU.nextStep()
          }
          previousStep() {
            var UU;
            null === (UU = this._productTourManager) || void 0 === UU || UU.previousStep()
          }
          clearCache() {
            var UU;
            this._cachedTours = null, null === (UU = this._persistence) || void 0 === UU || UU.unregister("ph_product_tours")
          }
          resetTour(UU) {
            var XU;
            null === (XU = this._productTourManager) || void 0 === XU || XU.resetTour(UU)
          }
          resetAllTours() {
            var UU;
            null === (UU = this._productTourManager) || void 0 === UU || UU.resetAllTours()
          }
          cancelPendingTour(UU) {
            var XU;
            null === (XU = this._productTourManager) || void 0 === XU || XU.cancelPendingTour(UU)
          }
        }
      }, CI),
      rI = {
        siteApps: class {
          constructor(UU) {
            this._instance = UU, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(UU, XU) {
            if (!XU) return;
            const zU = this.globalsForEvent(XU);
            this._bufferedInvocations.push(zU), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var UU;
            return null === (UU = Fz._POSTHOG_REMOTE_CONFIG) || void 0 === UU || null === (UU = UU[this._instance.config.token]) || void 0 === UU ? void 0 : UU.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const UU = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                UU(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(UU) {
            var XU, zU, cU, yU, QU, AU, FU;
            if (!UU) throw new Error("Event payload is required");
            const oU = {},
              DU = this._instance.get_property("$groups") || [],
              EU = this._instance.get_property("$stored_group_properties") || {};
            for (const [IU, pU] of Object.entries(EU)) oU[IU] = {
              id: DU[IU],
              type: IU,
              properties: pU
            };
            const {
              $set_once: YU,
              $set: NU
            } = UU;
            return {
              event: ky(ky({}, dQ(UU, kN)), {}, {
                properties: ky(ky(ky({}, UU.properties), NU ? {
                  $set: ky(ky({}, null !== (XU = null === (zU = UU.properties) || void 0 === zU ? void 0 : zU.$set) && void 0 !== XU ? XU : {}), NU)
                } : {}), YU ? {
                  $set_once: ky(ky({}, null !== (cU = null === (yU = UU.properties) || void 0 === yU ? void 0 : yU.$set_once) && void 0 !== cU ? cU : {}), YU)
                } : {}),
                elements_chain: null !== (QU = null === (AU = UU.properties) || void 0 === AU ? void 0 : AU.$elements_chain) && void 0 !== QU ? QU : "",
                distinct_id: null === (FU = UU.properties) || void 0 === FU ? void 0 : FU.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: oU
            }
          }
          _prepareElementForSiteApp(UU) {
            var XU;
            const zU = null === (XU = UU.tagName) || void 0 === XU ? void 0 : XU.toLowerCase();
            return "style" === zU && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(UU) || (GN.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === zU && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(UU) || (GN.error("prepare_external_dependency_script returned null"), null) : UU
          }
          _patchSiteAppElementInsertionMethods() {
            var UU, XU, zU, cU, yU, QU, AU, FU;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const oU = null == hX ? void 0 : hX.defaultView,
              DU = null == oU || null === (UU = oU.Node) || void 0 === UU ? void 0 : UU.prototype;
            if (!oU || !DU) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const EU = [],
              YU = this,
              NU = new WeakSet,
              IU = (UU, XU, zU) => {
                if (!(null == UU ? void 0 : UU[XU])) return;
                const cU = UU[XU];
                UU[XU] = zU(cU), EU.push((() => {
                  UU[XU] = cU
                }))
              },
              pU = UU => {
                if (NU.has(UU)) return UU;
                const XU = YU._prepareElementForSiteApp(UU);
                return XU && NU.add(XU), XU
              },
              aU = UU => UU.map((UU => "string" == typeof UU ? UU : pU(UU))).filter((UU => !Lz(UU)));
            return IU(DU, "appendChild", (UU => function(XU) {
              const zU = pU(XU);
              return zU ? UU.call(this, zU) : XU
            })), IU(DU, "insertBefore", (UU => function(XU, zU) {
              const cU = pU(XU);
              return cU ? UU.call(this, cU, zU) : XU
            })), IU(DU, "replaceChild", (UU => function(XU, zU) {
              const cU = pU(XU);
              return cU ? UU.call(this, cU, zU) : zU
            })), [null === (XU = oU.Element) || void 0 === XU ? void 0 : XU.prototype, null === (zU = oU.Document) || void 0 === zU ? void 0 : zU.prototype, null === (cU = oU.DocumentFragment) || void 0 === cU ? void 0 : cU.prototype].forEach((UU => {
              IU(UU, "append", (UU => function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                return UU.apply(this, aU(zU))
              })), IU(UU, "prepend", (UU => function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                return UU.apply(this, aU(zU))
              }))
            })), [null === (yU = oU.Element) || void 0 === yU ? void 0 : yU.prototype, null === (QU = oU.CharacterData) || void 0 === QU ? void 0 : QU.prototype, null === (AU = oU.DocumentType) || void 0 === AU ? void 0 : AU.prototype].forEach((UU => {
              IU(UU, "before", (UU => function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                return UU.apply(this, aU(zU))
              })), IU(UU, "after", (UU => function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                return UU.apply(this, aU(zU))
              })), IU(UU, "replaceWith", (UU => function() {
                for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
                const yU = aU(zU);
                return zU.length && !yU.length ? void 0 : UU.apply(this, yU)
              }))
            })), IU(null === (FU = oU.Element) || void 0 === FU ? void 0 : FU.prototype, "insertAdjacentElement", (UU => function(XU, zU) {
              const cU = pU(zU);
              return cU ? UU.call(this, XU, cU) : null
            })), this._restoreSiteAppElementPatches = () => {
              EU.forEach((UU => UU())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let UU = !1;
            return () => {
              var XU;
              UU || (UU = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (XU = this._restoreSiteAppElementPatches) || void 0 === XU || XU.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(UU) {
            let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const zU = this._patchSiteAppElementInsertionMethods();
            try {
              const cU = UU(zU);
              return XU && zU(), cU
            } catch (UU) {
              throw zU(), UU
            }
          }
          setupSiteApp(UU) {
            const XU = this.apps[UU.id],
              zU = () => {
                var zU;
                !XU.errored && this._bufferedInvocations.length && (GN.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${UU.id}`), this._bufferedInvocations.forEach((UU => this._runWithPreparedSiteAppElements((() => {
                  var zU;
                  return null === (zU = XU.processEvent) || void 0 === zU ? void 0 : zU.call(XU, UU)
                })))), XU.processedBuffer = !0), Object.values(this.apps).every((UU => UU.processedBuffer || UU.errored)) && (null === (zU = this._stopBuffering) || void 0 === zU || zU.call(this))
              };
            let cU = !1;
            const yU = yU => {
              XU.errored = !yU, XU.loaded = !0, GN.info(`Site app with id ${UU.id} ${yU?"loaded":"errored"}`), cU && zU()
            };
            try {
              const {
                processEvent: zU
              } = this._runWithPreparedSiteAppElements((XU => UU.init({
                posthog: this._instance,
                callback(UU) {
                  XU(), yU(UU)
                }
              })), !1);
              zU && (XU.processEvent = zU), cU = !0
            } catch (XU) {
              GN.error(BN + UU.id, XU), yU(!1)
            }
            if (cU && XU.loaded) try {
              zU()
            } catch (zU) {
              GN.error(`Error while processing buffered events PostHog app with config id ${UU.id}`, zU), XU.errored = !0
            }
          }
          _setupSiteApps() {
            const UU = this.siteAppLoaders || [];
            for (const XU of UU) this.apps[XU.id] = {
              id: XU.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const XU of UU) this.setupSiteApp(XU)
          }
          _onCapturedEvent(UU) {
            if (0 === Object.keys(this.apps).length) return;
            const XU = this.globalsForEvent(UU);
            for (const zU of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var UU;
                return null === (UU = zU.processEvent) || void 0 === UU ? void 0 : UU.call(zU, XU)
              }))
            } catch (XU) {
              GN.error(`Error while processing event ${UU.event} for site app ${zU.id}`, XU)
            }
          }
          onRemoteConfig(UU) {
            var XU, zU, cU;
            if (null === (XU = this.siteAppLoaders) || void 0 === XU ? void 0 : XU.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (UU => this._onCapturedEvent(UU)))) : void GN.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (zU = this._stopBuffering) || void 0 === zU || zU.call(this), !UU.ok) return;
            const yU = UU.config;
            if (null === (cU = yU.siteApps) || void 0 === cU ? void 0 : cU.length)
              if (this.isEnabled)
                for (const {
                    id: FU,
                    url: oU
                  }
                  of yU.siteApps) {
                  var QU, AU;
                  Fz[`__$$ph_site_app_${FU}`] = this._instance, null === (QU = Fz.__PosthogExtensions__) || void 0 === QU || null === (AU = QU.loadSiteApp) || void 0 === AU || AU.call(QU, this._instance, oU, (UU => {
                    if (UU) return GN.error(BN + FU, UU)
                  }))
                } else GN.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      uI = {
        tracingHeaders: class {
          constructor(UU) {
            this._instance = UU, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const UU = this._syncHostnamesForPatch();
              var XU, zU;
              UU ? (Pz(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (XU = Fz.__PosthogExtensions__) || void 0 === XU || null === (XU = XU.tracingHeadersPatchFns) || void 0 === XU ? void 0 : XU._patchXHR(UU, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), Pz(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (zU = zU.tracingHeadersPatchFns) || void 0 === zU ? void 0 : zU._patchFetch(UU, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(UU) {
            var XU, zU, cU;
            (null === (XU = Fz.__PosthogExtensions__) || void 0 === XU ? void 0 : XU.tracingHeadersPatchFns) ? UU(): null === (zU = Fz.__PosthogExtensions__) || void 0 === zU || null === (cU = zU.loadExternalDependency) || void 0 === cU || cU.call(zU, this._instance, "tracing-headers", (XU => {
              if (XU) return yN.error("failed to load script", XU);
              UU()
            }))
          }
          _getConfiguredHostnames() {
            var UU, XU;
            return null !== (UU = null !== (XU = this._instance.config.tracing_headers) && void 0 !== XU ? XU : this._instance.config.addTracingHeaders) && void 0 !== UU ? UU : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const UU = this._getConfiguredHostnames();
            return Gz(UU) ? (Gz(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...UU) : this._hostnamesForPatch = [...UU], UU.length > 0 ? this._hostnamesForPatch : void 0) : (Gz(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = UU || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var UU, XU;
            null === (UU = this._restoreXHRPatch) || void 0 === UU || UU.call(this), null === (XU = this._restoreFetchPatch) || void 0 === XU || XU.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      fI = ky({
        surveys: class extends WN {
          constructor(UU) {
            var XU;
            super(new qN(UU), (XU = UU, {
              get projectToken() {
                return XU.config.token
              },
              kv: new wN(XU)
            })), this._instance = UU
          }
          _sendSurveysRequest(UU, XU) {
            const zU = XU.query ? WE(UU, XU.query) : UU;
            return new Promise((UU => {
              var cU;
              this._instance._send_request({
                method: XU.method,
                url: this._instance.requestRouter.endpointFor(null !== (cU = XU.target) && void 0 !== cU ? cU : "api", zU),
                data: XU.body,
                headers: XU.headers,
                timeout: XU.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: XU.transport,
                compression: XU.compression,
                timestampMode: XU.sentAt,
                callback: UU
              })
            }))
          }
        }
      }, CI),
      iI = {
        toolbar: class {
          constructor(UU) {
            this.instance = UU
          }
          _setToolbarState(UU) {
            Fz.ph_toolbar_state = UU
          }
          _getToolbarState() {
            var UU;
            return null !== (UU = Fz.ph_toolbar_state) && void 0 !== UU ? UU : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var cU, yU;
            if (jA(this.instance.config)) return !1;
            if (!KX || !hX) return !1;
            UU = null !== (cU = UU) && void 0 !== cU ? cU : KX.location, zU = null !== (yU = zU) && void 0 !== yU ? yU : KX.history;
            try {
              if (!XU) {
                try {
                  KX.localStorage.setItem("test", "test"), KX.localStorage.removeItem("test")
                } catch (UU) {
                  return !1
                }
                XU = null == KX ? void 0 : KX.localStorage
              }
              const cU = ON || Vo(UU.hash, "__posthog") || Vo(UU.hash, "state");
              let yU;
              const QU = cU ? Yy((() => JSON.parse(atob(decodeURIComponent(cU))))) || Yy((() => JSON.parse(decodeURIComponent(cU)))) : null;
              return QU && "ph_authorize" === QU.action ? (yU = QU, yU.source = "url", yU && Object.keys(yU).length > 0 && (QU.desiredHash ? UU.hash = QU.desiredHash : zU ? zU.replaceState(zU.state, "", UU.pathname + UU.search) : UU.hash = "")) : (yU = JSON.parse(XU.getItem(SN) || "{}"), yU.source = "localstorage", delete yU.userIntent), !(!yU.token || this.instance.config.token !== yU.token || (this.loadToolbar(yU), 0))
            } catch (UU) {
              return !1
            }
          }
          _callLoadToolbar(UU) {
            const XU = Fz.ph_load_toolbar || Fz.ph_load_editor;
            !ez(XU) && Bz(XU) ? XU(UU, this.instance) : rN.warn("No toolbar load function found")
          }
          loadToolbar(UU) {
            const XU = !!(null == hX ? void 0 : hX.getElementById("__POSTHOG_TOOLBAR__"));
            if (!KX || XU) return !1;
            const zU = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              cU = ky(ky({
                token: this.instance.config.token
              }, UU), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, zU ? {
                instrument: !1
              } : {});
            if (KX.localStorage.setItem(SN, JSON.stringify(ky(ky({}, cU), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(cU);
            else if (0 === this._getToolbarState()) {
              var yU, QU;
              this._setToolbarState(1), null === (yU = Fz.__PosthogExtensions__) || void 0 === yU || null === (QU = yU.loadExternalDependency) || void 0 === QU || QU.call(yU, this.instance, "toolbar", (UU => {
                if (UU) return rN.error("[Toolbar] Failed to load", UU), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(cU)
              })), JA(KX, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(cU)
              }))
            }
            return !0
          }
          _loadEditor(UU) {
            return this.loadToolbar(UU)
          }
          maybeLoadEditor() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(UU, XU, zU)
          }
        }
      },
      HI = ky({
        experiments: class UU {
          get _config() {
            return this._instance.config
          }
          constructor(XU) {
            var zU = this;
            this._instance = XU, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              zU.getWebExperiments((XU => {
                UU._logInfo("retrieved web experiments from the server"), zU._flagToExperiments = new Map, XU.forEach((XU => {
                  if (XU.feature_flag_key) {
                    var cU;
                    zU._flagToExperiments && (UU._logInfo("setting flag key ", XU.feature_flag_key, " to web experiment ", XU), null === (cU = zU._flagToExperiments) || void 0 === cU || cU.set(XU.feature_flag_key, XU));
                    const yU = zU._instance.getFeatureFlag(XU.feature_flag_key);
                    Wz(yU) && XU.variants[yU] && zU._applyTransforms(XU.name, yU, XU.variants[yU].transforms)
                  } else if (XU.variants)
                    for (const yU in XU.variants) {
                      const cU = XU.variants[yU];
                      UU._matchesTestVariant(cU, zU._instance) && zU._applyTransforms(XU.name, yU, cU.transforms)
                    }
                }))
              }), XU)
            }, this._instance.onFeatureFlags((UU => {
              this.onFeatureFlags(UU)
            }))
          }
          initialize() {}
          onFeatureFlags(XU) {
            if (this._is_bot()) UU._logInfo(hN);
            else if (!this._config.disable_web_experiments) {
              if (ez(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              UU._logInfo("applying feature flags", XU), XU.forEach((UU => {
                var XU;
                if (this._flagToExperiments && (null === (XU = this._flagToExperiments) || void 0 === XU ? void 0 : XU.has(UU))) {
                  var zU;
                  const XU = this._instance.getFeatureFlag(UU),
                    cU = null === (zU = this._flagToExperiments) || void 0 === zU ? void 0 : zU.get(UU);
                  XU && (null == cU ? void 0 : cU.variants[XU]) && this._applyTransforms(cU.name, XU, cU.variants[XU].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const XU = UU.getWindowLocation();
            if (null == XU ? void 0 : XU.search) {
              const zU = Mo(null == XU ? void 0 : XU.search, "__experiment_id"),
                cU = Mo(null == XU ? void 0 : XU.search, "__experiment_variant");
              zU && cU && (UU._logInfo(`previewing web experiments ${zU} && ${cU}`), this.getWebExperiments((UU => {
                this._showPreviewWebExperiment(parseInt(zU), cU, UU)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(UU, XU, zU) {
            if (this._config.disable_web_experiments && !zU) return UU([]);
            const cU = this._instance.get_property("$web_experiments");
            if (cU && !XU) return UU(cU);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: XU => UU(200 === XU.statusCode && XU.json && XU.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(XU, zU, cU) {
            const yU = cU.filter((UU => UU.id === XU));
            yU && yU.length > 0 && (UU._logInfo(`Previewing web experiment [${yU[0].name}] with variant [${zU}]`), this._applyTransforms(yU[0].name, zU, yU[0].variants[zU].transforms))
          }
          static _matchesTestVariant(XU, zU) {
            return !ez(XU.conditions) && UU._matchUrlConditions(XU, zU) && UU._matchUTMConditions(XU)
          }
          static _matchUrlConditions(XU, zU) {
            var cU;
            if (ez(XU.conditions) || ez(null === (cU = XU.conditions) || void 0 === cU ? void 0 : cU.url)) return !0;
            const yU = UU.getWindowLocation();
            if (yU) {
              var QU, AU, FU;
              const UU = dF(zU, yU.href);
              return !(null === (QU = XU.conditions) || void 0 === QU ? void 0 : QU.url) || UI[null !== (AU = null === (FU = XU.conditions) || void 0 === FU ? void 0 : FU.urlMatchType) && void 0 !== AU ? AU : "icontains"](XU.conditions.url, UU)
            }
            return !1
          }
          static getWindowLocation() {
            return null == KX ? void 0 : KX.location
          }
          static _matchUTMConditions(UU) {
            var XU;
            if (ez(UU.conditions) || ez(null === (XU = UU.conditions) || void 0 === XU ? void 0 : XU.utm)) return !0;
            const zU = Jo();
            if (zU.utm_source) {
              var cU, yU, QU, AU, FU, oU, DU, EU;
              const XU = !(null === (cU = UU.conditions) || void 0 === cU || null === (cU = cU.utm) || void 0 === cU ? void 0 : cU.utm_campaign) || (null === (yU = UU.conditions) || void 0 === yU || null === (yU = yU.utm) || void 0 === yU ? void 0 : yU.utm_campaign) == zU.utm_campaign,
                YU = !(null === (QU = UU.conditions) || void 0 === QU || null === (QU = QU.utm) || void 0 === QU ? void 0 : QU.utm_source) || (null === (AU = UU.conditions) || void 0 === AU || null === (AU = AU.utm) || void 0 === AU ? void 0 : AU.utm_source) == zU.utm_source,
                NU = !(null === (FU = UU.conditions) || void 0 === FU || null === (FU = FU.utm) || void 0 === FU ? void 0 : FU.utm_medium) || (null === (oU = UU.conditions) || void 0 === oU || null === (oU = oU.utm) || void 0 === oU ? void 0 : oU.utm_medium) == zU.utm_medium,
                IU = !(null === (DU = UU.conditions) || void 0 === DU || null === (DU = DU.utm) || void 0 === DU ? void 0 : DU.utm_term) || (null === (EU = UU.conditions) || void 0 === EU || null === (EU = EU.utm) || void 0 === EU ? void 0 : EU.utm_term) == zU.utm_term;
              return XU && NU && IU && YU
            }
            return !1
          }
          static _logInfo(UU) {
            for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
            fA.info(`[WebExperiments] ${UU}`, zU)
          }
          _applyTransforms(XU, zU, cU) {
            this._is_bot() ? UU._logInfo(hN) : "control" !== zU ? cU.forEach((cU => {
              if (cU.selector) {
                var yU;
                UU._logInfo(`applying transform of variant ${zU} for experiment ${XU} `, cU);
                const QU = null === (yU = document) || void 0 === yU ? void 0 : yU.querySelectorAll(cU.selector);
                null == QU || QU.forEach((UU => {
                  const XU = UU;
                  cU.html && (XU.innerHTML = cU.html), cU.css && XU.setAttribute("style", cU.css)
                }))
              }
            })) : UU._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return TX && this._instance ? bE(TX, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, CI),
      MI = {
        conversations: class {
          constructor(UU) {
            this._instance = UU, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(UU) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = UU.ok, !UU.ok) return;
            const XU = UU.config.conversations;
            ez(XU) || (qz(XU) ? this._isConversationsEnabled = XU : (this._isConversationsEnabled = XU.enabled, this._remoteConfig = XU), this.loadIfEnabled())
          }
          reset() {
            var UU;
            null === (UU = this._conversationsManager) || void 0 === UU || UU.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (jA(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const UU = null == Fz ? void 0 : Fz.__PosthogExtensions__;
            if (UU && !Pz(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const XU = UU.initConversations;
                  if (XU) return this._completeInitialization(XU), void(this._isInitializing = !1);
                  const zU = UU.loadExternalDependency;
                  if (!zU) return void this._handleLoadError(vX);
                  zU(this._instance, "conversations", (XU => {
                    XU || !UU.initConversations ? this._handleLoadError("Could not load conversations script", XU) : this._completeInitialization(UU.initConversations), this._isInitializing = !1
                  }))
                } catch (UU) {
                  this._handleLoadError("Error initializing conversations", UU), this._isInitializing = !1
                }
              } else XI.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(UU) {
            if (this._remoteConfig) try {
              this._conversationsManager = UU(this._remoteConfig, this._instance), this._loadFailed = !1, XI.info("Conversations loaded successfully")
            } catch (UU) {
              this._handleLoadError("Error completing conversations initialization", UU)
            } else XI.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(UU, XU) {
            XI.error(UU, XU), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : XI.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !Lz(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : jA(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : Pz(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? ez(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == Fz ? void 0 : Fz.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var UU, XU;
            return null !== (UU = null === (XU = this._conversationsManager) || void 0 === XU ? void 0 : XU.isVisible()) && void 0 !== UU && UU
          }
          sendMessage(UU, XU, zU) {
            var cU = this;
            return nz((function*() {
              return cU._conversationsManager ? cU._conversationsManager.sendMessage(UU, XU, zU) : (XI.warn(zI), null)
            }))()
          }
          getMessages(UU, XU) {
            var zU = this;
            return nz((function*() {
              return zU._conversationsManager ? zU._conversationsManager.getMessages(UU, XU) : (XI.warn(zI), null)
            }))()
          }
          markAsRead(UU) {
            var XU = this;
            return nz((function*() {
              return XU._conversationsManager ? XU._conversationsManager.markAsRead(UU) : (XI.warn(zI), null)
            }))()
          }
          getTickets(UU) {
            var XU = this;
            return nz((function*() {
              return XU._conversationsManager ? XU._conversationsManager.getTickets(UU) : (XI.warn(zI), null)
            }))()
          }
          requestRestoreLink(UU) {
            var XU = this;
            return nz((function*() {
              return XU._conversationsManager ? XU._conversationsManager.requestRestoreLink(UU) : (XI.warn(zI), null)
            }))()
          }
          restoreFromToken(UU) {
            var XU = this;
            return nz((function*() {
              return XU._conversationsManager ? XU._conversationsManager.restoreFromToken(UU) : (XI.warn(zI), null)
            }))()
          }
          restoreFromUrlToken() {
            var UU = this;
            return nz((function*() {
              return UU._conversationsManager ? UU._conversationsManager.restoreFromUrlToken() : (XI.warn(zI), null)
            }))()
          }
          getCurrentTicketId() {
            var UU, XU;
            return null !== (UU = null === (XU = this._conversationsManager) || void 0 === XU ? void 0 : XU.getCurrentTicketId()) && void 0 !== UU ? UU : null
          }
          getWidgetSessionId() {
            var UU, XU;
            return null !== (UU = null === (XU = this._conversationsManager) || void 0 === XU ? void 0 : XU.getWidgetSessionId()) && void 0 !== UU ? UU : null
          }
          _onIdentityChanged() {
            var UU;
            null === (UU = this._conversationsManager) || void 0 === UU || UU.setIdentity()
          }
          _onIdentityCleared() {
            var UU;
            null === (UU = this._conversationsManager) || void 0 === UU || UU.clearIdentity()
          }
        }
      },
      vI = {
        logs: class extends EI {
          constructor(UU) {
            super({
              get() {
                var XU;
                return null == UU || null === (XU = UU.config) || void 0 === XU ? void 0 : XU.logs
              },
              captureHintKey: sU,
              get remoteConfigWillArrive() {
                var XU, zU;
                return !(null === (XU = UU._shouldDisableFlags) || void 0 === XU ? void 0 : XU.call(UU)) || !!(null === (zU = Fz._POSTHOG_REMOTE_CONFIG) || void 0 === zU || null === (zU = zU[UU.config.token]) || void 0 === zU ? void 0 : zU.config)
              }
            }, (() => function(UU) {
              var XU;
              const zU = {};
              if (zU.distinctId = UU.get_distinct_id(), UU.sessionManager) {
                const {
                  sessionId: XU,
                  windowId: cU,
                  sessionStartTimestamp: yU,
                  lastActivityTimestamp: QU
                } = UU.sessionManager.checkAndGetSessionAndWindowId(!0);
                zU.sessionId = XU, zU.windowId = cU, ez(yU) || (zU.sessionStartTimestamp = yU), ez(QU) || (zU.lastActivityTimestamp = QU)
              }
              if ((null == Fz || null === (XU = Fz.location) || void 0 === XU ? void 0 : XU.href) && (zU.currentUrl = UU.config.disable_capture_url_hashes ? Ey(Fz.location.href) : Fz.location.href), UU.featureFlags) {
                const XU = UU.featureFlags.getFlags();
                XU && XU.length > 0 && (zU.activeFeatureFlags = XU)
              }
              return zU
            }(UU))), this._instance = UU, this.name = BY, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const UU = iA("[logs]"),
              XU = null == Fz ? void 0 : Fz.__PosthogExtensions__;
            if (!XU) return void UU.error("PostHog Extensions not found.");
            const zU = XU.loadExternalDependency;
            if (zU) return UU => {
              zU(this._instance, "logs", (zU => {
                const cU = XU.logs;
                UU(zU, (null == cU ? void 0 : cU.initializeLogs) ? {
                  initialize: UU => cU.initializeLogs(UU),
                  replay(UU, XU) {
                    var zU;
                    return null === (zU = cU.replayConsoleBuffer) || void 0 === zU ? void 0 : zU.call(cU, UU, XU)
                  }
                } : void 0)
              }))
            };
            UU.error(vX)
          }
        }
      },
      VI = {
        metrics: class {
          constructor(UU) {
            this._instance = UU, this._logger = iA("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var UU;
            if (this._disposed) return;
            const XU = !!(null === (UU = this._instance.config.metrics) || void 0 === UU ? void 0 : UU.network);
            XU && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (UU => {
              let XU = !0;
              const zU = () => XU ? (UU => {
                  var XU;
                  const zU = null === (XU = UU.config.metrics) || void 0 === XU ? void 0 : XU.network;
                  return !0 === zU ? {} : zU || void 0
                })(UU) : void 0,
                cU = kI(UU, zU),
                yU = GI(UU, zU);
              return () => {
                XU = !1, cU(), yU()
              }
            })(this._instance) : !XU && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var UU;
            const XU = null === (UU = this._instance) || void 0 === UU || null === (UU = UU.config) || void 0 === UU ? void 0 : UU.metrics;
            var zU;
            return this._core && this._resolvedFrom === XU || (null === (zU = this._core) || void 0 === zU || zU.reset(), this._resolvedFrom = XU, this._core = new rA(this._createHost(), function(UU) {
              var XU, zU, cU, yU, QU;
              const AU = null == UU ? void 0 : UU.resourceAttributes;
              return {
                serviceName: null !== (XU = null == AU ? void 0 : AU["service.name"]) && void 0 !== XU ? XU : null == UU ? void 0 : UU.serviceName,
                serviceVersion: null !== (zU = null == AU ? void 0 : AU["service.version"]) && void 0 !== zU ? zU : null == UU ? void 0 : UU.serviceVersion,
                environment: null !== (cU = null == AU ? void 0 : AU["deployment.environment"]) && void 0 !== cU ? cU : null == UU ? void 0 : UU.environment,
                resourceAttributes: AU,
                beforeSend: null == UU ? void 0 : UU.beforeSend,
                flushIntervalMs: null !== (yU = null == UU ? void 0 : UU.flushIntervalMs) && void 0 !== yU ? yU : 1e4,
                maxSeriesPerFlush: null !== (QU = null == UU ? void 0 : UU.maxSeriesPerFlush) && void 0 !== QU ? QU : 1e3
              }
            }(XU), this._logger)), this._core
          }
          count(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              zU = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(UU, XU, zU)
          }
          gauge(UU, XU, zU) {
            this._getCore().gauge(UU, XU, zU)
          }
          histogram(UU, XU, zU) {
            this._getCore().histogram(UU, XU, zU)
          }
          flush(UU) {
            if (!this._core) return Promise.resolve();
            if (UU) {
              const XU = this._core.drainWindow();
              return XU && this._sendMetricsBatch(XU, UU), Promise.resolve()
            }
            return this._core.flush().catch((UU => this._logger.error("PostHog metrics flush failed:", UU)))
          }
          reset() {
            var UU;
            null === (UU = this._core) || void 0 === UU || UU.reset()
          }
          dispose() {
            var UU, XU;
            this._disposed = !0, null === (UU = this._stopNetworkMetrics) || void 0 === UU || UU.call(this), this._stopNetworkMetrics = void 0, null === (XU = this._core) || void 0 === XU || XU.reset()
          }
          _createHost() {
            const UU = this._instance,
              XU = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !UU.is_capturing()
              },
              _sendMetricsBatch: UU => XU._sendMetricsBatch(UU),
              getLibraryId: () => QU.LIB_NAME,
              getLibraryVersion: () => QU.LIB_VERSION
            }
          }
          _sendMetricsBatch(UU, XU) {
            return new Promise((zU => {
              let cU = !1;
              const yU = UU => {
                  cU || (cU = !0, clearTimeout(QU), zU(UU))
                },
                QU = setTimeout((() => yU({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(ky(ky({
                method: "POST",
                url: this._metricsUrl(),
                data: UU,
                compression: "best-available",
                batchKey: "metrics"
              }, XU && {
                transport: XU
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(UU) {
                  const XU = UU.statusCode;
                  if (XU >= 200 && 300 > XU) yU({
                    kind: "ok"
                  });
                  else if (413 === XU) yU({
                    kind: "too-large"
                  });
                  else if (0 !== XU && 408 !== XU && 429 !== XU && 500 > XU) yU({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${XU}`)
                  });
                  else {
                    var zU;
                    yU({
                      kind: "retry-later",
                      error: null !== (zU = UU.error) && void 0 !== zU ? zU : new Error(`metrics request failed with status ${XU}`)
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
      sI = {
        webMCP: class {
          constructor(UU) {
            this._instance = UU, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const UU = null == hX ? void 0 : hX.modelContext;
            if (!UU || !Bz(UU.registerTool)) return;
            const XU = BI.get(UU);
            if (XU) return XU.instances.add(this._instance), void(this._isPatched = !0);
            const zU = {
                instances: new Set([this._instance])
              },
              cU = UU.registerTool,
              yU = this;
            cN(UU, "registerTool", (UU => {
              const XU = UU;
              return function(UU) {
                let cU = UU;
                for (var QU = arguments.length, AU = new Array(QU > 1 ? QU - 1 : 0), FU = 1; FU < QU; FU++) AU[FU - 1] = arguments[FU];
                try {
                  cU = yU._wrapTool(UU, zU)
                } catch (zU) {
                  return XU.call(this, UU, ...AU)
                }
                return XU.call(this, cU, ...AU)
              }
            })), UU.registerTool !== cU && (BI.set(UU, zU), this._isPatched = !0)
          }
          _wrapTool(UU, XU) {
            if (!UU || !Bz(UU.execute)) return UU;
            const zU = UU.execute,
              cU = this,
              {
                tool: yU,
                injected: QU
              } = function(UU, XU) {
                const zU = {
                    intent: !1,
                    model: !1
                  },
                  cU = UU.inputSchema;
                if (! function(UU) {
                    return !!Pz(UU) || Zz(UU) && Object.keys(UU).every((UU => ZI.has(UU) || UU.startsWith("x-"))) && !0 !== UU.additionalProperties && !Zz(UU.additionalProperties) && (!UU.type || "object" === UU.type) && (!UU.properties || Zz(UU.properties)) && (!UU.required || Gz(UU.required))
                  }(cU)) return {
                  tool: dI(UU),
                  injected: zU
                };
                const yU = (null == cU ? void 0 : cU.properties) || {},
                  QU = UU => WI(yU, UU) || Gz(null == cU ? void 0 : cU.required) && cU.required.includes(UU);
                if (zU.intent = XU.intent && !QU("context"), zU.model = XU.model && !QU("llm_model"), !zU.intent && !zU.model) return {
                  tool: dI(UU),
                  injected: zU
                };
                const AU = ky({}, yU),
                  FU = Gz(null == cU ? void 0 : cU.required) ? [...cU.required] : [];
                return zU.intent && (AU.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, FU.includes("context") || FU.push("context")), zU.model && (AU.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, FU.includes("llm_model") || FU.push("llm_model")), {
                  tool: dI(UU, ky(ky({}, cU), {}, {
                    type: (null == cU ? void 0 : cU.type) || "object",
                    properties: AU,
                    required: FU
                  })),
                  injected: zU
                }
              }(UU, function(UU) {
                const XU = {
                  intent: !1,
                  model: !1
                };
                for (const zU of UU.instances) {
                  const UU = PI(zU.config.capture_webmcp);
                  XU.intent || (XU.intent = !0 === (null == UU ? void 0 : UU.intent)), XU.model || (XU.model = !0 === (null == UU ? void 0 : UU.model))
                }
                return XU
              }(XU));
            return Object.defineProperty(yU, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var AU = arguments.length, FU = new Array(AU), oU = 0; oU < AU; oU++) FU[oU] = arguments[oU];
                const DU = new Date,
                  EU = function(UU, XU) {
                    if (!Zz(UU)) return {};
                    try {
                      const zU = XU.intent ? LI(UU.context, 2048, !0) : void 0,
                        cU = XU.model ? LI(UU.llm_model, 256) : void 0;
                      return ky(ky({}, zU && "{}" !== zU ? {
                        intent: zU
                      } : {}), cU && "unknown" !== cU.toLowerCase() ? {
                        model: cU
                      } : {})
                    } catch (UU) {
                      return {}
                    }
                  }(FU[0], QU),
                  YU = function(UU, XU) {
                    const zU = UU[0];
                    if (!Zz(zU)) return UU;
                    try {
                      const cU = XU.intent && WI(zU, "context"),
                        yU = XU.model && WI(zU, "llm_model");
                      if (!cU && !yU) return UU;
                      const QU = ky({}, zU);
                      return cU && delete QU.context, yU && delete QU.llm_model, [QU, ...UU.slice(1)]
                    } catch (XU) {
                      return UU
                    }
                  }(FU, QU);
                let NU;
                try {
                  NU = zU.apply(this === yU ? UU : this, YU)
                } catch (UU) {
                  throw cU._captureToolCall(XU, yU, DU, !0, EU), UU
                }
                return (IU = NU) && "function" == typeof IU.then ? Promise.resolve(NU).then((UU => (cU._captureToolCall(XU, yU, DU, eI(UU), EU), UU)), (UU => {
                  throw cU._captureToolCall(XU, yU, DU, !0, EU), UU
                })) : (cU._captureToolCall(XU, yU, DU, eI(NU), EU), NU);
                var IU
              }
            }), yU
          }
          _captureToolCall(UU, XU, zU, cU, yU) {
            const QU = Date.now() - zU.getTime();
            for (const AU of UU.instances) {
              const FU = PI(AU.config.capture_webmcp);
              if (FU) try {
                AU.capture("$mcp_tool_call", ky(ky({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: XU.name,
                  $mcp_resource_name: XU.name,
                  $mcp_tool_description: XU.description,
                  $mcp_server_name: null == Uz ? void 0 : Uz.hostname,
                  $mcp_duration_ms: QU,
                  $mcp_is_error: cU
                }, FU.intent && yU.intent ? {
                  $mcp_intent: yU.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), FU.model && yU.model ? {
                  $mcp_llm_model: yU.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: zU
                })
              } catch (UU) {
                continue
              }
            }
          }
        }
      };
    lY.__defaultExtensionClasses = ky({}, ky(ky(ky(ky(ky(ky(ky(ky(ky(ky(ky(ky(ky(ky({}, CI), wI), qI), OI), SI), rI), fI), uI), iI), HI), MI), vI), VI), sI));
    const nI = function() {
      QU.SDK_DIST_CHANNEL = "npm";
      const UU = WY[MY] = new lY;
      return function() {
        function UU() {
          UU.done || (UU.done = !0, HE = !1, MA(WY, (function(UU) {
            UU._dom_loaded()
          })))
        }(null == hX ? void 0 : hX.addEventListener) ? "complete" === hX.readyState ? UU() : JA(hX, "DOMContentLoaded", UU, {
          capture: !1
        }): KX && fA.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), UU
    }()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);