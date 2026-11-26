export const id = 277;
export const ids = [277];
export const modules = {
  40809: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WC,
      c: () => FY
    });
    const AH = "0.9.4",
      rH = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: AH
      };
    var SH = rH;
    const hH = "$early_access_features",
      tH = "$active_feature_flags",
      zH = "$feature_flag_details",
      CH = "$feature_flag_errors",
      EH = "$feature_flag_evaluated_at",
      XH = "$feature_flag_request_id",
      GH = "$minimal_flag_called_events",
      YH = "$enabled_feature_flags",
      uH = "$stored_group_properties",
      QH = "$stored_person_properties",
      WH = "$flag_call_reported",
      MH = "$flag_call_reported_session_id",
      xH = "$feature_flag_payloads",
      vH = "$override_feature_flags",
      PH = "$override_feature_flag_payloads",
      TH = "visibilitychange",
      UH = "$people_distinct_id",
      VH = "distinct_id",
      OH = "$device_id",
      bH = "$device_model",
      kH = "__alias",
      mH = "__cmpns",
      oH = "$fbc",
      IH = "$fbc_persistence",
      fH = "$fbp",
      lH = "$fbp_persistence",
      KH = "__timers",
      cH = "$autocapture_disabled_server_side",
      eH = "$heatmaps_enabled_server_side",
      qH = "$exception_capture_enabled_server_side",
      gH = "$error_tracking_suppression_rules",
      NH = "$error_tracking_capture_extension_exceptions",
      RH = "$web_vitals_enabled_server_side",
      jH = "$dead_clicks_enabled_server_side",
      nH = "$product_tours_enabled_server_side",
      FH = "$logs_capture_enabled_server_side",
      DH = "$web_vitals_allowed_metrics",
      wH = "$session_recording_remote_config",
      ZH = "$session_recording_enabled_server_side",
      dH = "$replay_sample_rate",
      aH = "$replay_override_sampling",
      sH = "$replay_override_linked_flag",
      JH = "$replay_override_url_trigger",
      iH = "$replay_override_event_trigger",
      pH = "$sesid",
      yH = "$session_is_sampled",
      HB = "$session_past_minimum_duration",
      BB = "$session_recording_url_trigger_activated_session",
      LB = "$session_recording_event_trigger_activated_session",
      AB = "$debug_first_full_snapshot_timestamp",
      rB = "$sess_rec_flush_size",
      SB = "$groups",
      hB = "$surveys",
      tB = "$surveys_loaded_at",
      zB = "$surveys_activated",
      CB = "$surveys_activated_session",
      EB = "$surveys_activated_timestamps",
      XB = "ph_product_tours",
      GB = "$product_tours_activated",
      YB = "$product_tours_activated_session",
      uB = "$conversations_widget_session_id",
      QB = "$conversations_ticket_id",
      WB = "$conversations_widget_state",
      MB = "$conversations_user_traits",
      xB = "$user_state",
      vB = "$client_session_props",
      PB = "$capture_rate_limit",
      TB = "$initial_campaign_params",
      UB = "$initial_referrer_info",
      VB = "$initial_person_info",
      OB = "$epp",
      bB = "$posthog_cookieless",
      kB = "$cookieless_mode",
      mB = "$sdk_debug_extensions_init_method",
      oB = "$sdk_debug_extensions_init_time_ms",
      IB = "$sdk_debug_recording_script_not_loaded",
      fB = "$sdk_debug_replay_stale_config",
      lB = "$sdk_debug_replay_event_trigger_status",
      KB = "$sdk_debug_replay_linked_flag_trigger_status",
      cB = "$sdk_debug_replay_matched_recording_trigger_groups",
      eB = "$sdk_debug_replay_pending_trigger_conditions",
      qB = "$sdk_debug_replay_remote_trigger_matching_config",
      gB = "$sdk_debug_replay_trigger_groups_count",
      NB = "$sdk_debug_replay_url_trigger_status",
      RB = "$session_recording_start_reason",
      jB = "PostHog loadExternalDependency extension not found.",
      nB = "anonymous",
      FB = "identified",
      DB = "identified_only",
      wB = "beforeunload",
      ZB = "$pageview",
      dB = "$pageleave",
      aB = "$identify",
      sB = "$groupidentify",
      JB = "u" > typeof window ? window : void 0,
      iB = "u" > typeof globalThis ? globalThis : JB,
      pB = null == iB ? void 0 : iB.navigator,
      yB = null == iB ? void 0 : iB.document,
      HL = null == iB ? void 0 : iB.location,
      BL = null == iB ? void 0 : iB.fetch,
      LL = (null == iB ? void 0 : iB.XMLHttpRequest) && "withCredentials" in new iB.XMLHttpRequest ? iB.XMLHttpRequest : void 0,
      AL = null == iB ? void 0 : iB.AbortController,
      rL = null == iB ? void 0 : iB.CompressionStream,
      SL = null == pB ? void 0 : pB.userAgent,
      hL = "undefined" != typeof globalThis ? globalThis : JB;
    hL && "undefined" == typeof self && (hL.self = hL), hL && "undefined" == typeof File && (hL.File = function() {});
    const tL = null != JB ? JB : {};
    var zL = function(HH) {
        return HH.AnonymousId = "anonymous_id", HH.DistinctId = "distinct_id", HH.Props = "props", HH.EnablePersonProcessing = "enable_person_processing", HH.PersonMode = "person_mode", HH.FeatureFlagDetails = "feature_flag_details", HH.FeatureFlags = "feature_flags", HH.FeatureFlagPayloads = "feature_flag_payloads", HH.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", HH.BootstrapFeatureFlags = "bootstrap_feature_flags", HH.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", HH.OverrideFeatureFlags = "override_feature_flags", HH.Queue = "queue", HH.AiQueue = "ai_queue", HH.AiCaptureQueue = "ai_capture_queue", HH.LogsQueue = "logs_queue", HH.OptedOut = "opted_out", HH.SessionId = "session_id", HH.SessionStartTimestamp = "session_start_timestamp", HH.SessionLastTimestamp = "session_timestamp", HH.PersonProperties = "person_properties", HH.GroupProperties = "group_properties", HH.InstalledAppBuild = "installed_app_build", HH.InstalledAppVersion = "installed_app_version", HH.SessionReplay = "session_replay", HH.PushRegistered = "push_registered", HH.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", HH.SurveyLastSeenDate = "survey_last_seen_date", HH.SurveysInProgress = "surveys_in_progress", HH.SurveysSeen = "surveys_seen", HH.Surveys = "surveys", HH.RemoteConfig = "remote_config", HH.FlagsEndpointWasHit = "flags_endpoint_was_hit", HH.DeviceId = "device_id", HH
      }({}),
      CL = function(HH) {
        return HH.GZipJS = "gzip-js", HH.Base64 = "base64", HH
      }({});
    const EL = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      XL = ["token"];

    function GL(HH, BH) {
      return -1 !== HH.indexOf(BH)
    }
    const YL = function(HH) {
        return HH.trim()
      },
      uL = function(HH) {
        return HH.replace(/^\$/, "")
      };

    function QL(HH) {
      var BH;
      const LH = [];
      return null !== (BH = JSON.stringify(HH, (function(HH, BH) {
        if ("bigint" == typeof BH) return BH.toString();
        if ("function" != typeof BH && "symbol" != typeof BH) {
          if (BH instanceof Error) return {
            name: BH.name,
            message: BH.message,
            stack: BH.stack
          };
          if (BH && "object" == typeof BH) {
            for (; LH.length > 0 && LH[LH.length - 1] !== this;) LH.pop();
            if (LH.includes(BH)) return "[Circular]";
            LH.push(BH)
          }
          return BH
        }
      }))) && void 0 !== BH ? BH : "null"
    }
    const WL = Object.prototype,
      ML = WL.hasOwnProperty,
      xL = WL.toString,
      vL = Array.isArray || function(HH) {
        return "[object Array]" === xL.call(HH)
      },
      PL = HH => "function" == typeof HH,
      TL = HH => HH === Object(HH) && !vL(HH),
      UL = HH => {
        if (TL(HH)) {
          for (const BH in HH)
            if (ML.call(HH, BH)) return !1;
          return !0
        }
        return !1
      },
      VL = HH => void 0 === HH,
      OL = HH => "[object String]" == xL.call(HH),
      bL = HH => OL(HH) && 0 === HH.trim().length,
      kL = HH => null === HH,
      mL = HH => VL(HH) || kL(HH),
      oL = HH => "[object Number]" == xL.call(HH) && HH == HH,
      IL = HH => oL(HH) && HH > 0,
      fL = HH => "[object Boolean]" === xL.call(HH),
      lL = HH => GL(EL, HH),
      KL = HH => GL(XL, HH);

    function cL(HH) {
      return null === HH || "object" != typeof HH
    }

    function eL(HH, BH) {
      return {}.toString.call(HH) === `[object ${BH}]`
    }

    function qL(HH) {
      switch ({}.toString.call(HH)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return NL(HH, Error)
      }
    }

    function gL(HH) {
      return "u" > typeof Event && NL(HH, Event)
    }

    function NL(HH, BH) {
      try {
        return HH instanceof BH
      } catch (HH) {
        return !1
      }
    }
    const RL = [!0, "true", 1, "1", "yes"],
      jL = HH => GL(RL, HH),
      nL = [!1, "false", 0, "0", "no"];

    function FL(HH, BH, LH, AH, rH, SH, hH) {
      try {
        var tH = HH[SH](hH),
          zH = tH.value
      } catch (HH) {
        return void LH(HH)
      }
      tH.done ? BH(zH) : Promise.resolve(zH).then(AH, rH)
    }

    function DL(HH) {
      return function() {
        var BH = this,
          LH = arguments;
        return new Promise((function(AH, rH) {
          var SH = HH.apply(BH, LH);

          function hH(HH) {
            FL(SH, AH, rH, hH, tH, "next", HH)
          }

          function tH(HH) {
            FL(SH, AH, rH, hH, tH, "throw", HH)
          }
          hH(void 0)
        }))
      }
    }
    const wL = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      ZL = new Map,
      dL = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!HH) return !1;
        const LH = function(HH, BH) {
            let LH = "";
            for (let AH = 0; BH.length > AH; AH++) {
              const HH = BH[AH];
              LH += HH.length + ":" + HH
            }
            return HH.length + ":" + HH + "|" + BH.length + ":" + LH
          }(HH, BH),
          AH = ZL.get(LH);
        if (void 0 !== AH) return AH;
        const rH = HH.toLowerCase(),
          SH = wL.concat(BH).some((HH => -1 !== rH.indexOf(HH.toLowerCase())));
        return 256 > ZL.size || ZL.clear(), ZL.set(LH, SH), SH
      };

    function aL(HH, BH, LH, AH, rH) {
      return BH > LH && (AH.warn("min cannot be greater than max."), BH = LH), oL(HH) ? HH > LH ? (AH.warn(" cannot be  greater than max: " + LH + ". Using max value instead."), LH) : BH > HH ? (AH.warn(" cannot be less than min: " + BH + ". Using min value instead."), BH) : HH : (AH.warn(" must be a number. using max or fallback. max: " + LH + ", fallback: " + rH), aL(null != rH ? rH : LH, BH, LH, AH))
    }
    var sL = class {
      constructor(HH) {
        this._buckets = {}, this._onBucketRateLimited = HH._onBucketRateLimited, this._bucketSize = aL(HH.bucketSize, 0, 100, HH._logger), this._refillRate = aL(HH.refillRate, 0, this._bucketSize, HH._logger), this._refillInterval = aL(HH.refillInterval, 0, 864e5, HH._logger)
      }
      _applyRefill(HH, BH) {
        const LH = Math.floor((BH - HH.lastAccess) / this._refillInterval);
        LH > 0 && (HH.tokens = Math.min(HH.tokens + LH * this._refillRate, this._bucketSize), HH.lastAccess = HH.lastAccess + LH * this._refillInterval)
      }
      consumeRateLimit(HH) {
        var BH;
        const LH = Date.now(),
          AH = String(HH);
        let rH = this._buckets[AH];
        return rH ? this._applyRefill(rH, LH) : (rH = {
          tokens: this._bucketSize,
          lastAccess: LH
        }, this._buckets[AH] = rH), 0 === rH.tokens || (rH.tokens--, 0 === rH.tokens && (null === (BH = this._onBucketRateLimited) || void 0 === BH || BH.call(this, HH)), 0 === rH.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const JL = "Mobile",
      iL = "Android",
      pL = "Tablet",
      yL = "Android Tablet",
      HA = "iPad",
      BA = "Apple Watch",
      LA = "Safari",
      AA = "BlackBerry",
      rA = "Samsung Internet",
      SA = "Chrome",
      hA = "Chrome iOS",
      tA = "Internet Explorer",
      zA = "Internet Explorer Mobile",
      CA = "Opera",
      EA = "Microsoft Edge",
      XA = "Firefox",
      GA = "Firefox iOS",
      YA = "Nintendo",
      uA = "PlayStation",
      QA = "Xbox",
      WA = "Android Mobile",
      MA = "Mobile Safari",
      xA = "Windows",
      vA = "Windows Phone",
      PA = "Nokia",
      TA = "Ouya",
      UA = "Generic " + JL.toLowerCase(),
      VA = "Generic " + pL.toLowerCase(),
      OA = "Konqueror",
      bA = "Oculus Browser",
      kA = "Vivaldi",
      mA = "Yandex",
      oA = "Whale",
      IA = "DuckDuckGo",
      fA = "Pale Moon",
      lA = "Waterfox",
      KA = "Brave",
      cA = "Claude",
      eA = "Codex",
      qA = "ChatGPT",
      gA = "Google Search App",
      NA = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      RA = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      jA = new RegExp(QA, "i"),
      nA = new RegExp("PlayStation \\w+", "i"),
      FA = new RegExp("Nintendo \\w+", "i"),
      DA = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      wA = {
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
      ZA = function(HH, BH, LH, AH) {
        BH = BH || "";
        const rH = function(HH) {
          return (null == HH ? void 0 : HH.brave) ? KA : null
        }(LH);
        return rH || ((null == AH ? void 0 : AH.detectGoogleSearchApp) && GL(HH, "GSA/") ? gA : GL(HH, " OPR/") && GL(HH, "Mini") ? "Opera Mini" : GL(HH, " OPR/") ? CA : DA.test(HH) ? AA : GL(HH, "IEMobile") || GL(HH, "WPDesktop") ? zA : GL(HH, "OculusBrowser") ? bA : GL(HH, "SamsungBrowser") ? rA : GL(HH, "Edge") || GL(HH, "Edg/") ? EA : GL(HH, "Vivaldi/") ? kA : GL(HH, "YaBrowser/") ? mA : GL(HH, "Whale/") ? oA : GL(HH, "DuckDuckGo/") || GL(HH, "Ddg/") ? IA : GL(HH, "Claude/") ? cA : GL(HH, "Codex/") ? eA : GL(HH, "ChatGPT/") ? qA : GL(HH, "FBIOS") ? "Facebook Mobile" : GL(HH, "UCWEB") || GL(HH, "UCBrowser") ? "UC Browser" : GL(HH, "CriOS") ? hA : GL(HH, "CrMo") || GL(HH, SA) ? SA : GL(HH, iL) && GL(HH, LA) ? WA : GL(HH, "FxiOS") ? GA : GL(HH.toLowerCase(), OA.toLowerCase()) ? OA : GL(HH, "Brave/") ? KA : ((HH, BH) => BH && GL(BH, "Apple") || function(HH) {
          return GL(HH, LA) && !GL(HH, SA) && !GL(HH, iL)
        }(HH))(HH, BH) ? GL(HH, JL) ? MA : LA : GL(HH, "PaleMoon/") ? fA : GL(HH, "Waterfox/") ? lA : GL(HH, XA) ? XA : GL(HH, "MSIE") || GL(HH, "Trident/") ? tA : GL(HH, "Gecko") ? XA : "")
      },
      dA = {
        [zA]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [EA]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [SA]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [hA]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [LA]: [NA],
        [MA]: [NA],
        [CA]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [XA]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [GA]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [OA]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [AA]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), NA],
        [WA]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [rA]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [bA]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [kA]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [mA]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [oA]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [KA]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [cA]: [RA],
        [eA]: [RA],
        [qA]: [RA],
        [IA]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [fA]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [lA]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [gA]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [tA]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      aA = function(HH, BH, LH, AH) {
        const rH = ZA(HH, BH, LH, AH),
          SH = dA[rH];
        if (VL(SH)) return null;
        for (let hH = 0; SH.length > hH; hH++) {
          const BH = HH.match(SH[hH]);
          if (BH) return parseFloat(BH[BH.length - 2])
        }
        return null
      },
      sA = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), HH => [QA, HH && HH[1] || ""]],
        [new RegExp(YA, "i"), [YA, ""]],
        [new RegExp(uA, "i"), [uA, ""]],
        [DA, [AA, ""]],
        [new RegExp(xA, "i"), (HH, BH) => {
          if (/Phone/.test(BH) || /WPDesktop/.test(BH)) return [vA, ""];
          if (new RegExp(JL).test(BH) && !/IEMobile\b/.test(BH)) return ["Windows Mobile", ""];
          const LH = /Windows NT ([0-9.]+)/i.exec(BH);
          if (LH && LH[1]) {
            let HH = wA[LH[1]] || "";
            return /arm/i.test(BH) && (HH = "RT"), [xA, HH]
          }
          return [xA, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, HH => HH && HH[3] ? ["iOS", [HH[3], HH[4], HH[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, HH => {
          let BH = "";
          return HH && HH.length >= 3 && (BH = VL(HH[2]) ? HH[3] : HH[2]), ["watchOS", BH]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), HH => HH && HH[2] ? [iL, [HH[2], HH[3], HH[4] || "0"].join(".")] : [iL, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, HH => {
          const BH = ["Mac OS X", ""];
          return HH && HH[1] && (BH[1] = [HH[1], HH[2], HH[3] || "0"].join(".")), BH
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      JA = function(HH) {
        for (let BH = 0; sA.length > BH; BH++) {
          const [LH, AH] = sA[BH], rH = LH.exec(HH), SH = rH && (PL(AH) ? AH(rH, HH) : AH);
          if (SH) return SH
        }
        return ["", ""]
      },
      iA = function(HH) {
        return FA.test(HH) ? YA : nA.test(HH) ? uA : jA.test(HH) ? QA : new RegExp(TA, "i").test(HH) ? TA : new RegExp("(Windows Phone|WPDesktop)", "i").test(HH) ? vA : /iPad/.test(HH) ? HA : /iPod/.test(HH) ? "iPod Touch" : /iPhone/.test(HH) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(HH) ? BA : DA.test(HH) ? AA : /(kobo)\s(ereader|touch)/i.test(HH) ? "Kobo" : new RegExp(PA, "i").test(HH) ? PA : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(HH) || /(kf[a-z]+)( bui|\)).+silk\//i.test(HH) ? "Kindle Fire" : /(Android|ZTE)/i.test(HH) ? new RegExp(JL).test(HH) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(HH) || /pixel[\daxl ]{1,6}/i.test(HH) && !/pixel c/i.test(HH) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(HH) || /lmy47v/i.test(HH) && !/QTAQZ3/i.test(HH) ? iL : yL : new RegExp("(pda|Mobile)", "i").test(HH) ? UA : new RegExp(pL, "i").test(HH) && !new RegExp("Tablet pc", "i").test(HH) ? VA : ""
      },
      pA = function(HH, BH) {
        var LH;
        const AH = iA(HH);
        return AH === HA || AH === yL || "Kobo" === AH || "Kindle Fire" === AH || AH === VA ? pL : AH === YA || AH === QA || AH === uA || AH === TA ? "Console" : AH === BA ? "Wearable" : AH ? JL : "Android" === (null == BH ? void 0 : BH.userAgentDataPlatform) && (null !== (LH = null == BH ? void 0 : BH.maxTouchPoints) && void 0 !== LH ? LH : 0) > 0 ? 600 > Math.min(null !== (rH = null == BH ? void 0 : BH.screenWidth) && void 0 !== rH ? rH : 0, null !== (SH = null == BH ? void 0 : BH.screenHeight) && void 0 !== SH ? SH : 0) / (null !== (hH = null == BH ? void 0 : BH.devicePixelRatio) && void 0 !== hH ? hH : 1) ? JL : pL : "Desktop";
        var rH, SH, hH
      },
      yA = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      Hr = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", yA],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", yA],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", yA],
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
      Br = "[Truncated]",
      Lr = "[Unserializable]";

    function Ar(HH) {
      let BH = "";
      for (let LH = 0; HH.length > LH; LH++) {
        const AH = HH.charCodeAt(LH);
        if (55296 > AH || AH > 56319) BH += 56320 > AH || AH > 57343 ? HH[LH] : "\ufffd";
        else {
          const AH = HH.charCodeAt(LH + 1);
          56320 > AH || AH > 57343 ? BH += "\ufffd" : (BH += HH[LH] + HH[LH + 1], LH++)
        }
      }
      return BH
    }

    function rr(HH, BH) {
      if (!BH) return HH;
      let LH = [];
      try {
        LH = Object.keys(BH)
      } catch (HH) {
        LH = []
      }
      for (const AH of LH) {
        let LH;
        try {
          LH = BH[AH]
        } catch (HH) {
          LH = Lr
        }
        Object.defineProperty(HH, AH, {
          value: LH,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return HH
    }
    Date, Date;
    const Sr = 3e5;
    var hr = class {
      record(HH) {
        if ("too-large" === HH.kind) return;
        if ("retry-later" !== HH.kind) return void this.reset();
        if (!HH.retryAfterMs) return;
        const BH = this.isOpen(),
          LH = Date.now(),
          AH = Math.min(HH.retryAfterMs, Sr);
        if (!BH) return this._installedAt = LH, void(this._until = LH + AH);
        this._until = Math.max(this._until, Math.min(LH + AH, this._installedAt + Sr))
      }
      remainingMs() {
        const HH = Date.now();
        if (this._installedAt - 5e3 > HH) return this.reset(), 0;
        const BH = Math.min(Sr, Math.max(0, this._until - HH));
        return 0 === BH && this.reset(), BH
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
    const tr = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function zr(HH, BH) {
      return "string" == typeof(LH = HH) && tr.test(LH) ? HH : BH();
      var LH
    }

    function Cr(HH, BH) {
      const LH = new Error(BH);
      try {
        Object.defineProperty(LH, "name", {
          value: HH,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (HH) {}
      return LH
    }

    function Er(HH) {
      return HH ? HH.split("#")[0] : HH
    }

    function Xr(HH) {
      try {
        return HH()
      } catch (HH) {
        return
      }
    }

    function Gr(HH, BH) {
      const LH = setTimeout(HH, BH);
      return null != LH && LH.unref && (null == LH || LH.unref()), LH
    }

    function Yr(HH, BH, LH) {
      return ur.apply(this, arguments)
    }

    function ur() {
      return (ur = DL((function*(HH, BH, LH) {
        let AH;
        try {
          return yield Promise.race([HH, new Promise(((HH, rH) => {
            AH = Gr((() => {
              try {
                null == LH || LH(), HH()
              } catch (HH) {
                rH(HH)
              }
            }), BH)
          }))])
        } finally {
          clearTimeout(AH)
        }
      }))).apply(this, arguments)
    }

    function Qr(HH) {
      return Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
        return typeof HH
      } : function(HH) {
        return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
      }, Qr(HH)
    }

    function Wr(HH, BH, LH) {
      return (BH = function(HH) {
        var BH = function(HH) {
          if ("object" != Qr(HH) || !HH) return HH;
          var BH = HH[Symbol.toPrimitive];
          if (void 0 !== BH) {
            var LH = BH.call(HH, "string");
            if ("object" != Qr(LH)) return LH;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(HH)
        }(HH);
        return "symbol" == Qr(BH) ? BH : BH + ""
      }(BH)) in HH ? Object.defineProperty(HH, BH, {
        value: LH,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : HH[BH] = LH, HH
    }

    function Mr(HH, BH) {
      var LH = Object.keys(HH);
      if (Object.getOwnPropertySymbols) {
        var AH = Object.getOwnPropertySymbols(HH);
        BH && (AH = AH.filter((function(BH) {
          return Object.getOwnPropertyDescriptor(HH, BH).enumerable
        }))), LH.push.apply(LH, AH)
      }
      return LH
    }

    function xr(HH) {
      for (var BH = 1; arguments.length > BH; BH++) {
        var LH = null != arguments[BH] ? arguments[BH] : {};
        BH % 2 ? Mr(Object(LH), !0).forEach((function(BH) {
          Wr(HH, BH, LH[BH])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(LH)) : Mr(Object(LH)).forEach((function(BH) {
          Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(LH, BH))
        }))
      }
      return HH
    }
    let vr, Pr, Tr, Ur;

    function Vr(HH) {
      var BH;
      const LH = globalThis._posthogChunkIds,
        AH = globalThis._debugIds;
      if (!LH && !AH) return;
      const rH = LH ? Object.keys(LH) : [],
        SH = AH ? Object.keys(AH) : [];
      if (Ur && Or(LH, rH, Pr) && Or(AH, SH, Tr)) return Ur;
      Pr = LH ? xr({}, LH) : void 0, Tr = AH ? xr({}, AH) : void 0, Ur = {}, null !== (BH = vr) && void 0 !== BH || (vr = {});
      const hH = (BH, LH) => {
        for (const rH of BH) {
          const BH = LH[rH];
          if (!BH) continue;
          const SH = null == vr ? void 0 : vr[rH];
          if (SH) {
            Ur[SH] = BH;
            continue
          }
          const hH = HH(rH);
          for (let HH = hH.length - 1; HH >= 0; HH--) {
            var AH;
            const LH = null === (AH = hH[HH]) || void 0 === AH ? void 0 : AH.filename;
            if (LH) {
              Ur[LH] = BH, vr[rH] = LH;
              break
            }
          }
        }
      };
      return AH && hH(SH, AH), LH && hH(rH, LH), Ur
    }

    function Or(HH, BH, LH) {
      return HH && LH ? BH.length === Object.keys(LH).length && BH.every((BH => HH[BH] === LH[BH])) : HH === LH
    }
    var br = class {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = HH, this.stackParser = BH, this.modifiers = LH
      }
      buildFromUnknown(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = BH && BH.mechanism || {
            handled: !0,
            type: "generic"
          },
          AH = this.buildCoercingContext(LH, BH, 0).apply(HH),
          rH = this.buildParsingContext(BH),
          SH = this.parseStacktrace(AH, rH);
        return {
          $exception_list: this.convertToExceptionList(SH, LH),
          $exception_level: "error"
        }
      }
      modifyFrames(HH) {
        var BH = this;
        return DL((function*() {
          for (const LH of HH) LH.stacktrace && LH.stacktrace.frames && vL(LH.stacktrace.frames) && (LH.stacktrace.frames = yield BH.applyModifiers(LH.stacktrace.frames));
          return HH
        }))()
      }
      coerceFallback(HH) {
        var BH;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (BH = HH.syntheticException) || void 0 === BH ? void 0 : BH.stack,
          synthetic: !0
        }
      }
      parseStacktrace(HH, BH) {
        var LH;
        let AH, rH;
        if (null != HH.cause && (AH = this.parseStacktrace(HH.cause, BH)), "" != HH.stack && null != HH.stack) try {
          rH = this.applyChunkIds(this.stackParser(HH.stack, HH.synthetic ? BH.skipFirstLines : 0), BH.chunkIdMap)
        } catch (HH) {}
        return xr(xr({}, HH), {}, {
          cause: AH,
          stack: rH,
          errors: null === (LH = HH.errors) || void 0 === LH ? void 0 : LH.map((HH => this.parseStacktrace(HH, BH)))
        })
      }
      applyChunkIds(HH, BH) {
        return HH.map((HH => (HH.filename && BH && (HH.chunk_id = BH[HH.filename]), HH)))
      }
      applyCoercers(HH, BH) {
        for (const LH of this.coercers)
          if (LH.match(HH)) return LH.coerce(HH, BH);
        return this.coerceFallback(BH)
      }
      applyModifiers(HH) {
        var BH = this;
        return DL((function*() {
          let LH = HH;
          for (const HH of BH.modifiers) LH = yield HH(LH);
          return LH
        }))()
      }
      convertToExceptionList(HH, BH) {
        const LH = [],
          AH = (HH, rH, SH) => {
            var hH;
            const tH = LH.length,
              zH = void 0 === rH ? xr(xr({
                type: "string" == typeof BH.type && BH.type.length > 0 ? BH.type : "generic"
              }, "boolean" == typeof BH.handled ? {
                handled: BH.handled
              } : void 0 === BH.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof BH.synthetic ? BH.synthetic : HH.synthetic,
                exception_id: tH
              }) : {
                type: "chained",
                source: SH,
                synthetic: HH.synthetic,
                exception_id: tH,
                parent_id: rH
              },
              CH = {
                type: HH.type,
                value: HH.value,
                mechanism: zH
              };
            HH.stack && (CH.stacktrace = {
              type: "raw",
              frames: HH.stack
            }), LH.push(CH), HH.cause && AH(HH.cause, tH, "cause");
            for (const BH of null !== (hH = HH.errors) && void 0 !== hH ? hH : []) AH(BH, tH, "member")
          };
        return AH(HH), LH
      }
      buildParsingContext(HH) {
        var BH;
        return {
          chunkIdMap: Vr(this.stackParser),
          skipFirstLines: null !== (BH = HH.skipFirstLines) && void 0 !== BH ? BH : 1
        }
      }
      getAggregateErrors(HH) {
        try {
          if (qL(HH)) {
            let LH = Object.getPrototypeOf(HH);
            for (let AH = 0; LH && 100 > AH; AH++) {
              var BH;
              const AH = null === (BH = Object.getOwnPropertyDescriptor(LH, "constructor")) || void 0 === BH ? void 0 : BH.value;
              if ("function" == typeof AH && "AggregateError" === AH.name) {
                const BH = HH.errors;
                return vL(BH) ? BH : void 0
              }
              LH = Object.getPrototypeOf(LH)
            }
          }
        } catch (HH) {}
      }
      buildCoercingContext(HH, BH) {
        var LH = this;
        let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          rH = 0,
          SH = 0,
          hH = !1;
        const tH = new Set,
          zH = [],
          CH = {},
          EH = function(HH, BH) {
            let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const EH = XH(BH, AH),
              GH = EH.apply;
            if (EH.apply = BH => {
                zH.push(HH);
                try {
                  return GH(BH)
                } finally {
                  zH.pop()
                }
              }, AH > 4 || AH > 0 && -1 !== zH.indexOf(HH)) return LH.coerceFallback(EH);
            const YH = "object" == typeof HH && null !== HH || "function" == typeof HH;
            if (0 === AH && rH >= 50 || YH && tH.has(HH)) return;
            YH && tH.add(HH), 0 === AH && rH++;
            const uH = LH.getAggregateErrors(HH);
            let QH, WH;
            hH || (hH = !!uH);
            try {
              if (QH = LH.applyCoercers(HH, EH), !QH) throw CH
            } catch (HH) {
              if (HH === CH) return void(0 === AH && rH--);
              if (!hH) throw HH;
              QH = LH.coerceFallback(EH)
            }
            if (!uH || rH >= 50) return QH;
            try {
              WH = uH.length
            } catch (HH) {
              return QH
            }
            if (!Number.isInteger(WH) || 0 > WH || WH > 4294967295) return QH;
            const MH = [];
            for (let hH = 0; 50 > rH && 1e3 > SH && WH > hH; hH++) {
              let AH;
              SH++;
              try {
                AH = EH.next(uH[hH])
              } catch (HH) {
                rH++, AH = LH.coerceFallback(XH(BH + 1))
              }
              AH && MH.push(AH)
            }
            return xr(xr({}, QH), {}, {
              errors: MH
            })
          },
          XH = function(LH) {
            let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return xr(xr({}, BH), {}, {
              syntheticException: 0 == LH ? BH.syntheticException : void 0,
              mechanism: 0 == LH ? HH : {},
              apply(HH) {
                const BH = EH(HH, LH, AH + 1);
                if (!BH) throw CH;
                return BH
              },
              next: HH => EH(HH, LH + 1)
            })
          },
          GH = XH(AH);
        return xr(xr({}, GH), {}, {
          apply: HH => {
            var BH;
            return null !== (BH = EH(HH, AH)) && void 0 !== BH ? BH : this.coerceFallback(GH)
          }
        })
      }
    };
    const kr = /^([a-z][a-z0-9.+-]+):/i,
      mr = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function or(HH) {
      if (!HH || "<anonymous>" === HH) return !1;
      const BH = kr.exec(HH);
      return !BH || mr.includes(BH[1].toLowerCase())
    }

    function Ir(HH, BH, LH, AH, rH) {
      const SH = {
        platform: HH,
        filename: BH,
        function: "<anonymous>" === LH ? "?" : LH,
        in_app: or(BH)
      };
      return VL(AH) || (SH.lineno = AH), VL(rH) || (SH.colno = rH), SH
    }
    const fr = (HH, BH) => {
        const LH = -1 !== HH.indexOf("safari-extension"),
          AH = -1 !== HH.indexOf("safari-web-extension");
        return LH || AH ? [-1 !== HH.indexOf("@") ? HH.split("@")[0] : "?", LH ? `safari-extension:${BH}` : `safari-web-extension:${BH}`] : [HH, BH]
      },
      lr = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      Kr = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      cr = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      er = (HH, BH) => {
        const LH = lr.exec(HH);
        if (LH) {
          const [, HH, AH, rH] = LH;
          return Ir(BH, HH, "?", +AH, +rH)
        }
        const AH = Kr.exec(HH);
        if (AH) {
          if (AH[2] && 0 === AH[2].indexOf("eval")) {
            const HH = cr.exec(AH[2]);
            HH && (AH[2] = HH[1], AH[3] = HH[2], AH[4] = HH[3])
          }
          const [HH, LH] = fr(AH[1] || "?", AH[2]);
          return Ir(BH, LH, HH, AH[3] ? +AH[3] : void 0, AH[4] ? +AH[4] : void 0)
        }
      },
      qr = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      gr = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      Nr = (HH, BH) => {
        const LH = qr.exec(HH);
        if (LH) {
          if (LH[3] && LH[3].indexOf(" > eval") > -1) {
            const HH = gr.exec(LH[3]);
            HH && (LH[1] = LH[1] || "eval", LH[3] = HH[1], LH[4] = HH[2], LH[5] = "")
          }
          let HH = LH[3],
            AH = LH[1] || "?";
          return [AH, HH] = fr(AH, HH), Ir(BH, HH, AH, LH[4] ? +LH[4] : void 0, LH[5] ? +LH[5] : void 0)
        }
      },
      Rr = /\(error: (.*)\)/;

    function jr(HH, BH) {
      return HH.filename === BH.filename && HH.function === BH.function && HH.module === BH.module && HH.lineno === BH.lineno && HH.colno === BH.colno
    }

    function nr(HH) {
      for (let BH = 1; 10 >= BH; BH++) {
        const LH = HH.length - 2 * BH;
        if (0 > LH) break;
        let AH = !0;
        for (let rH = 0; BH > rH; rH++)
          if (!jr(HH[LH + rH], HH[LH + BH + rH])) {
            AH = !1;
            break
          } if (AH) {
          for (let AH = 0; BH > AH; AH++) HH[LH + AH] = HH[LH + BH + AH];
          return HH.length = LH + BH, {
            start: LH,
            length: BH
          }
        }
      }
    }

    function Fr(HH, BH) {
      const LH = BH.start + BH.length,
        AH = wr(HH, BH);
      AH && HH.splice(LH + AH === HH.length ? LH : BH.start, AH)
    }

    function Dr(HH, BH) {
      let LH = BH.start;
      for (; LH > 0 && jr(HH[LH - 1], HH[LH - 1 + BH.length]);) LH--;
      return BH.start - LH
    }

    function wr(HH, BH) {
      const LH = BH.start + BH.length;
      let AH = LH;
      for (; HH.length > AH && jr(HH[AH], HH[AH - BH.length]);) AH++;
      return AH - LH
    }

    function Zr(HH, BH) {
      const LH = BH[0];
      let AH = HH.length - (LH ? Dr(HH, LH) : 0);
      for (const rH of BH) AH -= wr(HH, rH);
      return AH
    }

    function dr(HH, BH, LH) {
      for (let AH = 0; HH.length > AH; AH++) {
        const rH = HH[(BH + AH) % HH.length],
          SH = HH[(LH + AH) % HH.length];
        if (rH !== SH) return SH > rH
      }
      return !1
    }
    var ar = class {
        match(HH) {
          return this.isDOMException(HH) || this.isDOMError(HH)
        }
        coerce(HH, BH) {
          const LH = OL(HH.stack);
          return {
            type: this.getType(HH),
            value: this.getValue(HH),
            stack: LH ? HH.stack : void 0,
            cause: HH.cause ? BH.next(HH.cause) : void 0,
            synthetic: !1
          }
        }
        getType(HH) {
          return this.isDOMError(HH) ? "DOMError" : "DOMException"
        }
        getValue(HH) {
          const BH = HH.name || (this.isDOMError(HH) ? "DOMError" : "DOMException");
          return HH.message ? `${BH}: ${HH.message}` : BH
        }
        isDOMException(HH) {
          return eL(HH, "DOMException")
        }
        isDOMError(HH) {
          return eL(HH, "DOMError")
        }
      },
      sr = class {
        match(HH) {
          return qL(HH)
        }
        coerce(HH, BH) {
          var LH;
          const AH = this.getStack(HH),
            rH = void 0 === AH ? null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack : void 0,
            SH = !!rH;
          return {
            type: this.getType(HH),
            value: this.getMessage(HH, BH),
            stack: null != AH ? AH : rH,
            cause: HH.cause ? BH.next(HH.cause) : void 0,
            synthetic: SH
          }
        }
        getType(HH) {
          return HH.name || HH.constructor.name
        }
        getMessage(HH, BH) {
          const LH = HH.message;
          return String(LH.error && "string" == typeof LH.error.message ? LH.error.message : LH)
        }
        getStack(HH) {
          try {
            const BH = HH.stacktrace;
            if ("string" == typeof BH && BH.length > 0) return BH;
            const LH = HH.stack;
            return "string" == typeof LH && LH.length > 0 ? LH : void 0
          } catch (HH) {
            return
          }
        }
      },
      Jr = class {
        match(HH) {
          return !!eL(HH, "ErrorEvent") && (null != HH.error || this._hasUsableMessage(HH))
        }
        coerce(HH, BH) {
          var LH;
          if (null != HH.error) return BH.apply(HH.error);
          const AH = BH.apply(HH.message);
          return xr(xr({}, AH), {}, {
            stack: null !== (LH = this._buildLocationStack(HH)) && void 0 !== LH ? LH : AH.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(HH) {
          return OL(HH.message) && HH.message.length > 0
        }
        _buildLocationStack(HH) {
          var BH, LH;
          const AH = HH,
            rH = null !== (BH = AH.lineno) && void 0 !== BH ? BH : 0,
            SH = null !== (LH = AH.colno) && void 0 !== LH ? LH : 0;
          if (OL(AH.filename) && 0 !== AH.filename.length && 0 !== rH) return `Error\n    at ${AH.filename}:${rH}:${SH}`
        }
      };
    const ir = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var pr = class {
      match(HH) {
        return "string" == typeof HH
      }
      coerce(HH, BH) {
        var LH;
        const [AH, rH] = this.getInfos(HH);
        return {
          type: null != AH ? AH : "Error",
          value: null != rH ? rH : HH,
          stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
          synthetic: !0
        }
      }
      getInfos(HH) {
        let BH = "Error",
          LH = HH;
        const AH = HH.match(ir);
        return AH && (BH = AH[1], LH = AH[2]), [BH, LH]
      }
    };
    const yr = ["fatal", "error", "warning", "log", "info", "debug"];

    function HS(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const LH = Object.keys(HH);
      if (LH.sort(), !LH.length) return "[object has no keys]";
      for (let AH = LH.length; AH > 0; AH--) {
        const HH = LH.slice(0, AH).join(", ");
        if (BH >= HH.length) return AH === LH.length ? HH : HH.length > BH ? `${HH.slice(0,BH)}...` : HH
      }
      return ""
    }
    var BS = class {
        match(HH) {
          return "object" == typeof HH && null !== HH
        }
        coerce(HH, BH) {
          var LH, AH;
          const rH = this.getErrorPropertyFromObject(HH);
          return rH ? BH.apply(rH) : {
            type: this.getType(HH),
            value: this.getValue(HH),
            stack: null !== (LH = this.getStack(HH)) && void 0 !== LH ? LH : null === (AH = BH.syntheticException) || void 0 === AH ? void 0 : AH.stack,
            level: this.isSeverityLevel(HH.level) ? HH.level : "error",
            synthetic: !0
          }
        }
        getType(HH) {
          if (gL(HH)) return HH.constructor.name;
          const BH = "name" in HH ? HH.name : void 0;
          return OL(BH) && !bL(BH) ? BH : "Error"
        }
        getValue(HH) {
          if ("name" in HH && "string" == typeof HH.name) {
            let BH = `'${HH.name}' captured as exception`;
            return "message" in HH && "string" == typeof HH.message && (BH += ` with message: '${HH.message}'`), BH
          }
          if ("message" in HH && "string" == typeof HH.message) return HH.message;
          const BH = this.getObjectClassName(HH);
          return `${BH&&"Object"!==BH?`'${BH}'`:"Object"} captured as exception with keys: ${HS(HH)}`
        }
        isSeverityLevel(HH) {
          return OL(HH) && !bL(HH) && yr.indexOf(HH) >= 0
        }
        getStack(HH) {
          try {
            return OL(HH.stacktrace) && HH.stacktrace.length > 0 ? HH.stacktrace : OL(HH.stack) && HH.stack.length > 0 ? HH.stack : void 0
          } catch (HH) {
            return
          }
        }
        getErrorPropertyFromObject(HH) {
          for (const BH in HH)
            if ({}.hasOwnProperty.call(HH, BH)) {
              const LH = HH[BH];
              if (qL(LH)) return LH
            }
        }
        getObjectClassName(HH) {
          try {
            const BH = Object.getPrototypeOf(HH);
            return BH ? BH.constructor.name : void 0
          } catch (HH) {
            return
          }
        }
      },
      LS = class {
        match(HH) {
          return gL(HH)
        }
        coerce(HH, BH) {
          var LH;
          const AH = HH.constructor.name;
          return {
            type: AH,
            value: `${AH} captured as exception with keys: ${HS(HH)}`,
            stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
            synthetic: !0
          }
        }
      },
      AS = class {
        match(HH) {
          return cL(HH)
        }
        coerce(HH, BH) {
          var LH;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(HH)}`,
            stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
            synthetic: !0
          }
        }
      },
      rS = class {
        match(HH) {
          return eL(HH, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(HH)
        }
        isCustomEventWrappingRejection(HH) {
          if (!gL(HH)) return !1;
          try {
            const BH = HH.detail;
            return null != BH && "object" == typeof BH && "reason" in BH
          } catch (HH) {
            return !1
          }
        }
        coerce(HH, BH) {
          var LH;
          const AH = this.getUnhandledRejectionReason(HH);
          return cL(AH) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(AH)}`,
            stack: null === (LH = BH.syntheticException) || void 0 === LH ? void 0 : LH.stack,
            synthetic: !0
          } : BH.apply(AH)
        }
        getUnhandledRejectionReason(HH) {
          try {
            if ("reason" in HH) return HH.reason;
            if ("detail" in HH && null != HH.detail && "object" == typeof HH.detail && "reason" in HH.detail) return HH.detail.reason
          } catch (HH) {}
          return HH
        }
      };
    const SS = "$message",
      hS = "$timestamp",
      tS = new Set([SS, hS]),
      zS = {
        enabled: !0,
        max_bytes: 32768
      };

    function CS(HH) {
      var BH;
      return HH ? {
        enabled: null !== (BH = HH.enabled) && void 0 !== BH ? BH : zS.enabled,
        max_bytes: XS(HH.max_bytes, zS.max_bytes)
      } : xr({}, zS)
    }
    var ES = class {
      constructor(HH) {
        this._entries = [], this._totalBytes = 0, this._config = CS(HH)
      }
      setConfig(HH) {
        this._config = CS(HH), this._trimToMaxBytes()
      }
      add(HH) {
        const BH = function(HH) {
          let BH;
          try {
            BH = QL(HH)
          } catch (HH) {
            return
          }
          try {
            const HH = JSON.parse(BH);
            if (!TL(HH)) return;
            const LH = HH,
              AH = LH[SS],
              rH = LH[hS];
            if (!OL(AH) || 0 === AH.trim().length) return;
            if (!OL(rH) && !oL(rH)) return;
            return {
              step: LH,
              json: BH
            }
          } catch (HH) {
            return
          }
        }(HH);
        if (!BH) return;
        const LH = function(HH) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(HH).length;
          const BH = encodeURIComponent(HH);
          let LH = 0;
          for (let AH = 0; BH.length > AH; AH++) "%" === BH[AH] ? (LH += 1, AH += 2) : LH += 1;
          return LH
        }(BH.json);
        LH > this._config.max_bytes || (this._entries.push({
          step: BH.step,
          bytes: LH
        }), this._totalBytes += LH, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((HH => HH.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const HH = this._entries.shift();
          HH && (this._totalBytes -= HH.bytes)
        }
      }
    };

    function XS(HH, BH) {
      if (!oL(HH) || 1 / 0 === HH || -1 / 0 === HH) return BH;
      const LH = Math.floor(HH);
      return 0 > LH ? BH : LH
    }
    const GS = HH => {
      if ("string" != typeof HH) return HH;
      try {
        return JSON.parse(HH)
      } catch (rH) {
        return HH
      }
    };

    function YS(HH) {
      return "string" == typeof HH || HH
    }

    function uS(HH) {
      return "string" == typeof HH ? HH : void 0
    }
    const QS = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      WS = "NativeGzipValidationError",
      MS = HH => HH.length >= 2 && 31 === HH[0] && 139 === HH[1],
      xS = (HH, BH) => HH === CL.GZipJS || BH === CL.GZipJS || "gzip" === BH,
      vS = HH => !(!HH || "object" != typeof HH) && "NotReadableError" === ("name" in HH ? String(HH.name) : "");
    let PS;
    const TS = HH => {
        throw Cr(WS, `Native gzip produced invalid output: ${HH}`)
      },
      US = (VS = DL((function*(HH, BH) {
        18 > HH.size && TS("too-short");
        const LH = new Uint8Array(yield HH.slice(0, 10).arrayBuffer());
        MS(LH) && 8 === LH[2] || TS("invalid-header");
        const AH = new DataView(yield HH.slice(HH.size - 8).arrayBuffer());
        AH.getUint32(0, !0) !== (HH => {
          const BH = (() => {
            if (PS) return PS;
            PS = [];
            for (let HH = 0; 256 > HH; HH++) {
              let BH = HH;
              for (let HH = 0; 8 > HH; HH++) BH = 1 & BH ? 3988292384 ^ BH >>> 1 : BH >>> 1;
              PS[HH] = BH >>> 0
            }
            return PS
          })();
          let LH = 4294967295;
          for (let AH = 0; HH.length > AH; AH++) LH = BH[255 & (LH ^ HH[AH])] ^ LH >>> 8;
          return (4294967295 ^ LH) >>> 0
        })(BH) && TS("invalid-crc");
        const rH = BH.length >>> 0;
        AH.getUint32(4, !0) !== rH && TS("invalid-size")
      })), function(HH, BH) {
        return VS.apply(this, arguments)
      });
    var VS;

    function OS() {
      return OS = DL((function*(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const BH = (new TextEncoder).encode(HH),
            LH = new globalThis.CompressionStream("gzip"),
            rH = LH.writable.getWriter(),
            SH = rH.write(BH).then((() => rH.close())).catch((AH = DL((function*(HH) {
              try {
                yield rH.abort(HH)
              } catch (HH) {}
              throw HH
            })), function(HH) {
              return AH.apply(this, arguments)
            })),
            hH = new Response(LH.readable).blob(),
            [tH] = yield Promise.all([hH, SH]);
          return yield US(tH, BH), tH
        } catch (HH) {
          if (null == LH ? void 0 : LH.rethrow) throw HH;
          return BH && console.error("Failed to gzip compress data", HH), null
        }
        var AH
      })), OS.apply(this, arguments)
    }

    function bS(HH, BH) {
      if (null == HH) return {};
      var LH, AH, rH = function(HH, BH) {
        if (null == HH) return {};
        var LH = {};
        for (var AH in HH)
          if ({}.hasOwnProperty.call(HH, AH)) {
            if (BH.includes(AH)) continue;
            LH[AH] = HH[AH]
          } return LH
      }(HH, BH);
      if (Object.getOwnPropertySymbols) {
        var SH = Object.getOwnPropertySymbols(HH);
        for (AH = 0; SH.length > AH; AH++) BH.includes(LH = SH[AH]) || {}.propertyIsEnumerable.call(HH, LH) && (rH[LH] = HH[LH])
      }
      return rH
    }
    const kS = "[redacted]",
      mS = /^[A-Za-z0-9+/\n\r]+=*$/,
      oS = /^[A-Za-z0-9_-]+={0,2}$/,
      IS = /[-_]/,
      fS = /^data:[^,\s]*;base64,/i,
      lS = /^[A-Za-z0-9+/_-]+={0,2}$/,
      KS = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      cS = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      eS = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      qS = /[\s<>"]/,
      gS = new RegExp(eS.source, "i"),
      NS = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      RS = new RegExp(`^${NS.source}`, "i"),
      jS = new RegExp(NS.source, "gi"),
      nS = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      FS = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      DS = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      wS = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      ZS = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      dS = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      aS = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      sS = /\b\d(?:[ ./-]?\d){12,}\b/g,
      JS = /\d+/g,
      iS = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      pS = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function yS(HH) {
      return function(HH) {
        return cS.test(HH)
      }(HH) || nS.test(HH) || FS.test(HH)
    }

    function Hh(HH) {
      return HH.split("&", 129).length > 128
    }

    function Bh(HH, BH, LH) {
      return yS(HH) || BH.includes(";") && function(HH) {
        return HH.split(";").some((HH => yS(HH.split("=", 1)[0])))
      }(BH) ? kS : gS.test(BH) ? LH ? th(BH, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : kS : BH
    }

    function Lh(HH, BH) {
      const LH = new URLSearchParams;
      let AH = !1,
        rH = !1;
      for (const [SH, hH] of new URLSearchParams(HH)) {
        const HH = zh(SH),
          tH = zh(hH);
        AH || (AH = HH !== SH || tH !== hH);
        const zH = Bh(HH, tH, BH);
        AH || (AH = zH !== tH), rH = yS(HH) || zH !== tH, LH.append(HH, zH)
      }
      return {
        changed: AH,
        lastFieldSensitive: rH,
        serialized: LH.toString()
      }
    }

    function Ah(HH, BH) {
      if (!HH.includes("=")) return {
        value: rh(HH, BH),
        lastFieldSensitive: !1
      };
      const LH = Lh(HH, BH);
      return {
        value: LH.changed ? LH.serialized : HH,
        lastFieldSensitive: LH.lastFieldSensitive
      }
    }

    function rh(HH, BH) {
      return BH ? th(HH, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : gS.test(HH) ? kS : HH
    }

    function Sh(HH, BH, LH) {
      return "#" === HH ? !BH.fragment && (BH.fragment = !0) : "?" === HH && (BH.fragment ? "=" !== LH && !BH.fragmentQuery && (BH.fragmentQuery = !0) : !BH.query && (BH.query = !0))
    }

    function hh(HH, BH) {
      var LH;
      if (HH.length > 8192 && RS.test(HH)) return kS;
      const {
        address: AH,
        suffix: rH
      } = BH.stripPunctuation ? function(HH) {
        let BH = HH.length;
        for (; BH > 0 && ".,;:!?)]}'".includes(HH[BH - 1]);) BH--;
        return {
          address: HH.slice(0, BH),
          suffix: HH.slice(BH)
        }
      }(HH) : {
        address: HH,
        suffix: ""
      };
      let SH;
      try {
        SH = new URL(AH)
      } catch (HH) {
        return kS + rH
      }
      const hH = SH.search.slice(1),
        tH = "" !== SH.hash,
        zH = function(HH) {
          const BH = HH.slice(1),
            LH = BH.indexOf("?");
          return 0 > LH ? {
            head: BH,
            tail: null
          } : {
            head: BH.slice(0, LH),
            tail: BH.slice(LH + 1)
          }
        }(SH.hash);
      if (Hh(hH) || Hh(zH.head) || Hh(null !== (LH = zH.tail) && void 0 !== LH ? LH : "")) return kS + rH;
      let CH = !1;
      (SH.username || SH.password) && (SH.username = kS, SH.password = "", CH = !0);
      const EH = Lh(hH, BH.allowNestedUrls);
      EH.changed && (SH.search = EH.serialized, CH = !0);
      const XH = Ah(zH.head, BH.allowNestedUrls),
        GH = null === zH.tail ? null : (YH = zH.tail, XH.lastFieldSensitive ? {
          value: "" === YH ? "" : kS,
          lastFieldSensitive: !0
        } : Ah(YH, BH.allowNestedUrls));
      var YH;
      const uH = null === GH ? XH.value : `${XH.value}?${GH.value}`;
      uH !== SH.hash.slice(1) && (SH.hash = uH, CH = !0);
      const QH = tH ? null != GH ? GH : XH : EH;
      return (CH ? zh(SH.toString()) : AH) + (QH.lastFieldSensitive ? "" : rH)
    }

    function th(HH, BH) {
      return HH.replace(eS, (LH => function(HH, BH) {
        const LH = function(HH) {
          if (!HH.includes("://")) return [];
          const BH = [...HH.matchAll(jS)].map((HH => HH.index)),
            LH = [],
            AH = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let rH = 0,
            SH = !1,
            hH = "";
          for (let tH = 0; HH.length > tH && BH.length > rH; tH++) {
            BH[rH] === tH && (tH > 0 && "=" !== hH && LH.push(tH), rH++);
            const zH = HH[tH];
            Sh(zH, AH, hH) ? (hH = zH, SH = !0) : SH && "=&".includes(zH) && (hH = zH)
          }
          return LH
        }(HH);
        if (0 === LH.length) return hh(HH, BH);
        let AH = "",
          rH = 0;
        for (const SH of LH) AH += hh(HH.slice(rH, SH), xr(xr({}, BH), {}, {
          stripPunctuation: !1
        })), rH = SH;
        return AH + hh(HH.slice(rH), BH)
      }(LH, xr(xr({}, BH), {}, {
        stripPunctuation: BH.stripPunctuation && LH.length !== HH.length
      }))))
    }

    function zh(HH) {
      return HH.replace(KS, kS)
    }

    function Ch(HH) {
      let BH = 0,
        LH = !1;
      for (let AH = HH.length - 1; AH >= 0; AH--) {
        let rH = HH.charCodeAt(AH) - 48;
        if (0 > rH || rH > 9) return !1;
        LH && (rH *= 2, rH > 9 && (rH -= 9)), BH += rH, LH = !LH
      }
      return BH % 10 == 0
    }

    function Eh(HH) {
      const BH = [];
      for (let SH = JS.exec(HH); null !== SH; SH = JS.exec(HH)) BH.push({
        digits: SH[0],
        start: SH.index,
        end: SH.index + SH[0].length
      });
      let LH = "",
        AH = 0,
        rH = 0;
      for (; BH.length > rH;) {
        let SH = "",
          hH = -1;
        for (let HH = rH; BH.length > HH && (SH += BH[HH].digits, 19 >= SH.length); HH++) SH.length >= 13 && Ch(SH) && (hH = HH);
        0 > hH ? rH++ : (LH += HH.slice(AH, BH[rH].start) + kS, AH = BH[hH].end, rH = hH + 1)
      }
      return LH + HH.slice(AH)
    }
    const Xh = {}.propertyIsEnumerable;

    function Gh(HH, BH) {
      try {
        return Qh(HH, BH, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (HH) {
        return []
      }
    }

    function Yh(HH, BH, LH, AH) {
      if (0 >= LH.remainingNodes) return {
        stringValue: Br
      };
      if (LH.remainingNodes--, fL(HH)) return {
        boolValue: HH
      };
      if ("bigint" == typeof HH) return function(HH, BH) {
        const LH = HH.toString(),
          AH = BigInt("9223372036854775808");
        return HH >= AH || -AH > HH ? (null == BH || BH.debug(`Attribute ${LH} is outside the int64 range; encoding it as a string`), {
          stringValue: LH
        }) : {
          intValue: LH
        }
      }(HH, BH);
      if ("number" == typeof HH) {
        if (!Number.isFinite(HH)) return {
          stringValue: String(HH)
        };
        if (Number.isInteger(HH)) {
          if (Number.isSafeInteger(HH)) return {
            intValue: String(HH)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(HH)
          };
          const LH = BigInt(HH).toString();
          return HH >= 0x8000000000000000 || -0x8000000000000000 > HH ? (null == BH || BH.debug(`Attribute ${LH} is outside the int64 range; encoding it as a string`), {
            stringValue: LH
          }) : {
            intValue: LH
          }
        }
        return {
          doubleValue: HH
        }
      }
      if ("string" == typeof HH) return {
        stringValue: Ar(HH)
      };
      if ("function" == typeof HH) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof HH) return {
        stringValue: String(HH)
      };
      if ("object" == typeof HH && null !== HH) {
        if (LH.ancestors.has(HH)) return {
          stringValue: "[Circular]"
        };
        if (AH >= 20) return {
          stringValue: Br
        };
        if (HH instanceof Date) {
          const BH = HH.getTime(),
            LH = Number.isFinite(BH) ? HH.toISOString() : String(HH);
          return {
            stringValue: "string" == typeof LH ? Ar(LH) : String(LH)
          }
        }
        LH.ancestors.add(HH);
        try {
          try {
            const rH = HH.toJSON;
            if ("function" == typeof rH) return Yh(rH.call(HH), BH, LH, AH + 1)
          } catch (HH) {}
          return vL(HH) ? {
            arrayValue: {
              values: uh(HH, BH, LH, AH + 1)
            }
          } : {
            kvlistValue: {
              values: Qh(HH, BH, LH, AH + 1)
            }
          }
        } finally {
          LH.ancestors.delete(HH)
        }
      }
      return {
        stringValue: Ar(String(HH))
      }
    }

    function uh(HH, BH, LH, AH) {
      const rH = [],
        SH = Math.min(HH.length, 1e3);
      let hH = 0;
      for (; SH > hH && LH.remainingNodes > 0; hH++) try {
        const SH = hH in HH ? HH[hH] : void 0;
        if (mL(SH)) continue;
        rH.push(Yh(SH, BH, LH, AH))
      } catch (HH) {
        rH.push({
          stringValue: Lr
        })
      }
      return HH.length > hH && rH.push({
        stringValue: Br
      }), rH
    }

    function Qh(HH, BH, LH, AH) {
      const rH = [];
      for (const SH in HH)
        if (Xh.call(HH, SH)) {
          if (!SH) {
            null == BH || BH.debug("Dropping an attribute with an empty key");
            continue
          }
          if (rH.length >= 1e3 || 0 >= LH.remainingNodes) {
            null == BH || BH.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const hH = HH[SH];
            if (kL(hH) || VL(hH)) continue;
            rH.push({
              key: Ar(SH),
              value: Yh(hH, BH, LH, AH)
            })
          } catch (HH) {
            rH.push({
              key: Ar(SH),
              value: {
                stringValue: Lr
              }
            })
          }
        } return rH
    }

    function Wh(HH, BH, LH) {
      return xr(xr(xr(xr({}, rr({}, HH.resourceAttributes)), {}, {
        "service.name": HH.serviceName || "unknown_service"
      }, HH.environment && {
        "deployment.environment": HH.environment
      }), HH.serviceVersion && {
        "service.version": HH.serviceVersion
      }), {}, {
        "telemetry.sdk.name": BH,
        "telemetry.sdk.version": LH
      })
    }
    const Mh = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function xh(HH, BH) {
      const LH = rr({}, HH),
        AH = {};
      for (const rH of Mh)({}).hasOwnProperty.call(LH, rH) && (AH[rH] = LH[rH], delete LH[rH]);
      return [...Gh(LH, BH), ...Gh(AH, BH)]
    }
    const vh = {
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
      Ph = {
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
      Th = Ph.info;

    function Uh(HH) {
      try {
        return Ar(String(HH))
      } catch (HH) {
        return Lr
      }
    }

    function Vh(HH, BH, LH, AH) {
      const rH = HH.level || "info",
        {
          text: SH,
          number: hH
        } = Ph[rH] || Th,
        tH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(HH) + "000000"
        }(oL(AH) ? AH : void 0),
        zH = {};
      BH.distinctId && (zH.posthogDistinctId = BH.distinctId), BH.sessionId && (zH.sessionId = BH.sessionId), BH.windowId && (zH["window.id"] = BH.windowId), mL(BH.sessionStartTimestamp) || (zH.sessionStartTimestamp = String(BH.sessionStartTimestamp)), mL(BH.lastActivityTimestamp) || (zH.lastActivityTimestamp = String(BH.lastActivityTimestamp)), BH.currentUrl && (zH["url.full"] = BH.currentUrl), BH.screenName && (zH["screen.name"] = BH.screenName), BH.appState && (zH["app.state"] = BH.appState), BH.activeFeatureFlags && BH.activeFeatureFlags.length > 0 && (zH.feature_flags = BH.activeFeatureFlags);
      const CH = xr({}, zH),
        EH = HH.attributes;
      if (EH) {
        let HH = [];
        try {
          HH = Object.keys(EH)
        } catch (BH) {
          HH = []
        }
        for (const LH of HH) {
          let HH;
          try {
            HH = EH[LH]
          } catch (BH) {
            HH = Lr
          }
          Object.defineProperty(CH, LH, {
            value: HH,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const XH = {
        timeUnixNano: tH,
        observedTimeUnixNano: tH,
        severityNumber: hH,
        severityText: SH,
        body: {
          stringValue: Uh(HH.body)
        },
        attributes: Gh(CH, LH)
      };
      return HH.trace_id && (XH.traceId = HH.trace_id), HH.span_id && (XH.spanId = HH.span_id), VL(HH.trace_flags) || (XH.flags = HH.trace_flags), XH
    }

    function Oh(HH, BH, LH) {
      return Wh(HH, BH, LH)
    }

    function bh(HH, BH, LH, AH) {
      return {
        resourceLogs: [{
          resource: {
            attributes: xh(BH)
          },
          scopeLogs: [{
            scope: {
              name: LH,
              version: AH
            },
            logRecords: HH
          }]
        }]
      }
    }
    var kh = class {
      constructor(HH) {
        this._onFire = HH, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(HH) {
        this.clear(), this._firesAt = Date.now() + HH, this._timer = Gr((() => {
          this._timer = void 0, this._onFire()
        }), HH)
      }
      armNoEarlierThan(HH) {
        this._timer && Date.now() + HH <= this._firesAt || this.arm(HH)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function mh() {
      return .75 + .5 * Math.random()
    }

    function oh(HH, BH, LH, AH) {
      const rH = Math.min(Math.max(0, BH - 1), 6),
        SH = HH * Math.pow(2, rH);
      return Math.round((void 0 === AH ? SH : Math.min(SH, Math.max(AH, HH))) * LH)
    }
    var Ih = class {
      constructor(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          hH = arguments.length > 6 ? arguments[6] : void 0;
        var tH;
        this._instance = HH, this._config = BH, this._logger = LH, this._getContext = AH, this._onReady = rH, this._waitForStoragePersist = SH, this._scopeName = hH, this._flushTimer = new kh((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new hr, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = BH.maxBufferSize, this._maxQueueSize = Math.max(null !== (tH = BH.maxQueueSize) && void 0 !== tH ? tH : BH.maxBufferSize, BH.maxBufferSize), this._flushIntervalMs = BH.flushIntervalMs, this._maxBatchRecordsPerPost = BH.maxBatchRecordsPerPost, this._rateCapWindowMs = BH.rateCapWindowMs, this._maxLogsPerInterval = BH.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(zL.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(HH, BH) {
        var LH;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == HH ? void 0 : HH.body)) return;
        const AH = this._runBeforeSend(HH);
        if (null === AH) return;
        if (!AH.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const rH = {
          record: Vh(AH, null !== (LH = null == BH ? void 0 : BH.context) && void 0 !== LH ? LH : this._getContext(), this._logger, null == BH ? void 0 : BH.occurredAtMs)
        };
        this._onReady((() => this._enqueue(rH)))
      }
      _runBeforeSend(HH) {
        const BH = this._config.beforeSend;
        if (!BH) return HH;
        const LH = vL(BH) ? BH : [BH];
        let AH = HH;
        for (const rH of LH) try {
          const HH = rH(AH);
          if (!HH) return this._logger.info("Log was rejected in beforeSend function"), null;
          AH = HH
        } catch (HH) {
          return this._logger.error("Error in beforeSend function for log:", HH), null
        }
        return AH
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const HH = Date.now(),
          BH = HH - this._intervalWindowStart;
        return this._rateCapWindowMs > BH && BH >= 0 || (this._intervalWindowStart = HH, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var HH = this;
        return DL((function*() {
          if (!HH._instance.isDisabled) return HH._flushPromise || (HH._flushPromise = HH._flushInner().finally((() => {
            HH._flushPromise = null
          }))), HH._flushPromise
        }))()
      }
      _flushInner() {
        var HH = this;
        return DL((function*() {
          var BH;
          HH._flushTimer.clear();
          let LH = null !== (BH = HH._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== BH ? BH : [];
          if (0 === LH.length) return;
          const AH = LH.length;
          let rH = 0;
          for (; LH.length > 0 && AH > rH;) {
            var SH, hH;
            const BH = HH._queueGeneration;
            HH._evictedSinceAdvance = 0;
            const AH = Math.min(LH.length, HH._maxBatchRecordsPerPost),
              tH = LH.slice(0, AH),
              zH = bh(tH.map((HH => HH.record)), HH._buildResourceAttributes(), null !== (SH = HH._scopeName) && void 0 !== SH ? SH : HH._instance.getLibraryId(), HH._instance.getLibraryVersion()),
              CH = yield HH._instance._sendLogsBatch(zH);
            if (HH._queueGeneration !== BH) return;
            if ("too-large" === CH.kind && tH.length > 1) HH._maxBatchRecordsPerPost = Math.max(1, Math.floor(tH.length / 2)), HH._logger.warn(`Logs batch of size ${tH.length} was too large for the ingestion endpoint, reducing batch size to ${HH._maxBatchRecordsPerPost}`);
            else {
              if (HH._retryAfter.record(CH), HH._flushTimer.pending && HH._flushTimer.arm(Math.max(HH._flushIntervalMs, HH._retryAfter.remainingMs())), "retry-later" === CH.kind) throw CH.error;
              if ("too-large" === CH.kind ? HH._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === CH.kind && HH._config.maxBatchRecordsPerPost > HH._maxBatchRecordsPerPost && (HH._maxBatchRecordsPerPost = Math.min(HH._config.maxBatchRecordsPerPost, HH._maxBatchRecordsPerPost + 1)), yield HH._persistQueueAdvance(tH.length), LH = null !== (hH = HH._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== hH ? hH : [], rH += tH.length, "fatal" === CH.kind) throw CH.error
            }
          }
        }))()
      }
      _persistQueueAdvance(HH) {
        var BH = this;
        return DL((function*() {
          var LH;
          const AH = Math.max(0, HH - BH._evictedSinceAdvance),
            rH = null !== (LH = BH._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== LH ? LH : [];
          BH._instance.setPersistedProperty(zL.LogsQueue, rH.slice(AH)), yield BH._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return Oh(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(HH) {
        var BH;
        if (this._instance.optedOut) return;
        const LH = null !== (BH = this._instance.getPersistedProperty(zL.LogsQueue)) && void 0 !== BH ? BH : [];
        this._maxQueueSize > LH.length || (LH.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), LH.push(HH), this._instance.setPersistedProperty(zL.LogsQueue, LH), this._maxBufferSize > LH.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(oh(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const HH = this._instance.getPersistedProperty(zL.LogsQueue);
        return !!HH && HH.length > 0
      }
      shutdown(HH) {
        var BH = this;
        return DL((function*() {
          BH._flushTimer.clear();
          const LH = BH.flush().catch((() => {}));
          void 0 !== HH ? yield Yr(LH, HH): yield LH
        }))()
      }
      flushWithTimeout(HH) {
        var BH = this;
        return DL((function*() {
          const LH = BH.flush();
          yield Yr(LH, HH, (() => {
            LH.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (HH => {
          this._consecutiveFlushFailures++, this._flushJitter = mh(), this._logger.error("PostHog logs flush failed:", HH)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const fh = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function lh(HH) {
      return String(HH) + "000000"
    }

    function Kh(HH, BH, LH, AH) {
      let rH = "";
      return AH && (rH = Object.keys(AH).sort().map((HH => `${JSON.stringify(HH)}:${JSON.stringify(AH[HH])}`)).join(",")), `${HH}\0${BH}\0${null!=LH?LH:""}\0${rH}`
    }
    var ch = class {
      constructor(HH, BH, LH) {
        this._instance = HH, this._config = BH, this._logger = LH, this._series = new Map, this._flushTimer = new kh((() => this.flush().catch((HH => {
          this._logger.error("Metrics flush failed:", HH)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new hr, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: HH,
          type: "count",
          value: BH,
          unit: null == LH ? void 0 : LH.unit,
          attributes: null == LH ? void 0 : LH.attributes
        })
      }
      gauge(HH, BH, LH) {
        this._capture({
          name: HH,
          type: "gauge",
          value: BH,
          unit: null == LH ? void 0 : LH.unit,
          attributes: null == LH ? void 0 : LH.attributes
        })
      }
      histogram(HH, BH, LH) {
        this._capture({
          name: HH,
          type: "histogram",
          value: BH,
          unit: null == LH ? void 0 : LH.unit,
          attributes: null == LH ? void 0 : LH.attributes
        })
      }
      flush() {
        var HH = this;
        const BH = this._flushPromise,
          LH = function() {
            var LH = DL((function*() {
              BH && (yield BH.catch((() => {}))), yield HH._doFlush()
            }));
            return function() {
              return LH.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === LH && (this._flushPromise = null)
          }));
        return this._flushPromise = LH, LH
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const HH = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(HH)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(HH) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const BH = this._runBeforeSend(HH);
        if (null === BH) return;
        if (!BH.name || "string" != typeof BH.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof BH.value || !Number.isFinite(BH.value)) return void this._logger.warn(`Dropping metric '${BH.name}': value must be a finite number`);
        if ("count" === BH.type && 0 > BH.value) return void this._logger.warn(`Dropping count '${BH.name}': counters are monotonic, value must be >= 0`);
        let LH, AH;
        try {
          LH = BH.attributes ? xr({}, BH.attributes) : void 0, AH = Kh(BH.type, BH.name, BH.unit, LH)
        } catch (HH) {
          return void this._logger.warn(`Dropping metric '${BH.name}': attributes could not be serialized`, HH)
        }
        let rH = this._series.get(AH);
        if (!rH) {
          if (!this._admitNewSeries()) return;
          rH = {
            name: BH.name,
            type: BH.type,
            unit: BH.unit,
            attributes: LH,
            windowStartMs: Date.now()
          }, this._series.set(AH, rH)
        }
        const SH = this._typeByName.get(BH.name);
        void 0 === SH ? this._typeByName.set(BH.name, BH.type) : SH === BH.type || this._typeCollisionWarned.has(BH.name) || (this._typeCollisionWarned.add(BH.name), this._logger.warn(`Metric name '${BH.name}' is already used as a ${SH}; recording it as a ${BH.type} too will blend both series in charts. Use a distinct name.`)), this._fold(rH, BH.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(HH, BH) {
        switch (HH.type) {
          case "count":
            var LH;
            HH.total = (null !== (LH = HH.total) && void 0 !== LH ? LH : 0) + BH;
            break;
          case "gauge":
            HH.last = BH;
            break;
          case "histogram": {
            HH.hist || (HH.hist = {
              count: 0,
              sum: 0,
              min: BH,
              max: BH,
              bucketCounts: new Array(fh.length + 1).fill(0)
            });
            const LH = HH.hist;
            LH.count += 1, LH.sum += BH, LH.min = Math.min(LH.min, BH), LH.max = Math.max(LH.max, BH), LH.bucketCounts[function(HH, BH) {
              for (let LH = 0; BH.length > LH; LH++)
                if (BH[LH] >= HH) return LH;
              return BH.length
            }(BH, fh)] += 1;
            break
          }
        }
      }
      _runBeforeSend(HH) {
        const BH = this._config.beforeSend;
        if (!BH) return HH;
        const LH = vL(BH) ? BH : [BH];
        let AH = HH;
        for (const rH of LH) try {
          const HH = rH(AH);
          if (!HH) return this._logger.info("Metric was rejected in beforeSend function"), null;
          AH = HH
        } catch (HH) {
          return this._logger.error("Error in beforeSend function for metric:", HH), null
        }
        return AH
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(oh(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var HH = this;
        return DL((function*() {
          if (HH._flushTimer.clear(), 0 === HH._series.size) return;
          const BH = HH._series;
          HH._series = new Map, HH._seriesCapWarned = !1, HH._typeByName = new Map, HH._typeCollisionWarned = new Set;
          const LH = HH._generation,
            AH = yield HH._instance._sendMetricsBatch(HH._buildPayload(BH));
          if (LH === HH._generation) switch (HH._retryAfter.record(AH), "retry-later" === AH.kind ? (HH._consecutiveFlushFailures++, HH._flushJitter = mh()) : (HH._consecutiveFlushFailures = 0, HH._flushJitter = 1), HH._flushTimer.pending && HH._flushTimer.arm(HH._nextFlushDelay()), AH.kind) {
            case "ok":
              return;
            case "retry-later":
              return HH._mergeWindowBack(BH), void HH._flushTimer.armNoEarlierThan(HH._nextFlushDelay());
            case "too-large":
              return void HH._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void HH._logger.error("Failed to send metrics batch:", AH.error)
          }
        }))()
      }
      _buildPayload(HH) {
        return BH = this._buildMetrics(HH), LH = function(HH, BH, LH) {
          return Wh(HH, BH, LH)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), AH = this._instance.getLibraryId(), rH = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: xh(LH)
            },
            scopeMetrics: [{
              scope: {
                name: AH,
                version: rH
              },
              metrics: BH
            }]
          }]
        };
        var BH, LH, AH, rH
      }
      _buildMetrics(HH) {
        const BH = lh(Date.now()),
          LH = new Map;
        for (const hH of HH.values()) {
          var AH;
          const HH = Kh(hH.type, hH.name, hH.unit, void 0);
          let tH = LH.get(HH);
          tH || (tH = xr({
            name: hH.name
          }, hH.unit && {
            unit: hH.unit
          }), "count" === hH.type ? tH.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === hH.type ? tH.gauge = {
            dataPoints: []
          } : tH.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, LH.set(HH, tH));
          const zH = Gh(null !== (AH = hH.attributes) && void 0 !== AH ? AH : {}, this._logger),
            CH = lh(hH.windowStartMs);
          if ("count" === hH.type) {
            var rH;
            const HH = {
              attributes: zH,
              startTimeUnixNano: CH,
              timeUnixNano: BH,
              asDouble: null !== (rH = hH.total) && void 0 !== rH ? rH : 0
            };
            tH.sum.dataPoints.push(HH)
          } else if ("gauge" === hH.type) {
            var SH;
            const HH = {
              attributes: zH,
              timeUnixNano: BH,
              asDouble: null !== (SH = hH.last) && void 0 !== SH ? SH : 0
            };
            tH.gauge.dataPoints.push(HH)
          } else hH.hist && tH.histogram.dataPoints.push({
            attributes: zH,
            startTimeUnixNano: CH,
            timeUnixNano: BH,
            count: hH.hist.count,
            sum: hH.hist.sum,
            min: hH.hist.min,
            max: hH.hist.max,
            bucketCounts: hH.hist.bucketCounts,
            explicitBounds: fh
          })
        }
        return Array.from(LH.values())
      }
      _mergeWindowBack(HH) {
        for (const [AH, rH] of HH) {
          const HH = this._series.get(AH);
          if (HH) switch (HH.windowStartMs = Math.min(HH.windowStartMs, rH.windowStartMs), HH.type) {
            case "count":
              var BH, LH;
              HH.total = (null !== (BH = HH.total) && void 0 !== BH ? BH : 0) + (null !== (LH = rH.total) && void 0 !== LH ? LH : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (rH.hist)
                if (HH.hist) {
                  HH.hist.count += rH.hist.count, HH.hist.sum += rH.hist.sum, HH.hist.min = Math.min(HH.hist.min, rH.hist.min), HH.hist.max = Math.max(HH.hist.max, rH.hist.max);
                  for (let BH = 0; HH.hist.bucketCounts.length > BH; BH++) HH.hist.bucketCounts[BH] += rH.hist.bucketCounts[BH]
                } else HH.hist = rH.hist
          } else this._admitNewSeries() && this._series.set(AH, rH)
        }
      }
    };
    const eh = function(HH) {
        let {
          debugEnabled: BH
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = {
          _log(LH) {
            let AH;
            try {
              AH = typeof window > "u" ? void 0 : window
            } catch (HH) {
              return
            }
            for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
            AH && (rH.DEBUG || AH.POSTHOG_DEBUG || BH) && !VL(AH.console) && AH.console && ("__rrweb_original__" in AH.console[LH] ? AH.console[LH].__rrweb_original__ : AH.console[LH])(HH, ...hH)
          },
          debug() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            LH._log("debug", ...BH)
          },
          info() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            LH._log("log", ...BH)
          },
          warn() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            LH._log("warn", ...BH)
          },
          error() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            LH._log("error", ...BH)
          },
          critical() {
            for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
            console.error(HH, ...LH)
          },
          uninitializedWarning(HH) {
            LH.error(`You must initialize PostHog before calling ${HH}`)
          },
          createLogger: (BH, LH) => eh(`${HH} ${BH}`, LH)
        };
        return LH
      },
      qh = eh("[PostHog.js]"),
      gh = qh.createLogger;

    function Nh(HH, BH) {
      vL(HH) && HH.forEach(BH)
    }

    function Rh(HH, BH) {
      if (!mL(HH))
        if (vL(HH)) HH.forEach(BH);
        else if ((HH => HH instanceof FormData)(HH)) HH.forEach(((HH, LH) => BH(HH, LH)));
      else
        for (const LH in HH) ML.call(HH, LH) && BH(HH[LH], LH)
    }
    const jh = function(HH) {
      for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
      for (const rH of LH)
        for (const BH in rH) void 0 !== rH[BH] && (HH[BH] = rH[BH]);
      return HH
    };

    function nh(HH) {
      const BH = Object.keys(HH);
      let LH = BH.length;
      const AH = new Array(LH);
      for (; LH--;) AH[LH] = [BH[LH], HH[BH[LH]]];
      return AH
    }
    const Fh = function(HH) {
        return function() {
          try {
            for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
            return HH.apply(this, LH)
          } catch (HH) {
            qh.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), qh.critical(HH)
          }
        }
      },
      Dh = function(HH) {
        const BH = {};
        return Rh(HH, (function(HH, LH) {
          (OL(HH) && HH.length > 0 || oL(HH)) && (BH[LH] = HH)
        })), BH
      };

    function wh(HH) {
      const BH = xr({}, HH);
      for (const LH of ["name", "message", "stack", "cause", "errors"]) try {
        LH in HH && (BH[LH] = HH[LH])
      } catch (HH) {}
      return BH
    }
    const Zh = ["herokuapp.com", "vercel.app", "netlify.app"];

    function dh(HH) {
      const BH = null == HH ? void 0 : HH.hostname;
      if (!OL(BH)) return !1;
      const LH = BH.split(".").slice(-2).join(".");
      for (const AH of Zh)
        if (LH === AH) return !1;
      return !0
    }

    function ah(HH, BH, LH, AH) {
      const {
        capture: rH = !1,
        passive: SH = !0
      } = null != AH ? AH : {};
      null == HH || HH.addEventListener(BH, LH, {
        capture: rH,
        passive: SH
      })
    }

    function sh(HH) {
      return "ph_toolbar_internal" === HH.name
    }
    const Jh = HH => {
      if (yB) {
        try {
          const BH = HH + "=",
            LH = yB.cookie.split(";").filter((HH => HH.length));
          for (let HH = 0; LH.length > HH; HH++) {
            let AH = LH[HH];
            for (;
              " " == AH.charAt(0);) AH = AH.substring(1, AH.length);
            if (0 === AH.indexOf(BH)) return decodeURIComponent(AH.substring(BH.length, AH.length))
          }
        } catch (HH) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(HH) {
      return 0 > HH ? Math.ceil(HH) : Math.floor(HH)
    }), Number.isInteger || (Number.isInteger = function(HH) {
      return oL(HH) && isFinite(HH) && Math.floor(HH) === HH
    });
    var ih = class HH {
        constructor(HH) {
          if (this.bytes = HH, 16 !== HH.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(BH, LH, AH, rH) {
          if (!Number.isInteger(BH) || !Number.isInteger(LH) || !Number.isInteger(AH) || !Number.isInteger(rH) || 0 > BH || 0 > LH || 0 > AH || 0 > rH || BH > 0xffffffffffff || LH > 4095 || AH > 1073741823 || rH > 4294967295) throw new RangeError("invalid field value");
          const SH = new Uint8Array(16);
          return SH[0] = BH / Math.pow(2, 40), SH[1] = BH / Math.pow(2, 32), SH[2] = BH / Math.pow(2, 24), SH[3] = BH / Math.pow(2, 16), SH[4] = BH / 256, SH[5] = BH, SH[6] = 112 | LH >>> 8, SH[7] = LH, SH[8] = 128 | AH >>> 24, SH[9] = AH >>> 16, SH[10] = AH >>> 8, SH[11] = AH, SH[12] = rH >>> 24, SH[13] = rH >>> 16, SH[14] = rH >>> 8, SH[15] = rH, new HH(SH)
        }
        toString() {
          let HH = "";
          for (let BH = 0; this.bytes.length > BH; BH++) HH = HH + (this.bytes[BH] >>> 4).toString(16) + (15 & this.bytes[BH]).toString(16), 3 !== BH && 5 !== BH && 7 !== BH && 9 !== BH || (HH += "-");
          if (36 !== HH.length) throw new Error("Invalid UUIDv7 was generated");
          return HH
        }
        clone() {
          return new HH(this.bytes.slice(0))
        }
        equals(HH) {
          return 0 === this.compareTo(HH)
        }
        compareTo(HH) {
          for (let BH = 0; 16 > BH; BH++) {
            const LH = this.bytes[BH] - HH.bytes[BH];
            if (0 !== LH) return Math.sign(LH)
          }
          return 0
        }
      },
      ph = class {
        generate() {
          const HH = this.generateOrAbort();
          if (!VL(HH)) return HH;
          {
            this._timestamp = 0;
            const HH = this.generateOrAbort();
            if (VL(HH)) throw new Error("Could not generate UUID after timestamp reset");
            return HH
          }
        }
        generateOrAbort() {
          const HH = (() => {
            const HH = Date.now();
            return oL(HH) && isFinite(HH) ? Math.min(Math.max(Math.floor(HH), 0), 0xffffffffffff) : 0
          })();
          if (HH > this._timestamp) this._timestamp = HH, this._resetCounter();
          else {
            if (this._timestamp >= HH + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return ih.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new Ht
        }
      };
    let yh = HH => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let BH = 0; HH.length > BH; BH++) HH[BH] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return HH
    };
    JB && !VL(JB.crypto) && crypto.getRandomValues && (yh = HH => crypto.getRandomValues(HH));
    var Ht = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (yh(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let Bt;
    const Lt = () => At().toString(),
      At = () => (Bt || (Bt = new ph)).generate();
    let rt = "";
    const St = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let ht = null;
    const tt = {
      _is_supported() {
        if (!kL(ht)) return ht;
        if (ht = !1, yB) try {
          const HH = `__ph_cookie_support_${Lt()}`;
          tt._set(HH, "xyz"), ht = '"xyz"' === Jh(HH), tt._remove(HH)
        } catch (AH) {
          ht = !1
        }
        return ht
      },
      _error(HH) {
        qh.error("cookieStore error: " + HH)
      },
      _get: Jh,
      _parse(HH) {
        let BH;
        try {
          BH = JSON.parse(tt._get(HH)) || {}
        } catch (HH) {}
        return BH
      },
      _set(HH, BH, LH, AH, rH) {
        if (!yB) return !1;
        try {
          let SH = "",
            hH = "";
          const tH = function(HH, BH) {
            if (BH) {
              let BH = function(HH) {
                let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB;
                if (rt) return rt;
                if (!BH) return "";
                if (["localhost", "127.0.0.1"].includes(HH)) return "";
                const LH = HH.split(".");
                let AH = Math.min(LH.length, 8);
                const rH = "dmn_chk_" + Lt();
                for (; !rt && AH--;) {
                  const HH = LH.slice(AH).join("."),
                    SH = rH + "=1;domain=." + HH + ";path=/";
                  BH.cookie = SH + ";max-age=3", BH.cookie.includes(rH) && (BH.cookie = SH + ";max-age=0", rt = HH)
                }
                return rt
              }(HH);
              if (!BH) {
                const LH = (HH => {
                  const BH = HH.match(St);
                  return BH ? BH[0] : ""
                })(HH);
                LH !== BH && qh.info("Warning: cookie subdomain discovery mismatch", LH, BH), BH = LH
              }
              return BH ? "; domain=." + BH : ""
            }
            return ""
          }(yB.location.hostname, AH);
          if (LH) {
            const HH = new Date;
            HH.setTime(HH.getTime() + 864e5 * LH), SH = "; expires=" + HH.toUTCString()
          }
          rH && (hH = "; secure");
          const zH = HH + "=" + encodeURIComponent(JSON.stringify(BH)) + SH + "; SameSite=Lax; path=/" + tH + hH;
          return zH.length > 3686.4 && qh.warn("cookieStore warning: large cookie, len=" + zH.length), yB.cookie = zH, !0
        } catch (HH) {
          return !1
        }
      },
      _remove(HH, BH) {
        if ((null == yB ? void 0 : yB.cookie) && (!BH || !kL(Jh(HH)))) try {
          tt._set(HH, "", -1, BH)
        } catch (HH) {
          return
        }
      }
    };
    let zt = null;
    const Ct = {
        _is_supported() {
          if (!kL(zt)) return zt;
          let HH = !0;
          if (VL(JB)) HH = !1;
          else try {
            const BH = "__mplssupport__";
            Ct._set(BH, "xyz"), '"xyz"' !== Ct._get(BH) && (HH = !1), Ct._remove(BH)
          } catch (rH) {
            HH = !1
          }
          return HH || qh.error("localStorage unsupported; falling back to cookie store"), zt = HH, HH
        },
        _error(HH) {
          qh.error("localStorage error: " + HH)
        },
        _get(HH) {
          try {
            return null == JB ? void 0 : JB.localStorage.getItem(HH)
          } catch (HH) {
            Ct._error(HH)
          }
          return null
        },
        _parse(HH) {
          try {
            return JSON.parse(Ct._get(HH)) || {}
          } catch (HH) {}
          return null
        },
        _set(HH, BH) {
          try {
            return null == JB || JB.localStorage.setItem(HH, JSON.stringify(BH)), !0
          } catch (HH) {
            Ct._error(HH)
          }
          return !1
        },
        _remove(HH) {
          try {
            null == JB || JB.localStorage.removeItem(HH)
          } catch (HH) {
            Ct._error(HH)
          }
        }
      },
      Et = [QH, tH, YH, zH, xH, XH, EH, CH, WH],
      Xt = [OH, VH, pH, yH, OB, VB, IH, xB],
      Gt = HH => HH + "_cpm",
      Yt = ["__proto__", "constructor", "prototype"],
      ut = HH => {
        if (!TL(HH)) return {};
        const BH = {};
        return Object.keys(HH).forEach((LH => {
          -1 === Yt.indexOf(LH) && (BH[LH] = HH[LH])
        })), BH
      },
      Qt = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const LH = {};
        return [...Xt, ...BH].forEach((BH => {
          const AH = HH[BH];
          VL(AH) || kL(AH) || "" === AH || (LH[BH] = AH)
        })), LH
      },
      Wt = HH => {
        let BH = 5381,
          LH = 2166136261;
        for (let AH = 0; HH.length > AH; AH++) {
          const rH = HH.charCodeAt(AH);
          BH = 33 * BH ^ rH, LH = Math.imul(LH ^ rH, 16777619)
        }
        return HH.length.toString(36) + "." + (BH >>> 0).toString(36) + "." + (LH >>> 0).toString(36)
      },
      Mt = (HH, BH) => ({
        p: BH,
        f: Wt(JSON.stringify(HH))
      }),
      xt = (HH, BH) => {
        if (!BH) return {
          properties: [],
          isValid: !1
        };
        try {
          const LH = tt._parse(Gt(HH)),
            AH = (null == LH ? void 0 : LH.f) === Wt(BH) && vL(LH.p);
          return {
            properties: AH ? LH.p : [],
            isValid: AH
          }
        } catch (HH) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      vt = (HH, BH) => BH + "|" + (tt._get(Gt(HH)) || ""),
      Pt = {},
      Tt = {
        _is_supported: () => !0,
        _error(HH) {
          qh.error("memoryStorage error: " + HH)
        },
        _get: HH => HH in Pt ? Pt[HH] : null,
        _parse: HH => HH in Pt ? Pt[HH] : null,
        _set: (HH, BH) => (Pt[HH] = BH, !0),
        _remove(HH) {
          delete Pt[HH]
        }
      };
    let Ut = null;
    const Vt = {
      _is_supported() {
        if (!kL(Ut)) return Ut;
        if (Ut = !0, VL(JB)) Ut = !1;
        else try {
          const HH = "__support__";
          Vt._set(HH, "xyz"), '"xyz"' !== Vt._get(HH) && (Ut = !1), Vt._remove(HH)
        } catch (AH) {
          Ut = !1
        }
        return Ut
      },
      _error(HH) {
        qh.error("sessionStorage error: ", HH)
      },
      _get(HH) {
        try {
          return null == JB ? void 0 : JB.sessionStorage.getItem(HH)
        } catch (HH) {
          Vt._error(HH)
        }
        return null
      },
      _parse(HH) {
        try {
          return JSON.parse(Vt._get(HH)) || null
        } catch (HH) {}
        return null
      },
      _set(HH, BH) {
        try {
          return null == JB || JB.sessionStorage.setItem(HH, JSON.stringify(BH)), !0
        } catch (HH) {
          Vt._error(HH)
        }
        return !1
      },
      _remove(HH) {
        try {
          null == JB || JB.sessionStorage.removeItem(HH)
        } catch (HH) {
          Vt._error(HH)
        }
      }
    };
    var Ot = class {
      constructor(HH) {
        this._instance = HH
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
      optInOut(HH) {
        this.WQ._set(this._storageKey, HH ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.WQ._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: HH,
          opt_out_capturing_cookie_prefix: BH,
          consent_persistence_name: LH
        } = this._instance.config;
        return LH || (BH ? BH + HH : "__ph_opt_in_out_" + HH)
      }
      get _storedConsent() {
        const HH = this.WQ._get(this._storageKey);
        return jL(HH) ? 1 : GL(nL, HH) ? 0 : -1
      }
      get WQ() {
        const HH = this._config.opt_out_capturing_persistence_type,
          BH = "localStorage" === HH ? Ct : tt,
          LH = BH._is_supported() ? BH : Tt;
        if (!this._persistentStore || this._persistentStore !== LH) {
          this._persistentStore = LH;
          const BH = "localStorage" === HH ? tt : Ct;
          BH._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(jL(BH._get(this._storageKey))), BH._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == pB ? void 0 : pB.doNotTrack, null == pB ? void 0 : pB.msDoNotTrack, tL.doNotTrack, null == pB ? void 0 : pB.globalPrivacyControl].some((HH => jL(HH)))
      }
    };

    function bt(HH, BH) {
      var LH;
      const AH = null == HH || null === (LH = HH.config) || void 0 === LH ? void 0 : LH.get_current_url;
      if (!PL(AH)) return BH;
      try {
        const HH = AH(BH);
        return OL(HH) && HH ? HH : BH
      } catch (HH) {
        return qh.error("Error in get_current_url, falling back to window.location.href", HH), BH
      }
    }

    function kt(HH) {
      var BH;
      return HH instanceof Element && ("__POSTHOG_TOOLBAR__" === HH.id || !!(null === (BH = HH.closest) || void 0 === BH ? void 0 : BH.call(HH, ".toolbar-global-fade-container")))
    }

    function mt(HH) {
      return !!HH && 1 === HH.nodeType
    }

    function ot(HH, BH) {
      return !!HH && !!HH.tagName && HH.tagName.toLowerCase() === BH.toLowerCase()
    }

    function It(HH) {
      return !!HH && 3 === HH.nodeType
    }

    function ft(HH) {
      return !!HH && 11 === HH.nodeType && mt(HH.host)
    }

    function lt(HH) {
      return HH ? YL(HH).split(/\s+/) : []
    }

    function Kt(HH, BH) {
      const LH = function(HH) {
        var BH;
        const LH = null == JB || null === (BH = JB.location) || void 0 === BH ? void 0 : BH.href;
        return VL(LH) ? void 0 : bt(HH, LH)
      }(BH);
      return !!(LH && HH && HH.some((HH => LH.match(HH))))
    }

    function ct(HH) {
      let BH = "";
      switch (typeof HH.className) {
        case "string":
          BH = HH.className;
          break;
        case "object":
          BH = (HH.className && "baseVal" in HH.className ? HH.className.baseVal : null) || HH.getAttribute("class") || "";
          break;
        default:
          BH = ""
      }
      return lt(BH)
    }

    function et(HH) {
      return mL(HH) ? null : YL(HH).split(/(\s+)/).filter((HH => Yz(HH))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function qt(HH) {
      let BH = "";
      return rz(HH) && !Sz(HH) && HH.childNodes && HH.childNodes.length && Rh(HH.childNodes, (function(HH) {
        var LH;
        It(HH) && HH.textContent && (BH += null !== (LH = et(HH.textContent)) && void 0 !== LH ? LH : "")
      })), YL(BH)
    }

    function gt(HH) {
      var BH;
      return VL(HH.target) ? HH.srcElement || null : (null === (BH = HH.target) || void 0 === BH ? void 0 : BH.shadowRoot) ? HH.composedPath()[0] || null : HH.target || null
    }
    const Nt = ["a", "button", "form", "input", "select", "textarea", "label"];

    function Rt(HH, BH) {
      const LH = HH.matches || HH.matchesSelector || HH.msMatchesSelector || HH.mozMatchesSelector || HH.webkitMatchesSelector || HH.oMatchesSelector;
      try {
        return !!LH && LH.call(HH, BH)
      } catch (HH) {
        return !1
      }
    }

    function jt(HH, BH) {
      if (VL(BH)) return !0;
      for (const LH of HH)
        if (BH.some((HH => Rt(LH, HH)))) return !0;
      return !1
    }

    function nt(HH) {
      const BH = HH.parentNode;
      return !(!BH || !mt(BH)) && BH
    }
    const Ft = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      Dt = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      wt = [...Dt, "+", "-", "\u2212", "\u2013"],
      Zt = wt.length + 10,
      dt = ["button", "a", "input", "select", "textarea", "label"],
      st = ["button", "link", "tab", "menuitem", "option"],
      Jt = (HH, BH) => /[a-z0-9]/i.test(BH) ? GL(wt, BH) ? new RegExp(`\\b${BH}\\b`).test(HH) : HH.includes(BH) : HH === BH,
      it = HH => GL(dt, HH.tagName.toLowerCase()) || GL(st, (HH.getAttribute("role") || "").toLowerCase());

    function pt(HH) {
      let BH = "",
        LH = "";
      const AH = HH => {
        mt(HH) && rz(HH) && !Sz(HH) && (BH += ` ${qt(HH)}`, LH = LH || HH.getAttribute("aria-label") || "", Rh(HH.childNodes, AH))
      };
      AH(HH), BH = YL(BH.replace(/\s+/g, " "));
      const rH = (Yz(BH) ? BH : "").toLowerCase(),
        SH = HH.getAttribute("aria-label") || (rH ? "" : LH);
      return {
        safeText: rH,
        ariaLabel: YL(SH).toLowerCase()
      }
    }
    const yt = [".ph-no-rageclick", ".ph-no-capture"],
      Hz = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Bz(HH, BH) {
      if (!JB || Lz(HH)) return !1;
      let LH, AH, rH;
      var SH, hH;
      if (fL(BH) ? (LH = !!BH && yt, AH = void 0, rH = !1) : (LH = null !== (SH = null == BH ? void 0 : BH.css_selector_ignorelist) && void 0 !== SH ? SH : yt, AH = null == BH ? void 0 : BH.content_ignorelist, rH = null !== (hH = null == BH ? void 0 : BH.ignore_text_selection) && void 0 !== hH && hH), !1 === LH) return !1;
      if (rH && function(HH) {
          return !(!HH || !mt(HH)) && (!!ot(HH, "textarea") || (ot(HH, "input") ? GL(Hz, (HH.getAttribute("type") || "").toLowerCase()) : function(HH) {
            var BH;
            if (HH.isContentEditable) return !0;
            const LH = null === (BH = HH.getAttribute) || void 0 === BH ? void 0 : BH.call(HH, "contenteditable");
            return "true" === LH || "" === LH
          }(HH)))
        }(HH)) return !1;
      const {
        targetElementList: tH
      } = Az(HH, !1);
      return !(AH && function(HH, BH) {
        let LH, {
          safeText: AH,
          ariaLabel: rH
        } = BH;
        if (!0 === HH) LH = Dt;
        else {
          if (!vL(HH)) return !1;
          if (HH.length > Zt) return qh.error(`[PostHog] content_ignorelist array cannot exceed ${Zt} items. Use css_selector_ignorelist for more complex matching.`), !1;
          LH = HH.map((HH => HH.toLowerCase()))
        }
        return LH.some((HH => Jt(AH, HH) || Jt(rH, HH)))
      }(AH, function(HH, BH) {
        for (const LH of BH)
          if (it(LH)) return pt(LH);
        for (const LH of BH) {
          try {
            if ("pointer" !== (null == JB ? void 0 : JB.getComputedStyle(LH).getPropertyValue("cursor"))) break
          } catch (HH) {
            break
          }
          const BH = pt(LH);
          if (BH.safeText || BH.ariaLabel) return BH
        }
        return pt(HH)
      }(HH, tH)) || jt(tH, LH))
    }
    const Lz = HH => !HH || ot(HH, "html") || !mt(HH),
      Az = (HH, BH) => {
        if (!JB || Lz(HH)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let LH = !1;
        const AH = [HH];
        let rH = HH;
        for (; rH.parentNode && !ot(rH, "body");) {
          if (ft(rH.parentNode)) {
            AH.push(rH.parentNode.host), rH = rH.parentNode.host;
            continue
          }
          const SH = nt(rH);
          if (!SH) break;
          if (BH || Nt.indexOf(SH.tagName.toLowerCase()) > -1) LH = !0;
          else try {
            const HH = JB.getComputedStyle(SH);
            HH && "pointer" === HH.getPropertyValue("cursor") && (LH = !0)
          } catch (HH) {}
          AH.push(SH), rH = SH
        }
        return {
          parentIsUsefulElement: LH,
          targetElementList: AH
        }
      };

    function rz(HH) {
      const BH = new Set;
      let LH = 0;
      for (let SH = HH; SH.parentNode && !ot(SH, "body"); SH = SH.parentNode) {
        if (LH++ >= 1e3 || BH.has(SH)) return !1;
        BH.add(SH);
        const HH = ct(SH);
        if (GL(HH, "ph-sensitive") || GL(HH, "ph-no-capture")) return !1
      }
      if (GL(ct(HH), "ph-include")) return !0;
      const AH = HH.type || "";
      if (OL(AH)) switch (AH.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const rH = HH.name || HH.id || "";
      return !OL(rH) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(rH.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Sz(HH) {
      return !!(ot(HH, "input") && !["button", "checkbox", "submit", "reset"].includes(HH.type) || ot(HH, "select") || ot(HH, "textarea") || "true" === HH.getAttribute("contenteditable"))
    }
    const hz = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      tz = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      zz = [16, 15, 14, 13],
      Cz = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Ez = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Xz = /[0-9A-Za-z_]/;

    function Gz(HH) {
      let BH = 0,
        LH = !1;
      for (let AH = HH.length - 1; AH >= 0; AH--) {
        let rH = HH.charCodeAt(AH) - 48;
        LH && (rH *= 2, rH > 9 && (rH -= 9)), BH += rH, LH = !LH
      }
      return BH % 10 == 0
    }

    function Yz(HH) {
      let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (mL(HH)) return !1;
      if (OL(HH)) {
        if (HH = YL(HH), BH ? hz.test((HH || "").replace(/[- ]/g, "")) : function(HH) {
            let BH;
            for (tz.lastIndex = 0; BH = tz.exec(HH);) {
              const HH = BH[2];
              if (!HH) continue;
              const LH = HH.replace(/[- ]/g, "");
              for (let BH = 0; LH.length > BH; BH++)
                for (const HH of zz) {
                  const AH = BH + HH;
                  if (LH.length >= AH) {
                    const HH = LH.slice(BH, AH);
                    if (hz.test(HH) && Gz(HH)) return !0
                  }
                }
            }
            return !1
          }(HH)) return !1;
        if (BH ? Cz.test(HH) : function(HH) {
            let BH;
            for (Ez.lastIndex = 0; BH = Ez.exec(HH);) {
              const HH = BH[1],
                LH = BH[3];
              if (!(HH && LH && Xz.test(HH) && Xz.test(LH))) return !0
            }
            return !1
          }(HH)) return !1
      }
      return !0
    }

    function uz(HH) {
      let BH = qt(HH);
      return BH = `${BH} ${Qz(HH)}`.trim(), Yz(BH) ? BH : ""
    }

    function Qz(HH) {
      let BH = "";
      return HH && HH.childNodes && HH.childNodes.length && Rh(HH.childNodes, (function(HH) {
        var LH;
        if (HH && "span" === (null === (LH = HH.tagName) || void 0 === LH ? void 0 : LH.toLowerCase())) try {
          const LH = qt(HH);
          BH = `${BH} ${LH}`.trim(), HH.childNodes && HH.childNodes.length && (BH = `${BH} ${Qz(HH)}`.trim())
        } catch (HH) {
          qh.error("[AutoCapture]", HH)
        }
      })), BH
    }

    function Wz(HH) {
      return HH.replace(/"|\\"/g, '\\"')
    }

    function Mz(HH) {
      const BH = HH.attr__class;
      if (BH) return vL(BH) ? BH : lt(BH)
    }
    const xz = gh("[Dead Clicks]"),
      vz = () => !0,
      Pz = HH => {
        var BH;
        const LH = !!(null === (BH = HH.instance.persistence) || void 0 === BH ? void 0 : BH.get_property(jH)),
          AH = HH.instance.config.capture_dead_clicks;
        return fL(AH) ? AH : !!TL(AH) || LH
      };
    var Tz = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(HH, BH, LH) {
        this.instance = HH, this.isEnabled = BH, this.onCapture = LH, this.startIfEnabledOrStop()
      }
      onRemoteConfig(HH) {
        if (!HH.ok) return;
        const BH = HH.config;
        "captureDeadClicks" in BH && (this.instance.persistence && this.instance.persistence.register({
          [jH]: BH.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(HH) {
        var BH, LH, AH;
        (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.initDeadClicksAutocapture) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this.instance, "dead-clicks-autocapture", (BH => {
          BH ? xz.error("failed to load script", BH) : HH()
        }))
      }
      _start() {
        var HH;
        if (yB) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (HH = tL.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.initDeadClicksAutocapture)) {
            const HH = TL(this.instance.config.capture_dead_clicks) ? xr({}, this.instance.config.capture_dead_clicks) : {};
            HH.__onCapture = this.onCapture, this.onCapture && (HH.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = tL.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, HH), this._lazyLoadedDeadClicksAutocapture.start(yB), xz.info("starting...")
          }
        } else xz.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, xz.info("stopping..."))
      }
    };
    const Uz = gh("[SegmentIntegration]");

    function Vz(HH, BH) {
      let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const AH = HH.config.segment;
      if (!AH) return BH();
      const {
        analytics: rH,
        filterProperties: SH
      } = (HH => PL(HH.register))(hH = AH) ? {
        analytics: hH
      } : hH;
      var hH;
      ! function(HH, BH, LH, AH) {
        const rH = BH => {
            const rH = () => BH.anonymousId() || Lt();
            HH.config.get_device_id = rH, AH && BH.id() && (HH.register({
              distinct_id: BH.id(),
              $device_id: rH()
            }), HH.persistence.set_property(xB, FB)), LH(AH ? void 0 : BH.anonymousId() || void 0)
          },
          SH = BH.user();
        "then" in SH && PL(SH.then) ? SH.then(rH) : rH(SH)
      }(HH, rH, (LH => {
        rH.register(function(HH, BH) {
          let {
            filterProperties: LH
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || Uz.warn("This browser does not have Promise support, and can not use the segment integration");
          const AH = (AH, rH) => {
            if (!rH) return AH;
            const SH = !!BH && AH.event.anonymousId === BH && !AH.event.userId;
            SH || AH.event.userId || AH.event.anonymousId === HH.get_distinct_id() || (Uz.info("No userId set, resetting PostHog"), HH.reset()), SH || (BH = void 0), AH.event.userId && AH.event.userId !== HH.get_distinct_id() && (Uz.info("UserId set, identifying with PostHog"), HH.identify(AH.event.userId));
            let hH = HH.calculateEventProperties(rH, AH.event.properties);
            if (!mL(LH)) {
              const HH = AH.event.properties || {},
                BH = {};
              for (const LH of Object.keys(hH)) ML.call(HH, LH) || (BH[LH] = hH[LH]);
              const rH = ((HH, BH) => {
                const LH = vL(HH) ? HH : [HH];
                let AH = xr({}, BH);
                for (const rH of LH) try {
                  if (AH = rH(AH), mL(AH)) return null
                } catch (HH) {
                  return Uz.error("Error in Segment filterProperties:", HH), null
                }
                return AH
              })(LH, BH);
              if (mL(rH)) return AH;
              hH = rH
            }
            return AH.event.properties = Object.assign({}, hH, AH.event.properties), AH
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: HH => AH(HH, HH.event.event),
            page: HH => AH(HH, ZB),
            identify: HH => AH(HH, aB),
            screen: HH => AH(HH, "$screen")
          }
        }(HH, LH, {
          filterProperties: SH
        })).then((() => {
          BH()
        }), (HH => {
          Uz.error("Failed to register the Segment integration", HH), BH()
        }))
      }), LH)
    }
    const Oz = "posthog-js";

    function bz(HH) {
      let {
        organization: BH,
        projectId: LH,
        prefix: AH,
        severityAllowList: rH = ["error"],
        sendExceptionsToPostHog: SH = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return hH => {
        var tH, zH, CH, EH, XH;
        if ("*" !== rH && !rH.includes(hH.level) || !HH.__loaded) return hH;
        hH.tags || (hH.tags = {});
        const GH = HH.requestRouter.endpointFor("ui", `/project/${HH.config.token}/person/${HH.get_distinct_id()}`);
        hH.tags["PostHog Person URL"] = GH, HH.sessionRecordingStarted() && (hH.tags["PostHog Recording URL"] = HH.get_session_replay_url({
          withTimestamp: !0
        }));
        const YH = (null === (tH = hH.exception) || void 0 === tH ? void 0 : tH.values) || [],
          uH = YH.map((HH => xr(xr({}, HH), {}, {
            stacktrace: HH.stacktrace ? xr(xr({}, HH.stacktrace), {}, {
              type: "raw",
              frames: (HH.stacktrace.frames || []).map((HH => xr(xr({}, HH), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          QH = {
            $exception_message: (null === (zH = YH[0]) || void 0 === zH ? void 0 : zH.value) || hH.message,
            $exception_type: null === (CH = YH[0]) || void 0 === CH ? void 0 : CH.type,
            $exception_level: hH.level,
            $exception_list: uH,
            $sentry_event_id: hH.event_id,
            $sentry_exception: hH.exception,
            $sentry_exception_message: (null === (EH = YH[0]) || void 0 === EH ? void 0 : EH.value) || hH.message,
            $sentry_exception_type: null === (XH = YH[0]) || void 0 === XH ? void 0 : XH.type,
            $sentry_tags: hH.tags
          };
        var WH;
        return BH && LH && (QH.$sentry_url = (AH || "https://sentry.io/organizations/") + BH + "/issues/?project=" + LH + "&query=" + hH.event_id), SH && (null === (WH = HH.exceptions) || void 0 === WH || WH.sendExceptionEvent(QH)), hH
      }
    }
    var kz = class {
        constructor(HH, BH, LH, AH, rH, SH) {
          this.name = Oz, this.setupOnce = function(hH) {
            hH(bz(HH, {
              organization: BH,
              projectId: LH,
              prefix: AH,
              severityAllowList: rH,
              sendExceptionsToPostHog: null == SH || SH
            }))
          }
        }
      },
      mz = class {
        constructor(HH) {
          this._onSessionIdChange = (HH, BH, LH) => {
            LH && (LH.noSessionId || LH.activityTimeout || LH.sessionPastMaximumLength || LH.crossTabAdoption) && (qh.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: HH,
              changeReason: LH
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = HH, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var HH;
          this._unsubscribeSessionId = null === (HH = this._instance.sessionManager) || void 0 === HH ? void 0 : HH.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var HH;
          null === (HH = this._unsubscribeSessionId) || void 0 === HH || HH.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(HH, BH) {
          var LH;
          const AH = this._previousPageViewProperties(HH, BH);
          return this._currentPageview = {
            pathname: null !== (LH = null == JB ? void 0 : JB.location.pathname) && void 0 !== LH ? LH : "",
            pageViewId: BH,
            timestamp: HH
          }, this._instance.scrollManager.resetContext(), AH
        }
        doPageLeave(HH) {
          var BH;
          return this._previousPageViewProperties(HH, null === (BH = this._currentPageview) || void 0 === BH ? void 0 : BH.pageViewId)
        }
        doEvent() {
          var HH;
          return {
            $pageview_id: null === (HH = this._currentPageview) || void 0 === HH ? void 0 : HH.pageViewId
          }
        }
        _previousPageViewProperties(HH, BH) {
          const LH = this._currentPageview;
          if (!LH) return {
            $pageview_id: BH
          };
          let AH = {
            $pageview_id: BH,
            $prev_pageview_id: LH.pageViewId
          };
          const rH = this._instance.scrollManager.getContext();
          if (rH && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: HH,
              lastScrollY: BH,
              maxScrollY: LH,
              maxContentHeight: SH,
              lastContentY: hH,
              maxContentY: tH
            } = rH;
            if (!(VL(HH) || VL(BH) || VL(LH) || VL(SH) || VL(hH) || VL(tH))) {
              HH = Math.ceil(HH), BH = Math.ceil(BH), LH = Math.ceil(LH), SH = Math.ceil(SH), hH = Math.ceil(hH), tH = Math.ceil(tH);
              const rH = HH > 1 ? aL(BH / HH, 0, 1, qh) : 1,
                zH = HH > 1 ? aL(LH / HH, 0, 1, qh) : 1,
                CH = SH > 1 ? aL(hH / SH, 0, 1, qh) : 1,
                EH = SH > 1 ? aL(tH / SH, 0, 1, qh) : 1;
              AH = jh(AH, {
                $prev_pageview_last_scroll: BH,
                $prev_pageview_last_scroll_percentage: rH,
                $prev_pageview_max_scroll: LH,
                $prev_pageview_max_scroll_percentage: zH,
                $prev_pageview_last_content: hH,
                $prev_pageview_last_content_percentage: CH,
                $prev_pageview_max_content: tH,
                $prev_pageview_max_content_percentage: EH
              })
            }
          }
          return LH.pathname && (AH.$prev_pageview_pathname = LH.pathname), LH.timestamp && (AH.$prev_pageview_duration = (HH.getTime() - LH.timestamp.getTime()) / 1e3), AH
        }
      };
    const oz = ["flags", "surveys"],
      Iz = {
        [UH]: {
          exposure: "hidden"
        },
        [kH]: {
          exposure: "hidden"
        },
        [mH]: {
          exposure: "hidden"
        },
        [KH]: {
          exposure: "hidden"
        },
        [IH]: {
          exposure: "hidden"
        },
        [lH]: {
          exposure: "hidden"
        },
        [cH]: {
          exposure: "event"
        },
        [eH]: {
          exposure: "hidden"
        },
        [FH]: {
          exposure: "hidden"
        },
        [qH]: {
          exposure: "event"
        },
        [gH]: {
          exposure: "hidden"
        },
        [NH]: {
          exposure: "event"
        },
        [RH]: {
          exposure: "event"
        },
        [jH]: {
          exposure: "event"
        },
        [nH]: {
          exposure: "hidden"
        },
        [DH]: {
          exposure: "event"
        },
        [wH]: {
          exposure: "hidden"
        },
        [ZH]: {
          exposure: "hidden"
        },
        [pH]: {
          exposure: "hidden"
        },
        [yH]: {
          exposure: "event"
        },
        [dH]: {
          exposure: "event",
          shouldSkipFromEventProperties: HH => kL(HH)
        },
        [HB]: {
          exposure: "event"
        },
        [BB]: {
          exposure: "event"
        },
        [LB]: {
          exposure: "event"
        },
        [AB]: {
          exposure: "event"
        },
        [rB]: {
          exposure: "hidden"
        },
        [YH]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [tH]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [hH]: {
          exposure: "hidden"
        },
        [zH]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [xH]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [XH]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [GH]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [vH]: {
          exposure: "hidden"
        },
        [PH]: {
          exposure: "hidden"
        },
        [QH]: {
          exposure: "hidden"
        },
        [uH]: {
          exposure: "hidden"
        },
        [hB]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [tB]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [zB]: {
          exposure: "event"
        },
        [CB]: {
          exposure: "hidden"
        },
        [EB]: {
          exposure: "hidden"
        },
        [XB]: {
          exposure: "hidden"
        },
        [GB]: {
          exposure: "hidden"
        },
        [YB]: {
          exposure: "hidden"
        },
        [uB]: {
          exposure: "event"
        },
        [QB]: {
          exposure: "event"
        },
        [WB]: {
          exposure: "event"
        },
        [MB]: {
          exposure: "event"
        },
        [WH]: {
          exposure: "hidden"
        },
        [MH]: {
          exposure: "hidden"
        },
        [SB]: {
          exposure: "event"
        },
        [CH]: {
          exposure: "hidden"
        },
        [EH]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [xB]: {
          exposure: "hidden"
        },
        [vB]: {
          exposure: "hidden"
        },
        [PB]: {
          exposure: "hidden"
        },
        [TB]: {
          exposure: "hidden"
        },
        [UB]: {
          exposure: "hidden"
        },
        [VB]: {
          exposure: "hidden"
        },
        [OB]: {
          exposure: "hidden"
        },
        [aH]: {
          exposure: "event"
        },
        [sH]: {
          exposure: "event"
        },
        [JH]: {
          exposure: "event"
        },
        [iH]: {
          exposure: "event"
        },
        [mB]: {
          exposure: "event"
        },
        [oB]: {
          exposure: "event"
        },
        [IB]: {
          exposure: "hidden"
        },
        [fB]: {
          exposure: "hidden"
        },
        [lB]: {
          exposure: "hidden"
        },
        [KB]: {
          exposure: "hidden"
        },
        [cB]: {
          exposure: "hidden"
        },
        [eB]: {
          exposure: "hidden"
        },
        [qB]: {
          exposure: "hidden"
        },
        [gB]: {
          exposure: "hidden"
        },
        [NB]: {
          exposure: "hidden"
        },
        [RB]: {
          exposure: "event"
        }
      },
      fz = [
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
      lz = HH => {
        const BH = Iz[HH];
        if (BH) return BH;
        for (const [LH, AH] of fz)
          if (0 === HH.indexOf(LH)) return AH
      };

    function Kz() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (AH) {
        return
      }
    }
    const cz = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (AH) {
          return !1
        }
      },
      ez = (HH, BH) => HH >= BH && cz(),
      qz = (HH, BH, LH, AH) => {
        if (0 === HH) {
          if (cz()) {
            const HH = BH + 1;
            return HH === LH && AH(), HH
          }
          return BH
        }
        return 0
      },
      gz = (HH, BH) => {
        try {
          let LH;
          return JSON.stringify(HH, ((HH, BH) => {
            var AH;
            return qL(BH) ? (null !== (AH = LH) && void 0 !== AH || (LH = new WeakMap), LH.has(BH) || LH.set(BH, wh(BH)), LH.get(BH)) : "bigint" == typeof BH ? BH.toString() : BH
          }), BH)
        } catch (BH) {
          return QL(HH)
        }
      },
      Nz = HH => {
        const BH = null == yB ? void 0 : yB.createElement("a");
        return VL(BH) ? null : (BH.href = HH, BH)
      },
      Rz = function(HH, BH) {
        const LH = ((HH.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let AH;
        for (let rH = 0; LH.length > rH; rH++) {
          const HH = LH[rH].split("=");
          if (HH[0] === BH) {
            AH = HH;
            break
          }
        }
        if (!vL(AH) || 2 > AH.length) return "";
        {
          let HH = AH[1];
          try {
            HH = decodeURIComponent(HH)
          } catch (BH) {
            qh.error("Skipping decoding for malformed query param: " + HH)
          }
          return HH.replace(/\+/g, " ")
        }
      },
      jz = function(HH, BH, LH) {
        if (!HH || !BH || !BH.length) return HH;
        const AH = HH.split("#"),
          rH = AH[1],
          SH = (AH[0] || "").split("?"),
          hH = SH[1],
          tH = SH[0],
          zH = (hH || "").split("&"),
          CH = [];
        for (let XH = 0; zH.length > XH; XH++) {
          const HH = zH[XH].split("=");
          vL(HH) && (BH.includes(HH[0]) ? CH.push(HH[0] + "=" + LH) : CH.push(zH[XH]))
        }
        let EH = tH;
        return null != hH && (EH += "?" + CH.join("&")), null != rH && (EH += "#" + rH), EH
      },
      nz = function(HH, BH) {
        const LH = HH.match(new RegExp(BH + "=([^&]*)"));
        return LH ? LH[1] : null
      },
      Fz = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      Dz = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...Fz],
      wz = "<masked>",
      Zz = ["li_fat_id"];

    function dz(HH, BH, LH) {
      if (!yB) return {};
      const AH = BH ? [...Fz, ...LH || []] : [],
        rH = az(jz(yB.URL, AH, wz), HH),
        SH = function() {
          const HH = {};
          return Rh(Zz, (function(BH) {
            const LH = Jh(BH);
            HH[BH] = LH || null
          })), HH
        }();
      return jh(SH, rH)
    }

    function az(HH, BH) {
      const LH = Dz.concat(BH || []),
        AH = {};
      return Rh(LH, (function(BH) {
        const LH = Rz(HH, BH);
        AH[BH] = LH || null
      })), AH
    }

    function sz(HH) {
      const BH = function(HH) {
          return HH ? 0 === HH.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === HH.search("https?://(.*)bing.com") ? "bing" : 0 === HH.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === HH.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(HH),
        LH = "yahoo" != BH ? "q" : "p",
        AH = {};
      if (!kL(BH)) {
        AH.$search_engine = BH;
        const HH = yB ? Rz(yB.referrer, LH) : "";
        HH.length && (AH.ph_keyword = HH)
      }
      return AH
    }

    function Jz() {
      return navigator.language || navigator.userLanguage
    }

    function iz() {
      const HH = Jz();
      return "string" == typeof HH ? HH.split("-")[0] : void 0
    }
    const pz = "$direct";

    function yz() {
      return (null == yB ? void 0 : yB.referrer) || pz
    }

    function HC(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const AH = HH ? [...Fz, ...BH || []] : [],
        rH = LH ? Er(null == HL ? void 0 : HL.href) : null == HL ? void 0 : HL.href,
        SH = null == rH ? void 0 : rH.substring(0, 1e3);
      return {
        r: yz().substring(0, 1e3),
        u: SH ? jz(SH, AH, wz) : void 0
      }
    }

    function BC(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var LH;
      const {
        r: AH,
        u: rH
      } = HH, SH = BH ? Er(rH) : rH, hH = {
        $referrer: AH,
        $referring_domain: null == AH ? void 0 : AH == pz ? pz : null === (LH = Nz(AH)) || void 0 === LH ? void 0 : LH.host
      };
      if (SH) {
        hH.$current_url = SH;
        const HH = Nz(SH);
        hH.$host = null == HH ? void 0 : HH.host, hH.$pathname = null == HH ? void 0 : HH.pathname;
        const BH = az(SH);
        jh(hH, BH)
      }
      if (AH) {
        const HH = sz(AH);
        jh(hH, HH)
      }
      return hH
    }

    function LC() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (AH) {
        return
      }
    }
    const AC = {
        flags: EH,
        surveys: tB
      },
      rC = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      SC = HH => `${HH}_cookie_identity_change_pending`,
      hC = HH => {
        let BH = "",
          LH = 0;
        for (const AH of HH) {
          const HH = encodeURIComponent(JSON.stringify(AH).slice(1, -1)).length;
          if (LH + HH > 1e3) break;
          BH += AH, LH += HH
        }
        return BH
      },
      tC = "main",
      zC = [YH, tH, zH, xH, XH, EH, GH, QH],
      CC = HH => -1 !== zC.indexOf(HH),
      EC = [IH, lH],
      XC = HH => -1 !== EC.indexOf(HH),
      GC = (HH, BH) => {
        try {
          return JSON.stringify(HH) === JSON.stringify(BH)
        } catch (SH) {
          return HH === BH
        }
      },
      YC = HH => {
        if (!HH) return {};
        const BH = JSON.parse(HH);
        return TL(BH) ? BH : {}
      },
      uC = (HH, BH) => {
        Rh(HH, ((LH, AH) => {
          const rH = lz(AH);
          rH && "event" !== rH.exposure || {}.hasOwnProperty.call(BH, AH) || delete HH[AH]
        }))
      };
    var QC = class {
      constructor(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !HH.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = HH, this._ownsSplitStorage = LH, this.props = {}, this._campaign_params_url = void 0, this._name = (HH => {
            let BH = "";
            return HH.token && (BH = HH.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), HH.persistence_name ? "ph_" + HH.persistence_name : "ph_" + BH + "_posthog"
          })(HH), this._disabled = HH.disable_persistence || !!BH, this.WQ = this._buildStorage(HH), this._splitStorage = this._resolveSplitStorage(HH), this.load(AH), this._markLoadedCrossTabFeatureFlagChangesPending(), HH.debug && qh.info("Persistence loaded", HH.persistence, xr({}, this.props)), this.update_config(HH, HH, BH), this.save(), JB) {
          const HH = () => this.flush();
          ah(JB, "beforeunload", HH, {
            capture: !1
          }), ah(JB, "pagehide", HH, {
            capture: !1
          }), this._onStorage = HH => {
            if (this._splitStorageEligible && (!HH.storageArea || HH.storageArea === (null == JB ? void 0 : JB.localStorage)) && HH.key)
              if (HH.key !== this._name) {
                if (this._splitStorage) {
                  const BH = oz.find((BH => HH.key === this._groupEntryName(BH)));
                  BH && this._syncCrossTabFeatureFlagProperties(HH.key, BH)
                }
              } else this._syncCrossTabFeatureFlagProperties(HH.key, tC)
          }, ah(JB, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(HH) {
        Object.entries(HH).forEach((HH => {
          let [BH, LH] = HH;
          const AH = this._pendingCrossTabFeatureFlagChanges.get(BH);
          if (!CC(BH) || !0 === AH) return;
          if (!0 === LH) return void this._setCrossTabFeatureFlagChangesPending(BH, !0);
          const rH = new Set(AH || []);
          LH.forEach((HH => rH.add(HH))), rH.size && this._setCrossTabFeatureFlagChangesPending(BH, rH)
        }))
      }
      onCrossTabFeatureFlagChange(HH) {
        return this._crossTabFeatureFlagHandlers.add(HH), () => this._crossTabFeatureFlagHandlers.delete(HH)
      }
      destroy() {
        this._onStorage && JB && (JB.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(HH, BH) {
        let LH, AH, rH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (AH = Ct._get(HH), kL(AH)) {
            const HH = this._slotWriteState(BH);
            return HH.storageValue = null, BH !== tC && (HH.persisted = !1), !1
          }
          LH = YC(AH)
        } catch (HH) {
          return !1
        }
        const SH = BH === tC ? LH : Ct._parse(this._name);
        if (SH && this._hasCrossTabFeatureFlagIdentityMismatch(SH)) return !1;
        const hH = this._mergeCrossTabFeatureFlagProperties(LH, BH, rH);
        return BH === tC && this._splitStorage && !GC(this._partitionProps().main, LH) || this._rememberCrossTabStorageFingerprint(LH, BH, !0, AH), hH
      }
      _hasCrossTabFeatureFlagIdentityMismatch(HH) {
        const BH = this.props[VH],
          LH = HH[VH];
        return !VL(BH) && !VL(LH) && BH !== LH
      }
      _rememberCrossTabStorageFingerprint(HH, BH, LH, AH) {
        const rH = this._slotWriteState(BH);
        rH.storageValue = AH, BH !== tC && (rH.persisted = LH);
        try {
          rH.fingerprint = this._entryFingerprint(HH, BH)
        } catch (HH) {
          rH.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(HH, BH, LH) {
        let AH = !1;
        return zC.forEach((LH => {
          var rH;
          const SH = null === (rH = lz(LH)) || void 0 === rH ? void 0 : rH.storageGroup;
          if (BH === tC && this._splitStorage && SH || BH !== tC && SH !== BH) return;
          const hH = LH in HH,
            tH = this._mergePendingCrossTabFeatureFlagChanges(LH, hH ? HH[LH] : void 0),
            zH = this._pendingCrossTabFeatureFlagChanges.has(LH) ? LH in this.props : hH;
          zH === LH in this.props && GC(tH, this.props[LH]) || (zH ? this._setProp(LH, tH, !1) : this._deleteProp(LH, !1), AH = !0)
        })), AH && LH && this._crossTabFeatureFlagHandlers.forEach((HH => HH())), AH
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const HH = Ct._get(this._name),
            BH = this._slotWriteState(tC);
          let LH, AH = !1,
            rH = !1;
          if (HH !== BH.storageValue)
            if (kL(HH)) BH.storageValue = null;
            else {
              if (LH = YC(HH), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(LH), this._crossTabFeatureFlagIdentityMismatch) return !1;
              rH = this._mergeCrossTabFeatureFlagProperties(LH, tC, !1), !this._splitStorage || GC(this._partitionProps().main, LH) ? this._rememberCrossTabStorageFingerprint(LH, tC, !0, HH) : BH.storageValue = HH, AH = !0
            } return this._splitStorage && oz.forEach((HH => {
            const BH = Ct._get(this._groupEntryName(HH)),
              SH = this._slotWriteState(HH),
              hH = LH || {},
              tH = AH && zC.some((BH => {
                var LH;
                return (null === (LH = lz(BH)) || void 0 === LH ? void 0 : LH.storageGroup) === HH && BH in hH
              }));
            if (BH === SH.storageValue && !tH) return;
            if (kL(BH)) return SH.storageValue = null, SH.persisted = !1, void(tH && (rH = this._mergeCrossTabFeatureFlagProperties(hH, HH, !1) || rH));
            const zH = YC(BH);
            rH = this._mergeCrossTabFeatureFlagProperties(zH, HH, !1) || rH, this._rememberCrossTabStorageFingerprint(zH, HH, !0, BH)
          })), rH
        } catch (AH) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(HH, BH) {
        this._pendingCrossTabFeatureFlagChanges.set(HH, BH);
        const LH = lz(HH);
        (null == LH ? void 0 : LH.volatile) || (this._slotWriteState((this._splitStorage ? null == LH ? void 0 : LH.storageGroup : void 0) || tC).fingerprint = void 0, this._markGroupDirty(HH))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        zC.forEach((HH => this._pendingCrossTabFeatureFlagChanges.set(HH, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const HH = Ct._get(this._name),
            BH = YC(HH);
          this._slotWriteState(tC).storageValue = HH, zC.forEach((HH => {
            var LH;
            const AH = this._splitStorage ? null === (LH = lz(HH)) || void 0 === LH ? void 0 : LH.storageGroup : void 0,
              rH = AH ? Ct._get(this._groupEntryName(AH)) : null;
            if (AH) {
              const HH = this._slotWriteState(AH);
              HH.storageValue = rH, HH.persisted = !kL(rH)
            }
            const SH = AH && !kL(rH) ? YC(rH) : BH;
            HH in this.props ? this._markPendingCrossTabFeatureFlagChanges(HH, SH[HH], this.props[HH]) : HH in SH && this._setCrossTabFeatureFlagChangesPending(HH, !0)
          }))
        } catch (AH) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(HH, BH) {
        const LH = this._pendingCrossTabFeatureFlagChanges.get(HH);
        if (!LH) return BH;
        if (!0 === LH) return this.props[HH];
        if ("$active_feature_flags" === HH) {
          const AH = new Set(vL(BH) ? BH : []),
            rH = new Set(vL(this.props[HH]) ? this.props[HH] : []);
          return LH.forEach((HH => rH.has(HH) ? AH.add(HH) : AH.delete(HH))), Array.from(AH)
        }
        const AH = TL(BH) ? xr({}, BH) : {},
          rH = TL(this.props[HH]) ? this.props[HH] : {};
        return LH.forEach((HH => {
          HH in rH ? AH[HH] = rH[HH] : delete AH[HH]
        })), AH
      }
      _markPendingCrossTabFeatureFlagChanges(HH, BH, LH) {
        if (!CC(HH)) return;
        const AH = this._pendingCrossTabFeatureFlagChanges.get(HH);
        if (!0 === AH) return;
        let rH = BH;
        if (this._splitStorageEligible) try {
          var SH;
          const BH = this._splitStorage ? null === (SH = lz(HH)) || void 0 === SH ? void 0 : SH.storageGroup : void 0,
            LH = BH ? this._groupEntryName(BH) : this._name;
          rH = YC(Ct._get(LH))[HH]
        } catch (HH) {}
        const hH = new Set(AH || []);
        if ("$active_feature_flags" === HH) {
          if (!VL(BH) && !vL(BH) || !VL(rH) && !vL(rH) || !vL(LH)) return void this._setCrossTabFeatureFlagChangesPending(HH, !0);
          const AH = new Set(BH || []),
            SH = new Set(rH || []),
            tH = new Set(LH);
          new Set([...AH, ...tH]).forEach((HH => {
            AH.has(HH) !== tH.has(HH) && hH.add(HH)
          })), hH.forEach((HH => {
            SH.has(HH) === tH.has(HH) && hH.delete(HH)
          }))
        } else {
          if (!TL(LH)) return void(GC(rH, LH) ? this._pendingCrossTabFeatureFlagChanges.delete(HH) : this._setCrossTabFeatureFlagChangesPending(HH, !0));
          {
            if (!VL(BH) && !TL(BH) || VL(BH) && UL(LH) && VL(rH)) return void this._setCrossTabFeatureFlagChangesPending(HH, !0);
            const AH = TL(BH) ? BH : {},
              SH = TL(rH) ? rH : {};
            new Set([...Object.keys(AH), ...Object.keys(LH)]).forEach((HH => {
              HH in AH == HH in LH && GC(AH[HH], LH[HH]) || hH.add(HH)
            })), hH.forEach((HH => {
              HH in SH == HH in LH && GC(SH[HH], LH[HH]) && hH.delete(HH)
            }))
          }
        }
        hH.size ? this._setCrossTabFeatureFlagChangesPending(HH, hH) : this._pendingCrossTabFeatureFlagChanges.delete(HH)
      }
      _saveDebounceMs() {
        var HH;
        const BH = null === (HH = this._config) || void 0 === HH ? void 0 : HH.persistence_save_debounce_ms;
        return oL(BH) && BH > 0 ? BH : 0
      }
      _rememberCurrentCookieProperties(HH) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (HH) try {
            const BH = Qt(HH, this._config.cookie_persisted_properties || []),
              LH = Mt(BH, this._config.cookie_persisted_properties || []),
              AH = JSON.stringify(BH) + "|" + JSON.stringify(LH),
              rH = tt._get(this._name) || void 0;
            rH && vt(this._name, rH) === AH && (this._lastSeenCookiePropertiesFingerprint = AH, this._lastSeenMainCookieValue = rH)
          } catch (HH) {} else try {
            const HH = tt._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = HH ? vt(this._name, HH) : void 0, this._lastSeenMainCookieValue = HH
          } catch (HH) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(HH) {
        let BH, LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !LH || this._cookieSyncSuppressed || !HH.cookieWinsOnConflict || "localstorage+cookie" !== HH.persistence.toLowerCase()) return !1;
        try {
          BH = tt._get(this._name) || void 0
        } catch (HH) {}
        if (!BH || BH === this._lastSeenMainCookieValue) return !1;
        const AH = vt(this._name, BH);
        let rH;
        try {
          rH = ut(JSON.parse(BH))
        } catch (HH) {
          return !1
        }
        if ((tt._get(this._name) || void 0) !== BH) return !1;
        this._lastSeenCookiePropertiesFingerprint = AH, this._lastSeenMainCookieValue = BH;
        const SH = xt(this._name, BH),
          hH = [...Xt, ...SH.properties],
          GH = {};
        if (Object.keys(rH).forEach((HH => {
            const BH = rH[HH];
            (VL(BH) || kL(BH) || "" === BH || "$user_state" === HH && "anonymous" !== BH && "identified" !== BH) && (GH[HH] = !0, delete rH[HH])
          })), UL(rH)) return !1;
        const MH = "distinct_id" in rH || "anonymous" === rH.$user_state || "identified" === rH.$user_state,
          vH = this.props,
          PH = vH[VH],
          TH = vH[xB],
          UH = jh({}, vH);
        [...Xt, ...HH.cookie_persisted_properties || []].forEach((HH => {
          if (-1 !== hH.indexOf(HH) && !(HH in rH) && !GH[HH] && (MH || "distinct_id" !== HH && "$user_state" !== HH)) {
            const BH = UH[HH];
            (SH.isValid || -1 === Xt.indexOf(HH) || !1 !== BH && 0 !== BH) && delete UH[HH]
          }
        })), this.props = jh(UH, rH), zC.forEach((HH => {
          const BH = HH in this.props;
          HH in vH === BH && GC(vH[HH], this.props[HH]) || (BH ? this._markPendingCrossTabFeatureFlagChanges(HH, vH[HH], this.props[HH]) : this._setCrossTabFeatureFlagChangesPending(HH, !0))
        })), !MH || "$user_state" in rH || "$user_state" in this.props || this._setProp(xB, nB);
        const OH = this.props[VH],
          bH = this.props[xB];
        return !MH || OH === PH && bH === TH || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, Vt._set(SC(this._name), !0), this._deleteProp(QH), this._deleteProp(tH), this._deleteProp(YH), this._deleteProp(zH), this._deleteProp(xH), this._deleteProp(XH), this._deleteProp(EH), this._deleteProp(CH), this._deleteProp(WH), "anonymous" !== bH || "identified" !== TH && "anonymous" !== rH.$user_state && (VL(PH) || OH === PH) || (uC(this.props, rH), this._deleteProp(uH)), "identified" === bH ? this.props.$user_id = OH : delete this.props.$user_id, this._deleteProp(kH)), !0
      }
      consumeCookieIdentityChange() {
        const HH = SC(this._name),
          BH = this._cookieIdentityChangePending || !!Vt._get(HH);
        return this._cookieIdentityChangePending = !1, BH && Vt._remove(HH), BH
      }
      _beginCookieSyncSuppression() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !HH || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[tC], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          HH ? this._publishSuppressedCookieSnapshot() : VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(HH) {
        -1 === rC.indexOf(HH.persistence.toLowerCase()) && (qh.critical("Unknown persistence type " + HH.persistence + "; falling back to localStorage+cookie"), HH.persistence = "localStorage+cookie");
        const BH = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const AH = [...Xt, ...HH];
          return xr(xr({}, Ct), {}, {
            _parse(HH) {
              try {
                let SH, hH = {};
                try {
                  SH = tt._get(HH) || void 0, hH = SH ? ut(JSON.parse(SH)) : {}
                } catch (HH) {}
                const tH = JSON.parse(Ct._get(HH) || "{}");
                let zH;
                if (BH) {
                  const BH = xt(HH, SH),
                    LH = [...Xt, ...BH.properties],
                    CH = {};
                  Object.keys(hH).forEach((HH => {
                    const BH = hH[HH];
                    kL(BH) || "" === BH || "$user_state" === HH && "anonymous" !== BH && "identified" !== BH || (CH[HH] = BH)
                  }));
                  const EH = "distinct_id" in CH || "anonymous" === CH.$user_state || "identified" === CH.$user_state;
                  if (Object.keys(CH).length > 0) {
                    var rH;
                    const HH = tH[VH],
                      SH = null !== (rH = tH.$user_state) && void 0 !== rH ? rH : nB;
                    AH.forEach((HH => {
                      if (-1 !== LH.indexOf(HH) && !(HH in hH) && (EH || "distinct_id" !== HH && "$user_state" !== HH)) {
                        const LH = tH[HH];
                        (BH.isValid || -1 === Xt.indexOf(HH) || !1 !== LH && 0 !== LH) && delete tH[HH]
                      }
                    })), !EH || "$user_state" in hH || "$user_state" in tH || (tH[xB] = nB), !EH || ("distinct_id" in CH ? CH[VH] : tH[VH]) === HH && ("$user_state" in CH ? CH[xB] : tH[xB]) === SH || (Et.forEach((HH => delete tH[HH])), "identified" === CH.$user_state && "distinct_id" in CH ? tH.$user_id = CH[VH] : delete tH.$user_id, "identified" !== CH.$user_state && (delete tH[SB], delete tH[uH]), delete tH.__alias)
                  }
                  zH = jh(tH, CH)
                } else zH = jh(hH, tH);
                return LH() || Ct._set(HH, zH), zH
              } catch (HH) {}
              return null
            },
            _set(LH, AH, rH, SH, hH, tH) {
              const zH = Ct._set(LH, AH, void 0, void 0, tH);
              try {
                const CH = Qt(AH, HH);
                if (Object.keys(CH).length) {
                  if (BH) {
                    const BH = Gt(LH),
                      EH = Mt(CH, HH);
                    if (tt._set(BH, EH, rH, SH, hH, tH), tt._get(BH) !== JSON.stringify(EH)) {
                      tt._remove(BH, SH);
                      const HH = Qt(AH);
                      return tt._set(LH, HH, rH, SH, hH, tH), zH
                    }
                  }
                  tt._set(LH, CH, rH, SH, hH, tH)
                }
              } catch (HH) {
                Ct._error(HH)
              }
              return zH
            },
            _remove(HH, BH) {
              try {
                null == JB || JB.localStorage.removeItem(HH), tt._remove(HH, BH), tt._remove(Gt(HH), BH)
              } catch (HH) {
                Ct._error(HH)
              }
            }
          })
        }(HH.cookie_persisted_properties || [], HH.cookieWinsOnConflict, (() => !!this._disabled));
        let LH, AH = !1,
          rH = !1;
        const SH = HH.persistence.toLowerCase();
        return "localstorage" === SH && Ct._is_supported() ? (LH = Ct, rH = !0) : "localstorage+cookie" === SH && BH._is_supported() ? (LH = BH, rH = !0, AH = !0) : "sessionstorage" === SH && Vt._is_supported() ? LH = Vt : "memory" === SH ? LH = Tt : "cookie" === SH && tt._is_supported() ? (LH = tt, AH = !0) : BH._is_supported() ? (LH = BH, rH = !0, AH = !0) : tt._is_supported() ? (LH = tt, AH = !0) : LH = Tt, this._splitStorageEligible = rH, this._storesIdentityInCookie = AH, LH
      }
      _groupEntryName(HH) {
        return `${this._name}__${HH}`
      }
      _resolveSplitStorage(HH) {
        return this._splitStorageEligible && !!HH.split_storage
      }
      properties() {
        const HH = {};
        return Rh(this.props, ((BH, LH) => {
          const AH = lz(LH);
          if (!AH || "event" === AH.exposure) {
            var rH;
            if (null == AH || null === (rH = AH.shouldSkipFromEventProperties) || void 0 === rH ? void 0 : rH.call(AH, BH)) return;
            HH[LH] = BH
          }
        })), HH
      }
      load() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !HH) return;
        const BH = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          LH = BH ? Ct._parse(this._name) : null;
        let AH = {};
        if (BH) try {
          AH = ut(tt._parse(this._name)), Rh(AH, ((HH, BH) => {
            (VL(HH) || kL(HH) || "" === HH) && delete AH[BH]
          }))
        } catch (HH) {}
        const rH = this.WQ._parse(this._name);
        if (rH && (this.props = jh({}, rH)), this._splitStorage && this._loadGroupEntries(), BH && rH) {
          var SH, hH;
          const HH = null == LH ? void 0 : LH[VH],
            BH = null !== (SH = null == LH ? void 0 : LH.$user_state) && void 0 !== SH ? SH : nB,
            tH = rH[VH],
            zH = null !== (hH = rH.$user_state) && void 0 !== hH ? hH : nB;
          if (tH !== HH || zH !== BH) {
            this._cookieIdentityChangePending = !0, this._disabled || Vt._set(SC(this._name), !0);
            const LH = jh({}, this.props);
            Et.forEach((HH => delete LH[HH])), "anonymous" !== zH || "identified" !== BH && "anonymous" !== AH.$user_state && (VL(HH) || tH === HH) || (uC(LH, AH), delete LH[uH]), this.props = LH;
            const rH = new Set;
            Et.forEach((HH => {
              var BH;
              const LH = null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup;
              LH && rH.add(LH)
            })), rH.forEach((HH => {
              if (this._disabled) return;
              const BH = {};
              Rh(this.props, ((LH, AH) => {
                var rH;
                (null === (rH = lz(AH)) || void 0 === rH ? void 0 : rH.storageGroup) === HH && (BH[AH] = LH)
              })), UL(BH) ? (Ct._remove(this._groupEntryName(HH)), this._slotState[HH] = {}) : Ct._set(this._groupEntryName(HH), BH) && (this._slotState[HH] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(BH, HH)
              })
            }))
          }
        }
        Vt._get(SC(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const HH of oz) {
          const BH = Ct._parse(this._groupEntryName(HH));
          if (BH && !UL(BH)) {
            const LH = this._slotWriteState(HH);
            LH.persisted = !0, this._mainCarriesGroupKey(HH) || (LH.fingerprint = this._entryFingerprint(BH, HH)), this._groupEntryIsStale(HH, BH) || jh(this.props, BH)
          }
        }
      }
      _mainCarriesGroupKey(HH) {
        return Object.keys(this.props).some((BH => {
          var LH;
          return (null === (LH = lz(BH)) || void 0 === LH ? void 0 : LH.storageGroup) === HH
        }))
      }
      _groupEntryIsStale(HH, BH) {
        const LH = AC[HH];
        if (!LH) return !1;
        const AH = BH[LH],
          rH = this.props[LH];
        return oL(AH) && oL(rH) && rH > AH
      }
      refreshKey(HH) {
        var BH;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(HH)) return;
        const LH = this._splitStorage ? null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup : void 0,
          AH = LH ? Ct._parse(this._groupEntryName(LH)) : this.WQ._parse(this._name);
        if (AH && HH in AH) this._setProp(HH, AH[HH], !1);
        else {
          if (LH) {
            const BH = this.WQ._parse(this._name);
            if (BH && HH in BH) return void this._setProp(HH, BH[HH], !1)
          }
          this._deleteProp(HH, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const HH = this._saveDebounceMs();
        HH > 0 ? VL(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), HH)) : this._writeNow()
      }
      flush() {
        VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !HH) return;
        HH || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || EC.forEach((HH => this.refreshKey(HH))));
        const BH = !HH && !this._storageMigrationInProgress;
        BH || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const LH = !!BH && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && qh.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(LH && this._crossTabFeatureFlagHandlers.forEach((HH => HH())));
        const AH = this._writeEntry(this.WQ, this._name, this.props, tC);
        "written" === AH && this._rememberCurrentCookieProperties(this.props), "failed" !== AH && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), LH && this._crossTabFeatureFlagHandlers.forEach((HH => HH()))
      }
      _writeNowSplit() {
        const {
          main: HH,
          groups: BH
        } = this._partitionProps(), LH = this._writeEntry(this.WQ, this._name, HH, tC);
        "written" === LH && this._rememberCurrentCookieProperties(HH), "failed" !== LH && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), zC.forEach((HH => {
          var BH;
          (null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(HH)
        })));
        for (const rH of oz) {
          var AH;
          const HH = BH[rH];
          if (UL(HH) && !(null === (AH = this._slotState[rH]) || void 0 === AH ? void 0 : AH.persisted)) {
            zC.forEach((HH => {
              var BH;
              (null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup) === rH && this._pendingCrossTabFeatureFlagChanges.delete(HH)
            }));
            continue
          }
          const LH = this._writeEntry(Ct, this._groupEntryName(rH), HH, rH);
          "failed" !== LH && zC.forEach((HH => {
            const BH = lz(HH);
            (null == BH ? void 0 : BH.storageGroup) !== rH || "written" !== LH && BH.volatile || this._pendingCrossTabFeatureFlagChanges.delete(HH)
          }))
        }
      }
      _partitionProps() {
        const HH = {},
          BH = {
            flags: {},
            surveys: {}
          };
        return Rh(this.props, ((LH, AH) => {
          var rH;
          const SH = null === (rH = lz(AH)) || void 0 === rH ? void 0 : rH.storageGroup;
          SH ? BH[SH][AH] = LH : HH[AH] = LH
        })), {
          main: HH,
          groups: BH
        }
      }
      _entryFingerprint(HH, BH) {
        if (BH === tC) return JSON.stringify(HH) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const LH = {};
        return Rh(HH, ((HH, BH) => {
          var AH;
          LH[BH] = (null === (AH = lz(BH)) || void 0 === AH ? void 0 : AH.volatile) ? "__volatile__" : HH
        })), JSON.stringify(LH)
      }
      _writeEntry(HH, BH, LH, AH) {
        const rH = this._slotWriteState(AH);
        if (AH !== tC && !rH.gu && !VL(rH.fingerprint)) return "skipped";
        let SH;
        try {
          if (SH = this._entryFingerprint(LH, AH), SH === rH.fingerprint) return rH.gu = !1, "skipped"
        } catch (HH) {
          SH = void 0
        }
        return HH._set(BH, LH, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (rH.gu = !1, AH !== tC && (rH.persisted = !0), VL(SH) || (rH.fingerprint = SH), this._splitStorageEligible && (rH.storageValue = Ct._get(BH)), "written") : (this._config.debug && qh.warn(`failed to persist storage entry "${BH}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: HH = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), VL(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.WQ._remove(this._name, !1), this.WQ._remove(this._name, !0), !HH && this._ownsSplitStorage)
          for (const BH of oz) Ct._remove(this._groupEntryName(BH));
        HH ? delete this._slotState[tC] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(HH, BH, LH) {
        if (TL(HH)) {
          this.syncCookieProperties(), VL(BH) && (BH = "None"), this._expire_days = VL(LH) ? this._default_expiry : LH;
          let AH = !1;
          if (Rh(HH, ((HH, LH) => {
              this.props.hasOwnProperty(LH) && this.props[LH] !== BH || (this._setProp(LH, HH), AH = !0)
            })), AH) return this.save(), !0
        }
        return !1
      }
      register(HH, BH) {
        if (TL(HH)) {
          this.syncCookieProperties(), this._expire_days = VL(BH) ? this._default_expiry : BH;
          let LH = !1;
          if (Rh(HH, ((BH, AH) => {
              HH.hasOwnProperty(AH) && (this.props[AH] !== BH || TL(BH) || vL(BH)) && (this._setProp(AH, BH), LH = !0)
            })), LH) return this.save(), !0
        }
        return !1
      }
      unregister(HH) {
        this.syncCookieProperties();
        const BH = "string" == typeof HH ? [HH] : HH;
        let LH = !1;
        for (const AH of BH) AH in this.props && (this._deleteProp(AH), LH = !0);
        LH && this.save()
      }
      update_campaign_params() {
        const HH = null == yB ? void 0 : yB.URL;
        if (HH === this._campaign_params_url) return;
        const BH = dz(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          LH = !UL(Dh(BH));
        return LH && this.register(BH), this._campaign_params_url = HH, LH ? BH : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const HH = null == yB ? void 0 : yB.referrer;
          return HH ? sz(HH) : {}
        }())
      }
      update_referrer_info() {
        var HH;
        this.register_once({
          $referrer: yz(),
          $referring_domain: (null == yB ? void 0 : yB.referrer) && (null === (HH = Nz(yB.referrer)) || void 0 === HH ? void 0 : HH.host) || pz
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const HH = HC(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [VB]: this._storesIdentityInCookie ? {
            r: hC(HH.r),
            u: HH.u ? hC(HH.u) : void 0
          } : HH
        }, void 0)
      }
      get_initial_props() {
        const HH = {};
        Rh([UB, TB], (BH => {
          const LH = this.props[BH];
          LH && Rh(LH, (function(BH, LH) {
            HH["$initial_" + uL(LH)] = BH
          }))
        }));
        const BH = this.props[VB];
        if (BH) {
          const LH = function(HH) {
            const BH = BC(HH, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              LH = {};
            return Rh(BH, (function(HH, BH) {
              LH[`$initial_${uL(BH)}`] = HH
            })), LH
          }(BH, this._config.disable_capture_url_hashes);
          jh(HH, LH)
        }
        return HH
      }
      safe_merge(HH) {
        return Rh(this.props, (function(BH, LH) {
          LH in HH || (HH[LH] = BH)
        })), HH
      }
      update_config(HH, BH, LH) {
        const AH = HH.persistence !== BH.persistence,
          rH = !((HH, BH) => {
            if (HH.length !== BH.length) return !1;
            const LH = [...HH].sort(),
              AH = [...BH].sort();
            return LH.every(((HH, BH) => HH === AH[BH]))
          })(HH.cookie_persisted_properties || [], BH.cookie_persisted_properties || []),
          SH = AH || rH,
          hH = HH.cookieWinsOnConflict !== BH.cookieWinsOnConflict,
          tH = HH.disable_persistence || !!LH,
          zH = !!this._disabled && !tH;
        tH || this._syncCookieProperties(BH, zH), this._config = HH, !tH && (AH || rH || hH) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(xr(xr({}, HH), {}, {
          cookie_persisted_properties: BH.cookie_persisted_properties
        }), zH));
        const CH = SH || hH ? this._buildStorage(HH) : this.WQ;
        this._truncateExistingPersonInfoForCookie();
        const EH = this._resolveSplitStorage(HH),
          XH = SH || EH !== this._splitStorage,
          GH = !tH && (XH || HH.cross_subdomain_cookie !== this._cross_subdomain || HH.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(zH);
        this._storageMigrationInProgress = XH;
        try {
          if (this._default_expiry = this._expire_days = HH.cookie_expiration, this.set_disabled(tH), this.set_cross_subdomain(HH.cross_subdomain_cookie), this.set_secure(HH.secure_cookie), XH) {
            const HH = this.props;
            this.clear(), this.WQ = CH, this._splitStorage = EH, this.props = HH, this.save()
          } else hH && (this.WQ = CH, tH || (delete this._slotState[tC], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, GH && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const HH = this.props[VB];
        if (!this._storesIdentityInCookie || !TL(HH) || "string" != typeof HH.r) return;
        const BH = hC(HH.r),
          LH = "string" == typeof HH.u ? hC(HH.u) : HH.u;
        BH === HH.r && LH === HH.u || this._setProp(VB, xr(xr({}, HH), {}, {
          r: BH,
          u: LH
        }))
      }
      set_disabled(HH) {
        this._disabled = HH, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(HH) {
        HH !== this._cross_subdomain && (this._cross_subdomain = HH, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(HH) {
        HH !== this._secure && (this._secure = HH, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(HH, BH) {
        const LH = this.props.__timers || {};
        LH[HH] = BH, this._setProp(KH, LH), this.save()
      }
      remove_event_timer(HH) {
        const BH = this.props.__timers || {},
          LH = BH[HH];
        return VL(LH) || (delete BH[HH], this._setProp(KH, BH), this.save()), LH
      }
      get_property(HH) {
        return this.props[HH]
      }
      set_property(HH, BH) {
        this._setProp(HH, BH), this.save()
      }
      _setProp(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var AH;
        const rH = this.props[HH];
        this.props[HH] = BH, LH && ("distinct_id" !== HH && "$user_state" !== HH || rH === BH || (this._localIdentityChangePending = !0), XC(HH) && !GC(rH, BH) && this._metaIdentifierChangePending.add(HH), this._markPendingCrossTabFeatureFlagChanges(HH, rH, BH), (null === (AH = lz(HH)) || void 0 === AH ? void 0 : AH.volatile) || this._markGroupDirty(HH))
      }
      _deleteProp(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[HH], BH && (CC(HH) && this._setCrossTabFeatureFlagChangesPending(HH, !0), XC(HH) && this._metaIdentifierChangePending.add(HH), this._markGroupDirty(HH))
      }
      _markGroupDirty(HH) {
        var BH;
        const LH = null === (BH = lz(HH)) || void 0 === BH ? void 0 : BH.storageGroup;
        LH && (this._slotWriteState(LH).gu = !0)
      }
      _slotWriteState(HH) {
        return this._slotState[HH] || (this._slotState[HH] = {})
      }
    };
    const WC = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      MC = "events",
      xC = "cancelEvents",
      vC = "popover",
      PC = "api",
      TC = "widget",
      UC = "survey shown",
      VC = "survey dismissed",
      OC = "survey sent",
      bC = "$survey_id",
      kC = "$survey_iteration",
      mC = "$survey_last_seen_date",
      oC = "popover",
      IC = "inline";

    function fC(HH) {
      let BH = !0;
      return {
        dispose() {
          if (BH) {
            BH = !1;
            const LH = HH();
            LH && PL(LH.then) && LH.then(void 0, (() => {}))
          }
        }
      }
    }
    const lC = "product tour shown",
      KC = "$product_tour_last_seen_date",
      cC = "$product_tour_type",
      eC = gh("[RateLimiter]");
    var qC = class {
      constructor(HH) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = HH => {
          const BH = HH.text;
          if (BH && BH.length) try {
            (JSON.parse(BH).quota_limited || []).forEach((HH => {
              eC.info(`${HH||"events"} is quota limited.`), this.serverLimits[HH] = (new Date).getTime() + 6e4
            }))
          } catch (HH) {
            return void eC.warn(`could not rate limit - continuing. Error: "${null==HH?void 0:HH.message}"`, {
              text: BH
            })
          }
        }, this.instance = HH, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var HH;
        return (null === (HH = this.instance.config.rate_limiting) || void 0 === HH ? void 0 : HH.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var HH;
        return Math.max((null === (HH = this.instance.config.rate_limiting) || void 0 === HH ? void 0 : HH.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var BH, LH, AH;
        const {
          captureEventsBurstLimit: rH,
          captureEventsPerSecond: SH
        } = this, hH = (new Date).getTime(), tH = null !== (BH = null === (LH = this.instance.persistence) || void 0 === LH ? void 0 : LH.get_property("$capture_rate_limit")) && void 0 !== BH ? BH : {
          tokens: rH,
          last: hH
        };
        tH.tokens += (hH - tH.last) / 1e3 * SH, tH.last = hH, tH.tokens > rH && (tH.tokens = rH);
        const zH = 1 > tH.tokens;
        if (zH || HH || (tH.tokens = Math.max(0, tH.tokens - 1)), zH && !HH) {
          const HH = (oL(tH.dropped) ? tH.dropped : 0) + 1;
          tH.dropped = HH, !this.lastEventRateLimited && this._captureWarning(HH) && (tH.dropped = 0)
        }
        return this.lastEventRateLimited = zH, null === (AH = this.instance.persistence) || void 0 === AH || AH.set_property("$capture_rate_limit", tH), {
          isRateLimited: zH,
          remainingTokens: tH.tokens
        }
      }
      _isPropertyAllowed(HH) {
        const BH = this.instance.config.property_denylist;
        return !vL(BH) || !BH.includes(HH)
      }
      _triggeringPage() {
        var HH;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == HL ? void 0 : HL.pathname)) return `${null!==(HH=HL.origin)&&void 0!==HH?HH:""}${HL.pathname}`
      }
      _captureWarning(HH) {
        var BH, LH;
        const {
          captureEventsBurstLimit: AH,
          captureEventsPerSecond: rH
        } = this, SH = this._triggeringPage(), hH = this._isPropertyAllowed("$session_id") ? null === (BH = (LH = this.instance).get_session_id) || void 0 === BH ? void 0 : BH.call(LH) : void 0, tH = [`${HH} event(s) dropped since the last warning`, SH ? `triggered on ${SH}` : void 0, hH ? `session ${hH}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${tH}. Config is set to ${rH} events per second and ${AH} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(HH) {
        const BH = this.serverLimits[HH || "events"] || !1;
        return !1 !== BH && (new Date).getTime() < BH
      }
    };
    const gC = gh("[RemoteConfig]");
    var NC = class {
      constructor(HH) {
        this._instance = HH
      }
      get remoteConfig() {
        var HH;
        return null === (HH = tL._POSTHOG_REMOTE_CONFIG) || void 0 === HH || null === (HH = HH[this._instance.config.token]) || void 0 === HH ? void 0 : HH.config
      }
      _loadRemoteConfigJs(HH) {
        var BH, LH, AH;
        (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.loadExternalDependency) ? null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "remote-config", (() => HH(this.remoteConfig))): HH()
      }
      _loadRemoteConfigJSON(HH) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: HH
        })
      }
      load() {
        try {
          if (this.remoteConfig) return gC.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void gC.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((HH => {
            if (!HH) return gC.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((HH => {
              this._onRemoteConfig(HH.json, HH)
            }));
            this._onRemoteConfig(HH)
          }))
        } catch (AH) {
          gC.error("Error loading remote config", AH), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(HH, BH) {
        !HH && BH && (0 === BH.statusCode ? BH.error || gC.warn("Failed to fetch remote config from PostHog.") : gC.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(HH ? {
            ok: !0,
            config: HH
          } : {
            ok: !1
          })
        } catch (HH) {
          gC.error("Error applying remote config", HH)
        }
        if (!1 !== (null == HH ? void 0 : HH.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var LH;
          null === (LH = this._instance.featureFlags) || void 0 === LH || LH.ensureFlagsLoaded()
        } catch (HH) {
          gC.error("Error loading feature flags", HH)
        }
      }
    };
    var RC = Uint8Array,
      jC = Uint16Array,
      nC = Uint32Array,
      FC = new RC([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      DC = new RC([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      wC = new RC([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      ZC = function(HH, BH) {
        for (var LH = new jC(31), AH = 0; 31 > AH; ++AH) LH[AH] = BH += 1 << HH[AH - 1];
        var rH = new nC(LH[30]);
        for (AH = 1; 30 > AH; ++AH)
          for (var SH = LH[AH]; LH[AH + 1] > SH; ++SH) rH[SH] = SH - LH[AH] << 5 | AH;
        return [LH, rH]
      },
      dC = ZC(FC, 2),
      aC = dC[1];
    dC[0][28] = 258, aC[258] = 28;
    for (var sC = ZC(DC, 0)[1], JC = new jC(32768), iC = 0; 32768 > iC; ++iC) {
      var pC = (43690 & iC) >>> 1 | (21845 & iC) << 1;
      JC[iC] = ((65280 & (pC = (61680 & (pC = (52428 & pC) >>> 2 | (13107 & pC) << 2)) >>> 4 | (3855 & pC) << 4)) >>> 8 | (255 & pC) << 8) >>> 1
    }
    var yC = function(HH, BH, LH) {
        for (var AH = HH.length, rH = 0, SH = new jC(BH); AH > rH; ++rH) ++SH[HH[rH] - 1];
        var hH, tH = new jC(BH);
        for (rH = 0; BH > rH; ++rH) tH[rH] = tH[rH - 1] + SH[rH - 1] << 1;
        if (LH) {
          hH = new jC(1 << BH);
          var zH = 15 - BH;
          for (rH = 0; AH > rH; ++rH)
            if (HH[rH])
              for (var CH = rH << 4 | HH[rH], EH = BH - HH[rH], XH = tH[HH[rH] - 1]++ << EH, GH = XH | (1 << EH) - 1; GH >= XH; ++XH) hH[JC[XH] >>> zH] = CH
        } else
          for (hH = new jC(AH), rH = 0; AH > rH; ++rH) hH[rH] = JC[tH[HH[rH] - 1]++] >>> 15 - HH[rH];
        return hH
      },
      HE = new RC(288);
    for (iC = 0; 144 > iC; ++iC) HE[iC] = 8;
    for (iC = 144; 256 > iC; ++iC) HE[iC] = 9;
    for (iC = 256; 280 > iC; ++iC) HE[iC] = 7;
    for (iC = 280; 288 > iC; ++iC) HE[iC] = 8;
    var BE = new RC(32);
    for (iC = 0; 32 > iC; ++iC) BE[iC] = 5;
    var LE = yC(HE, 9, 0),
      AE = yC(BE, 5, 0),
      rE = function(HH) {
        return (HH / 8 | 0) + (7 & HH && 1)
      },
      SE = function(HH, BH, LH) {
        (null == BH || 0 > BH) && (BH = 0), (null == LH || LH > HH.length) && (LH = HH.length);
        var AH = new(HH instanceof jC ? jC : HH instanceof nC ? nC : RC)(LH - BH);
        return AH.set(HH.subarray(BH, LH)), AH
      },
      hE = function(HH, BH, LH) {
        var AH = BH / 8 | 0;
        HH[AH] |= LH <<= 7 & BH, HH[AH + 1] |= LH >>> 8
      },
      tE = function(HH, BH, LH) {
        var AH = BH / 8 | 0;
        HH[AH] |= LH <<= 7 & BH, HH[AH + 1] |= LH >>> 8, HH[AH + 2] |= LH >>> 16
      },
      zE = function(HH, BH) {
        for (var LH = [], AH = 0; HH.length > AH; ++AH) HH[AH] && LH.push({
          s: AH,
          f: HH[AH]
        });
        var rH = LH.length,
          SH = LH.slice();
        if (!rH) return [new RC(0), 0];
        if (1 == rH) {
          var hH = new RC(LH[0].s + 1);
          return hH[LH[0].s] = 1, [hH, 1]
        }
        LH.sort((function(HH, BH) {
          return HH.f - BH.f
        })), LH.push({
          s: -1,
          f: 25001
        });
        var tH = LH[0],
          zH = LH[1],
          CH = 0,
          EH = 1,
          XH = 2;
        for (LH[0] = {
            s: -1,
            f: tH.f + zH.f,
            l: tH,
            r: zH
          }; EH != rH - 1;) tH = LH[LH[XH].f > LH[CH].f ? CH++ : XH++], zH = LH[CH != EH && LH[XH].f > LH[CH].f ? CH++ : XH++], LH[EH++] = {
          s: -1,
          f: tH.f + zH.f,
          l: tH,
          r: zH
        };
        var GH = SH[0].s;
        for (AH = 1; rH > AH; ++AH) SH[AH].s > GH && (GH = SH[AH].s);
        var YH = new jC(GH + 1),
          uH = CE(LH[EH - 1], YH, 0);
        if (uH > BH) {
          AH = 0;
          var QH = 0,
            WH = uH - BH,
            MH = 1 << WH;
          for (SH.sort((function(HH, BH) {
              return YH[BH.s] - YH[HH.s] || HH.f - BH.f
            })); rH > AH; ++AH) {
            var xH = SH[AH].s;
            if (BH >= YH[xH]) break;
            QH += MH - (1 << uH - YH[xH]), YH[xH] = BH
          }
          for (QH >>>= WH; QH > 0;) {
            var vH = SH[AH].s;
            BH > YH[vH] ? QH -= 1 << BH - YH[vH]++ - 1 : ++AH
          }
          for (; AH >= 0 && QH; --AH) {
            var PH = SH[AH].s;
            YH[PH] == BH && (--YH[PH], ++QH)
          }
          uH = BH
        }
        return [new RC(YH), uH]
      },
      CE = function(HH, BH, LH) {
        return -1 == HH.s ? Math.max(CE(HH.l, BH, LH + 1), CE(HH.r, BH, LH + 1)) : BH[HH.s] = LH
      },
      EE = function(HH) {
        for (var BH = HH.length; BH && !HH[--BH];);
        for (var LH = new jC(++BH), AH = 0, rH = HH[0], SH = 1, hH = function(HH) {
            LH[AH++] = HH
          }, tH = 1; BH >= tH; ++tH)
          if (HH[tH] == rH && tH != BH) ++SH;
          else {
            if (!rH && SH > 2) {
              for (; SH > 138; SH -= 138) hH(32754);
              SH > 2 && (hH(SH > 10 ? SH - 11 << 5 | 28690 : SH - 3 << 5 | 12305), SH = 0)
            } else if (SH > 3) {
              for (hH(rH), --SH; SH > 6; SH -= 6) hH(8304);
              SH > 2 && (hH(SH - 3 << 5 | 8208), SH = 0)
            }
            for (; SH--;) hH(rH);
            SH = 1, rH = HH[tH]
          } return [LH.subarray(0, AH), BH]
      },
      XE = function(HH, BH) {
        for (var LH = 0, AH = 0; BH.length > AH; ++AH) LH += HH[AH] * BH[AH];
        return LH
      },
      GE = function(HH, BH, LH) {
        var AH = LH.length,
          rH = rE(BH + 2);
        HH[rH] = 255 & AH, HH[rH + 1] = AH >>> 8, HH[rH + 2] = 255 ^ HH[rH], HH[rH + 3] = 255 ^ HH[rH + 1];
        for (var SH = 0; AH > SH; ++SH) HH[rH + SH + 4] = LH[SH];
        return 8 * (rH + 4 + AH)
      },
      YE = function(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        hE(BH, EH++, LH), ++rH[256];
        for (var XH = zE(rH, 15), GH = XH[0], YH = XH[1], uH = zE(SH, 15), QH = uH[0], WH = uH[1], MH = EE(GH), xH = MH[0], vH = MH[1], PH = EE(QH), TH = PH[0], UH = PH[1], VH = new jC(19), OH = 0; xH.length > OH; ++OH) VH[31 & xH[OH]]++;
        for (OH = 0; TH.length > OH; ++OH) VH[31 & TH[OH]]++;
        for (var bH = zE(VH, 7), kH = bH[0], mH = bH[1], oH = 19; oH > 4 && !kH[wC[oH - 1]]; --oH);
        var IH, fH, lH, KH, cH = CH + 5 << 3,
          eH = XE(rH, HE) + XE(SH, BE) + hH,
          qH = XE(rH, GH) + XE(SH, QH) + hH + 14 + 3 * oH + XE(VH, kH) + (2 * VH[16] + 3 * VH[17] + 7 * VH[18]);
        if (eH >= cH && qH >= cH) return GE(BH, EH, HH.subarray(zH, zH + CH));
        if (hE(BH, EH, 1 + (eH > qH)), EH += 2, eH > qH) {
          IH = yC(GH, YH, 0), fH = GH, lH = yC(QH, WH, 0), KH = QH;
          var gH = yC(kH, mH, 0);
          for (hE(BH, EH, vH - 257), hE(BH, EH + 5, UH - 1), hE(BH, EH + 10, oH - 4), EH += 14, OH = 0; oH > OH; ++OH) hE(BH, EH + 3 * OH, kH[wC[OH]]);
          EH += 3 * oH;
          for (var NH = [xH, TH], RH = 0; 2 > RH; ++RH) {
            var jH = NH[RH];
            for (OH = 0; jH.length > OH; ++OH) hE(BH, EH, gH[nH = 31 & jH[OH]]), EH += kH[nH], nH > 15 && (hE(BH, EH, jH[OH] >>> 5 & 127), EH += jH[OH] >>> 12)
          }
        } else IH = LE, fH = HE, lH = AE, KH = BE;
        for (OH = 0; tH > OH; ++OH)
          if (AH[OH] > 255) {
            var nH;
            tE(BH, EH, IH[257 + (nH = AH[OH] >>> 18 & 31)]), EH += fH[nH + 257], nH > 7 && (hE(BH, EH, AH[OH] >>> 23 & 31), EH += FC[nH]);
            var FH = 31 & AH[OH];
            tE(BH, EH, lH[FH]), EH += KH[FH], FH > 3 && (tE(BH, EH, AH[OH] >>> 5 & 8191), EH += DC[FH])
          } else tE(BH, EH, IH[AH[OH]]), EH += fH[AH[OH]];
        return tE(BH, EH, IH[256]), EH + fH[256]
      },
      uE = new nC([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      QE = (new RC(0), function() {
        for (var HH = new nC(256), BH = 0; 256 > BH; ++BH) {
          for (var LH = BH, AH = 9; --AH;) LH = (1 & LH && 3988292384) ^ LH >>> 1;
          HH[BH] = LH
        }
        return HH
      }()),
      WE = function(HH, BH, LH) {
        for (; LH; ++BH) HH[BH] = LH, LH >>>= 8
      };
    const ME = !!LL || !!BL,
      xE = new WeakMap,
      vE = "text/plain";
    let PE = 0,
      TE = !1;
    const UE = (HH, BH) => {
        const [LH, AH] = HH.split("#"), [rH, SH] = LH.split("?");
        if (!SH) return HH;
        const hH = SH.split("&").filter((HH => HH.split("=")[0] !== BH)).join("&");
        return `${rH}${hH?`?${hH}`:""}${AH?`#${AH}`:""}`
      },
      VE = function(HH, BH) {
        let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var AH;
        const [rH, SH] = HH.split("?"), hH = xr({}, BH), tH = null !== (AH = null == SH ? void 0 : SH.split("&").map((HH => {
          var BH;
          const [AH, rH] = HH.split("="), SH = LH && null !== (BH = hH[AH]) && void 0 !== BH ? BH : rH;
          return delete hH[AH], `${AH}=${SH}`
        }))) && void 0 !== AH ? AH : [], zH = function(HH) {
          let BH, LH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const rH = [];
          return Rh(HH, (function(HH, AH) {
            VL(HH) || VL(AH) || "undefined" === AH || (BH = encodeURIComponent((HH => HH instanceof File)(HH) ? HH.name : HH.toString()), LH = encodeURIComponent(AH), rH[rH.length] = LH + "=" + BH)
          })), rH.join(AH)
        }(hH);
        return zH && tH.push(zH), tH.length > 0 ? `${rH}?${tH.join("&")}` : rH
      },
      OE = HH => {
        if (HH._encodedBody) return HH._encodedBody;
        const {
          data: BH,
          compression: LH
        } = HH;
        if (!BH) return;
        if (LH === WC.GZipJS) {
          const HH = function(HH, BH) {
            void 0 === BH && (BH = {});
            var LH = function() {
                var HH = 4294967295;
                return {
                  p(BH) {
                    for (var LH = HH, AH = 0; BH.length > AH; ++AH) LH = QE[255 & LH ^ BH[AH]] ^ LH >>> 8;
                    HH = LH
                  },
                  d: () => 4294967295 ^ HH
                }
              }(),
              AH = HH.length;
            LH.p(HH);
            var rH, SH, hH, tH, zH = (tH = 10 + ((rH = BH).filename && rH.filename.length + 1 || 0), function(HH, BH, LH, AH, rH, SH) {
                var hH = HH.length,
                  tH = new RC(AH + hH + 5 * (1 + Math.floor(hH / 7e3)) + 8),
                  zH = tH.subarray(AH, tH.length - 8),
                  CH = 0;
                if (!BH || 8 > hH)
                  for (var EH = 0; hH >= EH; EH += 65535) {
                    var XH = EH + 65535;
                    hH > XH ? CH = GE(zH, CH, HH.subarray(EH, XH)) : (zH[EH] = SH, CH = GE(zH, CH, HH.subarray(EH, hH)))
                  } else {
                    for (var GH = uE[BH - 1], YH = GH >>> 13, uH = 8191 & GH, QH = (1 << LH) - 1, WH = new jC(32768), MH = new jC(QH + 1), xH = Math.ceil(LH / 3), vH = 2 * xH, PH = function(BH) {
                        return (HH[BH] ^ HH[BH + 1] << xH ^ HH[BH + 2] << vH) & QH
                      }, TH = new nC(25e3), UH = new jC(288), VH = new jC(32), OH = 0, bH = 0, kH = (EH = 0, 0), mH = 0, oH = 0; hH > EH; ++EH) {
                      var IH = PH(EH),
                        fH = 32767 & EH,
                        lH = MH[IH];
                      if (WH[fH] = lH, MH[IH] = fH, EH >= mH) {
                        var KH = hH - EH;
                        if ((OH > 7e3 || kH > 24576) && KH > 423) {
                          CH = YE(HH, zH, 0, TH, UH, VH, bH, kH, oH, EH - oH, CH), kH = OH = bH = 0, oH = EH;
                          for (var cH = 0; 286 > cH; ++cH) UH[cH] = 0;
                          for (cH = 0; 30 > cH; ++cH) VH[cH] = 0
                        }
                        var eH = 2,
                          qH = 0,
                          gH = uH,
                          NH = fH - lH & 32767;
                        if (KH > 2 && IH == PH(EH - NH))
                          for (var RH = Math.min(YH, KH) - 1, jH = Math.min(32767, EH), nH = Math.min(258, KH); jH >= NH && --gH && fH != lH;) {
                            if (HH[EH + eH] == HH[EH + eH - NH]) {
                              for (var FH = 0; nH > FH && HH[EH + FH] == HH[EH + FH - NH]; ++FH);
                              if (FH > eH) {
                                if (eH = FH, qH = NH, FH > RH) break;
                                var DH = Math.min(NH, FH - 2),
                                  wH = 0;
                                for (cH = 0; DH > cH; ++cH) {
                                  var ZH = EH - NH + cH + 32768 & 32767,
                                    dH = ZH - WH[ZH] + 32768 & 32767;
                                  dH > wH && (wH = dH, lH = ZH)
                                }
                              }
                            }
                            NH += (fH = lH) - (lH = WH[fH]) + 32768 & 32767
                          }
                        if (qH) {
                          TH[kH++] = 268435456 | aC[eH] << 18 | sC[qH];
                          var aH = 31 & aC[eH],
                            sH = 31 & sC[qH];
                          bH += FC[aH] + DC[sH], ++UH[257 + aH], ++VH[sH], mH = EH + eH, ++OH
                        } else TH[kH++] = HH[EH], ++UH[HH[EH]]
                      }
                    }
                    CH = YE(HH, zH, SH, TH, UH, VH, bH, kH, oH, EH - oH, CH)
                  }
                return SE(tH, 0, AH + rE(CH) + 8)
              }(SH = HH, null == (hH = BH).level ? 6 : hH.level, null == hH.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(SH.length)))) : 12 + hH.mem, tH, 0, !0)),
              CH = zH.length;
            return function(HH, BH) {
              var LH = BH.filename;
              if (HH[0] = 31, HH[1] = 139, HH[2] = 8, HH[8] = 2 > BH.level ? 4 : 9 == BH.level ? 2 : 0, HH[9] = 3, 0 != BH.mtime && WE(HH, 4, Math.floor(new Date(BH.mtime || Date.now()) / 1e3)), LH) {
                HH[3] = 8;
                for (var AH = 0; LH.length >= AH; ++AH) HH[AH + 10] = LH.charCodeAt(AH)
              }
            }(zH, BH), WE(zH, CH - 8, LH.d()), WE(zH, CH - 4, AH), zH
          }(function(HH) {
            var BH = HH.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(HH);
            for (var LH = new RC(HH.length + (HH.length >>> 1)), AH = 0, rH = function(HH) {
                LH[AH++] = HH
              }, SH = 0; BH > SH; ++SH) {
              if (AH + 5 > LH.length) {
                var hH = new RC(AH + 8 + (BH - SH << 1));
                hH.set(LH), LH = hH
              }
              var tH = HH.charCodeAt(SH);
              128 > tH ? rH(tH) : 2048 > tH ? (rH(192 | tH >>> 6), rH(128 | 63 & tH)) : tH > 55295 && 57344 > tH ? (rH(240 | (tH = 65536 + (1047552 & tH) | 1023 & HH.charCodeAt(++SH)) >>> 18), rH(128 | tH >>> 12 & 63), rH(128 | tH >>> 6 & 63), rH(128 | 63 & tH)) : (rH(224 | tH >>> 12), rH(128 | tH >>> 6 & 63), rH(128 | 63 & tH))
            }
            return SE(LH, 0, AH)
          }(gz(BH)), {
            mtime: 0
          });
          return {
            contentType: vE,
            body: HH.buffer.slice(HH.byteOffset, HH.byteOffset + HH.byteLength),
            estimatedSize: HH.byteLength
          }
        }
        if (LH === WC.Base64) {
          const HH = function(HH) {
              return HH ? btoa(encodeURIComponent(HH).replace(/%([0-9A-F]{2})/g, ((HH, BH) => String.fromCharCode(parseInt(BH, 16))))) : HH
            }(gz(BH)),
            LH = (HH => "data=" + encodeURIComponent("string" == typeof HH ? HH : gz(HH)))(HH);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: LH,
            estimatedSize: new Blob([LH]).size
          }
        }
        const AH = gz(BH);
        return {
          contentType: "application/json",
          body: AH,
          estimatedSize: new Blob([AH]).size
        }
      },
      bE = HH => {
        const BH = () => "sendBeacon" === HH.transport ? {
          url: VE(HH.url, {
            compression: WC.Base64
          }),
          encodedBody: OE(xr(xr({}, HH), {}, {
            compression: WC.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: UE(HH.url, "compression"),
          encodedBody: OE(xr(xr({}, HH), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let LH;
        try {
          LH = OE(HH)
        } catch (LH) {
          if (xS(HH.compression, Rz(HH.url, "compression"))) return qh.error("Failed to gzip request body, sending uncompressed payload", LH), BH();
          throw LH
        }
        return LH && xS(HH.compression, Rz(HH.url, "compression")) && !((AH = LH.body) instanceof ArrayBuffer ? MS(new Uint8Array(AH)) : ArrayBuffer.isView(AH) && MS(new Uint8Array(AH.buffer, AH.byteOffset, AH.byteLength))) ? (TE = !0, BH()) : {
          url: HH.url,
          encodedBody: LH
        };
        var AH
      },
      kE = HH => {
        try {
          return bE(HH)
        } catch (SH) {
          var BH;
          return qh.error(SH), void(null === (BH = HH.callback) || void 0 === BH || BH.call(HH, {
            statusCode: 0,
            error: SH
          }))
        }
      },
      mE = function() {
        var HH = DL((function*(HH) {
          const BH = yield function(HH) {
            return OS.apply(this, arguments)
          }(gz(HH.data), SH.DEBUG, {
            rethrow: !0
          });
          if (!BH) return HH;
          const LH = yield BH.arrayBuffer();
          return xr(xr({}, HH), {}, {
            _encodedBody: {
              contentType: vE,
              body: LH,
              estimatedSize: LH.byteLength
            }
          })
        }));
        return function(BH) {
          return HH.apply(this, arguments)
        }
      }(),
      oE = /Failed to fetch|NetworkError|Load failed/i,
      IE = HH => "TypeError" === (null == HH ? void 0 : HH.name) && oE.test((null == HH ? void 0 : HH.message) || ""),
      fE = HH => {
        try {
          const BH = function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof HH || !HH) return;
            const LH = HH.trim(),
              AH = /^\d+\s*,/.test(LH) ? LH.slice(0, LH.indexOf(",")).trim() : LH;
            if (/^\d+$/.test(AH)) {
              const HH = 1e3 * Math.min(Number(AH), 300);
              return HH > 0 ? HH : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(AH)) return;
            const rH = /^\w{3} \w{3} /.test(AH) ? AH + " GMT" : AH,
              SH = Date.parse(rH) - BH;
            return Number.isFinite(SH) && SH > 0 ? Math.min(SH, Sr) : void 0
          }(HH());
          return VL(BH) ? void 0 : Math.min(BH, 3e4)
        } catch (HH) {
          return
        }
      },
      lE = HH => {
        const BH = kE(HH);
        if (!BH) return;
        const LH = new LL;
        xE.set(LH, !0);
        const {
          url: AH,
          encodedBody: rH
        } = BH;
        LH.open(HH.method || "GET", AH, !0);
        const {
          contentType: SH,
          body: hH
        } = null != rH ? rH : {};
        Rh(HH.headers, (function(HH, BH) {
          LH.setRequestHeader(BH, HH)
        })), SH && LH.setRequestHeader("Content-Type", SH), HH.timeout && (LH.timeout = HH.timeout), LH.onreadystatechange = () => {
          if (4 === LH.readyState) {
            var BH;
            const AH = {
              statusCode: LH.status,
              text: LH.responseText
            };
            if (200 === LH.status) try {
              AH.json = JSON.parse(LH.responseText)
            } catch (HH) {}
            null === (BH = HH.callback) || void 0 === BH || BH.call(HH, AH, fE((() => LH.getResponseHeader("Retry-After"))))
          }
        }, LH.send(hH)
      },
      KE = HH => {
        const BH = kE(HH);
        if (!BH) return;
        const {
          url: LH,
          encodedBody: AH
        } = BH, {
          contentType: rH,
          body: SH,
          estimatedSize: hH
        } = null != AH ? AH : {}, tH = new Headers;
        Rh(HH.headers, (function(HH, BH) {
          tH.append(BH, HH)
        })), rH && tH.append("Content-Type", rH);
        let zH = null,
          CH = !1;
        if (AL) {
          const BH = new AL;
          zH = {
            signal: BH.signal,
            timeout: setTimeout((() => {
              CH = !0;
              try {
                BH.abort(Cr("AbortError", "PostHog request timed out" + ((LH = HH.timeout) ? ` after ${LH}ms` : "")))
              } catch (HH) {
                XH(HH)
              }
              var LH
            }), HH.timeout)
          }
        }
        let EH = !1;
        const XH = BH => {
          var LH;
          EH || (EH = !0, CH && "AbortError" === (null == BH ? void 0 : BH.name) || IE(BH) ? qh.warn(BH) : qh.error(BH), null === (LH = HH.callback) || void 0 === LH || LH.call(HH, {
            statusCode: 0,
            error: BH
          }))
        };
        let GH = 0;
        const YH = () => {
          PE -= GH, GH = 0, zH && clearTimeout(zH.timeout)
        };
        try {
          const BH = xr({
              method: (null == HH ? void 0 : HH.method) || "GET",
              headers: tH,
              referrerPolicy: "strict-origin",
              body: SH,
              signal: null == zH ? void 0 : zH.signal
            }, HH.fetchOptions),
            AH = null != hH ? hH : VL(SH) ? 0 : void 0;
          BH.keepalive = "POST" === BH.method && !HH._keepaliveDisabled && !1 !== BH.keepalive && BH.body === SH && !VL(AH) && AH >= 0 && 52428.8 > PE + AH, BH.keepalive && (GH = AH, PE += GH), BL(LH, BH).then((BH => BH.text().then((LH => {
            var AH;
            if (EH) return;
            const rH = {
              statusCode: BH.status,
              text: LH
            };
            if (200 === BH.status) try {
              rH.json = JSON.parse(LH)
            } catch (HH) {
              qh.error(HH)
            }
            EH = !0, YH(), null === (AH = HH.callback) || void 0 === AH || AH.call(HH, rH, fE((() => BH.headers.get("Retry-After"))))
          })))).catch((HH => {
            YH(), XH(HH)
          })).finally(YH)
        } catch (HH) {
          YH(), XH(HH)
        }
      },
      cE = HH => {
        try {
          var BH;
          const {
            url: LH,
            encodedBody: AH
          } = bE(HH), {
            contentType: rH,
            body: SH,
            estimatedSize: hH
          } = null != AH ? AH : {};
          if (!SH) return;
          const tH = SH instanceof Blob ? SH : new Blob([SH], {
            type: rH
          });
          if (pB.sendBeacon(LH, tH)) return;
          const zH = vL(HH.data) ? HH.data : null === (BH = HH.data) || void 0 === BH ? void 0 : BH.batch;
          if (vL(zH) && zH.length > 1 && (null != hH ? hH : 0) > 16384) {
            const BH = Math.ceil(zH.length / 2),
              LH = BH => vL(HH.data) ? BH : xr(xr({}, HH.data), {}, {
                batch: BH
              });
            return cE(xr(xr({}, HH), {}, {
              data: LH(zH.slice(0, BH))
            })), void cE(xr(xr({}, HH), {}, {
              data: LH(zH.slice(BH))
            }))
          }
          qh.warn(`Beacon of ~${null!=hH?hH:0} bytes was rejected by the browser, falling back to ${BL?"fetch":"XHR"}`), BL ? KE(xr(xr({}, HH), {}, {
            _keepaliveDisabled: !0
          })) : lE(HH)
        } catch (HH) {
          qh.warn("Beacon send failed", HH)
        }
      },
      eE = (HH, BH, LH, AH) => {
        const rH = "query" === AH ? "POST" === BH ? "sent_at" : "_" : void 0;
        return VE(LH === WC.GZipJS ? UE(HH, "compression") : HH, xr(xr({}, rH ? {
          [rH]: Date.now().toString()
        } : {}), LH === WC.GZipJS ? {} : {
          compression: LH
        }))
      },
      qE = (() => {
        const HH = [];
        return BL && HH.push({
          transport: "fetch",
          method: KE
        }), LL && HH.push({
          transport: "XHR",
          method: lE
        }), (null == pB ? void 0 : pB.sendBeacon) && HH.push({
          transport: "sendBeacon",
          method: cE
        }), HH
      })();
    let gE = !ME && -1 === (null == SL ? void 0 : SL.indexOf("MSIE")) && -1 === (null == SL ? void 0 : SL.indexOf("Mozilla"));

    function NE(HH, BH, LH) {
      var AH, rH, SH;
      LH && (BH = xr(xr({}, BH), {}, {
        callback: HH => LH(HH)
      })), HH.__loaded ? gE ? HH.__request_queue.push(BH) : HH.rateLimiter.isServerRateLimited(BH.batchKey) ? BH.fireCallbackOnDrop && (null === (rH = BH.callback) || void 0 === rH || rH.call(BH, {
        statusCode: 429
      })) : (BH.transport = BH.transport || HH.config.api_transport, BH.headers = xr(xr({}, HH.config.request_headers), BH.headers), BH.compression = "best-available" === BH.compression ? null !== (AH = HH.compression) && void 0 !== AH ? AH : BH.compressionFallback : BH.compression, (VL(HH.config.disable_beacon) ? HH.config.__preview_disable_beacon : HH.config.disable_beacon) && (BH.disableTransport = ["sendBeacon"]), BH.fetchOptions = BH.fetchOptions || HH.config.fetch_options, ((HH, BH) => {
        var LH, AH, rH;
        const SH = xr(xr({}, HH), {}, {
          callback: null != BH ? BH : BH => {
            var LH;
            return null === (LH = HH.callback) || void 0 === LH ? void 0 : LH.call(HH, BH)
          }
        });
        SH.timeout = SH.timeout || 6e4;
        const hH = null !== (LH = SH.transport) && void 0 !== LH ? LH : "fetch";
        "sendBeacon" === hH && VL(SH.compression) && SH.data && (SH.compression = WC.Base64), "POST" === SH.method && SH.data && ("capture-body" === SH.timestampMode ? SH.data = (HH => {
          var BH, LH;
          const AH = (vL(HH) ? HH : [HH]).map((HH => xr(xr({}, HH), HH.timestamp instanceof Date && !isNaN(HH.timestamp.getTime()) ? {
              timestamp: HH.timestamp.toISOString()
            } : {}))),
            rH = AH[0];
          return {
            api_key: null !== (BH = null == rH || null === (LH = rH.properties) || void 0 === LH ? void 0 : LH.token) && void 0 !== BH ? BH : null == rH ? void 0 : rH.token,
            batch: AH,
            sent_at: (new Date).toISOString()
          }
        })(SH.data) : "body" === SH.timestampMode && (SH.data = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return vL(HH) ? HH.map((HH => xr(xr({}, HH), {}, {
            sent_at: BH
          }))) : xr(xr({}, HH), {}, {
            sent_at: BH
          })
        }(SH.data))), SH.url = eE(SH.url, SH.method, SH.compression, SH.timestampMode);
        const tH = qE.filter((HH => !SH.disableTransport || !HH.transport || !SH.disableTransport.includes(HH.transport))),
          zH = null !== (AH = null === (rH = function(HH, BH) {
            for (let LH = 0; HH.length > LH; LH++)
              if (BH(HH[LH])) return HH[LH]
          }(tH, (HH => HH.transport === hH))) || void 0 === rH ? void 0 : rH.method) && void 0 !== AH ? AH : tH[0].method;
        if (!zH) throw new Error("No available transport method");
        const CH = HH => {
          try {
            zH(HH)
          } catch (HH) {
            var BH;
            IE(HH) ? qh.warn(HH) : qh.error(HH), null === (BH = SH.callback) || void 0 === BH || BH.call(SH, {
              statusCode: 0,
              error: HH
            })
          }
        };
        "sendBeacon" !== hH && !SH.preferSyncCompression && SH.data && SH.compression === WC.GZipJS && rL && "undefined" != typeof Promise && !TE ? mE(SH).then((HH => {
          CH(HH)
        })).catch((BH => {
          if (vS(BH)) return TE = !0, void CH(xr(xr({}, SH), {}, {
            compression: void 0,
            url: eE(HH.url, HH.method, void 0, HH.timestampMode)
          }));
          (HH => {
            if (!HH || "object" != typeof HH) return !1;
            const BH = "name" in HH ? String(HH.name) : "";
            return vS(HH) || BH === WS
          })(BH) && (TE = !0), CH(SH)
        })) : CH(SH)
      })(BH, ((AH, rH) => {
        var SH, hH, tH;
        HH.rateLimiter.checkForLimiting(AH), 400 > AH.statusCode || null === (SH = (hH = HH.config).on_request_error) || void 0 === SH || SH.call(hH, AH), LH ? LH(AH, rH) : null === (tH = BH.callback) || void 0 === tH || tH.call(BH, AH)
      }))) : BH.fireCallbackOnDrop && (null === (SH = BH.callback) || void 0 === SH || SH.call(BH, {
        statusCode: 0
      }))
    }
    var RE = class {
      constructor(HH, BH) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = aL((null == BH ? void 0 : BH.flush_interval_ms) || 3e3, 250, 5e3, qh.createLogger("flush interval"), 3e3), this._sendRequest = HH
      }
      enqueue(HH) {
        this._queue.push(HH), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const HH = this._queue.length > 0 ? this._formatQueue() : {},
          BH = Object.values(HH);
        [...BH.filter((HH => 0 === HH.url.indexOf("/e"))), ...BH.filter((HH => 0 !== HH.url.indexOf("/e")))].map((HH => {
          this._sendRequestSafely(xr(xr({}, HH), {}, {
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
          const HH = this._formatQueue();
          for (const BH in HH) this._sendRequestSafely(HH[BH])
        }
      }
      _sendRequestSafely(HH, BH) {
        try {
          this._sendRequest(HH, BH)
        } catch (HH) {
          qh.error(HH)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const HH = {},
          BH = {};
        Rh(this._queue, (LH => {
          var AH;
          const rH = LH,
            SH = ((rH ? rH.batchKey : null) || rH.url) + (rH.batchGroup ? `:${rH.batchGroup}` : "");
          VL(HH[SH]) && (HH[SH] = xr(xr({}, rH), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), BH[SH] = []), null === (AH = HH[SH].data) || void 0 === AH || AH.push(rH.data), rH.callback && BH[SH].push(rH.callback)
        }));
        for (const LH in BH) {
          const AH = BH[LH];
          AH.length && (HH[LH].callback = HH => {
            for (const BH of AH) BH(HH)
          })
        }
        return this._queue = [], HH
      }
    };
    const jE = ["retriesPerformedSoFar"];
    var nE = class {
        constructor(HH) {
          this._instance = HH, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!VL(JB) && "onLine" in JB.navigator) {
            if (this._areWeOnline = JB.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, ah(JB, "online", this._onlineListener), ah(JB, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(HH, BH) {
          let {
            retriesPerformedSoFar: LH
          } = HH, AH = bS(HH, jE);
          IL(LH) && (AH.url = VE(AH.url, {
            retry_count: LH
          })), NE(this._instance, BH ? xr(xr({}, AH), {}, {
            transport: BH
          }) : AH, ((HH, BH) => {
            var rH;
            if (200 !== HH.statusCode && (400 > HH.statusCode || HH.statusCode >= 500)) {
              if ((0 === HH.statusCode ? 3 : 10) > (null != LH ? LH : 0)) return void this._enqueue(xr({
                retriesPerformedSoFar: LH
              }, AH), BH);
              0 === HH.statusCode && qh.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=LH?LH:0} retries.`)
            }
            null === (rH = AH.callback) || void 0 === rH || rH.call(AH, HH)
          }))
        }
        _enqueue(HH, BH) {
          const LH = HH.retriesPerformedSoFar || 0;
          HH.retriesPerformedSoFar = LH + 1;
          const AH = Math.max(function(HH) {
              const BH = 3e3 * Math.pow(2, HH),
                LH = BH / 2,
                AH = Math.min(18e5, BH),
                rH = (Math.random() - .5) * (AH - LH);
              return Math.ceil(AH + rH)
            }(LH), null != BH ? BH : 0),
            rH = Date.now() + AH;
          this._queue.push({
            retryAt: rH,
            requestOptions: HH
          });
          let SH = `Enqueued failed request for retry in ${AH}`;
          navigator.onLine || (SH += " (Browser is offline)"), qh.warn(SH), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const HH = Date.now(),
            BH = [],
            LH = this._queue.filter((LH => HH > LH.retryAt || (BH.push(LH), !1)));
          if (this._queue = BH, LH.length > 0)
            for (const {
                requestOptions: AH
              }
              of LH) this.retriableRequest(AH)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, VL(JB) || (this._onlineListener && (JB.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (JB.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: HH
            }
            of this._queue) try {
            this._instance._send_request(xr(xr({}, HH), {}, {
              callback: vL(HH.data) ? void 0 : HH.callback,
              transport: "sendBeacon"
            }))
          } catch (AH) {
            qh.error(AH)
          }
          this._queue = []
        }
      },
      FE = class {
        constructor(HH) {
          this._instance = HH, this._updateScrollData = () => {
            var HH, BH, LH, AH;
            this._context || (this._context = {});
            const rH = this.scrollElement(),
              SH = this.scrollY(),
              hH = rH ? Math.max(0, rH.scrollHeight - rH.clientHeight) : 0,
              tH = SH + ((null == rH ? void 0 : rH.clientHeight) || 0),
              zH = (null == rH ? void 0 : rH.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(SH), this._context.maxScrollY = Math.max(SH, null !== (HH = this._context.maxScrollY) && void 0 !== HH ? HH : 0), this._context.maxScrollHeight = Math.max(hH, null !== (BH = this._context.maxScrollHeight) && void 0 !== BH ? BH : 0), this._context.lastContentY = tH, this._context.maxContentY = Math.max(tH, null !== (LH = this._context.maxContentY) && void 0 !== LH ? LH : 0), this._context.maxContentHeight = Math.max(zH, null !== (AH = this._context.maxContentHeight) && void 0 !== AH ? AH : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const HH = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), HH
        }
        startMeasuringScrollPosition() {
          ah(JB, "scroll", this._updateScrollData, {
            capture: !0
          }), ah(JB, "scrollend", this._updateScrollData, {
            capture: !0
          }), ah(JB, "resize", this._updateScrollData)
        }
        scrollElement() {
          var HH;
          if (!this._scrollRoot) return null == JB || null === (HH = JB.document) || void 0 === HH ? void 0 : HH.documentElement;
          {
            const HH = vL(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const LH of HH) {
              var BH;
              const HH = null == JB || null === (BH = JB.document) || void 0 === BH ? void 0 : BH.querySelector(LH);
              if (HH) return HH
            }
          }
        }
        _scrollPosition(HH) {
          var BH, LH;
          const AH = "y" === HH ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const HH = this.scrollElement();
            return HH && HH[AH] || 0
          }
          return JB ? "y" === HH ? JB.scrollY || JB.pageYOffset || (null === (BH = JB.document) || void 0 === BH || null === (BH = BH.documentElement) || void 0 === BH ? void 0 : BH.scrollTop) || 0 : JB.scrollX || JB.pageXOffset || (null === (LH = JB.document) || void 0 === LH || null === (LH = LH.documentElement) || void 0 === LH ? void 0 : LH.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const DE = HH => HC(null == HH ? void 0 : HH.config.mask_personal_data_properties, null == HH ? void 0 : HH.config.custom_personal_data_properties, null == HH ? void 0 : HH.config.disable_capture_url_hashes);
    var wE = class {
        constructor(HH, BH, LH, AH) {
          this._onSessionIdCallback = HH => {
            const BH = this._getStored();
            if (BH && BH.sessionId === HH) return;
            const LH = {
              sessionId: HH,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [vB]: LH
            })
          }, this._instance = HH, this._sessionIdManager = BH, this._persistence = LH, this._sessionSourceParamGenerator = AH || DE, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[vB]
        }
        getSetOnceProps() {
          var HH;
          const BH = null === (HH = this._getStored()) || void 0 === HH ? void 0 : HH.props;
          return BH ? "r" in BH ? BC(BH, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: BH.referringDomain,
            $pathname: BH.initialPathName,
            utm_source: BH.utm_source,
            utm_campaign: BH.utm_campaign,
            utm_medium: BH.utm_medium,
            utm_content: BH.utm_content,
            utm_term: BH.utm_term
          } : {}
        }
        getSessionProps() {
          const HH = {};
          return Rh(Dh(this.getSetOnceProps()), ((BH, LH) => {
            "$current_url" === LH && (LH = "url"), HH[`$session_entry_${uL(LH)}`] = BH
          })), HH
        }
      },
      ZE = class {
        on(HH, BH) {
          return this._events[HH] || (this._events[HH] = []), this._events[HH].push(BH), () => {
            this._events[HH] = this._events[HH].filter((HH => HH !== BH))
          }
        }
        emit(HH, BH) {
          for (const LH of this._events[HH] || []) LH(BH);
          for (const LH of this._events["*"] || []) LH(HH, BH)
        }
        constructor() {
          this._events = {}
        }
      };
    const dE = gh("[SessionId]"),
      aE = 864e5;
    var sE = class {
      on(HH, BH) {
        return this._eventEmitter.on(HH, BH)
      }
      constructor(HH, BH, LH) {
        var AH;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new ZE, this._sessionHasBeenIdleTooLong = (HH, BH) => !(!IL(HH) || !IL(BH)) && Math.abs(HH - BH) > this.sessionTimeoutMs, !HH.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === HH.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = HH.config, this._persistence = HH.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = BH || Lt, this._windowIdGenerator = LH || Lt;
        const rH = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * aL(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, dE.createLogger("session_idle_timeout_seconds"), 1800), HH.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + rH + "_window_id", this._primary_window_exists_storage_key = "ph_" + rH + "_primary_window_exists", this._canUseSessionStorage()) {
          const HH = Vt._parse(this._window_id_storage_key),
            BH = Vt._parse(this._primary_window_exists_storage_key);
          HH && !BH ? this._windowId = HH : Vt._remove(this._window_id_storage_key), Vt._set(this._primary_window_exists_storage_key, !0)
        }(null === (AH = this._config.bootstrap) || void 0 === AH ? void 0 : AH.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(HH) {
        return VL(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(HH), this._sessionId && HH(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((BH => BH !== HH))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && Vt._is_supported()
      }
      _setWindowId(HH) {
        HH !== this._windowId && (this._windowId = HH, this._canUseSessionStorage() && Vt._set(this._window_id_storage_key, HH))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? Vt._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(HH) {
        const BH = this._lastPersistedActivityTimestamp;
        return !kL(BH) && !kL(HH) && 5e3 > Math.abs(HH - BH)
      }
      _setSessionId(HH, BH, LH) {
        const AH = BH !== this._sessionActivityTimestamp,
          rH = !(HH !== this._sessionId || LH !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = LH, this._sessionActivityTimestamp = BH, this._sessionId = HH, rH && !AH || rH && this._isActivityChangeBelowGranularity(BH) || (this._lastPersistedActivityTimestamp = BH, this._persistence.register({
          [pH]: [BH, HH, LH]
        }))
      }
      _useCrossTabRefreshHardening() {
        var HH;
        const BH = null === (HH = this._config) || void 0 === HH ? void 0 : HH.persistence_save_debounce_ms;
        return IL(BH) && BH > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(pH) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var HH;
        if (kL(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, BH, LH] = this._getSessionId();
        BH === this._sessionId && LH === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [pH]: [this._sessionActivityTimestamp, null !== (HH = this._sessionId) && void 0 !== HH ? HH : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [HH] = this._getSessionId(), BH = IL(HH) ? HH : 0, LH = IL(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(BH, LH)
      }
      _isSessionIdleAfterCrossTabRefresh(HH) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(HH, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const HH = this._persistence.props[pH];
        return vL(HH) && 2 === HH.length && HH.push(HH[0]), HH || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const LH = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const LH = (HH => {
              const BH = HH.replace(/-/g, "");
              if (32 !== BH.length) throw new Error("Not a valid UUID");
              if ("7" !== BH[12]) throw new Error("Not a UUIDv7");
              return parseInt(BH.substring(0, 12), 16)
            })(HH);
            return LH > BH + 6e4 ? void dE.error("Bootstrap sessionID cannot be in the future") : LH
          } catch (HH) {
            return void dE.error("Invalid sessionID in bootstrap", HH)
          }
        }(HH);
        return !VL(LH) && (BH ? this._pendingBootstrapSession = {
          sessionId: HH,
          sessionStartTimestamp: LH
        } : this._setSessionId(HH, (new Date).getTime(), LH), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && JB && (JB.removeEventListener(wB, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && Vt._remove(this._primary_window_exists_storage_key)
        }, ah(JB, wB, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const AH = BH || (new Date).getTime(),
          rH = this._sessionId;
        if (LH) this._lastCookieSyncTimestamp = AH;
        else if (kL(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > AH || AH - this._lastCookieSyncTimestamp >= 1e3) {
          var SH, hH;
          null === (SH = (hH = this._persistence).syncCookieProperties) || void 0 === SH || SH.call(hH), this._lastCookieSyncTimestamp = AH
        }
        let [, tH, zH] = this._getSessionId();
        const CH = !VL(rH) && tH !== rH,
          EH = this._freshestActivityTimestamp();
        let XH = this._getWindowId();
        const GH = this._pendingBootstrapSession,
          YH = !!GH && (GH.sessionStartTimestamp > AH + 6e4 || AH - GH.sessionStartTimestamp > aE),
          uH = GH ? YH : IL(zH) && Math.abs(AH - zH) > aE;
        let QH = !1,
          WH = CH,
          MH = !tH || !!GH;
        const xH = tH;
        let vH = !MH && !HH && this._sessionHasBeenIdleTooLong(AH, EH);
        if (vH && (vH = this._isSessionIdleAfterCrossTabRefresh(AH), vH || dE.info("cross-tab refresh kept the session alive", {
            sessionId: tH
          }), [, tH, zH] = this._getSessionId(), vH || (MH = !tH || !!GH)), MH || vH || uH) {
          WH = !1;
          const HH = GH && !YH;
          tH = HH ? GH.sessionId : this._sessionIdGenerator(), XH = this._windowIdGenerator(), dE.info("new session ID assigned", {
            sessionId: tH,
            windowId: XH,
            bootstrapped: !!HH,
            changeReason: {
              noSessionId: MH,
              activityTimeout: vH,
              sessionPastMaximumLength: uH
            }
          }), zH = HH ? GH.sessionStartTimestamp : AH, this._pendingBootstrapSession = void 0, QH = !0
        } else XH || (XH = this._windowIdGenerator(), QH = !0), WH = WH || tH !== xH, WH && (dE.info("adopted cross-tab session id", {
          sessionId: tH,
          windowId: XH
        }), QH = !0);
        const PH = IL(EH) && HH && !uH ? EH : AH,
          TH = IL(zH) ? zH : (new Date).getTime();
        this._setWindowId(XH), this._setSessionId(tH, PH, TH), HH || this._resetIdleTimer();
        const UH = {
          noSessionId: MH,
          activityTimeout: vH,
          sessionPastMaximumLength: uH,
          crossTabAdoption: WH
        };
        return QH && this._sessionIdChangedHandlers.forEach((HH => HH(tH, XH, UH))), {
          sessionId: tH,
          windowId: XH,
          sessionStartTimestamp: TH,
          changeReason: QH ? UH : void 0,
          lastActivityTimestamp: EH
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const HH = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: HH
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const JE = function(HH, BH) {
      if (!HH) return !1;
      const LH = HH.userAgent;
      if (LH && dL(LH, BH)) return !0;
      try {
        const LH = null == HH ? void 0 : HH.userAgentData;
        if ((null == LH ? void 0 : LH.brands) && LH.brands.some((HH => dL(null == HH ? void 0 : HH.brand, BH)))) return !0
      } catch (HH) {}
      return !!HH.webdriver
    };

    function iE() {
      return (iE = DL((function*() {
        const HH = null == pB ? void 0 : pB.userAgentData;
        if (null == HH ? void 0 : HH.getHighEntropyValues) try {
          const BH = yield HH.getHighEntropyValues(["model"]), LH = null == BH ? void 0 : BH.model;
          return OL(LH) && LH.length > 0 ? LH : void 0
        } catch (HH) {
          return void qh.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", HH)
        }
      }))).apply(this, arguments)
    }

    function pE(HH, BH) {
      let LH = `$survey_${BH}/${HH.id}`;
      return HH.current_iteration && HH.current_iteration > 0 && (LH = `$survey_${BH}/${HH.id}/${HH.current_iteration}`), LH
    }

    function yE(HH) {
      var BH;
      return !!(null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.events) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length)
    }
    const HX = (HH, BH) => {
        if (!(HH => {
            try {
              new RegExp(HH)
            } catch (HH) {
              return !1
            }
            return !0
          })(BH)) return !1;
        try {
          return new RegExp(BH).test(HH)
        } catch (HH) {
          return !1
        }
      },
      BX = HH => HH.toLowerCase(),
      LX = {
        exact: (HH, BH) => BH.some((BH => HH.some((HH => BH === HH)))),
        is_not: (HH, BH) => BH.every((BH => HH.every((HH => BH !== HH)))),
        regex: (HH, BH) => BH.some((BH => HH.some((HH => HX(BH, HH))))),
        not_regex: (HH, BH) => BH.every((BH => HH.every((HH => !HX(BH, HH))))),
        icontains: (HH, BH) => BH.map(BX).some((BH => HH.map(BX).some((HH => BH.includes(HH))))),
        not_icontains: (HH, BH) => BH.map(BX).every((BH => HH.map(BX).every((HH => !BH.includes(HH))))),
        gt: (HH, BH) => BH.some((BH => {
          const LH = parseFloat(BH);
          return !isNaN(LH) && HH.some((HH => LH > parseFloat(HH)))
        })),
        lt: (HH, BH) => BH.some((BH => {
          const LH = parseFloat(BH);
          return !isNaN(LH) && HH.some((HH => LH < parseFloat(HH)))
        }))
      };

    function AX(HH, BH) {
      return !HH || Object.entries(HH).every((HH => {
        let [LH, AH] = HH;
        const rH = null == BH ? void 0 : BH[LH];
        if (null == rH) return !1;
        const SH = LX[AH.operator];
        return !!SH && SH(AH.values.map(String), [String(rH)])
      }))
    }

    function rX(HH, BH, LH) {
      return gz({
        distinct_id: HH,
        userPropertiesToSet: BH,
        userPropertiesToSetOnce: LH
      })
    }
    const SX = "custom",
      hX = "i.posthog.com",
      tX = /^\/static\//,
      zX = ["/s/", "/e/", "/i/"];
    var CX = class {
      constructor(HH) {
        this._regionCache = {}, this.instance = HH
      }
      get apiHost() {
        const HH = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === HH ? "https://us.i.posthog.com" : HH
      }
      get flagsApiHost() {
        const HH = this.instance.config.flags_api_host;
        return HH ? HH.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var HH;
        let BH = null === (HH = this.instance.config.ui_host) || void 0 === HH ? void 0 : HH.replace(/\/$/, "");
        return BH || (BH = this.apiHost.replace(`.${hX}`, ".posthog.com")), "https://app.posthog.com" === BH ? "https://us.posthog.com" : BH
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : SX), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(HH) {
        if (!tX.test(HH)) return;
        const BH = this.instance.config.asset_host;
        return "string" == typeof BH && BH.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(HH) {
        const BH = Nz(HH);
        return BH ? BH.protocol + "//" + BH.host + BH.pathname : void 0
      }
      _prepareEndpoint(HH, BH, LH) {
        if ("ui" === HH) return LH;
        let AH = LH;
        const rH = this.instance.config.rewriteRequestPath;
        if (rH) {
          var SH;
          const HH = (null === (SH = Nz(LH)) || void 0 === SH ? void 0 : SH.href) || LH;
          AH = rH(new URL(HH)).toString()
        }
        if (rH && "api" === HH && zX.some((HH => 0 === BH.indexOf(HH)))) {
          const HH = this._urlKey(AH);
          if (HH) {
            const BH = this.apiHost;
            let LH = this._ingestionEndpoints;
            (null == LH ? void 0 : LH.apiHost) === BH && LH.rewriteRequestPath === rH || (LH = {
              apiHost: BH,
              rewriteRequestPath: rH,
              urls: new Set
            }, this._ingestionEndpoints = LH), LH.urls.add(HH)
          }
        }
        return AH
      }
      isIngestionEndpoint(HH) {
        const BH = this._ingestionEndpoints,
          LH = this._urlKey(HH);
        return (null == BH ? void 0 : BH.apiHost) === this.apiHost && BH.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!LH && BH.urls.has(LH)
      }
      endpointFor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (BH && (BH = "/" === BH[0] ? BH : `/${BH}`), "ui" === HH) return this._prepareEndpoint(HH, BH, this.uiHost + BH);
        if ("flags" === HH) return this._prepareEndpoint(HH, BH, this.flagsApiHost + BH);
        if ("assets" === HH) {
          const LH = this._staticAssetHostOverride(BH);
          if (LH) return this._prepareEndpoint(HH, BH, `${LH}${BH}`)
        }
        if (this.region === SX) return this._prepareEndpoint(HH, BH, this.apiHost + BH);
        const LH = hX + BH;
        switch (HH) {
          case "assets":
            return this._prepareEndpoint(HH, BH, `https://${this.region}-assets.${LH}`);
          case "api":
            return this._prepareEndpoint(HH, BH, `https://${this.region}.${LH}`)
        }
      }
    };
    const EX = gh("[Surveys]"),
      XX = HH => {
        try {
          const BH = (HH => ((HH, BH) => `seenSurvey_${function(HH){return HH.current_iteration&&HH.current_iteration>0?`${HH.id}_${HH.current_iteration}`:HH.id}(BH)}`)(0, HH))(HH);
          if (localStorage.getItem(BH)) return;
          localStorage.setItem(BH, "true")
        } catch (HH) {
          EX.error("Failed to persist survey seen state", HH)
        }
      },
      GX = [vC, TC, PC],
      YX = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: oC
      },
      uX = gh("[PostHog ExternalIntegrations]"),
      QX = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var WX = class {
      constructor(HH) {
        this._instance = HH
      }
      _loadScript(HH, BH) {
        var LH, AH;
        null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, HH, (HH => {
          if (HH) return uX.error("failed to load script", HH);
          BH()
        }))
      }
      startIfEnabledOrStop() {
        var HH;
        for (const [rH, SH] of Object.entries(null !== (HH = this._instance.config.integrations) && void 0 !== HH ? HH : {})) {
          var BH, LH, AH;
          SH && !(null === (BH = tL.__PosthogExtensions__) || void 0 === BH || null === (BH = BH.integrations) || void 0 === BH ? void 0 : BH[rH]) && this._loadScript(QX[rH], (() => {
            var HH;
            null === (HH = tL.__PosthogExtensions__) || void 0 === HH || null === (HH = HH.integrations) || void 0 === HH || null === (HH = HH[rH]) || void 0 === HH || HH.start(this._instance)
          })), !SH && (null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (LH = LH.integrations) || void 0 === LH ? void 0 : LH[rH]) && (null === (AH = tL.__PosthogExtensions__) || void 0 === AH || null === (AH = AH.integrations) || void 0 === AH || null === (AH = AH[rH]) || void 0 === AH || AH.stop())
        }
      }
    };
    const MX = "autocapture",
      xX = "featureFlags",
      vX = "logs",
      PX = "surveys";
    var TX = class {
        constructor(HH) {
          this._instance = HH
        }
        initialize() {}
        get(HH) {
          const BH = this._instance.persistence;
          if ("string" == typeof HH) return null == BH ? void 0 : BH.get_property(HH);
          const LH = {};
          for (const AH of HH) {
            const HH = null == BH ? void 0 : BH.get_property(AH);
            VL(HH) || (LH[AH] = HH)
          }
          return LH
        }
        set(HH, BH) {
          var LH;
          null === (LH = this._instance.persistence) || void 0 === LH || LH.register("string" == typeof HH ? {
            [HH]: BH
          } : HH)
        }
        remove(HH) {
          var BH;
          null === (BH = this._instance.persistence) || void 0 === BH || BH.unregister(HH)
        }
      },
      UX = class {
        constructor(HH) {
          this.instance = HH, this._logger = qh, this.kv = new TX(HH), this.onEvent = HH => fC(this.instance._addCaptureHook(((BH, LH) => {
            if (LH) try {
              HH({
                event: BH,
                properties: LH.properties
              })
            } catch (HH) {
              this._logger.error("Browser extension event listener failed", HH)
            }
          }))), this.onRemoteConfig = HH => {
            const BH = BH => {
                try {
                  HH(BH)
                } catch (HH) {
                  this._logger.error("Browser extension remote config listener failed", HH)
                }
              },
              LH = this.instance._internalEventEmitter.on("extensionsRemoteConfig", BH);
            return this.instance._lastRemoteConfig && BH(this.instance._lastRemoteConfig), fC(LH)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var HH;
          return null !== (HH = this.instance.get_property("$device_id")) && void 0 !== HH ? HH : this.distinctId
        }
        get deviceId() {
          const HH = this.instance.get_property(OH);
          return "string" == typeof HH ? HH : void 0
        }
        get library() {
          return {
            name: SH.LIB_NAME,
            version: SH.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var HH, BH;
          return null !== (HH = null === (BH = this.instance.persistence) || void 0 === BH ? void 0 : BH.get_initial_props()) && void 0 !== HH ? HH : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var HH, BH, LH, AH, rH;
            const SH = null === (HH = this.instance.sessionManager) || void 0 === HH ? void 0 : HH.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (BH = null == SH ? void 0 : SH.sessionId) && void 0 !== BH ? BH : "",
              windowId: null !== (LH = null == SH ? void 0 : SH.windowId) && void 0 !== LH ? LH : "",
              sessionStartTimestamp: null !== (AH = null == SH ? void 0 : SH.sessionStartTimestamp) && void 0 !== AH ? AH : 0,
              lastActivityTimestamp: null !== (rH = null == SH ? void 0 : SH.lastActivityTimestamp) && void 0 !== rH ? rH : 0
            }
          } catch (HH) {
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
          return PL(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(HH) {
          let BH;
          switch (HH) {
            case xX:
            case "featureFlagsCommon":
              BH = this.instance.featureFlags;
              break;
            case vX:
              BH = this.instance.logs;
              break;
            case PX:
              BH = this.instance.surveys;
              break;
            case MX:
              BH = this.instance.autocapture
          }
          return BH
        }
        capture(HH, BH, LH) {
          LH ? this.instance.capture(HH, BH, {
            timestamp: LH.timestamp,
            uuid: LH.uuid,
            $set: LH.set,
            $set_once: LH.setOnce
          }) : this.instance.capture(HH, BH)
        }
        registerDynamicEventProperties(HH) {
          return fC(this.instance._registerExtensionEventProperties(HH))
        }
        sendRequest(HH) {
          var BH = this;
          return DL((function*(HH) {
            let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var AH;
            const rH = null !== (AH = LH.target) && void 0 !== AH ? AH : "api",
              SH = BH.instance.requestRouter.endpointFor(rH, HH),
              hH = "api" === rH && "/i/v1/logs" === HH,
              tH = {
                method: LH.method,
                url: LH.query ? VE(SH, LH.query) : SH,
                data: LH.body,
                headers: LH.headers,
                timeout: LH.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: LH.transport,
                compression: LH.compression,
                compressionFallback: "flags" === LH.target && "best-available" === LH.compression ? CL.Base64 : void 0,
                timestampMode: LH.sentAt
              };
            return hH && (tH.batchKey = "logs"), "sendBeacon" === LH.transport ? (BH.instance._send_request(tH), {
              statusCode: 202
            }) : new Promise((HH => {
              tH.callback = HH, BH.instance._send_request(tH)
            }))
          })).apply(this, arguments)
        }
      };
    const VX = {};
    let OX = 0;
    const bX = () => {},
      kX = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      mX = "Surveys module not available",
      oX = "sanitize_properties is deprecated. Use before_send instead",
      IX = "Invalid value for property_denylist config: ",
      fX = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      lX = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      KX = HH => "$" === HH.charAt(0) && !GL(lX, HH),
      cX = /^[A-Za-z0-9_-]{1,400}$/,
      eX = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      qX = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      gX = ["token", "distinct_id", kB],
      NX = "posthog",
      RX = HH => {
        const BH = {};
        return HH && "unset" !== HH ? ("2025-11-30" > HH || (BH.strictMinimumDuration = !0), "2026-05-30" > HH || (BH.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > HH || (BH.streamNetworkBody = !0), "2026-08-30" > HH || (BH.captureJsonLd = !0), BH) : BH
      },
      jX = HH => {
        var BH;
        return xr({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: dh(null == yB ? void 0 : yB.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: bX,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != HH ? HH : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: HL && OL(null == HL ? void 0 : HL.search) && -1 !== HL.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == JB || null === (BH = JB.location) || void 0 === BH ? void 0 : BH.protocol),
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
          on_request_error(HH) {
            qh.error("Bad HTTP status: " + HH.statusCode + " " + HH.text)
          },
          get_device_id: HH => HH,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: DB,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: bX
        }, (HH => ({
          rageclick: HH && HH >= "2026-05-30" ? {
            content_ignorelist: wt,
            ignore_text_selection: !0
          } : !HH || "2025-11-30" > HH || {
            content_ignorelist: !0
          },
          capture_pageview: !HH || "2025-05-24" > HH || "history_change",
          session_recording: RX(HH),
          external_scripts_inject_target: HH && HH >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: HH && HH >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: HH && HH >= "2026-05-30" ? 250 : 0,
          split_storage: !(!HH || "2026-05-30" > HH),
          detect_google_search_app: !(!HH || "2026-05-30" > HH),
          disable_capture_url_hashes: !(!HH || "2026-06-25" > HH),
          cookieWinsOnConflict: !(!HH || "unset" === HH || "2026-08-29" > HH)
        }))(HH))
      },
      nX = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      FX = HH => {
        const BH = {};
        for (const [rH, SH] of nX) VL(HH[rH]) || (BH[SH] = HH[rH]);
        const LH = jh({}, BH, HH),
          AH = HH.__preview_external_dependency_versioned_paths;
        return VL(AH) || (VL(HH.strict_script_versioning) && (LH.strict_script_versioning = !!AH), OL(AH) && VL(HH.asset_host) && (LH.asset_host = AH)), vL(HH.property_blacklist) && (VL(HH.property_denylist) ? LH.property_denylist = HH.property_blacklist : vL(HH.property_denylist) ? LH.property_denylist = [...HH.property_blacklist, ...HH.property_denylist] : qh.error(IX + HH.property_denylist)), LH
      };
    var DX = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(HH) {
          qh.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = HH
        }
      },
      wX = class HH {
        _removeExtension(HH) {
          if (!HH) return;
          const BH = this._extensions.indexOf(HH); - 1 !== BH && this._extensions.splice(BH, 1)
        }
        _replaceExtension(HH, BH) {
          var LH;
          return this._removeExtension(HH), this._extensions.push(BH), null === (LH = BH.initialize) || void 0 === LH || LH.call(BH), BH
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const HH = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!HH && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let BH, LH, AH;
          HH ? (BH = `persistence is set to '${this.config.persistence}'`, LH = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", AH = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (BH = "persistence is disabled (disable_persistence is true)", LH = "on every page load", AH = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${BH} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${LH}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${AH}`)
        }
        _syncCookielessIdentity() {
          const HH = this.persistence;
          if (!HH || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || HH.load(!0);
          const BH = this.get_distinct_id();
          if (!BH || "$posthog_cookieless" === BH) {
            const BH = this.config.get_device_id(Lt());
            this.register({
              distinct_id: BH,
              $device_id: BH
            }), HH.set_property(xB, nB)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var HH, BH;
          return null !== (HH = null === (BH = this.featureFlags) || void 0 === BH ? void 0 : BH.hasLoadedFlags) && void 0 !== HH && HH
        }
        get flagsEndpointWasHit() {
          var HH, BH;
          return null !== (HH = null === (BH = this.featureFlags) || void 0 === BH ? void 0 : BH.hasLoadedFlags) && void 0 !== HH && HH
        }
        constructor() {
          var BH;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new DX, this._personProcessingSetOncePropertiesSent = !1, this.version = SH.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new ZE, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = jX(), this.SentryIntegration = kz, this.sentryIntegration = HH => function(HH, BH) {
            const LH = bz(HH, BH);
            return {
              name: Oz,
              processEvent: HH => LH(HH)
            }
          }(this, HH), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new FE(this), this.pageViewManager = new mz(this), this.rateLimiter = new qC(this), this.requestRouter = new CX(this), this.consent = new Ot(this), this.externalIntegrations = new WX(this);
          const LH = null !== (BH = HH.__defaultExtensionClasses) && void 0 !== BH ? BH : {};
          this.featureFlags = LH.featureFlags && new LH.featureFlags(this), this.toolbar = LH.toolbar && new LH.toolbar(this), this.surveys = LH.surveys && new LH.surveys(this), this.conversations = LH.conversations && new LH.conversations(this), this.logs = LH.logs && new LH.logs(this), this.metrics = LH.metrics && new LH.metrics(this), this.experiments = LH.experiments && new LH.experiments(this), this.exceptions = LH.exceptions && new LH.exceptions(this), this.people = {
            set: (HH, BH, LH) => {
              const AH = OL(HH) ? {
                [HH]: BH
              } : HH;
              this.setPersonProperties(AH), null == LH || LH({})
            },
            set_once: (HH, BH, LH) => {
              const AH = OL(HH) ? {
                [HH]: BH
              } : HH;
              this.setPersonProperties(void 0, AH), null == LH || LH({})
            }
          }, this.on("eventCaptured", (HH => qh.info(`send "${null==HH?void 0:HH.event}"`, HH)))
        }
        init(BH, LH, AH) {
          if (AH && AH !== NX) {
            var rH;
            const SH = null !== (rH = VX[AH]) && void 0 !== rH ? rH : new HH;
            return SH._init(BH, LH, AH), VX[AH] = SH, VX[NX][AH] = SH, SH
          }
          return this._init(BH, LH, AH)
        }
        _init(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 ? arguments[2] : void 0;
          var AH, rH, hH;
          const tH = OL(HH) ? HH.trim() : "";
          if (!tH) return qh.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var zH;
          if (this.__loaded) return tH !== (null === (zH = this.config) || void 0 === zH ? void 0 : zH.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${tH}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = jX(BH.defaults), BH.debug = this._checkLocalStorageForDebug(BH.debug), this._originalUserConfig = BH, this._triggered_notifs = [], BH.person_profiles ? this._initialPersonProfilesConfig = BH.person_profiles : BH.process_person && (this._initialPersonProfilesConfig = BH.process_person);
          const CH = jX(BH.defaults),
            EH = FX(BH),
            XH = jh({}, CH, EH, {
              name: LH,
              token: tH
            });
          TL(CH.rageclick) && TL(EH.rageclick) && (XH.rageclick = jh({}, CH.rageclick, EH.rageclick)), TL(CH.session_recording) && TL(EH.session_recording) && (XH.session_recording = jh({}, CH.session_recording, EH.session_recording)), this.set_config(XH), this.config.on_xhr_error && qh.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = BH.disable_compression ? void 0 : WC.GZipJS;
          const GH = this._is_persistence_disabled(),
            YH = !this._inCookielessMode();
          if (this.persistence = new QC(this.config, GH, !0, YH), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new QC(xr(xr({}, this.config), {}, {
              persistence: "sessionStorage"
            }), GH, !1, YH), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !GH && Vt._is_supported()) {
            const HH = Vt._parse(this._sessionRegisteredPropertiesStorageKey);
            vL(HH) && HH.forEach((HH => {
              OL(HH) && this._sessionRegisteredPropKeys.add(HH)
            }))
          } else Vt._remove(this._sessionRegisteredPropertiesStorageKey);
          const uH = xr({}, this.persistence.props),
            QH = xr({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new RE(((HH, BH) => this._send_retriable_request(HH, BH)), this.config.request_queue_config), this._retryQueue = new nE(this), this.__request_queue = [];
          const WH = this._inCookielessMode();
          WH || (this.sessionManager = new sE(this), this.sessionPropsManager = new wE(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((HH, BH, LH) => {
            ((null == LH ? void 0 : LH.activityTimeout) || (null == LH ? void 0 : LH.sessionPastMaximumLength) || (null == LH ? void 0 : LH.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (qh.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(WH)
          }), 0)) : (qh.info("Initializing extensions synchronously"), this._initExtensions(WH)), SH.DEBUG = SH.DEBUG || this.config.debug, SH.DEBUG && qh.info("Starting in debug mode", {
            this: this,
            config: BH,
            thisC: xr({}, this.config),
            p: uH,
            s: QH
          }), this.config.identity_distinct_id && !(null === (AH = BH.bootstrap) || void 0 === AH ? void 0 : AH.distinctID) && (BH.bootstrap = xr(xr({}, BH.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const MH = null === (rH = BH.bootstrap) || void 0 === rH ? void 0 : rH.distinctID;
          if (this._hasStableInitialDistinctId = !!MH && !bL(MH), null === (hH = BH.bootstrap) || void 0 === hH ? void 0 : hH.distinctID) {
            const HH = BH.bootstrap.distinctID,
              LH = this.get_distinct_id(),
              AH = this.persistence.get_property(xB);
            if (BH.bootstrap.isIdentifiedID && null != LH && LH !== HH && "anonymous" === AH) this.identify(HH);
            else if (BH.bootstrap.isIdentifiedID && null != LH && LH !== HH && "identified" === AH) qh.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const LH = this.config.get_device_id(Lt()),
                AH = BH.bootstrap.isIdentifiedID ? LH : HH;
              this.persistence.set_property(xB, BH.bootstrap.isIdentifiedID ? FB : nB), this.register({
                distinct_id: HH,
                $device_id: AH
              })
            }
          }
          if (WH) this.register_once({
            distinct_id: bB,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const HH = this.config.get_device_id(Lt());
            this.register_once({
              distinct_id: HH,
              $device_id: HH
            }, ""), this.persistence.set_property(xB, nB)
          }
          return ah(JB, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), ah(JB, "pageshow", (() => {
            var HH;
            this._isPageUnloading = !1, this._isShutdown || null === (HH = this._retryQueue) || void 0 === HH || HH.resume()
          })), BH.segment ? Vz(this, (() => this._loaded())) : this._loaded(), PL(this.config._onCapture) && this.config._onCapture !== bX && (qh.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (HH => this.config._onCapture(HH.event, HH)))), this.config.ip && qh.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return iE.apply(this, arguments)
          }().then((HH => {
            HH && this.register({
              [bH]: HH
            })
          })).catch(bX), this
        }
        _isSharedExtension(HH) {
          const BH = HH;
          return OL(BH.name) && PL(BH.setup)
        }
        _enrollExtension(HH, BH) {
          var LH = this;
          this._isSharedExtension(HH) ? BH.push(DL((function*() {
            try {
              yield HH.setup(LH._getBrowserClientAdapter())
            } catch (LH) {
              qh.error(`Failed to set up extension "${HH.name}"`, LH);
              try {
                var BH;
                yield null === (BH = HH.dispose) || void 0 === BH ? void 0 : BH.call(HH)
              } catch (BH) {
                qh.error(`Failed to dispose extension "${HH.name}"`, BH)
              }
            }
          }))) : this._extensions.push(HH)
        }
        _enrollFeatureFlags() {
          var BH, LH, AH, rH = this;
          const SH = null !== (BH = null === (LH = this.config.__extensionClasses) || void 0 === LH ? void 0 : LH.featureFlags) && void 0 !== BH ? BH : null === (AH = HH.__defaultExtensionClasses) || void 0 === AH ? void 0 : AH.featureFlags;
          var hH, tH, zH;
          if (SH)
            if (this.featureFlags && this.featureFlags instanceof SH || (null === (hH = this._featureFlagsReloadingUnsubscribe) || void 0 === hH || hH.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new SH(this)), PL(this.featureFlags.onReloading) && PL(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const HH = this.featureFlags;
                DL((function*() {
                  try {
                    yield HH.setup(rH._getBrowserClientAdapter())
                  } catch (BH) {
                    qh.error("Failed to set up feature flags", BH);
                    const AH = rH._featureFlagsReloadingUnsubscribe;
                    rH._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == AH || AH()
                    } catch (HH) {
                      qh.error("Failed to unsubscribe feature flag reloading", HH)
                    }
                    try {
                      yield HH.dispose()
                    } catch (HH) {
                      qh.error("Failed to dispose feature flags", HH)
                    }
                  }
                }))()
              }
            } else null === (tH = (zH = this.featureFlags).initialize) || void 0 === tH || tH.call(zH)
        }
        _initExtensions(BH) {
          const LH = performance.now(),
            AH = xr(xr({}, HH.__defaultExtensionClasses), this.config.__extensionClasses),
            rH = [];
          var SH, hH, tH, zH, CH, EH, XH, GH;
          AH.exceptions && this._extensions.push(this.exceptions = null !== (SH = this.exceptions) && void 0 !== SH ? SH : new AH.exceptions(this)), AH.historyAutocapture && this._extensions.push(this.historyAutocapture = new AH.historyAutocapture(this)), AH.tracingHeaders && this._extensions.push(this.tracingHeaders = new AH.tracingHeaders(this)), AH.siteApps && this._extensions.push(this.siteApps = new AH.siteApps(this)), AH.sessionRecording && !BH && this._extensions.push(this.sessionRecording = new AH.sessionRecording(this)), this.config.disable_scroll_properties || rH.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), AH.autocapture && this._enrollExtension(this.autocapture = new AH.autocapture(this), rH), AH.surveys && this._enrollExtension(this.surveys = null !== (hH = this.surveys) && void 0 !== hH ? hH : new AH.surveys(this), rH), AH.logs && this._enrollExtension(this.logs = null !== (tH = this.logs) && void 0 !== tH ? tH : new AH.logs(this), rH), AH.metrics && this._extensions.push(this.metrics = null !== (zH = this.metrics) && void 0 !== zH ? zH : new AH.metrics(this)), AH.conversations && this._extensions.push(this.conversations = null !== (CH = this.conversations) && void 0 !== CH ? CH : new AH.conversations(this)), AH.productTours && this._extensions.push(this.productTours = new AH.productTours(this)), AH.heatmaps && this._extensions.push(this.heatmaps = new AH.heatmaps(this)), AH.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new AH.webVitalsAutocapture(this)), AH.exceptionObserver && this._extensions.push(this.exceptionObserver = new AH.exceptionObserver(this)), AH.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new AH.deadClicksAutocapture(this, Pz)), AH.toolbar && this._extensions.push(this.toolbar = null !== (EH = this.toolbar) && void 0 !== EH ? EH : new AH.toolbar(this)), AH.experiments && this._extensions.push(this.experiments = null !== (XH = this.experiments) && void 0 !== XH ? XH : new AH.experiments(this)), AH.webMCP && this._extensions.push(this.webMCP = null !== (GH = this.webMCP) && void 0 !== GH ? GH : new AH.webMCP(this)), this._extensions.forEach((HH => {
            HH.initialize && rH.push((() => {
              var BH;
              null === (BH = HH.initialize) || void 0 === BH || BH.call(HH)
            }))
          })), rH.push((() => {
            if (this._pendingRemoteConfig) {
              const HH = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((BH => {
                var LH;
                return null === (LH = BH.onRemoteConfig) || void 0 === LH ? void 0 : LH.call(BH, HH)
              }))
            }
          })), this._processInitTaskQueue(rH, LH)
        }
        _processInitTaskQueue(HH, BH) {
          for (; HH.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - BH >= 30 && HH.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(HH, BH)
            }), 0));
            const LH = HH.shift();
            if (LH) try {
              LH()
            } catch (HH) {
              qh.error("Error initializing extension:", HH)
            }
          }
          const LH = Math.round(performance.now() - BH);
          this.register_for_session({
            [mB]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [oB]: LH
          }), this.config.__preview_deferred_init_extensions && qh.info(`PostHog extensions initialized (${LH}ms)`)
        }
        _onRemoteConfig(HH) {
          if (!yB || !yB.body) return qh.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(HH)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = HH), this._lastRemoteConfig = HH, this.compression = void 0, HH.ok) {
            var BH;
            const LH = HH.config;
            LH.supportedCompression && !this.config.disable_compression && (this.compression = GL(LH.supportedCompression, WC.GZipJS) ? WC.GZipJS : GL(LH.supportedCompression, WC.Base64) ? WC.Base64 : void 0), (null === (BH = LH.analytics) || void 0 === BH ? void 0 : BH.endpoint) && (this.analyticsDefaultEndpoint = LH.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : DB
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", HH), this._extensions.forEach((BH => {
            var LH;
            return null === (LH = BH.onRemoteConfig) || void 0 === LH ? void 0 : LH.call(BH, HH)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (HH) {
            qh.critical("`loaded` function failed", HH)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == HL ? void 0 : HL.hostname)) {
            const HH = HL.hostname,
              BH = this.config.internal_or_test_user_hostname;
            ("string" == typeof BH ? HH === BH : BH.test(HH)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new NC(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var HH;
          this.is_capturing() && this.config.request_batching && (null === (HH = this._requestQueue) || void 0 === HH || HH.enable())
        }
        _dom_loaded() {
          this.is_capturing() && Nh(this.__request_queue, (HH => this._send_retriable_request(HH))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var HH, BH, LH, AH, rH, SH;
          this._isPageUnloading = !0, null === (HH = this.surveys) || void 0 === HH || null === (BH = HH.handlePageUnload) || void 0 === BH || BH.call(HH), null === (LH = this.metrics) || void 0 === LH || LH.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(dB), null === (AH = this.logs) || void 0 === AH || AH.flushLogs("sendBeacon"), null === (rH = this._requestQueue) || void 0 === rH || rH.unload(), null === (SH = this._retryQueue) || void 0 === SH || SH.unload()) : this._shouldCapturePageleave() && this.capture(dB, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(HH) {
          NE(this, HH)
        }
        _send_retriable_request(HH, BH) {
          this._retryQueue ? this._retryQueue.retriableRequest(HH, BH) : this._send_request(BH ? xr(xr({}, HH), {}, {
            transport: BH
          }) : HH)
        }
        _execute_array(HH) {
          OX++;
          try {
            let BH;
            const LH = [],
              AH = [],
              rH = [];
            Nh(HH, (HH => {
              if (HH)
                if (BH = HH[0], vL(BH)) rH.push(HH);
                else if (PL(HH)) try {
                HH.call(this)
              } catch (BH) {
                qh.error("Error executing queued PostHog call", HH, BH)
              } else vL(HH) && "alias" === BH ? LH.push(HH) : vL(HH) && -1 !== BH.indexOf("capture") && PL(this[BH]) ? rH.push(HH) : AH.push(HH)
            }));
            const SH = function(HH, BH) {
              Nh(HH, (function(HH) {
                try {
                  if (vL(HH[0])) {
                    let LH = BH;
                    Rh(HH, (function(HH) {
                      LH = LH[HH[0]].apply(LH, HH.slice(1))
                    }))
                  } else BH[HH[0]].apply(BH, HH.slice(1))
                } catch (BH) {
                  qh.error("Error executing queued PostHog call", HH, BH)
                }
              }))
            };
            SH(LH, this), SH(AH, this), SH(rH, this)
          } finally {
            OX--
          }
        }
        push(BH) {
          if (OX > 0 && vL(BH) && OL(BH[0])) {
            const LH = HH.prototype[BH[0]];
            PL(LH) && LH.apply(this, BH.slice(1))
          } else this._execute_array([BH])
        }
        get _facebookClickIdChannel() {
          return {
            property: oH,
            persistenceKey: IH,
            cookieName: "_fbc",
            pattern: eX,
            register: (HH, BH) => {
              var LH;
              return null === (LH = this.persistence) || void 0 === LH ? void 0 : LH.register({
                [IH]: {
                  value: HH,
                  delivered: BH
                }
              })
            },
            unregister: () => {
              var HH;
              return null === (HH = this.persistence) || void 0 === HH ? void 0 : HH.unregister(IH)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: fH,
            persistenceKey: lH,
            cookieName: "_fbp",
            pattern: qX,
            register: (HH, BH) => {
              var LH;
              return null === (LH = this.persistence) || void 0 === LH ? void 0 : LH.register({
                [lH]: {
                  value: HH,
                  delivered: BH
                }
              })
            },
            unregister: () => {
              var HH;
              return null === (HH = this.persistence) || void 0 === HH ? void 0 : HH.unregister(lH)
            }
          }
        }
        _getPersistedMetaIdentifier(HH) {
          var BH;
          const LH = null === (BH = this.persistence) || void 0 === BH ? void 0 : BH.get_property(HH.persistenceKey);
          return OL(LH) && HH.pattern.test(LH) ? {
            value: LH,
            delivered: !1
          } : TL(LH) && OL(LH.value) && HH.pattern.test(LH.value) ? {
            value: LH.value,
            delivered: !0 === LH.delivered
          } : void 0
        }
        _storeMetaIdentifier(HH, BH, LH) {
          return BH === (null == LH ? void 0 : LH.value) ? {
            value: BH,
            pending: !LH.delivered
          } : (HH.register(BH, !1), {
            value: BH,
            pending: !0
          })
        }
        _readMetaCookie(HH) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const BH = Jh(HH.cookieName);
          return OL(BH) && HH.pattern.test(BH) ? BH : void 0
        }
        _updateFacebookClickId(HH, BH, LH, AH) {
          if (!this.persistence) return;
          const rH = this._facebookClickIdChannel;
          this.persistence.refreshKey(rH.persistenceKey);
          const SH = this._getPersistedMetaIdentifier(rH);
          if (AH) return void rH.unregister();
          if (LH) return OL(BH) && eX.test(BH) ? this._storeMetaIdentifier(rH, BH, SH) : void rH.unregister();
          const hH = OL(HH) && cX.test(HH) ? HH : void 0,
            tH = this._readMetaCookie(rH);
          return tH && ((HH, BH, LH) => {
            const AH = HH.split(".");
            if (BH) return AH[3] === BH;
            if (!LH) return !0;
            const rH = LH.value.split(".");
            return AH[3] === rH[3] || Number(AH[2]) > Number(rH[2])
          })(tH, hH, SH) ? this._storeMetaIdentifier(rH, tH, SH) : hH ? (null == SH ? void 0 : SH.value.split(".")[3]) === hH ? {
            value: SH.value,
            pending: !SH.delivered
          } : this._storeMetaIdentifier(rH, `fb.1.${Date.now()}.${hH}`, SH) : SH ? {
            value: SH.value,
            pending: !SH.delivered
          } : void 0
        }
        _updateFacebookBrowserId(HH, BH, LH) {
          if (!this.persistence) return;
          const AH = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(AH.persistenceKey);
          const rH = this._getPersistedMetaIdentifier(AH);
          if (LH) return void AH.unregister();
          if (BH) return OL(HH) && qX.test(HH) ? this._storeMetaIdentifier(AH, HH, rH) : void AH.unregister();
          const SH = this._readMetaCookie(AH);
          return SH ? this._storeMetaIdentifier(AH, SH, rH) : rH ? {
            value: rH.value,
            pending: !rH.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(HH, BH) {
          if (!this.persistence) return;
          this.persistence.refreshKey(HH.persistenceKey);
          const LH = this._getPersistedMetaIdentifier(HH);
          (null == LH ? void 0 : LH.value) !== BH || LH.delivered || HH.register(BH, !0)
        }
        capture(HH, BH, LH) {
          var AH, rH;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void qh.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (VL(HH) || !OL(HH)) return void qh.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === HH && this._inCookielessMode()) return;
          const SH = !this.config.opt_out_useragent_filter && this._is_bot();
          if (SH && !this.config.__preview_capture_bot_pageviews) return;
          const hH = (null == LH ? void 0 : LH.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == hH ? void 0 : hH.isRateLimited) return void qh.critical("This capture call is ignored due to client rate limiting.");
          let tH;
          (null == BH ? void 0 : BH.$current_url) && !OL(null == BH ? void 0 : BH.$current_url) && (qh.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == BH || delete BH.$current_url), "$exception" !== HH || (null == LH ? void 0 : LH._originatedFromCaptureException) || qh.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (tH = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const zH = new Date,
            CH = (null == LH ? void 0 : LH.timestamp) || zH,
            EH = zr(null == LH ? void 0 : LH.uuid, Lt);
          let XH = {
            uuid: EH,
            event: HH,
            properties: this.calculateEventProperties(HH, BH || {}, CH, EH)
          };
          "$pageview" === HH && this.config.__preview_capture_bot_pageviews && SH && (XH.event = "$bot_pageview", XH.properties.$browser_type = "bot"), hH && (XH.properties.$lib_rate_limit_remaining_tokens = hH.remainingTokens);
          const GH = "$feature_flag_called" === HH && !1 === XH.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == LH ? void 0 : LH.$set) && !GH && (XH.$set = null == LH ? void 0 : LH.$set);
          const YH = TL(null == BH ? void 0 : BH.$set) ? BH.$set : void 0,
            uH = vL(null == BH ? void 0 : BH.$unset) ? BH.$unset : [],
            QH = (null == LH ? void 0 : LH.$unset) || [],
            WH = HH => {
              var BH;
              const AH = !!(null == LH ? void 0 : LH.$set) && HH in LH.$set;
              return {
                hasProvided: AH || !!YH && HH in YH,
                provided: AH ? null == LH || null === (BH = LH.$set) || void 0 === BH ? void 0 : BH[HH] : null == YH ? void 0 : YH[HH],
                unset: -1 !== uH.indexOf(HH) || -1 !== QH.indexOf(HH)
              }
            },
            MH = WH(oH),
            xH = WH(fH),
            vH = [{
              channel: this._facebookClickIdChannel,
              hasProvided: MH.hasProvided,
              update: this._updateFacebookClickId(null == tH ? void 0 : tH.fbclid, MH.provided, MH.hasProvided, MH.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: xH.hasProvided,
              update: this._updateFacebookBrowserId(xH.provided, xH.hasProvided, xH.unset)
            }];
          for (const {
              channel: oH,
              hasProvided: fH,
              update: lH
            }
            of vH) lH && !0 === XH.properties.$process_person_profile && lH.pending && !fH && !GH && (XH.$set = xr({
            [oH.property]: lH.value
          }, XH.$set));
          const PH = null == LH ? void 0 : LH.$unset;
          PH && (XH.$unset = PH);
          const TH = GH ? void 0 : this._calculate_set_once_properties(null == LH ? void 0 : LH.$set_once, HH !== sB, HH === aB);
          if (TH && (XH.$set_once = TH), (null == LH ? void 0 : LH._noTruncate) || (UH = this.config.properties_string_max_length, XH = function(HH, BH) {
              const LH = new Set;
              return function HH(AH, rH) {
                if (AH !== Object(AH)) return BH ? BH(AH) : AH;
                if (LH.has(AH)) return;
                let SH;
                if (LH.add(AH), vL(AH)) SH = [], Nh(AH, (BH => {
                  SH.push(HH(BH))
                }));
                else {
                  const BH = {};
                  Rh(qL(AH) ? wh(AH) : AH, ((AH, rH) => {
                    LH.has(AH) || (BH[rH] = HH(AH, rH))
                  })), SH = BH
                }
                return SH
              }(HH)
            }(XH, (HH => OL(HH) ? HH.slice(0, UH) : HH))), XH.timestamp = CH, VL(null == LH ? void 0 : LH.timestamp) || (XH.properties.$event_time_override_provided = !0, XH.properties.$event_time_override_system_time = zH), GH && (XH.properties = function(HH) {
              let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const LH = {},
                AH = BH => {
                  void 0 !== HH[BH] && (LH[BH] = HH[BH])
                };
              return QS.forEach(AH), BH.forEach(AH), LH
            }(XH.properties, gX)), HH === VC || HH === OC) {
            const LH = null == BH ? void 0 : BH[bC],
              AH = null == BH ? void 0 : BH[kC];
            XX({
              id: LH,
              current_iteration: AH
            }), XH.$set = xr(xr({}, XH.$set), {}, {
              [pE({
                id: LH,
                current_iteration: AH
              }, HH === OC ? "responded" : "dismissed")]: !0
            })
          } else HH === UC && (XH.$set = xr(xr({}, XH.$set), {}, {
            [mC]: (new Date).toISOString()
          }));
          var UH;
          if (HH === lC) {
            const HH = null == BH ? void 0 : BH[cC];
            HH && (XH.$set = xr(xr({}, XH.$set), {}, {
              [`${KC}/${HH}`]: (new Date).toISOString()
            }))
          }
          const VH = xr(xr({}, XH.properties.$set), XH.$set);
          if (UL(VH) || this.setPersonPropertiesForFlags(VH), !mL(this.config.before_send)) {
            const HH = this._runBeforeSend(XH);
            if (!HH) return;
            XH = HH, XH.uuid = zr(XH.uuid, Lt)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && KX(HH) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const OH = vH.filter((HH => {
            let {
              channel: BH,
              update: LH
            } = HH;
            var AH, rH, SH;
            const hH = null !== (AH = null === (rH = XH.$set) || void 0 === rH ? void 0 : rH[BH.property]) && void 0 !== AH ? AH : TL(null === (SH = XH.properties) || void 0 === SH ? void 0 : SH.$set) ? XH.properties.$set[BH.property] : void 0;
            return (null == LH ? void 0 : LH.pending) && hH === LH.value
          }));
          this._internalEventEmitter.emit("eventCaptured", XH);
          const bH = null !== (AH = null == LH ? void 0 : LH._url) && void 0 !== AH ? AH : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            kH = "recordings" === (null == LH ? void 0 : LH._batchKey) || /\/s\/(?:\?|$)/.test(bH),
            mH = xr(xr(xr({
              method: "POST",
              url: bH,
              data: XH,
              compression: "best-available",
              preferSyncCompression: null == LH ? void 0 : LH.send_instantly,
              timestampMode: kH ? "body" : "capture-body",
              batchKey: null == LH ? void 0 : LH._batchKey
            }, kH && (null === (rH = XH.properties) || void 0 === rH ? void 0 : rH.$session_id) ? {
              batchGroup: XH.properties.$session_id + (XH.properties.$window_id ? `-${XH.properties.$window_id}` : "")
            } : {}), (null == LH ? void 0 : LH.transport) ? {
              transport: LH.transport
            } : {}), OH.length ? {
              fireCallbackOnDrop: !0,
              callback: HH => {
                if (HH.statusCode >= 200 && 300 > HH.statusCode)
                  for (const {
                      channel: BH,
                      update: LH
                    }
                    of OH) this._markMetaIdentifierDelivered(BH, LH.value)
              }
            } : {});
          if (!this.config.request_batching || LH && !(null == LH ? void 0 : LH._batchKey) || (null == LH ? void 0 : LH.send_instantly)) {
            var IH;
            let HH;
            !mH.transport && !mH.callback && UL(null !== (IH = this.config.request_headers) && void 0 !== IH ? IH : {}) && this._isPageUnloading && (HH = "sendBeacon"), this._send_retriable_request(mH, HH)
          } else this._requestQueue.enqueue(mH);
          return XH
        }
        _addCaptureHook(HH) {
          return this.on("eventCaptured", (BH => HH(BH.event, BH)))
        }
        getExtension(HH) {
          var BH;
          return null === (BH = this._browserClientAdapter) || void 0 === BH ? void 0 : BH.getExtension(HH)
        }
        _getBrowserClientAdapter() {
          var HH;
          return null !== (HH = this._browserClientAdapter) && void 0 !== HH ? HH : this._browserClientAdapter = new UX(this)
        }
        _registerExtensionEventProperties(HH) {
          this._extensionEventPropertyProducers.push(HH);
          let BH = !0;
          return () => {
            if (!BH) return;
            BH = !1;
            const LH = this._extensionEventPropertyProducers.indexOf(HH); - 1 !== LH && this._extensionEventPropertyProducers.splice(LH, 1)
          }
        }
        _processCookieIdentityChange() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var BH, LH, AH;
          return !!(null === (BH = this.persistence) || void 0 === BH ? void 0 : BH.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (AH = this.sessionPersistence) || void 0 === AH || AH.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (LH = this.featureFlags) || void 0 === LH || LH.reset(), HH && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(HH, BH, LH, AH, SH) {
          if (LH = LH || new Date, !this.persistence || !this.sessionPersistence) return BH;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const hH = SH ? void 0 : this.persistence.remove_event_timer(HH);
          let tH = xr({}, BH);
          if (tH.token = this.config.token, tH.$config_defaults = this.config.defaults, this._inCookielessMode() && (tH[kB] = !0), "$snapshot" === HH) {
            const HH = xr(xr({}, this.persistence.properties()), this.sessionPersistence.properties());
            return tH.distinct_id = HH.distinct_id, (!OL(tH.distinct_id) && !oL(tH.distinct_id) || bL(tH.distinct_id)) && qh.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), tH
          }
          const zH = function(HH, BH, LH) {
            let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var SH, hH, tH, zH;
            if (!SL) return {};
            const CH = HH ? [...Fz, ...BH || []] : [],
              [EH, XH] = JA(SL),
              [GH, YH] = function(HH) {
                for (let BH = 0; Hr.length > BH; BH++) {
                  const [LH, AH, rH] = Hr[BH], SH = HH.match(LH);
                  if (SH) {
                    const BH = rH && HH.match(rH) || SH;
                    return [AH, (null == BH ? void 0 : BH[1]) || ""]
                  }
                }
                return ["", ""]
              }(SL),
              uH = function() {
                const HH = "u" > typeof navigator ? navigator : void 0;
                return (null == HH ? void 0 : HH.brave) ? {
                  brave: !0
                } : {}
              }(),
              QH = {};
            VL(LH) || (QH.detectGoogleSearchApp = LH);
            const WH = {},
              MH = null === (SH = navigator) || void 0 === SH || null === (SH = SH.userAgentData) || void 0 === SH ? void 0 : SH.platform,
              xH = null === (hH = navigator) || void 0 === hH ? void 0 : hH.maxTouchPoints,
              vH = null == JB || null === (tH = JB.screen) || void 0 === tH ? void 0 : tH.width,
              PH = null == JB || null === (zH = JB.screen) || void 0 === zH ? void 0 : zH.height,
              TH = null == JB ? void 0 : JB.devicePixelRatio;
            VL(MH) || (WH.userAgentDataPlatform = MH), VL(xH) || (WH.maxTouchPoints = xH), VL(vH) || (WH.screenWidth = vH), VL(PH) || (WH.screenHeight = PH), VL(TH) || (WH.devicePixelRatio = TH);
            const UH = jh(Dh({
              $os: EH,
              $os_version: XH,
              $browser: ZA(SL, navigator.vendor, uH, QH),
              $webview_app: GH,
              $webview_app_version: YH,
              $device: iA(SL),
              $device_type: pA(SL, WH),
              $timezone: Kz(),
              $timezone_offset: LC()
            }), {
              $current_url: jz(AH ? Er(null == HL ? void 0 : HL.href) : null == HL ? void 0 : HL.href, CH, wz),
              $host: null == HL ? void 0 : HL.host,
              $pathname: null == HL ? void 0 : HL.pathname,
              $raw_user_agent: SL.length > 1e3 ? SL.substring(0, 997) + "..." : SL,
              $browser_version: aA(SL, navigator.vendor, uH, QH),
              $browser_language: Jz(),
              $browser_language_prefix: iz(),
              $screen_height: null == JB ? void 0 : JB.screen.height,
              $screen_width: null == JB ? void 0 : JB.screen.width,
              $viewport_height: null == JB ? void 0 : JB.innerHeight,
              $viewport_width: null == JB ? void 0 : JB.innerWidth,
              $lib: rH.LIB_NAME,
              $lib_version: rH.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return rH.SDK_DIST_CHANNEL && (UH.$sdk_dist_channel = rH.SDK_DIST_CHANNEL), UH
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: HH,
              windowId: BH
            } = this.sessionManager.checkAndGetSessionAndWindowId(SH, LH.getTime(), !0);
            tH.$session_id = HH, tH.$window_id = BH
          }
          this.sessionPropsManager && jh(tH, this.sessionPropsManager.getSessionProps());
          try {
            var CH;
            if (this.sessionRecording) {
              const BH = this.sessionRecording.sdkDebugProperties,
                LH = !this._replayDebugPropertiesPaused && KX(HH);
              for (const HH in BH)(LH || GL(fX, HH)) && (tH[HH] = BH[HH])
            }
            tH.$sdk_debug_retry_queue_size = null === (CH = this._retryQueue) || void 0 === CH ? void 0 : CH.length
          } catch (HH) {
            tH.$sdk_debug_error_capturing_properties = String(HH)
          }
          let EH;
          if (this.requestRouter.region === SX && (tH.$lib_custom_api_host = this.config.api_host), EH = "$pageview" !== HH || SH ? "$pageleave" !== HH || SH ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(LH) : this.pageViewManager.doPageView(LH, AH), tH = jh(tH, EH), "$pageview" === HH && yB && (tH.title = yB.title), !VL(hH)) {
            const HH = LH.getTime() - hH;
            tH.$duration = parseFloat((HH / 1e3).toFixed(3))
          }
          SL && this.config.opt_out_useragent_filter && (tH.$browser_type = this._is_bot() ? "bot" : "browser");
          const XH = this.persistence.properties(),
            GH = this.sessionPersistence.properties(),
            YH = tH.$groups,
            uH = XH.$groups;
          TL(YH) && !UL(YH) && (tH.$groups = xr(xr({}, TL(uH) ? uH : {}), YH)), Rh(["$referrer", "$referring_domain"], (HH => {
            HH in XH && delete GH[HH]
          }));
          const QH = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const rH of this._extensionEventPropertyProducers.slice()) try {
              jh(QH, rH())
            } catch (HH) {
              qh.error("Failed to produce browser extension event properties", HH)
            }
          tH = jh({}, zH, XH, GH, xr(xr({}, QH), tH)), tH.$is_identified = this._isIdentified(), vL(this.config.property_denylist) ? Rh(this.config.property_denylist, (function(HH) {
            delete tH[HH]
          })) : qh.error(IX + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const WH = this.config.sanitize_properties;
          WH && (qh.error(oX), tH = WH(tH, HH));
          const MH = this._hasPersonProcessing();
          return tH.$process_person_profile = MH, MH && !SH && this._requirePersonProcessing("_calculate_event_properties"), tH
        }
        _calculate_set_once_properties(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var AH;
          if (!this.persistence || !this._hasPersonProcessing()) return HH;
          if (this._personProcessingSetOncePropertiesSent && !LH) return HH;
          const rH = this.persistence.get_initial_props(),
            SH = null === (AH = this.sessionPropsManager) || void 0 === AH ? void 0 : AH.getSetOnceProps();
          let hH = jh({}, rH, SH || {}, HH || {});
          const tH = this.config.sanitize_properties;
          return tH && (qh.error(oX), hH = tH(hH, "$set_once")), BH && (this._personProcessingSetOncePropertiesSent = !0), UL(hH) ? void 0 : hH
        }
        register(HH, BH) {
          var LH;
          null === (LH = this.persistence) || void 0 === LH || LH.register(HH, BH)
        }
        register_once(HH, BH, LH) {
          var AH;
          null === (AH = this.persistence) || void 0 === AH || AH.register_once(HH, BH, LH)
        }
        register_for_session(HH) {
          var BH, LH;
          null === (BH = this.persistence) || void 0 === BH || BH.syncCookieProperties(), this._processCookieIdentityChange(), null === (LH = this.sessionPersistence) || void 0 === LH || LH.register(HH), Object.keys(HH).forEach((HH => this._sessionRegisteredPropKeys.add(HH))), this._persistSessionRegisteredPropKeys()
        }
        unregister(HH) {
          var BH;
          null === (BH = this.persistence) || void 0 === BH || BH.unregister(HH)
        }
        unregister_for_session(HH) {
          var BH;
          null === (BH = this.sessionPersistence) || void 0 === BH || BH.unregister(HH), this._sessionRegisteredPropKeys.delete(HH), this._persistSessionRegisteredPropKeys()
        }
        _register_single(HH, BH) {
          this.register({
            [HH]: BH
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((HH => {
            var BH;
            null === (BH = this.sessionPersistence) || void 0 === BH || BH.unregister(HH)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var HH;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (HH = this.sessionPersistence) || void 0 === HH ? void 0 : HH._disabled) || !Vt._is_supported()) return void Vt._remove(this._sessionRegisteredPropertiesStorageKey);
          const BH = [];
          this._sessionRegisteredPropKeys.forEach((HH => BH.push(HH))), BH.length > 0 ? Vt._set(this._sessionRegisteredPropertiesStorageKey, BH) : Vt._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(HH, BH) {
          var LH;
          return null === (LH = this.featureFlags) || void 0 === LH ? void 0 : LH.getFeatureFlag(HH, BH)
        }
        getFeatureFlagPayload(HH) {
          var BH;
          return null === (BH = this.featureFlags) || void 0 === BH ? void 0 : BH.getFeatureFlagPayload(HH)
        }
        getFeatureFlagResult(HH, BH) {
          var LH;
          return null === (LH = this.featureFlags) || void 0 === LH ? void 0 : LH.getFeatureFlagResult(HH, BH)
        }
        getAllFeatureFlags() {
          var HH, BH;
          return null !== (HH = null === (BH = this.featureFlags) || void 0 === BH ? void 0 : BH.getAllFeatureFlags()) && void 0 !== HH ? HH : []
        }
        isFeatureEnabled(HH, BH) {
          var LH, AH;
          return null !== (LH = null === (AH = this.featureFlags) || void 0 === AH ? void 0 : AH.isFeatureEnabled(HH, BH)) && void 0 !== LH ? LH : null == BH ? void 0 : BH.defaultValue
        }
        reloadFeatureFlags() {
          var HH;
          null === (HH = this.featureFlags) || void 0 === HH || HH.reloadFeatureFlags()
        }
        updateFlags(HH, BH, LH) {
          var AH;
          null === (AH = this.featureFlags) || void 0 === AH || AH.updateFlags(HH, BH, LH)
        }
        updateEarlyAccessFeatureEnrollment(HH, BH, LH) {
          var AH;
          null === (AH = this.featureFlags) || void 0 === AH || AH.updateEarlyAccessFeatureEnrollment(HH, BH, LH)
        }
        getEarlyAccessFeatures(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0;
          var AH;
          return null === (AH = this.featureFlags) || void 0 === AH ? void 0 : AH.getEarlyAccessFeatures(HH, BH, LH)
        }
        on(HH, BH) {
          return this._internalEventEmitter.on(HH, BH)
        }
        onFeatureFlags(HH) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(HH) : (HH([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(HH) {
          return this.surveys ? this.surveys.onSurveysLoaded(HH) : (HH([], {
            isLoaded: !1,
            error: mX
          }), () => {})
        }
        onSessionId(HH) {
          var BH, LH;
          return null !== (BH = null === (LH = this.sessionManager) || void 0 === LH ? void 0 : LH.onSessionId(HH)) && void 0 !== BH ? BH : () => {}
        }
        getSurveys(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(HH, BH) : HH([], {
            isLoaded: !1,
            error: mX
          })
        }
        getActiveMatchingSurveys(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(HH, BH) : HH([], {
            isLoaded: !1,
            error: mX
          })
        }
        onActiveMatchingSurveysChanged(HH) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(HH) : (HH([], {
            isLoaded: !1,
            error: mX
          }), () => {})
        }
        renderSurvey(HH, BH) {
          var LH;
          null === (LH = this.surveys) || void 0 === LH || LH.renderSurvey(HH, BH)
        }
        displaySurvey(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YX;
          var LH;
          null === (LH = this.surveys) || void 0 === LH || LH.displaySurvey(HH, BH)
        }
        cancelPendingSurvey(HH) {
          var BH;
          null === (BH = this.surveys) || void 0 === BH || BH.cancelPendingSurvey(HH)
        }
        canRenderSurvey(HH) {
          var BH, LH;
          return null !== (BH = null === (LH = this.surveys) || void 0 === LH ? void 0 : LH.canRenderSurvey(HH)) && void 0 !== BH ? BH : {
            visible: !1,
            disabledReason: mX
          }
        }
        canRenderSurveyAsync(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var LH, AH;
          return null !== (LH = null === (AH = this.surveys) || void 0 === AH ? void 0 : AH.canRenderSurveyAsync(HH, BH)) && void 0 !== LH ? LH : Promise.resolve({
            visible: !1,
            disabledReason: mX
          })
        }
        _validateIdentifyId(HH) {
          return !HH || bL(HH) ? (qh.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === HH ? (qh.critical(`The string "${HH}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(HH.toLowerCase()) && !["undefined", "null"].includes(HH.toLowerCase()) || (qh.critical(`The string "${HH}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(HH, BH, LH) {
          if (!this.__loaded || !this.persistence) return qh.uninitializedWarning("posthog.identify");
          if (oL(HH) && (HH = HH.toString(), qh.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(HH)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const AH = this.get_distinct_id(),
            rH = this.persistence.syncCookieProperties() && this.get_distinct_id() !== AH,
            SH = this._processCookieIdentityChange(!1),
            hH = this.persistence._beginCookieSyncSuppression();
          let tH = !1;
          try {
            const AH = this.get_distinct_id();
            this.register({
              $user_id: HH
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: AH
            }, ""), HH !== AH && HH !== this.get_property("__alias") && (this.unregister(kH), this.register({
              distinct_id: HH
            }));
            const hH = (this.persistence.get_property("$user_state") || "anonymous") === nB,
              CH = HH !== AH,
              EH = !CH && hH;
            if (CH && hH) {
              var zH;
              const rH = this.config.reuseAnonymousId ? {
                distinct_id: HH
              } : {
                distinct_id: HH,
                $anon_distinct_id: AH
              };
              this.persistence.set_property(xB, FB), this.setPersonPropertiesForFlags({
                $set: BH || {},
                $set_once: LH || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", rH, {
                $set: BH || {},
                $set_once: LH || {}
              }) && (this._cachedPersonProperties = rX(HH, BH, LH)), null === (zH = this.featureFlags) || void 0 === zH || zH.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : AH)
            } else if (EH) {
              this.persistence.set_property(xB, FB);
              const AH = BH || {},
                rH = LH || {};
              this.setPersonPropertiesForFlags({
                $set: AH,
                $set_once: rH
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: AH,
                $set_once: rH
              }) && (this._cachedPersonProperties = rX(HH, BH, LH))
            } else(BH || LH) && this.setPersonProperties(BH, LH);
            CH || rH || SH ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(WH)) : EH && (BH || LH) && this.reloadFeatureFlags(), tH = !0
          } finally {
            hH && this.persistence._endCookieSyncSuppression(tH)
          }
        }
        setPersonProperties(HH, BH) {
          if (!HH && !BH) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const LH = rX(this.get_distinct_id(), HH, BH);
          this._cachedPersonProperties !== LH ? (this.setPersonPropertiesForFlags({
            $set: HH || {},
            $set_once: BH || {}
          }, !0), this.capture("$set", {
            $set: HH || {},
            $set_once: BH || {}
          }) && (this._cachedPersonProperties = LH)) : qh.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(HH) {
          var BH;
          const LH = (vL(HH) ? HH : [HH]).filter((HH => OL(HH) && HH.length > 0));
          0 !== LH.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (BH = this.featureFlags) || void 0 === BH || BH.unsetPersonPropertiesForFlags(LH, !0), this.capture("$set", {
            $unset: LH
          }), this._cachedPersonProperties = null)
        }
        group(HH, BH, LH) {
          var AH;
          if (!HH || !BH) return void qh.error("posthog.group requires a group type and group key");
          null === (AH = this.persistence) || void 0 === AH || AH.syncCookieProperties(), this._processCookieIdentityChange();
          const rH = this.getGroups(),
            SH = rH[HH] !== BH;
          if (SH && this.resetGroupPropertiesForFlags(HH), this.register({
              $groups: xr(xr({}, rH), {}, {
                [HH]: BH
              })
            }), (SH || LH) && this._hasPersonProcessing()) {
            const AH = {
              $group_type: HH,
              $group_key: BH
            };
            LH && (AH.$group_set = LH), this.capture(sB, AH)
          }
          LH && this.setGroupPropertiesForFlags({
            [HH]: LH
          }), SH && !LH && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var LH;
          null === (LH = this.featureFlags) || void 0 === LH || LH.setPersonPropertiesForFlags(HH, BH)
        }
        resetPersonPropertiesForFlags() {
          let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var BH;
          null === (BH = this.featureFlags) || void 0 === BH || BH.resetPersonPropertiesForFlags(HH)
        }
        setGroupPropertiesForFlags(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var LH;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (LH = this.featureFlags) || void 0 === LH || LH.setGroupPropertiesForFlags(HH, BH))
        }
        resetGroupPropertiesForFlags(HH) {
          var BH;
          null === (BH = this.featureFlags) || void 0 === BH || BH.resetGroupPropertiesForFlags(HH)
        }
        reset(HH) {
          const BH = fL(HH) ? HH : null == HH ? void 0 : HH.resetDeviceID,
            LH = fL(HH) || null == HH ? void 0 : HH.bootstrap;
          this._reset(BH, !1, LH)
        }
        _reset(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0;
          var AH, rH, SH, hH, tH, zH;
          if (qh.info("reset"), !this.__loaded) return qh.uninitializedWarning("posthog.reset");
          const CH = null == LH ? void 0 : LH.sessionID;
          this.config.bootstrap = LH || (null === (AH = this._originalUserConfig) || void 0 === AH ? void 0 : AH.bootstrap) || {}, null === (rH = this.featureFlags) || void 0 === rH || null === (SH = rH.updateConfig) || void 0 === SH || SH.call(rH, this.config, this._shouldDisableFlags());
          const EH = this.get_property(OH),
            XH = this.get_property(bH),
            GH = this.get_property(wH);
          null === (hH = this.sessionRecording) || void 0 === hH || hH.flushBeforeIdentityReset();
          const YH = this.is_capturing();
          BH || this.consent.reset(), BH || !YH || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const uH = null === (tH = this.persistence) || void 0 === tH || null === (zH = tH._beginCookieSyncSuppression) || void 0 === zH ? void 0 : zH.call(tH),
            QH = this._isConsentTransition;
          this._isConsentTransition = QH || BH;
          let WH = !1;
          try {
            var MH, xH, vH, PH, TH, UH, VH, kH, mH, oH, IH, fH, lH;
            if (null === (MH = this.persistence) || void 0 === MH || MH.clear(), null === (xH = this.sessionPersistence) || void 0 === xH || xH.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), VL(GH) || null === (oH = this.persistence) || void 0 === oH || oH.register({
                $session_recording_remote_config: GH
              }), null === (vH = this.surveys) || void 0 === vH || vH.reset(), null === (PH = this.featureFlags) || void 0 === PH || PH.reset(), null === (TH = this.conversations) || void 0 === TH || TH.reset(), null === (UH = this.logs) || void 0 === UH || UH.reset(), null === (VH = this.metrics) || void 0 === VH || VH.reset(), null === (kH = this.persistence) || void 0 === kH || kH.set_property("$user_state", "anonymous"), null === (mH = this.sessionManager) || void 0 === mH || mH.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: bB,
              $device_id: null
            }, "");
            else {
              const BH = this.config.get_device_id(Lt());
              this.register_once({
                distinct_id: BH,
                $device_id: HH ? BH : EH
              }, ""), HH || VL(XH) || this.register({
                [bH]: XH
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), LH && (LH.distinctID && !this._inCookielessMode() && (null === (lH = this.persistence) || void 0 === lH || lH.set_property("$user_state", LH.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: LH.distinctID
              })), null === (IH = this.featureFlags) || void 0 === IH || IH.initialize(), !mL(CH) && !(null === (fH = this.sessionManager) || void 0 === fH ? void 0 : fH.setBootstrapSessionId(CH, !0)))) {
              const HH = xr({}, LH);
              delete HH.sessionID, this.config.bootstrap = HH
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, WH = !0
          } finally {
            var KH, cH;
            this._isConsentTransition = QH, uH && (null === (KH = this.persistence) || void 0 === KH || null === (cH = KH._endCookieSyncSuppression) || void 0 === cH || cH.call(KH, WH))
          }
          this.reloadFeatureFlags()
        }
        shutdown(HH) {
          var BH = this;
          return DL((function*() {
            if (!BH.__loaded) return void qh.uninitializedWarning("posthog.shutdown");
            BH._isShutdown = !0, clearTimeout(BH._extensionInitTimeout), BH._extensionInitTimeout = void 0;
            const HH = BH._featureFlagsReloadingUnsubscribe;
            BH._featureFlagsReloadingUnsubscribe = void 0;
            for (const LH of [() => {
                var HH;
                return null === (HH = BH.sessionRecording) || void 0 === HH ? void 0 : HH.dispose()
              }, () => {
                var HH;
                return null === (HH = BH.logs) || void 0 === HH ? void 0 : HH.flushLogs("sendBeacon")
              }, () => {
                var HH;
                return null === (HH = BH.metrics) || void 0 === HH ? void 0 : HH.flush("sendBeacon")
              }, () => {
                var HH;
                return null === (HH = BH.metrics) || void 0 === HH ? void 0 : HH.dispose()
              }, () => {
                var HH;
                return null === (HH = BH.logs) || void 0 === HH ? void 0 : HH.dispose()
              }, () => {
                var HH;
                return null === (HH = BH.surveys) || void 0 === HH ? void 0 : HH.dispose()
              }, () => {
                var HH;
                return null === (HH = BH.autocapture) || void 0 === HH ? void 0 : HH.dispose()
              }, () => null == HH ? void 0 : HH(), () => {
                var HH;
                return null === (HH = BH._requestQueue) || void 0 === HH ? void 0 : HH.unload()
              }, () => {
                var HH;
                return null === (HH = BH._retryQueue) || void 0 === HH ? void 0 : HH.unload()
              }, () => {
                var HH;
                return null === (HH = BH.featureFlags) || void 0 === HH ? void 0 : HH.destroy()
              }, () => {
                var HH;
                return null === (HH = BH.persistence) || void 0 === HH ? void 0 : HH.destroy()
              }, () => {
                var HH;
                return null === (HH = BH.sessionPersistence) || void 0 === HH ? void 0 : HH.destroy()
              }]) try {
              const HH = LH();
              HH && PL(HH.then) && HH.then(void 0, (HH => {
                qh.error("Error during shutdown", HH)
              }))
            } catch (HH) {
              qh.error("Error during shutdown", HH)
            }
          }))()
        }
        setIdentity(HH, BH) {
          var LH;
          delete this.config.identity_claims, this.config.identity_distinct_id = HH, this.config.identity_hash = BH, this.alias(HH), null === (LH = this.conversations) || void 0 === LH || LH._onIdentityChanged()
        }
        clearIdentity() {
          var HH;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (HH = this.conversations) || void 0 === HH || HH._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var HH, BH;
          return null !== (HH = null === (BH = this.sessionManager) || void 0 === BH ? void 0 : BH.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== HH ? HH : ""
        }
        get_session_replay_url(HH) {
          if (!this.sessionManager) return "";
          const {
            sessionId: BH,
            sessionStartTimestamp: LH
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let AH = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${BH}`);
          if ((null == HH ? void 0 : HH.withTimestamp) && LH) {
            var rH;
            const BH = null !== (rH = HH.timestampLookBack) && void 0 !== rH ? rH : 10;
            if (!LH) return AH;
            AH += `?t=${Math.max(Math.floor(((new Date).getTime()-LH)/1e3)-BH,0)}`
          }
          return AH
        }
        alias(HH, BH) {
          return HH === this.get_property("$people_distinct_id") ? (qh.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (VL(BH) && (BH = this.get_distinct_id()), HH !== BH ? (this._register_single(kH, HH), this.capture("$create_alias", {
            alias: HH,
            distinct_id: BH
          })) : (qh.warn("alias matches current distinct_id - skipping api call."), this.identify(HH), -1)) : void 0
        }
        set_config(HH) {
          const BH = xr({}, this.config);
          if (TL(HH)) {
            var LH, AH, rH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
            jh(this.config, FX(HH));
            const TH = this._is_persistence_disabled();
            if (this.persistence) {
              const HH = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var MH, xH;
              if (HH && this.sessionPersistence !== this.persistence && (null === (MH = this.sessionPersistence) || void 0 === MH || MH.remove(), null === (xH = this.sessionPersistence) || void 0 === xH || xH.destroy()), this.persistence.update_config(this.config, BH, TH), HH) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new QC(xr(xr({}, this.config), {}, {
                persistence: "sessionStorage"
              }), TH, !1);
              else {
                var vH;
                null === (vH = this.sessionPersistence) || void 0 === vH || vH.update_config(xr(xr({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), xr(xr({}, BH), {}, {
                  persistence: "sessionStorage"
                }), TH)
              }
            }
            const UH = this._checkLocalStorageForDebug(this.config.debug);
            var PH;
            fL(UH) && (this.config.debug = UH), fL(this.config.debug) && (this.config.debug ? (SH.DEBUG = !0, Ct._is_supported() && Ct._set("ph_debug", !0), qh.info("set_config", {
              config: HH,
              oldConfig: BH,
              newConfig: xr({}, this.config)
            })) : (SH.DEBUG = !1, Ct._is_supported() && Ct._remove("ph_debug"))), null === (LH = this.featureFlags) || void 0 === LH || null === (AH = LH.updateConfig) || void 0 === AH || AH.call(LH, this.config, this._shouldDisableFlags()), null === (rH = this.exceptionObserver) || void 0 === rH || rH.onConfigChange(), null === (hH = this.exceptions) || void 0 === hH || hH.onConfigChange(), null === (tH = this.metrics) || void 0 === tH || tH.onConfigChange(), null === (zH = this.webMCP) || void 0 === zH || zH.startIfEnabled(), null === (CH = this.sessionRecording) || void 0 === CH || CH.startIfEnabledOrStop(), null === (EH = this.tracingHeaders) || void 0 === EH || EH.startIfEnabledOrStop(), null === (XH = this.autocapture) || void 0 === XH || XH.startIfEnabled(), null === (GH = this.heatmaps) || void 0 === GH || GH.startIfEnabled(), ("capture_pageview" in HH || "disable_capture_url_hashes" in HH) && (null === (PH = this.historyAutocapture) || void 0 === PH || PH.startIfEnabledOrStop()), null === (YH = this.exceptionObserver) || void 0 === YH || YH.startIfEnabledOrStop(), null === (uH = this.deadClicksAutocapture) || void 0 === uH || uH.startIfEnabledOrStop(), null === (QH = this.surveys) || void 0 === QH || QH.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (WH = this.externalIntegrations) || void 0 === WH || WH.startIfEnabledOrStop(), !BH.segment && this.config.segment && this.persistence && Vz(this, bX, !1)
          }
        }
        _overrideSDKInfo(HH, BH) {
          SH.LIB_NAME = HH, SH.LIB_VERSION = BH
        }
        startSessionRecording(HH) {
          const BH = !0 === HH,
            LH = {
              sampling: BH || !!(null == HH ? void 0 : HH.sampling),
              linked_flag: BH || !!(null == HH ? void 0 : HH.linked_flag),
              url_trigger: BH || !!(null == HH ? void 0 : HH.url_trigger),
              event_trigger: BH || !!(null == HH ? void 0 : HH.event_trigger)
            };
          var AH, rH, SH, hH, tH;
          Object.values(LH).some(Boolean) && (null === (AH = this.sessionManager) || void 0 === AH || AH.checkAndGetSessionAndWindowId(), LH.sampling && (null === (rH = this.sessionRecording) || void 0 === rH || rH.overrideSampling()), LH.linked_flag && (null === (SH = this.sessionRecording) || void 0 === SH || SH.overrideLinkedFlag()), LH.url_trigger && (null === (hH = this.sessionRecording) || void 0 === hH || hH.overrideTrigger("url")), LH.event_trigger && (null === (tH = this.sessionRecording) || void 0 === tH || tH.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var HH;
          return !!(null === (HH = this.sessionRecording) || void 0 === HH ? void 0 : HH.started)
        }
        captureException(HH, BH) {
          try {
            if (!this.exceptions) return;
            const LH = this.exceptions.buildProperties(HH, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(xr(xr({}, LH), BH))
          } catch (HH) {
            return
          }
        }
        addExceptionStep(HH, BH) {
          var LH;
          null === (LH = this.exceptions) || void 0 === LH || LH.addExceptionStep(HH, BH)
        }
        captureLog(HH) {
          var BH;
          null === (BH = this.logs) || void 0 === BH || BH.captureLog(HH)
        }
        get logger() {
          var BH, LH;
          return null !== (BH = null === (LH = this.logs) || void 0 === LH ? void 0 : LH.logger) && void 0 !== BH ? BH : HH._noopLogger
        }
        startExceptionAutocapture(HH) {
          this.set_config({
            capture_exceptions: null == HH || HH
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(HH) {
          var BH, LH;
          return null !== (BH = null === (LH = this.toolbar) || void 0 === LH ? void 0 : LH.loadToolbar(HH)) && void 0 !== BH && BH
        }
        get_property(HH) {
          var BH;
          return null === (BH = this.persistence) || void 0 === BH ? void 0 : BH.props[HH]
        }
        getSessionProperty(HH) {
          var BH;
          return null === (BH = this.sessionPersistence) || void 0 === BH ? void 0 : BH.props[HH]
        }
        toString() {
          var HH;
          let BH = null !== (HH = this.config.name) && void 0 !== HH ? HH : NX;
          return BH !== NX && (BH = "posthog." + BH), BH
        }
        _isIdentified() {
          var HH, BH;
          return "identified" === (null === (HH = this.persistence) || void 0 === HH ? void 0 : HH.get_property("$user_state")) || "identified" === (null === (BH = this.sessionPersistence) || void 0 === BH ? void 0 : BH.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var HH, BH;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && UL(this.getGroups()) && !(null === (HH = this.persistence) || void 0 === HH || null === (HH = HH.props) || void 0 === HH ? void 0 : HH.__alias) && !(null === (BH = this.persistence) || void 0 === BH || null === (BH = BH.props) || void 0 === BH ? void 0 : BH.$epp))
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
        _requirePersonProcessing(HH) {
          return "never" === this.config.person_profiles ? (qh.error(HH + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(OB, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const HH = this.consent.isOptedOut();
          return this.config.disable_persistence || HH && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var HH, BH;
          const LH = this._is_persistence_disabled();
          var AH, rH, SH;
          return this.is_capturing() || null === (AH = this.logs) || void 0 === AH || AH._onOptOut(), (null === (HH = this.persistence) || void 0 === HH ? void 0 : HH._disabled) !== LH && (null === (rH = this.persistence) || void 0 === rH || rH.set_disabled(LH)), (null === (BH = this.sessionPersistence) || void 0 === BH ? void 0 : BH._disabled) !== LH && (null === (SH = this.sessionPersistence) || void 0 === SH || SH.set_disabled(LH)), this._persistSessionRegisteredPropKeys(), LH
        }
        opt_in_capturing(BH) {
          var LH;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var AH, rH, SH, hH, tH, zH;
              null === (AH = this.sessionRecording) || void 0 === AH || AH.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (rH = this.sessionManager) || void 0 === rH || rH.destroy(), null === (SH = this.pageViewManager) || void 0 === SH || SH.destroy(), this.sessionManager = new sE(this), this.pageViewManager = new mz(this), this.persistence && (this.sessionPropsManager = new wE(this, this.sessionManager, this.persistence));
              const BH = null !== (hH = null === (tH = this.config.__extensionClasses) || void 0 === tH ? void 0 : tH.sessionRecording) && void 0 !== hH ? hH : null === (zH = HH.__defaultExtensionClasses) || void 0 === zH ? void 0 : zH.sessionRecording;
              var CH, EH;
              BH && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new BH(this)), this._lastRemoteConfig && (null === (CH = this.sessionRecording) || void 0 === CH || null === (EH = CH.onRemoteConfig) || void 0 === EH || EH.call(CH, this._lastRemoteConfig)))
            }
            var XH, GH;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (LH = this.sessionRecording) || void 0 === LH || LH.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (XH = this.surveys) || void 0 === XH || XH.loadIfEnabled()), (VL(null == BH ? void 0 : BH.captureEventName) || (null == BH ? void 0 : BH.captureEventName)) && this.capture(null !== (GH = null == BH ? void 0 : BH.captureEventName) && void 0 !== GH ? GH : "$opt_in", null == BH ? void 0 : BH.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else qh.warn(kX)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : qh.warn(kX)
        }
        _enterCookielessMode() {
          var HH, BH;
          const LH = this.sessionRecording;
          null == LH || LH.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: bB,
            $device_id: null
          }), this._removeExtension(LH), this.sessionRecording = void 0, null === (HH = this.sessionManager) || void 0 === HH || HH.destroy(), null === (BH = this.pageViewManager) || void 0 === BH || BH.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const HH = this.consent.consent;
          return 1 === HH ? "granted" : 0 === HH ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return pB ? JE(pB, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          yB && ("visible" === yB.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(ZB, {
            title: yB.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (yB.removeEventListener(TH, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), ah(yB, TH, this._visibilityStateListener)))
        }
        debug(HH) {
          !1 === HH ? (null == JB || JB.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == JB || JB.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const HH = this._originalUserConfig || {};
          return "advanced_disable_flags" in HH ? !!HH.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (qh.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(HH, BH, LH, AH, rH) {
            const SH = BH in HH && !mL(HH[BH]),
              hH = LH in HH && !mL(HH[LH]);
            return SH ? HH[BH] : !!hH && (rH && rH.warn(`Config field '${LH}' is deprecated. Please use '${BH}' instead. The old field will be removed in a future major version.`), HH[LH])
          }(HH, "advanced_disable_flags", "advanced_disable_decide", 0, qh)
        }
        _runBeforeSend(HH) {
          var BH;
          if (mL(this.config.before_send)) return HH;
          const LH = Object.keys(null !== (BH = HH.properties) && void 0 !== BH ? BH : {}).filter(KL),
            AH = vL(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let rH = HH;
          for (const SH of AH) try {
            if (rH = SH(rH), mL(rH)) {
              const BH = `Event '${HH.event}' was rejected in beforeSend function`;
              return lL(HH.event) ? qh.warn(`${BH}. This can cause unexpected behavior.`) : qh.info(BH), null
            }
            rH.properties && !UL(rH.properties) || qh.warn(`Event '${HH.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (BH) {
            return qh.error(`Error in beforeSend function for event '${HH.event}':`, BH), null
          }
          for (const SH of LH)
            if (rH.properties && mL(rH.properties[SH])) return qh.warn(`Event '${HH.event}' had its '${SH}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return rH
        }
        getPageViewId() {
          var HH;
          return null === (HH = this.pageViewManager._currentPageview) || void 0 === HH ? void 0 : HH.pageViewId
        }
        captureTraceFeedback(HH, BH) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(HH),
            $ai_feedback_text: BH
          })
        }
        captureTraceMetric(HH, BH, LH) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(HH),
            $ai_metric_name: BH,
            $ai_metric_value: String(LH)
          })
        }
        _checkLocalStorageForDebug(HH) {
          const BH = fL(HH) && !HH,
            LH = Ct._is_supported() && "true" === Ct._get("ph_debug");
          return !BH && (!!LH || HH)
        }
      };
    wX.__defaultExtensionClasses = {}, wX._noopLogger = (() => {
        const HH = () => {};
        return {
          trace: HH,
          debug: HH,
          info: HH,
          warn: HH,
          error: HH,
          fatal: HH
        }
      })(),
      function(HH, BH) {
        for (let LH = 0; BH.length > LH; LH++) HH.prototype[BH[LH]] = Fh(HH.prototype[BH[LH]])
      }(wX, ["identify"]);
    var ZX = class {
      constructor(HH) {
        this.disabled = !1 === HH;
        const BH = TL(HH) ? HH : {};
        this.thresholdPx = BH.threshold_px || 30, this.timeoutMs = BH.timeout_ms || 1e3, this.clickCount = BH.click_count || 3, this.clicks = []
      }
      isRageClick(HH, BH, LH) {
        if (this.disabled) return !1;
        const AH = this.clicks[this.clicks.length - 1];
        if (AH && Math.abs(HH - AH.x) + Math.abs(BH - AH.y) < this.thresholdPx && this.timeoutMs > LH - AH.timestamp) {
          if (this.clicks.push({
              x: HH,
              y: BH,
              timestamp: LH
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: HH,
          y: BH,
          timestamp: LH
        }];
        return !1
      }
    };
    const dX = "$copy_autocapture",
      aX = gh("[AutoCapture]");

    function sX(HH, BH) {
      return BH.length > HH ? BH.slice(0, HH) + "..." : BH
    }

    function JX(HH) {
      if (HH.previousElementSibling) return HH.previousElementSibling;
      let BH = HH;
      do {
        BH = BH.previousSibling
      } while (BH && !mt(BH));
      return BH
    }
    var iX = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(HH) {
          var BH;
          if (!rz(HH)) return !0;
          const LH = null !== (BH = this._refreshConfig().css_selector_ignorelist) && void 0 !== BH ? BH : Ft,
            AH = new Set;
          let rH = HH;
          for (; rH;) {
            if (AH.size >= 1e3 || AH.has(rH)) return !0;
            AH.add(rH);
            const HH = rH,
              BH = ct(HH);
            if (GL(BH, "ph-no-capture") || GL(BH, "ph-sensitive") || Sz(HH) || LH.some((BH => Rt(HH, BH)))) return !0;
            const SH = rH.parentNode;
            rH = ft(SH) ? SH.host : SH && mt(SH) ? SH : null
          }
          return !1
        }
        _trackPointer(HH) {
          if (!this.isEnabled || "pointercancel" === HH.type) return void this._clearPointer();
          if ("pointerdown" === HH.type) {
            this._clearPointer();
            const LH = gt(HH);
            var BH;
            return void(HH.isPrimary && 0 === HH.button && !HH.ctrlKey && LH && mt(LH) && (this._pointerDown = {
              target: LH,
              excluded: this._isExcludedPointerTarget(LH),
              id: HH.pointerId,
              x: HH.clientX,
              y: HH.clientY,
              released: !1,
              distinctId: null === (BH = this._client) || void 0 === BH ? void 0 : BH.distinctId
            }))
          }
          const LH = this._pointerDown;
          LH && (HH.pointerId !== LH.id || Math.abs(HH.clientX - LH.x) > 5 || Math.abs(HH.clientY - LH.y) > 5 ? this._clearPointer() : "pointerup" === HH.type && (LH.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(HH) {
          var BH;
          const LH = this._pointerDown;
          this._clearPointer();
          const AH = gt(HH);
          if ((null == LH ? void 0 : LH.released) && LH.target.isConnected && LH.distinctId === (null === (BH = this._client) || void 0 === BH ? void 0 : BH.distinctId) && HH.pointerId === LH.id && (HH.detail > 0 || "touch" === HH.pointerType || "pen" === HH.pointerType) && 0 === HH.button && 5 >= Math.abs(HH.clientX - LH.x) && 5 >= Math.abs(HH.clientY - LH.y) && AH && (ot(AH, "html") || ot(AH, "body"))) {
            var rH;
            if (LH.excluded) return null;
            const HH = null !== (rH = this._refreshConfig().css_selector_ignorelist) && void 0 !== rH ? rH : Ft;
            return [AH, null == yB ? void 0 : yB.documentElement, null == yB ? void 0 : yB.body].some((BH => {
              if (!BH) return !1;
              const LH = ct(BH);
              return GL(LH, "ph-no-capture") || GL(LH, "ph-sensitive") || !rz(BH) || Sz(BH) || HH.some((HH => Rt(BH, HH)))
            })) ? null : LH.target
          }
        }
        constructor(HH) {
          this._configSource = HH, this.name = MX, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new ZX(this._config.rageclick), this._elementSelectors = null
        }
        setup(HH) {
          this._compileUrlPatterns(), this._client = HH;
          const BH = HH.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? BH.dispose() : (this._remoteConfigSubscription = BH, this.startIfEnabled())
        }
        dispose() {
          var HH;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (HH = this._remoteConfigSubscription) || void 0 === HH || HH.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var HH, BH;
          return this._refreshConfig(), this._config.url_allowlist = null === (HH = this._config.url_allowlist) || void 0 === HH ? void 0 : HH.map((HH => new RegExp(HH))), this._config.url_ignorelist = null === (BH = this._config.url_ignorelist) || void 0 === BH ? void 0 : BH.map((HH => new RegExp(HH))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void aX.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!JB || !yB) return;
          const HH = this._domEventHandler = HH => {
            HH = HH || (null == JB ? void 0 : JB.event);
            try {
              if ("blur" === HH.type) return void this._clearPointer();
              if (0 === HH.type.indexOf("pointer")) return void this._trackPointer(HH);
              const BH = "click" === HH.type ? this._recoverClickTarget(HH) : void 0;
              if (kL(BH)) return;
              this._captureEvent(HH, "$autocapture", BH)
            } catch (HH) {
              aX.error("Failed to capture event", HH)
            }
          };
          if (ah(JB, "blur", HH), ah(yB, "submit", HH, {
              capture: !0
            }), ah(yB, "change", HH, {
              capture: !0
            }), ah(yB, "click", HH, {
              capture: !0
            }), Rh(["pointerdown", "pointermove", "pointerup", "pointercancel"], (BH => {
              ah(yB, BH, HH, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const HH = this._copiedTextHandler = HH => {
              HH = HH || (null == JB ? void 0 : JB.event);
              try {
                this._captureEvent(HH, dX)
              } catch (HH) {
                aX.error("Failed to capture clipboard event", HH)
              }
            };
            ah(yB, "copy", HH, {
              capture: !0
            }), ah(yB, "cut", HH, {
              capture: !0
            }), ah(yB, "paste", HH, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == JB || JB.removeEventListener("blur", this._domEventHandler), Rh(["pointerdown", "pointermove", "pointerup", "pointercancel"], (HH => {
            null == yB || yB.removeEventListener(HH, this._domEventHandler, !0)
          })), null == yB || yB.removeEventListener("submit", this._domEventHandler, !0), null == yB || yB.removeEventListener("change", this._domEventHandler, !0), null == yB || yB.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == yB || yB.removeEventListener("copy", this._copiedTextHandler, !0), null == yB || yB.removeEventListener("cut", this._copiedTextHandler, !0), null == yB || yB.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(HH) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !HH.ok) return void this.startIfEnabled();
          const BH = HH.config;
          BH.elementsChainAsString && (this._elementsChainAsString = BH.elementsChainAsString);
          const LH = BH.autocapture_opt_out;
          var AH;
          fL(LH) && (null === (AH = this._client) || void 0 === AH || AH.kv.set("$autocapture_disabled_server_side", LH), this._isDisabledServerSide = LH), this.startIfEnabled()
        }
        setElementSelectors(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          HH.size ? this._elementSelectorsByOwner.set(BH, new Set(HH)) : this._elementSelectorsByOwner.delete(BH);
          const LH = new Set;
          this._elementSelectorsByOwner.forEach((HH => {
            HH.forEach((HH => LH.add(HH)))
          })), this._elementSelectors = LH
        }
        getElementSelectors(HH, BH) {
          var LH;
          const AH = [];
          return null === (LH = this._elementSelectors) || void 0 === LH || LH.forEach((LH => {
            const rH = null == yB ? void 0 : yB.querySelectorAll(LH);
            null == rH || rH.forEach((rH => {
              HH !== rH && BH !== rH || GL(AH, LH) || AH.push(LH)
            }))
          })), AH
        }
        get isEnabled() {
          var HH, BH;
          if (this._disposed) return !1;
          const LH = null === (HH = this._client) || void 0 === HH ? void 0 : HH.kv.get(cH),
            AH = this._isDisabledServerSide,
            rH = this._refreshConfig();
          if (!rH.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const SH = rH.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (kL(AH) && !fL(LH) && !SH) return !1;
          const hH = null !== (BH = this._isDisabledServerSide) && void 0 !== BH ? BH : !!LH;
          return !!rH.enabled && !hH
        }
        _captureEvent(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            LH = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let AH = LH || gt(HH);
          It(AH) && (AH = AH.parentNode || null);
          const rH = this._compileUrlPatterns();
          var SH;
          "$autocapture" === BH && "click" === HH.type && HH instanceof MouseEvent && rH.rageclick && (null === (SH = this.rageclicks) || void 0 === SH ? void 0 : SH.isRageClick(HH.clientX, HH.clientY, HH.timeStamp || (new Date).getTime())) && Bz(AH, rH.rageclick) && this._captureEvent(HH, "$rageclick", LH);
          const hH = BH === dX,
            tH = hH ? xr(xr({}, rH), {}, {
              dom_event_allowlist: void 0
            }) : rH;
          if (AH && function(HH, BH, LH, AH, rH, SH) {
              var hH;
              if (!JB || Lz(HH)) return !1;
              if ((null == LH ? void 0 : LH.url_allowlist) && !Kt(LH.url_allowlist, SH)) return !1;
              if ((null == LH ? void 0 : LH.url_ignorelist) && Kt(LH.url_ignorelist, SH)) return !1;
              if (null == LH ? void 0 : LH.dom_event_allowlist) {
                const HH = LH.dom_event_allowlist;
                if (HH && !HH.some((HH => BH.type === HH))) return !1
              }
              const {
                parentIsUsefulElement: tH,
                targetElementList: zH
              } = Az(HH, AH);
              if (! function(HH, BH) {
                  const LH = null == BH ? void 0 : BH.element_allowlist;
                  if (VL(LH)) return !0;
                  for (const AH of HH)
                    if (LH.some((HH => AH.tagName.toLowerCase() === HH))) return !0;
                  return !1
                }(zH, LH)) return !1;
              if (!jt(zH, null == LH ? void 0 : LH.css_selector_allowlist)) return !1;
              if (jt(zH, null !== (hH = null == LH ? void 0 : LH.css_selector_ignorelist) && void 0 !== hH ? hH : Ft)) return !1;
              try {
                const LH = JB.getComputedStyle(HH);
                if (LH && "pointer" === LH.getPropertyValue("cursor") && "click" === BH.type) return !0
              } catch (HH) {}
              const CH = HH.tagName.toLowerCase();
              switch (CH) {
                case "html":
                  return !1;
                case "form":
                  return (rH || ["submit"]).indexOf(BH.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (rH || ["change", "click"]).indexOf(BH.type) >= 0;
                default:
                  return tH ? (rH || ["click"]).indexOf(BH.type) >= 0 : (rH || ["click"]).indexOf(BH.type) >= 0 && (Nt.indexOf(CH) > -1 || "true" === HH.getAttribute("contenteditable"))
              }
            }(AH, HH, tH, hH, hH ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: rH.getCurrentUrl
              }
            })) {
            var zH;
            const {
              props: LH,
              explicitNoCapture: SH,
              target: hH
            } = function(HH, BH) {
              let {
                e: LH,
                maskAllElementAttributes: AH,
                maskAllText: rH,
                elementAttributeIgnoreList: SH,
                elementsChainAsString: hH,
                disableCaptureUrlHashes: tH
              } = BH;
              var zH, CH;
              if (!mt(HH)) return {
                props: {}
              };
              const EH = [HH],
                XH = new Set([HH]);
              let GH = HH;
              for (; GH.parentNode && !ot(GH, "body") && 1e3 > EH.length;)
                if (ft(GH.parentNode)) {
                  const HH = GH.parentNode.host;
                  if (XH.has(HH)) break;
                  XH.add(HH), EH.push(HH), GH = HH
                } else {
                  if (!mt(GH.parentNode)) break;
                  if (XH.has(GH.parentNode)) break;
                  XH.add(GH.parentNode), EH.push(GH.parentNode), GH = GH.parentNode
                } const YH = "click" === LH.type && "http://www.w3.org/2000/svg" === HH.namespaceURI ? EH.findIndex((HH => ot(HH, "button") || ot(HH, "a"))) : -1;
              YH > 0 && (rH = rH || EH.slice(0, YH + 1).some((HH => !rz(HH) || Sz(HH))));
              const uH = [],
                QH = {};
              let WH, MH = !1,
                xH = !1;
              if (Rh(EH, (HH => {
                  const BH = rz(HH);
                  if (ot(HH, "a") && !AH && !(null == SH ? void 0 : SH.includes("href"))) {
                    const LH = HH.getAttribute("href");
                    MH = !!(BH && LH && Yz(LH)) && (tH ? Er(LH) : LH)
                  }
                  GL(ct(HH), "ph-no-capture") && (xH = !0), uH.push(function(HH, BH, LH, AH) {
                    let rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const SH = HH.tagName.toLowerCase(),
                      hH = {
                        tag_name: SH
                      };
                    Nt.indexOf(SH) > -1 && !LH && (hH.$el_text = "a" === SH.toLowerCase() || "button" === SH.toLowerCase() ? sX(1024, uz(HH)) : sX(1024, qt(HH)));
                    const tH = ct(HH);
                    BH || (null == AH ? void 0 : AH.includes("class")) || 0 >= tH.length || (hH.classes = tH.filter((function(HH) {
                      return "" !== HH
                    }))), Rh(HH.attributes, (function(LH) {
                      var SH;
                      if ((!Sz(HH) || -1 !== ["name", "id", "class", "aria-label"].indexOf(LH.name)) && !(null == AH ? void 0 : AH.includes(LH.name)) && !BH && Yz(LH.value) && (!OL(SH = LH.name) || "_ngcontent" !== SH.substring(0, 10) && "_nghost" !== SH.substring(0, 7))) {
                        let HH = LH.value;
                        "class" === LH.name && (HH = lt(HH).join(" ")), hH["attr__" + LH.name] = sX(1024, "href" === LH.name && rH ? Er(HH) : HH)
                      }
                    }));
                    let zH = 1,
                      CH = 1,
                      EH = HH;
                    for (; EH = JX(EH);) zH++, EH.tagName === HH.tagName && CH++;
                    return hH.nth_child = zH, hH.nth_of_type = CH, hH
                  }(HH, AH, rH, SH, tH)), Rh(function(HH) {
                    if (!rz(HH)) return {};
                    const BH = {};
                    return Rh(HH.attributes, (function(HH) {
                      if (HH.name && 0 === HH.name.indexOf("data-ph-capture-attribute")) {
                        const LH = HH.name.replace("data-ph-capture-attribute-", ""),
                          AH = HH.value;
                        LH && AH && Yz(AH) && (BH[LH] = AH)
                      }
                    })), BH
                  }(HH), ((HH, BH) => {
                    ({}).hasOwnProperty.call(QH, BH) || (QH[BH] = HH)
                  }))
                })), xH) return {
                props: {},
                explicitNoCapture: xH
              };
              if (YH > 0 && (HH = EH[YH], uH.splice(0, YH)), rH || (uH[0].$el_text = ot(HH, "a") || ot(HH, "button") ? uz(HH) : qt(HH)), MH) {
                var vH, PH;
                uH[0].attr__href = MH;
                const HH = null === (vH = Nz(MH)) || void 0 === vH ? void 0 : vH.host,
                  BH = null == JB || null === (PH = JB.location) || void 0 === PH ? void 0 : PH.host;
                HH && BH && HH !== BH && (WH = MH)
              }
              return {
                props: jh((UH = LH.type, {
                  $event_type: UH,
                  $ce_version: 1
                }), hH ? {} : {
                  $elements: uH
                }, {
                  $elements_chain: (TH = uH, vL(TH) ? function(HH) {
                    return HH.map((HH => {
                      var BH, LH;
                      let AH = "";
                      if (HH.tag_name && (AH += HH.tag_name), HH.attr_class) {
                        HH.attr_class.sort();
                        for (const BH of HH.attr_class) AH += `.${BH.replace(/"/g,"")}`
                      }
                      const rH = xr(xr(xr(xr({}, HH.text ? {
                          text: HH.text
                        } : {}), {}, {
                          "nth-child": null !== (BH = HH.nth_child) && void 0 !== BH ? BH : 0,
                          "nth-of-type": null !== (LH = HH.nth_of_type) && void 0 !== LH ? LH : 0
                        }, HH.href ? {
                          href: HH.href
                        } : {}), HH.attr_id ? {
                          attr_id: HH.attr_id
                        } : {}), HH.attributes),
                        SH = {};
                      return nh(rH).sort(((HH, BH) => {
                        let [LH] = HH, [AH] = BH;
                        return function(HH, BH) {
                          return BH > HH ? -1 : HH > BH ? 1 : 0
                        }(LH, AH)
                      })).forEach((HH => {
                        let [BH, LH] = HH;
                        return SH[Wz(BH.toString())] = Wz(LH.toString())
                      })), AH += ":", AH += nh(SH).map((HH => {
                        let [BH, LH] = HH;
                        return `${BH}="${LH}"`
                      })).join(""), AH
                    })).join(";")
                  }(function(HH) {
                    return HH.map((HH => {
                      var BH, LH;
                      const AH = {
                        text: null === (BH = HH.$el_text) || void 0 === BH ? void 0 : BH.slice(0, 400),
                        tag_name: HH.tag_name,
                        href: null === (LH = HH.attr__href) || void 0 === LH ? void 0 : LH.slice(0, 2048),
                        attr_class: Mz(HH),
                        attr_id: HH.attr__id,
                        nth_child: HH.nth_child,
                        nth_of_type: HH.nth_of_type,
                        attributes: {}
                      };
                      return nh(HH).filter((HH => {
                        let [BH] = HH;
                        return 0 === BH.indexOf("attr__")
                      })).forEach((HH => {
                        let [BH, LH] = HH;
                        return AH.attributes[BH] = LH
                      })), AH
                    }))
                  }(TH)) : "")
                }, (null === (zH = uH[0]) || void 0 === zH ? void 0 : zH.$el_text) ? {
                  $el_text: null === (CH = uH[0]) || void 0 === CH ? void 0 : CH.$el_text
                } : {}, WH && "click" === LH.type ? {
                  $external_click_url: WH
                } : {}, QH),
                target: HH
              };
              var TH, UH
            }(AH, {
              e: HH,
              maskAllElementAttributes: rH.maskAllElementAttributes,
              maskAllText: rH.maskAllText,
              elementAttributeIgnoreList: rH.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: rH.disableCaptureUrlHashes
            });
            if (SH) return !1;
            const tH = this.getElementSelectors(AH, hH);
            if (tH && tH.length > 0 && (LH.$element_selectors = tH), BH === dX) {
              const BH = HH.type || "clipboard";
              if ("paste" !== BH) {
                var CH, EH;
                const HH = null == JB || null === (CH = JB.getSelection()) || void 0 === CH ? void 0 : CH.toString(),
                  BH = et(HH);
                if (!BH) return !1;
                LH.$selected_content = BH, LH.$clipboard_text_length = null !== (EH = null == HH ? void 0 : HH.length) && void 0 !== EH ? EH : 0
              }
              LH.$copy_type = BH
            }
            return null === (zH = this._client) || void 0 === zH || zH.capture(BH, LH), !0
          }
        }
        isBrowserSupported() {
          return PL(null == yB ? void 0 : yB.querySelectorAll)
        }
      },
      pX = class {
        constructor(HH) {
          this._instance = HH
        }
        refresh(HH) {
          const BH = this._instance.config,
            LH = TL(BH.autocapture) ? BH.autocapture : void 0;
          HH.enabled = !!BH.autocapture, HH.rageclick = BH.rageclick, HH.maskAllElementAttributes = BH.mask_all_element_attributes, HH.maskAllText = BH.mask_all_text, HH.disableCaptureUrlHashes = BH.disable_capture_url_hashes, HH.getCurrentUrl = BH.get_current_url, HH.remoteRequestsDisabled = this._instance._shouldDisableFlags(), HH.url_allowlist = null == LH ? void 0 : LH.url_allowlist, HH.url_ignorelist = null == LH ? void 0 : LH.url_ignorelist, HH.dom_event_allowlist = null == LH ? void 0 : LH.dom_event_allowlist, HH.element_allowlist = null == LH ? void 0 : LH.element_allowlist, HH.css_selector_allowlist = null == LH ? void 0 : LH.css_selector_allowlist, HH.css_selector_ignorelist = null == LH ? void 0 : LH.css_selector_ignorelist, HH.element_attribute_ignorelist = null == LH ? void 0 : LH.element_attribute_ignorelist, HH.capture_copied_text = null == LH ? void 0 : LH.capture_copied_text
        }
      };
    const yX = gh("[ExceptionAutocapture]"),
      HG = () => {},
      BG = HH => {
        var BH;
        if (PL(HH)) return null !== (BH = HH.__posthog_layer__) && void 0 !== BH ? BH : HH.__rrweb_layer__
      };

    function LG(HH, BH, LH) {
      try {
        if (!(BH in HH)) return HG;
        const AH = {
            next: HH[BH]
          },
          rH = LH((function() {
            for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
            return AH.next.apply(this, BH)
          }));
        return PL(rH) && (rH.prototype = rH.prototype || {}, Object.defineProperties(rH, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: AH
          }
        })), HH[BH] = rH, () => {
          if (HH[BH] === rH) return void(HH[BH] = AH.next);
          let LH = HH[BH],
            SH = BG(LH);
          for (; SH;) {
            if (SH.next === rH) return void(SH.next = AH.next);
            LH = SH.next, SH = BG(LH)
          }
        }
      } catch (HH) {
        return HG
      }
    }
    const AG = gh("[TracingHeaders]"),
      rG = gh("[Web Vitals]"),
      SG = 9e5,
      hG = ["CLS", "FCP", "INP", "LCP"],
      tG = ["INP", "LCP"],
      zG = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      CG = "disabled",
      EG = "lazy_loading",
      XG = gh("[SessionRecording]"),
      GG = [IB, fB, lB, KB, cB, eB, qB, gB, NB],
      YG = gh("[Heatmaps]");

    function uG(HH) {
      return TL(HH) && "clientX" in HH && "clientY" in HH && oL(HH.clientX) && oL(HH.clientY)
    }
    const QG = gh("[Product Tours]"),
      WG = HH => {
        var BH;
        return !HH.config.disable_product_tours && !!(null === (BH = HH.persistence) || void 0 === BH ? void 0 : BH.get_property(nH))
      },
      MG = ["$set_once", "$set"],
      xG = gh("[SiteApps]"),
      vG = "Error while initializing PostHog app with config id ",
      PG = (HH, BH) => (null == HH ? void 0 : HH.then) ? HH.then(BH) : BH(HH),
      TG = "SDK is not enabled or survey functionality is not yet loaded",
      UG = "Disabled. Not loading surveys.";
    var VG = class {
      constructor(HH, BH) {
        this._configSource = HH, this._initialClientState = BH, this.name = PX, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = HH => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!HH.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), EX.warn("Remote config unavailable. Not loading surveys.");
          const BH = HH.config.surveys;
          if (mL(BH)) return EX.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = fL(BH) ? BH : BH.length > 0, EX.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = HH => {
          this._activeMatchingSurveyCallbacks.slice().forEach((BH => this._notifyActiveMatchingSurveyCallback(BH, HH)))
        }
      }
      setup(HH) {
        if (!this._disposed) return this._initializingClient = HH, PG(HH.kv.initialize(), (() => {
          if (this._initializingClient !== HH || this._disposed) return;
          this._initializingClient = void 0, this._client = HH;
          const BH = HH.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? BH.dispose() : (this._remoteConfigSubscription = BH, this.loadIfEnabled())
        }))
      }
      dispose() {
        var HH, BH, LH, AH, rH;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (HH = this._remoteConfigSubscription) || void 0 === HH || HH.dispose(), this._remoteConfigSubscription = void 0, null === (BH = this._surveyEventReceiver) || void 0 === BH || BH.dispose(), this._surveyEventReceiver = null, null === (LH = this._surveyManager) || void 0 === LH || null === (AH = LH.dispose) || void 0 === AH || AH.call(LH), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((HH => {
          HH.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (rH = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === rH || rH.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((HH => clearTimeout(HH))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var HH, BH;
        null === (HH = this._surveyManager) || void 0 === HH || null === (BH = HH.clearInMemoryInProgressSurveyState) || void 0 === BH || BH.call(HH);
        try {
          var LH;
          null === (LH = this._surveyEventReceiver) || void 0 === LH || LH.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const HH = [];
          for (let BH = 0; BH < localStorage.length; BH++) {
            const LH = localStorage.key(BH);
            ((null == LH ? void 0 : LH.startsWith("seenSurvey_")) || (null == LH ? void 0 : LH.startsWith("inProgressSurvey_"))) && HH.push(LH)
          }
          HH.forEach((HH => localStorage.removeItem(HH)))
        } catch (HH) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const HH = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void EX.info("Already initializing surveys, skipping...");
        if (HH.disableSurveys) return void EX.info(UG);
        if (HH.cookielessMode && this._configSource.isOptedOut()) return void EX.info("Not loading surveys in cookieless mode without consent.");
        const BH = this._configSource.getExtensions();
        if (!BH) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (VL(this._isSurveysEnabled) && !HH.advancedEnableSurveys) return;
        const LH = this._isSurveysEnabled || HH.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const HH = BH.generateSurveys;
          if (HH) return this._completeSurveyInitialization(HH, LH), void(this._isInitializingSurveys = !1);
          const AH = BH.loadExternalDependency;
          if (!AH) return this._handleSurveyLoadError(jB), void(this._isInitializingSurveys = !1);
          AH((HH => {
            try {
              if (this._disposed) return;
              const BH = this._configSource.getExtensions();
              HH || !(null == BH ? void 0 : BH.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", HH) : this._completeSurveyInitialization(BH.generateSurveys, LH)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (HH) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", HH), HH
        }
      }
      _completeSurveyInitialization(HH, BH) {
        var LH, AH;
        if (this._disposed) return;
        this._surveyManager = HH(BH), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const rH = null === (LH = null !== (AH = this._client) && void 0 !== AH ? AH : this._initialClientState) || void 0 === LH ? void 0 : LH.kv.get(hB);
        rH && this._registerEventOrActionBasedSurveys(rH), EX.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(HH, BH) {
        this._surveyInitializationFailed = !0, EX.error(HH, BH), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: HH
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: HH
        })
      }
      onSurveysLoaded(HH) {
        return this._surveyCallbacks.push(HH), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((BH => BH !== HH))
        }
      }
      getSurveys(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var LH;
        const AH = null !== (LH = this._client) && void 0 !== LH ? LH : this._initialClientState;
        if (!AH || this._disposed) return;
        if (this._config.disableSurveys) return EX.info(UG), HH([]);
        const rH = AH.kv.get(hB);
        if (rH && !BH) return HH(rH, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((BH => {
          let {
            surveys: LH,
            context: AH
          } = BH;
          this._disposed || HH(LH, AH)
        })).catch((HH => EX.error("Error in survey callback", HH)));
        const SH = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: AH.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((HH => {
          try {
            return this._handleSurveyResponse(AH, HH)
          } catch (HH) {
            return EX.error("Error processing surveys response", HH), this._handleSurveyResponse(AH, {
              statusCode: 0,
              error: HH
            })
          }
        }), (HH => this._handleSurveyResponse(AH, {
          statusCode: 0,
          error: HH
        })));
        this._getSurveysInFlightPromise = SH;
        const hH = () => {
          this._getSurveysInFlightPromise === SH && (this._getSurveysInFlightPromise = null)
        };
        SH.then((BH => {
          hH(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(BH.context), HH(BH.surveys, BH.context))
        }), hH).catch((HH => EX.error("Error in survey callback", HH)))
      }
      _sendSurveysRequest(HH, BH) {
        const LH = this._client;
        return LH ? LH.sendRequest(HH, BH) : new Promise((HH => HH({
          statusCode: 0,
          error: new Error(TG)
        })))
      }
      _handleSurveyResponse(HH, BH) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: TG
          }
        };
        const LH = BH.statusCode;
        if (200 !== LH || !BH.json) {
          const HH = `Surveys API could not be loaded, status: ${LH}`;
          return 0 !== LH ? EX.error(HH) : BH.error || EX.warn(HH), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: HH
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const AH = BH.json.surveys || [];
        return HH.kv.set({
          [hB]: AH,
          [tB]: Date.now()
        }), this._registerEventOrActionBasedSurveys(AH), {
          surveys: AH,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(HH) {
        var BH;
        const LH = HH.filter((HH => function(HH) {
          return !(!HH.start_date || HH.end_date)
        }(HH) && (yE(HH) || function(HH) {
          var BH;
          return !!(null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.actions) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length)
        }(HH))));
        null === (BH = this._surveyEventReceiver) || void 0 === BH || BH.replace(LH)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var HH, BH;
        const LH = null === (HH = null !== (BH = this._client) && void 0 !== BH ? BH : this._initialClientState) || void 0 === HH ? void 0 : HH.kv.get(tB);
        return oL(LH) && Date.now() - LH > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return oL(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(HH, BH) {
        var LH;
        const AH = {
          id: HH,
          current_iteration: null !== (LH = null == BH ? void 0 : BH.iteration) && void 0 !== LH ? LH : null
        };
        XX(AH);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (HH) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(HH) {
        for (const BH of this._surveyCallbacks) try {
          if (!HH.isLoaded) return BH([], HH);
          this.getSurveys(BH)
        } catch (HH) {
          EX.error("Error in survey callback", HH)
        }
      }
      getActiveMatchingSurveys(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!mL(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(HH, BH);
        EX.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(HH) {
        var BH, LH;
        if (this._disposed) return () => {};
        const AH = {
          callback: HH,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(AH), this._startActiveMatchingSurveyConditions();
        const rH = null === (BH = null !== (LH = this._client) && void 0 !== LH ? LH : this._initialClientState) || void 0 === BH ? void 0 : BH.kv.get(hB);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !rH && !mL(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(AH, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(AH), () => {
          var HH;
          AH.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((HH => HH !== AH)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (HH = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === HH || HH.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var HH, BH, LH;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (HH = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== HH || (this._activeMatchingSurveyConditionsUnsubscribe = null === (BH = (LH = this._configSource).onMatchingConditionsChanged) || void 0 === BH ? void 0 : BH.call(LH, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(HH, BH) {
        if (this._disposed || !HH.active) return;
        const LH = ++HH.revision,
          AH = AH => {
            if (!this._disposed && HH.active && LH === HH.revision) try {
              const LH = null != BH ? BH : {
                  isLoaded: !0
                },
                rH = JSON.stringify([AH, LH]);
              if (rH === HH.lastResult) return;
              HH.lastResult = rH, HH.callback(AH, LH)
            } catch (HH) {
              EX.error("Error in active matching surveys callback", HH)
            }
          };
        try {
          BH && !BH.isLoaded ? AH([]) : this.getActiveMatchingSurveys(AH)
        } catch (HH) {
          EX.error("Error in active matching surveys callback", HH)
        }
      }
      _getSurveyById(HH) {
        let BH = null;
        return this.getSurveys((LH => {
          var AH;
          BH = null !== (AH = LH.find((BH => BH.id === HH))) && void 0 !== AH ? AH : null
        })), BH
      }
      _checkSurveyEligibility(HH) {
        if (mL(this._surveyManager)) return {
          eligible: !1,
          reason: TG
        };
        const BH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
        return BH ? this._surveyManager.checkSurveyEligibility(BH) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(HH) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (mL(this._surveyManager)) return {
          eligible: !1,
          reason: TG
        };
        const BH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
        return BH ? this._surveyManager.checkSurveyRenderability(BH) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(HH) {
        if (mL(this._surveyManager)) return EX.warn("init was not called"), {
          visible: !1,
          disabledReason: TG
        };
        const BH = this._checkSurveyRenderability(HH);
        return {
          visible: BH.eligible,
          disabledReason: BH.reason
        }
      }
      canRenderSurveyAsync(HH, BH) {
        return mL(this._surveyManager) ? (EX.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: TG
        })) : new Promise((LH => {
          this.getSurveys((BH => {
            var AH;
            const rH = null !== (AH = BH.find((BH => BH.id === HH))) && void 0 !== AH ? AH : null;
            if (rH) {
              const HH = this._checkSurveyRenderability(rH);
              LH({
                visible: HH.eligible,
                disabledReason: HH.reason
              })
            } else LH({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), BH)
        }))
      }
      renderSurvey(HH, BH, LH) {
        var AH;
        if (!this._configSource.isCapturing()) return;
        if (mL(this._surveyManager)) return void EX.warn("init was not called");
        const rH = "string" == typeof HH ? this._getSurveyById(HH) : HH;
        if (!(null == rH ? void 0 : rH.id)) return void EX.warn("Survey not found");
        if (!GX.includes(rH.type)) return void EX.warn(`Surveys of type ${rH.type} cannot be rendered in the app`);
        const SH = null == yB ? void 0 : yB.querySelector(BH);
        if (SH) {
          if (null === (AH = rH.appearance) || void 0 === AH ? void 0 : AH.surveyPopupDelaySeconds) {
            EX.info(`Rendering survey ${rH.id} with delay of ${rH.appearance.surveyPopupDelaySeconds} seconds`);
            const HH = setTimeout((() => {
              var BH, AH;
              this._renderTimeouts.delete(HH), !this._disposed && this._configSource.isCapturing() && (EX.info(`Rendering survey ${rH.id} with delay of ${null===(BH=rH.appearance)||void 0===BH?void 0:BH.surveyPopupDelaySeconds} seconds`), null === (AH = this._surveyManager) || void 0 === AH || AH.renderSurvey(rH, SH, LH), EX.info(`Survey ${rH.id} rendered`))
            }), 1e3 * rH.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(HH)
          }
          this._surveyManager.renderSurvey(rH, SH, LH)
        } else EX.warn("Survey element not found")
      }
      displaySurvey(HH, BH) {
        var LH;
        if (!this._configSource.isCapturing()) return;
        if (mL(this._surveyManager)) return void EX.warn("init was not called");
        const AH = this._getSurveyById(HH);
        if (!AH) return void EX.warn("Survey not found");
        let rH = AH;
        if ((null === (LH = AH.appearance) || void 0 === LH ? void 0 : LH.surveyPopupDelaySeconds) && BH.ignoreDelay && (rH = xr(xr({}, AH), {}, {
            appearance: xr(xr({}, AH.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), BH.displayType !== oC && BH.initialResponses && EX.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === BH.ignoreConditions) {
          const HH = this._checkSurveyEligibility(AH);
          if (!HH.eligible) return void EX.warn("Survey is not eligible to be displayed: ", HH.reason)
        }
        BH.displayType !== IC ? this._surveyManager.handlePopoverSurvey(rH, BH) : this.renderSurvey(rH, BH.selector, BH.properties)
      }
      cancelPendingSurvey(HH) {
        mL(this._surveyManager) ? EX.warn("init was not called") : this._surveyManager.cancelSurvey(HH)
      }
      handlePageUnload() {
        var HH, BH;
        null === (HH = this._surveyManager) || void 0 === HH || null === (BH = HH.handlePageUnload) || void 0 === BH || BH.call(HH)
      }
    };

    function OG(HH, BH, LH) {
      if (mL(HH)) return !1;
      switch (LH) {
        case "exact":
          return HH === BH;
        case "contains": {
          const LH = BH.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(LH, "i").test(HH)
        }
        case "regex":
          try {
            return new RegExp(BH).test(HH)
          } catch (HH) {
            return !1
          }
        default:
          return !1
      }
    }
    var bG = class {
        constructor(HH) {
          this._instance = HH, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new ZE, this._checkStep = (HH, BH) => this._checkStepEvent(HH, BH) && this._checkStepUrl(HH, BH) && this._checkStepElement(HH, BH) && this._checkStepProperties(HH, BH), this._checkStepEvent = (HH, BH) => !(null == BH ? void 0 : BH.event) || (null == HH ? void 0 : HH.event) === (null == BH ? void 0 : BH.event)
        }
        init() {
          var HH, BH;
          VL(null === (HH = this._instance) || void 0 === HH ? void 0 : HH._addCaptureHook) || (this._captureHookUnsubscribe = null === (BH = this._instance) || void 0 === BH ? void 0 : BH._addCaptureHook(((HH, BH) => {
            this.on(HH, BH)
          })))
        }
        dispose() {
          var HH, BH;
          null === (HH = this._captureHookUnsubscribe) || void 0 === HH || HH.call(this), this._captureHookUnsubscribe = void 0, null === (BH = this._instance) || void 0 === BH || null === (BH = BH.autocapture) || void 0 === BH || BH.setElementSelectors(new Set, this), this._debugEventEmitter = new ZE
        }
        register(HH) {
          var BH, LH;
          if (!VL(null === (BH = this._instance) || void 0 === BH ? void 0 : BH._addCaptureHook) && (HH.forEach((HH => {
              var BH;
              this._actionRegistry.add(HH), null === (BH = HH.steps) || void 0 === BH || BH.forEach((HH => {
                this._actionEvents.add((null == HH ? void 0 : HH.event) || "")
              }))
            })), null === (LH = this._instance) || void 0 === LH ? void 0 : LH.autocapture)) {
            const HH = new Set;
            this._actionRegistry.forEach((BH => {
              var LH;
              null === (LH = BH.steps) || void 0 === LH || LH.forEach((BH => {
                (null == BH ? void 0 : BH.selector) && HH.add(BH.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(HH, this)
          }
        }
        replace(HH) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(HH)
        }
        on(HH, BH) {
          null != BH && 0 != HH.length && (this._actionEvents.has(HH) || this._actionEvents.has(BH.event)) && this._actionRegistry.forEach((HH => {
            this._checkAction(BH, HH) && this._debugEventEmitter.emit("actionCaptured", HH.name)
          }))
        }
        _addActionHook(HH) {
          this.onAction("actionCaptured", (BH => HH(BH)))
        }
        _checkAction(HH, BH) {
          if (null == (null == BH ? void 0 : BH.steps)) return !1;
          for (const LH of BH.steps)
            if (this._checkStep(HH, LH)) return !0;
          return !1
        }
        onAction(HH, BH) {
          return this._debugEventEmitter.on(HH, BH)
        }
        _checkStepUrl(HH, BH) {
          if (null == BH ? void 0 : BH.url) {
            var LH;
            const AH = null == HH || null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$current_url;
            if (!AH || "string" != typeof AH) return !1;
            if (!OG(AH, BH.url, BH.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(HH, BH) {
          return !!this._checkStepHref(HH, BH) && !!this._checkStepText(HH, BH) && !!this._checkStepSelector(HH, BH)
        }
        _checkStepHref(HH, BH) {
          var LH;
          if (!(null == BH ? void 0 : BH.href)) return !0;
          const AH = this._getElementsList(HH);
          if (AH.length > 0) return AH.some((HH => OG(HH.href, BH.href, BH.href_matching || "exact")));
          const rH = (null == HH || null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$elements_chain) || "";
          return !!rH && OG(function(HH) {
            const BH = HH.match(/(?::|")href="(.*?)"/);
            return BH ? BH[1] : ""
          }(rH), BH.href, BH.href_matching || "exact")
        }
        _checkStepText(HH, BH) {
          var LH;
          if (!(null == BH ? void 0 : BH.text)) return !0;
          const AH = this._getElementsList(HH);
          if (AH.length > 0) return AH.some((HH => OG(HH.text, BH.text, BH.text_matching || "exact") || OG(HH.$el_text, BH.text, BH.text_matching || "exact")));
          const rH = (null == HH || null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$elements_chain) || "";
          return !!rH && (SH = function(HH) {
            const BH = [],
              LH = /(?::|")text="(.*?)"/g;
            let AH;
            for (; !mL(AH = LH.exec(HH));) BH.includes(AH[1]) || BH.push(AH[1]);
            return BH
          }(rH), hH = BH.text, tH = BH.text_matching || "exact", SH.some((HH => OG(HH, hH, tH))));
          var SH, hH, tH
        }
        _checkStepSelector(HH, BH) {
          var LH, AH;
          if (!(null == BH ? void 0 : BH.selector)) return !0;
          const rH = null == HH || null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$element_selectors;
          if (null == rH ? void 0 : rH.includes(BH.selector)) return !0;
          const SH = (null == HH || null === (AH = HH.properties) || void 0 === AH ? void 0 : AH.$elements_chain) || "";
          if (BH.selector_regex && SH) try {
            return new RegExp(BH.selector_regex).test(SH)
          } catch (HH) {
            return !1
          }
          return !1
        }
        _getElementsList(HH) {
          var BH;
          return null == (null == HH || null === (BH = HH.properties) || void 0 === BH ? void 0 : BH.$elements) ? [] : null == HH ? void 0 : HH.properties.$elements
        }
        _checkStepProperties(HH, BH) {
          return !(null == BH ? void 0 : BH.properties) || 0 === BH.properties.length || AX(BH.properties.reduce(((HH, BH) => {
            const LH = vL(BH.value) ? BH.value.map(String) : null != BH.value ? [String(BH.value)] : [];
            return HH[BH.key] = {
              values: LH,
              operator: BH.operator || "exact"
            }, HH
          }), {}), null == HH ? void 0 : HH.properties)
        }
      },
      kG = class {
        constructor(HH, BH) {
          var LH, AH;
          this._pendingActivatedItems = [], this._instance = HH, this._onActivationChanged = BH, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (LH = this._instance) || void 0 === LH || null === (AH = LH.onSessionId) || void 0 === AH ? void 0 : AH.call(LH, (HH => this._onSessionIdChanged(HH)))
        }
        _shouldPersistArmedActivation(HH) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(HH) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(HH, BH) {
          return !!HH && AX(HH.propertyFilters, null == BH ? void 0 : BH.properties)
        }
        _buildEventToItemMap(HH, BH) {
          const LH = new Map;
          return HH.forEach((HH => {
            var AH;
            null === (AH = HH.conditions) || void 0 === AH || null === (AH = AH[BH]) || void 0 === AH || null === (AH = AH.values) || void 0 === AH || AH.forEach((BH => {
              if (null == BH ? void 0 : BH.name) {
                const AH = LH.get(BH.name) || [];
                AH.push(HH.id), LH.set(BH.name, AH)
              }
            }))
          })), LH
        }
        _getMatchingItems(HH, BH, LH) {
          const AH = (LH === MC ? this._eventToItems : this._cancelEventToItems).get(HH);
          let rH = [];
          return this._getItems((HH => {
            rH = HH.filter((HH => null == AH ? void 0 : AH.includes(HH.id)))
          })), rH.filter((AH => {
            var rH;
            const SH = null === (rH = AH.conditions) || void 0 === rH || null === (rH = rH[LH]) || void 0 === rH || null === (rH = rH.values) || void 0 === rH ? void 0 : rH.find((BH => BH.name === HH));
            return this._doesEventMatchFilter(SH, BH)
          }))
        }
        register(HH) {
          this._register(HH, !1)
        }
        replace(HH) {
          this._register(HH, !0)
        }
        _register(HH, BH) {
          var LH;
          VL(null === (LH = this._instance) || void 0 === LH ? void 0 : LH._addCaptureHook) || (this._setupEventBasedItems(HH, BH), this._setupActionBasedItems(HH, BH))
        }
        _setupActionBasedItems(HH, BH) {
          const LH = HH.filter((HH => {
            var BH;
            return null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.actions) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length
          }));
          var AH;
          if (BH && this._actionToItems.clear(), 0 === LH.length) return void(BH && (null === (AH = this._actionMatcher) || void 0 === AH || AH.replace([])));
          this._actionMatcher || (this._actionMatcher = new bG(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((HH => this.onAction(HH))));
          const rH = [];
          LH.forEach((HH => {
            var BH;
            null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.actions) || void 0 === BH || BH.values.forEach((BH => {
              if (rH.push(BH), BH.name) {
                var LH;
                const AH = null !== (LH = this._actionToItems.get(BH.name)) && void 0 !== LH ? LH : [];
                AH.includes(HH.id) || AH.push(HH.id), this._actionToItems.set(BH.name, AH)
              }
            }))
          })), BH ? this._actionMatcher.replace(rH) : this._actionMatcher.register(rH)
        }
        _mergeItemMaps(HH, BH) {
          BH.forEach(((BH, LH) => {
            var AH;
            const rH = null !== (AH = HH.get(LH)) && void 0 !== AH ? AH : [];
            BH.forEach((HH => {
              rH.includes(HH) || rH.push(HH)
            })), HH.set(LH, rH)
          }))
        }
        _setupEventBasedItems(HH, BH) {
          var LH, AH;
          const rH = HH.filter((HH => {
              var BH, LH;
              return (null === (BH = HH.conditions) || void 0 === BH ? void 0 : BH.events) && (null === (LH = HH.conditions) || void 0 === LH || null === (LH = LH.events) || void 0 === LH || null === (LH = LH.values) || void 0 === LH ? void 0 : LH.length) > 0
            })),
            SH = HH.filter((HH => {
              var BH, LH;
              return (null === (BH = HH.conditions) || void 0 === BH ? void 0 : BH.cancelEvents) && (null === (LH = HH.conditions) || void 0 === LH || null === (LH = LH.cancelEvents) || void 0 === LH || null === (LH = LH.values) || void 0 === LH ? void 0 : LH.length) > 0
            })),
            hH = this._buildEventToItemMap(HH, MC),
            tH = this._buildEventToItemMap(HH, xC);
          BH ? (this._eventToItems = hH, this._cancelEventToItems = tH) : (this._mergeItemMaps(this._eventToItems, hH), this._mergeItemMaps(this._cancelEventToItems, tH)), (0 !== rH.length || 0 !== SH.length || HH.some((HH => {
            var BH;
            return null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.actions) || void 0 === BH || null === (BH = BH.values) || void 0 === BH ? void 0 : BH.length
          }))) && (null !== (LH = this._captureHookUnsubscribe) && void 0 !== LH || (this._captureHookUnsubscribe = null === (AH = this._instance) || void 0 === AH ? void 0 : AH._addCaptureHook(((HH, BH) => {
            this.onEvent(HH, BH)
          }))))
        }
        onEvent(HH, BH) {
          var LH, AH;
          const rH = this._getLogger(),
            SH = (null == BH || null === (LH = BH.properties) || void 0 === LH ? void 0 : LH.$survey_id) || (null == BH || null === (AH = BH.properties) || void 0 === AH ? void 0 : AH.$product_tour_id);
          if (SH && this.getActivatedIds().includes(SH)) {
            const LH = this._activationOutcome(HH, SH, BH);
            if ("consume" === LH) return rH.info("event consumed activated item, removing it", {
              event: HH,
              itemId: SH
            }), void this._deactivateItems([SH]);
            if ("persist" === LH) return rH.info("shown item promoted to persisted activation", {
              event: HH,
              itemId: SH
            }), this._persistActivation(SH), void this._clearActivationTimestamps([SH])
          }
          if (this._cancelEventToItems.has(HH)) {
            const LH = this._getMatchingItems(HH, BH, xC);
            LH.length > 0 && (rH.info("cancel event matched, cancelling items", {
              event: HH,
              itemsToCancel: LH.map((HH => HH.id))
            }), this._deactivateItems(LH.map((HH => HH.id))), LH.forEach((HH => this._cancelPendingItem(HH.id))))
          }
          if (!this._eventToItems.has(HH)) return;
          rH.info("event name matched", {
            event: HH,
            eventPayload: BH,
            items: this._eventToItems.get(HH)
          });
          const hH = this._getMatchingItems(HH, BH, MC);
          this._activateItems(hH.map((HH => HH.id)))
        }
        onAction(HH) {
          this._actionToItems.has(HH) && this._activateItems(this._actionToItems.get(HH) || [])
        }
        _activateItems(HH) {
          var BH, LH;
          if (0 === HH.length) return;
          const AH = !!(null === (BH = this._instance) || void 0 === BH || null === (LH = BH.get_session_id) || void 0 === LH ? void 0 : LH.call(BH)),
            rH = [];
          for (const SH of HH) AH && this._shouldPersistArmedActivation(SH) ? this._persistActivation(SH) && this._recordActivationTimestamp(SH) : rH.push(SH);
          rH.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...rH])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(HH) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((BH => BH !== HH));
          const BH = this._getPersistedActivatedIds();
          return !BH.includes(HH) && (this._setActivatedItems([...BH, HH]), this._stampActivationSession(), !0)
        }
        _deactivateItems(HH) {
          const BH = new Set(HH);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((HH => !BH.has(HH)));
          const LH = this._getRawPersistedActivatedIds(),
            AH = LH.filter((HH => !BH.has(HH)));
          AH.length !== LH.length && (this._setActivatedItems(AH), 0 === AH.length && this._clearActivationSession()), this._clearActivationTimestamps(HH), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var HH;
            null === (HH = this._onActivationChanged) || void 0 === HH || HH.call(this)
          } catch (HH) {
            this._getLogger().error("Error while handling activated items change", HH)
          }
        }
        _getRawActivationTimestamps() {
          var HH;
          const BH = this._getActivationTimestampsKey();
          if (!BH) return {};
          const LH = null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH ? void 0 : HH.props[BH];
          return LH && "object" == typeof LH ? LH : {}
        }
        _recordActivationTimestamp(HH) {
          if (!this._getActivationTimestampsKey()) return;
          const BH = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(xr(xr({}, BH), {}, {
            [HH]: Date.now()
          }))
        }
        _clearActivationTimestamps(HH) {
          if (!this._getActivationTimestampsKey()) return;
          const BH = this._getRawActivationTimestamps(),
            LH = {};
          let AH = !1;
          for (const [rH, SH] of Object.entries(BH)) HH.includes(rH) ? AH = !0 : LH[rH] = SH;
          AH && (UL(LH) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(LH))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(HH) {
          if (!this._getPersistedActivatedIds().includes(HH)) return;
          const BH = this._getRawActivationTimestamps()[HH];
          return oL(BH) ? BH : void 0
        }
        _getRawPersistedActivatedIds() {
          var HH;
          const BH = this._getActivatedKey();
          return (null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH ? void 0 : HH.props[BH]) || []
        }
        _getPersistedActivatedIds() {
          var HH, BH, LH;
          const AH = this._getRawPersistedActivatedIds();
          if (0 === AH.length) return [];
          const rH = null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH ? void 0 : HH.props[this._getActivatedSessionKey()],
            SH = null === (BH = this._instance) || void 0 === BH || null === (LH = BH.get_session_id) || void 0 === LH ? void 0 : LH.call(BH);
          return SH && rH === SH ? AH : []
        }
        _stampActivationSession() {
          var HH, BH;
          const LH = null === (HH = this._instance) || void 0 === HH || null === (BH = HH.get_session_id) || void 0 === BH ? void 0 : BH.call(HH);
          LH && this._setActivatedSession(LH)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(HH) {
          var BH;
          const LH = null === (BH = this._instance) || void 0 === BH || null === (BH = BH.persistence) || void 0 === BH ? void 0 : BH.props[this._getActivatedSessionKey()];
          if (LH && LH !== HH) {
            const HH = this._getRawPersistedActivatedIds(),
              BH = this._getRawActivationTimestamps();
            HH.length > 0 && (this._setActivatedItems([]), HH.filter((HH => oL(BH[HH]))).forEach((HH => this._cancelPendingItem(HH)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), HH.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((HH => !this._isItemPermanentlyIneligible(HH)))
        }
        dispose() {
          var HH, BH, LH;
          null === (HH = this._sessionIdUnsubscribe) || void 0 === HH || HH.call(this), this._sessionIdUnsubscribe = void 0, null === (BH = this._captureHookUnsubscribe) || void 0 === BH || BH.call(this), this._captureHookUnsubscribe = void 0, null === (LH = this._actionMatcher) || void 0 === LH || LH.dispose(), this._actionMatcher = void 0
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
      mG = class extends kG {
        constructor(HH, BH) {
          super(HH, BH)
        }
        _getActivatedKey() {
          return zB
        }
        _getActivatedSessionKey() {
          return CB
        }
        _getActivationTimestampsKey() {
          return EB
        }
        _writeActivationTimestamps(HH) {
          var BH;
          null === (BH = this._instance) || void 0 === BH || null === (BH = BH.persistence) || void 0 === BH || BH.register({
            $surveys_activated_timestamps: HH
          })
        }
        _clearActivationTimestampsStore() {
          var HH;
          null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH || HH.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(HH) {
          var BH;
          let LH;
          this._getItems((BH => {
            LH = BH.find((BH => BH.id === HH))
          }));
          const AH = null == LH || null === (BH = LH.appearance) || void 0 === BH ? void 0 : BH.surveyPopupDelaySeconds;
          return oL(AH) && AH > 0
        }
        _getShownEventName() {
          return UC
        }
        _getItems(HH) {
          var BH;
          null === (BH = this._instance) || void 0 === BH || BH.getSurveys(HH)
        }
        _cancelPendingItem(HH) {
          var BH;
          null === (BH = this._instance) || void 0 === BH || BH.cancelPendingSurvey(HH)
        }
        _getLogger() {
          return EX
        }
        _setActivatedItems(HH) {
          var BH;
          null === (BH = this._instance) || void 0 === BH || null === (BH = BH.persistence) || void 0 === BH || BH.register({
            $surveys_activated: HH
          })
        }
        _setActivatedSession(HH) {
          var BH;
          null === (BH = this._instance) || void 0 === BH || null === (BH = BH.persistence) || void 0 === BH || BH.register({
            $surveys_activated_session: HH
          })
        }
        _clearActivatedSession() {
          var HH;
          null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH || HH.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(HH, BH, LH) {
          var AH;
          if (HH === OC && !1 === (null == LH || null === (AH = LH.properties) || void 0 === AH ? void 0 : AH.$survey_completed)) return "ignore";
          let rH;
          return this._getItems((HH => {
            rH = HH.find((HH => HH.id === BH))
          })), !rH || function(HH) {
            var BH;
            return yE(HH) && !!(null === (BH = HH.conditions) || void 0 === BH || null === (BH = BH.events) || void 0 === BH ? void 0 : BH.repeatedActivation) || "always" === HH.schedule
          }(rH) ? HH === UC ? "consume" : "ignore" : HH === UC ? "persist" : HH === VC || HH === OC ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      oG = class {
        constructor(HH) {
          this._instance = HH
        }
        initialize() {}
        get(HH) {
          if ("string" == typeof HH) return this._instance.get_property(HH);
          const BH = {};
          for (const LH of HH) {
            const HH = this._instance.get_property(LH);
            VL(HH) || (BH[LH] = HH)
          }
          return BH
        }
        set(HH, BH) {
          this._instance.register("string" == typeof HH ? {
            [HH]: BH
          } : HH)
        }
        remove(HH) {
          "string" != typeof HH ? HH.forEach((HH => this._instance.unregister(HH))) : this._instance.unregister(HH)
        }
      },
      IG = class {
        constructor(HH) {
          this._instance = HH
        }
        get() {
          const HH = this._instance.config;
          return {
            disableSurveys: HH.disable_surveys,
            cookielessMode: !!HH.cookieless_mode,
            advancedEnableSurveys: HH.advanced_enable_surveys,
            requestTimeoutMs: HH.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const HH = null == tL ? void 0 : tL.__PosthogExtensions__;
          if (!HH) return;
          const {
            generateSurveys: BH,
            loadExternalDependency: LH
          } = HH;
          return {
            generateSurveys: BH ? HH => BH(this._instance, HH) : void 0,
            loadExternalDependency: LH ? HH => LH(this._instance, "surveys", HH) : void 0
          }
        }
        createEventReceiver(HH) {
          return new mG(this._instance, HH)
        }
        onMatchingConditionsChanged(HH) {
          const BH = this._instance._addCaptureHook((BH => {
              "$pageview" !== BH && BH !== UC && BH !== VC && BH !== OC || HH()
            })),
            LH = () => HH();
          ah(JB, "PHSurveyShown", LH);
          let AH = !1;
          const rH = this._instance.onFeatureFlags((() => {
            AH && HH()
          }));
          return AH = !0, () => {
            AH = !1, BH(), rH(), null == JB || JB.removeEventListener("PHSurveyShown", LH)
          }
        }
      };
    const fG = (null == JB ? void 0 : JB.location) ? nz(JB.location.hash, "__posthog") || nz(location.hash, "state") : null,
      lG = "_postHogToolbarParams",
      KG = gh("[Toolbar]"),
      cG = gh("[FeatureFlags]"),
      eG = gh("[FeatureFlags]", {
        debugEnabled: !0
      }),
      qG = "\" failed. Feature flags didn't load in time.",
      gG = [502, 504],
      NG = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      RG = "connection_error",
      jG = HH => {
        const BH = {};
        for (let LH = 0; HH.length > LH; LH++) BH[HH[LH]] = !0;
        return BH
      },
      nG = HH => {
        const BH = {};
        for (const [LH, AH] of nh(HH || {})) AH && (BH[LH] = AH);
        return BH
      };
    var FG = class {
      constructor(HH) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = cG, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const HH = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, HH && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var HH, BH;
          const LH = this._refreshIntervalMs,
            AH = null !== (HH = this._dueRefreshIntervalMs) && void 0 !== HH ? HH : LH;
          VL(LH) || VL(AH) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (BH = this._lastRefreshAt) && void 0 !== BH ? BH : 0) < AH || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? LH : Math.min(2 * AH, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var HH;
          "visible" === (null === (HH = this._document) || void 0 === HH ? void 0 : HH.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = HH
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(HH) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (HH) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = HH, this._logger = HH.logger.createLogger("[FeatureFlags]"), PG(HH.kv.initialize(), (() => {
          this._initializingClient === HH && (this._initializingClient = void 0, this._client = HH, this._finishSetup(HH))
        }))
      }
      _finishSetup(HH) {
        var BH;
        if (this._client === HH) return this._window && ah(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = HH.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (BH = this._crossTabPersistence) || void 0 === BH ? void 0 : BH.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var HH;
        const BH = this._config.refreshIntervalMs,
          LH = !this._config.remoteRequestsDisabled && this._document && !VL(BH) && BH > 0 ? BH : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = LH), LH !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), VL(LH) || (this._refreshIntervalMs = LH, this._dueRefreshIntervalMs = LH, this._scheduleNextRefresh(), (null === (HH = this._document) || void 0 === HH ? void 0 : HH.addEventListener) && (ah(this._document, TH, this._onVisibilityChange), Nh(NG, (HH => {
          ah(this._document, HH, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        VL(this._refreshIntervalMs) || (VL(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var HH, BH;
        VL(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (HH = this._document) || void 0 === HH || null === (BH = HH.removeEventListener) || void 0 === BH || BH.call(HH, "visibilitychange", this._onVisibilityChange), Nh(NG, (HH => {
          var BH, LH;
          null === (BH = this._document) || void 0 === BH || null === (LH = BH.removeEventListener) || void 0 === LH || LH.call(BH, HH, this._onUserInteraction, {
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
        var HH, BH, LH;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "xB"), this._settleReloads(this._activeReloads, "xB"), this._client && (this._clearDebouncer(), null === (HH = this._dynamicProperties) || void 0 === HH || HH.dispose(), this._dynamicProperties = void 0, null === (BH = this._crossTabPersistenceUnsubscribe) || void 0 === BH || BH.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (LH = this._window) || void 0 === LH || LH.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(HH) {
        var BH;
        return this._bootstrapState && HH in this._bootstrapState ? this._bootstrapState[HH] : null === (BH = this._client) || void 0 === BH ? void 0 : BH.kv.get(HH)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var HH;
        return !VL(null === (HH = this._client) || void 0 === HH ? void 0 : HH.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(HH) {
        this._persist((() => {
          var BH;
          return null === (BH = this._client) || void 0 === BH ? void 0 : BH.kv.set(HH)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(HH, BH, LH) {
        if (!this._crossTabPersistence || !HH.$enabled_feature_flags) return;
        const AH = this._prop("$enabled_feature_flags") || {},
          rH = HH.$enabled_feature_flags || {},
          SH = BH.flags || BH.featureFlags,
          hH = BH.flags ? Object.entries(BH.flags).filter((HH => {
            let [, BH] = HH;
            return !(null == BH ? void 0 : BH.failed)
          })).map((HH => {
            let [BH] = HH;
            return BH
          })) : [],
          CH = !!BH.errorsWhileComputingFlags && !!BH.flags,
          uH = CH ? hH : LH && !vL(SH) ? Object.keys(SH || {}) : Array.from(new Set([...Object.keys(AH), ...Object.keys(rH)])),
          QH = this._prop("$feature_flag_payloads") || {},
          WH = HH.$feature_flag_payloads || {},
          MH = CH || LH ? uH : Array.from(new Set([...Object.keys(QH), ...Object.keys(WH)])),
          vH = !CH && !LH,
          PH = !!vH || uH,
          TH = !!vH || MH,
          UH = {
            [tH]: PH,
            [YH]: PH,
            [xH]: TH
          };
        HH.$feature_flag_details && (UH[zH] = PH);
        for (const tH of [XH, EH, GH]) VL(HH[tH]) || (UH[tH] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(UH)
      }
      _remove(HH) {
        this._persist((() => {
          var BH;
          return null === (BH = this._client) || void 0 === BH ? void 0 : BH.kv.remove(HH)
        }))
      }
      _persist(HH) {
        try {
          HH()
        } catch (HH) {
          this._logger.error("Failed to update feature flag persistence", HH)
        }
      }
      _rebuildEventProperties() {
        const HH = {};
        for (const AH of [tH, xH, XH, vH]) {
          const BH = this._prop(AH);
          VL(BH) || (HH[AH] = BH)
        }
        this._baseEventProperties = HH;
        const BH = xr({}, HH),
          LH = this._prop(YH);
        if (LH)
          for (const [AH, rH] of Object.entries(LH)) BH[`$feature/${AH}`] = rH;
        this._eventPropertiesWithFlagValues = BH
      }
      _isCacheStale() {
        const HH = this._config.cacheTtlMs;
        if (!HH || 0 >= HH) return !1;
        const BH = this._prop(EH);
        return "number" != typeof BH || Date.now() - BH > HH
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const HH = this._config.evaluationContexts;
        return (null == HH ? void 0 : HH.length) ? HH.filter((HH => {
          const BH = HH && "string" == typeof HH && HH.trim().length > 0;
          return BH || this._logger.error("Invalid evaluation context found:", HH, "Expected non-empty string"), BH
        })) : []
      }
      _getValidFlagKeys() {
        const HH = this._config.flagKeys;
        if (!VL(HH)) return HH.filter((HH => {
          const BH = HH && "string" == typeof HH && HH.trim().length > 0;
          return BH || this._logger.error("Invalid flag key found:", HH, "Expected non-empty string"), BH
        }))
      }
      initialize() {
        var HH, BH;
        const LH = this._config,
          AH = null !== (HH = null === (BH = LH.bootstrap) || void 0 === BH ? void 0 : BH.featureFlags) && void 0 !== HH ? HH : {};
        if (Object.keys(AH).length) {
          var rH, SH;
          const HH = null !== (rH = null === (SH = LH.bootstrap) || void 0 === SH ? void 0 : SH.featureFlagPayloads) && void 0 !== rH ? rH : {},
            BH = Object.keys(AH).filter((HH => !VL(AH[HH]))).reduce(((HH, BH) => (HH[BH] = AH[BH], HH)), {}),
            hH = Object.keys(HH).filter((HH => BH[HH])).reduce(((BH, LH) => (BH[LH] = HH[LH], BH)), {});
          return this._receivedFeatureFlags({
            featureFlags: BH,
            featureFlagPayloads: hH
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(HH, BH, LH) {
        var AH, rH;
        const SH = (null == LH ? void 0 : LH.merge) && null !== (AH = this._prop("$enabled_feature_flags")) && void 0 !== AH ? AH : {},
          hH = (null == LH ? void 0 : LH.merge) && null !== (rH = this._prop("$feature_flag_payloads")) && void 0 !== rH ? rH : {},
          tH = xr(xr({}, SH), HH),
          zH = xr(xr({}, hH), BH),
          CH = {};
        for (const [EH, XH] of Object.entries(tH)) CH[EH] = {
          key: EH,
          enabled: YS(XH),
          variant: uS(XH),
          reason: void 0,
          metadata: VL(null == zH ? void 0 : zH[EH]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: zH[EH]
          }
        };
        this._receivedFeatureFlags({
          flags: CH
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const HH = this._prop(zH),
          BH = this._prop(vH),
          LH = this._prop(PH);
        if (!LH && !BH) return HH || {};
        const AH = jh({}, HH || {}),
          rH = [...new Set([...Object.keys(LH || {}), ...Object.keys(BH || {})])];
        for (const tH of rH) {
          var SH, hH;
          const HH = AH[tH],
            rH = null == BH ? void 0 : BH[tH],
            zH = VL(rH) ? null !== (SH = null == HH ? void 0 : HH.enabled) && void 0 !== SH && SH : !!rH,
            CH = VL(rH) ? null == HH ? void 0 : HH.variant : "string" == typeof rH ? rH : void 0,
            EH = null == LH ? void 0 : LH[tH],
            XH = xr(xr({}, HH), {}, {
              enabled: zH,
              variant: zH ? null != CH ? CH : null == HH ? void 0 : HH.variant : void 0
            });
          zH !== (null == HH ? void 0 : HH.enabled) && (XH.original_enabled = null == HH ? void 0 : HH.enabled), CH !== (null == HH ? void 0 : HH.variant) && (XH.original_variant = null == HH ? void 0 : HH.variant), EH && (XH.metadata = xr(xr({}, null == HH ? void 0 : HH.metadata), {}, {
            payload: EH,
            original_payload: null == HH || null === (hH = HH.metadata) || void 0 === hH ? void 0 : hH.payload
          })), AH[tH] = XH
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: HH,
          overriddenPayloads: LH,
          finalDetails: AH
        }), this._override_warning = !0), AH
      }
      getAllFeatureFlags() {
        const HH = this.getFlagVariants(),
          BH = this.getFlagPayloads();
        return Object.keys(HH).map((LH => {
          const AH = HH[LH];
          return {
            key: LH,
            enabled: YS(AH),
            variant: uS(AH),
            payload: GS(BH[LH])
          }
        }))
      }
      getFlagVariants() {
        const HH = this._prop(YH),
          BH = this._prop(vH);
        if (!BH) return HH || {};
        const LH = jh({}, HH || {}),
          AH = Object.keys(BH);
        for (let rH = 0; AH.length > rH; rH++) LH[AH[rH]] = BH[AH[rH]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: HH,
          overriddenFlags: BH,
          finalFlags: LH
        }), this._override_warning = !0), LH
      }
      getFlagPayloads() {
        const HH = this._prop(xH),
          BH = this._prop(PH);
        if (!BH) return HH || {};
        const LH = jh({}, HH || {}),
          AH = Object.keys(BH);
        for (let rH = 0; AH.length > rH; rH++) LH[AH[rH]] = BH[AH[rH]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: HH,
          overriddenPayloads: BH,
          finalPayloads: LH
        }), this._override_warning = !0), LH
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((HH => {
          try {
            HH()
          } catch (HH) {
            this._logger.error("Error while running feature flags reloading callback", HH)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((HH => {
          this._pendingReloads.add(HH), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(HH, BH) {
        HH.forEach((HH => HH({
          status: BH
        }))), HH.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(HH) {
        return this._reloadingHandlers.push(HH), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((BH => BH !== HH))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(HH) {
        this.$anon_distinct_id = HH
      }
      setReloadingPaused(HH) {
        this._reloadingDisabled = HH
      }
      resetFlagCallReported() {
        this._remove(WH)
      }
      _callFlagsEndpoint(HH) {
        var BH;
        this._clearDebouncer();
        const LH = this._client;
        if (!LH || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const AH = {
          token: LH.projectToken,
          distinct_id: LH.distinctId,
          groups: LH.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: xr(xr(xr({}, LH.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: LH.library.name,
            $lib_version: LH.library.version
          }),
          group_properties: this._prop(uH),
          timezone: Kz()
        };
        VL(LH.deviceId) || (AH.$device_id = LH.deviceId), ((null == HH ? void 0 : HH.disableFlags) || this._config.featureFlagsDisabled) && (AH.disable_flags = !0);
        const rH = this._getValidEvaluationEnvironments();
        rH.length && (AH.evaluation_contexts = rH);
        const SH = this._getValidFlagKeys();
        VL(SH) || (AH.flag_keys = SH);
        const hH = this._config.onlyEvaluateSurveyFeatureFlags,
          tH = "/flags/?v=2" + (hH ? "&only_evaluate_survey_feature_flags=true" : ""),
          zH = this._requestGeneration,
          EH = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = EH, this._requestInFlight = !0;
        const XH = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          GH = HH => {
            var BH, LH;
            const rH = null !== (BH = HH.json) && void 0 !== BH ? BH : {},
              SH = 200 !== HH.statusCode;
            if (this._requestInFlight = !1, zH !== this._requestGeneration) return void XH();
            if (this._trackStatusZeroReachability(HH.statusCode), SH || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), AH.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(EH, "skipped");
            this._flagsLoadedFromRemote = !SH;
            const tH = [];
            HH.error ? tH.push(HH.error instanceof Error && "AbortError" === HH.error.name ? "timeout" : HH.error instanceof Error ? RG : "unknown_error") : 200 !== HH.statusCode && tH.push(`api_error_${HH.statusCode}`), rH.errorsWhileComputingFlags && tH.push("errors_while_computing_flags");
            const GH = !!(null === (LH = rH.quotaLimited) || void 0 === LH ? void 0 : LH.includes("feature_flags"));
            GH && tH.push("quota_limited"), this._set({
              [CH]: tH
            }), GH ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : AH.disable_flags || this._receivedFeatureFlags(rH, SH, {
              partialResponse: hH
            }), this._settleReloads(EH, AH.disable_flags ? "skipped" : tH.length || !rH.flags && !rH.featureFlags ? "error" : "loaded"), XH()
          },
          YH = HH => {
            this._requestInFlight = !1, zH === this._requestGeneration ? (this._set({
              [CH]: [RG]
            }), this._logger.error("Feature flag request failed", HH), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(EH, "error"), XH()) : XH()
          };
        let QH = null !== (BH = this._config.requestMaxRetries) && void 0 !== BH ? BH : 1;
        const WH = () => QH > 0 && zH === this._requestGeneration,
          MH = () => {
            if (zH !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(EH, "skipped"), void XH();
            try {
              LH.sendRequest(tH, {
                target: "flags",
                method: "POST",
                body: AH,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((HH => {
                if ((HH => gG.includes(HH.statusCode) || (HH => 0 === HH.statusCode && HH.error instanceof Error && "AbortError" === HH.error.name)(HH))(HH) && WH()) return QH--, void setTimeout(MH, 500);
                GH(HH)
              })).catch(YH)
            } catch (HH) {
              YH(HH)
            }
          };
        MH()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return ez(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(HH) {
        this._consecutiveStatusZeroFailures = qz(HH, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var LH;
        if (BH.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + HH + qG);
        if (this._checkAndTriggerStaleRefresh()) return;
        const AH = this.getFeatureFlagResult(HH, BH);
        return null !== (LH = null == AH ? void 0 : AH.variant) && void 0 !== LH ? LH : null == AH ? void 0 : AH.enabled
      }
      getFeatureFlagDetails(HH) {
        return this.getFlagsWithDetails()[HH]
      }
      getFeatureFlagPayload(HH) {
        const BH = this.getFeatureFlagResult(HH, {
          send_event: !1
        });
        return null == BH ? void 0 : BH.payload
      }
      getFeatureFlagResult(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BH.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + HH + qG);
        if (this._checkAndTriggerStaleRefresh()) return;
        const LH = this.getFlagVariants(),
          AH = HH in LH,
          rH = LH[HH],
          SH = this.getFlagPayloads()[HH],
          hH = String(rH),
          tH = this._prop("$feature_flag_request_id") || void 0,
          zH = this._prop("$feature_flag_evaluated_at") || void 0;
        let CH, EH = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var XH;
          const HH = null === (XH = this._client) || void 0 === XH || null === (XH = XH.session) || void 0 === XH ? void 0 : XH.sessionId,
            BH = this._prop(MH);
          HH && HH !== BH && (EH = {}, CH = HH)
        }
        if (!BH.send_event && "send_event" in BH) CH && this._set({
          [WH]: EH,
          [MH]: CH
        });
        else if (HH in EH && EH[HH].includes(hH)) CH && this._set({
          [WH]: EH,
          [MH]: CH
        });
        else {
          var GH, YH, uH, QH, xH, vH, PH, TH, UH, VH, OH, bH, kH;
          vL(EH[HH]) ? EH[HH].push(hH) : EH[HH] = [hH], this._set(xr({
            [WH]: EH
          }, CH ? {
            [MH]: CH
          } : {}));
          const BH = this.getFeatureFlagDetails(HH),
            LH = [...null !== (GH = this._prop("$feature_flag_errors")) && void 0 !== GH ? GH : []];
          VL(rH) && LH.push("flag_missing");
          const AH = {
            $feature_flag: HH,
            $feature_flag_response: rH,
            $feature_flag_payload: null != SH ? SH : null,
            $feature_flag_request_id: tH,
            $feature_flag_evaluated_at: zH,
            $feature_flag_bootstrapped_response: null !== (YH = null === (uH = this._config.bootstrap) || void 0 === uH || null === (uH = uH.featureFlags) || void 0 === uH ? void 0 : uH[HH]) && void 0 !== YH ? YH : null,
            $feature_flag_bootstrapped_payload: null !== (QH = null === (xH = this._config.bootstrap) || void 0 === xH || null === (xH = xH.featureFlagPayloads) || void 0 === xH ? void 0 : xH[HH]) && void 0 !== QH ? QH : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          VL(null == BH || null === (vH = BH.metadata) || void 0 === vH ? void 0 : vH.has_experiment) || (AH.$feature_flag_has_experiment = BH.metadata.has_experiment), VL(null == BH || null === (PH = BH.metadata) || void 0 === PH ? void 0 : PH.version) || (AH.$feature_flag_version = BH.metadata.version);
          const XH = null !== (TH = null == BH || null === (UH = BH.reason) || void 0 === UH ? void 0 : UH.description) && void 0 !== TH ? TH : null == BH || null === (VH = BH.reason) || void 0 === VH ? void 0 : VH.code;
          XH && (AH.$feature_flag_reason = XH), (null == BH || null === (OH = BH.metadata) || void 0 === OH ? void 0 : OH.id) && (AH.$feature_flag_id = BH.metadata.id), VL(null == BH ? void 0 : BH.original_variant) && VL(null == BH ? void 0 : BH.original_enabled) || (AH.$feature_flag_original_response = VL(BH.original_variant) ? BH.original_enabled : BH.original_variant), (null == BH || null === (bH = BH.metadata) || void 0 === bH ? void 0 : bH.original_payload) && (AH.$feature_flag_original_payload = null == BH || null === (kH = BH.metadata) || void 0 === kH ? void 0 : kH.original_payload), LH.length && (AH.$feature_flag_error = LH.join(",")), this._captureFeatureFlagCalled(AH)
        }
        return AH ? {
          key: HH,
          enabled: !!rH,
          variant: "string" == typeof rH ? rH : void 0,
          payload: GS(SH)
        } : void 0
      }
      _captureFeatureFlagCalled(HH) {
        try {
          var BH;
          null === (BH = this._client) || void 0 === BH || BH.capture("$feature_flag_called", HH)
        } catch (HH) {
          this._logger.error("Failed to capture feature flag call", HH)
        }
      }
      getRemoteConfigPayload(HH, BH) {
        this._getRemoteConfigPayload(HH, BH)
      }
      _getRemoteConfigPayload(HH, BH) {
        var LH = this;
        return DL((function*() {
          const AH = LH._client;
          if (!AH) return;
          const rH = {
              distinct_id: AH.distinctId,
              token: AH.projectToken,
              person_properties: {
                $lib: AH.library.name,
                $lib_version: AH.library.version
              }
            },
            SH = LH._getValidEvaluationEnvironments();
          SH.length && (rH.evaluation_contexts = SH);
          const hH = LH._getValidFlagKeys();
          let tH;
          VL(hH) || (rH.flag_keys = hH);
          try {
            var zH;
            const BH = null === (zH = (yield AH.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: rH,
              compression: LH._config.compression,
              sentAt: "body",
              timeoutMs: LH._config.requestTimeoutMs
            })).json) || void 0 === zH ? void 0 : zH.featureFlagPayloads;
            tH = (null == BH ? void 0 : BH[HH]) || void 0
          } catch (HH) {
            return void LH._logger.error("Remote config feature flag request failed", HH)
          }
          try {
            BH(tH)
          } catch (HH) {
            LH._logger.error("Remote config feature flag callback failed", HH)
          }
        }))()
      }
      isFeatureEnabled(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (BH.fresh && !this._flagsLoadedFromRemote) return BH.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + HH + qG), BH.defaultValue;
        const LH = this.getFeatureFlag(HH, BH);
        return VL(LH) ? BH.defaultValue : !!LH
      }
      addFeatureFlagsHandler(HH) {
        this.featureFlagEventHandlers.push(HH)
      }
      removeFeatureFlagsHandler(HH) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((BH => BH !== HH))
      }
      receivedFeatureFlags(HH, BH, LH) {
        this._receivedFeatureFlags(HH, BH, LH)
      }
      _receivedFeatureFlags(HH, BH, LH) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const AH = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            rH = arguments.length > 4 ? arguments[4] : void 0,
            SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : cG;
          const hH = ((HH, BH) => {
              const LH = HH.flags;
              if (LH) {
                const BH = Object.fromEntries(Object.keys(LH).map((HH => {
                    var BH;
                    return [HH, null !== (BH = LH[HH].variant) && void 0 !== BH ? BH : LH[HH].enabled]
                  }))),
                  AH = Object.fromEntries(Object.keys(LH).filter((HH => LH[HH].enabled)).filter((HH => {
                    var BH;
                    return !VL(null === (BH = LH[HH].metadata) || void 0 === BH ? void 0 : BH.payload)
                  })).map((HH => {
                    var BH;
                    return [HH, null === (BH = LH[HH].metadata) || void 0 === BH ? void 0 : BH.payload]
                  })));
                return xr(xr({}, HH), {}, {
                  featureFlags: BH,
                  featureFlagPayloads: AH
                })
              }
              return HH.featureFlags && BH.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), HH
            })(HH, SH),
            CH = hH.flags,
            uH = hH.featureFlags,
            QH = hH.featureFlagPayloads;
          if (!uH) return;
          const WH = HH.requestId,
            MH = HH.evaluatedAt;
          if (vL(uH)) {
            SH.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const HH = {};
            if (uH)
              for (let BH = 0; uH.length > BH; BH++) HH[uH[BH]] = !0;
            return {
              [tH]: uH,
              [YH]: HH,
              [GH]: !1
            }
          }
          let vH = uH,
            PH = QH,
            TH = CH;
          if (null == rH ? void 0 : rH.partialResponse) {
            const HH = Object.keys(vH),
              rH = PH || {};
            vH = xr(xr({}, BH), vH), PH = xr(xr({}, LH), rH), HH.forEach((HH => {
              HH in rH || null == PH || delete PH[HH]
            })), TH = xr(xr({}, AH), TH)
          } else if (HH.errorsWhileComputingFlags)
            if (CH) {
              const HH = new Set(Object.keys(CH).filter((HH => {
                var BH;
                return !(null === (BH = CH[HH]) || void 0 === BH ? void 0 : BH.failed)
              })));
              vH = xr(xr({}, BH), Object.fromEntries(Object.entries(vH).filter((BH => {
                let [LH] = BH;
                return HH.has(LH)
              }))));
              const rH = Object.fromEntries(Object.entries(PH || {}).filter((BH => {
                let [LH] = BH;
                return HH.has(LH)
              })));
              PH = xr(xr({}, LH), rH), HH.forEach((HH => {
                HH in rH || null == PH || delete PH[HH]
              })), TH = xr(xr({}, AH), Object.fromEntries(Object.entries(TH || {}).filter((BH => {
                let [LH] = BH;
                return HH.has(LH)
              }))))
            } else vH = xr(xr({}, BH), vH), PH = xr(xr({}, LH), PH), TH = xr(xr({}, AH), TH);
          return xr(xr({
            [tH]: Object.keys(nG(vH)),
            [YH]: vH || {},
            [xH]: PH || {},
            [zH]: TH || {},
            [GH]: !0 === HH.minimalFlagCalledEvents
          }, WH ? {
            [XH]: WH
          } : {}), MH ? {
            [EH]: MH
          } : {})
        }(HH, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), LH, this._logger);
        if (AH)
          if (!1 === (null == LH ? void 0 : LH.persist)) {
            const HH = !VL(this._client.kv.get(YH));
            this._bootstrapState = AH, HH || this._set(AH)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(AH, HH, !!(null == LH ? void 0 : LH.partialResponse)), this._set(AH);
        else BH && this._fallBackToPersistedFlags();
        BH || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(BH)
      }
      override(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: HH,
          suppressWarning: BH
        })
      }
      overrideFeatureFlags(HH) {
        this._overrideFeatureFlags(HH)
      }
      _overrideFeatureFlags(HH) {
        if (this._client) {
          if (!1 === HH) return this._remove([vH, PH]), this._fireFeatureFlagsCallbacks(), void eG.info("All overrides cleared");
          if (vL(HH)) return this._set({
            [vH]: jG(HH)
          }), this._fireFeatureFlagsCallbacks(), void eG.info("Flag overrides set", {
            flags: HH
          });
          if (HH && "object" == typeof HH && ("flags" in HH || "payloads" in HH)) {
            var BH;
            const LH = HH;
            this._override_warning = Boolean(null !== (BH = LH.suppressWarning) && void 0 !== BH && BH);
            const AH = {},
              rH = LH.flags,
              SH = LH.payloads;
            return rH && (AH[vH] = vL(rH) ? jG(rH) : rH), SH && (AH[PH] = SH), Object.keys(AH).length && this._set(AH), !1 === rH && !1 === SH ? this._remove([vH, PH]) : !1 === rH ? this._remove(vH) : !1 === SH && this._remove(PH), this._fireFeatureFlagsCallbacks(), !1 === rH ? eG.info("Flag overrides cleared") : rH && eG.info("Flag overrides set", {
              flags: rH
            }), void(!1 === SH ? eG.info("Payload overrides cleared") : SH && eG.info("Payload overrides set", {
              payloads: SH
            }))
          }
          if (HH && "object" == typeof HH) return this._set({
            [vH]: HH
          }), this._fireFeatureFlagsCallbacks(), void eG.info("Flag overrides set", {
            flags: HH
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: HH
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(HH) {
        if (this.addFeatureFlagsHandler(HH), this._hasLoadedFlags) {
          const {
            flags: BH,
            flagVariants: LH
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            HH(BH, LH)
          } catch (HH) {
            this._logger.error("Error while running feature flags callback", HH)
          }
        }
        return () => this.removeFeatureFlagsHandler(HH)
      }
      updateEarlyAccessFeatureEnrollment(HH, BH, LH) {
        var AH;
        const rH = (this._prop("$early_access_features") || []).find((BH => BH.flagKey === HH)),
          SH = {
            [`$feature_enrollment/${HH}`]: BH
          },
          hH = {
            $feature_flag: HH,
            $feature_enrollment: BH,
            $set: SH
          };
        rH && (hH.$early_access_feature_name = rH.name), LH && (hH.$feature_enrollment_stage = LH);
        const zH = xr(xr({}, this.getFlagVariants()), {}, {
          [HH]: BH
        });
        null === (AH = this._crossTabPersistence) || void 0 === AH || AH.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [HH],
          $enabled_feature_flags: [HH],
          $stored_person_properties: Object.keys(SH)
        }), this._set({
          [tH]: Object.keys(nG(zH)),
          [YH]: zH,
          [QH]: xr(xr({}, this._prop("$stored_person_properties") || {}), SH)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var CH;
          null === (CH = this._client) || void 0 === CH || CH.capture("$feature_enrollment_update", hH)
        } catch (HH) {
          this._logger.error("Failed to capture early access feature enrollment", HH)
        }
      }
      getEarlyAccessFeatures(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = this._prop(hH);
        !AH || BH ? this._getEarlyAccessFeatures(HH, LH) : HH(AH)
      }
      _getEarlyAccessFeatures(HH, BH) {
        var LH = this;
        return DL((function*() {
          const AH = LH._client;
          if (!AH) return;
          const rH = BH ? `&${BH.map((HH=>`stage=${HH}`)).join("&")}` : "";
          let SH;
          try {
            const HH = yield AH.sendRequest(`/api/early_access_features/?token=${AH.projectToken}${rH}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!HH.json) return;
            SH = HH.json.earlyAccessFeatures, LH._set({
              [hH]: SH
            })
          } catch (HH) {
            return void LH._logger.error("Early access feature request failed", HH)
          }
          try {
            HH(SH)
          } catch (HH) {
            LH._logger.error("Early access feature callback failed", HH)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const HH = this.getFlags(),
          BH = this.getFlagVariants();
        return {
          flags: HH.filter((HH => BH[HH])),
          flagVariants: Object.keys(BH).filter((HH => BH[HH])).reduce(((HH, LH) => (HH[LH] = BH[LH], HH)), {})
        }
      }
      _fireFeatureFlagsCallbacks(HH) {
        this._rebuildEventProperties();
        const {
          flags: BH,
          flagVariants: LH
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((AH => {
          try {
            AH(BH, LH, {
              errorsLoading: HH
            })
          } catch (HH) {
            this._logger.error("Error while running feature flags callback", HH)
          }
        }))
      }
      setPersonPropertiesForFlags(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(HH, BH)
      }
      _setPersonPropertiesForFlags(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this._prop("$stored_person_properties") || {},
          AH = (null == HH ? void 0 : HH.$set) || ((null == HH ? void 0 : HH.$set_once) ? {} : HH),
          rH = null == HH ? void 0 : HH.$set_once,
          SH = {};
        if (rH)
          for (const hH in rH)({}).hasOwnProperty.call(rH, hH) && (hH in LH || (SH[hH] = rH[hH]));
        this._set({
          [QH]: xr(xr(xr({}, LH), SH), AH)
        }), BH && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = xr({}, this._prop("$stored_person_properties") || {});
        HH.forEach((HH => {
          delete LH[HH]
        })), this._set({
          [QH]: LH
        }), BH && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(QH), HH && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this._prop("$stored_group_properties") || {},
          AH = xr({}, LH);
        for (const rH of Object.keys(HH)) AH[rH] = xr(xr({}, LH[rH]), HH[rH]);
        this._set({
          [uH]: AH
        }), BH && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(HH) {
        if (HH) {
          const BH = this._prop("$stored_group_properties") || {};
          this._set({
            [uH]: xr(xr({}, BH), {}, {
              [HH]: {}
            })
          })
        } else this._remove(uH)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "xB"), this._settleReloads(this._activeReloads, "xB"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const DG = gh("[FeatureFlags]");
    var wG = class {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(HH, BH)
      }
      update(HH, BH) {
        this._snapshot = ((HH, BH) => {
          var LH, AH, rH, SH, hH, tH, zH, CH;
          return {
            bootstrap: {
              featureFlags: null !== (LH = null === (AH = HH.bootstrap) || void 0 === AH ? void 0 : AH.featureFlags) && void 0 !== LH ? LH : void 0,
              featureFlagPayloads: null !== (rH = null === (SH = HH.bootstrap) || void 0 === SH ? void 0 : SH.featureFlagPayloads) && void 0 !== rH ? rH : void 0
            },
            remoteRequestsDisabled: BH,
            featureFlagsDisabled: !!HH.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!HH.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!HH.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: HH.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (hH = HH.remote_config_refresh_interval_ms) && void 0 !== hH ? hH : 3e5,
            idleRefreshBackoff: VL(HH.remote_config_refresh_interval_ms),
            requestTimeoutMs: HH.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (tH = HH.feature_flag_request_max_retries) && void 0 !== tH ? tH : 1),
            compression: HH.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (zH = null !== (CH = HH.evaluation_contexts) && void 0 !== CH ? CH : HH.evaluation_environments) && void 0 !== zH ? zH : [],
            flagKeys: vL(HH.flag_keys) ? HH.flag_keys : void 0
          }
        })(HH, BH), !HH.evaluation_environments || HH.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (DG.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), VL(HH.flag_keys) || vL(HH.flag_keys) || DG.error("Invalid flag_keys found:", HH.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const ZG = HH => qL(HH) && ("RangeError" === HH.name && 0 === HH.message.indexOf("Maximum call stack size exceeded") || "InternalError" === HH.name && "too much recursion" === HH.message),
      dG = gh("[Error tracking]"),
      aG = "webkit-masked-url:",
      sG = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      JG = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", aG],
      iG = ["__firefox__", "__gCrWeb"],
      pG = "Refusing to render web experiment since the viewer is a likely bot",
      yG = {
        icontains: (HH, BH) => BH.toLowerCase().indexOf(HH.toLowerCase()) > -1,
        not_icontains: (HH, BH) => -1 === BH.toLowerCase().indexOf(HH.toLowerCase()),
        regex: (HH, BH) => HX(BH, HH),
        not_regex: (HH, BH) => !HX(BH, HH),
        exact: (HH, BH) => BH === HH,
        is_not: (HH, BH) => BH !== HH
      },
      HY = gh("[Conversations]"),
      BY = "Conversations not available yet.";

    function LY(HH, BH) {
      var LH, AH, rH, SH, hH, tH, zH;
      const CH = null !== (LH = null == HH ? void 0 : HH.flushIntervalMs) && void 0 !== LH ? LH : 3e3,
        EH = null !== (AH = null == HH ? void 0 : HH.maxBufferSize) && void 0 !== AH ? AH : 100,
        XH = (null == BH ? void 0 : BH.consoleCapture) ? void 0 : null !== (rH = null == HH ? void 0 : HH.maxLogsPerInterval) && void 0 !== rH ? rH : 1e3,
        GH = VL(XH) ? Math.max(EH, 2048) : Math.max(EH, XH),
        YH = xr(xr({}, function() {
          let HH = "",
            BH = "";
          try {
            var LH;
            const AH = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              rH = null == AH || null === (LH = AH.navigator) || void 0 === LH ? void 0 : LH.userAgent;
            rH && ([HH, BH] = JA(rH))
          } catch (HH) {}
          return function(HH, BH) {
            const LH = function(HH) {
              if (HH) return {}.hasOwnProperty.call(vh, HH) ? vh[HH] : HH
            }(HH);
            return xr(xr({}, LH ? {
              "os.name": LH
            } : {}), BH ? {
              "os.version": BH
            } : {})
          }(HH, BH)
        }()), null == HH ? void 0 : HH.resourceAttributes);
      return {
        serviceName: null !== (SH = null !== (hH = null == YH ? void 0 : YH["service.name"]) && void 0 !== hH ? hH : null == HH ? void 0 : HH.serviceName) && void 0 !== SH ? SH : null == BH ? void 0 : BH.serviceNameDefault,
        serviceVersion: null !== (tH = null == YH ? void 0 : YH["service.version"]) && void 0 !== tH ? tH : null == HH ? void 0 : HH.serviceVersion,
        environment: null !== (zH = null == YH ? void 0 : YH["deployment.environment"]) && void 0 !== zH ? zH : null == HH ? void 0 : HH.environment,
        resourceAttributes: YH,
        beforeSend: null == HH ? void 0 : HH.beforeSend,
        flushIntervalMs: CH,
        maxBufferSize: EH,
        maxQueueSize: GH,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: CH,
        maxLogsPerInterval: XH,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const AY = ["debug", "log", "warn", "error", "info"],
      rY = HH => {
        for (; null == HH ? void 0 : HH.__rrweb_original__;) HH = HH.__rrweb_original__;
        return HH
      },
      SY = "console",
      hY = "__posthogHandledLogsRequestError",
      tY = (HH, BH) => {
        const LH = HH instanceof Error ? HH : new Error(BH);
        return LH[hY] = !0, LH
      },
      zY = HH => !!HH && "object" == typeof HH && !0 === HH[hY];
    var CY = class {
      get _coreLogger() {
        var HH = this;
        return xr(xr({}, this._logger), {}, {
          error: function() {
            for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
            LH.some(zY) || HH._logger.error(...LH)
          }
        })
      }
      constructor(HH, BH) {
        var LH;
        this._configSource = HH, this._getSdkContext = BH, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = gh("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var HH, BH;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (HH = this._core) || void 0 === HH || HH.onReconnect(), null === (BH = this._consoleCore) || void 0 === BH || BH.onReconnect())
        }, this._isLogsEnabled = !!(null === (LH = HH.get()) || void 0 === LH ? void 0 : LH.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (AH) {
            this._window = void 0
          }
          this._window && (ah(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(HH, BH, LH, AH) {
        this._listenForReconnect();
        const rH = LY(this._configSource.get(), LH);
        return [new Ih(this._createHost(HH, BH), rH, this._coreLogger, (() => this._getSdkContext()), (HH => HH()), void 0, AH), rH]
      }
      _getCore() {
        const HH = this._configSource.get();
        var BH;
        return this._core && this._resolvedFrom === HH || (null === (BH = this._core) || void 0 === BH || BH.reset(), this._resolvedFrom = HH, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (HH => {
          this._queue = HH
        }))), this._core
      }
      _getConsoleCore() {
        const HH = this._configSource.get();
        var BH;
        return this._consoleCore && this._consoleResolvedFrom === HH || (null === (BH = this._consoleCore) || void 0 === BH || BH.reset(), this._consoleResolvedFrom = HH, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (HH => {
          this._consoleQueue = HH
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, SY)), this._consoleCore
      }
      setup(HH) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = HH, this._logger = HH.logger.createLogger("[logs]"), PG(HH.kv.initialize(), (() => {
          this._disposed || this._finishSetup(HH)
        }))
      }
      _finishSetup(HH) {
        var BH;
        this._listenForReconnect(), (null === (BH = this._configSource.get()) || void 0 === BH ? void 0 : BH.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && HH.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let LH = !1;
        const AH = HH.onRemoteConfig((HH => {
          var BH;
          LH = HH.ok && !0 === (null === (BH = HH.config.logs) || void 0 === BH ? void 0 : BH.captureConsoleLogs), this.onRemoteConfig(HH)
        }));
        this._disposed ? AH.dispose() : (this._remoteConfigSubscription = AH, LH || this.loadIfEnabled())
      }
      dispose() {
        var HH, BH, LH, AH, rH, SH, hH;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (HH = this._remoteConfigSubscription) || void 0 === HH || HH.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (BH = this._window) || void 0 === BH || BH.removeEventListener("online", this._onReconnect), null === (LH = this._consoleLogsDispose) || void 0 === LH || LH.call(this), this._consoleLogsDispose = void 0, null === (AH = this._core) || void 0 === AH || AH.clearQueue(), null === (rH = this._consoleCore) || void 0 === rH || rH.clearQueue(), null === (SH = this._core) || void 0 === SH || SH.reset(), null === (hH = this._consoleCore) || void 0 === hH || hH.reset())
      }
      onRemoteConfig(HH) {
        var BH, LH;
        if (this._disposed) return;
        const AH = HH.ok ? null === (BH = HH.config.logs) || void 0 === BH ? void 0 : BH.captureConsoleLogs : void 0;
        mL(AH) ? this._stopRecorderStartedByPersistedHint() : (null === (LH = this._client) || void 0 === LH || LH.kv.set(this._configSource.captureHintKey, !!AH), AH ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var HH, BH, LH, AH;
        this._stopConsoleRecorder(), null === (HH = this._core) || void 0 === HH || HH.clearQueue(), this._queue = [], null === (BH = this._core) || void 0 === BH || BH.reset(), null === (LH = this._consoleCore) || void 0 === LH || LH.clearQueue(), this._consoleQueue = [], null === (AH = this._consoleCore) || void 0 === AH || AH.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(HH) {
        !this._disposed && this._client && this._getCore().captureLog(HH)
      }
      captureConsoleLog(HH) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(HH)
      }
      captureBufferedConsoleLog(HH, BH, LH) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(HH, {
          context: BH,
          occurredAtMs: LH
        })
      }
      _onOptOut() {
        var HH;
        this._stopConsoleRecorder(), null === (HH = this._consoleCore) || void 0 === HH || HH.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var HH, BH = this;
        if (this._isRecordingConsole || !(null === (HH = this._window) || void 0 === HH ? void 0 : HH.console)) return;
        const LH = LY(this._configSource.get()).maxBufferSize;
        let AH = !0;
        this._consoleRecorderUnpatchers.push((() => {
          AH = !1
        }));
        for (const rH of AY) {
          let SH;
          try {
            SH = rY(this._window.console[rH])
          } catch (HH) {
            continue
          }
          SH && this._consoleRecorderUnpatchers.push(LG(this._window.console, rH, (HH => {
            const hH = function() {
              for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
              try {
                AH && BH._recordConsoleEntry(rH, hH, LH)
              } catch (rH) {}
              return HH.apply(BH._window.console, hH)
            };
            return hH.__rrweb_original__ = SH, hH
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(HH, BH, LH) {
        var AH;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== BH.length)
          if (null === (AH = this._client) || void 0 === AH ? void 0 : AH.canCapture) {
            if (LH > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: HH,
                  args: BH,
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
          for (const HH of this._consoleRecorderUnpatchers) HH();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const HH = this._consoleBuffer;
        return this._stopConsoleRecorder(), HH
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (HH, BH) => this.captureLog({
            body: HH,
            level: "trace",
            attributes: BH
          }),
          debug: (HH, BH) => this.captureLog({
            body: HH,
            level: "debug",
            attributes: BH
          }),
          info: (HH, BH) => this.captureLog({
            body: HH,
            level: "info",
            attributes: BH
          }),
          warn: (HH, BH) => this.captureLog({
            body: HH,
            level: "warn",
            attributes: BH
          }),
          error: (HH, BH) => this.captureLog({
            body: HH,
            level: "error",
            attributes: BH
          }),
          fatal: (HH, BH) => this.captureLog({
            body: HH,
            level: "fatal",
            attributes: BH
          })
        }), this._capture_logger
      }
      flushLogs(HH) {
        this._client && (HH ? this._flushViaTransport(HH) : (this._core && this._core.flush().catch((HH => this._logFlushError(HH))), this._consoleCore && this._consoleCore.flush().catch((HH => this._logFlushError(HH)))))
      }
      flush() {
        var HH = this;
        return DL((function*() {
          var BH, LH;
          const AH = null === (BH = HH._core) || void 0 === BH ? void 0 : BH.flush().catch((BH => HH._logFlushError(BH))),
            rH = null === (LH = HH._consoleCore) || void 0 === LH ? void 0 : LH.flush().catch((BH => HH._logFlushError(BH)));
          yield AH, yield rH
        }))()
      }
      _logFlushError(HH) {
        zY(HH) || this._logger.error("PostHog logs flush failed:", HH)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const HH = this._getConsoleLoader();
        if (HH) {
          this._isLoading = !0;
          try {
            HH(((HH, BH) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (HH || !BH) this._logger.error("Could not load logs script", HH), this._stopConsoleRecorder();
                else {
                  const HH = this._takeConsoleBuffer();
                  this._consoleLogsDispose = BH.initialize(this._client), this._isLoaded = !0, HH.length > 0 && BH.replay(this._client, HH)
                }
            }))
          } catch (HH) {
            throw this._isLoading = !1, HH
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(HH, BH) {
        const LH = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !LH.canCapture
          },
          getPersistedProperty: BH => BH === zL.LogsQueue ? HH() : void 0,
          setPersistedProperty(HH, LH) {
            HH === zL.LogsQueue && BH(null != LH ? LH : [])
          },
          _sendLogsBatch: HH => this._sendLogsBatch(HH),
          getLibraryId: () => LH.library.name,
          getLibraryVersion: () => LH.library.version
        }
      }
      _sendLogsBatch(HH) {
        return new Promise((BH => {
          if (ez(this._consecutiveStatusZeroFailures, 3)) return void BH({
            kind: "fatal",
            error: tY(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let LH = !1;
          const AH = HH => {
              LH || (LH = !0, clearTimeout(rH), BH(HH))
            },
            rH = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), AH({
                kind: "retry-later",
                error: tY(void 0, "logs request timed out")
              })
            }), 9e4),
            SH = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: HH,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((HH => {
            var BH;
            const LH = HH.statusCode;
            this._trackEndpointReachability(LH, SH), LH >= 200 && 300 > LH ? AH({
              kind: "ok"
            }) : 413 === LH ? AH({
              kind: "too-large"
            }) : 0 !== LH && 408 !== LH && 429 !== LH && 500 > LH ? AH({
              kind: "fatal",
              error: new Error(`logs request failed with status ${LH}`)
            }) : 0 === LH ? (HH.error || this._logger.warn("Logs request failed before receiving an HTTP response"), AH({
              kind: "retry-later",
              error: tY(HH.error, "logs request failed before receiving an HTTP response")
            })) : AH({
              kind: "retry-later",
              error: null !== (BH = HH.error) && void 0 !== BH ? BH : new Error(`logs request failed with status ${LH}`)
            })
          }), (HH => {
            AH({
              kind: "retry-later",
              error: HH
            })
          }))
        }))
      }
      _trackEndpointReachability(HH, BH) {
        (0 !== HH || BH) && (this._consecutiveStatusZeroFailures = qz(HH, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(HH) {
        this._queue.length > 0 && this._drainQueueViaTransport(HH, this._queue, this._resolvedConfig, this._client.library.name, (HH => {
          this._queue = HH
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(HH, this._consoleQueue, this._consoleResolvedConfig, SY, (HH => {
          this._consoleQueue = HH
        }))
      }
      _drainQueueViaTransport(HH, BH, LH, AH, rH) {
        if (0 === BH.length) return;
        const SH = BH.map((HH => HH.record));
        rH([]);
        const hH = bh(SH, Oh(LH, this._client.library.name, this._client.library.version), AH, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: hH,
          compression: "best-available",
          transport: HH,
          timeoutMs: 6e4
        }).catch((HH => this._logFlushError(HH)))
      }
    };
    const EY = gh("[NetworkMetrics]"),
      XY = () => {
        var HH;
        return (null == JB || null === (HH = JB.performance) || void 0 === HH ? void 0 : HH.now) ? JB.performance.now() : Date.now()
      },
      GY = {
        "http:": 80,
        "https:": 443
      },
      YY = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      uY = (HH, BH) => {
        var LH;
        const AH = String(BH);
        return {
          method: String(HH).toUpperCase(),
          url: (null === (LH = Nz(AH)) || void 0 === LH ? void 0 : LH.href) || AH
        }
      },
      QY = function(HH, BH, LH, AH, rH, SH) {
        let hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var tH, zH;
          const CH = rH();
          if (!CH) return;
          const EH = LH || void 0,
            XH = XY() - AH,
            GH = Nz(BH.url);
          if (GH && "http:" !== GH.protocol && "https:" !== GH.protocol) return;
          const YH = {
              url: (null == GH ? void 0 : GH.href) || BH.url,
              method: BH.method
            },
            uH = PL(CH.name) ? CH.name(YH) : OL(CH.name) ? CH.name : "http.client.request.duration";
          if (!uH) return;
          const QH = hH && !EH ? void 0 : ((HH, BH) => HH ? 400 > HH ? void 0 : String(HH) : (null == BH ? void 0 : BH.name) || "_OTHER")(EH, SH),
            WH = xr(xr(xr(xr(xr({}, (HH => {
              const BH = YY.has(HH) ? HH : "_OTHER";
              return xr({
                "http.request.method": BH
              }, "_OTHER" === BH && HH !== BH ? {
                "http.request.method_original": HH
              } : {})
            })(YH.method)), GH ? (HH => {
              return {
                "server.address": HH.hostname.startsWith("[") && HH.hostname.endsWith("]") ? HH.hostname.slice(1, -1) : HH.hostname,
                "server.port": Number(HH.port) || GY[HH.protocol],
                "url.scheme": HH.protocol.slice(0, -1),
                "url.template": (BH = HH.pathname, BH.split("/").map((HH => (HH => /^\d+$/.test(HH) || HH.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(HH))(HH) ? ":id" : HH)).join("/"))
              };
              var BH
            })(GH) : {}), EH ? {
              "http.response.status_code": EH
            } : {}), QH ? {
              "error.type": QH
            } : {}), null === (tH = CH.attributes) || void 0 === tH ? void 0 : tH.call(CH, YH, {
              status: EH,
              durationMs: XH
            }));
          null === (zH = HH.metrics) || void 0 === zH || zH.histogram(uH, XH, {
            unit: "ms",
            attributes: WH
          })
        } catch (HH) {
          EY.error("Failed to record network metric", HH)
        }
      },
      WY = () => {},
      MY = (HH, BH) => PL(null == JB ? void 0 : JB.fetch) ? LG(JB, "fetch", (LH => function() {
        for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
        const hH = XY(),
          tH = LH.apply(this, rH);
        if (!BH()) return tH;
        try {
          var zH, CH, EH;
          const [LH, AH] = rH, SH = uY(null !== (zH = null !== (CH = null == AH ? void 0 : AH.method) && void 0 !== CH ? CH : null == LH ? void 0 : LH.method) && void 0 !== zH ? zH : "GET", null !== (EH = null == LH ? void 0 : LH.url) && void 0 !== EH ? EH : LH);
          return tH.then((LH => (QY(HH, SH, null == LH ? void 0 : LH.status, hH, BH, void 0, !0), LH)), (LH => {
            throw QY(HH, SH, void 0, hH, BH, LH), LH
          }))
        } catch (HH) {
          return EY.error("Failed to observe fetch", HH), tH
        }
      })) : WY,
      xY = (HH, BH) => {
        var LH;
        const AH = null == JB || null === (LH = JB.XMLHttpRequest) || void 0 === LH ? void 0 : LH.prototype;
        if (!AH) return WY;
        const rH = new WeakMap,
          SH = LG(AH, "open", (HH => function() {
            for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
            try {
              (() => xE.has(this))() || rH.set(this, uY(LH[0], LH[1]))
            } catch (HH) {
              EY.error("Failed to observe XHR open", HH)
            }
            return HH.apply(this, LH)
          })),
          hH = LG(AH, "send", (LH => function() {
            let AH;
            try {
              const LH = rH.get(this);
              if (LH && BH()) {
                const rH = XY();
                AH = () => {
                  this.removeEventListener("loadend", AH), QY(HH, LH, this.status, rH, BH)
                }, ah(this, "loadend", AH)
              }
            } catch (HH) {
              EY.error("Failed to observe XHR send", HH)
            }
            try {
              for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
              return LH.apply(this, hH)
            } catch (HH) {
              throw AH && this.removeEventListener("loadend", AH), HH
            }
          }));
        return () => {
          SH(), hH()
        }
      },
      vY = new WeakMap,
      PY = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      TY = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function UY(HH) {
      if (HH) return !0 === HH ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== HH.intent,
        model: !1 !== HH.model
      }
    }

    function VY(HH, BH) {
      return {}.hasOwnProperty.call(HH, BH)
    }

    function OY(HH, BH) {
      const LH = Object.create(HH);
      return BH && Object.defineProperty(LH, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: BH
      }), LH
    }

    function bY(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!OL(HH)) return;
      const AH = HH.trim();
      return AH ? (LH ? function(HH, BH) {
        return function(HH) {
          return HH.length >= 10240 && (mS.test(HH) || function(HH) {
            const BH = fS.exec(HH);
            if (!BH) return !1;
            let LH;
            try {
              LH = decodeURIComponent(HH.slice(BH[0].length))
            } catch (HH) {
              return !1
            }
            return lS.test(LH.replace(/[\r\n]/g, ""))
          }(HH) || IS.test(HH) && oS.test(HH))
        }(HH) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(HH, BH, LH) {
          const AH = 4 * LH.maxStringLength;
          if (HH.length > AH) {
            const rH = BH(HH.slice(0, function(HH, BH) {
              let LH = BH;
              for (; LH > 0 && !qS.test(HH[LH - 1]);) LH--;
              return LH
            }(HH, AH)));
            if (rH.length >= 2 * LH.maxStringLength) return rH + LH.truncationSuffix
          }
          return BH(HH)
        }(HH, (HH => function(HH) {
          return th(HH, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(HH) {
          let BH = HH.replace(DS, " ");
          return BH = BH.replace(wS, kS), BH = BH.replace(ZS, kS), BH = BH.replace(dS, `$1${kS}`), BH = BH.replace(sS, Eh), BH = BH.replace(aS, kS), BH = BH.replace(iS, `$1${kS}`), BH = BH.replace(pS, `$1${kS}`), BH
        }(zh(HH)))), BH)
      }(AH, TY) : AH).slice(0, BH) : void 0
    }

    function kY(HH) {
      try {
        return TL(HH) && !0 === HH.isError
      } catch (HH) {
        return !1
      }
    }
    const mY = {
        featureFlags: class extends FG {
          constructor(HH) {
            const BH = new wG(HH.config, HH._shouldDisableFlags());
            super(BH), this.name = xX, this._instance = HH, this._mutableConfigSource = BH
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(HH, BH) {
            this._mutableConfigSource.update(HH, BH), this._onConfigUpdated()
          }
        }
      },
      oY = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var HH;
            return !!(null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH ? void 0 : HH.isStarted)
          }
          get status() {
            var HH, BH;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (HH = null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH ? void 0 : BH.status) && void 0 !== HH ? HH : this._recordingStatus
          }
          constructor(HH) {
            if (this._instance = HH, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = CG, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var HH, BH;
                if (!(null == yB ? void 0 : yB.visibilityState) || "visible" === yB.visibilityState) return !0;
                const LH = null == JB || null === (HH = JB.performance) || void 0 === HH || null === (BH = HH.getEntriesByType) || void 0 === BH ? void 0 : BH.call(HH, "visibility-state");
                return !(null == LH ? void 0 : LH.length) || LH.some((HH => "visible" === HH.name))
              })(), this._onVisibilityChange = () => {
                var HH, BH;
                "visible" === (null == yB ? void 0 : yB.visibilityState) && (this._documentWasEverVisible = !0, null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH || null === (BH = HH.setDocumentWasEverVisible) || void 0 === BH || BH.call(HH, !0))
              }, !this._instance.sessionManager) throw XG.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == yB ? void 0 : yB.addEventListener) && ah(yB, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: HH = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var BH;
            this._sessionRecordingDisposed = !0, null == yB || null === (BH = yB.removeEventListener) || void 0 === BH || BH.call(yB, "visibilitychange", this._onVisibilityChange), HH ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var HH;
            const BH = !!(null === (HH = this._instance.get_property("$session_recording_remote_config")) || void 0 === HH ? void 0 : HH.enabled),
              LH = !this._config.disable_session_recording,
              AH = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return JB && BH && LH && !AH
          }
          startIfEnabledOrStop(HH) {
            var BH;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH ? void 0 : BH.isStarted)) return;
            const LH = !VL(Object.assign) && !VL(Array.from);
            this._isRecordingEnabled && LH ? (this._lazyLoadAndStart(HH), XG.info("starting")) : (this._recordingStatus = CG, this.stopRecording())
          }
          _lazyLoadAndStart(HH) {
            var BH, LH;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = EG), (null == tL || null === (BH = tL.__PosthogExtensions__) || void 0 === BH || null === (BH = BH.rrweb) || void 0 === BH ? void 0 : BH.record) && (null === (LH = tL.__PosthogExtensions__) || void 0 === LH ? void 0 : LH.initSessionRecording)) this._onScriptLoaded(HH);
              else {
                var AH, rH;
                const BH = this._instance.sessionManager;
                null === (AH = tL.__PosthogExtensions__) || void 0 === AH || null === (rH = AH.loadExternalDependency) || void 0 === rH || rH.call(AH, this._instance, this._scriptName, (LH => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === BH) return LH ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), XG.error("could not load recorder", LH)) : void this._onScriptLoaded(HH);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var HH, BH;
            null === (HH = this._persistFlagsOnSessionListener) || void 0 === HH || HH.call(this), this._persistFlagsOnSessionListener = void 0, null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH || BH.stop()
          }
          _discardRecording() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var BH, LH;
            null === (BH = this._persistFlagsOnSessionListener) || void 0 === BH || BH.call(this), this._persistFlagsOnSessionListener = void 0, null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH || LH.discard({
              discardProducerEvents: HH
            })
          }
          _resetSampling() {
            var HH, BH;
            null === (HH = this._persistence) || void 0 === HH || HH.unregister("$session_is_sampled"), null === (BH = this._persistence) || void 0 === BH || BH.unregister("$replay_sample_rate")
          }
          _validateSampleRate(HH, BH) {
            if (mL(HH)) return null;
            const LH = oL(HH) ? HH : parseFloat(HH);
            return "number" != typeof(AH = LH) || !Number.isFinite(AH) || 0 > AH || AH > 1 ? (XG.warn(`${BH} must be between 0 and 1. Ignoring invalid value:`, HH), null) : LH;
            var AH
          }
          _persistRemoteConfig(HH) {
            if (this._persistence) {
              var BH, LH;
              const AH = this._persistence,
                rH = () => {
                  var BH;
                  const LH = !1 === HH.sessionRecording ? void 0 : HH.sessionRecording,
                    rH = this._validateSampleRate(null === (BH = this._config.session_recording) || void 0 === BH ? void 0 : BH.sampleRate, "session_recording.sampleRate"),
                    SH = this._validateSampleRate(null == LH ? void 0 : LH.sampleRate, "remote config sampleRate"),
                    hH = null != rH ? rH : SH;
                  mL(hH) && this._resetSampling();
                  const tH = null == LH ? void 0 : LH.minimumDurationMilliseconds;
                  AH.register({
                    [wH]: xr(xr({
                      cache_timestamp: Date.now(),
                      enabled: !!LH
                    }, LH), {}, {
                      networkPayloadCapture: xr({
                        capturePerformance: HH.capturePerformance
                      }, null == LH ? void 0 : LH.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == LH ? void 0 : LH.recordCanvas,
                        fps: null == LH ? void 0 : LH.canvasFps,
                        quality: null == LH ? void 0 : LH.canvasQuality
                      },
                      sampleRate: hH,
                      minimumDurationMilliseconds: VL(tH) ? null : tH,
                      endpoint: null == LH ? void 0 : LH.endpoint,
                      triggerMatchType: null == LH ? void 0 : LH.triggerMatchType,
                      masking: null == LH ? void 0 : LH.masking,
                      urlTriggers: null == LH ? void 0 : LH.urlTriggers,
                      version: null == LH ? void 0 : LH.version,
                      triggerGroups: null == LH ? void 0 : LH.triggerGroups
                    })
                  })
                };
              rH(), null === (BH = this._persistFlagsOnSessionListener) || void 0 === BH || BH.call(this), this._persistFlagsOnSessionListener = null === (LH = this._instance.sessionManager) || void 0 === LH ? void 0 : LH.onSessionId(rH)
            }
          }
          onRemoteConfig(HH) {
            const BH = HH.ok ? HH.config : void 0;
            return BH && "sessionRecording" in BH ? !1 === BH.sessionRecording ? (this._persistRemoteConfig(BH), void this._discardRecording()) : (this._persistRemoteConfig(BH), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [fB]: !0
            }), XG.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var LH;
            (null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH ? void 0 : LH.log) ? this._lazyLoadedSessionRecording.log(HH, BH): XG.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var HH, BH;
            const LH = null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH ? void 0 : HH.get_property(wH);
            return (null == LH || null === (BH = LH.scriptConfig) || void 0 === BH ? void 0 : BH.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const HH = this._instance.get_property(wH);
            if (!HH) return !1;
            let BH;
            try {
              BH = "object" == typeof HH ? HH : JSON.parse(HH)
            } catch (HH) {
              return XG.warn("persisted remote config for session recording is invalid and will be ignored", HH), !1
            }
            return !mL(BH.cache_timestamp) && 36e5 >= Date.now() - BH.cache_timestamp
          }
          _onScriptLoaded(HH) {
            var BH, LH, AH;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.initSessionRecording)) return XG.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [IB]: !0
              });
              var rH;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (rH = tL.__PosthogExtensions__) || void 0 === rH ? void 0 : rH.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", XG.info("persisted remote config is stale, requesting fresh config before starting"), void new NC(this._instance).load()
              }
              this._recordingStatus = EG, null === (LH = (AH = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === LH || LH.call(AH, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(HH)
            } else this._recordingStatus = CG
          }
          onRRwebEmit(HH) {
            var BH, LH;
            null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH || null === (LH = BH.onRRwebEmit) || void 0 === LH || LH.call(BH, HH)
          }
          overrideLinkedFlag() {
            var HH, BH;
            this._lazyLoadedSessionRecording || null === (BH = this._persistence) || void 0 === BH || BH.register({
              $replay_override_linked_flag: !0
            }), null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH || HH.overrideLinkedFlag()
          }
          overrideSampling() {
            var HH, BH;
            this._lazyLoadedSessionRecording || null === (BH = this._persistence) || void 0 === BH || BH.register({
              $replay_override_sampling: !0
            }), null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH || HH.overrideSampling()
          }
          overrideTrigger(HH) {
            var BH, LH;
            this._lazyLoadedSessionRecording || null === (LH = this._persistence) || void 0 === LH || LH.register({
              ["url" === HH ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (BH = this._lazyLoadedSessionRecording) || void 0 === BH || BH.overrideTrigger(HH)
          }
          get sdkDebugProperties() {
            var HH;
            const BH = {};
            for (const AH of GG) {
              var LH;
              const HH = null === (LH = this._instance.sessionPersistence) || void 0 === LH ? void 0 : LH.get_property(AH);
              VL(HH) || (BH[AH] = HH)
            }
            return xr(xr({}, BH), (null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH ? void 0 : HH.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(HH, BH) {
            var LH;
            return !!(null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH ? void 0 : LH.tryAddCustomEvent(HH, BH))
          }
          flushBeforeIdentityReset() {
            var HH, BH;
            null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH || null === (BH = HH.flushBeforeIdentityReset) || void 0 === BH || BH.call(HH)
          }
        }
      },
      IY = {
        autocapture: class extends iX {
          constructor(HH) {
            super(new pX(HH)), this.instance = HH
          }
        },
        historyAutocapture: class {
          constructor(HH) {
            this._isFlushingPageview = !1, this._instance = HH, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const HH = this._getCaptureOptions();
            return !!(HH.path || HH.search || this._shouldCaptureHashChanges(HH))
          }
          startIfEnabled() {
            this.isEnabled && (qh.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, qh.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            JB && JB.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(HH) {
            var BH;
            if (!JB || (null === (BH = JB.history[HH]) || void 0 === BH ? void 0 : BH.__posthog_wrapped__)) return;
            const LH = this;
            LG(JB.history, HH, (BH => function(AH, rH, SH) {
              var hH;
              LH._isUrlChanging(SH) && LH._flushPendingPageview(), BH.call(this, AH, rH, SH), LH._capturePageview(HH, !LH._isFlushingPageview && "popstate" !== (null == JB || null === (hH = JB.event) || void 0 === hH ? void 0 : hH.type))
            }))
          }
          _getCurrentLocation() {
            const HH = null == JB ? void 0 : JB.location;
            if (null == HH ? void 0 : HH.pathname) return {
              pathname: HH.pathname,
              search: HH.search,
              hash: HH.hash
            }
          }
          _getCaptureOptions() {
            const HH = this._instance.config.capture_pageview;
            return "history_change" === HH ? {
              path: !0
            } : TL(HH) ? HH : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(HH) {
            const BH = this._getCaptureOptions(),
              LH = this._lastLocation;
            return !(!LH || !(BH.path && HH.pathname !== LH.pathname || BH.search && HH.search !== LH.search || this._shouldCaptureHashChanges(BH) && HH.hash !== LH.hash))
          }
          _capturePageview(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              BH || this._flushPendingPageview();
              const LH = this._getCurrentLocation();
              if (!LH) return;
              if (this._hasLocationChanged(LH)) {
                const LH = () => this._instance.capture(ZB, {
                  navigation_type: HH
                });
                BH ? (this._pendingPageview = LH, Promise.resolve().then((() => this._flushPendingPageview()))) : LH()
              }
              this._lastLocation = LH
            } catch (BH) {
              qh.error(`Error capturing ${HH} pageview`, BH)
            }
          }
          _isUrlChanging(HH) {
            var BH, LH;
            return !(mL(HH) || !JB) && (null === (BH = Nz(String(HH))) || void 0 === BH ? void 0 : BH.href) !== (null === (LH = JB.location) || void 0 === LH ? void 0 : LH.href)
          }
          _flushPendingPageview() {
            const HH = this._pendingPageview;
            if (HH) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                HH()
              } catch (HH) {
                qh.error("Error capturing deferred pageview", HH)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const HH = () => {
              this._capturePageview("popstate")
            };
            ah(JB, "popstate", HH), this._popstateListener = () => {
              JB && JB.removeEventListener("popstate", HH)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const HH = () => {
              this._capturePageview("hashchange")
            };
            ah(JB, "hashchange", HH), this._hashchangeListener = () => {
              JB && JB.removeEventListener("hashchange", HH)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(HH) {
            var BH;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = HH, this._enabledServerSide = !!(null === (BH = this.instance.persistence) || void 0 === BH ? void 0 : BH.props[eH]), this.rageclicks = new ZX(HH.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let HH = 5e3;
            return TL(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (HH = this._config.capture_heatmaps.flush_interval_milliseconds), HH
          }
          get isEnabled() {
            return mL(this._config.capture_heatmaps) ? mL(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              YG.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var HH;
              clearInterval(null !== (HH = this._flushInterval) && void 0 !== HH ? HH : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(HH) {
            if (!HH.ok) return;
            const BH = HH.config;
            if (!("heatmaps" in BH)) return;
            const LH = !!BH.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [eH]: LH
            }), this._enabledServerSide = LH, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const HH = this._buffer;
            return this._buffer = void 0, HH
          }
          _onDeadClick(HH) {
            uG(HH.originalEvent) && this._onClick(HH.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == yB ? void 0 : yB.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            JB && yB && (this._flushHandler = this._flush.bind(this), ah(JB, wB, this._flushHandler), this._onClickHandler = HH => this._onClick(HH || (null == JB ? void 0 : JB.event)), ah(yB, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = HH => this._onMouseMove(HH || (null == JB ? void 0 : JB.event)), ah(yB, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Tz(this.instance, vz, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), ah(yB, TH, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var HH;
            JB && yB && (this._flushHandler && JB.removeEventListener(wB, this._flushHandler), this._onClickHandler && yB.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && yB.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && yB.removeEventListener(TH, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (HH = this._deadClicksCapture) || void 0 === HH || HH.stop(), this._initialized = !1)
          }
          _getProperties(HH, BH) {
            const LH = this.instance.scrollManager.scrollY(),
              AH = this.instance.scrollManager.scrollX(),
              rH = this.instance.scrollManager.scrollElement(),
              SH = function(HH, BH, LH) {
                let AH = HH;
                for (; AH && mt(AH) && !ot(AH, "body");) {
                  if (AH === LH) return !1;
                  let tH;
                  try {
                    var rH, SH, hH;
                    tH = null === (rH = null !== (SH = null === (hH = AH.ownerDocument) || void 0 === hH ? void 0 : hH.defaultView) && void 0 !== SH ? SH : JB) || void 0 === rH ? void 0 : rH.getComputedStyle(AH).position
                  } catch (HH) {
                    return !1
                  }
                  if (GL(BH, tH)) return !0;
                  AH = nt(AH)
                }
                return !1
              }(gt(HH), ["fixed", "sticky"], rH);
            return {
              x: HH.clientX + (SH ? 0 : AH),
              y: HH.clientY + (SH ? 0 : LH),
              target_fixed: SH,
              type: BH
            }
          }
          _onClick(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var LH;
            if (kt(HH.target) || !uG(HH)) return;
            const AH = this._getProperties(HH, BH);
            (null === (LH = this.rageclicks) || void 0 === LH ? void 0 : LH.isRageClick(HH.clientX, HH.clientY, (new Date).getTime())) && Bz(gt(HH), this.instance.config.rageclick) && this._capture(xr(xr({}, AH), {}, {
              type: "rageclick"
            })), this._capture(AH)
          }
          _onMouseMove(HH) {
            !kt(HH.target) && uG(HH) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(HH, "mousemove"))
            }), 500))
          }
          _capture(HH) {
            if (!JB) return;
            const BH = this._config.disable_capture_url_hashes ? Er(JB.location.href) : JB.location.href,
              LH = this._config.custom_personal_data_properties,
              AH = this._config.mask_personal_data_properties ? [...Fz, ...LH || []] : [],
              rH = jz(BH, AH, wz);
            this._buffer = this._buffer || {}, this._buffer[rH] || (this._buffer[rH] = []), this._buffer[rH].push(HH)
          }
          _flush() {
            this._buffer && !UL(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Tz,
        webVitalsAutocapture: class {
          constructor(HH) {
            var BH;
            this._instance = HH, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", xr({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((HH, BH) => xr(xr({}, HH), {}, {
                [`$web_vitals_${BH.name}_event`]: xr({}, BH),
                [`$web_vitals_${BH.name}_value`]: BH.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = HH => {
              var BH;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, mL(null == HH ? void 0 : HH.name) || mL(null == HH ? void 0 : HH.value)) return void rG.error("Invalid metric received", HH);
              const LH = "string" == typeof HH.navigationURL ? HH.navigationURL : void 0,
                AH = this._maskedURL(LH);
              if (VL(AH)) return;
              const rH = oL(HH.navigationId) || "string" == typeof HH.navigationId ? `navigation:${HH.navigationId}` : `url:${AH}`;
              if (this._maxAllowedValue && HH.value >= this._maxAllowedValue) return void rG.error("Ignoring metric with value >= " + this._maxAllowedValue, HH);
              this._buffer.navigationKey !== rH && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), VL(this._buffer.navigationKey) && (this._buffer.navigationKey = rH, this._buffer.url = AH), this._buffer.firstMetricTimestamp = VL(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const SH = null === (BH = this._instance.sessionManager) || void 0 === BH ? void 0 : BH.checkAndGetSessionAndWindowId(!0),
                hH = xr(xr(xr({}, HH), LH ? {
                  navigationURL: AH
                } : {}), {}, {
                  $current_url: AH,
                  timestamp: Date.now()
                });
              if (delete hH.entries, TL(HH.attribution) && this.attributionMetrics.indexOf(HH.name) > -1) {
                const BH = {};
                for (const LH of zG) {
                  const AH = "url" === LH && "string" == typeof HH.attribution[LH] ? this._maskedURL(HH.attribution[LH]) : HH.attribution[LH];
                  VL(AH) || (BH[LH] = AH)
                }
                hH.attribution = BH
              } else delete hH.attribution;
              VL(SH) || (hH.$session_id = SH.sessionId, hH.$window_id = SH.windowId), this._buffer.metrics.push(hH), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let HH, BH, LH, AH, rH = !1;
              const SH = tL.__PosthogExtensions__,
                hH = null == SH ? void 0 : SH.postHogWebVitalsCallbacksByFlavor,
                tH = (null == hH ? void 0 : hH[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && VL(hH) ? null == SH ? void 0 : SH.postHogWebVitalsCallbacks : void 0);
              if (!VL(tH)) {
                const SH = tH.withoutAttribution,
                  hH = this.attributionMetrics;
                rH = !VL(SH), HH = hH.indexOf("LCP") > -1 ? tH.onLCP : (null == SH ? void 0 : SH.onLCP) || tH.onLCP, BH = hH.indexOf("CLS") > -1 ? tH.onCLS : (null == SH ? void 0 : SH.onCLS) || tH.onCLS, LH = hH.indexOf("FCP") > -1 ? tH.onFCP : (null == SH ? void 0 : SH.onFCP) || tH.onFCP, AH = hH.indexOf("INP") > -1 ? tH.onINP : (null == SH ? void 0 : SH.onINP) || tH.onINP
              }
              if (!(HH && BH && LH && AH)) return void rG.error("web vitals callbacks not loaded - not starting");
              const zH = {
                  reportSoftNavs: this.useSoftNavs
                },
                CH = rH && this.attributionMetrics.indexOf("INP") > -1 ? xr(xr({}, zH), {}, {
                  includeProcessedEventEntries: !1
                }) : zH;
              this.allowedMetrics.indexOf("LCP") > -1 && HH(this._addToBuffer.bind(this), zH), this.allowedMetrics.indexOf("CLS") > -1 && BH(this._addToBuffer.bind(this), zH), this.allowedMetrics.indexOf("FCP") > -1 && LH(this._addToBuffer.bind(this), zH), this.allowedMetrics.indexOf("INP") > -1 && AH(this._addToBuffer.bind(this), CH), this._initialized = !0
            }, this._enabledServerSide = !!(null === (BH = this._instance.persistence) || void 0 === BH ? void 0 : BH.props[RH]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var HH, BH;
            const LH = TL(this._perfConfig) ? null === (HH = this._perfConfig) || void 0 === HH ? void 0 : HH.web_vitals_allowed_metrics : void 0;
            return mL(LH) ? (null === (BH = this._instance.persistence) || void 0 === BH ? void 0 : BH.props.$web_vitals_allowed_metrics) || hG : LH
          }
          get flushToCaptureTimeoutMs() {
            return (TL(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const HH = TL(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return fL(HH) ? HH ? hG : [] : vL(HH) ? HH : tG
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const HH = TL(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != HH && HH
          }
          get _maxAllowedValue() {
            const HH = TL(this._perfConfig) && oL(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : SG;
            return HH > 0 && 6e4 >= HH ? SG : HH
          }
          get isEnabled() {
            const HH = null == HL ? void 0 : HL.protocol;
            if ("http:" !== HH && "https:" !== HH) return rG.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const BH = TL(this._perfConfig) ? this._perfConfig.web_vitals : fL(this._perfConfig) ? this._perfConfig : void 0;
            return fL(BH) ? BH : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (rG.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(HH) {
            if (!HH.ok) return;
            const BH = HH.config;
            if (!("capturePerformance" in BH)) return;
            const LH = TL(BH.capturePerformance) && !!BH.capturePerformance.web_vitals,
              AH = TL(BH.capturePerformance) ? BH.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [RH]: LH
            }), this._instance.persistence.register({
              [DH]: AH
            })), this._enabledServerSide = LH, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(HH) {
            var BH;
            const LH = tL.__PosthogExtensions__,
              AH = this._callbackFlavor,
              rH = null == LH ? void 0 : LH.postHogWebVitalsCallbacksByFlavor;
            (null == rH ? void 0 : rH[AH]) || "web-vitals" === AH && VL(rH) && (null == LH ? void 0 : LH.postHogWebVitalsCallbacks) ? HH() : null == LH || null === (BH = LH.loadExternalDependency) || void 0 === BH || BH.call(LH, this._instance, AH, (BH => {
              BH ? rG.error("failed to load script", BH) : HH()
            }))
          }
          _maskedURL(HH) {
            const BH = HH || (null == JB ? void 0 : JB.location.href);
            if (!BH) return void rG.error("Could not determine current URL");
            const LH = this._instance.config.disable_capture_url_hashes ? Er(BH) : BH,
              AH = this._instance.config.custom_personal_data_properties,
              rH = this._instance.config.mask_personal_data_properties ? [...Fz, ...AH || []] : [];
            return jz(LH, rH, wz)
          }
        }
      },
      fY = {
        exceptionObserver: class {
          constructor(HH) {
            var BH;
            this._startCapturing = () => {
              var HH;
              if (!JB || !this.isEnabled || !(null === (HH = tL.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.errorWrappingFunctions)) return;
              const BH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                LH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                AH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = BH(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = LH(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = AH(this.captureException.bind(this)))
              } catch (HH) {
                yX.error("failed to start", HH), this._stopCapturing()
              }
            }, this._instance = HH, this._remoteEnabled = !!(null === (BH = this._instance.persistence) || void 0 === BH ? void 0 : BH.props[qH]), this._rateLimiter = new sL(xr(xr({}, function() {
              let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var BH, LH, AH, rH;
              return {
                refillRate: null !== (BH = null !== (LH = HH.exceptionRateLimiterRefillRate) && void 0 !== LH ? LH : HH.__exceptionRateLimiterRefillRate) && void 0 !== BH ? BH : 1,
                bucketSize: null !== (AH = null !== (rH = HH.exceptionRateLimiterBucketSize) && void 0 !== rH ? rH : HH.__exceptionRateLimiterBucketSize) && void 0 !== AH ? AH : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: yX
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const HH = this._instance.config.capture_exceptions;
            let BH = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return TL(HH) ? BH = xr(xr({}, BH), HH) : (VL(HH) ? this._remoteEnabled : HH) && (BH = xr(xr({}, BH), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), BH
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (yX.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(HH) {
            var BH, LH, AH;
            (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.errorWrappingFunctions) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "exception-autocapture", (BH => {
              if (BH) return yX.error("failed to load script", BH);
              HH()
            }))
          }
          _stopCapturing() {
            var HH, BH, LH;
            null === (HH = this._unwrapOnError) || void 0 === HH || HH.call(this), this._unwrapOnError = void 0, null === (BH = this._unwrapUnhandledRejection) || void 0 === BH || BH.call(this), this._unwrapUnhandledRejection = void 0, null === (LH = this._unwrapConsoleError) || void 0 === LH || LH.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(HH) {
            if (!HH.ok) return;
            const BH = HH.config;
            "autocaptureExceptions" in BH && (this._remoteEnabled = !!BH.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [qH]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(HH) {
            try {
              var BH, LH, AH;
              const rH = null !== (BH = null == HH || null === (LH = HH.$exception_list) || void 0 === LH || null === (LH = LH[0]) || void 0 === LH ? void 0 : LH.type) && void 0 !== BH ? BH : "Exception";
              if (this._rateLimiter.consumeRateLimit(rH)) return void yX.info("Skipping exception capture because of client rate limiting.", {
                exception: rH
              });
              null === (AH = this._instance.exceptions) || void 0 === AH || AH.sendExceptionEvent(HH)
            } catch (HH) {}
          }
        },
        exceptions: class {
          constructor(HH) {
            var BH, LH;
            this._suppressionRules = [], this._errorPropertiesBuilder = new br([new ar, new rS, new Jr, new sr, new LS, new BS, new pr, new AS], function(HH) {
              for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
              return function(BH) {
                let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const rH = [],
                  SH = BH.split("\n"),
                  hH = Math.min(SH.length, AH + 1e3),
                  tH = [];
                for (let EH = AH; hH > EH; EH++) {
                  const BH = SH[EH];
                  if (BH.length > 1024) continue;
                  const AH = Rr.test(BH) ? BH.replace(Rr, "$1") : BH;
                  if (!AH.match(/\S*Error: /)) {
                    for (const BH of LH) {
                      const LH = BH(AH, HH);
                      if (LH) {
                        rH.push(LH);
                        const HH = nr(rH);
                        if (HH) {
                          for (let BH = tH.length - 1; BH >= 0; BH--) {
                            const LH = tH[BH];
                            if (HH.start >= LH.start + LH.length) break;
                            tH.pop()
                          }
                          tH.push(HH)
                        }
                        break
                      }
                    }
                    if (Zr(rH, tH) >= 50) break
                  }
                }
                const zH = [...tH].sort(((HH, BH) => BH.start - HH.start)),
                  CH = zH[zH.length - 1];
                if (CH) {
                  const HH = Dr(rH, CH);
                  rH.splice(CH.start - HH, HH);
                  for (const BH of zH) BH.start -= HH
                }
                for (const HH of zH) Fr(rH, HH);
                return tH.some((HH => 0 === HH.start && rH.length === HH.length)) && function(HH) {
                    const BH = HH.map((HH => `${HH.function}|${HH.filename}|${HH.lineno}|${HH.colno}|${HH.module}`));
                    let LH = 0;
                    for (let AH = 1; BH.length > AH; AH++) dr(BH, AH, LH) && (LH = AH);
                    HH.push(...HH.splice(0, LH))
                  }(rH),
                  function(HH) {
                    if (!HH.length) return [];
                    const BH = Array.from(HH);
                    return BH.reverse(), BH.slice(0, 50).map((HH => {
                      return xr(xr({}, HH), {}, {
                        filename: HH.filename || (LH = BH, LH[LH.length - 1] || {}).filename,
                        function: HH.function || "?"
                      });
                      var LH
                    }))
                  }(rH)
              }
            }("web:javascript", er, Nr)), this._instance = HH, this._suppressionRules = null !== (BH = null === (LH = this._instance.persistence) || void 0 === LH ? void 0 : LH.get_property("$error_tracking_suppression_rules")) && void 0 !== BH ? BH : [], this._exceptionStepsConfig = CS(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new ES(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = CS(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(HH) {
            var BH, LH, AH;
            if (!HH.ok) return;
            const rH = HH.config;
            if (!("errorTracking" in rH)) return;
            const SH = null !== (BH = null === (LH = rH.errorTracking) || void 0 === LH ? void 0 : LH.suppressionRules) && void 0 !== BH ? BH : [],
              hH = null === (AH = rH.errorTracking) || void 0 === AH ? void 0 : AH.captureExtensionExceptions;
            this._suppressionRules = SH, this._instance.persistence && this._instance.persistence.register({
              [gH]: this._suppressionRules,
              [NH]: hH
            })
          }
          get _captureExtensionExceptions() {
            var HH;
            const BH = !!this._instance.get_property(NH),
              LH = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (HH = null != LH ? LH : BH) && void 0 !== HH && HH
          }
          buildProperties(HH, BH) {
            return this._errorPropertiesBuilder.buildFromUnknown(HH, {
              syntheticException: null == BH ? void 0 : BH.syntheticException,
              mechanism: {
                handled: null == BH ? void 0 : BH.handled
              }
            })
          }
          addExceptionStep(HH, BH) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!OL(HH) || 0 === HH.trim().length) return void dG.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: LH,
                droppedKeys: AH
              } = function(HH) {
                if (!HH) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const BH = [];
                return {
                  sanitizedProperties: Object.keys(HH).reduce(((LH, AH) => tS.has(AH) ? (BH.push(AH), LH) : (LH[AH] = HH[AH], LH)), {}),
                  droppedKeys: BH
                }
              }(this._coerceExceptionStepProperties(BH));
              AH.length > 0 && dG.warn("Ignoring reserved exception step fields", {
                droppedKeys: AH
              }), this._exceptionStepsBuffer.add(xr({
                [SS]: HH,
                [hS]: (new Date).toISOString()
              }, LH))
            } catch (HH) {
              dG.error("Failed to add exception step. Ignoring breadcrumb.", HH)
            }
          }
          sendExceptionEvent(HH) {
            try {
              const BH = HH.$exception_list;
              if (this._isExceptionList(BH)) {
                if (this._matchesSuppressionRule(BH)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void dG.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(BH)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void dG.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(BH)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void dG.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(BH)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void dG.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const LH = this._exceptionStepsConfig.enabled && mL(HH.$exception_steps) ? this._addBufferedExceptionSteps(HH) : HH,
                AH = function() {
                  if ("u" > typeof process) {
                    var HH;
                    const BH = null === (HH = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === HH ? void 0 : HH.trim();
                    if (BH) return BH
                  }
                  const BH = globalThis._posthogReleaseId;
                  return "string" == typeof BH && BH.length > 0 ? BH : void 0
                }();
              AH && (LH.$release_id = AH);
              try {
                const HH = this._instance.capture("$exception", LH, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return HH && this._exceptionStepsBuffer.clear(), HH
              } catch (HH) {
                return ZG(HH) || dG.error("Failed to capture exception event. Dropping this exception.", HH), void this._exceptionStepsBuffer.clear()
              }
            } catch (HH) {
              return void(ZG(HH) || dG.error("Failed to process exception event. Ignoring this exception.", HH))
            }
          }
          _addBufferedExceptionSteps(HH) {
            try {
              const BH = this._exceptionStepsBuffer.getAttachable();
              return 0 === BH.length ? HH : xr(xr({}, HH), {}, {
                $exception_steps: BH
              })
            } catch (rH) {
              return dG.error("Failed to read buffered exception steps. Capturing exception without steps.", rH), HH
            }
          }
          _addDroppedExceptionStep(HH) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [SS]: HH,
              [hS]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(HH) {
            return TL(HH) ? xr({}, HH) : {}
          }
          _getExceptionStepsConfig() {
            var HH, BH;
            return null !== (HH = null === (BH = this._instance.config.error_tracking) || void 0 === BH ? void 0 : BH.exception_steps) && void 0 !== HH ? HH : {}
          }
          _matchesSuppressionRule(HH) {
            if (0 === HH.length) return !1;
            try {
              const BH = HH.reduce(((HH, BH) => {
                let {
                  type: LH,
                  value: AH
                } = BH;
                return OL(LH) && LH.length > 0 && HH.$exception_types.push(LH), OL(AH) && AH.length > 0 && HH.$exception_values.push(AH), HH
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((HH => {
                const LH = HH.values.map((HH => {
                  const LH = LX[HH.operator],
                    AH = BH[HH.key];
                  if (!LH || !AH) return !1;
                  const rH = vL(HH.value) ? HH.value : [HH.value];
                  return rH.length > 0 && LH(rH, AH)
                }));
                return "OR" === HH.type ? LH.some(Boolean) : LH.every(Boolean)
              }))
            } catch (HH) {
              return dG.warn("Failed to evaluate suppression rules. Capturing the exception.", HH), !1
            }
          }
          _isExtensionException(HH) {
            const BH = HH.flatMap((HH => {
                var BH, LH;
                return null !== (BH = null === (LH = HH.stacktrace) || void 0 === LH ? void 0 : LH.frames) && void 0 !== BH ? BH : []
              })),
              LH = BH.filter((HH => {
                let {
                  filename: BH
                } = HH;
                return !!BH && JG.some((HH => BH.startsWith(HH)))
              }));
            return 0 !== LH.length && (!LH.every((HH => {
              let {
                filename: BH
              } = HH;
              return !!BH && BH.startsWith(aG)
            })) || HH.some((HH => {
              let {
                type: BH,
                value: LH
              } = HH;
              return "NoResponse" === BH || OL(LH) && sG.some((HH => {
                let {
                  value: BH,
                  exact: AH
                } = HH;
                return AH ? LH === BH : LH.includes(BH)
              }))
            })) && !BH.some((HH => {
              let {
                in_app: BH,
                filename: LH
              } = HH;
              return BH && !(null == LH ? void 0 : LH.startsWith(aG))
            })))
          }
          _isInjectedBrowserScriptException(HH) {
            return HH.some((HH => {
              let {
                value: BH
              } = HH;
              return OL(BH) && iG.some((HH => BH.includes(HH)))
            }))
          }
          _isPostHogException(HH) {
            if (HH.length > 0) {
              var BH, LH, AH, rH;
              const SH = null !== (BH = null === (LH = HH[0].stacktrace) || void 0 === LH ? void 0 : LH.frames) && void 0 !== BH ? BH : [],
                hH = SH[SH.length - 1];
              return null !== (AH = null == hH || null === (rH = hH.filename) || void 0 === rH ? void 0 : rH.includes("posthog.com/static")) && void 0 !== AH && AH
            }
            return !1
          }
          _isExceptionList(HH) {
            return !mL(HH) && vL(HH)
          }
        }
      },
      lY = xr({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(HH) {
            this._productTourManager = null, this._cachedTours = null, this._instance = HH
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(HH) {
            if (!HH.ok) return;
            const BH = HH.config;
            if ("productTours" in BH) {
              var LH, AH;
              if (this._persistence && this._persistence.register({
                  [nH]: !!BH.productTours
                }), !WG(this._instance)) return !this._productTourManager && mL(null === (LH = this._persistence) || void 0 === LH ? void 0 : LH.props.ph_product_tours) || QG.info("product tours disabled; stopping and clearing cached tours"), null === (AH = this._productTourManager) || void 0 === AH || AH.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && WG(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(HH) {
            var BH, LH, AH;
            (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.generateProductTours) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "product-tours", (BH => {
              BH ? QG.error("Could not load product tours script", BH) : HH()
            }))
          }
          _startProductTours() {
            var HH;
            !this._productTourManager && (null === (HH = tL.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.generateProductTours) && (this._productTourManager = tL.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (vL(this._cachedTours) && !BH) return void HH(this._cachedTours, {
              isLoaded: !0
            });
            const LH = this._persistence;
            if (LH) {
              const AH = LH.props[XB];
              if (vL(AH) && !BH) return this._cachedTours = AH, void HH(AH, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: BH => {
                if (!WG(this._instance)) return void HH([], {
                  isLoaded: !0
                });
                const AH = BH.statusCode;
                if (200 !== AH || !BH.json) {
                  const LH = `Product Tours API could not be loaded, status: ${AH}`;
                  return 0 === AH ? BH.error || QG.warn(LH) : QG.error(LH), void HH([], {
                    isLoaded: !1,
                    error: LH
                  })
                }
                const rH = vL(BH.json.product_tours) ? BH.json.product_tours : [];
                this._cachedTours = rH, LH && LH.register({
                  [XB]: rH
                }), HH(rH, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(HH) {
            mL(this._productTourManager) ? HH([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(HH)
          }
          showProductTour(HH) {
            var BH;
            null === (BH = this._productTourManager) || void 0 === BH || BH.showTourById(HH)
          }
          previewTour(HH) {
            this._productTourManager ? this._productTourManager.previewTour(HH) : this._loadScript((() => {
              var BH;
              this._startProductTours(), null === (BH = this._productTourManager) || void 0 === BH || BH.previewTour(HH)
            }))
          }
          dismissProductTour() {
            var HH;
            null === (HH = this._productTourManager) || void 0 === HH || HH.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var HH;
            null === (HH = this._productTourManager) || void 0 === HH || HH.nextStep()
          }
          previousStep() {
            var HH;
            null === (HH = this._productTourManager) || void 0 === HH || HH.previousStep()
          }
          clearCache() {
            var HH;
            this._cachedTours = null, null === (HH = this._persistence) || void 0 === HH || HH.unregister("ph_product_tours")
          }
          resetTour(HH) {
            var BH;
            null === (BH = this._productTourManager) || void 0 === BH || BH.resetTour(HH)
          }
          resetAllTours() {
            var HH;
            null === (HH = this._productTourManager) || void 0 === HH || HH.resetAllTours()
          }
          cancelPendingTour(HH) {
            var BH;
            null === (BH = this._productTourManager) || void 0 === BH || BH.cancelPendingTour(HH)
          }
        }
      }, mY),
      KY = {
        siteApps: class {
          constructor(HH) {
            this._instance = HH, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(HH, BH) {
            if (!BH) return;
            const LH = this.globalsForEvent(BH);
            this._bufferedInvocations.push(LH), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var HH;
            return null === (HH = tL._POSTHOG_REMOTE_CONFIG) || void 0 === HH || null === (HH = HH[this._instance.config.token]) || void 0 === HH ? void 0 : HH.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const HH = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                HH(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(HH) {
            var BH, LH, AH, rH, SH, hH, tH;
            if (!HH) throw new Error("Event payload is required");
            const zH = {},
              CH = this._instance.get_property("$groups") || [],
              EH = this._instance.get_property("$stored_group_properties") || {};
            for (const [YH, uH] of Object.entries(EH)) zH[YH] = {
              id: CH[YH],
              type: YH,
              properties: uH
            };
            const {
              $set_once: XH,
              $set: GH
            } = HH;
            return {
              event: xr(xr({}, bS(HH, MG)), {}, {
                properties: xr(xr(xr({}, HH.properties), GH ? {
                  $set: xr(xr({}, null !== (BH = null === (LH = HH.properties) || void 0 === LH ? void 0 : LH.$set) && void 0 !== BH ? BH : {}), GH)
                } : {}), XH ? {
                  $set_once: xr(xr({}, null !== (AH = null === (rH = HH.properties) || void 0 === rH ? void 0 : rH.$set_once) && void 0 !== AH ? AH : {}), XH)
                } : {}),
                elements_chain: null !== (SH = null === (hH = HH.properties) || void 0 === hH ? void 0 : hH.$elements_chain) && void 0 !== SH ? SH : "",
                distinct_id: null === (tH = HH.properties) || void 0 === tH ? void 0 : tH.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: zH
            }
          }
          _prepareElementForSiteApp(HH) {
            var BH;
            const LH = null === (BH = HH.tagName) || void 0 === BH ? void 0 : BH.toLowerCase();
            return "style" === LH && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(HH) || (xG.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === LH && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(HH) || (xG.error("prepare_external_dependency_script returned null"), null) : HH
          }
          _patchSiteAppElementInsertionMethods() {
            var HH, BH, LH, AH, rH, SH, hH, tH;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const zH = null == yB ? void 0 : yB.defaultView,
              CH = null == zH || null === (HH = zH.Node) || void 0 === HH ? void 0 : HH.prototype;
            if (!zH || !CH) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const EH = [],
              XH = this,
              GH = new WeakSet,
              YH = (HH, BH, LH) => {
                if (!(null == HH ? void 0 : HH[BH])) return;
                const AH = HH[BH];
                HH[BH] = LH(AH), EH.push((() => {
                  HH[BH] = AH
                }))
              },
              uH = HH => {
                if (GH.has(HH)) return HH;
                const BH = XH._prepareElementForSiteApp(HH);
                return BH && GH.add(BH), BH
              },
              QH = HH => HH.map((HH => "string" == typeof HH ? HH : uH(HH))).filter((HH => !kL(HH)));
            return YH(CH, "appendChild", (HH => function(BH) {
              const LH = uH(BH);
              return LH ? HH.call(this, LH) : BH
            })), YH(CH, "insertBefore", (HH => function(BH, LH) {
              const AH = uH(BH);
              return AH ? HH.call(this, AH, LH) : BH
            })), YH(CH, "replaceChild", (HH => function(BH, LH) {
              const AH = uH(BH);
              return AH ? HH.call(this, AH, LH) : LH
            })), [null === (BH = zH.Element) || void 0 === BH ? void 0 : BH.prototype, null === (LH = zH.Document) || void 0 === LH ? void 0 : LH.prototype, null === (AH = zH.DocumentFragment) || void 0 === AH ? void 0 : AH.prototype].forEach((HH => {
              YH(HH, "append", (HH => function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                return HH.apply(this, QH(LH))
              })), YH(HH, "prepend", (HH => function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                return HH.apply(this, QH(LH))
              }))
            })), [null === (rH = zH.Element) || void 0 === rH ? void 0 : rH.prototype, null === (SH = zH.CharacterData) || void 0 === SH ? void 0 : SH.prototype, null === (hH = zH.DocumentType) || void 0 === hH ? void 0 : hH.prototype].forEach((HH => {
              YH(HH, "before", (HH => function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                return HH.apply(this, QH(LH))
              })), YH(HH, "after", (HH => function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                return HH.apply(this, QH(LH))
              })), YH(HH, "replaceWith", (HH => function() {
                for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
                const rH = QH(LH);
                return LH.length && !rH.length ? void 0 : HH.apply(this, rH)
              }))
            })), YH(null === (tH = zH.Element) || void 0 === tH ? void 0 : tH.prototype, "insertAdjacentElement", (HH => function(BH, LH) {
              const AH = uH(LH);
              return AH ? HH.call(this, BH, AH) : null
            })), this._restoreSiteAppElementPatches = () => {
              EH.forEach((HH => HH())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let HH = !1;
            return () => {
              var BH;
              HH || (HH = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (BH = this._restoreSiteAppElementPatches) || void 0 === BH || BH.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(HH) {
            let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const LH = this._patchSiteAppElementInsertionMethods();
            try {
              const AH = HH(LH);
              return BH && LH(), AH
            } catch (HH) {
              throw LH(), HH
            }
          }
          setupSiteApp(HH) {
            const BH = this.apps[HH.id],
              LH = () => {
                var LH;
                !BH.errored && this._bufferedInvocations.length && (xG.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${HH.id}`), this._bufferedInvocations.forEach((HH => this._runWithPreparedSiteAppElements((() => {
                  var LH;
                  return null === (LH = BH.processEvent) || void 0 === LH ? void 0 : LH.call(BH, HH)
                })))), BH.processedBuffer = !0), Object.values(this.apps).every((HH => HH.processedBuffer || HH.errored)) && (null === (LH = this._stopBuffering) || void 0 === LH || LH.call(this))
              };
            let AH = !1;
            const rH = rH => {
              BH.errored = !rH, BH.loaded = !0, xG.info(`Site app with id ${HH.id} ${rH?"loaded":"errored"}`), AH && LH()
            };
            try {
              const {
                processEvent: LH
              } = this._runWithPreparedSiteAppElements((BH => HH.init({
                posthog: this._instance,
                callback(HH) {
                  BH(), rH(HH)
                }
              })), !1);
              LH && (BH.processEvent = LH), AH = !0
            } catch (BH) {
              xG.error(vG + HH.id, BH), rH(!1)
            }
            if (AH && BH.loaded) try {
              LH()
            } catch (LH) {
              xG.error(`Error while processing buffered events PostHog app with config id ${HH.id}`, LH), BH.errored = !0
            }
          }
          _setupSiteApps() {
            const HH = this.siteAppLoaders || [];
            for (const BH of HH) this.apps[BH.id] = {
              id: BH.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const BH of HH) this.setupSiteApp(BH)
          }
          _onCapturedEvent(HH) {
            if (0 === Object.keys(this.apps).length) return;
            const BH = this.globalsForEvent(HH);
            for (const LH of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var HH;
                return null === (HH = LH.processEvent) || void 0 === HH ? void 0 : HH.call(LH, BH)
              }))
            } catch (BH) {
              xG.error(`Error while processing event ${HH.event} for site app ${LH.id}`, BH)
            }
          }
          onRemoteConfig(HH) {
            var BH, LH, AH;
            if (null === (BH = this.siteAppLoaders) || void 0 === BH ? void 0 : BH.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (HH => this._onCapturedEvent(HH)))) : void xG.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (LH = this._stopBuffering) || void 0 === LH || LH.call(this), !HH.ok) return;
            const rH = HH.config;
            if (null === (AH = rH.siteApps) || void 0 === AH ? void 0 : AH.length)
              if (this.isEnabled)
                for (const {
                    id: tH,
                    url: zH
                  }
                  of rH.siteApps) {
                  var SH, hH;
                  tL[`__$$ph_site_app_${tH}`] = this._instance, null === (SH = tL.__PosthogExtensions__) || void 0 === SH || null === (hH = SH.loadSiteApp) || void 0 === hH || hH.call(SH, this._instance, zH, (HH => {
                    if (HH) return xG.error(vG + tH, HH)
                  }))
                } else xG.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      cY = {
        tracingHeaders: class {
          constructor(HH) {
            this._instance = HH, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const HH = this._syncHostnamesForPatch();
              var BH, LH;
              HH ? (VL(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (BH = tL.__PosthogExtensions__) || void 0 === BH || null === (BH = BH.tracingHeadersPatchFns) || void 0 === BH ? void 0 : BH._patchXHR(HH, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), VL(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (LH = LH.tracingHeadersPatchFns) || void 0 === LH ? void 0 : LH._patchFetch(HH, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(HH) {
            var BH, LH, AH;
            (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.tracingHeadersPatchFns) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "tracing-headers", (BH => {
              if (BH) return AG.error("failed to load script", BH);
              HH()
            }))
          }
          _getConfiguredHostnames() {
            var HH, BH;
            return null !== (HH = null !== (BH = this._instance.config.tracing_headers) && void 0 !== BH ? BH : this._instance.config.addTracingHeaders) && void 0 !== HH ? HH : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const HH = this._getConfiguredHostnames();
            return vL(HH) ? (vL(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...HH) : this._hostnamesForPatch = [...HH], HH.length > 0 ? this._hostnamesForPatch : void 0) : (vL(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = HH || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var HH, BH;
            null === (HH = this._restoreXHRPatch) || void 0 === HH || HH.call(this), null === (BH = this._restoreFetchPatch) || void 0 === BH || BH.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      eY = xr({
        surveys: class extends VG {
          constructor(HH) {
            var BH;
            super(new IG(HH), (BH = HH, {
              get projectToken() {
                return BH.config.token
              },
              kv: new oG(BH)
            })), this._instance = HH
          }
          _sendSurveysRequest(HH, BH) {
            const LH = BH.query ? VE(HH, BH.query) : HH;
            return new Promise((HH => {
              var AH;
              this._instance._send_request({
                method: BH.method,
                url: this._instance.requestRouter.endpointFor(null !== (AH = BH.target) && void 0 !== AH ? AH : "api", LH),
                data: BH.body,
                headers: BH.headers,
                timeout: BH.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: BH.transport,
                compression: BH.compression,
                timestampMode: BH.sentAt,
                callback: HH
              })
            }))
          }
        }
      }, mY),
      qY = {
        toolbar: class {
          constructor(HH) {
            this.instance = HH
          }
          _setToolbarState(HH) {
            tL.ph_toolbar_state = HH
          }
          _getToolbarState() {
            var HH;
            return null !== (HH = tL.ph_toolbar_state) && void 0 !== HH ? HH : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var AH, rH;
            if (sh(this.instance.config)) return !1;
            if (!JB || !yB) return !1;
            HH = null !== (AH = HH) && void 0 !== AH ? AH : JB.location, LH = null !== (rH = LH) && void 0 !== rH ? rH : JB.history;
            try {
              if (!BH) {
                try {
                  JB.localStorage.setItem("test", "test"), JB.localStorage.removeItem("test")
                } catch (HH) {
                  return !1
                }
                BH = null == JB ? void 0 : JB.localStorage
              }
              const AH = fG || nz(HH.hash, "__posthog") || nz(HH.hash, "state");
              let rH;
              const SH = AH ? Xr((() => JSON.parse(atob(decodeURIComponent(AH))))) || Xr((() => JSON.parse(decodeURIComponent(AH)))) : null;
              return SH && "ph_authorize" === SH.action ? (rH = SH, rH.source = "url", rH && Object.keys(rH).length > 0 && (SH.desiredHash ? HH.hash = SH.desiredHash : LH ? LH.replaceState(LH.state, "", HH.pathname + HH.search) : HH.hash = "")) : (rH = JSON.parse(BH.getItem(lG) || "{}"), rH.source = "localstorage", delete rH.userIntent), !(!rH.token || this.instance.config.token !== rH.token || (this.loadToolbar(rH), 0))
            } catch (HH) {
              return !1
            }
          }
          _callLoadToolbar(HH) {
            const BH = tL.ph_load_toolbar || tL.ph_load_editor;
            !mL(BH) && PL(BH) ? BH(HH, this.instance) : KG.warn("No toolbar load function found")
          }
          loadToolbar(HH) {
            const BH = !!(null == yB ? void 0 : yB.getElementById("__POSTHOG_TOOLBAR__"));
            if (!JB || BH) return !1;
            const LH = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              AH = xr(xr({
                token: this.instance.config.token
              }, HH), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, LH ? {
                instrument: !1
              } : {});
            if (JB.localStorage.setItem(lG, JSON.stringify(xr(xr({}, AH), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(AH);
            else if (0 === this._getToolbarState()) {
              var rH, SH;
              this._setToolbarState(1), null === (rH = tL.__PosthogExtensions__) || void 0 === rH || null === (SH = rH.loadExternalDependency) || void 0 === SH || SH.call(rH, this.instance, "toolbar", (HH => {
                if (HH) return KG.error("[Toolbar] Failed to load", HH), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(AH)
              })), ah(JB, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(AH)
              }))
            }
            return !0
          }
          _loadEditor(HH) {
            return this.loadToolbar(HH)
          }
          maybeLoadEditor() {
            let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(HH, BH, LH)
          }
        }
      },
      gY = xr({
        experiments: class HH {
          get _config() {
            return this._instance.config
          }
          constructor(BH) {
            var LH = this;
            this._instance = BH, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              LH.getWebExperiments((BH => {
                HH._logInfo("retrieved web experiments from the server"), LH._flagToExperiments = new Map, BH.forEach((BH => {
                  if (BH.feature_flag_key) {
                    var AH;
                    LH._flagToExperiments && (HH._logInfo("setting flag key ", BH.feature_flag_key, " to web experiment ", BH), null === (AH = LH._flagToExperiments) || void 0 === AH || AH.set(BH.feature_flag_key, BH));
                    const rH = LH._instance.getFeatureFlag(BH.feature_flag_key);
                    OL(rH) && BH.variants[rH] && LH._applyTransforms(BH.name, rH, BH.variants[rH].transforms)
                  } else if (BH.variants)
                    for (const rH in BH.variants) {
                      const AH = BH.variants[rH];
                      HH._matchesTestVariant(AH, LH._instance) && LH._applyTransforms(BH.name, rH, AH.transforms)
                    }
                }))
              }), BH)
            }, this._instance.onFeatureFlags((HH => {
              this.onFeatureFlags(HH)
            }))
          }
          initialize() {}
          onFeatureFlags(BH) {
            if (this._is_bot()) HH._logInfo(pG);
            else if (!this._config.disable_web_experiments) {
              if (mL(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              HH._logInfo("applying feature flags", BH), BH.forEach((HH => {
                var BH;
                if (this._flagToExperiments && (null === (BH = this._flagToExperiments) || void 0 === BH ? void 0 : BH.has(HH))) {
                  var LH;
                  const BH = this._instance.getFeatureFlag(HH),
                    AH = null === (LH = this._flagToExperiments) || void 0 === LH ? void 0 : LH.get(HH);
                  BH && (null == AH ? void 0 : AH.variants[BH]) && this._applyTransforms(AH.name, BH, AH.variants[BH].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const BH = HH.getWindowLocation();
            if (null == BH ? void 0 : BH.search) {
              const LH = Rz(null == BH ? void 0 : BH.search, "__experiment_id"),
                AH = Rz(null == BH ? void 0 : BH.search, "__experiment_variant");
              LH && AH && (HH._logInfo(`previewing web experiments ${LH} && ${AH}`), this.getWebExperiments((HH => {
                this._showPreviewWebExperiment(parseInt(LH), AH, HH)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(HH, BH, LH) {
            if (this._config.disable_web_experiments && !LH) return HH([]);
            const AH = this._instance.get_property("$web_experiments");
            if (AH && !BH) return HH(AH);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: BH => HH(200 === BH.statusCode && BH.json && BH.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(BH, LH, AH) {
            const rH = AH.filter((HH => HH.id === BH));
            rH && rH.length > 0 && (HH._logInfo(`Previewing web experiment [${rH[0].name}] with variant [${LH}]`), this._applyTransforms(rH[0].name, LH, rH[0].variants[LH].transforms))
          }
          static _matchesTestVariant(BH, LH) {
            return !mL(BH.conditions) && HH._matchUrlConditions(BH, LH) && HH._matchUTMConditions(BH)
          }
          static _matchUrlConditions(BH, LH) {
            var AH;
            if (mL(BH.conditions) || mL(null === (AH = BH.conditions) || void 0 === AH ? void 0 : AH.url)) return !0;
            const rH = HH.getWindowLocation();
            if (rH) {
              var SH, hH, tH;
              const HH = bt(LH, rH.href);
              return !(null === (SH = BH.conditions) || void 0 === SH ? void 0 : SH.url) || yG[null !== (hH = null === (tH = BH.conditions) || void 0 === tH ? void 0 : tH.urlMatchType) && void 0 !== hH ? hH : "icontains"](BH.conditions.url, HH)
            }
            return !1
          }
          static getWindowLocation() {
            return null == JB ? void 0 : JB.location
          }
          static _matchUTMConditions(HH) {
            var BH;
            if (mL(HH.conditions) || mL(null === (BH = HH.conditions) || void 0 === BH ? void 0 : BH.utm)) return !0;
            const LH = dz();
            if (LH.utm_source) {
              var AH, rH, SH, hH, tH, zH, CH, EH;
              const BH = !(null === (AH = HH.conditions) || void 0 === AH || null === (AH = AH.utm) || void 0 === AH ? void 0 : AH.utm_campaign) || (null === (rH = HH.conditions) || void 0 === rH || null === (rH = rH.utm) || void 0 === rH ? void 0 : rH.utm_campaign) == LH.utm_campaign,
                XH = !(null === (SH = HH.conditions) || void 0 === SH || null === (SH = SH.utm) || void 0 === SH ? void 0 : SH.utm_source) || (null === (hH = HH.conditions) || void 0 === hH || null === (hH = hH.utm) || void 0 === hH ? void 0 : hH.utm_source) == LH.utm_source,
                GH = !(null === (tH = HH.conditions) || void 0 === tH || null === (tH = tH.utm) || void 0 === tH ? void 0 : tH.utm_medium) || (null === (zH = HH.conditions) || void 0 === zH || null === (zH = zH.utm) || void 0 === zH ? void 0 : zH.utm_medium) == LH.utm_medium,
                YH = !(null === (CH = HH.conditions) || void 0 === CH || null === (CH = CH.utm) || void 0 === CH ? void 0 : CH.utm_term) || (null === (EH = HH.conditions) || void 0 === EH || null === (EH = EH.utm) || void 0 === EH ? void 0 : EH.utm_term) == LH.utm_term;
              return BH && GH && YH && XH
            }
            return !1
          }
          static _logInfo(HH) {
            for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
            qh.info(`[WebExperiments] ${HH}`, LH)
          }
          _applyTransforms(BH, LH, AH) {
            this._is_bot() ? HH._logInfo(pG) : "control" !== LH ? AH.forEach((AH => {
              if (AH.selector) {
                var rH;
                HH._logInfo(`applying transform of variant ${LH} for experiment ${BH} `, AH);
                const SH = null === (rH = document) || void 0 === rH ? void 0 : rH.querySelectorAll(AH.selector);
                null == SH || SH.forEach((HH => {
                  const BH = HH;
                  AH.html && (BH.innerHTML = AH.html), AH.css && BH.setAttribute("style", AH.css)
                }))
              }
            })) : HH._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return pB && this._instance ? JE(pB, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, mY),
      NY = {
        conversations: class {
          constructor(HH) {
            this._instance = HH, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(HH) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = HH.ok, !HH.ok) return;
            const BH = HH.config.conversations;
            mL(BH) || (fL(BH) ? this._isConversationsEnabled = BH : (this._isConversationsEnabled = BH.enabled, this._remoteConfig = BH), this.loadIfEnabled())
          }
          reset() {
            var HH;
            null === (HH = this._conversationsManager) || void 0 === HH || HH.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (sh(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const HH = null == tL ? void 0 : tL.__PosthogExtensions__;
            if (HH && !VL(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const BH = HH.initConversations;
                  if (BH) return this._completeInitialization(BH), void(this._isInitializing = !1);
                  const LH = HH.loadExternalDependency;
                  if (!LH) return void this._handleLoadError(jB);
                  LH(this._instance, "conversations", (BH => {
                    BH || !HH.initConversations ? this._handleLoadError("Could not load conversations script", BH) : this._completeInitialization(HH.initConversations), this._isInitializing = !1
                  }))
                } catch (HH) {
                  this._handleLoadError("Error initializing conversations", HH), this._isInitializing = !1
                }
              } else HY.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(HH) {
            if (this._remoteConfig) try {
              this._conversationsManager = HH(this._remoteConfig, this._instance), this._loadFailed = !1, HY.info("Conversations loaded successfully")
            } catch (HH) {
              this._handleLoadError("Error completing conversations initialization", HH)
            } else HY.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(HH, BH) {
            HY.error(HH, BH), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : HY.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !kL(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : sh(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : VL(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? mL(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == tL ? void 0 : tL.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var HH, BH;
            return null !== (HH = null === (BH = this._conversationsManager) || void 0 === BH ? void 0 : BH.isVisible()) && void 0 !== HH && HH
          }
          sendMessage(HH, BH, LH) {
            var AH = this;
            return DL((function*() {
              return AH._conversationsManager ? AH._conversationsManager.sendMessage(HH, BH, LH) : (HY.warn(BY), null)
            }))()
          }
          getMessages(HH, BH) {
            var LH = this;
            return DL((function*() {
              return LH._conversationsManager ? LH._conversationsManager.getMessages(HH, BH) : (HY.warn(BY), null)
            }))()
          }
          markAsRead(HH) {
            var BH = this;
            return DL((function*() {
              return BH._conversationsManager ? BH._conversationsManager.markAsRead(HH) : (HY.warn(BY), null)
            }))()
          }
          getTickets(HH) {
            var BH = this;
            return DL((function*() {
              return BH._conversationsManager ? BH._conversationsManager.getTickets(HH) : (HY.warn(BY), null)
            }))()
          }
          requestRestoreLink(HH) {
            var BH = this;
            return DL((function*() {
              return BH._conversationsManager ? BH._conversationsManager.requestRestoreLink(HH) : (HY.warn(BY), null)
            }))()
          }
          restoreFromToken(HH) {
            var BH = this;
            return DL((function*() {
              return BH._conversationsManager ? BH._conversationsManager.restoreFromToken(HH) : (HY.warn(BY), null)
            }))()
          }
          restoreFromUrlToken() {
            var HH = this;
            return DL((function*() {
              return HH._conversationsManager ? HH._conversationsManager.restoreFromUrlToken() : (HY.warn(BY), null)
            }))()
          }
          getCurrentTicketId() {
            var HH, BH;
            return null !== (HH = null === (BH = this._conversationsManager) || void 0 === BH ? void 0 : BH.getCurrentTicketId()) && void 0 !== HH ? HH : null
          }
          getWidgetSessionId() {
            var HH, BH;
            return null !== (HH = null === (BH = this._conversationsManager) || void 0 === BH ? void 0 : BH.getWidgetSessionId()) && void 0 !== HH ? HH : null
          }
          _onIdentityChanged() {
            var HH;
            null === (HH = this._conversationsManager) || void 0 === HH || HH.setIdentity()
          }
          _onIdentityCleared() {
            var HH;
            null === (HH = this._conversationsManager) || void 0 === HH || HH.clearIdentity()
          }
        }
      },
      RY = {
        logs: class extends CY {
          constructor(HH) {
            super({
              get() {
                var BH;
                return null == HH || null === (BH = HH.config) || void 0 === BH ? void 0 : BH.logs
              },
              captureHintKey: FH,
              get remoteConfigWillArrive() {
                var BH, LH;
                return !(null === (BH = HH._shouldDisableFlags) || void 0 === BH ? void 0 : BH.call(HH)) || !!(null === (LH = tL._POSTHOG_REMOTE_CONFIG) || void 0 === LH || null === (LH = LH[HH.config.token]) || void 0 === LH ? void 0 : LH.config)
              }
            }, (() => function(HH) {
              var BH;
              const LH = {};
              if (LH.distinctId = HH.get_distinct_id(), HH.sessionManager) {
                const {
                  sessionId: BH,
                  windowId: AH,
                  sessionStartTimestamp: rH,
                  lastActivityTimestamp: SH
                } = HH.sessionManager.checkAndGetSessionAndWindowId(!0);
                LH.sessionId = BH, LH.windowId = AH, mL(rH) || (LH.sessionStartTimestamp = rH), mL(SH) || (LH.lastActivityTimestamp = SH)
              }
              if ((null == tL || null === (BH = tL.location) || void 0 === BH ? void 0 : BH.href) && (LH.currentUrl = HH.config.disable_capture_url_hashes ? Er(tL.location.href) : tL.location.href), HH.featureFlags) {
                const BH = HH.featureFlags.getFlags();
                BH && BH.length > 0 && (LH.activeFeatureFlags = BH)
              }
              return LH
            }(HH))), this._instance = HH, this.name = vX, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const HH = gh("[logs]"),
              BH = null == tL ? void 0 : tL.__PosthogExtensions__;
            if (!BH) return void HH.error("PostHog Extensions not found.");
            const LH = BH.loadExternalDependency;
            if (LH) return HH => {
              LH(this._instance, "logs", (LH => {
                const AH = BH.logs;
                HH(LH, (null == AH ? void 0 : AH.initializeLogs) ? {
                  initialize: HH => AH.initializeLogs(HH),
                  replay(HH, BH) {
                    var LH;
                    return null === (LH = AH.replayConsoleBuffer) || void 0 === LH ? void 0 : LH.call(AH, HH, BH)
                  }
                } : void 0)
              }))
            };
            HH.error(jB)
          }
        }
      },
      jY = {
        metrics: class {
          constructor(HH) {
            this._instance = HH, this._logger = gh("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var HH;
            if (this._disposed) return;
            const BH = !!(null === (HH = this._instance.config.metrics) || void 0 === HH ? void 0 : HH.network);
            BH && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (HH => {
              let BH = !0;
              const LH = () => BH ? (HH => {
                  var BH;
                  const LH = null === (BH = HH.config.metrics) || void 0 === BH ? void 0 : BH.network;
                  return !0 === LH ? {} : LH || void 0
                })(HH) : void 0,
                AH = MY(HH, LH),
                rH = xY(HH, LH);
              return () => {
                BH = !1, AH(), rH()
              }
            })(this._instance) : !BH && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var HH;
            const BH = null === (HH = this._instance) || void 0 === HH || null === (HH = HH.config) || void 0 === HH ? void 0 : HH.metrics;
            var LH;
            return this._core && this._resolvedFrom === BH || (null === (LH = this._core) || void 0 === LH || LH.reset(), this._resolvedFrom = BH, this._core = new ch(this._createHost(), function(HH) {
              var BH, LH, AH, rH, SH;
              const hH = null == HH ? void 0 : HH.resourceAttributes;
              return {
                serviceName: null !== (BH = null == hH ? void 0 : hH["service.name"]) && void 0 !== BH ? BH : null == HH ? void 0 : HH.serviceName,
                serviceVersion: null !== (LH = null == hH ? void 0 : hH["service.version"]) && void 0 !== LH ? LH : null == HH ? void 0 : HH.serviceVersion,
                environment: null !== (AH = null == hH ? void 0 : hH["deployment.environment"]) && void 0 !== AH ? AH : null == HH ? void 0 : HH.environment,
                resourceAttributes: hH,
                beforeSend: null == HH ? void 0 : HH.beforeSend,
                flushIntervalMs: null !== (rH = null == HH ? void 0 : HH.flushIntervalMs) && void 0 !== rH ? rH : 1e4,
                maxSeriesPerFlush: null !== (SH = null == HH ? void 0 : HH.maxSeriesPerFlush) && void 0 !== SH ? SH : 1e3
              }
            }(BH), this._logger)), this._core
          }
          count(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              LH = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(HH, BH, LH)
          }
          gauge(HH, BH, LH) {
            this._getCore().gauge(HH, BH, LH)
          }
          histogram(HH, BH, LH) {
            this._getCore().histogram(HH, BH, LH)
          }
          flush(HH) {
            if (!this._core) return Promise.resolve();
            if (HH) {
              const BH = this._core.drainWindow();
              return BH && this._sendMetricsBatch(BH, HH), Promise.resolve()
            }
            return this._core.flush().catch((HH => this._logger.error("PostHog metrics flush failed:", HH)))
          }
          reset() {
            var HH;
            null === (HH = this._core) || void 0 === HH || HH.reset()
          }
          dispose() {
            var HH, BH;
            this._disposed = !0, null === (HH = this._stopNetworkMetrics) || void 0 === HH || HH.call(this), this._stopNetworkMetrics = void 0, null === (BH = this._core) || void 0 === BH || BH.reset()
          }
          _createHost() {
            const HH = this._instance,
              BH = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !HH.is_capturing()
              },
              _sendMetricsBatch: HH => BH._sendMetricsBatch(HH),
              getLibraryId: () => SH.LIB_NAME,
              getLibraryVersion: () => SH.LIB_VERSION
            }
          }
          _sendMetricsBatch(HH, BH) {
            return new Promise((LH => {
              let AH = !1;
              const rH = HH => {
                  AH || (AH = !0, clearTimeout(SH), LH(HH))
                },
                SH = setTimeout((() => rH({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(xr(xr({
                method: "POST",
                url: this._metricsUrl(),
                data: HH,
                compression: "best-available",
                batchKey: "metrics"
              }, BH && {
                transport: BH
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(HH) {
                  const BH = HH.statusCode;
                  if (BH >= 200 && 300 > BH) rH({
                    kind: "ok"
                  });
                  else if (413 === BH) rH({
                    kind: "too-large"
                  });
                  else if (0 !== BH && 408 !== BH && 429 !== BH && 500 > BH) rH({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${BH}`)
                  });
                  else {
                    var LH;
                    rH({
                      kind: "retry-later",
                      error: null !== (LH = HH.error) && void 0 !== LH ? LH : new Error(`metrics request failed with status ${BH}`)
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
      nY = {
        webMCP: class {
          constructor(HH) {
            this._instance = HH, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const HH = null == yB ? void 0 : yB.modelContext;
            if (!HH || !PL(HH.registerTool)) return;
            const BH = vY.get(HH);
            if (BH) return BH.instances.add(this._instance), void(this._isPatched = !0);
            const LH = {
                instances: new Set([this._instance])
              },
              AH = HH.registerTool,
              rH = this;
            LG(HH, "registerTool", (HH => {
              const BH = HH;
              return function(HH) {
                let AH = HH;
                for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
                try {
                  AH = rH._wrapTool(HH, LH)
                } catch (LH) {
                  return BH.call(this, HH, ...hH)
                }
                return BH.call(this, AH, ...hH)
              }
            })), HH.registerTool !== AH && (vY.set(HH, LH), this._isPatched = !0)
          }
          _wrapTool(HH, BH) {
            if (!HH || !PL(HH.execute)) return HH;
            const LH = HH.execute,
              AH = this,
              {
                tool: rH,
                injected: SH
              } = function(HH, BH) {
                const LH = {
                    intent: !1,
                    model: !1
                  },
                  AH = HH.inputSchema;
                if (! function(HH) {
                    return !!VL(HH) || TL(HH) && Object.keys(HH).every((HH => PY.has(HH) || HH.startsWith("x-"))) && !0 !== HH.additionalProperties && !TL(HH.additionalProperties) && (!HH.type || "object" === HH.type) && (!HH.properties || TL(HH.properties)) && (!HH.required || vL(HH.required))
                  }(AH)) return {
                  tool: OY(HH),
                  injected: LH
                };
                const rH = (null == AH ? void 0 : AH.properties) || {},
                  SH = HH => VY(rH, HH) || vL(null == AH ? void 0 : AH.required) && AH.required.includes(HH);
                if (LH.intent = BH.intent && !SH("context"), LH.model = BH.model && !SH("llm_model"), !LH.intent && !LH.model) return {
                  tool: OY(HH),
                  injected: LH
                };
                const hH = xr({}, rH),
                  tH = vL(null == AH ? void 0 : AH.required) ? [...AH.required] : [];
                return LH.intent && (hH.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, tH.includes("context") || tH.push("context")), LH.model && (hH.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, tH.includes("llm_model") || tH.push("llm_model")), {
                  tool: OY(HH, xr(xr({}, AH), {}, {
                    type: (null == AH ? void 0 : AH.type) || "object",
                    properties: hH,
                    required: tH
                  })),
                  injected: LH
                }
              }(HH, function(HH) {
                const BH = {
                  intent: !1,
                  model: !1
                };
                for (const LH of HH.instances) {
                  const HH = UY(LH.config.capture_webmcp);
                  BH.intent || (BH.intent = !0 === (null == HH ? void 0 : HH.intent)), BH.model || (BH.model = !0 === (null == HH ? void 0 : HH.model))
                }
                return BH
              }(BH));
            return Object.defineProperty(rH, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var hH = arguments.length, tH = new Array(hH), zH = 0; zH < hH; zH++) tH[zH] = arguments[zH];
                const CH = new Date,
                  EH = function(HH, BH) {
                    if (!TL(HH)) return {};
                    try {
                      const LH = BH.intent ? bY(HH.context, 2048, !0) : void 0,
                        AH = BH.model ? bY(HH.llm_model, 256) : void 0;
                      return xr(xr({}, LH && "{}" !== LH ? {
                        intent: LH
                      } : {}), AH && "unknown" !== AH.toLowerCase() ? {
                        model: AH
                      } : {})
                    } catch (HH) {
                      return {}
                    }
                  }(tH[0], SH),
                  XH = function(HH, BH) {
                    const LH = HH[0];
                    if (!TL(LH)) return HH;
                    try {
                      const AH = BH.intent && VY(LH, "context"),
                        rH = BH.model && VY(LH, "llm_model");
                      if (!AH && !rH) return HH;
                      const SH = xr({}, LH);
                      return AH && delete SH.context, rH && delete SH.llm_model, [SH, ...HH.slice(1)]
                    } catch (BH) {
                      return HH
                    }
                  }(tH, SH);
                let GH;
                try {
                  GH = LH.apply(this === rH ? HH : this, XH)
                } catch (HH) {
                  throw AH._captureToolCall(BH, rH, CH, !0, EH), HH
                }
                return (YH = GH) && "function" == typeof YH.then ? Promise.resolve(GH).then((HH => (AH._captureToolCall(BH, rH, CH, kY(HH), EH), HH)), (HH => {
                  throw AH._captureToolCall(BH, rH, CH, !0, EH), HH
                })) : (AH._captureToolCall(BH, rH, CH, kY(GH), EH), GH);
                var YH
              }
            }), rH
          }
          _captureToolCall(HH, BH, LH, AH, rH) {
            const SH = Date.now() - LH.getTime();
            for (const hH of HH.instances) {
              const tH = UY(hH.config.capture_webmcp);
              if (tH) try {
                hH.capture("$mcp_tool_call", xr(xr({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: BH.name,
                  $mcp_resource_name: BH.name,
                  $mcp_tool_description: BH.description,
                  $mcp_server_name: null == HL ? void 0 : HL.hostname,
                  $mcp_duration_ms: SH,
                  $mcp_is_error: AH
                }, tH.intent && rH.intent ? {
                  $mcp_intent: rH.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), tH.model && rH.model ? {
                  $mcp_llm_model: rH.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: LH
                })
              } catch (HH) {
                continue
              }
            }
          }
        }
      };
    wX.__defaultExtensionClasses = xr({}, xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr({}, mY), oY), IY), fY), lY), KY), eY), cY), qY), gY), NY), RY), jY), nY));
    const FY = function() {
      SH.SDK_DIST_CHANNEL = "npm";
      const HH = VX[NX] = new wX;
      return function() {
        function HH() {
          HH.done || (HH.done = !0, gE = !1, Rh(VX, (function(HH) {
            HH._dom_loaded()
          })))
        }(null == yB ? void 0 : yB.addEventListener) ? "complete" === yB.readyState ? HH() : ah(yB, "DOMContentLoaded", HH, {
          capture: !1
        }): JB && qh.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), HH
    }()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);