export const id = 277;
export const ids = [277];
export const modules = {
  40563: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => NJ,
      f: () => al
    });
    const YB = "0.9.4",
      DB = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: YB
      };
    var QB = DB;
    const oB = "$early_access_features",
      jB = "$active_feature_flags",
      yB = "$feature_flag_details",
      JB = "$feature_flag_errors",
      MB = "$feature_flag_evaluated_at",
      PB = "$feature_flag_request_id",
      zB = "$minimal_flag_called_events",
      lB = "$enabled_feature_flags",
      pB = "$stored_group_properties",
      qB = "$stored_person_properties",
      ZB = "$flag_call_reported",
      NB = "$flag_call_reported_session_id",
      RB = "$feature_flag_payloads",
      WB = "$override_feature_flags",
      AB = "$override_feature_flag_payloads",
      VB = "visibilitychange",
      SB = "$people_distinct_id",
      nB = "distinct_id",
      UB = "$device_id",
      fB = "$device_model",
      kB = "__alias",
      dB = "__cmpns",
      KB = "$fbc",
      uB = "$fbc_persistence",
      mB = "$fbp",
      IB = "$fbp_persistence",
      FB = "__timers",
      iB = "$autocapture_disabled_server_side",
      LB = "$heatmaps_enabled_server_side",
      gB = "$exception_capture_enabled_server_side",
      rB = "$error_tracking_suppression_rules",
      XB = "$error_tracking_capture_extension_exceptions",
      wB = "$web_vitals_enabled_server_side",
      EB = "$dead_clicks_enabled_server_side",
      cB = "$product_tours_enabled_server_side",
      hB = "$logs_capture_enabled_server_side",
      aB = "$web_vitals_allowed_metrics",
      eB = "$session_recording_remote_config",
      TB = "$session_recording_enabled_server_side",
      bB = "$replay_sample_rate",
      CB = "$replay_override_sampling",
      HB = "$replay_override_linked_flag",
      vB = "$replay_override_url_trigger",
      sB = "$replay_override_event_trigger",
      xB = "$sesid",
      tB = "$session_is_sampled",
      BO = "$session_past_minimum_duration",
      OO = "$session_recording_url_trigger_activated_session",
      GO = "$session_recording_event_trigger_activated_session",
      YO = "$debug_first_full_snapshot_timestamp",
      DO = "$sess_rec_flush_size",
      QO = "$groups",
      oO = "$surveys",
      jO = "$surveys_loaded_at",
      yO = "$surveys_activated",
      JO = "$surveys_activated_session",
      MO = "$surveys_activated_timestamps",
      PO = "ph_product_tours",
      zO = "$product_tours_activated",
      lO = "$product_tours_activated_session",
      pO = "$conversations_widget_session_id",
      qO = "$conversations_ticket_id",
      ZO = "$conversations_widget_state",
      NO = "$conversations_user_traits",
      RO = "$user_state",
      WO = "$client_session_props",
      AO = "$capture_rate_limit",
      VO = "$initial_campaign_params",
      SO = "$initial_referrer_info",
      nO = "$initial_person_info",
      UO = "$epp",
      fO = "$posthog_cookieless",
      kO = "$cookieless_mode",
      dO = "$sdk_debug_extensions_init_method",
      KO = "$sdk_debug_extensions_init_time_ms",
      uO = "$sdk_debug_recording_script_not_loaded",
      mO = "$sdk_debug_replay_stale_config",
      IO = "$sdk_debug_replay_event_trigger_status",
      FO = "$sdk_debug_replay_linked_flag_trigger_status",
      iO = "$sdk_debug_replay_matched_recording_trigger_groups",
      LO = "$sdk_debug_replay_pending_trigger_conditions",
      gO = "$sdk_debug_replay_remote_trigger_matching_config",
      rO = "$sdk_debug_replay_trigger_groups_count",
      XO = "$sdk_debug_replay_url_trigger_status",
      wO = "$session_recording_start_reason",
      EO = "PostHog loadExternalDependency extension not found.",
      cO = "anonymous",
      hO = "identified",
      aO = "identified_only",
      eO = "beforeunload",
      TO = "$pageview",
      bO = "$pageleave",
      CO = "$identify",
      HO = "$groupidentify",
      vO = "u" > typeof window ? window : void 0,
      sO = "u" > typeof globalThis ? globalThis : vO,
      xO = null == sO ? void 0 : sO.navigator,
      tO = null == sO ? void 0 : sO.document,
      BG = null == sO ? void 0 : sO.location,
      OG = null == sO ? void 0 : sO.fetch,
      GG = (null == sO ? void 0 : sO.XMLHttpRequest) && "withCredentials" in new sO.XMLHttpRequest ? sO.XMLHttpRequest : void 0,
      YG = null == sO ? void 0 : sO.AbortController,
      DG = null == sO ? void 0 : sO.CompressionStream,
      QG = null == xO ? void 0 : xO.userAgent,
      oG = "undefined" != typeof globalThis ? globalThis : vO;
    oG && "undefined" == typeof self && (oG.self = oG), oG && "undefined" == typeof File && (oG.File = function() {});
    const jG = null != vO ? vO : {};
    var yG = function(BB) {
        return BB.AnonymousId = "anonymous_id", BB.DistinctId = "distinct_id", BB.Props = "props", BB.EnablePersonProcessing = "enable_person_processing", BB.PersonMode = "person_mode", BB.FeatureFlagDetails = "feature_flag_details", BB.FeatureFlags = "feature_flags", BB.FeatureFlagPayloads = "feature_flag_payloads", BB.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", BB.BootstrapFeatureFlags = "bootstrap_feature_flags", BB.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", BB.OverrideFeatureFlags = "override_feature_flags", BB.Queue = "queue", BB.AiQueue = "ai_queue", BB.AiCaptureQueue = "ai_capture_queue", BB.LogsQueue = "logs_queue", BB.OptedOut = "opted_out", BB.SessionId = "session_id", BB.SessionStartTimestamp = "session_start_timestamp", BB.SessionLastTimestamp = "session_timestamp", BB.PersonProperties = "person_properties", BB.GroupProperties = "group_properties", BB.InstalledAppBuild = "installed_app_build", BB.InstalledAppVersion = "installed_app_version", BB.SessionReplay = "session_replay", BB.PushRegistered = "push_registered", BB.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", BB.SurveyLastSeenDate = "survey_last_seen_date", BB.SurveysInProgress = "surveys_in_progress", BB.SurveysSeen = "surveys_seen", BB.Surveys = "surveys", BB.RemoteConfig = "remote_config", BB.FlagsEndpointWasHit = "flags_endpoint_was_hit", BB.DeviceId = "device_id", BB
      }({}),
      JG = function(BB) {
        return BB.GZipJS = "gzip-js", BB.Base64 = "base64", BB
      }({});
    const MG = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      PG = ["token"];

    function zG(BB, OB) {
      return -1 !== BB.indexOf(OB)
    }
    const lG = function(BB) {
        return BB.trim()
      },
      pG = function(BB) {
        return BB.replace(/^\$/, "")
      };

    function qG(BB) {
      var OB;
      const GB = [];
      return null !== (OB = JSON.stringify(BB, (function(BB, OB) {
        if ("bigint" == typeof OB) return OB.toString();
        if ("function" != typeof OB && "symbol" != typeof OB) {
          if (OB instanceof Error) return {
            name: OB.name,
            message: OB.message,
            stack: OB.stack
          };
          if (OB && "object" == typeof OB) {
            for (; GB.length > 0 && GB[GB.length - 1] !== this;) GB.pop();
            if (GB.includes(OB)) return "[Circular]";
            GB.push(OB)
          }
          return OB
        }
      }))) && void 0 !== OB ? OB : "null"
    }
    const ZG = Object.prototype,
      NG = ZG.hasOwnProperty,
      RG = ZG.toString,
      WG = Array.isArray || function(BB) {
        return "[object Array]" === RG.call(BB)
      },
      AG = BB => "function" == typeof BB,
      VG = BB => BB === Object(BB) && !WG(BB),
      SG = BB => {
        if (VG(BB)) {
          for (const OB in BB)
            if (NG.call(BB, OB)) return !1;
          return !0
        }
        return !1
      },
      nG = BB => void 0 === BB,
      UG = BB => "[object String]" == RG.call(BB),
      fG = BB => UG(BB) && 0 === BB.trim().length,
      kG = BB => null === BB,
      dG = BB => nG(BB) || kG(BB),
      KG = BB => "[object Number]" == RG.call(BB) && BB == BB,
      uG = BB => KG(BB) && BB > 0,
      mG = BB => "[object Boolean]" === RG.call(BB),
      IG = BB => zG(MG, BB),
      FG = BB => zG(PG, BB);

    function iG(BB) {
      return null === BB || "object" != typeof BB
    }

    function LG(BB, OB) {
      return {}.toString.call(BB) === `[object ${OB}]`
    }

    function gG(BB) {
      switch ({}.toString.call(BB)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return XG(BB, Error)
      }
    }

    function rG(BB) {
      return "u" > typeof Event && XG(BB, Event)
    }

    function XG(BB, OB) {
      try {
        return BB instanceof OB
      } catch (BB) {
        return !1
      }
    }
    const wG = [!0, "true", 1, "1", "yes"],
      EG = BB => zG(wG, BB),
      cG = [!1, "false", 0, "0", "no"];

    function hG(BB, OB, GB, YB, DB, QB, oB) {
      try {
        var jB = BB[QB](oB),
          yB = jB.value
      } catch (BB) {
        return void GB(BB)
      }
      jB.done ? OB(yB) : Promise.resolve(yB).then(YB, DB)
    }

    function aG(BB) {
      return function() {
        var OB = this,
          GB = arguments;
        return new Promise((function(YB, DB) {
          var QB = BB.apply(OB, GB);

          function oB(BB) {
            hG(QB, YB, DB, oB, jB, "next", BB)
          }

          function jB(BB) {
            hG(QB, YB, DB, oB, jB, "throw", BB)
          }
          oB(void 0)
        }))
      }
    }
    const eG = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      TG = new Map,
      bG = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!BB) return !1;
        const GB = function(BB, OB) {
            let GB = "";
            for (let YB = 0; OB.length > YB; YB++) {
              const BB = OB[YB];
              GB += BB.length + ":" + BB
            }
            return BB.length + ":" + BB + "|" + OB.length + ":" + GB
          }(BB, OB),
          YB = TG.get(GB);
        if (void 0 !== YB) return YB;
        const DB = BB.toLowerCase(),
          QB = eG.concat(OB).some((BB => -1 !== DB.indexOf(BB.toLowerCase())));
        return 256 > TG.size || TG.clear(), TG.set(GB, QB), QB
      };

    function CG(BB, OB, GB, YB, DB) {
      return OB > GB && (YB.warn("min cannot be greater than max."), OB = GB), KG(BB) ? BB > GB ? (YB.warn(" cannot be  greater than max: " + GB + ". Using max value instead."), GB) : OB > BB ? (YB.warn(" cannot be less than min: " + OB + ". Using min value instead."), OB) : BB : (YB.warn(" must be a number. using max or fallback. max: " + GB + ", fallback: " + DB), CG(null != DB ? DB : GB, OB, GB, YB))
    }
    var HG = class {
      constructor(BB) {
        this._buckets = {}, this._onBucketRateLimited = BB._onBucketRateLimited, this._bucketSize = CG(BB.bucketSize, 0, 100, BB._logger), this._refillRate = CG(BB.refillRate, 0, this._bucketSize, BB._logger), this._refillInterval = CG(BB.refillInterval, 0, 864e5, BB._logger)
      }
      _applyRefill(BB, OB) {
        const GB = Math.floor((OB - BB.lastAccess) / this._refillInterval);
        GB > 0 && (BB.tokens = Math.min(BB.tokens + GB * this._refillRate, this._bucketSize), BB.lastAccess = BB.lastAccess + GB * this._refillInterval)
      }
      consumeRateLimit(BB) {
        var OB;
        const GB = Date.now(),
          YB = String(BB);
        let DB = this._buckets[YB];
        return DB ? this._applyRefill(DB, GB) : (DB = {
          tokens: this._bucketSize,
          lastAccess: GB
        }, this._buckets[YB] = DB), 0 === DB.tokens || (DB.tokens--, 0 === DB.tokens && (null === (OB = this._onBucketRateLimited) || void 0 === OB || OB.call(this, BB)), 0 === DB.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const vG = "Mobile",
      sG = "Android",
      xG = "Tablet",
      tG = "Android Tablet",
      BY = "iPad",
      OY = "Apple Watch",
      GY = "Safari",
      YY = "BlackBerry",
      DY = "Samsung Internet",
      QY = "Chrome",
      oY = "Chrome iOS",
      jY = "Internet Explorer",
      yY = "Internet Explorer Mobile",
      JY = "Opera",
      MY = "Microsoft Edge",
      PY = "Firefox",
      zY = "Firefox iOS",
      lY = "Nintendo",
      pY = "PlayStation",
      qY = "Xbox",
      ZY = "Android Mobile",
      NY = "Mobile Safari",
      RY = "Windows",
      WY = "Windows Phone",
      AY = "Nokia",
      VY = "Ouya",
      SY = "Generic " + vG.toLowerCase(),
      nY = "Generic " + xG.toLowerCase(),
      UY = "Konqueror",
      fY = "Oculus Browser",
      kY = "Vivaldi",
      dY = "Yandex",
      KY = "Whale",
      uY = "DuckDuckGo",
      mY = "Pale Moon",
      IY = "Waterfox",
      FY = "Brave",
      iY = "Claude",
      LY = "Codex",
      gY = "ChatGPT",
      rY = "Google Search App",
      XY = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      wY = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      EY = new RegExp(qY, "i"),
      cY = new RegExp("PlayStation \\w+", "i"),
      hY = new RegExp("Nintendo \\w+", "i"),
      aY = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      eY = {
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
      TY = function(BB, OB, GB, YB) {
        OB = OB || "";
        const DB = function(BB) {
          return (null == BB ? void 0 : BB.brave) ? FY : null
        }(GB);
        return DB || ((null == YB ? void 0 : YB.detectGoogleSearchApp) && zG(BB, "GSA/") ? rY : zG(BB, " OPR/") && zG(BB, "Mini") ? "Opera Mini" : zG(BB, " OPR/") ? JY : aY.test(BB) ? YY : zG(BB, "IEMobile") || zG(BB, "WPDesktop") ? yY : zG(BB, "OculusBrowser") ? fY : zG(BB, "SamsungBrowser") ? DY : zG(BB, "Edge") || zG(BB, "Edg/") ? MY : zG(BB, "Vivaldi/") ? kY : zG(BB, "YaBrowser/") ? dY : zG(BB, "Whale/") ? KY : zG(BB, "DuckDuckGo/") || zG(BB, "Ddg/") ? uY : zG(BB, "Claude/") ? iY : zG(BB, "Codex/") ? LY : zG(BB, "ChatGPT/") ? gY : zG(BB, "FBIOS") ? "Facebook Mobile" : zG(BB, "UCWEB") || zG(BB, "UCBrowser") ? "UC Browser" : zG(BB, "CriOS") ? oY : zG(BB, "CrMo") || zG(BB, QY) ? QY : zG(BB, sG) && zG(BB, GY) ? ZY : zG(BB, "FxiOS") ? zY : zG(BB.toLowerCase(), UY.toLowerCase()) ? UY : zG(BB, "Brave/") ? FY : ((BB, OB) => OB && zG(OB, "Apple") || function(BB) {
          return zG(BB, GY) && !zG(BB, QY) && !zG(BB, sG)
        }(BB))(BB, OB) ? zG(BB, vG) ? NY : GY : zG(BB, "PaleMoon/") ? mY : zG(BB, "Waterfox/") ? IY : zG(BB, PY) ? PY : zG(BB, "MSIE") || zG(BB, "Trident/") ? jY : zG(BB, "Gecko") ? PY : "")
      },
      bY = {
        [yY]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [MY]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [QY]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [oY]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [GY]: [XY],
        [NY]: [XY],
        [JY]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [PY]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [zY]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [UY]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [YY]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), XY],
        [ZY]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [DY]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [fY]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [kY]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [dY]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [KY]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [FY]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [iY]: [wY],
        [LY]: [wY],
        [gY]: [wY],
        [uY]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [mY]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [IY]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [rY]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [jY]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      CY = function(BB, OB, GB, YB) {
        const DB = TY(BB, OB, GB, YB),
          QB = bY[DB];
        if (nG(QB)) return null;
        for (let oB = 0; QB.length > oB; oB++) {
          const OB = BB.match(QB[oB]);
          if (OB) return parseFloat(OB[OB.length - 2])
        }
        return null
      },
      HY = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), BB => [qY, BB && BB[1] || ""]],
        [new RegExp(lY, "i"), [lY, ""]],
        [new RegExp(pY, "i"), [pY, ""]],
        [aY, [YY, ""]],
        [new RegExp(RY, "i"), (BB, OB) => {
          if (/Phone/.test(OB) || /WPDesktop/.test(OB)) return [WY, ""];
          if (new RegExp(vG).test(OB) && !/IEMobile\b/.test(OB)) return ["Windows Mobile", ""];
          const GB = /Windows NT ([0-9.]+)/i.exec(OB);
          if (GB && GB[1]) {
            let BB = eY[GB[1]] || "";
            return /arm/i.test(OB) && (BB = "RT"), [RY, BB]
          }
          return [RY, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, BB => BB && BB[3] ? ["iOS", [BB[3], BB[4], BB[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, BB => {
          let OB = "";
          return BB && BB.length >= 3 && (OB = nG(BB[2]) ? BB[3] : BB[2]), ["watchOS", OB]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), BB => BB && BB[2] ? [sG, [BB[2], BB[3], BB[4] || "0"].join(".")] : [sG, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, BB => {
          const OB = ["Mac OS X", ""];
          return BB && BB[1] && (OB[1] = [BB[1], BB[2], BB[3] || "0"].join(".")), OB
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      vY = function(BB) {
        for (let OB = 0; HY.length > OB; OB++) {
          const [GB, YB] = HY[OB], DB = GB.exec(BB), QB = DB && (AG(YB) ? YB(DB, BB) : YB);
          if (QB) return QB
        }
        return ["", ""]
      },
      sY = function(BB) {
        return hY.test(BB) ? lY : cY.test(BB) ? pY : EY.test(BB) ? qY : new RegExp(VY, "i").test(BB) ? VY : new RegExp("(Windows Phone|WPDesktop)", "i").test(BB) ? WY : /iPad/.test(BB) ? BY : /iPod/.test(BB) ? "iPod Touch" : /iPhone/.test(BB) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(BB) ? OY : aY.test(BB) ? YY : /(kobo)\s(ereader|touch)/i.test(BB) ? "Kobo" : new RegExp(AY, "i").test(BB) ? AY : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(BB) || /(kf[a-z]+)( bui|\)).+silk\//i.test(BB) ? "Kindle Fire" : /(Android|ZTE)/i.test(BB) ? new RegExp(vG).test(BB) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(BB) || /pixel[\daxl ]{1,6}/i.test(BB) && !/pixel c/i.test(BB) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(BB) || /lmy47v/i.test(BB) && !/QTAQZ3/i.test(BB) ? sG : tG : new RegExp("(pda|Mobile)", "i").test(BB) ? SY : new RegExp(xG, "i").test(BB) && !new RegExp("Tablet pc", "i").test(BB) ? nY : ""
      },
      xY = function(BB, OB) {
        var GB;
        const YB = sY(BB);
        return YB === BY || YB === tG || "Kobo" === YB || "Kindle Fire" === YB || YB === nY ? xG : YB === lY || YB === qY || YB === pY || YB === VY ? "Console" : YB === OY ? "Wearable" : YB ? vG : "Android" === (null == OB ? void 0 : OB.userAgentDataPlatform) && (null !== (GB = null == OB ? void 0 : OB.maxTouchPoints) && void 0 !== GB ? GB : 0) > 0 ? 600 > Math.min(null !== (DB = null == OB ? void 0 : OB.screenWidth) && void 0 !== DB ? DB : 0, null !== (QB = null == OB ? void 0 : OB.screenHeight) && void 0 !== QB ? QB : 0) / (null !== (oB = null == OB ? void 0 : OB.devicePixelRatio) && void 0 !== oB ? oB : 1) ? vG : xG : "Desktop";
        var DB, QB, oB
      },
      tY = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      BD = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", tY],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", tY],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", tY],
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
      OD = "[Truncated]",
      GD = "[Unserializable]";

    function YD(BB) {
      let OB = "";
      for (let GB = 0; BB.length > GB; GB++) {
        const YB = BB.charCodeAt(GB);
        if (55296 > YB || YB > 56319) OB += 56320 > YB || YB > 57343 ? BB[GB] : "\ufffd";
        else {
          const YB = BB.charCodeAt(GB + 1);
          56320 > YB || YB > 57343 ? OB += "\ufffd" : (OB += BB[GB] + BB[GB + 1], GB++)
        }
      }
      return OB
    }

    function DD(BB, OB) {
      if (!OB) return BB;
      let GB = [];
      try {
        GB = Object.keys(OB)
      } catch (BB) {
        GB = []
      }
      for (const YB of GB) {
        let GB;
        try {
          GB = OB[YB]
        } catch (BB) {
          GB = GD
        }
        Object.defineProperty(BB, YB, {
          value: GB,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return BB
    }
    Date, Date;
    const QD = 3e5;
    var oD = class {
      record(BB) {
        if ("too-large" === BB.kind) return;
        if ("retry-later" !== BB.kind) return void this.reset();
        if (!BB.retryAfterMs) return;
        const OB = this.isOpen(),
          GB = Date.now(),
          YB = Math.min(BB.retryAfterMs, QD);
        if (!OB) return this._installedAt = GB, void(this._until = GB + YB);
        this._until = Math.max(this._until, Math.min(GB + YB, this._installedAt + QD))
      }
      remainingMs() {
        const BB = Date.now();
        if (this._installedAt - 5e3 > BB) return this.reset(), 0;
        const OB = Math.min(QD, Math.max(0, this._until - BB));
        return 0 === OB && this.reset(), OB
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
    const jD = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function yD(BB, OB) {
      return "string" == typeof(GB = BB) && jD.test(GB) ? BB : OB();
      var GB
    }

    function JD(BB, OB) {
      const GB = new Error(OB);
      try {
        Object.defineProperty(GB, "name", {
          value: BB,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (BB) {}
      return GB
    }

    function MD(BB) {
      return BB ? BB.split("#")[0] : BB
    }

    function PD(BB) {
      try {
        return BB()
      } catch (BB) {
        return
      }
    }

    function zD(BB, OB) {
      const GB = setTimeout(BB, OB);
      return null != GB && GB.unref && (null == GB || GB.unref()), GB
    }

    function lD(BB, OB, GB) {
      return pD.apply(this, arguments)
    }

    function pD() {
      return (pD = aG((function*(BB, OB, GB) {
        let YB;
        try {
          return yield Promise.race([BB, new Promise(((BB, DB) => {
            YB = zD((() => {
              try {
                null == GB || GB(), BB()
              } catch (BB) {
                DB(BB)
              }
            }), OB)
          }))])
        } finally {
          clearTimeout(YB)
        }
      }))).apply(this, arguments)
    }

    function qD(BB) {
      return qD = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, qD(BB)
    }

    function ZD(BB, OB, GB) {
      return (OB = function(BB) {
        var OB = function(BB) {
          if ("object" != qD(BB) || !BB) return BB;
          var OB = BB[Symbol.toPrimitive];
          if (void 0 !== OB) {
            var GB = OB.call(BB, "string");
            if ("object" != qD(GB)) return GB;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(BB)
        }(BB);
        return "symbol" == qD(OB) ? OB : OB + ""
      }(OB)) in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }

    function ND(BB, OB) {
      var GB = Object.keys(BB);
      if (Object.getOwnPropertySymbols) {
        var YB = Object.getOwnPropertySymbols(BB);
        OB && (YB = YB.filter((function(OB) {
          return Object.getOwnPropertyDescriptor(BB, OB).enumerable
        }))), GB.push.apply(GB, YB)
      }
      return GB
    }

    function RD(BB) {
      for (var OB = 1; arguments.length > OB; OB++) {
        var GB = null != arguments[OB] ? arguments[OB] : {};
        OB % 2 ? ND(Object(GB), !0).forEach((function(OB) {
          ZD(BB, OB, GB[OB])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(GB)) : ND(Object(GB)).forEach((function(OB) {
          Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(GB, OB))
        }))
      }
      return BB
    }
    let WD, AD, VD, SD;

    function nD(BB) {
      var OB;
      const GB = globalThis._posthogChunkIds,
        YB = globalThis._debugIds;
      if (!GB && !YB) return;
      const DB = GB ? Object.keys(GB) : [],
        QB = YB ? Object.keys(YB) : [];
      if (SD && UD(GB, DB, AD) && UD(YB, QB, VD)) return SD;
      AD = GB ? RD({}, GB) : void 0, VD = YB ? RD({}, YB) : void 0, SD = {}, null !== (OB = WD) && void 0 !== OB || (WD = {});
      const oB = (OB, GB) => {
        for (const DB of OB) {
          const OB = GB[DB];
          if (!OB) continue;
          const QB = null == WD ? void 0 : WD[DB];
          if (QB) {
            SD[QB] = OB;
            continue
          }
          const oB = BB(DB);
          for (let BB = oB.length - 1; BB >= 0; BB--) {
            var YB;
            const GB = null === (YB = oB[BB]) || void 0 === YB ? void 0 : YB.filename;
            if (GB) {
              SD[GB] = OB, WD[DB] = GB;
              break
            }
          }
        }
      };
      return YB && oB(QB, YB), GB && oB(DB, GB), SD
    }

    function UD(BB, OB, GB) {
      return BB && GB ? OB.length === Object.keys(GB).length && OB.every((OB => BB[OB] === GB[OB])) : BB === GB
    }
    var fD = class {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = BB, this.stackParser = OB, this.modifiers = GB
      }
      buildFromUnknown(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = OB && OB.mechanism || {
            handled: !0,
            type: "generic"
          },
          YB = this.buildCoercingContext(GB, OB, 0).apply(BB),
          DB = this.buildParsingContext(OB),
          QB = this.parseStacktrace(YB, DB);
        return {
          $exception_list: this.convertToExceptionList(QB, GB),
          $exception_level: "error"
        }
      }
      modifyFrames(BB) {
        var OB = this;
        return aG((function*() {
          for (const GB of BB) GB.stacktrace && GB.stacktrace.frames && WG(GB.stacktrace.frames) && (GB.stacktrace.frames = yield OB.applyModifiers(GB.stacktrace.frames));
          return BB
        }))()
      }
      coerceFallback(BB) {
        var OB;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (OB = BB.syntheticException) || void 0 === OB ? void 0 : OB.stack,
          synthetic: !0
        }
      }
      parseStacktrace(BB, OB) {
        var GB;
        let YB, DB;
        if (null != BB.cause && (YB = this.parseStacktrace(BB.cause, OB)), "" != BB.stack && null != BB.stack) try {
          DB = this.applyChunkIds(this.stackParser(BB.stack, BB.synthetic ? OB.skipFirstLines : 0), OB.chunkIdMap)
        } catch (BB) {}
        return RD(RD({}, BB), {}, {
          cause: YB,
          stack: DB,
          errors: null === (GB = BB.errors) || void 0 === GB ? void 0 : GB.map((BB => this.parseStacktrace(BB, OB)))
        })
      }
      applyChunkIds(BB, OB) {
        return BB.map((BB => (BB.filename && OB && (BB.chunk_id = OB[BB.filename]), BB)))
      }
      applyCoercers(BB, OB) {
        for (const GB of this.coercers)
          if (GB.match(BB)) return GB.coerce(BB, OB);
        return this.coerceFallback(OB)
      }
      applyModifiers(BB) {
        var OB = this;
        return aG((function*() {
          let GB = BB;
          for (const BB of OB.modifiers) GB = yield BB(GB);
          return GB
        }))()
      }
      convertToExceptionList(BB, OB) {
        const GB = [],
          YB = (BB, DB, QB) => {
            var oB;
            const jB = GB.length,
              yB = void 0 === DB ? RD(RD({
                type: "string" == typeof OB.type && OB.type.length > 0 ? OB.type : "generic"
              }, "boolean" == typeof OB.handled ? {
                handled: OB.handled
              } : void 0 === OB.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof OB.synthetic ? OB.synthetic : BB.synthetic,
                exception_id: jB
              }) : {
                type: "chained",
                source: QB,
                synthetic: BB.synthetic,
                exception_id: jB,
                parent_id: DB
              },
              JB = {
                type: BB.type,
                value: BB.value,
                mechanism: yB
              };
            BB.stack && (JB.stacktrace = {
              type: "raw",
              frames: BB.stack
            }), GB.push(JB), BB.cause && YB(BB.cause, jB, "cause");
            for (const OB of null !== (oB = BB.errors) && void 0 !== oB ? oB : []) YB(OB, jB, "member")
          };
        return YB(BB), GB
      }
      buildParsingContext(BB) {
        var OB;
        return {
          chunkIdMap: nD(this.stackParser),
          skipFirstLines: null !== (OB = BB.skipFirstLines) && void 0 !== OB ? OB : 1
        }
      }
      getAggregateErrors(BB) {
        try {
          if (gG(BB)) {
            let GB = Object.getPrototypeOf(BB);
            for (let YB = 0; GB && 100 > YB; YB++) {
              var OB;
              const YB = null === (OB = Object.getOwnPropertyDescriptor(GB, "constructor")) || void 0 === OB ? void 0 : OB.value;
              if ("function" == typeof YB && "AggregateError" === YB.name) {
                const OB = BB.errors;
                return WG(OB) ? OB : void 0
              }
              GB = Object.getPrototypeOf(GB)
            }
          }
        } catch (BB) {}
      }
      buildCoercingContext(BB, OB) {
        var GB = this;
        let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          DB = 0,
          QB = 0,
          oB = !1;
        const jB = new Set,
          yB = [],
          JB = {},
          MB = function(BB, OB) {
            let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const MB = PB(OB, YB),
              zB = MB.apply;
            if (MB.apply = OB => {
                yB.push(BB);
                try {
                  return zB(OB)
                } finally {
                  yB.pop()
                }
              }, YB > 4 || YB > 0 && -1 !== yB.indexOf(BB)) return GB.coerceFallback(MB);
            const lB = "object" == typeof BB && null !== BB || "function" == typeof BB;
            if (0 === YB && DB >= 50 || lB && jB.has(BB)) return;
            lB && jB.add(BB), 0 === YB && DB++;
            const pB = GB.getAggregateErrors(BB);
            let qB, ZB;
            oB || (oB = !!pB);
            try {
              if (qB = GB.applyCoercers(BB, MB), !qB) throw JB
            } catch (BB) {
              if (BB === JB) return void(0 === YB && DB--);
              if (!oB) throw BB;
              qB = GB.coerceFallback(MB)
            }
            if (!pB || DB >= 50) return qB;
            try {
              ZB = pB.length
            } catch (BB) {
              return qB
            }
            if (!Number.isInteger(ZB) || 0 > ZB || ZB > 4294967295) return qB;
            const NB = [];
            for (let oB = 0; 50 > DB && 1e3 > QB && ZB > oB; oB++) {
              let YB;
              QB++;
              try {
                YB = MB.next(pB[oB])
              } catch (BB) {
                DB++, YB = GB.coerceFallback(PB(OB + 1))
              }
              YB && NB.push(YB)
            }
            return RD(RD({}, qB), {}, {
              errors: NB
            })
          },
          PB = function(GB) {
            let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return RD(RD({}, OB), {}, {
              syntheticException: 0 == GB ? OB.syntheticException : void 0,
              mechanism: 0 == GB ? BB : {},
              apply(BB) {
                const OB = MB(BB, GB, YB + 1);
                if (!OB) throw JB;
                return OB
              },
              next: BB => MB(BB, GB + 1)
            })
          },
          zB = PB(YB);
        return RD(RD({}, zB), {}, {
          apply: BB => {
            var OB;
            return null !== (OB = MB(BB, YB)) && void 0 !== OB ? OB : this.coerceFallback(zB)
          }
        })
      }
    };
    const kD = /^([a-z][a-z0-9.+-]+):/i,
      dD = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function KD(BB) {
      if (!BB || "<anonymous>" === BB) return !1;
      const OB = kD.exec(BB);
      return !OB || dD.includes(OB[1].toLowerCase())
    }

    function uD(BB, OB, GB, YB, DB) {
      const QB = {
        platform: BB,
        filename: OB,
        function: "<anonymous>" === GB ? "?" : GB,
        in_app: KD(OB)
      };
      return nG(YB) || (QB.lineno = YB), nG(DB) || (QB.colno = DB), QB
    }
    const mD = (BB, OB) => {
        const GB = -1 !== BB.indexOf("safari-extension"),
          YB = -1 !== BB.indexOf("safari-web-extension");
        return GB || YB ? [-1 !== BB.indexOf("@") ? BB.split("@")[0] : "?", GB ? `safari-extension:${OB}` : `safari-web-extension:${OB}`] : [BB, OB]
      },
      ID = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      FD = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      iD = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      LD = (BB, OB) => {
        const GB = ID.exec(BB);
        if (GB) {
          const [, BB, YB, DB] = GB;
          return uD(OB, BB, "?", +YB, +DB)
        }
        const YB = FD.exec(BB);
        if (YB) {
          if (YB[2] && 0 === YB[2].indexOf("eval")) {
            const BB = iD.exec(YB[2]);
            BB && (YB[2] = BB[1], YB[3] = BB[2], YB[4] = BB[3])
          }
          const [BB, GB] = mD(YB[1] || "?", YB[2]);
          return uD(OB, GB, BB, YB[3] ? +YB[3] : void 0, YB[4] ? +YB[4] : void 0)
        }
      },
      gD = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      rD = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      XD = (BB, OB) => {
        const GB = gD.exec(BB);
        if (GB) {
          if (GB[3] && GB[3].indexOf(" > eval") > -1) {
            const BB = rD.exec(GB[3]);
            BB && (GB[1] = GB[1] || "eval", GB[3] = BB[1], GB[4] = BB[2], GB[5] = "")
          }
          let BB = GB[3],
            YB = GB[1] || "?";
          return [YB, BB] = mD(YB, BB), uD(OB, BB, YB, GB[4] ? +GB[4] : void 0, GB[5] ? +GB[5] : void 0)
        }
      },
      wD = /\(error: (.*)\)/;

    function ED(BB, OB) {
      return BB.filename === OB.filename && BB.function === OB.function && BB.module === OB.module && BB.lineno === OB.lineno && BB.colno === OB.colno
    }

    function cD(BB) {
      for (let OB = 1; 10 >= OB; OB++) {
        const GB = BB.length - 2 * OB;
        if (0 > GB) break;
        let YB = !0;
        for (let DB = 0; OB > DB; DB++)
          if (!ED(BB[GB + DB], BB[GB + OB + DB])) {
            YB = !1;
            break
          } if (YB) {
          for (let YB = 0; OB > YB; YB++) BB[GB + YB] = BB[GB + OB + YB];
          return BB.length = GB + OB, {
            start: GB,
            length: OB
          }
        }
      }
    }

    function hD(BB, OB) {
      const GB = OB.start + OB.length,
        YB = eD(BB, OB);
      YB && BB.splice(GB + YB === BB.length ? GB : OB.start, YB)
    }

    function aD(BB, OB) {
      let GB = OB.start;
      for (; GB > 0 && ED(BB[GB - 1], BB[GB - 1 + OB.length]);) GB--;
      return OB.start - GB
    }

    function eD(BB, OB) {
      const GB = OB.start + OB.length;
      let YB = GB;
      for (; BB.length > YB && ED(BB[YB], BB[YB - OB.length]);) YB++;
      return YB - GB
    }

    function TD(BB, OB) {
      const GB = OB[0];
      let YB = BB.length - (GB ? aD(BB, GB) : 0);
      for (const DB of OB) YB -= eD(BB, DB);
      return YB
    }

    function bD(BB, OB, GB) {
      for (let YB = 0; BB.length > YB; YB++) {
        const DB = BB[(OB + YB) % BB.length],
          QB = BB[(GB + YB) % BB.length];
        if (DB !== QB) return QB > DB
      }
      return !1
    }
    var CD = class {
        match(BB) {
          return this.isDOMException(BB) || this.isDOMError(BB)
        }
        coerce(BB, OB) {
          const GB = UG(BB.stack);
          return {
            type: this.getType(BB),
            value: this.getValue(BB),
            stack: GB ? BB.stack : void 0,
            cause: BB.cause ? OB.next(BB.cause) : void 0,
            synthetic: !1
          }
        }
        getType(BB) {
          return this.isDOMError(BB) ? "DOMError" : "DOMException"
        }
        getValue(BB) {
          const OB = BB.name || (this.isDOMError(BB) ? "DOMError" : "DOMException");
          return BB.message ? `${OB}: ${BB.message}` : OB
        }
        isDOMException(BB) {
          return LG(BB, "DOMException")
        }
        isDOMError(BB) {
          return LG(BB, "DOMError")
        }
      },
      HD = class {
        match(BB) {
          return gG(BB)
        }
        coerce(BB, OB) {
          var GB;
          const YB = this.getStack(BB),
            DB = void 0 === YB ? null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack : void 0,
            QB = !!DB;
          return {
            type: this.getType(BB),
            value: this.getMessage(BB, OB),
            stack: null != YB ? YB : DB,
            cause: BB.cause ? OB.next(BB.cause) : void 0,
            synthetic: QB
          }
        }
        getType(BB) {
          return BB.name || BB.constructor.name
        }
        getMessage(BB, OB) {
          const GB = BB.message;
          return String(GB.error && "string" == typeof GB.error.message ? GB.error.message : GB)
        }
        getStack(BB) {
          try {
            const OB = BB.stacktrace;
            if ("string" == typeof OB && OB.length > 0) return OB;
            const GB = BB.stack;
            return "string" == typeof GB && GB.length > 0 ? GB : void 0
          } catch (BB) {
            return
          }
        }
      },
      vD = class {
        match(BB) {
          return !!LG(BB, "ErrorEvent") && (null != BB.error || this._hasUsableMessage(BB))
        }
        coerce(BB, OB) {
          var GB;
          if (null != BB.error) return OB.apply(BB.error);
          const YB = OB.apply(BB.message);
          return RD(RD({}, YB), {}, {
            stack: null !== (GB = this._buildLocationStack(BB)) && void 0 !== GB ? GB : YB.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(BB) {
          return UG(BB.message) && BB.message.length > 0
        }
        _buildLocationStack(BB) {
          var OB, GB;
          const YB = BB,
            DB = null !== (OB = YB.lineno) && void 0 !== OB ? OB : 0,
            QB = null !== (GB = YB.colno) && void 0 !== GB ? GB : 0;
          if (UG(YB.filename) && 0 !== YB.filename.length && 0 !== DB) return `Error\n    at ${YB.filename}:${DB}:${QB}`
        }
      };
    const sD = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var xD = class {
      match(BB) {
        return "string" == typeof BB
      }
      coerce(BB, OB) {
        var GB;
        const [YB, DB] = this.getInfos(BB);
        return {
          type: null != YB ? YB : "Error",
          value: null != DB ? DB : BB,
          stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
          synthetic: !0
        }
      }
      getInfos(BB) {
        let OB = "Error",
          GB = BB;
        const YB = BB.match(sD);
        return YB && (OB = YB[1], GB = YB[2]), [OB, GB]
      }
    };
    const tD = ["fatal", "error", "warning", "log", "info", "debug"];

    function BQ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const GB = Object.keys(BB);
      if (GB.sort(), !GB.length) return "[object has no keys]";
      for (let YB = GB.length; YB > 0; YB--) {
        const BB = GB.slice(0, YB).join(", ");
        if (OB >= BB.length) return YB === GB.length ? BB : BB.length > OB ? `${BB.slice(0,OB)}...` : BB
      }
      return ""
    }
    var OQ = class {
        match(BB) {
          return "object" == typeof BB && null !== BB
        }
        coerce(BB, OB) {
          var GB, YB;
          const DB = this.getErrorPropertyFromObject(BB);
          return DB ? OB.apply(DB) : {
            type: this.getType(BB),
            value: this.getValue(BB),
            stack: null !== (GB = this.getStack(BB)) && void 0 !== GB ? GB : null === (YB = OB.syntheticException) || void 0 === YB ? void 0 : YB.stack,
            level: this.isSeverityLevel(BB.level) ? BB.level : "error",
            synthetic: !0
          }
        }
        getType(BB) {
          if (rG(BB)) return BB.constructor.name;
          const OB = "name" in BB ? BB.name : void 0;
          return UG(OB) && !fG(OB) ? OB : "Error"
        }
        getValue(BB) {
          if ("name" in BB && "string" == typeof BB.name) {
            let OB = `'${BB.name}' captured as exception`;
            return "message" in BB && "string" == typeof BB.message && (OB += ` with message: '${BB.message}'`), OB
          }
          if ("message" in BB && "string" == typeof BB.message) return BB.message;
          const OB = this.getObjectClassName(BB);
          return `${OB&&"Object"!==OB?`'${OB}'`:"Object"} captured as exception with keys: ${BQ(BB)}`
        }
        isSeverityLevel(BB) {
          return UG(BB) && !fG(BB) && tD.indexOf(BB) >= 0
        }
        getStack(BB) {
          try {
            return UG(BB.stacktrace) && BB.stacktrace.length > 0 ? BB.stacktrace : UG(BB.stack) && BB.stack.length > 0 ? BB.stack : void 0
          } catch (BB) {
            return
          }
        }
        getErrorPropertyFromObject(BB) {
          for (const OB in BB)
            if ({}.hasOwnProperty.call(BB, OB)) {
              const GB = BB[OB];
              if (gG(GB)) return GB
            }
        }
        getObjectClassName(BB) {
          try {
            const OB = Object.getPrototypeOf(BB);
            return OB ? OB.constructor.name : void 0
          } catch (BB) {
            return
          }
        }
      },
      GQ = class {
        match(BB) {
          return rG(BB)
        }
        coerce(BB, OB) {
          var GB;
          const YB = BB.constructor.name;
          return {
            type: YB,
            value: `${YB} captured as exception with keys: ${BQ(BB)}`,
            stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
            synthetic: !0
          }
        }
      },
      YQ = class {
        match(BB) {
          return iG(BB)
        }
        coerce(BB, OB) {
          var GB;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(BB)}`,
            stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
            synthetic: !0
          }
        }
      },
      DQ = class {
        match(BB) {
          return LG(BB, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(BB)
        }
        isCustomEventWrappingRejection(BB) {
          if (!rG(BB)) return !1;
          try {
            const OB = BB.detail;
            return null != OB && "object" == typeof OB && "reason" in OB
          } catch (BB) {
            return !1
          }
        }
        coerce(BB, OB) {
          var GB;
          const YB = this.getUnhandledRejectionReason(BB);
          return iG(YB) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(YB)}`,
            stack: null === (GB = OB.syntheticException) || void 0 === GB ? void 0 : GB.stack,
            synthetic: !0
          } : OB.apply(YB)
        }
        getUnhandledRejectionReason(BB) {
          try {
            if ("reason" in BB) return BB.reason;
            if ("detail" in BB && null != BB.detail && "object" == typeof BB.detail && "reason" in BB.detail) return BB.detail.reason
          } catch (BB) {}
          return BB
        }
      };
    const QQ = "$message",
      oQ = "$timestamp",
      jQ = new Set([QQ, oQ]),
      yQ = {
        enabled: !0,
        max_bytes: 32768
      };

    function JQ(BB) {
      var OB;
      return BB ? {
        enabled: null !== (OB = BB.enabled) && void 0 !== OB ? OB : yQ.enabled,
        max_bytes: PQ(BB.max_bytes, yQ.max_bytes)
      } : RD({}, yQ)
    }
    var MQ = class {
      constructor(BB) {
        this._entries = [], this._totalBytes = 0, this._config = JQ(BB)
      }
      setConfig(BB) {
        this._config = JQ(BB), this._trimToMaxBytes()
      }
      add(BB) {
        const OB = function(BB) {
          let OB;
          try {
            OB = qG(BB)
          } catch (BB) {
            return
          }
          try {
            const BB = JSON.parse(OB);
            if (!VG(BB)) return;
            const GB = BB,
              YB = GB[QQ],
              DB = GB[oQ];
            if (!UG(YB) || 0 === YB.trim().length) return;
            if (!UG(DB) && !KG(DB)) return;
            return {
              step: GB,
              json: OB
            }
          } catch (BB) {
            return
          }
        }(BB);
        if (!OB) return;
        const GB = function(BB) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(BB).length;
          const OB = encodeURIComponent(BB);
          let GB = 0;
          for (let YB = 0; OB.length > YB; YB++) "%" === OB[YB] ? (GB += 1, YB += 2) : GB += 1;
          return GB
        }(OB.json);
        GB > this._config.max_bytes || (this._entries.push({
          step: OB.step,
          bytes: GB
        }), this._totalBytes += GB, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((BB => BB.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const BB = this._entries.shift();
          BB && (this._totalBytes -= BB.bytes)
        }
      }
    };

    function PQ(BB, OB) {
      if (!KG(BB) || 1 / 0 === BB || -1 / 0 === BB) return OB;
      const GB = Math.floor(BB);
      return 0 > GB ? OB : GB
    }
    const zQ = BB => {
      if ("string" != typeof BB) return BB;
      try {
        return JSON.parse(BB)
      } catch (DB) {
        return BB
      }
    };

    function lQ(BB) {
      return "string" == typeof BB || BB
    }

    function pQ(BB) {
      return "string" == typeof BB ? BB : void 0
    }
    const qQ = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      ZQ = "NativeGzipValidationError",
      NQ = BB => BB.length >= 2 && 31 === BB[0] && 139 === BB[1],
      RQ = (BB, OB) => BB === JG.GZipJS || OB === JG.GZipJS || "gzip" === OB,
      WQ = BB => !(!BB || "object" != typeof BB) && "NotReadableError" === ("name" in BB ? String(BB.name) : "");
    let AQ;
    const VQ = BB => {
        throw JD(ZQ, `Native gzip produced invalid output: ${BB}`)
      },
      SQ = (nQ = aG((function*(BB, OB) {
        18 > BB.size && VQ("too-short");
        const GB = new Uint8Array(yield BB.slice(0, 10).arrayBuffer());
        NQ(GB) && 8 === GB[2] || VQ("invalid-header");
        const YB = new DataView(yield BB.slice(BB.size - 8).arrayBuffer());
        YB.getUint32(0, !0) !== (BB => {
          const OB = (() => {
            if (AQ) return AQ;
            AQ = [];
            for (let BB = 0; 256 > BB; BB++) {
              let OB = BB;
              for (let BB = 0; 8 > BB; BB++) OB = 1 & OB ? 3988292384 ^ OB >>> 1 : OB >>> 1;
              AQ[BB] = OB >>> 0
            }
            return AQ
          })();
          let GB = 4294967295;
          for (let YB = 0; BB.length > YB; YB++) GB = OB[255 & (GB ^ BB[YB])] ^ GB >>> 8;
          return (4294967295 ^ GB) >>> 0
        })(OB) && VQ("invalid-crc");
        const DB = OB.length >>> 0;
        YB.getUint32(4, !0) !== DB && VQ("invalid-size")
      })), function(BB, OB) {
        return nQ.apply(this, arguments)
      });
    var nQ;

    function UQ() {
      return UQ = aG((function*(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const OB = (new TextEncoder).encode(BB),
            GB = new globalThis.CompressionStream("gzip"),
            DB = GB.writable.getWriter(),
            QB = DB.write(OB).then((() => DB.close())).catch((YB = aG((function*(BB) {
              try {
                yield DB.abort(BB)
              } catch (BB) {}
              throw BB
            })), function(BB) {
              return YB.apply(this, arguments)
            })),
            oB = new Response(GB.readable).blob(),
            [jB] = yield Promise.all([oB, QB]);
          return yield SQ(jB, OB), jB
        } catch (BB) {
          if (null == GB ? void 0 : GB.rethrow) throw BB;
          return OB && console.error("Failed to gzip compress data", BB), null
        }
        var YB
      })), UQ.apply(this, arguments)
    }

    function fQ(BB, OB) {
      if (null == BB) return {};
      var GB, YB, DB = function(BB, OB) {
        if (null == BB) return {};
        var GB = {};
        for (var YB in BB)
          if ({}.hasOwnProperty.call(BB, YB)) {
            if (OB.includes(YB)) continue;
            GB[YB] = BB[YB]
          } return GB
      }(BB, OB);
      if (Object.getOwnPropertySymbols) {
        var QB = Object.getOwnPropertySymbols(BB);
        for (YB = 0; QB.length > YB; YB++) OB.includes(GB = QB[YB]) || {}.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
      }
      return DB
    }
    const kQ = "[redacted]",
      dQ = /^[A-Za-z0-9+/\n\r]+=*$/,
      KQ = /^[A-Za-z0-9_-]+={0,2}$/,
      uQ = /[-_]/,
      mQ = /^data:[^,\s]*;base64,/i,
      IQ = /^[A-Za-z0-9+/_-]+={0,2}$/,
      FQ = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      iQ = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      LQ = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      gQ = /[\s<>"]/,
      rQ = new RegExp(LQ.source, "i"),
      XQ = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      wQ = new RegExp(`^${XQ.source}`, "i"),
      EQ = new RegExp(XQ.source, "gi"),
      cQ = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      hQ = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      aQ = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      eQ = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      TQ = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      bQ = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      CQ = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      HQ = /\b\d(?:[ ./-]?\d){12,}\b/g,
      vQ = /\d+/g,
      sQ = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      xQ = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function tQ(BB) {
      return function(BB) {
        return iQ.test(BB)
      }(BB) || cQ.test(BB) || hQ.test(BB)
    }

    function Bo(BB) {
      return BB.split("&", 129).length > 128
    }

    function Oo(BB, OB, GB) {
      return tQ(BB) || OB.includes(";") && function(BB) {
        return BB.split(";").some((BB => tQ(BB.split("=", 1)[0])))
      }(OB) ? kQ : rQ.test(OB) ? GB ? jo(OB, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : kQ : OB
    }

    function Go(BB, OB) {
      const GB = new URLSearchParams;
      let YB = !1,
        DB = !1;
      for (const [QB, oB] of new URLSearchParams(BB)) {
        const BB = yo(QB),
          jB = yo(oB);
        YB || (YB = BB !== QB || jB !== oB);
        const yB = Oo(BB, jB, OB);
        YB || (YB = yB !== jB), DB = tQ(BB) || yB !== jB, GB.append(BB, yB)
      }
      return {
        changed: YB,
        lastFieldSensitive: DB,
        serialized: GB.toString()
      }
    }

    function Yo(BB, OB) {
      if (!BB.includes("=")) return {
        value: Do(BB, OB),
        lastFieldSensitive: !1
      };
      const GB = Go(BB, OB);
      return {
        value: GB.changed ? GB.serialized : BB,
        lastFieldSensitive: GB.lastFieldSensitive
      }
    }

    function Do(BB, OB) {
      return OB ? jo(BB, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : rQ.test(BB) ? kQ : BB
    }

    function Qo(BB, OB, GB) {
      return "#" === BB ? !OB.fragment && (OB.fragment = !0) : "?" === BB && (OB.fragment ? "=" !== GB && !OB.fragmentQuery && (OB.fragmentQuery = !0) : !OB.query && (OB.query = !0))
    }

    function oo(BB, OB) {
      var GB;
      if (BB.length > 8192 && wQ.test(BB)) return kQ;
      const {
        address: YB,
        suffix: DB
      } = OB.stripPunctuation ? function(BB) {
        let OB = BB.length;
        for (; OB > 0 && ".,;:!?)]}'".includes(BB[OB - 1]);) OB--;
        return {
          address: BB.slice(0, OB),
          suffix: BB.slice(OB)
        }
      }(BB) : {
        address: BB,
        suffix: ""
      };
      let QB;
      try {
        QB = new URL(YB)
      } catch (BB) {
        return kQ + DB
      }
      const oB = QB.search.slice(1),
        jB = "" !== QB.hash,
        yB = function(BB) {
          const OB = BB.slice(1),
            GB = OB.indexOf("?");
          return 0 > GB ? {
            head: OB,
            tail: null
          } : {
            head: OB.slice(0, GB),
            tail: OB.slice(GB + 1)
          }
        }(QB.hash);
      if (Bo(oB) || Bo(yB.head) || Bo(null !== (GB = yB.tail) && void 0 !== GB ? GB : "")) return kQ + DB;
      let JB = !1;
      (QB.username || QB.password) && (QB.username = kQ, QB.password = "", JB = !0);
      const MB = Go(oB, OB.allowNestedUrls);
      MB.changed && (QB.search = MB.serialized, JB = !0);
      const PB = Yo(yB.head, OB.allowNestedUrls),
        zB = null === yB.tail ? null : (lB = yB.tail, PB.lastFieldSensitive ? {
          value: "" === lB ? "" : kQ,
          lastFieldSensitive: !0
        } : Yo(lB, OB.allowNestedUrls));
      var lB;
      const pB = null === zB ? PB.value : `${PB.value}?${zB.value}`;
      pB !== QB.hash.slice(1) && (QB.hash = pB, JB = !0);
      const qB = jB ? null != zB ? zB : PB : MB;
      return (JB ? yo(QB.toString()) : YB) + (qB.lastFieldSensitive ? "" : DB)
    }

    function jo(BB, OB) {
      return BB.replace(LQ, (GB => function(BB, OB) {
        const GB = function(BB) {
          if (!BB.includes("://")) return [];
          const OB = [...BB.matchAll(EQ)].map((BB => BB.index)),
            GB = [],
            YB = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let DB = 0,
            QB = !1,
            oB = "";
          for (let jB = 0; BB.length > jB && OB.length > DB; jB++) {
            OB[DB] === jB && (jB > 0 && "=" !== oB && GB.push(jB), DB++);
            const yB = BB[jB];
            Qo(yB, YB, oB) ? (oB = yB, QB = !0) : QB && "=&".includes(yB) && (oB = yB)
          }
          return GB
        }(BB);
        if (0 === GB.length) return oo(BB, OB);
        let YB = "",
          DB = 0;
        for (const QB of GB) YB += oo(BB.slice(DB, QB), RD(RD({}, OB), {}, {
          stripPunctuation: !1
        })), DB = QB;
        return YB + oo(BB.slice(DB), OB)
      }(GB, RD(RD({}, OB), {}, {
        stripPunctuation: OB.stripPunctuation && GB.length !== BB.length
      }))))
    }

    function yo(BB) {
      return BB.replace(FQ, kQ)
    }

    function Jo(BB) {
      let OB = 0,
        GB = !1;
      for (let YB = BB.length - 1; YB >= 0; YB--) {
        let DB = BB.charCodeAt(YB) - 48;
        if (0 > DB || DB > 9) return !1;
        GB && (DB *= 2, DB > 9 && (DB -= 9)), OB += DB, GB = !GB
      }
      return OB % 10 == 0
    }

    function Mo(BB) {
      const OB = [];
      for (let QB = vQ.exec(BB); null !== QB; QB = vQ.exec(BB)) OB.push({
        digits: QB[0],
        start: QB.index,
        end: QB.index + QB[0].length
      });
      let GB = "",
        YB = 0,
        DB = 0;
      for (; OB.length > DB;) {
        let QB = "",
          oB = -1;
        for (let BB = DB; OB.length > BB && (QB += OB[BB].digits, 19 >= QB.length); BB++) QB.length >= 13 && Jo(QB) && (oB = BB);
        0 > oB ? DB++ : (GB += BB.slice(YB, OB[DB].start) + kQ, YB = OB[oB].end, DB = oB + 1)
      }
      return GB + BB.slice(YB)
    }
    const Po = {}.propertyIsEnumerable;

    function zo(BB, OB) {
      try {
        return Zo(BB, OB, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (BB) {
        return []
      }
    }

    function po(BB, OB, GB, YB) {
      if (0 >= GB.remainingNodes) return {
        stringValue: OD
      };
      if (GB.remainingNodes--, mG(BB)) return {
        boolValue: BB
      };
      if ("bigint" == typeof BB) return function(BB, OB) {
        const GB = BB.toString(),
          YB = BigInt("9223372036854775808");
        return BB >= YB || -YB > BB ? (null == OB || OB.debug(`Attribute ${GB} is outside the int64 range; encoding it as a string`), {
          stringValue: GB
        }) : {
          intValue: GB
        }
      }(BB, OB);
      if ("number" == typeof BB) {
        if (!Number.isFinite(BB)) return {
          stringValue: String(BB)
        };
        if (Number.isInteger(BB)) {
          if (Number.isSafeInteger(BB)) return {
            intValue: String(BB)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(BB)
          };
          const GB = BigInt(BB).toString();
          return BB >= 0x8000000000000000 || -0x8000000000000000 > BB ? (null == OB || OB.debug(`Attribute ${GB} is outside the int64 range; encoding it as a string`), {
            stringValue: GB
          }) : {
            intValue: GB
          }
        }
        return {
          doubleValue: BB
        }
      }
      if ("string" == typeof BB) return {
        stringValue: YD(BB)
      };
      if ("function" == typeof BB) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof BB) return {
        stringValue: String(BB)
      };
      if ("object" == typeof BB && null !== BB) {
        if (GB.ancestors.has(BB)) return {
          stringValue: "[Circular]"
        };
        if (YB >= 20) return {
          stringValue: OD
        };
        if (BB instanceof Date) {
          const OB = BB.getTime(),
            GB = Number.isFinite(OB) ? BB.toISOString() : String(BB);
          return {
            stringValue: "string" == typeof GB ? YD(GB) : String(GB)
          }
        }
        GB.ancestors.add(BB);
        try {
          try {
            const DB = BB.toJSON;
            if ("function" == typeof DB) return po(DB.call(BB), OB, GB, YB + 1)
          } catch (BB) {}
          return WG(BB) ? {
            arrayValue: {
              values: qo(BB, OB, GB, YB + 1)
            }
          } : {
            kvlistValue: {
              values: Zo(BB, OB, GB, YB + 1)
            }
          }
        } finally {
          GB.ancestors.delete(BB)
        }
      }
      return {
        stringValue: YD(String(BB))
      }
    }

    function qo(BB, OB, GB, YB) {
      const DB = [],
        QB = Math.min(BB.length, 1e3);
      let oB = 0;
      for (; QB > oB && GB.remainingNodes > 0; oB++) try {
        const QB = oB in BB ? BB[oB] : void 0;
        if (dG(QB)) continue;
        DB.push(po(QB, OB, GB, YB))
      } catch (BB) {
        DB.push({
          stringValue: GD
        })
      }
      return BB.length > oB && DB.push({
        stringValue: OD
      }), DB
    }

    function Zo(BB, OB, GB, YB) {
      const DB = [];
      for (const QB in BB)
        if (Po.call(BB, QB)) {
          if (!QB) {
            null == OB || OB.debug("Dropping an attribute with an empty key");
            continue
          }
          if (DB.length >= 1e3 || 0 >= GB.remainingNodes) {
            null == OB || OB.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const oB = BB[QB];
            if (kG(oB) || nG(oB)) continue;
            DB.push({
              key: YD(QB),
              value: po(oB, OB, GB, YB)
            })
          } catch (BB) {
            DB.push({
              key: YD(QB),
              value: {
                stringValue: GD
              }
            })
          }
        } return DB
    }

    function No(BB, OB, GB) {
      return RD(RD(RD(RD({}, DD({}, BB.resourceAttributes)), {}, {
        "service.name": BB.serviceName || "unknown_service"
      }, BB.environment && {
        "deployment.environment": BB.environment
      }), BB.serviceVersion && {
        "service.version": BB.serviceVersion
      }), {}, {
        "telemetry.sdk.name": OB,
        "telemetry.sdk.version": GB
      })
    }
    const Ro = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function Wo(BB, OB) {
      const GB = DD({}, BB),
        YB = {};
      for (const DB of Ro)({}).hasOwnProperty.call(GB, DB) && (YB[DB] = GB[DB], delete GB[DB]);
      return [...zo(GB, OB), ...zo(YB, OB)]
    }
    const Ao = {
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
      Vo = {
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
      So = Vo.info;

    function no(BB) {
      try {
        return YD(String(BB))
      } catch (BB) {
        return GD
      }
    }

    function Uo(BB, OB, GB, YB) {
      const DB = BB.level || "info",
        {
          text: QB,
          number: oB
        } = Vo[DB] || So,
        jB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(BB) + "000000"
        }(KG(YB) ? YB : void 0),
        yB = {};
      OB.distinctId && (yB.posthogDistinctId = OB.distinctId), OB.sessionId && (yB.sessionId = OB.sessionId), OB.windowId && (yB["window.id"] = OB.windowId), dG(OB.sessionStartTimestamp) || (yB.sessionStartTimestamp = String(OB.sessionStartTimestamp)), dG(OB.lastActivityTimestamp) || (yB.lastActivityTimestamp = String(OB.lastActivityTimestamp)), OB.currentUrl && (yB["url.full"] = OB.currentUrl), OB.screenName && (yB["screen.name"] = OB.screenName), OB.appState && (yB["app.state"] = OB.appState), OB.activeFeatureFlags && OB.activeFeatureFlags.length > 0 && (yB.feature_flags = OB.activeFeatureFlags);
      const JB = RD({}, yB),
        MB = BB.attributes;
      if (MB) {
        let BB = [];
        try {
          BB = Object.keys(MB)
        } catch (OB) {
          BB = []
        }
        for (const GB of BB) {
          let BB;
          try {
            BB = MB[GB]
          } catch (OB) {
            BB = GD
          }
          Object.defineProperty(JB, GB, {
            value: BB,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const PB = {
        timeUnixNano: jB,
        observedTimeUnixNano: jB,
        severityNumber: oB,
        severityText: QB,
        body: {
          stringValue: no(BB.body)
        },
        attributes: zo(JB, GB)
      };
      return BB.trace_id && (PB.traceId = BB.trace_id), BB.span_id && (PB.spanId = BB.span_id), nG(BB.trace_flags) || (PB.flags = BB.trace_flags), PB
    }

    function fo(BB, OB, GB) {
      return No(BB, OB, GB)
    }

    function ko(BB, OB, GB, YB) {
      return {
        resourceLogs: [{
          resource: {
            attributes: Wo(OB)
          },
          scopeLogs: [{
            scope: {
              name: GB,
              version: YB
            },
            logRecords: BB
          }]
        }]
      }
    }
    var Ko = class {
      constructor(BB) {
        this._onFire = BB, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(BB) {
        this.clear(), this._firesAt = Date.now() + BB, this._timer = zD((() => {
          this._timer = void 0, this._onFire()
        }), BB)
      }
      armNoEarlierThan(BB) {
        this._timer && Date.now() + BB <= this._firesAt || this.arm(BB)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function uo() {
      return .75 + .5 * Math.random()
    }

    function mo(BB, OB, GB, YB) {
      const DB = Math.min(Math.max(0, OB - 1), 6),
        QB = BB * Math.pow(2, DB);
      return Math.round((void 0 === YB ? QB : Math.min(QB, Math.max(YB, BB))) * GB)
    }
    var Io = class {
      constructor(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          oB = arguments.length > 6 ? arguments[6] : void 0;
        var jB;
        this._instance = BB, this._config = OB, this._logger = GB, this._getContext = YB, this._onReady = DB, this._waitForStoragePersist = QB, this._scopeName = oB, this._flushTimer = new Ko((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new oD, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = OB.maxBufferSize, this._maxQueueSize = Math.max(null !== (jB = OB.maxQueueSize) && void 0 !== jB ? jB : OB.maxBufferSize, OB.maxBufferSize), this._flushIntervalMs = OB.flushIntervalMs, this._maxBatchRecordsPerPost = OB.maxBatchRecordsPerPost, this._rateCapWindowMs = OB.rateCapWindowMs, this._maxLogsPerInterval = OB.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(yG.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(BB, OB) {
        var GB;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == BB ? void 0 : BB.body)) return;
        const YB = this._runBeforeSend(BB);
        if (null === YB) return;
        if (!YB.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const DB = {
          record: Uo(YB, null !== (GB = null == OB ? void 0 : OB.context) && void 0 !== GB ? GB : this._getContext(), this._logger, null == OB ? void 0 : OB.occurredAtMs)
        };
        this._onReady((() => this._enqueue(DB)))
      }
      _runBeforeSend(BB) {
        const OB = this._config.beforeSend;
        if (!OB) return BB;
        const GB = WG(OB) ? OB : [OB];
        let YB = BB;
        for (const DB of GB) try {
          const BB = DB(YB);
          if (!BB) return this._logger.info("Log was rejected in beforeSend function"), null;
          YB = BB
        } catch (BB) {
          return this._logger.error("Error in beforeSend function for log:", BB), null
        }
        return YB
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const BB = Date.now(),
          OB = BB - this._intervalWindowStart;
        return this._rateCapWindowMs > OB && OB >= 0 || (this._intervalWindowStart = BB, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var BB = this;
        return aG((function*() {
          if (!BB._instance.isDisabled) return BB._flushPromise || (BB._flushPromise = BB._flushInner().finally((() => {
            BB._flushPromise = null
          }))), BB._flushPromise
        }))()
      }
      _flushInner() {
        var BB = this;
        return aG((function*() {
          var OB;
          BB._flushTimer.clear();
          let GB = null !== (OB = BB._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== OB ? OB : [];
          if (0 === GB.length) return;
          const YB = GB.length;
          let DB = 0;
          for (; GB.length > 0 && YB > DB;) {
            var QB, oB;
            const OB = BB._queueGeneration;
            BB._evictedSinceAdvance = 0;
            const YB = Math.min(GB.length, BB._maxBatchRecordsPerPost),
              jB = GB.slice(0, YB),
              yB = ko(jB.map((BB => BB.record)), BB._buildResourceAttributes(), null !== (QB = BB._scopeName) && void 0 !== QB ? QB : BB._instance.getLibraryId(), BB._instance.getLibraryVersion()),
              JB = yield BB._instance._sendLogsBatch(yB);
            if (BB._queueGeneration !== OB) return;
            if ("too-large" === JB.kind && jB.length > 1) BB._maxBatchRecordsPerPost = Math.max(1, Math.floor(jB.length / 2)), BB._logger.warn(`Logs batch of size ${jB.length} was too large for the ingestion endpoint, reducing batch size to ${BB._maxBatchRecordsPerPost}`);
            else {
              if (BB._retryAfter.record(JB), BB._flushTimer.pending && BB._flushTimer.arm(Math.max(BB._flushIntervalMs, BB._retryAfter.remainingMs())), "retry-later" === JB.kind) throw JB.error;
              if ("too-large" === JB.kind ? BB._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === JB.kind && BB._config.maxBatchRecordsPerPost > BB._maxBatchRecordsPerPost && (BB._maxBatchRecordsPerPost = Math.min(BB._config.maxBatchRecordsPerPost, BB._maxBatchRecordsPerPost + 1)), yield BB._persistQueueAdvance(jB.length), GB = null !== (oB = BB._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== oB ? oB : [], DB += jB.length, "fatal" === JB.kind) throw JB.error
            }
          }
        }))()
      }
      _persistQueueAdvance(BB) {
        var OB = this;
        return aG((function*() {
          var GB;
          const YB = Math.max(0, BB - OB._evictedSinceAdvance),
            DB = null !== (GB = OB._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== GB ? GB : [];
          OB._instance.setPersistedProperty(yG.LogsQueue, DB.slice(YB)), yield OB._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return fo(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(BB) {
        var OB;
        if (this._instance.optedOut) return;
        const GB = null !== (OB = this._instance.getPersistedProperty(yG.LogsQueue)) && void 0 !== OB ? OB : [];
        this._maxQueueSize > GB.length || (GB.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), GB.push(BB), this._instance.setPersistedProperty(yG.LogsQueue, GB), this._maxBufferSize > GB.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(mo(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const BB = this._instance.getPersistedProperty(yG.LogsQueue);
        return !!BB && BB.length > 0
      }
      shutdown(BB) {
        var OB = this;
        return aG((function*() {
          OB._flushTimer.clear();
          const GB = OB.flush().catch((() => {}));
          void 0 !== BB ? yield lD(GB, BB): yield GB
        }))()
      }
      flushWithTimeout(BB) {
        var OB = this;
        return aG((function*() {
          const GB = OB.flush();
          yield lD(GB, BB, (() => {
            GB.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (BB => {
          this._consecutiveFlushFailures++, this._flushJitter = uo(), this._logger.error("PostHog logs flush failed:", BB)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const Fo = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function io(BB) {
      return String(BB) + "000000"
    }

    function Lo(BB, OB, GB, YB) {
      let DB = "";
      return YB && (DB = Object.keys(YB).sort().map((BB => `${JSON.stringify(BB)}:${JSON.stringify(YB[BB])}`)).join(",")), `${BB}\0${OB}\0${null!=GB?GB:""}\0${DB}`
    }
    var go = class {
      constructor(BB, OB, GB) {
        this._instance = BB, this._config = OB, this._logger = GB, this._series = new Map, this._flushTimer = new Ko((() => this.flush().catch((BB => {
          this._logger.error("Metrics flush failed:", BB)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new oD, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: BB,
          type: "count",
          value: OB,
          unit: null == GB ? void 0 : GB.unit,
          attributes: null == GB ? void 0 : GB.attributes
        })
      }
      gauge(BB, OB, GB) {
        this._capture({
          name: BB,
          type: "gauge",
          value: OB,
          unit: null == GB ? void 0 : GB.unit,
          attributes: null == GB ? void 0 : GB.attributes
        })
      }
      histogram(BB, OB, GB) {
        this._capture({
          name: BB,
          type: "histogram",
          value: OB,
          unit: null == GB ? void 0 : GB.unit,
          attributes: null == GB ? void 0 : GB.attributes
        })
      }
      flush() {
        var BB = this;
        const OB = this._flushPromise,
          GB = function() {
            var GB = aG((function*() {
              OB && (yield OB.catch((() => {}))), yield BB._doFlush()
            }));
            return function() {
              return GB.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === GB && (this._flushPromise = null)
          }));
        return this._flushPromise = GB, GB
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const BB = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(BB)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(BB) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const OB = this._runBeforeSend(BB);
        if (null === OB) return;
        if (!OB.name || "string" != typeof OB.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof OB.value || !Number.isFinite(OB.value)) return void this._logger.warn(`Dropping metric '${OB.name}': value must be a finite number`);
        if ("count" === OB.type && 0 > OB.value) return void this._logger.warn(`Dropping count '${OB.name}': counters are monotonic, value must be >= 0`);
        let GB, YB;
        try {
          GB = OB.attributes ? RD({}, OB.attributes) : void 0, YB = Lo(OB.type, OB.name, OB.unit, GB)
        } catch (BB) {
          return void this._logger.warn(`Dropping metric '${OB.name}': attributes could not be serialized`, BB)
        }
        let DB = this._series.get(YB);
        if (!DB) {
          if (!this._admitNewSeries()) return;
          DB = {
            name: OB.name,
            type: OB.type,
            unit: OB.unit,
            attributes: GB,
            windowStartMs: Date.now()
          }, this._series.set(YB, DB)
        }
        const QB = this._typeByName.get(OB.name);
        void 0 === QB ? this._typeByName.set(OB.name, OB.type) : QB === OB.type || this._typeCollisionWarned.has(OB.name) || (this._typeCollisionWarned.add(OB.name), this._logger.warn(`Metric name '${OB.name}' is already used as a ${QB}; recording it as a ${OB.type} too will blend both series in charts. Use a distinct name.`)), this._fold(DB, OB.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(BB, OB) {
        switch (BB.type) {
          case "count":
            var GB;
            BB.total = (null !== (GB = BB.total) && void 0 !== GB ? GB : 0) + OB;
            break;
          case "gauge":
            BB.last = OB;
            break;
          case "histogram": {
            BB.hist || (BB.hist = {
              count: 0,
              sum: 0,
              min: OB,
              max: OB,
              bucketCounts: new Array(Fo.length + 1).fill(0)
            });
            const GB = BB.hist;
            GB.count += 1, GB.sum += OB, GB.min = Math.min(GB.min, OB), GB.max = Math.max(GB.max, OB), GB.bucketCounts[function(BB, OB) {
              for (let GB = 0; OB.length > GB; GB++)
                if (OB[GB] >= BB) return GB;
              return OB.length
            }(OB, Fo)] += 1;
            break
          }
        }
      }
      _runBeforeSend(BB) {
        const OB = this._config.beforeSend;
        if (!OB) return BB;
        const GB = WG(OB) ? OB : [OB];
        let YB = BB;
        for (const DB of GB) try {
          const BB = DB(YB);
          if (!BB) return this._logger.info("Metric was rejected in beforeSend function"), null;
          YB = BB
        } catch (BB) {
          return this._logger.error("Error in beforeSend function for metric:", BB), null
        }
        return YB
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(mo(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var BB = this;
        return aG((function*() {
          if (BB._flushTimer.clear(), 0 === BB._series.size) return;
          const OB = BB._series;
          BB._series = new Map, BB._seriesCapWarned = !1, BB._typeByName = new Map, BB._typeCollisionWarned = new Set;
          const GB = BB._generation,
            YB = yield BB._instance._sendMetricsBatch(BB._buildPayload(OB));
          if (GB === BB._generation) switch (BB._retryAfter.record(YB), "retry-later" === YB.kind ? (BB._consecutiveFlushFailures++, BB._flushJitter = uo()) : (BB._consecutiveFlushFailures = 0, BB._flushJitter = 1), BB._flushTimer.pending && BB._flushTimer.arm(BB._nextFlushDelay()), YB.kind) {
            case "ok":
              return;
            case "retry-later":
              return BB._mergeWindowBack(OB), void BB._flushTimer.armNoEarlierThan(BB._nextFlushDelay());
            case "too-large":
              return void BB._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void BB._logger.error("Failed to send metrics batch:", YB.error)
          }
        }))()
      }
      _buildPayload(BB) {
        return OB = this._buildMetrics(BB), GB = function(BB, OB, GB) {
          return No(BB, OB, GB)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), YB = this._instance.getLibraryId(), DB = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: Wo(GB)
            },
            scopeMetrics: [{
              scope: {
                name: YB,
                version: DB
              },
              metrics: OB
            }]
          }]
        };
        var OB, GB, YB, DB
      }
      _buildMetrics(BB) {
        const OB = io(Date.now()),
          GB = new Map;
        for (const oB of BB.values()) {
          var YB;
          const BB = Lo(oB.type, oB.name, oB.unit, void 0);
          let jB = GB.get(BB);
          jB || (jB = RD({
            name: oB.name
          }, oB.unit && {
            unit: oB.unit
          }), "count" === oB.type ? jB.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === oB.type ? jB.gauge = {
            dataPoints: []
          } : jB.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, GB.set(BB, jB));
          const yB = zo(null !== (YB = oB.attributes) && void 0 !== YB ? YB : {}, this._logger),
            JB = io(oB.windowStartMs);
          if ("count" === oB.type) {
            var DB;
            const BB = {
              attributes: yB,
              startTimeUnixNano: JB,
              timeUnixNano: OB,
              asDouble: null !== (DB = oB.total) && void 0 !== DB ? DB : 0
            };
            jB.sum.dataPoints.push(BB)
          } else if ("gauge" === oB.type) {
            var QB;
            const BB = {
              attributes: yB,
              timeUnixNano: OB,
              asDouble: null !== (QB = oB.last) && void 0 !== QB ? QB : 0
            };
            jB.gauge.dataPoints.push(BB)
          } else oB.hist && jB.histogram.dataPoints.push({
            attributes: yB,
            startTimeUnixNano: JB,
            timeUnixNano: OB,
            count: oB.hist.count,
            sum: oB.hist.sum,
            min: oB.hist.min,
            max: oB.hist.max,
            bucketCounts: oB.hist.bucketCounts,
            explicitBounds: Fo
          })
        }
        return Array.from(GB.values())
      }
      _mergeWindowBack(BB) {
        for (const [YB, DB] of BB) {
          const BB = this._series.get(YB);
          if (BB) switch (BB.windowStartMs = Math.min(BB.windowStartMs, DB.windowStartMs), BB.type) {
            case "count":
              var OB, GB;
              BB.total = (null !== (OB = BB.total) && void 0 !== OB ? OB : 0) + (null !== (GB = DB.total) && void 0 !== GB ? GB : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (DB.hist)
                if (BB.hist) {
                  BB.hist.count += DB.hist.count, BB.hist.sum += DB.hist.sum, BB.hist.min = Math.min(BB.hist.min, DB.hist.min), BB.hist.max = Math.max(BB.hist.max, DB.hist.max);
                  for (let OB = 0; BB.hist.bucketCounts.length > OB; OB++) BB.hist.bucketCounts[OB] += DB.hist.bucketCounts[OB]
                } else BB.hist = DB.hist
          } else this._admitNewSeries() && this._series.set(YB, DB)
        }
      }
    };
    const ro = function(BB) {
        let {
          debugEnabled: OB
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = {
          _log(GB) {
            let YB;
            try {
              YB = typeof window > "u" ? void 0 : window
            } catch (BB) {
              return
            }
            for (var QB = arguments.length, oB = new Array(QB > 1 ? QB - 1 : 0), jB = 1; jB < QB; jB++) oB[jB - 1] = arguments[jB];
            YB && (DB.DEBUG || YB.POSTHOG_DEBUG || OB) && !nG(YB.console) && YB.console && ("__rrweb_original__" in YB.console[GB] ? YB.console[GB].__rrweb_original__ : YB.console[GB])(BB, ...oB)
          },
          debug() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            GB._log("debug", ...OB)
          },
          info() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            GB._log("log", ...OB)
          },
          warn() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            GB._log("warn", ...OB)
          },
          error() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            GB._log("error", ...OB)
          },
          critical() {
            for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
            console.error(BB, ...GB)
          },
          uninitializedWarning(BB) {
            GB.error(`You must initialize PostHog before calling ${BB}`)
          },
          createLogger: (OB, GB) => ro(`${BB} ${OB}`, GB)
        };
        return GB
      },
      Xo = ro("[PostHog.js]"),
      wo = Xo.createLogger;

    function Eo(BB, OB) {
      WG(BB) && BB.forEach(OB)
    }

    function co(BB, OB) {
      if (!dG(BB))
        if (WG(BB)) BB.forEach(OB);
        else if ((BB => BB instanceof FormData)(BB)) BB.forEach(((BB, GB) => OB(BB, GB)));
      else
        for (const GB in BB) NG.call(BB, GB) && OB(BB[GB], GB)
    }
    const ho = function(BB) {
      for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
      for (const DB of GB)
        for (const OB in DB) void 0 !== DB[OB] && (BB[OB] = DB[OB]);
      return BB
    };

    function ao(BB) {
      const OB = Object.keys(BB);
      let GB = OB.length;
      const YB = new Array(GB);
      for (; GB--;) YB[GB] = [OB[GB], BB[OB[GB]]];
      return YB
    }
    const eo = function(BB) {
        return function() {
          try {
            for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
            return BB.apply(this, GB)
          } catch (BB) {
            Xo.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Xo.critical(BB)
          }
        }
      },
      To = function(BB) {
        const OB = {};
        return co(BB, (function(BB, GB) {
          (UG(BB) && BB.length > 0 || KG(BB)) && (OB[GB] = BB)
        })), OB
      };

    function bo(BB) {
      const OB = RD({}, BB);
      for (const GB of ["name", "message", "stack", "cause", "errors"]) try {
        GB in BB && (OB[GB] = BB[GB])
      } catch (BB) {}
      return OB
    }
    const Co = ["herokuapp.com", "vercel.app", "netlify.app"];

    function Ho(BB) {
      const OB = null == BB ? void 0 : BB.hostname;
      if (!UG(OB)) return !1;
      const GB = OB.split(".").slice(-2).join(".");
      for (const YB of Co)
        if (GB === YB) return !1;
      return !0
    }

    function vo(BB, OB, GB, YB) {
      const {
        capture: DB = !1,
        passive: QB = !0
      } = null != YB ? YB : {};
      null == BB || BB.addEventListener(OB, GB, {
        capture: DB,
        passive: QB
      })
    }

    function so(BB) {
      return "ph_toolbar_internal" === BB.name
    }
    const xo = BB => {
      if (tO) {
        try {
          const OB = BB + "=",
            GB = tO.cookie.split(";").filter((BB => BB.length));
          for (let BB = 0; GB.length > BB; BB++) {
            let YB = GB[BB];
            for (;
              " " == YB.charAt(0);) YB = YB.substring(1, YB.length);
            if (0 === YB.indexOf(OB)) return decodeURIComponent(YB.substring(OB.length, YB.length))
          }
        } catch (BB) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(BB) {
      return 0 > BB ? Math.ceil(BB) : Math.floor(BB)
    }), Number.isInteger || (Number.isInteger = function(BB) {
      return KG(BB) && isFinite(BB) && Math.floor(BB) === BB
    });
    var to = class BB {
        constructor(BB) {
          if (this.bytes = BB, 16 !== BB.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(OB, GB, YB, DB) {
          if (!Number.isInteger(OB) || !Number.isInteger(GB) || !Number.isInteger(YB) || !Number.isInteger(DB) || 0 > OB || 0 > GB || 0 > YB || 0 > DB || OB > 0xffffffffffff || GB > 4095 || YB > 1073741823 || DB > 4294967295) throw new RangeError("invalid field value");
          const QB = new Uint8Array(16);
          return QB[0] = OB / Math.pow(2, 40), QB[1] = OB / Math.pow(2, 32), QB[2] = OB / Math.pow(2, 24), QB[3] = OB / Math.pow(2, 16), QB[4] = OB / 256, QB[5] = OB, QB[6] = 112 | GB >>> 8, QB[7] = GB, QB[8] = 128 | YB >>> 24, QB[9] = YB >>> 16, QB[10] = YB >>> 8, QB[11] = YB, QB[12] = DB >>> 24, QB[13] = DB >>> 16, QB[14] = DB >>> 8, QB[15] = DB, new BB(QB)
        }
        toString() {
          let BB = "";
          for (let OB = 0; this.bytes.length > OB; OB++) BB = BB + (this.bytes[OB] >>> 4).toString(16) + (15 & this.bytes[OB]).toString(16), 3 !== OB && 5 !== OB && 7 !== OB && 9 !== OB || (BB += "-");
          if (36 !== BB.length) throw new Error("Invalid UUIDv7 was generated");
          return BB
        }
        clone() {
          return new BB(this.bytes.slice(0))
        }
        equals(BB) {
          return 0 === this.compareTo(BB)
        }
        compareTo(BB) {
          for (let OB = 0; 16 > OB; OB++) {
            const GB = this.bytes[OB] - BB.bytes[OB];
            if (0 !== GB) return Math.sign(GB)
          }
          return 0
        }
      },
      Bj = class {
        generate() {
          const BB = this.generateOrAbort();
          if (!nG(BB)) return BB;
          {
            this._timestamp = 0;
            const BB = this.generateOrAbort();
            if (nG(BB)) throw new Error("Could not generate UUID after timestamp reset");
            return BB
          }
        }
        generateOrAbort() {
          const BB = (() => {
            const BB = Date.now();
            return KG(BB) && isFinite(BB) ? Math.min(Math.max(Math.floor(BB), 0), 0xffffffffffff) : 0
          })();
          if (BB > this._timestamp) this._timestamp = BB, this._resetCounter();
          else {
            if (this._timestamp >= BB + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return to.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new Gj
        }
      };
    let Oj = BB => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let OB = 0; BB.length > OB; OB++) BB[OB] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return BB
    };
    vO && !nG(vO.crypto) && crypto.getRandomValues && (Oj = BB => crypto.getRandomValues(BB));
    var Gj = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (Oj(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let Yj;
    const Dj = () => Qj().toString(),
      Qj = () => (Yj || (Yj = new Bj)).generate();
    let oj = "";
    const jj = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let yj = null;
    const Jj = {
      _is_supported() {
        if (!kG(yj)) return yj;
        if (yj = !1, tO) try {
          const BB = `__ph_cookie_support_${Dj()}`;
          Jj._set(BB, "xyz"), yj = '"xyz"' === xo(BB), Jj._remove(BB)
        } catch (YB) {
          yj = !1
        }
        return yj
      },
      _error(BB) {
        Xo.error("cookieStore error: " + BB)
      },
      _get: xo,
      _parse(BB) {
        let OB;
        try {
          OB = JSON.parse(Jj._get(BB)) || {}
        } catch (BB) {}
        return OB
      },
      _set(BB, OB, GB, YB, DB) {
        if (!tO) return !1;
        try {
          let QB = "",
            oB = "";
          const jB = function(BB, OB) {
            if (OB) {
              let OB = function(BB) {
                let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tO;
                if (oj) return oj;
                if (!OB) return "";
                if (["localhost", "127.0.0.1"].includes(BB)) return "";
                const GB = BB.split(".");
                let YB = Math.min(GB.length, 8);
                const DB = "dmn_chk_" + Dj();
                for (; !oj && YB--;) {
                  const BB = GB.slice(YB).join("."),
                    QB = DB + "=1;domain=." + BB + ";path=/";
                  OB.cookie = QB + ";max-age=3", OB.cookie.includes(DB) && (OB.cookie = QB + ";max-age=0", oj = BB)
                }
                return oj
              }(BB);
              if (!OB) {
                const GB = (BB => {
                  const OB = BB.match(jj);
                  return OB ? OB[0] : ""
                })(BB);
                GB !== OB && Xo.info("Warning: cookie subdomain discovery mismatch", GB, OB), OB = GB
              }
              return OB ? "; domain=." + OB : ""
            }
            return ""
          }(tO.location.hostname, YB);
          if (GB) {
            const BB = new Date;
            BB.setTime(BB.getTime() + 864e5 * GB), QB = "; expires=" + BB.toUTCString()
          }
          DB && (oB = "; secure");
          const yB = BB + "=" + encodeURIComponent(JSON.stringify(OB)) + QB + "; SameSite=Lax; path=/" + jB + oB;
          return yB.length > 3686.4 && Xo.warn("cookieStore warning: large cookie, len=" + yB.length), tO.cookie = yB, !0
        } catch (BB) {
          return !1
        }
      },
      _remove(BB, OB) {
        if ((null == tO ? void 0 : tO.cookie) && (!OB || !kG(xo(BB)))) try {
          Jj._set(BB, "", -1, OB)
        } catch (BB) {
          return
        }
      }
    };
    let Mj = null;
    const Pj = {
        _is_supported() {
          if (!kG(Mj)) return Mj;
          let BB = !0;
          if (nG(vO)) BB = !1;
          else try {
            const OB = "__mplssupport__";
            Pj._set(OB, "xyz"), '"xyz"' !== Pj._get(OB) && (BB = !1), Pj._remove(OB)
          } catch (DB) {
            BB = !1
          }
          return BB || Xo.error("localStorage unsupported; falling back to cookie store"), Mj = BB, BB
        },
        _error(BB) {
          Xo.error("localStorage error: " + BB)
        },
        _get(BB) {
          try {
            return null == vO ? void 0 : vO.localStorage.getItem(BB)
          } catch (BB) {
            Pj._error(BB)
          }
          return null
        },
        _parse(BB) {
          try {
            return JSON.parse(Pj._get(BB)) || {}
          } catch (BB) {}
          return null
        },
        _set(BB, OB) {
          try {
            return null == vO || vO.localStorage.setItem(BB, JSON.stringify(OB)), !0
          } catch (BB) {
            Pj._error(BB)
          }
          return !1
        },
        _remove(BB) {
          try {
            null == vO || vO.localStorage.removeItem(BB)
          } catch (BB) {
            Pj._error(BB)
          }
        }
      },
      zj = [qB, jB, lB, yB, RB, PB, MB, JB, ZB],
      lj = [UB, nB, xB, tB, UO, nO, uB, RO],
      pj = BB => BB + "_cpm",
      qj = ["__proto__", "constructor", "prototype"],
      Zj = BB => {
        if (!VG(BB)) return {};
        const OB = {};
        return Object.keys(BB).forEach((GB => {
          -1 === qj.indexOf(GB) && (OB[GB] = BB[GB])
        })), OB
      },
      Nj = function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const GB = {};
        return [...lj, ...OB].forEach((OB => {
          const YB = BB[OB];
          nG(YB) || kG(YB) || "" === YB || (GB[OB] = YB)
        })), GB
      },
      Rj = BB => {
        let OB = 5381,
          GB = 2166136261;
        for (let YB = 0; BB.length > YB; YB++) {
          const DB = BB.charCodeAt(YB);
          OB = 33 * OB ^ DB, GB = Math.imul(GB ^ DB, 16777619)
        }
        return BB.length.toString(36) + "." + (OB >>> 0).toString(36) + "." + (GB >>> 0).toString(36)
      },
      Wj = (BB, OB) => ({
        p: OB,
        f: Rj(JSON.stringify(BB))
      }),
      Aj = (BB, OB) => {
        if (!OB) return {
          properties: [],
          isValid: !1
        };
        try {
          const GB = Jj._parse(pj(BB)),
            YB = (null == GB ? void 0 : GB.f) === Rj(OB) && WG(GB.p);
          return {
            properties: YB ? GB.p : [],
            isValid: YB
          }
        } catch (BB) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      Vj = (BB, OB) => OB + "|" + (Jj._get(pj(BB)) || ""),
      Sj = {},
      nj = {
        _is_supported: () => !0,
        _error(BB) {
          Xo.error("memoryStorage error: " + BB)
        },
        _get: BB => BB in Sj ? Sj[BB] : null,
        _parse: BB => BB in Sj ? Sj[BB] : null,
        _set: (BB, OB) => (Sj[BB] = OB, !0),
        _remove(BB) {
          delete Sj[BB]
        }
      };
    let Uj = null;
    const fj = {
      _is_supported() {
        if (!kG(Uj)) return Uj;
        if (Uj = !0, nG(vO)) Uj = !1;
        else try {
          const BB = "__support__";
          fj._set(BB, "xyz"), '"xyz"' !== fj._get(BB) && (Uj = !1), fj._remove(BB)
        } catch (YB) {
          Uj = !1
        }
        return Uj
      },
      _error(BB) {
        Xo.error("sessionStorage error: ", BB)
      },
      _get(BB) {
        try {
          return null == vO ? void 0 : vO.sessionStorage.getItem(BB)
        } catch (BB) {
          fj._error(BB)
        }
        return null
      },
      _parse(BB) {
        try {
          return JSON.parse(fj._get(BB)) || null
        } catch (BB) {}
        return null
      },
      _set(BB, OB) {
        try {
          return null == vO || vO.sessionStorage.setItem(BB, JSON.stringify(OB)), !0
        } catch (BB) {
          fj._error(BB)
        }
        return !1
      },
      _remove(BB) {
        try {
          null == vO || vO.sessionStorage.removeItem(BB)
        } catch (BB) {
          fj._error(BB)
        }
      }
    };
    var kj = class {
      constructor(BB) {
        this._instance = BB
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
      optInOut(BB) {
        this.Vq._set(this._storageKey, BB ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.Vq._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: BB,
          opt_out_capturing_cookie_prefix: OB,
          consent_persistence_name: GB
        } = this._instance.config;
        return GB || (OB ? OB + BB : "__ph_opt_in_out_" + BB)
      }
      get _storedConsent() {
        const BB = this.Vq._get(this._storageKey);
        return EG(BB) ? 1 : zG(cG, BB) ? 0 : -1
      }
      get Vq() {
        const BB = this._config.opt_out_capturing_persistence_type,
          OB = "localStorage" === BB ? Pj : Jj,
          GB = OB._is_supported() ? OB : nj;
        if (!this._persistentStore || this._persistentStore !== GB) {
          this._persistentStore = GB;
          const OB = "localStorage" === BB ? Jj : Pj;
          OB._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(EG(OB._get(this._storageKey))), OB._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == xO ? void 0 : xO.doNotTrack, null == xO ? void 0 : xO.msDoNotTrack, jG.doNotTrack, null == xO ? void 0 : xO.globalPrivacyControl].some((BB => EG(BB)))
      }
    };

    function dj(BB, OB) {
      var GB;
      const YB = null == BB || null === (GB = BB.config) || void 0 === GB ? void 0 : GB.get_current_url;
      if (!AG(YB)) return OB;
      try {
        const BB = YB(OB);
        return UG(BB) && BB ? BB : OB
      } catch (BB) {
        return Xo.error("Error in get_current_url, falling back to window.location.href", BB), OB
      }
    }

    function Kj(BB) {
      var OB;
      return BB instanceof Element && ("__POSTHOG_TOOLBAR__" === BB.id || !!(null === (OB = BB.closest) || void 0 === OB ? void 0 : OB.call(BB, ".toolbar-global-fade-container")))
    }

    function uj(BB) {
      return !!BB && 1 === BB.nodeType
    }

    function mj(BB, OB) {
      return !!BB && !!BB.tagName && BB.tagName.toLowerCase() === OB.toLowerCase()
    }

    function Ij(BB) {
      return !!BB && 3 === BB.nodeType
    }

    function Fj(BB) {
      return !!BB && 11 === BB.nodeType && uj(BB.host)
    }

    function ij(BB) {
      return BB ? lG(BB).split(/\s+/) : []
    }

    function Lj(BB, OB) {
      const GB = function(BB) {
        var OB;
        const GB = null == vO || null === (OB = vO.location) || void 0 === OB ? void 0 : OB.href;
        return nG(GB) ? void 0 : dj(BB, GB)
      }(OB);
      return !!(GB && BB && BB.some((BB => GB.match(BB))))
    }

    function gj(BB) {
      let OB = "";
      switch (typeof BB.className) {
        case "string":
          OB = BB.className;
          break;
        case "object":
          OB = (BB.className && "baseVal" in BB.className ? BB.className.baseVal : null) || BB.getAttribute("class") || "";
          break;
        default:
          OB = ""
      }
      return ij(OB)
    }

    function rj(BB) {
      return dG(BB) ? null : lG(BB).split(/(\s+)/).filter((BB => py(BB))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function Xj(BB) {
      let OB = "";
      return Qy(BB) && !oy(BB) && BB.childNodes && BB.childNodes.length && co(BB.childNodes, (function(BB) {
        var GB;
        Ij(BB) && BB.textContent && (OB += null !== (GB = rj(BB.textContent)) && void 0 !== GB ? GB : "")
      })), lG(OB)
    }

    function wj(BB) {
      var OB;
      return nG(BB.target) ? BB.srcElement || null : (null === (OB = BB.target) || void 0 === OB ? void 0 : OB.shadowRoot) ? BB.composedPath()[0] || null : BB.target || null
    }
    const Ej = ["a", "button", "form", "input", "select", "textarea", "label"];

    function cj(BB, OB) {
      const GB = BB.matches || BB.matchesSelector || BB.msMatchesSelector || BB.mozMatchesSelector || BB.webkitMatchesSelector || BB.oMatchesSelector;
      try {
        return !!GB && GB.call(BB, OB)
      } catch (BB) {
        return !1
      }
    }

    function hj(BB, OB) {
      if (nG(OB)) return !0;
      for (const GB of BB)
        if (OB.some((BB => cj(GB, BB)))) return !0;
      return !1
    }

    function aj(BB) {
      const OB = BB.parentNode;
      return !(!OB || !uj(OB)) && OB
    }
    const ej = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      Tj = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      bj = [...Tj, "+", "-", "\u2212", "\u2013"],
      Cj = bj.length + 10,
      Hj = ["button", "a", "input", "select", "textarea", "label"],
      vj = ["button", "link", "tab", "menuitem", "option"],
      sj = (BB, OB) => /[a-z0-9]/i.test(OB) ? zG(bj, OB) ? new RegExp(`\\b${OB}\\b`).test(BB) : BB.includes(OB) : BB === OB,
      xj = BB => zG(Hj, BB.tagName.toLowerCase()) || zG(vj, (BB.getAttribute("role") || "").toLowerCase());

    function tj(BB) {
      let OB = "",
        GB = "";
      const YB = BB => {
        uj(BB) && Qy(BB) && !oy(BB) && (OB += ` ${Xj(BB)}`, GB = GB || BB.getAttribute("aria-label") || "", co(BB.childNodes, YB))
      };
      YB(BB), OB = lG(OB.replace(/\s+/g, " "));
      const DB = (py(OB) ? OB : "").toLowerCase(),
        QB = BB.getAttribute("aria-label") || (DB ? "" : GB);
      return {
        safeText: DB,
        ariaLabel: lG(QB).toLowerCase()
      }
    }
    const By = [".ph-no-rageclick", ".ph-no-capture"],
      Oy = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Gy(BB, OB) {
      if (!vO || Yy(BB)) return !1;
      let GB, YB, DB;
      var QB, oB;
      if (mG(OB) ? (GB = !!OB && By, YB = void 0, DB = !1) : (GB = null !== (QB = null == OB ? void 0 : OB.css_selector_ignorelist) && void 0 !== QB ? QB : By, YB = null == OB ? void 0 : OB.content_ignorelist, DB = null !== (oB = null == OB ? void 0 : OB.ignore_text_selection) && void 0 !== oB && oB), !1 === GB) return !1;
      if (DB && function(BB) {
          return !(!BB || !uj(BB)) && (!!mj(BB, "textarea") || (mj(BB, "input") ? zG(Oy, (BB.getAttribute("type") || "").toLowerCase()) : function(BB) {
            var OB;
            if (BB.isContentEditable) return !0;
            const GB = null === (OB = BB.getAttribute) || void 0 === OB ? void 0 : OB.call(BB, "contenteditable");
            return "true" === GB || "" === GB
          }(BB)))
        }(BB)) return !1;
      const {
        targetElementList: jB
      } = Dy(BB, !1);
      return !(YB && function(BB, OB) {
        let GB, {
          safeText: YB,
          ariaLabel: DB
        } = OB;
        if (!0 === BB) GB = Tj;
        else {
          if (!WG(BB)) return !1;
          if (BB.length > Cj) return Xo.error(`[PostHog] content_ignorelist array cannot exceed ${Cj} items. Use css_selector_ignorelist for more complex matching.`), !1;
          GB = BB.map((BB => BB.toLowerCase()))
        }
        return GB.some((BB => sj(YB, BB) || sj(DB, BB)))
      }(YB, function(BB, OB) {
        for (const GB of OB)
          if (xj(GB)) return tj(GB);
        for (const GB of OB) {
          try {
            if ("pointer" !== (null == vO ? void 0 : vO.getComputedStyle(GB).getPropertyValue("cursor"))) break
          } catch (BB) {
            break
          }
          const OB = tj(GB);
          if (OB.safeText || OB.ariaLabel) return OB
        }
        return tj(BB)
      }(BB, jB)) || hj(jB, GB))
    }
    const Yy = BB => !BB || mj(BB, "html") || !uj(BB),
      Dy = (BB, OB) => {
        if (!vO || Yy(BB)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let GB = !1;
        const YB = [BB];
        let DB = BB;
        for (; DB.parentNode && !mj(DB, "body");) {
          if (Fj(DB.parentNode)) {
            YB.push(DB.parentNode.host), DB = DB.parentNode.host;
            continue
          }
          const QB = aj(DB);
          if (!QB) break;
          if (OB || Ej.indexOf(QB.tagName.toLowerCase()) > -1) GB = !0;
          else try {
            const BB = vO.getComputedStyle(QB);
            BB && "pointer" === BB.getPropertyValue("cursor") && (GB = !0)
          } catch (BB) {}
          YB.push(QB), DB = QB
        }
        return {
          parentIsUsefulElement: GB,
          targetElementList: YB
        }
      };

    function Qy(BB) {
      const OB = new Set;
      let GB = 0;
      for (let QB = BB; QB.parentNode && !mj(QB, "body"); QB = QB.parentNode) {
        if (GB++ >= 1e3 || OB.has(QB)) return !1;
        OB.add(QB);
        const BB = gj(QB);
        if (zG(BB, "ph-sensitive") || zG(BB, "ph-no-capture")) return !1
      }
      if (zG(gj(BB), "ph-include")) return !0;
      const YB = BB.type || "";
      if (UG(YB)) switch (YB.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const DB = BB.name || BB.id || "";
      return !UG(DB) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(DB.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function oy(BB) {
      return !!(mj(BB, "input") && !["button", "checkbox", "submit", "reset"].includes(BB.type) || mj(BB, "select") || mj(BB, "textarea") || "true" === BB.getAttribute("contenteditable"))
    }
    const jy = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      yy = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      Jy = [16, 15, 14, 13],
      My = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Py = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      zy = /[0-9A-Za-z_]/;

    function ly(BB) {
      let OB = 0,
        GB = !1;
      for (let YB = BB.length - 1; YB >= 0; YB--) {
        let DB = BB.charCodeAt(YB) - 48;
        GB && (DB *= 2, DB > 9 && (DB -= 9)), OB += DB, GB = !GB
      }
      return OB % 10 == 0
    }

    function py(BB) {
      let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (dG(BB)) return !1;
      if (UG(BB)) {
        if (BB = lG(BB), OB ? jy.test((BB || "").replace(/[- ]/g, "")) : function(BB) {
            let OB;
            for (yy.lastIndex = 0; OB = yy.exec(BB);) {
              const BB = OB[2];
              if (!BB) continue;
              const GB = BB.replace(/[- ]/g, "");
              for (let OB = 0; GB.length > OB; OB++)
                for (const BB of Jy) {
                  const YB = OB + BB;
                  if (GB.length >= YB) {
                    const BB = GB.slice(OB, YB);
                    if (jy.test(BB) && ly(BB)) return !0
                  }
                }
            }
            return !1
          }(BB)) return !1;
        if (OB ? My.test(BB) : function(BB) {
            let OB;
            for (Py.lastIndex = 0; OB = Py.exec(BB);) {
              const BB = OB[1],
                GB = OB[3];
              if (!(BB && GB && zy.test(BB) && zy.test(GB))) return !0
            }
            return !1
          }(BB)) return !1
      }
      return !0
    }

    function qy(BB) {
      let OB = Xj(BB);
      return OB = `${OB} ${Zy(BB)}`.trim(), py(OB) ? OB : ""
    }

    function Zy(BB) {
      let OB = "";
      return BB && BB.childNodes && BB.childNodes.length && co(BB.childNodes, (function(BB) {
        var GB;
        if (BB && "span" === (null === (GB = BB.tagName) || void 0 === GB ? void 0 : GB.toLowerCase())) try {
          const GB = Xj(BB);
          OB = `${OB} ${GB}`.trim(), BB.childNodes && BB.childNodes.length && (OB = `${OB} ${Zy(BB)}`.trim())
        } catch (BB) {
          Xo.error("[AutoCapture]", BB)
        }
      })), OB
    }

    function Ny(BB) {
      return BB.replace(/"|\\"/g, '\\"')
    }

    function Ry(BB) {
      const OB = BB.attr__class;
      if (OB) return WG(OB) ? OB : ij(OB)
    }
    const Wy = wo("[Dead Clicks]"),
      Ay = () => !0,
      Vy = BB => {
        var OB;
        const GB = !!(null === (OB = BB.instance.persistence) || void 0 === OB ? void 0 : OB.get_property(EB)),
          YB = BB.instance.config.capture_dead_clicks;
        return mG(YB) ? YB : !!VG(YB) || GB
      };
    var Sy = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(BB, OB, GB) {
        this.instance = BB, this.isEnabled = OB, this.onCapture = GB, this.startIfEnabledOrStop()
      }
      onRemoteConfig(BB) {
        if (!BB.ok) return;
        const OB = BB.config;
        "captureDeadClicks" in OB && (this.instance.persistence && this.instance.persistence.register({
          [EB]: OB.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(BB) {
        var OB, GB, YB;
        (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.initDeadClicksAutocapture) ? BB(): null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this.instance, "dead-clicks-autocapture", (OB => {
          OB ? Wy.error("failed to load script", OB) : BB()
        }))
      }
      _start() {
        var BB;
        if (tO) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (BB = jG.__PosthogExtensions__) || void 0 === BB ? void 0 : BB.initDeadClicksAutocapture)) {
            const BB = VG(this.instance.config.capture_dead_clicks) ? RD({}, this.instance.config.capture_dead_clicks) : {};
            BB.__onCapture = this.onCapture, this.onCapture && (BB.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = jG.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, BB), this._lazyLoadedDeadClicksAutocapture.start(tO), Wy.info("starting...")
          }
        } else Wy.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Wy.info("stopping..."))
      }
    };
    const ny = wo("[SegmentIntegration]");

    function Uy(BB, OB) {
      let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const YB = BB.config.segment;
      if (!YB) return OB();
      const {
        analytics: DB,
        filterProperties: QB
      } = (BB => AG(BB.register))(oB = YB) ? {
        analytics: oB
      } : oB;
      var oB;
      ! function(BB, OB, GB, YB) {
        const DB = OB => {
            const DB = () => OB.anonymousId() || Dj();
            BB.config.get_device_id = DB, YB && OB.id() && (BB.register({
              distinct_id: OB.id(),
              $device_id: DB()
            }), BB.persistence.set_property(RO, hO)), GB(YB ? void 0 : OB.anonymousId() || void 0)
          },
          QB = OB.user();
        "then" in QB && AG(QB.then) ? QB.then(DB) : DB(QB)
      }(BB, DB, (GB => {
        DB.register(function(BB, OB) {
          let {
            filterProperties: GB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || ny.warn("This browser does not have Promise support, and can not use the segment integration");
          const YB = (YB, DB) => {
            if (!DB) return YB;
            const QB = !!OB && YB.event.anonymousId === OB && !YB.event.userId;
            QB || YB.event.userId || YB.event.anonymousId === BB.get_distinct_id() || (ny.info("No userId set, resetting PostHog"), BB.reset()), QB || (OB = void 0), YB.event.userId && YB.event.userId !== BB.get_distinct_id() && (ny.info("UserId set, identifying with PostHog"), BB.identify(YB.event.userId));
            let oB = BB.calculateEventProperties(DB, YB.event.properties);
            if (!dG(GB)) {
              const BB = YB.event.properties || {},
                OB = {};
              for (const GB of Object.keys(oB)) NG.call(BB, GB) || (OB[GB] = oB[GB]);
              const DB = ((BB, OB) => {
                const GB = WG(BB) ? BB : [BB];
                let YB = RD({}, OB);
                for (const DB of GB) try {
                  if (YB = DB(YB), dG(YB)) return null
                } catch (BB) {
                  return ny.error("Error in Segment filterProperties:", BB), null
                }
                return YB
              })(GB, OB);
              if (dG(DB)) return YB;
              oB = DB
            }
            return YB.event.properties = Object.assign({}, oB, YB.event.properties), YB
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: BB => YB(BB, BB.event.event),
            page: BB => YB(BB, TO),
            identify: BB => YB(BB, CO),
            screen: BB => YB(BB, "$screen")
          }
        }(BB, GB, {
          filterProperties: QB
        })).then((() => {
          OB()
        }), (BB => {
          ny.error("Failed to register the Segment integration", BB), OB()
        }))
      }), GB)
    }
    const fy = "posthog-js";

    function ky(BB) {
      let {
        organization: OB,
        projectId: GB,
        prefix: YB,
        severityAllowList: DB = ["error"],
        sendExceptionsToPostHog: QB = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return oB => {
        var jB, yB, JB, MB, PB;
        if ("*" !== DB && !DB.includes(oB.level) || !BB.__loaded) return oB;
        oB.tags || (oB.tags = {});
        const zB = BB.requestRouter.endpointFor("ui", `/project/${BB.config.token}/person/${BB.get_distinct_id()}`);
        oB.tags["PostHog Person URL"] = zB, BB.sessionRecordingStarted() && (oB.tags["PostHog Recording URL"] = BB.get_session_replay_url({
          withTimestamp: !0
        }));
        const lB = (null === (jB = oB.exception) || void 0 === jB ? void 0 : jB.values) || [],
          pB = lB.map((BB => RD(RD({}, BB), {}, {
            stacktrace: BB.stacktrace ? RD(RD({}, BB.stacktrace), {}, {
              type: "raw",
              frames: (BB.stacktrace.frames || []).map((BB => RD(RD({}, BB), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          qB = {
            $exception_message: (null === (yB = lB[0]) || void 0 === yB ? void 0 : yB.value) || oB.message,
            $exception_type: null === (JB = lB[0]) || void 0 === JB ? void 0 : JB.type,
            $exception_level: oB.level,
            $exception_list: pB,
            $sentry_event_id: oB.event_id,
            $sentry_exception: oB.exception,
            $sentry_exception_message: (null === (MB = lB[0]) || void 0 === MB ? void 0 : MB.value) || oB.message,
            $sentry_exception_type: null === (PB = lB[0]) || void 0 === PB ? void 0 : PB.type,
            $sentry_tags: oB.tags
          };
        var ZB;
        return OB && GB && (qB.$sentry_url = (YB || "https://sentry.io/organizations/") + OB + "/issues/?project=" + GB + "&query=" + oB.event_id), QB && (null === (ZB = BB.exceptions) || void 0 === ZB || ZB.sendExceptionEvent(qB)), oB
      }
    }
    var dy = class {
        constructor(BB, OB, GB, YB, DB, QB) {
          this.name = fy, this.setupOnce = function(oB) {
            oB(ky(BB, {
              organization: OB,
              projectId: GB,
              prefix: YB,
              severityAllowList: DB,
              sendExceptionsToPostHog: null == QB || QB
            }))
          }
        }
      },
      Ky = class {
        constructor(BB) {
          this._onSessionIdChange = (BB, OB, GB) => {
            GB && (GB.noSessionId || GB.activityTimeout || GB.sessionPastMaximumLength || GB.crossTabAdoption) && (Xo.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: BB,
              changeReason: GB
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = BB, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var BB;
          this._unsubscribeSessionId = null === (BB = this._instance.sessionManager) || void 0 === BB ? void 0 : BB.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var BB;
          null === (BB = this._unsubscribeSessionId) || void 0 === BB || BB.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(BB, OB) {
          var GB;
          const YB = this._previousPageViewProperties(BB, OB);
          return this._currentPageview = {
            pathname: null !== (GB = null == vO ? void 0 : vO.location.pathname) && void 0 !== GB ? GB : "",
            pageViewId: OB,
            timestamp: BB
          }, this._instance.scrollManager.resetContext(), YB
        }
        doPageLeave(BB) {
          var OB;
          return this._previousPageViewProperties(BB, null === (OB = this._currentPageview) || void 0 === OB ? void 0 : OB.pageViewId)
        }
        doEvent() {
          var BB;
          return {
            $pageview_id: null === (BB = this._currentPageview) || void 0 === BB ? void 0 : BB.pageViewId
          }
        }
        _previousPageViewProperties(BB, OB) {
          const GB = this._currentPageview;
          if (!GB) return {
            $pageview_id: OB
          };
          let YB = {
            $pageview_id: OB,
            $prev_pageview_id: GB.pageViewId
          };
          const DB = this._instance.scrollManager.getContext();
          if (DB && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: BB,
              lastScrollY: OB,
              maxScrollY: GB,
              maxContentHeight: QB,
              lastContentY: oB,
              maxContentY: jB
            } = DB;
            if (!(nG(BB) || nG(OB) || nG(GB) || nG(QB) || nG(oB) || nG(jB))) {
              BB = Math.ceil(BB), OB = Math.ceil(OB), GB = Math.ceil(GB), QB = Math.ceil(QB), oB = Math.ceil(oB), jB = Math.ceil(jB);
              const DB = BB > 1 ? CG(OB / BB, 0, 1, Xo) : 1,
                yB = BB > 1 ? CG(GB / BB, 0, 1, Xo) : 1,
                JB = QB > 1 ? CG(oB / QB, 0, 1, Xo) : 1,
                MB = QB > 1 ? CG(jB / QB, 0, 1, Xo) : 1;
              YB = ho(YB, {
                $prev_pageview_last_scroll: OB,
                $prev_pageview_last_scroll_percentage: DB,
                $prev_pageview_max_scroll: GB,
                $prev_pageview_max_scroll_percentage: yB,
                $prev_pageview_last_content: oB,
                $prev_pageview_last_content_percentage: JB,
                $prev_pageview_max_content: jB,
                $prev_pageview_max_content_percentage: MB
              })
            }
          }
          return GB.pathname && (YB.$prev_pageview_pathname = GB.pathname), GB.timestamp && (YB.$prev_pageview_duration = (BB.getTime() - GB.timestamp.getTime()) / 1e3), YB
        }
      };
    const uy = ["flags", "surveys"],
      my = {
        [SB]: {
          exposure: "hidden"
        },
        [kB]: {
          exposure: "hidden"
        },
        [dB]: {
          exposure: "hidden"
        },
        [FB]: {
          exposure: "hidden"
        },
        [uB]: {
          exposure: "hidden"
        },
        [IB]: {
          exposure: "hidden"
        },
        [iB]: {
          exposure: "event"
        },
        [LB]: {
          exposure: "hidden"
        },
        [hB]: {
          exposure: "hidden"
        },
        [gB]: {
          exposure: "event"
        },
        [rB]: {
          exposure: "hidden"
        },
        [XB]: {
          exposure: "event"
        },
        [wB]: {
          exposure: "event"
        },
        [EB]: {
          exposure: "event"
        },
        [cB]: {
          exposure: "hidden"
        },
        [aB]: {
          exposure: "event"
        },
        [eB]: {
          exposure: "hidden"
        },
        [TB]: {
          exposure: "hidden"
        },
        [xB]: {
          exposure: "hidden"
        },
        [tB]: {
          exposure: "event"
        },
        [bB]: {
          exposure: "event",
          shouldSkipFromEventProperties: BB => kG(BB)
        },
        [BO]: {
          exposure: "event"
        },
        [OO]: {
          exposure: "event"
        },
        [GO]: {
          exposure: "event"
        },
        [YO]: {
          exposure: "event"
        },
        [DO]: {
          exposure: "hidden"
        },
        [lB]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [jB]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [oB]: {
          exposure: "hidden"
        },
        [yB]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [RB]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [PB]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [zB]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [WB]: {
          exposure: "hidden"
        },
        [AB]: {
          exposure: "hidden"
        },
        [qB]: {
          exposure: "hidden"
        },
        [pB]: {
          exposure: "hidden"
        },
        [oO]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [jO]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [yO]: {
          exposure: "event"
        },
        [JO]: {
          exposure: "hidden"
        },
        [MO]: {
          exposure: "hidden"
        },
        [PO]: {
          exposure: "hidden"
        },
        [zO]: {
          exposure: "hidden"
        },
        [lO]: {
          exposure: "hidden"
        },
        [pO]: {
          exposure: "event"
        },
        [qO]: {
          exposure: "event"
        },
        [ZO]: {
          exposure: "event"
        },
        [NO]: {
          exposure: "event"
        },
        [ZB]: {
          exposure: "hidden"
        },
        [NB]: {
          exposure: "hidden"
        },
        [QO]: {
          exposure: "event"
        },
        [JB]: {
          exposure: "hidden"
        },
        [MB]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [RO]: {
          exposure: "hidden"
        },
        [WO]: {
          exposure: "hidden"
        },
        [AO]: {
          exposure: "hidden"
        },
        [VO]: {
          exposure: "hidden"
        },
        [SO]: {
          exposure: "hidden"
        },
        [nO]: {
          exposure: "hidden"
        },
        [UO]: {
          exposure: "hidden"
        },
        [CB]: {
          exposure: "event"
        },
        [HB]: {
          exposure: "event"
        },
        [vB]: {
          exposure: "event"
        },
        [sB]: {
          exposure: "event"
        },
        [dO]: {
          exposure: "event"
        },
        [KO]: {
          exposure: "event"
        },
        [uO]: {
          exposure: "hidden"
        },
        [mO]: {
          exposure: "hidden"
        },
        [IO]: {
          exposure: "hidden"
        },
        [FO]: {
          exposure: "hidden"
        },
        [iO]: {
          exposure: "hidden"
        },
        [LO]: {
          exposure: "hidden"
        },
        [gO]: {
          exposure: "hidden"
        },
        [rO]: {
          exposure: "hidden"
        },
        [XO]: {
          exposure: "hidden"
        },
        [wO]: {
          exposure: "event"
        }
      },
      Iy = [
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
      Fy = BB => {
        const OB = my[BB];
        if (OB) return OB;
        for (const [GB, YB] of Iy)
          if (0 === BB.indexOf(GB)) return YB
      };

    function iy() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (YB) {
        return
      }
    }
    const Ly = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (YB) {
          return !1
        }
      },
      gy = (BB, OB) => BB >= OB && Ly(),
      ry = (BB, OB, GB, YB) => {
        if (0 === BB) {
          if (Ly()) {
            const BB = OB + 1;
            return BB === GB && YB(), BB
          }
          return OB
        }
        return 0
      },
      Xy = (BB, OB) => {
        try {
          let GB;
          return JSON.stringify(BB, ((BB, OB) => {
            var YB;
            return gG(OB) ? (null !== (YB = GB) && void 0 !== YB || (GB = new WeakMap), GB.has(OB) || GB.set(OB, bo(OB)), GB.get(OB)) : "bigint" == typeof OB ? OB.toString() : OB
          }), OB)
        } catch (OB) {
          return qG(BB)
        }
      },
      wy = BB => {
        const OB = null == tO ? void 0 : tO.createElement("a");
        return nG(OB) ? null : (OB.href = BB, OB)
      },
      Ey = function(BB, OB) {
        const GB = ((BB.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let YB;
        for (let DB = 0; GB.length > DB; DB++) {
          const BB = GB[DB].split("=");
          if (BB[0] === OB) {
            YB = BB;
            break
          }
        }
        if (!WG(YB) || 2 > YB.length) return "";
        {
          let BB = YB[1];
          try {
            BB = decodeURIComponent(BB)
          } catch (OB) {
            Xo.error("Skipping decoding for malformed query param: " + BB)
          }
          return BB.replace(/\+/g, " ")
        }
      },
      cy = function(BB, OB, GB) {
        if (!BB || !OB || !OB.length) return BB;
        const YB = BB.split("#"),
          DB = YB[1],
          QB = (YB[0] || "").split("?"),
          oB = QB[1],
          jB = QB[0],
          yB = (oB || "").split("&"),
          JB = [];
        for (let PB = 0; yB.length > PB; PB++) {
          const BB = yB[PB].split("=");
          WG(BB) && (OB.includes(BB[0]) ? JB.push(BB[0] + "=" + GB) : JB.push(yB[PB]))
        }
        let MB = jB;
        return null != oB && (MB += "?" + JB.join("&")), null != DB && (MB += "#" + DB), MB
      },
      hy = function(BB, OB) {
        const GB = BB.match(new RegExp(OB + "=([^&]*)"));
        return GB ? GB[1] : null
      },
      ay = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      ey = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...ay],
      Ty = "<masked>",
      by = ["li_fat_id"];

    function Cy(BB, OB, GB) {
      if (!tO) return {};
      const YB = OB ? [...ay, ...GB || []] : [],
        DB = Hy(cy(tO.URL, YB, Ty), BB),
        QB = function() {
          const BB = {};
          return co(by, (function(OB) {
            const GB = xo(OB);
            BB[OB] = GB || null
          })), BB
        }();
      return ho(QB, DB)
    }

    function Hy(BB, OB) {
      const GB = ey.concat(OB || []),
        YB = {};
      return co(GB, (function(OB) {
        const GB = Ey(BB, OB);
        YB[OB] = GB || null
      })), YB
    }

    function vy(BB) {
      const OB = function(BB) {
          return BB ? 0 === BB.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === BB.search("https?://(.*)bing.com") ? "bing" : 0 === BB.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === BB.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(BB),
        GB = "yahoo" != OB ? "q" : "p",
        YB = {};
      if (!kG(OB)) {
        YB.$search_engine = OB;
        const BB = tO ? Ey(tO.referrer, GB) : "";
        BB.length && (YB.ph_keyword = BB)
      }
      return YB
    }

    function sy() {
      return navigator.language || navigator.userLanguage
    }

    function xy() {
      const BB = sy();
      return "string" == typeof BB ? BB.split("-")[0] : void 0
    }
    const ty = "$direct";

    function BJ() {
      return (null == tO ? void 0 : tO.referrer) || ty
    }

    function OJ(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const YB = BB ? [...ay, ...OB || []] : [],
        DB = GB ? MD(null == BG ? void 0 : BG.href) : null == BG ? void 0 : BG.href,
        QB = null == DB ? void 0 : DB.substring(0, 1e3);
      return {
        r: BJ().substring(0, 1e3),
        u: QB ? cy(QB, YB, Ty) : void 0
      }
    }

    function GJ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var GB;
      const {
        r: YB,
        u: DB
      } = BB, QB = OB ? MD(DB) : DB, oB = {
        $referrer: YB,
        $referring_domain: null == YB ? void 0 : YB == ty ? ty : null === (GB = wy(YB)) || void 0 === GB ? void 0 : GB.host
      };
      if (QB) {
        oB.$current_url = QB;
        const BB = wy(QB);
        oB.$host = null == BB ? void 0 : BB.host, oB.$pathname = null == BB ? void 0 : BB.pathname;
        const OB = Hy(QB);
        ho(oB, OB)
      }
      if (YB) {
        const BB = vy(YB);
        ho(oB, BB)
      }
      return oB
    }

    function YJ() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (YB) {
        return
      }
    }
    const DJ = {
        flags: MB,
        surveys: jO
      },
      QJ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      oJ = BB => `${BB}_cookie_identity_change_pending`,
      jJ = BB => {
        let OB = "",
          GB = 0;
        for (const YB of BB) {
          const BB = encodeURIComponent(JSON.stringify(YB).slice(1, -1)).length;
          if (GB + BB > 1e3) break;
          OB += YB, GB += BB
        }
        return OB
      },
      yJ = "main",
      JJ = [lB, jB, yB, RB, PB, MB, zB, qB],
      MJ = BB => -1 !== JJ.indexOf(BB),
      PJ = [uB, IB],
      zJ = BB => -1 !== PJ.indexOf(BB),
      lJ = (BB, OB) => {
        try {
          return JSON.stringify(BB) === JSON.stringify(OB)
        } catch (QB) {
          return BB === OB
        }
      },
      pJ = BB => {
        if (!BB) return {};
        const OB = JSON.parse(BB);
        return VG(OB) ? OB : {}
      },
      qJ = (BB, OB) => {
        co(BB, ((GB, YB) => {
          const DB = Fy(YB);
          DB && "event" !== DB.exposure || {}.hasOwnProperty.call(OB, YB) || delete BB[YB]
        }))
      };
    var ZJ = class {
      constructor(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !BB.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = BB, this._ownsSplitStorage = GB, this.props = {}, this._campaign_params_url = void 0, this._name = (BB => {
            let OB = "";
            return BB.token && (OB = BB.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), BB.persistence_name ? "ph_" + BB.persistence_name : "ph_" + OB + "_posthog"
          })(BB), this._disabled = BB.disable_persistence || !!OB, this.Vq = this._buildStorage(BB), this._splitStorage = this._resolveSplitStorage(BB), this.load(YB), this._markLoadedCrossTabFeatureFlagChangesPending(), BB.debug && Xo.info("Persistence loaded", BB.persistence, RD({}, this.props)), this.update_config(BB, BB, OB), this.save(), vO) {
          const BB = () => this.flush();
          vo(vO, "beforeunload", BB, {
            capture: !1
          }), vo(vO, "pagehide", BB, {
            capture: !1
          }), this._onStorage = BB => {
            if (this._splitStorageEligible && (!BB.storageArea || BB.storageArea === (null == vO ? void 0 : vO.localStorage)) && BB.key)
              if (BB.key !== this._name) {
                if (this._splitStorage) {
                  const OB = uy.find((OB => BB.key === this._groupEntryName(OB)));
                  OB && this._syncCrossTabFeatureFlagProperties(BB.key, OB)
                }
              } else this._syncCrossTabFeatureFlagProperties(BB.key, yJ)
          }, vo(vO, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(BB) {
        Object.entries(BB).forEach((BB => {
          let [OB, GB] = BB;
          const YB = this._pendingCrossTabFeatureFlagChanges.get(OB);
          if (!MJ(OB) || !0 === YB) return;
          if (!0 === GB) return void this._setCrossTabFeatureFlagChangesPending(OB, !0);
          const DB = new Set(YB || []);
          GB.forEach((BB => DB.add(BB))), DB.size && this._setCrossTabFeatureFlagChangesPending(OB, DB)
        }))
      }
      onCrossTabFeatureFlagChange(BB) {
        return this._crossTabFeatureFlagHandlers.add(BB), () => this._crossTabFeatureFlagHandlers.delete(BB)
      }
      destroy() {
        this._onStorage && vO && (vO.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(BB, OB) {
        let GB, YB, DB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (YB = Pj._get(BB), kG(YB)) {
            const BB = this._slotWriteState(OB);
            return BB.storageValue = null, OB !== yJ && (BB.persisted = !1), !1
          }
          GB = pJ(YB)
        } catch (BB) {
          return !1
        }
        const QB = OB === yJ ? GB : Pj._parse(this._name);
        if (QB && this._hasCrossTabFeatureFlagIdentityMismatch(QB)) return !1;
        const oB = this._mergeCrossTabFeatureFlagProperties(GB, OB, DB);
        return OB === yJ && this._splitStorage && !lJ(this._partitionProps().main, GB) || this._rememberCrossTabStorageFingerprint(GB, OB, !0, YB), oB
      }
      _hasCrossTabFeatureFlagIdentityMismatch(BB) {
        const OB = this.props[nB],
          GB = BB[nB];
        return !nG(OB) && !nG(GB) && OB !== GB
      }
      _rememberCrossTabStorageFingerprint(BB, OB, GB, YB) {
        const DB = this._slotWriteState(OB);
        DB.storageValue = YB, OB !== yJ && (DB.persisted = GB);
        try {
          DB.fingerprint = this._entryFingerprint(BB, OB)
        } catch (BB) {
          DB.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(BB, OB, GB) {
        let YB = !1;
        return JJ.forEach((GB => {
          var DB;
          const QB = null === (DB = Fy(GB)) || void 0 === DB ? void 0 : DB.storageGroup;
          if (OB === yJ && this._splitStorage && QB || OB !== yJ && QB !== OB) return;
          const oB = GB in BB,
            jB = this._mergePendingCrossTabFeatureFlagChanges(GB, oB ? BB[GB] : void 0),
            yB = this._pendingCrossTabFeatureFlagChanges.has(GB) ? GB in this.props : oB;
          yB === GB in this.props && lJ(jB, this.props[GB]) || (yB ? this._setProp(GB, jB, !1) : this._deleteProp(GB, !1), YB = !0)
        })), YB && GB && this._crossTabFeatureFlagHandlers.forEach((BB => BB())), YB
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const BB = Pj._get(this._name),
            OB = this._slotWriteState(yJ);
          let GB, YB = !1,
            DB = !1;
          if (BB !== OB.storageValue)
            if (kG(BB)) OB.storageValue = null;
            else {
              if (GB = pJ(BB), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(GB), this._crossTabFeatureFlagIdentityMismatch) return !1;
              DB = this._mergeCrossTabFeatureFlagProperties(GB, yJ, !1), !this._splitStorage || lJ(this._partitionProps().main, GB) ? this._rememberCrossTabStorageFingerprint(GB, yJ, !0, BB) : OB.storageValue = BB, YB = !0
            } return this._splitStorage && uy.forEach((BB => {
            const OB = Pj._get(this._groupEntryName(BB)),
              QB = this._slotWriteState(BB),
              oB = GB || {},
              jB = YB && JJ.some((OB => {
                var GB;
                return (null === (GB = Fy(OB)) || void 0 === GB ? void 0 : GB.storageGroup) === BB && OB in oB
              }));
            if (OB === QB.storageValue && !jB) return;
            if (kG(OB)) return QB.storageValue = null, QB.persisted = !1, void(jB && (DB = this._mergeCrossTabFeatureFlagProperties(oB, BB, !1) || DB));
            const yB = pJ(OB);
            DB = this._mergeCrossTabFeatureFlagProperties(yB, BB, !1) || DB, this._rememberCrossTabStorageFingerprint(yB, BB, !0, OB)
          })), DB
        } catch (YB) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(BB, OB) {
        this._pendingCrossTabFeatureFlagChanges.set(BB, OB);
        const GB = Fy(BB);
        (null == GB ? void 0 : GB.volatile) || (this._slotWriteState((this._splitStorage ? null == GB ? void 0 : GB.storageGroup : void 0) || yJ).fingerprint = void 0, this._markGroupDirty(BB))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        JJ.forEach((BB => this._pendingCrossTabFeatureFlagChanges.set(BB, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const BB = Pj._get(this._name),
            OB = pJ(BB);
          this._slotWriteState(yJ).storageValue = BB, JJ.forEach((BB => {
            var GB;
            const YB = this._splitStorage ? null === (GB = Fy(BB)) || void 0 === GB ? void 0 : GB.storageGroup : void 0,
              DB = YB ? Pj._get(this._groupEntryName(YB)) : null;
            if (YB) {
              const BB = this._slotWriteState(YB);
              BB.storageValue = DB, BB.persisted = !kG(DB)
            }
            const QB = YB && !kG(DB) ? pJ(DB) : OB;
            BB in this.props ? this._markPendingCrossTabFeatureFlagChanges(BB, QB[BB], this.props[BB]) : BB in QB && this._setCrossTabFeatureFlagChangesPending(BB, !0)
          }))
        } catch (YB) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(BB, OB) {
        const GB = this._pendingCrossTabFeatureFlagChanges.get(BB);
        if (!GB) return OB;
        if (!0 === GB) return this.props[BB];
        if ("$active_feature_flags" === BB) {
          const YB = new Set(WG(OB) ? OB : []),
            DB = new Set(WG(this.props[BB]) ? this.props[BB] : []);
          return GB.forEach((BB => DB.has(BB) ? YB.add(BB) : YB.delete(BB))), Array.from(YB)
        }
        const YB = VG(OB) ? RD({}, OB) : {},
          DB = VG(this.props[BB]) ? this.props[BB] : {};
        return GB.forEach((BB => {
          BB in DB ? YB[BB] = DB[BB] : delete YB[BB]
        })), YB
      }
      _markPendingCrossTabFeatureFlagChanges(BB, OB, GB) {
        if (!MJ(BB)) return;
        const YB = this._pendingCrossTabFeatureFlagChanges.get(BB);
        if (!0 === YB) return;
        let DB = OB;
        if (this._splitStorageEligible) try {
          var QB;
          const OB = this._splitStorage ? null === (QB = Fy(BB)) || void 0 === QB ? void 0 : QB.storageGroup : void 0,
            GB = OB ? this._groupEntryName(OB) : this._name;
          DB = pJ(Pj._get(GB))[BB]
        } catch (BB) {}
        const oB = new Set(YB || []);
        if ("$active_feature_flags" === BB) {
          if (!nG(OB) && !WG(OB) || !nG(DB) && !WG(DB) || !WG(GB)) return void this._setCrossTabFeatureFlagChangesPending(BB, !0);
          const YB = new Set(OB || []),
            QB = new Set(DB || []),
            jB = new Set(GB);
          new Set([...YB, ...jB]).forEach((BB => {
            YB.has(BB) !== jB.has(BB) && oB.add(BB)
          })), oB.forEach((BB => {
            QB.has(BB) === jB.has(BB) && oB.delete(BB)
          }))
        } else {
          if (!VG(GB)) return void(lJ(DB, GB) ? this._pendingCrossTabFeatureFlagChanges.delete(BB) : this._setCrossTabFeatureFlagChangesPending(BB, !0));
          {
            if (!nG(OB) && !VG(OB) || nG(OB) && SG(GB) && nG(DB)) return void this._setCrossTabFeatureFlagChangesPending(BB, !0);
            const YB = VG(OB) ? OB : {},
              QB = VG(DB) ? DB : {};
            new Set([...Object.keys(YB), ...Object.keys(GB)]).forEach((BB => {
              BB in YB == BB in GB && lJ(YB[BB], GB[BB]) || oB.add(BB)
            })), oB.forEach((BB => {
              BB in QB == BB in GB && lJ(QB[BB], GB[BB]) && oB.delete(BB)
            }))
          }
        }
        oB.size ? this._setCrossTabFeatureFlagChangesPending(BB, oB) : this._pendingCrossTabFeatureFlagChanges.delete(BB)
      }
      _saveDebounceMs() {
        var BB;
        const OB = null === (BB = this._config) || void 0 === BB ? void 0 : BB.persistence_save_debounce_ms;
        return KG(OB) && OB > 0 ? OB : 0
      }
      _rememberCurrentCookieProperties(BB) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (BB) try {
            const OB = Nj(BB, this._config.cookie_persisted_properties || []),
              GB = Wj(OB, this._config.cookie_persisted_properties || []),
              YB = JSON.stringify(OB) + "|" + JSON.stringify(GB),
              DB = Jj._get(this._name) || void 0;
            DB && Vj(this._name, DB) === YB && (this._lastSeenCookiePropertiesFingerprint = YB, this._lastSeenMainCookieValue = DB)
          } catch (BB) {} else try {
            const BB = Jj._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = BB ? Vj(this._name, BB) : void 0, this._lastSeenMainCookieValue = BB
          } catch (BB) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(BB) {
        let OB, GB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !GB || this._cookieSyncSuppressed || !BB.cookieWinsOnConflict || "localstorage+cookie" !== BB.persistence.toLowerCase()) return !1;
        try {
          OB = Jj._get(this._name) || void 0
        } catch (BB) {}
        if (!OB || OB === this._lastSeenMainCookieValue) return !1;
        const YB = Vj(this._name, OB);
        let DB;
        try {
          DB = Zj(JSON.parse(OB))
        } catch (BB) {
          return !1
        }
        if ((Jj._get(this._name) || void 0) !== OB) return !1;
        this._lastSeenCookiePropertiesFingerprint = YB, this._lastSeenMainCookieValue = OB;
        const QB = Aj(this._name, OB),
          oB = [...lj, ...QB.properties],
          zB = {};
        if (Object.keys(DB).forEach((BB => {
            const OB = DB[BB];
            (nG(OB) || kG(OB) || "" === OB || "$user_state" === BB && "anonymous" !== OB && "identified" !== OB) && (zB[BB] = !0, delete DB[BB])
          })), SG(DB)) return !1;
        const NB = "distinct_id" in DB || "anonymous" === DB.$user_state || "identified" === DB.$user_state,
          WB = this.props,
          AB = WB[nB],
          VB = WB[RO],
          SB = ho({}, WB);
        [...lj, ...BB.cookie_persisted_properties || []].forEach((BB => {
          if (-1 !== oB.indexOf(BB) && !(BB in DB) && !zB[BB] && (NB || "distinct_id" !== BB && "$user_state" !== BB)) {
            const OB = SB[BB];
            (QB.isValid || -1 === lj.indexOf(BB) || !1 !== OB && 0 !== OB) && delete SB[BB]
          }
        })), this.props = ho(SB, DB), JJ.forEach((BB => {
          const OB = BB in this.props;
          BB in WB === OB && lJ(WB[BB], this.props[BB]) || (OB ? this._markPendingCrossTabFeatureFlagChanges(BB, WB[BB], this.props[BB]) : this._setCrossTabFeatureFlagChangesPending(BB, !0))
        })), !NB || "$user_state" in DB || "$user_state" in this.props || this._setProp(RO, cO);
        const UB = this.props[nB],
          fB = this.props[RO];
        return !NB || UB === AB && fB === VB || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, fj._set(oJ(this._name), !0), this._deleteProp(qB), this._deleteProp(jB), this._deleteProp(lB), this._deleteProp(yB), this._deleteProp(RB), this._deleteProp(PB), this._deleteProp(MB), this._deleteProp(JB), this._deleteProp(ZB), "anonymous" !== fB || "identified" !== VB && "anonymous" !== DB.$user_state && (nG(AB) || UB === AB) || (qJ(this.props, DB), this._deleteProp(pB)), "identified" === fB ? this.props.$user_id = UB : delete this.props.$user_id, this._deleteProp(kB)), !0
      }
      consumeCookieIdentityChange() {
        const BB = oJ(this._name),
          OB = this._cookieIdentityChangePending || !!fj._get(BB);
        return this._cookieIdentityChangePending = !1, OB && fj._remove(BB), OB
      }
      _beginCookieSyncSuppression() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !BB || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[yJ], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          BB ? this._publishSuppressedCookieSnapshot() : nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(BB) {
        -1 === QJ.indexOf(BB.persistence.toLowerCase()) && (Xo.critical("Unknown persistence type " + BB.persistence + "; falling back to localStorage+cookie"), BB.persistence = "localStorage+cookie");
        const OB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const YB = [...lj, ...BB];
          return RD(RD({}, Pj), {}, {
            _parse(BB) {
              try {
                let QB, oB = {};
                try {
                  QB = Jj._get(BB) || void 0, oB = QB ? Zj(JSON.parse(QB)) : {}
                } catch (BB) {}
                const jB = JSON.parse(Pj._get(BB) || "{}");
                let yB;
                if (OB) {
                  const OB = Aj(BB, QB),
                    GB = [...lj, ...OB.properties],
                    JB = {};
                  Object.keys(oB).forEach((BB => {
                    const OB = oB[BB];
                    kG(OB) || "" === OB || "$user_state" === BB && "anonymous" !== OB && "identified" !== OB || (JB[BB] = OB)
                  }));
                  const MB = "distinct_id" in JB || "anonymous" === JB.$user_state || "identified" === JB.$user_state;
                  if (Object.keys(JB).length > 0) {
                    var DB;
                    const BB = jB[nB],
                      QB = null !== (DB = jB.$user_state) && void 0 !== DB ? DB : cO;
                    YB.forEach((BB => {
                      if (-1 !== GB.indexOf(BB) && !(BB in oB) && (MB || "distinct_id" !== BB && "$user_state" !== BB)) {
                        const GB = jB[BB];
                        (OB.isValid || -1 === lj.indexOf(BB) || !1 !== GB && 0 !== GB) && delete jB[BB]
                      }
                    })), !MB || "$user_state" in oB || "$user_state" in jB || (jB[RO] = cO), !MB || ("distinct_id" in JB ? JB[nB] : jB[nB]) === BB && ("$user_state" in JB ? JB[RO] : jB[RO]) === QB || (zj.forEach((BB => delete jB[BB])), "identified" === JB.$user_state && "distinct_id" in JB ? jB.$user_id = JB[nB] : delete jB.$user_id, "identified" !== JB.$user_state && (delete jB[QO], delete jB[pB]), delete jB.__alias)
                  }
                  yB = ho(jB, JB)
                } else yB = ho(oB, jB);
                return GB() || Pj._set(BB, yB), yB
              } catch (BB) {}
              return null
            },
            _set(GB, YB, DB, QB, oB, jB) {
              const yB = Pj._set(GB, YB, void 0, void 0, jB);
              try {
                const JB = Nj(YB, BB);
                if (Object.keys(JB).length) {
                  if (OB) {
                    const OB = pj(GB),
                      MB = Wj(JB, BB);
                    if (Jj._set(OB, MB, DB, QB, oB, jB), Jj._get(OB) !== JSON.stringify(MB)) {
                      Jj._remove(OB, QB);
                      const BB = Nj(YB);
                      return Jj._set(GB, BB, DB, QB, oB, jB), yB
                    }
                  }
                  Jj._set(GB, JB, DB, QB, oB, jB)
                }
              } catch (BB) {
                Pj._error(BB)
              }
              return yB
            },
            _remove(BB, OB) {
              try {
                null == vO || vO.localStorage.removeItem(BB), Jj._remove(BB, OB), Jj._remove(pj(BB), OB)
              } catch (BB) {
                Pj._error(BB)
              }
            }
          })
        }(BB.cookie_persisted_properties || [], BB.cookieWinsOnConflict, (() => !!this._disabled));
        let GB, YB = !1,
          DB = !1;
        const QB = BB.persistence.toLowerCase();
        return "localstorage" === QB && Pj._is_supported() ? (GB = Pj, DB = !0) : "localstorage+cookie" === QB && OB._is_supported() ? (GB = OB, DB = !0, YB = !0) : "sessionstorage" === QB && fj._is_supported() ? GB = fj : "memory" === QB ? GB = nj : "cookie" === QB && Jj._is_supported() ? (GB = Jj, YB = !0) : OB._is_supported() ? (GB = OB, DB = !0, YB = !0) : Jj._is_supported() ? (GB = Jj, YB = !0) : GB = nj, this._splitStorageEligible = DB, this._storesIdentityInCookie = YB, GB
      }
      _groupEntryName(BB) {
        return `${this._name}__${BB}`
      }
      _resolveSplitStorage(BB) {
        return this._splitStorageEligible && !!BB.split_storage
      }
      properties() {
        const BB = {};
        return co(this.props, ((OB, GB) => {
          const YB = Fy(GB);
          if (!YB || "event" === YB.exposure) {
            var DB;
            if (null == YB || null === (DB = YB.shouldSkipFromEventProperties) || void 0 === DB ? void 0 : DB.call(YB, OB)) return;
            BB[GB] = OB
          }
        })), BB
      }
      load() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !BB) return;
        const OB = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          GB = OB ? Pj._parse(this._name) : null;
        let YB = {};
        if (OB) try {
          YB = Zj(Jj._parse(this._name)), co(YB, ((BB, OB) => {
            (nG(BB) || kG(BB) || "" === BB) && delete YB[OB]
          }))
        } catch (BB) {}
        const DB = this.Vq._parse(this._name);
        if (DB && (this.props = ho({}, DB)), this._splitStorage && this._loadGroupEntries(), OB && DB) {
          var QB, oB;
          const BB = null == GB ? void 0 : GB[nB],
            OB = null !== (QB = null == GB ? void 0 : GB.$user_state) && void 0 !== QB ? QB : cO,
            jB = DB[nB],
            yB = null !== (oB = DB.$user_state) && void 0 !== oB ? oB : cO;
          if (jB !== BB || yB !== OB) {
            this._cookieIdentityChangePending = !0, this._disabled || fj._set(oJ(this._name), !0);
            const GB = ho({}, this.props);
            zj.forEach((BB => delete GB[BB])), "anonymous" !== yB || "identified" !== OB && "anonymous" !== YB.$user_state && (nG(BB) || jB === BB) || (qJ(GB, YB), delete GB[pB]), this.props = GB;
            const DB = new Set;
            zj.forEach((BB => {
              var OB;
              const GB = null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup;
              GB && DB.add(GB)
            })), DB.forEach((BB => {
              if (this._disabled) return;
              const OB = {};
              co(this.props, ((GB, YB) => {
                var DB;
                (null === (DB = Fy(YB)) || void 0 === DB ? void 0 : DB.storageGroup) === BB && (OB[YB] = GB)
              })), SG(OB) ? (Pj._remove(this._groupEntryName(BB)), this._slotState[BB] = {}) : Pj._set(this._groupEntryName(BB), OB) && (this._slotState[BB] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(OB, BB)
              })
            }))
          }
        }
        fj._get(oJ(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const BB of uy) {
          const OB = Pj._parse(this._groupEntryName(BB));
          if (OB && !SG(OB)) {
            const GB = this._slotWriteState(BB);
            GB.persisted = !0, this._mainCarriesGroupKey(BB) || (GB.fingerprint = this._entryFingerprint(OB, BB)), this._groupEntryIsStale(BB, OB) || ho(this.props, OB)
          }
        }
      }
      _mainCarriesGroupKey(BB) {
        return Object.keys(this.props).some((OB => {
          var GB;
          return (null === (GB = Fy(OB)) || void 0 === GB ? void 0 : GB.storageGroup) === BB
        }))
      }
      _groupEntryIsStale(BB, OB) {
        const GB = DJ[BB];
        if (!GB) return !1;
        const YB = OB[GB],
          DB = this.props[GB];
        return KG(YB) && KG(DB) && DB > YB
      }
      refreshKey(BB) {
        var OB;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(BB)) return;
        const GB = this._splitStorage ? null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup : void 0,
          YB = GB ? Pj._parse(this._groupEntryName(GB)) : this.Vq._parse(this._name);
        if (YB && BB in YB) this._setProp(BB, YB[BB], !1);
        else {
          if (GB) {
            const OB = this.Vq._parse(this._name);
            if (OB && BB in OB) return void this._setProp(BB, OB[BB], !1)
          }
          this._deleteProp(BB, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const BB = this._saveDebounceMs();
        BB > 0 ? nG(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), BB)) : this._writeNow()
      }
      flush() {
        nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !BB) return;
        BB || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || PJ.forEach((BB => this.refreshKey(BB))));
        const OB = !BB && !this._storageMigrationInProgress;
        OB || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const GB = !!OB && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && Xo.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(GB && this._crossTabFeatureFlagHandlers.forEach((BB => BB())));
        const YB = this._writeEntry(this.Vq, this._name, this.props, yJ);
        "written" === YB && this._rememberCurrentCookieProperties(this.props), "failed" !== YB && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), GB && this._crossTabFeatureFlagHandlers.forEach((BB => BB()))
      }
      _writeNowSplit() {
        const {
          main: BB,
          groups: OB
        } = this._partitionProps(), GB = this._writeEntry(this.Vq, this._name, BB, yJ);
        "written" === GB && this._rememberCurrentCookieProperties(BB), "failed" !== GB && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), JJ.forEach((BB => {
          var OB;
          (null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(BB)
        })));
        for (const DB of uy) {
          var YB;
          const BB = OB[DB];
          if (SG(BB) && !(null === (YB = this._slotState[DB]) || void 0 === YB ? void 0 : YB.persisted)) {
            JJ.forEach((BB => {
              var OB;
              (null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup) === DB && this._pendingCrossTabFeatureFlagChanges.delete(BB)
            }));
            continue
          }
          const GB = this._writeEntry(Pj, this._groupEntryName(DB), BB, DB);
          "failed" !== GB && JJ.forEach((BB => {
            const OB = Fy(BB);
            (null == OB ? void 0 : OB.storageGroup) !== DB || "written" !== GB && OB.volatile || this._pendingCrossTabFeatureFlagChanges.delete(BB)
          }))
        }
      }
      _partitionProps() {
        const BB = {},
          OB = {
            flags: {},
            surveys: {}
          };
        return co(this.props, ((GB, YB) => {
          var DB;
          const QB = null === (DB = Fy(YB)) || void 0 === DB ? void 0 : DB.storageGroup;
          QB ? OB[QB][YB] = GB : BB[YB] = GB
        })), {
          main: BB,
          groups: OB
        }
      }
      _entryFingerprint(BB, OB) {
        if (OB === yJ) return JSON.stringify(BB) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const GB = {};
        return co(BB, ((BB, OB) => {
          var YB;
          GB[OB] = (null === (YB = Fy(OB)) || void 0 === YB ? void 0 : YB.volatile) ? "__volatile__" : BB
        })), JSON.stringify(GB)
      }
      _writeEntry(BB, OB, GB, YB) {
        const DB = this._slotWriteState(YB);
        if (YB !== yJ && !DB.ap && !nG(DB.fingerprint)) return "skipped";
        let QB;
        try {
          if (QB = this._entryFingerprint(GB, YB), QB === DB.fingerprint) return DB.ap = !1, "skipped"
        } catch (BB) {
          QB = void 0
        }
        return BB._set(OB, GB, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (DB.ap = !1, YB !== yJ && (DB.persisted = !0), nG(QB) || (DB.fingerprint = QB), this._splitStorageEligible && (DB.storageValue = Pj._get(OB)), "written") : (this._config.debug && Xo.warn(`failed to persist storage entry "${OB}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: BB = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), nG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Vq._remove(this._name, !1), this.Vq._remove(this._name, !0), !BB && this._ownsSplitStorage)
          for (const OB of uy) Pj._remove(this._groupEntryName(OB));
        BB ? delete this._slotState[yJ] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(BB, OB, GB) {
        if (VG(BB)) {
          this.syncCookieProperties(), nG(OB) && (OB = "None"), this._expire_days = nG(GB) ? this._default_expiry : GB;
          let YB = !1;
          if (co(BB, ((BB, GB) => {
              this.props.hasOwnProperty(GB) && this.props[GB] !== OB || (this._setProp(GB, BB), YB = !0)
            })), YB) return this.save(), !0
        }
        return !1
      }
      register(BB, OB) {
        if (VG(BB)) {
          this.syncCookieProperties(), this._expire_days = nG(OB) ? this._default_expiry : OB;
          let GB = !1;
          if (co(BB, ((OB, YB) => {
              BB.hasOwnProperty(YB) && (this.props[YB] !== OB || VG(OB) || WG(OB)) && (this._setProp(YB, OB), GB = !0)
            })), GB) return this.save(), !0
        }
        return !1
      }
      unregister(BB) {
        this.syncCookieProperties();
        const OB = "string" == typeof BB ? [BB] : BB;
        let GB = !1;
        for (const YB of OB) YB in this.props && (this._deleteProp(YB), GB = !0);
        GB && this.save()
      }
      update_campaign_params() {
        const BB = null == tO ? void 0 : tO.URL;
        if (BB === this._campaign_params_url) return;
        const OB = Cy(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          GB = !SG(To(OB));
        return GB && this.register(OB), this._campaign_params_url = BB, GB ? OB : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const BB = null == tO ? void 0 : tO.referrer;
          return BB ? vy(BB) : {}
        }())
      }
      update_referrer_info() {
        var BB;
        this.register_once({
          $referrer: BJ(),
          $referring_domain: (null == tO ? void 0 : tO.referrer) && (null === (BB = wy(tO.referrer)) || void 0 === BB ? void 0 : BB.host) || ty
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const BB = OJ(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [nO]: this._storesIdentityInCookie ? {
            r: jJ(BB.r),
            u: BB.u ? jJ(BB.u) : void 0
          } : BB
        }, void 0)
      }
      get_initial_props() {
        const BB = {};
        co([SO, VO], (OB => {
          const GB = this.props[OB];
          GB && co(GB, (function(OB, GB) {
            BB["$initial_" + pG(GB)] = OB
          }))
        }));
        const OB = this.props[nO];
        if (OB) {
          const GB = function(BB) {
            const OB = GJ(BB, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              GB = {};
            return co(OB, (function(BB, OB) {
              GB[`$initial_${pG(OB)}`] = BB
            })), GB
          }(OB, this._config.disable_capture_url_hashes);
          ho(BB, GB)
        }
        return BB
      }
      safe_merge(BB) {
        return co(this.props, (function(OB, GB) {
          GB in BB || (BB[GB] = OB)
        })), BB
      }
      update_config(BB, OB, GB) {
        const YB = BB.persistence !== OB.persistence,
          DB = !((BB, OB) => {
            if (BB.length !== OB.length) return !1;
            const GB = [...BB].sort(),
              YB = [...OB].sort();
            return GB.every(((BB, OB) => BB === YB[OB]))
          })(BB.cookie_persisted_properties || [], OB.cookie_persisted_properties || []),
          QB = YB || DB,
          oB = BB.cookieWinsOnConflict !== OB.cookieWinsOnConflict,
          jB = BB.disable_persistence || !!GB,
          yB = !!this._disabled && !jB;
        jB || this._syncCookieProperties(OB, yB), this._config = BB, !jB && (YB || DB || oB) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(RD(RD({}, BB), {}, {
          cookie_persisted_properties: OB.cookie_persisted_properties
        }), yB));
        const JB = QB || oB ? this._buildStorage(BB) : this.Vq;
        this._truncateExistingPersonInfoForCookie();
        const MB = this._resolveSplitStorage(BB),
          PB = QB || MB !== this._splitStorage,
          zB = !jB && (PB || BB.cross_subdomain_cookie !== this._cross_subdomain || BB.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(yB);
        this._storageMigrationInProgress = PB;
        try {
          if (this._default_expiry = this._expire_days = BB.cookie_expiration, this.set_disabled(jB), this.set_cross_subdomain(BB.cross_subdomain_cookie), this.set_secure(BB.secure_cookie), PB) {
            const BB = this.props;
            this.clear(), this.Vq = JB, this._splitStorage = MB, this.props = BB, this.save()
          } else oB && (this.Vq = JB, jB || (delete this._slotState[yJ], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, zB && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const BB = this.props[nO];
        if (!this._storesIdentityInCookie || !VG(BB) || "string" != typeof BB.r) return;
        const OB = jJ(BB.r),
          GB = "string" == typeof BB.u ? jJ(BB.u) : BB.u;
        OB === BB.r && GB === BB.u || this._setProp(nO, RD(RD({}, BB), {}, {
          r: OB,
          u: GB
        }))
      }
      set_disabled(BB) {
        this._disabled = BB, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(BB) {
        BB !== this._cross_subdomain && (this._cross_subdomain = BB, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(BB) {
        BB !== this._secure && (this._secure = BB, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(BB, OB) {
        const GB = this.props.__timers || {};
        GB[BB] = OB, this._setProp(FB, GB), this.save()
      }
      remove_event_timer(BB) {
        const OB = this.props.__timers || {},
          GB = OB[BB];
        return nG(GB) || (delete OB[BB], this._setProp(FB, OB), this.save()), GB
      }
      get_property(BB) {
        return this.props[BB]
      }
      set_property(BB, OB) {
        this._setProp(BB, OB), this.save()
      }
      _setProp(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var YB;
        const DB = this.props[BB];
        this.props[BB] = OB, GB && ("distinct_id" !== BB && "$user_state" !== BB || DB === OB || (this._localIdentityChangePending = !0), zJ(BB) && !lJ(DB, OB) && this._metaIdentifierChangePending.add(BB), this._markPendingCrossTabFeatureFlagChanges(BB, DB, OB), (null === (YB = Fy(BB)) || void 0 === YB ? void 0 : YB.volatile) || this._markGroupDirty(BB))
      }
      _deleteProp(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[BB], OB && (MJ(BB) && this._setCrossTabFeatureFlagChangesPending(BB, !0), zJ(BB) && this._metaIdentifierChangePending.add(BB), this._markGroupDirty(BB))
      }
      _markGroupDirty(BB) {
        var OB;
        const GB = null === (OB = Fy(BB)) || void 0 === OB ? void 0 : OB.storageGroup;
        GB && (this._slotWriteState(GB).ap = !0)
      }
      _slotWriteState(BB) {
        return this._slotState[BB] || (this._slotState[BB] = {})
      }
    };
    const NJ = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      RJ = "events",
      WJ = "cancelEvents",
      AJ = "popover",
      VJ = "api",
      SJ = "widget",
      nJ = "survey shown",
      UJ = "survey dismissed",
      fJ = "survey sent",
      kJ = "$survey_id",
      dJ = "$survey_iteration",
      KJ = "$survey_last_seen_date",
      uJ = "popover",
      mJ = "inline";

    function IJ(BB) {
      let OB = !0;
      return {
        dispose() {
          if (OB) {
            OB = !1;
            const GB = BB();
            GB && AG(GB.then) && GB.then(void 0, (() => {}))
          }
        }
      }
    }
    const FJ = "product tour shown",
      iJ = "$product_tour_last_seen_date",
      LJ = "$product_tour_type",
      gJ = wo("[RateLimiter]");
    var rJ = class {
      constructor(BB) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = BB => {
          const OB = BB.text;
          if (OB && OB.length) try {
            (JSON.parse(OB).quota_limited || []).forEach((BB => {
              gJ.info(`${BB||"events"} is quota limited.`), this.serverLimits[BB] = (new Date).getTime() + 6e4
            }))
          } catch (BB) {
            return void gJ.warn(`could not rate limit - continuing. Error: "${null==BB?void 0:BB.message}"`, {
              text: OB
            })
          }
        }, this.instance = BB, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var BB;
        return (null === (BB = this.instance.config.rate_limiting) || void 0 === BB ? void 0 : BB.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var BB;
        return Math.max((null === (BB = this.instance.config.rate_limiting) || void 0 === BB ? void 0 : BB.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var OB, GB, YB;
        const {
          captureEventsBurstLimit: DB,
          captureEventsPerSecond: QB
        } = this, oB = (new Date).getTime(), jB = null !== (OB = null === (GB = this.instance.persistence) || void 0 === GB ? void 0 : GB.get_property("$capture_rate_limit")) && void 0 !== OB ? OB : {
          tokens: DB,
          last: oB
        };
        jB.tokens += (oB - jB.last) / 1e3 * QB, jB.last = oB, jB.tokens > DB && (jB.tokens = DB);
        const yB = 1 > jB.tokens;
        if (yB || BB || (jB.tokens = Math.max(0, jB.tokens - 1)), yB && !BB) {
          const BB = (KG(jB.dropped) ? jB.dropped : 0) + 1;
          jB.dropped = BB, !this.lastEventRateLimited && this._captureWarning(BB) && (jB.dropped = 0)
        }
        return this.lastEventRateLimited = yB, null === (YB = this.instance.persistence) || void 0 === YB || YB.set_property("$capture_rate_limit", jB), {
          isRateLimited: yB,
          remainingTokens: jB.tokens
        }
      }
      _isPropertyAllowed(BB) {
        const OB = this.instance.config.property_denylist;
        return !WG(OB) || !OB.includes(BB)
      }
      _triggeringPage() {
        var BB;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == BG ? void 0 : BG.pathname)) return `${null!==(BB=BG.origin)&&void 0!==BB?BB:""}${BG.pathname}`
      }
      _captureWarning(BB) {
        var OB, GB;
        const {
          captureEventsBurstLimit: YB,
          captureEventsPerSecond: DB
        } = this, QB = this._triggeringPage(), oB = this._isPropertyAllowed("$session_id") ? null === (OB = (GB = this.instance).get_session_id) || void 0 === OB ? void 0 : OB.call(GB) : void 0, jB = [`${BB} event(s) dropped since the last warning`, QB ? `triggered on ${QB}` : void 0, oB ? `session ${oB}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${jB}. Config is set to ${DB} events per second and ${YB} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(BB) {
        const OB = this.serverLimits[BB || "events"] || !1;
        return !1 !== OB && (new Date).getTime() < OB
      }
    };
    const XJ = wo("[RemoteConfig]");
    var wJ = class {
      constructor(BB) {
        this._instance = BB
      }
      get remoteConfig() {
        var BB;
        return null === (BB = jG._POSTHOG_REMOTE_CONFIG) || void 0 === BB || null === (BB = BB[this._instance.config.token]) || void 0 === BB ? void 0 : BB.config
      }
      _loadRemoteConfigJs(BB) {
        var OB, GB, YB;
        (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.loadExternalDependency) ? null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, "remote-config", (() => BB(this.remoteConfig))): BB()
      }
      _loadRemoteConfigJSON(BB) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: BB
        })
      }
      load() {
        try {
          if (this.remoteConfig) return XJ.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void XJ.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((BB => {
            if (!BB) return XJ.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((BB => {
              this._onRemoteConfig(BB.json, BB)
            }));
            this._onRemoteConfig(BB)
          }))
        } catch (YB) {
          XJ.error("Error loading remote config", YB), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(BB, OB) {
        !BB && OB && (0 === OB.statusCode ? OB.error || XJ.warn("Failed to fetch remote config from PostHog.") : XJ.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(BB ? {
            ok: !0,
            config: BB
          } : {
            ok: !1
          })
        } catch (BB) {
          XJ.error("Error applying remote config", BB)
        }
        if (!1 !== (null == BB ? void 0 : BB.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var GB;
          null === (GB = this._instance.featureFlags) || void 0 === GB || GB.ensureFlagsLoaded()
        } catch (BB) {
          XJ.error("Error loading feature flags", BB)
        }
      }
    };
    var EJ = Uint8Array,
      cJ = Uint16Array,
      hJ = Uint32Array,
      aJ = new EJ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      eJ = new EJ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      TJ = new EJ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      bJ = function(BB, OB) {
        for (var GB = new cJ(31), YB = 0; 31 > YB; ++YB) GB[YB] = OB += 1 << BB[YB - 1];
        var DB = new hJ(GB[30]);
        for (YB = 1; 30 > YB; ++YB)
          for (var QB = GB[YB]; GB[YB + 1] > QB; ++QB) DB[QB] = QB - GB[YB] << 5 | YB;
        return [GB, DB]
      },
      CJ = bJ(aJ, 2),
      HJ = CJ[1];
    CJ[0][28] = 258, HJ[258] = 28;
    for (var vJ = bJ(eJ, 0)[1], sJ = new cJ(32768), xJ = 0; 32768 > xJ; ++xJ) {
      var tJ = (43690 & xJ) >>> 1 | (21845 & xJ) << 1;
      sJ[xJ] = ((65280 & (tJ = (61680 & (tJ = (52428 & tJ) >>> 2 | (13107 & tJ) << 2)) >>> 4 | (3855 & tJ) << 4)) >>> 8 | (255 & tJ) << 8) >>> 1
    }
    var BM = function(BB, OB, GB) {
        for (var YB = BB.length, DB = 0, QB = new cJ(OB); YB > DB; ++DB) ++QB[BB[DB] - 1];
        var oB, jB = new cJ(OB);
        for (DB = 0; OB > DB; ++DB) jB[DB] = jB[DB - 1] + QB[DB - 1] << 1;
        if (GB) {
          oB = new cJ(1 << OB);
          var yB = 15 - OB;
          for (DB = 0; YB > DB; ++DB)
            if (BB[DB])
              for (var JB = DB << 4 | BB[DB], MB = OB - BB[DB], PB = jB[BB[DB] - 1]++ << MB, zB = PB | (1 << MB) - 1; zB >= PB; ++PB) oB[sJ[PB] >>> yB] = JB
        } else
          for (oB = new cJ(YB), DB = 0; YB > DB; ++DB) oB[DB] = sJ[jB[BB[DB] - 1]++] >>> 15 - BB[DB];
        return oB
      },
      OM = new EJ(288);
    for (xJ = 0; 144 > xJ; ++xJ) OM[xJ] = 8;
    for (xJ = 144; 256 > xJ; ++xJ) OM[xJ] = 9;
    for (xJ = 256; 280 > xJ; ++xJ) OM[xJ] = 7;
    for (xJ = 280; 288 > xJ; ++xJ) OM[xJ] = 8;
    var GM = new EJ(32);
    for (xJ = 0; 32 > xJ; ++xJ) GM[xJ] = 5;
    var YM = BM(OM, 9, 0),
      DM = BM(GM, 5, 0),
      QM = function(BB) {
        return (BB / 8 | 0) + (7 & BB && 1)
      },
      oM = function(BB, OB, GB) {
        (null == OB || 0 > OB) && (OB = 0), (null == GB || GB > BB.length) && (GB = BB.length);
        var YB = new(BB instanceof cJ ? cJ : BB instanceof hJ ? hJ : EJ)(GB - OB);
        return YB.set(BB.subarray(OB, GB)), YB
      },
      jM = function(BB, OB, GB) {
        var YB = OB / 8 | 0;
        BB[YB] |= GB <<= 7 & OB, BB[YB + 1] |= GB >>> 8
      },
      yM = function(BB, OB, GB) {
        var YB = OB / 8 | 0;
        BB[YB] |= GB <<= 7 & OB, BB[YB + 1] |= GB >>> 8, BB[YB + 2] |= GB >>> 16
      },
      JM = function(BB, OB) {
        for (var GB = [], YB = 0; BB.length > YB; ++YB) BB[YB] && GB.push({
          s: YB,
          f: BB[YB]
        });
        var DB = GB.length,
          QB = GB.slice();
        if (!DB) return [new EJ(0), 0];
        if (1 == DB) {
          var oB = new EJ(GB[0].s + 1);
          return oB[GB[0].s] = 1, [oB, 1]
        }
        GB.sort((function(BB, OB) {
          return BB.f - OB.f
        })), GB.push({
          s: -1,
          f: 25001
        });
        var jB = GB[0],
          yB = GB[1],
          JB = 0,
          MB = 1,
          PB = 2;
        for (GB[0] = {
            s: -1,
            f: jB.f + yB.f,
            l: jB,
            r: yB
          }; MB != DB - 1;) jB = GB[GB[PB].f > GB[JB].f ? JB++ : PB++], yB = GB[JB != MB && GB[PB].f > GB[JB].f ? JB++ : PB++], GB[MB++] = {
          s: -1,
          f: jB.f + yB.f,
          l: jB,
          r: yB
        };
        var zB = QB[0].s;
        for (YB = 1; DB > YB; ++YB) QB[YB].s > zB && (zB = QB[YB].s);
        var lB = new cJ(zB + 1),
          pB = MM(GB[MB - 1], lB, 0);
        if (pB > OB) {
          YB = 0;
          var qB = 0,
            ZB = pB - OB,
            NB = 1 << ZB;
          for (QB.sort((function(BB, OB) {
              return lB[OB.s] - lB[BB.s] || BB.f - OB.f
            })); DB > YB; ++YB) {
            var RB = QB[YB].s;
            if (OB >= lB[RB]) break;
            qB += NB - (1 << pB - lB[RB]), lB[RB] = OB
          }
          for (qB >>>= ZB; qB > 0;) {
            var WB = QB[YB].s;
            OB > lB[WB] ? qB -= 1 << OB - lB[WB]++ - 1 : ++YB
          }
          for (; YB >= 0 && qB; --YB) {
            var AB = QB[YB].s;
            lB[AB] == OB && (--lB[AB], ++qB)
          }
          pB = OB
        }
        return [new EJ(lB), pB]
      },
      MM = function(BB, OB, GB) {
        return -1 == BB.s ? Math.max(MM(BB.l, OB, GB + 1), MM(BB.r, OB, GB + 1)) : OB[BB.s] = GB
      },
      PM = function(BB) {
        for (var OB = BB.length; OB && !BB[--OB];);
        for (var GB = new cJ(++OB), YB = 0, DB = BB[0], QB = 1, oB = function(BB) {
            GB[YB++] = BB
          }, jB = 1; OB >= jB; ++jB)
          if (BB[jB] == DB && jB != OB) ++QB;
          else {
            if (!DB && QB > 2) {
              for (; QB > 138; QB -= 138) oB(32754);
              QB > 2 && (oB(QB > 10 ? QB - 11 << 5 | 28690 : QB - 3 << 5 | 12305), QB = 0)
            } else if (QB > 3) {
              for (oB(DB), --QB; QB > 6; QB -= 6) oB(8304);
              QB > 2 && (oB(QB - 3 << 5 | 8208), QB = 0)
            }
            for (; QB--;) oB(DB);
            QB = 1, DB = BB[jB]
          } return [GB.subarray(0, YB), OB]
      },
      zM = function(BB, OB) {
        for (var GB = 0, YB = 0; OB.length > YB; ++YB) GB += BB[YB] * OB[YB];
        return GB
      },
      lM = function(BB, OB, GB) {
        var YB = GB.length,
          DB = QM(OB + 2);
        BB[DB] = 255 & YB, BB[DB + 1] = YB >>> 8, BB[DB + 2] = 255 ^ BB[DB], BB[DB + 3] = 255 ^ BB[DB + 1];
        for (var QB = 0; YB > QB; ++QB) BB[DB + QB + 4] = GB[QB];
        return 8 * (DB + 4 + YB)
      },
      pM = function(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        jM(OB, MB++, GB), ++DB[256];
        for (var PB = JM(DB, 15), zB = PB[0], lB = PB[1], pB = JM(QB, 15), qB = pB[0], ZB = pB[1], NB = PM(zB), RB = NB[0], WB = NB[1], AB = PM(qB), VB = AB[0], SB = AB[1], nB = new cJ(19), UB = 0; RB.length > UB; ++UB) nB[31 & RB[UB]]++;
        for (UB = 0; VB.length > UB; ++UB) nB[31 & VB[UB]]++;
        for (var fB = JM(nB, 7), kB = fB[0], dB = fB[1], KB = 19; KB > 4 && !kB[TJ[KB - 1]]; --KB);
        var uB, mB, IB, FB, iB = JB + 5 << 3,
          LB = zM(DB, OM) + zM(QB, GM) + oB,
          gB = zM(DB, zB) + zM(QB, qB) + oB + 14 + 3 * KB + zM(nB, kB) + (2 * nB[16] + 3 * nB[17] + 7 * nB[18]);
        if (LB >= iB && gB >= iB) return lM(OB, MB, BB.subarray(yB, yB + JB));
        if (jM(OB, MB, 1 + (LB > gB)), MB += 2, LB > gB) {
          uB = BM(zB, lB, 0), mB = zB, IB = BM(qB, ZB, 0), FB = qB;
          var rB = BM(kB, dB, 0);
          for (jM(OB, MB, WB - 257), jM(OB, MB + 5, SB - 1), jM(OB, MB + 10, KB - 4), MB += 14, UB = 0; KB > UB; ++UB) jM(OB, MB + 3 * UB, kB[TJ[UB]]);
          MB += 3 * KB;
          for (var XB = [RB, VB], wB = 0; 2 > wB; ++wB) {
            var EB = XB[wB];
            for (UB = 0; EB.length > UB; ++UB) jM(OB, MB, rB[cB = 31 & EB[UB]]), MB += kB[cB], cB > 15 && (jM(OB, MB, EB[UB] >>> 5 & 127), MB += EB[UB] >>> 12)
          }
        } else uB = YM, mB = OM, IB = DM, FB = GM;
        for (UB = 0; jB > UB; ++UB)
          if (YB[UB] > 255) {
            var cB;
            yM(OB, MB, uB[257 + (cB = YB[UB] >>> 18 & 31)]), MB += mB[cB + 257], cB > 7 && (jM(OB, MB, YB[UB] >>> 23 & 31), MB += aJ[cB]);
            var hB = 31 & YB[UB];
            yM(OB, MB, IB[hB]), MB += FB[hB], hB > 3 && (yM(OB, MB, YB[UB] >>> 5 & 8191), MB += eJ[hB])
          } else yM(OB, MB, uB[YB[UB]]), MB += mB[YB[UB]];
        return yM(OB, MB, uB[256]), MB + mB[256]
      },
      qM = new hJ([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      ZM = (new EJ(0), function() {
        for (var BB = new hJ(256), OB = 0; 256 > OB; ++OB) {
          for (var GB = OB, YB = 9; --YB;) GB = (1 & GB && 3988292384) ^ GB >>> 1;
          BB[OB] = GB
        }
        return BB
      }()),
      NM = function(BB, OB, GB) {
        for (; GB; ++OB) BB[OB] = GB, GB >>>= 8
      };
    const RM = !!GG || !!OG,
      WM = new WeakMap,
      AM = "text/plain";
    let VM = 0,
      SM = !1;
    const nM = (BB, OB) => {
        const [GB, YB] = BB.split("#"), [DB, QB] = GB.split("?");
        if (!QB) return BB;
        const oB = QB.split("&").filter((BB => BB.split("=")[0] !== OB)).join("&");
        return `${DB}${oB?`?${oB}`:""}${YB?`#${YB}`:""}`
      },
      UM = function(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var YB;
        const [DB, QB] = BB.split("?"), oB = RD({}, OB), jB = null !== (YB = null == QB ? void 0 : QB.split("&").map((BB => {
          var OB;
          const [YB, DB] = BB.split("="), QB = GB && null !== (OB = oB[YB]) && void 0 !== OB ? OB : DB;
          return delete oB[YB], `${YB}=${QB}`
        }))) && void 0 !== YB ? YB : [], yB = function(BB) {
          let OB, GB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const DB = [];
          return co(BB, (function(BB, YB) {
            nG(BB) || nG(YB) || "undefined" === YB || (OB = encodeURIComponent((BB => BB instanceof File)(BB) ? BB.name : BB.toString()), GB = encodeURIComponent(YB), DB[DB.length] = GB + "=" + OB)
          })), DB.join(YB)
        }(oB);
        return yB && jB.push(yB), jB.length > 0 ? `${DB}?${jB.join("&")}` : DB
      },
      fM = BB => {
        if (BB._encodedBody) return BB._encodedBody;
        const {
          data: OB,
          compression: GB
        } = BB;
        if (!OB) return;
        if (GB === NJ.GZipJS) {
          const BB = function(BB, OB) {
            void 0 === OB && (OB = {});
            var GB = function() {
                var BB = 4294967295;
                return {
                  p(OB) {
                    for (var GB = BB, YB = 0; OB.length > YB; ++YB) GB = ZM[255 & GB ^ OB[YB]] ^ GB >>> 8;
                    BB = GB
                  },
                  d: () => 4294967295 ^ BB
                }
              }(),
              YB = BB.length;
            GB.p(BB);
            var DB, QB, oB, jB, yB = (jB = 10 + ((DB = OB).filename && DB.filename.length + 1 || 0), function(BB, OB, GB, YB, DB, QB) {
                var oB = BB.length,
                  jB = new EJ(YB + oB + 5 * (1 + Math.floor(oB / 7e3)) + 8),
                  yB = jB.subarray(YB, jB.length - 8),
                  JB = 0;
                if (!OB || 8 > oB)
                  for (var MB = 0; oB >= MB; MB += 65535) {
                    var PB = MB + 65535;
                    oB > PB ? JB = lM(yB, JB, BB.subarray(MB, PB)) : (yB[MB] = QB, JB = lM(yB, JB, BB.subarray(MB, oB)))
                  } else {
                    for (var zB = qM[OB - 1], lB = zB >>> 13, pB = 8191 & zB, qB = (1 << GB) - 1, ZB = new cJ(32768), NB = new cJ(qB + 1), RB = Math.ceil(GB / 3), WB = 2 * RB, AB = function(OB) {
                        return (BB[OB] ^ BB[OB + 1] << RB ^ BB[OB + 2] << WB) & qB
                      }, VB = new hJ(25e3), SB = new cJ(288), nB = new cJ(32), UB = 0, fB = 0, kB = (MB = 0, 0), dB = 0, KB = 0; oB > MB; ++MB) {
                      var uB = AB(MB),
                        mB = 32767 & MB,
                        IB = NB[uB];
                      if (ZB[mB] = IB, NB[uB] = mB, MB >= dB) {
                        var FB = oB - MB;
                        if ((UB > 7e3 || kB > 24576) && FB > 423) {
                          JB = pM(BB, yB, 0, VB, SB, nB, fB, kB, KB, MB - KB, JB), kB = UB = fB = 0, KB = MB;
                          for (var iB = 0; 286 > iB; ++iB) SB[iB] = 0;
                          for (iB = 0; 30 > iB; ++iB) nB[iB] = 0
                        }
                        var LB = 2,
                          gB = 0,
                          rB = pB,
                          XB = mB - IB & 32767;
                        if (FB > 2 && uB == AB(MB - XB))
                          for (var wB = Math.min(lB, FB) - 1, EB = Math.min(32767, MB), cB = Math.min(258, FB); EB >= XB && --rB && mB != IB;) {
                            if (BB[MB + LB] == BB[MB + LB - XB]) {
                              for (var hB = 0; cB > hB && BB[MB + hB] == BB[MB + hB - XB]; ++hB);
                              if (hB > LB) {
                                if (LB = hB, gB = XB, hB > wB) break;
                                var aB = Math.min(XB, hB - 2),
                                  eB = 0;
                                for (iB = 0; aB > iB; ++iB) {
                                  var TB = MB - XB + iB + 32768 & 32767,
                                    bB = TB - ZB[TB] + 32768 & 32767;
                                  bB > eB && (eB = bB, IB = TB)
                                }
                              }
                            }
                            XB += (mB = IB) - (IB = ZB[mB]) + 32768 & 32767
                          }
                        if (gB) {
                          VB[kB++] = 268435456 | HJ[LB] << 18 | vJ[gB];
                          var CB = 31 & HJ[LB],
                            HB = 31 & vJ[gB];
                          fB += aJ[CB] + eJ[HB], ++SB[257 + CB], ++nB[HB], dB = MB + LB, ++UB
                        } else VB[kB++] = BB[MB], ++SB[BB[MB]]
                      }
                    }
                    JB = pM(BB, yB, QB, VB, SB, nB, fB, kB, KB, MB - KB, JB)
                  }
                return oM(jB, 0, YB + QM(JB) + 8)
              }(QB = BB, null == (oB = OB).level ? 6 : oB.level, null == oB.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(QB.length)))) : 12 + oB.mem, jB, 0, !0)),
              JB = yB.length;
            return function(BB, OB) {
              var GB = OB.filename;
              if (BB[0] = 31, BB[1] = 139, BB[2] = 8, BB[8] = 2 > OB.level ? 4 : 9 == OB.level ? 2 : 0, BB[9] = 3, 0 != OB.mtime && NM(BB, 4, Math.floor(new Date(OB.mtime || Date.now()) / 1e3)), GB) {
                BB[3] = 8;
                for (var YB = 0; GB.length >= YB; ++YB) BB[YB + 10] = GB.charCodeAt(YB)
              }
            }(yB, OB), NM(yB, JB - 8, GB.d()), NM(yB, JB - 4, YB), yB
          }(function(BB) {
            var OB = BB.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(BB);
            for (var GB = new EJ(BB.length + (BB.length >>> 1)), YB = 0, DB = function(BB) {
                GB[YB++] = BB
              }, QB = 0; OB > QB; ++QB) {
              if (YB + 5 > GB.length) {
                var oB = new EJ(YB + 8 + (OB - QB << 1));
                oB.set(GB), GB = oB
              }
              var jB = BB.charCodeAt(QB);
              128 > jB ? DB(jB) : 2048 > jB ? (DB(192 | jB >>> 6), DB(128 | 63 & jB)) : jB > 55295 && 57344 > jB ? (DB(240 | (jB = 65536 + (1047552 & jB) | 1023 & BB.charCodeAt(++QB)) >>> 18), DB(128 | jB >>> 12 & 63), DB(128 | jB >>> 6 & 63), DB(128 | 63 & jB)) : (DB(224 | jB >>> 12), DB(128 | jB >>> 6 & 63), DB(128 | 63 & jB))
            }
            return oM(GB, 0, YB)
          }(Xy(OB)), {
            mtime: 0
          });
          return {
            contentType: AM,
            body: BB.buffer.slice(BB.byteOffset, BB.byteOffset + BB.byteLength),
            estimatedSize: BB.byteLength
          }
        }
        if (GB === NJ.Base64) {
          const BB = function(BB) {
              return BB ? btoa(encodeURIComponent(BB).replace(/%([0-9A-F]{2})/g, ((BB, OB) => String.fromCharCode(parseInt(OB, 16))))) : BB
            }(Xy(OB)),
            GB = (BB => "data=" + encodeURIComponent("string" == typeof BB ? BB : Xy(BB)))(BB);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: GB,
            estimatedSize: new Blob([GB]).size
          }
        }
        const YB = Xy(OB);
        return {
          contentType: "application/json",
          body: YB,
          estimatedSize: new Blob([YB]).size
        }
      },
      kM = BB => {
        const OB = () => "sendBeacon" === BB.transport ? {
          url: UM(BB.url, {
            compression: NJ.Base64
          }),
          encodedBody: fM(RD(RD({}, BB), {}, {
            compression: NJ.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: nM(BB.url, "compression"),
          encodedBody: fM(RD(RD({}, BB), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let GB;
        try {
          GB = fM(BB)
        } catch (GB) {
          if (RQ(BB.compression, Ey(BB.url, "compression"))) return Xo.error("Failed to gzip request body, sending uncompressed payload", GB), OB();
          throw GB
        }
        return GB && RQ(BB.compression, Ey(BB.url, "compression")) && !((YB = GB.body) instanceof ArrayBuffer ? NQ(new Uint8Array(YB)) : ArrayBuffer.isView(YB) && NQ(new Uint8Array(YB.buffer, YB.byteOffset, YB.byteLength))) ? (SM = !0, OB()) : {
          url: BB.url,
          encodedBody: GB
        };
        var YB
      },
      dM = BB => {
        try {
          return kM(BB)
        } catch (QB) {
          var OB;
          return Xo.error(QB), void(null === (OB = BB.callback) || void 0 === OB || OB.call(BB, {
            statusCode: 0,
            error: QB
          }))
        }
      },
      KM = function() {
        var BB = aG((function*(BB) {
          const OB = yield function(BB) {
            return UQ.apply(this, arguments)
          }(Xy(BB.data), QB.DEBUG, {
            rethrow: !0
          });
          if (!OB) return BB;
          const GB = yield OB.arrayBuffer();
          return RD(RD({}, BB), {}, {
            _encodedBody: {
              contentType: AM,
              body: GB,
              estimatedSize: GB.byteLength
            }
          })
        }));
        return function(OB) {
          return BB.apply(this, arguments)
        }
      }(),
      uM = /Failed to fetch|NetworkError|Load failed/i,
      mM = BB => "TypeError" === (null == BB ? void 0 : BB.name) && uM.test((null == BB ? void 0 : BB.message) || ""),
      IM = BB => {
        try {
          const OB = function(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof BB || !BB) return;
            const GB = BB.trim(),
              YB = /^\d+\s*,/.test(GB) ? GB.slice(0, GB.indexOf(",")).trim() : GB;
            if (/^\d+$/.test(YB)) {
              const BB = 1e3 * Math.min(Number(YB), 300);
              return BB > 0 ? BB : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(YB)) return;
            const DB = /^\w{3} \w{3} /.test(YB) ? YB + " GMT" : YB,
              QB = Date.parse(DB) - OB;
            return Number.isFinite(QB) && QB > 0 ? Math.min(QB, QD) : void 0
          }(BB());
          return nG(OB) ? void 0 : Math.min(OB, 3e4)
        } catch (BB) {
          return
        }
      },
      FM = BB => {
        const OB = dM(BB);
        if (!OB) return;
        const GB = new GG;
        WM.set(GB, !0);
        const {
          url: YB,
          encodedBody: DB
        } = OB;
        GB.open(BB.method || "GET", YB, !0);
        const {
          contentType: QB,
          body: oB
        } = null != DB ? DB : {};
        co(BB.headers, (function(BB, OB) {
          GB.setRequestHeader(OB, BB)
        })), QB && GB.setRequestHeader("Content-Type", QB), BB.timeout && (GB.timeout = BB.timeout), GB.onreadystatechange = () => {
          if (4 === GB.readyState) {
            var OB;
            const YB = {
              statusCode: GB.status,
              text: GB.responseText
            };
            if (200 === GB.status) try {
              YB.json = JSON.parse(GB.responseText)
            } catch (BB) {}
            null === (OB = BB.callback) || void 0 === OB || OB.call(BB, YB, IM((() => GB.getResponseHeader("Retry-After"))))
          }
        }, GB.send(oB)
      },
      iM = BB => {
        const OB = dM(BB);
        if (!OB) return;
        const {
          url: GB,
          encodedBody: YB
        } = OB, {
          contentType: DB,
          body: QB,
          estimatedSize: oB
        } = null != YB ? YB : {}, jB = new Headers;
        co(BB.headers, (function(BB, OB) {
          jB.append(OB, BB)
        })), DB && jB.append("Content-Type", DB);
        let yB = null,
          JB = !1;
        if (YG) {
          const OB = new YG;
          yB = {
            signal: OB.signal,
            timeout: setTimeout((() => {
              JB = !0;
              try {
                OB.abort(JD("AbortError", "PostHog request timed out" + ((GB = BB.timeout) ? ` after ${GB}ms` : "")))
              } catch (BB) {
                PB(BB)
              }
              var GB
            }), BB.timeout)
          }
        }
        let MB = !1;
        const PB = OB => {
          var GB;
          MB || (MB = !0, JB && "AbortError" === (null == OB ? void 0 : OB.name) || mM(OB) ? Xo.warn(OB) : Xo.error(OB), null === (GB = BB.callback) || void 0 === GB || GB.call(BB, {
            statusCode: 0,
            error: OB
          }))
        };
        let zB = 0;
        const lB = () => {
          VM -= zB, zB = 0, yB && clearTimeout(yB.timeout)
        };
        try {
          const OB = RD({
              method: (null == BB ? void 0 : BB.method) || "GET",
              headers: jB,
              referrerPolicy: "strict-origin",
              body: QB,
              signal: null == yB ? void 0 : yB.signal
            }, BB.fetchOptions),
            YB = null != oB ? oB : nG(QB) ? 0 : void 0;
          OB.keepalive = "POST" === OB.method && !BB._keepaliveDisabled && !1 !== OB.keepalive && OB.body === QB && !nG(YB) && YB >= 0 && 52428.8 > VM + YB, OB.keepalive && (zB = YB, VM += zB), OG(GB, OB).then((OB => OB.text().then((GB => {
            var YB;
            if (MB) return;
            const DB = {
              statusCode: OB.status,
              text: GB
            };
            if (200 === OB.status) try {
              DB.json = JSON.parse(GB)
            } catch (BB) {
              Xo.error(BB)
            }
            MB = !0, lB(), null === (YB = BB.callback) || void 0 === YB || YB.call(BB, DB, IM((() => OB.headers.get("Retry-After"))))
          })))).catch((BB => {
            lB(), PB(BB)
          })).finally(lB)
        } catch (BB) {
          lB(), PB(BB)
        }
      },
      LM = BB => {
        try {
          var OB;
          const {
            url: GB,
            encodedBody: YB
          } = kM(BB), {
            contentType: DB,
            body: QB,
            estimatedSize: oB
          } = null != YB ? YB : {};
          if (!QB) return;
          const jB = QB instanceof Blob ? QB : new Blob([QB], {
            type: DB
          });
          if (xO.sendBeacon(GB, jB)) return;
          const yB = WG(BB.data) ? BB.data : null === (OB = BB.data) || void 0 === OB ? void 0 : OB.batch;
          if (WG(yB) && yB.length > 1 && (null != oB ? oB : 0) > 16384) {
            const OB = Math.ceil(yB.length / 2),
              GB = OB => WG(BB.data) ? OB : RD(RD({}, BB.data), {}, {
                batch: OB
              });
            return LM(RD(RD({}, BB), {}, {
              data: GB(yB.slice(0, OB))
            })), void LM(RD(RD({}, BB), {}, {
              data: GB(yB.slice(OB))
            }))
          }
          Xo.warn(`Beacon of ~${null!=oB?oB:0} bytes was rejected by the browser, falling back to ${OG?"fetch":"XHR"}`), OG ? iM(RD(RD({}, BB), {}, {
            _keepaliveDisabled: !0
          })) : FM(BB)
        } catch (BB) {
          Xo.warn("Beacon send failed", BB)
        }
      },
      gM = (BB, OB, GB, YB) => {
        const DB = "query" === YB ? "POST" === OB ? "sent_at" : "_" : void 0;
        return UM(GB === NJ.GZipJS ? nM(BB, "compression") : BB, RD(RD({}, DB ? {
          [DB]: Date.now().toString()
        } : {}), GB === NJ.GZipJS ? {} : {
          compression: GB
        }))
      },
      rM = (() => {
        const BB = [];
        return OG && BB.push({
          transport: "fetch",
          method: iM
        }), GG && BB.push({
          transport: "XHR",
          method: FM
        }), (null == xO ? void 0 : xO.sendBeacon) && BB.push({
          transport: "sendBeacon",
          method: LM
        }), BB
      })();
    let XM = !RM && -1 === (null == QG ? void 0 : QG.indexOf("MSIE")) && -1 === (null == QG ? void 0 : QG.indexOf("Mozilla"));

    function wM(BB, OB, GB) {
      var YB, DB, QB;
      GB && (OB = RD(RD({}, OB), {}, {
        callback: BB => GB(BB)
      })), BB.__loaded ? XM ? BB.__request_queue.push(OB) : BB.rateLimiter.isServerRateLimited(OB.batchKey) ? OB.fireCallbackOnDrop && (null === (DB = OB.callback) || void 0 === DB || DB.call(OB, {
        statusCode: 429
      })) : (OB.transport = OB.transport || BB.config.api_transport, OB.headers = RD(RD({}, BB.config.request_headers), OB.headers), OB.compression = "best-available" === OB.compression ? null !== (YB = BB.compression) && void 0 !== YB ? YB : OB.compressionFallback : OB.compression, (nG(BB.config.disable_beacon) ? BB.config.__preview_disable_beacon : BB.config.disable_beacon) && (OB.disableTransport = ["sendBeacon"]), OB.fetchOptions = OB.fetchOptions || BB.config.fetch_options, ((BB, OB) => {
        var GB, YB, DB;
        const QB = RD(RD({}, BB), {}, {
          callback: null != OB ? OB : OB => {
            var GB;
            return null === (GB = BB.callback) || void 0 === GB ? void 0 : GB.call(BB, OB)
          }
        });
        QB.timeout = QB.timeout || 6e4;
        const oB = null !== (GB = QB.transport) && void 0 !== GB ? GB : "fetch";
        "sendBeacon" === oB && nG(QB.compression) && QB.data && (QB.compression = NJ.Base64), "POST" === QB.method && QB.data && ("capture-body" === QB.timestampMode ? QB.data = (BB => {
          var OB, GB;
          const YB = (WG(BB) ? BB : [BB]).map((BB => RD(RD({}, BB), BB.timestamp instanceof Date && !isNaN(BB.timestamp.getTime()) ? {
              timestamp: BB.timestamp.toISOString()
            } : {}))),
            DB = YB[0];
          return {
            api_key: null !== (OB = null == DB || null === (GB = DB.properties) || void 0 === GB ? void 0 : GB.token) && void 0 !== OB ? OB : null == DB ? void 0 : DB.token,
            batch: YB,
            sent_at: (new Date).toISOString()
          }
        })(QB.data) : "body" === QB.timestampMode && (QB.data = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return WG(BB) ? BB.map((BB => RD(RD({}, BB), {}, {
            sent_at: OB
          }))) : RD(RD({}, BB), {}, {
            sent_at: OB
          })
        }(QB.data))), QB.url = gM(QB.url, QB.method, QB.compression, QB.timestampMode);
        const jB = rM.filter((BB => !QB.disableTransport || !BB.transport || !QB.disableTransport.includes(BB.transport))),
          yB = null !== (YB = null === (DB = function(BB, OB) {
            for (let GB = 0; BB.length > GB; GB++)
              if (OB(BB[GB])) return BB[GB]
          }(jB, (BB => BB.transport === oB))) || void 0 === DB ? void 0 : DB.method) && void 0 !== YB ? YB : jB[0].method;
        if (!yB) throw new Error("No available transport method");
        const JB = BB => {
          try {
            yB(BB)
          } catch (BB) {
            var OB;
            mM(BB) ? Xo.warn(BB) : Xo.error(BB), null === (OB = QB.callback) || void 0 === OB || OB.call(QB, {
              statusCode: 0,
              error: BB
            })
          }
        };
        "sendBeacon" !== oB && !QB.preferSyncCompression && QB.data && QB.compression === NJ.GZipJS && DG && "undefined" != typeof Promise && !SM ? KM(QB).then((BB => {
          JB(BB)
        })).catch((OB => {
          if (WQ(OB)) return SM = !0, void JB(RD(RD({}, QB), {}, {
            compression: void 0,
            url: gM(BB.url, BB.method, void 0, BB.timestampMode)
          }));
          (BB => {
            if (!BB || "object" != typeof BB) return !1;
            const OB = "name" in BB ? String(BB.name) : "";
            return WQ(BB) || OB === ZQ
          })(OB) && (SM = !0), JB(QB)
        })) : JB(QB)
      })(OB, ((YB, DB) => {
        var QB, oB, jB;
        BB.rateLimiter.checkForLimiting(YB), 400 > YB.statusCode || null === (QB = (oB = BB.config).on_request_error) || void 0 === QB || QB.call(oB, YB), GB ? GB(YB, DB) : null === (jB = OB.callback) || void 0 === jB || jB.call(OB, YB)
      }))) : OB.fireCallbackOnDrop && (null === (QB = OB.callback) || void 0 === QB || QB.call(OB, {
        statusCode: 0
      }))
    }
    var EM = class {
      constructor(BB, OB) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = CG((null == OB ? void 0 : OB.flush_interval_ms) || 3e3, 250, 5e3, Xo.createLogger("flush interval"), 3e3), this._sendRequest = BB
      }
      enqueue(BB) {
        this._queue.push(BB), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const BB = this._queue.length > 0 ? this._formatQueue() : {},
          OB = Object.values(BB);
        [...OB.filter((BB => 0 === BB.url.indexOf("/e"))), ...OB.filter((BB => 0 !== BB.url.indexOf("/e")))].map((BB => {
          this._sendRequestSafely(RD(RD({}, BB), {}, {
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
          const BB = this._formatQueue();
          for (const OB in BB) this._sendRequestSafely(BB[OB])
        }
      }
      _sendRequestSafely(BB, OB) {
        try {
          this._sendRequest(BB, OB)
        } catch (BB) {
          Xo.error(BB)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const BB = {},
          OB = {};
        co(this._queue, (GB => {
          var YB;
          const DB = GB,
            QB = ((DB ? DB.batchKey : null) || DB.url) + (DB.batchGroup ? `:${DB.batchGroup}` : "");
          nG(BB[QB]) && (BB[QB] = RD(RD({}, DB), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), OB[QB] = []), null === (YB = BB[QB].data) || void 0 === YB || YB.push(DB.data), DB.callback && OB[QB].push(DB.callback)
        }));
        for (const GB in OB) {
          const YB = OB[GB];
          YB.length && (BB[GB].callback = BB => {
            for (const OB of YB) OB(BB)
          })
        }
        return this._queue = [], BB
      }
    };
    const cM = ["retriesPerformedSoFar"];
    var hM = class {
        constructor(BB) {
          this._instance = BB, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!nG(vO) && "onLine" in vO.navigator) {
            if (this._areWeOnline = vO.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, vo(vO, "online", this._onlineListener), vo(vO, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(BB, OB) {
          let {
            retriesPerformedSoFar: GB
          } = BB, YB = fQ(BB, cM);
          uG(GB) && (YB.url = UM(YB.url, {
            retry_count: GB
          })), wM(this._instance, OB ? RD(RD({}, YB), {}, {
            transport: OB
          }) : YB, ((BB, OB) => {
            var DB;
            if (200 !== BB.statusCode && (400 > BB.statusCode || BB.statusCode >= 500)) {
              if ((0 === BB.statusCode ? 3 : 10) > (null != GB ? GB : 0)) return void this._enqueue(RD({
                retriesPerformedSoFar: GB
              }, YB), OB);
              0 === BB.statusCode && Xo.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=GB?GB:0} retries.`)
            }
            null === (DB = YB.callback) || void 0 === DB || DB.call(YB, BB)
          }))
        }
        _enqueue(BB, OB) {
          const GB = BB.retriesPerformedSoFar || 0;
          BB.retriesPerformedSoFar = GB + 1;
          const YB = Math.max(function(BB) {
              const OB = 3e3 * Math.pow(2, BB),
                GB = OB / 2,
                YB = Math.min(18e5, OB),
                DB = (Math.random() - .5) * (YB - GB);
              return Math.ceil(YB + DB)
            }(GB), null != OB ? OB : 0),
            DB = Date.now() + YB;
          this._queue.push({
            retryAt: DB,
            requestOptions: BB
          });
          let QB = `Enqueued failed request for retry in ${YB}`;
          navigator.onLine || (QB += " (Browser is offline)"), Xo.warn(QB), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const BB = Date.now(),
            OB = [],
            GB = this._queue.filter((GB => BB > GB.retryAt || (OB.push(GB), !1)));
          if (this._queue = OB, GB.length > 0)
            for (const {
                requestOptions: YB
              }
              of GB) this.retriableRequest(YB)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, nG(vO) || (this._onlineListener && (vO.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (vO.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: BB
            }
            of this._queue) try {
            this._instance._send_request(RD(RD({}, BB), {}, {
              callback: WG(BB.data) ? void 0 : BB.callback,
              transport: "sendBeacon"
            }))
          } catch (YB) {
            Xo.error(YB)
          }
          this._queue = []
        }
      },
      aM = class {
        constructor(BB) {
          this._instance = BB, this._updateScrollData = () => {
            var BB, OB, GB, YB;
            this._context || (this._context = {});
            const DB = this.scrollElement(),
              QB = this.scrollY(),
              oB = DB ? Math.max(0, DB.scrollHeight - DB.clientHeight) : 0,
              jB = QB + ((null == DB ? void 0 : DB.clientHeight) || 0),
              yB = (null == DB ? void 0 : DB.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(QB), this._context.maxScrollY = Math.max(QB, null !== (BB = this._context.maxScrollY) && void 0 !== BB ? BB : 0), this._context.maxScrollHeight = Math.max(oB, null !== (OB = this._context.maxScrollHeight) && void 0 !== OB ? OB : 0), this._context.lastContentY = jB, this._context.maxContentY = Math.max(jB, null !== (GB = this._context.maxContentY) && void 0 !== GB ? GB : 0), this._context.maxContentHeight = Math.max(yB, null !== (YB = this._context.maxContentHeight) && void 0 !== YB ? YB : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const BB = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), BB
        }
        startMeasuringScrollPosition() {
          vo(vO, "scroll", this._updateScrollData, {
            capture: !0
          }), vo(vO, "scrollend", this._updateScrollData, {
            capture: !0
          }), vo(vO, "resize", this._updateScrollData)
        }
        scrollElement() {
          var BB;
          if (!this._scrollRoot) return null == vO || null === (BB = vO.document) || void 0 === BB ? void 0 : BB.documentElement;
          {
            const BB = WG(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const GB of BB) {
              var OB;
              const BB = null == vO || null === (OB = vO.document) || void 0 === OB ? void 0 : OB.querySelector(GB);
              if (BB) return BB
            }
          }
        }
        _scrollPosition(BB) {
          var OB, GB;
          const YB = "y" === BB ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const BB = this.scrollElement();
            return BB && BB[YB] || 0
          }
          return vO ? "y" === BB ? vO.scrollY || vO.pageYOffset || (null === (OB = vO.document) || void 0 === OB || null === (OB = OB.documentElement) || void 0 === OB ? void 0 : OB.scrollTop) || 0 : vO.scrollX || vO.pageXOffset || (null === (GB = vO.document) || void 0 === GB || null === (GB = GB.documentElement) || void 0 === GB ? void 0 : GB.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const eM = BB => OJ(null == BB ? void 0 : BB.config.mask_personal_data_properties, null == BB ? void 0 : BB.config.custom_personal_data_properties, null == BB ? void 0 : BB.config.disable_capture_url_hashes);
    var TM = class {
        constructor(BB, OB, GB, YB) {
          this._onSessionIdCallback = BB => {
            const OB = this._getStored();
            if (OB && OB.sessionId === BB) return;
            const GB = {
              sessionId: BB,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [WO]: GB
            })
          }, this._instance = BB, this._sessionIdManager = OB, this._persistence = GB, this._sessionSourceParamGenerator = YB || eM, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[WO]
        }
        getSetOnceProps() {
          var BB;
          const OB = null === (BB = this._getStored()) || void 0 === BB ? void 0 : BB.props;
          return OB ? "r" in OB ? GJ(OB, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: OB.referringDomain,
            $pathname: OB.initialPathName,
            utm_source: OB.utm_source,
            utm_campaign: OB.utm_campaign,
            utm_medium: OB.utm_medium,
            utm_content: OB.utm_content,
            utm_term: OB.utm_term
          } : {}
        }
        getSessionProps() {
          const BB = {};
          return co(To(this.getSetOnceProps()), ((OB, GB) => {
            "$current_url" === GB && (GB = "url"), BB[`$session_entry_${pG(GB)}`] = OB
          })), BB
        }
      },
      bM = class {
        on(BB, OB) {
          return this._events[BB] || (this._events[BB] = []), this._events[BB].push(OB), () => {
            this._events[BB] = this._events[BB].filter((BB => BB !== OB))
          }
        }
        emit(BB, OB) {
          for (const GB of this._events[BB] || []) GB(OB);
          for (const GB of this._events["*"] || []) GB(BB, OB)
        }
        constructor() {
          this._events = {}
        }
      };
    const CM = wo("[SessionId]"),
      HM = 864e5;
    var vM = class {
      on(BB, OB) {
        return this._eventEmitter.on(BB, OB)
      }
      constructor(BB, OB, GB) {
        var YB;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new bM, this._sessionHasBeenIdleTooLong = (BB, OB) => !(!uG(BB) || !uG(OB)) && Math.abs(BB - OB) > this.sessionTimeoutMs, !BB.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === BB.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = BB.config, this._persistence = BB.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = OB || Dj, this._windowIdGenerator = GB || Dj;
        const DB = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * CG(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, CM.createLogger("session_idle_timeout_seconds"), 1800), BB.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + DB + "_window_id", this._primary_window_exists_storage_key = "ph_" + DB + "_primary_window_exists", this._canUseSessionStorage()) {
          const BB = fj._parse(this._window_id_storage_key),
            OB = fj._parse(this._primary_window_exists_storage_key);
          BB && !OB ? this._windowId = BB : fj._remove(this._window_id_storage_key), fj._set(this._primary_window_exists_storage_key, !0)
        }(null === (YB = this._config.bootstrap) || void 0 === YB ? void 0 : YB.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(BB) {
        return nG(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(BB), this._sessionId && BB(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((OB => OB !== BB))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && fj._is_supported()
      }
      _setWindowId(BB) {
        BB !== this._windowId && (this._windowId = BB, this._canUseSessionStorage() && fj._set(this._window_id_storage_key, BB))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? fj._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(BB) {
        const OB = this._lastPersistedActivityTimestamp;
        return !kG(OB) && !kG(BB) && 5e3 > Math.abs(BB - OB)
      }
      _setSessionId(BB, OB, GB) {
        const YB = OB !== this._sessionActivityTimestamp,
          DB = !(BB !== this._sessionId || GB !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = GB, this._sessionActivityTimestamp = OB, this._sessionId = BB, DB && !YB || DB && this._isActivityChangeBelowGranularity(OB) || (this._lastPersistedActivityTimestamp = OB, this._persistence.register({
          [xB]: [OB, BB, GB]
        }))
      }
      _useCrossTabRefreshHardening() {
        var BB;
        const OB = null === (BB = this._config) || void 0 === BB ? void 0 : BB.persistence_save_debounce_ms;
        return uG(OB) && OB > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(xB) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var BB;
        if (kG(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, OB, GB] = this._getSessionId();
        OB === this._sessionId && GB === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [xB]: [this._sessionActivityTimestamp, null !== (BB = this._sessionId) && void 0 !== BB ? BB : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [BB] = this._getSessionId(), OB = uG(BB) ? BB : 0, GB = uG(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(OB, GB)
      }
      _isSessionIdleAfterCrossTabRefresh(BB) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(BB, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const BB = this._persistence.props[xB];
        return WG(BB) && 2 === BB.length && BB.push(BB[0]), BB || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const GB = (BB => {
              const OB = BB.replace(/-/g, "");
              if (32 !== OB.length) throw new Error("Not a valid UUID");
              if ("7" !== OB[12]) throw new Error("Not a UUIDv7");
              return parseInt(OB.substring(0, 12), 16)
            })(BB);
            return GB > OB + 6e4 ? void CM.error("Bootstrap sessionID cannot be in the future") : GB
          } catch (BB) {
            return void CM.error("Invalid sessionID in bootstrap", BB)
          }
        }(BB);
        return !nG(GB) && (OB ? this._pendingBootstrapSession = {
          sessionId: BB,
          sessionStartTimestamp: GB
        } : this._setSessionId(BB, (new Date).getTime(), GB), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && vO && (vO.removeEventListener(eO, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && fj._remove(this._primary_window_exists_storage_key)
        }, vo(vO, eO, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const YB = OB || (new Date).getTime(),
          DB = this._sessionId;
        if (GB) this._lastCookieSyncTimestamp = YB;
        else if (kG(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > YB || YB - this._lastCookieSyncTimestamp >= 1e3) {
          var QB, oB;
          null === (QB = (oB = this._persistence).syncCookieProperties) || void 0 === QB || QB.call(oB), this._lastCookieSyncTimestamp = YB
        }
        let [, jB, yB] = this._getSessionId();
        const JB = !nG(DB) && jB !== DB,
          MB = this._freshestActivityTimestamp();
        let PB = this._getWindowId();
        const zB = this._pendingBootstrapSession,
          lB = !!zB && (zB.sessionStartTimestamp > YB + 6e4 || YB - zB.sessionStartTimestamp > HM),
          pB = zB ? lB : uG(yB) && Math.abs(YB - yB) > HM;
        let qB = !1,
          ZB = JB,
          NB = !jB || !!zB;
        const RB = jB;
        let WB = !NB && !BB && this._sessionHasBeenIdleTooLong(YB, MB);
        if (WB && (WB = this._isSessionIdleAfterCrossTabRefresh(YB), WB || CM.info("cross-tab refresh kept the session alive", {
            sessionId: jB
          }), [, jB, yB] = this._getSessionId(), WB || (NB = !jB || !!zB)), NB || WB || pB) {
          ZB = !1;
          const BB = zB && !lB;
          jB = BB ? zB.sessionId : this._sessionIdGenerator(), PB = this._windowIdGenerator(), CM.info("new session ID assigned", {
            sessionId: jB,
            windowId: PB,
            bootstrapped: !!BB,
            changeReason: {
              noSessionId: NB,
              activityTimeout: WB,
              sessionPastMaximumLength: pB
            }
          }), yB = BB ? zB.sessionStartTimestamp : YB, this._pendingBootstrapSession = void 0, qB = !0
        } else PB || (PB = this._windowIdGenerator(), qB = !0), ZB = ZB || jB !== RB, ZB && (CM.info("adopted cross-tab session id", {
          sessionId: jB,
          windowId: PB
        }), qB = !0);
        const AB = uG(MB) && BB && !pB ? MB : YB,
          VB = uG(yB) ? yB : (new Date).getTime();
        this._setWindowId(PB), this._setSessionId(jB, AB, VB), BB || this._resetIdleTimer();
        const SB = {
          noSessionId: NB,
          activityTimeout: WB,
          sessionPastMaximumLength: pB,
          crossTabAdoption: ZB
        };
        return qB && this._sessionIdChangedHandlers.forEach((BB => BB(jB, PB, SB))), {
          sessionId: jB,
          windowId: PB,
          sessionStartTimestamp: VB,
          changeReason: qB ? SB : void 0,
          lastActivityTimestamp: MB
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const BB = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: BB
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const sM = function(BB, OB) {
      if (!BB) return !1;
      const GB = BB.userAgent;
      if (GB && bG(GB, OB)) return !0;
      try {
        const GB = null == BB ? void 0 : BB.userAgentData;
        if ((null == GB ? void 0 : GB.brands) && GB.brands.some((BB => bG(null == BB ? void 0 : BB.brand, OB)))) return !0
      } catch (BB) {}
      return !!BB.webdriver
    };

    function xM() {
      return (xM = aG((function*() {
        const BB = null == xO ? void 0 : xO.userAgentData;
        if (null == BB ? void 0 : BB.getHighEntropyValues) try {
          const OB = yield BB.getHighEntropyValues(["model"]), GB = null == OB ? void 0 : OB.model;
          return UG(GB) && GB.length > 0 ? GB : void 0
        } catch (BB) {
          return void Xo.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", BB)
        }
      }))).apply(this, arguments)
    }

    function tM(BB, OB) {
      let GB = `$survey_${OB}/${BB.id}`;
      return BB.current_iteration && BB.current_iteration > 0 && (GB = `$survey_${OB}/${BB.id}/${BB.current_iteration}`), GB
    }

    function BP(BB) {
      var OB;
      return !!(null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.events) || void 0 === OB || null === (OB = OB.values) || void 0 === OB ? void 0 : OB.length)
    }
    const OP = (BB, OB) => {
        if (!(BB => {
            try {
              new RegExp(BB)
            } catch (BB) {
              return !1
            }
            return !0
          })(OB)) return !1;
        try {
          return new RegExp(OB).test(BB)
        } catch (BB) {
          return !1
        }
      },
      GP = BB => BB.toLowerCase(),
      YP = {
        exact: (BB, OB) => OB.some((OB => BB.some((BB => OB === BB)))),
        is_not: (BB, OB) => OB.every((OB => BB.every((BB => OB !== BB)))),
        regex: (BB, OB) => OB.some((OB => BB.some((BB => OP(OB, BB))))),
        not_regex: (BB, OB) => OB.every((OB => BB.every((BB => !OP(OB, BB))))),
        icontains: (BB, OB) => OB.map(GP).some((OB => BB.map(GP).some((BB => OB.includes(BB))))),
        not_icontains: (BB, OB) => OB.map(GP).every((OB => BB.map(GP).every((BB => !OB.includes(BB))))),
        gt: (BB, OB) => OB.some((OB => {
          const GB = parseFloat(OB);
          return !isNaN(GB) && BB.some((BB => GB > parseFloat(BB)))
        })),
        lt: (BB, OB) => OB.some((OB => {
          const GB = parseFloat(OB);
          return !isNaN(GB) && BB.some((BB => GB < parseFloat(BB)))
        }))
      };

    function DP(BB, OB) {
      return !BB || Object.entries(BB).every((BB => {
        let [GB, YB] = BB;
        const DB = null == OB ? void 0 : OB[GB];
        if (null == DB) return !1;
        const QB = YP[YB.operator];
        return !!QB && QB(YB.values.map(String), [String(DB)])
      }))
    }

    function QP(BB, OB, GB) {
      return Xy({
        distinct_id: BB,
        userPropertiesToSet: OB,
        userPropertiesToSetOnce: GB
      })
    }
    const oP = "custom",
      jP = "i.posthog.com",
      yP = /^\/static\//,
      JP = ["/s/", "/e/", "/i/"];
    var MP = class {
      constructor(BB) {
        this._regionCache = {}, this.instance = BB
      }
      get apiHost() {
        const BB = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === BB ? "https://us.i.posthog.com" : BB
      }
      get flagsApiHost() {
        const BB = this.instance.config.flags_api_host;
        return BB ? BB.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var BB;
        let OB = null === (BB = this.instance.config.ui_host) || void 0 === BB ? void 0 : BB.replace(/\/$/, "");
        return OB || (OB = this.apiHost.replace(`.${jP}`, ".posthog.com")), "https://app.posthog.com" === OB ? "https://us.posthog.com" : OB
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : oP), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(BB) {
        if (!yP.test(BB)) return;
        const OB = this.instance.config.asset_host;
        return "string" == typeof OB && OB.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(BB) {
        const OB = wy(BB);
        return OB ? OB.protocol + "//" + OB.host + OB.pathname : void 0
      }
      _prepareEndpoint(BB, OB, GB) {
        if ("ui" === BB) return GB;
        let YB = GB;
        const DB = this.instance.config.rewriteRequestPath;
        if (DB) {
          var QB;
          const BB = (null === (QB = wy(GB)) || void 0 === QB ? void 0 : QB.href) || GB;
          YB = DB(new URL(BB)).toString()
        }
        if (DB && "api" === BB && JP.some((BB => 0 === OB.indexOf(BB)))) {
          const BB = this._urlKey(YB);
          if (BB) {
            const OB = this.apiHost;
            let GB = this._ingestionEndpoints;
            (null == GB ? void 0 : GB.apiHost) === OB && GB.rewriteRequestPath === DB || (GB = {
              apiHost: OB,
              rewriteRequestPath: DB,
              urls: new Set
            }, this._ingestionEndpoints = GB), GB.urls.add(BB)
          }
        }
        return YB
      }
      isIngestionEndpoint(BB) {
        const OB = this._ingestionEndpoints,
          GB = this._urlKey(BB);
        return (null == OB ? void 0 : OB.apiHost) === this.apiHost && OB.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!GB && OB.urls.has(GB)
      }
      endpointFor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (OB && (OB = "/" === OB[0] ? OB : `/${OB}`), "ui" === BB) return this._prepareEndpoint(BB, OB, this.uiHost + OB);
        if ("flags" === BB) return this._prepareEndpoint(BB, OB, this.flagsApiHost + OB);
        if ("assets" === BB) {
          const GB = this._staticAssetHostOverride(OB);
          if (GB) return this._prepareEndpoint(BB, OB, `${GB}${OB}`)
        }
        if (this.region === oP) return this._prepareEndpoint(BB, OB, this.apiHost + OB);
        const GB = jP + OB;
        switch (BB) {
          case "assets":
            return this._prepareEndpoint(BB, OB, `https://${this.region}-assets.${GB}`);
          case "api":
            return this._prepareEndpoint(BB, OB, `https://${this.region}.${GB}`)
        }
      }
    };
    const PP = wo("[Surveys]"),
      zP = BB => {
        try {
          const OB = (BB => ((BB, OB) => `seenSurvey_${function(BB){return BB.current_iteration&&BB.current_iteration>0?`${BB.id}_${BB.current_iteration}`:BB.id}(OB)}`)(0, BB))(BB);
          if (localStorage.getItem(OB)) return;
          localStorage.setItem(OB, "true")
        } catch (BB) {
          PP.error("Failed to persist survey seen state", BB)
        }
      },
      lP = [AJ, SJ, VJ],
      pP = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: uJ
      },
      qP = wo("[PostHog ExternalIntegrations]"),
      ZP = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var NP = class {
      constructor(BB) {
        this._instance = BB
      }
      _loadScript(BB, OB) {
        var GB, YB;
        null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, BB, (BB => {
          if (BB) return qP.error("failed to load script", BB);
          OB()
        }))
      }
      startIfEnabledOrStop() {
        var BB;
        for (const [DB, QB] of Object.entries(null !== (BB = this._instance.config.integrations) && void 0 !== BB ? BB : {})) {
          var OB, GB, YB;
          QB && !(null === (OB = jG.__PosthogExtensions__) || void 0 === OB || null === (OB = OB.integrations) || void 0 === OB ? void 0 : OB[DB]) && this._loadScript(ZP[DB], (() => {
            var BB;
            null === (BB = jG.__PosthogExtensions__) || void 0 === BB || null === (BB = BB.integrations) || void 0 === BB || null === (BB = BB[DB]) || void 0 === BB || BB.start(this._instance)
          })), !QB && (null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (GB = GB.integrations) || void 0 === GB ? void 0 : GB[DB]) && (null === (YB = jG.__PosthogExtensions__) || void 0 === YB || null === (YB = YB.integrations) || void 0 === YB || null === (YB = YB[DB]) || void 0 === YB || YB.stop())
        }
      }
    };
    const RP = "autocapture",
      WP = "featureFlags",
      AP = "logs",
      VP = "surveys";
    var SP = class {
        constructor(BB) {
          this._instance = BB
        }
        initialize() {}
        get(BB) {
          const OB = this._instance.persistence;
          if ("string" == typeof BB) return null == OB ? void 0 : OB.get_property(BB);
          const GB = {};
          for (const YB of BB) {
            const BB = null == OB ? void 0 : OB.get_property(YB);
            nG(BB) || (GB[YB] = BB)
          }
          return GB
        }
        set(BB, OB) {
          var GB;
          null === (GB = this._instance.persistence) || void 0 === GB || GB.register("string" == typeof BB ? {
            [BB]: OB
          } : BB)
        }
        remove(BB) {
          var OB;
          null === (OB = this._instance.persistence) || void 0 === OB || OB.unregister(BB)
        }
      },
      nP = class {
        constructor(BB) {
          this.instance = BB, this._logger = Xo, this.kv = new SP(BB), this.onEvent = BB => IJ(this.instance._addCaptureHook(((OB, GB) => {
            if (GB) try {
              BB({
                event: OB,
                properties: GB.properties
              })
            } catch (BB) {
              this._logger.error("Browser extension event listener failed", BB)
            }
          }))), this.onRemoteConfig = BB => {
            const OB = OB => {
                try {
                  BB(OB)
                } catch (BB) {
                  this._logger.error("Browser extension remote config listener failed", BB)
                }
              },
              GB = this.instance._internalEventEmitter.on("extensionsRemoteConfig", OB);
            return this.instance._lastRemoteConfig && OB(this.instance._lastRemoteConfig), IJ(GB)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var BB;
          return null !== (BB = this.instance.get_property("$device_id")) && void 0 !== BB ? BB : this.distinctId
        }
        get deviceId() {
          const BB = this.instance.get_property(UB);
          return "string" == typeof BB ? BB : void 0
        }
        get library() {
          return {
            name: QB.LIB_NAME,
            version: QB.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var BB, OB;
          return null !== (BB = null === (OB = this.instance.persistence) || void 0 === OB ? void 0 : OB.get_initial_props()) && void 0 !== BB ? BB : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var BB, OB, GB, YB, DB;
            const QB = null === (BB = this.instance.sessionManager) || void 0 === BB ? void 0 : BB.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (OB = null == QB ? void 0 : QB.sessionId) && void 0 !== OB ? OB : "",
              windowId: null !== (GB = null == QB ? void 0 : QB.windowId) && void 0 !== GB ? GB : "",
              sessionStartTimestamp: null !== (YB = null == QB ? void 0 : QB.sessionStartTimestamp) && void 0 !== YB ? YB : 0,
              lastActivityTimestamp: null !== (DB = null == QB ? void 0 : QB.lastActivityTimestamp) && void 0 !== DB ? DB : 0
            }
          } catch (BB) {
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
          return AG(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(BB) {
          let OB;
          switch (BB) {
            case WP:
            case "featureFlagsCommon":
              OB = this.instance.featureFlags;
              break;
            case AP:
              OB = this.instance.logs;
              break;
            case VP:
              OB = this.instance.surveys;
              break;
            case RP:
              OB = this.instance.autocapture
          }
          return OB
        }
        capture(BB, OB, GB) {
          GB ? this.instance.capture(BB, OB, {
            timestamp: GB.timestamp,
            uuid: GB.uuid,
            $set: GB.set,
            $set_once: GB.setOnce
          }) : this.instance.capture(BB, OB)
        }
        registerDynamicEventProperties(BB) {
          return IJ(this.instance._registerExtensionEventProperties(BB))
        }
        sendRequest(BB) {
          var OB = this;
          return aG((function*(BB) {
            let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var YB;
            const DB = null !== (YB = GB.target) && void 0 !== YB ? YB : "api",
              QB = OB.instance.requestRouter.endpointFor(DB, BB),
              oB = "api" === DB && "/i/v1/logs" === BB,
              jB = {
                method: GB.method,
                url: GB.query ? UM(QB, GB.query) : QB,
                data: GB.body,
                headers: GB.headers,
                timeout: GB.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: GB.transport,
                compression: GB.compression,
                compressionFallback: "flags" === GB.target && "best-available" === GB.compression ? JG.Base64 : void 0,
                timestampMode: GB.sentAt
              };
            return oB && (jB.batchKey = "logs"), "sendBeacon" === GB.transport ? (OB.instance._send_request(jB), {
              statusCode: 202
            }) : new Promise((BB => {
              jB.callback = BB, OB.instance._send_request(jB)
            }))
          })).apply(this, arguments)
        }
      };
    const UP = {};
    let fP = 0;
    const kP = () => {},
      dP = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      KP = "Surveys module not available",
      uP = "sanitize_properties is deprecated. Use before_send instead",
      mP = "Invalid value for property_denylist config: ",
      IP = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      FP = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      iP = BB => "$" === BB.charAt(0) && !zG(FP, BB),
      LP = /^[A-Za-z0-9_-]{1,400}$/,
      gP = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      rP = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      XP = ["token", "distinct_id", kO],
      wP = "posthog",
      EP = BB => {
        const OB = {};
        return BB && "unset" !== BB ? ("2025-11-30" > BB || (OB.strictMinimumDuration = !0), "2026-05-30" > BB || (OB.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > BB || (OB.streamNetworkBody = !0), "2026-08-30" > BB || (OB.captureJsonLd = !0), OB) : OB
      },
      cP = BB => {
        var OB;
        return RD({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: Ho(null == tO ? void 0 : tO.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: kP,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != BB ? BB : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: BG && UG(null == BG ? void 0 : BG.search) && -1 !== BG.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == vO || null === (OB = vO.location) || void 0 === OB ? void 0 : OB.protocol),
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
          on_request_error(BB) {
            Xo.error("Bad HTTP status: " + BB.statusCode + " " + BB.text)
          },
          get_device_id: BB => BB,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: aO,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: kP
        }, (BB => ({
          rageclick: BB && BB >= "2026-05-30" ? {
            content_ignorelist: bj,
            ignore_text_selection: !0
          } : !BB || "2025-11-30" > BB || {
            content_ignorelist: !0
          },
          capture_pageview: !BB || "2025-05-24" > BB || "history_change",
          session_recording: EP(BB),
          external_scripts_inject_target: BB && BB >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: BB && BB >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: BB && BB >= "2026-05-30" ? 250 : 0,
          split_storage: !(!BB || "2026-05-30" > BB),
          detect_google_search_app: !(!BB || "2026-05-30" > BB),
          disable_capture_url_hashes: !(!BB || "2026-06-25" > BB),
          cookieWinsOnConflict: !(!BB || "unset" === BB || "2026-08-29" > BB)
        }))(BB))
      },
      hP = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      aP = BB => {
        const OB = {};
        for (const [DB, QB] of hP) nG(BB[DB]) || (OB[QB] = BB[DB]);
        const GB = ho({}, OB, BB),
          YB = BB.__preview_external_dependency_versioned_paths;
        return nG(YB) || (nG(BB.strict_script_versioning) && (GB.strict_script_versioning = !!YB), UG(YB) && nG(BB.asset_host) && (GB.asset_host = YB)), WG(BB.property_blacklist) && (nG(BB.property_denylist) ? GB.property_denylist = BB.property_blacklist : WG(BB.property_denylist) ? GB.property_denylist = [...BB.property_blacklist, ...BB.property_denylist] : Xo.error(mP + BB.property_denylist)), GB
      };
    var eP = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(BB) {
          Xo.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = BB
        }
      },
      TP = class BB {
        _removeExtension(BB) {
          if (!BB) return;
          const OB = this._extensions.indexOf(BB); - 1 !== OB && this._extensions.splice(OB, 1)
        }
        _replaceExtension(BB, OB) {
          var GB;
          return this._removeExtension(BB), this._extensions.push(OB), null === (GB = OB.initialize) || void 0 === GB || GB.call(OB), OB
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const BB = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!BB && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let OB, GB, YB;
          BB ? (OB = `persistence is set to '${this.config.persistence}'`, GB = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", YB = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (OB = "persistence is disabled (disable_persistence is true)", GB = "on every page load", YB = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${OB} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${GB}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${YB}`)
        }
        _syncCookielessIdentity() {
          const BB = this.persistence;
          if (!BB || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || BB.load(!0);
          const OB = this.get_distinct_id();
          if (!OB || "$posthog_cookieless" === OB) {
            const OB = this.config.get_device_id(Dj());
            this.register({
              distinct_id: OB,
              $device_id: OB
            }), BB.set_property(RO, cO)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var BB, OB;
          return null !== (BB = null === (OB = this.featureFlags) || void 0 === OB ? void 0 : OB.hasLoadedFlags) && void 0 !== BB && BB
        }
        get flagsEndpointWasHit() {
          var BB, OB;
          return null !== (BB = null === (OB = this.featureFlags) || void 0 === OB ? void 0 : OB.hasLoadedFlags) && void 0 !== BB && BB
        }
        constructor() {
          var OB;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new eP, this._personProcessingSetOncePropertiesSent = !1, this.version = QB.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new bM, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = cP(), this.SentryIntegration = dy, this.sentryIntegration = BB => function(BB, OB) {
            const GB = ky(BB, OB);
            return {
              name: fy,
              processEvent: BB => GB(BB)
            }
          }(this, BB), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new aM(this), this.pageViewManager = new Ky(this), this.rateLimiter = new rJ(this), this.requestRouter = new MP(this), this.consent = new kj(this), this.externalIntegrations = new NP(this);
          const GB = null !== (OB = BB.__defaultExtensionClasses) && void 0 !== OB ? OB : {};
          this.featureFlags = GB.featureFlags && new GB.featureFlags(this), this.toolbar = GB.toolbar && new GB.toolbar(this), this.surveys = GB.surveys && new GB.surveys(this), this.conversations = GB.conversations && new GB.conversations(this), this.logs = GB.logs && new GB.logs(this), this.metrics = GB.metrics && new GB.metrics(this), this.experiments = GB.experiments && new GB.experiments(this), this.exceptions = GB.exceptions && new GB.exceptions(this), this.people = {
            set: (BB, OB, GB) => {
              const YB = UG(BB) ? {
                [BB]: OB
              } : BB;
              this.setPersonProperties(YB), null == GB || GB({})
            },
            set_once: (BB, OB, GB) => {
              const YB = UG(BB) ? {
                [BB]: OB
              } : BB;
              this.setPersonProperties(void 0, YB), null == GB || GB({})
            }
          }, this.on("eventCaptured", (BB => Xo.info(`send "${null==BB?void 0:BB.event}"`, BB)))
        }
        init(OB, GB, YB) {
          if (YB && YB !== wP) {
            var DB;
            const QB = null !== (DB = UP[YB]) && void 0 !== DB ? DB : new BB;
            return QB._init(OB, GB, YB), UP[YB] = QB, UP[wP][YB] = QB, QB
          }
          return this._init(OB, GB, YB)
        }
        _init(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 ? arguments[2] : void 0;
          var YB, DB, oB;
          const jB = UG(BB) ? BB.trim() : "";
          if (!jB) return Xo.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var yB;
          if (this.__loaded) return jB !== (null === (yB = this.config) || void 0 === yB ? void 0 : yB.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${jB}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = cP(OB.defaults), OB.debug = this._checkLocalStorageForDebug(OB.debug), this._originalUserConfig = OB, this._triggered_notifs = [], OB.person_profiles ? this._initialPersonProfilesConfig = OB.person_profiles : OB.process_person && (this._initialPersonProfilesConfig = OB.process_person);
          const JB = cP(OB.defaults),
            MB = aP(OB),
            PB = ho({}, JB, MB, {
              name: GB,
              token: jB
            });
          VG(JB.rageclick) && VG(MB.rageclick) && (PB.rageclick = ho({}, JB.rageclick, MB.rageclick)), VG(JB.session_recording) && VG(MB.session_recording) && (PB.session_recording = ho({}, JB.session_recording, MB.session_recording)), this.set_config(PB), this.config.on_xhr_error && Xo.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = OB.disable_compression ? void 0 : NJ.GZipJS;
          const zB = this._is_persistence_disabled(),
            lB = !this._inCookielessMode();
          if (this.persistence = new ZJ(this.config, zB, !0, lB), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new ZJ(RD(RD({}, this.config), {}, {
              persistence: "sessionStorage"
            }), zB, !1, lB), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !zB && fj._is_supported()) {
            const BB = fj._parse(this._sessionRegisteredPropertiesStorageKey);
            WG(BB) && BB.forEach((BB => {
              UG(BB) && this._sessionRegisteredPropKeys.add(BB)
            }))
          } else fj._remove(this._sessionRegisteredPropertiesStorageKey);
          const pB = RD({}, this.persistence.props),
            qB = RD({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new EM(((BB, OB) => this._send_retriable_request(BB, OB)), this.config.request_queue_config), this._retryQueue = new hM(this), this.__request_queue = [];
          const ZB = this._inCookielessMode();
          ZB || (this.sessionManager = new vM(this), this.sessionPropsManager = new TM(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((BB, OB, GB) => {
            ((null == GB ? void 0 : GB.activityTimeout) || (null == GB ? void 0 : GB.sessionPastMaximumLength) || (null == GB ? void 0 : GB.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (Xo.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(ZB)
          }), 0)) : (Xo.info("Initializing extensions synchronously"), this._initExtensions(ZB)), QB.DEBUG = QB.DEBUG || this.config.debug, QB.DEBUG && Xo.info("Starting in debug mode", {
            this: this,
            config: OB,
            thisC: RD({}, this.config),
            p: pB,
            s: qB
          }), this.config.identity_distinct_id && !(null === (YB = OB.bootstrap) || void 0 === YB ? void 0 : YB.distinctID) && (OB.bootstrap = RD(RD({}, OB.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const NB = null === (DB = OB.bootstrap) || void 0 === DB ? void 0 : DB.distinctID;
          if (this._hasStableInitialDistinctId = !!NB && !fG(NB), null === (oB = OB.bootstrap) || void 0 === oB ? void 0 : oB.distinctID) {
            const BB = OB.bootstrap.distinctID,
              GB = this.get_distinct_id(),
              YB = this.persistence.get_property(RO);
            if (OB.bootstrap.isIdentifiedID && null != GB && GB !== BB && "anonymous" === YB) this.identify(BB);
            else if (OB.bootstrap.isIdentifiedID && null != GB && GB !== BB && "identified" === YB) Xo.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const GB = this.config.get_device_id(Dj()),
                YB = OB.bootstrap.isIdentifiedID ? GB : BB;
              this.persistence.set_property(RO, OB.bootstrap.isIdentifiedID ? hO : cO), this.register({
                distinct_id: BB,
                $device_id: YB
              })
            }
          }
          if (ZB) this.register_once({
            distinct_id: fO,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const BB = this.config.get_device_id(Dj());
            this.register_once({
              distinct_id: BB,
              $device_id: BB
            }, ""), this.persistence.set_property(RO, cO)
          }
          return vo(vO, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), vo(vO, "pageshow", (() => {
            var BB;
            this._isPageUnloading = !1, this._isShutdown || null === (BB = this._retryQueue) || void 0 === BB || BB.resume()
          })), OB.segment ? Uy(this, (() => this._loaded())) : this._loaded(), AG(this.config._onCapture) && this.config._onCapture !== kP && (Xo.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (BB => this.config._onCapture(BB.event, BB)))), this.config.ip && Xo.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return xM.apply(this, arguments)
          }().then((BB => {
            BB && this.register({
              [fB]: BB
            })
          })).catch(kP), this
        }
        _isSharedExtension(BB) {
          const OB = BB;
          return UG(OB.name) && AG(OB.setup)
        }
        _enrollExtension(BB, OB) {
          var GB = this;
          this._isSharedExtension(BB) ? OB.push(aG((function*() {
            try {
              yield BB.setup(GB._getBrowserClientAdapter())
            } catch (GB) {
              Xo.error(`Failed to set up extension "${BB.name}"`, GB);
              try {
                var OB;
                yield null === (OB = BB.dispose) || void 0 === OB ? void 0 : OB.call(BB)
              } catch (OB) {
                Xo.error(`Failed to dispose extension "${BB.name}"`, OB)
              }
            }
          }))) : this._extensions.push(BB)
        }
        _enrollFeatureFlags() {
          var OB, GB, YB, DB = this;
          const QB = null !== (OB = null === (GB = this.config.__extensionClasses) || void 0 === GB ? void 0 : GB.featureFlags) && void 0 !== OB ? OB : null === (YB = BB.__defaultExtensionClasses) || void 0 === YB ? void 0 : YB.featureFlags;
          var oB, jB, yB;
          if (QB)
            if (this.featureFlags && this.featureFlags instanceof QB || (null === (oB = this._featureFlagsReloadingUnsubscribe) || void 0 === oB || oB.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new QB(this)), AG(this.featureFlags.onReloading) && AG(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const BB = this.featureFlags;
                aG((function*() {
                  try {
                    yield BB.setup(DB._getBrowserClientAdapter())
                  } catch (OB) {
                    Xo.error("Failed to set up feature flags", OB);
                    const YB = DB._featureFlagsReloadingUnsubscribe;
                    DB._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == YB || YB()
                    } catch (BB) {
                      Xo.error("Failed to unsubscribe feature flag reloading", BB)
                    }
                    try {
                      yield BB.dispose()
                    } catch (BB) {
                      Xo.error("Failed to dispose feature flags", BB)
                    }
                  }
                }))()
              }
            } else null === (jB = (yB = this.featureFlags).initialize) || void 0 === jB || jB.call(yB)
        }
        _initExtensions(OB) {
          const GB = performance.now(),
            YB = RD(RD({}, BB.__defaultExtensionClasses), this.config.__extensionClasses),
            DB = [];
          var QB, oB, jB, yB, JB, MB, PB, zB;
          YB.exceptions && this._extensions.push(this.exceptions = null !== (QB = this.exceptions) && void 0 !== QB ? QB : new YB.exceptions(this)), YB.historyAutocapture && this._extensions.push(this.historyAutocapture = new YB.historyAutocapture(this)), YB.tracingHeaders && this._extensions.push(this.tracingHeaders = new YB.tracingHeaders(this)), YB.siteApps && this._extensions.push(this.siteApps = new YB.siteApps(this)), YB.sessionRecording && !OB && this._extensions.push(this.sessionRecording = new YB.sessionRecording(this)), this.config.disable_scroll_properties || DB.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), YB.autocapture && this._enrollExtension(this.autocapture = new YB.autocapture(this), DB), YB.surveys && this._enrollExtension(this.surveys = null !== (oB = this.surveys) && void 0 !== oB ? oB : new YB.surveys(this), DB), YB.logs && this._enrollExtension(this.logs = null !== (jB = this.logs) && void 0 !== jB ? jB : new YB.logs(this), DB), YB.metrics && this._extensions.push(this.metrics = null !== (yB = this.metrics) && void 0 !== yB ? yB : new YB.metrics(this)), YB.conversations && this._extensions.push(this.conversations = null !== (JB = this.conversations) && void 0 !== JB ? JB : new YB.conversations(this)), YB.productTours && this._extensions.push(this.productTours = new YB.productTours(this)), YB.heatmaps && this._extensions.push(this.heatmaps = new YB.heatmaps(this)), YB.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new YB.webVitalsAutocapture(this)), YB.exceptionObserver && this._extensions.push(this.exceptionObserver = new YB.exceptionObserver(this)), YB.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new YB.deadClicksAutocapture(this, Vy)), YB.toolbar && this._extensions.push(this.toolbar = null !== (MB = this.toolbar) && void 0 !== MB ? MB : new YB.toolbar(this)), YB.experiments && this._extensions.push(this.experiments = null !== (PB = this.experiments) && void 0 !== PB ? PB : new YB.experiments(this)), YB.webMCP && this._extensions.push(this.webMCP = null !== (zB = this.webMCP) && void 0 !== zB ? zB : new YB.webMCP(this)), this._extensions.forEach((BB => {
            BB.initialize && DB.push((() => {
              var OB;
              null === (OB = BB.initialize) || void 0 === OB || OB.call(BB)
            }))
          })), DB.push((() => {
            if (this._pendingRemoteConfig) {
              const BB = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((OB => {
                var GB;
                return null === (GB = OB.onRemoteConfig) || void 0 === GB ? void 0 : GB.call(OB, BB)
              }))
            }
          })), this._processInitTaskQueue(DB, GB)
        }
        _processInitTaskQueue(BB, OB) {
          for (; BB.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - OB >= 30 && BB.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(BB, OB)
            }), 0));
            const GB = BB.shift();
            if (GB) try {
              GB()
            } catch (BB) {
              Xo.error("Error initializing extension:", BB)
            }
          }
          const GB = Math.round(performance.now() - OB);
          this.register_for_session({
            [dO]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [KO]: GB
          }), this.config.__preview_deferred_init_extensions && Xo.info(`PostHog extensions initialized (${GB}ms)`)
        }
        _onRemoteConfig(BB) {
          if (!tO || !tO.body) return Xo.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(BB)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = BB), this._lastRemoteConfig = BB, this.compression = void 0, BB.ok) {
            var OB;
            const GB = BB.config;
            GB.supportedCompression && !this.config.disable_compression && (this.compression = zG(GB.supportedCompression, NJ.GZipJS) ? NJ.GZipJS : zG(GB.supportedCompression, NJ.Base64) ? NJ.Base64 : void 0), (null === (OB = GB.analytics) || void 0 === OB ? void 0 : OB.endpoint) && (this.analyticsDefaultEndpoint = GB.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : aO
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", BB), this._extensions.forEach((OB => {
            var GB;
            return null === (GB = OB.onRemoteConfig) || void 0 === GB ? void 0 : GB.call(OB, BB)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (BB) {
            Xo.critical("`loaded` function failed", BB)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == BG ? void 0 : BG.hostname)) {
            const BB = BG.hostname,
              OB = this.config.internal_or_test_user_hostname;
            ("string" == typeof OB ? BB === OB : OB.test(BB)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new wJ(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var BB;
          this.is_capturing() && this.config.request_batching && (null === (BB = this._requestQueue) || void 0 === BB || BB.enable())
        }
        _dom_loaded() {
          this.is_capturing() && Eo(this.__request_queue, (BB => this._send_retriable_request(BB))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var BB, OB, GB, YB, DB, QB;
          this._isPageUnloading = !0, null === (BB = this.surveys) || void 0 === BB || null === (OB = BB.handlePageUnload) || void 0 === OB || OB.call(BB), null === (GB = this.metrics) || void 0 === GB || GB.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(bO), null === (YB = this.logs) || void 0 === YB || YB.flushLogs("sendBeacon"), null === (DB = this._requestQueue) || void 0 === DB || DB.unload(), null === (QB = this._retryQueue) || void 0 === QB || QB.unload()) : this._shouldCapturePageleave() && this.capture(bO, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(BB) {
          wM(this, BB)
        }
        _send_retriable_request(BB, OB) {
          this._retryQueue ? this._retryQueue.retriableRequest(BB, OB) : this._send_request(OB ? RD(RD({}, BB), {}, {
            transport: OB
          }) : BB)
        }
        _execute_array(BB) {
          fP++;
          try {
            let OB;
            const GB = [],
              YB = [],
              DB = [];
            Eo(BB, (BB => {
              if (BB)
                if (OB = BB[0], WG(OB)) DB.push(BB);
                else if (AG(BB)) try {
                BB.call(this)
              } catch (OB) {
                Xo.error("Error executing queued PostHog call", BB, OB)
              } else WG(BB) && "alias" === OB ? GB.push(BB) : WG(BB) && -1 !== OB.indexOf("capture") && AG(this[OB]) ? DB.push(BB) : YB.push(BB)
            }));
            const QB = function(BB, OB) {
              Eo(BB, (function(BB) {
                try {
                  if (WG(BB[0])) {
                    let GB = OB;
                    co(BB, (function(BB) {
                      GB = GB[BB[0]].apply(GB, BB.slice(1))
                    }))
                  } else OB[BB[0]].apply(OB, BB.slice(1))
                } catch (OB) {
                  Xo.error("Error executing queued PostHog call", BB, OB)
                }
              }))
            };
            QB(GB, this), QB(YB, this), QB(DB, this)
          } finally {
            fP--
          }
        }
        push(OB) {
          if (fP > 0 && WG(OB) && UG(OB[0])) {
            const GB = BB.prototype[OB[0]];
            AG(GB) && GB.apply(this, OB.slice(1))
          } else this._execute_array([OB])
        }
        get _facebookClickIdChannel() {
          return {
            property: KB,
            persistenceKey: uB,
            cookieName: "_fbc",
            pattern: gP,
            register: (BB, OB) => {
              var GB;
              return null === (GB = this.persistence) || void 0 === GB ? void 0 : GB.register({
                [uB]: {
                  value: BB,
                  delivered: OB
                }
              })
            },
            unregister: () => {
              var BB;
              return null === (BB = this.persistence) || void 0 === BB ? void 0 : BB.unregister(uB)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: mB,
            persistenceKey: IB,
            cookieName: "_fbp",
            pattern: rP,
            register: (BB, OB) => {
              var GB;
              return null === (GB = this.persistence) || void 0 === GB ? void 0 : GB.register({
                [IB]: {
                  value: BB,
                  delivered: OB
                }
              })
            },
            unregister: () => {
              var BB;
              return null === (BB = this.persistence) || void 0 === BB ? void 0 : BB.unregister(IB)
            }
          }
        }
        _getPersistedMetaIdentifier(BB) {
          var OB;
          const GB = null === (OB = this.persistence) || void 0 === OB ? void 0 : OB.get_property(BB.persistenceKey);
          return UG(GB) && BB.pattern.test(GB) ? {
            value: GB,
            delivered: !1
          } : VG(GB) && UG(GB.value) && BB.pattern.test(GB.value) ? {
            value: GB.value,
            delivered: !0 === GB.delivered
          } : void 0
        }
        _storeMetaIdentifier(BB, OB, GB) {
          return OB === (null == GB ? void 0 : GB.value) ? {
            value: OB,
            pending: !GB.delivered
          } : (BB.register(OB, !1), {
            value: OB,
            pending: !0
          })
        }
        _readMetaCookie(BB) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const OB = xo(BB.cookieName);
          return UG(OB) && BB.pattern.test(OB) ? OB : void 0
        }
        _updateFacebookClickId(BB, OB, GB, YB) {
          if (!this.persistence) return;
          const DB = this._facebookClickIdChannel;
          this.persistence.refreshKey(DB.persistenceKey);
          const QB = this._getPersistedMetaIdentifier(DB);
          if (YB) return void DB.unregister();
          if (GB) return UG(OB) && gP.test(OB) ? this._storeMetaIdentifier(DB, OB, QB) : void DB.unregister();
          const oB = UG(BB) && LP.test(BB) ? BB : void 0,
            jB = this._readMetaCookie(DB);
          return jB && ((BB, OB, GB) => {
            const YB = BB.split(".");
            if (OB) return YB[3] === OB;
            if (!GB) return !0;
            const DB = GB.value.split(".");
            return YB[3] === DB[3] || Number(YB[2]) > Number(DB[2])
          })(jB, oB, QB) ? this._storeMetaIdentifier(DB, jB, QB) : oB ? (null == QB ? void 0 : QB.value.split(".")[3]) === oB ? {
            value: QB.value,
            pending: !QB.delivered
          } : this._storeMetaIdentifier(DB, `fb.1.${Date.now()}.${oB}`, QB) : QB ? {
            value: QB.value,
            pending: !QB.delivered
          } : void 0
        }
        _updateFacebookBrowserId(BB, OB, GB) {
          if (!this.persistence) return;
          const YB = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(YB.persistenceKey);
          const DB = this._getPersistedMetaIdentifier(YB);
          if (GB) return void YB.unregister();
          if (OB) return UG(BB) && rP.test(BB) ? this._storeMetaIdentifier(YB, BB, DB) : void YB.unregister();
          const QB = this._readMetaCookie(YB);
          return QB ? this._storeMetaIdentifier(YB, QB, DB) : DB ? {
            value: DB.value,
            pending: !DB.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(BB, OB) {
          if (!this.persistence) return;
          this.persistence.refreshKey(BB.persistenceKey);
          const GB = this._getPersistedMetaIdentifier(BB);
          (null == GB ? void 0 : GB.value) !== OB || GB.delivered || BB.register(OB, !0)
        }
        capture(BB, OB, GB) {
          var YB, DB;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void Xo.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (nG(BB) || !UG(BB)) return void Xo.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === BB && this._inCookielessMode()) return;
          const QB = !this.config.opt_out_useragent_filter && this._is_bot();
          if (QB && !this.config.__preview_capture_bot_pageviews) return;
          const oB = (null == GB ? void 0 : GB.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == oB ? void 0 : oB.isRateLimited) return void Xo.critical("This capture call is ignored due to client rate limiting.");
          let jB;
          (null == OB ? void 0 : OB.$current_url) && !UG(null == OB ? void 0 : OB.$current_url) && (Xo.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == OB || delete OB.$current_url), "$exception" !== BB || (null == GB ? void 0 : GB._originatedFromCaptureException) || Xo.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (jB = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const yB = new Date,
            JB = (null == GB ? void 0 : GB.timestamp) || yB,
            MB = yD(null == GB ? void 0 : GB.uuid, Dj);
          let PB = {
            uuid: MB,
            event: BB,
            properties: this.calculateEventProperties(BB, OB || {}, JB, MB)
          };
          "$pageview" === BB && this.config.__preview_capture_bot_pageviews && QB && (PB.event = "$bot_pageview", PB.properties.$browser_type = "bot"), oB && (PB.properties.$lib_rate_limit_remaining_tokens = oB.remainingTokens);
          const zB = "$feature_flag_called" === BB && !1 === PB.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == GB ? void 0 : GB.$set) && !zB && (PB.$set = null == GB ? void 0 : GB.$set);
          const lB = VG(null == OB ? void 0 : OB.$set) ? OB.$set : void 0,
            pB = WG(null == OB ? void 0 : OB.$unset) ? OB.$unset : [],
            qB = (null == GB ? void 0 : GB.$unset) || [],
            ZB = BB => {
              var OB;
              const YB = !!(null == GB ? void 0 : GB.$set) && BB in GB.$set;
              return {
                hasProvided: YB || !!lB && BB in lB,
                provided: YB ? null == GB || null === (OB = GB.$set) || void 0 === OB ? void 0 : OB[BB] : null == lB ? void 0 : lB[BB],
                unset: -1 !== pB.indexOf(BB) || -1 !== qB.indexOf(BB)
              }
            },
            NB = ZB(KB),
            RB = ZB(mB),
            WB = [{
              channel: this._facebookClickIdChannel,
              hasProvided: NB.hasProvided,
              update: this._updateFacebookClickId(null == jB ? void 0 : jB.fbclid, NB.provided, NB.hasProvided, NB.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: RB.hasProvided,
              update: this._updateFacebookBrowserId(RB.provided, RB.hasProvided, RB.unset)
            }];
          for (const {
              channel: KB,
              hasProvided: mB,
              update: IB
            }
            of WB) IB && !0 === PB.properties.$process_person_profile && IB.pending && !mB && !zB && (PB.$set = RD({
            [KB.property]: IB.value
          }, PB.$set));
          const AB = null == GB ? void 0 : GB.$unset;
          AB && (PB.$unset = AB);
          const VB = zB ? void 0 : this._calculate_set_once_properties(null == GB ? void 0 : GB.$set_once, BB !== HO, BB === CO);
          if (VB && (PB.$set_once = VB), (null == GB ? void 0 : GB._noTruncate) || (SB = this.config.properties_string_max_length, PB = function(BB, OB) {
              const GB = new Set;
              return function BB(YB, DB) {
                if (YB !== Object(YB)) return OB ? OB(YB) : YB;
                if (GB.has(YB)) return;
                let QB;
                if (GB.add(YB), WG(YB)) QB = [], Eo(YB, (OB => {
                  QB.push(BB(OB))
                }));
                else {
                  const OB = {};
                  co(gG(YB) ? bo(YB) : YB, ((YB, DB) => {
                    GB.has(YB) || (OB[DB] = BB(YB, DB))
                  })), QB = OB
                }
                return QB
              }(BB)
            }(PB, (BB => UG(BB) ? BB.slice(0, SB) : BB))), PB.timestamp = JB, nG(null == GB ? void 0 : GB.timestamp) || (PB.properties.$event_time_override_provided = !0, PB.properties.$event_time_override_system_time = yB), zB && (PB.properties = function(BB) {
              let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const GB = {},
                YB = OB => {
                  void 0 !== BB[OB] && (GB[OB] = BB[OB])
                };
              return qQ.forEach(YB), OB.forEach(YB), GB
            }(PB.properties, XP)), BB === UJ || BB === fJ) {
            const GB = null == OB ? void 0 : OB[kJ],
              YB = null == OB ? void 0 : OB[dJ];
            zP({
              id: GB,
              current_iteration: YB
            }), PB.$set = RD(RD({}, PB.$set), {}, {
              [tM({
                id: GB,
                current_iteration: YB
              }, BB === fJ ? "responded" : "dismissed")]: !0
            })
          } else BB === nJ && (PB.$set = RD(RD({}, PB.$set), {}, {
            [KJ]: (new Date).toISOString()
          }));
          var SB;
          if (BB === FJ) {
            const BB = null == OB ? void 0 : OB[LJ];
            BB && (PB.$set = RD(RD({}, PB.$set), {}, {
              [`${iJ}/${BB}`]: (new Date).toISOString()
            }))
          }
          const nB = RD(RD({}, PB.properties.$set), PB.$set);
          if (SG(nB) || this.setPersonPropertiesForFlags(nB), !dG(this.config.before_send)) {
            const BB = this._runBeforeSend(PB);
            if (!BB) return;
            PB = BB, PB.uuid = yD(PB.uuid, Dj)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && iP(BB) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const UB = WB.filter((BB => {
            let {
              channel: OB,
              update: GB
            } = BB;
            var YB, DB, QB;
            const oB = null !== (YB = null === (DB = PB.$set) || void 0 === DB ? void 0 : DB[OB.property]) && void 0 !== YB ? YB : VG(null === (QB = PB.properties) || void 0 === QB ? void 0 : QB.$set) ? PB.properties.$set[OB.property] : void 0;
            return (null == GB ? void 0 : GB.pending) && oB === GB.value
          }));
          this._internalEventEmitter.emit("eventCaptured", PB);
          const fB = null !== (YB = null == GB ? void 0 : GB._url) && void 0 !== YB ? YB : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            kB = "recordings" === (null == GB ? void 0 : GB._batchKey) || /\/s\/(?:\?|$)/.test(fB),
            dB = RD(RD(RD({
              method: "POST",
              url: fB,
              data: PB,
              compression: "best-available",
              preferSyncCompression: null == GB ? void 0 : GB.send_instantly,
              timestampMode: kB ? "body" : "capture-body",
              batchKey: null == GB ? void 0 : GB._batchKey
            }, kB && (null === (DB = PB.properties) || void 0 === DB ? void 0 : DB.$session_id) ? {
              batchGroup: PB.properties.$session_id + (PB.properties.$window_id ? `-${PB.properties.$window_id}` : "")
            } : {}), (null == GB ? void 0 : GB.transport) ? {
              transport: GB.transport
            } : {}), UB.length ? {
              fireCallbackOnDrop: !0,
              callback: BB => {
                if (BB.statusCode >= 200 && 300 > BB.statusCode)
                  for (const {
                      channel: OB,
                      update: GB
                    }
                    of UB) this._markMetaIdentifierDelivered(OB, GB.value)
              }
            } : {});
          if (!this.config.request_batching || GB && !(null == GB ? void 0 : GB._batchKey) || (null == GB ? void 0 : GB.send_instantly)) {
            var uB;
            let BB;
            !dB.transport && !dB.callback && SG(null !== (uB = this.config.request_headers) && void 0 !== uB ? uB : {}) && this._isPageUnloading && (BB = "sendBeacon"), this._send_retriable_request(dB, BB)
          } else this._requestQueue.enqueue(dB);
          return PB
        }
        _addCaptureHook(BB) {
          return this.on("eventCaptured", (OB => BB(OB.event, OB)))
        }
        getExtension(BB) {
          var OB;
          return null === (OB = this._browserClientAdapter) || void 0 === OB ? void 0 : OB.getExtension(BB)
        }
        _getBrowserClientAdapter() {
          var BB;
          return null !== (BB = this._browserClientAdapter) && void 0 !== BB ? BB : this._browserClientAdapter = new nP(this)
        }
        _registerExtensionEventProperties(BB) {
          this._extensionEventPropertyProducers.push(BB);
          let OB = !0;
          return () => {
            if (!OB) return;
            OB = !1;
            const GB = this._extensionEventPropertyProducers.indexOf(BB); - 1 !== GB && this._extensionEventPropertyProducers.splice(GB, 1)
          }
        }
        _processCookieIdentityChange() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var OB, GB, YB;
          return !!(null === (OB = this.persistence) || void 0 === OB ? void 0 : OB.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (YB = this.sessionPersistence) || void 0 === YB || YB.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (GB = this.featureFlags) || void 0 === GB || GB.reset(), BB && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(BB, OB, GB, YB, QB) {
          if (GB = GB || new Date, !this.persistence || !this.sessionPersistence) return OB;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const oB = QB ? void 0 : this.persistence.remove_event_timer(BB);
          let jB = RD({}, OB);
          if (jB.token = this.config.token, jB.$config_defaults = this.config.defaults, this._inCookielessMode() && (jB[kO] = !0), "$snapshot" === BB) {
            const BB = RD(RD({}, this.persistence.properties()), this.sessionPersistence.properties());
            return jB.distinct_id = BB.distinct_id, (!UG(jB.distinct_id) && !KG(jB.distinct_id) || fG(jB.distinct_id)) && Xo.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), jB
          }
          const yB = function(BB, OB, GB) {
            let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var QB, oB, jB, yB;
            if (!QG) return {};
            const JB = BB ? [...ay, ...OB || []] : [],
              [MB, PB] = vY(QG),
              [zB, lB] = function(BB) {
                for (let OB = 0; BD.length > OB; OB++) {
                  const [GB, YB, DB] = BD[OB], QB = BB.match(GB);
                  if (QB) {
                    const OB = DB && BB.match(DB) || QB;
                    return [YB, (null == OB ? void 0 : OB[1]) || ""]
                  }
                }
                return ["", ""]
              }(QG),
              pB = function() {
                const BB = "u" > typeof navigator ? navigator : void 0;
                return (null == BB ? void 0 : BB.brave) ? {
                  brave: !0
                } : {}
              }(),
              qB = {};
            nG(GB) || (qB.detectGoogleSearchApp = GB);
            const ZB = {},
              NB = null === (QB = navigator) || void 0 === QB || null === (QB = QB.userAgentData) || void 0 === QB ? void 0 : QB.platform,
              RB = null === (oB = navigator) || void 0 === oB ? void 0 : oB.maxTouchPoints,
              WB = null == vO || null === (jB = vO.screen) || void 0 === jB ? void 0 : jB.width,
              AB = null == vO || null === (yB = vO.screen) || void 0 === yB ? void 0 : yB.height,
              VB = null == vO ? void 0 : vO.devicePixelRatio;
            nG(NB) || (ZB.userAgentDataPlatform = NB), nG(RB) || (ZB.maxTouchPoints = RB), nG(WB) || (ZB.screenWidth = WB), nG(AB) || (ZB.screenHeight = AB), nG(VB) || (ZB.devicePixelRatio = VB);
            const SB = ho(To({
              $os: MB,
              $os_version: PB,
              $browser: TY(QG, navigator.vendor, pB, qB),
              $webview_app: zB,
              $webview_app_version: lB,
              $device: sY(QG),
              $device_type: xY(QG, ZB),
              $timezone: iy(),
              $timezone_offset: YJ()
            }), {
              $current_url: cy(YB ? MD(null == BG ? void 0 : BG.href) : null == BG ? void 0 : BG.href, JB, Ty),
              $host: null == BG ? void 0 : BG.host,
              $pathname: null == BG ? void 0 : BG.pathname,
              $raw_user_agent: QG.length > 1e3 ? QG.substring(0, 997) + "..." : QG,
              $browser_version: CY(QG, navigator.vendor, pB, qB),
              $browser_language: sy(),
              $browser_language_prefix: xy(),
              $screen_height: null == vO ? void 0 : vO.screen.height,
              $screen_width: null == vO ? void 0 : vO.screen.width,
              $viewport_height: null == vO ? void 0 : vO.innerHeight,
              $viewport_width: null == vO ? void 0 : vO.innerWidth,
              $lib: DB.LIB_NAME,
              $lib_version: DB.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return DB.SDK_DIST_CHANNEL && (SB.$sdk_dist_channel = DB.SDK_DIST_CHANNEL), SB
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: BB,
              windowId: OB
            } = this.sessionManager.checkAndGetSessionAndWindowId(QB, GB.getTime(), !0);
            jB.$session_id = BB, jB.$window_id = OB
          }
          this.sessionPropsManager && ho(jB, this.sessionPropsManager.getSessionProps());
          try {
            var JB;
            if (this.sessionRecording) {
              const OB = this.sessionRecording.sdkDebugProperties,
                GB = !this._replayDebugPropertiesPaused && iP(BB);
              for (const BB in OB)(GB || zG(IP, BB)) && (jB[BB] = OB[BB])
            }
            jB.$sdk_debug_retry_queue_size = null === (JB = this._retryQueue) || void 0 === JB ? void 0 : JB.length
          } catch (BB) {
            jB.$sdk_debug_error_capturing_properties = String(BB)
          }
          let MB;
          if (this.requestRouter.region === oP && (jB.$lib_custom_api_host = this.config.api_host), MB = "$pageview" !== BB || QB ? "$pageleave" !== BB || QB ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(GB) : this.pageViewManager.doPageView(GB, YB), jB = ho(jB, MB), "$pageview" === BB && tO && (jB.title = tO.title), !nG(oB)) {
            const BB = GB.getTime() - oB;
            jB.$duration = parseFloat((BB / 1e3).toFixed(3))
          }
          QG && this.config.opt_out_useragent_filter && (jB.$browser_type = this._is_bot() ? "bot" : "browser");
          const PB = this.persistence.properties(),
            zB = this.sessionPersistence.properties(),
            lB = jB.$groups,
            pB = PB.$groups;
          VG(lB) && !SG(lB) && (jB.$groups = RD(RD({}, VG(pB) ? pB : {}), lB)), co(["$referrer", "$referring_domain"], (BB => {
            BB in PB && delete zB[BB]
          }));
          const qB = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const DB of this._extensionEventPropertyProducers.slice()) try {
              ho(qB, DB())
            } catch (BB) {
              Xo.error("Failed to produce browser extension event properties", BB)
            }
          jB = ho({}, yB, PB, zB, RD(RD({}, qB), jB)), jB.$is_identified = this._isIdentified(), WG(this.config.property_denylist) ? co(this.config.property_denylist, (function(BB) {
            delete jB[BB]
          })) : Xo.error(mP + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const ZB = this.config.sanitize_properties;
          ZB && (Xo.error(uP), jB = ZB(jB, BB));
          const NB = this._hasPersonProcessing();
          return jB.$process_person_profile = NB, NB && !QB && this._requirePersonProcessing("_calculate_event_properties"), jB
        }
        _calculate_set_once_properties(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var YB;
          if (!this.persistence || !this._hasPersonProcessing()) return BB;
          if (this._personProcessingSetOncePropertiesSent && !GB) return BB;
          const DB = this.persistence.get_initial_props(),
            QB = null === (YB = this.sessionPropsManager) || void 0 === YB ? void 0 : YB.getSetOnceProps();
          let oB = ho({}, DB, QB || {}, BB || {});
          const jB = this.config.sanitize_properties;
          return jB && (Xo.error(uP), oB = jB(oB, "$set_once")), OB && (this._personProcessingSetOncePropertiesSent = !0), SG(oB) ? void 0 : oB
        }
        register(BB, OB) {
          var GB;
          null === (GB = this.persistence) || void 0 === GB || GB.register(BB, OB)
        }
        register_once(BB, OB, GB) {
          var YB;
          null === (YB = this.persistence) || void 0 === YB || YB.register_once(BB, OB, GB)
        }
        register_for_session(BB) {
          var OB, GB;
          null === (OB = this.persistence) || void 0 === OB || OB.syncCookieProperties(), this._processCookieIdentityChange(), null === (GB = this.sessionPersistence) || void 0 === GB || GB.register(BB), Object.keys(BB).forEach((BB => this._sessionRegisteredPropKeys.add(BB))), this._persistSessionRegisteredPropKeys()
        }
        unregister(BB) {
          var OB;
          null === (OB = this.persistence) || void 0 === OB || OB.unregister(BB)
        }
        unregister_for_session(BB) {
          var OB;
          null === (OB = this.sessionPersistence) || void 0 === OB || OB.unregister(BB), this._sessionRegisteredPropKeys.delete(BB), this._persistSessionRegisteredPropKeys()
        }
        _register_single(BB, OB) {
          this.register({
            [BB]: OB
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((BB => {
            var OB;
            null === (OB = this.sessionPersistence) || void 0 === OB || OB.unregister(BB)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var BB;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (BB = this.sessionPersistence) || void 0 === BB ? void 0 : BB._disabled) || !fj._is_supported()) return void fj._remove(this._sessionRegisteredPropertiesStorageKey);
          const OB = [];
          this._sessionRegisteredPropKeys.forEach((BB => OB.push(BB))), OB.length > 0 ? fj._set(this._sessionRegisteredPropertiesStorageKey, OB) : fj._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(BB, OB) {
          var GB;
          return null === (GB = this.featureFlags) || void 0 === GB ? void 0 : GB.getFeatureFlag(BB, OB)
        }
        getFeatureFlagPayload(BB) {
          var OB;
          return null === (OB = this.featureFlags) || void 0 === OB ? void 0 : OB.getFeatureFlagPayload(BB)
        }
        getFeatureFlagResult(BB, OB) {
          var GB;
          return null === (GB = this.featureFlags) || void 0 === GB ? void 0 : GB.getFeatureFlagResult(BB, OB)
        }
        getAllFeatureFlags() {
          var BB, OB;
          return null !== (BB = null === (OB = this.featureFlags) || void 0 === OB ? void 0 : OB.getAllFeatureFlags()) && void 0 !== BB ? BB : []
        }
        isFeatureEnabled(BB, OB) {
          var GB, YB;
          return null !== (GB = null === (YB = this.featureFlags) || void 0 === YB ? void 0 : YB.isFeatureEnabled(BB, OB)) && void 0 !== GB ? GB : null == OB ? void 0 : OB.defaultValue
        }
        reloadFeatureFlags() {
          var BB;
          null === (BB = this.featureFlags) || void 0 === BB || BB.reloadFeatureFlags()
        }
        updateFlags(BB, OB, GB) {
          var YB;
          null === (YB = this.featureFlags) || void 0 === YB || YB.updateFlags(BB, OB, GB)
        }
        updateEarlyAccessFeatureEnrollment(BB, OB, GB) {
          var YB;
          null === (YB = this.featureFlags) || void 0 === YB || YB.updateEarlyAccessFeatureEnrollment(BB, OB, GB)
        }
        getEarlyAccessFeatures(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0;
          var YB;
          return null === (YB = this.featureFlags) || void 0 === YB ? void 0 : YB.getEarlyAccessFeatures(BB, OB, GB)
        }
        on(BB, OB) {
          return this._internalEventEmitter.on(BB, OB)
        }
        onFeatureFlags(BB) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(BB) : (BB([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(BB) {
          return this.surveys ? this.surveys.onSurveysLoaded(BB) : (BB([], {
            isLoaded: !1,
            error: KP
          }), () => {})
        }
        onSessionId(BB) {
          var OB, GB;
          return null !== (OB = null === (GB = this.sessionManager) || void 0 === GB ? void 0 : GB.onSessionId(BB)) && void 0 !== OB ? OB : () => {}
        }
        getSurveys(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(BB, OB) : BB([], {
            isLoaded: !1,
            error: KP
          })
        }
        getActiveMatchingSurveys(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(BB, OB) : BB([], {
            isLoaded: !1,
            error: KP
          })
        }
        onActiveMatchingSurveysChanged(BB) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(BB) : (BB([], {
            isLoaded: !1,
            error: KP
          }), () => {})
        }
        renderSurvey(BB, OB) {
          var GB;
          null === (GB = this.surveys) || void 0 === GB || GB.renderSurvey(BB, OB)
        }
        displaySurvey(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pP;
          var GB;
          null === (GB = this.surveys) || void 0 === GB || GB.displaySurvey(BB, OB)
        }
        cancelPendingSurvey(BB) {
          var OB;
          null === (OB = this.surveys) || void 0 === OB || OB.cancelPendingSurvey(BB)
        }
        canRenderSurvey(BB) {
          var OB, GB;
          return null !== (OB = null === (GB = this.surveys) || void 0 === GB ? void 0 : GB.canRenderSurvey(BB)) && void 0 !== OB ? OB : {
            visible: !1,
            disabledReason: KP
          }
        }
        canRenderSurveyAsync(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var GB, YB;
          return null !== (GB = null === (YB = this.surveys) || void 0 === YB ? void 0 : YB.canRenderSurveyAsync(BB, OB)) && void 0 !== GB ? GB : Promise.resolve({
            visible: !1,
            disabledReason: KP
          })
        }
        _validateIdentifyId(BB) {
          return !BB || fG(BB) ? (Xo.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === BB ? (Xo.critical(`The string "${BB}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(BB.toLowerCase()) && !["undefined", "null"].includes(BB.toLowerCase()) || (Xo.critical(`The string "${BB}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(BB, OB, GB) {
          if (!this.__loaded || !this.persistence) return Xo.uninitializedWarning("posthog.identify");
          if (KG(BB) && (BB = BB.toString(), Xo.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(BB)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const YB = this.get_distinct_id(),
            DB = this.persistence.syncCookieProperties() && this.get_distinct_id() !== YB,
            QB = this._processCookieIdentityChange(!1),
            oB = this.persistence._beginCookieSyncSuppression();
          let jB = !1;
          try {
            const YB = this.get_distinct_id();
            this.register({
              $user_id: BB
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: YB
            }, ""), BB !== YB && BB !== this.get_property("__alias") && (this.unregister(kB), this.register({
              distinct_id: BB
            }));
            const oB = (this.persistence.get_property("$user_state") || "anonymous") === cO,
              JB = BB !== YB,
              MB = !JB && oB;
            if (JB && oB) {
              var yB;
              const DB = this.config.reuseAnonymousId ? {
                distinct_id: BB
              } : {
                distinct_id: BB,
                $anon_distinct_id: YB
              };
              this.persistence.set_property(RO, hO), this.setPersonPropertiesForFlags({
                $set: OB || {},
                $set_once: GB || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", DB, {
                $set: OB || {},
                $set_once: GB || {}
              }) && (this._cachedPersonProperties = QP(BB, OB, GB)), null === (yB = this.featureFlags) || void 0 === yB || yB.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : YB)
            } else if (MB) {
              this.persistence.set_property(RO, hO);
              const YB = OB || {},
                DB = GB || {};
              this.setPersonPropertiesForFlags({
                $set: YB,
                $set_once: DB
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: YB,
                $set_once: DB
              }) && (this._cachedPersonProperties = QP(BB, OB, GB))
            } else(OB || GB) && this.setPersonProperties(OB, GB);
            JB || DB || QB ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(ZB)) : MB && (OB || GB) && this.reloadFeatureFlags(), jB = !0
          } finally {
            oB && this.persistence._endCookieSyncSuppression(jB)
          }
        }
        setPersonProperties(BB, OB) {
          if (!BB && !OB) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const GB = QP(this.get_distinct_id(), BB, OB);
          this._cachedPersonProperties !== GB ? (this.setPersonPropertiesForFlags({
            $set: BB || {},
            $set_once: OB || {}
          }, !0), this.capture("$set", {
            $set: BB || {},
            $set_once: OB || {}
          }) && (this._cachedPersonProperties = GB)) : Xo.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(BB) {
          var OB;
          const GB = (WG(BB) ? BB : [BB]).filter((BB => UG(BB) && BB.length > 0));
          0 !== GB.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (OB = this.featureFlags) || void 0 === OB || OB.unsetPersonPropertiesForFlags(GB, !0), this.capture("$set", {
            $unset: GB
          }), this._cachedPersonProperties = null)
        }
        group(BB, OB, GB) {
          var YB;
          if (!BB || !OB) return void Xo.error("posthog.group requires a group type and group key");
          null === (YB = this.persistence) || void 0 === YB || YB.syncCookieProperties(), this._processCookieIdentityChange();
          const DB = this.getGroups(),
            QB = DB[BB] !== OB;
          if (QB && this.resetGroupPropertiesForFlags(BB), this.register({
              $groups: RD(RD({}, DB), {}, {
                [BB]: OB
              })
            }), (QB || GB) && this._hasPersonProcessing()) {
            const YB = {
              $group_type: BB,
              $group_key: OB
            };
            GB && (YB.$group_set = GB), this.capture(HO, YB)
          }
          GB && this.setGroupPropertiesForFlags({
            [BB]: GB
          }), QB && !GB && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var GB;
          null === (GB = this.featureFlags) || void 0 === GB || GB.setPersonPropertiesForFlags(BB, OB)
        }
        resetPersonPropertiesForFlags() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var OB;
          null === (OB = this.featureFlags) || void 0 === OB || OB.resetPersonPropertiesForFlags(BB)
        }
        setGroupPropertiesForFlags(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var GB;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (GB = this.featureFlags) || void 0 === GB || GB.setGroupPropertiesForFlags(BB, OB))
        }
        resetGroupPropertiesForFlags(BB) {
          var OB;
          null === (OB = this.featureFlags) || void 0 === OB || OB.resetGroupPropertiesForFlags(BB)
        }
        reset(BB) {
          const OB = mG(BB) ? BB : null == BB ? void 0 : BB.resetDeviceID,
            GB = mG(BB) || null == BB ? void 0 : BB.bootstrap;
          this._reset(OB, !1, GB)
        }
        _reset(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0;
          var YB, DB, QB, oB, jB, yB;
          if (Xo.info("reset"), !this.__loaded) return Xo.uninitializedWarning("posthog.reset");
          const JB = null == GB ? void 0 : GB.sessionID;
          this.config.bootstrap = GB || (null === (YB = this._originalUserConfig) || void 0 === YB ? void 0 : YB.bootstrap) || {}, null === (DB = this.featureFlags) || void 0 === DB || null === (QB = DB.updateConfig) || void 0 === QB || QB.call(DB, this.config, this._shouldDisableFlags());
          const MB = this.get_property(UB),
            PB = this.get_property(fB),
            zB = this.get_property(eB);
          null === (oB = this.sessionRecording) || void 0 === oB || oB.flushBeforeIdentityReset();
          const lB = this.is_capturing();
          OB || this.consent.reset(), OB || !lB || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const pB = null === (jB = this.persistence) || void 0 === jB || null === (yB = jB._beginCookieSyncSuppression) || void 0 === yB ? void 0 : yB.call(jB),
            qB = this._isConsentTransition;
          this._isConsentTransition = qB || OB;
          let ZB = !1;
          try {
            var NB, RB, WB, AB, VB, SB, nB, kB, dB, KB, uB, mB, IB;
            if (null === (NB = this.persistence) || void 0 === NB || NB.clear(), null === (RB = this.sessionPersistence) || void 0 === RB || RB.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), nG(zB) || null === (KB = this.persistence) || void 0 === KB || KB.register({
                $session_recording_remote_config: zB
              }), null === (WB = this.surveys) || void 0 === WB || WB.reset(), null === (AB = this.featureFlags) || void 0 === AB || AB.reset(), null === (VB = this.conversations) || void 0 === VB || VB.reset(), null === (SB = this.logs) || void 0 === SB || SB.reset(), null === (nB = this.metrics) || void 0 === nB || nB.reset(), null === (kB = this.persistence) || void 0 === kB || kB.set_property("$user_state", "anonymous"), null === (dB = this.sessionManager) || void 0 === dB || dB.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: fO,
              $device_id: null
            }, "");
            else {
              const OB = this.config.get_device_id(Dj());
              this.register_once({
                distinct_id: OB,
                $device_id: BB ? OB : MB
              }, ""), BB || nG(PB) || this.register({
                [fB]: PB
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), GB && (GB.distinctID && !this._inCookielessMode() && (null === (IB = this.persistence) || void 0 === IB || IB.set_property("$user_state", GB.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: GB.distinctID
              })), null === (uB = this.featureFlags) || void 0 === uB || uB.initialize(), !dG(JB) && !(null === (mB = this.sessionManager) || void 0 === mB ? void 0 : mB.setBootstrapSessionId(JB, !0)))) {
              const BB = RD({}, GB);
              delete BB.sessionID, this.config.bootstrap = BB
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, ZB = !0
          } finally {
            var FB, iB;
            this._isConsentTransition = qB, pB && (null === (FB = this.persistence) || void 0 === FB || null === (iB = FB._endCookieSyncSuppression) || void 0 === iB || iB.call(FB, ZB))
          }
          this.reloadFeatureFlags()
        }
        shutdown(BB) {
          var OB = this;
          return aG((function*() {
            if (!OB.__loaded) return void Xo.uninitializedWarning("posthog.shutdown");
            OB._isShutdown = !0, clearTimeout(OB._extensionInitTimeout), OB._extensionInitTimeout = void 0;
            const BB = OB._featureFlagsReloadingUnsubscribe;
            OB._featureFlagsReloadingUnsubscribe = void 0;
            for (const GB of [() => {
                var BB;
                return null === (BB = OB.sessionRecording) || void 0 === BB ? void 0 : BB.dispose()
              }, () => {
                var BB;
                return null === (BB = OB.logs) || void 0 === BB ? void 0 : BB.flushLogs("sendBeacon")
              }, () => {
                var BB;
                return null === (BB = OB.metrics) || void 0 === BB ? void 0 : BB.flush("sendBeacon")
              }, () => {
                var BB;
                return null === (BB = OB.metrics) || void 0 === BB ? void 0 : BB.dispose()
              }, () => {
                var BB;
                return null === (BB = OB.logs) || void 0 === BB ? void 0 : BB.dispose()
              }, () => {
                var BB;
                return null === (BB = OB.surveys) || void 0 === BB ? void 0 : BB.dispose()
              }, () => {
                var BB;
                return null === (BB = OB.autocapture) || void 0 === BB ? void 0 : BB.dispose()
              }, () => null == BB ? void 0 : BB(), () => {
                var BB;
                return null === (BB = OB._requestQueue) || void 0 === BB ? void 0 : BB.unload()
              }, () => {
                var BB;
                return null === (BB = OB._retryQueue) || void 0 === BB ? void 0 : BB.unload()
              }, () => {
                var BB;
                return null === (BB = OB.featureFlags) || void 0 === BB ? void 0 : BB.destroy()
              }, () => {
                var BB;
                return null === (BB = OB.persistence) || void 0 === BB ? void 0 : BB.destroy()
              }, () => {
                var BB;
                return null === (BB = OB.sessionPersistence) || void 0 === BB ? void 0 : BB.destroy()
              }]) try {
              const BB = GB();
              BB && AG(BB.then) && BB.then(void 0, (BB => {
                Xo.error("Error during shutdown", BB)
              }))
            } catch (BB) {
              Xo.error("Error during shutdown", BB)
            }
          }))()
        }
        setIdentity(BB, OB) {
          var GB;
          delete this.config.identity_claims, this.config.identity_distinct_id = BB, this.config.identity_hash = OB, this.alias(BB), null === (GB = this.conversations) || void 0 === GB || GB._onIdentityChanged()
        }
        clearIdentity() {
          var BB;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (BB = this.conversations) || void 0 === BB || BB._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var BB, OB;
          return null !== (BB = null === (OB = this.sessionManager) || void 0 === OB ? void 0 : OB.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== BB ? BB : ""
        }
        get_session_replay_url(BB) {
          if (!this.sessionManager) return "";
          const {
            sessionId: OB,
            sessionStartTimestamp: GB
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let YB = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${OB}`);
          if ((null == BB ? void 0 : BB.withTimestamp) && GB) {
            var DB;
            const OB = null !== (DB = BB.timestampLookBack) && void 0 !== DB ? DB : 10;
            if (!GB) return YB;
            YB += `?t=${Math.max(Math.floor(((new Date).getTime()-GB)/1e3)-OB,0)}`
          }
          return YB
        }
        alias(BB, OB) {
          return BB === this.get_property("$people_distinct_id") ? (Xo.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (nG(OB) && (OB = this.get_distinct_id()), BB !== OB ? (this._register_single(kB, BB), this.capture("$create_alias", {
            alias: BB,
            distinct_id: OB
          })) : (Xo.warn("alias matches current distinct_id - skipping api call."), this.identify(BB), -1)) : void 0
        }
        set_config(BB) {
          const OB = RD({}, this.config);
          if (VG(BB)) {
            var GB, YB, DB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB;
            ho(this.config, aP(BB));
            const VB = this._is_persistence_disabled();
            if (this.persistence) {
              const BB = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var NB, RB;
              if (BB && this.sessionPersistence !== this.persistence && (null === (NB = this.sessionPersistence) || void 0 === NB || NB.remove(), null === (RB = this.sessionPersistence) || void 0 === RB || RB.destroy()), this.persistence.update_config(this.config, OB, VB), BB) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new ZJ(RD(RD({}, this.config), {}, {
                persistence: "sessionStorage"
              }), VB, !1);
              else {
                var WB;
                null === (WB = this.sessionPersistence) || void 0 === WB || WB.update_config(RD(RD({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), RD(RD({}, OB), {}, {
                  persistence: "sessionStorage"
                }), VB)
              }
            }
            const SB = this._checkLocalStorageForDebug(this.config.debug);
            var AB;
            mG(SB) && (this.config.debug = SB), mG(this.config.debug) && (this.config.debug ? (QB.DEBUG = !0, Pj._is_supported() && Pj._set("ph_debug", !0), Xo.info("set_config", {
              config: BB,
              oldConfig: OB,
              newConfig: RD({}, this.config)
            })) : (QB.DEBUG = !1, Pj._is_supported() && Pj._remove("ph_debug"))), null === (GB = this.featureFlags) || void 0 === GB || null === (YB = GB.updateConfig) || void 0 === YB || YB.call(GB, this.config, this._shouldDisableFlags()), null === (DB = this.exceptionObserver) || void 0 === DB || DB.onConfigChange(), null === (oB = this.exceptions) || void 0 === oB || oB.onConfigChange(), null === (jB = this.metrics) || void 0 === jB || jB.onConfigChange(), null === (yB = this.webMCP) || void 0 === yB || yB.startIfEnabled(), null === (JB = this.sessionRecording) || void 0 === JB || JB.startIfEnabledOrStop(), null === (MB = this.tracingHeaders) || void 0 === MB || MB.startIfEnabledOrStop(), null === (PB = this.autocapture) || void 0 === PB || PB.startIfEnabled(), null === (zB = this.heatmaps) || void 0 === zB || zB.startIfEnabled(), ("capture_pageview" in BB || "disable_capture_url_hashes" in BB) && (null === (AB = this.historyAutocapture) || void 0 === AB || AB.startIfEnabledOrStop()), null === (lB = this.exceptionObserver) || void 0 === lB || lB.startIfEnabledOrStop(), null === (pB = this.deadClicksAutocapture) || void 0 === pB || pB.startIfEnabledOrStop(), null === (qB = this.surveys) || void 0 === qB || qB.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (ZB = this.externalIntegrations) || void 0 === ZB || ZB.startIfEnabledOrStop(), !OB.segment && this.config.segment && this.persistence && Uy(this, kP, !1)
          }
        }
        _overrideSDKInfo(BB, OB) {
          QB.LIB_NAME = BB, QB.LIB_VERSION = OB
        }
        startSessionRecording(BB) {
          const OB = !0 === BB,
            GB = {
              sampling: OB || !!(null == BB ? void 0 : BB.sampling),
              linked_flag: OB || !!(null == BB ? void 0 : BB.linked_flag),
              url_trigger: OB || !!(null == BB ? void 0 : BB.url_trigger),
              event_trigger: OB || !!(null == BB ? void 0 : BB.event_trigger)
            };
          var YB, DB, QB, oB, jB;
          Object.values(GB).some(Boolean) && (null === (YB = this.sessionManager) || void 0 === YB || YB.checkAndGetSessionAndWindowId(), GB.sampling && (null === (DB = this.sessionRecording) || void 0 === DB || DB.overrideSampling()), GB.linked_flag && (null === (QB = this.sessionRecording) || void 0 === QB || QB.overrideLinkedFlag()), GB.url_trigger && (null === (oB = this.sessionRecording) || void 0 === oB || oB.overrideTrigger("url")), GB.event_trigger && (null === (jB = this.sessionRecording) || void 0 === jB || jB.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var BB;
          return !!(null === (BB = this.sessionRecording) || void 0 === BB ? void 0 : BB.started)
        }
        captureException(BB, OB) {
          try {
            if (!this.exceptions) return;
            const GB = this.exceptions.buildProperties(BB, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(RD(RD({}, GB), OB))
          } catch (BB) {
            return
          }
        }
        addExceptionStep(BB, OB) {
          var GB;
          null === (GB = this.exceptions) || void 0 === GB || GB.addExceptionStep(BB, OB)
        }
        captureLog(BB) {
          var OB;
          null === (OB = this.logs) || void 0 === OB || OB.captureLog(BB)
        }
        get logger() {
          var OB, GB;
          return null !== (OB = null === (GB = this.logs) || void 0 === GB ? void 0 : GB.logger) && void 0 !== OB ? OB : BB._noopLogger
        }
        startExceptionAutocapture(BB) {
          this.set_config({
            capture_exceptions: null == BB || BB
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(BB) {
          var OB, GB;
          return null !== (OB = null === (GB = this.toolbar) || void 0 === GB ? void 0 : GB.loadToolbar(BB)) && void 0 !== OB && OB
        }
        get_property(BB) {
          var OB;
          return null === (OB = this.persistence) || void 0 === OB ? void 0 : OB.props[BB]
        }
        getSessionProperty(BB) {
          var OB;
          return null === (OB = this.sessionPersistence) || void 0 === OB ? void 0 : OB.props[BB]
        }
        toString() {
          var BB;
          let OB = null !== (BB = this.config.name) && void 0 !== BB ? BB : wP;
          return OB !== wP && (OB = "posthog." + OB), OB
        }
        _isIdentified() {
          var BB, OB;
          return "identified" === (null === (BB = this.persistence) || void 0 === BB ? void 0 : BB.get_property("$user_state")) || "identified" === (null === (OB = this.sessionPersistence) || void 0 === OB ? void 0 : OB.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var BB, OB;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && SG(this.getGroups()) && !(null === (BB = this.persistence) || void 0 === BB || null === (BB = BB.props) || void 0 === BB ? void 0 : BB.__alias) && !(null === (OB = this.persistence) || void 0 === OB || null === (OB = OB.props) || void 0 === OB ? void 0 : OB.$epp))
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
        _requirePersonProcessing(BB) {
          return "never" === this.config.person_profiles ? (Xo.error(BB + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(UO, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const BB = this.consent.isOptedOut();
          return this.config.disable_persistence || BB && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var BB, OB;
          const GB = this._is_persistence_disabled();
          var YB, DB, QB;
          return this.is_capturing() || null === (YB = this.logs) || void 0 === YB || YB._onOptOut(), (null === (BB = this.persistence) || void 0 === BB ? void 0 : BB._disabled) !== GB && (null === (DB = this.persistence) || void 0 === DB || DB.set_disabled(GB)), (null === (OB = this.sessionPersistence) || void 0 === OB ? void 0 : OB._disabled) !== GB && (null === (QB = this.sessionPersistence) || void 0 === QB || QB.set_disabled(GB)), this._persistSessionRegisteredPropKeys(), GB
        }
        opt_in_capturing(OB) {
          var GB;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var YB, DB, QB, oB, jB, yB;
              null === (YB = this.sessionRecording) || void 0 === YB || YB.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (DB = this.sessionManager) || void 0 === DB || DB.destroy(), null === (QB = this.pageViewManager) || void 0 === QB || QB.destroy(), this.sessionManager = new vM(this), this.pageViewManager = new Ky(this), this.persistence && (this.sessionPropsManager = new TM(this, this.sessionManager, this.persistence));
              const OB = null !== (oB = null === (jB = this.config.__extensionClasses) || void 0 === jB ? void 0 : jB.sessionRecording) && void 0 !== oB ? oB : null === (yB = BB.__defaultExtensionClasses) || void 0 === yB ? void 0 : yB.sessionRecording;
              var JB, MB;
              OB && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new OB(this)), this._lastRemoteConfig && (null === (JB = this.sessionRecording) || void 0 === JB || null === (MB = JB.onRemoteConfig) || void 0 === MB || MB.call(JB, this._lastRemoteConfig)))
            }
            var PB, zB;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (GB = this.sessionRecording) || void 0 === GB || GB.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (PB = this.surveys) || void 0 === PB || PB.loadIfEnabled()), (nG(null == OB ? void 0 : OB.captureEventName) || (null == OB ? void 0 : OB.captureEventName)) && this.capture(null !== (zB = null == OB ? void 0 : OB.captureEventName) && void 0 !== zB ? zB : "$opt_in", null == OB ? void 0 : OB.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else Xo.warn(dP)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : Xo.warn(dP)
        }
        _enterCookielessMode() {
          var BB, OB;
          const GB = this.sessionRecording;
          null == GB || GB.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: fO,
            $device_id: null
          }), this._removeExtension(GB), this.sessionRecording = void 0, null === (BB = this.sessionManager) || void 0 === BB || BB.destroy(), null === (OB = this.pageViewManager) || void 0 === OB || OB.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const BB = this.consent.consent;
          return 1 === BB ? "granted" : 0 === BB ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return xO ? sM(xO, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          tO && ("visible" === tO.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(TO, {
            title: tO.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (tO.removeEventListener(VB, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), vo(tO, VB, this._visibilityStateListener)))
        }
        debug(BB) {
          !1 === BB ? (null == vO || vO.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == vO || vO.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const BB = this._originalUserConfig || {};
          return "advanced_disable_flags" in BB ? !!BB.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (Xo.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(BB, OB, GB, YB, DB) {
            const QB = OB in BB && !dG(BB[OB]),
              oB = GB in BB && !dG(BB[GB]);
            return QB ? BB[OB] : !!oB && (DB && DB.warn(`Config field '${GB}' is deprecated. Please use '${OB}' instead. The old field will be removed in a future major version.`), BB[GB])
          }(BB, "advanced_disable_flags", "advanced_disable_decide", 0, Xo)
        }
        _runBeforeSend(BB) {
          var OB;
          if (dG(this.config.before_send)) return BB;
          const GB = Object.keys(null !== (OB = BB.properties) && void 0 !== OB ? OB : {}).filter(FG),
            YB = WG(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let DB = BB;
          for (const QB of YB) try {
            if (DB = QB(DB), dG(DB)) {
              const OB = `Event '${BB.event}' was rejected in beforeSend function`;
              return IG(BB.event) ? Xo.warn(`${OB}. This can cause unexpected behavior.`) : Xo.info(OB), null
            }
            DB.properties && !SG(DB.properties) || Xo.warn(`Event '${BB.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (OB) {
            return Xo.error(`Error in beforeSend function for event '${BB.event}':`, OB), null
          }
          for (const QB of GB)
            if (DB.properties && dG(DB.properties[QB])) return Xo.warn(`Event '${BB.event}' had its '${QB}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return DB
        }
        getPageViewId() {
          var BB;
          return null === (BB = this.pageViewManager._currentPageview) || void 0 === BB ? void 0 : BB.pageViewId
        }
        captureTraceFeedback(BB, OB) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(BB),
            $ai_feedback_text: OB
          })
        }
        captureTraceMetric(BB, OB, GB) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(BB),
            $ai_metric_name: OB,
            $ai_metric_value: String(GB)
          })
        }
        _checkLocalStorageForDebug(BB) {
          const OB = mG(BB) && !BB,
            GB = Pj._is_supported() && "true" === Pj._get("ph_debug");
          return !OB && (!!GB || BB)
        }
      };
    TP.__defaultExtensionClasses = {}, TP._noopLogger = (() => {
        const BB = () => {};
        return {
          trace: BB,
          debug: BB,
          info: BB,
          warn: BB,
          error: BB,
          fatal: BB
        }
      })(),
      function(BB, OB) {
        for (let GB = 0; OB.length > GB; GB++) BB.prototype[OB[GB]] = eo(BB.prototype[OB[GB]])
      }(TP, ["identify"]);
    var bP = class {
      constructor(BB) {
        this.disabled = !1 === BB;
        const OB = VG(BB) ? BB : {};
        this.thresholdPx = OB.threshold_px || 30, this.timeoutMs = OB.timeout_ms || 1e3, this.clickCount = OB.click_count || 3, this.clicks = []
      }
      isRageClick(BB, OB, GB) {
        if (this.disabled) return !1;
        const YB = this.clicks[this.clicks.length - 1];
        if (YB && Math.abs(BB - YB.x) + Math.abs(OB - YB.y) < this.thresholdPx && this.timeoutMs > GB - YB.timestamp) {
          if (this.clicks.push({
              x: BB,
              y: OB,
              timestamp: GB
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: BB,
          y: OB,
          timestamp: GB
        }];
        return !1
      }
    };
    const CP = "$copy_autocapture",
      HP = wo("[AutoCapture]");

    function vP(BB, OB) {
      return OB.length > BB ? OB.slice(0, BB) + "..." : OB
    }

    function sP(BB) {
      if (BB.previousElementSibling) return BB.previousElementSibling;
      let OB = BB;
      do {
        OB = OB.previousSibling
      } while (OB && !uj(OB));
      return OB
    }
    var xP = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(BB) {
          var OB;
          if (!Qy(BB)) return !0;
          const GB = null !== (OB = this._refreshConfig().css_selector_ignorelist) && void 0 !== OB ? OB : ej,
            YB = new Set;
          let DB = BB;
          for (; DB;) {
            if (YB.size >= 1e3 || YB.has(DB)) return !0;
            YB.add(DB);
            const BB = DB,
              OB = gj(BB);
            if (zG(OB, "ph-no-capture") || zG(OB, "ph-sensitive") || oy(BB) || GB.some((OB => cj(BB, OB)))) return !0;
            const QB = DB.parentNode;
            DB = Fj(QB) ? QB.host : QB && uj(QB) ? QB : null
          }
          return !1
        }
        _trackPointer(BB) {
          if (!this.isEnabled || "pointercancel" === BB.type) return void this._clearPointer();
          if ("pointerdown" === BB.type) {
            this._clearPointer();
            const GB = wj(BB);
            var OB;
            return void(BB.isPrimary && 0 === BB.button && !BB.ctrlKey && GB && uj(GB) && (this._pointerDown = {
              target: GB,
              excluded: this._isExcludedPointerTarget(GB),
              id: BB.pointerId,
              x: BB.clientX,
              y: BB.clientY,
              released: !1,
              distinctId: null === (OB = this._client) || void 0 === OB ? void 0 : OB.distinctId
            }))
          }
          const GB = this._pointerDown;
          GB && (BB.pointerId !== GB.id || Math.abs(BB.clientX - GB.x) > 5 || Math.abs(BB.clientY - GB.y) > 5 ? this._clearPointer() : "pointerup" === BB.type && (GB.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(BB) {
          var OB;
          const GB = this._pointerDown;
          this._clearPointer();
          const YB = wj(BB);
          if ((null == GB ? void 0 : GB.released) && GB.target.isConnected && GB.distinctId === (null === (OB = this._client) || void 0 === OB ? void 0 : OB.distinctId) && BB.pointerId === GB.id && (BB.detail > 0 || "touch" === BB.pointerType || "pen" === BB.pointerType) && 0 === BB.button && 5 >= Math.abs(BB.clientX - GB.x) && 5 >= Math.abs(BB.clientY - GB.y) && YB && (mj(YB, "html") || mj(YB, "body"))) {
            var DB;
            if (GB.excluded) return null;
            const BB = null !== (DB = this._refreshConfig().css_selector_ignorelist) && void 0 !== DB ? DB : ej;
            return [YB, null == tO ? void 0 : tO.documentElement, null == tO ? void 0 : tO.body].some((OB => {
              if (!OB) return !1;
              const GB = gj(OB);
              return zG(GB, "ph-no-capture") || zG(GB, "ph-sensitive") || !Qy(OB) || oy(OB) || BB.some((BB => cj(OB, BB)))
            })) ? null : GB.target
          }
        }
        constructor(BB) {
          this._configSource = BB, this.name = RP, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new bP(this._config.rageclick), this._elementSelectors = null
        }
        setup(BB) {
          this._compileUrlPatterns(), this._client = BB;
          const OB = BB.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? OB.dispose() : (this._remoteConfigSubscription = OB, this.startIfEnabled())
        }
        dispose() {
          var BB;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (BB = this._remoteConfigSubscription) || void 0 === BB || BB.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var BB, OB;
          return this._refreshConfig(), this._config.url_allowlist = null === (BB = this._config.url_allowlist) || void 0 === BB ? void 0 : BB.map((BB => new RegExp(BB))), this._config.url_ignorelist = null === (OB = this._config.url_ignorelist) || void 0 === OB ? void 0 : OB.map((BB => new RegExp(BB))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void HP.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!vO || !tO) return;
          const BB = this._domEventHandler = BB => {
            BB = BB || (null == vO ? void 0 : vO.event);
            try {
              if ("blur" === BB.type) return void this._clearPointer();
              if (0 === BB.type.indexOf("pointer")) return void this._trackPointer(BB);
              const OB = "click" === BB.type ? this._recoverClickTarget(BB) : void 0;
              if (kG(OB)) return;
              this._captureEvent(BB, "$autocapture", OB)
            } catch (BB) {
              HP.error("Failed to capture event", BB)
            }
          };
          if (vo(vO, "blur", BB), vo(tO, "submit", BB, {
              capture: !0
            }), vo(tO, "change", BB, {
              capture: !0
            }), vo(tO, "click", BB, {
              capture: !0
            }), co(["pointerdown", "pointermove", "pointerup", "pointercancel"], (OB => {
              vo(tO, OB, BB, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const BB = this._copiedTextHandler = BB => {
              BB = BB || (null == vO ? void 0 : vO.event);
              try {
                this._captureEvent(BB, CP)
              } catch (BB) {
                HP.error("Failed to capture clipboard event", BB)
              }
            };
            vo(tO, "copy", BB, {
              capture: !0
            }), vo(tO, "cut", BB, {
              capture: !0
            }), vo(tO, "paste", BB, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == vO || vO.removeEventListener("blur", this._domEventHandler), co(["pointerdown", "pointermove", "pointerup", "pointercancel"], (BB => {
            null == tO || tO.removeEventListener(BB, this._domEventHandler, !0)
          })), null == tO || tO.removeEventListener("submit", this._domEventHandler, !0), null == tO || tO.removeEventListener("change", this._domEventHandler, !0), null == tO || tO.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == tO || tO.removeEventListener("copy", this._copiedTextHandler, !0), null == tO || tO.removeEventListener("cut", this._copiedTextHandler, !0), null == tO || tO.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(BB) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !BB.ok) return void this.startIfEnabled();
          const OB = BB.config;
          OB.elementsChainAsString && (this._elementsChainAsString = OB.elementsChainAsString);
          const GB = OB.autocapture_opt_out;
          var YB;
          mG(GB) && (null === (YB = this._client) || void 0 === YB || YB.kv.set("$autocapture_disabled_server_side", GB), this._isDisabledServerSide = GB), this.startIfEnabled()
        }
        setElementSelectors(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          BB.size ? this._elementSelectorsByOwner.set(OB, new Set(BB)) : this._elementSelectorsByOwner.delete(OB);
          const GB = new Set;
          this._elementSelectorsByOwner.forEach((BB => {
            BB.forEach((BB => GB.add(BB)))
          })), this._elementSelectors = GB
        }
        getElementSelectors(BB, OB) {
          var GB;
          const YB = [];
          return null === (GB = this._elementSelectors) || void 0 === GB || GB.forEach((GB => {
            const DB = null == tO ? void 0 : tO.querySelectorAll(GB);
            null == DB || DB.forEach((DB => {
              BB !== DB && OB !== DB || zG(YB, GB) || YB.push(GB)
            }))
          })), YB
        }
        get isEnabled() {
          var BB, OB;
          if (this._disposed) return !1;
          const GB = null === (BB = this._client) || void 0 === BB ? void 0 : BB.kv.get(iB),
            YB = this._isDisabledServerSide,
            DB = this._refreshConfig();
          if (!DB.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const QB = DB.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (kG(YB) && !mG(GB) && !QB) return !1;
          const oB = null !== (OB = this._isDisabledServerSide) && void 0 !== OB ? OB : !!GB;
          return !!DB.enabled && !oB
        }
        _captureEvent(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            GB = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let YB = GB || wj(BB);
          Ij(YB) && (YB = YB.parentNode || null);
          const DB = this._compileUrlPatterns();
          var QB;
          "$autocapture" === OB && "click" === BB.type && BB instanceof MouseEvent && DB.rageclick && (null === (QB = this.rageclicks) || void 0 === QB ? void 0 : QB.isRageClick(BB.clientX, BB.clientY, BB.timeStamp || (new Date).getTime())) && Gy(YB, DB.rageclick) && this._captureEvent(BB, "$rageclick", GB);
          const oB = OB === CP,
            jB = oB ? RD(RD({}, DB), {}, {
              dom_event_allowlist: void 0
            }) : DB;
          if (YB && function(BB, OB, GB, YB, DB, QB) {
              var oB;
              if (!vO || Yy(BB)) return !1;
              if ((null == GB ? void 0 : GB.url_allowlist) && !Lj(GB.url_allowlist, QB)) return !1;
              if ((null == GB ? void 0 : GB.url_ignorelist) && Lj(GB.url_ignorelist, QB)) return !1;
              if (null == GB ? void 0 : GB.dom_event_allowlist) {
                const BB = GB.dom_event_allowlist;
                if (BB && !BB.some((BB => OB.type === BB))) return !1
              }
              const {
                parentIsUsefulElement: jB,
                targetElementList: yB
              } = Dy(BB, YB);
              if (! function(BB, OB) {
                  const GB = null == OB ? void 0 : OB.element_allowlist;
                  if (nG(GB)) return !0;
                  for (const YB of BB)
                    if (GB.some((BB => YB.tagName.toLowerCase() === BB))) return !0;
                  return !1
                }(yB, GB)) return !1;
              if (!hj(yB, null == GB ? void 0 : GB.css_selector_allowlist)) return !1;
              if (hj(yB, null !== (oB = null == GB ? void 0 : GB.css_selector_ignorelist) && void 0 !== oB ? oB : ej)) return !1;
              try {
                const GB = vO.getComputedStyle(BB);
                if (GB && "pointer" === GB.getPropertyValue("cursor") && "click" === OB.type) return !0
              } catch (BB) {}
              const JB = BB.tagName.toLowerCase();
              switch (JB) {
                case "html":
                  return !1;
                case "form":
                  return (DB || ["submit"]).indexOf(OB.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (DB || ["change", "click"]).indexOf(OB.type) >= 0;
                default:
                  return jB ? (DB || ["click"]).indexOf(OB.type) >= 0 : (DB || ["click"]).indexOf(OB.type) >= 0 && (Ej.indexOf(JB) > -1 || "true" === BB.getAttribute("contenteditable"))
              }
            }(YB, BB, jB, oB, oB ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: DB.getCurrentUrl
              }
            })) {
            var yB;
            const {
              props: GB,
              explicitNoCapture: QB,
              target: oB
            } = function(BB, OB) {
              let {
                e: GB,
                maskAllElementAttributes: YB,
                maskAllText: DB,
                elementAttributeIgnoreList: QB,
                elementsChainAsString: oB,
                disableCaptureUrlHashes: jB
              } = OB;
              var yB, JB;
              if (!uj(BB)) return {
                props: {}
              };
              const MB = [BB],
                PB = new Set([BB]);
              let zB = BB;
              for (; zB.parentNode && !mj(zB, "body") && 1e3 > MB.length;)
                if (Fj(zB.parentNode)) {
                  const BB = zB.parentNode.host;
                  if (PB.has(BB)) break;
                  PB.add(BB), MB.push(BB), zB = BB
                } else {
                  if (!uj(zB.parentNode)) break;
                  if (PB.has(zB.parentNode)) break;
                  PB.add(zB.parentNode), MB.push(zB.parentNode), zB = zB.parentNode
                } const lB = "click" === GB.type && "http://www.w3.org/2000/svg" === BB.namespaceURI ? MB.findIndex((BB => mj(BB, "button") || mj(BB, "a"))) : -1;
              lB > 0 && (DB = DB || MB.slice(0, lB + 1).some((BB => !Qy(BB) || oy(BB))));
              const pB = [],
                qB = {};
              let ZB, NB = !1,
                RB = !1;
              if (co(MB, (BB => {
                  const OB = Qy(BB);
                  if (mj(BB, "a") && !YB && !(null == QB ? void 0 : QB.includes("href"))) {
                    const GB = BB.getAttribute("href");
                    NB = !!(OB && GB && py(GB)) && (jB ? MD(GB) : GB)
                  }
                  zG(gj(BB), "ph-no-capture") && (RB = !0), pB.push(function(BB, OB, GB, YB) {
                    let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const QB = BB.tagName.toLowerCase(),
                      oB = {
                        tag_name: QB
                      };
                    Ej.indexOf(QB) > -1 && !GB && (oB.$el_text = "a" === QB.toLowerCase() || "button" === QB.toLowerCase() ? vP(1024, qy(BB)) : vP(1024, Xj(BB)));
                    const jB = gj(BB);
                    OB || (null == YB ? void 0 : YB.includes("class")) || 0 >= jB.length || (oB.classes = jB.filter((function(BB) {
                      return "" !== BB
                    }))), co(BB.attributes, (function(GB) {
                      var QB;
                      if ((!oy(BB) || -1 !== ["name", "id", "class", "aria-label"].indexOf(GB.name)) && !(null == YB ? void 0 : YB.includes(GB.name)) && !OB && py(GB.value) && (!UG(QB = GB.name) || "_ngcontent" !== QB.substring(0, 10) && "_nghost" !== QB.substring(0, 7))) {
                        let BB = GB.value;
                        "class" === GB.name && (BB = ij(BB).join(" ")), oB["attr__" + GB.name] = vP(1024, "href" === GB.name && DB ? MD(BB) : BB)
                      }
                    }));
                    let yB = 1,
                      JB = 1,
                      MB = BB;
                    for (; MB = sP(MB);) yB++, MB.tagName === BB.tagName && JB++;
                    return oB.nth_child = yB, oB.nth_of_type = JB, oB
                  }(BB, YB, DB, QB, jB)), co(function(BB) {
                    if (!Qy(BB)) return {};
                    const OB = {};
                    return co(BB.attributes, (function(BB) {
                      if (BB.name && 0 === BB.name.indexOf("data-ph-capture-attribute")) {
                        const GB = BB.name.replace("data-ph-capture-attribute-", ""),
                          YB = BB.value;
                        GB && YB && py(YB) && (OB[GB] = YB)
                      }
                    })), OB
                  }(BB), ((BB, OB) => {
                    ({}).hasOwnProperty.call(qB, OB) || (qB[OB] = BB)
                  }))
                })), RB) return {
                props: {},
                explicitNoCapture: RB
              };
              if (lB > 0 && (BB = MB[lB], pB.splice(0, lB)), DB || (pB[0].$el_text = mj(BB, "a") || mj(BB, "button") ? qy(BB) : Xj(BB)), NB) {
                var WB, AB;
                pB[0].attr__href = NB;
                const BB = null === (WB = wy(NB)) || void 0 === WB ? void 0 : WB.host,
                  OB = null == vO || null === (AB = vO.location) || void 0 === AB ? void 0 : AB.host;
                BB && OB && BB !== OB && (ZB = NB)
              }
              return {
                props: ho((SB = GB.type, {
                  $event_type: SB,
                  $ce_version: 1
                }), oB ? {} : {
                  $elements: pB
                }, {
                  $elements_chain: (VB = pB, WG(VB) ? function(BB) {
                    return BB.map((BB => {
                      var OB, GB;
                      let YB = "";
                      if (BB.tag_name && (YB += BB.tag_name), BB.attr_class) {
                        BB.attr_class.sort();
                        for (const OB of BB.attr_class) YB += `.${OB.replace(/"/g,"")}`
                      }
                      const DB = RD(RD(RD(RD({}, BB.text ? {
                          text: BB.text
                        } : {}), {}, {
                          "nth-child": null !== (OB = BB.nth_child) && void 0 !== OB ? OB : 0,
                          "nth-of-type": null !== (GB = BB.nth_of_type) && void 0 !== GB ? GB : 0
                        }, BB.href ? {
                          href: BB.href
                        } : {}), BB.attr_id ? {
                          attr_id: BB.attr_id
                        } : {}), BB.attributes),
                        QB = {};
                      return ao(DB).sort(((BB, OB) => {
                        let [GB] = BB, [YB] = OB;
                        return function(BB, OB) {
                          return OB > BB ? -1 : BB > OB ? 1 : 0
                        }(GB, YB)
                      })).forEach((BB => {
                        let [OB, GB] = BB;
                        return QB[Ny(OB.toString())] = Ny(GB.toString())
                      })), YB += ":", YB += ao(QB).map((BB => {
                        let [OB, GB] = BB;
                        return `${OB}="${GB}"`
                      })).join(""), YB
                    })).join(";")
                  }(function(BB) {
                    return BB.map((BB => {
                      var OB, GB;
                      const YB = {
                        text: null === (OB = BB.$el_text) || void 0 === OB ? void 0 : OB.slice(0, 400),
                        tag_name: BB.tag_name,
                        href: null === (GB = BB.attr__href) || void 0 === GB ? void 0 : GB.slice(0, 2048),
                        attr_class: Ry(BB),
                        attr_id: BB.attr__id,
                        nth_child: BB.nth_child,
                        nth_of_type: BB.nth_of_type,
                        attributes: {}
                      };
                      return ao(BB).filter((BB => {
                        let [OB] = BB;
                        return 0 === OB.indexOf("attr__")
                      })).forEach((BB => {
                        let [OB, GB] = BB;
                        return YB.attributes[OB] = GB
                      })), YB
                    }))
                  }(VB)) : "")
                }, (null === (yB = pB[0]) || void 0 === yB ? void 0 : yB.$el_text) ? {
                  $el_text: null === (JB = pB[0]) || void 0 === JB ? void 0 : JB.$el_text
                } : {}, ZB && "click" === GB.type ? {
                  $external_click_url: ZB
                } : {}, qB),
                target: BB
              };
              var VB, SB
            }(YB, {
              e: BB,
              maskAllElementAttributes: DB.maskAllElementAttributes,
              maskAllText: DB.maskAllText,
              elementAttributeIgnoreList: DB.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: DB.disableCaptureUrlHashes
            });
            if (QB) return !1;
            const jB = this.getElementSelectors(YB, oB);
            if (jB && jB.length > 0 && (GB.$element_selectors = jB), OB === CP) {
              const OB = BB.type || "clipboard";
              if ("paste" !== OB) {
                var JB, MB;
                const BB = null == vO || null === (JB = vO.getSelection()) || void 0 === JB ? void 0 : JB.toString(),
                  OB = rj(BB);
                if (!OB) return !1;
                GB.$selected_content = OB, GB.$clipboard_text_length = null !== (MB = null == BB ? void 0 : BB.length) && void 0 !== MB ? MB : 0
              }
              GB.$copy_type = OB
            }
            return null === (yB = this._client) || void 0 === yB || yB.capture(OB, GB), !0
          }
        }
        isBrowserSupported() {
          return AG(null == tO ? void 0 : tO.querySelectorAll)
        }
      },
      tP = class {
        constructor(BB) {
          this._instance = BB
        }
        refresh(BB) {
          const OB = this._instance.config,
            GB = VG(OB.autocapture) ? OB.autocapture : void 0;
          BB.enabled = !!OB.autocapture, BB.rageclick = OB.rageclick, BB.maskAllElementAttributes = OB.mask_all_element_attributes, BB.maskAllText = OB.mask_all_text, BB.disableCaptureUrlHashes = OB.disable_capture_url_hashes, BB.getCurrentUrl = OB.get_current_url, BB.remoteRequestsDisabled = this._instance._shouldDisableFlags(), BB.url_allowlist = null == GB ? void 0 : GB.url_allowlist, BB.url_ignorelist = null == GB ? void 0 : GB.url_ignorelist, BB.dom_event_allowlist = null == GB ? void 0 : GB.dom_event_allowlist, BB.element_allowlist = null == GB ? void 0 : GB.element_allowlist, BB.css_selector_allowlist = null == GB ? void 0 : GB.css_selector_allowlist, BB.css_selector_ignorelist = null == GB ? void 0 : GB.css_selector_ignorelist, BB.element_attribute_ignorelist = null == GB ? void 0 : GB.element_attribute_ignorelist, BB.capture_copied_text = null == GB ? void 0 : GB.capture_copied_text
        }
      };
    const Bz = wo("[ExceptionAutocapture]"),
      Oz = () => {},
      Gz = BB => {
        var OB;
        if (AG(BB)) return null !== (OB = BB.__posthog_layer__) && void 0 !== OB ? OB : BB.__rrweb_layer__
      };

    function Yz(BB, OB, GB) {
      try {
        if (!(OB in BB)) return Oz;
        const YB = {
            next: BB[OB]
          },
          DB = GB((function() {
            for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
            return YB.next.apply(this, OB)
          }));
        return AG(DB) && (DB.prototype = DB.prototype || {}, Object.defineProperties(DB, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: YB
          }
        })), BB[OB] = DB, () => {
          if (BB[OB] === DB) return void(BB[OB] = YB.next);
          let GB = BB[OB],
            QB = Gz(GB);
          for (; QB;) {
            if (QB.next === DB) return void(QB.next = YB.next);
            GB = QB.next, QB = Gz(GB)
          }
        }
      } catch (BB) {
        return Oz
      }
    }
    const Dz = wo("[TracingHeaders]"),
      Qz = wo("[Web Vitals]"),
      oz = 9e5,
      jz = ["CLS", "FCP", "INP", "LCP"],
      yz = ["INP", "LCP"],
      Jz = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      Mz = "disabled",
      Pz = "lazy_loading",
      zz = wo("[SessionRecording]"),
      lz = [uO, mO, IO, FO, iO, LO, gO, rO, XO],
      pz = wo("[Heatmaps]");

    function qz(BB) {
      return VG(BB) && "clientX" in BB && "clientY" in BB && KG(BB.clientX) && KG(BB.clientY)
    }
    const Zz = wo("[Product Tours]"),
      Nz = BB => {
        var OB;
        return !BB.config.disable_product_tours && !!(null === (OB = BB.persistence) || void 0 === OB ? void 0 : OB.get_property(cB))
      },
      Rz = ["$set_once", "$set"],
      Wz = wo("[SiteApps]"),
      Az = "Error while initializing PostHog app with config id ",
      Vz = (BB, OB) => (null == BB ? void 0 : BB.then) ? BB.then(OB) : OB(BB),
      Sz = "SDK is not enabled or survey functionality is not yet loaded",
      nz = "Disabled. Not loading surveys.";
    var Uz = class {
      constructor(BB, OB) {
        this._configSource = BB, this._initialClientState = OB, this.name = VP, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = BB => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!BB.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), PP.warn("Remote config unavailable. Not loading surveys.");
          const OB = BB.config.surveys;
          if (dG(OB)) return PP.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = mG(OB) ? OB : OB.length > 0, PP.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = BB => {
          this._activeMatchingSurveyCallbacks.slice().forEach((OB => this._notifyActiveMatchingSurveyCallback(OB, BB)))
        }
      }
      setup(BB) {
        if (!this._disposed) return this._initializingClient = BB, Vz(BB.kv.initialize(), (() => {
          if (this._initializingClient !== BB || this._disposed) return;
          this._initializingClient = void 0, this._client = BB;
          const OB = BB.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? OB.dispose() : (this._remoteConfigSubscription = OB, this.loadIfEnabled())
        }))
      }
      dispose() {
        var BB, OB, GB, YB, DB;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (BB = this._remoteConfigSubscription) || void 0 === BB || BB.dispose(), this._remoteConfigSubscription = void 0, null === (OB = this._surveyEventReceiver) || void 0 === OB || OB.dispose(), this._surveyEventReceiver = null, null === (GB = this._surveyManager) || void 0 === GB || null === (YB = GB.dispose) || void 0 === YB || YB.call(GB), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((BB => {
          BB.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (DB = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === DB || DB.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((BB => clearTimeout(BB))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var BB, OB;
        null === (BB = this._surveyManager) || void 0 === BB || null === (OB = BB.clearInMemoryInProgressSurveyState) || void 0 === OB || OB.call(BB);
        try {
          var GB;
          null === (GB = this._surveyEventReceiver) || void 0 === GB || GB.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const BB = [];
          for (let OB = 0; OB < localStorage.length; OB++) {
            const GB = localStorage.key(OB);
            ((null == GB ? void 0 : GB.startsWith("seenSurvey_")) || (null == GB ? void 0 : GB.startsWith("inProgressSurvey_"))) && BB.push(GB)
          }
          BB.forEach((BB => localStorage.removeItem(BB)))
        } catch (BB) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const BB = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void PP.info("Already initializing surveys, skipping...");
        if (BB.disableSurveys) return void PP.info(nz);
        if (BB.cookielessMode && this._configSource.isOptedOut()) return void PP.info("Not loading surveys in cookieless mode without consent.");
        const OB = this._configSource.getExtensions();
        if (!OB) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (nG(this._isSurveysEnabled) && !BB.advancedEnableSurveys) return;
        const GB = this._isSurveysEnabled || BB.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const BB = OB.generateSurveys;
          if (BB) return this._completeSurveyInitialization(BB, GB), void(this._isInitializingSurveys = !1);
          const YB = OB.loadExternalDependency;
          if (!YB) return this._handleSurveyLoadError(EO), void(this._isInitializingSurveys = !1);
          YB((BB => {
            try {
              if (this._disposed) return;
              const OB = this._configSource.getExtensions();
              BB || !(null == OB ? void 0 : OB.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", BB) : this._completeSurveyInitialization(OB.generateSurveys, GB)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (BB) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", BB), BB
        }
      }
      _completeSurveyInitialization(BB, OB) {
        var GB, YB;
        if (this._disposed) return;
        this._surveyManager = BB(OB), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const DB = null === (GB = null !== (YB = this._client) && void 0 !== YB ? YB : this._initialClientState) || void 0 === GB ? void 0 : GB.kv.get(oO);
        DB && this._registerEventOrActionBasedSurveys(DB), PP.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(BB, OB) {
        this._surveyInitializationFailed = !0, PP.error(BB, OB), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: BB
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: BB
        })
      }
      onSurveysLoaded(BB) {
        return this._surveyCallbacks.push(BB), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((OB => OB !== BB))
        }
      }
      getSurveys(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var GB;
        const YB = null !== (GB = this._client) && void 0 !== GB ? GB : this._initialClientState;
        if (!YB || this._disposed) return;
        if (this._config.disableSurveys) return PP.info(nz), BB([]);
        const DB = YB.kv.get(oO);
        if (DB && !OB) return BB(DB, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((OB => {
          let {
            surveys: GB,
            context: YB
          } = OB;
          this._disposed || BB(GB, YB)
        })).catch((BB => PP.error("Error in survey callback", BB)));
        const QB = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: YB.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((BB => {
          try {
            return this._handleSurveyResponse(YB, BB)
          } catch (BB) {
            return PP.error("Error processing surveys response", BB), this._handleSurveyResponse(YB, {
              statusCode: 0,
              error: BB
            })
          }
        }), (BB => this._handleSurveyResponse(YB, {
          statusCode: 0,
          error: BB
        })));
        this._getSurveysInFlightPromise = QB;
        const oB = () => {
          this._getSurveysInFlightPromise === QB && (this._getSurveysInFlightPromise = null)
        };
        QB.then((OB => {
          oB(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(OB.context), BB(OB.surveys, OB.context))
        }), oB).catch((BB => PP.error("Error in survey callback", BB)))
      }
      _sendSurveysRequest(BB, OB) {
        const GB = this._client;
        return GB ? GB.sendRequest(BB, OB) : new Promise((BB => BB({
          statusCode: 0,
          error: new Error(Sz)
        })))
      }
      _handleSurveyResponse(BB, OB) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: Sz
          }
        };
        const GB = OB.statusCode;
        if (200 !== GB || !OB.json) {
          const BB = `Surveys API could not be loaded, status: ${GB}`;
          return 0 !== GB ? PP.error(BB) : OB.error || PP.warn(BB), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: BB
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const YB = OB.json.surveys || [];
        return BB.kv.set({
          [oO]: YB,
          [jO]: Date.now()
        }), this._registerEventOrActionBasedSurveys(YB), {
          surveys: YB,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(BB) {
        var OB;
        const GB = BB.filter((BB => function(BB) {
          return !(!BB.start_date || BB.end_date)
        }(BB) && (BP(BB) || function(BB) {
          var OB;
          return !!(null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.actions) || void 0 === OB || null === (OB = OB.values) || void 0 === OB ? void 0 : OB.length)
        }(BB))));
        null === (OB = this._surveyEventReceiver) || void 0 === OB || OB.replace(GB)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var BB, OB;
        const GB = null === (BB = null !== (OB = this._client) && void 0 !== OB ? OB : this._initialClientState) || void 0 === BB ? void 0 : BB.kv.get(jO);
        return KG(GB) && Date.now() - GB > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return KG(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(BB, OB) {
        var GB;
        const YB = {
          id: BB,
          current_iteration: null !== (GB = null == OB ? void 0 : OB.iteration) && void 0 !== GB ? GB : null
        };
        zP(YB);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (BB) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(BB) {
        for (const OB of this._surveyCallbacks) try {
          if (!BB.isLoaded) return OB([], BB);
          this.getSurveys(OB)
        } catch (BB) {
          PP.error("Error in survey callback", BB)
        }
      }
      getActiveMatchingSurveys(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!dG(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(BB, OB);
        PP.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(BB) {
        var OB, GB;
        if (this._disposed) return () => {};
        const YB = {
          callback: BB,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(YB), this._startActiveMatchingSurveyConditions();
        const DB = null === (OB = null !== (GB = this._client) && void 0 !== GB ? GB : this._initialClientState) || void 0 === OB ? void 0 : OB.kv.get(oO);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !DB && !dG(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(YB, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(YB), () => {
          var BB;
          YB.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((BB => BB !== YB)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (BB = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === BB || BB.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var BB, OB, GB;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (BB = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== BB || (this._activeMatchingSurveyConditionsUnsubscribe = null === (OB = (GB = this._configSource).onMatchingConditionsChanged) || void 0 === OB ? void 0 : OB.call(GB, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(BB, OB) {
        if (this._disposed || !BB.active) return;
        const GB = ++BB.revision,
          YB = YB => {
            if (!this._disposed && BB.active && GB === BB.revision) try {
              const GB = null != OB ? OB : {
                  isLoaded: !0
                },
                DB = JSON.stringify([YB, GB]);
              if (DB === BB.lastResult) return;
              BB.lastResult = DB, BB.callback(YB, GB)
            } catch (BB) {
              PP.error("Error in active matching surveys callback", BB)
            }
          };
        try {
          OB && !OB.isLoaded ? YB([]) : this.getActiveMatchingSurveys(YB)
        } catch (BB) {
          PP.error("Error in active matching surveys callback", BB)
        }
      }
      _getSurveyById(BB) {
        let OB = null;
        return this.getSurveys((GB => {
          var YB;
          OB = null !== (YB = GB.find((OB => OB.id === BB))) && void 0 !== YB ? YB : null
        })), OB
      }
      _checkSurveyEligibility(BB) {
        if (dG(this._surveyManager)) return {
          eligible: !1,
          reason: Sz
        };
        const OB = "string" == typeof BB ? this._getSurveyById(BB) : BB;
        return OB ? this._surveyManager.checkSurveyEligibility(OB) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(BB) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (dG(this._surveyManager)) return {
          eligible: !1,
          reason: Sz
        };
        const OB = "string" == typeof BB ? this._getSurveyById(BB) : BB;
        return OB ? this._surveyManager.checkSurveyRenderability(OB) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(BB) {
        if (dG(this._surveyManager)) return PP.warn("init was not called"), {
          visible: !1,
          disabledReason: Sz
        };
        const OB = this._checkSurveyRenderability(BB);
        return {
          visible: OB.eligible,
          disabledReason: OB.reason
        }
      }
      canRenderSurveyAsync(BB, OB) {
        return dG(this._surveyManager) ? (PP.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: Sz
        })) : new Promise((GB => {
          this.getSurveys((OB => {
            var YB;
            const DB = null !== (YB = OB.find((OB => OB.id === BB))) && void 0 !== YB ? YB : null;
            if (DB) {
              const BB = this._checkSurveyRenderability(DB);
              GB({
                visible: BB.eligible,
                disabledReason: BB.reason
              })
            } else GB({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), OB)
        }))
      }
      renderSurvey(BB, OB, GB) {
        var YB;
        if (!this._configSource.isCapturing()) return;
        if (dG(this._surveyManager)) return void PP.warn("init was not called");
        const DB = "string" == typeof BB ? this._getSurveyById(BB) : BB;
        if (!(null == DB ? void 0 : DB.id)) return void PP.warn("Survey not found");
        if (!lP.includes(DB.type)) return void PP.warn(`Surveys of type ${DB.type} cannot be rendered in the app`);
        const QB = null == tO ? void 0 : tO.querySelector(OB);
        if (QB) {
          if (null === (YB = DB.appearance) || void 0 === YB ? void 0 : YB.surveyPopupDelaySeconds) {
            PP.info(`Rendering survey ${DB.id} with delay of ${DB.appearance.surveyPopupDelaySeconds} seconds`);
            const BB = setTimeout((() => {
              var OB, YB;
              this._renderTimeouts.delete(BB), !this._disposed && this._configSource.isCapturing() && (PP.info(`Rendering survey ${DB.id} with delay of ${null===(OB=DB.appearance)||void 0===OB?void 0:OB.surveyPopupDelaySeconds} seconds`), null === (YB = this._surveyManager) || void 0 === YB || YB.renderSurvey(DB, QB, GB), PP.info(`Survey ${DB.id} rendered`))
            }), 1e3 * DB.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(BB)
          }
          this._surveyManager.renderSurvey(DB, QB, GB)
        } else PP.warn("Survey element not found")
      }
      displaySurvey(BB, OB) {
        var GB;
        if (!this._configSource.isCapturing()) return;
        if (dG(this._surveyManager)) return void PP.warn("init was not called");
        const YB = this._getSurveyById(BB);
        if (!YB) return void PP.warn("Survey not found");
        let DB = YB;
        if ((null === (GB = YB.appearance) || void 0 === GB ? void 0 : GB.surveyPopupDelaySeconds) && OB.ignoreDelay && (DB = RD(RD({}, YB), {}, {
            appearance: RD(RD({}, YB.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), OB.displayType !== uJ && OB.initialResponses && PP.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === OB.ignoreConditions) {
          const BB = this._checkSurveyEligibility(YB);
          if (!BB.eligible) return void PP.warn("Survey is not eligible to be displayed: ", BB.reason)
        }
        OB.displayType !== mJ ? this._surveyManager.handlePopoverSurvey(DB, OB) : this.renderSurvey(DB, OB.selector, OB.properties)
      }
      cancelPendingSurvey(BB) {
        dG(this._surveyManager) ? PP.warn("init was not called") : this._surveyManager.cancelSurvey(BB)
      }
      handlePageUnload() {
        var BB, OB;
        null === (BB = this._surveyManager) || void 0 === BB || null === (OB = BB.handlePageUnload) || void 0 === OB || OB.call(BB)
      }
    };

    function fz(BB, OB, GB) {
      if (dG(BB)) return !1;
      switch (GB) {
        case "exact":
          return BB === OB;
        case "contains": {
          const GB = OB.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(GB, "i").test(BB)
        }
        case "regex":
          try {
            return new RegExp(OB).test(BB)
          } catch (BB) {
            return !1
          }
        default:
          return !1
      }
    }
    var kz = class {
        constructor(BB) {
          this._instance = BB, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new bM, this._checkStep = (BB, OB) => this._checkStepEvent(BB, OB) && this._checkStepUrl(BB, OB) && this._checkStepElement(BB, OB) && this._checkStepProperties(BB, OB), this._checkStepEvent = (BB, OB) => !(null == OB ? void 0 : OB.event) || (null == BB ? void 0 : BB.event) === (null == OB ? void 0 : OB.event)
        }
        init() {
          var BB, OB;
          nG(null === (BB = this._instance) || void 0 === BB ? void 0 : BB._addCaptureHook) || (this._captureHookUnsubscribe = null === (OB = this._instance) || void 0 === OB ? void 0 : OB._addCaptureHook(((BB, OB) => {
            this.on(BB, OB)
          })))
        }
        dispose() {
          var BB, OB;
          null === (BB = this._captureHookUnsubscribe) || void 0 === BB || BB.call(this), this._captureHookUnsubscribe = void 0, null === (OB = this._instance) || void 0 === OB || null === (OB = OB.autocapture) || void 0 === OB || OB.setElementSelectors(new Set, this), this._debugEventEmitter = new bM
        }
        register(BB) {
          var OB, GB;
          if (!nG(null === (OB = this._instance) || void 0 === OB ? void 0 : OB._addCaptureHook) && (BB.forEach((BB => {
              var OB;
              this._actionRegistry.add(BB), null === (OB = BB.steps) || void 0 === OB || OB.forEach((BB => {
                this._actionEvents.add((null == BB ? void 0 : BB.event) || "")
              }))
            })), null === (GB = this._instance) || void 0 === GB ? void 0 : GB.autocapture)) {
            const BB = new Set;
            this._actionRegistry.forEach((OB => {
              var GB;
              null === (GB = OB.steps) || void 0 === GB || GB.forEach((OB => {
                (null == OB ? void 0 : OB.selector) && BB.add(OB.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(BB, this)
          }
        }
        replace(BB) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(BB)
        }
        on(BB, OB) {
          null != OB && 0 != BB.length && (this._actionEvents.has(BB) || this._actionEvents.has(OB.event)) && this._actionRegistry.forEach((BB => {
            this._checkAction(OB, BB) && this._debugEventEmitter.emit("actionCaptured", BB.name)
          }))
        }
        _addActionHook(BB) {
          this.onAction("actionCaptured", (OB => BB(OB)))
        }
        _checkAction(BB, OB) {
          if (null == (null == OB ? void 0 : OB.steps)) return !1;
          for (const GB of OB.steps)
            if (this._checkStep(BB, GB)) return !0;
          return !1
        }
        onAction(BB, OB) {
          return this._debugEventEmitter.on(BB, OB)
        }
        _checkStepUrl(BB, OB) {
          if (null == OB ? void 0 : OB.url) {
            var GB;
            const YB = null == BB || null === (GB = BB.properties) || void 0 === GB ? void 0 : GB.$current_url;
            if (!YB || "string" != typeof YB) return !1;
            if (!fz(YB, OB.url, OB.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(BB, OB) {
          return !!this._checkStepHref(BB, OB) && !!this._checkStepText(BB, OB) && !!this._checkStepSelector(BB, OB)
        }
        _checkStepHref(BB, OB) {
          var GB;
          if (!(null == OB ? void 0 : OB.href)) return !0;
          const YB = this._getElementsList(BB);
          if (YB.length > 0) return YB.some((BB => fz(BB.href, OB.href, OB.href_matching || "exact")));
          const DB = (null == BB || null === (GB = BB.properties) || void 0 === GB ? void 0 : GB.$elements_chain) || "";
          return !!DB && fz(function(BB) {
            const OB = BB.match(/(?::|")href="(.*?)"/);
            return OB ? OB[1] : ""
          }(DB), OB.href, OB.href_matching || "exact")
        }
        _checkStepText(BB, OB) {
          var GB;
          if (!(null == OB ? void 0 : OB.text)) return !0;
          const YB = this._getElementsList(BB);
          if (YB.length > 0) return YB.some((BB => fz(BB.text, OB.text, OB.text_matching || "exact") || fz(BB.$el_text, OB.text, OB.text_matching || "exact")));
          const DB = (null == BB || null === (GB = BB.properties) || void 0 === GB ? void 0 : GB.$elements_chain) || "";
          return !!DB && (QB = function(BB) {
            const OB = [],
              GB = /(?::|")text="(.*?)"/g;
            let YB;
            for (; !dG(YB = GB.exec(BB));) OB.includes(YB[1]) || OB.push(YB[1]);
            return OB
          }(DB), oB = OB.text, jB = OB.text_matching || "exact", QB.some((BB => fz(BB, oB, jB))));
          var QB, oB, jB
        }
        _checkStepSelector(BB, OB) {
          var GB, YB;
          if (!(null == OB ? void 0 : OB.selector)) return !0;
          const DB = null == BB || null === (GB = BB.properties) || void 0 === GB ? void 0 : GB.$element_selectors;
          if (null == DB ? void 0 : DB.includes(OB.selector)) return !0;
          const QB = (null == BB || null === (YB = BB.properties) || void 0 === YB ? void 0 : YB.$elements_chain) || "";
          if (OB.selector_regex && QB) try {
            return new RegExp(OB.selector_regex).test(QB)
          } catch (BB) {
            return !1
          }
          return !1
        }
        _getElementsList(BB) {
          var OB;
          return null == (null == BB || null === (OB = BB.properties) || void 0 === OB ? void 0 : OB.$elements) ? [] : null == BB ? void 0 : BB.properties.$elements
        }
        _checkStepProperties(BB, OB) {
          return !(null == OB ? void 0 : OB.properties) || 0 === OB.properties.length || DP(OB.properties.reduce(((BB, OB) => {
            const GB = WG(OB.value) ? OB.value.map(String) : null != OB.value ? [String(OB.value)] : [];
            return BB[OB.key] = {
              values: GB,
              operator: OB.operator || "exact"
            }, BB
          }), {}), null == BB ? void 0 : BB.properties)
        }
      },
      dz = class {
        constructor(BB, OB) {
          var GB, YB;
          this._pendingActivatedItems = [], this._instance = BB, this._onActivationChanged = OB, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (GB = this._instance) || void 0 === GB || null === (YB = GB.onSessionId) || void 0 === YB ? void 0 : YB.call(GB, (BB => this._onSessionIdChanged(BB)))
        }
        _shouldPersistArmedActivation(BB) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(BB) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(BB, OB) {
          return !!BB && DP(BB.propertyFilters, null == OB ? void 0 : OB.properties)
        }
        _buildEventToItemMap(BB, OB) {
          const GB = new Map;
          return BB.forEach((BB => {
            var YB;
            null === (YB = BB.conditions) || void 0 === YB || null === (YB = YB[OB]) || void 0 === YB || null === (YB = YB.values) || void 0 === YB || YB.forEach((OB => {
              if (null == OB ? void 0 : OB.name) {
                const YB = GB.get(OB.name) || [];
                YB.push(BB.id), GB.set(OB.name, YB)
              }
            }))
          })), GB
        }
        _getMatchingItems(BB, OB, GB) {
          const YB = (GB === RJ ? this._eventToItems : this._cancelEventToItems).get(BB);
          let DB = [];
          return this._getItems((BB => {
            DB = BB.filter((BB => null == YB ? void 0 : YB.includes(BB.id)))
          })), DB.filter((YB => {
            var DB;
            const QB = null === (DB = YB.conditions) || void 0 === DB || null === (DB = DB[GB]) || void 0 === DB || null === (DB = DB.values) || void 0 === DB ? void 0 : DB.find((OB => OB.name === BB));
            return this._doesEventMatchFilter(QB, OB)
          }))
        }
        register(BB) {
          this._register(BB, !1)
        }
        replace(BB) {
          this._register(BB, !0)
        }
        _register(BB, OB) {
          var GB;
          nG(null === (GB = this._instance) || void 0 === GB ? void 0 : GB._addCaptureHook) || (this._setupEventBasedItems(BB, OB), this._setupActionBasedItems(BB, OB))
        }
        _setupActionBasedItems(BB, OB) {
          const GB = BB.filter((BB => {
            var OB;
            return null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.actions) || void 0 === OB || null === (OB = OB.values) || void 0 === OB ? void 0 : OB.length
          }));
          var YB;
          if (OB && this._actionToItems.clear(), 0 === GB.length) return void(OB && (null === (YB = this._actionMatcher) || void 0 === YB || YB.replace([])));
          this._actionMatcher || (this._actionMatcher = new kz(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((BB => this.onAction(BB))));
          const DB = [];
          GB.forEach((BB => {
            var OB;
            null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.actions) || void 0 === OB || OB.values.forEach((OB => {
              if (DB.push(OB), OB.name) {
                var GB;
                const YB = null !== (GB = this._actionToItems.get(OB.name)) && void 0 !== GB ? GB : [];
                YB.includes(BB.id) || YB.push(BB.id), this._actionToItems.set(OB.name, YB)
              }
            }))
          })), OB ? this._actionMatcher.replace(DB) : this._actionMatcher.register(DB)
        }
        _mergeItemMaps(BB, OB) {
          OB.forEach(((OB, GB) => {
            var YB;
            const DB = null !== (YB = BB.get(GB)) && void 0 !== YB ? YB : [];
            OB.forEach((BB => {
              DB.includes(BB) || DB.push(BB)
            })), BB.set(GB, DB)
          }))
        }
        _setupEventBasedItems(BB, OB) {
          var GB, YB;
          const DB = BB.filter((BB => {
              var OB, GB;
              return (null === (OB = BB.conditions) || void 0 === OB ? void 0 : OB.events) && (null === (GB = BB.conditions) || void 0 === GB || null === (GB = GB.events) || void 0 === GB || null === (GB = GB.values) || void 0 === GB ? void 0 : GB.length) > 0
            })),
            QB = BB.filter((BB => {
              var OB, GB;
              return (null === (OB = BB.conditions) || void 0 === OB ? void 0 : OB.cancelEvents) && (null === (GB = BB.conditions) || void 0 === GB || null === (GB = GB.cancelEvents) || void 0 === GB || null === (GB = GB.values) || void 0 === GB ? void 0 : GB.length) > 0
            })),
            oB = this._buildEventToItemMap(BB, RJ),
            jB = this._buildEventToItemMap(BB, WJ);
          OB ? (this._eventToItems = oB, this._cancelEventToItems = jB) : (this._mergeItemMaps(this._eventToItems, oB), this._mergeItemMaps(this._cancelEventToItems, jB)), (0 !== DB.length || 0 !== QB.length || BB.some((BB => {
            var OB;
            return null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.actions) || void 0 === OB || null === (OB = OB.values) || void 0 === OB ? void 0 : OB.length
          }))) && (null !== (GB = this._captureHookUnsubscribe) && void 0 !== GB || (this._captureHookUnsubscribe = null === (YB = this._instance) || void 0 === YB ? void 0 : YB._addCaptureHook(((BB, OB) => {
            this.onEvent(BB, OB)
          }))))
        }
        onEvent(BB, OB) {
          var GB, YB;
          const DB = this._getLogger(),
            QB = (null == OB || null === (GB = OB.properties) || void 0 === GB ? void 0 : GB.$survey_id) || (null == OB || null === (YB = OB.properties) || void 0 === YB ? void 0 : YB.$product_tour_id);
          if (QB && this.getActivatedIds().includes(QB)) {
            const GB = this._activationOutcome(BB, QB, OB);
            if ("consume" === GB) return DB.info("event consumed activated item, removing it", {
              event: BB,
              itemId: QB
            }), void this._deactivateItems([QB]);
            if ("persist" === GB) return DB.info("shown item promoted to persisted activation", {
              event: BB,
              itemId: QB
            }), this._persistActivation(QB), void this._clearActivationTimestamps([QB])
          }
          if (this._cancelEventToItems.has(BB)) {
            const GB = this._getMatchingItems(BB, OB, WJ);
            GB.length > 0 && (DB.info("cancel event matched, cancelling items", {
              event: BB,
              itemsToCancel: GB.map((BB => BB.id))
            }), this._deactivateItems(GB.map((BB => BB.id))), GB.forEach((BB => this._cancelPendingItem(BB.id))))
          }
          if (!this._eventToItems.has(BB)) return;
          DB.info("event name matched", {
            event: BB,
            eventPayload: OB,
            items: this._eventToItems.get(BB)
          });
          const oB = this._getMatchingItems(BB, OB, RJ);
          this._activateItems(oB.map((BB => BB.id)))
        }
        onAction(BB) {
          this._actionToItems.has(BB) && this._activateItems(this._actionToItems.get(BB) || [])
        }
        _activateItems(BB) {
          var OB, GB;
          if (0 === BB.length) return;
          const YB = !!(null === (OB = this._instance) || void 0 === OB || null === (GB = OB.get_session_id) || void 0 === GB ? void 0 : GB.call(OB)),
            DB = [];
          for (const QB of BB) YB && this._shouldPersistArmedActivation(QB) ? this._persistActivation(QB) && this._recordActivationTimestamp(QB) : DB.push(QB);
          DB.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...DB])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(BB) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((OB => OB !== BB));
          const OB = this._getPersistedActivatedIds();
          return !OB.includes(BB) && (this._setActivatedItems([...OB, BB]), this._stampActivationSession(), !0)
        }
        _deactivateItems(BB) {
          const OB = new Set(BB);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((BB => !OB.has(BB)));
          const GB = this._getRawPersistedActivatedIds(),
            YB = GB.filter((BB => !OB.has(BB)));
          YB.length !== GB.length && (this._setActivatedItems(YB), 0 === YB.length && this._clearActivationSession()), this._clearActivationTimestamps(BB), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var BB;
            null === (BB = this._onActivationChanged) || void 0 === BB || BB.call(this)
          } catch (BB) {
            this._getLogger().error("Error while handling activated items change", BB)
          }
        }
        _getRawActivationTimestamps() {
          var BB;
          const OB = this._getActivationTimestampsKey();
          if (!OB) return {};
          const GB = null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB ? void 0 : BB.props[OB];
          return GB && "object" == typeof GB ? GB : {}
        }
        _recordActivationTimestamp(BB) {
          if (!this._getActivationTimestampsKey()) return;
          const OB = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(RD(RD({}, OB), {}, {
            [BB]: Date.now()
          }))
        }
        _clearActivationTimestamps(BB) {
          if (!this._getActivationTimestampsKey()) return;
          const OB = this._getRawActivationTimestamps(),
            GB = {};
          let YB = !1;
          for (const [DB, QB] of Object.entries(OB)) BB.includes(DB) ? YB = !0 : GB[DB] = QB;
          YB && (SG(GB) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(GB))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(BB) {
          if (!this._getPersistedActivatedIds().includes(BB)) return;
          const OB = this._getRawActivationTimestamps()[BB];
          return KG(OB) ? OB : void 0
        }
        _getRawPersistedActivatedIds() {
          var BB;
          const OB = this._getActivatedKey();
          return (null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB ? void 0 : BB.props[OB]) || []
        }
        _getPersistedActivatedIds() {
          var BB, OB, GB;
          const YB = this._getRawPersistedActivatedIds();
          if (0 === YB.length) return [];
          const DB = null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB ? void 0 : BB.props[this._getActivatedSessionKey()],
            QB = null === (OB = this._instance) || void 0 === OB || null === (GB = OB.get_session_id) || void 0 === GB ? void 0 : GB.call(OB);
          return QB && DB === QB ? YB : []
        }
        _stampActivationSession() {
          var BB, OB;
          const GB = null === (BB = this._instance) || void 0 === BB || null === (OB = BB.get_session_id) || void 0 === OB ? void 0 : OB.call(BB);
          GB && this._setActivatedSession(GB)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(BB) {
          var OB;
          const GB = null === (OB = this._instance) || void 0 === OB || null === (OB = OB.persistence) || void 0 === OB ? void 0 : OB.props[this._getActivatedSessionKey()];
          if (GB && GB !== BB) {
            const BB = this._getRawPersistedActivatedIds(),
              OB = this._getRawActivationTimestamps();
            BB.length > 0 && (this._setActivatedItems([]), BB.filter((BB => KG(OB[BB]))).forEach((BB => this._cancelPendingItem(BB)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), BB.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((BB => !this._isItemPermanentlyIneligible(BB)))
        }
        dispose() {
          var BB, OB, GB;
          null === (BB = this._sessionIdUnsubscribe) || void 0 === BB || BB.call(this), this._sessionIdUnsubscribe = void 0, null === (OB = this._captureHookUnsubscribe) || void 0 === OB || OB.call(this), this._captureHookUnsubscribe = void 0, null === (GB = this._actionMatcher) || void 0 === GB || GB.dispose(), this._actionMatcher = void 0
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
      Kz = class extends dz {
        constructor(BB, OB) {
          super(BB, OB)
        }
        _getActivatedKey() {
          return yO
        }
        _getActivatedSessionKey() {
          return JO
        }
        _getActivationTimestampsKey() {
          return MO
        }
        _writeActivationTimestamps(BB) {
          var OB;
          null === (OB = this._instance) || void 0 === OB || null === (OB = OB.persistence) || void 0 === OB || OB.register({
            $surveys_activated_timestamps: BB
          })
        }
        _clearActivationTimestampsStore() {
          var BB;
          null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB || BB.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(BB) {
          var OB;
          let GB;
          this._getItems((OB => {
            GB = OB.find((OB => OB.id === BB))
          }));
          const YB = null == GB || null === (OB = GB.appearance) || void 0 === OB ? void 0 : OB.surveyPopupDelaySeconds;
          return KG(YB) && YB > 0
        }
        _getShownEventName() {
          return nJ
        }
        _getItems(BB) {
          var OB;
          null === (OB = this._instance) || void 0 === OB || OB.getSurveys(BB)
        }
        _cancelPendingItem(BB) {
          var OB;
          null === (OB = this._instance) || void 0 === OB || OB.cancelPendingSurvey(BB)
        }
        _getLogger() {
          return PP
        }
        _setActivatedItems(BB) {
          var OB;
          null === (OB = this._instance) || void 0 === OB || null === (OB = OB.persistence) || void 0 === OB || OB.register({
            $surveys_activated: BB
          })
        }
        _setActivatedSession(BB) {
          var OB;
          null === (OB = this._instance) || void 0 === OB || null === (OB = OB.persistence) || void 0 === OB || OB.register({
            $surveys_activated_session: BB
          })
        }
        _clearActivatedSession() {
          var BB;
          null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB || BB.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(BB, OB, GB) {
          var YB;
          if (BB === fJ && !1 === (null == GB || null === (YB = GB.properties) || void 0 === YB ? void 0 : YB.$survey_completed)) return "ignore";
          let DB;
          return this._getItems((BB => {
            DB = BB.find((BB => BB.id === OB))
          })), !DB || function(BB) {
            var OB;
            return BP(BB) && !!(null === (OB = BB.conditions) || void 0 === OB || null === (OB = OB.events) || void 0 === OB ? void 0 : OB.repeatedActivation) || "always" === BB.schedule
          }(DB) ? BB === nJ ? "consume" : "ignore" : BB === nJ ? "persist" : BB === UJ || BB === fJ ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      uz = class {
        constructor(BB) {
          this._instance = BB
        }
        initialize() {}
        get(BB) {
          if ("string" == typeof BB) return this._instance.get_property(BB);
          const OB = {};
          for (const GB of BB) {
            const BB = this._instance.get_property(GB);
            nG(BB) || (OB[GB] = BB)
          }
          return OB
        }
        set(BB, OB) {
          this._instance.register("string" == typeof BB ? {
            [BB]: OB
          } : BB)
        }
        remove(BB) {
          "string" != typeof BB ? BB.forEach((BB => this._instance.unregister(BB))) : this._instance.unregister(BB)
        }
      },
      mz = class {
        constructor(BB) {
          this._instance = BB
        }
        get() {
          const BB = this._instance.config;
          return {
            disableSurveys: BB.disable_surveys,
            cookielessMode: !!BB.cookieless_mode,
            advancedEnableSurveys: BB.advanced_enable_surveys,
            requestTimeoutMs: BB.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const BB = null == jG ? void 0 : jG.__PosthogExtensions__;
          if (!BB) return;
          const {
            generateSurveys: OB,
            loadExternalDependency: GB
          } = BB;
          return {
            generateSurveys: OB ? BB => OB(this._instance, BB) : void 0,
            loadExternalDependency: GB ? BB => GB(this._instance, "surveys", BB) : void 0
          }
        }
        createEventReceiver(BB) {
          return new Kz(this._instance, BB)
        }
        onMatchingConditionsChanged(BB) {
          const OB = this._instance._addCaptureHook((OB => {
              "$pageview" !== OB && OB !== nJ && OB !== UJ && OB !== fJ || BB()
            })),
            GB = () => BB();
          vo(vO, "PHSurveyShown", GB);
          let YB = !1;
          const DB = this._instance.onFeatureFlags((() => {
            YB && BB()
          }));
          return YB = !0, () => {
            YB = !1, OB(), DB(), null == vO || vO.removeEventListener("PHSurveyShown", GB)
          }
        }
      };
    const Iz = (null == vO ? void 0 : vO.location) ? hy(vO.location.hash, "__posthog") || hy(location.hash, "state") : null,
      Fz = "_postHogToolbarParams",
      iz = wo("[Toolbar]"),
      Lz = wo("[FeatureFlags]"),
      gz = wo("[FeatureFlags]", {
        debugEnabled: !0
      }),
      rz = "\" failed. Feature flags didn't load in time.",
      Xz = [502, 504],
      wz = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      Ez = "connection_error",
      cz = BB => {
        const OB = {};
        for (let GB = 0; BB.length > GB; GB++) OB[BB[GB]] = !0;
        return OB
      },
      hz = BB => {
        const OB = {};
        for (const [GB, YB] of ao(BB || {})) YB && (OB[GB] = YB);
        return OB
      };
    var az = class {
      constructor(BB) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = Lz, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const BB = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, BB && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var BB, OB;
          const GB = this._refreshIntervalMs,
            YB = null !== (BB = this._dueRefreshIntervalMs) && void 0 !== BB ? BB : GB;
          nG(GB) || nG(YB) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (OB = this._lastRefreshAt) && void 0 !== OB ? OB : 0) < YB || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? GB : Math.min(2 * YB, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var BB;
          "visible" === (null === (BB = this._document) || void 0 === BB ? void 0 : BB.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = BB
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(BB) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (BB) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = BB, this._logger = BB.logger.createLogger("[FeatureFlags]"), Vz(BB.kv.initialize(), (() => {
          this._initializingClient === BB && (this._initializingClient = void 0, this._client = BB, this._finishSetup(BB))
        }))
      }
      _finishSetup(BB) {
        var OB;
        if (this._client === BB) return this._window && vo(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = BB.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (OB = this._crossTabPersistence) || void 0 === OB ? void 0 : OB.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var BB;
        const OB = this._config.refreshIntervalMs,
          GB = !this._config.remoteRequestsDisabled && this._document && !nG(OB) && OB > 0 ? OB : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = GB), GB !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), nG(GB) || (this._refreshIntervalMs = GB, this._dueRefreshIntervalMs = GB, this._scheduleNextRefresh(), (null === (BB = this._document) || void 0 === BB ? void 0 : BB.addEventListener) && (vo(this._document, VB, this._onVisibilityChange), Eo(wz, (BB => {
          vo(this._document, BB, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        nG(this._refreshIntervalMs) || (nG(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var BB, OB;
        nG(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (BB = this._document) || void 0 === BB || null === (OB = BB.removeEventListener) || void 0 === OB || OB.call(BB, "visibilitychange", this._onVisibilityChange), Eo(wz, (BB => {
          var OB, GB;
          null === (OB = this._document) || void 0 === OB || null === (GB = OB.removeEventListener) || void 0 === GB || GB.call(OB, BB, this._onUserInteraction, {
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
        var BB, OB, GB;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "rB"), this._settleReloads(this._activeReloads, "rB"), this._client && (this._clearDebouncer(), null === (BB = this._dynamicProperties) || void 0 === BB || BB.dispose(), this._dynamicProperties = void 0, null === (OB = this._crossTabPersistenceUnsubscribe) || void 0 === OB || OB.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (GB = this._window) || void 0 === GB || GB.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(BB) {
        var OB;
        return this._bootstrapState && BB in this._bootstrapState ? this._bootstrapState[BB] : null === (OB = this._client) || void 0 === OB ? void 0 : OB.kv.get(BB)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var BB;
        return !nG(null === (BB = this._client) || void 0 === BB ? void 0 : BB.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(BB) {
        this._persist((() => {
          var OB;
          return null === (OB = this._client) || void 0 === OB ? void 0 : OB.kv.set(BB)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(BB, OB, GB) {
        if (!this._crossTabPersistence || !BB.$enabled_feature_flags) return;
        const YB = this._prop("$enabled_feature_flags") || {},
          DB = BB.$enabled_feature_flags || {},
          QB = OB.flags || OB.featureFlags,
          oB = OB.flags ? Object.entries(OB.flags).filter((BB => {
            let [, OB] = BB;
            return !(null == OB ? void 0 : OB.failed)
          })).map((BB => {
            let [OB] = BB;
            return OB
          })) : [],
          JB = !!OB.errorsWhileComputingFlags && !!OB.flags,
          pB = JB ? oB : GB && !WG(QB) ? Object.keys(QB || {}) : Array.from(new Set([...Object.keys(YB), ...Object.keys(DB)])),
          qB = this._prop("$feature_flag_payloads") || {},
          ZB = BB.$feature_flag_payloads || {},
          NB = JB || GB ? pB : Array.from(new Set([...Object.keys(qB), ...Object.keys(ZB)])),
          WB = !JB && !GB,
          AB = !!WB || pB,
          VB = !!WB || NB,
          SB = {
            [jB]: AB,
            [lB]: AB,
            [RB]: VB
          };
        BB.$feature_flag_details && (SB[yB] = AB);
        for (const jB of [PB, MB, zB]) nG(BB[jB]) || (SB[jB] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(SB)
      }
      _remove(BB) {
        this._persist((() => {
          var OB;
          return null === (OB = this._client) || void 0 === OB ? void 0 : OB.kv.remove(BB)
        }))
      }
      _persist(BB) {
        try {
          BB()
        } catch (BB) {
          this._logger.error("Failed to update feature flag persistence", BB)
        }
      }
      _rebuildEventProperties() {
        const BB = {};
        for (const YB of [jB, RB, PB, WB]) {
          const OB = this._prop(YB);
          nG(OB) || (BB[YB] = OB)
        }
        this._baseEventProperties = BB;
        const OB = RD({}, BB),
          GB = this._prop(lB);
        if (GB)
          for (const [YB, DB] of Object.entries(GB)) OB[`$feature/${YB}`] = DB;
        this._eventPropertiesWithFlagValues = OB
      }
      _isCacheStale() {
        const BB = this._config.cacheTtlMs;
        if (!BB || 0 >= BB) return !1;
        const OB = this._prop(MB);
        return "number" != typeof OB || Date.now() - OB > BB
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const BB = this._config.evaluationContexts;
        return (null == BB ? void 0 : BB.length) ? BB.filter((BB => {
          const OB = BB && "string" == typeof BB && BB.trim().length > 0;
          return OB || this._logger.error("Invalid evaluation context found:", BB, "Expected non-empty string"), OB
        })) : []
      }
      _getValidFlagKeys() {
        const BB = this._config.flagKeys;
        if (!nG(BB)) return BB.filter((BB => {
          const OB = BB && "string" == typeof BB && BB.trim().length > 0;
          return OB || this._logger.error("Invalid flag key found:", BB, "Expected non-empty string"), OB
        }))
      }
      initialize() {
        var BB, OB;
        const GB = this._config,
          YB = null !== (BB = null === (OB = GB.bootstrap) || void 0 === OB ? void 0 : OB.featureFlags) && void 0 !== BB ? BB : {};
        if (Object.keys(YB).length) {
          var DB, QB;
          const BB = null !== (DB = null === (QB = GB.bootstrap) || void 0 === QB ? void 0 : QB.featureFlagPayloads) && void 0 !== DB ? DB : {},
            OB = Object.keys(YB).filter((BB => !nG(YB[BB]))).reduce(((BB, OB) => (BB[OB] = YB[OB], BB)), {}),
            oB = Object.keys(BB).filter((BB => OB[BB])).reduce(((OB, GB) => (OB[GB] = BB[GB], OB)), {});
          return this._receivedFeatureFlags({
            featureFlags: OB,
            featureFlagPayloads: oB
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(BB, OB, GB) {
        var YB, DB;
        const QB = (null == GB ? void 0 : GB.merge) && null !== (YB = this._prop("$enabled_feature_flags")) && void 0 !== YB ? YB : {},
          oB = (null == GB ? void 0 : GB.merge) && null !== (DB = this._prop("$feature_flag_payloads")) && void 0 !== DB ? DB : {},
          jB = RD(RD({}, QB), BB),
          yB = RD(RD({}, oB), OB),
          JB = {};
        for (const [MB, PB] of Object.entries(jB)) JB[MB] = {
          key: MB,
          enabled: lQ(PB),
          variant: pQ(PB),
          reason: void 0,
          metadata: nG(null == yB ? void 0 : yB[MB]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: yB[MB]
          }
        };
        this._receivedFeatureFlags({
          flags: JB
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const BB = this._prop(yB),
          OB = this._prop(WB),
          GB = this._prop(AB);
        if (!GB && !OB) return BB || {};
        const YB = ho({}, BB || {}),
          DB = [...new Set([...Object.keys(GB || {}), ...Object.keys(OB || {})])];
        for (const jB of DB) {
          var QB, oB;
          const BB = YB[jB],
            DB = null == OB ? void 0 : OB[jB],
            yB = nG(DB) ? null !== (QB = null == BB ? void 0 : BB.enabled) && void 0 !== QB && QB : !!DB,
            JB = nG(DB) ? null == BB ? void 0 : BB.variant : "string" == typeof DB ? DB : void 0,
            MB = null == GB ? void 0 : GB[jB],
            PB = RD(RD({}, BB), {}, {
              enabled: yB,
              variant: yB ? null != JB ? JB : null == BB ? void 0 : BB.variant : void 0
            });
          yB !== (null == BB ? void 0 : BB.enabled) && (PB.original_enabled = null == BB ? void 0 : BB.enabled), JB !== (null == BB ? void 0 : BB.variant) && (PB.original_variant = null == BB ? void 0 : BB.variant), MB && (PB.metadata = RD(RD({}, null == BB ? void 0 : BB.metadata), {}, {
            payload: MB,
            original_payload: null == BB || null === (oB = BB.metadata) || void 0 === oB ? void 0 : oB.payload
          })), YB[jB] = PB
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: BB,
          overriddenPayloads: GB,
          finalDetails: YB
        }), this._override_warning = !0), YB
      }
      getAllFeatureFlags() {
        const BB = this.getFlagVariants(),
          OB = this.getFlagPayloads();
        return Object.keys(BB).map((GB => {
          const YB = BB[GB];
          return {
            key: GB,
            enabled: lQ(YB),
            variant: pQ(YB),
            payload: zQ(OB[GB])
          }
        }))
      }
      getFlagVariants() {
        const BB = this._prop(lB),
          OB = this._prop(WB);
        if (!OB) return BB || {};
        const GB = ho({}, BB || {}),
          YB = Object.keys(OB);
        for (let DB = 0; YB.length > DB; DB++) GB[YB[DB]] = OB[YB[DB]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: BB,
          overriddenFlags: OB,
          finalFlags: GB
        }), this._override_warning = !0), GB
      }
      getFlagPayloads() {
        const BB = this._prop(RB),
          OB = this._prop(AB);
        if (!OB) return BB || {};
        const GB = ho({}, BB || {}),
          YB = Object.keys(OB);
        for (let DB = 0; YB.length > DB; DB++) GB[YB[DB]] = OB[YB[DB]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: BB,
          overriddenPayloads: OB,
          finalPayloads: GB
        }), this._override_warning = !0), GB
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((BB => {
          try {
            BB()
          } catch (BB) {
            this._logger.error("Error while running feature flags reloading callback", BB)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((BB => {
          this._pendingReloads.add(BB), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(BB, OB) {
        BB.forEach((BB => BB({
          status: OB
        }))), BB.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(BB) {
        return this._reloadingHandlers.push(BB), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((OB => OB !== BB))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(BB) {
        this.$anon_distinct_id = BB
      }
      setReloadingPaused(BB) {
        this._reloadingDisabled = BB
      }
      resetFlagCallReported() {
        this._remove(ZB)
      }
      _callFlagsEndpoint(BB) {
        var OB;
        this._clearDebouncer();
        const GB = this._client;
        if (!GB || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const YB = {
          token: GB.projectToken,
          distinct_id: GB.distinctId,
          groups: GB.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: RD(RD(RD({}, GB.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: GB.library.name,
            $lib_version: GB.library.version
          }),
          group_properties: this._prop(pB),
          timezone: iy()
        };
        nG(GB.deviceId) || (YB.$device_id = GB.deviceId), ((null == BB ? void 0 : BB.disableFlags) || this._config.featureFlagsDisabled) && (YB.disable_flags = !0);
        const DB = this._getValidEvaluationEnvironments();
        DB.length && (YB.evaluation_contexts = DB);
        const QB = this._getValidFlagKeys();
        nG(QB) || (YB.flag_keys = QB);
        const oB = this._config.onlyEvaluateSurveyFeatureFlags,
          jB = "/flags/?v=2" + (oB ? "&only_evaluate_survey_feature_flags=true" : ""),
          yB = this._requestGeneration,
          MB = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = MB, this._requestInFlight = !0;
        const PB = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          zB = BB => {
            var OB, GB;
            const DB = null !== (OB = BB.json) && void 0 !== OB ? OB : {},
              QB = 200 !== BB.statusCode;
            if (this._requestInFlight = !1, yB !== this._requestGeneration) return void PB();
            if (this._trackStatusZeroReachability(BB.statusCode), QB || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), YB.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(MB, "skipped");
            this._flagsLoadedFromRemote = !QB;
            const jB = [];
            BB.error ? jB.push(BB.error instanceof Error && "AbortError" === BB.error.name ? "timeout" : BB.error instanceof Error ? Ez : "unknown_error") : 200 !== BB.statusCode && jB.push(`api_error_${BB.statusCode}`), DB.errorsWhileComputingFlags && jB.push("errors_while_computing_flags");
            const zB = !!(null === (GB = DB.quotaLimited) || void 0 === GB ? void 0 : GB.includes("feature_flags"));
            zB && jB.push("quota_limited"), this._set({
              [JB]: jB
            }), zB ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : YB.disable_flags || this._receivedFeatureFlags(DB, QB, {
              partialResponse: oB
            }), this._settleReloads(MB, YB.disable_flags ? "skipped" : jB.length || !DB.flags && !DB.featureFlags ? "error" : "loaded"), PB()
          },
          lB = BB => {
            this._requestInFlight = !1, yB === this._requestGeneration ? (this._set({
              [JB]: [Ez]
            }), this._logger.error("Feature flag request failed", BB), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(MB, "error"), PB()) : PB()
          };
        let qB = null !== (OB = this._config.requestMaxRetries) && void 0 !== OB ? OB : 1;
        const ZB = () => qB > 0 && yB === this._requestGeneration,
          NB = () => {
            if (yB !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(MB, "skipped"), void PB();
            try {
              GB.sendRequest(jB, {
                target: "flags",
                method: "POST",
                body: YB,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((BB => {
                if ((BB => Xz.includes(BB.statusCode) || (BB => 0 === BB.statusCode && BB.error instanceof Error && "AbortError" === BB.error.name)(BB))(BB) && ZB()) return qB--, void setTimeout(NB, 500);
                zB(BB)
              })).catch(lB)
            } catch (BB) {
              lB(BB)
            }
          };
        NB()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return gy(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(BB) {
        this._consecutiveStatusZeroFailures = ry(BB, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var GB;
        if (OB.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + BB + rz);
        if (this._checkAndTriggerStaleRefresh()) return;
        const YB = this.getFeatureFlagResult(BB, OB);
        return null !== (GB = null == YB ? void 0 : YB.variant) && void 0 !== GB ? GB : null == YB ? void 0 : YB.enabled
      }
      getFeatureFlagDetails(BB) {
        return this.getFlagsWithDetails()[BB]
      }
      getFeatureFlagPayload(BB) {
        const OB = this.getFeatureFlagResult(BB, {
          send_event: !1
        });
        return null == OB ? void 0 : OB.payload
      }
      getFeatureFlagResult(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (OB.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + BB + rz);
        if (this._checkAndTriggerStaleRefresh()) return;
        const GB = this.getFlagVariants(),
          YB = BB in GB,
          DB = GB[BB],
          QB = this.getFlagPayloads()[BB],
          oB = String(DB),
          jB = this._prop("$feature_flag_request_id") || void 0,
          yB = this._prop("$feature_flag_evaluated_at") || void 0;
        let JB, MB = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var PB;
          const BB = null === (PB = this._client) || void 0 === PB || null === (PB = PB.session) || void 0 === PB ? void 0 : PB.sessionId,
            OB = this._prop(NB);
          BB && BB !== OB && (MB = {}, JB = BB)
        }
        if (!OB.send_event && "send_event" in OB) JB && this._set({
          [ZB]: MB,
          [NB]: JB
        });
        else if (BB in MB && MB[BB].includes(oB)) JB && this._set({
          [ZB]: MB,
          [NB]: JB
        });
        else {
          var zB, lB, pB, qB, RB, WB, AB, VB, SB, nB, UB, fB, kB;
          WG(MB[BB]) ? MB[BB].push(oB) : MB[BB] = [oB], this._set(RD({
            [ZB]: MB
          }, JB ? {
            [NB]: JB
          } : {}));
          const OB = this.getFeatureFlagDetails(BB),
            GB = [...null !== (zB = this._prop("$feature_flag_errors")) && void 0 !== zB ? zB : []];
          nG(DB) && GB.push("flag_missing");
          const YB = {
            $feature_flag: BB,
            $feature_flag_response: DB,
            $feature_flag_payload: null != QB ? QB : null,
            $feature_flag_request_id: jB,
            $feature_flag_evaluated_at: yB,
            $feature_flag_bootstrapped_response: null !== (lB = null === (pB = this._config.bootstrap) || void 0 === pB || null === (pB = pB.featureFlags) || void 0 === pB ? void 0 : pB[BB]) && void 0 !== lB ? lB : null,
            $feature_flag_bootstrapped_payload: null !== (qB = null === (RB = this._config.bootstrap) || void 0 === RB || null === (RB = RB.featureFlagPayloads) || void 0 === RB ? void 0 : RB[BB]) && void 0 !== qB ? qB : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          nG(null == OB || null === (WB = OB.metadata) || void 0 === WB ? void 0 : WB.has_experiment) || (YB.$feature_flag_has_experiment = OB.metadata.has_experiment), nG(null == OB || null === (AB = OB.metadata) || void 0 === AB ? void 0 : AB.version) || (YB.$feature_flag_version = OB.metadata.version);
          const PB = null !== (VB = null == OB || null === (SB = OB.reason) || void 0 === SB ? void 0 : SB.description) && void 0 !== VB ? VB : null == OB || null === (nB = OB.reason) || void 0 === nB ? void 0 : nB.code;
          PB && (YB.$feature_flag_reason = PB), (null == OB || null === (UB = OB.metadata) || void 0 === UB ? void 0 : UB.id) && (YB.$feature_flag_id = OB.metadata.id), nG(null == OB ? void 0 : OB.original_variant) && nG(null == OB ? void 0 : OB.original_enabled) || (YB.$feature_flag_original_response = nG(OB.original_variant) ? OB.original_enabled : OB.original_variant), (null == OB || null === (fB = OB.metadata) || void 0 === fB ? void 0 : fB.original_payload) && (YB.$feature_flag_original_payload = null == OB || null === (kB = OB.metadata) || void 0 === kB ? void 0 : kB.original_payload), GB.length && (YB.$feature_flag_error = GB.join(",")), this._captureFeatureFlagCalled(YB)
        }
        return YB ? {
          key: BB,
          enabled: !!DB,
          variant: "string" == typeof DB ? DB : void 0,
          payload: zQ(QB)
        } : void 0
      }
      _captureFeatureFlagCalled(BB) {
        try {
          var OB;
          null === (OB = this._client) || void 0 === OB || OB.capture("$feature_flag_called", BB)
        } catch (BB) {
          this._logger.error("Failed to capture feature flag call", BB)
        }
      }
      getRemoteConfigPayload(BB, OB) {
        this._getRemoteConfigPayload(BB, OB)
      }
      _getRemoteConfigPayload(BB, OB) {
        var GB = this;
        return aG((function*() {
          const YB = GB._client;
          if (!YB) return;
          const DB = {
              distinct_id: YB.distinctId,
              token: YB.projectToken,
              person_properties: {
                $lib: YB.library.name,
                $lib_version: YB.library.version
              }
            },
            QB = GB._getValidEvaluationEnvironments();
          QB.length && (DB.evaluation_contexts = QB);
          const oB = GB._getValidFlagKeys();
          let jB;
          nG(oB) || (DB.flag_keys = oB);
          try {
            var yB;
            const OB = null === (yB = (yield YB.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: DB,
              compression: GB._config.compression,
              sentAt: "body",
              timeoutMs: GB._config.requestTimeoutMs
            })).json) || void 0 === yB ? void 0 : yB.featureFlagPayloads;
            jB = (null == OB ? void 0 : OB[BB]) || void 0
          } catch (BB) {
            return void GB._logger.error("Remote config feature flag request failed", BB)
          }
          try {
            OB(jB)
          } catch (BB) {
            GB._logger.error("Remote config feature flag callback failed", BB)
          }
        }))()
      }
      isFeatureEnabled(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (OB.fresh && !this._flagsLoadedFromRemote) return OB.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + BB + rz), OB.defaultValue;
        const GB = this.getFeatureFlag(BB, OB);
        return nG(GB) ? OB.defaultValue : !!GB
      }
      addFeatureFlagsHandler(BB) {
        this.featureFlagEventHandlers.push(BB)
      }
      removeFeatureFlagsHandler(BB) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((OB => OB !== BB))
      }
      receivedFeatureFlags(BB, OB, GB) {
        this._receivedFeatureFlags(BB, OB, GB)
      }
      _receivedFeatureFlags(BB, OB, GB) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const YB = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            DB = arguments.length > 4 ? arguments[4] : void 0,
            QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Lz;
          const oB = ((BB, OB) => {
              const GB = BB.flags;
              if (GB) {
                const OB = Object.fromEntries(Object.keys(GB).map((BB => {
                    var OB;
                    return [BB, null !== (OB = GB[BB].variant) && void 0 !== OB ? OB : GB[BB].enabled]
                  }))),
                  YB = Object.fromEntries(Object.keys(GB).filter((BB => GB[BB].enabled)).filter((BB => {
                    var OB;
                    return !nG(null === (OB = GB[BB].metadata) || void 0 === OB ? void 0 : OB.payload)
                  })).map((BB => {
                    var OB;
                    return [BB, null === (OB = GB[BB].metadata) || void 0 === OB ? void 0 : OB.payload]
                  })));
                return RD(RD({}, BB), {}, {
                  featureFlags: OB,
                  featureFlagPayloads: YB
                })
              }
              return BB.featureFlags && OB.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), BB
            })(BB, QB),
            JB = oB.flags,
            pB = oB.featureFlags,
            qB = oB.featureFlagPayloads;
          if (!pB) return;
          const ZB = BB.requestId,
            NB = BB.evaluatedAt;
          if (WG(pB)) {
            QB.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const BB = {};
            if (pB)
              for (let OB = 0; pB.length > OB; OB++) BB[pB[OB]] = !0;
            return {
              [jB]: pB,
              [lB]: BB,
              [zB]: !1
            }
          }
          let WB = pB,
            AB = qB,
            VB = JB;
          if (null == DB ? void 0 : DB.partialResponse) {
            const BB = Object.keys(WB),
              DB = AB || {};
            WB = RD(RD({}, OB), WB), AB = RD(RD({}, GB), DB), BB.forEach((BB => {
              BB in DB || null == AB || delete AB[BB]
            })), VB = RD(RD({}, YB), VB)
          } else if (BB.errorsWhileComputingFlags)
            if (JB) {
              const BB = new Set(Object.keys(JB).filter((BB => {
                var OB;
                return !(null === (OB = JB[BB]) || void 0 === OB ? void 0 : OB.failed)
              })));
              WB = RD(RD({}, OB), Object.fromEntries(Object.entries(WB).filter((OB => {
                let [GB] = OB;
                return BB.has(GB)
              }))));
              const DB = Object.fromEntries(Object.entries(AB || {}).filter((OB => {
                let [GB] = OB;
                return BB.has(GB)
              })));
              AB = RD(RD({}, GB), DB), BB.forEach((BB => {
                BB in DB || null == AB || delete AB[BB]
              })), VB = RD(RD({}, YB), Object.fromEntries(Object.entries(VB || {}).filter((OB => {
                let [GB] = OB;
                return BB.has(GB)
              }))))
            } else WB = RD(RD({}, OB), WB), AB = RD(RD({}, GB), AB), VB = RD(RD({}, YB), VB);
          return RD(RD({
            [jB]: Object.keys(hz(WB)),
            [lB]: WB || {},
            [RB]: AB || {},
            [yB]: VB || {},
            [zB]: !0 === BB.minimalFlagCalledEvents
          }, ZB ? {
            [PB]: ZB
          } : {}), NB ? {
            [MB]: NB
          } : {})
        }(BB, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), GB, this._logger);
        if (YB)
          if (!1 === (null == GB ? void 0 : GB.persist)) {
            const BB = !nG(this._client.kv.get(lB));
            this._bootstrapState = YB, BB || this._set(YB)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(YB, BB, !!(null == GB ? void 0 : GB.partialResponse)), this._set(YB);
        else OB && this._fallBackToPersistedFlags();
        OB || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(OB)
      }
      override(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: BB,
          suppressWarning: OB
        })
      }
      overrideFeatureFlags(BB) {
        this._overrideFeatureFlags(BB)
      }
      _overrideFeatureFlags(BB) {
        if (this._client) {
          if (!1 === BB) return this._remove([WB, AB]), this._fireFeatureFlagsCallbacks(), void gz.info("All overrides cleared");
          if (WG(BB)) return this._set({
            [WB]: cz(BB)
          }), this._fireFeatureFlagsCallbacks(), void gz.info("Flag overrides set", {
            flags: BB
          });
          if (BB && "object" == typeof BB && ("flags" in BB || "payloads" in BB)) {
            var OB;
            const GB = BB;
            this._override_warning = Boolean(null !== (OB = GB.suppressWarning) && void 0 !== OB && OB);
            const YB = {},
              DB = GB.flags,
              QB = GB.payloads;
            return DB && (YB[WB] = WG(DB) ? cz(DB) : DB), QB && (YB[AB] = QB), Object.keys(YB).length && this._set(YB), !1 === DB && !1 === QB ? this._remove([WB, AB]) : !1 === DB ? this._remove(WB) : !1 === QB && this._remove(AB), this._fireFeatureFlagsCallbacks(), !1 === DB ? gz.info("Flag overrides cleared") : DB && gz.info("Flag overrides set", {
              flags: DB
            }), void(!1 === QB ? gz.info("Payload overrides cleared") : QB && gz.info("Payload overrides set", {
              payloads: QB
            }))
          }
          if (BB && "object" == typeof BB) return this._set({
            [WB]: BB
          }), this._fireFeatureFlagsCallbacks(), void gz.info("Flag overrides set", {
            flags: BB
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: BB
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(BB) {
        if (this.addFeatureFlagsHandler(BB), this._hasLoadedFlags) {
          const {
            flags: OB,
            flagVariants: GB
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            BB(OB, GB)
          } catch (BB) {
            this._logger.error("Error while running feature flags callback", BB)
          }
        }
        return () => this.removeFeatureFlagsHandler(BB)
      }
      updateEarlyAccessFeatureEnrollment(BB, OB, GB) {
        var YB;
        const DB = (this._prop("$early_access_features") || []).find((OB => OB.flagKey === BB)),
          QB = {
            [`$feature_enrollment/${BB}`]: OB
          },
          oB = {
            $feature_flag: BB,
            $feature_enrollment: OB,
            $set: QB
          };
        DB && (oB.$early_access_feature_name = DB.name), GB && (oB.$feature_enrollment_stage = GB);
        const yB = RD(RD({}, this.getFlagVariants()), {}, {
          [BB]: OB
        });
        null === (YB = this._crossTabPersistence) || void 0 === YB || YB.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [BB],
          $enabled_feature_flags: [BB],
          $stored_person_properties: Object.keys(QB)
        }), this._set({
          [jB]: Object.keys(hz(yB)),
          [lB]: yB,
          [qB]: RD(RD({}, this._prop("$stored_person_properties") || {}), QB)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var JB;
          null === (JB = this._client) || void 0 === JB || JB.capture("$feature_enrollment_update", oB)
        } catch (BB) {
          this._logger.error("Failed to capture early access feature enrollment", BB)
        }
      }
      getEarlyAccessFeatures(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = this._prop(oB);
        !YB || OB ? this._getEarlyAccessFeatures(BB, GB) : BB(YB)
      }
      _getEarlyAccessFeatures(BB, OB) {
        var GB = this;
        return aG((function*() {
          const YB = GB._client;
          if (!YB) return;
          const DB = OB ? `&${OB.map((BB=>`stage=${BB}`)).join("&")}` : "";
          let QB;
          try {
            const BB = yield YB.sendRequest(`/api/early_access_features/?token=${YB.projectToken}${DB}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!BB.json) return;
            QB = BB.json.earlyAccessFeatures, GB._set({
              [oB]: QB
            })
          } catch (BB) {
            return void GB._logger.error("Early access feature request failed", BB)
          }
          try {
            BB(QB)
          } catch (BB) {
            GB._logger.error("Early access feature callback failed", BB)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const BB = this.getFlags(),
          OB = this.getFlagVariants();
        return {
          flags: BB.filter((BB => OB[BB])),
          flagVariants: Object.keys(OB).filter((BB => OB[BB])).reduce(((BB, GB) => (BB[GB] = OB[GB], BB)), {})
        }
      }
      _fireFeatureFlagsCallbacks(BB) {
        this._rebuildEventProperties();
        const {
          flags: OB,
          flagVariants: GB
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((YB => {
          try {
            YB(OB, GB, {
              errorsLoading: BB
            })
          } catch (BB) {
            this._logger.error("Error while running feature flags callback", BB)
          }
        }))
      }
      setPersonPropertiesForFlags(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(BB, OB)
      }
      _setPersonPropertiesForFlags(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this._prop("$stored_person_properties") || {},
          YB = (null == BB ? void 0 : BB.$set) || ((null == BB ? void 0 : BB.$set_once) ? {} : BB),
          DB = null == BB ? void 0 : BB.$set_once,
          QB = {};
        if (DB)
          for (const oB in DB)({}).hasOwnProperty.call(DB, oB) && (oB in GB || (QB[oB] = DB[oB]));
        this._set({
          [qB]: RD(RD(RD({}, GB), QB), YB)
        }), OB && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = RD({}, this._prop("$stored_person_properties") || {});
        BB.forEach((BB => {
          delete GB[BB]
        })), this._set({
          [qB]: GB
        }), OB && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(qB), BB && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = this._prop("$stored_group_properties") || {},
          YB = RD({}, GB);
        for (const DB of Object.keys(BB)) YB[DB] = RD(RD({}, GB[DB]), BB[DB]);
        this._set({
          [pB]: YB
        }), OB && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(BB) {
        if (BB) {
          const OB = this._prop("$stored_group_properties") || {};
          this._set({
            [pB]: RD(RD({}, OB), {}, {
              [BB]: {}
            })
          })
        } else this._remove(pB)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "rB"), this._settleReloads(this._activeReloads, "rB"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const ez = wo("[FeatureFlags]");
    var Tz = class {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(BB, OB)
      }
      update(BB, OB) {
        this._snapshot = ((BB, OB) => {
          var GB, YB, DB, QB, oB, jB, yB, JB;
          return {
            bootstrap: {
              featureFlags: null !== (GB = null === (YB = BB.bootstrap) || void 0 === YB ? void 0 : YB.featureFlags) && void 0 !== GB ? GB : void 0,
              featureFlagPayloads: null !== (DB = null === (QB = BB.bootstrap) || void 0 === QB ? void 0 : QB.featureFlagPayloads) && void 0 !== DB ? DB : void 0
            },
            remoteRequestsDisabled: OB,
            featureFlagsDisabled: !!BB.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!BB.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!BB.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: BB.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (oB = BB.remote_config_refresh_interval_ms) && void 0 !== oB ? oB : 3e5,
            idleRefreshBackoff: nG(BB.remote_config_refresh_interval_ms),
            requestTimeoutMs: BB.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (jB = BB.feature_flag_request_max_retries) && void 0 !== jB ? jB : 1),
            compression: BB.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (yB = null !== (JB = BB.evaluation_contexts) && void 0 !== JB ? JB : BB.evaluation_environments) && void 0 !== yB ? yB : [],
            flagKeys: WG(BB.flag_keys) ? BB.flag_keys : void 0
          }
        })(BB, OB), !BB.evaluation_environments || BB.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (ez.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), nG(BB.flag_keys) || WG(BB.flag_keys) || ez.error("Invalid flag_keys found:", BB.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const bz = BB => gG(BB) && ("RangeError" === BB.name && 0 === BB.message.indexOf("Maximum call stack size exceeded") || "InternalError" === BB.name && "too much recursion" === BB.message),
      Cz = wo("[Error tracking]"),
      Hz = "webkit-masked-url:",
      vz = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      sz = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", Hz],
      xz = ["__firefox__", "__gCrWeb"],
      tz = "Refusing to render web experiment since the viewer is a likely bot",
      Bl = {
        icontains: (BB, OB) => OB.toLowerCase().indexOf(BB.toLowerCase()) > -1,
        not_icontains: (BB, OB) => -1 === OB.toLowerCase().indexOf(BB.toLowerCase()),
        regex: (BB, OB) => OP(OB, BB),
        not_regex: (BB, OB) => !OP(OB, BB),
        exact: (BB, OB) => OB === BB,
        is_not: (BB, OB) => OB !== BB
      },
      Ol = wo("[Conversations]"),
      Gl = "Conversations not available yet.";

    function Yl(BB, OB) {
      var GB, YB, DB, QB, oB, jB, yB;
      const JB = null !== (GB = null == BB ? void 0 : BB.flushIntervalMs) && void 0 !== GB ? GB : 3e3,
        MB = null !== (YB = null == BB ? void 0 : BB.maxBufferSize) && void 0 !== YB ? YB : 100,
        PB = (null == OB ? void 0 : OB.consoleCapture) ? void 0 : null !== (DB = null == BB ? void 0 : BB.maxLogsPerInterval) && void 0 !== DB ? DB : 1e3,
        zB = nG(PB) ? Math.max(MB, 2048) : Math.max(MB, PB),
        lB = RD(RD({}, function() {
          let BB = "",
            OB = "";
          try {
            var GB;
            const YB = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              DB = null == YB || null === (GB = YB.navigator) || void 0 === GB ? void 0 : GB.userAgent;
            DB && ([BB, OB] = vY(DB))
          } catch (BB) {}
          return function(BB, OB) {
            const GB = function(BB) {
              if (BB) return {}.hasOwnProperty.call(Ao, BB) ? Ao[BB] : BB
            }(BB);
            return RD(RD({}, GB ? {
              "os.name": GB
            } : {}), OB ? {
              "os.version": OB
            } : {})
          }(BB, OB)
        }()), null == BB ? void 0 : BB.resourceAttributes);
      return {
        serviceName: null !== (QB = null !== (oB = null == lB ? void 0 : lB["service.name"]) && void 0 !== oB ? oB : null == BB ? void 0 : BB.serviceName) && void 0 !== QB ? QB : null == OB ? void 0 : OB.serviceNameDefault,
        serviceVersion: null !== (jB = null == lB ? void 0 : lB["service.version"]) && void 0 !== jB ? jB : null == BB ? void 0 : BB.serviceVersion,
        environment: null !== (yB = null == lB ? void 0 : lB["deployment.environment"]) && void 0 !== yB ? yB : null == BB ? void 0 : BB.environment,
        resourceAttributes: lB,
        beforeSend: null == BB ? void 0 : BB.beforeSend,
        flushIntervalMs: JB,
        maxBufferSize: MB,
        maxQueueSize: zB,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: JB,
        maxLogsPerInterval: PB,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const Dl = ["debug", "log", "warn", "error", "info"],
      Ql = BB => {
        for (; null == BB ? void 0 : BB.__rrweb_original__;) BB = BB.__rrweb_original__;
        return BB
      },
      ol = "console",
      jl = "__posthogHandledLogsRequestError",
      yl = (BB, OB) => {
        const GB = BB instanceof Error ? BB : new Error(OB);
        return GB[jl] = !0, GB
      },
      Jl = BB => !!BB && "object" == typeof BB && !0 === BB[jl];
    var Ml = class {
      get _coreLogger() {
        var BB = this;
        return RD(RD({}, this._logger), {}, {
          error: function() {
            for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
            GB.some(Jl) || BB._logger.error(...GB)
          }
        })
      }
      constructor(BB, OB) {
        var GB;
        this._configSource = BB, this._getSdkContext = OB, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = wo("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var BB, OB;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (BB = this._core) || void 0 === BB || BB.onReconnect(), null === (OB = this._consoleCore) || void 0 === OB || OB.onReconnect())
        }, this._isLogsEnabled = !!(null === (GB = BB.get()) || void 0 === GB ? void 0 : GB.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (YB) {
            this._window = void 0
          }
          this._window && (vo(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(BB, OB, GB, YB) {
        this._listenForReconnect();
        const DB = Yl(this._configSource.get(), GB);
        return [new Io(this._createHost(BB, OB), DB, this._coreLogger, (() => this._getSdkContext()), (BB => BB()), void 0, YB), DB]
      }
      _getCore() {
        const BB = this._configSource.get();
        var OB;
        return this._core && this._resolvedFrom === BB || (null === (OB = this._core) || void 0 === OB || OB.reset(), this._resolvedFrom = BB, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (BB => {
          this._queue = BB
        }))), this._core
      }
      _getConsoleCore() {
        const BB = this._configSource.get();
        var OB;
        return this._consoleCore && this._consoleResolvedFrom === BB || (null === (OB = this._consoleCore) || void 0 === OB || OB.reset(), this._consoleResolvedFrom = BB, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (BB => {
          this._consoleQueue = BB
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, ol)), this._consoleCore
      }
      setup(BB) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = BB, this._logger = BB.logger.createLogger("[logs]"), Vz(BB.kv.initialize(), (() => {
          this._disposed || this._finishSetup(BB)
        }))
      }
      _finishSetup(BB) {
        var OB;
        this._listenForReconnect(), (null === (OB = this._configSource.get()) || void 0 === OB ? void 0 : OB.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && BB.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let GB = !1;
        const YB = BB.onRemoteConfig((BB => {
          var OB;
          GB = BB.ok && !0 === (null === (OB = BB.config.logs) || void 0 === OB ? void 0 : OB.captureConsoleLogs), this.onRemoteConfig(BB)
        }));
        this._disposed ? YB.dispose() : (this._remoteConfigSubscription = YB, GB || this.loadIfEnabled())
      }
      dispose() {
        var BB, OB, GB, YB, DB, QB, oB;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (BB = this._remoteConfigSubscription) || void 0 === BB || BB.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (OB = this._window) || void 0 === OB || OB.removeEventListener("online", this._onReconnect), null === (GB = this._consoleLogsDispose) || void 0 === GB || GB.call(this), this._consoleLogsDispose = void 0, null === (YB = this._core) || void 0 === YB || YB.clearQueue(), null === (DB = this._consoleCore) || void 0 === DB || DB.clearQueue(), null === (QB = this._core) || void 0 === QB || QB.reset(), null === (oB = this._consoleCore) || void 0 === oB || oB.reset())
      }
      onRemoteConfig(BB) {
        var OB, GB;
        if (this._disposed) return;
        const YB = BB.ok ? null === (OB = BB.config.logs) || void 0 === OB ? void 0 : OB.captureConsoleLogs : void 0;
        dG(YB) ? this._stopRecorderStartedByPersistedHint() : (null === (GB = this._client) || void 0 === GB || GB.kv.set(this._configSource.captureHintKey, !!YB), YB ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var BB, OB, GB, YB;
        this._stopConsoleRecorder(), null === (BB = this._core) || void 0 === BB || BB.clearQueue(), this._queue = [], null === (OB = this._core) || void 0 === OB || OB.reset(), null === (GB = this._consoleCore) || void 0 === GB || GB.clearQueue(), this._consoleQueue = [], null === (YB = this._consoleCore) || void 0 === YB || YB.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(BB) {
        !this._disposed && this._client && this._getCore().captureLog(BB)
      }
      captureConsoleLog(BB) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(BB)
      }
      captureBufferedConsoleLog(BB, OB, GB) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(BB, {
          context: OB,
          occurredAtMs: GB
        })
      }
      _onOptOut() {
        var BB;
        this._stopConsoleRecorder(), null === (BB = this._consoleCore) || void 0 === BB || BB.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var BB, OB = this;
        if (this._isRecordingConsole || !(null === (BB = this._window) || void 0 === BB ? void 0 : BB.console)) return;
        const GB = Yl(this._configSource.get()).maxBufferSize;
        let YB = !0;
        this._consoleRecorderUnpatchers.push((() => {
          YB = !1
        }));
        for (const DB of Dl) {
          let QB;
          try {
            QB = Ql(this._window.console[DB])
          } catch (BB) {
            continue
          }
          QB && this._consoleRecorderUnpatchers.push(Yz(this._window.console, DB, (BB => {
            const oB = function() {
              for (var QB = arguments.length, oB = new Array(QB), jB = 0; jB < QB; jB++) oB[jB] = arguments[jB];
              try {
                YB && OB._recordConsoleEntry(DB, oB, GB)
              } catch (DB) {}
              return BB.apply(OB._window.console, oB)
            };
            return oB.__rrweb_original__ = QB, oB
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(BB, OB, GB) {
        var YB;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== OB.length)
          if (null === (YB = this._client) || void 0 === YB ? void 0 : YB.canCapture) {
            if (GB > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: BB,
                  args: OB,
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
          for (const BB of this._consoleRecorderUnpatchers) BB();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const BB = this._consoleBuffer;
        return this._stopConsoleRecorder(), BB
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (BB, OB) => this.captureLog({
            body: BB,
            level: "trace",
            attributes: OB
          }),
          debug: (BB, OB) => this.captureLog({
            body: BB,
            level: "debug",
            attributes: OB
          }),
          info: (BB, OB) => this.captureLog({
            body: BB,
            level: "info",
            attributes: OB
          }),
          warn: (BB, OB) => this.captureLog({
            body: BB,
            level: "warn",
            attributes: OB
          }),
          error: (BB, OB) => this.captureLog({
            body: BB,
            level: "error",
            attributes: OB
          }),
          fatal: (BB, OB) => this.captureLog({
            body: BB,
            level: "fatal",
            attributes: OB
          })
        }), this._capture_logger
      }
      flushLogs(BB) {
        this._client && (BB ? this._flushViaTransport(BB) : (this._core && this._core.flush().catch((BB => this._logFlushError(BB))), this._consoleCore && this._consoleCore.flush().catch((BB => this._logFlushError(BB)))))
      }
      flush() {
        var BB = this;
        return aG((function*() {
          var OB, GB;
          const YB = null === (OB = BB._core) || void 0 === OB ? void 0 : OB.flush().catch((OB => BB._logFlushError(OB))),
            DB = null === (GB = BB._consoleCore) || void 0 === GB ? void 0 : GB.flush().catch((OB => BB._logFlushError(OB)));
          yield YB, yield DB
        }))()
      }
      _logFlushError(BB) {
        Jl(BB) || this._logger.error("PostHog logs flush failed:", BB)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const BB = this._getConsoleLoader();
        if (BB) {
          this._isLoading = !0;
          try {
            BB(((BB, OB) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (BB || !OB) this._logger.error("Could not load logs script", BB), this._stopConsoleRecorder();
                else {
                  const BB = this._takeConsoleBuffer();
                  this._consoleLogsDispose = OB.initialize(this._client), this._isLoaded = !0, BB.length > 0 && OB.replay(this._client, BB)
                }
            }))
          } catch (BB) {
            throw this._isLoading = !1, BB
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(BB, OB) {
        const GB = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !GB.canCapture
          },
          getPersistedProperty: OB => OB === yG.LogsQueue ? BB() : void 0,
          setPersistedProperty(BB, GB) {
            BB === yG.LogsQueue && OB(null != GB ? GB : [])
          },
          _sendLogsBatch: BB => this._sendLogsBatch(BB),
          getLibraryId: () => GB.library.name,
          getLibraryVersion: () => GB.library.version
        }
      }
      _sendLogsBatch(BB) {
        return new Promise((OB => {
          if (gy(this._consecutiveStatusZeroFailures, 3)) return void OB({
            kind: "fatal",
            error: yl(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let GB = !1;
          const YB = BB => {
              GB || (GB = !0, clearTimeout(DB), OB(BB))
            },
            DB = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), YB({
                kind: "retry-later",
                error: yl(void 0, "logs request timed out")
              })
            }), 9e4),
            QB = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: BB,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((BB => {
            var OB;
            const GB = BB.statusCode;
            this._trackEndpointReachability(GB, QB), GB >= 200 && 300 > GB ? YB({
              kind: "ok"
            }) : 413 === GB ? YB({
              kind: "too-large"
            }) : 0 !== GB && 408 !== GB && 429 !== GB && 500 > GB ? YB({
              kind: "fatal",
              error: new Error(`logs request failed with status ${GB}`)
            }) : 0 === GB ? (BB.error || this._logger.warn("Logs request failed before receiving an HTTP response"), YB({
              kind: "retry-later",
              error: yl(BB.error, "logs request failed before receiving an HTTP response")
            })) : YB({
              kind: "retry-later",
              error: null !== (OB = BB.error) && void 0 !== OB ? OB : new Error(`logs request failed with status ${GB}`)
            })
          }), (BB => {
            YB({
              kind: "retry-later",
              error: BB
            })
          }))
        }))
      }
      _trackEndpointReachability(BB, OB) {
        (0 !== BB || OB) && (this._consecutiveStatusZeroFailures = ry(BB, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(BB) {
        this._queue.length > 0 && this._drainQueueViaTransport(BB, this._queue, this._resolvedConfig, this._client.library.name, (BB => {
          this._queue = BB
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(BB, this._consoleQueue, this._consoleResolvedConfig, ol, (BB => {
          this._consoleQueue = BB
        }))
      }
      _drainQueueViaTransport(BB, OB, GB, YB, DB) {
        if (0 === OB.length) return;
        const QB = OB.map((BB => BB.record));
        DB([]);
        const oB = ko(QB, fo(GB, this._client.library.name, this._client.library.version), YB, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: oB,
          compression: "best-available",
          transport: BB,
          timeoutMs: 6e4
        }).catch((BB => this._logFlushError(BB)))
      }
    };
    const Pl = wo("[NetworkMetrics]"),
      zl = () => {
        var BB;
        return (null == vO || null === (BB = vO.performance) || void 0 === BB ? void 0 : BB.now) ? vO.performance.now() : Date.now()
      },
      ll = {
        "http:": 80,
        "https:": 443
      },
      pl = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      ql = (BB, OB) => {
        var GB;
        const YB = String(OB);
        return {
          method: String(BB).toUpperCase(),
          url: (null === (GB = wy(YB)) || void 0 === GB ? void 0 : GB.href) || YB
        }
      },
      Zl = function(BB, OB, GB, YB, DB, QB) {
        let oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var jB, yB;
          const JB = DB();
          if (!JB) return;
          const MB = GB || void 0,
            PB = zl() - YB,
            zB = wy(OB.url);
          if (zB && "http:" !== zB.protocol && "https:" !== zB.protocol) return;
          const lB = {
              url: (null == zB ? void 0 : zB.href) || OB.url,
              method: OB.method
            },
            pB = AG(JB.name) ? JB.name(lB) : UG(JB.name) ? JB.name : "http.client.request.duration";
          if (!pB) return;
          const qB = oB && !MB ? void 0 : ((BB, OB) => BB ? 400 > BB ? void 0 : String(BB) : (null == OB ? void 0 : OB.name) || "_OTHER")(MB, QB),
            ZB = RD(RD(RD(RD(RD({}, (BB => {
              const OB = pl.has(BB) ? BB : "_OTHER";
              return RD({
                "http.request.method": OB
              }, "_OTHER" === OB && BB !== OB ? {
                "http.request.method_original": BB
              } : {})
            })(lB.method)), zB ? (BB => {
              return {
                "server.address": BB.hostname.startsWith("[") && BB.hostname.endsWith("]") ? BB.hostname.slice(1, -1) : BB.hostname,
                "server.port": Number(BB.port) || ll[BB.protocol],
                "url.scheme": BB.protocol.slice(0, -1),
                "url.template": (OB = BB.pathname, OB.split("/").map((BB => (BB => /^\d+$/.test(BB) || BB.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(BB))(BB) ? ":id" : BB)).join("/"))
              };
              var OB
            })(zB) : {}), MB ? {
              "http.response.status_code": MB
            } : {}), qB ? {
              "error.type": qB
            } : {}), null === (jB = JB.attributes) || void 0 === jB ? void 0 : jB.call(JB, lB, {
              status: MB,
              durationMs: PB
            }));
          null === (yB = BB.metrics) || void 0 === yB || yB.histogram(pB, PB, {
            unit: "ms",
            attributes: ZB
          })
        } catch (BB) {
          Pl.error("Failed to record network metric", BB)
        }
      },
      Nl = () => {},
      Rl = (BB, OB) => AG(null == vO ? void 0 : vO.fetch) ? Yz(vO, "fetch", (GB => function() {
        for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
        const oB = zl(),
          jB = GB.apply(this, DB);
        if (!OB()) return jB;
        try {
          var yB, JB, MB;
          const [GB, YB] = DB, QB = ql(null !== (yB = null !== (JB = null == YB ? void 0 : YB.method) && void 0 !== JB ? JB : null == GB ? void 0 : GB.method) && void 0 !== yB ? yB : "GET", null !== (MB = null == GB ? void 0 : GB.url) && void 0 !== MB ? MB : GB);
          return jB.then((GB => (Zl(BB, QB, null == GB ? void 0 : GB.status, oB, OB, void 0, !0), GB)), (GB => {
            throw Zl(BB, QB, void 0, oB, OB, GB), GB
          }))
        } catch (BB) {
          return Pl.error("Failed to observe fetch", BB), jB
        }
      })) : Nl,
      Wl = (BB, OB) => {
        var GB;
        const YB = null == vO || null === (GB = vO.XMLHttpRequest) || void 0 === GB ? void 0 : GB.prototype;
        if (!YB) return Nl;
        const DB = new WeakMap,
          QB = Yz(YB, "open", (BB => function() {
            for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
            try {
              (() => WM.has(this))() || DB.set(this, ql(GB[0], GB[1]))
            } catch (BB) {
              Pl.error("Failed to observe XHR open", BB)
            }
            return BB.apply(this, GB)
          })),
          oB = Yz(YB, "send", (GB => function() {
            let YB;
            try {
              const GB = DB.get(this);
              if (GB && OB()) {
                const DB = zl();
                YB = () => {
                  this.removeEventListener("loadend", YB), Zl(BB, GB, this.status, DB, OB)
                }, vo(this, "loadend", YB)
              }
            } catch (BB) {
              Pl.error("Failed to observe XHR send", BB)
            }
            try {
              for (var QB = arguments.length, oB = new Array(QB), jB = 0; jB < QB; jB++) oB[jB] = arguments[jB];
              return GB.apply(this, oB)
            } catch (BB) {
              throw YB && this.removeEventListener("loadend", YB), BB
            }
          }));
        return () => {
          QB(), oB()
        }
      },
      Al = new WeakMap,
      Vl = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      Sl = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function nl(BB) {
      if (BB) return !0 === BB ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== BB.intent,
        model: !1 !== BB.model
      }
    }

    function Ul(BB, OB) {
      return {}.hasOwnProperty.call(BB, OB)
    }

    function fl(BB, OB) {
      const GB = Object.create(BB);
      return OB && Object.defineProperty(GB, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: OB
      }), GB
    }

    function kl(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!UG(BB)) return;
      const YB = BB.trim();
      return YB ? (GB ? function(BB, OB) {
        return function(BB) {
          return BB.length >= 10240 && (dQ.test(BB) || function(BB) {
            const OB = mQ.exec(BB);
            if (!OB) return !1;
            let GB;
            try {
              GB = decodeURIComponent(BB.slice(OB[0].length))
            } catch (BB) {
              return !1
            }
            return IQ.test(GB.replace(/[\r\n]/g, ""))
          }(BB) || uQ.test(BB) && KQ.test(BB))
        }(BB) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(BB, OB, GB) {
          const YB = 4 * GB.maxStringLength;
          if (BB.length > YB) {
            const DB = OB(BB.slice(0, function(BB, OB) {
              let GB = OB;
              for (; GB > 0 && !gQ.test(BB[GB - 1]);) GB--;
              return GB
            }(BB, YB)));
            if (DB.length >= 2 * GB.maxStringLength) return DB + GB.truncationSuffix
          }
          return OB(BB)
        }(BB, (BB => function(BB) {
          return jo(BB, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(BB) {
          let OB = BB.replace(aQ, " ");
          return OB = OB.replace(eQ, kQ), OB = OB.replace(TQ, kQ), OB = OB.replace(bQ, `$1${kQ}`), OB = OB.replace(HQ, Mo), OB = OB.replace(CQ, kQ), OB = OB.replace(sQ, `$1${kQ}`), OB = OB.replace(xQ, `$1${kQ}`), OB
        }(yo(BB)))), OB)
      }(YB, Sl) : YB).slice(0, OB) : void 0
    }

    function dl(BB) {
      try {
        return VG(BB) && !0 === BB.isError
      } catch (BB) {
        return !1
      }
    }
    const Kl = {
        featureFlags: class extends az {
          constructor(BB) {
            const OB = new Tz(BB.config, BB._shouldDisableFlags());
            super(OB), this.name = WP, this._instance = BB, this._mutableConfigSource = OB
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(BB, OB) {
            this._mutableConfigSource.update(BB, OB), this._onConfigUpdated()
          }
        }
      },
      ul = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var BB;
            return !!(null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB ? void 0 : BB.isStarted)
          }
          get status() {
            var BB, OB;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (BB = null === (OB = this._lazyLoadedSessionRecording) || void 0 === OB ? void 0 : OB.status) && void 0 !== BB ? BB : this._recordingStatus
          }
          constructor(BB) {
            if (this._instance = BB, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Mz, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var BB, OB;
                if (!(null == tO ? void 0 : tO.visibilityState) || "visible" === tO.visibilityState) return !0;
                const GB = null == vO || null === (BB = vO.performance) || void 0 === BB || null === (OB = BB.getEntriesByType) || void 0 === OB ? void 0 : OB.call(BB, "visibility-state");
                return !(null == GB ? void 0 : GB.length) || GB.some((BB => "visible" === BB.name))
              })(), this._onVisibilityChange = () => {
                var BB, OB;
                "visible" === (null == tO ? void 0 : tO.visibilityState) && (this._documentWasEverVisible = !0, null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB || null === (OB = BB.setDocumentWasEverVisible) || void 0 === OB || OB.call(BB, !0))
              }, !this._instance.sessionManager) throw zz.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == tO ? void 0 : tO.addEventListener) && vo(tO, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: BB = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var OB;
            this._sessionRecordingDisposed = !0, null == tO || null === (OB = tO.removeEventListener) || void 0 === OB || OB.call(tO, "visibilitychange", this._onVisibilityChange), BB ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var BB;
            const OB = !!(null === (BB = this._instance.get_property("$session_recording_remote_config")) || void 0 === BB ? void 0 : BB.enabled),
              GB = !this._config.disable_session_recording,
              YB = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return vO && OB && GB && !YB
          }
          startIfEnabledOrStop(BB) {
            var OB;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (OB = this._lazyLoadedSessionRecording) || void 0 === OB ? void 0 : OB.isStarted)) return;
            const GB = !nG(Object.assign) && !nG(Array.from);
            this._isRecordingEnabled && GB ? (this._lazyLoadAndStart(BB), zz.info("starting")) : (this._recordingStatus = Mz, this.stopRecording())
          }
          _lazyLoadAndStart(BB) {
            var OB, GB;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = Pz), (null == jG || null === (OB = jG.__PosthogExtensions__) || void 0 === OB || null === (OB = OB.rrweb) || void 0 === OB ? void 0 : OB.record) && (null === (GB = jG.__PosthogExtensions__) || void 0 === GB ? void 0 : GB.initSessionRecording)) this._onScriptLoaded(BB);
              else {
                var YB, DB;
                const OB = this._instance.sessionManager;
                null === (YB = jG.__PosthogExtensions__) || void 0 === YB || null === (DB = YB.loadExternalDependency) || void 0 === DB || DB.call(YB, this._instance, this._scriptName, (GB => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === OB) return GB ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), zz.error("could not load recorder", GB)) : void this._onScriptLoaded(BB);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var BB, OB;
            null === (BB = this._persistFlagsOnSessionListener) || void 0 === BB || BB.call(this), this._persistFlagsOnSessionListener = void 0, null === (OB = this._lazyLoadedSessionRecording) || void 0 === OB || OB.stop()
          }
          _discardRecording() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var OB, GB;
            null === (OB = this._persistFlagsOnSessionListener) || void 0 === OB || OB.call(this), this._persistFlagsOnSessionListener = void 0, null === (GB = this._lazyLoadedSessionRecording) || void 0 === GB || GB.discard({
              discardProducerEvents: BB
            })
          }
          _resetSampling() {
            var BB, OB;
            null === (BB = this._persistence) || void 0 === BB || BB.unregister("$session_is_sampled"), null === (OB = this._persistence) || void 0 === OB || OB.unregister("$replay_sample_rate")
          }
          _validateSampleRate(BB, OB) {
            if (dG(BB)) return null;
            const GB = KG(BB) ? BB : parseFloat(BB);
            return "number" != typeof(YB = GB) || !Number.isFinite(YB) || 0 > YB || YB > 1 ? (zz.warn(`${OB} must be between 0 and 1. Ignoring invalid value:`, BB), null) : GB;
            var YB
          }
          _persistRemoteConfig(BB) {
            if (this._persistence) {
              var OB, GB;
              const YB = this._persistence,
                DB = () => {
                  var OB;
                  const GB = !1 === BB.sessionRecording ? void 0 : BB.sessionRecording,
                    DB = this._validateSampleRate(null === (OB = this._config.session_recording) || void 0 === OB ? void 0 : OB.sampleRate, "session_recording.sampleRate"),
                    QB = this._validateSampleRate(null == GB ? void 0 : GB.sampleRate, "remote config sampleRate"),
                    oB = null != DB ? DB : QB;
                  dG(oB) && this._resetSampling();
                  const jB = null == GB ? void 0 : GB.minimumDurationMilliseconds;
                  YB.register({
                    [eB]: RD(RD({
                      cache_timestamp: Date.now(),
                      enabled: !!GB
                    }, GB), {}, {
                      networkPayloadCapture: RD({
                        capturePerformance: BB.capturePerformance
                      }, null == GB ? void 0 : GB.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == GB ? void 0 : GB.recordCanvas,
                        fps: null == GB ? void 0 : GB.canvasFps,
                        quality: null == GB ? void 0 : GB.canvasQuality
                      },
                      sampleRate: oB,
                      minimumDurationMilliseconds: nG(jB) ? null : jB,
                      endpoint: null == GB ? void 0 : GB.endpoint,
                      triggerMatchType: null == GB ? void 0 : GB.triggerMatchType,
                      masking: null == GB ? void 0 : GB.masking,
                      urlTriggers: null == GB ? void 0 : GB.urlTriggers,
                      version: null == GB ? void 0 : GB.version,
                      triggerGroups: null == GB ? void 0 : GB.triggerGroups
                    })
                  })
                };
              DB(), null === (OB = this._persistFlagsOnSessionListener) || void 0 === OB || OB.call(this), this._persistFlagsOnSessionListener = null === (GB = this._instance.sessionManager) || void 0 === GB ? void 0 : GB.onSessionId(DB)
            }
          }
          onRemoteConfig(BB) {
            const OB = BB.ok ? BB.config : void 0;
            return OB && "sessionRecording" in OB ? !1 === OB.sessionRecording ? (this._persistRemoteConfig(OB), void this._discardRecording()) : (this._persistRemoteConfig(OB), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [mO]: !0
            }), zz.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var GB;
            (null === (GB = this._lazyLoadedSessionRecording) || void 0 === GB ? void 0 : GB.log) ? this._lazyLoadedSessionRecording.log(BB, OB): zz.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var BB, OB;
            const GB = null === (BB = this._instance) || void 0 === BB || null === (BB = BB.persistence) || void 0 === BB ? void 0 : BB.get_property(eB);
            return (null == GB || null === (OB = GB.scriptConfig) || void 0 === OB ? void 0 : OB.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const BB = this._instance.get_property(eB);
            if (!BB) return !1;
            let OB;
            try {
              OB = "object" == typeof BB ? BB : JSON.parse(BB)
            } catch (BB) {
              return zz.warn("persisted remote config for session recording is invalid and will be ignored", BB), !1
            }
            return !dG(OB.cache_timestamp) && 36e5 >= Date.now() - OB.cache_timestamp
          }
          _onScriptLoaded(BB) {
            var OB, GB, YB;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.initSessionRecording)) return zz.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [uO]: !0
              });
              var DB;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (DB = jG.__PosthogExtensions__) || void 0 === DB ? void 0 : DB.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", zz.info("persisted remote config is stale, requesting fresh config before starting"), void new wJ(this._instance).load()
              }
              this._recordingStatus = Pz, null === (GB = (YB = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === GB || GB.call(YB, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(BB)
            } else this._recordingStatus = Mz
          }
          onRRwebEmit(BB) {
            var OB, GB;
            null === (OB = this._lazyLoadedSessionRecording) || void 0 === OB || null === (GB = OB.onRRwebEmit) || void 0 === GB || GB.call(OB, BB)
          }
          overrideLinkedFlag() {
            var BB, OB;
            this._lazyLoadedSessionRecording || null === (OB = this._persistence) || void 0 === OB || OB.register({
              $replay_override_linked_flag: !0
            }), null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB || BB.overrideLinkedFlag()
          }
          overrideSampling() {
            var BB, OB;
            this._lazyLoadedSessionRecording || null === (OB = this._persistence) || void 0 === OB || OB.register({
              $replay_override_sampling: !0
            }), null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB || BB.overrideSampling()
          }
          overrideTrigger(BB) {
            var OB, GB;
            this._lazyLoadedSessionRecording || null === (GB = this._persistence) || void 0 === GB || GB.register({
              ["url" === BB ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (OB = this._lazyLoadedSessionRecording) || void 0 === OB || OB.overrideTrigger(BB)
          }
          get sdkDebugProperties() {
            var BB;
            const OB = {};
            for (const YB of lz) {
              var GB;
              const BB = null === (GB = this._instance.sessionPersistence) || void 0 === GB ? void 0 : GB.get_property(YB);
              nG(BB) || (OB[YB] = BB)
            }
            return RD(RD({}, OB), (null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB ? void 0 : BB.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(BB, OB) {
            var GB;
            return !!(null === (GB = this._lazyLoadedSessionRecording) || void 0 === GB ? void 0 : GB.tryAddCustomEvent(BB, OB))
          }
          flushBeforeIdentityReset() {
            var BB, OB;
            null === (BB = this._lazyLoadedSessionRecording) || void 0 === BB || null === (OB = BB.flushBeforeIdentityReset) || void 0 === OB || OB.call(BB)
          }
        }
      },
      ml = {
        autocapture: class extends xP {
          constructor(BB) {
            super(new tP(BB)), this.instance = BB
          }
        },
        historyAutocapture: class {
          constructor(BB) {
            this._isFlushingPageview = !1, this._instance = BB, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const BB = this._getCaptureOptions();
            return !!(BB.path || BB.search || this._shouldCaptureHashChanges(BB))
          }
          startIfEnabled() {
            this.isEnabled && (Xo.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, Xo.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            vO && vO.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(BB) {
            var OB;
            if (!vO || (null === (OB = vO.history[BB]) || void 0 === OB ? void 0 : OB.__posthog_wrapped__)) return;
            const GB = this;
            Yz(vO.history, BB, (OB => function(YB, DB, QB) {
              var oB;
              GB._isUrlChanging(QB) && GB._flushPendingPageview(), OB.call(this, YB, DB, QB), GB._capturePageview(BB, !GB._isFlushingPageview && "popstate" !== (null == vO || null === (oB = vO.event) || void 0 === oB ? void 0 : oB.type))
            }))
          }
          _getCurrentLocation() {
            const BB = null == vO ? void 0 : vO.location;
            if (null == BB ? void 0 : BB.pathname) return {
              pathname: BB.pathname,
              search: BB.search,
              hash: BB.hash
            }
          }
          _getCaptureOptions() {
            const BB = this._instance.config.capture_pageview;
            return "history_change" === BB ? {
              path: !0
            } : VG(BB) ? BB : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(BB) {
            const OB = this._getCaptureOptions(),
              GB = this._lastLocation;
            return !(!GB || !(OB.path && BB.pathname !== GB.pathname || OB.search && BB.search !== GB.search || this._shouldCaptureHashChanges(OB) && BB.hash !== GB.hash))
          }
          _capturePageview(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              OB || this._flushPendingPageview();
              const GB = this._getCurrentLocation();
              if (!GB) return;
              if (this._hasLocationChanged(GB)) {
                const GB = () => this._instance.capture(TO, {
                  navigation_type: BB
                });
                OB ? (this._pendingPageview = GB, Promise.resolve().then((() => this._flushPendingPageview()))) : GB()
              }
              this._lastLocation = GB
            } catch (OB) {
              Xo.error(`Error capturing ${BB} pageview`, OB)
            }
          }
          _isUrlChanging(BB) {
            var OB, GB;
            return !(dG(BB) || !vO) && (null === (OB = wy(String(BB))) || void 0 === OB ? void 0 : OB.href) !== (null === (GB = vO.location) || void 0 === GB ? void 0 : GB.href)
          }
          _flushPendingPageview() {
            const BB = this._pendingPageview;
            if (BB) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                BB()
              } catch (BB) {
                Xo.error("Error capturing deferred pageview", BB)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const BB = () => {
              this._capturePageview("popstate")
            };
            vo(vO, "popstate", BB), this._popstateListener = () => {
              vO && vO.removeEventListener("popstate", BB)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const BB = () => {
              this._capturePageview("hashchange")
            };
            vo(vO, "hashchange", BB), this._hashchangeListener = () => {
              vO && vO.removeEventListener("hashchange", BB)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(BB) {
            var OB;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = BB, this._enabledServerSide = !!(null === (OB = this.instance.persistence) || void 0 === OB ? void 0 : OB.props[LB]), this.rageclicks = new bP(BB.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let BB = 5e3;
            return VG(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (BB = this._config.capture_heatmaps.flush_interval_milliseconds), BB
          }
          get isEnabled() {
            return dG(this._config.capture_heatmaps) ? dG(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              pz.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var BB;
              clearInterval(null !== (BB = this._flushInterval) && void 0 !== BB ? BB : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(BB) {
            if (!BB.ok) return;
            const OB = BB.config;
            if (!("heatmaps" in OB)) return;
            const GB = !!OB.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [LB]: GB
            }), this._enabledServerSide = GB, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const BB = this._buffer;
            return this._buffer = void 0, BB
          }
          _onDeadClick(BB) {
            qz(BB.originalEvent) && this._onClick(BB.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == tO ? void 0 : tO.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            vO && tO && (this._flushHandler = this._flush.bind(this), vo(vO, eO, this._flushHandler), this._onClickHandler = BB => this._onClick(BB || (null == vO ? void 0 : vO.event)), vo(tO, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = BB => this._onMouseMove(BB || (null == vO ? void 0 : vO.event)), vo(tO, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Sy(this.instance, Ay, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), vo(tO, VB, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var BB;
            vO && tO && (this._flushHandler && vO.removeEventListener(eO, this._flushHandler), this._onClickHandler && tO.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && tO.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && tO.removeEventListener(VB, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (BB = this._deadClicksCapture) || void 0 === BB || BB.stop(), this._initialized = !1)
          }
          _getProperties(BB, OB) {
            const GB = this.instance.scrollManager.scrollY(),
              YB = this.instance.scrollManager.scrollX(),
              DB = this.instance.scrollManager.scrollElement(),
              QB = function(BB, OB, GB) {
                let YB = BB;
                for (; YB && uj(YB) && !mj(YB, "body");) {
                  if (YB === GB) return !1;
                  let jB;
                  try {
                    var DB, QB, oB;
                    jB = null === (DB = null !== (QB = null === (oB = YB.ownerDocument) || void 0 === oB ? void 0 : oB.defaultView) && void 0 !== QB ? QB : vO) || void 0 === DB ? void 0 : DB.getComputedStyle(YB).position
                  } catch (BB) {
                    return !1
                  }
                  if (zG(OB, jB)) return !0;
                  YB = aj(YB)
                }
                return !1
              }(wj(BB), ["fixed", "sticky"], DB);
            return {
              x: BB.clientX + (QB ? 0 : YB),
              y: BB.clientY + (QB ? 0 : GB),
              target_fixed: QB,
              type: OB
            }
          }
          _onClick(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var GB;
            if (Kj(BB.target) || !qz(BB)) return;
            const YB = this._getProperties(BB, OB);
            (null === (GB = this.rageclicks) || void 0 === GB ? void 0 : GB.isRageClick(BB.clientX, BB.clientY, (new Date).getTime())) && Gy(wj(BB), this.instance.config.rageclick) && this._capture(RD(RD({}, YB), {}, {
              type: "rageclick"
            })), this._capture(YB)
          }
          _onMouseMove(BB) {
            !Kj(BB.target) && qz(BB) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(BB, "mousemove"))
            }), 500))
          }
          _capture(BB) {
            if (!vO) return;
            const OB = this._config.disable_capture_url_hashes ? MD(vO.location.href) : vO.location.href,
              GB = this._config.custom_personal_data_properties,
              YB = this._config.mask_personal_data_properties ? [...ay, ...GB || []] : [],
              DB = cy(OB, YB, Ty);
            this._buffer = this._buffer || {}, this._buffer[DB] || (this._buffer[DB] = []), this._buffer[DB].push(BB)
          }
          _flush() {
            this._buffer && !SG(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Sy,
        webVitalsAutocapture: class {
          constructor(BB) {
            var OB;
            this._instance = BB, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", RD({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((BB, OB) => RD(RD({}, BB), {}, {
                [`$web_vitals_${OB.name}_event`]: RD({}, OB),
                [`$web_vitals_${OB.name}_value`]: OB.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = BB => {
              var OB;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, dG(null == BB ? void 0 : BB.name) || dG(null == BB ? void 0 : BB.value)) return void Qz.error("Invalid metric received", BB);
              const GB = "string" == typeof BB.navigationURL ? BB.navigationURL : void 0,
                YB = this._maskedURL(GB);
              if (nG(YB)) return;
              const DB = KG(BB.navigationId) || "string" == typeof BB.navigationId ? `navigation:${BB.navigationId}` : `url:${YB}`;
              if (this._maxAllowedValue && BB.value >= this._maxAllowedValue) return void Qz.error("Ignoring metric with value >= " + this._maxAllowedValue, BB);
              this._buffer.navigationKey !== DB && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), nG(this._buffer.navigationKey) && (this._buffer.navigationKey = DB, this._buffer.url = YB), this._buffer.firstMetricTimestamp = nG(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const QB = null === (OB = this._instance.sessionManager) || void 0 === OB ? void 0 : OB.checkAndGetSessionAndWindowId(!0),
                oB = RD(RD(RD({}, BB), GB ? {
                  navigationURL: YB
                } : {}), {}, {
                  $current_url: YB,
                  timestamp: Date.now()
                });
              if (delete oB.entries, VG(BB.attribution) && this.attributionMetrics.indexOf(BB.name) > -1) {
                const OB = {};
                for (const GB of Jz) {
                  const YB = "url" === GB && "string" == typeof BB.attribution[GB] ? this._maskedURL(BB.attribution[GB]) : BB.attribution[GB];
                  nG(YB) || (OB[GB] = YB)
                }
                oB.attribution = OB
              } else delete oB.attribution;
              nG(QB) || (oB.$session_id = QB.sessionId, oB.$window_id = QB.windowId), this._buffer.metrics.push(oB), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let BB, OB, GB, YB, DB = !1;
              const QB = jG.__PosthogExtensions__,
                oB = null == QB ? void 0 : QB.postHogWebVitalsCallbacksByFlavor,
                jB = (null == oB ? void 0 : oB[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && nG(oB) ? null == QB ? void 0 : QB.postHogWebVitalsCallbacks : void 0);
              if (!nG(jB)) {
                const QB = jB.withoutAttribution,
                  oB = this.attributionMetrics;
                DB = !nG(QB), BB = oB.indexOf("LCP") > -1 ? jB.onLCP : (null == QB ? void 0 : QB.onLCP) || jB.onLCP, OB = oB.indexOf("CLS") > -1 ? jB.onCLS : (null == QB ? void 0 : QB.onCLS) || jB.onCLS, GB = oB.indexOf("FCP") > -1 ? jB.onFCP : (null == QB ? void 0 : QB.onFCP) || jB.onFCP, YB = oB.indexOf("INP") > -1 ? jB.onINP : (null == QB ? void 0 : QB.onINP) || jB.onINP
              }
              if (!(BB && OB && GB && YB)) return void Qz.error("web vitals callbacks not loaded - not starting");
              const yB = {
                  reportSoftNavs: this.useSoftNavs
                },
                JB = DB && this.attributionMetrics.indexOf("INP") > -1 ? RD(RD({}, yB), {}, {
                  includeProcessedEventEntries: !1
                }) : yB;
              this.allowedMetrics.indexOf("LCP") > -1 && BB(this._addToBuffer.bind(this), yB), this.allowedMetrics.indexOf("CLS") > -1 && OB(this._addToBuffer.bind(this), yB), this.allowedMetrics.indexOf("FCP") > -1 && GB(this._addToBuffer.bind(this), yB), this.allowedMetrics.indexOf("INP") > -1 && YB(this._addToBuffer.bind(this), JB), this._initialized = !0
            }, this._enabledServerSide = !!(null === (OB = this._instance.persistence) || void 0 === OB ? void 0 : OB.props[wB]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var BB, OB;
            const GB = VG(this._perfConfig) ? null === (BB = this._perfConfig) || void 0 === BB ? void 0 : BB.web_vitals_allowed_metrics : void 0;
            return dG(GB) ? (null === (OB = this._instance.persistence) || void 0 === OB ? void 0 : OB.props.$web_vitals_allowed_metrics) || jz : GB
          }
          get flushToCaptureTimeoutMs() {
            return (VG(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const BB = VG(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return mG(BB) ? BB ? jz : [] : WG(BB) ? BB : yz
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const BB = VG(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != BB && BB
          }
          get _maxAllowedValue() {
            const BB = VG(this._perfConfig) && KG(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : oz;
            return BB > 0 && 6e4 >= BB ? oz : BB
          }
          get isEnabled() {
            const BB = null == BG ? void 0 : BG.protocol;
            if ("http:" !== BB && "https:" !== BB) return Qz.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const OB = VG(this._perfConfig) ? this._perfConfig.web_vitals : mG(this._perfConfig) ? this._perfConfig : void 0;
            return mG(OB) ? OB : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (Qz.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(BB) {
            if (!BB.ok) return;
            const OB = BB.config;
            if (!("capturePerformance" in OB)) return;
            const GB = VG(OB.capturePerformance) && !!OB.capturePerformance.web_vitals,
              YB = VG(OB.capturePerformance) ? OB.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [wB]: GB
            }), this._instance.persistence.register({
              [aB]: YB
            })), this._enabledServerSide = GB, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(BB) {
            var OB;
            const GB = jG.__PosthogExtensions__,
              YB = this._callbackFlavor,
              DB = null == GB ? void 0 : GB.postHogWebVitalsCallbacksByFlavor;
            (null == DB ? void 0 : DB[YB]) || "web-vitals" === YB && nG(DB) && (null == GB ? void 0 : GB.postHogWebVitalsCallbacks) ? BB() : null == GB || null === (OB = GB.loadExternalDependency) || void 0 === OB || OB.call(GB, this._instance, YB, (OB => {
              OB ? Qz.error("failed to load script", OB) : BB()
            }))
          }
          _maskedURL(BB) {
            const OB = BB || (null == vO ? void 0 : vO.location.href);
            if (!OB) return void Qz.error("Could not determine current URL");
            const GB = this._instance.config.disable_capture_url_hashes ? MD(OB) : OB,
              YB = this._instance.config.custom_personal_data_properties,
              DB = this._instance.config.mask_personal_data_properties ? [...ay, ...YB || []] : [];
            return cy(GB, DB, Ty)
          }
        }
      },
      Il = {
        exceptionObserver: class {
          constructor(BB) {
            var OB;
            this._startCapturing = () => {
              var BB;
              if (!vO || !this.isEnabled || !(null === (BB = jG.__PosthogExtensions__) || void 0 === BB ? void 0 : BB.errorWrappingFunctions)) return;
              const OB = jG.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                GB = jG.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                YB = jG.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = OB(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = GB(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = YB(this.captureException.bind(this)))
              } catch (BB) {
                Bz.error("failed to start", BB), this._stopCapturing()
              }
            }, this._instance = BB, this._remoteEnabled = !!(null === (OB = this._instance.persistence) || void 0 === OB ? void 0 : OB.props[gB]), this._rateLimiter = new HG(RD(RD({}, function() {
              let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var OB, GB, YB, DB;
              return {
                refillRate: null !== (OB = null !== (GB = BB.exceptionRateLimiterRefillRate) && void 0 !== GB ? GB : BB.__exceptionRateLimiterRefillRate) && void 0 !== OB ? OB : 1,
                bucketSize: null !== (YB = null !== (DB = BB.exceptionRateLimiterBucketSize) && void 0 !== DB ? DB : BB.__exceptionRateLimiterBucketSize) && void 0 !== YB ? YB : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Bz
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const BB = this._instance.config.capture_exceptions;
            let OB = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return VG(BB) ? OB = RD(RD({}, OB), BB) : (nG(BB) ? this._remoteEnabled : BB) && (OB = RD(RD({}, OB), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), OB
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Bz.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(BB) {
            var OB, GB, YB;
            (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.errorWrappingFunctions) ? BB(): null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, "exception-autocapture", (OB => {
              if (OB) return Bz.error("failed to load script", OB);
              BB()
            }))
          }
          _stopCapturing() {
            var BB, OB, GB;
            null === (BB = this._unwrapOnError) || void 0 === BB || BB.call(this), this._unwrapOnError = void 0, null === (OB = this._unwrapUnhandledRejection) || void 0 === OB || OB.call(this), this._unwrapUnhandledRejection = void 0, null === (GB = this._unwrapConsoleError) || void 0 === GB || GB.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(BB) {
            if (!BB.ok) return;
            const OB = BB.config;
            "autocaptureExceptions" in OB && (this._remoteEnabled = !!OB.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [gB]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(BB) {
            try {
              var OB, GB, YB;
              const DB = null !== (OB = null == BB || null === (GB = BB.$exception_list) || void 0 === GB || null === (GB = GB[0]) || void 0 === GB ? void 0 : GB.type) && void 0 !== OB ? OB : "Exception";
              if (this._rateLimiter.consumeRateLimit(DB)) return void Bz.info("Skipping exception capture because of client rate limiting.", {
                exception: DB
              });
              null === (YB = this._instance.exceptions) || void 0 === YB || YB.sendExceptionEvent(BB)
            } catch (BB) {}
          }
        },
        exceptions: class {
          constructor(BB) {
            var OB, GB;
            this._suppressionRules = [], this._errorPropertiesBuilder = new fD([new CD, new DQ, new vD, new HD, new GQ, new OQ, new xD, new YQ], function(BB) {
              for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
              return function(OB) {
                let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const DB = [],
                  QB = OB.split("\n"),
                  oB = Math.min(QB.length, YB + 1e3),
                  jB = [];
                for (let MB = YB; oB > MB; MB++) {
                  const OB = QB[MB];
                  if (OB.length > 1024) continue;
                  const YB = wD.test(OB) ? OB.replace(wD, "$1") : OB;
                  if (!YB.match(/\S*Error: /)) {
                    for (const OB of GB) {
                      const GB = OB(YB, BB);
                      if (GB) {
                        DB.push(GB);
                        const BB = cD(DB);
                        if (BB) {
                          for (let OB = jB.length - 1; OB >= 0; OB--) {
                            const GB = jB[OB];
                            if (BB.start >= GB.start + GB.length) break;
                            jB.pop()
                          }
                          jB.push(BB)
                        }
                        break
                      }
                    }
                    if (TD(DB, jB) >= 50) break
                  }
                }
                const yB = [...jB].sort(((BB, OB) => OB.start - BB.start)),
                  JB = yB[yB.length - 1];
                if (JB) {
                  const BB = aD(DB, JB);
                  DB.splice(JB.start - BB, BB);
                  for (const OB of yB) OB.start -= BB
                }
                for (const BB of yB) hD(DB, BB);
                return jB.some((BB => 0 === BB.start && DB.length === BB.length)) && function(BB) {
                    const OB = BB.map((BB => `${BB.function}|${BB.filename}|${BB.lineno}|${BB.colno}|${BB.module}`));
                    let GB = 0;
                    for (let YB = 1; OB.length > YB; YB++) bD(OB, YB, GB) && (GB = YB);
                    BB.push(...BB.splice(0, GB))
                  }(DB),
                  function(BB) {
                    if (!BB.length) return [];
                    const OB = Array.from(BB);
                    return OB.reverse(), OB.slice(0, 50).map((BB => {
                      return RD(RD({}, BB), {}, {
                        filename: BB.filename || (GB = OB, GB[GB.length - 1] || {}).filename,
                        function: BB.function || "?"
                      });
                      var GB
                    }))
                  }(DB)
              }
            }("web:javascript", LD, XD)), this._instance = BB, this._suppressionRules = null !== (OB = null === (GB = this._instance.persistence) || void 0 === GB ? void 0 : GB.get_property("$error_tracking_suppression_rules")) && void 0 !== OB ? OB : [], this._exceptionStepsConfig = JQ(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new MQ(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = JQ(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(BB) {
            var OB, GB, YB;
            if (!BB.ok) return;
            const DB = BB.config;
            if (!("errorTracking" in DB)) return;
            const QB = null !== (OB = null === (GB = DB.errorTracking) || void 0 === GB ? void 0 : GB.suppressionRules) && void 0 !== OB ? OB : [],
              oB = null === (YB = DB.errorTracking) || void 0 === YB ? void 0 : YB.captureExtensionExceptions;
            this._suppressionRules = QB, this._instance.persistence && this._instance.persistence.register({
              [rB]: this._suppressionRules,
              [XB]: oB
            })
          }
          get _captureExtensionExceptions() {
            var BB;
            const OB = !!this._instance.get_property(XB),
              GB = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (BB = null != GB ? GB : OB) && void 0 !== BB && BB
          }
          buildProperties(BB, OB) {
            return this._errorPropertiesBuilder.buildFromUnknown(BB, {
              syntheticException: null == OB ? void 0 : OB.syntheticException,
              mechanism: {
                handled: null == OB ? void 0 : OB.handled
              }
            })
          }
          addExceptionStep(BB, OB) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!UG(BB) || 0 === BB.trim().length) return void Cz.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: GB,
                droppedKeys: YB
              } = function(BB) {
                if (!BB) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const OB = [];
                return {
                  sanitizedProperties: Object.keys(BB).reduce(((GB, YB) => jQ.has(YB) ? (OB.push(YB), GB) : (GB[YB] = BB[YB], GB)), {}),
                  droppedKeys: OB
                }
              }(this._coerceExceptionStepProperties(OB));
              YB.length > 0 && Cz.warn("Ignoring reserved exception step fields", {
                droppedKeys: YB
              }), this._exceptionStepsBuffer.add(RD({
                [QQ]: BB,
                [oQ]: (new Date).toISOString()
              }, GB))
            } catch (BB) {
              Cz.error("Failed to add exception step. Ignoring breadcrumb.", BB)
            }
          }
          sendExceptionEvent(BB) {
            try {
              const OB = BB.$exception_list;
              if (this._isExceptionList(OB)) {
                if (this._matchesSuppressionRule(OB)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Cz.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(OB)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Cz.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(OB)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Cz.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(OB)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Cz.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const GB = this._exceptionStepsConfig.enabled && dG(BB.$exception_steps) ? this._addBufferedExceptionSteps(BB) : BB,
                YB = function() {
                  if ("u" > typeof process) {
                    var BB;
                    const OB = null === (BB = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === BB ? void 0 : BB.trim();
                    if (OB) return OB
                  }
                  const OB = globalThis._posthogReleaseId;
                  return "string" == typeof OB && OB.length > 0 ? OB : void 0
                }();
              YB && (GB.$release_id = YB);
              try {
                const BB = this._instance.capture("$exception", GB, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return BB && this._exceptionStepsBuffer.clear(), BB
              } catch (BB) {
                return bz(BB) || Cz.error("Failed to capture exception event. Dropping this exception.", BB), void this._exceptionStepsBuffer.clear()
              }
            } catch (BB) {
              return void(bz(BB) || Cz.error("Failed to process exception event. Ignoring this exception.", BB))
            }
          }
          _addBufferedExceptionSteps(BB) {
            try {
              const OB = this._exceptionStepsBuffer.getAttachable();
              return 0 === OB.length ? BB : RD(RD({}, BB), {}, {
                $exception_steps: OB
              })
            } catch (DB) {
              return Cz.error("Failed to read buffered exception steps. Capturing exception without steps.", DB), BB
            }
          }
          _addDroppedExceptionStep(BB) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [QQ]: BB,
              [oQ]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(BB) {
            return VG(BB) ? RD({}, BB) : {}
          }
          _getExceptionStepsConfig() {
            var BB, OB;
            return null !== (BB = null === (OB = this._instance.config.error_tracking) || void 0 === OB ? void 0 : OB.exception_steps) && void 0 !== BB ? BB : {}
          }
          _matchesSuppressionRule(BB) {
            if (0 === BB.length) return !1;
            try {
              const OB = BB.reduce(((BB, OB) => {
                let {
                  type: GB,
                  value: YB
                } = OB;
                return UG(GB) && GB.length > 0 && BB.$exception_types.push(GB), UG(YB) && YB.length > 0 && BB.$exception_values.push(YB), BB
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((BB => {
                const GB = BB.values.map((BB => {
                  const GB = YP[BB.operator],
                    YB = OB[BB.key];
                  if (!GB || !YB) return !1;
                  const DB = WG(BB.value) ? BB.value : [BB.value];
                  return DB.length > 0 && GB(DB, YB)
                }));
                return "OR" === BB.type ? GB.some(Boolean) : GB.every(Boolean)
              }))
            } catch (BB) {
              return Cz.warn("Failed to evaluate suppression rules. Capturing the exception.", BB), !1
            }
          }
          _isExtensionException(BB) {
            const OB = BB.flatMap((BB => {
                var OB, GB;
                return null !== (OB = null === (GB = BB.stacktrace) || void 0 === GB ? void 0 : GB.frames) && void 0 !== OB ? OB : []
              })),
              GB = OB.filter((BB => {
                let {
                  filename: OB
                } = BB;
                return !!OB && sz.some((BB => OB.startsWith(BB)))
              }));
            return 0 !== GB.length && (!GB.every((BB => {
              let {
                filename: OB
              } = BB;
              return !!OB && OB.startsWith(Hz)
            })) || BB.some((BB => {
              let {
                type: OB,
                value: GB
              } = BB;
              return "NoResponse" === OB || UG(GB) && vz.some((BB => {
                let {
                  value: OB,
                  exact: YB
                } = BB;
                return YB ? GB === OB : GB.includes(OB)
              }))
            })) && !OB.some((BB => {
              let {
                in_app: OB,
                filename: GB
              } = BB;
              return OB && !(null == GB ? void 0 : GB.startsWith(Hz))
            })))
          }
          _isInjectedBrowserScriptException(BB) {
            return BB.some((BB => {
              let {
                value: OB
              } = BB;
              return UG(OB) && xz.some((BB => OB.includes(BB)))
            }))
          }
          _isPostHogException(BB) {
            if (BB.length > 0) {
              var OB, GB, YB, DB;
              const QB = null !== (OB = null === (GB = BB[0].stacktrace) || void 0 === GB ? void 0 : GB.frames) && void 0 !== OB ? OB : [],
                oB = QB[QB.length - 1];
              return null !== (YB = null == oB || null === (DB = oB.filename) || void 0 === DB ? void 0 : DB.includes("posthog.com/static")) && void 0 !== YB && YB
            }
            return !1
          }
          _isExceptionList(BB) {
            return !dG(BB) && WG(BB)
          }
        }
      },
      Fl = RD({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(BB) {
            this._productTourManager = null, this._cachedTours = null, this._instance = BB
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(BB) {
            if (!BB.ok) return;
            const OB = BB.config;
            if ("productTours" in OB) {
              var GB, YB;
              if (this._persistence && this._persistence.register({
                  [cB]: !!OB.productTours
                }), !Nz(this._instance)) return !this._productTourManager && dG(null === (GB = this._persistence) || void 0 === GB ? void 0 : GB.props.ph_product_tours) || Zz.info("product tours disabled; stopping and clearing cached tours"), null === (YB = this._productTourManager) || void 0 === YB || YB.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Nz(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(BB) {
            var OB, GB, YB;
            (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.generateProductTours) ? BB(): null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, "product-tours", (OB => {
              OB ? Zz.error("Could not load product tours script", OB) : BB()
            }))
          }
          _startProductTours() {
            var BB;
            !this._productTourManager && (null === (BB = jG.__PosthogExtensions__) || void 0 === BB ? void 0 : BB.generateProductTours) && (this._productTourManager = jG.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (WG(this._cachedTours) && !OB) return void BB(this._cachedTours, {
              isLoaded: !0
            });
            const GB = this._persistence;
            if (GB) {
              const YB = GB.props[PO];
              if (WG(YB) && !OB) return this._cachedTours = YB, void BB(YB, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: OB => {
                if (!Nz(this._instance)) return void BB([], {
                  isLoaded: !0
                });
                const YB = OB.statusCode;
                if (200 !== YB || !OB.json) {
                  const GB = `Product Tours API could not be loaded, status: ${YB}`;
                  return 0 === YB ? OB.error || Zz.warn(GB) : Zz.error(GB), void BB([], {
                    isLoaded: !1,
                    error: GB
                  })
                }
                const DB = WG(OB.json.product_tours) ? OB.json.product_tours : [];
                this._cachedTours = DB, GB && GB.register({
                  [PO]: DB
                }), BB(DB, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(BB) {
            dG(this._productTourManager) ? BB([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(BB)
          }
          showProductTour(BB) {
            var OB;
            null === (OB = this._productTourManager) || void 0 === OB || OB.showTourById(BB)
          }
          previewTour(BB) {
            this._productTourManager ? this._productTourManager.previewTour(BB) : this._loadScript((() => {
              var OB;
              this._startProductTours(), null === (OB = this._productTourManager) || void 0 === OB || OB.previewTour(BB)
            }))
          }
          dismissProductTour() {
            var BB;
            null === (BB = this._productTourManager) || void 0 === BB || BB.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var BB;
            null === (BB = this._productTourManager) || void 0 === BB || BB.nextStep()
          }
          previousStep() {
            var BB;
            null === (BB = this._productTourManager) || void 0 === BB || BB.previousStep()
          }
          clearCache() {
            var BB;
            this._cachedTours = null, null === (BB = this._persistence) || void 0 === BB || BB.unregister("ph_product_tours")
          }
          resetTour(BB) {
            var OB;
            null === (OB = this._productTourManager) || void 0 === OB || OB.resetTour(BB)
          }
          resetAllTours() {
            var BB;
            null === (BB = this._productTourManager) || void 0 === BB || BB.resetAllTours()
          }
          cancelPendingTour(BB) {
            var OB;
            null === (OB = this._productTourManager) || void 0 === OB || OB.cancelPendingTour(BB)
          }
        }
      }, Kl),
      il = {
        siteApps: class {
          constructor(BB) {
            this._instance = BB, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(BB, OB) {
            if (!OB) return;
            const GB = this.globalsForEvent(OB);
            this._bufferedInvocations.push(GB), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var BB;
            return null === (BB = jG._POSTHOG_REMOTE_CONFIG) || void 0 === BB || null === (BB = BB[this._instance.config.token]) || void 0 === BB ? void 0 : BB.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const BB = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                BB(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(BB) {
            var OB, GB, YB, DB, QB, oB, jB;
            if (!BB) throw new Error("Event payload is required");
            const yB = {},
              JB = this._instance.get_property("$groups") || [],
              MB = this._instance.get_property("$stored_group_properties") || {};
            for (const [lB, pB] of Object.entries(MB)) yB[lB] = {
              id: JB[lB],
              type: lB,
              properties: pB
            };
            const {
              $set_once: PB,
              $set: zB
            } = BB;
            return {
              event: RD(RD({}, fQ(BB, Rz)), {}, {
                properties: RD(RD(RD({}, BB.properties), zB ? {
                  $set: RD(RD({}, null !== (OB = null === (GB = BB.properties) || void 0 === GB ? void 0 : GB.$set) && void 0 !== OB ? OB : {}), zB)
                } : {}), PB ? {
                  $set_once: RD(RD({}, null !== (YB = null === (DB = BB.properties) || void 0 === DB ? void 0 : DB.$set_once) && void 0 !== YB ? YB : {}), PB)
                } : {}),
                elements_chain: null !== (QB = null === (oB = BB.properties) || void 0 === oB ? void 0 : oB.$elements_chain) && void 0 !== QB ? QB : "",
                distinct_id: null === (jB = BB.properties) || void 0 === jB ? void 0 : jB.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: yB
            }
          }
          _prepareElementForSiteApp(BB) {
            var OB;
            const GB = null === (OB = BB.tagName) || void 0 === OB ? void 0 : OB.toLowerCase();
            return "style" === GB && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(BB) || (Wz.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === GB && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(BB) || (Wz.error("prepare_external_dependency_script returned null"), null) : BB
          }
          _patchSiteAppElementInsertionMethods() {
            var BB, OB, GB, YB, DB, QB, oB, jB;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const yB = null == tO ? void 0 : tO.defaultView,
              JB = null == yB || null === (BB = yB.Node) || void 0 === BB ? void 0 : BB.prototype;
            if (!yB || !JB) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const MB = [],
              PB = this,
              zB = new WeakSet,
              lB = (BB, OB, GB) => {
                if (!(null == BB ? void 0 : BB[OB])) return;
                const YB = BB[OB];
                BB[OB] = GB(YB), MB.push((() => {
                  BB[OB] = YB
                }))
              },
              pB = BB => {
                if (zB.has(BB)) return BB;
                const OB = PB._prepareElementForSiteApp(BB);
                return OB && zB.add(OB), OB
              },
              qB = BB => BB.map((BB => "string" == typeof BB ? BB : pB(BB))).filter((BB => !kG(BB)));
            return lB(JB, "appendChild", (BB => function(OB) {
              const GB = pB(OB);
              return GB ? BB.call(this, GB) : OB
            })), lB(JB, "insertBefore", (BB => function(OB, GB) {
              const YB = pB(OB);
              return YB ? BB.call(this, YB, GB) : OB
            })), lB(JB, "replaceChild", (BB => function(OB, GB) {
              const YB = pB(OB);
              return YB ? BB.call(this, YB, GB) : GB
            })), [null === (OB = yB.Element) || void 0 === OB ? void 0 : OB.prototype, null === (GB = yB.Document) || void 0 === GB ? void 0 : GB.prototype, null === (YB = yB.DocumentFragment) || void 0 === YB ? void 0 : YB.prototype].forEach((BB => {
              lB(BB, "append", (BB => function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                return BB.apply(this, qB(GB))
              })), lB(BB, "prepend", (BB => function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                return BB.apply(this, qB(GB))
              }))
            })), [null === (DB = yB.Element) || void 0 === DB ? void 0 : DB.prototype, null === (QB = yB.CharacterData) || void 0 === QB ? void 0 : QB.prototype, null === (oB = yB.DocumentType) || void 0 === oB ? void 0 : oB.prototype].forEach((BB => {
              lB(BB, "before", (BB => function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                return BB.apply(this, qB(GB))
              })), lB(BB, "after", (BB => function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                return BB.apply(this, qB(GB))
              })), lB(BB, "replaceWith", (BB => function() {
                for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
                const DB = qB(GB);
                return GB.length && !DB.length ? void 0 : BB.apply(this, DB)
              }))
            })), lB(null === (jB = yB.Element) || void 0 === jB ? void 0 : jB.prototype, "insertAdjacentElement", (BB => function(OB, GB) {
              const YB = pB(GB);
              return YB ? BB.call(this, OB, YB) : null
            })), this._restoreSiteAppElementPatches = () => {
              MB.forEach((BB => BB())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let BB = !1;
            return () => {
              var OB;
              BB || (BB = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (OB = this._restoreSiteAppElementPatches) || void 0 === OB || OB.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(BB) {
            let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const GB = this._patchSiteAppElementInsertionMethods();
            try {
              const YB = BB(GB);
              return OB && GB(), YB
            } catch (BB) {
              throw GB(), BB
            }
          }
          setupSiteApp(BB) {
            const OB = this.apps[BB.id],
              GB = () => {
                var GB;
                !OB.errored && this._bufferedInvocations.length && (Wz.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${BB.id}`), this._bufferedInvocations.forEach((BB => this._runWithPreparedSiteAppElements((() => {
                  var GB;
                  return null === (GB = OB.processEvent) || void 0 === GB ? void 0 : GB.call(OB, BB)
                })))), OB.processedBuffer = !0), Object.values(this.apps).every((BB => BB.processedBuffer || BB.errored)) && (null === (GB = this._stopBuffering) || void 0 === GB || GB.call(this))
              };
            let YB = !1;
            const DB = DB => {
              OB.errored = !DB, OB.loaded = !0, Wz.info(`Site app with id ${BB.id} ${DB?"loaded":"errored"}`), YB && GB()
            };
            try {
              const {
                processEvent: GB
              } = this._runWithPreparedSiteAppElements((OB => BB.init({
                posthog: this._instance,
                callback(BB) {
                  OB(), DB(BB)
                }
              })), !1);
              GB && (OB.processEvent = GB), YB = !0
            } catch (OB) {
              Wz.error(Az + BB.id, OB), DB(!1)
            }
            if (YB && OB.loaded) try {
              GB()
            } catch (GB) {
              Wz.error(`Error while processing buffered events PostHog app with config id ${BB.id}`, GB), OB.errored = !0
            }
          }
          _setupSiteApps() {
            const BB = this.siteAppLoaders || [];
            for (const OB of BB) this.apps[OB.id] = {
              id: OB.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const OB of BB) this.setupSiteApp(OB)
          }
          _onCapturedEvent(BB) {
            if (0 === Object.keys(this.apps).length) return;
            const OB = this.globalsForEvent(BB);
            for (const GB of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var BB;
                return null === (BB = GB.processEvent) || void 0 === BB ? void 0 : BB.call(GB, OB)
              }))
            } catch (OB) {
              Wz.error(`Error while processing event ${BB.event} for site app ${GB.id}`, OB)
            }
          }
          onRemoteConfig(BB) {
            var OB, GB, YB;
            if (null === (OB = this.siteAppLoaders) || void 0 === OB ? void 0 : OB.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (BB => this._onCapturedEvent(BB)))) : void Wz.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (GB = this._stopBuffering) || void 0 === GB || GB.call(this), !BB.ok) return;
            const DB = BB.config;
            if (null === (YB = DB.siteApps) || void 0 === YB ? void 0 : YB.length)
              if (this.isEnabled)
                for (const {
                    id: jB,
                    url: yB
                  }
                  of DB.siteApps) {
                  var QB, oB;
                  jG[`__$$ph_site_app_${jB}`] = this._instance, null === (QB = jG.__PosthogExtensions__) || void 0 === QB || null === (oB = QB.loadSiteApp) || void 0 === oB || oB.call(QB, this._instance, yB, (BB => {
                    if (BB) return Wz.error(Az + jB, BB)
                  }))
                } else Wz.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      Ll = {
        tracingHeaders: class {
          constructor(BB) {
            this._instance = BB, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const BB = this._syncHostnamesForPatch();
              var OB, GB;
              BB ? (nG(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (OB = jG.__PosthogExtensions__) || void 0 === OB || null === (OB = OB.tracingHeadersPatchFns) || void 0 === OB ? void 0 : OB._patchXHR(BB, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), nG(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (GB = GB.tracingHeadersPatchFns) || void 0 === GB ? void 0 : GB._patchFetch(BB, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(BB) {
            var OB, GB, YB;
            (null === (OB = jG.__PosthogExtensions__) || void 0 === OB ? void 0 : OB.tracingHeadersPatchFns) ? BB(): null === (GB = jG.__PosthogExtensions__) || void 0 === GB || null === (YB = GB.loadExternalDependency) || void 0 === YB || YB.call(GB, this._instance, "tracing-headers", (OB => {
              if (OB) return Dz.error("failed to load script", OB);
              BB()
            }))
          }
          _getConfiguredHostnames() {
            var BB, OB;
            return null !== (BB = null !== (OB = this._instance.config.tracing_headers) && void 0 !== OB ? OB : this._instance.config.addTracingHeaders) && void 0 !== BB ? BB : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const BB = this._getConfiguredHostnames();
            return WG(BB) ? (WG(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...BB) : this._hostnamesForPatch = [...BB], BB.length > 0 ? this._hostnamesForPatch : void 0) : (WG(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = BB || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var BB, OB;
            null === (BB = this._restoreXHRPatch) || void 0 === BB || BB.call(this), null === (OB = this._restoreFetchPatch) || void 0 === OB || OB.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      gl = RD({
        surveys: class extends Uz {
          constructor(BB) {
            var OB;
            super(new mz(BB), (OB = BB, {
              get projectToken() {
                return OB.config.token
              },
              kv: new uz(OB)
            })), this._instance = BB
          }
          _sendSurveysRequest(BB, OB) {
            const GB = OB.query ? UM(BB, OB.query) : BB;
            return new Promise((BB => {
              var YB;
              this._instance._send_request({
                method: OB.method,
                url: this._instance.requestRouter.endpointFor(null !== (YB = OB.target) && void 0 !== YB ? YB : "api", GB),
                data: OB.body,
                headers: OB.headers,
                timeout: OB.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: OB.transport,
                compression: OB.compression,
                timestampMode: OB.sentAt,
                callback: BB
              })
            }))
          }
        }
      }, Kl),
      rl = {
        toolbar: class {
          constructor(BB) {
            this.instance = BB
          }
          _setToolbarState(BB) {
            jG.ph_toolbar_state = BB
          }
          _getToolbarState() {
            var BB;
            return null !== (BB = jG.ph_toolbar_state) && void 0 !== BB ? BB : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var YB, DB;
            if (so(this.instance.config)) return !1;
            if (!vO || !tO) return !1;
            BB = null !== (YB = BB) && void 0 !== YB ? YB : vO.location, GB = null !== (DB = GB) && void 0 !== DB ? DB : vO.history;
            try {
              if (!OB) {
                try {
                  vO.localStorage.setItem("test", "test"), vO.localStorage.removeItem("test")
                } catch (BB) {
                  return !1
                }
                OB = null == vO ? void 0 : vO.localStorage
              }
              const YB = Iz || hy(BB.hash, "__posthog") || hy(BB.hash, "state");
              let DB;
              const QB = YB ? PD((() => JSON.parse(atob(decodeURIComponent(YB))))) || PD((() => JSON.parse(decodeURIComponent(YB)))) : null;
              return QB && "ph_authorize" === QB.action ? (DB = QB, DB.source = "url", DB && Object.keys(DB).length > 0 && (QB.desiredHash ? BB.hash = QB.desiredHash : GB ? GB.replaceState(GB.state, "", BB.pathname + BB.search) : BB.hash = "")) : (DB = JSON.parse(OB.getItem(Fz) || "{}"), DB.source = "localstorage", delete DB.userIntent), !(!DB.token || this.instance.config.token !== DB.token || (this.loadToolbar(DB), 0))
            } catch (BB) {
              return !1
            }
          }
          _callLoadToolbar(BB) {
            const OB = jG.ph_load_toolbar || jG.ph_load_editor;
            !dG(OB) && AG(OB) ? OB(BB, this.instance) : iz.warn("No toolbar load function found")
          }
          loadToolbar(BB) {
            const OB = !!(null == tO ? void 0 : tO.getElementById("__POSTHOG_TOOLBAR__"));
            if (!vO || OB) return !1;
            const GB = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              YB = RD(RD({
                token: this.instance.config.token
              }, BB), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, GB ? {
                instrument: !1
              } : {});
            if (vO.localStorage.setItem(Fz, JSON.stringify(RD(RD({}, YB), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(YB);
            else if (0 === this._getToolbarState()) {
              var DB, QB;
              this._setToolbarState(1), null === (DB = jG.__PosthogExtensions__) || void 0 === DB || null === (QB = DB.loadExternalDependency) || void 0 === QB || QB.call(DB, this.instance, "toolbar", (BB => {
                if (BB) return iz.error("[Toolbar] Failed to load", BB), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(YB)
              })), vo(vO, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(YB)
              }))
            }
            return !0
          }
          _loadEditor(BB) {
            return this.loadToolbar(BB)
          }
          maybeLoadEditor() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(BB, OB, GB)
          }
        }
      },
      Xl = RD({
        experiments: class BB {
          get _config() {
            return this._instance.config
          }
          constructor(OB) {
            var GB = this;
            this._instance = OB, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              GB.getWebExperiments((OB => {
                BB._logInfo("retrieved web experiments from the server"), GB._flagToExperiments = new Map, OB.forEach((OB => {
                  if (OB.feature_flag_key) {
                    var YB;
                    GB._flagToExperiments && (BB._logInfo("setting flag key ", OB.feature_flag_key, " to web experiment ", OB), null === (YB = GB._flagToExperiments) || void 0 === YB || YB.set(OB.feature_flag_key, OB));
                    const DB = GB._instance.getFeatureFlag(OB.feature_flag_key);
                    UG(DB) && OB.variants[DB] && GB._applyTransforms(OB.name, DB, OB.variants[DB].transforms)
                  } else if (OB.variants)
                    for (const DB in OB.variants) {
                      const YB = OB.variants[DB];
                      BB._matchesTestVariant(YB, GB._instance) && GB._applyTransforms(OB.name, DB, YB.transforms)
                    }
                }))
              }), OB)
            }, this._instance.onFeatureFlags((BB => {
              this.onFeatureFlags(BB)
            }))
          }
          initialize() {}
          onFeatureFlags(OB) {
            if (this._is_bot()) BB._logInfo(tz);
            else if (!this._config.disable_web_experiments) {
              if (dG(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              BB._logInfo("applying feature flags", OB), OB.forEach((BB => {
                var OB;
                if (this._flagToExperiments && (null === (OB = this._flagToExperiments) || void 0 === OB ? void 0 : OB.has(BB))) {
                  var GB;
                  const OB = this._instance.getFeatureFlag(BB),
                    YB = null === (GB = this._flagToExperiments) || void 0 === GB ? void 0 : GB.get(BB);
                  OB && (null == YB ? void 0 : YB.variants[OB]) && this._applyTransforms(YB.name, OB, YB.variants[OB].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const OB = BB.getWindowLocation();
            if (null == OB ? void 0 : OB.search) {
              const GB = Ey(null == OB ? void 0 : OB.search, "__experiment_id"),
                YB = Ey(null == OB ? void 0 : OB.search, "__experiment_variant");
              GB && YB && (BB._logInfo(`previewing web experiments ${GB} && ${YB}`), this.getWebExperiments((BB => {
                this._showPreviewWebExperiment(parseInt(GB), YB, BB)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(BB, OB, GB) {
            if (this._config.disable_web_experiments && !GB) return BB([]);
            const YB = this._instance.get_property("$web_experiments");
            if (YB && !OB) return BB(YB);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: OB => BB(200 === OB.statusCode && OB.json && OB.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(OB, GB, YB) {
            const DB = YB.filter((BB => BB.id === OB));
            DB && DB.length > 0 && (BB._logInfo(`Previewing web experiment [${DB[0].name}] with variant [${GB}]`), this._applyTransforms(DB[0].name, GB, DB[0].variants[GB].transforms))
          }
          static _matchesTestVariant(OB, GB) {
            return !dG(OB.conditions) && BB._matchUrlConditions(OB, GB) && BB._matchUTMConditions(OB)
          }
          static _matchUrlConditions(OB, GB) {
            var YB;
            if (dG(OB.conditions) || dG(null === (YB = OB.conditions) || void 0 === YB ? void 0 : YB.url)) return !0;
            const DB = BB.getWindowLocation();
            if (DB) {
              var QB, oB, jB;
              const BB = dj(GB, DB.href);
              return !(null === (QB = OB.conditions) || void 0 === QB ? void 0 : QB.url) || Bl[null !== (oB = null === (jB = OB.conditions) || void 0 === jB ? void 0 : jB.urlMatchType) && void 0 !== oB ? oB : "icontains"](OB.conditions.url, BB)
            }
            return !1
          }
          static getWindowLocation() {
            return null == vO ? void 0 : vO.location
          }
          static _matchUTMConditions(BB) {
            var OB;
            if (dG(BB.conditions) || dG(null === (OB = BB.conditions) || void 0 === OB ? void 0 : OB.utm)) return !0;
            const GB = Cy();
            if (GB.utm_source) {
              var YB, DB, QB, oB, jB, yB, JB, MB;
              const OB = !(null === (YB = BB.conditions) || void 0 === YB || null === (YB = YB.utm) || void 0 === YB ? void 0 : YB.utm_campaign) || (null === (DB = BB.conditions) || void 0 === DB || null === (DB = DB.utm) || void 0 === DB ? void 0 : DB.utm_campaign) == GB.utm_campaign,
                PB = !(null === (QB = BB.conditions) || void 0 === QB || null === (QB = QB.utm) || void 0 === QB ? void 0 : QB.utm_source) || (null === (oB = BB.conditions) || void 0 === oB || null === (oB = oB.utm) || void 0 === oB ? void 0 : oB.utm_source) == GB.utm_source,
                zB = !(null === (jB = BB.conditions) || void 0 === jB || null === (jB = jB.utm) || void 0 === jB ? void 0 : jB.utm_medium) || (null === (yB = BB.conditions) || void 0 === yB || null === (yB = yB.utm) || void 0 === yB ? void 0 : yB.utm_medium) == GB.utm_medium,
                lB = !(null === (JB = BB.conditions) || void 0 === JB || null === (JB = JB.utm) || void 0 === JB ? void 0 : JB.utm_term) || (null === (MB = BB.conditions) || void 0 === MB || null === (MB = MB.utm) || void 0 === MB ? void 0 : MB.utm_term) == GB.utm_term;
              return OB && zB && lB && PB
            }
            return !1
          }
          static _logInfo(BB) {
            for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
            Xo.info(`[WebExperiments] ${BB}`, GB)
          }
          _applyTransforms(OB, GB, YB) {
            this._is_bot() ? BB._logInfo(tz) : "control" !== GB ? YB.forEach((YB => {
              if (YB.selector) {
                var DB;
                BB._logInfo(`applying transform of variant ${GB} for experiment ${OB} `, YB);
                const QB = null === (DB = document) || void 0 === DB ? void 0 : DB.querySelectorAll(YB.selector);
                null == QB || QB.forEach((BB => {
                  const OB = BB;
                  YB.html && (OB.innerHTML = YB.html), YB.css && OB.setAttribute("style", YB.css)
                }))
              }
            })) : BB._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return xO && this._instance ? sM(xO, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, Kl),
      wl = {
        conversations: class {
          constructor(BB) {
            this._instance = BB, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(BB) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = BB.ok, !BB.ok) return;
            const OB = BB.config.conversations;
            dG(OB) || (mG(OB) ? this._isConversationsEnabled = OB : (this._isConversationsEnabled = OB.enabled, this._remoteConfig = OB), this.loadIfEnabled())
          }
          reset() {
            var BB;
            null === (BB = this._conversationsManager) || void 0 === BB || BB.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (so(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const BB = null == jG ? void 0 : jG.__PosthogExtensions__;
            if (BB && !nG(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const OB = BB.initConversations;
                  if (OB) return this._completeInitialization(OB), void(this._isInitializing = !1);
                  const GB = BB.loadExternalDependency;
                  if (!GB) return void this._handleLoadError(EO);
                  GB(this._instance, "conversations", (OB => {
                    OB || !BB.initConversations ? this._handleLoadError("Could not load conversations script", OB) : this._completeInitialization(BB.initConversations), this._isInitializing = !1
                  }))
                } catch (BB) {
                  this._handleLoadError("Error initializing conversations", BB), this._isInitializing = !1
                }
              } else Ol.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(BB) {
            if (this._remoteConfig) try {
              this._conversationsManager = BB(this._remoteConfig, this._instance), this._loadFailed = !1, Ol.info("Conversations loaded successfully")
            } catch (BB) {
              this._handleLoadError("Error completing conversations initialization", BB)
            } else Ol.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(BB, OB) {
            Ol.error(BB, OB), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : Ol.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !kG(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : so(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : nG(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? dG(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == jG ? void 0 : jG.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var BB, OB;
            return null !== (BB = null === (OB = this._conversationsManager) || void 0 === OB ? void 0 : OB.isVisible()) && void 0 !== BB && BB
          }
          sendMessage(BB, OB, GB) {
            var YB = this;
            return aG((function*() {
              return YB._conversationsManager ? YB._conversationsManager.sendMessage(BB, OB, GB) : (Ol.warn(Gl), null)
            }))()
          }
          getMessages(BB, OB) {
            var GB = this;
            return aG((function*() {
              return GB._conversationsManager ? GB._conversationsManager.getMessages(BB, OB) : (Ol.warn(Gl), null)
            }))()
          }
          markAsRead(BB) {
            var OB = this;
            return aG((function*() {
              return OB._conversationsManager ? OB._conversationsManager.markAsRead(BB) : (Ol.warn(Gl), null)
            }))()
          }
          getTickets(BB) {
            var OB = this;
            return aG((function*() {
              return OB._conversationsManager ? OB._conversationsManager.getTickets(BB) : (Ol.warn(Gl), null)
            }))()
          }
          requestRestoreLink(BB) {
            var OB = this;
            return aG((function*() {
              return OB._conversationsManager ? OB._conversationsManager.requestRestoreLink(BB) : (Ol.warn(Gl), null)
            }))()
          }
          restoreFromToken(BB) {
            var OB = this;
            return aG((function*() {
              return OB._conversationsManager ? OB._conversationsManager.restoreFromToken(BB) : (Ol.warn(Gl), null)
            }))()
          }
          restoreFromUrlToken() {
            var BB = this;
            return aG((function*() {
              return BB._conversationsManager ? BB._conversationsManager.restoreFromUrlToken() : (Ol.warn(Gl), null)
            }))()
          }
          getCurrentTicketId() {
            var BB, OB;
            return null !== (BB = null === (OB = this._conversationsManager) || void 0 === OB ? void 0 : OB.getCurrentTicketId()) && void 0 !== BB ? BB : null
          }
          getWidgetSessionId() {
            var BB, OB;
            return null !== (BB = null === (OB = this._conversationsManager) || void 0 === OB ? void 0 : OB.getWidgetSessionId()) && void 0 !== BB ? BB : null
          }
          _onIdentityChanged() {
            var BB;
            null === (BB = this._conversationsManager) || void 0 === BB || BB.setIdentity()
          }
          _onIdentityCleared() {
            var BB;
            null === (BB = this._conversationsManager) || void 0 === BB || BB.clearIdentity()
          }
        }
      },
      El = {
        logs: class extends Ml {
          constructor(BB) {
            super({
              get() {
                var OB;
                return null == BB || null === (OB = BB.config) || void 0 === OB ? void 0 : OB.logs
              },
              captureHintKey: hB,
              get remoteConfigWillArrive() {
                var OB, GB;
                return !(null === (OB = BB._shouldDisableFlags) || void 0 === OB ? void 0 : OB.call(BB)) || !!(null === (GB = jG._POSTHOG_REMOTE_CONFIG) || void 0 === GB || null === (GB = GB[BB.config.token]) || void 0 === GB ? void 0 : GB.config)
              }
            }, (() => function(BB) {
              var OB;
              const GB = {};
              if (GB.distinctId = BB.get_distinct_id(), BB.sessionManager) {
                const {
                  sessionId: OB,
                  windowId: YB,
                  sessionStartTimestamp: DB,
                  lastActivityTimestamp: QB
                } = BB.sessionManager.checkAndGetSessionAndWindowId(!0);
                GB.sessionId = OB, GB.windowId = YB, dG(DB) || (GB.sessionStartTimestamp = DB), dG(QB) || (GB.lastActivityTimestamp = QB)
              }
              if ((null == jG || null === (OB = jG.location) || void 0 === OB ? void 0 : OB.href) && (GB.currentUrl = BB.config.disable_capture_url_hashes ? MD(jG.location.href) : jG.location.href), BB.featureFlags) {
                const OB = BB.featureFlags.getFlags();
                OB && OB.length > 0 && (GB.activeFeatureFlags = OB)
              }
              return GB
            }(BB))), this._instance = BB, this.name = AP, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const BB = wo("[logs]"),
              OB = null == jG ? void 0 : jG.__PosthogExtensions__;
            if (!OB) return void BB.error("PostHog Extensions not found.");
            const GB = OB.loadExternalDependency;
            if (GB) return BB => {
              GB(this._instance, "logs", (GB => {
                const YB = OB.logs;
                BB(GB, (null == YB ? void 0 : YB.initializeLogs) ? {
                  initialize: BB => YB.initializeLogs(BB),
                  replay(BB, OB) {
                    var GB;
                    return null === (GB = YB.replayConsoleBuffer) || void 0 === GB ? void 0 : GB.call(YB, BB, OB)
                  }
                } : void 0)
              }))
            };
            BB.error(EO)
          }
        }
      },
      cl = {
        metrics: class {
          constructor(BB) {
            this._instance = BB, this._logger = wo("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var BB;
            if (this._disposed) return;
            const OB = !!(null === (BB = this._instance.config.metrics) || void 0 === BB ? void 0 : BB.network);
            OB && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (BB => {
              let OB = !0;
              const GB = () => OB ? (BB => {
                  var OB;
                  const GB = null === (OB = BB.config.metrics) || void 0 === OB ? void 0 : OB.network;
                  return !0 === GB ? {} : GB || void 0
                })(BB) : void 0,
                YB = Rl(BB, GB),
                DB = Wl(BB, GB);
              return () => {
                OB = !1, YB(), DB()
              }
            })(this._instance) : !OB && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var BB;
            const OB = null === (BB = this._instance) || void 0 === BB || null === (BB = BB.config) || void 0 === BB ? void 0 : BB.metrics;
            var GB;
            return this._core && this._resolvedFrom === OB || (null === (GB = this._core) || void 0 === GB || GB.reset(), this._resolvedFrom = OB, this._core = new go(this._createHost(), function(BB) {
              var OB, GB, YB, DB, QB;
              const oB = null == BB ? void 0 : BB.resourceAttributes;
              return {
                serviceName: null !== (OB = null == oB ? void 0 : oB["service.name"]) && void 0 !== OB ? OB : null == BB ? void 0 : BB.serviceName,
                serviceVersion: null !== (GB = null == oB ? void 0 : oB["service.version"]) && void 0 !== GB ? GB : null == BB ? void 0 : BB.serviceVersion,
                environment: null !== (YB = null == oB ? void 0 : oB["deployment.environment"]) && void 0 !== YB ? YB : null == BB ? void 0 : BB.environment,
                resourceAttributes: oB,
                beforeSend: null == BB ? void 0 : BB.beforeSend,
                flushIntervalMs: null !== (DB = null == BB ? void 0 : BB.flushIntervalMs) && void 0 !== DB ? DB : 1e4,
                maxSeriesPerFlush: null !== (QB = null == BB ? void 0 : BB.maxSeriesPerFlush) && void 0 !== QB ? QB : 1e3
              }
            }(OB), this._logger)), this._core
          }
          count(BB) {
            let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              GB = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(BB, OB, GB)
          }
          gauge(BB, OB, GB) {
            this._getCore().gauge(BB, OB, GB)
          }
          histogram(BB, OB, GB) {
            this._getCore().histogram(BB, OB, GB)
          }
          flush(BB) {
            if (!this._core) return Promise.resolve();
            if (BB) {
              const OB = this._core.drainWindow();
              return OB && this._sendMetricsBatch(OB, BB), Promise.resolve()
            }
            return this._core.flush().catch((BB => this._logger.error("PostHog metrics flush failed:", BB)))
          }
          reset() {
            var BB;
            null === (BB = this._core) || void 0 === BB || BB.reset()
          }
          dispose() {
            var BB, OB;
            this._disposed = !0, null === (BB = this._stopNetworkMetrics) || void 0 === BB || BB.call(this), this._stopNetworkMetrics = void 0, null === (OB = this._core) || void 0 === OB || OB.reset()
          }
          _createHost() {
            const BB = this._instance,
              OB = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !BB.is_capturing()
              },
              _sendMetricsBatch: BB => OB._sendMetricsBatch(BB),
              getLibraryId: () => QB.LIB_NAME,
              getLibraryVersion: () => QB.LIB_VERSION
            }
          }
          _sendMetricsBatch(BB, OB) {
            return new Promise((GB => {
              let YB = !1;
              const DB = BB => {
                  YB || (YB = !0, clearTimeout(QB), GB(BB))
                },
                QB = setTimeout((() => DB({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(RD(RD({
                method: "POST",
                url: this._metricsUrl(),
                data: BB,
                compression: "best-available",
                batchKey: "metrics"
              }, OB && {
                transport: OB
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(BB) {
                  const OB = BB.statusCode;
                  if (OB >= 200 && 300 > OB) DB({
                    kind: "ok"
                  });
                  else if (413 === OB) DB({
                    kind: "too-large"
                  });
                  else if (0 !== OB && 408 !== OB && 429 !== OB && 500 > OB) DB({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${OB}`)
                  });
                  else {
                    var GB;
                    DB({
                      kind: "retry-later",
                      error: null !== (GB = BB.error) && void 0 !== GB ? GB : new Error(`metrics request failed with status ${OB}`)
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
      hl = {
        webMCP: class {
          constructor(BB) {
            this._instance = BB, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const BB = null == tO ? void 0 : tO.modelContext;
            if (!BB || !AG(BB.registerTool)) return;
            const OB = Al.get(BB);
            if (OB) return OB.instances.add(this._instance), void(this._isPatched = !0);
            const GB = {
                instances: new Set([this._instance])
              },
              YB = BB.registerTool,
              DB = this;
            Yz(BB, "registerTool", (BB => {
              const OB = BB;
              return function(BB) {
                let YB = BB;
                for (var QB = arguments.length, oB = new Array(QB > 1 ? QB - 1 : 0), jB = 1; jB < QB; jB++) oB[jB - 1] = arguments[jB];
                try {
                  YB = DB._wrapTool(BB, GB)
                } catch (GB) {
                  return OB.call(this, BB, ...oB)
                }
                return OB.call(this, YB, ...oB)
              }
            })), BB.registerTool !== YB && (Al.set(BB, GB), this._isPatched = !0)
          }
          _wrapTool(BB, OB) {
            if (!BB || !AG(BB.execute)) return BB;
            const GB = BB.execute,
              YB = this,
              {
                tool: DB,
                injected: QB
              } = function(BB, OB) {
                const GB = {
                    intent: !1,
                    model: !1
                  },
                  YB = BB.inputSchema;
                if (! function(BB) {
                    return !!nG(BB) || VG(BB) && Object.keys(BB).every((BB => Vl.has(BB) || BB.startsWith("x-"))) && !0 !== BB.additionalProperties && !VG(BB.additionalProperties) && (!BB.type || "object" === BB.type) && (!BB.properties || VG(BB.properties)) && (!BB.required || WG(BB.required))
                  }(YB)) return {
                  tool: fl(BB),
                  injected: GB
                };
                const DB = (null == YB ? void 0 : YB.properties) || {},
                  QB = BB => Ul(DB, BB) || WG(null == YB ? void 0 : YB.required) && YB.required.includes(BB);
                if (GB.intent = OB.intent && !QB("context"), GB.model = OB.model && !QB("llm_model"), !GB.intent && !GB.model) return {
                  tool: fl(BB),
                  injected: GB
                };
                const oB = RD({}, DB),
                  jB = WG(null == YB ? void 0 : YB.required) ? [...YB.required] : [];
                return GB.intent && (oB.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, jB.includes("context") || jB.push("context")), GB.model && (oB.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, jB.includes("llm_model") || jB.push("llm_model")), {
                  tool: fl(BB, RD(RD({}, YB), {}, {
                    type: (null == YB ? void 0 : YB.type) || "object",
                    properties: oB,
                    required: jB
                  })),
                  injected: GB
                }
              }(BB, function(BB) {
                const OB = {
                  intent: !1,
                  model: !1
                };
                for (const GB of BB.instances) {
                  const BB = nl(GB.config.capture_webmcp);
                  OB.intent || (OB.intent = !0 === (null == BB ? void 0 : BB.intent)), OB.model || (OB.model = !0 === (null == BB ? void 0 : BB.model))
                }
                return OB
              }(OB));
            return Object.defineProperty(DB, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var oB = arguments.length, jB = new Array(oB), yB = 0; yB < oB; yB++) jB[yB] = arguments[yB];
                const JB = new Date,
                  MB = function(BB, OB) {
                    if (!VG(BB)) return {};
                    try {
                      const GB = OB.intent ? kl(BB.context, 2048, !0) : void 0,
                        YB = OB.model ? kl(BB.llm_model, 256) : void 0;
                      return RD(RD({}, GB && "{}" !== GB ? {
                        intent: GB
                      } : {}), YB && "unknown" !== YB.toLowerCase() ? {
                        model: YB
                      } : {})
                    } catch (BB) {
                      return {}
                    }
                  }(jB[0], QB),
                  PB = function(BB, OB) {
                    const GB = BB[0];
                    if (!VG(GB)) return BB;
                    try {
                      const YB = OB.intent && Ul(GB, "context"),
                        DB = OB.model && Ul(GB, "llm_model");
                      if (!YB && !DB) return BB;
                      const QB = RD({}, GB);
                      return YB && delete QB.context, DB && delete QB.llm_model, [QB, ...BB.slice(1)]
                    } catch (OB) {
                      return BB
                    }
                  }(jB, QB);
                let zB;
                try {
                  zB = GB.apply(this === DB ? BB : this, PB)
                } catch (BB) {
                  throw YB._captureToolCall(OB, DB, JB, !0, MB), BB
                }
                return (lB = zB) && "function" == typeof lB.then ? Promise.resolve(zB).then((BB => (YB._captureToolCall(OB, DB, JB, dl(BB), MB), BB)), (BB => {
                  throw YB._captureToolCall(OB, DB, JB, !0, MB), BB
                })) : (YB._captureToolCall(OB, DB, JB, dl(zB), MB), zB);
                var lB
              }
            }), DB
          }
          _captureToolCall(BB, OB, GB, YB, DB) {
            const QB = Date.now() - GB.getTime();
            for (const oB of BB.instances) {
              const jB = nl(oB.config.capture_webmcp);
              if (jB) try {
                oB.capture("$mcp_tool_call", RD(RD({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: OB.name,
                  $mcp_resource_name: OB.name,
                  $mcp_tool_description: OB.description,
                  $mcp_server_name: null == BG ? void 0 : BG.hostname,
                  $mcp_duration_ms: QB,
                  $mcp_is_error: YB
                }, jB.intent && DB.intent ? {
                  $mcp_intent: DB.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), jB.model && DB.model ? {
                  $mcp_llm_model: DB.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: GB
                })
              } catch (BB) {
                continue
              }
            }
          }
        }
      };
    TP.__defaultExtensionClasses = RD({}, RD(RD(RD(RD(RD(RD(RD(RD(RD(RD(RD(RD(RD(RD({}, Kl), ul), ml), Il), Fl), il), gl), Ll), rl), Xl), wl), El), cl), hl));
    const al = function() {
      QB.SDK_DIST_CHANNEL = "npm";
      const BB = UP[wP] = new TP;
      return function() {
        function BB() {
          BB.done || (BB.done = !0, XM = !1, co(UP, (function(BB) {
            BB._dom_loaded()
          })))
        }(null == tO ? void 0 : tO.addEventListener) ? "complete" === tO.readyState ? BB() : vo(tO, "DOMContentLoaded", BB, {
          capture: !1
        }): vO && Xo.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), BB
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);