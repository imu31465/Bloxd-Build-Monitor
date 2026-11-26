export const id = 215;
export const ids = [215];
export const modules = {
  35129: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => En,
      g: () => Hr
    });
    const JV = "0.9.4",
      YV = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: JV
      };
    var UV = YV;
    const yV = "$early_access_features",
      pV = "$active_feature_flags",
      QV = "$feature_flag_details",
      nV = "$feature_flag_errors",
      wV = "$feature_flag_evaluated_at",
      ZV = "$feature_flag_request_id",
      vV = "$minimal_flag_called_events",
      rV = "$enabled_feature_flags",
      kV = "$stored_group_properties",
      bV = "$stored_person_properties",
      EV = "$flag_call_reported",
      BV = "$flag_call_reported_session_id",
      jV = "$feature_flag_payloads",
      qV = "$override_feature_flags",
      tV = "$override_feature_flag_payloads",
      FV = "visibilitychange",
      TV = "$people_distinct_id",
      PV = "distinct_id",
      AV = "$device_id",
      NV = "$device_model",
      XV = "__alias",
      MV = "__cmpns",
      zV = "$fbc",
      GV = "$fbc_persistence",
      WV = "$fbp",
      RV = "$fbp_persistence",
      gV = "__timers",
      DV = "$autocapture_disabled_server_side",
      iV = "$heatmaps_enabled_server_side",
      CV = "$exception_capture_enabled_server_side",
      aV = "$error_tracking_suppression_rules",
      oV = "$error_tracking_capture_extension_exceptions",
      cV = "$web_vitals_enabled_server_side",
      hV = "$dead_clicks_enabled_server_side",
      lV = "$product_tours_enabled_server_side",
      LV = "$logs_capture_enabled_server_side",
      fV = "$web_vitals_allowed_metrics",
      mV = "$session_recording_remote_config",
      KV = "$session_recording_enabled_server_side",
      HV = "$replay_sample_rate",
      uV = "$replay_override_sampling",
      sV = "$replay_override_linked_flag",
      SV = "$replay_override_url_trigger",
      IV = "$replay_override_event_trigger",
      dV = "$sesid",
      OV = "$session_is_sampled",
      Ve = "$session_past_minimum_duration",
      ee = "$session_recording_url_trigger_activated_session",
      xe = "$session_recording_event_trigger_activated_session",
      Je = "$debug_first_full_snapshot_timestamp",
      Ye = "$sess_rec_flush_size",
      Ue = "$groups",
      ye = "$surveys",
      pe = "$surveys_loaded_at",
      Qe = "$surveys_activated",
      ne = "$surveys_activated_session",
      we = "$surveys_activated_timestamps",
      Ze = "ph_product_tours",
      ve = "$product_tours_activated",
      re = "$product_tours_activated_session",
      ke = "$conversations_widget_session_id",
      be = "$conversations_ticket_id",
      Ee = "$conversations_widget_state",
      Be = "$conversations_user_traits",
      je = "$user_state",
      qe = "$client_session_props",
      te = "$capture_rate_limit",
      Fe = "$initial_campaign_params",
      Te = "$initial_referrer_info",
      Pe = "$initial_person_info",
      Ae = "$epp",
      Ne = "$posthog_cookieless",
      Xe = "$cookieless_mode",
      Me = "$sdk_debug_extensions_init_method",
      ze = "$sdk_debug_extensions_init_time_ms",
      Ge = "$sdk_debug_recording_script_not_loaded",
      We = "$sdk_debug_replay_stale_config",
      Re = "$sdk_debug_replay_event_trigger_status",
      ge = "$sdk_debug_replay_linked_flag_trigger_status",
      De = "$sdk_debug_replay_matched_recording_trigger_groups",
      ie = "$sdk_debug_replay_pending_trigger_conditions",
      Ce = "$sdk_debug_replay_remote_trigger_matching_config",
      ae = "$sdk_debug_replay_trigger_groups_count",
      oe = "$sdk_debug_replay_url_trigger_status",
      ce = "$session_recording_start_reason",
      he = "PostHog loadExternalDependency extension not found.",
      le = "anonymous",
      Le = "identified",
      fe = "identified_only",
      me = "beforeunload",
      Ke = "$pageview",
      He = "$pageleave",
      ue = "$identify",
      se = "$groupidentify",
      Se = "u" > typeof window ? window : void 0,
      Ie = "u" > typeof globalThis ? globalThis : Se,
      de = null == Ie ? void 0 : Ie.navigator,
      Oe = null == Ie ? void 0 : Ie.document,
      Vx = null == Ie ? void 0 : Ie.location,
      ex = null == Ie ? void 0 : Ie.fetch,
      xx = (null == Ie ? void 0 : Ie.XMLHttpRequest) && "withCredentials" in new Ie.XMLHttpRequest ? Ie.XMLHttpRequest : void 0,
      Jx = null == Ie ? void 0 : Ie.AbortController,
      Yx = null == Ie ? void 0 : Ie.CompressionStream,
      Ux = null == de ? void 0 : de.userAgent,
      yx = "undefined" != typeof globalThis ? globalThis : Se;
    yx && "undefined" == typeof self && (yx.self = yx), yx && "undefined" == typeof File && (yx.File = function() {});
    const px = null != Se ? Se : {};
    var Qx = function(VV) {
        return VV.AnonymousId = "anonymous_id", VV.DistinctId = "distinct_id", VV.Props = "props", VV.EnablePersonProcessing = "enable_person_processing", VV.PersonMode = "person_mode", VV.FeatureFlagDetails = "feature_flag_details", VV.FeatureFlags = "feature_flags", VV.FeatureFlagPayloads = "feature_flag_payloads", VV.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", VV.BootstrapFeatureFlags = "bootstrap_feature_flags", VV.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", VV.OverrideFeatureFlags = "override_feature_flags", VV.Queue = "queue", VV.AiQueue = "ai_queue", VV.AiCaptureQueue = "ai_capture_queue", VV.LogsQueue = "logs_queue", VV.OptedOut = "opted_out", VV.SessionId = "session_id", VV.SessionStartTimestamp = "session_start_timestamp", VV.SessionLastTimestamp = "session_timestamp", VV.PersonProperties = "person_properties", VV.GroupProperties = "group_properties", VV.InstalledAppBuild = "installed_app_build", VV.InstalledAppVersion = "installed_app_version", VV.SessionReplay = "session_replay", VV.PushRegistered = "push_registered", VV.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", VV.SurveyLastSeenDate = "survey_last_seen_date", VV.SurveysInProgress = "surveys_in_progress", VV.SurveysSeen = "surveys_seen", VV.Surveys = "surveys", VV.RemoteConfig = "remote_config", VV.FlagsEndpointWasHit = "flags_endpoint_was_hit", VV.DeviceId = "device_id", VV
      }({}),
      nx = function(VV) {
        return VV.GZipJS = "gzip-js", VV.Base64 = "base64", VV
      }({});
    const wx = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      Zx = ["token"];

    function vx(VV, eV) {
      return -1 !== VV.indexOf(eV)
    }
    const rx = function(VV) {
        return VV.trim()
      },
      kx = function(VV) {
        return VV.replace(/^\$/, "")
      };

    function bx(VV) {
      var eV;
      const xV = [];
      return null !== (eV = JSON.stringify(VV, (function(VV, eV) {
        if ("bigint" == typeof eV) return eV.toString();
        if ("function" != typeof eV && "symbol" != typeof eV) {
          if (eV instanceof Error) return {
            name: eV.name,
            message: eV.message,
            stack: eV.stack
          };
          if (eV && "object" == typeof eV) {
            for (; xV.length > 0 && xV[xV.length - 1] !== this;) xV.pop();
            if (xV.includes(eV)) return "[Circular]";
            xV.push(eV)
          }
          return eV
        }
      }))) && void 0 !== eV ? eV : "null"
    }
    const Ex = Object.prototype,
      Bx = Ex.hasOwnProperty,
      jx = Ex.toString,
      qx = Array.isArray || function(VV) {
        return "[object Array]" === jx.call(VV)
      },
      tx = VV => "function" == typeof VV,
      Fx = VV => VV === Object(VV) && !qx(VV),
      Tx = VV => {
        if (Fx(VV)) {
          for (const eV in VV)
            if (Bx.call(VV, eV)) return !1;
          return !0
        }
        return !1
      },
      Px = VV => void 0 === VV,
      Ax = VV => "[object String]" == jx.call(VV),
      Nx = VV => Ax(VV) && 0 === VV.trim().length,
      Xx = VV => null === VV,
      Mx = VV => Px(VV) || Xx(VV),
      zx = VV => "[object Number]" == jx.call(VV) && VV == VV,
      Gx = VV => zx(VV) && VV > 0,
      Wx = VV => "[object Boolean]" === jx.call(VV),
      Rx = VV => vx(wx, VV),
      gx = VV => vx(Zx, VV);

    function Dx(VV) {
      return null === VV || "object" != typeof VV
    }

    function ix(VV, eV) {
      return {}.toString.call(VV) === `[object ${eV}]`
    }

    function Cx(VV) {
      switch ({}.toString.call(VV)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return ox(VV, Error)
      }
    }

    function ax(VV) {
      return "u" > typeof Event && ox(VV, Event)
    }

    function ox(VV, eV) {
      try {
        return VV instanceof eV
      } catch (VV) {
        return !1
      }
    }
    const cx = [!0, "true", 1, "1", "yes"],
      hx = VV => vx(cx, VV),
      lx = [!1, "false", 0, "0", "no"];

    function Lx(VV, eV, xV, JV, YV, UV, yV) {
      try {
        var pV = VV[UV](yV),
          QV = pV.value
      } catch (VV) {
        return void xV(VV)
      }
      pV.done ? eV(QV) : Promise.resolve(QV).then(JV, YV)
    }

    function fx(VV) {
      return function() {
        var eV = this,
          xV = arguments;
        return new Promise((function(JV, YV) {
          var UV = VV.apply(eV, xV);

          function yV(VV) {
            Lx(UV, JV, YV, yV, pV, "next", VV)
          }

          function pV(VV) {
            Lx(UV, JV, YV, yV, pV, "throw", VV)
          }
          yV(void 0)
        }))
      }
    }
    const mx = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      Kx = new Map,
      Hx = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!VV) return !1;
        const xV = function(VV, eV) {
            let xV = "";
            for (let JV = 0; eV.length > JV; JV++) {
              const VV = eV[JV];
              xV += VV.length + ":" + VV
            }
            return VV.length + ":" + VV + "|" + eV.length + ":" + xV
          }(VV, eV),
          JV = Kx.get(xV);
        if (void 0 !== JV) return JV;
        const YV = VV.toLowerCase(),
          UV = mx.concat(eV).some((VV => -1 !== YV.indexOf(VV.toLowerCase())));
        return 256 > Kx.size || Kx.clear(), Kx.set(xV, UV), UV
      };

    function ux(VV, eV, xV, JV, YV) {
      return eV > xV && (JV.warn("min cannot be greater than max."), eV = xV), zx(VV) ? VV > xV ? (JV.warn(" cannot be  greater than max: " + xV + ". Using max value instead."), xV) : eV > VV ? (JV.warn(" cannot be less than min: " + eV + ". Using min value instead."), eV) : VV : (JV.warn(" must be a number. using max or fallback. max: " + xV + ", fallback: " + YV), ux(null != YV ? YV : xV, eV, xV, JV))
    }
    var sx = class {
      constructor(VV) {
        this._buckets = {}, this._onBucketRateLimited = VV._onBucketRateLimited, this._bucketSize = ux(VV.bucketSize, 0, 100, VV._logger), this._refillRate = ux(VV.refillRate, 0, this._bucketSize, VV._logger), this._refillInterval = ux(VV.refillInterval, 0, 864e5, VV._logger)
      }
      _applyRefill(VV, eV) {
        const xV = Math.floor((eV - VV.lastAccess) / this._refillInterval);
        xV > 0 && (VV.tokens = Math.min(VV.tokens + xV * this._refillRate, this._bucketSize), VV.lastAccess = VV.lastAccess + xV * this._refillInterval)
      }
      consumeRateLimit(VV) {
        var eV;
        const xV = Date.now(),
          JV = String(VV);
        let YV = this._buckets[JV];
        return YV ? this._applyRefill(YV, xV) : (YV = {
          tokens: this._bucketSize,
          lastAccess: xV
        }, this._buckets[JV] = YV), 0 === YV.tokens || (YV.tokens--, 0 === YV.tokens && (null === (eV = this._onBucketRateLimited) || void 0 === eV || eV.call(this, VV)), 0 === YV.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const Sx = "Mobile",
      Ix = "Android",
      dx = "Tablet",
      Ox = "Android Tablet",
      VJ = "iPad",
      eJ = "Apple Watch",
      xJ = "Safari",
      JJ = "BlackBerry",
      YJ = "Samsung Internet",
      UJ = "Chrome",
      yJ = "Chrome iOS",
      pJ = "Internet Explorer",
      QJ = "Internet Explorer Mobile",
      nJ = "Opera",
      wJ = "Microsoft Edge",
      ZJ = "Firefox",
      vJ = "Firefox iOS",
      rJ = "Nintendo",
      kJ = "PlayStation",
      bJ = "Xbox",
      EJ = "Android Mobile",
      BJ = "Mobile Safari",
      jJ = "Windows",
      qJ = "Windows Phone",
      tJ = "Nokia",
      FJ = "Ouya",
      TJ = "Generic " + Sx.toLowerCase(),
      PJ = "Generic " + dx.toLowerCase(),
      AJ = "Konqueror",
      NJ = "Oculus Browser",
      XJ = "Vivaldi",
      MJ = "Yandex",
      zJ = "Whale",
      GJ = "DuckDuckGo",
      WJ = "Pale Moon",
      RJ = "Waterfox",
      gJ = "Brave",
      DJ = "Claude",
      iJ = "Codex",
      CJ = "ChatGPT",
      aJ = "Google Search App",
      oJ = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      cJ = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      hJ = new RegExp(bJ, "i"),
      lJ = new RegExp("PlayStation \\w+", "i"),
      LJ = new RegExp("Nintendo \\w+", "i"),
      fJ = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      mJ = {
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
      KJ = function(VV, eV, xV, JV) {
        eV = eV || "";
        const YV = function(VV) {
          return (null == VV ? void 0 : VV.brave) ? gJ : null
        }(xV);
        return YV || ((null == JV ? void 0 : JV.detectGoogleSearchApp) && vx(VV, "GSA/") ? aJ : vx(VV, " OPR/") && vx(VV, "Mini") ? "Opera Mini" : vx(VV, " OPR/") ? nJ : fJ.test(VV) ? JJ : vx(VV, "IEMobile") || vx(VV, "WPDesktop") ? QJ : vx(VV, "OculusBrowser") ? NJ : vx(VV, "SamsungBrowser") ? YJ : vx(VV, "Edge") || vx(VV, "Edg/") ? wJ : vx(VV, "Vivaldi/") ? XJ : vx(VV, "YaBrowser/") ? MJ : vx(VV, "Whale/") ? zJ : vx(VV, "DuckDuckGo/") || vx(VV, "Ddg/") ? GJ : vx(VV, "Claude/") ? DJ : vx(VV, "Codex/") ? iJ : vx(VV, "ChatGPT/") ? CJ : vx(VV, "FBIOS") ? "Facebook Mobile" : vx(VV, "UCWEB") || vx(VV, "UCBrowser") ? "UC Browser" : vx(VV, "CriOS") ? yJ : vx(VV, "CrMo") || vx(VV, UJ) ? UJ : vx(VV, Ix) && vx(VV, xJ) ? EJ : vx(VV, "FxiOS") ? vJ : vx(VV.toLowerCase(), AJ.toLowerCase()) ? AJ : vx(VV, "Brave/") ? gJ : ((VV, eV) => eV && vx(eV, "Apple") || function(VV) {
          return vx(VV, xJ) && !vx(VV, UJ) && !vx(VV, Ix)
        }(VV))(VV, eV) ? vx(VV, Sx) ? BJ : xJ : vx(VV, "PaleMoon/") ? WJ : vx(VV, "Waterfox/") ? RJ : vx(VV, ZJ) ? ZJ : vx(VV, "MSIE") || vx(VV, "Trident/") ? pJ : vx(VV, "Gecko") ? ZJ : "")
      },
      HJ = {
        [QJ]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [wJ]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [UJ]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [yJ]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [xJ]: [oJ],
        [BJ]: [oJ],
        [nJ]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [ZJ]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [vJ]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [AJ]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [JJ]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), oJ],
        [EJ]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [YJ]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [NJ]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [XJ]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [MJ]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [zJ]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [gJ]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [DJ]: [cJ],
        [iJ]: [cJ],
        [CJ]: [cJ],
        [GJ]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [WJ]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [RJ]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [aJ]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [pJ]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      uJ = function(VV, eV, xV, JV) {
        const YV = KJ(VV, eV, xV, JV),
          UV = HJ[YV];
        if (Px(UV)) return null;
        for (let yV = 0; UV.length > yV; yV++) {
          const eV = VV.match(UV[yV]);
          if (eV) return parseFloat(eV[eV.length - 2])
        }
        return null
      },
      sJ = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), VV => [bJ, VV && VV[1] || ""]],
        [new RegExp(rJ, "i"), [rJ, ""]],
        [new RegExp(kJ, "i"), [kJ, ""]],
        [fJ, [JJ, ""]],
        [new RegExp(jJ, "i"), (VV, eV) => {
          if (/Phone/.test(eV) || /WPDesktop/.test(eV)) return [qJ, ""];
          if (new RegExp(Sx).test(eV) && !/IEMobile\b/.test(eV)) return ["Windows Mobile", ""];
          const xV = /Windows NT ([0-9.]+)/i.exec(eV);
          if (xV && xV[1]) {
            let VV = mJ[xV[1]] || "";
            return /arm/i.test(eV) && (VV = "RT"), [jJ, VV]
          }
          return [jJ, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, VV => VV && VV[3] ? ["iOS", [VV[3], VV[4], VV[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, VV => {
          let eV = "";
          return VV && VV.length >= 3 && (eV = Px(VV[2]) ? VV[3] : VV[2]), ["watchOS", eV]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), VV => VV && VV[2] ? [Ix, [VV[2], VV[3], VV[4] || "0"].join(".")] : [Ix, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, VV => {
          const eV = ["Mac OS X", ""];
          return VV && VV[1] && (eV[1] = [VV[1], VV[2], VV[3] || "0"].join(".")), eV
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      SJ = function(VV) {
        for (let eV = 0; sJ.length > eV; eV++) {
          const [xV, JV] = sJ[eV], YV = xV.exec(VV), UV = YV && (tx(JV) ? JV(YV, VV) : JV);
          if (UV) return UV
        }
        return ["", ""]
      },
      IJ = function(VV) {
        return LJ.test(VV) ? rJ : lJ.test(VV) ? kJ : hJ.test(VV) ? bJ : new RegExp(FJ, "i").test(VV) ? FJ : new RegExp("(Windows Phone|WPDesktop)", "i").test(VV) ? qJ : /iPad/.test(VV) ? VJ : /iPod/.test(VV) ? "iPod Touch" : /iPhone/.test(VV) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(VV) ? eJ : fJ.test(VV) ? JJ : /(kobo)\s(ereader|touch)/i.test(VV) ? "Kobo" : new RegExp(tJ, "i").test(VV) ? tJ : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(VV) || /(kf[a-z]+)( bui|\)).+silk\//i.test(VV) ? "Kindle Fire" : /(Android|ZTE)/i.test(VV) ? new RegExp(Sx).test(VV) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(VV) || /pixel[\daxl ]{1,6}/i.test(VV) && !/pixel c/i.test(VV) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(VV) || /lmy47v/i.test(VV) && !/QTAQZ3/i.test(VV) ? Ix : Ox : new RegExp("(pda|Mobile)", "i").test(VV) ? TJ : new RegExp(dx, "i").test(VV) && !new RegExp("Tablet pc", "i").test(VV) ? PJ : ""
      },
      dJ = function(VV, eV) {
        var xV;
        const JV = IJ(VV);
        return JV === VJ || JV === Ox || "Kobo" === JV || "Kindle Fire" === JV || JV === PJ ? dx : JV === rJ || JV === bJ || JV === kJ || JV === FJ ? "Console" : JV === eJ ? "Wearable" : JV ? Sx : "Android" === (null == eV ? void 0 : eV.userAgentDataPlatform) && (null !== (xV = null == eV ? void 0 : eV.maxTouchPoints) && void 0 !== xV ? xV : 0) > 0 ? 600 > Math.min(null !== (YV = null == eV ? void 0 : eV.screenWidth) && void 0 !== YV ? YV : 0, null !== (UV = null == eV ? void 0 : eV.screenHeight) && void 0 !== UV ? UV : 0) / (null !== (yV = null == eV ? void 0 : eV.devicePixelRatio) && void 0 !== yV ? yV : 1) ? Sx : dx : "Desktop";
        var YV, UV, yV
      },
      OJ = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      VY = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", OJ],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", OJ],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", OJ],
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
      eY = "[Truncated]",
      xY = "[Unserializable]";

    function JY(VV) {
      let eV = "";
      for (let xV = 0; VV.length > xV; xV++) {
        const JV = VV.charCodeAt(xV);
        if (55296 > JV || JV > 56319) eV += 56320 > JV || JV > 57343 ? VV[xV] : "\ufffd";
        else {
          const JV = VV.charCodeAt(xV + 1);
          56320 > JV || JV > 57343 ? eV += "\ufffd" : (eV += VV[xV] + VV[xV + 1], xV++)
        }
      }
      return eV
    }

    function YY(VV, eV) {
      if (!eV) return VV;
      let xV = [];
      try {
        xV = Object.keys(eV)
      } catch (VV) {
        xV = []
      }
      for (const JV of xV) {
        let xV;
        try {
          xV = eV[JV]
        } catch (VV) {
          xV = xY
        }
        Object.defineProperty(VV, JV, {
          value: xV,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return VV
    }
    Date, Date;
    const UY = 3e5;
    var yY = class {
      record(VV) {
        if ("too-large" === VV.kind) return;
        if ("retry-later" !== VV.kind) return void this.reset();
        if (!VV.retryAfterMs) return;
        const eV = this.isOpen(),
          xV = Date.now(),
          JV = Math.min(VV.retryAfterMs, UY);
        if (!eV) return this._installedAt = xV, void(this._until = xV + JV);
        this._until = Math.max(this._until, Math.min(xV + JV, this._installedAt + UY))
      }
      remainingMs() {
        const VV = Date.now();
        if (this._installedAt - 5e3 > VV) return this.reset(), 0;
        const eV = Math.min(UY, Math.max(0, this._until - VV));
        return 0 === eV && this.reset(), eV
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
    const pY = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function QY(VV, eV) {
      return "string" == typeof(xV = VV) && pY.test(xV) ? VV : eV();
      var xV
    }

    function nY(VV, eV) {
      const xV = new Error(eV);
      try {
        Object.defineProperty(xV, "name", {
          value: VV,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (VV) {}
      return xV
    }

    function wY(VV) {
      return VV ? VV.split("#")[0] : VV
    }

    function ZY(VV) {
      try {
        return VV()
      } catch (VV) {
        return
      }
    }

    function vY(VV, eV) {
      const xV = setTimeout(VV, eV);
      return null != xV && xV.unref && (null == xV || xV.unref()), xV
    }

    function rY(VV, eV, xV) {
      return kY.apply(this, arguments)
    }

    function kY() {
      return (kY = fx((function*(VV, eV, xV) {
        let JV;
        try {
          return yield Promise.race([VV, new Promise(((VV, YV) => {
            JV = vY((() => {
              try {
                null == xV || xV(), VV()
              } catch (VV) {
                YV(VV)
              }
            }), eV)
          }))])
        } finally {
          clearTimeout(JV)
        }
      }))).apply(this, arguments)
    }

    function bY(VV) {
      return bY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
        return typeof VV
      } : function(VV) {
        return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
      }, bY(VV)
    }

    function EY(VV, eV, xV) {
      return (eV = function(VV) {
        var eV = function(VV) {
          if ("object" != bY(VV) || !VV) return VV;
          var eV = VV[Symbol.toPrimitive];
          if (void 0 !== eV) {
            var xV = eV.call(VV, "string");
            if ("object" != bY(xV)) return xV;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(VV)
        }(VV);
        return "symbol" == bY(eV) ? eV : eV + ""
      }(eV)) in VV ? Object.defineProperty(VV, eV, {
        value: xV,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : VV[eV] = xV, VV
    }

    function BY(VV, eV) {
      var xV = Object.keys(VV);
      if (Object.getOwnPropertySymbols) {
        var JV = Object.getOwnPropertySymbols(VV);
        eV && (JV = JV.filter((function(eV) {
          return Object.getOwnPropertyDescriptor(VV, eV).enumerable
        }))), xV.push.apply(xV, JV)
      }
      return xV
    }

    function jY(VV) {
      for (var eV = 1; arguments.length > eV; eV++) {
        var xV = null != arguments[eV] ? arguments[eV] : {};
        eV % 2 ? BY(Object(xV), !0).forEach((function(eV) {
          EY(VV, eV, xV[eV])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(xV)) : BY(Object(xV)).forEach((function(eV) {
          Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(xV, eV))
        }))
      }
      return VV
    }
    let qY, tY, FY, TY;

    function PY(VV) {
      var eV;
      const xV = globalThis._posthogChunkIds,
        JV = globalThis._debugIds;
      if (!xV && !JV) return;
      const YV = xV ? Object.keys(xV) : [],
        UV = JV ? Object.keys(JV) : [];
      if (TY && AY(xV, YV, tY) && AY(JV, UV, FY)) return TY;
      tY = xV ? jY({}, xV) : void 0, FY = JV ? jY({}, JV) : void 0, TY = {}, null !== (eV = qY) && void 0 !== eV || (qY = {});
      const yV = (eV, xV) => {
        for (const YV of eV) {
          const eV = xV[YV];
          if (!eV) continue;
          const UV = null == qY ? void 0 : qY[YV];
          if (UV) {
            TY[UV] = eV;
            continue
          }
          const yV = VV(YV);
          for (let VV = yV.length - 1; VV >= 0; VV--) {
            var JV;
            const xV = null === (JV = yV[VV]) || void 0 === JV ? void 0 : JV.filename;
            if (xV) {
              TY[xV] = eV, qY[YV] = xV;
              break
            }
          }
        }
      };
      return JV && yV(UV, JV), xV && yV(YV, xV), TY
    }

    function AY(VV, eV, xV) {
      return VV && xV ? eV.length === Object.keys(xV).length && eV.every((eV => VV[eV] === xV[eV])) : VV === xV
    }
    var NY = class {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = VV, this.stackParser = eV, this.modifiers = xV
      }
      buildFromUnknown(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = eV && eV.mechanism || {
            handled: !0,
            type: "generic"
          },
          JV = this.buildCoercingContext(xV, eV, 0).apply(VV),
          YV = this.buildParsingContext(eV),
          UV = this.parseStacktrace(JV, YV);
        return {
          $exception_list: this.convertToExceptionList(UV, xV),
          $exception_level: "error"
        }
      }
      modifyFrames(VV) {
        var eV = this;
        return fx((function*() {
          for (const xV of VV) xV.stacktrace && xV.stacktrace.frames && qx(xV.stacktrace.frames) && (xV.stacktrace.frames = yield eV.applyModifiers(xV.stacktrace.frames));
          return VV
        }))()
      }
      coerceFallback(VV) {
        var eV;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (eV = VV.syntheticException) || void 0 === eV ? void 0 : eV.stack,
          synthetic: !0
        }
      }
      parseStacktrace(VV, eV) {
        var xV;
        let JV, YV;
        if (null != VV.cause && (JV = this.parseStacktrace(VV.cause, eV)), "" != VV.stack && null != VV.stack) try {
          YV = this.applyChunkIds(this.stackParser(VV.stack, VV.synthetic ? eV.skipFirstLines : 0), eV.chunkIdMap)
        } catch (VV) {}
        return jY(jY({}, VV), {}, {
          cause: JV,
          stack: YV,
          errors: null === (xV = VV.errors) || void 0 === xV ? void 0 : xV.map((VV => this.parseStacktrace(VV, eV)))
        })
      }
      applyChunkIds(VV, eV) {
        return VV.map((VV => (VV.filename && eV && (VV.chunk_id = eV[VV.filename]), VV)))
      }
      applyCoercers(VV, eV) {
        for (const xV of this.coercers)
          if (xV.match(VV)) return xV.coerce(VV, eV);
        return this.coerceFallback(eV)
      }
      applyModifiers(VV) {
        var eV = this;
        return fx((function*() {
          let xV = VV;
          for (const VV of eV.modifiers) xV = yield VV(xV);
          return xV
        }))()
      }
      convertToExceptionList(VV, eV) {
        const xV = [],
          JV = (VV, YV, UV) => {
            var yV;
            const pV = xV.length,
              QV = void 0 === YV ? jY(jY({
                type: "string" == typeof eV.type && eV.type.length > 0 ? eV.type : "generic"
              }, "boolean" == typeof eV.handled ? {
                handled: eV.handled
              } : void 0 === eV.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof eV.synthetic ? eV.synthetic : VV.synthetic,
                exception_id: pV
              }) : {
                type: "chained",
                source: UV,
                synthetic: VV.synthetic,
                exception_id: pV,
                parent_id: YV
              },
              nV = {
                type: VV.type,
                value: VV.value,
                mechanism: QV
              };
            VV.stack && (nV.stacktrace = {
              type: "raw",
              frames: VV.stack
            }), xV.push(nV), VV.cause && JV(VV.cause, pV, "cause");
            for (const eV of null !== (yV = VV.errors) && void 0 !== yV ? yV : []) JV(eV, pV, "member")
          };
        return JV(VV), xV
      }
      buildParsingContext(VV) {
        var eV;
        return {
          chunkIdMap: PY(this.stackParser),
          skipFirstLines: null !== (eV = VV.skipFirstLines) && void 0 !== eV ? eV : 1
        }
      }
      getAggregateErrors(VV) {
        try {
          if (Cx(VV)) {
            let xV = Object.getPrototypeOf(VV);
            for (let JV = 0; xV && 100 > JV; JV++) {
              var eV;
              const JV = null === (eV = Object.getOwnPropertyDescriptor(xV, "constructor")) || void 0 === eV ? void 0 : eV.value;
              if ("function" == typeof JV && "AggregateError" === JV.name) {
                const eV = VV.errors;
                return qx(eV) ? eV : void 0
              }
              xV = Object.getPrototypeOf(xV)
            }
          }
        } catch (VV) {}
      }
      buildCoercingContext(VV, eV) {
        var xV = this;
        let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YV = 0,
          UV = 0,
          yV = !1;
        const pV = new Set,
          QV = [],
          nV = {},
          wV = function(VV, eV) {
            let JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const wV = ZV(eV, JV),
              vV = wV.apply;
            if (wV.apply = eV => {
                QV.push(VV);
                try {
                  return vV(eV)
                } finally {
                  QV.pop()
                }
              }, JV > 4 || JV > 0 && -1 !== QV.indexOf(VV)) return xV.coerceFallback(wV);
            const rV = "object" == typeof VV && null !== VV || "function" == typeof VV;
            if (0 === JV && YV >= 50 || rV && pV.has(VV)) return;
            rV && pV.add(VV), 0 === JV && YV++;
            const kV = xV.getAggregateErrors(VV);
            let bV, EV;
            yV || (yV = !!kV);
            try {
              if (bV = xV.applyCoercers(VV, wV), !bV) throw nV
            } catch (VV) {
              if (VV === nV) return void(0 === JV && YV--);
              if (!yV) throw VV;
              bV = xV.coerceFallback(wV)
            }
            if (!kV || YV >= 50) return bV;
            try {
              EV = kV.length
            } catch (VV) {
              return bV
            }
            if (!Number.isInteger(EV) || 0 > EV || EV > 4294967295) return bV;
            const BV = [];
            for (let yV = 0; 50 > YV && 1e3 > UV && EV > yV; yV++) {
              let JV;
              UV++;
              try {
                JV = wV.next(kV[yV])
              } catch (VV) {
                YV++, JV = xV.coerceFallback(ZV(eV + 1))
              }
              JV && BV.push(JV)
            }
            return jY(jY({}, bV), {}, {
              errors: BV
            })
          },
          ZV = function(xV) {
            let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return jY(jY({}, eV), {}, {
              syntheticException: 0 == xV ? eV.syntheticException : void 0,
              mechanism: 0 == xV ? VV : {},
              apply(VV) {
                const eV = wV(VV, xV, JV + 1);
                if (!eV) throw nV;
                return eV
              },
              next: VV => wV(VV, xV + 1)
            })
          },
          vV = ZV(JV);
        return jY(jY({}, vV), {}, {
          apply: VV => {
            var eV;
            return null !== (eV = wV(VV, JV)) && void 0 !== eV ? eV : this.coerceFallback(vV)
          }
        })
      }
    };
    const XY = /^([a-z][a-z0-9.+-]+):/i,
      MY = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function zY(VV) {
      if (!VV || "<anonymous>" === VV) return !1;
      const eV = XY.exec(VV);
      return !eV || MY.includes(eV[1].toLowerCase())
    }

    function GY(VV, eV, xV, JV, YV) {
      const UV = {
        platform: VV,
        filename: eV,
        function: "<anonymous>" === xV ? "?" : xV,
        in_app: zY(eV)
      };
      return Px(JV) || (UV.lineno = JV), Px(YV) || (UV.colno = YV), UV
    }
    const WY = (VV, eV) => {
        const xV = -1 !== VV.indexOf("safari-extension"),
          JV = -1 !== VV.indexOf("safari-web-extension");
        return xV || JV ? [-1 !== VV.indexOf("@") ? VV.split("@")[0] : "?", xV ? `safari-extension:${eV}` : `safari-web-extension:${eV}`] : [VV, eV]
      },
      RY = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      gY = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      DY = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      iY = (VV, eV) => {
        const xV = RY.exec(VV);
        if (xV) {
          const [, VV, JV, YV] = xV;
          return GY(eV, VV, "?", +JV, +YV)
        }
        const JV = gY.exec(VV);
        if (JV) {
          if (JV[2] && 0 === JV[2].indexOf("eval")) {
            const VV = DY.exec(JV[2]);
            VV && (JV[2] = VV[1], JV[3] = VV[2], JV[4] = VV[3])
          }
          const [VV, xV] = WY(JV[1] || "?", JV[2]);
          return GY(eV, xV, VV, JV[3] ? +JV[3] : void 0, JV[4] ? +JV[4] : void 0)
        }
      },
      CY = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      aY = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      oY = (VV, eV) => {
        const xV = CY.exec(VV);
        if (xV) {
          if (xV[3] && xV[3].indexOf(" > eval") > -1) {
            const VV = aY.exec(xV[3]);
            VV && (xV[1] = xV[1] || "eval", xV[3] = VV[1], xV[4] = VV[2], xV[5] = "")
          }
          let VV = xV[3],
            JV = xV[1] || "?";
          return [JV, VV] = WY(JV, VV), GY(eV, VV, JV, xV[4] ? +xV[4] : void 0, xV[5] ? +xV[5] : void 0)
        }
      },
      cY = /\(error: (.*)\)/;

    function hY(VV, eV) {
      return VV.filename === eV.filename && VV.function === eV.function && VV.module === eV.module && VV.lineno === eV.lineno && VV.colno === eV.colno
    }

    function lY(VV) {
      for (let eV = 1; 10 >= eV; eV++) {
        const xV = VV.length - 2 * eV;
        if (0 > xV) break;
        let JV = !0;
        for (let YV = 0; eV > YV; YV++)
          if (!hY(VV[xV + YV], VV[xV + eV + YV])) {
            JV = !1;
            break
          } if (JV) {
          for (let JV = 0; eV > JV; JV++) VV[xV + JV] = VV[xV + eV + JV];
          return VV.length = xV + eV, {
            start: xV,
            length: eV
          }
        }
      }
    }

    function LY(VV, eV) {
      const xV = eV.start + eV.length,
        JV = mY(VV, eV);
      JV && VV.splice(xV + JV === VV.length ? xV : eV.start, JV)
    }

    function fY(VV, eV) {
      let xV = eV.start;
      for (; xV > 0 && hY(VV[xV - 1], VV[xV - 1 + eV.length]);) xV--;
      return eV.start - xV
    }

    function mY(VV, eV) {
      const xV = eV.start + eV.length;
      let JV = xV;
      for (; VV.length > JV && hY(VV[JV], VV[JV - eV.length]);) JV++;
      return JV - xV
    }

    function KY(VV, eV) {
      const xV = eV[0];
      let JV = VV.length - (xV ? fY(VV, xV) : 0);
      for (const YV of eV) JV -= mY(VV, YV);
      return JV
    }

    function HY(VV, eV, xV) {
      for (let JV = 0; VV.length > JV; JV++) {
        const YV = VV[(eV + JV) % VV.length],
          UV = VV[(xV + JV) % VV.length];
        if (YV !== UV) return UV > YV
      }
      return !1
    }
    var uY = class {
        match(VV) {
          return this.isDOMException(VV) || this.isDOMError(VV)
        }
        coerce(VV, eV) {
          const xV = Ax(VV.stack);
          return {
            type: this.getType(VV),
            value: this.getValue(VV),
            stack: xV ? VV.stack : void 0,
            cause: VV.cause ? eV.next(VV.cause) : void 0,
            synthetic: !1
          }
        }
        getType(VV) {
          return this.isDOMError(VV) ? "DOMError" : "DOMException"
        }
        getValue(VV) {
          const eV = VV.name || (this.isDOMError(VV) ? "DOMError" : "DOMException");
          return VV.message ? `${eV}: ${VV.message}` : eV
        }
        isDOMException(VV) {
          return ix(VV, "DOMException")
        }
        isDOMError(VV) {
          return ix(VV, "DOMError")
        }
      },
      sY = class {
        match(VV) {
          return Cx(VV)
        }
        coerce(VV, eV) {
          var xV;
          const JV = this.getStack(VV),
            YV = void 0 === JV ? null === (xV = eV.syntheticException) || void 0 === xV ? void 0 : xV.stack : void 0,
            UV = !!YV;
          return {
            type: this.getType(VV),
            value: this.getMessage(VV, eV),
            stack: null != JV ? JV : YV,
            cause: VV.cause ? eV.next(VV.cause) : void 0,
            synthetic: UV
          }
        }
        getType(VV) {
          return VV.name || VV.constructor.name
        }
        getMessage(VV, eV) {
          const xV = VV.message;
          return String(xV.error && "string" == typeof xV.error.message ? xV.error.message : xV)
        }
        getStack(VV) {
          try {
            const eV = VV.stacktrace;
            if ("string" == typeof eV && eV.length > 0) return eV;
            const xV = VV.stack;
            return "string" == typeof xV && xV.length > 0 ? xV : void 0
          } catch (VV) {
            return
          }
        }
      },
      SY = class {
        match(VV) {
          return !!ix(VV, "ErrorEvent") && (null != VV.error || this._hasUsableMessage(VV))
        }
        coerce(VV, eV) {
          var xV;
          if (null != VV.error) return eV.apply(VV.error);
          const JV = eV.apply(VV.message);
          return jY(jY({}, JV), {}, {
            stack: null !== (xV = this._buildLocationStack(VV)) && void 0 !== xV ? xV : JV.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(VV) {
          return Ax(VV.message) && VV.message.length > 0
        }
        _buildLocationStack(VV) {
          var eV, xV;
          const JV = VV,
            YV = null !== (eV = JV.lineno) && void 0 !== eV ? eV : 0,
            UV = null !== (xV = JV.colno) && void 0 !== xV ? xV : 0;
          if (Ax(JV.filename) && 0 !== JV.filename.length && 0 !== YV) return `Error\n    at ${JV.filename}:${YV}:${UV}`
        }
      };
    const IY = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var dY = class {
      match(VV) {
        return "string" == typeof VV
      }
      coerce(VV, eV) {
        var xV;
        const [JV, YV] = this.getInfos(VV);
        return {
          type: null != JV ? JV : "Error",
          value: null != YV ? YV : VV,
          stack: null === (xV = eV.syntheticException) || void 0 === xV ? void 0 : xV.stack,
          synthetic: !0
        }
      }
      getInfos(VV) {
        let eV = "Error",
          xV = VV;
        const JV = VV.match(IY);
        return JV && (eV = JV[1], xV = JV[2]), [eV, xV]
      }
    };
    const OY = ["fatal", "error", "warning", "log", "info", "debug"];

    function VU(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const xV = Object.keys(VV);
      if (xV.sort(), !xV.length) return "[object has no keys]";
      for (let JV = xV.length; JV > 0; JV--) {
        const VV = xV.slice(0, JV).join(", ");
        if (eV >= VV.length) return JV === xV.length ? VV : VV.length > eV ? `${VV.slice(0,eV)}...` : VV
      }
      return ""
    }
    var eU = class {
        match(VV) {
          return "object" == typeof VV && null !== VV
        }
        coerce(VV, eV) {
          var xV, JV;
          const YV = this.getErrorPropertyFromObject(VV);
          return YV ? eV.apply(YV) : {
            type: this.getType(VV),
            value: this.getValue(VV),
            stack: null !== (xV = this.getStack(VV)) && void 0 !== xV ? xV : null === (JV = eV.syntheticException) || void 0 === JV ? void 0 : JV.stack,
            level: this.isSeverityLevel(VV.level) ? VV.level : "error",
            synthetic: !0
          }
        }
        getType(VV) {
          if (ax(VV)) return VV.constructor.name;
          const eV = "name" in VV ? VV.name : void 0;
          return Ax(eV) && !Nx(eV) ? eV : "Error"
        }
        getValue(VV) {
          if ("name" in VV && "string" == typeof VV.name) {
            let eV = `'${VV.name}' captured as exception`;
            return "message" in VV && "string" == typeof VV.message && (eV += ` with message: '${VV.message}'`), eV
          }
          if ("message" in VV && "string" == typeof VV.message) return VV.message;
          const eV = this.getObjectClassName(VV);
          return `${eV&&"Object"!==eV?`'${eV}'`:"Object"} captured as exception with keys: ${VU(VV)}`
        }
        isSeverityLevel(VV) {
          return Ax(VV) && !Nx(VV) && OY.indexOf(VV) >= 0
        }
        getStack(VV) {
          try {
            return Ax(VV.stacktrace) && VV.stacktrace.length > 0 ? VV.stacktrace : Ax(VV.stack) && VV.stack.length > 0 ? VV.stack : void 0
          } catch (VV) {
            return
          }
        }
        getErrorPropertyFromObject(VV) {
          for (const eV in VV)
            if ({}.hasOwnProperty.call(VV, eV)) {
              const xV = VV[eV];
              if (Cx(xV)) return xV
            }
        }
        getObjectClassName(VV) {
          try {
            const eV = Object.getPrototypeOf(VV);
            return eV ? eV.constructor.name : void 0
          } catch (VV) {
            return
          }
        }
      },
      xU = class {
        match(VV) {
          return ax(VV)
        }
        coerce(VV, eV) {
          var xV;
          const JV = VV.constructor.name;
          return {
            type: JV,
            value: `${JV} captured as exception with keys: ${VU(VV)}`,
            stack: null === (xV = eV.syntheticException) || void 0 === xV ? void 0 : xV.stack,
            synthetic: !0
          }
        }
      },
      JU = class {
        match(VV) {
          return Dx(VV)
        }
        coerce(VV, eV) {
          var xV;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(VV)}`,
            stack: null === (xV = eV.syntheticException) || void 0 === xV ? void 0 : xV.stack,
            synthetic: !0
          }
        }
      },
      YU = class {
        match(VV) {
          return ix(VV, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(VV)
        }
        isCustomEventWrappingRejection(VV) {
          if (!ax(VV)) return !1;
          try {
            const eV = VV.detail;
            return null != eV && "object" == typeof eV && "reason" in eV
          } catch (VV) {
            return !1
          }
        }
        coerce(VV, eV) {
          var xV;
          const JV = this.getUnhandledRejectionReason(VV);
          return Dx(JV) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(JV)}`,
            stack: null === (xV = eV.syntheticException) || void 0 === xV ? void 0 : xV.stack,
            synthetic: !0
          } : eV.apply(JV)
        }
        getUnhandledRejectionReason(VV) {
          try {
            if ("reason" in VV) return VV.reason;
            if ("detail" in VV && null != VV.detail && "object" == typeof VV.detail && "reason" in VV.detail) return VV.detail.reason
          } catch (VV) {}
          return VV
        }
      };
    const UU = "$message",
      yU = "$timestamp",
      pU = new Set([UU, yU]),
      QU = {
        enabled: !0,
        max_bytes: 32768
      };

    function nU(VV) {
      var eV;
      return VV ? {
        enabled: null !== (eV = VV.enabled) && void 0 !== eV ? eV : QU.enabled,
        max_bytes: ZU(VV.max_bytes, QU.max_bytes)
      } : jY({}, QU)
    }
    var wU = class {
      constructor(VV) {
        this._entries = [], this._totalBytes = 0, this._config = nU(VV)
      }
      setConfig(VV) {
        this._config = nU(VV), this._trimToMaxBytes()
      }
      add(VV) {
        const eV = function(VV) {
          let eV;
          try {
            eV = bx(VV)
          } catch (VV) {
            return
          }
          try {
            const VV = JSON.parse(eV);
            if (!Fx(VV)) return;
            const xV = VV,
              JV = xV[UU],
              YV = xV[yU];
            if (!Ax(JV) || 0 === JV.trim().length) return;
            if (!Ax(YV) && !zx(YV)) return;
            return {
              step: xV,
              json: eV
            }
          } catch (VV) {
            return
          }
        }(VV);
        if (!eV) return;
        const xV = function(VV) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(VV).length;
          const eV = encodeURIComponent(VV);
          let xV = 0;
          for (let JV = 0; eV.length > JV; JV++) "%" === eV[JV] ? (xV += 1, JV += 2) : xV += 1;
          return xV
        }(eV.json);
        xV > this._config.max_bytes || (this._entries.push({
          step: eV.step,
          bytes: xV
        }), this._totalBytes += xV, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((VV => VV.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const VV = this._entries.shift();
          VV && (this._totalBytes -= VV.bytes)
        }
      }
    };

    function ZU(VV, eV) {
      if (!zx(VV) || 1 / 0 === VV || -1 / 0 === VV) return eV;
      const xV = Math.floor(VV);
      return 0 > xV ? eV : xV
    }
    const vU = VV => {
      if ("string" != typeof VV) return VV;
      try {
        return JSON.parse(VV)
      } catch (YV) {
        return VV
      }
    };

    function rU(VV) {
      return "string" == typeof VV || VV
    }

    function kU(VV) {
      return "string" == typeof VV ? VV : void 0
    }
    const bU = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      EU = "NativeGzipValidationError",
      BU = VV => VV.length >= 2 && 31 === VV[0] && 139 === VV[1],
      jU = (VV, eV) => VV === nx.GZipJS || eV === nx.GZipJS || "gzip" === eV,
      qU = VV => !(!VV || "object" != typeof VV) && "NotReadableError" === ("name" in VV ? String(VV.name) : "");
    let tU;
    const FU = VV => {
        throw nY(EU, `Native gzip produced invalid output: ${VV}`)
      },
      TU = (PU = fx((function*(VV, eV) {
        18 > VV.size && FU("too-short");
        const xV = new Uint8Array(yield VV.slice(0, 10).arrayBuffer());
        BU(xV) && 8 === xV[2] || FU("invalid-header");
        const JV = new DataView(yield VV.slice(VV.size - 8).arrayBuffer());
        JV.getUint32(0, !0) !== (VV => {
          const eV = (() => {
            if (tU) return tU;
            tU = [];
            for (let VV = 0; 256 > VV; VV++) {
              let eV = VV;
              for (let VV = 0; 8 > VV; VV++) eV = 1 & eV ? 3988292384 ^ eV >>> 1 : eV >>> 1;
              tU[VV] = eV >>> 0
            }
            return tU
          })();
          let xV = 4294967295;
          for (let JV = 0; VV.length > JV; JV++) xV = eV[255 & (xV ^ VV[JV])] ^ xV >>> 8;
          return (4294967295 ^ xV) >>> 0
        })(eV) && FU("invalid-crc");
        const YV = eV.length >>> 0;
        JV.getUint32(4, !0) !== YV && FU("invalid-size")
      })), function(VV, eV) {
        return PU.apply(this, arguments)
      });
    var PU;

    function AU() {
      return AU = fx((function*(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const eV = (new TextEncoder).encode(VV),
            xV = new globalThis.CompressionStream("gzip"),
            YV = xV.writable.getWriter(),
            UV = YV.write(eV).then((() => YV.close())).catch((JV = fx((function*(VV) {
              try {
                yield YV.abort(VV)
              } catch (VV) {}
              throw VV
            })), function(VV) {
              return JV.apply(this, arguments)
            })),
            yV = new Response(xV.readable).blob(),
            [pV] = yield Promise.all([yV, UV]);
          return yield TU(pV, eV), pV
        } catch (VV) {
          if (null == xV ? void 0 : xV.rethrow) throw VV;
          return eV && console.error("Failed to gzip compress data", VV), null
        }
        var JV
      })), AU.apply(this, arguments)
    }

    function NU(VV, eV) {
      if (null == VV) return {};
      var xV, JV, YV = function(VV, eV) {
        if (null == VV) return {};
        var xV = {};
        for (var JV in VV)
          if ({}.hasOwnProperty.call(VV, JV)) {
            if (eV.includes(JV)) continue;
            xV[JV] = VV[JV]
          } return xV
      }(VV, eV);
      if (Object.getOwnPropertySymbols) {
        var UV = Object.getOwnPropertySymbols(VV);
        for (JV = 0; UV.length > JV; JV++) eV.includes(xV = UV[JV]) || {}.propertyIsEnumerable.call(VV, xV) && (YV[xV] = VV[xV])
      }
      return YV
    }
    const XU = "[redacted]",
      MU = /^[A-Za-z0-9+/\n\r]+=*$/,
      zU = /^[A-Za-z0-9_-]+={0,2}$/,
      GU = /[-_]/,
      WU = /^data:[^,\s]*;base64,/i,
      RU = /^[A-Za-z0-9+/_-]+={0,2}$/,
      gU = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      DU = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      iU = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      CU = /[\s<>"]/,
      aU = new RegExp(iU.source, "i"),
      oU = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      cU = new RegExp(`^${oU.source}`, "i"),
      hU = new RegExp(oU.source, "gi"),
      lU = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      LU = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      fU = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      mU = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      KU = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      HU = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      uU = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      sU = /\b\d(?:[ ./-]?\d){12,}\b/g,
      SU = /\d+/g,
      IU = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      dU = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function OU(VV) {
      return function(VV) {
        return DU.test(VV)
      }(VV) || lU.test(VV) || LU.test(VV)
    }

    function Vy(VV) {
      return VV.split("&", 129).length > 128
    }

    function ey(VV, eV, xV) {
      return OU(VV) || eV.includes(";") && function(VV) {
        return VV.split(";").some((VV => OU(VV.split("=", 1)[0])))
      }(eV) ? XU : aU.test(eV) ? xV ? py(eV, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : XU : eV
    }

    function xy(VV, eV) {
      const xV = new URLSearchParams;
      let JV = !1,
        YV = !1;
      for (const [UV, yV] of new URLSearchParams(VV)) {
        const VV = Qy(UV),
          pV = Qy(yV);
        JV || (JV = VV !== UV || pV !== yV);
        const QV = ey(VV, pV, eV);
        JV || (JV = QV !== pV), YV = OU(VV) || QV !== pV, xV.append(VV, QV)
      }
      return {
        changed: JV,
        lastFieldSensitive: YV,
        serialized: xV.toString()
      }
    }

    function Jy(VV, eV) {
      if (!VV.includes("=")) return {
        value: Yy(VV, eV),
        lastFieldSensitive: !1
      };
      const xV = xy(VV, eV);
      return {
        value: xV.changed ? xV.serialized : VV,
        lastFieldSensitive: xV.lastFieldSensitive
      }
    }

    function Yy(VV, eV) {
      return eV ? py(VV, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : aU.test(VV) ? XU : VV
    }

    function Uy(VV, eV, xV) {
      return "#" === VV ? !eV.fragment && (eV.fragment = !0) : "?" === VV && (eV.fragment ? "=" !== xV && !eV.fragmentQuery && (eV.fragmentQuery = !0) : !eV.query && (eV.query = !0))
    }

    function yy(VV, eV) {
      var xV;
      if (VV.length > 8192 && cU.test(VV)) return XU;
      const {
        address: JV,
        suffix: YV
      } = eV.stripPunctuation ? function(VV) {
        let eV = VV.length;
        for (; eV > 0 && ".,;:!?)]}'".includes(VV[eV - 1]);) eV--;
        return {
          address: VV.slice(0, eV),
          suffix: VV.slice(eV)
        }
      }(VV) : {
        address: VV,
        suffix: ""
      };
      let UV;
      try {
        UV = new URL(JV)
      } catch (VV) {
        return XU + YV
      }
      const yV = UV.search.slice(1),
        pV = "" !== UV.hash,
        QV = function(VV) {
          const eV = VV.slice(1),
            xV = eV.indexOf("?");
          return 0 > xV ? {
            head: eV,
            tail: null
          } : {
            head: eV.slice(0, xV),
            tail: eV.slice(xV + 1)
          }
        }(UV.hash);
      if (Vy(yV) || Vy(QV.head) || Vy(null !== (xV = QV.tail) && void 0 !== xV ? xV : "")) return XU + YV;
      let nV = !1;
      (UV.username || UV.password) && (UV.username = XU, UV.password = "", nV = !0);
      const wV = xy(yV, eV.allowNestedUrls);
      wV.changed && (UV.search = wV.serialized, nV = !0);
      const ZV = Jy(QV.head, eV.allowNestedUrls),
        vV = null === QV.tail ? null : (rV = QV.tail, ZV.lastFieldSensitive ? {
          value: "" === rV ? "" : XU,
          lastFieldSensitive: !0
        } : Jy(rV, eV.allowNestedUrls));
      var rV;
      const kV = null === vV ? ZV.value : `${ZV.value}?${vV.value}`;
      kV !== UV.hash.slice(1) && (UV.hash = kV, nV = !0);
      const bV = pV ? null != vV ? vV : ZV : wV;
      return (nV ? Qy(UV.toString()) : JV) + (bV.lastFieldSensitive ? "" : YV)
    }

    function py(VV, eV) {
      return VV.replace(iU, (xV => function(VV, eV) {
        const xV = function(VV) {
          if (!VV.includes("://")) return [];
          const eV = [...VV.matchAll(hU)].map((VV => VV.index)),
            xV = [],
            JV = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let YV = 0,
            UV = !1,
            yV = "";
          for (let pV = 0; VV.length > pV && eV.length > YV; pV++) {
            eV[YV] === pV && (pV > 0 && "=" !== yV && xV.push(pV), YV++);
            const QV = VV[pV];
            Uy(QV, JV, yV) ? (yV = QV, UV = !0) : UV && "=&".includes(QV) && (yV = QV)
          }
          return xV
        }(VV);
        if (0 === xV.length) return yy(VV, eV);
        let JV = "",
          YV = 0;
        for (const UV of xV) JV += yy(VV.slice(YV, UV), jY(jY({}, eV), {}, {
          stripPunctuation: !1
        })), YV = UV;
        return JV + yy(VV.slice(YV), eV)
      }(xV, jY(jY({}, eV), {}, {
        stripPunctuation: eV.stripPunctuation && xV.length !== VV.length
      }))))
    }

    function Qy(VV) {
      return VV.replace(gU, XU)
    }

    function ny(VV) {
      let eV = 0,
        xV = !1;
      for (let JV = VV.length - 1; JV >= 0; JV--) {
        let YV = VV.charCodeAt(JV) - 48;
        if (0 > YV || YV > 9) return !1;
        xV && (YV *= 2, YV > 9 && (YV -= 9)), eV += YV, xV = !xV
      }
      return eV % 10 == 0
    }

    function wy(VV) {
      const eV = [];
      for (let UV = SU.exec(VV); null !== UV; UV = SU.exec(VV)) eV.push({
        digits: UV[0],
        start: UV.index,
        end: UV.index + UV[0].length
      });
      let xV = "",
        JV = 0,
        YV = 0;
      for (; eV.length > YV;) {
        let UV = "",
          yV = -1;
        for (let VV = YV; eV.length > VV && (UV += eV[VV].digits, 19 >= UV.length); VV++) UV.length >= 13 && ny(UV) && (yV = VV);
        0 > yV ? YV++ : (xV += VV.slice(JV, eV[YV].start) + XU, JV = eV[yV].end, YV = yV + 1)
      }
      return xV + VV.slice(JV)
    }
    const Zy = {}.propertyIsEnumerable;

    function vy(VV, eV) {
      try {
        return by(VV, eV, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (VV) {
        return []
      }
    }

    function ry(VV, eV, xV, JV) {
      if (0 >= xV.remainingNodes) return {
        stringValue: eY
      };
      if (xV.remainingNodes--, Wx(VV)) return {
        boolValue: VV
      };
      if ("bigint" == typeof VV) return function(VV, eV) {
        const xV = VV.toString(),
          JV = BigInt("9223372036854775808");
        return VV >= JV || -JV > VV ? (null == eV || eV.debug(`Attribute ${xV} is outside the int64 range; encoding it as a string`), {
          stringValue: xV
        }) : {
          intValue: xV
        }
      }(VV, eV);
      if ("number" == typeof VV) {
        if (!Number.isFinite(VV)) return {
          stringValue: String(VV)
        };
        if (Number.isInteger(VV)) {
          if (Number.isSafeInteger(VV)) return {
            intValue: String(VV)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(VV)
          };
          const xV = BigInt(VV).toString();
          return VV >= 0x8000000000000000 || -0x8000000000000000 > VV ? (null == eV || eV.debug(`Attribute ${xV} is outside the int64 range; encoding it as a string`), {
            stringValue: xV
          }) : {
            intValue: xV
          }
        }
        return {
          doubleValue: VV
        }
      }
      if ("string" == typeof VV) return {
        stringValue: JY(VV)
      };
      if ("function" == typeof VV) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof VV) return {
        stringValue: String(VV)
      };
      if ("object" == typeof VV && null !== VV) {
        if (xV.ancestors.has(VV)) return {
          stringValue: "[Circular]"
        };
        if (JV >= 20) return {
          stringValue: eY
        };
        if (VV instanceof Date) {
          const eV = VV.getTime(),
            xV = Number.isFinite(eV) ? VV.toISOString() : String(VV);
          return {
            stringValue: "string" == typeof xV ? JY(xV) : String(xV)
          }
        }
        xV.ancestors.add(VV);
        try {
          try {
            const YV = VV.toJSON;
            if ("function" == typeof YV) return ry(YV.call(VV), eV, xV, JV + 1)
          } catch (VV) {}
          return qx(VV) ? {
            arrayValue: {
              values: ky(VV, eV, xV, JV + 1)
            }
          } : {
            kvlistValue: {
              values: by(VV, eV, xV, JV + 1)
            }
          }
        } finally {
          xV.ancestors.delete(VV)
        }
      }
      return {
        stringValue: JY(String(VV))
      }
    }

    function ky(VV, eV, xV, JV) {
      const YV = [],
        UV = Math.min(VV.length, 1e3);
      let yV = 0;
      for (; UV > yV && xV.remainingNodes > 0; yV++) try {
        const UV = yV in VV ? VV[yV] : void 0;
        if (Mx(UV)) continue;
        YV.push(ry(UV, eV, xV, JV))
      } catch (VV) {
        YV.push({
          stringValue: xY
        })
      }
      return VV.length > yV && YV.push({
        stringValue: eY
      }), YV
    }

    function by(VV, eV, xV, JV) {
      const YV = [];
      for (const UV in VV)
        if (Zy.call(VV, UV)) {
          if (!UV) {
            null == eV || eV.debug("Dropping an attribute with an empty key");
            continue
          }
          if (YV.length >= 1e3 || 0 >= xV.remainingNodes) {
            null == eV || eV.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const yV = VV[UV];
            if (Xx(yV) || Px(yV)) continue;
            YV.push({
              key: JY(UV),
              value: ry(yV, eV, xV, JV)
            })
          } catch (VV) {
            YV.push({
              key: JY(UV),
              value: {
                stringValue: xY
              }
            })
          }
        } return YV
    }

    function Ey(VV, eV, xV) {
      return jY(jY(jY(jY({}, YY({}, VV.resourceAttributes)), {}, {
        "service.name": VV.serviceName || "unknown_service"
      }, VV.environment && {
        "deployment.environment": VV.environment
      }), VV.serviceVersion && {
        "service.version": VV.serviceVersion
      }), {}, {
        "telemetry.sdk.name": eV,
        "telemetry.sdk.version": xV
      })
    }
    const By = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function jy(VV, eV) {
      const xV = YY({}, VV),
        JV = {};
      for (const YV of By)({}).hasOwnProperty.call(xV, YV) && (JV[YV] = xV[YV], delete xV[YV]);
      return [...vy(xV, eV), ...vy(JV, eV)]
    }
    const qy = {
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
      ty = {
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
      Fy = ty.info;

    function Ty(VV) {
      try {
        return JY(String(VV))
      } catch (VV) {
        return xY
      }
    }

    function Py(VV, eV, xV, JV) {
      const YV = VV.level || "info",
        {
          text: UV,
          number: yV
        } = ty[YV] || Fy,
        pV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(VV) + "000000"
        }(zx(JV) ? JV : void 0),
        QV = {};
      eV.distinctId && (QV.posthogDistinctId = eV.distinctId), eV.sessionId && (QV.sessionId = eV.sessionId), eV.windowId && (QV["window.id"] = eV.windowId), Mx(eV.sessionStartTimestamp) || (QV.sessionStartTimestamp = String(eV.sessionStartTimestamp)), Mx(eV.lastActivityTimestamp) || (QV.lastActivityTimestamp = String(eV.lastActivityTimestamp)), eV.currentUrl && (QV["url.full"] = eV.currentUrl), eV.screenName && (QV["screen.name"] = eV.screenName), eV.appState && (QV["app.state"] = eV.appState), eV.activeFeatureFlags && eV.activeFeatureFlags.length > 0 && (QV.feature_flags = eV.activeFeatureFlags);
      const nV = jY({}, QV),
        wV = VV.attributes;
      if (wV) {
        let VV = [];
        try {
          VV = Object.keys(wV)
        } catch (eV) {
          VV = []
        }
        for (const xV of VV) {
          let VV;
          try {
            VV = wV[xV]
          } catch (eV) {
            VV = xY
          }
          Object.defineProperty(nV, xV, {
            value: VV,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const ZV = {
        timeUnixNano: pV,
        observedTimeUnixNano: pV,
        severityNumber: yV,
        severityText: UV,
        body: {
          stringValue: Ty(VV.body)
        },
        attributes: vy(nV, xV)
      };
      return VV.trace_id && (ZV.traceId = VV.trace_id), VV.span_id && (ZV.spanId = VV.span_id), Px(VV.trace_flags) || (ZV.flags = VV.trace_flags), ZV
    }

    function Ay(VV, eV, xV) {
      return Ey(VV, eV, xV)
    }

    function Ny(VV, eV, xV, JV) {
      return {
        resourceLogs: [{
          resource: {
            attributes: jy(eV)
          },
          scopeLogs: [{
            scope: {
              name: xV,
              version: JV
            },
            logRecords: VV
          }]
        }]
      }
    }
    var Xy = class {
      constructor(VV) {
        this._onFire = VV, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(VV) {
        this.clear(), this._firesAt = Date.now() + VV, this._timer = vY((() => {
          this._timer = void 0, this._onFire()
        }), VV)
      }
      armNoEarlierThan(VV) {
        this._timer && Date.now() + VV <= this._firesAt || this.arm(VV)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function My() {
      return .75 + .5 * Math.random()
    }

    function zy(VV, eV, xV, JV) {
      const YV = Math.min(Math.max(0, eV - 1), 6),
        UV = VV * Math.pow(2, YV);
      return Math.round((void 0 === JV ? UV : Math.min(UV, Math.max(JV, VV))) * xV)
    }
    var Gy = class {
      constructor(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          yV = arguments.length > 6 ? arguments[6] : void 0;
        var pV;
        this._instance = VV, this._config = eV, this._logger = xV, this._getContext = JV, this._onReady = YV, this._waitForStoragePersist = UV, this._scopeName = yV, this._flushTimer = new Xy((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new yY, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = eV.maxBufferSize, this._maxQueueSize = Math.max(null !== (pV = eV.maxQueueSize) && void 0 !== pV ? pV : eV.maxBufferSize, eV.maxBufferSize), this._flushIntervalMs = eV.flushIntervalMs, this._maxBatchRecordsPerPost = eV.maxBatchRecordsPerPost, this._rateCapWindowMs = eV.rateCapWindowMs, this._maxLogsPerInterval = eV.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(Qx.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(VV, eV) {
        var xV;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == VV ? void 0 : VV.body)) return;
        const JV = this._runBeforeSend(VV);
        if (null === JV) return;
        if (!JV.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const YV = {
          record: Py(JV, null !== (xV = null == eV ? void 0 : eV.context) && void 0 !== xV ? xV : this._getContext(), this._logger, null == eV ? void 0 : eV.occurredAtMs)
        };
        this._onReady((() => this._enqueue(YV)))
      }
      _runBeforeSend(VV) {
        const eV = this._config.beforeSend;
        if (!eV) return VV;
        const xV = qx(eV) ? eV : [eV];
        let JV = VV;
        for (const YV of xV) try {
          const VV = YV(JV);
          if (!VV) return this._logger.info("Log was rejected in beforeSend function"), null;
          JV = VV
        } catch (VV) {
          return this._logger.error("Error in beforeSend function for log:", VV), null
        }
        return JV
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const VV = Date.now(),
          eV = VV - this._intervalWindowStart;
        return this._rateCapWindowMs > eV && eV >= 0 || (this._intervalWindowStart = VV, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var VV = this;
        return fx((function*() {
          if (!VV._instance.isDisabled) return VV._flushPromise || (VV._flushPromise = VV._flushInner().finally((() => {
            VV._flushPromise = null
          }))), VV._flushPromise
        }))()
      }
      _flushInner() {
        var VV = this;
        return fx((function*() {
          var eV;
          VV._flushTimer.clear();
          let xV = null !== (eV = VV._instance.getPersistedProperty(Qx.LogsQueue)) && void 0 !== eV ? eV : [];
          if (0 === xV.length) return;
          const JV = xV.length;
          let YV = 0;
          for (; xV.length > 0 && JV > YV;) {
            var UV, yV;
            const eV = VV._queueGeneration;
            VV._evictedSinceAdvance = 0;
            const JV = Math.min(xV.length, VV._maxBatchRecordsPerPost),
              pV = xV.slice(0, JV),
              QV = Ny(pV.map((VV => VV.record)), VV._buildResourceAttributes(), null !== (UV = VV._scopeName) && void 0 !== UV ? UV : VV._instance.getLibraryId(), VV._instance.getLibraryVersion()),
              nV = yield VV._instance._sendLogsBatch(QV);
            if (VV._queueGeneration !== eV) return;
            if ("too-large" === nV.kind && pV.length > 1) VV._maxBatchRecordsPerPost = Math.max(1, Math.floor(pV.length / 2)), VV._logger.warn(`Logs batch of size ${pV.length} was too large for the ingestion endpoint, reducing batch size to ${VV._maxBatchRecordsPerPost}`);
            else {
              if (VV._retryAfter.record(nV), VV._flushTimer.pending && VV._flushTimer.arm(Math.max(VV._flushIntervalMs, VV._retryAfter.remainingMs())), "retry-later" === nV.kind) throw nV.error;
              if ("too-large" === nV.kind ? VV._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === nV.kind && VV._config.maxBatchRecordsPerPost > VV._maxBatchRecordsPerPost && (VV._maxBatchRecordsPerPost = Math.min(VV._config.maxBatchRecordsPerPost, VV._maxBatchRecordsPerPost + 1)), yield VV._persistQueueAdvance(pV.length), xV = null !== (yV = VV._instance.getPersistedProperty(Qx.LogsQueue)) && void 0 !== yV ? yV : [], YV += pV.length, "fatal" === nV.kind) throw nV.error
            }
          }
        }))()
      }
      _persistQueueAdvance(VV) {
        var eV = this;
        return fx((function*() {
          var xV;
          const JV = Math.max(0, VV - eV._evictedSinceAdvance),
            YV = null !== (xV = eV._instance.getPersistedProperty(Qx.LogsQueue)) && void 0 !== xV ? xV : [];
          eV._instance.setPersistedProperty(Qx.LogsQueue, YV.slice(JV)), yield eV._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return Ay(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(VV) {
        var eV;
        if (this._instance.optedOut) return;
        const xV = null !== (eV = this._instance.getPersistedProperty(Qx.LogsQueue)) && void 0 !== eV ? eV : [];
        this._maxQueueSize > xV.length || (xV.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), xV.push(VV), this._instance.setPersistedProperty(Qx.LogsQueue, xV), this._maxBufferSize > xV.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(zy(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const VV = this._instance.getPersistedProperty(Qx.LogsQueue);
        return !!VV && VV.length > 0
      }
      shutdown(VV) {
        var eV = this;
        return fx((function*() {
          eV._flushTimer.clear();
          const xV = eV.flush().catch((() => {}));
          void 0 !== VV ? yield rY(xV, VV): yield xV
        }))()
      }
      flushWithTimeout(VV) {
        var eV = this;
        return fx((function*() {
          const xV = eV.flush();
          yield rY(xV, VV, (() => {
            xV.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (VV => {
          this._consecutiveFlushFailures++, this._flushJitter = My(), this._logger.error("PostHog logs flush failed:", VV)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const Wy = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function Ry(VV) {
      return String(VV) + "000000"
    }

    function gy(VV, eV, xV, JV) {
      let YV = "";
      return JV && (YV = Object.keys(JV).sort().map((VV => `${JSON.stringify(VV)}:${JSON.stringify(JV[VV])}`)).join(",")), `${VV}\0${eV}\0${null!=xV?xV:""}\0${YV}`
    }
    var Dy = class {
      constructor(VV, eV, xV) {
        this._instance = VV, this._config = eV, this._logger = xV, this._series = new Map, this._flushTimer = new Xy((() => this.flush().catch((VV => {
          this._logger.error("Metrics flush failed:", VV)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new yY, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: VV,
          type: "count",
          value: eV,
          unit: null == xV ? void 0 : xV.unit,
          attributes: null == xV ? void 0 : xV.attributes
        })
      }
      gauge(VV, eV, xV) {
        this._capture({
          name: VV,
          type: "gauge",
          value: eV,
          unit: null == xV ? void 0 : xV.unit,
          attributes: null == xV ? void 0 : xV.attributes
        })
      }
      histogram(VV, eV, xV) {
        this._capture({
          name: VV,
          type: "histogram",
          value: eV,
          unit: null == xV ? void 0 : xV.unit,
          attributes: null == xV ? void 0 : xV.attributes
        })
      }
      flush() {
        var VV = this;
        const eV = this._flushPromise,
          xV = function() {
            var xV = fx((function*() {
              eV && (yield eV.catch((() => {}))), yield VV._doFlush()
            }));
            return function() {
              return xV.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === xV && (this._flushPromise = null)
          }));
        return this._flushPromise = xV, xV
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const VV = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(VV)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(VV) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const eV = this._runBeforeSend(VV);
        if (null === eV) return;
        if (!eV.name || "string" != typeof eV.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof eV.value || !Number.isFinite(eV.value)) return void this._logger.warn(`Dropping metric '${eV.name}': value must be a finite number`);
        if ("count" === eV.type && 0 > eV.value) return void this._logger.warn(`Dropping count '${eV.name}': counters are monotonic, value must be >= 0`);
        let xV, JV;
        try {
          xV = eV.attributes ? jY({}, eV.attributes) : void 0, JV = gy(eV.type, eV.name, eV.unit, xV)
        } catch (VV) {
          return void this._logger.warn(`Dropping metric '${eV.name}': attributes could not be serialized`, VV)
        }
        let YV = this._series.get(JV);
        if (!YV) {
          if (!this._admitNewSeries()) return;
          YV = {
            name: eV.name,
            type: eV.type,
            unit: eV.unit,
            attributes: xV,
            windowStartMs: Date.now()
          }, this._series.set(JV, YV)
        }
        const UV = this._typeByName.get(eV.name);
        void 0 === UV ? this._typeByName.set(eV.name, eV.type) : UV === eV.type || this._typeCollisionWarned.has(eV.name) || (this._typeCollisionWarned.add(eV.name), this._logger.warn(`Metric name '${eV.name}' is already used as a ${UV}; recording it as a ${eV.type} too will blend both series in charts. Use a distinct name.`)), this._fold(YV, eV.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(VV, eV) {
        switch (VV.type) {
          case "count":
            var xV;
            VV.total = (null !== (xV = VV.total) && void 0 !== xV ? xV : 0) + eV;
            break;
          case "gauge":
            VV.last = eV;
            break;
          case "histogram": {
            VV.hist || (VV.hist = {
              count: 0,
              sum: 0,
              min: eV,
              max: eV,
              bucketCounts: new Array(Wy.length + 1).fill(0)
            });
            const xV = VV.hist;
            xV.count += 1, xV.sum += eV, xV.min = Math.min(xV.min, eV), xV.max = Math.max(xV.max, eV), xV.bucketCounts[function(VV, eV) {
              for (let xV = 0; eV.length > xV; xV++)
                if (eV[xV] >= VV) return xV;
              return eV.length
            }(eV, Wy)] += 1;
            break
          }
        }
      }
      _runBeforeSend(VV) {
        const eV = this._config.beforeSend;
        if (!eV) return VV;
        const xV = qx(eV) ? eV : [eV];
        let JV = VV;
        for (const YV of xV) try {
          const VV = YV(JV);
          if (!VV) return this._logger.info("Metric was rejected in beforeSend function"), null;
          JV = VV
        } catch (VV) {
          return this._logger.error("Error in beforeSend function for metric:", VV), null
        }
        return JV
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(zy(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var VV = this;
        return fx((function*() {
          if (VV._flushTimer.clear(), 0 === VV._series.size) return;
          const eV = VV._series;
          VV._series = new Map, VV._seriesCapWarned = !1, VV._typeByName = new Map, VV._typeCollisionWarned = new Set;
          const xV = VV._generation,
            JV = yield VV._instance._sendMetricsBatch(VV._buildPayload(eV));
          if (xV === VV._generation) switch (VV._retryAfter.record(JV), "retry-later" === JV.kind ? (VV._consecutiveFlushFailures++, VV._flushJitter = My()) : (VV._consecutiveFlushFailures = 0, VV._flushJitter = 1), VV._flushTimer.pending && VV._flushTimer.arm(VV._nextFlushDelay()), JV.kind) {
            case "ok":
              return;
            case "retry-later":
              return VV._mergeWindowBack(eV), void VV._flushTimer.armNoEarlierThan(VV._nextFlushDelay());
            case "too-large":
              return void VV._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void VV._logger.error("Failed to send metrics batch:", JV.error)
          }
        }))()
      }
      _buildPayload(VV) {
        return eV = this._buildMetrics(VV), xV = function(VV, eV, xV) {
          return Ey(VV, eV, xV)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), JV = this._instance.getLibraryId(), YV = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: jy(xV)
            },
            scopeMetrics: [{
              scope: {
                name: JV,
                version: YV
              },
              metrics: eV
            }]
          }]
        };
        var eV, xV, JV, YV
      }
      _buildMetrics(VV) {
        const eV = Ry(Date.now()),
          xV = new Map;
        for (const yV of VV.values()) {
          var JV;
          const VV = gy(yV.type, yV.name, yV.unit, void 0);
          let pV = xV.get(VV);
          pV || (pV = jY({
            name: yV.name
          }, yV.unit && {
            unit: yV.unit
          }), "count" === yV.type ? pV.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === yV.type ? pV.gauge = {
            dataPoints: []
          } : pV.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, xV.set(VV, pV));
          const QV = vy(null !== (JV = yV.attributes) && void 0 !== JV ? JV : {}, this._logger),
            nV = Ry(yV.windowStartMs);
          if ("count" === yV.type) {
            var YV;
            const VV = {
              attributes: QV,
              startTimeUnixNano: nV,
              timeUnixNano: eV,
              asDouble: null !== (YV = yV.total) && void 0 !== YV ? YV : 0
            };
            pV.sum.dataPoints.push(VV)
          } else if ("gauge" === yV.type) {
            var UV;
            const VV = {
              attributes: QV,
              timeUnixNano: eV,
              asDouble: null !== (UV = yV.last) && void 0 !== UV ? UV : 0
            };
            pV.gauge.dataPoints.push(VV)
          } else yV.hist && pV.histogram.dataPoints.push({
            attributes: QV,
            startTimeUnixNano: nV,
            timeUnixNano: eV,
            count: yV.hist.count,
            sum: yV.hist.sum,
            min: yV.hist.min,
            max: yV.hist.max,
            bucketCounts: yV.hist.bucketCounts,
            explicitBounds: Wy
          })
        }
        return Array.from(xV.values())
      }
      _mergeWindowBack(VV) {
        for (const [JV, YV] of VV) {
          const VV = this._series.get(JV);
          if (VV) switch (VV.windowStartMs = Math.min(VV.windowStartMs, YV.windowStartMs), VV.type) {
            case "count":
              var eV, xV;
              VV.total = (null !== (eV = VV.total) && void 0 !== eV ? eV : 0) + (null !== (xV = YV.total) && void 0 !== xV ? xV : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (YV.hist)
                if (VV.hist) {
                  VV.hist.count += YV.hist.count, VV.hist.sum += YV.hist.sum, VV.hist.min = Math.min(VV.hist.min, YV.hist.min), VV.hist.max = Math.max(VV.hist.max, YV.hist.max);
                  for (let eV = 0; VV.hist.bucketCounts.length > eV; eV++) VV.hist.bucketCounts[eV] += YV.hist.bucketCounts[eV]
                } else VV.hist = YV.hist
          } else this._admitNewSeries() && this._series.set(JV, YV)
        }
      }
    };
    const iy = function(VV) {
        let {
          debugEnabled: eV
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = {
          _log(xV) {
            let JV;
            try {
              JV = typeof window > "u" ? void 0 : window
            } catch (VV) {
              return
            }
            for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
            JV && (YV.DEBUG || JV.POSTHOG_DEBUG || eV) && !Px(JV.console) && JV.console && ("__rrweb_original__" in JV.console[xV] ? JV.console[xV].__rrweb_original__ : JV.console[xV])(VV, ...yV)
          },
          debug() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            xV._log("debug", ...eV)
          },
          info() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            xV._log("log", ...eV)
          },
          warn() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            xV._log("warn", ...eV)
          },
          error() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            xV._log("error", ...eV)
          },
          critical() {
            for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
            console.error(VV, ...xV)
          },
          uninitializedWarning(VV) {
            xV.error(`You must initialize PostHog before calling ${VV}`)
          },
          createLogger: (eV, xV) => iy(`${VV} ${eV}`, xV)
        };
        return xV
      },
      Cy = iy("[PostHog.js]"),
      ay = Cy.createLogger;

    function oy(VV, eV) {
      qx(VV) && VV.forEach(eV)
    }

    function cy(VV, eV) {
      if (!Mx(VV))
        if (qx(VV)) VV.forEach(eV);
        else if ((VV => VV instanceof FormData)(VV)) VV.forEach(((VV, xV) => eV(VV, xV)));
      else
        for (const xV in VV) Bx.call(VV, xV) && eV(VV[xV], xV)
    }
    const hy = function(VV) {
      for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
      for (const YV of xV)
        for (const eV in YV) void 0 !== YV[eV] && (VV[eV] = YV[eV]);
      return VV
    };

    function ly(VV) {
      const eV = Object.keys(VV);
      let xV = eV.length;
      const JV = new Array(xV);
      for (; xV--;) JV[xV] = [eV[xV], VV[eV[xV]]];
      return JV
    }
    const Ly = function(VV) {
        return function() {
          try {
            for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
            return VV.apply(this, xV)
          } catch (VV) {
            Cy.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), Cy.critical(VV)
          }
        }
      },
      fy = function(VV) {
        const eV = {};
        return cy(VV, (function(VV, xV) {
          (Ax(VV) && VV.length > 0 || zx(VV)) && (eV[xV] = VV)
        })), eV
      };

    function my(VV) {
      const eV = jY({}, VV);
      for (const xV of ["name", "message", "stack", "cause", "errors"]) try {
        xV in VV && (eV[xV] = VV[xV])
      } catch (VV) {}
      return eV
    }
    const Ky = ["herokuapp.com", "vercel.app", "netlify.app"];

    function Hy(VV) {
      const eV = null == VV ? void 0 : VV.hostname;
      if (!Ax(eV)) return !1;
      const xV = eV.split(".").slice(-2).join(".");
      for (const JV of Ky)
        if (xV === JV) return !1;
      return !0
    }

    function uy(VV, eV, xV, JV) {
      const {
        capture: YV = !1,
        passive: UV = !0
      } = null != JV ? JV : {};
      null == VV || VV.addEventListener(eV, xV, {
        capture: YV,
        passive: UV
      })
    }

    function sy(VV) {
      return "ph_toolbar_internal" === VV.name
    }
    const Sy = VV => {
      if (Oe) {
        try {
          const eV = VV + "=",
            xV = Oe.cookie.split(";").filter((VV => VV.length));
          for (let VV = 0; xV.length > VV; VV++) {
            let JV = xV[VV];
            for (;
              " " == JV.charAt(0);) JV = JV.substring(1, JV.length);
            if (0 === JV.indexOf(eV)) return decodeURIComponent(JV.substring(eV.length, JV.length))
          }
        } catch (VV) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(VV) {
      return 0 > VV ? Math.ceil(VV) : Math.floor(VV)
    }), Number.isInteger || (Number.isInteger = function(VV) {
      return zx(VV) && isFinite(VV) && Math.floor(VV) === VV
    });
    var Iy = class VV {
        constructor(VV) {
          if (this.bytes = VV, 16 !== VV.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(eV, xV, JV, YV) {
          if (!Number.isInteger(eV) || !Number.isInteger(xV) || !Number.isInteger(JV) || !Number.isInteger(YV) || 0 > eV || 0 > xV || 0 > JV || 0 > YV || eV > 0xffffffffffff || xV > 4095 || JV > 1073741823 || YV > 4294967295) throw new RangeError("invalid field value");
          const UV = new Uint8Array(16);
          return UV[0] = eV / Math.pow(2, 40), UV[1] = eV / Math.pow(2, 32), UV[2] = eV / Math.pow(2, 24), UV[3] = eV / Math.pow(2, 16), UV[4] = eV / 256, UV[5] = eV, UV[6] = 112 | xV >>> 8, UV[7] = xV, UV[8] = 128 | JV >>> 24, UV[9] = JV >>> 16, UV[10] = JV >>> 8, UV[11] = JV, UV[12] = YV >>> 24, UV[13] = YV >>> 16, UV[14] = YV >>> 8, UV[15] = YV, new VV(UV)
        }
        toString() {
          let VV = "";
          for (let eV = 0; this.bytes.length > eV; eV++) VV = VV + (this.bytes[eV] >>> 4).toString(16) + (15 & this.bytes[eV]).toString(16), 3 !== eV && 5 !== eV && 7 !== eV && 9 !== eV || (VV += "-");
          if (36 !== VV.length) throw new Error("Invalid UUIDv7 was generated");
          return VV
        }
        clone() {
          return new VV(this.bytes.slice(0))
        }
        equals(VV) {
          return 0 === this.compareTo(VV)
        }
        compareTo(VV) {
          for (let eV = 0; 16 > eV; eV++) {
            const xV = this.bytes[eV] - VV.bytes[eV];
            if (0 !== xV) return Math.sign(xV)
          }
          return 0
        }
      },
      dy = class {
        generate() {
          const VV = this.generateOrAbort();
          if (!Px(VV)) return VV;
          {
            this._timestamp = 0;
            const VV = this.generateOrAbort();
            if (Px(VV)) throw new Error("Could not generate UUID after timestamp reset");
            return VV
          }
        }
        generateOrAbort() {
          const VV = (() => {
            const VV = Date.now();
            return zx(VV) && isFinite(VV) ? Math.min(Math.max(Math.floor(VV), 0), 0xffffffffffff) : 0
          })();
          if (VV > this._timestamp) this._timestamp = VV, this._resetCounter();
          else {
            if (this._timestamp >= VV + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return Iy.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new Vp
        }
      };
    let Oy = VV => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let eV = 0; VV.length > eV; eV++) VV[eV] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return VV
    };
    Se && !Px(Se.crypto) && crypto.getRandomValues && (Oy = VV => crypto.getRandomValues(VV));
    var Vp = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (Oy(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let ep;
    const xp = () => Jp().toString(),
      Jp = () => (ep || (ep = new dy)).generate();
    let Yp = "";
    const Up = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let yp = null;
    const pp = {
      _is_supported() {
        if (!Xx(yp)) return yp;
        if (yp = !1, Oe) try {
          const VV = `__ph_cookie_support_${xp()}`;
          pp._set(VV, "xyz"), yp = '"xyz"' === Sy(VV), pp._remove(VV)
        } catch (JV) {
          yp = !1
        }
        return yp
      },
      _error(VV) {
        Cy.error("cookieStore error: " + VV)
      },
      _get: Sy,
      _parse(VV) {
        let eV;
        try {
          eV = JSON.parse(pp._get(VV)) || {}
        } catch (VV) {}
        return eV
      },
      _set(VV, eV, xV, JV, YV) {
        if (!Oe) return !1;
        try {
          let UV = "",
            yV = "";
          const pV = function(VV, eV) {
            if (eV) {
              let eV = function(VV) {
                let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe;
                if (Yp) return Yp;
                if (!eV) return "";
                if (["localhost", "127.0.0.1"].includes(VV)) return "";
                const xV = VV.split(".");
                let JV = Math.min(xV.length, 8);
                const YV = "dmn_chk_" + xp();
                for (; !Yp && JV--;) {
                  const VV = xV.slice(JV).join("."),
                    UV = YV + "=1;domain=." + VV + ";path=/";
                  eV.cookie = UV + ";max-age=3", eV.cookie.includes(YV) && (eV.cookie = UV + ";max-age=0", Yp = VV)
                }
                return Yp
              }(VV);
              if (!eV) {
                const xV = (VV => {
                  const eV = VV.match(Up);
                  return eV ? eV[0] : ""
                })(VV);
                xV !== eV && Cy.info("Warning: cookie subdomain discovery mismatch", xV, eV), eV = xV
              }
              return eV ? "; domain=." + eV : ""
            }
            return ""
          }(Oe.location.hostname, JV);
          if (xV) {
            const VV = new Date;
            VV.setTime(VV.getTime() + 864e5 * xV), UV = "; expires=" + VV.toUTCString()
          }
          YV && (yV = "; secure");
          const QV = VV + "=" + encodeURIComponent(JSON.stringify(eV)) + UV + "; SameSite=Lax; path=/" + pV + yV;
          return QV.length > 3686.4 && Cy.warn("cookieStore warning: large cookie, len=" + QV.length), Oe.cookie = QV, !0
        } catch (VV) {
          return !1
        }
      },
      _remove(VV, eV) {
        if ((null == Oe ? void 0 : Oe.cookie) && (!eV || !Xx(Sy(VV)))) try {
          pp._set(VV, "", -1, eV)
        } catch (VV) {
          return
        }
      }
    };
    let Qp = null;
    const np = {
        _is_supported() {
          if (!Xx(Qp)) return Qp;
          let VV = !0;
          if (Px(Se)) VV = !1;
          else try {
            const eV = "__mplssupport__";
            np._set(eV, "xyz"), '"xyz"' !== np._get(eV) && (VV = !1), np._remove(eV)
          } catch (YV) {
            VV = !1
          }
          return VV || Cy.error("localStorage unsupported; falling back to cookie store"), Qp = VV, VV
        },
        _error(VV) {
          Cy.error("localStorage error: " + VV)
        },
        _get(VV) {
          try {
            return null == Se ? void 0 : Se.localStorage.getItem(VV)
          } catch (VV) {
            np._error(VV)
          }
          return null
        },
        _parse(VV) {
          try {
            return JSON.parse(np._get(VV)) || {}
          } catch (VV) {}
          return null
        },
        _set(VV, eV) {
          try {
            return null == Se || Se.localStorage.setItem(VV, JSON.stringify(eV)), !0
          } catch (VV) {
            np._error(VV)
          }
          return !1
        },
        _remove(VV) {
          try {
            null == Se || Se.localStorage.removeItem(VV)
          } catch (VV) {
            np._error(VV)
          }
        }
      },
      wp = [bV, pV, rV, QV, jV, ZV, wV, nV, EV],
      Zp = [AV, PV, dV, OV, Ae, Pe, GV, je],
      vp = VV => VV + "_cpm",
      rp = ["__proto__", "constructor", "prototype"],
      kp = VV => {
        if (!Fx(VV)) return {};
        const eV = {};
        return Object.keys(VV).forEach((xV => {
          -1 === rp.indexOf(xV) && (eV[xV] = VV[xV])
        })), eV
      },
      bp = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const xV = {};
        return [...Zp, ...eV].forEach((eV => {
          const JV = VV[eV];
          Px(JV) || Xx(JV) || "" === JV || (xV[eV] = JV)
        })), xV
      },
      Ep = VV => {
        let eV = 5381,
          xV = 2166136261;
        for (let JV = 0; VV.length > JV; JV++) {
          const YV = VV.charCodeAt(JV);
          eV = 33 * eV ^ YV, xV = Math.imul(xV ^ YV, 16777619)
        }
        return VV.length.toString(36) + "." + (eV >>> 0).toString(36) + "." + (xV >>> 0).toString(36)
      },
      Bp = (VV, eV) => ({
        p: eV,
        f: Ep(JSON.stringify(VV))
      }),
      jp = (VV, eV) => {
        if (!eV) return {
          properties: [],
          isValid: !1
        };
        try {
          const xV = pp._parse(vp(VV)),
            JV = (null == xV ? void 0 : xV.f) === Ep(eV) && qx(xV.p);
          return {
            properties: JV ? xV.p : [],
            isValid: JV
          }
        } catch (VV) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      qp = (VV, eV) => eV + "|" + (pp._get(vp(VV)) || ""),
      tp = {},
      Fp = {
        _is_supported: () => !0,
        _error(VV) {
          Cy.error("memoryStorage error: " + VV)
        },
        _get: VV => VV in tp ? tp[VV] : null,
        _parse: VV => VV in tp ? tp[VV] : null,
        _set: (VV, eV) => (tp[VV] = eV, !0),
        _remove(VV) {
          delete tp[VV]
        }
      };
    let Tp = null;
    const Pp = {
      _is_supported() {
        if (!Xx(Tp)) return Tp;
        if (Tp = !0, Px(Se)) Tp = !1;
        else try {
          const VV = "__support__";
          Pp._set(VV, "xyz"), '"xyz"' !== Pp._get(VV) && (Tp = !1), Pp._remove(VV)
        } catch (JV) {
          Tp = !1
        }
        return Tp
      },
      _error(VV) {
        Cy.error("sessionStorage error: ", VV)
      },
      _get(VV) {
        try {
          return null == Se ? void 0 : Se.sessionStorage.getItem(VV)
        } catch (VV) {
          Pp._error(VV)
        }
        return null
      },
      _parse(VV) {
        try {
          return JSON.parse(Pp._get(VV)) || null
        } catch (VV) {}
        return null
      },
      _set(VV, eV) {
        try {
          return null == Se || Se.sessionStorage.setItem(VV, JSON.stringify(eV)), !0
        } catch (VV) {
          Pp._error(VV)
        }
        return !1
      },
      _remove(VV) {
        try {
          null == Se || Se.sessionStorage.removeItem(VV)
        } catch (VV) {
          Pp._error(VV)
        }
      }
    };
    var Ap = class {
      constructor(VV) {
        this._instance = VV
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
      optInOut(VV) {
        this.Cb._set(this._storageKey, VV ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.Cb._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: VV,
          opt_out_capturing_cookie_prefix: eV,
          consent_persistence_name: xV
        } = this._instance.config;
        return xV || (eV ? eV + VV : "__ph_opt_in_out_" + VV)
      }
      get _storedConsent() {
        const VV = this.Cb._get(this._storageKey);
        return hx(VV) ? 1 : vx(lx, VV) ? 0 : -1
      }
      get Cb() {
        const VV = this._config.opt_out_capturing_persistence_type,
          eV = "localStorage" === VV ? np : pp,
          xV = eV._is_supported() ? eV : Fp;
        if (!this._persistentStore || this._persistentStore !== xV) {
          this._persistentStore = xV;
          const eV = "localStorage" === VV ? pp : np;
          eV._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(hx(eV._get(this._storageKey))), eV._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == de ? void 0 : de.doNotTrack, null == de ? void 0 : de.msDoNotTrack, px.doNotTrack, null == de ? void 0 : de.globalPrivacyControl].some((VV => hx(VV)))
      }
    };

    function Np(VV, eV) {
      var xV;
      const JV = null == VV || null === (xV = VV.config) || void 0 === xV ? void 0 : xV.get_current_url;
      if (!tx(JV)) return eV;
      try {
        const VV = JV(eV);
        return Ax(VV) && VV ? VV : eV
      } catch (VV) {
        return Cy.error("Error in get_current_url, falling back to window.location.href", VV), eV
      }
    }

    function Xp(VV) {
      var eV;
      return VV instanceof Element && ("__POSTHOG_TOOLBAR__" === VV.id || !!(null === (eV = VV.closest) || void 0 === eV ? void 0 : eV.call(VV, ".toolbar-global-fade-container")))
    }

    function Mp(VV) {
      return !!VV && 1 === VV.nodeType
    }

    function zp(VV, eV) {
      return !!VV && !!VV.tagName && VV.tagName.toLowerCase() === eV.toLowerCase()
    }

    function Gp(VV) {
      return !!VV && 3 === VV.nodeType
    }

    function Wp(VV) {
      return !!VV && 11 === VV.nodeType && Mp(VV.host)
    }

    function Rp(VV) {
      return VV ? rx(VV).split(/\s+/) : []
    }

    function gp(VV, eV) {
      const xV = function(VV) {
        var eV;
        const xV = null == Se || null === (eV = Se.location) || void 0 === eV ? void 0 : eV.href;
        return Px(xV) ? void 0 : Np(VV, xV)
      }(eV);
      return !!(xV && VV && VV.some((VV => xV.match(VV))))
    }

    function Dp(VV) {
      let eV = "";
      switch (typeof VV.className) {
        case "string":
          eV = VV.className;
          break;
        case "object":
          eV = (VV.className && "baseVal" in VV.className ? VV.className.baseVal : null) || VV.getAttribute("class") || "";
          break;
        default:
          eV = ""
      }
      return Rp(eV)
    }

    function ip(VV) {
      return Mx(VV) ? null : rx(VV).split(/(\s+)/).filter((VV => rQ(VV))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function Cp(VV) {
      let eV = "";
      return YQ(VV) && !UQ(VV) && VV.childNodes && VV.childNodes.length && cy(VV.childNodes, (function(VV) {
        var xV;
        Gp(VV) && VV.textContent && (eV += null !== (xV = ip(VV.textContent)) && void 0 !== xV ? xV : "")
      })), rx(eV)
    }

    function ap(VV) {
      var eV;
      return Px(VV.target) ? VV.srcElement || null : (null === (eV = VV.target) || void 0 === eV ? void 0 : eV.shadowRoot) ? VV.composedPath()[0] || null : VV.target || null
    }
    const op = ["a", "button", "form", "input", "select", "textarea", "label"];

    function cp(VV, eV) {
      const xV = VV.matches || VV.matchesSelector || VV.msMatchesSelector || VV.mozMatchesSelector || VV.webkitMatchesSelector || VV.oMatchesSelector;
      try {
        return !!xV && xV.call(VV, eV)
      } catch (VV) {
        return !1
      }
    }

    function hp(VV, eV) {
      if (Px(eV)) return !0;
      for (const xV of VV)
        if (eV.some((VV => cp(xV, VV)))) return !0;
      return !1
    }

    function lp(VV) {
      const eV = VV.parentNode;
      return !(!eV || !Mp(eV)) && eV
    }
    const Lp = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      fp = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      mp = [...fp, "+", "-", "\u2212", "\u2013"],
      Kp = mp.length + 10,
      Hp = ["button", "a", "input", "select", "textarea", "label"],
      sp = ["button", "link", "tab", "menuitem", "option"],
      Sp = (VV, eV) => /[a-z0-9]/i.test(eV) ? vx(mp, eV) ? new RegExp(`\\b${eV}\\b`).test(VV) : VV.includes(eV) : VV === eV,
      Ip = VV => vx(Hp, VV.tagName.toLowerCase()) || vx(sp, (VV.getAttribute("role") || "").toLowerCase());

    function dp(VV) {
      let eV = "",
        xV = "";
      const JV = VV => {
        Mp(VV) && YQ(VV) && !UQ(VV) && (eV += ` ${Cp(VV)}`, xV = xV || VV.getAttribute("aria-label") || "", cy(VV.childNodes, JV))
      };
      JV(VV), eV = rx(eV.replace(/\s+/g, " "));
      const YV = (rQ(eV) ? eV : "").toLowerCase(),
        UV = VV.getAttribute("aria-label") || (YV ? "" : xV);
      return {
        safeText: YV,
        ariaLabel: rx(UV).toLowerCase()
      }
    }
    const Op = [".ph-no-rageclick", ".ph-no-capture"],
      VQ = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function eQ(VV, eV) {
      if (!Se || xQ(VV)) return !1;
      let xV, JV, YV;
      var UV, yV;
      if (Wx(eV) ? (xV = !!eV && Op, JV = void 0, YV = !1) : (xV = null !== (UV = null == eV ? void 0 : eV.css_selector_ignorelist) && void 0 !== UV ? UV : Op, JV = null == eV ? void 0 : eV.content_ignorelist, YV = null !== (yV = null == eV ? void 0 : eV.ignore_text_selection) && void 0 !== yV && yV), !1 === xV) return !1;
      if (YV && function(VV) {
          return !(!VV || !Mp(VV)) && (!!zp(VV, "textarea") || (zp(VV, "input") ? vx(VQ, (VV.getAttribute("type") || "").toLowerCase()) : function(VV) {
            var eV;
            if (VV.isContentEditable) return !0;
            const xV = null === (eV = VV.getAttribute) || void 0 === eV ? void 0 : eV.call(VV, "contenteditable");
            return "true" === xV || "" === xV
          }(VV)))
        }(VV)) return !1;
      const {
        targetElementList: pV
      } = JQ(VV, !1);
      return !(JV && function(VV, eV) {
        let xV, {
          safeText: JV,
          ariaLabel: YV
        } = eV;
        if (!0 === VV) xV = fp;
        else {
          if (!qx(VV)) return !1;
          if (VV.length > Kp) return Cy.error(`[PostHog] content_ignorelist array cannot exceed ${Kp} items. Use css_selector_ignorelist for more complex matching.`), !1;
          xV = VV.map((VV => VV.toLowerCase()))
        }
        return xV.some((VV => Sp(JV, VV) || Sp(YV, VV)))
      }(JV, function(VV, eV) {
        for (const xV of eV)
          if (Ip(xV)) return dp(xV);
        for (const xV of eV) {
          try {
            if ("pointer" !== (null == Se ? void 0 : Se.getComputedStyle(xV).getPropertyValue("cursor"))) break
          } catch (VV) {
            break
          }
          const eV = dp(xV);
          if (eV.safeText || eV.ariaLabel) return eV
        }
        return dp(VV)
      }(VV, pV)) || hp(pV, xV))
    }
    const xQ = VV => !VV || zp(VV, "html") || !Mp(VV),
      JQ = (VV, eV) => {
        if (!Se || xQ(VV)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let xV = !1;
        const JV = [VV];
        let YV = VV;
        for (; YV.parentNode && !zp(YV, "body");) {
          if (Wp(YV.parentNode)) {
            JV.push(YV.parentNode.host), YV = YV.parentNode.host;
            continue
          }
          const UV = lp(YV);
          if (!UV) break;
          if (eV || op.indexOf(UV.tagName.toLowerCase()) > -1) xV = !0;
          else try {
            const VV = Se.getComputedStyle(UV);
            VV && "pointer" === VV.getPropertyValue("cursor") && (xV = !0)
          } catch (VV) {}
          JV.push(UV), YV = UV
        }
        return {
          parentIsUsefulElement: xV,
          targetElementList: JV
        }
      };

    function YQ(VV) {
      const eV = new Set;
      let xV = 0;
      for (let UV = VV; UV.parentNode && !zp(UV, "body"); UV = UV.parentNode) {
        if (xV++ >= 1e3 || eV.has(UV)) return !1;
        eV.add(UV);
        const VV = Dp(UV);
        if (vx(VV, "ph-sensitive") || vx(VV, "ph-no-capture")) return !1
      }
      if (vx(Dp(VV), "ph-include")) return !0;
      const JV = VV.type || "";
      if (Ax(JV)) switch (JV.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const YV = VV.name || VV.id || "";
      return !Ax(YV) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(YV.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function UQ(VV) {
      return !!(zp(VV, "input") && !["button", "checkbox", "submit", "reset"].includes(VV.type) || zp(VV, "select") || zp(VV, "textarea") || "true" === VV.getAttribute("contenteditable"))
    }
    const yQ = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      pQ = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      QQ = [16, 15, 14, 13],
      nQ = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      wQ = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      ZQ = /[0-9A-Za-z_]/;

    function vQ(VV) {
      let eV = 0,
        xV = !1;
      for (let JV = VV.length - 1; JV >= 0; JV--) {
        let YV = VV.charCodeAt(JV) - 48;
        xV && (YV *= 2, YV > 9 && (YV -= 9)), eV += YV, xV = !xV
      }
      return eV % 10 == 0
    }

    function rQ(VV) {
      let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (Mx(VV)) return !1;
      if (Ax(VV)) {
        if (VV = rx(VV), eV ? yQ.test((VV || "").replace(/[- ]/g, "")) : function(VV) {
            let eV;
            for (pQ.lastIndex = 0; eV = pQ.exec(VV);) {
              const VV = eV[2];
              if (!VV) continue;
              const xV = VV.replace(/[- ]/g, "");
              for (let eV = 0; xV.length > eV; eV++)
                for (const VV of QQ) {
                  const JV = eV + VV;
                  if (xV.length >= JV) {
                    const VV = xV.slice(eV, JV);
                    if (yQ.test(VV) && vQ(VV)) return !0
                  }
                }
            }
            return !1
          }(VV)) return !1;
        if (eV ? nQ.test(VV) : function(VV) {
            let eV;
            for (wQ.lastIndex = 0; eV = wQ.exec(VV);) {
              const VV = eV[1],
                xV = eV[3];
              if (!(VV && xV && ZQ.test(VV) && ZQ.test(xV))) return !0
            }
            return !1
          }(VV)) return !1
      }
      return !0
    }

    function kQ(VV) {
      let eV = Cp(VV);
      return eV = `${eV} ${bQ(VV)}`.trim(), rQ(eV) ? eV : ""
    }

    function bQ(VV) {
      let eV = "";
      return VV && VV.childNodes && VV.childNodes.length && cy(VV.childNodes, (function(VV) {
        var xV;
        if (VV && "span" === (null === (xV = VV.tagName) || void 0 === xV ? void 0 : xV.toLowerCase())) try {
          const xV = Cp(VV);
          eV = `${eV} ${xV}`.trim(), VV.childNodes && VV.childNodes.length && (eV = `${eV} ${bQ(VV)}`.trim())
        } catch (VV) {
          Cy.error("[AutoCapture]", VV)
        }
      })), eV
    }

    function EQ(VV) {
      return VV.replace(/"|\\"/g, '\\"')
    }

    function BQ(VV) {
      const eV = VV.attr__class;
      if (eV) return qx(eV) ? eV : Rp(eV)
    }
    const jQ = ay("[Dead Clicks]"),
      qQ = () => !0,
      tQ = VV => {
        var eV;
        const xV = !!(null === (eV = VV.instance.persistence) || void 0 === eV ? void 0 : eV.get_property(hV)),
          JV = VV.instance.config.capture_dead_clicks;
        return Wx(JV) ? JV : !!Fx(JV) || xV
      };
    var FQ = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(VV, eV, xV) {
        this.instance = VV, this.isEnabled = eV, this.onCapture = xV, this.startIfEnabledOrStop()
      }
      onRemoteConfig(VV) {
        if (!VV.ok) return;
        const eV = VV.config;
        "captureDeadClicks" in eV && (this.instance.persistence && this.instance.persistence.register({
          [hV]: eV.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(VV) {
        var eV, xV, JV;
        (null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.initDeadClicksAutocapture) ? VV(): null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this.instance, "dead-clicks-autocapture", (eV => {
          eV ? jQ.error("failed to load script", eV) : VV()
        }))
      }
      _start() {
        var VV;
        if (Oe) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (VV = px.__PosthogExtensions__) || void 0 === VV ? void 0 : VV.initDeadClicksAutocapture)) {
            const VV = Fx(this.instance.config.capture_dead_clicks) ? jY({}, this.instance.config.capture_dead_clicks) : {};
            VV.__onCapture = this.onCapture, this.onCapture && (VV.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = px.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, VV), this._lazyLoadedDeadClicksAutocapture.start(Oe), jQ.info("starting...")
          }
        } else jQ.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, jQ.info("stopping..."))
      }
    };
    const TQ = ay("[SegmentIntegration]");

    function PQ(VV, eV) {
      let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const JV = VV.config.segment;
      if (!JV) return eV();
      const {
        analytics: YV,
        filterProperties: UV
      } = (VV => tx(VV.register))(yV = JV) ? {
        analytics: yV
      } : yV;
      var yV;
      ! function(VV, eV, xV, JV) {
        const YV = eV => {
            const YV = () => eV.anonymousId() || xp();
            VV.config.get_device_id = YV, JV && eV.id() && (VV.register({
              distinct_id: eV.id(),
              $device_id: YV()
            }), VV.persistence.set_property(je, Le)), xV(JV ? void 0 : eV.anonymousId() || void 0)
          },
          UV = eV.user();
        "then" in UV && tx(UV.then) ? UV.then(YV) : YV(UV)
      }(VV, YV, (xV => {
        YV.register(function(VV, eV) {
          let {
            filterProperties: xV
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || TQ.warn("This browser does not have Promise support, and can not use the segment integration");
          const JV = (JV, YV) => {
            if (!YV) return JV;
            const UV = !!eV && JV.event.anonymousId === eV && !JV.event.userId;
            UV || JV.event.userId || JV.event.anonymousId === VV.get_distinct_id() || (TQ.info("No userId set, resetting PostHog"), VV.reset()), UV || (eV = void 0), JV.event.userId && JV.event.userId !== VV.get_distinct_id() && (TQ.info("UserId set, identifying with PostHog"), VV.identify(JV.event.userId));
            let yV = VV.calculateEventProperties(YV, JV.event.properties);
            if (!Mx(xV)) {
              const VV = JV.event.properties || {},
                eV = {};
              for (const xV of Object.keys(yV)) Bx.call(VV, xV) || (eV[xV] = yV[xV]);
              const YV = ((VV, eV) => {
                const xV = qx(VV) ? VV : [VV];
                let JV = jY({}, eV);
                for (const YV of xV) try {
                  if (JV = YV(JV), Mx(JV)) return null
                } catch (VV) {
                  return TQ.error("Error in Segment filterProperties:", VV), null
                }
                return JV
              })(xV, eV);
              if (Mx(YV)) return JV;
              yV = YV
            }
            return JV.event.properties = Object.assign({}, yV, JV.event.properties), JV
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: VV => JV(VV, VV.event.event),
            page: VV => JV(VV, Ke),
            identify: VV => JV(VV, ue),
            screen: VV => JV(VV, "$screen")
          }
        }(VV, xV, {
          filterProperties: UV
        })).then((() => {
          eV()
        }), (VV => {
          TQ.error("Failed to register the Segment integration", VV), eV()
        }))
      }), xV)
    }
    const AQ = "posthog-js";

    function NQ(VV) {
      let {
        organization: eV,
        projectId: xV,
        prefix: JV,
        severityAllowList: YV = ["error"],
        sendExceptionsToPostHog: UV = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return yV => {
        var pV, QV, nV, wV, ZV;
        if ("*" !== YV && !YV.includes(yV.level) || !VV.__loaded) return yV;
        yV.tags || (yV.tags = {});
        const vV = VV.requestRouter.endpointFor("ui", `/project/${VV.config.token}/person/${VV.get_distinct_id()}`);
        yV.tags["PostHog Person URL"] = vV, VV.sessionRecordingStarted() && (yV.tags["PostHog Recording URL"] = VV.get_session_replay_url({
          withTimestamp: !0
        }));
        const rV = (null === (pV = yV.exception) || void 0 === pV ? void 0 : pV.values) || [],
          kV = rV.map((VV => jY(jY({}, VV), {}, {
            stacktrace: VV.stacktrace ? jY(jY({}, VV.stacktrace), {}, {
              type: "raw",
              frames: (VV.stacktrace.frames || []).map((VV => jY(jY({}, VV), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          bV = {
            $exception_message: (null === (QV = rV[0]) || void 0 === QV ? void 0 : QV.value) || yV.message,
            $exception_type: null === (nV = rV[0]) || void 0 === nV ? void 0 : nV.type,
            $exception_level: yV.level,
            $exception_list: kV,
            $sentry_event_id: yV.event_id,
            $sentry_exception: yV.exception,
            $sentry_exception_message: (null === (wV = rV[0]) || void 0 === wV ? void 0 : wV.value) || yV.message,
            $sentry_exception_type: null === (ZV = rV[0]) || void 0 === ZV ? void 0 : ZV.type,
            $sentry_tags: yV.tags
          };
        var EV;
        return eV && xV && (bV.$sentry_url = (JV || "https://sentry.io/organizations/") + eV + "/issues/?project=" + xV + "&query=" + yV.event_id), UV && (null === (EV = VV.exceptions) || void 0 === EV || EV.sendExceptionEvent(bV)), yV
      }
    }
    var XQ = class {
        constructor(VV, eV, xV, JV, YV, UV) {
          this.name = AQ, this.setupOnce = function(yV) {
            yV(NQ(VV, {
              organization: eV,
              projectId: xV,
              prefix: JV,
              severityAllowList: YV,
              sendExceptionsToPostHog: null == UV || UV
            }))
          }
        }
      },
      MQ = class {
        constructor(VV) {
          this._onSessionIdChange = (VV, eV, xV) => {
            xV && (xV.noSessionId || xV.activityTimeout || xV.sessionPastMaximumLength || xV.crossTabAdoption) && (Cy.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: VV,
              changeReason: xV
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = VV, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var VV;
          this._unsubscribeSessionId = null === (VV = this._instance.sessionManager) || void 0 === VV ? void 0 : VV.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var VV;
          null === (VV = this._unsubscribeSessionId) || void 0 === VV || VV.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(VV, eV) {
          var xV;
          const JV = this._previousPageViewProperties(VV, eV);
          return this._currentPageview = {
            pathname: null !== (xV = null == Se ? void 0 : Se.location.pathname) && void 0 !== xV ? xV : "",
            pageViewId: eV,
            timestamp: VV
          }, this._instance.scrollManager.resetContext(), JV
        }
        doPageLeave(VV) {
          var eV;
          return this._previousPageViewProperties(VV, null === (eV = this._currentPageview) || void 0 === eV ? void 0 : eV.pageViewId)
        }
        doEvent() {
          var VV;
          return {
            $pageview_id: null === (VV = this._currentPageview) || void 0 === VV ? void 0 : VV.pageViewId
          }
        }
        _previousPageViewProperties(VV, eV) {
          const xV = this._currentPageview;
          if (!xV) return {
            $pageview_id: eV
          };
          let JV = {
            $pageview_id: eV,
            $prev_pageview_id: xV.pageViewId
          };
          const YV = this._instance.scrollManager.getContext();
          if (YV && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: VV,
              lastScrollY: eV,
              maxScrollY: xV,
              maxContentHeight: UV,
              lastContentY: yV,
              maxContentY: pV
            } = YV;
            if (!(Px(VV) || Px(eV) || Px(xV) || Px(UV) || Px(yV) || Px(pV))) {
              VV = Math.ceil(VV), eV = Math.ceil(eV), xV = Math.ceil(xV), UV = Math.ceil(UV), yV = Math.ceil(yV), pV = Math.ceil(pV);
              const YV = VV > 1 ? ux(eV / VV, 0, 1, Cy) : 1,
                QV = VV > 1 ? ux(xV / VV, 0, 1, Cy) : 1,
                nV = UV > 1 ? ux(yV / UV, 0, 1, Cy) : 1,
                wV = UV > 1 ? ux(pV / UV, 0, 1, Cy) : 1;
              JV = hy(JV, {
                $prev_pageview_last_scroll: eV,
                $prev_pageview_last_scroll_percentage: YV,
                $prev_pageview_max_scroll: xV,
                $prev_pageview_max_scroll_percentage: QV,
                $prev_pageview_last_content: yV,
                $prev_pageview_last_content_percentage: nV,
                $prev_pageview_max_content: pV,
                $prev_pageview_max_content_percentage: wV
              })
            }
          }
          return xV.pathname && (JV.$prev_pageview_pathname = xV.pathname), xV.timestamp && (JV.$prev_pageview_duration = (VV.getTime() - xV.timestamp.getTime()) / 1e3), JV
        }
      };
    const zQ = ["flags", "surveys"],
      GQ = {
        [TV]: {
          exposure: "hidden"
        },
        [XV]: {
          exposure: "hidden"
        },
        [MV]: {
          exposure: "hidden"
        },
        [gV]: {
          exposure: "hidden"
        },
        [GV]: {
          exposure: "hidden"
        },
        [RV]: {
          exposure: "hidden"
        },
        [DV]: {
          exposure: "event"
        },
        [iV]: {
          exposure: "hidden"
        },
        [LV]: {
          exposure: "hidden"
        },
        [CV]: {
          exposure: "event"
        },
        [aV]: {
          exposure: "hidden"
        },
        [oV]: {
          exposure: "event"
        },
        [cV]: {
          exposure: "event"
        },
        [hV]: {
          exposure: "event"
        },
        [lV]: {
          exposure: "hidden"
        },
        [fV]: {
          exposure: "event"
        },
        [mV]: {
          exposure: "hidden"
        },
        [KV]: {
          exposure: "hidden"
        },
        [dV]: {
          exposure: "hidden"
        },
        [OV]: {
          exposure: "event"
        },
        [HV]: {
          exposure: "event",
          shouldSkipFromEventProperties: VV => Xx(VV)
        },
        [Ve]: {
          exposure: "event"
        },
        [ee]: {
          exposure: "event"
        },
        [xe]: {
          exposure: "event"
        },
        [Je]: {
          exposure: "event"
        },
        [Ye]: {
          exposure: "hidden"
        },
        [rV]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [pV]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [yV]: {
          exposure: "hidden"
        },
        [QV]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [jV]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [ZV]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [vV]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [qV]: {
          exposure: "hidden"
        },
        [tV]: {
          exposure: "hidden"
        },
        [bV]: {
          exposure: "hidden"
        },
        [kV]: {
          exposure: "hidden"
        },
        [ye]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [pe]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [Qe]: {
          exposure: "event"
        },
        [ne]: {
          exposure: "hidden"
        },
        [we]: {
          exposure: "hidden"
        },
        [Ze]: {
          exposure: "hidden"
        },
        [ve]: {
          exposure: "hidden"
        },
        [re]: {
          exposure: "hidden"
        },
        [ke]: {
          exposure: "event"
        },
        [be]: {
          exposure: "event"
        },
        [Ee]: {
          exposure: "event"
        },
        [Be]: {
          exposure: "event"
        },
        [EV]: {
          exposure: "hidden"
        },
        [BV]: {
          exposure: "hidden"
        },
        [Ue]: {
          exposure: "event"
        },
        [nV]: {
          exposure: "hidden"
        },
        [wV]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [je]: {
          exposure: "hidden"
        },
        [qe]: {
          exposure: "hidden"
        },
        [te]: {
          exposure: "hidden"
        },
        [Fe]: {
          exposure: "hidden"
        },
        [Te]: {
          exposure: "hidden"
        },
        [Pe]: {
          exposure: "hidden"
        },
        [Ae]: {
          exposure: "hidden"
        },
        [uV]: {
          exposure: "event"
        },
        [sV]: {
          exposure: "event"
        },
        [SV]: {
          exposure: "event"
        },
        [IV]: {
          exposure: "event"
        },
        [Me]: {
          exposure: "event"
        },
        [ze]: {
          exposure: "event"
        },
        [Ge]: {
          exposure: "hidden"
        },
        [We]: {
          exposure: "hidden"
        },
        [Re]: {
          exposure: "hidden"
        },
        [ge]: {
          exposure: "hidden"
        },
        [De]: {
          exposure: "hidden"
        },
        [ie]: {
          exposure: "hidden"
        },
        [Ce]: {
          exposure: "hidden"
        },
        [ae]: {
          exposure: "hidden"
        },
        [oe]: {
          exposure: "hidden"
        },
        [ce]: {
          exposure: "event"
        }
      },
      WQ = [
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
      RQ = VV => {
        const eV = GQ[VV];
        if (eV) return eV;
        for (const [xV, JV] of WQ)
          if (0 === VV.indexOf(xV)) return JV
      };

    function gQ() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (JV) {
        return
      }
    }
    const DQ = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (JV) {
          return !1
        }
      },
      iQ = (VV, eV) => VV >= eV && DQ(),
      CQ = (VV, eV, xV, JV) => {
        if (0 === VV) {
          if (DQ()) {
            const VV = eV + 1;
            return VV === xV && JV(), VV
          }
          return eV
        }
        return 0
      },
      aQ = (VV, eV) => {
        try {
          let xV;
          return JSON.stringify(VV, ((VV, eV) => {
            var JV;
            return Cx(eV) ? (null !== (JV = xV) && void 0 !== JV || (xV = new WeakMap), xV.has(eV) || xV.set(eV, my(eV)), xV.get(eV)) : "bigint" == typeof eV ? eV.toString() : eV
          }), eV)
        } catch (eV) {
          return bx(VV)
        }
      },
      oQ = VV => {
        const eV = null == Oe ? void 0 : Oe.createElement("a");
        return Px(eV) ? null : (eV.href = VV, eV)
      },
      cQ = function(VV, eV) {
        const xV = ((VV.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let JV;
        for (let YV = 0; xV.length > YV; YV++) {
          const VV = xV[YV].split("=");
          if (VV[0] === eV) {
            JV = VV;
            break
          }
        }
        if (!qx(JV) || 2 > JV.length) return "";
        {
          let VV = JV[1];
          try {
            VV = decodeURIComponent(VV)
          } catch (eV) {
            Cy.error("Skipping decoding for malformed query param: " + VV)
          }
          return VV.replace(/\+/g, " ")
        }
      },
      hQ = function(VV, eV, xV) {
        if (!VV || !eV || !eV.length) return VV;
        const JV = VV.split("#"),
          YV = JV[1],
          UV = (JV[0] || "").split("?"),
          yV = UV[1],
          pV = UV[0],
          QV = (yV || "").split("&"),
          nV = [];
        for (let ZV = 0; QV.length > ZV; ZV++) {
          const VV = QV[ZV].split("=");
          qx(VV) && (eV.includes(VV[0]) ? nV.push(VV[0] + "=" + xV) : nV.push(QV[ZV]))
        }
        let wV = pV;
        return null != yV && (wV += "?" + nV.join("&")), null != YV && (wV += "#" + YV), wV
      },
      lQ = function(VV, eV) {
        const xV = VV.match(new RegExp(eV + "=([^&]*)"));
        return xV ? xV[1] : null
      },
      LQ = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      fQ = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...LQ],
      mQ = "<masked>",
      KQ = ["li_fat_id"];

    function HQ(VV, eV, xV) {
      if (!Oe) return {};
      const JV = eV ? [...LQ, ...xV || []] : [],
        YV = uQ(hQ(Oe.URL, JV, mQ), VV),
        UV = function() {
          const VV = {};
          return cy(KQ, (function(eV) {
            const xV = Sy(eV);
            VV[eV] = xV || null
          })), VV
        }();
      return hy(UV, YV)
    }

    function uQ(VV, eV) {
      const xV = fQ.concat(eV || []),
        JV = {};
      return cy(xV, (function(eV) {
        const xV = cQ(VV, eV);
        JV[eV] = xV || null
      })), JV
    }

    function sQ(VV) {
      const eV = function(VV) {
          return VV ? 0 === VV.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === VV.search("https?://(.*)bing.com") ? "bing" : 0 === VV.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === VV.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(VV),
        xV = "yahoo" != eV ? "q" : "p",
        JV = {};
      if (!Xx(eV)) {
        JV.$search_engine = eV;
        const VV = Oe ? cQ(Oe.referrer, xV) : "";
        VV.length && (JV.ph_keyword = VV)
      }
      return JV
    }

    function SQ() {
      return navigator.language || navigator.userLanguage
    }

    function IQ() {
      const VV = SQ();
      return "string" == typeof VV ? VV.split("-")[0] : void 0
    }
    const dQ = "$direct";

    function OQ() {
      return (null == Oe ? void 0 : Oe.referrer) || dQ
    }

    function Vn(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const JV = VV ? [...LQ, ...eV || []] : [],
        YV = xV ? wY(null == Vx ? void 0 : Vx.href) : null == Vx ? void 0 : Vx.href,
        UV = null == YV ? void 0 : YV.substring(0, 1e3);
      return {
        r: OQ().substring(0, 1e3),
        u: UV ? hQ(UV, JV, mQ) : void 0
      }
    }

    function en(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var xV;
      const {
        r: JV,
        u: YV
      } = VV, UV = eV ? wY(YV) : YV, yV = {
        $referrer: JV,
        $referring_domain: null == JV ? void 0 : JV == dQ ? dQ : null === (xV = oQ(JV)) || void 0 === xV ? void 0 : xV.host
      };
      if (UV) {
        yV.$current_url = UV;
        const VV = oQ(UV);
        yV.$host = null == VV ? void 0 : VV.host, yV.$pathname = null == VV ? void 0 : VV.pathname;
        const eV = uQ(UV);
        hy(yV, eV)
      }
      if (JV) {
        const VV = sQ(JV);
        hy(yV, VV)
      }
      return yV
    }

    function xn() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (JV) {
        return
      }
    }
    const Jn = {
        flags: wV,
        surveys: pe
      },
      Yn = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      Un = VV => `${VV}_cookie_identity_change_pending`,
      yn = VV => {
        let eV = "",
          xV = 0;
        for (const JV of VV) {
          const VV = encodeURIComponent(JSON.stringify(JV).slice(1, -1)).length;
          if (xV + VV > 1e3) break;
          eV += JV, xV += VV
        }
        return eV
      },
      pn = "main",
      Qn = [rV, pV, QV, jV, ZV, wV, vV, bV],
      nn = VV => -1 !== Qn.indexOf(VV),
      wn = [GV, RV],
      Zn = VV => -1 !== wn.indexOf(VV),
      vn = (VV, eV) => {
        try {
          return JSON.stringify(VV) === JSON.stringify(eV)
        } catch (UV) {
          return VV === eV
        }
      },
      rn = VV => {
        if (!VV) return {};
        const eV = JSON.parse(VV);
        return Fx(eV) ? eV : {}
      },
      kn = (VV, eV) => {
        cy(VV, ((xV, JV) => {
          const YV = RQ(JV);
          YV && "event" !== YV.exposure || {}.hasOwnProperty.call(eV, JV) || delete VV[JV]
        }))
      };
    var bn = class {
      constructor(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !VV.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = VV, this._ownsSplitStorage = xV, this.props = {}, this._campaign_params_url = void 0, this._name = (VV => {
            let eV = "";
            return VV.token && (eV = VV.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), VV.persistence_name ? "ph_" + VV.persistence_name : "ph_" + eV + "_posthog"
          })(VV), this._disabled = VV.disable_persistence || !!eV, this.Cb = this._buildStorage(VV), this._splitStorage = this._resolveSplitStorage(VV), this.load(JV), this._markLoadedCrossTabFeatureFlagChangesPending(), VV.debug && Cy.info("Persistence loaded", VV.persistence, jY({}, this.props)), this.update_config(VV, VV, eV), this.save(), Se) {
          const VV = () => this.flush();
          uy(Se, "beforeunload", VV, {
            capture: !1
          }), uy(Se, "pagehide", VV, {
            capture: !1
          }), this._onStorage = VV => {
            if (this._splitStorageEligible && (!VV.storageArea || VV.storageArea === (null == Se ? void 0 : Se.localStorage)) && VV.key)
              if (VV.key !== this._name) {
                if (this._splitStorage) {
                  const eV = zQ.find((eV => VV.key === this._groupEntryName(eV)));
                  eV && this._syncCrossTabFeatureFlagProperties(VV.key, eV)
                }
              } else this._syncCrossTabFeatureFlagProperties(VV.key, pn)
          }, uy(Se, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(VV) {
        Object.entries(VV).forEach((VV => {
          let [eV, xV] = VV;
          const JV = this._pendingCrossTabFeatureFlagChanges.get(eV);
          if (!nn(eV) || !0 === JV) return;
          if (!0 === xV) return void this._setCrossTabFeatureFlagChangesPending(eV, !0);
          const YV = new Set(JV || []);
          xV.forEach((VV => YV.add(VV))), YV.size && this._setCrossTabFeatureFlagChangesPending(eV, YV)
        }))
      }
      onCrossTabFeatureFlagChange(VV) {
        return this._crossTabFeatureFlagHandlers.add(VV), () => this._crossTabFeatureFlagHandlers.delete(VV)
      }
      destroy() {
        this._onStorage && Se && (Se.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(VV, eV) {
        let xV, JV, YV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (JV = np._get(VV), Xx(JV)) {
            const VV = this._slotWriteState(eV);
            return VV.storageValue = null, eV !== pn && (VV.persisted = !1), !1
          }
          xV = rn(JV)
        } catch (VV) {
          return !1
        }
        const UV = eV === pn ? xV : np._parse(this._name);
        if (UV && this._hasCrossTabFeatureFlagIdentityMismatch(UV)) return !1;
        const yV = this._mergeCrossTabFeatureFlagProperties(xV, eV, YV);
        return eV === pn && this._splitStorage && !vn(this._partitionProps().main, xV) || this._rememberCrossTabStorageFingerprint(xV, eV, !0, JV), yV
      }
      _hasCrossTabFeatureFlagIdentityMismatch(VV) {
        const eV = this.props[PV],
          xV = VV[PV];
        return !Px(eV) && !Px(xV) && eV !== xV
      }
      _rememberCrossTabStorageFingerprint(VV, eV, xV, JV) {
        const YV = this._slotWriteState(eV);
        YV.storageValue = JV, eV !== pn && (YV.persisted = xV);
        try {
          YV.fingerprint = this._entryFingerprint(VV, eV)
        } catch (VV) {
          YV.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(VV, eV, xV) {
        let JV = !1;
        return Qn.forEach((xV => {
          var YV;
          const UV = null === (YV = RQ(xV)) || void 0 === YV ? void 0 : YV.storageGroup;
          if (eV === pn && this._splitStorage && UV || eV !== pn && UV !== eV) return;
          const yV = xV in VV,
            pV = this._mergePendingCrossTabFeatureFlagChanges(xV, yV ? VV[xV] : void 0),
            QV = this._pendingCrossTabFeatureFlagChanges.has(xV) ? xV in this.props : yV;
          QV === xV in this.props && vn(pV, this.props[xV]) || (QV ? this._setProp(xV, pV, !1) : this._deleteProp(xV, !1), JV = !0)
        })), JV && xV && this._crossTabFeatureFlagHandlers.forEach((VV => VV())), JV
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const VV = np._get(this._name),
            eV = this._slotWriteState(pn);
          let xV, JV = !1,
            YV = !1;
          if (VV !== eV.storageValue)
            if (Xx(VV)) eV.storageValue = null;
            else {
              if (xV = rn(VV), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(xV), this._crossTabFeatureFlagIdentityMismatch) return !1;
              YV = this._mergeCrossTabFeatureFlagProperties(xV, pn, !1), !this._splitStorage || vn(this._partitionProps().main, xV) ? this._rememberCrossTabStorageFingerprint(xV, pn, !0, VV) : eV.storageValue = VV, JV = !0
            } return this._splitStorage && zQ.forEach((VV => {
            const eV = np._get(this._groupEntryName(VV)),
              UV = this._slotWriteState(VV),
              yV = xV || {},
              pV = JV && Qn.some((eV => {
                var xV;
                return (null === (xV = RQ(eV)) || void 0 === xV ? void 0 : xV.storageGroup) === VV && eV in yV
              }));
            if (eV === UV.storageValue && !pV) return;
            if (Xx(eV)) return UV.storageValue = null, UV.persisted = !1, void(pV && (YV = this._mergeCrossTabFeatureFlagProperties(yV, VV, !1) || YV));
            const QV = rn(eV);
            YV = this._mergeCrossTabFeatureFlagProperties(QV, VV, !1) || YV, this._rememberCrossTabStorageFingerprint(QV, VV, !0, eV)
          })), YV
        } catch (JV) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(VV, eV) {
        this._pendingCrossTabFeatureFlagChanges.set(VV, eV);
        const xV = RQ(VV);
        (null == xV ? void 0 : xV.volatile) || (this._slotWriteState((this._splitStorage ? null == xV ? void 0 : xV.storageGroup : void 0) || pn).fingerprint = void 0, this._markGroupDirty(VV))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        Qn.forEach((VV => this._pendingCrossTabFeatureFlagChanges.set(VV, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const VV = np._get(this._name),
            eV = rn(VV);
          this._slotWriteState(pn).storageValue = VV, Qn.forEach((VV => {
            var xV;
            const JV = this._splitStorage ? null === (xV = RQ(VV)) || void 0 === xV ? void 0 : xV.storageGroup : void 0,
              YV = JV ? np._get(this._groupEntryName(JV)) : null;
            if (JV) {
              const VV = this._slotWriteState(JV);
              VV.storageValue = YV, VV.persisted = !Xx(YV)
            }
            const UV = JV && !Xx(YV) ? rn(YV) : eV;
            VV in this.props ? this._markPendingCrossTabFeatureFlagChanges(VV, UV[VV], this.props[VV]) : VV in UV && this._setCrossTabFeatureFlagChangesPending(VV, !0)
          }))
        } catch (JV) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(VV, eV) {
        const xV = this._pendingCrossTabFeatureFlagChanges.get(VV);
        if (!xV) return eV;
        if (!0 === xV) return this.props[VV];
        if ("$active_feature_flags" === VV) {
          const JV = new Set(qx(eV) ? eV : []),
            YV = new Set(qx(this.props[VV]) ? this.props[VV] : []);
          return xV.forEach((VV => YV.has(VV) ? JV.add(VV) : JV.delete(VV))), Array.from(JV)
        }
        const JV = Fx(eV) ? jY({}, eV) : {},
          YV = Fx(this.props[VV]) ? this.props[VV] : {};
        return xV.forEach((VV => {
          VV in YV ? JV[VV] = YV[VV] : delete JV[VV]
        })), JV
      }
      _markPendingCrossTabFeatureFlagChanges(VV, eV, xV) {
        if (!nn(VV)) return;
        const JV = this._pendingCrossTabFeatureFlagChanges.get(VV);
        if (!0 === JV) return;
        let YV = eV;
        if (this._splitStorageEligible) try {
          var UV;
          const eV = this._splitStorage ? null === (UV = RQ(VV)) || void 0 === UV ? void 0 : UV.storageGroup : void 0,
            xV = eV ? this._groupEntryName(eV) : this._name;
          YV = rn(np._get(xV))[VV]
        } catch (VV) {}
        const yV = new Set(JV || []);
        if ("$active_feature_flags" === VV) {
          if (!Px(eV) && !qx(eV) || !Px(YV) && !qx(YV) || !qx(xV)) return void this._setCrossTabFeatureFlagChangesPending(VV, !0);
          const JV = new Set(eV || []),
            UV = new Set(YV || []),
            pV = new Set(xV);
          new Set([...JV, ...pV]).forEach((VV => {
            JV.has(VV) !== pV.has(VV) && yV.add(VV)
          })), yV.forEach((VV => {
            UV.has(VV) === pV.has(VV) && yV.delete(VV)
          }))
        } else {
          if (!Fx(xV)) return void(vn(YV, xV) ? this._pendingCrossTabFeatureFlagChanges.delete(VV) : this._setCrossTabFeatureFlagChangesPending(VV, !0));
          {
            if (!Px(eV) && !Fx(eV) || Px(eV) && Tx(xV) && Px(YV)) return void this._setCrossTabFeatureFlagChangesPending(VV, !0);
            const JV = Fx(eV) ? eV : {},
              UV = Fx(YV) ? YV : {};
            new Set([...Object.keys(JV), ...Object.keys(xV)]).forEach((VV => {
              VV in JV == VV in xV && vn(JV[VV], xV[VV]) || yV.add(VV)
            })), yV.forEach((VV => {
              VV in UV == VV in xV && vn(UV[VV], xV[VV]) && yV.delete(VV)
            }))
          }
        }
        yV.size ? this._setCrossTabFeatureFlagChangesPending(VV, yV) : this._pendingCrossTabFeatureFlagChanges.delete(VV)
      }
      _saveDebounceMs() {
        var VV;
        const eV = null === (VV = this._config) || void 0 === VV ? void 0 : VV.persistence_save_debounce_ms;
        return zx(eV) && eV > 0 ? eV : 0
      }
      _rememberCurrentCookieProperties(VV) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (VV) try {
            const eV = bp(VV, this._config.cookie_persisted_properties || []),
              xV = Bp(eV, this._config.cookie_persisted_properties || []),
              JV = JSON.stringify(eV) + "|" + JSON.stringify(xV),
              YV = pp._get(this._name) || void 0;
            YV && qp(this._name, YV) === JV && (this._lastSeenCookiePropertiesFingerprint = JV, this._lastSeenMainCookieValue = YV)
          } catch (VV) {} else try {
            const VV = pp._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = VV ? qp(this._name, VV) : void 0, this._lastSeenMainCookieValue = VV
          } catch (VV) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(VV) {
        let eV, xV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !xV || this._cookieSyncSuppressed || !VV.cookieWinsOnConflict || "localstorage+cookie" !== VV.persistence.toLowerCase()) return !1;
        try {
          eV = pp._get(this._name) || void 0
        } catch (VV) {}
        if (!eV || eV === this._lastSeenMainCookieValue) return !1;
        const JV = qp(this._name, eV);
        let YV;
        try {
          YV = kp(JSON.parse(eV))
        } catch (VV) {
          return !1
        }
        if ((pp._get(this._name) || void 0) !== eV) return !1;
        this._lastSeenCookiePropertiesFingerprint = JV, this._lastSeenMainCookieValue = eV;
        const UV = jp(this._name, eV),
          yV = [...Zp, ...UV.properties],
          vV = {};
        if (Object.keys(YV).forEach((VV => {
            const eV = YV[VV];
            (Px(eV) || Xx(eV) || "" === eV || "$user_state" === VV && "anonymous" !== eV && "identified" !== eV) && (vV[VV] = !0, delete YV[VV])
          })), Tx(YV)) return !1;
        const BV = "distinct_id" in YV || "anonymous" === YV.$user_state || "identified" === YV.$user_state,
          qV = this.props,
          tV = qV[PV],
          FV = qV[je],
          TV = hy({}, qV);
        [...Zp, ...VV.cookie_persisted_properties || []].forEach((VV => {
          if (-1 !== yV.indexOf(VV) && !(VV in YV) && !vV[VV] && (BV || "distinct_id" !== VV && "$user_state" !== VV)) {
            const eV = TV[VV];
            (UV.isValid || -1 === Zp.indexOf(VV) || !1 !== eV && 0 !== eV) && delete TV[VV]
          }
        })), this.props = hy(TV, YV), Qn.forEach((VV => {
          const eV = VV in this.props;
          VV in qV === eV && vn(qV[VV], this.props[VV]) || (eV ? this._markPendingCrossTabFeatureFlagChanges(VV, qV[VV], this.props[VV]) : this._setCrossTabFeatureFlagChangesPending(VV, !0))
        })), !BV || "$user_state" in YV || "$user_state" in this.props || this._setProp(je, le);
        const AV = this.props[PV],
          NV = this.props[je];
        return !BV || AV === tV && NV === FV || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, Pp._set(Un(this._name), !0), this._deleteProp(bV), this._deleteProp(pV), this._deleteProp(rV), this._deleteProp(QV), this._deleteProp(jV), this._deleteProp(ZV), this._deleteProp(wV), this._deleteProp(nV), this._deleteProp(EV), "anonymous" !== NV || "identified" !== FV && "anonymous" !== YV.$user_state && (Px(tV) || AV === tV) || (kn(this.props, YV), this._deleteProp(kV)), "identified" === NV ? this.props.$user_id = AV : delete this.props.$user_id, this._deleteProp(XV)), !0
      }
      consumeCookieIdentityChange() {
        const VV = Un(this._name),
          eV = this._cookieIdentityChangePending || !!Pp._get(VV);
        return this._cookieIdentityChangePending = !1, eV && Pp._remove(VV), eV
      }
      _beginCookieSyncSuppression() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !VV || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (Px(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[pn], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          VV ? this._publishSuppressedCookieSnapshot() : Px(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(VV) {
        -1 === Yn.indexOf(VV.persistence.toLowerCase()) && (Cy.critical("Unknown persistence type " + VV.persistence + "; falling back to localStorage+cookie"), VV.persistence = "localStorage+cookie");
        const eV = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const JV = [...Zp, ...VV];
          return jY(jY({}, np), {}, {
            _parse(VV) {
              try {
                let UV, yV = {};
                try {
                  UV = pp._get(VV) || void 0, yV = UV ? kp(JSON.parse(UV)) : {}
                } catch (VV) {}
                const pV = JSON.parse(np._get(VV) || "{}");
                let QV;
                if (eV) {
                  const eV = jp(VV, UV),
                    xV = [...Zp, ...eV.properties],
                    nV = {};
                  Object.keys(yV).forEach((VV => {
                    const eV = yV[VV];
                    Xx(eV) || "" === eV || "$user_state" === VV && "anonymous" !== eV && "identified" !== eV || (nV[VV] = eV)
                  }));
                  const wV = "distinct_id" in nV || "anonymous" === nV.$user_state || "identified" === nV.$user_state;
                  if (Object.keys(nV).length > 0) {
                    var YV;
                    const VV = pV[PV],
                      UV = null !== (YV = pV.$user_state) && void 0 !== YV ? YV : le;
                    JV.forEach((VV => {
                      if (-1 !== xV.indexOf(VV) && !(VV in yV) && (wV || "distinct_id" !== VV && "$user_state" !== VV)) {
                        const xV = pV[VV];
                        (eV.isValid || -1 === Zp.indexOf(VV) || !1 !== xV && 0 !== xV) && delete pV[VV]
                      }
                    })), !wV || "$user_state" in yV || "$user_state" in pV || (pV[je] = le), !wV || ("distinct_id" in nV ? nV[PV] : pV[PV]) === VV && ("$user_state" in nV ? nV[je] : pV[je]) === UV || (wp.forEach((VV => delete pV[VV])), "identified" === nV.$user_state && "distinct_id" in nV ? pV.$user_id = nV[PV] : delete pV.$user_id, "identified" !== nV.$user_state && (delete pV[Ue], delete pV[kV]), delete pV.__alias)
                  }
                  QV = hy(pV, nV)
                } else QV = hy(yV, pV);
                return xV() || np._set(VV, QV), QV
              } catch (VV) {}
              return null
            },
            _set(xV, JV, YV, UV, yV, pV) {
              const QV = np._set(xV, JV, void 0, void 0, pV);
              try {
                const nV = bp(JV, VV);
                if (Object.keys(nV).length) {
                  if (eV) {
                    const eV = vp(xV),
                      wV = Bp(nV, VV);
                    if (pp._set(eV, wV, YV, UV, yV, pV), pp._get(eV) !== JSON.stringify(wV)) {
                      pp._remove(eV, UV);
                      const VV = bp(JV);
                      return pp._set(xV, VV, YV, UV, yV, pV), QV
                    }
                  }
                  pp._set(xV, nV, YV, UV, yV, pV)
                }
              } catch (VV) {
                np._error(VV)
              }
              return QV
            },
            _remove(VV, eV) {
              try {
                null == Se || Se.localStorage.removeItem(VV), pp._remove(VV, eV), pp._remove(vp(VV), eV)
              } catch (VV) {
                np._error(VV)
              }
            }
          })
        }(VV.cookie_persisted_properties || [], VV.cookieWinsOnConflict, (() => !!this._disabled));
        let xV, JV = !1,
          YV = !1;
        const UV = VV.persistence.toLowerCase();
        return "localstorage" === UV && np._is_supported() ? (xV = np, YV = !0) : "localstorage+cookie" === UV && eV._is_supported() ? (xV = eV, YV = !0, JV = !0) : "sessionstorage" === UV && Pp._is_supported() ? xV = Pp : "memory" === UV ? xV = Fp : "cookie" === UV && pp._is_supported() ? (xV = pp, JV = !0) : eV._is_supported() ? (xV = eV, YV = !0, JV = !0) : pp._is_supported() ? (xV = pp, JV = !0) : xV = Fp, this._splitStorageEligible = YV, this._storesIdentityInCookie = JV, xV
      }
      _groupEntryName(VV) {
        return `${this._name}__${VV}`
      }
      _resolveSplitStorage(VV) {
        return this._splitStorageEligible && !!VV.split_storage
      }
      properties() {
        const VV = {};
        return cy(this.props, ((eV, xV) => {
          const JV = RQ(xV);
          if (!JV || "event" === JV.exposure) {
            var YV;
            if (null == JV || null === (YV = JV.shouldSkipFromEventProperties) || void 0 === YV ? void 0 : YV.call(JV, eV)) return;
            VV[xV] = eV
          }
        })), VV
      }
      load() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !VV) return;
        const eV = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          xV = eV ? np._parse(this._name) : null;
        let JV = {};
        if (eV) try {
          JV = kp(pp._parse(this._name)), cy(JV, ((VV, eV) => {
            (Px(VV) || Xx(VV) || "" === VV) && delete JV[eV]
          }))
        } catch (VV) {}
        const YV = this.Cb._parse(this._name);
        if (YV && (this.props = hy({}, YV)), this._splitStorage && this._loadGroupEntries(), eV && YV) {
          var UV, yV;
          const VV = null == xV ? void 0 : xV[PV],
            eV = null !== (UV = null == xV ? void 0 : xV.$user_state) && void 0 !== UV ? UV : le,
            pV = YV[PV],
            QV = null !== (yV = YV.$user_state) && void 0 !== yV ? yV : le;
          if (pV !== VV || QV !== eV) {
            this._cookieIdentityChangePending = !0, this._disabled || Pp._set(Un(this._name), !0);
            const xV = hy({}, this.props);
            wp.forEach((VV => delete xV[VV])), "anonymous" !== QV || "identified" !== eV && "anonymous" !== JV.$user_state && (Px(VV) || pV === VV) || (kn(xV, JV), delete xV[kV]), this.props = xV;
            const YV = new Set;
            wp.forEach((VV => {
              var eV;
              const xV = null === (eV = RQ(VV)) || void 0 === eV ? void 0 : eV.storageGroup;
              xV && YV.add(xV)
            })), YV.forEach((VV => {
              if (this._disabled) return;
              const eV = {};
              cy(this.props, ((xV, JV) => {
                var YV;
                (null === (YV = RQ(JV)) || void 0 === YV ? void 0 : YV.storageGroup) === VV && (eV[JV] = xV)
              })), Tx(eV) ? (np._remove(this._groupEntryName(VV)), this._slotState[VV] = {}) : np._set(this._groupEntryName(VV), eV) && (this._slotState[VV] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(eV, VV)
              })
            }))
          }
        }
        Pp._get(Un(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const VV of zQ) {
          const eV = np._parse(this._groupEntryName(VV));
          if (eV && !Tx(eV)) {
            const xV = this._slotWriteState(VV);
            xV.persisted = !0, this._mainCarriesGroupKey(VV) || (xV.fingerprint = this._entryFingerprint(eV, VV)), this._groupEntryIsStale(VV, eV) || hy(this.props, eV)
          }
        }
      }
      _mainCarriesGroupKey(VV) {
        return Object.keys(this.props).some((eV => {
          var xV;
          return (null === (xV = RQ(eV)) || void 0 === xV ? void 0 : xV.storageGroup) === VV
        }))
      }
      _groupEntryIsStale(VV, eV) {
        const xV = Jn[VV];
        if (!xV) return !1;
        const JV = eV[xV],
          YV = this.props[xV];
        return zx(JV) && zx(YV) && YV > JV
      }
      refreshKey(VV) {
        var eV;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(VV)) return;
        const xV = this._splitStorage ? null === (eV = RQ(VV)) || void 0 === eV ? void 0 : eV.storageGroup : void 0,
          JV = xV ? np._parse(this._groupEntryName(xV)) : this.Cb._parse(this._name);
        if (JV && VV in JV) this._setProp(VV, JV[VV], !1);
        else {
          if (xV) {
            const eV = this.Cb._parse(this._name);
            if (eV && VV in eV) return void this._setProp(VV, eV[VV], !1)
          }
          this._deleteProp(VV, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const VV = this._saveDebounceMs();
        VV > 0 ? Px(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), VV)) : this._writeNow()
      }
      flush() {
        Px(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !VV) return;
        VV || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || wn.forEach((VV => this.refreshKey(VV))));
        const eV = !VV && !this._storageMigrationInProgress;
        eV || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const xV = !!eV && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && Cy.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(xV && this._crossTabFeatureFlagHandlers.forEach((VV => VV())));
        const JV = this._writeEntry(this.Cb, this._name, this.props, pn);
        "written" === JV && this._rememberCurrentCookieProperties(this.props), "failed" !== JV && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), xV && this._crossTabFeatureFlagHandlers.forEach((VV => VV()))
      }
      _writeNowSplit() {
        const {
          main: VV,
          groups: eV
        } = this._partitionProps(), xV = this._writeEntry(this.Cb, this._name, VV, pn);
        "written" === xV && this._rememberCurrentCookieProperties(VV), "failed" !== xV && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), Qn.forEach((VV => {
          var eV;
          (null === (eV = RQ(VV)) || void 0 === eV ? void 0 : eV.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(VV)
        })));
        for (const YV of zQ) {
          var JV;
          const VV = eV[YV];
          if (Tx(VV) && !(null === (JV = this._slotState[YV]) || void 0 === JV ? void 0 : JV.persisted)) {
            Qn.forEach((VV => {
              var eV;
              (null === (eV = RQ(VV)) || void 0 === eV ? void 0 : eV.storageGroup) === YV && this._pendingCrossTabFeatureFlagChanges.delete(VV)
            }));
            continue
          }
          const xV = this._writeEntry(np, this._groupEntryName(YV), VV, YV);
          "failed" !== xV && Qn.forEach((VV => {
            const eV = RQ(VV);
            (null == eV ? void 0 : eV.storageGroup) !== YV || "written" !== xV && eV.volatile || this._pendingCrossTabFeatureFlagChanges.delete(VV)
          }))
        }
      }
      _partitionProps() {
        const VV = {},
          eV = {
            flags: {},
            surveys: {}
          };
        return cy(this.props, ((xV, JV) => {
          var YV;
          const UV = null === (YV = RQ(JV)) || void 0 === YV ? void 0 : YV.storageGroup;
          UV ? eV[UV][JV] = xV : VV[JV] = xV
        })), {
          main: VV,
          groups: eV
        }
      }
      _entryFingerprint(VV, eV) {
        if (eV === pn) return JSON.stringify(VV) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const xV = {};
        return cy(VV, ((VV, eV) => {
          var JV;
          xV[eV] = (null === (JV = RQ(eV)) || void 0 === JV ? void 0 : JV.volatile) ? "__volatile__" : VV
        })), JSON.stringify(xV)
      }
      _writeEntry(VV, eV, xV, JV) {
        const YV = this._slotWriteState(JV);
        if (JV !== pn && !YV.Jb && !Px(YV.fingerprint)) return "skipped";
        let UV;
        try {
          if (UV = this._entryFingerprint(xV, JV), UV === YV.fingerprint) return YV.Jb = !1, "skipped"
        } catch (VV) {
          UV = void 0
        }
        return VV._set(eV, xV, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (YV.Jb = !1, JV !== pn && (YV.persisted = !0), Px(UV) || (YV.fingerprint = UV), this._splitStorageEligible && (YV.storageValue = np._get(eV)), "written") : (this._config.debug && Cy.warn(`failed to persist storage entry "${eV}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: VV = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), Px(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Cb._remove(this._name, !1), this.Cb._remove(this._name, !0), !VV && this._ownsSplitStorage)
          for (const eV of zQ) np._remove(this._groupEntryName(eV));
        VV ? delete this._slotState[pn] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(VV, eV, xV) {
        if (Fx(VV)) {
          this.syncCookieProperties(), Px(eV) && (eV = "None"), this._expire_days = Px(xV) ? this._default_expiry : xV;
          let JV = !1;
          if (cy(VV, ((VV, xV) => {
              this.props.hasOwnProperty(xV) && this.props[xV] !== eV || (this._setProp(xV, VV), JV = !0)
            })), JV) return this.save(), !0
        }
        return !1
      }
      register(VV, eV) {
        if (Fx(VV)) {
          this.syncCookieProperties(), this._expire_days = Px(eV) ? this._default_expiry : eV;
          let xV = !1;
          if (cy(VV, ((eV, JV) => {
              VV.hasOwnProperty(JV) && (this.props[JV] !== eV || Fx(eV) || qx(eV)) && (this._setProp(JV, eV), xV = !0)
            })), xV) return this.save(), !0
        }
        return !1
      }
      unregister(VV) {
        this.syncCookieProperties();
        const eV = "string" == typeof VV ? [VV] : VV;
        let xV = !1;
        for (const JV of eV) JV in this.props && (this._deleteProp(JV), xV = !0);
        xV && this.save()
      }
      update_campaign_params() {
        const VV = null == Oe ? void 0 : Oe.URL;
        if (VV === this._campaign_params_url) return;
        const eV = HQ(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          xV = !Tx(fy(eV));
        return xV && this.register(eV), this._campaign_params_url = VV, xV ? eV : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const VV = null == Oe ? void 0 : Oe.referrer;
          return VV ? sQ(VV) : {}
        }())
      }
      update_referrer_info() {
        var VV;
        this.register_once({
          $referrer: OQ(),
          $referring_domain: (null == Oe ? void 0 : Oe.referrer) && (null === (VV = oQ(Oe.referrer)) || void 0 === VV ? void 0 : VV.host) || dQ
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const VV = Vn(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [Pe]: this._storesIdentityInCookie ? {
            r: yn(VV.r),
            u: VV.u ? yn(VV.u) : void 0
          } : VV
        }, void 0)
      }
      get_initial_props() {
        const VV = {};
        cy([Te, Fe], (eV => {
          const xV = this.props[eV];
          xV && cy(xV, (function(eV, xV) {
            VV["$initial_" + kx(xV)] = eV
          }))
        }));
        const eV = this.props[Pe];
        if (eV) {
          const xV = function(VV) {
            const eV = en(VV, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              xV = {};
            return cy(eV, (function(VV, eV) {
              xV[`$initial_${kx(eV)}`] = VV
            })), xV
          }(eV, this._config.disable_capture_url_hashes);
          hy(VV, xV)
        }
        return VV
      }
      safe_merge(VV) {
        return cy(this.props, (function(eV, xV) {
          xV in VV || (VV[xV] = eV)
        })), VV
      }
      update_config(VV, eV, xV) {
        const JV = VV.persistence !== eV.persistence,
          YV = !((VV, eV) => {
            if (VV.length !== eV.length) return !1;
            const xV = [...VV].sort(),
              JV = [...eV].sort();
            return xV.every(((VV, eV) => VV === JV[eV]))
          })(VV.cookie_persisted_properties || [], eV.cookie_persisted_properties || []),
          UV = JV || YV,
          yV = VV.cookieWinsOnConflict !== eV.cookieWinsOnConflict,
          pV = VV.disable_persistence || !!xV,
          QV = !!this._disabled && !pV;
        pV || this._syncCookieProperties(eV, QV), this._config = VV, !pV && (JV || YV || yV) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(jY(jY({}, VV), {}, {
          cookie_persisted_properties: eV.cookie_persisted_properties
        }), QV));
        const nV = UV || yV ? this._buildStorage(VV) : this.Cb;
        this._truncateExistingPersonInfoForCookie();
        const wV = this._resolveSplitStorage(VV),
          ZV = UV || wV !== this._splitStorage,
          vV = !pV && (ZV || VV.cross_subdomain_cookie !== this._cross_subdomain || VV.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(QV);
        this._storageMigrationInProgress = ZV;
        try {
          if (this._default_expiry = this._expire_days = VV.cookie_expiration, this.set_disabled(pV), this.set_cross_subdomain(VV.cross_subdomain_cookie), this.set_secure(VV.secure_cookie), ZV) {
            const VV = this.props;
            this.clear(), this.Cb = nV, this._splitStorage = wV, this.props = VV, this.save()
          } else yV && (this.Cb = nV, pV || (delete this._slotState[pn], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, vV && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const VV = this.props[Pe];
        if (!this._storesIdentityInCookie || !Fx(VV) || "string" != typeof VV.r) return;
        const eV = yn(VV.r),
          xV = "string" == typeof VV.u ? yn(VV.u) : VV.u;
        eV === VV.r && xV === VV.u || this._setProp(Pe, jY(jY({}, VV), {}, {
          r: eV,
          u: xV
        }))
      }
      set_disabled(VV) {
        this._disabled = VV, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(VV) {
        VV !== this._cross_subdomain && (this._cross_subdomain = VV, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(VV) {
        VV !== this._secure && (this._secure = VV, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(VV, eV) {
        const xV = this.props.__timers || {};
        xV[VV] = eV, this._setProp(gV, xV), this.save()
      }
      remove_event_timer(VV) {
        const eV = this.props.__timers || {},
          xV = eV[VV];
        return Px(xV) || (delete eV[VV], this._setProp(gV, eV), this.save()), xV
      }
      get_property(VV) {
        return this.props[VV]
      }
      set_property(VV, eV) {
        this._setProp(VV, eV), this.save()
      }
      _setProp(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var JV;
        const YV = this.props[VV];
        this.props[VV] = eV, xV && ("distinct_id" !== VV && "$user_state" !== VV || YV === eV || (this._localIdentityChangePending = !0), Zn(VV) && !vn(YV, eV) && this._metaIdentifierChangePending.add(VV), this._markPendingCrossTabFeatureFlagChanges(VV, YV, eV), (null === (JV = RQ(VV)) || void 0 === JV ? void 0 : JV.volatile) || this._markGroupDirty(VV))
      }
      _deleteProp(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[VV], eV && (nn(VV) && this._setCrossTabFeatureFlagChangesPending(VV, !0), Zn(VV) && this._metaIdentifierChangePending.add(VV), this._markGroupDirty(VV))
      }
      _markGroupDirty(VV) {
        var eV;
        const xV = null === (eV = RQ(VV)) || void 0 === eV ? void 0 : eV.storageGroup;
        xV && (this._slotWriteState(xV).Jb = !0)
      }
      _slotWriteState(VV) {
        return this._slotState[VV] || (this._slotState[VV] = {})
      }
    };
    const En = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      Bn = "events",
      jn = "cancelEvents",
      qn = "popover",
      tn = "api",
      Fn = "widget",
      Tn = "survey shown",
      Pn = "survey dismissed",
      An = "survey sent",
      Nn = "$survey_id",
      Xn = "$survey_iteration",
      Mn = "$survey_last_seen_date",
      zn = "popover",
      Gn = "inline";

    function Wn(VV) {
      let eV = !0;
      return {
        dispose() {
          if (eV) {
            eV = !1;
            const xV = VV();
            xV && tx(xV.then) && xV.then(void 0, (() => {}))
          }
        }
      }
    }
    const Rn = "product tour shown",
      gn = "$product_tour_last_seen_date",
      Dn = "$product_tour_type",
      Cn = ay("[RateLimiter]");
    var an = class {
      constructor(VV) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = VV => {
          const eV = VV.text;
          if (eV && eV.length) try {
            (JSON.parse(eV).quota_limited || []).forEach((VV => {
              Cn.info(`${VV||"events"} is quota limited.`), this.serverLimits[VV] = (new Date).getTime() + 6e4
            }))
          } catch (VV) {
            return void Cn.warn(`could not rate limit - continuing. Error: "${null==VV?void 0:VV.message}"`, {
              text: eV
            })
          }
        }, this.instance = VV, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var VV;
        return (null === (VV = this.instance.config.rate_limiting) || void 0 === VV ? void 0 : VV.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var VV;
        return Math.max((null === (VV = this.instance.config.rate_limiting) || void 0 === VV ? void 0 : VV.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var eV, xV, JV;
        const {
          captureEventsBurstLimit: YV,
          captureEventsPerSecond: UV
        } = this, yV = (new Date).getTime(), pV = null !== (eV = null === (xV = this.instance.persistence) || void 0 === xV ? void 0 : xV.get_property("$capture_rate_limit")) && void 0 !== eV ? eV : {
          tokens: YV,
          last: yV
        };
        pV.tokens += (yV - pV.last) / 1e3 * UV, pV.last = yV, pV.tokens > YV && (pV.tokens = YV);
        const QV = 1 > pV.tokens;
        if (QV || VV || (pV.tokens = Math.max(0, pV.tokens - 1)), QV && !VV) {
          const VV = (zx(pV.dropped) ? pV.dropped : 0) + 1;
          pV.dropped = VV, !this.lastEventRateLimited && this._captureWarning(VV) && (pV.dropped = 0)
        }
        return this.lastEventRateLimited = QV, null === (JV = this.instance.persistence) || void 0 === JV || JV.set_property("$capture_rate_limit", pV), {
          isRateLimited: QV,
          remainingTokens: pV.tokens
        }
      }
      _isPropertyAllowed(VV) {
        const eV = this.instance.config.property_denylist;
        return !qx(eV) || !eV.includes(VV)
      }
      _triggeringPage() {
        var VV;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == Vx ? void 0 : Vx.pathname)) return `${null!==(VV=Vx.origin)&&void 0!==VV?VV:""}${Vx.pathname}`
      }
      _captureWarning(VV) {
        var eV, xV;
        const {
          captureEventsBurstLimit: JV,
          captureEventsPerSecond: YV
        } = this, UV = this._triggeringPage(), yV = this._isPropertyAllowed("$session_id") ? null === (eV = (xV = this.instance).get_session_id) || void 0 === eV ? void 0 : eV.call(xV) : void 0, pV = [`${VV} event(s) dropped since the last warning`, UV ? `triggered on ${UV}` : void 0, yV ? `session ${yV}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${pV}. Config is set to ${YV} events per second and ${JV} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(VV) {
        const eV = this.serverLimits[VV || "events"] || !1;
        return !1 !== eV && (new Date).getTime() < eV
      }
    };
    const cn = ay("[RemoteConfig]");
    var hn = class {
      constructor(VV) {
        this._instance = VV
      }
      get remoteConfig() {
        var VV;
        return null === (VV = px._POSTHOG_REMOTE_CONFIG) || void 0 === VV || null === (VV = VV[this._instance.config.token]) || void 0 === VV ? void 0 : VV.config
      }
      _loadRemoteConfigJs(VV) {
        var eV, xV, JV;
        (null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.loadExternalDependency) ? null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this._instance, "remote-config", (() => VV(this.remoteConfig))): VV()
      }
      _loadRemoteConfigJSON(VV) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: VV
        })
      }
      load() {
        try {
          if (this.remoteConfig) return cn.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void cn.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((VV => {
            if (!VV) return cn.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((VV => {
              this._onRemoteConfig(VV.json, VV)
            }));
            this._onRemoteConfig(VV)
          }))
        } catch (JV) {
          cn.error("Error loading remote config", JV), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(VV, eV) {
        !VV && eV && (0 === eV.statusCode ? eV.error || cn.warn("Failed to fetch remote config from PostHog.") : cn.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(VV ? {
            ok: !0,
            config: VV
          } : {
            ok: !1
          })
        } catch (VV) {
          cn.error("Error applying remote config", VV)
        }
        if (!1 !== (null == VV ? void 0 : VV.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var xV;
          null === (xV = this._instance.featureFlags) || void 0 === xV || xV.ensureFlagsLoaded()
        } catch (VV) {
          cn.error("Error loading feature flags", VV)
        }
      }
    };
    var Ln = Uint8Array,
      fn = Uint16Array,
      mn = Uint32Array,
      Kn = new Ln([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      Hn = new Ln([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      un = new Ln([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      sn = function(VV, eV) {
        for (var xV = new fn(31), JV = 0; 31 > JV; ++JV) xV[JV] = eV += 1 << VV[JV - 1];
        var YV = new mn(xV[30]);
        for (JV = 1; 30 > JV; ++JV)
          for (var UV = xV[JV]; xV[JV + 1] > UV; ++UV) YV[UV] = UV - xV[JV] << 5 | JV;
        return [xV, YV]
      },
      Sn = sn(Kn, 2),
      In = Sn[1];
    Sn[0][28] = 258, In[258] = 28;
    for (var dn = sn(Hn, 0)[1], On = new fn(32768), Vw = 0; 32768 > Vw; ++Vw) {
      var ew = (43690 & Vw) >>> 1 | (21845 & Vw) << 1;
      On[Vw] = ((65280 & (ew = (61680 & (ew = (52428 & ew) >>> 2 | (13107 & ew) << 2)) >>> 4 | (3855 & ew) << 4)) >>> 8 | (255 & ew) << 8) >>> 1
    }
    var xw = function(VV, eV, xV) {
        for (var JV = VV.length, YV = 0, UV = new fn(eV); JV > YV; ++YV) ++UV[VV[YV] - 1];
        var yV, pV = new fn(eV);
        for (YV = 0; eV > YV; ++YV) pV[YV] = pV[YV - 1] + UV[YV - 1] << 1;
        if (xV) {
          yV = new fn(1 << eV);
          var QV = 15 - eV;
          for (YV = 0; JV > YV; ++YV)
            if (VV[YV])
              for (var nV = YV << 4 | VV[YV], wV = eV - VV[YV], ZV = pV[VV[YV] - 1]++ << wV, vV = ZV | (1 << wV) - 1; vV >= ZV; ++ZV) yV[On[ZV] >>> QV] = nV
        } else
          for (yV = new fn(JV), YV = 0; JV > YV; ++YV) yV[YV] = On[pV[VV[YV] - 1]++] >>> 15 - VV[YV];
        return yV
      },
      Jw = new Ln(288);
    for (Vw = 0; 144 > Vw; ++Vw) Jw[Vw] = 8;
    for (Vw = 144; 256 > Vw; ++Vw) Jw[Vw] = 9;
    for (Vw = 256; 280 > Vw; ++Vw) Jw[Vw] = 7;
    for (Vw = 280; 288 > Vw; ++Vw) Jw[Vw] = 8;
    var Yw = new Ln(32);
    for (Vw = 0; 32 > Vw; ++Vw) Yw[Vw] = 5;
    var Uw = xw(Jw, 9, 0),
      yw = xw(Yw, 5, 0),
      pw = function(VV) {
        return (VV / 8 | 0) + (7 & VV && 1)
      },
      Qw = function(VV, eV, xV) {
        (null == eV || 0 > eV) && (eV = 0), (null == xV || xV > VV.length) && (xV = VV.length);
        var JV = new(VV instanceof fn ? fn : VV instanceof mn ? mn : Ln)(xV - eV);
        return JV.set(VV.subarray(eV, xV)), JV
      },
      nw = function(VV, eV, xV) {
        var JV = eV / 8 | 0;
        VV[JV] |= xV <<= 7 & eV, VV[JV + 1] |= xV >>> 8
      },
      ww = function(VV, eV, xV) {
        var JV = eV / 8 | 0;
        VV[JV] |= xV <<= 7 & eV, VV[JV + 1] |= xV >>> 8, VV[JV + 2] |= xV >>> 16
      },
      Zw = function(VV, eV) {
        for (var xV = [], JV = 0; VV.length > JV; ++JV) VV[JV] && xV.push({
          s: JV,
          f: VV[JV]
        });
        var YV = xV.length,
          UV = xV.slice();
        if (!YV) return [new Ln(0), 0];
        if (1 == YV) {
          var yV = new Ln(xV[0].s + 1);
          return yV[xV[0].s] = 1, [yV, 1]
        }
        xV.sort((function(VV, eV) {
          return VV.f - eV.f
        })), xV.push({
          s: -1,
          f: 25001
        });
        var pV = xV[0],
          QV = xV[1],
          nV = 0,
          wV = 1,
          ZV = 2;
        for (xV[0] = {
            s: -1,
            f: pV.f + QV.f,
            l: pV,
            r: QV
          }; wV != YV - 1;) pV = xV[xV[ZV].f > xV[nV].f ? nV++ : ZV++], QV = xV[nV != wV && xV[ZV].f > xV[nV].f ? nV++ : ZV++], xV[wV++] = {
          s: -1,
          f: pV.f + QV.f,
          l: pV,
          r: QV
        };
        var vV = UV[0].s;
        for (JV = 1; YV > JV; ++JV) UV[JV].s > vV && (vV = UV[JV].s);
        var rV = new fn(vV + 1),
          kV = vw(xV[wV - 1], rV, 0);
        if (kV > eV) {
          JV = 0;
          var bV = 0,
            EV = kV - eV,
            BV = 1 << EV;
          for (UV.sort((function(VV, eV) {
              return rV[eV.s] - rV[VV.s] || VV.f - eV.f
            })); YV > JV; ++JV) {
            var jV = UV[JV].s;
            if (eV >= rV[jV]) break;
            bV += BV - (1 << kV - rV[jV]), rV[jV] = eV
          }
          for (bV >>>= EV; bV > 0;) {
            var qV = UV[JV].s;
            eV > rV[qV] ? bV -= 1 << eV - rV[qV]++ - 1 : ++JV
          }
          for (; JV >= 0 && bV; --JV) {
            var tV = UV[JV].s;
            rV[tV] == eV && (--rV[tV], ++bV)
          }
          kV = eV
        }
        return [new Ln(rV), kV]
      },
      vw = function(VV, eV, xV) {
        return -1 == VV.s ? Math.max(vw(VV.l, eV, xV + 1), vw(VV.r, eV, xV + 1)) : eV[VV.s] = xV
      },
      rw = function(VV) {
        for (var eV = VV.length; eV && !VV[--eV];);
        for (var xV = new fn(++eV), JV = 0, YV = VV[0], UV = 1, yV = function(VV) {
            xV[JV++] = VV
          }, pV = 1; eV >= pV; ++pV)
          if (VV[pV] == YV && pV != eV) ++UV;
          else {
            if (!YV && UV > 2) {
              for (; UV > 138; UV -= 138) yV(32754);
              UV > 2 && (yV(UV > 10 ? UV - 11 << 5 | 28690 : UV - 3 << 5 | 12305), UV = 0)
            } else if (UV > 3) {
              for (yV(YV), --UV; UV > 6; UV -= 6) yV(8304);
              UV > 2 && (yV(UV - 3 << 5 | 8208), UV = 0)
            }
            for (; UV--;) yV(YV);
            UV = 1, YV = VV[pV]
          } return [xV.subarray(0, JV), eV]
      },
      kw = function(VV, eV) {
        for (var xV = 0, JV = 0; eV.length > JV; ++JV) xV += VV[JV] * eV[JV];
        return xV
      },
      bw = function(VV, eV, xV) {
        var JV = xV.length,
          YV = pw(eV + 2);
        VV[YV] = 255 & JV, VV[YV + 1] = JV >>> 8, VV[YV + 2] = 255 ^ VV[YV], VV[YV + 3] = 255 ^ VV[YV + 1];
        for (var UV = 0; JV > UV; ++UV) VV[YV + UV + 4] = xV[UV];
        return 8 * (YV + 4 + JV)
      },
      Ew = function(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        nw(eV, wV++, xV), ++YV[256];
        for (var ZV = Zw(YV, 15), vV = ZV[0], rV = ZV[1], kV = Zw(UV, 15), bV = kV[0], EV = kV[1], BV = rw(vV), jV = BV[0], qV = BV[1], tV = rw(bV), FV = tV[0], TV = tV[1], PV = new fn(19), AV = 0; jV.length > AV; ++AV) PV[31 & jV[AV]]++;
        for (AV = 0; FV.length > AV; ++AV) PV[31 & FV[AV]]++;
        for (var NV = Zw(PV, 7), XV = NV[0], MV = NV[1], zV = 19; zV > 4 && !XV[un[zV - 1]]; --zV);
        var GV, WV, RV, gV, DV = nV + 5 << 3,
          iV = kw(YV, Jw) + kw(UV, Yw) + yV,
          CV = kw(YV, vV) + kw(UV, bV) + yV + 14 + 3 * zV + kw(PV, XV) + (2 * PV[16] + 3 * PV[17] + 7 * PV[18]);
        if (iV >= DV && CV >= DV) return bw(eV, wV, VV.subarray(QV, QV + nV));
        if (nw(eV, wV, 1 + (iV > CV)), wV += 2, iV > CV) {
          GV = xw(vV, rV, 0), WV = vV, RV = xw(bV, EV, 0), gV = bV;
          var aV = xw(XV, MV, 0);
          for (nw(eV, wV, qV - 257), nw(eV, wV + 5, TV - 1), nw(eV, wV + 10, zV - 4), wV += 14, AV = 0; zV > AV; ++AV) nw(eV, wV + 3 * AV, XV[un[AV]]);
          wV += 3 * zV;
          for (var oV = [jV, FV], cV = 0; 2 > cV; ++cV) {
            var hV = oV[cV];
            for (AV = 0; hV.length > AV; ++AV) nw(eV, wV, aV[lV = 31 & hV[AV]]), wV += XV[lV], lV > 15 && (nw(eV, wV, hV[AV] >>> 5 & 127), wV += hV[AV] >>> 12)
          }
        } else GV = Uw, WV = Jw, RV = yw, gV = Yw;
        for (AV = 0; pV > AV; ++AV)
          if (JV[AV] > 255) {
            var lV;
            ww(eV, wV, GV[257 + (lV = JV[AV] >>> 18 & 31)]), wV += WV[lV + 257], lV > 7 && (nw(eV, wV, JV[AV] >>> 23 & 31), wV += Kn[lV]);
            var LV = 31 & JV[AV];
            ww(eV, wV, RV[LV]), wV += gV[LV], LV > 3 && (ww(eV, wV, JV[AV] >>> 5 & 8191), wV += Hn[LV])
          } else ww(eV, wV, GV[JV[AV]]), wV += WV[JV[AV]];
        return ww(eV, wV, GV[256]), wV + WV[256]
      },
      Bw = new mn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      jw = (new Ln(0), function() {
        for (var VV = new mn(256), eV = 0; 256 > eV; ++eV) {
          for (var xV = eV, JV = 9; --JV;) xV = (1 & xV && 3988292384) ^ xV >>> 1;
          VV[eV] = xV
        }
        return VV
      }()),
      qw = function(VV, eV, xV) {
        for (; xV; ++eV) VV[eV] = xV, xV >>>= 8
      };
    const tw = !!xx || !!ex,
      Fw = new WeakMap,
      Tw = "text/plain";
    let Pw = 0,
      Aw = !1;
    const Nw = (VV, eV) => {
        const [xV, JV] = VV.split("#"), [YV, UV] = xV.split("?");
        if (!UV) return VV;
        const yV = UV.split("&").filter((VV => VV.split("=")[0] !== eV)).join("&");
        return `${YV}${yV?`?${yV}`:""}${JV?`#${JV}`:""}`
      },
      Xw = function(VV, eV) {
        let xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var JV;
        const [YV, UV] = VV.split("?"), yV = jY({}, eV), pV = null !== (JV = null == UV ? void 0 : UV.split("&").map((VV => {
          var eV;
          const [JV, YV] = VV.split("="), UV = xV && null !== (eV = yV[JV]) && void 0 !== eV ? eV : YV;
          return delete yV[JV], `${JV}=${UV}`
        }))) && void 0 !== JV ? JV : [], QV = function(VV) {
          let eV, xV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const YV = [];
          return cy(VV, (function(VV, JV) {
            Px(VV) || Px(JV) || "undefined" === JV || (eV = encodeURIComponent((VV => VV instanceof File)(VV) ? VV.name : VV.toString()), xV = encodeURIComponent(JV), YV[YV.length] = xV + "=" + eV)
          })), YV.join(JV)
        }(yV);
        return QV && pV.push(QV), pV.length > 0 ? `${YV}?${pV.join("&")}` : YV
      },
      Mw = VV => {
        if (VV._encodedBody) return VV._encodedBody;
        const {
          data: eV,
          compression: xV
        } = VV;
        if (!eV) return;
        if (xV === En.GZipJS) {
          const VV = function(VV, eV) {
            void 0 === eV && (eV = {});
            var xV = function() {
                var VV = 4294967295;
                return {
                  p(eV) {
                    for (var xV = VV, JV = 0; eV.length > JV; ++JV) xV = jw[255 & xV ^ eV[JV]] ^ xV >>> 8;
                    VV = xV
                  },
                  d: () => 4294967295 ^ VV
                }
              }(),
              JV = VV.length;
            xV.p(VV);
            var YV, UV, yV, pV, QV = (pV = 10 + ((YV = eV).filename && YV.filename.length + 1 || 0), function(VV, eV, xV, JV, YV, UV) {
                var yV = VV.length,
                  pV = new Ln(JV + yV + 5 * (1 + Math.floor(yV / 7e3)) + 8),
                  QV = pV.subarray(JV, pV.length - 8),
                  nV = 0;
                if (!eV || 8 > yV)
                  for (var wV = 0; yV >= wV; wV += 65535) {
                    var ZV = wV + 65535;
                    yV > ZV ? nV = bw(QV, nV, VV.subarray(wV, ZV)) : (QV[wV] = UV, nV = bw(QV, nV, VV.subarray(wV, yV)))
                  } else {
                    for (var vV = Bw[eV - 1], rV = vV >>> 13, kV = 8191 & vV, bV = (1 << xV) - 1, EV = new fn(32768), BV = new fn(bV + 1), jV = Math.ceil(xV / 3), qV = 2 * jV, tV = function(eV) {
                        return (VV[eV] ^ VV[eV + 1] << jV ^ VV[eV + 2] << qV) & bV
                      }, FV = new mn(25e3), TV = new fn(288), PV = new fn(32), AV = 0, NV = 0, XV = (wV = 0, 0), MV = 0, zV = 0; yV > wV; ++wV) {
                      var GV = tV(wV),
                        WV = 32767 & wV,
                        RV = BV[GV];
                      if (EV[WV] = RV, BV[GV] = WV, wV >= MV) {
                        var gV = yV - wV;
                        if ((AV > 7e3 || XV > 24576) && gV > 423) {
                          nV = Ew(VV, QV, 0, FV, TV, PV, NV, XV, zV, wV - zV, nV), XV = AV = NV = 0, zV = wV;
                          for (var DV = 0; 286 > DV; ++DV) TV[DV] = 0;
                          for (DV = 0; 30 > DV; ++DV) PV[DV] = 0
                        }
                        var iV = 2,
                          CV = 0,
                          aV = kV,
                          oV = WV - RV & 32767;
                        if (gV > 2 && GV == tV(wV - oV))
                          for (var cV = Math.min(rV, gV) - 1, hV = Math.min(32767, wV), lV = Math.min(258, gV); hV >= oV && --aV && WV != RV;) {
                            if (VV[wV + iV] == VV[wV + iV - oV]) {
                              for (var LV = 0; lV > LV && VV[wV + LV] == VV[wV + LV - oV]; ++LV);
                              if (LV > iV) {
                                if (iV = LV, CV = oV, LV > cV) break;
                                var fV = Math.min(oV, LV - 2),
                                  mV = 0;
                                for (DV = 0; fV > DV; ++DV) {
                                  var KV = wV - oV + DV + 32768 & 32767,
                                    HV = KV - EV[KV] + 32768 & 32767;
                                  HV > mV && (mV = HV, RV = KV)
                                }
                              }
                            }
                            oV += (WV = RV) - (RV = EV[WV]) + 32768 & 32767
                          }
                        if (CV) {
                          FV[XV++] = 268435456 | In[iV] << 18 | dn[CV];
                          var uV = 31 & In[iV],
                            sV = 31 & dn[CV];
                          NV += Kn[uV] + Hn[sV], ++TV[257 + uV], ++PV[sV], MV = wV + iV, ++AV
                        } else FV[XV++] = VV[wV], ++TV[VV[wV]]
                      }
                    }
                    nV = Ew(VV, QV, UV, FV, TV, PV, NV, XV, zV, wV - zV, nV)
                  }
                return Qw(pV, 0, JV + pw(nV) + 8)
              }(UV = VV, null == (yV = eV).level ? 6 : yV.level, null == yV.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(UV.length)))) : 12 + yV.mem, pV, 0, !0)),
              nV = QV.length;
            return function(VV, eV) {
              var xV = eV.filename;
              if (VV[0] = 31, VV[1] = 139, VV[2] = 8, VV[8] = 2 > eV.level ? 4 : 9 == eV.level ? 2 : 0, VV[9] = 3, 0 != eV.mtime && qw(VV, 4, Math.floor(new Date(eV.mtime || Date.now()) / 1e3)), xV) {
                VV[3] = 8;
                for (var JV = 0; xV.length >= JV; ++JV) VV[JV + 10] = xV.charCodeAt(JV)
              }
            }(QV, eV), qw(QV, nV - 8, xV.d()), qw(QV, nV - 4, JV), QV
          }(function(VV) {
            var eV = VV.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(VV);
            for (var xV = new Ln(VV.length + (VV.length >>> 1)), JV = 0, YV = function(VV) {
                xV[JV++] = VV
              }, UV = 0; eV > UV; ++UV) {
              if (JV + 5 > xV.length) {
                var yV = new Ln(JV + 8 + (eV - UV << 1));
                yV.set(xV), xV = yV
              }
              var pV = VV.charCodeAt(UV);
              128 > pV ? YV(pV) : 2048 > pV ? (YV(192 | pV >>> 6), YV(128 | 63 & pV)) : pV > 55295 && 57344 > pV ? (YV(240 | (pV = 65536 + (1047552 & pV) | 1023 & VV.charCodeAt(++UV)) >>> 18), YV(128 | pV >>> 12 & 63), YV(128 | pV >>> 6 & 63), YV(128 | 63 & pV)) : (YV(224 | pV >>> 12), YV(128 | pV >>> 6 & 63), YV(128 | 63 & pV))
            }
            return Qw(xV, 0, JV)
          }(aQ(eV)), {
            mtime: 0
          });
          return {
            contentType: Tw,
            body: VV.buffer.slice(VV.byteOffset, VV.byteOffset + VV.byteLength),
            estimatedSize: VV.byteLength
          }
        }
        if (xV === En.Base64) {
          const VV = function(VV) {
              return VV ? btoa(encodeURIComponent(VV).replace(/%([0-9A-F]{2})/g, ((VV, eV) => String.fromCharCode(parseInt(eV, 16))))) : VV
            }(aQ(eV)),
            xV = (VV => "data=" + encodeURIComponent("string" == typeof VV ? VV : aQ(VV)))(VV);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: xV,
            estimatedSize: new Blob([xV]).size
          }
        }
        const JV = aQ(eV);
        return {
          contentType: "application/json",
          body: JV,
          estimatedSize: new Blob([JV]).size
        }
      },
      zw = VV => {
        const eV = () => "sendBeacon" === VV.transport ? {
          url: Xw(VV.url, {
            compression: En.Base64
          }),
          encodedBody: Mw(jY(jY({}, VV), {}, {
            compression: En.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: Nw(VV.url, "compression"),
          encodedBody: Mw(jY(jY({}, VV), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let xV;
        try {
          xV = Mw(VV)
        } catch (xV) {
          if (jU(VV.compression, cQ(VV.url, "compression"))) return Cy.error("Failed to gzip request body, sending uncompressed payload", xV), eV();
          throw xV
        }
        return xV && jU(VV.compression, cQ(VV.url, "compression")) && !((JV = xV.body) instanceof ArrayBuffer ? BU(new Uint8Array(JV)) : ArrayBuffer.isView(JV) && BU(new Uint8Array(JV.buffer, JV.byteOffset, JV.byteLength))) ? (Aw = !0, eV()) : {
          url: VV.url,
          encodedBody: xV
        };
        var JV
      },
      Gw = VV => {
        try {
          return zw(VV)
        } catch (UV) {
          var eV;
          return Cy.error(UV), void(null === (eV = VV.callback) || void 0 === eV || eV.call(VV, {
            statusCode: 0,
            error: UV
          }))
        }
      },
      Ww = function() {
        var VV = fx((function*(VV) {
          const eV = yield function(VV) {
            return AU.apply(this, arguments)
          }(aQ(VV.data), UV.DEBUG, {
            rethrow: !0
          });
          if (!eV) return VV;
          const xV = yield eV.arrayBuffer();
          return jY(jY({}, VV), {}, {
            _encodedBody: {
              contentType: Tw,
              body: xV,
              estimatedSize: xV.byteLength
            }
          })
        }));
        return function(eV) {
          return VV.apply(this, arguments)
        }
      }(),
      Rw = /Failed to fetch|NetworkError|Load failed/i,
      gw = VV => "TypeError" === (null == VV ? void 0 : VV.name) && Rw.test((null == VV ? void 0 : VV.message) || ""),
      Dw = VV => {
        try {
          const eV = function(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof VV || !VV) return;
            const xV = VV.trim(),
              JV = /^\d+\s*,/.test(xV) ? xV.slice(0, xV.indexOf(",")).trim() : xV;
            if (/^\d+$/.test(JV)) {
              const VV = 1e3 * Math.min(Number(JV), 300);
              return VV > 0 ? VV : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(JV)) return;
            const YV = /^\w{3} \w{3} /.test(JV) ? JV + " GMT" : JV,
              UV = Date.parse(YV) - eV;
            return Number.isFinite(UV) && UV > 0 ? Math.min(UV, UY) : void 0
          }(VV());
          return Px(eV) ? void 0 : Math.min(eV, 3e4)
        } catch (VV) {
          return
        }
      },
      iw = VV => {
        const eV = Gw(VV);
        if (!eV) return;
        const xV = new xx;
        Fw.set(xV, !0);
        const {
          url: JV,
          encodedBody: YV
        } = eV;
        xV.open(VV.method || "GET", JV, !0);
        const {
          contentType: UV,
          body: yV
        } = null != YV ? YV : {};
        cy(VV.headers, (function(VV, eV) {
          xV.setRequestHeader(eV, VV)
        })), UV && xV.setRequestHeader("Content-Type", UV), VV.timeout && (xV.timeout = VV.timeout), xV.onreadystatechange = () => {
          if (4 === xV.readyState) {
            var eV;
            const JV = {
              statusCode: xV.status,
              text: xV.responseText
            };
            if (200 === xV.status) try {
              JV.json = JSON.parse(xV.responseText)
            } catch (VV) {}
            null === (eV = VV.callback) || void 0 === eV || eV.call(VV, JV, Dw((() => xV.getResponseHeader("Retry-After"))))
          }
        }, xV.send(yV)
      },
      Cw = VV => {
        const eV = Gw(VV);
        if (!eV) return;
        const {
          url: xV,
          encodedBody: JV
        } = eV, {
          contentType: YV,
          body: UV,
          estimatedSize: yV
        } = null != JV ? JV : {}, pV = new Headers;
        cy(VV.headers, (function(VV, eV) {
          pV.append(eV, VV)
        })), YV && pV.append("Content-Type", YV);
        let QV = null,
          nV = !1;
        if (Jx) {
          const eV = new Jx;
          QV = {
            signal: eV.signal,
            timeout: setTimeout((() => {
              nV = !0;
              try {
                eV.abort(nY("AbortError", "PostHog request timed out" + ((xV = VV.timeout) ? ` after ${xV}ms` : "")))
              } catch (VV) {
                ZV(VV)
              }
              var xV
            }), VV.timeout)
          }
        }
        let wV = !1;
        const ZV = eV => {
          var xV;
          wV || (wV = !0, nV && "AbortError" === (null == eV ? void 0 : eV.name) || gw(eV) ? Cy.warn(eV) : Cy.error(eV), null === (xV = VV.callback) || void 0 === xV || xV.call(VV, {
            statusCode: 0,
            error: eV
          }))
        };
        let vV = 0;
        const rV = () => {
          Pw -= vV, vV = 0, QV && clearTimeout(QV.timeout)
        };
        try {
          const eV = jY({
              method: (null == VV ? void 0 : VV.method) || "GET",
              headers: pV,
              referrerPolicy: "strict-origin",
              body: UV,
              signal: null == QV ? void 0 : QV.signal
            }, VV.fetchOptions),
            JV = null != yV ? yV : Px(UV) ? 0 : void 0;
          eV.keepalive = "POST" === eV.method && !VV._keepaliveDisabled && !1 !== eV.keepalive && eV.body === UV && !Px(JV) && JV >= 0 && 52428.8 > Pw + JV, eV.keepalive && (vV = JV, Pw += vV), ex(xV, eV).then((eV => eV.text().then((xV => {
            var JV;
            if (wV) return;
            const YV = {
              statusCode: eV.status,
              text: xV
            };
            if (200 === eV.status) try {
              YV.json = JSON.parse(xV)
            } catch (VV) {
              Cy.error(VV)
            }
            wV = !0, rV(), null === (JV = VV.callback) || void 0 === JV || JV.call(VV, YV, Dw((() => eV.headers.get("Retry-After"))))
          })))).catch((VV => {
            rV(), ZV(VV)
          })).finally(rV)
        } catch (VV) {
          rV(), ZV(VV)
        }
      },
      aw = VV => {
        try {
          var eV;
          const {
            url: xV,
            encodedBody: JV
          } = zw(VV), {
            contentType: YV,
            body: UV,
            estimatedSize: yV
          } = null != JV ? JV : {};
          if (!UV) return;
          const pV = UV instanceof Blob ? UV : new Blob([UV], {
            type: YV
          });
          if (de.sendBeacon(xV, pV)) return;
          const QV = qx(VV.data) ? VV.data : null === (eV = VV.data) || void 0 === eV ? void 0 : eV.batch;
          if (qx(QV) && QV.length > 1 && (null != yV ? yV : 0) > 16384) {
            const eV = Math.ceil(QV.length / 2),
              xV = eV => qx(VV.data) ? eV : jY(jY({}, VV.data), {}, {
                batch: eV
              });
            return aw(jY(jY({}, VV), {}, {
              data: xV(QV.slice(0, eV))
            })), void aw(jY(jY({}, VV), {}, {
              data: xV(QV.slice(eV))
            }))
          }
          Cy.warn(`Beacon of ~${null!=yV?yV:0} bytes was rejected by the browser, falling back to ${ex?"fetch":"XHR"}`), ex ? Cw(jY(jY({}, VV), {}, {
            _keepaliveDisabled: !0
          })) : iw(VV)
        } catch (VV) {
          Cy.warn("Beacon send failed", VV)
        }
      },
      ow = (VV, eV, xV, JV) => {
        const YV = "query" === JV ? "POST" === eV ? "sent_at" : "_" : void 0;
        return Xw(xV === En.GZipJS ? Nw(VV, "compression") : VV, jY(jY({}, YV ? {
          [YV]: Date.now().toString()
        } : {}), xV === En.GZipJS ? {} : {
          compression: xV
        }))
      },
      hw = (() => {
        const VV = [];
        return ex && VV.push({
          transport: "fetch",
          method: Cw
        }), xx && VV.push({
          transport: "XHR",
          method: iw
        }), (null == de ? void 0 : de.sendBeacon) && VV.push({
          transport: "sendBeacon",
          method: aw
        }), VV
      })();
    let lw = !tw && -1 === (null == Ux ? void 0 : Ux.indexOf("MSIE")) && -1 === (null == Ux ? void 0 : Ux.indexOf("Mozilla"));

    function Lw(VV, eV, xV) {
      var JV, YV, UV;
      xV && (eV = jY(jY({}, eV), {}, {
        callback: VV => xV(VV)
      })), VV.__loaded ? lw ? VV.__request_queue.push(eV) : VV.rateLimiter.isServerRateLimited(eV.batchKey) ? eV.fireCallbackOnDrop && (null === (YV = eV.callback) || void 0 === YV || YV.call(eV, {
        statusCode: 429
      })) : (eV.transport = eV.transport || VV.config.api_transport, eV.headers = jY(jY({}, VV.config.request_headers), eV.headers), eV.compression = "best-available" === eV.compression ? null !== (JV = VV.compression) && void 0 !== JV ? JV : eV.compressionFallback : eV.compression, (Px(VV.config.disable_beacon) ? VV.config.__preview_disable_beacon : VV.config.disable_beacon) && (eV.disableTransport = ["sendBeacon"]), eV.fetchOptions = eV.fetchOptions || VV.config.fetch_options, ((VV, eV) => {
        var xV, JV, YV;
        const UV = jY(jY({}, VV), {}, {
          callback: null != eV ? eV : eV => {
            var xV;
            return null === (xV = VV.callback) || void 0 === xV ? void 0 : xV.call(VV, eV)
          }
        });
        UV.timeout = UV.timeout || 6e4;
        const yV = null !== (xV = UV.transport) && void 0 !== xV ? xV : "fetch";
        "sendBeacon" === yV && Px(UV.compression) && UV.data && (UV.compression = En.Base64), "POST" === UV.method && UV.data && ("capture-body" === UV.timestampMode ? UV.data = (VV => {
          var eV, xV;
          const JV = (qx(VV) ? VV : [VV]).map((VV => jY(jY({}, VV), VV.timestamp instanceof Date && !isNaN(VV.timestamp.getTime()) ? {
              timestamp: VV.timestamp.toISOString()
            } : {}))),
            YV = JV[0];
          return {
            api_key: null !== (eV = null == YV || null === (xV = YV.properties) || void 0 === xV ? void 0 : xV.token) && void 0 !== eV ? eV : null == YV ? void 0 : YV.token,
            batch: JV,
            sent_at: (new Date).toISOString()
          }
        })(UV.data) : "body" === UV.timestampMode && (UV.data = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return qx(VV) ? VV.map((VV => jY(jY({}, VV), {}, {
            sent_at: eV
          }))) : jY(jY({}, VV), {}, {
            sent_at: eV
          })
        }(UV.data))), UV.url = ow(UV.url, UV.method, UV.compression, UV.timestampMode);
        const pV = hw.filter((VV => !UV.disableTransport || !VV.transport || !UV.disableTransport.includes(VV.transport))),
          QV = null !== (JV = null === (YV = function(VV, eV) {
            for (let xV = 0; VV.length > xV; xV++)
              if (eV(VV[xV])) return VV[xV]
          }(pV, (VV => VV.transport === yV))) || void 0 === YV ? void 0 : YV.method) && void 0 !== JV ? JV : pV[0].method;
        if (!QV) throw new Error("No available transport method");
        const nV = VV => {
          try {
            QV(VV)
          } catch (VV) {
            var eV;
            gw(VV) ? Cy.warn(VV) : Cy.error(VV), null === (eV = UV.callback) || void 0 === eV || eV.call(UV, {
              statusCode: 0,
              error: VV
            })
          }
        };
        "sendBeacon" !== yV && !UV.preferSyncCompression && UV.data && UV.compression === En.GZipJS && Yx && "undefined" != typeof Promise && !Aw ? Ww(UV).then((VV => {
          nV(VV)
        })).catch((eV => {
          if (qU(eV)) return Aw = !0, void nV(jY(jY({}, UV), {}, {
            compression: void 0,
            url: ow(VV.url, VV.method, void 0, VV.timestampMode)
          }));
          (VV => {
            if (!VV || "object" != typeof VV) return !1;
            const eV = "name" in VV ? String(VV.name) : "";
            return qU(VV) || eV === EU
          })(eV) && (Aw = !0), nV(UV)
        })) : nV(UV)
      })(eV, ((JV, YV) => {
        var UV, yV, pV;
        VV.rateLimiter.checkForLimiting(JV), 400 > JV.statusCode || null === (UV = (yV = VV.config).on_request_error) || void 0 === UV || UV.call(yV, JV), xV ? xV(JV, YV) : null === (pV = eV.callback) || void 0 === pV || pV.call(eV, JV)
      }))) : eV.fireCallbackOnDrop && (null === (UV = eV.callback) || void 0 === UV || UV.call(eV, {
        statusCode: 0
      }))
    }
    var fw = class {
      constructor(VV, eV) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = ux((null == eV ? void 0 : eV.flush_interval_ms) || 3e3, 250, 5e3, Cy.createLogger("flush interval"), 3e3), this._sendRequest = VV
      }
      enqueue(VV) {
        this._queue.push(VV), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const VV = this._queue.length > 0 ? this._formatQueue() : {},
          eV = Object.values(VV);
        [...eV.filter((VV => 0 === VV.url.indexOf("/e"))), ...eV.filter((VV => 0 !== VV.url.indexOf("/e")))].map((VV => {
          this._sendRequestSafely(jY(jY({}, VV), {}, {
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
          const VV = this._formatQueue();
          for (const eV in VV) this._sendRequestSafely(VV[eV])
        }
      }
      _sendRequestSafely(VV, eV) {
        try {
          this._sendRequest(VV, eV)
        } catch (VV) {
          Cy.error(VV)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const VV = {},
          eV = {};
        cy(this._queue, (xV => {
          var JV;
          const YV = xV,
            UV = ((YV ? YV.batchKey : null) || YV.url) + (YV.batchGroup ? `:${YV.batchGroup}` : "");
          Px(VV[UV]) && (VV[UV] = jY(jY({}, YV), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), eV[UV] = []), null === (JV = VV[UV].data) || void 0 === JV || JV.push(YV.data), YV.callback && eV[UV].push(YV.callback)
        }));
        for (const xV in eV) {
          const JV = eV[xV];
          JV.length && (VV[xV].callback = VV => {
            for (const eV of JV) eV(VV)
          })
        }
        return this._queue = [], VV
      }
    };
    const mw = ["retriesPerformedSoFar"];
    var Kw = class {
        constructor(VV) {
          this._instance = VV, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!Px(Se) && "onLine" in Se.navigator) {
            if (this._areWeOnline = Se.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, uy(Se, "online", this._onlineListener), uy(Se, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(VV, eV) {
          let {
            retriesPerformedSoFar: xV
          } = VV, JV = NU(VV, mw);
          Gx(xV) && (JV.url = Xw(JV.url, {
            retry_count: xV
          })), Lw(this._instance, eV ? jY(jY({}, JV), {}, {
            transport: eV
          }) : JV, ((VV, eV) => {
            var YV;
            if (200 !== VV.statusCode && (400 > VV.statusCode || VV.statusCode >= 500)) {
              if ((0 === VV.statusCode ? 3 : 10) > (null != xV ? xV : 0)) return void this._enqueue(jY({
                retriesPerformedSoFar: xV
              }, JV), eV);
              0 === VV.statusCode && Cy.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=xV?xV:0} retries.`)
            }
            null === (YV = JV.callback) || void 0 === YV || YV.call(JV, VV)
          }))
        }
        _enqueue(VV, eV) {
          const xV = VV.retriesPerformedSoFar || 0;
          VV.retriesPerformedSoFar = xV + 1;
          const JV = Math.max(function(VV) {
              const eV = 3e3 * Math.pow(2, VV),
                xV = eV / 2,
                JV = Math.min(18e5, eV),
                YV = (Math.random() - .5) * (JV - xV);
              return Math.ceil(JV + YV)
            }(xV), null != eV ? eV : 0),
            YV = Date.now() + JV;
          this._queue.push({
            retryAt: YV,
            requestOptions: VV
          });
          let UV = `Enqueued failed request for retry in ${JV}`;
          navigator.onLine || (UV += " (Browser is offline)"), Cy.warn(UV), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const VV = Date.now(),
            eV = [],
            xV = this._queue.filter((xV => VV > xV.retryAt || (eV.push(xV), !1)));
          if (this._queue = eV, xV.length > 0)
            for (const {
                requestOptions: JV
              }
              of xV) this.retriableRequest(JV)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, Px(Se) || (this._onlineListener && (Se.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (Se.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: VV
            }
            of this._queue) try {
            this._instance._send_request(jY(jY({}, VV), {}, {
              callback: qx(VV.data) ? void 0 : VV.callback,
              transport: "sendBeacon"
            }))
          } catch (JV) {
            Cy.error(JV)
          }
          this._queue = []
        }
      },
      Hw = class {
        constructor(VV) {
          this._instance = VV, this._updateScrollData = () => {
            var VV, eV, xV, JV;
            this._context || (this._context = {});
            const YV = this.scrollElement(),
              UV = this.scrollY(),
              yV = YV ? Math.max(0, YV.scrollHeight - YV.clientHeight) : 0,
              pV = UV + ((null == YV ? void 0 : YV.clientHeight) || 0),
              QV = (null == YV ? void 0 : YV.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(UV), this._context.maxScrollY = Math.max(UV, null !== (VV = this._context.maxScrollY) && void 0 !== VV ? VV : 0), this._context.maxScrollHeight = Math.max(yV, null !== (eV = this._context.maxScrollHeight) && void 0 !== eV ? eV : 0), this._context.lastContentY = pV, this._context.maxContentY = Math.max(pV, null !== (xV = this._context.maxContentY) && void 0 !== xV ? xV : 0), this._context.maxContentHeight = Math.max(QV, null !== (JV = this._context.maxContentHeight) && void 0 !== JV ? JV : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const VV = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), VV
        }
        startMeasuringScrollPosition() {
          uy(Se, "scroll", this._updateScrollData, {
            capture: !0
          }), uy(Se, "scrollend", this._updateScrollData, {
            capture: !0
          }), uy(Se, "resize", this._updateScrollData)
        }
        scrollElement() {
          var VV;
          if (!this._scrollRoot) return null == Se || null === (VV = Se.document) || void 0 === VV ? void 0 : VV.documentElement;
          {
            const VV = qx(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const xV of VV) {
              var eV;
              const VV = null == Se || null === (eV = Se.document) || void 0 === eV ? void 0 : eV.querySelector(xV);
              if (VV) return VV
            }
          }
        }
        _scrollPosition(VV) {
          var eV, xV;
          const JV = "y" === VV ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const VV = this.scrollElement();
            return VV && VV[JV] || 0
          }
          return Se ? "y" === VV ? Se.scrollY || Se.pageYOffset || (null === (eV = Se.document) || void 0 === eV || null === (eV = eV.documentElement) || void 0 === eV ? void 0 : eV.scrollTop) || 0 : Se.scrollX || Se.pageXOffset || (null === (xV = Se.document) || void 0 === xV || null === (xV = xV.documentElement) || void 0 === xV ? void 0 : xV.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const uw = VV => Vn(null == VV ? void 0 : VV.config.mask_personal_data_properties, null == VV ? void 0 : VV.config.custom_personal_data_properties, null == VV ? void 0 : VV.config.disable_capture_url_hashes);
    var sw = class {
        constructor(VV, eV, xV, JV) {
          this._onSessionIdCallback = VV => {
            const eV = this._getStored();
            if (eV && eV.sessionId === VV) return;
            const xV = {
              sessionId: VV,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [qe]: xV
            })
          }, this._instance = VV, this._sessionIdManager = eV, this._persistence = xV, this._sessionSourceParamGenerator = JV || uw, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[qe]
        }
        getSetOnceProps() {
          var VV;
          const eV = null === (VV = this._getStored()) || void 0 === VV ? void 0 : VV.props;
          return eV ? "r" in eV ? en(eV, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: eV.referringDomain,
            $pathname: eV.initialPathName,
            utm_source: eV.utm_source,
            utm_campaign: eV.utm_campaign,
            utm_medium: eV.utm_medium,
            utm_content: eV.utm_content,
            utm_term: eV.utm_term
          } : {}
        }
        getSessionProps() {
          const VV = {};
          return cy(fy(this.getSetOnceProps()), ((eV, xV) => {
            "$current_url" === xV && (xV = "url"), VV[`$session_entry_${kx(xV)}`] = eV
          })), VV
        }
      },
      Sw = class {
        on(VV, eV) {
          return this._events[VV] || (this._events[VV] = []), this._events[VV].push(eV), () => {
            this._events[VV] = this._events[VV].filter((VV => VV !== eV))
          }
        }
        emit(VV, eV) {
          for (const xV of this._events[VV] || []) xV(eV);
          for (const xV of this._events["*"] || []) xV(VV, eV)
        }
        constructor() {
          this._events = {}
        }
      };
    const Iw = ay("[SessionId]"),
      dw = 864e5;
    var Ow = class {
      on(VV, eV) {
        return this._eventEmitter.on(VV, eV)
      }
      constructor(VV, eV, xV) {
        var JV;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new Sw, this._sessionHasBeenIdleTooLong = (VV, eV) => !(!Gx(VV) || !Gx(eV)) && Math.abs(VV - eV) > this.sessionTimeoutMs, !VV.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === VV.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = VV.config, this._persistence = VV.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = eV || xp, this._windowIdGenerator = xV || xp;
        const YV = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * ux(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, Iw.createLogger("session_idle_timeout_seconds"), 1800), VV.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + YV + "_window_id", this._primary_window_exists_storage_key = "ph_" + YV + "_primary_window_exists", this._canUseSessionStorage()) {
          const VV = Pp._parse(this._window_id_storage_key),
            eV = Pp._parse(this._primary_window_exists_storage_key);
          VV && !eV ? this._windowId = VV : Pp._remove(this._window_id_storage_key), Pp._set(this._primary_window_exists_storage_key, !0)
        }(null === (JV = this._config.bootstrap) || void 0 === JV ? void 0 : JV.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(VV) {
        return Px(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(VV), this._sessionId && VV(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((eV => eV !== VV))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && Pp._is_supported()
      }
      _setWindowId(VV) {
        VV !== this._windowId && (this._windowId = VV, this._canUseSessionStorage() && Pp._set(this._window_id_storage_key, VV))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? Pp._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(VV) {
        const eV = this._lastPersistedActivityTimestamp;
        return !Xx(eV) && !Xx(VV) && 5e3 > Math.abs(VV - eV)
      }
      _setSessionId(VV, eV, xV) {
        const JV = eV !== this._sessionActivityTimestamp,
          YV = !(VV !== this._sessionId || xV !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = xV, this._sessionActivityTimestamp = eV, this._sessionId = VV, YV && !JV || YV && this._isActivityChangeBelowGranularity(eV) || (this._lastPersistedActivityTimestamp = eV, this._persistence.register({
          [dV]: [eV, VV, xV]
        }))
      }
      _useCrossTabRefreshHardening() {
        var VV;
        const eV = null === (VV = this._config) || void 0 === VV ? void 0 : VV.persistence_save_debounce_ms;
        return Gx(eV) && eV > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(dV) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var VV;
        if (Xx(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, eV, xV] = this._getSessionId();
        eV === this._sessionId && xV === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [dV]: [this._sessionActivityTimestamp, null !== (VV = this._sessionId) && void 0 !== VV ? VV : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [VV] = this._getSessionId(), eV = Gx(VV) ? VV : 0, xV = Gx(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(eV, xV)
      }
      _isSessionIdleAfterCrossTabRefresh(VV) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(VV, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const VV = this._persistence.props[dV];
        return qx(VV) && 2 === VV.length && VV.push(VV[0]), VV || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const xV = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const xV = (VV => {
              const eV = VV.replace(/-/g, "");
              if (32 !== eV.length) throw new Error("Not a valid UUID");
              if ("7" !== eV[12]) throw new Error("Not a UUIDv7");
              return parseInt(eV.substring(0, 12), 16)
            })(VV);
            return xV > eV + 6e4 ? void Iw.error("Bootstrap sessionID cannot be in the future") : xV
          } catch (VV) {
            return void Iw.error("Invalid sessionID in bootstrap", VV)
          }
        }(VV);
        return !Px(xV) && (eV ? this._pendingBootstrapSession = {
          sessionId: VV,
          sessionStartTimestamp: xV
        } : this._setSessionId(VV, (new Date).getTime(), xV), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && Se && (Se.removeEventListener(me, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && Pp._remove(this._primary_window_exists_storage_key)
        }, uy(Se, me, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const JV = eV || (new Date).getTime(),
          YV = this._sessionId;
        if (xV) this._lastCookieSyncTimestamp = JV;
        else if (Xx(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > JV || JV - this._lastCookieSyncTimestamp >= 1e3) {
          var UV, yV;
          null === (UV = (yV = this._persistence).syncCookieProperties) || void 0 === UV || UV.call(yV), this._lastCookieSyncTimestamp = JV
        }
        let [, pV, QV] = this._getSessionId();
        const nV = !Px(YV) && pV !== YV,
          wV = this._freshestActivityTimestamp();
        let ZV = this._getWindowId();
        const vV = this._pendingBootstrapSession,
          rV = !!vV && (vV.sessionStartTimestamp > JV + 6e4 || JV - vV.sessionStartTimestamp > dw),
          kV = vV ? rV : Gx(QV) && Math.abs(JV - QV) > dw;
        let bV = !1,
          EV = nV,
          BV = !pV || !!vV;
        const jV = pV;
        let qV = !BV && !VV && this._sessionHasBeenIdleTooLong(JV, wV);
        if (qV && (qV = this._isSessionIdleAfterCrossTabRefresh(JV), qV || Iw.info("cross-tab refresh kept the session alive", {
            sessionId: pV
          }), [, pV, QV] = this._getSessionId(), qV || (BV = !pV || !!vV)), BV || qV || kV) {
          EV = !1;
          const VV = vV && !rV;
          pV = VV ? vV.sessionId : this._sessionIdGenerator(), ZV = this._windowIdGenerator(), Iw.info("new session ID assigned", {
            sessionId: pV,
            windowId: ZV,
            bootstrapped: !!VV,
            changeReason: {
              noSessionId: BV,
              activityTimeout: qV,
              sessionPastMaximumLength: kV
            }
          }), QV = VV ? vV.sessionStartTimestamp : JV, this._pendingBootstrapSession = void 0, bV = !0
        } else ZV || (ZV = this._windowIdGenerator(), bV = !0), EV = EV || pV !== jV, EV && (Iw.info("adopted cross-tab session id", {
          sessionId: pV,
          windowId: ZV
        }), bV = !0);
        const tV = Gx(wV) && VV && !kV ? wV : JV,
          FV = Gx(QV) ? QV : (new Date).getTime();
        this._setWindowId(ZV), this._setSessionId(pV, tV, FV), VV || this._resetIdleTimer();
        const TV = {
          noSessionId: BV,
          activityTimeout: qV,
          sessionPastMaximumLength: kV,
          crossTabAdoption: EV
        };
        return bV && this._sessionIdChangedHandlers.forEach((VV => VV(pV, ZV, TV))), {
          sessionId: pV,
          windowId: ZV,
          sessionStartTimestamp: FV,
          changeReason: bV ? TV : void 0,
          lastActivityTimestamp: wV
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const VV = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: VV
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const VZ = function(VV, eV) {
      if (!VV) return !1;
      const xV = VV.userAgent;
      if (xV && Hx(xV, eV)) return !0;
      try {
        const xV = null == VV ? void 0 : VV.userAgentData;
        if ((null == xV ? void 0 : xV.brands) && xV.brands.some((VV => Hx(null == VV ? void 0 : VV.brand, eV)))) return !0
      } catch (VV) {}
      return !!VV.webdriver
    };

    function eZ() {
      return (eZ = fx((function*() {
        const VV = null == de ? void 0 : de.userAgentData;
        if (null == VV ? void 0 : VV.getHighEntropyValues) try {
          const eV = yield VV.getHighEntropyValues(["model"]), xV = null == eV ? void 0 : eV.model;
          return Ax(xV) && xV.length > 0 ? xV : void 0
        } catch (VV) {
          return void Cy.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", VV)
        }
      }))).apply(this, arguments)
    }

    function xZ(VV, eV) {
      let xV = `$survey_${eV}/${VV.id}`;
      return VV.current_iteration && VV.current_iteration > 0 && (xV = `$survey_${eV}/${VV.id}/${VV.current_iteration}`), xV
    }

    function JZ(VV) {
      var eV;
      return !!(null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.events) || void 0 === eV || null === (eV = eV.values) || void 0 === eV ? void 0 : eV.length)
    }
    const YZ = (VV, eV) => {
        if (!(VV => {
            try {
              new RegExp(VV)
            } catch (VV) {
              return !1
            }
            return !0
          })(eV)) return !1;
        try {
          return new RegExp(eV).test(VV)
        } catch (VV) {
          return !1
        }
      },
      UZ = VV => VV.toLowerCase(),
      yZ = {
        exact: (VV, eV) => eV.some((eV => VV.some((VV => eV === VV)))),
        is_not: (VV, eV) => eV.every((eV => VV.every((VV => eV !== VV)))),
        regex: (VV, eV) => eV.some((eV => VV.some((VV => YZ(eV, VV))))),
        not_regex: (VV, eV) => eV.every((eV => VV.every((VV => !YZ(eV, VV))))),
        icontains: (VV, eV) => eV.map(UZ).some((eV => VV.map(UZ).some((VV => eV.includes(VV))))),
        not_icontains: (VV, eV) => eV.map(UZ).every((eV => VV.map(UZ).every((VV => !eV.includes(VV))))),
        gt: (VV, eV) => eV.some((eV => {
          const xV = parseFloat(eV);
          return !isNaN(xV) && VV.some((VV => xV > parseFloat(VV)))
        })),
        lt: (VV, eV) => eV.some((eV => {
          const xV = parseFloat(eV);
          return !isNaN(xV) && VV.some((VV => xV < parseFloat(VV)))
        }))
      };

    function pZ(VV, eV) {
      return !VV || Object.entries(VV).every((VV => {
        let [xV, JV] = VV;
        const YV = null == eV ? void 0 : eV[xV];
        if (null == YV) return !1;
        const UV = yZ[JV.operator];
        return !!UV && UV(JV.values.map(String), [String(YV)])
      }))
    }

    function QZ(VV, eV, xV) {
      return aQ({
        distinct_id: VV,
        userPropertiesToSet: eV,
        userPropertiesToSetOnce: xV
      })
    }
    const nZ = "custom",
      wZ = "i.posthog.com",
      ZZ = /^\/static\//,
      vZ = ["/s/", "/e/", "/i/"];
    var rZ = class {
      constructor(VV) {
        this._regionCache = {}, this.instance = VV
      }
      get apiHost() {
        const VV = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === VV ? "https://us.i.posthog.com" : VV
      }
      get flagsApiHost() {
        const VV = this.instance.config.flags_api_host;
        return VV ? VV.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var VV;
        let eV = null === (VV = this.instance.config.ui_host) || void 0 === VV ? void 0 : VV.replace(/\/$/, "");
        return eV || (eV = this.apiHost.replace(`.${wZ}`, ".posthog.com")), "https://app.posthog.com" === eV ? "https://us.posthog.com" : eV
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : nZ), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(VV) {
        if (!ZZ.test(VV)) return;
        const eV = this.instance.config.asset_host;
        return "string" == typeof eV && eV.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(VV) {
        const eV = oQ(VV);
        return eV ? eV.protocol + "//" + eV.host + eV.pathname : void 0
      }
      _prepareEndpoint(VV, eV, xV) {
        if ("ui" === VV) return xV;
        let JV = xV;
        const YV = this.instance.config.rewriteRequestPath;
        if (YV) {
          var UV;
          const VV = (null === (UV = oQ(xV)) || void 0 === UV ? void 0 : UV.href) || xV;
          JV = YV(new URL(VV)).toString()
        }
        if (YV && "api" === VV && vZ.some((VV => 0 === eV.indexOf(VV)))) {
          const VV = this._urlKey(JV);
          if (VV) {
            const eV = this.apiHost;
            let xV = this._ingestionEndpoints;
            (null == xV ? void 0 : xV.apiHost) === eV && xV.rewriteRequestPath === YV || (xV = {
              apiHost: eV,
              rewriteRequestPath: YV,
              urls: new Set
            }, this._ingestionEndpoints = xV), xV.urls.add(VV)
          }
        }
        return JV
      }
      isIngestionEndpoint(VV) {
        const eV = this._ingestionEndpoints,
          xV = this._urlKey(VV);
        return (null == eV ? void 0 : eV.apiHost) === this.apiHost && eV.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!xV && eV.urls.has(xV)
      }
      endpointFor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (eV && (eV = "/" === eV[0] ? eV : `/${eV}`), "ui" === VV) return this._prepareEndpoint(VV, eV, this.uiHost + eV);
        if ("flags" === VV) return this._prepareEndpoint(VV, eV, this.flagsApiHost + eV);
        if ("assets" === VV) {
          const xV = this._staticAssetHostOverride(eV);
          if (xV) return this._prepareEndpoint(VV, eV, `${xV}${eV}`)
        }
        if (this.region === nZ) return this._prepareEndpoint(VV, eV, this.apiHost + eV);
        const xV = wZ + eV;
        switch (VV) {
          case "assets":
            return this._prepareEndpoint(VV, eV, `https://${this.region}-assets.${xV}`);
          case "api":
            return this._prepareEndpoint(VV, eV, `https://${this.region}.${xV}`)
        }
      }
    };
    const kZ = ay("[Surveys]"),
      bZ = VV => {
        try {
          const eV = (VV => ((VV, eV) => `seenSurvey_${function(VV){return VV.current_iteration&&VV.current_iteration>0?`${VV.id}_${VV.current_iteration}`:VV.id}(eV)}`)(0, VV))(VV);
          if (localStorage.getItem(eV)) return;
          localStorage.setItem(eV, "true")
        } catch (VV) {
          kZ.error("Failed to persist survey seen state", VV)
        }
      },
      EZ = [qn, Fn, tn],
      BZ = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: zn
      },
      jZ = ay("[PostHog ExternalIntegrations]"),
      qZ = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var tZ = class {
      constructor(VV) {
        this._instance = VV
      }
      _loadScript(VV, eV) {
        var xV, JV;
        null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this._instance, VV, (VV => {
          if (VV) return jZ.error("failed to load script", VV);
          eV()
        }))
      }
      startIfEnabledOrStop() {
        var VV;
        for (const [YV, UV] of Object.entries(null !== (VV = this._instance.config.integrations) && void 0 !== VV ? VV : {})) {
          var eV, xV, JV;
          UV && !(null === (eV = px.__PosthogExtensions__) || void 0 === eV || null === (eV = eV.integrations) || void 0 === eV ? void 0 : eV[YV]) && this._loadScript(qZ[YV], (() => {
            var VV;
            null === (VV = px.__PosthogExtensions__) || void 0 === VV || null === (VV = VV.integrations) || void 0 === VV || null === (VV = VV[YV]) || void 0 === VV || VV.start(this._instance)
          })), !UV && (null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (xV = xV.integrations) || void 0 === xV ? void 0 : xV[YV]) && (null === (JV = px.__PosthogExtensions__) || void 0 === JV || null === (JV = JV.integrations) || void 0 === JV || null === (JV = JV[YV]) || void 0 === JV || JV.stop())
        }
      }
    };
    const FZ = "autocapture",
      TZ = "featureFlags",
      PZ = "logs",
      AZ = "surveys";
    var NZ = class {
        constructor(VV) {
          this._instance = VV
        }
        initialize() {}
        get(VV) {
          const eV = this._instance.persistence;
          if ("string" == typeof VV) return null == eV ? void 0 : eV.get_property(VV);
          const xV = {};
          for (const JV of VV) {
            const VV = null == eV ? void 0 : eV.get_property(JV);
            Px(VV) || (xV[JV] = VV)
          }
          return xV
        }
        set(VV, eV) {
          var xV;
          null === (xV = this._instance.persistence) || void 0 === xV || xV.register("string" == typeof VV ? {
            [VV]: eV
          } : VV)
        }
        remove(VV) {
          var eV;
          null === (eV = this._instance.persistence) || void 0 === eV || eV.unregister(VV)
        }
      },
      XZ = class {
        constructor(VV) {
          this.instance = VV, this._logger = Cy, this.kv = new NZ(VV), this.onEvent = VV => Wn(this.instance._addCaptureHook(((eV, xV) => {
            if (xV) try {
              VV({
                event: eV,
                properties: xV.properties
              })
            } catch (VV) {
              this._logger.error("Browser extension event listener failed", VV)
            }
          }))), this.onRemoteConfig = VV => {
            const eV = eV => {
                try {
                  VV(eV)
                } catch (VV) {
                  this._logger.error("Browser extension remote config listener failed", VV)
                }
              },
              xV = this.instance._internalEventEmitter.on("extensionsRemoteConfig", eV);
            return this.instance._lastRemoteConfig && eV(this.instance._lastRemoteConfig), Wn(xV)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var VV;
          return null !== (VV = this.instance.get_property("$device_id")) && void 0 !== VV ? VV : this.distinctId
        }
        get deviceId() {
          const VV = this.instance.get_property(AV);
          return "string" == typeof VV ? VV : void 0
        }
        get library() {
          return {
            name: UV.LIB_NAME,
            version: UV.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var VV, eV;
          return null !== (VV = null === (eV = this.instance.persistence) || void 0 === eV ? void 0 : eV.get_initial_props()) && void 0 !== VV ? VV : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var VV, eV, xV, JV, YV;
            const UV = null === (VV = this.instance.sessionManager) || void 0 === VV ? void 0 : VV.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (eV = null == UV ? void 0 : UV.sessionId) && void 0 !== eV ? eV : "",
              windowId: null !== (xV = null == UV ? void 0 : UV.windowId) && void 0 !== xV ? xV : "",
              sessionStartTimestamp: null !== (JV = null == UV ? void 0 : UV.sessionStartTimestamp) && void 0 !== JV ? JV : 0,
              lastActivityTimestamp: null !== (YV = null == UV ? void 0 : UV.lastActivityTimestamp) && void 0 !== YV ? YV : 0
            }
          } catch (VV) {
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
          return tx(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(VV) {
          let eV;
          switch (VV) {
            case TZ:
            case "featureFlagsCommon":
              eV = this.instance.featureFlags;
              break;
            case PZ:
              eV = this.instance.logs;
              break;
            case AZ:
              eV = this.instance.surveys;
              break;
            case FZ:
              eV = this.instance.autocapture
          }
          return eV
        }
        capture(VV, eV, xV) {
          xV ? this.instance.capture(VV, eV, {
            timestamp: xV.timestamp,
            uuid: xV.uuid,
            $set: xV.set,
            $set_once: xV.setOnce
          }) : this.instance.capture(VV, eV)
        }
        registerDynamicEventProperties(VV) {
          return Wn(this.instance._registerExtensionEventProperties(VV))
        }
        sendRequest(VV) {
          var eV = this;
          return fx((function*(VV) {
            let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var JV;
            const YV = null !== (JV = xV.target) && void 0 !== JV ? JV : "api",
              UV = eV.instance.requestRouter.endpointFor(YV, VV),
              yV = "api" === YV && "/i/v1/logs" === VV,
              pV = {
                method: xV.method,
                url: xV.query ? Xw(UV, xV.query) : UV,
                data: xV.body,
                headers: xV.headers,
                timeout: xV.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: xV.transport,
                compression: xV.compression,
                compressionFallback: "flags" === xV.target && "best-available" === xV.compression ? nx.Base64 : void 0,
                timestampMode: xV.sentAt
              };
            return yV && (pV.batchKey = "logs"), "sendBeacon" === xV.transport ? (eV.instance._send_request(pV), {
              statusCode: 202
            }) : new Promise((VV => {
              pV.callback = VV, eV.instance._send_request(pV)
            }))
          })).apply(this, arguments)
        }
      };
    const MZ = {};
    let zZ = 0;
    const GZ = () => {},
      WZ = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      RZ = "Surveys module not available",
      gZ = "sanitize_properties is deprecated. Use before_send instead",
      DZ = "Invalid value for property_denylist config: ",
      iZ = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      CZ = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      aZ = VV => "$" === VV.charAt(0) && !vx(CZ, VV),
      oZ = /^[A-Za-z0-9_-]{1,400}$/,
      cZ = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      hZ = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      lZ = ["token", "distinct_id", Xe],
      LZ = "posthog",
      fZ = VV => {
        const eV = {};
        return VV && "unset" !== VV ? ("2025-11-30" > VV || (eV.strictMinimumDuration = !0), "2026-05-30" > VV || (eV.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > VV || (eV.streamNetworkBody = !0), "2026-08-30" > VV || (eV.captureJsonLd = !0), eV) : eV
      },
      mZ = VV => {
        var eV;
        return jY({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: Hy(null == Oe ? void 0 : Oe.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: GZ,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != VV ? VV : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: Vx && Ax(null == Vx ? void 0 : Vx.search) && -1 !== Vx.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == Se || null === (eV = Se.location) || void 0 === eV ? void 0 : eV.protocol),
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
          on_request_error(VV) {
            Cy.error("Bad HTTP status: " + VV.statusCode + " " + VV.text)
          },
          get_device_id: VV => VV,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: fe,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: GZ
        }, (VV => ({
          rageclick: VV && VV >= "2026-05-30" ? {
            content_ignorelist: mp,
            ignore_text_selection: !0
          } : !VV || "2025-11-30" > VV || {
            content_ignorelist: !0
          },
          capture_pageview: !VV || "2025-05-24" > VV || "history_change",
          session_recording: fZ(VV),
          external_scripts_inject_target: VV && VV >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: VV && VV >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: VV && VV >= "2026-05-30" ? 250 : 0,
          split_storage: !(!VV || "2026-05-30" > VV),
          detect_google_search_app: !(!VV || "2026-05-30" > VV),
          disable_capture_url_hashes: !(!VV || "2026-06-25" > VV),
          cookieWinsOnConflict: !(!VV || "unset" === VV || "2026-08-29" > VV)
        }))(VV))
      },
      KZ = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      HZ = VV => {
        const eV = {};
        for (const [YV, UV] of KZ) Px(VV[YV]) || (eV[UV] = VV[YV]);
        const xV = hy({}, eV, VV),
          JV = VV.__preview_external_dependency_versioned_paths;
        return Px(JV) || (Px(VV.strict_script_versioning) && (xV.strict_script_versioning = !!JV), Ax(JV) && Px(VV.asset_host) && (xV.asset_host = JV)), qx(VV.property_blacklist) && (Px(VV.property_denylist) ? xV.property_denylist = VV.property_blacklist : qx(VV.property_denylist) ? xV.property_denylist = [...VV.property_blacklist, ...VV.property_denylist] : Cy.error(DZ + VV.property_denylist)), xV
      };
    var uZ = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(VV) {
          Cy.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = VV
        }
      },
      sZ = class VV {
        _removeExtension(VV) {
          if (!VV) return;
          const eV = this._extensions.indexOf(VV); - 1 !== eV && this._extensions.splice(eV, 1)
        }
        _replaceExtension(VV, eV) {
          var xV;
          return this._removeExtension(VV), this._extensions.push(eV), null === (xV = eV.initialize) || void 0 === xV || xV.call(eV), eV
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const VV = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!VV && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let eV, xV, JV;
          VV ? (eV = `persistence is set to '${this.config.persistence}'`, xV = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", JV = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (eV = "persistence is disabled (disable_persistence is true)", xV = "on every page load", JV = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${eV} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${xV}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${JV}`)
        }
        _syncCookielessIdentity() {
          const VV = this.persistence;
          if (!VV || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || VV.load(!0);
          const eV = this.get_distinct_id();
          if (!eV || "$posthog_cookieless" === eV) {
            const eV = this.config.get_device_id(xp());
            this.register({
              distinct_id: eV,
              $device_id: eV
            }), VV.set_property(je, le)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var VV, eV;
          return null !== (VV = null === (eV = this.featureFlags) || void 0 === eV ? void 0 : eV.hasLoadedFlags) && void 0 !== VV && VV
        }
        get flagsEndpointWasHit() {
          var VV, eV;
          return null !== (VV = null === (eV = this.featureFlags) || void 0 === eV ? void 0 : eV.hasLoadedFlags) && void 0 !== VV && VV
        }
        constructor() {
          var eV;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new uZ, this._personProcessingSetOncePropertiesSent = !1, this.version = UV.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new Sw, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = mZ(), this.SentryIntegration = XQ, this.sentryIntegration = VV => function(VV, eV) {
            const xV = NQ(VV, eV);
            return {
              name: AQ,
              processEvent: VV => xV(VV)
            }
          }(this, VV), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new Hw(this), this.pageViewManager = new MQ(this), this.rateLimiter = new an(this), this.requestRouter = new rZ(this), this.consent = new Ap(this), this.externalIntegrations = new tZ(this);
          const xV = null !== (eV = VV.__defaultExtensionClasses) && void 0 !== eV ? eV : {};
          this.featureFlags = xV.featureFlags && new xV.featureFlags(this), this.toolbar = xV.toolbar && new xV.toolbar(this), this.surveys = xV.surveys && new xV.surveys(this), this.conversations = xV.conversations && new xV.conversations(this), this.logs = xV.logs && new xV.logs(this), this.metrics = xV.metrics && new xV.metrics(this), this.experiments = xV.experiments && new xV.experiments(this), this.exceptions = xV.exceptions && new xV.exceptions(this), this.people = {
            set: (VV, eV, xV) => {
              const JV = Ax(VV) ? {
                [VV]: eV
              } : VV;
              this.setPersonProperties(JV), null == xV || xV({})
            },
            set_once: (VV, eV, xV) => {
              const JV = Ax(VV) ? {
                [VV]: eV
              } : VV;
              this.setPersonProperties(void 0, JV), null == xV || xV({})
            }
          }, this.on("eventCaptured", (VV => Cy.info(`send "${null==VV?void 0:VV.event}"`, VV)))
        }
        init(eV, xV, JV) {
          if (JV && JV !== LZ) {
            var YV;
            const UV = null !== (YV = MZ[JV]) && void 0 !== YV ? YV : new VV;
            return UV._init(eV, xV, JV), MZ[JV] = UV, MZ[LZ][JV] = UV, UV
          }
          return this._init(eV, xV, JV)
        }
        _init(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 ? arguments[2] : void 0;
          var JV, YV, yV;
          const pV = Ax(VV) ? VV.trim() : "";
          if (!pV) return Cy.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var QV;
          if (this.__loaded) return pV !== (null === (QV = this.config) || void 0 === QV ? void 0 : QV.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${pV}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = mZ(eV.defaults), eV.debug = this._checkLocalStorageForDebug(eV.debug), this._originalUserConfig = eV, this._triggered_notifs = [], eV.person_profiles ? this._initialPersonProfilesConfig = eV.person_profiles : eV.process_person && (this._initialPersonProfilesConfig = eV.process_person);
          const nV = mZ(eV.defaults),
            wV = HZ(eV),
            ZV = hy({}, nV, wV, {
              name: xV,
              token: pV
            });
          Fx(nV.rageclick) && Fx(wV.rageclick) && (ZV.rageclick = hy({}, nV.rageclick, wV.rageclick)), Fx(nV.session_recording) && Fx(wV.session_recording) && (ZV.session_recording = hy({}, nV.session_recording, wV.session_recording)), this.set_config(ZV), this.config.on_xhr_error && Cy.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = eV.disable_compression ? void 0 : En.GZipJS;
          const vV = this._is_persistence_disabled(),
            rV = !this._inCookielessMode();
          if (this.persistence = new bn(this.config, vV, !0, rV), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new bn(jY(jY({}, this.config), {}, {
              persistence: "sessionStorage"
            }), vV, !1, rV), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !vV && Pp._is_supported()) {
            const VV = Pp._parse(this._sessionRegisteredPropertiesStorageKey);
            qx(VV) && VV.forEach((VV => {
              Ax(VV) && this._sessionRegisteredPropKeys.add(VV)
            }))
          } else Pp._remove(this._sessionRegisteredPropertiesStorageKey);
          const kV = jY({}, this.persistence.props),
            bV = jY({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new fw(((VV, eV) => this._send_retriable_request(VV, eV)), this.config.request_queue_config), this._retryQueue = new Kw(this), this.__request_queue = [];
          const EV = this._inCookielessMode();
          EV || (this.sessionManager = new Ow(this), this.sessionPropsManager = new sw(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((VV, eV, xV) => {
            ((null == xV ? void 0 : xV.activityTimeout) || (null == xV ? void 0 : xV.sessionPastMaximumLength) || (null == xV ? void 0 : xV.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (Cy.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(EV)
          }), 0)) : (Cy.info("Initializing extensions synchronously"), this._initExtensions(EV)), UV.DEBUG = UV.DEBUG || this.config.debug, UV.DEBUG && Cy.info("Starting in debug mode", {
            this: this,
            config: eV,
            thisC: jY({}, this.config),
            p: kV,
            s: bV
          }), this.config.identity_distinct_id && !(null === (JV = eV.bootstrap) || void 0 === JV ? void 0 : JV.distinctID) && (eV.bootstrap = jY(jY({}, eV.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const BV = null === (YV = eV.bootstrap) || void 0 === YV ? void 0 : YV.distinctID;
          if (this._hasStableInitialDistinctId = !!BV && !Nx(BV), null === (yV = eV.bootstrap) || void 0 === yV ? void 0 : yV.distinctID) {
            const VV = eV.bootstrap.distinctID,
              xV = this.get_distinct_id(),
              JV = this.persistence.get_property(je);
            if (eV.bootstrap.isIdentifiedID && null != xV && xV !== VV && "anonymous" === JV) this.identify(VV);
            else if (eV.bootstrap.isIdentifiedID && null != xV && xV !== VV && "identified" === JV) Cy.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const xV = this.config.get_device_id(xp()),
                JV = eV.bootstrap.isIdentifiedID ? xV : VV;
              this.persistence.set_property(je, eV.bootstrap.isIdentifiedID ? Le : le), this.register({
                distinct_id: VV,
                $device_id: JV
              })
            }
          }
          if (EV) this.register_once({
            distinct_id: Ne,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const VV = this.config.get_device_id(xp());
            this.register_once({
              distinct_id: VV,
              $device_id: VV
            }, ""), this.persistence.set_property(je, le)
          }
          return uy(Se, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), uy(Se, "pageshow", (() => {
            var VV;
            this._isPageUnloading = !1, this._isShutdown || null === (VV = this._retryQueue) || void 0 === VV || VV.resume()
          })), eV.segment ? PQ(this, (() => this._loaded())) : this._loaded(), tx(this.config._onCapture) && this.config._onCapture !== GZ && (Cy.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (VV => this.config._onCapture(VV.event, VV)))), this.config.ip && Cy.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return eZ.apply(this, arguments)
          }().then((VV => {
            VV && this.register({
              [NV]: VV
            })
          })).catch(GZ), this
        }
        _isSharedExtension(VV) {
          const eV = VV;
          return Ax(eV.name) && tx(eV.setup)
        }
        _enrollExtension(VV, eV) {
          var xV = this;
          this._isSharedExtension(VV) ? eV.push(fx((function*() {
            try {
              yield VV.setup(xV._getBrowserClientAdapter())
            } catch (xV) {
              Cy.error(`Failed to set up extension "${VV.name}"`, xV);
              try {
                var eV;
                yield null === (eV = VV.dispose) || void 0 === eV ? void 0 : eV.call(VV)
              } catch (eV) {
                Cy.error(`Failed to dispose extension "${VV.name}"`, eV)
              }
            }
          }))) : this._extensions.push(VV)
        }
        _enrollFeatureFlags() {
          var eV, xV, JV, YV = this;
          const UV = null !== (eV = null === (xV = this.config.__extensionClasses) || void 0 === xV ? void 0 : xV.featureFlags) && void 0 !== eV ? eV : null === (JV = VV.__defaultExtensionClasses) || void 0 === JV ? void 0 : JV.featureFlags;
          var yV, pV, QV;
          if (UV)
            if (this.featureFlags && this.featureFlags instanceof UV || (null === (yV = this._featureFlagsReloadingUnsubscribe) || void 0 === yV || yV.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new UV(this)), tx(this.featureFlags.onReloading) && tx(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const VV = this.featureFlags;
                fx((function*() {
                  try {
                    yield VV.setup(YV._getBrowserClientAdapter())
                  } catch (eV) {
                    Cy.error("Failed to set up feature flags", eV);
                    const JV = YV._featureFlagsReloadingUnsubscribe;
                    YV._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == JV || JV()
                    } catch (VV) {
                      Cy.error("Failed to unsubscribe feature flag reloading", VV)
                    }
                    try {
                      yield VV.dispose()
                    } catch (VV) {
                      Cy.error("Failed to dispose feature flags", VV)
                    }
                  }
                }))()
              }
            } else null === (pV = (QV = this.featureFlags).initialize) || void 0 === pV || pV.call(QV)
        }
        _initExtensions(eV) {
          const xV = performance.now(),
            JV = jY(jY({}, VV.__defaultExtensionClasses), this.config.__extensionClasses),
            YV = [];
          var UV, yV, pV, QV, nV, wV, ZV, vV;
          JV.exceptions && this._extensions.push(this.exceptions = null !== (UV = this.exceptions) && void 0 !== UV ? UV : new JV.exceptions(this)), JV.historyAutocapture && this._extensions.push(this.historyAutocapture = new JV.historyAutocapture(this)), JV.tracingHeaders && this._extensions.push(this.tracingHeaders = new JV.tracingHeaders(this)), JV.siteApps && this._extensions.push(this.siteApps = new JV.siteApps(this)), JV.sessionRecording && !eV && this._extensions.push(this.sessionRecording = new JV.sessionRecording(this)), this.config.disable_scroll_properties || YV.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), JV.autocapture && this._enrollExtension(this.autocapture = new JV.autocapture(this), YV), JV.surveys && this._enrollExtension(this.surveys = null !== (yV = this.surveys) && void 0 !== yV ? yV : new JV.surveys(this), YV), JV.logs && this._enrollExtension(this.logs = null !== (pV = this.logs) && void 0 !== pV ? pV : new JV.logs(this), YV), JV.metrics && this._extensions.push(this.metrics = null !== (QV = this.metrics) && void 0 !== QV ? QV : new JV.metrics(this)), JV.conversations && this._extensions.push(this.conversations = null !== (nV = this.conversations) && void 0 !== nV ? nV : new JV.conversations(this)), JV.productTours && this._extensions.push(this.productTours = new JV.productTours(this)), JV.heatmaps && this._extensions.push(this.heatmaps = new JV.heatmaps(this)), JV.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new JV.webVitalsAutocapture(this)), JV.exceptionObserver && this._extensions.push(this.exceptionObserver = new JV.exceptionObserver(this)), JV.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new JV.deadClicksAutocapture(this, tQ)), JV.toolbar && this._extensions.push(this.toolbar = null !== (wV = this.toolbar) && void 0 !== wV ? wV : new JV.toolbar(this)), JV.experiments && this._extensions.push(this.experiments = null !== (ZV = this.experiments) && void 0 !== ZV ? ZV : new JV.experiments(this)), JV.webMCP && this._extensions.push(this.webMCP = null !== (vV = this.webMCP) && void 0 !== vV ? vV : new JV.webMCP(this)), this._extensions.forEach((VV => {
            VV.initialize && YV.push((() => {
              var eV;
              null === (eV = VV.initialize) || void 0 === eV || eV.call(VV)
            }))
          })), YV.push((() => {
            if (this._pendingRemoteConfig) {
              const VV = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((eV => {
                var xV;
                return null === (xV = eV.onRemoteConfig) || void 0 === xV ? void 0 : xV.call(eV, VV)
              }))
            }
          })), this._processInitTaskQueue(YV, xV)
        }
        _processInitTaskQueue(VV, eV) {
          for (; VV.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - eV >= 30 && VV.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(VV, eV)
            }), 0));
            const xV = VV.shift();
            if (xV) try {
              xV()
            } catch (VV) {
              Cy.error("Error initializing extension:", VV)
            }
          }
          const xV = Math.round(performance.now() - eV);
          this.register_for_session({
            [Me]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [ze]: xV
          }), this.config.__preview_deferred_init_extensions && Cy.info(`PostHog extensions initialized (${xV}ms)`)
        }
        _onRemoteConfig(VV) {
          if (!Oe || !Oe.body) return Cy.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(VV)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = VV), this._lastRemoteConfig = VV, this.compression = void 0, VV.ok) {
            var eV;
            const xV = VV.config;
            xV.supportedCompression && !this.config.disable_compression && (this.compression = vx(xV.supportedCompression, En.GZipJS) ? En.GZipJS : vx(xV.supportedCompression, En.Base64) ? En.Base64 : void 0), (null === (eV = xV.analytics) || void 0 === eV ? void 0 : eV.endpoint) && (this.analyticsDefaultEndpoint = xV.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : fe
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", VV), this._extensions.forEach((eV => {
            var xV;
            return null === (xV = eV.onRemoteConfig) || void 0 === xV ? void 0 : xV.call(eV, VV)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (VV) {
            Cy.critical("`loaded` function failed", VV)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == Vx ? void 0 : Vx.hostname)) {
            const VV = Vx.hostname,
              eV = this.config.internal_or_test_user_hostname;
            ("string" == typeof eV ? VV === eV : eV.test(VV)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new hn(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var VV;
          this.is_capturing() && this.config.request_batching && (null === (VV = this._requestQueue) || void 0 === VV || VV.enable())
        }
        _dom_loaded() {
          this.is_capturing() && oy(this.__request_queue, (VV => this._send_retriable_request(VV))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var VV, eV, xV, JV, YV, UV;
          this._isPageUnloading = !0, null === (VV = this.surveys) || void 0 === VV || null === (eV = VV.handlePageUnload) || void 0 === eV || eV.call(VV), null === (xV = this.metrics) || void 0 === xV || xV.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(He), null === (JV = this.logs) || void 0 === JV || JV.flushLogs("sendBeacon"), null === (YV = this._requestQueue) || void 0 === YV || YV.unload(), null === (UV = this._retryQueue) || void 0 === UV || UV.unload()) : this._shouldCapturePageleave() && this.capture(He, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(VV) {
          Lw(this, VV)
        }
        _send_retriable_request(VV, eV) {
          this._retryQueue ? this._retryQueue.retriableRequest(VV, eV) : this._send_request(eV ? jY(jY({}, VV), {}, {
            transport: eV
          }) : VV)
        }
        _execute_array(VV) {
          zZ++;
          try {
            let eV;
            const xV = [],
              JV = [],
              YV = [];
            oy(VV, (VV => {
              if (VV)
                if (eV = VV[0], qx(eV)) YV.push(VV);
                else if (tx(VV)) try {
                VV.call(this)
              } catch (eV) {
                Cy.error("Error executing queued PostHog call", VV, eV)
              } else qx(VV) && "alias" === eV ? xV.push(VV) : qx(VV) && -1 !== eV.indexOf("capture") && tx(this[eV]) ? YV.push(VV) : JV.push(VV)
            }));
            const UV = function(VV, eV) {
              oy(VV, (function(VV) {
                try {
                  if (qx(VV[0])) {
                    let xV = eV;
                    cy(VV, (function(VV) {
                      xV = xV[VV[0]].apply(xV, VV.slice(1))
                    }))
                  } else eV[VV[0]].apply(eV, VV.slice(1))
                } catch (eV) {
                  Cy.error("Error executing queued PostHog call", VV, eV)
                }
              }))
            };
            UV(xV, this), UV(JV, this), UV(YV, this)
          } finally {
            zZ--
          }
        }
        push(eV) {
          if (zZ > 0 && qx(eV) && Ax(eV[0])) {
            const xV = VV.prototype[eV[0]];
            tx(xV) && xV.apply(this, eV.slice(1))
          } else this._execute_array([eV])
        }
        get _facebookClickIdChannel() {
          return {
            property: zV,
            persistenceKey: GV,
            cookieName: "_fbc",
            pattern: cZ,
            register: (VV, eV) => {
              var xV;
              return null === (xV = this.persistence) || void 0 === xV ? void 0 : xV.register({
                [GV]: {
                  value: VV,
                  delivered: eV
                }
              })
            },
            unregister: () => {
              var VV;
              return null === (VV = this.persistence) || void 0 === VV ? void 0 : VV.unregister(GV)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: WV,
            persistenceKey: RV,
            cookieName: "_fbp",
            pattern: hZ,
            register: (VV, eV) => {
              var xV;
              return null === (xV = this.persistence) || void 0 === xV ? void 0 : xV.register({
                [RV]: {
                  value: VV,
                  delivered: eV
                }
              })
            },
            unregister: () => {
              var VV;
              return null === (VV = this.persistence) || void 0 === VV ? void 0 : VV.unregister(RV)
            }
          }
        }
        _getPersistedMetaIdentifier(VV) {
          var eV;
          const xV = null === (eV = this.persistence) || void 0 === eV ? void 0 : eV.get_property(VV.persistenceKey);
          return Ax(xV) && VV.pattern.test(xV) ? {
            value: xV,
            delivered: !1
          } : Fx(xV) && Ax(xV.value) && VV.pattern.test(xV.value) ? {
            value: xV.value,
            delivered: !0 === xV.delivered
          } : void 0
        }
        _storeMetaIdentifier(VV, eV, xV) {
          return eV === (null == xV ? void 0 : xV.value) ? {
            value: eV,
            pending: !xV.delivered
          } : (VV.register(eV, !1), {
            value: eV,
            pending: !0
          })
        }
        _readMetaCookie(VV) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const eV = Sy(VV.cookieName);
          return Ax(eV) && VV.pattern.test(eV) ? eV : void 0
        }
        _updateFacebookClickId(VV, eV, xV, JV) {
          if (!this.persistence) return;
          const YV = this._facebookClickIdChannel;
          this.persistence.refreshKey(YV.persistenceKey);
          const UV = this._getPersistedMetaIdentifier(YV);
          if (JV) return void YV.unregister();
          if (xV) return Ax(eV) && cZ.test(eV) ? this._storeMetaIdentifier(YV, eV, UV) : void YV.unregister();
          const yV = Ax(VV) && oZ.test(VV) ? VV : void 0,
            pV = this._readMetaCookie(YV);
          return pV && ((VV, eV, xV) => {
            const JV = VV.split(".");
            if (eV) return JV[3] === eV;
            if (!xV) return !0;
            const YV = xV.value.split(".");
            return JV[3] === YV[3] || Number(JV[2]) > Number(YV[2])
          })(pV, yV, UV) ? this._storeMetaIdentifier(YV, pV, UV) : yV ? (null == UV ? void 0 : UV.value.split(".")[3]) === yV ? {
            value: UV.value,
            pending: !UV.delivered
          } : this._storeMetaIdentifier(YV, `fb.1.${Date.now()}.${yV}`, UV) : UV ? {
            value: UV.value,
            pending: !UV.delivered
          } : void 0
        }
        _updateFacebookBrowserId(VV, eV, xV) {
          if (!this.persistence) return;
          const JV = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(JV.persistenceKey);
          const YV = this._getPersistedMetaIdentifier(JV);
          if (xV) return void JV.unregister();
          if (eV) return Ax(VV) && hZ.test(VV) ? this._storeMetaIdentifier(JV, VV, YV) : void JV.unregister();
          const UV = this._readMetaCookie(JV);
          return UV ? this._storeMetaIdentifier(JV, UV, YV) : YV ? {
            value: YV.value,
            pending: !YV.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(VV, eV) {
          if (!this.persistence) return;
          this.persistence.refreshKey(VV.persistenceKey);
          const xV = this._getPersistedMetaIdentifier(VV);
          (null == xV ? void 0 : xV.value) !== eV || xV.delivered || VV.register(eV, !0)
        }
        capture(VV, eV, xV) {
          var JV, YV;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void Cy.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (Px(VV) || !Ax(VV)) return void Cy.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === VV && this._inCookielessMode()) return;
          const UV = !this.config.opt_out_useragent_filter && this._is_bot();
          if (UV && !this.config.__preview_capture_bot_pageviews) return;
          const yV = (null == xV ? void 0 : xV.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == yV ? void 0 : yV.isRateLimited) return void Cy.critical("This capture call is ignored due to client rate limiting.");
          let pV;
          (null == eV ? void 0 : eV.$current_url) && !Ax(null == eV ? void 0 : eV.$current_url) && (Cy.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == eV || delete eV.$current_url), "$exception" !== VV || (null == xV ? void 0 : xV._originatedFromCaptureException) || Cy.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (pV = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const QV = new Date,
            nV = (null == xV ? void 0 : xV.timestamp) || QV,
            wV = QY(null == xV ? void 0 : xV.uuid, xp);
          let ZV = {
            uuid: wV,
            event: VV,
            properties: this.calculateEventProperties(VV, eV || {}, nV, wV)
          };
          "$pageview" === VV && this.config.__preview_capture_bot_pageviews && UV && (ZV.event = "$bot_pageview", ZV.properties.$browser_type = "bot"), yV && (ZV.properties.$lib_rate_limit_remaining_tokens = yV.remainingTokens);
          const vV = "$feature_flag_called" === VV && !1 === ZV.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == xV ? void 0 : xV.$set) && !vV && (ZV.$set = null == xV ? void 0 : xV.$set);
          const rV = Fx(null == eV ? void 0 : eV.$set) ? eV.$set : void 0,
            kV = qx(null == eV ? void 0 : eV.$unset) ? eV.$unset : [],
            bV = (null == xV ? void 0 : xV.$unset) || [],
            EV = VV => {
              var eV;
              const JV = !!(null == xV ? void 0 : xV.$set) && VV in xV.$set;
              return {
                hasProvided: JV || !!rV && VV in rV,
                provided: JV ? null == xV || null === (eV = xV.$set) || void 0 === eV ? void 0 : eV[VV] : null == rV ? void 0 : rV[VV],
                unset: -1 !== kV.indexOf(VV) || -1 !== bV.indexOf(VV)
              }
            },
            BV = EV(zV),
            jV = EV(WV),
            qV = [{
              channel: this._facebookClickIdChannel,
              hasProvided: BV.hasProvided,
              update: this._updateFacebookClickId(null == pV ? void 0 : pV.fbclid, BV.provided, BV.hasProvided, BV.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: jV.hasProvided,
              update: this._updateFacebookBrowserId(jV.provided, jV.hasProvided, jV.unset)
            }];
          for (const {
              channel: zV,
              hasProvided: WV,
              update: RV
            }
            of qV) RV && !0 === ZV.properties.$process_person_profile && RV.pending && !WV && !vV && (ZV.$set = jY({
            [zV.property]: RV.value
          }, ZV.$set));
          const tV = null == xV ? void 0 : xV.$unset;
          tV && (ZV.$unset = tV);
          const FV = vV ? void 0 : this._calculate_set_once_properties(null == xV ? void 0 : xV.$set_once, VV !== se, VV === ue);
          if (FV && (ZV.$set_once = FV), (null == xV ? void 0 : xV._noTruncate) || (TV = this.config.properties_string_max_length, ZV = function(VV, eV) {
              const xV = new Set;
              return function VV(JV, YV) {
                if (JV !== Object(JV)) return eV ? eV(JV) : JV;
                if (xV.has(JV)) return;
                let UV;
                if (xV.add(JV), qx(JV)) UV = [], oy(JV, (eV => {
                  UV.push(VV(eV))
                }));
                else {
                  const eV = {};
                  cy(Cx(JV) ? my(JV) : JV, ((JV, YV) => {
                    xV.has(JV) || (eV[YV] = VV(JV, YV))
                  })), UV = eV
                }
                return UV
              }(VV)
            }(ZV, (VV => Ax(VV) ? VV.slice(0, TV) : VV))), ZV.timestamp = nV, Px(null == xV ? void 0 : xV.timestamp) || (ZV.properties.$event_time_override_provided = !0, ZV.properties.$event_time_override_system_time = QV), vV && (ZV.properties = function(VV) {
              let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const xV = {},
                JV = eV => {
                  void 0 !== VV[eV] && (xV[eV] = VV[eV])
                };
              return bU.forEach(JV), eV.forEach(JV), xV
            }(ZV.properties, lZ)), VV === Pn || VV === An) {
            const xV = null == eV ? void 0 : eV[Nn],
              JV = null == eV ? void 0 : eV[Xn];
            bZ({
              id: xV,
              current_iteration: JV
            }), ZV.$set = jY(jY({}, ZV.$set), {}, {
              [xZ({
                id: xV,
                current_iteration: JV
              }, VV === An ? "responded" : "dismissed")]: !0
            })
          } else VV === Tn && (ZV.$set = jY(jY({}, ZV.$set), {}, {
            [Mn]: (new Date).toISOString()
          }));
          var TV;
          if (VV === Rn) {
            const VV = null == eV ? void 0 : eV[Dn];
            VV && (ZV.$set = jY(jY({}, ZV.$set), {}, {
              [`${gn}/${VV}`]: (new Date).toISOString()
            }))
          }
          const PV = jY(jY({}, ZV.properties.$set), ZV.$set);
          if (Tx(PV) || this.setPersonPropertiesForFlags(PV), !Mx(this.config.before_send)) {
            const VV = this._runBeforeSend(ZV);
            if (!VV) return;
            ZV = VV, ZV.uuid = QY(ZV.uuid, xp)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && aZ(VV) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const AV = qV.filter((VV => {
            let {
              channel: eV,
              update: xV
            } = VV;
            var JV, YV, UV;
            const yV = null !== (JV = null === (YV = ZV.$set) || void 0 === YV ? void 0 : YV[eV.property]) && void 0 !== JV ? JV : Fx(null === (UV = ZV.properties) || void 0 === UV ? void 0 : UV.$set) ? ZV.properties.$set[eV.property] : void 0;
            return (null == xV ? void 0 : xV.pending) && yV === xV.value
          }));
          this._internalEventEmitter.emit("eventCaptured", ZV);
          const NV = null !== (JV = null == xV ? void 0 : xV._url) && void 0 !== JV ? JV : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            XV = "recordings" === (null == xV ? void 0 : xV._batchKey) || /\/s\/(?:\?|$)/.test(NV),
            MV = jY(jY(jY({
              method: "POST",
              url: NV,
              data: ZV,
              compression: "best-available",
              preferSyncCompression: null == xV ? void 0 : xV.send_instantly,
              timestampMode: XV ? "body" : "capture-body",
              batchKey: null == xV ? void 0 : xV._batchKey
            }, XV && (null === (YV = ZV.properties) || void 0 === YV ? void 0 : YV.$session_id) ? {
              batchGroup: ZV.properties.$session_id + (ZV.properties.$window_id ? `-${ZV.properties.$window_id}` : "")
            } : {}), (null == xV ? void 0 : xV.transport) ? {
              transport: xV.transport
            } : {}), AV.length ? {
              fireCallbackOnDrop: !0,
              callback: VV => {
                if (VV.statusCode >= 200 && 300 > VV.statusCode)
                  for (const {
                      channel: eV,
                      update: xV
                    }
                    of AV) this._markMetaIdentifierDelivered(eV, xV.value)
              }
            } : {});
          if (!this.config.request_batching || xV && !(null == xV ? void 0 : xV._batchKey) || (null == xV ? void 0 : xV.send_instantly)) {
            var GV;
            let VV;
            !MV.transport && !MV.callback && Tx(null !== (GV = this.config.request_headers) && void 0 !== GV ? GV : {}) && this._isPageUnloading && (VV = "sendBeacon"), this._send_retriable_request(MV, VV)
          } else this._requestQueue.enqueue(MV);
          return ZV
        }
        _addCaptureHook(VV) {
          return this.on("eventCaptured", (eV => VV(eV.event, eV)))
        }
        getExtension(VV) {
          var eV;
          return null === (eV = this._browserClientAdapter) || void 0 === eV ? void 0 : eV.getExtension(VV)
        }
        _getBrowserClientAdapter() {
          var VV;
          return null !== (VV = this._browserClientAdapter) && void 0 !== VV ? VV : this._browserClientAdapter = new XZ(this)
        }
        _registerExtensionEventProperties(VV) {
          this._extensionEventPropertyProducers.push(VV);
          let eV = !0;
          return () => {
            if (!eV) return;
            eV = !1;
            const xV = this._extensionEventPropertyProducers.indexOf(VV); - 1 !== xV && this._extensionEventPropertyProducers.splice(xV, 1)
          }
        }
        _processCookieIdentityChange() {
          let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var eV, xV, JV;
          return !!(null === (eV = this.persistence) || void 0 === eV ? void 0 : eV.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (JV = this.sessionPersistence) || void 0 === JV || JV.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (xV = this.featureFlags) || void 0 === xV || xV.reset(), VV && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(VV, eV, xV, JV, UV) {
          if (xV = xV || new Date, !this.persistence || !this.sessionPersistence) return eV;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const yV = UV ? void 0 : this.persistence.remove_event_timer(VV);
          let pV = jY({}, eV);
          if (pV.token = this.config.token, pV.$config_defaults = this.config.defaults, this._inCookielessMode() && (pV[Xe] = !0), "$snapshot" === VV) {
            const VV = jY(jY({}, this.persistence.properties()), this.sessionPersistence.properties());
            return pV.distinct_id = VV.distinct_id, (!Ax(pV.distinct_id) && !zx(pV.distinct_id) || Nx(pV.distinct_id)) && Cy.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), pV
          }
          const QV = function(VV, eV, xV) {
            let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var UV, yV, pV, QV;
            if (!Ux) return {};
            const nV = VV ? [...LQ, ...eV || []] : [],
              [wV, ZV] = SJ(Ux),
              [vV, rV] = function(VV) {
                for (let eV = 0; VY.length > eV; eV++) {
                  const [xV, JV, YV] = VY[eV], UV = VV.match(xV);
                  if (UV) {
                    const eV = YV && VV.match(YV) || UV;
                    return [JV, (null == eV ? void 0 : eV[1]) || ""]
                  }
                }
                return ["", ""]
              }(Ux),
              kV = function() {
                const VV = "u" > typeof navigator ? navigator : void 0;
                return (null == VV ? void 0 : VV.brave) ? {
                  brave: !0
                } : {}
              }(),
              bV = {};
            Px(xV) || (bV.detectGoogleSearchApp = xV);
            const EV = {},
              BV = null === (UV = navigator) || void 0 === UV || null === (UV = UV.userAgentData) || void 0 === UV ? void 0 : UV.platform,
              jV = null === (yV = navigator) || void 0 === yV ? void 0 : yV.maxTouchPoints,
              qV = null == Se || null === (pV = Se.screen) || void 0 === pV ? void 0 : pV.width,
              tV = null == Se || null === (QV = Se.screen) || void 0 === QV ? void 0 : QV.height,
              FV = null == Se ? void 0 : Se.devicePixelRatio;
            Px(BV) || (EV.userAgentDataPlatform = BV), Px(jV) || (EV.maxTouchPoints = jV), Px(qV) || (EV.screenWidth = qV), Px(tV) || (EV.screenHeight = tV), Px(FV) || (EV.devicePixelRatio = FV);
            const TV = hy(fy({
              $os: wV,
              $os_version: ZV,
              $browser: KJ(Ux, navigator.vendor, kV, bV),
              $webview_app: vV,
              $webview_app_version: rV,
              $device: IJ(Ux),
              $device_type: dJ(Ux, EV),
              $timezone: gQ(),
              $timezone_offset: xn()
            }), {
              $current_url: hQ(JV ? wY(null == Vx ? void 0 : Vx.href) : null == Vx ? void 0 : Vx.href, nV, mQ),
              $host: null == Vx ? void 0 : Vx.host,
              $pathname: null == Vx ? void 0 : Vx.pathname,
              $raw_user_agent: Ux.length > 1e3 ? Ux.substring(0, 997) + "..." : Ux,
              $browser_version: uJ(Ux, navigator.vendor, kV, bV),
              $browser_language: SQ(),
              $browser_language_prefix: IQ(),
              $screen_height: null == Se ? void 0 : Se.screen.height,
              $screen_width: null == Se ? void 0 : Se.screen.width,
              $viewport_height: null == Se ? void 0 : Se.innerHeight,
              $viewport_width: null == Se ? void 0 : Se.innerWidth,
              $lib: YV.LIB_NAME,
              $lib_version: YV.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return YV.SDK_DIST_CHANNEL && (TV.$sdk_dist_channel = YV.SDK_DIST_CHANNEL), TV
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: VV,
              windowId: eV
            } = this.sessionManager.checkAndGetSessionAndWindowId(UV, xV.getTime(), !0);
            pV.$session_id = VV, pV.$window_id = eV
          }
          this.sessionPropsManager && hy(pV, this.sessionPropsManager.getSessionProps());
          try {
            var nV;
            if (this.sessionRecording) {
              const eV = this.sessionRecording.sdkDebugProperties,
                xV = !this._replayDebugPropertiesPaused && aZ(VV);
              for (const VV in eV)(xV || vx(iZ, VV)) && (pV[VV] = eV[VV])
            }
            pV.$sdk_debug_retry_queue_size = null === (nV = this._retryQueue) || void 0 === nV ? void 0 : nV.length
          } catch (VV) {
            pV.$sdk_debug_error_capturing_properties = String(VV)
          }
          let wV;
          if (this.requestRouter.region === nZ && (pV.$lib_custom_api_host = this.config.api_host), wV = "$pageview" !== VV || UV ? "$pageleave" !== VV || UV ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(xV) : this.pageViewManager.doPageView(xV, JV), pV = hy(pV, wV), "$pageview" === VV && Oe && (pV.title = Oe.title), !Px(yV)) {
            const VV = xV.getTime() - yV;
            pV.$duration = parseFloat((VV / 1e3).toFixed(3))
          }
          Ux && this.config.opt_out_useragent_filter && (pV.$browser_type = this._is_bot() ? "bot" : "browser");
          const ZV = this.persistence.properties(),
            vV = this.sessionPersistence.properties(),
            rV = pV.$groups,
            kV = ZV.$groups;
          Fx(rV) && !Tx(rV) && (pV.$groups = jY(jY({}, Fx(kV) ? kV : {}), rV)), cy(["$referrer", "$referring_domain"], (VV => {
            VV in ZV && delete vV[VV]
          }));
          const bV = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const YV of this._extensionEventPropertyProducers.slice()) try {
              hy(bV, YV())
            } catch (VV) {
              Cy.error("Failed to produce browser extension event properties", VV)
            }
          pV = hy({}, QV, ZV, vV, jY(jY({}, bV), pV)), pV.$is_identified = this._isIdentified(), qx(this.config.property_denylist) ? cy(this.config.property_denylist, (function(VV) {
            delete pV[VV]
          })) : Cy.error(DZ + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const EV = this.config.sanitize_properties;
          EV && (Cy.error(gZ), pV = EV(pV, VV));
          const BV = this._hasPersonProcessing();
          return pV.$process_person_profile = BV, BV && !UV && this._requirePersonProcessing("_calculate_event_properties"), pV
        }
        _calculate_set_once_properties(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var JV;
          if (!this.persistence || !this._hasPersonProcessing()) return VV;
          if (this._personProcessingSetOncePropertiesSent && !xV) return VV;
          const YV = this.persistence.get_initial_props(),
            UV = null === (JV = this.sessionPropsManager) || void 0 === JV ? void 0 : JV.getSetOnceProps();
          let yV = hy({}, YV, UV || {}, VV || {});
          const pV = this.config.sanitize_properties;
          return pV && (Cy.error(gZ), yV = pV(yV, "$set_once")), eV && (this._personProcessingSetOncePropertiesSent = !0), Tx(yV) ? void 0 : yV
        }
        register(VV, eV) {
          var xV;
          null === (xV = this.persistence) || void 0 === xV || xV.register(VV, eV)
        }
        register_once(VV, eV, xV) {
          var JV;
          null === (JV = this.persistence) || void 0 === JV || JV.register_once(VV, eV, xV)
        }
        register_for_session(VV) {
          var eV, xV;
          null === (eV = this.persistence) || void 0 === eV || eV.syncCookieProperties(), this._processCookieIdentityChange(), null === (xV = this.sessionPersistence) || void 0 === xV || xV.register(VV), Object.keys(VV).forEach((VV => this._sessionRegisteredPropKeys.add(VV))), this._persistSessionRegisteredPropKeys()
        }
        unregister(VV) {
          var eV;
          null === (eV = this.persistence) || void 0 === eV || eV.unregister(VV)
        }
        unregister_for_session(VV) {
          var eV;
          null === (eV = this.sessionPersistence) || void 0 === eV || eV.unregister(VV), this._sessionRegisteredPropKeys.delete(VV), this._persistSessionRegisteredPropKeys()
        }
        _register_single(VV, eV) {
          this.register({
            [VV]: eV
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((VV => {
            var eV;
            null === (eV = this.sessionPersistence) || void 0 === eV || eV.unregister(VV)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var VV;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (VV = this.sessionPersistence) || void 0 === VV ? void 0 : VV._disabled) || !Pp._is_supported()) return void Pp._remove(this._sessionRegisteredPropertiesStorageKey);
          const eV = [];
          this._sessionRegisteredPropKeys.forEach((VV => eV.push(VV))), eV.length > 0 ? Pp._set(this._sessionRegisteredPropertiesStorageKey, eV) : Pp._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(VV, eV) {
          var xV;
          return null === (xV = this.featureFlags) || void 0 === xV ? void 0 : xV.getFeatureFlag(VV, eV)
        }
        getFeatureFlagPayload(VV) {
          var eV;
          return null === (eV = this.featureFlags) || void 0 === eV ? void 0 : eV.getFeatureFlagPayload(VV)
        }
        getFeatureFlagResult(VV, eV) {
          var xV;
          return null === (xV = this.featureFlags) || void 0 === xV ? void 0 : xV.getFeatureFlagResult(VV, eV)
        }
        getAllFeatureFlags() {
          var VV, eV;
          return null !== (VV = null === (eV = this.featureFlags) || void 0 === eV ? void 0 : eV.getAllFeatureFlags()) && void 0 !== VV ? VV : []
        }
        isFeatureEnabled(VV, eV) {
          var xV, JV;
          return null !== (xV = null === (JV = this.featureFlags) || void 0 === JV ? void 0 : JV.isFeatureEnabled(VV, eV)) && void 0 !== xV ? xV : null == eV ? void 0 : eV.defaultValue
        }
        reloadFeatureFlags() {
          var VV;
          null === (VV = this.featureFlags) || void 0 === VV || VV.reloadFeatureFlags()
        }
        updateFlags(VV, eV, xV) {
          var JV;
          null === (JV = this.featureFlags) || void 0 === JV || JV.updateFlags(VV, eV, xV)
        }
        updateEarlyAccessFeatureEnrollment(VV, eV, xV) {
          var JV;
          null === (JV = this.featureFlags) || void 0 === JV || JV.updateEarlyAccessFeatureEnrollment(VV, eV, xV)
        }
        getEarlyAccessFeatures(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0;
          var JV;
          return null === (JV = this.featureFlags) || void 0 === JV ? void 0 : JV.getEarlyAccessFeatures(VV, eV, xV)
        }
        on(VV, eV) {
          return this._internalEventEmitter.on(VV, eV)
        }
        onFeatureFlags(VV) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(VV) : (VV([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(VV) {
          return this.surveys ? this.surveys.onSurveysLoaded(VV) : (VV([], {
            isLoaded: !1,
            error: RZ
          }), () => {})
        }
        onSessionId(VV) {
          var eV, xV;
          return null !== (eV = null === (xV = this.sessionManager) || void 0 === xV ? void 0 : xV.onSessionId(VV)) && void 0 !== eV ? eV : () => {}
        }
        getSurveys(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(VV, eV) : VV([], {
            isLoaded: !1,
            error: RZ
          })
        }
        getActiveMatchingSurveys(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(VV, eV) : VV([], {
            isLoaded: !1,
            error: RZ
          })
        }
        onActiveMatchingSurveysChanged(VV) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(VV) : (VV([], {
            isLoaded: !1,
            error: RZ
          }), () => {})
        }
        renderSurvey(VV, eV) {
          var xV;
          null === (xV = this.surveys) || void 0 === xV || xV.renderSurvey(VV, eV)
        }
        displaySurvey(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BZ;
          var xV;
          null === (xV = this.surveys) || void 0 === xV || xV.displaySurvey(VV, eV)
        }
        cancelPendingSurvey(VV) {
          var eV;
          null === (eV = this.surveys) || void 0 === eV || eV.cancelPendingSurvey(VV)
        }
        canRenderSurvey(VV) {
          var eV, xV;
          return null !== (eV = null === (xV = this.surveys) || void 0 === xV ? void 0 : xV.canRenderSurvey(VV)) && void 0 !== eV ? eV : {
            visible: !1,
            disabledReason: RZ
          }
        }
        canRenderSurveyAsync(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var xV, JV;
          return null !== (xV = null === (JV = this.surveys) || void 0 === JV ? void 0 : JV.canRenderSurveyAsync(VV, eV)) && void 0 !== xV ? xV : Promise.resolve({
            visible: !1,
            disabledReason: RZ
          })
        }
        _validateIdentifyId(VV) {
          return !VV || Nx(VV) ? (Cy.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === VV ? (Cy.critical(`The string "${VV}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(VV.toLowerCase()) && !["undefined", "null"].includes(VV.toLowerCase()) || (Cy.critical(`The string "${VV}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(VV, eV, xV) {
          if (!this.__loaded || !this.persistence) return Cy.uninitializedWarning("posthog.identify");
          if (zx(VV) && (VV = VV.toString(), Cy.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(VV)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const JV = this.get_distinct_id(),
            YV = this.persistence.syncCookieProperties() && this.get_distinct_id() !== JV,
            UV = this._processCookieIdentityChange(!1),
            yV = this.persistence._beginCookieSyncSuppression();
          let pV = !1;
          try {
            const JV = this.get_distinct_id();
            this.register({
              $user_id: VV
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: JV
            }, ""), VV !== JV && VV !== this.get_property("__alias") && (this.unregister(XV), this.register({
              distinct_id: VV
            }));
            const yV = (this.persistence.get_property("$user_state") || "anonymous") === le,
              nV = VV !== JV,
              wV = !nV && yV;
            if (nV && yV) {
              var QV;
              const YV = this.config.reuseAnonymousId ? {
                distinct_id: VV
              } : {
                distinct_id: VV,
                $anon_distinct_id: JV
              };
              this.persistence.set_property(je, Le), this.setPersonPropertiesForFlags({
                $set: eV || {},
                $set_once: xV || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", YV, {
                $set: eV || {},
                $set_once: xV || {}
              }) && (this._cachedPersonProperties = QZ(VV, eV, xV)), null === (QV = this.featureFlags) || void 0 === QV || QV.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : JV)
            } else if (wV) {
              this.persistence.set_property(je, Le);
              const JV = eV || {},
                YV = xV || {};
              this.setPersonPropertiesForFlags({
                $set: JV,
                $set_once: YV
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: JV,
                $set_once: YV
              }) && (this._cachedPersonProperties = QZ(VV, eV, xV))
            } else(eV || xV) && this.setPersonProperties(eV, xV);
            nV || YV || UV ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(EV)) : wV && (eV || xV) && this.reloadFeatureFlags(), pV = !0
          } finally {
            yV && this.persistence._endCookieSyncSuppression(pV)
          }
        }
        setPersonProperties(VV, eV) {
          if (!VV && !eV) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const xV = QZ(this.get_distinct_id(), VV, eV);
          this._cachedPersonProperties !== xV ? (this.setPersonPropertiesForFlags({
            $set: VV || {},
            $set_once: eV || {}
          }, !0), this.capture("$set", {
            $set: VV || {},
            $set_once: eV || {}
          }) && (this._cachedPersonProperties = xV)) : Cy.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(VV) {
          var eV;
          const xV = (qx(VV) ? VV : [VV]).filter((VV => Ax(VV) && VV.length > 0));
          0 !== xV.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (eV = this.featureFlags) || void 0 === eV || eV.unsetPersonPropertiesForFlags(xV, !0), this.capture("$set", {
            $unset: xV
          }), this._cachedPersonProperties = null)
        }
        group(VV, eV, xV) {
          var JV;
          if (!VV || !eV) return void Cy.error("posthog.group requires a group type and group key");
          null === (JV = this.persistence) || void 0 === JV || JV.syncCookieProperties(), this._processCookieIdentityChange();
          const YV = this.getGroups(),
            UV = YV[VV] !== eV;
          if (UV && this.resetGroupPropertiesForFlags(VV), this.register({
              $groups: jY(jY({}, YV), {}, {
                [VV]: eV
              })
            }), (UV || xV) && this._hasPersonProcessing()) {
            const JV = {
              $group_type: VV,
              $group_key: eV
            };
            xV && (JV.$group_set = xV), this.capture(se, JV)
          }
          xV && this.setGroupPropertiesForFlags({
            [VV]: xV
          }), UV && !xV && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var xV;
          null === (xV = this.featureFlags) || void 0 === xV || xV.setPersonPropertiesForFlags(VV, eV)
        }
        resetPersonPropertiesForFlags() {
          let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var eV;
          null === (eV = this.featureFlags) || void 0 === eV || eV.resetPersonPropertiesForFlags(VV)
        }
        setGroupPropertiesForFlags(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var xV;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (xV = this.featureFlags) || void 0 === xV || xV.setGroupPropertiesForFlags(VV, eV))
        }
        resetGroupPropertiesForFlags(VV) {
          var eV;
          null === (eV = this.featureFlags) || void 0 === eV || eV.resetGroupPropertiesForFlags(VV)
        }
        reset(VV) {
          const eV = Wx(VV) ? VV : null == VV ? void 0 : VV.resetDeviceID,
            xV = Wx(VV) || null == VV ? void 0 : VV.bootstrap;
          this._reset(eV, !1, xV)
        }
        _reset(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0;
          var JV, YV, UV, yV, pV, QV;
          if (Cy.info("reset"), !this.__loaded) return Cy.uninitializedWarning("posthog.reset");
          const nV = null == xV ? void 0 : xV.sessionID;
          this.config.bootstrap = xV || (null === (JV = this._originalUserConfig) || void 0 === JV ? void 0 : JV.bootstrap) || {}, null === (YV = this.featureFlags) || void 0 === YV || null === (UV = YV.updateConfig) || void 0 === UV || UV.call(YV, this.config, this._shouldDisableFlags());
          const wV = this.get_property(AV),
            ZV = this.get_property(NV),
            vV = this.get_property(mV);
          null === (yV = this.sessionRecording) || void 0 === yV || yV.flushBeforeIdentityReset();
          const rV = this.is_capturing();
          eV || this.consent.reset(), eV || !rV || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const kV = null === (pV = this.persistence) || void 0 === pV || null === (QV = pV._beginCookieSyncSuppression) || void 0 === QV ? void 0 : QV.call(pV),
            bV = this._isConsentTransition;
          this._isConsentTransition = bV || eV;
          let EV = !1;
          try {
            var BV, jV, qV, tV, FV, TV, PV, XV, MV, zV, GV, WV, RV;
            if (null === (BV = this.persistence) || void 0 === BV || BV.clear(), null === (jV = this.sessionPersistence) || void 0 === jV || jV.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), Px(vV) || null === (zV = this.persistence) || void 0 === zV || zV.register({
                $session_recording_remote_config: vV
              }), null === (qV = this.surveys) || void 0 === qV || qV.reset(), null === (tV = this.featureFlags) || void 0 === tV || tV.reset(), null === (FV = this.conversations) || void 0 === FV || FV.reset(), null === (TV = this.logs) || void 0 === TV || TV.reset(), null === (PV = this.metrics) || void 0 === PV || PV.reset(), null === (XV = this.persistence) || void 0 === XV || XV.set_property("$user_state", "anonymous"), null === (MV = this.sessionManager) || void 0 === MV || MV.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: Ne,
              $device_id: null
            }, "");
            else {
              const eV = this.config.get_device_id(xp());
              this.register_once({
                distinct_id: eV,
                $device_id: VV ? eV : wV
              }, ""), VV || Px(ZV) || this.register({
                [NV]: ZV
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), xV && (xV.distinctID && !this._inCookielessMode() && (null === (RV = this.persistence) || void 0 === RV || RV.set_property("$user_state", xV.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: xV.distinctID
              })), null === (GV = this.featureFlags) || void 0 === GV || GV.initialize(), !Mx(nV) && !(null === (WV = this.sessionManager) || void 0 === WV ? void 0 : WV.setBootstrapSessionId(nV, !0)))) {
              const VV = jY({}, xV);
              delete VV.sessionID, this.config.bootstrap = VV
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, EV = !0
          } finally {
            var gV, DV;
            this._isConsentTransition = bV, kV && (null === (gV = this.persistence) || void 0 === gV || null === (DV = gV._endCookieSyncSuppression) || void 0 === DV || DV.call(gV, EV))
          }
          this.reloadFeatureFlags()
        }
        shutdown(VV) {
          var eV = this;
          return fx((function*() {
            if (!eV.__loaded) return void Cy.uninitializedWarning("posthog.shutdown");
            eV._isShutdown = !0, clearTimeout(eV._extensionInitTimeout), eV._extensionInitTimeout = void 0;
            const VV = eV._featureFlagsReloadingUnsubscribe;
            eV._featureFlagsReloadingUnsubscribe = void 0;
            for (const xV of [() => {
                var VV;
                return null === (VV = eV.sessionRecording) || void 0 === VV ? void 0 : VV.dispose()
              }, () => {
                var VV;
                return null === (VV = eV.logs) || void 0 === VV ? void 0 : VV.flushLogs("sendBeacon")
              }, () => {
                var VV;
                return null === (VV = eV.metrics) || void 0 === VV ? void 0 : VV.flush("sendBeacon")
              }, () => {
                var VV;
                return null === (VV = eV.metrics) || void 0 === VV ? void 0 : VV.dispose()
              }, () => {
                var VV;
                return null === (VV = eV.logs) || void 0 === VV ? void 0 : VV.dispose()
              }, () => {
                var VV;
                return null === (VV = eV.surveys) || void 0 === VV ? void 0 : VV.dispose()
              }, () => {
                var VV;
                return null === (VV = eV.autocapture) || void 0 === VV ? void 0 : VV.dispose()
              }, () => null == VV ? void 0 : VV(), () => {
                var VV;
                return null === (VV = eV._requestQueue) || void 0 === VV ? void 0 : VV.unload()
              }, () => {
                var VV;
                return null === (VV = eV._retryQueue) || void 0 === VV ? void 0 : VV.unload()
              }, () => {
                var VV;
                return null === (VV = eV.featureFlags) || void 0 === VV ? void 0 : VV.destroy()
              }, () => {
                var VV;
                return null === (VV = eV.persistence) || void 0 === VV ? void 0 : VV.destroy()
              }, () => {
                var VV;
                return null === (VV = eV.sessionPersistence) || void 0 === VV ? void 0 : VV.destroy()
              }]) try {
              const VV = xV();
              VV && tx(VV.then) && VV.then(void 0, (VV => {
                Cy.error("Error during shutdown", VV)
              }))
            } catch (VV) {
              Cy.error("Error during shutdown", VV)
            }
          }))()
        }
        setIdentity(VV, eV) {
          var xV;
          delete this.config.identity_claims, this.config.identity_distinct_id = VV, this.config.identity_hash = eV, this.alias(VV), null === (xV = this.conversations) || void 0 === xV || xV._onIdentityChanged()
        }
        clearIdentity() {
          var VV;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (VV = this.conversations) || void 0 === VV || VV._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var VV, eV;
          return null !== (VV = null === (eV = this.sessionManager) || void 0 === eV ? void 0 : eV.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== VV ? VV : ""
        }
        get_session_replay_url(VV) {
          if (!this.sessionManager) return "";
          const {
            sessionId: eV,
            sessionStartTimestamp: xV
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let JV = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${eV}`);
          if ((null == VV ? void 0 : VV.withTimestamp) && xV) {
            var YV;
            const eV = null !== (YV = VV.timestampLookBack) && void 0 !== YV ? YV : 10;
            if (!xV) return JV;
            JV += `?t=${Math.max(Math.floor(((new Date).getTime()-xV)/1e3)-eV,0)}`
          }
          return JV
        }
        alias(VV, eV) {
          return VV === this.get_property("$people_distinct_id") ? (Cy.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (Px(eV) && (eV = this.get_distinct_id()), VV !== eV ? (this._register_single(XV, VV), this.capture("$create_alias", {
            alias: VV,
            distinct_id: eV
          })) : (Cy.warn("alias matches current distinct_id - skipping api call."), this.identify(VV), -1)) : void 0
        }
        set_config(VV) {
          const eV = jY({}, this.config);
          if (Fx(VV)) {
            var xV, JV, YV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV;
            hy(this.config, HZ(VV));
            const FV = this._is_persistence_disabled();
            if (this.persistence) {
              const VV = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var BV, jV;
              if (VV && this.sessionPersistence !== this.persistence && (null === (BV = this.sessionPersistence) || void 0 === BV || BV.remove(), null === (jV = this.sessionPersistence) || void 0 === jV || jV.destroy()), this.persistence.update_config(this.config, eV, FV), VV) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new bn(jY(jY({}, this.config), {}, {
                persistence: "sessionStorage"
              }), FV, !1);
              else {
                var qV;
                null === (qV = this.sessionPersistence) || void 0 === qV || qV.update_config(jY(jY({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), jY(jY({}, eV), {}, {
                  persistence: "sessionStorage"
                }), FV)
              }
            }
            const TV = this._checkLocalStorageForDebug(this.config.debug);
            var tV;
            Wx(TV) && (this.config.debug = TV), Wx(this.config.debug) && (this.config.debug ? (UV.DEBUG = !0, np._is_supported() && np._set("ph_debug", !0), Cy.info("set_config", {
              config: VV,
              oldConfig: eV,
              newConfig: jY({}, this.config)
            })) : (UV.DEBUG = !1, np._is_supported() && np._remove("ph_debug"))), null === (xV = this.featureFlags) || void 0 === xV || null === (JV = xV.updateConfig) || void 0 === JV || JV.call(xV, this.config, this._shouldDisableFlags()), null === (YV = this.exceptionObserver) || void 0 === YV || YV.onConfigChange(), null === (yV = this.exceptions) || void 0 === yV || yV.onConfigChange(), null === (pV = this.metrics) || void 0 === pV || pV.onConfigChange(), null === (QV = this.webMCP) || void 0 === QV || QV.startIfEnabled(), null === (nV = this.sessionRecording) || void 0 === nV || nV.startIfEnabledOrStop(), null === (wV = this.tracingHeaders) || void 0 === wV || wV.startIfEnabledOrStop(), null === (ZV = this.autocapture) || void 0 === ZV || ZV.startIfEnabled(), null === (vV = this.heatmaps) || void 0 === vV || vV.startIfEnabled(), ("capture_pageview" in VV || "disable_capture_url_hashes" in VV) && (null === (tV = this.historyAutocapture) || void 0 === tV || tV.startIfEnabledOrStop()), null === (rV = this.exceptionObserver) || void 0 === rV || rV.startIfEnabledOrStop(), null === (kV = this.deadClicksAutocapture) || void 0 === kV || kV.startIfEnabledOrStop(), null === (bV = this.surveys) || void 0 === bV || bV.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (EV = this.externalIntegrations) || void 0 === EV || EV.startIfEnabledOrStop(), !eV.segment && this.config.segment && this.persistence && PQ(this, GZ, !1)
          }
        }
        _overrideSDKInfo(VV, eV) {
          UV.LIB_NAME = VV, UV.LIB_VERSION = eV
        }
        startSessionRecording(VV) {
          const eV = !0 === VV,
            xV = {
              sampling: eV || !!(null == VV ? void 0 : VV.sampling),
              linked_flag: eV || !!(null == VV ? void 0 : VV.linked_flag),
              url_trigger: eV || !!(null == VV ? void 0 : VV.url_trigger),
              event_trigger: eV || !!(null == VV ? void 0 : VV.event_trigger)
            };
          var JV, YV, UV, yV, pV;
          Object.values(xV).some(Boolean) && (null === (JV = this.sessionManager) || void 0 === JV || JV.checkAndGetSessionAndWindowId(), xV.sampling && (null === (YV = this.sessionRecording) || void 0 === YV || YV.overrideSampling()), xV.linked_flag && (null === (UV = this.sessionRecording) || void 0 === UV || UV.overrideLinkedFlag()), xV.url_trigger && (null === (yV = this.sessionRecording) || void 0 === yV || yV.overrideTrigger("url")), xV.event_trigger && (null === (pV = this.sessionRecording) || void 0 === pV || pV.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var VV;
          return !!(null === (VV = this.sessionRecording) || void 0 === VV ? void 0 : VV.started)
        }
        captureException(VV, eV) {
          try {
            if (!this.exceptions) return;
            const xV = this.exceptions.buildProperties(VV, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(jY(jY({}, xV), eV))
          } catch (VV) {
            return
          }
        }
        addExceptionStep(VV, eV) {
          var xV;
          null === (xV = this.exceptions) || void 0 === xV || xV.addExceptionStep(VV, eV)
        }
        captureLog(VV) {
          var eV;
          null === (eV = this.logs) || void 0 === eV || eV.captureLog(VV)
        }
        get logger() {
          var eV, xV;
          return null !== (eV = null === (xV = this.logs) || void 0 === xV ? void 0 : xV.logger) && void 0 !== eV ? eV : VV._noopLogger
        }
        startExceptionAutocapture(VV) {
          this.set_config({
            capture_exceptions: null == VV || VV
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(VV) {
          var eV, xV;
          return null !== (eV = null === (xV = this.toolbar) || void 0 === xV ? void 0 : xV.loadToolbar(VV)) && void 0 !== eV && eV
        }
        get_property(VV) {
          var eV;
          return null === (eV = this.persistence) || void 0 === eV ? void 0 : eV.props[VV]
        }
        getSessionProperty(VV) {
          var eV;
          return null === (eV = this.sessionPersistence) || void 0 === eV ? void 0 : eV.props[VV]
        }
        toString() {
          var VV;
          let eV = null !== (VV = this.config.name) && void 0 !== VV ? VV : LZ;
          return eV !== LZ && (eV = "posthog." + eV), eV
        }
        _isIdentified() {
          var VV, eV;
          return "identified" === (null === (VV = this.persistence) || void 0 === VV ? void 0 : VV.get_property("$user_state")) || "identified" === (null === (eV = this.sessionPersistence) || void 0 === eV ? void 0 : eV.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var VV, eV;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && Tx(this.getGroups()) && !(null === (VV = this.persistence) || void 0 === VV || null === (VV = VV.props) || void 0 === VV ? void 0 : VV.__alias) && !(null === (eV = this.persistence) || void 0 === eV || null === (eV = eV.props) || void 0 === eV ? void 0 : eV.$epp))
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
        _requirePersonProcessing(VV) {
          return "never" === this.config.person_profiles ? (Cy.error(VV + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(Ae, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const VV = this.consent.isOptedOut();
          return this.config.disable_persistence || VV && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var VV, eV;
          const xV = this._is_persistence_disabled();
          var JV, YV, UV;
          return this.is_capturing() || null === (JV = this.logs) || void 0 === JV || JV._onOptOut(), (null === (VV = this.persistence) || void 0 === VV ? void 0 : VV._disabled) !== xV && (null === (YV = this.persistence) || void 0 === YV || YV.set_disabled(xV)), (null === (eV = this.sessionPersistence) || void 0 === eV ? void 0 : eV._disabled) !== xV && (null === (UV = this.sessionPersistence) || void 0 === UV || UV.set_disabled(xV)), this._persistSessionRegisteredPropKeys(), xV
        }
        opt_in_capturing(eV) {
          var xV;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var JV, YV, UV, yV, pV, QV;
              null === (JV = this.sessionRecording) || void 0 === JV || JV.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (YV = this.sessionManager) || void 0 === YV || YV.destroy(), null === (UV = this.pageViewManager) || void 0 === UV || UV.destroy(), this.sessionManager = new Ow(this), this.pageViewManager = new MQ(this), this.persistence && (this.sessionPropsManager = new sw(this, this.sessionManager, this.persistence));
              const eV = null !== (yV = null === (pV = this.config.__extensionClasses) || void 0 === pV ? void 0 : pV.sessionRecording) && void 0 !== yV ? yV : null === (QV = VV.__defaultExtensionClasses) || void 0 === QV ? void 0 : QV.sessionRecording;
              var nV, wV;
              eV && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new eV(this)), this._lastRemoteConfig && (null === (nV = this.sessionRecording) || void 0 === nV || null === (wV = nV.onRemoteConfig) || void 0 === wV || wV.call(nV, this._lastRemoteConfig)))
            }
            var ZV, vV;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (xV = this.sessionRecording) || void 0 === xV || xV.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (ZV = this.surveys) || void 0 === ZV || ZV.loadIfEnabled()), (Px(null == eV ? void 0 : eV.captureEventName) || (null == eV ? void 0 : eV.captureEventName)) && this.capture(null !== (vV = null == eV ? void 0 : eV.captureEventName) && void 0 !== vV ? vV : "$opt_in", null == eV ? void 0 : eV.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else Cy.warn(WZ)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : Cy.warn(WZ)
        }
        _enterCookielessMode() {
          var VV, eV;
          const xV = this.sessionRecording;
          null == xV || xV.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: Ne,
            $device_id: null
          }), this._removeExtension(xV), this.sessionRecording = void 0, null === (VV = this.sessionManager) || void 0 === VV || VV.destroy(), null === (eV = this.pageViewManager) || void 0 === eV || eV.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const VV = this.consent.consent;
          return 1 === VV ? "granted" : 0 === VV ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return de ? VZ(de, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          Oe && ("visible" === Oe.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(Ke, {
            title: Oe.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (Oe.removeEventListener(FV, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), uy(Oe, FV, this._visibilityStateListener)))
        }
        debug(VV) {
          !1 === VV ? (null == Se || Se.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == Se || Se.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const VV = this._originalUserConfig || {};
          return "advanced_disable_flags" in VV ? !!VV.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (Cy.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(VV, eV, xV, JV, YV) {
            const UV = eV in VV && !Mx(VV[eV]),
              yV = xV in VV && !Mx(VV[xV]);
            return UV ? VV[eV] : !!yV && (YV && YV.warn(`Config field '${xV}' is deprecated. Please use '${eV}' instead. The old field will be removed in a future major version.`), VV[xV])
          }(VV, "advanced_disable_flags", "advanced_disable_decide", 0, Cy)
        }
        _runBeforeSend(VV) {
          var eV;
          if (Mx(this.config.before_send)) return VV;
          const xV = Object.keys(null !== (eV = VV.properties) && void 0 !== eV ? eV : {}).filter(gx),
            JV = qx(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let YV = VV;
          for (const UV of JV) try {
            if (YV = UV(YV), Mx(YV)) {
              const eV = `Event '${VV.event}' was rejected in beforeSend function`;
              return Rx(VV.event) ? Cy.warn(`${eV}. This can cause unexpected behavior.`) : Cy.info(eV), null
            }
            YV.properties && !Tx(YV.properties) || Cy.warn(`Event '${VV.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (eV) {
            return Cy.error(`Error in beforeSend function for event '${VV.event}':`, eV), null
          }
          for (const UV of xV)
            if (YV.properties && Mx(YV.properties[UV])) return Cy.warn(`Event '${VV.event}' had its '${UV}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return YV
        }
        getPageViewId() {
          var VV;
          return null === (VV = this.pageViewManager._currentPageview) || void 0 === VV ? void 0 : VV.pageViewId
        }
        captureTraceFeedback(VV, eV) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(VV),
            $ai_feedback_text: eV
          })
        }
        captureTraceMetric(VV, eV, xV) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(VV),
            $ai_metric_name: eV,
            $ai_metric_value: String(xV)
          })
        }
        _checkLocalStorageForDebug(VV) {
          const eV = Wx(VV) && !VV,
            xV = np._is_supported() && "true" === np._get("ph_debug");
          return !eV && (!!xV || VV)
        }
      };
    sZ.__defaultExtensionClasses = {}, sZ._noopLogger = (() => {
        const VV = () => {};
        return {
          trace: VV,
          debug: VV,
          info: VV,
          warn: VV,
          error: VV,
          fatal: VV
        }
      })(),
      function(VV, eV) {
        for (let xV = 0; eV.length > xV; xV++) VV.prototype[eV[xV]] = Ly(VV.prototype[eV[xV]])
      }(sZ, ["identify"]);
    var SZ = class {
      constructor(VV) {
        this.disabled = !1 === VV;
        const eV = Fx(VV) ? VV : {};
        this.thresholdPx = eV.threshold_px || 30, this.timeoutMs = eV.timeout_ms || 1e3, this.clickCount = eV.click_count || 3, this.clicks = []
      }
      isRageClick(VV, eV, xV) {
        if (this.disabled) return !1;
        const JV = this.clicks[this.clicks.length - 1];
        if (JV && Math.abs(VV - JV.x) + Math.abs(eV - JV.y) < this.thresholdPx && this.timeoutMs > xV - JV.timestamp) {
          if (this.clicks.push({
              x: VV,
              y: eV,
              timestamp: xV
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: VV,
          y: eV,
          timestamp: xV
        }];
        return !1
      }
    };
    const IZ = "$copy_autocapture",
      dZ = ay("[AutoCapture]");

    function OZ(VV, eV) {
      return eV.length > VV ? eV.slice(0, VV) + "..." : eV
    }

    function Vv(VV) {
      if (VV.previousElementSibling) return VV.previousElementSibling;
      let eV = VV;
      do {
        eV = eV.previousSibling
      } while (eV && !Mp(eV));
      return eV
    }
    var ev = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(VV) {
          var eV;
          if (!YQ(VV)) return !0;
          const xV = null !== (eV = this._refreshConfig().css_selector_ignorelist) && void 0 !== eV ? eV : Lp,
            JV = new Set;
          let YV = VV;
          for (; YV;) {
            if (JV.size >= 1e3 || JV.has(YV)) return !0;
            JV.add(YV);
            const VV = YV,
              eV = Dp(VV);
            if (vx(eV, "ph-no-capture") || vx(eV, "ph-sensitive") || UQ(VV) || xV.some((eV => cp(VV, eV)))) return !0;
            const UV = YV.parentNode;
            YV = Wp(UV) ? UV.host : UV && Mp(UV) ? UV : null
          }
          return !1
        }
        _trackPointer(VV) {
          if (!this.isEnabled || "pointercancel" === VV.type) return void this._clearPointer();
          if ("pointerdown" === VV.type) {
            this._clearPointer();
            const xV = ap(VV);
            var eV;
            return void(VV.isPrimary && 0 === VV.button && !VV.ctrlKey && xV && Mp(xV) && (this._pointerDown = {
              target: xV,
              excluded: this._isExcludedPointerTarget(xV),
              id: VV.pointerId,
              x: VV.clientX,
              y: VV.clientY,
              released: !1,
              distinctId: null === (eV = this._client) || void 0 === eV ? void 0 : eV.distinctId
            }))
          }
          const xV = this._pointerDown;
          xV && (VV.pointerId !== xV.id || Math.abs(VV.clientX - xV.x) > 5 || Math.abs(VV.clientY - xV.y) > 5 ? this._clearPointer() : "pointerup" === VV.type && (xV.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(VV) {
          var eV;
          const xV = this._pointerDown;
          this._clearPointer();
          const JV = ap(VV);
          if ((null == xV ? void 0 : xV.released) && xV.target.isConnected && xV.distinctId === (null === (eV = this._client) || void 0 === eV ? void 0 : eV.distinctId) && VV.pointerId === xV.id && (VV.detail > 0 || "touch" === VV.pointerType || "pen" === VV.pointerType) && 0 === VV.button && 5 >= Math.abs(VV.clientX - xV.x) && 5 >= Math.abs(VV.clientY - xV.y) && JV && (zp(JV, "html") || zp(JV, "body"))) {
            var YV;
            if (xV.excluded) return null;
            const VV = null !== (YV = this._refreshConfig().css_selector_ignorelist) && void 0 !== YV ? YV : Lp;
            return [JV, null == Oe ? void 0 : Oe.documentElement, null == Oe ? void 0 : Oe.body].some((eV => {
              if (!eV) return !1;
              const xV = Dp(eV);
              return vx(xV, "ph-no-capture") || vx(xV, "ph-sensitive") || !YQ(eV) || UQ(eV) || VV.some((VV => cp(eV, VV)))
            })) ? null : xV.target
          }
        }
        constructor(VV) {
          this._configSource = VV, this.name = FZ, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new SZ(this._config.rageclick), this._elementSelectors = null
        }
        setup(VV) {
          this._compileUrlPatterns(), this._client = VV;
          const eV = VV.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? eV.dispose() : (this._remoteConfigSubscription = eV, this.startIfEnabled())
        }
        dispose() {
          var VV;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (VV = this._remoteConfigSubscription) || void 0 === VV || VV.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var VV, eV;
          return this._refreshConfig(), this._config.url_allowlist = null === (VV = this._config.url_allowlist) || void 0 === VV ? void 0 : VV.map((VV => new RegExp(VV))), this._config.url_ignorelist = null === (eV = this._config.url_ignorelist) || void 0 === eV ? void 0 : eV.map((VV => new RegExp(VV))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void dZ.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!Se || !Oe) return;
          const VV = this._domEventHandler = VV => {
            VV = VV || (null == Se ? void 0 : Se.event);
            try {
              if ("blur" === VV.type) return void this._clearPointer();
              if (0 === VV.type.indexOf("pointer")) return void this._trackPointer(VV);
              const eV = "click" === VV.type ? this._recoverClickTarget(VV) : void 0;
              if (Xx(eV)) return;
              this._captureEvent(VV, "$autocapture", eV)
            } catch (VV) {
              dZ.error("Failed to capture event", VV)
            }
          };
          if (uy(Se, "blur", VV), uy(Oe, "submit", VV, {
              capture: !0
            }), uy(Oe, "change", VV, {
              capture: !0
            }), uy(Oe, "click", VV, {
              capture: !0
            }), cy(["pointerdown", "pointermove", "pointerup", "pointercancel"], (eV => {
              uy(Oe, eV, VV, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const VV = this._copiedTextHandler = VV => {
              VV = VV || (null == Se ? void 0 : Se.event);
              try {
                this._captureEvent(VV, IZ)
              } catch (VV) {
                dZ.error("Failed to capture clipboard event", VV)
              }
            };
            uy(Oe, "copy", VV, {
              capture: !0
            }), uy(Oe, "cut", VV, {
              capture: !0
            }), uy(Oe, "paste", VV, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == Se || Se.removeEventListener("blur", this._domEventHandler), cy(["pointerdown", "pointermove", "pointerup", "pointercancel"], (VV => {
            null == Oe || Oe.removeEventListener(VV, this._domEventHandler, !0)
          })), null == Oe || Oe.removeEventListener("submit", this._domEventHandler, !0), null == Oe || Oe.removeEventListener("change", this._domEventHandler, !0), null == Oe || Oe.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == Oe || Oe.removeEventListener("copy", this._copiedTextHandler, !0), null == Oe || Oe.removeEventListener("cut", this._copiedTextHandler, !0), null == Oe || Oe.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(VV) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !VV.ok) return void this.startIfEnabled();
          const eV = VV.config;
          eV.elementsChainAsString && (this._elementsChainAsString = eV.elementsChainAsString);
          const xV = eV.autocapture_opt_out;
          var JV;
          Wx(xV) && (null === (JV = this._client) || void 0 === JV || JV.kv.set("$autocapture_disabled_server_side", xV), this._isDisabledServerSide = xV), this.startIfEnabled()
        }
        setElementSelectors(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          VV.size ? this._elementSelectorsByOwner.set(eV, new Set(VV)) : this._elementSelectorsByOwner.delete(eV);
          const xV = new Set;
          this._elementSelectorsByOwner.forEach((VV => {
            VV.forEach((VV => xV.add(VV)))
          })), this._elementSelectors = xV
        }
        getElementSelectors(VV, eV) {
          var xV;
          const JV = [];
          return null === (xV = this._elementSelectors) || void 0 === xV || xV.forEach((xV => {
            const YV = null == Oe ? void 0 : Oe.querySelectorAll(xV);
            null == YV || YV.forEach((YV => {
              VV !== YV && eV !== YV || vx(JV, xV) || JV.push(xV)
            }))
          })), JV
        }
        get isEnabled() {
          var VV, eV;
          if (this._disposed) return !1;
          const xV = null === (VV = this._client) || void 0 === VV ? void 0 : VV.kv.get(DV),
            JV = this._isDisabledServerSide,
            YV = this._refreshConfig();
          if (!YV.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const UV = YV.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (Xx(JV) && !Wx(xV) && !UV) return !1;
          const yV = null !== (eV = this._isDisabledServerSide) && void 0 !== eV ? eV : !!xV;
          return !!YV.enabled && !yV
        }
        _captureEvent(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            xV = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let JV = xV || ap(VV);
          Gp(JV) && (JV = JV.parentNode || null);
          const YV = this._compileUrlPatterns();
          var UV;
          "$autocapture" === eV && "click" === VV.type && VV instanceof MouseEvent && YV.rageclick && (null === (UV = this.rageclicks) || void 0 === UV ? void 0 : UV.isRageClick(VV.clientX, VV.clientY, VV.timeStamp || (new Date).getTime())) && eQ(JV, YV.rageclick) && this._captureEvent(VV, "$rageclick", xV);
          const yV = eV === IZ,
            pV = yV ? jY(jY({}, YV), {}, {
              dom_event_allowlist: void 0
            }) : YV;
          if (JV && function(VV, eV, xV, JV, YV, UV) {
              var yV;
              if (!Se || xQ(VV)) return !1;
              if ((null == xV ? void 0 : xV.url_allowlist) && !gp(xV.url_allowlist, UV)) return !1;
              if ((null == xV ? void 0 : xV.url_ignorelist) && gp(xV.url_ignorelist, UV)) return !1;
              if (null == xV ? void 0 : xV.dom_event_allowlist) {
                const VV = xV.dom_event_allowlist;
                if (VV && !VV.some((VV => eV.type === VV))) return !1
              }
              const {
                parentIsUsefulElement: pV,
                targetElementList: QV
              } = JQ(VV, JV);
              if (! function(VV, eV) {
                  const xV = null == eV ? void 0 : eV.element_allowlist;
                  if (Px(xV)) return !0;
                  for (const JV of VV)
                    if (xV.some((VV => JV.tagName.toLowerCase() === VV))) return !0;
                  return !1
                }(QV, xV)) return !1;
              if (!hp(QV, null == xV ? void 0 : xV.css_selector_allowlist)) return !1;
              if (hp(QV, null !== (yV = null == xV ? void 0 : xV.css_selector_ignorelist) && void 0 !== yV ? yV : Lp)) return !1;
              try {
                const xV = Se.getComputedStyle(VV);
                if (xV && "pointer" === xV.getPropertyValue("cursor") && "click" === eV.type) return !0
              } catch (VV) {}
              const nV = VV.tagName.toLowerCase();
              switch (nV) {
                case "html":
                  return !1;
                case "form":
                  return (YV || ["submit"]).indexOf(eV.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (YV || ["change", "click"]).indexOf(eV.type) >= 0;
                default:
                  return pV ? (YV || ["click"]).indexOf(eV.type) >= 0 : (YV || ["click"]).indexOf(eV.type) >= 0 && (op.indexOf(nV) > -1 || "true" === VV.getAttribute("contenteditable"))
              }
            }(JV, VV, pV, yV, yV ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: YV.getCurrentUrl
              }
            })) {
            var QV;
            const {
              props: xV,
              explicitNoCapture: UV,
              target: yV
            } = function(VV, eV) {
              let {
                e: xV,
                maskAllElementAttributes: JV,
                maskAllText: YV,
                elementAttributeIgnoreList: UV,
                elementsChainAsString: yV,
                disableCaptureUrlHashes: pV
              } = eV;
              var QV, nV;
              if (!Mp(VV)) return {
                props: {}
              };
              const wV = [VV],
                ZV = new Set([VV]);
              let vV = VV;
              for (; vV.parentNode && !zp(vV, "body") && 1e3 > wV.length;)
                if (Wp(vV.parentNode)) {
                  const VV = vV.parentNode.host;
                  if (ZV.has(VV)) break;
                  ZV.add(VV), wV.push(VV), vV = VV
                } else {
                  if (!Mp(vV.parentNode)) break;
                  if (ZV.has(vV.parentNode)) break;
                  ZV.add(vV.parentNode), wV.push(vV.parentNode), vV = vV.parentNode
                } const rV = "click" === xV.type && "http://www.w3.org/2000/svg" === VV.namespaceURI ? wV.findIndex((VV => zp(VV, "button") || zp(VV, "a"))) : -1;
              rV > 0 && (YV = YV || wV.slice(0, rV + 1).some((VV => !YQ(VV) || UQ(VV))));
              const kV = [],
                bV = {};
              let EV, BV = !1,
                jV = !1;
              if (cy(wV, (VV => {
                  const eV = YQ(VV);
                  if (zp(VV, "a") && !JV && !(null == UV ? void 0 : UV.includes("href"))) {
                    const xV = VV.getAttribute("href");
                    BV = !!(eV && xV && rQ(xV)) && (pV ? wY(xV) : xV)
                  }
                  vx(Dp(VV), "ph-no-capture") && (jV = !0), kV.push(function(VV, eV, xV, JV) {
                    let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const UV = VV.tagName.toLowerCase(),
                      yV = {
                        tag_name: UV
                      };
                    op.indexOf(UV) > -1 && !xV && (yV.$el_text = "a" === UV.toLowerCase() || "button" === UV.toLowerCase() ? OZ(1024, kQ(VV)) : OZ(1024, Cp(VV)));
                    const pV = Dp(VV);
                    eV || (null == JV ? void 0 : JV.includes("class")) || 0 >= pV.length || (yV.classes = pV.filter((function(VV) {
                      return "" !== VV
                    }))), cy(VV.attributes, (function(xV) {
                      var UV;
                      if ((!UQ(VV) || -1 !== ["name", "id", "class", "aria-label"].indexOf(xV.name)) && !(null == JV ? void 0 : JV.includes(xV.name)) && !eV && rQ(xV.value) && (!Ax(UV = xV.name) || "_ngcontent" !== UV.substring(0, 10) && "_nghost" !== UV.substring(0, 7))) {
                        let VV = xV.value;
                        "class" === xV.name && (VV = Rp(VV).join(" ")), yV["attr__" + xV.name] = OZ(1024, "href" === xV.name && YV ? wY(VV) : VV)
                      }
                    }));
                    let QV = 1,
                      nV = 1,
                      wV = VV;
                    for (; wV = Vv(wV);) QV++, wV.tagName === VV.tagName && nV++;
                    return yV.nth_child = QV, yV.nth_of_type = nV, yV
                  }(VV, JV, YV, UV, pV)), cy(function(VV) {
                    if (!YQ(VV)) return {};
                    const eV = {};
                    return cy(VV.attributes, (function(VV) {
                      if (VV.name && 0 === VV.name.indexOf("data-ph-capture-attribute")) {
                        const xV = VV.name.replace("data-ph-capture-attribute-", ""),
                          JV = VV.value;
                        xV && JV && rQ(JV) && (eV[xV] = JV)
                      }
                    })), eV
                  }(VV), ((VV, eV) => {
                    ({}).hasOwnProperty.call(bV, eV) || (bV[eV] = VV)
                  }))
                })), jV) return {
                props: {},
                explicitNoCapture: jV
              };
              if (rV > 0 && (VV = wV[rV], kV.splice(0, rV)), YV || (kV[0].$el_text = zp(VV, "a") || zp(VV, "button") ? kQ(VV) : Cp(VV)), BV) {
                var qV, tV;
                kV[0].attr__href = BV;
                const VV = null === (qV = oQ(BV)) || void 0 === qV ? void 0 : qV.host,
                  eV = null == Se || null === (tV = Se.location) || void 0 === tV ? void 0 : tV.host;
                VV && eV && VV !== eV && (EV = BV)
              }
              return {
                props: hy((TV = xV.type, {
                  $event_type: TV,
                  $ce_version: 1
                }), yV ? {} : {
                  $elements: kV
                }, {
                  $elements_chain: (FV = kV, qx(FV) ? function(VV) {
                    return VV.map((VV => {
                      var eV, xV;
                      let JV = "";
                      if (VV.tag_name && (JV += VV.tag_name), VV.attr_class) {
                        VV.attr_class.sort();
                        for (const eV of VV.attr_class) JV += `.${eV.replace(/"/g,"")}`
                      }
                      const YV = jY(jY(jY(jY({}, VV.text ? {
                          text: VV.text
                        } : {}), {}, {
                          "nth-child": null !== (eV = VV.nth_child) && void 0 !== eV ? eV : 0,
                          "nth-of-type": null !== (xV = VV.nth_of_type) && void 0 !== xV ? xV : 0
                        }, VV.href ? {
                          href: VV.href
                        } : {}), VV.attr_id ? {
                          attr_id: VV.attr_id
                        } : {}), VV.attributes),
                        UV = {};
                      return ly(YV).sort(((VV, eV) => {
                        let [xV] = VV, [JV] = eV;
                        return function(VV, eV) {
                          return eV > VV ? -1 : VV > eV ? 1 : 0
                        }(xV, JV)
                      })).forEach((VV => {
                        let [eV, xV] = VV;
                        return UV[EQ(eV.toString())] = EQ(xV.toString())
                      })), JV += ":", JV += ly(UV).map((VV => {
                        let [eV, xV] = VV;
                        return `${eV}="${xV}"`
                      })).join(""), JV
                    })).join(";")
                  }(function(VV) {
                    return VV.map((VV => {
                      var eV, xV;
                      const JV = {
                        text: null === (eV = VV.$el_text) || void 0 === eV ? void 0 : eV.slice(0, 400),
                        tag_name: VV.tag_name,
                        href: null === (xV = VV.attr__href) || void 0 === xV ? void 0 : xV.slice(0, 2048),
                        attr_class: BQ(VV),
                        attr_id: VV.attr__id,
                        nth_child: VV.nth_child,
                        nth_of_type: VV.nth_of_type,
                        attributes: {}
                      };
                      return ly(VV).filter((VV => {
                        let [eV] = VV;
                        return 0 === eV.indexOf("attr__")
                      })).forEach((VV => {
                        let [eV, xV] = VV;
                        return JV.attributes[eV] = xV
                      })), JV
                    }))
                  }(FV)) : "")
                }, (null === (QV = kV[0]) || void 0 === QV ? void 0 : QV.$el_text) ? {
                  $el_text: null === (nV = kV[0]) || void 0 === nV ? void 0 : nV.$el_text
                } : {}, EV && "click" === xV.type ? {
                  $external_click_url: EV
                } : {}, bV),
                target: VV
              };
              var FV, TV
            }(JV, {
              e: VV,
              maskAllElementAttributes: YV.maskAllElementAttributes,
              maskAllText: YV.maskAllText,
              elementAttributeIgnoreList: YV.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: YV.disableCaptureUrlHashes
            });
            if (UV) return !1;
            const pV = this.getElementSelectors(JV, yV);
            if (pV && pV.length > 0 && (xV.$element_selectors = pV), eV === IZ) {
              const eV = VV.type || "clipboard";
              if ("paste" !== eV) {
                var nV, wV;
                const VV = null == Se || null === (nV = Se.getSelection()) || void 0 === nV ? void 0 : nV.toString(),
                  eV = ip(VV);
                if (!eV) return !1;
                xV.$selected_content = eV, xV.$clipboard_text_length = null !== (wV = null == VV ? void 0 : VV.length) && void 0 !== wV ? wV : 0
              }
              xV.$copy_type = eV
            }
            return null === (QV = this._client) || void 0 === QV || QV.capture(eV, xV), !0
          }
        }
        isBrowserSupported() {
          return tx(null == Oe ? void 0 : Oe.querySelectorAll)
        }
      },
      xv = class {
        constructor(VV) {
          this._instance = VV
        }
        refresh(VV) {
          const eV = this._instance.config,
            xV = Fx(eV.autocapture) ? eV.autocapture : void 0;
          VV.enabled = !!eV.autocapture, VV.rageclick = eV.rageclick, VV.maskAllElementAttributes = eV.mask_all_element_attributes, VV.maskAllText = eV.mask_all_text, VV.disableCaptureUrlHashes = eV.disable_capture_url_hashes, VV.getCurrentUrl = eV.get_current_url, VV.remoteRequestsDisabled = this._instance._shouldDisableFlags(), VV.url_allowlist = null == xV ? void 0 : xV.url_allowlist, VV.url_ignorelist = null == xV ? void 0 : xV.url_ignorelist, VV.dom_event_allowlist = null == xV ? void 0 : xV.dom_event_allowlist, VV.element_allowlist = null == xV ? void 0 : xV.element_allowlist, VV.css_selector_allowlist = null == xV ? void 0 : xV.css_selector_allowlist, VV.css_selector_ignorelist = null == xV ? void 0 : xV.css_selector_ignorelist, VV.element_attribute_ignorelist = null == xV ? void 0 : xV.element_attribute_ignorelist, VV.capture_copied_text = null == xV ? void 0 : xV.capture_copied_text
        }
      };
    const Jv = ay("[ExceptionAutocapture]"),
      Yv = () => {},
      Uv = VV => {
        var eV;
        if (tx(VV)) return null !== (eV = VV.__posthog_layer__) && void 0 !== eV ? eV : VV.__rrweb_layer__
      };

    function yv(VV, eV, xV) {
      try {
        if (!(eV in VV)) return Yv;
        const JV = {
            next: VV[eV]
          },
          YV = xV((function() {
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            return JV.next.apply(this, eV)
          }));
        return tx(YV) && (YV.prototype = YV.prototype || {}, Object.defineProperties(YV, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: JV
          }
        })), VV[eV] = YV, () => {
          if (VV[eV] === YV) return void(VV[eV] = JV.next);
          let xV = VV[eV],
            UV = Uv(xV);
          for (; UV;) {
            if (UV.next === YV) return void(UV.next = JV.next);
            xV = UV.next, UV = Uv(xV)
          }
        }
      } catch (VV) {
        return Yv
      }
    }
    const pv = ay("[TracingHeaders]"),
      Qv = ay("[Web Vitals]"),
      nv = 9e5,
      wv = ["CLS", "FCP", "INP", "LCP"],
      Zv = ["INP", "LCP"],
      vv = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      rv = "disabled",
      kv = "lazy_loading",
      bv = ay("[SessionRecording]"),
      Ev = [Ge, We, Re, ge, De, ie, Ce, ae, oe],
      Bv = ay("[Heatmaps]");

    function jv(VV) {
      return Fx(VV) && "clientX" in VV && "clientY" in VV && zx(VV.clientX) && zx(VV.clientY)
    }
    const qv = ay("[Product Tours]"),
      tv = VV => {
        var eV;
        return !VV.config.disable_product_tours && !!(null === (eV = VV.persistence) || void 0 === eV ? void 0 : eV.get_property(lV))
      },
      Fv = ["$set_once", "$set"],
      Tv = ay("[SiteApps]"),
      Pv = "Error while initializing PostHog app with config id ",
      Av = (VV, eV) => (null == VV ? void 0 : VV.then) ? VV.then(eV) : eV(VV),
      Nv = "SDK is not enabled or survey functionality is not yet loaded",
      Xv = "Disabled. Not loading surveys.";
    var Mv = class {
      constructor(VV, eV) {
        this._configSource = VV, this._initialClientState = eV, this.name = AZ, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = VV => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!VV.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), kZ.warn("Remote config unavailable. Not loading surveys.");
          const eV = VV.config.surveys;
          if (Mx(eV)) return kZ.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = Wx(eV) ? eV : eV.length > 0, kZ.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = VV => {
          this._activeMatchingSurveyCallbacks.slice().forEach((eV => this._notifyActiveMatchingSurveyCallback(eV, VV)))
        }
      }
      setup(VV) {
        if (!this._disposed) return this._initializingClient = VV, Av(VV.kv.initialize(), (() => {
          if (this._initializingClient !== VV || this._disposed) return;
          this._initializingClient = void 0, this._client = VV;
          const eV = VV.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? eV.dispose() : (this._remoteConfigSubscription = eV, this.loadIfEnabled())
        }))
      }
      dispose() {
        var VV, eV, xV, JV, YV;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (VV = this._remoteConfigSubscription) || void 0 === VV || VV.dispose(), this._remoteConfigSubscription = void 0, null === (eV = this._surveyEventReceiver) || void 0 === eV || eV.dispose(), this._surveyEventReceiver = null, null === (xV = this._surveyManager) || void 0 === xV || null === (JV = xV.dispose) || void 0 === JV || JV.call(xV), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((VV => {
          VV.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (YV = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === YV || YV.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((VV => clearTimeout(VV))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var VV, eV;
        null === (VV = this._surveyManager) || void 0 === VV || null === (eV = VV.clearInMemoryInProgressSurveyState) || void 0 === eV || eV.call(VV);
        try {
          var xV;
          null === (xV = this._surveyEventReceiver) || void 0 === xV || xV.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const VV = [];
          for (let eV = 0; eV < localStorage.length; eV++) {
            const xV = localStorage.key(eV);
            ((null == xV ? void 0 : xV.startsWith("seenSurvey_")) || (null == xV ? void 0 : xV.startsWith("inProgressSurvey_"))) && VV.push(xV)
          }
          VV.forEach((VV => localStorage.removeItem(VV)))
        } catch (VV) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const VV = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void kZ.info("Already initializing surveys, skipping...");
        if (VV.disableSurveys) return void kZ.info(Xv);
        if (VV.cookielessMode && this._configSource.isOptedOut()) return void kZ.info("Not loading surveys in cookieless mode without consent.");
        const eV = this._configSource.getExtensions();
        if (!eV) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (Px(this._isSurveysEnabled) && !VV.advancedEnableSurveys) return;
        const xV = this._isSurveysEnabled || VV.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const VV = eV.generateSurveys;
          if (VV) return this._completeSurveyInitialization(VV, xV), void(this._isInitializingSurveys = !1);
          const JV = eV.loadExternalDependency;
          if (!JV) return this._handleSurveyLoadError(he), void(this._isInitializingSurveys = !1);
          JV((VV => {
            try {
              if (this._disposed) return;
              const eV = this._configSource.getExtensions();
              VV || !(null == eV ? void 0 : eV.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", VV) : this._completeSurveyInitialization(eV.generateSurveys, xV)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (VV) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", VV), VV
        }
      }
      _completeSurveyInitialization(VV, eV) {
        var xV, JV;
        if (this._disposed) return;
        this._surveyManager = VV(eV), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const YV = null === (xV = null !== (JV = this._client) && void 0 !== JV ? JV : this._initialClientState) || void 0 === xV ? void 0 : xV.kv.get(ye);
        YV && this._registerEventOrActionBasedSurveys(YV), kZ.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(VV, eV) {
        this._surveyInitializationFailed = !0, kZ.error(VV, eV), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: VV
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: VV
        })
      }
      onSurveysLoaded(VV) {
        return this._surveyCallbacks.push(VV), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((eV => eV !== VV))
        }
      }
      getSurveys(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var xV;
        const JV = null !== (xV = this._client) && void 0 !== xV ? xV : this._initialClientState;
        if (!JV || this._disposed) return;
        if (this._config.disableSurveys) return kZ.info(Xv), VV([]);
        const YV = JV.kv.get(ye);
        if (YV && !eV) return VV(YV, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((eV => {
          let {
            surveys: xV,
            context: JV
          } = eV;
          this._disposed || VV(xV, JV)
        })).catch((VV => kZ.error("Error in survey callback", VV)));
        const UV = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: JV.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((VV => {
          try {
            return this._handleSurveyResponse(JV, VV)
          } catch (VV) {
            return kZ.error("Error processing surveys response", VV), this._handleSurveyResponse(JV, {
              statusCode: 0,
              error: VV
            })
          }
        }), (VV => this._handleSurveyResponse(JV, {
          statusCode: 0,
          error: VV
        })));
        this._getSurveysInFlightPromise = UV;
        const yV = () => {
          this._getSurveysInFlightPromise === UV && (this._getSurveysInFlightPromise = null)
        };
        UV.then((eV => {
          yV(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(eV.context), VV(eV.surveys, eV.context))
        }), yV).catch((VV => kZ.error("Error in survey callback", VV)))
      }
      _sendSurveysRequest(VV, eV) {
        const xV = this._client;
        return xV ? xV.sendRequest(VV, eV) : new Promise((VV => VV({
          statusCode: 0,
          error: new Error(Nv)
        })))
      }
      _handleSurveyResponse(VV, eV) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: Nv
          }
        };
        const xV = eV.statusCode;
        if (200 !== xV || !eV.json) {
          const VV = `Surveys API could not be loaded, status: ${xV}`;
          return 0 !== xV ? kZ.error(VV) : eV.error || kZ.warn(VV), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: VV
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const JV = eV.json.surveys || [];
        return VV.kv.set({
          [ye]: JV,
          [pe]: Date.now()
        }), this._registerEventOrActionBasedSurveys(JV), {
          surveys: JV,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(VV) {
        var eV;
        const xV = VV.filter((VV => function(VV) {
          return !(!VV.start_date || VV.end_date)
        }(VV) && (JZ(VV) || function(VV) {
          var eV;
          return !!(null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.actions) || void 0 === eV || null === (eV = eV.values) || void 0 === eV ? void 0 : eV.length)
        }(VV))));
        null === (eV = this._surveyEventReceiver) || void 0 === eV || eV.replace(xV)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var VV, eV;
        const xV = null === (VV = null !== (eV = this._client) && void 0 !== eV ? eV : this._initialClientState) || void 0 === VV ? void 0 : VV.kv.get(pe);
        return zx(xV) && Date.now() - xV > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return zx(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(VV, eV) {
        var xV;
        const JV = {
          id: VV,
          current_iteration: null !== (xV = null == eV ? void 0 : eV.iteration) && void 0 !== xV ? xV : null
        };
        bZ(JV);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (VV) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(VV) {
        for (const eV of this._surveyCallbacks) try {
          if (!VV.isLoaded) return eV([], VV);
          this.getSurveys(eV)
        } catch (VV) {
          kZ.error("Error in survey callback", VV)
        }
      }
      getActiveMatchingSurveys(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!Mx(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(VV, eV);
        kZ.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(VV) {
        var eV, xV;
        if (this._disposed) return () => {};
        const JV = {
          callback: VV,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(JV), this._startActiveMatchingSurveyConditions();
        const YV = null === (eV = null !== (xV = this._client) && void 0 !== xV ? xV : this._initialClientState) || void 0 === eV ? void 0 : eV.kv.get(ye);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !YV && !Mx(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(JV, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(JV), () => {
          var VV;
          JV.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((VV => VV !== JV)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (VV = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === VV || VV.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var VV, eV, xV;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (VV = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== VV || (this._activeMatchingSurveyConditionsUnsubscribe = null === (eV = (xV = this._configSource).onMatchingConditionsChanged) || void 0 === eV ? void 0 : eV.call(xV, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(VV, eV) {
        if (this._disposed || !VV.active) return;
        const xV = ++VV.revision,
          JV = JV => {
            if (!this._disposed && VV.active && xV === VV.revision) try {
              const xV = null != eV ? eV : {
                  isLoaded: !0
                },
                YV = JSON.stringify([JV, xV]);
              if (YV === VV.lastResult) return;
              VV.lastResult = YV, VV.callback(JV, xV)
            } catch (VV) {
              kZ.error("Error in active matching surveys callback", VV)
            }
          };
        try {
          eV && !eV.isLoaded ? JV([]) : this.getActiveMatchingSurveys(JV)
        } catch (VV) {
          kZ.error("Error in active matching surveys callback", VV)
        }
      }
      _getSurveyById(VV) {
        let eV = null;
        return this.getSurveys((xV => {
          var JV;
          eV = null !== (JV = xV.find((eV => eV.id === VV))) && void 0 !== JV ? JV : null
        })), eV
      }
      _checkSurveyEligibility(VV) {
        if (Mx(this._surveyManager)) return {
          eligible: !1,
          reason: Nv
        };
        const eV = "string" == typeof VV ? this._getSurveyById(VV) : VV;
        return eV ? this._surveyManager.checkSurveyEligibility(eV) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(VV) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (Mx(this._surveyManager)) return {
          eligible: !1,
          reason: Nv
        };
        const eV = "string" == typeof VV ? this._getSurveyById(VV) : VV;
        return eV ? this._surveyManager.checkSurveyRenderability(eV) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(VV) {
        if (Mx(this._surveyManager)) return kZ.warn("init was not called"), {
          visible: !1,
          disabledReason: Nv
        };
        const eV = this._checkSurveyRenderability(VV);
        return {
          visible: eV.eligible,
          disabledReason: eV.reason
        }
      }
      canRenderSurveyAsync(VV, eV) {
        return Mx(this._surveyManager) ? (kZ.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: Nv
        })) : new Promise((xV => {
          this.getSurveys((eV => {
            var JV;
            const YV = null !== (JV = eV.find((eV => eV.id === VV))) && void 0 !== JV ? JV : null;
            if (YV) {
              const VV = this._checkSurveyRenderability(YV);
              xV({
                visible: VV.eligible,
                disabledReason: VV.reason
              })
            } else xV({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), eV)
        }))
      }
      renderSurvey(VV, eV, xV) {
        var JV;
        if (!this._configSource.isCapturing()) return;
        if (Mx(this._surveyManager)) return void kZ.warn("init was not called");
        const YV = "string" == typeof VV ? this._getSurveyById(VV) : VV;
        if (!(null == YV ? void 0 : YV.id)) return void kZ.warn("Survey not found");
        if (!EZ.includes(YV.type)) return void kZ.warn(`Surveys of type ${YV.type} cannot be rendered in the app`);
        const UV = null == Oe ? void 0 : Oe.querySelector(eV);
        if (UV) {
          if (null === (JV = YV.appearance) || void 0 === JV ? void 0 : JV.surveyPopupDelaySeconds) {
            kZ.info(`Rendering survey ${YV.id} with delay of ${YV.appearance.surveyPopupDelaySeconds} seconds`);
            const VV = setTimeout((() => {
              var eV, JV;
              this._renderTimeouts.delete(VV), !this._disposed && this._configSource.isCapturing() && (kZ.info(`Rendering survey ${YV.id} with delay of ${null===(eV=YV.appearance)||void 0===eV?void 0:eV.surveyPopupDelaySeconds} seconds`), null === (JV = this._surveyManager) || void 0 === JV || JV.renderSurvey(YV, UV, xV), kZ.info(`Survey ${YV.id} rendered`))
            }), 1e3 * YV.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(VV)
          }
          this._surveyManager.renderSurvey(YV, UV, xV)
        } else kZ.warn("Survey element not found")
      }
      displaySurvey(VV, eV) {
        var xV;
        if (!this._configSource.isCapturing()) return;
        if (Mx(this._surveyManager)) return void kZ.warn("init was not called");
        const JV = this._getSurveyById(VV);
        if (!JV) return void kZ.warn("Survey not found");
        let YV = JV;
        if ((null === (xV = JV.appearance) || void 0 === xV ? void 0 : xV.surveyPopupDelaySeconds) && eV.ignoreDelay && (YV = jY(jY({}, JV), {}, {
            appearance: jY(jY({}, JV.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), eV.displayType !== zn && eV.initialResponses && kZ.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === eV.ignoreConditions) {
          const VV = this._checkSurveyEligibility(JV);
          if (!VV.eligible) return void kZ.warn("Survey is not eligible to be displayed: ", VV.reason)
        }
        eV.displayType !== Gn ? this._surveyManager.handlePopoverSurvey(YV, eV) : this.renderSurvey(YV, eV.selector, eV.properties)
      }
      cancelPendingSurvey(VV) {
        Mx(this._surveyManager) ? kZ.warn("init was not called") : this._surveyManager.cancelSurvey(VV)
      }
      handlePageUnload() {
        var VV, eV;
        null === (VV = this._surveyManager) || void 0 === VV || null === (eV = VV.handlePageUnload) || void 0 === eV || eV.call(VV)
      }
    };

    function zv(VV, eV, xV) {
      if (Mx(VV)) return !1;
      switch (xV) {
        case "exact":
          return VV === eV;
        case "contains": {
          const xV = eV.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(xV, "i").test(VV)
        }
        case "regex":
          try {
            return new RegExp(eV).test(VV)
          } catch (VV) {
            return !1
          }
        default:
          return !1
      }
    }
    var Gv = class {
        constructor(VV) {
          this._instance = VV, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new Sw, this._checkStep = (VV, eV) => this._checkStepEvent(VV, eV) && this._checkStepUrl(VV, eV) && this._checkStepElement(VV, eV) && this._checkStepProperties(VV, eV), this._checkStepEvent = (VV, eV) => !(null == eV ? void 0 : eV.event) || (null == VV ? void 0 : VV.event) === (null == eV ? void 0 : eV.event)
        }
        init() {
          var VV, eV;
          Px(null === (VV = this._instance) || void 0 === VV ? void 0 : VV._addCaptureHook) || (this._captureHookUnsubscribe = null === (eV = this._instance) || void 0 === eV ? void 0 : eV._addCaptureHook(((VV, eV) => {
            this.on(VV, eV)
          })))
        }
        dispose() {
          var VV, eV;
          null === (VV = this._captureHookUnsubscribe) || void 0 === VV || VV.call(this), this._captureHookUnsubscribe = void 0, null === (eV = this._instance) || void 0 === eV || null === (eV = eV.autocapture) || void 0 === eV || eV.setElementSelectors(new Set, this), this._debugEventEmitter = new Sw
        }
        register(VV) {
          var eV, xV;
          if (!Px(null === (eV = this._instance) || void 0 === eV ? void 0 : eV._addCaptureHook) && (VV.forEach((VV => {
              var eV;
              this._actionRegistry.add(VV), null === (eV = VV.steps) || void 0 === eV || eV.forEach((VV => {
                this._actionEvents.add((null == VV ? void 0 : VV.event) || "")
              }))
            })), null === (xV = this._instance) || void 0 === xV ? void 0 : xV.autocapture)) {
            const VV = new Set;
            this._actionRegistry.forEach((eV => {
              var xV;
              null === (xV = eV.steps) || void 0 === xV || xV.forEach((eV => {
                (null == eV ? void 0 : eV.selector) && VV.add(eV.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(VV, this)
          }
        }
        replace(VV) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(VV)
        }
        on(VV, eV) {
          null != eV && 0 != VV.length && (this._actionEvents.has(VV) || this._actionEvents.has(eV.event)) && this._actionRegistry.forEach((VV => {
            this._checkAction(eV, VV) && this._debugEventEmitter.emit("actionCaptured", VV.name)
          }))
        }
        _addActionHook(VV) {
          this.onAction("actionCaptured", (eV => VV(eV)))
        }
        _checkAction(VV, eV) {
          if (null == (null == eV ? void 0 : eV.steps)) return !1;
          for (const xV of eV.steps)
            if (this._checkStep(VV, xV)) return !0;
          return !1
        }
        onAction(VV, eV) {
          return this._debugEventEmitter.on(VV, eV)
        }
        _checkStepUrl(VV, eV) {
          if (null == eV ? void 0 : eV.url) {
            var xV;
            const JV = null == VV || null === (xV = VV.properties) || void 0 === xV ? void 0 : xV.$current_url;
            if (!JV || "string" != typeof JV) return !1;
            if (!zv(JV, eV.url, eV.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(VV, eV) {
          return !!this._checkStepHref(VV, eV) && !!this._checkStepText(VV, eV) && !!this._checkStepSelector(VV, eV)
        }
        _checkStepHref(VV, eV) {
          var xV;
          if (!(null == eV ? void 0 : eV.href)) return !0;
          const JV = this._getElementsList(VV);
          if (JV.length > 0) return JV.some((VV => zv(VV.href, eV.href, eV.href_matching || "exact")));
          const YV = (null == VV || null === (xV = VV.properties) || void 0 === xV ? void 0 : xV.$elements_chain) || "";
          return !!YV && zv(function(VV) {
            const eV = VV.match(/(?::|")href="(.*?)"/);
            return eV ? eV[1] : ""
          }(YV), eV.href, eV.href_matching || "exact")
        }
        _checkStepText(VV, eV) {
          var xV;
          if (!(null == eV ? void 0 : eV.text)) return !0;
          const JV = this._getElementsList(VV);
          if (JV.length > 0) return JV.some((VV => zv(VV.text, eV.text, eV.text_matching || "exact") || zv(VV.$el_text, eV.text, eV.text_matching || "exact")));
          const YV = (null == VV || null === (xV = VV.properties) || void 0 === xV ? void 0 : xV.$elements_chain) || "";
          return !!YV && (UV = function(VV) {
            const eV = [],
              xV = /(?::|")text="(.*?)"/g;
            let JV;
            for (; !Mx(JV = xV.exec(VV));) eV.includes(JV[1]) || eV.push(JV[1]);
            return eV
          }(YV), yV = eV.text, pV = eV.text_matching || "exact", UV.some((VV => zv(VV, yV, pV))));
          var UV, yV, pV
        }
        _checkStepSelector(VV, eV) {
          var xV, JV;
          if (!(null == eV ? void 0 : eV.selector)) return !0;
          const YV = null == VV || null === (xV = VV.properties) || void 0 === xV ? void 0 : xV.$element_selectors;
          if (null == YV ? void 0 : YV.includes(eV.selector)) return !0;
          const UV = (null == VV || null === (JV = VV.properties) || void 0 === JV ? void 0 : JV.$elements_chain) || "";
          if (eV.selector_regex && UV) try {
            return new RegExp(eV.selector_regex).test(UV)
          } catch (VV) {
            return !1
          }
          return !1
        }
        _getElementsList(VV) {
          var eV;
          return null == (null == VV || null === (eV = VV.properties) || void 0 === eV ? void 0 : eV.$elements) ? [] : null == VV ? void 0 : VV.properties.$elements
        }
        _checkStepProperties(VV, eV) {
          return !(null == eV ? void 0 : eV.properties) || 0 === eV.properties.length || pZ(eV.properties.reduce(((VV, eV) => {
            const xV = qx(eV.value) ? eV.value.map(String) : null != eV.value ? [String(eV.value)] : [];
            return VV[eV.key] = {
              values: xV,
              operator: eV.operator || "exact"
            }, VV
          }), {}), null == VV ? void 0 : VV.properties)
        }
      },
      Wv = class {
        constructor(VV, eV) {
          var xV, JV;
          this._pendingActivatedItems = [], this._instance = VV, this._onActivationChanged = eV, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (xV = this._instance) || void 0 === xV || null === (JV = xV.onSessionId) || void 0 === JV ? void 0 : JV.call(xV, (VV => this._onSessionIdChanged(VV)))
        }
        _shouldPersistArmedActivation(VV) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(VV) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(VV, eV) {
          return !!VV && pZ(VV.propertyFilters, null == eV ? void 0 : eV.properties)
        }
        _buildEventToItemMap(VV, eV) {
          const xV = new Map;
          return VV.forEach((VV => {
            var JV;
            null === (JV = VV.conditions) || void 0 === JV || null === (JV = JV[eV]) || void 0 === JV || null === (JV = JV.values) || void 0 === JV || JV.forEach((eV => {
              if (null == eV ? void 0 : eV.name) {
                const JV = xV.get(eV.name) || [];
                JV.push(VV.id), xV.set(eV.name, JV)
              }
            }))
          })), xV
        }
        _getMatchingItems(VV, eV, xV) {
          const JV = (xV === Bn ? this._eventToItems : this._cancelEventToItems).get(VV);
          let YV = [];
          return this._getItems((VV => {
            YV = VV.filter((VV => null == JV ? void 0 : JV.includes(VV.id)))
          })), YV.filter((JV => {
            var YV;
            const UV = null === (YV = JV.conditions) || void 0 === YV || null === (YV = YV[xV]) || void 0 === YV || null === (YV = YV.values) || void 0 === YV ? void 0 : YV.find((eV => eV.name === VV));
            return this._doesEventMatchFilter(UV, eV)
          }))
        }
        register(VV) {
          this._register(VV, !1)
        }
        replace(VV) {
          this._register(VV, !0)
        }
        _register(VV, eV) {
          var xV;
          Px(null === (xV = this._instance) || void 0 === xV ? void 0 : xV._addCaptureHook) || (this._setupEventBasedItems(VV, eV), this._setupActionBasedItems(VV, eV))
        }
        _setupActionBasedItems(VV, eV) {
          const xV = VV.filter((VV => {
            var eV;
            return null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.actions) || void 0 === eV || null === (eV = eV.values) || void 0 === eV ? void 0 : eV.length
          }));
          var JV;
          if (eV && this._actionToItems.clear(), 0 === xV.length) return void(eV && (null === (JV = this._actionMatcher) || void 0 === JV || JV.replace([])));
          this._actionMatcher || (this._actionMatcher = new Gv(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((VV => this.onAction(VV))));
          const YV = [];
          xV.forEach((VV => {
            var eV;
            null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.actions) || void 0 === eV || eV.values.forEach((eV => {
              if (YV.push(eV), eV.name) {
                var xV;
                const JV = null !== (xV = this._actionToItems.get(eV.name)) && void 0 !== xV ? xV : [];
                JV.includes(VV.id) || JV.push(VV.id), this._actionToItems.set(eV.name, JV)
              }
            }))
          })), eV ? this._actionMatcher.replace(YV) : this._actionMatcher.register(YV)
        }
        _mergeItemMaps(VV, eV) {
          eV.forEach(((eV, xV) => {
            var JV;
            const YV = null !== (JV = VV.get(xV)) && void 0 !== JV ? JV : [];
            eV.forEach((VV => {
              YV.includes(VV) || YV.push(VV)
            })), VV.set(xV, YV)
          }))
        }
        _setupEventBasedItems(VV, eV) {
          var xV, JV;
          const YV = VV.filter((VV => {
              var eV, xV;
              return (null === (eV = VV.conditions) || void 0 === eV ? void 0 : eV.events) && (null === (xV = VV.conditions) || void 0 === xV || null === (xV = xV.events) || void 0 === xV || null === (xV = xV.values) || void 0 === xV ? void 0 : xV.length) > 0
            })),
            UV = VV.filter((VV => {
              var eV, xV;
              return (null === (eV = VV.conditions) || void 0 === eV ? void 0 : eV.cancelEvents) && (null === (xV = VV.conditions) || void 0 === xV || null === (xV = xV.cancelEvents) || void 0 === xV || null === (xV = xV.values) || void 0 === xV ? void 0 : xV.length) > 0
            })),
            yV = this._buildEventToItemMap(VV, Bn),
            pV = this._buildEventToItemMap(VV, jn);
          eV ? (this._eventToItems = yV, this._cancelEventToItems = pV) : (this._mergeItemMaps(this._eventToItems, yV), this._mergeItemMaps(this._cancelEventToItems, pV)), (0 !== YV.length || 0 !== UV.length || VV.some((VV => {
            var eV;
            return null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.actions) || void 0 === eV || null === (eV = eV.values) || void 0 === eV ? void 0 : eV.length
          }))) && (null !== (xV = this._captureHookUnsubscribe) && void 0 !== xV || (this._captureHookUnsubscribe = null === (JV = this._instance) || void 0 === JV ? void 0 : JV._addCaptureHook(((VV, eV) => {
            this.onEvent(VV, eV)
          }))))
        }
        onEvent(VV, eV) {
          var xV, JV;
          const YV = this._getLogger(),
            UV = (null == eV || null === (xV = eV.properties) || void 0 === xV ? void 0 : xV.$survey_id) || (null == eV || null === (JV = eV.properties) || void 0 === JV ? void 0 : JV.$product_tour_id);
          if (UV && this.getActivatedIds().includes(UV)) {
            const xV = this._activationOutcome(VV, UV, eV);
            if ("consume" === xV) return YV.info("event consumed activated item, removing it", {
              event: VV,
              itemId: UV
            }), void this._deactivateItems([UV]);
            if ("persist" === xV) return YV.info("shown item promoted to persisted activation", {
              event: VV,
              itemId: UV
            }), this._persistActivation(UV), void this._clearActivationTimestamps([UV])
          }
          if (this._cancelEventToItems.has(VV)) {
            const xV = this._getMatchingItems(VV, eV, jn);
            xV.length > 0 && (YV.info("cancel event matched, cancelling items", {
              event: VV,
              itemsToCancel: xV.map((VV => VV.id))
            }), this._deactivateItems(xV.map((VV => VV.id))), xV.forEach((VV => this._cancelPendingItem(VV.id))))
          }
          if (!this._eventToItems.has(VV)) return;
          YV.info("event name matched", {
            event: VV,
            eventPayload: eV,
            items: this._eventToItems.get(VV)
          });
          const yV = this._getMatchingItems(VV, eV, Bn);
          this._activateItems(yV.map((VV => VV.id)))
        }
        onAction(VV) {
          this._actionToItems.has(VV) && this._activateItems(this._actionToItems.get(VV) || [])
        }
        _activateItems(VV) {
          var eV, xV;
          if (0 === VV.length) return;
          const JV = !!(null === (eV = this._instance) || void 0 === eV || null === (xV = eV.get_session_id) || void 0 === xV ? void 0 : xV.call(eV)),
            YV = [];
          for (const UV of VV) JV && this._shouldPersistArmedActivation(UV) ? this._persistActivation(UV) && this._recordActivationTimestamp(UV) : YV.push(UV);
          YV.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...YV])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(VV) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((eV => eV !== VV));
          const eV = this._getPersistedActivatedIds();
          return !eV.includes(VV) && (this._setActivatedItems([...eV, VV]), this._stampActivationSession(), !0)
        }
        _deactivateItems(VV) {
          const eV = new Set(VV);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((VV => !eV.has(VV)));
          const xV = this._getRawPersistedActivatedIds(),
            JV = xV.filter((VV => !eV.has(VV)));
          JV.length !== xV.length && (this._setActivatedItems(JV), 0 === JV.length && this._clearActivationSession()), this._clearActivationTimestamps(VV), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var VV;
            null === (VV = this._onActivationChanged) || void 0 === VV || VV.call(this)
          } catch (VV) {
            this._getLogger().error("Error while handling activated items change", VV)
          }
        }
        _getRawActivationTimestamps() {
          var VV;
          const eV = this._getActivationTimestampsKey();
          if (!eV) return {};
          const xV = null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV ? void 0 : VV.props[eV];
          return xV && "object" == typeof xV ? xV : {}
        }
        _recordActivationTimestamp(VV) {
          if (!this._getActivationTimestampsKey()) return;
          const eV = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(jY(jY({}, eV), {}, {
            [VV]: Date.now()
          }))
        }
        _clearActivationTimestamps(VV) {
          if (!this._getActivationTimestampsKey()) return;
          const eV = this._getRawActivationTimestamps(),
            xV = {};
          let JV = !1;
          for (const [YV, UV] of Object.entries(eV)) VV.includes(YV) ? JV = !0 : xV[YV] = UV;
          JV && (Tx(xV) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(xV))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(VV) {
          if (!this._getPersistedActivatedIds().includes(VV)) return;
          const eV = this._getRawActivationTimestamps()[VV];
          return zx(eV) ? eV : void 0
        }
        _getRawPersistedActivatedIds() {
          var VV;
          const eV = this._getActivatedKey();
          return (null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV ? void 0 : VV.props[eV]) || []
        }
        _getPersistedActivatedIds() {
          var VV, eV, xV;
          const JV = this._getRawPersistedActivatedIds();
          if (0 === JV.length) return [];
          const YV = null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV ? void 0 : VV.props[this._getActivatedSessionKey()],
            UV = null === (eV = this._instance) || void 0 === eV || null === (xV = eV.get_session_id) || void 0 === xV ? void 0 : xV.call(eV);
          return UV && YV === UV ? JV : []
        }
        _stampActivationSession() {
          var VV, eV;
          const xV = null === (VV = this._instance) || void 0 === VV || null === (eV = VV.get_session_id) || void 0 === eV ? void 0 : eV.call(VV);
          xV && this._setActivatedSession(xV)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(VV) {
          var eV;
          const xV = null === (eV = this._instance) || void 0 === eV || null === (eV = eV.persistence) || void 0 === eV ? void 0 : eV.props[this._getActivatedSessionKey()];
          if (xV && xV !== VV) {
            const VV = this._getRawPersistedActivatedIds(),
              eV = this._getRawActivationTimestamps();
            VV.length > 0 && (this._setActivatedItems([]), VV.filter((VV => zx(eV[VV]))).forEach((VV => this._cancelPendingItem(VV)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), VV.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((VV => !this._isItemPermanentlyIneligible(VV)))
        }
        dispose() {
          var VV, eV, xV;
          null === (VV = this._sessionIdUnsubscribe) || void 0 === VV || VV.call(this), this._sessionIdUnsubscribe = void 0, null === (eV = this._captureHookUnsubscribe) || void 0 === eV || eV.call(this), this._captureHookUnsubscribe = void 0, null === (xV = this._actionMatcher) || void 0 === xV || xV.dispose(), this._actionMatcher = void 0
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
      Rv = class extends Wv {
        constructor(VV, eV) {
          super(VV, eV)
        }
        _getActivatedKey() {
          return Qe
        }
        _getActivatedSessionKey() {
          return ne
        }
        _getActivationTimestampsKey() {
          return we
        }
        _writeActivationTimestamps(VV) {
          var eV;
          null === (eV = this._instance) || void 0 === eV || null === (eV = eV.persistence) || void 0 === eV || eV.register({
            $surveys_activated_timestamps: VV
          })
        }
        _clearActivationTimestampsStore() {
          var VV;
          null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV || VV.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(VV) {
          var eV;
          let xV;
          this._getItems((eV => {
            xV = eV.find((eV => eV.id === VV))
          }));
          const JV = null == xV || null === (eV = xV.appearance) || void 0 === eV ? void 0 : eV.surveyPopupDelaySeconds;
          return zx(JV) && JV > 0
        }
        _getShownEventName() {
          return Tn
        }
        _getItems(VV) {
          var eV;
          null === (eV = this._instance) || void 0 === eV || eV.getSurveys(VV)
        }
        _cancelPendingItem(VV) {
          var eV;
          null === (eV = this._instance) || void 0 === eV || eV.cancelPendingSurvey(VV)
        }
        _getLogger() {
          return kZ
        }
        _setActivatedItems(VV) {
          var eV;
          null === (eV = this._instance) || void 0 === eV || null === (eV = eV.persistence) || void 0 === eV || eV.register({
            $surveys_activated: VV
          })
        }
        _setActivatedSession(VV) {
          var eV;
          null === (eV = this._instance) || void 0 === eV || null === (eV = eV.persistence) || void 0 === eV || eV.register({
            $surveys_activated_session: VV
          })
        }
        _clearActivatedSession() {
          var VV;
          null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV || VV.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(VV, eV, xV) {
          var JV;
          if (VV === An && !1 === (null == xV || null === (JV = xV.properties) || void 0 === JV ? void 0 : JV.$survey_completed)) return "ignore";
          let YV;
          return this._getItems((VV => {
            YV = VV.find((VV => VV.id === eV))
          })), !YV || function(VV) {
            var eV;
            return JZ(VV) && !!(null === (eV = VV.conditions) || void 0 === eV || null === (eV = eV.events) || void 0 === eV ? void 0 : eV.repeatedActivation) || "always" === VV.schedule
          }(YV) ? VV === Tn ? "consume" : "ignore" : VV === Tn ? "persist" : VV === Pn || VV === An ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      gv = class {
        constructor(VV) {
          this._instance = VV
        }
        initialize() {}
        get(VV) {
          if ("string" == typeof VV) return this._instance.get_property(VV);
          const eV = {};
          for (const xV of VV) {
            const VV = this._instance.get_property(xV);
            Px(VV) || (eV[xV] = VV)
          }
          return eV
        }
        set(VV, eV) {
          this._instance.register("string" == typeof VV ? {
            [VV]: eV
          } : VV)
        }
        remove(VV) {
          "string" != typeof VV ? VV.forEach((VV => this._instance.unregister(VV))) : this._instance.unregister(VV)
        }
      },
      Dv = class {
        constructor(VV) {
          this._instance = VV
        }
        get() {
          const VV = this._instance.config;
          return {
            disableSurveys: VV.disable_surveys,
            cookielessMode: !!VV.cookieless_mode,
            advancedEnableSurveys: VV.advanced_enable_surveys,
            requestTimeoutMs: VV.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const VV = null == px ? void 0 : px.__PosthogExtensions__;
          if (!VV) return;
          const {
            generateSurveys: eV,
            loadExternalDependency: xV
          } = VV;
          return {
            generateSurveys: eV ? VV => eV(this._instance, VV) : void 0,
            loadExternalDependency: xV ? VV => xV(this._instance, "surveys", VV) : void 0
          }
        }
        createEventReceiver(VV) {
          return new Rv(this._instance, VV)
        }
        onMatchingConditionsChanged(VV) {
          const eV = this._instance._addCaptureHook((eV => {
              "$pageview" !== eV && eV !== Tn && eV !== Pn && eV !== An || VV()
            })),
            xV = () => VV();
          uy(Se, "PHSurveyShown", xV);
          let JV = !1;
          const YV = this._instance.onFeatureFlags((() => {
            JV && VV()
          }));
          return JV = !0, () => {
            JV = !1, eV(), YV(), null == Se || Se.removeEventListener("PHSurveyShown", xV)
          }
        }
      };
    const iv = (null == Se ? void 0 : Se.location) ? lQ(Se.location.hash, "__posthog") || lQ(location.hash, "state") : null,
      Cv = "_postHogToolbarParams",
      av = ay("[Toolbar]"),
      ov = ay("[FeatureFlags]"),
      cv = ay("[FeatureFlags]", {
        debugEnabled: !0
      }),
      hv = "\" failed. Feature flags didn't load in time.",
      lv = [502, 504],
      Lv = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      fv = "connection_error",
      mv = VV => {
        const eV = {};
        for (let xV = 0; VV.length > xV; xV++) eV[VV[xV]] = !0;
        return eV
      },
      Kv = VV => {
        const eV = {};
        for (const [xV, JV] of ly(VV || {})) JV && (eV[xV] = JV);
        return eV
      };
    var Hv = class {
      constructor(VV) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = ov, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const VV = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, VV && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var VV, eV;
          const xV = this._refreshIntervalMs,
            JV = null !== (VV = this._dueRefreshIntervalMs) && void 0 !== VV ? VV : xV;
          Px(xV) || Px(JV) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (eV = this._lastRefreshAt) && void 0 !== eV ? eV : 0) < JV || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? xV : Math.min(2 * JV, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var VV;
          "visible" === (null === (VV = this._document) || void 0 === VV ? void 0 : VV.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = VV
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(VV) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (VV) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = VV, this._logger = VV.logger.createLogger("[FeatureFlags]"), Av(VV.kv.initialize(), (() => {
          this._initializingClient === VV && (this._initializingClient = void 0, this._client = VV, this._finishSetup(VV))
        }))
      }
      _finishSetup(VV) {
        var eV;
        if (this._client === VV) return this._window && uy(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = VV.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (eV = this._crossTabPersistence) || void 0 === eV ? void 0 : eV.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var VV;
        const eV = this._config.refreshIntervalMs,
          xV = !this._config.remoteRequestsDisabled && this._document && !Px(eV) && eV > 0 ? eV : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = xV), xV !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), Px(xV) || (this._refreshIntervalMs = xV, this._dueRefreshIntervalMs = xV, this._scheduleNextRefresh(), (null === (VV = this._document) || void 0 === VV ? void 0 : VV.addEventListener) && (uy(this._document, FV, this._onVisibilityChange), oy(Lv, (VV => {
          uy(this._document, VV, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        Px(this._refreshIntervalMs) || (Px(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var VV, eV;
        Px(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (VV = this._document) || void 0 === VV || null === (eV = VV.removeEventListener) || void 0 === eV || eV.call(VV, "visibilitychange", this._onVisibilityChange), oy(Lv, (VV => {
          var eV, xV;
          null === (eV = this._document) || void 0 === eV || null === (xV = eV.removeEventListener) || void 0 === xV || xV.call(eV, VV, this._onUserInteraction, {
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
        var VV, eV, xV;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "pJ"), this._settleReloads(this._activeReloads, "pJ"), this._client && (this._clearDebouncer(), null === (VV = this._dynamicProperties) || void 0 === VV || VV.dispose(), this._dynamicProperties = void 0, null === (eV = this._crossTabPersistenceUnsubscribe) || void 0 === eV || eV.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (xV = this._window) || void 0 === xV || xV.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(VV) {
        var eV;
        return this._bootstrapState && VV in this._bootstrapState ? this._bootstrapState[VV] : null === (eV = this._client) || void 0 === eV ? void 0 : eV.kv.get(VV)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var VV;
        return !Px(null === (VV = this._client) || void 0 === VV ? void 0 : VV.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(VV) {
        this._persist((() => {
          var eV;
          return null === (eV = this._client) || void 0 === eV ? void 0 : eV.kv.set(VV)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(VV, eV, xV) {
        if (!this._crossTabPersistence || !VV.$enabled_feature_flags) return;
        const JV = this._prop("$enabled_feature_flags") || {},
          YV = VV.$enabled_feature_flags || {},
          UV = eV.flags || eV.featureFlags,
          yV = eV.flags ? Object.entries(eV.flags).filter((VV => {
            let [, eV] = VV;
            return !(null == eV ? void 0 : eV.failed)
          })).map((VV => {
            let [eV] = VV;
            return eV
          })) : [],
          nV = !!eV.errorsWhileComputingFlags && !!eV.flags,
          kV = nV ? yV : xV && !qx(UV) ? Object.keys(UV || {}) : Array.from(new Set([...Object.keys(JV), ...Object.keys(YV)])),
          bV = this._prop("$feature_flag_payloads") || {},
          EV = VV.$feature_flag_payloads || {},
          BV = nV || xV ? kV : Array.from(new Set([...Object.keys(bV), ...Object.keys(EV)])),
          qV = !nV && !xV,
          tV = !!qV || kV,
          FV = !!qV || BV,
          TV = {
            [pV]: tV,
            [rV]: tV,
            [jV]: FV
          };
        VV.$feature_flag_details && (TV[QV] = tV);
        for (const pV of [ZV, wV, vV]) Px(VV[pV]) || (TV[pV] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(TV)
      }
      _remove(VV) {
        this._persist((() => {
          var eV;
          return null === (eV = this._client) || void 0 === eV ? void 0 : eV.kv.remove(VV)
        }))
      }
      _persist(VV) {
        try {
          VV()
        } catch (VV) {
          this._logger.error("Failed to update feature flag persistence", VV)
        }
      }
      _rebuildEventProperties() {
        const VV = {};
        for (const JV of [pV, jV, ZV, qV]) {
          const eV = this._prop(JV);
          Px(eV) || (VV[JV] = eV)
        }
        this._baseEventProperties = VV;
        const eV = jY({}, VV),
          xV = this._prop(rV);
        if (xV)
          for (const [JV, YV] of Object.entries(xV)) eV[`$feature/${JV}`] = YV;
        this._eventPropertiesWithFlagValues = eV
      }
      _isCacheStale() {
        const VV = this._config.cacheTtlMs;
        if (!VV || 0 >= VV) return !1;
        const eV = this._prop(wV);
        return "number" != typeof eV || Date.now() - eV > VV
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const VV = this._config.evaluationContexts;
        return (null == VV ? void 0 : VV.length) ? VV.filter((VV => {
          const eV = VV && "string" == typeof VV && VV.trim().length > 0;
          return eV || this._logger.error("Invalid evaluation context found:", VV, "Expected non-empty string"), eV
        })) : []
      }
      _getValidFlagKeys() {
        const VV = this._config.flagKeys;
        if (!Px(VV)) return VV.filter((VV => {
          const eV = VV && "string" == typeof VV && VV.trim().length > 0;
          return eV || this._logger.error("Invalid flag key found:", VV, "Expected non-empty string"), eV
        }))
      }
      initialize() {
        var VV, eV;
        const xV = this._config,
          JV = null !== (VV = null === (eV = xV.bootstrap) || void 0 === eV ? void 0 : eV.featureFlags) && void 0 !== VV ? VV : {};
        if (Object.keys(JV).length) {
          var YV, UV;
          const VV = null !== (YV = null === (UV = xV.bootstrap) || void 0 === UV ? void 0 : UV.featureFlagPayloads) && void 0 !== YV ? YV : {},
            eV = Object.keys(JV).filter((VV => !Px(JV[VV]))).reduce(((VV, eV) => (VV[eV] = JV[eV], VV)), {}),
            yV = Object.keys(VV).filter((VV => eV[VV])).reduce(((eV, xV) => (eV[xV] = VV[xV], eV)), {});
          return this._receivedFeatureFlags({
            featureFlags: eV,
            featureFlagPayloads: yV
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(VV, eV, xV) {
        var JV, YV;
        const UV = (null == xV ? void 0 : xV.merge) && null !== (JV = this._prop("$enabled_feature_flags")) && void 0 !== JV ? JV : {},
          yV = (null == xV ? void 0 : xV.merge) && null !== (YV = this._prop("$feature_flag_payloads")) && void 0 !== YV ? YV : {},
          pV = jY(jY({}, UV), VV),
          QV = jY(jY({}, yV), eV),
          nV = {};
        for (const [wV, ZV] of Object.entries(pV)) nV[wV] = {
          key: wV,
          enabled: rU(ZV),
          variant: kU(ZV),
          reason: void 0,
          metadata: Px(null == QV ? void 0 : QV[wV]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: QV[wV]
          }
        };
        this._receivedFeatureFlags({
          flags: nV
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const VV = this._prop(QV),
          eV = this._prop(qV),
          xV = this._prop(tV);
        if (!xV && !eV) return VV || {};
        const JV = hy({}, VV || {}),
          YV = [...new Set([...Object.keys(xV || {}), ...Object.keys(eV || {})])];
        for (const pV of YV) {
          var UV, yV;
          const VV = JV[pV],
            YV = null == eV ? void 0 : eV[pV],
            QV = Px(YV) ? null !== (UV = null == VV ? void 0 : VV.enabled) && void 0 !== UV && UV : !!YV,
            nV = Px(YV) ? null == VV ? void 0 : VV.variant : "string" == typeof YV ? YV : void 0,
            wV = null == xV ? void 0 : xV[pV],
            ZV = jY(jY({}, VV), {}, {
              enabled: QV,
              variant: QV ? null != nV ? nV : null == VV ? void 0 : VV.variant : void 0
            });
          QV !== (null == VV ? void 0 : VV.enabled) && (ZV.original_enabled = null == VV ? void 0 : VV.enabled), nV !== (null == VV ? void 0 : VV.variant) && (ZV.original_variant = null == VV ? void 0 : VV.variant), wV && (ZV.metadata = jY(jY({}, null == VV ? void 0 : VV.metadata), {}, {
            payload: wV,
            original_payload: null == VV || null === (yV = VV.metadata) || void 0 === yV ? void 0 : yV.payload
          })), JV[pV] = ZV
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: VV,
          overriddenPayloads: xV,
          finalDetails: JV
        }), this._override_warning = !0), JV
      }
      getAllFeatureFlags() {
        const VV = this.getFlagVariants(),
          eV = this.getFlagPayloads();
        return Object.keys(VV).map((xV => {
          const JV = VV[xV];
          return {
            key: xV,
            enabled: rU(JV),
            variant: kU(JV),
            payload: vU(eV[xV])
          }
        }))
      }
      getFlagVariants() {
        const VV = this._prop(rV),
          eV = this._prop(qV);
        if (!eV) return VV || {};
        const xV = hy({}, VV || {}),
          JV = Object.keys(eV);
        for (let YV = 0; JV.length > YV; YV++) xV[JV[YV]] = eV[JV[YV]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: VV,
          overriddenFlags: eV,
          finalFlags: xV
        }), this._override_warning = !0), xV
      }
      getFlagPayloads() {
        const VV = this._prop(jV),
          eV = this._prop(tV);
        if (!eV) return VV || {};
        const xV = hy({}, VV || {}),
          JV = Object.keys(eV);
        for (let YV = 0; JV.length > YV; YV++) xV[JV[YV]] = eV[JV[YV]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: VV,
          overriddenPayloads: eV,
          finalPayloads: xV
        }), this._override_warning = !0), xV
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((VV => {
          try {
            VV()
          } catch (VV) {
            this._logger.error("Error while running feature flags reloading callback", VV)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((VV => {
          this._pendingReloads.add(VV), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(VV, eV) {
        VV.forEach((VV => VV({
          status: eV
        }))), VV.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(VV) {
        return this._reloadingHandlers.push(VV), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((eV => eV !== VV))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(VV) {
        this.$anon_distinct_id = VV
      }
      setReloadingPaused(VV) {
        this._reloadingDisabled = VV
      }
      resetFlagCallReported() {
        this._remove(EV)
      }
      _callFlagsEndpoint(VV) {
        var eV;
        this._clearDebouncer();
        const xV = this._client;
        if (!xV || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const JV = {
          token: xV.projectToken,
          distinct_id: xV.distinctId,
          groups: xV.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: jY(jY(jY({}, xV.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: xV.library.name,
            $lib_version: xV.library.version
          }),
          group_properties: this._prop(kV),
          timezone: gQ()
        };
        Px(xV.deviceId) || (JV.$device_id = xV.deviceId), ((null == VV ? void 0 : VV.disableFlags) || this._config.featureFlagsDisabled) && (JV.disable_flags = !0);
        const YV = this._getValidEvaluationEnvironments();
        YV.length && (JV.evaluation_contexts = YV);
        const UV = this._getValidFlagKeys();
        Px(UV) || (JV.flag_keys = UV);
        const yV = this._config.onlyEvaluateSurveyFeatureFlags,
          pV = "/flags/?v=2" + (yV ? "&only_evaluate_survey_feature_flags=true" : ""),
          QV = this._requestGeneration,
          wV = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = wV, this._requestInFlight = !0;
        const ZV = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          vV = VV => {
            var eV, xV;
            const YV = null !== (eV = VV.json) && void 0 !== eV ? eV : {},
              UV = 200 !== VV.statusCode;
            if (this._requestInFlight = !1, QV !== this._requestGeneration) return void ZV();
            if (this._trackStatusZeroReachability(VV.statusCode), UV || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), JV.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(wV, "skipped");
            this._flagsLoadedFromRemote = !UV;
            const pV = [];
            VV.error ? pV.push(VV.error instanceof Error && "AbortError" === VV.error.name ? "timeout" : VV.error instanceof Error ? fv : "unknown_error") : 200 !== VV.statusCode && pV.push(`api_error_${VV.statusCode}`), YV.errorsWhileComputingFlags && pV.push("errors_while_computing_flags");
            const vV = !!(null === (xV = YV.quotaLimited) || void 0 === xV ? void 0 : xV.includes("feature_flags"));
            vV && pV.push("quota_limited"), this._set({
              [nV]: pV
            }), vV ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : JV.disable_flags || this._receivedFeatureFlags(YV, UV, {
              partialResponse: yV
            }), this._settleReloads(wV, JV.disable_flags ? "skipped" : pV.length || !YV.flags && !YV.featureFlags ? "error" : "loaded"), ZV()
          },
          rV = VV => {
            this._requestInFlight = !1, QV === this._requestGeneration ? (this._set({
              [nV]: [fv]
            }), this._logger.error("Feature flag request failed", VV), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(wV, "error"), ZV()) : ZV()
          };
        let bV = null !== (eV = this._config.requestMaxRetries) && void 0 !== eV ? eV : 1;
        const EV = () => bV > 0 && QV === this._requestGeneration,
          BV = () => {
            if (QV !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(wV, "skipped"), void ZV();
            try {
              xV.sendRequest(pV, {
                target: "flags",
                method: "POST",
                body: JV,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((VV => {
                if ((VV => lv.includes(VV.statusCode) || (VV => 0 === VV.statusCode && VV.error instanceof Error && "AbortError" === VV.error.name)(VV))(VV) && EV()) return bV--, void setTimeout(BV, 500);
                vV(VV)
              })).catch(rV)
            } catch (VV) {
              rV(VV)
            }
          };
        BV()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return iQ(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(VV) {
        this._consecutiveStatusZeroFailures = CQ(VV, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var xV;
        if (eV.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + VV + hv);
        if (this._checkAndTriggerStaleRefresh()) return;
        const JV = this.getFeatureFlagResult(VV, eV);
        return null !== (xV = null == JV ? void 0 : JV.variant) && void 0 !== xV ? xV : null == JV ? void 0 : JV.enabled
      }
      getFeatureFlagDetails(VV) {
        return this.getFlagsWithDetails()[VV]
      }
      getFeatureFlagPayload(VV) {
        const eV = this.getFeatureFlagResult(VV, {
          send_event: !1
        });
        return null == eV ? void 0 : eV.payload
      }
      getFeatureFlagResult(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (eV.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + VV + hv);
        if (this._checkAndTriggerStaleRefresh()) return;
        const xV = this.getFlagVariants(),
          JV = VV in xV,
          YV = xV[VV],
          UV = this.getFlagPayloads()[VV],
          yV = String(YV),
          pV = this._prop("$feature_flag_request_id") || void 0,
          QV = this._prop("$feature_flag_evaluated_at") || void 0;
        let nV, wV = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var ZV;
          const VV = null === (ZV = this._client) || void 0 === ZV || null === (ZV = ZV.session) || void 0 === ZV ? void 0 : ZV.sessionId,
            eV = this._prop(BV);
          VV && VV !== eV && (wV = {}, nV = VV)
        }
        if (!eV.send_event && "send_event" in eV) nV && this._set({
          [EV]: wV,
          [BV]: nV
        });
        else if (VV in wV && wV[VV].includes(yV)) nV && this._set({
          [EV]: wV,
          [BV]: nV
        });
        else {
          var vV, rV, kV, bV, jV, qV, tV, FV, TV, PV, AV, NV, XV;
          qx(wV[VV]) ? wV[VV].push(yV) : wV[VV] = [yV], this._set(jY({
            [EV]: wV
          }, nV ? {
            [BV]: nV
          } : {}));
          const eV = this.getFeatureFlagDetails(VV),
            xV = [...null !== (vV = this._prop("$feature_flag_errors")) && void 0 !== vV ? vV : []];
          Px(YV) && xV.push("flag_missing");
          const JV = {
            $feature_flag: VV,
            $feature_flag_response: YV,
            $feature_flag_payload: null != UV ? UV : null,
            $feature_flag_request_id: pV,
            $feature_flag_evaluated_at: QV,
            $feature_flag_bootstrapped_response: null !== (rV = null === (kV = this._config.bootstrap) || void 0 === kV || null === (kV = kV.featureFlags) || void 0 === kV ? void 0 : kV[VV]) && void 0 !== rV ? rV : null,
            $feature_flag_bootstrapped_payload: null !== (bV = null === (jV = this._config.bootstrap) || void 0 === jV || null === (jV = jV.featureFlagPayloads) || void 0 === jV ? void 0 : jV[VV]) && void 0 !== bV ? bV : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          Px(null == eV || null === (qV = eV.metadata) || void 0 === qV ? void 0 : qV.has_experiment) || (JV.$feature_flag_has_experiment = eV.metadata.has_experiment), Px(null == eV || null === (tV = eV.metadata) || void 0 === tV ? void 0 : tV.version) || (JV.$feature_flag_version = eV.metadata.version);
          const ZV = null !== (FV = null == eV || null === (TV = eV.reason) || void 0 === TV ? void 0 : TV.description) && void 0 !== FV ? FV : null == eV || null === (PV = eV.reason) || void 0 === PV ? void 0 : PV.code;
          ZV && (JV.$feature_flag_reason = ZV), (null == eV || null === (AV = eV.metadata) || void 0 === AV ? void 0 : AV.id) && (JV.$feature_flag_id = eV.metadata.id), Px(null == eV ? void 0 : eV.original_variant) && Px(null == eV ? void 0 : eV.original_enabled) || (JV.$feature_flag_original_response = Px(eV.original_variant) ? eV.original_enabled : eV.original_variant), (null == eV || null === (NV = eV.metadata) || void 0 === NV ? void 0 : NV.original_payload) && (JV.$feature_flag_original_payload = null == eV || null === (XV = eV.metadata) || void 0 === XV ? void 0 : XV.original_payload), xV.length && (JV.$feature_flag_error = xV.join(",")), this._captureFeatureFlagCalled(JV)
        }
        return JV ? {
          key: VV,
          enabled: !!YV,
          variant: "string" == typeof YV ? YV : void 0,
          payload: vU(UV)
        } : void 0
      }
      _captureFeatureFlagCalled(VV) {
        try {
          var eV;
          null === (eV = this._client) || void 0 === eV || eV.capture("$feature_flag_called", VV)
        } catch (VV) {
          this._logger.error("Failed to capture feature flag call", VV)
        }
      }
      getRemoteConfigPayload(VV, eV) {
        this._getRemoteConfigPayload(VV, eV)
      }
      _getRemoteConfigPayload(VV, eV) {
        var xV = this;
        return fx((function*() {
          const JV = xV._client;
          if (!JV) return;
          const YV = {
              distinct_id: JV.distinctId,
              token: JV.projectToken,
              person_properties: {
                $lib: JV.library.name,
                $lib_version: JV.library.version
              }
            },
            UV = xV._getValidEvaluationEnvironments();
          UV.length && (YV.evaluation_contexts = UV);
          const yV = xV._getValidFlagKeys();
          let pV;
          Px(yV) || (YV.flag_keys = yV);
          try {
            var QV;
            const eV = null === (QV = (yield JV.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: YV,
              compression: xV._config.compression,
              sentAt: "body",
              timeoutMs: xV._config.requestTimeoutMs
            })).json) || void 0 === QV ? void 0 : QV.featureFlagPayloads;
            pV = (null == eV ? void 0 : eV[VV]) || void 0
          } catch (VV) {
            return void xV._logger.error("Remote config feature flag request failed", VV)
          }
          try {
            eV(pV)
          } catch (VV) {
            xV._logger.error("Remote config feature flag callback failed", VV)
          }
        }))()
      }
      isFeatureEnabled(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (eV.fresh && !this._flagsLoadedFromRemote) return eV.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + VV + hv), eV.defaultValue;
        const xV = this.getFeatureFlag(VV, eV);
        return Px(xV) ? eV.defaultValue : !!xV
      }
      addFeatureFlagsHandler(VV) {
        this.featureFlagEventHandlers.push(VV)
      }
      removeFeatureFlagsHandler(VV) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((eV => eV !== VV))
      }
      receivedFeatureFlags(VV, eV, xV) {
        this._receivedFeatureFlags(VV, eV, xV)
      }
      _receivedFeatureFlags(VV, eV, xV) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const JV = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            YV = arguments.length > 4 ? arguments[4] : void 0,
            UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ov;
          const yV = ((VV, eV) => {
              const xV = VV.flags;
              if (xV) {
                const eV = Object.fromEntries(Object.keys(xV).map((VV => {
                    var eV;
                    return [VV, null !== (eV = xV[VV].variant) && void 0 !== eV ? eV : xV[VV].enabled]
                  }))),
                  JV = Object.fromEntries(Object.keys(xV).filter((VV => xV[VV].enabled)).filter((VV => {
                    var eV;
                    return !Px(null === (eV = xV[VV].metadata) || void 0 === eV ? void 0 : eV.payload)
                  })).map((VV => {
                    var eV;
                    return [VV, null === (eV = xV[VV].metadata) || void 0 === eV ? void 0 : eV.payload]
                  })));
                return jY(jY({}, VV), {}, {
                  featureFlags: eV,
                  featureFlagPayloads: JV
                })
              }
              return VV.featureFlags && eV.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), VV
            })(VV, UV),
            nV = yV.flags,
            kV = yV.featureFlags,
            bV = yV.featureFlagPayloads;
          if (!kV) return;
          const EV = VV.requestId,
            BV = VV.evaluatedAt;
          if (qx(kV)) {
            UV.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const VV = {};
            if (kV)
              for (let eV = 0; kV.length > eV; eV++) VV[kV[eV]] = !0;
            return {
              [pV]: kV,
              [rV]: VV,
              [vV]: !1
            }
          }
          let qV = kV,
            tV = bV,
            FV = nV;
          if (null == YV ? void 0 : YV.partialResponse) {
            const VV = Object.keys(qV),
              YV = tV || {};
            qV = jY(jY({}, eV), qV), tV = jY(jY({}, xV), YV), VV.forEach((VV => {
              VV in YV || null == tV || delete tV[VV]
            })), FV = jY(jY({}, JV), FV)
          } else if (VV.errorsWhileComputingFlags)
            if (nV) {
              const VV = new Set(Object.keys(nV).filter((VV => {
                var eV;
                return !(null === (eV = nV[VV]) || void 0 === eV ? void 0 : eV.failed)
              })));
              qV = jY(jY({}, eV), Object.fromEntries(Object.entries(qV).filter((eV => {
                let [xV] = eV;
                return VV.has(xV)
              }))));
              const YV = Object.fromEntries(Object.entries(tV || {}).filter((eV => {
                let [xV] = eV;
                return VV.has(xV)
              })));
              tV = jY(jY({}, xV), YV), VV.forEach((VV => {
                VV in YV || null == tV || delete tV[VV]
              })), FV = jY(jY({}, JV), Object.fromEntries(Object.entries(FV || {}).filter((eV => {
                let [xV] = eV;
                return VV.has(xV)
              }))))
            } else qV = jY(jY({}, eV), qV), tV = jY(jY({}, xV), tV), FV = jY(jY({}, JV), FV);
          return jY(jY({
            [pV]: Object.keys(Kv(qV)),
            [rV]: qV || {},
            [jV]: tV || {},
            [QV]: FV || {},
            [vV]: !0 === VV.minimalFlagCalledEvents
          }, EV ? {
            [ZV]: EV
          } : {}), BV ? {
            [wV]: BV
          } : {})
        }(VV, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), xV, this._logger);
        if (JV)
          if (!1 === (null == xV ? void 0 : xV.persist)) {
            const VV = !Px(this._client.kv.get(rV));
            this._bootstrapState = JV, VV || this._set(JV)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(JV, VV, !!(null == xV ? void 0 : xV.partialResponse)), this._set(JV);
        else eV && this._fallBackToPersistedFlags();
        eV || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(eV)
      }
      override(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: VV,
          suppressWarning: eV
        })
      }
      overrideFeatureFlags(VV) {
        this._overrideFeatureFlags(VV)
      }
      _overrideFeatureFlags(VV) {
        if (this._client) {
          if (!1 === VV) return this._remove([qV, tV]), this._fireFeatureFlagsCallbacks(), void cv.info("All overrides cleared");
          if (qx(VV)) return this._set({
            [qV]: mv(VV)
          }), this._fireFeatureFlagsCallbacks(), void cv.info("Flag overrides set", {
            flags: VV
          });
          if (VV && "object" == typeof VV && ("flags" in VV || "payloads" in VV)) {
            var eV;
            const xV = VV;
            this._override_warning = Boolean(null !== (eV = xV.suppressWarning) && void 0 !== eV && eV);
            const JV = {},
              YV = xV.flags,
              UV = xV.payloads;
            return YV && (JV[qV] = qx(YV) ? mv(YV) : YV), UV && (JV[tV] = UV), Object.keys(JV).length && this._set(JV), !1 === YV && !1 === UV ? this._remove([qV, tV]) : !1 === YV ? this._remove(qV) : !1 === UV && this._remove(tV), this._fireFeatureFlagsCallbacks(), !1 === YV ? cv.info("Flag overrides cleared") : YV && cv.info("Flag overrides set", {
              flags: YV
            }), void(!1 === UV ? cv.info("Payload overrides cleared") : UV && cv.info("Payload overrides set", {
              payloads: UV
            }))
          }
          if (VV && "object" == typeof VV) return this._set({
            [qV]: VV
          }), this._fireFeatureFlagsCallbacks(), void cv.info("Flag overrides set", {
            flags: VV
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: VV
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(VV) {
        if (this.addFeatureFlagsHandler(VV), this._hasLoadedFlags) {
          const {
            flags: eV,
            flagVariants: xV
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            VV(eV, xV)
          } catch (VV) {
            this._logger.error("Error while running feature flags callback", VV)
          }
        }
        return () => this.removeFeatureFlagsHandler(VV)
      }
      updateEarlyAccessFeatureEnrollment(VV, eV, xV) {
        var JV;
        const YV = (this._prop("$early_access_features") || []).find((eV => eV.flagKey === VV)),
          UV = {
            [`$feature_enrollment/${VV}`]: eV
          },
          yV = {
            $feature_flag: VV,
            $feature_enrollment: eV,
            $set: UV
          };
        YV && (yV.$early_access_feature_name = YV.name), xV && (yV.$feature_enrollment_stage = xV);
        const QV = jY(jY({}, this.getFlagVariants()), {}, {
          [VV]: eV
        });
        null === (JV = this._crossTabPersistence) || void 0 === JV || JV.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [VV],
          $enabled_feature_flags: [VV],
          $stored_person_properties: Object.keys(UV)
        }), this._set({
          [pV]: Object.keys(Kv(QV)),
          [rV]: QV,
          [bV]: jY(jY({}, this._prop("$stored_person_properties") || {}), UV)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var nV;
          null === (nV = this._client) || void 0 === nV || nV.capture("$feature_enrollment_update", yV)
        } catch (VV) {
          this._logger.error("Failed to capture early access feature enrollment", VV)
        }
      }
      getEarlyAccessFeatures(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = this._prop(yV);
        !JV || eV ? this._getEarlyAccessFeatures(VV, xV) : VV(JV)
      }
      _getEarlyAccessFeatures(VV, eV) {
        var xV = this;
        return fx((function*() {
          const JV = xV._client;
          if (!JV) return;
          const YV = eV ? `&${eV.map((VV=>`stage=${VV}`)).join("&")}` : "";
          let UV;
          try {
            const VV = yield JV.sendRequest(`/api/early_access_features/?token=${JV.projectToken}${YV}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!VV.json) return;
            UV = VV.json.earlyAccessFeatures, xV._set({
              [yV]: UV
            })
          } catch (VV) {
            return void xV._logger.error("Early access feature request failed", VV)
          }
          try {
            VV(UV)
          } catch (VV) {
            xV._logger.error("Early access feature callback failed", VV)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const VV = this.getFlags(),
          eV = this.getFlagVariants();
        return {
          flags: VV.filter((VV => eV[VV])),
          flagVariants: Object.keys(eV).filter((VV => eV[VV])).reduce(((VV, xV) => (VV[xV] = eV[xV], VV)), {})
        }
      }
      _fireFeatureFlagsCallbacks(VV) {
        this._rebuildEventProperties();
        const {
          flags: eV,
          flagVariants: xV
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((JV => {
          try {
            JV(eV, xV, {
              errorsLoading: VV
            })
          } catch (VV) {
            this._logger.error("Error while running feature flags callback", VV)
          }
        }))
      }
      setPersonPropertiesForFlags(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(VV, eV)
      }
      _setPersonPropertiesForFlags(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this._prop("$stored_person_properties") || {},
          JV = (null == VV ? void 0 : VV.$set) || ((null == VV ? void 0 : VV.$set_once) ? {} : VV),
          YV = null == VV ? void 0 : VV.$set_once,
          UV = {};
        if (YV)
          for (const yV in YV)({}).hasOwnProperty.call(YV, yV) && (yV in xV || (UV[yV] = YV[yV]));
        this._set({
          [bV]: jY(jY(jY({}, xV), UV), JV)
        }), eV && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = jY({}, this._prop("$stored_person_properties") || {});
        VV.forEach((VV => {
          delete xV[VV]
        })), this._set({
          [bV]: xV
        }), eV && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(bV), VV && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this._prop("$stored_group_properties") || {},
          JV = jY({}, xV);
        for (const YV of Object.keys(VV)) JV[YV] = jY(jY({}, xV[YV]), VV[YV]);
        this._set({
          [kV]: JV
        }), eV && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(VV) {
        if (VV) {
          const eV = this._prop("$stored_group_properties") || {};
          this._set({
            [kV]: jY(jY({}, eV), {}, {
              [VV]: {}
            })
          })
        } else this._remove(kV)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "pJ"), this._settleReloads(this._activeReloads, "pJ"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const uv = ay("[FeatureFlags]");
    var sv = class {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(VV, eV)
      }
      update(VV, eV) {
        this._snapshot = ((VV, eV) => {
          var xV, JV, YV, UV, yV, pV, QV, nV;
          return {
            bootstrap: {
              featureFlags: null !== (xV = null === (JV = VV.bootstrap) || void 0 === JV ? void 0 : JV.featureFlags) && void 0 !== xV ? xV : void 0,
              featureFlagPayloads: null !== (YV = null === (UV = VV.bootstrap) || void 0 === UV ? void 0 : UV.featureFlagPayloads) && void 0 !== YV ? YV : void 0
            },
            remoteRequestsDisabled: eV,
            featureFlagsDisabled: !!VV.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!VV.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!VV.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: VV.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (yV = VV.remote_config_refresh_interval_ms) && void 0 !== yV ? yV : 3e5,
            idleRefreshBackoff: Px(VV.remote_config_refresh_interval_ms),
            requestTimeoutMs: VV.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (pV = VV.feature_flag_request_max_retries) && void 0 !== pV ? pV : 1),
            compression: VV.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (QV = null !== (nV = VV.evaluation_contexts) && void 0 !== nV ? nV : VV.evaluation_environments) && void 0 !== QV ? QV : [],
            flagKeys: qx(VV.flag_keys) ? VV.flag_keys : void 0
          }
        })(VV, eV), !VV.evaluation_environments || VV.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (uv.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), Px(VV.flag_keys) || qx(VV.flag_keys) || uv.error("Invalid flag_keys found:", VV.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const Sv = VV => Cx(VV) && ("RangeError" === VV.name && 0 === VV.message.indexOf("Maximum call stack size exceeded") || "InternalError" === VV.name && "too much recursion" === VV.message),
      Iv = ay("[Error tracking]"),
      dv = "webkit-masked-url:",
      Ov = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      Vr = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", dv],
      er = ["__firefox__", "__gCrWeb"],
      xr = "Refusing to render web experiment since the viewer is a likely bot",
      Jr = {
        icontains: (VV, eV) => eV.toLowerCase().indexOf(VV.toLowerCase()) > -1,
        not_icontains: (VV, eV) => -1 === eV.toLowerCase().indexOf(VV.toLowerCase()),
        regex: (VV, eV) => YZ(eV, VV),
        not_regex: (VV, eV) => !YZ(eV, VV),
        exact: (VV, eV) => eV === VV,
        is_not: (VV, eV) => eV !== VV
      },
      Yr = ay("[Conversations]"),
      Ur = "Conversations not available yet.";

    function yr(VV, eV) {
      var xV, JV, YV, UV, yV, pV, QV;
      const nV = null !== (xV = null == VV ? void 0 : VV.flushIntervalMs) && void 0 !== xV ? xV : 3e3,
        wV = null !== (JV = null == VV ? void 0 : VV.maxBufferSize) && void 0 !== JV ? JV : 100,
        ZV = (null == eV ? void 0 : eV.consoleCapture) ? void 0 : null !== (YV = null == VV ? void 0 : VV.maxLogsPerInterval) && void 0 !== YV ? YV : 1e3,
        vV = Px(ZV) ? Math.max(wV, 2048) : Math.max(wV, ZV),
        rV = jY(jY({}, function() {
          let VV = "",
            eV = "";
          try {
            var xV;
            const JV = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              YV = null == JV || null === (xV = JV.navigator) || void 0 === xV ? void 0 : xV.userAgent;
            YV && ([VV, eV] = SJ(YV))
          } catch (VV) {}
          return function(VV, eV) {
            const xV = function(VV) {
              if (VV) return {}.hasOwnProperty.call(qy, VV) ? qy[VV] : VV
            }(VV);
            return jY(jY({}, xV ? {
              "os.name": xV
            } : {}), eV ? {
              "os.version": eV
            } : {})
          }(VV, eV)
        }()), null == VV ? void 0 : VV.resourceAttributes);
      return {
        serviceName: null !== (UV = null !== (yV = null == rV ? void 0 : rV["service.name"]) && void 0 !== yV ? yV : null == VV ? void 0 : VV.serviceName) && void 0 !== UV ? UV : null == eV ? void 0 : eV.serviceNameDefault,
        serviceVersion: null !== (pV = null == rV ? void 0 : rV["service.version"]) && void 0 !== pV ? pV : null == VV ? void 0 : VV.serviceVersion,
        environment: null !== (QV = null == rV ? void 0 : rV["deployment.environment"]) && void 0 !== QV ? QV : null == VV ? void 0 : VV.environment,
        resourceAttributes: rV,
        beforeSend: null == VV ? void 0 : VV.beforeSend,
        flushIntervalMs: nV,
        maxBufferSize: wV,
        maxQueueSize: vV,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: nV,
        maxLogsPerInterval: ZV,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const pr = ["debug", "log", "warn", "error", "info"],
      Qr = VV => {
        for (; null == VV ? void 0 : VV.__rrweb_original__;) VV = VV.__rrweb_original__;
        return VV
      },
      nr = "console",
      wr = "__posthogHandledLogsRequestError",
      Zr = (VV, eV) => {
        const xV = VV instanceof Error ? VV : new Error(eV);
        return xV[wr] = !0, xV
      },
      vr = VV => !!VV && "object" == typeof VV && !0 === VV[wr];
    var rr = class {
      get _coreLogger() {
        var VV = this;
        return jY(jY({}, this._logger), {}, {
          error: function() {
            for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
            xV.some(vr) || VV._logger.error(...xV)
          }
        })
      }
      constructor(VV, eV) {
        var xV;
        this._configSource = VV, this._getSdkContext = eV, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = ay("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var VV, eV;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (VV = this._core) || void 0 === VV || VV.onReconnect(), null === (eV = this._consoleCore) || void 0 === eV || eV.onReconnect())
        }, this._isLogsEnabled = !!(null === (xV = VV.get()) || void 0 === xV ? void 0 : xV.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (JV) {
            this._window = void 0
          }
          this._window && (uy(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(VV, eV, xV, JV) {
        this._listenForReconnect();
        const YV = yr(this._configSource.get(), xV);
        return [new Gy(this._createHost(VV, eV), YV, this._coreLogger, (() => this._getSdkContext()), (VV => VV()), void 0, JV), YV]
      }
      _getCore() {
        const VV = this._configSource.get();
        var eV;
        return this._core && this._resolvedFrom === VV || (null === (eV = this._core) || void 0 === eV || eV.reset(), this._resolvedFrom = VV, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (VV => {
          this._queue = VV
        }))), this._core
      }
      _getConsoleCore() {
        const VV = this._configSource.get();
        var eV;
        return this._consoleCore && this._consoleResolvedFrom === VV || (null === (eV = this._consoleCore) || void 0 === eV || eV.reset(), this._consoleResolvedFrom = VV, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (VV => {
          this._consoleQueue = VV
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, nr)), this._consoleCore
      }
      setup(VV) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = VV, this._logger = VV.logger.createLogger("[logs]"), Av(VV.kv.initialize(), (() => {
          this._disposed || this._finishSetup(VV)
        }))
      }
      _finishSetup(VV) {
        var eV;
        this._listenForReconnect(), (null === (eV = this._configSource.get()) || void 0 === eV ? void 0 : eV.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && VV.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let xV = !1;
        const JV = VV.onRemoteConfig((VV => {
          var eV;
          xV = VV.ok && !0 === (null === (eV = VV.config.logs) || void 0 === eV ? void 0 : eV.captureConsoleLogs), this.onRemoteConfig(VV)
        }));
        this._disposed ? JV.dispose() : (this._remoteConfigSubscription = JV, xV || this.loadIfEnabled())
      }
      dispose() {
        var VV, eV, xV, JV, YV, UV, yV;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (VV = this._remoteConfigSubscription) || void 0 === VV || VV.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (eV = this._window) || void 0 === eV || eV.removeEventListener("online", this._onReconnect), null === (xV = this._consoleLogsDispose) || void 0 === xV || xV.call(this), this._consoleLogsDispose = void 0, null === (JV = this._core) || void 0 === JV || JV.clearQueue(), null === (YV = this._consoleCore) || void 0 === YV || YV.clearQueue(), null === (UV = this._core) || void 0 === UV || UV.reset(), null === (yV = this._consoleCore) || void 0 === yV || yV.reset())
      }
      onRemoteConfig(VV) {
        var eV, xV;
        if (this._disposed) return;
        const JV = VV.ok ? null === (eV = VV.config.logs) || void 0 === eV ? void 0 : eV.captureConsoleLogs : void 0;
        Mx(JV) ? this._stopRecorderStartedByPersistedHint() : (null === (xV = this._client) || void 0 === xV || xV.kv.set(this._configSource.captureHintKey, !!JV), JV ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var VV, eV, xV, JV;
        this._stopConsoleRecorder(), null === (VV = this._core) || void 0 === VV || VV.clearQueue(), this._queue = [], null === (eV = this._core) || void 0 === eV || eV.reset(), null === (xV = this._consoleCore) || void 0 === xV || xV.clearQueue(), this._consoleQueue = [], null === (JV = this._consoleCore) || void 0 === JV || JV.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(VV) {
        !this._disposed && this._client && this._getCore().captureLog(VV)
      }
      captureConsoleLog(VV) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(VV)
      }
      captureBufferedConsoleLog(VV, eV, xV) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(VV, {
          context: eV,
          occurredAtMs: xV
        })
      }
      _onOptOut() {
        var VV;
        this._stopConsoleRecorder(), null === (VV = this._consoleCore) || void 0 === VV || VV.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var VV, eV = this;
        if (this._isRecordingConsole || !(null === (VV = this._window) || void 0 === VV ? void 0 : VV.console)) return;
        const xV = yr(this._configSource.get()).maxBufferSize;
        let JV = !0;
        this._consoleRecorderUnpatchers.push((() => {
          JV = !1
        }));
        for (const YV of pr) {
          let UV;
          try {
            UV = Qr(this._window.console[YV])
          } catch (VV) {
            continue
          }
          UV && this._consoleRecorderUnpatchers.push(yv(this._window.console, YV, (VV => {
            const yV = function() {
              for (var UV = arguments.length, yV = new Array(UV), pV = 0; pV < UV; pV++) yV[pV] = arguments[pV];
              try {
                JV && eV._recordConsoleEntry(YV, yV, xV)
              } catch (YV) {}
              return VV.apply(eV._window.console, yV)
            };
            return yV.__rrweb_original__ = UV, yV
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(VV, eV, xV) {
        var JV;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== eV.length)
          if (null === (JV = this._client) || void 0 === JV ? void 0 : JV.canCapture) {
            if (xV > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: VV,
                  args: eV,
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
          for (const VV of this._consoleRecorderUnpatchers) VV();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const VV = this._consoleBuffer;
        return this._stopConsoleRecorder(), VV
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (VV, eV) => this.captureLog({
            body: VV,
            level: "trace",
            attributes: eV
          }),
          debug: (VV, eV) => this.captureLog({
            body: VV,
            level: "debug",
            attributes: eV
          }),
          info: (VV, eV) => this.captureLog({
            body: VV,
            level: "info",
            attributes: eV
          }),
          warn: (VV, eV) => this.captureLog({
            body: VV,
            level: "warn",
            attributes: eV
          }),
          error: (VV, eV) => this.captureLog({
            body: VV,
            level: "error",
            attributes: eV
          }),
          fatal: (VV, eV) => this.captureLog({
            body: VV,
            level: "fatal",
            attributes: eV
          })
        }), this._capture_logger
      }
      flushLogs(VV) {
        this._client && (VV ? this._flushViaTransport(VV) : (this._core && this._core.flush().catch((VV => this._logFlushError(VV))), this._consoleCore && this._consoleCore.flush().catch((VV => this._logFlushError(VV)))))
      }
      flush() {
        var VV = this;
        return fx((function*() {
          var eV, xV;
          const JV = null === (eV = VV._core) || void 0 === eV ? void 0 : eV.flush().catch((eV => VV._logFlushError(eV))),
            YV = null === (xV = VV._consoleCore) || void 0 === xV ? void 0 : xV.flush().catch((eV => VV._logFlushError(eV)));
          yield JV, yield YV
        }))()
      }
      _logFlushError(VV) {
        vr(VV) || this._logger.error("PostHog logs flush failed:", VV)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const VV = this._getConsoleLoader();
        if (VV) {
          this._isLoading = !0;
          try {
            VV(((VV, eV) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (VV || !eV) this._logger.error("Could not load logs script", VV), this._stopConsoleRecorder();
                else {
                  const VV = this._takeConsoleBuffer();
                  this._consoleLogsDispose = eV.initialize(this._client), this._isLoaded = !0, VV.length > 0 && eV.replay(this._client, VV)
                }
            }))
          } catch (VV) {
            throw this._isLoading = !1, VV
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(VV, eV) {
        const xV = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !xV.canCapture
          },
          getPersistedProperty: eV => eV === Qx.LogsQueue ? VV() : void 0,
          setPersistedProperty(VV, xV) {
            VV === Qx.LogsQueue && eV(null != xV ? xV : [])
          },
          _sendLogsBatch: VV => this._sendLogsBatch(VV),
          getLibraryId: () => xV.library.name,
          getLibraryVersion: () => xV.library.version
        }
      }
      _sendLogsBatch(VV) {
        return new Promise((eV => {
          if (iQ(this._consecutiveStatusZeroFailures, 3)) return void eV({
            kind: "fatal",
            error: Zr(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let xV = !1;
          const JV = VV => {
              xV || (xV = !0, clearTimeout(YV), eV(VV))
            },
            YV = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), JV({
                kind: "retry-later",
                error: Zr(void 0, "logs request timed out")
              })
            }), 9e4),
            UV = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: VV,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((VV => {
            var eV;
            const xV = VV.statusCode;
            this._trackEndpointReachability(xV, UV), xV >= 200 && 300 > xV ? JV({
              kind: "ok"
            }) : 413 === xV ? JV({
              kind: "too-large"
            }) : 0 !== xV && 408 !== xV && 429 !== xV && 500 > xV ? JV({
              kind: "fatal",
              error: new Error(`logs request failed with status ${xV}`)
            }) : 0 === xV ? (VV.error || this._logger.warn("Logs request failed before receiving an HTTP response"), JV({
              kind: "retry-later",
              error: Zr(VV.error, "logs request failed before receiving an HTTP response")
            })) : JV({
              kind: "retry-later",
              error: null !== (eV = VV.error) && void 0 !== eV ? eV : new Error(`logs request failed with status ${xV}`)
            })
          }), (VV => {
            JV({
              kind: "retry-later",
              error: VV
            })
          }))
        }))
      }
      _trackEndpointReachability(VV, eV) {
        (0 !== VV || eV) && (this._consecutiveStatusZeroFailures = CQ(VV, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(VV) {
        this._queue.length > 0 && this._drainQueueViaTransport(VV, this._queue, this._resolvedConfig, this._client.library.name, (VV => {
          this._queue = VV
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(VV, this._consoleQueue, this._consoleResolvedConfig, nr, (VV => {
          this._consoleQueue = VV
        }))
      }
      _drainQueueViaTransport(VV, eV, xV, JV, YV) {
        if (0 === eV.length) return;
        const UV = eV.map((VV => VV.record));
        YV([]);
        const yV = Ny(UV, Ay(xV, this._client.library.name, this._client.library.version), JV, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: yV,
          compression: "best-available",
          transport: VV,
          timeoutMs: 6e4
        }).catch((VV => this._logFlushError(VV)))
      }
    };
    const kr = ay("[NetworkMetrics]"),
      br = () => {
        var VV;
        return (null == Se || null === (VV = Se.performance) || void 0 === VV ? void 0 : VV.now) ? Se.performance.now() : Date.now()
      },
      Er = {
        "http:": 80,
        "https:": 443
      },
      Br = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      jr = (VV, eV) => {
        var xV;
        const JV = String(eV);
        return {
          method: String(VV).toUpperCase(),
          url: (null === (xV = oQ(JV)) || void 0 === xV ? void 0 : xV.href) || JV
        }
      },
      qr = function(VV, eV, xV, JV, YV, UV) {
        let yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var pV, QV;
          const nV = YV();
          if (!nV) return;
          const wV = xV || void 0,
            ZV = br() - JV,
            vV = oQ(eV.url);
          if (vV && "http:" !== vV.protocol && "https:" !== vV.protocol) return;
          const rV = {
              url: (null == vV ? void 0 : vV.href) || eV.url,
              method: eV.method
            },
            kV = tx(nV.name) ? nV.name(rV) : Ax(nV.name) ? nV.name : "http.client.request.duration";
          if (!kV) return;
          const bV = yV && !wV ? void 0 : ((VV, eV) => VV ? 400 > VV ? void 0 : String(VV) : (null == eV ? void 0 : eV.name) || "_OTHER")(wV, UV),
            EV = jY(jY(jY(jY(jY({}, (VV => {
              const eV = Br.has(VV) ? VV : "_OTHER";
              return jY({
                "http.request.method": eV
              }, "_OTHER" === eV && VV !== eV ? {
                "http.request.method_original": VV
              } : {})
            })(rV.method)), vV ? (VV => {
              return {
                "server.address": VV.hostname.startsWith("[") && VV.hostname.endsWith("]") ? VV.hostname.slice(1, -1) : VV.hostname,
                "server.port": Number(VV.port) || Er[VV.protocol],
                "url.scheme": VV.protocol.slice(0, -1),
                "url.template": (eV = VV.pathname, eV.split("/").map((VV => (VV => /^\d+$/.test(VV) || VV.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(VV))(VV) ? ":id" : VV)).join("/"))
              };
              var eV
            })(vV) : {}), wV ? {
              "http.response.status_code": wV
            } : {}), bV ? {
              "error.type": bV
            } : {}), null === (pV = nV.attributes) || void 0 === pV ? void 0 : pV.call(nV, rV, {
              status: wV,
              durationMs: ZV
            }));
          null === (QV = VV.metrics) || void 0 === QV || QV.histogram(kV, ZV, {
            unit: "ms",
            attributes: EV
          })
        } catch (VV) {
          kr.error("Failed to record network metric", VV)
        }
      },
      tr = () => {},
      Fr = (VV, eV) => tx(null == Se ? void 0 : Se.fetch) ? yv(Se, "fetch", (xV => function() {
        for (var JV = arguments.length, YV = new Array(JV), UV = 0; UV < JV; UV++) YV[UV] = arguments[UV];
        const yV = br(),
          pV = xV.apply(this, YV);
        if (!eV()) return pV;
        try {
          var QV, nV, wV;
          const [xV, JV] = YV, UV = jr(null !== (QV = null !== (nV = null == JV ? void 0 : JV.method) && void 0 !== nV ? nV : null == xV ? void 0 : xV.method) && void 0 !== QV ? QV : "GET", null !== (wV = null == xV ? void 0 : xV.url) && void 0 !== wV ? wV : xV);
          return pV.then((xV => (qr(VV, UV, null == xV ? void 0 : xV.status, yV, eV, void 0, !0), xV)), (xV => {
            throw qr(VV, UV, void 0, yV, eV, xV), xV
          }))
        } catch (VV) {
          return kr.error("Failed to observe fetch", VV), pV
        }
      })) : tr,
      Tr = (VV, eV) => {
        var xV;
        const JV = null == Se || null === (xV = Se.XMLHttpRequest) || void 0 === xV ? void 0 : xV.prototype;
        if (!JV) return tr;
        const YV = new WeakMap,
          UV = yv(JV, "open", (VV => function() {
            for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
            try {
              (() => Fw.has(this))() || YV.set(this, jr(xV[0], xV[1]))
            } catch (VV) {
              kr.error("Failed to observe XHR open", VV)
            }
            return VV.apply(this, xV)
          })),
          yV = yv(JV, "send", (xV => function() {
            let JV;
            try {
              const xV = YV.get(this);
              if (xV && eV()) {
                const YV = br();
                JV = () => {
                  this.removeEventListener("loadend", JV), qr(VV, xV, this.status, YV, eV)
                }, uy(this, "loadend", JV)
              }
            } catch (VV) {
              kr.error("Failed to observe XHR send", VV)
            }
            try {
              for (var UV = arguments.length, yV = new Array(UV), pV = 0; pV < UV; pV++) yV[pV] = arguments[pV];
              return xV.apply(this, yV)
            } catch (VV) {
              throw JV && this.removeEventListener("loadend", JV), VV
            }
          }));
        return () => {
          UV(), yV()
        }
      },
      Pr = new WeakMap,
      Ar = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      Nr = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function Xr(VV) {
      if (VV) return !0 === VV ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== VV.intent,
        model: !1 !== VV.model
      }
    }

    function Mr(VV, eV) {
      return {}.hasOwnProperty.call(VV, eV)
    }

    function zr(VV, eV) {
      const xV = Object.create(VV);
      return eV && Object.defineProperty(xV, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: eV
      }), xV
    }

    function Gr(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!Ax(VV)) return;
      const JV = VV.trim();
      return JV ? (xV ? function(VV, eV) {
        return function(VV) {
          return VV.length >= 10240 && (MU.test(VV) || function(VV) {
            const eV = WU.exec(VV);
            if (!eV) return !1;
            let xV;
            try {
              xV = decodeURIComponent(VV.slice(eV[0].length))
            } catch (VV) {
              return !1
            }
            return RU.test(xV.replace(/[\r\n]/g, ""))
          }(VV) || GU.test(VV) && zU.test(VV))
        }(VV) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(VV, eV, xV) {
          const JV = 4 * xV.maxStringLength;
          if (VV.length > JV) {
            const YV = eV(VV.slice(0, function(VV, eV) {
              let xV = eV;
              for (; xV > 0 && !CU.test(VV[xV - 1]);) xV--;
              return xV
            }(VV, JV)));
            if (YV.length >= 2 * xV.maxStringLength) return YV + xV.truncationSuffix
          }
          return eV(VV)
        }(VV, (VV => function(VV) {
          return py(VV, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(VV) {
          let eV = VV.replace(fU, " ");
          return eV = eV.replace(mU, XU), eV = eV.replace(KU, XU), eV = eV.replace(HU, `$1${XU}`), eV = eV.replace(sU, wy), eV = eV.replace(uU, XU), eV = eV.replace(IU, `$1${XU}`), eV = eV.replace(dU, `$1${XU}`), eV
        }(Qy(VV)))), eV)
      }(JV, Nr) : JV).slice(0, eV) : void 0
    }

    function Wr(VV) {
      try {
        return Fx(VV) && !0 === VV.isError
      } catch (VV) {
        return !1
      }
    }
    const Rr = {
        featureFlags: class extends Hv {
          constructor(VV) {
            const eV = new sv(VV.config, VV._shouldDisableFlags());
            super(eV), this.name = TZ, this._instance = VV, this._mutableConfigSource = eV
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(VV, eV) {
            this._mutableConfigSource.update(VV, eV), this._onConfigUpdated()
          }
        }
      },
      gr = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var VV;
            return !!(null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV ? void 0 : VV.isStarted)
          }
          get status() {
            var VV, eV;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (VV = null === (eV = this._lazyLoadedSessionRecording) || void 0 === eV ? void 0 : eV.status) && void 0 !== VV ? VV : this._recordingStatus
          }
          constructor(VV) {
            if (this._instance = VV, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = rv, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var VV, eV;
                if (!(null == Oe ? void 0 : Oe.visibilityState) || "visible" === Oe.visibilityState) return !0;
                const xV = null == Se || null === (VV = Se.performance) || void 0 === VV || null === (eV = VV.getEntriesByType) || void 0 === eV ? void 0 : eV.call(VV, "visibility-state");
                return !(null == xV ? void 0 : xV.length) || xV.some((VV => "visible" === VV.name))
              })(), this._onVisibilityChange = () => {
                var VV, eV;
                "visible" === (null == Oe ? void 0 : Oe.visibilityState) && (this._documentWasEverVisible = !0, null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV || null === (eV = VV.setDocumentWasEverVisible) || void 0 === eV || eV.call(VV, !0))
              }, !this._instance.sessionManager) throw bv.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == Oe ? void 0 : Oe.addEventListener) && uy(Oe, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: VV = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var eV;
            this._sessionRecordingDisposed = !0, null == Oe || null === (eV = Oe.removeEventListener) || void 0 === eV || eV.call(Oe, "visibilitychange", this._onVisibilityChange), VV ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var VV;
            const eV = !!(null === (VV = this._instance.get_property("$session_recording_remote_config")) || void 0 === VV ? void 0 : VV.enabled),
              xV = !this._config.disable_session_recording,
              JV = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return Se && eV && xV && !JV
          }
          startIfEnabledOrStop(VV) {
            var eV;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (eV = this._lazyLoadedSessionRecording) || void 0 === eV ? void 0 : eV.isStarted)) return;
            const xV = !Px(Object.assign) && !Px(Array.from);
            this._isRecordingEnabled && xV ? (this._lazyLoadAndStart(VV), bv.info("starting")) : (this._recordingStatus = rv, this.stopRecording())
          }
          _lazyLoadAndStart(VV) {
            var eV, xV;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = kv), (null == px || null === (eV = px.__PosthogExtensions__) || void 0 === eV || null === (eV = eV.rrweb) || void 0 === eV ? void 0 : eV.record) && (null === (xV = px.__PosthogExtensions__) || void 0 === xV ? void 0 : xV.initSessionRecording)) this._onScriptLoaded(VV);
              else {
                var JV, YV;
                const eV = this._instance.sessionManager;
                null === (JV = px.__PosthogExtensions__) || void 0 === JV || null === (YV = JV.loadExternalDependency) || void 0 === YV || YV.call(JV, this._instance, this._scriptName, (xV => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === eV) return xV ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), bv.error("could not load recorder", xV)) : void this._onScriptLoaded(VV);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var VV, eV;
            null === (VV = this._persistFlagsOnSessionListener) || void 0 === VV || VV.call(this), this._persistFlagsOnSessionListener = void 0, null === (eV = this._lazyLoadedSessionRecording) || void 0 === eV || eV.stop()
          }
          _discardRecording() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var eV, xV;
            null === (eV = this._persistFlagsOnSessionListener) || void 0 === eV || eV.call(this), this._persistFlagsOnSessionListener = void 0, null === (xV = this._lazyLoadedSessionRecording) || void 0 === xV || xV.discard({
              discardProducerEvents: VV
            })
          }
          _resetSampling() {
            var VV, eV;
            null === (VV = this._persistence) || void 0 === VV || VV.unregister("$session_is_sampled"), null === (eV = this._persistence) || void 0 === eV || eV.unregister("$replay_sample_rate")
          }
          _validateSampleRate(VV, eV) {
            if (Mx(VV)) return null;
            const xV = zx(VV) ? VV : parseFloat(VV);
            return "number" != typeof(JV = xV) || !Number.isFinite(JV) || 0 > JV || JV > 1 ? (bv.warn(`${eV} must be between 0 and 1. Ignoring invalid value:`, VV), null) : xV;
            var JV
          }
          _persistRemoteConfig(VV) {
            if (this._persistence) {
              var eV, xV;
              const JV = this._persistence,
                YV = () => {
                  var eV;
                  const xV = !1 === VV.sessionRecording ? void 0 : VV.sessionRecording,
                    YV = this._validateSampleRate(null === (eV = this._config.session_recording) || void 0 === eV ? void 0 : eV.sampleRate, "session_recording.sampleRate"),
                    UV = this._validateSampleRate(null == xV ? void 0 : xV.sampleRate, "remote config sampleRate"),
                    yV = null != YV ? YV : UV;
                  Mx(yV) && this._resetSampling();
                  const pV = null == xV ? void 0 : xV.minimumDurationMilliseconds;
                  JV.register({
                    [mV]: jY(jY({
                      cache_timestamp: Date.now(),
                      enabled: !!xV
                    }, xV), {}, {
                      networkPayloadCapture: jY({
                        capturePerformance: VV.capturePerformance
                      }, null == xV ? void 0 : xV.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == xV ? void 0 : xV.recordCanvas,
                        fps: null == xV ? void 0 : xV.canvasFps,
                        quality: null == xV ? void 0 : xV.canvasQuality
                      },
                      sampleRate: yV,
                      minimumDurationMilliseconds: Px(pV) ? null : pV,
                      endpoint: null == xV ? void 0 : xV.endpoint,
                      triggerMatchType: null == xV ? void 0 : xV.triggerMatchType,
                      masking: null == xV ? void 0 : xV.masking,
                      urlTriggers: null == xV ? void 0 : xV.urlTriggers,
                      version: null == xV ? void 0 : xV.version,
                      triggerGroups: null == xV ? void 0 : xV.triggerGroups
                    })
                  })
                };
              YV(), null === (eV = this._persistFlagsOnSessionListener) || void 0 === eV || eV.call(this), this._persistFlagsOnSessionListener = null === (xV = this._instance.sessionManager) || void 0 === xV ? void 0 : xV.onSessionId(YV)
            }
          }
          onRemoteConfig(VV) {
            const eV = VV.ok ? VV.config : void 0;
            return eV && "sessionRecording" in eV ? !1 === eV.sessionRecording ? (this._persistRemoteConfig(eV), void this._discardRecording()) : (this._persistRemoteConfig(eV), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [We]: !0
            }), bv.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var xV;
            (null === (xV = this._lazyLoadedSessionRecording) || void 0 === xV ? void 0 : xV.log) ? this._lazyLoadedSessionRecording.log(VV, eV): bv.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var VV, eV;
            const xV = null === (VV = this._instance) || void 0 === VV || null === (VV = VV.persistence) || void 0 === VV ? void 0 : VV.get_property(mV);
            return (null == xV || null === (eV = xV.scriptConfig) || void 0 === eV ? void 0 : eV.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const VV = this._instance.get_property(mV);
            if (!VV) return !1;
            let eV;
            try {
              eV = "object" == typeof VV ? VV : JSON.parse(VV)
            } catch (VV) {
              return bv.warn("persisted remote config for session recording is invalid and will be ignored", VV), !1
            }
            return !Mx(eV.cache_timestamp) && 36e5 >= Date.now() - eV.cache_timestamp
          }
          _onScriptLoaded(VV) {
            var eV, xV, JV;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.initSessionRecording)) return bv.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [Ge]: !0
              });
              var YV;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (YV = px.__PosthogExtensions__) || void 0 === YV ? void 0 : YV.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", bv.info("persisted remote config is stale, requesting fresh config before starting"), void new hn(this._instance).load()
              }
              this._recordingStatus = kv, null === (xV = (JV = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === xV || xV.call(JV, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(VV)
            } else this._recordingStatus = rv
          }
          onRRwebEmit(VV) {
            var eV, xV;
            null === (eV = this._lazyLoadedSessionRecording) || void 0 === eV || null === (xV = eV.onRRwebEmit) || void 0 === xV || xV.call(eV, VV)
          }
          overrideLinkedFlag() {
            var VV, eV;
            this._lazyLoadedSessionRecording || null === (eV = this._persistence) || void 0 === eV || eV.register({
              $replay_override_linked_flag: !0
            }), null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV || VV.overrideLinkedFlag()
          }
          overrideSampling() {
            var VV, eV;
            this._lazyLoadedSessionRecording || null === (eV = this._persistence) || void 0 === eV || eV.register({
              $replay_override_sampling: !0
            }), null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV || VV.overrideSampling()
          }
          overrideTrigger(VV) {
            var eV, xV;
            this._lazyLoadedSessionRecording || null === (xV = this._persistence) || void 0 === xV || xV.register({
              ["url" === VV ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (eV = this._lazyLoadedSessionRecording) || void 0 === eV || eV.overrideTrigger(VV)
          }
          get sdkDebugProperties() {
            var VV;
            const eV = {};
            for (const JV of Ev) {
              var xV;
              const VV = null === (xV = this._instance.sessionPersistence) || void 0 === xV ? void 0 : xV.get_property(JV);
              Px(VV) || (eV[JV] = VV)
            }
            return jY(jY({}, eV), (null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV ? void 0 : VV.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(VV, eV) {
            var xV;
            return !!(null === (xV = this._lazyLoadedSessionRecording) || void 0 === xV ? void 0 : xV.tryAddCustomEvent(VV, eV))
          }
          flushBeforeIdentityReset() {
            var VV, eV;
            null === (VV = this._lazyLoadedSessionRecording) || void 0 === VV || null === (eV = VV.flushBeforeIdentityReset) || void 0 === eV || eV.call(VV)
          }
        }
      },
      Dr = {
        autocapture: class extends ev {
          constructor(VV) {
            super(new xv(VV)), this.instance = VV
          }
        },
        historyAutocapture: class {
          constructor(VV) {
            this._isFlushingPageview = !1, this._instance = VV, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const VV = this._getCaptureOptions();
            return !!(VV.path || VV.search || this._shouldCaptureHashChanges(VV))
          }
          startIfEnabled() {
            this.isEnabled && (Cy.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, Cy.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            Se && Se.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(VV) {
            var eV;
            if (!Se || (null === (eV = Se.history[VV]) || void 0 === eV ? void 0 : eV.__posthog_wrapped__)) return;
            const xV = this;
            yv(Se.history, VV, (eV => function(JV, YV, UV) {
              var yV;
              xV._isUrlChanging(UV) && xV._flushPendingPageview(), eV.call(this, JV, YV, UV), xV._capturePageview(VV, !xV._isFlushingPageview && "popstate" !== (null == Se || null === (yV = Se.event) || void 0 === yV ? void 0 : yV.type))
            }))
          }
          _getCurrentLocation() {
            const VV = null == Se ? void 0 : Se.location;
            if (null == VV ? void 0 : VV.pathname) return {
              pathname: VV.pathname,
              search: VV.search,
              hash: VV.hash
            }
          }
          _getCaptureOptions() {
            const VV = this._instance.config.capture_pageview;
            return "history_change" === VV ? {
              path: !0
            } : Fx(VV) ? VV : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(VV) {
            const eV = this._getCaptureOptions(),
              xV = this._lastLocation;
            return !(!xV || !(eV.path && VV.pathname !== xV.pathname || eV.search && VV.search !== xV.search || this._shouldCaptureHashChanges(eV) && VV.hash !== xV.hash))
          }
          _capturePageview(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              eV || this._flushPendingPageview();
              const xV = this._getCurrentLocation();
              if (!xV) return;
              if (this._hasLocationChanged(xV)) {
                const xV = () => this._instance.capture(Ke, {
                  navigation_type: VV
                });
                eV ? (this._pendingPageview = xV, Promise.resolve().then((() => this._flushPendingPageview()))) : xV()
              }
              this._lastLocation = xV
            } catch (eV) {
              Cy.error(`Error capturing ${VV} pageview`, eV)
            }
          }
          _isUrlChanging(VV) {
            var eV, xV;
            return !(Mx(VV) || !Se) && (null === (eV = oQ(String(VV))) || void 0 === eV ? void 0 : eV.href) !== (null === (xV = Se.location) || void 0 === xV ? void 0 : xV.href)
          }
          _flushPendingPageview() {
            const VV = this._pendingPageview;
            if (VV) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                VV()
              } catch (VV) {
                Cy.error("Error capturing deferred pageview", VV)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const VV = () => {
              this._capturePageview("popstate")
            };
            uy(Se, "popstate", VV), this._popstateListener = () => {
              Se && Se.removeEventListener("popstate", VV)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const VV = () => {
              this._capturePageview("hashchange")
            };
            uy(Se, "hashchange", VV), this._hashchangeListener = () => {
              Se && Se.removeEventListener("hashchange", VV)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(VV) {
            var eV;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = VV, this._enabledServerSide = !!(null === (eV = this.instance.persistence) || void 0 === eV ? void 0 : eV.props[iV]), this.rageclicks = new SZ(VV.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let VV = 5e3;
            return Fx(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (VV = this._config.capture_heatmaps.flush_interval_milliseconds), VV
          }
          get isEnabled() {
            return Mx(this._config.capture_heatmaps) ? Mx(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              Bv.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var VV;
              clearInterval(null !== (VV = this._flushInterval) && void 0 !== VV ? VV : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(VV) {
            if (!VV.ok) return;
            const eV = VV.config;
            if (!("heatmaps" in eV)) return;
            const xV = !!eV.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [iV]: xV
            }), this._enabledServerSide = xV, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const VV = this._buffer;
            return this._buffer = void 0, VV
          }
          _onDeadClick(VV) {
            jv(VV.originalEvent) && this._onClick(VV.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == Oe ? void 0 : Oe.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            Se && Oe && (this._flushHandler = this._flush.bind(this), uy(Se, me, this._flushHandler), this._onClickHandler = VV => this._onClick(VV || (null == Se ? void 0 : Se.event)), uy(Oe, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = VV => this._onMouseMove(VV || (null == Se ? void 0 : Se.event)), uy(Oe, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new FQ(this.instance, qQ, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), uy(Oe, FV, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var VV;
            Se && Oe && (this._flushHandler && Se.removeEventListener(me, this._flushHandler), this._onClickHandler && Oe.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && Oe.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && Oe.removeEventListener(FV, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (VV = this._deadClicksCapture) || void 0 === VV || VV.stop(), this._initialized = !1)
          }
          _getProperties(VV, eV) {
            const xV = this.instance.scrollManager.scrollY(),
              JV = this.instance.scrollManager.scrollX(),
              YV = this.instance.scrollManager.scrollElement(),
              UV = function(VV, eV, xV) {
                let JV = VV;
                for (; JV && Mp(JV) && !zp(JV, "body");) {
                  if (JV === xV) return !1;
                  let pV;
                  try {
                    var YV, UV, yV;
                    pV = null === (YV = null !== (UV = null === (yV = JV.ownerDocument) || void 0 === yV ? void 0 : yV.defaultView) && void 0 !== UV ? UV : Se) || void 0 === YV ? void 0 : YV.getComputedStyle(JV).position
                  } catch (VV) {
                    return !1
                  }
                  if (vx(eV, pV)) return !0;
                  JV = lp(JV)
                }
                return !1
              }(ap(VV), ["fixed", "sticky"], YV);
            return {
              x: VV.clientX + (UV ? 0 : JV),
              y: VV.clientY + (UV ? 0 : xV),
              target_fixed: UV,
              type: eV
            }
          }
          _onClick(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var xV;
            if (Xp(VV.target) || !jv(VV)) return;
            const JV = this._getProperties(VV, eV);
            (null === (xV = this.rageclicks) || void 0 === xV ? void 0 : xV.isRageClick(VV.clientX, VV.clientY, (new Date).getTime())) && eQ(ap(VV), this.instance.config.rageclick) && this._capture(jY(jY({}, JV), {}, {
              type: "rageclick"
            })), this._capture(JV)
          }
          _onMouseMove(VV) {
            !Xp(VV.target) && jv(VV) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(VV, "mousemove"))
            }), 500))
          }
          _capture(VV) {
            if (!Se) return;
            const eV = this._config.disable_capture_url_hashes ? wY(Se.location.href) : Se.location.href,
              xV = this._config.custom_personal_data_properties,
              JV = this._config.mask_personal_data_properties ? [...LQ, ...xV || []] : [],
              YV = hQ(eV, JV, mQ);
            this._buffer = this._buffer || {}, this._buffer[YV] || (this._buffer[YV] = []), this._buffer[YV].push(VV)
          }
          _flush() {
            this._buffer && !Tx(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: FQ,
        webVitalsAutocapture: class {
          constructor(VV) {
            var eV;
            this._instance = VV, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", jY({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((VV, eV) => jY(jY({}, VV), {}, {
                [`$web_vitals_${eV.name}_event`]: jY({}, eV),
                [`$web_vitals_${eV.name}_value`]: eV.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = VV => {
              var eV;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, Mx(null == VV ? void 0 : VV.name) || Mx(null == VV ? void 0 : VV.value)) return void Qv.error("Invalid metric received", VV);
              const xV = "string" == typeof VV.navigationURL ? VV.navigationURL : void 0,
                JV = this._maskedURL(xV);
              if (Px(JV)) return;
              const YV = zx(VV.navigationId) || "string" == typeof VV.navigationId ? `navigation:${VV.navigationId}` : `url:${JV}`;
              if (this._maxAllowedValue && VV.value >= this._maxAllowedValue) return void Qv.error("Ignoring metric with value >= " + this._maxAllowedValue, VV);
              this._buffer.navigationKey !== YV && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), Px(this._buffer.navigationKey) && (this._buffer.navigationKey = YV, this._buffer.url = JV), this._buffer.firstMetricTimestamp = Px(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const UV = null === (eV = this._instance.sessionManager) || void 0 === eV ? void 0 : eV.checkAndGetSessionAndWindowId(!0),
                yV = jY(jY(jY({}, VV), xV ? {
                  navigationURL: JV
                } : {}), {}, {
                  $current_url: JV,
                  timestamp: Date.now()
                });
              if (delete yV.entries, Fx(VV.attribution) && this.attributionMetrics.indexOf(VV.name) > -1) {
                const eV = {};
                for (const xV of vv) {
                  const JV = "url" === xV && "string" == typeof VV.attribution[xV] ? this._maskedURL(VV.attribution[xV]) : VV.attribution[xV];
                  Px(JV) || (eV[xV] = JV)
                }
                yV.attribution = eV
              } else delete yV.attribution;
              Px(UV) || (yV.$session_id = UV.sessionId, yV.$window_id = UV.windowId), this._buffer.metrics.push(yV), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let VV, eV, xV, JV, YV = !1;
              const UV = px.__PosthogExtensions__,
                yV = null == UV ? void 0 : UV.postHogWebVitalsCallbacksByFlavor,
                pV = (null == yV ? void 0 : yV[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && Px(yV) ? null == UV ? void 0 : UV.postHogWebVitalsCallbacks : void 0);
              if (!Px(pV)) {
                const UV = pV.withoutAttribution,
                  yV = this.attributionMetrics;
                YV = !Px(UV), VV = yV.indexOf("LCP") > -1 ? pV.onLCP : (null == UV ? void 0 : UV.onLCP) || pV.onLCP, eV = yV.indexOf("CLS") > -1 ? pV.onCLS : (null == UV ? void 0 : UV.onCLS) || pV.onCLS, xV = yV.indexOf("FCP") > -1 ? pV.onFCP : (null == UV ? void 0 : UV.onFCP) || pV.onFCP, JV = yV.indexOf("INP") > -1 ? pV.onINP : (null == UV ? void 0 : UV.onINP) || pV.onINP
              }
              if (!(VV && eV && xV && JV)) return void Qv.error("web vitals callbacks not loaded - not starting");
              const QV = {
                  reportSoftNavs: this.useSoftNavs
                },
                nV = YV && this.attributionMetrics.indexOf("INP") > -1 ? jY(jY({}, QV), {}, {
                  includeProcessedEventEntries: !1
                }) : QV;
              this.allowedMetrics.indexOf("LCP") > -1 && VV(this._addToBuffer.bind(this), QV), this.allowedMetrics.indexOf("CLS") > -1 && eV(this._addToBuffer.bind(this), QV), this.allowedMetrics.indexOf("FCP") > -1 && xV(this._addToBuffer.bind(this), QV), this.allowedMetrics.indexOf("INP") > -1 && JV(this._addToBuffer.bind(this), nV), this._initialized = !0
            }, this._enabledServerSide = !!(null === (eV = this._instance.persistence) || void 0 === eV ? void 0 : eV.props[cV]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var VV, eV;
            const xV = Fx(this._perfConfig) ? null === (VV = this._perfConfig) || void 0 === VV ? void 0 : VV.web_vitals_allowed_metrics : void 0;
            return Mx(xV) ? (null === (eV = this._instance.persistence) || void 0 === eV ? void 0 : eV.props.$web_vitals_allowed_metrics) || wv : xV
          }
          get flushToCaptureTimeoutMs() {
            return (Fx(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const VV = Fx(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return Wx(VV) ? VV ? wv : [] : qx(VV) ? VV : Zv
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const VV = Fx(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != VV && VV
          }
          get _maxAllowedValue() {
            const VV = Fx(this._perfConfig) && zx(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : nv;
            return VV > 0 && 6e4 >= VV ? nv : VV
          }
          get isEnabled() {
            const VV = null == Vx ? void 0 : Vx.protocol;
            if ("http:" !== VV && "https:" !== VV) return Qv.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const eV = Fx(this._perfConfig) ? this._perfConfig.web_vitals : Wx(this._perfConfig) ? this._perfConfig : void 0;
            return Wx(eV) ? eV : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (Qv.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(VV) {
            if (!VV.ok) return;
            const eV = VV.config;
            if (!("capturePerformance" in eV)) return;
            const xV = Fx(eV.capturePerformance) && !!eV.capturePerformance.web_vitals,
              JV = Fx(eV.capturePerformance) ? eV.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [cV]: xV
            }), this._instance.persistence.register({
              [fV]: JV
            })), this._enabledServerSide = xV, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(VV) {
            var eV;
            const xV = px.__PosthogExtensions__,
              JV = this._callbackFlavor,
              YV = null == xV ? void 0 : xV.postHogWebVitalsCallbacksByFlavor;
            (null == YV ? void 0 : YV[JV]) || "web-vitals" === JV && Px(YV) && (null == xV ? void 0 : xV.postHogWebVitalsCallbacks) ? VV() : null == xV || null === (eV = xV.loadExternalDependency) || void 0 === eV || eV.call(xV, this._instance, JV, (eV => {
              eV ? Qv.error("failed to load script", eV) : VV()
            }))
          }
          _maskedURL(VV) {
            const eV = VV || (null == Se ? void 0 : Se.location.href);
            if (!eV) return void Qv.error("Could not determine current URL");
            const xV = this._instance.config.disable_capture_url_hashes ? wY(eV) : eV,
              JV = this._instance.config.custom_personal_data_properties,
              YV = this._instance.config.mask_personal_data_properties ? [...LQ, ...JV || []] : [];
            return hQ(xV, YV, mQ)
          }
        }
      },
      ir = {
        exceptionObserver: class {
          constructor(VV) {
            var eV;
            this._startCapturing = () => {
              var VV;
              if (!Se || !this.isEnabled || !(null === (VV = px.__PosthogExtensions__) || void 0 === VV ? void 0 : VV.errorWrappingFunctions)) return;
              const eV = px.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                xV = px.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                JV = px.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = eV(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = xV(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = JV(this.captureException.bind(this)))
              } catch (VV) {
                Jv.error("failed to start", VV), this._stopCapturing()
              }
            }, this._instance = VV, this._remoteEnabled = !!(null === (eV = this._instance.persistence) || void 0 === eV ? void 0 : eV.props[CV]), this._rateLimiter = new sx(jY(jY({}, function() {
              let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var eV, xV, JV, YV;
              return {
                refillRate: null !== (eV = null !== (xV = VV.exceptionRateLimiterRefillRate) && void 0 !== xV ? xV : VV.__exceptionRateLimiterRefillRate) && void 0 !== eV ? eV : 1,
                bucketSize: null !== (JV = null !== (YV = VV.exceptionRateLimiterBucketSize) && void 0 !== YV ? YV : VV.__exceptionRateLimiterBucketSize) && void 0 !== JV ? JV : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: Jv
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const VV = this._instance.config.capture_exceptions;
            let eV = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return Fx(VV) ? eV = jY(jY({}, eV), VV) : (Px(VV) ? this._remoteEnabled : VV) && (eV = jY(jY({}, eV), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), eV
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (Jv.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(VV) {
            var eV, xV, JV;
            (null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.errorWrappingFunctions) ? VV(): null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this._instance, "exception-autocapture", (eV => {
              if (eV) return Jv.error("failed to load script", eV);
              VV()
            }))
          }
          _stopCapturing() {
            var VV, eV, xV;
            null === (VV = this._unwrapOnError) || void 0 === VV || VV.call(this), this._unwrapOnError = void 0, null === (eV = this._unwrapUnhandledRejection) || void 0 === eV || eV.call(this), this._unwrapUnhandledRejection = void 0, null === (xV = this._unwrapConsoleError) || void 0 === xV || xV.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(VV) {
            if (!VV.ok) return;
            const eV = VV.config;
            "autocaptureExceptions" in eV && (this._remoteEnabled = !!eV.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [CV]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(VV) {
            try {
              var eV, xV, JV;
              const YV = null !== (eV = null == VV || null === (xV = VV.$exception_list) || void 0 === xV || null === (xV = xV[0]) || void 0 === xV ? void 0 : xV.type) && void 0 !== eV ? eV : "Exception";
              if (this._rateLimiter.consumeRateLimit(YV)) return void Jv.info("Skipping exception capture because of client rate limiting.", {
                exception: YV
              });
              null === (JV = this._instance.exceptions) || void 0 === JV || JV.sendExceptionEvent(VV)
            } catch (VV) {}
          }
        },
        exceptions: class {
          constructor(VV) {
            var eV, xV;
            this._suppressionRules = [], this._errorPropertiesBuilder = new NY([new uY, new YU, new SY, new sY, new xU, new eU, new dY, new JU], function(VV) {
              for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
              return function(eV) {
                let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const YV = [],
                  UV = eV.split("\n"),
                  yV = Math.min(UV.length, JV + 1e3),
                  pV = [];
                for (let wV = JV; yV > wV; wV++) {
                  const eV = UV[wV];
                  if (eV.length > 1024) continue;
                  const JV = cY.test(eV) ? eV.replace(cY, "$1") : eV;
                  if (!JV.match(/\S*Error: /)) {
                    for (const eV of xV) {
                      const xV = eV(JV, VV);
                      if (xV) {
                        YV.push(xV);
                        const VV = lY(YV);
                        if (VV) {
                          for (let eV = pV.length - 1; eV >= 0; eV--) {
                            const xV = pV[eV];
                            if (VV.start >= xV.start + xV.length) break;
                            pV.pop()
                          }
                          pV.push(VV)
                        }
                        break
                      }
                    }
                    if (KY(YV, pV) >= 50) break
                  }
                }
                const QV = [...pV].sort(((VV, eV) => eV.start - VV.start)),
                  nV = QV[QV.length - 1];
                if (nV) {
                  const VV = fY(YV, nV);
                  YV.splice(nV.start - VV, VV);
                  for (const eV of QV) eV.start -= VV
                }
                for (const VV of QV) LY(YV, VV);
                return pV.some((VV => 0 === VV.start && YV.length === VV.length)) && function(VV) {
                    const eV = VV.map((VV => `${VV.function}|${VV.filename}|${VV.lineno}|${VV.colno}|${VV.module}`));
                    let xV = 0;
                    for (let JV = 1; eV.length > JV; JV++) HY(eV, JV, xV) && (xV = JV);
                    VV.push(...VV.splice(0, xV))
                  }(YV),
                  function(VV) {
                    if (!VV.length) return [];
                    const eV = Array.from(VV);
                    return eV.reverse(), eV.slice(0, 50).map((VV => {
                      return jY(jY({}, VV), {}, {
                        filename: VV.filename || (xV = eV, xV[xV.length - 1] || {}).filename,
                        function: VV.function || "?"
                      });
                      var xV
                    }))
                  }(YV)
              }
            }("web:javascript", iY, oY)), this._instance = VV, this._suppressionRules = null !== (eV = null === (xV = this._instance.persistence) || void 0 === xV ? void 0 : xV.get_property("$error_tracking_suppression_rules")) && void 0 !== eV ? eV : [], this._exceptionStepsConfig = nU(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new wU(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = nU(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(VV) {
            var eV, xV, JV;
            if (!VV.ok) return;
            const YV = VV.config;
            if (!("errorTracking" in YV)) return;
            const UV = null !== (eV = null === (xV = YV.errorTracking) || void 0 === xV ? void 0 : xV.suppressionRules) && void 0 !== eV ? eV : [],
              yV = null === (JV = YV.errorTracking) || void 0 === JV ? void 0 : JV.captureExtensionExceptions;
            this._suppressionRules = UV, this._instance.persistence && this._instance.persistence.register({
              [aV]: this._suppressionRules,
              [oV]: yV
            })
          }
          get _captureExtensionExceptions() {
            var VV;
            const eV = !!this._instance.get_property(oV),
              xV = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (VV = null != xV ? xV : eV) && void 0 !== VV && VV
          }
          buildProperties(VV, eV) {
            return this._errorPropertiesBuilder.buildFromUnknown(VV, {
              syntheticException: null == eV ? void 0 : eV.syntheticException,
              mechanism: {
                handled: null == eV ? void 0 : eV.handled
              }
            })
          }
          addExceptionStep(VV, eV) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!Ax(VV) || 0 === VV.trim().length) return void Iv.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: xV,
                droppedKeys: JV
              } = function(VV) {
                if (!VV) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const eV = [];
                return {
                  sanitizedProperties: Object.keys(VV).reduce(((xV, JV) => pU.has(JV) ? (eV.push(JV), xV) : (xV[JV] = VV[JV], xV)), {}),
                  droppedKeys: eV
                }
              }(this._coerceExceptionStepProperties(eV));
              JV.length > 0 && Iv.warn("Ignoring reserved exception step fields", {
                droppedKeys: JV
              }), this._exceptionStepsBuffer.add(jY({
                [UU]: VV,
                [yU]: (new Date).toISOString()
              }, xV))
            } catch (VV) {
              Iv.error("Failed to add exception step. Ignoring breadcrumb.", VV)
            }
          }
          sendExceptionEvent(VV) {
            try {
              const eV = VV.$exception_list;
              if (this._isExceptionList(eV)) {
                if (this._matchesSuppressionRule(eV)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void Iv.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(eV)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void Iv.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(eV)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void Iv.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(eV)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void Iv.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const xV = this._exceptionStepsConfig.enabled && Mx(VV.$exception_steps) ? this._addBufferedExceptionSteps(VV) : VV,
                JV = function() {
                  if ("u" > typeof process) {
                    var VV;
                    const eV = null === (VV = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === VV ? void 0 : VV.trim();
                    if (eV) return eV
                  }
                  const eV = globalThis._posthogReleaseId;
                  return "string" == typeof eV && eV.length > 0 ? eV : void 0
                }();
              JV && (xV.$release_id = JV);
              try {
                const VV = this._instance.capture("$exception", xV, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return VV && this._exceptionStepsBuffer.clear(), VV
              } catch (VV) {
                return Sv(VV) || Iv.error("Failed to capture exception event. Dropping this exception.", VV), void this._exceptionStepsBuffer.clear()
              }
            } catch (VV) {
              return void(Sv(VV) || Iv.error("Failed to process exception event. Ignoring this exception.", VV))
            }
          }
          _addBufferedExceptionSteps(VV) {
            try {
              const eV = this._exceptionStepsBuffer.getAttachable();
              return 0 === eV.length ? VV : jY(jY({}, VV), {}, {
                $exception_steps: eV
              })
            } catch (YV) {
              return Iv.error("Failed to read buffered exception steps. Capturing exception without steps.", YV), VV
            }
          }
          _addDroppedExceptionStep(VV) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [UU]: VV,
              [yU]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(VV) {
            return Fx(VV) ? jY({}, VV) : {}
          }
          _getExceptionStepsConfig() {
            var VV, eV;
            return null !== (VV = null === (eV = this._instance.config.error_tracking) || void 0 === eV ? void 0 : eV.exception_steps) && void 0 !== VV ? VV : {}
          }
          _matchesSuppressionRule(VV) {
            if (0 === VV.length) return !1;
            try {
              const eV = VV.reduce(((VV, eV) => {
                let {
                  type: xV,
                  value: JV
                } = eV;
                return Ax(xV) && xV.length > 0 && VV.$exception_types.push(xV), Ax(JV) && JV.length > 0 && VV.$exception_values.push(JV), VV
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((VV => {
                const xV = VV.values.map((VV => {
                  const xV = yZ[VV.operator],
                    JV = eV[VV.key];
                  if (!xV || !JV) return !1;
                  const YV = qx(VV.value) ? VV.value : [VV.value];
                  return YV.length > 0 && xV(YV, JV)
                }));
                return "OR" === VV.type ? xV.some(Boolean) : xV.every(Boolean)
              }))
            } catch (VV) {
              return Iv.warn("Failed to evaluate suppression rules. Capturing the exception.", VV), !1
            }
          }
          _isExtensionException(VV) {
            const eV = VV.flatMap((VV => {
                var eV, xV;
                return null !== (eV = null === (xV = VV.stacktrace) || void 0 === xV ? void 0 : xV.frames) && void 0 !== eV ? eV : []
              })),
              xV = eV.filter((VV => {
                let {
                  filename: eV
                } = VV;
                return !!eV && Vr.some((VV => eV.startsWith(VV)))
              }));
            return 0 !== xV.length && (!xV.every((VV => {
              let {
                filename: eV
              } = VV;
              return !!eV && eV.startsWith(dv)
            })) || VV.some((VV => {
              let {
                type: eV,
                value: xV
              } = VV;
              return "NoResponse" === eV || Ax(xV) && Ov.some((VV => {
                let {
                  value: eV,
                  exact: JV
                } = VV;
                return JV ? xV === eV : xV.includes(eV)
              }))
            })) && !eV.some((VV => {
              let {
                in_app: eV,
                filename: xV
              } = VV;
              return eV && !(null == xV ? void 0 : xV.startsWith(dv))
            })))
          }
          _isInjectedBrowserScriptException(VV) {
            return VV.some((VV => {
              let {
                value: eV
              } = VV;
              return Ax(eV) && er.some((VV => eV.includes(VV)))
            }))
          }
          _isPostHogException(VV) {
            if (VV.length > 0) {
              var eV, xV, JV, YV;
              const UV = null !== (eV = null === (xV = VV[0].stacktrace) || void 0 === xV ? void 0 : xV.frames) && void 0 !== eV ? eV : [],
                yV = UV[UV.length - 1];
              return null !== (JV = null == yV || null === (YV = yV.filename) || void 0 === YV ? void 0 : YV.includes("posthog.com/static")) && void 0 !== JV && JV
            }
            return !1
          }
          _isExceptionList(VV) {
            return !Mx(VV) && qx(VV)
          }
        }
      },
      Cr = jY({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(VV) {
            this._productTourManager = null, this._cachedTours = null, this._instance = VV
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(VV) {
            if (!VV.ok) return;
            const eV = VV.config;
            if ("productTours" in eV) {
              var xV, JV;
              if (this._persistence && this._persistence.register({
                  [lV]: !!eV.productTours
                }), !tv(this._instance)) return !this._productTourManager && Mx(null === (xV = this._persistence) || void 0 === xV ? void 0 : xV.props.ph_product_tours) || qv.info("product tours disabled; stopping and clearing cached tours"), null === (JV = this._productTourManager) || void 0 === JV || JV.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && tv(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(VV) {
            var eV, xV, JV;
            (null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.generateProductTours) ? VV(): null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this._instance, "product-tours", (eV => {
              eV ? qv.error("Could not load product tours script", eV) : VV()
            }))
          }
          _startProductTours() {
            var VV;
            !this._productTourManager && (null === (VV = px.__PosthogExtensions__) || void 0 === VV ? void 0 : VV.generateProductTours) && (this._productTourManager = px.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (qx(this._cachedTours) && !eV) return void VV(this._cachedTours, {
              isLoaded: !0
            });
            const xV = this._persistence;
            if (xV) {
              const JV = xV.props[Ze];
              if (qx(JV) && !eV) return this._cachedTours = JV, void VV(JV, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: eV => {
                if (!tv(this._instance)) return void VV([], {
                  isLoaded: !0
                });
                const JV = eV.statusCode;
                if (200 !== JV || !eV.json) {
                  const xV = `Product Tours API could not be loaded, status: ${JV}`;
                  return 0 === JV ? eV.error || qv.warn(xV) : qv.error(xV), void VV([], {
                    isLoaded: !1,
                    error: xV
                  })
                }
                const YV = qx(eV.json.product_tours) ? eV.json.product_tours : [];
                this._cachedTours = YV, xV && xV.register({
                  [Ze]: YV
                }), VV(YV, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(VV) {
            Mx(this._productTourManager) ? VV([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(VV)
          }
          showProductTour(VV) {
            var eV;
            null === (eV = this._productTourManager) || void 0 === eV || eV.showTourById(VV)
          }
          previewTour(VV) {
            this._productTourManager ? this._productTourManager.previewTour(VV) : this._loadScript((() => {
              var eV;
              this._startProductTours(), null === (eV = this._productTourManager) || void 0 === eV || eV.previewTour(VV)
            }))
          }
          dismissProductTour() {
            var VV;
            null === (VV = this._productTourManager) || void 0 === VV || VV.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var VV;
            null === (VV = this._productTourManager) || void 0 === VV || VV.nextStep()
          }
          previousStep() {
            var VV;
            null === (VV = this._productTourManager) || void 0 === VV || VV.previousStep()
          }
          clearCache() {
            var VV;
            this._cachedTours = null, null === (VV = this._persistence) || void 0 === VV || VV.unregister("ph_product_tours")
          }
          resetTour(VV) {
            var eV;
            null === (eV = this._productTourManager) || void 0 === eV || eV.resetTour(VV)
          }
          resetAllTours() {
            var VV;
            null === (VV = this._productTourManager) || void 0 === VV || VV.resetAllTours()
          }
          cancelPendingTour(VV) {
            var eV;
            null === (eV = this._productTourManager) || void 0 === eV || eV.cancelPendingTour(VV)
          }
        }
      }, Rr),
      ar = {
        siteApps: class {
          constructor(VV) {
            this._instance = VV, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(VV, eV) {
            if (!eV) return;
            const xV = this.globalsForEvent(eV);
            this._bufferedInvocations.push(xV), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var VV;
            return null === (VV = px._POSTHOG_REMOTE_CONFIG) || void 0 === VV || null === (VV = VV[this._instance.config.token]) || void 0 === VV ? void 0 : VV.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const VV = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                VV(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(VV) {
            var eV, xV, JV, YV, UV, yV, pV;
            if (!VV) throw new Error("Event payload is required");
            const QV = {},
              nV = this._instance.get_property("$groups") || [],
              wV = this._instance.get_property("$stored_group_properties") || {};
            for (const [rV, kV] of Object.entries(wV)) QV[rV] = {
              id: nV[rV],
              type: rV,
              properties: kV
            };
            const {
              $set_once: ZV,
              $set: vV
            } = VV;
            return {
              event: jY(jY({}, NU(VV, Fv)), {}, {
                properties: jY(jY(jY({}, VV.properties), vV ? {
                  $set: jY(jY({}, null !== (eV = null === (xV = VV.properties) || void 0 === xV ? void 0 : xV.$set) && void 0 !== eV ? eV : {}), vV)
                } : {}), ZV ? {
                  $set_once: jY(jY({}, null !== (JV = null === (YV = VV.properties) || void 0 === YV ? void 0 : YV.$set_once) && void 0 !== JV ? JV : {}), ZV)
                } : {}),
                elements_chain: null !== (UV = null === (yV = VV.properties) || void 0 === yV ? void 0 : yV.$elements_chain) && void 0 !== UV ? UV : "",
                distinct_id: null === (pV = VV.properties) || void 0 === pV ? void 0 : pV.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: QV
            }
          }
          _prepareElementForSiteApp(VV) {
            var eV;
            const xV = null === (eV = VV.tagName) || void 0 === eV ? void 0 : eV.toLowerCase();
            return "style" === xV && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(VV) || (Tv.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === xV && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(VV) || (Tv.error("prepare_external_dependency_script returned null"), null) : VV
          }
          _patchSiteAppElementInsertionMethods() {
            var VV, eV, xV, JV, YV, UV, yV, pV;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const QV = null == Oe ? void 0 : Oe.defaultView,
              nV = null == QV || null === (VV = QV.Node) || void 0 === VV ? void 0 : VV.prototype;
            if (!QV || !nV) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const wV = [],
              ZV = this,
              vV = new WeakSet,
              rV = (VV, eV, xV) => {
                if (!(null == VV ? void 0 : VV[eV])) return;
                const JV = VV[eV];
                VV[eV] = xV(JV), wV.push((() => {
                  VV[eV] = JV
                }))
              },
              kV = VV => {
                if (vV.has(VV)) return VV;
                const eV = ZV._prepareElementForSiteApp(VV);
                return eV && vV.add(eV), eV
              },
              bV = VV => VV.map((VV => "string" == typeof VV ? VV : kV(VV))).filter((VV => !Xx(VV)));
            return rV(nV, "appendChild", (VV => function(eV) {
              const xV = kV(eV);
              return xV ? VV.call(this, xV) : eV
            })), rV(nV, "insertBefore", (VV => function(eV, xV) {
              const JV = kV(eV);
              return JV ? VV.call(this, JV, xV) : eV
            })), rV(nV, "replaceChild", (VV => function(eV, xV) {
              const JV = kV(eV);
              return JV ? VV.call(this, JV, xV) : xV
            })), [null === (eV = QV.Element) || void 0 === eV ? void 0 : eV.prototype, null === (xV = QV.Document) || void 0 === xV ? void 0 : xV.prototype, null === (JV = QV.DocumentFragment) || void 0 === JV ? void 0 : JV.prototype].forEach((VV => {
              rV(VV, "append", (VV => function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                return VV.apply(this, bV(xV))
              })), rV(VV, "prepend", (VV => function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                return VV.apply(this, bV(xV))
              }))
            })), [null === (YV = QV.Element) || void 0 === YV ? void 0 : YV.prototype, null === (UV = QV.CharacterData) || void 0 === UV ? void 0 : UV.prototype, null === (yV = QV.DocumentType) || void 0 === yV ? void 0 : yV.prototype].forEach((VV => {
              rV(VV, "before", (VV => function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                return VV.apply(this, bV(xV))
              })), rV(VV, "after", (VV => function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                return VV.apply(this, bV(xV))
              })), rV(VV, "replaceWith", (VV => function() {
                for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
                const YV = bV(xV);
                return xV.length && !YV.length ? void 0 : VV.apply(this, YV)
              }))
            })), rV(null === (pV = QV.Element) || void 0 === pV ? void 0 : pV.prototype, "insertAdjacentElement", (VV => function(eV, xV) {
              const JV = kV(xV);
              return JV ? VV.call(this, eV, JV) : null
            })), this._restoreSiteAppElementPatches = () => {
              wV.forEach((VV => VV())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let VV = !1;
            return () => {
              var eV;
              VV || (VV = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (eV = this._restoreSiteAppElementPatches) || void 0 === eV || eV.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(VV) {
            let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const xV = this._patchSiteAppElementInsertionMethods();
            try {
              const JV = VV(xV);
              return eV && xV(), JV
            } catch (VV) {
              throw xV(), VV
            }
          }
          setupSiteApp(VV) {
            const eV = this.apps[VV.id],
              xV = () => {
                var xV;
                !eV.errored && this._bufferedInvocations.length && (Tv.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${VV.id}`), this._bufferedInvocations.forEach((VV => this._runWithPreparedSiteAppElements((() => {
                  var xV;
                  return null === (xV = eV.processEvent) || void 0 === xV ? void 0 : xV.call(eV, VV)
                })))), eV.processedBuffer = !0), Object.values(this.apps).every((VV => VV.processedBuffer || VV.errored)) && (null === (xV = this._stopBuffering) || void 0 === xV || xV.call(this))
              };
            let JV = !1;
            const YV = YV => {
              eV.errored = !YV, eV.loaded = !0, Tv.info(`Site app with id ${VV.id} ${YV?"loaded":"errored"}`), JV && xV()
            };
            try {
              const {
                processEvent: xV
              } = this._runWithPreparedSiteAppElements((eV => VV.init({
                posthog: this._instance,
                callback(VV) {
                  eV(), YV(VV)
                }
              })), !1);
              xV && (eV.processEvent = xV), JV = !0
            } catch (eV) {
              Tv.error(Pv + VV.id, eV), YV(!1)
            }
            if (JV && eV.loaded) try {
              xV()
            } catch (xV) {
              Tv.error(`Error while processing buffered events PostHog app with config id ${VV.id}`, xV), eV.errored = !0
            }
          }
          _setupSiteApps() {
            const VV = this.siteAppLoaders || [];
            for (const eV of VV) this.apps[eV.id] = {
              id: eV.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const eV of VV) this.setupSiteApp(eV)
          }
          _onCapturedEvent(VV) {
            if (0 === Object.keys(this.apps).length) return;
            const eV = this.globalsForEvent(VV);
            for (const xV of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var VV;
                return null === (VV = xV.processEvent) || void 0 === VV ? void 0 : VV.call(xV, eV)
              }))
            } catch (eV) {
              Tv.error(`Error while processing event ${VV.event} for site app ${xV.id}`, eV)
            }
          }
          onRemoteConfig(VV) {
            var eV, xV, JV;
            if (null === (eV = this.siteAppLoaders) || void 0 === eV ? void 0 : eV.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (VV => this._onCapturedEvent(VV)))) : void Tv.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (xV = this._stopBuffering) || void 0 === xV || xV.call(this), !VV.ok) return;
            const YV = VV.config;
            if (null === (JV = YV.siteApps) || void 0 === JV ? void 0 : JV.length)
              if (this.isEnabled)
                for (const {
                    id: pV,
                    url: QV
                  }
                  of YV.siteApps) {
                  var UV, yV;
                  px[`__$$ph_site_app_${pV}`] = this._instance, null === (UV = px.__PosthogExtensions__) || void 0 === UV || null === (yV = UV.loadSiteApp) || void 0 === yV || yV.call(UV, this._instance, QV, (VV => {
                    if (VV) return Tv.error(Pv + pV, VV)
                  }))
                } else Tv.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      or = {
        tracingHeaders: class {
          constructor(VV) {
            this._instance = VV, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const VV = this._syncHostnamesForPatch();
              var eV, xV;
              VV ? (Px(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (eV = px.__PosthogExtensions__) || void 0 === eV || null === (eV = eV.tracingHeadersPatchFns) || void 0 === eV ? void 0 : eV._patchXHR(VV, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), Px(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (xV = xV.tracingHeadersPatchFns) || void 0 === xV ? void 0 : xV._patchFetch(VV, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(VV) {
            var eV, xV, JV;
            (null === (eV = px.__PosthogExtensions__) || void 0 === eV ? void 0 : eV.tracingHeadersPatchFns) ? VV(): null === (xV = px.__PosthogExtensions__) || void 0 === xV || null === (JV = xV.loadExternalDependency) || void 0 === JV || JV.call(xV, this._instance, "tracing-headers", (eV => {
              if (eV) return pv.error("failed to load script", eV);
              VV()
            }))
          }
          _getConfiguredHostnames() {
            var VV, eV;
            return null !== (VV = null !== (eV = this._instance.config.tracing_headers) && void 0 !== eV ? eV : this._instance.config.addTracingHeaders) && void 0 !== VV ? VV : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const VV = this._getConfiguredHostnames();
            return qx(VV) ? (qx(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...VV) : this._hostnamesForPatch = [...VV], VV.length > 0 ? this._hostnamesForPatch : void 0) : (qx(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = VV || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var VV, eV;
            null === (VV = this._restoreXHRPatch) || void 0 === VV || VV.call(this), null === (eV = this._restoreFetchPatch) || void 0 === eV || eV.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      cr = jY({
        surveys: class extends Mv {
          constructor(VV) {
            var eV;
            super(new Dv(VV), (eV = VV, {
              get projectToken() {
                return eV.config.token
              },
              kv: new gv(eV)
            })), this._instance = VV
          }
          _sendSurveysRequest(VV, eV) {
            const xV = eV.query ? Xw(VV, eV.query) : VV;
            return new Promise((VV => {
              var JV;
              this._instance._send_request({
                method: eV.method,
                url: this._instance.requestRouter.endpointFor(null !== (JV = eV.target) && void 0 !== JV ? JV : "api", xV),
                data: eV.body,
                headers: eV.headers,
                timeout: eV.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: eV.transport,
                compression: eV.compression,
                timestampMode: eV.sentAt,
                callback: VV
              })
            }))
          }
        }
      }, Rr),
      hr = {
        toolbar: class {
          constructor(VV) {
            this.instance = VV
          }
          _setToolbarState(VV) {
            px.ph_toolbar_state = VV
          }
          _getToolbarState() {
            var VV;
            return null !== (VV = px.ph_toolbar_state) && void 0 !== VV ? VV : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var JV, YV;
            if (sy(this.instance.config)) return !1;
            if (!Se || !Oe) return !1;
            VV = null !== (JV = VV) && void 0 !== JV ? JV : Se.location, xV = null !== (YV = xV) && void 0 !== YV ? YV : Se.history;
            try {
              if (!eV) {
                try {
                  Se.localStorage.setItem("test", "test"), Se.localStorage.removeItem("test")
                } catch (VV) {
                  return !1
                }
                eV = null == Se ? void 0 : Se.localStorage
              }
              const JV = iv || lQ(VV.hash, "__posthog") || lQ(VV.hash, "state");
              let YV;
              const UV = JV ? ZY((() => JSON.parse(atob(decodeURIComponent(JV))))) || ZY((() => JSON.parse(decodeURIComponent(JV)))) : null;
              return UV && "ph_authorize" === UV.action ? (YV = UV, YV.source = "url", YV && Object.keys(YV).length > 0 && (UV.desiredHash ? VV.hash = UV.desiredHash : xV ? xV.replaceState(xV.state, "", VV.pathname + VV.search) : VV.hash = "")) : (YV = JSON.parse(eV.getItem(Cv) || "{}"), YV.source = "localstorage", delete YV.userIntent), !(!YV.token || this.instance.config.token !== YV.token || (this.loadToolbar(YV), 0))
            } catch (VV) {
              return !1
            }
          }
          _callLoadToolbar(VV) {
            const eV = px.ph_load_toolbar || px.ph_load_editor;
            !Mx(eV) && tx(eV) ? eV(VV, this.instance) : av.warn("No toolbar load function found")
          }
          loadToolbar(VV) {
            const eV = !!(null == Oe ? void 0 : Oe.getElementById("__POSTHOG_TOOLBAR__"));
            if (!Se || eV) return !1;
            const xV = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              JV = jY(jY({
                token: this.instance.config.token
              }, VV), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, xV ? {
                instrument: !1
              } : {});
            if (Se.localStorage.setItem(Cv, JSON.stringify(jY(jY({}, JV), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(JV);
            else if (0 === this._getToolbarState()) {
              var YV, UV;
              this._setToolbarState(1), null === (YV = px.__PosthogExtensions__) || void 0 === YV || null === (UV = YV.loadExternalDependency) || void 0 === UV || UV.call(YV, this.instance, "toolbar", (VV => {
                if (VV) return av.error("[Toolbar] Failed to load", VV), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(JV)
              })), uy(Se, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(JV)
              }))
            }
            return !0
          }
          _loadEditor(VV) {
            return this.loadToolbar(VV)
          }
          maybeLoadEditor() {
            let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(VV, eV, xV)
          }
        }
      },
      lr = jY({
        experiments: class VV {
          get _config() {
            return this._instance.config
          }
          constructor(eV) {
            var xV = this;
            this._instance = eV, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              xV.getWebExperiments((eV => {
                VV._logInfo("retrieved web experiments from the server"), xV._flagToExperiments = new Map, eV.forEach((eV => {
                  if (eV.feature_flag_key) {
                    var JV;
                    xV._flagToExperiments && (VV._logInfo("setting flag key ", eV.feature_flag_key, " to web experiment ", eV), null === (JV = xV._flagToExperiments) || void 0 === JV || JV.set(eV.feature_flag_key, eV));
                    const YV = xV._instance.getFeatureFlag(eV.feature_flag_key);
                    Ax(YV) && eV.variants[YV] && xV._applyTransforms(eV.name, YV, eV.variants[YV].transforms)
                  } else if (eV.variants)
                    for (const YV in eV.variants) {
                      const JV = eV.variants[YV];
                      VV._matchesTestVariant(JV, xV._instance) && xV._applyTransforms(eV.name, YV, JV.transforms)
                    }
                }))
              }), eV)
            }, this._instance.onFeatureFlags((VV => {
              this.onFeatureFlags(VV)
            }))
          }
          initialize() {}
          onFeatureFlags(eV) {
            if (this._is_bot()) VV._logInfo(xr);
            else if (!this._config.disable_web_experiments) {
              if (Mx(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              VV._logInfo("applying feature flags", eV), eV.forEach((VV => {
                var eV;
                if (this._flagToExperiments && (null === (eV = this._flagToExperiments) || void 0 === eV ? void 0 : eV.has(VV))) {
                  var xV;
                  const eV = this._instance.getFeatureFlag(VV),
                    JV = null === (xV = this._flagToExperiments) || void 0 === xV ? void 0 : xV.get(VV);
                  eV && (null == JV ? void 0 : JV.variants[eV]) && this._applyTransforms(JV.name, eV, JV.variants[eV].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const eV = VV.getWindowLocation();
            if (null == eV ? void 0 : eV.search) {
              const xV = cQ(null == eV ? void 0 : eV.search, "__experiment_id"),
                JV = cQ(null == eV ? void 0 : eV.search, "__experiment_variant");
              xV && JV && (VV._logInfo(`previewing web experiments ${xV} && ${JV}`), this.getWebExperiments((VV => {
                this._showPreviewWebExperiment(parseInt(xV), JV, VV)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(VV, eV, xV) {
            if (this._config.disable_web_experiments && !xV) return VV([]);
            const JV = this._instance.get_property("$web_experiments");
            if (JV && !eV) return VV(JV);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: eV => VV(200 === eV.statusCode && eV.json && eV.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(eV, xV, JV) {
            const YV = JV.filter((VV => VV.id === eV));
            YV && YV.length > 0 && (VV._logInfo(`Previewing web experiment [${YV[0].name}] with variant [${xV}]`), this._applyTransforms(YV[0].name, xV, YV[0].variants[xV].transforms))
          }
          static _matchesTestVariant(eV, xV) {
            return !Mx(eV.conditions) && VV._matchUrlConditions(eV, xV) && VV._matchUTMConditions(eV)
          }
          static _matchUrlConditions(eV, xV) {
            var JV;
            if (Mx(eV.conditions) || Mx(null === (JV = eV.conditions) || void 0 === JV ? void 0 : JV.url)) return !0;
            const YV = VV.getWindowLocation();
            if (YV) {
              var UV, yV, pV;
              const VV = Np(xV, YV.href);
              return !(null === (UV = eV.conditions) || void 0 === UV ? void 0 : UV.url) || Jr[null !== (yV = null === (pV = eV.conditions) || void 0 === pV ? void 0 : pV.urlMatchType) && void 0 !== yV ? yV : "icontains"](eV.conditions.url, VV)
            }
            return !1
          }
          static getWindowLocation() {
            return null == Se ? void 0 : Se.location
          }
          static _matchUTMConditions(VV) {
            var eV;
            if (Mx(VV.conditions) || Mx(null === (eV = VV.conditions) || void 0 === eV ? void 0 : eV.utm)) return !0;
            const xV = HQ();
            if (xV.utm_source) {
              var JV, YV, UV, yV, pV, QV, nV, wV;
              const eV = !(null === (JV = VV.conditions) || void 0 === JV || null === (JV = JV.utm) || void 0 === JV ? void 0 : JV.utm_campaign) || (null === (YV = VV.conditions) || void 0 === YV || null === (YV = YV.utm) || void 0 === YV ? void 0 : YV.utm_campaign) == xV.utm_campaign,
                ZV = !(null === (UV = VV.conditions) || void 0 === UV || null === (UV = UV.utm) || void 0 === UV ? void 0 : UV.utm_source) || (null === (yV = VV.conditions) || void 0 === yV || null === (yV = yV.utm) || void 0 === yV ? void 0 : yV.utm_source) == xV.utm_source,
                vV = !(null === (pV = VV.conditions) || void 0 === pV || null === (pV = pV.utm) || void 0 === pV ? void 0 : pV.utm_medium) || (null === (QV = VV.conditions) || void 0 === QV || null === (QV = QV.utm) || void 0 === QV ? void 0 : QV.utm_medium) == xV.utm_medium,
                rV = !(null === (nV = VV.conditions) || void 0 === nV || null === (nV = nV.utm) || void 0 === nV ? void 0 : nV.utm_term) || (null === (wV = VV.conditions) || void 0 === wV || null === (wV = wV.utm) || void 0 === wV ? void 0 : wV.utm_term) == xV.utm_term;
              return eV && vV && rV && ZV
            }
            return !1
          }
          static _logInfo(VV) {
            for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
            Cy.info(`[WebExperiments] ${VV}`, xV)
          }
          _applyTransforms(eV, xV, JV) {
            this._is_bot() ? VV._logInfo(xr) : "control" !== xV ? JV.forEach((JV => {
              if (JV.selector) {
                var YV;
                VV._logInfo(`applying transform of variant ${xV} for experiment ${eV} `, JV);
                const UV = null === (YV = document) || void 0 === YV ? void 0 : YV.querySelectorAll(JV.selector);
                null == UV || UV.forEach((VV => {
                  const eV = VV;
                  JV.html && (eV.innerHTML = JV.html), JV.css && eV.setAttribute("style", JV.css)
                }))
              }
            })) : VV._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return de && this._instance ? VZ(de, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, Rr),
      Lr = {
        conversations: class {
          constructor(VV) {
            this._instance = VV, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(VV) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = VV.ok, !VV.ok) return;
            const eV = VV.config.conversations;
            Mx(eV) || (Wx(eV) ? this._isConversationsEnabled = eV : (this._isConversationsEnabled = eV.enabled, this._remoteConfig = eV), this.loadIfEnabled())
          }
          reset() {
            var VV;
            null === (VV = this._conversationsManager) || void 0 === VV || VV.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (sy(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const VV = null == px ? void 0 : px.__PosthogExtensions__;
            if (VV && !Px(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const eV = VV.initConversations;
                  if (eV) return this._completeInitialization(eV), void(this._isInitializing = !1);
                  const xV = VV.loadExternalDependency;
                  if (!xV) return void this._handleLoadError(he);
                  xV(this._instance, "conversations", (eV => {
                    eV || !VV.initConversations ? this._handleLoadError("Could not load conversations script", eV) : this._completeInitialization(VV.initConversations), this._isInitializing = !1
                  }))
                } catch (VV) {
                  this._handleLoadError("Error initializing conversations", VV), this._isInitializing = !1
                }
              } else Yr.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(VV) {
            if (this._remoteConfig) try {
              this._conversationsManager = VV(this._remoteConfig, this._instance), this._loadFailed = !1, Yr.info("Conversations loaded successfully")
            } catch (VV) {
              this._handleLoadError("Error completing conversations initialization", VV)
            } else Yr.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(VV, eV) {
            Yr.error(VV, eV), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : Yr.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !Xx(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : sy(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : Px(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? Mx(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == px ? void 0 : px.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var VV, eV;
            return null !== (VV = null === (eV = this._conversationsManager) || void 0 === eV ? void 0 : eV.isVisible()) && void 0 !== VV && VV
          }
          sendMessage(VV, eV, xV) {
            var JV = this;
            return fx((function*() {
              return JV._conversationsManager ? JV._conversationsManager.sendMessage(VV, eV, xV) : (Yr.warn(Ur), null)
            }))()
          }
          getMessages(VV, eV) {
            var xV = this;
            return fx((function*() {
              return xV._conversationsManager ? xV._conversationsManager.getMessages(VV, eV) : (Yr.warn(Ur), null)
            }))()
          }
          markAsRead(VV) {
            var eV = this;
            return fx((function*() {
              return eV._conversationsManager ? eV._conversationsManager.markAsRead(VV) : (Yr.warn(Ur), null)
            }))()
          }
          getTickets(VV) {
            var eV = this;
            return fx((function*() {
              return eV._conversationsManager ? eV._conversationsManager.getTickets(VV) : (Yr.warn(Ur), null)
            }))()
          }
          requestRestoreLink(VV) {
            var eV = this;
            return fx((function*() {
              return eV._conversationsManager ? eV._conversationsManager.requestRestoreLink(VV) : (Yr.warn(Ur), null)
            }))()
          }
          restoreFromToken(VV) {
            var eV = this;
            return fx((function*() {
              return eV._conversationsManager ? eV._conversationsManager.restoreFromToken(VV) : (Yr.warn(Ur), null)
            }))()
          }
          restoreFromUrlToken() {
            var VV = this;
            return fx((function*() {
              return VV._conversationsManager ? VV._conversationsManager.restoreFromUrlToken() : (Yr.warn(Ur), null)
            }))()
          }
          getCurrentTicketId() {
            var VV, eV;
            return null !== (VV = null === (eV = this._conversationsManager) || void 0 === eV ? void 0 : eV.getCurrentTicketId()) && void 0 !== VV ? VV : null
          }
          getWidgetSessionId() {
            var VV, eV;
            return null !== (VV = null === (eV = this._conversationsManager) || void 0 === eV ? void 0 : eV.getWidgetSessionId()) && void 0 !== VV ? VV : null
          }
          _onIdentityChanged() {
            var VV;
            null === (VV = this._conversationsManager) || void 0 === VV || VV.setIdentity()
          }
          _onIdentityCleared() {
            var VV;
            null === (VV = this._conversationsManager) || void 0 === VV || VV.clearIdentity()
          }
        }
      },
      fr = {
        logs: class extends rr {
          constructor(VV) {
            super({
              get() {
                var eV;
                return null == VV || null === (eV = VV.config) || void 0 === eV ? void 0 : eV.logs
              },
              captureHintKey: LV,
              get remoteConfigWillArrive() {
                var eV, xV;
                return !(null === (eV = VV._shouldDisableFlags) || void 0 === eV ? void 0 : eV.call(VV)) || !!(null === (xV = px._POSTHOG_REMOTE_CONFIG) || void 0 === xV || null === (xV = xV[VV.config.token]) || void 0 === xV ? void 0 : xV.config)
              }
            }, (() => function(VV) {
              var eV;
              const xV = {};
              if (xV.distinctId = VV.get_distinct_id(), VV.sessionManager) {
                const {
                  sessionId: eV,
                  windowId: JV,
                  sessionStartTimestamp: YV,
                  lastActivityTimestamp: UV
                } = VV.sessionManager.checkAndGetSessionAndWindowId(!0);
                xV.sessionId = eV, xV.windowId = JV, Mx(YV) || (xV.sessionStartTimestamp = YV), Mx(UV) || (xV.lastActivityTimestamp = UV)
              }
              if ((null == px || null === (eV = px.location) || void 0 === eV ? void 0 : eV.href) && (xV.currentUrl = VV.config.disable_capture_url_hashes ? wY(px.location.href) : px.location.href), VV.featureFlags) {
                const eV = VV.featureFlags.getFlags();
                eV && eV.length > 0 && (xV.activeFeatureFlags = eV)
              }
              return xV
            }(VV))), this._instance = VV, this.name = PZ, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const VV = ay("[logs]"),
              eV = null == px ? void 0 : px.__PosthogExtensions__;
            if (!eV) return void VV.error("PostHog Extensions not found.");
            const xV = eV.loadExternalDependency;
            if (xV) return VV => {
              xV(this._instance, "logs", (xV => {
                const JV = eV.logs;
                VV(xV, (null == JV ? void 0 : JV.initializeLogs) ? {
                  initialize: VV => JV.initializeLogs(VV),
                  replay(VV, eV) {
                    var xV;
                    return null === (xV = JV.replayConsoleBuffer) || void 0 === xV ? void 0 : xV.call(JV, VV, eV)
                  }
                } : void 0)
              }))
            };
            VV.error(he)
          }
        }
      },
      mr = {
        metrics: class {
          constructor(VV) {
            this._instance = VV, this._logger = ay("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var VV;
            if (this._disposed) return;
            const eV = !!(null === (VV = this._instance.config.metrics) || void 0 === VV ? void 0 : VV.network);
            eV && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (VV => {
              let eV = !0;
              const xV = () => eV ? (VV => {
                  var eV;
                  const xV = null === (eV = VV.config.metrics) || void 0 === eV ? void 0 : eV.network;
                  return !0 === xV ? {} : xV || void 0
                })(VV) : void 0,
                JV = Fr(VV, xV),
                YV = Tr(VV, xV);
              return () => {
                eV = !1, JV(), YV()
              }
            })(this._instance) : !eV && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var VV;
            const eV = null === (VV = this._instance) || void 0 === VV || null === (VV = VV.config) || void 0 === VV ? void 0 : VV.metrics;
            var xV;
            return this._core && this._resolvedFrom === eV || (null === (xV = this._core) || void 0 === xV || xV.reset(), this._resolvedFrom = eV, this._core = new Dy(this._createHost(), function(VV) {
              var eV, xV, JV, YV, UV;
              const yV = null == VV ? void 0 : VV.resourceAttributes;
              return {
                serviceName: null !== (eV = null == yV ? void 0 : yV["service.name"]) && void 0 !== eV ? eV : null == VV ? void 0 : VV.serviceName,
                serviceVersion: null !== (xV = null == yV ? void 0 : yV["service.version"]) && void 0 !== xV ? xV : null == VV ? void 0 : VV.serviceVersion,
                environment: null !== (JV = null == yV ? void 0 : yV["deployment.environment"]) && void 0 !== JV ? JV : null == VV ? void 0 : VV.environment,
                resourceAttributes: yV,
                beforeSend: null == VV ? void 0 : VV.beforeSend,
                flushIntervalMs: null !== (YV = null == VV ? void 0 : VV.flushIntervalMs) && void 0 !== YV ? YV : 1e4,
                maxSeriesPerFlush: null !== (UV = null == VV ? void 0 : VV.maxSeriesPerFlush) && void 0 !== UV ? UV : 1e3
              }
            }(eV), this._logger)), this._core
          }
          count(VV) {
            let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              xV = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(VV, eV, xV)
          }
          gauge(VV, eV, xV) {
            this._getCore().gauge(VV, eV, xV)
          }
          histogram(VV, eV, xV) {
            this._getCore().histogram(VV, eV, xV)
          }
          flush(VV) {
            if (!this._core) return Promise.resolve();
            if (VV) {
              const eV = this._core.drainWindow();
              return eV && this._sendMetricsBatch(eV, VV), Promise.resolve()
            }
            return this._core.flush().catch((VV => this._logger.error("PostHog metrics flush failed:", VV)))
          }
          reset() {
            var VV;
            null === (VV = this._core) || void 0 === VV || VV.reset()
          }
          dispose() {
            var VV, eV;
            this._disposed = !0, null === (VV = this._stopNetworkMetrics) || void 0 === VV || VV.call(this), this._stopNetworkMetrics = void 0, null === (eV = this._core) || void 0 === eV || eV.reset()
          }
          _createHost() {
            const VV = this._instance,
              eV = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !VV.is_capturing()
              },
              _sendMetricsBatch: VV => eV._sendMetricsBatch(VV),
              getLibraryId: () => UV.LIB_NAME,
              getLibraryVersion: () => UV.LIB_VERSION
            }
          }
          _sendMetricsBatch(VV, eV) {
            return new Promise((xV => {
              let JV = !1;
              const YV = VV => {
                  JV || (JV = !0, clearTimeout(UV), xV(VV))
                },
                UV = setTimeout((() => YV({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(jY(jY({
                method: "POST",
                url: this._metricsUrl(),
                data: VV,
                compression: "best-available",
                batchKey: "metrics"
              }, eV && {
                transport: eV
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(VV) {
                  const eV = VV.statusCode;
                  if (eV >= 200 && 300 > eV) YV({
                    kind: "ok"
                  });
                  else if (413 === eV) YV({
                    kind: "too-large"
                  });
                  else if (0 !== eV && 408 !== eV && 429 !== eV && 500 > eV) YV({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${eV}`)
                  });
                  else {
                    var xV;
                    YV({
                      kind: "retry-later",
                      error: null !== (xV = VV.error) && void 0 !== xV ? xV : new Error(`metrics request failed with status ${eV}`)
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
      Kr = {
        webMCP: class {
          constructor(VV) {
            this._instance = VV, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const VV = null == Oe ? void 0 : Oe.modelContext;
            if (!VV || !tx(VV.registerTool)) return;
            const eV = Pr.get(VV);
            if (eV) return eV.instances.add(this._instance), void(this._isPatched = !0);
            const xV = {
                instances: new Set([this._instance])
              },
              JV = VV.registerTool,
              YV = this;
            yv(VV, "registerTool", (VV => {
              const eV = VV;
              return function(VV) {
                let JV = VV;
                for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
                try {
                  JV = YV._wrapTool(VV, xV)
                } catch (xV) {
                  return eV.call(this, VV, ...yV)
                }
                return eV.call(this, JV, ...yV)
              }
            })), VV.registerTool !== JV && (Pr.set(VV, xV), this._isPatched = !0)
          }
          _wrapTool(VV, eV) {
            if (!VV || !tx(VV.execute)) return VV;
            const xV = VV.execute,
              JV = this,
              {
                tool: YV,
                injected: UV
              } = function(VV, eV) {
                const xV = {
                    intent: !1,
                    model: !1
                  },
                  JV = VV.inputSchema;
                if (! function(VV) {
                    return !!Px(VV) || Fx(VV) && Object.keys(VV).every((VV => Ar.has(VV) || VV.startsWith("x-"))) && !0 !== VV.additionalProperties && !Fx(VV.additionalProperties) && (!VV.type || "object" === VV.type) && (!VV.properties || Fx(VV.properties)) && (!VV.required || qx(VV.required))
                  }(JV)) return {
                  tool: zr(VV),
                  injected: xV
                };
                const YV = (null == JV ? void 0 : JV.properties) || {},
                  UV = VV => Mr(YV, VV) || qx(null == JV ? void 0 : JV.required) && JV.required.includes(VV);
                if (xV.intent = eV.intent && !UV("context"), xV.model = eV.model && !UV("llm_model"), !xV.intent && !xV.model) return {
                  tool: zr(VV),
                  injected: xV
                };
                const yV = jY({}, YV),
                  pV = qx(null == JV ? void 0 : JV.required) ? [...JV.required] : [];
                return xV.intent && (yV.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, pV.includes("context") || pV.push("context")), xV.model && (yV.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, pV.includes("llm_model") || pV.push("llm_model")), {
                  tool: zr(VV, jY(jY({}, JV), {}, {
                    type: (null == JV ? void 0 : JV.type) || "object",
                    properties: yV,
                    required: pV
                  })),
                  injected: xV
                }
              }(VV, function(VV) {
                const eV = {
                  intent: !1,
                  model: !1
                };
                for (const xV of VV.instances) {
                  const VV = Xr(xV.config.capture_webmcp);
                  eV.intent || (eV.intent = !0 === (null == VV ? void 0 : VV.intent)), eV.model || (eV.model = !0 === (null == VV ? void 0 : VV.model))
                }
                return eV
              }(eV));
            return Object.defineProperty(YV, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var yV = arguments.length, pV = new Array(yV), QV = 0; QV < yV; QV++) pV[QV] = arguments[QV];
                const nV = new Date,
                  wV = function(VV, eV) {
                    if (!Fx(VV)) return {};
                    try {
                      const xV = eV.intent ? Gr(VV.context, 2048, !0) : void 0,
                        JV = eV.model ? Gr(VV.llm_model, 256) : void 0;
                      return jY(jY({}, xV && "{}" !== xV ? {
                        intent: xV
                      } : {}), JV && "unknown" !== JV.toLowerCase() ? {
                        model: JV
                      } : {})
                    } catch (VV) {
                      return {}
                    }
                  }(pV[0], UV),
                  ZV = function(VV, eV) {
                    const xV = VV[0];
                    if (!Fx(xV)) return VV;
                    try {
                      const JV = eV.intent && Mr(xV, "context"),
                        YV = eV.model && Mr(xV, "llm_model");
                      if (!JV && !YV) return VV;
                      const UV = jY({}, xV);
                      return JV && delete UV.context, YV && delete UV.llm_model, [UV, ...VV.slice(1)]
                    } catch (eV) {
                      return VV
                    }
                  }(pV, UV);
                let vV;
                try {
                  vV = xV.apply(this === YV ? VV : this, ZV)
                } catch (VV) {
                  throw JV._captureToolCall(eV, YV, nV, !0, wV), VV
                }
                return (rV = vV) && "function" == typeof rV.then ? Promise.resolve(vV).then((VV => (JV._captureToolCall(eV, YV, nV, Wr(VV), wV), VV)), (VV => {
                  throw JV._captureToolCall(eV, YV, nV, !0, wV), VV
                })) : (JV._captureToolCall(eV, YV, nV, Wr(vV), wV), vV);
                var rV
              }
            }), YV
          }
          _captureToolCall(VV, eV, xV, JV, YV) {
            const UV = Date.now() - xV.getTime();
            for (const yV of VV.instances) {
              const pV = Xr(yV.config.capture_webmcp);
              if (pV) try {
                yV.capture("$mcp_tool_call", jY(jY({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: eV.name,
                  $mcp_resource_name: eV.name,
                  $mcp_tool_description: eV.description,
                  $mcp_server_name: null == Vx ? void 0 : Vx.hostname,
                  $mcp_duration_ms: UV,
                  $mcp_is_error: JV
                }, pV.intent && YV.intent ? {
                  $mcp_intent: YV.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), pV.model && YV.model ? {
                  $mcp_llm_model: YV.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: xV
                })
              } catch (VV) {
                continue
              }
            }
          }
        }
      };
    sZ.__defaultExtensionClasses = jY({}, jY(jY(jY(jY(jY(jY(jY(jY(jY(jY(jY(jY(jY(jY({}, Rr), gr), Dr), ir), Cr), ar), cr), or), hr), lr), Lr), fr), mr), Kr));
    const Hr = function() {
      UV.SDK_DIST_CHANNEL = "npm";
      const VV = MZ[LZ] = new sZ;
      return function() {
        function VV() {
          VV.done || (VV.done = !0, lw = !1, cy(MZ, (function(VV) {
            VV._dom_loaded()
          })))
        }(null == Oe ? void 0 : Oe.addEventListener) ? "complete" === Oe.readyState ? VV() : uy(Oe, "DOMContentLoaded", VV, {
          capture: !1
        }): Se && Cy.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), VV
    }()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);