export const id = 277;
export const ids = [277];
export const modules = {
  40653: (ee, ie, He) => {
    He.d(ie, {
      c: () => XJ,
      e: () => sq
    });
    const ye = "0.9.4",
      be = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: ye
      };
    var Me = be;
    const Ke = "$early_access_features",
      Ue = "$active_feature_flags",
      Fe = "$feature_flag_details",
      Je = "$feature_flag_errors",
      oe = "$feature_flag_evaluated_at",
      Re = "$feature_flag_request_id",
      ke = "$minimal_flag_called_events",
      qe = "$enabled_feature_flags",
      fe = "$stored_group_properties",
      Te = "$stored_person_properties",
      pe = "$flag_call_reported",
      Xe = "$flag_call_reported_session_id",
      ze = "$feature_flag_payloads",
      Be = "$override_feature_flags",
      Ee = "$override_feature_flag_payloads",
      ge = "visibilitychange",
      Oe = "$people_distinct_id",
      de = "distinct_id",
      We = "$device_id",
      te = "$device_model",
      Ze = "__alias",
      we = "__cmpns",
      De = "$fbc",
      Pe = "$fbc_persistence",
      Ae = "$fbp",
      Ye = "$fbp_persistence",
      Ve = "__timers",
      ae = "$autocapture_disabled_server_side",
      ce = "$heatmaps_enabled_server_side",
      xe = "$exception_capture_enabled_server_side",
      Le = "$error_tracking_suppression_rules",
      Ce = "$error_tracking_capture_extension_exceptions",
      ve = "$web_vitals_enabled_server_side",
      ue = "$dead_clicks_enabled_server_side",
      me = "$product_tours_enabled_server_side",
      le = "$logs_capture_enabled_server_side",
      Se = "$web_vitals_allowed_metrics",
      ne = "$session_recording_remote_config",
      je = "$session_recording_enabled_server_side",
      se = "$replay_sample_rate",
      Ie = "$replay_override_sampling",
      he = "$replay_override_linked_flag",
      Ne = "$replay_override_url_trigger",
      Ge = "$replay_override_event_trigger",
      re = "$sesid",
      Qe = "$session_is_sampled",
      ei = "$session_past_minimum_duration",
      ii = "$session_recording_url_trigger_activated_session",
      Hi = "$session_recording_event_trigger_activated_session",
      yi = "$debug_first_full_snapshot_timestamp",
      bi = "$sess_rec_flush_size",
      Mi = "$groups",
      Ki = "$surveys",
      Ui = "$surveys_loaded_at",
      Fi = "$surveys_activated",
      Ji = "$surveys_activated_session",
      oi = "$surveys_activated_timestamps",
      Ri = "ph_product_tours",
      ki = "$product_tours_activated",
      qi = "$product_tours_activated_session",
      fi = "$conversations_widget_session_id",
      Ti = "$conversations_ticket_id",
      Xi = "$conversations_widget_state",
      zi = "$conversations_user_traits",
      Bi = "$user_state",
      Ei = "$client_session_props",
      gi = "$capture_rate_limit",
      Oi = "$initial_campaign_params",
      di = "$initial_referrer_info",
      Wi = "$initial_person_info",
      ti = "$epp",
      Zi = "$posthog_cookieless",
      wi = "$cookieless_mode",
      Di = "$sdk_debug_extensions_init_method",
      Pi = "$sdk_debug_extensions_init_time_ms",
      Ai = "$sdk_debug_recording_script_not_loaded",
      Yi = "$sdk_debug_replay_stale_config",
      Vi = "$sdk_debug_replay_event_trigger_status",
      ai = "$sdk_debug_replay_linked_flag_trigger_status",
      ci = "$sdk_debug_replay_matched_recording_trigger_groups",
      xi = "$sdk_debug_replay_pending_trigger_conditions",
      Li = "$sdk_debug_replay_remote_trigger_matching_config",
      Ci = "$sdk_debug_replay_trigger_groups_count",
      vi = "$sdk_debug_replay_url_trigger_status",
      ui = "$session_recording_start_reason",
      mi = "PostHog loadExternalDependency extension not found.",
      li = "anonymous",
      Si = "identified",
      ni = "identified_only",
      ji = "beforeunload",
      si = "$pageview",
      Ii = "$pageleave",
      Ni = "$identify",
      Gi = "$groupidentify",
      ri = "u" > typeof window ? window : void 0,
      Qi = "u" > typeof globalThis ? globalThis : ri,
      eH = null == Qi ? void 0 : Qi.navigator,
      iH = null == Qi ? void 0 : Qi.document,
      HH = null == Qi ? void 0 : Qi.location,
      yH = null == Qi ? void 0 : Qi.fetch,
      bH = (null == Qi ? void 0 : Qi.XMLHttpRequest) && "withCredentials" in new Qi.XMLHttpRequest ? Qi.XMLHttpRequest : void 0,
      MH = null == Qi ? void 0 : Qi.AbortController,
      KH = null == Qi ? void 0 : Qi.CompressionStream,
      UH = null == eH ? void 0 : eH.userAgent,
      FH = "undefined" != typeof globalThis ? globalThis : ri;
    FH && "undefined" == typeof self && (FH.self = FH), FH && "undefined" == typeof File && (FH.File = function() {});
    const JH = null != ri ? ri : {};
    var oH = function(ee) {
        return ee.AnonymousId = "anonymous_id", ee.DistinctId = "distinct_id", ee.Props = "props", ee.EnablePersonProcessing = "enable_person_processing", ee.PersonMode = "person_mode", ee.FeatureFlagDetails = "feature_flag_details", ee.FeatureFlags = "feature_flags", ee.FeatureFlagPayloads = "feature_flag_payloads", ee.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", ee.BootstrapFeatureFlags = "bootstrap_feature_flags", ee.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", ee.OverrideFeatureFlags = "override_feature_flags", ee.Queue = "queue", ee.AiQueue = "ai_queue", ee.AiCaptureQueue = "ai_capture_queue", ee.LogsQueue = "logs_queue", ee.OptedOut = "opted_out", ee.SessionId = "session_id", ee.SessionStartTimestamp = "session_start_timestamp", ee.SessionLastTimestamp = "session_timestamp", ee.PersonProperties = "person_properties", ee.GroupProperties = "group_properties", ee.InstalledAppBuild = "installed_app_build", ee.InstalledAppVersion = "installed_app_version", ee.SessionReplay = "session_replay", ee.PushRegistered = "push_registered", ee.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", ee.SurveyLastSeenDate = "survey_last_seen_date", ee.SurveysInProgress = "surveys_in_progress", ee.SurveysSeen = "surveys_seen", ee.Surveys = "surveys", ee.RemoteConfig = "remote_config", ee.FlagsEndpointWasHit = "flags_endpoint_was_hit", ee.DeviceId = "device_id", ee
      }({}),
      RH = function(ee) {
        return ee.GZipJS = "gzip-js", ee.Base64 = "base64", ee
      }({});
    const kH = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      qH = ["token"];

    function fH(ee, ie) {
      return -1 !== ee.indexOf(ie)
    }
    const TH = function(ee) {
        return ee.trim()
      },
      pH = function(ee) {
        return ee.replace(/^\$/, "")
      };

    function XH(ee) {
      var ie;
      const He = [];
      return null !== (ie = JSON.stringify(ee, (function(ee, ie) {
        if ("bigint" == typeof ie) return ie.toString();
        if ("function" != typeof ie && "symbol" != typeof ie) {
          if (ie instanceof Error) return {
            name: ie.name,
            message: ie.message,
            stack: ie.stack
          };
          if (ie && "object" == typeof ie) {
            for (; He.length > 0 && He[He.length - 1] !== this;) He.pop();
            if (He.includes(ie)) return "[Circular]";
            He.push(ie)
          }
          return ie
        }
      }))) && void 0 !== ie ? ie : "null"
    }
    const zH = Object.prototype,
      BH = zH.hasOwnProperty,
      EH = zH.toString,
      gH = Array.isArray || function(ee) {
        return "[object Array]" === EH.call(ee)
      },
      OH = ee => "function" == typeof ee,
      dH = ee => ee === Object(ee) && !gH(ee),
      WH = ee => {
        if (dH(ee)) {
          for (const ie in ee)
            if (BH.call(ee, ie)) return !1;
          return !0
        }
        return !1
      },
      tH = ee => void 0 === ee,
      ZH = ee => "[object String]" == EH.call(ee),
      wH = ee => ZH(ee) && 0 === ee.trim().length,
      DH = ee => null === ee,
      PH = ee => tH(ee) || DH(ee),
      AH = ee => "[object Number]" == EH.call(ee) && ee == ee,
      YH = ee => AH(ee) && ee > 0,
      VH = ee => "[object Boolean]" === EH.call(ee),
      aH = ee => fH(kH, ee),
      cH = ee => fH(qH, ee);

    function xH(ee) {
      return null === ee || "object" != typeof ee
    }

    function LH(ee, ie) {
      return {}.toString.call(ee) === `[object ${ie}]`
    }

    function CH(ee) {
      switch ({}.toString.call(ee)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return uH(ee, Error)
      }
    }

    function vH(ee) {
      return "u" > typeof Event && uH(ee, Event)
    }

    function uH(ee, ie) {
      try {
        return ee instanceof ie
      } catch (ee) {
        return !1
      }
    }
    const mH = [!0, "true", 1, "1", "yes"],
      lH = ee => fH(mH, ee),
      SH = [!1, "false", 0, "0", "no"];

    function nH(ee, ie, He, ye, be, Me, Ke) {
      try {
        var Ue = ee[Me](Ke),
          Fe = Ue.value
      } catch (ee) {
        return void He(ee)
      }
      Ue.done ? ie(Fe) : Promise.resolve(Fe).then(ye, be)
    }

    function jH(ee) {
      return function() {
        var ie = this,
          He = arguments;
        return new Promise((function(ye, be) {
          var Me = ee.apply(ie, He);

          function Ke(ee) {
            nH(Me, ye, be, Ke, Ue, "next", ee)
          }

          function Ue(ee) {
            nH(Me, ye, be, Ke, Ue, "throw", ee)
          }
          Ke(void 0)
        }))
      }
    }
    const sH = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      IH = new Map,
      hH = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!ee) return !1;
        const He = function(ee, ie) {
            let He = "";
            for (let ye = 0; ie.length > ye; ye++) {
              const ee = ie[ye];
              He += ee.length + ":" + ee
            }
            return ee.length + ":" + ee + "|" + ie.length + ":" + He
          }(ee, ie),
          ye = IH.get(He);
        if (void 0 !== ye) return ye;
        const be = ee.toLowerCase(),
          Me = sH.concat(ie).some((ee => -1 !== be.indexOf(ee.toLowerCase())));
        return 256 > IH.size || IH.clear(), IH.set(He, Me), Me
      };

    function NH(ee, ie, He, ye, be) {
      return ie > He && (ye.warn("min cannot be greater than max."), ie = He), AH(ee) ? ee > He ? (ye.warn(" cannot be  greater than max: " + He + ". Using max value instead."), He) : ie > ee ? (ye.warn(" cannot be less than min: " + ie + ". Using min value instead."), ie) : ee : (ye.warn(" must be a number. using max or fallback. max: " + He + ", fallback: " + be), NH(null != be ? be : He, ie, He, ye))
    }
    var GH = class {
      constructor(ee) {
        this._buckets = {}, this._onBucketRateLimited = ee._onBucketRateLimited, this._bucketSize = NH(ee.bucketSize, 0, 100, ee._logger), this._refillRate = NH(ee.refillRate, 0, this._bucketSize, ee._logger), this._refillInterval = NH(ee.refillInterval, 0, 864e5, ee._logger)
      }
      _applyRefill(ee, ie) {
        const He = Math.floor((ie - ee.lastAccess) / this._refillInterval);
        He > 0 && (ee.tokens = Math.min(ee.tokens + He * this._refillRate, this._bucketSize), ee.lastAccess = ee.lastAccess + He * this._refillInterval)
      }
      consumeRateLimit(ee) {
        var ie;
        const He = Date.now(),
          ye = String(ee);
        let be = this._buckets[ye];
        return be ? this._applyRefill(be, He) : (be = {
          tokens: this._bucketSize,
          lastAccess: He
        }, this._buckets[ye] = be), 0 === be.tokens || (be.tokens--, 0 === be.tokens && (null === (ie = this._onBucketRateLimited) || void 0 === ie || ie.call(this, ee)), 0 === be.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const rH = "Mobile",
      QH = "Android",
      ey = "Tablet",
      iy = "Android Tablet",
      Hy = "iPad",
      yy = "Apple Watch",
      by = "Safari",
      My = "BlackBerry",
      Ky = "Samsung Internet",
      Uy = "Chrome",
      Fy = "Chrome iOS",
      Jy = "Internet Explorer",
      oy = "Internet Explorer Mobile",
      Ry = "Opera",
      ky = "Microsoft Edge",
      qy = "Firefox",
      fy = "Firefox iOS",
      Ty = "Nintendo",
      py = "PlayStation",
      Xy = "Xbox",
      zy = "Android Mobile",
      By = "Mobile Safari",
      Ey = "Windows",
      gy = "Windows Phone",
      Oy = "Nokia",
      dy = "Ouya",
      Wy = "Generic " + rH.toLowerCase(),
      ty = "Generic " + ey.toLowerCase(),
      Zy = "Konqueror",
      wy = "Oculus Browser",
      Dy = "Vivaldi",
      Py = "Yandex",
      Ay = "Whale",
      Yy = "DuckDuckGo",
      Vy = "Pale Moon",
      ay = "Waterfox",
      cy = "Brave",
      xy = "Claude",
      Ly = "Codex",
      Cy = "ChatGPT",
      vy = "Google Search App",
      uy = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      my = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      ly = new RegExp(Xy, "i"),
      Sy = new RegExp("PlayStation \\w+", "i"),
      ny = new RegExp("Nintendo \\w+", "i"),
      jy = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      sy = {
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
      Iy = function(ee, ie, He, ye) {
        ie = ie || "";
        const be = function(ee) {
          return (null == ee ? void 0 : ee.brave) ? cy : null
        }(He);
        return be || ((null == ye ? void 0 : ye.detectGoogleSearchApp) && fH(ee, "GSA/") ? vy : fH(ee, " OPR/") && fH(ee, "Mini") ? "Opera Mini" : fH(ee, " OPR/") ? Ry : jy.test(ee) ? My : fH(ee, "IEMobile") || fH(ee, "WPDesktop") ? oy : fH(ee, "OculusBrowser") ? wy : fH(ee, "SamsungBrowser") ? Ky : fH(ee, "Edge") || fH(ee, "Edg/") ? ky : fH(ee, "Vivaldi/") ? Dy : fH(ee, "YaBrowser/") ? Py : fH(ee, "Whale/") ? Ay : fH(ee, "DuckDuckGo/") || fH(ee, "Ddg/") ? Yy : fH(ee, "Claude/") ? xy : fH(ee, "Codex/") ? Ly : fH(ee, "ChatGPT/") ? Cy : fH(ee, "FBIOS") ? "Facebook Mobile" : fH(ee, "UCWEB") || fH(ee, "UCBrowser") ? "UC Browser" : fH(ee, "CriOS") ? Fy : fH(ee, "CrMo") || fH(ee, Uy) ? Uy : fH(ee, QH) && fH(ee, by) ? zy : fH(ee, "FxiOS") ? fy : fH(ee.toLowerCase(), Zy.toLowerCase()) ? Zy : fH(ee, "Brave/") ? cy : ((ee, ie) => ie && fH(ie, "Apple") || function(ee) {
          return fH(ee, by) && !fH(ee, Uy) && !fH(ee, QH)
        }(ee))(ee, ie) ? fH(ee, rH) ? By : by : fH(ee, "PaleMoon/") ? Vy : fH(ee, "Waterfox/") ? ay : fH(ee, qy) ? qy : fH(ee, "MSIE") || fH(ee, "Trident/") ? Jy : fH(ee, "Gecko") ? qy : "")
      },
      hy = {
        [oy]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [ky]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [Uy]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [Fy]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [by]: [uy],
        [By]: [uy],
        [Ry]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [qy]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [fy]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [Zy]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [My]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), uy],
        [zy]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [Ky]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [wy]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [Dy]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [Py]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [Ay]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [cy]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [xy]: [my],
        [Ly]: [my],
        [Cy]: [my],
        [Yy]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [Vy]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [ay]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [vy]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [Jy]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      Ny = function(ee, ie, He, ye) {
        const be = Iy(ee, ie, He, ye),
          Me = hy[be];
        if (tH(Me)) return null;
        for (let Ke = 0; Me.length > Ke; Ke++) {
          const ie = ee.match(Me[Ke]);
          if (ie) return parseFloat(ie[ie.length - 2])
        }
        return null
      },
      Gy = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), ee => [Xy, ee && ee[1] || ""]],
        [new RegExp(Ty, "i"), [Ty, ""]],
        [new RegExp(py, "i"), [py, ""]],
        [jy, [My, ""]],
        [new RegExp(Ey, "i"), (ee, ie) => {
          if (/Phone/.test(ie) || /WPDesktop/.test(ie)) return [gy, ""];
          if (new RegExp(rH).test(ie) && !/IEMobile\b/.test(ie)) return ["Windows Mobile", ""];
          const He = /Windows NT ([0-9.]+)/i.exec(ie);
          if (He && He[1]) {
            let ee = sy[He[1]] || "";
            return /arm/i.test(ie) && (ee = "RT"), [Ey, ee]
          }
          return [Ey, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, ee => ee && ee[3] ? ["iOS", [ee[3], ee[4], ee[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, ee => {
          let ie = "";
          return ee && ee.length >= 3 && (ie = tH(ee[2]) ? ee[3] : ee[2]), ["watchOS", ie]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), ee => ee && ee[2] ? [QH, [ee[2], ee[3], ee[4] || "0"].join(".")] : [QH, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, ee => {
          const ie = ["Mac OS X", ""];
          return ee && ee[1] && (ie[1] = [ee[1], ee[2], ee[3] || "0"].join(".")), ie
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      ry = function(ee) {
        for (let ie = 0; Gy.length > ie; ie++) {
          const [He, ye] = Gy[ie], be = He.exec(ee), Me = be && (OH(ye) ? ye(be, ee) : ye);
          if (Me) return Me
        }
        return ["", ""]
      },
      Qy = function(ee) {
        return ny.test(ee) ? Ty : Sy.test(ee) ? py : ly.test(ee) ? Xy : new RegExp(dy, "i").test(ee) ? dy : new RegExp("(Windows Phone|WPDesktop)", "i").test(ee) ? gy : /iPad/.test(ee) ? Hy : /iPod/.test(ee) ? "iPod Touch" : /iPhone/.test(ee) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(ee) ? yy : jy.test(ee) ? My : /(kobo)\s(ereader|touch)/i.test(ee) ? "Kobo" : new RegExp(Oy, "i").test(ee) ? Oy : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(ee) || /(kf[a-z]+)( bui|\)).+silk\//i.test(ee) ? "Kindle Fire" : /(Android|ZTE)/i.test(ee) ? new RegExp(rH).test(ee) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(ee) || /pixel[\daxl ]{1,6}/i.test(ee) && !/pixel c/i.test(ee) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(ee) || /lmy47v/i.test(ee) && !/QTAQZ3/i.test(ee) ? QH : iy : new RegExp("(pda|Mobile)", "i").test(ee) ? Wy : new RegExp(ey, "i").test(ee) && !new RegExp("Tablet pc", "i").test(ee) ? ty : ""
      },
      eb = function(ee, ie) {
        var He;
        const ye = Qy(ee);
        return ye === Hy || ye === iy || "Kobo" === ye || "Kindle Fire" === ye || ye === ty ? ey : ye === Ty || ye === Xy || ye === py || ye === dy ? "Console" : ye === yy ? "Wearable" : ye ? rH : "Android" === (null == ie ? void 0 : ie.userAgentDataPlatform) && (null !== (He = null == ie ? void 0 : ie.maxTouchPoints) && void 0 !== He ? He : 0) > 0 ? 600 > Math.min(null !== (be = null == ie ? void 0 : ie.screenWidth) && void 0 !== be ? be : 0, null !== (Me = null == ie ? void 0 : ie.screenHeight) && void 0 !== Me ? Me : 0) / (null !== (Ke = null == ie ? void 0 : ie.devicePixelRatio) && void 0 !== Ke ? Ke : 1) ? rH : ey : "Desktop";
        var be, Me, Ke
      },
      ib = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      Hb = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", ib],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", ib],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", ib],
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
      yb = "[Truncated]",
      bb = "[Unserializable]";

    function Mb(ee) {
      let ie = "";
      for (let He = 0; ee.length > He; He++) {
        const ye = ee.charCodeAt(He);
        if (55296 > ye || ye > 56319) ie += 56320 > ye || ye > 57343 ? ee[He] : "\ufffd";
        else {
          const ye = ee.charCodeAt(He + 1);
          56320 > ye || ye > 57343 ? ie += "\ufffd" : (ie += ee[He] + ee[He + 1], He++)
        }
      }
      return ie
    }

    function Kb(ee, ie) {
      if (!ie) return ee;
      let He = [];
      try {
        He = Object.keys(ie)
      } catch (ee) {
        He = []
      }
      for (const ye of He) {
        let He;
        try {
          He = ie[ye]
        } catch (ee) {
          He = bb
        }
        Object.defineProperty(ee, ye, {
          value: He,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return ee
    }
    Date, Date;
    const Ub = 3e5;
    var Fb = class {
      record(ee) {
        if ("too-large" === ee.kind) return;
        if ("retry-later" !== ee.kind) return void this.reset();
        if (!ee.retryAfterMs) return;
        const ie = this.isOpen(),
          He = Date.now(),
          ye = Math.min(ee.retryAfterMs, Ub);
        if (!ie) return this._installedAt = He, void(this._until = He + ye);
        this._until = Math.max(this._until, Math.min(He + ye, this._installedAt + Ub))
      }
      remainingMs() {
        const ee = Date.now();
        if (this._installedAt - 5e3 > ee) return this.reset(), 0;
        const ie = Math.min(Ub, Math.max(0, this._until - ee));
        return 0 === ie && this.reset(), ie
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
    const Jb = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function ob(ee, ie) {
      return "string" == typeof(He = ee) && Jb.test(He) ? ee : ie();
      var He
    }

    function Rb(ee, ie) {
      const He = new Error(ie);
      try {
        Object.defineProperty(He, "name", {
          value: ee,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (ee) {}
      return He
    }

    function kb(ee) {
      return ee ? ee.split("#")[0] : ee
    }

    function qb(ee) {
      try {
        return ee()
      } catch (ee) {
        return
      }
    }

    function fb(ee, ie) {
      const He = setTimeout(ee, ie);
      return null != He && He.unref && (null == He || He.unref()), He
    }

    function Tb(ee, ie, He) {
      return pb.apply(this, arguments)
    }

    function pb() {
      return (pb = jH((function*(ee, ie, He) {
        let ye;
        try {
          return yield Promise.race([ee, new Promise(((ee, be) => {
            ye = fb((() => {
              try {
                null == He || He(), ee()
              } catch (ee) {
                be(ee)
              }
            }), ie)
          }))])
        } finally {
          clearTimeout(ye)
        }
      }))).apply(this, arguments)
    }

    function Xb(ee) {
      return Xb = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
        return typeof ee
      } : function(ee) {
        return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
      }, Xb(ee)
    }

    function zb(ee, ie, He) {
      return (ie = function(ee) {
        var ie = function(ee) {
          if ("object" != Xb(ee) || !ee) return ee;
          var ie = ee[Symbol.toPrimitive];
          if (void 0 !== ie) {
            var He = ie.call(ee, "string");
            if ("object" != Xb(He)) return He;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(ee)
        }(ee);
        return "symbol" == Xb(ie) ? ie : ie + ""
      }(ie)) in ee ? Object.defineProperty(ee, ie, {
        value: He,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : ee[ie] = He, ee
    }

    function Bb(ee, ie) {
      var He = Object.keys(ee);
      if (Object.getOwnPropertySymbols) {
        var ye = Object.getOwnPropertySymbols(ee);
        ie && (ye = ye.filter((function(ie) {
          return Object.getOwnPropertyDescriptor(ee, ie).enumerable
        }))), He.push.apply(He, ye)
      }
      return He
    }

    function Eb(ee) {
      for (var ie = 1; arguments.length > ie; ie++) {
        var He = null != arguments[ie] ? arguments[ie] : {};
        ie % 2 ? Bb(Object(He), !0).forEach((function(ie) {
          zb(ee, ie, He[ie])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(He)) : Bb(Object(He)).forEach((function(ie) {
          Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(He, ie))
        }))
      }
      return ee
    }
    let gb, Ob, db, Wb;

    function tb(ee) {
      var ie;
      const He = globalThis._posthogChunkIds,
        ye = globalThis._debugIds;
      if (!He && !ye) return;
      const be = He ? Object.keys(He) : [],
        Me = ye ? Object.keys(ye) : [];
      if (Wb && Zb(He, be, Ob) && Zb(ye, Me, db)) return Wb;
      Ob = He ? Eb({}, He) : void 0, db = ye ? Eb({}, ye) : void 0, Wb = {}, null !== (ie = gb) && void 0 !== ie || (gb = {});
      const Ke = (ie, He) => {
        for (const be of ie) {
          const ie = He[be];
          if (!ie) continue;
          const Me = null == gb ? void 0 : gb[be];
          if (Me) {
            Wb[Me] = ie;
            continue
          }
          const Ke = ee(be);
          for (let ee = Ke.length - 1; ee >= 0; ee--) {
            var ye;
            const He = null === (ye = Ke[ee]) || void 0 === ye ? void 0 : ye.filename;
            if (He) {
              Wb[He] = ie, gb[be] = He;
              break
            }
          }
        }
      };
      return ye && Ke(Me, ye), He && Ke(be, He), Wb
    }

    function Zb(ee, ie, He) {
      return ee && He ? ie.length === Object.keys(He).length && ie.every((ie => ee[ie] === He[ie])) : ee === He
    }
    var wb = class {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = ee, this.stackParser = ie, this.modifiers = He
      }
      buildFromUnknown(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = ie && ie.mechanism || {
            handled: !0,
            type: "generic"
          },
          ye = this.buildCoercingContext(He, ie, 0).apply(ee),
          be = this.buildParsingContext(ie),
          Me = this.parseStacktrace(ye, be);
        return {
          $exception_list: this.convertToExceptionList(Me, He),
          $exception_level: "error"
        }
      }
      modifyFrames(ee) {
        var ie = this;
        return jH((function*() {
          for (const He of ee) He.stacktrace && He.stacktrace.frames && gH(He.stacktrace.frames) && (He.stacktrace.frames = yield ie.applyModifiers(He.stacktrace.frames));
          return ee
        }))()
      }
      coerceFallback(ee) {
        var ie;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (ie = ee.syntheticException) || void 0 === ie ? void 0 : ie.stack,
          synthetic: !0
        }
      }
      parseStacktrace(ee, ie) {
        var He;
        let ye, be;
        if (null != ee.cause && (ye = this.parseStacktrace(ee.cause, ie)), "" != ee.stack && null != ee.stack) try {
          be = this.applyChunkIds(this.stackParser(ee.stack, ee.synthetic ? ie.skipFirstLines : 0), ie.chunkIdMap)
        } catch (ee) {}
        return Eb(Eb({}, ee), {}, {
          cause: ye,
          stack: be,
          errors: null === (He = ee.errors) || void 0 === He ? void 0 : He.map((ee => this.parseStacktrace(ee, ie)))
        })
      }
      applyChunkIds(ee, ie) {
        return ee.map((ee => (ee.filename && ie && (ee.chunk_id = ie[ee.filename]), ee)))
      }
      applyCoercers(ee, ie) {
        for (const He of this.coercers)
          if (He.match(ee)) return He.coerce(ee, ie);
        return this.coerceFallback(ie)
      }
      applyModifiers(ee) {
        var ie = this;
        return jH((function*() {
          let He = ee;
          for (const ee of ie.modifiers) He = yield ee(He);
          return He
        }))()
      }
      convertToExceptionList(ee, ie) {
        const He = [],
          ye = (ee, be, Me) => {
            var Ke;
            const Ue = He.length,
              Fe = void 0 === be ? Eb(Eb({
                type: "string" == typeof ie.type && ie.type.length > 0 ? ie.type : "generic"
              }, "boolean" == typeof ie.handled ? {
                handled: ie.handled
              } : void 0 === ie.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof ie.synthetic ? ie.synthetic : ee.synthetic,
                exception_id: Ue
              }) : {
                type: "chained",
                source: Me,
                synthetic: ee.synthetic,
                exception_id: Ue,
                parent_id: be
              },
              Je = {
                type: ee.type,
                value: ee.value,
                mechanism: Fe
              };
            ee.stack && (Je.stacktrace = {
              type: "raw",
              frames: ee.stack
            }), He.push(Je), ee.cause && ye(ee.cause, Ue, "cause");
            for (const ie of null !== (Ke = ee.errors) && void 0 !== Ke ? Ke : []) ye(ie, Ue, "member")
          };
        return ye(ee), He
      }
      buildParsingContext(ee) {
        var ie;
        return {
          chunkIdMap: tb(this.stackParser),
          skipFirstLines: null !== (ie = ee.skipFirstLines) && void 0 !== ie ? ie : 1
        }
      }
      getAggregateErrors(ee) {
        try {
          if (CH(ee)) {
            let He = Object.getPrototypeOf(ee);
            for (let ye = 0; He && 100 > ye; ye++) {
              var ie;
              const ye = null === (ie = Object.getOwnPropertyDescriptor(He, "constructor")) || void 0 === ie ? void 0 : ie.value;
              if ("function" == typeof ye && "AggregateError" === ye.name) {
                const ie = ee.errors;
                return gH(ie) ? ie : void 0
              }
              He = Object.getPrototypeOf(He)
            }
          }
        } catch (ee) {}
      }
      buildCoercingContext(ee, ie) {
        var He = this;
        let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          be = 0,
          Me = 0,
          Ke = !1;
        const Ue = new Set,
          Fe = [],
          Je = {},
          oe = function(ee, ie) {
            let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const oe = Re(ie, ye),
              ke = oe.apply;
            if (oe.apply = ie => {
                Fe.push(ee);
                try {
                  return ke(ie)
                } finally {
                  Fe.pop()
                }
              }, ye > 4 || ye > 0 && -1 !== Fe.indexOf(ee)) return He.coerceFallback(oe);
            const qe = "object" == typeof ee && null !== ee || "function" == typeof ee;
            if (0 === ye && be >= 50 || qe && Ue.has(ee)) return;
            qe && Ue.add(ee), 0 === ye && be++;
            const fe = He.getAggregateErrors(ee);
            let Te, pe;
            Ke || (Ke = !!fe);
            try {
              if (Te = He.applyCoercers(ee, oe), !Te) throw Je
            } catch (ee) {
              if (ee === Je) return void(0 === ye && be--);
              if (!Ke) throw ee;
              Te = He.coerceFallback(oe)
            }
            if (!fe || be >= 50) return Te;
            try {
              pe = fe.length
            } catch (ee) {
              return Te
            }
            if (!Number.isInteger(pe) || 0 > pe || pe > 4294967295) return Te;
            const Xe = [];
            for (let Ke = 0; 50 > be && 1e3 > Me && pe > Ke; Ke++) {
              let ye;
              Me++;
              try {
                ye = oe.next(fe[Ke])
              } catch (ee) {
                be++, ye = He.coerceFallback(Re(ie + 1))
              }
              ye && Xe.push(ye)
            }
            return Eb(Eb({}, Te), {}, {
              errors: Xe
            })
          },
          Re = function(He) {
            let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Eb(Eb({}, ie), {}, {
              syntheticException: 0 == He ? ie.syntheticException : void 0,
              mechanism: 0 == He ? ee : {},
              apply(ee) {
                const ie = oe(ee, He, ye + 1);
                if (!ie) throw Je;
                return ie
              },
              next: ee => oe(ee, He + 1)
            })
          },
          ke = Re(ye);
        return Eb(Eb({}, ke), {}, {
          apply: ee => {
            var ie;
            return null !== (ie = oe(ee, ye)) && void 0 !== ie ? ie : this.coerceFallback(ke)
          }
        })
      }
    };
    const Db = /^([a-z][a-z0-9.+-]+):/i,
      Pb = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function Ab(ee) {
      if (!ee || "<anonymous>" === ee) return !1;
      const ie = Db.exec(ee);
      return !ie || Pb.includes(ie[1].toLowerCase())
    }

    function Yb(ee, ie, He, ye, be) {
      const Me = {
        platform: ee,
        filename: ie,
        function: "<anonymous>" === He ? "?" : He,
        in_app: Ab(ie)
      };
      return tH(ye) || (Me.lineno = ye), tH(be) || (Me.colno = be), Me
    }
    const Vb = (ee, ie) => {
        const He = -1 !== ee.indexOf("safari-extension"),
          ye = -1 !== ee.indexOf("safari-web-extension");
        return He || ye ? [-1 !== ee.indexOf("@") ? ee.split("@")[0] : "?", He ? `safari-extension:${ie}` : `safari-web-extension:${ie}`] : [ee, ie]
      },
      ab = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      cb = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      xb = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Lb = (ee, ie) => {
        const He = ab.exec(ee);
        if (He) {
          const [, ee, ye, be] = He;
          return Yb(ie, ee, "?", +ye, +be)
        }
        const ye = cb.exec(ee);
        if (ye) {
          if (ye[2] && 0 === ye[2].indexOf("eval")) {
            const ee = xb.exec(ye[2]);
            ee && (ye[2] = ee[1], ye[3] = ee[2], ye[4] = ee[3])
          }
          const [ee, He] = Vb(ye[1] || "?", ye[2]);
          return Yb(ie, He, ee, ye[3] ? +ye[3] : void 0, ye[4] ? +ye[4] : void 0)
        }
      },
      Cb = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      vb = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      ub = (ee, ie) => {
        const He = Cb.exec(ee);
        if (He) {
          if (He[3] && He[3].indexOf(" > eval") > -1) {
            const ee = vb.exec(He[3]);
            ee && (He[1] = He[1] || "eval", He[3] = ee[1], He[4] = ee[2], He[5] = "")
          }
          let ee = He[3],
            ye = He[1] || "?";
          return [ye, ee] = Vb(ye, ee), Yb(ie, ee, ye, He[4] ? +He[4] : void 0, He[5] ? +He[5] : void 0)
        }
      },
      mb = /\(error: (.*)\)/;

    function lb(ee, ie) {
      return ee.filename === ie.filename && ee.function === ie.function && ee.module === ie.module && ee.lineno === ie.lineno && ee.colno === ie.colno
    }

    function Sb(ee) {
      for (let ie = 1; 10 >= ie; ie++) {
        const He = ee.length - 2 * ie;
        if (0 > He) break;
        let ye = !0;
        for (let be = 0; ie > be; be++)
          if (!lb(ee[He + be], ee[He + ie + be])) {
            ye = !1;
            break
          } if (ye) {
          for (let ye = 0; ie > ye; ye++) ee[He + ye] = ee[He + ie + ye];
          return ee.length = He + ie, {
            start: He,
            length: ie
          }
        }
      }
    }

    function nb(ee, ie) {
      const He = ie.start + ie.length,
        ye = sb(ee, ie);
      ye && ee.splice(He + ye === ee.length ? He : ie.start, ye)
    }

    function jb(ee, ie) {
      let He = ie.start;
      for (; He > 0 && lb(ee[He - 1], ee[He - 1 + ie.length]);) He--;
      return ie.start - He
    }

    function sb(ee, ie) {
      const He = ie.start + ie.length;
      let ye = He;
      for (; ee.length > ye && lb(ee[ye], ee[ye - ie.length]);) ye++;
      return ye - He
    }

    function Ib(ee, ie) {
      const He = ie[0];
      let ye = ee.length - (He ? jb(ee, He) : 0);
      for (const be of ie) ye -= sb(ee, be);
      return ye
    }

    function hb(ee, ie, He) {
      for (let ye = 0; ee.length > ye; ye++) {
        const be = ee[(ie + ye) % ee.length],
          Me = ee[(He + ye) % ee.length];
        if (be !== Me) return Me > be
      }
      return !1
    }
    var Nb = class {
        match(ee) {
          return this.isDOMException(ee) || this.isDOMError(ee)
        }
        coerce(ee, ie) {
          const He = ZH(ee.stack);
          return {
            type: this.getType(ee),
            value: this.getValue(ee),
            stack: He ? ee.stack : void 0,
            cause: ee.cause ? ie.next(ee.cause) : void 0,
            synthetic: !1
          }
        }
        getType(ee) {
          return this.isDOMError(ee) ? "DOMError" : "DOMException"
        }
        getValue(ee) {
          const ie = ee.name || (this.isDOMError(ee) ? "DOMError" : "DOMException");
          return ee.message ? `${ie}: ${ee.message}` : ie
        }
        isDOMException(ee) {
          return LH(ee, "DOMException")
        }
        isDOMError(ee) {
          return LH(ee, "DOMError")
        }
      },
      Gb = class {
        match(ee) {
          return CH(ee)
        }
        coerce(ee, ie) {
          var He;
          const ye = this.getStack(ee),
            be = void 0 === ye ? null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack : void 0,
            Me = !!be;
          return {
            type: this.getType(ee),
            value: this.getMessage(ee, ie),
            stack: null != ye ? ye : be,
            cause: ee.cause ? ie.next(ee.cause) : void 0,
            synthetic: Me
          }
        }
        getType(ee) {
          return ee.name || ee.constructor.name
        }
        getMessage(ee, ie) {
          const He = ee.message;
          return String(He.error && "string" == typeof He.error.message ? He.error.message : He)
        }
        getStack(ee) {
          try {
            const ie = ee.stacktrace;
            if ("string" == typeof ie && ie.length > 0) return ie;
            const He = ee.stack;
            return "string" == typeof He && He.length > 0 ? He : void 0
          } catch (ee) {
            return
          }
        }
      },
      rb = class {
        match(ee) {
          return !!LH(ee, "ErrorEvent") && (null != ee.error || this._hasUsableMessage(ee))
        }
        coerce(ee, ie) {
          var He;
          if (null != ee.error) return ie.apply(ee.error);
          const ye = ie.apply(ee.message);
          return Eb(Eb({}, ye), {}, {
            stack: null !== (He = this._buildLocationStack(ee)) && void 0 !== He ? He : ye.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(ee) {
          return ZH(ee.message) && ee.message.length > 0
        }
        _buildLocationStack(ee) {
          var ie, He;
          const ye = ee,
            be = null !== (ie = ye.lineno) && void 0 !== ie ? ie : 0,
            Me = null !== (He = ye.colno) && void 0 !== He ? He : 0;
          if (ZH(ye.filename) && 0 !== ye.filename.length && 0 !== be) return `Error\n    at ${ye.filename}:${be}:${Me}`
        }
      };
    const Qb = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var eM = class {
      match(ee) {
        return "string" == typeof ee
      }
      coerce(ee, ie) {
        var He;
        const [ye, be] = this.getInfos(ee);
        return {
          type: null != ye ? ye : "Error",
          value: null != be ? be : ee,
          stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
          synthetic: !0
        }
      }
      getInfos(ee) {
        let ie = "Error",
          He = ee;
        const ye = ee.match(Qb);
        return ye && (ie = ye[1], He = ye[2]), [ie, He]
      }
    };
    const iM = ["fatal", "error", "warning", "log", "info", "debug"];

    function HM(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const He = Object.keys(ee);
      if (He.sort(), !He.length) return "[object has no keys]";
      for (let ye = He.length; ye > 0; ye--) {
        const ee = He.slice(0, ye).join(", ");
        if (ie >= ee.length) return ye === He.length ? ee : ee.length > ie ? `${ee.slice(0,ie)}...` : ee
      }
      return ""
    }
    var yM = class {
        match(ee) {
          return "object" == typeof ee && null !== ee
        }
        coerce(ee, ie) {
          var He, ye;
          const be = this.getErrorPropertyFromObject(ee);
          return be ? ie.apply(be) : {
            type: this.getType(ee),
            value: this.getValue(ee),
            stack: null !== (He = this.getStack(ee)) && void 0 !== He ? He : null === (ye = ie.syntheticException) || void 0 === ye ? void 0 : ye.stack,
            level: this.isSeverityLevel(ee.level) ? ee.level : "error",
            synthetic: !0
          }
        }
        getType(ee) {
          if (vH(ee)) return ee.constructor.name;
          const ie = "name" in ee ? ee.name : void 0;
          return ZH(ie) && !wH(ie) ? ie : "Error"
        }
        getValue(ee) {
          if ("name" in ee && "string" == typeof ee.name) {
            let ie = `'${ee.name}' captured as exception`;
            return "message" in ee && "string" == typeof ee.message && (ie += ` with message: '${ee.message}'`), ie
          }
          if ("message" in ee && "string" == typeof ee.message) return ee.message;
          const ie = this.getObjectClassName(ee);
          return `${ie&&"Object"!==ie?`'${ie}'`:"Object"} captured as exception with keys: ${HM(ee)}`
        }
        isSeverityLevel(ee) {
          return ZH(ee) && !wH(ee) && iM.indexOf(ee) >= 0
        }
        getStack(ee) {
          try {
            return ZH(ee.stacktrace) && ee.stacktrace.length > 0 ? ee.stacktrace : ZH(ee.stack) && ee.stack.length > 0 ? ee.stack : void 0
          } catch (ee) {
            return
          }
        }
        getErrorPropertyFromObject(ee) {
          for (const ie in ee)
            if ({}.hasOwnProperty.call(ee, ie)) {
              const He = ee[ie];
              if (CH(He)) return He
            }
        }
        getObjectClassName(ee) {
          try {
            const ie = Object.getPrototypeOf(ee);
            return ie ? ie.constructor.name : void 0
          } catch (ee) {
            return
          }
        }
      },
      bM = class {
        match(ee) {
          return vH(ee)
        }
        coerce(ee, ie) {
          var He;
          const ye = ee.constructor.name;
          return {
            type: ye,
            value: `${ye} captured as exception with keys: ${HM(ee)}`,
            stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
            synthetic: !0
          }
        }
      },
      MM = class {
        match(ee) {
          return xH(ee)
        }
        coerce(ee, ie) {
          var He;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(ee)}`,
            stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
            synthetic: !0
          }
        }
      },
      KM = class {
        match(ee) {
          return LH(ee, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(ee)
        }
        isCustomEventWrappingRejection(ee) {
          if (!vH(ee)) return !1;
          try {
            const ie = ee.detail;
            return null != ie && "object" == typeof ie && "reason" in ie
          } catch (ee) {
            return !1
          }
        }
        coerce(ee, ie) {
          var He;
          const ye = this.getUnhandledRejectionReason(ee);
          return xH(ye) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(ye)}`,
            stack: null === (He = ie.syntheticException) || void 0 === He ? void 0 : He.stack,
            synthetic: !0
          } : ie.apply(ye)
        }
        getUnhandledRejectionReason(ee) {
          try {
            if ("reason" in ee) return ee.reason;
            if ("detail" in ee && null != ee.detail && "object" == typeof ee.detail && "reason" in ee.detail) return ee.detail.reason
          } catch (ee) {}
          return ee
        }
      };
    const UM = "$message",
      FM = "$timestamp",
      JM = new Set([UM, FM]),
      oM = {
        enabled: !0,
        max_bytes: 32768
      };

    function RM(ee) {
      var ie;
      return ee ? {
        enabled: null !== (ie = ee.enabled) && void 0 !== ie ? ie : oM.enabled,
        max_bytes: qM(ee.max_bytes, oM.max_bytes)
      } : Eb({}, oM)
    }
    var kM = class {
      constructor(ee) {
        this._entries = [], this._totalBytes = 0, this._config = RM(ee)
      }
      setConfig(ee) {
        this._config = RM(ee), this._trimToMaxBytes()
      }
      add(ee) {
        const ie = function(ee) {
          let ie;
          try {
            ie = XH(ee)
          } catch (ee) {
            return
          }
          try {
            const ee = JSON.parse(ie);
            if (!dH(ee)) return;
            const He = ee,
              ye = He[UM],
              be = He[FM];
            if (!ZH(ye) || 0 === ye.trim().length) return;
            if (!ZH(be) && !AH(be)) return;
            return {
              step: He,
              json: ie
            }
          } catch (ee) {
            return
          }
        }(ee);
        if (!ie) return;
        const He = function(ee) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(ee).length;
          const ie = encodeURIComponent(ee);
          let He = 0;
          for (let ye = 0; ie.length > ye; ye++) "%" === ie[ye] ? (He += 1, ye += 2) : He += 1;
          return He
        }(ie.json);
        He > this._config.max_bytes || (this._entries.push({
          step: ie.step,
          bytes: He
        }), this._totalBytes += He, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((ee => ee.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const ee = this._entries.shift();
          ee && (this._totalBytes -= ee.bytes)
        }
      }
    };

    function qM(ee, ie) {
      if (!AH(ee) || 1 / 0 === ee || -1 / 0 === ee) return ie;
      const He = Math.floor(ee);
      return 0 > He ? ie : He
    }
    const fM = ee => {
      if ("string" != typeof ee) return ee;
      try {
        return JSON.parse(ee)
      } catch (be) {
        return ee
      }
    };

    function TM(ee) {
      return "string" == typeof ee || ee
    }

    function pM(ee) {
      return "string" == typeof ee ? ee : void 0
    }
    const XM = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      zM = "NativeGzipValidationError",
      BM = ee => ee.length >= 2 && 31 === ee[0] && 139 === ee[1],
      EM = (ee, ie) => ee === RH.GZipJS || ie === RH.GZipJS || "gzip" === ie,
      gM = ee => !(!ee || "object" != typeof ee) && "NotReadableError" === ("name" in ee ? String(ee.name) : "");
    let OM;
    const dM = ee => {
        throw Rb(zM, `Native gzip produced invalid output: ${ee}`)
      },
      WM = (tM = jH((function*(ee, ie) {
        18 > ee.size && dM("too-short");
        const He = new Uint8Array(yield ee.slice(0, 10).arrayBuffer());
        BM(He) && 8 === He[2] || dM("invalid-header");
        const ye = new DataView(yield ee.slice(ee.size - 8).arrayBuffer());
        ye.getUint32(0, !0) !== (ee => {
          const ie = (() => {
            if (OM) return OM;
            OM = [];
            for (let ee = 0; 256 > ee; ee++) {
              let ie = ee;
              for (let ee = 0; 8 > ee; ee++) ie = 1 & ie ? 3988292384 ^ ie >>> 1 : ie >>> 1;
              OM[ee] = ie >>> 0
            }
            return OM
          })();
          let He = 4294967295;
          for (let ye = 0; ee.length > ye; ye++) He = ie[255 & (He ^ ee[ye])] ^ He >>> 8;
          return (4294967295 ^ He) >>> 0
        })(ie) && dM("invalid-crc");
        const be = ie.length >>> 0;
        ye.getUint32(4, !0) !== be && dM("invalid-size")
      })), function(ee, ie) {
        return tM.apply(this, arguments)
      });
    var tM;

    function ZM() {
      return ZM = jH((function*(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const ie = (new TextEncoder).encode(ee),
            He = new globalThis.CompressionStream("gzip"),
            be = He.writable.getWriter(),
            Me = be.write(ie).then((() => be.close())).catch((ye = jH((function*(ee) {
              try {
                yield be.abort(ee)
              } catch (ee) {}
              throw ee
            })), function(ee) {
              return ye.apply(this, arguments)
            })),
            Ke = new Response(He.readable).blob(),
            [Ue] = yield Promise.all([Ke, Me]);
          return yield WM(Ue, ie), Ue
        } catch (ee) {
          if (null == He ? void 0 : He.rethrow) throw ee;
          return ie && console.error("Failed to gzip compress data", ee), null
        }
        var ye
      })), ZM.apply(this, arguments)
    }

    function wM(ee, ie) {
      if (null == ee) return {};
      var He, ye, be = function(ee, ie) {
        if (null == ee) return {};
        var He = {};
        for (var ye in ee)
          if ({}.hasOwnProperty.call(ee, ye)) {
            if (ie.includes(ye)) continue;
            He[ye] = ee[ye]
          } return He
      }(ee, ie);
      if (Object.getOwnPropertySymbols) {
        var Me = Object.getOwnPropertySymbols(ee);
        for (ye = 0; Me.length > ye; ye++) ie.includes(He = Me[ye]) || {}.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
      }
      return be
    }
    const DM = "[redacted]",
      PM = /^[A-Za-z0-9+/\n\r]+=*$/,
      AM = /^[A-Za-z0-9_-]+={0,2}$/,
      YM = /[-_]/,
      VM = /^data:[^,\s]*;base64,/i,
      aM = /^[A-Za-z0-9+/_-]+={0,2}$/,
      cM = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      xM = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      LM = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      CM = /[\s<>"]/,
      vM = new RegExp(LM.source, "i"),
      uM = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      mM = new RegExp(`^${uM.source}`, "i"),
      lM = new RegExp(uM.source, "gi"),
      SM = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      nM = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      jM = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      sM = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      IM = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      hM = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      NM = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      GM = /\b\d(?:[ ./-]?\d){12,}\b/g,
      rM = /\d+/g,
      QM = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      eK = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function iK(ee) {
      return function(ee) {
        return xM.test(ee)
      }(ee) || SM.test(ee) || nM.test(ee)
    }

    function HK(ee) {
      return ee.split("&", 129).length > 128
    }

    function yK(ee, ie, He) {
      return iK(ee) || ie.includes(";") && function(ee) {
        return ee.split(";").some((ee => iK(ee.split("=", 1)[0])))
      }(ie) ? DM : vM.test(ie) ? He ? JK(ie, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : DM : ie
    }

    function bK(ee, ie) {
      const He = new URLSearchParams;
      let ye = !1,
        be = !1;
      for (const [Me, Ke] of new URLSearchParams(ee)) {
        const ee = oK(Me),
          Ue = oK(Ke);
        ye || (ye = ee !== Me || Ue !== Ke);
        const Fe = yK(ee, Ue, ie);
        ye || (ye = Fe !== Ue), be = iK(ee) || Fe !== Ue, He.append(ee, Fe)
      }
      return {
        changed: ye,
        lastFieldSensitive: be,
        serialized: He.toString()
      }
    }

    function MK(ee, ie) {
      if (!ee.includes("=")) return {
        value: KK(ee, ie),
        lastFieldSensitive: !1
      };
      const He = bK(ee, ie);
      return {
        value: He.changed ? He.serialized : ee,
        lastFieldSensitive: He.lastFieldSensitive
      }
    }

    function KK(ee, ie) {
      return ie ? JK(ee, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : vM.test(ee) ? DM : ee
    }

    function UK(ee, ie, He) {
      return "#" === ee ? !ie.fragment && (ie.fragment = !0) : "?" === ee && (ie.fragment ? "=" !== He && !ie.fragmentQuery && (ie.fragmentQuery = !0) : !ie.query && (ie.query = !0))
    }

    function FK(ee, ie) {
      var He;
      if (ee.length > 8192 && mM.test(ee)) return DM;
      const {
        address: ye,
        suffix: be
      } = ie.stripPunctuation ? function(ee) {
        let ie = ee.length;
        for (; ie > 0 && ".,;:!?)]}'".includes(ee[ie - 1]);) ie--;
        return {
          address: ee.slice(0, ie),
          suffix: ee.slice(ie)
        }
      }(ee) : {
        address: ee,
        suffix: ""
      };
      let Me;
      try {
        Me = new URL(ye)
      } catch (ee) {
        return DM + be
      }
      const Ke = Me.search.slice(1),
        Ue = "" !== Me.hash,
        Fe = function(ee) {
          const ie = ee.slice(1),
            He = ie.indexOf("?");
          return 0 > He ? {
            head: ie,
            tail: null
          } : {
            head: ie.slice(0, He),
            tail: ie.slice(He + 1)
          }
        }(Me.hash);
      if (HK(Ke) || HK(Fe.head) || HK(null !== (He = Fe.tail) && void 0 !== He ? He : "")) return DM + be;
      let Je = !1;
      (Me.username || Me.password) && (Me.username = DM, Me.password = "", Je = !0);
      const oe = bK(Ke, ie.allowNestedUrls);
      oe.changed && (Me.search = oe.serialized, Je = !0);
      const Re = MK(Fe.head, ie.allowNestedUrls),
        ke = null === Fe.tail ? null : (qe = Fe.tail, Re.lastFieldSensitive ? {
          value: "" === qe ? "" : DM,
          lastFieldSensitive: !0
        } : MK(qe, ie.allowNestedUrls));
      var qe;
      const fe = null === ke ? Re.value : `${Re.value}?${ke.value}`;
      fe !== Me.hash.slice(1) && (Me.hash = fe, Je = !0);
      const Te = Ue ? null != ke ? ke : Re : oe;
      return (Je ? oK(Me.toString()) : ye) + (Te.lastFieldSensitive ? "" : be)
    }

    function JK(ee, ie) {
      return ee.replace(LM, (He => function(ee, ie) {
        const He = function(ee) {
          if (!ee.includes("://")) return [];
          const ie = [...ee.matchAll(lM)].map((ee => ee.index)),
            He = [],
            ye = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let be = 0,
            Me = !1,
            Ke = "";
          for (let Ue = 0; ee.length > Ue && ie.length > be; Ue++) {
            ie[be] === Ue && (Ue > 0 && "=" !== Ke && He.push(Ue), be++);
            const Fe = ee[Ue];
            UK(Fe, ye, Ke) ? (Ke = Fe, Me = !0) : Me && "=&".includes(Fe) && (Ke = Fe)
          }
          return He
        }(ee);
        if (0 === He.length) return FK(ee, ie);
        let ye = "",
          be = 0;
        for (const Me of He) ye += FK(ee.slice(be, Me), Eb(Eb({}, ie), {}, {
          stripPunctuation: !1
        })), be = Me;
        return ye + FK(ee.slice(be), ie)
      }(He, Eb(Eb({}, ie), {}, {
        stripPunctuation: ie.stripPunctuation && He.length !== ee.length
      }))))
    }

    function oK(ee) {
      return ee.replace(cM, DM)
    }

    function RK(ee) {
      let ie = 0,
        He = !1;
      for (let ye = ee.length - 1; ye >= 0; ye--) {
        let be = ee.charCodeAt(ye) - 48;
        if (0 > be || be > 9) return !1;
        He && (be *= 2, be > 9 && (be -= 9)), ie += be, He = !He
      }
      return ie % 10 == 0
    }

    function kK(ee) {
      const ie = [];
      for (let Me = rM.exec(ee); null !== Me; Me = rM.exec(ee)) ie.push({
        digits: Me[0],
        start: Me.index,
        end: Me.index + Me[0].length
      });
      let He = "",
        ye = 0,
        be = 0;
      for (; ie.length > be;) {
        let Me = "",
          Ke = -1;
        for (let ee = be; ie.length > ee && (Me += ie[ee].digits, 19 >= Me.length); ee++) Me.length >= 13 && RK(Me) && (Ke = ee);
        0 > Ke ? be++ : (He += ee.slice(ye, ie[be].start) + DM, ye = ie[Ke].end, be = Ke + 1)
      }
      return He + ee.slice(ye)
    }
    const qK = {}.propertyIsEnumerable;

    function fK(ee, ie) {
      try {
        return XK(ee, ie, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (ee) {
        return []
      }
    }

    function TK(ee, ie, He, ye) {
      if (0 >= He.remainingNodes) return {
        stringValue: yb
      };
      if (He.remainingNodes--, VH(ee)) return {
        boolValue: ee
      };
      if ("bigint" == typeof ee) return function(ee, ie) {
        const He = ee.toString(),
          ye = BigInt("9223372036854775808");
        return ee >= ye || -ye > ee ? (null == ie || ie.debug(`Attribute ${He} is outside the int64 range; encoding it as a string`), {
          stringValue: He
        }) : {
          intValue: He
        }
      }(ee, ie);
      if ("number" == typeof ee) {
        if (!Number.isFinite(ee)) return {
          stringValue: String(ee)
        };
        if (Number.isInteger(ee)) {
          if (Number.isSafeInteger(ee)) return {
            intValue: String(ee)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(ee)
          };
          const He = BigInt(ee).toString();
          return ee >= 0x8000000000000000 || -0x8000000000000000 > ee ? (null == ie || ie.debug(`Attribute ${He} is outside the int64 range; encoding it as a string`), {
            stringValue: He
          }) : {
            intValue: He
          }
        }
        return {
          doubleValue: ee
        }
      }
      if ("string" == typeof ee) return {
        stringValue: Mb(ee)
      };
      if ("function" == typeof ee) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof ee) return {
        stringValue: String(ee)
      };
      if ("object" == typeof ee && null !== ee) {
        if (He.ancestors.has(ee)) return {
          stringValue: "[Circular]"
        };
        if (ye >= 20) return {
          stringValue: yb
        };
        if (ee instanceof Date) {
          const ie = ee.getTime(),
            He = Number.isFinite(ie) ? ee.toISOString() : String(ee);
          return {
            stringValue: "string" == typeof He ? Mb(He) : String(He)
          }
        }
        He.ancestors.add(ee);
        try {
          try {
            const be = ee.toJSON;
            if ("function" == typeof be) return TK(be.call(ee), ie, He, ye + 1)
          } catch (ee) {}
          return gH(ee) ? {
            arrayValue: {
              values: pK(ee, ie, He, ye + 1)
            }
          } : {
            kvlistValue: {
              values: XK(ee, ie, He, ye + 1)
            }
          }
        } finally {
          He.ancestors.delete(ee)
        }
      }
      return {
        stringValue: Mb(String(ee))
      }
    }

    function pK(ee, ie, He, ye) {
      const be = [],
        Me = Math.min(ee.length, 1e3);
      let Ke = 0;
      for (; Me > Ke && He.remainingNodes > 0; Ke++) try {
        const Me = Ke in ee ? ee[Ke] : void 0;
        if (PH(Me)) continue;
        be.push(TK(Me, ie, He, ye))
      } catch (ee) {
        be.push({
          stringValue: bb
        })
      }
      return ee.length > Ke && be.push({
        stringValue: yb
      }), be
    }

    function XK(ee, ie, He, ye) {
      const be = [];
      for (const Me in ee)
        if (qK.call(ee, Me)) {
          if (!Me) {
            null == ie || ie.debug("Dropping an attribute with an empty key");
            continue
          }
          if (be.length >= 1e3 || 0 >= He.remainingNodes) {
            null == ie || ie.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const Ke = ee[Me];
            if (DH(Ke) || tH(Ke)) continue;
            be.push({
              key: Mb(Me),
              value: TK(Ke, ie, He, ye)
            })
          } catch (ee) {
            be.push({
              key: Mb(Me),
              value: {
                stringValue: bb
              }
            })
          }
        } return be
    }

    function zK(ee, ie, He) {
      return Eb(Eb(Eb(Eb({}, Kb({}, ee.resourceAttributes)), {}, {
        "service.name": ee.serviceName || "unknown_service"
      }, ee.environment && {
        "deployment.environment": ee.environment
      }), ee.serviceVersion && {
        "service.version": ee.serviceVersion
      }), {}, {
        "telemetry.sdk.name": ie,
        "telemetry.sdk.version": He
      })
    }
    const BK = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function EK(ee, ie) {
      const He = Kb({}, ee),
        ye = {};
      for (const be of BK)({}).hasOwnProperty.call(He, be) && (ye[be] = He[be], delete He[be]);
      return [...fK(He, ie), ...fK(ye, ie)]
    }
    const gK = {
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
      OK = {
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
      dK = OK.info;

    function WK(ee) {
      try {
        return Mb(String(ee))
      } catch (ee) {
        return bb
      }
    }

    function tK(ee, ie, He, ye) {
      const be = ee.level || "info",
        {
          text: Me,
          number: Ke
        } = OK[be] || dK,
        Ue = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(ee) + "000000"
        }(AH(ye) ? ye : void 0),
        Fe = {};
      ie.distinctId && (Fe.posthogDistinctId = ie.distinctId), ie.sessionId && (Fe.sessionId = ie.sessionId), ie.windowId && (Fe["window.id"] = ie.windowId), PH(ie.sessionStartTimestamp) || (Fe.sessionStartTimestamp = String(ie.sessionStartTimestamp)), PH(ie.lastActivityTimestamp) || (Fe.lastActivityTimestamp = String(ie.lastActivityTimestamp)), ie.currentUrl && (Fe["url.full"] = ie.currentUrl), ie.screenName && (Fe["screen.name"] = ie.screenName), ie.appState && (Fe["app.state"] = ie.appState), ie.activeFeatureFlags && ie.activeFeatureFlags.length > 0 && (Fe.feature_flags = ie.activeFeatureFlags);
      const Je = Eb({}, Fe),
        oe = ee.attributes;
      if (oe) {
        let ee = [];
        try {
          ee = Object.keys(oe)
        } catch (ie) {
          ee = []
        }
        for (const He of ee) {
          let ee;
          try {
            ee = oe[He]
          } catch (ie) {
            ee = bb
          }
          Object.defineProperty(Je, He, {
            value: ee,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const Re = {
        timeUnixNano: Ue,
        observedTimeUnixNano: Ue,
        severityNumber: Ke,
        severityText: Me,
        body: {
          stringValue: WK(ee.body)
        },
        attributes: fK(Je, He)
      };
      return ee.trace_id && (Re.traceId = ee.trace_id), ee.span_id && (Re.spanId = ee.span_id), tH(ee.trace_flags) || (Re.flags = ee.trace_flags), Re
    }

    function ZK(ee, ie, He) {
      return zK(ee, ie, He)
    }

    function wK(ee, ie, He, ye) {
      return {
        resourceLogs: [{
          resource: {
            attributes: EK(ie)
          },
          scopeLogs: [{
            scope: {
              name: He,
              version: ye
            },
            logRecords: ee
          }]
        }]
      }
    }
    var DK = class {
      constructor(ee) {
        this._onFire = ee, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(ee) {
        this.clear(), this._firesAt = Date.now() + ee, this._timer = fb((() => {
          this._timer = void 0, this._onFire()
        }), ee)
      }
      armNoEarlierThan(ee) {
        this._timer && Date.now() + ee <= this._firesAt || this.arm(ee)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function PK() {
      return .75 + .5 * Math.random()
    }

    function AK(ee, ie, He, ye) {
      const be = Math.min(Math.max(0, ie - 1), 6),
        Me = ee * Math.pow(2, be);
      return Math.round((void 0 === ye ? Me : Math.min(Me, Math.max(ye, ee))) * He)
    }
    var YK = class {
      constructor(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          Ke = arguments.length > 6 ? arguments[6] : void 0;
        var Ue;
        this._instance = ee, this._config = ie, this._logger = He, this._getContext = ye, this._onReady = be, this._waitForStoragePersist = Me, this._scopeName = Ke, this._flushTimer = new DK((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new Fb, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = ie.maxBufferSize, this._maxQueueSize = Math.max(null !== (Ue = ie.maxQueueSize) && void 0 !== Ue ? Ue : ie.maxBufferSize, ie.maxBufferSize), this._flushIntervalMs = ie.flushIntervalMs, this._maxBatchRecordsPerPost = ie.maxBatchRecordsPerPost, this._rateCapWindowMs = ie.rateCapWindowMs, this._maxLogsPerInterval = ie.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(oH.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(ee, ie) {
        var He;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == ee ? void 0 : ee.body)) return;
        const ye = this._runBeforeSend(ee);
        if (null === ye) return;
        if (!ye.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const be = {
          record: tK(ye, null !== (He = null == ie ? void 0 : ie.context) && void 0 !== He ? He : this._getContext(), this._logger, null == ie ? void 0 : ie.occurredAtMs)
        };
        this._onReady((() => this._enqueue(be)))
      }
      _runBeforeSend(ee) {
        const ie = this._config.beforeSend;
        if (!ie) return ee;
        const He = gH(ie) ? ie : [ie];
        let ye = ee;
        for (const be of He) try {
          const ee = be(ye);
          if (!ee) return this._logger.info("Log was rejected in beforeSend function"), null;
          ye = ee
        } catch (ee) {
          return this._logger.error("Error in beforeSend function for log:", ee), null
        }
        return ye
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const ee = Date.now(),
          ie = ee - this._intervalWindowStart;
        return this._rateCapWindowMs > ie && ie >= 0 || (this._intervalWindowStart = ee, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var ee = this;
        return jH((function*() {
          if (!ee._instance.isDisabled) return ee._flushPromise || (ee._flushPromise = ee._flushInner().finally((() => {
            ee._flushPromise = null
          }))), ee._flushPromise
        }))()
      }
      _flushInner() {
        var ee = this;
        return jH((function*() {
          var ie;
          ee._flushTimer.clear();
          let He = null !== (ie = ee._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== ie ? ie : [];
          if (0 === He.length) return;
          const ye = He.length;
          let be = 0;
          for (; He.length > 0 && ye > be;) {
            var Me, Ke;
            const ie = ee._queueGeneration;
            ee._evictedSinceAdvance = 0;
            const ye = Math.min(He.length, ee._maxBatchRecordsPerPost),
              Ue = He.slice(0, ye),
              Fe = wK(Ue.map((ee => ee.record)), ee._buildResourceAttributes(), null !== (Me = ee._scopeName) && void 0 !== Me ? Me : ee._instance.getLibraryId(), ee._instance.getLibraryVersion()),
              Je = yield ee._instance._sendLogsBatch(Fe);
            if (ee._queueGeneration !== ie) return;
            if ("too-large" === Je.kind && Ue.length > 1) ee._maxBatchRecordsPerPost = Math.max(1, Math.floor(Ue.length / 2)), ee._logger.warn(`Logs batch of size ${Ue.length} was too large for the ingestion endpoint, reducing batch size to ${ee._maxBatchRecordsPerPost}`);
            else {
              if (ee._retryAfter.record(Je), ee._flushTimer.pending && ee._flushTimer.arm(Math.max(ee._flushIntervalMs, ee._retryAfter.remainingMs())), "retry-later" === Je.kind) throw Je.error;
              if ("too-large" === Je.kind ? ee._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === Je.kind && ee._config.maxBatchRecordsPerPost > ee._maxBatchRecordsPerPost && (ee._maxBatchRecordsPerPost = Math.min(ee._config.maxBatchRecordsPerPost, ee._maxBatchRecordsPerPost + 1)), yield ee._persistQueueAdvance(Ue.length), He = null !== (Ke = ee._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== Ke ? Ke : [], be += Ue.length, "fatal" === Je.kind) throw Je.error
            }
          }
        }))()
      }
      _persistQueueAdvance(ee) {
        var ie = this;
        return jH((function*() {
          var He;
          const ye = Math.max(0, ee - ie._evictedSinceAdvance),
            be = null !== (He = ie._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== He ? He : [];
          ie._instance.setPersistedProperty(oH.LogsQueue, be.slice(ye)), yield ie._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return ZK(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(ee) {
        var ie;
        if (this._instance.optedOut) return;
        const He = null !== (ie = this._instance.getPersistedProperty(oH.LogsQueue)) && void 0 !== ie ? ie : [];
        this._maxQueueSize > He.length || (He.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), He.push(ee), this._instance.setPersistedProperty(oH.LogsQueue, He), this._maxBufferSize > He.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(AK(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const ee = this._instance.getPersistedProperty(oH.LogsQueue);
        return !!ee && ee.length > 0
      }
      shutdown(ee) {
        var ie = this;
        return jH((function*() {
          ie._flushTimer.clear();
          const He = ie.flush().catch((() => {}));
          void 0 !== ee ? yield Tb(He, ee): yield He
        }))()
      }
      flushWithTimeout(ee) {
        var ie = this;
        return jH((function*() {
          const He = ie.flush();
          yield Tb(He, ee, (() => {
            He.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (ee => {
          this._consecutiveFlushFailures++, this._flushJitter = PK(), this._logger.error("PostHog logs flush failed:", ee)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const VK = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function aK(ee) {
      return String(ee) + "000000"
    }

    function cK(ee, ie, He, ye) {
      let be = "";
      return ye && (be = Object.keys(ye).sort().map((ee => `${JSON.stringify(ee)}:${JSON.stringify(ye[ee])}`)).join(",")), `${ee}\0${ie}\0${null!=He?He:""}\0${be}`
    }
    var xK = class {
      constructor(ee, ie, He) {
        this._instance = ee, this._config = ie, this._logger = He, this._series = new Map, this._flushTimer = new DK((() => this.flush().catch((ee => {
          this._logger.error("Metrics flush failed:", ee)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new Fb, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: ee,
          type: "count",
          value: ie,
          unit: null == He ? void 0 : He.unit,
          attributes: null == He ? void 0 : He.attributes
        })
      }
      gauge(ee, ie, He) {
        this._capture({
          name: ee,
          type: "gauge",
          value: ie,
          unit: null == He ? void 0 : He.unit,
          attributes: null == He ? void 0 : He.attributes
        })
      }
      histogram(ee, ie, He) {
        this._capture({
          name: ee,
          type: "histogram",
          value: ie,
          unit: null == He ? void 0 : He.unit,
          attributes: null == He ? void 0 : He.attributes
        })
      }
      flush() {
        var ee = this;
        const ie = this._flushPromise,
          He = function() {
            var He = jH((function*() {
              ie && (yield ie.catch((() => {}))), yield ee._doFlush()
            }));
            return function() {
              return He.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === He && (this._flushPromise = null)
          }));
        return this._flushPromise = He, He
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const ee = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(ee)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(ee) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const ie = this._runBeforeSend(ee);
        if (null === ie) return;
        if (!ie.name || "string" != typeof ie.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof ie.value || !Number.isFinite(ie.value)) return void this._logger.warn(`Dropping metric '${ie.name}': value must be a finite number`);
        if ("count" === ie.type && 0 > ie.value) return void this._logger.warn(`Dropping count '${ie.name}': counters are monotonic, value must be >= 0`);
        let He, ye;
        try {
          He = ie.attributes ? Eb({}, ie.attributes) : void 0, ye = cK(ie.type, ie.name, ie.unit, He)
        } catch (ee) {
          return void this._logger.warn(`Dropping metric '${ie.name}': attributes could not be serialized`, ee)
        }
        let be = this._series.get(ye);
        if (!be) {
          if (!this._admitNewSeries()) return;
          be = {
            name: ie.name,
            type: ie.type,
            unit: ie.unit,
            attributes: He,
            windowStartMs: Date.now()
          }, this._series.set(ye, be)
        }
        const Me = this._typeByName.get(ie.name);
        void 0 === Me ? this._typeByName.set(ie.name, ie.type) : Me === ie.type || this._typeCollisionWarned.has(ie.name) || (this._typeCollisionWarned.add(ie.name), this._logger.warn(`Metric name '${ie.name}' is already used as a ${Me}; recording it as a ${ie.type} too will blend both series in charts. Use a distinct name.`)), this._fold(be, ie.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(ee, ie) {
        switch (ee.type) {
          case "count":
            var He;
            ee.total = (null !== (He = ee.total) && void 0 !== He ? He : 0) + ie;
            break;
          case "gauge":
            ee.last = ie;
            break;
          case "histogram": {
            ee.hist || (ee.hist = {
              count: 0,
              sum: 0,
              min: ie,
              max: ie,
              bucketCounts: new Array(VK.length + 1).fill(0)
            });
            const He = ee.hist;
            He.count += 1, He.sum += ie, He.min = Math.min(He.min, ie), He.max = Math.max(He.max, ie), He.bucketCounts[function(ee, ie) {
              for (let He = 0; ie.length > He; He++)
                if (ie[He] >= ee) return He;
              return ie.length
            }(ie, VK)] += 1;
            break
          }
        }
      }
      _runBeforeSend(ee) {
        const ie = this._config.beforeSend;
        if (!ie) return ee;
        const He = gH(ie) ? ie : [ie];
        let ye = ee;
        for (const be of He) try {
          const ee = be(ye);
          if (!ee) return this._logger.info("Metric was rejected in beforeSend function"), null;
          ye = ee
        } catch (ee) {
          return this._logger.error("Error in beforeSend function for metric:", ee), null
        }
        return ye
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(AK(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var ee = this;
        return jH((function*() {
          if (ee._flushTimer.clear(), 0 === ee._series.size) return;
          const ie = ee._series;
          ee._series = new Map, ee._seriesCapWarned = !1, ee._typeByName = new Map, ee._typeCollisionWarned = new Set;
          const He = ee._generation,
            ye = yield ee._instance._sendMetricsBatch(ee._buildPayload(ie));
          if (He === ee._generation) switch (ee._retryAfter.record(ye), "retry-later" === ye.kind ? (ee._consecutiveFlushFailures++, ee._flushJitter = PK()) : (ee._consecutiveFlushFailures = 0, ee._flushJitter = 1), ee._flushTimer.pending && ee._flushTimer.arm(ee._nextFlushDelay()), ye.kind) {
            case "ok":
              return;
            case "retry-later":
              return ee._mergeWindowBack(ie), void ee._flushTimer.armNoEarlierThan(ee._nextFlushDelay());
            case "too-large":
              return void ee._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void ee._logger.error("Failed to send metrics batch:", ye.error)
          }
        }))()
      }
      _buildPayload(ee) {
        return ie = this._buildMetrics(ee), He = function(ee, ie, He) {
          return zK(ee, ie, He)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), ye = this._instance.getLibraryId(), be = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: EK(He)
            },
            scopeMetrics: [{
              scope: {
                name: ye,
                version: be
              },
              metrics: ie
            }]
          }]
        };
        var ie, He, ye, be
      }
      _buildMetrics(ee) {
        const ie = aK(Date.now()),
          He = new Map;
        for (const Ke of ee.values()) {
          var ye;
          const ee = cK(Ke.type, Ke.name, Ke.unit, void 0);
          let Ue = He.get(ee);
          Ue || (Ue = Eb({
            name: Ke.name
          }, Ke.unit && {
            unit: Ke.unit
          }), "count" === Ke.type ? Ue.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === Ke.type ? Ue.gauge = {
            dataPoints: []
          } : Ue.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, He.set(ee, Ue));
          const Fe = fK(null !== (ye = Ke.attributes) && void 0 !== ye ? ye : {}, this._logger),
            Je = aK(Ke.windowStartMs);
          if ("count" === Ke.type) {
            var be;
            const ee = {
              attributes: Fe,
              startTimeUnixNano: Je,
              timeUnixNano: ie,
              asDouble: null !== (be = Ke.total) && void 0 !== be ? be : 0
            };
            Ue.sum.dataPoints.push(ee)
          } else if ("gauge" === Ke.type) {
            var Me;
            const ee = {
              attributes: Fe,
              timeUnixNano: ie,
              asDouble: null !== (Me = Ke.last) && void 0 !== Me ? Me : 0
            };
            Ue.gauge.dataPoints.push(ee)
          } else Ke.hist && Ue.histogram.dataPoints.push({
            attributes: Fe,
            startTimeUnixNano: Je,
            timeUnixNano: ie,
            count: Ke.hist.count,
            sum: Ke.hist.sum,
            min: Ke.hist.min,
            max: Ke.hist.max,
            bucketCounts: Ke.hist.bucketCounts,
            explicitBounds: VK
          })
        }
        return Array.from(He.values())
      }
      _mergeWindowBack(ee) {
        for (const [ye, be] of ee) {
          const ee = this._series.get(ye);
          if (ee) switch (ee.windowStartMs = Math.min(ee.windowStartMs, be.windowStartMs), ee.type) {
            case "count":
              var ie, He;
              ee.total = (null !== (ie = ee.total) && void 0 !== ie ? ie : 0) + (null !== (He = be.total) && void 0 !== He ? He : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (be.hist)
                if (ee.hist) {
                  ee.hist.count += be.hist.count, ee.hist.sum += be.hist.sum, ee.hist.min = Math.min(ee.hist.min, be.hist.min), ee.hist.max = Math.max(ee.hist.max, be.hist.max);
                  for (let ie = 0; ee.hist.bucketCounts.length > ie; ie++) ee.hist.bucketCounts[ie] += be.hist.bucketCounts[ie]
                } else ee.hist = be.hist
          } else this._admitNewSeries() && this._series.set(ye, be)
        }
      }
    };
    const LK = function(ee) {
        let {
          debugEnabled: ie
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = {
          _log(He) {
            let ye;
            try {
              ye = typeof window > "u" ? void 0 : window
            } catch (ee) {
              return
            }
            for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
            ye && (be.DEBUG || ye.POSTHOG_DEBUG || ie) && !tH(ye.console) && ye.console && ("__rrweb_original__" in ye.console[He] ? ye.console[He].__rrweb_original__ : ye.console[He])(ee, ...Ke)
          },
          debug() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            He._log("debug", ...ie)
          },
          info() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            He._log("log", ...ie)
          },
          warn() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            He._log("warn", ...ie)
          },
          error() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            He._log("error", ...ie)
          },
          critical() {
            for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
            console.error(ee, ...He)
          },
          uninitializedWarning(ee) {
            He.error(`You must initialize PostHog before calling ${ee}`)
          },
          createLogger: (ie, He) => LK(`${ee} ${ie}`, He)
        };
        return He
      },
      CK = LK("[PostHog.js]"),
      vK = CK.createLogger;

    function uK(ee, ie) {
      gH(ee) && ee.forEach(ie)
    }

    function mK(ee, ie) {
      if (!PH(ee))
        if (gH(ee)) ee.forEach(ie);
        else if ((ee => ee instanceof FormData)(ee)) ee.forEach(((ee, He) => ie(ee, He)));
      else
        for (const He in ee) BH.call(ee, He) && ie(ee[He], He)
    }
    const lK = function(ee) {
      for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
      for (const be of He)
        for (const ie in be) void 0 !== be[ie] && (ee[ie] = be[ie]);
      return ee
    };

    function SK(ee) {
      const ie = Object.keys(ee);
      let He = ie.length;
      const ye = new Array(He);
      for (; He--;) ye[He] = [ie[He], ee[ie[He]]];
      return ye
    }
    const nK = function(ee) {
        return function() {
          try {
            for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
            return ee.apply(this, He)
          } catch (ee) {
            CK.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), CK.critical(ee)
          }
        }
      },
      jK = function(ee) {
        const ie = {};
        return mK(ee, (function(ee, He) {
          (ZH(ee) && ee.length > 0 || AH(ee)) && (ie[He] = ee)
        })), ie
      };

    function sK(ee) {
      const ie = Eb({}, ee);
      for (const He of ["name", "message", "stack", "cause", "errors"]) try {
        He in ee && (ie[He] = ee[He])
      } catch (ee) {}
      return ie
    }
    const IK = ["herokuapp.com", "vercel.app", "netlify.app"];

    function hK(ee) {
      const ie = null == ee ? void 0 : ee.hostname;
      if (!ZH(ie)) return !1;
      const He = ie.split(".").slice(-2).join(".");
      for (const ye of IK)
        if (He === ye) return !1;
      return !0
    }

    function NK(ee, ie, He, ye) {
      const {
        capture: be = !1,
        passive: Me = !0
      } = null != ye ? ye : {};
      null == ee || ee.addEventListener(ie, He, {
        capture: be,
        passive: Me
      })
    }

    function GK(ee) {
      return "ph_toolbar_internal" === ee.name
    }
    const rK = ee => {
      if (iH) {
        try {
          const ie = ee + "=",
            He = iH.cookie.split(";").filter((ee => ee.length));
          for (let ee = 0; He.length > ee; ee++) {
            let ye = He[ee];
            for (;
              " " == ye.charAt(0);) ye = ye.substring(1, ye.length);
            if (0 === ye.indexOf(ie)) return decodeURIComponent(ye.substring(ie.length, ye.length))
          }
        } catch (ee) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(ee) {
      return 0 > ee ? Math.ceil(ee) : Math.floor(ee)
    }), Number.isInteger || (Number.isInteger = function(ee) {
      return AH(ee) && isFinite(ee) && Math.floor(ee) === ee
    });
    var QK = class ee {
        constructor(ee) {
          if (this.bytes = ee, 16 !== ee.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(ie, He, ye, be) {
          if (!Number.isInteger(ie) || !Number.isInteger(He) || !Number.isInteger(ye) || !Number.isInteger(be) || 0 > ie || 0 > He || 0 > ye || 0 > be || ie > 0xffffffffffff || He > 4095 || ye > 1073741823 || be > 4294967295) throw new RangeError("invalid field value");
          const Me = new Uint8Array(16);
          return Me[0] = ie / Math.pow(2, 40), Me[1] = ie / Math.pow(2, 32), Me[2] = ie / Math.pow(2, 24), Me[3] = ie / Math.pow(2, 16), Me[4] = ie / 256, Me[5] = ie, Me[6] = 112 | He >>> 8, Me[7] = He, Me[8] = 128 | ye >>> 24, Me[9] = ye >>> 16, Me[10] = ye >>> 8, Me[11] = ye, Me[12] = be >>> 24, Me[13] = be >>> 16, Me[14] = be >>> 8, Me[15] = be, new ee(Me)
        }
        toString() {
          let ee = "";
          for (let ie = 0; this.bytes.length > ie; ie++) ee = ee + (this.bytes[ie] >>> 4).toString(16) + (15 & this.bytes[ie]).toString(16), 3 !== ie && 5 !== ie && 7 !== ie && 9 !== ie || (ee += "-");
          if (36 !== ee.length) throw new Error("Invalid UUIDv7 was generated");
          return ee
        }
        clone() {
          return new ee(this.bytes.slice(0))
        }
        equals(ee) {
          return 0 === this.compareTo(ee)
        }
        compareTo(ee) {
          for (let ie = 0; 16 > ie; ie++) {
            const He = this.bytes[ie] - ee.bytes[ie];
            if (0 !== He) return Math.sign(He)
          }
          return 0
        }
      },
      eU = class {
        generate() {
          const ee = this.generateOrAbort();
          if (!tH(ee)) return ee;
          {
            this._timestamp = 0;
            const ee = this.generateOrAbort();
            if (tH(ee)) throw new Error("Could not generate UUID after timestamp reset");
            return ee
          }
        }
        generateOrAbort() {
          const ee = (() => {
            const ee = Date.now();
            return AH(ee) && isFinite(ee) ? Math.min(Math.max(Math.floor(ee), 0), 0xffffffffffff) : 0
          })();
          if (ee > this._timestamp) this._timestamp = ee, this._resetCounter();
          else {
            if (this._timestamp >= ee + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return QK.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new HU
        }
      };
    let iU = ee => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let ie = 0; ee.length > ie; ie++) ee[ie] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return ee
    };
    ri && !tH(ri.crypto) && crypto.getRandomValues && (iU = ee => crypto.getRandomValues(ee));
    var HU = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (iU(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let yU;
    const bU = () => MU().toString(),
      MU = () => (yU || (yU = new eU)).generate();
    let KU = "";
    const UU = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let FU = null;
    const JU = {
      _is_supported() {
        if (!DH(FU)) return FU;
        if (FU = !1, iH) try {
          const ee = `__ph_cookie_support_${bU()}`;
          JU._set(ee, "xyz"), FU = '"xyz"' === rK(ee), JU._remove(ee)
        } catch (ye) {
          FU = !1
        }
        return FU
      },
      _error(ee) {
        CK.error("cookieStore error: " + ee)
      },
      _get: rK,
      _parse(ee) {
        let ie;
        try {
          ie = JSON.parse(JU._get(ee)) || {}
        } catch (ee) {}
        return ie
      },
      _set(ee, ie, He, ye, be) {
        if (!iH) return !1;
        try {
          let Me = "",
            Ke = "";
          const Ue = function(ee, ie) {
            if (ie) {
              let ie = function(ee) {
                let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iH;
                if (KU) return KU;
                if (!ie) return "";
                if (["localhost", "127.0.0.1"].includes(ee)) return "";
                const He = ee.split(".");
                let ye = Math.min(He.length, 8);
                const be = "dmn_chk_" + bU();
                for (; !KU && ye--;) {
                  const ee = He.slice(ye).join("."),
                    Me = be + "=1;domain=." + ee + ";path=/";
                  ie.cookie = Me + ";max-age=3", ie.cookie.includes(be) && (ie.cookie = Me + ";max-age=0", KU = ee)
                }
                return KU
              }(ee);
              if (!ie) {
                const He = (ee => {
                  const ie = ee.match(UU);
                  return ie ? ie[0] : ""
                })(ee);
                He !== ie && CK.info("Warning: cookie subdomain discovery mismatch", He, ie), ie = He
              }
              return ie ? "; domain=." + ie : ""
            }
            return ""
          }(iH.location.hostname, ye);
          if (He) {
            const ee = new Date;
            ee.setTime(ee.getTime() + 864e5 * He), Me = "; expires=" + ee.toUTCString()
          }
          be && (Ke = "; secure");
          const Fe = ee + "=" + encodeURIComponent(JSON.stringify(ie)) + Me + "; SameSite=Lax; path=/" + Ue + Ke;
          return Fe.length > 3686.4 && CK.warn("cookieStore warning: large cookie, len=" + Fe.length), iH.cookie = Fe, !0
        } catch (ee) {
          return !1
        }
      },
      _remove(ee, ie) {
        if ((null == iH ? void 0 : iH.cookie) && (!ie || !DH(rK(ee)))) try {
          JU._set(ee, "", -1, ie)
        } catch (ee) {
          return
        }
      }
    };
    let oU = null;
    const RU = {
        _is_supported() {
          if (!DH(oU)) return oU;
          let ee = !0;
          if (tH(ri)) ee = !1;
          else try {
            const ie = "__mplssupport__";
            RU._set(ie, "xyz"), '"xyz"' !== RU._get(ie) && (ee = !1), RU._remove(ie)
          } catch (be) {
            ee = !1
          }
          return ee || CK.error("localStorage unsupported; falling back to cookie store"), oU = ee, ee
        },
        _error(ee) {
          CK.error("localStorage error: " + ee)
        },
        _get(ee) {
          try {
            return null == ri ? void 0 : ri.localStorage.getItem(ee)
          } catch (ee) {
            RU._error(ee)
          }
          return null
        },
        _parse(ee) {
          try {
            return JSON.parse(RU._get(ee)) || {}
          } catch (ee) {}
          return null
        },
        _set(ee, ie) {
          try {
            return null == ri || ri.localStorage.setItem(ee, JSON.stringify(ie)), !0
          } catch (ee) {
            RU._error(ee)
          }
          return !1
        },
        _remove(ee) {
          try {
            null == ri || ri.localStorage.removeItem(ee)
          } catch (ee) {
            RU._error(ee)
          }
        }
      },
      kU = [Te, Ue, qe, Fe, ze, Re, oe, Je, pe],
      qU = [We, de, re, Qe, ti, Wi, Pe, Bi],
      fU = ee => ee + "_cpm",
      TU = ["__proto__", "constructor", "prototype"],
      pU = ee => {
        if (!dH(ee)) return {};
        const ie = {};
        return Object.keys(ee).forEach((He => {
          -1 === TU.indexOf(He) && (ie[He] = ee[He])
        })), ie
      },
      XU = function(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const He = {};
        return [...qU, ...ie].forEach((ie => {
          const ye = ee[ie];
          tH(ye) || DH(ye) || "" === ye || (He[ie] = ye)
        })), He
      },
      zU = ee => {
        let ie = 5381,
          He = 2166136261;
        for (let ye = 0; ee.length > ye; ye++) {
          const be = ee.charCodeAt(ye);
          ie = 33 * ie ^ be, He = Math.imul(He ^ be, 16777619)
        }
        return ee.length.toString(36) + "." + (ie >>> 0).toString(36) + "." + (He >>> 0).toString(36)
      },
      BU = (ee, ie) => ({
        p: ie,
        f: zU(JSON.stringify(ee))
      }),
      EU = (ee, ie) => {
        if (!ie) return {
          properties: [],
          isValid: !1
        };
        try {
          const He = JU._parse(fU(ee)),
            ye = (null == He ? void 0 : He.f) === zU(ie) && gH(He.p);
          return {
            properties: ye ? He.p : [],
            isValid: ye
          }
        } catch (ee) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      gU = (ee, ie) => ie + "|" + (JU._get(fU(ee)) || ""),
      OU = {},
      dU = {
        _is_supported: () => !0,
        _error(ee) {
          CK.error("memoryStorage error: " + ee)
        },
        _get: ee => ee in OU ? OU[ee] : null,
        _parse: ee => ee in OU ? OU[ee] : null,
        _set: (ee, ie) => (OU[ee] = ie, !0),
        _remove(ee) {
          delete OU[ee]
        }
      };
    let WU = null;
    const tU = {
      _is_supported() {
        if (!DH(WU)) return WU;
        if (WU = !0, tH(ri)) WU = !1;
        else try {
          const ee = "__support__";
          tU._set(ee, "xyz"), '"xyz"' !== tU._get(ee) && (WU = !1), tU._remove(ee)
        } catch (ye) {
          WU = !1
        }
        return WU
      },
      _error(ee) {
        CK.error("sessionStorage error: ", ee)
      },
      _get(ee) {
        try {
          return null == ri ? void 0 : ri.sessionStorage.getItem(ee)
        } catch (ee) {
          tU._error(ee)
        }
        return null
      },
      _parse(ee) {
        try {
          return JSON.parse(tU._get(ee)) || null
        } catch (ee) {}
        return null
      },
      _set(ee, ie) {
        try {
          return null == ri || ri.sessionStorage.setItem(ee, JSON.stringify(ie)), !0
        } catch (ee) {
          tU._error(ee)
        }
        return !1
      },
      _remove(ee) {
        try {
          null == ri || ri.sessionStorage.removeItem(ee)
        } catch (ee) {
          tU._error(ee)
        }
      }
    };
    var ZU = class {
      constructor(ee) {
        this._instance = ee
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
      optInOut(ee) {
        this.aT._set(this._storageKey, ee ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.aT._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: ee,
          opt_out_capturing_cookie_prefix: ie,
          consent_persistence_name: He
        } = this._instance.config;
        return He || (ie ? ie + ee : "__ph_opt_in_out_" + ee)
      }
      get _storedConsent() {
        const ee = this.aT._get(this._storageKey);
        return lH(ee) ? 1 : fH(SH, ee) ? 0 : -1
      }
      get aT() {
        const ee = this._config.opt_out_capturing_persistence_type,
          ie = "localStorage" === ee ? RU : JU,
          He = ie._is_supported() ? ie : dU;
        if (!this._persistentStore || this._persistentStore !== He) {
          this._persistentStore = He;
          const ie = "localStorage" === ee ? JU : RU;
          ie._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(lH(ie._get(this._storageKey))), ie._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == eH ? void 0 : eH.doNotTrack, null == eH ? void 0 : eH.msDoNotTrack, JH.doNotTrack, null == eH ? void 0 : eH.globalPrivacyControl].some((ee => lH(ee)))
      }
    };

    function wU(ee, ie) {
      var He;
      const ye = null == ee || null === (He = ee.config) || void 0 === He ? void 0 : He.get_current_url;
      if (!OH(ye)) return ie;
      try {
        const ee = ye(ie);
        return ZH(ee) && ee ? ee : ie
      } catch (ee) {
        return CK.error("Error in get_current_url, falling back to window.location.href", ee), ie
      }
    }

    function DU(ee) {
      var ie;
      return ee instanceof Element && ("__POSTHOG_TOOLBAR__" === ee.id || !!(null === (ie = ee.closest) || void 0 === ie ? void 0 : ie.call(ee, ".toolbar-global-fade-container")))
    }

    function PU(ee) {
      return !!ee && 1 === ee.nodeType
    }

    function AU(ee, ie) {
      return !!ee && !!ee.tagName && ee.tagName.toLowerCase() === ie.toLowerCase()
    }

    function YU(ee) {
      return !!ee && 3 === ee.nodeType
    }

    function VU(ee) {
      return !!ee && 11 === ee.nodeType && PU(ee.host)
    }

    function aU(ee) {
      return ee ? TH(ee).split(/\s+/) : []
    }

    function cU(ee, ie) {
      const He = function(ee) {
        var ie;
        const He = null == ri || null === (ie = ri.location) || void 0 === ie ? void 0 : ie.href;
        return tH(He) ? void 0 : wU(ee, He)
      }(ie);
      return !!(He && ee && ee.some((ee => He.match(ee))))
    }

    function xU(ee) {
      let ie = "";
      switch (typeof ee.className) {
        case "string":
          ie = ee.className;
          break;
        case "object":
          ie = (ee.className && "baseVal" in ee.className ? ee.className.baseVal : null) || ee.getAttribute("class") || "";
          break;
        default:
          ie = ""
      }
      return aU(ie)
    }

    function LU(ee) {
      return PH(ee) ? null : TH(ee).split(/(\s+)/).filter((ee => fF(ee))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function CU(ee) {
      let ie = "";
      return MF(ee) && !KF(ee) && ee.childNodes && ee.childNodes.length && mK(ee.childNodes, (function(ee) {
        var He;
        YU(ee) && ee.textContent && (ie += null !== (He = LU(ee.textContent)) && void 0 !== He ? He : "")
      })), TH(ie)
    }

    function vU(ee) {
      var ie;
      return tH(ee.target) ? ee.srcElement || null : (null === (ie = ee.target) || void 0 === ie ? void 0 : ie.shadowRoot) ? ee.composedPath()[0] || null : ee.target || null
    }
    const uU = ["a", "button", "form", "input", "select", "textarea", "label"];

    function mU(ee, ie) {
      const He = ee.matches || ee.matchesSelector || ee.msMatchesSelector || ee.mozMatchesSelector || ee.webkitMatchesSelector || ee.oMatchesSelector;
      try {
        return !!He && He.call(ee, ie)
      } catch (ee) {
        return !1
      }
    }

    function lU(ee, ie) {
      if (tH(ie)) return !0;
      for (const He of ee)
        if (ie.some((ee => mU(He, ee)))) return !0;
      return !1
    }

    function SU(ee) {
      const ie = ee.parentNode;
      return !(!ie || !PU(ie)) && ie
    }
    const nU = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      jU = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      sU = [...jU, "+", "-", "\u2212", "\u2013"],
      IU = sU.length + 10,
      hU = ["button", "a", "input", "select", "textarea", "label"],
      NU = ["button", "link", "tab", "menuitem", "option"],
      GU = (ee, ie) => /[a-z0-9]/i.test(ie) ? fH(sU, ie) ? new RegExp(`\\b${ie}\\b`).test(ee) : ee.includes(ie) : ee === ie,
      rU = ee => fH(hU, ee.tagName.toLowerCase()) || fH(NU, (ee.getAttribute("role") || "").toLowerCase());

    function QU(ee) {
      let ie = "",
        He = "";
      const ye = ee => {
        PU(ee) && MF(ee) && !KF(ee) && (ie += ` ${CU(ee)}`, He = He || ee.getAttribute("aria-label") || "", mK(ee.childNodes, ye))
      };
      ye(ee), ie = TH(ie.replace(/\s+/g, " "));
      const be = (fF(ie) ? ie : "").toLowerCase(),
        Me = ee.getAttribute("aria-label") || (be ? "" : He);
      return {
        safeText: be,
        ariaLabel: TH(Me).toLowerCase()
      }
    }
    const eF = [".ph-no-rageclick", ".ph-no-capture"],
      iF = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function HF(ee, ie) {
      if (!ri || yF(ee)) return !1;
      let He, ye, be;
      var Me, Ke;
      if (VH(ie) ? (He = !!ie && eF, ye = void 0, be = !1) : (He = null !== (Me = null == ie ? void 0 : ie.css_selector_ignorelist) && void 0 !== Me ? Me : eF, ye = null == ie ? void 0 : ie.content_ignorelist, be = null !== (Ke = null == ie ? void 0 : ie.ignore_text_selection) && void 0 !== Ke && Ke), !1 === He) return !1;
      if (be && function(ee) {
          return !(!ee || !PU(ee)) && (!!AU(ee, "textarea") || (AU(ee, "input") ? fH(iF, (ee.getAttribute("type") || "").toLowerCase()) : function(ee) {
            var ie;
            if (ee.isContentEditable) return !0;
            const He = null === (ie = ee.getAttribute) || void 0 === ie ? void 0 : ie.call(ee, "contenteditable");
            return "true" === He || "" === He
          }(ee)))
        }(ee)) return !1;
      const {
        targetElementList: Ue
      } = bF(ee, !1);
      return !(ye && function(ee, ie) {
        let He, {
          safeText: ye,
          ariaLabel: be
        } = ie;
        if (!0 === ee) He = jU;
        else {
          if (!gH(ee)) return !1;
          if (ee.length > IU) return CK.error(`[PostHog] content_ignorelist array cannot exceed ${IU} items. Use css_selector_ignorelist for more complex matching.`), !1;
          He = ee.map((ee => ee.toLowerCase()))
        }
        return He.some((ee => GU(ye, ee) || GU(be, ee)))
      }(ye, function(ee, ie) {
        for (const He of ie)
          if (rU(He)) return QU(He);
        for (const He of ie) {
          try {
            if ("pointer" !== (null == ri ? void 0 : ri.getComputedStyle(He).getPropertyValue("cursor"))) break
          } catch (ee) {
            break
          }
          const ie = QU(He);
          if (ie.safeText || ie.ariaLabel) return ie
        }
        return QU(ee)
      }(ee, Ue)) || lU(Ue, He))
    }
    const yF = ee => !ee || AU(ee, "html") || !PU(ee),
      bF = (ee, ie) => {
        if (!ri || yF(ee)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let He = !1;
        const ye = [ee];
        let be = ee;
        for (; be.parentNode && !AU(be, "body");) {
          if (VU(be.parentNode)) {
            ye.push(be.parentNode.host), be = be.parentNode.host;
            continue
          }
          const Me = SU(be);
          if (!Me) break;
          if (ie || uU.indexOf(Me.tagName.toLowerCase()) > -1) He = !0;
          else try {
            const ee = ri.getComputedStyle(Me);
            ee && "pointer" === ee.getPropertyValue("cursor") && (He = !0)
          } catch (ee) {}
          ye.push(Me), be = Me
        }
        return {
          parentIsUsefulElement: He,
          targetElementList: ye
        }
      };

    function MF(ee) {
      const ie = new Set;
      let He = 0;
      for (let Me = ee; Me.parentNode && !AU(Me, "body"); Me = Me.parentNode) {
        if (He++ >= 1e3 || ie.has(Me)) return !1;
        ie.add(Me);
        const ee = xU(Me);
        if (fH(ee, "ph-sensitive") || fH(ee, "ph-no-capture")) return !1
      }
      if (fH(xU(ee), "ph-include")) return !0;
      const ye = ee.type || "";
      if (ZH(ye)) switch (ye.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const be = ee.name || ee.id || "";
      return !ZH(be) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(be.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function KF(ee) {
      return !!(AU(ee, "input") && !["button", "checkbox", "submit", "reset"].includes(ee.type) || AU(ee, "select") || AU(ee, "textarea") || "true" === ee.getAttribute("contenteditable"))
    }
    const UF = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      FF = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      JF = [16, 15, 14, 13],
      oF = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      RF = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      kF = /[0-9A-Za-z_]/;

    function qF(ee) {
      let ie = 0,
        He = !1;
      for (let ye = ee.length - 1; ye >= 0; ye--) {
        let be = ee.charCodeAt(ye) - 48;
        He && (be *= 2, be > 9 && (be -= 9)), ie += be, He = !He
      }
      return ie % 10 == 0
    }

    function fF(ee) {
      let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (PH(ee)) return !1;
      if (ZH(ee)) {
        if (ee = TH(ee), ie ? UF.test((ee || "").replace(/[- ]/g, "")) : function(ee) {
            let ie;
            for (FF.lastIndex = 0; ie = FF.exec(ee);) {
              const ee = ie[2];
              if (!ee) continue;
              const He = ee.replace(/[- ]/g, "");
              for (let ie = 0; He.length > ie; ie++)
                for (const ee of JF) {
                  const ye = ie + ee;
                  if (He.length >= ye) {
                    const ee = He.slice(ie, ye);
                    if (UF.test(ee) && qF(ee)) return !0
                  }
                }
            }
            return !1
          }(ee)) return !1;
        if (ie ? oF.test(ee) : function(ee) {
            let ie;
            for (RF.lastIndex = 0; ie = RF.exec(ee);) {
              const ee = ie[1],
                He = ie[3];
              if (!(ee && He && kF.test(ee) && kF.test(He))) return !0
            }
            return !1
          }(ee)) return !1
      }
      return !0
    }

    function TF(ee) {
      let ie = CU(ee);
      return ie = `${ie} ${pF(ee)}`.trim(), fF(ie) ? ie : ""
    }

    function pF(ee) {
      let ie = "";
      return ee && ee.childNodes && ee.childNodes.length && mK(ee.childNodes, (function(ee) {
        var He;
        if (ee && "span" === (null === (He = ee.tagName) || void 0 === He ? void 0 : He.toLowerCase())) try {
          const He = CU(ee);
          ie = `${ie} ${He}`.trim(), ee.childNodes && ee.childNodes.length && (ie = `${ie} ${pF(ee)}`.trim())
        } catch (ee) {
          CK.error("[AutoCapture]", ee)
        }
      })), ie
    }

    function XF(ee) {
      return ee.replace(/"|\\"/g, '\\"')
    }

    function zF(ee) {
      const ie = ee.attr__class;
      if (ie) return gH(ie) ? ie : aU(ie)
    }
    const BF = vK("[Dead Clicks]"),
      EF = () => !0,
      gF = ee => {
        var ie;
        const He = !!(null === (ie = ee.instance.persistence) || void 0 === ie ? void 0 : ie.get_property(ue)),
          ye = ee.instance.config.capture_dead_clicks;
        return VH(ye) ? ye : !!dH(ye) || He
      };
    var OF = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(ee, ie, He) {
        this.instance = ee, this.isEnabled = ie, this.onCapture = He, this.startIfEnabledOrStop()
      }
      onRemoteConfig(ee) {
        if (!ee.ok) return;
        const ie = ee.config;
        "captureDeadClicks" in ie && (this.instance.persistence && this.instance.persistence.register({
          [ue]: ie.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(ee) {
        var ie, He, ye;
        (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.initDeadClicksAutocapture) ? ee(): null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this.instance, "dead-clicks-autocapture", (ie => {
          ie ? BF.error("failed to load script", ie) : ee()
        }))
      }
      _start() {
        var ee;
        if (iH) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (ee = JH.__PosthogExtensions__) || void 0 === ee ? void 0 : ee.initDeadClicksAutocapture)) {
            const ee = dH(this.instance.config.capture_dead_clicks) ? Eb({}, this.instance.config.capture_dead_clicks) : {};
            ee.__onCapture = this.onCapture, this.onCapture && (ee.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = JH.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, ee), this._lazyLoadedDeadClicksAutocapture.start(iH), BF.info("starting...")
          }
        } else BF.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, BF.info("stopping..."))
      }
    };
    const dF = vK("[SegmentIntegration]");

    function WF(ee, ie) {
      let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const ye = ee.config.segment;
      if (!ye) return ie();
      const {
        analytics: be,
        filterProperties: Me
      } = (ee => OH(ee.register))(Ke = ye) ? {
        analytics: Ke
      } : Ke;
      var Ke;
      ! function(ee, ie, He, ye) {
        const be = ie => {
            const be = () => ie.anonymousId() || bU();
            ee.config.get_device_id = be, ye && ie.id() && (ee.register({
              distinct_id: ie.id(),
              $device_id: be()
            }), ee.persistence.set_property(Bi, Si)), He(ye ? void 0 : ie.anonymousId() || void 0)
          },
          Me = ie.user();
        "then" in Me && OH(Me.then) ? Me.then(be) : be(Me)
      }(ee, be, (He => {
        be.register(function(ee, ie) {
          let {
            filterProperties: He
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || dF.warn("This browser does not have Promise support, and can not use the segment integration");
          const ye = (ye, be) => {
            if (!be) return ye;
            const Me = !!ie && ye.event.anonymousId === ie && !ye.event.userId;
            Me || ye.event.userId || ye.event.anonymousId === ee.get_distinct_id() || (dF.info("No userId set, resetting PostHog"), ee.reset()), Me || (ie = void 0), ye.event.userId && ye.event.userId !== ee.get_distinct_id() && (dF.info("UserId set, identifying with PostHog"), ee.identify(ye.event.userId));
            let Ke = ee.calculateEventProperties(be, ye.event.properties);
            if (!PH(He)) {
              const ee = ye.event.properties || {},
                ie = {};
              for (const He of Object.keys(Ke)) BH.call(ee, He) || (ie[He] = Ke[He]);
              const be = ((ee, ie) => {
                const He = gH(ee) ? ee : [ee];
                let ye = Eb({}, ie);
                for (const be of He) try {
                  if (ye = be(ye), PH(ye)) return null
                } catch (ee) {
                  return dF.error("Error in Segment filterProperties:", ee), null
                }
                return ye
              })(He, ie);
              if (PH(be)) return ye;
              Ke = be
            }
            return ye.event.properties = Object.assign({}, Ke, ye.event.properties), ye
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: ee => ye(ee, ee.event.event),
            page: ee => ye(ee, si),
            identify: ee => ye(ee, Ni),
            screen: ee => ye(ee, "$screen")
          }
        }(ee, He, {
          filterProperties: Me
        })).then((() => {
          ie()
        }), (ee => {
          dF.error("Failed to register the Segment integration", ee), ie()
        }))
      }), He)
    }
    const tF = "posthog-js";

    function ZF(ee) {
      let {
        organization: ie,
        projectId: He,
        prefix: ye,
        severityAllowList: be = ["error"],
        sendExceptionsToPostHog: Me = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Ke => {
        var Ue, Fe, Je, oe, Re;
        if ("*" !== be && !be.includes(Ke.level) || !ee.__loaded) return Ke;
        Ke.tags || (Ke.tags = {});
        const ke = ee.requestRouter.endpointFor("ui", `/project/${ee.config.token}/person/${ee.get_distinct_id()}`);
        Ke.tags["PostHog Person URL"] = ke, ee.sessionRecordingStarted() && (Ke.tags["PostHog Recording URL"] = ee.get_session_replay_url({
          withTimestamp: !0
        }));
        const qe = (null === (Ue = Ke.exception) || void 0 === Ue ? void 0 : Ue.values) || [],
          fe = qe.map((ee => Eb(Eb({}, ee), {}, {
            stacktrace: ee.stacktrace ? Eb(Eb({}, ee.stacktrace), {}, {
              type: "raw",
              frames: (ee.stacktrace.frames || []).map((ee => Eb(Eb({}, ee), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          Te = {
            $exception_message: (null === (Fe = qe[0]) || void 0 === Fe ? void 0 : Fe.value) || Ke.message,
            $exception_type: null === (Je = qe[0]) || void 0 === Je ? void 0 : Je.type,
            $exception_level: Ke.level,
            $exception_list: fe,
            $sentry_event_id: Ke.event_id,
            $sentry_exception: Ke.exception,
            $sentry_exception_message: (null === (oe = qe[0]) || void 0 === oe ? void 0 : oe.value) || Ke.message,
            $sentry_exception_type: null === (Re = qe[0]) || void 0 === Re ? void 0 : Re.type,
            $sentry_tags: Ke.tags
          };
        var pe;
        return ie && He && (Te.$sentry_url = (ye || "https://sentry.io/organizations/") + ie + "/issues/?project=" + He + "&query=" + Ke.event_id), Me && (null === (pe = ee.exceptions) || void 0 === pe || pe.sendExceptionEvent(Te)), Ke
      }
    }
    var wF = class {
        constructor(ee, ie, He, ye, be, Me) {
          this.name = tF, this.setupOnce = function(Ke) {
            Ke(ZF(ee, {
              organization: ie,
              projectId: He,
              prefix: ye,
              severityAllowList: be,
              sendExceptionsToPostHog: null == Me || Me
            }))
          }
        }
      },
      DF = class {
        constructor(ee) {
          this._onSessionIdChange = (ee, ie, He) => {
            He && (He.noSessionId || He.activityTimeout || He.sessionPastMaximumLength || He.crossTabAdoption) && (CK.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: ee,
              changeReason: He
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = ee, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var ee;
          this._unsubscribeSessionId = null === (ee = this._instance.sessionManager) || void 0 === ee ? void 0 : ee.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var ee;
          null === (ee = this._unsubscribeSessionId) || void 0 === ee || ee.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(ee, ie) {
          var He;
          const ye = this._previousPageViewProperties(ee, ie);
          return this._currentPageview = {
            pathname: null !== (He = null == ri ? void 0 : ri.location.pathname) && void 0 !== He ? He : "",
            pageViewId: ie,
            timestamp: ee
          }, this._instance.scrollManager.resetContext(), ye
        }
        doPageLeave(ee) {
          var ie;
          return this._previousPageViewProperties(ee, null === (ie = this._currentPageview) || void 0 === ie ? void 0 : ie.pageViewId)
        }
        doEvent() {
          var ee;
          return {
            $pageview_id: null === (ee = this._currentPageview) || void 0 === ee ? void 0 : ee.pageViewId
          }
        }
        _previousPageViewProperties(ee, ie) {
          const He = this._currentPageview;
          if (!He) return {
            $pageview_id: ie
          };
          let ye = {
            $pageview_id: ie,
            $prev_pageview_id: He.pageViewId
          };
          const be = this._instance.scrollManager.getContext();
          if (be && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: ee,
              lastScrollY: ie,
              maxScrollY: He,
              maxContentHeight: Me,
              lastContentY: Ke,
              maxContentY: Ue
            } = be;
            if (!(tH(ee) || tH(ie) || tH(He) || tH(Me) || tH(Ke) || tH(Ue))) {
              ee = Math.ceil(ee), ie = Math.ceil(ie), He = Math.ceil(He), Me = Math.ceil(Me), Ke = Math.ceil(Ke), Ue = Math.ceil(Ue);
              const be = ee > 1 ? NH(ie / ee, 0, 1, CK) : 1,
                Fe = ee > 1 ? NH(He / ee, 0, 1, CK) : 1,
                Je = Me > 1 ? NH(Ke / Me, 0, 1, CK) : 1,
                oe = Me > 1 ? NH(Ue / Me, 0, 1, CK) : 1;
              ye = lK(ye, {
                $prev_pageview_last_scroll: ie,
                $prev_pageview_last_scroll_percentage: be,
                $prev_pageview_max_scroll: He,
                $prev_pageview_max_scroll_percentage: Fe,
                $prev_pageview_last_content: Ke,
                $prev_pageview_last_content_percentage: Je,
                $prev_pageview_max_content: Ue,
                $prev_pageview_max_content_percentage: oe
              })
            }
          }
          return He.pathname && (ye.$prev_pageview_pathname = He.pathname), He.timestamp && (ye.$prev_pageview_duration = (ee.getTime() - He.timestamp.getTime()) / 1e3), ye
        }
      };
    const PF = ["flags", "surveys"],
      AF = {
        [Oe]: {
          exposure: "hidden"
        },
        [Ze]: {
          exposure: "hidden"
        },
        [we]: {
          exposure: "hidden"
        },
        [Ve]: {
          exposure: "hidden"
        },
        [Pe]: {
          exposure: "hidden"
        },
        [Ye]: {
          exposure: "hidden"
        },
        [ae]: {
          exposure: "event"
        },
        [ce]: {
          exposure: "hidden"
        },
        [le]: {
          exposure: "hidden"
        },
        [xe]: {
          exposure: "event"
        },
        [Le]: {
          exposure: "hidden"
        },
        [Ce]: {
          exposure: "event"
        },
        [ve]: {
          exposure: "event"
        },
        [ue]: {
          exposure: "event"
        },
        [me]: {
          exposure: "hidden"
        },
        [Se]: {
          exposure: "event"
        },
        [ne]: {
          exposure: "hidden"
        },
        [je]: {
          exposure: "hidden"
        },
        [re]: {
          exposure: "hidden"
        },
        [Qe]: {
          exposure: "event"
        },
        [se]: {
          exposure: "event",
          shouldSkipFromEventProperties: ee => DH(ee)
        },
        [ei]: {
          exposure: "event"
        },
        [ii]: {
          exposure: "event"
        },
        [Hi]: {
          exposure: "event"
        },
        [yi]: {
          exposure: "event"
        },
        [bi]: {
          exposure: "hidden"
        },
        [qe]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Ue]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Ke]: {
          exposure: "hidden"
        },
        [Fe]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [ze]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Re]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [ke]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Be]: {
          exposure: "hidden"
        },
        [Ee]: {
          exposure: "hidden"
        },
        [Te]: {
          exposure: "hidden"
        },
        [fe]: {
          exposure: "hidden"
        },
        [Ki]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [Ui]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [Fi]: {
          exposure: "event"
        },
        [Ji]: {
          exposure: "hidden"
        },
        [oi]: {
          exposure: "hidden"
        },
        [Ri]: {
          exposure: "hidden"
        },
        [ki]: {
          exposure: "hidden"
        },
        [qi]: {
          exposure: "hidden"
        },
        [fi]: {
          exposure: "event"
        },
        [Ti]: {
          exposure: "event"
        },
        [Xi]: {
          exposure: "event"
        },
        [zi]: {
          exposure: "event"
        },
        [pe]: {
          exposure: "hidden"
        },
        [Xe]: {
          exposure: "hidden"
        },
        [Mi]: {
          exposure: "event"
        },
        [Je]: {
          exposure: "hidden"
        },
        [oe]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [Bi]: {
          exposure: "hidden"
        },
        [Ei]: {
          exposure: "hidden"
        },
        [gi]: {
          exposure: "hidden"
        },
        [Oi]: {
          exposure: "hidden"
        },
        [di]: {
          exposure: "hidden"
        },
        [Wi]: {
          exposure: "hidden"
        },
        [ti]: {
          exposure: "hidden"
        },
        [Ie]: {
          exposure: "event"
        },
        [he]: {
          exposure: "event"
        },
        [Ne]: {
          exposure: "event"
        },
        [Ge]: {
          exposure: "event"
        },
        [Di]: {
          exposure: "event"
        },
        [Pi]: {
          exposure: "event"
        },
        [Ai]: {
          exposure: "hidden"
        },
        [Yi]: {
          exposure: "hidden"
        },
        [Vi]: {
          exposure: "hidden"
        },
        [ai]: {
          exposure: "hidden"
        },
        [ci]: {
          exposure: "hidden"
        },
        [xi]: {
          exposure: "hidden"
        },
        [Li]: {
          exposure: "hidden"
        },
        [Ci]: {
          exposure: "hidden"
        },
        [vi]: {
          exposure: "hidden"
        },
        [ui]: {
          exposure: "event"
        }
      },
      YF = [
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
      VF = ee => {
        const ie = AF[ee];
        if (ie) return ie;
        for (const [He, ye] of YF)
          if (0 === ee.indexOf(He)) return ye
      };

    function aF() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (ye) {
        return
      }
    }
    const cF = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (ye) {
          return !1
        }
      },
      xF = (ee, ie) => ee >= ie && cF(),
      LF = (ee, ie, He, ye) => {
        if (0 === ee) {
          if (cF()) {
            const ee = ie + 1;
            return ee === He && ye(), ee
          }
          return ie
        }
        return 0
      },
      CF = (ee, ie) => {
        try {
          let He;
          return JSON.stringify(ee, ((ee, ie) => {
            var ye;
            return CH(ie) ? (null !== (ye = He) && void 0 !== ye || (He = new WeakMap), He.has(ie) || He.set(ie, sK(ie)), He.get(ie)) : "bigint" == typeof ie ? ie.toString() : ie
          }), ie)
        } catch (ie) {
          return XH(ee)
        }
      },
      vF = ee => {
        const ie = null == iH ? void 0 : iH.createElement("a");
        return tH(ie) ? null : (ie.href = ee, ie)
      },
      uF = function(ee, ie) {
        const He = ((ee.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let ye;
        for (let be = 0; He.length > be; be++) {
          const ee = He[be].split("=");
          if (ee[0] === ie) {
            ye = ee;
            break
          }
        }
        if (!gH(ye) || 2 > ye.length) return "";
        {
          let ee = ye[1];
          try {
            ee = decodeURIComponent(ee)
          } catch (ie) {
            CK.error("Skipping decoding for malformed query param: " + ee)
          }
          return ee.replace(/\+/g, " ")
        }
      },
      mF = function(ee, ie, He) {
        if (!ee || !ie || !ie.length) return ee;
        const ye = ee.split("#"),
          be = ye[1],
          Me = (ye[0] || "").split("?"),
          Ke = Me[1],
          Ue = Me[0],
          Fe = (Ke || "").split("&"),
          Je = [];
        for (let Re = 0; Fe.length > Re; Re++) {
          const ee = Fe[Re].split("=");
          gH(ee) && (ie.includes(ee[0]) ? Je.push(ee[0] + "=" + He) : Je.push(Fe[Re]))
        }
        let oe = Ue;
        return null != Ke && (oe += "?" + Je.join("&")), null != be && (oe += "#" + be), oe
      },
      lF = function(ee, ie) {
        const He = ee.match(new RegExp(ie + "=([^&]*)"));
        return He ? He[1] : null
      },
      SF = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      nF = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...SF],
      jF = "<masked>",
      sF = ["li_fat_id"];

    function IF(ee, ie, He) {
      if (!iH) return {};
      const ye = ie ? [...SF, ...He || []] : [],
        be = hF(mF(iH.URL, ye, jF), ee),
        Me = function() {
          const ee = {};
          return mK(sF, (function(ie) {
            const He = rK(ie);
            ee[ie] = He || null
          })), ee
        }();
      return lK(Me, be)
    }

    function hF(ee, ie) {
      const He = nF.concat(ie || []),
        ye = {};
      return mK(He, (function(ie) {
        const He = uF(ee, ie);
        ye[ie] = He || null
      })), ye
    }

    function NF(ee) {
      const ie = function(ee) {
          return ee ? 0 === ee.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === ee.search("https?://(.*)bing.com") ? "bing" : 0 === ee.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === ee.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(ee),
        He = "yahoo" != ie ? "q" : "p",
        ye = {};
      if (!DH(ie)) {
        ye.$search_engine = ie;
        const ee = iH ? uF(iH.referrer, He) : "";
        ee.length && (ye.ph_keyword = ee)
      }
      return ye
    }

    function GF() {
      return navigator.language || navigator.userLanguage
    }

    function rF() {
      const ee = GF();
      return "string" == typeof ee ? ee.split("-")[0] : void 0
    }
    const QF = "$direct";

    function eJ() {
      return (null == iH ? void 0 : iH.referrer) || QF
    }

    function iJ(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const ye = ee ? [...SF, ...ie || []] : [],
        be = He ? kb(null == HH ? void 0 : HH.href) : null == HH ? void 0 : HH.href,
        Me = null == be ? void 0 : be.substring(0, 1e3);
      return {
        r: eJ().substring(0, 1e3),
        u: Me ? mF(Me, ye, jF) : void 0
      }
    }

    function HJ(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var He;
      const {
        r: ye,
        u: be
      } = ee, Me = ie ? kb(be) : be, Ke = {
        $referrer: ye,
        $referring_domain: null == ye ? void 0 : ye == QF ? QF : null === (He = vF(ye)) || void 0 === He ? void 0 : He.host
      };
      if (Me) {
        Ke.$current_url = Me;
        const ee = vF(Me);
        Ke.$host = null == ee ? void 0 : ee.host, Ke.$pathname = null == ee ? void 0 : ee.pathname;
        const ie = hF(Me);
        lK(Ke, ie)
      }
      if (ye) {
        const ee = NF(ye);
        lK(Ke, ee)
      }
      return Ke
    }

    function yJ() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (ye) {
        return
      }
    }
    const bJ = {
        flags: oe,
        surveys: Ui
      },
      MJ = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      KJ = ee => `${ee}_cookie_identity_change_pending`,
      UJ = ee => {
        let ie = "",
          He = 0;
        for (const ye of ee) {
          const ee = encodeURIComponent(JSON.stringify(ye).slice(1, -1)).length;
          if (He + ee > 1e3) break;
          ie += ye, He += ee
        }
        return ie
      },
      FJ = "main",
      JJ = [qe, Ue, Fe, ze, Re, oe, ke, Te],
      oJ = ee => -1 !== JJ.indexOf(ee),
      RJ = [Pe, Ye],
      kJ = ee => -1 !== RJ.indexOf(ee),
      qJ = (ee, ie) => {
        try {
          return JSON.stringify(ee) === JSON.stringify(ie)
        } catch (Me) {
          return ee === ie
        }
      },
      fJ = ee => {
        if (!ee) return {};
        const ie = JSON.parse(ee);
        return dH(ie) ? ie : {}
      },
      TJ = (ee, ie) => {
        mK(ee, ((He, ye) => {
          const be = VF(ye);
          be && "event" !== be.exposure || {}.hasOwnProperty.call(ie, ye) || delete ee[ye]
        }))
      };
    var pJ = class {
      constructor(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !ee.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = ee, this._ownsSplitStorage = He, this.props = {}, this._campaign_params_url = void 0, this._name = (ee => {
            let ie = "";
            return ee.token && (ie = ee.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), ee.persistence_name ? "ph_" + ee.persistence_name : "ph_" + ie + "_posthog"
          })(ee), this._disabled = ee.disable_persistence || !!ie, this.aT = this._buildStorage(ee), this._splitStorage = this._resolveSplitStorage(ee), this.load(ye), this._markLoadedCrossTabFeatureFlagChangesPending(), ee.debug && CK.info("Persistence loaded", ee.persistence, Eb({}, this.props)), this.update_config(ee, ee, ie), this.save(), ri) {
          const ee = () => this.flush();
          NK(ri, "beforeunload", ee, {
            capture: !1
          }), NK(ri, "pagehide", ee, {
            capture: !1
          }), this._onStorage = ee => {
            if (this._splitStorageEligible && (!ee.storageArea || ee.storageArea === (null == ri ? void 0 : ri.localStorage)) && ee.key)
              if (ee.key !== this._name) {
                if (this._splitStorage) {
                  const ie = PF.find((ie => ee.key === this._groupEntryName(ie)));
                  ie && this._syncCrossTabFeatureFlagProperties(ee.key, ie)
                }
              } else this._syncCrossTabFeatureFlagProperties(ee.key, FJ)
          }, NK(ri, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(ee) {
        Object.entries(ee).forEach((ee => {
          let [ie, He] = ee;
          const ye = this._pendingCrossTabFeatureFlagChanges.get(ie);
          if (!oJ(ie) || !0 === ye) return;
          if (!0 === He) return void this._setCrossTabFeatureFlagChangesPending(ie, !0);
          const be = new Set(ye || []);
          He.forEach((ee => be.add(ee))), be.size && this._setCrossTabFeatureFlagChangesPending(ie, be)
        }))
      }
      onCrossTabFeatureFlagChange(ee) {
        return this._crossTabFeatureFlagHandlers.add(ee), () => this._crossTabFeatureFlagHandlers.delete(ee)
      }
      destroy() {
        this._onStorage && ri && (ri.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(ee, ie) {
        let He, ye, be = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (ye = RU._get(ee), DH(ye)) {
            const ee = this._slotWriteState(ie);
            return ee.storageValue = null, ie !== FJ && (ee.persisted = !1), !1
          }
          He = fJ(ye)
        } catch (ee) {
          return !1
        }
        const Me = ie === FJ ? He : RU._parse(this._name);
        if (Me && this._hasCrossTabFeatureFlagIdentityMismatch(Me)) return !1;
        const Ke = this._mergeCrossTabFeatureFlagProperties(He, ie, be);
        return ie === FJ && this._splitStorage && !qJ(this._partitionProps().main, He) || this._rememberCrossTabStorageFingerprint(He, ie, !0, ye), Ke
      }
      _hasCrossTabFeatureFlagIdentityMismatch(ee) {
        const ie = this.props[de],
          He = ee[de];
        return !tH(ie) && !tH(He) && ie !== He
      }
      _rememberCrossTabStorageFingerprint(ee, ie, He, ye) {
        const be = this._slotWriteState(ie);
        be.storageValue = ye, ie !== FJ && (be.persisted = He);
        try {
          be.fingerprint = this._entryFingerprint(ee, ie)
        } catch (ee) {
          be.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(ee, ie, He) {
        let ye = !1;
        return JJ.forEach((He => {
          var be;
          const Me = null === (be = VF(He)) || void 0 === be ? void 0 : be.storageGroup;
          if (ie === FJ && this._splitStorage && Me || ie !== FJ && Me !== ie) return;
          const Ke = He in ee,
            Ue = this._mergePendingCrossTabFeatureFlagChanges(He, Ke ? ee[He] : void 0),
            Fe = this._pendingCrossTabFeatureFlagChanges.has(He) ? He in this.props : Ke;
          Fe === He in this.props && qJ(Ue, this.props[He]) || (Fe ? this._setProp(He, Ue, !1) : this._deleteProp(He, !1), ye = !0)
        })), ye && He && this._crossTabFeatureFlagHandlers.forEach((ee => ee())), ye
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const ee = RU._get(this._name),
            ie = this._slotWriteState(FJ);
          let He, ye = !1,
            be = !1;
          if (ee !== ie.storageValue)
            if (DH(ee)) ie.storageValue = null;
            else {
              if (He = fJ(ee), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(He), this._crossTabFeatureFlagIdentityMismatch) return !1;
              be = this._mergeCrossTabFeatureFlagProperties(He, FJ, !1), !this._splitStorage || qJ(this._partitionProps().main, He) ? this._rememberCrossTabStorageFingerprint(He, FJ, !0, ee) : ie.storageValue = ee, ye = !0
            } return this._splitStorage && PF.forEach((ee => {
            const ie = RU._get(this._groupEntryName(ee)),
              Me = this._slotWriteState(ee),
              Ke = He || {},
              Ue = ye && JJ.some((ie => {
                var He;
                return (null === (He = VF(ie)) || void 0 === He ? void 0 : He.storageGroup) === ee && ie in Ke
              }));
            if (ie === Me.storageValue && !Ue) return;
            if (DH(ie)) return Me.storageValue = null, Me.persisted = !1, void(Ue && (be = this._mergeCrossTabFeatureFlagProperties(Ke, ee, !1) || be));
            const Fe = fJ(ie);
            be = this._mergeCrossTabFeatureFlagProperties(Fe, ee, !1) || be, this._rememberCrossTabStorageFingerprint(Fe, ee, !0, ie)
          })), be
        } catch (ye) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(ee, ie) {
        this._pendingCrossTabFeatureFlagChanges.set(ee, ie);
        const He = VF(ee);
        (null == He ? void 0 : He.volatile) || (this._slotWriteState((this._splitStorage ? null == He ? void 0 : He.storageGroup : void 0) || FJ).fingerprint = void 0, this._markGroupDirty(ee))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        JJ.forEach((ee => this._pendingCrossTabFeatureFlagChanges.set(ee, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const ee = RU._get(this._name),
            ie = fJ(ee);
          this._slotWriteState(FJ).storageValue = ee, JJ.forEach((ee => {
            var He;
            const ye = this._splitStorage ? null === (He = VF(ee)) || void 0 === He ? void 0 : He.storageGroup : void 0,
              be = ye ? RU._get(this._groupEntryName(ye)) : null;
            if (ye) {
              const ee = this._slotWriteState(ye);
              ee.storageValue = be, ee.persisted = !DH(be)
            }
            const Me = ye && !DH(be) ? fJ(be) : ie;
            ee in this.props ? this._markPendingCrossTabFeatureFlagChanges(ee, Me[ee], this.props[ee]) : ee in Me && this._setCrossTabFeatureFlagChangesPending(ee, !0)
          }))
        } catch (ye) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(ee, ie) {
        const He = this._pendingCrossTabFeatureFlagChanges.get(ee);
        if (!He) return ie;
        if (!0 === He) return this.props[ee];
        if ("$active_feature_flags" === ee) {
          const ye = new Set(gH(ie) ? ie : []),
            be = new Set(gH(this.props[ee]) ? this.props[ee] : []);
          return He.forEach((ee => be.has(ee) ? ye.add(ee) : ye.delete(ee))), Array.from(ye)
        }
        const ye = dH(ie) ? Eb({}, ie) : {},
          be = dH(this.props[ee]) ? this.props[ee] : {};
        return He.forEach((ee => {
          ee in be ? ye[ee] = be[ee] : delete ye[ee]
        })), ye
      }
      _markPendingCrossTabFeatureFlagChanges(ee, ie, He) {
        if (!oJ(ee)) return;
        const ye = this._pendingCrossTabFeatureFlagChanges.get(ee);
        if (!0 === ye) return;
        let be = ie;
        if (this._splitStorageEligible) try {
          var Me;
          const ie = this._splitStorage ? null === (Me = VF(ee)) || void 0 === Me ? void 0 : Me.storageGroup : void 0,
            He = ie ? this._groupEntryName(ie) : this._name;
          be = fJ(RU._get(He))[ee]
        } catch (ee) {}
        const Ke = new Set(ye || []);
        if ("$active_feature_flags" === ee) {
          if (!tH(ie) && !gH(ie) || !tH(be) && !gH(be) || !gH(He)) return void this._setCrossTabFeatureFlagChangesPending(ee, !0);
          const ye = new Set(ie || []),
            Me = new Set(be || []),
            Ue = new Set(He);
          new Set([...ye, ...Ue]).forEach((ee => {
            ye.has(ee) !== Ue.has(ee) && Ke.add(ee)
          })), Ke.forEach((ee => {
            Me.has(ee) === Ue.has(ee) && Ke.delete(ee)
          }))
        } else {
          if (!dH(He)) return void(qJ(be, He) ? this._pendingCrossTabFeatureFlagChanges.delete(ee) : this._setCrossTabFeatureFlagChangesPending(ee, !0));
          {
            if (!tH(ie) && !dH(ie) || tH(ie) && WH(He) && tH(be)) return void this._setCrossTabFeatureFlagChangesPending(ee, !0);
            const ye = dH(ie) ? ie : {},
              Me = dH(be) ? be : {};
            new Set([...Object.keys(ye), ...Object.keys(He)]).forEach((ee => {
              ee in ye == ee in He && qJ(ye[ee], He[ee]) || Ke.add(ee)
            })), Ke.forEach((ee => {
              ee in Me == ee in He && qJ(Me[ee], He[ee]) && Ke.delete(ee)
            }))
          }
        }
        Ke.size ? this._setCrossTabFeatureFlagChangesPending(ee, Ke) : this._pendingCrossTabFeatureFlagChanges.delete(ee)
      }
      _saveDebounceMs() {
        var ee;
        const ie = null === (ee = this._config) || void 0 === ee ? void 0 : ee.persistence_save_debounce_ms;
        return AH(ie) && ie > 0 ? ie : 0
      }
      _rememberCurrentCookieProperties(ee) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (ee) try {
            const ie = XU(ee, this._config.cookie_persisted_properties || []),
              He = BU(ie, this._config.cookie_persisted_properties || []),
              ye = JSON.stringify(ie) + "|" + JSON.stringify(He),
              be = JU._get(this._name) || void 0;
            be && gU(this._name, be) === ye && (this._lastSeenCookiePropertiesFingerprint = ye, this._lastSeenMainCookieValue = be)
          } catch (ee) {} else try {
            const ee = JU._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = ee ? gU(this._name, ee) : void 0, this._lastSeenMainCookieValue = ee
          } catch (ee) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(ee) {
        let ie, He = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !He || this._cookieSyncSuppressed || !ee.cookieWinsOnConflict || "localstorage+cookie" !== ee.persistence.toLowerCase()) return !1;
        try {
          ie = JU._get(this._name) || void 0
        } catch (ee) {}
        if (!ie || ie === this._lastSeenMainCookieValue) return !1;
        const ye = gU(this._name, ie);
        let be;
        try {
          be = pU(JSON.parse(ie))
        } catch (ee) {
          return !1
        }
        if ((JU._get(this._name) || void 0) !== ie) return !1;
        this._lastSeenCookiePropertiesFingerprint = ye, this._lastSeenMainCookieValue = ie;
        const Me = EU(this._name, ie),
          Ke = [...qU, ...Me.properties],
          ke = {};
        if (Object.keys(be).forEach((ee => {
            const ie = be[ee];
            (tH(ie) || DH(ie) || "" === ie || "$user_state" === ee && "anonymous" !== ie && "identified" !== ie) && (ke[ee] = !0, delete be[ee])
          })), WH(be)) return !1;
        const Xe = "distinct_id" in be || "anonymous" === be.$user_state || "identified" === be.$user_state,
          Be = this.props,
          Ee = Be[de],
          ge = Be[Bi],
          Oe = lK({}, Be);
        [...qU, ...ee.cookie_persisted_properties || []].forEach((ee => {
          if (-1 !== Ke.indexOf(ee) && !(ee in be) && !ke[ee] && (Xe || "distinct_id" !== ee && "$user_state" !== ee)) {
            const ie = Oe[ee];
            (Me.isValid || -1 === qU.indexOf(ee) || !1 !== ie && 0 !== ie) && delete Oe[ee]
          }
        })), this.props = lK(Oe, be), JJ.forEach((ee => {
          const ie = ee in this.props;
          ee in Be === ie && qJ(Be[ee], this.props[ee]) || (ie ? this._markPendingCrossTabFeatureFlagChanges(ee, Be[ee], this.props[ee]) : this._setCrossTabFeatureFlagChangesPending(ee, !0))
        })), !Xe || "$user_state" in be || "$user_state" in this.props || this._setProp(Bi, li);
        const We = this.props[de],
          te = this.props[Bi];
        return !Xe || We === Ee && te === ge || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, tU._set(KJ(this._name), !0), this._deleteProp(Te), this._deleteProp(Ue), this._deleteProp(qe), this._deleteProp(Fe), this._deleteProp(ze), this._deleteProp(Re), this._deleteProp(oe), this._deleteProp(Je), this._deleteProp(pe), "anonymous" !== te || "identified" !== ge && "anonymous" !== be.$user_state && (tH(Ee) || We === Ee) || (TJ(this.props, be), this._deleteProp(fe)), "identified" === te ? this.props.$user_id = We : delete this.props.$user_id, this._deleteProp(Ze)), !0
      }
      consumeCookieIdentityChange() {
        const ee = KJ(this._name),
          ie = this._cookieIdentityChangePending || !!tU._get(ee);
        return this._cookieIdentityChangePending = !1, ie && tU._remove(ee), ie
      }
      _beginCookieSyncSuppression() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !ee || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[FJ], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          ee ? this._publishSuppressedCookieSnapshot() : tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(ee) {
        -1 === MJ.indexOf(ee.persistence.toLowerCase()) && (CK.critical("Unknown persistence type " + ee.persistence + "; falling back to localStorage+cookie"), ee.persistence = "localStorage+cookie");
        const ie = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const ye = [...qU, ...ee];
          return Eb(Eb({}, RU), {}, {
            _parse(ee) {
              try {
                let Me, Ke = {};
                try {
                  Me = JU._get(ee) || void 0, Ke = Me ? pU(JSON.parse(Me)) : {}
                } catch (ee) {}
                const Ue = JSON.parse(RU._get(ee) || "{}");
                let Fe;
                if (ie) {
                  const ie = EU(ee, Me),
                    He = [...qU, ...ie.properties],
                    Je = {};
                  Object.keys(Ke).forEach((ee => {
                    const ie = Ke[ee];
                    DH(ie) || "" === ie || "$user_state" === ee && "anonymous" !== ie && "identified" !== ie || (Je[ee] = ie)
                  }));
                  const oe = "distinct_id" in Je || "anonymous" === Je.$user_state || "identified" === Je.$user_state;
                  if (Object.keys(Je).length > 0) {
                    var be;
                    const ee = Ue[de],
                      Me = null !== (be = Ue.$user_state) && void 0 !== be ? be : li;
                    ye.forEach((ee => {
                      if (-1 !== He.indexOf(ee) && !(ee in Ke) && (oe || "distinct_id" !== ee && "$user_state" !== ee)) {
                        const He = Ue[ee];
                        (ie.isValid || -1 === qU.indexOf(ee) || !1 !== He && 0 !== He) && delete Ue[ee]
                      }
                    })), !oe || "$user_state" in Ke || "$user_state" in Ue || (Ue[Bi] = li), !oe || ("distinct_id" in Je ? Je[de] : Ue[de]) === ee && ("$user_state" in Je ? Je[Bi] : Ue[Bi]) === Me || (kU.forEach((ee => delete Ue[ee])), "identified" === Je.$user_state && "distinct_id" in Je ? Ue.$user_id = Je[de] : delete Ue.$user_id, "identified" !== Je.$user_state && (delete Ue[Mi], delete Ue[fe]), delete Ue.__alias)
                  }
                  Fe = lK(Ue, Je)
                } else Fe = lK(Ke, Ue);
                return He() || RU._set(ee, Fe), Fe
              } catch (ee) {}
              return null
            },
            _set(He, ye, be, Me, Ke, Ue) {
              const Fe = RU._set(He, ye, void 0, void 0, Ue);
              try {
                const Je = XU(ye, ee);
                if (Object.keys(Je).length) {
                  if (ie) {
                    const ie = fU(He),
                      oe = BU(Je, ee);
                    if (JU._set(ie, oe, be, Me, Ke, Ue), JU._get(ie) !== JSON.stringify(oe)) {
                      JU._remove(ie, Me);
                      const ee = XU(ye);
                      return JU._set(He, ee, be, Me, Ke, Ue), Fe
                    }
                  }
                  JU._set(He, Je, be, Me, Ke, Ue)
                }
              } catch (ee) {
                RU._error(ee)
              }
              return Fe
            },
            _remove(ee, ie) {
              try {
                null == ri || ri.localStorage.removeItem(ee), JU._remove(ee, ie), JU._remove(fU(ee), ie)
              } catch (ee) {
                RU._error(ee)
              }
            }
          })
        }(ee.cookie_persisted_properties || [], ee.cookieWinsOnConflict, (() => !!this._disabled));
        let He, ye = !1,
          be = !1;
        const Me = ee.persistence.toLowerCase();
        return "localstorage" === Me && RU._is_supported() ? (He = RU, be = !0) : "localstorage+cookie" === Me && ie._is_supported() ? (He = ie, be = !0, ye = !0) : "sessionstorage" === Me && tU._is_supported() ? He = tU : "memory" === Me ? He = dU : "cookie" === Me && JU._is_supported() ? (He = JU, ye = !0) : ie._is_supported() ? (He = ie, be = !0, ye = !0) : JU._is_supported() ? (He = JU, ye = !0) : He = dU, this._splitStorageEligible = be, this._storesIdentityInCookie = ye, He
      }
      _groupEntryName(ee) {
        return `${this._name}__${ee}`
      }
      _resolveSplitStorage(ee) {
        return this._splitStorageEligible && !!ee.split_storage
      }
      properties() {
        const ee = {};
        return mK(this.props, ((ie, He) => {
          const ye = VF(He);
          if (!ye || "event" === ye.exposure) {
            var be;
            if (null == ye || null === (be = ye.shouldSkipFromEventProperties) || void 0 === be ? void 0 : be.call(ye, ie)) return;
            ee[He] = ie
          }
        })), ee
      }
      load() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !ee) return;
        const ie = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          He = ie ? RU._parse(this._name) : null;
        let ye = {};
        if (ie) try {
          ye = pU(JU._parse(this._name)), mK(ye, ((ee, ie) => {
            (tH(ee) || DH(ee) || "" === ee) && delete ye[ie]
          }))
        } catch (ee) {}
        const be = this.aT._parse(this._name);
        if (be && (this.props = lK({}, be)), this._splitStorage && this._loadGroupEntries(), ie && be) {
          var Me, Ke;
          const ee = null == He ? void 0 : He[de],
            ie = null !== (Me = null == He ? void 0 : He.$user_state) && void 0 !== Me ? Me : li,
            Ue = be[de],
            Fe = null !== (Ke = be.$user_state) && void 0 !== Ke ? Ke : li;
          if (Ue !== ee || Fe !== ie) {
            this._cookieIdentityChangePending = !0, this._disabled || tU._set(KJ(this._name), !0);
            const He = lK({}, this.props);
            kU.forEach((ee => delete He[ee])), "anonymous" !== Fe || "identified" !== ie && "anonymous" !== ye.$user_state && (tH(ee) || Ue === ee) || (TJ(He, ye), delete He[fe]), this.props = He;
            const be = new Set;
            kU.forEach((ee => {
              var ie;
              const He = null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup;
              He && be.add(He)
            })), be.forEach((ee => {
              if (this._disabled) return;
              const ie = {};
              mK(this.props, ((He, ye) => {
                var be;
                (null === (be = VF(ye)) || void 0 === be ? void 0 : be.storageGroup) === ee && (ie[ye] = He)
              })), WH(ie) ? (RU._remove(this._groupEntryName(ee)), this._slotState[ee] = {}) : RU._set(this._groupEntryName(ee), ie) && (this._slotState[ee] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(ie, ee)
              })
            }))
          }
        }
        tU._get(KJ(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const ee of PF) {
          const ie = RU._parse(this._groupEntryName(ee));
          if (ie && !WH(ie)) {
            const He = this._slotWriteState(ee);
            He.persisted = !0, this._mainCarriesGroupKey(ee) || (He.fingerprint = this._entryFingerprint(ie, ee)), this._groupEntryIsStale(ee, ie) || lK(this.props, ie)
          }
        }
      }
      _mainCarriesGroupKey(ee) {
        return Object.keys(this.props).some((ie => {
          var He;
          return (null === (He = VF(ie)) || void 0 === He ? void 0 : He.storageGroup) === ee
        }))
      }
      _groupEntryIsStale(ee, ie) {
        const He = bJ[ee];
        if (!He) return !1;
        const ye = ie[He],
          be = this.props[He];
        return AH(ye) && AH(be) && be > ye
      }
      refreshKey(ee) {
        var ie;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(ee)) return;
        const He = this._splitStorage ? null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup : void 0,
          ye = He ? RU._parse(this._groupEntryName(He)) : this.aT._parse(this._name);
        if (ye && ee in ye) this._setProp(ee, ye[ee], !1);
        else {
          if (He) {
            const ie = this.aT._parse(this._name);
            if (ie && ee in ie) return void this._setProp(ee, ie[ee], !1)
          }
          this._deleteProp(ee, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const ee = this._saveDebounceMs();
        ee > 0 ? tH(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), ee)) : this._writeNow()
      }
      flush() {
        tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !ee) return;
        ee || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || RJ.forEach((ee => this.refreshKey(ee))));
        const ie = !ee && !this._storageMigrationInProgress;
        ie || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const He = !!ie && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && CK.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(He && this._crossTabFeatureFlagHandlers.forEach((ee => ee())));
        const ye = this._writeEntry(this.aT, this._name, this.props, FJ);
        "written" === ye && this._rememberCurrentCookieProperties(this.props), "failed" !== ye && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), He && this._crossTabFeatureFlagHandlers.forEach((ee => ee()))
      }
      _writeNowSplit() {
        const {
          main: ee,
          groups: ie
        } = this._partitionProps(), He = this._writeEntry(this.aT, this._name, ee, FJ);
        "written" === He && this._rememberCurrentCookieProperties(ee), "failed" !== He && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), JJ.forEach((ee => {
          var ie;
          (null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(ee)
        })));
        for (const be of PF) {
          var ye;
          const ee = ie[be];
          if (WH(ee) && !(null === (ye = this._slotState[be]) || void 0 === ye ? void 0 : ye.persisted)) {
            JJ.forEach((ee => {
              var ie;
              (null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup) === be && this._pendingCrossTabFeatureFlagChanges.delete(ee)
            }));
            continue
          }
          const He = this._writeEntry(RU, this._groupEntryName(be), ee, be);
          "failed" !== He && JJ.forEach((ee => {
            const ie = VF(ee);
            (null == ie ? void 0 : ie.storageGroup) !== be || "written" !== He && ie.volatile || this._pendingCrossTabFeatureFlagChanges.delete(ee)
          }))
        }
      }
      _partitionProps() {
        const ee = {},
          ie = {
            flags: {},
            surveys: {}
          };
        return mK(this.props, ((He, ye) => {
          var be;
          const Me = null === (be = VF(ye)) || void 0 === be ? void 0 : be.storageGroup;
          Me ? ie[Me][ye] = He : ee[ye] = He
        })), {
          main: ee,
          groups: ie
        }
      }
      _entryFingerprint(ee, ie) {
        if (ie === FJ) return JSON.stringify(ee) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const He = {};
        return mK(ee, ((ee, ie) => {
          var ye;
          He[ie] = (null === (ye = VF(ie)) || void 0 === ye ? void 0 : ye.volatile) ? "__volatile__" : ee
        })), JSON.stringify(He)
      }
      _writeEntry(ee, ie, He, ye) {
        const be = this._slotWriteState(ye);
        if (ye !== FJ && !be.yT && !tH(be.fingerprint)) return "skipped";
        let Me;
        try {
          if (Me = this._entryFingerprint(He, ye), Me === be.fingerprint) return be.yT = !1, "skipped"
        } catch (ee) {
          Me = void 0
        }
        return ee._set(ie, He, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (be.yT = !1, ye !== FJ && (be.persisted = !0), tH(Me) || (be.fingerprint = Me), this._splitStorageEligible && (be.storageValue = RU._get(ie)), "written") : (this._config.debug && CK.warn(`failed to persist storage entry "${ie}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: ee = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), tH(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.aT._remove(this._name, !1), this.aT._remove(this._name, !0), !ee && this._ownsSplitStorage)
          for (const ie of PF) RU._remove(this._groupEntryName(ie));
        ee ? delete this._slotState[FJ] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(ee, ie, He) {
        if (dH(ee)) {
          this.syncCookieProperties(), tH(ie) && (ie = "None"), this._expire_days = tH(He) ? this._default_expiry : He;
          let ye = !1;
          if (mK(ee, ((ee, He) => {
              this.props.hasOwnProperty(He) && this.props[He] !== ie || (this._setProp(He, ee), ye = !0)
            })), ye) return this.save(), !0
        }
        return !1
      }
      register(ee, ie) {
        if (dH(ee)) {
          this.syncCookieProperties(), this._expire_days = tH(ie) ? this._default_expiry : ie;
          let He = !1;
          if (mK(ee, ((ie, ye) => {
              ee.hasOwnProperty(ye) && (this.props[ye] !== ie || dH(ie) || gH(ie)) && (this._setProp(ye, ie), He = !0)
            })), He) return this.save(), !0
        }
        return !1
      }
      unregister(ee) {
        this.syncCookieProperties();
        const ie = "string" == typeof ee ? [ee] : ee;
        let He = !1;
        for (const ye of ie) ye in this.props && (this._deleteProp(ye), He = !0);
        He && this.save()
      }
      update_campaign_params() {
        const ee = null == iH ? void 0 : iH.URL;
        if (ee === this._campaign_params_url) return;
        const ie = IF(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          He = !WH(jK(ie));
        return He && this.register(ie), this._campaign_params_url = ee, He ? ie : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const ee = null == iH ? void 0 : iH.referrer;
          return ee ? NF(ee) : {}
        }())
      }
      update_referrer_info() {
        var ee;
        this.register_once({
          $referrer: eJ(),
          $referring_domain: (null == iH ? void 0 : iH.referrer) && (null === (ee = vF(iH.referrer)) || void 0 === ee ? void 0 : ee.host) || QF
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const ee = iJ(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [Wi]: this._storesIdentityInCookie ? {
            r: UJ(ee.r),
            u: ee.u ? UJ(ee.u) : void 0
          } : ee
        }, void 0)
      }
      get_initial_props() {
        const ee = {};
        mK([di, Oi], (ie => {
          const He = this.props[ie];
          He && mK(He, (function(ie, He) {
            ee["$initial_" + pH(He)] = ie
          }))
        }));
        const ie = this.props[Wi];
        if (ie) {
          const He = function(ee) {
            const ie = HJ(ee, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              He = {};
            return mK(ie, (function(ee, ie) {
              He[`$initial_${pH(ie)}`] = ee
            })), He
          }(ie, this._config.disable_capture_url_hashes);
          lK(ee, He)
        }
        return ee
      }
      safe_merge(ee) {
        return mK(this.props, (function(ie, He) {
          He in ee || (ee[He] = ie)
        })), ee
      }
      update_config(ee, ie, He) {
        const ye = ee.persistence !== ie.persistence,
          be = !((ee, ie) => {
            if (ee.length !== ie.length) return !1;
            const He = [...ee].sort(),
              ye = [...ie].sort();
            return He.every(((ee, ie) => ee === ye[ie]))
          })(ee.cookie_persisted_properties || [], ie.cookie_persisted_properties || []),
          Me = ye || be,
          Ke = ee.cookieWinsOnConflict !== ie.cookieWinsOnConflict,
          Ue = ee.disable_persistence || !!He,
          Fe = !!this._disabled && !Ue;
        Ue || this._syncCookieProperties(ie, Fe), this._config = ee, !Ue && (ye || be || Ke) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(Eb(Eb({}, ee), {}, {
          cookie_persisted_properties: ie.cookie_persisted_properties
        }), Fe));
        const Je = Me || Ke ? this._buildStorage(ee) : this.aT;
        this._truncateExistingPersonInfoForCookie();
        const oe = this._resolveSplitStorage(ee),
          Re = Me || oe !== this._splitStorage,
          ke = !Ue && (Re || ee.cross_subdomain_cookie !== this._cross_subdomain || ee.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(Fe);
        this._storageMigrationInProgress = Re;
        try {
          if (this._default_expiry = this._expire_days = ee.cookie_expiration, this.set_disabled(Ue), this.set_cross_subdomain(ee.cross_subdomain_cookie), this.set_secure(ee.secure_cookie), Re) {
            const ee = this.props;
            this.clear(), this.aT = Je, this._splitStorage = oe, this.props = ee, this.save()
          } else Ke && (this.aT = Je, Ue || (delete this._slotState[FJ], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, ke && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const ee = this.props[Wi];
        if (!this._storesIdentityInCookie || !dH(ee) || "string" != typeof ee.r) return;
        const ie = UJ(ee.r),
          He = "string" == typeof ee.u ? UJ(ee.u) : ee.u;
        ie === ee.r && He === ee.u || this._setProp(Wi, Eb(Eb({}, ee), {}, {
          r: ie,
          u: He
        }))
      }
      set_disabled(ee) {
        this._disabled = ee, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(ee) {
        ee !== this._cross_subdomain && (this._cross_subdomain = ee, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(ee) {
        ee !== this._secure && (this._secure = ee, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(ee, ie) {
        const He = this.props.__timers || {};
        He[ee] = ie, this._setProp(Ve, He), this.save()
      }
      remove_event_timer(ee) {
        const ie = this.props.__timers || {},
          He = ie[ee];
        return tH(He) || (delete ie[ee], this._setProp(Ve, ie), this.save()), He
      }
      get_property(ee) {
        return this.props[ee]
      }
      set_property(ee, ie) {
        this._setProp(ee, ie), this.save()
      }
      _setProp(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var ye;
        const be = this.props[ee];
        this.props[ee] = ie, He && ("distinct_id" !== ee && "$user_state" !== ee || be === ie || (this._localIdentityChangePending = !0), kJ(ee) && !qJ(be, ie) && this._metaIdentifierChangePending.add(ee), this._markPendingCrossTabFeatureFlagChanges(ee, be, ie), (null === (ye = VF(ee)) || void 0 === ye ? void 0 : ye.volatile) || this._markGroupDirty(ee))
      }
      _deleteProp(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[ee], ie && (oJ(ee) && this._setCrossTabFeatureFlagChangesPending(ee, !0), kJ(ee) && this._metaIdentifierChangePending.add(ee), this._markGroupDirty(ee))
      }
      _markGroupDirty(ee) {
        var ie;
        const He = null === (ie = VF(ee)) || void 0 === ie ? void 0 : ie.storageGroup;
        He && (this._slotWriteState(He).yT = !0)
      }
      _slotWriteState(ee) {
        return this._slotState[ee] || (this._slotState[ee] = {})
      }
    };
    const XJ = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      zJ = "events",
      BJ = "cancelEvents",
      EJ = "popover",
      gJ = "api",
      OJ = "widget",
      dJ = "survey shown",
      WJ = "survey dismissed",
      tJ = "survey sent",
      ZJ = "$survey_id",
      wJ = "$survey_iteration",
      DJ = "$survey_last_seen_date",
      PJ = "popover",
      AJ = "inline";

    function YJ(ee) {
      let ie = !0;
      return {
        dispose() {
          if (ie) {
            ie = !1;
            const He = ee();
            He && OH(He.then) && He.then(void 0, (() => {}))
          }
        }
      }
    }
    const VJ = "product tour shown",
      aJ = "$product_tour_last_seen_date",
      cJ = "$product_tour_type",
      xJ = vK("[RateLimiter]");
    var LJ = class {
      constructor(ee) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = ee => {
          const ie = ee.text;
          if (ie && ie.length) try {
            (JSON.parse(ie).quota_limited || []).forEach((ee => {
              xJ.info(`${ee||"events"} is quota limited.`), this.serverLimits[ee] = (new Date).getTime() + 6e4
            }))
          } catch (ee) {
            return void xJ.warn(`could not rate limit - continuing. Error: "${null==ee?void 0:ee.message}"`, {
              text: ie
            })
          }
        }, this.instance = ee, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var ee;
        return (null === (ee = this.instance.config.rate_limiting) || void 0 === ee ? void 0 : ee.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var ee;
        return Math.max((null === (ee = this.instance.config.rate_limiting) || void 0 === ee ? void 0 : ee.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var ie, He, ye;
        const {
          captureEventsBurstLimit: be,
          captureEventsPerSecond: Me
        } = this, Ke = (new Date).getTime(), Ue = null !== (ie = null === (He = this.instance.persistence) || void 0 === He ? void 0 : He.get_property("$capture_rate_limit")) && void 0 !== ie ? ie : {
          tokens: be,
          last: Ke
        };
        Ue.tokens += (Ke - Ue.last) / 1e3 * Me, Ue.last = Ke, Ue.tokens > be && (Ue.tokens = be);
        const Fe = 1 > Ue.tokens;
        if (Fe || ee || (Ue.tokens = Math.max(0, Ue.tokens - 1)), Fe && !ee) {
          const ee = (AH(Ue.dropped) ? Ue.dropped : 0) + 1;
          Ue.dropped = ee, !this.lastEventRateLimited && this._captureWarning(ee) && (Ue.dropped = 0)
        }
        return this.lastEventRateLimited = Fe, null === (ye = this.instance.persistence) || void 0 === ye || ye.set_property("$capture_rate_limit", Ue), {
          isRateLimited: Fe,
          remainingTokens: Ue.tokens
        }
      }
      _isPropertyAllowed(ee) {
        const ie = this.instance.config.property_denylist;
        return !gH(ie) || !ie.includes(ee)
      }
      _triggeringPage() {
        var ee;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == HH ? void 0 : HH.pathname)) return `${null!==(ee=HH.origin)&&void 0!==ee?ee:""}${HH.pathname}`
      }
      _captureWarning(ee) {
        var ie, He;
        const {
          captureEventsBurstLimit: ye,
          captureEventsPerSecond: be
        } = this, Me = this._triggeringPage(), Ke = this._isPropertyAllowed("$session_id") ? null === (ie = (He = this.instance).get_session_id) || void 0 === ie ? void 0 : ie.call(He) : void 0, Ue = [`${ee} event(s) dropped since the last warning`, Me ? `triggered on ${Me}` : void 0, Ke ? `session ${Ke}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${Ue}. Config is set to ${be} events per second and ${ye} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(ee) {
        const ie = this.serverLimits[ee || "events"] || !1;
        return !1 !== ie && (new Date).getTime() < ie
      }
    };
    const CJ = vK("[RemoteConfig]");
    var vJ = class {
      constructor(ee) {
        this._instance = ee
      }
      get remoteConfig() {
        var ee;
        return null === (ee = JH._POSTHOG_REMOTE_CONFIG) || void 0 === ee || null === (ee = ee[this._instance.config.token]) || void 0 === ee ? void 0 : ee.config
      }
      _loadRemoteConfigJs(ee) {
        var ie, He, ye;
        (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.loadExternalDependency) ? null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "remote-config", (() => ee(this.remoteConfig))): ee()
      }
      _loadRemoteConfigJSON(ee) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: ee
        })
      }
      load() {
        try {
          if (this.remoteConfig) return CJ.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void CJ.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((ee => {
            if (!ee) return CJ.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((ee => {
              this._onRemoteConfig(ee.json, ee)
            }));
            this._onRemoteConfig(ee)
          }))
        } catch (ye) {
          CJ.error("Error loading remote config", ye), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(ee, ie) {
        !ee && ie && (0 === ie.statusCode ? ie.error || CJ.warn("Failed to fetch remote config from PostHog.") : CJ.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(ee ? {
            ok: !0,
            config: ee
          } : {
            ok: !1
          })
        } catch (ee) {
          CJ.error("Error applying remote config", ee)
        }
        if (!1 !== (null == ee ? void 0 : ee.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var He;
          null === (He = this._instance.featureFlags) || void 0 === He || He.ensureFlagsLoaded()
        } catch (ee) {
          CJ.error("Error loading feature flags", ee)
        }
      }
    };
    var uJ = Uint8Array,
      mJ = Uint16Array,
      lJ = Uint32Array,
      SJ = new uJ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      nJ = new uJ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      jJ = new uJ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      sJ = function(ee, ie) {
        for (var He = new mJ(31), ye = 0; 31 > ye; ++ye) He[ye] = ie += 1 << ee[ye - 1];
        var be = new lJ(He[30]);
        for (ye = 1; 30 > ye; ++ye)
          for (var Me = He[ye]; He[ye + 1] > Me; ++Me) be[Me] = Me - He[ye] << 5 | ye;
        return [He, be]
      },
      IJ = sJ(SJ, 2),
      hJ = IJ[1];
    IJ[0][28] = 258, hJ[258] = 28;
    for (var NJ = sJ(nJ, 0)[1], GJ = new mJ(32768), rJ = 0; 32768 > rJ; ++rJ) {
      var QJ = (43690 & rJ) >>> 1 | (21845 & rJ) << 1;
      GJ[rJ] = ((65280 & (QJ = (61680 & (QJ = (52428 & QJ) >>> 2 | (13107 & QJ) << 2)) >>> 4 | (3855 & QJ) << 4)) >>> 8 | (255 & QJ) << 8) >>> 1
    }
    var eo = function(ee, ie, He) {
        for (var ye = ee.length, be = 0, Me = new mJ(ie); ye > be; ++be) ++Me[ee[be] - 1];
        var Ke, Ue = new mJ(ie);
        for (be = 0; ie > be; ++be) Ue[be] = Ue[be - 1] + Me[be - 1] << 1;
        if (He) {
          Ke = new mJ(1 << ie);
          var Fe = 15 - ie;
          for (be = 0; ye > be; ++be)
            if (ee[be])
              for (var Je = be << 4 | ee[be], oe = ie - ee[be], Re = Ue[ee[be] - 1]++ << oe, ke = Re | (1 << oe) - 1; ke >= Re; ++Re) Ke[GJ[Re] >>> Fe] = Je
        } else
          for (Ke = new mJ(ye), be = 0; ye > be; ++be) Ke[be] = GJ[Ue[ee[be] - 1]++] >>> 15 - ee[be];
        return Ke
      },
      io = new uJ(288);
    for (rJ = 0; 144 > rJ; ++rJ) io[rJ] = 8;
    for (rJ = 144; 256 > rJ; ++rJ) io[rJ] = 9;
    for (rJ = 256; 280 > rJ; ++rJ) io[rJ] = 7;
    for (rJ = 280; 288 > rJ; ++rJ) io[rJ] = 8;
    var Ho = new uJ(32);
    for (rJ = 0; 32 > rJ; ++rJ) Ho[rJ] = 5;
    var yo = eo(io, 9, 0),
      bo = eo(Ho, 5, 0),
      Mo = function(ee) {
        return (ee / 8 | 0) + (7 & ee && 1)
      },
      Ko = function(ee, ie, He) {
        (null == ie || 0 > ie) && (ie = 0), (null == He || He > ee.length) && (He = ee.length);
        var ye = new(ee instanceof mJ ? mJ : ee instanceof lJ ? lJ : uJ)(He - ie);
        return ye.set(ee.subarray(ie, He)), ye
      },
      Uo = function(ee, ie, He) {
        var ye = ie / 8 | 0;
        ee[ye] |= He <<= 7 & ie, ee[ye + 1] |= He >>> 8
      },
      Fo = function(ee, ie, He) {
        var ye = ie / 8 | 0;
        ee[ye] |= He <<= 7 & ie, ee[ye + 1] |= He >>> 8, ee[ye + 2] |= He >>> 16
      },
      Jo = function(ee, ie) {
        for (var He = [], ye = 0; ee.length > ye; ++ye) ee[ye] && He.push({
          s: ye,
          f: ee[ye]
        });
        var be = He.length,
          Me = He.slice();
        if (!be) return [new uJ(0), 0];
        if (1 == be) {
          var Ke = new uJ(He[0].s + 1);
          return Ke[He[0].s] = 1, [Ke, 1]
        }
        He.sort((function(ee, ie) {
          return ee.f - ie.f
        })), He.push({
          s: -1,
          f: 25001
        });
        var Ue = He[0],
          Fe = He[1],
          Je = 0,
          oe = 1,
          Re = 2;
        for (He[0] = {
            s: -1,
            f: Ue.f + Fe.f,
            l: Ue,
            r: Fe
          }; oe != be - 1;) Ue = He[He[Re].f > He[Je].f ? Je++ : Re++], Fe = He[Je != oe && He[Re].f > He[Je].f ? Je++ : Re++], He[oe++] = {
          s: -1,
          f: Ue.f + Fe.f,
          l: Ue,
          r: Fe
        };
        var ke = Me[0].s;
        for (ye = 1; be > ye; ++ye) Me[ye].s > ke && (ke = Me[ye].s);
        var qe = new mJ(ke + 1),
          fe = oo(He[oe - 1], qe, 0);
        if (fe > ie) {
          ye = 0;
          var Te = 0,
            pe = fe - ie,
            Xe = 1 << pe;
          for (Me.sort((function(ee, ie) {
              return qe[ie.s] - qe[ee.s] || ee.f - ie.f
            })); be > ye; ++ye) {
            var ze = Me[ye].s;
            if (ie >= qe[ze]) break;
            Te += Xe - (1 << fe - qe[ze]), qe[ze] = ie
          }
          for (Te >>>= pe; Te > 0;) {
            var Be = Me[ye].s;
            ie > qe[Be] ? Te -= 1 << ie - qe[Be]++ - 1 : ++ye
          }
          for (; ye >= 0 && Te; --ye) {
            var Ee = Me[ye].s;
            qe[Ee] == ie && (--qe[Ee], ++Te)
          }
          fe = ie
        }
        return [new uJ(qe), fe]
      },
      oo = function(ee, ie, He) {
        return -1 == ee.s ? Math.max(oo(ee.l, ie, He + 1), oo(ee.r, ie, He + 1)) : ie[ee.s] = He
      },
      Ro = function(ee) {
        for (var ie = ee.length; ie && !ee[--ie];);
        for (var He = new mJ(++ie), ye = 0, be = ee[0], Me = 1, Ke = function(ee) {
            He[ye++] = ee
          }, Ue = 1; ie >= Ue; ++Ue)
          if (ee[Ue] == be && Ue != ie) ++Me;
          else {
            if (!be && Me > 2) {
              for (; Me > 138; Me -= 138) Ke(32754);
              Me > 2 && (Ke(Me > 10 ? Me - 11 << 5 | 28690 : Me - 3 << 5 | 12305), Me = 0)
            } else if (Me > 3) {
              for (Ke(be), --Me; Me > 6; Me -= 6) Ke(8304);
              Me > 2 && (Ke(Me - 3 << 5 | 8208), Me = 0)
            }
            for (; Me--;) Ke(be);
            Me = 1, be = ee[Ue]
          } return [He.subarray(0, ye), ie]
      },
      ko = function(ee, ie) {
        for (var He = 0, ye = 0; ie.length > ye; ++ye) He += ee[ye] * ie[ye];
        return He
      },
      qo = function(ee, ie, He) {
        var ye = He.length,
          be = Mo(ie + 2);
        ee[be] = 255 & ye, ee[be + 1] = ye >>> 8, ee[be + 2] = 255 ^ ee[be], ee[be + 3] = 255 ^ ee[be + 1];
        for (var Me = 0; ye > Me; ++Me) ee[be + Me + 4] = He[Me];
        return 8 * (be + 4 + ye)
      },
      fo = function(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        Uo(ie, oe++, He), ++be[256];
        for (var Re = Jo(be, 15), ke = Re[0], qe = Re[1], fe = Jo(Me, 15), Te = fe[0], pe = fe[1], Xe = Ro(ke), ze = Xe[0], Be = Xe[1], Ee = Ro(Te), ge = Ee[0], Oe = Ee[1], de = new mJ(19), We = 0; ze.length > We; ++We) de[31 & ze[We]]++;
        for (We = 0; ge.length > We; ++We) de[31 & ge[We]]++;
        for (var te = Jo(de, 7), Ze = te[0], we = te[1], De = 19; De > 4 && !Ze[jJ[De - 1]]; --De);
        var Pe, Ae, Ye, Ve, ae = Je + 5 << 3,
          ce = ko(be, io) + ko(Me, Ho) + Ke,
          xe = ko(be, ke) + ko(Me, Te) + Ke + 14 + 3 * De + ko(de, Ze) + (2 * de[16] + 3 * de[17] + 7 * de[18]);
        if (ce >= ae && xe >= ae) return qo(ie, oe, ee.subarray(Fe, Fe + Je));
        if (Uo(ie, oe, 1 + (ce > xe)), oe += 2, ce > xe) {
          Pe = eo(ke, qe, 0), Ae = ke, Ye = eo(Te, pe, 0), Ve = Te;
          var Le = eo(Ze, we, 0);
          for (Uo(ie, oe, Be - 257), Uo(ie, oe + 5, Oe - 1), Uo(ie, oe + 10, De - 4), oe += 14, We = 0; De > We; ++We) Uo(ie, oe + 3 * We, Ze[jJ[We]]);
          oe += 3 * De;
          for (var Ce = [ze, ge], ve = 0; 2 > ve; ++ve) {
            var ue = Ce[ve];
            for (We = 0; ue.length > We; ++We) Uo(ie, oe, Le[me = 31 & ue[We]]), oe += Ze[me], me > 15 && (Uo(ie, oe, ue[We] >>> 5 & 127), oe += ue[We] >>> 12)
          }
        } else Pe = yo, Ae = io, Ye = bo, Ve = Ho;
        for (We = 0; Ue > We; ++We)
          if (ye[We] > 255) {
            var me;
            Fo(ie, oe, Pe[257 + (me = ye[We] >>> 18 & 31)]), oe += Ae[me + 257], me > 7 && (Uo(ie, oe, ye[We] >>> 23 & 31), oe += SJ[me]);
            var le = 31 & ye[We];
            Fo(ie, oe, Ye[le]), oe += Ve[le], le > 3 && (Fo(ie, oe, ye[We] >>> 5 & 8191), oe += nJ[le])
          } else Fo(ie, oe, Pe[ye[We]]), oe += Ae[ye[We]];
        return Fo(ie, oe, Pe[256]), oe + Ae[256]
      },
      To = new lJ([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      po = (new uJ(0), function() {
        for (var ee = new lJ(256), ie = 0; 256 > ie; ++ie) {
          for (var He = ie, ye = 9; --ye;) He = (1 & He && 3988292384) ^ He >>> 1;
          ee[ie] = He
        }
        return ee
      }()),
      Xo = function(ee, ie, He) {
        for (; He; ++ie) ee[ie] = He, He >>>= 8
      };
    const zo = !!bH || !!yH,
      Bo = new WeakMap,
      Eo = "text/plain";
    let go = 0,
      Oo = !1;
    const Wo = (ee, ie) => {
        const [He, ye] = ee.split("#"), [be, Me] = He.split("?");
        if (!Me) return ee;
        const Ke = Me.split("&").filter((ee => ee.split("=")[0] !== ie)).join("&");
        return `${be}${Ke?`?${Ke}`:""}${ye?`#${ye}`:""}`
      },
      to = function(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var ye;
        const [be, Me] = ee.split("?"), Ke = Eb({}, ie), Ue = null !== (ye = null == Me ? void 0 : Me.split("&").map((ee => {
          var ie;
          const [ye, be] = ee.split("="), Me = He && null !== (ie = Ke[ye]) && void 0 !== ie ? ie : be;
          return delete Ke[ye], `${ye}=${Me}`
        }))) && void 0 !== ye ? ye : [], Fe = function(ee) {
          let ie, He, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const be = [];
          return mK(ee, (function(ee, ye) {
            tH(ee) || tH(ye) || "undefined" === ye || (ie = encodeURIComponent((ee => ee instanceof File)(ee) ? ee.name : ee.toString()), He = encodeURIComponent(ye), be[be.length] = He + "=" + ie)
          })), be.join(ye)
        }(Ke);
        return Fe && Ue.push(Fe), Ue.length > 0 ? `${be}?${Ue.join("&")}` : be
      },
      Zo = ee => {
        if (ee._encodedBody) return ee._encodedBody;
        const {
          data: ie,
          compression: He
        } = ee;
        if (!ie) return;
        if (He === XJ.GZipJS) {
          const ee = function(ee, ie) {
            void 0 === ie && (ie = {});
            var He = function() {
                var ee = 4294967295;
                return {
                  p(ie) {
                    for (var He = ee, ye = 0; ie.length > ye; ++ye) He = po[255 & He ^ ie[ye]] ^ He >>> 8;
                    ee = He
                  },
                  d: () => 4294967295 ^ ee
                }
              }(),
              ye = ee.length;
            He.p(ee);
            var be, Me, Ke, Ue, Fe = (Ue = 10 + ((be = ie).filename && be.filename.length + 1 || 0), function(ee, ie, He, ye, be, Me) {
                var Ke = ee.length,
                  Ue = new uJ(ye + Ke + 5 * (1 + Math.floor(Ke / 7e3)) + 8),
                  Fe = Ue.subarray(ye, Ue.length - 8),
                  Je = 0;
                if (!ie || 8 > Ke)
                  for (var oe = 0; Ke >= oe; oe += 65535) {
                    var Re = oe + 65535;
                    Ke > Re ? Je = qo(Fe, Je, ee.subarray(oe, Re)) : (Fe[oe] = Me, Je = qo(Fe, Je, ee.subarray(oe, Ke)))
                  } else {
                    for (var ke = To[ie - 1], qe = ke >>> 13, fe = 8191 & ke, Te = (1 << He) - 1, pe = new mJ(32768), Xe = new mJ(Te + 1), ze = Math.ceil(He / 3), Be = 2 * ze, Ee = function(ie) {
                        return (ee[ie] ^ ee[ie + 1] << ze ^ ee[ie + 2] << Be) & Te
                      }, ge = new lJ(25e3), Oe = new mJ(288), de = new mJ(32), We = 0, te = 0, Ze = (oe = 0, 0), we = 0, De = 0; Ke > oe; ++oe) {
                      var Pe = Ee(oe),
                        Ae = 32767 & oe,
                        Ye = Xe[Pe];
                      if (pe[Ae] = Ye, Xe[Pe] = Ae, oe >= we) {
                        var Ve = Ke - oe;
                        if ((We > 7e3 || Ze > 24576) && Ve > 423) {
                          Je = fo(ee, Fe, 0, ge, Oe, de, te, Ze, De, oe - De, Je), Ze = We = te = 0, De = oe;
                          for (var ae = 0; 286 > ae; ++ae) Oe[ae] = 0;
                          for (ae = 0; 30 > ae; ++ae) de[ae] = 0
                        }
                        var ce = 2,
                          xe = 0,
                          Le = fe,
                          Ce = Ae - Ye & 32767;
                        if (Ve > 2 && Pe == Ee(oe - Ce))
                          for (var ve = Math.min(qe, Ve) - 1, ue = Math.min(32767, oe), me = Math.min(258, Ve); ue >= Ce && --Le && Ae != Ye;) {
                            if (ee[oe + ce] == ee[oe + ce - Ce]) {
                              for (var le = 0; me > le && ee[oe + le] == ee[oe + le - Ce]; ++le);
                              if (le > ce) {
                                if (ce = le, xe = Ce, le > ve) break;
                                var Se = Math.min(Ce, le - 2),
                                  ne = 0;
                                for (ae = 0; Se > ae; ++ae) {
                                  var je = oe - Ce + ae + 32768 & 32767,
                                    se = je - pe[je] + 32768 & 32767;
                                  se > ne && (ne = se, Ye = je)
                                }
                              }
                            }
                            Ce += (Ae = Ye) - (Ye = pe[Ae]) + 32768 & 32767
                          }
                        if (xe) {
                          ge[Ze++] = 268435456 | hJ[ce] << 18 | NJ[xe];
                          var Ie = 31 & hJ[ce],
                            he = 31 & NJ[xe];
                          te += SJ[Ie] + nJ[he], ++Oe[257 + Ie], ++de[he], we = oe + ce, ++We
                        } else ge[Ze++] = ee[oe], ++Oe[ee[oe]]
                      }
                    }
                    Je = fo(ee, Fe, Me, ge, Oe, de, te, Ze, De, oe - De, Je)
                  }
                return Ko(Ue, 0, ye + Mo(Je) + 8)
              }(Me = ee, null == (Ke = ie).level ? 6 : Ke.level, null == Ke.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(Me.length)))) : 12 + Ke.mem, Ue, 0, !0)),
              Je = Fe.length;
            return function(ee, ie) {
              var He = ie.filename;
              if (ee[0] = 31, ee[1] = 139, ee[2] = 8, ee[8] = 2 > ie.level ? 4 : 9 == ie.level ? 2 : 0, ee[9] = 3, 0 != ie.mtime && Xo(ee, 4, Math.floor(new Date(ie.mtime || Date.now()) / 1e3)), He) {
                ee[3] = 8;
                for (var ye = 0; He.length >= ye; ++ye) ee[ye + 10] = He.charCodeAt(ye)
              }
            }(Fe, ie), Xo(Fe, Je - 8, He.d()), Xo(Fe, Je - 4, ye), Fe
          }(function(ee) {
            var ie = ee.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(ee);
            for (var He = new uJ(ee.length + (ee.length >>> 1)), ye = 0, be = function(ee) {
                He[ye++] = ee
              }, Me = 0; ie > Me; ++Me) {
              if (ye + 5 > He.length) {
                var Ke = new uJ(ye + 8 + (ie - Me << 1));
                Ke.set(He), He = Ke
              }
              var Ue = ee.charCodeAt(Me);
              128 > Ue ? be(Ue) : 2048 > Ue ? (be(192 | Ue >>> 6), be(128 | 63 & Ue)) : Ue > 55295 && 57344 > Ue ? (be(240 | (Ue = 65536 + (1047552 & Ue) | 1023 & ee.charCodeAt(++Me)) >>> 18), be(128 | Ue >>> 12 & 63), be(128 | Ue >>> 6 & 63), be(128 | 63 & Ue)) : (be(224 | Ue >>> 12), be(128 | Ue >>> 6 & 63), be(128 | 63 & Ue))
            }
            return Ko(He, 0, ye)
          }(CF(ie)), {
            mtime: 0
          });
          return {
            contentType: Eo,
            body: ee.buffer.slice(ee.byteOffset, ee.byteOffset + ee.byteLength),
            estimatedSize: ee.byteLength
          }
        }
        if (He === XJ.Base64) {
          const ee = function(ee) {
              return ee ? btoa(encodeURIComponent(ee).replace(/%([0-9A-F]{2})/g, ((ee, ie) => String.fromCharCode(parseInt(ie, 16))))) : ee
            }(CF(ie)),
            He = (ee => "data=" + encodeURIComponent("string" == typeof ee ? ee : CF(ee)))(ee);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: He,
            estimatedSize: new Blob([He]).size
          }
        }
        const ye = CF(ie);
        return {
          contentType: "application/json",
          body: ye,
          estimatedSize: new Blob([ye]).size
        }
      },
      wo = ee => {
        const ie = () => "sendBeacon" === ee.transport ? {
          url: to(ee.url, {
            compression: XJ.Base64
          }),
          encodedBody: Zo(Eb(Eb({}, ee), {}, {
            compression: XJ.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: Wo(ee.url, "compression"),
          encodedBody: Zo(Eb(Eb({}, ee), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let He;
        try {
          He = Zo(ee)
        } catch (He) {
          if (EM(ee.compression, uF(ee.url, "compression"))) return CK.error("Failed to gzip request body, sending uncompressed payload", He), ie();
          throw He
        }
        return He && EM(ee.compression, uF(ee.url, "compression")) && !((ye = He.body) instanceof ArrayBuffer ? BM(new Uint8Array(ye)) : ArrayBuffer.isView(ye) && BM(new Uint8Array(ye.buffer, ye.byteOffset, ye.byteLength))) ? (Oo = !0, ie()) : {
          url: ee.url,
          encodedBody: He
        };
        var ye
      },
      Do = ee => {
        try {
          return wo(ee)
        } catch (Me) {
          var ie;
          return CK.error(Me), void(null === (ie = ee.callback) || void 0 === ie || ie.call(ee, {
            statusCode: 0,
            error: Me
          }))
        }
      },
      Po = function() {
        var ee = jH((function*(ee) {
          const ie = yield function(ee) {
            return ZM.apply(this, arguments)
          }(CF(ee.data), Me.DEBUG, {
            rethrow: !0
          });
          if (!ie) return ee;
          const He = yield ie.arrayBuffer();
          return Eb(Eb({}, ee), {}, {
            _encodedBody: {
              contentType: Eo,
              body: He,
              estimatedSize: He.byteLength
            }
          })
        }));
        return function(ie) {
          return ee.apply(this, arguments)
        }
      }(),
      Ao = /Failed to fetch|NetworkError|Load failed/i,
      Yo = ee => "TypeError" === (null == ee ? void 0 : ee.name) && Ao.test((null == ee ? void 0 : ee.message) || ""),
      Vo = ee => {
        try {
          const ie = function(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof ee || !ee) return;
            const He = ee.trim(),
              ye = /^\d+\s*,/.test(He) ? He.slice(0, He.indexOf(",")).trim() : He;
            if (/^\d+$/.test(ye)) {
              const ee = 1e3 * Math.min(Number(ye), 300);
              return ee > 0 ? ee : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(ye)) return;
            const be = /^\w{3} \w{3} /.test(ye) ? ye + " GMT" : ye,
              Me = Date.parse(be) - ie;
            return Number.isFinite(Me) && Me > 0 ? Math.min(Me, Ub) : void 0
          }(ee());
          return tH(ie) ? void 0 : Math.min(ie, 3e4)
        } catch (ee) {
          return
        }
      },
      ao = ee => {
        const ie = Do(ee);
        if (!ie) return;
        const He = new bH;
        Bo.set(He, !0);
        const {
          url: ye,
          encodedBody: be
        } = ie;
        He.open(ee.method || "GET", ye, !0);
        const {
          contentType: Me,
          body: Ke
        } = null != be ? be : {};
        mK(ee.headers, (function(ee, ie) {
          He.setRequestHeader(ie, ee)
        })), Me && He.setRequestHeader("Content-Type", Me), ee.timeout && (He.timeout = ee.timeout), He.onreadystatechange = () => {
          if (4 === He.readyState) {
            var ie;
            const ye = {
              statusCode: He.status,
              text: He.responseText
            };
            if (200 === He.status) try {
              ye.json = JSON.parse(He.responseText)
            } catch (ee) {}
            null === (ie = ee.callback) || void 0 === ie || ie.call(ee, ye, Vo((() => He.getResponseHeader("Retry-After"))))
          }
        }, He.send(Ke)
      },
      co = ee => {
        const ie = Do(ee);
        if (!ie) return;
        const {
          url: He,
          encodedBody: ye
        } = ie, {
          contentType: be,
          body: Me,
          estimatedSize: Ke
        } = null != ye ? ye : {}, Ue = new Headers;
        mK(ee.headers, (function(ee, ie) {
          Ue.append(ie, ee)
        })), be && Ue.append("Content-Type", be);
        let Fe = null,
          Je = !1;
        if (MH) {
          const ie = new MH;
          Fe = {
            signal: ie.signal,
            timeout: setTimeout((() => {
              Je = !0;
              try {
                ie.abort(Rb("AbortError", "PostHog request timed out" + ((He = ee.timeout) ? ` after ${He}ms` : "")))
              } catch (ee) {
                Re(ee)
              }
              var He
            }), ee.timeout)
          }
        }
        let oe = !1;
        const Re = ie => {
          var He;
          oe || (oe = !0, Je && "AbortError" === (null == ie ? void 0 : ie.name) || Yo(ie) ? CK.warn(ie) : CK.error(ie), null === (He = ee.callback) || void 0 === He || He.call(ee, {
            statusCode: 0,
            error: ie
          }))
        };
        let ke = 0;
        const qe = () => {
          go -= ke, ke = 0, Fe && clearTimeout(Fe.timeout)
        };
        try {
          const ie = Eb({
              method: (null == ee ? void 0 : ee.method) || "GET",
              headers: Ue,
              referrerPolicy: "strict-origin",
              body: Me,
              signal: null == Fe ? void 0 : Fe.signal
            }, ee.fetchOptions),
            ye = null != Ke ? Ke : tH(Me) ? 0 : void 0;
          ie.keepalive = "POST" === ie.method && !ee._keepaliveDisabled && !1 !== ie.keepalive && ie.body === Me && !tH(ye) && ye >= 0 && 52428.8 > go + ye, ie.keepalive && (ke = ye, go += ke), yH(He, ie).then((ie => ie.text().then((He => {
            var ye;
            if (oe) return;
            const be = {
              statusCode: ie.status,
              text: He
            };
            if (200 === ie.status) try {
              be.json = JSON.parse(He)
            } catch (ee) {
              CK.error(ee)
            }
            oe = !0, qe(), null === (ye = ee.callback) || void 0 === ye || ye.call(ee, be, Vo((() => ie.headers.get("Retry-After"))))
          })))).catch((ee => {
            qe(), Re(ee)
          })).finally(qe)
        } catch (ee) {
          qe(), Re(ee)
        }
      },
      xo = ee => {
        try {
          var ie;
          const {
            url: He,
            encodedBody: ye
          } = wo(ee), {
            contentType: be,
            body: Me,
            estimatedSize: Ke
          } = null != ye ? ye : {};
          if (!Me) return;
          const Ue = Me instanceof Blob ? Me : new Blob([Me], {
            type: be
          });
          if (eH.sendBeacon(He, Ue)) return;
          const Fe = gH(ee.data) ? ee.data : null === (ie = ee.data) || void 0 === ie ? void 0 : ie.batch;
          if (gH(Fe) && Fe.length > 1 && (null != Ke ? Ke : 0) > 16384) {
            const ie = Math.ceil(Fe.length / 2),
              He = ie => gH(ee.data) ? ie : Eb(Eb({}, ee.data), {}, {
                batch: ie
              });
            return xo(Eb(Eb({}, ee), {}, {
              data: He(Fe.slice(0, ie))
            })), void xo(Eb(Eb({}, ee), {}, {
              data: He(Fe.slice(ie))
            }))
          }
          CK.warn(`Beacon of ~${null!=Ke?Ke:0} bytes was rejected by the browser, falling back to ${yH?"fetch":"XHR"}`), yH ? co(Eb(Eb({}, ee), {}, {
            _keepaliveDisabled: !0
          })) : ao(ee)
        } catch (ee) {
          CK.warn("Beacon send failed", ee)
        }
      },
      Lo = (ee, ie, He, ye) => {
        const be = "query" === ye ? "POST" === ie ? "sent_at" : "_" : void 0;
        return to(He === XJ.GZipJS ? Wo(ee, "compression") : ee, Eb(Eb({}, be ? {
          [be]: Date.now().toString()
        } : {}), He === XJ.GZipJS ? {} : {
          compression: He
        }))
      },
      Co = (() => {
        const ee = [];
        return yH && ee.push({
          transport: "fetch",
          method: co
        }), bH && ee.push({
          transport: "XHR",
          method: ao
        }), (null == eH ? void 0 : eH.sendBeacon) && ee.push({
          transport: "sendBeacon",
          method: xo
        }), ee
      })();
    let vo = !zo && -1 === (null == UH ? void 0 : UH.indexOf("MSIE")) && -1 === (null == UH ? void 0 : UH.indexOf("Mozilla"));

    function uo(ee, ie, He) {
      var ye, be, Me;
      He && (ie = Eb(Eb({}, ie), {}, {
        callback: ee => He(ee)
      })), ee.__loaded ? vo ? ee.__request_queue.push(ie) : ee.rateLimiter.isServerRateLimited(ie.batchKey) ? ie.fireCallbackOnDrop && (null === (be = ie.callback) || void 0 === be || be.call(ie, {
        statusCode: 429
      })) : (ie.transport = ie.transport || ee.config.api_transport, ie.headers = Eb(Eb({}, ee.config.request_headers), ie.headers), ie.compression = "best-available" === ie.compression ? null !== (ye = ee.compression) && void 0 !== ye ? ye : ie.compressionFallback : ie.compression, (tH(ee.config.disable_beacon) ? ee.config.__preview_disable_beacon : ee.config.disable_beacon) && (ie.disableTransport = ["sendBeacon"]), ie.fetchOptions = ie.fetchOptions || ee.config.fetch_options, ((ee, ie) => {
        var He, ye, be;
        const Me = Eb(Eb({}, ee), {}, {
          callback: null != ie ? ie : ie => {
            var He;
            return null === (He = ee.callback) || void 0 === He ? void 0 : He.call(ee, ie)
          }
        });
        Me.timeout = Me.timeout || 6e4;
        const Ke = null !== (He = Me.transport) && void 0 !== He ? He : "fetch";
        "sendBeacon" === Ke && tH(Me.compression) && Me.data && (Me.compression = XJ.Base64), "POST" === Me.method && Me.data && ("capture-body" === Me.timestampMode ? Me.data = (ee => {
          var ie, He;
          const ye = (gH(ee) ? ee : [ee]).map((ee => Eb(Eb({}, ee), ee.timestamp instanceof Date && !isNaN(ee.timestamp.getTime()) ? {
              timestamp: ee.timestamp.toISOString()
            } : {}))),
            be = ye[0];
          return {
            api_key: null !== (ie = null == be || null === (He = be.properties) || void 0 === He ? void 0 : He.token) && void 0 !== ie ? ie : null == be ? void 0 : be.token,
            batch: ye,
            sent_at: (new Date).toISOString()
          }
        })(Me.data) : "body" === Me.timestampMode && (Me.data = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return gH(ee) ? ee.map((ee => Eb(Eb({}, ee), {}, {
            sent_at: ie
          }))) : Eb(Eb({}, ee), {}, {
            sent_at: ie
          })
        }(Me.data))), Me.url = Lo(Me.url, Me.method, Me.compression, Me.timestampMode);
        const Ue = Co.filter((ee => !Me.disableTransport || !ee.transport || !Me.disableTransport.includes(ee.transport))),
          Fe = null !== (ye = null === (be = function(ee, ie) {
            for (let He = 0; ee.length > He; He++)
              if (ie(ee[He])) return ee[He]
          }(Ue, (ee => ee.transport === Ke))) || void 0 === be ? void 0 : be.method) && void 0 !== ye ? ye : Ue[0].method;
        if (!Fe) throw new Error("No available transport method");
        const Je = ee => {
          try {
            Fe(ee)
          } catch (ee) {
            var ie;
            Yo(ee) ? CK.warn(ee) : CK.error(ee), null === (ie = Me.callback) || void 0 === ie || ie.call(Me, {
              statusCode: 0,
              error: ee
            })
          }
        };
        "sendBeacon" !== Ke && !Me.preferSyncCompression && Me.data && Me.compression === XJ.GZipJS && KH && "undefined" != typeof Promise && !Oo ? Po(Me).then((ee => {
          Je(ee)
        })).catch((ie => {
          if (gM(ie)) return Oo = !0, void Je(Eb(Eb({}, Me), {}, {
            compression: void 0,
            url: Lo(ee.url, ee.method, void 0, ee.timestampMode)
          }));
          (ee => {
            if (!ee || "object" != typeof ee) return !1;
            const ie = "name" in ee ? String(ee.name) : "";
            return gM(ee) || ie === zM
          })(ie) && (Oo = !0), Je(Me)
        })) : Je(Me)
      })(ie, ((ye, be) => {
        var Me, Ke, Ue;
        ee.rateLimiter.checkForLimiting(ye), 400 > ye.statusCode || null === (Me = (Ke = ee.config).on_request_error) || void 0 === Me || Me.call(Ke, ye), He ? He(ye, be) : null === (Ue = ie.callback) || void 0 === Ue || Ue.call(ie, ye)
      }))) : ie.fireCallbackOnDrop && (null === (Me = ie.callback) || void 0 === Me || Me.call(ie, {
        statusCode: 0
      }))
    }
    var mo = class {
      constructor(ee, ie) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = NH((null == ie ? void 0 : ie.flush_interval_ms) || 3e3, 250, 5e3, CK.createLogger("flush interval"), 3e3), this._sendRequest = ee
      }
      enqueue(ee) {
        this._queue.push(ee), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const ee = this._queue.length > 0 ? this._formatQueue() : {},
          ie = Object.values(ee);
        [...ie.filter((ee => 0 === ee.url.indexOf("/e"))), ...ie.filter((ee => 0 !== ee.url.indexOf("/e")))].map((ee => {
          this._sendRequestSafely(Eb(Eb({}, ee), {}, {
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
          const ee = this._formatQueue();
          for (const ie in ee) this._sendRequestSafely(ee[ie])
        }
      }
      _sendRequestSafely(ee, ie) {
        try {
          this._sendRequest(ee, ie)
        } catch (ee) {
          CK.error(ee)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const ee = {},
          ie = {};
        mK(this._queue, (He => {
          var ye;
          const be = He,
            Me = ((be ? be.batchKey : null) || be.url) + (be.batchGroup ? `:${be.batchGroup}` : "");
          tH(ee[Me]) && (ee[Me] = Eb(Eb({}, be), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), ie[Me] = []), null === (ye = ee[Me].data) || void 0 === ye || ye.push(be.data), be.callback && ie[Me].push(be.callback)
        }));
        for (const He in ie) {
          const ye = ie[He];
          ye.length && (ee[He].callback = ee => {
            for (const ie of ye) ie(ee)
          })
        }
        return this._queue = [], ee
      }
    };
    const So = ["retriesPerformedSoFar"];
    var no = class {
        constructor(ee) {
          this._instance = ee, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!tH(ri) && "onLine" in ri.navigator) {
            if (this._areWeOnline = ri.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, NK(ri, "online", this._onlineListener), NK(ri, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(ee, ie) {
          let {
            retriesPerformedSoFar: He
          } = ee, ye = wM(ee, So);
          YH(He) && (ye.url = to(ye.url, {
            retry_count: He
          })), uo(this._instance, ie ? Eb(Eb({}, ye), {}, {
            transport: ie
          }) : ye, ((ee, ie) => {
            var be;
            if (200 !== ee.statusCode && (400 > ee.statusCode || ee.statusCode >= 500)) {
              if ((0 === ee.statusCode ? 3 : 10) > (null != He ? He : 0)) return void this._enqueue(Eb({
                retriesPerformedSoFar: He
              }, ye), ie);
              0 === ee.statusCode && CK.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=He?He:0} retries.`)
            }
            null === (be = ye.callback) || void 0 === be || be.call(ye, ee)
          }))
        }
        _enqueue(ee, ie) {
          const He = ee.retriesPerformedSoFar || 0;
          ee.retriesPerformedSoFar = He + 1;
          const ye = Math.max(function(ee) {
              const ie = 3e3 * Math.pow(2, ee),
                He = ie / 2,
                ye = Math.min(18e5, ie),
                be = (Math.random() - .5) * (ye - He);
              return Math.ceil(ye + be)
            }(He), null != ie ? ie : 0),
            be = Date.now() + ye;
          this._queue.push({
            retryAt: be,
            requestOptions: ee
          });
          let Me = `Enqueued failed request for retry in ${ye}`;
          navigator.onLine || (Me += " (Browser is offline)"), CK.warn(Me), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const ee = Date.now(),
            ie = [],
            He = this._queue.filter((He => ee > He.retryAt || (ie.push(He), !1)));
          if (this._queue = ie, He.length > 0)
            for (const {
                requestOptions: ye
              }
              of He) this.retriableRequest(ye)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, tH(ri) || (this._onlineListener && (ri.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (ri.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: ee
            }
            of this._queue) try {
            this._instance._send_request(Eb(Eb({}, ee), {}, {
              callback: gH(ee.data) ? void 0 : ee.callback,
              transport: "sendBeacon"
            }))
          } catch (ye) {
            CK.error(ye)
          }
          this._queue = []
        }
      },
      jo = class {
        constructor(ee) {
          this._instance = ee, this._updateScrollData = () => {
            var ee, ie, He, ye;
            this._context || (this._context = {});
            const be = this.scrollElement(),
              Me = this.scrollY(),
              Ke = be ? Math.max(0, be.scrollHeight - be.clientHeight) : 0,
              Ue = Me + ((null == be ? void 0 : be.clientHeight) || 0),
              Fe = (null == be ? void 0 : be.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(Me), this._context.maxScrollY = Math.max(Me, null !== (ee = this._context.maxScrollY) && void 0 !== ee ? ee : 0), this._context.maxScrollHeight = Math.max(Ke, null !== (ie = this._context.maxScrollHeight) && void 0 !== ie ? ie : 0), this._context.lastContentY = Ue, this._context.maxContentY = Math.max(Ue, null !== (He = this._context.maxContentY) && void 0 !== He ? He : 0), this._context.maxContentHeight = Math.max(Fe, null !== (ye = this._context.maxContentHeight) && void 0 !== ye ? ye : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const ee = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), ee
        }
        startMeasuringScrollPosition() {
          NK(ri, "scroll", this._updateScrollData, {
            capture: !0
          }), NK(ri, "scrollend", this._updateScrollData, {
            capture: !0
          }), NK(ri, "resize", this._updateScrollData)
        }
        scrollElement() {
          var ee;
          if (!this._scrollRoot) return null == ri || null === (ee = ri.document) || void 0 === ee ? void 0 : ee.documentElement;
          {
            const ee = gH(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const He of ee) {
              var ie;
              const ee = null == ri || null === (ie = ri.document) || void 0 === ie ? void 0 : ie.querySelector(He);
              if (ee) return ee
            }
          }
        }
        _scrollPosition(ee) {
          var ie, He;
          const ye = "y" === ee ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const ee = this.scrollElement();
            return ee && ee[ye] || 0
          }
          return ri ? "y" === ee ? ri.scrollY || ri.pageYOffset || (null === (ie = ri.document) || void 0 === ie || null === (ie = ie.documentElement) || void 0 === ie ? void 0 : ie.scrollTop) || 0 : ri.scrollX || ri.pageXOffset || (null === (He = ri.document) || void 0 === He || null === (He = He.documentElement) || void 0 === He ? void 0 : He.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const so = ee => iJ(null == ee ? void 0 : ee.config.mask_personal_data_properties, null == ee ? void 0 : ee.config.custom_personal_data_properties, null == ee ? void 0 : ee.config.disable_capture_url_hashes);
    var Io = class {
        constructor(ee, ie, He, ye) {
          this._onSessionIdCallback = ee => {
            const ie = this._getStored();
            if (ie && ie.sessionId === ee) return;
            const He = {
              sessionId: ee,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [Ei]: He
            })
          }, this._instance = ee, this._sessionIdManager = ie, this._persistence = He, this._sessionSourceParamGenerator = ye || so, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[Ei]
        }
        getSetOnceProps() {
          var ee;
          const ie = null === (ee = this._getStored()) || void 0 === ee ? void 0 : ee.props;
          return ie ? "r" in ie ? HJ(ie, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: ie.referringDomain,
            $pathname: ie.initialPathName,
            utm_source: ie.utm_source,
            utm_campaign: ie.utm_campaign,
            utm_medium: ie.utm_medium,
            utm_content: ie.utm_content,
            utm_term: ie.utm_term
          } : {}
        }
        getSessionProps() {
          const ee = {};
          return mK(jK(this.getSetOnceProps()), ((ie, He) => {
            "$current_url" === He && (He = "url"), ee[`$session_entry_${pH(He)}`] = ie
          })), ee
        }
      },
      ho = class {
        on(ee, ie) {
          return this._events[ee] || (this._events[ee] = []), this._events[ee].push(ie), () => {
            this._events[ee] = this._events[ee].filter((ee => ee !== ie))
          }
        }
        emit(ee, ie) {
          for (const He of this._events[ee] || []) He(ie);
          for (const He of this._events["*"] || []) He(ee, ie)
        }
        constructor() {
          this._events = {}
        }
      };
    const No = vK("[SessionId]"),
      Go = 864e5;
    var ro = class {
      on(ee, ie) {
        return this._eventEmitter.on(ee, ie)
      }
      constructor(ee, ie, He) {
        var ye;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new ho, this._sessionHasBeenIdleTooLong = (ee, ie) => !(!YH(ee) || !YH(ie)) && Math.abs(ee - ie) > this.sessionTimeoutMs, !ee.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === ee.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = ee.config, this._persistence = ee.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = ie || bU, this._windowIdGenerator = He || bU;
        const be = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * NH(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, No.createLogger("session_idle_timeout_seconds"), 1800), ee.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + be + "_window_id", this._primary_window_exists_storage_key = "ph_" + be + "_primary_window_exists", this._canUseSessionStorage()) {
          const ee = tU._parse(this._window_id_storage_key),
            ie = tU._parse(this._primary_window_exists_storage_key);
          ee && !ie ? this._windowId = ee : tU._remove(this._window_id_storage_key), tU._set(this._primary_window_exists_storage_key, !0)
        }(null === (ye = this._config.bootstrap) || void 0 === ye ? void 0 : ye.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(ee) {
        return tH(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(ee), this._sessionId && ee(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((ie => ie !== ee))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && tU._is_supported()
      }
      _setWindowId(ee) {
        ee !== this._windowId && (this._windowId = ee, this._canUseSessionStorage() && tU._set(this._window_id_storage_key, ee))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? tU._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(ee) {
        const ie = this._lastPersistedActivityTimestamp;
        return !DH(ie) && !DH(ee) && 5e3 > Math.abs(ee - ie)
      }
      _setSessionId(ee, ie, He) {
        const ye = ie !== this._sessionActivityTimestamp,
          be = !(ee !== this._sessionId || He !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = He, this._sessionActivityTimestamp = ie, this._sessionId = ee, be && !ye || be && this._isActivityChangeBelowGranularity(ie) || (this._lastPersistedActivityTimestamp = ie, this._persistence.register({
          [re]: [ie, ee, He]
        }))
      }
      _useCrossTabRefreshHardening() {
        var ee;
        const ie = null === (ee = this._config) || void 0 === ee ? void 0 : ee.persistence_save_debounce_ms;
        return YH(ie) && ie > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(re) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var ee;
        if (DH(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, ie, He] = this._getSessionId();
        ie === this._sessionId && He === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [re]: [this._sessionActivityTimestamp, null !== (ee = this._sessionId) && void 0 !== ee ? ee : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [ee] = this._getSessionId(), ie = YH(ee) ? ee : 0, He = YH(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(ie, He)
      }
      _isSessionIdleAfterCrossTabRefresh(ee) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(ee, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const ee = this._persistence.props[re];
        return gH(ee) && 2 === ee.length && ee.push(ee[0]), ee || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const He = (ee => {
              const ie = ee.replace(/-/g, "");
              if (32 !== ie.length) throw new Error("Not a valid UUID");
              if ("7" !== ie[12]) throw new Error("Not a UUIDv7");
              return parseInt(ie.substring(0, 12), 16)
            })(ee);
            return He > ie + 6e4 ? void No.error("Bootstrap sessionID cannot be in the future") : He
          } catch (ee) {
            return void No.error("Invalid sessionID in bootstrap", ee)
          }
        }(ee);
        return !tH(He) && (ie ? this._pendingBootstrapSession = {
          sessionId: ee,
          sessionStartTimestamp: He
        } : this._setSessionId(ee, (new Date).getTime(), He), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && ri && (ri.removeEventListener(ji, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && tU._remove(this._primary_window_exists_storage_key)
        }, NK(ri, ji, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const ye = ie || (new Date).getTime(),
          be = this._sessionId;
        if (He) this._lastCookieSyncTimestamp = ye;
        else if (DH(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > ye || ye - this._lastCookieSyncTimestamp >= 1e3) {
          var Me, Ke;
          null === (Me = (Ke = this._persistence).syncCookieProperties) || void 0 === Me || Me.call(Ke), this._lastCookieSyncTimestamp = ye
        }
        let [, Ue, Fe] = this._getSessionId();
        const Je = !tH(be) && Ue !== be,
          oe = this._freshestActivityTimestamp();
        let Re = this._getWindowId();
        const ke = this._pendingBootstrapSession,
          qe = !!ke && (ke.sessionStartTimestamp > ye + 6e4 || ye - ke.sessionStartTimestamp > Go),
          fe = ke ? qe : YH(Fe) && Math.abs(ye - Fe) > Go;
        let Te = !1,
          pe = Je,
          Xe = !Ue || !!ke;
        const ze = Ue;
        let Be = !Xe && !ee && this._sessionHasBeenIdleTooLong(ye, oe);
        if (Be && (Be = this._isSessionIdleAfterCrossTabRefresh(ye), Be || No.info("cross-tab refresh kept the session alive", {
            sessionId: Ue
          }), [, Ue, Fe] = this._getSessionId(), Be || (Xe = !Ue || !!ke)), Xe || Be || fe) {
          pe = !1;
          const ee = ke && !qe;
          Ue = ee ? ke.sessionId : this._sessionIdGenerator(), Re = this._windowIdGenerator(), No.info("new session ID assigned", {
            sessionId: Ue,
            windowId: Re,
            bootstrapped: !!ee,
            changeReason: {
              noSessionId: Xe,
              activityTimeout: Be,
              sessionPastMaximumLength: fe
            }
          }), Fe = ee ? ke.sessionStartTimestamp : ye, this._pendingBootstrapSession = void 0, Te = !0
        } else Re || (Re = this._windowIdGenerator(), Te = !0), pe = pe || Ue !== ze, pe && (No.info("adopted cross-tab session id", {
          sessionId: Ue,
          windowId: Re
        }), Te = !0);
        const Ee = YH(oe) && ee && !fe ? oe : ye,
          ge = YH(Fe) ? Fe : (new Date).getTime();
        this._setWindowId(Re), this._setSessionId(Ue, Ee, ge), ee || this._resetIdleTimer();
        const Oe = {
          noSessionId: Xe,
          activityTimeout: Be,
          sessionPastMaximumLength: fe,
          crossTabAdoption: pe
        };
        return Te && this._sessionIdChangedHandlers.forEach((ee => ee(Ue, Re, Oe))), {
          sessionId: Ue,
          windowId: Re,
          sessionStartTimestamp: ge,
          changeReason: Te ? Oe : void 0,
          lastActivityTimestamp: oe
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const ee = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: ee
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const Qo = function(ee, ie) {
      if (!ee) return !1;
      const He = ee.userAgent;
      if (He && hH(He, ie)) return !0;
      try {
        const He = null == ee ? void 0 : ee.userAgentData;
        if ((null == He ? void 0 : He.brands) && He.brands.some((ee => hH(null == ee ? void 0 : ee.brand, ie)))) return !0
      } catch (ee) {}
      return !!ee.webdriver
    };

    function eR() {
      return (eR = jH((function*() {
        const ee = null == eH ? void 0 : eH.userAgentData;
        if (null == ee ? void 0 : ee.getHighEntropyValues) try {
          const ie = yield ee.getHighEntropyValues(["model"]), He = null == ie ? void 0 : ie.model;
          return ZH(He) && He.length > 0 ? He : void 0
        } catch (ee) {
          return void CK.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", ee)
        }
      }))).apply(this, arguments)
    }

    function iR(ee, ie) {
      let He = `$survey_${ie}/${ee.id}`;
      return ee.current_iteration && ee.current_iteration > 0 && (He = `$survey_${ie}/${ee.id}/${ee.current_iteration}`), He
    }

    function HR(ee) {
      var ie;
      return !!(null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.events) || void 0 === ie || null === (ie = ie.values) || void 0 === ie ? void 0 : ie.length)
    }
    const yR = (ee, ie) => {
        if (!(ee => {
            try {
              new RegExp(ee)
            } catch (ee) {
              return !1
            }
            return !0
          })(ie)) return !1;
        try {
          return new RegExp(ie).test(ee)
        } catch (ee) {
          return !1
        }
      },
      bR = ee => ee.toLowerCase(),
      MR = {
        exact: (ee, ie) => ie.some((ie => ee.some((ee => ie === ee)))),
        is_not: (ee, ie) => ie.every((ie => ee.every((ee => ie !== ee)))),
        regex: (ee, ie) => ie.some((ie => ee.some((ee => yR(ie, ee))))),
        not_regex: (ee, ie) => ie.every((ie => ee.every((ee => !yR(ie, ee))))),
        icontains: (ee, ie) => ie.map(bR).some((ie => ee.map(bR).some((ee => ie.includes(ee))))),
        not_icontains: (ee, ie) => ie.map(bR).every((ie => ee.map(bR).every((ee => !ie.includes(ee))))),
        gt: (ee, ie) => ie.some((ie => {
          const He = parseFloat(ie);
          return !isNaN(He) && ee.some((ee => He > parseFloat(ee)))
        })),
        lt: (ee, ie) => ie.some((ie => {
          const He = parseFloat(ie);
          return !isNaN(He) && ee.some((ee => He < parseFloat(ee)))
        }))
      };

    function KR(ee, ie) {
      return !ee || Object.entries(ee).every((ee => {
        let [He, ye] = ee;
        const be = null == ie ? void 0 : ie[He];
        if (null == be) return !1;
        const Me = MR[ye.operator];
        return !!Me && Me(ye.values.map(String), [String(be)])
      }))
    }

    function UR(ee, ie, He) {
      return CF({
        distinct_id: ee,
        userPropertiesToSet: ie,
        userPropertiesToSetOnce: He
      })
    }
    const FR = "custom",
      JR = "i.posthog.com",
      oR = /^\/static\//,
      RR = ["/s/", "/e/", "/i/"];
    var kR = class {
      constructor(ee) {
        this._regionCache = {}, this.instance = ee
      }
      get apiHost() {
        const ee = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === ee ? "https://us.i.posthog.com" : ee
      }
      get flagsApiHost() {
        const ee = this.instance.config.flags_api_host;
        return ee ? ee.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var ee;
        let ie = null === (ee = this.instance.config.ui_host) || void 0 === ee ? void 0 : ee.replace(/\/$/, "");
        return ie || (ie = this.apiHost.replace(`.${JR}`, ".posthog.com")), "https://app.posthog.com" === ie ? "https://us.posthog.com" : ie
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : FR), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(ee) {
        if (!oR.test(ee)) return;
        const ie = this.instance.config.asset_host;
        return "string" == typeof ie && ie.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(ee) {
        const ie = vF(ee);
        return ie ? ie.protocol + "//" + ie.host + ie.pathname : void 0
      }
      _prepareEndpoint(ee, ie, He) {
        if ("ui" === ee) return He;
        let ye = He;
        const be = this.instance.config.rewriteRequestPath;
        if (be) {
          var Me;
          const ee = (null === (Me = vF(He)) || void 0 === Me ? void 0 : Me.href) || He;
          ye = be(new URL(ee)).toString()
        }
        if (be && "api" === ee && RR.some((ee => 0 === ie.indexOf(ee)))) {
          const ee = this._urlKey(ye);
          if (ee) {
            const ie = this.apiHost;
            let He = this._ingestionEndpoints;
            (null == He ? void 0 : He.apiHost) === ie && He.rewriteRequestPath === be || (He = {
              apiHost: ie,
              rewriteRequestPath: be,
              urls: new Set
            }, this._ingestionEndpoints = He), He.urls.add(ee)
          }
        }
        return ye
      }
      isIngestionEndpoint(ee) {
        const ie = this._ingestionEndpoints,
          He = this._urlKey(ee);
        return (null == ie ? void 0 : ie.apiHost) === this.apiHost && ie.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!He && ie.urls.has(He)
      }
      endpointFor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (ie && (ie = "/" === ie[0] ? ie : `/${ie}`), "ui" === ee) return this._prepareEndpoint(ee, ie, this.uiHost + ie);
        if ("flags" === ee) return this._prepareEndpoint(ee, ie, this.flagsApiHost + ie);
        if ("assets" === ee) {
          const He = this._staticAssetHostOverride(ie);
          if (He) return this._prepareEndpoint(ee, ie, `${He}${ie}`)
        }
        if (this.region === FR) return this._prepareEndpoint(ee, ie, this.apiHost + ie);
        const He = JR + ie;
        switch (ee) {
          case "assets":
            return this._prepareEndpoint(ee, ie, `https://${this.region}-assets.${He}`);
          case "api":
            return this._prepareEndpoint(ee, ie, `https://${this.region}.${He}`)
        }
      }
    };
    const qR = vK("[Surveys]"),
      fR = ee => {
        try {
          const ie = (ee => ((ee, ie) => `seenSurvey_${function(ee){return ee.current_iteration&&ee.current_iteration>0?`${ee.id}_${ee.current_iteration}`:ee.id}(ie)}`)(0, ee))(ee);
          if (localStorage.getItem(ie)) return;
          localStorage.setItem(ie, "true")
        } catch (ee) {
          qR.error("Failed to persist survey seen state", ee)
        }
      },
      TR = [EJ, OJ, gJ],
      pR = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: PJ
      },
      XR = vK("[PostHog ExternalIntegrations]"),
      zR = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var BR = class {
      constructor(ee) {
        this._instance = ee
      }
      _loadScript(ee, ie) {
        var He, ye;
        null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, ee, (ee => {
          if (ee) return XR.error("failed to load script", ee);
          ie()
        }))
      }
      startIfEnabledOrStop() {
        var ee;
        for (const [be, Me] of Object.entries(null !== (ee = this._instance.config.integrations) && void 0 !== ee ? ee : {})) {
          var ie, He, ye;
          Me && !(null === (ie = JH.__PosthogExtensions__) || void 0 === ie || null === (ie = ie.integrations) || void 0 === ie ? void 0 : ie[be]) && this._loadScript(zR[be], (() => {
            var ee;
            null === (ee = JH.__PosthogExtensions__) || void 0 === ee || null === (ee = ee.integrations) || void 0 === ee || null === (ee = ee[be]) || void 0 === ee || ee.start(this._instance)
          })), !Me && (null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (He = He.integrations) || void 0 === He ? void 0 : He[be]) && (null === (ye = JH.__PosthogExtensions__) || void 0 === ye || null === (ye = ye.integrations) || void 0 === ye || null === (ye = ye[be]) || void 0 === ye || ye.stop())
        }
      }
    };
    const ER = "autocapture",
      gR = "featureFlags",
      OR = "logs",
      dR = "surveys";
    var WR = class {
        constructor(ee) {
          this._instance = ee
        }
        initialize() {}
        get(ee) {
          const ie = this._instance.persistence;
          if ("string" == typeof ee) return null == ie ? void 0 : ie.get_property(ee);
          const He = {};
          for (const ye of ee) {
            const ee = null == ie ? void 0 : ie.get_property(ye);
            tH(ee) || (He[ye] = ee)
          }
          return He
        }
        set(ee, ie) {
          var He;
          null === (He = this._instance.persistence) || void 0 === He || He.register("string" == typeof ee ? {
            [ee]: ie
          } : ee)
        }
        remove(ee) {
          var ie;
          null === (ie = this._instance.persistence) || void 0 === ie || ie.unregister(ee)
        }
      },
      tR = class {
        constructor(ee) {
          this.instance = ee, this._logger = CK, this.kv = new WR(ee), this.onEvent = ee => YJ(this.instance._addCaptureHook(((ie, He) => {
            if (He) try {
              ee({
                event: ie,
                properties: He.properties
              })
            } catch (ee) {
              this._logger.error("Browser extension event listener failed", ee)
            }
          }))), this.onRemoteConfig = ee => {
            const ie = ie => {
                try {
                  ee(ie)
                } catch (ee) {
                  this._logger.error("Browser extension remote config listener failed", ee)
                }
              },
              He = this.instance._internalEventEmitter.on("extensionsRemoteConfig", ie);
            return this.instance._lastRemoteConfig && ie(this.instance._lastRemoteConfig), YJ(He)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var ee;
          return null !== (ee = this.instance.get_property("$device_id")) && void 0 !== ee ? ee : this.distinctId
        }
        get deviceId() {
          const ee = this.instance.get_property(We);
          return "string" == typeof ee ? ee : void 0
        }
        get library() {
          return {
            name: Me.LIB_NAME,
            version: Me.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var ee, ie;
          return null !== (ee = null === (ie = this.instance.persistence) || void 0 === ie ? void 0 : ie.get_initial_props()) && void 0 !== ee ? ee : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var ee, ie, He, ye, be;
            const Me = null === (ee = this.instance.sessionManager) || void 0 === ee ? void 0 : ee.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (ie = null == Me ? void 0 : Me.sessionId) && void 0 !== ie ? ie : "",
              windowId: null !== (He = null == Me ? void 0 : Me.windowId) && void 0 !== He ? He : "",
              sessionStartTimestamp: null !== (ye = null == Me ? void 0 : Me.sessionStartTimestamp) && void 0 !== ye ? ye : 0,
              lastActivityTimestamp: null !== (be = null == Me ? void 0 : Me.lastActivityTimestamp) && void 0 !== be ? be : 0
            }
          } catch (ee) {
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
          return OH(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(ee) {
          let ie;
          switch (ee) {
            case gR:
            case "featureFlagsCommon":
              ie = this.instance.featureFlags;
              break;
            case OR:
              ie = this.instance.logs;
              break;
            case dR:
              ie = this.instance.surveys;
              break;
            case ER:
              ie = this.instance.autocapture
          }
          return ie
        }
        capture(ee, ie, He) {
          He ? this.instance.capture(ee, ie, {
            timestamp: He.timestamp,
            uuid: He.uuid,
            $set: He.set,
            $set_once: He.setOnce
          }) : this.instance.capture(ee, ie)
        }
        registerDynamicEventProperties(ee) {
          return YJ(this.instance._registerExtensionEventProperties(ee))
        }
        sendRequest(ee) {
          var ie = this;
          return jH((function*(ee) {
            let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var ye;
            const be = null !== (ye = He.target) && void 0 !== ye ? ye : "api",
              Me = ie.instance.requestRouter.endpointFor(be, ee),
              Ke = "api" === be && "/i/v1/logs" === ee,
              Ue = {
                method: He.method,
                url: He.query ? to(Me, He.query) : Me,
                data: He.body,
                headers: He.headers,
                timeout: He.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: He.transport,
                compression: He.compression,
                compressionFallback: "flags" === He.target && "best-available" === He.compression ? RH.Base64 : void 0,
                timestampMode: He.sentAt
              };
            return Ke && (Ue.batchKey = "logs"), "sendBeacon" === He.transport ? (ie.instance._send_request(Ue), {
              statusCode: 202
            }) : new Promise((ee => {
              Ue.callback = ee, ie.instance._send_request(Ue)
            }))
          })).apply(this, arguments)
        }
      };
    const ZR = {};
    let wR = 0;
    const DR = () => {},
      PR = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      AR = "Surveys module not available",
      YR = "sanitize_properties is deprecated. Use before_send instead",
      VR = "Invalid value for property_denylist config: ",
      aR = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      cR = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      xR = ee => "$" === ee.charAt(0) && !fH(cR, ee),
      LR = /^[A-Za-z0-9_-]{1,400}$/,
      CR = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      vR = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      uR = ["token", "distinct_id", wi],
      mR = "posthog",
      lR = ee => {
        const ie = {};
        return ee && "unset" !== ee ? ("2025-11-30" > ee || (ie.strictMinimumDuration = !0), "2026-05-30" > ee || (ie.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > ee || (ie.streamNetworkBody = !0), "2026-08-30" > ee || (ie.captureJsonLd = !0), ie) : ie
      },
      SR = ee => {
        var ie;
        return Eb({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: hK(null == iH ? void 0 : iH.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: DR,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != ee ? ee : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: HH && ZH(null == HH ? void 0 : HH.search) && -1 !== HH.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == ri || null === (ie = ri.location) || void 0 === ie ? void 0 : ie.protocol),
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
          on_request_error(ee) {
            CK.error("Bad HTTP status: " + ee.statusCode + " " + ee.text)
          },
          get_device_id: ee => ee,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: ni,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: DR
        }, (ee => ({
          rageclick: ee && ee >= "2026-05-30" ? {
            content_ignorelist: sU,
            ignore_text_selection: !0
          } : !ee || "2025-11-30" > ee || {
            content_ignorelist: !0
          },
          capture_pageview: !ee || "2025-05-24" > ee || "history_change",
          session_recording: lR(ee),
          external_scripts_inject_target: ee && ee >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: ee && ee >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: ee && ee >= "2026-05-30" ? 250 : 0,
          split_storage: !(!ee || "2026-05-30" > ee),
          detect_google_search_app: !(!ee || "2026-05-30" > ee),
          disable_capture_url_hashes: !(!ee || "2026-06-25" > ee),
          cookieWinsOnConflict: !(!ee || "unset" === ee || "2026-08-29" > ee)
        }))(ee))
      },
      nR = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      jR = ee => {
        const ie = {};
        for (const [be, Me] of nR) tH(ee[be]) || (ie[Me] = ee[be]);
        const He = lK({}, ie, ee),
          ye = ee.__preview_external_dependency_versioned_paths;
        return tH(ye) || (tH(ee.strict_script_versioning) && (He.strict_script_versioning = !!ye), ZH(ye) && tH(ee.asset_host) && (He.asset_host = ye)), gH(ee.property_blacklist) && (tH(ee.property_denylist) ? He.property_denylist = ee.property_blacklist : gH(ee.property_denylist) ? He.property_denylist = [...ee.property_blacklist, ...ee.property_denylist] : CK.error(VR + ee.property_denylist)), He
      };
    var sR = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(ee) {
          CK.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = ee
        }
      },
      IR = class ee {
        _removeExtension(ee) {
          if (!ee) return;
          const ie = this._extensions.indexOf(ee); - 1 !== ie && this._extensions.splice(ie, 1)
        }
        _replaceExtension(ee, ie) {
          var He;
          return this._removeExtension(ee), this._extensions.push(ie), null === (He = ie.initialize) || void 0 === He || He.call(ie), ie
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const ee = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!ee && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let ie, He, ye;
          ee ? (ie = `persistence is set to '${this.config.persistence}'`, He = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", ye = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (ie = "persistence is disabled (disable_persistence is true)", He = "on every page load", ye = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${ie} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${He}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${ye}`)
        }
        _syncCookielessIdentity() {
          const ee = this.persistence;
          if (!ee || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || ee.load(!0);
          const ie = this.get_distinct_id();
          if (!ie || "$posthog_cookieless" === ie) {
            const ie = this.config.get_device_id(bU());
            this.register({
              distinct_id: ie,
              $device_id: ie
            }), ee.set_property(Bi, li)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var ee, ie;
          return null !== (ee = null === (ie = this.featureFlags) || void 0 === ie ? void 0 : ie.hasLoadedFlags) && void 0 !== ee && ee
        }
        get flagsEndpointWasHit() {
          var ee, ie;
          return null !== (ee = null === (ie = this.featureFlags) || void 0 === ie ? void 0 : ie.hasLoadedFlags) && void 0 !== ee && ee
        }
        constructor() {
          var ie;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new sR, this._personProcessingSetOncePropertiesSent = !1, this.version = Me.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new ho, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = SR(), this.SentryIntegration = wF, this.sentryIntegration = ee => function(ee, ie) {
            const He = ZF(ee, ie);
            return {
              name: tF,
              processEvent: ee => He(ee)
            }
          }(this, ee), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new jo(this), this.pageViewManager = new DF(this), this.rateLimiter = new LJ(this), this.requestRouter = new kR(this), this.consent = new ZU(this), this.externalIntegrations = new BR(this);
          const He = null !== (ie = ee.__defaultExtensionClasses) && void 0 !== ie ? ie : {};
          this.featureFlags = He.featureFlags && new He.featureFlags(this), this.toolbar = He.toolbar && new He.toolbar(this), this.surveys = He.surveys && new He.surveys(this), this.conversations = He.conversations && new He.conversations(this), this.logs = He.logs && new He.logs(this), this.metrics = He.metrics && new He.metrics(this), this.experiments = He.experiments && new He.experiments(this), this.exceptions = He.exceptions && new He.exceptions(this), this.people = {
            set: (ee, ie, He) => {
              const ye = ZH(ee) ? {
                [ee]: ie
              } : ee;
              this.setPersonProperties(ye), null == He || He({})
            },
            set_once: (ee, ie, He) => {
              const ye = ZH(ee) ? {
                [ee]: ie
              } : ee;
              this.setPersonProperties(void 0, ye), null == He || He({})
            }
          }, this.on("eventCaptured", (ee => CK.info(`send "${null==ee?void 0:ee.event}"`, ee)))
        }
        init(ie, He, ye) {
          if (ye && ye !== mR) {
            var be;
            const Me = null !== (be = ZR[ye]) && void 0 !== be ? be : new ee;
            return Me._init(ie, He, ye), ZR[ye] = Me, ZR[mR][ye] = Me, Me
          }
          return this._init(ie, He, ye)
        }
        _init(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 ? arguments[2] : void 0;
          var ye, be, Ke;
          const Ue = ZH(ee) ? ee.trim() : "";
          if (!Ue) return CK.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var Fe;
          if (this.__loaded) return Ue !== (null === (Fe = this.config) || void 0 === Fe ? void 0 : Fe.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${Ue}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = SR(ie.defaults), ie.debug = this._checkLocalStorageForDebug(ie.debug), this._originalUserConfig = ie, this._triggered_notifs = [], ie.person_profiles ? this._initialPersonProfilesConfig = ie.person_profiles : ie.process_person && (this._initialPersonProfilesConfig = ie.process_person);
          const Je = SR(ie.defaults),
            oe = jR(ie),
            Re = lK({}, Je, oe, {
              name: He,
              token: Ue
            });
          dH(Je.rageclick) && dH(oe.rageclick) && (Re.rageclick = lK({}, Je.rageclick, oe.rageclick)), dH(Je.session_recording) && dH(oe.session_recording) && (Re.session_recording = lK({}, Je.session_recording, oe.session_recording)), this.set_config(Re), this.config.on_xhr_error && CK.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = ie.disable_compression ? void 0 : XJ.GZipJS;
          const ke = this._is_persistence_disabled(),
            qe = !this._inCookielessMode();
          if (this.persistence = new pJ(this.config, ke, !0, qe), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new pJ(Eb(Eb({}, this.config), {}, {
              persistence: "sessionStorage"
            }), ke, !1, qe), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !ke && tU._is_supported()) {
            const ee = tU._parse(this._sessionRegisteredPropertiesStorageKey);
            gH(ee) && ee.forEach((ee => {
              ZH(ee) && this._sessionRegisteredPropKeys.add(ee)
            }))
          } else tU._remove(this._sessionRegisteredPropertiesStorageKey);
          const fe = Eb({}, this.persistence.props),
            Te = Eb({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new mo(((ee, ie) => this._send_retriable_request(ee, ie)), this.config.request_queue_config), this._retryQueue = new no(this), this.__request_queue = [];
          const pe = this._inCookielessMode();
          pe || (this.sessionManager = new ro(this), this.sessionPropsManager = new Io(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((ee, ie, He) => {
            ((null == He ? void 0 : He.activityTimeout) || (null == He ? void 0 : He.sessionPastMaximumLength) || (null == He ? void 0 : He.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (CK.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(pe)
          }), 0)) : (CK.info("Initializing extensions synchronously"), this._initExtensions(pe)), Me.DEBUG = Me.DEBUG || this.config.debug, Me.DEBUG && CK.info("Starting in debug mode", {
            this: this,
            config: ie,
            thisC: Eb({}, this.config),
            p: fe,
            s: Te
          }), this.config.identity_distinct_id && !(null === (ye = ie.bootstrap) || void 0 === ye ? void 0 : ye.distinctID) && (ie.bootstrap = Eb(Eb({}, ie.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const Xe = null === (be = ie.bootstrap) || void 0 === be ? void 0 : be.distinctID;
          if (this._hasStableInitialDistinctId = !!Xe && !wH(Xe), null === (Ke = ie.bootstrap) || void 0 === Ke ? void 0 : Ke.distinctID) {
            const ee = ie.bootstrap.distinctID,
              He = this.get_distinct_id(),
              ye = this.persistence.get_property(Bi);
            if (ie.bootstrap.isIdentifiedID && null != He && He !== ee && "anonymous" === ye) this.identify(ee);
            else if (ie.bootstrap.isIdentifiedID && null != He && He !== ee && "identified" === ye) CK.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const He = this.config.get_device_id(bU()),
                ye = ie.bootstrap.isIdentifiedID ? He : ee;
              this.persistence.set_property(Bi, ie.bootstrap.isIdentifiedID ? Si : li), this.register({
                distinct_id: ee,
                $device_id: ye
              })
            }
          }
          if (pe) this.register_once({
            distinct_id: Zi,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const ee = this.config.get_device_id(bU());
            this.register_once({
              distinct_id: ee,
              $device_id: ee
            }, ""), this.persistence.set_property(Bi, li)
          }
          return NK(ri, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), NK(ri, "pageshow", (() => {
            var ee;
            this._isPageUnloading = !1, this._isShutdown || null === (ee = this._retryQueue) || void 0 === ee || ee.resume()
          })), ie.segment ? WF(this, (() => this._loaded())) : this._loaded(), OH(this.config._onCapture) && this.config._onCapture !== DR && (CK.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (ee => this.config._onCapture(ee.event, ee)))), this.config.ip && CK.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return eR.apply(this, arguments)
          }().then((ee => {
            ee && this.register({
              [te]: ee
            })
          })).catch(DR), this
        }
        _isSharedExtension(ee) {
          const ie = ee;
          return ZH(ie.name) && OH(ie.setup)
        }
        _enrollExtension(ee, ie) {
          var He = this;
          this._isSharedExtension(ee) ? ie.push(jH((function*() {
            try {
              yield ee.setup(He._getBrowserClientAdapter())
            } catch (He) {
              CK.error(`Failed to set up extension "${ee.name}"`, He);
              try {
                var ie;
                yield null === (ie = ee.dispose) || void 0 === ie ? void 0 : ie.call(ee)
              } catch (ie) {
                CK.error(`Failed to dispose extension "${ee.name}"`, ie)
              }
            }
          }))) : this._extensions.push(ee)
        }
        _enrollFeatureFlags() {
          var ie, He, ye, be = this;
          const Me = null !== (ie = null === (He = this.config.__extensionClasses) || void 0 === He ? void 0 : He.featureFlags) && void 0 !== ie ? ie : null === (ye = ee.__defaultExtensionClasses) || void 0 === ye ? void 0 : ye.featureFlags;
          var Ke, Ue, Fe;
          if (Me)
            if (this.featureFlags && this.featureFlags instanceof Me || (null === (Ke = this._featureFlagsReloadingUnsubscribe) || void 0 === Ke || Ke.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new Me(this)), OH(this.featureFlags.onReloading) && OH(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const ee = this.featureFlags;
                jH((function*() {
                  try {
                    yield ee.setup(be._getBrowserClientAdapter())
                  } catch (ie) {
                    CK.error("Failed to set up feature flags", ie);
                    const ye = be._featureFlagsReloadingUnsubscribe;
                    be._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == ye || ye()
                    } catch (ee) {
                      CK.error("Failed to unsubscribe feature flag reloading", ee)
                    }
                    try {
                      yield ee.dispose()
                    } catch (ee) {
                      CK.error("Failed to dispose feature flags", ee)
                    }
                  }
                }))()
              }
            } else null === (Ue = (Fe = this.featureFlags).initialize) || void 0 === Ue || Ue.call(Fe)
        }
        _initExtensions(ie) {
          const He = performance.now(),
            ye = Eb(Eb({}, ee.__defaultExtensionClasses), this.config.__extensionClasses),
            be = [];
          var Me, Ke, Ue, Fe, Je, oe, Re, ke;
          ye.exceptions && this._extensions.push(this.exceptions = null !== (Me = this.exceptions) && void 0 !== Me ? Me : new ye.exceptions(this)), ye.historyAutocapture && this._extensions.push(this.historyAutocapture = new ye.historyAutocapture(this)), ye.tracingHeaders && this._extensions.push(this.tracingHeaders = new ye.tracingHeaders(this)), ye.siteApps && this._extensions.push(this.siteApps = new ye.siteApps(this)), ye.sessionRecording && !ie && this._extensions.push(this.sessionRecording = new ye.sessionRecording(this)), this.config.disable_scroll_properties || be.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), ye.autocapture && this._enrollExtension(this.autocapture = new ye.autocapture(this), be), ye.surveys && this._enrollExtension(this.surveys = null !== (Ke = this.surveys) && void 0 !== Ke ? Ke : new ye.surveys(this), be), ye.logs && this._enrollExtension(this.logs = null !== (Ue = this.logs) && void 0 !== Ue ? Ue : new ye.logs(this), be), ye.metrics && this._extensions.push(this.metrics = null !== (Fe = this.metrics) && void 0 !== Fe ? Fe : new ye.metrics(this)), ye.conversations && this._extensions.push(this.conversations = null !== (Je = this.conversations) && void 0 !== Je ? Je : new ye.conversations(this)), ye.productTours && this._extensions.push(this.productTours = new ye.productTours(this)), ye.heatmaps && this._extensions.push(this.heatmaps = new ye.heatmaps(this)), ye.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new ye.webVitalsAutocapture(this)), ye.exceptionObserver && this._extensions.push(this.exceptionObserver = new ye.exceptionObserver(this)), ye.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new ye.deadClicksAutocapture(this, gF)), ye.toolbar && this._extensions.push(this.toolbar = null !== (oe = this.toolbar) && void 0 !== oe ? oe : new ye.toolbar(this)), ye.experiments && this._extensions.push(this.experiments = null !== (Re = this.experiments) && void 0 !== Re ? Re : new ye.experiments(this)), ye.webMCP && this._extensions.push(this.webMCP = null !== (ke = this.webMCP) && void 0 !== ke ? ke : new ye.webMCP(this)), this._extensions.forEach((ee => {
            ee.initialize && be.push((() => {
              var ie;
              null === (ie = ee.initialize) || void 0 === ie || ie.call(ee)
            }))
          })), be.push((() => {
            if (this._pendingRemoteConfig) {
              const ee = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((ie => {
                var He;
                return null === (He = ie.onRemoteConfig) || void 0 === He ? void 0 : He.call(ie, ee)
              }))
            }
          })), this._processInitTaskQueue(be, He)
        }
        _processInitTaskQueue(ee, ie) {
          for (; ee.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - ie >= 30 && ee.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(ee, ie)
            }), 0));
            const He = ee.shift();
            if (He) try {
              He()
            } catch (ee) {
              CK.error("Error initializing extension:", ee)
            }
          }
          const He = Math.round(performance.now() - ie);
          this.register_for_session({
            [Di]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [Pi]: He
          }), this.config.__preview_deferred_init_extensions && CK.info(`PostHog extensions initialized (${He}ms)`)
        }
        _onRemoteConfig(ee) {
          if (!iH || !iH.body) return CK.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(ee)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = ee), this._lastRemoteConfig = ee, this.compression = void 0, ee.ok) {
            var ie;
            const He = ee.config;
            He.supportedCompression && !this.config.disable_compression && (this.compression = fH(He.supportedCompression, XJ.GZipJS) ? XJ.GZipJS : fH(He.supportedCompression, XJ.Base64) ? XJ.Base64 : void 0), (null === (ie = He.analytics) || void 0 === ie ? void 0 : ie.endpoint) && (this.analyticsDefaultEndpoint = He.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : ni
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", ee), this._extensions.forEach((ie => {
            var He;
            return null === (He = ie.onRemoteConfig) || void 0 === He ? void 0 : He.call(ie, ee)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (ee) {
            CK.critical("`loaded` function failed", ee)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == HH ? void 0 : HH.hostname)) {
            const ee = HH.hostname,
              ie = this.config.internal_or_test_user_hostname;
            ("string" == typeof ie ? ee === ie : ie.test(ee)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new vJ(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var ee;
          this.is_capturing() && this.config.request_batching && (null === (ee = this._requestQueue) || void 0 === ee || ee.enable())
        }
        _dom_loaded() {
          this.is_capturing() && uK(this.__request_queue, (ee => this._send_retriable_request(ee))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var ee, ie, He, ye, be, Me;
          this._isPageUnloading = !0, null === (ee = this.surveys) || void 0 === ee || null === (ie = ee.handlePageUnload) || void 0 === ie || ie.call(ee), null === (He = this.metrics) || void 0 === He || He.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(Ii), null === (ye = this.logs) || void 0 === ye || ye.flushLogs("sendBeacon"), null === (be = this._requestQueue) || void 0 === be || be.unload(), null === (Me = this._retryQueue) || void 0 === Me || Me.unload()) : this._shouldCapturePageleave() && this.capture(Ii, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(ee) {
          uo(this, ee)
        }
        _send_retriable_request(ee, ie) {
          this._retryQueue ? this._retryQueue.retriableRequest(ee, ie) : this._send_request(ie ? Eb(Eb({}, ee), {}, {
            transport: ie
          }) : ee)
        }
        _execute_array(ee) {
          wR++;
          try {
            let ie;
            const He = [],
              ye = [],
              be = [];
            uK(ee, (ee => {
              if (ee)
                if (ie = ee[0], gH(ie)) be.push(ee);
                else if (OH(ee)) try {
                ee.call(this)
              } catch (ie) {
                CK.error("Error executing queued PostHog call", ee, ie)
              } else gH(ee) && "alias" === ie ? He.push(ee) : gH(ee) && -1 !== ie.indexOf("capture") && OH(this[ie]) ? be.push(ee) : ye.push(ee)
            }));
            const Me = function(ee, ie) {
              uK(ee, (function(ee) {
                try {
                  if (gH(ee[0])) {
                    let He = ie;
                    mK(ee, (function(ee) {
                      He = He[ee[0]].apply(He, ee.slice(1))
                    }))
                  } else ie[ee[0]].apply(ie, ee.slice(1))
                } catch (ie) {
                  CK.error("Error executing queued PostHog call", ee, ie)
                }
              }))
            };
            Me(He, this), Me(ye, this), Me(be, this)
          } finally {
            wR--
          }
        }
        push(ie) {
          if (wR > 0 && gH(ie) && ZH(ie[0])) {
            const He = ee.prototype[ie[0]];
            OH(He) && He.apply(this, ie.slice(1))
          } else this._execute_array([ie])
        }
        get _facebookClickIdChannel() {
          return {
            property: De,
            persistenceKey: Pe,
            cookieName: "_fbc",
            pattern: CR,
            register: (ee, ie) => {
              var He;
              return null === (He = this.persistence) || void 0 === He ? void 0 : He.register({
                [Pe]: {
                  value: ee,
                  delivered: ie
                }
              })
            },
            unregister: () => {
              var ee;
              return null === (ee = this.persistence) || void 0 === ee ? void 0 : ee.unregister(Pe)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: Ae,
            persistenceKey: Ye,
            cookieName: "_fbp",
            pattern: vR,
            register: (ee, ie) => {
              var He;
              return null === (He = this.persistence) || void 0 === He ? void 0 : He.register({
                [Ye]: {
                  value: ee,
                  delivered: ie
                }
              })
            },
            unregister: () => {
              var ee;
              return null === (ee = this.persistence) || void 0 === ee ? void 0 : ee.unregister(Ye)
            }
          }
        }
        _getPersistedMetaIdentifier(ee) {
          var ie;
          const He = null === (ie = this.persistence) || void 0 === ie ? void 0 : ie.get_property(ee.persistenceKey);
          return ZH(He) && ee.pattern.test(He) ? {
            value: He,
            delivered: !1
          } : dH(He) && ZH(He.value) && ee.pattern.test(He.value) ? {
            value: He.value,
            delivered: !0 === He.delivered
          } : void 0
        }
        _storeMetaIdentifier(ee, ie, He) {
          return ie === (null == He ? void 0 : He.value) ? {
            value: ie,
            pending: !He.delivered
          } : (ee.register(ie, !1), {
            value: ie,
            pending: !0
          })
        }
        _readMetaCookie(ee) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const ie = rK(ee.cookieName);
          return ZH(ie) && ee.pattern.test(ie) ? ie : void 0
        }
        _updateFacebookClickId(ee, ie, He, ye) {
          if (!this.persistence) return;
          const be = this._facebookClickIdChannel;
          this.persistence.refreshKey(be.persistenceKey);
          const Me = this._getPersistedMetaIdentifier(be);
          if (ye) return void be.unregister();
          if (He) return ZH(ie) && CR.test(ie) ? this._storeMetaIdentifier(be, ie, Me) : void be.unregister();
          const Ke = ZH(ee) && LR.test(ee) ? ee : void 0,
            Ue = this._readMetaCookie(be);
          return Ue && ((ee, ie, He) => {
            const ye = ee.split(".");
            if (ie) return ye[3] === ie;
            if (!He) return !0;
            const be = He.value.split(".");
            return ye[3] === be[3] || Number(ye[2]) > Number(be[2])
          })(Ue, Ke, Me) ? this._storeMetaIdentifier(be, Ue, Me) : Ke ? (null == Me ? void 0 : Me.value.split(".")[3]) === Ke ? {
            value: Me.value,
            pending: !Me.delivered
          } : this._storeMetaIdentifier(be, `fb.1.${Date.now()}.${Ke}`, Me) : Me ? {
            value: Me.value,
            pending: !Me.delivered
          } : void 0
        }
        _updateFacebookBrowserId(ee, ie, He) {
          if (!this.persistence) return;
          const ye = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(ye.persistenceKey);
          const be = this._getPersistedMetaIdentifier(ye);
          if (He) return void ye.unregister();
          if (ie) return ZH(ee) && vR.test(ee) ? this._storeMetaIdentifier(ye, ee, be) : void ye.unregister();
          const Me = this._readMetaCookie(ye);
          return Me ? this._storeMetaIdentifier(ye, Me, be) : be ? {
            value: be.value,
            pending: !be.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(ee, ie) {
          if (!this.persistence) return;
          this.persistence.refreshKey(ee.persistenceKey);
          const He = this._getPersistedMetaIdentifier(ee);
          (null == He ? void 0 : He.value) !== ie || He.delivered || ee.register(ie, !0)
        }
        capture(ee, ie, He) {
          var ye, be;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void CK.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (tH(ee) || !ZH(ee)) return void CK.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === ee && this._inCookielessMode()) return;
          const Me = !this.config.opt_out_useragent_filter && this._is_bot();
          if (Me && !this.config.__preview_capture_bot_pageviews) return;
          const Ke = (null == He ? void 0 : He.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == Ke ? void 0 : Ke.isRateLimited) return void CK.critical("This capture call is ignored due to client rate limiting.");
          let Ue;
          (null == ie ? void 0 : ie.$current_url) && !ZH(null == ie ? void 0 : ie.$current_url) && (CK.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == ie || delete ie.$current_url), "$exception" !== ee || (null == He ? void 0 : He._originatedFromCaptureException) || CK.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (Ue = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const Fe = new Date,
            Je = (null == He ? void 0 : He.timestamp) || Fe,
            oe = ob(null == He ? void 0 : He.uuid, bU);
          let Re = {
            uuid: oe,
            event: ee,
            properties: this.calculateEventProperties(ee, ie || {}, Je, oe)
          };
          "$pageview" === ee && this.config.__preview_capture_bot_pageviews && Me && (Re.event = "$bot_pageview", Re.properties.$browser_type = "bot"), Ke && (Re.properties.$lib_rate_limit_remaining_tokens = Ke.remainingTokens);
          const ke = "$feature_flag_called" === ee && !1 === Re.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == He ? void 0 : He.$set) && !ke && (Re.$set = null == He ? void 0 : He.$set);
          const qe = dH(null == ie ? void 0 : ie.$set) ? ie.$set : void 0,
            fe = gH(null == ie ? void 0 : ie.$unset) ? ie.$unset : [],
            Te = (null == He ? void 0 : He.$unset) || [],
            pe = ee => {
              var ie;
              const ye = !!(null == He ? void 0 : He.$set) && ee in He.$set;
              return {
                hasProvided: ye || !!qe && ee in qe,
                provided: ye ? null == He || null === (ie = He.$set) || void 0 === ie ? void 0 : ie[ee] : null == qe ? void 0 : qe[ee],
                unset: -1 !== fe.indexOf(ee) || -1 !== Te.indexOf(ee)
              }
            },
            Xe = pe(De),
            ze = pe(Ae),
            Be = [{
              channel: this._facebookClickIdChannel,
              hasProvided: Xe.hasProvided,
              update: this._updateFacebookClickId(null == Ue ? void 0 : Ue.fbclid, Xe.provided, Xe.hasProvided, Xe.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: ze.hasProvided,
              update: this._updateFacebookBrowserId(ze.provided, ze.hasProvided, ze.unset)
            }];
          for (const {
              channel: De,
              hasProvided: Ae,
              update: Ye
            }
            of Be) Ye && !0 === Re.properties.$process_person_profile && Ye.pending && !Ae && !ke && (Re.$set = Eb({
            [De.property]: Ye.value
          }, Re.$set));
          const Ee = null == He ? void 0 : He.$unset;
          Ee && (Re.$unset = Ee);
          const ge = ke ? void 0 : this._calculate_set_once_properties(null == He ? void 0 : He.$set_once, ee !== Gi, ee === Ni);
          if (ge && (Re.$set_once = ge), (null == He ? void 0 : He._noTruncate) || (Oe = this.config.properties_string_max_length, Re = function(ee, ie) {
              const He = new Set;
              return function ee(ye, be) {
                if (ye !== Object(ye)) return ie ? ie(ye) : ye;
                if (He.has(ye)) return;
                let Me;
                if (He.add(ye), gH(ye)) Me = [], uK(ye, (ie => {
                  Me.push(ee(ie))
                }));
                else {
                  const ie = {};
                  mK(CH(ye) ? sK(ye) : ye, ((ye, be) => {
                    He.has(ye) || (ie[be] = ee(ye, be))
                  })), Me = ie
                }
                return Me
              }(ee)
            }(Re, (ee => ZH(ee) ? ee.slice(0, Oe) : ee))), Re.timestamp = Je, tH(null == He ? void 0 : He.timestamp) || (Re.properties.$event_time_override_provided = !0, Re.properties.$event_time_override_system_time = Fe), ke && (Re.properties = function(ee) {
              let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const He = {},
                ye = ie => {
                  void 0 !== ee[ie] && (He[ie] = ee[ie])
                };
              return XM.forEach(ye), ie.forEach(ye), He
            }(Re.properties, uR)), ee === WJ || ee === tJ) {
            const He = null == ie ? void 0 : ie[ZJ],
              ye = null == ie ? void 0 : ie[wJ];
            fR({
              id: He,
              current_iteration: ye
            }), Re.$set = Eb(Eb({}, Re.$set), {}, {
              [iR({
                id: He,
                current_iteration: ye
              }, ee === tJ ? "responded" : "dismissed")]: !0
            })
          } else ee === dJ && (Re.$set = Eb(Eb({}, Re.$set), {}, {
            [DJ]: (new Date).toISOString()
          }));
          var Oe;
          if (ee === VJ) {
            const ee = null == ie ? void 0 : ie[cJ];
            ee && (Re.$set = Eb(Eb({}, Re.$set), {}, {
              [`${aJ}/${ee}`]: (new Date).toISOString()
            }))
          }
          const de = Eb(Eb({}, Re.properties.$set), Re.$set);
          if (WH(de) || this.setPersonPropertiesForFlags(de), !PH(this.config.before_send)) {
            const ee = this._runBeforeSend(Re);
            if (!ee) return;
            Re = ee, Re.uuid = ob(Re.uuid, bU)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && xR(ee) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const We = Be.filter((ee => {
            let {
              channel: ie,
              update: He
            } = ee;
            var ye, be, Me;
            const Ke = null !== (ye = null === (be = Re.$set) || void 0 === be ? void 0 : be[ie.property]) && void 0 !== ye ? ye : dH(null === (Me = Re.properties) || void 0 === Me ? void 0 : Me.$set) ? Re.properties.$set[ie.property] : void 0;
            return (null == He ? void 0 : He.pending) && Ke === He.value
          }));
          this._internalEventEmitter.emit("eventCaptured", Re);
          const te = null !== (ye = null == He ? void 0 : He._url) && void 0 !== ye ? ye : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            Ze = "recordings" === (null == He ? void 0 : He._batchKey) || /\/s\/(?:\?|$)/.test(te),
            we = Eb(Eb(Eb({
              method: "POST",
              url: te,
              data: Re,
              compression: "best-available",
              preferSyncCompression: null == He ? void 0 : He.send_instantly,
              timestampMode: Ze ? "body" : "capture-body",
              batchKey: null == He ? void 0 : He._batchKey
            }, Ze && (null === (be = Re.properties) || void 0 === be ? void 0 : be.$session_id) ? {
              batchGroup: Re.properties.$session_id + (Re.properties.$window_id ? `-${Re.properties.$window_id}` : "")
            } : {}), (null == He ? void 0 : He.transport) ? {
              transport: He.transport
            } : {}), We.length ? {
              fireCallbackOnDrop: !0,
              callback: ee => {
                if (ee.statusCode >= 200 && 300 > ee.statusCode)
                  for (const {
                      channel: ie,
                      update: He
                    }
                    of We) this._markMetaIdentifierDelivered(ie, He.value)
              }
            } : {});
          if (!this.config.request_batching || He && !(null == He ? void 0 : He._batchKey) || (null == He ? void 0 : He.send_instantly)) {
            var Pe;
            let ee;
            !we.transport && !we.callback && WH(null !== (Pe = this.config.request_headers) && void 0 !== Pe ? Pe : {}) && this._isPageUnloading && (ee = "sendBeacon"), this._send_retriable_request(we, ee)
          } else this._requestQueue.enqueue(we);
          return Re
        }
        _addCaptureHook(ee) {
          return this.on("eventCaptured", (ie => ee(ie.event, ie)))
        }
        getExtension(ee) {
          var ie;
          return null === (ie = this._browserClientAdapter) || void 0 === ie ? void 0 : ie.getExtension(ee)
        }
        _getBrowserClientAdapter() {
          var ee;
          return null !== (ee = this._browserClientAdapter) && void 0 !== ee ? ee : this._browserClientAdapter = new tR(this)
        }
        _registerExtensionEventProperties(ee) {
          this._extensionEventPropertyProducers.push(ee);
          let ie = !0;
          return () => {
            if (!ie) return;
            ie = !1;
            const He = this._extensionEventPropertyProducers.indexOf(ee); - 1 !== He && this._extensionEventPropertyProducers.splice(He, 1)
          }
        }
        _processCookieIdentityChange() {
          let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var ie, He, ye;
          return !!(null === (ie = this.persistence) || void 0 === ie ? void 0 : ie.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (ye = this.sessionPersistence) || void 0 === ye || ye.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (He = this.featureFlags) || void 0 === He || He.reset(), ee && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(ee, ie, He, ye, Me) {
          if (He = He || new Date, !this.persistence || !this.sessionPersistence) return ie;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const Ke = Me ? void 0 : this.persistence.remove_event_timer(ee);
          let Ue = Eb({}, ie);
          if (Ue.token = this.config.token, Ue.$config_defaults = this.config.defaults, this._inCookielessMode() && (Ue[wi] = !0), "$snapshot" === ee) {
            const ee = Eb(Eb({}, this.persistence.properties()), this.sessionPersistence.properties());
            return Ue.distinct_id = ee.distinct_id, (!ZH(Ue.distinct_id) && !AH(Ue.distinct_id) || wH(Ue.distinct_id)) && CK.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), Ue
          }
          const Fe = function(ee, ie, He) {
            let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var Me, Ke, Ue, Fe;
            if (!UH) return {};
            const Je = ee ? [...SF, ...ie || []] : [],
              [oe, Re] = ry(UH),
              [ke, qe] = function(ee) {
                for (let ie = 0; Hb.length > ie; ie++) {
                  const [He, ye, be] = Hb[ie], Me = ee.match(He);
                  if (Me) {
                    const ie = be && ee.match(be) || Me;
                    return [ye, (null == ie ? void 0 : ie[1]) || ""]
                  }
                }
                return ["", ""]
              }(UH),
              fe = function() {
                const ee = "u" > typeof navigator ? navigator : void 0;
                return (null == ee ? void 0 : ee.brave) ? {
                  brave: !0
                } : {}
              }(),
              Te = {};
            tH(He) || (Te.detectGoogleSearchApp = He);
            const pe = {},
              Xe = null === (Me = navigator) || void 0 === Me || null === (Me = Me.userAgentData) || void 0 === Me ? void 0 : Me.platform,
              ze = null === (Ke = navigator) || void 0 === Ke ? void 0 : Ke.maxTouchPoints,
              Be = null == ri || null === (Ue = ri.screen) || void 0 === Ue ? void 0 : Ue.width,
              Ee = null == ri || null === (Fe = ri.screen) || void 0 === Fe ? void 0 : Fe.height,
              ge = null == ri ? void 0 : ri.devicePixelRatio;
            tH(Xe) || (pe.userAgentDataPlatform = Xe), tH(ze) || (pe.maxTouchPoints = ze), tH(Be) || (pe.screenWidth = Be), tH(Ee) || (pe.screenHeight = Ee), tH(ge) || (pe.devicePixelRatio = ge);
            const Oe = lK(jK({
              $os: oe,
              $os_version: Re,
              $browser: Iy(UH, navigator.vendor, fe, Te),
              $webview_app: ke,
              $webview_app_version: qe,
              $device: Qy(UH),
              $device_type: eb(UH, pe),
              $timezone: aF(),
              $timezone_offset: yJ()
            }), {
              $current_url: mF(ye ? kb(null == HH ? void 0 : HH.href) : null == HH ? void 0 : HH.href, Je, jF),
              $host: null == HH ? void 0 : HH.host,
              $pathname: null == HH ? void 0 : HH.pathname,
              $raw_user_agent: UH.length > 1e3 ? UH.substring(0, 997) + "..." : UH,
              $browser_version: Ny(UH, navigator.vendor, fe, Te),
              $browser_language: GF(),
              $browser_language_prefix: rF(),
              $screen_height: null == ri ? void 0 : ri.screen.height,
              $screen_width: null == ri ? void 0 : ri.screen.width,
              $viewport_height: null == ri ? void 0 : ri.innerHeight,
              $viewport_width: null == ri ? void 0 : ri.innerWidth,
              $lib: be.LIB_NAME,
              $lib_version: be.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return be.SDK_DIST_CHANNEL && (Oe.$sdk_dist_channel = be.SDK_DIST_CHANNEL), Oe
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: ee,
              windowId: ie
            } = this.sessionManager.checkAndGetSessionAndWindowId(Me, He.getTime(), !0);
            Ue.$session_id = ee, Ue.$window_id = ie
          }
          this.sessionPropsManager && lK(Ue, this.sessionPropsManager.getSessionProps());
          try {
            var Je;
            if (this.sessionRecording) {
              const ie = this.sessionRecording.sdkDebugProperties,
                He = !this._replayDebugPropertiesPaused && xR(ee);
              for (const ee in ie)(He || fH(aR, ee)) && (Ue[ee] = ie[ee])
            }
            Ue.$sdk_debug_retry_queue_size = null === (Je = this._retryQueue) || void 0 === Je ? void 0 : Je.length
          } catch (ee) {
            Ue.$sdk_debug_error_capturing_properties = String(ee)
          }
          let oe;
          if (this.requestRouter.region === FR && (Ue.$lib_custom_api_host = this.config.api_host), oe = "$pageview" !== ee || Me ? "$pageleave" !== ee || Me ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(He) : this.pageViewManager.doPageView(He, ye), Ue = lK(Ue, oe), "$pageview" === ee && iH && (Ue.title = iH.title), !tH(Ke)) {
            const ee = He.getTime() - Ke;
            Ue.$duration = parseFloat((ee / 1e3).toFixed(3))
          }
          UH && this.config.opt_out_useragent_filter && (Ue.$browser_type = this._is_bot() ? "bot" : "browser");
          const Re = this.persistence.properties(),
            ke = this.sessionPersistence.properties(),
            qe = Ue.$groups,
            fe = Re.$groups;
          dH(qe) && !WH(qe) && (Ue.$groups = Eb(Eb({}, dH(fe) ? fe : {}), qe)), mK(["$referrer", "$referring_domain"], (ee => {
            ee in Re && delete ke[ee]
          }));
          const Te = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const be of this._extensionEventPropertyProducers.slice()) try {
              lK(Te, be())
            } catch (ee) {
              CK.error("Failed to produce browser extension event properties", ee)
            }
          Ue = lK({}, Fe, Re, ke, Eb(Eb({}, Te), Ue)), Ue.$is_identified = this._isIdentified(), gH(this.config.property_denylist) ? mK(this.config.property_denylist, (function(ee) {
            delete Ue[ee]
          })) : CK.error(VR + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const pe = this.config.sanitize_properties;
          pe && (CK.error(YR), Ue = pe(Ue, ee));
          const Xe = this._hasPersonProcessing();
          return Ue.$process_person_profile = Xe, Xe && !Me && this._requirePersonProcessing("_calculate_event_properties"), Ue
        }
        _calculate_set_once_properties(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var ye;
          if (!this.persistence || !this._hasPersonProcessing()) return ee;
          if (this._personProcessingSetOncePropertiesSent && !He) return ee;
          const be = this.persistence.get_initial_props(),
            Me = null === (ye = this.sessionPropsManager) || void 0 === ye ? void 0 : ye.getSetOnceProps();
          let Ke = lK({}, be, Me || {}, ee || {});
          const Ue = this.config.sanitize_properties;
          return Ue && (CK.error(YR), Ke = Ue(Ke, "$set_once")), ie && (this._personProcessingSetOncePropertiesSent = !0), WH(Ke) ? void 0 : Ke
        }
        register(ee, ie) {
          var He;
          null === (He = this.persistence) || void 0 === He || He.register(ee, ie)
        }
        register_once(ee, ie, He) {
          var ye;
          null === (ye = this.persistence) || void 0 === ye || ye.register_once(ee, ie, He)
        }
        register_for_session(ee) {
          var ie, He;
          null === (ie = this.persistence) || void 0 === ie || ie.syncCookieProperties(), this._processCookieIdentityChange(), null === (He = this.sessionPersistence) || void 0 === He || He.register(ee), Object.keys(ee).forEach((ee => this._sessionRegisteredPropKeys.add(ee))), this._persistSessionRegisteredPropKeys()
        }
        unregister(ee) {
          var ie;
          null === (ie = this.persistence) || void 0 === ie || ie.unregister(ee)
        }
        unregister_for_session(ee) {
          var ie;
          null === (ie = this.sessionPersistence) || void 0 === ie || ie.unregister(ee), this._sessionRegisteredPropKeys.delete(ee), this._persistSessionRegisteredPropKeys()
        }
        _register_single(ee, ie) {
          this.register({
            [ee]: ie
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((ee => {
            var ie;
            null === (ie = this.sessionPersistence) || void 0 === ie || ie.unregister(ee)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var ee;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (ee = this.sessionPersistence) || void 0 === ee ? void 0 : ee._disabled) || !tU._is_supported()) return void tU._remove(this._sessionRegisteredPropertiesStorageKey);
          const ie = [];
          this._sessionRegisteredPropKeys.forEach((ee => ie.push(ee))), ie.length > 0 ? tU._set(this._sessionRegisteredPropertiesStorageKey, ie) : tU._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(ee, ie) {
          var He;
          return null === (He = this.featureFlags) || void 0 === He ? void 0 : He.getFeatureFlag(ee, ie)
        }
        getFeatureFlagPayload(ee) {
          var ie;
          return null === (ie = this.featureFlags) || void 0 === ie ? void 0 : ie.getFeatureFlagPayload(ee)
        }
        getFeatureFlagResult(ee, ie) {
          var He;
          return null === (He = this.featureFlags) || void 0 === He ? void 0 : He.getFeatureFlagResult(ee, ie)
        }
        getAllFeatureFlags() {
          var ee, ie;
          return null !== (ee = null === (ie = this.featureFlags) || void 0 === ie ? void 0 : ie.getAllFeatureFlags()) && void 0 !== ee ? ee : []
        }
        isFeatureEnabled(ee, ie) {
          var He, ye;
          return null !== (He = null === (ye = this.featureFlags) || void 0 === ye ? void 0 : ye.isFeatureEnabled(ee, ie)) && void 0 !== He ? He : null == ie ? void 0 : ie.defaultValue
        }
        reloadFeatureFlags() {
          var ee;
          null === (ee = this.featureFlags) || void 0 === ee || ee.reloadFeatureFlags()
        }
        updateFlags(ee, ie, He) {
          var ye;
          null === (ye = this.featureFlags) || void 0 === ye || ye.updateFlags(ee, ie, He)
        }
        updateEarlyAccessFeatureEnrollment(ee, ie, He) {
          var ye;
          null === (ye = this.featureFlags) || void 0 === ye || ye.updateEarlyAccessFeatureEnrollment(ee, ie, He)
        }
        getEarlyAccessFeatures(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0;
          var ye;
          return null === (ye = this.featureFlags) || void 0 === ye ? void 0 : ye.getEarlyAccessFeatures(ee, ie, He)
        }
        on(ee, ie) {
          return this._internalEventEmitter.on(ee, ie)
        }
        onFeatureFlags(ee) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(ee) : (ee([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(ee) {
          return this.surveys ? this.surveys.onSurveysLoaded(ee) : (ee([], {
            isLoaded: !1,
            error: AR
          }), () => {})
        }
        onSessionId(ee) {
          var ie, He;
          return null !== (ie = null === (He = this.sessionManager) || void 0 === He ? void 0 : He.onSessionId(ee)) && void 0 !== ie ? ie : () => {}
        }
        getSurveys(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(ee, ie) : ee([], {
            isLoaded: !1,
            error: AR
          })
        }
        getActiveMatchingSurveys(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(ee, ie) : ee([], {
            isLoaded: !1,
            error: AR
          })
        }
        onActiveMatchingSurveysChanged(ee) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(ee) : (ee([], {
            isLoaded: !1,
            error: AR
          }), () => {})
        }
        renderSurvey(ee, ie) {
          var He;
          null === (He = this.surveys) || void 0 === He || He.renderSurvey(ee, ie)
        }
        displaySurvey(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pR;
          var He;
          null === (He = this.surveys) || void 0 === He || He.displaySurvey(ee, ie)
        }
        cancelPendingSurvey(ee) {
          var ie;
          null === (ie = this.surveys) || void 0 === ie || ie.cancelPendingSurvey(ee)
        }
        canRenderSurvey(ee) {
          var ie, He;
          return null !== (ie = null === (He = this.surveys) || void 0 === He ? void 0 : He.canRenderSurvey(ee)) && void 0 !== ie ? ie : {
            visible: !1,
            disabledReason: AR
          }
        }
        canRenderSurveyAsync(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var He, ye;
          return null !== (He = null === (ye = this.surveys) || void 0 === ye ? void 0 : ye.canRenderSurveyAsync(ee, ie)) && void 0 !== He ? He : Promise.resolve({
            visible: !1,
            disabledReason: AR
          })
        }
        _validateIdentifyId(ee) {
          return !ee || wH(ee) ? (CK.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === ee ? (CK.critical(`The string "${ee}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(ee.toLowerCase()) && !["undefined", "null"].includes(ee.toLowerCase()) || (CK.critical(`The string "${ee}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(ee, ie, He) {
          if (!this.__loaded || !this.persistence) return CK.uninitializedWarning("posthog.identify");
          if (AH(ee) && (ee = ee.toString(), CK.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(ee)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const ye = this.get_distinct_id(),
            be = this.persistence.syncCookieProperties() && this.get_distinct_id() !== ye,
            Me = this._processCookieIdentityChange(!1),
            Ke = this.persistence._beginCookieSyncSuppression();
          let Ue = !1;
          try {
            const ye = this.get_distinct_id();
            this.register({
              $user_id: ee
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: ye
            }, ""), ee !== ye && ee !== this.get_property("__alias") && (this.unregister(Ze), this.register({
              distinct_id: ee
            }));
            const Ke = (this.persistence.get_property("$user_state") || "anonymous") === li,
              Je = ee !== ye,
              oe = !Je && Ke;
            if (Je && Ke) {
              var Fe;
              const be = this.config.reuseAnonymousId ? {
                distinct_id: ee
              } : {
                distinct_id: ee,
                $anon_distinct_id: ye
              };
              this.persistence.set_property(Bi, Si), this.setPersonPropertiesForFlags({
                $set: ie || {},
                $set_once: He || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", be, {
                $set: ie || {},
                $set_once: He || {}
              }) && (this._cachedPersonProperties = UR(ee, ie, He)), null === (Fe = this.featureFlags) || void 0 === Fe || Fe.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : ye)
            } else if (oe) {
              this.persistence.set_property(Bi, Si);
              const ye = ie || {},
                be = He || {};
              this.setPersonPropertiesForFlags({
                $set: ye,
                $set_once: be
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: ye,
                $set_once: be
              }) && (this._cachedPersonProperties = UR(ee, ie, He))
            } else(ie || He) && this.setPersonProperties(ie, He);
            Je || be || Me ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(pe)) : oe && (ie || He) && this.reloadFeatureFlags(), Ue = !0
          } finally {
            Ke && this.persistence._endCookieSyncSuppression(Ue)
          }
        }
        setPersonProperties(ee, ie) {
          if (!ee && !ie) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const He = UR(this.get_distinct_id(), ee, ie);
          this._cachedPersonProperties !== He ? (this.setPersonPropertiesForFlags({
            $set: ee || {},
            $set_once: ie || {}
          }, !0), this.capture("$set", {
            $set: ee || {},
            $set_once: ie || {}
          }) && (this._cachedPersonProperties = He)) : CK.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(ee) {
          var ie;
          const He = (gH(ee) ? ee : [ee]).filter((ee => ZH(ee) && ee.length > 0));
          0 !== He.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (ie = this.featureFlags) || void 0 === ie || ie.unsetPersonPropertiesForFlags(He, !0), this.capture("$set", {
            $unset: He
          }), this._cachedPersonProperties = null)
        }
        group(ee, ie, He) {
          var ye;
          if (!ee || !ie) return void CK.error("posthog.group requires a group type and group key");
          null === (ye = this.persistence) || void 0 === ye || ye.syncCookieProperties(), this._processCookieIdentityChange();
          const be = this.getGroups(),
            Me = be[ee] !== ie;
          if (Me && this.resetGroupPropertiesForFlags(ee), this.register({
              $groups: Eb(Eb({}, be), {}, {
                [ee]: ie
              })
            }), (Me || He) && this._hasPersonProcessing()) {
            const ye = {
              $group_type: ee,
              $group_key: ie
            };
            He && (ye.$group_set = He), this.capture(Gi, ye)
          }
          He && this.setGroupPropertiesForFlags({
            [ee]: He
          }), Me && !He && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var He;
          null === (He = this.featureFlags) || void 0 === He || He.setPersonPropertiesForFlags(ee, ie)
        }
        resetPersonPropertiesForFlags() {
          let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var ie;
          null === (ie = this.featureFlags) || void 0 === ie || ie.resetPersonPropertiesForFlags(ee)
        }
        setGroupPropertiesForFlags(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var He;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (He = this.featureFlags) || void 0 === He || He.setGroupPropertiesForFlags(ee, ie))
        }
        resetGroupPropertiesForFlags(ee) {
          var ie;
          null === (ie = this.featureFlags) || void 0 === ie || ie.resetGroupPropertiesForFlags(ee)
        }
        reset(ee) {
          const ie = VH(ee) ? ee : null == ee ? void 0 : ee.resetDeviceID,
            He = VH(ee) || null == ee ? void 0 : ee.bootstrap;
          this._reset(ie, !1, He)
        }
        _reset(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0;
          var ye, be, Me, Ke, Ue, Fe;
          if (CK.info("reset"), !this.__loaded) return CK.uninitializedWarning("posthog.reset");
          const Je = null == He ? void 0 : He.sessionID;
          this.config.bootstrap = He || (null === (ye = this._originalUserConfig) || void 0 === ye ? void 0 : ye.bootstrap) || {}, null === (be = this.featureFlags) || void 0 === be || null === (Me = be.updateConfig) || void 0 === Me || Me.call(be, this.config, this._shouldDisableFlags());
          const oe = this.get_property(We),
            Re = this.get_property(te),
            ke = this.get_property(ne);
          null === (Ke = this.sessionRecording) || void 0 === Ke || Ke.flushBeforeIdentityReset();
          const qe = this.is_capturing();
          ie || this.consent.reset(), ie || !qe || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const fe = null === (Ue = this.persistence) || void 0 === Ue || null === (Fe = Ue._beginCookieSyncSuppression) || void 0 === Fe ? void 0 : Fe.call(Ue),
            Te = this._isConsentTransition;
          this._isConsentTransition = Te || ie;
          let pe = !1;
          try {
            var Xe, ze, Be, Ee, ge, Oe, de, Ze, we, De, Pe, Ae, Ye;
            if (null === (Xe = this.persistence) || void 0 === Xe || Xe.clear(), null === (ze = this.sessionPersistence) || void 0 === ze || ze.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), tH(ke) || null === (De = this.persistence) || void 0 === De || De.register({
                $session_recording_remote_config: ke
              }), null === (Be = this.surveys) || void 0 === Be || Be.reset(), null === (Ee = this.featureFlags) || void 0 === Ee || Ee.reset(), null === (ge = this.conversations) || void 0 === ge || ge.reset(), null === (Oe = this.logs) || void 0 === Oe || Oe.reset(), null === (de = this.metrics) || void 0 === de || de.reset(), null === (Ze = this.persistence) || void 0 === Ze || Ze.set_property("$user_state", "anonymous"), null === (we = this.sessionManager) || void 0 === we || we.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: Zi,
              $device_id: null
            }, "");
            else {
              const ie = this.config.get_device_id(bU());
              this.register_once({
                distinct_id: ie,
                $device_id: ee ? ie : oe
              }, ""), ee || tH(Re) || this.register({
                [te]: Re
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), He && (He.distinctID && !this._inCookielessMode() && (null === (Ye = this.persistence) || void 0 === Ye || Ye.set_property("$user_state", He.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: He.distinctID
              })), null === (Pe = this.featureFlags) || void 0 === Pe || Pe.initialize(), !PH(Je) && !(null === (Ae = this.sessionManager) || void 0 === Ae ? void 0 : Ae.setBootstrapSessionId(Je, !0)))) {
              const ee = Eb({}, He);
              delete ee.sessionID, this.config.bootstrap = ee
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, pe = !0
          } finally {
            var Ve, ae;
            this._isConsentTransition = Te, fe && (null === (Ve = this.persistence) || void 0 === Ve || null === (ae = Ve._endCookieSyncSuppression) || void 0 === ae || ae.call(Ve, pe))
          }
          this.reloadFeatureFlags()
        }
        shutdown(ee) {
          var ie = this;
          return jH((function*() {
            if (!ie.__loaded) return void CK.uninitializedWarning("posthog.shutdown");
            ie._isShutdown = !0, clearTimeout(ie._extensionInitTimeout), ie._extensionInitTimeout = void 0;
            const ee = ie._featureFlagsReloadingUnsubscribe;
            ie._featureFlagsReloadingUnsubscribe = void 0;
            for (const He of [() => {
                var ee;
                return null === (ee = ie.sessionRecording) || void 0 === ee ? void 0 : ee.dispose()
              }, () => {
                var ee;
                return null === (ee = ie.logs) || void 0 === ee ? void 0 : ee.flushLogs("sendBeacon")
              }, () => {
                var ee;
                return null === (ee = ie.metrics) || void 0 === ee ? void 0 : ee.flush("sendBeacon")
              }, () => {
                var ee;
                return null === (ee = ie.metrics) || void 0 === ee ? void 0 : ee.dispose()
              }, () => {
                var ee;
                return null === (ee = ie.logs) || void 0 === ee ? void 0 : ee.dispose()
              }, () => {
                var ee;
                return null === (ee = ie.surveys) || void 0 === ee ? void 0 : ee.dispose()
              }, () => {
                var ee;
                return null === (ee = ie.autocapture) || void 0 === ee ? void 0 : ee.dispose()
              }, () => null == ee ? void 0 : ee(), () => {
                var ee;
                return null === (ee = ie._requestQueue) || void 0 === ee ? void 0 : ee.unload()
              }, () => {
                var ee;
                return null === (ee = ie._retryQueue) || void 0 === ee ? void 0 : ee.unload()
              }, () => {
                var ee;
                return null === (ee = ie.featureFlags) || void 0 === ee ? void 0 : ee.destroy()
              }, () => {
                var ee;
                return null === (ee = ie.persistence) || void 0 === ee ? void 0 : ee.destroy()
              }, () => {
                var ee;
                return null === (ee = ie.sessionPersistence) || void 0 === ee ? void 0 : ee.destroy()
              }]) try {
              const ee = He();
              ee && OH(ee.then) && ee.then(void 0, (ee => {
                CK.error("Error during shutdown", ee)
              }))
            } catch (ee) {
              CK.error("Error during shutdown", ee)
            }
          }))()
        }
        setIdentity(ee, ie) {
          var He;
          delete this.config.identity_claims, this.config.identity_distinct_id = ee, this.config.identity_hash = ie, this.alias(ee), null === (He = this.conversations) || void 0 === He || He._onIdentityChanged()
        }
        clearIdentity() {
          var ee;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (ee = this.conversations) || void 0 === ee || ee._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var ee, ie;
          return null !== (ee = null === (ie = this.sessionManager) || void 0 === ie ? void 0 : ie.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== ee ? ee : ""
        }
        get_session_replay_url(ee) {
          if (!this.sessionManager) return "";
          const {
            sessionId: ie,
            sessionStartTimestamp: He
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let ye = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${ie}`);
          if ((null == ee ? void 0 : ee.withTimestamp) && He) {
            var be;
            const ie = null !== (be = ee.timestampLookBack) && void 0 !== be ? be : 10;
            if (!He) return ye;
            ye += `?t=${Math.max(Math.floor(((new Date).getTime()-He)/1e3)-ie,0)}`
          }
          return ye
        }
        alias(ee, ie) {
          return ee === this.get_property("$people_distinct_id") ? (CK.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (tH(ie) && (ie = this.get_distinct_id()), ee !== ie ? (this._register_single(Ze, ee), this.capture("$create_alias", {
            alias: ee,
            distinct_id: ie
          })) : (CK.warn("alias matches current distinct_id - skipping api call."), this.identify(ee), -1)) : void 0
        }
        set_config(ee) {
          const ie = Eb({}, this.config);
          if (dH(ee)) {
            var He, ye, be, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe;
            lK(this.config, jR(ee));
            const ge = this._is_persistence_disabled();
            if (this.persistence) {
              const ee = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var Xe, ze;
              if (ee && this.sessionPersistence !== this.persistence && (null === (Xe = this.sessionPersistence) || void 0 === Xe || Xe.remove(), null === (ze = this.sessionPersistence) || void 0 === ze || ze.destroy()), this.persistence.update_config(this.config, ie, ge), ee) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new pJ(Eb(Eb({}, this.config), {}, {
                persistence: "sessionStorage"
              }), ge, !1);
              else {
                var Be;
                null === (Be = this.sessionPersistence) || void 0 === Be || Be.update_config(Eb(Eb({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), Eb(Eb({}, ie), {}, {
                  persistence: "sessionStorage"
                }), ge)
              }
            }
            const Oe = this._checkLocalStorageForDebug(this.config.debug);
            var Ee;
            VH(Oe) && (this.config.debug = Oe), VH(this.config.debug) && (this.config.debug ? (Me.DEBUG = !0, RU._is_supported() && RU._set("ph_debug", !0), CK.info("set_config", {
              config: ee,
              oldConfig: ie,
              newConfig: Eb({}, this.config)
            })) : (Me.DEBUG = !1, RU._is_supported() && RU._remove("ph_debug"))), null === (He = this.featureFlags) || void 0 === He || null === (ye = He.updateConfig) || void 0 === ye || ye.call(He, this.config, this._shouldDisableFlags()), null === (be = this.exceptionObserver) || void 0 === be || be.onConfigChange(), null === (Ke = this.exceptions) || void 0 === Ke || Ke.onConfigChange(), null === (Ue = this.metrics) || void 0 === Ue || Ue.onConfigChange(), null === (Fe = this.webMCP) || void 0 === Fe || Fe.startIfEnabled(), null === (Je = this.sessionRecording) || void 0 === Je || Je.startIfEnabledOrStop(), null === (oe = this.tracingHeaders) || void 0 === oe || oe.startIfEnabledOrStop(), null === (Re = this.autocapture) || void 0 === Re || Re.startIfEnabled(), null === (ke = this.heatmaps) || void 0 === ke || ke.startIfEnabled(), ("capture_pageview" in ee || "disable_capture_url_hashes" in ee) && (null === (Ee = this.historyAutocapture) || void 0 === Ee || Ee.startIfEnabledOrStop()), null === (qe = this.exceptionObserver) || void 0 === qe || qe.startIfEnabledOrStop(), null === (fe = this.deadClicksAutocapture) || void 0 === fe || fe.startIfEnabledOrStop(), null === (Te = this.surveys) || void 0 === Te || Te.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (pe = this.externalIntegrations) || void 0 === pe || pe.startIfEnabledOrStop(), !ie.segment && this.config.segment && this.persistence && WF(this, DR, !1)
          }
        }
        _overrideSDKInfo(ee, ie) {
          Me.LIB_NAME = ee, Me.LIB_VERSION = ie
        }
        startSessionRecording(ee) {
          const ie = !0 === ee,
            He = {
              sampling: ie || !!(null == ee ? void 0 : ee.sampling),
              linked_flag: ie || !!(null == ee ? void 0 : ee.linked_flag),
              url_trigger: ie || !!(null == ee ? void 0 : ee.url_trigger),
              event_trigger: ie || !!(null == ee ? void 0 : ee.event_trigger)
            };
          var ye, be, Me, Ke, Ue;
          Object.values(He).some(Boolean) && (null === (ye = this.sessionManager) || void 0 === ye || ye.checkAndGetSessionAndWindowId(), He.sampling && (null === (be = this.sessionRecording) || void 0 === be || be.overrideSampling()), He.linked_flag && (null === (Me = this.sessionRecording) || void 0 === Me || Me.overrideLinkedFlag()), He.url_trigger && (null === (Ke = this.sessionRecording) || void 0 === Ke || Ke.overrideTrigger("url")), He.event_trigger && (null === (Ue = this.sessionRecording) || void 0 === Ue || Ue.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var ee;
          return !!(null === (ee = this.sessionRecording) || void 0 === ee ? void 0 : ee.started)
        }
        captureException(ee, ie) {
          try {
            if (!this.exceptions) return;
            const He = this.exceptions.buildProperties(ee, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(Eb(Eb({}, He), ie))
          } catch (ee) {
            return
          }
        }
        addExceptionStep(ee, ie) {
          var He;
          null === (He = this.exceptions) || void 0 === He || He.addExceptionStep(ee, ie)
        }
        captureLog(ee) {
          var ie;
          null === (ie = this.logs) || void 0 === ie || ie.captureLog(ee)
        }
        get logger() {
          var ie, He;
          return null !== (ie = null === (He = this.logs) || void 0 === He ? void 0 : He.logger) && void 0 !== ie ? ie : ee._noopLogger
        }
        startExceptionAutocapture(ee) {
          this.set_config({
            capture_exceptions: null == ee || ee
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(ee) {
          var ie, He;
          return null !== (ie = null === (He = this.toolbar) || void 0 === He ? void 0 : He.loadToolbar(ee)) && void 0 !== ie && ie
        }
        get_property(ee) {
          var ie;
          return null === (ie = this.persistence) || void 0 === ie ? void 0 : ie.props[ee]
        }
        getSessionProperty(ee) {
          var ie;
          return null === (ie = this.sessionPersistence) || void 0 === ie ? void 0 : ie.props[ee]
        }
        toString() {
          var ee;
          let ie = null !== (ee = this.config.name) && void 0 !== ee ? ee : mR;
          return ie !== mR && (ie = "posthog." + ie), ie
        }
        _isIdentified() {
          var ee, ie;
          return "identified" === (null === (ee = this.persistence) || void 0 === ee ? void 0 : ee.get_property("$user_state")) || "identified" === (null === (ie = this.sessionPersistence) || void 0 === ie ? void 0 : ie.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var ee, ie;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && WH(this.getGroups()) && !(null === (ee = this.persistence) || void 0 === ee || null === (ee = ee.props) || void 0 === ee ? void 0 : ee.__alias) && !(null === (ie = this.persistence) || void 0 === ie || null === (ie = ie.props) || void 0 === ie ? void 0 : ie.$epp))
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
        _requirePersonProcessing(ee) {
          return "never" === this.config.person_profiles ? (CK.error(ee + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(ti, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const ee = this.consent.isOptedOut();
          return this.config.disable_persistence || ee && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var ee, ie;
          const He = this._is_persistence_disabled();
          var ye, be, Me;
          return this.is_capturing() || null === (ye = this.logs) || void 0 === ye || ye._onOptOut(), (null === (ee = this.persistence) || void 0 === ee ? void 0 : ee._disabled) !== He && (null === (be = this.persistence) || void 0 === be || be.set_disabled(He)), (null === (ie = this.sessionPersistence) || void 0 === ie ? void 0 : ie._disabled) !== He && (null === (Me = this.sessionPersistence) || void 0 === Me || Me.set_disabled(He)), this._persistSessionRegisteredPropKeys(), He
        }
        opt_in_capturing(ie) {
          var He;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var ye, be, Me, Ke, Ue, Fe;
              null === (ye = this.sessionRecording) || void 0 === ye || ye.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (be = this.sessionManager) || void 0 === be || be.destroy(), null === (Me = this.pageViewManager) || void 0 === Me || Me.destroy(), this.sessionManager = new ro(this), this.pageViewManager = new DF(this), this.persistence && (this.sessionPropsManager = new Io(this, this.sessionManager, this.persistence));
              const ie = null !== (Ke = null === (Ue = this.config.__extensionClasses) || void 0 === Ue ? void 0 : Ue.sessionRecording) && void 0 !== Ke ? Ke : null === (Fe = ee.__defaultExtensionClasses) || void 0 === Fe ? void 0 : Fe.sessionRecording;
              var Je, oe;
              ie && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new ie(this)), this._lastRemoteConfig && (null === (Je = this.sessionRecording) || void 0 === Je || null === (oe = Je.onRemoteConfig) || void 0 === oe || oe.call(Je, this._lastRemoteConfig)))
            }
            var Re, ke;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (He = this.sessionRecording) || void 0 === He || He.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (Re = this.surveys) || void 0 === Re || Re.loadIfEnabled()), (tH(null == ie ? void 0 : ie.captureEventName) || (null == ie ? void 0 : ie.captureEventName)) && this.capture(null !== (ke = null == ie ? void 0 : ie.captureEventName) && void 0 !== ke ? ke : "$opt_in", null == ie ? void 0 : ie.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else CK.warn(PR)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : CK.warn(PR)
        }
        _enterCookielessMode() {
          var ee, ie;
          const He = this.sessionRecording;
          null == He || He.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: Zi,
            $device_id: null
          }), this._removeExtension(He), this.sessionRecording = void 0, null === (ee = this.sessionManager) || void 0 === ee || ee.destroy(), null === (ie = this.pageViewManager) || void 0 === ie || ie.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const ee = this.consent.consent;
          return 1 === ee ? "granted" : 0 === ee ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return eH ? Qo(eH, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          iH && ("visible" === iH.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(si, {
            title: iH.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (iH.removeEventListener(ge, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), NK(iH, ge, this._visibilityStateListener)))
        }
        debug(ee) {
          !1 === ee ? (null == ri || ri.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == ri || ri.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const ee = this._originalUserConfig || {};
          return "advanced_disable_flags" in ee ? !!ee.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (CK.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(ee, ie, He, ye, be) {
            const Me = ie in ee && !PH(ee[ie]),
              Ke = He in ee && !PH(ee[He]);
            return Me ? ee[ie] : !!Ke && (be && be.warn(`Config field '${He}' is deprecated. Please use '${ie}' instead. The old field will be removed in a future major version.`), ee[He])
          }(ee, "advanced_disable_flags", "advanced_disable_decide", 0, CK)
        }
        _runBeforeSend(ee) {
          var ie;
          if (PH(this.config.before_send)) return ee;
          const He = Object.keys(null !== (ie = ee.properties) && void 0 !== ie ? ie : {}).filter(cH),
            ye = gH(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let be = ee;
          for (const Me of ye) try {
            if (be = Me(be), PH(be)) {
              const ie = `Event '${ee.event}' was rejected in beforeSend function`;
              return aH(ee.event) ? CK.warn(`${ie}. This can cause unexpected behavior.`) : CK.info(ie), null
            }
            be.properties && !WH(be.properties) || CK.warn(`Event '${ee.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (ie) {
            return CK.error(`Error in beforeSend function for event '${ee.event}':`, ie), null
          }
          for (const Me of He)
            if (be.properties && PH(be.properties[Me])) return CK.warn(`Event '${ee.event}' had its '${Me}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return be
        }
        getPageViewId() {
          var ee;
          return null === (ee = this.pageViewManager._currentPageview) || void 0 === ee ? void 0 : ee.pageViewId
        }
        captureTraceFeedback(ee, ie) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(ee),
            $ai_feedback_text: ie
          })
        }
        captureTraceMetric(ee, ie, He) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(ee),
            $ai_metric_name: ie,
            $ai_metric_value: String(He)
          })
        }
        _checkLocalStorageForDebug(ee) {
          const ie = VH(ee) && !ee,
            He = RU._is_supported() && "true" === RU._get("ph_debug");
          return !ie && (!!He || ee)
        }
      };
    IR.__defaultExtensionClasses = {}, IR._noopLogger = (() => {
        const ee = () => {};
        return {
          trace: ee,
          debug: ee,
          info: ee,
          warn: ee,
          error: ee,
          fatal: ee
        }
      })(),
      function(ee, ie) {
        for (let He = 0; ie.length > He; He++) ee.prototype[ie[He]] = nK(ee.prototype[ie[He]])
      }(IR, ["identify"]);
    var hR = class {
      constructor(ee) {
        this.disabled = !1 === ee;
        const ie = dH(ee) ? ee : {};
        this.thresholdPx = ie.threshold_px || 30, this.timeoutMs = ie.timeout_ms || 1e3, this.clickCount = ie.click_count || 3, this.clicks = []
      }
      isRageClick(ee, ie, He) {
        if (this.disabled) return !1;
        const ye = this.clicks[this.clicks.length - 1];
        if (ye && Math.abs(ee - ye.x) + Math.abs(ie - ye.y) < this.thresholdPx && this.timeoutMs > He - ye.timestamp) {
          if (this.clicks.push({
              x: ee,
              y: ie,
              timestamp: He
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: ee,
          y: ie,
          timestamp: He
        }];
        return !1
      }
    };
    const NR = "$copy_autocapture",
      GR = vK("[AutoCapture]");

    function rR(ee, ie) {
      return ie.length > ee ? ie.slice(0, ee) + "..." : ie
    }

    function QR(ee) {
      if (ee.previousElementSibling) return ee.previousElementSibling;
      let ie = ee;
      do {
        ie = ie.previousSibling
      } while (ie && !PU(ie));
      return ie
    }
    var ek = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(ee) {
          var ie;
          if (!MF(ee)) return !0;
          const He = null !== (ie = this._refreshConfig().css_selector_ignorelist) && void 0 !== ie ? ie : nU,
            ye = new Set;
          let be = ee;
          for (; be;) {
            if (ye.size >= 1e3 || ye.has(be)) return !0;
            ye.add(be);
            const ee = be,
              ie = xU(ee);
            if (fH(ie, "ph-no-capture") || fH(ie, "ph-sensitive") || KF(ee) || He.some((ie => mU(ee, ie)))) return !0;
            const Me = be.parentNode;
            be = VU(Me) ? Me.host : Me && PU(Me) ? Me : null
          }
          return !1
        }
        _trackPointer(ee) {
          if (!this.isEnabled || "pointercancel" === ee.type) return void this._clearPointer();
          if ("pointerdown" === ee.type) {
            this._clearPointer();
            const He = vU(ee);
            var ie;
            return void(ee.isPrimary && 0 === ee.button && !ee.ctrlKey && He && PU(He) && (this._pointerDown = {
              target: He,
              excluded: this._isExcludedPointerTarget(He),
              id: ee.pointerId,
              x: ee.clientX,
              y: ee.clientY,
              released: !1,
              distinctId: null === (ie = this._client) || void 0 === ie ? void 0 : ie.distinctId
            }))
          }
          const He = this._pointerDown;
          He && (ee.pointerId !== He.id || Math.abs(ee.clientX - He.x) > 5 || Math.abs(ee.clientY - He.y) > 5 ? this._clearPointer() : "pointerup" === ee.type && (He.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(ee) {
          var ie;
          const He = this._pointerDown;
          this._clearPointer();
          const ye = vU(ee);
          if ((null == He ? void 0 : He.released) && He.target.isConnected && He.distinctId === (null === (ie = this._client) || void 0 === ie ? void 0 : ie.distinctId) && ee.pointerId === He.id && (ee.detail > 0 || "touch" === ee.pointerType || "pen" === ee.pointerType) && 0 === ee.button && 5 >= Math.abs(ee.clientX - He.x) && 5 >= Math.abs(ee.clientY - He.y) && ye && (AU(ye, "html") || AU(ye, "body"))) {
            var be;
            if (He.excluded) return null;
            const ee = null !== (be = this._refreshConfig().css_selector_ignorelist) && void 0 !== be ? be : nU;
            return [ye, null == iH ? void 0 : iH.documentElement, null == iH ? void 0 : iH.body].some((ie => {
              if (!ie) return !1;
              const He = xU(ie);
              return fH(He, "ph-no-capture") || fH(He, "ph-sensitive") || !MF(ie) || KF(ie) || ee.some((ee => mU(ie, ee)))
            })) ? null : He.target
          }
        }
        constructor(ee) {
          this._configSource = ee, this.name = ER, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new hR(this._config.rageclick), this._elementSelectors = null
        }
        setup(ee) {
          this._compileUrlPatterns(), this._client = ee;
          const ie = ee.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? ie.dispose() : (this._remoteConfigSubscription = ie, this.startIfEnabled())
        }
        dispose() {
          var ee;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (ee = this._remoteConfigSubscription) || void 0 === ee || ee.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var ee, ie;
          return this._refreshConfig(), this._config.url_allowlist = null === (ee = this._config.url_allowlist) || void 0 === ee ? void 0 : ee.map((ee => new RegExp(ee))), this._config.url_ignorelist = null === (ie = this._config.url_ignorelist) || void 0 === ie ? void 0 : ie.map((ee => new RegExp(ee))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void GR.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!ri || !iH) return;
          const ee = this._domEventHandler = ee => {
            ee = ee || (null == ri ? void 0 : ri.event);
            try {
              if ("blur" === ee.type) return void this._clearPointer();
              if (0 === ee.type.indexOf("pointer")) return void this._trackPointer(ee);
              const ie = "click" === ee.type ? this._recoverClickTarget(ee) : void 0;
              if (DH(ie)) return;
              this._captureEvent(ee, "$autocapture", ie)
            } catch (ee) {
              GR.error("Failed to capture event", ee)
            }
          };
          if (NK(ri, "blur", ee), NK(iH, "submit", ee, {
              capture: !0
            }), NK(iH, "change", ee, {
              capture: !0
            }), NK(iH, "click", ee, {
              capture: !0
            }), mK(["pointerdown", "pointermove", "pointerup", "pointercancel"], (ie => {
              NK(iH, ie, ee, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const ee = this._copiedTextHandler = ee => {
              ee = ee || (null == ri ? void 0 : ri.event);
              try {
                this._captureEvent(ee, NR)
              } catch (ee) {
                GR.error("Failed to capture clipboard event", ee)
              }
            };
            NK(iH, "copy", ee, {
              capture: !0
            }), NK(iH, "cut", ee, {
              capture: !0
            }), NK(iH, "paste", ee, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == ri || ri.removeEventListener("blur", this._domEventHandler), mK(["pointerdown", "pointermove", "pointerup", "pointercancel"], (ee => {
            null == iH || iH.removeEventListener(ee, this._domEventHandler, !0)
          })), null == iH || iH.removeEventListener("submit", this._domEventHandler, !0), null == iH || iH.removeEventListener("change", this._domEventHandler, !0), null == iH || iH.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == iH || iH.removeEventListener("copy", this._copiedTextHandler, !0), null == iH || iH.removeEventListener("cut", this._copiedTextHandler, !0), null == iH || iH.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(ee) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !ee.ok) return void this.startIfEnabled();
          const ie = ee.config;
          ie.elementsChainAsString && (this._elementsChainAsString = ie.elementsChainAsString);
          const He = ie.autocapture_opt_out;
          var ye;
          VH(He) && (null === (ye = this._client) || void 0 === ye || ye.kv.set("$autocapture_disabled_server_side", He), this._isDisabledServerSide = He), this.startIfEnabled()
        }
        setElementSelectors(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          ee.size ? this._elementSelectorsByOwner.set(ie, new Set(ee)) : this._elementSelectorsByOwner.delete(ie);
          const He = new Set;
          this._elementSelectorsByOwner.forEach((ee => {
            ee.forEach((ee => He.add(ee)))
          })), this._elementSelectors = He
        }
        getElementSelectors(ee, ie) {
          var He;
          const ye = [];
          return null === (He = this._elementSelectors) || void 0 === He || He.forEach((He => {
            const be = null == iH ? void 0 : iH.querySelectorAll(He);
            null == be || be.forEach((be => {
              ee !== be && ie !== be || fH(ye, He) || ye.push(He)
            }))
          })), ye
        }
        get isEnabled() {
          var ee, ie;
          if (this._disposed) return !1;
          const He = null === (ee = this._client) || void 0 === ee ? void 0 : ee.kv.get(ae),
            ye = this._isDisabledServerSide,
            be = this._refreshConfig();
          if (!be.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const Me = be.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (DH(ye) && !VH(He) && !Me) return !1;
          const Ke = null !== (ie = this._isDisabledServerSide) && void 0 !== ie ? ie : !!He;
          return !!be.enabled && !Ke
        }
        _captureEvent(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            He = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let ye = He || vU(ee);
          YU(ye) && (ye = ye.parentNode || null);
          const be = this._compileUrlPatterns();
          var Me;
          "$autocapture" === ie && "click" === ee.type && ee instanceof MouseEvent && be.rageclick && (null === (Me = this.rageclicks) || void 0 === Me ? void 0 : Me.isRageClick(ee.clientX, ee.clientY, ee.timeStamp || (new Date).getTime())) && HF(ye, be.rageclick) && this._captureEvent(ee, "$rageclick", He);
          const Ke = ie === NR,
            Ue = Ke ? Eb(Eb({}, be), {}, {
              dom_event_allowlist: void 0
            }) : be;
          if (ye && function(ee, ie, He, ye, be, Me) {
              var Ke;
              if (!ri || yF(ee)) return !1;
              if ((null == He ? void 0 : He.url_allowlist) && !cU(He.url_allowlist, Me)) return !1;
              if ((null == He ? void 0 : He.url_ignorelist) && cU(He.url_ignorelist, Me)) return !1;
              if (null == He ? void 0 : He.dom_event_allowlist) {
                const ee = He.dom_event_allowlist;
                if (ee && !ee.some((ee => ie.type === ee))) return !1
              }
              const {
                parentIsUsefulElement: Ue,
                targetElementList: Fe
              } = bF(ee, ye);
              if (! function(ee, ie) {
                  const He = null == ie ? void 0 : ie.element_allowlist;
                  if (tH(He)) return !0;
                  for (const ye of ee)
                    if (He.some((ee => ye.tagName.toLowerCase() === ee))) return !0;
                  return !1
                }(Fe, He)) return !1;
              if (!lU(Fe, null == He ? void 0 : He.css_selector_allowlist)) return !1;
              if (lU(Fe, null !== (Ke = null == He ? void 0 : He.css_selector_ignorelist) && void 0 !== Ke ? Ke : nU)) return !1;
              try {
                const He = ri.getComputedStyle(ee);
                if (He && "pointer" === He.getPropertyValue("cursor") && "click" === ie.type) return !0
              } catch (ee) {}
              const Je = ee.tagName.toLowerCase();
              switch (Je) {
                case "html":
                  return !1;
                case "form":
                  return (be || ["submit"]).indexOf(ie.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (be || ["change", "click"]).indexOf(ie.type) >= 0;
                default:
                  return Ue ? (be || ["click"]).indexOf(ie.type) >= 0 : (be || ["click"]).indexOf(ie.type) >= 0 && (uU.indexOf(Je) > -1 || "true" === ee.getAttribute("contenteditable"))
              }
            }(ye, ee, Ue, Ke, Ke ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: be.getCurrentUrl
              }
            })) {
            var Fe;
            const {
              props: He,
              explicitNoCapture: Me,
              target: Ke
            } = function(ee, ie) {
              let {
                e: He,
                maskAllElementAttributes: ye,
                maskAllText: be,
                elementAttributeIgnoreList: Me,
                elementsChainAsString: Ke,
                disableCaptureUrlHashes: Ue
              } = ie;
              var Fe, Je;
              if (!PU(ee)) return {
                props: {}
              };
              const oe = [ee],
                Re = new Set([ee]);
              let ke = ee;
              for (; ke.parentNode && !AU(ke, "body") && 1e3 > oe.length;)
                if (VU(ke.parentNode)) {
                  const ee = ke.parentNode.host;
                  if (Re.has(ee)) break;
                  Re.add(ee), oe.push(ee), ke = ee
                } else {
                  if (!PU(ke.parentNode)) break;
                  if (Re.has(ke.parentNode)) break;
                  Re.add(ke.parentNode), oe.push(ke.parentNode), ke = ke.parentNode
                } const qe = "click" === He.type && "http://www.w3.org/2000/svg" === ee.namespaceURI ? oe.findIndex((ee => AU(ee, "button") || AU(ee, "a"))) : -1;
              qe > 0 && (be = be || oe.slice(0, qe + 1).some((ee => !MF(ee) || KF(ee))));
              const fe = [],
                Te = {};
              let pe, Xe = !1,
                ze = !1;
              if (mK(oe, (ee => {
                  const ie = MF(ee);
                  if (AU(ee, "a") && !ye && !(null == Me ? void 0 : Me.includes("href"))) {
                    const He = ee.getAttribute("href");
                    Xe = !!(ie && He && fF(He)) && (Ue ? kb(He) : He)
                  }
                  fH(xU(ee), "ph-no-capture") && (ze = !0), fe.push(function(ee, ie, He, ye) {
                    let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const Me = ee.tagName.toLowerCase(),
                      Ke = {
                        tag_name: Me
                      };
                    uU.indexOf(Me) > -1 && !He && (Ke.$el_text = "a" === Me.toLowerCase() || "button" === Me.toLowerCase() ? rR(1024, TF(ee)) : rR(1024, CU(ee)));
                    const Ue = xU(ee);
                    ie || (null == ye ? void 0 : ye.includes("class")) || 0 >= Ue.length || (Ke.classes = Ue.filter((function(ee) {
                      return "" !== ee
                    }))), mK(ee.attributes, (function(He) {
                      var Me;
                      if ((!KF(ee) || -1 !== ["name", "id", "class", "aria-label"].indexOf(He.name)) && !(null == ye ? void 0 : ye.includes(He.name)) && !ie && fF(He.value) && (!ZH(Me = He.name) || "_ngcontent" !== Me.substring(0, 10) && "_nghost" !== Me.substring(0, 7))) {
                        let ee = He.value;
                        "class" === He.name && (ee = aU(ee).join(" ")), Ke["attr__" + He.name] = rR(1024, "href" === He.name && be ? kb(ee) : ee)
                      }
                    }));
                    let Fe = 1,
                      Je = 1,
                      oe = ee;
                    for (; oe = QR(oe);) Fe++, oe.tagName === ee.tagName && Je++;
                    return Ke.nth_child = Fe, Ke.nth_of_type = Je, Ke
                  }(ee, ye, be, Me, Ue)), mK(function(ee) {
                    if (!MF(ee)) return {};
                    const ie = {};
                    return mK(ee.attributes, (function(ee) {
                      if (ee.name && 0 === ee.name.indexOf("data-ph-capture-attribute")) {
                        const He = ee.name.replace("data-ph-capture-attribute-", ""),
                          ye = ee.value;
                        He && ye && fF(ye) && (ie[He] = ye)
                      }
                    })), ie
                  }(ee), ((ee, ie) => {
                    ({}).hasOwnProperty.call(Te, ie) || (Te[ie] = ee)
                  }))
                })), ze) return {
                props: {},
                explicitNoCapture: ze
              };
              if (qe > 0 && (ee = oe[qe], fe.splice(0, qe)), be || (fe[0].$el_text = AU(ee, "a") || AU(ee, "button") ? TF(ee) : CU(ee)), Xe) {
                var Be, Ee;
                fe[0].attr__href = Xe;
                const ee = null === (Be = vF(Xe)) || void 0 === Be ? void 0 : Be.host,
                  ie = null == ri || null === (Ee = ri.location) || void 0 === Ee ? void 0 : Ee.host;
                ee && ie && ee !== ie && (pe = Xe)
              }
              return {
                props: lK((Oe = He.type, {
                  $event_type: Oe,
                  $ce_version: 1
                }), Ke ? {} : {
                  $elements: fe
                }, {
                  $elements_chain: (ge = fe, gH(ge) ? function(ee) {
                    return ee.map((ee => {
                      var ie, He;
                      let ye = "";
                      if (ee.tag_name && (ye += ee.tag_name), ee.attr_class) {
                        ee.attr_class.sort();
                        for (const ie of ee.attr_class) ye += `.${ie.replace(/"/g,"")}`
                      }
                      const be = Eb(Eb(Eb(Eb({}, ee.text ? {
                          text: ee.text
                        } : {}), {}, {
                          "nth-child": null !== (ie = ee.nth_child) && void 0 !== ie ? ie : 0,
                          "nth-of-type": null !== (He = ee.nth_of_type) && void 0 !== He ? He : 0
                        }, ee.href ? {
                          href: ee.href
                        } : {}), ee.attr_id ? {
                          attr_id: ee.attr_id
                        } : {}), ee.attributes),
                        Me = {};
                      return SK(be).sort(((ee, ie) => {
                        let [He] = ee, [ye] = ie;
                        return function(ee, ie) {
                          return ie > ee ? -1 : ee > ie ? 1 : 0
                        }(He, ye)
                      })).forEach((ee => {
                        let [ie, He] = ee;
                        return Me[XF(ie.toString())] = XF(He.toString())
                      })), ye += ":", ye += SK(Me).map((ee => {
                        let [ie, He] = ee;
                        return `${ie}="${He}"`
                      })).join(""), ye
                    })).join(";")
                  }(function(ee) {
                    return ee.map((ee => {
                      var ie, He;
                      const ye = {
                        text: null === (ie = ee.$el_text) || void 0 === ie ? void 0 : ie.slice(0, 400),
                        tag_name: ee.tag_name,
                        href: null === (He = ee.attr__href) || void 0 === He ? void 0 : He.slice(0, 2048),
                        attr_class: zF(ee),
                        attr_id: ee.attr__id,
                        nth_child: ee.nth_child,
                        nth_of_type: ee.nth_of_type,
                        attributes: {}
                      };
                      return SK(ee).filter((ee => {
                        let [ie] = ee;
                        return 0 === ie.indexOf("attr__")
                      })).forEach((ee => {
                        let [ie, He] = ee;
                        return ye.attributes[ie] = He
                      })), ye
                    }))
                  }(ge)) : "")
                }, (null === (Fe = fe[0]) || void 0 === Fe ? void 0 : Fe.$el_text) ? {
                  $el_text: null === (Je = fe[0]) || void 0 === Je ? void 0 : Je.$el_text
                } : {}, pe && "click" === He.type ? {
                  $external_click_url: pe
                } : {}, Te),
                target: ee
              };
              var ge, Oe
            }(ye, {
              e: ee,
              maskAllElementAttributes: be.maskAllElementAttributes,
              maskAllText: be.maskAllText,
              elementAttributeIgnoreList: be.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: be.disableCaptureUrlHashes
            });
            if (Me) return !1;
            const Ue = this.getElementSelectors(ye, Ke);
            if (Ue && Ue.length > 0 && (He.$element_selectors = Ue), ie === NR) {
              const ie = ee.type || "clipboard";
              if ("paste" !== ie) {
                var Je, oe;
                const ee = null == ri || null === (Je = ri.getSelection()) || void 0 === Je ? void 0 : Je.toString(),
                  ie = LU(ee);
                if (!ie) return !1;
                He.$selected_content = ie, He.$clipboard_text_length = null !== (oe = null == ee ? void 0 : ee.length) && void 0 !== oe ? oe : 0
              }
              He.$copy_type = ie
            }
            return null === (Fe = this._client) || void 0 === Fe || Fe.capture(ie, He), !0
          }
        }
        isBrowserSupported() {
          return OH(null == iH ? void 0 : iH.querySelectorAll)
        }
      },
      ik = class {
        constructor(ee) {
          this._instance = ee
        }
        refresh(ee) {
          const ie = this._instance.config,
            He = dH(ie.autocapture) ? ie.autocapture : void 0;
          ee.enabled = !!ie.autocapture, ee.rageclick = ie.rageclick, ee.maskAllElementAttributes = ie.mask_all_element_attributes, ee.maskAllText = ie.mask_all_text, ee.disableCaptureUrlHashes = ie.disable_capture_url_hashes, ee.getCurrentUrl = ie.get_current_url, ee.remoteRequestsDisabled = this._instance._shouldDisableFlags(), ee.url_allowlist = null == He ? void 0 : He.url_allowlist, ee.url_ignorelist = null == He ? void 0 : He.url_ignorelist, ee.dom_event_allowlist = null == He ? void 0 : He.dom_event_allowlist, ee.element_allowlist = null == He ? void 0 : He.element_allowlist, ee.css_selector_allowlist = null == He ? void 0 : He.css_selector_allowlist, ee.css_selector_ignorelist = null == He ? void 0 : He.css_selector_ignorelist, ee.element_attribute_ignorelist = null == He ? void 0 : He.element_attribute_ignorelist, ee.capture_copied_text = null == He ? void 0 : He.capture_copied_text
        }
      };
    const Hk = vK("[ExceptionAutocapture]"),
      yk = () => {},
      bk = ee => {
        var ie;
        if (OH(ee)) return null !== (ie = ee.__posthog_layer__) && void 0 !== ie ? ie : ee.__rrweb_layer__
      };

    function Mk(ee, ie, He) {
      try {
        if (!(ie in ee)) return yk;
        const ye = {
            next: ee[ie]
          },
          be = He((function() {
            for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
            return ye.next.apply(this, ie)
          }));
        return OH(be) && (be.prototype = be.prototype || {}, Object.defineProperties(be, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: ye
          }
        })), ee[ie] = be, () => {
          if (ee[ie] === be) return void(ee[ie] = ye.next);
          let He = ee[ie],
            Me = bk(He);
          for (; Me;) {
            if (Me.next === be) return void(Me.next = ye.next);
            He = Me.next, Me = bk(He)
          }
        }
      } catch (ee) {
        return yk
      }
    }
    const Kk = vK("[TracingHeaders]"),
      Uk = vK("[Web Vitals]"),
      Fk = 9e5,
      Jk = ["CLS", "FCP", "INP", "LCP"],
      Rk = ["INP", "LCP"],
      kk = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      qk = "disabled",
      fk = "lazy_loading",
      Tk = vK("[SessionRecording]"),
      pk = [Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi],
      Xk = vK("[Heatmaps]");

    function zk(ee) {
      return dH(ee) && "clientX" in ee && "clientY" in ee && AH(ee.clientX) && AH(ee.clientY)
    }
    const Bk = vK("[Product Tours]"),
      Ek = ee => {
        var ie;
        return !ee.config.disable_product_tours && !!(null === (ie = ee.persistence) || void 0 === ie ? void 0 : ie.get_property(me))
      },
      gk = ["$set_once", "$set"],
      Ok = vK("[SiteApps]"),
      dk = "Error while initializing PostHog app with config id ",
      Wk = (ee, ie) => (null == ee ? void 0 : ee.then) ? ee.then(ie) : ie(ee),
      tk = "SDK is not enabled or survey functionality is not yet loaded",
      Zk = "Disabled. Not loading surveys.";
    var wk = class {
      constructor(ee, ie) {
        this._configSource = ee, this._initialClientState = ie, this.name = dR, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = ee => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!ee.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), qR.warn("Remote config unavailable. Not loading surveys.");
          const ie = ee.config.surveys;
          if (PH(ie)) return qR.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = VH(ie) ? ie : ie.length > 0, qR.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = ee => {
          this._activeMatchingSurveyCallbacks.slice().forEach((ie => this._notifyActiveMatchingSurveyCallback(ie, ee)))
        }
      }
      setup(ee) {
        if (!this._disposed) return this._initializingClient = ee, Wk(ee.kv.initialize(), (() => {
          if (this._initializingClient !== ee || this._disposed) return;
          this._initializingClient = void 0, this._client = ee;
          const ie = ee.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? ie.dispose() : (this._remoteConfigSubscription = ie, this.loadIfEnabled())
        }))
      }
      dispose() {
        var ee, ie, He, ye, be;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (ee = this._remoteConfigSubscription) || void 0 === ee || ee.dispose(), this._remoteConfigSubscription = void 0, null === (ie = this._surveyEventReceiver) || void 0 === ie || ie.dispose(), this._surveyEventReceiver = null, null === (He = this._surveyManager) || void 0 === He || null === (ye = He.dispose) || void 0 === ye || ye.call(He), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((ee => {
          ee.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (be = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === be || be.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((ee => clearTimeout(ee))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var ee, ie;
        null === (ee = this._surveyManager) || void 0 === ee || null === (ie = ee.clearInMemoryInProgressSurveyState) || void 0 === ie || ie.call(ee);
        try {
          var He;
          null === (He = this._surveyEventReceiver) || void 0 === He || He.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const ee = [];
          for (let ie = 0; ie < localStorage.length; ie++) {
            const He = localStorage.key(ie);
            ((null == He ? void 0 : He.startsWith("seenSurvey_")) || (null == He ? void 0 : He.startsWith("inProgressSurvey_"))) && ee.push(He)
          }
          ee.forEach((ee => localStorage.removeItem(ee)))
        } catch (ee) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const ee = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void qR.info("Already initializing surveys, skipping...");
        if (ee.disableSurveys) return void qR.info(Zk);
        if (ee.cookielessMode && this._configSource.isOptedOut()) return void qR.info("Not loading surveys in cookieless mode without consent.");
        const ie = this._configSource.getExtensions();
        if (!ie) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (tH(this._isSurveysEnabled) && !ee.advancedEnableSurveys) return;
        const He = this._isSurveysEnabled || ee.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const ee = ie.generateSurveys;
          if (ee) return this._completeSurveyInitialization(ee, He), void(this._isInitializingSurveys = !1);
          const ye = ie.loadExternalDependency;
          if (!ye) return this._handleSurveyLoadError(mi), void(this._isInitializingSurveys = !1);
          ye((ee => {
            try {
              if (this._disposed) return;
              const ie = this._configSource.getExtensions();
              ee || !(null == ie ? void 0 : ie.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", ee) : this._completeSurveyInitialization(ie.generateSurveys, He)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (ee) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", ee), ee
        }
      }
      _completeSurveyInitialization(ee, ie) {
        var He, ye;
        if (this._disposed) return;
        this._surveyManager = ee(ie), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const be = null === (He = null !== (ye = this._client) && void 0 !== ye ? ye : this._initialClientState) || void 0 === He ? void 0 : He.kv.get(Ki);
        be && this._registerEventOrActionBasedSurveys(be), qR.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(ee, ie) {
        this._surveyInitializationFailed = !0, qR.error(ee, ie), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: ee
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: ee
        })
      }
      onSurveysLoaded(ee) {
        return this._surveyCallbacks.push(ee), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((ie => ie !== ee))
        }
      }
      getSurveys(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var He;
        const ye = null !== (He = this._client) && void 0 !== He ? He : this._initialClientState;
        if (!ye || this._disposed) return;
        if (this._config.disableSurveys) return qR.info(Zk), ee([]);
        const be = ye.kv.get(Ki);
        if (be && !ie) return ee(be, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((ie => {
          let {
            surveys: He,
            context: ye
          } = ie;
          this._disposed || ee(He, ye)
        })).catch((ee => qR.error("Error in survey callback", ee)));
        const Me = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: ye.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((ee => {
          try {
            return this._handleSurveyResponse(ye, ee)
          } catch (ee) {
            return qR.error("Error processing surveys response", ee), this._handleSurveyResponse(ye, {
              statusCode: 0,
              error: ee
            })
          }
        }), (ee => this._handleSurveyResponse(ye, {
          statusCode: 0,
          error: ee
        })));
        this._getSurveysInFlightPromise = Me;
        const Ke = () => {
          this._getSurveysInFlightPromise === Me && (this._getSurveysInFlightPromise = null)
        };
        Me.then((ie => {
          Ke(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(ie.context), ee(ie.surveys, ie.context))
        }), Ke).catch((ee => qR.error("Error in survey callback", ee)))
      }
      _sendSurveysRequest(ee, ie) {
        const He = this._client;
        return He ? He.sendRequest(ee, ie) : new Promise((ee => ee({
          statusCode: 0,
          error: new Error(tk)
        })))
      }
      _handleSurveyResponse(ee, ie) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: tk
          }
        };
        const He = ie.statusCode;
        if (200 !== He || !ie.json) {
          const ee = `Surveys API could not be loaded, status: ${He}`;
          return 0 !== He ? qR.error(ee) : ie.error || qR.warn(ee), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: ee
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const ye = ie.json.surveys || [];
        return ee.kv.set({
          [Ki]: ye,
          [Ui]: Date.now()
        }), this._registerEventOrActionBasedSurveys(ye), {
          surveys: ye,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(ee) {
        var ie;
        const He = ee.filter((ee => function(ee) {
          return !(!ee.start_date || ee.end_date)
        }(ee) && (HR(ee) || function(ee) {
          var ie;
          return !!(null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.actions) || void 0 === ie || null === (ie = ie.values) || void 0 === ie ? void 0 : ie.length)
        }(ee))));
        null === (ie = this._surveyEventReceiver) || void 0 === ie || ie.replace(He)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var ee, ie;
        const He = null === (ee = null !== (ie = this._client) && void 0 !== ie ? ie : this._initialClientState) || void 0 === ee ? void 0 : ee.kv.get(Ui);
        return AH(He) && Date.now() - He > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return AH(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(ee, ie) {
        var He;
        const ye = {
          id: ee,
          current_iteration: null !== (He = null == ie ? void 0 : ie.iteration) && void 0 !== He ? He : null
        };
        fR(ye);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (ee) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(ee) {
        for (const ie of this._surveyCallbacks) try {
          if (!ee.isLoaded) return ie([], ee);
          this.getSurveys(ie)
        } catch (ee) {
          qR.error("Error in survey callback", ee)
        }
      }
      getActiveMatchingSurveys(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!PH(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(ee, ie);
        qR.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(ee) {
        var ie, He;
        if (this._disposed) return () => {};
        const ye = {
          callback: ee,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(ye), this._startActiveMatchingSurveyConditions();
        const be = null === (ie = null !== (He = this._client) && void 0 !== He ? He : this._initialClientState) || void 0 === ie ? void 0 : ie.kv.get(Ki);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !be && !PH(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(ye, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(ye), () => {
          var ee;
          ye.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((ee => ee !== ye)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (ee = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === ee || ee.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var ee, ie, He;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (ee = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== ee || (this._activeMatchingSurveyConditionsUnsubscribe = null === (ie = (He = this._configSource).onMatchingConditionsChanged) || void 0 === ie ? void 0 : ie.call(He, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(ee, ie) {
        if (this._disposed || !ee.active) return;
        const He = ++ee.revision,
          ye = ye => {
            if (!this._disposed && ee.active && He === ee.revision) try {
              const He = null != ie ? ie : {
                  isLoaded: !0
                },
                be = JSON.stringify([ye, He]);
              if (be === ee.lastResult) return;
              ee.lastResult = be, ee.callback(ye, He)
            } catch (ee) {
              qR.error("Error in active matching surveys callback", ee)
            }
          };
        try {
          ie && !ie.isLoaded ? ye([]) : this.getActiveMatchingSurveys(ye)
        } catch (ee) {
          qR.error("Error in active matching surveys callback", ee)
        }
      }
      _getSurveyById(ee) {
        let ie = null;
        return this.getSurveys((He => {
          var ye;
          ie = null !== (ye = He.find((ie => ie.id === ee))) && void 0 !== ye ? ye : null
        })), ie
      }
      _checkSurveyEligibility(ee) {
        if (PH(this._surveyManager)) return {
          eligible: !1,
          reason: tk
        };
        const ie = "string" == typeof ee ? this._getSurveyById(ee) : ee;
        return ie ? this._surveyManager.checkSurveyEligibility(ie) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(ee) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (PH(this._surveyManager)) return {
          eligible: !1,
          reason: tk
        };
        const ie = "string" == typeof ee ? this._getSurveyById(ee) : ee;
        return ie ? this._surveyManager.checkSurveyRenderability(ie) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(ee) {
        if (PH(this._surveyManager)) return qR.warn("init was not called"), {
          visible: !1,
          disabledReason: tk
        };
        const ie = this._checkSurveyRenderability(ee);
        return {
          visible: ie.eligible,
          disabledReason: ie.reason
        }
      }
      canRenderSurveyAsync(ee, ie) {
        return PH(this._surveyManager) ? (qR.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: tk
        })) : new Promise((He => {
          this.getSurveys((ie => {
            var ye;
            const be = null !== (ye = ie.find((ie => ie.id === ee))) && void 0 !== ye ? ye : null;
            if (be) {
              const ee = this._checkSurveyRenderability(be);
              He({
                visible: ee.eligible,
                disabledReason: ee.reason
              })
            } else He({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), ie)
        }))
      }
      renderSurvey(ee, ie, He) {
        var ye;
        if (!this._configSource.isCapturing()) return;
        if (PH(this._surveyManager)) return void qR.warn("init was not called");
        const be = "string" == typeof ee ? this._getSurveyById(ee) : ee;
        if (!(null == be ? void 0 : be.id)) return void qR.warn("Survey not found");
        if (!TR.includes(be.type)) return void qR.warn(`Surveys of type ${be.type} cannot be rendered in the app`);
        const Me = null == iH ? void 0 : iH.querySelector(ie);
        if (Me) {
          if (null === (ye = be.appearance) || void 0 === ye ? void 0 : ye.surveyPopupDelaySeconds) {
            qR.info(`Rendering survey ${be.id} with delay of ${be.appearance.surveyPopupDelaySeconds} seconds`);
            const ee = setTimeout((() => {
              var ie, ye;
              this._renderTimeouts.delete(ee), !this._disposed && this._configSource.isCapturing() && (qR.info(`Rendering survey ${be.id} with delay of ${null===(ie=be.appearance)||void 0===ie?void 0:ie.surveyPopupDelaySeconds} seconds`), null === (ye = this._surveyManager) || void 0 === ye || ye.renderSurvey(be, Me, He), qR.info(`Survey ${be.id} rendered`))
            }), 1e3 * be.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(ee)
          }
          this._surveyManager.renderSurvey(be, Me, He)
        } else qR.warn("Survey element not found")
      }
      displaySurvey(ee, ie) {
        var He;
        if (!this._configSource.isCapturing()) return;
        if (PH(this._surveyManager)) return void qR.warn("init was not called");
        const ye = this._getSurveyById(ee);
        if (!ye) return void qR.warn("Survey not found");
        let be = ye;
        if ((null === (He = ye.appearance) || void 0 === He ? void 0 : He.surveyPopupDelaySeconds) && ie.ignoreDelay && (be = Eb(Eb({}, ye), {}, {
            appearance: Eb(Eb({}, ye.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), ie.displayType !== PJ && ie.initialResponses && qR.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === ie.ignoreConditions) {
          const ee = this._checkSurveyEligibility(ye);
          if (!ee.eligible) return void qR.warn("Survey is not eligible to be displayed: ", ee.reason)
        }
        ie.displayType !== AJ ? this._surveyManager.handlePopoverSurvey(be, ie) : this.renderSurvey(be, ie.selector, ie.properties)
      }
      cancelPendingSurvey(ee) {
        PH(this._surveyManager) ? qR.warn("init was not called") : this._surveyManager.cancelSurvey(ee)
      }
      handlePageUnload() {
        var ee, ie;
        null === (ee = this._surveyManager) || void 0 === ee || null === (ie = ee.handlePageUnload) || void 0 === ie || ie.call(ee)
      }
    };

    function Dk(ee, ie, He) {
      if (PH(ee)) return !1;
      switch (He) {
        case "exact":
          return ee === ie;
        case "contains": {
          const He = ie.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(He, "i").test(ee)
        }
        case "regex":
          try {
            return new RegExp(ie).test(ee)
          } catch (ee) {
            return !1
          }
        default:
          return !1
      }
    }
    var Pk = class {
        constructor(ee) {
          this._instance = ee, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new ho, this._checkStep = (ee, ie) => this._checkStepEvent(ee, ie) && this._checkStepUrl(ee, ie) && this._checkStepElement(ee, ie) && this._checkStepProperties(ee, ie), this._checkStepEvent = (ee, ie) => !(null == ie ? void 0 : ie.event) || (null == ee ? void 0 : ee.event) === (null == ie ? void 0 : ie.event)
        }
        init() {
          var ee, ie;
          tH(null === (ee = this._instance) || void 0 === ee ? void 0 : ee._addCaptureHook) || (this._captureHookUnsubscribe = null === (ie = this._instance) || void 0 === ie ? void 0 : ie._addCaptureHook(((ee, ie) => {
            this.on(ee, ie)
          })))
        }
        dispose() {
          var ee, ie;
          null === (ee = this._captureHookUnsubscribe) || void 0 === ee || ee.call(this), this._captureHookUnsubscribe = void 0, null === (ie = this._instance) || void 0 === ie || null === (ie = ie.autocapture) || void 0 === ie || ie.setElementSelectors(new Set, this), this._debugEventEmitter = new ho
        }
        register(ee) {
          var ie, He;
          if (!tH(null === (ie = this._instance) || void 0 === ie ? void 0 : ie._addCaptureHook) && (ee.forEach((ee => {
              var ie;
              this._actionRegistry.add(ee), null === (ie = ee.steps) || void 0 === ie || ie.forEach((ee => {
                this._actionEvents.add((null == ee ? void 0 : ee.event) || "")
              }))
            })), null === (He = this._instance) || void 0 === He ? void 0 : He.autocapture)) {
            const ee = new Set;
            this._actionRegistry.forEach((ie => {
              var He;
              null === (He = ie.steps) || void 0 === He || He.forEach((ie => {
                (null == ie ? void 0 : ie.selector) && ee.add(ie.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(ee, this)
          }
        }
        replace(ee) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(ee)
        }
        on(ee, ie) {
          null != ie && 0 != ee.length && (this._actionEvents.has(ee) || this._actionEvents.has(ie.event)) && this._actionRegistry.forEach((ee => {
            this._checkAction(ie, ee) && this._debugEventEmitter.emit("actionCaptured", ee.name)
          }))
        }
        _addActionHook(ee) {
          this.onAction("actionCaptured", (ie => ee(ie)))
        }
        _checkAction(ee, ie) {
          if (null == (null == ie ? void 0 : ie.steps)) return !1;
          for (const He of ie.steps)
            if (this._checkStep(ee, He)) return !0;
          return !1
        }
        onAction(ee, ie) {
          return this._debugEventEmitter.on(ee, ie)
        }
        _checkStepUrl(ee, ie) {
          if (null == ie ? void 0 : ie.url) {
            var He;
            const ye = null == ee || null === (He = ee.properties) || void 0 === He ? void 0 : He.$current_url;
            if (!ye || "string" != typeof ye) return !1;
            if (!Dk(ye, ie.url, ie.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(ee, ie) {
          return !!this._checkStepHref(ee, ie) && !!this._checkStepText(ee, ie) && !!this._checkStepSelector(ee, ie)
        }
        _checkStepHref(ee, ie) {
          var He;
          if (!(null == ie ? void 0 : ie.href)) return !0;
          const ye = this._getElementsList(ee);
          if (ye.length > 0) return ye.some((ee => Dk(ee.href, ie.href, ie.href_matching || "exact")));
          const be = (null == ee || null === (He = ee.properties) || void 0 === He ? void 0 : He.$elements_chain) || "";
          return !!be && Dk(function(ee) {
            const ie = ee.match(/(?::|")href="(.*?)"/);
            return ie ? ie[1] : ""
          }(be), ie.href, ie.href_matching || "exact")
        }
        _checkStepText(ee, ie) {
          var He;
          if (!(null == ie ? void 0 : ie.text)) return !0;
          const ye = this._getElementsList(ee);
          if (ye.length > 0) return ye.some((ee => Dk(ee.text, ie.text, ie.text_matching || "exact") || Dk(ee.$el_text, ie.text, ie.text_matching || "exact")));
          const be = (null == ee || null === (He = ee.properties) || void 0 === He ? void 0 : He.$elements_chain) || "";
          return !!be && (Me = function(ee) {
            const ie = [],
              He = /(?::|")text="(.*?)"/g;
            let ye;
            for (; !PH(ye = He.exec(ee));) ie.includes(ye[1]) || ie.push(ye[1]);
            return ie
          }(be), Ke = ie.text, Ue = ie.text_matching || "exact", Me.some((ee => Dk(ee, Ke, Ue))));
          var Me, Ke, Ue
        }
        _checkStepSelector(ee, ie) {
          var He, ye;
          if (!(null == ie ? void 0 : ie.selector)) return !0;
          const be = null == ee || null === (He = ee.properties) || void 0 === He ? void 0 : He.$element_selectors;
          if (null == be ? void 0 : be.includes(ie.selector)) return !0;
          const Me = (null == ee || null === (ye = ee.properties) || void 0 === ye ? void 0 : ye.$elements_chain) || "";
          if (ie.selector_regex && Me) try {
            return new RegExp(ie.selector_regex).test(Me)
          } catch (ee) {
            return !1
          }
          return !1
        }
        _getElementsList(ee) {
          var ie;
          return null == (null == ee || null === (ie = ee.properties) || void 0 === ie ? void 0 : ie.$elements) ? [] : null == ee ? void 0 : ee.properties.$elements
        }
        _checkStepProperties(ee, ie) {
          return !(null == ie ? void 0 : ie.properties) || 0 === ie.properties.length || KR(ie.properties.reduce(((ee, ie) => {
            const He = gH(ie.value) ? ie.value.map(String) : null != ie.value ? [String(ie.value)] : [];
            return ee[ie.key] = {
              values: He,
              operator: ie.operator || "exact"
            }, ee
          }), {}), null == ee ? void 0 : ee.properties)
        }
      },
      Ak = class {
        constructor(ee, ie) {
          var He, ye;
          this._pendingActivatedItems = [], this._instance = ee, this._onActivationChanged = ie, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (He = this._instance) || void 0 === He || null === (ye = He.onSessionId) || void 0 === ye ? void 0 : ye.call(He, (ee => this._onSessionIdChanged(ee)))
        }
        _shouldPersistArmedActivation(ee) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(ee) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(ee, ie) {
          return !!ee && KR(ee.propertyFilters, null == ie ? void 0 : ie.properties)
        }
        _buildEventToItemMap(ee, ie) {
          const He = new Map;
          return ee.forEach((ee => {
            var ye;
            null === (ye = ee.conditions) || void 0 === ye || null === (ye = ye[ie]) || void 0 === ye || null === (ye = ye.values) || void 0 === ye || ye.forEach((ie => {
              if (null == ie ? void 0 : ie.name) {
                const ye = He.get(ie.name) || [];
                ye.push(ee.id), He.set(ie.name, ye)
              }
            }))
          })), He
        }
        _getMatchingItems(ee, ie, He) {
          const ye = (He === zJ ? this._eventToItems : this._cancelEventToItems).get(ee);
          let be = [];
          return this._getItems((ee => {
            be = ee.filter((ee => null == ye ? void 0 : ye.includes(ee.id)))
          })), be.filter((ye => {
            var be;
            const Me = null === (be = ye.conditions) || void 0 === be || null === (be = be[He]) || void 0 === be || null === (be = be.values) || void 0 === be ? void 0 : be.find((ie => ie.name === ee));
            return this._doesEventMatchFilter(Me, ie)
          }))
        }
        register(ee) {
          this._register(ee, !1)
        }
        replace(ee) {
          this._register(ee, !0)
        }
        _register(ee, ie) {
          var He;
          tH(null === (He = this._instance) || void 0 === He ? void 0 : He._addCaptureHook) || (this._setupEventBasedItems(ee, ie), this._setupActionBasedItems(ee, ie))
        }
        _setupActionBasedItems(ee, ie) {
          const He = ee.filter((ee => {
            var ie;
            return null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.actions) || void 0 === ie || null === (ie = ie.values) || void 0 === ie ? void 0 : ie.length
          }));
          var ye;
          if (ie && this._actionToItems.clear(), 0 === He.length) return void(ie && (null === (ye = this._actionMatcher) || void 0 === ye || ye.replace([])));
          this._actionMatcher || (this._actionMatcher = new Pk(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((ee => this.onAction(ee))));
          const be = [];
          He.forEach((ee => {
            var ie;
            null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.actions) || void 0 === ie || ie.values.forEach((ie => {
              if (be.push(ie), ie.name) {
                var He;
                const ye = null !== (He = this._actionToItems.get(ie.name)) && void 0 !== He ? He : [];
                ye.includes(ee.id) || ye.push(ee.id), this._actionToItems.set(ie.name, ye)
              }
            }))
          })), ie ? this._actionMatcher.replace(be) : this._actionMatcher.register(be)
        }
        _mergeItemMaps(ee, ie) {
          ie.forEach(((ie, He) => {
            var ye;
            const be = null !== (ye = ee.get(He)) && void 0 !== ye ? ye : [];
            ie.forEach((ee => {
              be.includes(ee) || be.push(ee)
            })), ee.set(He, be)
          }))
        }
        _setupEventBasedItems(ee, ie) {
          var He, ye;
          const be = ee.filter((ee => {
              var ie, He;
              return (null === (ie = ee.conditions) || void 0 === ie ? void 0 : ie.events) && (null === (He = ee.conditions) || void 0 === He || null === (He = He.events) || void 0 === He || null === (He = He.values) || void 0 === He ? void 0 : He.length) > 0
            })),
            Me = ee.filter((ee => {
              var ie, He;
              return (null === (ie = ee.conditions) || void 0 === ie ? void 0 : ie.cancelEvents) && (null === (He = ee.conditions) || void 0 === He || null === (He = He.cancelEvents) || void 0 === He || null === (He = He.values) || void 0 === He ? void 0 : He.length) > 0
            })),
            Ke = this._buildEventToItemMap(ee, zJ),
            Ue = this._buildEventToItemMap(ee, BJ);
          ie ? (this._eventToItems = Ke, this._cancelEventToItems = Ue) : (this._mergeItemMaps(this._eventToItems, Ke), this._mergeItemMaps(this._cancelEventToItems, Ue)), (0 !== be.length || 0 !== Me.length || ee.some((ee => {
            var ie;
            return null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.actions) || void 0 === ie || null === (ie = ie.values) || void 0 === ie ? void 0 : ie.length
          }))) && (null !== (He = this._captureHookUnsubscribe) && void 0 !== He || (this._captureHookUnsubscribe = null === (ye = this._instance) || void 0 === ye ? void 0 : ye._addCaptureHook(((ee, ie) => {
            this.onEvent(ee, ie)
          }))))
        }
        onEvent(ee, ie) {
          var He, ye;
          const be = this._getLogger(),
            Me = (null == ie || null === (He = ie.properties) || void 0 === He ? void 0 : He.$survey_id) || (null == ie || null === (ye = ie.properties) || void 0 === ye ? void 0 : ye.$product_tour_id);
          if (Me && this.getActivatedIds().includes(Me)) {
            const He = this._activationOutcome(ee, Me, ie);
            if ("consume" === He) return be.info("event consumed activated item, removing it", {
              event: ee,
              itemId: Me
            }), void this._deactivateItems([Me]);
            if ("persist" === He) return be.info("shown item promoted to persisted activation", {
              event: ee,
              itemId: Me
            }), this._persistActivation(Me), void this._clearActivationTimestamps([Me])
          }
          if (this._cancelEventToItems.has(ee)) {
            const He = this._getMatchingItems(ee, ie, BJ);
            He.length > 0 && (be.info("cancel event matched, cancelling items", {
              event: ee,
              itemsToCancel: He.map((ee => ee.id))
            }), this._deactivateItems(He.map((ee => ee.id))), He.forEach((ee => this._cancelPendingItem(ee.id))))
          }
          if (!this._eventToItems.has(ee)) return;
          be.info("event name matched", {
            event: ee,
            eventPayload: ie,
            items: this._eventToItems.get(ee)
          });
          const Ke = this._getMatchingItems(ee, ie, zJ);
          this._activateItems(Ke.map((ee => ee.id)))
        }
        onAction(ee) {
          this._actionToItems.has(ee) && this._activateItems(this._actionToItems.get(ee) || [])
        }
        _activateItems(ee) {
          var ie, He;
          if (0 === ee.length) return;
          const ye = !!(null === (ie = this._instance) || void 0 === ie || null === (He = ie.get_session_id) || void 0 === He ? void 0 : He.call(ie)),
            be = [];
          for (const Me of ee) ye && this._shouldPersistArmedActivation(Me) ? this._persistActivation(Me) && this._recordActivationTimestamp(Me) : be.push(Me);
          be.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...be])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(ee) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((ie => ie !== ee));
          const ie = this._getPersistedActivatedIds();
          return !ie.includes(ee) && (this._setActivatedItems([...ie, ee]), this._stampActivationSession(), !0)
        }
        _deactivateItems(ee) {
          const ie = new Set(ee);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((ee => !ie.has(ee)));
          const He = this._getRawPersistedActivatedIds(),
            ye = He.filter((ee => !ie.has(ee)));
          ye.length !== He.length && (this._setActivatedItems(ye), 0 === ye.length && this._clearActivationSession()), this._clearActivationTimestamps(ee), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var ee;
            null === (ee = this._onActivationChanged) || void 0 === ee || ee.call(this)
          } catch (ee) {
            this._getLogger().error("Error while handling activated items change", ee)
          }
        }
        _getRawActivationTimestamps() {
          var ee;
          const ie = this._getActivationTimestampsKey();
          if (!ie) return {};
          const He = null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee ? void 0 : ee.props[ie];
          return He && "object" == typeof He ? He : {}
        }
        _recordActivationTimestamp(ee) {
          if (!this._getActivationTimestampsKey()) return;
          const ie = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(Eb(Eb({}, ie), {}, {
            [ee]: Date.now()
          }))
        }
        _clearActivationTimestamps(ee) {
          if (!this._getActivationTimestampsKey()) return;
          const ie = this._getRawActivationTimestamps(),
            He = {};
          let ye = !1;
          for (const [be, Me] of Object.entries(ie)) ee.includes(be) ? ye = !0 : He[be] = Me;
          ye && (WH(He) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(He))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(ee) {
          if (!this._getPersistedActivatedIds().includes(ee)) return;
          const ie = this._getRawActivationTimestamps()[ee];
          return AH(ie) ? ie : void 0
        }
        _getRawPersistedActivatedIds() {
          var ee;
          const ie = this._getActivatedKey();
          return (null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee ? void 0 : ee.props[ie]) || []
        }
        _getPersistedActivatedIds() {
          var ee, ie, He;
          const ye = this._getRawPersistedActivatedIds();
          if (0 === ye.length) return [];
          const be = null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee ? void 0 : ee.props[this._getActivatedSessionKey()],
            Me = null === (ie = this._instance) || void 0 === ie || null === (He = ie.get_session_id) || void 0 === He ? void 0 : He.call(ie);
          return Me && be === Me ? ye : []
        }
        _stampActivationSession() {
          var ee, ie;
          const He = null === (ee = this._instance) || void 0 === ee || null === (ie = ee.get_session_id) || void 0 === ie ? void 0 : ie.call(ee);
          He && this._setActivatedSession(He)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(ee) {
          var ie;
          const He = null === (ie = this._instance) || void 0 === ie || null === (ie = ie.persistence) || void 0 === ie ? void 0 : ie.props[this._getActivatedSessionKey()];
          if (He && He !== ee) {
            const ee = this._getRawPersistedActivatedIds(),
              ie = this._getRawActivationTimestamps();
            ee.length > 0 && (this._setActivatedItems([]), ee.filter((ee => AH(ie[ee]))).forEach((ee => this._cancelPendingItem(ee)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), ee.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((ee => !this._isItemPermanentlyIneligible(ee)))
        }
        dispose() {
          var ee, ie, He;
          null === (ee = this._sessionIdUnsubscribe) || void 0 === ee || ee.call(this), this._sessionIdUnsubscribe = void 0, null === (ie = this._captureHookUnsubscribe) || void 0 === ie || ie.call(this), this._captureHookUnsubscribe = void 0, null === (He = this._actionMatcher) || void 0 === He || He.dispose(), this._actionMatcher = void 0
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
      Yk = class extends Ak {
        constructor(ee, ie) {
          super(ee, ie)
        }
        _getActivatedKey() {
          return Fi
        }
        _getActivatedSessionKey() {
          return Ji
        }
        _getActivationTimestampsKey() {
          return oi
        }
        _writeActivationTimestamps(ee) {
          var ie;
          null === (ie = this._instance) || void 0 === ie || null === (ie = ie.persistence) || void 0 === ie || ie.register({
            $surveys_activated_timestamps: ee
          })
        }
        _clearActivationTimestampsStore() {
          var ee;
          null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee || ee.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(ee) {
          var ie;
          let He;
          this._getItems((ie => {
            He = ie.find((ie => ie.id === ee))
          }));
          const ye = null == He || null === (ie = He.appearance) || void 0 === ie ? void 0 : ie.surveyPopupDelaySeconds;
          return AH(ye) && ye > 0
        }
        _getShownEventName() {
          return dJ
        }
        _getItems(ee) {
          var ie;
          null === (ie = this._instance) || void 0 === ie || ie.getSurveys(ee)
        }
        _cancelPendingItem(ee) {
          var ie;
          null === (ie = this._instance) || void 0 === ie || ie.cancelPendingSurvey(ee)
        }
        _getLogger() {
          return qR
        }
        _setActivatedItems(ee) {
          var ie;
          null === (ie = this._instance) || void 0 === ie || null === (ie = ie.persistence) || void 0 === ie || ie.register({
            $surveys_activated: ee
          })
        }
        _setActivatedSession(ee) {
          var ie;
          null === (ie = this._instance) || void 0 === ie || null === (ie = ie.persistence) || void 0 === ie || ie.register({
            $surveys_activated_session: ee
          })
        }
        _clearActivatedSession() {
          var ee;
          null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee || ee.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(ee, ie, He) {
          var ye;
          if (ee === tJ && !1 === (null == He || null === (ye = He.properties) || void 0 === ye ? void 0 : ye.$survey_completed)) return "ignore";
          let be;
          return this._getItems((ee => {
            be = ee.find((ee => ee.id === ie))
          })), !be || function(ee) {
            var ie;
            return HR(ee) && !!(null === (ie = ee.conditions) || void 0 === ie || null === (ie = ie.events) || void 0 === ie ? void 0 : ie.repeatedActivation) || "always" === ee.schedule
          }(be) ? ee === dJ ? "consume" : "ignore" : ee === dJ ? "persist" : ee === WJ || ee === tJ ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      Vk = class {
        constructor(ee) {
          this._instance = ee
        }
        initialize() {}
        get(ee) {
          if ("string" == typeof ee) return this._instance.get_property(ee);
          const ie = {};
          for (const He of ee) {
            const ee = this._instance.get_property(He);
            tH(ee) || (ie[He] = ee)
          }
          return ie
        }
        set(ee, ie) {
          this._instance.register("string" == typeof ee ? {
            [ee]: ie
          } : ee)
        }
        remove(ee) {
          "string" != typeof ee ? ee.forEach((ee => this._instance.unregister(ee))) : this._instance.unregister(ee)
        }
      },
      ak = class {
        constructor(ee) {
          this._instance = ee
        }
        get() {
          const ee = this._instance.config;
          return {
            disableSurveys: ee.disable_surveys,
            cookielessMode: !!ee.cookieless_mode,
            advancedEnableSurveys: ee.advanced_enable_surveys,
            requestTimeoutMs: ee.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const ee = null == JH ? void 0 : JH.__PosthogExtensions__;
          if (!ee) return;
          const {
            generateSurveys: ie,
            loadExternalDependency: He
          } = ee;
          return {
            generateSurveys: ie ? ee => ie(this._instance, ee) : void 0,
            loadExternalDependency: He ? ee => He(this._instance, "surveys", ee) : void 0
          }
        }
        createEventReceiver(ee) {
          return new Yk(this._instance, ee)
        }
        onMatchingConditionsChanged(ee) {
          const ie = this._instance._addCaptureHook((ie => {
              "$pageview" !== ie && ie !== dJ && ie !== WJ && ie !== tJ || ee()
            })),
            He = () => ee();
          NK(ri, "PHSurveyShown", He);
          let ye = !1;
          const be = this._instance.onFeatureFlags((() => {
            ye && ee()
          }));
          return ye = !0, () => {
            ye = !1, ie(), be(), null == ri || ri.removeEventListener("PHSurveyShown", He)
          }
        }
      };
    const ck = (null == ri ? void 0 : ri.location) ? lF(ri.location.hash, "__posthog") || lF(location.hash, "state") : null,
      xk = "_postHogToolbarParams",
      Lk = vK("[Toolbar]"),
      Ck = vK("[FeatureFlags]"),
      vk = vK("[FeatureFlags]", {
        debugEnabled: !0
      }),
      uk = "\" failed. Feature flags didn't load in time.",
      mk = [502, 504],
      lk = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      Sk = "connection_error",
      nk = ee => {
        const ie = {};
        for (let He = 0; ee.length > He; He++) ie[ee[He]] = !0;
        return ie
      },
      jk = ee => {
        const ie = {};
        for (const [He, ye] of SK(ee || {})) ye && (ie[He] = ye);
        return ie
      };
    var sk = class {
      constructor(ee) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = Ck, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const ee = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, ee && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var ee, ie;
          const He = this._refreshIntervalMs,
            ye = null !== (ee = this._dueRefreshIntervalMs) && void 0 !== ee ? ee : He;
          tH(He) || tH(ye) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (ie = this._lastRefreshAt) && void 0 !== ie ? ie : 0) < ye || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? He : Math.min(2 * ye, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var ee;
          "visible" === (null === (ee = this._document) || void 0 === ee ? void 0 : ee.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = ee
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(ee) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (ee) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = ee, this._logger = ee.logger.createLogger("[FeatureFlags]"), Wk(ee.kv.initialize(), (() => {
          this._initializingClient === ee && (this._initializingClient = void 0, this._client = ee, this._finishSetup(ee))
        }))
      }
      _finishSetup(ee) {
        var ie;
        if (this._client === ee) return this._window && NK(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = ee.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (ie = this._crossTabPersistence) || void 0 === ie ? void 0 : ie.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var ee;
        const ie = this._config.refreshIntervalMs,
          He = !this._config.remoteRequestsDisabled && this._document && !tH(ie) && ie > 0 ? ie : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = He), He !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), tH(He) || (this._refreshIntervalMs = He, this._dueRefreshIntervalMs = He, this._scheduleNextRefresh(), (null === (ee = this._document) || void 0 === ee ? void 0 : ee.addEventListener) && (NK(this._document, ge, this._onVisibilityChange), uK(lk, (ee => {
          NK(this._document, ee, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        tH(this._refreshIntervalMs) || (tH(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var ee, ie;
        tH(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (ee = this._document) || void 0 === ee || null === (ie = ee.removeEventListener) || void 0 === ie || ie.call(ee, "visibilitychange", this._onVisibilityChange), uK(lk, (ee => {
          var ie, He;
          null === (ie = this._document) || void 0 === ie || null === (He = ie.removeEventListener) || void 0 === He || He.call(ie, ee, this._onUserInteraction, {
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
        var ee, ie, He;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Ce"), this._settleReloads(this._activeReloads, "Ce"), this._client && (this._clearDebouncer(), null === (ee = this._dynamicProperties) || void 0 === ee || ee.dispose(), this._dynamicProperties = void 0, null === (ie = this._crossTabPersistenceUnsubscribe) || void 0 === ie || ie.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (He = this._window) || void 0 === He || He.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(ee) {
        var ie;
        return this._bootstrapState && ee in this._bootstrapState ? this._bootstrapState[ee] : null === (ie = this._client) || void 0 === ie ? void 0 : ie.kv.get(ee)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var ee;
        return !tH(null === (ee = this._client) || void 0 === ee ? void 0 : ee.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(ee) {
        this._persist((() => {
          var ie;
          return null === (ie = this._client) || void 0 === ie ? void 0 : ie.kv.set(ee)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(ee, ie, He) {
        if (!this._crossTabPersistence || !ee.$enabled_feature_flags) return;
        const ye = this._prop("$enabled_feature_flags") || {},
          be = ee.$enabled_feature_flags || {},
          Me = ie.flags || ie.featureFlags,
          Ke = ie.flags ? Object.entries(ie.flags).filter((ee => {
            let [, ie] = ee;
            return !(null == ie ? void 0 : ie.failed)
          })).map((ee => {
            let [ie] = ee;
            return ie
          })) : [],
          Je = !!ie.errorsWhileComputingFlags && !!ie.flags,
          fe = Je ? Ke : He && !gH(Me) ? Object.keys(Me || {}) : Array.from(new Set([...Object.keys(ye), ...Object.keys(be)])),
          Te = this._prop("$feature_flag_payloads") || {},
          pe = ee.$feature_flag_payloads || {},
          Xe = Je || He ? fe : Array.from(new Set([...Object.keys(Te), ...Object.keys(pe)])),
          Be = !Je && !He,
          Ee = !!Be || fe,
          ge = !!Be || Xe,
          Oe = {
            [Ue]: Ee,
            [qe]: Ee,
            [ze]: ge
          };
        ee.$feature_flag_details && (Oe[Fe] = Ee);
        for (const Ue of [Re, oe, ke]) tH(ee[Ue]) || (Oe[Ue] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(Oe)
      }
      _remove(ee) {
        this._persist((() => {
          var ie;
          return null === (ie = this._client) || void 0 === ie ? void 0 : ie.kv.remove(ee)
        }))
      }
      _persist(ee) {
        try {
          ee()
        } catch (ee) {
          this._logger.error("Failed to update feature flag persistence", ee)
        }
      }
      _rebuildEventProperties() {
        const ee = {};
        for (const ye of [Ue, ze, Re, Be]) {
          const ie = this._prop(ye);
          tH(ie) || (ee[ye] = ie)
        }
        this._baseEventProperties = ee;
        const ie = Eb({}, ee),
          He = this._prop(qe);
        if (He)
          for (const [ye, be] of Object.entries(He)) ie[`$feature/${ye}`] = be;
        this._eventPropertiesWithFlagValues = ie
      }
      _isCacheStale() {
        const ee = this._config.cacheTtlMs;
        if (!ee || 0 >= ee) return !1;
        const ie = this._prop(oe);
        return "number" != typeof ie || Date.now() - ie > ee
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const ee = this._config.evaluationContexts;
        return (null == ee ? void 0 : ee.length) ? ee.filter((ee => {
          const ie = ee && "string" == typeof ee && ee.trim().length > 0;
          return ie || this._logger.error("Invalid evaluation context found:", ee, "Expected non-empty string"), ie
        })) : []
      }
      _getValidFlagKeys() {
        const ee = this._config.flagKeys;
        if (!tH(ee)) return ee.filter((ee => {
          const ie = ee && "string" == typeof ee && ee.trim().length > 0;
          return ie || this._logger.error("Invalid flag key found:", ee, "Expected non-empty string"), ie
        }))
      }
      initialize() {
        var ee, ie;
        const He = this._config,
          ye = null !== (ee = null === (ie = He.bootstrap) || void 0 === ie ? void 0 : ie.featureFlags) && void 0 !== ee ? ee : {};
        if (Object.keys(ye).length) {
          var be, Me;
          const ee = null !== (be = null === (Me = He.bootstrap) || void 0 === Me ? void 0 : Me.featureFlagPayloads) && void 0 !== be ? be : {},
            ie = Object.keys(ye).filter((ee => !tH(ye[ee]))).reduce(((ee, ie) => (ee[ie] = ye[ie], ee)), {}),
            Ke = Object.keys(ee).filter((ee => ie[ee])).reduce(((ie, He) => (ie[He] = ee[He], ie)), {});
          return this._receivedFeatureFlags({
            featureFlags: ie,
            featureFlagPayloads: Ke
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(ee, ie, He) {
        var ye, be;
        const Me = (null == He ? void 0 : He.merge) && null !== (ye = this._prop("$enabled_feature_flags")) && void 0 !== ye ? ye : {},
          Ke = (null == He ? void 0 : He.merge) && null !== (be = this._prop("$feature_flag_payloads")) && void 0 !== be ? be : {},
          Ue = Eb(Eb({}, Me), ee),
          Fe = Eb(Eb({}, Ke), ie),
          Je = {};
        for (const [oe, Re] of Object.entries(Ue)) Je[oe] = {
          key: oe,
          enabled: TM(Re),
          variant: pM(Re),
          reason: void 0,
          metadata: tH(null == Fe ? void 0 : Fe[oe]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: Fe[oe]
          }
        };
        this._receivedFeatureFlags({
          flags: Je
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const ee = this._prop(Fe),
          ie = this._prop(Be),
          He = this._prop(Ee);
        if (!He && !ie) return ee || {};
        const ye = lK({}, ee || {}),
          be = [...new Set([...Object.keys(He || {}), ...Object.keys(ie || {})])];
        for (const Ue of be) {
          var Me, Ke;
          const ee = ye[Ue],
            be = null == ie ? void 0 : ie[Ue],
            Fe = tH(be) ? null !== (Me = null == ee ? void 0 : ee.enabled) && void 0 !== Me && Me : !!be,
            Je = tH(be) ? null == ee ? void 0 : ee.variant : "string" == typeof be ? be : void 0,
            oe = null == He ? void 0 : He[Ue],
            Re = Eb(Eb({}, ee), {}, {
              enabled: Fe,
              variant: Fe ? null != Je ? Je : null == ee ? void 0 : ee.variant : void 0
            });
          Fe !== (null == ee ? void 0 : ee.enabled) && (Re.original_enabled = null == ee ? void 0 : ee.enabled), Je !== (null == ee ? void 0 : ee.variant) && (Re.original_variant = null == ee ? void 0 : ee.variant), oe && (Re.metadata = Eb(Eb({}, null == ee ? void 0 : ee.metadata), {}, {
            payload: oe,
            original_payload: null == ee || null === (Ke = ee.metadata) || void 0 === Ke ? void 0 : Ke.payload
          })), ye[Ue] = Re
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: ee,
          overriddenPayloads: He,
          finalDetails: ye
        }), this._override_warning = !0), ye
      }
      getAllFeatureFlags() {
        const ee = this.getFlagVariants(),
          ie = this.getFlagPayloads();
        return Object.keys(ee).map((He => {
          const ye = ee[He];
          return {
            key: He,
            enabled: TM(ye),
            variant: pM(ye),
            payload: fM(ie[He])
          }
        }))
      }
      getFlagVariants() {
        const ee = this._prop(qe),
          ie = this._prop(Be);
        if (!ie) return ee || {};
        const He = lK({}, ee || {}),
          ye = Object.keys(ie);
        for (let be = 0; ye.length > be; be++) He[ye[be]] = ie[ye[be]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: ee,
          overriddenFlags: ie,
          finalFlags: He
        }), this._override_warning = !0), He
      }
      getFlagPayloads() {
        const ee = this._prop(ze),
          ie = this._prop(Ee);
        if (!ie) return ee || {};
        const He = lK({}, ee || {}),
          ye = Object.keys(ie);
        for (let be = 0; ye.length > be; be++) He[ye[be]] = ie[ye[be]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: ee,
          overriddenPayloads: ie,
          finalPayloads: He
        }), this._override_warning = !0), He
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((ee => {
          try {
            ee()
          } catch (ee) {
            this._logger.error("Error while running feature flags reloading callback", ee)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((ee => {
          this._pendingReloads.add(ee), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(ee, ie) {
        ee.forEach((ee => ee({
          status: ie
        }))), ee.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(ee) {
        return this._reloadingHandlers.push(ee), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((ie => ie !== ee))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(ee) {
        this.$anon_distinct_id = ee
      }
      setReloadingPaused(ee) {
        this._reloadingDisabled = ee
      }
      resetFlagCallReported() {
        this._remove(pe)
      }
      _callFlagsEndpoint(ee) {
        var ie;
        this._clearDebouncer();
        const He = this._client;
        if (!He || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const ye = {
          token: He.projectToken,
          distinct_id: He.distinctId,
          groups: He.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: Eb(Eb(Eb({}, He.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: He.library.name,
            $lib_version: He.library.version
          }),
          group_properties: this._prop(fe),
          timezone: aF()
        };
        tH(He.deviceId) || (ye.$device_id = He.deviceId), ((null == ee ? void 0 : ee.disableFlags) || this._config.featureFlagsDisabled) && (ye.disable_flags = !0);
        const be = this._getValidEvaluationEnvironments();
        be.length && (ye.evaluation_contexts = be);
        const Me = this._getValidFlagKeys();
        tH(Me) || (ye.flag_keys = Me);
        const Ke = this._config.onlyEvaluateSurveyFeatureFlags,
          Ue = "/flags/?v=2" + (Ke ? "&only_evaluate_survey_feature_flags=true" : ""),
          Fe = this._requestGeneration,
          oe = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = oe, this._requestInFlight = !0;
        const Re = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          ke = ee => {
            var ie, He;
            const be = null !== (ie = ee.json) && void 0 !== ie ? ie : {},
              Me = 200 !== ee.statusCode;
            if (this._requestInFlight = !1, Fe !== this._requestGeneration) return void Re();
            if (this._trackStatusZeroReachability(ee.statusCode), Me || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), ye.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(oe, "skipped");
            this._flagsLoadedFromRemote = !Me;
            const Ue = [];
            ee.error ? Ue.push(ee.error instanceof Error && "AbortError" === ee.error.name ? "timeout" : ee.error instanceof Error ? Sk : "unknown_error") : 200 !== ee.statusCode && Ue.push(`api_error_${ee.statusCode}`), be.errorsWhileComputingFlags && Ue.push("errors_while_computing_flags");
            const ke = !!(null === (He = be.quotaLimited) || void 0 === He ? void 0 : He.includes("feature_flags"));
            ke && Ue.push("quota_limited"), this._set({
              [Je]: Ue
            }), ke ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : ye.disable_flags || this._receivedFeatureFlags(be, Me, {
              partialResponse: Ke
            }), this._settleReloads(oe, ye.disable_flags ? "skipped" : Ue.length || !be.flags && !be.featureFlags ? "error" : "loaded"), Re()
          },
          qe = ee => {
            this._requestInFlight = !1, Fe === this._requestGeneration ? (this._set({
              [Je]: [Sk]
            }), this._logger.error("Feature flag request failed", ee), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(oe, "error"), Re()) : Re()
          };
        let Te = null !== (ie = this._config.requestMaxRetries) && void 0 !== ie ? ie : 1;
        const pe = () => Te > 0 && Fe === this._requestGeneration,
          Xe = () => {
            if (Fe !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(oe, "skipped"), void Re();
            try {
              He.sendRequest(Ue, {
                target: "flags",
                method: "POST",
                body: ye,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((ee => {
                if ((ee => mk.includes(ee.statusCode) || (ee => 0 === ee.statusCode && ee.error instanceof Error && "AbortError" === ee.error.name)(ee))(ee) && pe()) return Te--, void setTimeout(Xe, 500);
                ke(ee)
              })).catch(qe)
            } catch (ee) {
              qe(ee)
            }
          };
        Xe()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return xF(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(ee) {
        this._consecutiveStatusZeroFailures = LF(ee, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var He;
        if (ie.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + ee + uk);
        if (this._checkAndTriggerStaleRefresh()) return;
        const ye = this.getFeatureFlagResult(ee, ie);
        return null !== (He = null == ye ? void 0 : ye.variant) && void 0 !== He ? He : null == ye ? void 0 : ye.enabled
      }
      getFeatureFlagDetails(ee) {
        return this.getFlagsWithDetails()[ee]
      }
      getFeatureFlagPayload(ee) {
        const ie = this.getFeatureFlagResult(ee, {
          send_event: !1
        });
        return null == ie ? void 0 : ie.payload
      }
      getFeatureFlagResult(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ie.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + ee + uk);
        if (this._checkAndTriggerStaleRefresh()) return;
        const He = this.getFlagVariants(),
          ye = ee in He,
          be = He[ee],
          Me = this.getFlagPayloads()[ee],
          Ke = String(be),
          Ue = this._prop("$feature_flag_request_id") || void 0,
          Fe = this._prop("$feature_flag_evaluated_at") || void 0;
        let Je, oe = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var Re;
          const ee = null === (Re = this._client) || void 0 === Re || null === (Re = Re.session) || void 0 === Re ? void 0 : Re.sessionId,
            ie = this._prop(Xe);
          ee && ee !== ie && (oe = {}, Je = ee)
        }
        if (!ie.send_event && "send_event" in ie) Je && this._set({
          [pe]: oe,
          [Xe]: Je
        });
        else if (ee in oe && oe[ee].includes(Ke)) Je && this._set({
          [pe]: oe,
          [Xe]: Je
        });
        else {
          var ke, qe, fe, Te, ze, Be, Ee, ge, Oe, de, We, te, Ze;
          gH(oe[ee]) ? oe[ee].push(Ke) : oe[ee] = [Ke], this._set(Eb({
            [pe]: oe
          }, Je ? {
            [Xe]: Je
          } : {}));
          const ie = this.getFeatureFlagDetails(ee),
            He = [...null !== (ke = this._prop("$feature_flag_errors")) && void 0 !== ke ? ke : []];
          tH(be) && He.push("flag_missing");
          const ye = {
            $feature_flag: ee,
            $feature_flag_response: be,
            $feature_flag_payload: null != Me ? Me : null,
            $feature_flag_request_id: Ue,
            $feature_flag_evaluated_at: Fe,
            $feature_flag_bootstrapped_response: null !== (qe = null === (fe = this._config.bootstrap) || void 0 === fe || null === (fe = fe.featureFlags) || void 0 === fe ? void 0 : fe[ee]) && void 0 !== qe ? qe : null,
            $feature_flag_bootstrapped_payload: null !== (Te = null === (ze = this._config.bootstrap) || void 0 === ze || null === (ze = ze.featureFlagPayloads) || void 0 === ze ? void 0 : ze[ee]) && void 0 !== Te ? Te : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          tH(null == ie || null === (Be = ie.metadata) || void 0 === Be ? void 0 : Be.has_experiment) || (ye.$feature_flag_has_experiment = ie.metadata.has_experiment), tH(null == ie || null === (Ee = ie.metadata) || void 0 === Ee ? void 0 : Ee.version) || (ye.$feature_flag_version = ie.metadata.version);
          const Re = null !== (ge = null == ie || null === (Oe = ie.reason) || void 0 === Oe ? void 0 : Oe.description) && void 0 !== ge ? ge : null == ie || null === (de = ie.reason) || void 0 === de ? void 0 : de.code;
          Re && (ye.$feature_flag_reason = Re), (null == ie || null === (We = ie.metadata) || void 0 === We ? void 0 : We.id) && (ye.$feature_flag_id = ie.metadata.id), tH(null == ie ? void 0 : ie.original_variant) && tH(null == ie ? void 0 : ie.original_enabled) || (ye.$feature_flag_original_response = tH(ie.original_variant) ? ie.original_enabled : ie.original_variant), (null == ie || null === (te = ie.metadata) || void 0 === te ? void 0 : te.original_payload) && (ye.$feature_flag_original_payload = null == ie || null === (Ze = ie.metadata) || void 0 === Ze ? void 0 : Ze.original_payload), He.length && (ye.$feature_flag_error = He.join(",")), this._captureFeatureFlagCalled(ye)
        }
        return ye ? {
          key: ee,
          enabled: !!be,
          variant: "string" == typeof be ? be : void 0,
          payload: fM(Me)
        } : void 0
      }
      _captureFeatureFlagCalled(ee) {
        try {
          var ie;
          null === (ie = this._client) || void 0 === ie || ie.capture("$feature_flag_called", ee)
        } catch (ee) {
          this._logger.error("Failed to capture feature flag call", ee)
        }
      }
      getRemoteConfigPayload(ee, ie) {
        this._getRemoteConfigPayload(ee, ie)
      }
      _getRemoteConfigPayload(ee, ie) {
        var He = this;
        return jH((function*() {
          const ye = He._client;
          if (!ye) return;
          const be = {
              distinct_id: ye.distinctId,
              token: ye.projectToken,
              person_properties: {
                $lib: ye.library.name,
                $lib_version: ye.library.version
              }
            },
            Me = He._getValidEvaluationEnvironments();
          Me.length && (be.evaluation_contexts = Me);
          const Ke = He._getValidFlagKeys();
          let Ue;
          tH(Ke) || (be.flag_keys = Ke);
          try {
            var Fe;
            const ie = null === (Fe = (yield ye.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: be,
              compression: He._config.compression,
              sentAt: "body",
              timeoutMs: He._config.requestTimeoutMs
            })).json) || void 0 === Fe ? void 0 : Fe.featureFlagPayloads;
            Ue = (null == ie ? void 0 : ie[ee]) || void 0
          } catch (ee) {
            return void He._logger.error("Remote config feature flag request failed", ee)
          }
          try {
            ie(Ue)
          } catch (ee) {
            He._logger.error("Remote config feature flag callback failed", ee)
          }
        }))()
      }
      isFeatureEnabled(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (ie.fresh && !this._flagsLoadedFromRemote) return ie.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + ee + uk), ie.defaultValue;
        const He = this.getFeatureFlag(ee, ie);
        return tH(He) ? ie.defaultValue : !!He
      }
      addFeatureFlagsHandler(ee) {
        this.featureFlagEventHandlers.push(ee)
      }
      removeFeatureFlagsHandler(ee) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((ie => ie !== ee))
      }
      receivedFeatureFlags(ee, ie, He) {
        this._receivedFeatureFlags(ee, ie, He)
      }
      _receivedFeatureFlags(ee, ie, He) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const ye = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            be = arguments.length > 4 ? arguments[4] : void 0,
            Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Ck;
          const Ke = ((ee, ie) => {
              const He = ee.flags;
              if (He) {
                const ie = Object.fromEntries(Object.keys(He).map((ee => {
                    var ie;
                    return [ee, null !== (ie = He[ee].variant) && void 0 !== ie ? ie : He[ee].enabled]
                  }))),
                  ye = Object.fromEntries(Object.keys(He).filter((ee => He[ee].enabled)).filter((ee => {
                    var ie;
                    return !tH(null === (ie = He[ee].metadata) || void 0 === ie ? void 0 : ie.payload)
                  })).map((ee => {
                    var ie;
                    return [ee, null === (ie = He[ee].metadata) || void 0 === ie ? void 0 : ie.payload]
                  })));
                return Eb(Eb({}, ee), {}, {
                  featureFlags: ie,
                  featureFlagPayloads: ye
                })
              }
              return ee.featureFlags && ie.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), ee
            })(ee, Me),
            Je = Ke.flags,
            fe = Ke.featureFlags,
            Te = Ke.featureFlagPayloads;
          if (!fe) return;
          const pe = ee.requestId,
            Xe = ee.evaluatedAt;
          if (gH(fe)) {
            Me.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const ee = {};
            if (fe)
              for (let ie = 0; fe.length > ie; ie++) ee[fe[ie]] = !0;
            return {
              [Ue]: fe,
              [qe]: ee,
              [ke]: !1
            }
          }
          let Be = fe,
            Ee = Te,
            ge = Je;
          if (null == be ? void 0 : be.partialResponse) {
            const ee = Object.keys(Be),
              be = Ee || {};
            Be = Eb(Eb({}, ie), Be), Ee = Eb(Eb({}, He), be), ee.forEach((ee => {
              ee in be || null == Ee || delete Ee[ee]
            })), ge = Eb(Eb({}, ye), ge)
          } else if (ee.errorsWhileComputingFlags)
            if (Je) {
              const ee = new Set(Object.keys(Je).filter((ee => {
                var ie;
                return !(null === (ie = Je[ee]) || void 0 === ie ? void 0 : ie.failed)
              })));
              Be = Eb(Eb({}, ie), Object.fromEntries(Object.entries(Be).filter((ie => {
                let [He] = ie;
                return ee.has(He)
              }))));
              const be = Object.fromEntries(Object.entries(Ee || {}).filter((ie => {
                let [He] = ie;
                return ee.has(He)
              })));
              Ee = Eb(Eb({}, He), be), ee.forEach((ee => {
                ee in be || null == Ee || delete Ee[ee]
              })), ge = Eb(Eb({}, ye), Object.fromEntries(Object.entries(ge || {}).filter((ie => {
                let [He] = ie;
                return ee.has(He)
              }))))
            } else Be = Eb(Eb({}, ie), Be), Ee = Eb(Eb({}, He), Ee), ge = Eb(Eb({}, ye), ge);
          return Eb(Eb({
            [Ue]: Object.keys(jk(Be)),
            [qe]: Be || {},
            [ze]: Ee || {},
            [Fe]: ge || {},
            [ke]: !0 === ee.minimalFlagCalledEvents
          }, pe ? {
            [Re]: pe
          } : {}), Xe ? {
            [oe]: Xe
          } : {})
        }(ee, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), He, this._logger);
        if (ye)
          if (!1 === (null == He ? void 0 : He.persist)) {
            const ee = !tH(this._client.kv.get(qe));
            this._bootstrapState = ye, ee || this._set(ye)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(ye, ee, !!(null == He ? void 0 : He.partialResponse)), this._set(ye);
        else ie && this._fallBackToPersistedFlags();
        ie || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(ie)
      }
      override(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: ee,
          suppressWarning: ie
        })
      }
      overrideFeatureFlags(ee) {
        this._overrideFeatureFlags(ee)
      }
      _overrideFeatureFlags(ee) {
        if (this._client) {
          if (!1 === ee) return this._remove([Be, Ee]), this._fireFeatureFlagsCallbacks(), void vk.info("All overrides cleared");
          if (gH(ee)) return this._set({
            [Be]: nk(ee)
          }), this._fireFeatureFlagsCallbacks(), void vk.info("Flag overrides set", {
            flags: ee
          });
          if (ee && "object" == typeof ee && ("flags" in ee || "payloads" in ee)) {
            var ie;
            const He = ee;
            this._override_warning = Boolean(null !== (ie = He.suppressWarning) && void 0 !== ie && ie);
            const ye = {},
              be = He.flags,
              Me = He.payloads;
            return be && (ye[Be] = gH(be) ? nk(be) : be), Me && (ye[Ee] = Me), Object.keys(ye).length && this._set(ye), !1 === be && !1 === Me ? this._remove([Be, Ee]) : !1 === be ? this._remove(Be) : !1 === Me && this._remove(Ee), this._fireFeatureFlagsCallbacks(), !1 === be ? vk.info("Flag overrides cleared") : be && vk.info("Flag overrides set", {
              flags: be
            }), void(!1 === Me ? vk.info("Payload overrides cleared") : Me && vk.info("Payload overrides set", {
              payloads: Me
            }))
          }
          if (ee && "object" == typeof ee) return this._set({
            [Be]: ee
          }), this._fireFeatureFlagsCallbacks(), void vk.info("Flag overrides set", {
            flags: ee
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: ee
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(ee) {
        if (this.addFeatureFlagsHandler(ee), this._hasLoadedFlags) {
          const {
            flags: ie,
            flagVariants: He
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            ee(ie, He)
          } catch (ee) {
            this._logger.error("Error while running feature flags callback", ee)
          }
        }
        return () => this.removeFeatureFlagsHandler(ee)
      }
      updateEarlyAccessFeatureEnrollment(ee, ie, He) {
        var ye;
        const be = (this._prop("$early_access_features") || []).find((ie => ie.flagKey === ee)),
          Me = {
            [`$feature_enrollment/${ee}`]: ie
          },
          Ke = {
            $feature_flag: ee,
            $feature_enrollment: ie,
            $set: Me
          };
        be && (Ke.$early_access_feature_name = be.name), He && (Ke.$feature_enrollment_stage = He);
        const Fe = Eb(Eb({}, this.getFlagVariants()), {}, {
          [ee]: ie
        });
        null === (ye = this._crossTabPersistence) || void 0 === ye || ye.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [ee],
          $enabled_feature_flags: [ee],
          $stored_person_properties: Object.keys(Me)
        }), this._set({
          [Ue]: Object.keys(jk(Fe)),
          [qe]: Fe,
          [Te]: Eb(Eb({}, this._prop("$stored_person_properties") || {}), Me)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var Je;
          null === (Je = this._client) || void 0 === Je || Je.capture("$feature_enrollment_update", Ke)
        } catch (ee) {
          this._logger.error("Failed to capture early access feature enrollment", ee)
        }
      }
      getEarlyAccessFeatures(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = this._prop(Ke);
        !ye || ie ? this._getEarlyAccessFeatures(ee, He) : ee(ye)
      }
      _getEarlyAccessFeatures(ee, ie) {
        var He = this;
        return jH((function*() {
          const ye = He._client;
          if (!ye) return;
          const be = ie ? `&${ie.map((ee=>`stage=${ee}`)).join("&")}` : "";
          let Me;
          try {
            const ee = yield ye.sendRequest(`/api/early_access_features/?token=${ye.projectToken}${be}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!ee.json) return;
            Me = ee.json.earlyAccessFeatures, He._set({
              [Ke]: Me
            })
          } catch (ee) {
            return void He._logger.error("Early access feature request failed", ee)
          }
          try {
            ee(Me)
          } catch (ee) {
            He._logger.error("Early access feature callback failed", ee)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const ee = this.getFlags(),
          ie = this.getFlagVariants();
        return {
          flags: ee.filter((ee => ie[ee])),
          flagVariants: Object.keys(ie).filter((ee => ie[ee])).reduce(((ee, He) => (ee[He] = ie[He], ee)), {})
        }
      }
      _fireFeatureFlagsCallbacks(ee) {
        this._rebuildEventProperties();
        const {
          flags: ie,
          flagVariants: He
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((ye => {
          try {
            ye(ie, He, {
              errorsLoading: ee
            })
          } catch (ee) {
            this._logger.error("Error while running feature flags callback", ee)
          }
        }))
      }
      setPersonPropertiesForFlags(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(ee, ie)
      }
      _setPersonPropertiesForFlags(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this._prop("$stored_person_properties") || {},
          ye = (null == ee ? void 0 : ee.$set) || ((null == ee ? void 0 : ee.$set_once) ? {} : ee),
          be = null == ee ? void 0 : ee.$set_once,
          Me = {};
        if (be)
          for (const Ke in be)({}).hasOwnProperty.call(be, Ke) && (Ke in He || (Me[Ke] = be[Ke]));
        this._set({
          [Te]: Eb(Eb(Eb({}, He), Me), ye)
        }), ie && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = Eb({}, this._prop("$stored_person_properties") || {});
        ee.forEach((ee => {
          delete He[ee]
        })), this._set({
          [Te]: He
        }), ie && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(Te), ee && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = this._prop("$stored_group_properties") || {},
          ye = Eb({}, He);
        for (const be of Object.keys(ee)) ye[be] = Eb(Eb({}, He[be]), ee[be]);
        this._set({
          [fe]: ye
        }), ie && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(ee) {
        if (ee) {
          const ie = this._prop("$stored_group_properties") || {};
          this._set({
            [fe]: Eb(Eb({}, ie), {}, {
              [ee]: {}
            })
          })
        } else this._remove(fe)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "Ce"), this._settleReloads(this._activeReloads, "Ce"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const Ik = vK("[FeatureFlags]");
    var hk = class {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(ee, ie)
      }
      update(ee, ie) {
        this._snapshot = ((ee, ie) => {
          var He, ye, be, Me, Ke, Ue, Fe, Je;
          return {
            bootstrap: {
              featureFlags: null !== (He = null === (ye = ee.bootstrap) || void 0 === ye ? void 0 : ye.featureFlags) && void 0 !== He ? He : void 0,
              featureFlagPayloads: null !== (be = null === (Me = ee.bootstrap) || void 0 === Me ? void 0 : Me.featureFlagPayloads) && void 0 !== be ? be : void 0
            },
            remoteRequestsDisabled: ie,
            featureFlagsDisabled: !!ee.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!ee.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!ee.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: ee.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (Ke = ee.remote_config_refresh_interval_ms) && void 0 !== Ke ? Ke : 3e5,
            idleRefreshBackoff: tH(ee.remote_config_refresh_interval_ms),
            requestTimeoutMs: ee.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (Ue = ee.feature_flag_request_max_retries) && void 0 !== Ue ? Ue : 1),
            compression: ee.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (Fe = null !== (Je = ee.evaluation_contexts) && void 0 !== Je ? Je : ee.evaluation_environments) && void 0 !== Fe ? Fe : [],
            flagKeys: gH(ee.flag_keys) ? ee.flag_keys : void 0
          }
        })(ee, ie), !ee.evaluation_environments || ee.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Ik.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), tH(ee.flag_keys) || gH(ee.flag_keys) || Ik.error("Invalid flag_keys found:", ee.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const Nk = ee => CH(ee) && ("RangeError" === ee.name && 0 === ee.message.indexOf("Maximum call stack size exceeded") || "InternalError" === ee.name && "too much recursion" === ee.message),
      Gk = vK("[Error tracking]"),
      rk = "webkit-masked-url:",
      Qk = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      eq = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", rk],
      iq = ["__firefox__", "__gCrWeb"],
      Hq = "Refusing to render web experiment since the viewer is a likely bot",
      yq = {
        icontains: (ee, ie) => ie.toLowerCase().indexOf(ee.toLowerCase()) > -1,
        not_icontains: (ee, ie) => -1 === ie.toLowerCase().indexOf(ee.toLowerCase()),
        regex: (ee, ie) => yR(ie, ee),
        not_regex: (ee, ie) => !yR(ie, ee),
        exact: (ee, ie) => ie === ee,
        is_not: (ee, ie) => ie !== ee
      },
      bq = vK("[Conversations]"),
      Mq = "Conversations not available yet.";

    function Kq(ee, ie) {
      var He, ye, be, Me, Ke, Ue, Fe;
      const Je = null !== (He = null == ee ? void 0 : ee.flushIntervalMs) && void 0 !== He ? He : 3e3,
        oe = null !== (ye = null == ee ? void 0 : ee.maxBufferSize) && void 0 !== ye ? ye : 100,
        Re = (null == ie ? void 0 : ie.consoleCapture) ? void 0 : null !== (be = null == ee ? void 0 : ee.maxLogsPerInterval) && void 0 !== be ? be : 1e3,
        ke = tH(Re) ? Math.max(oe, 2048) : Math.max(oe, Re),
        qe = Eb(Eb({}, function() {
          let ee = "",
            ie = "";
          try {
            var He;
            const ye = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              be = null == ye || null === (He = ye.navigator) || void 0 === He ? void 0 : He.userAgent;
            be && ([ee, ie] = ry(be))
          } catch (ee) {}
          return function(ee, ie) {
            const He = function(ee) {
              if (ee) return {}.hasOwnProperty.call(gK, ee) ? gK[ee] : ee
            }(ee);
            return Eb(Eb({}, He ? {
              "os.name": He
            } : {}), ie ? {
              "os.version": ie
            } : {})
          }(ee, ie)
        }()), null == ee ? void 0 : ee.resourceAttributes);
      return {
        serviceName: null !== (Me = null !== (Ke = null == qe ? void 0 : qe["service.name"]) && void 0 !== Ke ? Ke : null == ee ? void 0 : ee.serviceName) && void 0 !== Me ? Me : null == ie ? void 0 : ie.serviceNameDefault,
        serviceVersion: null !== (Ue = null == qe ? void 0 : qe["service.version"]) && void 0 !== Ue ? Ue : null == ee ? void 0 : ee.serviceVersion,
        environment: null !== (Fe = null == qe ? void 0 : qe["deployment.environment"]) && void 0 !== Fe ? Fe : null == ee ? void 0 : ee.environment,
        resourceAttributes: qe,
        beforeSend: null == ee ? void 0 : ee.beforeSend,
        flushIntervalMs: Je,
        maxBufferSize: oe,
        maxQueueSize: ke,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: Je,
        maxLogsPerInterval: Re,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const Uq = ["debug", "log", "warn", "error", "info"],
      Fq = ee => {
        for (; null == ee ? void 0 : ee.__rrweb_original__;) ee = ee.__rrweb_original__;
        return ee
      },
      Jq = "console",
      oq = "__posthogHandledLogsRequestError",
      Rq = (ee, ie) => {
        const He = ee instanceof Error ? ee : new Error(ie);
        return He[oq] = !0, He
      },
      kq = ee => !!ee && "object" == typeof ee && !0 === ee[oq];
    var qq = class {
      get _coreLogger() {
        var ee = this;
        return Eb(Eb({}, this._logger), {}, {
          error: function() {
            for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
            He.some(kq) || ee._logger.error(...He)
          }
        })
      }
      constructor(ee, ie) {
        var He;
        this._configSource = ee, this._getSdkContext = ie, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = vK("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var ee, ie;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (ee = this._core) || void 0 === ee || ee.onReconnect(), null === (ie = this._consoleCore) || void 0 === ie || ie.onReconnect())
        }, this._isLogsEnabled = !!(null === (He = ee.get()) || void 0 === He ? void 0 : He.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (ye) {
            this._window = void 0
          }
          this._window && (NK(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(ee, ie, He, ye) {
        this._listenForReconnect();
        const be = Kq(this._configSource.get(), He);
        return [new YK(this._createHost(ee, ie), be, this._coreLogger, (() => this._getSdkContext()), (ee => ee()), void 0, ye), be]
      }
      _getCore() {
        const ee = this._configSource.get();
        var ie;
        return this._core && this._resolvedFrom === ee || (null === (ie = this._core) || void 0 === ie || ie.reset(), this._resolvedFrom = ee, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (ee => {
          this._queue = ee
        }))), this._core
      }
      _getConsoleCore() {
        const ee = this._configSource.get();
        var ie;
        return this._consoleCore && this._consoleResolvedFrom === ee || (null === (ie = this._consoleCore) || void 0 === ie || ie.reset(), this._consoleResolvedFrom = ee, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (ee => {
          this._consoleQueue = ee
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, Jq)), this._consoleCore
      }
      setup(ee) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = ee, this._logger = ee.logger.createLogger("[logs]"), Wk(ee.kv.initialize(), (() => {
          this._disposed || this._finishSetup(ee)
        }))
      }
      _finishSetup(ee) {
        var ie;
        this._listenForReconnect(), (null === (ie = this._configSource.get()) || void 0 === ie ? void 0 : ie.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && ee.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let He = !1;
        const ye = ee.onRemoteConfig((ee => {
          var ie;
          He = ee.ok && !0 === (null === (ie = ee.config.logs) || void 0 === ie ? void 0 : ie.captureConsoleLogs), this.onRemoteConfig(ee)
        }));
        this._disposed ? ye.dispose() : (this._remoteConfigSubscription = ye, He || this.loadIfEnabled())
      }
      dispose() {
        var ee, ie, He, ye, be, Me, Ke;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (ee = this._remoteConfigSubscription) || void 0 === ee || ee.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (ie = this._window) || void 0 === ie || ie.removeEventListener("online", this._onReconnect), null === (He = this._consoleLogsDispose) || void 0 === He || He.call(this), this._consoleLogsDispose = void 0, null === (ye = this._core) || void 0 === ye || ye.clearQueue(), null === (be = this._consoleCore) || void 0 === be || be.clearQueue(), null === (Me = this._core) || void 0 === Me || Me.reset(), null === (Ke = this._consoleCore) || void 0 === Ke || Ke.reset())
      }
      onRemoteConfig(ee) {
        var ie, He;
        if (this._disposed) return;
        const ye = ee.ok ? null === (ie = ee.config.logs) || void 0 === ie ? void 0 : ie.captureConsoleLogs : void 0;
        PH(ye) ? this._stopRecorderStartedByPersistedHint() : (null === (He = this._client) || void 0 === He || He.kv.set(this._configSource.captureHintKey, !!ye), ye ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var ee, ie, He, ye;
        this._stopConsoleRecorder(), null === (ee = this._core) || void 0 === ee || ee.clearQueue(), this._queue = [], null === (ie = this._core) || void 0 === ie || ie.reset(), null === (He = this._consoleCore) || void 0 === He || He.clearQueue(), this._consoleQueue = [], null === (ye = this._consoleCore) || void 0 === ye || ye.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(ee) {
        !this._disposed && this._client && this._getCore().captureLog(ee)
      }
      captureConsoleLog(ee) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(ee)
      }
      captureBufferedConsoleLog(ee, ie, He) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(ee, {
          context: ie,
          occurredAtMs: He
        })
      }
      _onOptOut() {
        var ee;
        this._stopConsoleRecorder(), null === (ee = this._consoleCore) || void 0 === ee || ee.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var ee, ie = this;
        if (this._isRecordingConsole || !(null === (ee = this._window) || void 0 === ee ? void 0 : ee.console)) return;
        const He = Kq(this._configSource.get()).maxBufferSize;
        let ye = !0;
        this._consoleRecorderUnpatchers.push((() => {
          ye = !1
        }));
        for (const be of Uq) {
          let Me;
          try {
            Me = Fq(this._window.console[be])
          } catch (ee) {
            continue
          }
          Me && this._consoleRecorderUnpatchers.push(Mk(this._window.console, be, (ee => {
            const Ke = function() {
              for (var Me = arguments.length, Ke = new Array(Me), Ue = 0; Ue < Me; Ue++) Ke[Ue] = arguments[Ue];
              try {
                ye && ie._recordConsoleEntry(be, Ke, He)
              } catch (be) {}
              return ee.apply(ie._window.console, Ke)
            };
            return Ke.__rrweb_original__ = Me, Ke
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(ee, ie, He) {
        var ye;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== ie.length)
          if (null === (ye = this._client) || void 0 === ye ? void 0 : ye.canCapture) {
            if (He > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: ee,
                  args: ie,
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
          for (const ee of this._consoleRecorderUnpatchers) ee();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const ee = this._consoleBuffer;
        return this._stopConsoleRecorder(), ee
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (ee, ie) => this.captureLog({
            body: ee,
            level: "trace",
            attributes: ie
          }),
          debug: (ee, ie) => this.captureLog({
            body: ee,
            level: "debug",
            attributes: ie
          }),
          info: (ee, ie) => this.captureLog({
            body: ee,
            level: "info",
            attributes: ie
          }),
          warn: (ee, ie) => this.captureLog({
            body: ee,
            level: "warn",
            attributes: ie
          }),
          error: (ee, ie) => this.captureLog({
            body: ee,
            level: "error",
            attributes: ie
          }),
          fatal: (ee, ie) => this.captureLog({
            body: ee,
            level: "fatal",
            attributes: ie
          })
        }), this._capture_logger
      }
      flushLogs(ee) {
        this._client && (ee ? this._flushViaTransport(ee) : (this._core && this._core.flush().catch((ee => this._logFlushError(ee))), this._consoleCore && this._consoleCore.flush().catch((ee => this._logFlushError(ee)))))
      }
      flush() {
        var ee = this;
        return jH((function*() {
          var ie, He;
          const ye = null === (ie = ee._core) || void 0 === ie ? void 0 : ie.flush().catch((ie => ee._logFlushError(ie))),
            be = null === (He = ee._consoleCore) || void 0 === He ? void 0 : He.flush().catch((ie => ee._logFlushError(ie)));
          yield ye, yield be
        }))()
      }
      _logFlushError(ee) {
        kq(ee) || this._logger.error("PostHog logs flush failed:", ee)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const ee = this._getConsoleLoader();
        if (ee) {
          this._isLoading = !0;
          try {
            ee(((ee, ie) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (ee || !ie) this._logger.error("Could not load logs script", ee), this._stopConsoleRecorder();
                else {
                  const ee = this._takeConsoleBuffer();
                  this._consoleLogsDispose = ie.initialize(this._client), this._isLoaded = !0, ee.length > 0 && ie.replay(this._client, ee)
                }
            }))
          } catch (ee) {
            throw this._isLoading = !1, ee
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(ee, ie) {
        const He = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !He.canCapture
          },
          getPersistedProperty: ie => ie === oH.LogsQueue ? ee() : void 0,
          setPersistedProperty(ee, He) {
            ee === oH.LogsQueue && ie(null != He ? He : [])
          },
          _sendLogsBatch: ee => this._sendLogsBatch(ee),
          getLibraryId: () => He.library.name,
          getLibraryVersion: () => He.library.version
        }
      }
      _sendLogsBatch(ee) {
        return new Promise((ie => {
          if (xF(this._consecutiveStatusZeroFailures, 3)) return void ie({
            kind: "fatal",
            error: Rq(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let He = !1;
          const ye = ee => {
              He || (He = !0, clearTimeout(be), ie(ee))
            },
            be = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), ye({
                kind: "retry-later",
                error: Rq(void 0, "logs request timed out")
              })
            }), 9e4),
            Me = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: ee,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((ee => {
            var ie;
            const He = ee.statusCode;
            this._trackEndpointReachability(He, Me), He >= 200 && 300 > He ? ye({
              kind: "ok"
            }) : 413 === He ? ye({
              kind: "too-large"
            }) : 0 !== He && 408 !== He && 429 !== He && 500 > He ? ye({
              kind: "fatal",
              error: new Error(`logs request failed with status ${He}`)
            }) : 0 === He ? (ee.error || this._logger.warn("Logs request failed before receiving an HTTP response"), ye({
              kind: "retry-later",
              error: Rq(ee.error, "logs request failed before receiving an HTTP response")
            })) : ye({
              kind: "retry-later",
              error: null !== (ie = ee.error) && void 0 !== ie ? ie : new Error(`logs request failed with status ${He}`)
            })
          }), (ee => {
            ye({
              kind: "retry-later",
              error: ee
            })
          }))
        }))
      }
      _trackEndpointReachability(ee, ie) {
        (0 !== ee || ie) && (this._consecutiveStatusZeroFailures = LF(ee, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(ee) {
        this._queue.length > 0 && this._drainQueueViaTransport(ee, this._queue, this._resolvedConfig, this._client.library.name, (ee => {
          this._queue = ee
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(ee, this._consoleQueue, this._consoleResolvedConfig, Jq, (ee => {
          this._consoleQueue = ee
        }))
      }
      _drainQueueViaTransport(ee, ie, He, ye, be) {
        if (0 === ie.length) return;
        const Me = ie.map((ee => ee.record));
        be([]);
        const Ke = wK(Me, ZK(He, this._client.library.name, this._client.library.version), ye, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: Ke,
          compression: "best-available",
          transport: ee,
          timeoutMs: 6e4
        }).catch((ee => this._logFlushError(ee)))
      }
    };
    const fq = vK("[NetworkMetrics]"),
      Tq = () => {
        var ee;
        return (null == ri || null === (ee = ri.performance) || void 0 === ee ? void 0 : ee.now) ? ri.performance.now() : Date.now()
      },
      pq = {
        "http:": 80,
        "https:": 443
      },
      Xq = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      zq = (ee, ie) => {
        var He;
        const ye = String(ie);
        return {
          method: String(ee).toUpperCase(),
          url: (null === (He = vF(ye)) || void 0 === He ? void 0 : He.href) || ye
        }
      },
      Bq = function(ee, ie, He, ye, be, Me) {
        let Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var Ue, Fe;
          const Je = be();
          if (!Je) return;
          const oe = He || void 0,
            Re = Tq() - ye,
            ke = vF(ie.url);
          if (ke && "http:" !== ke.protocol && "https:" !== ke.protocol) return;
          const qe = {
              url: (null == ke ? void 0 : ke.href) || ie.url,
              method: ie.method
            },
            fe = OH(Je.name) ? Je.name(qe) : ZH(Je.name) ? Je.name : "http.client.request.duration";
          if (!fe) return;
          const Te = Ke && !oe ? void 0 : ((ee, ie) => ee ? 400 > ee ? void 0 : String(ee) : (null == ie ? void 0 : ie.name) || "_OTHER")(oe, Me),
            pe = Eb(Eb(Eb(Eb(Eb({}, (ee => {
              const ie = Xq.has(ee) ? ee : "_OTHER";
              return Eb({
                "http.request.method": ie
              }, "_OTHER" === ie && ee !== ie ? {
                "http.request.method_original": ee
              } : {})
            })(qe.method)), ke ? (ee => {
              return {
                "server.address": ee.hostname.startsWith("[") && ee.hostname.endsWith("]") ? ee.hostname.slice(1, -1) : ee.hostname,
                "server.port": Number(ee.port) || pq[ee.protocol],
                "url.scheme": ee.protocol.slice(0, -1),
                "url.template": (ie = ee.pathname, ie.split("/").map((ee => (ee => /^\d+$/.test(ee) || ee.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(ee))(ee) ? ":id" : ee)).join("/"))
              };
              var ie
            })(ke) : {}), oe ? {
              "http.response.status_code": oe
            } : {}), Te ? {
              "error.type": Te
            } : {}), null === (Ue = Je.attributes) || void 0 === Ue ? void 0 : Ue.call(Je, qe, {
              status: oe,
              durationMs: Re
            }));
          null === (Fe = ee.metrics) || void 0 === Fe || Fe.histogram(fe, Re, {
            unit: "ms",
            attributes: pe
          })
        } catch (ee) {
          fq.error("Failed to record network metric", ee)
        }
      },
      Eq = () => {},
      gq = (ee, ie) => OH(null == ri ? void 0 : ri.fetch) ? Mk(ri, "fetch", (He => function() {
        for (var ye = arguments.length, be = new Array(ye), Me = 0; Me < ye; Me++) be[Me] = arguments[Me];
        const Ke = Tq(),
          Ue = He.apply(this, be);
        if (!ie()) return Ue;
        try {
          var Fe, Je, oe;
          const [He, ye] = be, Me = zq(null !== (Fe = null !== (Je = null == ye ? void 0 : ye.method) && void 0 !== Je ? Je : null == He ? void 0 : He.method) && void 0 !== Fe ? Fe : "GET", null !== (oe = null == He ? void 0 : He.url) && void 0 !== oe ? oe : He);
          return Ue.then((He => (Bq(ee, Me, null == He ? void 0 : He.status, Ke, ie, void 0, !0), He)), (He => {
            throw Bq(ee, Me, void 0, Ke, ie, He), He
          }))
        } catch (ee) {
          return fq.error("Failed to observe fetch", ee), Ue
        }
      })) : Eq,
      Oq = (ee, ie) => {
        var He;
        const ye = null == ri || null === (He = ri.XMLHttpRequest) || void 0 === He ? void 0 : He.prototype;
        if (!ye) return Eq;
        const be = new WeakMap,
          Me = Mk(ye, "open", (ee => function() {
            for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
            try {
              (() => Bo.has(this))() || be.set(this, zq(He[0], He[1]))
            } catch (ee) {
              fq.error("Failed to observe XHR open", ee)
            }
            return ee.apply(this, He)
          })),
          Ke = Mk(ye, "send", (He => function() {
            let ye;
            try {
              const He = be.get(this);
              if (He && ie()) {
                const be = Tq();
                ye = () => {
                  this.removeEventListener("loadend", ye), Bq(ee, He, this.status, be, ie)
                }, NK(this, "loadend", ye)
              }
            } catch (ee) {
              fq.error("Failed to observe XHR send", ee)
            }
            try {
              for (var Me = arguments.length, Ke = new Array(Me), Ue = 0; Ue < Me; Ue++) Ke[Ue] = arguments[Ue];
              return He.apply(this, Ke)
            } catch (ee) {
              throw ye && this.removeEventListener("loadend", ye), ee
            }
          }));
        return () => {
          Me(), Ke()
        }
      },
      dq = new WeakMap,
      Wq = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      tq = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function Zq(ee) {
      if (ee) return !0 === ee ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== ee.intent,
        model: !1 !== ee.model
      }
    }

    function wq(ee, ie) {
      return {}.hasOwnProperty.call(ee, ie)
    }

    function Dq(ee, ie) {
      const He = Object.create(ee);
      return ie && Object.defineProperty(He, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: ie
      }), He
    }

    function Pq(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!ZH(ee)) return;
      const ye = ee.trim();
      return ye ? (He ? function(ee, ie) {
        return function(ee) {
          return ee.length >= 10240 && (PM.test(ee) || function(ee) {
            const ie = VM.exec(ee);
            if (!ie) return !1;
            let He;
            try {
              He = decodeURIComponent(ee.slice(ie[0].length))
            } catch (ee) {
              return !1
            }
            return aM.test(He.replace(/[\r\n]/g, ""))
          }(ee) || YM.test(ee) && AM.test(ee))
        }(ee) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(ee, ie, He) {
          const ye = 4 * He.maxStringLength;
          if (ee.length > ye) {
            const be = ie(ee.slice(0, function(ee, ie) {
              let He = ie;
              for (; He > 0 && !CM.test(ee[He - 1]);) He--;
              return He
            }(ee, ye)));
            if (be.length >= 2 * He.maxStringLength) return be + He.truncationSuffix
          }
          return ie(ee)
        }(ee, (ee => function(ee) {
          return JK(ee, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(ee) {
          let ie = ee.replace(jM, " ");
          return ie = ie.replace(sM, DM), ie = ie.replace(IM, DM), ie = ie.replace(hM, `$1${DM}`), ie = ie.replace(GM, kK), ie = ie.replace(NM, DM), ie = ie.replace(QM, `$1${DM}`), ie = ie.replace(eK, `$1${DM}`), ie
        }(oK(ee)))), ie)
      }(ye, tq) : ye).slice(0, ie) : void 0
    }

    function Aq(ee) {
      try {
        return dH(ee) && !0 === ee.isError
      } catch (ee) {
        return !1
      }
    }
    const Yq = {
        featureFlags: class extends sk {
          constructor(ee) {
            const ie = new hk(ee.config, ee._shouldDisableFlags());
            super(ie), this.name = gR, this._instance = ee, this._mutableConfigSource = ie
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(ee, ie) {
            this._mutableConfigSource.update(ee, ie), this._onConfigUpdated()
          }
        }
      },
      Vq = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var ee;
            return !!(null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee ? void 0 : ee.isStarted)
          }
          get status() {
            var ee, ie;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (ee = null === (ie = this._lazyLoadedSessionRecording) || void 0 === ie ? void 0 : ie.status) && void 0 !== ee ? ee : this._recordingStatus
          }
          constructor(ee) {
            if (this._instance = ee, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = qk, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var ee, ie;
                if (!(null == iH ? void 0 : iH.visibilityState) || "visible" === iH.visibilityState) return !0;
                const He = null == ri || null === (ee = ri.performance) || void 0 === ee || null === (ie = ee.getEntriesByType) || void 0 === ie ? void 0 : ie.call(ee, "visibility-state");
                return !(null == He ? void 0 : He.length) || He.some((ee => "visible" === ee.name))
              })(), this._onVisibilityChange = () => {
                var ee, ie;
                "visible" === (null == iH ? void 0 : iH.visibilityState) && (this._documentWasEverVisible = !0, null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee || null === (ie = ee.setDocumentWasEverVisible) || void 0 === ie || ie.call(ee, !0))
              }, !this._instance.sessionManager) throw Tk.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == iH ? void 0 : iH.addEventListener) && NK(iH, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: ee = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var ie;
            this._sessionRecordingDisposed = !0, null == iH || null === (ie = iH.removeEventListener) || void 0 === ie || ie.call(iH, "visibilitychange", this._onVisibilityChange), ee ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var ee;
            const ie = !!(null === (ee = this._instance.get_property("$session_recording_remote_config")) || void 0 === ee ? void 0 : ee.enabled),
              He = !this._config.disable_session_recording,
              ye = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return ri && ie && He && !ye
          }
          startIfEnabledOrStop(ee) {
            var ie;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (ie = this._lazyLoadedSessionRecording) || void 0 === ie ? void 0 : ie.isStarted)) return;
            const He = !tH(Object.assign) && !tH(Array.from);
            this._isRecordingEnabled && He ? (this._lazyLoadAndStart(ee), Tk.info("starting")) : (this._recordingStatus = qk, this.stopRecording())
          }
          _lazyLoadAndStart(ee) {
            var ie, He;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = fk), (null == JH || null === (ie = JH.__PosthogExtensions__) || void 0 === ie || null === (ie = ie.rrweb) || void 0 === ie ? void 0 : ie.record) && (null === (He = JH.__PosthogExtensions__) || void 0 === He ? void 0 : He.initSessionRecording)) this._onScriptLoaded(ee);
              else {
                var ye, be;
                const ie = this._instance.sessionManager;
                null === (ye = JH.__PosthogExtensions__) || void 0 === ye || null === (be = ye.loadExternalDependency) || void 0 === be || be.call(ye, this._instance, this._scriptName, (He => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === ie) return He ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), Tk.error("could not load recorder", He)) : void this._onScriptLoaded(ee);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var ee, ie;
            null === (ee = this._persistFlagsOnSessionListener) || void 0 === ee || ee.call(this), this._persistFlagsOnSessionListener = void 0, null === (ie = this._lazyLoadedSessionRecording) || void 0 === ie || ie.stop()
          }
          _discardRecording() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var ie, He;
            null === (ie = this._persistFlagsOnSessionListener) || void 0 === ie || ie.call(this), this._persistFlagsOnSessionListener = void 0, null === (He = this._lazyLoadedSessionRecording) || void 0 === He || He.discard({
              discardProducerEvents: ee
            })
          }
          _resetSampling() {
            var ee, ie;
            null === (ee = this._persistence) || void 0 === ee || ee.unregister("$session_is_sampled"), null === (ie = this._persistence) || void 0 === ie || ie.unregister("$replay_sample_rate")
          }
          _validateSampleRate(ee, ie) {
            if (PH(ee)) return null;
            const He = AH(ee) ? ee : parseFloat(ee);
            return "number" != typeof(ye = He) || !Number.isFinite(ye) || 0 > ye || ye > 1 ? (Tk.warn(`${ie} must be between 0 and 1. Ignoring invalid value:`, ee), null) : He;
            var ye
          }
          _persistRemoteConfig(ee) {
            if (this._persistence) {
              var ie, He;
              const ye = this._persistence,
                be = () => {
                  var ie;
                  const He = !1 === ee.sessionRecording ? void 0 : ee.sessionRecording,
                    be = this._validateSampleRate(null === (ie = this._config.session_recording) || void 0 === ie ? void 0 : ie.sampleRate, "session_recording.sampleRate"),
                    Me = this._validateSampleRate(null == He ? void 0 : He.sampleRate, "remote config sampleRate"),
                    Ke = null != be ? be : Me;
                  PH(Ke) && this._resetSampling();
                  const Ue = null == He ? void 0 : He.minimumDurationMilliseconds;
                  ye.register({
                    [ne]: Eb(Eb({
                      cache_timestamp: Date.now(),
                      enabled: !!He
                    }, He), {}, {
                      networkPayloadCapture: Eb({
                        capturePerformance: ee.capturePerformance
                      }, null == He ? void 0 : He.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == He ? void 0 : He.recordCanvas,
                        fps: null == He ? void 0 : He.canvasFps,
                        quality: null == He ? void 0 : He.canvasQuality
                      },
                      sampleRate: Ke,
                      minimumDurationMilliseconds: tH(Ue) ? null : Ue,
                      endpoint: null == He ? void 0 : He.endpoint,
                      triggerMatchType: null == He ? void 0 : He.triggerMatchType,
                      masking: null == He ? void 0 : He.masking,
                      urlTriggers: null == He ? void 0 : He.urlTriggers,
                      version: null == He ? void 0 : He.version,
                      triggerGroups: null == He ? void 0 : He.triggerGroups
                    })
                  })
                };
              be(), null === (ie = this._persistFlagsOnSessionListener) || void 0 === ie || ie.call(this), this._persistFlagsOnSessionListener = null === (He = this._instance.sessionManager) || void 0 === He ? void 0 : He.onSessionId(be)
            }
          }
          onRemoteConfig(ee) {
            const ie = ee.ok ? ee.config : void 0;
            return ie && "sessionRecording" in ie ? !1 === ie.sessionRecording ? (this._persistRemoteConfig(ie), void this._discardRecording()) : (this._persistRemoteConfig(ie), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [Yi]: !0
            }), Tk.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var He;
            (null === (He = this._lazyLoadedSessionRecording) || void 0 === He ? void 0 : He.log) ? this._lazyLoadedSessionRecording.log(ee, ie): Tk.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var ee, ie;
            const He = null === (ee = this._instance) || void 0 === ee || null === (ee = ee.persistence) || void 0 === ee ? void 0 : ee.get_property(ne);
            return (null == He || null === (ie = He.scriptConfig) || void 0 === ie ? void 0 : ie.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const ee = this._instance.get_property(ne);
            if (!ee) return !1;
            let ie;
            try {
              ie = "object" == typeof ee ? ee : JSON.parse(ee)
            } catch (ee) {
              return Tk.warn("persisted remote config for session recording is invalid and will be ignored", ee), !1
            }
            return !PH(ie.cache_timestamp) && 36e5 >= Date.now() - ie.cache_timestamp
          }
          _onScriptLoaded(ee) {
            var ie, He, ye;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.initSessionRecording)) return Tk.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [Ai]: !0
              });
              var be;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (be = JH.__PosthogExtensions__) || void 0 === be ? void 0 : be.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", Tk.info("persisted remote config is stale, requesting fresh config before starting"), void new vJ(this._instance).load()
              }
              this._recordingStatus = fk, null === (He = (ye = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === He || He.call(ye, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(ee)
            } else this._recordingStatus = qk
          }
          onRRwebEmit(ee) {
            var ie, He;
            null === (ie = this._lazyLoadedSessionRecording) || void 0 === ie || null === (He = ie.onRRwebEmit) || void 0 === He || He.call(ie, ee)
          }
          overrideLinkedFlag() {
            var ee, ie;
            this._lazyLoadedSessionRecording || null === (ie = this._persistence) || void 0 === ie || ie.register({
              $replay_override_linked_flag: !0
            }), null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee || ee.overrideLinkedFlag()
          }
          overrideSampling() {
            var ee, ie;
            this._lazyLoadedSessionRecording || null === (ie = this._persistence) || void 0 === ie || ie.register({
              $replay_override_sampling: !0
            }), null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee || ee.overrideSampling()
          }
          overrideTrigger(ee) {
            var ie, He;
            this._lazyLoadedSessionRecording || null === (He = this._persistence) || void 0 === He || He.register({
              ["url" === ee ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (ie = this._lazyLoadedSessionRecording) || void 0 === ie || ie.overrideTrigger(ee)
          }
          get sdkDebugProperties() {
            var ee;
            const ie = {};
            for (const ye of pk) {
              var He;
              const ee = null === (He = this._instance.sessionPersistence) || void 0 === He ? void 0 : He.get_property(ye);
              tH(ee) || (ie[ye] = ee)
            }
            return Eb(Eb({}, ie), (null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee ? void 0 : ee.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(ee, ie) {
            var He;
            return !!(null === (He = this._lazyLoadedSessionRecording) || void 0 === He ? void 0 : He.tryAddCustomEvent(ee, ie))
          }
          flushBeforeIdentityReset() {
            var ee, ie;
            null === (ee = this._lazyLoadedSessionRecording) || void 0 === ee || null === (ie = ee.flushBeforeIdentityReset) || void 0 === ie || ie.call(ee)
          }
        }
      },
      aq = {
        autocapture: class extends ek {
          constructor(ee) {
            super(new ik(ee)), this.instance = ee
          }
        },
        historyAutocapture: class {
          constructor(ee) {
            this._isFlushingPageview = !1, this._instance = ee, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const ee = this._getCaptureOptions();
            return !!(ee.path || ee.search || this._shouldCaptureHashChanges(ee))
          }
          startIfEnabled() {
            this.isEnabled && (CK.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, CK.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            ri && ri.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(ee) {
            var ie;
            if (!ri || (null === (ie = ri.history[ee]) || void 0 === ie ? void 0 : ie.__posthog_wrapped__)) return;
            const He = this;
            Mk(ri.history, ee, (ie => function(ye, be, Me) {
              var Ke;
              He._isUrlChanging(Me) && He._flushPendingPageview(), ie.call(this, ye, be, Me), He._capturePageview(ee, !He._isFlushingPageview && "popstate" !== (null == ri || null === (Ke = ri.event) || void 0 === Ke ? void 0 : Ke.type))
            }))
          }
          _getCurrentLocation() {
            const ee = null == ri ? void 0 : ri.location;
            if (null == ee ? void 0 : ee.pathname) return {
              pathname: ee.pathname,
              search: ee.search,
              hash: ee.hash
            }
          }
          _getCaptureOptions() {
            const ee = this._instance.config.capture_pageview;
            return "history_change" === ee ? {
              path: !0
            } : dH(ee) ? ee : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(ee) {
            const ie = this._getCaptureOptions(),
              He = this._lastLocation;
            return !(!He || !(ie.path && ee.pathname !== He.pathname || ie.search && ee.search !== He.search || this._shouldCaptureHashChanges(ie) && ee.hash !== He.hash))
          }
          _capturePageview(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              ie || this._flushPendingPageview();
              const He = this._getCurrentLocation();
              if (!He) return;
              if (this._hasLocationChanged(He)) {
                const He = () => this._instance.capture(si, {
                  navigation_type: ee
                });
                ie ? (this._pendingPageview = He, Promise.resolve().then((() => this._flushPendingPageview()))) : He()
              }
              this._lastLocation = He
            } catch (ie) {
              CK.error(`Error capturing ${ee} pageview`, ie)
            }
          }
          _isUrlChanging(ee) {
            var ie, He;
            return !(PH(ee) || !ri) && (null === (ie = vF(String(ee))) || void 0 === ie ? void 0 : ie.href) !== (null === (He = ri.location) || void 0 === He ? void 0 : He.href)
          }
          _flushPendingPageview() {
            const ee = this._pendingPageview;
            if (ee) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                ee()
              } catch (ee) {
                CK.error("Error capturing deferred pageview", ee)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const ee = () => {
              this._capturePageview("popstate")
            };
            NK(ri, "popstate", ee), this._popstateListener = () => {
              ri && ri.removeEventListener("popstate", ee)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const ee = () => {
              this._capturePageview("hashchange")
            };
            NK(ri, "hashchange", ee), this._hashchangeListener = () => {
              ri && ri.removeEventListener("hashchange", ee)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(ee) {
            var ie;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = ee, this._enabledServerSide = !!(null === (ie = this.instance.persistence) || void 0 === ie ? void 0 : ie.props[ce]), this.rageclicks = new hR(ee.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let ee = 5e3;
            return dH(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (ee = this._config.capture_heatmaps.flush_interval_milliseconds), ee
          }
          get isEnabled() {
            return PH(this._config.capture_heatmaps) ? PH(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              Xk.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var ee;
              clearInterval(null !== (ee = this._flushInterval) && void 0 !== ee ? ee : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(ee) {
            if (!ee.ok) return;
            const ie = ee.config;
            if (!("heatmaps" in ie)) return;
            const He = !!ie.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [ce]: He
            }), this._enabledServerSide = He, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const ee = this._buffer;
            return this._buffer = void 0, ee
          }
          _onDeadClick(ee) {
            zk(ee.originalEvent) && this._onClick(ee.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == iH ? void 0 : iH.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            ri && iH && (this._flushHandler = this._flush.bind(this), NK(ri, ji, this._flushHandler), this._onClickHandler = ee => this._onClick(ee || (null == ri ? void 0 : ri.event)), NK(iH, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = ee => this._onMouseMove(ee || (null == ri ? void 0 : ri.event)), NK(iH, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new OF(this.instance, EF, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), NK(iH, ge, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var ee;
            ri && iH && (this._flushHandler && ri.removeEventListener(ji, this._flushHandler), this._onClickHandler && iH.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && iH.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && iH.removeEventListener(ge, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (ee = this._deadClicksCapture) || void 0 === ee || ee.stop(), this._initialized = !1)
          }
          _getProperties(ee, ie) {
            const He = this.instance.scrollManager.scrollY(),
              ye = this.instance.scrollManager.scrollX(),
              be = this.instance.scrollManager.scrollElement(),
              Me = function(ee, ie, He) {
                let ye = ee;
                for (; ye && PU(ye) && !AU(ye, "body");) {
                  if (ye === He) return !1;
                  let Ue;
                  try {
                    var be, Me, Ke;
                    Ue = null === (be = null !== (Me = null === (Ke = ye.ownerDocument) || void 0 === Ke ? void 0 : Ke.defaultView) && void 0 !== Me ? Me : ri) || void 0 === be ? void 0 : be.getComputedStyle(ye).position
                  } catch (ee) {
                    return !1
                  }
                  if (fH(ie, Ue)) return !0;
                  ye = SU(ye)
                }
                return !1
              }(vU(ee), ["fixed", "sticky"], be);
            return {
              x: ee.clientX + (Me ? 0 : ye),
              y: ee.clientY + (Me ? 0 : He),
              target_fixed: Me,
              type: ie
            }
          }
          _onClick(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var He;
            if (DU(ee.target) || !zk(ee)) return;
            const ye = this._getProperties(ee, ie);
            (null === (He = this.rageclicks) || void 0 === He ? void 0 : He.isRageClick(ee.clientX, ee.clientY, (new Date).getTime())) && HF(vU(ee), this.instance.config.rageclick) && this._capture(Eb(Eb({}, ye), {}, {
              type: "rageclick"
            })), this._capture(ye)
          }
          _onMouseMove(ee) {
            !DU(ee.target) && zk(ee) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(ee, "mousemove"))
            }), 500))
          }
          _capture(ee) {
            if (!ri) return;
            const ie = this._config.disable_capture_url_hashes ? kb(ri.location.href) : ri.location.href,
              He = this._config.custom_personal_data_properties,
              ye = this._config.mask_personal_data_properties ? [...SF, ...He || []] : [],
              be = mF(ie, ye, jF);
            this._buffer = this._buffer || {}, this._buffer[be] || (this._buffer[be] = []), this._buffer[be].push(ee)
          }
          _flush() {
            this._buffer && !WH(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: OF,
        webVitalsAutocapture: class {
          constructor(ee) {
            var ie;
            this._instance = ee, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", Eb({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((ee, ie) => Eb(Eb({}, ee), {}, {
                [`$web_vitals_${ie.name}_event`]: Eb({}, ie),
                [`$web_vitals_${ie.name}_value`]: ie.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = ee => {
              var ie;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, PH(null == ee ? void 0 : ee.name) || PH(null == ee ? void 0 : ee.value)) return void Uk.error("Invalid metric received", ee);
              const He = "string" == typeof ee.navigationURL ? ee.navigationURL : void 0,
                ye = this._maskedURL(He);
              if (tH(ye)) return;
              const be = AH(ee.navigationId) || "string" == typeof ee.navigationId ? `navigation:${ee.navigationId}` : `url:${ye}`;
              if (this._maxAllowedValue && ee.value >= this._maxAllowedValue) return void Uk.error("Ignoring metric with value >= " + this._maxAllowedValue, ee);
              this._buffer.navigationKey !== be && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), tH(this._buffer.navigationKey) && (this._buffer.navigationKey = be, this._buffer.url = ye), this._buffer.firstMetricTimestamp = tH(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const Me = null === (ie = this._instance.sessionManager) || void 0 === ie ? void 0 : ie.checkAndGetSessionAndWindowId(!0),
                Ke = Eb(Eb(Eb({}, ee), He ? {
                  navigationURL: ye
                } : {}), {}, {
                  $current_url: ye,
                  timestamp: Date.now()
                });
              if (delete Ke.entries, dH(ee.attribution) && this.attributionMetrics.indexOf(ee.name) > -1) {
                const ie = {};
                for (const He of kk) {
                  const ye = "url" === He && "string" == typeof ee.attribution[He] ? this._maskedURL(ee.attribution[He]) : ee.attribution[He];
                  tH(ye) || (ie[He] = ye)
                }
                Ke.attribution = ie
              } else delete Ke.attribution;
              tH(Me) || (Ke.$session_id = Me.sessionId, Ke.$window_id = Me.windowId), this._buffer.metrics.push(Ke), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let ee, ie, He, ye, be = !1;
              const Me = JH.__PosthogExtensions__,
                Ke = null == Me ? void 0 : Me.postHogWebVitalsCallbacksByFlavor,
                Ue = (null == Ke ? void 0 : Ke[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && tH(Ke) ? null == Me ? void 0 : Me.postHogWebVitalsCallbacks : void 0);
              if (!tH(Ue)) {
                const Me = Ue.withoutAttribution,
                  Ke = this.attributionMetrics;
                be = !tH(Me), ee = Ke.indexOf("LCP") > -1 ? Ue.onLCP : (null == Me ? void 0 : Me.onLCP) || Ue.onLCP, ie = Ke.indexOf("CLS") > -1 ? Ue.onCLS : (null == Me ? void 0 : Me.onCLS) || Ue.onCLS, He = Ke.indexOf("FCP") > -1 ? Ue.onFCP : (null == Me ? void 0 : Me.onFCP) || Ue.onFCP, ye = Ke.indexOf("INP") > -1 ? Ue.onINP : (null == Me ? void 0 : Me.onINP) || Ue.onINP
              }
              if (!(ee && ie && He && ye)) return void Uk.error("web vitals callbacks not loaded - not starting");
              const Fe = {
                  reportSoftNavs: this.useSoftNavs
                },
                Je = be && this.attributionMetrics.indexOf("INP") > -1 ? Eb(Eb({}, Fe), {}, {
                  includeProcessedEventEntries: !1
                }) : Fe;
              this.allowedMetrics.indexOf("LCP") > -1 && ee(this._addToBuffer.bind(this), Fe), this.allowedMetrics.indexOf("CLS") > -1 && ie(this._addToBuffer.bind(this), Fe), this.allowedMetrics.indexOf("FCP") > -1 && He(this._addToBuffer.bind(this), Fe), this.allowedMetrics.indexOf("INP") > -1 && ye(this._addToBuffer.bind(this), Je), this._initialized = !0
            }, this._enabledServerSide = !!(null === (ie = this._instance.persistence) || void 0 === ie ? void 0 : ie.props[ve]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var ee, ie;
            const He = dH(this._perfConfig) ? null === (ee = this._perfConfig) || void 0 === ee ? void 0 : ee.web_vitals_allowed_metrics : void 0;
            return PH(He) ? (null === (ie = this._instance.persistence) || void 0 === ie ? void 0 : ie.props.$web_vitals_allowed_metrics) || Jk : He
          }
          get flushToCaptureTimeoutMs() {
            return (dH(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const ee = dH(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return VH(ee) ? ee ? Jk : [] : gH(ee) ? ee : Rk
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const ee = dH(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != ee && ee
          }
          get _maxAllowedValue() {
            const ee = dH(this._perfConfig) && AH(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : Fk;
            return ee > 0 && 6e4 >= ee ? Fk : ee
          }
          get isEnabled() {
            const ee = null == HH ? void 0 : HH.protocol;
            if ("http:" !== ee && "https:" !== ee) return Uk.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const ie = dH(this._perfConfig) ? this._perfConfig.web_vitals : VH(this._perfConfig) ? this._perfConfig : void 0;
            return VH(ie) ? ie : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (Uk.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(ee) {
            if (!ee.ok) return;
            const ie = ee.config;
            if (!("capturePerformance" in ie)) return;
            const He = dH(ie.capturePerformance) && !!ie.capturePerformance.web_vitals,
              ye = dH(ie.capturePerformance) ? ie.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [ve]: He
            }), this._instance.persistence.register({
              [Se]: ye
            })), this._enabledServerSide = He, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(ee) {
            var ie;
            const He = JH.__PosthogExtensions__,
              ye = this._callbackFlavor,
              be = null == He ? void 0 : He.postHogWebVitalsCallbacksByFlavor;
            (null == be ? void 0 : be[ye]) || "web-vitals" === ye && tH(be) && (null == He ? void 0 : He.postHogWebVitalsCallbacks) ? ee() : null == He || null === (ie = He.loadExternalDependency) || void 0 === ie || ie.call(He, this._instance, ye, (ie => {
              ie ? Uk.error("failed to load script", ie) : ee()
            }))
          }
          _maskedURL(ee) {
            const ie = ee || (null == ri ? void 0 : ri.location.href);
            if (!ie) return void Uk.error("Could not determine current URL");
            const He = this._instance.config.disable_capture_url_hashes ? kb(ie) : ie,
              ye = this._instance.config.custom_personal_data_properties,
              be = this._instance.config.mask_personal_data_properties ? [...SF, ...ye || []] : [];
            return mF(He, be, jF)
          }
        }
      },
      cq = {
        exceptionObserver: class {
          constructor(ee) {
            var ie;
            this._startCapturing = () => {
              var ee;
              if (!ri || !this.isEnabled || !(null === (ee = JH.__PosthogExtensions__) || void 0 === ee ? void 0 : ee.errorWrappingFunctions)) return;
              const ie = JH.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                He = JH.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                ye = JH.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = ie(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = He(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = ye(this.captureException.bind(this)))
              } catch (ee) {
                Hk.error("failed to start", ee), this._stopCapturing()
              }
            }, this._instance = ee, this._remoteEnabled = !!(null === (ie = this._instance.persistence) || void 0 === ie ? void 0 : ie.props[xe]), this._rateLimiter = new GH(Eb(Eb({}, function() {
              let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var ie, He, ye, be;
              return {
                refillRate: null !== (ie = null !== (He = ee.exceptionRateLimiterRefillRate) && void 0 !== He ? He : ee.__exceptionRateLimiterRefillRate) && void 0 !== ie ? ie : 1,
                bucketSize: null !== (ye = null !== (be = ee.exceptionRateLimiterBucketSize) && void 0 !== be ? be : ee.__exceptionRateLimiterBucketSize) && void 0 !== ye ? ye : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Hk
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const ee = this._instance.config.capture_exceptions;
            let ie = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return dH(ee) ? ie = Eb(Eb({}, ie), ee) : (tH(ee) ? this._remoteEnabled : ee) && (ie = Eb(Eb({}, ie), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), ie
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Hk.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(ee) {
            var ie, He, ye;
            (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.errorWrappingFunctions) ? ee(): null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "exception-autocapture", (ie => {
              if (ie) return Hk.error("failed to load script", ie);
              ee()
            }))
          }
          _stopCapturing() {
            var ee, ie, He;
            null === (ee = this._unwrapOnError) || void 0 === ee || ee.call(this), this._unwrapOnError = void 0, null === (ie = this._unwrapUnhandledRejection) || void 0 === ie || ie.call(this), this._unwrapUnhandledRejection = void 0, null === (He = this._unwrapConsoleError) || void 0 === He || He.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(ee) {
            if (!ee.ok) return;
            const ie = ee.config;
            "autocaptureExceptions" in ie && (this._remoteEnabled = !!ie.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [xe]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(ee) {
            try {
              var ie, He, ye;
              const be = null !== (ie = null == ee || null === (He = ee.$exception_list) || void 0 === He || null === (He = He[0]) || void 0 === He ? void 0 : He.type) && void 0 !== ie ? ie : "Exception";
              if (this._rateLimiter.consumeRateLimit(be)) return void Hk.info("Skipping exception capture because of client rate limiting.", {
                exception: be
              });
              null === (ye = this._instance.exceptions) || void 0 === ye || ye.sendExceptionEvent(ee)
            } catch (ee) {}
          }
        },
        exceptions: class {
          constructor(ee) {
            var ie, He;
            this._suppressionRules = [], this._errorPropertiesBuilder = new wb([new Nb, new KM, new rb, new Gb, new bM, new yM, new eM, new MM], function(ee) {
              for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
              return function(ie) {
                let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const be = [],
                  Me = ie.split("\n"),
                  Ke = Math.min(Me.length, ye + 1e3),
                  Ue = [];
                for (let oe = ye; Ke > oe; oe++) {
                  const ie = Me[oe];
                  if (ie.length > 1024) continue;
                  const ye = mb.test(ie) ? ie.replace(mb, "$1") : ie;
                  if (!ye.match(/\S*Error: /)) {
                    for (const ie of He) {
                      const He = ie(ye, ee);
                      if (He) {
                        be.push(He);
                        const ee = Sb(be);
                        if (ee) {
                          for (let ie = Ue.length - 1; ie >= 0; ie--) {
                            const He = Ue[ie];
                            if (ee.start >= He.start + He.length) break;
                            Ue.pop()
                          }
                          Ue.push(ee)
                        }
                        break
                      }
                    }
                    if (Ib(be, Ue) >= 50) break
                  }
                }
                const Fe = [...Ue].sort(((ee, ie) => ie.start - ee.start)),
                  Je = Fe[Fe.length - 1];
                if (Je) {
                  const ee = jb(be, Je);
                  be.splice(Je.start - ee, ee);
                  for (const ie of Fe) ie.start -= ee
                }
                for (const ee of Fe) nb(be, ee);
                return Ue.some((ee => 0 === ee.start && be.length === ee.length)) && function(ee) {
                    const ie = ee.map((ee => `${ee.function}|${ee.filename}|${ee.lineno}|${ee.colno}|${ee.module}`));
                    let He = 0;
                    for (let ye = 1; ie.length > ye; ye++) hb(ie, ye, He) && (He = ye);
                    ee.push(...ee.splice(0, He))
                  }(be),
                  function(ee) {
                    if (!ee.length) return [];
                    const ie = Array.from(ee);
                    return ie.reverse(), ie.slice(0, 50).map((ee => {
                      return Eb(Eb({}, ee), {}, {
                        filename: ee.filename || (He = ie, He[He.length - 1] || {}).filename,
                        function: ee.function || "?"
                      });
                      var He
                    }))
                  }(be)
              }
            }("web:javascript", Lb, ub)), this._instance = ee, this._suppressionRules = null !== (ie = null === (He = this._instance.persistence) || void 0 === He ? void 0 : He.get_property("$error_tracking_suppression_rules")) && void 0 !== ie ? ie : [], this._exceptionStepsConfig = RM(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new kM(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = RM(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(ee) {
            var ie, He, ye;
            if (!ee.ok) return;
            const be = ee.config;
            if (!("errorTracking" in be)) return;
            const Me = null !== (ie = null === (He = be.errorTracking) || void 0 === He ? void 0 : He.suppressionRules) && void 0 !== ie ? ie : [],
              Ke = null === (ye = be.errorTracking) || void 0 === ye ? void 0 : ye.captureExtensionExceptions;
            this._suppressionRules = Me, this._instance.persistence && this._instance.persistence.register({
              [Le]: this._suppressionRules,
              [Ce]: Ke
            })
          }
          get _captureExtensionExceptions() {
            var ee;
            const ie = !!this._instance.get_property(Ce),
              He = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (ee = null != He ? He : ie) && void 0 !== ee && ee
          }
          buildProperties(ee, ie) {
            return this._errorPropertiesBuilder.buildFromUnknown(ee, {
              syntheticException: null == ie ? void 0 : ie.syntheticException,
              mechanism: {
                handled: null == ie ? void 0 : ie.handled
              }
            })
          }
          addExceptionStep(ee, ie) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!ZH(ee) || 0 === ee.trim().length) return void Gk.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: He,
                droppedKeys: ye
              } = function(ee) {
                if (!ee) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const ie = [];
                return {
                  sanitizedProperties: Object.keys(ee).reduce(((He, ye) => JM.has(ye) ? (ie.push(ye), He) : (He[ye] = ee[ye], He)), {}),
                  droppedKeys: ie
                }
              }(this._coerceExceptionStepProperties(ie));
              ye.length > 0 && Gk.warn("Ignoring reserved exception step fields", {
                droppedKeys: ye
              }), this._exceptionStepsBuffer.add(Eb({
                [UM]: ee,
                [FM]: (new Date).toISOString()
              }, He))
            } catch (ee) {
              Gk.error("Failed to add exception step. Ignoring breadcrumb.", ee)
            }
          }
          sendExceptionEvent(ee) {
            try {
              const ie = ee.$exception_list;
              if (this._isExceptionList(ie)) {
                if (this._matchesSuppressionRule(ie)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Gk.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(ie)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Gk.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(ie)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Gk.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(ie)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Gk.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const He = this._exceptionStepsConfig.enabled && PH(ee.$exception_steps) ? this._addBufferedExceptionSteps(ee) : ee,
                ye = function() {
                  if ("u" > typeof process) {
                    var ee;
                    const ie = null === (ee = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === ee ? void 0 : ee.trim();
                    if (ie) return ie
                  }
                  const ie = globalThis._posthogReleaseId;
                  return "string" == typeof ie && ie.length > 0 ? ie : void 0
                }();
              ye && (He.$release_id = ye);
              try {
                const ee = this._instance.capture("$exception", He, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return ee && this._exceptionStepsBuffer.clear(), ee
              } catch (ee) {
                return Nk(ee) || Gk.error("Failed to capture exception event. Dropping this exception.", ee), void this._exceptionStepsBuffer.clear()
              }
            } catch (ee) {
              return void(Nk(ee) || Gk.error("Failed to process exception event. Ignoring this exception.", ee))
            }
          }
          _addBufferedExceptionSteps(ee) {
            try {
              const ie = this._exceptionStepsBuffer.getAttachable();
              return 0 === ie.length ? ee : Eb(Eb({}, ee), {}, {
                $exception_steps: ie
              })
            } catch (be) {
              return Gk.error("Failed to read buffered exception steps. Capturing exception without steps.", be), ee
            }
          }
          _addDroppedExceptionStep(ee) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [UM]: ee,
              [FM]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(ee) {
            return dH(ee) ? Eb({}, ee) : {}
          }
          _getExceptionStepsConfig() {
            var ee, ie;
            return null !== (ee = null === (ie = this._instance.config.error_tracking) || void 0 === ie ? void 0 : ie.exception_steps) && void 0 !== ee ? ee : {}
          }
          _matchesSuppressionRule(ee) {
            if (0 === ee.length) return !1;
            try {
              const ie = ee.reduce(((ee, ie) => {
                let {
                  type: He,
                  value: ye
                } = ie;
                return ZH(He) && He.length > 0 && ee.$exception_types.push(He), ZH(ye) && ye.length > 0 && ee.$exception_values.push(ye), ee
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((ee => {
                const He = ee.values.map((ee => {
                  const He = MR[ee.operator],
                    ye = ie[ee.key];
                  if (!He || !ye) return !1;
                  const be = gH(ee.value) ? ee.value : [ee.value];
                  return be.length > 0 && He(be, ye)
                }));
                return "OR" === ee.type ? He.some(Boolean) : He.every(Boolean)
              }))
            } catch (ee) {
              return Gk.warn("Failed to evaluate suppression rules. Capturing the exception.", ee), !1
            }
          }
          _isExtensionException(ee) {
            const ie = ee.flatMap((ee => {
                var ie, He;
                return null !== (ie = null === (He = ee.stacktrace) || void 0 === He ? void 0 : He.frames) && void 0 !== ie ? ie : []
              })),
              He = ie.filter((ee => {
                let {
                  filename: ie
                } = ee;
                return !!ie && eq.some((ee => ie.startsWith(ee)))
              }));
            return 0 !== He.length && (!He.every((ee => {
              let {
                filename: ie
              } = ee;
              return !!ie && ie.startsWith(rk)
            })) || ee.some((ee => {
              let {
                type: ie,
                value: He
              } = ee;
              return "NoResponse" === ie || ZH(He) && Qk.some((ee => {
                let {
                  value: ie,
                  exact: ye
                } = ee;
                return ye ? He === ie : He.includes(ie)
              }))
            })) && !ie.some((ee => {
              let {
                in_app: ie,
                filename: He
              } = ee;
              return ie && !(null == He ? void 0 : He.startsWith(rk))
            })))
          }
          _isInjectedBrowserScriptException(ee) {
            return ee.some((ee => {
              let {
                value: ie
              } = ee;
              return ZH(ie) && iq.some((ee => ie.includes(ee)))
            }))
          }
          _isPostHogException(ee) {
            if (ee.length > 0) {
              var ie, He, ye, be;
              const Me = null !== (ie = null === (He = ee[0].stacktrace) || void 0 === He ? void 0 : He.frames) && void 0 !== ie ? ie : [],
                Ke = Me[Me.length - 1];
              return null !== (ye = null == Ke || null === (be = Ke.filename) || void 0 === be ? void 0 : be.includes("posthog.com/static")) && void 0 !== ye && ye
            }
            return !1
          }
          _isExceptionList(ee) {
            return !PH(ee) && gH(ee)
          }
        }
      },
      xq = Eb({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(ee) {
            this._productTourManager = null, this._cachedTours = null, this._instance = ee
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(ee) {
            if (!ee.ok) return;
            const ie = ee.config;
            if ("productTours" in ie) {
              var He, ye;
              if (this._persistence && this._persistence.register({
                  [me]: !!ie.productTours
                }), !Ek(this._instance)) return !this._productTourManager && PH(null === (He = this._persistence) || void 0 === He ? void 0 : He.props.ph_product_tours) || Bk.info("product tours disabled; stopping and clearing cached tours"), null === (ye = this._productTourManager) || void 0 === ye || ye.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Ek(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(ee) {
            var ie, He, ye;
            (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.generateProductTours) ? ee(): null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "product-tours", (ie => {
              ie ? Bk.error("Could not load product tours script", ie) : ee()
            }))
          }
          _startProductTours() {
            var ee;
            !this._productTourManager && (null === (ee = JH.__PosthogExtensions__) || void 0 === ee ? void 0 : ee.generateProductTours) && (this._productTourManager = JH.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (gH(this._cachedTours) && !ie) return void ee(this._cachedTours, {
              isLoaded: !0
            });
            const He = this._persistence;
            if (He) {
              const ye = He.props[Ri];
              if (gH(ye) && !ie) return this._cachedTours = ye, void ee(ye, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: ie => {
                if (!Ek(this._instance)) return void ee([], {
                  isLoaded: !0
                });
                const ye = ie.statusCode;
                if (200 !== ye || !ie.json) {
                  const He = `Product Tours API could not be loaded, status: ${ye}`;
                  return 0 === ye ? ie.error || Bk.warn(He) : Bk.error(He), void ee([], {
                    isLoaded: !1,
                    error: He
                  })
                }
                const be = gH(ie.json.product_tours) ? ie.json.product_tours : [];
                this._cachedTours = be, He && He.register({
                  [Ri]: be
                }), ee(be, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(ee) {
            PH(this._productTourManager) ? ee([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(ee)
          }
          showProductTour(ee) {
            var ie;
            null === (ie = this._productTourManager) || void 0 === ie || ie.showTourById(ee)
          }
          previewTour(ee) {
            this._productTourManager ? this._productTourManager.previewTour(ee) : this._loadScript((() => {
              var ie;
              this._startProductTours(), null === (ie = this._productTourManager) || void 0 === ie || ie.previewTour(ee)
            }))
          }
          dismissProductTour() {
            var ee;
            null === (ee = this._productTourManager) || void 0 === ee || ee.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var ee;
            null === (ee = this._productTourManager) || void 0 === ee || ee.nextStep()
          }
          previousStep() {
            var ee;
            null === (ee = this._productTourManager) || void 0 === ee || ee.previousStep()
          }
          clearCache() {
            var ee;
            this._cachedTours = null, null === (ee = this._persistence) || void 0 === ee || ee.unregister("ph_product_tours")
          }
          resetTour(ee) {
            var ie;
            null === (ie = this._productTourManager) || void 0 === ie || ie.resetTour(ee)
          }
          resetAllTours() {
            var ee;
            null === (ee = this._productTourManager) || void 0 === ee || ee.resetAllTours()
          }
          cancelPendingTour(ee) {
            var ie;
            null === (ie = this._productTourManager) || void 0 === ie || ie.cancelPendingTour(ee)
          }
        }
      }, Yq),
      Lq = {
        siteApps: class {
          constructor(ee) {
            this._instance = ee, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(ee, ie) {
            if (!ie) return;
            const He = this.globalsForEvent(ie);
            this._bufferedInvocations.push(He), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var ee;
            return null === (ee = JH._POSTHOG_REMOTE_CONFIG) || void 0 === ee || null === (ee = ee[this._instance.config.token]) || void 0 === ee ? void 0 : ee.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const ee = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                ee(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(ee) {
            var ie, He, ye, be, Me, Ke, Ue;
            if (!ee) throw new Error("Event payload is required");
            const Fe = {},
              Je = this._instance.get_property("$groups") || [],
              oe = this._instance.get_property("$stored_group_properties") || {};
            for (const [qe, fe] of Object.entries(oe)) Fe[qe] = {
              id: Je[qe],
              type: qe,
              properties: fe
            };
            const {
              $set_once: Re,
              $set: ke
            } = ee;
            return {
              event: Eb(Eb({}, wM(ee, gk)), {}, {
                properties: Eb(Eb(Eb({}, ee.properties), ke ? {
                  $set: Eb(Eb({}, null !== (ie = null === (He = ee.properties) || void 0 === He ? void 0 : He.$set) && void 0 !== ie ? ie : {}), ke)
                } : {}), Re ? {
                  $set_once: Eb(Eb({}, null !== (ye = null === (be = ee.properties) || void 0 === be ? void 0 : be.$set_once) && void 0 !== ye ? ye : {}), Re)
                } : {}),
                elements_chain: null !== (Me = null === (Ke = ee.properties) || void 0 === Ke ? void 0 : Ke.$elements_chain) && void 0 !== Me ? Me : "",
                distinct_id: null === (Ue = ee.properties) || void 0 === Ue ? void 0 : Ue.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: Fe
            }
          }
          _prepareElementForSiteApp(ee) {
            var ie;
            const He = null === (ie = ee.tagName) || void 0 === ie ? void 0 : ie.toLowerCase();
            return "style" === He && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(ee) || (Ok.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === He && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(ee) || (Ok.error("prepare_external_dependency_script returned null"), null) : ee
          }
          _patchSiteAppElementInsertionMethods() {
            var ee, ie, He, ye, be, Me, Ke, Ue;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const Fe = null == iH ? void 0 : iH.defaultView,
              Je = null == Fe || null === (ee = Fe.Node) || void 0 === ee ? void 0 : ee.prototype;
            if (!Fe || !Je) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const oe = [],
              Re = this,
              ke = new WeakSet,
              qe = (ee, ie, He) => {
                if (!(null == ee ? void 0 : ee[ie])) return;
                const ye = ee[ie];
                ee[ie] = He(ye), oe.push((() => {
                  ee[ie] = ye
                }))
              },
              fe = ee => {
                if (ke.has(ee)) return ee;
                const ie = Re._prepareElementForSiteApp(ee);
                return ie && ke.add(ie), ie
              },
              Te = ee => ee.map((ee => "string" == typeof ee ? ee : fe(ee))).filter((ee => !DH(ee)));
            return qe(Je, "appendChild", (ee => function(ie) {
              const He = fe(ie);
              return He ? ee.call(this, He) : ie
            })), qe(Je, "insertBefore", (ee => function(ie, He) {
              const ye = fe(ie);
              return ye ? ee.call(this, ye, He) : ie
            })), qe(Je, "replaceChild", (ee => function(ie, He) {
              const ye = fe(ie);
              return ye ? ee.call(this, ye, He) : He
            })), [null === (ie = Fe.Element) || void 0 === ie ? void 0 : ie.prototype, null === (He = Fe.Document) || void 0 === He ? void 0 : He.prototype, null === (ye = Fe.DocumentFragment) || void 0 === ye ? void 0 : ye.prototype].forEach((ee => {
              qe(ee, "append", (ee => function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                return ee.apply(this, Te(He))
              })), qe(ee, "prepend", (ee => function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                return ee.apply(this, Te(He))
              }))
            })), [null === (be = Fe.Element) || void 0 === be ? void 0 : be.prototype, null === (Me = Fe.CharacterData) || void 0 === Me ? void 0 : Me.prototype, null === (Ke = Fe.DocumentType) || void 0 === Ke ? void 0 : Ke.prototype].forEach((ee => {
              qe(ee, "before", (ee => function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                return ee.apply(this, Te(He))
              })), qe(ee, "after", (ee => function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                return ee.apply(this, Te(He))
              })), qe(ee, "replaceWith", (ee => function() {
                for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
                const be = Te(He);
                return He.length && !be.length ? void 0 : ee.apply(this, be)
              }))
            })), qe(null === (Ue = Fe.Element) || void 0 === Ue ? void 0 : Ue.prototype, "insertAdjacentElement", (ee => function(ie, He) {
              const ye = fe(He);
              return ye ? ee.call(this, ie, ye) : null
            })), this._restoreSiteAppElementPatches = () => {
              oe.forEach((ee => ee())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let ee = !1;
            return () => {
              var ie;
              ee || (ee = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (ie = this._restoreSiteAppElementPatches) || void 0 === ie || ie.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(ee) {
            let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const He = this._patchSiteAppElementInsertionMethods();
            try {
              const ye = ee(He);
              return ie && He(), ye
            } catch (ee) {
              throw He(), ee
            }
          }
          setupSiteApp(ee) {
            const ie = this.apps[ee.id],
              He = () => {
                var He;
                !ie.errored && this._bufferedInvocations.length && (Ok.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${ee.id}`), this._bufferedInvocations.forEach((ee => this._runWithPreparedSiteAppElements((() => {
                  var He;
                  return null === (He = ie.processEvent) || void 0 === He ? void 0 : He.call(ie, ee)
                })))), ie.processedBuffer = !0), Object.values(this.apps).every((ee => ee.processedBuffer || ee.errored)) && (null === (He = this._stopBuffering) || void 0 === He || He.call(this))
              };
            let ye = !1;
            const be = be => {
              ie.errored = !be, ie.loaded = !0, Ok.info(`Site app with id ${ee.id} ${be?"loaded":"errored"}`), ye && He()
            };
            try {
              const {
                processEvent: He
              } = this._runWithPreparedSiteAppElements((ie => ee.init({
                posthog: this._instance,
                callback(ee) {
                  ie(), be(ee)
                }
              })), !1);
              He && (ie.processEvent = He), ye = !0
            } catch (ie) {
              Ok.error(dk + ee.id, ie), be(!1)
            }
            if (ye && ie.loaded) try {
              He()
            } catch (He) {
              Ok.error(`Error while processing buffered events PostHog app with config id ${ee.id}`, He), ie.errored = !0
            }
          }
          _setupSiteApps() {
            const ee = this.siteAppLoaders || [];
            for (const ie of ee) this.apps[ie.id] = {
              id: ie.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const ie of ee) this.setupSiteApp(ie)
          }
          _onCapturedEvent(ee) {
            if (0 === Object.keys(this.apps).length) return;
            const ie = this.globalsForEvent(ee);
            for (const He of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var ee;
                return null === (ee = He.processEvent) || void 0 === ee ? void 0 : ee.call(He, ie)
              }))
            } catch (ie) {
              Ok.error(`Error while processing event ${ee.event} for site app ${He.id}`, ie)
            }
          }
          onRemoteConfig(ee) {
            var ie, He, ye;
            if (null === (ie = this.siteAppLoaders) || void 0 === ie ? void 0 : ie.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (ee => this._onCapturedEvent(ee)))) : void Ok.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (He = this._stopBuffering) || void 0 === He || He.call(this), !ee.ok) return;
            const be = ee.config;
            if (null === (ye = be.siteApps) || void 0 === ye ? void 0 : ye.length)
              if (this.isEnabled)
                for (const {
                    id: Ue,
                    url: Fe
                  }
                  of be.siteApps) {
                  var Me, Ke;
                  JH[`__$$ph_site_app_${Ue}`] = this._instance, null === (Me = JH.__PosthogExtensions__) || void 0 === Me || null === (Ke = Me.loadSiteApp) || void 0 === Ke || Ke.call(Me, this._instance, Fe, (ee => {
                    if (ee) return Ok.error(dk + Ue, ee)
                  }))
                } else Ok.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      Cq = {
        tracingHeaders: class {
          constructor(ee) {
            this._instance = ee, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const ee = this._syncHostnamesForPatch();
              var ie, He;
              ee ? (tH(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (ie = JH.__PosthogExtensions__) || void 0 === ie || null === (ie = ie.tracingHeadersPatchFns) || void 0 === ie ? void 0 : ie._patchXHR(ee, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), tH(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (He = He.tracingHeadersPatchFns) || void 0 === He ? void 0 : He._patchFetch(ee, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(ee) {
            var ie, He, ye;
            (null === (ie = JH.__PosthogExtensions__) || void 0 === ie ? void 0 : ie.tracingHeadersPatchFns) ? ee(): null === (He = JH.__PosthogExtensions__) || void 0 === He || null === (ye = He.loadExternalDependency) || void 0 === ye || ye.call(He, this._instance, "tracing-headers", (ie => {
              if (ie) return Kk.error("failed to load script", ie);
              ee()
            }))
          }
          _getConfiguredHostnames() {
            var ee, ie;
            return null !== (ee = null !== (ie = this._instance.config.tracing_headers) && void 0 !== ie ? ie : this._instance.config.addTracingHeaders) && void 0 !== ee ? ee : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const ee = this._getConfiguredHostnames();
            return gH(ee) ? (gH(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...ee) : this._hostnamesForPatch = [...ee], ee.length > 0 ? this._hostnamesForPatch : void 0) : (gH(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = ee || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var ee, ie;
            null === (ee = this._restoreXHRPatch) || void 0 === ee || ee.call(this), null === (ie = this._restoreFetchPatch) || void 0 === ie || ie.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      vq = Eb({
        surveys: class extends wk {
          constructor(ee) {
            var ie;
            super(new ak(ee), (ie = ee, {
              get projectToken() {
                return ie.config.token
              },
              kv: new Vk(ie)
            })), this._instance = ee
          }
          _sendSurveysRequest(ee, ie) {
            const He = ie.query ? to(ee, ie.query) : ee;
            return new Promise((ee => {
              var ye;
              this._instance._send_request({
                method: ie.method,
                url: this._instance.requestRouter.endpointFor(null !== (ye = ie.target) && void 0 !== ye ? ye : "api", He),
                data: ie.body,
                headers: ie.headers,
                timeout: ie.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: ie.transport,
                compression: ie.compression,
                timestampMode: ie.sentAt,
                callback: ee
              })
            }))
          }
        }
      }, Yq),
      uq = {
        toolbar: class {
          constructor(ee) {
            this.instance = ee
          }
          _setToolbarState(ee) {
            JH.ph_toolbar_state = ee
          }
          _getToolbarState() {
            var ee;
            return null !== (ee = JH.ph_toolbar_state) && void 0 !== ee ? ee : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var ye, be;
            if (GK(this.instance.config)) return !1;
            if (!ri || !iH) return !1;
            ee = null !== (ye = ee) && void 0 !== ye ? ye : ri.location, He = null !== (be = He) && void 0 !== be ? be : ri.history;
            try {
              if (!ie) {
                try {
                  ri.localStorage.setItem("test", "test"), ri.localStorage.removeItem("test")
                } catch (ee) {
                  return !1
                }
                ie = null == ri ? void 0 : ri.localStorage
              }
              const ye = ck || lF(ee.hash, "__posthog") || lF(ee.hash, "state");
              let be;
              const Me = ye ? qb((() => JSON.parse(atob(decodeURIComponent(ye))))) || qb((() => JSON.parse(decodeURIComponent(ye)))) : null;
              return Me && "ph_authorize" === Me.action ? (be = Me, be.source = "url", be && Object.keys(be).length > 0 && (Me.desiredHash ? ee.hash = Me.desiredHash : He ? He.replaceState(He.state, "", ee.pathname + ee.search) : ee.hash = "")) : (be = JSON.parse(ie.getItem(xk) || "{}"), be.source = "localstorage", delete be.userIntent), !(!be.token || this.instance.config.token !== be.token || (this.loadToolbar(be), 0))
            } catch (ee) {
              return !1
            }
          }
          _callLoadToolbar(ee) {
            const ie = JH.ph_load_toolbar || JH.ph_load_editor;
            !PH(ie) && OH(ie) ? ie(ee, this.instance) : Lk.warn("No toolbar load function found")
          }
          loadToolbar(ee) {
            const ie = !!(null == iH ? void 0 : iH.getElementById("__POSTHOG_TOOLBAR__"));
            if (!ri || ie) return !1;
            const He = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              ye = Eb(Eb({
                token: this.instance.config.token
              }, ee), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, He ? {
                instrument: !1
              } : {});
            if (ri.localStorage.setItem(xk, JSON.stringify(Eb(Eb({}, ye), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(ye);
            else if (0 === this._getToolbarState()) {
              var be, Me;
              this._setToolbarState(1), null === (be = JH.__PosthogExtensions__) || void 0 === be || null === (Me = be.loadExternalDependency) || void 0 === Me || Me.call(be, this.instance, "toolbar", (ee => {
                if (ee) return Lk.error("[Toolbar] Failed to load", ee), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(ye)
              })), NK(ri, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(ye)
              }))
            }
            return !0
          }
          _loadEditor(ee) {
            return this.loadToolbar(ee)
          }
          maybeLoadEditor() {
            let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(ee, ie, He)
          }
        }
      },
      mq = Eb({
        experiments: class ee {
          get _config() {
            return this._instance.config
          }
          constructor(ie) {
            var He = this;
            this._instance = ie, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              He.getWebExperiments((ie => {
                ee._logInfo("retrieved web experiments from the server"), He._flagToExperiments = new Map, ie.forEach((ie => {
                  if (ie.feature_flag_key) {
                    var ye;
                    He._flagToExperiments && (ee._logInfo("setting flag key ", ie.feature_flag_key, " to web experiment ", ie), null === (ye = He._flagToExperiments) || void 0 === ye || ye.set(ie.feature_flag_key, ie));
                    const be = He._instance.getFeatureFlag(ie.feature_flag_key);
                    ZH(be) && ie.variants[be] && He._applyTransforms(ie.name, be, ie.variants[be].transforms)
                  } else if (ie.variants)
                    for (const be in ie.variants) {
                      const ye = ie.variants[be];
                      ee._matchesTestVariant(ye, He._instance) && He._applyTransforms(ie.name, be, ye.transforms)
                    }
                }))
              }), ie)
            }, this._instance.onFeatureFlags((ee => {
              this.onFeatureFlags(ee)
            }))
          }
          initialize() {}
          onFeatureFlags(ie) {
            if (this._is_bot()) ee._logInfo(Hq);
            else if (!this._config.disable_web_experiments) {
              if (PH(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              ee._logInfo("applying feature flags", ie), ie.forEach((ee => {
                var ie;
                if (this._flagToExperiments && (null === (ie = this._flagToExperiments) || void 0 === ie ? void 0 : ie.has(ee))) {
                  var He;
                  const ie = this._instance.getFeatureFlag(ee),
                    ye = null === (He = this._flagToExperiments) || void 0 === He ? void 0 : He.get(ee);
                  ie && (null == ye ? void 0 : ye.variants[ie]) && this._applyTransforms(ye.name, ie, ye.variants[ie].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const ie = ee.getWindowLocation();
            if (null == ie ? void 0 : ie.search) {
              const He = uF(null == ie ? void 0 : ie.search, "__experiment_id"),
                ye = uF(null == ie ? void 0 : ie.search, "__experiment_variant");
              He && ye && (ee._logInfo(`previewing web experiments ${He} && ${ye}`), this.getWebExperiments((ee => {
                this._showPreviewWebExperiment(parseInt(He), ye, ee)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(ee, ie, He) {
            if (this._config.disable_web_experiments && !He) return ee([]);
            const ye = this._instance.get_property("$web_experiments");
            if (ye && !ie) return ee(ye);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: ie => ee(200 === ie.statusCode && ie.json && ie.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(ie, He, ye) {
            const be = ye.filter((ee => ee.id === ie));
            be && be.length > 0 && (ee._logInfo(`Previewing web experiment [${be[0].name}] with variant [${He}]`), this._applyTransforms(be[0].name, He, be[0].variants[He].transforms))
          }
          static _matchesTestVariant(ie, He) {
            return !PH(ie.conditions) && ee._matchUrlConditions(ie, He) && ee._matchUTMConditions(ie)
          }
          static _matchUrlConditions(ie, He) {
            var ye;
            if (PH(ie.conditions) || PH(null === (ye = ie.conditions) || void 0 === ye ? void 0 : ye.url)) return !0;
            const be = ee.getWindowLocation();
            if (be) {
              var Me, Ke, Ue;
              const ee = wU(He, be.href);
              return !(null === (Me = ie.conditions) || void 0 === Me ? void 0 : Me.url) || yq[null !== (Ke = null === (Ue = ie.conditions) || void 0 === Ue ? void 0 : Ue.urlMatchType) && void 0 !== Ke ? Ke : "icontains"](ie.conditions.url, ee)
            }
            return !1
          }
          static getWindowLocation() {
            return null == ri ? void 0 : ri.location
          }
          static _matchUTMConditions(ee) {
            var ie;
            if (PH(ee.conditions) || PH(null === (ie = ee.conditions) || void 0 === ie ? void 0 : ie.utm)) return !0;
            const He = IF();
            if (He.utm_source) {
              var ye, be, Me, Ke, Ue, Fe, Je, oe;
              const ie = !(null === (ye = ee.conditions) || void 0 === ye || null === (ye = ye.utm) || void 0 === ye ? void 0 : ye.utm_campaign) || (null === (be = ee.conditions) || void 0 === be || null === (be = be.utm) || void 0 === be ? void 0 : be.utm_campaign) == He.utm_campaign,
                Re = !(null === (Me = ee.conditions) || void 0 === Me || null === (Me = Me.utm) || void 0 === Me ? void 0 : Me.utm_source) || (null === (Ke = ee.conditions) || void 0 === Ke || null === (Ke = Ke.utm) || void 0 === Ke ? void 0 : Ke.utm_source) == He.utm_source,
                ke = !(null === (Ue = ee.conditions) || void 0 === Ue || null === (Ue = Ue.utm) || void 0 === Ue ? void 0 : Ue.utm_medium) || (null === (Fe = ee.conditions) || void 0 === Fe || null === (Fe = Fe.utm) || void 0 === Fe ? void 0 : Fe.utm_medium) == He.utm_medium,
                qe = !(null === (Je = ee.conditions) || void 0 === Je || null === (Je = Je.utm) || void 0 === Je ? void 0 : Je.utm_term) || (null === (oe = ee.conditions) || void 0 === oe || null === (oe = oe.utm) || void 0 === oe ? void 0 : oe.utm_term) == He.utm_term;
              return ie && ke && qe && Re
            }
            return !1
          }
          static _logInfo(ee) {
            for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
            CK.info(`[WebExperiments] ${ee}`, He)
          }
          _applyTransforms(ie, He, ye) {
            this._is_bot() ? ee._logInfo(Hq) : "control" !== He ? ye.forEach((ye => {
              if (ye.selector) {
                var be;
                ee._logInfo(`applying transform of variant ${He} for experiment ${ie} `, ye);
                const Me = null === (be = document) || void 0 === be ? void 0 : be.querySelectorAll(ye.selector);
                null == Me || Me.forEach((ee => {
                  const ie = ee;
                  ye.html && (ie.innerHTML = ye.html), ye.css && ie.setAttribute("style", ye.css)
                }))
              }
            })) : ee._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return eH && this._instance ? Qo(eH, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, Yq),
      lq = {
        conversations: class {
          constructor(ee) {
            this._instance = ee, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(ee) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = ee.ok, !ee.ok) return;
            const ie = ee.config.conversations;
            PH(ie) || (VH(ie) ? this._isConversationsEnabled = ie : (this._isConversationsEnabled = ie.enabled, this._remoteConfig = ie), this.loadIfEnabled())
          }
          reset() {
            var ee;
            null === (ee = this._conversationsManager) || void 0 === ee || ee.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (GK(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const ee = null == JH ? void 0 : JH.__PosthogExtensions__;
            if (ee && !tH(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const ie = ee.initConversations;
                  if (ie) return this._completeInitialization(ie), void(this._isInitializing = !1);
                  const He = ee.loadExternalDependency;
                  if (!He) return void this._handleLoadError(mi);
                  He(this._instance, "conversations", (ie => {
                    ie || !ee.initConversations ? this._handleLoadError("Could not load conversations script", ie) : this._completeInitialization(ee.initConversations), this._isInitializing = !1
                  }))
                } catch (ee) {
                  this._handleLoadError("Error initializing conversations", ee), this._isInitializing = !1
                }
              } else bq.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(ee) {
            if (this._remoteConfig) try {
              this._conversationsManager = ee(this._remoteConfig, this._instance), this._loadFailed = !1, bq.info("Conversations loaded successfully")
            } catch (ee) {
              this._handleLoadError("Error completing conversations initialization", ee)
            } else bq.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(ee, ie) {
            bq.error(ee, ie), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : bq.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !DH(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : GK(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : tH(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? PH(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == JH ? void 0 : JH.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var ee, ie;
            return null !== (ee = null === (ie = this._conversationsManager) || void 0 === ie ? void 0 : ie.isVisible()) && void 0 !== ee && ee
          }
          sendMessage(ee, ie, He) {
            var ye = this;
            return jH((function*() {
              return ye._conversationsManager ? ye._conversationsManager.sendMessage(ee, ie, He) : (bq.warn(Mq), null)
            }))()
          }
          getMessages(ee, ie) {
            var He = this;
            return jH((function*() {
              return He._conversationsManager ? He._conversationsManager.getMessages(ee, ie) : (bq.warn(Mq), null)
            }))()
          }
          markAsRead(ee) {
            var ie = this;
            return jH((function*() {
              return ie._conversationsManager ? ie._conversationsManager.markAsRead(ee) : (bq.warn(Mq), null)
            }))()
          }
          getTickets(ee) {
            var ie = this;
            return jH((function*() {
              return ie._conversationsManager ? ie._conversationsManager.getTickets(ee) : (bq.warn(Mq), null)
            }))()
          }
          requestRestoreLink(ee) {
            var ie = this;
            return jH((function*() {
              return ie._conversationsManager ? ie._conversationsManager.requestRestoreLink(ee) : (bq.warn(Mq), null)
            }))()
          }
          restoreFromToken(ee) {
            var ie = this;
            return jH((function*() {
              return ie._conversationsManager ? ie._conversationsManager.restoreFromToken(ee) : (bq.warn(Mq), null)
            }))()
          }
          restoreFromUrlToken() {
            var ee = this;
            return jH((function*() {
              return ee._conversationsManager ? ee._conversationsManager.restoreFromUrlToken() : (bq.warn(Mq), null)
            }))()
          }
          getCurrentTicketId() {
            var ee, ie;
            return null !== (ee = null === (ie = this._conversationsManager) || void 0 === ie ? void 0 : ie.getCurrentTicketId()) && void 0 !== ee ? ee : null
          }
          getWidgetSessionId() {
            var ee, ie;
            return null !== (ee = null === (ie = this._conversationsManager) || void 0 === ie ? void 0 : ie.getWidgetSessionId()) && void 0 !== ee ? ee : null
          }
          _onIdentityChanged() {
            var ee;
            null === (ee = this._conversationsManager) || void 0 === ee || ee.setIdentity()
          }
          _onIdentityCleared() {
            var ee;
            null === (ee = this._conversationsManager) || void 0 === ee || ee.clearIdentity()
          }
        }
      },
      Sq = {
        logs: class extends qq {
          constructor(ee) {
            super({
              get() {
                var ie;
                return null == ee || null === (ie = ee.config) || void 0 === ie ? void 0 : ie.logs
              },
              captureHintKey: le,
              get remoteConfigWillArrive() {
                var ie, He;
                return !(null === (ie = ee._shouldDisableFlags) || void 0 === ie ? void 0 : ie.call(ee)) || !!(null === (He = JH._POSTHOG_REMOTE_CONFIG) || void 0 === He || null === (He = He[ee.config.token]) || void 0 === He ? void 0 : He.config)
              }
            }, (() => function(ee) {
              var ie;
              const He = {};
              if (He.distinctId = ee.get_distinct_id(), ee.sessionManager) {
                const {
                  sessionId: ie,
                  windowId: ye,
                  sessionStartTimestamp: be,
                  lastActivityTimestamp: Me
                } = ee.sessionManager.checkAndGetSessionAndWindowId(!0);
                He.sessionId = ie, He.windowId = ye, PH(be) || (He.sessionStartTimestamp = be), PH(Me) || (He.lastActivityTimestamp = Me)
              }
              if ((null == JH || null === (ie = JH.location) || void 0 === ie ? void 0 : ie.href) && (He.currentUrl = ee.config.disable_capture_url_hashes ? kb(JH.location.href) : JH.location.href), ee.featureFlags) {
                const ie = ee.featureFlags.getFlags();
                ie && ie.length > 0 && (He.activeFeatureFlags = ie)
              }
              return He
            }(ee))), this._instance = ee, this.name = OR, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const ee = vK("[logs]"),
              ie = null == JH ? void 0 : JH.__PosthogExtensions__;
            if (!ie) return void ee.error("PostHog Extensions not found.");
            const He = ie.loadExternalDependency;
            if (He) return ee => {
              He(this._instance, "logs", (He => {
                const ye = ie.logs;
                ee(He, (null == ye ? void 0 : ye.initializeLogs) ? {
                  initialize: ee => ye.initializeLogs(ee),
                  replay(ee, ie) {
                    var He;
                    return null === (He = ye.replayConsoleBuffer) || void 0 === He ? void 0 : He.call(ye, ee, ie)
                  }
                } : void 0)
              }))
            };
            ee.error(mi)
          }
        }
      },
      nq = {
        metrics: class {
          constructor(ee) {
            this._instance = ee, this._logger = vK("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var ee;
            if (this._disposed) return;
            const ie = !!(null === (ee = this._instance.config.metrics) || void 0 === ee ? void 0 : ee.network);
            ie && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (ee => {
              let ie = !0;
              const He = () => ie ? (ee => {
                  var ie;
                  const He = null === (ie = ee.config.metrics) || void 0 === ie ? void 0 : ie.network;
                  return !0 === He ? {} : He || void 0
                })(ee) : void 0,
                ye = gq(ee, He),
                be = Oq(ee, He);
              return () => {
                ie = !1, ye(), be()
              }
            })(this._instance) : !ie && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var ee;
            const ie = null === (ee = this._instance) || void 0 === ee || null === (ee = ee.config) || void 0 === ee ? void 0 : ee.metrics;
            var He;
            return this._core && this._resolvedFrom === ie || (null === (He = this._core) || void 0 === He || He.reset(), this._resolvedFrom = ie, this._core = new xK(this._createHost(), function(ee) {
              var ie, He, ye, be, Me;
              const Ke = null == ee ? void 0 : ee.resourceAttributes;
              return {
                serviceName: null !== (ie = null == Ke ? void 0 : Ke["service.name"]) && void 0 !== ie ? ie : null == ee ? void 0 : ee.serviceName,
                serviceVersion: null !== (He = null == Ke ? void 0 : Ke["service.version"]) && void 0 !== He ? He : null == ee ? void 0 : ee.serviceVersion,
                environment: null !== (ye = null == Ke ? void 0 : Ke["deployment.environment"]) && void 0 !== ye ? ye : null == ee ? void 0 : ee.environment,
                resourceAttributes: Ke,
                beforeSend: null == ee ? void 0 : ee.beforeSend,
                flushIntervalMs: null !== (be = null == ee ? void 0 : ee.flushIntervalMs) && void 0 !== be ? be : 1e4,
                maxSeriesPerFlush: null !== (Me = null == ee ? void 0 : ee.maxSeriesPerFlush) && void 0 !== Me ? Me : 1e3
              }
            }(ie), this._logger)), this._core
          }
          count(ee) {
            let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              He = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(ee, ie, He)
          }
          gauge(ee, ie, He) {
            this._getCore().gauge(ee, ie, He)
          }
          histogram(ee, ie, He) {
            this._getCore().histogram(ee, ie, He)
          }
          flush(ee) {
            if (!this._core) return Promise.resolve();
            if (ee) {
              const ie = this._core.drainWindow();
              return ie && this._sendMetricsBatch(ie, ee), Promise.resolve()
            }
            return this._core.flush().catch((ee => this._logger.error("PostHog metrics flush failed:", ee)))
          }
          reset() {
            var ee;
            null === (ee = this._core) || void 0 === ee || ee.reset()
          }
          dispose() {
            var ee, ie;
            this._disposed = !0, null === (ee = this._stopNetworkMetrics) || void 0 === ee || ee.call(this), this._stopNetworkMetrics = void 0, null === (ie = this._core) || void 0 === ie || ie.reset()
          }
          _createHost() {
            const ee = this._instance,
              ie = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !ee.is_capturing()
              },
              _sendMetricsBatch: ee => ie._sendMetricsBatch(ee),
              getLibraryId: () => Me.LIB_NAME,
              getLibraryVersion: () => Me.LIB_VERSION
            }
          }
          _sendMetricsBatch(ee, ie) {
            return new Promise((He => {
              let ye = !1;
              const be = ee => {
                  ye || (ye = !0, clearTimeout(Me), He(ee))
                },
                Me = setTimeout((() => be({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(Eb(Eb({
                method: "POST",
                url: this._metricsUrl(),
                data: ee,
                compression: "best-available",
                batchKey: "metrics"
              }, ie && {
                transport: ie
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(ee) {
                  const ie = ee.statusCode;
                  if (ie >= 200 && 300 > ie) be({
                    kind: "ok"
                  });
                  else if (413 === ie) be({
                    kind: "too-large"
                  });
                  else if (0 !== ie && 408 !== ie && 429 !== ie && 500 > ie) be({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${ie}`)
                  });
                  else {
                    var He;
                    be({
                      kind: "retry-later",
                      error: null !== (He = ee.error) && void 0 !== He ? He : new Error(`metrics request failed with status ${ie}`)
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
      jq = {
        webMCP: class {
          constructor(ee) {
            this._instance = ee, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const ee = null == iH ? void 0 : iH.modelContext;
            if (!ee || !OH(ee.registerTool)) return;
            const ie = dq.get(ee);
            if (ie) return ie.instances.add(this._instance), void(this._isPatched = !0);
            const He = {
                instances: new Set([this._instance])
              },
              ye = ee.registerTool,
              be = this;
            Mk(ee, "registerTool", (ee => {
              const ie = ee;
              return function(ee) {
                let ye = ee;
                for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
                try {
                  ye = be._wrapTool(ee, He)
                } catch (He) {
                  return ie.call(this, ee, ...Ke)
                }
                return ie.call(this, ye, ...Ke)
              }
            })), ee.registerTool !== ye && (dq.set(ee, He), this._isPatched = !0)
          }
          _wrapTool(ee, ie) {
            if (!ee || !OH(ee.execute)) return ee;
            const He = ee.execute,
              ye = this,
              {
                tool: be,
                injected: Me
              } = function(ee, ie) {
                const He = {
                    intent: !1,
                    model: !1
                  },
                  ye = ee.inputSchema;
                if (! function(ee) {
                    return !!tH(ee) || dH(ee) && Object.keys(ee).every((ee => Wq.has(ee) || ee.startsWith("x-"))) && !0 !== ee.additionalProperties && !dH(ee.additionalProperties) && (!ee.type || "object" === ee.type) && (!ee.properties || dH(ee.properties)) && (!ee.required || gH(ee.required))
                  }(ye)) return {
                  tool: Dq(ee),
                  injected: He
                };
                const be = (null == ye ? void 0 : ye.properties) || {},
                  Me = ee => wq(be, ee) || gH(null == ye ? void 0 : ye.required) && ye.required.includes(ee);
                if (He.intent = ie.intent && !Me("context"), He.model = ie.model && !Me("llm_model"), !He.intent && !He.model) return {
                  tool: Dq(ee),
                  injected: He
                };
                const Ke = Eb({}, be),
                  Ue = gH(null == ye ? void 0 : ye.required) ? [...ye.required] : [];
                return He.intent && (Ke.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, Ue.includes("context") || Ue.push("context")), He.model && (Ke.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, Ue.includes("llm_model") || Ue.push("llm_model")), {
                  tool: Dq(ee, Eb(Eb({}, ye), {}, {
                    type: (null == ye ? void 0 : ye.type) || "object",
                    properties: Ke,
                    required: Ue
                  })),
                  injected: He
                }
              }(ee, function(ee) {
                const ie = {
                  intent: !1,
                  model: !1
                };
                for (const He of ee.instances) {
                  const ee = Zq(He.config.capture_webmcp);
                  ie.intent || (ie.intent = !0 === (null == ee ? void 0 : ee.intent)), ie.model || (ie.model = !0 === (null == ee ? void 0 : ee.model))
                }
                return ie
              }(ie));
            return Object.defineProperty(be, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var Ke = arguments.length, Ue = new Array(Ke), Fe = 0; Fe < Ke; Fe++) Ue[Fe] = arguments[Fe];
                const Je = new Date,
                  oe = function(ee, ie) {
                    if (!dH(ee)) return {};
                    try {
                      const He = ie.intent ? Pq(ee.context, 2048, !0) : void 0,
                        ye = ie.model ? Pq(ee.llm_model, 256) : void 0;
                      return Eb(Eb({}, He && "{}" !== He ? {
                        intent: He
                      } : {}), ye && "unknown" !== ye.toLowerCase() ? {
                        model: ye
                      } : {})
                    } catch (ee) {
                      return {}
                    }
                  }(Ue[0], Me),
                  Re = function(ee, ie) {
                    const He = ee[0];
                    if (!dH(He)) return ee;
                    try {
                      const ye = ie.intent && wq(He, "context"),
                        be = ie.model && wq(He, "llm_model");
                      if (!ye && !be) return ee;
                      const Me = Eb({}, He);
                      return ye && delete Me.context, be && delete Me.llm_model, [Me, ...ee.slice(1)]
                    } catch (ie) {
                      return ee
                    }
                  }(Ue, Me);
                let ke;
                try {
                  ke = He.apply(this === be ? ee : this, Re)
                } catch (ee) {
                  throw ye._captureToolCall(ie, be, Je, !0, oe), ee
                }
                return (qe = ke) && "function" == typeof qe.then ? Promise.resolve(ke).then((ee => (ye._captureToolCall(ie, be, Je, Aq(ee), oe), ee)), (ee => {
                  throw ye._captureToolCall(ie, be, Je, !0, oe), ee
                })) : (ye._captureToolCall(ie, be, Je, Aq(ke), oe), ke);
                var qe
              }
            }), be
          }
          _captureToolCall(ee, ie, He, ye, be) {
            const Me = Date.now() - He.getTime();
            for (const Ke of ee.instances) {
              const Ue = Zq(Ke.config.capture_webmcp);
              if (Ue) try {
                Ke.capture("$mcp_tool_call", Eb(Eb({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: ie.name,
                  $mcp_resource_name: ie.name,
                  $mcp_tool_description: ie.description,
                  $mcp_server_name: null == HH ? void 0 : HH.hostname,
                  $mcp_duration_ms: Me,
                  $mcp_is_error: ye
                }, Ue.intent && be.intent ? {
                  $mcp_intent: be.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), Ue.model && be.model ? {
                  $mcp_llm_model: be.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: He
                })
              } catch (ee) {
                continue
              }
            }
          }
        }
      };
    IR.__defaultExtensionClasses = Eb({}, Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb(Eb({}, Yq), Vq), aq), cq), xq), Lq), vq), Cq), uq), mq), lq), Sq), nq), jq));
    const sq = function() {
      Me.SDK_DIST_CHANNEL = "npm";
      const ee = ZR[mR] = new IR;
      return function() {
        function ee() {
          ee.done || (ee.done = !0, vo = !1, mK(ZR, (function(ee) {
            ee._dom_loaded()
          })))
        }(null == iH ? void 0 : iH.addEventListener) ? "complete" === iH.readyState ? ee() : NK(iH, "DOMContentLoaded", ee, {
          capture: !1
        }): ri && CK.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), ee
    }()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);