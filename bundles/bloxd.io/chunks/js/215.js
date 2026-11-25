export const id = 215;
export const ids = [215];
export const modules = {
  34852: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => UQ,
      i: () => IH
    });
    const OM = "0.9.4",
      SM = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: OM
      };
    var jM = SM;
    const aM = "$early_access_features",
      PM = "$active_feature_flags",
      nM = "$feature_flag_details",
      QM = "$feature_flag_errors",
      zM = "$feature_flag_evaluated_at",
      LM = "$feature_flag_request_id",
      mM = "$minimal_flag_called_events",
      HM = "$enabled_feature_flags",
      hM = "$stored_group_properties",
      JM = "$stored_person_properties",
      dM = "$flag_call_reported",
      yM = "$flag_call_reported_session_id",
      lM = "$feature_flag_payloads",
      EM = "$override_feature_flags",
      UM = "$override_feature_flag_payloads",
      GM = "visibilitychange",
      CM = "$people_distinct_id",
      eM = "distinct_id",
      bM = "$device_id",
      wM = "$device_model",
      tM = "__alias",
      gM = "__cmpns",
      uM = "$fbc",
      RM = "$fbc_persistence",
      pM = "$fbp",
      WM = "$fbp_persistence",
      sM = "__timers",
      DM = "$autocapture_disabled_server_side",
      kM = "$heatmaps_enabled_server_side",
      ZM = "$exception_capture_enabled_server_side",
      oM = "$error_tracking_suppression_rules",
      fM = "$error_tracking_capture_extension_exceptions",
      YM = "$web_vitals_enabled_server_side",
      NM = "$dead_clicks_enabled_server_side",
      AM = "$product_tours_enabled_server_side",
      xM = "$logs_capture_enabled_server_side",
      vM = "$web_vitals_allowed_metrics",
      FM = "$session_recording_remote_config",
      BM = "$session_recording_enabled_server_side",
      XM = "$replay_sample_rate",
      IM = "$replay_override_sampling",
      KM = "$replay_override_linked_flag",
      qM = "$replay_override_url_trigger",
      TM = "$replay_override_event_trigger",
      VM = "$sesid",
      cM = "$session_is_sampled",
      Mr = "$session_past_minimum_duration",
      rr = "$session_recording_url_trigger_activated_session",
      ir = "$session_recording_event_trigger_activated_session",
      Or = "$debug_first_full_snapshot_timestamp",
      Sr = "$sess_rec_flush_size",
      jr = "$groups",
      ar = "$surveys",
      Pr = "$surveys_loaded_at",
      nr = "$surveys_activated",
      Qr = "$surveys_activated_session",
      zr = "$surveys_activated_timestamps",
      Lr = "ph_product_tours",
      mr = "$product_tours_activated",
      Hr = "$product_tours_activated_session",
      hr = "$conversations_widget_session_id",
      Jr = "$conversations_ticket_id",
      dr = "$conversations_widget_state",
      yr = "$conversations_user_traits",
      lr = "$user_state",
      Er = "$client_session_props",
      Ur = "$capture_rate_limit",
      Gr = "$initial_campaign_params",
      Cr = "$initial_referrer_info",
      er = "$initial_person_info",
      br = "$epp",
      wr = "$posthog_cookieless",
      tr = "$cookieless_mode",
      gr = "$sdk_debug_extensions_init_method",
      ur = "$sdk_debug_extensions_init_time_ms",
      Rr = "$sdk_debug_recording_script_not_loaded",
      pr = "$sdk_debug_replay_stale_config",
      Wr = "$sdk_debug_replay_event_trigger_status",
      sr = "$sdk_debug_replay_linked_flag_trigger_status",
      Dr = "$sdk_debug_replay_matched_recording_trigger_groups",
      kr = "$sdk_debug_replay_pending_trigger_conditions",
      Zr = "$sdk_debug_replay_remote_trigger_matching_config",
      or = "$sdk_debug_replay_trigger_groups_count",
      fr = "$sdk_debug_replay_url_trigger_status",
      Yr = "$session_recording_start_reason",
      Nr = "PostHog loadExternalDependency extension not found.",
      Ar = "anonymous",
      xr = "identified",
      vr = "identified_only",
      Fr = "beforeunload",
      Br = "$pageview",
      Xr = "$pageleave",
      Ir = "$identify",
      Kr = "$groupidentify",
      qr = "u" > typeof window ? window : void 0,
      Tr = "u" > typeof globalThis ? globalThis : qr,
      Vr = null == Tr ? void 0 : Tr.navigator,
      cr = null == Tr ? void 0 : Tr.document,
      Mi = null == Tr ? void 0 : Tr.location,
      ri = null == Tr ? void 0 : Tr.fetch,
      ii = (null == Tr ? void 0 : Tr.XMLHttpRequest) && "withCredentials" in new Tr.XMLHttpRequest ? Tr.XMLHttpRequest : void 0,
      Oi = null == Tr ? void 0 : Tr.AbortController,
      Si = null == Tr ? void 0 : Tr.CompressionStream,
      ji = null == Vr ? void 0 : Vr.userAgent,
      ai = "undefined" != typeof globalThis ? globalThis : qr;
    ai && "undefined" == typeof self && (ai.self = ai), ai && "undefined" == typeof File && (ai.File = function() {});
    const Pi = null != qr ? qr : {};
    var ni = function(MM) {
        return MM.AnonymousId = "anonymous_id", MM.DistinctId = "distinct_id", MM.Props = "props", MM.EnablePersonProcessing = "enable_person_processing", MM.PersonMode = "person_mode", MM.FeatureFlagDetails = "feature_flag_details", MM.FeatureFlags = "feature_flags", MM.FeatureFlagPayloads = "feature_flag_payloads", MM.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", MM.BootstrapFeatureFlags = "bootstrap_feature_flags", MM.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", MM.OverrideFeatureFlags = "override_feature_flags", MM.Queue = "queue", MM.AiQueue = "ai_queue", MM.AiCaptureQueue = "ai_capture_queue", MM.LogsQueue = "logs_queue", MM.OptedOut = "opted_out", MM.SessionId = "session_id", MM.SessionStartTimestamp = "session_start_timestamp", MM.SessionLastTimestamp = "session_timestamp", MM.PersonProperties = "person_properties", MM.GroupProperties = "group_properties", MM.InstalledAppBuild = "installed_app_build", MM.InstalledAppVersion = "installed_app_version", MM.SessionReplay = "session_replay", MM.PushRegistered = "push_registered", MM.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", MM.SurveyLastSeenDate = "survey_last_seen_date", MM.SurveysInProgress = "surveys_in_progress", MM.SurveysSeen = "surveys_seen", MM.Surveys = "surveys", MM.RemoteConfig = "remote_config", MM.FlagsEndpointWasHit = "flags_endpoint_was_hit", MM.DeviceId = "device_id", MM
      }({}),
      Qi = function(MM) {
        return MM.GZipJS = "gzip-js", MM.Base64 = "base64", MM
      }({});
    const zi = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      Li = ["token"];

    function mi(MM, rM) {
      return -1 !== MM.indexOf(rM)
    }
    const Hi = function(MM) {
        return MM.trim()
      },
      Ji = function(MM) {
        return MM.replace(/^\$/, "")
      };

    function di(MM) {
      var rM;
      const iM = [];
      return null !== (rM = JSON.stringify(MM, (function(MM, rM) {
        if ("bigint" == typeof rM) return rM.toString();
        if ("function" != typeof rM && "symbol" != typeof rM) {
          if (rM instanceof Error) return {
            name: rM.name,
            message: rM.message,
            stack: rM.stack
          };
          if (rM && "object" == typeof rM) {
            for (; iM.length > 0 && iM[iM.length - 1] !== this;) iM.pop();
            if (iM.includes(rM)) return "[Circular]";
            iM.push(rM)
          }
          return rM
        }
      }))) && void 0 !== rM ? rM : "null"
    }
    const yi = Object.prototype,
      li = yi.hasOwnProperty,
      Ei = yi.toString,
      Ui = Array.isArray || function(MM) {
        return "[object Array]" === Ei.call(MM)
      },
      Gi = MM => "function" == typeof MM,
      Ci = MM => MM === Object(MM) && !Ui(MM),
      ei = MM => {
        if (Ci(MM)) {
          for (const rM in MM)
            if (li.call(MM, rM)) return !1;
          return !0
        }
        return !1
      },
      bi = MM => void 0 === MM,
      wi = MM => "[object String]" == Ei.call(MM),
      ti = MM => wi(MM) && 0 === MM.trim().length,
      gi = MM => null === MM,
      ui = MM => bi(MM) || gi(MM),
      Ri = MM => "[object Number]" == Ei.call(MM) && MM == MM,
      Wi = MM => Ri(MM) && MM > 0,
      si = MM => "[object Boolean]" === Ei.call(MM),
      Di = MM => mi(zi, MM),
      ki = MM => mi(Li, MM);

    function Zi(MM) {
      return null === MM || "object" != typeof MM
    }

    function oi(MM, rM) {
      return {}.toString.call(MM) === `[object ${rM}]`
    }

    function fi(MM) {
      switch ({}.toString.call(MM)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return Ni(MM, Error)
      }
    }

    function Yi(MM) {
      return "u" > typeof Event && Ni(MM, Event)
    }

    function Ni(MM, rM) {
      try {
        return MM instanceof rM
      } catch (MM) {
        return !1
      }
    }
    const Ai = [!0, "true", 1, "1", "yes"],
      xi = MM => mi(Ai, MM),
      vi = [!1, "false", 0, "0", "no"];

    function Fi(MM, rM, iM, OM, SM, jM, aM) {
      try {
        var PM = MM[jM](aM),
          nM = PM.value
      } catch (MM) {
        return void iM(MM)
      }
      PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
    }

    function Bi(MM) {
      return function() {
        var rM = this,
          iM = arguments;
        return new Promise((function(OM, SM) {
          var jM = MM.apply(rM, iM);

          function aM(MM) {
            Fi(jM, OM, SM, aM, PM, "next", MM)
          }

          function PM(MM) {
            Fi(jM, OM, SM, aM, PM, "throw", MM)
          }
          aM(void 0)
        }))
      }
    }
    const Xi = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      Ii = new Map,
      Ki = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!MM) return !1;
        const iM = function(MM, rM) {
            let iM = "";
            for (let OM = 0; rM.length > OM; OM++) {
              const MM = rM[OM];
              iM += MM.length + ":" + MM
            }
            return MM.length + ":" + MM + "|" + rM.length + ":" + iM
          }(MM, rM),
          OM = Ii.get(iM);
        if (void 0 !== OM) return OM;
        const SM = MM.toLowerCase(),
          jM = Xi.concat(rM).some((MM => -1 !== SM.indexOf(MM.toLowerCase())));
        return 256 > Ii.size || Ii.clear(), Ii.set(iM, jM), jM
      };

    function qi(MM, rM, iM, OM, SM) {
      return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), Ri(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM : (OM.warn(" must be a number. using max or fallback. max: " + iM + ", fallback: " + SM), qi(null != SM ? SM : iM, rM, iM, OM))
    }
    var Ti = class {
      constructor(MM) {
        this._buckets = {}, this._onBucketRateLimited = MM._onBucketRateLimited, this._bucketSize = qi(MM.bucketSize, 0, 100, MM._logger), this._refillRate = qi(MM.refillRate, 0, this._bucketSize, MM._logger), this._refillInterval = qi(MM.refillInterval, 0, 864e5, MM._logger)
      }
      _applyRefill(MM, rM) {
        const iM = Math.floor((rM - MM.lastAccess) / this._refillInterval);
        iM > 0 && (MM.tokens = Math.min(MM.tokens + iM * this._refillRate, this._bucketSize), MM.lastAccess = MM.lastAccess + iM * this._refillInterval)
      }
      consumeRateLimit(MM) {
        var rM;
        const iM = Date.now(),
          OM = String(MM);
        let SM = this._buckets[OM];
        return SM ? this._applyRefill(SM, iM) : (SM = {
          tokens: this._bucketSize,
          lastAccess: iM
        }, this._buckets[OM] = SM), 0 === SM.tokens || (SM.tokens--, 0 === SM.tokens && (null === (rM = this._onBucketRateLimited) || void 0 === rM || rM.call(this, MM)), 0 === SM.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const Vi = "Mobile",
      ci = "Android",
      MO = "Tablet",
      rO = "Android Tablet",
      iO = "iPad",
      OO = "Apple Watch",
      SO = "Safari",
      jO = "BlackBerry",
      aO = "Samsung Internet",
      PO = "Chrome",
      nO = "Chrome iOS",
      QO = "Internet Explorer",
      zO = "Internet Explorer Mobile",
      LO = "Opera",
      mO = "Microsoft Edge",
      HO = "Firefox",
      hO = "Firefox iOS",
      JO = "Nintendo",
      dO = "PlayStation",
      yO = "Xbox",
      lO = "Android Mobile",
      EO = "Mobile Safari",
      UO = "Windows",
      GO = "Windows Phone",
      CO = "Nokia",
      eO = "Ouya",
      bO = "Generic " + Vi.toLowerCase(),
      wO = "Generic " + MO.toLowerCase(),
      tO = "Konqueror",
      gO = "Oculus Browser",
      uO = "Vivaldi",
      RO = "Yandex",
      pO = "Whale",
      WO = "DuckDuckGo",
      sO = "Pale Moon",
      DO = "Waterfox",
      kO = "Brave",
      ZO = "Claude",
      oO = "Codex",
      fO = "ChatGPT",
      YO = "Google Search App",
      NO = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      AO = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      xO = new RegExp(yO, "i"),
      vO = new RegExp("PlayStation \\w+", "i"),
      FO = new RegExp("Nintendo \\w+", "i"),
      BO = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      XO = {
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
      IO = function(MM, rM, iM, OM) {
        rM = rM || "";
        const SM = function(MM) {
          return (null == MM ? void 0 : MM.brave) ? kO : null
        }(iM);
        return SM || ((null == OM ? void 0 : OM.detectGoogleSearchApp) && mi(MM, "GSA/") ? YO : mi(MM, " OPR/") && mi(MM, "Mini") ? "Opera Mini" : mi(MM, " OPR/") ? LO : BO.test(MM) ? jO : mi(MM, "IEMobile") || mi(MM, "WPDesktop") ? zO : mi(MM, "OculusBrowser") ? gO : mi(MM, "SamsungBrowser") ? aO : mi(MM, "Edge") || mi(MM, "Edg/") ? mO : mi(MM, "Vivaldi/") ? uO : mi(MM, "YaBrowser/") ? RO : mi(MM, "Whale/") ? pO : mi(MM, "DuckDuckGo/") || mi(MM, "Ddg/") ? WO : mi(MM, "Claude/") ? ZO : mi(MM, "Codex/") ? oO : mi(MM, "ChatGPT/") ? fO : mi(MM, "FBIOS") ? "Facebook Mobile" : mi(MM, "UCWEB") || mi(MM, "UCBrowser") ? "UC Browser" : mi(MM, "CriOS") ? nO : mi(MM, "CrMo") || mi(MM, PO) ? PO : mi(MM, ci) && mi(MM, SO) ? lO : mi(MM, "FxiOS") ? hO : mi(MM.toLowerCase(), tO.toLowerCase()) ? tO : mi(MM, "Brave/") ? kO : ((MM, rM) => rM && mi(rM, "Apple") || function(MM) {
          return mi(MM, SO) && !mi(MM, PO) && !mi(MM, ci)
        }(MM))(MM, rM) ? mi(MM, Vi) ? EO : SO : mi(MM, "PaleMoon/") ? sO : mi(MM, "Waterfox/") ? DO : mi(MM, HO) ? HO : mi(MM, "MSIE") || mi(MM, "Trident/") ? QO : mi(MM, "Gecko") ? HO : "")
      },
      KO = {
        [zO]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [mO]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [PO]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [nO]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [SO]: [NO],
        [EO]: [NO],
        [LO]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [HO]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [hO]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [tO]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [jO]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), NO],
        [lO]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [aO]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [gO]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [uO]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [RO]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [pO]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [kO]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [ZO]: [AO],
        [oO]: [AO],
        [fO]: [AO],
        [WO]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [sO]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [DO]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [YO]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [QO]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      qO = function(MM, rM, iM, OM) {
        const SM = IO(MM, rM, iM, OM),
          jM = KO[SM];
        if (bi(jM)) return null;
        for (let aM = 0; jM.length > aM; aM++) {
          const rM = MM.match(jM[aM]);
          if (rM) return parseFloat(rM[rM.length - 2])
        }
        return null
      },
      TO = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), MM => [yO, MM && MM[1] || ""]],
        [new RegExp(JO, "i"), [JO, ""]],
        [new RegExp(dO, "i"), [dO, ""]],
        [BO, [jO, ""]],
        [new RegExp(UO, "i"), (MM, rM) => {
          if (/Phone/.test(rM) || /WPDesktop/.test(rM)) return [GO, ""];
          if (new RegExp(Vi).test(rM) && !/IEMobile\b/.test(rM)) return ["Windows Mobile", ""];
          const iM = /Windows NT ([0-9.]+)/i.exec(rM);
          if (iM && iM[1]) {
            let MM = XO[iM[1]] || "";
            return /arm/i.test(rM) && (MM = "RT"), [UO, MM]
          }
          return [UO, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, MM => MM && MM[3] ? ["iOS", [MM[3], MM[4], MM[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, MM => {
          let rM = "";
          return MM && MM.length >= 3 && (rM = bi(MM[2]) ? MM[3] : MM[2]), ["watchOS", rM]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), MM => MM && MM[2] ? [ci, [MM[2], MM[3], MM[4] || "0"].join(".")] : [ci, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, MM => {
          const rM = ["Mac OS X", ""];
          return MM && MM[1] && (rM[1] = [MM[1], MM[2], MM[3] || "0"].join(".")), rM
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      VO = function(MM) {
        for (let rM = 0; TO.length > rM; rM++) {
          const [iM, OM] = TO[rM], SM = iM.exec(MM), jM = SM && (Gi(OM) ? OM(SM, MM) : OM);
          if (jM) return jM
        }
        return ["", ""]
      },
      cO = function(MM) {
        return FO.test(MM) ? JO : vO.test(MM) ? dO : xO.test(MM) ? yO : new RegExp(eO, "i").test(MM) ? eO : new RegExp("(Windows Phone|WPDesktop)", "i").test(MM) ? GO : /iPad/.test(MM) ? iO : /iPod/.test(MM) ? "iPod Touch" : /iPhone/.test(MM) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(MM) ? OO : BO.test(MM) ? jO : /(kobo)\s(ereader|touch)/i.test(MM) ? "Kobo" : new RegExp(CO, "i").test(MM) ? CO : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(MM) || /(kf[a-z]+)( bui|\)).+silk\//i.test(MM) ? "Kindle Fire" : /(Android|ZTE)/i.test(MM) ? new RegExp(Vi).test(MM) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(MM) || /pixel[\daxl ]{1,6}/i.test(MM) && !/pixel c/i.test(MM) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(MM) || /lmy47v/i.test(MM) && !/QTAQZ3/i.test(MM) ? ci : rO : new RegExp("(pda|Mobile)", "i").test(MM) ? bO : new RegExp(MO, "i").test(MM) && !new RegExp("Tablet pc", "i").test(MM) ? wO : ""
      },
      MS = function(MM, rM) {
        var iM;
        const OM = cO(MM);
        return OM === iO || OM === rO || "Kobo" === OM || "Kindle Fire" === OM || OM === wO ? MO : OM === JO || OM === yO || OM === dO || OM === eO ? "Console" : OM === OO ? "Wearable" : OM ? Vi : "Android" === (null == rM ? void 0 : rM.userAgentDataPlatform) && (null !== (iM = null == rM ? void 0 : rM.maxTouchPoints) && void 0 !== iM ? iM : 0) > 0 ? 600 > Math.min(null !== (SM = null == rM ? void 0 : rM.screenWidth) && void 0 !== SM ? SM : 0, null !== (jM = null == rM ? void 0 : rM.screenHeight) && void 0 !== jM ? jM : 0) / (null !== (aM = null == rM ? void 0 : rM.devicePixelRatio) && void 0 !== aM ? aM : 1) ? Vi : MO : "Desktop";
        var SM, jM, aM
      },
      rS = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      iS = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", rS],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", rS],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", rS],
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
      OS = "[Truncated]",
      SS = "[Unserializable]";

    function jS(MM) {
      let rM = "";
      for (let iM = 0; MM.length > iM; iM++) {
        const OM = MM.charCodeAt(iM);
        if (55296 > OM || OM > 56319) rM += 56320 > OM || OM > 57343 ? MM[iM] : "\ufffd";
        else {
          const OM = MM.charCodeAt(iM + 1);
          56320 > OM || OM > 57343 ? rM += "\ufffd" : (rM += MM[iM] + MM[iM + 1], iM++)
        }
      }
      return rM
    }

    function aS(MM, rM) {
      if (!rM) return MM;
      let iM = [];
      try {
        iM = Object.keys(rM)
      } catch (MM) {
        iM = []
      }
      for (const OM of iM) {
        let iM;
        try {
          iM = rM[OM]
        } catch (MM) {
          iM = SS
        }
        Object.defineProperty(MM, OM, {
          value: iM,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return MM
    }
    Date, Date;
    const PS = 3e5;
    var nS = class {
      record(MM) {
        if ("too-large" === MM.kind) return;
        if ("retry-later" !== MM.kind) return void this.reset();
        if (!MM.retryAfterMs) return;
        const rM = this.isOpen(),
          iM = Date.now(),
          OM = Math.min(MM.retryAfterMs, PS);
        if (!rM) return this._installedAt = iM, void(this._until = iM + OM);
        this._until = Math.max(this._until, Math.min(iM + OM, this._installedAt + PS))
      }
      remainingMs() {
        const MM = Date.now();
        if (this._installedAt - 5e3 > MM) return this.reset(), 0;
        const rM = Math.min(PS, Math.max(0, this._until - MM));
        return 0 === rM && this.reset(), rM
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
    const QS = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function zS(MM, rM) {
      return "string" == typeof(iM = MM) && QS.test(iM) ? MM : rM();
      var iM
    }

    function LS(MM, rM) {
      const iM = new Error(rM);
      try {
        Object.defineProperty(iM, "name", {
          value: MM,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (MM) {}
      return iM
    }

    function mS(MM) {
      return MM ? MM.split("#")[0] : MM
    }

    function HS(MM) {
      try {
        return MM()
      } catch (MM) {
        return
      }
    }

    function hS(MM, rM) {
      const iM = setTimeout(MM, rM);
      return null != iM && iM.unref && (null == iM || iM.unref()), iM
    }

    function JS(MM, rM, iM) {
      return dS.apply(this, arguments)
    }

    function dS() {
      return (dS = Bi((function*(MM, rM, iM) {
        let OM;
        try {
          return yield Promise.race([MM, new Promise(((MM, SM) => {
            OM = hS((() => {
              try {
                null == iM || iM(), MM()
              } catch (MM) {
                SM(MM)
              }
            }), rM)
          }))])
        } finally {
          clearTimeout(OM)
        }
      }))).apply(this, arguments)
    }

    function yS(MM) {
      return yS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, yS(MM)
    }

    function lS(MM, rM, iM) {
      return (rM = function(MM) {
        var rM = function(MM) {
          if ("object" != yS(MM) || !MM) return MM;
          var rM = MM[Symbol.toPrimitive];
          if (void 0 !== rM) {
            var iM = rM.call(MM, "string");
            if ("object" != yS(iM)) return iM;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(MM)
        }(MM);
        return "symbol" == yS(rM) ? rM : rM + ""
      }(rM)) in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }

    function ES(MM, rM) {
      var iM = Object.keys(MM);
      if (Object.getOwnPropertySymbols) {
        var OM = Object.getOwnPropertySymbols(MM);
        rM && (OM = OM.filter((function(rM) {
          return Object.getOwnPropertyDescriptor(MM, rM).enumerable
        }))), iM.push.apply(iM, OM)
      }
      return iM
    }

    function US(MM) {
      for (var rM = 1; arguments.length > rM; rM++) {
        var iM = null != arguments[rM] ? arguments[rM] : {};
        rM % 2 ? ES(Object(iM), !0).forEach((function(rM) {
          lS(MM, rM, iM[rM])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(iM)) : ES(Object(iM)).forEach((function(rM) {
          Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(iM, rM))
        }))
      }
      return MM
    }
    let GS, CS, eS, bS;

    function wS(MM) {
      var rM;
      const iM = globalThis._posthogChunkIds,
        OM = globalThis._debugIds;
      if (!iM && !OM) return;
      const SM = iM ? Object.keys(iM) : [],
        jM = OM ? Object.keys(OM) : [];
      if (bS && tS(iM, SM, CS) && tS(OM, jM, eS)) return bS;
      CS = iM ? US({}, iM) : void 0, eS = OM ? US({}, OM) : void 0, bS = {}, null !== (rM = GS) && void 0 !== rM || (GS = {});
      const aM = (rM, iM) => {
        for (const SM of rM) {
          const rM = iM[SM];
          if (!rM) continue;
          const jM = null == GS ? void 0 : GS[SM];
          if (jM) {
            bS[jM] = rM;
            continue
          }
          const aM = MM(SM);
          for (let MM = aM.length - 1; MM >= 0; MM--) {
            var OM;
            const iM = null === (OM = aM[MM]) || void 0 === OM ? void 0 : OM.filename;
            if (iM) {
              bS[iM] = rM, GS[SM] = iM;
              break
            }
          }
        }
      };
      return OM && aM(jM, OM), iM && aM(SM, iM), bS
    }

    function tS(MM, rM, iM) {
      return MM && iM ? rM.length === Object.keys(iM).length && rM.every((rM => MM[rM] === iM[rM])) : MM === iM
    }
    var gS = class {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = MM, this.stackParser = rM, this.modifiers = iM
      }
      buildFromUnknown(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = rM && rM.mechanism || {
            handled: !0,
            type: "generic"
          },
          OM = this.buildCoercingContext(iM, rM, 0).apply(MM),
          SM = this.buildParsingContext(rM),
          jM = this.parseStacktrace(OM, SM);
        return {
          $exception_list: this.convertToExceptionList(jM, iM),
          $exception_level: "error"
        }
      }
      modifyFrames(MM) {
        var rM = this;
        return Bi((function*() {
          for (const iM of MM) iM.stacktrace && iM.stacktrace.frames && Ui(iM.stacktrace.frames) && (iM.stacktrace.frames = yield rM.applyModifiers(iM.stacktrace.frames));
          return MM
        }))()
      }
      coerceFallback(MM) {
        var rM;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (rM = MM.syntheticException) || void 0 === rM ? void 0 : rM.stack,
          synthetic: !0
        }
      }
      parseStacktrace(MM, rM) {
        var iM;
        let OM, SM;
        if (null != MM.cause && (OM = this.parseStacktrace(MM.cause, rM)), "" != MM.stack && null != MM.stack) try {
          SM = this.applyChunkIds(this.stackParser(MM.stack, MM.synthetic ? rM.skipFirstLines : 0), rM.chunkIdMap)
        } catch (MM) {}
        return US(US({}, MM), {}, {
          cause: OM,
          stack: SM,
          errors: null === (iM = MM.errors) || void 0 === iM ? void 0 : iM.map((MM => this.parseStacktrace(MM, rM)))
        })
      }
      applyChunkIds(MM, rM) {
        return MM.map((MM => (MM.filename && rM && (MM.chunk_id = rM[MM.filename]), MM)))
      }
      applyCoercers(MM, rM) {
        for (const iM of this.coercers)
          if (iM.match(MM)) return iM.coerce(MM, rM);
        return this.coerceFallback(rM)
      }
      applyModifiers(MM) {
        var rM = this;
        return Bi((function*() {
          let iM = MM;
          for (const MM of rM.modifiers) iM = yield MM(iM);
          return iM
        }))()
      }
      convertToExceptionList(MM, rM) {
        const iM = [],
          OM = (MM, SM, jM) => {
            var aM;
            const PM = iM.length,
              nM = void 0 === SM ? US(US({
                type: "string" == typeof rM.type && rM.type.length > 0 ? rM.type : "generic"
              }, "boolean" == typeof rM.handled ? {
                handled: rM.handled
              } : void 0 === rM.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof rM.synthetic ? rM.synthetic : MM.synthetic,
                exception_id: PM
              }) : {
                type: "chained",
                source: jM,
                synthetic: MM.synthetic,
                exception_id: PM,
                parent_id: SM
              },
              QM = {
                type: MM.type,
                value: MM.value,
                mechanism: nM
              };
            MM.stack && (QM.stacktrace = {
              type: "raw",
              frames: MM.stack
            }), iM.push(QM), MM.cause && OM(MM.cause, PM, "cause");
            for (const rM of null !== (aM = MM.errors) && void 0 !== aM ? aM : []) OM(rM, PM, "member")
          };
        return OM(MM), iM
      }
      buildParsingContext(MM) {
        var rM;
        return {
          chunkIdMap: wS(this.stackParser),
          skipFirstLines: null !== (rM = MM.skipFirstLines) && void 0 !== rM ? rM : 1
        }
      }
      getAggregateErrors(MM) {
        try {
          if (fi(MM)) {
            let iM = Object.getPrototypeOf(MM);
            for (let OM = 0; iM && 100 > OM; OM++) {
              var rM;
              const OM = null === (rM = Object.getOwnPropertyDescriptor(iM, "constructor")) || void 0 === rM ? void 0 : rM.value;
              if ("function" == typeof OM && "AggregateError" === OM.name) {
                const rM = MM.errors;
                return Ui(rM) ? rM : void 0
              }
              iM = Object.getPrototypeOf(iM)
            }
          }
        } catch (MM) {}
      }
      buildCoercingContext(MM, rM) {
        var iM = this;
        let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          SM = 0,
          jM = 0,
          aM = !1;
        const PM = new Set,
          nM = [],
          QM = {},
          zM = function(MM, rM) {
            let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const zM = LM(rM, OM),
              mM = zM.apply;
            if (zM.apply = rM => {
                nM.push(MM);
                try {
                  return mM(rM)
                } finally {
                  nM.pop()
                }
              }, OM > 4 || OM > 0 && -1 !== nM.indexOf(MM)) return iM.coerceFallback(zM);
            const HM = "object" == typeof MM && null !== MM || "function" == typeof MM;
            if (0 === OM && SM >= 50 || HM && PM.has(MM)) return;
            HM && PM.add(MM), 0 === OM && SM++;
            const hM = iM.getAggregateErrors(MM);
            let JM, dM;
            aM || (aM = !!hM);
            try {
              if (JM = iM.applyCoercers(MM, zM), !JM) throw QM
            } catch (MM) {
              if (MM === QM) return void(0 === OM && SM--);
              if (!aM) throw MM;
              JM = iM.coerceFallback(zM)
            }
            if (!hM || SM >= 50) return JM;
            try {
              dM = hM.length
            } catch (MM) {
              return JM
            }
            if (!Number.isInteger(dM) || 0 > dM || dM > 4294967295) return JM;
            const yM = [];
            for (let aM = 0; 50 > SM && 1e3 > jM && dM > aM; aM++) {
              let OM;
              jM++;
              try {
                OM = zM.next(hM[aM])
              } catch (MM) {
                SM++, OM = iM.coerceFallback(LM(rM + 1))
              }
              OM && yM.push(OM)
            }
            return US(US({}, JM), {}, {
              errors: yM
            })
          },
          LM = function(iM) {
            let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return US(US({}, rM), {}, {
              syntheticException: 0 == iM ? rM.syntheticException : void 0,
              mechanism: 0 == iM ? MM : {},
              apply(MM) {
                const rM = zM(MM, iM, OM + 1);
                if (!rM) throw QM;
                return rM
              },
              next: MM => zM(MM, iM + 1)
            })
          },
          mM = LM(OM);
        return US(US({}, mM), {}, {
          apply: MM => {
            var rM;
            return null !== (rM = zM(MM, OM)) && void 0 !== rM ? rM : this.coerceFallback(mM)
          }
        })
      }
    };
    const uS = /^([a-z][a-z0-9.+-]+):/i,
      RS = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function pS(MM) {
      if (!MM || "<anonymous>" === MM) return !1;
      const rM = uS.exec(MM);
      return !rM || RS.includes(rM[1].toLowerCase())
    }

    function WS(MM, rM, iM, OM, SM) {
      const jM = {
        platform: MM,
        filename: rM,
        function: "<anonymous>" === iM ? "?" : iM,
        in_app: pS(rM)
      };
      return bi(OM) || (jM.lineno = OM), bi(SM) || (jM.colno = SM), jM
    }
    const sS = (MM, rM) => {
        const iM = -1 !== MM.indexOf("safari-extension"),
          OM = -1 !== MM.indexOf("safari-web-extension");
        return iM || OM ? [-1 !== MM.indexOf("@") ? MM.split("@")[0] : "?", iM ? `safari-extension:${rM}` : `safari-web-extension:${rM}`] : [MM, rM]
      },
      DS = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      kS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      ZS = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      oS = (MM, rM) => {
        const iM = DS.exec(MM);
        if (iM) {
          const [, MM, OM, SM] = iM;
          return WS(rM, MM, "?", +OM, +SM)
        }
        const OM = kS.exec(MM);
        if (OM) {
          if (OM[2] && 0 === OM[2].indexOf("eval")) {
            const MM = ZS.exec(OM[2]);
            MM && (OM[2] = MM[1], OM[3] = MM[2], OM[4] = MM[3])
          }
          const [MM, iM] = sS(OM[1] || "?", OM[2]);
          return WS(rM, iM, MM, OM[3] ? +OM[3] : void 0, OM[4] ? +OM[4] : void 0)
        }
      },
      fS = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      YS = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      NS = (MM, rM) => {
        const iM = fS.exec(MM);
        if (iM) {
          if (iM[3] && iM[3].indexOf(" > eval") > -1) {
            const MM = YS.exec(iM[3]);
            MM && (iM[1] = iM[1] || "eval", iM[3] = MM[1], iM[4] = MM[2], iM[5] = "")
          }
          let MM = iM[3],
            OM = iM[1] || "?";
          return [OM, MM] = sS(OM, MM), WS(rM, MM, OM, iM[4] ? +iM[4] : void 0, iM[5] ? +iM[5] : void 0)
        }
      },
      AS = /\(error: (.*)\)/;

    function xS(MM, rM) {
      return MM.filename === rM.filename && MM.function === rM.function && MM.module === rM.module && MM.lineno === rM.lineno && MM.colno === rM.colno
    }

    function vS(MM) {
      for (let rM = 1; 10 >= rM; rM++) {
        const iM = MM.length - 2 * rM;
        if (0 > iM) break;
        let OM = !0;
        for (let SM = 0; rM > SM; SM++)
          if (!xS(MM[iM + SM], MM[iM + rM + SM])) {
            OM = !1;
            break
          } if (OM) {
          for (let OM = 0; rM > OM; OM++) MM[iM + OM] = MM[iM + rM + OM];
          return MM.length = iM + rM, {
            start: iM,
            length: rM
          }
        }
      }
    }

    function FS(MM, rM) {
      const iM = rM.start + rM.length,
        OM = XS(MM, rM);
      OM && MM.splice(iM + OM === MM.length ? iM : rM.start, OM)
    }

    function BS(MM, rM) {
      let iM = rM.start;
      for (; iM > 0 && xS(MM[iM - 1], MM[iM - 1 + rM.length]);) iM--;
      return rM.start - iM
    }

    function XS(MM, rM) {
      const iM = rM.start + rM.length;
      let OM = iM;
      for (; MM.length > OM && xS(MM[OM], MM[OM - rM.length]);) OM++;
      return OM - iM
    }

    function IS(MM, rM) {
      const iM = rM[0];
      let OM = MM.length - (iM ? BS(MM, iM) : 0);
      for (const SM of rM) OM -= XS(MM, SM);
      return OM
    }

    function KS(MM, rM, iM) {
      for (let OM = 0; MM.length > OM; OM++) {
        const SM = MM[(rM + OM) % MM.length],
          jM = MM[(iM + OM) % MM.length];
        if (SM !== jM) return jM > SM
      }
      return !1
    }
    var qS = class {
        match(MM) {
          return this.isDOMException(MM) || this.isDOMError(MM)
        }
        coerce(MM, rM) {
          const iM = wi(MM.stack);
          return {
            type: this.getType(MM),
            value: this.getValue(MM),
            stack: iM ? MM.stack : void 0,
            cause: MM.cause ? rM.next(MM.cause) : void 0,
            synthetic: !1
          }
        }
        getType(MM) {
          return this.isDOMError(MM) ? "DOMError" : "DOMException"
        }
        getValue(MM) {
          const rM = MM.name || (this.isDOMError(MM) ? "DOMError" : "DOMException");
          return MM.message ? `${rM}: ${MM.message}` : rM
        }
        isDOMException(MM) {
          return oi(MM, "DOMException")
        }
        isDOMError(MM) {
          return oi(MM, "DOMError")
        }
      },
      TS = class {
        match(MM) {
          return fi(MM)
        }
        coerce(MM, rM) {
          var iM;
          const OM = this.getStack(MM),
            SM = void 0 === OM ? null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack : void 0,
            jM = !!SM;
          return {
            type: this.getType(MM),
            value: this.getMessage(MM, rM),
            stack: null != OM ? OM : SM,
            cause: MM.cause ? rM.next(MM.cause) : void 0,
            synthetic: jM
          }
        }
        getType(MM) {
          return MM.name || MM.constructor.name
        }
        getMessage(MM, rM) {
          const iM = MM.message;
          return String(iM.error && "string" == typeof iM.error.message ? iM.error.message : iM)
        }
        getStack(MM) {
          try {
            const rM = MM.stacktrace;
            if ("string" == typeof rM && rM.length > 0) return rM;
            const iM = MM.stack;
            return "string" == typeof iM && iM.length > 0 ? iM : void 0
          } catch (MM) {
            return
          }
        }
      },
      VS = class {
        match(MM) {
          return !!oi(MM, "ErrorEvent") && (null != MM.error || this._hasUsableMessage(MM))
        }
        coerce(MM, rM) {
          var iM;
          if (null != MM.error) return rM.apply(MM.error);
          const OM = rM.apply(MM.message);
          return US(US({}, OM), {}, {
            stack: null !== (iM = this._buildLocationStack(MM)) && void 0 !== iM ? iM : OM.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(MM) {
          return wi(MM.message) && MM.message.length > 0
        }
        _buildLocationStack(MM) {
          var rM, iM;
          const OM = MM,
            SM = null !== (rM = OM.lineno) && void 0 !== rM ? rM : 0,
            jM = null !== (iM = OM.colno) && void 0 !== iM ? iM : 0;
          if (wi(OM.filename) && 0 !== OM.filename.length && 0 !== SM) return `Error\n    at ${OM.filename}:${SM}:${jM}`
        }
      };
    const cS = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var Mj = class {
      match(MM) {
        return "string" == typeof MM
      }
      coerce(MM, rM) {
        var iM;
        const [OM, SM] = this.getInfos(MM);
        return {
          type: null != OM ? OM : "Error",
          value: null != SM ? SM : MM,
          stack: null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack,
          synthetic: !0
        }
      }
      getInfos(MM) {
        let rM = "Error",
          iM = MM;
        const OM = MM.match(cS);
        return OM && (rM = OM[1], iM = OM[2]), [rM, iM]
      }
    };
    const rj = ["fatal", "error", "warning", "log", "info", "debug"];

    function ij(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const iM = Object.keys(MM);
      if (iM.sort(), !iM.length) return "[object has no keys]";
      for (let OM = iM.length; OM > 0; OM--) {
        const MM = iM.slice(0, OM).join(", ");
        if (rM >= MM.length) return OM === iM.length ? MM : MM.length > rM ? `${MM.slice(0,rM)}...` : MM
      }
      return ""
    }
    var Oj = class {
        match(MM) {
          return "object" == typeof MM && null !== MM
        }
        coerce(MM, rM) {
          var iM, OM;
          const SM = this.getErrorPropertyFromObject(MM);
          return SM ? rM.apply(SM) : {
            type: this.getType(MM),
            value: this.getValue(MM),
            stack: null !== (iM = this.getStack(MM)) && void 0 !== iM ? iM : null === (OM = rM.syntheticException) || void 0 === OM ? void 0 : OM.stack,
            level: this.isSeverityLevel(MM.level) ? MM.level : "error",
            synthetic: !0
          }
        }
        getType(MM) {
          if (Yi(MM)) return MM.constructor.name;
          const rM = "name" in MM ? MM.name : void 0;
          return wi(rM) && !ti(rM) ? rM : "Error"
        }
        getValue(MM) {
          if ("name" in MM && "string" == typeof MM.name) {
            let rM = `'${MM.name}' captured as exception`;
            return "message" in MM && "string" == typeof MM.message && (rM += ` with message: '${MM.message}'`), rM
          }
          if ("message" in MM && "string" == typeof MM.message) return MM.message;
          const rM = this.getObjectClassName(MM);
          return `${rM&&"Object"!==rM?`'${rM}'`:"Object"} captured as exception with keys: ${ij(MM)}`
        }
        isSeverityLevel(MM) {
          return wi(MM) && !ti(MM) && rj.indexOf(MM) >= 0
        }
        getStack(MM) {
          try {
            return wi(MM.stacktrace) && MM.stacktrace.length > 0 ? MM.stacktrace : wi(MM.stack) && MM.stack.length > 0 ? MM.stack : void 0
          } catch (MM) {
            return
          }
        }
        getErrorPropertyFromObject(MM) {
          for (const rM in MM)
            if ({}.hasOwnProperty.call(MM, rM)) {
              const iM = MM[rM];
              if (fi(iM)) return iM
            }
        }
        getObjectClassName(MM) {
          try {
            const rM = Object.getPrototypeOf(MM);
            return rM ? rM.constructor.name : void 0
          } catch (MM) {
            return
          }
        }
      },
      Sj = class {
        match(MM) {
          return Yi(MM)
        }
        coerce(MM, rM) {
          var iM;
          const OM = MM.constructor.name;
          return {
            type: OM,
            value: `${OM} captured as exception with keys: ${ij(MM)}`,
            stack: null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack,
            synthetic: !0
          }
        }
      },
      jj = class {
        match(MM) {
          return Zi(MM)
        }
        coerce(MM, rM) {
          var iM;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(MM)}`,
            stack: null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack,
            synthetic: !0
          }
        }
      },
      aj = class {
        match(MM) {
          return oi(MM, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(MM)
        }
        isCustomEventWrappingRejection(MM) {
          if (!Yi(MM)) return !1;
          try {
            const rM = MM.detail;
            return null != rM && "object" == typeof rM && "reason" in rM
          } catch (MM) {
            return !1
          }
        }
        coerce(MM, rM) {
          var iM;
          const OM = this.getUnhandledRejectionReason(MM);
          return Zi(OM) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(OM)}`,
            stack: null === (iM = rM.syntheticException) || void 0 === iM ? void 0 : iM.stack,
            synthetic: !0
          } : rM.apply(OM)
        }
        getUnhandledRejectionReason(MM) {
          try {
            if ("reason" in MM) return MM.reason;
            if ("detail" in MM && null != MM.detail && "object" == typeof MM.detail && "reason" in MM.detail) return MM.detail.reason
          } catch (MM) {}
          return MM
        }
      };
    const Pj = "$message",
      nj = "$timestamp",
      Qj = new Set([Pj, nj]),
      zj = {
        enabled: !0,
        max_bytes: 32768
      };

    function Lj(MM) {
      var rM;
      return MM ? {
        enabled: null !== (rM = MM.enabled) && void 0 !== rM ? rM : zj.enabled,
        max_bytes: Hj(MM.max_bytes, zj.max_bytes)
      } : US({}, zj)
    }
    var mj = class {
      constructor(MM) {
        this._entries = [], this._totalBytes = 0, this._config = Lj(MM)
      }
      setConfig(MM) {
        this._config = Lj(MM), this._trimToMaxBytes()
      }
      add(MM) {
        const rM = function(MM) {
          let rM;
          try {
            rM = di(MM)
          } catch (MM) {
            return
          }
          try {
            const MM = JSON.parse(rM);
            if (!Ci(MM)) return;
            const iM = MM,
              OM = iM[Pj],
              SM = iM[nj];
            if (!wi(OM) || 0 === OM.trim().length) return;
            if (!wi(SM) && !Ri(SM)) return;
            return {
              step: iM,
              json: rM
            }
          } catch (MM) {
            return
          }
        }(MM);
        if (!rM) return;
        const iM = function(MM) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(MM).length;
          const rM = encodeURIComponent(MM);
          let iM = 0;
          for (let OM = 0; rM.length > OM; OM++) "%" === rM[OM] ? (iM += 1, OM += 2) : iM += 1;
          return iM
        }(rM.json);
        iM > this._config.max_bytes || (this._entries.push({
          step: rM.step,
          bytes: iM
        }), this._totalBytes += iM, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((MM => MM.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const MM = this._entries.shift();
          MM && (this._totalBytes -= MM.bytes)
        }
      }
    };

    function Hj(MM, rM) {
      if (!Ri(MM) || 1 / 0 === MM || -1 / 0 === MM) return rM;
      const iM = Math.floor(MM);
      return 0 > iM ? rM : iM
    }
    const hj = MM => {
      if ("string" != typeof MM) return MM;
      try {
        return JSON.parse(MM)
      } catch (SM) {
        return MM
      }
    };

    function Jj(MM) {
      return "string" == typeof MM || MM
    }

    function dj(MM) {
      return "string" == typeof MM ? MM : void 0
    }
    const yj = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      lj = "NativeGzipValidationError",
      Ej = MM => MM.length >= 2 && 31 === MM[0] && 139 === MM[1],
      Uj = (MM, rM) => MM === Qi.GZipJS || rM === Qi.GZipJS || "gzip" === rM,
      Gj = MM => !(!MM || "object" != typeof MM) && "NotReadableError" === ("name" in MM ? String(MM.name) : "");
    let Cj;
    const ej = MM => {
        throw LS(lj, `Native gzip produced invalid output: ${MM}`)
      },
      bj = (wj = Bi((function*(MM, rM) {
        18 > MM.size && ej("too-short");
        const iM = new Uint8Array(yield MM.slice(0, 10).arrayBuffer());
        Ej(iM) && 8 === iM[2] || ej("invalid-header");
        const OM = new DataView(yield MM.slice(MM.size - 8).arrayBuffer());
        OM.getUint32(0, !0) !== (MM => {
          const rM = (() => {
            if (Cj) return Cj;
            Cj = [];
            for (let MM = 0; 256 > MM; MM++) {
              let rM = MM;
              for (let MM = 0; 8 > MM; MM++) rM = 1 & rM ? 3988292384 ^ rM >>> 1 : rM >>> 1;
              Cj[MM] = rM >>> 0
            }
            return Cj
          })();
          let iM = 4294967295;
          for (let OM = 0; MM.length > OM; OM++) iM = rM[255 & (iM ^ MM[OM])] ^ iM >>> 8;
          return (4294967295 ^ iM) >>> 0
        })(rM) && ej("invalid-crc");
        const SM = rM.length >>> 0;
        OM.getUint32(4, !0) !== SM && ej("invalid-size")
      })), function(MM, rM) {
        return wj.apply(this, arguments)
      });
    var wj;

    function tj() {
      return tj = Bi((function*(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const rM = (new TextEncoder).encode(MM),
            iM = new globalThis.CompressionStream("gzip"),
            SM = iM.writable.getWriter(),
            jM = SM.write(rM).then((() => SM.close())).catch((OM = Bi((function*(MM) {
              try {
                yield SM.abort(MM)
              } catch (MM) {}
              throw MM
            })), function(MM) {
              return OM.apply(this, arguments)
            })),
            aM = new Response(iM.readable).blob(),
            [PM] = yield Promise.all([aM, jM]);
          return yield bj(PM, rM), PM
        } catch (MM) {
          if (null == iM ? void 0 : iM.rethrow) throw MM;
          return rM && console.error("Failed to gzip compress data", MM), null
        }
        var OM
      })), tj.apply(this, arguments)
    }

    function gj(MM, rM) {
      if (null == MM) return {};
      var iM, OM, SM = function(MM, rM) {
        if (null == MM) return {};
        var iM = {};
        for (var OM in MM)
          if ({}.hasOwnProperty.call(MM, OM)) {
            if (rM.includes(OM)) continue;
            iM[OM] = MM[OM]
          } return iM
      }(MM, rM);
      if (Object.getOwnPropertySymbols) {
        var jM = Object.getOwnPropertySymbols(MM);
        for (OM = 0; jM.length > OM; OM++) rM.includes(iM = jM[OM]) || {}.propertyIsEnumerable.call(MM, iM) && (SM[iM] = MM[iM])
      }
      return SM
    }
    const uj = "[redacted]",
      Rj = /^[A-Za-z0-9+/\n\r]+=*$/,
      pj = /^[A-Za-z0-9_-]+={0,2}$/,
      Wj = /[-_]/,
      sj = /^data:[^,\s]*;base64,/i,
      Dj = /^[A-Za-z0-9+/_-]+={0,2}$/,
      kj = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      Zj = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      oj = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      fj = /[\s<>"]/,
      Yj = new RegExp(oj.source, "i"),
      Nj = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      Aj = new RegExp(`^${Nj.source}`, "i"),
      xj = new RegExp(Nj.source, "gi"),
      vj = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      Fj = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      Bj = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      Xj = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      Ij = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      Kj = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      qj = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      Tj = /\b\d(?:[ ./-]?\d){12,}\b/g,
      Vj = /\d+/g,
      cj = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      Ma = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function ra(MM) {
      return function(MM) {
        return Zj.test(MM)
      }(MM) || vj.test(MM) || Fj.test(MM)
    }

    function ia(MM) {
      return MM.split("&", 129).length > 128
    }

    function Oa(MM, rM, iM) {
      return ra(MM) || rM.includes(";") && function(MM) {
        return MM.split(";").some((MM => ra(MM.split("=", 1)[0])))
      }(rM) ? uj : Yj.test(rM) ? iM ? Qa(rM, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : uj : rM
    }

    function Sa(MM, rM) {
      const iM = new URLSearchParams;
      let OM = !1,
        SM = !1;
      for (const [jM, aM] of new URLSearchParams(MM)) {
        const MM = za(jM),
          PM = za(aM);
        OM || (OM = MM !== jM || PM !== aM);
        const nM = Oa(MM, PM, rM);
        OM || (OM = nM !== PM), SM = ra(MM) || nM !== PM, iM.append(MM, nM)
      }
      return {
        changed: OM,
        lastFieldSensitive: SM,
        serialized: iM.toString()
      }
    }

    function ja(MM, rM) {
      if (!MM.includes("=")) return {
        value: aa(MM, rM),
        lastFieldSensitive: !1
      };
      const iM = Sa(MM, rM);
      return {
        value: iM.changed ? iM.serialized : MM,
        lastFieldSensitive: iM.lastFieldSensitive
      }
    }

    function aa(MM, rM) {
      return rM ? Qa(MM, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Yj.test(MM) ? uj : MM
    }

    function Pa(MM, rM, iM) {
      return "#" === MM ? !rM.fragment && (rM.fragment = !0) : "?" === MM && (rM.fragment ? "=" !== iM && !rM.fragmentQuery && (rM.fragmentQuery = !0) : !rM.query && (rM.query = !0))
    }

    function na(MM, rM) {
      var iM;
      if (MM.length > 8192 && Aj.test(MM)) return uj;
      const {
        address: OM,
        suffix: SM
      } = rM.stripPunctuation ? function(MM) {
        let rM = MM.length;
        for (; rM > 0 && ".,;:!?)]}'".includes(MM[rM - 1]);) rM--;
        return {
          address: MM.slice(0, rM),
          suffix: MM.slice(rM)
        }
      }(MM) : {
        address: MM,
        suffix: ""
      };
      let jM;
      try {
        jM = new URL(OM)
      } catch (MM) {
        return uj + SM
      }
      const aM = jM.search.slice(1),
        PM = "" !== jM.hash,
        nM = function(MM) {
          const rM = MM.slice(1),
            iM = rM.indexOf("?");
          return 0 > iM ? {
            head: rM,
            tail: null
          } : {
            head: rM.slice(0, iM),
            tail: rM.slice(iM + 1)
          }
        }(jM.hash);
      if (ia(aM) || ia(nM.head) || ia(null !== (iM = nM.tail) && void 0 !== iM ? iM : "")) return uj + SM;
      let QM = !1;
      (jM.username || jM.password) && (jM.username = uj, jM.password = "", QM = !0);
      const zM = Sa(aM, rM.allowNestedUrls);
      zM.changed && (jM.search = zM.serialized, QM = !0);
      const LM = ja(nM.head, rM.allowNestedUrls),
        mM = null === nM.tail ? null : (HM = nM.tail, LM.lastFieldSensitive ? {
          value: "" === HM ? "" : uj,
          lastFieldSensitive: !0
        } : ja(HM, rM.allowNestedUrls));
      var HM;
      const hM = null === mM ? LM.value : `${LM.value}?${mM.value}`;
      hM !== jM.hash.slice(1) && (jM.hash = hM, QM = !0);
      const JM = PM ? null != mM ? mM : LM : zM;
      return (QM ? za(jM.toString()) : OM) + (JM.lastFieldSensitive ? "" : SM)
    }

    function Qa(MM, rM) {
      return MM.replace(oj, (iM => function(MM, rM) {
        const iM = function(MM) {
          if (!MM.includes("://")) return [];
          const rM = [...MM.matchAll(xj)].map((MM => MM.index)),
            iM = [],
            OM = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let SM = 0,
            jM = !1,
            aM = "";
          for (let PM = 0; MM.length > PM && rM.length > SM; PM++) {
            rM[SM] === PM && (PM > 0 && "=" !== aM && iM.push(PM), SM++);
            const nM = MM[PM];
            Pa(nM, OM, aM) ? (aM = nM, jM = !0) : jM && "=&".includes(nM) && (aM = nM)
          }
          return iM
        }(MM);
        if (0 === iM.length) return na(MM, rM);
        let OM = "",
          SM = 0;
        for (const jM of iM) OM += na(MM.slice(SM, jM), US(US({}, rM), {}, {
          stripPunctuation: !1
        })), SM = jM;
        return OM + na(MM.slice(SM), rM)
      }(iM, US(US({}, rM), {}, {
        stripPunctuation: rM.stripPunctuation && iM.length !== MM.length
      }))))
    }

    function za(MM) {
      return MM.replace(kj, uj)
    }

    function La(MM) {
      let rM = 0,
        iM = !1;
      for (let OM = MM.length - 1; OM >= 0; OM--) {
        let SM = MM.charCodeAt(OM) - 48;
        if (0 > SM || SM > 9) return !1;
        iM && (SM *= 2, SM > 9 && (SM -= 9)), rM += SM, iM = !iM
      }
      return rM % 10 == 0
    }

    function ma(MM) {
      const rM = [];
      for (let jM = Vj.exec(MM); null !== jM; jM = Vj.exec(MM)) rM.push({
        digits: jM[0],
        start: jM.index,
        end: jM.index + jM[0].length
      });
      let iM = "",
        OM = 0,
        SM = 0;
      for (; rM.length > SM;) {
        let jM = "",
          aM = -1;
        for (let MM = SM; rM.length > MM && (jM += rM[MM].digits, 19 >= jM.length); MM++) jM.length >= 13 && La(jM) && (aM = MM);
        0 > aM ? SM++ : (iM += MM.slice(OM, rM[SM].start) + uj, OM = rM[aM].end, SM = aM + 1)
      }
      return iM + MM.slice(OM)
    }
    const Ha = {}.propertyIsEnumerable;

    function ha(MM, rM) {
      try {
        return ya(MM, rM, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (MM) {
        return []
      }
    }

    function Ja(MM, rM, iM, OM) {
      if (0 >= iM.remainingNodes) return {
        stringValue: OS
      };
      if (iM.remainingNodes--, si(MM)) return {
        boolValue: MM
      };
      if ("bigint" == typeof MM) return function(MM, rM) {
        const iM = MM.toString(),
          OM = BigInt("9223372036854775808");
        return MM >= OM || -OM > MM ? (null == rM || rM.debug(`Attribute ${iM} is outside the int64 range; encoding it as a string`), {
          stringValue: iM
        }) : {
          intValue: iM
        }
      }(MM, rM);
      if ("number" == typeof MM) {
        if (!Number.isFinite(MM)) return {
          stringValue: String(MM)
        };
        if (Number.isInteger(MM)) {
          if (Number.isSafeInteger(MM)) return {
            intValue: String(MM)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(MM)
          };
          const iM = BigInt(MM).toString();
          return MM >= 0x8000000000000000 || -0x8000000000000000 > MM ? (null == rM || rM.debug(`Attribute ${iM} is outside the int64 range; encoding it as a string`), {
            stringValue: iM
          }) : {
            intValue: iM
          }
        }
        return {
          doubleValue: MM
        }
      }
      if ("string" == typeof MM) return {
        stringValue: jS(MM)
      };
      if ("function" == typeof MM) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof MM) return {
        stringValue: String(MM)
      };
      if ("object" == typeof MM && null !== MM) {
        if (iM.ancestors.has(MM)) return {
          stringValue: "[Circular]"
        };
        if (OM >= 20) return {
          stringValue: OS
        };
        if (MM instanceof Date) {
          const rM = MM.getTime(),
            iM = Number.isFinite(rM) ? MM.toISOString() : String(MM);
          return {
            stringValue: "string" == typeof iM ? jS(iM) : String(iM)
          }
        }
        iM.ancestors.add(MM);
        try {
          try {
            const SM = MM.toJSON;
            if ("function" == typeof SM) return Ja(SM.call(MM), rM, iM, OM + 1)
          } catch (MM) {}
          return Ui(MM) ? {
            arrayValue: {
              values: da(MM, rM, iM, OM + 1)
            }
          } : {
            kvlistValue: {
              values: ya(MM, rM, iM, OM + 1)
            }
          }
        } finally {
          iM.ancestors.delete(MM)
        }
      }
      return {
        stringValue: jS(String(MM))
      }
    }

    function da(MM, rM, iM, OM) {
      const SM = [],
        jM = Math.min(MM.length, 1e3);
      let aM = 0;
      for (; jM > aM && iM.remainingNodes > 0; aM++) try {
        const jM = aM in MM ? MM[aM] : void 0;
        if (ui(jM)) continue;
        SM.push(Ja(jM, rM, iM, OM))
      } catch (MM) {
        SM.push({
          stringValue: SS
        })
      }
      return MM.length > aM && SM.push({
        stringValue: OS
      }), SM
    }

    function ya(MM, rM, iM, OM) {
      const SM = [];
      for (const jM in MM)
        if (Ha.call(MM, jM)) {
          if (!jM) {
            null == rM || rM.debug("Dropping an attribute with an empty key");
            continue
          }
          if (SM.length >= 1e3 || 0 >= iM.remainingNodes) {
            null == rM || rM.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const aM = MM[jM];
            if (gi(aM) || bi(aM)) continue;
            SM.push({
              key: jS(jM),
              value: Ja(aM, rM, iM, OM)
            })
          } catch (MM) {
            SM.push({
              key: jS(jM),
              value: {
                stringValue: SS
              }
            })
          }
        } return SM
    }

    function la(MM, rM, iM) {
      return US(US(US(US({}, aS({}, MM.resourceAttributes)), {}, {
        "service.name": MM.serviceName || "unknown_service"
      }, MM.environment && {
        "deployment.environment": MM.environment
      }), MM.serviceVersion && {
        "service.version": MM.serviceVersion
      }), {}, {
        "telemetry.sdk.name": rM,
        "telemetry.sdk.version": iM
      })
    }
    const Ea = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function Ua(MM, rM) {
      const iM = aS({}, MM),
        OM = {};
      for (const SM of Ea)({}).hasOwnProperty.call(iM, SM) && (OM[SM] = iM[SM], delete iM[SM]);
      return [...ha(iM, rM), ...ha(OM, rM)]
    }
    const Ga = {
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
      Ca = {
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
      ea = Ca.info;

    function ba(MM) {
      try {
        return jS(String(MM))
      } catch (MM) {
        return SS
      }
    }

    function wa(MM, rM, iM, OM) {
      const SM = MM.level || "info",
        {
          text: jM,
          number: aM
        } = Ca[SM] || ea,
        PM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(MM) + "000000"
        }(Ri(OM) ? OM : void 0),
        nM = {};
      rM.distinctId && (nM.posthogDistinctId = rM.distinctId), rM.sessionId && (nM.sessionId = rM.sessionId), rM.windowId && (nM["window.id"] = rM.windowId), ui(rM.sessionStartTimestamp) || (nM.sessionStartTimestamp = String(rM.sessionStartTimestamp)), ui(rM.lastActivityTimestamp) || (nM.lastActivityTimestamp = String(rM.lastActivityTimestamp)), rM.currentUrl && (nM["url.full"] = rM.currentUrl), rM.screenName && (nM["screen.name"] = rM.screenName), rM.appState && (nM["app.state"] = rM.appState), rM.activeFeatureFlags && rM.activeFeatureFlags.length > 0 && (nM.feature_flags = rM.activeFeatureFlags);
      const QM = US({}, nM),
        zM = MM.attributes;
      if (zM) {
        let MM = [];
        try {
          MM = Object.keys(zM)
        } catch (rM) {
          MM = []
        }
        for (const iM of MM) {
          let MM;
          try {
            MM = zM[iM]
          } catch (rM) {
            MM = SS
          }
          Object.defineProperty(QM, iM, {
            value: MM,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const LM = {
        timeUnixNano: PM,
        observedTimeUnixNano: PM,
        severityNumber: aM,
        severityText: jM,
        body: {
          stringValue: ba(MM.body)
        },
        attributes: ha(QM, iM)
      };
      return MM.trace_id && (LM.traceId = MM.trace_id), MM.span_id && (LM.spanId = MM.span_id), bi(MM.trace_flags) || (LM.flags = MM.trace_flags), LM
    }

    function ta(MM, rM, iM) {
      return la(MM, rM, iM)
    }

    function ga(MM, rM, iM, OM) {
      return {
        resourceLogs: [{
          resource: {
            attributes: Ua(rM)
          },
          scopeLogs: [{
            scope: {
              name: iM,
              version: OM
            },
            logRecords: MM
          }]
        }]
      }
    }
    var ua = class {
      constructor(MM) {
        this._onFire = MM, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(MM) {
        this.clear(), this._firesAt = Date.now() + MM, this._timer = hS((() => {
          this._timer = void 0, this._onFire()
        }), MM)
      }
      armNoEarlierThan(MM) {
        this._timer && Date.now() + MM <= this._firesAt || this.arm(MM)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function Ra() {
      return .75 + .5 * Math.random()
    }

    function pa(MM, rM, iM, OM) {
      const SM = Math.min(Math.max(0, rM - 1), 6),
        jM = MM * Math.pow(2, SM);
      return Math.round((void 0 === OM ? jM : Math.min(jM, Math.max(OM, MM))) * iM)
    }
    var Wa = class {
      constructor(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          aM = arguments.length > 6 ? arguments[6] : void 0;
        var PM;
        this._instance = MM, this._config = rM, this._logger = iM, this._getContext = OM, this._onReady = SM, this._waitForStoragePersist = jM, this._scopeName = aM, this._flushTimer = new ua((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new nS, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = rM.maxBufferSize, this._maxQueueSize = Math.max(null !== (PM = rM.maxQueueSize) && void 0 !== PM ? PM : rM.maxBufferSize, rM.maxBufferSize), this._flushIntervalMs = rM.flushIntervalMs, this._maxBatchRecordsPerPost = rM.maxBatchRecordsPerPost, this._rateCapWindowMs = rM.rateCapWindowMs, this._maxLogsPerInterval = rM.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(ni.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(MM, rM) {
        var iM;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == MM ? void 0 : MM.body)) return;
        const OM = this._runBeforeSend(MM);
        if (null === OM) return;
        if (!OM.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const SM = {
          record: wa(OM, null !== (iM = null == rM ? void 0 : rM.context) && void 0 !== iM ? iM : this._getContext(), this._logger, null == rM ? void 0 : rM.occurredAtMs)
        };
        this._onReady((() => this._enqueue(SM)))
      }
      _runBeforeSend(MM) {
        const rM = this._config.beforeSend;
        if (!rM) return MM;
        const iM = Ui(rM) ? rM : [rM];
        let OM = MM;
        for (const SM of iM) try {
          const MM = SM(OM);
          if (!MM) return this._logger.info("Log was rejected in beforeSend function"), null;
          OM = MM
        } catch (MM) {
          return this._logger.error("Error in beforeSend function for log:", MM), null
        }
        return OM
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const MM = Date.now(),
          rM = MM - this._intervalWindowStart;
        return this._rateCapWindowMs > rM && rM >= 0 || (this._intervalWindowStart = MM, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var MM = this;
        return Bi((function*() {
          if (!MM._instance.isDisabled) return MM._flushPromise || (MM._flushPromise = MM._flushInner().finally((() => {
            MM._flushPromise = null
          }))), MM._flushPromise
        }))()
      }
      _flushInner() {
        var MM = this;
        return Bi((function*() {
          var rM;
          MM._flushTimer.clear();
          let iM = null !== (rM = MM._instance.getPersistedProperty(ni.LogsQueue)) && void 0 !== rM ? rM : [];
          if (0 === iM.length) return;
          const OM = iM.length;
          let SM = 0;
          for (; iM.length > 0 && OM > SM;) {
            var jM, aM;
            const rM = MM._queueGeneration;
            MM._evictedSinceAdvance = 0;
            const OM = Math.min(iM.length, MM._maxBatchRecordsPerPost),
              PM = iM.slice(0, OM),
              nM = ga(PM.map((MM => MM.record)), MM._buildResourceAttributes(), null !== (jM = MM._scopeName) && void 0 !== jM ? jM : MM._instance.getLibraryId(), MM._instance.getLibraryVersion()),
              QM = yield MM._instance._sendLogsBatch(nM);
            if (MM._queueGeneration !== rM) return;
            if ("too-large" === QM.kind && PM.length > 1) MM._maxBatchRecordsPerPost = Math.max(1, Math.floor(PM.length / 2)), MM._logger.warn(`Logs batch of size ${PM.length} was too large for the ingestion endpoint, reducing batch size to ${MM._maxBatchRecordsPerPost}`);
            else {
              if (MM._retryAfter.record(QM), MM._flushTimer.pending && MM._flushTimer.arm(Math.max(MM._flushIntervalMs, MM._retryAfter.remainingMs())), "retry-later" === QM.kind) throw QM.error;
              if ("too-large" === QM.kind ? MM._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === QM.kind && MM._config.maxBatchRecordsPerPost > MM._maxBatchRecordsPerPost && (MM._maxBatchRecordsPerPost = Math.min(MM._config.maxBatchRecordsPerPost, MM._maxBatchRecordsPerPost + 1)), yield MM._persistQueueAdvance(PM.length), iM = null !== (aM = MM._instance.getPersistedProperty(ni.LogsQueue)) && void 0 !== aM ? aM : [], SM += PM.length, "fatal" === QM.kind) throw QM.error
            }
          }
        }))()
      }
      _persistQueueAdvance(MM) {
        var rM = this;
        return Bi((function*() {
          var iM;
          const OM = Math.max(0, MM - rM._evictedSinceAdvance),
            SM = null !== (iM = rM._instance.getPersistedProperty(ni.LogsQueue)) && void 0 !== iM ? iM : [];
          rM._instance.setPersistedProperty(ni.LogsQueue, SM.slice(OM)), yield rM._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return ta(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(MM) {
        var rM;
        if (this._instance.optedOut) return;
        const iM = null !== (rM = this._instance.getPersistedProperty(ni.LogsQueue)) && void 0 !== rM ? rM : [];
        this._maxQueueSize > iM.length || (iM.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), iM.push(MM), this._instance.setPersistedProperty(ni.LogsQueue, iM), this._maxBufferSize > iM.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(pa(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const MM = this._instance.getPersistedProperty(ni.LogsQueue);
        return !!MM && MM.length > 0
      }
      shutdown(MM) {
        var rM = this;
        return Bi((function*() {
          rM._flushTimer.clear();
          const iM = rM.flush().catch((() => {}));
          void 0 !== MM ? yield JS(iM, MM): yield iM
        }))()
      }
      flushWithTimeout(MM) {
        var rM = this;
        return Bi((function*() {
          const iM = rM.flush();
          yield JS(iM, MM, (() => {
            iM.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (MM => {
          this._consecutiveFlushFailures++, this._flushJitter = Ra(), this._logger.error("PostHog logs flush failed:", MM)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const sa = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function Da(MM) {
      return String(MM) + "000000"
    }

    function ka(MM, rM, iM, OM) {
      let SM = "";
      return OM && (SM = Object.keys(OM).sort().map((MM => `${JSON.stringify(MM)}:${JSON.stringify(OM[MM])}`)).join(",")), `${MM}\0${rM}\0${null!=iM?iM:""}\0${SM}`
    }
    var Za = class {
      constructor(MM, rM, iM) {
        this._instance = MM, this._config = rM, this._logger = iM, this._series = new Map, this._flushTimer = new ua((() => this.flush().catch((MM => {
          this._logger.error("Metrics flush failed:", MM)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new nS, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: MM,
          type: "count",
          value: rM,
          unit: null == iM ? void 0 : iM.unit,
          attributes: null == iM ? void 0 : iM.attributes
        })
      }
      gauge(MM, rM, iM) {
        this._capture({
          name: MM,
          type: "gauge",
          value: rM,
          unit: null == iM ? void 0 : iM.unit,
          attributes: null == iM ? void 0 : iM.attributes
        })
      }
      histogram(MM, rM, iM) {
        this._capture({
          name: MM,
          type: "histogram",
          value: rM,
          unit: null == iM ? void 0 : iM.unit,
          attributes: null == iM ? void 0 : iM.attributes
        })
      }
      flush() {
        var MM = this;
        const rM = this._flushPromise,
          iM = function() {
            var iM = Bi((function*() {
              rM && (yield rM.catch((() => {}))), yield MM._doFlush()
            }));
            return function() {
              return iM.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === iM && (this._flushPromise = null)
          }));
        return this._flushPromise = iM, iM
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const MM = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(MM)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(MM) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const rM = this._runBeforeSend(MM);
        if (null === rM) return;
        if (!rM.name || "string" != typeof rM.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof rM.value || !Number.isFinite(rM.value)) return void this._logger.warn(`Dropping metric '${rM.name}': value must be a finite number`);
        if ("count" === rM.type && 0 > rM.value) return void this._logger.warn(`Dropping count '${rM.name}': counters are monotonic, value must be >= 0`);
        let iM, OM;
        try {
          iM = rM.attributes ? US({}, rM.attributes) : void 0, OM = ka(rM.type, rM.name, rM.unit, iM)
        } catch (MM) {
          return void this._logger.warn(`Dropping metric '${rM.name}': attributes could not be serialized`, MM)
        }
        let SM = this._series.get(OM);
        if (!SM) {
          if (!this._admitNewSeries()) return;
          SM = {
            name: rM.name,
            type: rM.type,
            unit: rM.unit,
            attributes: iM,
            windowStartMs: Date.now()
          }, this._series.set(OM, SM)
        }
        const jM = this._typeByName.get(rM.name);
        void 0 === jM ? this._typeByName.set(rM.name, rM.type) : jM === rM.type || this._typeCollisionWarned.has(rM.name) || (this._typeCollisionWarned.add(rM.name), this._logger.warn(`Metric name '${rM.name}' is already used as a ${jM}; recording it as a ${rM.type} too will blend both series in charts. Use a distinct name.`)), this._fold(SM, rM.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(MM, rM) {
        switch (MM.type) {
          case "count":
            var iM;
            MM.total = (null !== (iM = MM.total) && void 0 !== iM ? iM : 0) + rM;
            break;
          case "gauge":
            MM.last = rM;
            break;
          case "histogram": {
            MM.hist || (MM.hist = {
              count: 0,
              sum: 0,
              min: rM,
              max: rM,
              bucketCounts: new Array(sa.length + 1).fill(0)
            });
            const iM = MM.hist;
            iM.count += 1, iM.sum += rM, iM.min = Math.min(iM.min, rM), iM.max = Math.max(iM.max, rM), iM.bucketCounts[function(MM, rM) {
              for (let iM = 0; rM.length > iM; iM++)
                if (rM[iM] >= MM) return iM;
              return rM.length
            }(rM, sa)] += 1;
            break
          }
        }
      }
      _runBeforeSend(MM) {
        const rM = this._config.beforeSend;
        if (!rM) return MM;
        const iM = Ui(rM) ? rM : [rM];
        let OM = MM;
        for (const SM of iM) try {
          const MM = SM(OM);
          if (!MM) return this._logger.info("Metric was rejected in beforeSend function"), null;
          OM = MM
        } catch (MM) {
          return this._logger.error("Error in beforeSend function for metric:", MM), null
        }
        return OM
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(pa(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var MM = this;
        return Bi((function*() {
          if (MM._flushTimer.clear(), 0 === MM._series.size) return;
          const rM = MM._series;
          MM._series = new Map, MM._seriesCapWarned = !1, MM._typeByName = new Map, MM._typeCollisionWarned = new Set;
          const iM = MM._generation,
            OM = yield MM._instance._sendMetricsBatch(MM._buildPayload(rM));
          if (iM === MM._generation) switch (MM._retryAfter.record(OM), "retry-later" === OM.kind ? (MM._consecutiveFlushFailures++, MM._flushJitter = Ra()) : (MM._consecutiveFlushFailures = 0, MM._flushJitter = 1), MM._flushTimer.pending && MM._flushTimer.arm(MM._nextFlushDelay()), OM.kind) {
            case "ok":
              return;
            case "retry-later":
              return MM._mergeWindowBack(rM), void MM._flushTimer.armNoEarlierThan(MM._nextFlushDelay());
            case "too-large":
              return void MM._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void MM._logger.error("Failed to send metrics batch:", OM.error)
          }
        }))()
      }
      _buildPayload(MM) {
        return rM = this._buildMetrics(MM), iM = function(MM, rM, iM) {
          return la(MM, rM, iM)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), OM = this._instance.getLibraryId(), SM = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: Ua(iM)
            },
            scopeMetrics: [{
              scope: {
                name: OM,
                version: SM
              },
              metrics: rM
            }]
          }]
        };
        var rM, iM, OM, SM
      }
      _buildMetrics(MM) {
        const rM = Da(Date.now()),
          iM = new Map;
        for (const aM of MM.values()) {
          var OM;
          const MM = ka(aM.type, aM.name, aM.unit, void 0);
          let PM = iM.get(MM);
          PM || (PM = US({
            name: aM.name
          }, aM.unit && {
            unit: aM.unit
          }), "count" === aM.type ? PM.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === aM.type ? PM.gauge = {
            dataPoints: []
          } : PM.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, iM.set(MM, PM));
          const nM = ha(null !== (OM = aM.attributes) && void 0 !== OM ? OM : {}, this._logger),
            QM = Da(aM.windowStartMs);
          if ("count" === aM.type) {
            var SM;
            const MM = {
              attributes: nM,
              startTimeUnixNano: QM,
              timeUnixNano: rM,
              asDouble: null !== (SM = aM.total) && void 0 !== SM ? SM : 0
            };
            PM.sum.dataPoints.push(MM)
          } else if ("gauge" === aM.type) {
            var jM;
            const MM = {
              attributes: nM,
              timeUnixNano: rM,
              asDouble: null !== (jM = aM.last) && void 0 !== jM ? jM : 0
            };
            PM.gauge.dataPoints.push(MM)
          } else aM.hist && PM.histogram.dataPoints.push({
            attributes: nM,
            startTimeUnixNano: QM,
            timeUnixNano: rM,
            count: aM.hist.count,
            sum: aM.hist.sum,
            min: aM.hist.min,
            max: aM.hist.max,
            bucketCounts: aM.hist.bucketCounts,
            explicitBounds: sa
          })
        }
        return Array.from(iM.values())
      }
      _mergeWindowBack(MM) {
        for (const [OM, SM] of MM) {
          const MM = this._series.get(OM);
          if (MM) switch (MM.windowStartMs = Math.min(MM.windowStartMs, SM.windowStartMs), MM.type) {
            case "count":
              var rM, iM;
              MM.total = (null !== (rM = MM.total) && void 0 !== rM ? rM : 0) + (null !== (iM = SM.total) && void 0 !== iM ? iM : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (SM.hist)
                if (MM.hist) {
                  MM.hist.count += SM.hist.count, MM.hist.sum += SM.hist.sum, MM.hist.min = Math.min(MM.hist.min, SM.hist.min), MM.hist.max = Math.max(MM.hist.max, SM.hist.max);
                  for (let rM = 0; MM.hist.bucketCounts.length > rM; rM++) MM.hist.bucketCounts[rM] += SM.hist.bucketCounts[rM]
                } else MM.hist = SM.hist
          } else this._admitNewSeries() && this._series.set(OM, SM)
        }
      }
    };
    const oa = function(MM) {
        let {
          debugEnabled: rM
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = {
          _log(iM) {
            let OM;
            try {
              OM = typeof window > "u" ? void 0 : window
            } catch (MM) {
              return
            }
            for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
            OM && (SM.DEBUG || OM.POSTHOG_DEBUG || rM) && !bi(OM.console) && OM.console && ("__rrweb_original__" in OM.console[iM] ? OM.console[iM].__rrweb_original__ : OM.console[iM])(MM, ...aM)
          },
          debug() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            iM._log("debug", ...rM)
          },
          info() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            iM._log("log", ...rM)
          },
          warn() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            iM._log("warn", ...rM)
          },
          error() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            iM._log("error", ...rM)
          },
          critical() {
            for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
            console.error(MM, ...iM)
          },
          uninitializedWarning(MM) {
            iM.error(`You must initialize PostHog before calling ${MM}`)
          },
          createLogger: (rM, iM) => oa(`${MM} ${rM}`, iM)
        };
        return iM
      },
      fa = oa("[PostHog.js]"),
      Ya = fa.createLogger;

    function Na(MM, rM) {
      Ui(MM) && MM.forEach(rM)
    }

    function Aa(MM, rM) {
      if (!ui(MM))
        if (Ui(MM)) MM.forEach(rM);
        else if ((MM => MM instanceof FormData)(MM)) MM.forEach(((MM, iM) => rM(MM, iM)));
      else
        for (const iM in MM) li.call(MM, iM) && rM(MM[iM], iM)
    }
    const xa = function(MM) {
      for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
      for (const SM of iM)
        for (const rM in SM) void 0 !== SM[rM] && (MM[rM] = SM[rM]);
      return MM
    };

    function va(MM) {
      const rM = Object.keys(MM);
      let iM = rM.length;
      const OM = new Array(iM);
      for (; iM--;) OM[iM] = [rM[iM], MM[rM[iM]]];
      return OM
    }
    const Fa = function(MM) {
        return function() {
          try {
            for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
            return MM.apply(this, iM)
          } catch (MM) {
            fa.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), fa.critical(MM)
          }
        }
      },
      Ba = function(MM) {
        const rM = {};
        return Aa(MM, (function(MM, iM) {
          (wi(MM) && MM.length > 0 || Ri(MM)) && (rM[iM] = MM)
        })), rM
      };

    function Xa(MM) {
      const rM = US({}, MM);
      for (const iM of ["name", "message", "stack", "cause", "errors"]) try {
        iM in MM && (rM[iM] = MM[iM])
      } catch (MM) {}
      return rM
    }
    const Ia = ["herokuapp.com", "vercel.app", "netlify.app"];

    function Ka(MM) {
      const rM = null == MM ? void 0 : MM.hostname;
      if (!wi(rM)) return !1;
      const iM = rM.split(".").slice(-2).join(".");
      for (const OM of Ia)
        if (iM === OM) return !1;
      return !0
    }

    function qa(MM, rM, iM, OM) {
      const {
        capture: SM = !1,
        passive: jM = !0
      } = null != OM ? OM : {};
      null == MM || MM.addEventListener(rM, iM, {
        capture: SM,
        passive: jM
      })
    }

    function Ta(MM) {
      return "ph_toolbar_internal" === MM.name
    }
    const Va = MM => {
      if (cr) {
        try {
          const rM = MM + "=",
            iM = cr.cookie.split(";").filter((MM => MM.length));
          for (let MM = 0; iM.length > MM; MM++) {
            let OM = iM[MM];
            for (;
              " " == OM.charAt(0);) OM = OM.substring(1, OM.length);
            if (0 === OM.indexOf(rM)) return decodeURIComponent(OM.substring(rM.length, OM.length))
          }
        } catch (MM) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(MM) {
      return 0 > MM ? Math.ceil(MM) : Math.floor(MM)
    }), Number.isInteger || (Number.isInteger = function(MM) {
      return Ri(MM) && isFinite(MM) && Math.floor(MM) === MM
    });
    var ca = class MM {
        constructor(MM) {
          if (this.bytes = MM, 16 !== MM.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(rM, iM, OM, SM) {
          if (!Number.isInteger(rM) || !Number.isInteger(iM) || !Number.isInteger(OM) || !Number.isInteger(SM) || 0 > rM || 0 > iM || 0 > OM || 0 > SM || rM > 0xffffffffffff || iM > 4095 || OM > 1073741823 || SM > 4294967295) throw new RangeError("invalid field value");
          const jM = new Uint8Array(16);
          return jM[0] = rM / Math.pow(2, 40), jM[1] = rM / Math.pow(2, 32), jM[2] = rM / Math.pow(2, 24), jM[3] = rM / Math.pow(2, 16), jM[4] = rM / 256, jM[5] = rM, jM[6] = 112 | iM >>> 8, jM[7] = iM, jM[8] = 128 | OM >>> 24, jM[9] = OM >>> 16, jM[10] = OM >>> 8, jM[11] = OM, jM[12] = SM >>> 24, jM[13] = SM >>> 16, jM[14] = SM >>> 8, jM[15] = SM, new MM(jM)
        }
        toString() {
          let MM = "";
          for (let rM = 0; this.bytes.length > rM; rM++) MM = MM + (this.bytes[rM] >>> 4).toString(16) + (15 & this.bytes[rM]).toString(16), 3 !== rM && 5 !== rM && 7 !== rM && 9 !== rM || (MM += "-");
          if (36 !== MM.length) throw new Error("Invalid UUIDv7 was generated");
          return MM
        }
        clone() {
          return new MM(this.bytes.slice(0))
        }
        equals(MM) {
          return 0 === this.compareTo(MM)
        }
        compareTo(MM) {
          for (let rM = 0; 16 > rM; rM++) {
            const iM = this.bytes[rM] - MM.bytes[rM];
            if (0 !== iM) return Math.sign(iM)
          }
          return 0
        }
      },
      MP = class {
        generate() {
          const MM = this.generateOrAbort();
          if (!bi(MM)) return MM;
          {
            this._timestamp = 0;
            const MM = this.generateOrAbort();
            if (bi(MM)) throw new Error("Could not generate UUID after timestamp reset");
            return MM
          }
        }
        generateOrAbort() {
          const MM = (() => {
            const MM = Date.now();
            return Ri(MM) && isFinite(MM) ? Math.min(Math.max(Math.floor(MM), 0), 0xffffffffffff) : 0
          })();
          if (MM > this._timestamp) this._timestamp = MM, this._resetCounter();
          else {
            if (this._timestamp >= MM + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return ca.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new iP
        }
      };
    let rP = MM => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let rM = 0; MM.length > rM; rM++) MM[rM] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return MM
    };
    qr && !bi(qr.crypto) && crypto.getRandomValues && (rP = MM => crypto.getRandomValues(MM));
    var iP = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (rP(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let OP;
    const SP = () => jP().toString(),
      jP = () => (OP || (OP = new MP)).generate();
    let aP = "";
    const PP = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let nP = null;
    const QP = {
      _is_supported() {
        if (!gi(nP)) return nP;
        if (nP = !1, cr) try {
          const MM = `__ph_cookie_support_${SP()}`;
          QP._set(MM, "xyz"), nP = '"xyz"' === Va(MM), QP._remove(MM)
        } catch (OM) {
          nP = !1
        }
        return nP
      },
      _error(MM) {
        fa.error("cookieStore error: " + MM)
      },
      _get: Va,
      _parse(MM) {
        let rM;
        try {
          rM = JSON.parse(QP._get(MM)) || {}
        } catch (MM) {}
        return rM
      },
      _set(MM, rM, iM, OM, SM) {
        if (!cr) return !1;
        try {
          let jM = "",
            aM = "";
          const PM = function(MM, rM) {
            if (rM) {
              let rM = function(MM) {
                let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cr;
                if (aP) return aP;
                if (!rM) return "";
                if (["localhost", "127.0.0.1"].includes(MM)) return "";
                const iM = MM.split(".");
                let OM = Math.min(iM.length, 8);
                const SM = "dmn_chk_" + SP();
                for (; !aP && OM--;) {
                  const MM = iM.slice(OM).join("."),
                    jM = SM + "=1;domain=." + MM + ";path=/";
                  rM.cookie = jM + ";max-age=3", rM.cookie.includes(SM) && (rM.cookie = jM + ";max-age=0", aP = MM)
                }
                return aP
              }(MM);
              if (!rM) {
                const iM = (MM => {
                  const rM = MM.match(PP);
                  return rM ? rM[0] : ""
                })(MM);
                iM !== rM && fa.info("Warning: cookie subdomain discovery mismatch", iM, rM), rM = iM
              }
              return rM ? "; domain=." + rM : ""
            }
            return ""
          }(cr.location.hostname, OM);
          if (iM) {
            const MM = new Date;
            MM.setTime(MM.getTime() + 864e5 * iM), jM = "; expires=" + MM.toUTCString()
          }
          SM && (aM = "; secure");
          const nM = MM + "=" + encodeURIComponent(JSON.stringify(rM)) + jM + "; SameSite=Lax; path=/" + PM + aM;
          return nM.length > 3686.4 && fa.warn("cookieStore warning: large cookie, len=" + nM.length), cr.cookie = nM, !0
        } catch (MM) {
          return !1
        }
      },
      _remove(MM, rM) {
        if ((null == cr ? void 0 : cr.cookie) && (!rM || !gi(Va(MM)))) try {
          QP._set(MM, "", -1, rM)
        } catch (MM) {
          return
        }
      }
    };
    let zP = null;
    const LP = {
        _is_supported() {
          if (!gi(zP)) return zP;
          let MM = !0;
          if (bi(qr)) MM = !1;
          else try {
            const rM = "__mplssupport__";
            LP._set(rM, "xyz"), '"xyz"' !== LP._get(rM) && (MM = !1), LP._remove(rM)
          } catch (SM) {
            MM = !1
          }
          return MM || fa.error("localStorage unsupported; falling back to cookie store"), zP = MM, MM
        },
        _error(MM) {
          fa.error("localStorage error: " + MM)
        },
        _get(MM) {
          try {
            return null == qr ? void 0 : qr.localStorage.getItem(MM)
          } catch (MM) {
            LP._error(MM)
          }
          return null
        },
        _parse(MM) {
          try {
            return JSON.parse(LP._get(MM)) || {}
          } catch (MM) {}
          return null
        },
        _set(MM, rM) {
          try {
            return null == qr || qr.localStorage.setItem(MM, JSON.stringify(rM)), !0
          } catch (MM) {
            LP._error(MM)
          }
          return !1
        },
        _remove(MM) {
          try {
            null == qr || qr.localStorage.removeItem(MM)
          } catch (MM) {
            LP._error(MM)
          }
        }
      },
      mP = [JM, PM, HM, nM, lM, LM, zM, QM, dM],
      HP = [bM, eM, VM, cM, br, er, RM, lr],
      hP = MM => MM + "_cpm",
      JP = ["__proto__", "constructor", "prototype"],
      dP = MM => {
        if (!Ci(MM)) return {};
        const rM = {};
        return Object.keys(MM).forEach((iM => {
          -1 === JP.indexOf(iM) && (rM[iM] = MM[iM])
        })), rM
      },
      yP = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const iM = {};
        return [...HP, ...rM].forEach((rM => {
          const OM = MM[rM];
          bi(OM) || gi(OM) || "" === OM || (iM[rM] = OM)
        })), iM
      },
      lP = MM => {
        let rM = 5381,
          iM = 2166136261;
        for (let OM = 0; MM.length > OM; OM++) {
          const SM = MM.charCodeAt(OM);
          rM = 33 * rM ^ SM, iM = Math.imul(iM ^ SM, 16777619)
        }
        return MM.length.toString(36) + "." + (rM >>> 0).toString(36) + "." + (iM >>> 0).toString(36)
      },
      EP = (MM, rM) => ({
        p: rM,
        f: lP(JSON.stringify(MM))
      }),
      UP = (MM, rM) => {
        if (!rM) return {
          properties: [],
          isValid: !1
        };
        try {
          const iM = QP._parse(hP(MM)),
            OM = (null == iM ? void 0 : iM.f) === lP(rM) && Ui(iM.p);
          return {
            properties: OM ? iM.p : [],
            isValid: OM
          }
        } catch (MM) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      GP = (MM, rM) => rM + "|" + (QP._get(hP(MM)) || ""),
      CP = {},
      eP = {
        _is_supported: () => !0,
        _error(MM) {
          fa.error("memoryStorage error: " + MM)
        },
        _get: MM => MM in CP ? CP[MM] : null,
        _parse: MM => MM in CP ? CP[MM] : null,
        _set: (MM, rM) => (CP[MM] = rM, !0),
        _remove(MM) {
          delete CP[MM]
        }
      };
    let bP = null;
    const wP = {
      _is_supported() {
        if (!gi(bP)) return bP;
        if (bP = !0, bi(qr)) bP = !1;
        else try {
          const MM = "__support__";
          wP._set(MM, "xyz"), '"xyz"' !== wP._get(MM) && (bP = !1), wP._remove(MM)
        } catch (OM) {
          bP = !1
        }
        return bP
      },
      _error(MM) {
        fa.error("sessionStorage error: ", MM)
      },
      _get(MM) {
        try {
          return null == qr ? void 0 : qr.sessionStorage.getItem(MM)
        } catch (MM) {
          wP._error(MM)
        }
        return null
      },
      _parse(MM) {
        try {
          return JSON.parse(wP._get(MM)) || null
        } catch (MM) {}
        return null
      },
      _set(MM, rM) {
        try {
          return null == qr || qr.sessionStorage.setItem(MM, JSON.stringify(rM)), !0
        } catch (MM) {
          wP._error(MM)
        }
        return !1
      },
      _remove(MM) {
        try {
          null == qr || qr.sessionStorage.removeItem(MM)
        } catch (MM) {
          wP._error(MM)
        }
      }
    };
    var tP = class {
      constructor(MM) {
        this._instance = MM
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
      optInOut(MM) {
        this.yJ._set(this._storageKey, MM ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.yJ._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: MM,
          opt_out_capturing_cookie_prefix: rM,
          consent_persistence_name: iM
        } = this._instance.config;
        return iM || (rM ? rM + MM : "__ph_opt_in_out_" + MM)
      }
      get _storedConsent() {
        const MM = this.yJ._get(this._storageKey);
        return xi(MM) ? 1 : mi(vi, MM) ? 0 : -1
      }
      get yJ() {
        const MM = this._config.opt_out_capturing_persistence_type,
          rM = "localStorage" === MM ? LP : QP,
          iM = rM._is_supported() ? rM : eP;
        if (!this._persistentStore || this._persistentStore !== iM) {
          this._persistentStore = iM;
          const rM = "localStorage" === MM ? QP : LP;
          rM._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(xi(rM._get(this._storageKey))), rM._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == Vr ? void 0 : Vr.doNotTrack, null == Vr ? void 0 : Vr.msDoNotTrack, Pi.doNotTrack, null == Vr ? void 0 : Vr.globalPrivacyControl].some((MM => xi(MM)))
      }
    };

    function gP(MM, rM) {
      var iM;
      const OM = null == MM || null === (iM = MM.config) || void 0 === iM ? void 0 : iM.get_current_url;
      if (!Gi(OM)) return rM;
      try {
        const MM = OM(rM);
        return wi(MM) && MM ? MM : rM
      } catch (MM) {
        return fa.error("Error in get_current_url, falling back to window.location.href", MM), rM
      }
    }

    function uP(MM) {
      var rM;
      return MM instanceof Element && ("__POSTHOG_TOOLBAR__" === MM.id || !!(null === (rM = MM.closest) || void 0 === rM ? void 0 : rM.call(MM, ".toolbar-global-fade-container")))
    }

    function RP(MM) {
      return !!MM && 1 === MM.nodeType
    }

    function pP(MM, rM) {
      return !!MM && !!MM.tagName && MM.tagName.toLowerCase() === rM.toLowerCase()
    }

    function WP(MM) {
      return !!MM && 3 === MM.nodeType
    }

    function sP(MM) {
      return !!MM && 11 === MM.nodeType && RP(MM.host)
    }

    function DP(MM) {
      return MM ? Hi(MM).split(/\s+/) : []
    }

    function kP(MM, rM) {
      const iM = function(MM) {
        var rM;
        const iM = null == qr || null === (rM = qr.location) || void 0 === rM ? void 0 : rM.href;
        return bi(iM) ? void 0 : gP(MM, iM)
      }(rM);
      return !!(iM && MM && MM.some((MM => iM.match(MM))))
    }

    function ZP(MM) {
      let rM = "";
      switch (typeof MM.className) {
        case "string":
          rM = MM.className;
          break;
        case "object":
          rM = (MM.className && "baseVal" in MM.className ? MM.className.baseVal : null) || MM.getAttribute("class") || "";
          break;
        default:
          rM = ""
      }
      return DP(rM)
    }

    function oP(MM) {
      return ui(MM) ? null : Hi(MM).split(/(\s+)/).filter((MM => Jn(MM))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function fP(MM) {
      let rM = "";
      return an(MM) && !Pn(MM) && MM.childNodes && MM.childNodes.length && Aa(MM.childNodes, (function(MM) {
        var iM;
        WP(MM) && MM.textContent && (rM += null !== (iM = oP(MM.textContent)) && void 0 !== iM ? iM : "")
      })), Hi(rM)
    }

    function YP(MM) {
      var rM;
      return bi(MM.target) ? MM.srcElement || null : (null === (rM = MM.target) || void 0 === rM ? void 0 : rM.shadowRoot) ? MM.composedPath()[0] || null : MM.target || null
    }
    const NP = ["a", "button", "form", "input", "select", "textarea", "label"];

    function AP(MM, rM) {
      const iM = MM.matches || MM.matchesSelector || MM.msMatchesSelector || MM.mozMatchesSelector || MM.webkitMatchesSelector || MM.oMatchesSelector;
      try {
        return !!iM && iM.call(MM, rM)
      } catch (MM) {
        return !1
      }
    }

    function xP(MM, rM) {
      if (bi(rM)) return !0;
      for (const iM of MM)
        if (rM.some((MM => AP(iM, MM)))) return !0;
      return !1
    }

    function vP(MM) {
      const rM = MM.parentNode;
      return !(!rM || !RP(rM)) && rM
    }
    const FP = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      BP = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      XP = [...BP, "+", "-", "\u2212", "\u2013"],
      IP = XP.length + 10,
      KP = ["button", "a", "input", "select", "textarea", "label"],
      qP = ["button", "link", "tab", "menuitem", "option"],
      TP = (MM, rM) => /[a-z0-9]/i.test(rM) ? mi(XP, rM) ? new RegExp(`\\b${rM}\\b`).test(MM) : MM.includes(rM) : MM === rM,
      VP = MM => mi(KP, MM.tagName.toLowerCase()) || mi(qP, (MM.getAttribute("role") || "").toLowerCase());

    function cP(MM) {
      let rM = "",
        iM = "";
      const OM = MM => {
        RP(MM) && an(MM) && !Pn(MM) && (rM += ` ${fP(MM)}`, iM = iM || MM.getAttribute("aria-label") || "", Aa(MM.childNodes, OM))
      };
      OM(MM), rM = Hi(rM.replace(/\s+/g, " "));
      const SM = (Jn(rM) ? rM : "").toLowerCase(),
        jM = MM.getAttribute("aria-label") || (SM ? "" : iM);
      return {
        safeText: SM,
        ariaLabel: Hi(jM).toLowerCase()
      }
    }
    const Mn = [".ph-no-rageclick", ".ph-no-capture"],
      rn = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function On(MM, rM) {
      if (!qr || Sn(MM)) return !1;
      let iM, OM, SM;
      var jM, aM;
      if (si(rM) ? (iM = !!rM && Mn, OM = void 0, SM = !1) : (iM = null !== (jM = null == rM ? void 0 : rM.css_selector_ignorelist) && void 0 !== jM ? jM : Mn, OM = null == rM ? void 0 : rM.content_ignorelist, SM = null !== (aM = null == rM ? void 0 : rM.ignore_text_selection) && void 0 !== aM && aM), !1 === iM) return !1;
      if (SM && function(MM) {
          return !(!MM || !RP(MM)) && (!!pP(MM, "textarea") || (pP(MM, "input") ? mi(rn, (MM.getAttribute("type") || "").toLowerCase()) : function(MM) {
            var rM;
            if (MM.isContentEditable) return !0;
            const iM = null === (rM = MM.getAttribute) || void 0 === rM ? void 0 : rM.call(MM, "contenteditable");
            return "true" === iM || "" === iM
          }(MM)))
        }(MM)) return !1;
      const {
        targetElementList: PM
      } = jn(MM, !1);
      return !(OM && function(MM, rM) {
        let iM, {
          safeText: OM,
          ariaLabel: SM
        } = rM;
        if (!0 === MM) iM = BP;
        else {
          if (!Ui(MM)) return !1;
          if (MM.length > IP) return fa.error(`[PostHog] content_ignorelist array cannot exceed ${IP} items. Use css_selector_ignorelist for more complex matching.`), !1;
          iM = MM.map((MM => MM.toLowerCase()))
        }
        return iM.some((MM => TP(OM, MM) || TP(SM, MM)))
      }(OM, function(MM, rM) {
        for (const iM of rM)
          if (VP(iM)) return cP(iM);
        for (const iM of rM) {
          try {
            if ("pointer" !== (null == qr ? void 0 : qr.getComputedStyle(iM).getPropertyValue("cursor"))) break
          } catch (MM) {
            break
          }
          const rM = cP(iM);
          if (rM.safeText || rM.ariaLabel) return rM
        }
        return cP(MM)
      }(MM, PM)) || xP(PM, iM))
    }
    const Sn = MM => !MM || pP(MM, "html") || !RP(MM),
      jn = (MM, rM) => {
        if (!qr || Sn(MM)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let iM = !1;
        const OM = [MM];
        let SM = MM;
        for (; SM.parentNode && !pP(SM, "body");) {
          if (sP(SM.parentNode)) {
            OM.push(SM.parentNode.host), SM = SM.parentNode.host;
            continue
          }
          const jM = vP(SM);
          if (!jM) break;
          if (rM || NP.indexOf(jM.tagName.toLowerCase()) > -1) iM = !0;
          else try {
            const MM = qr.getComputedStyle(jM);
            MM && "pointer" === MM.getPropertyValue("cursor") && (iM = !0)
          } catch (MM) {}
          OM.push(jM), SM = jM
        }
        return {
          parentIsUsefulElement: iM,
          targetElementList: OM
        }
      };

    function an(MM) {
      const rM = new Set;
      let iM = 0;
      for (let jM = MM; jM.parentNode && !pP(jM, "body"); jM = jM.parentNode) {
        if (iM++ >= 1e3 || rM.has(jM)) return !1;
        rM.add(jM);
        const MM = ZP(jM);
        if (mi(MM, "ph-sensitive") || mi(MM, "ph-no-capture")) return !1
      }
      if (mi(ZP(MM), "ph-include")) return !0;
      const OM = MM.type || "";
      if (wi(OM)) switch (OM.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const SM = MM.name || MM.id || "";
      return !wi(SM) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(SM.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Pn(MM) {
      return !!(pP(MM, "input") && !["button", "checkbox", "submit", "reset"].includes(MM.type) || pP(MM, "select") || pP(MM, "textarea") || "true" === MM.getAttribute("contenteditable"))
    }
    const nn = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      Qn = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      zn = [16, 15, 14, 13],
      Ln = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      mn = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Hn = /[0-9A-Za-z_]/;

    function hn(MM) {
      let rM = 0,
        iM = !1;
      for (let OM = MM.length - 1; OM >= 0; OM--) {
        let SM = MM.charCodeAt(OM) - 48;
        iM && (SM *= 2, SM > 9 && (SM -= 9)), rM += SM, iM = !iM
      }
      return rM % 10 == 0
    }

    function Jn(MM) {
      let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (ui(MM)) return !1;
      if (wi(MM)) {
        if (MM = Hi(MM), rM ? nn.test((MM || "").replace(/[- ]/g, "")) : function(MM) {
            let rM;
            for (Qn.lastIndex = 0; rM = Qn.exec(MM);) {
              const MM = rM[2];
              if (!MM) continue;
              const iM = MM.replace(/[- ]/g, "");
              for (let rM = 0; iM.length > rM; rM++)
                for (const MM of zn) {
                  const OM = rM + MM;
                  if (iM.length >= OM) {
                    const MM = iM.slice(rM, OM);
                    if (nn.test(MM) && hn(MM)) return !0
                  }
                }
            }
            return !1
          }(MM)) return !1;
        if (rM ? Ln.test(MM) : function(MM) {
            let rM;
            for (mn.lastIndex = 0; rM = mn.exec(MM);) {
              const MM = rM[1],
                iM = rM[3];
              if (!(MM && iM && Hn.test(MM) && Hn.test(iM))) return !0
            }
            return !1
          }(MM)) return !1
      }
      return !0
    }

    function dn(MM) {
      let rM = fP(MM);
      return rM = `${rM} ${yn(MM)}`.trim(), Jn(rM) ? rM : ""
    }

    function yn(MM) {
      let rM = "";
      return MM && MM.childNodes && MM.childNodes.length && Aa(MM.childNodes, (function(MM) {
        var iM;
        if (MM && "span" === (null === (iM = MM.tagName) || void 0 === iM ? void 0 : iM.toLowerCase())) try {
          const iM = fP(MM);
          rM = `${rM} ${iM}`.trim(), MM.childNodes && MM.childNodes.length && (rM = `${rM} ${yn(MM)}`.trim())
        } catch (MM) {
          fa.error("[AutoCapture]", MM)
        }
      })), rM
    }

    function En(MM) {
      return MM.replace(/"|\\"/g, '\\"')
    }

    function Un(MM) {
      const rM = MM.attr__class;
      if (rM) return Ui(rM) ? rM : DP(rM)
    }
    const Gn = Ya("[Dead Clicks]"),
      Cn = () => !0,
      en = MM => {
        var rM;
        const iM = !!(null === (rM = MM.instance.persistence) || void 0 === rM ? void 0 : rM.get_property(NM)),
          OM = MM.instance.config.capture_dead_clicks;
        return si(OM) ? OM : !!Ci(OM) || iM
      };
    var bn = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(MM, rM, iM) {
        this.instance = MM, this.isEnabled = rM, this.onCapture = iM, this.startIfEnabledOrStop()
      }
      onRemoteConfig(MM) {
        if (!MM.ok) return;
        const rM = MM.config;
        "captureDeadClicks" in rM && (this.instance.persistence && this.instance.persistence.register({
          [NM]: rM.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(MM) {
        var rM, iM, OM;
        (null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.initDeadClicksAutocapture) ? MM(): null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this.instance, "dead-clicks-autocapture", (rM => {
          rM ? Gn.error("failed to load script", rM) : MM()
        }))
      }
      _start() {
        var MM;
        if (cr) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (MM = Pi.__PosthogExtensions__) || void 0 === MM ? void 0 : MM.initDeadClicksAutocapture)) {
            const MM = Ci(this.instance.config.capture_dead_clicks) ? US({}, this.instance.config.capture_dead_clicks) : {};
            MM.__onCapture = this.onCapture, this.onCapture && (MM.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = Pi.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, MM), this._lazyLoadedDeadClicksAutocapture.start(cr), Gn.info("starting...")
          }
        } else Gn.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Gn.info("stopping..."))
      }
    };
    const wn = Ya("[SegmentIntegration]");

    function tn(MM, rM) {
      let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const OM = MM.config.segment;
      if (!OM) return rM();
      const {
        analytics: SM,
        filterProperties: jM
      } = (MM => Gi(MM.register))(aM = OM) ? {
        analytics: aM
      } : aM;
      var aM;
      ! function(MM, rM, iM, OM) {
        const SM = rM => {
            const SM = () => rM.anonymousId() || SP();
            MM.config.get_device_id = SM, OM && rM.id() && (MM.register({
              distinct_id: rM.id(),
              $device_id: SM()
            }), MM.persistence.set_property(lr, xr)), iM(OM ? void 0 : rM.anonymousId() || void 0)
          },
          jM = rM.user();
        "then" in jM && Gi(jM.then) ? jM.then(SM) : SM(jM)
      }(MM, SM, (iM => {
        SM.register(function(MM, rM) {
          let {
            filterProperties: iM
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || wn.warn("This browser does not have Promise support, and can not use the segment integration");
          const OM = (OM, SM) => {
            if (!SM) return OM;
            const jM = !!rM && OM.event.anonymousId === rM && !OM.event.userId;
            jM || OM.event.userId || OM.event.anonymousId === MM.get_distinct_id() || (wn.info("No userId set, resetting PostHog"), MM.reset()), jM || (rM = void 0), OM.event.userId && OM.event.userId !== MM.get_distinct_id() && (wn.info("UserId set, identifying with PostHog"), MM.identify(OM.event.userId));
            let aM = MM.calculateEventProperties(SM, OM.event.properties);
            if (!ui(iM)) {
              const MM = OM.event.properties || {},
                rM = {};
              for (const iM of Object.keys(aM)) li.call(MM, iM) || (rM[iM] = aM[iM]);
              const SM = ((MM, rM) => {
                const iM = Ui(MM) ? MM : [MM];
                let OM = US({}, rM);
                for (const SM of iM) try {
                  if (OM = SM(OM), ui(OM)) return null
                } catch (MM) {
                  return wn.error("Error in Segment filterProperties:", MM), null
                }
                return OM
              })(iM, rM);
              if (ui(SM)) return OM;
              aM = SM
            }
            return OM.event.properties = Object.assign({}, aM, OM.event.properties), OM
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: MM => OM(MM, MM.event.event),
            page: MM => OM(MM, Br),
            identify: MM => OM(MM, Ir),
            screen: MM => OM(MM, "$screen")
          }
        }(MM, iM, {
          filterProperties: jM
        })).then((() => {
          rM()
        }), (MM => {
          wn.error("Failed to register the Segment integration", MM), rM()
        }))
      }), iM)
    }
    const gn = "posthog-js";

    function un(MM) {
      let {
        organization: rM,
        projectId: iM,
        prefix: OM,
        severityAllowList: SM = ["error"],
        sendExceptionsToPostHog: jM = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return aM => {
        var PM, nM, QM, zM, LM;
        if ("*" !== SM && !SM.includes(aM.level) || !MM.__loaded) return aM;
        aM.tags || (aM.tags = {});
        const mM = MM.requestRouter.endpointFor("ui", `/project/${MM.config.token}/person/${MM.get_distinct_id()}`);
        aM.tags["PostHog Person URL"] = mM, MM.sessionRecordingStarted() && (aM.tags["PostHog Recording URL"] = MM.get_session_replay_url({
          withTimestamp: !0
        }));
        const HM = (null === (PM = aM.exception) || void 0 === PM ? void 0 : PM.values) || [],
          hM = HM.map((MM => US(US({}, MM), {}, {
            stacktrace: MM.stacktrace ? US(US({}, MM.stacktrace), {}, {
              type: "raw",
              frames: (MM.stacktrace.frames || []).map((MM => US(US({}, MM), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          JM = {
            $exception_message: (null === (nM = HM[0]) || void 0 === nM ? void 0 : nM.value) || aM.message,
            $exception_type: null === (QM = HM[0]) || void 0 === QM ? void 0 : QM.type,
            $exception_level: aM.level,
            $exception_list: hM,
            $sentry_event_id: aM.event_id,
            $sentry_exception: aM.exception,
            $sentry_exception_message: (null === (zM = HM[0]) || void 0 === zM ? void 0 : zM.value) || aM.message,
            $sentry_exception_type: null === (LM = HM[0]) || void 0 === LM ? void 0 : LM.type,
            $sentry_tags: aM.tags
          };
        var dM;
        return rM && iM && (JM.$sentry_url = (OM || "https://sentry.io/organizations/") + rM + "/issues/?project=" + iM + "&query=" + aM.event_id), jM && (null === (dM = MM.exceptions) || void 0 === dM || dM.sendExceptionEvent(JM)), aM
      }
    }
    var Rn = class {
        constructor(MM, rM, iM, OM, SM, jM) {
          this.name = gn, this.setupOnce = function(aM) {
            aM(un(MM, {
              organization: rM,
              projectId: iM,
              prefix: OM,
              severityAllowList: SM,
              sendExceptionsToPostHog: null == jM || jM
            }))
          }
        }
      },
      pn = class {
        constructor(MM) {
          this._onSessionIdChange = (MM, rM, iM) => {
            iM && (iM.noSessionId || iM.activityTimeout || iM.sessionPastMaximumLength || iM.crossTabAdoption) && (fa.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: MM,
              changeReason: iM
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = MM, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var MM;
          this._unsubscribeSessionId = null === (MM = this._instance.sessionManager) || void 0 === MM ? void 0 : MM.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var MM;
          null === (MM = this._unsubscribeSessionId) || void 0 === MM || MM.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(MM, rM) {
          var iM;
          const OM = this._previousPageViewProperties(MM, rM);
          return this._currentPageview = {
            pathname: null !== (iM = null == qr ? void 0 : qr.location.pathname) && void 0 !== iM ? iM : "",
            pageViewId: rM,
            timestamp: MM
          }, this._instance.scrollManager.resetContext(), OM
        }
        doPageLeave(MM) {
          var rM;
          return this._previousPageViewProperties(MM, null === (rM = this._currentPageview) || void 0 === rM ? void 0 : rM.pageViewId)
        }
        doEvent() {
          var MM;
          return {
            $pageview_id: null === (MM = this._currentPageview) || void 0 === MM ? void 0 : MM.pageViewId
          }
        }
        _previousPageViewProperties(MM, rM) {
          const iM = this._currentPageview;
          if (!iM) return {
            $pageview_id: rM
          };
          let OM = {
            $pageview_id: rM,
            $prev_pageview_id: iM.pageViewId
          };
          const SM = this._instance.scrollManager.getContext();
          if (SM && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: MM,
              lastScrollY: rM,
              maxScrollY: iM,
              maxContentHeight: jM,
              lastContentY: aM,
              maxContentY: PM
            } = SM;
            if (!(bi(MM) || bi(rM) || bi(iM) || bi(jM) || bi(aM) || bi(PM))) {
              MM = Math.ceil(MM), rM = Math.ceil(rM), iM = Math.ceil(iM), jM = Math.ceil(jM), aM = Math.ceil(aM), PM = Math.ceil(PM);
              const SM = MM > 1 ? qi(rM / MM, 0, 1, fa) : 1,
                nM = MM > 1 ? qi(iM / MM, 0, 1, fa) : 1,
                QM = jM > 1 ? qi(aM / jM, 0, 1, fa) : 1,
                zM = jM > 1 ? qi(PM / jM, 0, 1, fa) : 1;
              OM = xa(OM, {
                $prev_pageview_last_scroll: rM,
                $prev_pageview_last_scroll_percentage: SM,
                $prev_pageview_max_scroll: iM,
                $prev_pageview_max_scroll_percentage: nM,
                $prev_pageview_last_content: aM,
                $prev_pageview_last_content_percentage: QM,
                $prev_pageview_max_content: PM,
                $prev_pageview_max_content_percentage: zM
              })
            }
          }
          return iM.pathname && (OM.$prev_pageview_pathname = iM.pathname), iM.timestamp && (OM.$prev_pageview_duration = (MM.getTime() - iM.timestamp.getTime()) / 1e3), OM
        }
      };
    const Wn = ["flags", "surveys"],
      sn = {
        [CM]: {
          exposure: "hidden"
        },
        [tM]: {
          exposure: "hidden"
        },
        [gM]: {
          exposure: "hidden"
        },
        [sM]: {
          exposure: "hidden"
        },
        [RM]: {
          exposure: "hidden"
        },
        [WM]: {
          exposure: "hidden"
        },
        [DM]: {
          exposure: "event"
        },
        [kM]: {
          exposure: "hidden"
        },
        [xM]: {
          exposure: "hidden"
        },
        [ZM]: {
          exposure: "event"
        },
        [oM]: {
          exposure: "hidden"
        },
        [fM]: {
          exposure: "event"
        },
        [YM]: {
          exposure: "event"
        },
        [NM]: {
          exposure: "event"
        },
        [AM]: {
          exposure: "hidden"
        },
        [vM]: {
          exposure: "event"
        },
        [FM]: {
          exposure: "hidden"
        },
        [BM]: {
          exposure: "hidden"
        },
        [VM]: {
          exposure: "hidden"
        },
        [cM]: {
          exposure: "event"
        },
        [XM]: {
          exposure: "event",
          shouldSkipFromEventProperties: MM => gi(MM)
        },
        [Mr]: {
          exposure: "event"
        },
        [rr]: {
          exposure: "event"
        },
        [ir]: {
          exposure: "event"
        },
        [Or]: {
          exposure: "event"
        },
        [Sr]: {
          exposure: "hidden"
        },
        [HM]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [PM]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [aM]: {
          exposure: "hidden"
        },
        [nM]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [lM]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [LM]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [mM]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [EM]: {
          exposure: "hidden"
        },
        [UM]: {
          exposure: "hidden"
        },
        [JM]: {
          exposure: "hidden"
        },
        [hM]: {
          exposure: "hidden"
        },
        [ar]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [Pr]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [nr]: {
          exposure: "event"
        },
        [Qr]: {
          exposure: "hidden"
        },
        [zr]: {
          exposure: "hidden"
        },
        [Lr]: {
          exposure: "hidden"
        },
        [mr]: {
          exposure: "hidden"
        },
        [Hr]: {
          exposure: "hidden"
        },
        [hr]: {
          exposure: "event"
        },
        [Jr]: {
          exposure: "event"
        },
        [dr]: {
          exposure: "event"
        },
        [yr]: {
          exposure: "event"
        },
        [dM]: {
          exposure: "hidden"
        },
        [yM]: {
          exposure: "hidden"
        },
        [jr]: {
          exposure: "event"
        },
        [QM]: {
          exposure: "hidden"
        },
        [zM]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [lr]: {
          exposure: "hidden"
        },
        [Er]: {
          exposure: "hidden"
        },
        [Ur]: {
          exposure: "hidden"
        },
        [Gr]: {
          exposure: "hidden"
        },
        [Cr]: {
          exposure: "hidden"
        },
        [er]: {
          exposure: "hidden"
        },
        [br]: {
          exposure: "hidden"
        },
        [IM]: {
          exposure: "event"
        },
        [KM]: {
          exposure: "event"
        },
        [qM]: {
          exposure: "event"
        },
        [TM]: {
          exposure: "event"
        },
        [gr]: {
          exposure: "event"
        },
        [ur]: {
          exposure: "event"
        },
        [Rr]: {
          exposure: "hidden"
        },
        [pr]: {
          exposure: "hidden"
        },
        [Wr]: {
          exposure: "hidden"
        },
        [sr]: {
          exposure: "hidden"
        },
        [Dr]: {
          exposure: "hidden"
        },
        [kr]: {
          exposure: "hidden"
        },
        [Zr]: {
          exposure: "hidden"
        },
        [or]: {
          exposure: "hidden"
        },
        [fr]: {
          exposure: "hidden"
        },
        [Yr]: {
          exposure: "event"
        }
      },
      Dn = [
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
      kn = MM => {
        const rM = sn[MM];
        if (rM) return rM;
        for (const [iM, OM] of Dn)
          if (0 === MM.indexOf(iM)) return OM
      };

    function Zn() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (OM) {
        return
      }
    }
    const fn = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (OM) {
          return !1
        }
      },
      Yn = (MM, rM) => MM >= rM && fn(),
      Nn = (MM, rM, iM, OM) => {
        if (0 === MM) {
          if (fn()) {
            const MM = rM + 1;
            return MM === iM && OM(), MM
          }
          return rM
        }
        return 0
      },
      An = (MM, rM) => {
        try {
          let iM;
          return JSON.stringify(MM, ((MM, rM) => {
            var OM;
            return fi(rM) ? (null !== (OM = iM) && void 0 !== OM || (iM = new WeakMap), iM.has(rM) || iM.set(rM, Xa(rM)), iM.get(rM)) : "bigint" == typeof rM ? rM.toString() : rM
          }), rM)
        } catch (rM) {
          return di(MM)
        }
      },
      xn = MM => {
        const rM = null == cr ? void 0 : cr.createElement("a");
        return bi(rM) ? null : (rM.href = MM, rM)
      },
      vn = function(MM, rM) {
        const iM = ((MM.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let OM;
        for (let SM = 0; iM.length > SM; SM++) {
          const MM = iM[SM].split("=");
          if (MM[0] === rM) {
            OM = MM;
            break
          }
        }
        if (!Ui(OM) || 2 > OM.length) return "";
        {
          let MM = OM[1];
          try {
            MM = decodeURIComponent(MM)
          } catch (rM) {
            fa.error("Skipping decoding for malformed query param: " + MM)
          }
          return MM.replace(/\+/g, " ")
        }
      },
      Fn = function(MM, rM, iM) {
        if (!MM || !rM || !rM.length) return MM;
        const OM = MM.split("#"),
          SM = OM[1],
          jM = (OM[0] || "").split("?"),
          aM = jM[1],
          PM = jM[0],
          nM = (aM || "").split("&"),
          QM = [];
        for (let LM = 0; nM.length > LM; LM++) {
          const MM = nM[LM].split("=");
          Ui(MM) && (rM.includes(MM[0]) ? QM.push(MM[0] + "=" + iM) : QM.push(nM[LM]))
        }
        let zM = PM;
        return null != aM && (zM += "?" + QM.join("&")), null != SM && (zM += "#" + SM), zM
      },
      Bn = function(MM, rM) {
        const iM = MM.match(new RegExp(rM + "=([^&]*)"));
        return iM ? iM[1] : null
      },
      Xn = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      In = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Xn],
      Kn = "<masked>",
      qn = ["li_fat_id"];

    function Tn(MM, rM, iM) {
      if (!cr) return {};
      const OM = rM ? [...Xn, ...iM || []] : [],
        SM = Vn(Fn(cr.URL, OM, Kn), MM),
        jM = function() {
          const MM = {};
          return Aa(qn, (function(rM) {
            const iM = Va(rM);
            MM[rM] = iM || null
          })), MM
        }();
      return xa(jM, SM)
    }

    function Vn(MM, rM) {
      const iM = In.concat(rM || []),
        OM = {};
      return Aa(iM, (function(rM) {
        const iM = vn(MM, rM);
        OM[rM] = iM || null
      })), OM
    }

    function cn(MM) {
      const rM = function(MM) {
          return MM ? 0 === MM.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === MM.search("https?://(.*)bing.com") ? "bing" : 0 === MM.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === MM.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(MM),
        iM = "yahoo" != rM ? "q" : "p",
        OM = {};
      if (!gi(rM)) {
        OM.$search_engine = rM;
        const MM = cr ? vn(cr.referrer, iM) : "";
        MM.length && (OM.ph_keyword = MM)
      }
      return OM
    }

    function MQ() {
      return navigator.language || navigator.userLanguage
    }

    function rQ() {
      const MM = MQ();
      return "string" == typeof MM ? MM.split("-")[0] : void 0
    }
    const iQ = "$direct";

    function OQ() {
      return (null == cr ? void 0 : cr.referrer) || iQ
    }

    function SQ(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const OM = MM ? [...Xn, ...rM || []] : [],
        SM = iM ? mS(null == Mi ? void 0 : Mi.href) : null == Mi ? void 0 : Mi.href,
        jM = null == SM ? void 0 : SM.substring(0, 1e3);
      return {
        r: OQ().substring(0, 1e3),
        u: jM ? Fn(jM, OM, Kn) : void 0
      }
    }

    function jQ(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var iM;
      const {
        r: OM,
        u: SM
      } = MM, jM = rM ? mS(SM) : SM, aM = {
        $referrer: OM,
        $referring_domain: null == OM ? void 0 : OM == iQ ? iQ : null === (iM = xn(OM)) || void 0 === iM ? void 0 : iM.host
      };
      if (jM) {
        aM.$current_url = jM;
        const MM = xn(jM);
        aM.$host = null == MM ? void 0 : MM.host, aM.$pathname = null == MM ? void 0 : MM.pathname;
        const rM = Vn(jM);
        xa(aM, rM)
      }
      if (OM) {
        const MM = cn(OM);
        xa(aM, MM)
      }
      return aM
    }

    function aQ() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (OM) {
        return
      }
    }
    const PQ = {
        flags: zM,
        surveys: Pr
      },
      nQ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      QQ = MM => `${MM}_cookie_identity_change_pending`,
      zQ = MM => {
        let rM = "",
          iM = 0;
        for (const OM of MM) {
          const MM = encodeURIComponent(JSON.stringify(OM).slice(1, -1)).length;
          if (iM + MM > 1e3) break;
          rM += OM, iM += MM
        }
        return rM
      },
      LQ = "main",
      mQ = [HM, PM, nM, lM, LM, zM, mM, JM],
      HQ = MM => -1 !== mQ.indexOf(MM),
      hQ = [RM, WM],
      JQ = MM => -1 !== hQ.indexOf(MM),
      dQ = (MM, rM) => {
        try {
          return JSON.stringify(MM) === JSON.stringify(rM)
        } catch (jM) {
          return MM === rM
        }
      },
      yQ = MM => {
        if (!MM) return {};
        const rM = JSON.parse(MM);
        return Ci(rM) ? rM : {}
      },
      lQ = (MM, rM) => {
        Aa(MM, ((iM, OM) => {
          const SM = kn(OM);
          SM && "event" !== SM.exposure || {}.hasOwnProperty.call(rM, OM) || delete MM[OM]
        }))
      };
    var EQ = class {
      constructor(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !MM.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = MM, this._ownsSplitStorage = iM, this.props = {}, this._campaign_params_url = void 0, this._name = (MM => {
            let rM = "";
            return MM.token && (rM = MM.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), MM.persistence_name ? "ph_" + MM.persistence_name : "ph_" + rM + "_posthog"
          })(MM), this._disabled = MM.disable_persistence || !!rM, this.yJ = this._buildStorage(MM), this._splitStorage = this._resolveSplitStorage(MM), this.load(OM), this._markLoadedCrossTabFeatureFlagChangesPending(), MM.debug && fa.info("Persistence loaded", MM.persistence, US({}, this.props)), this.update_config(MM, MM, rM), this.save(), qr) {
          const MM = () => this.flush();
          qa(qr, "beforeunload", MM, {
            capture: !1
          }), qa(qr, "pagehide", MM, {
            capture: !1
          }), this._onStorage = MM => {
            if (this._splitStorageEligible && (!MM.storageArea || MM.storageArea === (null == qr ? void 0 : qr.localStorage)) && MM.key)
              if (MM.key !== this._name) {
                if (this._splitStorage) {
                  const rM = Wn.find((rM => MM.key === this._groupEntryName(rM)));
                  rM && this._syncCrossTabFeatureFlagProperties(MM.key, rM)
                }
              } else this._syncCrossTabFeatureFlagProperties(MM.key, LQ)
          }, qa(qr, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(MM) {
        Object.entries(MM).forEach((MM => {
          let [rM, iM] = MM;
          const OM = this._pendingCrossTabFeatureFlagChanges.get(rM);
          if (!HQ(rM) || !0 === OM) return;
          if (!0 === iM) return void this._setCrossTabFeatureFlagChangesPending(rM, !0);
          const SM = new Set(OM || []);
          iM.forEach((MM => SM.add(MM))), SM.size && this._setCrossTabFeatureFlagChangesPending(rM, SM)
        }))
      }
      onCrossTabFeatureFlagChange(MM) {
        return this._crossTabFeatureFlagHandlers.add(MM), () => this._crossTabFeatureFlagHandlers.delete(MM)
      }
      destroy() {
        this._onStorage && qr && (qr.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(MM, rM) {
        let iM, OM, SM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (OM = LP._get(MM), gi(OM)) {
            const MM = this._slotWriteState(rM);
            return MM.storageValue = null, rM !== LQ && (MM.persisted = !1), !1
          }
          iM = yQ(OM)
        } catch (MM) {
          return !1
        }
        const jM = rM === LQ ? iM : LP._parse(this._name);
        if (jM && this._hasCrossTabFeatureFlagIdentityMismatch(jM)) return !1;
        const aM = this._mergeCrossTabFeatureFlagProperties(iM, rM, SM);
        return rM === LQ && this._splitStorage && !dQ(this._partitionProps().main, iM) || this._rememberCrossTabStorageFingerprint(iM, rM, !0, OM), aM
      }
      _hasCrossTabFeatureFlagIdentityMismatch(MM) {
        const rM = this.props[eM],
          iM = MM[eM];
        return !bi(rM) && !bi(iM) && rM !== iM
      }
      _rememberCrossTabStorageFingerprint(MM, rM, iM, OM) {
        const SM = this._slotWriteState(rM);
        SM.storageValue = OM, rM !== LQ && (SM.persisted = iM);
        try {
          SM.fingerprint = this._entryFingerprint(MM, rM)
        } catch (MM) {
          SM.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(MM, rM, iM) {
        let OM = !1;
        return mQ.forEach((iM => {
          var SM;
          const jM = null === (SM = kn(iM)) || void 0 === SM ? void 0 : SM.storageGroup;
          if (rM === LQ && this._splitStorage && jM || rM !== LQ && jM !== rM) return;
          const aM = iM in MM,
            PM = this._mergePendingCrossTabFeatureFlagChanges(iM, aM ? MM[iM] : void 0),
            nM = this._pendingCrossTabFeatureFlagChanges.has(iM) ? iM in this.props : aM;
          nM === iM in this.props && dQ(PM, this.props[iM]) || (nM ? this._setProp(iM, PM, !1) : this._deleteProp(iM, !1), OM = !0)
        })), OM && iM && this._crossTabFeatureFlagHandlers.forEach((MM => MM())), OM
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const MM = LP._get(this._name),
            rM = this._slotWriteState(LQ);
          let iM, OM = !1,
            SM = !1;
          if (MM !== rM.storageValue)
            if (gi(MM)) rM.storageValue = null;
            else {
              if (iM = yQ(MM), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(iM), this._crossTabFeatureFlagIdentityMismatch) return !1;
              SM = this._mergeCrossTabFeatureFlagProperties(iM, LQ, !1), !this._splitStorage || dQ(this._partitionProps().main, iM) ? this._rememberCrossTabStorageFingerprint(iM, LQ, !0, MM) : rM.storageValue = MM, OM = !0
            } return this._splitStorage && Wn.forEach((MM => {
            const rM = LP._get(this._groupEntryName(MM)),
              jM = this._slotWriteState(MM),
              aM = iM || {},
              PM = OM && mQ.some((rM => {
                var iM;
                return (null === (iM = kn(rM)) || void 0 === iM ? void 0 : iM.storageGroup) === MM && rM in aM
              }));
            if (rM === jM.storageValue && !PM) return;
            if (gi(rM)) return jM.storageValue = null, jM.persisted = !1, void(PM && (SM = this._mergeCrossTabFeatureFlagProperties(aM, MM, !1) || SM));
            const nM = yQ(rM);
            SM = this._mergeCrossTabFeatureFlagProperties(nM, MM, !1) || SM, this._rememberCrossTabStorageFingerprint(nM, MM, !0, rM)
          })), SM
        } catch (OM) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(MM, rM) {
        this._pendingCrossTabFeatureFlagChanges.set(MM, rM);
        const iM = kn(MM);
        (null == iM ? void 0 : iM.volatile) || (this._slotWriteState((this._splitStorage ? null == iM ? void 0 : iM.storageGroup : void 0) || LQ).fingerprint = void 0, this._markGroupDirty(MM))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        mQ.forEach((MM => this._pendingCrossTabFeatureFlagChanges.set(MM, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const MM = LP._get(this._name),
            rM = yQ(MM);
          this._slotWriteState(LQ).storageValue = MM, mQ.forEach((MM => {
            var iM;
            const OM = this._splitStorage ? null === (iM = kn(MM)) || void 0 === iM ? void 0 : iM.storageGroup : void 0,
              SM = OM ? LP._get(this._groupEntryName(OM)) : null;
            if (OM) {
              const MM = this._slotWriteState(OM);
              MM.storageValue = SM, MM.persisted = !gi(SM)
            }
            const jM = OM && !gi(SM) ? yQ(SM) : rM;
            MM in this.props ? this._markPendingCrossTabFeatureFlagChanges(MM, jM[MM], this.props[MM]) : MM in jM && this._setCrossTabFeatureFlagChangesPending(MM, !0)
          }))
        } catch (OM) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(MM, rM) {
        const iM = this._pendingCrossTabFeatureFlagChanges.get(MM);
        if (!iM) return rM;
        if (!0 === iM) return this.props[MM];
        if ("$active_feature_flags" === MM) {
          const OM = new Set(Ui(rM) ? rM : []),
            SM = new Set(Ui(this.props[MM]) ? this.props[MM] : []);
          return iM.forEach((MM => SM.has(MM) ? OM.add(MM) : OM.delete(MM))), Array.from(OM)
        }
        const OM = Ci(rM) ? US({}, rM) : {},
          SM = Ci(this.props[MM]) ? this.props[MM] : {};
        return iM.forEach((MM => {
          MM in SM ? OM[MM] = SM[MM] : delete OM[MM]
        })), OM
      }
      _markPendingCrossTabFeatureFlagChanges(MM, rM, iM) {
        if (!HQ(MM)) return;
        const OM = this._pendingCrossTabFeatureFlagChanges.get(MM);
        if (!0 === OM) return;
        let SM = rM;
        if (this._splitStorageEligible) try {
          var jM;
          const rM = this._splitStorage ? null === (jM = kn(MM)) || void 0 === jM ? void 0 : jM.storageGroup : void 0,
            iM = rM ? this._groupEntryName(rM) : this._name;
          SM = yQ(LP._get(iM))[MM]
        } catch (MM) {}
        const aM = new Set(OM || []);
        if ("$active_feature_flags" === MM) {
          if (!bi(rM) && !Ui(rM) || !bi(SM) && !Ui(SM) || !Ui(iM)) return void this._setCrossTabFeatureFlagChangesPending(MM, !0);
          const OM = new Set(rM || []),
            jM = new Set(SM || []),
            PM = new Set(iM);
          new Set([...OM, ...PM]).forEach((MM => {
            OM.has(MM) !== PM.has(MM) && aM.add(MM)
          })), aM.forEach((MM => {
            jM.has(MM) === PM.has(MM) && aM.delete(MM)
          }))
        } else {
          if (!Ci(iM)) return void(dQ(SM, iM) ? this._pendingCrossTabFeatureFlagChanges.delete(MM) : this._setCrossTabFeatureFlagChangesPending(MM, !0));
          {
            if (!bi(rM) && !Ci(rM) || bi(rM) && ei(iM) && bi(SM)) return void this._setCrossTabFeatureFlagChangesPending(MM, !0);
            const OM = Ci(rM) ? rM : {},
              jM = Ci(SM) ? SM : {};
            new Set([...Object.keys(OM), ...Object.keys(iM)]).forEach((MM => {
              MM in OM == MM in iM && dQ(OM[MM], iM[MM]) || aM.add(MM)
            })), aM.forEach((MM => {
              MM in jM == MM in iM && dQ(jM[MM], iM[MM]) && aM.delete(MM)
            }))
          }
        }
        aM.size ? this._setCrossTabFeatureFlagChangesPending(MM, aM) : this._pendingCrossTabFeatureFlagChanges.delete(MM)
      }
      _saveDebounceMs() {
        var MM;
        const rM = null === (MM = this._config) || void 0 === MM ? void 0 : MM.persistence_save_debounce_ms;
        return Ri(rM) && rM > 0 ? rM : 0
      }
      _rememberCurrentCookieProperties(MM) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (MM) try {
            const rM = yP(MM, this._config.cookie_persisted_properties || []),
              iM = EP(rM, this._config.cookie_persisted_properties || []),
              OM = JSON.stringify(rM) + "|" + JSON.stringify(iM),
              SM = QP._get(this._name) || void 0;
            SM && GP(this._name, SM) === OM && (this._lastSeenCookiePropertiesFingerprint = OM, this._lastSeenMainCookieValue = SM)
          } catch (MM) {} else try {
            const MM = QP._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = MM ? GP(this._name, MM) : void 0, this._lastSeenMainCookieValue = MM
          } catch (MM) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(MM) {
        let rM, iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !iM || this._cookieSyncSuppressed || !MM.cookieWinsOnConflict || "localstorage+cookie" !== MM.persistence.toLowerCase()) return !1;
        try {
          rM = QP._get(this._name) || void 0
        } catch (MM) {}
        if (!rM || rM === this._lastSeenMainCookieValue) return !1;
        const OM = GP(this._name, rM);
        let SM;
        try {
          SM = dP(JSON.parse(rM))
        } catch (MM) {
          return !1
        }
        if ((QP._get(this._name) || void 0) !== rM) return !1;
        this._lastSeenCookiePropertiesFingerprint = OM, this._lastSeenMainCookieValue = rM;
        const jM = UP(this._name, rM),
          aM = [...HP, ...jM.properties],
          mM = {};
        if (Object.keys(SM).forEach((MM => {
            const rM = SM[MM];
            (bi(rM) || gi(rM) || "" === rM || "$user_state" === MM && "anonymous" !== rM && "identified" !== rM) && (mM[MM] = !0, delete SM[MM])
          })), ei(SM)) return !1;
        const yM = "distinct_id" in SM || "anonymous" === SM.$user_state || "identified" === SM.$user_state,
          EM = this.props,
          UM = EM[eM],
          GM = EM[lr],
          CM = xa({}, EM);
        [...HP, ...MM.cookie_persisted_properties || []].forEach((MM => {
          if (-1 !== aM.indexOf(MM) && !(MM in SM) && !mM[MM] && (yM || "distinct_id" !== MM && "$user_state" !== MM)) {
            const rM = CM[MM];
            (jM.isValid || -1 === HP.indexOf(MM) || !1 !== rM && 0 !== rM) && delete CM[MM]
          }
        })), this.props = xa(CM, SM), mQ.forEach((MM => {
          const rM = MM in this.props;
          MM in EM === rM && dQ(EM[MM], this.props[MM]) || (rM ? this._markPendingCrossTabFeatureFlagChanges(MM, EM[MM], this.props[MM]) : this._setCrossTabFeatureFlagChangesPending(MM, !0))
        })), !yM || "$user_state" in SM || "$user_state" in this.props || this._setProp(lr, Ar);
        const bM = this.props[eM],
          wM = this.props[lr];
        return !yM || bM === UM && wM === GM || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, wP._set(QQ(this._name), !0), this._deleteProp(JM), this._deleteProp(PM), this._deleteProp(HM), this._deleteProp(nM), this._deleteProp(lM), this._deleteProp(LM), this._deleteProp(zM), this._deleteProp(QM), this._deleteProp(dM), "anonymous" !== wM || "identified" !== GM && "anonymous" !== SM.$user_state && (bi(UM) || bM === UM) || (lQ(this.props, SM), this._deleteProp(hM)), "identified" === wM ? this.props.$user_id = bM : delete this.props.$user_id, this._deleteProp(tM)), !0
      }
      consumeCookieIdentityChange() {
        const MM = QQ(this._name),
          rM = this._cookieIdentityChangePending || !!wP._get(MM);
        return this._cookieIdentityChangePending = !1, rM && wP._remove(MM), rM
      }
      _beginCookieSyncSuppression() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !MM || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (bi(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[LQ], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          MM ? this._publishSuppressedCookieSnapshot() : bi(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(MM) {
        -1 === nQ.indexOf(MM.persistence.toLowerCase()) && (fa.critical("Unknown persistence type " + MM.persistence + "; falling back to localStorage+cookie"), MM.persistence = "localStorage+cookie");
        const rM = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const OM = [...HP, ...MM];
          return US(US({}, LP), {}, {
            _parse(MM) {
              try {
                let jM, aM = {};
                try {
                  jM = QP._get(MM) || void 0, aM = jM ? dP(JSON.parse(jM)) : {}
                } catch (MM) {}
                const PM = JSON.parse(LP._get(MM) || "{}");
                let nM;
                if (rM) {
                  const rM = UP(MM, jM),
                    iM = [...HP, ...rM.properties],
                    QM = {};
                  Object.keys(aM).forEach((MM => {
                    const rM = aM[MM];
                    gi(rM) || "" === rM || "$user_state" === MM && "anonymous" !== rM && "identified" !== rM || (QM[MM] = rM)
                  }));
                  const zM = "distinct_id" in QM || "anonymous" === QM.$user_state || "identified" === QM.$user_state;
                  if (Object.keys(QM).length > 0) {
                    var SM;
                    const MM = PM[eM],
                      jM = null !== (SM = PM.$user_state) && void 0 !== SM ? SM : Ar;
                    OM.forEach((MM => {
                      if (-1 !== iM.indexOf(MM) && !(MM in aM) && (zM || "distinct_id" !== MM && "$user_state" !== MM)) {
                        const iM = PM[MM];
                        (rM.isValid || -1 === HP.indexOf(MM) || !1 !== iM && 0 !== iM) && delete PM[MM]
                      }
                    })), !zM || "$user_state" in aM || "$user_state" in PM || (PM[lr] = Ar), !zM || ("distinct_id" in QM ? QM[eM] : PM[eM]) === MM && ("$user_state" in QM ? QM[lr] : PM[lr]) === jM || (mP.forEach((MM => delete PM[MM])), "identified" === QM.$user_state && "distinct_id" in QM ? PM.$user_id = QM[eM] : delete PM.$user_id, "identified" !== QM.$user_state && (delete PM[jr], delete PM[hM]), delete PM.__alias)
                  }
                  nM = xa(PM, QM)
                } else nM = xa(aM, PM);
                return iM() || LP._set(MM, nM), nM
              } catch (MM) {}
              return null
            },
            _set(iM, OM, SM, jM, aM, PM) {
              const nM = LP._set(iM, OM, void 0, void 0, PM);
              try {
                const QM = yP(OM, MM);
                if (Object.keys(QM).length) {
                  if (rM) {
                    const rM = hP(iM),
                      zM = EP(QM, MM);
                    if (QP._set(rM, zM, SM, jM, aM, PM), QP._get(rM) !== JSON.stringify(zM)) {
                      QP._remove(rM, jM);
                      const MM = yP(OM);
                      return QP._set(iM, MM, SM, jM, aM, PM), nM
                    }
                  }
                  QP._set(iM, QM, SM, jM, aM, PM)
                }
              } catch (MM) {
                LP._error(MM)
              }
              return nM
            },
            _remove(MM, rM) {
              try {
                null == qr || qr.localStorage.removeItem(MM), QP._remove(MM, rM), QP._remove(hP(MM), rM)
              } catch (MM) {
                LP._error(MM)
              }
            }
          })
        }(MM.cookie_persisted_properties || [], MM.cookieWinsOnConflict, (() => !!this._disabled));
        let iM, OM = !1,
          SM = !1;
        const jM = MM.persistence.toLowerCase();
        return "localstorage" === jM && LP._is_supported() ? (iM = LP, SM = !0) : "localstorage+cookie" === jM && rM._is_supported() ? (iM = rM, SM = !0, OM = !0) : "sessionstorage" === jM && wP._is_supported() ? iM = wP : "memory" === jM ? iM = eP : "cookie" === jM && QP._is_supported() ? (iM = QP, OM = !0) : rM._is_supported() ? (iM = rM, SM = !0, OM = !0) : QP._is_supported() ? (iM = QP, OM = !0) : iM = eP, this._splitStorageEligible = SM, this._storesIdentityInCookie = OM, iM
      }
      _groupEntryName(MM) {
        return `${this._name}__${MM}`
      }
      _resolveSplitStorage(MM) {
        return this._splitStorageEligible && !!MM.split_storage
      }
      properties() {
        const MM = {};
        return Aa(this.props, ((rM, iM) => {
          const OM = kn(iM);
          if (!OM || "event" === OM.exposure) {
            var SM;
            if (null == OM || null === (SM = OM.shouldSkipFromEventProperties) || void 0 === SM ? void 0 : SM.call(OM, rM)) return;
            MM[iM] = rM
          }
        })), MM
      }
      load() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !MM) return;
        const rM = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          iM = rM ? LP._parse(this._name) : null;
        let OM = {};
        if (rM) try {
          OM = dP(QP._parse(this._name)), Aa(OM, ((MM, rM) => {
            (bi(MM) || gi(MM) || "" === MM) && delete OM[rM]
          }))
        } catch (MM) {}
        const SM = this.yJ._parse(this._name);
        if (SM && (this.props = xa({}, SM)), this._splitStorage && this._loadGroupEntries(), rM && SM) {
          var jM, aM;
          const MM = null == iM ? void 0 : iM[eM],
            rM = null !== (jM = null == iM ? void 0 : iM.$user_state) && void 0 !== jM ? jM : Ar,
            PM = SM[eM],
            nM = null !== (aM = SM.$user_state) && void 0 !== aM ? aM : Ar;
          if (PM !== MM || nM !== rM) {
            this._cookieIdentityChangePending = !0, this._disabled || wP._set(QQ(this._name), !0);
            const iM = xa({}, this.props);
            mP.forEach((MM => delete iM[MM])), "anonymous" !== nM || "identified" !== rM && "anonymous" !== OM.$user_state && (bi(MM) || PM === MM) || (lQ(iM, OM), delete iM[hM]), this.props = iM;
            const SM = new Set;
            mP.forEach((MM => {
              var rM;
              const iM = null === (rM = kn(MM)) || void 0 === rM ? void 0 : rM.storageGroup;
              iM && SM.add(iM)
            })), SM.forEach((MM => {
              if (this._disabled) return;
              const rM = {};
              Aa(this.props, ((iM, OM) => {
                var SM;
                (null === (SM = kn(OM)) || void 0 === SM ? void 0 : SM.storageGroup) === MM && (rM[OM] = iM)
              })), ei(rM) ? (LP._remove(this._groupEntryName(MM)), this._slotState[MM] = {}) : LP._set(this._groupEntryName(MM), rM) && (this._slotState[MM] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(rM, MM)
              })
            }))
          }
        }
        wP._get(QQ(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const MM of Wn) {
          const rM = LP._parse(this._groupEntryName(MM));
          if (rM && !ei(rM)) {
            const iM = this._slotWriteState(MM);
            iM.persisted = !0, this._mainCarriesGroupKey(MM) || (iM.fingerprint = this._entryFingerprint(rM, MM)), this._groupEntryIsStale(MM, rM) || xa(this.props, rM)
          }
        }
      }
      _mainCarriesGroupKey(MM) {
        return Object.keys(this.props).some((rM => {
          var iM;
          return (null === (iM = kn(rM)) || void 0 === iM ? void 0 : iM.storageGroup) === MM
        }))
      }
      _groupEntryIsStale(MM, rM) {
        const iM = PQ[MM];
        if (!iM) return !1;
        const OM = rM[iM],
          SM = this.props[iM];
        return Ri(OM) && Ri(SM) && SM > OM
      }
      refreshKey(MM) {
        var rM;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(MM)) return;
        const iM = this._splitStorage ? null === (rM = kn(MM)) || void 0 === rM ? void 0 : rM.storageGroup : void 0,
          OM = iM ? LP._parse(this._groupEntryName(iM)) : this.yJ._parse(this._name);
        if (OM && MM in OM) this._setProp(MM, OM[MM], !1);
        else {
          if (iM) {
            const rM = this.yJ._parse(this._name);
            if (rM && MM in rM) return void this._setProp(MM, rM[MM], !1)
          }
          this._deleteProp(MM, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const MM = this._saveDebounceMs();
        MM > 0 ? bi(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), MM)) : this._writeNow()
      }
      flush() {
        bi(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !MM) return;
        MM || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || hQ.forEach((MM => this.refreshKey(MM))));
        const rM = !MM && !this._storageMigrationInProgress;
        rM || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const iM = !!rM && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && fa.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(iM && this._crossTabFeatureFlagHandlers.forEach((MM => MM())));
        const OM = this._writeEntry(this.yJ, this._name, this.props, LQ);
        "written" === OM && this._rememberCurrentCookieProperties(this.props), "failed" !== OM && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), iM && this._crossTabFeatureFlagHandlers.forEach((MM => MM()))
      }
      _writeNowSplit() {
        const {
          main: MM,
          groups: rM
        } = this._partitionProps(), iM = this._writeEntry(this.yJ, this._name, MM, LQ);
        "written" === iM && this._rememberCurrentCookieProperties(MM), "failed" !== iM && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), mQ.forEach((MM => {
          var rM;
          (null === (rM = kn(MM)) || void 0 === rM ? void 0 : rM.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(MM)
        })));
        for (const SM of Wn) {
          var OM;
          const MM = rM[SM];
          if (ei(MM) && !(null === (OM = this._slotState[SM]) || void 0 === OM ? void 0 : OM.persisted)) {
            mQ.forEach((MM => {
              var rM;
              (null === (rM = kn(MM)) || void 0 === rM ? void 0 : rM.storageGroup) === SM && this._pendingCrossTabFeatureFlagChanges.delete(MM)
            }));
            continue
          }
          const iM = this._writeEntry(LP, this._groupEntryName(SM), MM, SM);
          "failed" !== iM && mQ.forEach((MM => {
            const rM = kn(MM);
            (null == rM ? void 0 : rM.storageGroup) !== SM || "written" !== iM && rM.volatile || this._pendingCrossTabFeatureFlagChanges.delete(MM)
          }))
        }
      }
      _partitionProps() {
        const MM = {},
          rM = {
            flags: {},
            surveys: {}
          };
        return Aa(this.props, ((iM, OM) => {
          var SM;
          const jM = null === (SM = kn(OM)) || void 0 === SM ? void 0 : SM.storageGroup;
          jM ? rM[jM][OM] = iM : MM[OM] = iM
        })), {
          main: MM,
          groups: rM
        }
      }
      _entryFingerprint(MM, rM) {
        if (rM === LQ) return JSON.stringify(MM) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const iM = {};
        return Aa(MM, ((MM, rM) => {
          var OM;
          iM[rM] = (null === (OM = kn(rM)) || void 0 === OM ? void 0 : OM.volatile) ? "__volatile__" : MM
        })), JSON.stringify(iM)
      }
      _writeEntry(MM, rM, iM, OM) {
        const SM = this._slotWriteState(OM);
        if (OM !== LQ && !SM.fh && !bi(SM.fingerprint)) return "skipped";
        let jM;
        try {
          if (jM = this._entryFingerprint(iM, OM), jM === SM.fingerprint) return SM.fh = !1, "skipped"
        } catch (MM) {
          jM = void 0
        }
        return MM._set(rM, iM, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (SM.fh = !1, OM !== LQ && (SM.persisted = !0), bi(jM) || (SM.fingerprint = jM), this._splitStorageEligible && (SM.storageValue = LP._get(rM)), "written") : (this._config.debug && fa.warn(`failed to persist storage entry "${rM}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: MM = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), bi(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.yJ._remove(this._name, !1), this.yJ._remove(this._name, !0), !MM && this._ownsSplitStorage)
          for (const rM of Wn) LP._remove(this._groupEntryName(rM));
        MM ? delete this._slotState[LQ] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(MM, rM, iM) {
        if (Ci(MM)) {
          this.syncCookieProperties(), bi(rM) && (rM = "None"), this._expire_days = bi(iM) ? this._default_expiry : iM;
          let OM = !1;
          if (Aa(MM, ((MM, iM) => {
              this.props.hasOwnProperty(iM) && this.props[iM] !== rM || (this._setProp(iM, MM), OM = !0)
            })), OM) return this.save(), !0
        }
        return !1
      }
      register(MM, rM) {
        if (Ci(MM)) {
          this.syncCookieProperties(), this._expire_days = bi(rM) ? this._default_expiry : rM;
          let iM = !1;
          if (Aa(MM, ((rM, OM) => {
              MM.hasOwnProperty(OM) && (this.props[OM] !== rM || Ci(rM) || Ui(rM)) && (this._setProp(OM, rM), iM = !0)
            })), iM) return this.save(), !0
        }
        return !1
      }
      unregister(MM) {
        this.syncCookieProperties();
        const rM = "string" == typeof MM ? [MM] : MM;
        let iM = !1;
        for (const OM of rM) OM in this.props && (this._deleteProp(OM), iM = !0);
        iM && this.save()
      }
      update_campaign_params() {
        const MM = null == cr ? void 0 : cr.URL;
        if (MM === this._campaign_params_url) return;
        const rM = Tn(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          iM = !ei(Ba(rM));
        return iM && this.register(rM), this._campaign_params_url = MM, iM ? rM : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const MM = null == cr ? void 0 : cr.referrer;
          return MM ? cn(MM) : {}
        }())
      }
      update_referrer_info() {
        var MM;
        this.register_once({
          $referrer: OQ(),
          $referring_domain: (null == cr ? void 0 : cr.referrer) && (null === (MM = xn(cr.referrer)) || void 0 === MM ? void 0 : MM.host) || iQ
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const MM = SQ(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [er]: this._storesIdentityInCookie ? {
            r: zQ(MM.r),
            u: MM.u ? zQ(MM.u) : void 0
          } : MM
        }, void 0)
      }
      get_initial_props() {
        const MM = {};
        Aa([Cr, Gr], (rM => {
          const iM = this.props[rM];
          iM && Aa(iM, (function(rM, iM) {
            MM["$initial_" + Ji(iM)] = rM
          }))
        }));
        const rM = this.props[er];
        if (rM) {
          const iM = function(MM) {
            const rM = jQ(MM, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              iM = {};
            return Aa(rM, (function(MM, rM) {
              iM[`$initial_${Ji(rM)}`] = MM
            })), iM
          }(rM, this._config.disable_capture_url_hashes);
          xa(MM, iM)
        }
        return MM
      }
      safe_merge(MM) {
        return Aa(this.props, (function(rM, iM) {
          iM in MM || (MM[iM] = rM)
        })), MM
      }
      update_config(MM, rM, iM) {
        const OM = MM.persistence !== rM.persistence,
          SM = !((MM, rM) => {
            if (MM.length !== rM.length) return !1;
            const iM = [...MM].sort(),
              OM = [...rM].sort();
            return iM.every(((MM, rM) => MM === OM[rM]))
          })(MM.cookie_persisted_properties || [], rM.cookie_persisted_properties || []),
          jM = OM || SM,
          aM = MM.cookieWinsOnConflict !== rM.cookieWinsOnConflict,
          PM = MM.disable_persistence || !!iM,
          nM = !!this._disabled && !PM;
        PM || this._syncCookieProperties(rM, nM), this._config = MM, !PM && (OM || SM || aM) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(US(US({}, MM), {}, {
          cookie_persisted_properties: rM.cookie_persisted_properties
        }), nM));
        const QM = jM || aM ? this._buildStorage(MM) : this.yJ;
        this._truncateExistingPersonInfoForCookie();
        const zM = this._resolveSplitStorage(MM),
          LM = jM || zM !== this._splitStorage,
          mM = !PM && (LM || MM.cross_subdomain_cookie !== this._cross_subdomain || MM.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(nM);
        this._storageMigrationInProgress = LM;
        try {
          if (this._default_expiry = this._expire_days = MM.cookie_expiration, this.set_disabled(PM), this.set_cross_subdomain(MM.cross_subdomain_cookie), this.set_secure(MM.secure_cookie), LM) {
            const MM = this.props;
            this.clear(), this.yJ = QM, this._splitStorage = zM, this.props = MM, this.save()
          } else aM && (this.yJ = QM, PM || (delete this._slotState[LQ], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, mM && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const MM = this.props[er];
        if (!this._storesIdentityInCookie || !Ci(MM) || "string" != typeof MM.r) return;
        const rM = zQ(MM.r),
          iM = "string" == typeof MM.u ? zQ(MM.u) : MM.u;
        rM === MM.r && iM === MM.u || this._setProp(er, US(US({}, MM), {}, {
          r: rM,
          u: iM
        }))
      }
      set_disabled(MM) {
        this._disabled = MM, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(MM) {
        MM !== this._cross_subdomain && (this._cross_subdomain = MM, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(MM) {
        MM !== this._secure && (this._secure = MM, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(MM, rM) {
        const iM = this.props.__timers || {};
        iM[MM] = rM, this._setProp(sM, iM), this.save()
      }
      remove_event_timer(MM) {
        const rM = this.props.__timers || {},
          iM = rM[MM];
        return bi(iM) || (delete rM[MM], this._setProp(sM, rM), this.save()), iM
      }
      get_property(MM) {
        return this.props[MM]
      }
      set_property(MM, rM) {
        this._setProp(MM, rM), this.save()
      }
      _setProp(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var OM;
        const SM = this.props[MM];
        this.props[MM] = rM, iM && ("distinct_id" !== MM && "$user_state" !== MM || SM === rM || (this._localIdentityChangePending = !0), JQ(MM) && !dQ(SM, rM) && this._metaIdentifierChangePending.add(MM), this._markPendingCrossTabFeatureFlagChanges(MM, SM, rM), (null === (OM = kn(MM)) || void 0 === OM ? void 0 : OM.volatile) || this._markGroupDirty(MM))
      }
      _deleteProp(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[MM], rM && (HQ(MM) && this._setCrossTabFeatureFlagChangesPending(MM, !0), JQ(MM) && this._metaIdentifierChangePending.add(MM), this._markGroupDirty(MM))
      }
      _markGroupDirty(MM) {
        var rM;
        const iM = null === (rM = kn(MM)) || void 0 === rM ? void 0 : rM.storageGroup;
        iM && (this._slotWriteState(iM).fh = !0)
      }
      _slotWriteState(MM) {
        return this._slotState[MM] || (this._slotState[MM] = {})
      }
    };
    const UQ = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      GQ = "events",
      CQ = "cancelEvents",
      eQ = "popover",
      bQ = "api",
      wQ = "widget",
      tQ = "survey shown",
      gQ = "survey dismissed",
      uQ = "survey sent",
      RQ = "$survey_id",
      pQ = "$survey_iteration",
      WQ = "$survey_last_seen_date",
      sQ = "popover",
      DQ = "inline";

    function kQ(MM) {
      let rM = !0;
      return {
        dispose() {
          if (rM) {
            rM = !1;
            const iM = MM();
            iM && Gi(iM.then) && iM.then(void 0, (() => {}))
          }
        }
      }
    }
    const ZQ = "product tour shown",
      oQ = "$product_tour_last_seen_date",
      fQ = "$product_tour_type",
      YQ = Ya("[RateLimiter]");
    var NQ = class {
      constructor(MM) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = MM => {
          const rM = MM.text;
          if (rM && rM.length) try {
            (JSON.parse(rM).quota_limited || []).forEach((MM => {
              YQ.info(`${MM||"events"} is quota limited.`), this.serverLimits[MM] = (new Date).getTime() + 6e4
            }))
          } catch (MM) {
            return void YQ.warn(`could not rate limit - continuing. Error: "${null==MM?void 0:MM.message}"`, {
              text: rM
            })
          }
        }, this.instance = MM, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var MM;
        return (null === (MM = this.instance.config.rate_limiting) || void 0 === MM ? void 0 : MM.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var MM;
        return Math.max((null === (MM = this.instance.config.rate_limiting) || void 0 === MM ? void 0 : MM.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var rM, iM, OM;
        const {
          captureEventsBurstLimit: SM,
          captureEventsPerSecond: jM
        } = this, aM = (new Date).getTime(), PM = null !== (rM = null === (iM = this.instance.persistence) || void 0 === iM ? void 0 : iM.get_property("$capture_rate_limit")) && void 0 !== rM ? rM : {
          tokens: SM,
          last: aM
        };
        PM.tokens += (aM - PM.last) / 1e3 * jM, PM.last = aM, PM.tokens > SM && (PM.tokens = SM);
        const nM = 1 > PM.tokens;
        if (nM || MM || (PM.tokens = Math.max(0, PM.tokens - 1)), nM && !MM) {
          const MM = (Ri(PM.dropped) ? PM.dropped : 0) + 1;
          PM.dropped = MM, !this.lastEventRateLimited && this._captureWarning(MM) && (PM.dropped = 0)
        }
        return this.lastEventRateLimited = nM, null === (OM = this.instance.persistence) || void 0 === OM || OM.set_property("$capture_rate_limit", PM), {
          isRateLimited: nM,
          remainingTokens: PM.tokens
        }
      }
      _isPropertyAllowed(MM) {
        const rM = this.instance.config.property_denylist;
        return !Ui(rM) || !rM.includes(MM)
      }
      _triggeringPage() {
        var MM;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == Mi ? void 0 : Mi.pathname)) return `${null!==(MM=Mi.origin)&&void 0!==MM?MM:""}${Mi.pathname}`
      }
      _captureWarning(MM) {
        var rM, iM;
        const {
          captureEventsBurstLimit: OM,
          captureEventsPerSecond: SM
        } = this, jM = this._triggeringPage(), aM = this._isPropertyAllowed("$session_id") ? null === (rM = (iM = this.instance).get_session_id) || void 0 === rM ? void 0 : rM.call(iM) : void 0, PM = [`${MM} event(s) dropped since the last warning`, jM ? `triggered on ${jM}` : void 0, aM ? `session ${aM}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${PM}. Config is set to ${SM} events per second and ${OM} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(MM) {
        const rM = this.serverLimits[MM || "events"] || !1;
        return !1 !== rM && (new Date).getTime() < rM
      }
    };
    const AQ = Ya("[RemoteConfig]");
    var xQ = class {
      constructor(MM) {
        this._instance = MM
      }
      get remoteConfig() {
        var MM;
        return null === (MM = Pi._POSTHOG_REMOTE_CONFIG) || void 0 === MM || null === (MM = MM[this._instance.config.token]) || void 0 === MM ? void 0 : MM.config
      }
      _loadRemoteConfigJs(MM) {
        var rM, iM, OM;
        (null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.loadExternalDependency) ? null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this._instance, "remote-config", (() => MM(this.remoteConfig))): MM()
      }
      _loadRemoteConfigJSON(MM) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: MM
        })
      }
      load() {
        try {
          if (this.remoteConfig) return AQ.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void AQ.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((MM => {
            if (!MM) return AQ.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((MM => {
              this._onRemoteConfig(MM.json, MM)
            }));
            this._onRemoteConfig(MM)
          }))
        } catch (OM) {
          AQ.error("Error loading remote config", OM), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(MM, rM) {
        !MM && rM && (0 === rM.statusCode ? rM.error || AQ.warn("Failed to fetch remote config from PostHog.") : AQ.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(MM ? {
            ok: !0,
            config: MM
          } : {
            ok: !1
          })
        } catch (MM) {
          AQ.error("Error applying remote config", MM)
        }
        if (!1 !== (null == MM ? void 0 : MM.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var iM;
          null === (iM = this._instance.featureFlags) || void 0 === iM || iM.ensureFlagsLoaded()
        } catch (MM) {
          AQ.error("Error loading feature flags", MM)
        }
      }
    };
    var vQ = Uint8Array,
      FQ = Uint16Array,
      BQ = Uint32Array,
      XQ = new vQ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      IQ = new vQ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      KQ = new vQ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      qQ = function(MM, rM) {
        for (var iM = new FQ(31), OM = 0; 31 > OM; ++OM) iM[OM] = rM += 1 << MM[OM - 1];
        var SM = new BQ(iM[30]);
        for (OM = 1; 30 > OM; ++OM)
          for (var jM = iM[OM]; iM[OM + 1] > jM; ++jM) SM[jM] = jM - iM[OM] << 5 | OM;
        return [iM, SM]
      },
      TQ = qQ(XQ, 2),
      VQ = TQ[1];
    TQ[0][28] = 258, VQ[258] = 28;
    for (var cQ = qQ(IQ, 0)[1], Mz = new FQ(32768), rz = 0; 32768 > rz; ++rz) {
      var iz = (43690 & rz) >>> 1 | (21845 & rz) << 1;
      Mz[rz] = ((65280 & (iz = (61680 & (iz = (52428 & iz) >>> 2 | (13107 & iz) << 2)) >>> 4 | (3855 & iz) << 4)) >>> 8 | (255 & iz) << 8) >>> 1
    }
    var Oz = function(MM, rM, iM) {
        for (var OM = MM.length, SM = 0, jM = new FQ(rM); OM > SM; ++SM) ++jM[MM[SM] - 1];
        var aM, PM = new FQ(rM);
        for (SM = 0; rM > SM; ++SM) PM[SM] = PM[SM - 1] + jM[SM - 1] << 1;
        if (iM) {
          aM = new FQ(1 << rM);
          var nM = 15 - rM;
          for (SM = 0; OM > SM; ++SM)
            if (MM[SM])
              for (var QM = SM << 4 | MM[SM], zM = rM - MM[SM], LM = PM[MM[SM] - 1]++ << zM, mM = LM | (1 << zM) - 1; mM >= LM; ++LM) aM[Mz[LM] >>> nM] = QM
        } else
          for (aM = new FQ(OM), SM = 0; OM > SM; ++SM) aM[SM] = Mz[PM[MM[SM] - 1]++] >>> 15 - MM[SM];
        return aM
      },
      Sz = new vQ(288);
    for (rz = 0; 144 > rz; ++rz) Sz[rz] = 8;
    for (rz = 144; 256 > rz; ++rz) Sz[rz] = 9;
    for (rz = 256; 280 > rz; ++rz) Sz[rz] = 7;
    for (rz = 280; 288 > rz; ++rz) Sz[rz] = 8;
    var jz = new vQ(32);
    for (rz = 0; 32 > rz; ++rz) jz[rz] = 5;
    var az = Oz(Sz, 9, 0),
      Pz = Oz(jz, 5, 0),
      nz = function(MM) {
        return (MM / 8 | 0) + (7 & MM && 1)
      },
      Qz = function(MM, rM, iM) {
        (null == rM || 0 > rM) && (rM = 0), (null == iM || iM > MM.length) && (iM = MM.length);
        var OM = new(MM instanceof FQ ? FQ : MM instanceof BQ ? BQ : vQ)(iM - rM);
        return OM.set(MM.subarray(rM, iM)), OM
      },
      zz = function(MM, rM, iM) {
        var OM = rM / 8 | 0;
        MM[OM] |= iM <<= 7 & rM, MM[OM + 1] |= iM >>> 8
      },
      Lz = function(MM, rM, iM) {
        var OM = rM / 8 | 0;
        MM[OM] |= iM <<= 7 & rM, MM[OM + 1] |= iM >>> 8, MM[OM + 2] |= iM >>> 16
      },
      mz = function(MM, rM) {
        for (var iM = [], OM = 0; MM.length > OM; ++OM) MM[OM] && iM.push({
          s: OM,
          f: MM[OM]
        });
        var SM = iM.length,
          jM = iM.slice();
        if (!SM) return [new vQ(0), 0];
        if (1 == SM) {
          var aM = new vQ(iM[0].s + 1);
          return aM[iM[0].s] = 1, [aM, 1]
        }
        iM.sort((function(MM, rM) {
          return MM.f - rM.f
        })), iM.push({
          s: -1,
          f: 25001
        });
        var PM = iM[0],
          nM = iM[1],
          QM = 0,
          zM = 1,
          LM = 2;
        for (iM[0] = {
            s: -1,
            f: PM.f + nM.f,
            l: PM,
            r: nM
          }; zM != SM - 1;) PM = iM[iM[LM].f > iM[QM].f ? QM++ : LM++], nM = iM[QM != zM && iM[LM].f > iM[QM].f ? QM++ : LM++], iM[zM++] = {
          s: -1,
          f: PM.f + nM.f,
          l: PM,
          r: nM
        };
        var mM = jM[0].s;
        for (OM = 1; SM > OM; ++OM) jM[OM].s > mM && (mM = jM[OM].s);
        var HM = new FQ(mM + 1),
          hM = Hz(iM[zM - 1], HM, 0);
        if (hM > rM) {
          OM = 0;
          var JM = 0,
            dM = hM - rM,
            yM = 1 << dM;
          for (jM.sort((function(MM, rM) {
              return HM[rM.s] - HM[MM.s] || MM.f - rM.f
            })); SM > OM; ++OM) {
            var lM = jM[OM].s;
            if (rM >= HM[lM]) break;
            JM += yM - (1 << hM - HM[lM]), HM[lM] = rM
          }
          for (JM >>>= dM; JM > 0;) {
            var EM = jM[OM].s;
            rM > HM[EM] ? JM -= 1 << rM - HM[EM]++ - 1 : ++OM
          }
          for (; OM >= 0 && JM; --OM) {
            var UM = jM[OM].s;
            HM[UM] == rM && (--HM[UM], ++JM)
          }
          hM = rM
        }
        return [new vQ(HM), hM]
      },
      Hz = function(MM, rM, iM) {
        return -1 == MM.s ? Math.max(Hz(MM.l, rM, iM + 1), Hz(MM.r, rM, iM + 1)) : rM[MM.s] = iM
      },
      hz = function(MM) {
        for (var rM = MM.length; rM && !MM[--rM];);
        for (var iM = new FQ(++rM), OM = 0, SM = MM[0], jM = 1, aM = function(MM) {
            iM[OM++] = MM
          }, PM = 1; rM >= PM; ++PM)
          if (MM[PM] == SM && PM != rM) ++jM;
          else {
            if (!SM && jM > 2) {
              for (; jM > 138; jM -= 138) aM(32754);
              jM > 2 && (aM(jM > 10 ? jM - 11 << 5 | 28690 : jM - 3 << 5 | 12305), jM = 0)
            } else if (jM > 3) {
              for (aM(SM), --jM; jM > 6; jM -= 6) aM(8304);
              jM > 2 && (aM(jM - 3 << 5 | 8208), jM = 0)
            }
            for (; jM--;) aM(SM);
            jM = 1, SM = MM[PM]
          } return [iM.subarray(0, OM), rM]
      },
      Jz = function(MM, rM) {
        for (var iM = 0, OM = 0; rM.length > OM; ++OM) iM += MM[OM] * rM[OM];
        return iM
      },
      dz = function(MM, rM, iM) {
        var OM = iM.length,
          SM = nz(rM + 2);
        MM[SM] = 255 & OM, MM[SM + 1] = OM >>> 8, MM[SM + 2] = 255 ^ MM[SM], MM[SM + 3] = 255 ^ MM[SM + 1];
        for (var jM = 0; OM > jM; ++jM) MM[SM + jM + 4] = iM[jM];
        return 8 * (SM + 4 + OM)
      },
      yz = function(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        zz(rM, zM++, iM), ++SM[256];
        for (var LM = mz(SM, 15), mM = LM[0], HM = LM[1], hM = mz(jM, 15), JM = hM[0], dM = hM[1], yM = hz(mM), lM = yM[0], EM = yM[1], UM = hz(JM), GM = UM[0], CM = UM[1], eM = new FQ(19), bM = 0; lM.length > bM; ++bM) eM[31 & lM[bM]]++;
        for (bM = 0; GM.length > bM; ++bM) eM[31 & GM[bM]]++;
        for (var wM = mz(eM, 7), tM = wM[0], gM = wM[1], uM = 19; uM > 4 && !tM[KQ[uM - 1]]; --uM);
        var RM, pM, WM, sM, DM = QM + 5 << 3,
          kM = Jz(SM, Sz) + Jz(jM, jz) + aM,
          ZM = Jz(SM, mM) + Jz(jM, JM) + aM + 14 + 3 * uM + Jz(eM, tM) + (2 * eM[16] + 3 * eM[17] + 7 * eM[18]);
        if (kM >= DM && ZM >= DM) return dz(rM, zM, MM.subarray(nM, nM + QM));
        if (zz(rM, zM, 1 + (kM > ZM)), zM += 2, kM > ZM) {
          RM = Oz(mM, HM, 0), pM = mM, WM = Oz(JM, dM, 0), sM = JM;
          var oM = Oz(tM, gM, 0);
          for (zz(rM, zM, EM - 257), zz(rM, zM + 5, CM - 1), zz(rM, zM + 10, uM - 4), zM += 14, bM = 0; uM > bM; ++bM) zz(rM, zM + 3 * bM, tM[KQ[bM]]);
          zM += 3 * uM;
          for (var fM = [lM, GM], YM = 0; 2 > YM; ++YM) {
            var NM = fM[YM];
            for (bM = 0; NM.length > bM; ++bM) zz(rM, zM, oM[AM = 31 & NM[bM]]), zM += tM[AM], AM > 15 && (zz(rM, zM, NM[bM] >>> 5 & 127), zM += NM[bM] >>> 12)
          }
        } else RM = az, pM = Sz, WM = Pz, sM = jz;
        for (bM = 0; PM > bM; ++bM)
          if (OM[bM] > 255) {
            var AM;
            Lz(rM, zM, RM[257 + (AM = OM[bM] >>> 18 & 31)]), zM += pM[AM + 257], AM > 7 && (zz(rM, zM, OM[bM] >>> 23 & 31), zM += XQ[AM]);
            var xM = 31 & OM[bM];
            Lz(rM, zM, WM[xM]), zM += sM[xM], xM > 3 && (Lz(rM, zM, OM[bM] >>> 5 & 8191), zM += IQ[xM])
          } else Lz(rM, zM, RM[OM[bM]]), zM += pM[OM[bM]];
        return Lz(rM, zM, RM[256]), zM + pM[256]
      },
      lz = new BQ([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      Ez = (new vQ(0), function() {
        for (var MM = new BQ(256), rM = 0; 256 > rM; ++rM) {
          for (var iM = rM, OM = 9; --OM;) iM = (1 & iM && 3988292384) ^ iM >>> 1;
          MM[rM] = iM
        }
        return MM
      }()),
      Uz = function(MM, rM, iM) {
        for (; iM; ++rM) MM[rM] = iM, iM >>>= 8
      };
    const Gz = !!ii || !!ri,
      Cz = new WeakMap,
      ez = "text/plain";
    let bz = 0,
      wz = !1;
    const tz = (MM, rM) => {
        const [iM, OM] = MM.split("#"), [SM, jM] = iM.split("?");
        if (!jM) return MM;
        const aM = jM.split("&").filter((MM => MM.split("=")[0] !== rM)).join("&");
        return `${SM}${aM?`?${aM}`:""}${OM?`#${OM}`:""}`
      },
      gz = function(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var OM;
        const [SM, jM] = MM.split("?"), aM = US({}, rM), PM = null !== (OM = null == jM ? void 0 : jM.split("&").map((MM => {
          var rM;
          const [OM, SM] = MM.split("="), jM = iM && null !== (rM = aM[OM]) && void 0 !== rM ? rM : SM;
          return delete aM[OM], `${OM}=${jM}`
        }))) && void 0 !== OM ? OM : [], nM = function(MM) {
          let rM, iM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const SM = [];
          return Aa(MM, (function(MM, OM) {
            bi(MM) || bi(OM) || "undefined" === OM || (rM = encodeURIComponent((MM => MM instanceof File)(MM) ? MM.name : MM.toString()), iM = encodeURIComponent(OM), SM[SM.length] = iM + "=" + rM)
          })), SM.join(OM)
        }(aM);
        return nM && PM.push(nM), PM.length > 0 ? `${SM}?${PM.join("&")}` : SM
      },
      uz = MM => {
        if (MM._encodedBody) return MM._encodedBody;
        const {
          data: rM,
          compression: iM
        } = MM;
        if (!rM) return;
        if (iM === UQ.GZipJS) {
          const MM = function(MM, rM) {
            void 0 === rM && (rM = {});
            var iM = function() {
                var MM = 4294967295;
                return {
                  p(rM) {
                    for (var iM = MM, OM = 0; rM.length > OM; ++OM) iM = Ez[255 & iM ^ rM[OM]] ^ iM >>> 8;
                    MM = iM
                  },
                  d: () => 4294967295 ^ MM
                }
              }(),
              OM = MM.length;
            iM.p(MM);
            var SM, jM, aM, PM, nM = (PM = 10 + ((SM = rM).filename && SM.filename.length + 1 || 0), function(MM, rM, iM, OM, SM, jM) {
                var aM = MM.length,
                  PM = new vQ(OM + aM + 5 * (1 + Math.floor(aM / 7e3)) + 8),
                  nM = PM.subarray(OM, PM.length - 8),
                  QM = 0;
                if (!rM || 8 > aM)
                  for (var zM = 0; aM >= zM; zM += 65535) {
                    var LM = zM + 65535;
                    aM > LM ? QM = dz(nM, QM, MM.subarray(zM, LM)) : (nM[zM] = jM, QM = dz(nM, QM, MM.subarray(zM, aM)))
                  } else {
                    for (var mM = lz[rM - 1], HM = mM >>> 13, hM = 8191 & mM, JM = (1 << iM) - 1, dM = new FQ(32768), yM = new FQ(JM + 1), lM = Math.ceil(iM / 3), EM = 2 * lM, UM = function(rM) {
                        return (MM[rM] ^ MM[rM + 1] << lM ^ MM[rM + 2] << EM) & JM
                      }, GM = new BQ(25e3), CM = new FQ(288), eM = new FQ(32), bM = 0, wM = 0, tM = (zM = 0, 0), gM = 0, uM = 0; aM > zM; ++zM) {
                      var RM = UM(zM),
                        pM = 32767 & zM,
                        WM = yM[RM];
                      if (dM[pM] = WM, yM[RM] = pM, zM >= gM) {
                        var sM = aM - zM;
                        if ((bM > 7e3 || tM > 24576) && sM > 423) {
                          QM = yz(MM, nM, 0, GM, CM, eM, wM, tM, uM, zM - uM, QM), tM = bM = wM = 0, uM = zM;
                          for (var DM = 0; 286 > DM; ++DM) CM[DM] = 0;
                          for (DM = 0; 30 > DM; ++DM) eM[DM] = 0
                        }
                        var kM = 2,
                          ZM = 0,
                          oM = hM,
                          fM = pM - WM & 32767;
                        if (sM > 2 && RM == UM(zM - fM))
                          for (var YM = Math.min(HM, sM) - 1, NM = Math.min(32767, zM), AM = Math.min(258, sM); NM >= fM && --oM && pM != WM;) {
                            if (MM[zM + kM] == MM[zM + kM - fM]) {
                              for (var xM = 0; AM > xM && MM[zM + xM] == MM[zM + xM - fM]; ++xM);
                              if (xM > kM) {
                                if (kM = xM, ZM = fM, xM > YM) break;
                                var vM = Math.min(fM, xM - 2),
                                  FM = 0;
                                for (DM = 0; vM > DM; ++DM) {
                                  var BM = zM - fM + DM + 32768 & 32767,
                                    XM = BM - dM[BM] + 32768 & 32767;
                                  XM > FM && (FM = XM, WM = BM)
                                }
                              }
                            }
                            fM += (pM = WM) - (WM = dM[pM]) + 32768 & 32767
                          }
                        if (ZM) {
                          GM[tM++] = 268435456 | VQ[kM] << 18 | cQ[ZM];
                          var IM = 31 & VQ[kM],
                            KM = 31 & cQ[ZM];
                          wM += XQ[IM] + IQ[KM], ++CM[257 + IM], ++eM[KM], gM = zM + kM, ++bM
                        } else GM[tM++] = MM[zM], ++CM[MM[zM]]
                      }
                    }
                    QM = yz(MM, nM, jM, GM, CM, eM, wM, tM, uM, zM - uM, QM)
                  }
                return Qz(PM, 0, OM + nz(QM) + 8)
              }(jM = MM, null == (aM = rM).level ? 6 : aM.level, null == aM.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(jM.length)))) : 12 + aM.mem, PM, 0, !0)),
              QM = nM.length;
            return function(MM, rM) {
              var iM = rM.filename;
              if (MM[0] = 31, MM[1] = 139, MM[2] = 8, MM[8] = 2 > rM.level ? 4 : 9 == rM.level ? 2 : 0, MM[9] = 3, 0 != rM.mtime && Uz(MM, 4, Math.floor(new Date(rM.mtime || Date.now()) / 1e3)), iM) {
                MM[3] = 8;
                for (var OM = 0; iM.length >= OM; ++OM) MM[OM + 10] = iM.charCodeAt(OM)
              }
            }(nM, rM), Uz(nM, QM - 8, iM.d()), Uz(nM, QM - 4, OM), nM
          }(function(MM) {
            var rM = MM.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(MM);
            for (var iM = new vQ(MM.length + (MM.length >>> 1)), OM = 0, SM = function(MM) {
                iM[OM++] = MM
              }, jM = 0; rM > jM; ++jM) {
              if (OM + 5 > iM.length) {
                var aM = new vQ(OM + 8 + (rM - jM << 1));
                aM.set(iM), iM = aM
              }
              var PM = MM.charCodeAt(jM);
              128 > PM ? SM(PM) : 2048 > PM ? (SM(192 | PM >>> 6), SM(128 | 63 & PM)) : PM > 55295 && 57344 > PM ? (SM(240 | (PM = 65536 + (1047552 & PM) | 1023 & MM.charCodeAt(++jM)) >>> 18), SM(128 | PM >>> 12 & 63), SM(128 | PM >>> 6 & 63), SM(128 | 63 & PM)) : (SM(224 | PM >>> 12), SM(128 | PM >>> 6 & 63), SM(128 | 63 & PM))
            }
            return Qz(iM, 0, OM)
          }(An(rM)), {
            mtime: 0
          });
          return {
            contentType: ez,
            body: MM.buffer.slice(MM.byteOffset, MM.byteOffset + MM.byteLength),
            estimatedSize: MM.byteLength
          }
        }
        if (iM === UQ.Base64) {
          const MM = function(MM) {
              return MM ? btoa(encodeURIComponent(MM).replace(/%([0-9A-F]{2})/g, ((MM, rM) => String.fromCharCode(parseInt(rM, 16))))) : MM
            }(An(rM)),
            iM = (MM => "data=" + encodeURIComponent("string" == typeof MM ? MM : An(MM)))(MM);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: iM,
            estimatedSize: new Blob([iM]).size
          }
        }
        const OM = An(rM);
        return {
          contentType: "application/json",
          body: OM,
          estimatedSize: new Blob([OM]).size
        }
      },
      Rz = MM => {
        const rM = () => "sendBeacon" === MM.transport ? {
          url: gz(MM.url, {
            compression: UQ.Base64
          }),
          encodedBody: uz(US(US({}, MM), {}, {
            compression: UQ.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: tz(MM.url, "compression"),
          encodedBody: uz(US(US({}, MM), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let iM;
        try {
          iM = uz(MM)
        } catch (iM) {
          if (Uj(MM.compression, vn(MM.url, "compression"))) return fa.error("Failed to gzip request body, sending uncompressed payload", iM), rM();
          throw iM
        }
        return iM && Uj(MM.compression, vn(MM.url, "compression")) && !((OM = iM.body) instanceof ArrayBuffer ? Ej(new Uint8Array(OM)) : ArrayBuffer.isView(OM) && Ej(new Uint8Array(OM.buffer, OM.byteOffset, OM.byteLength))) ? (wz = !0, rM()) : {
          url: MM.url,
          encodedBody: iM
        };
        var OM
      },
      pz = MM => {
        try {
          return Rz(MM)
        } catch (jM) {
          var rM;
          return fa.error(jM), void(null === (rM = MM.callback) || void 0 === rM || rM.call(MM, {
            statusCode: 0,
            error: jM
          }))
        }
      },
      Wz = function() {
        var MM = Bi((function*(MM) {
          const rM = yield function(MM) {
            return tj.apply(this, arguments)
          }(An(MM.data), jM.DEBUG, {
            rethrow: !0
          });
          if (!rM) return MM;
          const iM = yield rM.arrayBuffer();
          return US(US({}, MM), {}, {
            _encodedBody: {
              contentType: ez,
              body: iM,
              estimatedSize: iM.byteLength
            }
          })
        }));
        return function(rM) {
          return MM.apply(this, arguments)
        }
      }(),
      sz = /Failed to fetch|NetworkError|Load failed/i,
      Dz = MM => "TypeError" === (null == MM ? void 0 : MM.name) && sz.test((null == MM ? void 0 : MM.message) || ""),
      kz = MM => {
        try {
          const rM = function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof MM || !MM) return;
            const iM = MM.trim(),
              OM = /^\d+\s*,/.test(iM) ? iM.slice(0, iM.indexOf(",")).trim() : iM;
            if (/^\d+$/.test(OM)) {
              const MM = 1e3 * Math.min(Number(OM), 300);
              return MM > 0 ? MM : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(OM)) return;
            const SM = /^\w{3} \w{3} /.test(OM) ? OM + " GMT" : OM,
              jM = Date.parse(SM) - rM;
            return Number.isFinite(jM) && jM > 0 ? Math.min(jM, PS) : void 0
          }(MM());
          return bi(rM) ? void 0 : Math.min(rM, 3e4)
        } catch (MM) {
          return
        }
      },
      Zz = MM => {
        const rM = pz(MM);
        if (!rM) return;
        const iM = new ii;
        Cz.set(iM, !0);
        const {
          url: OM,
          encodedBody: SM
        } = rM;
        iM.open(MM.method || "GET", OM, !0);
        const {
          contentType: jM,
          body: aM
        } = null != SM ? SM : {};
        Aa(MM.headers, (function(MM, rM) {
          iM.setRequestHeader(rM, MM)
        })), jM && iM.setRequestHeader("Content-Type", jM), MM.timeout && (iM.timeout = MM.timeout), iM.onreadystatechange = () => {
          if (4 === iM.readyState) {
            var rM;
            const OM = {
              statusCode: iM.status,
              text: iM.responseText
            };
            if (200 === iM.status) try {
              OM.json = JSON.parse(iM.responseText)
            } catch (MM) {}
            null === (rM = MM.callback) || void 0 === rM || rM.call(MM, OM, kz((() => iM.getResponseHeader("Retry-After"))))
          }
        }, iM.send(aM)
      },
      oz = MM => {
        const rM = pz(MM);
        if (!rM) return;
        const {
          url: iM,
          encodedBody: OM
        } = rM, {
          contentType: SM,
          body: jM,
          estimatedSize: aM
        } = null != OM ? OM : {}, PM = new Headers;
        Aa(MM.headers, (function(MM, rM) {
          PM.append(rM, MM)
        })), SM && PM.append("Content-Type", SM);
        let nM = null,
          QM = !1;
        if (Oi) {
          const rM = new Oi;
          nM = {
            signal: rM.signal,
            timeout: setTimeout((() => {
              QM = !0;
              try {
                rM.abort(LS("AbortError", "PostHog request timed out" + ((iM = MM.timeout) ? ` after ${iM}ms` : "")))
              } catch (MM) {
                LM(MM)
              }
              var iM
            }), MM.timeout)
          }
        }
        let zM = !1;
        const LM = rM => {
          var iM;
          zM || (zM = !0, QM && "AbortError" === (null == rM ? void 0 : rM.name) || Dz(rM) ? fa.warn(rM) : fa.error(rM), null === (iM = MM.callback) || void 0 === iM || iM.call(MM, {
            statusCode: 0,
            error: rM
          }))
        };
        let mM = 0;
        const HM = () => {
          bz -= mM, mM = 0, nM && clearTimeout(nM.timeout)
        };
        try {
          const rM = US({
              method: (null == MM ? void 0 : MM.method) || "GET",
              headers: PM,
              referrerPolicy: "strict-origin",
              body: jM,
              signal: null == nM ? void 0 : nM.signal
            }, MM.fetchOptions),
            OM = null != aM ? aM : bi(jM) ? 0 : void 0;
          rM.keepalive = "POST" === rM.method && !MM._keepaliveDisabled && !1 !== rM.keepalive && rM.body === jM && !bi(OM) && OM >= 0 && 52428.8 > bz + OM, rM.keepalive && (mM = OM, bz += mM), ri(iM, rM).then((rM => rM.text().then((iM => {
            var OM;
            if (zM) return;
            const SM = {
              statusCode: rM.status,
              text: iM
            };
            if (200 === rM.status) try {
              SM.json = JSON.parse(iM)
            } catch (MM) {
              fa.error(MM)
            }
            zM = !0, HM(), null === (OM = MM.callback) || void 0 === OM || OM.call(MM, SM, kz((() => rM.headers.get("Retry-After"))))
          })))).catch((MM => {
            HM(), LM(MM)
          })).finally(HM)
        } catch (MM) {
          HM(), LM(MM)
        }
      },
      fz = MM => {
        try {
          var rM;
          const {
            url: iM,
            encodedBody: OM
          } = Rz(MM), {
            contentType: SM,
            body: jM,
            estimatedSize: aM
          } = null != OM ? OM : {};
          if (!jM) return;
          const PM = jM instanceof Blob ? jM : new Blob([jM], {
            type: SM
          });
          if (Vr.sendBeacon(iM, PM)) return;
          const nM = Ui(MM.data) ? MM.data : null === (rM = MM.data) || void 0 === rM ? void 0 : rM.batch;
          if (Ui(nM) && nM.length > 1 && (null != aM ? aM : 0) > 16384) {
            const rM = Math.ceil(nM.length / 2),
              iM = rM => Ui(MM.data) ? rM : US(US({}, MM.data), {}, {
                batch: rM
              });
            return fz(US(US({}, MM), {}, {
              data: iM(nM.slice(0, rM))
            })), void fz(US(US({}, MM), {}, {
              data: iM(nM.slice(rM))
            }))
          }
          fa.warn(`Beacon of ~${null!=aM?aM:0} bytes was rejected by the browser, falling back to ${ri?"fetch":"XHR"}`), ri ? oz(US(US({}, MM), {}, {
            _keepaliveDisabled: !0
          })) : Zz(MM)
        } catch (MM) {
          fa.warn("Beacon send failed", MM)
        }
      },
      Yz = (MM, rM, iM, OM) => {
        const SM = "query" === OM ? "POST" === rM ? "sent_at" : "_" : void 0;
        return gz(iM === UQ.GZipJS ? tz(MM, "compression") : MM, US(US({}, SM ? {
          [SM]: Date.now().toString()
        } : {}), iM === UQ.GZipJS ? {} : {
          compression: iM
        }))
      },
      Nz = (() => {
        const MM = [];
        return ri && MM.push({
          transport: "fetch",
          method: oz
        }), ii && MM.push({
          transport: "XHR",
          method: Zz
        }), (null == Vr ? void 0 : Vr.sendBeacon) && MM.push({
          transport: "sendBeacon",
          method: fz
        }), MM
      })();
    let Az = !Gz && -1 === (null == ji ? void 0 : ji.indexOf("MSIE")) && -1 === (null == ji ? void 0 : ji.indexOf("Mozilla"));

    function xz(MM, rM, iM) {
      var OM, SM, jM;
      iM && (rM = US(US({}, rM), {}, {
        callback: MM => iM(MM)
      })), MM.__loaded ? Az ? MM.__request_queue.push(rM) : MM.rateLimiter.isServerRateLimited(rM.batchKey) ? rM.fireCallbackOnDrop && (null === (SM = rM.callback) || void 0 === SM || SM.call(rM, {
        statusCode: 429
      })) : (rM.transport = rM.transport || MM.config.api_transport, rM.headers = US(US({}, MM.config.request_headers), rM.headers), rM.compression = "best-available" === rM.compression ? null !== (OM = MM.compression) && void 0 !== OM ? OM : rM.compressionFallback : rM.compression, (bi(MM.config.disable_beacon) ? MM.config.__preview_disable_beacon : MM.config.disable_beacon) && (rM.disableTransport = ["sendBeacon"]), rM.fetchOptions = rM.fetchOptions || MM.config.fetch_options, ((MM, rM) => {
        var iM, OM, SM;
        const jM = US(US({}, MM), {}, {
          callback: null != rM ? rM : rM => {
            var iM;
            return null === (iM = MM.callback) || void 0 === iM ? void 0 : iM.call(MM, rM)
          }
        });
        jM.timeout = jM.timeout || 6e4;
        const aM = null !== (iM = jM.transport) && void 0 !== iM ? iM : "fetch";
        "sendBeacon" === aM && bi(jM.compression) && jM.data && (jM.compression = UQ.Base64), "POST" === jM.method && jM.data && ("capture-body" === jM.timestampMode ? jM.data = (MM => {
          var rM, iM;
          const OM = (Ui(MM) ? MM : [MM]).map((MM => US(US({}, MM), MM.timestamp instanceof Date && !isNaN(MM.timestamp.getTime()) ? {
              timestamp: MM.timestamp.toISOString()
            } : {}))),
            SM = OM[0];
          return {
            api_key: null !== (rM = null == SM || null === (iM = SM.properties) || void 0 === iM ? void 0 : iM.token) && void 0 !== rM ? rM : null == SM ? void 0 : SM.token,
            batch: OM,
            sent_at: (new Date).toISOString()
          }
        })(jM.data) : "body" === jM.timestampMode && (jM.data = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return Ui(MM) ? MM.map((MM => US(US({}, MM), {}, {
            sent_at: rM
          }))) : US(US({}, MM), {}, {
            sent_at: rM
          })
        }(jM.data))), jM.url = Yz(jM.url, jM.method, jM.compression, jM.timestampMode);
        const PM = Nz.filter((MM => !jM.disableTransport || !MM.transport || !jM.disableTransport.includes(MM.transport))),
          nM = null !== (OM = null === (SM = function(MM, rM) {
            for (let iM = 0; MM.length > iM; iM++)
              if (rM(MM[iM])) return MM[iM]
          }(PM, (MM => MM.transport === aM))) || void 0 === SM ? void 0 : SM.method) && void 0 !== OM ? OM : PM[0].method;
        if (!nM) throw new Error("No available transport method");
        const QM = MM => {
          try {
            nM(MM)
          } catch (MM) {
            var rM;
            Dz(MM) ? fa.warn(MM) : fa.error(MM), null === (rM = jM.callback) || void 0 === rM || rM.call(jM, {
              statusCode: 0,
              error: MM
            })
          }
        };
        "sendBeacon" !== aM && !jM.preferSyncCompression && jM.data && jM.compression === UQ.GZipJS && Si && "undefined" != typeof Promise && !wz ? Wz(jM).then((MM => {
          QM(MM)
        })).catch((rM => {
          if (Gj(rM)) return wz = !0, void QM(US(US({}, jM), {}, {
            compression: void 0,
            url: Yz(MM.url, MM.method, void 0, MM.timestampMode)
          }));
          (MM => {
            if (!MM || "object" != typeof MM) return !1;
            const rM = "name" in MM ? String(MM.name) : "";
            return Gj(MM) || rM === lj
          })(rM) && (wz = !0), QM(jM)
        })) : QM(jM)
      })(rM, ((OM, SM) => {
        var jM, aM, PM;
        MM.rateLimiter.checkForLimiting(OM), 400 > OM.statusCode || null === (jM = (aM = MM.config).on_request_error) || void 0 === jM || jM.call(aM, OM), iM ? iM(OM, SM) : null === (PM = rM.callback) || void 0 === PM || PM.call(rM, OM)
      }))) : rM.fireCallbackOnDrop && (null === (jM = rM.callback) || void 0 === jM || jM.call(rM, {
        statusCode: 0
      }))
    }
    var vz = class {
      constructor(MM, rM) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = qi((null == rM ? void 0 : rM.flush_interval_ms) || 3e3, 250, 5e3, fa.createLogger("flush interval"), 3e3), this._sendRequest = MM
      }
      enqueue(MM) {
        this._queue.push(MM), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const MM = this._queue.length > 0 ? this._formatQueue() : {},
          rM = Object.values(MM);
        [...rM.filter((MM => 0 === MM.url.indexOf("/e"))), ...rM.filter((MM => 0 !== MM.url.indexOf("/e")))].map((MM => {
          this._sendRequestSafely(US(US({}, MM), {}, {
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
          const MM = this._formatQueue();
          for (const rM in MM) this._sendRequestSafely(MM[rM])
        }
      }
      _sendRequestSafely(MM, rM) {
        try {
          this._sendRequest(MM, rM)
        } catch (MM) {
          fa.error(MM)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const MM = {},
          rM = {};
        Aa(this._queue, (iM => {
          var OM;
          const SM = iM,
            jM = ((SM ? SM.batchKey : null) || SM.url) + (SM.batchGroup ? `:${SM.batchGroup}` : "");
          bi(MM[jM]) && (MM[jM] = US(US({}, SM), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), rM[jM] = []), null === (OM = MM[jM].data) || void 0 === OM || OM.push(SM.data), SM.callback && rM[jM].push(SM.callback)
        }));
        for (const iM in rM) {
          const OM = rM[iM];
          OM.length && (MM[iM].callback = MM => {
            for (const rM of OM) rM(MM)
          })
        }
        return this._queue = [], MM
      }
    };
    const Fz = ["retriesPerformedSoFar"];
    var Bz = class {
        constructor(MM) {
          this._instance = MM, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!bi(qr) && "onLine" in qr.navigator) {
            if (this._areWeOnline = qr.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, qa(qr, "online", this._onlineListener), qa(qr, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(MM, rM) {
          let {
            retriesPerformedSoFar: iM
          } = MM, OM = gj(MM, Fz);
          Wi(iM) && (OM.url = gz(OM.url, {
            retry_count: iM
          })), xz(this._instance, rM ? US(US({}, OM), {}, {
            transport: rM
          }) : OM, ((MM, rM) => {
            var SM;
            if (200 !== MM.statusCode && (400 > MM.statusCode || MM.statusCode >= 500)) {
              if ((0 === MM.statusCode ? 3 : 10) > (null != iM ? iM : 0)) return void this._enqueue(US({
                retriesPerformedSoFar: iM
              }, OM), rM);
              0 === MM.statusCode && fa.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=iM?iM:0} retries.`)
            }
            null === (SM = OM.callback) || void 0 === SM || SM.call(OM, MM)
          }))
        }
        _enqueue(MM, rM) {
          const iM = MM.retriesPerformedSoFar || 0;
          MM.retriesPerformedSoFar = iM + 1;
          const OM = Math.max(function(MM) {
              const rM = 3e3 * Math.pow(2, MM),
                iM = rM / 2,
                OM = Math.min(18e5, rM),
                SM = (Math.random() - .5) * (OM - iM);
              return Math.ceil(OM + SM)
            }(iM), null != rM ? rM : 0),
            SM = Date.now() + OM;
          this._queue.push({
            retryAt: SM,
            requestOptions: MM
          });
          let jM = `Enqueued failed request for retry in ${OM}`;
          navigator.onLine || (jM += " (Browser is offline)"), fa.warn(jM), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const MM = Date.now(),
            rM = [],
            iM = this._queue.filter((iM => MM > iM.retryAt || (rM.push(iM), !1)));
          if (this._queue = rM, iM.length > 0)
            for (const {
                requestOptions: OM
              }
              of iM) this.retriableRequest(OM)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, bi(qr) || (this._onlineListener && (qr.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (qr.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: MM
            }
            of this._queue) try {
            this._instance._send_request(US(US({}, MM), {}, {
              callback: Ui(MM.data) ? void 0 : MM.callback,
              transport: "sendBeacon"
            }))
          } catch (OM) {
            fa.error(OM)
          }
          this._queue = []
        }
      },
      Xz = class {
        constructor(MM) {
          this._instance = MM, this._updateScrollData = () => {
            var MM, rM, iM, OM;
            this._context || (this._context = {});
            const SM = this.scrollElement(),
              jM = this.scrollY(),
              aM = SM ? Math.max(0, SM.scrollHeight - SM.clientHeight) : 0,
              PM = jM + ((null == SM ? void 0 : SM.clientHeight) || 0),
              nM = (null == SM ? void 0 : SM.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(jM), this._context.maxScrollY = Math.max(jM, null !== (MM = this._context.maxScrollY) && void 0 !== MM ? MM : 0), this._context.maxScrollHeight = Math.max(aM, null !== (rM = this._context.maxScrollHeight) && void 0 !== rM ? rM : 0), this._context.lastContentY = PM, this._context.maxContentY = Math.max(PM, null !== (iM = this._context.maxContentY) && void 0 !== iM ? iM : 0), this._context.maxContentHeight = Math.max(nM, null !== (OM = this._context.maxContentHeight) && void 0 !== OM ? OM : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const MM = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), MM
        }
        startMeasuringScrollPosition() {
          qa(qr, "scroll", this._updateScrollData, {
            capture: !0
          }), qa(qr, "scrollend", this._updateScrollData, {
            capture: !0
          }), qa(qr, "resize", this._updateScrollData)
        }
        scrollElement() {
          var MM;
          if (!this._scrollRoot) return null == qr || null === (MM = qr.document) || void 0 === MM ? void 0 : MM.documentElement;
          {
            const MM = Ui(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const iM of MM) {
              var rM;
              const MM = null == qr || null === (rM = qr.document) || void 0 === rM ? void 0 : rM.querySelector(iM);
              if (MM) return MM
            }
          }
        }
        _scrollPosition(MM) {
          var rM, iM;
          const OM = "y" === MM ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const MM = this.scrollElement();
            return MM && MM[OM] || 0
          }
          return qr ? "y" === MM ? qr.scrollY || qr.pageYOffset || (null === (rM = qr.document) || void 0 === rM || null === (rM = rM.documentElement) || void 0 === rM ? void 0 : rM.scrollTop) || 0 : qr.scrollX || qr.pageXOffset || (null === (iM = qr.document) || void 0 === iM || null === (iM = iM.documentElement) || void 0 === iM ? void 0 : iM.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const Iz = MM => SQ(null == MM ? void 0 : MM.config.mask_personal_data_properties, null == MM ? void 0 : MM.config.custom_personal_data_properties, null == MM ? void 0 : MM.config.disable_capture_url_hashes);
    var Kz = class {
        constructor(MM, rM, iM, OM) {
          this._onSessionIdCallback = MM => {
            const rM = this._getStored();
            if (rM && rM.sessionId === MM) return;
            const iM = {
              sessionId: MM,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [Er]: iM
            })
          }, this._instance = MM, this._sessionIdManager = rM, this._persistence = iM, this._sessionSourceParamGenerator = OM || Iz, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[Er]
        }
        getSetOnceProps() {
          var MM;
          const rM = null === (MM = this._getStored()) || void 0 === MM ? void 0 : MM.props;
          return rM ? "r" in rM ? jQ(rM, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: rM.referringDomain,
            $pathname: rM.initialPathName,
            utm_source: rM.utm_source,
            utm_campaign: rM.utm_campaign,
            utm_medium: rM.utm_medium,
            utm_content: rM.utm_content,
            utm_term: rM.utm_term
          } : {}
        }
        getSessionProps() {
          const MM = {};
          return Aa(Ba(this.getSetOnceProps()), ((rM, iM) => {
            "$current_url" === iM && (iM = "url"), MM[`$session_entry_${Ji(iM)}`] = rM
          })), MM
        }
      },
      qz = class {
        on(MM, rM) {
          return this._events[MM] || (this._events[MM] = []), this._events[MM].push(rM), () => {
            this._events[MM] = this._events[MM].filter((MM => MM !== rM))
          }
        }
        emit(MM, rM) {
          for (const iM of this._events[MM] || []) iM(rM);
          for (const iM of this._events["*"] || []) iM(MM, rM)
        }
        constructor() {
          this._events = {}
        }
      };
    const Tz = Ya("[SessionId]"),
      Vz = 864e5;
    var cz = class {
      on(MM, rM) {
        return this._eventEmitter.on(MM, rM)
      }
      constructor(MM, rM, iM) {
        var OM;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new qz, this._sessionHasBeenIdleTooLong = (MM, rM) => !(!Wi(MM) || !Wi(rM)) && Math.abs(MM - rM) > this.sessionTimeoutMs, !MM.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === MM.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = MM.config, this._persistence = MM.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = rM || SP, this._windowIdGenerator = iM || SP;
        const SM = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * qi(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, Tz.createLogger("session_idle_timeout_seconds"), 1800), MM.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + SM + "_window_id", this._primary_window_exists_storage_key = "ph_" + SM + "_primary_window_exists", this._canUseSessionStorage()) {
          const MM = wP._parse(this._window_id_storage_key),
            rM = wP._parse(this._primary_window_exists_storage_key);
          MM && !rM ? this._windowId = MM : wP._remove(this._window_id_storage_key), wP._set(this._primary_window_exists_storage_key, !0)
        }(null === (OM = this._config.bootstrap) || void 0 === OM ? void 0 : OM.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(MM) {
        return bi(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(MM), this._sessionId && MM(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((rM => rM !== MM))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && wP._is_supported()
      }
      _setWindowId(MM) {
        MM !== this._windowId && (this._windowId = MM, this._canUseSessionStorage() && wP._set(this._window_id_storage_key, MM))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? wP._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(MM) {
        const rM = this._lastPersistedActivityTimestamp;
        return !gi(rM) && !gi(MM) && 5e3 > Math.abs(MM - rM)
      }
      _setSessionId(MM, rM, iM) {
        const OM = rM !== this._sessionActivityTimestamp,
          SM = !(MM !== this._sessionId || iM !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = iM, this._sessionActivityTimestamp = rM, this._sessionId = MM, SM && !OM || SM && this._isActivityChangeBelowGranularity(rM) || (this._lastPersistedActivityTimestamp = rM, this._persistence.register({
          [VM]: [rM, MM, iM]
        }))
      }
      _useCrossTabRefreshHardening() {
        var MM;
        const rM = null === (MM = this._config) || void 0 === MM ? void 0 : MM.persistence_save_debounce_ms;
        return Wi(rM) && rM > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(VM) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var MM;
        if (gi(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, rM, iM] = this._getSessionId();
        rM === this._sessionId && iM === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [VM]: [this._sessionActivityTimestamp, null !== (MM = this._sessionId) && void 0 !== MM ? MM : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [MM] = this._getSessionId(), rM = Wi(MM) ? MM : 0, iM = Wi(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(rM, iM)
      }
      _isSessionIdleAfterCrossTabRefresh(MM) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(MM, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const MM = this._persistence.props[VM];
        return Ui(MM) && 2 === MM.length && MM.push(MM[0]), MM || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const iM = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const iM = (MM => {
              const rM = MM.replace(/-/g, "");
              if (32 !== rM.length) throw new Error("Not a valid UUID");
              if ("7" !== rM[12]) throw new Error("Not a UUIDv7");
              return parseInt(rM.substring(0, 12), 16)
            })(MM);
            return iM > rM + 6e4 ? void Tz.error("Bootstrap sessionID cannot be in the future") : iM
          } catch (MM) {
            return void Tz.error("Invalid sessionID in bootstrap", MM)
          }
        }(MM);
        return !bi(iM) && (rM ? this._pendingBootstrapSession = {
          sessionId: MM,
          sessionStartTimestamp: iM
        } : this._setSessionId(MM, (new Date).getTime(), iM), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && qr && (qr.removeEventListener(Fr, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && wP._remove(this._primary_window_exists_storage_key)
        }, qa(qr, Fr, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const OM = rM || (new Date).getTime(),
          SM = this._sessionId;
        if (iM) this._lastCookieSyncTimestamp = OM;
        else if (gi(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > OM || OM - this._lastCookieSyncTimestamp >= 1e3) {
          var jM, aM;
          null === (jM = (aM = this._persistence).syncCookieProperties) || void 0 === jM || jM.call(aM), this._lastCookieSyncTimestamp = OM
        }
        let [, PM, nM] = this._getSessionId();
        const QM = !bi(SM) && PM !== SM,
          zM = this._freshestActivityTimestamp();
        let LM = this._getWindowId();
        const mM = this._pendingBootstrapSession,
          HM = !!mM && (mM.sessionStartTimestamp > OM + 6e4 || OM - mM.sessionStartTimestamp > Vz),
          hM = mM ? HM : Wi(nM) && Math.abs(OM - nM) > Vz;
        let JM = !1,
          dM = QM,
          yM = !PM || !!mM;
        const lM = PM;
        let EM = !yM && !MM && this._sessionHasBeenIdleTooLong(OM, zM);
        if (EM && (EM = this._isSessionIdleAfterCrossTabRefresh(OM), EM || Tz.info("cross-tab refresh kept the session alive", {
            sessionId: PM
          }), [, PM, nM] = this._getSessionId(), EM || (yM = !PM || !!mM)), yM || EM || hM) {
          dM = !1;
          const MM = mM && !HM;
          PM = MM ? mM.sessionId : this._sessionIdGenerator(), LM = this._windowIdGenerator(), Tz.info("new session ID assigned", {
            sessionId: PM,
            windowId: LM,
            bootstrapped: !!MM,
            changeReason: {
              noSessionId: yM,
              activityTimeout: EM,
              sessionPastMaximumLength: hM
            }
          }), nM = MM ? mM.sessionStartTimestamp : OM, this._pendingBootstrapSession = void 0, JM = !0
        } else LM || (LM = this._windowIdGenerator(), JM = !0), dM = dM || PM !== lM, dM && (Tz.info("adopted cross-tab session id", {
          sessionId: PM,
          windowId: LM
        }), JM = !0);
        const UM = Wi(zM) && MM && !hM ? zM : OM,
          GM = Wi(nM) ? nM : (new Date).getTime();
        this._setWindowId(LM), this._setSessionId(PM, UM, GM), MM || this._resetIdleTimer();
        const CM = {
          noSessionId: yM,
          activityTimeout: EM,
          sessionPastMaximumLength: hM,
          crossTabAdoption: dM
        };
        return JM && this._sessionIdChangedHandlers.forEach((MM => MM(PM, LM, CM))), {
          sessionId: PM,
          windowId: LM,
          sessionStartTimestamp: GM,
          changeReason: JM ? CM : void 0,
          lastActivityTimestamp: zM
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const MM = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: MM
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const ML = function(MM, rM) {
      if (!MM) return !1;
      const iM = MM.userAgent;
      if (iM && Ki(iM, rM)) return !0;
      try {
        const iM = null == MM ? void 0 : MM.userAgentData;
        if ((null == iM ? void 0 : iM.brands) && iM.brands.some((MM => Ki(null == MM ? void 0 : MM.brand, rM)))) return !0
      } catch (MM) {}
      return !!MM.webdriver
    };

    function rL() {
      return (rL = Bi((function*() {
        const MM = null == Vr ? void 0 : Vr.userAgentData;
        if (null == MM ? void 0 : MM.getHighEntropyValues) try {
          const rM = yield MM.getHighEntropyValues(["model"]), iM = null == rM ? void 0 : rM.model;
          return wi(iM) && iM.length > 0 ? iM : void 0
        } catch (MM) {
          return void fa.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", MM)
        }
      }))).apply(this, arguments)
    }

    function iL(MM, rM) {
      let iM = `$survey_${rM}/${MM.id}`;
      return MM.current_iteration && MM.current_iteration > 0 && (iM = `$survey_${rM}/${MM.id}/${MM.current_iteration}`), iM
    }

    function OL(MM) {
      var rM;
      return !!(null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.events) || void 0 === rM || null === (rM = rM.values) || void 0 === rM ? void 0 : rM.length)
    }
    const SL = (MM, rM) => {
        if (!(MM => {
            try {
              new RegExp(MM)
            } catch (MM) {
              return !1
            }
            return !0
          })(rM)) return !1;
        try {
          return new RegExp(rM).test(MM)
        } catch (MM) {
          return !1
        }
      },
      jL = MM => MM.toLowerCase(),
      aL = {
        exact: (MM, rM) => rM.some((rM => MM.some((MM => rM === MM)))),
        is_not: (MM, rM) => rM.every((rM => MM.every((MM => rM !== MM)))),
        regex: (MM, rM) => rM.some((rM => MM.some((MM => SL(rM, MM))))),
        not_regex: (MM, rM) => rM.every((rM => MM.every((MM => !SL(rM, MM))))),
        icontains: (MM, rM) => rM.map(jL).some((rM => MM.map(jL).some((MM => rM.includes(MM))))),
        not_icontains: (MM, rM) => rM.map(jL).every((rM => MM.map(jL).every((MM => !rM.includes(MM))))),
        gt: (MM, rM) => rM.some((rM => {
          const iM = parseFloat(rM);
          return !isNaN(iM) && MM.some((MM => iM > parseFloat(MM)))
        })),
        lt: (MM, rM) => rM.some((rM => {
          const iM = parseFloat(rM);
          return !isNaN(iM) && MM.some((MM => iM < parseFloat(MM)))
        }))
      };

    function PL(MM, rM) {
      return !MM || Object.entries(MM).every((MM => {
        let [iM, OM] = MM;
        const SM = null == rM ? void 0 : rM[iM];
        if (null == SM) return !1;
        const jM = aL[OM.operator];
        return !!jM && jM(OM.values.map(String), [String(SM)])
      }))
    }

    function nL(MM, rM, iM) {
      return An({
        distinct_id: MM,
        userPropertiesToSet: rM,
        userPropertiesToSetOnce: iM
      })
    }
    const QL = "custom",
      zL = "i.posthog.com",
      LL = /^\/static\//,
      mL = ["/s/", "/e/", "/i/"];
    var HL = class {
      constructor(MM) {
        this._regionCache = {}, this.instance = MM
      }
      get apiHost() {
        const MM = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === MM ? "https://us.i.posthog.com" : MM
      }
      get flagsApiHost() {
        const MM = this.instance.config.flags_api_host;
        return MM ? MM.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var MM;
        let rM = null === (MM = this.instance.config.ui_host) || void 0 === MM ? void 0 : MM.replace(/\/$/, "");
        return rM || (rM = this.apiHost.replace(`.${zL}`, ".posthog.com")), "https://app.posthog.com" === rM ? "https://us.posthog.com" : rM
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : QL), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(MM) {
        if (!LL.test(MM)) return;
        const rM = this.instance.config.asset_host;
        return "string" == typeof rM && rM.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(MM) {
        const rM = xn(MM);
        return rM ? rM.protocol + "//" + rM.host + rM.pathname : void 0
      }
      _prepareEndpoint(MM, rM, iM) {
        if ("ui" === MM) return iM;
        let OM = iM;
        const SM = this.instance.config.rewriteRequestPath;
        if (SM) {
          var jM;
          const MM = (null === (jM = xn(iM)) || void 0 === jM ? void 0 : jM.href) || iM;
          OM = SM(new URL(MM)).toString()
        }
        if (SM && "api" === MM && mL.some((MM => 0 === rM.indexOf(MM)))) {
          const MM = this._urlKey(OM);
          if (MM) {
            const rM = this.apiHost;
            let iM = this._ingestionEndpoints;
            (null == iM ? void 0 : iM.apiHost) === rM && iM.rewriteRequestPath === SM || (iM = {
              apiHost: rM,
              rewriteRequestPath: SM,
              urls: new Set
            }, this._ingestionEndpoints = iM), iM.urls.add(MM)
          }
        }
        return OM
      }
      isIngestionEndpoint(MM) {
        const rM = this._ingestionEndpoints,
          iM = this._urlKey(MM);
        return (null == rM ? void 0 : rM.apiHost) === this.apiHost && rM.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!iM && rM.urls.has(iM)
      }
      endpointFor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (rM && (rM = "/" === rM[0] ? rM : `/${rM}`), "ui" === MM) return this._prepareEndpoint(MM, rM, this.uiHost + rM);
        if ("flags" === MM) return this._prepareEndpoint(MM, rM, this.flagsApiHost + rM);
        if ("assets" === MM) {
          const iM = this._staticAssetHostOverride(rM);
          if (iM) return this._prepareEndpoint(MM, rM, `${iM}${rM}`)
        }
        if (this.region === QL) return this._prepareEndpoint(MM, rM, this.apiHost + rM);
        const iM = zL + rM;
        switch (MM) {
          case "assets":
            return this._prepareEndpoint(MM, rM, `https://${this.region}-assets.${iM}`);
          case "api":
            return this._prepareEndpoint(MM, rM, `https://${this.region}.${iM}`)
        }
      }
    };
    const hL = Ya("[Surveys]"),
      JL = MM => {
        try {
          const rM = (MM => ((MM, rM) => `seenSurvey_${function(MM){return MM.current_iteration&&MM.current_iteration>0?`${MM.id}_${MM.current_iteration}`:MM.id}(rM)}`)(0, MM))(MM);
          if (localStorage.getItem(rM)) return;
          localStorage.setItem(rM, "true")
        } catch (MM) {
          hL.error("Failed to persist survey seen state", MM)
        }
      },
      dL = [eQ, wQ, bQ],
      yL = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: sQ
      },
      lL = Ya("[PostHog ExternalIntegrations]"),
      EL = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var UL = class {
      constructor(MM) {
        this._instance = MM
      }
      _loadScript(MM, rM) {
        var iM, OM;
        null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this._instance, MM, (MM => {
          if (MM) return lL.error("failed to load script", MM);
          rM()
        }))
      }
      startIfEnabledOrStop() {
        var MM;
        for (const [SM, jM] of Object.entries(null !== (MM = this._instance.config.integrations) && void 0 !== MM ? MM : {})) {
          var rM, iM, OM;
          jM && !(null === (rM = Pi.__PosthogExtensions__) || void 0 === rM || null === (rM = rM.integrations) || void 0 === rM ? void 0 : rM[SM]) && this._loadScript(EL[SM], (() => {
            var MM;
            null === (MM = Pi.__PosthogExtensions__) || void 0 === MM || null === (MM = MM.integrations) || void 0 === MM || null === (MM = MM[SM]) || void 0 === MM || MM.start(this._instance)
          })), !jM && (null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (iM = iM.integrations) || void 0 === iM ? void 0 : iM[SM]) && (null === (OM = Pi.__PosthogExtensions__) || void 0 === OM || null === (OM = OM.integrations) || void 0 === OM || null === (OM = OM[SM]) || void 0 === OM || OM.stop())
        }
      }
    };
    const GL = "autocapture",
      CL = "featureFlags",
      eL = "logs",
      bL = "surveys";
    var wL = class {
        constructor(MM) {
          this._instance = MM
        }
        initialize() {}
        get(MM) {
          const rM = this._instance.persistence;
          if ("string" == typeof MM) return null == rM ? void 0 : rM.get_property(MM);
          const iM = {};
          for (const OM of MM) {
            const MM = null == rM ? void 0 : rM.get_property(OM);
            bi(MM) || (iM[OM] = MM)
          }
          return iM
        }
        set(MM, rM) {
          var iM;
          null === (iM = this._instance.persistence) || void 0 === iM || iM.register("string" == typeof MM ? {
            [MM]: rM
          } : MM)
        }
        remove(MM) {
          var rM;
          null === (rM = this._instance.persistence) || void 0 === rM || rM.unregister(MM)
        }
      },
      tL = class {
        constructor(MM) {
          this.instance = MM, this._logger = fa, this.kv = new wL(MM), this.onEvent = MM => kQ(this.instance._addCaptureHook(((rM, iM) => {
            if (iM) try {
              MM({
                event: rM,
                properties: iM.properties
              })
            } catch (MM) {
              this._logger.error("Browser extension event listener failed", MM)
            }
          }))), this.onRemoteConfig = MM => {
            const rM = rM => {
                try {
                  MM(rM)
                } catch (MM) {
                  this._logger.error("Browser extension remote config listener failed", MM)
                }
              },
              iM = this.instance._internalEventEmitter.on("extensionsRemoteConfig", rM);
            return this.instance._lastRemoteConfig && rM(this.instance._lastRemoteConfig), kQ(iM)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var MM;
          return null !== (MM = this.instance.get_property("$device_id")) && void 0 !== MM ? MM : this.distinctId
        }
        get deviceId() {
          const MM = this.instance.get_property(bM);
          return "string" == typeof MM ? MM : void 0
        }
        get library() {
          return {
            name: jM.LIB_NAME,
            version: jM.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var MM, rM;
          return null !== (MM = null === (rM = this.instance.persistence) || void 0 === rM ? void 0 : rM.get_initial_props()) && void 0 !== MM ? MM : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var MM, rM, iM, OM, SM;
            const jM = null === (MM = this.instance.sessionManager) || void 0 === MM ? void 0 : MM.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (rM = null == jM ? void 0 : jM.sessionId) && void 0 !== rM ? rM : "",
              windowId: null !== (iM = null == jM ? void 0 : jM.windowId) && void 0 !== iM ? iM : "",
              sessionStartTimestamp: null !== (OM = null == jM ? void 0 : jM.sessionStartTimestamp) && void 0 !== OM ? OM : 0,
              lastActivityTimestamp: null !== (SM = null == jM ? void 0 : jM.lastActivityTimestamp) && void 0 !== SM ? SM : 0
            }
          } catch (MM) {
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
          return Gi(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(MM) {
          let rM;
          switch (MM) {
            case CL:
            case "featureFlagsCommon":
              rM = this.instance.featureFlags;
              break;
            case eL:
              rM = this.instance.logs;
              break;
            case bL:
              rM = this.instance.surveys;
              break;
            case GL:
              rM = this.instance.autocapture
          }
          return rM
        }
        capture(MM, rM, iM) {
          iM ? this.instance.capture(MM, rM, {
            timestamp: iM.timestamp,
            uuid: iM.uuid,
            $set: iM.set,
            $set_once: iM.setOnce
          }) : this.instance.capture(MM, rM)
        }
        registerDynamicEventProperties(MM) {
          return kQ(this.instance._registerExtensionEventProperties(MM))
        }
        sendRequest(MM) {
          var rM = this;
          return Bi((function*(MM) {
            let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var OM;
            const SM = null !== (OM = iM.target) && void 0 !== OM ? OM : "api",
              jM = rM.instance.requestRouter.endpointFor(SM, MM),
              aM = "api" === SM && "/i/v1/logs" === MM,
              PM = {
                method: iM.method,
                url: iM.query ? gz(jM, iM.query) : jM,
                data: iM.body,
                headers: iM.headers,
                timeout: iM.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: iM.transport,
                compression: iM.compression,
                compressionFallback: "flags" === iM.target && "best-available" === iM.compression ? Qi.Base64 : void 0,
                timestampMode: iM.sentAt
              };
            return aM && (PM.batchKey = "logs"), "sendBeacon" === iM.transport ? (rM.instance._send_request(PM), {
              statusCode: 202
            }) : new Promise((MM => {
              PM.callback = MM, rM.instance._send_request(PM)
            }))
          })).apply(this, arguments)
        }
      };
    const gL = {};
    let uL = 0;
    const RL = () => {},
      pL = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      WL = "Surveys module not available",
      sL = "sanitize_properties is deprecated. Use before_send instead",
      DL = "Invalid value for property_denylist config: ",
      kL = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      ZL = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      oL = MM => "$" === MM.charAt(0) && !mi(ZL, MM),
      fL = /^[A-Za-z0-9_-]{1,400}$/,
      YL = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      NL = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      AL = ["token", "distinct_id", tr],
      xL = "posthog",
      vL = MM => {
        const rM = {};
        return MM && "unset" !== MM ? ("2025-11-30" > MM || (rM.strictMinimumDuration = !0), "2026-05-30" > MM || (rM.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > MM || (rM.streamNetworkBody = !0), "2026-08-30" > MM || (rM.captureJsonLd = !0), rM) : rM
      },
      FL = MM => {
        var rM;
        return US({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: Ka(null == cr ? void 0 : cr.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: RL,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != MM ? MM : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: Mi && wi(null == Mi ? void 0 : Mi.search) && -1 !== Mi.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == qr || null === (rM = qr.location) || void 0 === rM ? void 0 : rM.protocol),
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
          on_request_error(MM) {
            fa.error("Bad HTTP status: " + MM.statusCode + " " + MM.text)
          },
          get_device_id: MM => MM,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: vr,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: RL
        }, (MM => ({
          rageclick: MM && MM >= "2026-05-30" ? {
            content_ignorelist: XP,
            ignore_text_selection: !0
          } : !MM || "2025-11-30" > MM || {
            content_ignorelist: !0
          },
          capture_pageview: !MM || "2025-05-24" > MM || "history_change",
          session_recording: vL(MM),
          external_scripts_inject_target: MM && MM >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: MM && MM >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: MM && MM >= "2026-05-30" ? 250 : 0,
          split_storage: !(!MM || "2026-05-30" > MM),
          detect_google_search_app: !(!MM || "2026-05-30" > MM),
          disable_capture_url_hashes: !(!MM || "2026-06-25" > MM),
          cookieWinsOnConflict: !(!MM || "unset" === MM || "2026-08-29" > MM)
        }))(MM))
      },
      BL = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      XL = MM => {
        const rM = {};
        for (const [SM, jM] of BL) bi(MM[SM]) || (rM[jM] = MM[SM]);
        const iM = xa({}, rM, MM),
          OM = MM.__preview_external_dependency_versioned_paths;
        return bi(OM) || (bi(MM.strict_script_versioning) && (iM.strict_script_versioning = !!OM), wi(OM) && bi(MM.asset_host) && (iM.asset_host = OM)), Ui(MM.property_blacklist) && (bi(MM.property_denylist) ? iM.property_denylist = MM.property_blacklist : Ui(MM.property_denylist) ? iM.property_denylist = [...MM.property_blacklist, ...MM.property_denylist] : fa.error(DL + MM.property_denylist)), iM
      };
    var IL = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(MM) {
          fa.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = MM
        }
      },
      KL = class MM {
        _removeExtension(MM) {
          if (!MM) return;
          const rM = this._extensions.indexOf(MM); - 1 !== rM && this._extensions.splice(rM, 1)
        }
        _replaceExtension(MM, rM) {
          var iM;
          return this._removeExtension(MM), this._extensions.push(rM), null === (iM = rM.initialize) || void 0 === iM || iM.call(rM), rM
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const MM = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!MM && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let rM, iM, OM;
          MM ? (rM = `persistence is set to '${this.config.persistence}'`, iM = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", OM = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (rM = "persistence is disabled (disable_persistence is true)", iM = "on every page load", OM = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${rM} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${iM}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${OM}`)
        }
        _syncCookielessIdentity() {
          const MM = this.persistence;
          if (!MM || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || MM.load(!0);
          const rM = this.get_distinct_id();
          if (!rM || "$posthog_cookieless" === rM) {
            const rM = this.config.get_device_id(SP());
            this.register({
              distinct_id: rM,
              $device_id: rM
            }), MM.set_property(lr, Ar)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var MM, rM;
          return null !== (MM = null === (rM = this.featureFlags) || void 0 === rM ? void 0 : rM.hasLoadedFlags) && void 0 !== MM && MM
        }
        get flagsEndpointWasHit() {
          var MM, rM;
          return null !== (MM = null === (rM = this.featureFlags) || void 0 === rM ? void 0 : rM.hasLoadedFlags) && void 0 !== MM && MM
        }
        constructor() {
          var rM;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new IL, this._personProcessingSetOncePropertiesSent = !1, this.version = jM.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new qz, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = FL(), this.SentryIntegration = Rn, this.sentryIntegration = MM => function(MM, rM) {
            const iM = un(MM, rM);
            return {
              name: gn,
              processEvent: MM => iM(MM)
            }
          }(this, MM), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new Xz(this), this.pageViewManager = new pn(this), this.rateLimiter = new NQ(this), this.requestRouter = new HL(this), this.consent = new tP(this), this.externalIntegrations = new UL(this);
          const iM = null !== (rM = MM.__defaultExtensionClasses) && void 0 !== rM ? rM : {};
          this.featureFlags = iM.featureFlags && new iM.featureFlags(this), this.toolbar = iM.toolbar && new iM.toolbar(this), this.surveys = iM.surveys && new iM.surveys(this), this.conversations = iM.conversations && new iM.conversations(this), this.logs = iM.logs && new iM.logs(this), this.metrics = iM.metrics && new iM.metrics(this), this.experiments = iM.experiments && new iM.experiments(this), this.exceptions = iM.exceptions && new iM.exceptions(this), this.people = {
            set: (MM, rM, iM) => {
              const OM = wi(MM) ? {
                [MM]: rM
              } : MM;
              this.setPersonProperties(OM), null == iM || iM({})
            },
            set_once: (MM, rM, iM) => {
              const OM = wi(MM) ? {
                [MM]: rM
              } : MM;
              this.setPersonProperties(void 0, OM), null == iM || iM({})
            }
          }, this.on("eventCaptured", (MM => fa.info(`send "${null==MM?void 0:MM.event}"`, MM)))
        }
        init(rM, iM, OM) {
          if (OM && OM !== xL) {
            var SM;
            const jM = null !== (SM = gL[OM]) && void 0 !== SM ? SM : new MM;
            return jM._init(rM, iM, OM), gL[OM] = jM, gL[xL][OM] = jM, jM
          }
          return this._init(rM, iM, OM)
        }
        _init(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 ? arguments[2] : void 0;
          var OM, SM, aM;
          const PM = wi(MM) ? MM.trim() : "";
          if (!PM) return fa.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var nM;
          if (this.__loaded) return PM !== (null === (nM = this.config) || void 0 === nM ? void 0 : nM.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${PM}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = FL(rM.defaults), rM.debug = this._checkLocalStorageForDebug(rM.debug), this._originalUserConfig = rM, this._triggered_notifs = [], rM.person_profiles ? this._initialPersonProfilesConfig = rM.person_profiles : rM.process_person && (this._initialPersonProfilesConfig = rM.process_person);
          const QM = FL(rM.defaults),
            zM = XL(rM),
            LM = xa({}, QM, zM, {
              name: iM,
              token: PM
            });
          Ci(QM.rageclick) && Ci(zM.rageclick) && (LM.rageclick = xa({}, QM.rageclick, zM.rageclick)), Ci(QM.session_recording) && Ci(zM.session_recording) && (LM.session_recording = xa({}, QM.session_recording, zM.session_recording)), this.set_config(LM), this.config.on_xhr_error && fa.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = rM.disable_compression ? void 0 : UQ.GZipJS;
          const mM = this._is_persistence_disabled(),
            HM = !this._inCookielessMode();
          if (this.persistence = new EQ(this.config, mM, !0, HM), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new EQ(US(US({}, this.config), {}, {
              persistence: "sessionStorage"
            }), mM, !1, HM), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !mM && wP._is_supported()) {
            const MM = wP._parse(this._sessionRegisteredPropertiesStorageKey);
            Ui(MM) && MM.forEach((MM => {
              wi(MM) && this._sessionRegisteredPropKeys.add(MM)
            }))
          } else wP._remove(this._sessionRegisteredPropertiesStorageKey);
          const hM = US({}, this.persistence.props),
            JM = US({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new vz(((MM, rM) => this._send_retriable_request(MM, rM)), this.config.request_queue_config), this._retryQueue = new Bz(this), this.__request_queue = [];
          const dM = this._inCookielessMode();
          dM || (this.sessionManager = new cz(this), this.sessionPropsManager = new Kz(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((MM, rM, iM) => {
            ((null == iM ? void 0 : iM.activityTimeout) || (null == iM ? void 0 : iM.sessionPastMaximumLength) || (null == iM ? void 0 : iM.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (fa.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(dM)
          }), 0)) : (fa.info("Initializing extensions synchronously"), this._initExtensions(dM)), jM.DEBUG = jM.DEBUG || this.config.debug, jM.DEBUG && fa.info("Starting in debug mode", {
            this: this,
            config: rM,
            thisC: US({}, this.config),
            p: hM,
            s: JM
          }), this.config.identity_distinct_id && !(null === (OM = rM.bootstrap) || void 0 === OM ? void 0 : OM.distinctID) && (rM.bootstrap = US(US({}, rM.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const yM = null === (SM = rM.bootstrap) || void 0 === SM ? void 0 : SM.distinctID;
          if (this._hasStableInitialDistinctId = !!yM && !ti(yM), null === (aM = rM.bootstrap) || void 0 === aM ? void 0 : aM.distinctID) {
            const MM = rM.bootstrap.distinctID,
              iM = this.get_distinct_id(),
              OM = this.persistence.get_property(lr);
            if (rM.bootstrap.isIdentifiedID && null != iM && iM !== MM && "anonymous" === OM) this.identify(MM);
            else if (rM.bootstrap.isIdentifiedID && null != iM && iM !== MM && "identified" === OM) fa.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const iM = this.config.get_device_id(SP()),
                OM = rM.bootstrap.isIdentifiedID ? iM : MM;
              this.persistence.set_property(lr, rM.bootstrap.isIdentifiedID ? xr : Ar), this.register({
                distinct_id: MM,
                $device_id: OM
              })
            }
          }
          if (dM) this.register_once({
            distinct_id: wr,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const MM = this.config.get_device_id(SP());
            this.register_once({
              distinct_id: MM,
              $device_id: MM
            }, ""), this.persistence.set_property(lr, Ar)
          }
          return qa(qr, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), qa(qr, "pageshow", (() => {
            var MM;
            this._isPageUnloading = !1, this._isShutdown || null === (MM = this._retryQueue) || void 0 === MM || MM.resume()
          })), rM.segment ? tn(this, (() => this._loaded())) : this._loaded(), Gi(this.config._onCapture) && this.config._onCapture !== RL && (fa.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (MM => this.config._onCapture(MM.event, MM)))), this.config.ip && fa.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return rL.apply(this, arguments)
          }().then((MM => {
            MM && this.register({
              [wM]: MM
            })
          })).catch(RL), this
        }
        _isSharedExtension(MM) {
          const rM = MM;
          return wi(rM.name) && Gi(rM.setup)
        }
        _enrollExtension(MM, rM) {
          var iM = this;
          this._isSharedExtension(MM) ? rM.push(Bi((function*() {
            try {
              yield MM.setup(iM._getBrowserClientAdapter())
            } catch (iM) {
              fa.error(`Failed to set up extension "${MM.name}"`, iM);
              try {
                var rM;
                yield null === (rM = MM.dispose) || void 0 === rM ? void 0 : rM.call(MM)
              } catch (rM) {
                fa.error(`Failed to dispose extension "${MM.name}"`, rM)
              }
            }
          }))) : this._extensions.push(MM)
        }
        _enrollFeatureFlags() {
          var rM, iM, OM, SM = this;
          const jM = null !== (rM = null === (iM = this.config.__extensionClasses) || void 0 === iM ? void 0 : iM.featureFlags) && void 0 !== rM ? rM : null === (OM = MM.__defaultExtensionClasses) || void 0 === OM ? void 0 : OM.featureFlags;
          var aM, PM, nM;
          if (jM)
            if (this.featureFlags && this.featureFlags instanceof jM || (null === (aM = this._featureFlagsReloadingUnsubscribe) || void 0 === aM || aM.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new jM(this)), Gi(this.featureFlags.onReloading) && Gi(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const MM = this.featureFlags;
                Bi((function*() {
                  try {
                    yield MM.setup(SM._getBrowserClientAdapter())
                  } catch (rM) {
                    fa.error("Failed to set up feature flags", rM);
                    const OM = SM._featureFlagsReloadingUnsubscribe;
                    SM._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == OM || OM()
                    } catch (MM) {
                      fa.error("Failed to unsubscribe feature flag reloading", MM)
                    }
                    try {
                      yield MM.dispose()
                    } catch (MM) {
                      fa.error("Failed to dispose feature flags", MM)
                    }
                  }
                }))()
              }
            } else null === (PM = (nM = this.featureFlags).initialize) || void 0 === PM || PM.call(nM)
        }
        _initExtensions(rM) {
          const iM = performance.now(),
            OM = US(US({}, MM.__defaultExtensionClasses), this.config.__extensionClasses),
            SM = [];
          var jM, aM, PM, nM, QM, zM, LM, mM;
          OM.exceptions && this._extensions.push(this.exceptions = null !== (jM = this.exceptions) && void 0 !== jM ? jM : new OM.exceptions(this)), OM.historyAutocapture && this._extensions.push(this.historyAutocapture = new OM.historyAutocapture(this)), OM.tracingHeaders && this._extensions.push(this.tracingHeaders = new OM.tracingHeaders(this)), OM.siteApps && this._extensions.push(this.siteApps = new OM.siteApps(this)), OM.sessionRecording && !rM && this._extensions.push(this.sessionRecording = new OM.sessionRecording(this)), this.config.disable_scroll_properties || SM.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), OM.autocapture && this._enrollExtension(this.autocapture = new OM.autocapture(this), SM), OM.surveys && this._enrollExtension(this.surveys = null !== (aM = this.surveys) && void 0 !== aM ? aM : new OM.surveys(this), SM), OM.logs && this._enrollExtension(this.logs = null !== (PM = this.logs) && void 0 !== PM ? PM : new OM.logs(this), SM), OM.metrics && this._extensions.push(this.metrics = null !== (nM = this.metrics) && void 0 !== nM ? nM : new OM.metrics(this)), OM.conversations && this._extensions.push(this.conversations = null !== (QM = this.conversations) && void 0 !== QM ? QM : new OM.conversations(this)), OM.productTours && this._extensions.push(this.productTours = new OM.productTours(this)), OM.heatmaps && this._extensions.push(this.heatmaps = new OM.heatmaps(this)), OM.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new OM.webVitalsAutocapture(this)), OM.exceptionObserver && this._extensions.push(this.exceptionObserver = new OM.exceptionObserver(this)), OM.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new OM.deadClicksAutocapture(this, en)), OM.toolbar && this._extensions.push(this.toolbar = null !== (zM = this.toolbar) && void 0 !== zM ? zM : new OM.toolbar(this)), OM.experiments && this._extensions.push(this.experiments = null !== (LM = this.experiments) && void 0 !== LM ? LM : new OM.experiments(this)), OM.webMCP && this._extensions.push(this.webMCP = null !== (mM = this.webMCP) && void 0 !== mM ? mM : new OM.webMCP(this)), this._extensions.forEach((MM => {
            MM.initialize && SM.push((() => {
              var rM;
              null === (rM = MM.initialize) || void 0 === rM || rM.call(MM)
            }))
          })), SM.push((() => {
            if (this._pendingRemoteConfig) {
              const MM = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((rM => {
                var iM;
                return null === (iM = rM.onRemoteConfig) || void 0 === iM ? void 0 : iM.call(rM, MM)
              }))
            }
          })), this._processInitTaskQueue(SM, iM)
        }
        _processInitTaskQueue(MM, rM) {
          for (; MM.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - rM >= 30 && MM.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(MM, rM)
            }), 0));
            const iM = MM.shift();
            if (iM) try {
              iM()
            } catch (MM) {
              fa.error("Error initializing extension:", MM)
            }
          }
          const iM = Math.round(performance.now() - rM);
          this.register_for_session({
            [gr]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [ur]: iM
          }), this.config.__preview_deferred_init_extensions && fa.info(`PostHog extensions initialized (${iM}ms)`)
        }
        _onRemoteConfig(MM) {
          if (!cr || !cr.body) return fa.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(MM)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = MM), this._lastRemoteConfig = MM, this.compression = void 0, MM.ok) {
            var rM;
            const iM = MM.config;
            iM.supportedCompression && !this.config.disable_compression && (this.compression = mi(iM.supportedCompression, UQ.GZipJS) ? UQ.GZipJS : mi(iM.supportedCompression, UQ.Base64) ? UQ.Base64 : void 0), (null === (rM = iM.analytics) || void 0 === rM ? void 0 : rM.endpoint) && (this.analyticsDefaultEndpoint = iM.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : vr
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", MM), this._extensions.forEach((rM => {
            var iM;
            return null === (iM = rM.onRemoteConfig) || void 0 === iM ? void 0 : iM.call(rM, MM)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (MM) {
            fa.critical("`loaded` function failed", MM)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == Mi ? void 0 : Mi.hostname)) {
            const MM = Mi.hostname,
              rM = this.config.internal_or_test_user_hostname;
            ("string" == typeof rM ? MM === rM : rM.test(MM)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new xQ(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var MM;
          this.is_capturing() && this.config.request_batching && (null === (MM = this._requestQueue) || void 0 === MM || MM.enable())
        }
        _dom_loaded() {
          this.is_capturing() && Na(this.__request_queue, (MM => this._send_retriable_request(MM))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var MM, rM, iM, OM, SM, jM;
          this._isPageUnloading = !0, null === (MM = this.surveys) || void 0 === MM || null === (rM = MM.handlePageUnload) || void 0 === rM || rM.call(MM), null === (iM = this.metrics) || void 0 === iM || iM.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(Xr), null === (OM = this.logs) || void 0 === OM || OM.flushLogs("sendBeacon"), null === (SM = this._requestQueue) || void 0 === SM || SM.unload(), null === (jM = this._retryQueue) || void 0 === jM || jM.unload()) : this._shouldCapturePageleave() && this.capture(Xr, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(MM) {
          xz(this, MM)
        }
        _send_retriable_request(MM, rM) {
          this._retryQueue ? this._retryQueue.retriableRequest(MM, rM) : this._send_request(rM ? US(US({}, MM), {}, {
            transport: rM
          }) : MM)
        }
        _execute_array(MM) {
          uL++;
          try {
            let rM;
            const iM = [],
              OM = [],
              SM = [];
            Na(MM, (MM => {
              if (MM)
                if (rM = MM[0], Ui(rM)) SM.push(MM);
                else if (Gi(MM)) try {
                MM.call(this)
              } catch (rM) {
                fa.error("Error executing queued PostHog call", MM, rM)
              } else Ui(MM) && "alias" === rM ? iM.push(MM) : Ui(MM) && -1 !== rM.indexOf("capture") && Gi(this[rM]) ? SM.push(MM) : OM.push(MM)
            }));
            const jM = function(MM, rM) {
              Na(MM, (function(MM) {
                try {
                  if (Ui(MM[0])) {
                    let iM = rM;
                    Aa(MM, (function(MM) {
                      iM = iM[MM[0]].apply(iM, MM.slice(1))
                    }))
                  } else rM[MM[0]].apply(rM, MM.slice(1))
                } catch (rM) {
                  fa.error("Error executing queued PostHog call", MM, rM)
                }
              }))
            };
            jM(iM, this), jM(OM, this), jM(SM, this)
          } finally {
            uL--
          }
        }
        push(rM) {
          if (uL > 0 && Ui(rM) && wi(rM[0])) {
            const iM = MM.prototype[rM[0]];
            Gi(iM) && iM.apply(this, rM.slice(1))
          } else this._execute_array([rM])
        }
        get _facebookClickIdChannel() {
          return {
            property: uM,
            persistenceKey: RM,
            cookieName: "_fbc",
            pattern: YL,
            register: (MM, rM) => {
              var iM;
              return null === (iM = this.persistence) || void 0 === iM ? void 0 : iM.register({
                [RM]: {
                  value: MM,
                  delivered: rM
                }
              })
            },
            unregister: () => {
              var MM;
              return null === (MM = this.persistence) || void 0 === MM ? void 0 : MM.unregister(RM)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: pM,
            persistenceKey: WM,
            cookieName: "_fbp",
            pattern: NL,
            register: (MM, rM) => {
              var iM;
              return null === (iM = this.persistence) || void 0 === iM ? void 0 : iM.register({
                [WM]: {
                  value: MM,
                  delivered: rM
                }
              })
            },
            unregister: () => {
              var MM;
              return null === (MM = this.persistence) || void 0 === MM ? void 0 : MM.unregister(WM)
            }
          }
        }
        _getPersistedMetaIdentifier(MM) {
          var rM;
          const iM = null === (rM = this.persistence) || void 0 === rM ? void 0 : rM.get_property(MM.persistenceKey);
          return wi(iM) && MM.pattern.test(iM) ? {
            value: iM,
            delivered: !1
          } : Ci(iM) && wi(iM.value) && MM.pattern.test(iM.value) ? {
            value: iM.value,
            delivered: !0 === iM.delivered
          } : void 0
        }
        _storeMetaIdentifier(MM, rM, iM) {
          return rM === (null == iM ? void 0 : iM.value) ? {
            value: rM,
            pending: !iM.delivered
          } : (MM.register(rM, !1), {
            value: rM,
            pending: !0
          })
        }
        _readMetaCookie(MM) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const rM = Va(MM.cookieName);
          return wi(rM) && MM.pattern.test(rM) ? rM : void 0
        }
        _updateFacebookClickId(MM, rM, iM, OM) {
          if (!this.persistence) return;
          const SM = this._facebookClickIdChannel;
          this.persistence.refreshKey(SM.persistenceKey);
          const jM = this._getPersistedMetaIdentifier(SM);
          if (OM) return void SM.unregister();
          if (iM) return wi(rM) && YL.test(rM) ? this._storeMetaIdentifier(SM, rM, jM) : void SM.unregister();
          const aM = wi(MM) && fL.test(MM) ? MM : void 0,
            PM = this._readMetaCookie(SM);
          return PM && ((MM, rM, iM) => {
            const OM = MM.split(".");
            if (rM) return OM[3] === rM;
            if (!iM) return !0;
            const SM = iM.value.split(".");
            return OM[3] === SM[3] || Number(OM[2]) > Number(SM[2])
          })(PM, aM, jM) ? this._storeMetaIdentifier(SM, PM, jM) : aM ? (null == jM ? void 0 : jM.value.split(".")[3]) === aM ? {
            value: jM.value,
            pending: !jM.delivered
          } : this._storeMetaIdentifier(SM, `fb.1.${Date.now()}.${aM}`, jM) : jM ? {
            value: jM.value,
            pending: !jM.delivered
          } : void 0
        }
        _updateFacebookBrowserId(MM, rM, iM) {
          if (!this.persistence) return;
          const OM = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(OM.persistenceKey);
          const SM = this._getPersistedMetaIdentifier(OM);
          if (iM) return void OM.unregister();
          if (rM) return wi(MM) && NL.test(MM) ? this._storeMetaIdentifier(OM, MM, SM) : void OM.unregister();
          const jM = this._readMetaCookie(OM);
          return jM ? this._storeMetaIdentifier(OM, jM, SM) : SM ? {
            value: SM.value,
            pending: !SM.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(MM, rM) {
          if (!this.persistence) return;
          this.persistence.refreshKey(MM.persistenceKey);
          const iM = this._getPersistedMetaIdentifier(MM);
          (null == iM ? void 0 : iM.value) !== rM || iM.delivered || MM.register(rM, !0)
        }
        capture(MM, rM, iM) {
          var OM, SM;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void fa.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (bi(MM) || !wi(MM)) return void fa.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === MM && this._inCookielessMode()) return;
          const jM = !this.config.opt_out_useragent_filter && this._is_bot();
          if (jM && !this.config.__preview_capture_bot_pageviews) return;
          const aM = (null == iM ? void 0 : iM.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == aM ? void 0 : aM.isRateLimited) return void fa.critical("This capture call is ignored due to client rate limiting.");
          let PM;
          (null == rM ? void 0 : rM.$current_url) && !wi(null == rM ? void 0 : rM.$current_url) && (fa.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == rM || delete rM.$current_url), "$exception" !== MM || (null == iM ? void 0 : iM._originatedFromCaptureException) || fa.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (PM = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const nM = new Date,
            QM = (null == iM ? void 0 : iM.timestamp) || nM,
            zM = zS(null == iM ? void 0 : iM.uuid, SP);
          let LM = {
            uuid: zM,
            event: MM,
            properties: this.calculateEventProperties(MM, rM || {}, QM, zM)
          };
          "$pageview" === MM && this.config.__preview_capture_bot_pageviews && jM && (LM.event = "$bot_pageview", LM.properties.$browser_type = "bot"), aM && (LM.properties.$lib_rate_limit_remaining_tokens = aM.remainingTokens);
          const mM = "$feature_flag_called" === MM && !1 === LM.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == iM ? void 0 : iM.$set) && !mM && (LM.$set = null == iM ? void 0 : iM.$set);
          const HM = Ci(null == rM ? void 0 : rM.$set) ? rM.$set : void 0,
            hM = Ui(null == rM ? void 0 : rM.$unset) ? rM.$unset : [],
            JM = (null == iM ? void 0 : iM.$unset) || [],
            dM = MM => {
              var rM;
              const OM = !!(null == iM ? void 0 : iM.$set) && MM in iM.$set;
              return {
                hasProvided: OM || !!HM && MM in HM,
                provided: OM ? null == iM || null === (rM = iM.$set) || void 0 === rM ? void 0 : rM[MM] : null == HM ? void 0 : HM[MM],
                unset: -1 !== hM.indexOf(MM) || -1 !== JM.indexOf(MM)
              }
            },
            yM = dM(uM),
            lM = dM(pM),
            EM = [{
              channel: this._facebookClickIdChannel,
              hasProvided: yM.hasProvided,
              update: this._updateFacebookClickId(null == PM ? void 0 : PM.fbclid, yM.provided, yM.hasProvided, yM.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: lM.hasProvided,
              update: this._updateFacebookBrowserId(lM.provided, lM.hasProvided, lM.unset)
            }];
          for (const {
              channel: uM,
              hasProvided: pM,
              update: WM
            }
            of EM) WM && !0 === LM.properties.$process_person_profile && WM.pending && !pM && !mM && (LM.$set = US({
            [uM.property]: WM.value
          }, LM.$set));
          const UM = null == iM ? void 0 : iM.$unset;
          UM && (LM.$unset = UM);
          const GM = mM ? void 0 : this._calculate_set_once_properties(null == iM ? void 0 : iM.$set_once, MM !== Kr, MM === Ir);
          if (GM && (LM.$set_once = GM), (null == iM ? void 0 : iM._noTruncate) || (CM = this.config.properties_string_max_length, LM = function(MM, rM) {
              const iM = new Set;
              return function MM(OM, SM) {
                if (OM !== Object(OM)) return rM ? rM(OM) : OM;
                if (iM.has(OM)) return;
                let jM;
                if (iM.add(OM), Ui(OM)) jM = [], Na(OM, (rM => {
                  jM.push(MM(rM))
                }));
                else {
                  const rM = {};
                  Aa(fi(OM) ? Xa(OM) : OM, ((OM, SM) => {
                    iM.has(OM) || (rM[SM] = MM(OM, SM))
                  })), jM = rM
                }
                return jM
              }(MM)
            }(LM, (MM => wi(MM) ? MM.slice(0, CM) : MM))), LM.timestamp = QM, bi(null == iM ? void 0 : iM.timestamp) || (LM.properties.$event_time_override_provided = !0, LM.properties.$event_time_override_system_time = nM), mM && (LM.properties = function(MM) {
              let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const iM = {},
                OM = rM => {
                  void 0 !== MM[rM] && (iM[rM] = MM[rM])
                };
              return yj.forEach(OM), rM.forEach(OM), iM
            }(LM.properties, AL)), MM === gQ || MM === uQ) {
            const iM = null == rM ? void 0 : rM[RQ],
              OM = null == rM ? void 0 : rM[pQ];
            JL({
              id: iM,
              current_iteration: OM
            }), LM.$set = US(US({}, LM.$set), {}, {
              [iL({
                id: iM,
                current_iteration: OM
              }, MM === uQ ? "responded" : "dismissed")]: !0
            })
          } else MM === tQ && (LM.$set = US(US({}, LM.$set), {}, {
            [WQ]: (new Date).toISOString()
          }));
          var CM;
          if (MM === ZQ) {
            const MM = null == rM ? void 0 : rM[fQ];
            MM && (LM.$set = US(US({}, LM.$set), {}, {
              [`${oQ}/${MM}`]: (new Date).toISOString()
            }))
          }
          const eM = US(US({}, LM.properties.$set), LM.$set);
          if (ei(eM) || this.setPersonPropertiesForFlags(eM), !ui(this.config.before_send)) {
            const MM = this._runBeforeSend(LM);
            if (!MM) return;
            LM = MM, LM.uuid = zS(LM.uuid, SP)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && oL(MM) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const bM = EM.filter((MM => {
            let {
              channel: rM,
              update: iM
            } = MM;
            var OM, SM, jM;
            const aM = null !== (OM = null === (SM = LM.$set) || void 0 === SM ? void 0 : SM[rM.property]) && void 0 !== OM ? OM : Ci(null === (jM = LM.properties) || void 0 === jM ? void 0 : jM.$set) ? LM.properties.$set[rM.property] : void 0;
            return (null == iM ? void 0 : iM.pending) && aM === iM.value
          }));
          this._internalEventEmitter.emit("eventCaptured", LM);
          const wM = null !== (OM = null == iM ? void 0 : iM._url) && void 0 !== OM ? OM : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            tM = "recordings" === (null == iM ? void 0 : iM._batchKey) || /\/s\/(?:\?|$)/.test(wM),
            gM = US(US(US({
              method: "POST",
              url: wM,
              data: LM,
              compression: "best-available",
              preferSyncCompression: null == iM ? void 0 : iM.send_instantly,
              timestampMode: tM ? "body" : "capture-body",
              batchKey: null == iM ? void 0 : iM._batchKey
            }, tM && (null === (SM = LM.properties) || void 0 === SM ? void 0 : SM.$session_id) ? {
              batchGroup: LM.properties.$session_id + (LM.properties.$window_id ? `-${LM.properties.$window_id}` : "")
            } : {}), (null == iM ? void 0 : iM.transport) ? {
              transport: iM.transport
            } : {}), bM.length ? {
              fireCallbackOnDrop: !0,
              callback: MM => {
                if (MM.statusCode >= 200 && 300 > MM.statusCode)
                  for (const {
                      channel: rM,
                      update: iM
                    }
                    of bM) this._markMetaIdentifierDelivered(rM, iM.value)
              }
            } : {});
          if (!this.config.request_batching || iM && !(null == iM ? void 0 : iM._batchKey) || (null == iM ? void 0 : iM.send_instantly)) {
            var RM;
            let MM;
            !gM.transport && !gM.callback && ei(null !== (RM = this.config.request_headers) && void 0 !== RM ? RM : {}) && this._isPageUnloading && (MM = "sendBeacon"), this._send_retriable_request(gM, MM)
          } else this._requestQueue.enqueue(gM);
          return LM
        }
        _addCaptureHook(MM) {
          return this.on("eventCaptured", (rM => MM(rM.event, rM)))
        }
        getExtension(MM) {
          var rM;
          return null === (rM = this._browserClientAdapter) || void 0 === rM ? void 0 : rM.getExtension(MM)
        }
        _getBrowserClientAdapter() {
          var MM;
          return null !== (MM = this._browserClientAdapter) && void 0 !== MM ? MM : this._browserClientAdapter = new tL(this)
        }
        _registerExtensionEventProperties(MM) {
          this._extensionEventPropertyProducers.push(MM);
          let rM = !0;
          return () => {
            if (!rM) return;
            rM = !1;
            const iM = this._extensionEventPropertyProducers.indexOf(MM); - 1 !== iM && this._extensionEventPropertyProducers.splice(iM, 1)
          }
        }
        _processCookieIdentityChange() {
          let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var rM, iM, OM;
          return !!(null === (rM = this.persistence) || void 0 === rM ? void 0 : rM.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (OM = this.sessionPersistence) || void 0 === OM || OM.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (iM = this.featureFlags) || void 0 === iM || iM.reset(), MM && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(MM, rM, iM, OM, jM) {
          if (iM = iM || new Date, !this.persistence || !this.sessionPersistence) return rM;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const aM = jM ? void 0 : this.persistence.remove_event_timer(MM);
          let PM = US({}, rM);
          if (PM.token = this.config.token, PM.$config_defaults = this.config.defaults, this._inCookielessMode() && (PM[tr] = !0), "$snapshot" === MM) {
            const MM = US(US({}, this.persistence.properties()), this.sessionPersistence.properties());
            return PM.distinct_id = MM.distinct_id, (!wi(PM.distinct_id) && !Ri(PM.distinct_id) || ti(PM.distinct_id)) && fa.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), PM
          }
          const nM = function(MM, rM, iM) {
            let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var jM, aM, PM, nM;
            if (!ji) return {};
            const QM = MM ? [...Xn, ...rM || []] : [],
              [zM, LM] = VO(ji),
              [mM, HM] = function(MM) {
                for (let rM = 0; iS.length > rM; rM++) {
                  const [iM, OM, SM] = iS[rM], jM = MM.match(iM);
                  if (jM) {
                    const rM = SM && MM.match(SM) || jM;
                    return [OM, (null == rM ? void 0 : rM[1]) || ""]
                  }
                }
                return ["", ""]
              }(ji),
              hM = function() {
                const MM = "u" > typeof navigator ? navigator : void 0;
                return (null == MM ? void 0 : MM.brave) ? {
                  brave: !0
                } : {}
              }(),
              JM = {};
            bi(iM) || (JM.detectGoogleSearchApp = iM);
            const dM = {},
              yM = null === (jM = navigator) || void 0 === jM || null === (jM = jM.userAgentData) || void 0 === jM ? void 0 : jM.platform,
              lM = null === (aM = navigator) || void 0 === aM ? void 0 : aM.maxTouchPoints,
              EM = null == qr || null === (PM = qr.screen) || void 0 === PM ? void 0 : PM.width,
              UM = null == qr || null === (nM = qr.screen) || void 0 === nM ? void 0 : nM.height,
              GM = null == qr ? void 0 : qr.devicePixelRatio;
            bi(yM) || (dM.userAgentDataPlatform = yM), bi(lM) || (dM.maxTouchPoints = lM), bi(EM) || (dM.screenWidth = EM), bi(UM) || (dM.screenHeight = UM), bi(GM) || (dM.devicePixelRatio = GM);
            const CM = xa(Ba({
              $os: zM,
              $os_version: LM,
              $browser: IO(ji, navigator.vendor, hM, JM),
              $webview_app: mM,
              $webview_app_version: HM,
              $device: cO(ji),
              $device_type: MS(ji, dM),
              $timezone: Zn(),
              $timezone_offset: aQ()
            }), {
              $current_url: Fn(OM ? mS(null == Mi ? void 0 : Mi.href) : null == Mi ? void 0 : Mi.href, QM, Kn),
              $host: null == Mi ? void 0 : Mi.host,
              $pathname: null == Mi ? void 0 : Mi.pathname,
              $raw_user_agent: ji.length > 1e3 ? ji.substring(0, 997) + "..." : ji,
              $browser_version: qO(ji, navigator.vendor, hM, JM),
              $browser_language: MQ(),
              $browser_language_prefix: rQ(),
              $screen_height: null == qr ? void 0 : qr.screen.height,
              $screen_width: null == qr ? void 0 : qr.screen.width,
              $viewport_height: null == qr ? void 0 : qr.innerHeight,
              $viewport_width: null == qr ? void 0 : qr.innerWidth,
              $lib: SM.LIB_NAME,
              $lib_version: SM.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return SM.SDK_DIST_CHANNEL && (CM.$sdk_dist_channel = SM.SDK_DIST_CHANNEL), CM
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: MM,
              windowId: rM
            } = this.sessionManager.checkAndGetSessionAndWindowId(jM, iM.getTime(), !0);
            PM.$session_id = MM, PM.$window_id = rM
          }
          this.sessionPropsManager && xa(PM, this.sessionPropsManager.getSessionProps());
          try {
            var QM;
            if (this.sessionRecording) {
              const rM = this.sessionRecording.sdkDebugProperties,
                iM = !this._replayDebugPropertiesPaused && oL(MM);
              for (const MM in rM)(iM || mi(kL, MM)) && (PM[MM] = rM[MM])
            }
            PM.$sdk_debug_retry_queue_size = null === (QM = this._retryQueue) || void 0 === QM ? void 0 : QM.length
          } catch (MM) {
            PM.$sdk_debug_error_capturing_properties = String(MM)
          }
          let zM;
          if (this.requestRouter.region === QL && (PM.$lib_custom_api_host = this.config.api_host), zM = "$pageview" !== MM || jM ? "$pageleave" !== MM || jM ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(iM) : this.pageViewManager.doPageView(iM, OM), PM = xa(PM, zM), "$pageview" === MM && cr && (PM.title = cr.title), !bi(aM)) {
            const MM = iM.getTime() - aM;
            PM.$duration = parseFloat((MM / 1e3).toFixed(3))
          }
          ji && this.config.opt_out_useragent_filter && (PM.$browser_type = this._is_bot() ? "bot" : "browser");
          const LM = this.persistence.properties(),
            mM = this.sessionPersistence.properties(),
            HM = PM.$groups,
            hM = LM.$groups;
          Ci(HM) && !ei(HM) && (PM.$groups = US(US({}, Ci(hM) ? hM : {}), HM)), Aa(["$referrer", "$referring_domain"], (MM => {
            MM in LM && delete mM[MM]
          }));
          const JM = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const SM of this._extensionEventPropertyProducers.slice()) try {
              xa(JM, SM())
            } catch (MM) {
              fa.error("Failed to produce browser extension event properties", MM)
            }
          PM = xa({}, nM, LM, mM, US(US({}, JM), PM)), PM.$is_identified = this._isIdentified(), Ui(this.config.property_denylist) ? Aa(this.config.property_denylist, (function(MM) {
            delete PM[MM]
          })) : fa.error(DL + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const dM = this.config.sanitize_properties;
          dM && (fa.error(sL), PM = dM(PM, MM));
          const yM = this._hasPersonProcessing();
          return PM.$process_person_profile = yM, yM && !jM && this._requirePersonProcessing("_calculate_event_properties"), PM
        }
        _calculate_set_once_properties(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var OM;
          if (!this.persistence || !this._hasPersonProcessing()) return MM;
          if (this._personProcessingSetOncePropertiesSent && !iM) return MM;
          const SM = this.persistence.get_initial_props(),
            jM = null === (OM = this.sessionPropsManager) || void 0 === OM ? void 0 : OM.getSetOnceProps();
          let aM = xa({}, SM, jM || {}, MM || {});
          const PM = this.config.sanitize_properties;
          return PM && (fa.error(sL), aM = PM(aM, "$set_once")), rM && (this._personProcessingSetOncePropertiesSent = !0), ei(aM) ? void 0 : aM
        }
        register(MM, rM) {
          var iM;
          null === (iM = this.persistence) || void 0 === iM || iM.register(MM, rM)
        }
        register_once(MM, rM, iM) {
          var OM;
          null === (OM = this.persistence) || void 0 === OM || OM.register_once(MM, rM, iM)
        }
        register_for_session(MM) {
          var rM, iM;
          null === (rM = this.persistence) || void 0 === rM || rM.syncCookieProperties(), this._processCookieIdentityChange(), null === (iM = this.sessionPersistence) || void 0 === iM || iM.register(MM), Object.keys(MM).forEach((MM => this._sessionRegisteredPropKeys.add(MM))), this._persistSessionRegisteredPropKeys()
        }
        unregister(MM) {
          var rM;
          null === (rM = this.persistence) || void 0 === rM || rM.unregister(MM)
        }
        unregister_for_session(MM) {
          var rM;
          null === (rM = this.sessionPersistence) || void 0 === rM || rM.unregister(MM), this._sessionRegisteredPropKeys.delete(MM), this._persistSessionRegisteredPropKeys()
        }
        _register_single(MM, rM) {
          this.register({
            [MM]: rM
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((MM => {
            var rM;
            null === (rM = this.sessionPersistence) || void 0 === rM || rM.unregister(MM)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var MM;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (MM = this.sessionPersistence) || void 0 === MM ? void 0 : MM._disabled) || !wP._is_supported()) return void wP._remove(this._sessionRegisteredPropertiesStorageKey);
          const rM = [];
          this._sessionRegisteredPropKeys.forEach((MM => rM.push(MM))), rM.length > 0 ? wP._set(this._sessionRegisteredPropertiesStorageKey, rM) : wP._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(MM, rM) {
          var iM;
          return null === (iM = this.featureFlags) || void 0 === iM ? void 0 : iM.getFeatureFlag(MM, rM)
        }
        getFeatureFlagPayload(MM) {
          var rM;
          return null === (rM = this.featureFlags) || void 0 === rM ? void 0 : rM.getFeatureFlagPayload(MM)
        }
        getFeatureFlagResult(MM, rM) {
          var iM;
          return null === (iM = this.featureFlags) || void 0 === iM ? void 0 : iM.getFeatureFlagResult(MM, rM)
        }
        getAllFeatureFlags() {
          var MM, rM;
          return null !== (MM = null === (rM = this.featureFlags) || void 0 === rM ? void 0 : rM.getAllFeatureFlags()) && void 0 !== MM ? MM : []
        }
        isFeatureEnabled(MM, rM) {
          var iM, OM;
          return null !== (iM = null === (OM = this.featureFlags) || void 0 === OM ? void 0 : OM.isFeatureEnabled(MM, rM)) && void 0 !== iM ? iM : null == rM ? void 0 : rM.defaultValue
        }
        reloadFeatureFlags() {
          var MM;
          null === (MM = this.featureFlags) || void 0 === MM || MM.reloadFeatureFlags()
        }
        updateFlags(MM, rM, iM) {
          var OM;
          null === (OM = this.featureFlags) || void 0 === OM || OM.updateFlags(MM, rM, iM)
        }
        updateEarlyAccessFeatureEnrollment(MM, rM, iM) {
          var OM;
          null === (OM = this.featureFlags) || void 0 === OM || OM.updateEarlyAccessFeatureEnrollment(MM, rM, iM)
        }
        getEarlyAccessFeatures(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0;
          var OM;
          return null === (OM = this.featureFlags) || void 0 === OM ? void 0 : OM.getEarlyAccessFeatures(MM, rM, iM)
        }
        on(MM, rM) {
          return this._internalEventEmitter.on(MM, rM)
        }
        onFeatureFlags(MM) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(MM) : (MM([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(MM) {
          return this.surveys ? this.surveys.onSurveysLoaded(MM) : (MM([], {
            isLoaded: !1,
            error: WL
          }), () => {})
        }
        onSessionId(MM) {
          var rM, iM;
          return null !== (rM = null === (iM = this.sessionManager) || void 0 === iM ? void 0 : iM.onSessionId(MM)) && void 0 !== rM ? rM : () => {}
        }
        getSurveys(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(MM, rM) : MM([], {
            isLoaded: !1,
            error: WL
          })
        }
        getActiveMatchingSurveys(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(MM, rM) : MM([], {
            isLoaded: !1,
            error: WL
          })
        }
        onActiveMatchingSurveysChanged(MM) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(MM) : (MM([], {
            isLoaded: !1,
            error: WL
          }), () => {})
        }
        renderSurvey(MM, rM) {
          var iM;
          null === (iM = this.surveys) || void 0 === iM || iM.renderSurvey(MM, rM)
        }
        displaySurvey(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yL;
          var iM;
          null === (iM = this.surveys) || void 0 === iM || iM.displaySurvey(MM, rM)
        }
        cancelPendingSurvey(MM) {
          var rM;
          null === (rM = this.surveys) || void 0 === rM || rM.cancelPendingSurvey(MM)
        }
        canRenderSurvey(MM) {
          var rM, iM;
          return null !== (rM = null === (iM = this.surveys) || void 0 === iM ? void 0 : iM.canRenderSurvey(MM)) && void 0 !== rM ? rM : {
            visible: !1,
            disabledReason: WL
          }
        }
        canRenderSurveyAsync(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var iM, OM;
          return null !== (iM = null === (OM = this.surveys) || void 0 === OM ? void 0 : OM.canRenderSurveyAsync(MM, rM)) && void 0 !== iM ? iM : Promise.resolve({
            visible: !1,
            disabledReason: WL
          })
        }
        _validateIdentifyId(MM) {
          return !MM || ti(MM) ? (fa.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === MM ? (fa.critical(`The string "${MM}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(MM.toLowerCase()) && !["undefined", "null"].includes(MM.toLowerCase()) || (fa.critical(`The string "${MM}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(MM, rM, iM) {
          if (!this.__loaded || !this.persistence) return fa.uninitializedWarning("posthog.identify");
          if (Ri(MM) && (MM = MM.toString(), fa.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(MM)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const OM = this.get_distinct_id(),
            SM = this.persistence.syncCookieProperties() && this.get_distinct_id() !== OM,
            jM = this._processCookieIdentityChange(!1),
            aM = this.persistence._beginCookieSyncSuppression();
          let PM = !1;
          try {
            const OM = this.get_distinct_id();
            this.register({
              $user_id: MM
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: OM
            }, ""), MM !== OM && MM !== this.get_property("__alias") && (this.unregister(tM), this.register({
              distinct_id: MM
            }));
            const aM = (this.persistence.get_property("$user_state") || "anonymous") === Ar,
              QM = MM !== OM,
              zM = !QM && aM;
            if (QM && aM) {
              var nM;
              const SM = this.config.reuseAnonymousId ? {
                distinct_id: MM
              } : {
                distinct_id: MM,
                $anon_distinct_id: OM
              };
              this.persistence.set_property(lr, xr), this.setPersonPropertiesForFlags({
                $set: rM || {},
                $set_once: iM || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", SM, {
                $set: rM || {},
                $set_once: iM || {}
              }) && (this._cachedPersonProperties = nL(MM, rM, iM)), null === (nM = this.featureFlags) || void 0 === nM || nM.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : OM)
            } else if (zM) {
              this.persistence.set_property(lr, xr);
              const OM = rM || {},
                SM = iM || {};
              this.setPersonPropertiesForFlags({
                $set: OM,
                $set_once: SM
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: OM,
                $set_once: SM
              }) && (this._cachedPersonProperties = nL(MM, rM, iM))
            } else(rM || iM) && this.setPersonProperties(rM, iM);
            QM || SM || jM ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(dM)) : zM && (rM || iM) && this.reloadFeatureFlags(), PM = !0
          } finally {
            aM && this.persistence._endCookieSyncSuppression(PM)
          }
        }
        setPersonProperties(MM, rM) {
          if (!MM && !rM) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const iM = nL(this.get_distinct_id(), MM, rM);
          this._cachedPersonProperties !== iM ? (this.setPersonPropertiesForFlags({
            $set: MM || {},
            $set_once: rM || {}
          }, !0), this.capture("$set", {
            $set: MM || {},
            $set_once: rM || {}
          }) && (this._cachedPersonProperties = iM)) : fa.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(MM) {
          var rM;
          const iM = (Ui(MM) ? MM : [MM]).filter((MM => wi(MM) && MM.length > 0));
          0 !== iM.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (rM = this.featureFlags) || void 0 === rM || rM.unsetPersonPropertiesForFlags(iM, !0), this.capture("$set", {
            $unset: iM
          }), this._cachedPersonProperties = null)
        }
        group(MM, rM, iM) {
          var OM;
          if (!MM || !rM) return void fa.error("posthog.group requires a group type and group key");
          null === (OM = this.persistence) || void 0 === OM || OM.syncCookieProperties(), this._processCookieIdentityChange();
          const SM = this.getGroups(),
            jM = SM[MM] !== rM;
          if (jM && this.resetGroupPropertiesForFlags(MM), this.register({
              $groups: US(US({}, SM), {}, {
                [MM]: rM
              })
            }), (jM || iM) && this._hasPersonProcessing()) {
            const OM = {
              $group_type: MM,
              $group_key: rM
            };
            iM && (OM.$group_set = iM), this.capture(Kr, OM)
          }
          iM && this.setGroupPropertiesForFlags({
            [MM]: iM
          }), jM && !iM && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var iM;
          null === (iM = this.featureFlags) || void 0 === iM || iM.setPersonPropertiesForFlags(MM, rM)
        }
        resetPersonPropertiesForFlags() {
          let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var rM;
          null === (rM = this.featureFlags) || void 0 === rM || rM.resetPersonPropertiesForFlags(MM)
        }
        setGroupPropertiesForFlags(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var iM;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (iM = this.featureFlags) || void 0 === iM || iM.setGroupPropertiesForFlags(MM, rM))
        }
        resetGroupPropertiesForFlags(MM) {
          var rM;
          null === (rM = this.featureFlags) || void 0 === rM || rM.resetGroupPropertiesForFlags(MM)
        }
        reset(MM) {
          const rM = si(MM) ? MM : null == MM ? void 0 : MM.resetDeviceID,
            iM = si(MM) || null == MM ? void 0 : MM.bootstrap;
          this._reset(rM, !1, iM)
        }
        _reset(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0;
          var OM, SM, jM, aM, PM, nM;
          if (fa.info("reset"), !this.__loaded) return fa.uninitializedWarning("posthog.reset");
          const QM = null == iM ? void 0 : iM.sessionID;
          this.config.bootstrap = iM || (null === (OM = this._originalUserConfig) || void 0 === OM ? void 0 : OM.bootstrap) || {}, null === (SM = this.featureFlags) || void 0 === SM || null === (jM = SM.updateConfig) || void 0 === jM || jM.call(SM, this.config, this._shouldDisableFlags());
          const zM = this.get_property(bM),
            LM = this.get_property(wM),
            mM = this.get_property(FM);
          null === (aM = this.sessionRecording) || void 0 === aM || aM.flushBeforeIdentityReset();
          const HM = this.is_capturing();
          rM || this.consent.reset(), rM || !HM || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const hM = null === (PM = this.persistence) || void 0 === PM || null === (nM = PM._beginCookieSyncSuppression) || void 0 === nM ? void 0 : nM.call(PM),
            JM = this._isConsentTransition;
          this._isConsentTransition = JM || rM;
          let dM = !1;
          try {
            var yM, lM, EM, UM, GM, CM, eM, tM, gM, uM, RM, pM, WM;
            if (null === (yM = this.persistence) || void 0 === yM || yM.clear(), null === (lM = this.sessionPersistence) || void 0 === lM || lM.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), bi(mM) || null === (uM = this.persistence) || void 0 === uM || uM.register({
                $session_recording_remote_config: mM
              }), null === (EM = this.surveys) || void 0 === EM || EM.reset(), null === (UM = this.featureFlags) || void 0 === UM || UM.reset(), null === (GM = this.conversations) || void 0 === GM || GM.reset(), null === (CM = this.logs) || void 0 === CM || CM.reset(), null === (eM = this.metrics) || void 0 === eM || eM.reset(), null === (tM = this.persistence) || void 0 === tM || tM.set_property("$user_state", "anonymous"), null === (gM = this.sessionManager) || void 0 === gM || gM.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: wr,
              $device_id: null
            }, "");
            else {
              const rM = this.config.get_device_id(SP());
              this.register_once({
                distinct_id: rM,
                $device_id: MM ? rM : zM
              }, ""), MM || bi(LM) || this.register({
                [wM]: LM
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), iM && (iM.distinctID && !this._inCookielessMode() && (null === (WM = this.persistence) || void 0 === WM || WM.set_property("$user_state", iM.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: iM.distinctID
              })), null === (RM = this.featureFlags) || void 0 === RM || RM.initialize(), !ui(QM) && !(null === (pM = this.sessionManager) || void 0 === pM ? void 0 : pM.setBootstrapSessionId(QM, !0)))) {
              const MM = US({}, iM);
              delete MM.sessionID, this.config.bootstrap = MM
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, dM = !0
          } finally {
            var sM, DM;
            this._isConsentTransition = JM, hM && (null === (sM = this.persistence) || void 0 === sM || null === (DM = sM._endCookieSyncSuppression) || void 0 === DM || DM.call(sM, dM))
          }
          this.reloadFeatureFlags()
        }
        shutdown(MM) {
          var rM = this;
          return Bi((function*() {
            if (!rM.__loaded) return void fa.uninitializedWarning("posthog.shutdown");
            rM._isShutdown = !0, clearTimeout(rM._extensionInitTimeout), rM._extensionInitTimeout = void 0;
            const MM = rM._featureFlagsReloadingUnsubscribe;
            rM._featureFlagsReloadingUnsubscribe = void 0;
            for (const iM of [() => {
                var MM;
                return null === (MM = rM.sessionRecording) || void 0 === MM ? void 0 : MM.dispose()
              }, () => {
                var MM;
                return null === (MM = rM.logs) || void 0 === MM ? void 0 : MM.flushLogs("sendBeacon")
              }, () => {
                var MM;
                return null === (MM = rM.metrics) || void 0 === MM ? void 0 : MM.flush("sendBeacon")
              }, () => {
                var MM;
                return null === (MM = rM.metrics) || void 0 === MM ? void 0 : MM.dispose()
              }, () => {
                var MM;
                return null === (MM = rM.logs) || void 0 === MM ? void 0 : MM.dispose()
              }, () => {
                var MM;
                return null === (MM = rM.surveys) || void 0 === MM ? void 0 : MM.dispose()
              }, () => {
                var MM;
                return null === (MM = rM.autocapture) || void 0 === MM ? void 0 : MM.dispose()
              }, () => null == MM ? void 0 : MM(), () => {
                var MM;
                return null === (MM = rM._requestQueue) || void 0 === MM ? void 0 : MM.unload()
              }, () => {
                var MM;
                return null === (MM = rM._retryQueue) || void 0 === MM ? void 0 : MM.unload()
              }, () => {
                var MM;
                return null === (MM = rM.featureFlags) || void 0 === MM ? void 0 : MM.destroy()
              }, () => {
                var MM;
                return null === (MM = rM.persistence) || void 0 === MM ? void 0 : MM.destroy()
              }, () => {
                var MM;
                return null === (MM = rM.sessionPersistence) || void 0 === MM ? void 0 : MM.destroy()
              }]) try {
              const MM = iM();
              MM && Gi(MM.then) && MM.then(void 0, (MM => {
                fa.error("Error during shutdown", MM)
              }))
            } catch (MM) {
              fa.error("Error during shutdown", MM)
            }
          }))()
        }
        setIdentity(MM, rM) {
          var iM;
          delete this.config.identity_claims, this.config.identity_distinct_id = MM, this.config.identity_hash = rM, this.alias(MM), null === (iM = this.conversations) || void 0 === iM || iM._onIdentityChanged()
        }
        clearIdentity() {
          var MM;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (MM = this.conversations) || void 0 === MM || MM._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var MM, rM;
          return null !== (MM = null === (rM = this.sessionManager) || void 0 === rM ? void 0 : rM.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== MM ? MM : ""
        }
        get_session_replay_url(MM) {
          if (!this.sessionManager) return "";
          const {
            sessionId: rM,
            sessionStartTimestamp: iM
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let OM = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${rM}`);
          if ((null == MM ? void 0 : MM.withTimestamp) && iM) {
            var SM;
            const rM = null !== (SM = MM.timestampLookBack) && void 0 !== SM ? SM : 10;
            if (!iM) return OM;
            OM += `?t=${Math.max(Math.floor(((new Date).getTime()-iM)/1e3)-rM,0)}`
          }
          return OM
        }
        alias(MM, rM) {
          return MM === this.get_property("$people_distinct_id") ? (fa.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (bi(rM) && (rM = this.get_distinct_id()), MM !== rM ? (this._register_single(tM, MM), this.capture("$create_alias", {
            alias: MM,
            distinct_id: rM
          })) : (fa.warn("alias matches current distinct_id - skipping api call."), this.identify(MM), -1)) : void 0
        }
        set_config(MM) {
          const rM = US({}, this.config);
          if (Ci(MM)) {
            var iM, OM, SM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM;
            xa(this.config, XL(MM));
            const GM = this._is_persistence_disabled();
            if (this.persistence) {
              const MM = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var yM, lM;
              if (MM && this.sessionPersistence !== this.persistence && (null === (yM = this.sessionPersistence) || void 0 === yM || yM.remove(), null === (lM = this.sessionPersistence) || void 0 === lM || lM.destroy()), this.persistence.update_config(this.config, rM, GM), MM) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new EQ(US(US({}, this.config), {}, {
                persistence: "sessionStorage"
              }), GM, !1);
              else {
                var EM;
                null === (EM = this.sessionPersistence) || void 0 === EM || EM.update_config(US(US({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), US(US({}, rM), {}, {
                  persistence: "sessionStorage"
                }), GM)
              }
            }
            const CM = this._checkLocalStorageForDebug(this.config.debug);
            var UM;
            si(CM) && (this.config.debug = CM), si(this.config.debug) && (this.config.debug ? (jM.DEBUG = !0, LP._is_supported() && LP._set("ph_debug", !0), fa.info("set_config", {
              config: MM,
              oldConfig: rM,
              newConfig: US({}, this.config)
            })) : (jM.DEBUG = !1, LP._is_supported() && LP._remove("ph_debug"))), null === (iM = this.featureFlags) || void 0 === iM || null === (OM = iM.updateConfig) || void 0 === OM || OM.call(iM, this.config, this._shouldDisableFlags()), null === (SM = this.exceptionObserver) || void 0 === SM || SM.onConfigChange(), null === (aM = this.exceptions) || void 0 === aM || aM.onConfigChange(), null === (PM = this.metrics) || void 0 === PM || PM.onConfigChange(), null === (nM = this.webMCP) || void 0 === nM || nM.startIfEnabled(), null === (QM = this.sessionRecording) || void 0 === QM || QM.startIfEnabledOrStop(), null === (zM = this.tracingHeaders) || void 0 === zM || zM.startIfEnabledOrStop(), null === (LM = this.autocapture) || void 0 === LM || LM.startIfEnabled(), null === (mM = this.heatmaps) || void 0 === mM || mM.startIfEnabled(), ("capture_pageview" in MM || "disable_capture_url_hashes" in MM) && (null === (UM = this.historyAutocapture) || void 0 === UM || UM.startIfEnabledOrStop()), null === (HM = this.exceptionObserver) || void 0 === HM || HM.startIfEnabledOrStop(), null === (hM = this.deadClicksAutocapture) || void 0 === hM || hM.startIfEnabledOrStop(), null === (JM = this.surveys) || void 0 === JM || JM.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (dM = this.externalIntegrations) || void 0 === dM || dM.startIfEnabledOrStop(), !rM.segment && this.config.segment && this.persistence && tn(this, RL, !1)
          }
        }
        _overrideSDKInfo(MM, rM) {
          jM.LIB_NAME = MM, jM.LIB_VERSION = rM
        }
        startSessionRecording(MM) {
          const rM = !0 === MM,
            iM = {
              sampling: rM || !!(null == MM ? void 0 : MM.sampling),
              linked_flag: rM || !!(null == MM ? void 0 : MM.linked_flag),
              url_trigger: rM || !!(null == MM ? void 0 : MM.url_trigger),
              event_trigger: rM || !!(null == MM ? void 0 : MM.event_trigger)
            };
          var OM, SM, jM, aM, PM;
          Object.values(iM).some(Boolean) && (null === (OM = this.sessionManager) || void 0 === OM || OM.checkAndGetSessionAndWindowId(), iM.sampling && (null === (SM = this.sessionRecording) || void 0 === SM || SM.overrideSampling()), iM.linked_flag && (null === (jM = this.sessionRecording) || void 0 === jM || jM.overrideLinkedFlag()), iM.url_trigger && (null === (aM = this.sessionRecording) || void 0 === aM || aM.overrideTrigger("url")), iM.event_trigger && (null === (PM = this.sessionRecording) || void 0 === PM || PM.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var MM;
          return !!(null === (MM = this.sessionRecording) || void 0 === MM ? void 0 : MM.started)
        }
        captureException(MM, rM) {
          try {
            if (!this.exceptions) return;
            const iM = this.exceptions.buildProperties(MM, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(US(US({}, iM), rM))
          } catch (MM) {
            return
          }
        }
        addExceptionStep(MM, rM) {
          var iM;
          null === (iM = this.exceptions) || void 0 === iM || iM.addExceptionStep(MM, rM)
        }
        captureLog(MM) {
          var rM;
          null === (rM = this.logs) || void 0 === rM || rM.captureLog(MM)
        }
        get logger() {
          var rM, iM;
          return null !== (rM = null === (iM = this.logs) || void 0 === iM ? void 0 : iM.logger) && void 0 !== rM ? rM : MM._noopLogger
        }
        startExceptionAutocapture(MM) {
          this.set_config({
            capture_exceptions: null == MM || MM
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(MM) {
          var rM, iM;
          return null !== (rM = null === (iM = this.toolbar) || void 0 === iM ? void 0 : iM.loadToolbar(MM)) && void 0 !== rM && rM
        }
        get_property(MM) {
          var rM;
          return null === (rM = this.persistence) || void 0 === rM ? void 0 : rM.props[MM]
        }
        getSessionProperty(MM) {
          var rM;
          return null === (rM = this.sessionPersistence) || void 0 === rM ? void 0 : rM.props[MM]
        }
        toString() {
          var MM;
          let rM = null !== (MM = this.config.name) && void 0 !== MM ? MM : xL;
          return rM !== xL && (rM = "posthog." + rM), rM
        }
        _isIdentified() {
          var MM, rM;
          return "identified" === (null === (MM = this.persistence) || void 0 === MM ? void 0 : MM.get_property("$user_state")) || "identified" === (null === (rM = this.sessionPersistence) || void 0 === rM ? void 0 : rM.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var MM, rM;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && ei(this.getGroups()) && !(null === (MM = this.persistence) || void 0 === MM || null === (MM = MM.props) || void 0 === MM ? void 0 : MM.__alias) && !(null === (rM = this.persistence) || void 0 === rM || null === (rM = rM.props) || void 0 === rM ? void 0 : rM.$epp))
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
        _requirePersonProcessing(MM) {
          return "never" === this.config.person_profiles ? (fa.error(MM + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(br, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const MM = this.consent.isOptedOut();
          return this.config.disable_persistence || MM && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var MM, rM;
          const iM = this._is_persistence_disabled();
          var OM, SM, jM;
          return this.is_capturing() || null === (OM = this.logs) || void 0 === OM || OM._onOptOut(), (null === (MM = this.persistence) || void 0 === MM ? void 0 : MM._disabled) !== iM && (null === (SM = this.persistence) || void 0 === SM || SM.set_disabled(iM)), (null === (rM = this.sessionPersistence) || void 0 === rM ? void 0 : rM._disabled) !== iM && (null === (jM = this.sessionPersistence) || void 0 === jM || jM.set_disabled(iM)), this._persistSessionRegisteredPropKeys(), iM
        }
        opt_in_capturing(rM) {
          var iM;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var OM, SM, jM, aM, PM, nM;
              null === (OM = this.sessionRecording) || void 0 === OM || OM.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (SM = this.sessionManager) || void 0 === SM || SM.destroy(), null === (jM = this.pageViewManager) || void 0 === jM || jM.destroy(), this.sessionManager = new cz(this), this.pageViewManager = new pn(this), this.persistence && (this.sessionPropsManager = new Kz(this, this.sessionManager, this.persistence));
              const rM = null !== (aM = null === (PM = this.config.__extensionClasses) || void 0 === PM ? void 0 : PM.sessionRecording) && void 0 !== aM ? aM : null === (nM = MM.__defaultExtensionClasses) || void 0 === nM ? void 0 : nM.sessionRecording;
              var QM, zM;
              rM && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new rM(this)), this._lastRemoteConfig && (null === (QM = this.sessionRecording) || void 0 === QM || null === (zM = QM.onRemoteConfig) || void 0 === zM || zM.call(QM, this._lastRemoteConfig)))
            }
            var LM, mM;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (iM = this.sessionRecording) || void 0 === iM || iM.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (LM = this.surveys) || void 0 === LM || LM.loadIfEnabled()), (bi(null == rM ? void 0 : rM.captureEventName) || (null == rM ? void 0 : rM.captureEventName)) && this.capture(null !== (mM = null == rM ? void 0 : rM.captureEventName) && void 0 !== mM ? mM : "$opt_in", null == rM ? void 0 : rM.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else fa.warn(pL)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : fa.warn(pL)
        }
        _enterCookielessMode() {
          var MM, rM;
          const iM = this.sessionRecording;
          null == iM || iM.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: wr,
            $device_id: null
          }), this._removeExtension(iM), this.sessionRecording = void 0, null === (MM = this.sessionManager) || void 0 === MM || MM.destroy(), null === (rM = this.pageViewManager) || void 0 === rM || rM.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const MM = this.consent.consent;
          return 1 === MM ? "granted" : 0 === MM ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return Vr ? ML(Vr, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          cr && ("visible" === cr.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(Br, {
            title: cr.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (cr.removeEventListener(GM, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), qa(cr, GM, this._visibilityStateListener)))
        }
        debug(MM) {
          !1 === MM ? (null == qr || qr.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == qr || qr.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const MM = this._originalUserConfig || {};
          return "advanced_disable_flags" in MM ? !!MM.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (fa.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(MM, rM, iM, OM, SM) {
            const jM = rM in MM && !ui(MM[rM]),
              aM = iM in MM && !ui(MM[iM]);
            return jM ? MM[rM] : !!aM && (SM && SM.warn(`Config field '${iM}' is deprecated. Please use '${rM}' instead. The old field will be removed in a future major version.`), MM[iM])
          }(MM, "advanced_disable_flags", "advanced_disable_decide", 0, fa)
        }
        _runBeforeSend(MM) {
          var rM;
          if (ui(this.config.before_send)) return MM;
          const iM = Object.keys(null !== (rM = MM.properties) && void 0 !== rM ? rM : {}).filter(ki),
            OM = Ui(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let SM = MM;
          for (const jM of OM) try {
            if (SM = jM(SM), ui(SM)) {
              const rM = `Event '${MM.event}' was rejected in beforeSend function`;
              return Di(MM.event) ? fa.warn(`${rM}. This can cause unexpected behavior.`) : fa.info(rM), null
            }
            SM.properties && !ei(SM.properties) || fa.warn(`Event '${MM.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (rM) {
            return fa.error(`Error in beforeSend function for event '${MM.event}':`, rM), null
          }
          for (const jM of iM)
            if (SM.properties && ui(SM.properties[jM])) return fa.warn(`Event '${MM.event}' had its '${jM}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return SM
        }
        getPageViewId() {
          var MM;
          return null === (MM = this.pageViewManager._currentPageview) || void 0 === MM ? void 0 : MM.pageViewId
        }
        captureTraceFeedback(MM, rM) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(MM),
            $ai_feedback_text: rM
          })
        }
        captureTraceMetric(MM, rM, iM) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(MM),
            $ai_metric_name: rM,
            $ai_metric_value: String(iM)
          })
        }
        _checkLocalStorageForDebug(MM) {
          const rM = si(MM) && !MM,
            iM = LP._is_supported() && "true" === LP._get("ph_debug");
          return !rM && (!!iM || MM)
        }
      };
    KL.__defaultExtensionClasses = {}, KL._noopLogger = (() => {
        const MM = () => {};
        return {
          trace: MM,
          debug: MM,
          info: MM,
          warn: MM,
          error: MM,
          fatal: MM
        }
      })(),
      function(MM, rM) {
        for (let iM = 0; rM.length > iM; iM++) MM.prototype[rM[iM]] = Fa(MM.prototype[rM[iM]])
      }(KL, ["identify"]);
    var qL = class {
      constructor(MM) {
        this.disabled = !1 === MM;
        const rM = Ci(MM) ? MM : {};
        this.thresholdPx = rM.threshold_px || 30, this.timeoutMs = rM.timeout_ms || 1e3, this.clickCount = rM.click_count || 3, this.clicks = []
      }
      isRageClick(MM, rM, iM) {
        if (this.disabled) return !1;
        const OM = this.clicks[this.clicks.length - 1];
        if (OM && Math.abs(MM - OM.x) + Math.abs(rM - OM.y) < this.thresholdPx && this.timeoutMs > iM - OM.timestamp) {
          if (this.clicks.push({
              x: MM,
              y: rM,
              timestamp: iM
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: MM,
          y: rM,
          timestamp: iM
        }];
        return !1
      }
    };
    const TL = "$copy_autocapture",
      VL = Ya("[AutoCapture]");

    function cL(MM, rM) {
      return rM.length > MM ? rM.slice(0, MM) + "..." : rM
    }

    function Mm(MM) {
      if (MM.previousElementSibling) return MM.previousElementSibling;
      let rM = MM;
      do {
        rM = rM.previousSibling
      } while (rM && !RP(rM));
      return rM
    }
    var rm = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(MM) {
          var rM;
          if (!an(MM)) return !0;
          const iM = null !== (rM = this._refreshConfig().css_selector_ignorelist) && void 0 !== rM ? rM : FP,
            OM = new Set;
          let SM = MM;
          for (; SM;) {
            if (OM.size >= 1e3 || OM.has(SM)) return !0;
            OM.add(SM);
            const MM = SM,
              rM = ZP(MM);
            if (mi(rM, "ph-no-capture") || mi(rM, "ph-sensitive") || Pn(MM) || iM.some((rM => AP(MM, rM)))) return !0;
            const jM = SM.parentNode;
            SM = sP(jM) ? jM.host : jM && RP(jM) ? jM : null
          }
          return !1
        }
        _trackPointer(MM) {
          if (!this.isEnabled || "pointercancel" === MM.type) return void this._clearPointer();
          if ("pointerdown" === MM.type) {
            this._clearPointer();
            const iM = YP(MM);
            var rM;
            return void(MM.isPrimary && 0 === MM.button && !MM.ctrlKey && iM && RP(iM) && (this._pointerDown = {
              target: iM,
              excluded: this._isExcludedPointerTarget(iM),
              id: MM.pointerId,
              x: MM.clientX,
              y: MM.clientY,
              released: !1,
              distinctId: null === (rM = this._client) || void 0 === rM ? void 0 : rM.distinctId
            }))
          }
          const iM = this._pointerDown;
          iM && (MM.pointerId !== iM.id || Math.abs(MM.clientX - iM.x) > 5 || Math.abs(MM.clientY - iM.y) > 5 ? this._clearPointer() : "pointerup" === MM.type && (iM.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(MM) {
          var rM;
          const iM = this._pointerDown;
          this._clearPointer();
          const OM = YP(MM);
          if ((null == iM ? void 0 : iM.released) && iM.target.isConnected && iM.distinctId === (null === (rM = this._client) || void 0 === rM ? void 0 : rM.distinctId) && MM.pointerId === iM.id && (MM.detail > 0 || "touch" === MM.pointerType || "pen" === MM.pointerType) && 0 === MM.button && 5 >= Math.abs(MM.clientX - iM.x) && 5 >= Math.abs(MM.clientY - iM.y) && OM && (pP(OM, "html") || pP(OM, "body"))) {
            var SM;
            if (iM.excluded) return null;
            const MM = null !== (SM = this._refreshConfig().css_selector_ignorelist) && void 0 !== SM ? SM : FP;
            return [OM, null == cr ? void 0 : cr.documentElement, null == cr ? void 0 : cr.body].some((rM => {
              if (!rM) return !1;
              const iM = ZP(rM);
              return mi(iM, "ph-no-capture") || mi(iM, "ph-sensitive") || !an(rM) || Pn(rM) || MM.some((MM => AP(rM, MM)))
            })) ? null : iM.target
          }
        }
        constructor(MM) {
          this._configSource = MM, this.name = GL, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new qL(this._config.rageclick), this._elementSelectors = null
        }
        setup(MM) {
          this._compileUrlPatterns(), this._client = MM;
          const rM = MM.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? rM.dispose() : (this._remoteConfigSubscription = rM, this.startIfEnabled())
        }
        dispose() {
          var MM;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (MM = this._remoteConfigSubscription) || void 0 === MM || MM.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var MM, rM;
          return this._refreshConfig(), this._config.url_allowlist = null === (MM = this._config.url_allowlist) || void 0 === MM ? void 0 : MM.map((MM => new RegExp(MM))), this._config.url_ignorelist = null === (rM = this._config.url_ignorelist) || void 0 === rM ? void 0 : rM.map((MM => new RegExp(MM))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void VL.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!qr || !cr) return;
          const MM = this._domEventHandler = MM => {
            MM = MM || (null == qr ? void 0 : qr.event);
            try {
              if ("blur" === MM.type) return void this._clearPointer();
              if (0 === MM.type.indexOf("pointer")) return void this._trackPointer(MM);
              const rM = "click" === MM.type ? this._recoverClickTarget(MM) : void 0;
              if (gi(rM)) return;
              this._captureEvent(MM, "$autocapture", rM)
            } catch (MM) {
              VL.error("Failed to capture event", MM)
            }
          };
          if (qa(qr, "blur", MM), qa(cr, "submit", MM, {
              capture: !0
            }), qa(cr, "change", MM, {
              capture: !0
            }), qa(cr, "click", MM, {
              capture: !0
            }), Aa(["pointerdown", "pointermove", "pointerup", "pointercancel"], (rM => {
              qa(cr, rM, MM, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const MM = this._copiedTextHandler = MM => {
              MM = MM || (null == qr ? void 0 : qr.event);
              try {
                this._captureEvent(MM, TL)
              } catch (MM) {
                VL.error("Failed to capture clipboard event", MM)
              }
            };
            qa(cr, "copy", MM, {
              capture: !0
            }), qa(cr, "cut", MM, {
              capture: !0
            }), qa(cr, "paste", MM, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == qr || qr.removeEventListener("blur", this._domEventHandler), Aa(["pointerdown", "pointermove", "pointerup", "pointercancel"], (MM => {
            null == cr || cr.removeEventListener(MM, this._domEventHandler, !0)
          })), null == cr || cr.removeEventListener("submit", this._domEventHandler, !0), null == cr || cr.removeEventListener("change", this._domEventHandler, !0), null == cr || cr.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == cr || cr.removeEventListener("copy", this._copiedTextHandler, !0), null == cr || cr.removeEventListener("cut", this._copiedTextHandler, !0), null == cr || cr.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(MM) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !MM.ok) return void this.startIfEnabled();
          const rM = MM.config;
          rM.elementsChainAsString && (this._elementsChainAsString = rM.elementsChainAsString);
          const iM = rM.autocapture_opt_out;
          var OM;
          si(iM) && (null === (OM = this._client) || void 0 === OM || OM.kv.set("$autocapture_disabled_server_side", iM), this._isDisabledServerSide = iM), this.startIfEnabled()
        }
        setElementSelectors(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          MM.size ? this._elementSelectorsByOwner.set(rM, new Set(MM)) : this._elementSelectorsByOwner.delete(rM);
          const iM = new Set;
          this._elementSelectorsByOwner.forEach((MM => {
            MM.forEach((MM => iM.add(MM)))
          })), this._elementSelectors = iM
        }
        getElementSelectors(MM, rM) {
          var iM;
          const OM = [];
          return null === (iM = this._elementSelectors) || void 0 === iM || iM.forEach((iM => {
            const SM = null == cr ? void 0 : cr.querySelectorAll(iM);
            null == SM || SM.forEach((SM => {
              MM !== SM && rM !== SM || mi(OM, iM) || OM.push(iM)
            }))
          })), OM
        }
        get isEnabled() {
          var MM, rM;
          if (this._disposed) return !1;
          const iM = null === (MM = this._client) || void 0 === MM ? void 0 : MM.kv.get(DM),
            OM = this._isDisabledServerSide,
            SM = this._refreshConfig();
          if (!SM.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const jM = SM.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (gi(OM) && !si(iM) && !jM) return !1;
          const aM = null !== (rM = this._isDisabledServerSide) && void 0 !== rM ? rM : !!iM;
          return !!SM.enabled && !aM
        }
        _captureEvent(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            iM = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let OM = iM || YP(MM);
          WP(OM) && (OM = OM.parentNode || null);
          const SM = this._compileUrlPatterns();
          var jM;
          "$autocapture" === rM && "click" === MM.type && MM instanceof MouseEvent && SM.rageclick && (null === (jM = this.rageclicks) || void 0 === jM ? void 0 : jM.isRageClick(MM.clientX, MM.clientY, MM.timeStamp || (new Date).getTime())) && On(OM, SM.rageclick) && this._captureEvent(MM, "$rageclick", iM);
          const aM = rM === TL,
            PM = aM ? US(US({}, SM), {}, {
              dom_event_allowlist: void 0
            }) : SM;
          if (OM && function(MM, rM, iM, OM, SM, jM) {
              var aM;
              if (!qr || Sn(MM)) return !1;
              if ((null == iM ? void 0 : iM.url_allowlist) && !kP(iM.url_allowlist, jM)) return !1;
              if ((null == iM ? void 0 : iM.url_ignorelist) && kP(iM.url_ignorelist, jM)) return !1;
              if (null == iM ? void 0 : iM.dom_event_allowlist) {
                const MM = iM.dom_event_allowlist;
                if (MM && !MM.some((MM => rM.type === MM))) return !1
              }
              const {
                parentIsUsefulElement: PM,
                targetElementList: nM
              } = jn(MM, OM);
              if (! function(MM, rM) {
                  const iM = null == rM ? void 0 : rM.element_allowlist;
                  if (bi(iM)) return !0;
                  for (const OM of MM)
                    if (iM.some((MM => OM.tagName.toLowerCase() === MM))) return !0;
                  return !1
                }(nM, iM)) return !1;
              if (!xP(nM, null == iM ? void 0 : iM.css_selector_allowlist)) return !1;
              if (xP(nM, null !== (aM = null == iM ? void 0 : iM.css_selector_ignorelist) && void 0 !== aM ? aM : FP)) return !1;
              try {
                const iM = qr.getComputedStyle(MM);
                if (iM && "pointer" === iM.getPropertyValue("cursor") && "click" === rM.type) return !0
              } catch (MM) {}
              const QM = MM.tagName.toLowerCase();
              switch (QM) {
                case "html":
                  return !1;
                case "form":
                  return (SM || ["submit"]).indexOf(rM.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (SM || ["change", "click"]).indexOf(rM.type) >= 0;
                default:
                  return PM ? (SM || ["click"]).indexOf(rM.type) >= 0 : (SM || ["click"]).indexOf(rM.type) >= 0 && (NP.indexOf(QM) > -1 || "true" === MM.getAttribute("contenteditable"))
              }
            }(OM, MM, PM, aM, aM ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: SM.getCurrentUrl
              }
            })) {
            var nM;
            const {
              props: iM,
              explicitNoCapture: jM,
              target: aM
            } = function(MM, rM) {
              let {
                e: iM,
                maskAllElementAttributes: OM,
                maskAllText: SM,
                elementAttributeIgnoreList: jM,
                elementsChainAsString: aM,
                disableCaptureUrlHashes: PM
              } = rM;
              var nM, QM;
              if (!RP(MM)) return {
                props: {}
              };
              const zM = [MM],
                LM = new Set([MM]);
              let mM = MM;
              for (; mM.parentNode && !pP(mM, "body") && 1e3 > zM.length;)
                if (sP(mM.parentNode)) {
                  const MM = mM.parentNode.host;
                  if (LM.has(MM)) break;
                  LM.add(MM), zM.push(MM), mM = MM
                } else {
                  if (!RP(mM.parentNode)) break;
                  if (LM.has(mM.parentNode)) break;
                  LM.add(mM.parentNode), zM.push(mM.parentNode), mM = mM.parentNode
                } const HM = "click" === iM.type && "http://www.w3.org/2000/svg" === MM.namespaceURI ? zM.findIndex((MM => pP(MM, "button") || pP(MM, "a"))) : -1;
              HM > 0 && (SM = SM || zM.slice(0, HM + 1).some((MM => !an(MM) || Pn(MM))));
              const hM = [],
                JM = {};
              let dM, yM = !1,
                lM = !1;
              if (Aa(zM, (MM => {
                  const rM = an(MM);
                  if (pP(MM, "a") && !OM && !(null == jM ? void 0 : jM.includes("href"))) {
                    const iM = MM.getAttribute("href");
                    yM = !!(rM && iM && Jn(iM)) && (PM ? mS(iM) : iM)
                  }
                  mi(ZP(MM), "ph-no-capture") && (lM = !0), hM.push(function(MM, rM, iM, OM) {
                    let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const jM = MM.tagName.toLowerCase(),
                      aM = {
                        tag_name: jM
                      };
                    NP.indexOf(jM) > -1 && !iM && (aM.$el_text = "a" === jM.toLowerCase() || "button" === jM.toLowerCase() ? cL(1024, dn(MM)) : cL(1024, fP(MM)));
                    const PM = ZP(MM);
                    rM || (null == OM ? void 0 : OM.includes("class")) || 0 >= PM.length || (aM.classes = PM.filter((function(MM) {
                      return "" !== MM
                    }))), Aa(MM.attributes, (function(iM) {
                      var jM;
                      if ((!Pn(MM) || -1 !== ["name", "id", "class", "aria-label"].indexOf(iM.name)) && !(null == OM ? void 0 : OM.includes(iM.name)) && !rM && Jn(iM.value) && (!wi(jM = iM.name) || "_ngcontent" !== jM.substring(0, 10) && "_nghost" !== jM.substring(0, 7))) {
                        let MM = iM.value;
                        "class" === iM.name && (MM = DP(MM).join(" ")), aM["attr__" + iM.name] = cL(1024, "href" === iM.name && SM ? mS(MM) : MM)
                      }
                    }));
                    let nM = 1,
                      QM = 1,
                      zM = MM;
                    for (; zM = Mm(zM);) nM++, zM.tagName === MM.tagName && QM++;
                    return aM.nth_child = nM, aM.nth_of_type = QM, aM
                  }(MM, OM, SM, jM, PM)), Aa(function(MM) {
                    if (!an(MM)) return {};
                    const rM = {};
                    return Aa(MM.attributes, (function(MM) {
                      if (MM.name && 0 === MM.name.indexOf("data-ph-capture-attribute")) {
                        const iM = MM.name.replace("data-ph-capture-attribute-", ""),
                          OM = MM.value;
                        iM && OM && Jn(OM) && (rM[iM] = OM)
                      }
                    })), rM
                  }(MM), ((MM, rM) => {
                    ({}).hasOwnProperty.call(JM, rM) || (JM[rM] = MM)
                  }))
                })), lM) return {
                props: {},
                explicitNoCapture: lM
              };
              if (HM > 0 && (MM = zM[HM], hM.splice(0, HM)), SM || (hM[0].$el_text = pP(MM, "a") || pP(MM, "button") ? dn(MM) : fP(MM)), yM) {
                var EM, UM;
                hM[0].attr__href = yM;
                const MM = null === (EM = xn(yM)) || void 0 === EM ? void 0 : EM.host,
                  rM = null == qr || null === (UM = qr.location) || void 0 === UM ? void 0 : UM.host;
                MM && rM && MM !== rM && (dM = yM)
              }
              return {
                props: xa((CM = iM.type, {
                  $event_type: CM,
                  $ce_version: 1
                }), aM ? {} : {
                  $elements: hM
                }, {
                  $elements_chain: (GM = hM, Ui(GM) ? function(MM) {
                    return MM.map((MM => {
                      var rM, iM;
                      let OM = "";
                      if (MM.tag_name && (OM += MM.tag_name), MM.attr_class) {
                        MM.attr_class.sort();
                        for (const rM of MM.attr_class) OM += `.${rM.replace(/"/g,"")}`
                      }
                      const SM = US(US(US(US({}, MM.text ? {
                          text: MM.text
                        } : {}), {}, {
                          "nth-child": null !== (rM = MM.nth_child) && void 0 !== rM ? rM : 0,
                          "nth-of-type": null !== (iM = MM.nth_of_type) && void 0 !== iM ? iM : 0
                        }, MM.href ? {
                          href: MM.href
                        } : {}), MM.attr_id ? {
                          attr_id: MM.attr_id
                        } : {}), MM.attributes),
                        jM = {};
                      return va(SM).sort(((MM, rM) => {
                        let [iM] = MM, [OM] = rM;
                        return function(MM, rM) {
                          return rM > MM ? -1 : MM > rM ? 1 : 0
                        }(iM, OM)
                      })).forEach((MM => {
                        let [rM, iM] = MM;
                        return jM[En(rM.toString())] = En(iM.toString())
                      })), OM += ":", OM += va(jM).map((MM => {
                        let [rM, iM] = MM;
                        return `${rM}="${iM}"`
                      })).join(""), OM
                    })).join(";")
                  }(function(MM) {
                    return MM.map((MM => {
                      var rM, iM;
                      const OM = {
                        text: null === (rM = MM.$el_text) || void 0 === rM ? void 0 : rM.slice(0, 400),
                        tag_name: MM.tag_name,
                        href: null === (iM = MM.attr__href) || void 0 === iM ? void 0 : iM.slice(0, 2048),
                        attr_class: Un(MM),
                        attr_id: MM.attr__id,
                        nth_child: MM.nth_child,
                        nth_of_type: MM.nth_of_type,
                        attributes: {}
                      };
                      return va(MM).filter((MM => {
                        let [rM] = MM;
                        return 0 === rM.indexOf("attr__")
                      })).forEach((MM => {
                        let [rM, iM] = MM;
                        return OM.attributes[rM] = iM
                      })), OM
                    }))
                  }(GM)) : "")
                }, (null === (nM = hM[0]) || void 0 === nM ? void 0 : nM.$el_text) ? {
                  $el_text: null === (QM = hM[0]) || void 0 === QM ? void 0 : QM.$el_text
                } : {}, dM && "click" === iM.type ? {
                  $external_click_url: dM
                } : {}, JM),
                target: MM
              };
              var GM, CM
            }(OM, {
              e: MM,
              maskAllElementAttributes: SM.maskAllElementAttributes,
              maskAllText: SM.maskAllText,
              elementAttributeIgnoreList: SM.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: SM.disableCaptureUrlHashes
            });
            if (jM) return !1;
            const PM = this.getElementSelectors(OM, aM);
            if (PM && PM.length > 0 && (iM.$element_selectors = PM), rM === TL) {
              const rM = MM.type || "clipboard";
              if ("paste" !== rM) {
                var QM, zM;
                const MM = null == qr || null === (QM = qr.getSelection()) || void 0 === QM ? void 0 : QM.toString(),
                  rM = oP(MM);
                if (!rM) return !1;
                iM.$selected_content = rM, iM.$clipboard_text_length = null !== (zM = null == MM ? void 0 : MM.length) && void 0 !== zM ? zM : 0
              }
              iM.$copy_type = rM
            }
            return null === (nM = this._client) || void 0 === nM || nM.capture(rM, iM), !0
          }
        }
        isBrowserSupported() {
          return Gi(null == cr ? void 0 : cr.querySelectorAll)
        }
      },
      im = class {
        constructor(MM) {
          this._instance = MM
        }
        refresh(MM) {
          const rM = this._instance.config,
            iM = Ci(rM.autocapture) ? rM.autocapture : void 0;
          MM.enabled = !!rM.autocapture, MM.rageclick = rM.rageclick, MM.maskAllElementAttributes = rM.mask_all_element_attributes, MM.maskAllText = rM.mask_all_text, MM.disableCaptureUrlHashes = rM.disable_capture_url_hashes, MM.getCurrentUrl = rM.get_current_url, MM.remoteRequestsDisabled = this._instance._shouldDisableFlags(), MM.url_allowlist = null == iM ? void 0 : iM.url_allowlist, MM.url_ignorelist = null == iM ? void 0 : iM.url_ignorelist, MM.dom_event_allowlist = null == iM ? void 0 : iM.dom_event_allowlist, MM.element_allowlist = null == iM ? void 0 : iM.element_allowlist, MM.css_selector_allowlist = null == iM ? void 0 : iM.css_selector_allowlist, MM.css_selector_ignorelist = null == iM ? void 0 : iM.css_selector_ignorelist, MM.element_attribute_ignorelist = null == iM ? void 0 : iM.element_attribute_ignorelist, MM.capture_copied_text = null == iM ? void 0 : iM.capture_copied_text
        }
      };
    const Om = Ya("[ExceptionAutocapture]"),
      Sm = () => {},
      jm = MM => {
        var rM;
        if (Gi(MM)) return null !== (rM = MM.__posthog_layer__) && void 0 !== rM ? rM : MM.__rrweb_layer__
      };

    function am(MM, rM, iM) {
      try {
        if (!(rM in MM)) return Sm;
        const OM = {
            next: MM[rM]
          },
          SM = iM((function() {
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            return OM.next.apply(this, rM)
          }));
        return Gi(SM) && (SM.prototype = SM.prototype || {}, Object.defineProperties(SM, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: OM
          }
        })), MM[rM] = SM, () => {
          if (MM[rM] === SM) return void(MM[rM] = OM.next);
          let iM = MM[rM],
            jM = jm(iM);
          for (; jM;) {
            if (jM.next === SM) return void(jM.next = OM.next);
            iM = jM.next, jM = jm(iM)
          }
        }
      } catch (MM) {
        return Sm
      }
    }
    const Pm = Ya("[TracingHeaders]"),
      nm = Ya("[Web Vitals]"),
      Qm = 9e5,
      zm = ["CLS", "FCP", "INP", "LCP"],
      Lm = ["INP", "LCP"],
      mm = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      Hm = "disabled",
      hm = "lazy_loading",
      Jm = Ya("[SessionRecording]"),
      dm = [Rr, pr, Wr, sr, Dr, kr, Zr, or, fr],
      ym = Ya("[Heatmaps]");

    function lm(MM) {
      return Ci(MM) && "clientX" in MM && "clientY" in MM && Ri(MM.clientX) && Ri(MM.clientY)
    }
    const Em = Ya("[Product Tours]"),
      Um = MM => {
        var rM;
        return !MM.config.disable_product_tours && !!(null === (rM = MM.persistence) || void 0 === rM ? void 0 : rM.get_property(AM))
      },
      Gm = ["$set_once", "$set"],
      Cm = Ya("[SiteApps]"),
      em = "Error while initializing PostHog app with config id ",
      bm = (MM, rM) => (null == MM ? void 0 : MM.then) ? MM.then(rM) : rM(MM),
      wm = "SDK is not enabled or survey functionality is not yet loaded",
      tm = "Disabled. Not loading surveys.";
    var gm = class {
      constructor(MM, rM) {
        this._configSource = MM, this._initialClientState = rM, this.name = bL, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = MM => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!MM.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), hL.warn("Remote config unavailable. Not loading surveys.");
          const rM = MM.config.surveys;
          if (ui(rM)) return hL.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = si(rM) ? rM : rM.length > 0, hL.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = MM => {
          this._activeMatchingSurveyCallbacks.slice().forEach((rM => this._notifyActiveMatchingSurveyCallback(rM, MM)))
        }
      }
      setup(MM) {
        if (!this._disposed) return this._initializingClient = MM, bm(MM.kv.initialize(), (() => {
          if (this._initializingClient !== MM || this._disposed) return;
          this._initializingClient = void 0, this._client = MM;
          const rM = MM.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? rM.dispose() : (this._remoteConfigSubscription = rM, this.loadIfEnabled())
        }))
      }
      dispose() {
        var MM, rM, iM, OM, SM;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (MM = this._remoteConfigSubscription) || void 0 === MM || MM.dispose(), this._remoteConfigSubscription = void 0, null === (rM = this._surveyEventReceiver) || void 0 === rM || rM.dispose(), this._surveyEventReceiver = null, null === (iM = this._surveyManager) || void 0 === iM || null === (OM = iM.dispose) || void 0 === OM || OM.call(iM), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((MM => {
          MM.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (SM = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === SM || SM.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((MM => clearTimeout(MM))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var MM, rM;
        null === (MM = this._surveyManager) || void 0 === MM || null === (rM = MM.clearInMemoryInProgressSurveyState) || void 0 === rM || rM.call(MM);
        try {
          var iM;
          null === (iM = this._surveyEventReceiver) || void 0 === iM || iM.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const MM = [];
          for (let rM = 0; rM < localStorage.length; rM++) {
            const iM = localStorage.key(rM);
            ((null == iM ? void 0 : iM.startsWith("seenSurvey_")) || (null == iM ? void 0 : iM.startsWith("inProgressSurvey_"))) && MM.push(iM)
          }
          MM.forEach((MM => localStorage.removeItem(MM)))
        } catch (MM) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const MM = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void hL.info("Already initializing surveys, skipping...");
        if (MM.disableSurveys) return void hL.info(tm);
        if (MM.cookielessMode && this._configSource.isOptedOut()) return void hL.info("Not loading surveys in cookieless mode without consent.");
        const rM = this._configSource.getExtensions();
        if (!rM) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (bi(this._isSurveysEnabled) && !MM.advancedEnableSurveys) return;
        const iM = this._isSurveysEnabled || MM.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const MM = rM.generateSurveys;
          if (MM) return this._completeSurveyInitialization(MM, iM), void(this._isInitializingSurveys = !1);
          const OM = rM.loadExternalDependency;
          if (!OM) return this._handleSurveyLoadError(Nr), void(this._isInitializingSurveys = !1);
          OM((MM => {
            try {
              if (this._disposed) return;
              const rM = this._configSource.getExtensions();
              MM || !(null == rM ? void 0 : rM.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", MM) : this._completeSurveyInitialization(rM.generateSurveys, iM)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (MM) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", MM), MM
        }
      }
      _completeSurveyInitialization(MM, rM) {
        var iM, OM;
        if (this._disposed) return;
        this._surveyManager = MM(rM), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const SM = null === (iM = null !== (OM = this._client) && void 0 !== OM ? OM : this._initialClientState) || void 0 === iM ? void 0 : iM.kv.get(ar);
        SM && this._registerEventOrActionBasedSurveys(SM), hL.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(MM, rM) {
        this._surveyInitializationFailed = !0, hL.error(MM, rM), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: MM
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: MM
        })
      }
      onSurveysLoaded(MM) {
        return this._surveyCallbacks.push(MM), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((rM => rM !== MM))
        }
      }
      getSurveys(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var iM;
        const OM = null !== (iM = this._client) && void 0 !== iM ? iM : this._initialClientState;
        if (!OM || this._disposed) return;
        if (this._config.disableSurveys) return hL.info(tm), MM([]);
        const SM = OM.kv.get(ar);
        if (SM && !rM) return MM(SM, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((rM => {
          let {
            surveys: iM,
            context: OM
          } = rM;
          this._disposed || MM(iM, OM)
        })).catch((MM => hL.error("Error in survey callback", MM)));
        const jM = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: OM.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((MM => {
          try {
            return this._handleSurveyResponse(OM, MM)
          } catch (MM) {
            return hL.error("Error processing surveys response", MM), this._handleSurveyResponse(OM, {
              statusCode: 0,
              error: MM
            })
          }
        }), (MM => this._handleSurveyResponse(OM, {
          statusCode: 0,
          error: MM
        })));
        this._getSurveysInFlightPromise = jM;
        const aM = () => {
          this._getSurveysInFlightPromise === jM && (this._getSurveysInFlightPromise = null)
        };
        jM.then((rM => {
          aM(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(rM.context), MM(rM.surveys, rM.context))
        }), aM).catch((MM => hL.error("Error in survey callback", MM)))
      }
      _sendSurveysRequest(MM, rM) {
        const iM = this._client;
        return iM ? iM.sendRequest(MM, rM) : new Promise((MM => MM({
          statusCode: 0,
          error: new Error(wm)
        })))
      }
      _handleSurveyResponse(MM, rM) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: wm
          }
        };
        const iM = rM.statusCode;
        if (200 !== iM || !rM.json) {
          const MM = `Surveys API could not be loaded, status: ${iM}`;
          return 0 !== iM ? hL.error(MM) : rM.error || hL.warn(MM), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: MM
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const OM = rM.json.surveys || [];
        return MM.kv.set({
          [ar]: OM,
          [Pr]: Date.now()
        }), this._registerEventOrActionBasedSurveys(OM), {
          surveys: OM,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(MM) {
        var rM;
        const iM = MM.filter((MM => function(MM) {
          return !(!MM.start_date || MM.end_date)
        }(MM) && (OL(MM) || function(MM) {
          var rM;
          return !!(null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.actions) || void 0 === rM || null === (rM = rM.values) || void 0 === rM ? void 0 : rM.length)
        }(MM))));
        null === (rM = this._surveyEventReceiver) || void 0 === rM || rM.replace(iM)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var MM, rM;
        const iM = null === (MM = null !== (rM = this._client) && void 0 !== rM ? rM : this._initialClientState) || void 0 === MM ? void 0 : MM.kv.get(Pr);
        return Ri(iM) && Date.now() - iM > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return Ri(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(MM, rM) {
        var iM;
        const OM = {
          id: MM,
          current_iteration: null !== (iM = null == rM ? void 0 : rM.iteration) && void 0 !== iM ? iM : null
        };
        JL(OM);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (MM) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(MM) {
        for (const rM of this._surveyCallbacks) try {
          if (!MM.isLoaded) return rM([], MM);
          this.getSurveys(rM)
        } catch (MM) {
          hL.error("Error in survey callback", MM)
        }
      }
      getActiveMatchingSurveys(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!ui(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(MM, rM);
        hL.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(MM) {
        var rM, iM;
        if (this._disposed) return () => {};
        const OM = {
          callback: MM,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(OM), this._startActiveMatchingSurveyConditions();
        const SM = null === (rM = null !== (iM = this._client) && void 0 !== iM ? iM : this._initialClientState) || void 0 === rM ? void 0 : rM.kv.get(ar);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !SM && !ui(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(OM, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(OM), () => {
          var MM;
          OM.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((MM => MM !== OM)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (MM = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === MM || MM.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var MM, rM, iM;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (MM = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== MM || (this._activeMatchingSurveyConditionsUnsubscribe = null === (rM = (iM = this._configSource).onMatchingConditionsChanged) || void 0 === rM ? void 0 : rM.call(iM, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(MM, rM) {
        if (this._disposed || !MM.active) return;
        const iM = ++MM.revision,
          OM = OM => {
            if (!this._disposed && MM.active && iM === MM.revision) try {
              const iM = null != rM ? rM : {
                  isLoaded: !0
                },
                SM = JSON.stringify([OM, iM]);
              if (SM === MM.lastResult) return;
              MM.lastResult = SM, MM.callback(OM, iM)
            } catch (MM) {
              hL.error("Error in active matching surveys callback", MM)
            }
          };
        try {
          rM && !rM.isLoaded ? OM([]) : this.getActiveMatchingSurveys(OM)
        } catch (MM) {
          hL.error("Error in active matching surveys callback", MM)
        }
      }
      _getSurveyById(MM) {
        let rM = null;
        return this.getSurveys((iM => {
          var OM;
          rM = null !== (OM = iM.find((rM => rM.id === MM))) && void 0 !== OM ? OM : null
        })), rM
      }
      _checkSurveyEligibility(MM) {
        if (ui(this._surveyManager)) return {
          eligible: !1,
          reason: wm
        };
        const rM = "string" == typeof MM ? this._getSurveyById(MM) : MM;
        return rM ? this._surveyManager.checkSurveyEligibility(rM) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(MM) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (ui(this._surveyManager)) return {
          eligible: !1,
          reason: wm
        };
        const rM = "string" == typeof MM ? this._getSurveyById(MM) : MM;
        return rM ? this._surveyManager.checkSurveyRenderability(rM) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(MM) {
        if (ui(this._surveyManager)) return hL.warn("init was not called"), {
          visible: !1,
          disabledReason: wm
        };
        const rM = this._checkSurveyRenderability(MM);
        return {
          visible: rM.eligible,
          disabledReason: rM.reason
        }
      }
      canRenderSurveyAsync(MM, rM) {
        return ui(this._surveyManager) ? (hL.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: wm
        })) : new Promise((iM => {
          this.getSurveys((rM => {
            var OM;
            const SM = null !== (OM = rM.find((rM => rM.id === MM))) && void 0 !== OM ? OM : null;
            if (SM) {
              const MM = this._checkSurveyRenderability(SM);
              iM({
                visible: MM.eligible,
                disabledReason: MM.reason
              })
            } else iM({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), rM)
        }))
      }
      renderSurvey(MM, rM, iM) {
        var OM;
        if (!this._configSource.isCapturing()) return;
        if (ui(this._surveyManager)) return void hL.warn("init was not called");
        const SM = "string" == typeof MM ? this._getSurveyById(MM) : MM;
        if (!(null == SM ? void 0 : SM.id)) return void hL.warn("Survey not found");
        if (!dL.includes(SM.type)) return void hL.warn(`Surveys of type ${SM.type} cannot be rendered in the app`);
        const jM = null == cr ? void 0 : cr.querySelector(rM);
        if (jM) {
          if (null === (OM = SM.appearance) || void 0 === OM ? void 0 : OM.surveyPopupDelaySeconds) {
            hL.info(`Rendering survey ${SM.id} with delay of ${SM.appearance.surveyPopupDelaySeconds} seconds`);
            const MM = setTimeout((() => {
              var rM, OM;
              this._renderTimeouts.delete(MM), !this._disposed && this._configSource.isCapturing() && (hL.info(`Rendering survey ${SM.id} with delay of ${null===(rM=SM.appearance)||void 0===rM?void 0:rM.surveyPopupDelaySeconds} seconds`), null === (OM = this._surveyManager) || void 0 === OM || OM.renderSurvey(SM, jM, iM), hL.info(`Survey ${SM.id} rendered`))
            }), 1e3 * SM.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(MM)
          }
          this._surveyManager.renderSurvey(SM, jM, iM)
        } else hL.warn("Survey element not found")
      }
      displaySurvey(MM, rM) {
        var iM;
        if (!this._configSource.isCapturing()) return;
        if (ui(this._surveyManager)) return void hL.warn("init was not called");
        const OM = this._getSurveyById(MM);
        if (!OM) return void hL.warn("Survey not found");
        let SM = OM;
        if ((null === (iM = OM.appearance) || void 0 === iM ? void 0 : iM.surveyPopupDelaySeconds) && rM.ignoreDelay && (SM = US(US({}, OM), {}, {
            appearance: US(US({}, OM.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), rM.displayType !== sQ && rM.initialResponses && hL.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === rM.ignoreConditions) {
          const MM = this._checkSurveyEligibility(OM);
          if (!MM.eligible) return void hL.warn("Survey is not eligible to be displayed: ", MM.reason)
        }
        rM.displayType !== DQ ? this._surveyManager.handlePopoverSurvey(SM, rM) : this.renderSurvey(SM, rM.selector, rM.properties)
      }
      cancelPendingSurvey(MM) {
        ui(this._surveyManager) ? hL.warn("init was not called") : this._surveyManager.cancelSurvey(MM)
      }
      handlePageUnload() {
        var MM, rM;
        null === (MM = this._surveyManager) || void 0 === MM || null === (rM = MM.handlePageUnload) || void 0 === rM || rM.call(MM)
      }
    };

    function um(MM, rM, iM) {
      if (ui(MM)) return !1;
      switch (iM) {
        case "exact":
          return MM === rM;
        case "contains": {
          const iM = rM.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(iM, "i").test(MM)
        }
        case "regex":
          try {
            return new RegExp(rM).test(MM)
          } catch (MM) {
            return !1
          }
        default:
          return !1
      }
    }
    var Rm = class {
        constructor(MM) {
          this._instance = MM, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new qz, this._checkStep = (MM, rM) => this._checkStepEvent(MM, rM) && this._checkStepUrl(MM, rM) && this._checkStepElement(MM, rM) && this._checkStepProperties(MM, rM), this._checkStepEvent = (MM, rM) => !(null == rM ? void 0 : rM.event) || (null == MM ? void 0 : MM.event) === (null == rM ? void 0 : rM.event)
        }
        init() {
          var MM, rM;
          bi(null === (MM = this._instance) || void 0 === MM ? void 0 : MM._addCaptureHook) || (this._captureHookUnsubscribe = null === (rM = this._instance) || void 0 === rM ? void 0 : rM._addCaptureHook(((MM, rM) => {
            this.on(MM, rM)
          })))
        }
        dispose() {
          var MM, rM;
          null === (MM = this._captureHookUnsubscribe) || void 0 === MM || MM.call(this), this._captureHookUnsubscribe = void 0, null === (rM = this._instance) || void 0 === rM || null === (rM = rM.autocapture) || void 0 === rM || rM.setElementSelectors(new Set, this), this._debugEventEmitter = new qz
        }
        register(MM) {
          var rM, iM;
          if (!bi(null === (rM = this._instance) || void 0 === rM ? void 0 : rM._addCaptureHook) && (MM.forEach((MM => {
              var rM;
              this._actionRegistry.add(MM), null === (rM = MM.steps) || void 0 === rM || rM.forEach((MM => {
                this._actionEvents.add((null == MM ? void 0 : MM.event) || "")
              }))
            })), null === (iM = this._instance) || void 0 === iM ? void 0 : iM.autocapture)) {
            const MM = new Set;
            this._actionRegistry.forEach((rM => {
              var iM;
              null === (iM = rM.steps) || void 0 === iM || iM.forEach((rM => {
                (null == rM ? void 0 : rM.selector) && MM.add(rM.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(MM, this)
          }
        }
        replace(MM) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(MM)
        }
        on(MM, rM) {
          null != rM && 0 != MM.length && (this._actionEvents.has(MM) || this._actionEvents.has(rM.event)) && this._actionRegistry.forEach((MM => {
            this._checkAction(rM, MM) && this._debugEventEmitter.emit("actionCaptured", MM.name)
          }))
        }
        _addActionHook(MM) {
          this.onAction("actionCaptured", (rM => MM(rM)))
        }
        _checkAction(MM, rM) {
          if (null == (null == rM ? void 0 : rM.steps)) return !1;
          for (const iM of rM.steps)
            if (this._checkStep(MM, iM)) return !0;
          return !1
        }
        onAction(MM, rM) {
          return this._debugEventEmitter.on(MM, rM)
        }
        _checkStepUrl(MM, rM) {
          if (null == rM ? void 0 : rM.url) {
            var iM;
            const OM = null == MM || null === (iM = MM.properties) || void 0 === iM ? void 0 : iM.$current_url;
            if (!OM || "string" != typeof OM) return !1;
            if (!um(OM, rM.url, rM.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(MM, rM) {
          return !!this._checkStepHref(MM, rM) && !!this._checkStepText(MM, rM) && !!this._checkStepSelector(MM, rM)
        }
        _checkStepHref(MM, rM) {
          var iM;
          if (!(null == rM ? void 0 : rM.href)) return !0;
          const OM = this._getElementsList(MM);
          if (OM.length > 0) return OM.some((MM => um(MM.href, rM.href, rM.href_matching || "exact")));
          const SM = (null == MM || null === (iM = MM.properties) || void 0 === iM ? void 0 : iM.$elements_chain) || "";
          return !!SM && um(function(MM) {
            const rM = MM.match(/(?::|")href="(.*?)"/);
            return rM ? rM[1] : ""
          }(SM), rM.href, rM.href_matching || "exact")
        }
        _checkStepText(MM, rM) {
          var iM;
          if (!(null == rM ? void 0 : rM.text)) return !0;
          const OM = this._getElementsList(MM);
          if (OM.length > 0) return OM.some((MM => um(MM.text, rM.text, rM.text_matching || "exact") || um(MM.$el_text, rM.text, rM.text_matching || "exact")));
          const SM = (null == MM || null === (iM = MM.properties) || void 0 === iM ? void 0 : iM.$elements_chain) || "";
          return !!SM && (jM = function(MM) {
            const rM = [],
              iM = /(?::|")text="(.*?)"/g;
            let OM;
            for (; !ui(OM = iM.exec(MM));) rM.includes(OM[1]) || rM.push(OM[1]);
            return rM
          }(SM), aM = rM.text, PM = rM.text_matching || "exact", jM.some((MM => um(MM, aM, PM))));
          var jM, aM, PM
        }
        _checkStepSelector(MM, rM) {
          var iM, OM;
          if (!(null == rM ? void 0 : rM.selector)) return !0;
          const SM = null == MM || null === (iM = MM.properties) || void 0 === iM ? void 0 : iM.$element_selectors;
          if (null == SM ? void 0 : SM.includes(rM.selector)) return !0;
          const jM = (null == MM || null === (OM = MM.properties) || void 0 === OM ? void 0 : OM.$elements_chain) || "";
          if (rM.selector_regex && jM) try {
            return new RegExp(rM.selector_regex).test(jM)
          } catch (MM) {
            return !1
          }
          return !1
        }
        _getElementsList(MM) {
          var rM;
          return null == (null == MM || null === (rM = MM.properties) || void 0 === rM ? void 0 : rM.$elements) ? [] : null == MM ? void 0 : MM.properties.$elements
        }
        _checkStepProperties(MM, rM) {
          return !(null == rM ? void 0 : rM.properties) || 0 === rM.properties.length || PL(rM.properties.reduce(((MM, rM) => {
            const iM = Ui(rM.value) ? rM.value.map(String) : null != rM.value ? [String(rM.value)] : [];
            return MM[rM.key] = {
              values: iM,
              operator: rM.operator || "exact"
            }, MM
          }), {}), null == MM ? void 0 : MM.properties)
        }
      },
      pm = class {
        constructor(MM, rM) {
          var iM, OM;
          this._pendingActivatedItems = [], this._instance = MM, this._onActivationChanged = rM, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (iM = this._instance) || void 0 === iM || null === (OM = iM.onSessionId) || void 0 === OM ? void 0 : OM.call(iM, (MM => this._onSessionIdChanged(MM)))
        }
        _shouldPersistArmedActivation(MM) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(MM) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(MM, rM) {
          return !!MM && PL(MM.propertyFilters, null == rM ? void 0 : rM.properties)
        }
        _buildEventToItemMap(MM, rM) {
          const iM = new Map;
          return MM.forEach((MM => {
            var OM;
            null === (OM = MM.conditions) || void 0 === OM || null === (OM = OM[rM]) || void 0 === OM || null === (OM = OM.values) || void 0 === OM || OM.forEach((rM => {
              if (null == rM ? void 0 : rM.name) {
                const OM = iM.get(rM.name) || [];
                OM.push(MM.id), iM.set(rM.name, OM)
              }
            }))
          })), iM
        }
        _getMatchingItems(MM, rM, iM) {
          const OM = (iM === GQ ? this._eventToItems : this._cancelEventToItems).get(MM);
          let SM = [];
          return this._getItems((MM => {
            SM = MM.filter((MM => null == OM ? void 0 : OM.includes(MM.id)))
          })), SM.filter((OM => {
            var SM;
            const jM = null === (SM = OM.conditions) || void 0 === SM || null === (SM = SM[iM]) || void 0 === SM || null === (SM = SM.values) || void 0 === SM ? void 0 : SM.find((rM => rM.name === MM));
            return this._doesEventMatchFilter(jM, rM)
          }))
        }
        register(MM) {
          this._register(MM, !1)
        }
        replace(MM) {
          this._register(MM, !0)
        }
        _register(MM, rM) {
          var iM;
          bi(null === (iM = this._instance) || void 0 === iM ? void 0 : iM._addCaptureHook) || (this._setupEventBasedItems(MM, rM), this._setupActionBasedItems(MM, rM))
        }
        _setupActionBasedItems(MM, rM) {
          const iM = MM.filter((MM => {
            var rM;
            return null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.actions) || void 0 === rM || null === (rM = rM.values) || void 0 === rM ? void 0 : rM.length
          }));
          var OM;
          if (rM && this._actionToItems.clear(), 0 === iM.length) return void(rM && (null === (OM = this._actionMatcher) || void 0 === OM || OM.replace([])));
          this._actionMatcher || (this._actionMatcher = new Rm(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((MM => this.onAction(MM))));
          const SM = [];
          iM.forEach((MM => {
            var rM;
            null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.actions) || void 0 === rM || rM.values.forEach((rM => {
              if (SM.push(rM), rM.name) {
                var iM;
                const OM = null !== (iM = this._actionToItems.get(rM.name)) && void 0 !== iM ? iM : [];
                OM.includes(MM.id) || OM.push(MM.id), this._actionToItems.set(rM.name, OM)
              }
            }))
          })), rM ? this._actionMatcher.replace(SM) : this._actionMatcher.register(SM)
        }
        _mergeItemMaps(MM, rM) {
          rM.forEach(((rM, iM) => {
            var OM;
            const SM = null !== (OM = MM.get(iM)) && void 0 !== OM ? OM : [];
            rM.forEach((MM => {
              SM.includes(MM) || SM.push(MM)
            })), MM.set(iM, SM)
          }))
        }
        _setupEventBasedItems(MM, rM) {
          var iM, OM;
          const SM = MM.filter((MM => {
              var rM, iM;
              return (null === (rM = MM.conditions) || void 0 === rM ? void 0 : rM.events) && (null === (iM = MM.conditions) || void 0 === iM || null === (iM = iM.events) || void 0 === iM || null === (iM = iM.values) || void 0 === iM ? void 0 : iM.length) > 0
            })),
            jM = MM.filter((MM => {
              var rM, iM;
              return (null === (rM = MM.conditions) || void 0 === rM ? void 0 : rM.cancelEvents) && (null === (iM = MM.conditions) || void 0 === iM || null === (iM = iM.cancelEvents) || void 0 === iM || null === (iM = iM.values) || void 0 === iM ? void 0 : iM.length) > 0
            })),
            aM = this._buildEventToItemMap(MM, GQ),
            PM = this._buildEventToItemMap(MM, CQ);
          rM ? (this._eventToItems = aM, this._cancelEventToItems = PM) : (this._mergeItemMaps(this._eventToItems, aM), this._mergeItemMaps(this._cancelEventToItems, PM)), (0 !== SM.length || 0 !== jM.length || MM.some((MM => {
            var rM;
            return null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.actions) || void 0 === rM || null === (rM = rM.values) || void 0 === rM ? void 0 : rM.length
          }))) && (null !== (iM = this._captureHookUnsubscribe) && void 0 !== iM || (this._captureHookUnsubscribe = null === (OM = this._instance) || void 0 === OM ? void 0 : OM._addCaptureHook(((MM, rM) => {
            this.onEvent(MM, rM)
          }))))
        }
        onEvent(MM, rM) {
          var iM, OM;
          const SM = this._getLogger(),
            jM = (null == rM || null === (iM = rM.properties) || void 0 === iM ? void 0 : iM.$survey_id) || (null == rM || null === (OM = rM.properties) || void 0 === OM ? void 0 : OM.$product_tour_id);
          if (jM && this.getActivatedIds().includes(jM)) {
            const iM = this._activationOutcome(MM, jM, rM);
            if ("consume" === iM) return SM.info("event consumed activated item, removing it", {
              event: MM,
              itemId: jM
            }), void this._deactivateItems([jM]);
            if ("persist" === iM) return SM.info("shown item promoted to persisted activation", {
              event: MM,
              itemId: jM
            }), this._persistActivation(jM), void this._clearActivationTimestamps([jM])
          }
          if (this._cancelEventToItems.has(MM)) {
            const iM = this._getMatchingItems(MM, rM, CQ);
            iM.length > 0 && (SM.info("cancel event matched, cancelling items", {
              event: MM,
              itemsToCancel: iM.map((MM => MM.id))
            }), this._deactivateItems(iM.map((MM => MM.id))), iM.forEach((MM => this._cancelPendingItem(MM.id))))
          }
          if (!this._eventToItems.has(MM)) return;
          SM.info("event name matched", {
            event: MM,
            eventPayload: rM,
            items: this._eventToItems.get(MM)
          });
          const aM = this._getMatchingItems(MM, rM, GQ);
          this._activateItems(aM.map((MM => MM.id)))
        }
        onAction(MM) {
          this._actionToItems.has(MM) && this._activateItems(this._actionToItems.get(MM) || [])
        }
        _activateItems(MM) {
          var rM, iM;
          if (0 === MM.length) return;
          const OM = !!(null === (rM = this._instance) || void 0 === rM || null === (iM = rM.get_session_id) || void 0 === iM ? void 0 : iM.call(rM)),
            SM = [];
          for (const jM of MM) OM && this._shouldPersistArmedActivation(jM) ? this._persistActivation(jM) && this._recordActivationTimestamp(jM) : SM.push(jM);
          SM.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...SM])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(MM) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((rM => rM !== MM));
          const rM = this._getPersistedActivatedIds();
          return !rM.includes(MM) && (this._setActivatedItems([...rM, MM]), this._stampActivationSession(), !0)
        }
        _deactivateItems(MM) {
          const rM = new Set(MM);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((MM => !rM.has(MM)));
          const iM = this._getRawPersistedActivatedIds(),
            OM = iM.filter((MM => !rM.has(MM)));
          OM.length !== iM.length && (this._setActivatedItems(OM), 0 === OM.length && this._clearActivationSession()), this._clearActivationTimestamps(MM), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var MM;
            null === (MM = this._onActivationChanged) || void 0 === MM || MM.call(this)
          } catch (MM) {
            this._getLogger().error("Error while handling activated items change", MM)
          }
        }
        _getRawActivationTimestamps() {
          var MM;
          const rM = this._getActivationTimestampsKey();
          if (!rM) return {};
          const iM = null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM ? void 0 : MM.props[rM];
          return iM && "object" == typeof iM ? iM : {}
        }
        _recordActivationTimestamp(MM) {
          if (!this._getActivationTimestampsKey()) return;
          const rM = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(US(US({}, rM), {}, {
            [MM]: Date.now()
          }))
        }
        _clearActivationTimestamps(MM) {
          if (!this._getActivationTimestampsKey()) return;
          const rM = this._getRawActivationTimestamps(),
            iM = {};
          let OM = !1;
          for (const [SM, jM] of Object.entries(rM)) MM.includes(SM) ? OM = !0 : iM[SM] = jM;
          OM && (ei(iM) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(iM))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(MM) {
          if (!this._getPersistedActivatedIds().includes(MM)) return;
          const rM = this._getRawActivationTimestamps()[MM];
          return Ri(rM) ? rM : void 0
        }
        _getRawPersistedActivatedIds() {
          var MM;
          const rM = this._getActivatedKey();
          return (null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM ? void 0 : MM.props[rM]) || []
        }
        _getPersistedActivatedIds() {
          var MM, rM, iM;
          const OM = this._getRawPersistedActivatedIds();
          if (0 === OM.length) return [];
          const SM = null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM ? void 0 : MM.props[this._getActivatedSessionKey()],
            jM = null === (rM = this._instance) || void 0 === rM || null === (iM = rM.get_session_id) || void 0 === iM ? void 0 : iM.call(rM);
          return jM && SM === jM ? OM : []
        }
        _stampActivationSession() {
          var MM, rM;
          const iM = null === (MM = this._instance) || void 0 === MM || null === (rM = MM.get_session_id) || void 0 === rM ? void 0 : rM.call(MM);
          iM && this._setActivatedSession(iM)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(MM) {
          var rM;
          const iM = null === (rM = this._instance) || void 0 === rM || null === (rM = rM.persistence) || void 0 === rM ? void 0 : rM.props[this._getActivatedSessionKey()];
          if (iM && iM !== MM) {
            const MM = this._getRawPersistedActivatedIds(),
              rM = this._getRawActivationTimestamps();
            MM.length > 0 && (this._setActivatedItems([]), MM.filter((MM => Ri(rM[MM]))).forEach((MM => this._cancelPendingItem(MM)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), MM.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((MM => !this._isItemPermanentlyIneligible(MM)))
        }
        dispose() {
          var MM, rM, iM;
          null === (MM = this._sessionIdUnsubscribe) || void 0 === MM || MM.call(this), this._sessionIdUnsubscribe = void 0, null === (rM = this._captureHookUnsubscribe) || void 0 === rM || rM.call(this), this._captureHookUnsubscribe = void 0, null === (iM = this._actionMatcher) || void 0 === iM || iM.dispose(), this._actionMatcher = void 0
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
      Wm = class extends pm {
        constructor(MM, rM) {
          super(MM, rM)
        }
        _getActivatedKey() {
          return nr
        }
        _getActivatedSessionKey() {
          return Qr
        }
        _getActivationTimestampsKey() {
          return zr
        }
        _writeActivationTimestamps(MM) {
          var rM;
          null === (rM = this._instance) || void 0 === rM || null === (rM = rM.persistence) || void 0 === rM || rM.register({
            $surveys_activated_timestamps: MM
          })
        }
        _clearActivationTimestampsStore() {
          var MM;
          null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM || MM.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(MM) {
          var rM;
          let iM;
          this._getItems((rM => {
            iM = rM.find((rM => rM.id === MM))
          }));
          const OM = null == iM || null === (rM = iM.appearance) || void 0 === rM ? void 0 : rM.surveyPopupDelaySeconds;
          return Ri(OM) && OM > 0
        }
        _getShownEventName() {
          return tQ
        }
        _getItems(MM) {
          var rM;
          null === (rM = this._instance) || void 0 === rM || rM.getSurveys(MM)
        }
        _cancelPendingItem(MM) {
          var rM;
          null === (rM = this._instance) || void 0 === rM || rM.cancelPendingSurvey(MM)
        }
        _getLogger() {
          return hL
        }
        _setActivatedItems(MM) {
          var rM;
          null === (rM = this._instance) || void 0 === rM || null === (rM = rM.persistence) || void 0 === rM || rM.register({
            $surveys_activated: MM
          })
        }
        _setActivatedSession(MM) {
          var rM;
          null === (rM = this._instance) || void 0 === rM || null === (rM = rM.persistence) || void 0 === rM || rM.register({
            $surveys_activated_session: MM
          })
        }
        _clearActivatedSession() {
          var MM;
          null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM || MM.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(MM, rM, iM) {
          var OM;
          if (MM === uQ && !1 === (null == iM || null === (OM = iM.properties) || void 0 === OM ? void 0 : OM.$survey_completed)) return "ignore";
          let SM;
          return this._getItems((MM => {
            SM = MM.find((MM => MM.id === rM))
          })), !SM || function(MM) {
            var rM;
            return OL(MM) && !!(null === (rM = MM.conditions) || void 0 === rM || null === (rM = rM.events) || void 0 === rM ? void 0 : rM.repeatedActivation) || "always" === MM.schedule
          }(SM) ? MM === tQ ? "consume" : "ignore" : MM === tQ ? "persist" : MM === gQ || MM === uQ ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      sm = class {
        constructor(MM) {
          this._instance = MM
        }
        initialize() {}
        get(MM) {
          if ("string" == typeof MM) return this._instance.get_property(MM);
          const rM = {};
          for (const iM of MM) {
            const MM = this._instance.get_property(iM);
            bi(MM) || (rM[iM] = MM)
          }
          return rM
        }
        set(MM, rM) {
          this._instance.register("string" == typeof MM ? {
            [MM]: rM
          } : MM)
        }
        remove(MM) {
          "string" != typeof MM ? MM.forEach((MM => this._instance.unregister(MM))) : this._instance.unregister(MM)
        }
      },
      Dm = class {
        constructor(MM) {
          this._instance = MM
        }
        get() {
          const MM = this._instance.config;
          return {
            disableSurveys: MM.disable_surveys,
            cookielessMode: !!MM.cookieless_mode,
            advancedEnableSurveys: MM.advanced_enable_surveys,
            requestTimeoutMs: MM.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const MM = null == Pi ? void 0 : Pi.__PosthogExtensions__;
          if (!MM) return;
          const {
            generateSurveys: rM,
            loadExternalDependency: iM
          } = MM;
          return {
            generateSurveys: rM ? MM => rM(this._instance, MM) : void 0,
            loadExternalDependency: iM ? MM => iM(this._instance, "surveys", MM) : void 0
          }
        }
        createEventReceiver(MM) {
          return new Wm(this._instance, MM)
        }
        onMatchingConditionsChanged(MM) {
          const rM = this._instance._addCaptureHook((rM => {
              "$pageview" !== rM && rM !== tQ && rM !== gQ && rM !== uQ || MM()
            })),
            iM = () => MM();
          qa(qr, "PHSurveyShown", iM);
          let OM = !1;
          const SM = this._instance.onFeatureFlags((() => {
            OM && MM()
          }));
          return OM = !0, () => {
            OM = !1, rM(), SM(), null == qr || qr.removeEventListener("PHSurveyShown", iM)
          }
        }
      };
    const km = (null == qr ? void 0 : qr.location) ? Bn(qr.location.hash, "__posthog") || Bn(location.hash, "state") : null,
      Zm = "_postHogToolbarParams",
      om = Ya("[Toolbar]"),
      fm = Ya("[FeatureFlags]"),
      Ym = Ya("[FeatureFlags]", {
        debugEnabled: !0
      }),
      Nm = "\" failed. Feature flags didn't load in time.",
      Am = [502, 504],
      xm = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      Fm = "connection_error",
      Bm = MM => {
        const rM = {};
        for (let iM = 0; MM.length > iM; iM++) rM[MM[iM]] = !0;
        return rM
      },
      Xm = MM => {
        const rM = {};
        for (const [iM, OM] of va(MM || {})) OM && (rM[iM] = OM);
        return rM
      };
    var Im = class {
      constructor(MM) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = fm, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const MM = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, MM && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var MM, rM;
          const iM = this._refreshIntervalMs,
            OM = null !== (MM = this._dueRefreshIntervalMs) && void 0 !== MM ? MM : iM;
          bi(iM) || bi(OM) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (rM = this._lastRefreshAt) && void 0 !== rM ? rM : 0) < OM || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? iM : Math.min(2 * OM, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var MM;
          "visible" === (null === (MM = this._document) || void 0 === MM ? void 0 : MM.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = MM
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(MM) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (MM) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = MM, this._logger = MM.logger.createLogger("[FeatureFlags]"), bm(MM.kv.initialize(), (() => {
          this._initializingClient === MM && (this._initializingClient = void 0, this._client = MM, this._finishSetup(MM))
        }))
      }
      _finishSetup(MM) {
        var rM;
        if (this._client === MM) return this._window && qa(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = MM.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (rM = this._crossTabPersistence) || void 0 === rM ? void 0 : rM.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var MM;
        const rM = this._config.refreshIntervalMs,
          iM = !this._config.remoteRequestsDisabled && this._document && !bi(rM) && rM > 0 ? rM : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = iM), iM !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), bi(iM) || (this._refreshIntervalMs = iM, this._dueRefreshIntervalMs = iM, this._scheduleNextRefresh(), (null === (MM = this._document) || void 0 === MM ? void 0 : MM.addEventListener) && (qa(this._document, GM, this._onVisibilityChange), Na(xm, (MM => {
          qa(this._document, MM, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        bi(this._refreshIntervalMs) || (bi(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var MM, rM;
        bi(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (MM = this._document) || void 0 === MM || null === (rM = MM.removeEventListener) || void 0 === rM || rM.call(MM, "visibilitychange", this._onVisibilityChange), Na(xm, (MM => {
          var rM, iM;
          null === (rM = this._document) || void 0 === rM || null === (iM = rM.removeEventListener) || void 0 === iM || iM.call(rM, MM, this._onUserInteraction, {
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
        var MM, rM, iM;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Ti"), this._settleReloads(this._activeReloads, "Ti"), this._client && (this._clearDebouncer(), null === (MM = this._dynamicProperties) || void 0 === MM || MM.dispose(), this._dynamicProperties = void 0, null === (rM = this._crossTabPersistenceUnsubscribe) || void 0 === rM || rM.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (iM = this._window) || void 0 === iM || iM.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(MM) {
        var rM;
        return this._bootstrapState && MM in this._bootstrapState ? this._bootstrapState[MM] : null === (rM = this._client) || void 0 === rM ? void 0 : rM.kv.get(MM)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var MM;
        return !bi(null === (MM = this._client) || void 0 === MM ? void 0 : MM.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(MM) {
        this._persist((() => {
          var rM;
          return null === (rM = this._client) || void 0 === rM ? void 0 : rM.kv.set(MM)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(MM, rM, iM) {
        if (!this._crossTabPersistence || !MM.$enabled_feature_flags) return;
        const OM = this._prop("$enabled_feature_flags") || {},
          SM = MM.$enabled_feature_flags || {},
          jM = rM.flags || rM.featureFlags,
          aM = rM.flags ? Object.entries(rM.flags).filter((MM => {
            let [, rM] = MM;
            return !(null == rM ? void 0 : rM.failed)
          })).map((MM => {
            let [rM] = MM;
            return rM
          })) : [],
          QM = !!rM.errorsWhileComputingFlags && !!rM.flags,
          hM = QM ? aM : iM && !Ui(jM) ? Object.keys(jM || {}) : Array.from(new Set([...Object.keys(OM), ...Object.keys(SM)])),
          JM = this._prop("$feature_flag_payloads") || {},
          dM = MM.$feature_flag_payloads || {},
          yM = QM || iM ? hM : Array.from(new Set([...Object.keys(JM), ...Object.keys(dM)])),
          EM = !QM && !iM,
          UM = !!EM || hM,
          GM = !!EM || yM,
          CM = {
            [PM]: UM,
            [HM]: UM,
            [lM]: GM
          };
        MM.$feature_flag_details && (CM[nM] = UM);
        for (const PM of [LM, zM, mM]) bi(MM[PM]) || (CM[PM] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(CM)
      }
      _remove(MM) {
        this._persist((() => {
          var rM;
          return null === (rM = this._client) || void 0 === rM ? void 0 : rM.kv.remove(MM)
        }))
      }
      _persist(MM) {
        try {
          MM()
        } catch (MM) {
          this._logger.error("Failed to update feature flag persistence", MM)
        }
      }
      _rebuildEventProperties() {
        const MM = {};
        for (const OM of [PM, lM, LM, EM]) {
          const rM = this._prop(OM);
          bi(rM) || (MM[OM] = rM)
        }
        this._baseEventProperties = MM;
        const rM = US({}, MM),
          iM = this._prop(HM);
        if (iM)
          for (const [OM, SM] of Object.entries(iM)) rM[`$feature/${OM}`] = SM;
        this._eventPropertiesWithFlagValues = rM
      }
      _isCacheStale() {
        const MM = this._config.cacheTtlMs;
        if (!MM || 0 >= MM) return !1;
        const rM = this._prop(zM);
        return "number" != typeof rM || Date.now() - rM > MM
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const MM = this._config.evaluationContexts;
        return (null == MM ? void 0 : MM.length) ? MM.filter((MM => {
          const rM = MM && "string" == typeof MM && MM.trim().length > 0;
          return rM || this._logger.error("Invalid evaluation context found:", MM, "Expected non-empty string"), rM
        })) : []
      }
      _getValidFlagKeys() {
        const MM = this._config.flagKeys;
        if (!bi(MM)) return MM.filter((MM => {
          const rM = MM && "string" == typeof MM && MM.trim().length > 0;
          return rM || this._logger.error("Invalid flag key found:", MM, "Expected non-empty string"), rM
        }))
      }
      initialize() {
        var MM, rM;
        const iM = this._config,
          OM = null !== (MM = null === (rM = iM.bootstrap) || void 0 === rM ? void 0 : rM.featureFlags) && void 0 !== MM ? MM : {};
        if (Object.keys(OM).length) {
          var SM, jM;
          const MM = null !== (SM = null === (jM = iM.bootstrap) || void 0 === jM ? void 0 : jM.featureFlagPayloads) && void 0 !== SM ? SM : {},
            rM = Object.keys(OM).filter((MM => !bi(OM[MM]))).reduce(((MM, rM) => (MM[rM] = OM[rM], MM)), {}),
            aM = Object.keys(MM).filter((MM => rM[MM])).reduce(((rM, iM) => (rM[iM] = MM[iM], rM)), {});
          return this._receivedFeatureFlags({
            featureFlags: rM,
            featureFlagPayloads: aM
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(MM, rM, iM) {
        var OM, SM;
        const jM = (null == iM ? void 0 : iM.merge) && null !== (OM = this._prop("$enabled_feature_flags")) && void 0 !== OM ? OM : {},
          aM = (null == iM ? void 0 : iM.merge) && null !== (SM = this._prop("$feature_flag_payloads")) && void 0 !== SM ? SM : {},
          PM = US(US({}, jM), MM),
          nM = US(US({}, aM), rM),
          QM = {};
        for (const [zM, LM] of Object.entries(PM)) QM[zM] = {
          key: zM,
          enabled: Jj(LM),
          variant: dj(LM),
          reason: void 0,
          metadata: bi(null == nM ? void 0 : nM[zM]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: nM[zM]
          }
        };
        this._receivedFeatureFlags({
          flags: QM
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const MM = this._prop(nM),
          rM = this._prop(EM),
          iM = this._prop(UM);
        if (!iM && !rM) return MM || {};
        const OM = xa({}, MM || {}),
          SM = [...new Set([...Object.keys(iM || {}), ...Object.keys(rM || {})])];
        for (const PM of SM) {
          var jM, aM;
          const MM = OM[PM],
            SM = null == rM ? void 0 : rM[PM],
            nM = bi(SM) ? null !== (jM = null == MM ? void 0 : MM.enabled) && void 0 !== jM && jM : !!SM,
            QM = bi(SM) ? null == MM ? void 0 : MM.variant : "string" == typeof SM ? SM : void 0,
            zM = null == iM ? void 0 : iM[PM],
            LM = US(US({}, MM), {}, {
              enabled: nM,
              variant: nM ? null != QM ? QM : null == MM ? void 0 : MM.variant : void 0
            });
          nM !== (null == MM ? void 0 : MM.enabled) && (LM.original_enabled = null == MM ? void 0 : MM.enabled), QM !== (null == MM ? void 0 : MM.variant) && (LM.original_variant = null == MM ? void 0 : MM.variant), zM && (LM.metadata = US(US({}, null == MM ? void 0 : MM.metadata), {}, {
            payload: zM,
            original_payload: null == MM || null === (aM = MM.metadata) || void 0 === aM ? void 0 : aM.payload
          })), OM[PM] = LM
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: MM,
          overriddenPayloads: iM,
          finalDetails: OM
        }), this._override_warning = !0), OM
      }
      getAllFeatureFlags() {
        const MM = this.getFlagVariants(),
          rM = this.getFlagPayloads();
        return Object.keys(MM).map((iM => {
          const OM = MM[iM];
          return {
            key: iM,
            enabled: Jj(OM),
            variant: dj(OM),
            payload: hj(rM[iM])
          }
        }))
      }
      getFlagVariants() {
        const MM = this._prop(HM),
          rM = this._prop(EM);
        if (!rM) return MM || {};
        const iM = xa({}, MM || {}),
          OM = Object.keys(rM);
        for (let SM = 0; OM.length > SM; SM++) iM[OM[SM]] = rM[OM[SM]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: MM,
          overriddenFlags: rM,
          finalFlags: iM
        }), this._override_warning = !0), iM
      }
      getFlagPayloads() {
        const MM = this._prop(lM),
          rM = this._prop(UM);
        if (!rM) return MM || {};
        const iM = xa({}, MM || {}),
          OM = Object.keys(rM);
        for (let SM = 0; OM.length > SM; SM++) iM[OM[SM]] = rM[OM[SM]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: MM,
          overriddenPayloads: rM,
          finalPayloads: iM
        }), this._override_warning = !0), iM
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((MM => {
          try {
            MM()
          } catch (MM) {
            this._logger.error("Error while running feature flags reloading callback", MM)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((MM => {
          this._pendingReloads.add(MM), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(MM, rM) {
        MM.forEach((MM => MM({
          status: rM
        }))), MM.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(MM) {
        return this._reloadingHandlers.push(MM), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((rM => rM !== MM))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(MM) {
        this.$anon_distinct_id = MM
      }
      setReloadingPaused(MM) {
        this._reloadingDisabled = MM
      }
      resetFlagCallReported() {
        this._remove(dM)
      }
      _callFlagsEndpoint(MM) {
        var rM;
        this._clearDebouncer();
        const iM = this._client;
        if (!iM || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const OM = {
          token: iM.projectToken,
          distinct_id: iM.distinctId,
          groups: iM.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: US(US(US({}, iM.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: iM.library.name,
            $lib_version: iM.library.version
          }),
          group_properties: this._prop(hM),
          timezone: Zn()
        };
        bi(iM.deviceId) || (OM.$device_id = iM.deviceId), ((null == MM ? void 0 : MM.disableFlags) || this._config.featureFlagsDisabled) && (OM.disable_flags = !0);
        const SM = this._getValidEvaluationEnvironments();
        SM.length && (OM.evaluation_contexts = SM);
        const jM = this._getValidFlagKeys();
        bi(jM) || (OM.flag_keys = jM);
        const aM = this._config.onlyEvaluateSurveyFeatureFlags,
          PM = "/flags/?v=2" + (aM ? "&only_evaluate_survey_feature_flags=true" : ""),
          nM = this._requestGeneration,
          zM = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = zM, this._requestInFlight = !0;
        const LM = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          mM = MM => {
            var rM, iM;
            const SM = null !== (rM = MM.json) && void 0 !== rM ? rM : {},
              jM = 200 !== MM.statusCode;
            if (this._requestInFlight = !1, nM !== this._requestGeneration) return void LM();
            if (this._trackStatusZeroReachability(MM.statusCode), jM || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), OM.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(zM, "skipped");
            this._flagsLoadedFromRemote = !jM;
            const PM = [];
            MM.error ? PM.push(MM.error instanceof Error && "AbortError" === MM.error.name ? "timeout" : MM.error instanceof Error ? Fm : "unknown_error") : 200 !== MM.statusCode && PM.push(`api_error_${MM.statusCode}`), SM.errorsWhileComputingFlags && PM.push("errors_while_computing_flags");
            const mM = !!(null === (iM = SM.quotaLimited) || void 0 === iM ? void 0 : iM.includes("feature_flags"));
            mM && PM.push("quota_limited"), this._set({
              [QM]: PM
            }), mM ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : OM.disable_flags || this._receivedFeatureFlags(SM, jM, {
              partialResponse: aM
            }), this._settleReloads(zM, OM.disable_flags ? "skipped" : PM.length || !SM.flags && !SM.featureFlags ? "error" : "loaded"), LM()
          },
          HM = MM => {
            this._requestInFlight = !1, nM === this._requestGeneration ? (this._set({
              [QM]: [Fm]
            }), this._logger.error("Feature flag request failed", MM), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(zM, "error"), LM()) : LM()
          };
        let JM = null !== (rM = this._config.requestMaxRetries) && void 0 !== rM ? rM : 1;
        const dM = () => JM > 0 && nM === this._requestGeneration,
          yM = () => {
            if (nM !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(zM, "skipped"), void LM();
            try {
              iM.sendRequest(PM, {
                target: "flags",
                method: "POST",
                body: OM,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((MM => {
                if ((MM => Am.includes(MM.statusCode) || (MM => 0 === MM.statusCode && MM.error instanceof Error && "AbortError" === MM.error.name)(MM))(MM) && dM()) return JM--, void setTimeout(yM, 500);
                mM(MM)
              })).catch(HM)
            } catch (MM) {
              HM(MM)
            }
          };
        yM()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return Yn(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(MM) {
        this._consecutiveStatusZeroFailures = Nn(MM, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var iM;
        if (rM.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + MM + Nm);
        if (this._checkAndTriggerStaleRefresh()) return;
        const OM = this.getFeatureFlagResult(MM, rM);
        return null !== (iM = null == OM ? void 0 : OM.variant) && void 0 !== iM ? iM : null == OM ? void 0 : OM.enabled
      }
      getFeatureFlagDetails(MM) {
        return this.getFlagsWithDetails()[MM]
      }
      getFeatureFlagPayload(MM) {
        const rM = this.getFeatureFlagResult(MM, {
          send_event: !1
        });
        return null == rM ? void 0 : rM.payload
      }
      getFeatureFlagResult(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (rM.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + MM + Nm);
        if (this._checkAndTriggerStaleRefresh()) return;
        const iM = this.getFlagVariants(),
          OM = MM in iM,
          SM = iM[MM],
          jM = this.getFlagPayloads()[MM],
          aM = String(SM),
          PM = this._prop("$feature_flag_request_id") || void 0,
          nM = this._prop("$feature_flag_evaluated_at") || void 0;
        let QM, zM = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var LM;
          const MM = null === (LM = this._client) || void 0 === LM || null === (LM = LM.session) || void 0 === LM ? void 0 : LM.sessionId,
            rM = this._prop(yM);
          MM && MM !== rM && (zM = {}, QM = MM)
        }
        if (!rM.send_event && "send_event" in rM) QM && this._set({
          [dM]: zM,
          [yM]: QM
        });
        else if (MM in zM && zM[MM].includes(aM)) QM && this._set({
          [dM]: zM,
          [yM]: QM
        });
        else {
          var mM, HM, hM, JM, lM, EM, UM, GM, CM, eM, bM, wM, tM;
          Ui(zM[MM]) ? zM[MM].push(aM) : zM[MM] = [aM], this._set(US({
            [dM]: zM
          }, QM ? {
            [yM]: QM
          } : {}));
          const rM = this.getFeatureFlagDetails(MM),
            iM = [...null !== (mM = this._prop("$feature_flag_errors")) && void 0 !== mM ? mM : []];
          bi(SM) && iM.push("flag_missing");
          const OM = {
            $feature_flag: MM,
            $feature_flag_response: SM,
            $feature_flag_payload: null != jM ? jM : null,
            $feature_flag_request_id: PM,
            $feature_flag_evaluated_at: nM,
            $feature_flag_bootstrapped_response: null !== (HM = null === (hM = this._config.bootstrap) || void 0 === hM || null === (hM = hM.featureFlags) || void 0 === hM ? void 0 : hM[MM]) && void 0 !== HM ? HM : null,
            $feature_flag_bootstrapped_payload: null !== (JM = null === (lM = this._config.bootstrap) || void 0 === lM || null === (lM = lM.featureFlagPayloads) || void 0 === lM ? void 0 : lM[MM]) && void 0 !== JM ? JM : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          bi(null == rM || null === (EM = rM.metadata) || void 0 === EM ? void 0 : EM.has_experiment) || (OM.$feature_flag_has_experiment = rM.metadata.has_experiment), bi(null == rM || null === (UM = rM.metadata) || void 0 === UM ? void 0 : UM.version) || (OM.$feature_flag_version = rM.metadata.version);
          const LM = null !== (GM = null == rM || null === (CM = rM.reason) || void 0 === CM ? void 0 : CM.description) && void 0 !== GM ? GM : null == rM || null === (eM = rM.reason) || void 0 === eM ? void 0 : eM.code;
          LM && (OM.$feature_flag_reason = LM), (null == rM || null === (bM = rM.metadata) || void 0 === bM ? void 0 : bM.id) && (OM.$feature_flag_id = rM.metadata.id), bi(null == rM ? void 0 : rM.original_variant) && bi(null == rM ? void 0 : rM.original_enabled) || (OM.$feature_flag_original_response = bi(rM.original_variant) ? rM.original_enabled : rM.original_variant), (null == rM || null === (wM = rM.metadata) || void 0 === wM ? void 0 : wM.original_payload) && (OM.$feature_flag_original_payload = null == rM || null === (tM = rM.metadata) || void 0 === tM ? void 0 : tM.original_payload), iM.length && (OM.$feature_flag_error = iM.join(",")), this._captureFeatureFlagCalled(OM)
        }
        return OM ? {
          key: MM,
          enabled: !!SM,
          variant: "string" == typeof SM ? SM : void 0,
          payload: hj(jM)
        } : void 0
      }
      _captureFeatureFlagCalled(MM) {
        try {
          var rM;
          null === (rM = this._client) || void 0 === rM || rM.capture("$feature_flag_called", MM)
        } catch (MM) {
          this._logger.error("Failed to capture feature flag call", MM)
        }
      }
      getRemoteConfigPayload(MM, rM) {
        this._getRemoteConfigPayload(MM, rM)
      }
      _getRemoteConfigPayload(MM, rM) {
        var iM = this;
        return Bi((function*() {
          const OM = iM._client;
          if (!OM) return;
          const SM = {
              distinct_id: OM.distinctId,
              token: OM.projectToken,
              person_properties: {
                $lib: OM.library.name,
                $lib_version: OM.library.version
              }
            },
            jM = iM._getValidEvaluationEnvironments();
          jM.length && (SM.evaluation_contexts = jM);
          const aM = iM._getValidFlagKeys();
          let PM;
          bi(aM) || (SM.flag_keys = aM);
          try {
            var nM;
            const rM = null === (nM = (yield OM.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: SM,
              compression: iM._config.compression,
              sentAt: "body",
              timeoutMs: iM._config.requestTimeoutMs
            })).json) || void 0 === nM ? void 0 : nM.featureFlagPayloads;
            PM = (null == rM ? void 0 : rM[MM]) || void 0
          } catch (MM) {
            return void iM._logger.error("Remote config feature flag request failed", MM)
          }
          try {
            rM(PM)
          } catch (MM) {
            iM._logger.error("Remote config feature flag callback failed", MM)
          }
        }))()
      }
      isFeatureEnabled(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (rM.fresh && !this._flagsLoadedFromRemote) return rM.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + MM + Nm), rM.defaultValue;
        const iM = this.getFeatureFlag(MM, rM);
        return bi(iM) ? rM.defaultValue : !!iM
      }
      addFeatureFlagsHandler(MM) {
        this.featureFlagEventHandlers.push(MM)
      }
      removeFeatureFlagsHandler(MM) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((rM => rM !== MM))
      }
      receivedFeatureFlags(MM, rM, iM) {
        this._receivedFeatureFlags(MM, rM, iM)
      }
      _receivedFeatureFlags(MM, rM, iM) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const OM = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            SM = arguments.length > 4 ? arguments[4] : void 0,
            jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : fm;
          const aM = ((MM, rM) => {
              const iM = MM.flags;
              if (iM) {
                const rM = Object.fromEntries(Object.keys(iM).map((MM => {
                    var rM;
                    return [MM, null !== (rM = iM[MM].variant) && void 0 !== rM ? rM : iM[MM].enabled]
                  }))),
                  OM = Object.fromEntries(Object.keys(iM).filter((MM => iM[MM].enabled)).filter((MM => {
                    var rM;
                    return !bi(null === (rM = iM[MM].metadata) || void 0 === rM ? void 0 : rM.payload)
                  })).map((MM => {
                    var rM;
                    return [MM, null === (rM = iM[MM].metadata) || void 0 === rM ? void 0 : rM.payload]
                  })));
                return US(US({}, MM), {}, {
                  featureFlags: rM,
                  featureFlagPayloads: OM
                })
              }
              return MM.featureFlags && rM.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), MM
            })(MM, jM),
            QM = aM.flags,
            hM = aM.featureFlags,
            JM = aM.featureFlagPayloads;
          if (!hM) return;
          const dM = MM.requestId,
            yM = MM.evaluatedAt;
          if (Ui(hM)) {
            jM.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const MM = {};
            if (hM)
              for (let rM = 0; hM.length > rM; rM++) MM[hM[rM]] = !0;
            return {
              [PM]: hM,
              [HM]: MM,
              [mM]: !1
            }
          }
          let EM = hM,
            UM = JM,
            GM = QM;
          if (null == SM ? void 0 : SM.partialResponse) {
            const MM = Object.keys(EM),
              SM = UM || {};
            EM = US(US({}, rM), EM), UM = US(US({}, iM), SM), MM.forEach((MM => {
              MM in SM || null == UM || delete UM[MM]
            })), GM = US(US({}, OM), GM)
          } else if (MM.errorsWhileComputingFlags)
            if (QM) {
              const MM = new Set(Object.keys(QM).filter((MM => {
                var rM;
                return !(null === (rM = QM[MM]) || void 0 === rM ? void 0 : rM.failed)
              })));
              EM = US(US({}, rM), Object.fromEntries(Object.entries(EM).filter((rM => {
                let [iM] = rM;
                return MM.has(iM)
              }))));
              const SM = Object.fromEntries(Object.entries(UM || {}).filter((rM => {
                let [iM] = rM;
                return MM.has(iM)
              })));
              UM = US(US({}, iM), SM), MM.forEach((MM => {
                MM in SM || null == UM || delete UM[MM]
              })), GM = US(US({}, OM), Object.fromEntries(Object.entries(GM || {}).filter((rM => {
                let [iM] = rM;
                return MM.has(iM)
              }))))
            } else EM = US(US({}, rM), EM), UM = US(US({}, iM), UM), GM = US(US({}, OM), GM);
          return US(US({
            [PM]: Object.keys(Xm(EM)),
            [HM]: EM || {},
            [lM]: UM || {},
            [nM]: GM || {},
            [mM]: !0 === MM.minimalFlagCalledEvents
          }, dM ? {
            [LM]: dM
          } : {}), yM ? {
            [zM]: yM
          } : {})
        }(MM, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), iM, this._logger);
        if (OM)
          if (!1 === (null == iM ? void 0 : iM.persist)) {
            const MM = !bi(this._client.kv.get(HM));
            this._bootstrapState = OM, MM || this._set(OM)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(OM, MM, !!(null == iM ? void 0 : iM.partialResponse)), this._set(OM);
        else rM && this._fallBackToPersistedFlags();
        rM || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(rM)
      }
      override(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: MM,
          suppressWarning: rM
        })
      }
      overrideFeatureFlags(MM) {
        this._overrideFeatureFlags(MM)
      }
      _overrideFeatureFlags(MM) {
        if (this._client) {
          if (!1 === MM) return this._remove([EM, UM]), this._fireFeatureFlagsCallbacks(), void Ym.info("All overrides cleared");
          if (Ui(MM)) return this._set({
            [EM]: Bm(MM)
          }), this._fireFeatureFlagsCallbacks(), void Ym.info("Flag overrides set", {
            flags: MM
          });
          if (MM && "object" == typeof MM && ("flags" in MM || "payloads" in MM)) {
            var rM;
            const iM = MM;
            this._override_warning = Boolean(null !== (rM = iM.suppressWarning) && void 0 !== rM && rM);
            const OM = {},
              SM = iM.flags,
              jM = iM.payloads;
            return SM && (OM[EM] = Ui(SM) ? Bm(SM) : SM), jM && (OM[UM] = jM), Object.keys(OM).length && this._set(OM), !1 === SM && !1 === jM ? this._remove([EM, UM]) : !1 === SM ? this._remove(EM) : !1 === jM && this._remove(UM), this._fireFeatureFlagsCallbacks(), !1 === SM ? Ym.info("Flag overrides cleared") : SM && Ym.info("Flag overrides set", {
              flags: SM
            }), void(!1 === jM ? Ym.info("Payload overrides cleared") : jM && Ym.info("Payload overrides set", {
              payloads: jM
            }))
          }
          if (MM && "object" == typeof MM) return this._set({
            [EM]: MM
          }), this._fireFeatureFlagsCallbacks(), void Ym.info("Flag overrides set", {
            flags: MM
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: MM
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(MM) {
        if (this.addFeatureFlagsHandler(MM), this._hasLoadedFlags) {
          const {
            flags: rM,
            flagVariants: iM
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            MM(rM, iM)
          } catch (MM) {
            this._logger.error("Error while running feature flags callback", MM)
          }
        }
        return () => this.removeFeatureFlagsHandler(MM)
      }
      updateEarlyAccessFeatureEnrollment(MM, rM, iM) {
        var OM;
        const SM = (this._prop("$early_access_features") || []).find((rM => rM.flagKey === MM)),
          jM = {
            [`$feature_enrollment/${MM}`]: rM
          },
          aM = {
            $feature_flag: MM,
            $feature_enrollment: rM,
            $set: jM
          };
        SM && (aM.$early_access_feature_name = SM.name), iM && (aM.$feature_enrollment_stage = iM);
        const nM = US(US({}, this.getFlagVariants()), {}, {
          [MM]: rM
        });
        null === (OM = this._crossTabPersistence) || void 0 === OM || OM.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [MM],
          $enabled_feature_flags: [MM],
          $stored_person_properties: Object.keys(jM)
        }), this._set({
          [PM]: Object.keys(Xm(nM)),
          [HM]: nM,
          [JM]: US(US({}, this._prop("$stored_person_properties") || {}), jM)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var QM;
          null === (QM = this._client) || void 0 === QM || QM.capture("$feature_enrollment_update", aM)
        } catch (MM) {
          this._logger.error("Failed to capture early access feature enrollment", MM)
        }
      }
      getEarlyAccessFeatures(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = this._prop(aM);
        !OM || rM ? this._getEarlyAccessFeatures(MM, iM) : MM(OM)
      }
      _getEarlyAccessFeatures(MM, rM) {
        var iM = this;
        return Bi((function*() {
          const OM = iM._client;
          if (!OM) return;
          const SM = rM ? `&${rM.map((MM=>`stage=${MM}`)).join("&")}` : "";
          let jM;
          try {
            const MM = yield OM.sendRequest(`/api/early_access_features/?token=${OM.projectToken}${SM}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!MM.json) return;
            jM = MM.json.earlyAccessFeatures, iM._set({
              [aM]: jM
            })
          } catch (MM) {
            return void iM._logger.error("Early access feature request failed", MM)
          }
          try {
            MM(jM)
          } catch (MM) {
            iM._logger.error("Early access feature callback failed", MM)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const MM = this.getFlags(),
          rM = this.getFlagVariants();
        return {
          flags: MM.filter((MM => rM[MM])),
          flagVariants: Object.keys(rM).filter((MM => rM[MM])).reduce(((MM, iM) => (MM[iM] = rM[iM], MM)), {})
        }
      }
      _fireFeatureFlagsCallbacks(MM) {
        this._rebuildEventProperties();
        const {
          flags: rM,
          flagVariants: iM
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((OM => {
          try {
            OM(rM, iM, {
              errorsLoading: MM
            })
          } catch (MM) {
            this._logger.error("Error while running feature flags callback", MM)
          }
        }))
      }
      setPersonPropertiesForFlags(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(MM, rM)
      }
      _setPersonPropertiesForFlags(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this._prop("$stored_person_properties") || {},
          OM = (null == MM ? void 0 : MM.$set) || ((null == MM ? void 0 : MM.$set_once) ? {} : MM),
          SM = null == MM ? void 0 : MM.$set_once,
          jM = {};
        if (SM)
          for (const aM in SM)({}).hasOwnProperty.call(SM, aM) && (aM in iM || (jM[aM] = SM[aM]));
        this._set({
          [JM]: US(US(US({}, iM), jM), OM)
        }), rM && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = US({}, this._prop("$stored_person_properties") || {});
        MM.forEach((MM => {
          delete iM[MM]
        })), this._set({
          [JM]: iM
        }), rM && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(JM), MM && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this._prop("$stored_group_properties") || {},
          OM = US({}, iM);
        for (const SM of Object.keys(MM)) OM[SM] = US(US({}, iM[SM]), MM[SM]);
        this._set({
          [hM]: OM
        }), rM && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(MM) {
        if (MM) {
          const rM = this._prop("$stored_group_properties") || {};
          this._set({
            [hM]: US(US({}, rM), {}, {
              [MM]: {}
            })
          })
        } else this._remove(hM)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "Ti"), this._settleReloads(this._activeReloads, "Ti"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const Km = Ya("[FeatureFlags]");
    var qm = class {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(MM, rM)
      }
      update(MM, rM) {
        this._snapshot = ((MM, rM) => {
          var iM, OM, SM, jM, aM, PM, nM, QM;
          return {
            bootstrap: {
              featureFlags: null !== (iM = null === (OM = MM.bootstrap) || void 0 === OM ? void 0 : OM.featureFlags) && void 0 !== iM ? iM : void 0,
              featureFlagPayloads: null !== (SM = null === (jM = MM.bootstrap) || void 0 === jM ? void 0 : jM.featureFlagPayloads) && void 0 !== SM ? SM : void 0
            },
            remoteRequestsDisabled: rM,
            featureFlagsDisabled: !!MM.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!MM.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!MM.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: MM.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (aM = MM.remote_config_refresh_interval_ms) && void 0 !== aM ? aM : 3e5,
            idleRefreshBackoff: bi(MM.remote_config_refresh_interval_ms),
            requestTimeoutMs: MM.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (PM = MM.feature_flag_request_max_retries) && void 0 !== PM ? PM : 1),
            compression: MM.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (nM = null !== (QM = MM.evaluation_contexts) && void 0 !== QM ? QM : MM.evaluation_environments) && void 0 !== nM ? nM : [],
            flagKeys: Ui(MM.flag_keys) ? MM.flag_keys : void 0
          }
        })(MM, rM), !MM.evaluation_environments || MM.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Km.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), bi(MM.flag_keys) || Ui(MM.flag_keys) || Km.error("Invalid flag_keys found:", MM.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const Tm = MM => fi(MM) && ("RangeError" === MM.name && 0 === MM.message.indexOf("Maximum call stack size exceeded") || "InternalError" === MM.name && "too much recursion" === MM.message),
      Vm = Ya("[Error tracking]"),
      cm = "webkit-masked-url:",
      MH = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      rH = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", cm],
      iH = ["__firefox__", "__gCrWeb"],
      OH = "Refusing to render web experiment since the viewer is a likely bot",
      SH = {
        icontains: (MM, rM) => rM.toLowerCase().indexOf(MM.toLowerCase()) > -1,
        not_icontains: (MM, rM) => -1 === rM.toLowerCase().indexOf(MM.toLowerCase()),
        regex: (MM, rM) => SL(rM, MM),
        not_regex: (MM, rM) => !SL(rM, MM),
        exact: (MM, rM) => rM === MM,
        is_not: (MM, rM) => rM !== MM
      },
      jH = Ya("[Conversations]"),
      aH = "Conversations not available yet.";

    function PH(MM, rM) {
      var iM, OM, SM, jM, aM, PM, nM;
      const QM = null !== (iM = null == MM ? void 0 : MM.flushIntervalMs) && void 0 !== iM ? iM : 3e3,
        zM = null !== (OM = null == MM ? void 0 : MM.maxBufferSize) && void 0 !== OM ? OM : 100,
        LM = (null == rM ? void 0 : rM.consoleCapture) ? void 0 : null !== (SM = null == MM ? void 0 : MM.maxLogsPerInterval) && void 0 !== SM ? SM : 1e3,
        mM = bi(LM) ? Math.max(zM, 2048) : Math.max(zM, LM),
        HM = US(US({}, function() {
          let MM = "",
            rM = "";
          try {
            var iM;
            const OM = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              SM = null == OM || null === (iM = OM.navigator) || void 0 === iM ? void 0 : iM.userAgent;
            SM && ([MM, rM] = VO(SM))
          } catch (MM) {}
          return function(MM, rM) {
            const iM = function(MM) {
              if (MM) return {}.hasOwnProperty.call(Ga, MM) ? Ga[MM] : MM
            }(MM);
            return US(US({}, iM ? {
              "os.name": iM
            } : {}), rM ? {
              "os.version": rM
            } : {})
          }(MM, rM)
        }()), null == MM ? void 0 : MM.resourceAttributes);
      return {
        serviceName: null !== (jM = null !== (aM = null == HM ? void 0 : HM["service.name"]) && void 0 !== aM ? aM : null == MM ? void 0 : MM.serviceName) && void 0 !== jM ? jM : null == rM ? void 0 : rM.serviceNameDefault,
        serviceVersion: null !== (PM = null == HM ? void 0 : HM["service.version"]) && void 0 !== PM ? PM : null == MM ? void 0 : MM.serviceVersion,
        environment: null !== (nM = null == HM ? void 0 : HM["deployment.environment"]) && void 0 !== nM ? nM : null == MM ? void 0 : MM.environment,
        resourceAttributes: HM,
        beforeSend: null == MM ? void 0 : MM.beforeSend,
        flushIntervalMs: QM,
        maxBufferSize: zM,
        maxQueueSize: mM,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: QM,
        maxLogsPerInterval: LM,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const nH = ["debug", "log", "warn", "error", "info"],
      QH = MM => {
        for (; null == MM ? void 0 : MM.__rrweb_original__;) MM = MM.__rrweb_original__;
        return MM
      },
      zH = "console",
      LH = "__posthogHandledLogsRequestError",
      mH = (MM, rM) => {
        const iM = MM instanceof Error ? MM : new Error(rM);
        return iM[LH] = !0, iM
      },
      HH = MM => !!MM && "object" == typeof MM && !0 === MM[LH];
    var hH = class {
      get _coreLogger() {
        var MM = this;
        return US(US({}, this._logger), {}, {
          error: function() {
            for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
            iM.some(HH) || MM._logger.error(...iM)
          }
        })
      }
      constructor(MM, rM) {
        var iM;
        this._configSource = MM, this._getSdkContext = rM, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = Ya("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var MM, rM;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (MM = this._core) || void 0 === MM || MM.onReconnect(), null === (rM = this._consoleCore) || void 0 === rM || rM.onReconnect())
        }, this._isLogsEnabled = !!(null === (iM = MM.get()) || void 0 === iM ? void 0 : iM.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (OM) {
            this._window = void 0
          }
          this._window && (qa(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(MM, rM, iM, OM) {
        this._listenForReconnect();
        const SM = PH(this._configSource.get(), iM);
        return [new Wa(this._createHost(MM, rM), SM, this._coreLogger, (() => this._getSdkContext()), (MM => MM()), void 0, OM), SM]
      }
      _getCore() {
        const MM = this._configSource.get();
        var rM;
        return this._core && this._resolvedFrom === MM || (null === (rM = this._core) || void 0 === rM || rM.reset(), this._resolvedFrom = MM, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (MM => {
          this._queue = MM
        }))), this._core
      }
      _getConsoleCore() {
        const MM = this._configSource.get();
        var rM;
        return this._consoleCore && this._consoleResolvedFrom === MM || (null === (rM = this._consoleCore) || void 0 === rM || rM.reset(), this._consoleResolvedFrom = MM, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (MM => {
          this._consoleQueue = MM
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, zH)), this._consoleCore
      }
      setup(MM) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = MM, this._logger = MM.logger.createLogger("[logs]"), bm(MM.kv.initialize(), (() => {
          this._disposed || this._finishSetup(MM)
        }))
      }
      _finishSetup(MM) {
        var rM;
        this._listenForReconnect(), (null === (rM = this._configSource.get()) || void 0 === rM ? void 0 : rM.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && MM.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let iM = !1;
        const OM = MM.onRemoteConfig((MM => {
          var rM;
          iM = MM.ok && !0 === (null === (rM = MM.config.logs) || void 0 === rM ? void 0 : rM.captureConsoleLogs), this.onRemoteConfig(MM)
        }));
        this._disposed ? OM.dispose() : (this._remoteConfigSubscription = OM, iM || this.loadIfEnabled())
      }
      dispose() {
        var MM, rM, iM, OM, SM, jM, aM;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (MM = this._remoteConfigSubscription) || void 0 === MM || MM.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (rM = this._window) || void 0 === rM || rM.removeEventListener("online", this._onReconnect), null === (iM = this._consoleLogsDispose) || void 0 === iM || iM.call(this), this._consoleLogsDispose = void 0, null === (OM = this._core) || void 0 === OM || OM.clearQueue(), null === (SM = this._consoleCore) || void 0 === SM || SM.clearQueue(), null === (jM = this._core) || void 0 === jM || jM.reset(), null === (aM = this._consoleCore) || void 0 === aM || aM.reset())
      }
      onRemoteConfig(MM) {
        var rM, iM;
        if (this._disposed) return;
        const OM = MM.ok ? null === (rM = MM.config.logs) || void 0 === rM ? void 0 : rM.captureConsoleLogs : void 0;
        ui(OM) ? this._stopRecorderStartedByPersistedHint() : (null === (iM = this._client) || void 0 === iM || iM.kv.set(this._configSource.captureHintKey, !!OM), OM ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var MM, rM, iM, OM;
        this._stopConsoleRecorder(), null === (MM = this._core) || void 0 === MM || MM.clearQueue(), this._queue = [], null === (rM = this._core) || void 0 === rM || rM.reset(), null === (iM = this._consoleCore) || void 0 === iM || iM.clearQueue(), this._consoleQueue = [], null === (OM = this._consoleCore) || void 0 === OM || OM.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(MM) {
        !this._disposed && this._client && this._getCore().captureLog(MM)
      }
      captureConsoleLog(MM) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(MM)
      }
      captureBufferedConsoleLog(MM, rM, iM) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(MM, {
          context: rM,
          occurredAtMs: iM
        })
      }
      _onOptOut() {
        var MM;
        this._stopConsoleRecorder(), null === (MM = this._consoleCore) || void 0 === MM || MM.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var MM, rM = this;
        if (this._isRecordingConsole || !(null === (MM = this._window) || void 0 === MM ? void 0 : MM.console)) return;
        const iM = PH(this._configSource.get()).maxBufferSize;
        let OM = !0;
        this._consoleRecorderUnpatchers.push((() => {
          OM = !1
        }));
        for (const SM of nH) {
          let jM;
          try {
            jM = QH(this._window.console[SM])
          } catch (MM) {
            continue
          }
          jM && this._consoleRecorderUnpatchers.push(am(this._window.console, SM, (MM => {
            const aM = function() {
              for (var jM = arguments.length, aM = new Array(jM), PM = 0; PM < jM; PM++) aM[PM] = arguments[PM];
              try {
                OM && rM._recordConsoleEntry(SM, aM, iM)
              } catch (SM) {}
              return MM.apply(rM._window.console, aM)
            };
            return aM.__rrweb_original__ = jM, aM
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(MM, rM, iM) {
        var OM;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== rM.length)
          if (null === (OM = this._client) || void 0 === OM ? void 0 : OM.canCapture) {
            if (iM > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: MM,
                  args: rM,
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
          for (const MM of this._consoleRecorderUnpatchers) MM();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const MM = this._consoleBuffer;
        return this._stopConsoleRecorder(), MM
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (MM, rM) => this.captureLog({
            body: MM,
            level: "trace",
            attributes: rM
          }),
          debug: (MM, rM) => this.captureLog({
            body: MM,
            level: "debug",
            attributes: rM
          }),
          info: (MM, rM) => this.captureLog({
            body: MM,
            level: "info",
            attributes: rM
          }),
          warn: (MM, rM) => this.captureLog({
            body: MM,
            level: "warn",
            attributes: rM
          }),
          error: (MM, rM) => this.captureLog({
            body: MM,
            level: "error",
            attributes: rM
          }),
          fatal: (MM, rM) => this.captureLog({
            body: MM,
            level: "fatal",
            attributes: rM
          })
        }), this._capture_logger
      }
      flushLogs(MM) {
        this._client && (MM ? this._flushViaTransport(MM) : (this._core && this._core.flush().catch((MM => this._logFlushError(MM))), this._consoleCore && this._consoleCore.flush().catch((MM => this._logFlushError(MM)))))
      }
      flush() {
        var MM = this;
        return Bi((function*() {
          var rM, iM;
          const OM = null === (rM = MM._core) || void 0 === rM ? void 0 : rM.flush().catch((rM => MM._logFlushError(rM))),
            SM = null === (iM = MM._consoleCore) || void 0 === iM ? void 0 : iM.flush().catch((rM => MM._logFlushError(rM)));
          yield OM, yield SM
        }))()
      }
      _logFlushError(MM) {
        HH(MM) || this._logger.error("PostHog logs flush failed:", MM)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const MM = this._getConsoleLoader();
        if (MM) {
          this._isLoading = !0;
          try {
            MM(((MM, rM) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (MM || !rM) this._logger.error("Could not load logs script", MM), this._stopConsoleRecorder();
                else {
                  const MM = this._takeConsoleBuffer();
                  this._consoleLogsDispose = rM.initialize(this._client), this._isLoaded = !0, MM.length > 0 && rM.replay(this._client, MM)
                }
            }))
          } catch (MM) {
            throw this._isLoading = !1, MM
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(MM, rM) {
        const iM = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !iM.canCapture
          },
          getPersistedProperty: rM => rM === ni.LogsQueue ? MM() : void 0,
          setPersistedProperty(MM, iM) {
            MM === ni.LogsQueue && rM(null != iM ? iM : [])
          },
          _sendLogsBatch: MM => this._sendLogsBatch(MM),
          getLibraryId: () => iM.library.name,
          getLibraryVersion: () => iM.library.version
        }
      }
      _sendLogsBatch(MM) {
        return new Promise((rM => {
          if (Yn(this._consecutiveStatusZeroFailures, 3)) return void rM({
            kind: "fatal",
            error: mH(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let iM = !1;
          const OM = MM => {
              iM || (iM = !0, clearTimeout(SM), rM(MM))
            },
            SM = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), OM({
                kind: "retry-later",
                error: mH(void 0, "logs request timed out")
              })
            }), 9e4),
            jM = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: MM,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((MM => {
            var rM;
            const iM = MM.statusCode;
            this._trackEndpointReachability(iM, jM), iM >= 200 && 300 > iM ? OM({
              kind: "ok"
            }) : 413 === iM ? OM({
              kind: "too-large"
            }) : 0 !== iM && 408 !== iM && 429 !== iM && 500 > iM ? OM({
              kind: "fatal",
              error: new Error(`logs request failed with status ${iM}`)
            }) : 0 === iM ? (MM.error || this._logger.warn("Logs request failed before receiving an HTTP response"), OM({
              kind: "retry-later",
              error: mH(MM.error, "logs request failed before receiving an HTTP response")
            })) : OM({
              kind: "retry-later",
              error: null !== (rM = MM.error) && void 0 !== rM ? rM : new Error(`logs request failed with status ${iM}`)
            })
          }), (MM => {
            OM({
              kind: "retry-later",
              error: MM
            })
          }))
        }))
      }
      _trackEndpointReachability(MM, rM) {
        (0 !== MM || rM) && (this._consecutiveStatusZeroFailures = Nn(MM, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(MM) {
        this._queue.length > 0 && this._drainQueueViaTransport(MM, this._queue, this._resolvedConfig, this._client.library.name, (MM => {
          this._queue = MM
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(MM, this._consoleQueue, this._consoleResolvedConfig, zH, (MM => {
          this._consoleQueue = MM
        }))
      }
      _drainQueueViaTransport(MM, rM, iM, OM, SM) {
        if (0 === rM.length) return;
        const jM = rM.map((MM => MM.record));
        SM([]);
        const aM = ga(jM, ta(iM, this._client.library.name, this._client.library.version), OM, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: aM,
          compression: "best-available",
          transport: MM,
          timeoutMs: 6e4
        }).catch((MM => this._logFlushError(MM)))
      }
    };
    const JH = Ya("[NetworkMetrics]"),
      dH = () => {
        var MM;
        return (null == qr || null === (MM = qr.performance) || void 0 === MM ? void 0 : MM.now) ? qr.performance.now() : Date.now()
      },
      yH = {
        "http:": 80,
        "https:": 443
      },
      lH = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      EH = (MM, rM) => {
        var iM;
        const OM = String(rM);
        return {
          method: String(MM).toUpperCase(),
          url: (null === (iM = xn(OM)) || void 0 === iM ? void 0 : iM.href) || OM
        }
      },
      UH = function(MM, rM, iM, OM, SM, jM) {
        let aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var PM, nM;
          const QM = SM();
          if (!QM) return;
          const zM = iM || void 0,
            LM = dH() - OM,
            mM = xn(rM.url);
          if (mM && "http:" !== mM.protocol && "https:" !== mM.protocol) return;
          const HM = {
              url: (null == mM ? void 0 : mM.href) || rM.url,
              method: rM.method
            },
            hM = Gi(QM.name) ? QM.name(HM) : wi(QM.name) ? QM.name : "http.client.request.duration";
          if (!hM) return;
          const JM = aM && !zM ? void 0 : ((MM, rM) => MM ? 400 > MM ? void 0 : String(MM) : (null == rM ? void 0 : rM.name) || "_OTHER")(zM, jM),
            dM = US(US(US(US(US({}, (MM => {
              const rM = lH.has(MM) ? MM : "_OTHER";
              return US({
                "http.request.method": rM
              }, "_OTHER" === rM && MM !== rM ? {
                "http.request.method_original": MM
              } : {})
            })(HM.method)), mM ? (MM => {
              return {
                "server.address": MM.hostname.startsWith("[") && MM.hostname.endsWith("]") ? MM.hostname.slice(1, -1) : MM.hostname,
                "server.port": Number(MM.port) || yH[MM.protocol],
                "url.scheme": MM.protocol.slice(0, -1),
                "url.template": (rM = MM.pathname, rM.split("/").map((MM => (MM => /^\d+$/.test(MM) || MM.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(MM))(MM) ? ":id" : MM)).join("/"))
              };
              var rM
            })(mM) : {}), zM ? {
              "http.response.status_code": zM
            } : {}), JM ? {
              "error.type": JM
            } : {}), null === (PM = QM.attributes) || void 0 === PM ? void 0 : PM.call(QM, HM, {
              status: zM,
              durationMs: LM
            }));
          null === (nM = MM.metrics) || void 0 === nM || nM.histogram(hM, LM, {
            unit: "ms",
            attributes: dM
          })
        } catch (MM) {
          JH.error("Failed to record network metric", MM)
        }
      },
      GH = () => {},
      CH = (MM, rM) => Gi(null == qr ? void 0 : qr.fetch) ? am(qr, "fetch", (iM => function() {
        for (var OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
        const aM = dH(),
          PM = iM.apply(this, SM);
        if (!rM()) return PM;
        try {
          var nM, QM, zM;
          const [iM, OM] = SM, jM = EH(null !== (nM = null !== (QM = null == OM ? void 0 : OM.method) && void 0 !== QM ? QM : null == iM ? void 0 : iM.method) && void 0 !== nM ? nM : "GET", null !== (zM = null == iM ? void 0 : iM.url) && void 0 !== zM ? zM : iM);
          return PM.then((iM => (UH(MM, jM, null == iM ? void 0 : iM.status, aM, rM, void 0, !0), iM)), (iM => {
            throw UH(MM, jM, void 0, aM, rM, iM), iM
          }))
        } catch (MM) {
          return JH.error("Failed to observe fetch", MM), PM
        }
      })) : GH,
      eH = (MM, rM) => {
        var iM;
        const OM = null == qr || null === (iM = qr.XMLHttpRequest) || void 0 === iM ? void 0 : iM.prototype;
        if (!OM) return GH;
        const SM = new WeakMap,
          jM = am(OM, "open", (MM => function() {
            for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
            try {
              (() => Cz.has(this))() || SM.set(this, EH(iM[0], iM[1]))
            } catch (MM) {
              JH.error("Failed to observe XHR open", MM)
            }
            return MM.apply(this, iM)
          })),
          aM = am(OM, "send", (iM => function() {
            let OM;
            try {
              const iM = SM.get(this);
              if (iM && rM()) {
                const SM = dH();
                OM = () => {
                  this.removeEventListener("loadend", OM), UH(MM, iM, this.status, SM, rM)
                }, qa(this, "loadend", OM)
              }
            } catch (MM) {
              JH.error("Failed to observe XHR send", MM)
            }
            try {
              for (var jM = arguments.length, aM = new Array(jM), PM = 0; PM < jM; PM++) aM[PM] = arguments[PM];
              return iM.apply(this, aM)
            } catch (MM) {
              throw OM && this.removeEventListener("loadend", OM), MM
            }
          }));
        return () => {
          jM(), aM()
        }
      },
      bH = new WeakMap,
      wH = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      tH = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function gH(MM) {
      if (MM) return !0 === MM ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== MM.intent,
        model: !1 !== MM.model
      }
    }

    function uH(MM, rM) {
      return {}.hasOwnProperty.call(MM, rM)
    }

    function RH(MM, rM) {
      const iM = Object.create(MM);
      return rM && Object.defineProperty(iM, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: rM
      }), iM
    }

    function pH(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!wi(MM)) return;
      const OM = MM.trim();
      return OM ? (iM ? function(MM, rM) {
        return function(MM) {
          return MM.length >= 10240 && (Rj.test(MM) || function(MM) {
            const rM = sj.exec(MM);
            if (!rM) return !1;
            let iM;
            try {
              iM = decodeURIComponent(MM.slice(rM[0].length))
            } catch (MM) {
              return !1
            }
            return Dj.test(iM.replace(/[\r\n]/g, ""))
          }(MM) || Wj.test(MM) && pj.test(MM))
        }(MM) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(MM, rM, iM) {
          const OM = 4 * iM.maxStringLength;
          if (MM.length > OM) {
            const SM = rM(MM.slice(0, function(MM, rM) {
              let iM = rM;
              for (; iM > 0 && !fj.test(MM[iM - 1]);) iM--;
              return iM
            }(MM, OM)));
            if (SM.length >= 2 * iM.maxStringLength) return SM + iM.truncationSuffix
          }
          return rM(MM)
        }(MM, (MM => function(MM) {
          return Qa(MM, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(MM) {
          let rM = MM.replace(Bj, " ");
          return rM = rM.replace(Xj, uj), rM = rM.replace(Ij, uj), rM = rM.replace(Kj, `$1${uj}`), rM = rM.replace(Tj, ma), rM = rM.replace(qj, uj), rM = rM.replace(cj, `$1${uj}`), rM = rM.replace(Ma, `$1${uj}`), rM
        }(za(MM)))), rM)
      }(OM, tH) : OM).slice(0, rM) : void 0
    }

    function WH(MM) {
      try {
        return Ci(MM) && !0 === MM.isError
      } catch (MM) {
        return !1
      }
    }
    const sH = {
        featureFlags: class extends Im {
          constructor(MM) {
            const rM = new qm(MM.config, MM._shouldDisableFlags());
            super(rM), this.name = CL, this._instance = MM, this._mutableConfigSource = rM
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(MM, rM) {
            this._mutableConfigSource.update(MM, rM), this._onConfigUpdated()
          }
        }
      },
      DH = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var MM;
            return !!(null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM ? void 0 : MM.isStarted)
          }
          get status() {
            var MM, rM;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (MM = null === (rM = this._lazyLoadedSessionRecording) || void 0 === rM ? void 0 : rM.status) && void 0 !== MM ? MM : this._recordingStatus
          }
          constructor(MM) {
            if (this._instance = MM, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = Hm, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var MM, rM;
                if (!(null == cr ? void 0 : cr.visibilityState) || "visible" === cr.visibilityState) return !0;
                const iM = null == qr || null === (MM = qr.performance) || void 0 === MM || null === (rM = MM.getEntriesByType) || void 0 === rM ? void 0 : rM.call(MM, "visibility-state");
                return !(null == iM ? void 0 : iM.length) || iM.some((MM => "visible" === MM.name))
              })(), this._onVisibilityChange = () => {
                var MM, rM;
                "visible" === (null == cr ? void 0 : cr.visibilityState) && (this._documentWasEverVisible = !0, null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM || null === (rM = MM.setDocumentWasEverVisible) || void 0 === rM || rM.call(MM, !0))
              }, !this._instance.sessionManager) throw Jm.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == cr ? void 0 : cr.addEventListener) && qa(cr, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: MM = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var rM;
            this._sessionRecordingDisposed = !0, null == cr || null === (rM = cr.removeEventListener) || void 0 === rM || rM.call(cr, "visibilitychange", this._onVisibilityChange), MM ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var MM;
            const rM = !!(null === (MM = this._instance.get_property("$session_recording_remote_config")) || void 0 === MM ? void 0 : MM.enabled),
              iM = !this._config.disable_session_recording,
              OM = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return qr && rM && iM && !OM
          }
          startIfEnabledOrStop(MM) {
            var rM;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (rM = this._lazyLoadedSessionRecording) || void 0 === rM ? void 0 : rM.isStarted)) return;
            const iM = !bi(Object.assign) && !bi(Array.from);
            this._isRecordingEnabled && iM ? (this._lazyLoadAndStart(MM), Jm.info("starting")) : (this._recordingStatus = Hm, this.stopRecording())
          }
          _lazyLoadAndStart(MM) {
            var rM, iM;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = hm), (null == Pi || null === (rM = Pi.__PosthogExtensions__) || void 0 === rM || null === (rM = rM.rrweb) || void 0 === rM ? void 0 : rM.record) && (null === (iM = Pi.__PosthogExtensions__) || void 0 === iM ? void 0 : iM.initSessionRecording)) this._onScriptLoaded(MM);
              else {
                var OM, SM;
                const rM = this._instance.sessionManager;
                null === (OM = Pi.__PosthogExtensions__) || void 0 === OM || null === (SM = OM.loadExternalDependency) || void 0 === SM || SM.call(OM, this._instance, this._scriptName, (iM => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === rM) return iM ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), Jm.error("could not load recorder", iM)) : void this._onScriptLoaded(MM);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var MM, rM;
            null === (MM = this._persistFlagsOnSessionListener) || void 0 === MM || MM.call(this), this._persistFlagsOnSessionListener = void 0, null === (rM = this._lazyLoadedSessionRecording) || void 0 === rM || rM.stop()
          }
          _discardRecording() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var rM, iM;
            null === (rM = this._persistFlagsOnSessionListener) || void 0 === rM || rM.call(this), this._persistFlagsOnSessionListener = void 0, null === (iM = this._lazyLoadedSessionRecording) || void 0 === iM || iM.discard({
              discardProducerEvents: MM
            })
          }
          _resetSampling() {
            var MM, rM;
            null === (MM = this._persistence) || void 0 === MM || MM.unregister("$session_is_sampled"), null === (rM = this._persistence) || void 0 === rM || rM.unregister("$replay_sample_rate")
          }
          _validateSampleRate(MM, rM) {
            if (ui(MM)) return null;
            const iM = Ri(MM) ? MM : parseFloat(MM);
            return "number" != typeof(OM = iM) || !Number.isFinite(OM) || 0 > OM || OM > 1 ? (Jm.warn(`${rM} must be between 0 and 1. Ignoring invalid value:`, MM), null) : iM;
            var OM
          }
          _persistRemoteConfig(MM) {
            if (this._persistence) {
              var rM, iM;
              const OM = this._persistence,
                SM = () => {
                  var rM;
                  const iM = !1 === MM.sessionRecording ? void 0 : MM.sessionRecording,
                    SM = this._validateSampleRate(null === (rM = this._config.session_recording) || void 0 === rM ? void 0 : rM.sampleRate, "session_recording.sampleRate"),
                    jM = this._validateSampleRate(null == iM ? void 0 : iM.sampleRate, "remote config sampleRate"),
                    aM = null != SM ? SM : jM;
                  ui(aM) && this._resetSampling();
                  const PM = null == iM ? void 0 : iM.minimumDurationMilliseconds;
                  OM.register({
                    [FM]: US(US({
                      cache_timestamp: Date.now(),
                      enabled: !!iM
                    }, iM), {}, {
                      networkPayloadCapture: US({
                        capturePerformance: MM.capturePerformance
                      }, null == iM ? void 0 : iM.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == iM ? void 0 : iM.recordCanvas,
                        fps: null == iM ? void 0 : iM.canvasFps,
                        quality: null == iM ? void 0 : iM.canvasQuality
                      },
                      sampleRate: aM,
                      minimumDurationMilliseconds: bi(PM) ? null : PM,
                      endpoint: null == iM ? void 0 : iM.endpoint,
                      triggerMatchType: null == iM ? void 0 : iM.triggerMatchType,
                      masking: null == iM ? void 0 : iM.masking,
                      urlTriggers: null == iM ? void 0 : iM.urlTriggers,
                      version: null == iM ? void 0 : iM.version,
                      triggerGroups: null == iM ? void 0 : iM.triggerGroups
                    })
                  })
                };
              SM(), null === (rM = this._persistFlagsOnSessionListener) || void 0 === rM || rM.call(this), this._persistFlagsOnSessionListener = null === (iM = this._instance.sessionManager) || void 0 === iM ? void 0 : iM.onSessionId(SM)
            }
          }
          onRemoteConfig(MM) {
            const rM = MM.ok ? MM.config : void 0;
            return rM && "sessionRecording" in rM ? !1 === rM.sessionRecording ? (this._persistRemoteConfig(rM), void this._discardRecording()) : (this._persistRemoteConfig(rM), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [pr]: !0
            }), Jm.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var iM;
            (null === (iM = this._lazyLoadedSessionRecording) || void 0 === iM ? void 0 : iM.log) ? this._lazyLoadedSessionRecording.log(MM, rM): Jm.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var MM, rM;
            const iM = null === (MM = this._instance) || void 0 === MM || null === (MM = MM.persistence) || void 0 === MM ? void 0 : MM.get_property(FM);
            return (null == iM || null === (rM = iM.scriptConfig) || void 0 === rM ? void 0 : rM.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const MM = this._instance.get_property(FM);
            if (!MM) return !1;
            let rM;
            try {
              rM = "object" == typeof MM ? MM : JSON.parse(MM)
            } catch (MM) {
              return Jm.warn("persisted remote config for session recording is invalid and will be ignored", MM), !1
            }
            return !ui(rM.cache_timestamp) && 36e5 >= Date.now() - rM.cache_timestamp
          }
          _onScriptLoaded(MM) {
            var rM, iM, OM;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.initSessionRecording)) return Jm.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [Rr]: !0
              });
              var SM;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (SM = Pi.__PosthogExtensions__) || void 0 === SM ? void 0 : SM.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", Jm.info("persisted remote config is stale, requesting fresh config before starting"), void new xQ(this._instance).load()
              }
              this._recordingStatus = hm, null === (iM = (OM = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === iM || iM.call(OM, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(MM)
            } else this._recordingStatus = Hm
          }
          onRRwebEmit(MM) {
            var rM, iM;
            null === (rM = this._lazyLoadedSessionRecording) || void 0 === rM || null === (iM = rM.onRRwebEmit) || void 0 === iM || iM.call(rM, MM)
          }
          overrideLinkedFlag() {
            var MM, rM;
            this._lazyLoadedSessionRecording || null === (rM = this._persistence) || void 0 === rM || rM.register({
              $replay_override_linked_flag: !0
            }), null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM || MM.overrideLinkedFlag()
          }
          overrideSampling() {
            var MM, rM;
            this._lazyLoadedSessionRecording || null === (rM = this._persistence) || void 0 === rM || rM.register({
              $replay_override_sampling: !0
            }), null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM || MM.overrideSampling()
          }
          overrideTrigger(MM) {
            var rM, iM;
            this._lazyLoadedSessionRecording || null === (iM = this._persistence) || void 0 === iM || iM.register({
              ["url" === MM ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (rM = this._lazyLoadedSessionRecording) || void 0 === rM || rM.overrideTrigger(MM)
          }
          get sdkDebugProperties() {
            var MM;
            const rM = {};
            for (const OM of dm) {
              var iM;
              const MM = null === (iM = this._instance.sessionPersistence) || void 0 === iM ? void 0 : iM.get_property(OM);
              bi(MM) || (rM[OM] = MM)
            }
            return US(US({}, rM), (null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM ? void 0 : MM.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(MM, rM) {
            var iM;
            return !!(null === (iM = this._lazyLoadedSessionRecording) || void 0 === iM ? void 0 : iM.tryAddCustomEvent(MM, rM))
          }
          flushBeforeIdentityReset() {
            var MM, rM;
            null === (MM = this._lazyLoadedSessionRecording) || void 0 === MM || null === (rM = MM.flushBeforeIdentityReset) || void 0 === rM || rM.call(MM)
          }
        }
      },
      kH = {
        autocapture: class extends rm {
          constructor(MM) {
            super(new im(MM)), this.instance = MM
          }
        },
        historyAutocapture: class {
          constructor(MM) {
            this._isFlushingPageview = !1, this._instance = MM, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const MM = this._getCaptureOptions();
            return !!(MM.path || MM.search || this._shouldCaptureHashChanges(MM))
          }
          startIfEnabled() {
            this.isEnabled && (fa.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, fa.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            qr && qr.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(MM) {
            var rM;
            if (!qr || (null === (rM = qr.history[MM]) || void 0 === rM ? void 0 : rM.__posthog_wrapped__)) return;
            const iM = this;
            am(qr.history, MM, (rM => function(OM, SM, jM) {
              var aM;
              iM._isUrlChanging(jM) && iM._flushPendingPageview(), rM.call(this, OM, SM, jM), iM._capturePageview(MM, !iM._isFlushingPageview && "popstate" !== (null == qr || null === (aM = qr.event) || void 0 === aM ? void 0 : aM.type))
            }))
          }
          _getCurrentLocation() {
            const MM = null == qr ? void 0 : qr.location;
            if (null == MM ? void 0 : MM.pathname) return {
              pathname: MM.pathname,
              search: MM.search,
              hash: MM.hash
            }
          }
          _getCaptureOptions() {
            const MM = this._instance.config.capture_pageview;
            return "history_change" === MM ? {
              path: !0
            } : Ci(MM) ? MM : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(MM) {
            const rM = this._getCaptureOptions(),
              iM = this._lastLocation;
            return !(!iM || !(rM.path && MM.pathname !== iM.pathname || rM.search && MM.search !== iM.search || this._shouldCaptureHashChanges(rM) && MM.hash !== iM.hash))
          }
          _capturePageview(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              rM || this._flushPendingPageview();
              const iM = this._getCurrentLocation();
              if (!iM) return;
              if (this._hasLocationChanged(iM)) {
                const iM = () => this._instance.capture(Br, {
                  navigation_type: MM
                });
                rM ? (this._pendingPageview = iM, Promise.resolve().then((() => this._flushPendingPageview()))) : iM()
              }
              this._lastLocation = iM
            } catch (rM) {
              fa.error(`Error capturing ${MM} pageview`, rM)
            }
          }
          _isUrlChanging(MM) {
            var rM, iM;
            return !(ui(MM) || !qr) && (null === (rM = xn(String(MM))) || void 0 === rM ? void 0 : rM.href) !== (null === (iM = qr.location) || void 0 === iM ? void 0 : iM.href)
          }
          _flushPendingPageview() {
            const MM = this._pendingPageview;
            if (MM) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                MM()
              } catch (MM) {
                fa.error("Error capturing deferred pageview", MM)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const MM = () => {
              this._capturePageview("popstate")
            };
            qa(qr, "popstate", MM), this._popstateListener = () => {
              qr && qr.removeEventListener("popstate", MM)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const MM = () => {
              this._capturePageview("hashchange")
            };
            qa(qr, "hashchange", MM), this._hashchangeListener = () => {
              qr && qr.removeEventListener("hashchange", MM)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(MM) {
            var rM;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = MM, this._enabledServerSide = !!(null === (rM = this.instance.persistence) || void 0 === rM ? void 0 : rM.props[kM]), this.rageclicks = new qL(MM.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let MM = 5e3;
            return Ci(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (MM = this._config.capture_heatmaps.flush_interval_milliseconds), MM
          }
          get isEnabled() {
            return ui(this._config.capture_heatmaps) ? ui(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              ym.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var MM;
              clearInterval(null !== (MM = this._flushInterval) && void 0 !== MM ? MM : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(MM) {
            if (!MM.ok) return;
            const rM = MM.config;
            if (!("heatmaps" in rM)) return;
            const iM = !!rM.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [kM]: iM
            }), this._enabledServerSide = iM, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const MM = this._buffer;
            return this._buffer = void 0, MM
          }
          _onDeadClick(MM) {
            lm(MM.originalEvent) && this._onClick(MM.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == cr ? void 0 : cr.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            qr && cr && (this._flushHandler = this._flush.bind(this), qa(qr, Fr, this._flushHandler), this._onClickHandler = MM => this._onClick(MM || (null == qr ? void 0 : qr.event)), qa(cr, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = MM => this._onMouseMove(MM || (null == qr ? void 0 : qr.event)), qa(cr, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new bn(this.instance, Cn, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), qa(cr, GM, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var MM;
            qr && cr && (this._flushHandler && qr.removeEventListener(Fr, this._flushHandler), this._onClickHandler && cr.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && cr.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && cr.removeEventListener(GM, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (MM = this._deadClicksCapture) || void 0 === MM || MM.stop(), this._initialized = !1)
          }
          _getProperties(MM, rM) {
            const iM = this.instance.scrollManager.scrollY(),
              OM = this.instance.scrollManager.scrollX(),
              SM = this.instance.scrollManager.scrollElement(),
              jM = function(MM, rM, iM) {
                let OM = MM;
                for (; OM && RP(OM) && !pP(OM, "body");) {
                  if (OM === iM) return !1;
                  let PM;
                  try {
                    var SM, jM, aM;
                    PM = null === (SM = null !== (jM = null === (aM = OM.ownerDocument) || void 0 === aM ? void 0 : aM.defaultView) && void 0 !== jM ? jM : qr) || void 0 === SM ? void 0 : SM.getComputedStyle(OM).position
                  } catch (MM) {
                    return !1
                  }
                  if (mi(rM, PM)) return !0;
                  OM = vP(OM)
                }
                return !1
              }(YP(MM), ["fixed", "sticky"], SM);
            return {
              x: MM.clientX + (jM ? 0 : OM),
              y: MM.clientY + (jM ? 0 : iM),
              target_fixed: jM,
              type: rM
            }
          }
          _onClick(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var iM;
            if (uP(MM.target) || !lm(MM)) return;
            const OM = this._getProperties(MM, rM);
            (null === (iM = this.rageclicks) || void 0 === iM ? void 0 : iM.isRageClick(MM.clientX, MM.clientY, (new Date).getTime())) && On(YP(MM), this.instance.config.rageclick) && this._capture(US(US({}, OM), {}, {
              type: "rageclick"
            })), this._capture(OM)
          }
          _onMouseMove(MM) {
            !uP(MM.target) && lm(MM) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(MM, "mousemove"))
            }), 500))
          }
          _capture(MM) {
            if (!qr) return;
            const rM = this._config.disable_capture_url_hashes ? mS(qr.location.href) : qr.location.href,
              iM = this._config.custom_personal_data_properties,
              OM = this._config.mask_personal_data_properties ? [...Xn, ...iM || []] : [],
              SM = Fn(rM, OM, Kn);
            this._buffer = this._buffer || {}, this._buffer[SM] || (this._buffer[SM] = []), this._buffer[SM].push(MM)
          }
          _flush() {
            this._buffer && !ei(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: bn,
        webVitalsAutocapture: class {
          constructor(MM) {
            var rM;
            this._instance = MM, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", US({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((MM, rM) => US(US({}, MM), {}, {
                [`$web_vitals_${rM.name}_event`]: US({}, rM),
                [`$web_vitals_${rM.name}_value`]: rM.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = MM => {
              var rM;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, ui(null == MM ? void 0 : MM.name) || ui(null == MM ? void 0 : MM.value)) return void nm.error("Invalid metric received", MM);
              const iM = "string" == typeof MM.navigationURL ? MM.navigationURL : void 0,
                OM = this._maskedURL(iM);
              if (bi(OM)) return;
              const SM = Ri(MM.navigationId) || "string" == typeof MM.navigationId ? `navigation:${MM.navigationId}` : `url:${OM}`;
              if (this._maxAllowedValue && MM.value >= this._maxAllowedValue) return void nm.error("Ignoring metric with value >= " + this._maxAllowedValue, MM);
              this._buffer.navigationKey !== SM && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), bi(this._buffer.navigationKey) && (this._buffer.navigationKey = SM, this._buffer.url = OM), this._buffer.firstMetricTimestamp = bi(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const jM = null === (rM = this._instance.sessionManager) || void 0 === rM ? void 0 : rM.checkAndGetSessionAndWindowId(!0),
                aM = US(US(US({}, MM), iM ? {
                  navigationURL: OM
                } : {}), {}, {
                  $current_url: OM,
                  timestamp: Date.now()
                });
              if (delete aM.entries, Ci(MM.attribution) && this.attributionMetrics.indexOf(MM.name) > -1) {
                const rM = {};
                for (const iM of mm) {
                  const OM = "url" === iM && "string" == typeof MM.attribution[iM] ? this._maskedURL(MM.attribution[iM]) : MM.attribution[iM];
                  bi(OM) || (rM[iM] = OM)
                }
                aM.attribution = rM
              } else delete aM.attribution;
              bi(jM) || (aM.$session_id = jM.sessionId, aM.$window_id = jM.windowId), this._buffer.metrics.push(aM), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let MM, rM, iM, OM, SM = !1;
              const jM = Pi.__PosthogExtensions__,
                aM = null == jM ? void 0 : jM.postHogWebVitalsCallbacksByFlavor,
                PM = (null == aM ? void 0 : aM[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && bi(aM) ? null == jM ? void 0 : jM.postHogWebVitalsCallbacks : void 0);
              if (!bi(PM)) {
                const jM = PM.withoutAttribution,
                  aM = this.attributionMetrics;
                SM = !bi(jM), MM = aM.indexOf("LCP") > -1 ? PM.onLCP : (null == jM ? void 0 : jM.onLCP) || PM.onLCP, rM = aM.indexOf("CLS") > -1 ? PM.onCLS : (null == jM ? void 0 : jM.onCLS) || PM.onCLS, iM = aM.indexOf("FCP") > -1 ? PM.onFCP : (null == jM ? void 0 : jM.onFCP) || PM.onFCP, OM = aM.indexOf("INP") > -1 ? PM.onINP : (null == jM ? void 0 : jM.onINP) || PM.onINP
              }
              if (!(MM && rM && iM && OM)) return void nm.error("web vitals callbacks not loaded - not starting");
              const nM = {
                  reportSoftNavs: this.useSoftNavs
                },
                QM = SM && this.attributionMetrics.indexOf("INP") > -1 ? US(US({}, nM), {}, {
                  includeProcessedEventEntries: !1
                }) : nM;
              this.allowedMetrics.indexOf("LCP") > -1 && MM(this._addToBuffer.bind(this), nM), this.allowedMetrics.indexOf("CLS") > -1 && rM(this._addToBuffer.bind(this), nM), this.allowedMetrics.indexOf("FCP") > -1 && iM(this._addToBuffer.bind(this), nM), this.allowedMetrics.indexOf("INP") > -1 && OM(this._addToBuffer.bind(this), QM), this._initialized = !0
            }, this._enabledServerSide = !!(null === (rM = this._instance.persistence) || void 0 === rM ? void 0 : rM.props[YM]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var MM, rM;
            const iM = Ci(this._perfConfig) ? null === (MM = this._perfConfig) || void 0 === MM ? void 0 : MM.web_vitals_allowed_metrics : void 0;
            return ui(iM) ? (null === (rM = this._instance.persistence) || void 0 === rM ? void 0 : rM.props.$web_vitals_allowed_metrics) || zm : iM
          }
          get flushToCaptureTimeoutMs() {
            return (Ci(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const MM = Ci(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return si(MM) ? MM ? zm : [] : Ui(MM) ? MM : Lm
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const MM = Ci(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != MM && MM
          }
          get _maxAllowedValue() {
            const MM = Ci(this._perfConfig) && Ri(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : Qm;
            return MM > 0 && 6e4 >= MM ? Qm : MM
          }
          get isEnabled() {
            const MM = null == Mi ? void 0 : Mi.protocol;
            if ("http:" !== MM && "https:" !== MM) return nm.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const rM = Ci(this._perfConfig) ? this._perfConfig.web_vitals : si(this._perfConfig) ? this._perfConfig : void 0;
            return si(rM) ? rM : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (nm.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(MM) {
            if (!MM.ok) return;
            const rM = MM.config;
            if (!("capturePerformance" in rM)) return;
            const iM = Ci(rM.capturePerformance) && !!rM.capturePerformance.web_vitals,
              OM = Ci(rM.capturePerformance) ? rM.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [YM]: iM
            }), this._instance.persistence.register({
              [vM]: OM
            })), this._enabledServerSide = iM, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(MM) {
            var rM;
            const iM = Pi.__PosthogExtensions__,
              OM = this._callbackFlavor,
              SM = null == iM ? void 0 : iM.postHogWebVitalsCallbacksByFlavor;
            (null == SM ? void 0 : SM[OM]) || "web-vitals" === OM && bi(SM) && (null == iM ? void 0 : iM.postHogWebVitalsCallbacks) ? MM() : null == iM || null === (rM = iM.loadExternalDependency) || void 0 === rM || rM.call(iM, this._instance, OM, (rM => {
              rM ? nm.error("failed to load script", rM) : MM()
            }))
          }
          _maskedURL(MM) {
            const rM = MM || (null == qr ? void 0 : qr.location.href);
            if (!rM) return void nm.error("Could not determine current URL");
            const iM = this._instance.config.disable_capture_url_hashes ? mS(rM) : rM,
              OM = this._instance.config.custom_personal_data_properties,
              SM = this._instance.config.mask_personal_data_properties ? [...Xn, ...OM || []] : [];
            return Fn(iM, SM, Kn)
          }
        }
      },
      ZH = {
        exceptionObserver: class {
          constructor(MM) {
            var rM;
            this._startCapturing = () => {
              var MM;
              if (!qr || !this.isEnabled || !(null === (MM = Pi.__PosthogExtensions__) || void 0 === MM ? void 0 : MM.errorWrappingFunctions)) return;
              const rM = Pi.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                iM = Pi.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                OM = Pi.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = rM(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = iM(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = OM(this.captureException.bind(this)))
              } catch (MM) {
                Om.error("failed to start", MM), this._stopCapturing()
              }
            }, this._instance = MM, this._remoteEnabled = !!(null === (rM = this._instance.persistence) || void 0 === rM ? void 0 : rM.props[ZM]), this._rateLimiter = new Ti(US(US({}, function() {
              let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var rM, iM, OM, SM;
              return {
                refillRate: null !== (rM = null !== (iM = MM.exceptionRateLimiterRefillRate) && void 0 !== iM ? iM : MM.__exceptionRateLimiterRefillRate) && void 0 !== rM ? rM : 1,
                bucketSize: null !== (OM = null !== (SM = MM.exceptionRateLimiterBucketSize) && void 0 !== SM ? SM : MM.__exceptionRateLimiterBucketSize) && void 0 !== OM ? OM : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Om
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const MM = this._instance.config.capture_exceptions;
            let rM = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return Ci(MM) ? rM = US(US({}, rM), MM) : (bi(MM) ? this._remoteEnabled : MM) && (rM = US(US({}, rM), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), rM
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Om.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(MM) {
            var rM, iM, OM;
            (null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.errorWrappingFunctions) ? MM(): null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this._instance, "exception-autocapture", (rM => {
              if (rM) return Om.error("failed to load script", rM);
              MM()
            }))
          }
          _stopCapturing() {
            var MM, rM, iM;
            null === (MM = this._unwrapOnError) || void 0 === MM || MM.call(this), this._unwrapOnError = void 0, null === (rM = this._unwrapUnhandledRejection) || void 0 === rM || rM.call(this), this._unwrapUnhandledRejection = void 0, null === (iM = this._unwrapConsoleError) || void 0 === iM || iM.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(MM) {
            if (!MM.ok) return;
            const rM = MM.config;
            "autocaptureExceptions" in rM && (this._remoteEnabled = !!rM.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [ZM]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(MM) {
            try {
              var rM, iM, OM;
              const SM = null !== (rM = null == MM || null === (iM = MM.$exception_list) || void 0 === iM || null === (iM = iM[0]) || void 0 === iM ? void 0 : iM.type) && void 0 !== rM ? rM : "Exception";
              if (this._rateLimiter.consumeRateLimit(SM)) return void Om.info("Skipping exception capture because of client rate limiting.", {
                exception: SM
              });
              null === (OM = this._instance.exceptions) || void 0 === OM || OM.sendExceptionEvent(MM)
            } catch (MM) {}
          }
        },
        exceptions: class {
          constructor(MM) {
            var rM, iM;
            this._suppressionRules = [], this._errorPropertiesBuilder = new gS([new qS, new aj, new VS, new TS, new Sj, new Oj, new Mj, new jj], function(MM) {
              for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
              return function(rM) {
                let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const SM = [],
                  jM = rM.split("\n"),
                  aM = Math.min(jM.length, OM + 1e3),
                  PM = [];
                for (let zM = OM; aM > zM; zM++) {
                  const rM = jM[zM];
                  if (rM.length > 1024) continue;
                  const OM = AS.test(rM) ? rM.replace(AS, "$1") : rM;
                  if (!OM.match(/\S*Error: /)) {
                    for (const rM of iM) {
                      const iM = rM(OM, MM);
                      if (iM) {
                        SM.push(iM);
                        const MM = vS(SM);
                        if (MM) {
                          for (let rM = PM.length - 1; rM >= 0; rM--) {
                            const iM = PM[rM];
                            if (MM.start >= iM.start + iM.length) break;
                            PM.pop()
                          }
                          PM.push(MM)
                        }
                        break
                      }
                    }
                    if (IS(SM, PM) >= 50) break
                  }
                }
                const nM = [...PM].sort(((MM, rM) => rM.start - MM.start)),
                  QM = nM[nM.length - 1];
                if (QM) {
                  const MM = BS(SM, QM);
                  SM.splice(QM.start - MM, MM);
                  for (const rM of nM) rM.start -= MM
                }
                for (const MM of nM) FS(SM, MM);
                return PM.some((MM => 0 === MM.start && SM.length === MM.length)) && function(MM) {
                    const rM = MM.map((MM => `${MM.function}|${MM.filename}|${MM.lineno}|${MM.colno}|${MM.module}`));
                    let iM = 0;
                    for (let OM = 1; rM.length > OM; OM++) KS(rM, OM, iM) && (iM = OM);
                    MM.push(...MM.splice(0, iM))
                  }(SM),
                  function(MM) {
                    if (!MM.length) return [];
                    const rM = Array.from(MM);
                    return rM.reverse(), rM.slice(0, 50).map((MM => {
                      return US(US({}, MM), {}, {
                        filename: MM.filename || (iM = rM, iM[iM.length - 1] || {}).filename,
                        function: MM.function || "?"
                      });
                      var iM
                    }))
                  }(SM)
              }
            }("web:javascript", oS, NS)), this._instance = MM, this._suppressionRules = null !== (rM = null === (iM = this._instance.persistence) || void 0 === iM ? void 0 : iM.get_property("$error_tracking_suppression_rules")) && void 0 !== rM ? rM : [], this._exceptionStepsConfig = Lj(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new mj(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = Lj(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(MM) {
            var rM, iM, OM;
            if (!MM.ok) return;
            const SM = MM.config;
            if (!("errorTracking" in SM)) return;
            const jM = null !== (rM = null === (iM = SM.errorTracking) || void 0 === iM ? void 0 : iM.suppressionRules) && void 0 !== rM ? rM : [],
              aM = null === (OM = SM.errorTracking) || void 0 === OM ? void 0 : OM.captureExtensionExceptions;
            this._suppressionRules = jM, this._instance.persistence && this._instance.persistence.register({
              [oM]: this._suppressionRules,
              [fM]: aM
            })
          }
          get _captureExtensionExceptions() {
            var MM;
            const rM = !!this._instance.get_property(fM),
              iM = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (MM = null != iM ? iM : rM) && void 0 !== MM && MM
          }
          buildProperties(MM, rM) {
            return this._errorPropertiesBuilder.buildFromUnknown(MM, {
              syntheticException: null == rM ? void 0 : rM.syntheticException,
              mechanism: {
                handled: null == rM ? void 0 : rM.handled
              }
            })
          }
          addExceptionStep(MM, rM) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!wi(MM) || 0 === MM.trim().length) return void Vm.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: iM,
                droppedKeys: OM
              } = function(MM) {
                if (!MM) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const rM = [];
                return {
                  sanitizedProperties: Object.keys(MM).reduce(((iM, OM) => Qj.has(OM) ? (rM.push(OM), iM) : (iM[OM] = MM[OM], iM)), {}),
                  droppedKeys: rM
                }
              }(this._coerceExceptionStepProperties(rM));
              OM.length > 0 && Vm.warn("Ignoring reserved exception step fields", {
                droppedKeys: OM
              }), this._exceptionStepsBuffer.add(US({
                [Pj]: MM,
                [nj]: (new Date).toISOString()
              }, iM))
            } catch (MM) {
              Vm.error("Failed to add exception step. Ignoring breadcrumb.", MM)
            }
          }
          sendExceptionEvent(MM) {
            try {
              const rM = MM.$exception_list;
              if (this._isExceptionList(rM)) {
                if (this._matchesSuppressionRule(rM)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Vm.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(rM)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Vm.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(rM)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Vm.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(rM)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Vm.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const iM = this._exceptionStepsConfig.enabled && ui(MM.$exception_steps) ? this._addBufferedExceptionSteps(MM) : MM,
                OM = function() {
                  if ("u" > typeof process) {
                    var MM;
                    const rM = null === (MM = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === MM ? void 0 : MM.trim();
                    if (rM) return rM
                  }
                  const rM = globalThis._posthogReleaseId;
                  return "string" == typeof rM && rM.length > 0 ? rM : void 0
                }();
              OM && (iM.$release_id = OM);
              try {
                const MM = this._instance.capture("$exception", iM, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return MM && this._exceptionStepsBuffer.clear(), MM
              } catch (MM) {
                return Tm(MM) || Vm.error("Failed to capture exception event. Dropping this exception.", MM), void this._exceptionStepsBuffer.clear()
              }
            } catch (MM) {
              return void(Tm(MM) || Vm.error("Failed to process exception event. Ignoring this exception.", MM))
            }
          }
          _addBufferedExceptionSteps(MM) {
            try {
              const rM = this._exceptionStepsBuffer.getAttachable();
              return 0 === rM.length ? MM : US(US({}, MM), {}, {
                $exception_steps: rM
              })
            } catch (SM) {
              return Vm.error("Failed to read buffered exception steps. Capturing exception without steps.", SM), MM
            }
          }
          _addDroppedExceptionStep(MM) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [Pj]: MM,
              [nj]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(MM) {
            return Ci(MM) ? US({}, MM) : {}
          }
          _getExceptionStepsConfig() {
            var MM, rM;
            return null !== (MM = null === (rM = this._instance.config.error_tracking) || void 0 === rM ? void 0 : rM.exception_steps) && void 0 !== MM ? MM : {}
          }
          _matchesSuppressionRule(MM) {
            if (0 === MM.length) return !1;
            try {
              const rM = MM.reduce(((MM, rM) => {
                let {
                  type: iM,
                  value: OM
                } = rM;
                return wi(iM) && iM.length > 0 && MM.$exception_types.push(iM), wi(OM) && OM.length > 0 && MM.$exception_values.push(OM), MM
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((MM => {
                const iM = MM.values.map((MM => {
                  const iM = aL[MM.operator],
                    OM = rM[MM.key];
                  if (!iM || !OM) return !1;
                  const SM = Ui(MM.value) ? MM.value : [MM.value];
                  return SM.length > 0 && iM(SM, OM)
                }));
                return "OR" === MM.type ? iM.some(Boolean) : iM.every(Boolean)
              }))
            } catch (MM) {
              return Vm.warn("Failed to evaluate suppression rules. Capturing the exception.", MM), !1
            }
          }
          _isExtensionException(MM) {
            const rM = MM.flatMap((MM => {
                var rM, iM;
                return null !== (rM = null === (iM = MM.stacktrace) || void 0 === iM ? void 0 : iM.frames) && void 0 !== rM ? rM : []
              })),
              iM = rM.filter((MM => {
                let {
                  filename: rM
                } = MM;
                return !!rM && rH.some((MM => rM.startsWith(MM)))
              }));
            return 0 !== iM.length && (!iM.every((MM => {
              let {
                filename: rM
              } = MM;
              return !!rM && rM.startsWith(cm)
            })) || MM.some((MM => {
              let {
                type: rM,
                value: iM
              } = MM;
              return "NoResponse" === rM || wi(iM) && MH.some((MM => {
                let {
                  value: rM,
                  exact: OM
                } = MM;
                return OM ? iM === rM : iM.includes(rM)
              }))
            })) && !rM.some((MM => {
              let {
                in_app: rM,
                filename: iM
              } = MM;
              return rM && !(null == iM ? void 0 : iM.startsWith(cm))
            })))
          }
          _isInjectedBrowserScriptException(MM) {
            return MM.some((MM => {
              let {
                value: rM
              } = MM;
              return wi(rM) && iH.some((MM => rM.includes(MM)))
            }))
          }
          _isPostHogException(MM) {
            if (MM.length > 0) {
              var rM, iM, OM, SM;
              const jM = null !== (rM = null === (iM = MM[0].stacktrace) || void 0 === iM ? void 0 : iM.frames) && void 0 !== rM ? rM : [],
                aM = jM[jM.length - 1];
              return null !== (OM = null == aM || null === (SM = aM.filename) || void 0 === SM ? void 0 : SM.includes("posthog.com/static")) && void 0 !== OM && OM
            }
            return !1
          }
          _isExceptionList(MM) {
            return !ui(MM) && Ui(MM)
          }
        }
      },
      oH = US({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(MM) {
            this._productTourManager = null, this._cachedTours = null, this._instance = MM
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(MM) {
            if (!MM.ok) return;
            const rM = MM.config;
            if ("productTours" in rM) {
              var iM, OM;
              if (this._persistence && this._persistence.register({
                  [AM]: !!rM.productTours
                }), !Um(this._instance)) return !this._productTourManager && ui(null === (iM = this._persistence) || void 0 === iM ? void 0 : iM.props.ph_product_tours) || Em.info("product tours disabled; stopping and clearing cached tours"), null === (OM = this._productTourManager) || void 0 === OM || OM.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Um(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(MM) {
            var rM, iM, OM;
            (null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.generateProductTours) ? MM(): null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this._instance, "product-tours", (rM => {
              rM ? Em.error("Could not load product tours script", rM) : MM()
            }))
          }
          _startProductTours() {
            var MM;
            !this._productTourManager && (null === (MM = Pi.__PosthogExtensions__) || void 0 === MM ? void 0 : MM.generateProductTours) && (this._productTourManager = Pi.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (Ui(this._cachedTours) && !rM) return void MM(this._cachedTours, {
              isLoaded: !0
            });
            const iM = this._persistence;
            if (iM) {
              const OM = iM.props[Lr];
              if (Ui(OM) && !rM) return this._cachedTours = OM, void MM(OM, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: rM => {
                if (!Um(this._instance)) return void MM([], {
                  isLoaded: !0
                });
                const OM = rM.statusCode;
                if (200 !== OM || !rM.json) {
                  const iM = `Product Tours API could not be loaded, status: ${OM}`;
                  return 0 === OM ? rM.error || Em.warn(iM) : Em.error(iM), void MM([], {
                    isLoaded: !1,
                    error: iM
                  })
                }
                const SM = Ui(rM.json.product_tours) ? rM.json.product_tours : [];
                this._cachedTours = SM, iM && iM.register({
                  [Lr]: SM
                }), MM(SM, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(MM) {
            ui(this._productTourManager) ? MM([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(MM)
          }
          showProductTour(MM) {
            var rM;
            null === (rM = this._productTourManager) || void 0 === rM || rM.showTourById(MM)
          }
          previewTour(MM) {
            this._productTourManager ? this._productTourManager.previewTour(MM) : this._loadScript((() => {
              var rM;
              this._startProductTours(), null === (rM = this._productTourManager) || void 0 === rM || rM.previewTour(MM)
            }))
          }
          dismissProductTour() {
            var MM;
            null === (MM = this._productTourManager) || void 0 === MM || MM.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var MM;
            null === (MM = this._productTourManager) || void 0 === MM || MM.nextStep()
          }
          previousStep() {
            var MM;
            null === (MM = this._productTourManager) || void 0 === MM || MM.previousStep()
          }
          clearCache() {
            var MM;
            this._cachedTours = null, null === (MM = this._persistence) || void 0 === MM || MM.unregister("ph_product_tours")
          }
          resetTour(MM) {
            var rM;
            null === (rM = this._productTourManager) || void 0 === rM || rM.resetTour(MM)
          }
          resetAllTours() {
            var MM;
            null === (MM = this._productTourManager) || void 0 === MM || MM.resetAllTours()
          }
          cancelPendingTour(MM) {
            var rM;
            null === (rM = this._productTourManager) || void 0 === rM || rM.cancelPendingTour(MM)
          }
        }
      }, sH),
      fH = {
        siteApps: class {
          constructor(MM) {
            this._instance = MM, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(MM, rM) {
            if (!rM) return;
            const iM = this.globalsForEvent(rM);
            this._bufferedInvocations.push(iM), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var MM;
            return null === (MM = Pi._POSTHOG_REMOTE_CONFIG) || void 0 === MM || null === (MM = MM[this._instance.config.token]) || void 0 === MM ? void 0 : MM.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const MM = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                MM(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(MM) {
            var rM, iM, OM, SM, jM, aM, PM;
            if (!MM) throw new Error("Event payload is required");
            const nM = {},
              QM = this._instance.get_property("$groups") || [],
              zM = this._instance.get_property("$stored_group_properties") || {};
            for (const [HM, hM] of Object.entries(zM)) nM[HM] = {
              id: QM[HM],
              type: HM,
              properties: hM
            };
            const {
              $set_once: LM,
              $set: mM
            } = MM;
            return {
              event: US(US({}, gj(MM, Gm)), {}, {
                properties: US(US(US({}, MM.properties), mM ? {
                  $set: US(US({}, null !== (rM = null === (iM = MM.properties) || void 0 === iM ? void 0 : iM.$set) && void 0 !== rM ? rM : {}), mM)
                } : {}), LM ? {
                  $set_once: US(US({}, null !== (OM = null === (SM = MM.properties) || void 0 === SM ? void 0 : SM.$set_once) && void 0 !== OM ? OM : {}), LM)
                } : {}),
                elements_chain: null !== (jM = null === (aM = MM.properties) || void 0 === aM ? void 0 : aM.$elements_chain) && void 0 !== jM ? jM : "",
                distinct_id: null === (PM = MM.properties) || void 0 === PM ? void 0 : PM.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: nM
            }
          }
          _prepareElementForSiteApp(MM) {
            var rM;
            const iM = null === (rM = MM.tagName) || void 0 === rM ? void 0 : rM.toLowerCase();
            return "style" === iM && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(MM) || (Cm.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === iM && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(MM) || (Cm.error("prepare_external_dependency_script returned null"), null) : MM
          }
          _patchSiteAppElementInsertionMethods() {
            var MM, rM, iM, OM, SM, jM, aM, PM;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const nM = null == cr ? void 0 : cr.defaultView,
              QM = null == nM || null === (MM = nM.Node) || void 0 === MM ? void 0 : MM.prototype;
            if (!nM || !QM) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const zM = [],
              LM = this,
              mM = new WeakSet,
              HM = (MM, rM, iM) => {
                if (!(null == MM ? void 0 : MM[rM])) return;
                const OM = MM[rM];
                MM[rM] = iM(OM), zM.push((() => {
                  MM[rM] = OM
                }))
              },
              hM = MM => {
                if (mM.has(MM)) return MM;
                const rM = LM._prepareElementForSiteApp(MM);
                return rM && mM.add(rM), rM
              },
              JM = MM => MM.map((MM => "string" == typeof MM ? MM : hM(MM))).filter((MM => !gi(MM)));
            return HM(QM, "appendChild", (MM => function(rM) {
              const iM = hM(rM);
              return iM ? MM.call(this, iM) : rM
            })), HM(QM, "insertBefore", (MM => function(rM, iM) {
              const OM = hM(rM);
              return OM ? MM.call(this, OM, iM) : rM
            })), HM(QM, "replaceChild", (MM => function(rM, iM) {
              const OM = hM(rM);
              return OM ? MM.call(this, OM, iM) : iM
            })), [null === (rM = nM.Element) || void 0 === rM ? void 0 : rM.prototype, null === (iM = nM.Document) || void 0 === iM ? void 0 : iM.prototype, null === (OM = nM.DocumentFragment) || void 0 === OM ? void 0 : OM.prototype].forEach((MM => {
              HM(MM, "append", (MM => function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                return MM.apply(this, JM(iM))
              })), HM(MM, "prepend", (MM => function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                return MM.apply(this, JM(iM))
              }))
            })), [null === (SM = nM.Element) || void 0 === SM ? void 0 : SM.prototype, null === (jM = nM.CharacterData) || void 0 === jM ? void 0 : jM.prototype, null === (aM = nM.DocumentType) || void 0 === aM ? void 0 : aM.prototype].forEach((MM => {
              HM(MM, "before", (MM => function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                return MM.apply(this, JM(iM))
              })), HM(MM, "after", (MM => function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                return MM.apply(this, JM(iM))
              })), HM(MM, "replaceWith", (MM => function() {
                for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
                const SM = JM(iM);
                return iM.length && !SM.length ? void 0 : MM.apply(this, SM)
              }))
            })), HM(null === (PM = nM.Element) || void 0 === PM ? void 0 : PM.prototype, "insertAdjacentElement", (MM => function(rM, iM) {
              const OM = hM(iM);
              return OM ? MM.call(this, rM, OM) : null
            })), this._restoreSiteAppElementPatches = () => {
              zM.forEach((MM => MM())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let MM = !1;
            return () => {
              var rM;
              MM || (MM = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (rM = this._restoreSiteAppElementPatches) || void 0 === rM || rM.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(MM) {
            let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const iM = this._patchSiteAppElementInsertionMethods();
            try {
              const OM = MM(iM);
              return rM && iM(), OM
            } catch (MM) {
              throw iM(), MM
            }
          }
          setupSiteApp(MM) {
            const rM = this.apps[MM.id],
              iM = () => {
                var iM;
                !rM.errored && this._bufferedInvocations.length && (Cm.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${MM.id}`), this._bufferedInvocations.forEach((MM => this._runWithPreparedSiteAppElements((() => {
                  var iM;
                  return null === (iM = rM.processEvent) || void 0 === iM ? void 0 : iM.call(rM, MM)
                })))), rM.processedBuffer = !0), Object.values(this.apps).every((MM => MM.processedBuffer || MM.errored)) && (null === (iM = this._stopBuffering) || void 0 === iM || iM.call(this))
              };
            let OM = !1;
            const SM = SM => {
              rM.errored = !SM, rM.loaded = !0, Cm.info(`Site app with id ${MM.id} ${SM?"loaded":"errored"}`), OM && iM()
            };
            try {
              const {
                processEvent: iM
              } = this._runWithPreparedSiteAppElements((rM => MM.init({
                posthog: this._instance,
                callback(MM) {
                  rM(), SM(MM)
                }
              })), !1);
              iM && (rM.processEvent = iM), OM = !0
            } catch (rM) {
              Cm.error(em + MM.id, rM), SM(!1)
            }
            if (OM && rM.loaded) try {
              iM()
            } catch (iM) {
              Cm.error(`Error while processing buffered events PostHog app with config id ${MM.id}`, iM), rM.errored = !0
            }
          }
          _setupSiteApps() {
            const MM = this.siteAppLoaders || [];
            for (const rM of MM) this.apps[rM.id] = {
              id: rM.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const rM of MM) this.setupSiteApp(rM)
          }
          _onCapturedEvent(MM) {
            if (0 === Object.keys(this.apps).length) return;
            const rM = this.globalsForEvent(MM);
            for (const iM of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var MM;
                return null === (MM = iM.processEvent) || void 0 === MM ? void 0 : MM.call(iM, rM)
              }))
            } catch (rM) {
              Cm.error(`Error while processing event ${MM.event} for site app ${iM.id}`, rM)
            }
          }
          onRemoteConfig(MM) {
            var rM, iM, OM;
            if (null === (rM = this.siteAppLoaders) || void 0 === rM ? void 0 : rM.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (MM => this._onCapturedEvent(MM)))) : void Cm.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (iM = this._stopBuffering) || void 0 === iM || iM.call(this), !MM.ok) return;
            const SM = MM.config;
            if (null === (OM = SM.siteApps) || void 0 === OM ? void 0 : OM.length)
              if (this.isEnabled)
                for (const {
                    id: PM,
                    url: nM
                  }
                  of SM.siteApps) {
                  var jM, aM;
                  Pi[`__$$ph_site_app_${PM}`] = this._instance, null === (jM = Pi.__PosthogExtensions__) || void 0 === jM || null === (aM = jM.loadSiteApp) || void 0 === aM || aM.call(jM, this._instance, nM, (MM => {
                    if (MM) return Cm.error(em + PM, MM)
                  }))
                } else Cm.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      YH = {
        tracingHeaders: class {
          constructor(MM) {
            this._instance = MM, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const MM = this._syncHostnamesForPatch();
              var rM, iM;
              MM ? (bi(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (rM = Pi.__PosthogExtensions__) || void 0 === rM || null === (rM = rM.tracingHeadersPatchFns) || void 0 === rM ? void 0 : rM._patchXHR(MM, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), bi(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (iM = iM.tracingHeadersPatchFns) || void 0 === iM ? void 0 : iM._patchFetch(MM, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(MM) {
            var rM, iM, OM;
            (null === (rM = Pi.__PosthogExtensions__) || void 0 === rM ? void 0 : rM.tracingHeadersPatchFns) ? MM(): null === (iM = Pi.__PosthogExtensions__) || void 0 === iM || null === (OM = iM.loadExternalDependency) || void 0 === OM || OM.call(iM, this._instance, "tracing-headers", (rM => {
              if (rM) return Pm.error("failed to load script", rM);
              MM()
            }))
          }
          _getConfiguredHostnames() {
            var MM, rM;
            return null !== (MM = null !== (rM = this._instance.config.tracing_headers) && void 0 !== rM ? rM : this._instance.config.addTracingHeaders) && void 0 !== MM ? MM : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const MM = this._getConfiguredHostnames();
            return Ui(MM) ? (Ui(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...MM) : this._hostnamesForPatch = [...MM], MM.length > 0 ? this._hostnamesForPatch : void 0) : (Ui(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = MM || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var MM, rM;
            null === (MM = this._restoreXHRPatch) || void 0 === MM || MM.call(this), null === (rM = this._restoreFetchPatch) || void 0 === rM || rM.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      NH = US({
        surveys: class extends gm {
          constructor(MM) {
            var rM;
            super(new Dm(MM), (rM = MM, {
              get projectToken() {
                return rM.config.token
              },
              kv: new sm(rM)
            })), this._instance = MM
          }
          _sendSurveysRequest(MM, rM) {
            const iM = rM.query ? gz(MM, rM.query) : MM;
            return new Promise((MM => {
              var OM;
              this._instance._send_request({
                method: rM.method,
                url: this._instance.requestRouter.endpointFor(null !== (OM = rM.target) && void 0 !== OM ? OM : "api", iM),
                data: rM.body,
                headers: rM.headers,
                timeout: rM.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: rM.transport,
                compression: rM.compression,
                timestampMode: rM.sentAt,
                callback: MM
              })
            }))
          }
        }
      }, sH),
      AH = {
        toolbar: class {
          constructor(MM) {
            this.instance = MM
          }
          _setToolbarState(MM) {
            Pi.ph_toolbar_state = MM
          }
          _getToolbarState() {
            var MM;
            return null !== (MM = Pi.ph_toolbar_state) && void 0 !== MM ? MM : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var OM, SM;
            if (Ta(this.instance.config)) return !1;
            if (!qr || !cr) return !1;
            MM = null !== (OM = MM) && void 0 !== OM ? OM : qr.location, iM = null !== (SM = iM) && void 0 !== SM ? SM : qr.history;
            try {
              if (!rM) {
                try {
                  qr.localStorage.setItem("test", "test"), qr.localStorage.removeItem("test")
                } catch (MM) {
                  return !1
                }
                rM = null == qr ? void 0 : qr.localStorage
              }
              const OM = km || Bn(MM.hash, "__posthog") || Bn(MM.hash, "state");
              let SM;
              const jM = OM ? HS((() => JSON.parse(atob(decodeURIComponent(OM))))) || HS((() => JSON.parse(decodeURIComponent(OM)))) : null;
              return jM && "ph_authorize" === jM.action ? (SM = jM, SM.source = "url", SM && Object.keys(SM).length > 0 && (jM.desiredHash ? MM.hash = jM.desiredHash : iM ? iM.replaceState(iM.state, "", MM.pathname + MM.search) : MM.hash = "")) : (SM = JSON.parse(rM.getItem(Zm) || "{}"), SM.source = "localstorage", delete SM.userIntent), !(!SM.token || this.instance.config.token !== SM.token || (this.loadToolbar(SM), 0))
            } catch (MM) {
              return !1
            }
          }
          _callLoadToolbar(MM) {
            const rM = Pi.ph_load_toolbar || Pi.ph_load_editor;
            !ui(rM) && Gi(rM) ? rM(MM, this.instance) : om.warn("No toolbar load function found")
          }
          loadToolbar(MM) {
            const rM = !!(null == cr ? void 0 : cr.getElementById("__POSTHOG_TOOLBAR__"));
            if (!qr || rM) return !1;
            const iM = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              OM = US(US({
                token: this.instance.config.token
              }, MM), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, iM ? {
                instrument: !1
              } : {});
            if (qr.localStorage.setItem(Zm, JSON.stringify(US(US({}, OM), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(OM);
            else if (0 === this._getToolbarState()) {
              var SM, jM;
              this._setToolbarState(1), null === (SM = Pi.__PosthogExtensions__) || void 0 === SM || null === (jM = SM.loadExternalDependency) || void 0 === jM || jM.call(SM, this.instance, "toolbar", (MM => {
                if (MM) return om.error("[Toolbar] Failed to load", MM), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(OM)
              })), qa(qr, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(OM)
              }))
            }
            return !0
          }
          _loadEditor(MM) {
            return this.loadToolbar(MM)
          }
          maybeLoadEditor() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(MM, rM, iM)
          }
        }
      },
      xH = US({
        experiments: class MM {
          get _config() {
            return this._instance.config
          }
          constructor(rM) {
            var iM = this;
            this._instance = rM, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              iM.getWebExperiments((rM => {
                MM._logInfo("retrieved web experiments from the server"), iM._flagToExperiments = new Map, rM.forEach((rM => {
                  if (rM.feature_flag_key) {
                    var OM;
                    iM._flagToExperiments && (MM._logInfo("setting flag key ", rM.feature_flag_key, " to web experiment ", rM), null === (OM = iM._flagToExperiments) || void 0 === OM || OM.set(rM.feature_flag_key, rM));
                    const SM = iM._instance.getFeatureFlag(rM.feature_flag_key);
                    wi(SM) && rM.variants[SM] && iM._applyTransforms(rM.name, SM, rM.variants[SM].transforms)
                  } else if (rM.variants)
                    for (const SM in rM.variants) {
                      const OM = rM.variants[SM];
                      MM._matchesTestVariant(OM, iM._instance) && iM._applyTransforms(rM.name, SM, OM.transforms)
                    }
                }))
              }), rM)
            }, this._instance.onFeatureFlags((MM => {
              this.onFeatureFlags(MM)
            }))
          }
          initialize() {}
          onFeatureFlags(rM) {
            if (this._is_bot()) MM._logInfo(OH);
            else if (!this._config.disable_web_experiments) {
              if (ui(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              MM._logInfo("applying feature flags", rM), rM.forEach((MM => {
                var rM;
                if (this._flagToExperiments && (null === (rM = this._flagToExperiments) || void 0 === rM ? void 0 : rM.has(MM))) {
                  var iM;
                  const rM = this._instance.getFeatureFlag(MM),
                    OM = null === (iM = this._flagToExperiments) || void 0 === iM ? void 0 : iM.get(MM);
                  rM && (null == OM ? void 0 : OM.variants[rM]) && this._applyTransforms(OM.name, rM, OM.variants[rM].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const rM = MM.getWindowLocation();
            if (null == rM ? void 0 : rM.search) {
              const iM = vn(null == rM ? void 0 : rM.search, "__experiment_id"),
                OM = vn(null == rM ? void 0 : rM.search, "__experiment_variant");
              iM && OM && (MM._logInfo(`previewing web experiments ${iM} && ${OM}`), this.getWebExperiments((MM => {
                this._showPreviewWebExperiment(parseInt(iM), OM, MM)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(MM, rM, iM) {
            if (this._config.disable_web_experiments && !iM) return MM([]);
            const OM = this._instance.get_property("$web_experiments");
            if (OM && !rM) return MM(OM);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: rM => MM(200 === rM.statusCode && rM.json && rM.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(rM, iM, OM) {
            const SM = OM.filter((MM => MM.id === rM));
            SM && SM.length > 0 && (MM._logInfo(`Previewing web experiment [${SM[0].name}] with variant [${iM}]`), this._applyTransforms(SM[0].name, iM, SM[0].variants[iM].transforms))
          }
          static _matchesTestVariant(rM, iM) {
            return !ui(rM.conditions) && MM._matchUrlConditions(rM, iM) && MM._matchUTMConditions(rM)
          }
          static _matchUrlConditions(rM, iM) {
            var OM;
            if (ui(rM.conditions) || ui(null === (OM = rM.conditions) || void 0 === OM ? void 0 : OM.url)) return !0;
            const SM = MM.getWindowLocation();
            if (SM) {
              var jM, aM, PM;
              const MM = gP(iM, SM.href);
              return !(null === (jM = rM.conditions) || void 0 === jM ? void 0 : jM.url) || SH[null !== (aM = null === (PM = rM.conditions) || void 0 === PM ? void 0 : PM.urlMatchType) && void 0 !== aM ? aM : "icontains"](rM.conditions.url, MM)
            }
            return !1
          }
          static getWindowLocation() {
            return null == qr ? void 0 : qr.location
          }
          static _matchUTMConditions(MM) {
            var rM;
            if (ui(MM.conditions) || ui(null === (rM = MM.conditions) || void 0 === rM ? void 0 : rM.utm)) return !0;
            const iM = Tn();
            if (iM.utm_source) {
              var OM, SM, jM, aM, PM, nM, QM, zM;
              const rM = !(null === (OM = MM.conditions) || void 0 === OM || null === (OM = OM.utm) || void 0 === OM ? void 0 : OM.utm_campaign) || (null === (SM = MM.conditions) || void 0 === SM || null === (SM = SM.utm) || void 0 === SM ? void 0 : SM.utm_campaign) == iM.utm_campaign,
                LM = !(null === (jM = MM.conditions) || void 0 === jM || null === (jM = jM.utm) || void 0 === jM ? void 0 : jM.utm_source) || (null === (aM = MM.conditions) || void 0 === aM || null === (aM = aM.utm) || void 0 === aM ? void 0 : aM.utm_source) == iM.utm_source,
                mM = !(null === (PM = MM.conditions) || void 0 === PM || null === (PM = PM.utm) || void 0 === PM ? void 0 : PM.utm_medium) || (null === (nM = MM.conditions) || void 0 === nM || null === (nM = nM.utm) || void 0 === nM ? void 0 : nM.utm_medium) == iM.utm_medium,
                HM = !(null === (QM = MM.conditions) || void 0 === QM || null === (QM = QM.utm) || void 0 === QM ? void 0 : QM.utm_term) || (null === (zM = MM.conditions) || void 0 === zM || null === (zM = zM.utm) || void 0 === zM ? void 0 : zM.utm_term) == iM.utm_term;
              return rM && mM && HM && LM
            }
            return !1
          }
          static _logInfo(MM) {
            for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
            fa.info(`[WebExperiments] ${MM}`, iM)
          }
          _applyTransforms(rM, iM, OM) {
            this._is_bot() ? MM._logInfo(OH) : "control" !== iM ? OM.forEach((OM => {
              if (OM.selector) {
                var SM;
                MM._logInfo(`applying transform of variant ${iM} for experiment ${rM} `, OM);
                const jM = null === (SM = document) || void 0 === SM ? void 0 : SM.querySelectorAll(OM.selector);
                null == jM || jM.forEach((MM => {
                  const rM = MM;
                  OM.html && (rM.innerHTML = OM.html), OM.css && rM.setAttribute("style", OM.css)
                }))
              }
            })) : MM._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return Vr && this._instance ? ML(Vr, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, sH),
      vH = {
        conversations: class {
          constructor(MM) {
            this._instance = MM, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(MM) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = MM.ok, !MM.ok) return;
            const rM = MM.config.conversations;
            ui(rM) || (si(rM) ? this._isConversationsEnabled = rM : (this._isConversationsEnabled = rM.enabled, this._remoteConfig = rM), this.loadIfEnabled())
          }
          reset() {
            var MM;
            null === (MM = this._conversationsManager) || void 0 === MM || MM.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (Ta(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const MM = null == Pi ? void 0 : Pi.__PosthogExtensions__;
            if (MM && !bi(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const rM = MM.initConversations;
                  if (rM) return this._completeInitialization(rM), void(this._isInitializing = !1);
                  const iM = MM.loadExternalDependency;
                  if (!iM) return void this._handleLoadError(Nr);
                  iM(this._instance, "conversations", (rM => {
                    rM || !MM.initConversations ? this._handleLoadError("Could not load conversations script", rM) : this._completeInitialization(MM.initConversations), this._isInitializing = !1
                  }))
                } catch (MM) {
                  this._handleLoadError("Error initializing conversations", MM), this._isInitializing = !1
                }
              } else jH.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(MM) {
            if (this._remoteConfig) try {
              this._conversationsManager = MM(this._remoteConfig, this._instance), this._loadFailed = !1, jH.info("Conversations loaded successfully")
            } catch (MM) {
              this._handleLoadError("Error completing conversations initialization", MM)
            } else jH.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(MM, rM) {
            jH.error(MM, rM), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : jH.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !gi(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : Ta(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : bi(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? ui(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == Pi ? void 0 : Pi.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var MM, rM;
            return null !== (MM = null === (rM = this._conversationsManager) || void 0 === rM ? void 0 : rM.isVisible()) && void 0 !== MM && MM
          }
          sendMessage(MM, rM, iM) {
            var OM = this;
            return Bi((function*() {
              return OM._conversationsManager ? OM._conversationsManager.sendMessage(MM, rM, iM) : (jH.warn(aH), null)
            }))()
          }
          getMessages(MM, rM) {
            var iM = this;
            return Bi((function*() {
              return iM._conversationsManager ? iM._conversationsManager.getMessages(MM, rM) : (jH.warn(aH), null)
            }))()
          }
          markAsRead(MM) {
            var rM = this;
            return Bi((function*() {
              return rM._conversationsManager ? rM._conversationsManager.markAsRead(MM) : (jH.warn(aH), null)
            }))()
          }
          getTickets(MM) {
            var rM = this;
            return Bi((function*() {
              return rM._conversationsManager ? rM._conversationsManager.getTickets(MM) : (jH.warn(aH), null)
            }))()
          }
          requestRestoreLink(MM) {
            var rM = this;
            return Bi((function*() {
              return rM._conversationsManager ? rM._conversationsManager.requestRestoreLink(MM) : (jH.warn(aH), null)
            }))()
          }
          restoreFromToken(MM) {
            var rM = this;
            return Bi((function*() {
              return rM._conversationsManager ? rM._conversationsManager.restoreFromToken(MM) : (jH.warn(aH), null)
            }))()
          }
          restoreFromUrlToken() {
            var MM = this;
            return Bi((function*() {
              return MM._conversationsManager ? MM._conversationsManager.restoreFromUrlToken() : (jH.warn(aH), null)
            }))()
          }
          getCurrentTicketId() {
            var MM, rM;
            return null !== (MM = null === (rM = this._conversationsManager) || void 0 === rM ? void 0 : rM.getCurrentTicketId()) && void 0 !== MM ? MM : null
          }
          getWidgetSessionId() {
            var MM, rM;
            return null !== (MM = null === (rM = this._conversationsManager) || void 0 === rM ? void 0 : rM.getWidgetSessionId()) && void 0 !== MM ? MM : null
          }
          _onIdentityChanged() {
            var MM;
            null === (MM = this._conversationsManager) || void 0 === MM || MM.setIdentity()
          }
          _onIdentityCleared() {
            var MM;
            null === (MM = this._conversationsManager) || void 0 === MM || MM.clearIdentity()
          }
        }
      },
      FH = {
        logs: class extends hH {
          constructor(MM) {
            super({
              get() {
                var rM;
                return null == MM || null === (rM = MM.config) || void 0 === rM ? void 0 : rM.logs
              },
              captureHintKey: xM,
              get remoteConfigWillArrive() {
                var rM, iM;
                return !(null === (rM = MM._shouldDisableFlags) || void 0 === rM ? void 0 : rM.call(MM)) || !!(null === (iM = Pi._POSTHOG_REMOTE_CONFIG) || void 0 === iM || null === (iM = iM[MM.config.token]) || void 0 === iM ? void 0 : iM.config)
              }
            }, (() => function(MM) {
              var rM;
              const iM = {};
              if (iM.distinctId = MM.get_distinct_id(), MM.sessionManager) {
                const {
                  sessionId: rM,
                  windowId: OM,
                  sessionStartTimestamp: SM,
                  lastActivityTimestamp: jM
                } = MM.sessionManager.checkAndGetSessionAndWindowId(!0);
                iM.sessionId = rM, iM.windowId = OM, ui(SM) || (iM.sessionStartTimestamp = SM), ui(jM) || (iM.lastActivityTimestamp = jM)
              }
              if ((null == Pi || null === (rM = Pi.location) || void 0 === rM ? void 0 : rM.href) && (iM.currentUrl = MM.config.disable_capture_url_hashes ? mS(Pi.location.href) : Pi.location.href), MM.featureFlags) {
                const rM = MM.featureFlags.getFlags();
                rM && rM.length > 0 && (iM.activeFeatureFlags = rM)
              }
              return iM
            }(MM))), this._instance = MM, this.name = eL, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const MM = Ya("[logs]"),
              rM = null == Pi ? void 0 : Pi.__PosthogExtensions__;
            if (!rM) return void MM.error("PostHog Extensions not found.");
            const iM = rM.loadExternalDependency;
            if (iM) return MM => {
              iM(this._instance, "logs", (iM => {
                const OM = rM.logs;
                MM(iM, (null == OM ? void 0 : OM.initializeLogs) ? {
                  initialize: MM => OM.initializeLogs(MM),
                  replay(MM, rM) {
                    var iM;
                    return null === (iM = OM.replayConsoleBuffer) || void 0 === iM ? void 0 : iM.call(OM, MM, rM)
                  }
                } : void 0)
              }))
            };
            MM.error(Nr)
          }
        }
      },
      BH = {
        metrics: class {
          constructor(MM) {
            this._instance = MM, this._logger = Ya("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var MM;
            if (this._disposed) return;
            const rM = !!(null === (MM = this._instance.config.metrics) || void 0 === MM ? void 0 : MM.network);
            rM && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (MM => {
              let rM = !0;
              const iM = () => rM ? (MM => {
                  var rM;
                  const iM = null === (rM = MM.config.metrics) || void 0 === rM ? void 0 : rM.network;
                  return !0 === iM ? {} : iM || void 0
                })(MM) : void 0,
                OM = CH(MM, iM),
                SM = eH(MM, iM);
              return () => {
                rM = !1, OM(), SM()
              }
            })(this._instance) : !rM && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var MM;
            const rM = null === (MM = this._instance) || void 0 === MM || null === (MM = MM.config) || void 0 === MM ? void 0 : MM.metrics;
            var iM;
            return this._core && this._resolvedFrom === rM || (null === (iM = this._core) || void 0 === iM || iM.reset(), this._resolvedFrom = rM, this._core = new Za(this._createHost(), function(MM) {
              var rM, iM, OM, SM, jM;
              const aM = null == MM ? void 0 : MM.resourceAttributes;
              return {
                serviceName: null !== (rM = null == aM ? void 0 : aM["service.name"]) && void 0 !== rM ? rM : null == MM ? void 0 : MM.serviceName,
                serviceVersion: null !== (iM = null == aM ? void 0 : aM["service.version"]) && void 0 !== iM ? iM : null == MM ? void 0 : MM.serviceVersion,
                environment: null !== (OM = null == aM ? void 0 : aM["deployment.environment"]) && void 0 !== OM ? OM : null == MM ? void 0 : MM.environment,
                resourceAttributes: aM,
                beforeSend: null == MM ? void 0 : MM.beforeSend,
                flushIntervalMs: null !== (SM = null == MM ? void 0 : MM.flushIntervalMs) && void 0 !== SM ? SM : 1e4,
                maxSeriesPerFlush: null !== (jM = null == MM ? void 0 : MM.maxSeriesPerFlush) && void 0 !== jM ? jM : 1e3
              }
            }(rM), this._logger)), this._core
          }
          count(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              iM = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(MM, rM, iM)
          }
          gauge(MM, rM, iM) {
            this._getCore().gauge(MM, rM, iM)
          }
          histogram(MM, rM, iM) {
            this._getCore().histogram(MM, rM, iM)
          }
          flush(MM) {
            if (!this._core) return Promise.resolve();
            if (MM) {
              const rM = this._core.drainWindow();
              return rM && this._sendMetricsBatch(rM, MM), Promise.resolve()
            }
            return this._core.flush().catch((MM => this._logger.error("PostHog metrics flush failed:", MM)))
          }
          reset() {
            var MM;
            null === (MM = this._core) || void 0 === MM || MM.reset()
          }
          dispose() {
            var MM, rM;
            this._disposed = !0, null === (MM = this._stopNetworkMetrics) || void 0 === MM || MM.call(this), this._stopNetworkMetrics = void 0, null === (rM = this._core) || void 0 === rM || rM.reset()
          }
          _createHost() {
            const MM = this._instance,
              rM = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !MM.is_capturing()
              },
              _sendMetricsBatch: MM => rM._sendMetricsBatch(MM),
              getLibraryId: () => jM.LIB_NAME,
              getLibraryVersion: () => jM.LIB_VERSION
            }
          }
          _sendMetricsBatch(MM, rM) {
            return new Promise((iM => {
              let OM = !1;
              const SM = MM => {
                  OM || (OM = !0, clearTimeout(jM), iM(MM))
                },
                jM = setTimeout((() => SM({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(US(US({
                method: "POST",
                url: this._metricsUrl(),
                data: MM,
                compression: "best-available",
                batchKey: "metrics"
              }, rM && {
                transport: rM
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(MM) {
                  const rM = MM.statusCode;
                  if (rM >= 200 && 300 > rM) SM({
                    kind: "ok"
                  });
                  else if (413 === rM) SM({
                    kind: "too-large"
                  });
                  else if (0 !== rM && 408 !== rM && 429 !== rM && 500 > rM) SM({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${rM}`)
                  });
                  else {
                    var iM;
                    SM({
                      kind: "retry-later",
                      error: null !== (iM = MM.error) && void 0 !== iM ? iM : new Error(`metrics request failed with status ${rM}`)
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
      XH = {
        webMCP: class {
          constructor(MM) {
            this._instance = MM, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const MM = null == cr ? void 0 : cr.modelContext;
            if (!MM || !Gi(MM.registerTool)) return;
            const rM = bH.get(MM);
            if (rM) return rM.instances.add(this._instance), void(this._isPatched = !0);
            const iM = {
                instances: new Set([this._instance])
              },
              OM = MM.registerTool,
              SM = this;
            am(MM, "registerTool", (MM => {
              const rM = MM;
              return function(MM) {
                let OM = MM;
                for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
                try {
                  OM = SM._wrapTool(MM, iM)
                } catch (iM) {
                  return rM.call(this, MM, ...aM)
                }
                return rM.call(this, OM, ...aM)
              }
            })), MM.registerTool !== OM && (bH.set(MM, iM), this._isPatched = !0)
          }
          _wrapTool(MM, rM) {
            if (!MM || !Gi(MM.execute)) return MM;
            const iM = MM.execute,
              OM = this,
              {
                tool: SM,
                injected: jM
              } = function(MM, rM) {
                const iM = {
                    intent: !1,
                    model: !1
                  },
                  OM = MM.inputSchema;
                if (! function(MM) {
                    return !!bi(MM) || Ci(MM) && Object.keys(MM).every((MM => wH.has(MM) || MM.startsWith("x-"))) && !0 !== MM.additionalProperties && !Ci(MM.additionalProperties) && (!MM.type || "object" === MM.type) && (!MM.properties || Ci(MM.properties)) && (!MM.required || Ui(MM.required))
                  }(OM)) return {
                  tool: RH(MM),
                  injected: iM
                };
                const SM = (null == OM ? void 0 : OM.properties) || {},
                  jM = MM => uH(SM, MM) || Ui(null == OM ? void 0 : OM.required) && OM.required.includes(MM);
                if (iM.intent = rM.intent && !jM("context"), iM.model = rM.model && !jM("llm_model"), !iM.intent && !iM.model) return {
                  tool: RH(MM),
                  injected: iM
                };
                const aM = US({}, SM),
                  PM = Ui(null == OM ? void 0 : OM.required) ? [...OM.required] : [];
                return iM.intent && (aM.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, PM.includes("context") || PM.push("context")), iM.model && (aM.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, PM.includes("llm_model") || PM.push("llm_model")), {
                  tool: RH(MM, US(US({}, OM), {}, {
                    type: (null == OM ? void 0 : OM.type) || "object",
                    properties: aM,
                    required: PM
                  })),
                  injected: iM
                }
              }(MM, function(MM) {
                const rM = {
                  intent: !1,
                  model: !1
                };
                for (const iM of MM.instances) {
                  const MM = gH(iM.config.capture_webmcp);
                  rM.intent || (rM.intent = !0 === (null == MM ? void 0 : MM.intent)), rM.model || (rM.model = !0 === (null == MM ? void 0 : MM.model))
                }
                return rM
              }(rM));
            return Object.defineProperty(SM, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var aM = arguments.length, PM = new Array(aM), nM = 0; nM < aM; nM++) PM[nM] = arguments[nM];
                const QM = new Date,
                  zM = function(MM, rM) {
                    if (!Ci(MM)) return {};
                    try {
                      const iM = rM.intent ? pH(MM.context, 2048, !0) : void 0,
                        OM = rM.model ? pH(MM.llm_model, 256) : void 0;
                      return US(US({}, iM && "{}" !== iM ? {
                        intent: iM
                      } : {}), OM && "unknown" !== OM.toLowerCase() ? {
                        model: OM
                      } : {})
                    } catch (MM) {
                      return {}
                    }
                  }(PM[0], jM),
                  LM = function(MM, rM) {
                    const iM = MM[0];
                    if (!Ci(iM)) return MM;
                    try {
                      const OM = rM.intent && uH(iM, "context"),
                        SM = rM.model && uH(iM, "llm_model");
                      if (!OM && !SM) return MM;
                      const jM = US({}, iM);
                      return OM && delete jM.context, SM && delete jM.llm_model, [jM, ...MM.slice(1)]
                    } catch (rM) {
                      return MM
                    }
                  }(PM, jM);
                let mM;
                try {
                  mM = iM.apply(this === SM ? MM : this, LM)
                } catch (MM) {
                  throw OM._captureToolCall(rM, SM, QM, !0, zM), MM
                }
                return (HM = mM) && "function" == typeof HM.then ? Promise.resolve(mM).then((MM => (OM._captureToolCall(rM, SM, QM, WH(MM), zM), MM)), (MM => {
                  throw OM._captureToolCall(rM, SM, QM, !0, zM), MM
                })) : (OM._captureToolCall(rM, SM, QM, WH(mM), zM), mM);
                var HM
              }
            }), SM
          }
          _captureToolCall(MM, rM, iM, OM, SM) {
            const jM = Date.now() - iM.getTime();
            for (const aM of MM.instances) {
              const PM = gH(aM.config.capture_webmcp);
              if (PM) try {
                aM.capture("$mcp_tool_call", US(US({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: rM.name,
                  $mcp_resource_name: rM.name,
                  $mcp_tool_description: rM.description,
                  $mcp_server_name: null == Mi ? void 0 : Mi.hostname,
                  $mcp_duration_ms: jM,
                  $mcp_is_error: OM
                }, PM.intent && SM.intent ? {
                  $mcp_intent: SM.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), PM.model && SM.model ? {
                  $mcp_llm_model: SM.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: iM
                })
              } catch (MM) {
                continue
              }
            }
          }
        }
      };
    KL.__defaultExtensionClasses = US({}, US(US(US(US(US(US(US(US(US(US(US(US(US(US({}, sH), DH), kH), ZH), oH), fH), NH), YH), AH), xH), vH), FH), BH), XH));
    const IH = function() {
      jM.SDK_DIST_CHANNEL = "npm";
      const MM = gL[xL] = new KL;
      return function() {
        function MM() {
          MM.done || (MM.done = !0, Az = !1, Aa(gL, (function(MM) {
            MM._dom_loaded()
          })))
        }(null == cr ? void 0 : cr.addEventListener) ? "complete" === cr.readyState ? MM() : qa(cr, "DOMContentLoaded", MM, {
          capture: !1
        }): qr && fa.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), MM
    }()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);